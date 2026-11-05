import * as $dara from '@darabonba/typescript';
export declare class ModifyMaskingRulesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response message.
     *
     * > If the request is successful, `Successful` is returned. If the request fails, an error message is returned.
     *
     * @example
     * Message
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 99B355CE-526C-478B-B730-AD9D7C******
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful. Valid values:
     *
     * - **true**
     *
     * - **false**
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
