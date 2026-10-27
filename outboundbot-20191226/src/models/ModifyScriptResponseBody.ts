// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScriptResponseBodyScript extends $dara.Model {
  /**
   * @remarks
   * The script debug status.
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
   * Government
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
   * Follow-up visit
   */
  scene?: string;
  /**
   * @remarks
   * The script description.
   * 
   * @example
   * Rework callback script
   */
  scriptDescription?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * c153d0d8-ba04-41c0-8632-453944c9dd0b
   */
  scriptId?: string;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * Callback script
   */
  scriptName?: string;
  /**
   * @remarks
   * The script status.
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
   * The API status.
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
   * Indicates whether the request is successful.
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

