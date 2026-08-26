// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceResponseBodyDataNetworkConfigurationVpc extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the VPC network is enabled.
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

export class GetWorkspaceResponseBodyDataNetworkConfiguration extends $dara.Model {
  /**
   * @remarks
   * The user VPC network configuration.
   */
  vpc?: GetWorkspaceResponseBodyDataNetworkConfigurationVpc;
  static names(): { [key: string]: string } {
    return {
      vpc: 'vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: GetWorkspaceResponseBodyDataNetworkConfigurationVpc,
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

export class GetWorkspaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-08-06T03:56:56Z
   */
  createTime?: string;
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
   * The workspace network configuration.
   */
  networkConfiguration?: GetWorkspaceResponseBodyDataNetworkConfiguration;
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
   * The workspace status. Valid values: Initializing, InitializationFailed, Initialized, Deleting, Deleted.
   * 
   * @example
   * Initialized
   */
  status?: string;
  /**
   * @remarks
   * The reason for the workspace status.
   * 
   * @example
   * InitializationFailed: VPC not found
   */
  statusReason?: string;
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
      createTime: 'createTime',
      name: 'name',
      networkConfiguration: 'networkConfiguration',
      regionId: 'regionId',
      status: 'status',
      statusReason: 'statusReason',
      tenantId: 'tenantId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      name: 'string',
      networkConfiguration: GetWorkspaceResponseBodyDataNetworkConfiguration,
      regionId: 'string',
      status: 'string',
      statusReason: 'string',
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

export class GetWorkspaceResponseBody extends $dara.Model {
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
  data?: GetWorkspaceResponseBodyData;
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
   * Indicates whether the request was successful.
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
      data: GetWorkspaceResponseBodyData,
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

