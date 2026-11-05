import * as $dara from '@darabonba/typescript';
export declare class CreateKnowledgeBaseResponseBody extends $dara.Model {
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
     * E56531A4-E552-40BA-9C58-137B80******
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
