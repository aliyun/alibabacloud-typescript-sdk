import * as $dara from '@darabonba/typescript';
export declare class CreateManagedAgentRequestBodyAgenticFsMounts extends $dara.Model {
    /**
     * @remarks
     * The subdirectory under /mnt/agenticfs/ in the container. This parameter is required and validated by the backend for each mount item. Mount targets must not be duplicated or overlap in parent-child relationships.
     *
     * @example
     * /mnt/agenticfs/data
     */
    mountPath?: string;
    /**
     * @remarks
     * The existing non-empty relative directory under the access point. This parameter is required and validated by the backend for each mount item. Root directories, absolute paths, and parent directory segments are not allowed.
     *
     * @example
     * workspace/data
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. If omitted, the default value is false. This parameter does not represent a read-only policy for a RAM role.
     *
     * @example
     * false
     */
    readOnly?: boolean;
    /**
     * @remarks
     * The domain name of the access point. This parameter is required and validated by the backend for each mount item. Do not include the protocol, port, or path. Use the DomainName value from the NAS ListAccessPoints response.
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
export declare class CreateManagedAgentRequestBodyEnvironmentCredentialReferences extends $dara.Model {
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
export declare class CreateManagedAgentRequestBodyEnvironmentVariables extends $dara.Model {
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
export declare class CreateManagedAgentRequestBodyEnvironment extends $dara.Model {
    /**
     * @remarks
     * The list of credential references.
     */
    credentialReferences?: CreateManagedAgentRequestBodyEnvironmentCredentialReferences[];
    /**
     * @remarks
     * The list of environment variables.
     */
    variables?: CreateManagedAgentRequestBodyEnvironmentVariables[];
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
export declare class CreateManagedAgentRequestBodyHarnessConfiguration extends $dara.Model {
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
export declare class CreateManagedAgentRequestBodyHarness extends $dara.Model {
    /**
     * @remarks
     * The runtime framework configuration.
     */
    configuration?: CreateManagedAgentRequestBodyHarnessConfiguration;
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
export declare class CreateManagedAgentRequestBodyModelQuota extends $dara.Model {
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
     * The quota limit type. This parameter is required and validated by the backend when the quota is enabled. Fixed value: token.
     *
     * @example
     * token
     */
    limitType?: string;
    /**
     * @remarks
     * The statistical period for the quota. This parameter is required and validated by the backend when the quota is enabled. Valid values: day (daily) and month (monthly).
     *
     * @example
     * day
     */
    periodType?: string;
    /**
     * @remarks
     * The maximum number of tokens allowed to be consumed in a single period. This parameter is required and validated by the backend when the quota is enabled. The value must be greater than 0.
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
export declare class CreateManagedAgentRequestBodyModel extends $dara.Model {
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
     * The name of the upstream model.
     *
     * @example
     * qwen-max
     */
    modelName?: string;
    /**
     * @remarks
     * The model token quota configuration. If this parameter is not passed, no quota is configured.
     */
    quota?: CreateManagedAgentRequestBodyModelQuota;
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
export declare class CreateManagedAgentRequestBodyNetworkAccessInternet extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to allow access to the Internet.
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
export declare class CreateManagedAgentRequestBodyNetworkAccessVpc extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to allow access to the VPC.
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
export declare class CreateManagedAgentRequestBodyNetwork extends $dara.Model {
    /**
     * @remarks
     * The public network access configuration.
     */
    accessInternet?: CreateManagedAgentRequestBodyNetworkAccessInternet;
    /**
     * @remarks
     * The VPC access configuration.
     */
    accessVpc?: CreateManagedAgentRequestBodyNetworkAccessVpc;
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
export declare class CreateManagedAgentRequestBodyOssMounts extends $dara.Model {
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
     * The relative object prefix in the bucket. If not specified, the entire bucket is mounted.
     *
     * @example
     * datasets
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. If not specified, the default value is false.
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
export declare class CreateManagedAgentRequestBodyPromptVariables extends $dara.Model {
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
export declare class CreateManagedAgentRequestBodyRuntimeCompute extends $dara.Model {
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
export declare class CreateManagedAgentRequestBodyRuntimeHpa extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable auto-scaling. This parameter is required and validated by the backend when HPA is specified.
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
     * The maximum number of sandboxes. This parameter is required when HPA is enabled and must not be less than the minimum value.
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
     * The idle timeout period for a session before it is reclaimed, in seconds. This parameter is required and validated by the backend when HPA is specified.
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
export declare class CreateManagedAgentRequestBodyRuntimeSessionPolicy extends $dara.Model {
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
export declare class CreateManagedAgentRequestBodyRuntime extends $dara.Model {
    /**
     * @remarks
     * The compute configuration.
     *
     * This parameter is required.
     */
    compute?: CreateManagedAgentRequestBodyRuntimeCompute;
    /**
     * @remarks
     * The sandbox auto-scaling and session configuration.
     */
    hpa?: CreateManagedAgentRequestBodyRuntimeHpa;
    /**
     * @remarks
     * The session policy configuration.
     *
     * This parameter is required.
     */
    sessionPolicy?: CreateManagedAgentRequestBodyRuntimeSessionPolicy;
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
export declare class CreateManagedAgentRequestBodySkillsVersionSelector extends $dara.Model {
    /**
     * @remarks
     * The version selector type. Valid values:
     * - LABEL: selects by label
     * - VERSION: selects by specific version
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The selector value. When the type is LABEL, this value is the label name, such as latest. When the type is VERSION, this value is the specific version number.
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
export declare class CreateManagedAgentRequestBodySkills extends $dara.Model {
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
     * - REFERENCE: references the AI Registry
     * - STATIC: statically provided with the package
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
    versionSelector?: CreateManagedAgentRequestBodySkillsVersionSelector;
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
export declare class CreateManagedAgentRequestBodySubAgentsSkills extends $dara.Model {
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
export declare class CreateManagedAgentRequestBodySubAgents extends $dara.Model {
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
    skills?: CreateManagedAgentRequestBodySubAgentsSkills[];
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
export declare class CreateManagedAgentRequestBodyTemplateAiRegistry extends $dara.Model {
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
export declare class CreateManagedAgentRequestBodyTemplate extends $dara.Model {
    /**
     * @remarks
     * The AI registry template configuration.
     */
    aiRegistry?: CreateManagedAgentRequestBodyTemplateAiRegistry;
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
export declare class CreateManagedAgentRequestBodyTools extends $dara.Model {
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
export declare class CreateManagedAgentRequestBody extends $dara.Model {
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
     * The list of AgenticFS mounts. If omitted or set to an empty array during creation, no AgenticFS mounts are configured. A null value is rejected. The total number of AgenticFS and OSS mounts cannot exceed 10.
     */
    agenticFsMounts?: CreateManagedAgentRequestBodyAgenticFsMounts[];
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
    environment?: CreateManagedAgentRequestBodyEnvironment;
    /**
     * @remarks
     * The agent runtime framework.
     */
    harness?: CreateManagedAgentRequestBodyHarness;
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
     * The model configuration.
     *
     * This parameter is required.
     */
    model?: CreateManagedAgentRequestBodyModel;
    /**
     * @remarks
     * The name of the managed agent.
     *
     * This parameter is required.
     *
     * @example
     * my-agent
     */
    name?: string;
    /**
     * @remarks
     * The network configuration.
     */
    network?: CreateManagedAgentRequestBodyNetwork;
    /**
     * @remarks
     * The list of OSS mounts. A maximum of 10 items are allowed.
     */
    ossMounts?: CreateManagedAgentRequestBodyOssMounts[];
    /**
     * @remarks
     * The prompt variable declarations.
     */
    promptVariables?: CreateManagedAgentRequestBodyPromptVariables[];
    /**
     * @remarks
     * The runtime configuration.
     *
     * This parameter is required.
     */
    runtime?: CreateManagedAgentRequestBodyRuntime;
    /**
     * @remarks
     * The list of skill configurations.
     */
    skills?: CreateManagedAgentRequestBodySkills[];
    /**
     * @remarks
     * The list of sub-agent configurations.
     */
    subAgents?: CreateManagedAgentRequestBodySubAgents[];
    /**
     * @remarks
     * The agent template configuration.
     */
    template?: CreateManagedAgentRequestBodyTemplate;
    /**
     * @remarks
     * The list of tool configurations.
     */
    tools?: CreateManagedAgentRequestBodyTools[];
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
export declare class CreateManagedAgentRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: CreateManagedAgentRequestBody;
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
