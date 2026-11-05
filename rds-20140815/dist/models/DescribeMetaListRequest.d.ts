import * as $dara from '@darabonba/typescript';
export declare class DescribeMetaListRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the backup set that is used for the query when the restoration method is based on a backup set. You can call the DescribeBackups operation to query the ID.
     * > This parameter is required when **RestoreType** is set to **BackupSetID**.
     *
     * @example
     * 14***
     */
    backupSetID?: number;
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
     *
     * @example
     * ETnLKlblzczshOTUbOCz****
     */
    clientToken?: string;
    /**
     * @remarks
     * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The name of the database to query. Exact match is used. The specific database name and all tables in the database are returned.
     * > If this parameter is left empty, a list of all databases is returned.
     *
     * @example
     * testdb1
     */
    getDbName?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number. Valid values: any integer greater than **0** and less than or equal to the maximum value of the Integer type. Default value: **1**.
     * > This parameter takes effect only when it is specified together with **PageSize**.
     *
     * @example
     * 1
     */
    pageIndex?: number;
    /**
     * @remarks
     * The number of entries per page. Default value: **1**.
     * > This parameter takes effect only when it is specified together with **PageIndex**.
     *
     * @example
     * 1
     */
    pageSize?: number;
    /**
     * @remarks
     * The name of the database to query. Fuzzy match is used. Only the matched database names are returned, and table names are not returned.
     * > For example, if you specify `test`, `testdb1` and `testdb2` are matched. After you determine the target database name, you can specify the exact database name in the **GetDbName** parameter to view the information about all tables in the target database.
     *
     * @example
     * test
     */
    pattern?: string;
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
    /**
     * @remarks
     * The point in time to which you want to restore data. The specified point in time must be earlier than the current time. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time must be in UTC. You can call the DescribeBackups operation to query the time.
     * > This parameter is required when **RestoreType** is set to **RestoreTime**.
     *
     * @example
     * 2019-05-30T03:29:10Z
     */
    restoreTime?: string;
    /**
     * @remarks
     * The restoration method. Valid values:
     *
     * * **BackupSetID**: restores data based on a backup set. If you set this parameter to BackupSetID, you must also specify the **BackupSetID** parameter.
     * * **RestoreTime**: restores data to a specific point in time. If you set this parameter to RestoreTime, you must also specify the **RestoreTime** parameter.
     *
     * Default value: **BackupSetID**.
     *
     * @example
     * BackupSetID
     */
    restoreType?: string;
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
