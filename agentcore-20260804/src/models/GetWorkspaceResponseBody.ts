// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceResponseBodyDataNetworkConfigurationVpc extends $dara.Model {
  /**
   * @remarks
   * Indicates whether VPC networking is enabled.
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
   * The public egress IP address allocated to the workspace. You can use this IP address to configure IP address whitelists for external services. This field is returned only when the public egress resource is attached and an address is allocated. The field is empty if no address is allocated, the attachment is failed, or the address is being released. This address is independent of whether VPC networking is active.
   * 
   * @example
   * 203.0.113.10
   */
  publicEgressIp?: string;
  /**
   * @remarks
   * The VPC network configuration of the user.
   */
  vpc?: GetWorkspaceResponseBodyDataNetworkConfigurationVpc;
  static names(): { [key: string]: string } {
    return {
      publicEgressIp: 'publicEgressIp',
      vpc: 'vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicEgressIp: 'string',
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
   * The OSS storage authorization status.
   */
  authorizationStatus?: string;
  /**
   * @remarks
   * The name of the private OSS bucket.
   */
  bucketName?: string;
  /**
   * @remarks
   * The time when the workspace was created.
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
   * The network configuration of the workspace.
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
   * The workspace status. Valid values:
   * - Initializing
   * - InitializationFailed
   * - Initialized
   * - Deleting
   * - Deleted
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
   * The storage type of the workspace.
   */
  storageType?: string;
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
      authorizationStatus: 'authorizationStatus',
      bucketName: 'bucketName',
      createTime: 'createTime',
      name: 'name',
      networkConfiguration: 'networkConfiguration',
      regionId: 'regionId',
      status: 'status',
      statusReason: 'statusReason',
      storageType: 'storageType',
      tenantId: 'tenantId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationStatus: 'string',
      bucketName: 'string',
      createTime: 'string',
      name: 'string',
      networkConfiguration: GetWorkspaceResponseBodyDataNetworkConfiguration,
      regionId: 'string',
      status: 'string',
      statusReason: 'string',
      storageType: 'string',
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

