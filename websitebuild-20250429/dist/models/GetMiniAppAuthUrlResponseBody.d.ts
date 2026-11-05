import * as $dara from '@darabonba/typescript';
export declare class GetMiniAppAuthUrlResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The authorization URL.
     *
     * @example
     * https://nschiper.oneclick.accounts.logi.com/identity/oauth2/token
     */
    authUrl?: string;
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
export declare class GetMiniAppAuthUrlResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request result.
     */
    data?: GetMiniAppAuthUrlResponseBodyData;
    /**
     * @remarks
     * The request ID.
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
