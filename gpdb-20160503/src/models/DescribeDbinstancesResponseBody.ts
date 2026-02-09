// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesResponseBodyItemsDBInstanceTagsTag extends $dara.Model {
  key?: string;
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
  connectionMode?: string;
  createTime?: string;
  DBInstanceCategory?: string;
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceMode?: string;
  DBInstanceNetType?: string;
  DBInstanceStatus?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  instanceDeployType?: string;
  instanceNetworkType?: string;
  lockMode?: string;
  lockReason?: string;
  masterNodeNum?: number;
  payType?: string;
  prodType?: string;
  regionId?: string;
  resourceGroupId?: string;
  segNodeNum?: string;
  serverlessMode?: string;
  storageSize?: string;
  storageType?: string;
  tags?: DescribeDBInstancesResponseBodyItemsDBInstanceTags;
  vSwitchId?: string;
  vpcId?: string;
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

