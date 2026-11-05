import * as $dara from '@darabonba/typescript';
export declare class SetAgentCreditQuotaResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 9B353D6D-53C9-1C24-95D5-2D24596DBCF1
     */
    requestId?: string;
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
