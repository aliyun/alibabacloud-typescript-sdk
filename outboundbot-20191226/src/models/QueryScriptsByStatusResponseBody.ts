// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryScriptsByStatusResponseBodyScriptsList extends $dara.Model {
  /**
   * @example
   * 1579055782000
   */
  appliedVersion?: string;
  /**
   * @example
   * PUBLISHED
   */
  debugStatus?: string;
  /**
   * @example
   * 1579055782000
   */
  debugVersion?: string;
  industry?: string;
  /**
   * @example
   * false
   */
  isDebugDrafted?: boolean;
  /**
   * @example
   * false
   */
  isDrafted?: boolean;
  scene?: string;
  scriptDescription?: string;
  /**
   * @example
   * fa0e21e9-caab-4629-9121-1e341243d599
   */
  scriptId?: string;
  scriptName?: string;
  /**
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
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
  list?: QueryScriptsByStatusResponseBodyScriptsList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  scripts?: QueryScriptsByStatusResponseBodyScripts;
  /**
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

