import * as $dara from '@darabonba/typescript';
export declare class EnableSQLRateLimitingRulesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The message returned for the request.
     * > If the request is successful, `Successful` is returned. If the request fails, an error message such as an error code is returned.
     *
     * @example
     * Successful
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4CE6DF97-AEA4-484F-906F-C407EE******
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful. Valid values:
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
