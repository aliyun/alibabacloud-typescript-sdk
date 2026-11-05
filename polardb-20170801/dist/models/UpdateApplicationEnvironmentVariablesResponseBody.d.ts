import * as $dara from '@darabonba/typescript';
export declare class UpdateApplicationEnvironmentVariablesResponseBody extends $dara.Model {
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
     * Indicates whether the operation succeeded.
     *
     * @example
     * true
     */
    ok?: boolean;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 6A2EE5B4-CC9F-46E1-A747-E43BC9******
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
     * The total number of environment variables for the application after the update.
     *
     * @example
     * 1
     */
    totalVariables?: number;
    /**
     * @remarks
     * A list of the environment variable names that were added or updated.
     */
    updatedKeys?: string[];
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
