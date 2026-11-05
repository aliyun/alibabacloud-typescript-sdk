import * as $dara from '@darabonba/typescript';
export declare class DescribeAgenticDBClustersRequestTag extends $dara.Model {
    /**
     * @remarks
     * The tag key. You can use tags to filter clusters. You can specify up to 20 tags. The number n for each tag pair must be unique and must be a consecutive integer that starts from 1. The Tag.n.Key parameter is paired with the Tag.n.Value parameter.
     *
     * @example
     * type
     */
    key?: string;
    /**
     * @remarks
     * The tag value that corresponds to the tag key.
     *
     * @example
     * testValueData
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
export declare class DescribeAgenticDBClustersRequest extends $dara.Model {
    /**
     * @remarks
     * The Agentic cluster ID. Separate multiple cluster IDs with commas (,).
     *
     * @example
     * pagc-**************
     */
    agenticDbClusterIds?: string;
    /**
     * @remarks
     * The cluster description. Fuzzy match is supported.
     *
     * @example
     * pc-****************
     */
    DBClusterDescription?: string;
    /**
     * @remarks
     * The cluster ID. Separate multiple cluster IDs with commas (,).
     *
     * @example
     * pc-**************
     */
    DBClusterIds?: string;
    /**
     * @remarks
     * The cluster status.
     *
     * @example
     * Running
     */
    DBClusterStatus?: string;
    /**
     * @remarks
     * The maximum number of entries to return. Default value: 10.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The pagination token. Set this parameter to the NextToken value returned in the previous API call. If there is no next query, do not specify this parameter.
     *
     * @example
     * 212db86sca4384811e0b5e8707e******
     */
    nextToken?: string;
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
     * The number of entries per page. Valid values: 30, 50, and 100.
     *
     * Default value: 30.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-************
     */
    resourceGroupId?: string;
    /**
     * @remarks
     * The tags.
     */
    tag?: DescribeAgenticDBClustersRequestTag[];
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
