import * as $dara from '@darabonba/typescript';
export declare class GetMcpResponseBodyDataAppliedVirtualConfigSourcesTools extends $dara.Model {
    /**
     * @remarks
     * Required for virtual MCPs. The definition digest obtained from the ListMcpTools operation or the validation result of the source MCP. The client passes this value back as is without calculating it. This value is used only to manually update the validation baseline and does not freeze the runtime schema.
     *
     * @example
     * e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
     */
    expectedDigest?: string;
    /**
     * @remarks
     * Required for virtual MCPs. The name of the source tool.
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
export declare class GetMcpResponseBodyDataAppliedVirtualConfigSources extends $dara.Model {
    /**
     * @remarks
     * Required for virtual MCPs. The ID of the source MCP in the current workspace.
     *
     * @example
     * mcp-server-source-1
     */
    mcpServerId?: string;
    /**
     * @remarks
     * Required for virtual MCPs. The manually selected tools. Specify at least one tool for each source, up to 100 tools across all sources.
     */
    tools?: GetMcpResponseBodyDataAppliedVirtualConfigSourcesTools[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataAppliedVirtualConfig extends $dara.Model {
    /**
     * @remarks
     * Required for virtual MCPs. Specify 1 to 10 different source MCPs.
     */
    sources?: GetMcpResponseBodyDataAppliedVirtualConfigSources[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataAuthCodePackage extends $dara.Model {
    /**
     * @remarks
     * The API key used to verify MCP callers.
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
     * The caller API key authentication configuration for the code-deployed MCP.
     */
    codePackage?: GetMcpResponseBodyDataAuthCodePackage;
    /**
     * @remarks
     * The authentication configuration for the direct proxy.
     */
    directProxy?: GetMcpResponseBodyDataAuthDirectProxy;
    /**
     * @remarks
     * Specifies whether the configuration is enabled.
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
     * The AgentCore credential referenced when the mode is set to CREDENTIAL.
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
     * The access control mode. ANONYMOUS indicates anonymous access, and CREDENTIAL indicates the use of AgentCore access credentials.
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
export declare class GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigAuthConfig extends $dara.Model {
    /**
     * @remarks
     * The image registry password. The password is encrypted and stored on the server, and is not returned in query responses. Omit this field during updates to retain the existing password.
     *
     * @example
     * example-password
     */
    password?: string;
    /**
     * @remarks
     * The image registry username.
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
export declare class GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigCertConfig extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to skip the verification of the image registry TLS certificate. Valid values:
     * - true: The verification is skipped.
     * - false: The verification is not skipped.
     * Default value: false.
     *
     * @example
     * false
     */
    insecure?: boolean;
    /**
     * @remarks
     * The Base64-encoded root CA certificate of the image registry, used to verify self-signed certificates.
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
export declare class GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigNetworkConfig extends $dara.Model {
    /**
     * @remarks
     * The ID of the security group used to pull images.
     *
     * @example
     * sg-example
     */
    securityGroupId?: string;
    /**
     * @remarks
     * The ID of the vSwitch used to pull images.
     *
     * @example
     * vsw-example
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The ID of the VPC where the image registry is located.
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
export declare class GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfig extends $dara.Model {
    /**
     * @remarks
     * The image registry authentication configuration. Specify this field when the image registry requires username and password authentication.
     */
    authConfig?: GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigAuthConfig;
    /**
     * @remarks
     * The TLS certificate verification configuration for the image registry.
     */
    certConfig?: GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigCertConfig;
    /**
     * @remarks
     * The network configuration for image pulling. Specify this field only when the image registry is accessible only within a VPC. Function Compute (FC) pulls images through this network.
     */
    networkConfig?: GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigNetworkConfig;
    static names(): {
        [key: string]: string;
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
     * The container image URI.
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
     * The MCP runtime mode. Custom containers must currently expose the standard MCP themselves. Set the value to SELF_HOSTED.
     *
     * @example
     * SELF_HOSTED
     */
    mcpRuntimeMode?: string;
    /**
     * @remarks
     * The custom image registry configuration. This configuration takes effect only when ImageRegistryType is set to CUSTOM. It is used to configure image pull authentication, TLS certificate verification, and the private network for image pulling.
     */
    registryConfig?: GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfig;
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
     * Record MCP tool invoke
     */
    description?: string;
    /**
     * @remarks
     * Specifies whether the hook is enabled.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The event that triggers the hook.
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
     * The ordered list of hooks. The system executes the PRE_LIST_TOOLS, PRE_CALL_TOOL, POST_LIST_TOOLS, and POST_CALL_TOOL hooks in the array order.
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
     * The Function Compute log splitting start rule.
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
     * The name of the Log Service project.
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
     * The number of concurrent sessions per instance. This value is currently fixed at 1.
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
    /**
     * @remarks
     * Applies only to StreamableHTTP. The default value is STATEFUL upon creation. If omitted during an update, the original value is retained. STATELESS disables Function Compute session affinity, and the stdio gateway does not enable stateful mode. Native HTTP services must support stateless MCP.
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
export declare class GetMcpResponseBodyDataDeploymentConfigProxyConfiguration extends $dara.Model {
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
export declare class GetMcpResponseBodyDataDeploymentConfigRuntimeConfiguration extends $dara.Model {
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
     * The temporary disk size, in MB. Valid values: 512 and 10240.
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
     * The maximum number of concurrent requests per instance. Default value: 200.
     *
     * @example
     * 200
     */
    instanceConcurrency?: number;
    /**
     * @remarks
     * The memory specification, in MB. Default value: 512.
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
     * The function timeout period, in seconds. Default value: 300.
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
     * The MCP entry access control.
     */
    accessControl?: GetMcpResponseBodyDataDeploymentConfigAccessControl;
    /**
     * @remarks
     * The Agent identity configuration.
     */
    agentIdentityConfiguration?: GetMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration;
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
export declare class GetMcpResponseBodyDataLastValidationItemsSourcesToolsCurrentDefinition extends $dara.Model {
    /**
     * @remarks
     * The JSON schema for input parameters.
     *
     * @example
     * {"type":"object","properties":{}}
     */
    inputSchema?: string;
    /**
     * @remarks
     * The JSON schema for output results.
     *
     * @example
     * {"type":"object","properties":{"time":{"type":"string"}}}
     */
    outputSchema?: string;
    /**
     * @remarks
     * The description of the tool.
     *
     * @example
     * Get the current time
     */
    toolDescription?: string;
    /**
     * @remarks
     * The name of the tool.
     *
     * @example
     * get-current-time
     */
    toolName?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataLastValidationItemsSourcesTools extends $dara.Model {
    /**
     * @remarks
     * The current definition. This field is not returned if the read fails or the tool does not exist.
     */
    currentDefinition?: GetMcpResponseBodyDataLastValidationItemsSourcesToolsCurrentDefinition;
    /**
     * @remarks
     * The digest of the current definition.
     *
     * @example
     * e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
     */
    currentDigest?: string;
    /**
     * @remarks
     * The name of the source tool.
     *
     * @example
     * get-current-time
     */
    name?: string;
    /**
     * @remarks
     * The digest saved at the time of selection.
     *
     * @example
     * e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
     */
    savedDigest?: string;
    /**
     * @remarks
     * The status of the tool: UNCHANGED, CHANGED, REMOVED, or UNKNOWN. The status is compared with the digest baseline at the time of saving. CHANGED does not necessarily mean that the current schema of the gateway is out of sync. UNKNOWN indicates a read failure and must not be treated as a deletion.
     *
     * @example
     * UNCHANGED
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
export declare class GetMcpResponseBodyDataLastValidationItemsSources extends $dara.Model {
    /**
     * @remarks
     * The IDs of the virtual MCPs that reference this source. This field is for display purposes only.
     */
    affectedVirtualMcps?: string[];
    /**
     * @remarks
     * The time when the source was checked, in UTC ISO 8601 format.
     *
     * @example
     * 2026-11-25T10:00:03Z
     */
    checkedAt?: string;
    /**
     * @remarks
     * The ID of the source MCP.
     *
     * @example
     * mcp-server-source-1
     */
    mcpServerId?: string;
    /**
     * @remarks
     * The reason code indicating why the source is unreadable. A read failure is not treated as a tool deletion.
     *
     * @example
     * SourceUnavailable
     */
    reasonCode?: string;
    /**
     * @remarks
     * The read status of the source. Valid values: AVAILABLE and UNKNOWN.
     *
     * @example
     * AVAILABLE
     */
    status?: string;
    /**
     * @remarks
     * The validation results of the selected tools.
     */
    tools?: GetMcpResponseBodyDataLastValidationItemsSourcesTools[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataLastValidationItems extends $dara.Model {
    /**
     * @remarks
     * The virtual MCP revision number read by the server when the validation is submitted.
     *
     * @example
     * 3
     */
    checkedRevision?: number;
    /**
     * @remarks
     * The results returned by source.
     */
    sources?: GetMcpResponseBodyDataLastValidationItemsSources[];
    /**
     * @remarks
     * The ID of the checked virtual MCP, used to associate with the mcpIds in the request.
     *
     * @example
     * mcp-server-virtual-1
     */
    virtualMcpServerId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataLastValidation extends $dara.Model {
    /**
     * @remarks
     * The time when the validation was submitted, in UTC ISO 8601 format.
     *
     * @example
     * 2026-11-25T10:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * Returned only when the status is FAILED. Valid values:
     * - Workspace.NotFound: The workspace no longer exists during execution.
     * - ValidationFailed: An exception occurred during task execution.
     * Source MCP read failures are returned through items.sources.reasonCode, and the corresponding task status is PARTIAL_FAILED.
     *
     * @example
     * ValidationFailed
     */
    failureCode?: string;
    /**
     * @remarks
     * The secure reason description returned only when the status is FAILED. It does not contain internal exceptions, credentials, or upstream raw responses. When querying a failed task, the API itself still returns a success response. You must read data.status and this field to obtain the failure details.
     *
     * @example
     * Failed to validate virtual MCP tools.
     */
    failureMessage?: string;
    /**
     * @remarks
     * Returned only when the status is COMPLETED, PARTIAL_FAILED, FAILED, or CANCELED. The time is in UTC ISO 8601 format. This field is not returned when the status is PENDING, RUNNING, or PAUSED.
     *
     * @example
     * 2026-11-25T10:00:05Z
     */
    finishedAt?: string;
    /**
     * @remarks
     * The itemized validation report for the selected tools. It does not automatically modify the selection or enumerate new unselected tools. New candidate tools are obtained through the ListMcpTools operation of the source MCP.
     */
    items?: GetMcpResponseBodyDataLastValidationItems[];
    /**
     * @remarks
     * The status of the validation task. Valid values:
     * - PENDING: Waiting to be executed.
     * - RUNNING: Executing, including waiting for retries.
     * - PAUSED: Paused and not yet finished.
     * - COMPLETED: The check is finished, but CHANGED or REMOVED items may still exist.
     * - PARTIAL_FAILED: UNKNOWN items exist, and all sources may be unreadable. Successful items are not guaranteed.
     * - FAILED: The task execution failed.
     * - CANCELED: The task is canceled.
     * The terminal states are COMPLETED, PARTIAL_FAILED, FAILED, and CANCELED. The internal SUCCESS state is mapped to COMPLETED or PARTIAL_FAILED and is not directly returned.
     *
     * @example
     * COMPLETED
     */
    status?: string;
    /**
     * @remarks
     * The ID of the validation task.
     *
     * @example
     * val-1234567890
     */
    validationId?: string;
    static names(): {
        [key: string]: string;
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
     * The ID of the MCP marketplace template.
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
     * Returns only bounded diagnostic codes and does not return the original error body from the origin.
     *
     * @example
     * PROBE_TIMEOUT
     */
    code?: string;
    /**
     * @remarks
     * The trimmed and desensitized necessary diagnostics, which do not include credentials or original responses.
     *
     * @example
     * The probe deadline was exceeded.
     */
    message?: string;
    /**
     * @remarks
     * Indicates whether it is suitable to retry according to the restricted policy. It does not trigger automatic retries.
     */
    retryable?: boolean;
    /**
     * @remarks
     * MAGIC, ROUTER, NETWORK, ORIGIN, or UNKNOWN. It is determined solely based on actual evidence.
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
     * The desensitized error of the current release operation. Gateway or formal link failures after the origin passes are expressed by this field.
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
     * Compute deployment, origin verification, summary saving, gateway release, ingress credential synchronization, formal link verification, or deployment submission. Old tasks retain their original stage semantics.
     *
     * @example
     * VALIDATE_ORIGIN
     */
    stage?: string;
    /**
     * @remarks
     * PENDING, RUNNING, SUCCEEDED, or FAILED.
     *
     * @example
     * RUNNING
     */
    status?: string;
    /**
     * @remarks
     * Currently PUBLISH.
     *
     * @example
     * PUBLISH
     */
    type?: string;
    /**
     * @remarks
     * The time in ISO 8601 UTC format.
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
     * The verified legacy or modern policy. It is empty when unconfirmed.
     *
     * @example
     * modern
     */
    backendMcpProtocol?: string;
    /**
     * @remarks
     * The verified SSE or StreamableHTTP. It is empty when unconfirmed.
     *
     * @example
     * StreamableHTTP
     */
    protocol?: string;
    /**
     * @remarks
     * The actual negotiated or selected and verified date version. It is empty when unconfirmed.
     *
     * @example
     * 2025-03-26
     */
    protocolVersion?: string;
    /**
     * @remarks
     * STATEFUL, STATELESS, or NOT_APPLICABLE. It is empty when unconfirmed.
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
     * Returns only bounded diagnostic codes and does not return the original error body from the origin.
     *
     * @example
     * PROBE_TIMEOUT
     */
    code?: string;
    /**
     * @remarks
     * The trimmed and desensitized necessary diagnostics, which do not include credentials or original responses.
     *
     * @example
     * The probe deadline was exceeded.
     */
    message?: string;
    /**
     * @remarks
     * Indicates whether it is suitable to retry according to the restricted policy. It does not trigger automatic retries.
     */
    retryable?: boolean;
    /**
     * @remarks
     * MAGIC, ROUTER, NETWORK, ORIGIN, or UNKNOWN. It is determined solely based on actual evidence.
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
     * The actual configuration confirmed by evidence in this verification. It is empty when no confirmed information is available and is not inferred from the expected configuration.
     */
    actualConfiguration?: GetMcpResponseBodyDataOriginProbeLastResultActualConfiguration;
    /**
     * @remarks
     * Empty upon success. It only saves the desensitized diagnostics required for this verification.
     */
    error?: GetMcpResponseBodyDataOriginProbeLastResultError;
    /**
     * @remarks
     * The time of this origin verification, in ISO 8601 UTC format.
     *
     * @example
     * 2026-11-19T08:30:00Z
     */
    probedAt?: string;
    /**
     * @remarks
     * CONNECT, DISCOVER, INITIALIZE, SESSION_CHECK, CLEANUP, or COMPLETE.
     *
     * @example
     * COMPLETE
     */
    stage?: string;
    /**
     * @remarks
     * SUCCESS or FAILED. The status is SUCCESS if the protocol and applicable session checks pass. Not declaring any capabilities does not affect the passing status.
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
     * Returned only for CODE_PACKAGE. It is cleared when a new task starts and is empty if no verification has been performed or if the old task did not perform verification. If a subsequent release fails, this summary is retained, which does not indicate real-time health or the active version status.
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
     * The version of the template schema.
     *
     * @example
     * 1.0
     */
    schemaVersion?: string;
    /**
     * @remarks
     * The input schema of the template, represented as a JSON Schema string.
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
export declare class GetMcpResponseBodyDataVirtualConfigSourcesTools extends $dara.Model {
    /**
     * @remarks
     * Required for virtual MCPs. The definition digest obtained from the ListMcpTools operation or the validation result of the source MCP. The client passes this value back as is without calculating it. This value is used only to manually update the validation baseline and does not freeze the runtime schema.
     *
     * @example
     * e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
     */
    expectedDigest?: string;
    /**
     * @remarks
     * Required for virtual MCPs. The name of the source tool.
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
export declare class GetMcpResponseBodyDataVirtualConfigSources extends $dara.Model {
    /**
     * @remarks
     * Required for virtual MCPs. The ID of the source MCP in the current workspace.
     *
     * @example
     * mcp-server-source-1
     */
    mcpServerId?: string;
    /**
     * @remarks
     * Required for virtual MCPs. The manually selected tools. Specify at least one tool for each source, up to 100 tools across all sources.
     */
    tools?: GetMcpResponseBodyDataVirtualConfigSourcesTools[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class GetMcpResponseBodyDataVirtualConfig extends $dara.Model {
    /**
     * @remarks
     * Required for virtual MCPs. Specify 1 to 10 different source MCPs.
     */
    sources?: GetMcpResponseBodyDataVirtualConfigSources[];
    static names(): {
        [key: string]: string;
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
     * The applied revision number.
     *
     * @example
     * 1
     */
    appliedRevision?: number;
    /**
     * @remarks
     * The applied sources and tool selection.
     */
    appliedVirtualConfig?: GetMcpResponseBodyDataAppliedVirtualConfig;
    /**
     * @remarks
     * The backend authentication configuration. enabled specifies whether the configuration is enabled. directProxy specifies the custom authentication header for the direct proxy. httpToMcp specifies the list of OpenAPI credentials for HTTP_TO_MCP.
     */
    auth?: GetMcpResponseBodyDataAuth;
    /**
     * @remarks
     * The saved legacy or modern backend policy, which is separate from the transport indicated by the protocol and does not indicate verification. This field is not saved for newly created CODE_PACKAGE. For historical CODE_PACKAGE, the existing value does not control Function Compute session affinity or gateway protocol. For the actual protocol, refer to OriginProbe.LastResult.ActualConfiguration.BackendMcpProtocol. This field returns null for historically unspecified values and HTTP_TO_MCP.
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
     * A sample description used to illustrate the purpose of the resource
     */
    description?: string;
    /**
     * @remarks
     * The MCP endpoint that can be called by users or agents. It is empty before deployment is completed.
     *
     * @example
     * https://example.com/mcp
     */
    endpoint?: string;
    /**
     * @remarks
     * The name of the Function Compute function corresponding to the CODE_PACKAGE MCP. This field is empty before the deployment is complete, and is also empty for other types.
     *
     * @example
     * agentcore-mcp-example
     */
    functionName?: string;
    /**
     * @remarks
     * The validation progress, end time, failure cause, and tool details for the current target assembly. For batch submissions, the items field contains only the results for the current MCP. After a new assembly is saved, the old validation details are no longer returned.
     */
    lastValidation?: GetMcpResponseBodyDataLastValidation;
    /**
     * @remarks
     * The ID of the last tool validation for the current target assembly.
     *
     * @example
     * val-1234567890
     */
    lastValidationId?: string;
    /**
     * @remarks
     * The MCP source marketplace template.
     */
    marketSource?: GetMcpResponseBodyDataMarketSource;
    /**
     * @remarks
     * The server-side configuration of the MCP.
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
     * Reuses the read-only progress of existing release tasks. It does not change the primary status of the resource and is empty when there is no historical operation information.
     */
    operation?: GetMcpResponseBodyDataOperation;
    /**
     * @remarks
     * The ID of the most recent virtual MCP publishing task. You can use this ID to query and locate the results of the asynchronous publishing task.
     *
     * @example
     * task-1234567890
     */
    operationTaskId?: string;
    /**
     * @remarks
     * Returns the minimal origin verification summary of the most recent task only for code deployment. It is empty for direct connection and HTTP to MCP. Queries do not trigger probing.
     */
    originProbe?: GetMcpResponseBodyDataOriginProbe;
    /**
     * @remarks
     * The optional saved metadata for the origin MCP protocol date display, in YYYY-MM-DD format. It can be specified during creation and modified during updates. If omitted during an update, the current value is retained. This field only saves and displays information. It is not a software version, does not restrict the external gateway protocol, does not control backend requests, and does not indicate that real-time verification has passed. It returns null if omitted during creation and not updated, if historically missing, or for HTTP_TO_MCP. There is no default value.
     *
     * @example
     * 2025-03-26
     */
    originProtocolVersion?: string;
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
     * Read-only. Records the image URI and digest retrieved from Function Compute (FC) for the active deployment. The deployment still uses the tag specified in deploymentConfig.containerConfiguration.image. This field is not used as an input parameter for deployment. It is empty if the deployment is not yet active or the image digest has not been obtained.
     *
     * @example
     * registry.example.com/mcp@sha256:0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
     */
    resolvedImageUri?: string;
    /**
     * @remarks
     * The target revision number.
     *
     * @example
     * 2
     */
    revision?: number;
    /**
     * @remarks
     * The number of selected sources.
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
     * The security reason code for the virtual MCP publishing failure.
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
     * The template schema for the bound version of the usage MCP. This field is not returned for regular MCPs.
     */
    template?: GetMcpResponseBodyDataTemplate;
    /**
     * @remarks
     * The number of selected tools.
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
     * The last update time of the MCP, in ISO 8601 UTC format.
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
    /**
     * @remarks
     * The target sources and tool selection.
     */
    virtualConfig?: GetMcpResponseBodyDataVirtualConfig;
    static names(): {
        [key: string]: string;
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
