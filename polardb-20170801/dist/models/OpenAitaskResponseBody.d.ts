import * as $dara from '@darabonba/typescript';
export declare class OpenAITaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 9B7BFB11-C077-4FE3-B051-F69CEB******
     */
    requestId?: string;
    /**
     * @remarks
     * The task ID.
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
