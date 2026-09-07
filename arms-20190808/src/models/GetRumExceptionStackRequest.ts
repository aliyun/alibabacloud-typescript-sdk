// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumExceptionStackRequest extends $dara.Model {
  /**
   * @remarks
   * The binary images, which represent all executable files loaded into the process address space at the time of the crash.
   * 
   * @example
   * iOSDemo:arm64%3B1489F4D3-6DE2-300C-90E9-E1B869675351%3B0x0000000104064000\\nAlibabaCloudRUM:arm64%3BAB7B3A8E-6CEE-325D-BCBB-8DA50E61804F%3B0x0000000106660000\\nlibdispatch.dylib:arm
   */
  exceptionBinaryImages?: string;
  /**
   * @remarks
   * The error stack information in JSON list format. Each list element contains three fields: call_stack.info, call_stack.thread.name, and call_stack.thread.id, which represent the stack information, thread name, and thread ID, respectively. This is identical to the exception.stack field in the Simple Log Service logstore-rum.
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
   * The exception thread ID.
   * 
   * @example
   * 16643
   */
  exceptionThreadId?: string;
  /**
   * @remarks
   * The additional system symbol table information for iOS parsing. This parameter is optional.
   * 
   * @example
   * GraphicsServices:system/GraphicsServices/85419099-269B-336D-86B4-0D52D0FF6923/GraphicsServices;WebCore:system/WebCore/BF44A3F4-85D4-38C8-BF26-197F06ADE273/WebCore
   */
  extraInfo?: string;
  /**
   * @remarks
   * The application ID.
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
  serviceId?: string;
  /**
   * @remarks
   * The parsing type. Valid values:
   * - js: JavaScript error parsing
   * - sym: PC parsing
   * - har: HarmonyOS parsing
   * - dSYM: iOS parsing
   * - so: Android parsing.
   * 
   * @example
   * js
   */
  sourcemapType?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      exceptionBinaryImages: 'ExceptionBinaryImages',
      exceptionStack: 'ExceptionStack',
      exceptionThreadId: 'ExceptionThreadId',
      extraInfo: 'ExtraInfo',
      pid: 'Pid',
      regionId: 'RegionId',
      serviceId: 'ServiceId',
      sourcemapType: 'SourcemapType',
      workspace: 'Workspace',
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
      serviceId: 'string',
      sourcemapType: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

