import * as $dara from '@darabonba/typescript';
export declare class CreateCustomAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
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
     * The relative directory within the mounted access point.
     *
     * @example
     * workspace/data
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. A value of true indicates a read-only mount, and a value of false indicates a read/write mount.
     *
     * @example
     * false
     */
    readOnly?: boolean;
    /**
     * @remarks
     * The AgenticFS access point domain name used for mounting.
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
export declare class CreateCustomAgentResponseBodyDataArtifactCode extends $dara.Model {
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
     * The code runtime environment identifier of the currently saved configuration. The runtime image uses a saved snapshot. Adding a new version to the directory does not automatically change the existing configuration.
     *
     * This parameter is required.
     *
     * @example
     * python3.12
     */
    languageRuntime?: string;
    /**
     * @remarks
     * The fixed oss:// address of the code package referenced by the currently saved configuration, excluding the signature parameters of the source HTTPS link. This can be used to reuse an existing code package. To download the content, call GetAgentCodePackageDownloadUrl.
     *
     * This parameter is required.
     *
     * @example
     * oss://agentcore-platform-example/code-packages/workspaces/ws-a1b2c3d4e5f6/550e8400-e29b-41d4-a716-446655440000/package.zip
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
export declare class CreateCustomAgentResponseBodyDataArtifactContainer extends $dara.Model {
    /**
     * @remarks
     * The custom executable program and startup parameters. If not configured, the default startup method of the image is used.
     *
     * @example
     * python app.py
     */
    entrypoint?: string;
    /**
     * @remarks
     * The ID of the ACR instance to which the image repository belongs.
     *
     * @example
     * cri-a1b2c3d4e5f6
     */
    instanceId?: string;
    /**
     * @remarks
     * The namespace to which the ACR image repository belongs.
     *
     * @example
     * my-agent
     */
    namespace?: string;
    /**
     * @remarks
     * The name of the image repository in the ACR namespace.
     *
     * @example
     * chat-agent
     */
    repo?: string;
    /**
     * @remarks
     * The latest submitted image tag.
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
export declare class CreateCustomAgentResponseBodyDataArtifact extends $dara.Model {
    /**
     * @remarks
     * The code package deployment configuration, which is mutually exclusive with container. The code package uses the ZIP or TAR.GZ format. Dependencies are packaged by the user, and the platform does not install dependencies or build online.
     */
    code?: CreateCustomAgentResponseBodyDataArtifactCode;
    /**
     * @remarks
     * The latest submitted ACR container image configuration.
     */
    container?: CreateCustomAgentResponseBodyDataArtifactContainer;
    /**
     * @remarks
     * The TCP port listened on by the agent service.
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
export declare class CreateCustomAgentResponseBodyDataCodePackageInfo extends $dara.Model {
    /**
     * @remarks
     * The CRC64 of the code package object.
     *
     * @example
     * 456
     */
    crc64?: string;
    /**
     * @remarks
     * The ETag of the code package object.
     *
     * @example
     * fixed-etag
     */
    etag?: string;
    /**
     * @remarks
     * The original code package file name.
     *
     * @example
     * main.zip
     */
    fileName?: string;
    /**
     * @remarks
     * The compressed size of the code package.
     *
     * @example
     * 123
     */
    fileSize?: number;
    /**
     * @remarks
     * The code package format.
     *
     * @example
     * zip
     */
    format?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomAgentResponseBodyDataCurrentImagePullNetwork extends $dara.Model {
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
export declare class CreateCustomAgentResponseBodyDataCurrentImage extends $dara.Model {
    /**
     * @remarks
     * The original image address of the custom source.
     *
     * @example
     * registry.example.com/team/agent:v1
     */
    image?: string;
    /**
     * @remarks
     * The instance ID of the ACR source.
     *
     * @example
     * cri-example
     */
    instanceId?: string;
    /**
     * @remarks
     * The namespace of the ACR source.
     *
     * @example
     * team
     */
    namespace?: string;
    /**
     * @remarks
     * The dedicated pull network of the custom source.
     */
    pullNetwork?: CreateCustomAgentResponseBodyDataCurrentImagePullNetwork;
    /**
     * @remarks
     * The repository name of the ACR source.
     *
     * @example
     * agent
     */
    repo?: string;
    /**
     * @remarks
     * The certificate exception option of the custom source.
     *
     * @example
     * false
     */
    skipTlsVerify?: boolean;
    /**
     * @remarks
     * The image source type of the current active version.
     *
     * @example
     * custom
     */
    sourceType?: string;
    /**
     * @remarks
     * The tag of the ACR source.
     *
     * @example
     * v1
     */
    tag?: string;
    /**
     * @remarks
     * The source username of the active image.
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
export declare class CreateCustomAgentResponseBodyDataCustomImagePullNetwork extends $dara.Model {
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
export declare class CreateCustomAgentResponseBodyDataCustomImage extends $dara.Model {
    /**
     * @remarks
     * The recently saved source address, which may still be in preparation.
     *
     * @example
     * registry.example.com/team/agent:v1
     */
    image?: string;
    /**
     * @remarks
     * The saved dedicated pull network.
     */
    pullNetwork?: CreateCustomAgentResponseBodyDataCustomImagePullNetwork;
    /**
     * @remarks
     * The saved HTTPS certificate exception option.
     *
     * @example
     * false
     */
    skipTlsVerify?: boolean;
    /**
     * @remarks
     * The verified username for the source.
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
export declare class CreateCustomAgentResponseBodyDataEnvironmentVariables extends $dara.Model {
    /**
     * @remarks
     * The name of the environment variable.
     *
     * This parameter is required.
     *
     * @example
     * LOG_LEVEL
     */
    name?: string;
    /**
     * @remarks
     * The string value of the environment variable. Empty strings are allowed.
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
export declare class CreateCustomAgentResponseBodyDataEnvironment extends $dara.Model {
    /**
     * @remarks
     * The latest submitted list of environment variables.
     */
    variables?: CreateCustomAgentResponseBodyDataEnvironmentVariables[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomAgentResponseBodyDataHealthCheck extends $dara.Model {
    /**
     * @remarks
     * This parameter does not take effect.
     *
     * @example
     * 1
     *
     * @deprecated
     */
    healthyThreshold?: number;
    /**
     * @remarks
     * The interval between two health checks, in seconds.
     *
     * @example
     * 10
     */
    intervalSeconds?: number;
    /**
     * @remarks
     * The HTTP health check path.
     *
     * @example
     * /healthz
     */
    path?: string;
    /**
     * @remarks
     * The port accessed for HTTP health checks.
     *
     * @example
     * 8080
     */
    port?: number;
    /**
     * @remarks
     * The timeout period for a single health check, in seconds.
     *
     * @example
     * 2
     */
    timeoutSeconds?: number;
    /**
     * @remarks
     * The number of consecutive health check failures required to mark the agent as unhealthy.
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
export declare class CreateCustomAgentResponseBodyDataImageCachePreparation extends $dara.Model {
    /**
     * @remarks
     * The ID of the cache associated with this request.
     *
     * This parameter is required.
     *
     * @example
     * img-example
     */
    imageId?: string;
    /**
     * @remarks
     * The cache status at the time of acceptance.
     *
     * This parameter is required.
     *
     * @example
     * PENDING
     */
    statusAtAcceptance?: string;
    /**
     * @remarks
     * The acceptance status of the cache preparation.
     *
     * This parameter is required.
     *
     * @example
     * ACCEPTED
     */
    submissionStatus?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomAgentResponseBodyDataImagePreparation extends $dara.Model {
    /**
     * @remarks
     * The phase of the current image preparation. Configuration acceptance does not indicate successful deployment.
     *
     * @example
     * QUEUED
     */
    phase?: string;
    /**
     * @remarks
     * The task ID submitted from the console for this operation, which is not the RM operation ID.
     *
     * @example
     * agent-example:1
     */
    preparationId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomAgentResponseBodyDataLatestExecutionError extends $dara.Model {
    /**
     * @remarks
     * The reason code for the waiting or execution failure of the latest configuration, which is used to determine the subsequent processing method. The value is ACRDependencyNotReady when waiting for ACR configuration. Specific failures retain publicly available stable reason codes.
     *
     * This parameter is required.
     *
     * @example
     * AgentExecutionFailed
     */
    code?: string;
    /**
     * @remarks
     * The description of the reason why the latest configuration is waiting or has failed to execute. Refer to code and retryable to determine what to do next.
     *
     * This parameter is required.
     *
     * @example
     * The agent execution failed. Check the configuration and resubmit
     */
    message?: string;
    /**
     * @remarks
     * Specifies whether automatic retries are performed. A value of true indicates that you can query again later. A value of false indicates that you must check and fix the configuration based on the reason before resubmitting.
     *
     * This parameter is required.
     */
    retryable?: boolean;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomAgentResponseBodyDataLoggingSls extends $dara.Model {
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
export declare class CreateCustomAgentResponseBodyDataLogging extends $dara.Model {
    /**
     * @remarks
     * The SLS log delivery destination.
     */
    sls?: CreateCustomAgentResponseBodyDataLoggingSls;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomAgentResponseBodyDataNetworkAccessInternet extends $dara.Model {
    /**
     * @remarks
     * Specifies whether Internet access is allowed on the agent side. The actual access is still limited by the workspace.
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
export declare class CreateCustomAgentResponseBodyDataNetworkAccessVpc extends $dara.Model {
    /**
     * @remarks
     * Specifies whether access to the user VPC configured in the workspace is allowed on the agent side. The actual access is still limited by the workspace.
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
export declare class CreateCustomAgentResponseBodyDataNetwork extends $dara.Model {
    /**
     * @remarks
     * The Internet access configuration of the agent. If this item is not configured, access is allowed on the agent side, but it is still limited by the workspace.
     */
    accessInternet?: CreateCustomAgentResponseBodyDataNetworkAccessInternet;
    /**
     * @remarks
     * The user VPC access configuration of the agent. If this item is not configured, access is allowed on the agent side, but it is still limited by the workspace.
     */
    accessVpc?: CreateCustomAgentResponseBodyDataNetworkAccessVpc;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomAgentResponseBodyDataObservability extends $dara.Model {
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
export declare class CreateCustomAgentResponseBodyDataOssMounts extends $dara.Model {
    /**
     * @remarks
     * The name of the mounted OSS bucket.
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
     * The non-empty relative directory prefix in the currently configured bucket.
     *
     * @example
     * datasets/train
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. A value of true indicates a read-only mount, and a value of false indicates a read/write mount.
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
export declare class CreateCustomAgentResponseBodyDataProtocolPaths extends $dara.Model {
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
     * The API path corresponding to the current protocol.
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
export declare class CreateCustomAgentResponseBodyDataProtocol extends $dara.Model {
    /**
     * @remarks
     * The request header configuration for the current protocol. The key is the header name and the value is a string.
     */
    headers?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The list of API paths for the current protocol.
     */
    paths?: CreateCustomAgentResponseBodyDataProtocolPaths[];
    /**
     * @remarks
     * The invoke protocol type. Valid values:
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
export declare class CreateCustomAgentResponseBodyDataRuntimeCompute extends $dara.Model {
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
export declare class CreateCustomAgentResponseBodyDataRuntimeHpa extends $dara.Model {
    /**
     * @remarks
     * Specifies whether elastic scaling is enabled in the current configuration.
     *
     * This parameter is required.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The maximum number of concurrent sessions per instance in the current configuration.
     *
     * @example
     * 20
     */
    maxConcurrentSessionsPerSandbox?: number;
    /**
     * @remarks
     * The maximum number of instances in the current configuration.
     *
     * @example
     * 10
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
     * The maximum idle time of a session in the current configuration, in seconds.
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
export declare class CreateCustomAgentResponseBodyDataRuntimeSessionPolicy extends $dara.Model {
    /**
     * @remarks
     * The name of the HTTP request header used by the session policy, applicable to ISOLATED_HEADER_FIELD.
     *
     * @example
     * X-Session-Id
     */
    headerName?: string;
    /**
     * @remarks
     * The session policy type. AFFINITY: session affinity. ISOLATED_HEADER_FIELD: uses the request header specified by headerName to associate sessions. ISOLATED_COOKIE is not recommended. The compatible value DISABLED in the request is returned as AFFINITY.
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
export declare class CreateCustomAgentResponseBodyDataRuntime extends $dara.Model {
    /**
     * @remarks
     * The compute resource configuration for the agent runtime instance.
     *
     * This parameter is required.
     */
    compute?: CreateCustomAgentResponseBodyDataRuntimeCompute;
    /**
     * @remarks
     * The elastic policy configuration of the agent.
     */
    hpa?: CreateCustomAgentResponseBodyDataRuntimeHpa;
    /**
     * @remarks
     * The session policy configuration of the agent.
     *
     * This parameter is required.
     */
    sessionPolicy?: CreateCustomAgentResponseBodyDataRuntimeSessionPolicy;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateCustomAgentResponseBodyData extends $dara.Model {
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
     * The unique identifier of the custom code or image agent. You can obtain this ID from the response of CreateCustomAgent or ListCustomAgents.
     *
     * This parameter is required.
     *
     * @example
     * agent-550e8400e29b41d4a716446655440000
     */
    agentId?: string;
    /**
     * @remarks
     * The NAS storage mount configuration. Currently, only the AgenticFS type is supported, which is used to mount file directories in access points to agent runtime instances. This represents the latest submitted NAS mounts.
     */
    agenticFsMounts?: CreateCustomAgentResponseBodyDataAgenticFsMounts[];
    /**
     * @remarks
     * The latest submitted deployment artifact configuration, including the service listening port and ACR container image. To check whether it has taken effect, refer to latestVersionStatus.
     */
    artifact?: CreateCustomAgentResponseBodyDataArtifact;
    /**
     * @remarks
     * The currently saved code package information.
     */
    codePackageInfo?: CreateCustomAgentResponseBodyDataCodePackageInfo;
    /**
     * @remarks
     * The creation method of the agent. The value is CUSTOM for custom code or image agents.
     *
     * @example
     * CUSTOM
     */
    createMode?: string;
    /**
     * @remarks
     * The time when the agent was created. The time is in ISO 8601 format. A trailing Z indicates the UTC time zone. Fractional seconds may be included.
     *
     * @example
     * 2026-10-10T06:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The image source snapshot of the current active configuration version. This value is null before the initial configuration takes effect and does not represent the health status.
     */
    currentImage?: CreateCustomAgentResponseBodyDataCurrentImage;
    /**
     * @remarks
     * The recently saved source and the verified username for the source. The source may be in preparation or failed. The password is not returned.
     */
    customImage?: CreateCustomAgentResponseBodyDataCustomImage;
    /**
     * @remarks
     * The deployment method of the agent. Custom code or image agents are deployed and managed by the platform, and the value is MANAGED.
     *
     * @example
     * MANAGED
     */
    deployType?: string;
    /**
     * @remarks
     * The description of the agent.
     *
     * @example
     * Custom agent that provides conversation services
     */
    description?: string;
    /**
     * @remarks
     * The effective configuration version.
     *
     * This parameter is required.
     *
     * @example
     * 1
     *
     * **if can be null:**
     * true
     */
    effectiveSpecVersion?: number;
    /**
     * @remarks
     * The environment variable configuration of the agent process.
     */
    environment?: CreateCustomAgentResponseBodyDataEnvironment;
    /**
     * @remarks
     * The HTTP health check configuration of the agent. Empty if not configured.
     */
    healthCheck?: CreateCustomAgentResponseBodyDataHealthCheck;
    /**
     * @remarks
     * The ID of the currently associated image cache.
     *
     * This parameter is required.
     *
     * @example
     * img-example
     *
     * **if can be null:**
     * true
     */
    imageCacheId?: string;
    /**
     * @remarks
     * The summary of the acceptance for the current image cache preparation.
     */
    imageCachePreparation?: CreateCustomAgentResponseBodyDataImageCachePreparation;
    /**
     * @remarks
     * The currently associated image preparation task. The phase indicates the acceptance status. Query the preparation API for real-time progress. A standard save operation does not create an image preparation task.
     */
    imagePreparation?: CreateCustomAgentResponseBodyDataImagePreparation;
    /**
     * @remarks
     * The waiting or execution error of the latest configuration version. This field is returned only when the version is waiting for a retry or fails to execute.
     */
    latestExecutionError?: CreateCustomAgentResponseBodyDataLatestExecutionError;
    /**
     * @remarks
     * The latest configuration version number. Updates with the same configuration may retain the original version number. This field does not indicate that the configuration has taken effect.
     *
     * This parameter is required.
     *
     * @example
     * 1
     */
    latestSpecVersion?: number;
    /**
     * @remarks
     * The execution status corresponding to latestSpecVersion. Valid values: pending, processing, waiting_retry, succeeded, failed, and superseded.
     *
     * @example
     * succeeded
     *
     * **if can be null:**
     * true
     */
    latestVersionStatus?: string;
    /**
     * @remarks
     * The latest submitted log delivery configuration.
     */
    logging?: CreateCustomAgentResponseBodyDataLogging;
    /**
     * @remarks
     * The name of the custom code or image agent.
     *
     * This parameter is required.
     *
     * @example
     * my-custom-agent
     */
    name?: string;
    /**
     * @remarks
     * The network access configuration of the agent. The actual access scope is also limited by the workspace network configuration.
     */
    network?: CreateCustomAgentResponseBodyDataNetwork;
    /**
     * @remarks
     * The high-code agent observability configuration.
     */
    observability?: CreateCustomAgentResponseBodyDataObservability;
    /**
     * @remarks
     * The list of recently submitted OSS directory mounts.
     */
    ossMounts?: CreateCustomAgentResponseBodyDataOssMounts[];
    /**
     * @remarks
     * The list of invocation protocol configurations for the agent.
     */
    protocol?: CreateCustomAgentResponseBodyDataProtocol[];
    /**
     * @remarks
     * The region ID of the workspace to which the agent belongs.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ARN of the RAM role used by the agent to access user cloud resources.
     *
     * @example
     * acs:ram::1234567890123456:role/agentcore-runtime-role
     */
    roleArn?: string;
    /**
     * @remarks
     * The latest committed runtime configuration, including compute specifications, session policy, and elastic policy.
     */
    runtime?: CreateCustomAgentResponseBodyDataRuntime;
    /**
     * @remarks
     * The count of instances by runtime phase. Valid keys include PENDING (creating or initializing), RUNNING (running), HIBERNATING (hibernating), HIBERNATED (hibernated), RESUMING (resuming), TERMINATING (terminating), and FAILED (failed). Only phases that actually occur are returned. Missing keys are treated as 0.
     */
    sandboxPhaseCounts?: {
        [key: string]: number;
    };
    /**
     * @remarks
     * The overall status of the agent. Valid values: Creating, Running, Failed, Updating, Deleting, and Deleted. To check the execution progress of the latest configuration, query latestVersionStatus.
     *
     * This parameter is required.
     *
     * @example
     * Running
     */
    status?: string;
    /**
     * @remarks
     * The time when the agent was last updated. The time is in ISO 8601 format. A trailing Z indicates the UTC time zone. Fractional seconds may be included.
     *
     * @example
     * 2026-10-10T06:05:00Z
     */
    updatedAt?: string;
    /**
     * @remarks
     * Specifies whether the image cache is enabled.
     *
     * This parameter is required.
     *
     * @example
     * true
     */
    useImageCache?: boolean;
    /**
     * @remarks
     * The ID of the workspace to which the custom code or image agent belongs.
     *
     * This parameter is required.
     *
     * @example
     * ws-a1b2c3d4e5f6
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
export declare class CreateCustomAgentResponseBody extends $dara.Model {
    /**
     * @remarks
     * The result code of the request. The value is SUCCESS if the request succeeds.
     *
     * This parameter is required.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The latest submitted configuration and status of the custom code or image agent. A successful response indicates that the request is accepted, but the configuration may not have taken effect.
     *
     * This parameter is required.
     */
    data?: CreateCustomAgentResponseBodyData;
    /**
     * @remarks
     * The HTTP status code of the request. The value is 200 if the request succeeds.
     *
     * This parameter is required.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The message that describes the processing result of the request. The value is success if the request succeeds.
     *
     * This parameter is required.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The unique identifier of the request, used to locate and troubleshoot issues.
     *
     * This parameter is required.
     *
     * @example
     * 550E8400-E29B-41D4-A716-446655440000
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was processed successfully. A value of true indicates that the request was processed successfully. However, a successful creation, update, or deletion does not mean that the backend operation is complete.
     *
     * This parameter is required.
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
