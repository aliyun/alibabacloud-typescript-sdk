import * as $dara from '@darabonba/typescript';
export declare class ModifyImportTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 069EB9B1-DE12-54B9-8C20-822****
     */
    requestId?: string;
    /**
     * @remarks
     * The status of the data import task.
     *
     * @example
     * IMPORTING
     */
    status?: string;
    /**
     * @remarks
     * The ID of the task.
     *
     * @example
     * 41698****
     */
    taskId?: number;
    /**
     * @remarks
     * The name of the task.
     *
     * @example
     * task_1234
     */
    taskName?: string;
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
