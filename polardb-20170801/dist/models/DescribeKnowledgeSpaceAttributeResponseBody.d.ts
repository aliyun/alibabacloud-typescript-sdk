import * as $dara from '@darabonba/typescript';
export declare class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategyParameters extends $dara.Model {
    /**
     * @remarks
     * The maximum number of tokens in a single chunk.
     *
     * @example
     * 512
     */
    maxTokens?: number;
    /**
     * @remarks
     * Specifies whether to merge adjacent small chunks under the same heading.
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
export declare class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategy extends $dara.Model {
    /**
     * @remarks
     * The parameter details.
     */
    parameters?: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategyParameters;
    /**
     * @remarks
     * The type of the default chunking strategy. Valid values: hybrid or hierarchical.
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
export declare class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesMatch extends $dara.Model {
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
export declare class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategyParameters extends $dara.Model {
    /**
     * @remarks
     * The Markdown table processing mode. Valid values: auto, on, or off.
     *
     * @example
     * auto
     */
    markdownTables?: string;
    /**
     * @remarks
     * The maximum number of tokens in a single chunk for matched content.
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
export declare class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategy extends $dara.Model {
    /**
     * @remarks
     * The parameter details.
     */
    parameters?: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategyParameters;
    /**
     * @remarks
     * The chunking strategy type used when the rule is matched.
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
export declare class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRules extends $dara.Model {
    /**
     * @remarks
     * The content type. Currently, table is supported.
     */
    match?: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesMatch;
    /**
     * @remarks
     * The chunking strategy.
     */
    strategy?: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRulesStrategy;
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
export declare class DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfig extends $dara.Model {
    /**
     * @remarks
     * The default chunking strategy. This strategy is used when no rule is matched.
     */
    defaultStrategy?: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigDefaultStrategy;
    /**
     * @remarks
     * The list of override rules that are matched in order.
     */
    rules?: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfigRules[];
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
export declare class DescribeKnowledgeSpaceAttributeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The access control list (ACL) mode of the knowledge space. Valid values:
     * - DISABLED: ACL is disabled.
     * - ENFORCED: ACL is enforced.
     *
     * @example
     * ENFORCED
     */
    ACLMode?: string;
    /**
     * @remarks
     * The creation time.
     *
     * The time is in ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2026-06-25T09:53:44Z
     */
    creationTime?: string;
    /**
     * @remarks
     * The ID of the PolarDB instance.
     *
     * @example
     * pc-*************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The name of the database.
     *
     * @example
     * polar_rag_meta
     */
    DBName?: string;
    /**
     * @remarks
     * The database engine type. Valid values:
     * * MySQL
     * * PostgreSQL
     *
     * @example
     * MySQL
     */
    DBType?: string;
    /**
     * @remarks
     * The description of the knowledge space.
     *
     * @example
     * testDesc
     */
    description?: string;
    /**
     * @remarks
     * The vector dimensions.
     *
     * @example
     * 1536
     */
    embeddingDimension?: number;
    /**
     * @remarks
     * The embedding model.
     *
     * @example
     * text-embedding-v4
     */
    embeddingModel?: string;
    /**
     * @remarks
     * The total number of knowledge bases.
     *
     * @example
     * 1
     */
    knowledgeBaseCount?: number;
    /**
     * @remarks
     * The unique identifier of the knowledge space.
     *
     * @example
     * pks-xxxxxx
     */
    knowledgeSpaceId?: string;
    /**
     * @remarks
     * The large language model.
     *
     * @example
     * qwen3.6-plus
     */
    LLMModel?: string;
    /**
     * @remarks
     * The name of the knowledge space.
     *
     * @example
     * testName
     */
    name?: string;
    /**
     * @remarks
     * OSS Bucket
     *
     * @example
     * test-bucket
     */
    OSSBucket?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
     */
    requestId?: string;
    /**
     * @remarks
     * The reranking model.
     *
     * @example
     * qwen3-rerank
     */
    rerankModel?: string;
    /**
     * @remarks
     * The chunk size in tokens.
     *
     * @example
     * 512
     */
    shardSize?: number;
    /**
     * @remarks
     * The default chunking strategy configuration of the knowledge space. This value may be empty if existing instances do not have a complete configuration saved.
     */
    shardingStrategyConfig?: DescribeKnowledgeSpaceAttributeResponseBodyShardingStrategyConfig;
    /**
     * @remarks
     * The instance status.
     *
     * @example
     * Activation
     */
    status?: string;
    /**
     * @remarks
     * The chunking strategy.
     *
     * @example
     * hybrid
     */
    strategy?: string;
    /**
     * @remarks
     * The total number of documents.
     *
     * @example
     * 1
     */
    totalDocs?: number;
    /**
     * @remarks
     * The total size in bytes.
     *
     * @example
     * 318881
     */
    totalSizeBytes?: number;
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
