// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageQueryAgentListNewResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 51
   */
  agentId?: number;
  /**
   * @example
   * 0
   */
  agentMode?: number;
  /**
   * @example
   * 示例值示例值
   */
  agentName?: string;
  /**
   * @example
   * aicc_demo_app
   */
  applicationCode?: string;
  /**
   * @example
   * 2024-01-20 12:00:00
   */
  createTime?: string;
  /**
   * @example
   * 24
   */
  deployBranchId?: number;
  /**
   * @example
   * master
   */
  deployBranchName?: string;
  /**
   * @example
   * 示例值
   */
  description?: string;
  /**
   * @example
   * 71
   */
  effectiveVersionId?: number;
  /**
   * @example
   * v1.0.0
   */
  effectiveVersionName?: string;
  /**
   * @example
   * true
   */
  isAvailable?: boolean;
  /**
   * @example
   * 2024-01-20 12:00:00
   */
  latestPublishTime?: string;
  /**
   * @example
   * 2024-01-15 10:30:00
   */
  modifyTime?: string;
  /**
   * @example
   * 示例值示例值
   */
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentMode: 'AgentMode',
      agentName: 'AgentName',
      applicationCode: 'ApplicationCode',
      createTime: 'CreateTime',
      deployBranchId: 'DeployBranchId',
      deployBranchName: 'DeployBranchName',
      description: 'Description',
      effectiveVersionId: 'EffectiveVersionId',
      effectiveVersionName: 'EffectiveVersionName',
      isAvailable: 'IsAvailable',
      latestPublishTime: 'LatestPublishTime',
      modifyTime: 'ModifyTime',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentMode: 'number',
      agentName: 'string',
      applicationCode: 'string',
      createTime: 'string',
      deployBranchId: 'number',
      deployBranchName: 'string',
      description: 'string',
      effectiveVersionId: 'number',
      effectiveVersionName: 'string',
      isAvailable: 'boolean',
      latestPublishTime: 'string',
      modifyTime: 'string',
      scene: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryAgentListNewResponseBodyData extends $dara.Model {
  list?: PageQueryAgentListNewResponseBodyDataList[];
  /**
   * @example
   * 28
   */
  pageNo?: number;
  /**
   * @example
   * 41
   */
  pageSize?: number;
  /**
   * @example
   * 6
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
      list: { 'type': 'array', 'itemType': PageQueryAgentListNewResponseBodyDataList },
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

export class PageQueryAgentListNewResponseBody extends $dara.Model {
  /**
   * @example
   * Access denied due to insufficient permissions
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: PageQueryAgentListNewResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 12345678-1234-1234-1234-123456789012
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
      data: PageQueryAgentListNewResponseBodyData,
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

