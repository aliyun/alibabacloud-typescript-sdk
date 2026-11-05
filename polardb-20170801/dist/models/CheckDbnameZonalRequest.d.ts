import * as $dara from '@darabonba/typescript';
export declare class CheckDBNameZonalRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * > Note: This parameter accepts only edge cluster IDs obtained by calling DescribeDBClustersZonal. Regular PolarDB cluster IDs obtained by calling DescribeDBClusters are not supported.
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
