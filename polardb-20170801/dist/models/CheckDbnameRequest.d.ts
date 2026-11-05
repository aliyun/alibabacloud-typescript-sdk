import * as $dara from '@darabonba/typescript';
export declare class CheckDBNameRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters in a destination region, including cluster IDs.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The database name.
     *
     * This parameter is required.
     *
     * @example
     * test_db
     */
    DBName?: string;
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
