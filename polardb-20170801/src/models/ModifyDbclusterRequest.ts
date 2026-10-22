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
   * The connection resource quota of the AgenticDB cluster.
   * 
   * @example
   * 100
   */
  connectionResourceQuota?: number;
  /**
   * @remarks
   * The cluster ID.
   * > You can call the DescribeDBClusters operation to query all clusters in the specified region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The list of drill node instance names.
   * > Node dimension drills support only a single node. For zone dimension drills, you can omit this parameter or pass all nodes.
   * 
   * @example
   * pi-rwxxx
   */
  DBNodeCrashList?: string;
  /**
   * @remarks
   * The cross-zone data replication mode of the cluster. Valid values:
   * 
   * - **AsyncSync**: Asynchronous.
   * - **SemiSync**: Semi-synchronous.
   * 
   * @example
   * AsynSync
   */
  dataSyncMode?: string;
  /**
   * @remarks
   * The fault injection method. Valid values:
   * 
   * - 0: Instance fault injection based on `Crash SQL`.
   * 
   * @example
   * 0
   */
  faultInjectionType?: string;
  /**
   * @remarks
   * The fault drill dimension for the cluster. Valid values:
   * - `0` or `FaultInjection`: Primary zone dimension fault drill.
   * - `1`: Node dimension fault drill.
   * > - In the **primary zone dimension fault drill** scenario, all compute nodes in the primary zone become unavailable, and the disaster recovery switchover in this scenario is lossy.
   * > - In the **node dimension fault drill** scenario, only a single compute node can be drilled. Pass the desired compute node name through `DBNodeCrashList`.
   * 
   * @example
   * 0
   */
  faultSimulateMode?: string;
  /**
   * @remarks
   * The automatic IMCI-based query acceleration feature. Valid values:
   * - `ON`: Enabled.
   * - `OFF`: Disabled.
   * 
   * > - Only PolarDB for MySQL clusters are supported.
   * > - For cluster version limits, refer to [Automatic IMCI-based query acceleration (AutoIndex)](https://help.aliyun.com/document_detail/2854119.html).
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
   * - **ON**: Enables cross-zone automatic switchover.
   * - **OFF**: Disables cross-zone automatic switchover.
   * 
   * @example
   * ON
   */
  standbyHAMode?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic storage scaling for a Standard Edition cluster. Valid values:
   * 
   * - Enable: Enables automatic storage scaling.
   * - Disable: Disables automatic storage scaling.
   * 
   * @example
   * Enable
   */
  storageAutoScale?: string;
  /**
   * @remarks
   * The upper limit for automatic storage scaling of a Standard Edition cluster. Unit: GB.
   * 
   * > The maximum value is 32000.
   * 
   * @example
   * 800
   */
  storageUpperBound?: number;
  /**
   * @remarks
   * The JSON string of the target database and table information to be restored. The values of the database and table information are all of the string type.
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
   * > You can call the [DescribeMetaList](https://help.aliyun.com/document_detail/194770.html) operation to view the details of the database and table names that support restoration, and fill the supported database and table information into the corresponding positions in the preceding example.
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

