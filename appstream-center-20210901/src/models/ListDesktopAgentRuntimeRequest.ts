// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDesktopAgentRuntimeRequest extends $dara.Model {
  /**
   * @remarks
   * The agent IM online status filter.
   * 
   * @example
   * Online
   */
  agentImOnlineStatus?: string;
  /**
   * @remarks
   * The list of agent instance statuses.
   * 
   * @example
   * Running
   */
  agentInstanceStatuses?: string[];
  /**
   * @remarks
   * The list of agent instance versions.
   * 
   * @example
   * OpenClaw 2026.4.15
   */
  agentInstanceVersions?: string[];
  /**
   * @remarks
   * The agent platform.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The list of agent platforms. If AgentPlatform is also specified, AgentPlatform takes precedence and this list is ignored.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatformList?: string[];
  /**
   * @remarks
   * The agent provider name.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * The list of agent providers. If AgentProvider is also specified, AgentProvider takes precedence and this list is ignored.
   * 
   * @example
   * OpenClaw
   */
  agentProviderList?: string[];
  /**
   * @remarks
   * The list of agent template IDs. A match occurs only when all valid templates are assigned.
   * 
   * @example
   * at-xxxxx
   */
  agentTemplateIds?: string[];
  /**
   * @remarks
   * The list of authorized users.
   * 
   * @example
   * user001
   */
  authUsers?: string[];
  /**
   * @remarks
   * The business region ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * Specifies whether a third-party channel is configured.
   * 
   * @example
   * true
   */
  channelConfigure?: boolean;
  /**
   * @remarks
   * The deployment source.
   * 
   * @example
   * Admin
   */
  deploymentSource?: string;
  /**
   * @remarks
   * The list of agent runtime IDs.
   * 
   * @example
   * jvs-xxxxx
   */
  desktopIds?: string[];
  /**
   * @remarks
   * The list of agent runtime names.
   * 
   * @example
   * Desktop001
   */
  desktopNames?: string[];
  /**
   * @remarks
   * The list of Cloud Desktop statuses.
   * 
   * @example
   * Running
   */
  desktopStatuses?: string[];
  /**
   * @remarks
   * Indicates whether an authorized user exists for authorization.
   * 
   * @example
   * true
   */
  hasAuthUser?: boolean;
  /**
   * @remarks
   * Specifies whether a risk exists. This parameter is used to filter Cloud Desktops with or without risks and takes effect only when IncludeRiskInfo is set to true.
   * 
   * Set this parameter to true to return only records with risks. Set this parameter to false to return only records without risks. If you do not specify this parameter, no filtering is applied.
   * 
   * @example
   * true
   */
  hasRisk?: boolean;
  /**
   * @remarks
   * Specifies whether to query and return risk information. Default value: false. If set to true, the response includes the RiskInfo field, and the HasRisk filter takes effect.
   * 
   * @example
   * true
   */
  includeRiskInfo?: boolean;
  /**
   * @remarks
   * The management status filter, such as Hibernated.
   * 
   * @example
   * Hibernated
   */
  managementStatus?: string;
  /**
   * @remarks
   * Specifies whether a model is configured.
   * 
   * @example
   * true
   */
  modelConfigure?: boolean;
  /**
   * @remarks
   * The model group ID.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-xxxx
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The page number. Starts from 1. Values 0 and 1 return the same result.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of resource IDs (underlying actual resource IDs).
   * 
   * @example
   * ecd-xxxxx
   */
  resourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      agentImOnlineStatus: 'AgentImOnlineStatus',
      agentInstanceStatuses: 'AgentInstanceStatuses',
      agentInstanceVersions: 'AgentInstanceVersions',
      agentPlatform: 'AgentPlatform',
      agentPlatformList: 'AgentPlatformList',
      agentProvider: 'AgentProvider',
      agentProviderList: 'AgentProviderList',
      agentTemplateIds: 'AgentTemplateIds',
      authUsers: 'AuthUsers',
      bizRegionId: 'BizRegionId',
      bizType: 'BizType',
      channelConfigure: 'ChannelConfigure',
      deploymentSource: 'DeploymentSource',
      desktopIds: 'DesktopIds',
      desktopNames: 'DesktopNames',
      desktopStatuses: 'DesktopStatuses',
      hasAuthUser: 'HasAuthUser',
      hasRisk: 'HasRisk',
      includeRiskInfo: 'IncludeRiskInfo',
      managementStatus: 'ManagementStatus',
      modelConfigure: 'ModelConfigure',
      modelTemplateId: 'ModelTemplateId',
      officeSiteId: 'OfficeSiteId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentImOnlineStatus: 'string',
      agentInstanceStatuses: { 'type': 'array', 'itemType': 'string' },
      agentInstanceVersions: { 'type': 'array', 'itemType': 'string' },
      agentPlatform: 'string',
      agentPlatformList: { 'type': 'array', 'itemType': 'string' },
      agentProvider: 'string',
      agentProviderList: { 'type': 'array', 'itemType': 'string' },
      agentTemplateIds: { 'type': 'array', 'itemType': 'string' },
      authUsers: { 'type': 'array', 'itemType': 'string' },
      bizRegionId: 'string',
      bizType: 'number',
      channelConfigure: 'boolean',
      deploymentSource: 'string',
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      desktopNames: { 'type': 'array', 'itemType': 'string' },
      desktopStatuses: { 'type': 'array', 'itemType': 'string' },
      hasAuthUser: 'boolean',
      hasRisk: 'boolean',
      includeRiskInfo: 'boolean',
      managementStatus: 'string',
      modelConfigure: 'boolean',
      modelTemplateId: 'string',
      officeSiteId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.agentInstanceStatuses)) {
      $dara.Model.validateArray(this.agentInstanceStatuses);
    }
    if(Array.isArray(this.agentInstanceVersions)) {
      $dara.Model.validateArray(this.agentInstanceVersions);
    }
    if(Array.isArray(this.agentPlatformList)) {
      $dara.Model.validateArray(this.agentPlatformList);
    }
    if(Array.isArray(this.agentProviderList)) {
      $dara.Model.validateArray(this.agentProviderList);
    }
    if(Array.isArray(this.agentTemplateIds)) {
      $dara.Model.validateArray(this.agentTemplateIds);
    }
    if(Array.isArray(this.authUsers)) {
      $dara.Model.validateArray(this.authUsers);
    }
    if(Array.isArray(this.desktopIds)) {
      $dara.Model.validateArray(this.desktopIds);
    }
    if(Array.isArray(this.desktopNames)) {
      $dara.Model.validateArray(this.desktopNames);
    }
    if(Array.isArray(this.desktopStatuses)) {
      $dara.Model.validateArray(this.desktopStatuses);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

