import * as $dara from '@darabonba/typescript';
export declare class CreateColdStorageInstanceRequest extends $dara.Model {
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token is case-sensitive and can be up to 64 ASCII characters in length.
     *
     * @example
     * 6000170000591aed949d0f5********************
     */
    clientToken?: string;
    /**
     * @remarks
     * The description of the cold storage instance. The description can be up to 256 characters in length.
     *
     * @example
     * Cold storage instance for archiving historical data
     */
    coldStorageInstanceDescription?: string;
    /**
     * @remarks
     * The cluster ID.
     * >You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to view the details of all clusters under your account, such as the cluster ID. The cluster must be in the Running state before you call this operation. You can verify the state by checking the DBClusterStatus parameter returned by DescribeDBClusterAttribute.
     *
     * This parameter is required.
     *
     * @example
     * pc-wz9ye3xrtj60ua6d1
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-************
     */
    resourceGroupId?: string;
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
