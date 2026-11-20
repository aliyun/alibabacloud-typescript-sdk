import * as $dara from '@darabonba/typescript';
export declare class GetMcpResponseBodyDataAuthCodePackage extends $dara.Model {
    /**
     * @remarks
     * The API key used to verify the MCP caller.
     *
     * @example
     * example-api-key
     */
    apiKey?: string;
    /**
     * @remarks
     * The name of the request header that carries the API key.
     *
     * @example
     * X-API-Key
     */
    headerName?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataAuthDirectProxy extends $dara.Model {
    /**
     * @remarks
     * The name.
     *
     * @example
     * mcp-example
     */
    name?: string;
    /**
     * @remarks
     * The value of the authentication parameter.
     *
     * @example
     * example-credential
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
export declare class GetMcpResponseBodyDataAuthHttpToMcp extends $dara.Model {
    /**
     * @remarks
     * The authentication credential.
     *
     * @example
     * example-credential
     */
    credential?: string;
    /**
     * @remarks
     * The ID of the authentication scheme.
     *
     * @example
     * mcp-1234567890abcdef
     */
    id?: string;
    /**
     * @remarks
     * The name.
     *
     * @example
     * mcp-example
     */
    name?: string;
    /**
     * @remarks
     * The location of the credential.
     *
     * @example
     * header
     */
    position?: string;
    /**
     * @remarks
     * The type.
     *
     * @example
     * basic
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
export declare class GetMcpResponseBodyDataAuth extends $dara.Model {
    /**
     * @remarks
     * The caller API key authentication configuration for the code deployment MCP.
     */
    codePackage?: GetMcpResponseBodyDataAuthCodePackage;
    /**
     * @remarks
     * The authentication configuration for the direct proxy.
     */
    directProxy?: GetMcpResponseBodyDataAuthDirectProxy;
    /**
     * @remarks
     * Indicates whether the configuration is enabled.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The list of authentication configurations for HTTP_TO_MCP.
     */
    httpToMcp?: GetMcpResponseBodyDataAuthHttpToMcp[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataDeploymentConfigAccessControl extends $dara.Model {
    /**
     * @remarks
     * The ID of the AgentCore credential referenced when the mode is set to CREDENTIAL.
     *
     * @example
     * credential-id
     */
    credentialId?: string;
    /**
     * @remarks
     * Specifies whether to enable entry access control.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The access control mode. Valid values: ANONYMOUS indicates anonymous access. CREDENTIAL indicates that AgentCore access credentials are used.
     *
     * @example
     * CREDENTIAL
     */
    mode?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
    /**
     * @remarks
     * Specifies whether authorization is enabled.
     */
    authorizationEnabled?: boolean;
    /**
     * @remarks
     * The credential provider ARN.
     *
     * @example
     * acs:agentidentity:cn-hangzhou:1234567890123456:provider/example
     */
    credentialProviderArn?: string;
    /**
     * @remarks
     * The credential provider type.
     *
     * @example
     * oauth2
     */
    credentialProviderType?: string;
    /**
     * @remarks
     * Specifies whether agent identity is enabled.
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
export declare class GetMcpResponseBodyDataDeploymentConfigCodeConfiguration extends $dara.Model {
    /**
     * @remarks
     * The temporary code package token returned by GetMcpCodePackageUploadUrl. It is used to create or update a code deployment after a presigned upload is completed.
     *
     * @example
     * upload-token
     */
    codePackageToken?: string;
    /**
     * @remarks
     * The complete startup command, passed sequentially by parameter boundaries. For example, when using supergateway to start a stdio MCP, pass supergateway, --stdio, the complete subcommand, and the remaining parameters.
     */
    command?: string[];
    /**
     * @remarks
     * The runtime of the code package. Valid values: python3.13, nodejs22, and java17.
     *
     * @example
     * python3.13
     */
    language?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataDeploymentConfigContainerConfiguration extends $dara.Model {
    /**
     * @remarks
     * The ACR instance ID.
     *
     * @example
     * cri-example
     */
    acrInstanceId?: string;
    /**
     * @remarks
     * The startup command.
     */
    command?: string[];
    /**
     * @remarks
     * The container entrypoint parameters.
     */
    entrypoint?: string[];
    /**
     * @remarks
     * The container image address.
     *
     * @example
     * registry.cn-hangzhou.aliyuncs.com/example/mcp:1.0.0
     */
    image?: string;
    /**
     * @remarks
     * The image registry type.
     *
     * @example
     * ACR
     */
    imageRegistryType?: string;
    /**
     * @remarks
     * The MCP runtime mode. Custom containers must expose the standard MCP themselves. The value is SELF_HOSTED.
     *
     * @example
     * SELF_HOSTED
     */
    mcpRuntimeMode?: string;
    /**
     * @remarks
     * The container source type. This value is currently fixed to CONTAINER_IMAGE.
     *
     * @example
     * CONTAINER_IMAGE
     */
    sourceType?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataDeploymentConfigHookConfigurationHooks extends $dara.Model {
    /**
     * @remarks
     * The API version of the hook.
     *
     * @example
     * 1.0
     */
    apiVersion?: string;
    /**
     * @remarks
     * The description of the hook.
     *
     * @example
     * Record MCP tool invocation
     */
    description?: string;
    /**
     * @remarks
     * Specifies whether to enable the hook.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The hook event.
     *
     * @example
     * PRE_CALL_TOOL
     */
    event?: string;
    /**
     * @remarks
     * The request headers of the hook.
     */
    headers?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The timeout period of the hook, in milliseconds.
     *
     * @example
     * 3000
     */
    timeout?: number;
    /**
     * @remarks
     * The callback URL of the hook.
     *
     * @example
     * https://example.com/mcp-hook
     */
    url?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataDeploymentConfigHookConfiguration extends $dara.Model {
    /**
     * @remarks
     * The ordered list of hooks. The PRE_LIST_TOOLS, PRE_CALL_TOOL, POST_LIST_TOOLS, and POST_CALL_TOOL hooks are executed in the order of the array.
     */
    hooks?: GetMcpResponseBodyDataDeploymentConfigHookConfigurationHooks[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataDeploymentConfigLogConfiguration extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to collect instance metrics.
     */
    enableInstanceMetrics?: boolean;
    /**
     * @remarks
     * Specifies whether to collect request metrics.
     */
    enableRequestMetrics?: boolean;
    /**
     * @remarks
     * The start rule for splitting Function Compute logs.
     *
     * @example
     * DefaultRegex
     */
    logBeginRule?: string;
    /**
     * @remarks
     * The name of the Logstore.
     *
     * @example
     * mcp-logs
     */
    logstore?: string;
    /**
     * @remarks
     * The name of the Simple Log Service project.
     *
     * @example
     * agentcore-mcp-logs
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
export declare class GetMcpResponseBodyDataDeploymentConfigMcpConfiguration extends $dara.Model {
    /**
     * @remarks
     * The MCP endpoint path, such as /mcp or /sse.
     *
     * @example
     * /mcp
     */
    endpointPath?: string;
    /**
     * @remarks
     * The session concurrency per instance. This value is currently fixed to 1.
     *
     * @example
     * 1
     */
    sessionConcurrencyPerInstance?: number;
    /**
     * @remarks
     * The session idle timeout period. Unit: seconds. Default value: 1800.
     *
     * @example
     * 1800
     */
    sessionIdleTimeoutSeconds?: number;
    /**
     * @remarks
     * The maximum session lifetime. Unit: seconds. Default value: 21600.
     *
     * @example
     * 21600
     */
    sessionMaxLifetimeSeconds?: number;
    /**
     * @remarks
     * The session mode. This parameter applies only to StreamableHTTP. Default value for creation: STATEFUL. If omitted during an update, the original value is retained. STATELESS disables Function Compute session affinity, and the stdio gateway does not enable stateful mode. Native HTTP services must support stateless MCP themselves.
     *
     * @example
     * STATEFUL
     */
    sessionMode?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable TLS.
     */
    enableTls?: boolean;
    /**
     * @remarks
     * The local mount directory.
     *
     * @example
     * /mnt/data
     */
    mountDir?: string;
    /**
     * @remarks
     * The NAS service address.
     *
     * @example
     * example.cn-hangzhou.nas.aliyuncs.com
     */
    serverAddr?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataDeploymentConfigNasConfiguration extends $dara.Model {
    /**
     * @remarks
     * The user group ID.
     *
     * @example
     * 1000
     */
    groupId?: number;
    /**
     * @remarks
     * The list of NAS mount points.
     */
    mountPoints?: GetMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints[];
    /**
     * @remarks
     * The user ID.
     *
     * @example
     * 1000
     */
    userId?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataDeploymentConfigNetworkConfiguration extends $dara.Model {
    /**
     * @remarks
     * The network mode.
     *
     * @example
     * PUBLIC
     */
    networkMode?: string;
    /**
     * @remarks
     * The security group ID.
     *
     * @example
     * sg-example
     */
    securityGroupId?: string;
    /**
     * @remarks
     * The list of vSwitch IDs.
     */
    vSwitchIds?: string[];
    /**
     * @remarks
     * The VPC ID.
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
export declare class GetMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
    /**
     * @remarks
     * The name of the OSS bucket.
     *
     * @example
     * example-bucket
     */
    bucketName?: string;
    /**
     * @remarks
     * The path of the OSS bucket.
     *
     * @example
     * /data
     */
    bucketPath?: string;
    /**
     * @remarks
     * The OSS service endpoint.
     *
     * @example
     * https://oss-cn-hangzhou.aliyuncs.com
     */
    endpoint?: string;
    /**
     * @remarks
     * The local mount directory.
     *
     * @example
     * /mnt/data
     */
    mountDir?: string;
    /**
     * @remarks
     * Specifies whether the mount point is read-only.
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
export declare class GetMcpResponseBodyDataDeploymentConfigOssMountConfiguration extends $dara.Model {
    /**
     * @remarks
     * The list of OSS mount points.
     */
    mountPoints?: GetMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration extends $dara.Model {
    /**
     * @remarks
     * Specifies whether parameter transformation and result enhancement are enabled.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The reserved reference to the parameter transformation and result enhancement rule set.
     *
     * @example
     * rules-1
     */
    ruleSetId?: string;
    /**
     * @remarks
     * The transformation rule version.
     *
     * @example
     * 1.0
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
export declare class GetMcpResponseBodyDataDeploymentConfigProxyConfiguration extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable the MCP proxy.
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
export declare class GetMcpResponseBodyDataDeploymentConfigRuntimeConfiguration extends $dara.Model {
    /**
     * @remarks
     * The CPU specifications. Unit: cores. Default value: 0.25.
     *
     * @example
     * 0.25
     */
    cpu?: number;
    /**
     * @remarks
     * The ephemeral disk size. Unit: MB. Valid values: 512 and 10240.
     *
     * @example
     * 512
     */
    diskSize?: number;
    /**
     * @remarks
     * The environment variables.
     */
    environmentVariables?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The ARN of the RAM role used when user code accesses downstream Alibaba Cloud resources.
     *
     * @example
     * acs:ram::1234567890123456:role/agentcore-mcp-execution
     */
    executionRoleArn?: string;
    /**
     * @remarks
     * The request concurrency per instance. Default value: 200.
     *
     * @example
     * 200
     */
    instanceConcurrency?: number;
    /**
     * @remarks
     * The memory specifications. Unit: MB. Default value: 512.
     *
     * @example
     * 512
     */
    memory?: number;
    /**
     * @remarks
     * The service port. Default value: 9000.
     *
     * @example
     * 9000
     */
    port?: number;
    /**
     * @remarks
     * The function timeout period. Unit: seconds. Default value: 300.
     *
     * @example
     * 300
     */
    timeout?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataDeploymentConfig extends $dara.Model {
    /**
     * @remarks
     * The MCP entry access control configuration.
     */
    accessControl?: GetMcpResponseBodyDataDeploymentConfigAccessControl;
    /**
     * @remarks
     * The agent identity configuration.
     */
    agentIdentityConfiguration?: GetMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration;
    /**
     * @remarks
     * The artifact type. Valid values:
     * - Code: ZIP code package.
     * - Container: Custom container.
     *
     * @example
     * Code
     */
    artifactType?: string;
    /**
     * @remarks
     * The code package configuration.
     */
    codeConfiguration?: GetMcpResponseBodyDataDeploymentConfigCodeConfiguration;
    /**
     * @remarks
     * The custom container configuration.
     */
    containerConfiguration?: GetMcpResponseBodyDataDeploymentConfigContainerConfiguration;
    /**
     * @remarks
     * The hook configuration.
     */
    hookConfiguration?: GetMcpResponseBodyDataDeploymentConfigHookConfiguration;
    /**
     * @remarks
     * The log configuration.
     */
    logConfiguration?: GetMcpResponseBodyDataDeploymentConfigLogConfiguration;
    /**
     * @remarks
     * The MCP session configuration.
     */
    mcpConfiguration?: GetMcpResponseBodyDataDeploymentConfigMcpConfiguration;
    /**
     * @remarks
     * The NAS storage configuration.
     */
    nasConfiguration?: GetMcpResponseBodyDataDeploymentConfigNasConfiguration;
    /**
     * @remarks
     * The network configuration.
     */
    networkConfiguration?: GetMcpResponseBodyDataDeploymentConfigNetworkConfiguration;
    /**
     * @remarks
     * The OSS mount configuration.
     */
    ossMountConfiguration?: GetMcpResponseBodyDataDeploymentConfigOssMountConfiguration;
    /**
     * @remarks
     * The parameter transformation and result enhancement configuration.
     */
    parameterTransformConfiguration?: GetMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration;
    /**
     * @remarks
     * The MCP proxy configuration.
     */
    proxyConfiguration?: GetMcpResponseBodyDataDeploymentConfigProxyConfiguration;
    /**
     * @remarks
     * The runtime and resource configuration.
     */
    runtimeConfiguration?: GetMcpResponseBodyDataDeploymentConfigRuntimeConfiguration;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataMarketSource extends $dara.Model {
    /**
     * @remarks
     * The MCP marketplace template ID.
     *
     * @example
     * market-1
     */
    marketItemId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataOperationError extends $dara.Model {
    /**
     * @remarks
     * Returns only bounded diagnostic codes and does not return the original error body from the origin server.
     *
     * @example
     * PROBE_TIMEOUT
     */
    code?: string;
    /**
     * @remarks
     * The necessary diagnostics that are trimmed and desensitized. It does not contain credentials or original responses.
     *
     * @example
     * The probe deadline was exceeded.
     */
    message?: string;
    /**
     * @remarks
     * Indicates whether the operation is suitable for retry based on a restricted policy. This field does not trigger automatic retries.
     */
    retryable?: boolean;
    /**
     * @remarks
     * The source of the error. Valid values: MAGIC, ROUTER, NETWORK, ORIGIN, and UNKNOWN. The value is determined only based on actual evidence.
     *
     * @example
     * UNKNOWN
     */
    source?: string;
    /**
     * @remarks
     * The detection or release stage where the error occurred.
     *
     * @example
     * INITIALIZE
     */
    stage?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataOperation extends $dara.Model {
    /**
     * @remarks
     * The desensitized error of the current release operation. Gateway or formal link failures after the origin server passes verification are represented by this field.
     */
    error?: GetMcpResponseBodyDataOperationError;
    /**
     * @remarks
     * The identifier of the current or most recent release operation.
     *
     * @example
     * 3541f1af-87cc-45d1-a28e-94ec5633b931
     */
    operationId?: string;
    /**
     * @remarks
     * The release stage, such as compute deployment, origin verification, summary saving, gateway release, entry credential synchronization, formal link verification, or deployment submission. Old tasks retain their original stage semantics.
     *
     * @example
     * VALIDATE_ORIGIN
     */
    stage?: string;
    /**
     * @remarks
     * The operation status. Valid values: PENDING, RUNNING, SUCCEEDED, and FAILED.
     *
     * @example
     * RUNNING
     */
    status?: string;
    /**
     * @remarks
     * The operation type. Valid value: PUBLISH.
     *
     * @example
     * PUBLISH
     */
    type?: string;
    /**
     * @remarks
     * The time when the operation was updated, in ISO 8601 UTC format.
     *
     * @example
     * 2026-11-19T08:30:00Z
     */
    updatedAt?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataOriginProbeLastResultActualConfiguration extends $dara.Model {
    /**
     * @remarks
     * The verified legacy or modern policy. This field is empty if the policy is not confirmed.
     *
     * @example
     * modern
     */
    backendMcpProtocol?: string;
    /**
     * @remarks
     * The verified SSE or StreamableHTTP transport. This field is empty if the transport is not confirmed.
     *
     * @example
     * StreamableHTTP
     */
    protocol?: string;
    /**
     * @remarks
     * The actual negotiated or selected and verified date version. This field is empty if the version is not confirmed.
     *
     * @example
     * 2025-03-26
     */
    protocolVersion?: string;
    /**
     * @remarks
     * The actual session mode. Valid values: STATEFUL, STATELESS, and NOT_APPLICABLE. This field is empty if the mode is not confirmed.
     *
     * @example
     * STATELESS
     */
    sessionMode?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataOriginProbeLastResultError extends $dara.Model {
    /**
     * @remarks
     * Returns only bounded diagnostic codes and does not return the original error body from the origin server.
     *
     * @example
     * PROBE_TIMEOUT
     */
    code?: string;
    /**
     * @remarks
     * The necessary diagnostics that are trimmed and desensitized. It does not contain credentials or original responses.
     *
     * @example
     * The probe deadline was exceeded.
     */
    message?: string;
    /**
     * @remarks
     * Indicates whether the operation is suitable for retry based on a restricted policy. This field does not trigger automatic retries.
     */
    retryable?: boolean;
    /**
     * @remarks
     * The source of the error. Valid values: MAGIC, ROUTER, NETWORK, ORIGIN, and UNKNOWN. The value is determined only based on actual evidence.
     *
     * @example
     * UNKNOWN
     */
    source?: string;
    /**
     * @remarks
     * The detection or release stage where the error occurred.
     *
     * @example
     * INITIALIZE
     */
    stage?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataOriginProbeLastResult extends $dara.Model {
    /**
     * @remarks
     * The actual configuration confirmed by evidence in the current verification. This field is empty if no confirmed information is available and is not inferred from the expected configuration.
     */
    actualConfiguration?: GetMcpResponseBodyDataOriginProbeLastResultActualConfiguration;
    /**
     * @remarks
     * The verification error. This field is empty if the verification is successful. It saves only the desensitized diagnostics required for the current verification.
     */
    error?: GetMcpResponseBodyDataOriginProbeLastResultError;
    /**
     * @remarks
     * The time of the current origin verification, in ISO 8601 UTC format.
     *
     * @example
     * 2026-11-19T08:30:00Z
     */
    probedAt?: string;
    /**
     * @remarks
     * The verification stage. Valid values: CONNECT, DISCOVER, INITIALIZE, SESSION_CHECK, CLEANUP, and COMPLETE.
     *
     * @example
     * COMPLETE
     */
    stage?: string;
    /**
     * @remarks
     * The verification result. Valid values: SUCCESS and FAILED. The result is SUCCESS if the protocol and applicable session checks pass. Not declaring any capabilities does not affect the passing status.
     *
     * @example
     * SUCCESS
     */
    status?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataOriginProbe extends $dara.Model {
    /**
     * @remarks
     * Returned only for CODE_PACKAGE deployments. This field is cleared when a new task starts and is empty if no verification has been performed or if an old task did not perform verification. If a subsequent release fails, the current summary is retained, which does not indicate real-time health or the active version status.
     */
    lastResult?: GetMcpResponseBodyDataOriginProbeLastResult;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataTemplate extends $dara.Model {
    /**
     * @remarks
     * The template version currently applied to the MCP.
     *
     * @example
     * 1.0.0
     */
    appliedTemplateVersion?: string;
    /**
     * @remarks
     * The latest template version.
     *
     * @example
     * 1.1.0
     */
    latestTemplateVersion?: string;
    /**
     * @remarks
     * The template schema version.
     *
     * @example
     * 1.0
     */
    schemaVersion?: string;
    /**
     * @remarks
     * The template input schema, represented as a JSON Schema string.
     *
     * @example
     * {"type":"object","properties":{"addresses":{"type":"array","items":{"type":"string"}}}}
     */
    templateInputSchema?: string;
    /**
     * @remarks
     * Specifies whether an updated template version is available.
     */
    updateAvailable?: boolean;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of MCP service addresses.
     */
    addresses?: string[];
    /**
     * @remarks
     * The backend authentication configuration. The enabled field indicates whether it is enabled. The directProxy field specifies the custom authentication header for the direct proxy. The httpToMcp field specifies the list of OpenAPI credentials for HTTP_TO_MCP.
     */
    auth?: GetMcpResponseBodyDataAuth;
    /**
     * @remarks
     * The saved legacy or modern backend policy, which is separate from the transport indicated by the protocol and does not indicate verification. This field is not saved for new CODE_PACKAGE deployments. For historical CODE_PACKAGE deployments, the saved value does not control Function Compute session affinity or the gateway protocol. For the actual protocol, refer to OriginProbe.LastResult.ActualConfiguration.BackendMcpProtocol. Returns null for historical deployments with unspecified values and HTTP_TO_MCP deployments.
     *
     * @example
     * modern
     */
    backendMcpProtocol?: string;
    /**
     * @remarks
     * The time when the MCP was created, in ISO 8601 UTC format.
     *
     * @example
     * 2026-08-23T00:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The custom tags. Multiple tags are supported.
     */
    customTags?: string[];
    /**
     * @remarks
     * The deployment configuration for code-deployed MCP.
     */
    deploymentConfig?: GetMcpResponseBodyDataDeploymentConfig;
    /**
     * @remarks
     * The description.
     *
     * @example
     * Sample description to illustrate the purpose of the resource
     */
    description?: string;
    /**
     * @remarks
     * The MCP endpoint that can be called by users or agents. This field is empty before the deployment is completed.
     *
     * @example
     * https://example.com/mcp
     */
    endpoint?: string;
    /**
     * @remarks
     * The Function Compute function name for the CODE_PACKAGE MCP. This field is empty before deployment is complete and for other types.
     *
     * @example
     * agentcore-mcp-example
     */
    functionName?: string;
    /**
     * @remarks
     * The MCP source marketplace template.
     */
    marketSource?: GetMcpResponseBodyDataMarketSource;
    /**
     * @remarks
     * The MCP server configuration.
     *
     * @example
     * {"type":"object"}
     */
    mcpServerConfig?: string;
    /**
     * @remarks
     * The MCP service ID.
     *
     * @example
     * mcp-1234567890abcdef
     */
    mcpServerId?: string;
    /**
     * @remarks
     * The name.
     *
     * @example
     * mcp-example
     */
    name?: string;
    /**
     * @remarks
     * The official usage tag, which is managed by the server.
     *
     * @example
     * KNOWLEDGE_BASE
     */
    officialTag?: string;
    /**
     * @remarks
     * The read-only progress that reuses existing release tasks. It does not change the primary status of the resource. This field is empty if no historical operation information is available.
     */
    operation?: GetMcpResponseBodyDataOperation;
    /**
     * @remarks
     * Returns the minimal origin verification summary of the most recent task only for code deployments. This field is empty for direct connection and HTTP-to-MCP deployments. Querying this field does not trigger probing.
     */
    originProbe?: GetMcpResponseBodyDataOriginProbe;
    /**
     * @remarks
     * The optional saved metadata for the origin MCP protocol date display, in YYYY-MM-DD format. You can specify this field during creation and modify it during updates. If omitted during an update, the current value is retained. This field is used only for saving and displaying information. It is not a software version, does not restrict the external gateway protocol, does not control backend requests, and does not indicate that real-time verification has passed. Returns null if omitted during creation and not updated, missing in historical data, or used in HTTP_TO_MCP deployments. No default value.
     *
     * @example
     * 2025-03-26
     */
    originProtocolVersion?: string;
    /**
     * @remarks
     * The access permission mode. Valid values:
     * - PUBLIC: Public access.
     * - CONTROLLED: Access controlled based on permission rules.
     *
     * @example
     * CONTROLLED
     */
    permissionMode?: string;
    /**
     * @remarks
     * The MCP protocol.
     *
     * @example
     * SSE
     */
    protocol?: string;
    /**
     * @remarks
     * The status.
     *
     * @example
     * CREATING
     */
    status?: string;
    /**
     * @remarks
     * The reason for the status.
     *
     * @example
     * Resource processing completed
     */
    statusReason?: string;
    /**
     * @remarks
     * The Swagger configuration.
     *
     * @example
     * {"type":"object"}
     */
    swaggerConfig?: string;
    /**
     * @remarks
     * The template schema for the usage-bound MCP version. This field is not returned for regular MCPs.
     */
    template?: GetMcpResponseBodyDataTemplate;
    /**
     * @remarks
     * The type.
     *
     * @example
     * file
     */
    type?: string;
    /**
     * @remarks
     * The time when the MCP was last updated, in ISO 8601 UTC format.
     *
     * @example
     * 2026-08-23T01:00:00Z
     */
    updatedAt?: string;
    /**
     * @remarks
     * The access address of the MCP service.
     *
     * @example
     * https://example.com/artifacts/example.zip
     */
    url?: string;
    /**
     * @remarks
     * Specifies whether the MCP is still subject to the usage constraints of the official template.
     */
    usageActive?: boolean;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * Success
     */
    code?: string;
    /**
     * @remarks
     * The returned data.
     */
    data?: GetMcpResponseBodyData;
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * Request processed successfully
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
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
