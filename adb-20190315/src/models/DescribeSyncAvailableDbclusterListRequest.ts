// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyncAvailableDBClusterListRequestSourceDBCluster extends $dara.Model {
  /**
   * @remarks
   * The ID of the source instance or cluster. Separate multiple IDs with commas (,).
   * 
   * @example
   * rm-bp1l3yh04y7us147n
   */
  clusterIds?: string;
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
   * The database type of the source instance or cluster.
   * 
   * Valid values:
   * 
   * *   rds: ApsaraDB RDS.
   * *   sls: Simple Log Service.
   * *   polardb: PolarDB.
   * 
   * @example
   * rds
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: 'string',
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

export class DescribeSyncAvailableDBClusterListRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The query type.
   * 
   * Valid values:
   * 
   * *   Target
   * *   Source
   * 
   * This parameter is required.
   * 
   * @example
   * Source
   */
  queryType?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The source instances or clusters.
   */
  sourceDBCluster?: DescribeSyncAvailableDBClusterListRequestSourceDBCluster[];
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
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      queryType: 'QueryType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceDBCluster: 'SourceDBCluster',
      syncPlatform: 'SyncPlatform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      queryType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceDBCluster: { 'type': 'array', 'itemType': DescribeSyncAvailableDBClusterListRequestSourceDBCluster },
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

