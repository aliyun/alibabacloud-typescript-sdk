// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable storage compression. Set the value to **ON**.
   * 
   * @example
   * ON
   */
  compressStorage?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the DescribeDBClusters operation to query information about all PolarDB clusters that are deployed in a specified region, such as cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The list of nodes for the drill.
   * 
   * >  You can specify only one node for a node-level disaster recovery drill. For a primary zone-level disaster recovery drill, you can either choose not to specify this parameter or specify all nodes.
   * 
   * @example
   * pi-rwxxx
   */
  DBNodeCrashList?: string;
  /**
   * @remarks
   * The method used to replicate data across zones. Valid values:
   * 
   * *   **AsyncSync**: the asynchronous mode.
   * *   **SemiSync**: the semi-synchronous mode.
   * 
   * @example
   * AsynSync
   */
  dataSyncMode?: string;
  /**
   * @remarks
   * The fault injection method. Valid values:
   * 
   * *   0: `Crash SQL`-based fault injection.
   * 
   * Enumerated values:
   * 
   * *   CrashSQLInjection: CrashSQLInjection.
   * 
   * @example
   * 0
   */
  faultInjectionType?: string;
  /**
   * @remarks
   * The level of the disaster recovery drill. Valid values:
   * 
   * *   `0` or `FaultInjection`: The primary zone level.
   * *   `1`: The node level.
   * 
   * > 
   * 
   * *   In **primary zone-level disaster recovery drill** scenarios, all compute nodes in the primary zone are unavailable. Data loss occurs during failovers in the scenarios.
   * 
   * *   In **node-level disaster recovery drill** scenarios, you can specify only one compute node for the disaster recovery drill. You can use the `DBNodeCrashList` parameter to specify the name of the compute node that you want to use for the drill.
   * 
   * Enumerated values:
   * 
   * *   FaultInjectToPrimaryAz
   * *   FaultInjectToDbNode
   * *   FaultInjection
   * *   0
   * *   1
   * 
   * @example
   * 0
   */
  faultSimulateMode?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic IMCI-based query acceleration. IMCI is short for In-Memory Column Index. Valid values:
   * 
   * *   `ON`: enables automatic IMCI-based query acceleration.
   * *   `OFF`: disables automatic IMCI-based query acceleration.
   * 
   * > 
   * 
   * *   This parameter is supported only for PolarDB for MySQL clusters.
   * 
   * *   For information about the cluster version limits, see [Automatic IMCI-based query acceleration](https://help.aliyun.com/document_detail/2854119.html).
   * 
   * @example
   * OFF
   */
  imciAutoIndex?: string;
  modifyRowCompression?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable cross-zone automatic switchover. Valid values:
   * 
   * *   **ON**: enables cross-zone automatic switchover.
   * *   **OFF**: disables cross-zone automatic switchover.
   * 
   * @example
   * ON
   */
  standbyHAMode?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic storage scaling for the Standard Edition cluster. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * @example
   * Enable
   */
  storageAutoScale?: string;
  /**
   * @remarks
   * The maximum storage capacity of the cluster of Standard Edition in automatic scaling. Unit: GB.
   * 
   * >  The maximum value of this parameter is 32000.
   * 
   * @example
   * 800
   */
  storageUpperBound?: number;
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

