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
   * The list of vSwitch IDs. If the VPC network is enabled, at least one vSwitch must be included, and all vSwitches must belong to the VPC specified by VpcId.
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
   * Specifies whether to allow public outbound access from the platform. If not specified, the default value is true. This setting only controls whether the latest versions of managed and custom agents use the public outbound endpoint of the platform. It does not affect fixed historical versions, model or Model Context Protocol (MCP) proxy outbound endpoints, or the public outbound endpoint of the user VPC.
   * 
   * @example
   * true
   */
  publicEgressEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to allow public inbound access. If not specified, the default value is true. If disabled, the public inbound endpoints of all agent endpoints in the workspace are closed. If re-enabled, the original public inbound endpoints are restored. INNER_DIRECT and user VPC inbound endpoints are not affected. Collaboration and Element Web inbound endpoints are not controlled by this setting.
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
   * If specified, the workspace is directly bound to this AgentSpace without creating a new one. The associated CloudMonitor (CMS) workspace is determined by the server\\"s reverse lookup result, and CmsWorkspace validation is skipped. When the workspace is deleted, only the binding is removed, and the AgentSpace is not deleted. The value must match the current account and region, and the associated CMS workspace must be found through reverse lookup. Otherwise, InvalidParameter is returned.
   * 
   * @example
   * my-agent-space
   */
  agentSpace?: string;
  /**
   * @remarks
   * If specified, the workspace is bound to this CloudMonitor (CMS) workspace without creating a new one. When the workspace is deleted, only the binding is removed, and the CMS workspace is not deleted. The value must match the current account and region. Otherwise, InvalidParameter is returned.
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
   * The storage type of the workspace. PLATFORM indicates platform-managed storage. PRIVATE indicates user-owned private Object Storage Service (OSS) storage.
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

