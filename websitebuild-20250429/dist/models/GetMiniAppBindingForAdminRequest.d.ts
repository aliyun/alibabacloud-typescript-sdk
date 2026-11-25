import * as $dara from '@darabonba/typescript';
export declare class GetMiniAppBindingForAdminRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WS20250801152639000005
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
     * The mini program ID.
     *
     * @example
     * wxaaa1111111aaa11a
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
