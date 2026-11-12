import * as $dara from '@darabonba/typescript';
export declare class DeleteDBEndpointAddressRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters under your account, including the cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The endpoint ID.
     *
     * > You can call the [DescribeDBClusterEndpoints](https://help.aliyun.com/document_detail/98205.html) operation to query the endpoint ID.
     *
     * @example
     * pe-***************
     */
    DBEndpointId?: string;
    /**
     * @remarks
     * <props="intl">The network type of the endpoint. Only **Public** (Internet) is supported.
     * <props="china">The network type of the endpoint. Valid values:
     * <props="china">- **Public**: Internet.
     * <props="china">- **Inner**: classic network.
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
