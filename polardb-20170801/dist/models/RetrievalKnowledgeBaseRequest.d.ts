import * as $dara from '@darabonba/typescript';
export declare class RetrievalKnowledgeBaseRequest extends $dara.Model {
    /**
     * @remarks
     * The unique identifier of the knowledge base. You can specify up to 50 knowledge base IDs separated by commas.
     *
     * This parameter is required.
     *
     * @example
     * pkb-1xxxxx,pkb-2xxxxx
     */
    knowledgeBaseId?: string;
    /**
     * @remarks
     * The query text.
     *
     * This parameter is required.
     *
     * @example
     * Financial report
     */
    queryText?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * Specifies whether reranking is enabled. Default value: true.
     *
     * @example
     * true
     */
    rerankEnabled?: boolean;
    /**
     * @remarks
     * The similarity score threshold.
     *
     * @example
     * 0.7
     */
    scoreThreshold?: number;
    /**
     * @remarks
     * The number of results to return.
     *
     * @example
     * 5
     */
    topK?: number;
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
