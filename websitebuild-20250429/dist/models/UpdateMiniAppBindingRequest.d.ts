import * as $dara from '@darabonba/typescript';
export declare class UpdateMiniAppBindingRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WS20250801154628000001
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
     * The configuration key.
     *
     * @example
     * xxxx
     */
    settingKey?: string;
    /**
     * @remarks
     * The configuration value.
     *
     * @example
     * xxxx
     */
    settingValue?: string;
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
