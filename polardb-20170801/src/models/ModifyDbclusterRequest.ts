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
  connectionResourceQuota?: number;
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/173433.html) operation to query information about all clusters in the specified region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The list of node instance names for the disaster recovery drill.
   * > Node-level drills support only a single node. For zone-level drills, you can leave this parameter empty or specify all nodes.
   * 
   * @example
   * pi-rwxxx
   */
  DBNodeCrashList?: string;
  /**
   * @remarks
   * The cross-zone data replication mode of the cluster. Valid values:
   * 
   * - **AsyncSync**: asynchronous
   * - **SemiSync**: semi-synchronous
   * 
   * @example
   * AsynSync
   */
  dataSyncMode?: string;
  /**
   * @remarks
   * The fault injection method. Valid values:
   * 
   * - 0: instance fault injection based on `Crash SQL`
   * 
   * @example
   * 0
   */
  faultInjectionType?: string;
  /**
   * @remarks
   * The dimension of the disaster recovery drill for the cluster. Valid values:
   * - `0` or `FaultInjection`: primary zone-level disaster recovery drill.
   * - `1`: node-level disaster recovery drill.
   * > - In the **primary zone-level disaster recovery drill** scenario, all compute nodes in the primary zone become unavailable. The failover in this scenario causes service interruptions.
   * > - In the **node-level disaster recovery drill** scenario, only a single compute node is supported for the drill. Specify the desired compute node name by using `DBNodeCrashList`.
   * 
   * @example
   * 0
   */
  faultSimulateMode?: string;
  /**
   * @remarks
   * The automatic IMCI-based query acceleration feature. Valid values:
   * - `ON`: enabled.
   * - `OFF`: disabled.
   * 
   * > - Only PolarDB for MySQL clusters are supported.
   * > - For cluster version requirements, see [Automatic acceleration (AutoIndex)](https://help.aliyun.com/document_detail/2854119.html).
   * 
   * @example
   * OFF
   */
  imciAutoIndex?: string;
  /**
   * @remarks
   * Modifies the row compression settings.
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
   * The cross-zone automatic switchover mode of the cluster. Valid values:
   * 
   * - **ON**: enables cross-zone automatic switchover.
   * - **OFF**: disables cross-zone automatic switchover.
   * 
   * @example
   * ON
   */
  standbyHAMode?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic storage scaling for the Standard Edition cluster. Valid values:
   * 
   * - Enable: enables automatic storage scaling.
   * - Disable: disables automatic storage scaling.
   * 
   * @example
   * Enable
   */
  storageAutoScale?: string;
  /**
   * @remarks
   * The upper limit for automatic storage scaling of the Standard Edition cluster. Unit: GB.
   * 
   * > The maximum value is 32000.
   * 
   * @example
   * 800
   */
  storageUpperBound?: number;
  /**
   * @remarks
   * The JSON string that contains the information about the databases and tables to be restored. The values of the database and table information are strings.
   * Example: `[
   *    {
   *        "tables":[
   *            {
   *                "name":"testtb",
   *                "type":"table",
   *                "newname":"testtb_restore"
   *            }
   *        ],
   *        "name":"testdb",
   *        "type":"db",
   *        "newname":"testdb_restore"
   *    }
   * ]`.
   * > You can call the [DescribeMetaList](https://help.aliyun.com/document_detail/194770.html) operation to query the names of databases and tables that can be restored, and then specify the information in the corresponding fields in the preceding example.
   * 
   * @example
   * [ { "tables":[ { "name":"testtb", "type":"table", "newname":"testtb_restore" } ], "name":"testdb", "type":"db", "newname":"testdb_restore" } ]
   */
  tableMeta?: string;
  static names(): { [key: string]: string } {
    return {
      compressStorage: 'CompressStorage',
      connectionResourceQuota: 'ConnectionResourceQuota',
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
      connectionResourceQuota: 'number',
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

