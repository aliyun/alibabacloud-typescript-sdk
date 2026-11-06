import * as $dara from '@darabonba/typescript';
export declare class VerifyConnectorResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of service account key labels that failed the verification or have uncertain verification results.
     *
     * @example
     * default
     */
    invalidServiceAccountKeys?: string[];
    /**
     * @remarks
     * Indicates whether all verified service account keys are valid.
     *
     * @example
     * true
     */
    valid?: boolean;
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
export declare class VerifyConnectorResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The verification result.
     */
    data?: VerifyConnectorResponseBodyData;
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
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
     * The request ID.
     *
     * @example
     * request-123456
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
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
