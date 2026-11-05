import * as $dara from '@darabonba/typescript';
export declare class AddFirewallRulesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response message.
     *
     * @example
     * Successful
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2921D843-433A-5FB3-A03B-4EC093B219F8
     */
    requestId?: string;
    /**
     * @remarks
     * The result of the request. Valid values:
     *
     * - **true**: The request was successful.
     *
     * - **false**: The request failed.
     *
     * @example
     * True
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
