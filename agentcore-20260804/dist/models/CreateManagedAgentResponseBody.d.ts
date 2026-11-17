import * as $dara from '@darabonba/typescript';
export declare class CreateManagedAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
    /**
     * @remarks
     * The absolute mount path in the container, such as `/data/train`. Mount targets cannot be duplicated or form parent-child overwrites, and must avoid platform-reserved directories.
     *
     * @example
     * /mnt/agenticfs/data
     */
    mountPath?: string;
    /**
     * @remarks
     * The existing non-empty relative directory under the access point. This is a required field validated by the backend for each mount item. Root directories, absolute paths, or parent directory segments are not allowed.
     *
     * @example
     * workspace/data
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. If omitted, the default value is false. This is not the read-only policy of a RAM role.
     *
     * @example
     * false
     */
    readOnly?: boolean;
    /**
     * @remarks
     * The access point domain name. This is a required field validated by the backend for each mount item. It does not contain a protocol, port, or path. Use the `DomainName` from the NAS `ListAccessPoints` response.
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
export declare class CreateManagedAgentResponseBodyDataConfiguredSkillsVersionSelector extends $dara.Model {
    /**
     * @remarks
     * The type of the version selector.
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The value of the selector. For LABEL, specify the tag name, such as latest. For VERSION, specify the exact version number.
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
export declare class CreateManagedAgentResponseBodyDataConfiguredSkills extends $dara.Model {
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
     * The source type of the skill.
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
     * The version selector for the skill reference. Supports LABEL for tags and VERSION for specific versions. Defaults to LABEL/latest when omitted. Not applicable for STATIC sources.
     */
    versionSelector?: CreateManagedAgentResponseBodyDataConfiguredSkillsVersionSelector;
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
export declare class CreateManagedAgentResponseBodyDataContextConfigurationBindings extends $dara.Model {
    /**
     * @remarks
     * The context resource ID in the current workspace.
     *
     * @example
     * kb-example
     */
    resourceId?: string;
    /**
     * @remarks
     * Read-only string. Currently known types are KNOWLEDGE_BASE (knowledge base) and DATA_CONNECTOR (data connector). The response may be extended with new types. The client should retain unknown values and should not fail to parse the entire response due to unknown types. New request types are subject to the actual support scope of the server.
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
export declare class CreateManagedAgentResponseBodyDataContextConfiguration extends $dara.Model {
    /**
     * @remarks
     * Read-only resource references. This field may be omitted when no selection is made. A disabled configuration can still retain non-empty selections. You cannot determine whether the configuration is enabled solely based on whether the array is empty.
     */
    bindings?: CreateManagedAgentResponseBodyDataContextConfigurationBindings[];
    /**
     * @remarks
     * Read-only. When the configuration object is returned, this field indicates the enabling status of the configuration. A value of false indicates that the configuration is disabled. The absence of the entire configuration object indicates that the response does not provide the configuration, which cannot be treated as false.
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
export declare class CreateManagedAgentResponseBodyDataEffectiveContextConfigurationBindings extends $dara.Model {
    /**
     * @remarks
     * The context resource ID in the current workspace.
     *
     * @example
     * kb-example
     */
    resourceId?: string;
    /**
     * @remarks
     * Read-only string. Currently known types are KNOWLEDGE_BASE (knowledge base) and DATA_CONNECTOR (data connector). The response may be extended with new types. The client should retain unknown values and should not fail to parse the entire response due to unknown types. New request types are subject to the actual support scope of the server.
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
export declare class CreateManagedAgentResponseBodyDataEffectiveContextConfiguration extends $dara.Model {
    /**
     * @remarks
     * Read-only resource references. This field may be omitted when no selection is made. A disabled configuration can still retain non-empty selections. You cannot determine whether the configuration is enabled solely based on whether the array is empty.
     */
    bindings?: CreateManagedAgentResponseBodyDataEffectiveContextConfigurationBindings[];
    /**
     * @remarks
     * Read-only. When the configuration object is returned, this field indicates the enabling status of the configuration. A value of false indicates that the configuration is disabled. The absence of the entire configuration object indicates that the response does not provide the configuration, which cannot be treated as false.
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
export declare class CreateManagedAgentResponseBodyDataEnvironmentCredentialReferences extends $dara.Model {
    /**
     * @remarks
     * The ID of the credential.
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
export declare class CreateManagedAgentResponseBodyDataEnvironmentVariables extends $dara.Model {
    /**
     * @remarks
     * The name of the environment variable.
     *
     * This parameter is required.
     *
     * @example
     * API_KEY
     */
    name?: string;
    /**
     * @remarks
     * The value of the environment variable.
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
export declare class CreateManagedAgentResponseBodyDataEnvironment extends $dara.Model {
    /**
     * @remarks
     * The list of credential references.
     */
    credentialReferences?: CreateManagedAgentResponseBodyDataEnvironmentCredentialReferences[];
    /**
     * @remarks
     * The list of environment variables.
     */
    variables?: CreateManagedAgentResponseBodyDataEnvironmentVariables[];
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
export declare class CreateManagedAgentResponseBodyDataHarnessConfiguration extends $dara.Model {
    /**
     * @remarks
     * The connector account key record ID bound to qodercli, which is not the original service account key.
     *
     * @example
     * key-xxxx
     */
    connectorServiceAccountKey?: string;
    /**
     * @remarks
     * The connector account name bound to qodercli.
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
export declare class CreateManagedAgentResponseBodyDataHarness extends $dara.Model {
    /**
     * @remarks
     * The runtime framework configuration.
     */
    configuration?: CreateManagedAgentResponseBodyDataHarnessConfiguration;
    /**
     * @remarks
     * Returned only in queries. The server calculates this based on the complete instance distribution, which is not affected by the pagination and filtering of the instance list. It is empty when the image tag is missing, pagination is incomplete, or it cannot be confirmed, which is not equivalent to 0.
     *
     * @example
     * 2
     */
    outdatedInstanceCount?: number;
    /**
     * @remarks
     * The runtime framework type.
     *
     * @example
     * qodercli
     */
    type?: string;
    /**
     * @remarks
     * Returned only in queries. Currently returns the pool target image tag. It is empty when it cannot be parsed, and cannot be replaced by the agent configuration version.
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
export declare class CreateManagedAgentResponseBodyDataModelQuota extends $dara.Model {
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
     * Indicates whether the quota is exceeded in the current period. This field is read-only and returned by the backend.
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
     * The maximum number of tokens allowed to be consumed in a single period.
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
export declare class CreateManagedAgentResponseBodyDataModel extends $dara.Model {
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
     * The model token quota configuration and usage status for the current period. This field is empty if no quota is configured.
     */
    quota?: CreateManagedAgentResponseBodyDataModelQuota;
    /**
     * @remarks
     * The thinking level. If not configured, the value defaults to default. Empty strings, null values, or omitted fields are handled according to the default behavior of the model and Harness. Valid values: off, low, medium, high, xhigh, and max. If this parameter is not passed or is null during creation, default is used. When updating and submitting the model configuration, if the thinking level is not passed or is null, it reverts to default. Except for off, which is converted to none, the value is passed to the runtime framework as-is without validating model support or automatically downgrading. If the model does not support the specified level, adjust the level accordingly.
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
export declare class CreateManagedAgentResponseBodyDataNetworkAccessInternet extends $dara.Model {
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
export declare class CreateManagedAgentResponseBodyDataNetworkAccessVpc extends $dara.Model {
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
export declare class CreateManagedAgentResponseBodyDataNetwork extends $dara.Model {
    /**
     * @remarks
     * The public network access configuration.
     */
    accessInternet?: CreateManagedAgentResponseBodyDataNetworkAccessInternet;
    /**
     * @remarks
     * The VPC access configuration.
     */
    accessVpc?: CreateManagedAgentResponseBodyDataNetworkAccessVpc;
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
export declare class CreateManagedAgentResponseBodyDataOssMounts extends $dara.Model {
    /**
     * @remarks
     * The name of the OSS bucket. This field is required for each mount item and is validated by the backend.
     *
     * @example
     * bucket-001
     */
    bucketName?: string;
    /**
     * @remarks
     * The absolute mount path in the container, such as `/data/train`. Mount targets cannot be duplicated or form parent-child overwrites, and must avoid platform-reserved directories.
     *
     * @example
     * /mnt/oss/datasets
     */
    mountPath?: string;
    /**
     * @remarks
     * The non-empty relative directory prefix in the configured bucket.
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
export declare class CreateManagedAgentResponseBodyDataPromptVariables extends $dara.Model {
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
export declare class CreateManagedAgentResponseBodyDataRuntimeCompute extends $dara.Model {
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
export declare class CreateManagedAgentResponseBodyDataRuntimeHpa extends $dara.Model {
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
export declare class CreateManagedAgentResponseBodyDataRuntimeSessionPolicy extends $dara.Model {
    /**
     * @remarks
     * The HTTP header name used for session affinity. This field takes effect when sessionPolicy.type is set to ISOLATED_HEADER_FIELD.
     *
     * @example
     * X-Session-Id
     */
    headerName?: string;
    /**
     * @remarks
     * The type of the session policy.
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
export declare class CreateManagedAgentResponseBodyDataRuntime extends $dara.Model {
    /**
     * @remarks
     * The compute configuration.
     *
     * This parameter is required.
     */
    compute?: CreateManagedAgentResponseBodyDataRuntimeCompute;
    /**
     * @remarks
     * The sandbox auto-scaling and session configuration.
     */
    hpa?: CreateManagedAgentResponseBodyDataRuntimeHpa;
    /**
     * @remarks
     * The session policy configuration.
     *
     * This parameter is required.
     */
    sessionPolicy?: CreateManagedAgentResponseBodyDataRuntimeSessionPolicy;
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
export declare class CreateManagedAgentResponseBodyDataSkillsVersionSelector extends $dara.Model {
    /**
     * @remarks
     * The type of the version selector.
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The value of the selector. For LABEL, specify the tag name, such as latest. For VERSION, specify the exact version number.
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
export declare class CreateManagedAgentResponseBodyDataSkills extends $dara.Model {
    /**
     * @remarks
     * The effective runtime version. This field is read-only.
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
     * The source type of the skill.
     *
     * @example
     * REFERENCE
     */
    sourceType?: string;
    /**
     * @remarks
     * The current target version for legacy client compatibility. New clients use resolvedVersion and determine the effective runtime version based on appliedVersion.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    /**
     * @remarks
     * The version selector for the skill reference. Supports LABEL for tags and VERSION for specific versions. Defaults to LABEL/latest when omitted. Not applicable for STATIC sources.
     */
    versionSelector?: CreateManagedAgentResponseBodyDataSkillsVersionSelector;
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
export declare class CreateManagedAgentResponseBodyDataSubAgentsSkills extends $dara.Model {
    /**
     * @remarks
     * The name of the skill.
     *
     * @example
     * web-search
     */
    name?: string;
    /**
     * @remarks
     * The version of the skill.
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
export declare class CreateManagedAgentResponseBodyDataSubAgents extends $dara.Model {
    /**
     * @remarks
     * The instruction for the sub-agent.
     *
     * This parameter is required.
     *
     * @example
     * Review the code
     */
    instruction?: string;
    /**
     * @remarks
     * The name of the sub-agent.
     *
     * This parameter is required.
     *
     * @example
     * reviewer-agent
     */
    name?: string;
    /**
     * @remarks
     * The list of skills for the sub-agent.
     */
    skills?: CreateManagedAgentResponseBodyDataSubAgentsSkills[];
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
export declare class CreateManagedAgentResponseBodyDataTemplateAiRegistry extends $dara.Model {
    /**
     * @remarks
     * The name of the template in the AI registry.
     *
     * This parameter is required.
     *
     * @example
     * code-review-template
     */
    name?: string;
    /**
     * @remarks
     * The version of the template in the AI registry.
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
export declare class CreateManagedAgentResponseBodyDataTemplate extends $dara.Model {
    /**
     * @remarks
     * The AI registry template configuration.
     */
    aiRegistry?: CreateManagedAgentResponseBodyDataTemplateAiRegistry;
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
export declare class CreateManagedAgentResponseBodyDataTools extends $dara.Model {
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
     * The type of the tool.
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
export declare class CreateManagedAgentResponseBodyData extends $dara.Model {
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
     * The managed Harness agent ID.
     *
     * @example
     * agent-1
     */
    agentId?: string;
    /**
     * @remarks
     * The NAS storage mount configuration. Currently, the AgenticFS type is supported, which is used to mount file directories in the access point to the agent runtime instance. For NAS mounts, a maximum of 10 items are allowed in total including ossMounts.
     */
    agenticFsMounts?: CreateManagedAgentResponseBodyDataAgenticFsMounts[];
    /**
     * @remarks
     * The explicitly configured skills.
     */
    configuredSkills?: CreateManagedAgentResponseBodyDataConfiguredSkills[];
    /**
     * @remarks
     * The target configuration accepted by the managed agent, which does not mean it has taken effect at runtime. This field is used in the detail responses of CreateManagedAgent, UpdateManagedAgent, and GetManagedAgent. In the configuration of a fixed version, it represents the configuration snapshot saved for that version. A returned object with enabled:false indicates that the configuration is disabled. The absence of the entire object indicates that the response does not provide the configuration.
     */
    contextConfiguration?: CreateManagedAgentResponseBodyDataContextConfiguration;
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
     * Read-only. This field is provided only by GetManagedAgent when an effective version exists, and corresponds to the configuration snapshot of effectiveSpecVersion. When a new version is being prepared or fails to be published, it remains the original effective configuration. It is not returned before the first time it takes effect, or in CreateManagedAgent, UpdateManagedAgent, and the configuration of a fixed version. Omission does not mean it is disabled, and the client cannot automatically fill it with enabled:false.
     */
    effectiveContextConfiguration?: CreateManagedAgentResponseBodyDataEffectiveContextConfiguration;
    /**
     * @remarks
     * The environment configuration information.
     */
    environment?: CreateManagedAgentResponseBodyDataEnvironment;
    /**
     * @remarks
     * The agent runtime framework.
     */
    harness?: CreateManagedAgentResponseBodyDataHarness;
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
    model?: CreateManagedAgentResponseBodyDataModel;
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
    network?: CreateManagedAgentResponseBodyDataNetwork;
    /**
     * @remarks
     * The list of OSS mounts. A maximum of 10 items are supported.
     */
    ossMounts?: CreateManagedAgentResponseBodyDataOssMounts[];
    /**
     * @remarks
     * The prompt variable declaration.
     */
    promptVariables?: CreateManagedAgentResponseBodyDataPromptVariables[];
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
    runtime?: CreateManagedAgentResponseBodyDataRuntime;
    /**
     * @remarks
     * The instance counts of managed Harness agents by sandbox phase. Current keys: PENDING (creating or initializing), RUNNING (running), HIBERNATING (hibernating), HIBERNATED (hibernated), RESUMING (resuming), TERMINATING (terminating), and FAILED (failed at runtime). Only phases that actually occur are returned, and missing keys are treated as 0. This field is a dynamic map and new keys may be added in the future. The frontend can use FAILED > 0 to determine whether abnormal instances exist.
     */
    sandboxPhaseCounts?: {
        [key: string]: number;
    };
    /**
     * @remarks
     * The list of skill configurations.
     */
    skills?: CreateManagedAgentResponseBodyDataSkills[];
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
    subAgents?: CreateManagedAgentResponseBodyDataSubAgents[];
    /**
     * @remarks
     * The template configuration information.
     */
    template?: CreateManagedAgentResponseBodyDataTemplate;
    /**
     * @remarks
     * The list of tool configurations.
     */
    tools?: CreateManagedAgentResponseBodyDataTools[];
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
export declare class CreateManagedAgentResponseBody extends $dara.Model {
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
     * The information about the managed Harness agent after creation.
     */
    data?: CreateManagedAgentResponseBodyData;
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
