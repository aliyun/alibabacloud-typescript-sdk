// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDesktopAgentRuntimeRequest extends $dara.Model {
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
   * The name of the agent provider.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
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
   * The business type.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * Specifies whether the third-party channel is configured.
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
   * The list of cloud computer statuses.
   * 
   * @example
   * Running
   */
  desktopStatuses?: string[];
  /**
   * @remarks
   * Specifies whether authorized users exist.
   * 
   * @example
   * true
   */
  hasAuthUser?: boolean;
  /**
   * @remarks
   * Specifies whether a risk exists. Used to filter cloud computers with or without risks. This parameter takes effect only when IncludeRiskInfo is set to true.
   * 
   * Set to true to return only records with risks. Set to false to return only records without risks. If not specified, no filtering is applied.
   * 
   * @example
   * true
   */
  hasRisk?: boolean;
  /**
   * @remarks
   * Specifies whether to query and return risk information. Default value: false. When set to true, the response includes the RiskInfo field, and the HasRisk filter condition takes effect.
   * 
   * @example
   * true
   */
  includeRiskInfo?: boolean;
  /**
   * @example
   * Hibernated
   */
  managementStatus?: string;
  /**
   * @remarks
   * Specifies whether the model is configured.
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
   * The page number, starting from 1. Values 0 and 1 return the same result.
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
   * The list of resource IDs (underlying real resource IDs).
   * 
   * @example
   * ecd-xxxxx
   */
  resourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      agentInstanceStatuses: 'AgentInstanceStatuses',
      agentInstanceVersions: 'AgentInstanceVersions',
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      authUsers: 'AuthUsers',
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
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInstanceStatuses: { 'type': 'array', 'itemType': 'string' },
      agentInstanceVersions: { 'type': 'array', 'itemType': 'string' },
      agentPlatform: 'string',
      agentProvider: 'string',
      authUsers: { 'type': 'array', 'itemType': 'string' },
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

