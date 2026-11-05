import * as $dara from '@darabonba/typescript';
export declare class GetMiniAppBindingResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The authorization status.
     *
     * @example
     * disabled
     */
    authStatus?: string;
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WS20260206134402000001
     */
    bizId?: string;
    /**
     * @remarks
     * The ICP filing status.
     *
     * @example
     * false
     */
    icpFiled?: boolean;
    /**
     * @remarks
     * The mini program ID.
     *
     * @example
     * wx7f122a7d23fdxxxx
     */
    platformAppid?: string;
    /**
     * @remarks
     * The preview QR code URL.
     *
     * @example
     * http://xxxx
     */
    previewQrCodeUrl?: string;
    /**
     * @remarks
     * The production QR code URL.
     *
     * @example
     * http://xxxx
     */
    productionQrCodeUrl?: string;
    /**
     * @remarks
     * The extended information.
     */
    settingValues?: {
        [key: string]: string;
    };
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
export declare class GetMiniAppBindingResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request result.
     */
    data?: GetMiniAppBindingResponseBodyData;
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
