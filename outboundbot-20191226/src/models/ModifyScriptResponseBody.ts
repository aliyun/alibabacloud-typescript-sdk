// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScriptResponseBodyScript extends $dara.Model {
  /**
   * @remarks
   * The debug status of the script.
   * 
   * @example
   * DRAFTED
   */
  debugStatus?: string;
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * 政务
   */
  industry?: string;
  /**
   * @remarks
   * Indicates whether the script is a debug draft.
   * 
   * @example
   * true
   */
  isDebugDrafted?: boolean;
  /**
   * @remarks
   * Indicates whether the script is a draft.
   * 
   * @example
   * true
   */
  isDrafted?: boolean;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * 回访
   */
  scene?: string;
  /**
   * @remarks
   * The description of the script.
   * 
   * @example
   * 返工回访话术
   */
  scriptDescription?: string;
  /**
   * @remarks
   * The ID of the script.
   * 
   * @example
   * c153d0d8-ba04-41c0-8632-453944c9dd0b
   */
  scriptId?: string;
  /**
   * @remarks
   * The name of the script.
   * 
   * @example
   * 回访话术
   */
  scriptName?: string;
  /**
   * @remarks
   * The status of the script.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1578881227000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      debugStatus: 'DebugStatus',
      industry: 'Industry',
      isDebugDrafted: 'IsDebugDrafted',
      isDrafted: 'IsDrafted',
      scene: 'Scene',
      scriptDescription: 'ScriptDescription',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugStatus: 'string',
      industry: 'string',
      isDebugDrafted: 'boolean',
      isDrafted: 'boolean',
      scene: 'string',
      scriptDescription: 'string',
      scriptId: 'string',
      scriptName: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScriptResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the API.
   * 
   * @example
   * OK
   */
  code?: string;
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
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * The script information.
   */
  script?: ModifyScriptResponseBodyScript;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      script: 'Script',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      script: ModifyScriptResponseBodyScript,
      success: 'boolean',
    };
  }

  validate() {
    if(this.script && typeof (this.script as any).validate === 'function') {
      (this.script as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

