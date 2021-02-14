(function() {var implementors = {};
implementors["dualshock_sys"] = [{"text":"impl Clone for InputReport","synthetic":false,"types":[]},{"text":"impl Clone for InputReportId","synthetic":false,"types":[]},{"text":"impl Clone for USBReport","synthetic":false,"types":[]},{"text":"impl Clone for BTSimpleReport","synthetic":false,"types":[]},{"text":"impl Clone for BTFullReport","synthetic":false,"types":[]},{"text":"impl Clone for FullReport","synthetic":false,"types":[]},{"text":"impl Clone for SimpleReport","synthetic":false,"types":[]},{"text":"impl Clone for Type","synthetic":false,"types":[]},{"text":"impl Clone for Trigger","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for Buttons&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Dpad","synthetic":false,"types":[]},{"text":"impl Clone for Gyro","synthetic":false,"types":[]},{"text":"impl Clone for Accel","synthetic":false,"types":[]},{"text":"impl Clone for Stick","synthetic":false,"types":[]},{"text":"impl Clone for BTTrackpad","synthetic":false,"types":[]},{"text":"impl Clone for USBTrackpad","synthetic":false,"types":[]},{"text":"impl Clone for TrackpadPacket","synthetic":false,"types":[]},{"text":"impl Clone for Finger","synthetic":false,"types":[]},{"text":"impl Clone for FingerCoord","synthetic":false,"types":[]},{"text":"impl Clone for ConnectionType","synthetic":false,"types":[]},{"text":"impl&lt;Id:&nbsp;Clone&gt; Clone for RawId&lt;Id&gt;","synthetic":false,"types":[]},{"text":"impl Clone for I16LE","synthetic":false,"types":[]}];
implementors["gyromouse"] = [{"text":"impl Clone for Action","synthetic":false,"types":[]},{"text":"impl Clone for ExtAction","synthetic":false,"types":[]},{"text":"impl Clone for KeyStatus","synthetic":false,"types":[]},{"text":"impl Clone for Layer","synthetic":false,"types":[]},{"text":"impl Clone for KeyState","synthetic":false,"types":[]},{"text":"impl Clone for VirtualKey","synthetic":false,"types":[]},{"text":"impl Clone for MapKey","synthetic":false,"types":[]},{"text":"impl Clone for Buttons","synthetic":false,"types":[]},{"text":"impl Clone for ActionModifier","synthetic":false,"types":[]},{"text":"impl Clone for EventModifier","synthetic":false,"types":[]},{"text":"impl Clone for JSMAction","synthetic":false,"types":[]},{"text":"impl Clone for ActionType","synthetic":false,"types":[]},{"text":"impl Clone for Key","synthetic":false,"types":[]},{"text":"impl Clone for SpecialKey","synthetic":false,"types":[]},{"text":"impl Clone for Cmd","synthetic":false,"types":[]},{"text":"impl Clone for ClickType","synthetic":false,"types":[]}];
implementors["hid_gamepad_sys"] = [{"text":"impl Clone for JoyKey","synthetic":false,"types":[]},{"text":"impl Clone for KeyStatus","synthetic":false,"types":[]},{"text":"impl Clone for Report","synthetic":false,"types":[]},{"text":"impl Clone for Motion","synthetic":false,"types":[]}];
implementors["joy_infrared"] = [{"text":"impl Clone for Message","synthetic":false,"types":[]},{"text":"impl Clone for Vertex2D","synthetic":false,"types":[]},{"text":"impl Clone for Uniforms","synthetic":false,"types":[]},{"text":"impl Clone for Lights","synthetic":false,"types":[]},{"text":"impl Clone for Light","synthetic":false,"types":[]}];
implementors["joycon"] = [{"text":"impl Clone for Calibration","synthetic":false,"types":[]},{"text":"impl Clone for Report","synthetic":false,"types":[]},{"text":"impl Clone for IMU","synthetic":false,"types":[]}];
implementors["joycon_sys"] = [{"text":"impl Clone for InputReportId","synthetic":false,"types":[]},{"text":"impl Clone for SubcommandId","synthetic":false,"types":[]},{"text":"impl Clone for U16LE","synthetic":false,"types":[]},{"text":"impl Clone for I16LE","synthetic":false,"types":[]},{"text":"impl Clone for U32LE","synthetic":false,"types":[]},{"text":"impl&lt;Id:&nbsp;Clone&gt; Clone for RawId&lt;Id&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Bool","synthetic":false,"types":[]},{"text":"impl Clone for IMUMode","synthetic":false,"types":[]},{"text":"impl Clone for Frame","synthetic":false,"types":[]},{"text":"impl Clone for Sensitivity","synthetic":false,"types":[]},{"text":"impl Clone for GyroSens","synthetic":false,"types":[]},{"text":"impl Clone for AccSens","synthetic":false,"types":[]},{"text":"impl Clone for GyroPerfRate","synthetic":false,"types":[]},{"text":"impl Clone for AccAntiAliasing","synthetic":false,"types":[]},{"text":"impl Clone for InputReport","synthetic":false,"types":[]},{"text":"impl Clone for NormalInputReport","synthetic":false,"types":[]},{"text":"impl Clone for StandardInputReport","synthetic":false,"types":[]},{"text":"impl Clone for DeviceStatus","synthetic":false,"types":[]},{"text":"impl Clone for DeviceType","synthetic":false,"types":[]},{"text":"impl Clone for BatteryLevel","synthetic":false,"types":[]},{"text":"impl Clone for ButtonsStatus","synthetic":false,"types":[]},{"text":"impl Clone for RightButtons","synthetic":false,"types":[]},{"text":"impl Clone for MiddleButtons","synthetic":false,"types":[]},{"text":"impl Clone for LeftButtons","synthetic":false,"types":[]},{"text":"impl Clone for Stick","synthetic":false,"types":[]},{"text":"impl Clone for SubcommandReply","synthetic":false,"types":[]},{"text":"impl Clone for Ack","synthetic":false,"types":[]},{"text":"impl Clone for DeviceInfo","synthetic":false,"types":[]},{"text":"impl Clone for FirmwareVersion","synthetic":false,"types":[]},{"text":"impl Clone for MACAddress","synthetic":false,"types":[]},{"text":"impl Clone for WhichController","synthetic":false,"types":[]},{"text":"impl Clone for UseSPIColors","synthetic":false,"types":[]},{"text":"impl Clone for IMUMCU","synthetic":false,"types":[]},{"text":"impl Clone for PlayerLights","synthetic":false,"types":[]},{"text":"impl Clone for PlayerLight","synthetic":false,"types":[]},{"text":"impl Clone for HomeLight","synthetic":false,"types":[]},{"text":"impl Clone for IRRequest","synthetic":false,"types":[]},{"text":"impl Clone for IRRequestId","synthetic":false,"types":[]},{"text":"impl Clone for IRAckRequestPacket","synthetic":false,"types":[]},{"text":"impl Clone for IRReadRegisters","synthetic":false,"types":[]},{"text":"impl Clone for MCUIRMode","synthetic":false,"types":[]},{"text":"impl Clone for MCUIRModeData","synthetic":false,"types":[]},{"text":"impl Clone for IRStatus","synthetic":false,"types":[]},{"text":"impl Clone for IRRegistersSlice","synthetic":false,"types":[]},{"text":"impl Clone for IRData","synthetic":false,"types":[]},{"text":"impl Clone for MCURegisters","synthetic":false,"types":[]},{"text":"impl Clone for MCUSetReg","synthetic":false,"types":[]},{"text":"impl Clone for Register","synthetic":false,"types":[]},{"text":"impl Clone for Resolution","synthetic":false,"types":[]},{"text":"impl Clone for ExposureMode","synthetic":false,"types":[]},{"text":"impl Clone for ExternalLightFilter","synthetic":false,"types":[]},{"text":"impl Clone for Flip","synthetic":false,"types":[]},{"text":"impl Clone for Leds","synthetic":false,"types":[]},{"text":"impl Clone for MCUReportId","synthetic":false,"types":[]},{"text":"impl Clone for MCUReport","synthetic":false,"types":[]},{"text":"impl Clone for MCUStatus","synthetic":false,"types":[]},{"text":"impl Clone for MCUCommandId","synthetic":false,"types":[]},{"text":"impl Clone for MCUSubCommandId","synthetic":false,"types":[]},{"text":"impl Clone for MCUCommand","synthetic":false,"types":[]},{"text":"impl Clone for MCUCommandCRC","synthetic":false,"types":[]},{"text":"impl Clone for MCUMode","synthetic":false,"types":[]},{"text":"impl Clone for MCURequestId","synthetic":false,"types":[]},{"text":"impl Clone for MCURequest","synthetic":false,"types":[]},{"text":"impl Clone for MCURequestCRC","synthetic":false,"types":[]},{"text":"impl Clone for OutputReportId","synthetic":false,"types":[]},{"text":"impl Clone for OutputReport","synthetic":false,"types":[]},{"text":"impl Clone for SubcommandRequest","synthetic":false,"types":[]},{"text":"impl Clone for RumbleData","synthetic":false,"types":[]},{"text":"impl Clone for RumbleSide","synthetic":false,"types":[]},{"text":"impl Clone for AccessoryCommandId","synthetic":false,"types":[]},{"text":"impl Clone for AccessoryType","synthetic":false,"types":[]},{"text":"impl Clone for RingconItemId","synthetic":false,"types":[]},{"text":"impl Clone for AccessoryCommand","synthetic":false,"types":[]},{"text":"impl Clone for AccessoryResponse","synthetic":false,"types":[]},{"text":"impl Clone for OfflineSteps","synthetic":false,"types":[]},{"text":"impl Clone for Error","synthetic":false,"types":[]},{"text":"impl Clone for SPIRange","synthetic":false,"types":[]},{"text":"impl Clone for WrongRangeError","synthetic":false,"types":[]},{"text":"impl Clone for SPIReadRequest","synthetic":false,"types":[]},{"text":"impl Clone for SPIWriteRequest","synthetic":false,"types":[]},{"text":"impl Clone for SPIReadResult","synthetic":false,"types":[]},{"text":"impl Clone for SPIWriteResult","synthetic":false,"types":[]},{"text":"impl Clone for SticksCalibration","synthetic":false,"types":[]},{"text":"impl Clone for UserSticksCalibration","synthetic":false,"types":[]},{"text":"impl Clone for LeftStickCalibration","synthetic":false,"types":[]},{"text":"impl Clone for RightStickCalibration","synthetic":false,"types":[]},{"text":"impl Clone for UserStickCalibration","synthetic":false,"types":[]},{"text":"impl Clone for SensorCalibration","synthetic":false,"types":[]},{"text":"impl Clone for UserSensorCalibration","synthetic":false,"types":[]},{"text":"impl Clone for Color","synthetic":false,"types":[]},{"text":"impl Clone for ControllerColor","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()