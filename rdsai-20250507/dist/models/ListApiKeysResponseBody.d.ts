import * as $dara from '@darabonba/typescript';
export declare class ListApiKeysResponseBodyDataCustomKeyList extends $dara.Model {
    /**
     * @remarks
     * API Key
     *
     * @example
     * sk-rds-*****
     */
    apiKey?: string;
    /**
     * @remarks
     * The daily throttling quota.
     *
     * @example
     * 100000000
     */
    dailyTokenQuota?: number;
    /**
     * @remarks
     * Indicates whether the key is throttled.
     *
     * @example
     * false
     */
    isRateLimited?: boolean;
    /**
     * @remarks
     * The API key name.
     *
     * @example
     * api-*****
     */
    keyName?: string;
    /**
     * @remarks
     * The quota ratio.
     *
     * @example
     * 0.2
     */
    limitRate?: number;
    /**
     * @remarks
     * The quota type. Valid values:
     *
     * - **fixed**: Fixed value.
     * - **ratio**: Percentage.
     * - **auto**: Automatic allocation.
     *
     * @example
     * fixed
     */
    limitType?: string;
    roleArn?: string;
    /**
     * @remarks
     * The alert threshold percentage. For example, 80 indicates that an alert is triggered when the usage reaches 80%. The alert is reset when the usage drops below this percentage.
     *
     * @example
     * 80
     */
    thresholdPercent?: number;
    /**
     * @remarks
     * The quota of the current key.
     *
     * @example
     * 10000
     */
    tokenQuota?: number;
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
export declare class ListApiKeysResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The URL for model calls.
     *
     * @example
     * http://xxx.yy/v1
     */
    baseUrl?: string;
    /**
     * @remarks
     * The list of custom API keys.
     */
    customKeyList?: ListApiKeysResponseBodyDataCustomKeyList[];
    /**
     * @remarks
     * The daily throttling quota for the system API key.
     *
     * @example
     * 100000000
     */
    dailyTokenQuota?: number;
    /**
     * @remarks
     * Indicates whether the key is throttled.
     *
     * @example
     * false
     */
    isRateLimited?: boolean;
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
     * The system-generated key.
     *
     * @example
     * sk-rds-xxx
     */
    systemApiKey?: string;
    /**
     * @remarks
     * The alert threshold percentage for SystemApiKey. For example, 80 indicates that an alert is triggered when the usage reaches 80%. The alert is reset when the usage drops below this percentage.
     *
     * @example
     * 80
     */
    thresholdPercent?: number;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 138
     */
    total?: number;
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
export declare class ListApiKeysResponseBody extends $dara.Model {
    /**
     * @remarks
     * The query result.
     */
    data?: ListApiKeysResponseBodyData;
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
