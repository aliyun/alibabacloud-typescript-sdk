import * as $dara from '@darabonba/typescript';
export declare class UpdateCustomAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
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
     * The relative directory within the mounted access point.
     *
     * @example
     * workspace/data
     */
    path?: string;
    /**
     * @remarks
     * Specifies whether the mount is read-only. Valid values:
     * - true: Read-only.
     * - false: Read and write.
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
export declare class UpdateCustomAgentResponseBodyDataArtifactCode extends $dara.Model {
    /**
     * @remarks
     * The code package startup command. This parameter is required in code package mode. The working directory is the root directory of the extracted code `/code`, such as `python main.py`. Quotes and escapes are supported, but environment variables, pipes, or logical operations are not automatically expanded. Use scripts in the package for complex commands.
     *
     * This parameter is required.
     *
     * @example
     * python main.py
     */
    entrypoint?: string;
    /**
     * @remarks
     * The identifier of the code runtime environment in the currently saved configuration. The runtime image uses a saved snapshot. Adding a new version to the directory does not automatically change the existing configuration.
     *
     * This parameter is required.
     *
     * @example
     * python3.12
     */
    languageRuntime?: string;
    /**
     * @remarks
     * The fixed oss:// address of the code package referenced in the currently saved configuration. This address does not include the signature parameters of the source HTTPS link. You can use this address to reuse an existing code package. To download the content, call GetAgentCodePackageDownloadUrl.
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
export declare class UpdateCustomAgentResponseBodyDataArtifactContainer extends $dara.Model {
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
     * The image source type. `acr` indicates an ACR image, and `custom` indicates a custom image source. For the corresponding source configuration, see the descriptions of `artifact.container` and `customImage`.
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
export declare class UpdateCustomAgentResponseBodyDataArtifact extends $dara.Model {
    /**
     * @remarks
     * The code package deployment configuration. This parameter is mutually exclusive with container. The code package uses the ZIP or TAR.GZ format. Dependencies are packaged by the user. The platform does not install dependencies or perform online builds.
     */
    code?: UpdateCustomAgentResponseBodyDataArtifactCode;
    /**
     * @remarks
     * The latest submitted ACR container image configuration.
     */
    container?: UpdateCustomAgentResponseBodyDataArtifactContainer;
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
export declare class UpdateCustomAgentResponseBodyDataCodePackageInfo extends $dara.Model {
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
export declare class UpdateCustomAgentResponseBodyDataCurrentImagePullNetwork extends $dara.Model {
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
export declare class UpdateCustomAgentResponseBodyDataCurrentImage extends $dara.Model {
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
     * The dedicated pull network for the custom source.
     */
    pullNetwork?: UpdateCustomAgentResponseBodyDataCurrentImagePullNetwork;
    /**
     * @remarks
     * The repository name from ACR.
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
     * The tag from ACR.
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
export declare class UpdateCustomAgentResponseBodyDataCustomImagePullNetwork extends $dara.Model {
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
export declare class UpdateCustomAgentResponseBodyDataCustomImage extends $dara.Model {
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
    pullNetwork?: UpdateCustomAgentResponseBodyDataCustomImagePullNetwork;
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
export declare class UpdateCustomAgentResponseBodyDataEnvironmentVariables extends $dara.Model {
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
export declare class UpdateCustomAgentResponseBodyDataEnvironment extends $dara.Model {
    /**
     * @remarks
     * The list of recently submitted environment variables.
     */
    variables?: UpdateCustomAgentResponseBodyDataEnvironmentVariables[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomAgentResponseBodyDataHealthCheck extends $dara.Model {
    /**
     * @remarks
     * This parameter is currently not in effect.
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
export declare class UpdateCustomAgentResponseBodyDataImageCachePreparation extends $dara.Model {
    /**
     * @remarks
     * The ID of the currently associated cache.
     *
     * This parameter is required.
     *
     * @example
     * img-example
     */
    imageId?: string;
    /**
     * @remarks
     * The cache status at acceptance.
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
export declare class UpdateCustomAgentResponseBodyDataImagePreparation extends $dara.Model {
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
     * The ID of the task submitted from the console. This is not the RM operation ID.
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
export declare class UpdateCustomAgentResponseBodyDataLatestExecutionError extends $dara.Model {
    /**
     * @remarks
     * The reason code for the wait or execution failure of the latest configuration. This code is used to determine the subsequent processing method.
     *
     * This parameter is required.
     *
     * @example
     * AgentExecutionFailed
     */
    code?: string;
    /**
     * @remarks
     * The description of the reason for the wait or execution failure of the latest configuration. Use this field along with the code and retryable fields to determine what to do next.
     *
     * This parameter is required.
     *
     * @example
     * The agent execution failed. Check the configuration and resubmit
     */
    message?: string;
    /**
     * @remarks
     * Specifies whether an automatic retry is performed. If the value is true, you can query again later. If the value is false, check and fix the configuration based on the reason and resubmit.
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
export declare class UpdateCustomAgentResponseBodyDataLoggingSls extends $dara.Model {
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
export declare class UpdateCustomAgentResponseBodyDataLogging extends $dara.Model {
    /**
     * @remarks
     * The Simple Log Service (SLS) log delivery destination.
     */
    sls?: UpdateCustomAgentResponseBodyDataLoggingSls;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomAgentResponseBodyDataNetworkAccessInternet extends $dara.Model {
    /**
     * @remarks
     * Specifies whether the agent is allowed to access the Internet. The actual access is still limited by the workspace configuration.
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
export declare class UpdateCustomAgentResponseBodyDataNetworkAccessVpc extends $dara.Model {
    /**
     * @remarks
     * Specifies whether the agent is allowed to access the user VPC configured for the workspace. The actual access is still limited by the workspace configuration.
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
export declare class UpdateCustomAgentResponseBodyDataNetwork extends $dara.Model {
    /**
     * @remarks
     * The Internet access configuration of the agent. If this field is not configured, Internet access is allowed on the agent side but is still limited by the workspace configuration.
     */
    accessInternet?: UpdateCustomAgentResponseBodyDataNetworkAccessInternet;
    /**
     * @remarks
     * The user VPC access configuration of the agent. If this field is not configured, user VPC access is allowed on the agent side but is still limited by the workspace configuration.
     */
    accessVpc?: UpdateCustomAgentResponseBodyDataNetworkAccessVpc;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomAgentResponseBodyDataObservability extends $dara.Model {
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
export declare class UpdateCustomAgentResponseBodyDataOssMounts extends $dara.Model {
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
     * The absolute mount path in the container, such as `/data/train`. Mount targets must not be duplicated or form parent-child overwrites, and must avoid platform reserved directories.
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
     * Specifies whether the mount is read-only. Valid values:
     * - true: Read-only.
     * - false: Read and write.
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
export declare class UpdateCustomAgentResponseBodyDataProtocolPaths extends $dara.Model {
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
     * The interface path corresponding to the current protocol.
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
export declare class UpdateCustomAgentResponseBodyDataProtocol extends $dara.Model {
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
    paths?: UpdateCustomAgentResponseBodyDataProtocolPaths[];
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
export declare class UpdateCustomAgentResponseBodyDataRuntimeCompute extends $dara.Model {
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
export declare class UpdateCustomAgentResponseBodyDataRuntimeHpa extends $dara.Model {
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
     * The upper limit of the number of instances in the current configuration.
     *
     * @example
     * 10
     */
    maxSandboxCount?: number;
    /**
     * @remarks
     * The lower limit of the number of instances in the current configuration.
     *
     * @example
     * 1
     */
    minSandboxCount?: number;
    /**
     * @remarks
     * The session idle timeout in the current configuration, in seconds.
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
export declare class UpdateCustomAgentResponseBodyDataRuntimeSessionPolicy extends $dara.Model {
    /**
     * @remarks
     * The name of the HTTP request header used by the session policy. This field is applicable to ISOLATED_HEADER_FIELD.
     *
     * @example
     * X-Session-Id
     */
    headerName?: string;
    /**
     * @remarks
     * The session policy type. Valid values: AFFINITY: session affinity. ISOLATED_HEADER_FIELD: uses the request header specified by headerName to associate sessions. ISOLATED_COOKIE is not recommended. The compatible value DISABLED in the request is returned as AFFINITY.
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
export declare class UpdateCustomAgentResponseBodyDataRuntime extends $dara.Model {
    /**
     * @remarks
     * The compute resource configuration for the agent runtime instance.
     *
     * This parameter is required.
     */
    compute?: UpdateCustomAgentResponseBodyDataRuntimeCompute;
    /**
     * @remarks
     * The currently saved elastic policy configuration, including the enablement status, the upper and lower limits of the number of instances, the maximum number of concurrent sessions per instance, and the session idle timeout. The upper and lower limits of the number of instances are configuration values. The actual number of instances is subject to the snapshot queried by using sandboxPhaseCounts.
     */
    hpa?: UpdateCustomAgentResponseBodyDataRuntimeHpa;
    /**
     * @remarks
     * The session policy configuration of the agent.
     *
     * This parameter is required.
     */
    sessionPolicy?: UpdateCustomAgentResponseBodyDataRuntimeSessionPolicy;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateCustomAgentResponseBodyData extends $dara.Model {
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
     * The unique identifier of the custom code or image agent. You can obtain it from the response of CreateCustomAgent or ListCustomAgents.
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
    agenticFsMounts?: UpdateCustomAgentResponseBodyDataAgenticFsMounts[];
    /**
     * @remarks
     * The latest submitted deployment artifact configuration, including the service listening port and the ACR container image. To check whether the configuration has taken effect, refer to latestVersionStatus.
     */
    artifact?: UpdateCustomAgentResponseBodyDataArtifact;
    /**
     * @remarks
     * The currently saved code package information.
     */
    codePackageInfo?: UpdateCustomAgentResponseBodyDataCodePackageInfo;
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
     * The creation time of the agent. The time is in ISO 8601 format. The trailing Z indicates the UTC time zone. Fractional seconds may be included.
     *
     * @example
     * 2026-10-10T06:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The image source snapshot of the current active configuration version. The value is null before the initial configuration takes effect. This parameter does not indicate the health status.
     */
    currentImage?: UpdateCustomAgentResponseBodyDataCurrentImage;
    /**
     * @remarks
     * The recently saved source and its verified username. The source may be in preparation or failed, and the password is not returned.
     */
    customImage?: UpdateCustomAgentResponseBodyDataCustomImage;
    /**
     * @remarks
     * The deployment method of the agent. For custom code or image agents deployed and managed by the platform, MANAGED is returned.
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
    environment?: UpdateCustomAgentResponseBodyDataEnvironment;
    /**
     * @remarks
     * The HTTP health check configuration for the agent. This field is empty if not configured.
     */
    healthCheck?: UpdateCustomAgentResponseBodyDataHealthCheck;
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
     * The acceptance summary of the current cache preparation.
     */
    imageCachePreparation?: UpdateCustomAgentResponseBodyDataImageCachePreparation;
    /**
     * @remarks
     * The currently associated image preparation task. The phase indicates the acceptance prompt. Query the preparation API for real-time progress. Normal saves do not create image preparations.
     */
    imagePreparation?: UpdateCustomAgentResponseBodyDataImagePreparation;
    /**
     * @remarks
     * The wait or execution error for the latest configuration version. This field is returned only when the version is waiting for a retry or fails to execute.
     */
    latestExecutionError?: UpdateCustomAgentResponseBodyDataLatestExecutionError;
    /**
     * @remarks
     * The latest configuration version number. Updates to the same configuration may retain the original version number. This field does not indicate that the configuration has taken effect.
     *
     * This parameter is required.
     *
     * @example
     * 1
     */
    latestSpecVersion?: number;
    /**
     * @remarks
     * The execution status corresponding to the latestSpecVersion field. Valid values: pending: waiting for execution; processing: executing; waiting_retry: waiting for a retry; succeeded: execution succeeded; failed: execution failed; superseded: superseded by a subsequent version.
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
    logging?: UpdateCustomAgentResponseBodyDataLogging;
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
     * The network access configuration of the agent. The actual access scope is also limited by the network configuration of the workspace.
     */
    network?: UpdateCustomAgentResponseBodyDataNetwork;
    /**
     * @remarks
     * The high-code agent observability configuration.
     */
    observability?: UpdateCustomAgentResponseBodyDataObservability;
    /**
     * @remarks
     * The latest submitted list of OSS directory mounts.
     */
    ossMounts?: UpdateCustomAgentResponseBodyDataOssMounts[];
    /**
     * @remarks
     * The list of invocation protocol configurations for the agent.
     */
    protocol?: UpdateCustomAgentResponseBodyDataProtocol[];
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
     * The latest commit runtime configuration, including compute specifications, session policy, and elastic policy.
     */
    runtime?: UpdateCustomAgentResponseBodyDataRuntime;
    /**
     * @remarks
     * The number of instances by sandbox phase. Keys include PENDING (creating or initializing), RUNNING (running), HIBERNATING (hibernating), HIBERNATED (hibernated), RESUMING (resuming), TERMINATING (terminating), and FAILED (failed). Only phases that actually occur are returned. Missing keys are treated as 0.
     */
    sandboxPhaseCounts?: {
        [key: string]: number;
    };
    /**
     * @remarks
     * The overall status of the agent. Valid values: Creating: The agent is being created. Running: The agent is running. Failed: The agent failed. Updating: The agent is being updated. Deleting: The agent is being deleted. Deleted: The agent is deleted. To check the execution progress of the latest configuration, query latestVersionStatus.
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
export declare class UpdateCustomAgentResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request result code. The value is SUCCESS when the request is successful.
     *
     * This parameter is required.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The latest submitted configuration and status of the custom code or image agent. A successful response indicates that the request is accepted, but the configuration may not have taken effect yet.
     *
     * This parameter is required.
     */
    data?: UpdateCustomAgentResponseBodyData;
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
     * The result message of the request. A value of success indicates that the request is successful.
     *
     * This parameter is required.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The unique identifier of the request, which is used to locate and troubleshoot issues.
     *
     * This parameter is required.
     *
     * @example
     * 550E8400-E29B-41D4-A716-446655440000
     */
    requestId?: string;
    /**
     * @remarks
     * Specifies whether the request is successful. A value of true indicates that the request is successful. A successful creation, update, or deletion does not mean that the backend operation is complete.
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
