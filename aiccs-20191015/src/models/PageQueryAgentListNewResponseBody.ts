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
   * The agent building mode. Valid values:
   * 
   * - 0: prompt mode (PROMPT).
   * - 1: dialog flow mode (CONVERSATION).
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
   * Intelligent Customer Service Assistant
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
   * The creation time, in the format of YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-01-20 12:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the branch being deployed.
   * 
   * @example
   * 24
   */
  deployBranchId?: number;
  /**
   * @remarks
   * The name of the active branch.
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
   * Intelligent customer service assistant that provides automated customer service support
   */
  description?: string;
  /**
   * @remarks
   * The ID of the active version.
   * 
   * @example
   * 71
   */
  effectiveVersionId?: number;
  /**
   * @remarks
   * The name of the active version.
   * 
   * @example
   * v1.0.0
   */
  effectiveVersionName?: string;
  /**
   * @remarks
   * Indicates whether the agent is available for outbound calls. A value of True indicates that the current deployment branch of the agent has a published version and is available for outbound calls.
   * 
   * @example
   * true
   */
  isAvailable?: boolean;
  /**
   * @remarks
   * The latest version publish time, in the format of YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-01-20 12:00:00
   */
  latestPublishTime?: string;
  /**
   * @remarks
   * The last modification time, in the format of YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2024-01-15 10:30:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * Personal lead conversion
   */
  scene?: string;
  /**
   * @remarks
   * The service direction.
   * 
   * @example
   * Sample value
   */
  serviceDirection?: string;
  /**
   * @remarks
   * The source template ID.
   * 
   * @example
   * 62
   */
  templateId?: number;
  /**
   * @remarks
   * The source template name.
   * 
   * @example
   * Sample value
   */
  templateName?: string;
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
      serviceDirection: 'ServiceDirection',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
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
      serviceDirection: 'string',
      templateId: 'number',
      templateName: 'string',
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
   * The total number of records.
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
   * The details about the access denial.
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
   * The returned data.
   */
  data?: PageQueryAgentListNewResponseBodyData;
  /**
   * @remarks
   * The status code description.
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
   * Indicates whether the API call was successful.
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

