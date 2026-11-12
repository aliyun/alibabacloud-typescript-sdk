import * as $dara from '@darabonba/typescript';
export declare class DeleteDBLinkRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the source cluster from which the database link is to be deleted.
     *
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/173433.html) operation to query the list of PolarDB clusters.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The name of the database link to be deleted.
     *
     * This parameter is required.
     *
     * @example
     * dblink_test
     */
    DBLinkName?: string;
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
