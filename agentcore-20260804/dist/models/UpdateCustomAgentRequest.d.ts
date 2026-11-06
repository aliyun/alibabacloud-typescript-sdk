import * as $dara from '@darabonba/typescript';
export declare class UpdateCustomAgentRequestBodyAgenticFsMounts extends $dara.Model {
    /**
     * @remarks
     * The absolute mount path in the container, such as `/data/train`. Mount targets must not be duplicated or form parent-child overwrites, and must avoid platform reserved directories.
     *
     * @example
     * /mnt/agenticfs/data
     */
    mountPath?: string;
    /**
     * @remarks
     * The existing non-empty relative directory under the access point. This parameter is required for each mount item. Root directories, absolute paths, or parent directory jumps are not allowed.
     *
     * @example
     * workspace/data
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. `true` indicates read-only, and `false` indicates read and write. The default value is `false` if omitted.
     *
     * @example
     * false
     */
    readOnly?: boolean;
    /**
     * @remarks
     * The access point domain name. This parameter is required for each mount item. It takes the `DomainName` from the NAS ListAccessPoints response and does not contain a protocol, port, or path.
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
export declare class UpdateCustomAgentRequestBodyArtifactCode extends $dara.Model {
    /**
     * @remarks
     * The code package startup command. This parameter is required in code package mode. The working directory is the root directory of the extracted code `/code`, such as `python main.py`. Quotes and escapes are supported, but environment variables, pipes, or logical operations are not automatically expanded. Use scripts in the package for complex commands.
     *
     * @example
     * python main.py
     */
    entrypoint?: string;
    /**
     * @remarks
     * The code runtime environment identifier, such as `python3.12`. When creating or switching environments, use the identifier returned by ListAgentCodeRuntimes. It is verified by the current version catalog and is not a fixed enumeration.
     *
     * @example
     * python3.12
     */
    languageRuntime?: string;
    /**
     * @remarks
     * The code package source address. It supports `oss://` addresses or HTTPS object addresses of standard OSS public domain name, including OSS signed URLs. Arbitrary external sites, custom domain names, or additional authentication request headers are not supported. After local upload, use the `sourceUri` returned by GetAgentCodePackageUploadUrl. It is re-verified and transferred during creation or update, and a fixed `oss://` address on the platform is returned after saving. Common updates can reuse this fixed address.
     *
     * @example
     * oss://my-agent-bucket/packages/main.zip
     */
    sourceUri?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomAgentRequestBodyArtifactContainer extends $dara.Model {
    /**
     * @remarks
     * The optional executable program and startup parameters. It must be a non-empty string when specified. If `container` is submitted but `entrypoint` is not specified, the default startup method of the image is used. Quotes and escapes are supported, but variables, pipes, or logical operations are not automatically expanded.
     *
     * @example
     * python app.py
     */
    entrypoint?: string;
    /**
     * @remarks
     * The ID of the ACR instance to which the image repository belongs. It cannot be empty.
     *
     * @example
     * cri-a1b2c3d4e5f6
     */
    instanceId?: string;
    /**
     * @remarks
     * The namespace to which the ACR image repository belongs. It cannot be empty.
     *
     * @example
     * my-agent
     */
    namespace?: string;
    /**
     * @remarks
     * The name of the image repository in the ACR namespace. It cannot be empty.
     *
     * @example
     * chat-agent
     */
    repo?: string;
    /**
     * @remarks
     * The ACR image tag. This parameter is required when submitting the ACR container configuration and must be a non-empty string, such as `v1.0.1`. When updating the tag, also specify `artifact.port` and `type`, `instanceId`, `namespace`, and `repo` in the container configuration.
     *
     * @example
     * v1.0.0
     */
    tag?: string;
    /**
     * @remarks
     * The image source type. `acr` indicates an ACR image, and `custom` indicates a custom image source. For the corresponding source configuration, see the descriptions of `artifact.container` and `customImage`.
     *
     * @example
     * acr
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
export declare class UpdateCustomAgentRequestBodyArtifact extends $dara.Model {
    /**
     * @remarks
     * The code package deployment configuration, which is mutually exclusive with `container`. You must provide `sourceUri`, `languageRuntime`, and `entrypoint` at the same time, and specify `artifact.port`. ZIP or TAR.GZ is supported, and dependencies are provided by the caller in the package.
     */
    code?: UpdateCustomAgentRequestBodyArtifactCode;
    /**
     * @remarks
     * The container image deployment configuration, which is mutually exclusive with `code`. For ACR sources, specify `type=acr`, `instanceId`, `namespace`, `repo`, and `tag`. For custom sources, specify `type=custom` and submit the complete `customImage`.
     */
    container?: UpdateCustomAgentRequestBodyArtifactContainer;
    /**
     * @remarks
     * The TCP port listened by the agent service. Valid values: 1 to 65535. This parameter is required when submitting `artifact`. If the entire `artifact` is omitted, the original artifact configuration is retained.
     *
     * @example
     * 8080
     */
    port?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomAgentRequestBodyCustomImagePullNetwork extends $dara.Model {
    /**
     * @remarks
     * This parameter is required when `type=vpc` and must belong to the selected VPC.
     *
     * @example
     * sg-example
     */
    securityGroupId?: string;
    /**
     * @remarks
     * This parameter is required when submitting `pullNetwork` and is verified by the backend. The default for new creations is the public network, which is independent of the agent runtime network.
     *
     * @example
     * public
     */
    type?: string;
    /**
     * @remarks
     * This parameter is required when `type=vpc` and must belong to the selected VPC.
     *
     * @example
     * vsw-example
     */
    vSwitchId?: string;
    /**
     * @remarks
     * This parameter is required when `type=vpc`. The associated account and region are verified by the backend.
     *
     * @example
     * vpc-example
     */
    vpcId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomAgentRequestBodyCustomImage extends $dara.Model {
    /**
     * @remarks
     * This parameter is required when submitting `customImage` and is verified by the backend. It must be a complete `registry[:port]/repository:tag` or `registry[:port]/repository@sha256:digest` address. Multi-level paths are supported, and it does not contain a protocol or user information.
     *
     * @example
     * registry.example.com/team/agent:v1
     */
    image?: string;
    /**
     * @remarks
     * The current repository password or token.
     *
     * @example
     * example-registry-token
     */
    password?: string;
    /**
     * @remarks
     * This parameter is required when submitting `customImage` and is verified by the backend. It is the complete independent pull network configuration. For the public network, only pass `type=public`.
     */
    pullNetwork?: UpdateCustomAgentRequestBodyCustomImagePullNetwork;
    /**
     * @remarks
     * Specifies whether to skip HTTPS certificate verification.
     *
     * @example
     * false
     */
    skipTlsVerify?: boolean;
    /**
     * @remarks
     * The current repository username.
     *
     * @example
     * reader
     */
    username?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomAgentRequestBodyEnvironmentVariables extends $dara.Model {
    /**
     * @remarks
     * The name of the environment variable. It cannot be empty and must be unique within the current list of environment variables.
     *
     * This parameter is required.
     *
     * @example
     * LOG_LEVEL
     */
    name?: string;
    /**
     * @remarks
     * The value of the environment variable. It must be a string, and empty strings are allowed.
     *
     * This parameter is required.
     *
     * @example
     * info
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
export declare class UpdateCustomAgentRequestBodyEnvironment extends $dara.Model {
    /**
     * @remarks
     * The complete list of user environment variables. A non-empty list replaces the original list entirely, and an empty array clears the list. The name of each item must be non-empty and unique within the list. The value must be a string, and empty strings are allowed.
     */
    variables?: UpdateCustomAgentRequestBodyEnvironmentVariables[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomAgentRequestBodyHealthCheck extends $dara.Model {
    /**
     * @remarks
     * This parameter is currently invalid. Omit it.
     *
     * @example
     * 1
     *
     * @deprecated
     */
    healthyThreshold?: number;
    /**
     * @remarks
     * The interval between two health checks, in seconds. It must be a positive integer. Default value: 10.
     *
     * @example
     * 10
     */
    intervalSeconds?: number;
    /**
     * @remarks
     * The HTTP health check path. It must start with a forward slash (/). Default value: /healthz.
     *
     * @example
     * /healthz
     */
    path?: string;
    /**
     * @remarks
     * The port accessed for health checks. This parameter is required when configuring a health check. Valid values: 1 to 65535.
     *
     * @example
     * 8080
     */
    port?: number;
    /**
     * @remarks
     * The timeout period for a single health check, in seconds. It must be a positive integer and less than intervalSeconds. Default value: 2.
     *
     * @example
     * 2
     */
    timeoutSeconds?: number;
    /**
     * @remarks
     * The number of consecutive health check failures before the instance is considered unhealthy. It must be a positive integer. Default value: 3.
     *
     * @example
     * 3
     */
    unhealthyThreshold?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomAgentRequestBodyLoggingSls extends $dara.Model {
    /**
     * @remarks
     * The name of the Simple Log Service Logstore that receives agent logs.
     *
     * @example
     * agent-runtime
     */
    logstore?: string;
    /**
     * @remarks
     * The name of the Simple Log Service project that receives agent logs.
     *
     * @example
     * my-agent-logs
     */
    project?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomAgentRequestBodyLogging extends $dara.Model {
    /**
     * @remarks
     * The Simple Log Service log delivery destination. When updating this object, both project and logstore must be provided and cannot be empty.
     */
    sls?: UpdateCustomAgentRequestBodyLoggingSls;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomAgentRequestBodyNetworkAccessInternet extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to allow the agent to access the Internet. A Boolean value is required when configuring accessInternet. The workspace must also allow Internet access for this to take effect.
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
export declare class UpdateCustomAgentRequestBodyNetworkAccessVpc extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to allow the agent to access the user VPC configured for the workspace. A Boolean value is required when configuring accessVpc. The workspace must also allow VPC access for this to take effect.
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
export declare class UpdateCustomAgentRequestBodyNetwork extends $dara.Model {
    /**
     * @remarks
     * The Internet access configuration. If this access item is omitted, Internet access is not restricted on the agent side. The workspace must still allow Internet access.
     */
    accessInternet?: UpdateCustomAgentRequestBodyNetworkAccessInternet;
    /**
     * @remarks
     * The user VPC access configuration. If this access item is omitted, VPC access is not restricted on the agent side. The workspace must still be configured to allow access to the user VPC.
     */
    accessVpc?: UpdateCustomAgentRequestBodyNetworkAccessVpc;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomAgentRequestBodyObservability extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable agent observability.
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
export declare class UpdateCustomAgentRequestBodyOssMounts extends $dara.Model {
    /**
     * @remarks
     * The name of the OSS bucket. This parameter is required for each mount item. The length is 3 to 63 characters. It can contain only lowercase letters, digits, and hyphens, and cannot start or end with a hyphen.
     *
     * @example
     * my-agent-data
     */
    bucketName?: string;
    /**
     * @remarks
     * The absolute mount path in the container, such as `/data/train`. Mount targets must not be duplicated or form parent-child overwrites, and must avoid platform reserved directories.
     *
     * @example
     * /mnt/oss/train
     */
    mountPath?: string;
    /**
     * @remarks
     * The non-empty relative object directory prefix in the bucket. This parameter is required for each mount item.
     *
     * @example
     * datasets/train
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. `true` indicates read-only, and `false` indicates read and write. The default value is `false` if omitted.
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
export declare class UpdateCustomAgentRequestBodyProtocolPaths extends $dara.Model {
    /**
     * @remarks
     * The description of the current API path.
     *
     * @example
     * AG-UI conversation API
     */
    description?: string;
    /**
     * @remarks
     * The non-empty API path corresponding to the current protocol.
     *
     * This parameter is required.
     *
     * @example
     * /agui
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
export declare class UpdateCustomAgentRequestBodyProtocol extends $dara.Model {
    /**
     * @remarks
     * The request header configuration for the current protocol. The key is a non-empty request header name, and the value must be a string.
     */
    headers?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The list of API paths corresponding to the current protocol.
     */
    paths?: UpdateCustomAgentRequestBodyProtocolPaths[];
    /**
     * @remarks
     * The invocation protocol type. Valid values:
     * - agui: AG-UI protocol.
     * - openai-chat-completion: OpenAI Chat Completions compatible protocol.
     * - custom: Custom protocol.
     *
     * This parameter is required.
     *
     * @example
     * agui
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
export declare class UpdateCustomAgentRequestBodyRuntimeCompute extends $dara.Model {
    /**
     * @remarks
     * The compute specification. Valid values:
     * - INTERACTIVE: 1 vCPU and 2 GiB of memory.
     * - STANDARD: 2 vCPUs and 4 GiB of memory.
     * - HEAVY: 4 vCPUs and 8 GiB of memory.
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
export declare class UpdateCustomAgentRequestBodyRuntimeHpa extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable elastic scaling. Default value: false.
     *
     * This parameter is required.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The maximum number of concurrent sessions allowed per instance. Valid values: 1 to 20. Default value: 20.
     *
     * @example
     * 20
     */
    maxConcurrentSessionsPerSandbox?: number;
    /**
     * @remarks
     * The upper limit of instances. Valid values: 0 to 100. Default value: 10. This value cannot be less than minSandboxCount.
     *
     * @example
     * 10
     */
    maxSandboxCount?: number;
    /**
     * @remarks
     * The lower limit of instances. Valid values: 0 to 100. Default value: 1. This value cannot be greater than maxSandboxCount.
     *
     * @example
     * 1
     */
    minSandboxCount?: number;
    /**
     * @remarks
     * The maximum idle time for a session, in seconds. Valid values: 60 to 86400. Default value: 600.
     *
     * @example
     * 600
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
export declare class UpdateCustomAgentRequestBodyRuntimeSessionPolicy extends $dara.Model {
    /**
     * @remarks
     * The name of the request header for session identification. This parameter is required when type is set to ISOLATED_HEADER_FIELD and must be a valid HTTP request header name. Do not specify this parameter for other policies.
     *
     * @example
     * X-Session-Id
     */
    headerName?: string;
    /**
     * @remarks
     * The session policy type. Valid values:
     * - AFFINITY: Session affinity.
     * - ISOLATED_HEADER_FIELD: Associates sessions by using the request header specified in headerName.
     * - ISOLATED_COOKIE: Not recommended for use at this time.
     * - DISABLED: A compatibility option. The response returns AFFINITY.
     *
     * This parameter is required.
     *
     * @example
     * AFFINITY
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
export declare class UpdateCustomAgentRequestBodyRuntime extends $dara.Model {
    /**
     * @remarks
     * The compute resource configuration for the agent runtime instance.
     *
     * This parameter is required.
     */
    compute?: UpdateCustomAgentRequestBodyRuntimeCompute;
    /**
     * @remarks
     * The elastic and session configuration. Omitted fields use default values. To retain the original policy during an update, submit the complete hpa object or omit the entire runtime object.
     */
    hpa?: UpdateCustomAgentRequestBodyRuntimeHpa;
    /**
     * @remarks
     * The session policy configuration, which is used to set the session association method for requests.
     *
     * This parameter is required.
     */
    sessionPolicy?: UpdateCustomAgentRequestBodyRuntimeSessionPolicy;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomAgentRequestBody extends $dara.Model {
    /**
     * @remarks
     * The inbound access method.
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
     * The NAS storage mount configuration. Currently, the AgenticFS type is supported, which is used to mount file directories in access points to agent runtime instances. The AgenticFS directory mount list can contain up to 10 items in total with `ossMounts`. If omitted or set to `[]` during creation, it indicates no mounts. If omitted during update, the original value is retained. If set to `[]`, the list is cleared. `null` is not accepted.
     */
    agenticFsMounts?: UpdateCustomAgentRequestBodyAgenticFsMounts[];
    /**
     * @remarks
     * The deployment artifact update configuration. If the entire `artifact` is omitted, the original configuration is retained. When submitting this object, specify `port` and the required fields for the selected source. Only one source can exist in `code` and `container`.
     */
    artifact?: UpdateCustomAgentRequestBodyArtifact;
    /**
     * @remarks
     * Omission indicates retaining the source, and complete submission indicates actively updating the custom image. You do not need to submit it if only the port and startup command change.
     */
    customImage?: UpdateCustomAgentRequestBodyCustomImage;
    /**
     * @remarks
     * The description of the agent. The maximum length is 1,024 characters after leading and trailing whitespaces are removed. If this parameter is omitted, the original value is retained. If null is passed, the description is cleared.
     *
     * @example
     * Custom agent that provides conversational services
     */
    description?: string;
    /**
     * @remarks
     * The user environment variable configuration for the agent process. If the entire environment object is omitted, the original value is retained. If variables is provided, the entire list is replaced, and any variables to be retained must be submitted together. Setting variables to an empty array, setting environment to null, or providing environment while omitting variables clears the user-configured environment variables.
     */
    environment?: UpdateCustomAgentRequestBodyEnvironment;
    /**
     * @remarks
     * The optional HTTP health check configuration. If this object is provided, port is required, and unspecified items use default values. If omitted during creation, no health check is configured. If this top-level field is omitted during an update, the original configuration is retained. If null is passed, the health check is removed.
     */
    healthCheck?: UpdateCustomAgentRequestBodyHealthCheck;
    /**
     * @remarks
     * The log delivery configuration for the agent. You can specify the Simple Log Service project and Logstore. After a successful creation or update, verify that logs are delivered properly.
     */
    logging?: UpdateCustomAgentRequestBodyLogging;
    /**
     * @remarks
     * The name of the custom code or image agent. The length is 1 to 128 characters after leading and trailing whitespaces are removed. The name must be unique within the same workspace. If this parameter is omitted, the original value is retained. It cannot be null or an empty name.
     *
     * @example
     * my-custom-agent
     */
    name?: string;
    /**
     * @remarks
     * The network access configuration for the agent. If this object is provided, omitted access items are treated as allowed. The actual accessible range is still restricted by the workspace network configuration. To retain the original restrictions during an update, specify both accessInternet and accessVpc.
     */
    network?: UpdateCustomAgentRequestBodyNetwork;
    /**
     * @remarks
     * The high-code agent observability configuration.
     */
    observability?: UpdateCustomAgentRequestBodyObservability;
    /**
     * @remarks
     * The list of OSS directory mounts. The total number of items combined with agenticFsMounts cannot exceed 10. During an update, this list is replaced entirely. Pass an empty array to clear the mounts.
     */
    ossMounts?: UpdateCustomAgentRequestBodyOssMounts[];
    /**
     * @remarks
     * The list of invocation protocols supported by the agent. Each item includes the protocol type and optional paths and request headers. This list is replaced entirely during an update.
     */
    protocol?: UpdateCustomAgentRequestBodyProtocol[];
    /**
     * @remarks
     * The ARN of the RAM role used by the agent to access user cloud resources. The role must have permissions to access the cloud resources.
     *
     * @example
     * acs:ram::1234567890123456:role/agentcore-runtime-role
     */
    roleArn?: string;
    /**
     * @remarks
     * The runtime configuration. If the entire object is omitted, the original configuration is retained. If provided, both compute and sessionPolicy must be specified. Omitted items in hpa use default values.
     */
    runtime?: UpdateCustomAgentRequestBodyRuntime;
    /**
     * @remarks
     * Retains the original value if omitted in an update. Explicitly set to true or false without automatically defaulting to false. The new contract rejects null and invalid types. Existing compatibility endpoints are handled according to migration conventions.
     *
     * @example
     * true
     */
    useImageCache?: boolean;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomAgentRequest extends $dara.Model {
    /**
     * @remarks
     * The update configuration of the custom code or image agent. You must provide at least one top-level field. Omitted top-level fields retain their original values. When submitting `artifact`, specify `port` and the required fields for the corresponding artifact source. When submitting `runtime`, specify `compute` and `sessionPolicy`, and include the complete `hpa` that needs to be retained. `environment.variables` and other arrays are replaced as complete lists.
     */
    body?: UpdateCustomAgentRequestBody;
    /**
     * @remarks
     * The idempotency token passed through query parameters. Required when explicitly submitting customImage or container.type=custom. Optional for ACR image and code package submissions. The length is 1 to 128 characters. Letters, digits, periods, underscores, colons, and hyphens are allowed. Reuse the same token for retries of the same submission. Using the same token for different parameters is rejected.
     *
     * @example
     * custom-agent-request-20261010-001
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
