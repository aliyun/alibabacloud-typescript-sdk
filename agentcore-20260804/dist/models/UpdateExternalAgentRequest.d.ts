import * as $dara from '@darabonba/typescript';
export declare class UpdateExternalAgentRequestBodyModelQuota extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable the token quota. If this parameter is not specified, the default value is true. If you set this parameter to false, the quota is disabled and existing quota rules are deleted.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The quota limit type. This parameter is required and verified by the backend when the quota is enabled. Fixed value: token.
     *
     * @example
     * token
     */
    limitType?: string;
    /**
     * @remarks
     * The statistical period of the quota. This parameter is required and verified by the backend when the quota is enabled. Valid values:
     * - day: Daily.
     * - month: Monthly.
     *
     * @example
     * day
     */
    periodType?: string;
    /**
     * @remarks
     * The maximum number of tokens allowed to be consumed in a single period. This parameter is required and verified by the backend when the quota is enabled. The value must be greater than 0.
     *
     * @example
     * 1000000
     */
    usageLimit?: number;
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
export declare class UpdateExternalAgentRequestBodyModel extends $dara.Model {
    /**
     * @remarks
     * The model connection ID.
     *
     * This parameter is required.
     *
     * @example
     * mc-1
     */
    modelConnectionId?: string;
    /**
     * @remarks
     * The upstream model name.
     *
     * This parameter is required.
     *
     * @example
     * qwen-max
     */
    modelName?: string;
    /**
     * @remarks
     * The model token quota configuration. If this parameter is not passed, no quota is configured.
     */
    quota?: UpdateExternalAgentRequestBodyModelQuota;
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
export declare class UpdateExternalAgentRequestBodySkillsVersionSelector extends $dara.Model {
    /**
     * @remarks
     * The version selector type. Valid values:
     * - LABEL: Selects by tag.
     * - VERSION: Selects by specific version.
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The selector value. When the type is LABEL, the value is the tag name, such as latest. When the type is VERSION, the value is the specific version number.
     *
     * @example
     * latest
     */
    value?: string;
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
export declare class UpdateExternalAgentRequestBodySkills extends $dara.Model {
    /**
     * @remarks
     * The skill name.
     *
     * This parameter is required.
     *
     * @example
     * code-analysis
     */
    name?: string;
    /**
     * @remarks
     * The skill source type. Valid values:
     * - REFERENCE: References AI Registry assets.
     * - STATIC: Statically provided with deployment artifacts.
     *
     * @example
     * REFERENCE
     */
    sourceType?: string;
    /**
     * @remarks
     * The skill version field for compatibility with legacy requests. For new requests, use sourceType and versionSelector. Do not submit this parameter in combination with sourceType.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    /**
     * @remarks
     * The skill reference version selector, which supports LABEL tags and VERSION specific versions. If this parameter is omitted, LABEL/latest is used. Selectors are not provided for STATIC sources.
     */
    versionSelector?: UpdateExternalAgentRequestBodySkillsVersionSelector;
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
export declare class UpdateExternalAgentRequestBodyTemplateAiRegistry extends $dara.Model {
    /**
     * @remarks
     * The name of the template in AI Registry.
     *
     * This parameter is required.
     *
     * @example
     * code-review-template
     */
    name?: string;
    /**
     * @remarks
     * The version of the template in AI Registry.
     *
     * This parameter is required.
     *
     * @example
     * 1.0.0
     */
    version?: string;
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
export declare class UpdateExternalAgentRequestBodyTemplate extends $dara.Model {
    /**
     * @remarks
     * The AI Registry template configuration.
     */
    aiRegistry?: UpdateExternalAgentRequestBodyTemplateAiRegistry;
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
export declare class UpdateExternalAgentRequestBodyTools extends $dara.Model {
    /**
     * @remarks
     * The tool name.
     *
     * This parameter is required.
     *
     * @example
     * code-reviewer
     */
    name?: string;
    /**
     * @remarks
     * The tool type. Valid values:
     * - MCP: MCP tool.
     *
     * This parameter is required.
     *
     * @example
     * MCP
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
export declare class UpdateExternalAgentRequestBody extends $dara.Model {
    /**
     * @remarks
     * The description of the managed agent.
     *
     * @example
     * Code review agent running in the user environment
     */
    description?: string;
    /**
     * @remarks
     * The agent instruction, which is used to guide the behavior of the agent.
     *
     * @example
     * You are a code review assistant
     */
    instruction?: string;
    /**
     * @remarks
     * The model configuration. This parameter is available only when modelSource is set to PLATFORM.
     */
    model?: UpdateExternalAgentRequestBodyModel;
    /**
     * @remarks
     * The source of the model configuration. PLATFORM indicates that the platform parses and delivers the model configuration. RUNTIME indicates that the external runtime manages the model independently, and the model parameter cannot be passed at the same time. Valid values:
     * - PLATFORM: Platform model.
     * - RUNTIME: Runtime model.
     *
     * @example
     * PLATFORM
     */
    modelSource?: string;
    /**
     * @remarks
     * The name of the managed agent.
     *
     * @example
     * my-external-agent
     */
    name?: string;
    /**
     * @remarks
     * The list of skill configurations.
     */
    skills?: UpdateExternalAgentRequestBodySkills[];
    /**
     * @remarks
     * The agent template configuration.
     */
    template?: UpdateExternalAgentRequestBodyTemplate;
    /**
     * @remarks
     * The list of tool configurations.
     */
    tools?: UpdateExternalAgentRequestBodyTools[];
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
export declare class UpdateExternalAgentRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: UpdateExternalAgentRequestBody;
    /**
     * @remarks
     * The reserved query parameter. The backend does not provide idempotence guarantees for deduplication or recovery of original acceptance results based on this identifier at this time.
     *
     * @example
     * client-token-1
     */
    clientToken?: string;
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
