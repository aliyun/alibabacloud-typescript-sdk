import * as $dara from '@darabonba/typescript';
export declare class DescribeMOTokenUsageDetailResponseBodyRecords extends $dara.Model {
    /**
     * @remarks
     * The number of input tokens that hit the cache.
     *
     * @example
     * 8000
     */
    cacheTokens?: number;
    /**
     * @remarks
     * The consumer associated with the API key.
     *
     * @example
     * 16******4_rds_copilot****_public_cn-4****02
     */
    consumerName?: string;
    /**
     * @remarks
     * The additional information passed by the user in the extra_info field during the request. The value is a JSON string.
     *
     * @example
     * {"label": "test"}
     */
    extraInfo?: string;
    /**
     * @remarks
     * The number of input tokens consumed.
     *
     * @example
     * 10000
     */
    inputTokens?: number;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rds_copilot***_public_cn-*********6
     */
    instanceId?: string;
    /**
     * @remarks
     * The model that was called.
     *
     * @example
     * qwen-flash
     */
    model?: string;
    /**
     * @remarks
     * The number of output tokens consumed.
     *
     * @example
     * 10000
     */
    outputTokens?: number;
    /**
     * @remarks
     * The region in which the instance resides.
     *
     * @example
     * cn-beijing
     */
    region?: string;
    /**
     * @remarks
     * The request time in ISO 8601 format (UTC).
     *
     * @example
     * 2026-04-01T01:00:00Z
     */
    requestTime?: string;
    /**
     * @remarks
     * The total number of tokens.
     *
     * @example
     * 100000
     */
    totalTokens?: number;
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
export declare class DescribeMOTokenUsageDetailResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cursor for the next page. An empty value indicates that the current page is the last page.
     *
     * @example
     * eyJpZCI6MTIzNDUsInRzIjoiMjAyNi0wNC0wOFQwMDowMDowMFoifQ==
     */
    nextCursor?: string;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    page?: number;
    /**
     * @remarks
     * The number of records per page.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The list of records in the response.
     */
    records?: DescribeMOTokenUsageDetailResponseBodyRecords[];
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329241C
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of records that match the query conditions.
     *
     * @example
     * 20
     */
    totalCount?: number;
    /**
     * @remarks
     * The usage type.
     *
     * @example
     * text
     */
    usageType?: string;
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
