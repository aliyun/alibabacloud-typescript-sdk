// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceRequestBodyNetworkConfigurationVpc extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable VPC networking.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of vSwitch IDs. When VPC networking is enabled, the list must contain at least one vSwitch, and all vSwitches must belong to the VPC specified by VpcId.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the user VPC.
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

export class UpdateWorkspaceRequestBodyNetworkConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow public outbound access from the platform. If this parameter is not specified, the original value is retained. Disabling this feature asynchronously cascades to disable the public network access for agents. Re-enabling this feature does not automatically restore the agent switch. This parameter only controls whether the latest versions of managed and custom agents use the public outbound endpoint of the platform. It does not control fixed historical versions, model or MCP proxy endpoints, or the public outbound endpoint of the user VPC.
   * 
   * @example
   * true
   */
  publicEgressEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to allow public inbound access. If this parameter is not specified, the original value is retained. This parameter can be modified together with PublicEgressEnabled and takes effect asynchronously through a unified task. After this feature is disabled, the public inbound endpoints of all agent endpoints in the workspace are closed. After this feature is re-enabled, the original public inbound endpoints are restored. INNER_DIRECT and user VPC inbound endpoints are not affected. Collaboration and Element Web endpoints are not controlled by this parameter. If this parameter is set to false, the workspace VPC must be enabled. The validation is based on the merged network configuration of the existing configuration and the current request. If the existing VPC configuration remains enabled, you can set publicIngressEnabled to false without repeatedly submitting the VPC configuration.
   * 
   * @example
   * true
   */
  publicIngressEnabled?: boolean;
  /**
   * @remarks
   * The VPC network configuration of the user.
   */
  vpc?: UpdateWorkspaceRequestBodyNetworkConfigurationVpc;
  static names(): { [key: string]: string } {
    return {
      publicEgressEnabled: 'publicEgressEnabled',
      publicIngressEnabled: 'publicIngressEnabled',
      vpc: 'vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicEgressEnabled: 'boolean',
      publicIngressEnabled: 'boolean',
      vpc: UpdateWorkspaceRequestBodyNetworkConfigurationVpc,
    };
  }

  validate() {
    if(this.vpc && typeof (this.vpc as any).validate === 'function') {
      (this.vpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceRequestBody extends $dara.Model {
  /**
   * @remarks
   * The updated name of the workspace.
   * 
   * @example
   * production-agents-v2
   */
  name?: string;
  /**
   * @remarks
   * The updated network configuration of the workspace.
   */
  networkConfiguration?: UpdateWorkspaceRequestBodyNetworkConfiguration;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      networkConfiguration: 'networkConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      networkConfiguration: UpdateWorkspaceRequestBodyNetworkConfiguration,
    };
  }

  validate() {
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for updating a workspace.
   */
  body?: UpdateWorkspaceRequestBody;
  /**
   * @remarks
   * The client idempotency token.
   * 
   * @example
   * workspace-update-20260805-001
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
      body: UpdateWorkspaceRequestBody,
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

