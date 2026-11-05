import * as $dara from '@darabonba/typescript';
export declare class CreateCustomAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
    /**
     * @remarks
     * The AgenticFS mount directory in the container, located under /mnt/agenticfs/.
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
     * Specifies whether the mount is read-only. true indicates read-only, and false indicates read and write.
     *
     * @example
     * false
     */
    readOnly?: boolean;
    /**
     * @remarks
     * The domain name of the AgenticFS access point used for the mount.
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
     * The startup command for the code package. This parameter is required in code package mode. The working directory is the root directory of the extracted code, which is /code. Example: python main.py. Quotes and escapes are supported. Environment variables, pipes, and logical operations are not automatically expanded. For complex commands, use a script within the package.
     *
     * This parameter is required.
     *
     * @example
     * python main.py
     */
    entrypoint?: string;
    /**
     * @remarks
     * The identifier of the code runtime environment in the currently saved configuration. The runtime image uses the saved snapshot. Adding a new version to the directory does not automatically change the existing configuration.
     *
     * This parameter is required.
     *
     * @example
     * python3.12
     */
    languageRuntime?: string;
    /**
     * @remarks
     * The oss:// address of the platform-fixed code package referenced in the currently saved configuration. This address does not include the signature parameters of the source HTTPS link. You can use this address to reuse an existing code package. To download the content, call GetAgentCodePackageDownloadUrl.
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
     * The image source type. A value of acr indicates Alibaba Cloud Container Registry (ACR).
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
     * The code package deployment configuration. This parameter is mutually exclusive with the container parameter. The code package must be in ZIP or TAR.GZ format. Dependencies must be packaged by the user. The platform does not install dependencies or perform online builds.
     */
    code?: CreateCustomAgentResponseBodyDataArtifactCode;
    /**
     * @remarks
     * The latest submitted ACR container image configuration.
     */
    container?: CreateCustomAgentResponseBodyDataArtifactContainer;
    /**
     * @remarks
     * The TCP port listened to by the agent service.
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
     * The CRC64 checksum of the code package object.
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
     * The original file name of the code package.
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
     * The format of the code package.
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
     * The security group ID. This parameter is required when type is set to vpc and must belong to the selected VPC.
     *
     * @example
     * sg-example
     */
    securityGroupId?: string;
    /**
     * @remarks
     * The network type. This parameter is required when you submit pullNetwork and is validated by the backend. The default value for new creations is public network, which is independent of the agent runtime network.
     *
     * @example
     * public
     */
    type?: string;
    /**
     * @remarks
     * The security group ID. This parameter is required when type is set to vpc and must belong to the selected VPC.
     *
     * @example
     * vsw-example
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The VPC ID. This parameter is required when type is set to vpc. The associated account and region are validated by the backend.
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
     * The original image address for the custom source.
     *
     * @example
     * registry.example.com/team/agent:v1
     */
    image?: string;
    /**
     * @remarks
     * The instance ID for the ACR source.
     *
     * @example
     * cri-example
     */
    instanceId?: string;
    /**
     * @remarks
     * The namespace for the ACR source.
     *
     * @example
     * team
     */
    namespace?: string;
    /**
     * @remarks
     * The independent pull network for the custom source.
     */
    pullNetwork?: CreateCustomAgentResponseBodyDataCurrentImagePullNetwork;
    /**
     * @remarks
     * The repository name for the ACR source.
     *
     * @example
     * agent
     */
    repo?: string;
    /**
     * @remarks
     * The certificate exception option for custom sources.
     *
     * @example
     * false
     */
    skipTlsVerify?: boolean;
    /**
     * @remarks
     * The image source type of the current effective version.
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
     * The source username of the effective image.
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
     * The security group ID. This parameter is required when type is set to vpc and must belong to the selected VPC.
     *
     * @example
     * sg-example
     */
    securityGroupId?: string;
    /**
     * @remarks
     * The network type. This parameter is required when you submit pullNetwork and is validated by the backend. The default value for new creations is public network, which is independent of the agent runtime network.
     *
     * @example
     * public
     */
    type?: string;
    /**
     * @remarks
     * The security group ID. This parameter is required when type is set to vpc and must belong to the selected VPC.
     *
     * @example
     * vsw-example
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The VPC ID. This parameter is required when type is set to vpc. The associated account and region are validated by the backend.
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
     * The latest saved source address, which may still be in preparation.
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
     * The verified source username.
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
     * The list of recently submitted environment variables.
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
     * This parameter does not take effect currently.
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
     * The port accessed for the HTTP health check.
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
     * The current associated cache ID.
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
     * The current image preparation phase. Configuration acceptance does not mean successful deployment.
     *
     * @example
     * QUEUED
     */
    phase?: string;
    /**
     * @remarks
     * The task ID submitted from the console, which is not the RM operationId.
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
     * The reason code for the waiting or execution failure of the latest configuration, which is used to determine the subsequent processing method.
     *
     * This parameter is required.
     *
     * @example
     * AgentExecutionFailed
     */
    code?: string;
    /**
     * @remarks
     * The description of the reason why the latest configuration is waiting or failed to execute. Refer to the code and retryable fields to determine What to do next.
     *
     * This parameter is required.
     *
     * @example
     * Agent execution failed. Check the configuration and resubmit
     */
    message?: string;
    /**
     * @remarks
     * Specifies whether automatic retry is enabled. If the value is true, you can query again later. If the value is false, check and fix the configuration based on the reason, and then resubmit.
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
     * The name of the SLS Logstore that receives agent logs.
     *
     * @example
     * agent-runtime
     */
    logstore?: string;
    /**
     * @remarks
     * The name of the SLS project that receives agent logs.
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
     * Specifies whether Internet access is allowed on the agent side. The actual access remains restricted by the workspace.
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
     * Specifies whether access to the user VPC configured for the workspace is allowed on the agent side. The actual access remains restricted by the workspace.
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
     * The Internet access configuration of the agent. If this parameter is not configured, Internet access is allowed on the agent side but remains restricted by the workspace.
     */
    accessInternet?: CreateCustomAgentResponseBodyDataNetworkAccessInternet;
    /**
     * @remarks
     * The user VPC access configuration of the agent. If this parameter is not configured, user VPC access is allowed on the agent side but remains restricted by the workspace.
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
     * The OSS mount directory in the container, which is located under /mnt/oss/.
     *
     * @example
     * /mnt/oss/train
     */
    mountPath?: string;
    /**
     * @remarks
     * The object directory prefix in the mounted bucket.
     *
     * @example
     * datasets/train
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. true indicates read-only, and false indicates read and write.
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
     * The purpose description of the current API path.
     *
     * @example
     * AG-UI conversation API
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
     * The list of API paths corresponding to the current protocol.
     */
    paths?: CreateCustomAgentResponseBodyDataProtocolPaths[];
    /**
     * @remarks
     * The invocation protocol type. Valid values:
     * - agui: AG-UI protocol
     * - openai-chat-completion: OpenAI Chat Completions compatible protocol
     * - custom: custom protocol
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
     * - INTERACTIVE: 1 vCPU and 2 GiB of memory
     * - STANDARD: 2 vCPUs and 4 GiB of memory
     * - HEAVY: 4 vCPUs and 8 GiB of memory
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
     * Specifies whether auto scaling is enabled. Valid values:
     * - true: Enabled.
     * - false: Disabled.
     *
     * This parameter is required.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The maximum number of concurrent sessions configured for a single running instance.
     *
     * @example
     * 100
     */
    maxConcurrentSessionsPerSandbox?: number;
    /**
     * @remarks
     * The maximum number of running instances configured.
     *
     * @example
     * 10
     */
    maxSandboxCount?: number;
    /**
     * @remarks
     * The minimum number of running instances configured.
     *
     * @example
     * 1
     */
    minSandboxCount?: number;
    /**
     * @remarks
     * The configured maximum idle time for a session, in seconds.
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
     * The name of the HTTP request header used by the session policy. This parameter is applicable when the session policy type is ISOLATED_HEADER_FIELD.
     *
     * @example
     * X-Session-Id
     */
    headerName?: string;
    /**
     * @remarks
     * The type of the session policy. Valid values:
     * - AFFINITY: Session affinity.
     * - ISOLATED_HEADER_FIELD: Associates sessions by using the request header specified by headerName.
     * ISOLATED_COOKIE is not recommended. The compatible value DISABLED in requests is returned as AFFINITY.
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
     * The unique identifier of the custom agent. You can obtain this ID from the response of CreateCustomAgent or ListCustomAgents.
     *
     * This parameter is required.
     *
     * @example
     * agent-550e8400e29b41d4a716446655440000
     */
    agentId?: string;
    /**
     * @remarks
     * The latest submitted list of additional AgenticFS mounts.
     */
    agenticFsMounts?: CreateCustomAgentResponseBodyDataAgenticFsMounts[];
    /**
     * @remarks
     * The latest submitted deployment artifact configuration, including the service listening port and the ACR container image. To check whether the configuration has taken effect, refer to latestVersionStatus.
     */
    artifact?: CreateCustomAgentResponseBodyDataArtifact;
    /**
     * @remarks
     * The currently saved code package information.
     */
    codePackageInfo?: CreateCustomAgentResponseBodyDataCodePackageInfo;
    /**
     * @remarks
     * The creation method of the agent. The value is CUSTOM for custom agents.
     *
     * @example
     * CUSTOM
     */
    createMode?: string;
    /**
     * @remarks
     * The creation time of the agent. The time is in ISO 8601 format. The trailing Z indicates the UTC time zone. Fractional seconds may be included.
     *
     * @example
     * 2026-10-10T06:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The image source snapshot of the current active configuration version. The value is null before the first configuration takes effect and does not indicate the health status.
     */
    currentImage?: CreateCustomAgentResponseBodyDataCurrentImage;
    /**
     * @remarks
     * The recently saved source and its verified username. The source may be in preparation or failed, and the password is not returned.
     */
    customImage?: CreateCustomAgentResponseBodyDataCustomImage;
    /**
     * @remarks
     * The deployment method of the agent. Custom agents are deployed and managed by the platform, and MANAGED is returned.
     *
     * @example
     * MANAGED
     */
    deployType?: string;
    /**
     * @remarks
     * The description of the agent\\"s purpose.
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
     * The environment variable configuration for the agent process.
     */
    environment?: CreateCustomAgentResponseBodyDataEnvironment;
    /**
     * @remarks
     * The HTTP health check configuration for the agent. This field is empty if not configured.
     */
    healthCheck?: CreateCustomAgentResponseBodyDataHealthCheck;
    /**
     * @remarks
     * The current associated image cache ID.
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
     * The acceptance summary for the current cache preparation.
     */
    imageCachePreparation?: CreateCustomAgentResponseBodyDataImageCachePreparation;
    /**
     * @remarks
     * The current associated image preparation task. The phase indicates the acceptance prompt. Query the preparation API for real-time progress. Normal saves do not create image preparation tasks.
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
     * The execution status corresponding to latestSpecVersion. Valid values:
     * - pending: Waiting for execution.
     * - processing: Executing.
     * - waiting_retry: Waiting for retry.
     * - succeeded: Executed successfully.
     * - failed: Execution failed.
     * - superseded: Superseded by a subsequent version.
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
     * The name of the custom agent.
     *
     * This parameter is required.
     *
     * @example
     * my-custom-agent
     */
    name?: string;
    /**
     * @remarks
     * The network access configuration of the agent. The actual access scope is also restricted by the network configuration of the workspace.
     */
    network?: CreateCustomAgentResponseBodyDataNetwork;
    /**
     * @remarks
     * The high-code agent observability configuration.
     */
    observability?: CreateCustomAgentResponseBodyDataObservability;
    /**
     * @remarks
     * The latest submitted list of OSS directory mounts.
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
     * The latest submitted runtime configuration, including compute specifications, session policy, and elastic policy.
     */
    runtime?: CreateCustomAgentResponseBodyDataRuntime;
    /**
     * @remarks
     * The number of instances counted by running instance phase. Keys include PENDING (creating or initializing), RUNNING (running), HIBERNATING (hibernating), HIBERNATED (hibernated), RESUMING (resuming), TERMINATING (terminating), and FAILED (failed). Only phases that actually occur are returned. Missing keys are treated as 0.
     */
    sandboxPhaseCounts?: {
        [key: string]: number;
    };
    /**
     * @remarks
     * The overall status of the agent. Valid values:
     * - Creating: The agent is being created.
     * - Running: The agent is running.
     * - Failed: The agent failed.
     * - Updating: The agent is being updated.
     * - Deleting: The agent is being deleted.
     * - Deleted: The agent is deleted.
     * To query the execution progress of the latest configuration, check latestVersionStatus.
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
     * The image cache switch.
     *
     * This parameter is required.
     *
     * @example
     * true
     */
    useImageCache?: boolean;
    /**
     * @remarks
     * The ID of the workspace to which the custom agent belongs.
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
     * The request result code. The value is SUCCESS if the request is successful.
     *
     * This parameter is required.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The latest submitted configuration and status of the custom agent. A successful response indicates that the request is accepted, but the configuration may not have taken effect yet.
     *
     * This parameter is required.
     */
    data?: CreateCustomAgentResponseBodyData;
    /**
     * @remarks
     * The HTTP status code returned. A value of 200 indicates that the request is successful.
     *
     * This parameter is required.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The message returned. The value is success if the request is successful.
     *
     * This parameter is required.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The ID of the request. You can use the ID to locate and troubleshoot issues.
     *
     * This parameter is required.
     *
     * @example
     * 550E8400-E29B-41D4-A716-446655440000
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful. A value of true indicates success. A successful creation, update, or deletion does not mean that the background operation is complete.
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
