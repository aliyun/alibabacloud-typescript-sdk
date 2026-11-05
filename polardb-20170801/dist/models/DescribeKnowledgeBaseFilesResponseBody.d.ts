import * as $dara from '@darabonba/typescript';
export declare class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategyParameters extends $dara.Model {
    /**
     * @remarks
     * The maximum number of tokens per shard.
     *
     * @example
     * 512
     */
    maxTokens?: number;
    /**
     * @remarks
     * Specifies whether to merge adjacent small shards under the same heading.
     *
     * @example
     * true
     */
    mergePeers?: boolean;
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
export declare class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategy extends $dara.Model {
    /**
     * @remarks
     * The parameter list.
     */
    parameters?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategyParameters;
    /**
     * @remarks
     * The default chunking strategy type. Valid values: hybrid and hierarchical.
     *
     * @example
     * hybrid
     */
    type?: string;
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
export declare class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesMatch extends $dara.Model {
    /**
     * @remarks
     * The content type. Currently, table is supported.
     *
     * @example
     * table
     */
    contentType?: string;
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
export declare class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategyParameters extends $dara.Model {
    /**
     * @remarks
     * The Markdown table processing mode. Valid values: auto, on, and off.
     *
     * @example
     * auto
     */
    markdownTables?: string;
    /**
     * @remarks
     * The maximum number of tokens per shard for matched content.
     *
     * @example
     * 512
     */
    maxTokens?: number;
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
export declare class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategy extends $dara.Model {
    /**
     * @remarks
     * The parameter list.
     */
    parameters?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategyParameters;
    /**
     * @remarks
     * The chunking strategy type after a rule is matched.
     *
     * @example
     * hierarchical
     */
    type?: string;
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
export declare class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRules extends $dara.Model {
    /**
     * @remarks
     * The content type. Currently, table is supported.
     */
    match?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesMatch;
    /**
     * @remarks
     * The chunking strategy.
     */
    strategy?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRulesStrategy;
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
export declare class DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfig extends $dara.Model {
    /**
     * @remarks
     * The default chunking strategy type. Valid values: hybrid and hierarchical.
     */
    defaultStrategy?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigDefaultStrategy;
    /**
     * @remarks
     * The list of override rules matched in order.
     */
    rules?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfigRules[];
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
export declare class DescribeKnowledgeBaseFilesResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The error message.
     *
     * @example
     * Not Support.
     */
    errorMessage?: string;
    /**
     * @remarks
     * The file ID.
     *
     * @example
     * 5b2dbb13-xxxx-xxxx-xxxx-a55fe8daec8f
     */
    fileId?: string;
    /**
     * @remarks
     * The file name.
     *
     * @example
     * FinancialReport.pdf
     */
    fileName?: string;
    /**
     * @remarks
     * The file size in bytes.
     *
     * @example
     * 318881
     */
    fileSize?: number;
    /**
     * @remarks
     * The file type.
     *
     * @example
     * pdf
     */
    fileType?: string;
    /**
     * @remarks
     * Indicates whether the knowledge space chunking strategy is inherited.
     *
     * @example
     * true
     */
    inheritSpaceStrategy?: boolean;
    /**
     * @remarks
     * The knowledge base ID.
     *
     * @example
     * pkb-xxxxxx
     */
    knowledgeBaseId?: string;
    /**
     * @remarks
     * The knowledge space ID.
     *
     * @example
     * pks-xxxxxx
     */
    knowledgeSpaceId?: string;
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
     * The OSS file path.
     *
     * @example
     * oss://test-bucket-example/pks-xxxx/pkb-xxxx/FinancialReport.pdf
     */
    OSSPath?: string;
    /**
     * @remarks
     * The number of shards.
     *
     * @example
     * 10
     */
    shardCount?: number;
    /**
     * @remarks
     * The chunking strategy configuration currently in effect for the document. This value may be empty if the complete configuration was not saved for existing instances.
     */
    shardingStrategyConfig?: DescribeKnowledgeBaseFilesResponseBodyItemsShardingStrategyConfig;
    /**
     * @remarks
     * The source type.
     *
     * @example
     * OSS
     */
    sourceType?: string;
    /**
     * @remarks
     * The status.
     *
     * @example
     * COMPLETED
     */
    status?: string;
    /**
     * @remarks
     * The update time.
     *
     * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2026-06-15T22:28:53Z
     */
    updatedAt?: string;
    /**
     * @remarks
     * The upload time.
     *
     * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2026-06-15T22:28:53Z
     */
    uploadTime?: string;
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
export declare class DescribeKnowledgeBaseFilesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of files.
     */
    items?: DescribeKnowledgeBaseFilesResponseBodyItems[];
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of records on the current page.
     *
     * @example
     * 9
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The number of records per page. Valid values: **30**, **50**, and **100**.
     *
     * Default value: **30**.
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
     * CED079B7-A408-41A1-BFF1-EC608E******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 9
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
