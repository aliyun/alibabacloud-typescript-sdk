import * as $dara from '@darabonba/typescript';
export declare class DeleteDBEndpointAddressRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the cluster.
     *
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters that belong to your account, such as the cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the endpoint.
     *
     * > You can call the [DescribeDBClusterEndpoints](https://help.aliyun.com/document_detail/98205.html) operation to query the endpoints of a specified PolarDB cluster.
     *
     * @example
     * pe-***************
     */
    DBEndpointId?: string;
    /**
     * @remarks
     * The network type of the endpoint. Set the value to **Public** (public network).
     *
     * This parameter is required.
     *
     * @example
     * Public
     */
    netType?: string;
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
