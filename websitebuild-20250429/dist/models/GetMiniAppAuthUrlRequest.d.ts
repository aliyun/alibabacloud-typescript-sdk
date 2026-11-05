import * as $dara from '@darabonba/typescript';
export declare class GetMiniAppAuthUrlRequest extends $dara.Model {
    /**
     * @remarks
     * The site ID.
     *
     * @example
     * WS20250731233102000001
     */
    bizId?: string;
    /**
     * @remarks
     * The channel information.
     *
     * @example
     * WECHAT
     */
    channel?: string;
    /**
     * @remarks
     * The redirect URL.
     *
     * @example
     * null
     */
    redirectUri?: string;
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
