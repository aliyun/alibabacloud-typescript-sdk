import * as $dara from '@darabonba/typescript';
export declare class DescribeDetachedBackupsResponseBodyItemsBackup extends $dara.Model {
    backupEndTime?: string;
    backupId?: string;
    backupMethod?: string;
    backupMode?: string;
    backupSetSize?: string;
    backupStartTime?: string;
    backupStatus?: string;
    backupType?: string;
    backupsLevel?: string;
    consistentTime?: string;
    DBClusterId?: string;
    isAvail?: string;
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
export declare class DescribeDetachedBackupsResponseBodyItems extends $dara.Model {
    backup?: DescribeDetachedBackupsResponseBodyItemsBackup[];
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
export declare class DescribeDetachedBackupsResponseBody extends $dara.Model {
    items?: DescribeDetachedBackupsResponseBodyItems;
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
     * 15
     */
    pageRecordCount?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 717B2382-BB14-4DCB-BBC2-32DBE0******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 50
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
