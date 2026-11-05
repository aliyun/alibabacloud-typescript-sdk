import * as $dara from '@darabonba/typescript';
export declare class RetrievalKnowledgeBaseResponseBodyResultsImageResources extends $dara.Model {
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
     * The MIME type of the image resource.
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
export declare class RetrievalKnowledgeBaseResponseBodyResults extends $dara.Model {
    /**
     * @remarks
     * The list of figure or table captions associated with the chunk.
     */
    captions?: string[];
    /**
     * @remarks
     * The list of structured element references from the source document associated with the chunk. This can be used to precisely locate the original elements.
     */
    docItems?: string[];
    /**
     * @remarks
     * The unique identifier of the file.
     *
     * @example
     * 91b97b71-xxxx-xxxx-xxxx-33c6a6341cdc
     */
    fileId?: string;
    /**
     * @remarks
     * The name of the file.
     *
     * @example
     * 2024_Financial_Report.pdf
     */
    fileName?: string;
    /**
     * @remarks
     * The chain of section headings to which the chunk belongs.
     */
    headings?: string[];
    /**
     * @remarks
     * The list of image resources referenced by the chunk.
     */
    imageResources?: RetrievalKnowledgeBaseResponseBodyResultsImageResources[];
    /**
     * @remarks
     * The ID of the knowledge base to which the retrieved chunk belongs. This is used to distinguish the source of results when searching multiple knowledge bases.
     *
     * @example
     * pkb-xxxxxxxx
     */
    knowledgeBaseId?: string;
    /**
     * @remarks
     * The metadata.
     *
     * @example
     * {}
     */
    metadata?: string;
    /**
     * @remarks
     * The list of page numbers to which the chunk belongs.
     */
    pageNumbers?: number[];
    /**
     * @remarks
     * The text content of the chunk.
     *
     * @example
     * Financial report
     */
    shardContent?: string;
    /**
     * @remarks
     * The index of the chunk.
     *
     * @example
     * 1
     */
    shardIndex?: number;
    /**
     * @remarks
     * The similarity score.
     *
     * @example
     * 0.8
     */
    similarityScore?: number;
    /**
     * @remarks
     * The URI of the source document.
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
export declare class RetrievalKnowledgeBaseResponseBody extends $dara.Model {
    /**
     * @remarks
     * The query text.
     *
     * @example
     * Financial report
     */
    queryText?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * CD35F3-F3-44CA-AFFF-BAF869******
     */
    requestId?: string;
    /**
     * @remarks
     * The number of results.
     *
     * @example
     * 5
     */
    resultCount?: number;
    /**
     * @remarks
     * The search results.
     */
    results?: RetrievalKnowledgeBaseResponseBodyResults[];
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
