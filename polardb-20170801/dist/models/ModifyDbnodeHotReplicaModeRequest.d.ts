import * as $dara from '@darabonba/typescript';
export declare class ModifyDBNodeHotReplicaModeRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters under your account, including the cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-*****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the database cluster node.
     *
     * This parameter is required.
     *
     * @example
     * pi-*****************
     */
    DBNodeId?: string;
    /**
     * @remarks
     * Specifies whether to enable hot standby. Valid values:
     * - **ON**: Enabled.
     * - **OFF**: Disabled.
     * Limits: This operation is supported only for non-serverless MySQL clusters. The target node must be a read-only node. Each cluster allows only one node to have HotReplicaMode (ON). Usage notes: Append the following limits to the end of the HotReplicaMode parameter description: this operation is supported only for non-serverless MySQL clusters. The target node must be a read-only node. Each cluster allows only one node to have HotReplicaMode (ON).
     *
     * This parameter is required.
     *
     * @example
     * ON
     */
    hotReplicaMode?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
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
