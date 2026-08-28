// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallWorkspacePluginRequestBodyConfigNetworkInternet extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable public network access. If set to true without a VPC specified, PUB_NET is used. If set to true with a VPC specified, PRIVATE_PUBNET is used. If only a VPC is specified, PRIVATE_NET is used. At least one of public network or VPC must be configured.
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

export class InstallWorkspacePluginRequestBodyConfigNetworkVpc extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the collaboration plugin uses VPC networking. If set to false, vpcId and vSwitchIds are ignored. If set to true, you must provide both vpcId and at least two vSwitchIds.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of vSwitch IDs. The collaboration plugin requires that the vSwitches cover at least two different zones, and all vSwitches must belong to the VPC specified by vpcId.
   * 
   * This parameter is required.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1234567890
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

export class InstallWorkspacePluginRequestBodyConfigNetwork extends $dara.Model {
  /**
   * @remarks
   * Controls whether the collaboration component is allowed to access the public network. This configuration only controls public network access capability and does not expose the component service to the public network.
   */
  internet?: InstallWorkspacePluginRequestBodyConfigNetworkInternet;
  /**
   * @remarks
   * The user VPC and vSwitch list used for deploying the collaboration plugin. The zones corresponding to the vSwitches are queried by the server and do not need to be provided by the user.
   */
  vpc?: InstallWorkspacePluginRequestBodyConfigNetworkVpc;
  static names(): { [key: string]: string } {
    return {
      internet: 'internet',
      vpc: 'vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internet: InstallWorkspacePluginRequestBodyConfigNetworkInternet,
      vpc: InstallWorkspacePluginRequestBodyConfigNetworkVpc,
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

export class InstallWorkspacePluginRequestBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The network configuration used by the collaboration plugin. If not specified, the server uses the existing network configuration of the workspace.
   */
  network?: InstallWorkspacePluginRequestBodyConfigNetwork;
  static names(): { [key: string]: string } {
    return {
      network: 'network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: InstallWorkspacePluginRequestBodyConfigNetwork,
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallWorkspacePluginRequestBody extends $dara.Model {
  /**
   * @remarks
   * The plugin-specific configuration. The configuration structure is determined by pluginName. Currently, the collaboration plugin supports network.
   */
  config?: InstallWorkspacePluginRequestBodyConfig;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: InstallWorkspacePluginRequestBodyConfig,
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

export class InstallWorkspacePluginRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for installing a plugin.
   */
  body?: InstallWorkspacePluginRequestBody;
  /**
   * @remarks
   * The client idempotency token.
   * 
   * @example
   * workspace-plugin-install-20260810-001
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: InstallWorkspacePluginRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

