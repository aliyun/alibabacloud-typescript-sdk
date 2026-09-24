// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageQueryAgentListResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * 121312*******
   */
  agentId?: string;
  /**
   * @remarks
   * The agent name.
   * 
   * @example
   * TestAgent
   */
  agentName?: string;
  /**
   * @remarks
   * The application code.
   * 
   * @example
   * DFAS*****
   */
  applicationCode?: string;
  /**
   * @remarks
   * The reason for review failure.
   * 
   * @example
   * Provide additional process description
   */
  auditReason?: string;
  /**
   * @remarks
   * The reason for build failure.
   * 
   * @example
   * System error
   */
  buildFailReason?: string;
  /**
   * @remarks
   * The business scenario name.
   * 
   * @example
   * Personal customer lead conversion
   */
  businessTypeName?: string;
  /**
   * @remarks
   * The creation time, in the format of YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-10-28 17:10:17
   */
  createTime?: string;
  /**
   * @remarks
   * The agent description.
   * 
   * @example
   * Used for daily testing
   */
  description?: string;
  /**
   * @remarks
   * The most recent online time, in the format of YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-10-28 14:38:15
   */
  lastOnlineTime?: string;
  /**
   * @remarks
   * The most recent modification time, in the format of YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-10-28 17:10:17
   */
  modifyTime?: string;
  /**
   * @remarks
   * The agent status.
   * 
   * @example
   * 7
   */
  status?: number;
  /**
   * @example
   * false
   */
  withActivePrompt?: boolean;
  /**
   * @remarks
   * Indicates whether the agent has been configured.
   * 
   * @example
   * false
   */
  withConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      applicationCode: 'ApplicationCode',
      auditReason: 'AuditReason',
      buildFailReason: 'BuildFailReason',
      businessTypeName: 'BusinessTypeName',
      createTime: 'CreateTime',
      description: 'Description',
      lastOnlineTime: 'LastOnlineTime',
      modifyTime: 'ModifyTime',
      status: 'Status',
      withActivePrompt: 'WithActivePrompt',
      withConfig: 'WithConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      applicationCode: 'string',
      auditReason: 'string',
      buildFailReason: 'string',
      businessTypeName: 'string',
      createTime: 'string',
      description: 'string',
      lastOnlineTime: 'string',
      modifyTime: 'string',
      status: 'number',
      withActivePrompt: 'boolean',
      withConfig: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryAgentListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of agent data.
   */
  list?: PageQueryAgentListResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
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
   * 14
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': PageQueryAgentListResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
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

export class PageQueryAgentListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access was denied.
   * 
   * @example
   * Access Denied
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: PageQueryAgentListResponseBodyData;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * Succeeded
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 742C9243-2870-B8D6-0C68-C60BEB2DF09A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: Successful.
   * - **false**: Failed.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: PageQueryAgentListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

