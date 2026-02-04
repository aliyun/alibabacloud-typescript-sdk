// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesOverviewResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The architecture of the instance. Valid values:
   * 
   * *   **cluster**: cluster architecture
   * *   **standard**: standard architecture
   * *   **rwsplit**: read/write splitting architecture
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
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid**: subscription
   * *   **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The internal endpoint of the instance.
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
   * The engine version of the instance. Valid values: **2.8**, **4.0**, **5.0**, **6.0**, and **7.0**.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The ID of the distributed instance.
   * 
   * > This parameter is returned only when the instance is a child instance of a distributed instance.
   * 
   * @example
   * gr-bp14rkqrhac****
   */
  globalInstanceId?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * redis.logic.sharding.2g.2db.0rodb.4proxy.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The ID of the instance.
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
   * The state of the instance. Valid values:
   * 
   * *   **Normal**: The instance is normal.
   * *   **Creating**: The instance is being created.
   * *   **Changing**: The configurations of the instance are being changed.
   * *   **Inactive**: The instance is disabled.
   * *   **Flushing**: The instance is being released.
   * *   **Released**: The instance is released.
   * *   **Transforming**: The billing method of the instance is being changed.
   * *   **Unavailable**: The instance is unavailable.
   * *   **Error**: The instance failed to be created.
   * *   **Migrating**: The instance is being migrated.
   * *   **BackupRecovering**: The instance is being restored from a backup.
   * *   **MinorVersionUpgrading**: The minor version of the instance is being updated.
   * *   **NetworkModifying**: The network type of the instance is being changed.
   * *   **SSLModifying**: The SSL certificate of the instance is being changed.
   * *   **MajorVersionUpgrading**: The major version of the instance is being upgraded. The instance remains accessible during the upgrade.
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The edition of the instance. Valid values:
   * 
   * *   **Tair**: Tair (Enterprise Edition)
   * *   **Redis**: Redis Open-Source Edition
   * *   **Memcache**
   * 
   * @example
   * Redis
   */
  instanceType?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **CLASSIC**: classic network
   * *   **VPC**: VPC
   * 
   * @example
   * CLASSIC
   */
  networkType?: string;
  /**
   * @remarks
   * The private IP address of the instance.
   * 
   * > This parameter is not returned when the instance is deployed in the classic network.
   * 
   * @example
   * 172.16.49.***
   */
  privateIp?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmyiu4ekp****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Instance\\"s secondary zone id.
   * > This parameter is only returned when the instance has a secondary zone ID.
   * 
   * @example
   * cn-hangzhou-g
   */
  secondaryZoneId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance is connected.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
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
   * The queried instances.
   */
  instances?: DescribeInstancesOverviewResponseBodyInstances[];
  /**
   * @remarks
   * The ID of the request.
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

