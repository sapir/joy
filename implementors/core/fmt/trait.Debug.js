(function() {var implementors = {};
implementors["dualshock_sys"] = [{"text":"impl Debug for InputReport","synthetic":false,"types":[]},{"text":"impl Debug for InputReportId","synthetic":false,"types":[]},{"text":"impl Debug for USBReport","synthetic":false,"types":[]},{"text":"impl Debug for BTSimpleReport","synthetic":false,"types":[]},{"text":"impl Debug for BTFullReport","synthetic":false,"types":[]},{"text":"impl Debug for FullReport","synthetic":false,"types":[]},{"text":"impl Debug for SimpleReport","synthetic":false,"types":[]},{"text":"impl Debug for Type","synthetic":false,"types":[]},{"text":"impl Debug for Trigger","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;AsMut&lt;[u8]&gt; + AsRef&lt;[u8]&gt; + Debug&gt; Debug for Buttons&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Dpad","synthetic":false,"types":[]},{"text":"impl Debug for Gyro","synthetic":false,"types":[]},{"text":"impl Debug for Accel","synthetic":false,"types":[]},{"text":"impl Debug for Stick","synthetic":false,"types":[]},{"text":"impl Debug for BTTrackpad","synthetic":false,"types":[]},{"text":"impl Debug for USBTrackpad","synthetic":false,"types":[]},{"text":"impl Debug for TrackpadPacket","synthetic":false,"types":[]},{"text":"impl Debug for Finger","synthetic":false,"types":[]},{"text":"impl Debug for FingerCoord","synthetic":false,"types":[]},{"text":"impl Debug for ConnectionType","synthetic":false,"types":[]},{"text":"impl&lt;Id:&nbsp;Debug + FromPrimitive + Copy&gt; Debug for RawId&lt;Id&gt;","synthetic":false,"types":[]},{"text":"impl Debug for I16LE","synthetic":false,"types":[]}];
implementors["gyromouse"] = [{"text":"impl Debug for FlickStickState","synthetic":false,"types":[]},{"text":"impl Debug for FlickStick","synthetic":false,"types":[]},{"text":"impl Debug for Action","synthetic":false,"types":[]},{"text":"impl Debug for ExtAction","synthetic":false,"types":[]},{"text":"impl Debug for KeyStatus","synthetic":false,"types":[]},{"text":"impl Debug for Layer","synthetic":false,"types":[]},{"text":"impl Debug for KeyState","synthetic":false,"types":[]},{"text":"impl Debug for VirtualKey","synthetic":false,"types":[]},{"text":"impl Debug for MapKey","synthetic":false,"types":[]},{"text":"impl Debug for Buttons","synthetic":false,"types":[]},{"text":"impl Debug for Mouse","synthetic":false,"types":[]},{"text":"impl Debug for ActionModifier","synthetic":false,"types":[]},{"text":"impl Debug for EventModifier","synthetic":false,"types":[]},{"text":"impl Debug for JSMAction","synthetic":false,"types":[]},{"text":"impl Debug for ActionType","synthetic":false,"types":[]},{"text":"impl Debug for Key","synthetic":false,"types":[]},{"text":"impl Debug for SpecialKey","synthetic":false,"types":[]},{"text":"impl Debug for Cmd","synthetic":false,"types":[]},{"text":"impl Debug for ClickType","synthetic":false,"types":[]}];
implementors["hid_gamepad"] = [{"text":"impl Debug for GamepadError","synthetic":false,"types":[]}];
implementors["hid_gamepad_sys"] = [{"text":"impl Debug for JoyKey","synthetic":false,"types":[]},{"text":"impl Debug for KeyStatus","synthetic":false,"types":[]},{"text":"impl Debug for Report","synthetic":false,"types":[]},{"text":"impl Debug for Motion","synthetic":false,"types":[]}];
implementors["joy_infrared"] = [{"text":"impl Debug for Mouse","synthetic":false,"types":[]},{"text":"impl Debug for Message","synthetic":false,"types":[]},{"text":"impl Debug for Uniforms","synthetic":false,"types":[]},{"text":"impl Debug for Lights","synthetic":false,"types":[]},{"text":"impl Debug for Light","synthetic":false,"types":[]}];
implementors["joycon"] = [{"text":"impl Debug for Calibration","synthetic":false,"types":[]},{"text":"impl Debug for Report","synthetic":false,"types":[]},{"text":"impl Debug for JoyCon","synthetic":false,"types":[]},{"text":"impl Debug for IMU","synthetic":false,"types":[]}];
implementors["joycon_sys"] = [{"text":"impl Debug for AccessoryCommandId","synthetic":false,"types":[]},{"text":"impl Debug for AccessoryType","synthetic":false,"types":[]},{"text":"impl Debug for RingconItemId","synthetic":false,"types":[]},{"text":"impl Debug for AccessoryCommand","synthetic":false,"types":[]},{"text":"impl Debug for AccessoryResponse","synthetic":false,"types":[]},{"text":"impl Debug for OfflineSteps","synthetic":false,"types":[]},{"text":"impl Debug for Error","synthetic":false,"types":[]},{"text":"impl Debug for InputReportId","synthetic":false,"types":[]},{"text":"impl Debug for SubcommandId","synthetic":false,"types":[]},{"text":"impl Debug for U16LE","synthetic":false,"types":[]},{"text":"impl Debug for I16LE","synthetic":false,"types":[]},{"text":"impl Debug for U32LE","synthetic":false,"types":[]},{"text":"impl&lt;Id:&nbsp;Debug + FromPrimitive + Copy&gt; Debug for RawId&lt;Id&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Bool","synthetic":false,"types":[]},{"text":"impl Debug for IMUMode","synthetic":false,"types":[]},{"text":"impl Debug for Frame","synthetic":false,"types":[]},{"text":"impl Debug for Sensitivity","synthetic":false,"types":[]},{"text":"impl Debug for GyroSens","synthetic":false,"types":[]},{"text":"impl Debug for AccSens","synthetic":false,"types":[]},{"text":"impl Debug for GyroPerfRate","synthetic":false,"types":[]},{"text":"impl Debug for AccAntiAliasing","synthetic":false,"types":[]},{"text":"impl Debug for InputReportEnum","synthetic":false,"types":[]},{"text":"impl Debug for InputReport","synthetic":false,"types":[]},{"text":"impl Debug for NormalInputReport","synthetic":false,"types":[]},{"text":"impl Debug for StandardInputReport","synthetic":false,"types":[]},{"text":"impl Debug for DeviceStatus","synthetic":false,"types":[]},{"text":"impl Debug for DeviceType","synthetic":false,"types":[]},{"text":"impl Debug for BatteryLevel","synthetic":false,"types":[]},{"text":"impl Debug for ButtonsStatus","synthetic":false,"types":[]},{"text":"impl Debug for RightButtons","synthetic":false,"types":[]},{"text":"impl Debug for MiddleButtons","synthetic":false,"types":[]},{"text":"impl Debug for LeftButtons","synthetic":false,"types":[]},{"text":"impl Debug for Stick","synthetic":false,"types":[]},{"text":"impl Debug for SubcommandReplyEnum","synthetic":false,"types":[]},{"text":"impl Debug for SubcommandReply","synthetic":false,"types":[]},{"text":"impl Debug for Ack","synthetic":false,"types":[]},{"text":"impl Debug for DeviceInfo","synthetic":false,"types":[]},{"text":"impl Debug for FirmwareVersion","synthetic":false,"types":[]},{"text":"impl Debug for MACAddress","synthetic":false,"types":[]},{"text":"impl Debug for WhichController","synthetic":false,"types":[]},{"text":"impl Debug for UseSPIColors","synthetic":false,"types":[]},{"text":"impl Debug for IMUMCU","synthetic":false,"types":[]},{"text":"impl Debug for PlayerLights","synthetic":false,"types":[]},{"text":"impl Debug for PlayerLight","synthetic":false,"types":[]},{"text":"impl Debug for HomeLight","synthetic":false,"types":[]},{"text":"impl Debug for IRRequestId","synthetic":false,"types":[]},{"text":"impl Debug for IRRequestEnum","synthetic":false,"types":[]},{"text":"impl Debug for IRRequest","synthetic":false,"types":[]},{"text":"impl Debug for IRAckRequestPacket","synthetic":false,"types":[]},{"text":"impl Debug for IRReadRegisters","synthetic":false,"types":[]},{"text":"impl Debug for MCUIRMode","synthetic":false,"types":[]},{"text":"impl Debug for MCUIRModeData","synthetic":false,"types":[]},{"text":"impl Debug for IRStatus","synthetic":false,"types":[]},{"text":"impl Debug for IRRegistersSlice","synthetic":false,"types":[]},{"text":"impl Debug for IRData","synthetic":false,"types":[]},{"text":"impl Debug for MCURegisters","synthetic":false,"types":[]},{"text":"impl Debug for Register","synthetic":false,"types":[]},{"text":"impl Debug for Resolution","synthetic":false,"types":[]},{"text":"impl Debug for ExposureMode","synthetic":false,"types":[]},{"text":"impl Debug for ExternalLightFilter","synthetic":false,"types":[]},{"text":"impl Debug for Flip","synthetic":false,"types":[]},{"text":"impl Debug for Leds","synthetic":false,"types":[]},{"text":"impl Debug for MCUReportId","synthetic":false,"types":[]},{"text":"impl Debug for MCUReportEnum","synthetic":false,"types":[]},{"text":"impl Debug for MCUReport","synthetic":false,"types":[]},{"text":"impl Debug for MCUStatus","synthetic":false,"types":[]},{"text":"impl Debug for MCUCommandId","synthetic":false,"types":[]},{"text":"impl Debug for MCUSubCommandId","synthetic":false,"types":[]},{"text":"impl Debug for MCUCommand","synthetic":false,"types":[]},{"text":"impl Debug for MCUCommandCRC","synthetic":false,"types":[]},{"text":"impl Debug for MCUMode","synthetic":false,"types":[]},{"text":"impl Debug for MCURequestId","synthetic":false,"types":[]},{"text":"impl Debug for MCURequestEnum","synthetic":false,"types":[]},{"text":"impl Debug for MCURequest","synthetic":false,"types":[]},{"text":"impl Debug for OutputReportId","synthetic":false,"types":[]},{"text":"impl Debug for OutputReportEnum","synthetic":false,"types":[]},{"text":"impl Debug for OutputReport","synthetic":false,"types":[]},{"text":"impl Debug for Rumble","synthetic":false,"types":[]},{"text":"impl Debug for SubcommandRequestEnum","synthetic":false,"types":[]},{"text":"impl Debug for SubcommandRequest","synthetic":false,"types":[]},{"text":"impl Debug for RumbleData","synthetic":false,"types":[]},{"text":"impl Debug for RumbleSide","synthetic":false,"types":[]},{"text":"impl Debug for SPIRange","synthetic":false,"types":[]},{"text":"impl Debug for WrongRangeError","synthetic":false,"types":[]},{"text":"impl Debug for SPIReadRequest","synthetic":false,"types":[]},{"text":"impl Debug for SPIWriteRequest","synthetic":false,"types":[]},{"text":"impl Debug for SPIReadResult","synthetic":false,"types":[]},{"text":"impl Debug for SPIWriteResult","synthetic":false,"types":[]},{"text":"impl Debug for SticksCalibration","synthetic":false,"types":[]},{"text":"impl Debug for UserSticksCalibration","synthetic":false,"types":[]},{"text":"impl Debug for LeftStickCalibration","synthetic":false,"types":[]},{"text":"impl Debug for RightStickCalibration","synthetic":false,"types":[]},{"text":"impl Debug for UserStickCalibration","synthetic":false,"types":[]},{"text":"impl Debug for SensorCalibration","synthetic":false,"types":[]},{"text":"impl Debug for UserSensorCalibration","synthetic":false,"types":[]},{"text":"impl Debug for Color","synthetic":false,"types":[]},{"text":"impl Debug for ControllerColor","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()