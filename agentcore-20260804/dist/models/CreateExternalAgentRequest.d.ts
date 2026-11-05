import * as $dara from '@darabonba/typescript';
export declare class CreateExternalAgentRequestBodyModelQuota extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable the token quota. Default value: true. If you set this parameter to false, the quota is disabled and existing quota rules are deleted.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The quota limit type. This parameter is required when the quota is enabled. Fixed value: token.
     *
     * @example
     * token
     */
    limitType?: string;
    /**
     * @remarks
     * The statistical period of the quota. This parameter is required when the quota is enabled. Valid values:
     * - day: Daily.
     * - month: Monthly.
     *
     * @example
     * day
     */
    periodType?: string;
    /**
     * @remarks
     * The maximum number of tokens that can be consumed in a single period. This parameter is required when the quota is enabled and must be greater than 0.
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
export declare class CreateExternalAgentRequestBodyModel extends $dara.Model {
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
     * The model token quota configuration. If this parameter is not specified, no quota is configured.
     */
    quota?: CreateExternalAgentRequestBodyModelQuota;
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
export declare class CreateExternalAgentRequestBodySkillsVersionSelector extends $dara.Model {
    /**
     * @remarks
     * The type of the version selector. Valid values:
     * - LABEL: By label.
     * - VERSION: By specific version.
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The value of the selector. If the type is LABEL, this value is the label name, such as latest. If the type is VERSION, this value is the specific version number.
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
export declare class CreateExternalAgentRequestBodySkills extends $dara.Model {
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
     * The source type of the skill. Valid values:
     * - REFERENCE: References the AI Registry.
     * - STATIC: Statically provided with the package.
     *
     * @example
     * REFERENCE
     */
    sourceType?: string;
    /**
     * @remarks
     * The skill version.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    /**
     * @remarks
     * The referenced version selector. If omitted, the default value is LABEL/latest. Currently, only LABEL/latest is supported.
     */
    versionSelector?: CreateExternalAgentRequestBodySkillsVersionSelector;
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
export declare class CreateExternalAgentRequestBodyTemplateAiRegistry extends $dara.Model {
    /**
     * @remarks
     * The name of the template in the AI Registry.
     *
     * This parameter is required.
     *
     * @example
     * code-review-template
     */
    name?: string;
    /**
     * @remarks
     * The version of the template in the AI Registry.
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
export declare class CreateExternalAgentRequestBodyTemplate extends $dara.Model {
    /**
     * @remarks
     * The AI Registry template configuration.
     */
    aiRegistry?: CreateExternalAgentRequestBodyTemplateAiRegistry;
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
export declare class CreateExternalAgentRequestBodyTools extends $dara.Model {
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
export declare class CreateExternalAgentRequestBody extends $dara.Model {
    /**
     * @remarks
     * The description of the external agent.
     *
     * @example
     * Code review agent running in the user environment
     */
    description?: string;
    /**
     * @remarks
     * The instructions that guide the behavior of the agent.
     *
     * @example
     * You are a code review assistant
     */
    instruction?: string;
    /**
     * @remarks
     * The model configuration. This parameter is available only when modelSource is set to PLATFORM.
     */
    model?: CreateExternalAgentRequestBodyModel;
    /**
     * @remarks
     * The source of the model configuration. PLATFORM indicates that the platform parses and delivers the model configuration. RUNTIME indicates that the external runtime manages the model, and the model parameter cannot be passed at the same time. Valid values:
     * - PLATFORM: Platform model.
     * - RUNTIME: Runtime model.
     *
     * @example
     * PLATFORM
     */
    modelSource?: string;
    /**
     * @remarks
     * The name of the external agent.
     *
     * This parameter is required.
     *
     * @example
     * my-external-agent
     */
    name?: string;
    /**
     * @remarks
     * The list of skill configurations.
     */
    skills?: CreateExternalAgentRequestBodySkills[];
    /**
     * @remarks
     * The agent template configuration.
     */
    template?: CreateExternalAgentRequestBodyTemplate;
    /**
     * @remarks
     * The list of tool configurations.
     */
    tools?: CreateExternalAgentRequestBodyTools[];
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
export declare class CreateExternalAgentRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: CreateExternalAgentRequestBody;
    /**
     * @remarks
     * The reserved idempotency token. The backend does not provide idempotency guarantees in the current phase.
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
