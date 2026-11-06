// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceRequestBodyNetworkConfigurationVpc extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the VPC network.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of vSwitch IDs. When the VPC network is enabled, at least one vSwitch must be included, and all vSwitches must belong to the VPC specified by VpcId.
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

export class CreateWorkspaceRequestBodyNetworkConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow public egress access from the platform. If not specified, this feature is enabled by default. This parameter only controls whether the latest versions of managed and custom agents use the public egress of the platform. It does not control fixed historical versions, model or MCP proxy egress, or the public egress of the user VPC.
   * 
   * @example
   * true
   */
  publicEgressEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to allow public ingress access. If not specified, this feature is enabled by default. If disabled, the public ingress endpoints of all agent endpoints in the workspace are closed. If re-enabled, the original public ingress endpoints are restored. INNER_DIRECT and user VPC ingress endpoints are not affected. Collaboration and Element Web ingress endpoints are not controlled by this parameter.
   * 
   * @example
   * true
   */
  publicIngressEnabled?: boolean;
  /**
   * @remarks
   * The VPC network configuration of the user.
   */
  vpc?: CreateWorkspaceRequestBodyNetworkConfigurationVpc;
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
      vpc: CreateWorkspaceRequestBodyNetworkConfigurationVpc,
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

export class CreateWorkspaceRequestBody extends $dara.Model {
  /**
   * @remarks
   * If specified, the workspace is directly bound to this AgentSpace without creating a new one. The CloudMonitor (CMS) workspace to which it belongs is determined by the server-side reverse lookup result, and CmsWorkspace validation is not required in this case. When the workspace is deleted, it is only unbound, and the AgentSpace is not deleted. The value must match the current account and region, and the reverse lookup must return the associated CMS workspace. Otherwise, InvalidParameter is returned.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * If specified, the workspace is bound to this CloudMonitor (CMS) workspace without creating a new one. When the workspace is deleted, it is only unbound, and the CMS workspace is not deleted. The value must match the current account and region. Otherwise, InvalidParameter is returned.
   * 
   * @example
   * my-cms-workspace
   */
  cmsWorkspace?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * production-agents
   */
  name?: string;
  /**
   * @remarks
   * The network configuration of the workspace.
   */
  networkConfiguration?: CreateWorkspaceRequestBodyNetworkConfiguration;
  /**
   * @remarks
   * The storage type of the workspace.
   * 
   * @example
   * PRIVATE
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      cmsWorkspace: 'cmsWorkspace',
      name: 'name',
      networkConfiguration: 'networkConfiguration',
      storageType: 'storageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      cmsWorkspace: 'string',
      name: 'string',
      networkConfiguration: CreateWorkspaceRequestBodyNetworkConfiguration,
      storageType: 'string',
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

export class CreateWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for creating a workspace.
   */
  body?: CreateWorkspaceRequestBody;
  /**
   * @remarks
   * The client idempotency token.
   * 
   * @example
   * workspace-create-20260805-001
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
      body: CreateWorkspaceRequestBody,
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

