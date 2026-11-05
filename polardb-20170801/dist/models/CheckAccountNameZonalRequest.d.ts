import * as $dara from '@darabonba/typescript';
export declare class CheckAccountNameZonalRequest extends $dara.Model {
    /**
     * @remarks
     * The account name.
     *
     * This parameter is required.
     *
     * @example
     * test_acc
     */
    accountName?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * > Note: This parameter accepts only edge cluster IDs, which you can obtain by calling the DescribeDBClustersZonal operation. For common PolarDB clusters, use the CheckAccountName operation.
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
