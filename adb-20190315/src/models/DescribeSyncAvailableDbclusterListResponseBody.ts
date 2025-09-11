// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyncAvailableDBClusterListResponseBodySyncAvailableDBClusters extends $dara.Model {
  /**
   * @remarks
   * The description of the instance or cluster.
   * 
   * @example
   * DB1
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The instance or cluster ID.
   * 
   * @example
   * rm-bp1l3yh04y7us147n
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database type of the instance or cluster.
   * 
   * @example
   * rds
   */
  DBType?: string;
  /**
   * @remarks
   * The storage size.
   * 
   * @example
   * 1000
   */
  storageSize?: number;
  /**
   * @remarks
   * The number of tables.
   * 
   * @example
   * 100
   */
  tableNumber?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      storageSize: 'StorageSize',
      tableNumber: 'TableNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBType: 'string',
      storageSize: 'number',
      tableNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSyncAvailableDBClusterListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBD1DD96-AD1D-516C-9D9A-60BA081F66EE
   */
  requestId?: string;
  /**
   * @remarks
   * The queried instances or clusters.
   */
  syncAvailableDBClusters?: DescribeSyncAvailableDBClusterListResponseBodySyncAvailableDBClusters[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      syncAvailableDBClusters: 'SyncAvailableDBClusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      syncAvailableDBClusters: { 'type': 'array', 'itemType': DescribeSyncAvailableDBClusterListResponseBodySyncAvailableDBClusters },
    };
  }

  validate() {
    if(Array.isArray(this.syncAvailableDBClusters)) {
      $dara.Model.validateArray(this.syncAvailableDBClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

