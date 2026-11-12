import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/2319131.html) operation to query all clusters in a specified region, including their cluster IDs.
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
