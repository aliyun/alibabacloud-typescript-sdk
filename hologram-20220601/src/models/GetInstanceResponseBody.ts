// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyInstanceEndpoints extends $dara.Model {
  /**
   * @remarks
   * Some legacy instances have both AnyTunnel and SingleTunnel enabled. When switching from AnyTunnel to SingleTunnel, the endpoints for both are retained. Therefore, an additional field is required to store the endpoints.
   * 
   * @example
   * hgprecn-cn-uqm362o1b001-cn-hangzhou-internal.hologres.aliyuncs.com:80
   */
  alternativeEndpoints?: string;
  /**
   * @remarks
   * Indicates whether the network is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * hgprecn-cn-uqm362o1b001-cn-hangzhou-internal.hologres.aliyuncs.com:80
   */
  endpoint?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * Internet
   */
  type?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1jqwp2ys6kp7tc9t983
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf66jjber3hgvwhki3wna
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC instance ID.
   * 
   * @example
   * hgprecn-cn-uqm362o1b001-frontend-st
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      alternativeEndpoints: 'AlternativeEndpoints',
      enabled: 'Enabled',
      endpoint: 'Endpoint',
      type: 'Type',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alternativeEndpoints: 'string',
      enabled: 'boolean',
      endpoint: 'string',
      type: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class GetInstanceResponseBodyInstance extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled.
   * 
   * @example
   * true
   */
  autoRenewal?: string;
  /**
   * @remarks
   * The cold storage capacity.
   * Unit: GB.
   * SSD is equivalent to hot storage, which is also standard storage. HDD is equivalent to cold storage.
   * 
   * @example
   * 800
   */
  coldStorage?: number;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * hologram_combo_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The number of compute nodes.
   * A typical configuration for a node is 16 vCPUs and 32 GB of memory.
   * 
   * @example
   * 2
   */
  computeNodeCount?: number;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 32
   */
  cpu?: number;
  /**
   * @remarks
   * The creation time. The time is displayed in UTC and formatted in accordance with the ISO 8601 standard.
   * 
   * @example
   * 2021-02-03T13:06:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The standard storage size.
   * Unit: GB.
   * 
   * @example
   * 500
   */
  disk?: string;
  /**
   * @remarks
   * Indicates whether data lake acceleration is enabled.
   * 
   * @example
   * true
   */
  enableHiveAccess?: string;
  /**
   * @remarks
   * Indicates whether SSL is enabled.
   * 
   * @example
   * true
   */
  enableSSL?: boolean;
  /**
   * @remarks
   * Indicates whether the instance sandbox feature is enabled.
   */
  enableSandbox?: boolean;
  /**
   * @remarks
   * Indicates whether Serverless Computing is enabled.
   * 
   * @example
   * true
   */
  enableServerless?: boolean;
  /**
   * @remarks
   * The list of endpoints.
   */
  endpoints?: GetInstanceResponseBodyInstanceEndpoints[];
  /**
   * @remarks
   * The expiration time. The time is displayed in UTC and formatted in accordance with the ISO 8601 standard.
   * Pay-as-you-go instances do not have an expiration time.
   * 
   * @example
   * 2021-02-03T13:06:06Z
   */
  expirationTime?: string;
  /**
   * @remarks
   * The number of gateway nodes.
   * 
   * @example
   * 2
   */
  gatewayCount?: number;
  /**
   * @remarks
   * The CPU resources of the gateway.
   * Unit: Cores.
   * 
   * @example
   * 4
   */
  gatewayCpu?: number;
  /**
   * @remarks
   * The memory resources of the gateway.
   * Unit: GB.
   * 
   * @example
   * 16
   */
  gatewayMemory?: number;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgpostcn-cn-tl32s6cgw00b
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * The name must be 2 to 64 characters in length.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance owner.
   * 
   * @example
   * 12345678900000
   */
  instanceOwner?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * Standard
   */
  instanceType?: string;
  /**
   * @remarks
   * The primary instance ID.
   * 
   * @example
   * hgpostcn-cn-i7m2ncd6w002
   */
  leaderInstanceId?: string;
  /**
   * @remarks
   * The memory size.
   * Unit: GB.
   * 
   * @example
   * 128
   */
  memory?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The role of the disaster recovery instance.
   * Active: The primary disaster recovery instance.
   * Passive: The secondary disaster recovery instance. 
   * PreActive: The primary disaster recovery instance that has not reached the desired state.
   * 
   * @example
   * Active
   */
  replicaRole?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzuq7hpybze2i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * * redundant: 3AZ.
   * * local: 1AZ.
   * 
   * @example
   * redundant
   */
  storageType?: string;
  /**
   * @remarks
   * The reason for suspension.
   * 
   * @example
   * Manual
   */
  suspendReason?: string;
  /**
   * @remarks
   * The instance tags.
   */
  tags?: GetInstanceResponseBodyInstanceTags[];
  /**
   * @remarks
   * The instance version.
   * 
   * @example
   * r1.3.37
   */
  version?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      coldStorage: 'ColdStorage',
      commodityCode: 'CommodityCode',
      computeNodeCount: 'ComputeNodeCount',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      disk: 'Disk',
      enableHiveAccess: 'EnableHiveAccess',
      enableSSL: 'EnableSSL',
      enableSandbox: 'EnableSandbox',
      enableServerless: 'EnableServerless',
      endpoints: 'Endpoints',
      expirationTime: 'ExpirationTime',
      gatewayCount: 'GatewayCount',
      gatewayCpu: 'GatewayCpu',
      gatewayMemory: 'GatewayMemory',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceOwner: 'InstanceOwner',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      leaderInstanceId: 'LeaderInstanceId',
      memory: 'Memory',
      regionId: 'RegionId',
      replicaRole: 'ReplicaRole',
      resourceGroupId: 'ResourceGroupId',
      storageType: 'StorageType',
      suspendReason: 'SuspendReason',
      tags: 'Tags',
      version: 'Version',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'string',
      coldStorage: 'number',
      commodityCode: 'string',
      computeNodeCount: 'number',
      cpu: 'number',
      creationTime: 'string',
      disk: 'string',
      enableHiveAccess: 'string',
      enableSSL: 'boolean',
      enableSandbox: 'boolean',
      enableServerless: 'boolean',
      endpoints: { 'type': 'array', 'itemType': GetInstanceResponseBodyInstanceEndpoints },
      expirationTime: 'string',
      gatewayCount: 'number',
      gatewayCpu: 'number',
      gatewayMemory: 'number',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceOwner: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      leaderInstanceId: 'string',
      memory: 'number',
      regionId: 'string',
      replicaRole: 'string',
      resourceGroupId: 'string',
      storageType: 'string',
      suspendReason: 'string',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyInstanceTags },
      version: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
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

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The instance information.
   */
  instance?: GetInstanceResponseBodyInstance;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 865A02C2-B374-5DD4-9B34-0CA15DA1AEBD
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. This parameter indicates whether an exception occurred during the request and is independent of the business logic.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      instance: 'Instance',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      instance: GetInstanceResponseBodyInstance,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.instance && typeof (this.instance as any).validate === 'function') {
      (this.instance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

