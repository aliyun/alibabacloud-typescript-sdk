import * as $dara from '@darabonba/typescript';
export declare class CreateBatchTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The release batch ID.
     *
     * @example
     * pcb-xxx
     */
    batchId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C61892A4-0850-4516-9E26-44D96C1782DE
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
