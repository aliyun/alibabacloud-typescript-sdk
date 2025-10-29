// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageQueryAgentListResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 121312*******
   */
  agentId?: string;
  /**
   * @example
   * 示例值
   */
  agentName?: string;
  /**
   * @example
   * DFAS*****
   */
  applicationCode?: string;
  /**
   * @example
   * 示例值
   */
  auditReason?: string;
  /**
   * @example
   * 构建失败原因
   */
  buildFailReason?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  businessTypeName?: string;
  /**
   * @example
   * 2025-10-28 17:10:17
   */
  createTime?: string;
  /**
   * @example
   * 示例值示例值
   */
  description?: string;
  /**
   * @example
   * 2025-10-28 14:38:15
   */
  lastOnlineTime?: string;
  /**
   * @example
   * 2025-10-28 17:10:17
   */
  modifyTime?: string;
  /**
   * @example
   * 7
   */
  status?: number;
  /**
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
  list?: PageQueryAgentListResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * Access Denied
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: PageQueryAgentListResponseBodyData;
  /**
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @example
   * 742C9243-2870-B8D6-0C68-C60BEB2DF09A
   */
  requestId?: string;
  /**
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

