// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDesktopAgentRuntimeResponseBodyDataAgentImInfo extends $dara.Model {
  /**
   * @example
   * Enabled
   */
  agentImStatus?: string;
  /**
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
   * @example
   * Running
   */
  agentInstanceStatus?: string;
  /**
   * @example
   * 2026.3.13
   */
  agentInstanceVersion?: string;
  /**
   * @example
   * true
   */
  channelConfigure?: boolean;
  channelConfiguredList?: string[];
  /**
   * @example
   * Admin
   */
  deploymentSource?: string;
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
  static names(): { [key: string]: string } {
    return {
      agentInstanceStatus: 'AgentInstanceStatus',
      agentInstanceVersion: 'AgentInstanceVersion',
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
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  /**
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
   * @example
   * true
   */
  agentUninstalled?: boolean;
  /**
   * @example
   * true
   */
  channelModified?: boolean;
  /**
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
  agentImInfo?: ListDesktopAgentRuntimeResponseBodyDataAgentImInfo;
  agentInstanceInfoList?: ListDesktopAgentRuntimeResponseBodyDataAgentInstanceInfoList[];
  authUsers?: string[];
  /**
   * @example
   * true
   */
  channelConfigure?: boolean;
  channelConfiguredList?: string[];
  /**
   * @example
   * ecd-xxxx
   */
  desktopId?: string;
  /**
   * @example
   * Agent-001
   */
  desktopName?: string;
  /**
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @example
   * true
   */
  hasAuthUser?: boolean;
  /**
   * @example
   * true
   */
  modelConfigure?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroup?: ListDesktopAgentRuntimeResponseBodyDataResourceGroup;
  /**
   * @example
   * ecd-xxxx
   */
  resourceId?: string;
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
      modelConfigure: 'ModelConfigure',
      regionId: 'RegionId',
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
      modelConfigure: 'boolean',
      regionId: 'string',
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
  data?: ListDesktopAgentRuntimeResponseBodyData[];
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
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
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

