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
export declare class CreateMcpRequestBodyAuth extends $dara.Model {
    /**
     * @remarks
     * The caller API Key authentication configuration for code-deployed MCP.
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
     * The access control mode. ANONYMOUS indicates anonymous access. CREDENTIAL indicates authentication by using AgentCore access credentials.
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
     * Specifies whether to enable agent identity.
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
     * The temporary code package token returned by GetMcpCodePackageUploadUrl. It is used to create a code deployment after a presigned upload is completed. Specify either this parameter or CodePackageUrl.
     *
     * @example
     * upload-token
     */
    codePackageToken?: string;
    /**
     * @remarks
     * The public Alibaba Cloud OSS HTTP(S) URL that can be directly passed when creating a code deployment. Specify either this parameter or CodePackageToken. This parameter is only supported by CreateMcp, and is not supported for update and query operations.
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
     * The container image URL.
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
     * Custom containers currently must expose the standard MCP themselves. Set the value to SELF_HOSTED.
     *
     * @example
     * SELF_HOSTED
     */
    mcpRuntimeMode?: string;
    /**
     * @remarks
     * Currently fixed to CONTAINER_IMAGE.
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
     * The hook request headers.
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
     * Executes the PRE_LIST_TOOLS, PRE_CALL_TOOL, POST_LIST_TOOLS, and POST_CALL_TOOL hooks in array order.
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
     * The start rule for FC log splitting.
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
     * The MCP endpoint path, such as /mcp or /sse.
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
     * The session idle timeout period in seconds. Default value: 1800.
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
export declare class CreateMcpRequestBodyDeploymentConfigNasConfiguration extends $dara.Model {
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
    mountPoints?: CreateMcpRequestBodyDeploymentConfigNasConfigurationMountPoints[];
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
     * The reserved parameter transformation and result enhancement rule set reference.
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
     * The memory specification in MB. Default value: 512.
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
     * The function timeout period in seconds. Default value: 300.
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
     * The MCP entry access control.
     */
    accessControl?: CreateMcpRequestBodyDeploymentConfigAccessControl;
    /**
     * @remarks
     * The agent identity configuration.
     */
    agentIdentityConfiguration?: CreateMcpRequestBodyDeploymentConfigAgentIdentityConfiguration;
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
     * The parameter transformation and result enhancement configuration.
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
     * The backend authentication configuration. When enabled is set to true: for DIRECT_PROXY, specify directProxy (name and value); for HTTP_TO_MCP, specify the httpToMcp array (each item includes id, type, and credential, and apiKey also requires position and name), which supports multiple authentication objects with the first one as the default upstream credential. HTTP_TO_MCP credentials are merged into the securitySchemes of Swagger.
     */
    auth?: CreateMcpRequestBodyAuth;
    /**
     * @remarks
     * The custom tags. Multiple tags are supported.
     */
    customTags?: string[];
    /**
     * @remarks
     * The code deployment configuration. Required when Type is CODE_PACKAGE. When creating a Code artifact, you must specify exactly one of CodeConfiguration.CodePackageToken and CodePackageUrl. CodePackageUrl only supports public Alibaba Cloud OSS HTTP(S) URLs.
     */
    deploymentConfig?: CreateMcpRequestBodyDeploymentConfig;
    /**
     * @remarks
     * The description.
     *
     * @example
     * A sample description to illustrate the purpose of the resource
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
     * PUBLIC indicates public access. CONTROLLED indicates that access is controlled based on permission rules.
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
     * Specify this field if Type is HTTP_TO_MCP.
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
     * The reserved query request identifier. The console backend does not read this parameter and does not provide idempotency guarantees for deduplication or restoring the original processing result based on this identifier.
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
