import * as $dara from '@darabonba/typescript';
export declare class DescribeMOTokenUsageSummaryResponseBodyRecords extends $dara.Model {
    /**
     * @remarks
     * The API key used.
     *
     * @example
     * sk-rds-ds5jjo08hyz1g9orhs3y56l5cy3l3shm
     */
    apiKey?: string;
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
     * The date, accurate to the day.
     *
     * @example
     * 2026-04-21
     */
    date?: string;
    /**
     * @remarks
     * The input token usage.
     *
     * @example
     * 10000
     */
    inputTokens?: number;
    /**
     * @remarks
     * The API key name.
     *
     * @example
     * qcy-apikey
     */
    keyName?: string;
    /**
     * @remarks
     * The model called.
     *
     * @example
     * qwen-flash
     */
    model?: string;
    /**
     * @remarks
     * The output token usage.
     *
     * @example
     * 10000
     */
    outputTokens?: number;
    /**
     * @remarks
     * The number of requests.
     *
     * @example
     * 100
     */
    requestCount?: number;
    /**
     * @remarks
     * The total number of tokens.
     *
     * @example
     * 100000
     */
    totalTokens?: number;
    /**
     * @remarks
     * The query type.
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
export declare class DescribeMOTokenUsageSummaryResponseBodySummary extends $dara.Model {
    /**
     * @remarks
     * The number of input tokens that hit the cache.
     *
     * @example
     * 9000
     */
    cacheTokens?: number;
    /**
     * @remarks
     * The input token usage.
     *
     * @example
     * 10000
     */
    inputTokens?: number;
    /**
     * @remarks
     * The output token usage.
     *
     * @example
     * 1000
     */
    outputTokens?: number;
    /**
     * @remarks
     * The total number of tokens.
     *
     * @example
     * 11000
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
export declare class DescribeMOTokenUsageSummaryResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The token usage records.
     */
    records?: DescribeMOTokenUsageSummaryResponseBodyRecords[];
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
     */
    requestId?: string;
    /**
     * @remarks
     * The request result.
     *
     * @example
     * true
     */
    success?: boolean;
    /**
     * @remarks
     * The usage summary information.
     */
    summary?: DescribeMOTokenUsageSummaryResponseBodySummary;
    /**
     * @remarks
     * The type.
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
