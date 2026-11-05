import * as $dara from '@darabonba/typescript';
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigAccessControl extends $dara.Model {
    /**
     * @remarks
     * The AgentCore Credential referenced when mode is set to CREDENTIAL.
     *
     * @example
     * credential-id
     */
    credentialId?: string;
    /**
     * @remarks
     * Specifies whether to enable ingress access control.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The access control mode. Valid values:
     * - ANONYMOUS: anonymous access.
     * - CREDENTIAL: AgentCore credential-based access.
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
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable authorization.
     */
    authorizationEnabled?: boolean;
    /**
     * @remarks
     * The ARN of the credential provider.
     *
     * @example
     * acs:agentidentity:cn-hangzhou:1234567890123456:provider/example
     */
    credentialProviderArn?: string;
    /**
     * @remarks
     * The type of the credential provider.
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
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigCodeConfiguration extends $dara.Model {
    /**
     * @remarks
     * The temporary code package token returned by GetMcpCodePackageUploadUrl. This token is used to create or update a code deployment after the presigned upload is complete.
     *
     * @example
     * upload-token
     */
    codePackageToken?: string;
    /**
     * @remarks
     * The full startup command, with arguments passed in order by parameter boundary. For example, when using supergateway to start a stdio MCP, pass supergateway, --stdio, the full subcommand, and remaining arguments.
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
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigContainerConfiguration extends $dara.Model {
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
     * The container entrypoint arguments.
     */
    entrypoint?: string[];
    /**
     * @remarks
     * The container image URL.
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
     * The MCP Runtime mode. Custom containers must expose a standard MCP endpoint. Set this parameter to SELF_HOSTED.
     *
     * @example
     * SELF_HOSTED
     */
    mcpRuntimeMode?: string;
    /**
     * @remarks
     * The container source type. Currently fixed to CONTAINER_IMAGE.
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
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigHookConfigurationHooks extends $dara.Model {
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
     * The timeout period. Unit: milliseconds.
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
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigHookConfiguration extends $dara.Model {
    /**
     * @remarks
     * The hooks executed in array order: PRE_LIST_TOOLS, PRE_CALL_TOOL, POST_LIST_TOOLS, and POST_CALL_TOOL.
     */
    hooks?: InstallMcpMarketItemResponseBodyDataDeploymentConfigHookConfigurationHooks[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigLogConfiguration extends $dara.Model {
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
     * The log splitting begin rule for Function Compute (FC).
     *
     * @example
     * DefaultRegex
     */
    logBeginRule?: string;
    /**
     * @remarks
     * The Logstore name.
     *
     * @example
     * mcp-logs
     */
    logstore?: string;
    /**
     * @remarks
     * The Log Service project name.
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
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigMcpConfiguration extends $dara.Model {
    /**
     * @remarks
     * For example, /mcp or /sse.
     *
     * @example
     * /mcp
     */
    endpointPath?: string;
    /**
     * @remarks
     * Currently fixed to 1.
     *
     * @example
     * 1
     */
    sessionConcurrencyPerInstance?: number;
    /**
     * @remarks
     * Unit: seconds. Default value: 1800.
     *
     * @example
     * 1800
     */
    sessionIdleTimeoutSeconds?: number;
    /**
     * @remarks
     * Unit: seconds. Default value: 21600.
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
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
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
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigNasConfiguration extends $dara.Model {
    /**
     * @remarks
     * The runtime user group ID.
     *
     * @example
     * 1000
     */
    groupId?: number;
    /**
     * @remarks
     * The list of NAS mount points.
     */
    mountPoints?: InstallMcpMarketItemResponseBodyDataDeploymentConfigNasConfigurationMountPoints[];
    /**
     * @remarks
     * The runtime user ID.
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
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigNetworkConfiguration extends $dara.Model {
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
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
    /**
     * @remarks
     * The OSS bucket name.
     *
     * @example
     * example-bucket
     */
    bucketName?: string;
    /**
     * @remarks
     * The OSS bucket path.
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
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigOssMountConfiguration extends $dara.Model {
    /**
     * @remarks
     * The list of OSS mount points.
     */
    mountPoints?: InstallMcpMarketItemResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigParameterTransformConfiguration extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable parameter transformation and result enhancement.
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
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigProxyConfiguration extends $dara.Model {
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
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfigRuntimeConfiguration extends $dara.Model {
    /**
     * @remarks
     * Unit: cores. Default value: 0.25.
     *
     * @example
     * 0.25
     */
    cpu?: number;
    /**
     * @remarks
     * Unit: MB. Valid values: 512 and 10240.
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
     * Default value: 200.
     *
     * @example
     * 200
     */
    instanceConcurrency?: number;
    /**
     * @remarks
     * Unit: MB. Default value: 512.
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
     * Unit: seconds. Default value: 300.
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
export declare class InstallMcpMarketItemResponseBodyDataDeploymentConfig extends $dara.Model {
    /**
     * @remarks
     * The MCP ingress access control settings.
     */
    accessControl?: InstallMcpMarketItemResponseBodyDataDeploymentConfigAccessControl;
    /**
     * @remarks
     * The Agent Identity configuration.
     */
    agentIdentityConfiguration?: InstallMcpMarketItemResponseBodyDataDeploymentConfigAgentIdentityConfiguration;
    /**
     * @remarks
     * The artifact type. Valid values:
     * - Code: ZIP code package.
     * - Container: custom container.
     *
     * @example
     * Code
     */
    artifactType?: string;
    /**
     * @remarks
     * The code package configuration.
     */
    codeConfiguration?: InstallMcpMarketItemResponseBodyDataDeploymentConfigCodeConfiguration;
    /**
     * @remarks
     * The custom container configuration.
     */
    containerConfiguration?: InstallMcpMarketItemResponseBodyDataDeploymentConfigContainerConfiguration;
    /**
     * @remarks
     * The hook configuration.
     */
    hookConfiguration?: InstallMcpMarketItemResponseBodyDataDeploymentConfigHookConfiguration;
    /**
     * @remarks
     * The log configuration.
     */
    logConfiguration?: InstallMcpMarketItemResponseBodyDataDeploymentConfigLogConfiguration;
    /**
     * @remarks
     * The MCP session configuration.
     */
    mcpConfiguration?: InstallMcpMarketItemResponseBodyDataDeploymentConfigMcpConfiguration;
    /**
     * @remarks
     * The NAS storage configuration.
     */
    nasConfiguration?: InstallMcpMarketItemResponseBodyDataDeploymentConfigNasConfiguration;
    /**
     * @remarks
     * The network configuration.
     */
    networkConfiguration?: InstallMcpMarketItemResponseBodyDataDeploymentConfigNetworkConfiguration;
    /**
     * @remarks
     * The OSS mount configuration.
     */
    ossMountConfiguration?: InstallMcpMarketItemResponseBodyDataDeploymentConfigOssMountConfiguration;
    /**
     * @remarks
     * The parameter transformation and result enhancement configuration.
     */
    parameterTransformConfiguration?: InstallMcpMarketItemResponseBodyDataDeploymentConfigParameterTransformConfiguration;
    /**
     * @remarks
     * The MCP proxy configuration.
     */
    proxyConfiguration?: InstallMcpMarketItemResponseBodyDataDeploymentConfigProxyConfiguration;
    /**
     * @remarks
     * The runtime and resource configuration.
     */
    runtimeConfiguration?: InstallMcpMarketItemResponseBodyDataDeploymentConfigRuntimeConfiguration;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class InstallMcpMarketItemResponseBodyDataMarketSource extends $dara.Model {
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
export declare class InstallMcpMarketItemResponseBodyDataTemplate extends $dara.Model {
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
     * Indicates whether a newer template version is available for update.
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
export declare class InstallMcpMarketItemResponseBodyData extends $dara.Model {
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
     * The deployment configuration for code-deployed MCP.
     */
    deploymentConfig?: InstallMcpMarketItemResponseBodyDataDeploymentConfig;
    /**
     * @remarks
     * The MCP service description.
     *
     * @example
     * MCP service for querying knowledge bases
     */
    description?: string;
    /**
     * @remarks
     * The MCP service access endpoint.
     *
     * @example
     * https://example.com/mcp
     */
    endpoint?: string;
    /**
     * @remarks
     * The Function Compute function name corresponding to the code-deployed MCP.
     *
     * @example
     * agentcore-mcp-example
     */
    functionName?: string;
    /**
     * @remarks
     * The marketplace template from which the MCP originates.
     */
    marketSource?: InstallMcpMarketItemResponseBodyDataMarketSource;
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
     * The official purpose tag, managed by the server.
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
    template?: InstallMcpMarketItemResponseBodyDataTemplate;
    /**
     * @remarks
     * The MCP type. Valid values:
     *
     * - DIRECT_PROXY: Direct proxy.
     * - HTTP_TO_MCP: HTTP-to-MCP conversion.
     * - CODE_PACKAGE: Code deployment.
     *
     * @example
     * CODE_PACKAGE
     */
    type?: string;
    /**
     * @remarks
     * Indicates whether the MCP is still subject to the usage constraints of the official template.
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
export declare class InstallMcpMarketItemResponseBody extends $dara.Model {
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
     * The response data.
     */
    data?: InstallMcpMarketItemResponseBodyData;
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
     * The request ID, used for locating and troubleshooting issues.
     *
     * @example
     * request-123456
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful.
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
