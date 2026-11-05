import * as $dara from '@darabonba/typescript';
export declare class DispatchConsoleAPIForPartnerRequest extends $dara.Model {
    /**
     * @remarks
     * The access token obtained by calling GetUserAccessTokenForPartner.
     *
     * This parameter is required.
     *
     * @example
     * 00a00aaa-a000-00a0-a0a0-a0a0a000a00a
     */
    liveToken?: string;
    /**
     * @remarks
     * Specifies the operation to perform on the alert. Valid values:
     *
     * - **deal**: Handles the alert (quarantine).
     * - **ignore**: Ignores the alert.
     * - **mark_mis_info**: Marks the alert as a false positive (adds it to the whitelist).
     * - **rm_mark_mis_info**: Unmarks the alert as a false positive (removes it from the whitelist).
     * - **offline_handled**: Marks the alert as handled.
     *
     * This parameter is required.
     *
     * @example
     * disable
     */
    operation?: string;
    /**
     * @remarks
     * The error parameters.
     *
     * @example
     * [\\"\\"]
     */
    params?: string;
    /**
     * @remarks
     * The product code.
     *
     * This parameter is required.
     *
     * @example
     * hbaseue
     */
    product?: string;
    /**
     * @remarks
     * The website domain name.
     *
     * @example
     * abcd.scd.wanwang.xin
     */
    siteHost?: string;
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
