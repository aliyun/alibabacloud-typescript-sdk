import * as $dara from '@darabonba/typescript';
export declare class DescribeSQLExplorerPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters under your account, such as the cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
     */
    DBInstanceId?: string;
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
