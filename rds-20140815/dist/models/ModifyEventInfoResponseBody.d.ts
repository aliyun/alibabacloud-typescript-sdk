import * as $dara from '@darabonba/typescript';
export declare class ModifyEventInfoResponseBody extends $dara.Model {
    /**
     * @remarks
     * The error code.
     *
     * @example
     * mst.errorcode.success.errormessage
     */
    errorCode?: string;
    /**
     * @remarks
     * The error event ID.
     *
     * @example
     * 12343
     */
    errorEventId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 224DB9F7-3100-4899-AB9C-C938BCCB43E7
     */
    requestId?: string;
    /**
     * @remarks
     * The number of successful records.
     *
     * @example
     * 1
     */
    successCount?: number;
    /**
     * @remarks
     * The success event ID.
     *
     * @example
     * 234221
     */
    successEventId?: string;
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
