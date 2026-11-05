import * as $dara from '@darabonba/typescript';
export declare class AnswerKnowledgeBaseResponseBody extends $dara.Model {
    /**
     * @remarks
     * The unique identifier of the Q&A task.
     *
     * @example
     * R3BGbnBqcXN******.2a5a23c9-******-179970533d30
     */
    queryId?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
     */
    requestId?: string;
    /**
     * @remarks
     * The status of the Q&A task.
     *
     * @example
     * Running
     */
    status?: string;
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
