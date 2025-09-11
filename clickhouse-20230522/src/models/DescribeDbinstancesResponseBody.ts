// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesResponseBodyDataDBInstancesTags extends $dara.Model {
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
   * test
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

export class DescribeDBInstancesResponseBodyDataDBInstances extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1294****
   */
  aliUid?: string;
  /**
   * @remarks
   * The channel ID.
   * 
   * @example
   * 186681****
   */
  bid?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PrePaid: subscription
   * *   PostPaid: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2022-12-04 21:16:15
   */
  createTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Indicates whether the release protection feature is enabled for the cluster.
   * 
   * @example
   * False
   */
  deletionProtection?: string;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * test_desc
   */
  description?: string;
  /**
   * @remarks
   * The engine type.
   * 
   * @example
   * clickhouse
   */
  engine?: string;
  /**
   * @remarks
   * The engine version.
   * 
   * @example
   * 22.8
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the cluster expires.
   * 
   * @example
   * 2024-02-16 11:51:06
   */
  expireTime?: string;
  /**
   * @remarks
   * The lock mode.
   * 
   * @example
   * 0
   */
  lockMode?: string;
  /**
   * @remarks
   * The reason why the cluster was locked.
   * 
   * @example
   * null
   */
  lockReason?: string;
  /**
   * @remarks
   * The end time of the maintenance window.
   * 
   * @example
   * 04:00:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * @example
   * 00:00Z
   */
  maintainStartTime?: string;
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
   * rg-acfmzy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The maximum capacity for elastic scaling.
   * 
   * @example
   * 13
   */
  scaleMax?: number;
  /**
   * @remarks
   * The minimum capacity for elastic scaling.
   * 
   * @example
   * 1
   */
  scaleMin?: number;
  /**
   * @remarks
   * The cluster status.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * oss
   */
  storageType?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeDBInstancesResponseBodyDataDBInstancesTags[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vb5mw****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-uf6kg****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bid: 'Bid',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      DBInstanceId: 'DBInstanceId',
      deletionProtection: 'DeletionProtection',
      description: 'Description',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      status: 'Status',
      storageType: 'StorageType',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bid: 'string',
      chargeType: 'string',
      createTime: 'string',
      DBInstanceId: 'string',
      deletionProtection: 'string',
      description: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      lockMode: 'string',
      lockReason: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scaleMax: 'number',
      scaleMin: 'number',
      status: 'string',
      storageType: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDataDBInstancesTags },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The clusters.
   */
  DBInstances?: DescribeDBInstancesResponseBodyDataDBInstances[];
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
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDataDBInstances },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBInstances)) {
      $dara.Model.validateArray(this.DBInstances);
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
   * The returned result.
   */
  data?: DescribeDBInstancesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxx-xxx-xxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBInstancesResponseBodyData,
      requestId: 'string',
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

