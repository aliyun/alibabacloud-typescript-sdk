import * as $dara from '@darabonba/typescript';
export declare class GetManagedAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
    /**
     * @remarks
     * The absolute mount path in the container, such as /data/train. Mount targets must not be duplicated or form parent-child overrides, and must avoid platform-reserved directories.
     *
     * @example
     * /mnt/agenticfs/data
     */
    mountPath?: string;
    /**
     * @remarks
     * The existing non-empty relative directory under the access point. This field is required and verified by the backend for each mount item. Root directories, absolute paths, or parent directory segments are not allowed.
     *
     * @example
     * workspace/data
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. If omitted, the default value is false. This is not the read-only policy of the RAM role.
     *
     * @example
     * false
     */
    readOnly?: boolean;
    /**
     * @remarks
     * The domain name of the access point. This field is required and verified by the backend for each mount item. It does not include the protocol, port, or path. Use the DomainName from the NAS ListAccessPoints response.
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
export declare class GetManagedAgentResponseBodyDataConfiguredSkillsVersionSelector extends $dara.Model {
    /**
     * @remarks
     * The type of the version selector. LABEL selects by tag, and VERSION selects by specific version.
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The value of the selector. For LABEL, it is the tag name (such as latest). For VERSION, it is the specific version number.
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
export declare class GetManagedAgentResponseBodyDataConfiguredSkills extends $dara.Model {
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
     * The source type of the skill. REFERENCE references the AI Registry, and STATIC is statically provided with the deployment artifact.
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
     * The version selector for the skill reference. Supports LABEL for tags and VERSION for specific versions. If omitted, LABEL/latest is used. STATIC sources do not provide a selector.
     */
    versionSelector?: GetManagedAgentResponseBodyDataConfiguredSkillsVersionSelector;
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
export declare class GetManagedAgentResponseBodyDataContextConfigurationBindings extends $dara.Model {
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
     * Read-only string. The currently known types are KNOWLEDGE_BASE (knowledge base) and DATA_CONNECTOR (data connector). The response may be extended with new types. The client should retain unknown values and should not fail to parse the entire response due to unknown types. The new request types are subject to the actual support scope of the server.
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
export declare class GetManagedAgentResponseBodyDataContextConfiguration extends $dara.Model {
    /**
     * @remarks
     * Read-only resource references. This field may be omitted when no selection is made. A disabled configuration can still retain a non-empty selection. You cannot determine whether the configuration is enabled solely based on whether the array is empty.
     */
    bindings?: GetManagedAgentResponseBodyDataContextConfigurationBindings[];
    /**
     * @remarks
     * Read-only. When the configuration object is returned, this field indicates the enablement status of the configuration. A value of false indicates that the configuration is disabled. The absence of the entire configuration object indicates that the response does not provide the configuration, which cannot be treated as false.
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
export declare class GetManagedAgentResponseBodyDataEffectiveContextConfigurationBindings extends $dara.Model {
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
     * Read-only string. The currently known types are KNOWLEDGE_BASE (knowledge base) and DATA_CONNECTOR (data connector). The response may be extended with new types. The client should retain unknown values and should not fail to parse the entire response due to unknown types. The new request types are subject to the actual support scope of the server.
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
export declare class GetManagedAgentResponseBodyDataEffectiveContextConfiguration extends $dara.Model {
    /**
     * @remarks
     * Read-only resource references. This field may be omitted when no selection is made. A disabled configuration can still retain a non-empty selection. You cannot determine whether the configuration is enabled solely based on whether the array is empty.
     */
    bindings?: GetManagedAgentResponseBodyDataEffectiveContextConfigurationBindings[];
    /**
     * @remarks
     * Read-only. When the configuration object is returned, this field indicates the enablement status of the configuration. A value of false indicates that the configuration is disabled. The absence of the entire configuration object indicates that the response does not provide the configuration, which cannot be treated as false.
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
export declare class GetManagedAgentResponseBodyDataEnvironmentCredentialReferences extends $dara.Model {
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
export declare class GetManagedAgentResponseBodyDataEnvironmentVariables extends $dara.Model {
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
export declare class GetManagedAgentResponseBodyDataEnvironment extends $dara.Model {
    /**
     * @remarks
     * The list of credential references.
     */
    credentialReferences?: GetManagedAgentResponseBodyDataEnvironmentCredentialReferences[];
    /**
     * @remarks
     * The list of environment variables.
     */
    variables?: GetManagedAgentResponseBodyDataEnvironmentVariables[];
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
export declare class GetManagedAgentResponseBodyDataHarnessConfiguration extends $dara.Model {
    /**
     * @remarks
     * The ID of the connector account key record bound to qodercli. This is not the original service account key.
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
export declare class GetManagedAgentResponseBodyDataHarness extends $dara.Model {
    /**
     * @remarks
     * The configuration of the runtime framework.
     */
    configuration?: GetManagedAgentResponseBodyDataHarnessConfiguration;
    /**
     * @remarks
     * The total number of instances that are not aligned with the pool target image tag.
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
     * The Harness version corresponding to the pool target image.
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
export declare class GetManagedAgentResponseBodyDataModelQuota extends $dara.Model {
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
     * The quota statistical period. Valid values:
     * - day: Daily.
     * - month: Monthly.
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
export declare class GetManagedAgentResponseBodyDataModel extends $dara.Model {
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
    quota?: GetManagedAgentResponseBodyDataModelQuota;
    /**
     * @remarks
     * The thinking level. Valid values: off, low, medium, high, xhigh, and max. If not set, the default thinking level (default) is used. In the response, this field may be missing, null, or an empty string, all of which indicate default. The specific effect depends on the support of the selected Harness and model.
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
export declare class GetManagedAgentResponseBodyDataNetworkAccessInternet extends $dara.Model {
    /**
     * @remarks
     * Indicates whether Internet access is allowed.
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
export declare class GetManagedAgentResponseBodyDataNetworkAccessVpc extends $dara.Model {
    /**
     * @remarks
     * Specifies whether access to the VPC is allowed.
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
export declare class GetManagedAgentResponseBodyDataNetwork extends $dara.Model {
    /**
     * @remarks
     * The public network access configuration.
     */
    accessInternet?: GetManagedAgentResponseBodyDataNetworkAccessInternet;
    /**
     * @remarks
     * The VPC access configuration.
     */
    accessVpc?: GetManagedAgentResponseBodyDataNetworkAccessVpc;
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
export declare class GetManagedAgentResponseBodyDataOssMounts extends $dara.Model {
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
     * The absolute mount path in the container, such as /data/train. Mount targets must not be duplicated or form parent-child overrides, and must avoid platform-reserved directories.
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
     * Specifies whether to mount as read-only. Default value: false.
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
export declare class GetManagedAgentResponseBodyDataPromptVariables extends $dara.Model {
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
export declare class GetManagedAgentResponseBodyDataRuntimeCompute extends $dara.Model {
    /**
     * @remarks
     * The compute specifications.
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
export declare class GetManagedAgentResponseBodyDataRuntimeHpa extends $dara.Model {
    /**
     * @remarks
     * Indicates whether elastic auto scaling is enabled in the current configuration.
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
     * The maximum idle time for a session in the current configuration, in seconds.
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
export declare class GetManagedAgentResponseBodyDataRuntimeSessionPolicy extends $dara.Model {
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
export declare class GetManagedAgentResponseBodyDataRuntime extends $dara.Model {
    /**
     * @remarks
     * The compute configuration.
     *
     * This parameter is required.
     */
    compute?: GetManagedAgentResponseBodyDataRuntimeCompute;
    /**
     * @remarks
     * The sandbox auto scaling and session configuration.
     */
    hpa?: GetManagedAgentResponseBodyDataRuntimeHpa;
    /**
     * @remarks
     * The session policy configuration.
     *
     * This parameter is required.
     */
    sessionPolicy?: GetManagedAgentResponseBodyDataRuntimeSessionPolicy;
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
export declare class GetManagedAgentResponseBodyDataSkillsVersionSelector extends $dara.Model {
    /**
     * @remarks
     * The type of the version selector. LABEL selects by tag, and VERSION selects by specific version.
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The value of the selector. For LABEL, it is the tag name (such as latest). For VERSION, it is the specific version number.
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
export declare class GetManagedAgentResponseBodyDataSkills extends $dara.Model {
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
     * Specifies whether it is from a fixed template. This field is read-only, and template items cannot be removed.
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
     * The source type of the skill. REFERENCE references the AI Registry, and STATIC is statically provided with the deployment artifact.
     *
     * @example
     * REFERENCE
     */
    sourceType?: string;
    /**
     * @remarks
     * The current target version for compatibility with legacy clients. New clients use resolvedVersion and determine the runtime effective version based on appliedVersion.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    /**
     * @remarks
     * The version selector for the skill reference. Supports LABEL for tags and VERSION for specific versions. If omitted, LABEL/latest is used. STATIC sources do not provide a selector.
     */
    versionSelector?: GetManagedAgentResponseBodyDataSkillsVersionSelector;
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
export declare class GetManagedAgentResponseBodyDataSubAgentsSkills extends $dara.Model {
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
export declare class GetManagedAgentResponseBodyDataSubAgents extends $dara.Model {
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
    skills?: GetManagedAgentResponseBodyDataSubAgentsSkills[];
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
export declare class GetManagedAgentResponseBodyDataTemplateAiRegistry extends $dara.Model {
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
export declare class GetManagedAgentResponseBodyDataTemplate extends $dara.Model {
    /**
     * @remarks
     * The AI registry template configuration.
     */
    aiRegistry?: GetManagedAgentResponseBodyDataTemplateAiRegistry;
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
export declare class GetManagedAgentResponseBodyDataTools extends $dara.Model {
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
export declare class GetManagedAgentResponseBodyData extends $dara.Model {
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
    agenticFsMounts?: GetManagedAgentResponseBodyDataAgenticFsMounts[];
    /**
     * @remarks
     * The explicitly configured skills.
     */
    configuredSkills?: GetManagedAgentResponseBodyDataConfiguredSkills[];
    /**
     * @remarks
     * The target configuration accepted by the managed agent, which does not necessarily mean it has taken effect at runtime. This field is used in the detail responses of CreateManagedAgent, UpdateManagedAgent, and GetManagedAgent. In the configuration of a fixed version, it represents the configuration snapshot saved for that version. A returned object with enabled:false indicates that the configuration is disabled. The absence of the entire object indicates that the response does not provide the configuration.
     */
    contextConfiguration?: GetManagedAgentResponseBodyDataContextConfiguration;
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
     * Read-only. This field is provided only by GetManagedAgent when an effective version exists, corresponding to the configuration snapshot of effectiveSpecVersion. It remains the original effective configuration when a new version is being prepared or fails to be released. It is not returned before the first time it takes effect, or in the configuration of CreateManagedAgent, UpdateManagedAgent, and fixed versions. Omission does not indicate that it is disabled, and the client must not automatically supplement it with enabled:false.
     */
    effectiveContextConfiguration?: GetManagedAgentResponseBodyDataEffectiveContextConfiguration;
    /**
     * @remarks
     * The environment configuration information.
     */
    environment?: GetManagedAgentResponseBodyDataEnvironment;
    /**
     * @remarks
     * The agent runtime framework.
     */
    harness?: GetManagedAgentResponseBodyDataHarness;
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
    model?: GetManagedAgentResponseBodyDataModel;
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
    network?: GetManagedAgentResponseBodyDataNetwork;
    /**
     * @remarks
     * The list of OSS mounts. A maximum of 10 items are allowed.
     */
    ossMounts?: GetManagedAgentResponseBodyDataOssMounts[];
    /**
     * @remarks
     * The prompt variable declarations.
     */
    promptVariables?: GetManagedAgentResponseBodyDataPromptVariables[];
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
    runtime?: GetManagedAgentResponseBodyDataRuntime;
    /**
     * @remarks
     * The instance counts of managed Harness agents by sandbox phase. Current keys: PENDING (creating or initializing), RUNNING (running), HIBERNATING (hibernating), HIBERNATED (hibernated), RESUMING (resuming), TERMINATING (terminating), and FAILED (failed at runtime). Only phases that actually occur are returned, and missing keys are treated as 0. This field is a dynamic mapping and new keys may be added in the future. The frontend can use FAILED > 0 to determine whether abnormal instances exist.
     */
    sandboxPhaseCounts?: {
        [key: string]: number;
    };
    /**
     * @remarks
     * The list of skill configurations.
     */
    skills?: GetManagedAgentResponseBodyDataSkills[];
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
    subAgents?: GetManagedAgentResponseBodyDataSubAgents[];
    /**
     * @remarks
     * The template configuration information.
     */
    template?: GetManagedAgentResponseBodyDataTemplate;
    /**
     * @remarks
     * The list of tool configurations.
     */
    tools?: GetManagedAgentResponseBodyDataTools[];
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
export declare class GetManagedAgentResponseBody extends $dara.Model {
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
    data?: GetManagedAgentResponseBodyData;
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
