import * as $dara from '@darabonba/typescript';
export declare class CreateExternalAgentResponseBodyDataConfiguredSkillsVersionSelector extends $dara.Model {
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
export declare class CreateExternalAgentResponseBodyDataConfiguredSkills extends $dara.Model {
    /**
     * @remarks
     * The name of the skill in Workspace AI Registry.
     *
     * This parameter is required.
     *
     * @example
     * web-search
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
     * The legacy compatibility field. New requests use sourceType and versionSelector.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    /**
     * @remarks
     * The referenced version selector. If omitted, the default value is LABEL/latest. Currently, only LABEL/latest is supported.
     */
    versionSelector?: CreateExternalAgentResponseBodyDataConfiguredSkillsVersionSelector;
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
export declare class CreateExternalAgentResponseBodyDataExternalAgentStatus extends $dara.Model {
    /**
     * @remarks
     * The heartbeat status. ONLINE indicates that the most recent heartbeat has not exceeded the configured timeout threshold. STALE indicates that the heartbeat has timed out. UNKNOWN indicates that the heartbeat is missing or has an invalid format. Valid values: ONLINE (online), STALE (heartbeat expired), and UNKNOWN (unknown).
     *
     * @example
     * ONLINE
     */
    heartbeatStatus?: string;
    /**
     * @remarks
     * The time when the external agent was last active, in RFC 3339 format.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    lastActiveAt?: string;
    /**
     * @remarks
     * The time of the last heartbeat from the external agent, in RFC 3339 format.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    lastHeartbeat?: string;
    /**
     * @remarks
     * The local IP address reported by the external agent.
     *
     * @example
     * 10.0.0.42
     */
    localIP?: string;
    /**
     * @remarks
     * The runtime type reported by the external agent.
     *
     * @example
     * qwenpaw
     */
    runtime?: string;
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
export declare class CreateExternalAgentResponseBodyDataModelQuota extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the quota is enabled. This field is not returned if no quota is configured.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The quota limit type. Currently, only token is supported.
     *
     * @example
     * token
     */
    limitType?: string;
    /**
     * @remarks
     * Indicates whether the quota has been exceeded in the current period. This field is read-only and returned by the backend.
     *
     * @example
     * false
     */
    overLimit?: boolean;
    /**
     * @remarks
     * The quota statistical period. The value day indicates daily statistics. The value month indicates monthly statistics.
     *
     * @example
     * day
     */
    periodType?: string;
    /**
     * @remarks
     * The gateway quota rule status. This field is read-only and returned by the backend.
     *
     * @example
     * ACTIVE
     */
    ruleStatus?: string;
    /**
     * @remarks
     * The maximum number of tokens that can be consumed in a single period.
     *
     * @example
     * 1000000
     */
    usageLimit?: number;
    /**
     * @remarks
     * The number of tokens consumed in the current period. This field is read-only and returned by the backend.
     *
     * @example
     * 12345
     */
    usedAmount?: number;
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
export declare class CreateExternalAgentResponseBodyDataModel extends $dara.Model {
    /**
     * @remarks
     * The model connection ID.
     *
     * @example
     * mc-1
     */
    modelConnectionId?: string;
    /**
     * @remarks
     * The upstream model name.
     *
     * @example
     * qwen-max
     */
    modelName?: string;
    /**
     * @remarks
     * The model token quota configuration and quota usage status for the current period. This field is empty if no quota is configured.
     */
    quota?: CreateExternalAgentResponseBodyDataModelQuota;
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
export declare class CreateExternalAgentResponseBodyDataSkillsVersionSelector extends $dara.Model {
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
export declare class CreateExternalAgentResponseBodyDataSkills extends $dara.Model {
    /**
     * @remarks
     * The version applied at runtime. This field is read-only.
     *
     * @example
     * 1.0.0
     */
    appliedVersion?: string;
    /**
     * @remarks
     * Indicates whether the skill comes from a fixed template. This field is read-only. Template items cannot be removed.
     *
     * @example
     * false
     */
    fromTemplate?: boolean;
    /**
     * @remarks
     * The skill name.
     *
     * @example
     * code-analysis
     */
    name?: string;
    /**
     * @remarks
     * The current target version. This field is read-only.
     *
     * @example
     * 1.0.0
     */
    resolvedVersion?: string;
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
     * The referenced version selector. If omitted, the default value is LABEL/latest.
     */
    versionSelector?: CreateExternalAgentResponseBodyDataSkillsVersionSelector;
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
export declare class CreateExternalAgentResponseBodyDataTemplateAiRegistry extends $dara.Model {
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
export declare class CreateExternalAgentResponseBodyDataTemplate extends $dara.Model {
    /**
     * @remarks
     * The AI Registry template configuration.
     */
    aiRegistry?: CreateExternalAgentResponseBodyDataTemplateAiRegistry;
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
export declare class CreateExternalAgentResponseBodyDataTools extends $dara.Model {
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
export declare class CreateExternalAgentResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The ID of the external agent.
     *
     * @example
     * agent-1
     */
    agentId?: string;
    /**
     * @remarks
     * Includes only the skills added or overridden by the user. Template-inherited skills are not included. The resource model reads this field to preserve update semantics. Creation and update operations still use the skills in the request.
     */
    configuredSkills?: CreateExternalAgentResponseBodyDataConfiguredSkills[];
    /**
     * @remarks
     * The creation mode.
     *
     * @example
     * CUSTOM
     */
    createMode?: string;
    /**
     * @remarks
     * The creation time, in RFC 3339 format.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The deployment type.
     *
     * @example
     * SELF_HOSTED
     */
    deployType?: string;
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
     * The runtime status information reported by the external agent.
     */
    externalAgentStatus?: CreateExternalAgentResponseBodyDataExternalAgentStatus;
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
     * The latest specification version number.
     *
     * @example
     * 1
     */
    latestSpecVersion?: number;
    /**
     * @remarks
     * The processing status of the latest specification version. Valid values: pending (to be processed), processing (in progress), waiting_retry (waiting for retry), succeeded (success), failed (failure), and superseded (replaced by a new version).
     *
     * @example
     * pending
     */
    latestVersionStatus?: string;
    /**
     * @remarks
     * The model configuration. This parameter is available only when modelSource is set to PLATFORM.
     */
    model?: CreateExternalAgentResponseBodyDataModel;
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
     * @example
     * my-external-agent
     */
    name?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The runtime type reported by the external agent.
     *
     * @example
     * qwenpaw
     */
    runtime?: string;
    /**
     * @remarks
     * The list of skill configurations.
     */
    skills?: CreateExternalAgentResponseBodyDataSkills[];
    /**
     * @remarks
     * The status of the external agent. Valid values: Creating, Running, Failed, Updating, Deleting, and Deleted.
     *
     * @example
     * Running
     */
    status?: string;
    /**
     * @remarks
     * The agent template configuration.
     */
    template?: CreateExternalAgentResponseBodyDataTemplate;
    /**
     * @remarks
     * The list of tool configurations.
     */
    tools?: CreateExternalAgentResponseBodyDataTools[];
    /**
     * @remarks
     * The update time in RFC 3339 format.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    updatedAt?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * @example
     * ws-1
     */
    workspaceId?: string;
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
export declare class CreateExternalAgentResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code. The value is SUCCESS when the operation is successful.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The information about the created external agent.
     */
    data?: CreateExternalAgentResponseBodyData;
    /**
     * @remarks
     * The HTTP status code. A value of 200 indicates success.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The request processing result message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     */
    success?: boolean;
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
