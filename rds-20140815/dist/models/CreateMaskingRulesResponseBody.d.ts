import * as $dara from '@darabonba/typescript';
export declare class CreateMaskingRulesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The returned message.
     *
     * @example
     * successful create
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 792233B1-76B8-5A01-92B4-**********864
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful. Valid values:
     *
     * - **true**: Successful.
     * - **false**: Failed.
     *
     * @example
     * true
     */
    success?: string;
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
