import * as $dara from '@darabonba/typescript';
export declare class UpdateManagedAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
    /**
     * @remarks
     * The absolute mount path within the container, such as /data/train. Mount targets must not be duplicated or form parent-child overrides, and must avoid platform reserved directories.
     *
     * @example
     * /mnt/agenticfs/data
     */
    mountPath?: string;
    /**
     * @remarks
     * An existing non-empty relative directory under the AccessPoint. Required and validated by the backend for each mount item. Root directories, absolute paths, or parent directory segments are not allowed.
     *
     * @example
     * workspace/data
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether to mount as read-only. The default value is false if omitted. This is not a RAM role read-only policy.
     *
     * @example
     * false
     */
    readOnly?: boolean;
    /**
     * @remarks
     * The AccessPoint domain name. Required and validated by the backend for each mount item. It does not contain a protocol, port, or path, and uses the DomainName from the NAS ListAccessPoints response.
     *
     * @example
     * ap-0123456789abcdef0.0123456789-vlm36.cn-hangzhou.nas.aliyuncs.com
     */
    server?: string;
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
export declare class UpdateManagedAgentResponseBodyDataConfiguredSkillsVersionSelector extends $dara.Model {
    /**
     * @remarks
     * The version selector type.
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The selector value. When the type is LABEL, this is the tag name, such as latest. When the type is VERSION, this is the specific version number.
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
export declare class UpdateManagedAgentResponseBodyDataConfiguredSkills extends $dara.Model {
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
     * The skill source type.
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
     * The skill reference version selector. Supports LABEL for tags and VERSION for specific versions. If omitted, LABEL/latest is used. Selectors are not provided for STATIC sources.
     */
    versionSelector?: UpdateManagedAgentResponseBodyDataConfiguredSkillsVersionSelector;
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
export declare class UpdateManagedAgentResponseBodyDataContextConfigurationBindings extends $dara.Model {
    /**
     * @remarks
     * The ID of the context resource in the current workspace.
     *
     * @example
     * kb-example
     */
    resourceId?: string;
    /**
     * @remarks
     * Read-only string. Currently known types are KNOWLEDGE_BASE (knowledge base) and DATA_CONNECTOR (data connector). The response may include new types. The client should retain unknown values and must not fail to parse the entire response due to unknown types. New request types are subject to the actual support scope of the server.
     *
     * @example
     * KNOWLEDGE_BASE
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
export declare class UpdateManagedAgentResponseBodyDataContextConfiguration extends $dara.Model {
    /**
     * @remarks
     * Read-only resource references. This field may be omitted when no selection is made. A disabled configuration can still retain a non-empty selection. You cannot determine whether the configuration is enabled solely based on whether the array is empty.
     */
    bindings?: UpdateManagedAgentResponseBodyDataContextConfigurationBindings[];
    /**
     * @remarks
     * Read-only. Indicates the enabled status of the configuration when the configuration object is returned. A value of false indicates that the configuration is disabled. The absence of the entire configuration object indicates that the response does not provide the configuration, which cannot be treated as false.
     *
     * @example
     * true
     */
    enabled?: boolean;
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
export declare class UpdateManagedAgentResponseBodyDataEffectiveContextConfigurationBindings extends $dara.Model {
    /**
     * @remarks
     * The ID of the context resource in the current workspace.
     *
     * @example
     * kb-example
     */
    resourceId?: string;
    /**
     * @remarks
     * Read-only string. Currently known types are KNOWLEDGE_BASE (knowledge base) and DATA_CONNECTOR (data connector). The response may include new types. The client should retain unknown values and must not fail to parse the entire response due to unknown types. New request types are subject to the actual support scope of the server.
     *
     * @example
     * KNOWLEDGE_BASE
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
export declare class UpdateManagedAgentResponseBodyDataEffectiveContextConfiguration extends $dara.Model {
    /**
     * @remarks
     * Read-only resource references. This field may be omitted when no selection is made. A disabled configuration can still retain a non-empty selection. You cannot determine whether the configuration is enabled solely based on whether the array is empty.
     */
    bindings?: UpdateManagedAgentResponseBodyDataEffectiveContextConfigurationBindings[];
    /**
     * @remarks
     * Read-only. Indicates the enabled status of the configuration when the configuration object is returned. A value of false indicates that the configuration is disabled. The absence of the entire configuration object indicates that the response does not provide the configuration, which cannot be treated as false.
     *
     * @example
     * true
     */
    enabled?: boolean;
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
export declare class UpdateManagedAgentResponseBodyDataEnvironmentCredentialReferences extends $dara.Model {
    /**
     * @remarks
     * The credential ID.
     *
     * This parameter is required.
     *
     * @example
     * cred-1
     */
    credentialId?: string;
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
export declare class UpdateManagedAgentResponseBodyDataEnvironmentVariables extends $dara.Model {
    /**
     * @remarks
     * The environment variable name.
     *
     * This parameter is required.
     *
     * @example
     * API_KEY
     */
    name?: string;
    /**
     * @remarks
     * The environment variable value.
     *
     * This parameter is required.
     *
     * @example
     * sk-xxxx
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
export declare class UpdateManagedAgentResponseBodyDataEnvironment extends $dara.Model {
    /**
     * @remarks
     * The list of credential references.
     */
    credentialReferences?: UpdateManagedAgentResponseBodyDataEnvironmentCredentialReferences[];
    /**
     * @remarks
     * The list of environment variables.
     */
    variables?: UpdateManagedAgentResponseBodyDataEnvironmentVariables[];
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
export declare class UpdateManagedAgentResponseBodyDataHarnessConfiguration extends $dara.Model {
    /**
     * @remarks
     * The ID of the connector account key record bound to qodercli, not the original service account key.
     *
     * @example
     * key-xxxx
     */
    connectorServiceAccountKey?: string;
    /**
     * @remarks
     * The name of the connector account bound to qodercli.
     *
     * @example
     * my-connector-key
     */
    connectorServiceAccountName?: string;
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
export declare class UpdateManagedAgentResponseBodyDataHarness extends $dara.Model {
    /**
     * @remarks
     * The runtime framework configuration.
     */
    configuration?: UpdateManagedAgentResponseBodyDataHarnessConfiguration;
    /**
     * @remarks
     * Returned only in queries. The server calculates this based on the full instance distribution, which is not affected by the pagination and filtering of the instance list. It is empty when the image tag is missing, pagination is incomplete, or it cannot be confirmed, which is not equivalent to 0.
     *
     * @example
     * 2
     */
    outdatedInstanceCount?: number;
    /**
     * @remarks
     * The type of the runtime framework.
     *
     * @example
     * qodercli
     */
    type?: string;
    /**
     * @remarks
     * Returned only in queries. Currently returns the tag of the pool target image. It is empty when it cannot be parsed, and cannot be replaced by the agent configuration version.
     *
     * @example
     * 202611031754
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
export declare class UpdateManagedAgentResponseBodyDataModelQuota extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the quota is enabled. This field is not returned when no quota is configured.
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
     * Indicates whether the quota is exceeded in the current cycle. This field is read-only and returned by the backend.
     *
     * @example
     * false
     */
    overLimit?: boolean;
    /**
     * @remarks
     * The quota statistical period. A value of day indicates daily, and a value of month indicates monthly.
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
     * The maximum number of tokens allowed to be consumed in a single cycle.
     *
     * @example
     * 1000000
     */
    usageLimit?: number;
    /**
     * @remarks
     * The number of tokens consumed in the current cycle. This field is read-only and returned by the backend.
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
export declare class UpdateManagedAgentResponseBodyDataModel extends $dara.Model {
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
     * The model token quota configuration and the quota usage status for the current cycle. This field is empty when no quota is configured.
     */
    quota?: UpdateManagedAgentResponseBodyDataModelQuota;
    /**
     * @remarks
     * The thinking level. When not configured, the value is default. An empty string, null, or omitted value is processed according to the default behavior of the model and Harness. Valid values: off, low, medium, high, xhigh, and max. If this parameter is not passed or is null during creation, default is used. When updating and submitting the model configuration, if the thinking level is not passed or is null, it is restored to default. Except for off which is converted to none, the value is passed to the runtime framework as-is without verifying model support or automatically downgrading. If the model does not support the level, adjust the level.
     *
     * @example
     * high
     *
     * **if can be null:**
     * true
     */
    thinkingLevel?: string;
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
export declare class UpdateManagedAgentResponseBodyDataNetworkAccessInternet extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to allow Internet access.
     *
     * @example
     * false
     */
    enabled?: boolean;
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
export declare class UpdateManagedAgentResponseBodyDataNetworkAccessVpc extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to allow VPC access.
     *
     * @example
     * true
     */
    enabled?: boolean;
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
export declare class UpdateManagedAgentResponseBodyDataNetwork extends $dara.Model {
    /**
     * @remarks
     * The public network access configuration.
     */
    accessInternet?: UpdateManagedAgentResponseBodyDataNetworkAccessInternet;
    /**
     * @remarks
     * The VPC access configuration.
     */
    accessVpc?: UpdateManagedAgentResponseBodyDataNetworkAccessVpc;
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
export declare class UpdateManagedAgentResponseBodyDataOssMounts extends $dara.Model {
    /**
     * @remarks
     * The name of the OSS bucket. This field is required and validated by the backend for each mount item.
     *
     * @example
     * bucket-001
     */
    bucketName?: string;
    /**
     * @remarks
     * The absolute mount path within the container, such as /data/train. Mount targets must not be duplicated or form parent-child overrides, and must avoid platform reserved directories.
     *
     * @example
     * /mnt/oss/datasets
     */
    mountPath?: string;
    /**
     * @remarks
     * The non-empty relative directory prefix in the currently configured bucket.
     *
     * @example
     * datasets
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. Default value: false.
     */
    readOnly?: boolean;
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
export declare class UpdateManagedAgentResponseBodyDataPromptVariables extends $dara.Model {
    /**
     * @remarks
     * The default value.
     *
     * @example
     * default
     */
    defaultValue?: string;
    /**
     * @remarks
     * The variable description.
     *
     * @example
     * desc
     */
    description?: string;
    /**
     * @remarks
     * The variable name.
     *
     * @example
     * brand
     */
    name?: string;
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
export declare class UpdateManagedAgentResponseBodyDataRuntimeCompute extends $dara.Model {
    /**
     * @remarks
     * The compute specification.
     *
     * This parameter is required.
     *
     * @example
     * STANDARD
     */
    computeClass?: string;
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
export declare class UpdateManagedAgentResponseBodyDataRuntimeHpa extends $dara.Model {
    /**
     * @remarks
     * Indicates whether elastic auto-scaling is enabled in the current configuration.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The maximum number of concurrent sessions per instance in the current configuration.
     *
     * @example
     * 5
     */
    maxConcurrentSessionsPerSandbox?: number;
    /**
     * @remarks
     * The maximum number of instances in the current configuration.
     *
     * @example
     * 3
     */
    maxSandboxCount?: number;
    /**
     * @remarks
     * The minimum number of instances in the current configuration.
     *
     * @example
     * 1
     */
    minSandboxCount?: number;
    /**
     * @remarks
     * The maximum session idle time in the current configuration, in seconds.
     *
     * @example
     * 3600
     */
    sessionTtlSeconds?: number;
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
export declare class UpdateManagedAgentResponseBodyDataRuntimeSessionPolicy extends $dara.Model {
    /**
     * @remarks
     * The HTTP header name used for session affinity. This field takes effect when sessionPolicy.type is ISOLATED_HEADER_FIELD.
     *
     * @example
     * X-Session-Id
     */
    headerName?: string;
    /**
     * @remarks
     * The session policy type.
     *
     * This parameter is required.
     *
     * @example
     * DISABLED
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
export declare class UpdateManagedAgentResponseBodyDataRuntime extends $dara.Model {
    /**
     * @remarks
     * The compute configuration.
     *
     * This parameter is required.
     */
    compute?: UpdateManagedAgentResponseBodyDataRuntimeCompute;
    /**
     * @remarks
     * The sandbox auto-scaling and session configuration.
     */
    hpa?: UpdateManagedAgentResponseBodyDataRuntimeHpa;
    /**
     * @remarks
     * The session policy configuration.
     *
     * This parameter is required.
     */
    sessionPolicy?: UpdateManagedAgentResponseBodyDataRuntimeSessionPolicy;
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
export declare class UpdateManagedAgentResponseBodyDataSkillsVersionSelector extends $dara.Model {
    /**
     * @remarks
     * The version selector type.
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The selector value. When the type is LABEL, this is the tag name, such as latest. When the type is VERSION, this is the specific version number.
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
export declare class UpdateManagedAgentResponseBodyDataSkills extends $dara.Model {
    /**
     * @remarks
     * The effective version at runtime. This field is read-only.
     *
     * @example
     * 1.0.0
     */
    appliedVersion?: string;
    /**
     * @remarks
     * Indicates whether the skill is from a fixed template. This field is read-only. Template items cannot be removed.
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
     * The skill source type.
     *
     * @example
     * REFERENCE
     */
    sourceType?: string;
    /**
     * @remarks
     * The current target version for compatibility with legacy clients. New clients use resolvedVersion and rely on appliedVersion to determine the effective runtime version.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    /**
     * @remarks
     * The skill reference version selector. Supports LABEL for tags and VERSION for specific versions. If omitted, LABEL/latest is used. Selectors are not provided for STATIC sources.
     */
    versionSelector?: UpdateManagedAgentResponseBodyDataSkillsVersionSelector;
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
export declare class UpdateManagedAgentResponseBodyDataSubAgentsSkills extends $dara.Model {
    /**
     * @remarks
     * The skill name.
     *
     * @example
     * web-search
     */
    name?: string;
    /**
     * @remarks
     * The skill version.
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
export declare class UpdateManagedAgentResponseBodyDataSubAgents extends $dara.Model {
    /**
     * @remarks
     * The sub-agent instruction.
     *
     * This parameter is required.
     *
     * @example
     * Review the code
     */
    instruction?: string;
    /**
     * @remarks
     * The sub-agent name.
     *
     * This parameter is required.
     *
     * @example
     * reviewer-agent
     */
    name?: string;
    /**
     * @remarks
     * The list of sub-agent skills.
     */
    skills?: UpdateManagedAgentResponseBodyDataSubAgentsSkills[];
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
export declare class UpdateManagedAgentResponseBodyDataTemplateAiRegistry extends $dara.Model {
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
export declare class UpdateManagedAgentResponseBodyDataTemplate extends $dara.Model {
    /**
     * @remarks
     * The AI Registry template configuration.
     */
    aiRegistry?: UpdateManagedAgentResponseBodyDataTemplateAiRegistry;
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
export declare class UpdateManagedAgentResponseBodyDataTools extends $dara.Model {
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
     * The tool type.
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
export declare class UpdateManagedAgentResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The inbound access mode.
     *
     * @example
     * API_KEY
     */
    accessMode?: string;
    /**
     * @remarks
     * The user access scope.
     *
     * @example
     * ALL
     */
    accessScope?: string;
    /**
     * @remarks
     * The ID of the managed Harness agent.
     *
     * @example
     * agent-1
     */
    agentId?: string;
    /**
     * @remarks
     * The NAS storage mount configuration. Currently, the AgenticFS type is supported, which is used to mount file directories in access points to agent runtime instances. A maximum of 10 NAS mounts are allowed in total with ossMounts.
     */
    agenticFsMounts?: UpdateManagedAgentResponseBodyDataAgenticFsMounts[];
    /**
     * @remarks
     * The explicitly configured skills.
     */
    configuredSkills?: UpdateManagedAgentResponseBodyDataConfiguredSkills[];
    /**
     * @remarks
     * The target configuration accepted by the managed agent, which does not necessarily mean it has taken effect at runtime. This field is used in the detail responses of CreateManagedAgent, UpdateManagedAgent, and GetManagedAgent. In the configuration of a fixed version, it represents the configuration snapshot saved for that version. A returned object with enabled:false indicates that the configuration is disabled. The absence of the entire object indicates that the response does not provide the configuration.
     */
    contextConfiguration?: UpdateManagedAgentResponseBodyDataContextConfiguration;
    /**
     * @remarks
     * The creation mode.
     *
     * @example
     * Managed
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
     * Managed
     */
    deployType?: string;
    /**
     * @remarks
     * The description of the managed Harness agent.
     *
     * @example
     * Agent for code review
     */
    description?: string;
    /**
     * @remarks
     * Read-only. Provided only by GetManagedAgent when an effective version exists, corresponding to the configuration snapshot of effectiveSpecVersion. It remains the original effective configuration when a new version is being prepared or fails to be published. It is not returned before the first time it takes effect, or in CreateManagedAgent, UpdateManagedAgent, and the configuration of a fixed version. Omission does not indicate that it is disabled, and the client must not automatically fill it with enabled:false.
     */
    effectiveContextConfiguration?: UpdateManagedAgentResponseBodyDataEffectiveContextConfiguration;
    /**
     * @remarks
     * The environment configuration information.
     */
    environment?: UpdateManagedAgentResponseBodyDataEnvironment;
    /**
     * @remarks
     * The agent runtime framework.
     */
    harness?: UpdateManagedAgentResponseBodyDataHarness;
    /**
     * @remarks
     * The agent instructions used to guide the behavior of the agent.
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
     * The status of the latest version.
     *
     * @example
     * succeeded
     */
    latestVersionStatus?: string;
    /**
     * @remarks
     * The model configuration information.
     */
    model?: UpdateManagedAgentResponseBodyDataModel;
    /**
     * @remarks
     * The name of the managed Harness agent.
     *
     * @example
     * my-agent
     */
    name?: string;
    /**
     * @remarks
     * The network configuration information.
     */
    network?: UpdateManagedAgentResponseBodyDataNetwork;
    /**
     * @remarks
     * The list of OSS mounts. A maximum of 10 items are supported.
     */
    ossMounts?: UpdateManagedAgentResponseBodyDataOssMounts[];
    /**
     * @remarks
     * The prompt variable declarations.
     */
    promptVariables?: UpdateManagedAgentResponseBodyDataPromptVariables[];
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
     * The runtime configuration information.
     */
    runtime?: UpdateManagedAgentResponseBodyDataRuntime;
    /**
     * @remarks
     * The number of managed Harness Agent instances by sandbox phase. Current keys: PENDING (creating or initializing), RUNNING (running), HIBERNATING (hibernating), HIBERNATED (hibernated), RESUMING (resuming), TERMINATING (terminating), and FAILED (failed at runtime). Only phases that actually occur are returned, and missing keys are treated as 0. This field is a dynamic map and new keys may be added in the future. The frontend can use FAILED > 0 to determine whether abnormal instances exist.
     */
    sandboxPhaseCounts?: {
        [key: string]: number;
    };
    /**
     * @remarks
     * The list of skill configurations.
     */
    skills?: UpdateManagedAgentResponseBodyDataSkills[];
    /**
     * @remarks
     * The status of the managed Harness agent.
     *
     * @example
     * Running
     */
    status?: string;
    /**
     * @remarks
     * The list of sub-agent configurations.
     */
    subAgents?: UpdateManagedAgentResponseBodyDataSubAgents[];
    /**
     * @remarks
     * The template configuration information.
     */
    template?: UpdateManagedAgentResponseBodyDataTemplate;
    /**
     * @remarks
     * The list of tool configurations.
     */
    tools?: UpdateManagedAgentResponseBodyDataTools[];
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
export declare class UpdateManagedAgentResponseBody extends $dara.Model {
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
     * The details of the managed Harness agent.
     */
    data?: UpdateManagedAgentResponseBodyData;
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
     *
     * @example
     * true
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
