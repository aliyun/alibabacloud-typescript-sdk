// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId extends $dara.Model {
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

export class DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIds extends $dara.Model {
  readOnlyDBInstanceId?: DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId[];
  static names(): { [key: string]: string } {
    return {
      readOnlyDBInstanceId: 'ReadOnlyDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readOnlyDBInstanceId: { 'type': 'array', 'itemType': DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIdsReadOnlyDBInstanceId },
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

export class DescribeDBInstancesForCloneResponseBodyItemsDBInstance extends $dara.Model {
  category?: string;
  connectionMode?: string;
  createTime?: string;
  DBInstanceClass?: string;
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceNetType?: string;
  DBInstanceStatus?: string;
  DBInstanceStorageType?: string;
  DBInstanceType?: string;
  destroyTime?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  guardDBInstanceId?: string;
  insId?: number;
  instanceNetworkType?: string;
  lockMode?: string;
  lockReason?: string;
  masterInstanceId?: string;
  mutriORsignle?: boolean;
  payType?: string;
  readOnlyDBInstanceIds?: DescribeDBInstancesForCloneResponseBodyItemsDBInstanceReadOnlyDBInstanceIds;
  regionId?: string;
  replicateId?: string;
  resourceGroupId?: string;
  tempDBInstanceId?: string;
  vSwitchId?: string;
  vpcCloudInstanceId?: string;
  vpcId?: string;
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

export class DescribeDBInstancesForCloneResponseBodyItems extends $dara.Model {
  DBInstance?: DescribeDBInstancesForCloneResponseBodyItemsDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDBInstancesForCloneResponseBodyItemsDBInstance },
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

export class DescribeDBInstancesForCloneResponseBody extends $dara.Model {
  items?: DescribeDBInstancesForCloneResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
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
      items: DescribeDBInstancesForCloneResponseBodyItems,
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

