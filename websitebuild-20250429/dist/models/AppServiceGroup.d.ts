import * as $dara from '@darabonba/typescript';
export declare class AppServiceGroup extends $dara.Model {
    /**
     * @remarks
     * The name.
     */
    name?: string;
    /**
     * @remarks
     * The QR code.
     */
    qrCode?: string;
    /**
     * @remarks
     * The group type, such as dingtalk and wx.
     *
     * @example
     * dingtalk
     */
    type?: string;
    /**
     * @remarks
     * The URL.
     *
     * @example
     * https://example.com/example.jpg
     */
    url?: string;
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
