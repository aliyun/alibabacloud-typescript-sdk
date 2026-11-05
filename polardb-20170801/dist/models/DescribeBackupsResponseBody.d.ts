import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupsResponseBodyItemsBackup extends $dara.Model {
    backupEndTime?: string;
    backupId?: string;
    backupMethod?: string;
    backupMode?: string;
    backupSetSize?: string;
    backupStartTime?: string;
    backupStatus?: string;
    backupType?: string;
    backupsLevel?: string;
    comment?: string;
    consistentTime?: string;
    DBClusterId?: string;
    expectExpireTime?: string;
    expectExpireType?: string;
    isAvail?: string;
    tableRestoreMetaStatus?: string;
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
export declare class DescribeBackupsResponseBodyItems extends $dara.Model {
    backup?: DescribeBackupsResponseBodyItemsBackup[];
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
export declare class DescribeBackupsResponseBody extends $dara.Model {
    items?: DescribeBackupsResponseBodyItems;
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
     * 24A1990B-4F6E-482B-B8CB-75C612******
     */
    requestId?: string;
    /**
     * @remarks
     * The total size of level-2 backups in the specified region. Unit: bytes.
     * > - Only PSL4 and PSL5 storage types are supported.
     * > - Only clusters that have the level-2 backup feature enabled are supported.
     * > - If this parameter is not returned, the size of level-2 backups is 0.
     *
     * @example
     * 4639948800
     */
    totalLevel2BackupSize?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 1
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
