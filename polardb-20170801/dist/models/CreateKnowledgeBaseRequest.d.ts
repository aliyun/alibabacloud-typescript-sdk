import * as $dara from '@darabonba/typescript';
export declare class CreateKnowledgeBaseRequest extends $dara.Model {
    /**
     * @remarks
     * The description of the knowledge base.
     *
     * @example
     * testkbDesc
     */
    description?: string;
    /**
     * @remarks
     * The type of the knowledge base: PERSONAL or PUBLIC.
     *
     * @example
     * PUBLIC
     */
    knowledgeBaseType?: string;
    /**
     * @remarks
     * The unique identifier of the knowledge space.
     *
     * This parameter is required.
     *
     * @example
     * pks-xxxxxx
     */
    knowledgeSpaceId?: string;
    /**
     * @remarks
     * The name of the knowledge base.
     *
     * This parameter is required.
     *
     * @example
     * testkb
     */
    name?: string;
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
     * The search mode. Valid values:
     * * balanced (default): balanced mode
     * * precise: precise mode
     * * semantic: semantic mode
     * * knn: KNN mode
     * * rrf: reciprocal rank fusion
     *
     * @example
     * balanced
     */
    searchMode?: string;
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
