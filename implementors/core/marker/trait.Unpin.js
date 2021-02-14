(function() {var implementors = {};
implementors["dualshock"] = [{"text":"impl Unpin for DS4Driver","synthetic":true,"types":[]},{"text":"impl Unpin for DS4","synthetic":true,"types":[]}];
implementors["dualshock_sys"] = [{"text":"impl&lt;Id&gt; Unpin for RawId&lt;Id&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for I16LE","synthetic":true,"types":[]},{"text":"impl Unpin for ConnectionType","synthetic":true,"types":[]},{"text":"impl Unpin for InputReport","synthetic":true,"types":[]},{"text":"impl Unpin for USBReport","synthetic":true,"types":[]},{"text":"impl Unpin for BTSimpleReport","synthetic":true,"types":[]},{"text":"impl Unpin for BTFullReport","synthetic":true,"types":[]},{"text":"impl Unpin for FullReport","synthetic":true,"types":[]},{"text":"impl Unpin for SimpleReport","synthetic":true,"types":[]},{"text":"impl Unpin for Type","synthetic":true,"types":[]},{"text":"impl Unpin for Trigger","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for Buttons&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Dpad","synthetic":true,"types":[]},{"text":"impl Unpin for Gyro","synthetic":true,"types":[]},{"text":"impl Unpin for Accel","synthetic":true,"types":[]},{"text":"impl Unpin for Stick","synthetic":true,"types":[]},{"text":"impl Unpin for BTTrackpad","synthetic":true,"types":[]},{"text":"impl Unpin for USBTrackpad","synthetic":true,"types":[]},{"text":"impl Unpin for TrackpadPacket","synthetic":true,"types":[]},{"text":"impl Unpin for Finger","synthetic":true,"types":[]},{"text":"impl Unpin for FingerCoord","synthetic":true,"types":[]},{"text":"impl Unpin for InputReportId","synthetic":true,"types":[]}];
implementors["gyromouse"] = [{"text":"impl Unpin for ClickType","synthetic":true,"types":[]},{"text":"impl Unpin for GyroMouse","synthetic":true,"types":[]},{"text":"impl Unpin for CameraStick","synthetic":true,"types":[]},{"text":"impl Unpin for FlickStick","synthetic":true,"types":[]},{"text":"impl Unpin for ButtonStick","synthetic":true,"types":[]},{"text":"impl Unpin for FlickStickState","synthetic":true,"types":[]},{"text":"impl Unpin for Layer","synthetic":true,"types":[]},{"text":"impl Unpin for KeyState","synthetic":true,"types":[]},{"text":"impl Unpin for Buttons","synthetic":true,"types":[]},{"text":"impl Unpin for Action","synthetic":true,"types":[]},{"text":"impl Unpin for ExtAction","synthetic":true,"types":[]},{"text":"impl Unpin for KeyStatus","synthetic":true,"types":[]},{"text":"impl Unpin for VirtualKey","synthetic":true,"types":[]},{"text":"impl Unpin for MapKey","synthetic":true,"types":[]},{"text":"impl Unpin for Mouse","synthetic":true,"types":[]},{"text":"impl Unpin for JSMAction","synthetic":true,"types":[]},{"text":"impl Unpin for ActionModifier","synthetic":true,"types":[]},{"text":"impl Unpin for EventModifier","synthetic":true,"types":[]},{"text":"impl Unpin for ActionType","synthetic":true,"types":[]},{"text":"impl Unpin for Key","synthetic":true,"types":[]},{"text":"impl Unpin for SpecialKey","synthetic":true,"types":[]},{"text":"impl Unpin for Cmd","synthetic":true,"types":[]}];
implementors["hid_gamepad"] = [{"text":"impl Unpin for GamepadError","synthetic":true,"types":[]}];
implementors["hid_gamepad_sys"] = [{"text":"impl Unpin for Report","synthetic":true,"types":[]},{"text":"impl Unpin for Motion","synthetic":true,"types":[]},{"text":"impl Unpin for JoyKey","synthetic":true,"types":[]},{"text":"impl Unpin for KeyStatus","synthetic":true,"types":[]}];
implementors["joy_infrared"] = [{"text":"impl Unpin for Mouse","synthetic":true,"types":[]},{"text":"impl Unpin for GUI","synthetic":true,"types":[]},{"text":"impl Unpin for UserEvent","synthetic":true,"types":[]},{"text":"impl Unpin for JoyconCmd","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for BoundBuffer&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Camera","synthetic":true,"types":[]},{"text":"impl Unpin for CameraController","synthetic":true,"types":[]},{"text":"impl Unpin for Controls","synthetic":true,"types":[]},{"text":"impl Unpin for StyleSheet","synthetic":true,"types":[]},{"text":"impl Unpin for Sliderf32","synthetic":true,"types":[]},{"text":"impl Unpin for Message","synthetic":true,"types":[]},{"text":"impl Unpin for Vertex2D","synthetic":true,"types":[]},{"text":"impl Unpin for D2","synthetic":true,"types":[]},{"text":"impl Unpin for D3","synthetic":true,"types":[]},{"text":"impl Unpin for IRCompute","synthetic":true,"types":[]},{"text":"impl Unpin for Texture","synthetic":true,"types":[]},{"text":"impl Unpin for Uniforms","synthetic":true,"types":[]},{"text":"impl Unpin for Lights","synthetic":true,"types":[]},{"text":"impl Unpin for Light","synthetic":true,"types":[]}];
implementors["joycon"] = [{"text":"impl Unpin for Image","synthetic":true,"types":[]},{"text":"impl Unpin for Calibration","synthetic":true,"types":[]},{"text":"impl Unpin for Report","synthetic":true,"types":[]},{"text":"impl Unpin for JoyCon","synthetic":true,"types":[]},{"text":"impl Unpin for IMU","synthetic":true,"types":[]},{"text":"impl Unpin for JoyconDriver","synthetic":true,"types":[]}];
implementors["joycon_sys"] = [{"text":"impl Unpin for U16LE","synthetic":true,"types":[]},{"text":"impl Unpin for I16LE","synthetic":true,"types":[]},{"text":"impl Unpin for U32LE","synthetic":true,"types":[]},{"text":"impl&lt;Id&gt; Unpin for RawId&lt;Id&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for InputReportId","synthetic":true,"types":[]},{"text":"impl Unpin for SubcommandId","synthetic":true,"types":[]},{"text":"impl Unpin for Bool","synthetic":true,"types":[]},{"text":"impl Unpin for Frame","synthetic":true,"types":[]},{"text":"impl Unpin for Sensitivity","synthetic":true,"types":[]},{"text":"impl Unpin for IMUMode","synthetic":true,"types":[]},{"text":"impl Unpin for GyroSens","synthetic":true,"types":[]},{"text":"impl Unpin for AccSens","synthetic":true,"types":[]},{"text":"impl Unpin for GyroPerfRate","synthetic":true,"types":[]},{"text":"impl Unpin for AccAntiAliasing","synthetic":true,"types":[]},{"text":"impl Unpin for InputReport","synthetic":true,"types":[]},{"text":"impl Unpin for NormalInputReport","synthetic":true,"types":[]},{"text":"impl Unpin for StandardInputReport","synthetic":true,"types":[]},{"text":"impl Unpin for DeviceStatus","synthetic":true,"types":[]},{"text":"impl Unpin for ButtonsStatus","synthetic":true,"types":[]},{"text":"impl Unpin for RightButtons","synthetic":true,"types":[]},{"text":"impl Unpin for MiddleButtons","synthetic":true,"types":[]},{"text":"impl Unpin for LeftButtons","synthetic":true,"types":[]},{"text":"impl Unpin for Stick","synthetic":true,"types":[]},{"text":"impl Unpin for SubcommandReply","synthetic":true,"types":[]},{"text":"impl Unpin for Ack","synthetic":true,"types":[]},{"text":"impl Unpin for DeviceInfo","synthetic":true,"types":[]},{"text":"impl Unpin for FirmwareVersion","synthetic":true,"types":[]},{"text":"impl Unpin for MACAddress","synthetic":true,"types":[]},{"text":"impl Unpin for IMUMCU","synthetic":true,"types":[]},{"text":"impl Unpin for DeviceType","synthetic":true,"types":[]},{"text":"impl Unpin for BatteryLevel","synthetic":true,"types":[]},{"text":"impl Unpin for Button","synthetic":true,"types":[]},{"text":"impl Unpin for WhichController","synthetic":true,"types":[]},{"text":"impl Unpin for UseSPIColors","synthetic":true,"types":[]},{"text":"impl Unpin for PlayerLights","synthetic":true,"types":[]},{"text":"impl Unpin for HomeLight","synthetic":true,"types":[]},{"text":"impl Unpin for PlayerLight","synthetic":true,"types":[]},{"text":"impl Unpin for MCUReport","synthetic":true,"types":[]},{"text":"impl Unpin for MCUStatus","synthetic":true,"types":[]},{"text":"impl Unpin for MCUCommand","synthetic":true,"types":[]},{"text":"impl Unpin for MCUCommandCRC","synthetic":true,"types":[]},{"text":"impl Unpin for MCURequest","synthetic":true,"types":[]},{"text":"impl Unpin for MCURequestCRC","synthetic":true,"types":[]},{"text":"impl Unpin for MCUReportId","synthetic":true,"types":[]},{"text":"impl Unpin for MCUCommandId","synthetic":true,"types":[]},{"text":"impl Unpin for MCUSubCommandId","synthetic":true,"types":[]},{"text":"impl Unpin for MCUMode","synthetic":true,"types":[]},{"text":"impl Unpin for MCURequestId","synthetic":true,"types":[]},{"text":"impl Unpin for Register","synthetic":true,"types":[]},{"text":"impl Unpin for Leds","synthetic":true,"types":[]},{"text":"impl Unpin for IRRequest","synthetic":true,"types":[]},{"text":"impl Unpin for IRAckRequestPacket","synthetic":true,"types":[]},{"text":"impl Unpin for IRReadRegisters","synthetic":true,"types":[]},{"text":"impl Unpin for MCUIRModeData","synthetic":true,"types":[]},{"text":"impl Unpin for IRStatus","synthetic":true,"types":[]},{"text":"impl Unpin for IRRegistersSlice","synthetic":true,"types":[]},{"text":"impl Unpin for IRData","synthetic":true,"types":[]},{"text":"impl Unpin for MCURegisters","synthetic":true,"types":[]},{"text":"impl Unpin for MCUSetReg","synthetic":true,"types":[]},{"text":"impl Unpin for Resolution","synthetic":true,"types":[]},{"text":"impl Unpin for ExposureMode","synthetic":true,"types":[]},{"text":"impl Unpin for ExternalLightFilter","synthetic":true,"types":[]},{"text":"impl Unpin for Flip","synthetic":true,"types":[]},{"text":"impl Unpin for IRRequestId","synthetic":true,"types":[]},{"text":"impl Unpin for MCUIRMode","synthetic":true,"types":[]},{"text":"impl Unpin for OutputReport","synthetic":true,"types":[]},{"text":"impl Unpin for SubcommandRequest","synthetic":true,"types":[]},{"text":"impl Unpin for RumbleData","synthetic":true,"types":[]},{"text":"impl Unpin for RumbleSide","synthetic":true,"types":[]},{"text":"impl Unpin for OutputReportId","synthetic":true,"types":[]},{"text":"impl Unpin for AccessoryCommand","synthetic":true,"types":[]},{"text":"impl Unpin for AccessoryResponse","synthetic":true,"types":[]},{"text":"impl Unpin for OfflineSteps","synthetic":true,"types":[]},{"text":"impl Unpin for AccessoryCommandId","synthetic":true,"types":[]},{"text":"impl Unpin for AccessoryType","synthetic":true,"types":[]},{"text":"impl Unpin for RingconItemId","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl Unpin for SPIRange","synthetic":true,"types":[]},{"text":"impl Unpin for WrongRangeError","synthetic":true,"types":[]},{"text":"impl Unpin for SPIReadRequest","synthetic":true,"types":[]},{"text":"impl Unpin for SPIWriteRequest","synthetic":true,"types":[]},{"text":"impl Unpin for SPIReadResult","synthetic":true,"types":[]},{"text":"impl Unpin for SPIWriteResult","synthetic":true,"types":[]},{"text":"impl Unpin for SticksCalibration","synthetic":true,"types":[]},{"text":"impl Unpin for UserSticksCalibration","synthetic":true,"types":[]},{"text":"impl Unpin for LeftStickCalibration","synthetic":true,"types":[]},{"text":"impl Unpin for RightStickCalibration","synthetic":true,"types":[]},{"text":"impl Unpin for UserStickCalibration","synthetic":true,"types":[]},{"text":"impl Unpin for SensorCalibration","synthetic":true,"types":[]},{"text":"impl Unpin for UserSensorCalibration","synthetic":true,"types":[]},{"text":"impl Unpin for Color","synthetic":true,"types":[]},{"text":"impl Unpin for ControllerColor","synthetic":true,"types":[]}];
implementors["joytk"] = [{"text":"impl Unpin for Opts","synthetic":true,"types":[]},{"text":"impl Unpin for Calibrate","synthetic":true,"types":[]},{"text":"impl Unpin for Set","synthetic":true,"types":[]},{"text":"impl Unpin for SetColor","synthetic":true,"types":[]},{"text":"impl Unpin for Ringcon","synthetic":true,"types":[]},{"text":"impl Unpin for Relay","synthetic":true,"types":[]},{"text":"impl Unpin for SubCommand","synthetic":true,"types":[]},{"text":"impl Unpin for CalibrateE","synthetic":true,"types":[]},{"text":"impl Unpin for SetE","synthetic":true,"types":[]},{"text":"impl Unpin for RingconE","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()