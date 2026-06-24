// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDesktopAgentRuntimeResponseBodyDataAgentImInfo extends $dara.Model {
  /**
   * @remarks
   * The agent IM status.
   * 
   * @example
   * Enabled
   */
  agentImStatus?: string;
  /**
   * @remarks
   * The CloudSpace status.
   * 
   * @example
   * Enabled
   */
  cloudSpaceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      agentImStatus: 'AgentImStatus',
      cloudSpaceStatus: 'CloudSpaceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentImStatus: 'string',
      cloudSpaceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDesktopAgentRuntimeResponseBodyDataAgentInstanceInfoList extends $dara.Model {
  /**
   * @remarks
   * The agent instance status.
   * 
   * @example
   * Running
   */
  agentInstanceStatus?: string;
  /**
   * @remarks
   * The agent instance version.
   * 
   * @example
   * 2026.3.13
   */
  agentInstanceVersion?: string;
  agentPlatform?: string;
  agentProvider?: string;
  /**
   * @remarks
   * Indicates whether the agent instance has a configured third-party channel.
   * 
   * @example
   * true
   */
  channelConfigure?: boolean;
  /**
   * @remarks
   * The list of third-party channels configured for the agent instance.
   */
  channelConfiguredList?: string[];
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
   * Indicates whether the agent instance has a configured model.
   * 
   * @example
   * true
   */
  modelConfigure?: boolean;
  /**
   * @remarks
   * The configured model group ID.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      agentInstanceStatus: 'AgentInstanceStatus',
      agentInstanceVersion: 'AgentInstanceVersion',
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      channelConfigure: 'ChannelConfigure',
      channelConfiguredList: 'ChannelConfiguredList',
      deploymentSource: 'DeploymentSource',
      modelConfigure: 'ModelConfigure',
      modelTemplateId: 'ModelTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInstanceStatus: 'string',
      agentInstanceVersion: 'string',
      agentPlatform: 'string',
      agentProvider: 'string',
      channelConfigure: 'boolean',
      channelConfiguredList: { 'type': 'array', 'itemType': 'string' },
      deploymentSource: 'string',
      modelConfigure: 'boolean',
      modelTemplateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channelConfiguredList)) {
      $dara.Model.validateArray(this.channelConfiguredList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDesktopAgentRuntimeResponseBodyDataResourceGroup extends $dara.Model {
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
   * The resource group name.
   * 
   * @example
   * resource-group-001
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDesktopAgentRuntimeResponseBodyDataRiskInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the agent is uninstalled.
   * 
   * @example
   * true
   */
  agentUninstalled?: boolean;
  /**
   * @remarks
   * Indicates whether the third-party channel configuration is modified (inconsistent with the admin-distributed configuration).
   * 
   * @example
   * true
   */
  channelModified?: boolean;
  /**
   * @remarks
   * Indicates whether the model configuration is modified (inconsistent with the admin-distributed configuration).
   * 
   * @example
   * true
   */
  modelModified?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentUninstalled: 'AgentUninstalled',
      channelModified: 'ChannelModified',
      modelModified: 'ModelModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUninstalled: 'boolean',
      channelModified: 'boolean',
      modelModified: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDesktopAgentRuntimeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The agent IM information.
   */
  agentImInfo?: ListDesktopAgentRuntimeResponseBodyDataAgentImInfo;
  /**
   * @remarks
   * The list of agent instance information.
   */
  agentInstanceInfoList?: ListDesktopAgentRuntimeResponseBodyDataAgentInstanceInfoList[];
  /**
   * @remarks
   * The list of authorized users.
   */
  authUsers?: string[];
  /**
   * @remarks
   * Indicates whether the agent runtime has a configured third-party channel.
   * 
   * @example
   * true
   */
  channelConfigure?: boolean;
  /**
   * @remarks
   * The list of third-party channels configured for the agent runtime.
   */
  channelConfiguredList?: string[];
  /**
   * @remarks
   * The agent runtime ID.
   * 
   * @example
   * ecd-xxxx
   */
  desktopId?: string;
  /**
   * @remarks
   * The agent runtime name.
   * 
   * @example
   * Agent-001
   */
  desktopName?: string;
  /**
   * @remarks
   * The cloud computer status.
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * Indicates whether authorized users exist.
   * 
   * @example
   * true
   */
  hasAuthUser?: boolean;
  managementStatuses?: string[];
  /**
   * @remarks
   * Indicates whether the agent runtime has a configured model.
   * 
   * @example
   * true
   */
  modelConfigure?: boolean;
  /**
   * @remarks
   * The effective model template ID (returned only when modelConfigure=true).
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * The effective model template name (returned only when modelConfigure=true).
   * 
   * @example
   * model-template-001
   */
  modelTemplateName?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The list of channels in QR code configuration.
   */
  qrCodeConfiguringList?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The region location (domestic/overseas).
   * 
   * @example
   * Mainland
   */
  regionLocation?: string;
  /**
   * @remarks
   * The resource group information.
   */
  resourceGroup?: ListDesktopAgentRuntimeResponseBodyDataResourceGroup;
  /**
   * @remarks
   * The resource ID, which is the cloud computer ID.
   * 
   * @example
   * ecd-xxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The risk information (returned only when the request parameter IncludeRiskInfo is set to true, otherwise null).
   */
  riskInfo?: ListDesktopAgentRuntimeResponseBodyDataRiskInfo;
  static names(): { [key: string]: string } {
    return {
      agentImInfo: 'AgentImInfo',
      agentInstanceInfoList: 'AgentInstanceInfoList',
      authUsers: 'AuthUsers',
      channelConfigure: 'ChannelConfigure',
      channelConfiguredList: 'ChannelConfiguredList',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      hasAuthUser: 'HasAuthUser',
      managementStatuses: 'ManagementStatuses',
      modelConfigure: 'ModelConfigure',
      modelTemplateId: 'ModelTemplateId',
      modelTemplateName: 'ModelTemplateName',
      osType: 'OsType',
      qrCodeConfiguringList: 'QrCodeConfiguringList',
      regionId: 'RegionId',
      regionLocation: 'RegionLocation',
      resourceGroup: 'ResourceGroup',
      resourceId: 'ResourceId',
      riskInfo: 'RiskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentImInfo: ListDesktopAgentRuntimeResponseBodyDataAgentImInfo,
      agentInstanceInfoList: { 'type': 'array', 'itemType': ListDesktopAgentRuntimeResponseBodyDataAgentInstanceInfoList },
      authUsers: { 'type': 'array', 'itemType': 'string' },
      channelConfigure: 'boolean',
      channelConfiguredList: { 'type': 'array', 'itemType': 'string' },
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      hasAuthUser: 'boolean',
      managementStatuses: { 'type': 'array', 'itemType': 'string' },
      modelConfigure: 'boolean',
      modelTemplateId: 'string',
      modelTemplateName: 'string',
      osType: 'string',
      qrCodeConfiguringList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      regionLocation: 'string',
      resourceGroup: ListDesktopAgentRuntimeResponseBodyDataResourceGroup,
      resourceId: 'string',
      riskInfo: ListDesktopAgentRuntimeResponseBodyDataRiskInfo,
    };
  }

  validate() {
    if(this.agentImInfo && typeof (this.agentImInfo as any).validate === 'function') {
      (this.agentImInfo as any).validate();
    }
    if(Array.isArray(this.agentInstanceInfoList)) {
      $dara.Model.validateArray(this.agentInstanceInfoList);
    }
    if(Array.isArray(this.authUsers)) {
      $dara.Model.validateArray(this.authUsers);
    }
    if(Array.isArray(this.channelConfiguredList)) {
      $dara.Model.validateArray(this.channelConfiguredList);
    }
    if(Array.isArray(this.managementStatuses)) {
      $dara.Model.validateArray(this.managementStatuses);
    }
    if(Array.isArray(this.qrCodeConfiguringList)) {
      $dara.Model.validateArray(this.qrCodeConfiguringList);
    }
    if(this.resourceGroup && typeof (this.resourceGroup as any).validate === 'function') {
      (this.resourceGroup as any).validate();
    }
    if(this.riskInfo && typeof (this.riskInfo as any).validate === 'function') {
      (this.riskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDesktopAgentRuntimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned result objects.
   */
  data?: ListDesktopAgentRuntimeResponseBodyData[];
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDesktopAgentRuntimeResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

