import * as $dara from '@darabonba/typescript';
export declare class DescribePolarFsResponseBodyItemsPolarFsPathsMountInfo extends $dara.Model {
    polarDbProxy?: string;
    polarFsCluster?: string;
    token?: string;
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
export declare class DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClustersMountedAIDBClusters extends $dara.Model {
    DBClusterId?: string;
    mountDir?: string;
    mountStatus?: string;
    mountedTime?: string;
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
export declare class DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClusters extends $dara.Model {
    mountedAIDBClusters?: DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClustersMountedAIDBClusters[];
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
export declare class DescribePolarFsResponseBodyItemsPolarFsPathsTagsTag extends $dara.Model {
    /**
     * @example
     * testKey
     */
    key?: string;
    /**
     * @example
     * testValue
     */
    value?: string;
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
export declare class DescribePolarFsResponseBodyItemsPolarFsPathsTags extends $dara.Model {
    tag?: DescribePolarFsResponseBodyItemsPolarFsPathsTagsTag[];
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
export declare class DescribePolarFsResponseBodyItemsPolarFsPaths extends $dara.Model {
    accelerateType?: string;
    acceleratedStorageSpace?: string;
    acceleratingEnable?: string;
    bandwidth?: number;
    category?: string;
    createTime?: string;
    expireTime?: string;
    expired?: string;
    mountInfo?: DescribePolarFsResponseBodyItemsPolarFsPathsMountInfo;
    mountedAIDBClusters?: DescribePolarFsResponseBodyItemsPolarFsPathsMountedAIDBClusters;
    payType?: string;
    polarFsInstanceDescription?: string;
    polarFsInstanceId?: string;
    polarFsPath?: string;
    polarFsStatus?: string;
    polarFsType?: string;
    regionId?: string;
    relativeDbClusterId?: string;
    /**
     * @example
     * rg-xxx
     */
    resourceGroupId?: string;
    securityGroupId?: string;
    storageSpace?: number;
    storageType?: string;
    tags?: DescribePolarFsResponseBodyItemsPolarFsPathsTags;
    VPCId?: string;
    vSwitchId?: string;
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
export declare class DescribePolarFsResponseBodyItems extends $dara.Model {
    polarFsPaths?: DescribePolarFsResponseBodyItemsPolarFsPaths[];
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
export declare class DescribePolarFsResponseBody extends $dara.Model {
    items?: DescribePolarFsResponseBodyItems;
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
     * The number of entries on the current page.
     *
     * @example
     * 13
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 8CD1852F-8176-55E4-891C-4478DC00CC7A
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 16
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
