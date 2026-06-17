// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * Enables storage compression. Set the value to **ON**.
   * 
   * @example
   * ON
   */
  compressStorage?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the DescribeDBClusters operation to query the details of all clusters in a specific region, including their cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The names of the nodes to target in the fault simulation.
   * 
   * > For a node-level simulation, you can specify only a single node. For a zone-level simulation, you can leave this parameter empty or specify all nodes.
   * 
   * @example
   * pi-rwxxx
   */
  DBNodeCrashList?: string;
  /**
   * @remarks
   * The cross-zone data replication method for the cluster. Valid values:
   * 
   * - **AsyncSync**: asynchronous.
   * 
   * - **SemiSync**: semi-synchronous.
   * 
   * @example
   * AsynSync
   */
  dataSyncMode?: string;
  /**
   * @remarks
   * The fault injection method. Valid values:
   * 
   * - `0`: instance-level fault injection based on Crash SQL.
   * 
   * @example
   * 0
   */
  faultInjectionType?: string;
  /**
   * @remarks
   * The fault simulation scope for the cluster. Valid values:
   * 
   * - `0` or `FaultInjection`: primary zone-level fault simulation.
   * 
   * - `1`: node-level fault simulation.
   * 
   * > * In a **primary zone-level fault simulation**, all compute nodes in the primary zone become unavailable. The disaster recovery failover in this scenario is lossy.
   * >
   * > * In a **node-level fault simulation**, you can simulate a fault on only a single compute node. You must specify the target compute node by using the `DBNodeCrashList` parameter.
   * 
   * @example
   * 0
   */
  faultSimulateMode?: string;
  /**
   * @remarks
   * Controls the automatic columnar index feature. Valid values:
   * 
   * - `ON`: enables the feature.
   * 
   * - `OFF`: disables the feature.
   * 
   * > * This feature is available only for PolarDB for MySQL clusters.
   * >
   * > * For cluster version limits, see [Automatic indexing (AutoIndex)](https://help.aliyun.com/document_detail/2854119.html).
   * 
   * @example
   * OFF
   */
  imciAutoIndex?: string;
  /**
   * @remarks
   * Enables or disables row-level compression.
   * 
   * @example
   * OFF
   */
  modifyRowCompression?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The automatic cross-zone failover mode for the cluster. Valid values:
   * 
   * - **ON**: enables automatic cross-zone failover.
   * 
   * - **OFF**: disables automatic cross-zone failover.
   * 
   * @example
   * ON
   */
  standbyHAMode?: string;
  /**
   * @remarks
   * Enables or disables automatic storage scaling for a standard cluster. Valid values:
   * 
   * - Enable: enables automatic storage scaling.
   * 
   * - Disable: disables automatic storage scaling.
   * 
   * @example
   * Enable
   */
  storageAutoScale?: string;
  /**
   * @remarks
   * The upper limit for automatic storage scaling on a standard cluster. Unit: GB.
   * 
   * > The maximum value is 32000.
   * 
   * @example
   * 800
   */
  storageUpperBound?: number;
  /**
   * @remarks
   * A JSON string that specifies information about the destination databases and tables to be restored. All values in the database and table information must be strings.
   * Example: `[ { "tables":[ { "name":"testtb", "type":"table", "newname":"testtb_restore" } ], "name":"testdb", "type":"db", "newname":"testdb_restore" } ]`.
   * 
   * > You can call the [DescribeMetaList](https://help.aliyun.com/document_detail/194770.html) operation to query for restorable databases and tables. Use the returned information to populate the fields in the example JSON.
   * 
   * @example
   * [ { "tables":[ { "name":"testtb", "type":"table", "newname":"testtb_restore" } ], "name":"testdb", "type":"db", "newname":"testdb_restore" } ]
   */
  tableMeta?: string;
  static names(): { [key: string]: string } {
    return {
      compressStorage: 'CompressStorage',
      DBClusterId: 'DBClusterId',
      DBNodeCrashList: 'DBNodeCrashList',
      dataSyncMode: 'DataSyncMode',
      faultInjectionType: 'FaultInjectionType',
      faultSimulateMode: 'FaultSimulateMode',
      imciAutoIndex: 'ImciAutoIndex',
      modifyRowCompression: 'ModifyRowCompression',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      standbyHAMode: 'StandbyHAMode',
      storageAutoScale: 'StorageAutoScale',
      storageUpperBound: 'StorageUpperBound',
      tableMeta: 'TableMeta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressStorage: 'string',
      DBClusterId: 'string',
      DBNodeCrashList: 'string',
      dataSyncMode: 'string',
      faultInjectionType: 'string',
      faultSimulateMode: 'string',
      imciAutoIndex: 'string',
      modifyRowCompression: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      standbyHAMode: 'string',
      storageAutoScale: 'string',
      storageUpperBound: 'number',
      tableMeta: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

