import * as $dara from '@darabonba/typescript';
export declare class InstallMcpMarketItemRequestBodyAuthDirectProxy extends $dara.Model {
    /**
     * @remarks
     * The name of the backend authentication request header.
     *
     * @example
     * Authorization
     */
    name?: string;
    /**
     * @remarks
     * The value of the backend authentication request header.
     *
     * @example
     * example-api-key
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
export declare class InstallMcpMarketItemRequestBodyAuthHttpToMcp extends $dara.Model {
    /**
     * @remarks
     * The backend authentication credential.
     *
     * @example
     * example-api-key
     */
    credential?: string;
    /**
     * @remarks
     * The backend authentication configuration ID.
     *
     * @example
     * api-key-auth
     */
    id?: string;
    /**
     * @remarks
     * The API key parameter name.
     *
     * @example
     * X-API-Key
     */
    name?: string;
    /**
     * @remarks
     * The position where the API key is passed.
     *
     * @example
     * header
     */
    position?: string;
    /**
     * @remarks
     * The backend authentication type.
     *
     * @example
     * apiKey
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
export declare class InstallMcpMarketItemRequestBodyAuth extends $dara.Model {
    /**
     * @remarks
     * The backend authentication configuration for direct proxy.
     */
    directProxy?: InstallMcpMarketItemRequestBodyAuthDirectProxy;
    /**
     * @remarks
     * Specifies whether to enable this configuration.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The list of backend authentication configurations for HTTP-to-MCP conversion.
     */
    httpToMcp?: InstallMcpMarketItemRequestBodyAuthHttpToMcp[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigAccessControl extends $dara.Model {
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
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
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
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigCodeConfiguration extends $dara.Model {
    /**
     * @remarks
     * The temporary code package token returned by GetMcpCodePackageUploadUrl. Use this token to create a code deployment after completing the pre-signed upload. Specify either this parameter or CodePackageUrl.
     *
     * @example
     * upload-token
     */
    codePackageToken?: string;
    /**
     * @remarks
     * The public Alibaba Cloud OSS HTTP(S) URL of the code package. You can pass this URL directly when creating a code deployment. Specify either this parameter or CodePackageToken. Only CreateMcp supports this parameter. Update and query operations do not support this parameter.
     *
     * @example
     * https://example-bucket.oss-cn-hangzhou.aliyuncs.com/server.zip
     */
    codePackageUrl?: string;
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
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigContainerConfiguration extends $dara.Model {
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
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigHookConfigurationHooks extends $dara.Model {
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
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigHookConfiguration extends $dara.Model {
    /**
     * @remarks
     * The hooks executed in array order: PRE_LIST_TOOLS, PRE_CALL_TOOL, POST_LIST_TOOLS, and POST_CALL_TOOL.
     */
    hooks?: InstallMcpMarketItemRequestBodyDeploymentConfigHookConfigurationHooks[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigLogConfiguration extends $dara.Model {
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
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigMcpConfiguration extends $dara.Model {
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
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
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
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigNasConfiguration extends $dara.Model {
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
    mountPoints?: InstallMcpMarketItemRequestBodyDeploymentConfigNasConfigurationMountPoints[];
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
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigNetworkConfiguration extends $dara.Model {
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
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
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
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfiguration extends $dara.Model {
    /**
     * @remarks
     * The list of OSS mount points.
     */
    mountPoints?: InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfigurationMountPoints[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigParameterTransformConfiguration extends $dara.Model {
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
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigProxyConfiguration extends $dara.Model {
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
export declare class InstallMcpMarketItemRequestBodyDeploymentConfigRuntimeConfiguration extends $dara.Model {
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
export declare class InstallMcpMarketItemRequestBodyDeploymentConfig extends $dara.Model {
    /**
     * @remarks
     * The MCP ingress access control settings.
     */
    accessControl?: InstallMcpMarketItemRequestBodyDeploymentConfigAccessControl;
    /**
     * @remarks
     * The Agent Identity configuration.
     */
    agentIdentityConfiguration?: InstallMcpMarketItemRequestBodyDeploymentConfigAgentIdentityConfiguration;
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
    codeConfiguration?: InstallMcpMarketItemRequestBodyDeploymentConfigCodeConfiguration;
    /**
     * @remarks
     * The custom container configuration.
     */
    containerConfiguration?: InstallMcpMarketItemRequestBodyDeploymentConfigContainerConfiguration;
    /**
     * @remarks
     * The hook configuration.
     */
    hookConfiguration?: InstallMcpMarketItemRequestBodyDeploymentConfigHookConfiguration;
    /**
     * @remarks
     * The log configuration.
     */
    logConfiguration?: InstallMcpMarketItemRequestBodyDeploymentConfigLogConfiguration;
    /**
     * @remarks
     * The MCP session configuration.
     */
    mcpConfiguration?: InstallMcpMarketItemRequestBodyDeploymentConfigMcpConfiguration;
    /**
     * @remarks
     * The NAS storage configuration.
     */
    nasConfiguration?: InstallMcpMarketItemRequestBodyDeploymentConfigNasConfiguration;
    /**
     * @remarks
     * The network configuration.
     */
    networkConfiguration?: InstallMcpMarketItemRequestBodyDeploymentConfigNetworkConfiguration;
    /**
     * @remarks
     * The OSS mount configuration.
     */
    ossMountConfiguration?: InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfiguration;
    /**
     * @remarks
     * The parameter transformation and result enhancement configuration.
     */
    parameterTransformConfiguration?: InstallMcpMarketItemRequestBodyDeploymentConfigParameterTransformConfiguration;
    /**
     * @remarks
     * The MCP proxy configuration.
     */
    proxyConfiguration?: InstallMcpMarketItemRequestBodyDeploymentConfigProxyConfiguration;
    /**
     * @remarks
     * The runtime and resource configuration.
     */
    runtimeConfiguration?: InstallMcpMarketItemRequestBodyDeploymentConfigRuntimeConfiguration;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class InstallMcpMarketItemRequestBody extends $dara.Model {
    /**
     * @remarks
     * The list of remote MCP service addresses.
     */
    addresses?: string[];
    /**
     * @remarks
     * The MCP authentication configuration.
     */
    auth?: InstallMcpMarketItemRequestBodyAuth;
    /**
     * @remarks
     * The custom tags. Multiple tags are supported. Custom tags are merged with template fixed tags and deduplicated.
     */
    customTags?: string[];
    /**
     * @remarks
     * The deployment configuration for code-deployed MCP.
     */
    deploymentConfig?: InstallMcpMarketItemRequestBodyDeploymentConfig;
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
     * The MCP service name.
     *
     * @example
     * my-mcp-server
     */
    name?: string;
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
     * The OpenAPI configuration for HTTP-to-MCP conversion, represented as a JSON string.
     *
     * @example
     * {"openapi":"3.0.3","info":{"title":"Knowledge API","version":"1.0.0"},"paths":{}}
     */
    swaggerConfig?: string;
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class InstallMcpMarketItemRequest extends $dara.Model {
    /**
     * @remarks
     * The MCP configuration submitted during template installation. The configuration must conform to the input schema of the template.
     */
    body?: InstallMcpMarketItemRequestBody;
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request.
     *
     * @example
     * 123e4567-e89b-12d3-a456-426655440000
     */
    clientToken?: string;
    /**
     * @remarks
     * The template version to install. You can call GetMcpMarketItem to query available versions.
     *
     * This parameter is required.
     *
     * @example
     * 1.0.0
     */
    templateVersion?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
