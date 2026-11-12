import * as $dara from '@darabonba/typescript';
export declare class UpdateManagedAgentRequestBodyAgenticFsMounts extends $dara.Model {
    /**
     * @remarks
     * The absolute mount path in the container, such as `/data/train`. Mount targets cannot be duplicated or form parent-child overwrites, and must avoid platform reserved directories.
     *
     * @example
     * /mnt/agenticfs/data
     */
    mountPath?: string;
    /**
     * @remarks
     * An existing non-empty relative directory under the access point. This field is required and validated by the backend for each mount item. Root directories, absolute paths, and parent directory segments are not allowed.
     *
     * @example
     * workspace/data
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. If omitted, the default value is `false`. This is not a RAM role read-only policy.
     *
     * @example
     * false
     */
    readOnly?: boolean;
    /**
     * @remarks
     * The domain name of the access point. This field is required and validated by the backend for each mount item. It must not contain a protocol, port, or path. Use the DomainName value from the NAS ListAccessPoints response.
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
export declare class UpdateManagedAgentRequestBodyEnvironment extends $dara.Model {
    /**
     * @remarks
     * The credential reference list.
     */
    credentialReferences?: UpdateManagedAgentRequestBodyEnvironmentCredentialReferences[];
    /**
     * @remarks
     * The environment variable list.
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
     * The account key record ID in the qodercli connector. You can query it by calling ListConnectors. It is not the original key. This field can be omitted if there is only one record, but must be specified if there are multiple records. Do not specify this field for qwenpaw.
     *
     * @example
     * key-example
     */
    connectorServiceAccountKey?: string;
    /**
     * @remarks
     * The name of the connector account bound to qodercli. Do not specify this field for qwenpaw.
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
     * The runtime harness configuration.
     */
    configuration?: UpdateManagedAgentRequestBodyHarnessConfiguration;
    /**
     * @remarks
     * The type of the runtime harness. This field is required when `harness` is provided, and must be consistent with the one specified during creation.
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
     * Specifies whether to enable the token quota. If not specified, the default value is `true`. Setting this field to `false` disables the quota and deletes existing quota rules.
     *
     * @example
     * true
     */
    enabled?: boolean;
    /**
     * @remarks
     * The quota limit type. This field is required and validated by the backend when the quota is enabled. Fixed value: `token`.
     *
     * @example
     * token
     */
    limitType?: string;
    /**
     * @remarks
     * The statistical period for the quota. This field is required and validated by the backend when the quota is enabled. Valid values: `day` (daily) and `month` (monthly).
     *
     * @example
     * day
     */
    periodType?: string;
    /**
     * @remarks
     * The maximum number of tokens allowed to be consumed in a single period. This field is required and validated by the backend when the quota is enabled. The value must be greater than 0.
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
     * For qwenpaw, use the name of the upstream model created under the model connection. This field is required. For qodercli, this field can be omitted.
     *
     * @example
     * qwen-max
     */
    modelName?: string;
    /**
     * @remarks
     * The model token quota configuration. If not provided, no quota is configured.
     */
    quota?: UpdateManagedAgentRequestBodyModelQuota;
    /**
     * @remarks
     * Valid values: `off`, `low`, `medium`, `high`, `xhigh`, and `max`. If not provided or set to `null` during creation, `default` is used. When updating and submitting the model configuration, if the thinking level is not provided or is `null`, it reverts to `default`. Except for `off` which is converted to `none`, the value is passed to the runtime harness as-is. The system does not validate model support or automatically downgrade the level. If the model does not support the specified level, adjust the level accordingly.
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
export declare class UpdateManagedAgentRequestBodyNetworkAccessInternet extends $dara.Model {
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
export declare class UpdateManagedAgentRequestBodyNetworkAccessVpc extends $dara.Model {
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
     * The OSS bucket name. Required and validated by the backend for each mount item.
     *
     * @example
     * bucket-001
     */
    bucketName?: string;
    /**
     * @remarks
     * The absolute mount path in the container, such as `/data/train`. Mount targets cannot be duplicated or form parent-child overwrites, and must avoid platform reserved directories.
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
export declare class UpdateManagedAgentRequestBodyRuntimeHpa extends $dara.Model {
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
     * The upper limit of the number of instances. Valid values: 0 to 100. Defaults to 10 when omitted. Cannot be less than minSandboxCount.
     *
     * @example
     * 3
     */
    maxSandboxCount?: number;
    /**
     * @remarks
     * The lower limit of the number of instances. Valid values: 0 to 100. Defaults to 1 when omitted. Cannot be greater than maxSandboxCount.
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
export declare class UpdateManagedAgentRequestBodyRuntimeSessionPolicy extends $dara.Model {
    /**
     * @remarks
     * The name of the request header for session identification. Required when type is ISOLATED_HEADER_FIELD. Must be a valid HTTP request header name. Do not specify for other policies.
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
     * The elastic scaling and session configuration. Omitted fields use default values. To retain the original policy during an update, submit the complete hpa object or omit the entire runtime object.
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
     * The version selector type. LABEL selects by tag. VERSION selects by specific version.
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
     * The skill source type. REFERENCE references the AI Registry. STATIC is statically provided with the package.
     *
     * @example
     * REFERENCE
     */
    sourceType?: string;
    /**
     * @remarks
     * The skill version field for legacy request compatibility. For new requests, use sourceType and versionSelector. Do not submit this field in combination with sourceType.
     *
     * @example
     * 1.0.0
     */
    version?: string;
    /**
     * @remarks
     * The skill reference version selector. Supports LABEL for tags and VERSION for specific versions. Defaults to LABEL/latest when omitted. Selectors are not provided for STATIC sources.
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
export declare class UpdateManagedAgentRequestBody extends $dara.Model {
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
     * The NAS storage mount configuration. Currently, only the AgenticFS type is supported, which is used to mount file directories in access points to agent runtime instances. This is the list of AgenticFS directory mounts. The total number of AgenticFS mounts and OSS mounts cannot exceed 10. If omitted or set to `[]` during creation, no mounts are configured. During an update, omitting this field retains the original configuration, and setting it to `[]` clears the mounts. `null` is not accepted.
     */
    agenticFsMounts?: UpdateManagedAgentRequestBodyAgenticFsMounts[];
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
    environment?: UpdateManagedAgentRequestBodyEnvironment;
    /**
     * @remarks
     * The runtime harness object. If omitted, the original harness is retained. If provided, the `type` must be the same as the one specified during creation. You can update the account binding for the same type of harness.
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
     * The name of the managed Harness agent.
     *
     * @example
     * my-agent
     */
    name?: string;
    /**
     * @remarks
     * The runtime network configuration. If provided, both accessInternet.enabled and accessVpc.enabled must be included. Actual access is subject to workspace network restrictions.
     */
    network?: UpdateManagedAgentRequestBodyNetwork;
    /**
     * @remarks
     * The OSS directory mount list. A maximum of 10 items in total with agenticFsMounts. The entire list is replaced during an update. Pass [] to clear the list.
     */
    ossMounts?: UpdateManagedAgentRequestBodyOssMounts[];
    /**
     * @remarks
     * The prompt variable declarations.
     */
    promptVariables?: UpdateManagedAgentRequestBodyPromptVariables[];
    /**
     * @remarks
     * The runtime configuration. If the entire object is omitted, the original configuration is retained. If provided, both compute and sessionPolicy must be specified. Omitted fields in hpa use default values.
     */
    runtime?: UpdateManagedAgentRequestBodyRuntime;
    /**
     * @remarks
     * The skill configuration list.
     */
    skills?: UpdateManagedAgentRequestBodySkills[];
    /**
     * @remarks
     * The sub-agent configuration list.
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
     * The reserved query parameter. The backend currently does not provide idempotency guarantees for deduplication or restoring original acceptance results based on this identifier.
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
