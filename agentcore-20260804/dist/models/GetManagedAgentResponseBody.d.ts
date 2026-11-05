import * as $dara from '@darabonba/typescript';
export declare class GetManagedAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
    /**
     * @remarks
     * The subdirectory under /mnt/agenticfs/ in the container. This field is required and validated by the backend. Mount targets must not overlap or have parent-child conflicts.
     *
     * @example
     * /mnt/agenticfs/data
     */
    mountPath?: string;
    /**
     * @remarks
     * The existing non-empty relative directory under the access point. This field is required and validated by the backend. Root directories, absolute paths, and parent directory segments are not allowed.
     *
     * @example
     * workspace/data
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. If omitted, the default value is false. This is not a read-only policy for a RAM role.
     *
     * @example
     * false
     */
    readOnly?: boolean;
    /**
     * @remarks
     * The domain name of the access point. This field is required and validated by the backend. Do not include the protocol, port, or path. Use the DomainName value from the NAS ListAccessPoints response.
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
     * The type of the version selector. Valid values: LABEL (by tag) and VERSION (by specific version).
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The value of the selector. If the type is LABEL, the value is a tag name such as latest. If the type is VERSION, the value is a specific version number.
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
     * The source type of the skill. Valid values: REFERENCE (references the AI Registry) and STATIC (statically provided with the package).
     *
     * @example
     * REFERENCE
     */
    sourceType?: string;
    /**
     * @remarks
     * The legacy compatibility field. Use sourceType and versionSelector for new requests.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    /**
     * @remarks
     * The referenced version selector. If omitted, the default value is LABEL/latest. Currently, only LABEL/latest is supported.
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
export declare class GetManagedAgentResponseBodyDataHarness extends $dara.Model {
    /**
     * @remarks
     * The runtime framework configuration.
     */
    configuration?: GetManagedAgentResponseBodyDataHarnessConfiguration;
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
     * Indicates whether the quota is exceeded for the current period. This is a read-only field returned by the backend.
     *
     * @example
     * false
     */
    overLimit?: boolean;
    /**
     * @remarks
     * The quota statistical period. Valid values: day (daily) and month (monthly).
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
     * The maximum number of tokens allowed to be consumed in a single period.
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
     * The name of the upstream model.
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
     * Specifies whether Internet access is allowed.
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
     * Specifies whether VPC access is allowed.
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
     * The name of the OSS bucket. This parameter is required and validated by the backend for each mount item.
     *
     * @example
     * bucket-001
     */
    bucketName?: string;
    /**
     * @remarks
     * The absolute mount path in the container. This parameter is required and validated by the backend for each mount item.
     *
     * @example
     * /mnt/oss/datasets
     */
    mountPath?: string;
    /**
     * @remarks
     * The relative object prefix in the bucket. If you do not specify this parameter, the entire bucket is mounted.
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
     * Specifies whether auto scaling is enabled. This parameter is required and validated by the backend when HPA is specified.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The maximum number of active sessions per sandbox. This parameter is required and validated by the backend when HPA is specified.
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
     * The time-to-live (TTL) in seconds for a session after it becomes inactive. This parameter is required and validated by the backend when HPA is specified.
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
     * The name of the HTTP header used for session affinity. This parameter takes effect when sessionPolicy.type is set to ISOLATED_HEADER_FIELD.
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
     * The type of the version selector. Valid values: LABEL (by tag) and VERSION (by specific version).
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The value of the selector. If the type is LABEL, the value is a tag name such as latest. If the type is VERSION, the value is a specific version number.
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
     * The applied runtime version. This parameter is read-only.
     *
     * @example
     * 1.0.0
     */
    appliedVersion?: string;
    /**
     * @remarks
     * Specifies whether the skill is from a fixed template. This parameter is read-only. Template items cannot be removed.
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
     * The current target version. This parameter is read-only.
     *
     * @example
     * 1.0.0
     */
    resolvedVersion?: string;
    /**
     * @remarks
     * The source type of the skill. Valid values: REFERENCE (references the AI Registry) and STATIC (statically provided with the package).
     *
     * @example
     * REFERENCE
     */
    sourceType?: string;
    /**
     * @remarks
     * The version of the skill.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    /**
     * @remarks
     * The referenced version selector. If omitted, the default value is LABEL/latest.
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
     * Please review the code
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
     * The ID of the managed agent.
     *
     * @example
     * agent-1
     */
    agentId?: string;
    /**
     * @remarks
     * The list of additional AgenticFS mounts. The total number of AgenticFS and OSS mounts cannot exceed 10.
     */
    agenticFsMounts?: GetManagedAgentResponseBodyDataAgenticFsMounts[];
    /**
     * @remarks
     * The explicitly configured skills.
     */
    configuredSkills?: GetManagedAgentResponseBodyDataConfiguredSkills[];
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
     * The latest version status.
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
     * The name of the managed agent.
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
     * The list of OSS mounts. Up to 10 items are supported.
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
     * The number of managed agent instances by sandbox phase. Current keys: PENDING (creating or initializing), RUNNING (running), HIBERNATING (hibernating), HIBERNATED (hibernated), RESUMING (resuming), TERMINATING (terminating), and FAILED (failed at runtime). Only phases that actually occur are returned. Missing keys are treated as 0. This field is a dynamic map and new keys may be added in the future. The frontend can use FAILED > 0 to determine whether abnormal instances exist.
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
