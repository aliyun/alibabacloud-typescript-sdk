import * as $dara from '@darabonba/typescript';
export declare class UpdateManagedAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
    /**
     * @remarks
     * The subdirectory under /mnt/agenticfs/ in the container. This field is required for each mount item and validated by the backend. Mount targets must not overlap or have parent-child overrides.
     *
     * @example
     * /mnt/agenticfs/data
     */
    mountPath?: string;
    /**
     * @remarks
     * The existing non-empty relative directory under the access point. This field is required for each mount item and validated by the backend. Root directories, absolute paths, and parent directory segments are not allowed.
     *
     * @example
     * workspace/data
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether to mount the file system in read-only mode. If omitted, the default value is false. This does not apply the read-only policy of the RAM role.
     *
     * @example
     * false
     */
    readOnly?: boolean;
    /**
     * @remarks
     * The domain name of the access point. This field is required for each mount item and validated by the backend. Do not include the protocol, port, or path. Use the DomainName value from the NAS ListAccessPoints response.
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
     * The type of the version selector. Valid values: LABEL (by tag) and VERSION (by specific version).
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The value of the selector. If the type is LABEL, this value is the tag name, such as latest. If the type is VERSION, this value is the specific version number.
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
     * The source type of the skill. Valid values: REFERENCE (references the AI registry) and STATIC (provided statically within the package).
     *
     * @example
     * REFERENCE
     */
    sourceType?: string;
    /**
     * @remarks
     * The legacy compatibility field. For new requests, use sourceType and versionSelector.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    /**
     * @remarks
     * The referenced version selector. If omitted, the default value is LABEL/latest. Currently, only LABEL/latest is supported.
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
     * The connector service account key.
     *
     * @example
     * key-xxxx
     */
    connectorServiceAccountKey?: string;
    /**
     * @remarks
     * The connector service account name.
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
     * The type of the runtime framework.
     *
     * @example
     * qodercli
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
export declare class UpdateManagedAgentResponseBodyDataModelQuota extends $dara.Model {
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
     * Indicates whether the quota is exceeded for the current period. This is a read-only field returned by the backend.
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
     * The gateway quota rule status. This is a read-only field returned by the backend.
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
     * The number of tokens consumed in the current period. This is a read-only field returned by the backend.
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
     * The model token quota configuration and the quota usage status for the current period. This field is empty if no quota is configured.
     */
    quota?: UpdateManagedAgentResponseBodyDataModelQuota;
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
     * The name of the OSS bucket. This field is required for each mount item and validated by the backend.
     *
     * @example
     * bucket-001
     */
    bucketName?: string;
    /**
     * @remarks
     * The absolute mount path in the container. This field is required for each mount item and validated by the backend.
     *
     * @example
     * /mnt/oss/datasets
     */
    mountPath?: string;
    /**
     * @remarks
     * The relative object prefix in the bucket. If not specified, the entire bucket is mounted.
     *
     * @example
     * datasets
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether to mount the bucket in read-only mode. If not specified, the default value is false.
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
     * The description of the variable.
     *
     * @example
     * desc
     */
    description?: string;
    /**
     * @remarks
     * The name of the variable.
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
     * The compute class.
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
     * Specifies whether to enable auto scaling. This parameter is required and validated by the backend when HPA is present.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The maximum number of active sessions per sandbox. This parameter is required and validated by the backend when HPA is present.
     *
     * @example
     * 5
     */
    maxConcurrentSessionsPerSandbox?: number;
    /**
     * @remarks
     * The maximum number of sandboxes. This parameter is required and must be greater than or equal to the minimum value when HPA is enabled.
     *
     * @example
     * 3
     */
    maxSandboxCount?: number;
    /**
     * @remarks
     * The minimum number of sandboxes. This parameter is required when HPA is enabled.
     *
     * @example
     * 1
     */
    minSandboxCount?: number;
    /**
     * @remarks
     * The idle timeout in seconds before an inactive session is reclaimed. This parameter is required and validated by the backend when HPA is present.
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
     * The name of the HTTP header used for session affinity. This parameter takes effect when sessionPolicy.type is set to ISOLATED_HEADER_FIELD.
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
     * The sandbox auto scaling and session configuration.
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
     * The type of the version selector. Valid values: LABEL (by tag) and VERSION (by specific version).
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The value of the selector. If the type is LABEL, this value is the tag name, such as latest. If the type is VERSION, this value is the specific version number.
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
     * The applied runtime version. This field is read-only.
     *
     * @example
     * 1.0.0
     */
    appliedVersion?: string;
    /**
     * @remarks
     * Specifies whether the skill is from a fixed template. This field is read-only. Template items cannot be removed.
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
     * The source type of the skill. Valid values: REFERENCE (references the AI registry) and STATIC (provided statically within the package).
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
     * The referenced version selector. If omitted, the default is LABEL/latest.
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
export declare class UpdateManagedAgentResponseBodyDataTemplate extends $dara.Model {
    /**
     * @remarks
     * The AI registry template configuration.
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
     * API_KEY 表示使用 API Key；USER 表示使用用户身份。
     *
     * @example
     * API_KEY
     */
    accessMode?: string;
    /**
     * @remarks
     * 仅 accessMode 为 USER 时返回：ALL 表示全部用户，SPECIFIED 表示指定用户。
     *
     * @example
     * ALL
     */
    accessScope?: string;
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
     * The list of additional AgenticFS mounts. The total number of AgenticFS mounts and OSS mounts cannot exceed 10.
     */
    agenticFsMounts?: UpdateManagedAgentResponseBodyDataAgenticFsMounts[];
    /**
     * @remarks
     * The explicitly configured skills.
     */
    configuredSkills?: UpdateManagedAgentResponseBodyDataConfiguredSkills[];
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
     * The description of the managed agent.
     *
     * @example
     * Agent for code review
     */
    description?: string;
    /**
     * @remarks
     * The environment configuration.
     */
    environment?: UpdateManagedAgentResponseBodyDataEnvironment;
    /**
     * @remarks
     * The agent runtime framework.
     */
    harness?: UpdateManagedAgentResponseBodyDataHarness;
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
     * The latest specification version.
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
     * The model configuration.
     */
    model?: UpdateManagedAgentResponseBodyDataModel;
    /**
     * @remarks
     * The name of the managed agent.
     *
     * @example
     * my-agent
     */
    name?: string;
    /**
     * @remarks
     * The network configuration.
     */
    network?: UpdateManagedAgentResponseBodyDataNetwork;
    /**
     * @remarks
     * The list of OSS mounts. A maximum of 10 items are allowed.
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
     * The number of managed agent instances grouped by sandbox phase. Current keys: PENDING (creating or initializing), RUNNING (running), HIBERNATING (hibernating), HIBERNATED (hibernated), RESUMING (resuming), TERMINATING (terminating), and FAILED (runtime failure). Only phases that actually occur are returned, and missing keys are treated as 0. This field is a dynamic map and new keys may be added in the future. You can use FAILED > 0 to check for abnormal instances.
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
     * The status of the managed agent.
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
     * The business status code. The value is SUCCESS if the request is successful.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The details of the managed agent.
     */
    data?: UpdateManagedAgentResponseBodyData;
    /**
     * @remarks
     * The HTTP status code. The value is 200 if the request is successful.
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
