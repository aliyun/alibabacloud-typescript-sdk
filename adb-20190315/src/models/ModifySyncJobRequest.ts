// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySyncJobRequestSourceDBCluster extends $dara.Model {
  /**
   * @remarks
   * The ID of the source instance or cluster. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2zepqn129i9s3l2z3,rm-2zea4dj583129ksp6
   */
  clusterIds?: string;
  /**
   * @remarks
   * The ID of the synchronization job.
   * 
   * @example
   * dts-xxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The operation type.
   * 
   * Valid values:
   * 
   * *   Create
   * *   Modify
   * 
   * This parameter is required.
   * 
   * @example
   * Create
   */
  operateType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The source database type.
   * 
   * Valid values:
   * 
   * *   rds: ApsaraDB RDS.
   * *   sls: Simple Log Service.
   * *   polardb: PolarDB.
   * 
   * This parameter is required.
   * 
   * @example
   * sls
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      jobId: 'JobId',
      operateType: 'OperateType',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: 'string',
      jobId: 'string',
      operateType: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySyncJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp12bh6z59nh8497f
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source instances or clusters.
   * 
   * **if can be null:**
   * true
   */
  sourceDBCluster?: ModifySyncJobRequestSourceDBCluster[];
  /**
   * @remarks
   * The synchronization platform.
   * 
   * @example
   * ADB-CDC
   */
  syncPlatform?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceDBCluster: 'SourceDBCluster',
      syncPlatform: 'SyncPlatform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceDBCluster: { 'type': 'array', 'itemType': ModifySyncJobRequestSourceDBCluster },
      syncPlatform: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sourceDBCluster)) {
      $dara.Model.validateArray(this.sourceDBCluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

