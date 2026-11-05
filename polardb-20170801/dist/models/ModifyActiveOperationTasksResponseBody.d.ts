import * as $dara from '@darabonba/typescript';
export declare class ModifyActiveOperationTasksResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 42CD2EF5-D77E-5AD4-961B-159330D98286
     */
    requestId?: string;
    /**
     * @remarks
     * The list of task IDs.
     *
     * @example
     * 11111,22222
     */
    taskIds?: string;
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
