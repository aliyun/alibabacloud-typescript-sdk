import * as $dara from '@darabonba/typescript';
export declare class AddSQLRateLimitingRulesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The message returned by the request.
     * > If the request is successful, Successful is returned. If the request fails, an error message such as an error code is returned.
     *
     * @example
     * Message
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 69A85BAF-1089-4CDF-A82F-0A140F******
     */
    requestId?: string;
    /**
     * @remarks
     * The request result. Valid values:
     *
     * - **true**: The request is successful.
     *
     * - **false**: The request fails.
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
