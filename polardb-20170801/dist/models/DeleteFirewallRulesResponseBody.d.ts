import * as $dara from '@darabonba/typescript';
export declare class DeleteFirewallRulesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response message.
     *
     * > If the request is successful, Successful is returned. If the request fails, an error message is returned.
     *
     * @example
     * Successful
     */
    message?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 049A1520-6BD7-5572-8923-79215D2B4A94
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful. Valid values:
     *
     * - **true**: The request was successful.
     *
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
