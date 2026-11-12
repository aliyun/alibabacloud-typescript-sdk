import * as $dara from '@darabonba/typescript';
export declare class CreateCustomAgentRequestBodyAgenticFsMounts extends $dara.Model {
    /**
     * @remarks
     * The absolute mount path within the container, such as /data/train. Mount targets cannot be duplicated or form parent-child directory overrides, and must avoid platform reserved directories.
     *
     * @example
     * /mnt/agenticfs/data
     */
    mountPath?: string;
    /**
     * @remarks
     * The existing non-empty relative directory under the AccessPoint. This field is required for each mount item. Root directories, absolute paths, and parent directory traversals are not allowed.
     *
     * @example
     * workspace/data
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. true indicates read-only, and false indicates read and write. If omitted, the default value is false.
     *
     * @example
     * false
     */
    readOnly?: boolean;
    /**
     * @remarks
     * The AccessPoint domain name. This field is required for each mount item and validated by the backend. Use the DomainName from the NAS ListAccessPoints response. Do not include the protocol, port, or path.
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
export declare class CreateCustomAgentRequestBodyArtifactCode extends $dara.Model {
    /**
     * @remarks
     * The startup command for the code package. This parameter is required in code package mode. The working directory is the extracted code root directory /code, such as python main.py. Quotes and escapes are supported. Environment variables, pipes, and logical operations are not automatically expanded. Use scripts within the package for complex commands.
     *
     * This parameter is required.
     *
     * @example
     * python main.py
     */
    entrypoint?: string;
    /**
     * @remarks
     * The identifier of the code runtime environment, such as python3.12. When creating or switching environments, use the identifier returned by ListAgentCodeRuntimes. The identifier is validated by the current version catalog and is not a fixed enum.
     *
     * This parameter is required.
     *
     * @example
     * python3.12
     */
    languageRuntime?: string;
    /**
     * @remarks
     * The source URI of the code package. OSS URIs (oss://) and HTTPS object URLs of a standard OSS public domain name (including OSS signed URLs) are supported. External sites, custom domain names, and extra authentication request headers are not supported. For local uploads, use the sourceUri returned by GetAgentCodePackageUploadUrl. The URI is revalidated and transferred during creation or update. A fixed oss:// URI of the platform is returned after saving and can be reused for regular updates.
     *
     * This parameter is required.
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
export declare class CreateCustomAgentRequestBodyArtifactContainer extends $dara.Model {
    /**
     * @remarks
     * The optional image startup command. If specified, it must be a non-empty string. If omitted, the default startup method of the image is used.
     *
     * @example
     * python app.py
     */
    entrypoint?: string;
    /**
     * @remarks
     * The ID of the ACR instance to which the image repository belongs. This parameter cannot be empty.
     *
     * @example
     * cri-a1b2c3d4e5f6
     */
    instanceId?: string;
    /**
     * @remarks
     * The namespace to which the ACR image repository belongs. This parameter cannot be empty.
     *
     * @example
     * my-agent
     */
    namespace?: string;
    /**
     * @remarks
     * The name of the image repository in the ACR namespace. This parameter cannot be empty.
     *
     * @example
     * chat-agent
     */
    repo?: string;
    /**
     * @remarks
     * The image tag used for deployment. This parameter cannot be empty. When updating the tag, you must also provide artifact.port and other required image fields.
     *
     * @example
     * v1.0.0
     */
    tag?: string;
    /**
     * @remarks
     * The image source type. acr indicates an ACR image, and custom indicates a custom image source. For the corresponding source configurations, refer to the descriptions of artifact.container and customImage.
     *
     * This parameter is required.
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
export declare class CreateCustomAgentRequestBodyArtifact extends $dara.Model {
    /**
     * @remarks
     * The code package deployment configuration. This parameter is mutually exclusive with container. You must provide sourceUri, languageRuntime, and entrypoint, and specify artifact.port. ZIP and TAR.GZ formats are supported. Dependencies must be included in the package by the caller.
     */
    code?: CreateCustomAgentRequestBodyArtifactCode;
    /**
     * @remarks
     * The container image deployment configuration. This parameter is mutually exclusive with code. For ACR sources, specify type=acr, instanceId, namespace, repo, and tag. For custom sources, specify type=custom and provide the complete customImage.
     */
    container?: CreateCustomAgentRequestBodyArtifactContainer;
    /**
     * @remarks
     * The TCP port listened on by the agent service. Valid values: 1 to 65535.
     *
     * This parameter is required.
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
export declare class CreateCustomAgentRequestBodyCustomImagePullNetwork extends $dara.Model {
    /**
     * @remarks
     * The vSwitch ID. This field is required when type is vpc. The vSwitch must belong to the selected VPC.
     *
     * @example
     * sg-example
     */
    securityGroupId?: string;
    /**
     * @remarks
     * The pull network type. This field is required when submitting pullNetwork and is validated by the backend. The default value for new creations is public. It is independent of the agent runtime network.
     *
     * @example
     * public
     */
    type?: string;
    /**
     * @remarks
     * The vSwitch ID. This field is required when type is vpc. The vSwitch must belong to the selected VPC.
     *
     * @example
     * vsw-example
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The VPC ID. This field is required when type is vpc. The associated account and region are validated by the backend.
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
export declare class CreateCustomAgentRequestBodyCustomImage extends $dara.Model {
    /**
     * @remarks
     * The image address. This field is required when submitting customImage and is validated by the backend. Specify the complete registry[:port]/repository:tag or registry[:port]/repository@sha256:digest. Multi-level paths are supported. Do not include the protocol or user information.
     *
     * @example
     * registry.example.com/team/agent:v1
     */
    image?: string;
    /**
     * @remarks
     * The password or token for the repository.
     *
     * @example
     * example-registry-token
     */
    password?: string;
    /**
     * @remarks
     * The image pull network configuration. This field is required when submitting customImage and is validated by the backend. Specify the complete independent pull network configuration. For the Internet, only pass type=public.
     */
    pullNetwork?: CreateCustomAgentRequestBodyCustomImagePullNetwork;
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
     * The username for the repository.
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
export declare class CreateCustomAgentRequestBodyEnvironmentVariables extends $dara.Model {
    /**
     * @remarks
     * The name of the environment variable. This parameter cannot be empty and must be unique within the current environment variable list.
     *
     * This parameter is required.
     *
     * @example
     * LOG_LEVEL
     */
    name?: string;
    /**
     * @remarks
     * The value of the environment variable. This parameter must be a string. Empty strings are allowed.
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
export declare class CreateCustomAgentRequestBodyEnvironment extends $dara.Model {
    /**
     * @remarks
     * The list of environment variables. Each item includes a name and a value. The entire list is replaced during an update.
     */
    variables?: CreateCustomAgentRequestBodyEnvironmentVariables[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomAgentRequestBodyHealthCheck extends $dara.Model {
    /**
     * @remarks
     * This parameter does not take effect. Omit this parameter.
     *
     * @example
     * 1
     *
     * @deprecated
     */
    healthyThreshold?: number;
    /**
     * @remarks
     * The interval between two health checks, in seconds. This parameter must be a positive integer. Default value: 10.
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
     * The port accessed for health checks. This parameter is required when health checks are configured. Valid values: 1 to 65535.
     *
     * @example
     * 8080
     */
    port?: number;
    /**
     * @remarks
     * The timeout period for a single health check, in seconds. This parameter must be a positive integer and less than intervalSeconds. Default value: 2.
     *
     * @example
     * 2
     */
    timeoutSeconds?: number;
    /**
     * @remarks
     * The number of consecutive health check failures required to mark the instance as unhealthy. This parameter must be a positive integer. Default value: 3.
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
export declare class CreateCustomAgentRequestBodyLoggingSls extends $dara.Model {
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
export declare class CreateCustomAgentRequestBodyLogging extends $dara.Model {
    /**
     * @remarks
     * The Simple Log Service log delivery destination. When this object is configured, neither project nor logstore can be empty.
     */
    sls?: CreateCustomAgentRequestBodyLoggingSls;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomAgentRequestBodyNetworkAccessInternet extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to allow the agent to access the Internet. A Boolean value must be provided when accessInternet is configured. For this setting to take effect, the workspace must also allow Internet access.
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
export declare class CreateCustomAgentRequestBodyNetworkAccessVpc extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to allow the agent to access the user VPC configured for the workspace. A Boolean value must be provided when accessVpc is configured. For this setting to take effect, the workspace must also allow VPC access.
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
export declare class CreateCustomAgentRequestBodyNetwork extends $dara.Model {
    /**
     * @remarks
     * The Internet access configuration. If this access item is omitted, Internet access is not restricted on the agent side. However, the workspace must still allow Internet access.
     */
    accessInternet?: CreateCustomAgentRequestBodyNetworkAccessInternet;
    /**
     * @remarks
     * The user VPC access configuration. If this access item is omitted, VPC access is not restricted on the agent side. However, the workspace must still be configured to allow access to the user VPC.
     */
    accessVpc?: CreateCustomAgentRequestBodyNetworkAccessVpc;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomAgentRequestBodyObservability extends $dara.Model {
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
export declare class CreateCustomAgentRequestBodyOssMounts extends $dara.Model {
    /**
     * @remarks
     * The name of the OSS bucket. This parameter is required for each mount. The name must be 3 to 63 characters in length and can contain only lowercase letters, digits, and hyphens. It cannot start or end with a hyphen.
     *
     * @example
     * my-agent-data
     */
    bucketName?: string;
    /**
     * @remarks
     * The absolute mount path within the container, such as /data/train. Mount targets cannot be duplicated or form parent-child directory overrides, and must avoid platform reserved directories.
     *
     * @example
     * /mnt/oss/train
     */
    mountPath?: string;
    /**
     * @remarks
     * The non-empty relative object directory prefix in the bucket. This parameter is required for each mount. Root directory and parent directory traversal are not allowed.
     *
     * @example
     * datasets/train
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. true indicates read-only, and false indicates read and write. If omitted, the default value is false.
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
export declare class CreateCustomAgentRequestBodyProtocolPaths extends $dara.Model {
    /**
     * @remarks
     * The description of the current API path.
     *
     * @example
     * AG-UI chat API
     */
    description?: string;
    /**
     * @remarks
     * The non-empty API path for the current protocol.
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
export declare class CreateCustomAgentRequestBodyProtocol extends $dara.Model {
    /**
     * @remarks
     * The request header configuration for the current protocol. The key is a non-empty request header name, and the value must be a string.
     */
    headers?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The list of API paths for the current protocol.
     */
    paths?: CreateCustomAgentRequestBodyProtocolPaths[];
    /**
     * @remarks
     * The Protocol Type of the invoke protocol. Valid values: agui: AG-UI protocol. openai-chat-completion: OpenAI Chat Completions compatible protocol. custom: custom protocol.
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
export declare class CreateCustomAgentRequestBodyRuntimeCompute extends $dara.Model {
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
export declare class CreateCustomAgentRequestBodyRuntimeHpa extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable auto scaling. Default value: false.
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
     * The maximum number of instances. Valid values: 0 to 100. Default value: 10. This value cannot be less than minSandboxCount.
     *
     * @example
     * 10
     */
    maxSandboxCount?: number;
    /**
     * @remarks
     * The minimum number of instances. Valid values: 0 to 100. Default value: 1. This value cannot be greater than maxSandboxCount.
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
export declare class CreateCustomAgentRequestBodyRuntimeSessionPolicy extends $dara.Model {
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
     * - ISOLATED_COOKIE: Not recommended.
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
export declare class CreateCustomAgentRequestBodyRuntime extends $dara.Model {
    /**
     * @remarks
     * The compute resource configuration for the agent runtime instance.
     *
     * This parameter is required.
     */
    compute?: CreateCustomAgentRequestBodyRuntimeCompute;
    /**
     * @remarks
     * The scaling and session configuration. Omitted fields use default values. To retain the original policy during an update, submit the complete hpa object or omit the entire runtime object.
     */
    hpa?: CreateCustomAgentRequestBodyRuntimeHpa;
    /**
     * @remarks
     * The session policy configuration used to set the session association method for requests.
     *
     * This parameter is required.
     */
    sessionPolicy?: CreateCustomAgentRequestBodyRuntimeSessionPolicy;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomAgentRequestBody extends $dara.Model {
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
     * The NAS storage mount configuration. Currently, only the AgenticFS type is supported. It is used to mount file directories from access points to agent runtime instances. This is a list of AgenticFS directory mounts. The total number of items in this list and ossMounts cannot exceed 10. If omitted or set to [] during creation, no mounts are configured. During an update, omitting the field retains the existing mounts, and [] clears the mounts. Null is not accepted.
     */
    agenticFsMounts?: CreateCustomAgentRequestBodyAgenticFsMounts[];
    /**
     * @remarks
     * The artifact deployment configuration. You must specify the service listening port and choose either code or container as the deployment method.
     *
     * This parameter is required.
     */
    artifact?: CreateCustomAgentRequestBodyArtifact;
    /**
     * @remarks
     * The source of the custom image. This field is required when artifact.container.type is custom. Omit this field for other sources.
     */
    customImage?: CreateCustomAgentRequestBodyCustomImage;
    /**
     * @remarks
     * The description of the agent purpose. The maximum length is 1024 characters after leading and trailing spaces are removed.
     *
     * @example
     * Custom agent that provides conversation services
     */
    description?: string;
    /**
     * @remarks
     * The environment variable configuration passed to the agent runtime process.
     */
    environment?: CreateCustomAgentRequestBodyEnvironment;
    /**
     * @remarks
     * The optional HTTP health check configuration. If this object is provided, port must be specified. Unspecified items use default values. Omitting this object during creation means no health check is configured. During an update, omitting this top-level field retains the original configuration, while passing null removes the health check.
     */
    healthCheck?: CreateCustomAgentRequestBodyHealthCheck;
    /**
     * @remarks
     * The log delivery configuration for the agent. You can specify the Simple Log Service project and Logstore. After a successful creation or update, verify whether logs are delivered properly.
     */
    logging?: CreateCustomAgentRequestBodyLogging;
    /**
     * @remarks
     * The name of the custom code or image agent. The length is 1 to 128 characters after leading and trailing spaces are removed. The name must be unique within the same workspace.
     *
     * This parameter is required.
     *
     * @example
     * my-custom-agent
     */
    name?: string;
    /**
     * @remarks
     * The network access configuration for the agent. If this object is provided, omitted access items are treated as allowed. The actual accessible range is still restricted by the workspace network configuration. To retain the original restrictions during an update, specify both accessInternet and accessVpc.
     */
    network?: CreateCustomAgentRequestBodyNetwork;
    /**
     * @remarks
     * The high-code agent observability configuration.
     */
    observability?: CreateCustomAgentRequestBodyObservability;
    /**
     * @remarks
     * The list of OSS directory mounts. You can specify a combined maximum of 10 items for OSS and agenticFsMounts. When you update this parameter, the entire list is replaced. Pass an empty array [] to clear the list.
     */
    ossMounts?: CreateCustomAgentRequestBodyOssMounts[];
    /**
     * @remarks
     * The list of invocation protocols supported by the agent. Each item includes the protocol type, and optional paths and request headers. When you update this parameter, the entire list is replaced.
     */
    protocol?: CreateCustomAgentRequestBodyProtocol[];
    /**
     * @remarks
     * The ARN of the RAM role used by the agent to access user cloud resources. The role must have permissions to access the cloud resources.
     *
     * This parameter is required.
     *
     * @example
     * acs:ram::1234567890123456:role/agentcore-runtime-role
     */
    roleArn?: string;
    /**
     * @remarks
     * The runtime configuration. You must provide both compute and sessionPolicy. Omitted fields in hpa use default values.
     *
     * This parameter is required.
     */
    runtime?: CreateCustomAgentRequestBodyRuntime;
    /**
     * @remarks
     * Specifies whether to use the image cache. If omitted during creation, the default value is false. You can explicitly set it to true or false. The new contract rejects null and invalid types. Existing compatible endpoints handle this based on migration agreements. In the current phase, the custom source is normalized to false by the console. The frontend omits it, and explicit true is rejected. The platform copy is still retained.
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
export declare class CreateCustomAgentRequest extends $dara.Model {
    /**
     * @remarks
     * The JSON configuration of the custom code or image agent. You must specify name, artifact, roleArn, and runtime.
     */
    body?: CreateCustomAgentRequestBody;
    /**
     * @remarks
     * The idempotency token passed as a query parameter. This parameter is required when you explicitly submit a customImage or set container.type to custom. It is optional when you submit an ACR image or a code package. The token must be 1 to 128 characters in length and can contain letters, digits, periods, underscores, colons, and hyphens. Reuse the same token for retries of the same submission. If you use the same token for different parameters, the request is rejected.
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
