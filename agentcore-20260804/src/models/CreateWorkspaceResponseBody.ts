// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceResponseBodyDataNetworkConfigurationVpc extends $dara.Model {
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
   * The list of vSwitch IDs.
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

export class CreateWorkspaceResponseBodyDataNetworkConfiguration extends $dara.Model {
  /**
   * @remarks
   * The VPC network configuration of the user.
   */
  vpc?: CreateWorkspaceResponseBodyDataNetworkConfigurationVpc;
  static names(): { [key: string]: string } {
    return {
      vpc: 'vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: CreateWorkspaceResponseBodyDataNetworkConfigurationVpc,
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

export class CreateWorkspaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * production-agents
   */
  name?: string;
  /**
   * @remarks
   * The network configuration of the workspace.
   */
  networkConfiguration?: CreateWorkspaceResponseBodyDataNetworkConfiguration;
  /**
   * @remarks
   * The region ID of the workspace.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The workspace status.
   * 
   * @example
   * Initialized
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant to which the workspace belongs.
   * 
   * @example
   * tenant-123456
   */
  tenantId?: string;
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
      name: 'name',
      networkConfiguration: 'networkConfiguration',
      regionId: 'regionId',
      status: 'status',
      tenantId: 'tenantId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      networkConfiguration: CreateWorkspaceResponseBodyDataNetworkConfiguration,
      regionId: 'string',
      status: 'string',
      tenantId: 'string',
      workspaceId: 'string',
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

export class CreateWorkspaceResponseBody extends $dara.Model {
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
   * The workspace details.
   */
  data?: CreateWorkspaceResponseBodyData;
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
   * The response message.
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
   * Indicates whether the request is successful.
   * 
   * @example
   * true
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
      data: CreateWorkspaceResponseBodyData,
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

