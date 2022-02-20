//! Helper crate for interacting with a JoyCon and Switch Pro Controller via HID.
//!
//! The main structs are [InputReport](input/struct.InputReport.html) and
//! [OutputReport](output/struct.OutputReport.html).

#[macro_use]
extern crate num_derive;

pub mod accessory;
pub mod common;
pub mod imu;
pub mod input;
pub mod light;
pub mod mcu;
pub mod output;
pub mod spi;

pub use common::*;
pub use input::InputReport;
pub use output::OutputReport;

#[macro_export]
macro_rules! raw_enum {
    (
        $(#[pre_id $preid:ident $preidmut:ident: $preidty:ty])?
        #[id: $tyid:ident]
        $(#[post_id $postid:ident $postidmut:ident: $postidty:ty])?
        #[union: $union:ident]
        #[struct: $struct:ident]
        $(#[raw $rawty:ty])?
        $(#[field $field:ident $fieldmut:ident: $fieldty:ty])*
        pub enum $name:ident {
            $($varname:ident $varnamemut:ident: $id:ident = $var:ty),+
        }
    ) => {
        #[repr(C, packed)]
        #[derive(Copy, Clone)]
        pub struct $struct {
            $($preid: $preidty,)?
            id: RawId<$tyid>,
            $($postid: $postidty,)?
            u: $union,
        }
        #[repr(C, packed)]
        #[derive(Copy, Clone)]
        union $union {
            $($varname: $var,)*
            $(raw: $rawty,)?
            $($field: $fieldty,)*
        }
        #[derive(Copy, Clone, Debug)]
        pub enum $name {
            $($id($var)),*
        }

        impl ::std::convert::TryFrom<$struct> for $name {
            type Error = $struct;
            fn try_from(x: $struct) -> Result<Self, Self::Error> {
                match x.id.try_into() {
                    $(Some($tyid::$id) => Ok(Self::$id(unsafe {x.u.$varname}))),*,
                    None => Err(x),
                }
            }
        }

        impl ::std::convert::From<$name> for $struct {
            fn from(x: $name) -> Self {
                let (id, u) = match x {
                    $($name::$id(data) => (
                        $tyid::$id.into(),
                        $union { $varname: data }
                    )),*,
                };
                $struct {
                    $($preid: ::std::default::Default::default(),)?
                    id,
                    $($postid: ::std::default::Default::default(),)?
                    u,
                }
            }
        }

        impl $struct {
            pub fn new() -> Self {
                unsafe { ::std::mem::zeroed() }
            }

            pub fn id(&self) -> RawId<$tyid> {
                self.id
            }

            $(
                pub fn $varname(&self) -> Option<&$var> {
                    if self.id == $tyid::$id {
                        Some(unsafe { &self.u.$varname })
                    } else {
                        None
                    }
                }

                pub fn $varnamemut(&mut self) -> Option<&mut $var> {
                    if self.id == $tyid::$id {
                        Some(unsafe { &mut self.u.$varname })
                    } else {
                        None
                    }
                }
            )*
            $(
                pub fn $preid(&self) -> &$preidty {
                    &self.$preid
                }

                pub fn $preidmut(&mut self) -> &mut $preidty {
                    &mut self.$preid
                }
            )?
            $(
                pub fn $postid(&self) -> &$postidty {
                    &self.$postid
                }

                pub fn $postidmut(&mut self) -> &mut $postidty {
                    &mut self.$postid
                }
            )?
            $(
                pub fn $field(&self) -> &$fieldty {
                    unsafe { &self.u.$field}
                }

                pub fn $fieldmut(&mut self) -> &mut $fieldty {
                    unsafe { &mut self.u.$field}
                }
            )*
        }

        impl ::std::fmt::Debug for $struct {
            fn fmt(&self, f: &mut ::std::fmt::Formatter) -> std::fmt::Result {
                let mut out = f.debug_struct(stringify!($struct));
                match self.id.try_into() {
                    $(Some($tyid::$id) => {
                        out.field(::std::stringify!($varname), unsafe { &self.u.$varname });
                    }),*
                    None => {
                        out.field("id", &self.id);
                        $(out.field("raw", unsafe { &self.u.raw as &$rawty });)?
                    }
                };
                out.finish()
            }
        }
    };
}
