import * as $dara from '@darabonba/typescript';
export declare class GetExternalAgentResponseBodyDataConfiguredSkillsVersionSelector extends $dara.Model {
    /**
     * @remarks
     * The version selector type. A value of LABEL indicates selection by tag, and a value of VERSION indicates selection by specific version.
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The selector value. When the type is LABEL, this is the label name (such as latest). When the type is VERSION, this is the specific version number.
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
export declare class GetExternalAgentResponseBodyDataConfiguredSkills extends $dara.Model {
    /**
     * @remarks
     * The name of the skill in the Workspace AI Registry.
     *
     * This parameter is required.
     *
     * @example
     * web-search
     */
    name?: string;
    /**
     * @remarks
     * The skill source type. A value of REFERENCE indicates that the skill references AI Registry. A value of STATIC indicates that the skill is statically provided with the package.
     *
     * @example
     * REFERENCE
     */
    sourceType?: string;
    /**
     * @remarks
     * A legacy compatibility field. For new requests, use sourceType and versionSelector.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    /**
     * @remarks
     * The skill reference version selector. It supports LABEL for tags and VERSION for specific versions. If omitted, LABEL/latest is used. Selectors are not provided for STATIC sources.
     */
    versionSelector?: GetExternalAgentResponseBodyDataConfiguredSkillsVersionSelector;
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
export declare class GetExternalAgentResponseBodyDataExternalAgentStatus extends $dara.Model {
    /**
     * @remarks
     * The heartbeat status. ONLINE indicates that the latest heartbeat is within the configured timeout threshold. STALE indicates that the heartbeat has timed out. UNKNOWN indicates that the heartbeat is missing or the format is invalid. Valid values: ONLINE, STALE, and UNKNOWN.
     *
     * @example
     * ONLINE
     */
    heartbeatStatus?: string;
    /**
     * @remarks
     * The last active time of the managed agent, in RFC 3339 format.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    lastActiveAt?: string;
    /**
     * @remarks
     * The time of the last heartbeat from the managed agent, in RFC 3339 format.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    lastHeartbeat?: string;
    /**
     * @remarks
     * The local IP address reported by the managed agent.
     *
     * @example
     * 10.0.0.42
     */
    localIP?: string;
    /**
     * @remarks
     * The runtime type reported by the managed agent.
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
export declare class GetExternalAgentResponseBodyDataModelQuota extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the quota is enabled. This parameter is not returned if no quota is configured.
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
     * Indicates whether the quota is exceeded in the current cycle. This parameter is read-only and returned by the backend.
     *
     * @example
     * false
     */
    overLimit?: boolean;
    /**
     * @remarks
     * The quota statistical period. A value of day indicates daily statistics, and a value of month indicates monthly statistics.
     *
     * @example
     * day
     */
    periodType?: string;
    /**
     * @remarks
     * The gateway quota rule status. This parameter is read-only and returned by the backend.
     *
     * @example
     * ACTIVE
     */
    ruleStatus?: string;
    /**
     * @remarks
     * The maximum number of tokens allowed to be consumed in a single cycle.
     *
     * @example
     * 1000000
     */
    usageLimit?: number;
    /**
     * @remarks
     * The number of tokens consumed in the current cycle. This parameter is read-only and returned by the backend.
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
export declare class GetExternalAgentResponseBodyDataModel extends $dara.Model {
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
     * The name of the upstream model.
     *
     * @example
     * qwen-max
     */
    modelName?: string;
    /**
     * @remarks
     * The model token quota configuration and usage status in the current cycle. This parameter is empty if no quota is configured.
     */
    quota?: GetExternalAgentResponseBodyDataModelQuota;
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
export declare class GetExternalAgentResponseBodyDataSkillsVersionSelector extends $dara.Model {
    /**
     * @remarks
     * The version selector type. A value of LABEL indicates selection by tag, and a value of VERSION indicates selection by specific version.
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The selector value. When the type is LABEL, this is the label name (such as latest). When the type is VERSION, this is the specific version number.
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
export declare class GetExternalAgentResponseBodyDataSkills extends $dara.Model {
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
     * Indicates whether the item is from a fixed template. This field is read-only. Items from a template cannot be removed.
     *
     * @example
     * false
     */
    fromTemplate?: boolean;
    /**
     * @remarks
     * The name of the skill.
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
     * The skill source type. A value of REFERENCE indicates that the skill references AI Registry. A value of STATIC indicates that the skill is statically provided with the package.
     *
     * @example
     * REFERENCE
     */
    sourceType?: string;
    /**
     * @remarks
     * The current target version for compatibility with legacy clients. New clients use resolvedVersion and determine the effective runtime version based on appliedVersion.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    /**
     * @remarks
     * The skill reference version selector. It supports LABEL for tags and VERSION for specific versions. If omitted, LABEL/latest is used. Selectors are not provided for STATIC sources.
     */
    versionSelector?: GetExternalAgentResponseBodyDataSkillsVersionSelector;
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
export declare class GetExternalAgentResponseBodyDataTemplateAiRegistry extends $dara.Model {
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
export declare class GetExternalAgentResponseBodyDataTemplate extends $dara.Model {
    /**
     * @remarks
     * The AI Registry template configuration.
     */
    aiRegistry?: GetExternalAgentResponseBodyDataTemplateAiRegistry;
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
export declare class GetExternalAgentResponseBodyDataTools extends $dara.Model {
    /**
     * @remarks
     * The name of the tool.
     *
     * This parameter is required.
     *
     * @example
     * code-reviewer
     */
    name?: string;
    /**
     * @remarks
     * The tool type. Valid values: MCP.
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
export declare class GetExternalAgentResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The managed agent ID.
     *
     * @example
     * agent-1
     */
    agentId?: string;
    /**
     * @remarks
     * The explicitly configured skills.
     */
    configuredSkills?: GetExternalAgentResponseBodyDataConfiguredSkills[];
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
     * The creation time in RFC 3339 format.
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
     * The description of the managed agent.
     *
     * @example
     * Code review agent running in the user environment
     */
    description?: string;
    /**
     * @remarks
     * The runtime status information reported by the managed agent.
     */
    externalAgentStatus?: GetExternalAgentResponseBodyDataExternalAgentStatus;
    /**
     * @remarks
     * The agent instruction used to guide the behavior of the agent.
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
     * The processing status of the latest specification version. Valid values: pending, processing, waiting_retry, succeeded, failed, and superseded.
     *
     * @example
     * pending
     */
    latestVersionStatus?: string;
    /**
     * @remarks
     * The model configuration. This parameter is available only when modelSource is set to PLATFORM.
     */
    model?: GetExternalAgentResponseBodyDataModel;
    /**
     * @remarks
     * The source of the model configuration. A value of PLATFORM indicates that the platform parses and delivers the model configuration. A value of RUNTIME indicates that the external runtime manages the model, and the model parameter cannot be passed at the same time. Valid values: PLATFORM and RUNTIME.
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
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The runtime type reported by the managed agent.
     *
     * @example
     * qwenpaw
     */
    runtime?: string;
    /**
     * @remarks
     * The list of skill configurations.
     */
    skills?: GetExternalAgentResponseBodyDataSkills[];
    /**
     * @remarks
     * The status of the managed agent. Valid values: Creating, Running, Failed, Updating, Deleting, and Deleted.
     *
     * @example
     * Running
     */
    status?: string;
    /**
     * @remarks
     * The agent template configuration.
     */
    template?: GetExternalAgentResponseBodyDataTemplate;
    /**
     * @remarks
     * The list of tool configurations.
     */
    tools?: GetExternalAgentResponseBodyDataTools[];
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
export declare class GetExternalAgentResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code. A value of SUCCESS indicates success.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The details of the managed agent.
     */
    data?: GetExternalAgentResponseBodyData;
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
     * The message about the request processing result.
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
