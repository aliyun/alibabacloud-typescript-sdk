import * as $dara from '@darabonba/typescript';
export declare class DeleteMaskingRulesResponseBody extends $dara.Model {
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
     * The ID of the request.
     *
     * @example
     * 5EEE1ED1-A459-38D2-840C-0C49********
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the operation was successful.
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
