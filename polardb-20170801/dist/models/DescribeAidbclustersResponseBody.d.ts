import * as $dara from '@darabonba/typescript';
export declare class DescribeAIDBClustersResponseBodyItemsDBClusterTagsTag extends $dara.Model {
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
export declare class DescribeAIDBClustersResponseBodyItemsDBClusterTags extends $dara.Model {
    tag?: DescribeAIDBClustersResponseBodyItemsDBClusterTagsTag[];
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
export declare class DescribeAIDBClustersResponseBodyItemsDBCluster extends $dara.Model {
    aiNodeType?: string;
    createTime?: string;
    DBClusterDescription?: string;
    DBClusterId?: string;
    DBClusterStatus?: string;
    DBNodeClass?: string;
    DBType?: string;
    expireTime?: string;
    expired?: boolean;
    kubeClusterId?: string;
    lockMode?: string;
    modelSpace?: string;
    modelType?: string;
    payType?: string;
    regionId?: string;
    /**
     * @example
     * pc-**************
     */
    relativeDBClusterId?: string;
    runType?: string;
    storageSpace?: number;
    storageType?: string;
    tags?: DescribeAIDBClustersResponseBodyItemsDBClusterTags;
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
export declare class DescribeAIDBClustersResponseBodyItems extends $dara.Model {
    DBCluster?: DescribeAIDBClustersResponseBodyItemsDBCluster[];
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
export declare class DescribeAIDBClustersResponseBody extends $dara.Model {
    items?: DescribeAIDBClustersResponseBodyItems;
    /**
     * @remarks
     * The page number. Default value: 1.
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
     * 7
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 9D6CE7C6-1C52-5BF6-B3D7-10977D44542C
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 5
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
