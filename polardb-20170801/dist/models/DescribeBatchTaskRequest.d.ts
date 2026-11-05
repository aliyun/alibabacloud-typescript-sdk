import * as $dara from '@darabonba/typescript';
export declare class DescribeBatchTaskRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the batch task.
     *
     * @example
     * pcb-xxx
     */
    batchId?: string;
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
