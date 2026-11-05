import * as $dara from '@darabonba/typescript';
export declare class DeleteAccountZonalRequest extends $dara.Model {
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
     * The cluster ID.
     *
     * > Note: This parameter accepts only the ID of a PolarDB on ENS cluster (CloudProvider=ENS). For standard cloud clusters, use the DeleteAccount API. You can call the DescribeDBClustersZonal operation to query existing PolarDB on ENS clusters.
     *
     * This parameter is required.
     *
     * @example
     * pc-*************
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
