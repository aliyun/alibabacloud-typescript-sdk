// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WithdrawScriptReviewResponseBodyScript extends $dara.Model {
  /**
   * @remarks
   * The debug status.
   * 
   * @example
   * PUBLISHED
   */
  debugStatus?: string;
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * 金融
   */
  industry?: string;
  /**
   * @remarks
   * Indicates whether the debug version is a draft.
   * 
   * @example
   * false
   */
  isDebugDrafted?: boolean;
  /**
   * @remarks
   * Indicates whether the application version is a draft.
   * 
   * @example
   * false
   */
  isDrafted?: boolean;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * 电销
   */
  scene?: string;
  /**
   * @remarks
   * The script description.
   * 
   * @example
   * 销售话术
   */
  scriptDescription?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * e4e2a770-b97b-465a-80d8-06dca008c503
   */
  scriptId?: string;
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * 销售话术
   */
  scriptName?: string;
  /**
   * @remarks
   * The status of the application version.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * The time when the script was updated.
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

export class WithdrawScriptReviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
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
  script?: WithdrawScriptReviewResponseBodyScript;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      script: WithdrawScriptReviewResponseBodyScript,
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

