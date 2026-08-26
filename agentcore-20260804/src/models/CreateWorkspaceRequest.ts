// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceRequestBodyNetworkConfigurationVpc extends $dara.Model {
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
   * The list of vSwitch IDs. When VPC networking is enabled, at least one vSwitch must be included, and all vSwitches must belong to the VPC specified by VpcId.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the VPC.
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
   * The VPC network configuration of the user.
   * 
   * This parameter is required.
   */
  vpc?: CreateWorkspaceRequestBodyNetworkConfigurationVpc;
  static names(): { [key: string]: string } {
    return {
      vpc: 'vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * The workspace name.
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
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      networkConfiguration: 'networkConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      networkConfiguration: CreateWorkspaceRequestBodyNetworkConfiguration,
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

