import * as $dara from '@darabonba/typescript';
export declare class CheckDBNameZonalRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the edge cluster. You must first create an edge cluster in the MyBase console, call DescribeDBClustersZonal to obtain the cluster ID, and then call CheckDBNameZonal. Standard PolarDB cluster IDs are not supported.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The name of the database.
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
