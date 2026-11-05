import * as $dara from '@darabonba/typescript';
export declare class ModifyMaskingRulesResponseBody extends $dara.Model {
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
     * successful
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 8B1434A1-08A7-3E8C-A237-076A********
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the operation is successful.
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
