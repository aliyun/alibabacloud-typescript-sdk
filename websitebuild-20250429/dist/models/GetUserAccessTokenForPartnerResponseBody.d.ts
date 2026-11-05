import * as $dara from '@darabonba/typescript';
export declare class GetUserAccessTokenForPartnerResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The value of the exchanged access token.
     *
     * @example
     * 000a00000a000000000000000a000000000a0a00000000000000000a0a00000a000000000000000a000000000000000a0a0a000000000a0a0000000000000000000000000a0000000a00000a0a000a000a00000000000a0a
     */
    tokenValue?: string;
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
export declare class GetUserAccessTokenForPartnerResponseBody extends $dara.Model {
    /**
     * @remarks
     * The error code. If the request is successful, the ErrorCode field is not returned. If the request fails, the ErrorCode field is returned. For more information, see the error codes in this topic.
     *
     * @example
     * 0
     */
    errorCode?: string;
    /**
     * @remarks
     * The response data.
     */
    module?: GetUserAccessTokenForPartnerResponseBodyModule;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 6C6B99AC-39EC-5350-874C-204128C905E6
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     *
     * @example
     * true
     */
    success?: string;
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
