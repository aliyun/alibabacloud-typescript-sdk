// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMcpResponseBodyDataAppliedVirtualConfigSourcesTools extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      expectedDigest: 'expectedDigest',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectedDigest: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataAppliedVirtualConfigSources extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      mcpServerId: 'mcpServerId',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServerId: 'string',
      tools: { 'type': 'array', 'itemType': GetMcpResponseBodyDataAppliedVirtualConfigSourcesTools },
    };
  }

  validate() {
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataAppliedVirtualConfig extends $dara.Model {
  /**
   * @remarks
   * Required for virtual MCPs. Specify 1 to 10 different source MCPs.
   */
  sources?: GetMcpResponseBodyDataAppliedVirtualConfigSources[];
  static names(): { [key: string]: string } {
    return {
      sources: 'sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sources: { 'type': 'array', 'itemType': GetMcpResponseBodyDataAppliedVirtualConfigSources },
    };
  }

  validate() {
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataAuthCodePackage extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      headerName: 'headerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      headerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataAuthDirectProxy extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataAuthHttpToMcp extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      credential: 'credential',
      id: 'id',
      name: 'name',
      position: 'position',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credential: 'string',
      id: 'string',
      name: 'string',
      position: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataAuth extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      codePackage: 'codePackage',
      directProxy: 'directProxy',
      enabled: 'enabled',
      httpToMcp: 'httpToMcp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codePackage: GetMcpResponseBodyDataAuthCodePackage,
      directProxy: GetMcpResponseBodyDataAuthDirectProxy,
      enabled: 'boolean',
      httpToMcp: { 'type': 'array', 'itemType': GetMcpResponseBodyDataAuthHttpToMcp },
    };
  }

  validate() {
    if(this.codePackage && typeof (this.codePackage as any).validate === 'function') {
      (this.codePackage as any).validate();
    }
    if(this.directProxy && typeof (this.directProxy as any).validate === 'function') {
      (this.directProxy as any).validate();
    }
    if(Array.isArray(this.httpToMcp)) {
      $dara.Model.validateArray(this.httpToMcp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigAccessControl extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      credentialId: 'credentialId',
      enabled: 'enabled',
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialId: 'string',
      enabled: 'boolean',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      authorizationEnabled: 'authorizationEnabled',
      credentialProviderArn: 'credentialProviderArn',
      credentialProviderType: 'credentialProviderType',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEnabled: 'boolean',
      credentialProviderArn: 'string',
      credentialProviderType: 'string',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigCodeConfiguration extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      codePackageToken: 'codePackageToken',
      command: 'command',
      language: 'language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codePackageToken: 'string',
      command: { 'type': 'array', 'itemType': 'string' },
      language: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigAuthConfig extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigCertConfig extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      insecure: 'insecure',
      rootCaCertBase64: 'rootCaCertBase64',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insecure: 'boolean',
      rootCaCertBase64: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigNetworkConfig extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'securityGroupId',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfig extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      certConfig: 'certConfig',
      networkConfig: 'networkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigAuthConfig,
      certConfig: GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigCertConfig,
      networkConfig: GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigNetworkConfig,
    };
  }

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.certConfig && typeof (this.certConfig as any).validate === 'function') {
      (this.certConfig as any).validate();
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigContainerConfiguration extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'acrInstanceId',
      command: 'command',
      entrypoint: 'entrypoint',
      image: 'image',
      imageRegistryType: 'imageRegistryType',
      mcpRuntimeMode: 'mcpRuntimeMode',
      registryConfig: 'registryConfig',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      command: { 'type': 'array', 'itemType': 'string' },
      entrypoint: { 'type': 'array', 'itemType': 'string' },
      image: 'string',
      imageRegistryType: 'string',
      mcpRuntimeMode: 'string',
      registryConfig: GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfig,
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(Array.isArray(this.entrypoint)) {
      $dara.Model.validateArray(this.entrypoint);
    }
    if(this.registryConfig && typeof (this.registryConfig as any).validate === 'function') {
      (this.registryConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigHookConfigurationHooks extends $dara.Model {
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
  headers?: { [key: string]: string };
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
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'apiVersion',
      description: 'description',
      enabled: 'enabled',
      event: 'event',
      headers: 'headers',
      timeout: 'timeout',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      description: 'string',
      enabled: 'boolean',
      event: 'string',
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      timeout: 'number',
      url: 'string',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigHookConfiguration extends $dara.Model {
  /**
   * @remarks
   * The ordered list of hooks. The system executes the PRE_LIST_TOOLS, PRE_CALL_TOOL, POST_LIST_TOOLS, and POST_CALL_TOOL hooks in the array order.
   */
  hooks?: GetMcpResponseBodyDataDeploymentConfigHookConfigurationHooks[];
  static names(): { [key: string]: string } {
    return {
      hooks: 'hooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hooks: { 'type': 'array', 'itemType': GetMcpResponseBodyDataDeploymentConfigHookConfigurationHooks },
    };
  }

  validate() {
    if(Array.isArray(this.hooks)) {
      $dara.Model.validateArray(this.hooks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigLogConfiguration extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      enableInstanceMetrics: 'enableInstanceMetrics',
      enableRequestMetrics: 'enableRequestMetrics',
      logBeginRule: 'logBeginRule',
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInstanceMetrics: 'boolean',
      enableRequestMetrics: 'boolean',
      logBeginRule: 'string',
      logstore: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigMcpConfiguration extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      endpointPath: 'endpointPath',
      sessionConcurrencyPerInstance: 'sessionConcurrencyPerInstance',
      sessionIdleTimeoutSeconds: 'sessionIdleTimeoutSeconds',
      sessionMaxLifetimeSeconds: 'sessionMaxLifetimeSeconds',
      sessionMode: 'sessionMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointPath: 'string',
      sessionConcurrencyPerInstance: 'number',
      sessionIdleTimeoutSeconds: 'number',
      sessionMaxLifetimeSeconds: 'number',
      sessionMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      enableTls: 'enableTls',
      mountDir: 'mountDir',
      serverAddr: 'serverAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTls: 'boolean',
      mountDir: 'string',
      serverAddr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigNasConfiguration extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      mountPoints: 'mountPoints',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      mountPoints: { 'type': 'array', 'itemType': GetMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints },
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mountPoints)) {
      $dara.Model.validateArray(this.mountPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigNetworkConfiguration extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      networkMode: 'networkMode',
      securityGroupId: 'securityGroupId',
      vSwitchIds: 'vSwitchIds',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkMode: 'string',
      securityGroupId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      bucketPath: 'bucketPath',
      endpoint: 'endpoint',
      mountDir: 'mountDir',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPath: 'string',
      endpoint: 'string',
      mountDir: 'string',
      readOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigOssMountConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of OSS mount points.
   */
  mountPoints?: GetMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': GetMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints },
    };
  }

  validate() {
    if(Array.isArray(this.mountPoints)) {
      $dara.Model.validateArray(this.mountPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      ruleSetId: 'ruleSetId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      ruleSetId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigProxyConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the MCP proxy is enabled.
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfigRuntimeConfiguration extends $dara.Model {
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
  environmentVariables?: { [key: string]: string };
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
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      diskSize: 'diskSize',
      environmentVariables: 'environmentVariables',
      executionRoleArn: 'executionRoleArn',
      instanceConcurrency: 'instanceConcurrency',
      memory: 'memory',
      port: 'port',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      diskSize: 'number',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      executionRoleArn: 'string',
      instanceConcurrency: 'number',
      memory: 'number',
      port: 'number',
      timeout: 'number',
    };
  }

  validate() {
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataDeploymentConfig extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      accessControl: 'accessControl',
      agentIdentityConfiguration: 'agentIdentityConfiguration',
      artifactType: 'artifactType',
      codeConfiguration: 'codeConfiguration',
      containerConfiguration: 'containerConfiguration',
      hookConfiguration: 'hookConfiguration',
      logConfiguration: 'logConfiguration',
      mcpConfiguration: 'mcpConfiguration',
      nasConfiguration: 'nasConfiguration',
      networkConfiguration: 'networkConfiguration',
      ossMountConfiguration: 'ossMountConfiguration',
      parameterTransformConfiguration: 'parameterTransformConfiguration',
      proxyConfiguration: 'proxyConfiguration',
      runtimeConfiguration: 'runtimeConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControl: GetMcpResponseBodyDataDeploymentConfigAccessControl,
      agentIdentityConfiguration: GetMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration,
      artifactType: 'string',
      codeConfiguration: GetMcpResponseBodyDataDeploymentConfigCodeConfiguration,
      containerConfiguration: GetMcpResponseBodyDataDeploymentConfigContainerConfiguration,
      hookConfiguration: GetMcpResponseBodyDataDeploymentConfigHookConfiguration,
      logConfiguration: GetMcpResponseBodyDataDeploymentConfigLogConfiguration,
      mcpConfiguration: GetMcpResponseBodyDataDeploymentConfigMcpConfiguration,
      nasConfiguration: GetMcpResponseBodyDataDeploymentConfigNasConfiguration,
      networkConfiguration: GetMcpResponseBodyDataDeploymentConfigNetworkConfiguration,
      ossMountConfiguration: GetMcpResponseBodyDataDeploymentConfigOssMountConfiguration,
      parameterTransformConfiguration: GetMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration,
      proxyConfiguration: GetMcpResponseBodyDataDeploymentConfigProxyConfiguration,
      runtimeConfiguration: GetMcpResponseBodyDataDeploymentConfigRuntimeConfiguration,
    };
  }

  validate() {
    if(this.accessControl && typeof (this.accessControl as any).validate === 'function') {
      (this.accessControl as any).validate();
    }
    if(this.agentIdentityConfiguration && typeof (this.agentIdentityConfiguration as any).validate === 'function') {
      (this.agentIdentityConfiguration as any).validate();
    }
    if(this.codeConfiguration && typeof (this.codeConfiguration as any).validate === 'function') {
      (this.codeConfiguration as any).validate();
    }
    if(this.containerConfiguration && typeof (this.containerConfiguration as any).validate === 'function') {
      (this.containerConfiguration as any).validate();
    }
    if(this.hookConfiguration && typeof (this.hookConfiguration as any).validate === 'function') {
      (this.hookConfiguration as any).validate();
    }
    if(this.logConfiguration && typeof (this.logConfiguration as any).validate === 'function') {
      (this.logConfiguration as any).validate();
    }
    if(this.mcpConfiguration && typeof (this.mcpConfiguration as any).validate === 'function') {
      (this.mcpConfiguration as any).validate();
    }
    if(this.nasConfiguration && typeof (this.nasConfiguration as any).validate === 'function') {
      (this.nasConfiguration as any).validate();
    }
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
    }
    if(this.ossMountConfiguration && typeof (this.ossMountConfiguration as any).validate === 'function') {
      (this.ossMountConfiguration as any).validate();
    }
    if(this.parameterTransformConfiguration && typeof (this.parameterTransformConfiguration as any).validate === 'function') {
      (this.parameterTransformConfiguration as any).validate();
    }
    if(this.proxyConfiguration && typeof (this.proxyConfiguration as any).validate === 'function') {
      (this.proxyConfiguration as any).validate();
    }
    if(this.runtimeConfiguration && typeof (this.runtimeConfiguration as any).validate === 'function') {
      (this.runtimeConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataLastValidationItemsSourcesToolsCurrentDefinition extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      inputSchema: 'inputSchema',
      outputSchema: 'outputSchema',
      toolDescription: 'toolDescription',
      toolName: 'toolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputSchema: 'string',
      outputSchema: 'string',
      toolDescription: 'string',
      toolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataLastValidationItemsSourcesTools extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      currentDefinition: 'currentDefinition',
      currentDigest: 'currentDigest',
      name: 'name',
      savedDigest: 'savedDigest',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentDefinition: GetMcpResponseBodyDataLastValidationItemsSourcesToolsCurrentDefinition,
      currentDigest: 'string',
      name: 'string',
      savedDigest: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.currentDefinition && typeof (this.currentDefinition as any).validate === 'function') {
      (this.currentDefinition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataLastValidationItemsSources extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      affectedVirtualMcps: 'affectedVirtualMcps',
      checkedAt: 'checkedAt',
      mcpServerId: 'mcpServerId',
      reasonCode: 'reasonCode',
      status: 'status',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedVirtualMcps: { 'type': 'array', 'itemType': 'string' },
      checkedAt: 'string',
      mcpServerId: 'string',
      reasonCode: 'string',
      status: 'string',
      tools: { 'type': 'array', 'itemType': GetMcpResponseBodyDataLastValidationItemsSourcesTools },
    };
  }

  validate() {
    if(Array.isArray(this.affectedVirtualMcps)) {
      $dara.Model.validateArray(this.affectedVirtualMcps);
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataLastValidationItems extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      checkedRevision: 'checkedRevision',
      sources: 'sources',
      virtualMcpServerId: 'virtualMcpServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkedRevision: 'number',
      sources: { 'type': 'array', 'itemType': GetMcpResponseBodyDataLastValidationItemsSources },
      virtualMcpServerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataLastValidation extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      failureCode: 'failureCode',
      failureMessage: 'failureMessage',
      finishedAt: 'finishedAt',
      items: 'items',
      status: 'status',
      validationId: 'validationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      failureCode: 'string',
      failureMessage: 'string',
      finishedAt: 'string',
      items: { 'type': 'array', 'itemType': GetMcpResponseBodyDataLastValidationItems },
      status: 'string',
      validationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataMarketSource extends $dara.Model {
  /**
   * @remarks
   * The ID of the MCP marketplace template.
   * 
   * @example
   * market-1
   */
  marketItemId?: string;
  static names(): { [key: string]: string } {
    return {
      marketItemId: 'marketItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marketItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataOperationError extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      retryable: 'retryable',
      source: 'source',
      stage: 'stage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      retryable: 'boolean',
      source: 'string',
      stage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataOperation extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      error: 'error',
      operationId: 'operationId',
      stage: 'stage',
      status: 'status',
      type: 'type',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: GetMcpResponseBodyDataOperationError,
      operationId: 'string',
      stage: 'string',
      status: 'string',
      type: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataOriginProbeLastResultActualConfiguration extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      backendMcpProtocol: 'backendMcpProtocol',
      protocol: 'protocol',
      protocolVersion: 'protocolVersion',
      sessionMode: 'sessionMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendMcpProtocol: 'string',
      protocol: 'string',
      protocolVersion: 'string',
      sessionMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataOriginProbeLastResultError extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      retryable: 'retryable',
      source: 'source',
      stage: 'stage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      retryable: 'boolean',
      source: 'string',
      stage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataOriginProbeLastResult extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      actualConfiguration: 'actualConfiguration',
      error: 'error',
      probedAt: 'probedAt',
      stage: 'stage',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualConfiguration: GetMcpResponseBodyDataOriginProbeLastResultActualConfiguration,
      error: GetMcpResponseBodyDataOriginProbeLastResultError,
      probedAt: 'string',
      stage: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.actualConfiguration && typeof (this.actualConfiguration as any).validate === 'function') {
      (this.actualConfiguration as any).validate();
    }
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataOriginProbe extends $dara.Model {
  /**
   * @remarks
   * Returned only for CODE_PACKAGE. It is cleared when a new task starts and is empty if no verification has been performed or if the old task did not perform verification. If a subsequent release fails, this summary is retained, which does not indicate real-time health or the active version status.
   */
  lastResult?: GetMcpResponseBodyDataOriginProbeLastResult;
  static names(): { [key: string]: string } {
    return {
      lastResult: 'lastResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastResult: GetMcpResponseBodyDataOriginProbeLastResult,
    };
  }

  validate() {
    if(this.lastResult && typeof (this.lastResult as any).validate === 'function') {
      (this.lastResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataTemplate extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      appliedTemplateVersion: 'appliedTemplateVersion',
      latestTemplateVersion: 'latestTemplateVersion',
      schemaVersion: 'schemaVersion',
      templateInputSchema: 'templateInputSchema',
      updateAvailable: 'updateAvailable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedTemplateVersion: 'string',
      latestTemplateVersion: 'string',
      schemaVersion: 'string',
      templateInputSchema: 'string',
      updateAvailable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataVirtualConfigSourcesTools extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      expectedDigest: 'expectedDigest',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectedDigest: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataVirtualConfigSources extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      mcpServerId: 'mcpServerId',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServerId: 'string',
      tools: { 'type': 'array', 'itemType': GetMcpResponseBodyDataVirtualConfigSourcesTools },
    };
  }

  validate() {
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyDataVirtualConfig extends $dara.Model {
  /**
   * @remarks
   * Required for virtual MCPs. Specify 1 to 10 different source MCPs.
   */
  sources?: GetMcpResponseBodyDataVirtualConfigSources[];
  static names(): { [key: string]: string } {
    return {
      sources: 'sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sources: { 'type': 'array', 'itemType': GetMcpResponseBodyDataVirtualConfigSources },
    };
  }

  validate() {
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBodyData extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      appliedRevision: 'appliedRevision',
      appliedVirtualConfig: 'appliedVirtualConfig',
      auth: 'auth',
      backendMcpProtocol: 'backendMcpProtocol',
      createdAt: 'createdAt',
      customTags: 'customTags',
      deploymentConfig: 'deploymentConfig',
      description: 'description',
      endpoint: 'endpoint',
      functionName: 'functionName',
      lastValidation: 'lastValidation',
      lastValidationId: 'lastValidationId',
      marketSource: 'marketSource',
      mcpServerConfig: 'mcpServerConfig',
      mcpServerId: 'mcpServerId',
      name: 'name',
      officialTag: 'officialTag',
      operation: 'operation',
      operationTaskId: 'operationTaskId',
      originProbe: 'originProbe',
      originProtocolVersion: 'originProtocolVersion',
      permissionMode: 'permissionMode',
      protocol: 'protocol',
      resolvedImageUri: 'resolvedImageUri',
      revision: 'revision',
      sourceCount: 'sourceCount',
      status: 'status',
      statusReason: 'statusReason',
      statusReasonCode: 'statusReasonCode',
      swaggerConfig: 'swaggerConfig',
      template: 'template',
      toolCount: 'toolCount',
      type: 'type',
      updatedAt: 'updatedAt',
      url: 'url',
      usageActive: 'usageActive',
      virtualConfig: 'virtualConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      appliedRevision: 'number',
      appliedVirtualConfig: GetMcpResponseBodyDataAppliedVirtualConfig,
      auth: GetMcpResponseBodyDataAuth,
      backendMcpProtocol: 'string',
      createdAt: 'string',
      customTags: { 'type': 'array', 'itemType': 'string' },
      deploymentConfig: GetMcpResponseBodyDataDeploymentConfig,
      description: 'string',
      endpoint: 'string',
      functionName: 'string',
      lastValidation: GetMcpResponseBodyDataLastValidation,
      lastValidationId: 'string',
      marketSource: GetMcpResponseBodyDataMarketSource,
      mcpServerConfig: 'string',
      mcpServerId: 'string',
      name: 'string',
      officialTag: 'string',
      operation: GetMcpResponseBodyDataOperation,
      operationTaskId: 'string',
      originProbe: GetMcpResponseBodyDataOriginProbe,
      originProtocolVersion: 'string',
      permissionMode: 'string',
      protocol: 'string',
      resolvedImageUri: 'string',
      revision: 'number',
      sourceCount: 'number',
      status: 'string',
      statusReason: 'string',
      statusReasonCode: 'string',
      swaggerConfig: 'string',
      template: GetMcpResponseBodyDataTemplate,
      toolCount: 'number',
      type: 'string',
      updatedAt: 'string',
      url: 'string',
      usageActive: 'boolean',
      virtualConfig: GetMcpResponseBodyDataVirtualConfig,
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(this.appliedVirtualConfig && typeof (this.appliedVirtualConfig as any).validate === 'function') {
      (this.appliedVirtualConfig as any).validate();
    }
    if(this.auth && typeof (this.auth as any).validate === 'function') {
      (this.auth as any).validate();
    }
    if(Array.isArray(this.customTags)) {
      $dara.Model.validateArray(this.customTags);
    }
    if(this.deploymentConfig && typeof (this.deploymentConfig as any).validate === 'function') {
      (this.deploymentConfig as any).validate();
    }
    if(this.lastValidation && typeof (this.lastValidation as any).validate === 'function') {
      (this.lastValidation as any).validate();
    }
    if(this.marketSource && typeof (this.marketSource as any).validate === 'function') {
      (this.marketSource as any).validate();
    }
    if(this.operation && typeof (this.operation as any).validate === 'function') {
      (this.operation as any).validate();
    }
    if(this.originProbe && typeof (this.originProbe as any).validate === 'function') {
      (this.originProbe as any).validate();
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    if(this.virtualConfig && typeof (this.virtualConfig as any).validate === 'function') {
      (this.virtualConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcpResponseBody extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMcpResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

