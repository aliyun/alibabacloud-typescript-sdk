import * as $dara from '@darabonba/typescript';
export declare class CreateInspectionTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 2921D843-433A-5FB3-A03B-4EC093B219F8
     */
    requestId?: string;
    /**
     * @remarks
     * The ID of the created inspection task.
     *
     * @example
     * task-123
     */
    taskId?: string;
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
