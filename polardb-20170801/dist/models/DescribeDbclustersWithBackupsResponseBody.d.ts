import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClustersWithBackupsResponseBodyItemsDBCluster extends $dara.Model {
    createTime?: string;
    DBClusterDescription?: string;
    DBClusterId?: string;
    DBClusterNetworkType?: string;
    DBClusterStatus?: string;
    DBNodeClass?: string;
    DBType?: string;
    DBVersion?: string;
    deletedTime?: string;
    deletionLock?: number;
    engine?: string;
    expireTime?: string;
    expired?: string;
    isDeleted?: number;
    lockMode?: string;
    payType?: string;
    regionId?: string;
    vpcId?: string;
    zoneId?: string;
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
export declare class DescribeDBClustersWithBackupsResponseBodyItems extends $dara.Model {
    DBCluster?: DescribeDBClustersWithBackupsResponseBodyItemsDBCluster[];
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
export declare class DescribeDBClustersWithBackupsResponseBody extends $dara.Model {
    items?: DescribeDBClustersWithBackupsResponseBodyItems;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of clusters on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F8529AA2-522F-4B30-B80B-8F7D39******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries returned.
     *
     * @example
     * 1
     */
    totalRecordCount?: number;
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
