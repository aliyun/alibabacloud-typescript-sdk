import * as $dara from '@darabonba/typescript';
export declare class UpdateMcpTemplateConfigRequestBodyAuthDirectProxy extends $dara.Model {
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
export declare class UpdateMcpTemplateConfigRequestBodyAuthHttpToMcp extends $dara.Model {
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
export declare class UpdateMcpTemplateConfigRequestBodyAuth extends $dara.Model {
    /**
     * @remarks
     * The backend authentication configuration for direct proxy.
     */
    directProxy?: UpdateMcpTemplateConfigRequestBodyAuthDirectProxy;
    /**
     * @remarks
     * Specifies whether to enable this configuration.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The list of backend authentication configurations for HTTP-to-MCP conversion.
     */
    httpToMcp?: UpdateMcpTemplateConfigRequestBodyAuthHttpToMcp[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigAccessControl extends $dara.Model {
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
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
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
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigCodeConfiguration extends $dara.Model {
    /**
     * @remarks
     * The temporary code package token returned by GetMcpCodePackageUploadUrl. Use this token to create or update a code deployment after completing the pre-signed upload.
     *
     * @example
     * upload-token
     */
    codePackageToken?: string;
    /**
     * @remarks
     * The full startup command, with each argument passed in order by parameter boundary. For example, when using supergateway to start a stdio MCP, pass supergateway, --stdio, the full subcommand, and the remaining arguments.
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
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigContainerConfiguration extends $dara.Model {
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
     * The MCP runtime mode for the custom container. The custom container must expose a standard MCP endpoint on its own. Set this parameter to SELF_HOSTED.
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
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigHookConfigurationHooks extends $dara.Model {
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
     * Log MCP tool calls
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
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigHookConfiguration extends $dara.Model {
    /**
     * @remarks
     * The hooks executed in array order: PRE_LIST_TOOLS, PRE_CALL_TOOL, POST_LIST_TOOLS, and POST_CALL_TOOL.
     */
    hooks?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigHookConfigurationHooks[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigLogConfiguration extends $dara.Model {
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
     * The log segmentation start rule for Function Compute.
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
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigMcpConfiguration extends $dara.Model {
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
     * The session idle timeout. Unit: seconds. Default value: 1800.
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
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
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigNasConfiguration extends $dara.Model {
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
    mountPoints?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigNasConfigurationMountPoints[];
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
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigNetworkConfiguration extends $dara.Model {
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
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
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
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigOssMountConfiguration extends $dara.Model {
    /**
     * @remarks
     * The list of OSS mount points.
     */
    mountPoints?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigOssMountConfigurationMountPoints[];
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigParameterTransformConfiguration extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable parameter transform and result enhancement.
     */
    enabled?: boolean;
    /**
     * @remarks
     * The reserved reference to the parameter transform and result enhancement rule set.
     *
     * @example
     * rules-1
     */
    ruleSetId?: string;
    /**
     * @remarks
     * The transform rule version.
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
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigProxyConfiguration extends $dara.Model {
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
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfigRuntimeConfiguration extends $dara.Model {
    /**
     * @remarks
     * The CPU specification. Unit: cores. Default value: 0.25.
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
export declare class UpdateMcpTemplateConfigRequestBodyDeploymentConfig extends $dara.Model {
    /**
     * @remarks
     * The MCP ingress access control settings.
     */
    accessControl?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigAccessControl;
    /**
     * @remarks
     * The Agent Identity configuration.
     */
    agentIdentityConfiguration?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigAgentIdentityConfiguration;
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
    codeConfiguration?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigCodeConfiguration;
    /**
     * @remarks
     * The custom container configuration.
     */
    containerConfiguration?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigContainerConfiguration;
    /**
     * @remarks
     * The hook configuration.
     */
    hookConfiguration?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigHookConfiguration;
    /**
     * @remarks
     * The log configuration.
     */
    logConfiguration?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigLogConfiguration;
    /**
     * @remarks
     * The MCP session configuration.
     */
    mcpConfiguration?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigMcpConfiguration;
    /**
     * @remarks
     * The NAS storage configuration.
     */
    nasConfiguration?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigNasConfiguration;
    /**
     * @remarks
     * The network configuration.
     */
    networkConfiguration?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigNetworkConfiguration;
    /**
     * @remarks
     * The OSS mount configuration.
     */
    ossMountConfiguration?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigOssMountConfiguration;
    /**
     * @remarks
     * The parameter transform and result enhancement configuration.
     */
    parameterTransformConfiguration?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigParameterTransformConfiguration;
    /**
     * @remarks
     * The MCP proxy configuration.
     */
    proxyConfiguration?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigProxyConfiguration;
    /**
     * @remarks
     * The runtime and resource configuration.
     */
    runtimeConfiguration?: UpdateMcpTemplateConfigRequestBodyDeploymentConfigRuntimeConfiguration;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateMcpTemplateConfigRequestBody extends $dara.Model {
    /**
     * @remarks
     * The list of remote MCP service addresses.
     */
    addresses?: string[];
    /**
     * @remarks
     * The MCP authentication configuration.
     */
    auth?: UpdateMcpTemplateConfigRequestBodyAuth;
    /**
     * @remarks
     * The deployment configuration for code-deployed MCP.
     */
    deploymentConfig?: UpdateMcpTemplateConfigRequestBodyDeploymentConfig;
    /**
     * @remarks
     * The MCP service description.
     *
     * @example
     * An MCP service for querying knowledge bases
     */
    description?: string;
    /**
     * @remarks
     * The OpenAPI configuration for HTTP-to-MCP conversion, represented as a JSON string.
     *
     * @example
     * {"openapi":"3.0.3","info":{"title":"Knowledge API","version":"1.0.0"},"paths":{}}
     */
    swaggerConfig?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
export declare class UpdateMcpTemplateConfigRequest extends $dara.Model {
    /**
     * @remarks
     * The MCP configuration to update by the specified template version. The configuration must conform to the input schema of the template.
     */
    body?: UpdateMcpTemplateConfigRequestBody;
    /**
     * @remarks
     * The client token that is used to ensure the idempotency of the request.
     *
     * @example
     * 123e4567-e89b-12d3-a456-426655440000
     */
    clientToken?: string;
    /**
     * @remarks
     * The template version used for this update.
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
