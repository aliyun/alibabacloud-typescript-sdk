import * as $dara from '@darabonba/typescript';
export declare class UpdateManagedAgentRequestBodyAgenticFsMounts extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBodyEnvironmentCredentialReferences extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBodyEnvironmentVariables extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBodyEnvironment extends $dara.Model {
    /**
     * @remarks
     * The list of credential references.
     */
    credentialReferences?: UpdateManagedAgentRequestBodyEnvironmentCredentialReferences[];
    /**
     * @remarks
     * The list of environment variables.
     */
    variables?: UpdateManagedAgentRequestBodyEnvironmentVariables[];
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
export declare class UpdateManagedAgentRequestBodyHarnessConfiguration extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBodyHarness extends $dara.Model {
    /**
     * @remarks
     * The runtime framework configuration.
     */
    configuration?: UpdateManagedAgentRequestBodyHarnessConfiguration;
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
export declare class UpdateManagedAgentRequestBodyModelQuota extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable the token quota. If not specified, the default value is true. A value of false disables the quota and deletes existing quota rules.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The quota limit type. This field is required and validated by the backend when the quota is enabled. Fixed value: token.
     *
     * @example
     * token
     */
    limitType?: string;
    /**
     * @remarks
     * The statistical period for the quota. This field is required and validated by the backend when the quota is enabled. Valid values: day (daily) and month (monthly).
     *
     * @example
     * day
     */
    periodType?: string;
    /**
     * @remarks
     * The maximum number of tokens allowed to be consumed within a single period. This field is required and validated by the backend when the quota is enabled. The value must be greater than 0.
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
export declare class UpdateManagedAgentRequestBodyModel extends $dara.Model {
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
     * @example
     * qwen-max
     */
    modelName?: string;
    /**
     * @remarks
     * The model token quota configuration. If not specified, no quota is configured.
     */
    quota?: UpdateManagedAgentRequestBodyModelQuota;
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
export declare class UpdateManagedAgentRequestBodyNetworkAccessInternet extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBodyNetworkAccessVpc extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBodyNetwork extends $dara.Model {
    /**
     * @remarks
     * The public network access configuration.
     */
    accessInternet?: UpdateManagedAgentRequestBodyNetworkAccessInternet;
    /**
     * @remarks
     * The VPC access configuration.
     */
    accessVpc?: UpdateManagedAgentRequestBodyNetworkAccessVpc;
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
export declare class UpdateManagedAgentRequestBodyOssMounts extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBodyPromptVariables extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBodyRuntimeCompute extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBodyRuntimeHpa extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBodyRuntimeSessionPolicy extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBodyRuntime extends $dara.Model {
    /**
     * @remarks
     * The compute configuration.
     *
     * This parameter is required.
     */
    compute?: UpdateManagedAgentRequestBodyRuntimeCompute;
    /**
     * @remarks
     * The sandbox auto scaling and session configuration.
     */
    hpa?: UpdateManagedAgentRequestBodyRuntimeHpa;
    /**
     * @remarks
     * The session policy configuration.
     *
     * This parameter is required.
     */
    sessionPolicy?: UpdateManagedAgentRequestBodyRuntimeSessionPolicy;
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
export declare class UpdateManagedAgentRequestBodySkillsVersionSelector extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBodySkills extends $dara.Model {
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
     * The referenced version selector. If omitted, the default value is LABEL/latest. Currently, only LABEL/latest is supported.
     */
    versionSelector?: UpdateManagedAgentRequestBodySkillsVersionSelector;
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
export declare class UpdateManagedAgentRequestBodySubAgentsSkills extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBodySubAgents extends $dara.Model {
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
    skills?: UpdateManagedAgentRequestBodySubAgentsSkills[];
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
export declare class UpdateManagedAgentRequestBodyTemplateAiRegistry extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBodyTemplate extends $dara.Model {
    /**
     * @remarks
     * The AI registry template configuration.
     */
    aiRegistry?: UpdateManagedAgentRequestBodyTemplateAiRegistry;
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
export declare class UpdateManagedAgentRequestBodyTools extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBody extends $dara.Model {
    /**
     * @remarks
     * 省略时保持不变；API_KEY 会清空 accessScope，USER 必须设置访问范围。
     *
     * @example
     * API_KEY
     */
    accessMode?: string;
    /**
     * @remarks
     * 省略时保持不变；仅 accessMode 为 USER 时使用。
     *
     * @example
     * ALL
     */
    accessScope?: string;
    /**
     * @remarks
     * If omitted, the existing mounts are retained. An empty array clears the mounts. A non-empty array replaces all existing mounts. Null is rejected. The total number of AgenticFS and OSS mounts cannot exceed 10.
     */
    agenticFsMounts?: UpdateManagedAgentRequestBodyAgenticFsMounts[];
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
    environment?: UpdateManagedAgentRequestBodyEnvironment;
    /**
     * @remarks
     * The agent runtime framework.
     */
    harness?: UpdateManagedAgentRequestBodyHarness;
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
     * The model configuration.
     */
    model?: UpdateManagedAgentRequestBodyModel;
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
    network?: UpdateManagedAgentRequestBodyNetwork;
    /**
     * @remarks
     * The list of OSS mounts. A maximum of 10 items are allowed. Pass an empty array to clear existing mounts.
     */
    ossMounts?: UpdateManagedAgentRequestBodyOssMounts[];
    /**
     * @remarks
     * The prompt variable declarations.
     */
    promptVariables?: UpdateManagedAgentRequestBodyPromptVariables[];
    /**
     * @remarks
     * The runtime configuration.
     */
    runtime?: UpdateManagedAgentRequestBodyRuntime;
    /**
     * @remarks
     * The list of skill configurations.
     */
    skills?: UpdateManagedAgentRequestBodySkills[];
    /**
     * @remarks
     * The list of sub-agent configurations.
     */
    subAgents?: UpdateManagedAgentRequestBodySubAgents[];
    /**
     * @remarks
     * The agent template configuration.
     */
    template?: UpdateManagedAgentRequestBodyTemplate;
    /**
     * @remarks
     * The list of tool configurations.
     */
    tools?: UpdateManagedAgentRequestBodyTools[];
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
export declare class UpdateManagedAgentRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: UpdateManagedAgentRequestBody;
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
