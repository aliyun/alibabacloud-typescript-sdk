import * as $dara from '@darabonba/typescript';
export declare class DescribeSQLRateLimitingRulesResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The rule list.
     *
     * @example
     * []
     */
    ruleList?: string[];
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
export declare class DescribeSQLRateLimitingRulesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The result set.
     *
     * @example
     * {}
     */
    data?: DescribeSQLRateLimitingRulesResponseBodyData;
    /**
     * @remarks
     * The maximum number of entries returned in this request. Default value: 10.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The message returned for the request.
     * > If the request is successful, Successful is returned. If the request fails, an exception message such as an error code is returned.
     *
     * @example
     * Successful
     */
    message?: string;
    /**
     * @remarks
     * The pagination token for the next page.
     *
     * @example
     * AAAAARbaCuN6hiD08qrLdwJ9Fh0vHYf39hc0J5qELgsazkBk
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 22C0ACF0-DD29-4B67-9190-B7A48C******
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
