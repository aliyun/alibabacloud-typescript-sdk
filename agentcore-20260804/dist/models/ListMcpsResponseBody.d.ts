import * as $dara from '@darabonba/typescript';
export declare class ListMcpsResponseBodyItemsAppliedVirtualConfigSourcesTools extends $dara.Model {
    /**
     * @remarks
     * 虚拟 MCP 必填：从源 MCP 的 ListMcpTools 或校验结果取得的定义摘要，客户端原样回传，不自行计算。仅用作手动更新校验基线，不冻结运行时 Schema。
     *
     * @example
     * e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
     */
    expectedDigest?: string;
    /**
     * @remarks
     * 虚拟 MCP 必填：源工具名称。
     *
     * @example
     * get-current-time
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
export declare class ListMcpsResponseBodyItemsAppliedVirtualConfigSources extends $dara.Model {
    /**
     * @remarks
     * 虚拟 MCP 必填：当前工作空间的源 MCP ID。
     *
     * @example
     * mcp-server-source-1
     */
    mcpServerId?: string;
    /**
     * @remarks
     * 虚拟 MCP 必填：手动选择的工具，每个源至少一个，全部源最多 100 个。
     */
    tools?: ListMcpsResponseBodyItemsAppliedVirtualConfigSourcesTools[];
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
export declare class ListMcpsResponseBodyItemsAppliedVirtualConfig extends $dara.Model {
    /**
     * @remarks
     * 虚拟 MCP 必填，填写 1 到 10 个不同的源 MCP。
     */
    sources?: ListMcpsResponseBodyItemsAppliedVirtualConfigSources[];
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
export declare class ListMcpsResponseBodyItemsAuthCodePackage extends $dara.Model {
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
     * The caller API key authentication configuration for the code deployment MCP.
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
     * The ID of the access credential. This parameter references an AgentCore credential when the mode is set to CREDENTIAL.
     *
     * @example
     * credential-id
     */
    credentialId?: string;
    /**
     * @remarks
     * Specifies whether entry access control is enabled.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The access control mode. A value of ANONYMOUS indicates anonymous access. A value of CREDENTIAL indicates that AgentCore access credentials are used.
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
     * Indicates whether authorization is enabled.
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
     * Specifies whether Agent identity is enabled.
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigContainerConfigurationRegistryConfigAuthConfig extends $dara.Model {
    /**
     * @remarks
     * 镜像仓库密码，由服务端加密保存，查询时不返回。更新时省略该字段保留已有密码。
     *
     * @example
     * example-password
     */
    password?: string;
    /**
     * @remarks
     * 镜像仓库用户名
     *
     * @example
     * puller
     */
    userName?: string;
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigContainerConfigurationRegistryConfigCertConfig extends $dara.Model {
    /**
     * @remarks
     * true 表示不校验镜像仓库 TLS 证书，默认 false
     *
     * @example
     * false
     */
    insecure?: boolean;
    /**
     * @remarks
     * Base64 编码的镜像仓库根 CA 证书，用于校验自签证书
     *
     * @example
     * LS0tLS1CRUdJTi...
     */
    rootCaCertBase64?: string;
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigContainerConfigurationRegistryConfigNetworkConfig extends $dara.Model {
    /**
     * @remarks
     * 拉取镜像使用的安全组 ID
     *
     * @example
     * sg-example
     */
    securityGroupId?: string;
    /**
     * @remarks
     * 拉取镜像使用的交换机 ID
     *
     * @example
     * vsw-example
     */
    vSwitchId?: string;
    /**
     * @remarks
     * 镜像仓库所在 VPC ID
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigContainerConfigurationRegistryConfig extends $dara.Model {
    /**
     * @remarks
     * 镜像仓库需要用户名密码认证时填写
     */
    authConfig?: ListMcpsResponseBodyItemsDeploymentConfigContainerConfigurationRegistryConfigAuthConfig;
    /**
     * @remarks
     * 镜像仓库 TLS 证书校验配置
     */
    certConfig?: ListMcpsResponseBodyItemsDeploymentConfigContainerConfigurationRegistryConfigCertConfig;
    /**
     * @remarks
     * 镜像仓库仅在 VPC 内可访问时填写，FC 通过该网络拉取镜像
     */
    networkConfig?: ListMcpsResponseBodyItemsDeploymentConfigContainerConfigurationRegistryConfigNetworkConfig;
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
     * Custom containers must currently expose the standard MCP themselves. Valid value: SELF_HOSTED.
     *
     * @example
     * SELF_HOSTED
     */
    mcpRuntimeMode?: string;
    /**
     * @remarks
     * 仅 ImageRegistryType 为 CUSTOM 时生效，用于配置镜像拉取认证、TLS 证书校验和私网拉取网络
     */
    registryConfig?: ListMcpsResponseBodyItemsDeploymentConfigContainerConfigurationRegistryConfig;
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
     * Record MCP tool invocation
     */
    description?: string;
    /**
     * @remarks
     * Specifies whether the hook is enabled.
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigHookConfiguration extends $dara.Model {
    /**
     * @remarks
     * The ordered list of hooks. The PRE_LIST_TOOLS, PRE_CALL_TOOL, POST_LIST_TOOLS, and POST_CALL_TOOL hooks are executed in the order of the array.
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
     * Specifies whether instance metrics are collected.
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
    /**
     * @remarks
     * Applicable only to StreamableHTTP. Default value for creation: STATEFUL. If omitted during an update, the original value is retained. STATELESS disables Function Compute session affinity, and the stdio gateway does not enable stateful mode. Native HTTP services must support stateless MCP themselves.
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
    /**
     * @remarks
     * Specifies whether TLS is enabled.
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
export declare class ListMcpsResponseBodyItemsDeploymentConfigNasConfiguration extends $dara.Model {
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
    mountPoints?: ListMcpsResponseBodyItemsDeploymentConfigNasConfigurationMountPoints[];
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
     * The reference to the reserved parameter transformation and result enhancement rule set.
     *
     * @example
     * rules-1
     */
    ruleSetId?: string;
    /**
     * @remarks
     * The version of the transformation rule.
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
     * Specifies whether the MCP proxy is enabled.
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
     * The CPU size in cores. Default value: 0.25.
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
     * The Agent identity configuration.
     */
    agentIdentityConfiguration?: ListMcpsResponseBodyItemsDeploymentConfigAgentIdentityConfiguration;
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
export declare class ListMcpsResponseBodyItemsOperationError extends $dara.Model {
    /**
     * @remarks
     * The diagnostic error code. Only bounded diagnostic codes are returned. The original error body from the origin server is not returned.
     *
     * @example
     * PROBE_TIMEOUT
     */
    code?: string;
    /**
     * @remarks
     * The necessary diagnostics after trimming and desensitization. Credentials and original responses are not included.
     *
     * @example
     * The probe deadline was exceeded.
     */
    message?: string;
    /**
     * @remarks
     * Specifies whether the operation is suitable for retry based on a restricted policy. This field does not trigger automatic retries.
     */
    retryable?: boolean;
    /**
     * @remarks
     * The error source. Valid values: MAGIC, ROUTER, NETWORK, ORIGIN, and UNKNOWN. The value is determined only based on actual evidence.
     *
     * @example
     * UNKNOWN
     */
    source?: string;
    /**
     * @remarks
     * The detection or publish stage where the error occurred.
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
export declare class ListMcpsResponseBodyItemsOperation extends $dara.Model {
    /**
     * @remarks
     * The desensitized error of the current publish operation. Gateway or formal link failures after the origin server passes the probe are represented by this field.
     */
    error?: ListMcpsResponseBodyItemsOperationError;
    /**
     * @remarks
     * The identifier of the current or most recent publish operation.
     *
     * @example
     * 3541f1af-87cc-45d1-a28e-94ec5633b931
     */
    operationId?: string;
    /**
     * @remarks
     * The publish stage. Valid values: compute deployment, origin probe, summary save, gateway publish, entry credential synchronization, formal link verification, and deployment submission. Legacy tasks retain their original stage semantics.
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
export declare class ListMcpsResponseBodyItemsOriginProbeLastResultActualConfiguration extends $dara.Model {
    /**
     * @remarks
     * The verified backend MCP protocol policy. Valid values: legacy and modern. This field is empty if the policy is not confirmed.
     *
     * @example
     * modern
     */
    backendMcpProtocol?: string;
    /**
     * @remarks
     * The verified MCP transport. Valid values: SSE and StreamableHTTP. This field is empty if the transport is not confirmed.
     *
     * @example
     * StreamableHTTP
     */
    protocol?: string;
    /**
     * @remarks
     * The actual negotiated or selected and verified date version of the MCP protocol. This field is empty if the version is not confirmed.
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
export declare class ListMcpsResponseBodyItemsOriginProbeLastResultError extends $dara.Model {
    /**
     * @remarks
     * The diagnostic error code. Only bounded diagnostic codes are returned. The original error body from the origin server is not returned.
     *
     * @example
     * PROBE_TIMEOUT
     */
    code?: string;
    /**
     * @remarks
     * The necessary diagnostics after trimming and desensitization. Credentials and original responses are not included.
     *
     * @example
     * The probe deadline was exceeded.
     */
    message?: string;
    /**
     * @remarks
     * Specifies whether the operation is suitable for retry based on a restricted policy. This field does not trigger automatic retries.
     */
    retryable?: boolean;
    /**
     * @remarks
     * The error source. Valid values: MAGIC, ROUTER, NETWORK, ORIGIN, and UNKNOWN. The value is determined only based on actual evidence.
     *
     * @example
     * UNKNOWN
     */
    source?: string;
    /**
     * @remarks
     * The detection or publish stage where the error occurred.
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
export declare class ListMcpsResponseBodyItemsOriginProbeLastResult extends $dara.Model {
    /**
     * @remarks
     * The actual configuration confirmed by evidence in this probe. This field is empty if no confirmed information is available and is not inferred from the expected configuration.
     */
    actualConfiguration?: ListMcpsResponseBodyItemsOriginProbeLastResultActualConfiguration;
    /**
     * @remarks
     * The probe error. This field is empty if the probe is successful. It only stores desensitized diagnostics required for this probe.
     */
    error?: ListMcpsResponseBodyItemsOriginProbeLastResultError;
    /**
     * @remarks
     * The time when the origin server was probed, in ISO 8601 UTC format.
     *
     * @example
     * 2026-11-19T08:30:00Z
     */
    probedAt?: string;
    /**
     * @remarks
     * The probe stage. Valid values: CONNECT, DISCOVER, INITIALIZE, SESSION_CHECK, CLEANUP, and COMPLETE.
     *
     * @example
     * COMPLETE
     */
    stage?: string;
    /**
     * @remarks
     * The probe result. Valid values:
     * - SUCCESS: The protocol and applicable session checks passed. Undeclared capabilities do not affect the result.
     * - FAILED: The checks failed.
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
export declare class ListMcpsResponseBodyItemsOriginProbe extends $dara.Model {
    /**
     * @remarks
     * Returned only for CODE_PACKAGE. This field is cleared when a new task starts and is empty if no verification has been performed or if the old task did not perform verification. If a subsequent release fails, the current summary is retained, which does not indicate real-time health or the active version status.
     */
    lastResult?: ListMcpsResponseBodyItemsOriginProbeLastResult;
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
export declare class ListMcpsResponseBodyItemsVirtualConfigSourcesTools extends $dara.Model {
    /**
     * @remarks
     * 虚拟 MCP 必填：从源 MCP 的 ListMcpTools 或校验结果取得的定义摘要，客户端原样回传，不自行计算。仅用作手动更新校验基线，不冻结运行时 Schema。
     *
     * @example
     * e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
     */
    expectedDigest?: string;
    /**
     * @remarks
     * 虚拟 MCP 必填：源工具名称。
     *
     * @example
     * get-current-time
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
export declare class ListMcpsResponseBodyItemsVirtualConfigSources extends $dara.Model {
    /**
     * @remarks
     * 虚拟 MCP 必填：当前工作空间的源 MCP ID。
     *
     * @example
     * mcp-server-source-1
     */
    mcpServerId?: string;
    /**
     * @remarks
     * 虚拟 MCP 必填：手动选择的工具，每个源至少一个，全部源最多 100 个。
     */
    tools?: ListMcpsResponseBodyItemsVirtualConfigSourcesTools[];
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
export declare class ListMcpsResponseBodyItemsVirtualConfig extends $dara.Model {
    /**
     * @remarks
     * 虚拟 MCP 必填，填写 1 到 10 个不同的源 MCP。
     */
    sources?: ListMcpsResponseBodyItemsVirtualConfigSources[];
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
     * 已生效修订号。
     *
     * @example
     * 1
     */
    appliedRevision?: number;
    /**
     * @remarks
     * 仅 includeVirtualConfig=true 时返回已生效的源和工具选择。
     */
    appliedVirtualConfig?: ListMcpsResponseBodyItemsAppliedVirtualConfig;
    /**
     * @remarks
     * The backend authentication configuration. enabled specifies whether the configuration is enabled. directProxy specifies the custom authentication header for the direct proxy. httpToMcp specifies the list of OpenAPI credentials for HTTP_TO_MCP.
     */
    auth?: ListMcpsResponseBodyItemsAuth;
    /**
     * @remarks
     * The saved legacy or modern backend policy, which is separate from the transport indicated by protocol and does not indicate verification. This field is not saved for newly created CODE_PACKAGE. For historical CODE_PACKAGE, the existing value does not control Function Compute session affinity or gateway protocol. For the actual protocol, refer to OriginProbe.LastResult.ActualConfiguration.BackendMcpProtocol. This field is returned as empty for historical unspecified values and HTTP_TO_MCP.
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
    deploymentConfig?: ListMcpsResponseBodyItemsDeploymentConfig;
    /**
     * @remarks
     * The description.
     *
     * @example
     * A sample description that illustrates the purpose of the resource
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
     * 当前目标组装最近一次工具校验的 ID。
     *
     * @example
     * val-1234567890
     */
    lastValidationId?: string;
    /**
     * @remarks
     * 当前目标组装的校验状态，取值为 PENDING、RUNNING、PAUSED、COMPLETED、PARTIAL_FAILED、FAILED 或 CANCELED。批量任务完成后按当前 MCP 的结果判定 COMPLETED 或 PARTIAL_FAILED。需查看明细时调用 GetMcp。
     *
     * @example
     * COMPLETED
     */
    lastValidationStatus?: string;
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
     * The read-only progress of the reused existing publish task. This field does not change the primary status of the resource and is empty if no historical operation information is available.
     */
    operation?: ListMcpsResponseBodyItemsOperation;
    /**
     * @remarks
     * 最近一次虚拟 MCP 发布任务 ID，可用于查询和定位异步发布结果。
     *
     * @example
     * task-1234567890
     */
    operationTaskId?: string;
    /**
     * @remarks
     * Only code deployment returns the minimal origin verification summary of the most recent task. This field is empty for direct proxy and HTTP to MCP, and queries do not trigger probing.
     */
    originProbe?: ListMcpsResponseBodyItemsOriginProbe;
    /**
     * @remarks
     * The optional saved origin MCP protocol date display metadata, in YYYY-MM-DD format. You can specify this field during creation and modify it during updates. If omitted during an update, the current value is retained. This field only saves and displays information. It is not a software version, does not restrict the external gateway protocol, does not control backend requests, and does not indicate that real-time verification has passed. This field returns null and has no default value if it is omitted during creation and not updated, missing historically, or used for HTTP_TO_MCP.
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
     * 只读，记录当前生效部署从 FC 读取的镜像地址及 Digest。部署仍使用 deploymentConfig.containerConfiguration.image 中的 Tag；该字段不作为部署入参。部署尚未生效或未取得镜像摘要时为空。
     *
     * @example
     * registry.example.com/mcp@sha256:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
     */
    resolvedImageUri?: string;
    /**
     * @remarks
     * 目标修订号。
     *
     * @example
     * 2
     */
    revision?: number;
    /**
     * @remarks
     * 选择的源数量。
     *
     * @example
     * 2
     */
    sourceCount?: number;
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
     * 虚拟 MCP 发布失败的安全原因码。
     *
     * @example
     * PublishFailed
     */
    statusReasonCode?: string;
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
     * 选择的工具数量。
     *
     * @example
     * 5
     */
    toolCount?: number;
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
     * Indicates whether the MCP is still subject to the usage constraints of the official template.
     */
    usageActive?: boolean;
    /**
     * @remarks
     * 仅 includeVirtualConfig=true 时返回目标源和工具选择。
     */
    virtualConfig?: ListMcpsResponseBodyItemsVirtualConfig;
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
     * The maximum number of entries to return per page.
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
     * The request is processed successfully
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
