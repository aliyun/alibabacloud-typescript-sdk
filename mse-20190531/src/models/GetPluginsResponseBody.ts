// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPluginsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The plug-in type. Valid values:
   * - 0: Custom.
   * - 1: Authentication and authorization.
   * - 2: Security protection.
   * - 3: Transport protocol.
   * - 4: Traffic control.
   * - 5: Traffic observability.
   * 
   * @example
   * 0
   */
  category?: number;
  /**
   * @remarks
   * The configuration validation.
   * 
   * @example
   * # Validate required fields in the configuration. As shown in the following example, the plug-in configuration must contain the "name", "age", and "friends" fields.
   * name: John
   * age: 18
   * friends:
   * - David
   * - Anne
   */
  configCheck?: string;
  /**
   * @remarks
   * The plug-in ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The latest version.
   * 
   * @example
   * 1.0.0
   */
  maxVersion?: string;
  /**
   * @remarks
   * The plug-in language. Valid values:
   * - 0: Wasm plug-in.
   * - 2: Lua plug-in.
   * 
   * @example
   * 0
   */
  mode?: number;
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * key-auth
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the latest version is being published.
   * 
   * @example
   * false
   */
  newVersionPublishingFlag?: boolean;
  /**
   * @remarks
   * The plug-in execution phase. Valid values:
   * - 0: Default phase.
   * - 1: Authentication phase.
   * - 2: Authorization phase.
   * - 3: Statistics phase.
   * 
   * @example
   * 1
   */
  phase?: number;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 123
   */
  primaryUser?: string;
  /**
   * @remarks
   * The execution priority of the plug-in. A larger value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The publish status. Valid values:
   * - 0: Successful.
   * - 1: Publishing.
   * - 2: Failed.
   * 
   * @example
   * 1
   */
  publishState?: number;
  /**
   * @remarks
   * The enabling status. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The plug-in summary.
   * 
   * @example
   * This is a plug-in
   */
  summary?: string;
  /**
   * @remarks
   * The English plug-in summary.
   * 
   * @example
   * Authentication based on API Key.
   */
  summaryEn?: string;
  /**
   * @remarks
   * The plug-in version.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The OSS object of the Wasm plug-in.
   */
  wasmFile?: string;
  /**
   * @remarks
   * The WebAssembly (Wasm) implementation language. Valid values:
   * - 0: C++.
   * - 1: TinyGo.
   * - 2: Rust.
   * - 3: AssemblyScript.
   * - 4: Zig.
   * 
   * @example
   * 0
   */
  wasmLang?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      configCheck: 'ConfigCheck',
      id: 'Id',
      maxVersion: 'MaxVersion',
      mode: 'Mode',
      name: 'Name',
      newVersionPublishingFlag: 'NewVersionPublishingFlag',
      phase: 'Phase',
      primaryUser: 'PrimaryUser',
      priority: 'Priority',
      publishState: 'PublishState',
      status: 'Status',
      summary: 'Summary',
      summaryEn: 'SummaryEn',
      version: 'Version',
      wasmFile: 'WasmFile',
      wasmLang: 'WasmLang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      configCheck: 'string',
      id: 'number',
      maxVersion: 'string',
      mode: 'number',
      name: 'string',
      newVersionPublishingFlag: 'boolean',
      phase: 'number',
      primaryUser: 'string',
      priority: 'number',
      publishState: 'number',
      status: 'string',
      summary: 'string',
      summaryEn: 'string',
      version: 'string',
      wasmFile: 'string',
      wasmLang: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPluginsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetPluginsResponseBodyData[];
  /**
   * @remarks
   * The placeholder in the dynamic error message.
   * 
   * @example
   * code
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * message
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 500
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 03A3E2F4-6804-5663-9D5D-2EC47A1*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetPluginsResponseBodyData },
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

