import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode extends $dara.Model {
    DBNodeClass?: string;
    DBNodeId?: string;
    DBNodeRole?: string;
    hotReplicaMode?: string;
    imciSwitch?: string;
    regionId?: string;
    serverless?: string;
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
export declare class DescribeDBClustersResponseBodyItemsDBClusterDBNodes extends $dara.Model {
    DBNode?: DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode[];
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
export declare class DescribeDBClustersResponseBodyItemsDBClusterTagsTag extends $dara.Model {
    key?: string;
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
export declare class DescribeDBClustersResponseBodyItemsDBClusterTags extends $dara.Model {
    tag?: DescribeDBClustersResponseBodyItemsDBClusterTagsTag[];
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
export declare class DescribeDBClustersResponseBodyItemsDBCluster extends $dara.Model {
    aiType?: string;
    category?: string;
    connectionResourceQuota?: number;
    connectionResourceUsed?: number;
    cpuCores?: string;
    createTime?: string;
    DBClusterDescription?: string;
    DBClusterId?: string;
    DBClusterNetworkType?: string;
    DBClusterStatus?: string;
    DBNodeClass?: string;
    DBNodeNumber?: number;
    DBNodes?: DescribeDBClustersResponseBodyItemsDBClusterDBNodes;
    DBType?: string;
    DBVersion?: string;
    deletionLock?: number;
    engine?: string;
    expireTime?: string;
    expired?: string;
    hotStandbyCluster?: string;
    lockMode?: string;
    memorySize?: string;
    payType?: string;
    regionId?: string;
    remoteMemorySize?: string;
    resourceGroupId?: string;
    searchStorageUsed?: number;
    serverlessType?: string;
    storagePayType?: string;
    storageSpace?: number;
    storageType?: string;
    storageUsed?: number;
    strictConsistency?: string;
    subCategory?: string;
    tags?: DescribeDBClustersResponseBodyItemsDBClusterTags;
    vpcId?: string;
    vswitchId?: string;
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
export declare class DescribeDBClustersResponseBodyItems extends $dara.Model {
    DBCluster?: DescribeDBClustersResponseBodyItemsDBCluster[];
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
export declare class DescribeDBClustersResponseBody extends $dara.Model {
    items?: DescribeDBClustersResponseBodyItems;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 12
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of clusters returned on the current page.
     *
     * @example
     * 5
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 9B7BFB11-C077-4FE3-B051-F69CEB******
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
