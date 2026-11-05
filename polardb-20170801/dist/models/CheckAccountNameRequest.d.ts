import * as $dara from '@darabonba/typescript';
export declare class CheckAccountNameRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the account.
     *
     * This parameter is required.
     *
     * @example
     * test_acc
     */
    accountName?: string;
    /**
     * @remarks
     * The ID of the cluster.
     *
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query information about all clusters that are deployed in a specified region, such as the cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
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
