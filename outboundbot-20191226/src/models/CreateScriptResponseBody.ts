// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptResponseBodyScript extends $dara.Model {
  /**
   * @remarks
   * Script debug status
   * 
   * @example
   * DRAFTED
   */
  debugStatus?: string;
  /**
   * @remarks
   * Industry
   * 
   * @example
   * 教育
   */
  industry?: string;
  /**
   * @remarks
   * Is debug draft
   * 
   * @example
   * true
   */
  isDebugDrafted?: boolean;
  /**
   * @remarks
   * Is draft
   * 
   * @example
   * true
   */
  isDrafted?: boolean;
  /**
   * @remarks
   * NLU access method (applicable only to Large Language Model (LLM) scenarios). Enumeration: Managed - Access using an Alibaba public account. This field is empty for non-LLM scenarios.
   * 
   * @example
   * Managed
   */
  nluAccessType?: string;
  /**
   * @remarks
   * NLU engine (applicable only to Large Language Model (LLM) scenarios). Enumeration: Prompts - Large Language Model (LLM) scenario. This field is empty for non-LLM scenarios.
   * 
   * @example
   * Prompts
   */
  nluEngine?: string;
  /**
   * @remarks
   * Scenario
   * 
   * @example
   * 回访
   */
  scene?: string;
  /**
   * @remarks
   * Script description
   * 
   * @example
   * 课程满意度回访
   */
  scriptDescription?: string;
  /**
   * @remarks
   * Script ID
   * 
   * @example
   * 8c58d3e0-bf27-4685-a5a5-65872ec5abc4
   */
  scriptId?: string;
  /**
   * @remarks
   * Script name
   * 
   * @example
   * 课程满意度回访
   */
  scriptName?: string;
  /**
   * @remarks
   * Job status. Valid values:
   * 
   * - **DRAFTED**: Draft.
   * 
   * - **INITIALIZE_IN_PROGRESS**: Initializing.
   * 
   * - **PUBLISHED**: Published.
   * 
   * - **PUBLISH_IN_PROGRESS**: Publishing.
   * 
   * - **ROLLBACK_IN_PROGRESS**: Rolling back.
   * 
   * - **EXAMINE_IN_PROGRESS**: Pending review.
   * 
   * - **PUBLISHED_AND_EXAMINE_IN_PROGRESS**: Published and pending review.
   * 
   * - **PUBLISH_FAILED**: Publish failed.
   * 
   * - **ROLLBACK_FAILED**: Rollback failed.
   * 
   * - **IMPORT_IN_PROGRESS**: Importing.
   * 
   * - **IMPORT_FAILED**: Import failed.
   * 
   * @example
   * DRAFTED
   */
  status?: string;
  /**
   * @remarks
   * Script update time (unit: milliseconds)
   * 
   * @example
   * 1578474045152
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      debugStatus: 'DebugStatus',
      industry: 'Industry',
      isDebugDrafted: 'IsDebugDrafted',
      isDrafted: 'IsDrafted',
      nluAccessType: 'NluAccessType',
      nluEngine: 'NluEngine',
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
      nluAccessType: 'string',
      nluEngine: 'string',
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

export class CreateScriptResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Script information
   */
  script?: CreateScriptResponseBodyScript;
  /**
   * @remarks
   * Indicates whether the operation was successful.
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
      script: CreateScriptResponseBodyScript,
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

