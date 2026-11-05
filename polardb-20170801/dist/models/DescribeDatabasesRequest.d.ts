import * as $dara from '@darabonba/typescript';
export declare class DescribeDatabasesRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The name of the database.
     *
     * > You cannot specify multiple database names.
     *
     * @example
     * test_db
     */
    DBName?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The number of the page to return. The value must be an integer that is greater than 0 and does not exceed the maximum value of an integer. Default value: **1**.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries to return on each page. Valid values:
     *
     * - **30**
     *
     * - **50**
     *
     * - **100**
     *
     * Default value: **30**.
     *
     * @example
     * 30
     */
    pageSize?: number;
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
