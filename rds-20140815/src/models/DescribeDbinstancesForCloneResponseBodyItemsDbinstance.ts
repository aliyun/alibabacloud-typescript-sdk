// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIds } from "./DescribeDbinstancesForCloneResponseBodyItemsDbinstanceReadOnlyDbinstanceIds";


export class DescribeDBInstancesForCloneResponseBodyItemsDBInstance extends $dara.Model {
  /**
   * @remarks
   * The RDS edition of the instance. Valid values:
   * 
   * *   **Basic**: RDS Basic Edition
   * *   **HighAvailability**: RDS High-availability Edition
   * *   **Finance**: RDS Enterprise Edition
   * 
   * @example
   * HighAvailability
   */
  category?: string;
  /**
   * @remarks
   * The connection mode of the instance. Valid values:
   * 
   * *   **Standard**: standard mode
   * *   **Safe**: database proxy mode
   * 
   * @example
   * Standard
   */
  connectionMode?: string;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-11-05T11:26:02Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance type of the instance. For more information, see [Instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * @example
   * mysql.n1.micro.1
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The name of the instance. It must be 2 to 256 characters in length. The value can contain letters, digits, underscores (_), and hyphens (-). The value must start with a letter.
   * 
   * > The value cannot start with http:// or https://.
   * 
   * @example
   * Test
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The network connection type of the instance. Valid values:
   * 
   * *   **Internet**
   * *   **Intranet**
   * 
   * @example
   * Intranet
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * The status of the instance. For more information, see [Instance state table](https://help.aliyun.com/document_detail/26315.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **local_ssd/ephemeral_ssd**: local SSD
   * *   **cloud_ssd**: standard SSD.
   * *   **cloud_essd**: enhanced SSD (ESSD)
   * 
   * @example
   * local_ssd
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The role of the instance. Valid values:
   * 
   * *   **Primary**: primary instance
   * *   **Readonly**: read-only instance
   * *   **Guard**: disaster recovery instance
   * *   **Temp**: temporary instance
   * 
   * @example
   * Primary
   */
  DBInstanceType?: string;
  /**
   * @remarks
   * The time when the instance was destroyed. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-12-05T11:26:02Z
   */
  destroyTime?: string;
  /**
   * @remarks
   * The database engine of the instance. Valid values:
   * 
   * *   MySQL
   * *   SQLServer
   * *   PostgreSQL
   * *   PPAS
   * *   MariaDB
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the instance expired. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-11-28T11:26:02Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The ID of the disaster recovery instance. This parameter is returned only when the instance is a primary instance and has a disaster recovery instance.
   * 
   * @example
   * rm-uf64zsuxxxxxxxxxx
   */
  guardDBInstanceId?: string;
  /**
   * @remarks
   * The ID of the instance role.
   * 
   * @example
   * 1
   */
  insId?: number;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**
   * *   **VPC**
   * 
   * @example
   * Classic
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The lock method of the instance. Valid values:
   * 
   * *   **Unlock**: The instance is not locked.
   * *   **ManualLock**: The instance is manually locked.
   * *   **LockByExpiration**: The instance is automatically locked after it expires.
   * *   **LockByRestoration**: The instance is automatically locked before a rollback.
   * *   **LockByDiskQuota**: The instance is automatically locked because its storage capacity is exhausted and the instance is inaccessible.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The reason why the instance was locked.
   * 
   * @example
   * instance_expired
   */
  lockReason?: string;
  /**
   * @remarks
   * The ID of the primary instance. If the value of this parameter is null, the instance is a primary instance.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  masterInstanceId?: string;
  /**
   * @remarks
   * Indicates whether multi-region deployment is used. Valid values:
   * 
   * *   **true**: Multi-region deployment is used.
   * *   **false**: Multi-region deployment is not used.
   * 
   * @example
   * false
   */
  mutriORsignle?: boolean;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * An array consisting of the IDs of the read-only instances that are attached to the primary instance.
   */
  readOnlyDBInstanceIds?: DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIds;
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
   * None.
   * 
   * @example
   * N/A
   */
  replicateId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the temporary instance.
   * 
   * @example
   * sub138xxxxx_rm-xxxxx
   */
  tempDBInstanceId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-uf6adz52c2pxxxxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the instance in the VPC.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  vpcCloudInstanceId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp1opxu1zkhxxxxxxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      connectionMode: 'ConnectionMode',
      createTime: 'CreateTime',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBInstanceType: 'DBInstanceType',
      destroyTime: 'DestroyTime',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      guardDBInstanceId: 'GuardDBInstanceId',
      insId: 'InsId',
      instanceNetworkType: 'InstanceNetworkType',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      masterInstanceId: 'MasterInstanceId',
      mutriORsignle: 'MutriORsignle',
      payType: 'PayType',
      readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
      regionId: 'RegionId',
      replicateId: 'ReplicateId',
      resourceGroupId: 'ResourceGroupId',
      tempDBInstanceId: 'TempDBInstanceId',
      vSwitchId: 'VSwitchId',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      connectionMode: 'string',
      createTime: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceNetType: 'string',
      DBInstanceStatus: 'string',
      DBInstanceStorageType: 'string',
      DBInstanceType: 'string',
      destroyTime: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      guardDBInstanceId: 'string',
      insId: 'number',
      instanceNetworkType: 'string',
      lockMode: 'string',
      lockReason: 'string',
      masterInstanceId: 'string',
      mutriORsignle: 'boolean',
      payType: 'string',
      readOnlyDBInstanceIds: DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIds,
      regionId: 'string',
      replicateId: 'string',
      resourceGroupId: 'string',
      tempDBInstanceId: 'string',
      vSwitchId: 'string',
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.readOnlyDBInstanceIds && typeof (this.readOnlyDBInstanceIds as any).validate === 'function') {
      (this.readOnlyDBInstanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

