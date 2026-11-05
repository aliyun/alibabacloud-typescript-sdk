import * as $dara from '@darabonba/typescript';
export declare class VerifyWorkspaceAgenticFsMountRamAuthorizationResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The authorization status. A value of AUTHORIZED does not indicate that the actual mount was successful.
     *
     * @example
     * AUTHORIZED
     */
    authorizationStatus?: string;
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
export declare class VerifyWorkspaceAgenticFsMountRamAuthorizationResponseBody extends $dara.Model {
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
     * The response data.
     */
    data?: VerifyWorkspaceAgenticFsMountRamAuthorizationResponseBodyData;
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
     * 550e8400-e29b-41d4-a716-446655440000
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful.
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
