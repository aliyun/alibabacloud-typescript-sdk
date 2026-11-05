import * as $dara from '@darabonba/typescript';
export declare class CloseAITaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 936C7025-27A5-4CB1-BB31-540E1F0CCA12
     */
    requestId?: string;
    /**
     * @remarks
     * The ID of the task.
     *
     * @example
     * 53879cdb-9a00-428e-acaf-ff4cff******
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
