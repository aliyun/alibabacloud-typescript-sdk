import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB extends $dara.Model {
    dataBase?: string;
    downloadLink?: string;
    intranetDownloadLink?: string;
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
export declare class DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDB extends $dara.Model {
    backupDownloadLinkByDB?: DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDBBackupDownloadLinkByDB[];
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
export declare class DescribeBackupsResponseBodyItemsBackup extends $dara.Model {
    backupDownloadLinkByDB?: DescribeBackupsResponseBodyItemsBackupBackupDownloadLinkByDB;
    backupDownloadURL?: string;
    backupEndTime?: string;
    backupId?: string;
    backupInitiator?: string;
    backupIntranetDownloadURL?: string;
    backupMethod?: string;
    backupMode?: string;
    backupSize?: number;
    backupStartTime?: string;
    backupStatus?: string;
    backupType?: string;
    checksum?: string;
    consistentTime?: number;
    copyOnlyBackup?: string;
    DBInstanceId?: string;
    encryption?: string;
    engine?: string;
    engineVersion?: string;
    expectExpireTime?: string;
    hostInstanceID?: string;
    isAvail?: number;
    metaStatus?: string;
    storageClass?: string;
    storeStatus?: string;
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
     * The number of backup sets on the current page.
     *
     * @example
     * 30
     */
    pageRecordCount?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 1A6D328C-84B8-40DC-BF49-6C73984D7494
     */
    requestId?: string;
    /**
     * @remarks
     * The size of the snapshot chain for the instance. Unit: bytes.
     *
     * @example
     * 0
     */
    totalEcsSnapshotSize?: number;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 100
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
