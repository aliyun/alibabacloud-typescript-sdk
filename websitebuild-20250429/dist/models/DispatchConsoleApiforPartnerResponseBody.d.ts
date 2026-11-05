import * as $dara from '@darabonba/typescript';
export declare class DispatchConsoleAPIForPartnerResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The request result.
     *
     * @example
     * {\\"HasCustomRoleAuth\\": False}
     */
    data?: string;
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
export declare class DispatchConsoleAPIForPartnerResponseBody extends $dara.Model {
    /**
     * @remarks
     * The error code. If the request is successful, the ErrorCode parameter is not returned. If the request fails, the ErrorCode parameter is returned. For more information, see the error codes in this topic.
     *
     * @example
     * 0
     */
    errorCode?: string;
    /**
     * @remarks
     * The response data.
     */
    module?: DispatchConsoleAPIForPartnerResponseBodyModule;
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
