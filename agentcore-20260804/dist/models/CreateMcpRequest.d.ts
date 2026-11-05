import * as $dara from '@darabonba/typescript';
export declare class CreateMcpRequestBodyAuthCodePackage extends $dara.Model {
    /**
     * @remarks
     * The API Key used to verify MCP callers.
     *
     * @example
     * example-api-key
     */
    apiKey?: string;
    /**
     * @remarks
     * The name of the request header that carries the API Key.
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
export declare class CreateMcpRequestBodyAuthDirectProxy extends $dara.Model {
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
export declare class CreateMcpRequestBodyAuthHttpToMcp extends $dara.Model {
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
     * The authentication scheme ID.
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
     * The position of the credential.
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
export declare class CreateMcpRequestBodyAuth extends $dara.Model {
    /**
     * @remarks
     * The API Key authentication configuration for callers of code-deployed MCP.
     */
    codePackage?: CreateMcpRequestBodyAuthCodePackage;
    /**
     * @remarks
     * The direct proxy authentication configuration.
     */
    directProxy?: CreateMcpRequestBodyAuthDirectProxy;
    /**
     * @remarks
     * Specifies whether to enable the configuration.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The list of HTTP_TO_MCP authentication configurations.
     */
    httpToMcp?: CreateMcpRequestBodyAuthHttpToMcp[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateMcpRequestBodyDeploymentConfigAccessControl extends $dara.Model {
    /**
     * @remarks
     * References the AgentCore credential when mode is CREDENTIAL.
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
     * The access control mode. ANONYMOUS indicates anonymous access. CREDENTIAL indicates the use of AgentCore access credentials.
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
export declare class CreateMcpRequestBodyDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
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
export declare class CreateMcpRequestBodyDeploymentConfigCodeConfiguration extends $dara.Model {
    /**
     * @remarks
     * The temporary code package token returned by GetMcpCodePackageUploadUrl. It is used to create a code deployment after a presigned upload is completed. You must specify either this parameter or CodePackageUrl.
     *
     * @example
     * upload-token
     */
    codePackageToken?: string;
    /**
     * @remarks
     * The public Alibaba Cloud OSS HTTP(S) URL that can be directly passed when creating a code deployment. You must specify either this parameter or CodePackageToken. This parameter is supported only by CreateMcp, and is not supported for update and query operations.
     *
     * @example
     * https://example-bucket.oss-cn-hangzhou.aliyuncs.com/server.zip
     */
    codePackageUrl?: string;
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
export declare class CreateMcpRequestBodyDeploymentConfigContainerConfiguration extends $dara.Model {
    /**
     * @remarks
     * The ID of the ACR instance.
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
     * The URL of the container image.
     *
     * @example
     * registry.cn-hangzhou.aliyuncs.com/example/mcp:1.0.0
     */
    image?: string;
    /**
     * @remarks
     * The type of the image registry.
     *
     * @example
     * ACR
     */
    imageRegistryType?: string;
    /**
     * @remarks
     * The MCP Runtime mode. Custom containers must currently expose standard MCP by themselves. Valid value: SELF_HOSTED.
     *
     * @example
     * SELF_HOSTED
     */
    mcpRuntimeMode?: string;
    /**
     * @remarks
     * The source type of the container. Currently fixed to CONTAINER_IMAGE.
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
export declare class CreateMcpRequestBodyDeploymentConfigHookConfigurationHooks extends $dara.Model {
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
     * Log MCP tool invoke
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
export declare class CreateMcpRequestBodyDeploymentConfigHookConfiguration extends $dara.Model {
    /**
     * @remarks
     * Executes the PRE_LIST_TOOLS, PRE_CALL_TOOL, POST_LIST_TOOLS, and POST_CALL_TOOL hooks in the order of the array.
     */
    hooks?: CreateMcpRequestBodyDeploymentConfigHookConfigurationHooks[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateMcpRequestBodyDeploymentConfigLogConfiguration extends $dara.Model {
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
     * The start rule for Function Compute log splitting.
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
export declare class CreateMcpRequestBodyDeploymentConfigMcpConfiguration extends $dara.Model {
    /**
     * @remarks
     * The path of the MCP endpoint, such as /mcp or /sse.
     *
     * @example
     * /mcp
     */
    endpointPath?: string;
    /**
     * @remarks
     * The number of concurrent sessions per instance. Currently, this value is fixed at 1.
     *
     * @example
     * 1
     */
    sessionConcurrencyPerInstance?: number;
    /**
     * @remarks
     * The idle timeout for a session, in seconds. Default value: 1800.
     *
     * @example
     * 1800
     */
    sessionIdleTimeoutSeconds?: number;
    /**
     * @remarks
     * The maximum lifetime of a session, in seconds. Default value: 21600.
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
export declare class CreateMcpRequestBodyDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
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
     * The address of the NAS server.
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
export declare class CreateMcpRequestBodyDeploymentConfigNasConfiguration extends $dara.Model {
    /**
     * @remarks
     * The ID of the user group.
     *
     * @example
     * 1000
     */
    groupId?: number;
    /**
     * @remarks
     * The list of NAS mount points.
     */
    mountPoints?: CreateMcpRequestBodyDeploymentConfigNasConfigurationMountPoints[];
    /**
     * @remarks
     * The ID of the user.
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
export declare class CreateMcpRequestBodyDeploymentConfigNetworkConfiguration extends $dara.Model {
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
     * The ID of the security group.
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
     * The ID of the virtual private cloud (VPC).
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
export declare class CreateMcpRequestBodyDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
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
     * The endpoint of the OSS service.
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
export declare class CreateMcpRequestBodyDeploymentConfigOssMountConfiguration extends $dara.Model {
    /**
     * @remarks
     * The list of OSS mount points.
     */
    mountPoints?: CreateMcpRequestBodyDeploymentConfigOssMountConfigurationMountPoints[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateMcpRequestBodyDeploymentConfigParameterTransformConfiguration extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable parameter transformation and result enhancement.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The reserved reference to the rule set for parameter transformation and result enhancement.
     *
     * @example
     * rules-1
     */
    ruleSetId?: string;
    /**
     * @remarks
     * The version of the transformation rules.
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
export declare class CreateMcpRequestBodyDeploymentConfigProxyConfiguration extends $dara.Model {
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
export declare class CreateMcpRequestBodyDeploymentConfigRuntimeConfiguration extends $dara.Model {
    /**
     * @remarks
     * The CPU specification, in cores. Default value: 0.25.
     *
     * @example
     * 0.25
     */
    cpu?: number;
    /**
     * @remarks
     * The size of the ephemeral disk, in MB. Valid values: 512 and 10240.
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
export declare class CreateMcpRequestBodyDeploymentConfig extends $dara.Model {
    /**
     * @remarks
     * The MCP entry point access control.
     */
    accessControl?: CreateMcpRequestBodyDeploymentConfigAccessControl;
    /**
     * @remarks
     * The Agent Identity configuration.
     */
    agentIdentityConfiguration?: CreateMcpRequestBodyDeploymentConfigAgentIdentityConfiguration;
    /**
     * @remarks
     * The artifact type. Code indicates a ZIP code package. Container indicates a custom container.
     *
     * @example
     * Code
     */
    artifactType?: string;
    /**
     * @remarks
     * The code package configuration.
     */
    codeConfiguration?: CreateMcpRequestBodyDeploymentConfigCodeConfiguration;
    /**
     * @remarks
     * The custom container configuration.
     */
    containerConfiguration?: CreateMcpRequestBodyDeploymentConfigContainerConfiguration;
    /**
     * @remarks
     * The hook configuration.
     */
    hookConfiguration?: CreateMcpRequestBodyDeploymentConfigHookConfiguration;
    /**
     * @remarks
     * The log configuration.
     */
    logConfiguration?: CreateMcpRequestBodyDeploymentConfigLogConfiguration;
    /**
     * @remarks
     * The MCP session configuration.
     */
    mcpConfiguration?: CreateMcpRequestBodyDeploymentConfigMcpConfiguration;
    /**
     * @remarks
     * The NAS storage configuration.
     */
    nasConfiguration?: CreateMcpRequestBodyDeploymentConfigNasConfiguration;
    /**
     * @remarks
     * The network configuration.
     */
    networkConfiguration?: CreateMcpRequestBodyDeploymentConfigNetworkConfiguration;
    /**
     * @remarks
     * The OSS mount configuration.
     */
    ossMountConfiguration?: CreateMcpRequestBodyDeploymentConfigOssMountConfiguration;
    /**
     * @remarks
     * The configuration for parameter transformation and result enhancement.
     */
    parameterTransformConfiguration?: CreateMcpRequestBodyDeploymentConfigParameterTransformConfiguration;
    /**
     * @remarks
     * The MCP proxy configuration.
     */
    proxyConfiguration?: CreateMcpRequestBodyDeploymentConfigProxyConfiguration;
    /**
     * @remarks
     * The runtime and resource configuration.
     */
    runtimeConfiguration?: CreateMcpRequestBodyDeploymentConfigRuntimeConfiguration;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class CreateMcpRequestBody extends $dara.Model {
    /**
     * @remarks
     * The list of MCP service addresses.
     */
    addresses?: string[];
    /**
     * @remarks
     * The backend authentication configuration. When enabled is true, specify directProxy (name/value) for DIRECT_PROXY, and the httpToMcp array (id, type, and credential for each item, and position and name for apiKey) for HTTP_TO_MCP. Multiple authentication objects are supported, and the first one is the default upstream credential. HTTP_TO_MCP credentials are merged into the securitySchemes of Swagger.
     */
    auth?: CreateMcpRequestBodyAuth;
    /**
     * @remarks
     * The custom tags. Multiple tags are supported.
     */
    customTags?: string[];
    /**
     * @remarks
     * The code deployment configuration. Required when Type is CODE_PACKAGE. When creating a Code artifact, you must specify either CodeConfiguration.CodePackageToken or CodePackageUrl, but not both. CodePackageUrl supports only public Alibaba Cloud OSS HTTP(S) URLs.
     */
    deploymentConfig?: CreateMcpRequestBodyDeploymentConfig;
    /**
     * @remarks
     * The description.
     *
     * @example
     * A sample description used to illustrate the purpose of the resource
     */
    description?: string;
    /**
     * @remarks
     * The MCP name.
     *
     * This parameter is required.
     *
     * @example
     * my-mcp-server
     */
    name?: string;
    /**
     * @remarks
     * The access permission mode. PUBLIC indicates public access. CONTROLLED indicates that access is controlled based on permission rules.
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
     * Specify this field if Type is set to HTTP_TO_MCP.
     *
     * @example
     * {"type":"object"}
     */
    swaggerConfig?: string;
    /**
     * @remarks
     * The type.
     *
     * This parameter is required.
     *
     * @example
     * DIRECT_PROXY
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
export declare class CreateMcpRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: CreateMcpRequestBody;
    /**
     * @remarks
     * The client token for idempotency.
     *
     * @example
     * 123e4567-e89b-12d3-a456-426614174000
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
