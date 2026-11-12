import * as $dara from '@darabonba/typescript';
export declare class RestoreTableRequest extends $dara.Model {
    /**
     * @remarks
     * The backup set ID.
     * > This parameter is required if you want to restore the destination databases and tables from a backup set. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/98102.html) operation to query the backup set ID.
     *
     * > To obtain the backup set ID, call the DescribeBackups operation and specify the StartTime and EndTime parameters. Then, call the DescribeMetaList operation to obtain the metadata of the restorable databases and tables. Operation description: Dependency chain description: To obtain the BackupId, you must call the DescribeBackups operation (the StartTime and EndTime parameters are required). To obtain the database and table names required for TableMeta, you must call the DescribeMetaList operation.
     *
     * @example
     * 111111
     */
    backupId?: string;
    /**
     * @remarks
     * The cluster ID.
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters within your account.
     *
     * > The destination cluster must be in the Running state. You can call the DescribeDBClusterAttribute operation to query the current state. Operation description: Status prerequisite: The cluster must be in the Running state. You can call the DescribeDBClusterAttribute operation to query the current state.
     *
     * This parameter is required.
     *
     * @example
     * pc-bp***************
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The point in time to which you want to restore the data. Specify the time in the YYYY-MM-DDThh:mmZ format. The time must be in UTC.
     * >* This parameter is required if you want to restore data to a specific point in time.
     * >* You can restore data to any point in time within the last seven days.
     *
     * @example
     * 2020-10-04T01:40:00Z
     */
    restoreTime?: string;
    securityToken?: string;
    /**
     * @remarks
     * The JSON string that contains the information about the destination databases and tables to be restored. All values in the database and table information are of the string type.
     * Example: `[
     *    {
     *        "tables":[
     *            {
     *                "name":"testtb",
     *                "type":"table",
     *                "newname":"testtb_restore"
     *            }
     *        ],
     *        "name":"testdb",
     *        "type":"db",
     *        "newname":"testdb_restore"
     *    }
     * ]`.
     * > You can call the [DescribeMetaList](https://help.aliyun.com/document_detail/194770.html) operation to view the details of the databases and tables that can be restored, and fill in the restorable database and table information in the corresponding positions in the preceding example.
     *
     * This parameter is required.
     *
     * @example
     * [ { "tables":[ { "name":"testtb", "type":"table", "newname":"testtb_restore" } ], "name":"testdb", "type":"db", "newname":"testdb_restore" } ]
     */
    tableMeta?: string;
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
