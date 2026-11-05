import * as $dara from '@darabonba/typescript';
export declare class DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem extends $dara.Model {
    backupEnabled?: string;
    backupEnabledTime?: string;
    crossBackupRegion?: string;
    crossBackupType?: string;
    DBInstanceDescription?: string;
    DBInstanceId?: string;
    DBInstanceStatus?: string;
    engine?: string;
    engineVersion?: string;
    lockMode?: string;
    logBackupEnabled?: string;
    logBackupEnabledTime?: string;
    retentType?: number;
    retention?: number;
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
export declare class DescribeCrossRegionBackupDBInstanceResponseBodyItems extends $dara.Model {
    item?: DescribeCrossRegionBackupDBInstanceResponseBodyItemsItem[];
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
export declare class DescribeCrossRegionBackupDBInstanceResponseBody extends $dara.Model {
    items?: DescribeCrossRegionBackupDBInstanceResponseBodyItems;
    /**
     * @remarks
     * The number of entries in the cross-region backup settings list.
     *
     * @example
     * 1
     */
    itemsNumbers?: number;
    /**
     * @remarks
     * The page number. Valid values: any integer greater than 0 and less than or equal to the maximum value of the Integer type.
     *
     * Default value: **1**.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Default value: 30.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 33517002-182D-40BE-93EC-610BD3381045
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 100
     */
    totalRecords?: number;
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
