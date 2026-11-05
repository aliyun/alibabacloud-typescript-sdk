import * as $dara from '@darabonba/typescript';
export declare class GetMiniAppBindingShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The site ID.
     *
     * @example
     * WS20250814102215000001
     */
    bizId?: string;
    /**
     * @remarks
     * The channel.
     *
     * @example
     * WECHAT
     */
    channel?: string;
    /**
     * @remarks
     * The list of extended information keys.
     *
     * @example
     * SERVER_DOMAIN
     */
    settingKeysShrink?: string;
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
