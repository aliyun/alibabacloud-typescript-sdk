import * as $dara from '@darabonba/typescript';
export declare class CreateManagedAgentRequestBodyAgenticFsMounts extends $dara.Model {
    /**
     * @remarks
     * The absolute mount path in the container, such as /data/train. Mount targets cannot be duplicated or form parent-child overwrites, and must avoid platform-reserved directories.
     *
     * @example
     * /mnt/agenticfs/data
     */
    mountPath?: string;
    /**
     * @remarks
     * The existing non-empty relative directory under the access point. This parameter is required and verified by the backend for each mount item. Root directories, absolute paths, and parent directory segments are not allowed.
     *
     * @example
     * workspace/data
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. If this parameter is omitted, the default value is false. This parameter does not represent a RAM role read-only policy.
     *
     * @example
     * false
     */
    readOnly?: boolean;
    /**
     * @remarks
     * The access point domain name. This parameter is required and verified by the backend for each mount item. It does not include a protocol, port, or path. Use the DomainName value from the NAS ListAccessPoints response.
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
export declare class CreateManagedAgentRequestBodyEnvironment extends $dara.Model {
    /**
     * @remarks
     * The credential reference list.
     */
    credentialReferences?: CreateManagedAgentRequestBodyEnvironmentCredentialReferences[];
    /**
     * @remarks
     * The environment variable list.
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
     * The account key record ID in the qodercli connector. You can query this ID by using ListConnectors. This is not the original key. You can omit this parameter if only one record exists. You must specify it if multiple records exist. Do not specify this parameter for qwenpaw.
     *
     * @example
     * key-example
     */
    connectorServiceAccountKey?: string;
    /**
     * @remarks
     * The connector account name bound to qodercli. Do not specify this parameter for qwenpaw.
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
     * The runtime framework configurations.
     */
    configuration?: CreateManagedAgentRequestBodyHarnessConfiguration;
    /**
     * @remarks
     * The runtime framework type. This parameter is required when harness is provided. Valid values: qwenpaw and qodercli.
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
     * Specifies whether to enable the token quota. If this parameter is not specified, the default value is true. If you set this parameter to false, the quota is disabled and existing quota rules are deleted.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The quota limit type. This parameter is required and verified by the backend when the quota is enabled. Fixed value: token.
     *
     * @example
     * token
     */
    limitType?: string;
    /**
     * @remarks
     * The statistical period for the quota. This parameter is required and verified by the backend when the quota is enabled. Valid values: day and month.
     *
     * @example
     * day
     */
    periodType?: string;
    /**
     * @remarks
     * The maximum number of tokens that can be consumed in a single period. This parameter is required and verified by the backend when the quota is enabled. The value must be greater than 0.
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
     * For qwenpaw, use the workspace model connection ID. For qodercli, use the available model identifier returned by ListConnectorModels.
     *
     * This parameter is required.
     *
     * @example
     * mc-1
     */
    modelConnectionId?: string;
    /**
     * @remarks
     * For qwenpaw, use the name of the upstream model created under the model connection. This parameter is required. For qodercli, you can omit this parameter.
     *
     * @example
     * qwen-max
     */
    modelName?: string;
    /**
     * @remarks
     * The model token quota configurations. If this parameter is not passed, no quota is configured.
     */
    quota?: CreateManagedAgentRequestBodyModelQuota;
    /**
     * @remarks
     * Valid values: off, low, medium, high, xhigh, and max. If this parameter is not passed or is null during creation, default is used. When you update and submit model configurations, if the thinking level is not passed or is null, it is restored to default. Except for off, which is converted to none, the value is passed to the runtime framework as is. The system does not verify model support or automatically downgrade the level. If the model does not support the specified level, adjust the level.
     *
     * @example
     * high
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
export declare class CreateManagedAgentRequestBodyNetworkAccessInternet extends $dara.Model {
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
export declare class CreateManagedAgentRequestBodyNetworkAccessVpc extends $dara.Model {
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
     * The OSS bucket name. Required and validated by the backend for each mount item.
     *
     * @example
     * bucket-001
     */
    bucketName?: string;
    /**
     * @remarks
     * The absolute mount path in the container, such as /data/train. Mount targets cannot be duplicated or form parent-child overwrites, and must avoid platform-reserved directories.
     *
     * @example
     * /mnt/oss/datasets
     */
    mountPath?: string;
    /**
     * @remarks
     * The non-empty relative object directory prefix within the bucket. Required for each mount item.
     *
     * @example
     * datasets
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether to mount as read-only. Defaults to false if not specified.
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
export declare class CreateManagedAgentRequestBodyRuntimeCompute extends $dara.Model {
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
export declare class CreateManagedAgentRequestBodyRuntimeHpa extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable elastic scaling. Defaults to false when omitted.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The maximum number of concurrent sessions allowed per instance. Valid values: 1 to 20. Defaults to 20 when omitted.
     *
     * @example
     * 20
     */
    maxConcurrentSessionsPerSandbox?: number;
    /**
     * @remarks
     * The upper limit of the number of instances. Valid values: 0 to 100. Defaults to 10 when omitted. The value cannot be less than minSandboxCount.
     *
     * @example
     * 3
     */
    maxSandboxCount?: number;
    /**
     * @remarks
     * The lower limit of the number of instances. Valid values: 0 to 100. Defaults to 1 when omitted. The value cannot be greater than maxSandboxCount.
     *
     * @example
     * 1
     */
    minSandboxCount?: number;
    /**
     * @remarks
     * The maximum idle time for a session, in seconds. Valid values: 60 to 86400. Defaults to 600 when omitted.
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
     * The name of the request header for session identification. Required when type is set to ISOLATED_HEADER_FIELD, and must be a valid HTTP request header name. Do not specify this parameter for other policies.
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
     * The elastic scaling and session configuration. Omitted fields use default values. To retain the original policy during an update, submit the complete hpa object or omit the entire runtime object.
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
     * The version selector type. LABEL selects by tag, and VERSION selects by specific version.
     *
     * @example
     * LABEL
     */
    type?: string;
    /**
     * @remarks
     * The selector value. For LABEL, it is the tag name (such as latest). For VERSION, it is the specific version number.
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
     * The skill source type. REFERENCE references an AI Registry asset, and STATIC is statically provided with the deployment artifact.
     *
     * @example
     * REFERENCE
     */
    sourceType?: string;
    /**
     * @remarks
     * The skill version field for backward compatibility with legacy requests. For new requests, use sourceType and versionSelector. Do not submit this field in combination with sourceType.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    /**
     * @remarks
     * The skill reference version selector. Supports LABEL for tags and VERSION for specific versions. Defaults to LABEL/latest when omitted. Selectors are not provided for STATIC sources.
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
     * Please review the code
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
     * The sub-agent skill list.
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
     * The NAS storage mount configurations. Currently, the AgenticFS type is supported and used to mount file directories in access points to agent runtime instances. This is the list of AgenticFS directory mounts. The total number of AgenticFS mounts and OSS mounts cannot exceed 10. If this parameter is omitted or set to [] during creation, no mounts are configured. If this parameter is omitted during an update, the existing mounts are retained. If this parameter is set to [], the mounts are cleared. Null values are not accepted.
     */
    agenticFsMounts?: CreateManagedAgentRequestBodyAgenticFsMounts[];
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
     * The environment configuration.
     */
    environment?: CreateManagedAgentRequestBodyEnvironment;
    /**
     * @remarks
     * The runtime framework object. If this parameter is omitted, qwenpaw is used by default. Valid values: qwenpaw and qodercli. The type cannot be changed after creation.
     */
    harness?: CreateManagedAgentRequestBodyHarness;
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
     * The model configurations.
     *
     * This parameter is required.
     */
    model?: CreateManagedAgentRequestBodyModel;
    /**
     * @remarks
     * The name of the managed Harness agent.
     *
     * This parameter is required.
     *
     * @example
     * my-agent
     */
    name?: string;
    /**
     * @remarks
     * The runtime network configuration. When provided, it must include both accessInternet.enabled and accessVpc.enabled. Actual access is subject to workspace network restrictions.
     */
    network?: CreateManagedAgentRequestBodyNetwork;
    /**
     * @remarks
     * The OSS directory mount list. A maximum of 10 items can be configured in total with agenticFsMounts. During an update, this list is replaced entirely. Pass an empty array [] to clear the list.
     */
    ossMounts?: CreateManagedAgentRequestBodyOssMounts[];
    /**
     * @remarks
     * The prompt variable declarations.
     */
    promptVariables?: CreateManagedAgentRequestBodyPromptVariables[];
    /**
     * @remarks
     * The runtime configuration. Both compute and sessionPolicy must be provided. Omitted fields in hpa use default values.
     *
     * This parameter is required.
     */
    runtime?: CreateManagedAgentRequestBodyRuntime;
    /**
     * @remarks
     * The skill configuration list.
     */
    skills?: CreateManagedAgentRequestBodySkills[];
    /**
     * @remarks
     * The sub-agent configuration list.
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
     * The reserved query parameter. The backend currently does not provide idempotency guarantees for deduplication or recovery of the original acceptance result based on this identifier.
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
