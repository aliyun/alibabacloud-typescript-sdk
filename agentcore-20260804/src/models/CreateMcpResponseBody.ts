// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpResponseBodyDataAuthCodePackage extends $dara.Model {
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

export class CreateMcpResponseBodyDataAuthDirectProxy extends $dara.Model {
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

export class CreateMcpResponseBodyDataAuthHttpToMcp extends $dara.Model {
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

export class CreateMcpResponseBodyDataAuth extends $dara.Model {
  /**
   * @remarks
   * The caller API key authentication configuration for code-deployed MCP.
   */
  codePackage?: CreateMcpResponseBodyDataAuthCodePackage;
  /**
   * @remarks
   * The direct proxy authentication configuration.
   */
  directProxy?: CreateMcpResponseBodyDataAuthDirectProxy;
  /**
   * @remarks
   * Specifies whether to enable the configuration.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of HTTP_TO_MCP authentication configurations.
   */
  httpToMcp?: CreateMcpResponseBodyDataAuthHttpToMcp[];
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
      codePackage: CreateMcpResponseBodyDataAuthCodePackage,
      directProxy: CreateMcpResponseBodyDataAuthDirectProxy,
      enabled: 'boolean',
      httpToMcp: { 'type': 'array', 'itemType': CreateMcpResponseBodyDataAuthHttpToMcp },
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

export class CreateMcpResponseBodyDataDeploymentConfigAccessControl extends $dara.Model {
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
   * Specifies whether to enable ingress access control.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The access control mode. ANONYMOUS indicates anonymous access, and CREDENTIAL indicates authentication by using AgentCore credentials.
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

export class CreateMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
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

export class CreateMcpResponseBodyDataDeploymentConfigCodeConfiguration extends $dara.Model {
  /**
   * @remarks
   * The temporary code package token returned by GetMcpCodePackageUploadUrl. This token is used to create or update a code deployment after a presigned upload is completed.
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
   * The code package runtime: python3.13, nodejs22, or java17.
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

export class CreateMcpResponseBodyDataDeploymentConfigContainerConfiguration extends $dara.Model {
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
   * The image registry type.
   * 
   * @example
   * ACR
   */
  imageRegistryType?: string;
  /**
   * @remarks
   * The MCP runtime mode. Custom containers currently need to expose standard MCP by themselves. Set the value to SELF_HOSTED.
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

export class CreateMcpResponseBodyDataDeploymentConfigHookConfigurationHooks extends $dara.Model {
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
   * The hook request headers.
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

export class CreateMcpResponseBodyDataDeploymentConfigHookConfiguration extends $dara.Model {
  /**
   * @remarks
   * Executes the PRE_LIST_TOOLS, PRE_CALL_TOOL, POST_LIST_TOOLS, and POST_CALL_TOOL hooks in the order of the array.
   */
  hooks?: CreateMcpResponseBodyDataDeploymentConfigHookConfigurationHooks[];
  static names(): { [key: string]: string } {
    return {
      hooks: 'hooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hooks: { 'type': 'array', 'itemType': CreateMcpResponseBodyDataDeploymentConfigHookConfigurationHooks },
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

export class CreateMcpResponseBodyDataDeploymentConfigLogConfiguration extends $dara.Model {
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
   * The start rule for log segmentation.
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

export class CreateMcpResponseBodyDataDeploymentConfigMcpConfiguration extends $dara.Model {
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
  /**
   * @remarks
   * The session mode. Only applicable to StreamableHTTP. Default value for creation: STATEFUL. If omitted during an update, the original value is retained. STATELESS disables Function Compute session affinity, and the stdio gateway does not enable stateful mode. Native HTTP services must support stateless MCP by themselves.
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

export class CreateMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
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

export class CreateMcpResponseBodyDataDeploymentConfigNasConfiguration extends $dara.Model {
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
  mountPoints?: CreateMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints[];
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
      mountPoints: { 'type': 'array', 'itemType': CreateMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints },
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

export class CreateMcpResponseBodyDataDeploymentConfigNetworkConfiguration extends $dara.Model {
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

export class CreateMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
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

export class CreateMcpResponseBodyDataDeploymentConfigOssMountConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of OSS mount points.
   */
  mountPoints?: CreateMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': CreateMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints },
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

export class CreateMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration extends $dara.Model {
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

export class CreateMcpResponseBodyDataDeploymentConfigProxyConfiguration extends $dara.Model {
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

export class CreateMcpResponseBodyDataDeploymentConfigRuntimeConfiguration extends $dara.Model {
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
   * The temporary disk size in MB. Valid values: 512 and 10240.
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

export class CreateMcpResponseBodyDataDeploymentConfig extends $dara.Model {
  /**
   * @remarks
   * The MCP ingress access control configuration.
   */
  accessControl?: CreateMcpResponseBodyDataDeploymentConfigAccessControl;
  /**
   * @remarks
   * The agent identity configuration.
   */
  agentIdentityConfiguration?: CreateMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration;
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
  codeConfiguration?: CreateMcpResponseBodyDataDeploymentConfigCodeConfiguration;
  /**
   * @remarks
   * The custom container configuration.
   */
  containerConfiguration?: CreateMcpResponseBodyDataDeploymentConfigContainerConfiguration;
  /**
   * @remarks
   * The hook configuration.
   */
  hookConfiguration?: CreateMcpResponseBodyDataDeploymentConfigHookConfiguration;
  /**
   * @remarks
   * The log configuration.
   */
  logConfiguration?: CreateMcpResponseBodyDataDeploymentConfigLogConfiguration;
  /**
   * @remarks
   * The MCP session configuration.
   */
  mcpConfiguration?: CreateMcpResponseBodyDataDeploymentConfigMcpConfiguration;
  /**
   * @remarks
   * The NAS storage configuration.
   */
  nasConfiguration?: CreateMcpResponseBodyDataDeploymentConfigNasConfiguration;
  /**
   * @remarks
   * The network configuration.
   */
  networkConfiguration?: CreateMcpResponseBodyDataDeploymentConfigNetworkConfiguration;
  /**
   * @remarks
   * The OSS mount configuration.
   */
  ossMountConfiguration?: CreateMcpResponseBodyDataDeploymentConfigOssMountConfiguration;
  /**
   * @remarks
   * The parameter transformation and result enhancement configuration.
   */
  parameterTransformConfiguration?: CreateMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration;
  /**
   * @remarks
   * The MCP proxy configuration.
   */
  proxyConfiguration?: CreateMcpResponseBodyDataDeploymentConfigProxyConfiguration;
  /**
   * @remarks
   * The runtime and resource configuration.
   */
  runtimeConfiguration?: CreateMcpResponseBodyDataDeploymentConfigRuntimeConfiguration;
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
      accessControl: CreateMcpResponseBodyDataDeploymentConfigAccessControl,
      agentIdentityConfiguration: CreateMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration,
      artifactType: 'string',
      codeConfiguration: CreateMcpResponseBodyDataDeploymentConfigCodeConfiguration,
      containerConfiguration: CreateMcpResponseBodyDataDeploymentConfigContainerConfiguration,
      hookConfiguration: CreateMcpResponseBodyDataDeploymentConfigHookConfiguration,
      logConfiguration: CreateMcpResponseBodyDataDeploymentConfigLogConfiguration,
      mcpConfiguration: CreateMcpResponseBodyDataDeploymentConfigMcpConfiguration,
      nasConfiguration: CreateMcpResponseBodyDataDeploymentConfigNasConfiguration,
      networkConfiguration: CreateMcpResponseBodyDataDeploymentConfigNetworkConfiguration,
      ossMountConfiguration: CreateMcpResponseBodyDataDeploymentConfigOssMountConfiguration,
      parameterTransformConfiguration: CreateMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration,
      proxyConfiguration: CreateMcpResponseBodyDataDeploymentConfigProxyConfiguration,
      runtimeConfiguration: CreateMcpResponseBodyDataDeploymentConfigRuntimeConfiguration,
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

export class CreateMcpResponseBodyDataMarketSource extends $dara.Model {
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

export class CreateMcpResponseBodyDataOperationError extends $dara.Model {
  /**
   * @remarks
   * Returns only bounded diagnostic codes and does not return the original error body of the origin server.
   * 
   * @example
   * PROBE_TIMEOUT
   */
  code?: string;
  /**
   * @remarks
   * The necessary diagnostics that are trimmed and desensitized. This parameter does not contain credentials or original responses.
   * 
   * @example
   * The probe deadline was exceeded.
   */
  message?: string;
  /**
   * @remarks
   * Specifies whether the operation is suitable for retry based on a restricted policy. This parameter does not trigger automatic retries.
   */
  retryable?: boolean;
  /**
   * @remarks
   * The source of the error. Valid values: MAGIC, ROUTER, NETWORK, ORIGIN, and UNKNOWN. The value is determined only based on actual evidence.
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

export class CreateMcpResponseBodyDataOperation extends $dara.Model {
  /**
   * @remarks
   * The desensitized error of the current release operation. This field indicates the failure of the gateway or formal link after the origin server passes the verification.
   */
  error?: CreateMcpResponseBodyDataOperationError;
  /**
   * @remarks
   * The ID of the current or most recent release operation.
   * 
   * @example
   * 3541f1af-87cc-45d1-a28e-94ec5633b931
   */
  operationId?: string;
  /**
   * @remarks
   * The release stage, such as compute deployment, origin verification, summary saving, gateway release, ingress credential synchronization, formal link verification, or deployment submission. Old tasks retain their original stage semantics.
   * 
   * @example
   * VALIDATE_ORIGIN
   */
  stage?: string;
  /**
   * @remarks
   * The status of the operation. Valid values: PENDING, RUNNING, SUCCEEDED, and FAILED.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The type of the operation. Valid value: PUBLISH.
   * 
   * @example
   * PUBLISH
   */
  type?: string;
  /**
   * @remarks
   * The time when the operation was updated in ISO 8601 UTC format.
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
      error: CreateMcpResponseBodyDataOperationError,
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

export class CreateMcpResponseBodyDataOriginProbeLastResultActualConfiguration extends $dara.Model {
  /**
   * @remarks
   * The verified backend MCP protocol policy. Valid values: legacy and modern. This parameter is empty if the policy is not confirmed.
   * 
   * @example
   * modern
   */
  backendMcpProtocol?: string;
  /**
   * @remarks
   * The verified MCP transport. Valid values: SSE and StreamableHTTP. This parameter is empty if the transport is not confirmed.
   * 
   * @example
   * StreamableHTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The actual negotiated or selected and verified date version of the MCP protocol. This parameter is empty if the version is not confirmed.
   * 
   * @example
   * 2025-03-26
   */
  protocolVersion?: string;
  /**
   * @remarks
   * The actual session mode. Valid values: STATEFUL, STATELESS, and NOT_APPLICABLE. This parameter is empty if the mode is not confirmed.
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

export class CreateMcpResponseBodyDataOriginProbeLastResultError extends $dara.Model {
  /**
   * @remarks
   * Returns only bounded diagnostic codes and does not return the original error body of the origin server.
   * 
   * @example
   * PROBE_TIMEOUT
   */
  code?: string;
  /**
   * @remarks
   * The necessary diagnostics that are trimmed and desensitized. This parameter does not contain credentials or original responses.
   * 
   * @example
   * The probe deadline was exceeded.
   */
  message?: string;
  /**
   * @remarks
   * Specifies whether the operation is suitable for retry based on a restricted policy. This parameter does not trigger automatic retries.
   */
  retryable?: boolean;
  /**
   * @remarks
   * The source of the error. Valid values: MAGIC, ROUTER, NETWORK, ORIGIN, and UNKNOWN. The value is determined only based on actual evidence.
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

export class CreateMcpResponseBodyDataOriginProbeLastResult extends $dara.Model {
  /**
   * @remarks
   * The actual configuration confirmed by evidence in the current verification. This parameter is empty if no confirmed information is available and is not inferred from the expected configuration.
   */
  actualConfiguration?: CreateMcpResponseBodyDataOriginProbeLastResultActualConfiguration;
  /**
   * @remarks
   * The verification error. This parameter is empty if the verification is successful. It saves only the desensitized diagnostics required for the current verification.
   */
  error?: CreateMcpResponseBodyDataOriginProbeLastResultError;
  /**
   * @remarks
   * The time of the current origin verification in ISO 8601 UTC format.
   * 
   * @example
   * 2026-11-19T08:30:00Z
   */
  probedAt?: string;
  /**
   * @remarks
   * The verification stage. Valid values: CONNECT, DISCOVER, INITIALIZE, SESSION_CHECK, CLEANUP, and COMPLETE.
   * 
   * @example
   * COMPLETE
   */
  stage?: string;
  /**
   * @remarks
   * The verification result. Valid values: SUCCESS and FAILED. The value is SUCCESS if the protocol and applicable session checks pass. Not declaring any capabilities does not affect the result.
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
      actualConfiguration: CreateMcpResponseBodyDataOriginProbeLastResultActualConfiguration,
      error: CreateMcpResponseBodyDataOriginProbeLastResultError,
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

export class CreateMcpResponseBodyDataOriginProbe extends $dara.Model {
  /**
   * @remarks
   * Returned only for CODE_PACKAGE. This parameter is cleared when a new task starts and is empty if no verification has been performed or if an old task did not perform verification. If a subsequent release fails, the current summary is retained. This parameter does not indicate real-time health or the status of the effective version.
   */
  lastResult?: CreateMcpResponseBodyDataOriginProbeLastResult;
  static names(): { [key: string]: string } {
    return {
      lastResult: 'lastResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastResult: CreateMcpResponseBodyDataOriginProbeLastResult,
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

export class CreateMcpResponseBodyDataTemplate extends $dara.Model {
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
   * The schema version of the template.
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
   * Indicates whether a newer template version is available.
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

export class CreateMcpResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of MCP service addresses. Required when Type is DIRECT_PROXY or HTTP_TO_MCP. Do not specify when Type is CODE_PACKAGE.
   */
  addresses?: string[];
  /**
   * @remarks
   * The backend authentication configuration. enabled indicates whether it is enabled; directProxy specifies the custom authentication headers for direct proxy; httpToMcp specifies the list of OpenAPI credentials for HTTP_TO_MCP.
   */
  auth?: CreateMcpResponseBodyDataAuth;
  /**
   * @remarks
   * The saved legacy or modern backend policy, which is separate from the transport indicated by protocol and does not indicate verification. This field is not saved for newly created CODE_PACKAGE. For historical CODE_PACKAGE, the existing value does not control Function Compute session affinity or gateway protocol; for the actual protocol, refer to OriginProbe.LastResult.ActualConfiguration.BackendMcpProtocol. This field is returned as empty for historically unspecified values and HTTP_TO_MCP.
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
   * The deployment configuration of the code deployment MCP.
   */
  deploymentConfig?: CreateMcpResponseBodyDataDeploymentConfig;
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
   * The MCP endpoint that can be called by users or agents. This parameter is empty before the deployment is completed.
   * 
   * @example
   * https://example.com/mcp
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the Function Compute function corresponding to the CODE_PACKAGE MCP. This parameter is empty before the deployment is completed or for other types.
   * 
   * @example
   * agentcore-mcp-example
   */
  functionName?: string;
  /**
   * @remarks
   * The MCP marketplace source template.
   */
  marketSource?: CreateMcpResponseBodyDataMarketSource;
  /**
   * @remarks
   * The MCP server configuration.
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
   * The official usage tag managed by the server.
   * 
   * @example
   * KNOWLEDGE_BASE
   */
  officialTag?: string;
  /**
   * @remarks
   * The read-only progress that reuses an existing release task. This parameter does not change the primary status of the resource and is empty if no historical operation information is available.
   */
  operation?: CreateMcpResponseBodyDataOperation;
  /**
   * @remarks
   * Returns the minimal origin verification summary of the most recent task only for code deployment. This parameter is empty for direct connection and HTTP-to-MCP scenarios. Querying this parameter does not trigger probing.
   */
  originProbe?: CreateMcpResponseBodyDataOriginProbe;
  /**
   * @remarks
   * The optional saved origin MCP protocol date display metadata in the YYYY-MM-DD format. You can specify this parameter when you create the resource and modify it when you update the resource. If you omit this parameter during an update, the current value is retained. This parameter is used only to save and display information. It does not represent a software version, restrict the external protocol of the gateway, control backend requests, or indicate that real-time verification is passed. If this parameter is omitted during creation and not updated, is missing in history, or is set to HTTP_TO_MCP, null is returned. No default value is provided.
   * 
   * @example
   * 2025-03-26
   */
  originProtocolVersion?: string;
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
   * The status.
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * The status reason.
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
   * The bound template version and input schema of the MCP.
   */
  template?: CreateMcpResponseBodyDataTemplate;
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
   * Indicates whether the MCP is still subject to the usage constraints of the official template.
   */
  usageActive?: boolean;
  static names(): { [key: string]: string } {
    return {
      addresses: 'addresses',
      auth: 'auth',
      backendMcpProtocol: 'backendMcpProtocol',
      customTags: 'customTags',
      deploymentConfig: 'deploymentConfig',
      description: 'description',
      endpoint: 'endpoint',
      functionName: 'functionName',
      marketSource: 'marketSource',
      mcpServerConfig: 'mcpServerConfig',
      mcpServerId: 'mcpServerId',
      name: 'name',
      officialTag: 'officialTag',
      operation: 'operation',
      originProbe: 'originProbe',
      originProtocolVersion: 'originProtocolVersion',
      permissionMode: 'permissionMode',
      protocol: 'protocol',
      status: 'status',
      statusReason: 'statusReason',
      swaggerConfig: 'swaggerConfig',
      template: 'template',
      type: 'type',
      usageActive: 'usageActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      auth: CreateMcpResponseBodyDataAuth,
      backendMcpProtocol: 'string',
      customTags: { 'type': 'array', 'itemType': 'string' },
      deploymentConfig: CreateMcpResponseBodyDataDeploymentConfig,
      description: 'string',
      endpoint: 'string',
      functionName: 'string',
      marketSource: CreateMcpResponseBodyDataMarketSource,
      mcpServerConfig: 'string',
      mcpServerId: 'string',
      name: 'string',
      officialTag: 'string',
      operation: CreateMcpResponseBodyDataOperation,
      originProbe: CreateMcpResponseBodyDataOriginProbe,
      originProtocolVersion: 'string',
      permissionMode: 'string',
      protocol: 'string',
      status: 'string',
      statusReason: 'string',
      swaggerConfig: 'string',
      template: CreateMcpResponseBodyDataTemplate,
      type: 'string',
      usageActive: 'boolean',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcpResponseBody extends $dara.Model {
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
  data?: CreateMcpResponseBodyData;
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
   * Indicates whether the request is successful.
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
      data: CreateMcpResponseBodyData,
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

