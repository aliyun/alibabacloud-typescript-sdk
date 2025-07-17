// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumExceptionStackRequest extends $dara.Model {
  /**
   * @remarks
   * The binary images, which represent all executable files loaded into the process address space when a crash occurs.
   * 
   * @example
   * iOSDemo:arm64%3B1489F4D3-6DE2-300C-90E9-E1B869675351%3B0x0000000104064000\\nAlibabaCloudRUM:arm64%3BAB7B3A8E-6CEE-325D-BCBB-8DA50E61804F%3B0x0000000106660000\\nlibdispatch.dylib:arm
   */
  exceptionBinaryImages?: string;
  /**
   * @remarks
   * The exception stack information. Set the value to a JSON string. call_stack.info represents the stack information, call_stack.thread.name represents the thread name, and call_stack.thread.id represents the thread ID. This parameter is exactly the same as the exception.stack parameter in the logstore-rum Logstore of Simple Log Service.
   * 
   * @example
   * [
   * {
   *     "call_stack.info": "libsystem_kernel.dylib  0x00000001f1ce9178 0x00000001f1ce8000 + 4472\\r\\nlibsystem_kernel.dylib  0x00000001f1ce8f10 0x00000001f1ce8000 + 3856\\r\\nlibsystem_kernel.dylib  0x00000001f1ced718 0x00000001f1ce8000 + 22296\\r\\nAlibabaCloudRUM  0x0000000106711af4 0x0000000106660000 + 727796\\r\\nlibsystem_pthread.dylib  0x00000002146744d4 0x0000000214672000 + 9428",
   *     "call_stack.thread.name": "#3 BRSCrash Exception Handler (Secondary)",
   *     "call_stack.thread.id": "16643"
   *   }
   * ]
   */
  exceptionStack?: string;
  /**
   * @remarks
   * The ID of the exception thread.
   * 
   * @example
   * 16643
   */
  exceptionThreadId?: string;
  /**
   * @remarks
   * Extra information about iOS symbol tables. You can leave this parameter empty.
   * 
   * @example
   * GraphicsServices:system/GraphicsServices/85419099-269B-336D-86B4-0D52D0FF6923/GraphicsServices;WebCore:system/WebCore/BF44A3F4-85D4-38C8-BF26-197F06ADE273/WebCore
   */
  extraInfo?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * atxxxxzkcf@d8deedfa9bf****
   */
  pid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The parsing type. Valid values:
   * 
   * *   js: Parses JavaScript errors.
   * *   sym: Parses PC errors.
   * *   har: Parses HarmonyOS errors.
   * *   dSYM: Parses iOS errors.
   * *   so: Parses Android errors.
   * 
   * @example
   * source-map
   */
  sourcemapType?: string;
  static names(): { [key: string]: string } {
    return {
      exceptionBinaryImages: 'ExceptionBinaryImages',
      exceptionStack: 'ExceptionStack',
      exceptionThreadId: 'ExceptionThreadId',
      extraInfo: 'ExtraInfo',
      pid: 'Pid',
      regionId: 'RegionId',
      sourcemapType: 'SourcemapType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionBinaryImages: 'string',
      exceptionStack: 'string',
      exceptionThreadId: 'string',
      extraInfo: 'string',
      pid: 'string',
      regionId: 'string',
      sourcemapType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

