import * as $dara from '@darabonba/typescript';
export declare class DescribeSharedBackupsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The end time of the backup. The time is displayed in UTC.
     *
     * @example
     * 2020-05-12T03:25:55Z
     */
    backupEndTime?: string;
    /**
     * @remarks
     * The backup set ID.
     *
     * @example
     * 111111111
     */
    backupId?: string;
    /**
     * @remarks
     * The data backup method. Only snapshot backups are supported. The value is fixed as **Snapshot**.
     *
     * @example
     * Snapshot
     */
    backupMethod?: string;
    /**
     * @remarks
     * The backup mode. Valid values:
     * * **Automated**: automatic backup
     * * **Manual**: manual backup
     *
     * @example
     * Manual
     */
    backupMode?: string;
    /**
     * @remarks
     * The size of the backup file. Unit: bytes.
     *
     * @example
     * 4639948800
     */
    backupSetSize?: string;
    /**
     * @remarks
     * The start time of the backup. The time is displayed in UTC.
     *
     * @example
     * 2020-11-15T07:30:05Z
     */
    backupStartTime?: string;
    /**
     * @remarks
     * The backup status. Valid values:
     * * **Success**: The backup is completed.
     * * **Failed**: The backup failed.
     *
     * @example
     * Success
     */
    backupStatus?: string;
    /**
     * @remarks
     * The backup type. Only full backups are supported. The value is fixed as **FullBackup**.
     *
     * @example
     * FullBackup
     */
    backupType?: string;
    /**
     * @remarks
     * The backup set level. Valid values:
     * * **Level-1**: level-1 backup
     * * **Level-2**: level-2 backup
     *
     * @example
     * Level-2
     */
    backupsLevel?: string;
    /**
     * @remarks
     * The point in time of the consistent snapshot. The value is a UNIX timestamp. Unit: seconds.
     *
     * @example
     * 1589253947
     */
    consistentTime?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The database engine type.
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The database engine version.
     *
     * @example
     * 5.6
     */
    DBVersion?: string;
    /**
     * @remarks
     * The billing method. Valid values:
     * * **Postpaid**: pay-as-you-go
     * * **Prepaid**: subscription
     *
     * @example
     * Postpaid
     */
    payType?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hongzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The Serverless type. A value of **AgileServerless** indicates that the current cluster is a Serverless cluster. An empty value indicates that the current cluster is one of the common clusters.
     *
     * @example
     * AgileServerless
     */
    serverlessType?: string;
    /**
     * @remarks
     * The share type.
     *
     * @example
     * ShareIncoming
     */
    shareType?: string;
    /**
     * @remarks
     * The UID of the sharer.
     *
     * @example
     * 170*************
     */
    sharerUID?: string;
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
export declare class DescribeSharedBackupsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of shared backup sets.
     */
    items?: DescribeSharedBackupsResponseBodyItems[];
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: string;
    /**
     * @remarks
     * The number of entries on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 16
     */
    totalRecordCount?: string;
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
