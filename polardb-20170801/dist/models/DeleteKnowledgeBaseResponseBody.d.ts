import * as $dara from '@darabonba/typescript';
export declare class DeleteKnowledgeBaseResponseBody extends $dara.Model {
    /**
     * @remarks
     * The unique identifier of the knowledge base.
     *
     * @example
     * pkb-xxxxx
     */
    knowledgeBaseId?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 2FED790E-FB61-4721-8C1C-07C627******
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
