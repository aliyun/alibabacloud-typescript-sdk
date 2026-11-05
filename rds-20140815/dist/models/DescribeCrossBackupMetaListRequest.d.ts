import * as $dara from '@darabonba/typescript';
export declare class DescribeCrossBackupMetaListRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the cross-region backup set. You can call the DescribeCrossRegionBackups operation to query the ID.
     *
     * This parameter is required.
     *
     * @example
     * 123456
     */
    backupSetId?: string;
    /**
     * @remarks
     * The name of the database to query. Exact match is used. The specific database name and the names of tables in the database are returned.
     *
     * @example
     * testdb1
     */
    getDbName?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. Valid values: any integer greater than 0 and less than or equal to the maximum value of the Integer type.
     * > This parameter must be used together with **PageSize** to take effect.
     *
     * @example
     * 1
     */
    pageIndex?: string;
    /**
     * @remarks
     * The number of entries per page. Default value: **1**.
     * > This parameter must be used together with **PageIndex** to take effect.
     *
     * @example
     * 30
     */
    pageSize?: string;
    /**
     * @remarks
     * The name of the database to query. Fuzzy match is used. Only the matched database names are returned, and table names are not returned.
     * > You can use fuzzy match first. For example, enter test to match testdb1 and testdb2. After you determine the target database name, use exact match by specifying **GetDbName** to view the specific database name and table names.
     *
     * @example
     * test
     */
    pattern?: string;
    /**
     * @remarks
     * The region where the instance resides.
     *
     * @example
     * cn-hangzhou
     */
    region?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
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
