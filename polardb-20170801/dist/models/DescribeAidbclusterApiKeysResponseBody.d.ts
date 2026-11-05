import * as $dara from '@darabonba/typescript';
export declare class DescribeAIDBClusterApiKeysResponseBodyApiKeys extends $dara.Model {
    /**
     * @remarks
     * The API key of the model service.
     *
     * @example
     * Scxxx-xxx-x-xxWW
     */
    apiKey?: string;
    /**
     * @remarks
     * The creation time.
     *
     * The time is displayed in ISO 8601 format in UTC (YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2026-04-09T03:19:19Z
     */
    createTime?: string;
    /**
     * @remarks
     * The description of the API key.
     *
     * @example
     * my api key
     */
    description?: string;
    /**
     * @remarks
     * ApiKey ID
     *
     * @example
     * 573
     */
    id?: string;
    /**
     * @remarks
     * The status of the API key.
     *
     * @example
     * active
     */
    status?: string;
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
export declare class DescribeAIDBClusterApiKeysResponseBody extends $dara.Model {
    /**
     * @remarks
     * The API keys.
     */
    apiKeys?: DescribeAIDBClusterApiKeysResponseBodyApiKeys[];
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 1
     */
    pageNumber?: string;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 30
     */
    pageSize?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 7F2007D3-7E74-4ECB-89A8-BF130D******
     */
    requestId?: string;
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
