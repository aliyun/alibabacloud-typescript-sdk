// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyInstanceEndpoints extends $dara.Model {
  /**
   * @remarks
   * The endpoint. This parameter is returned if both the AnyTunnel and SingleTunnel modes are enabled for an instance, and the instance is switched from the AnyTunnel mode to the SingleTunnel mode. In this case, two endpoints are returned.
   * 
   * @example
   * hgprecn-cn-uqm362o1b001-cn-hangzhou-internal.hologres.aliyuncs.com:80
   */
  alternativeEndpoints?: string;
  /**
   * @remarks
   * Indicates whether the network is enabled.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
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
   * Valid values:
   * 
   * *   VPCSingleTunnel
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     virtual private cloud (VPC)
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Intranet
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     internal network
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   VPCAnyTunnel
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     not supported by new instances
   * 
   *     <!-- -->
   * 
   * *   Internet
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Internet
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * Internet
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1jqwp2ys6kp7tc9t983
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the instance belongs.
   * 
   * @example
   * vpc-uf66jjber3hgvwhki3wna
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the instance that is deployed in the VPC.
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
   * The key of tag N.
   * 
   * @example
   * tag
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
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
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  autoRenewal?: string;
  /**
   * @remarks
   * The cold storage capacity of the instance. Unit: GB. Standard SSD is used for hot storage, and HDD is used for cold storage.
   * 
   * @example
   * 800
   */
  coldStorage?: number;
  /**
   * @remarks
   * The commodity code.
   * 
   * Valid values:
   * 
   * *   hologram_maxcomputeAccelerate_public_cn
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     China site/Lakehouse Acceleration Edition
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   hologram_combo_public_cn
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     China site/Subscription
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   hologram_prepay_public_intl
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     International site/Subscription
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   hologram_storage_dp_cn
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     China site/Storage plan
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   hologram_postpay_public_cn
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     China site/Pay-as-you-go
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   hologram_postpay_public_intl
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     International site/Pay-as-you-go
   * 
   *     <!-- -->
   * 
   * *   hologram_maxcomputeAccelerate_public_intl
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     International site/Lakehouse Acceleration Edition
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   hologram_cu_dp_cn
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     China site/Compute plan
   * 
   *     <!-- -->
   * 
   * @example
   * hologram_combo_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The number of compute nodes. In a typical configuration, a node has 16 CPU cores and 32 GB of memory.
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
   * The time when the instance was created.
   * 
   * @example
   * 2021-02-03T13:06:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The amount of data that can be stored in the disk of the Standard storage class. Unit: GB.
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
  enableSSL?: boolean;
  /**
   * @remarks
   * EnableServerless
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
   * The expiration time. This parameter is invalid for pay-as-you-go instances.
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
   * The number of CPU cores of the gateway. Unit: core.
   * 
   * @example
   * 4
   */
  gatewayCpu?: number;
  /**
   * @remarks
   * The size of memory resources of the gateway. Unit: GB.
   * 
   * @example
   * 16
   */
  gatewayMemory?: number;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * Valid values:
   * 
   * *   PostPaid
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     pay-as-you-go
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   PrePaid
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     subscription
   * 
   *     <!-- -->
   * 
   *     .
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
   * The instance name. The instance name must be 2 to 64 characters in length.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The owner of the instance.
   * 
   * @example
   * 12345678900000
   */
  instanceOwner?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Suspended
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Allocating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * Valid values:
   * 
   * *   Follower
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     read-only secondary instance
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Standard
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     normal instance
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * Standard
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the primary instance.
   * 
   * @example
   * hgpostcn-cn-i7m2ncd6w002
   */
  leaderInstanceId?: string;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 128
   */
  memory?: number;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Disaster recovery instance role. 
   * * Active: Primary disaster recovery instance.
   * * Passive: Disaster tolerance instance.
   * * PreActive: Primary disaster recovery instance not yet in final state.
   * 
   * @example
   * Active
   */
  replicaRole?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzuq7hpybze2i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * *   redundant: 3 copies
   * *   local: single copy
   * 
   * @example
   * redundant
   */
  storageType?: string;
  /**
   * @remarks
   * The reason for the suspension.
   * 
   * Valid values:
   * 
   * *   Indebet
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instance has an overdue payment
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Manual
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instance is manually suspended
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Overdue
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instance has expired
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * Manual
   */
  suspendReason?: string;
  /**
   * @remarks
   * The instance tag.
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
   * The ID of the zone where the instance resides.
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
   * The error code that is returned if the request failed.
   * 
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The information about the instance.
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
   * The request result, which indicates whether the request was successful.
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

