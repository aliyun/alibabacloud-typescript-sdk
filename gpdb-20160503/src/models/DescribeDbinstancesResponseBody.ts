// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesResponseBodyItemsDBInstanceTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * @example
   * test-value
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

export class DescribeDBInstancesResponseBodyItemsDBInstanceTags extends $dara.Model {
  tag?: DescribeDBInstancesResponseBodyItemsDBInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsDBInstanceTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyItemsDBInstance extends $dara.Model {
  /**
   * @remarks
   * An invalid parameter. It is no longer returned when you call this operation.
   * 
   * You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/86910.html) operation to query the access mode of an instance.
   * 
   * @example
   * null
   */
  connectionMode?: string;
  /**
   * @remarks
   * The time when the instance was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-10-09T04:54:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The edition of the instance. Valid values:
   * 
   * *   **Basic**: Basic Edition.
   * *   **HighAvailability**: High-availability Edition.
   * *   **Finance**: Enterprise Edition.
   * 
   * @example
   * HighAvailability
   */
  DBInstanceCategory?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceDescription?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The resource type of the instance. Valid values:
   * 
   * *   **Serverless**: Serverless mode.
   * *   **StorageElastic**: elastic storage mode.
   * *   **Classic**: reserved storage mode.
   * 
   * @example
   * StorageElastic
   */
  DBInstanceMode?: string;
  /**
   * @remarks
   * The type of the network interface card (NIC) that is used by the instance. Valid values:
   * 
   * *   **0**: Internet.
   * *   **1**: internal network.
   * *   **2**: VPC.
   * 
   * @example
   * 2
   */
  DBInstanceNetType?: string;
  /**
   * @remarks
   * The status of the instance. For more information, see [Instance statuses](https://help.aliyun.com/document_detail/86944.html).
   * 
   * @example
   * Running
   */
  DBInstanceStatus?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * gpdb
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * @example
   * 6.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The expiration time of the instance. The time is displayed in UTC.
   * 
   * >  The expiration time of a pay-as-you-go instance is `2999-09-08T16:00:00Z`.
   * 
   * @example
   * 2999-09-08T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The resource type of the instance. Valid values:
   * 
   * *   **cluster**: Serverless mode or elastic storage mode.
   * *   **replicaSet**: reserved storage mode.
   * 
   * @example
   * cluster
   */
  instanceDeployType?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **Classic**: classic network.
   * *   **VPC**: VPC.
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The lock mode of the instance. Valid values:
   * 
   * *   **Unlock**: The instance is not locked.
   * *   **ManualLock**: The instance is manually locked.
   * *   **LockByExpiration**: The instance is automatically locked due to instance expiration.
   * *   **LockByRestoration**: The instance is automatically locked due to instance restoration.
   * *   **LockByDiskQuota**: The instance is automatically locked due to exhausted storage.
   * *   **LockReadInstanceByDiskQuota**: The instance is a read-only instance and is automatically locked when the disk space is full.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The reason why the instance is locked. Valid values:
   * 
   * *   **0**: The instance is not locked.
   * *   **1**: The instance is manually locked.
   * *   **2**: The instance is automatically locked due to instance expiration.
   * *   **3**: The instance is automatically locked due to instance restoration.
   * *   **4**: The instance is automatically locked due to exhausted storage.
   * 
   * >  If the instance is in reserved storage mode and is not locked, null is returned.
   * 
   * @example
   * 0
   */
  lockReason?: string;
  /**
   * @remarks
   * The number of coordinator nodes.
   * 
   * @example
   * 1
   */
  masterNodeNum?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * product type
   * 
   * @example
   * standard
   */
  prodType?: string;
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
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The number of compute nodes.
   * 
   * @example
   * 4
   */
  segNodeNum?: string;
  /**
   * @remarks
   * The type of the Serverless mode. Valid values:
   * 
   * *   **Manual**: manual scheduling.
   * *   **Auto**: automatic scheduling.
   * 
   * >  This parameter is returned only for instances in Serverless mode.
   * 
   * @example
   * Manual
   */
  serverlessMode?: string;
  /**
   * @remarks
   * The storage capacity of the instance. Unit: GB.
   * 
   * @example
   * 50
   */
  storageSize?: string;
  /**
   * @remarks
   * The storage type of the instance. Valid values:
   * 
   * *   **cloud_essd**: enhanced SSD (ESSD).
   * *   **cloud_efficiency**: ultra disk.
   * 
   * @example
   * cloud_essd
   */
  storageType?: string;
  /**
   * @remarks
   * The tags that are added to the instance.
   */
  tags?: DescribeDBInstancesResponseBodyItemsDBInstanceTags;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * @example
   * vpc-bp19ame5m1r3oejns****
   */
  vpcId?: string;
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
      connectionMode: 'ConnectionMode',
      createTime: 'CreateTime',
      DBInstanceCategory: 'DBInstanceCategory',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceMode: 'DBInstanceMode',
      DBInstanceNetType: 'DBInstanceNetType',
      DBInstanceStatus: 'DBInstanceStatus',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      instanceDeployType: 'InstanceDeployType',
      instanceNetworkType: 'InstanceNetworkType',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      masterNodeNum: 'MasterNodeNum',
      payType: 'PayType',
      prodType: 'ProdType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      segNodeNum: 'SegNodeNum',
      serverlessMode: 'ServerlessMode',
      storageSize: 'StorageSize',
      storageType: 'StorageType',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionMode: 'string',
      createTime: 'string',
      DBInstanceCategory: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceMode: 'string',
      DBInstanceNetType: 'string',
      DBInstanceStatus: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      instanceDeployType: 'string',
      instanceNetworkType: 'string',
      lockMode: 'string',
      lockReason: 'string',
      masterNodeNum: 'number',
      payType: 'string',
      prodType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      segNodeNum: 'string',
      serverlessMode: 'string',
      storageSize: 'string',
      storageType: 'string',
      tags: DescribeDBInstancesResponseBodyItemsDBInstanceTags,
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
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
   * The queried instances.
   */
  items?: DescribeDBInstancesResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 53EA07B7-FC2A-521B-AB7C-27**********
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBInstancesResponseBodyItems,
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

