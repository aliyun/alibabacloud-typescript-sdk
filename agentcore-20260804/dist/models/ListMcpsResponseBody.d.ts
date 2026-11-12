import * as $dara from '@darabonba/typescript';
export declare class ListMcpsResponseBodyItemsAuthCodePackage extends $dara.Model {
    /**
     * @remarks
     * The API Key used to verify the MCP caller.
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
export declare class ListMcpsResponseBodyItemsAuthDirectProxy extends $dara.Model {
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
export declare class ListMcpsResponseBodyItemsAuthHttpToMcp extends $dara.Model {
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
export declare class ListMcpsResponseBodyItemsAuth extends $dara.Model {
    /**
     * @remarks
     * The caller API Key authentication configuration for the code deployment MCP.
     */
    codePackage?: ListMcpsResponseBodyItemsAuthCodePackage;
    /**
     * @remarks
     * The authentication configuration for the direct proxy.
     */
    directProxy?: ListMcpsResponseBodyItemsAuthDirectProxy;
    /**
     * @remarks
     * Specifies whether the configuration is enabled.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The list of authentication configurations for HTTP_TO_MCP.
     */
    httpToMcp?: ListMcpsResponseBodyItemsAuthHttpToMcp[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListMcpsResponseBodyItemsDeploymentConfigAccessControl extends $dara.Model {
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
     * The access control mode. ANONYMOUS indicates anonymous access, and CREDENTIAL indicates access by using AgentCore credentials.
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigCodeConfiguration extends $dara.Model {
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
     * The code package runtime. Valid values: python3.13, nodejs22, or java17.
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigContainerConfiguration extends $dara.Model {
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
     * The MCP runtime mode. Custom containers currently must expose the standard MCP themselves. The value is SELF_HOSTED.
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigHookConfigurationHooks extends $dara.Model {
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
     * Record MCP tool invoke
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigHookConfiguration extends $dara.Model {
    /**
     * @remarks
     * Executes the PRE_LIST_TOOLS, PRE_CALL_TOOL, POST_LIST_TOOLS, and POST_CALL_TOOL hooks in the order of the array.
     */
    hooks?: ListMcpsResponseBodyItemsDeploymentConfigHookConfigurationHooks[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListMcpsResponseBodyItemsDeploymentConfigLogConfiguration extends $dara.Model {
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigMcpConfiguration extends $dara.Model {
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
     * The session concurrency per instance. Currently fixed to 1.
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigNasConfiguration extends $dara.Model {
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
    mountPoints?: ListMcpsResponseBodyItemsDeploymentConfigNasConfigurationMountPoints[];
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigNetworkConfiguration extends $dara.Model {
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigOssMountConfiguration extends $dara.Model {
    /**
     * @remarks
     * The list of OSS mount points.
     */
    mountPoints?: ListMcpsResponseBodyItemsDeploymentConfigOssMountConfigurationMountPoints[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListMcpsResponseBodyItemsDeploymentConfigParameterTransformConfiguration extends $dara.Model {
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigProxyConfiguration extends $dara.Model {
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigRuntimeConfiguration extends $dara.Model {
    /**
     * @remarks
     * The CPU specifications in cores. Default value: 0.25.
     *
     * @example
     * 0.25
     */
    cpu?: number;
    /**
     * @remarks
     * The temporary disk size in MB. Valid values: 512 or 10240.
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
     * The memory specifications in MB. Default value: 512.
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
export declare class ListMcpsResponseBodyItemsDeploymentConfig extends $dara.Model {
    /**
     * @remarks
     * The MCP entry access control.
     */
    accessControl?: ListMcpsResponseBodyItemsDeploymentConfigAccessControl;
    /**
     * @remarks
     * The agent identity configuration.
     */
    agentIdentityConfiguration?: ListMcpsResponseBodyItemsDeploymentConfigAgentIdentityConfiguration;
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
    codeConfiguration?: ListMcpsResponseBodyItemsDeploymentConfigCodeConfiguration;
    /**
     * @remarks
     * The custom container configuration.
     */
    containerConfiguration?: ListMcpsResponseBodyItemsDeploymentConfigContainerConfiguration;
    /**
     * @remarks
     * The hook configuration.
     */
    hookConfiguration?: ListMcpsResponseBodyItemsDeploymentConfigHookConfiguration;
    /**
     * @remarks
     * The log configuration.
     */
    logConfiguration?: ListMcpsResponseBodyItemsDeploymentConfigLogConfiguration;
    /**
     * @remarks
     * The MCP session configuration.
     */
    mcpConfiguration?: ListMcpsResponseBodyItemsDeploymentConfigMcpConfiguration;
    /**
     * @remarks
     * The NAS storage configuration.
     */
    nasConfiguration?: ListMcpsResponseBodyItemsDeploymentConfigNasConfiguration;
    /**
     * @remarks
     * The network configuration.
     */
    networkConfiguration?: ListMcpsResponseBodyItemsDeploymentConfigNetworkConfiguration;
    /**
     * @remarks
     * The OSS mount configuration.
     */
    ossMountConfiguration?: ListMcpsResponseBodyItemsDeploymentConfigOssMountConfiguration;
    /**
     * @remarks
     * The parameter transformation and result enhancement configuration.
     */
    parameterTransformConfiguration?: ListMcpsResponseBodyItemsDeploymentConfigParameterTransformConfiguration;
    /**
     * @remarks
     * The MCP proxy configuration.
     */
    proxyConfiguration?: ListMcpsResponseBodyItemsDeploymentConfigProxyConfiguration;
    /**
     * @remarks
     * The runtime and resource configuration.
     */
    runtimeConfiguration?: ListMcpsResponseBodyItemsDeploymentConfigRuntimeConfiguration;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class ListMcpsResponseBodyItemsMarketSource extends $dara.Model {
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
export declare class ListMcpsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The list of MCP service addresses.
     */
    addresses?: string[];
    /**
     * @remarks
     * The backend authentication configuration. The enabled field indicates whether the configuration is enabled. The directProxy field specifies the custom authentication header for the direct proxy. The httpToMcp field specifies the list of OpenAPI credentials for HTTP_TO_MCP.
     */
    auth?: ListMcpsResponseBodyItemsAuth;
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
     * The deployment configuration for the code deployment MCP.
     */
    deploymentConfig?: ListMcpsResponseBodyItemsDeploymentConfig;
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
     * The MCP endpoint that can be called by users or agents. This field is empty before deployment is complete.
     *
     * @example
     * https://example.com/mcp
     */
    endpoint?: string;
    /**
     * @remarks
     * The Function Compute function name corresponding to the CODE_PACKAGE MCP. This field is empty before deployment is complete and for other types.
     *
     * @example
     * agentcore-mcp-example
     */
    functionName?: string;
    /**
     * @remarks
     * The MCP source marketplace template.
     */
    marketSource?: ListMcpsResponseBodyItemsMarketSource;
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
export declare class ListMcpsResponseBody extends $dara.Model {
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
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The list data.
     */
    items?: ListMcpsResponseBodyItems[];
    /**
     * @remarks
     * The maximum number of entries to return per page. Valid values: 1 to 100. Default value: 10.
     *
     * @example
     * 20
     */
    maxResults?: number;
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
     * The pagination token for the next page.
     *
     * @example
     * next-page-token
     */
    nextToken?: string;
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
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 100
     */
    totalCount?: number;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
