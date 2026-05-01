// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDesktopAgentRuntimeRequest extends $dara.Model {
  agentInstanceStatuses?: string[];
  agentInstanceVersions?: string[];
  /**
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  authUsers?: string[];
  /**
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @example
   * true
   */
  channelConfigure?: boolean;
  /**
   * @example
   * Admin
   */
  deploymentSource?: string;
  desktopIds?: string[];
  desktopNames?: string[];
  desktopStatuses?: string[];
  /**
   * @example
   * true
   */
  hasAuthUser?: boolean;
  /**
   * @example
   * true
   */
  hasRisk?: boolean;
  /**
   * @example
   * true
   */
  includeRiskInfo?: boolean;
  /**
   * @example
   * true
   */
  modelConfigure?: boolean;
  /**
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
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
      modelConfigure: 'ModelConfigure',
      modelTemplateId: 'ModelTemplateId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
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
      modelConfigure: 'boolean',
      modelTemplateId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

