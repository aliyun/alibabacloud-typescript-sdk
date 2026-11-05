// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMcpResponseBodyDataAuthCodePackage extends $dara.Model {
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
   * The API Key authentication configuration for callers of code-deployed MCP.
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

export class CreateMcpResponseBodyDataDeploymentConfigCodeConfiguration extends $dara.Model {
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
   * The runtime of the code package. Valid values: python3.13, nodejs22, and java17.
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
   * The address of the NAS server.
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
   * The ID of the user.
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
   * The MCP entry point access control.
   */
  accessControl?: CreateMcpResponseBodyDataDeploymentConfigAccessControl;
  /**
   * @remarks
   * The Agent Identity configuration.
   */
  agentIdentityConfiguration?: CreateMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration;
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
   * The configuration for parameter transformation and result enhancement.
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

export class CreateMcpResponseBodyDataTemplate extends $dara.Model {
  /**
   * @remarks
   * The applied template version of the current MCP.
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
   * The template schema version.
   * 
   * @example
   * 1.0
   */
  schemaVersion?: string;
  /**
   * @remarks
   * The template input schema, represented as a JSON schema string.
   * 
   * @example
   * {"type":"object","properties":{"addresses":{"type":"array","items":{"type":"string"}}}}
   */
  templateInputSchema?: string;
  /**
   * @remarks
   * Indicates whether an updated template version is available.
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
   * The list of MCP service addresses.
   */
  addresses?: string[];
  /**
   * @remarks
   * The backend authentication configuration. enabled specifies whether it is enabled, directProxy specifies the custom authentication header for the direct proxy, and httpToMcp specifies the list of OpenAPI credentials for HTTP_TO_MCP.
   */
  auth?: CreateMcpResponseBodyDataAuth;
  /**
   * @remarks
   * The custom tags. Multiple tags are supported.
   */
  customTags?: string[];
  /**
   * @remarks
   * The deployment configuration for code-deployed MCP.
   */
  deploymentConfig?: CreateMcpResponseBodyDataDeploymentConfig;
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
   * The MCP endpoint that can be called by users or agents. This field is empty before the deployment is complete.
   * 
   * @example
   * https://example.com/mcp
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the Function Compute function corresponding to the CODE_PACKAGE MCP. This field is empty before the deployment is complete and is empty for other types.
   * 
   * @example
   * agentcore-mcp-example
   */
  functionName?: string;
  /**
   * @remarks
   * The marketplace template source of the MCP.
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
   * The ID of the MCP server.
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
   * The template version and input schema bound to the MCP.
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

