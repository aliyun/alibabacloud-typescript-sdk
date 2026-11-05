import * as $dara from '@darabonba/typescript';
export declare class AddSQLRateLimitingRulesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response message.
     *
     * > If the request is successful, \\`Successful\\` is returned. If the request fails, an error message is returned, such as an error code.
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
     * Indicates whether the request was successful. Valid values:
     *
     * - **true**: The request was successful.
     *
     * - **false**: The request failed.
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
