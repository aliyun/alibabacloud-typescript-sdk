// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpRequestBodyAuthCodePackage extends $dara.Model {
  /**
   * @remarks
   * The API key used to validate the MCP caller.
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

export class CreateMcpRequestBodyAuthDirectProxy extends $dara.Model {
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

export class CreateMcpRequestBodyAuthHttpToMcp extends $dara.Model {
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

export class CreateMcpRequestBodyAuth extends $dara.Model {
  /**
   * @remarks
   * The caller API key authentication configuration for the code package MCP.
   */
  codePackage?: CreateMcpRequestBodyAuthCodePackage;
  /**
   * @remarks
   * The authentication configuration for the direct proxy.
   */
  directProxy?: CreateMcpRequestBodyAuthDirectProxy;
  /**
   * @remarks
   * Specifies whether to enable the configuration.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of authentication configurations for HTTP_TO_MCP.
   */
  httpToMcp?: CreateMcpRequestBodyAuthHttpToMcp[];
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
      codePackage: CreateMcpRequestBodyAuthCodePackage,
      directProxy: CreateMcpRequestBodyAuthDirectProxy,
      enabled: 'boolean',
      httpToMcp: { 'type': 'array', 'itemType': CreateMcpRequestBodyAuthHttpToMcp },
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

export class CreateMcpRequestBodyDeploymentConfigAccessControl extends $dara.Model {
  /**
   * @remarks
   * The AgentCore Credential referenced when the mode is CREDENTIAL.
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
   * ANONYMOUS indicates anonymous access. CREDENTIAL indicates the use of AgentCore access credentials.
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

export class CreateMcpRequestBodyDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
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

export class CreateMcpRequestBodyDeploymentConfigCodeConfiguration extends $dara.Model {
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
   * The public Alibaba Cloud OSS HTTP(S) URL that can be directly passed when creating a code deployment. You must specify either this parameter or CodePackageToken. This parameter is only supported by CreateMcp, and is not supported for update and query operations.
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
  static names(): { [key: string]: string } {
    return {
      codePackageToken: 'codePackageToken',
      codePackageUrl: 'codePackageUrl',
      command: 'command',
      language: 'language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codePackageToken: 'string',
      codePackageUrl: 'string',
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

export class CreateMcpRequestBodyDeploymentConfigContainerConfigurationRegistryConfigAuthConfig extends $dara.Model {
  /**
   * @remarks
   * The password for the image registry. The password is encrypted and stored on the server, and is not returned in query responses. If you omit this parameter during an update, the existing password is retained.
   * 
   * @example
   * example-password
   */
  password?: string;
  /**
   * @remarks
   * The username for the image registry.
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

export class CreateMcpRequestBodyDeploymentConfigContainerConfigurationRegistryConfigCertConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to skip the verification of the TLS certificate of the image registry. A value of true indicates that the verification is skipped. Default value: false.
   * 
   * @example
   * false
   */
  insecure?: boolean;
  /**
   * @remarks
   * The Base64-encoded root CA certificate of the image registry, which is used to verify self-signed certificates.
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

export class CreateMcpRequestBodyDeploymentConfigContainerConfigurationRegistryConfigNetworkConfig extends $dara.Model {
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
   * The ID of the VPC where the image registry resides.
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

export class CreateMcpRequestBodyDeploymentConfigContainerConfigurationRegistryConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication configuration of the image registry. Specify this parameter when the image registry requires username and password authentication.
   */
  authConfig?: CreateMcpRequestBodyDeploymentConfigContainerConfigurationRegistryConfigAuthConfig;
  /**
   * @remarks
   * The TLS certificate verification configuration of the image registry.
   */
  certConfig?: CreateMcpRequestBodyDeploymentConfigContainerConfigurationRegistryConfigCertConfig;
  /**
   * @remarks
   * The network configuration for image pulling. Specify this parameter when the image registry is accessible only within a VPC. Function Compute pulls images through this network.
   */
  networkConfig?: CreateMcpRequestBodyDeploymentConfigContainerConfigurationRegistryConfigNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      certConfig: 'certConfig',
      networkConfig: 'networkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: CreateMcpRequestBodyDeploymentConfigContainerConfigurationRegistryConfigAuthConfig,
      certConfig: CreateMcpRequestBodyDeploymentConfigContainerConfigurationRegistryConfigCertConfig,
      networkConfig: CreateMcpRequestBodyDeploymentConfigContainerConfigurationRegistryConfigNetworkConfig,
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

export class CreateMcpRequestBodyDeploymentConfigContainerConfiguration extends $dara.Model {
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
   * The entrypoint parameters of the container.
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
   * The MCP runtime mode. Custom containers must expose the standard MCP by themselves. Set the value to SELF_HOSTED.
   * 
   * @example
   * SELF_HOSTED
   */
  mcpRuntimeMode?: string;
  /**
   * @remarks
   * The custom image registry configuration. This parameter takes effect only when ImageRegistryType is set to CUSTOM. It is used to configure image pull authentication, TLS certificate verification, and the private network for image pulling.
   */
  registryConfig?: CreateMcpRequestBodyDeploymentConfigContainerConfigurationRegistryConfig;
  /**
   * @remarks
   * The source type of the container. This parameter is fixed to CONTAINER_IMAGE.
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
      registryConfig: CreateMcpRequestBodyDeploymentConfigContainerConfigurationRegistryConfig,
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

export class CreateMcpRequestBodyDeploymentConfigHookConfigurationHooks extends $dara.Model {
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
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The timeout period in milliseconds.
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

export class CreateMcpRequestBodyDeploymentConfigHookConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of hooks executed in array order, including PRE_LIST_TOOLS, PRE_CALL_TOOL, POST_LIST_TOOLS, and POST_CALL_TOOL hooks.
   */
  hooks?: CreateMcpRequestBodyDeploymentConfigHookConfigurationHooks[];
  static names(): { [key: string]: string } {
    return {
      hooks: 'hooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hooks: { 'type': 'array', 'itemType': CreateMcpRequestBodyDeploymentConfigHookConfigurationHooks },
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

export class CreateMcpRequestBodyDeploymentConfigLogConfiguration extends $dara.Model {
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
   * The start rule for Function Compute log segmentation.
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

export class CreateMcpRequestBodyDeploymentConfigMcpConfiguration extends $dara.Model {
  /**
   * @remarks
   * Example: /mcp or /sse.
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
  /**
   * @remarks
   * Applicable only to StreamableHTTP. The default value is STATEFUL when created. If omitted during an update, the original value is retained. STATELESS disables Function Compute session affinity, and the stdio gateway does not enable stateful mode. Native HTTP services must support stateless MCP themselves.
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

export class CreateMcpRequestBodyDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
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
   * The service address of the NAS file system.
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

export class CreateMcpRequestBodyDeploymentConfigNasConfiguration extends $dara.Model {
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * 1000
   */
  groupId?: number;
  /**
   * @remarks
   * The list of NAS mount targets.
   */
  mountPoints?: CreateMcpRequestBodyDeploymentConfigNasConfigurationMountPoints[];
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
      mountPoints: { 'type': 'array', 'itemType': CreateMcpRequestBodyDeploymentConfigNasConfigurationMountPoints },
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

export class CreateMcpRequestBodyDeploymentConfigNetworkConfiguration extends $dara.Model {
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

export class CreateMcpRequestBodyDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
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
   * Specifies whether the mount target is read-only.
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

export class CreateMcpRequestBodyDeploymentConfigOssMountConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of OSS mount targets.
   */
  mountPoints?: CreateMcpRequestBodyDeploymentConfigOssMountConfigurationMountPoints[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': CreateMcpRequestBodyDeploymentConfigOssMountConfigurationMountPoints },
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

export class CreateMcpRequestBodyDeploymentConfigParameterTransformConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable parameter transformation and result augmentation.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The reference to the reserved parameter transformation and result augmentation rule set.
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

export class CreateMcpRequestBodyDeploymentConfigProxyConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the MCP proxy.
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

export class CreateMcpRequestBodyDeploymentConfigRuntimeConfiguration extends $dara.Model {
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
   * The size of the ephemeral disk. Unit: MB. Valid values: 512 and 10240.
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
   * The memory specification. Unit: MB. Default value: 512.
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
   * The timeout period of the function. Unit: seconds. Default value: 300.
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

export class CreateMcpRequestBodyDeploymentConfig extends $dara.Model {
  /**
   * @remarks
   * The MCP entry access control configuration.
   */
  accessControl?: CreateMcpRequestBodyDeploymentConfigAccessControl;
  /**
   * @remarks
   * The Agent Identity configuration.
   */
  agentIdentityConfiguration?: CreateMcpRequestBodyDeploymentConfigAgentIdentityConfiguration;
  /**
   * @remarks
   * The artifact type. A value of Code indicates a ZIP code package, and a value of Container indicates a custom container.
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
   * The configuration for parameter transformation and result augmentation.
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
      accessControl: CreateMcpRequestBodyDeploymentConfigAccessControl,
      agentIdentityConfiguration: CreateMcpRequestBodyDeploymentConfigAgentIdentityConfiguration,
      artifactType: 'string',
      codeConfiguration: CreateMcpRequestBodyDeploymentConfigCodeConfiguration,
      containerConfiguration: CreateMcpRequestBodyDeploymentConfigContainerConfiguration,
      hookConfiguration: CreateMcpRequestBodyDeploymentConfigHookConfiguration,
      logConfiguration: CreateMcpRequestBodyDeploymentConfigLogConfiguration,
      mcpConfiguration: CreateMcpRequestBodyDeploymentConfigMcpConfiguration,
      nasConfiguration: CreateMcpRequestBodyDeploymentConfigNasConfiguration,
      networkConfiguration: CreateMcpRequestBodyDeploymentConfigNetworkConfiguration,
      ossMountConfiguration: CreateMcpRequestBodyDeploymentConfigOssMountConfiguration,
      parameterTransformConfiguration: CreateMcpRequestBodyDeploymentConfigParameterTransformConfiguration,
      proxyConfiguration: CreateMcpRequestBodyDeploymentConfigProxyConfiguration,
      runtimeConfiguration: CreateMcpRequestBodyDeploymentConfigRuntimeConfiguration,
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

export class CreateMcpRequestBodyVirtualConfigSourcesTools extends $dara.Model {
  /**
   * @remarks
   * Required for virtual MCP. The definition digest obtained from the ListMcpTools operation or validation result of the source MCP. The client passes this value back as-is without calculating it. This value is used only as a baseline for manual update validation and does not freeze the runtime schema.
   * 
   * @example
   * e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
   */
  expectedDigest?: string;
  /**
   * @remarks
   * Required for virtual MCP. The name of the source tool.
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

export class CreateMcpRequestBodyVirtualConfigSources extends $dara.Model {
  /**
   * @remarks
   * Required for virtual MCP. The ID of the source MCP in the current workspace.
   * 
   * @example
   * mcp-server-source-1
   */
  mcpServerId?: string;
  /**
   * @remarks
   * Required for virtual MCP. The manually selected tools. Specify at least one tool for each source, and up to 100 tools in total across all sources.
   */
  tools?: CreateMcpRequestBodyVirtualConfigSourcesTools[];
  static names(): { [key: string]: string } {
    return {
      mcpServerId: 'mcpServerId',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mcpServerId: 'string',
      tools: { 'type': 'array', 'itemType': CreateMcpRequestBodyVirtualConfigSourcesTools },
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

export class CreateMcpRequestBodyVirtualConfig extends $dara.Model {
  /**
   * @remarks
   * Required for virtual MCP. Specify 1 to 10 different source MCPs.
   */
  sources?: CreateMcpRequestBodyVirtualConfigSources[];
  static names(): { [key: string]: string } {
    return {
      sources: 'sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sources: { 'type': 'array', 'itemType': CreateMcpRequestBodyVirtualConfigSources },
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

export class CreateMcpRequestBody extends $dara.Model {
  /**
   * @remarks
   * The list of MCP service addresses.
   */
  addresses?: string[];
  /**
   * @remarks
   * The backend authentication configuration. When enabled is set to true: for DIRECT_PROXY, specify directProxy (name and value); for HTTP_TO_MCP, specify the httpToMcp array (each item includes id, type, and credential; apiKey also requires position and name). Multiple authentication objects are supported, and the first one is the default upstream credential. HTTP_TO_MCP credentials are merged into the securitySchemes of the Swagger document.
   */
  auth?: CreateMcpRequestBodyAuth;
  /**
   * @remarks
   * Optional. Valid values: legacy and modern. This parameter is used only for DIRECT_PROXY. If omitted for direct proxy, the existing default behavior is maintained and no automatic upgrade is performed. The modern value does not support Server-Sent Events (SSE). You can use the backendMcpProtocol and protocol recommended by ProbeMcpOrigin to configure backend access, which does not limit the external protocol conversion compatibility of the gateway. This parameter is not required for CODE_PACKAGE. Valid inputs are ignored and not saved. Function Compute (FC) session affinity is configured only based on protocol and DeploymentConfig.McpConfiguration.SessionMode, and the gateway protocol is determined by the successful probing result after FC deployment. Valid values for HTTP_TO_MCP are ignored and not saved.
   * 
   * @example
   * modern
   */
  backendMcpProtocol?: string;
  /**
   * @remarks
   * The custom tags. Multiple tags are supported.
   */
  customTags?: string[];
  /**
   * @remarks
   * The code deployment configuration. Required when Type is set to CODE_PACKAGE. When creating a code artifact, you must specify either CodeConfiguration.CodePackageToken or CodePackageUrl, but not both. CodePackageUrl only supports public Alibaba Cloud OSS HTTP(S) URLs.
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
   * The name of the MCP service.
   * 
   * This parameter is required.
   * 
   * @example
   * my-mcp-server
   */
  name?: string;
  /**
   * @remarks
   * Optional. The format is YYYY-MM-DD. You can use the originProtocolVersion recommended by ProbeMcpOrigin. You can specify this parameter during creation and modify it during updates. If omitted during an update, the current value is retained. This parameter only saves and displays the origin protocol date metadata. It is not a software version, does not limit the external protocol of the gateway, and does not control backend requests. If omitted during creation, the value is null, no default value is set, and the date is not restricted by legacy or modern. Valid dates for HTTP_TO_MCP are ignored and not saved.
   * 
   * @example
   * 2025-03-26
   */
  originProtocolVersion?: string;
  /**
   * @remarks
   * The access permission mode. PUBLIC indicates public access, and CONTROLLED indicates that access is controlled based on permission rules.
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
   * Specify this field if the type is HTTP_TO_MCP.
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
  /**
   * @remarks
   * The source and tool selection for a virtual MCP. This is used only when the type is VIRTUAL. The tool list can only be updated manually.
   */
  virtualConfig?: CreateMcpRequestBodyVirtualConfig;
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      auth: 'auth',
      backendMcpProtocol: 'backendMcpProtocol',
      customTags: 'customTags',
      deploymentConfig: 'deploymentConfig',
      description: 'description',
      name: 'name',
      originProtocolVersion: 'originProtocolVersion',
      permissionMode: 'permissionMode',
      protocol: 'protocol',
      swaggerConfig: 'swaggerConfig',
      type: 'type',
      virtualConfig: 'virtualConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      auth: CreateMcpRequestBodyAuth,
      backendMcpProtocol: 'string',
      customTags: { 'type': 'array', 'itemType': 'string' },
      deploymentConfig: CreateMcpRequestBodyDeploymentConfig,
      description: 'string',
      name: 'string',
      originProtocolVersion: 'string',
      permissionMode: 'string',
      protocol: 'string',
      swaggerConfig: 'string',
      type: 'string',
      virtualConfig: CreateMcpRequestBodyVirtualConfig,
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
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
    if(this.virtualConfig && typeof (this.virtualConfig as any).validate === 'function') {
      (this.virtualConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcpRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: CreateMcpRequestBody;
  /**
   * @remarks
   * The reserved query request identifier. The current console backend does not read this parameter and does not provide idempotency guarantees for deduplication or restoring the original processing result based on this identifier.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateMcpRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

