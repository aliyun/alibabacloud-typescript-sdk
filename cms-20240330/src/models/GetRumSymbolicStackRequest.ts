// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumSymbolicStackRequest extends $dara.Model {
  /**
   * @remarks
   * The symbol file matching information, which varies based on stackType. For js, jvm, and android-native, it is a JSON string (js and jvm must contain both version and fileName, and optionally uuid/debugId; android-native supports a single module, a modules array, and il2cppMapping). For cocoa, it is a non-JSON format (module:objectKey;...) for historical compatibility only, and it is recommended to pass it through images in the new version. If matching information is missing, the symbol is not found, or parsing fails for js, an empty result is returned. If fileInfo is missing or the symbol is not found for jvm, an empty result is returned, and it falls back to the original stack only when downstream symbolication fails.
   * 
   * @example
   * {"version":"1.0.0","fileName":"mapping.txt"}
   */
  fileInfo?: string;
  /**
   * @remarks
   * The binary image information associated with Native/Cocoa crashes. The format varies based on stackType (only electron-native uses a JSON array). For cocoa, it is a line-by-line string (each line is module:arch;uuid;loadAddress). For electron-native, it is a JSON array string (elements contain name, debug_id/debugId, or code_id/codeId, and optionally load_address/loadAddress and arch). For windows-native, it is a semicolon-separated string of debugId and debugFile (.pdb file name). For macos-native, it is a semicolon-separated string of uuid and name. If matching information is missing, the symbol file is not found, or symbolication fails, Native/Cocoa types fall back to returning the original stack lines. The following example applies only to scenarios where stackType is electron-native and cannot be directly combined with stackType=jvm in a request.
   * 
   * @example
   * [{"name":"Electron Framework","debug_id":"ABCDEF01-2345-6789-ABCD-EF0123456789","code_id":"CODE-1","load_address":"0x0000000100000000","arch":"arm64"}]
   */
  images?: string;
  /**
   * @remarks
   * The application PID. **[Deprecated]** The server automatically resolves this value based on the workspace and serviceId.
   * 
   * @example
   * xxxojw@e3hd38hxxxx11
   * 
   * @deprecated
   */
  pid?: string;
  /**
   * @remarks
   * The service ID of the RUM application. This parameter is required and cannot be an empty string. It must be used together with workspace to locate the application.
   * 
   * This parameter is required.
   * 
   * @example
   * a1b2c3d4e5@f67890
   */
  serviceId?: string;
  /**
   * @remarks
   * The original exception stack content to be symbolicated. This parameter is required and cannot be an empty string. If stackType is js, the format is "line,column,rows". For other types, pass the original stack text of the corresponding platform.
   * 
   * This parameter is required.
   * 
   * @example
   * java.lang.NullPointerException
   * 	at com.example.Main.main(Main.java:10)
   */
  stack?: string;
  /**
   * @remarks
   * The stack type. This parameter is required and cannot be an empty string. Valid values: js, jvm, android-native, cocoa, electron-native, windows-native, and macos-native.
   * 
   * This parameter is required.
   * 
   * @example
   * jvm
   */
  stackType?: string;
  /**
   * @remarks
   * The ID of the exception thread.
   * 
   * @example
   * thread-1
   */
  threadId?: string;
  /**
   * @remarks
   * The name of the workspace to which the RUM application belongs. This parameter is required and cannot be an empty string. It must be used together with serviceId to locate the application.
   * 
   * This parameter is required.
   * 
   * @example
   * default-cms-1234567890-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      fileInfo: 'fileInfo',
      images: 'images',
      pid: 'pid',
      serviceId: 'serviceId',
      stack: 'stack',
      stackType: 'stackType',
      threadId: 'threadId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfo: 'string',
      images: 'string',
      pid: 'string',
      serviceId: 'string',
      stack: 'string',
      stackType: 'string',
      threadId: 'string',
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

