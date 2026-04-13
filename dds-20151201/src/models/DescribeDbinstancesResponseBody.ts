// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosListMongosAttribute extends $dara.Model {
  nodeClass?: string;
  nodeDescription?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosList extends $dara.Model {
  mongosAttribute?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosListMongosAttribute[];
  static names(): { [key: string]: string } {
    return {
      mongosAttribute: 'MongosAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mongosAttribute: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosListMongosAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.mongosAttribute)) {
      $dara.Model.validateArray(this.mongosAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardListShardAttribute extends $dara.Model {
  nodeClass?: string;
  nodeDescription?: string;
  nodeId?: string;
  nodeStorage?: number;
  readonlyReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      nodeClass: 'NodeClass',
      nodeDescription: 'NodeDescription',
      nodeId: 'NodeId',
      nodeStorage: 'NodeStorage',
      readonlyReplicas: 'ReadonlyReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeClass: 'string',
      nodeDescription: 'string',
      nodeId: 'string',
      nodeStorage: 'number',
      readonlyReplicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardList extends $dara.Model {
  shardAttribute?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardListShardAttribute[];
  static names(): { [key: string]: string } {
    return {
      shardAttribute: 'ShardAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shardAttribute: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardListShardAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.shardAttribute)) {
      $dara.Model.validateArray(this.shardAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceTagsTag extends $dara.Model {
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

export class DescribeDBInstancesResponseBodyDBInstancesDBInstanceTags extends $dara.Model {
  tag?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstanceTagsTag },
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

export class DescribeDBInstancesResponseBodyDBInstancesDBInstance extends $dara.Model {
  backupRetentionPolicy?: number;
  capacityUnit?: string;
  chargeType?: string;
  creationTime?: string;
  DBInstanceClass?: string;
  DBInstanceDescription?: string;
  DBInstanceId?: string;
  DBInstanceStatus?: string;
  DBInstanceStorage?: number;
  DBInstanceType?: string;
  destroyTime?: string;
  engine?: string;
  engineVersion?: string;
  expireTime?: string;
  hiddenZoneId?: string;
  kindCode?: string;
  lastDowngradeTime?: string;
  lockMode?: string;
  mongosList?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosList;
  networkType?: string;
  regionId?: string;
  releaseTime?: string;
  replicationFactor?: string;
  resourceGroupId?: string;
  secondaryZoneId?: string;
  shardList?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardList;
  storageType?: string;
  tags?: DescribeDBInstancesResponseBodyDBInstancesDBInstanceTags;
  vpcAuthMode?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPolicy: 'BackupRetentionPolicy',
      capacityUnit: 'CapacityUnit',
      chargeType: 'ChargeType',
      creationTime: 'CreationTime',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStorage: 'DBInstanceStorage',
      DBInstanceType: 'DBInstanceType',
      destroyTime: 'DestroyTime',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expireTime: 'ExpireTime',
      hiddenZoneId: 'HiddenZoneId',
      kindCode: 'KindCode',
      lastDowngradeTime: 'LastDowngradeTime',
      lockMode: 'LockMode',
      mongosList: 'MongosList',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      releaseTime: 'ReleaseTime',
      replicationFactor: 'ReplicationFactor',
      resourceGroupId: 'ResourceGroupId',
      secondaryZoneId: 'SecondaryZoneId',
      shardList: 'ShardList',
      storageType: 'StorageType',
      tags: 'Tags',
      vpcAuthMode: 'VpcAuthMode',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPolicy: 'number',
      capacityUnit: 'string',
      chargeType: 'string',
      creationTime: 'string',
      DBInstanceClass: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      DBInstanceStorage: 'number',
      DBInstanceType: 'string',
      destroyTime: 'string',
      engine: 'string',
      engineVersion: 'string',
      expireTime: 'string',
      hiddenZoneId: 'string',
      kindCode: 'string',
      lastDowngradeTime: 'string',
      lockMode: 'string',
      mongosList: DescribeDBInstancesResponseBodyDBInstancesDBInstanceMongosList,
      networkType: 'string',
      regionId: 'string',
      releaseTime: 'string',
      replicationFactor: 'string',
      resourceGroupId: 'string',
      secondaryZoneId: 'string',
      shardList: DescribeDBInstancesResponseBodyDBInstancesDBInstanceShardList,
      storageType: 'string',
      tags: DescribeDBInstancesResponseBodyDBInstancesDBInstanceTags,
      vpcAuthMode: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.mongosList && typeof (this.mongosList as any).validate === 'function') {
      (this.mongosList as any).validate();
    }
    if(this.shardList && typeof (this.shardList as any).validate === 'function') {
      (this.shardList as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancesResponseBodyDBInstances extends $dara.Model {
  DBInstance?: DescribeDBInstancesResponseBodyDBInstancesDBInstance[];
  static names(): { [key: string]: string } {
    return {
      DBInstance: 'DBInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstance: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyDBInstancesDBInstance },
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
  DBInstances?: DescribeDBInstancesResponseBodyDBInstances;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0E4FE33F-5510-5758-8FA7-A6672CDE****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of instances in the query results.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstances: 'DBInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstances: DescribeDBInstancesResponseBodyDBInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.DBInstances && typeof (this.DBInstances as any).validate === 'function') {
      (this.DBInstances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

