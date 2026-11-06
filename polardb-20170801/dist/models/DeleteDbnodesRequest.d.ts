import * as $dara from '@darabonba/typescript';
export declare class DeleteDBNodesRequest extends $dara.Model {
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token is case-sensitive and can be up to 64 ASCII characters in length.
     *
     * @example
     * 6000170000591aed949d0f54a343f1a42***********
     */
    clientToken?: string;
    /**
     * @remarks
     * The service provider of the node.
     *
     * @example
     * ENS
     */
    cloudProvider?: string;
    /**
     * @remarks
     * The ID of the cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the node in the cluster.
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/185342.html) operation to query the details of all clusters under your account, including the node IDs.
     *
     * This parameter is required.
     *
     * @example
     * ["pi-************"]
     */
    DBNodeId?: string[];
    /**
     * @remarks
     * The type of the node. Valid values:
     * - RO
     * - STANDBY
     * - DLNode
     *
     * @example
     * RO
     */
    DBNodeType?: string;
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
