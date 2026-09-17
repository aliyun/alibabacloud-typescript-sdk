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

export class CreateWorkspaceResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * This parameter is required.
   * 
   * @example
   * environment
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * This parameter is required.
   * 
   * @example
   * development
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AI Registry namespace ID. This value is returned after the related resources are bound. It may be empty during initialization.
   * 
   * @example
   * namespace-0123456789abcdef
   * 
   * **if can be null:**
   * true
   */
  aiRegistryNamespaceId?: string;
  /**
   * @remarks
   * The OSS storage authorization status.
   * 
   * @example
   * AUTHORIZED
   */
  authorizationStatus?: string;
  /**
   * @remarks
   * The name of the private OSS bucket.
   * 
   * @example
   * bucket-001
   */
  bucketName?: string;
  /**
   * @remarks
   * The CloudMonitor workspace ID. This value is returned after the related resources are bound. It may be empty during initialization.
   * 
   * @example
   * cms-ws-0123456789abcdef
   * 
   * **if can be null:**
   * true
   */
  cmsWorkspaceId?: string;
  /**
   * @remarks
   * The time when the workspace was created, in ISO 8601 format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-08-28T10:00:00+08:00
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
   * The ID of the resource group to which the workspace belongs. This value may be empty if no resource group is specified.
   * 
   * @example
   * rg-acfm1234567890
   * 
   * **if can be null:**
   * true
   */
  resourceGroupId?: string;
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
   * The supplementary reason for the current workspace status. This value is used to display the specific reason when initialization fails or authorization is pending. It may be empty under normal conditions.
   * 
   * @example
   * Waiting for OSS RAM authorization
   * 
   * **if can be null:**
   * true
   */
  statusReason?: string;
  /**
   * @remarks
   * The storage type of the workspace.
   * 
   * @example
   * PRIVATE
   */
  storageType?: string;
  /**
   * @remarks
   * The list of workspace tags. An empty array is returned if no tags are set.
   * 
   * This parameter is required.
   */
  tags?: CreateWorkspaceResponseBodyDataTags[];
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
      aiRegistryNamespaceId: 'aiRegistryNamespaceId',
      authorizationStatus: 'authorizationStatus',
      bucketName: 'bucketName',
      cmsWorkspaceId: 'cmsWorkspaceId',
      createTime: 'createTime',
      name: 'name',
      networkConfiguration: 'networkConfiguration',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      statusReason: 'statusReason',
      storageType: 'storageType',
      tags: 'tags',
      tenantId: 'tenantId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRegistryNamespaceId: 'string',
      authorizationStatus: 'string',
      bucketName: 'string',
      cmsWorkspaceId: 'string',
      createTime: 'string',
      name: 'string',
      networkConfiguration: CreateWorkspaceResponseBodyDataNetworkConfiguration,
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      statusReason: 'string',
      storageType: 'string',
      tags: { 'type': 'array', 'itemType': CreateWorkspaceResponseBodyDataTags },
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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

