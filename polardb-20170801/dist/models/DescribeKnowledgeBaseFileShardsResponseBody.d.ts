import * as $dara from '@darabonba/typescript';
export declare class DescribeKnowledgeBaseFileShardsResponseBodyShardsImageResources extends $dara.Model {
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
export declare class DescribeKnowledgeBaseFileShardsResponseBodyShards extends $dara.Model {
    /**
     * @remarks
     * The list of figure or table captions associated with the shard.
     */
    captions?: string[];
    /**
     * @remarks
     * The list of structured element references of the source document associated with the shard, which can be used to precisely locate the original elements.
     */
    docItems?: string[];
    /**
     * @remarks
     * The section heading chain to which the shard belongs.
     */
    headings?: string[];
    /**
     * @remarks
     * The list of image resources referenced by the shard.
     */
    imageResources?: DescribeKnowledgeBaseFileShardsResponseBodyShardsImageResources[];
    /**
     * @remarks
     * The list of page numbers to which the shard belongs.
     */
    pageNumbers?: string[];
    /**
     * @remarks
     * The text content of the shard.
     *
     * @example
     * ******
     */
    shardContent?: string;
    /**
     * @remarks
     * The index of the shard.
     *
     * @example
     * 1
     */
    shardIndex?: number;
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
export declare class DescribeKnowledgeBaseFileShardsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries on the current page.
     *
     * @example
     * 10
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The number of entries per page in a paging query.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 3E5CD764-xxxx-xxxx-xxxx-20E0DE84B2AF
     */
    requestId?: string;
    /**
     * @remarks
     * The shard information.
     */
    shards?: DescribeKnowledgeBaseFileShardsResponseBodyShards[];
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 10
     */
    totalRecordCount?: number;
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
