import * as $dara from '@darabonba/typescript';
export declare class GetCustomAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
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
     * Specifies whether the mount is read-only. The default value is false if omitted. This setting is independent of the RAM role read-only policy.
     *
     * @example
     * false
     */
    readOnly?: boolean;
    /**
     * @remarks
     * The AgenticFS access point domain name used for the mount.
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
export declare class GetCustomAgentResponseBodyDataArtifactCode extends $dara.Model {
    /**
     * @remarks
     * The startup command for the code package. This parameter is required in code package mode. The working directory is the extracted code root directory /code, for example, python main.py. Quotes and escapes are supported. Environment variables, pipes, and logical operations are not automatically expanded. For complex commands, use a script within the package.
     *
     * This parameter is required.
     *
     * @example
     * python main.py
     */
    entrypoint?: string;
    /**
     * @remarks
     * The identifier of the currently saved code runtime environment configuration. The runtime image uses the saved snapshot. Adding a new version to the directory does not automatically change the existing configuration.
     *
     * This parameter is required.
     *
     * @example
     * python3.12
     */
    languageRuntime?: string;
    /**
     * @remarks
     * The fixed oss:// address of the platform code package referenced by the currently saved configuration. This address does not include the signature parameters of the source HTTPS link. You can use this address to reuse an existing code package. To download the content, call GetAgentCodePackageDownloadUrl.
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
export declare class GetCustomAgentResponseBodyDataArtifactContainer extends $dara.Model {
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
export declare class GetCustomAgentResponseBodyDataArtifact extends $dara.Model {
    /**
     * @remarks
     * The code package deployment configuration. This parameter is mutually exclusive with container. The code package must be in ZIP or TAR.GZ format. Dependencies must be packaged by the user. The platform does not install dependencies or perform online builds.
     */
    code?: GetCustomAgentResponseBodyDataArtifactCode;
    /**
     * @remarks
     * The latest submitted ACR container image configuration.
     */
    container?: GetCustomAgentResponseBodyDataArtifactContainer;
    /**
     * @remarks
     * The TCP port on which the agent service listens.
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
export declare class GetCustomAgentResponseBodyDataCodePackageInfo extends $dara.Model {
    /**
     * @remarks
     * The CRC64 value of the code package object.
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
export declare class GetCustomAgentResponseBodyDataCurrentImagePullNetwork extends $dara.Model {
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
     * The network type. This parameter is required when submitting pullNetwork and is validated by the backend. The default value is public network for new creations. This network is independent of the agent runtime network.
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
export declare class GetCustomAgentResponseBodyDataCurrentImage extends $dara.Model {
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
    pullNetwork?: GetCustomAgentResponseBodyDataCurrentImagePullNetwork;
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
export declare class GetCustomAgentResponseBodyDataCustomImagePullNetwork extends $dara.Model {
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
     * The network type. This parameter is required when submitting pullNetwork and is validated by the backend. The default value is public network for new creations. This network is independent of the agent runtime network.
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
export declare class GetCustomAgentResponseBodyDataCustomImage extends $dara.Model {
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
    pullNetwork?: GetCustomAgentResponseBodyDataCustomImagePullNetwork;
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
export declare class GetCustomAgentResponseBodyDataEnvironmentVariables extends $dara.Model {
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
export declare class GetCustomAgentResponseBodyDataEnvironment extends $dara.Model {
    /**
     * @remarks
     * The list of recently submitted environment variables.
     */
    variables?: GetCustomAgentResponseBodyDataEnvironmentVariables[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetCustomAgentResponseBodyDataHealthCheck extends $dara.Model {
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
export declare class GetCustomAgentResponseBodyDataImagePreparation extends $dara.Model {
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
     * The ID of the task submitted from the console. This is not the RM operationId.
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
export declare class GetCustomAgentResponseBodyDataLatestExecutionError extends $dara.Model {
    /**
     * @remarks
     * The reason code for the waiting or execution failure of the latest configuration. This is used to determine the subsequent processing method.
     *
     * This parameter is required.
     *
     * @example
     * AgentExecutionFailed
     */
    code?: string;
    /**
     * @remarks
     * The description of the reason why the latest configuration is waiting or failed to execute. Refer to the code and retryable fields to determine what to do next.
     *
     * This parameter is required.
     *
     * @example
     * Agent execution failed. Check the configuration and resubmit
     */
    message?: string;
    /**
     * @remarks
     * Specifies whether automatic retry is enabled. If true, you can query again later. If false, check and fix the configuration based on the reason, and then resubmit.
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
export declare class GetCustomAgentResponseBodyDataLoggingSls extends $dara.Model {
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
export declare class GetCustomAgentResponseBodyDataLogging extends $dara.Model {
    /**
     * @remarks
     * The Simple Log Service (SLS) log delivery destination.
     */
    sls?: GetCustomAgentResponseBodyDataLoggingSls;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetCustomAgentResponseBodyDataNetworkAccessInternet extends $dara.Model {
    /**
     * @remarks
     * Specifies whether Internet access is allowed on the agent side. The actual access is still restricted by the workspace.
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
export declare class GetCustomAgentResponseBodyDataNetworkAccessVpc extends $dara.Model {
    /**
     * @remarks
     * Specifies whether access to the user VPC configured for the workspace is allowed on the agent side. The actual access is still restricted by the workspace.
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
export declare class GetCustomAgentResponseBodyDataNetwork extends $dara.Model {
    /**
     * @remarks
     * The Internet access configuration of the agent. If this field is not configured, Internet access is allowed on the agent side but is still restricted by the workspace.
     */
    accessInternet?: GetCustomAgentResponseBodyDataNetworkAccessInternet;
    /**
     * @remarks
     * The user VPC access configuration of the agent. If this field is not configured, user VPC access is allowed on the agent side but is still restricted by the workspace.
     */
    accessVpc?: GetCustomAgentResponseBodyDataNetworkAccessVpc;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetCustomAgentResponseBodyDataObservability extends $dara.Model {
    /**
     * @remarks
     * Specifies whether agent observability is enabled.
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
export declare class GetCustomAgentResponseBodyDataOssMounts extends $dara.Model {
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
     * The OSS mount directory in the container, located under /mnt/oss/.
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
     * Specifies whether the mount is read-only. The default value is false if omitted. This setting is independent of the RAM role read-only policy.
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
export declare class GetCustomAgentResponseBodyDataProtocolPaths extends $dara.Model {
    /**
     * @remarks
     * The usage description of the current API path.
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
export declare class GetCustomAgentResponseBodyDataProtocol extends $dara.Model {
    /**
     * @remarks
     * The request header configuration for the current protocol, where the key is the name and the value is a string.
     */
    headers?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The list of API paths corresponding to the current protocol.
     */
    paths?: GetCustomAgentResponseBodyDataProtocolPaths[];
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
export declare class GetCustomAgentResponseBodyDataRuntimeCompute extends $dara.Model {
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
export declare class GetCustomAgentResponseBodyDataRuntimeHpa extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable elastic scaling. Valid values:
     * - true: Enabled.
     * - false: Disabled.
     *
     * This parameter is required.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The configured maximum number of concurrent sessions per runtime instance.
     *
     * @example
     * 100
     */
    maxConcurrentSessionsPerSandbox?: number;
    /**
     * @remarks
     * The configured maximum number of runtime instances.
     *
     * @example
     * 10
     */
    maxSandboxCount?: number;
    /**
     * @remarks
     * The configured minimum number of runtime instances.
     *
     * @example
     * 1
     */
    minSandboxCount?: number;
    /**
     * @remarks
     * The configured session idle timeout limit, in seconds.
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
export declare class GetCustomAgentResponseBodyDataRuntimeSessionPolicy extends $dara.Model {
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
     * The session policy type. Valid values:
     * - AFFINITY: Session affinity.
     * - ISOLATED_HEADER_FIELD: Associates sessions by using the request header specified in headerName.
     * - ISOLATED_COOKIE: Not recommended.
     * The compatible value DISABLED in requests is returned as AFFINITY.
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
export declare class GetCustomAgentResponseBodyDataRuntime extends $dara.Model {
    /**
     * @remarks
     * The compute resource configuration for the agent runtime instance.
     *
     * This parameter is required.
     */
    compute?: GetCustomAgentResponseBodyDataRuntimeCompute;
    /**
     * @remarks
     * The elastic policy configuration for the agent.
     */
    hpa?: GetCustomAgentResponseBodyDataRuntimeHpa;
    /**
     * @remarks
     * The session policy configuration for the agent.
     *
     * This parameter is required.
     */
    sessionPolicy?: GetCustomAgentResponseBodyDataRuntimeSessionPolicy;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetCustomAgentResponseBodyData extends $dara.Model {
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
     * The unique identifier of the custom agent. You can obtain this value from the response of CreateCustomAgent or ListCustomAgents.
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
    agenticFsMounts?: GetCustomAgentResponseBodyDataAgenticFsMounts[];
    /**
     * @remarks
     * The latest submitted deployment artifact configuration, including the service listening port and ACR container image. To determine whether the configuration has taken effect, check the latestVersionStatus parameter.
     */
    artifact?: GetCustomAgentResponseBodyDataArtifact;
    /**
     * @remarks
     * The currently saved code package information.
     */
    codePackageInfo?: GetCustomAgentResponseBodyDataCodePackageInfo;
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
     * The time when the agent was created. The time is in ISO 8601 format. The trailing Z indicates the UTC time zone. Fractional seconds may be included.
     *
     * @example
     * 2026-10-10T06:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The image source snapshot of the current active configuration version. The value is null before the initial configuration takes effect. This parameter does not indicate the health status.
     */
    currentImage?: GetCustomAgentResponseBodyDataCurrentImage;
    /**
     * @remarks
     * The recently saved source and its verified username. The source may be in preparation or failed. The password is not returned.
     */
    customImage?: GetCustomAgentResponseBodyDataCustomImage;
    /**
     * @remarks
     * The deployment method of the agent. Custom agents are deployed and managed by the platform. The value MANAGED is returned.
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
     * Custom agent that provides conversational services
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
    environment?: GetCustomAgentResponseBodyDataEnvironment;
    /**
     * @remarks
     * The HTTP health check configuration for the agent. This field is empty if not configured.
     */
    healthCheck?: GetCustomAgentResponseBodyDataHealthCheck;
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
     * The currently associated image preparation task. The phase indicates acceptance. Query the preparation API for real-time progress. Normal saves do not create image preparation tasks.
     */
    imagePreparation?: GetCustomAgentResponseBodyDataImagePreparation;
    /**
     * @remarks
     * The waiting or execution error of the latest configuration version. This is returned only when the version is waiting for a retry or fails to execute.
     */
    latestExecutionError?: GetCustomAgentResponseBodyDataLatestExecutionError;
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
     * The execution status corresponding to latestSpecVersion. Valid values: pending (waiting for execution), processing (executing), waiting_retry (waiting for retry), succeeded (executed successfully), failed (execution failed), and superseded (superseded by a subsequent version).
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
     * The recently submitted log delivery configuration.
     */
    logging?: GetCustomAgentResponseBodyDataLogging;
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
     * The network access configuration of the agent. The actual access scope is also restricted by the workspace network configuration.
     */
    network?: GetCustomAgentResponseBodyDataNetwork;
    /**
     * @remarks
     * The observability configuration for high-code agents.
     */
    observability?: GetCustomAgentResponseBodyDataObservability;
    /**
     * @remarks
     * The list of recently submitted OSS directory mounts.
     */
    ossMounts?: GetCustomAgentResponseBodyDataOssMounts[];
    /**
     * @remarks
     * The list of invocation protocol configurations for the agent.
     */
    protocol?: GetCustomAgentResponseBodyDataProtocol[];
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
    runtime?: GetCustomAgentResponseBodyDataRuntime;
    /**
     * @remarks
     * The count of runtime instances by phase. Keys include PENDING (creating or initializing), RUNNING (running), HIBERNATING (hibernating), HIBERNATED (hibernated), RESUMING (resuming), TERMINATING (terminating), and FAILED (failed). Only phases that actually occur are returned. Missing keys are treated as 0.
     */
    sandboxPhaseCounts?: {
        [key: string]: number;
    };
    /**
     * @remarks
     * The overall status of the agent. Valid values:
     * - Creating: Creating.
     * - Running: Running.
     * - Failed: Failed.
     * - Updating: Updating.
     * - Deleting: Deleting.
     * - Deleted: Deleted.
     * To check the execution progress of the latest configuration, query latestVersionStatus.
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
export declare class GetCustomAgentResponseBody extends $dara.Model {
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
     * The latest submitted configuration and status of the custom agent. To determine whether the configuration has taken effect, check the latestVersionStatus parameter.
     *
     * This parameter is required.
     */
    data?: GetCustomAgentResponseBodyData;
    /**
     * @remarks
     * The HTTP status code of the request. A value of 200 indicates success.
     *
     * This parameter is required.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The result message of the request. The value is success if the request is successful.
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
     * Indicates whether the request was processed successfully. A value of true indicates success. Note that a successful creation, update, or deletion response does not mean that the background operation is complete.
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
