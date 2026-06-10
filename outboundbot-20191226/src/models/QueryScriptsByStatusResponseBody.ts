// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryScriptsByStatusResponseBodyScriptsList extends $dara.Model {
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 1579055782000
   */
  appliedVersion?: string;
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
   * The debug version.
   * 
   * @example
   * 01bb2df2-a273-42bb-a214-d3c626b13296
   */
  debugVersion?: string;
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * 通用
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
   * Indicates whether the version is a draft.
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
   * The scenario ID.
   * 
   * @example
   * fa0e21e9-caab-4629-9121-1e341243d599
   */
  scriptId?: string;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * 销售话术
   */
  scriptName?: string;
  /**
   * @remarks
   * The status of the application version. Valid values:
   * 
   * - **DRAFTED**: The script is a draft.
   * 
   * - **INITIALIZE_IN_PROGRESS**: The script is being initialized.
   * 
   * - **PUBLISHED**: The script is published.
   * 
   * - **PUBLISH_IN_PROGRESS**: The script is being published.
   * 
   * - **ROLLBACK_IN_PROGRESS**: The script is being rolled back.
   * 
   * - **EXAMINE_IN_PROGRESS**: The script is pending approval.
   * 
   * - **PUBLISHED_AND_EXAMINE_IN_PROGRESS**: The script is published and pending approval.
   * 
   * - **PUBLISH_FAILED**: The script failed to be published.
   * 
   * - **ROLLBACK_FAILED**: The script failed to be rolled back.
   * 
   * - **IMPORT_IN_PROGRESS**: The script is being imported.
   * 
   * - **IMPORT_FAILED**: The script failed to be imported.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * The time when the script was last updated.
   * 
   * @example
   * 1579055782000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appliedVersion: 'AppliedVersion',
      debugStatus: 'DebugStatus',
      debugVersion: 'DebugVersion',
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
      appliedVersion: 'string',
      debugStatus: 'string',
      debugVersion: 'string',
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

export class QueryScriptsByStatusResponseBodyScripts extends $dara.Model {
  /**
   * @remarks
   * The list of scenarios.
   */
  list?: QueryScriptsByStatusResponseBodyScriptsList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryScriptsByStatusResponseBodyScriptsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScriptsByStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code.
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
   * The returned message.
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
   * The scenarios.
   */
  scripts?: QueryScriptsByStatusResponseBodyScripts;
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
      scripts: 'Scripts',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scripts: QueryScriptsByStatusResponseBodyScripts,
      success: 'boolean',
    };
  }

  validate() {
    if(this.scripts && typeof (this.scripts as any).validate === 'function') {
      (this.scripts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

