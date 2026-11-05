import * as $dara from '@darabonba/typescript';
export declare class EnableFirewallRulesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The message returned.
     *
     * > Typically returns `Successful` on success. When the request fails, this parameter returns exception information such as error codes.
     *
     * @example
     * Message
     */
    message?: string;
    /**
     * @remarks
     * The unique ID of the request.
     *
     * @example
     * 99B355CE-526C-478B-B730-AD9D7C******
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful. Valid values:
     *
     * - **true**: The request was successful.
     * - **false**: The request failed.
     *
     * @example
     * true
     */
    success?: boolean;
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
