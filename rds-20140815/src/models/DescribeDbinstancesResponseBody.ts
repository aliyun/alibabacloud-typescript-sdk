// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId extends $dara.Model {
  /**
   * @remarks
   * The read-only instance ID.
   * 
   * @example
   * rr-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds extends $dara.Model {
  readOnlyDBInstanceId?: DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId[];
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId },
    };
  }

  validate() {
    if(Array.isArray(this.readOnlyDBInstanceId)) {
      $dara.Model.validateArray(this.readOnlyDBInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyItemsDBInstance extends $dara.Model {
  autoRenewal?: boolean;
  blueGreenDeploymentName?: string;
  blueInstanceName?: string;
  /**
   * @remarks
   * A deprecated parameter.
   * 
   * @example
   * 0
   */
  bpeEnabled?: string;
  /**
   * @remarks
   * Indicates whether the I/O burst feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The RDS edition of the instance. Valid values:
   * 
   * *   **Basic**: RDS Basic Edition
   * *   **HighAvailability**: RDS High-availability Edition
   * *   **Finance**: RDS Enterprise Edition
   * 
   * >  This parameter is returned only when the **InstanceLevel** parameter is set to **1**.
   * 
   * @example
   * Basic
   */
  category?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * false
   */
  coldDataEnabled?: boolean;
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
   * The endpoint of the instance.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The creation time of the instance. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-11-05T11:26:02Z
   */
  createTime?: string;
  /**
   * @remarks
   * The number of CPU instances.
   * 
   * Returns only when the InstanceLevel parameter is 1.
   * 
   * @example
   * 2
   */
  DBInstanceCPU?: string;
  /**
   * @remarks
   * The instance type of the instance. For information, see [Primary ApsaraDB RDS instance types](https://help.aliyun.com/document_detail/26312.html).
   * 
   * @example
   * rds.mys2.small
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * Test database
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The memory size of the node. Unit: MB.
   * 
   * Returns only when the InstanceLevel parameter is 1.
   * 
   * @example
   * 4096
   */
  DBInstanceMemory?: number;
  /**
   * @remarks
   * The type of the network connection to the instance. Valid values:
   * 
   * *   **Internet**
   * *   **Intranet**
   * 
   * @example
   * Internet
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * The instance status. For more information, see [Instance statuses](https://help.aliyun.com/document_detail/26315.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The storage type of the instance.
   * 
   * @example
   * ModuleList.4.ModuleCode
   */
  DBInstanceStorageType?: string;
  /**
   * @remarks
   * The type of the instance. Valid values:
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
   * The ID of the dedicated cluster.
   * 
   * @example
   * dhg-7a9xxxxxxxx
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The name of the dedicated cluster.
   * 
   * @example
   * testhostgroup
   */
  dedicatedHostGroupName?: string;
  /**
   * @remarks
   * The ID of the host on which the logger instance resides.
   * 
   * @example
   * dh-bpxxxx
   */
  dedicatedHostIdForLog?: string;
  /**
   * @remarks
   * The ID of the host on which the primary instance resides.
   * 
   * @example
   * dh-bpxxxx
   */
  dedicatedHostIdForMaster?: string;
  /**
   * @remarks
   * The ID of the host on which the secondary instance resides.
   * 
   * @example
   * dh-bpxxxx
   */
  dedicatedHostIdForSlave?: string;
  /**
   * @remarks
   * The name of the host on which the logger instance resides.
   * 
   * @example
   * testlog
   */
  dedicatedHostNameForLog?: string;
  /**
   * @remarks
   * The name of the host on which the primary instance resides.
   * 
   * @example
   * testmaster
   */
  dedicatedHostNameForMaster?: string;
  /**
   * @remarks
   * The name of the host on which the secondary instance resides.
   * 
   * @example
   * testslave
   */
  dedicatedHostNameForSlave?: string;
  /**
   * @remarks
   * The zone ID of the host on which the logger instance resides.
   * 
   * @example
   * cn-hangzhou-b
   */
  dedicatedHostZoneIdForLog?: string;
  /**
   * @remarks
   * The zone ID of the host on which the primary instance resides.
   * 
   * @example
   * cn-hangzhou-c
   */
  dedicatedHostZoneIdForMaster?: string;
  /**
   * @remarks
   * The zone ID of the host on which the secondary instance resides.
   * 
   * @example
   * cn-hangzhou-d
   */
  dedicatedHostZoneIdForSlave?: string;
  /**
   * @remarks
   * Indicates whether the release protection feature is enabled for the instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The time when the instance was destroyed. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-11-05T11:26:02Z
   */
  destroyTime?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * The expiration time of the instance. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * >  Pay-as-you-go instances never expire.
   * 
   * @example
   * 2019-02-27T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The name of the dedicated cluster to which the instance belongs. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
   * 
   * @example
   * TestGroup
   */
  generalGroupName?: string;
  greenInstanceName?: string;
  /**
   * @remarks
   * The ID of the disaster recovery instance. This parameter is returned only when the instance is a primary instance and has a disaster recovery instance attached.
   * 
   * @example
   * rm-uf64zsuxxxxxxxxxx
   */
  guardDBInstanceId?: string;
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
   * Indicates whether the I/O acceleration feature is enabled. Valid values:
   * 
   * *   1: enabled
   * *   0: disabled
   * 
   * @example
   * 0
   */
  ioAccelerationEnabled?: string;
  isAnalyticIns?: string;
  isAnalyticReadOnlyIns?: boolean;
  /**
   * @remarks
   * The lock mode of the instance. Valid values:
   * 
   * *   **Unlock**: The instance is not locked.
   * *   **ManualLock**: The instance is manually locked.
   * *   **LockByExpiration**: The instance is automatically locked due to instance expiration.
   * *   **LockByRestoration**: The instance is automatically locked before the instance is rolled back.
   * *   **LockByDiskQuota**: The instance is automatically locked due to exhausted storage capacity.
   * *   **Released**: The instance is released. After an instance is released, the instance cannot be unlocked. You can only restore the backup data of the instance to a new instance. This process requires a long period of time.
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
   * The ID of the primary instance. If this parameter is null, the instance is a primary instance.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  masterInstanceId?: string;
  /**
   * @remarks
   * Indicates whether the multi-zone deployment method is used for the instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  If the multi-zone deployment method is used for the instance, the zone ID of the instance contains MAZ. Example: `cn-hangzhou-MAZ10(h,i)`.
   * 
   * @example
   * true
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
   * The IDs of the read-only instances. This parameter is returned only when the instance is a primary instance and has the read-only instances attached.
   */
  readOnlyDBInstanceIds?: DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds;
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmyxxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the instance supports weight-based switchovers for high availability. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
   * 
   * *   **100**: The instance supports weight-based switchovers for high availability.
   * *   **0**: The instance does not support weight-based switchovers for high availability.
   * 
   * @example
   * 100
   */
  switchWeight?: number;
  /**
   * @remarks
   * The ID of the temporary instance. This parameter is returned only when the instance is a primary instance and has a temporary instance attached.
   * 
   * @example
   * rm-uf64zsuxxxxxxxxxx
   */
  tempDBInstanceId?: string;
  /**
   * @remarks
   * The information about the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
   * 
   * @example
   * Run as expected.
   */
  tips?: string;
  /**
   * @remarks
   * The severity of the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
   * 
   * *   **1**: The instance is normal.
   * *   **2**: The specifications of the read-only instances do not match the specifications of the primary instance, and instance performance may be affected. You must adjust the specifications of these instances based on your business requirements.
   * 
   * @example
   * 1
   */
  tipsLevel?: number;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf6adz52c2pxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the instance. This parameter is returned only when the instance resides in a VPC.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  vpcCloudInstanceId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-uf6f7l4fg90xxxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC name.
   * 
   * @example
   * test-huadong
   */
  vpcName?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      blueGreenDeploymentName: 'BlueGreenDeploymentName',
      blueInstanceName: 'BlueInstanceName',
      bpeEnabled: 'BpeEnabled',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      coldDataEnabled: 'ColdDataEnabled',
      connectionMode: 'ConnectionMode',
      connectionString: 'ConnectionString',
      createTime: 'CreateTime',
      DBInstanceCPU: 'DBInstanceCPU',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceMemory: 'DBInstanceMemory',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorageType: 'DBInstanceStorageType',
      DBInstanceType: 'DBInstanceType',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHostGroupName: 'DedicatedHostGroupName',
      dedicatedHostIdForLog: 'DedicatedHostIdForLog',
      dedicatedHostIdForMaster: 'DedicatedHostIdForMaster',
      dedicatedHostIdForSlave: 'DedicatedHostIdForSlave',
      dedicatedHostNameForLog: 'DedicatedHostNameForLog',
      dedicatedHostNameForMaster: 'DedicatedHostNameForMaster',
      dedicatedHostNameForSlave: 'DedicatedHostNameForSlave',
      dedicatedHostZoneIdForLog: 'DedicatedHostZoneIdForLog',
      dedicatedHostZoneIdForMaster: 'DedicatedHostZoneIdForMaster',
      dedicatedHostZoneIdForSlave: 'DedicatedHostZoneIdForSlave',
      deletionProtection: 'DeletionProtection',
      destroyTime: 'DestroyTime',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      generalGroupName: 'GeneralGroupName',
      greenInstanceName: 'GreenInstanceName',
      guardDBInstanceId: 'GuardDBInstanceId',
      instanceNetworkType: 'InstanceNetworkType',
      ioAccelerationEnabled: 'IoAccelerationEnabled',
      isAnalyticIns: 'IsAnalyticIns',
      isAnalyticReadOnlyIns: 'IsAnalyticReadOnlyIns',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      masterInstanceId: 'MasterInstanceId',
      mutriORsignle: 'MutriORsignle',
      payType: 'PayType',
      readOnlyDBInstanceIds: 'ReadOnlyDBInstanceIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      switchWeight: 'SwitchWeight',
      tempDBInstanceId: 'TempDBInstanceId',
      tips: 'Tips',
      tipsLevel: 'TipsLevel',
      vSwitchId: 'VSwitchId',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      blueGreenDeploymentName: 'string',
      blueInstanceName: 'string',
      bpeEnabled: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      coldDataEnabled: 'boolean',
      connectionMode: 'string',
      connectionString: 'string',
      createTime: 'string',
      DBInstanceCPU: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceMemory: 'number',
      DBInstanceNetType: 'string',
      DBInstanceStatus: 'string',
      DBInstanceStorageType: 'string',
      DBInstanceType: 'string',
      dedicatedHostGroupId: 'string',
      dedicatedHostGroupName: 'string',
      dedicatedHostIdForLog: 'string',
      dedicatedHostIdForMaster: 'string',
      dedicatedHostIdForSlave: 'string',
      dedicatedHostNameForLog: 'string',
      dedicatedHostNameForMaster: 'string',
      dedicatedHostNameForSlave: 'string',
      dedicatedHostZoneIdForLog: 'string',
      dedicatedHostZoneIdForMaster: 'string',
      dedicatedHostZoneIdForSlave: 'string',
      deletionProtection: 'boolean',
      destroyTime: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      generalGroupName: 'string',
      greenInstanceName: 'string',
      guardDBInstanceId: 'string',
      instanceNetworkType: 'string',
      ioAccelerationEnabled: 'string',
      isAnalyticIns: 'string',
      isAnalyticReadOnlyIns: 'boolean',
      lockMode: 'string',
      lockReason: 'string',
      masterInstanceId: 'string',
      mutriORsignle: 'boolean',
      payType: 'string',
      readOnlyDBInstanceIds: DescribeDBInstancesResponseBodyItemsDBInstanceReadOnlyDBInstanceIds,
      regionId: 'string',
      resourceGroupId: 'string',
      switchWeight: 'number',
      tempDBInstanceId: 'string',
      tips: 'string',
      tipsLevel: 'number',
      vSwitchId: 'string',
      vpcCloudInstanceId: 'string',
      vpcId: 'string',
      vpcName: 'string',
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

export class DescribeDBInstancesResponseBodyItems extends $dara.Model {
  DBInstance?: DescribeDBInstancesResponseBodyItemsDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsDBInstance },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstance)) {
      $dara.Model.validateArray(this.DBInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the instances.
   */
  items?: DescribeDBInstancesResponseBodyItems;
  /**
   * @remarks
   * The token that is used to display the next page. If the returned entries are displayed on multiple pages, the next page can be displayed when you call this operation again with **NextToken** specified.
   * 
   * @example
   * o7PORW5o2TJg**********
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * > If you specify **MaxResults** or **NextToken**, only the value **1** is returned. You can ignore the value 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * > If you specify **MaxResults** or **NextToken**, only the number of entries on the current page is returned. You can ignore the number.
   * 
   * @example
   * 100
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBInstancesResponseBodyItems,
      nextToken: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

