import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterRequest extends $dara.Model {
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
     * >You can call the DescribeDBClusters operation to query all clusters in the specified region, including their cluster IDs.
     *
     * This parameter is required.
     *
     * @example
     * pc-*************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The list of instance names of the nodes to be drilled.
     * > A node-level drill supports only a single node. For a zone-level drill, you can leave this parameter empty or pass all nodes.
     *
     * @example
     * pi-rwxxx
     */
    DBNodeCrashList?: string;
    /**
     * @remarks
     * The cross-zone data replication mode of the cluster. Valid values:
     *
     * - **AsyncSync**: Asynchronous replication.
     * - **SemiSync**: Semi-synchronous replication.
     *
     * @example
     * AsynSync
     */
    dataSyncMode?: string;
    /**
     * @remarks
     * The fault injection method. Valid values:
     *
     * - 0: instance fault injection based on `Crash SQL`.
     *
     * @example
     * CrashSQLInjection
     */
    faultInjectionType?: string;
    /**
     * @remarks
     * The fault drill dimension of the cluster. Valid values:
     * - `0` or `FaultInjection`: fault drill at the primary zone level.
     * - `1`: fault drill at the node level.
     * > - In the **fault drill at the primary zone level** scenario, all compute nodes in the primary zone become unavailable, and the disaster recovery switchover in this scenario is lossy.
     * > - In the **fault drill at the node level** scenario, only a single compute node can be drilled. You can pass the desired compute node name through `DBNodeCrashList`.
     *
     * @example
     * 0
     */
    faultSimulateMode?: string;
    /**
     * @remarks
     * The automatic IMCI-based query acceleration feature. Valid values:
     * - `ON`: Enables the feature.
     * - `OFF`: Disables the feature.
     *
     * > - This feature is supported only by PolarDB for MySQL clusters.
     * > - For cluster version limits, refer to [Automatic seamless acceleration (AutoIndex)](https://help.aliyun.com/document_detail/2854119.html).
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
     * > The maximum value is 32,000.
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
     * > You can call the [DescribeMetaList](https://help.aliyun.com/document_detail/194770.html) operation to query the details of the database and table names that support restoration, and fill the supported database and table information into the corresponding positions in the preceding example.
     *
     * @example
     * [ { "tables":[ { "name":"testtb", "type":"table", "newname":"testtb_restore" } ], "name":"testdb", "type":"db", "newname":"testdb_restore" } ]
     */
    tableMeta?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
