// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageQueryAgentListNewResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * 51
   */
  agentId?: number;
  /**
   * @remarks
   * The agent creation mode. Valid values:<br>
   * `0`: Prompt mode (`PROMPT`). `1`: Conversation flow mode (`CONVERSATION`).<br>
   * 
   * @example
   * 0
   */
  agentMode?: number;
  /**
   * @remarks
   * The agent name.
   * 
   * @example
   * 智能客服助手
   */
  agentName?: string;
  /**
   * @remarks
   * The application code.
   * 
   * @example
   * aicc_demo_app
   */
  applicationCode?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-20 12:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The deployment branch ID.
   * 
   * @example
   * 24
   */
  deployBranchId?: number;
  /**
   * @remarks
   * The effective branch name.
   * 
   * @example
   * master
   */
  deployBranchName?: string;
  /**
   * @remarks
   * The agent description.
   * 
   * @example
   * 智能客服助手，提供自动化的客户服务支持
   */
  description?: string;
  /**
   * @remarks
   * The effective version ID.
   * 
   * @example
   * 71
   */
  effectiveVersionId?: number;
  /**
   * @remarks
   * The effective version name.
   * 
   * @example
   * v1.0.0
   */
  effectiveVersionName?: string;
  /**
   * @remarks
   * Specifies whether the agent can be used for outbound calls. A value of `true` means the agent\\"s current deployment branch has a published version.
   * 
   * @example
   * true
   */
  isAvailable?: boolean;
  /**
   * @remarks
   * The most recent publish time.
   * 
   * @example
   * 2024-01-20 12:00:00
   */
  latestPublishTime?: string;
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 2024-01-15 10:30:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The scene.
   * 
   * @example
   * 个人线索转化
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
  /**
   * @remarks
   * The data list.
   */
  list?: PageQueryAgentListNewResponseBodyDataList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 28
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 41
   */
  pageSize?: number;
  /**
   * @remarks
   * The total count.
   * 
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
   * @remarks
   * The access denied detail.
   * 
   * @example
   * Access denied due to insufficient permissions
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
   * The data returned.
   */
  data?: PageQueryAgentListNewResponseBodyData;
  /**
   * @remarks
   * The message that describes the status code.
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
   * 12345678-1234-1234-1234-123456789012
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether the request succeeded.
   * 
   * - **`true`**: The request succeeded.
   * 
   * - **`false`**: The request failed.
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

