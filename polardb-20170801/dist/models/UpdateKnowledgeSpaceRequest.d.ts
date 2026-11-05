import * as $dara from '@darabonba/typescript';
export declare class UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategyParameters extends $dara.Model {
    /**
     * @remarks
     * The maximum number of tokens per chunk. The value must be a positive integer.
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
export declare class UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategy extends $dara.Model {
    /**
     * @remarks
     * The parameters of the default chunking strategy. MaxTokens and MergePeers take effect only when Type is set to hybrid.
     */
    parameters?: UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategyParameters;
    /**
     * @remarks
     * The type of the default chunking strategy. Valid values: hybrid and hierarchical.
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
export declare class UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesMatch extends $dara.Model {
    /**
     * @remarks
     * The content type. Currently, only table is supported.
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
export declare class UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategyParameters extends $dara.Model {
    /**
     * @remarks
     * The processing mode for Markdown tables. Valid values: auto, on, and off.
     *
     * @example
     * auto
     */
    markdownTables?: string;
    /**
     * @remarks
     * The maximum number of tokens per chunk for the matched content. The value must be a positive integer.
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
export declare class UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategy extends $dara.Model {
    /**
     * @remarks
     * The chunking strategy parameters for the override rule. MaxTokens takes effect only when Type is set to hybrid. MarkdownTables supports auto, on, or off.
     */
    parameters?: UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategyParameters;
    /**
     * @remarks
     * The type of the chunking strategy used after a rule is matched. Valid values: hybrid and hierarchical.
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
export declare class UpdateKnowledgeSpaceRequestShardingStrategyConfigRules extends $dara.Model {
    /**
     * @remarks
     * The match conditions of the rule. Currently, only exact match for table content by content type is supported.
     */
    match?: UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesMatch;
    /**
     * @remarks
     * The chunking strategy used after a successful match.
     */
    strategy?: UpdateKnowledgeSpaceRequestShardingStrategyConfigRulesStrategy;
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
export declare class UpdateKnowledgeSpaceRequestShardingStrategyConfig extends $dara.Model {
    /**
     * @remarks
     * The default chunking strategy. This strategy is used when no rules are matched.
     */
    defaultStrategy?: UpdateKnowledgeSpaceRequestShardingStrategyConfigDefaultStrategy;
    /**
     * @remarks
     * The list of override rules matched in sequence. Currently, a maximum of one exact match rule with ContentType set to table is supported.
     */
    rules?: UpdateKnowledgeSpaceRequestShardingStrategyConfigRules[];
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
export declare class UpdateKnowledgeSpaceRequest extends $dara.Model {
    /**
     * @remarks
     * The description of the knowledge space. The description can be up to 512 characters in length.
     *
     * @example
     * testDesc
     */
    description?: string;
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
     * The name of the large language model.
     *
     * @example
     * qwen3.6-plus
     */
    LLMModel?: string;
    /**
     * @remarks
     * The name of the knowledge space. The name must be 1 to 128 characters in length.
     *
     * @example
     * testName
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
     * The name of the reranking model.
     *
     * @example
     * qwen3-rerank
     */
    rerankModel?: string;
    /**
     * @remarks
     * The default chunking strategy configuration for the knowledge space. Simple strategies and composite strategies matched by content type are supported.
     */
    shardingStrategyConfig?: UpdateKnowledgeSpaceRequestShardingStrategyConfig;
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
