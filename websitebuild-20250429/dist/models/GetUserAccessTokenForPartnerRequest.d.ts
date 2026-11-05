import * as $dara from '@darabonba/typescript';
export declare class GetUserAccessTokenForPartnerRequest extends $dara.Model {
    /**
     * @remarks
     * The website domain name.
     *
     * @example
     * abcd.scd.wanwang.xin
     */
    siteHost?: string;
    /**
     * @remarks
     * The credential used to connect to the cloud application.
     * > This parameter is displayed for subsequent calls.
     *
     * This parameter is required.
     *
     * @example
     * 2f68fe1e-d9d5-4803-94d0-2fc81032e91d
     */
    ticket?: string;
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
