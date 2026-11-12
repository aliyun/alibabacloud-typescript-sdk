import * as $dara from '@darabonba/typescript';
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigAccessControl extends $dara.Model {
    /**
     * @remarks
     * The access credential ID. It references an AgentCore credential when the mode is set to CREDENTIAL.
     *
     * @example
     * credential-id
     */
    credentialId?: string;
    /**
     * @remarks
     * Specifies whether to enable entry point access control.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The access control mode. ANONYMOUS indicates anonymous access, and CREDENTIAL indicates that AgentCore access credentials are used.
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
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable authorization.
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
     * Specifies whether to enable Agent Identity.
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
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigCodeConfiguration extends $dara.Model {
    /**
     * @remarks
     * The temporary code package token returned by GetMcpCodePackageUploadUrl. It is used to create or update a code deployment after the presigned upload is completed.
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
     * The code package runtime. Valid values: python3.13, nodejs22, and java17.
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
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigContainerConfiguration extends $dara.Model {
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
     * The image repository type.
     *
     * @example
     * ACR
     */
    imageRegistryType?: string;
    /**
     * @remarks
     * The MCP runtime mode. Custom containers must expose the standard MCP themselves. Valid value: SELF_HOSTED.
     *
     * @example
     * SELF_HOSTED
     */
    mcpRuntimeMode?: string;
    /**
     * @remarks
     * The container source type. Currently, this is fixed to CONTAINER_IMAGE.
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
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigHookConfigurationHooks extends $dara.Model {
    /**
     * @remarks
     * The hook API version.
     *
     * @example
     * 1.0
     */
    apiVersion?: string;
    /**
     * @remarks
     * The hook description.
     *
     * @example
     * Log MCP tool invocations
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
     * The hook request headers.
     */
    headers?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The hook timeout in milliseconds.
     *
     * @example
     * 3000
     */
    timeout?: number;
    /**
     * @remarks
     * The hook callback URL.
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
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigHookConfiguration extends $dara.Model {
    /**
     * @remarks
     * The ordered list of hooks. Executes PRE_LIST_TOOLS, PRE_CALL_TOOL, POST_LIST_TOOLS, and POST_CALL_TOOL hooks in the order of the array.
     */
    hooks?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigHookConfigurationHooks[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigLogConfiguration extends $dara.Model {
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
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigMcpConfiguration extends $dara.Model {
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
     * Currently fixed at 1.
     *
     * @example
     * 1
     */
    sessionConcurrencyPerInstance?: number;
    /**
     * @remarks
     * The session idle timeout in seconds. Default value: 1800.
     *
     * @example
     * 1800
     */
    sessionIdleTimeoutSeconds?: number;
    /**
     * @remarks
     * The maximum session lifetime in seconds. Default value: 21600.
     *
     * @example
     * 21600
     */
    sessionMaxLifetimeSeconds?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
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
     * The NAS server address.
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
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigNasConfiguration extends $dara.Model {
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
     * The list of NAS mount targets.
     */
    mountPoints?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigNasConfigurationMountPoints[];
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
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigNetworkConfiguration extends $dara.Model {
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
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
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
     * The path in the OSS bucket.
     *
     * @example
     * /data
     */
    bucketPath?: string;
    /**
     * @remarks
     * The OSS endpoint.
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
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigOssMountConfiguration extends $dara.Model {
    /**
     * @remarks
     * The list of OSS mount points.
     */
    mountPoints?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigParameterTransformConfiguration extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable parameter transformation and result enhancement.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The reserved reference for the parameter transformation and result enhancement rule set.
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
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigProxyConfiguration extends $dara.Model {
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
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfigRuntimeConfiguration extends $dara.Model {
    /**
     * @remarks
     * The CPU specification in cores. Default value: 0.25.
     *
     * @example
     * 0.25
     */
    cpu?: number;
    /**
     * @remarks
     * The ephemeral disk size in MB. Valid values: 512 and 10240.
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
     * The ARN of the RAM role used by user code to access downstream Alibaba Cloud resources.
     *
     * @example
     * acs:ram::1234567890123456:role/agentcore-mcp-execution
     */
    executionRoleArn?: string;
    /**
     * @remarks
     * Default value: 200.
     *
     * @example
     * 200
     */
    instanceConcurrency?: number;
    /**
     * @remarks
     * The memory size in MB. Default value: 512.
     *
     * @example
     * 512
     */
    memory?: number;
    /**
     * @remarks
     * Default value: 9000.
     *
     * @example
     * 9000
     */
    port?: number;
    /**
     * @remarks
     * The timeout period in seconds. Default value: 300.
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
export declare class ConvertMcpToFreeEditResponseBodyDataDeploymentConfig extends $dara.Model {
    /**
     * @remarks
     * The MCP entry point access control.
     */
    accessControl?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigAccessControl;
    /**
     * @remarks
     * The Agent Identity configuration.
     */
    agentIdentityConfiguration?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigAgentIdentityConfiguration;
    /**
     * @remarks
     * The artifact type. Code indicates a ZIP code package, and Container indicates a custom container.
     *
     * @example
     * Code
     */
    artifactType?: string;
    /**
     * @remarks
     * The code package configuration.
     */
    codeConfiguration?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigCodeConfiguration;
    /**
     * @remarks
     * The custom container configuration.
     */
    containerConfiguration?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigContainerConfiguration;
    /**
     * @remarks
     * The hook configuration.
     */
    hookConfiguration?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigHookConfiguration;
    /**
     * @remarks
     * The log configuration.
     */
    logConfiguration?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigLogConfiguration;
    /**
     * @remarks
     * The MCP session configuration.
     */
    mcpConfiguration?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigMcpConfiguration;
    /**
     * @remarks
     * The NAS storage configuration.
     */
    nasConfiguration?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigNasConfiguration;
    /**
     * @remarks
     * The network configuration.
     */
    networkConfiguration?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigNetworkConfiguration;
    /**
     * @remarks
     * The OSS mount configuration.
     */
    ossMountConfiguration?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigOssMountConfiguration;
    /**
     * @remarks
     * The parameter transformation and result enhancement configuration.
     */
    parameterTransformConfiguration?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigParameterTransformConfiguration;
    /**
     * @remarks
     * The MCP proxy configuration.
     */
    proxyConfiguration?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigProxyConfiguration;
    /**
     * @remarks
     * The runtime and resource configuration.
     */
    runtimeConfiguration?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfigRuntimeConfiguration;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ConvertMcpToFreeEditResponseBodyDataMarketSource extends $dara.Model {
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
export declare class ConvertMcpToFreeEditResponseBodyDataTemplate extends $dara.Model {
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
     * Indicates whether an updated template version is available.
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
export declare class ConvertMcpToFreeEditResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The list of remote MCP service addresses.
     */
    addresses?: string[];
    /**
     * @remarks
     * The custom tags. Multiple tags are supported.
     */
    customTags?: string[];
    /**
     * @remarks
     * The deployment configuration for the code-deployed MCP.
     */
    deploymentConfig?: ConvertMcpToFreeEditResponseBodyDataDeploymentConfig;
    /**
     * @remarks
     * The description of the MCP service.
     *
     * @example
     * MCP service used to query knowledge bases
     */
    description?: string;
    /**
     * @remarks
     * The access endpoint of the MCP service.
     *
     * @example
     * https://example.com/mcp
     */
    endpoint?: string;
    /**
     * @remarks
     * The name of the Function Compute function corresponding to the code-deployed MCP.
     *
     * @example
     * agentcore-mcp-example
     */
    functionName?: string;
    /**
     * @remarks
     * The MCP source marketplace template.
     */
    marketSource?: ConvertMcpToFreeEditResponseBodyDataMarketSource;
    /**
     * @remarks
     * The MCP service ID.
     *
     * @example
     * mcp-server-id
     */
    mcpServerId?: string;
    /**
     * @remarks
     * The MCP service name.
     *
     * @example
     * my-mcp-server
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
     * The MCP protocol.
     *
     * @example
     * StreamableHTTP
     */
    protocol?: string;
    /**
     * @remarks
     * The MCP service status.
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * The reason why the MCP service is in the current status.
     *
     * @example
     * Code package deployment failed
     */
    statusReason?: string;
    /**
     * @remarks
     * The template version and input schema bound to the MCP.
     */
    template?: ConvertMcpToFreeEditResponseBodyDataTemplate;
    /**
     * @remarks
     * The MCP type. Valid values: DIRECT_PROXY (direct proxy), HTTP_TO_MCP (HTTP to MCP), and CODE_PACKAGE (code deployment).
     *
     * @example
     * CODE_PACKAGE
     */
    type?: string;
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
export declare class ConvertMcpToFreeEditResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The returned result.
     */
    data?: ConvertMcpToFreeEditResponseBodyData;
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
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID used to locate and troubleshoot the request.
     *
     * @example
     * request-123456
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
