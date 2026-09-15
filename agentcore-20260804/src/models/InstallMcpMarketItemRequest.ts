// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallMcpMarketItemRequestBodyAuthDirectProxy extends $dara.Model {
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

export class InstallMcpMarketItemRequestBodyAuthHttpToMcp extends $dara.Model {
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

export class InstallMcpMarketItemRequestBodyAuth extends $dara.Model {
  /**
   * @remarks
   * The backend authentication configuration for direct proxy.
   */
  directProxy?: InstallMcpMarketItemRequestBodyAuthDirectProxy;
  /**
   * @remarks
   * Specifies whether the configuration is enabled.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of backend authentication configurations for HTTP-to-MCP conversion.
   */
  httpToMcp?: InstallMcpMarketItemRequestBodyAuthHttpToMcp[];
  static names(): { [key: string]: string } {
    return {
      directProxy: 'directProxy',
      enabled: 'enabled',
      httpToMcp: 'httpToMcp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directProxy: InstallMcpMarketItemRequestBodyAuthDirectProxy,
      enabled: 'boolean',
      httpToMcp: { 'type': 'array', 'itemType': InstallMcpMarketItemRequestBodyAuthHttpToMcp },
    };
  }

  validate() {
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

export class InstallMcpMarketItemRequestBodyDeploymentConfigAccessControl extends $dara.Model {
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
   * ANONYMOUS indicates anonymous access. CREDENTIAL indicates access using an AgentCore credential.
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

export class InstallMcpMarketItemRequestBodyDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether authorization is enabled.
   */
  authorizationEnabled?: boolean;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the credential provider.
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
   * Specifies whether Agent Identity is enabled.
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

export class InstallMcpMarketItemRequestBodyDeploymentConfigCodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * The temporary code package token returned by GetMcpCodePackageUploadUrl. Used to create a code deployment after the pre-signed upload is complete. Specify either this parameter or CodePackageUrl.
   * 
   * @example
   * upload-token
   */
  codePackageToken?: string;
  /**
   * @remarks
   * The public Alibaba Cloud OSS HTTP(S) URL that can be directly passed in when creating a code deployment. Specify either this parameter or CodePackageToken. Only supported by CreateMcp. Not supported for update or query operations.
   * 
   * @example
   * https://example-bucket.oss-cn-hangzhou.aliyuncs.com/server.zip
   */
  codePackageUrl?: string;
  /**
   * @remarks
   * The full startup command, with arguments passed in sequence by parameter boundary. For example, when using supergateway to start a stdio MCP, pass in supergateway, --stdio, the full subcommand, and remaining arguments.
   */
  command?: string[];
  /**
   * @remarks
   * The code package runtime: python3.13, nodejs22, or java17.
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

export class InstallMcpMarketItemRequestBodyDeploymentConfigContainerConfiguration extends $dara.Model {
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
   * Custom containers must expose a standard MCP endpoint. Set this parameter to SELF_HOSTED.
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
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'acrInstanceId',
      command: 'command',
      entrypoint: 'entrypoint',
      image: 'image',
      imageRegistryType: 'imageRegistryType',
      mcpRuntimeMode: 'mcpRuntimeMode',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallMcpMarketItemRequestBodyDeploymentConfigHookConfigurationHooks extends $dara.Model {
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
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The timeout period, in milliseconds.
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

export class InstallMcpMarketItemRequestBodyDeploymentConfigHookConfiguration extends $dara.Model {
  /**
   * @remarks
   * Executes PRE_LIST_TOOLS, PRE_CALL_TOOL, POST_LIST_TOOLS, and POST_CALL_TOOL hooks in array order.
   */
  hooks?: InstallMcpMarketItemRequestBodyDeploymentConfigHookConfigurationHooks[];
  static names(): { [key: string]: string } {
    return {
      hooks: 'hooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hooks: { 'type': 'array', 'itemType': InstallMcpMarketItemRequestBodyDeploymentConfigHookConfigurationHooks },
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

export class InstallMcpMarketItemRequestBodyDeploymentConfigLogConfiguration extends $dara.Model {
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

export class InstallMcpMarketItemRequestBodyDeploymentConfigMcpConfiguration extends $dara.Model {
  /**
   * @remarks
   * The MCP endpoint path. For example, /mcp or /sse.
   * 
   * @example
   * /mcp
   */
  endpointPath?: string;
  /**
   * @remarks
   * The number of concurrent sessions per instance. Currently fixed to 1.
   * 
   * @example
   * 1
   */
  sessionConcurrencyPerInstance?: number;
  /**
   * @remarks
   * The session idle timeout period. Unit: seconds. Default value: 1800.
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
  static names(): { [key: string]: string } {
    return {
      endpointPath: 'endpointPath',
      sessionConcurrencyPerInstance: 'sessionConcurrencyPerInstance',
      sessionIdleTimeoutSeconds: 'sessionIdleTimeoutSeconds',
      sessionMaxLifetimeSeconds: 'sessionMaxLifetimeSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointPath: 'string',
      sessionConcurrencyPerInstance: 'number',
      sessionIdleTimeoutSeconds: 'number',
      sessionMaxLifetimeSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallMcpMarketItemRequestBodyDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
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

export class InstallMcpMarketItemRequestBodyDeploymentConfigNasConfiguration extends $dara.Model {
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
      mountPoints: { 'type': 'array', 'itemType': InstallMcpMarketItemRequestBodyDeploymentConfigNasConfigurationMountPoints },
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

export class InstallMcpMarketItemRequestBodyDeploymentConfigNetworkConfiguration extends $dara.Model {
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

export class InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
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

export class InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of OSS mount points.
   */
  mountPoints?: InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfigurationMountPoints[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfigurationMountPoints },
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

export class InstallMcpMarketItemRequestBodyDeploymentConfigParameterTransformConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable parameter transformation and result enhancement.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The reserved reference to a parameter transformation and result enhancement rule set.
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

export class InstallMcpMarketItemRequestBodyDeploymentConfigProxyConfiguration extends $dara.Model {
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

export class InstallMcpMarketItemRequestBodyDeploymentConfigRuntimeConfiguration extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs. Default value: 0.25.
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
  environmentVariables?: { [key: string]: string };
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
   * The maximum number of concurrent requests per instance. Default value: 200.
   * 
   * @example
   * 200
   */
  instanceConcurrency?: number;
  /**
   * @remarks
   * The memory size. Unit: MB. Default value: 512.
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
   * The function timeout period. Unit: seconds. Default value: 300.
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

export class InstallMcpMarketItemRequestBodyDeploymentConfig extends $dara.Model {
  /**
   * @remarks
   * The MCP ingress access control configuration.
   */
  accessControl?: InstallMcpMarketItemRequestBodyDeploymentConfigAccessControl;
  /**
   * @remarks
   * The Agent Identity configuration.
   */
  agentIdentityConfiguration?: InstallMcpMarketItemRequestBodyDeploymentConfigAgentIdentityConfiguration;
  /**
   * @remarks
   * Code indicates a ZIP code package. Container indicates a custom container.
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
      accessControl: InstallMcpMarketItemRequestBodyDeploymentConfigAccessControl,
      agentIdentityConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigAgentIdentityConfiguration,
      artifactType: 'string',
      codeConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigCodeConfiguration,
      containerConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigContainerConfiguration,
      hookConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigHookConfiguration,
      logConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigLogConfiguration,
      mcpConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigMcpConfiguration,
      nasConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigNasConfiguration,
      networkConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigNetworkConfiguration,
      ossMountConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfiguration,
      parameterTransformConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigParameterTransformConfiguration,
      proxyConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigProxyConfiguration,
      runtimeConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigRuntimeConfiguration,
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

export class InstallMcpMarketItemRequestBody extends $dara.Model {
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
   * The deployment configuration for code-deployed MCP.
   */
  deploymentConfig?: InstallMcpMarketItemRequestBodyDeploymentConfig;
  /**
   * @remarks
   * The MCP service description.
   * 
   * @example
   * An MCP service for querying the knowledge base
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
   * - DIRECT_PROXY: direct proxy.
   * - HTTP_TO_MCP: HTTP-to-MCP conversion.
   * - CODE_PACKAGE: code deployment.
   * 
   * @example
   * CODE_PACKAGE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      auth: 'auth',
      deploymentConfig: 'deploymentConfig',
      description: 'description',
      name: 'name',
      protocol: 'protocol',
      swaggerConfig: 'swaggerConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      auth: InstallMcpMarketItemRequestBodyAuth,
      deploymentConfig: InstallMcpMarketItemRequestBodyDeploymentConfig,
      description: 'string',
      name: 'string',
      protocol: 'string',
      swaggerConfig: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(this.auth && typeof (this.auth as any).validate === 'function') {
      (this.auth as any).validate();
    }
    if(this.deploymentConfig && typeof (this.deploymentConfig as any).validate === 'function') {
      (this.deploymentConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallMcpMarketItemRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
      templateVersion: 'templateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: InstallMcpMarketItemRequestBody,
      clientToken: 'string',
      templateVersion: 'string',
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

