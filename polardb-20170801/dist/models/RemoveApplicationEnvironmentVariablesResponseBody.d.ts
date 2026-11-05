import * as $dara from '@darabonba/typescript';
export declare class RemoveApplicationEnvironmentVariablesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The response status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * Indicates whether the operation was successful.
     *
     * @example
     * true
     */
    ok?: boolean;
    /**
     * @remarks
     * The number of variables removed.
     *
     * @example
     * 1
     */
    removedCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the gateway was restarted.
     *
     * @example
     * true
     */
    restarted?: boolean;
    /**
     * @remarks
     * The total number of application environment variables remaining.
     *
     * @example
     * 0
     */
    totalVariables?: number;
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
