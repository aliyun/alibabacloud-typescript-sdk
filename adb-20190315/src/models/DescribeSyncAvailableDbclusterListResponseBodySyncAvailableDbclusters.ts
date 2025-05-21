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

