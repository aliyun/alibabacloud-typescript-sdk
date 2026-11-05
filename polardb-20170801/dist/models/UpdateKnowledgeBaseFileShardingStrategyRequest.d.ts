import * as $dara from '@darabonba/typescript';
export declare class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategyParameters extends $dara.Model {
    /**
     * @remarks
     * The maximum number of tokens per chunk. The value must be a positive integer. This parameter takes effect only when Type is set to hybrid.
     *
     * @example
     * 512
     */
    maxTokens?: number;
    /**
     * @remarks
     * Specifies whether to merge adjacent small chunks under the same heading. This parameter takes effect only when Type is set to hybrid.
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
export declare class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategy extends $dara.Model {
    /**
     * @remarks
     * The parameters of the default chunking strategy. MaxTokens and MergePeers are supported only when Type is set to hybrid.
     */
    parameters?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategyParameters;
    /**
     * @remarks
     * The type of the default chunking strategy. Valid values:
     * - hybrid: Splits by document structure and limits the token count.
     * - hierarchical: Splits only by document structure.
     *
     * This parameter is required.
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
export declare class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesMatch extends $dara.Model {
    /**
     * @remarks
     * The content type. Currently, only table is supported, which matches content that is parsed as tables.
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
export declare class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategyParameters extends $dara.Model {
    /**
     * @remarks
     * The Markdown table processing mode. Valid values:
     * - auto: Automatically determines the processing mode.
     * - on: Forcefully enables Markdown table processing.
     * - off: Disables Markdown table processing.
     *
     * @example
     * auto
     */
    markdownTables?: string;
    /**
     * @remarks
     * The maximum number of tokens per chunk for matched content. The value must be a positive integer. This parameter takes effect only when Type is set to hybrid.
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
export declare class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategy extends $dara.Model {
    /**
     * @remarks
     * The chunking strategy parameters of the override rule. MaxTokens takes effect only when Type is set to hybrid. MarkdownTables supports auto, on, or off.
     */
    parameters?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategyParameters;
    /**
     * @remarks
     * The chunking strategy type of the override rule. Valid values:
     * - hybrid
     * - hierarchical
     *
     * This parameter is required.
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
export declare class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRules extends $dara.Model {
    /**
     * @remarks
     * The rule match condition. Currently, only exact matching by content type for table content is supported.
     *
     * This parameter is required.
     */
    match?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesMatch;
    /**
     * @remarks
     * The chunking strategy to use when the rule is matched.
     *
     * This parameter is required.
     */
    strategy?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRulesStrategy;
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
export declare class UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfig extends $dara.Model {
    /**
     * @remarks
     * The default chunking strategy. This strategy is used when no rule is matched.
     *
     * This parameter is required.
     */
    defaultStrategy?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigDefaultStrategy;
    /**
     * @remarks
     * The list of override rules that are matched in order. Currently, a maximum of one exact-match rule with ContentType set to table is supported.
     */
    rules?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfigRules[];
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
export declare class UpdateKnowledgeBaseFileShardingStrategyRequest extends $dara.Model {
    /**
     * @remarks
     * The unique ID of the knowledge base file.
     *
     * This parameter is required.
     *
     * @example
     * e347ddb8-49bb-5c66-94bc-fa05cedaeac8
     */
    fileId?: string;
    /**
     * @remarks
     * Specifies whether to restore inheritance of the chunking strategy from the knowledge space. When this parameter is set to true, ShardingStrategyConfig cannot be specified at the same time.
     *
     * @example
     * false
     */
    inheritSpaceStrategy?: boolean;
    /**
     * @remarks
     * The unique ID of the knowledge base.
     *
     * This parameter is required.
     *
     * @example
     * pkb-2zesv6l6a63xsrym
     */
    knowledgeBaseId?: string;
    /**
     * @remarks
     * The ID of the region where the knowledge base resides.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The file-level chunking strategy configuration. This parameter is required when InheritSpaceStrategy is not set to true.
     */
    shardingStrategyConfig?: UpdateKnowledgeBaseFileShardingStrategyRequestShardingStrategyConfig;
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
