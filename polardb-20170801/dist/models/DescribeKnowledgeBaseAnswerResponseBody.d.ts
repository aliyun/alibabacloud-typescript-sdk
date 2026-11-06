import * as $dara from '@darabonba/typescript';
export declare class DescribeKnowledgeBaseAnswerResponseBodySourcesImageResources extends $dara.Model {
    /**
     * @remarks
     * The index of the source document to which the image belongs, starting from 0.
     *
     * @example
     * 0
     */
    documentIndex?: number;
    /**
     * @remarks
     * The unique identifier of the image resource.
     *
     * @example
     * document-0/pictures/1
     */
    id?: string;
    /**
     * @remarks
     * The element reference of the image in the source document structure.
     *
     * @example
     * #/pictures/1
     */
    itemRef?: string;
    /**
     * @remarks
     * The media type of the image resource.
     *
     * @example
     * image/png
     */
    mimeType?: string;
    /**
     * @remarks
     * The OSS URI of the image resource.
     *
     * @example
     * oss://my-bucket/results/my-space/doc-001/artifacts/image-1.png
     */
    uri?: string;
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
export declare class DescribeKnowledgeBaseAnswerResponseBodySources extends $dara.Model {
    /**
     * @remarks
     * The shard metadata.
     *
     * @example
     * {}
     */
    chunkMetadata?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The file ID.
     *
     * @example
     * 91b97b71-xxxx-xxxx-xxxx-33c6a6341cdc
     */
    fileId?: string;
    /**
     * @remarks
     * The file name.
     *
     * @example
     * Financial_Report.pdf
     */
    fileName?: string;
    /**
     * @remarks
     * The list of image resources associated with the shards referenced in the Q&A.
     */
    imageResources?: DescribeKnowledgeBaseAnswerResponseBodySourcesImageResources[];
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
     * The document metadata.
     *
     * @example
     * {}
     */
    metadata?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The list of page numbers to which the shard belongs.
     */
    pageNumbers?: number[];
    /**
     * @remarks
     * The shard content.
     *
     * @example
     * Financial report
     */
    shardContent?: string;
    /**
     * @remarks
     * The shard ID.
     *
     * @example
     * 8
     */
    shardIndex?: number;
    /**
     * @remarks
     * The similarity score.
     *
     * @example
     * 0.75
     */
    similarityScore?: number;
    /**
     * @remarks
     * The source ID.
     *
     * @example
     * 1
     */
    sourceId?: number;
    /**
     * @remarks
     * The URI of the original document.
     *
     * @example
     * https://example.com/source.pdf
     */
    sourceUri?: string;
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
export declare class DescribeKnowledgeBaseAnswerResponseBody extends $dara.Model {
    /**
     * @remarks
     * The agent ID.
     *
     * @example
     * agent-example-001
     */
    agentId?: string;
    /**
     * @remarks
     * The answer content.
     *
     * @example
     * The content of the financial report is summarized as follows: ******
     */
    answer?: string;
    /**
     * @remarks
     * The total number of completion tokens generated.
     *
     * @example
     * 3935
     */
    completionTokens?: number;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * Space not found: pks-xxxx
     */
    errorMessage?: string;
    /**
     * @remarks
     * The error type.
     *
     * @example
     * not_found
     */
    errorType?: string;
    /**
     * @remarks
     * The large language model ID.
     *
     * @example
     * OO1A6p8B******_xPUC
     */
    LLMModelId?: string;
    /**
     * @remarks
     * The total number of prompt tokens consumed.
     *
     * @example
     * 2459
     */
    promptTokens?: number;
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
     * The request ID.
     *
     * @example
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
     */
    requestId?: string;
    /**
     * @remarks
     * The list of reference sources for the answer.
     */
    sources?: DescribeKnowledgeBaseAnswerResponseBodySources[];
    /**
     * @remarks
     * The status of the Q&A task. Valid values:
     * - RUNNING: The task is in progress.
     * - COMPLETED: The task is completed.
     *
     * @example
     * COMPLETED
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
