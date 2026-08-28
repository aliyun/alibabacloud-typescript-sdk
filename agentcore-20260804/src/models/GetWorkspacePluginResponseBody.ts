// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspacePluginResponseBodyDataConfigAgentLoop extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace name associated with the AgentLoop plug-in.
   * 
   * @example
   * agentcore-ws-123456
   */
  agentSpaceName?: string;
  /**
   * @remarks
   * The creation time of the AgentSpace in UTC in RFC 3339 format.
   * 
   * @example
   * 2026-08-12T03:04:05Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The region ID where the AgentSpace resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpaceName: 'agentSpaceName',
      createdAt: 'createdAt',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpaceName: 'string',
      createdAt: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspacePluginResponseBodyDataConfigNetworkInternet extends $dara.Model {
  /**
   * @remarks
   * Indicates whether public network access is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspacePluginResponseBodyDataConfigNetworkVpc extends $dara.Model {
  /**
   * @remarks
   * Indicates whether VPC network access is enabled for the collaboration plug-in.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of vSwitch IDs used for plug-in deployment.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The VPC ID used for plug-in deployment.
   * 
   * @example
   * vpc-bp1example
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      vSwitchIds: 'vSwitchIds',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspacePluginResponseBodyDataConfigNetwork extends $dara.Model {
  /**
   * @remarks
   * The public network access configuration.
   */
  internet?: GetWorkspacePluginResponseBodyDataConfigNetworkInternet;
  /**
   * @remarks
   * The user VPC configuration.
   */
  vpc?: GetWorkspacePluginResponseBodyDataConfigNetworkVpc;
  static names(): { [key: string]: string } {
    return {
      internet: 'internet',
      vpc: 'vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internet: GetWorkspacePluginResponseBodyDataConfigNetworkInternet,
      vpc: GetWorkspacePluginResponseBodyDataConfigNetworkVpc,
    };
  }

  validate() {
    if(this.internet && typeof (this.internet as any).validate === 'function') {
      (this.internet as any).validate();
    }
    if(this.vpc && typeof (this.vpc as any).validate === 'function') {
      (this.vpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspacePluginResponseBodyDataConfig extends $dara.Model {
  /**
   * @remarks
   * The AgentLoop plug-in configuration.
   */
  agentLoop?: GetWorkspacePluginResponseBodyDataConfigAgentLoop;
  /**
   * @remarks
   * The network configuration of the plug-in, including public network access configuration and VPC configuration.
   */
  network?: GetWorkspacePluginResponseBodyDataConfigNetwork;
  static names(): { [key: string]: string } {
    return {
      agentLoop: 'agentLoop',
      network: 'network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentLoop: GetWorkspacePluginResponseBodyDataConfigAgentLoop,
      network: GetWorkspacePluginResponseBodyDataConfigNetwork,
    };
  }

  validate() {
    if(this.agentLoop && typeof (this.agentLoop as any).validate === 'function') {
      (this.agentLoop as any).validate();
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspacePluginResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The user-configurable properties currently in effect for the plug-in. This field is empty if the plug-in is not installed.
   */
  config?: GetWorkspacePluginResponseBodyDataConfig;
  /**
   * @remarks
   * Indicates whether the plug-in is enabled. The value is true when the status is ENABLED.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The plug-in name.
   * 
   * @example
   * collaboration
   */
  pluginName?: string;
  /**
   * @remarks
   * The plug-in status. Valid values: DISABLED, ENABLING, ENABLED, ENABLE_FAILED, DISABLING, DISABLE_FAILED.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      enabled: 'enabled',
      pluginName: 'pluginName',
      status: 'status',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetWorkspacePluginResponseBodyDataConfig,
      enabled: 'boolean',
      pluginName: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspacePluginResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The plug-in details.
   */
  data?: GetWorkspacePluginResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message. An error description is returned if the request fails.
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
   * request-123456
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetWorkspacePluginResponseBodyData,
      httpStatusCode: 'number',
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

