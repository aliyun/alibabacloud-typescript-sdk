// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesOverviewResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The architecture type. Valid values:
   * * **cluster**: Cluster.
   * * **standard**: Standard.
   * * **rwsplit**: Read/write splitting.
   * 
   * @example
   * cluster
   */
  architectureType?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: MB.
   * 
   * @example
   * 4096
   */
  capacity?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **PrePaid**: Subscription.
   * * **PostPaid**: Pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The internal network endpoint of the instance.
   * 
   * @example
   * r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com
   */
  connectionDomain?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2018-11-07T08:49:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the subscription instance expires.
   * 
   * @example
   * 2022-06-13T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The Redis-compatible engine version of the instance. Valid values: **2.8**, **4.0**, **5.0**, **6.0**, and **7.0**.
   * 
   * @example
   * 6.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The distributed instance ID.
   * > This parameter is returned only when the instance is a child instance of a distributed instance.
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The instance specifications.
   * 
   * @example
   * redis.logic.sharding.2g.2db.0rodb.4proxy.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * apitest
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * * **Normal**: Running.
   * * **Creating**: Being created.
   * * **Changing**: Being modified.
   * * **Inactive**: Disabled.
   * * **Flushing**: Being purged.
   * * **Released**: Released.
   * * **Transforming**: Being transformed.
   * * **Unavailable**: Service stopped.
   * * **Error**: Creation failed.
   * * **Migrating**: Being migrated.
   * * **BackupRecovering**: Recovering from a backup.
   * * **MinorVersionUpgrading**: Minor version upgrade in progress.
   * * **NetworkModifying**: Modifying the network.
   * * **SSLModifying**: Modifying SSL configurations.
   * * **MajorVersionUpgrading**: Major engine version upgrade in progress. The instance remains accessible.
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * * **Tair**: Tair (Enterprise Edition)
   * * **Redis**: Open-source Redis
   * * **Memcache**: Memcache
   * 
   * @example
   * Redis
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * * **CLASSIC**: Classic network.
   * * **VPC**: VPC.
   * 
   * @example
   * CLASSIC
   */
  networkType?: string;
  nodeType?: string;
  /**
   * @remarks
   * The VPC IP address. The IP address may change. Connect to the instance by using the internal network endpoint specified by ConnectionDomain.
   * > - This parameter is not returned if the network type of the instance is classic network.
   * > - This parameter is not returned for cloud-native instances.
   * 
   * @example
   * 172.16.49.***
   */
  privateIp?: string;
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
   * The resource group ID of the instance.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The secondary zone ID.
   * > This parameter is returned only when the instance has a secondary zone.
   * 
   * @example
   * cn-hangzhou-g
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      architectureType: 'ArchitectureType',
      capacity: 'Capacity',
      chargeType: 'ChargeType',
      connectionDomain: 'ConnectionDomain',
      createTime: 'CreateTime',
      endTime: 'EndTime',
      engineVersion: 'EngineVersion',
      globalInstanceId: 'GlobalInstanceId',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      networkType: 'NetworkType',
      nodeType: 'NodeType',
      privateIp: 'PrivateIp',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      secondaryZoneId: 'SecondaryZoneId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architectureType: 'string',
      capacity: 'number',
      chargeType: 'string',
      connectionDomain: 'string',
      createTime: 'string',
      endTime: 'string',
      engineVersion: 'string',
      globalInstanceId: 'string',
      instanceClass: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      networkType: 'string',
      nodeType: 'string',
      privateIp: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      secondaryZoneId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesOverviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of instances.
   */
  instances?: DescribeInstancesOverviewResponseBodyInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1E83311F-0EE4-4922-A3BF-730B312B****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesOverviewResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

