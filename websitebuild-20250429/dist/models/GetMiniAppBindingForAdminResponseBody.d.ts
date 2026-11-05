import * as $dara from '@darabonba/typescript';
export declare class GetMiniAppBindingForAdminResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The authorization status.
     *
     * @example
     * AUTHORIZED
     */
    authStatus?: string;
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WS20250801004817000002
     */
    bizId?: string;
    /**
     * @remarks
     * The mini program ID.
     *
     * @example
     * xxxx
     */
    platformAppid?: string;
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
export declare class GetMiniAppBindingForAdminResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request result.
     */
    data?: GetMiniAppBindingForAdminResponseBodyData;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 6C6B99AC-39EC-5350-874C-204128C905E6
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
