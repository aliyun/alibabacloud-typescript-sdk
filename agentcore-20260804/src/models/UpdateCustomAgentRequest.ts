// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAgentRequestBodyAgenticFsMounts extends $dara.Model {
  /**
   * @remarks
   * The absolute mount path in the container, such as `/data/train`. Mount targets must not be duplicated or form parent-child directory overwrites, and must avoid platform reserved directories.
   * 
   * @example
   * /mnt/agenticfs/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The existing non-empty relative directory under the access point. This parameter is required for each mount item. Root directories, absolute paths, or parent directory jumps are not allowed.
   * 
   * @example
   * workspace/data
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the mount is read-only. A value of true indicates read-only, and a value of false indicates read and write. If omitted, the default value is false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The domain name of the access point. This parameter is required for each mount item. The value is the DomainName in the response of the NAS ListAccessPoints operation. It does not include a protocol, port, or path.
   * 
   * @example
   * ap-0123456789abcdef0.0123456789-vlm36.cn-hangzhou.nas.aliyuncs.com
   */
  server?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'mountPath',
      path: 'path',
      readOnly: 'readOnly',
      server: 'server',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      path: 'string',
      readOnly: 'boolean',
      server: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentRequestBodyArtifactCode extends $dara.Model {
  /**
   * @remarks
   * The startup command for the code package. This parameter is required in code package mode. The working directory is the root directory of the extracted code, which is /code. Example: python main.py. Quotes and escape characters are supported. Environment variables, pipes, and logical operations are not automatically expanded. For complex commands, use a script within the package.
   * 
   * @example
   * python main.py
   */
  entrypoint?: string;
  /**
   * @remarks
   * The identifier of the code runtime environment, such as python3.12. When creating or switching environments, use the identifier returned by ListAgentCodeRuntimes. The identifier is validated against the current version catalog and is not a fixed enumeration.
   * 
   * @example
   * python3.12
   */
  languageRuntime?: string;
  /**
   * @remarks
   * The source URI of the code package. OSS URIs (oss://) or HTTPS object URLs of standard OSS public domain names, including OSS signed URLs, are supported. External sites, custom domain names, or additional authentication request headers are not supported. For local uploads, use the sourceUri returned by GetAgentCodePackageUploadUrl. The URI is re-validated and transferred during creation or update. After saving, a fixed oss:// URI provided by the platform is returned. This fixed URI can be reused for regular updates.
   * 
   * @example
   * oss://my-agent-bucket/packages/main.zip
   */
  sourceUri?: string;
  static names(): { [key: string]: string } {
    return {
      entrypoint: 'entrypoint',
      languageRuntime: 'languageRuntime',
      sourceUri: 'sourceUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entrypoint: 'string',
      languageRuntime: 'string',
      sourceUri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentRequestBodyArtifactContainer extends $dara.Model {
  /**
   * @remarks
   * The optional executable program and startup parameters. If specified, this parameter must be a non-empty string. If you submit the container configuration without specifying entrypoint, the default startup method of the image is used. Quotes and escape characters are supported. Variables, pipes, and logical operations are not automatically expanded.
   * 
   * @example
   * python app.py
   */
  entrypoint?: string;
  /**
   * @remarks
   * The ID of the ACR instance to which the image repository belongs. This parameter cannot be empty.
   * 
   * @example
   * cri-a1b2c3d4e5f6
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace to which the ACR image repository belongs. This parameter cannot be empty.
   * 
   * @example
   * my-agent
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the image repository in the ACR namespace. This parameter cannot be empty.
   * 
   * @example
   * chat-agent
   */
  repo?: string;
  /**
   * @remarks
   * The ACR image tag. This parameter is required when submitting the ACR container configuration and must be a non-empty string, such as v1.0.1. When updating the tag, you must also specify artifact.port and the type, instanceId, namespace, and repo parameters in the container configuration.
   * 
   * @example
   * v1.0.0
   */
  tag?: string;
  /**
   * @remarks
   * The type of the image source. Valid values:
   * - acr: ACR image.
   * - custom: Custom image source.
   * For the corresponding source configurations, refer to the descriptions of artifact.container and customImage.
   * 
   * @example
   * acr
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      entrypoint: 'entrypoint',
      instanceId: 'instanceId',
      namespace: 'namespace',
      repo: 'repo',
      tag: 'tag',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entrypoint: 'string',
      instanceId: 'string',
      namespace: 'string',
      repo: 'string',
      tag: 'string',
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

export class UpdateCustomAgentRequestBodyArtifact extends $dara.Model {
  /**
   * @remarks
   * The code package deployment configuration. This parameter is mutually exclusive with container. You must specify sourceUri, languageRuntime, and entrypoint, and set artifact.port. ZIP and TAR.GZ formats are supported. Dependencies must be provided by the caller within the package.
   */
  code?: UpdateCustomAgentRequestBodyArtifactCode;
  /**
   * @remarks
   * The container image deployment configuration. This parameter is mutually exclusive with code. For an ACR source, set type to acr and specify instanceId, namespace, repo, and tag. For a custom source, set type to custom and provide the complete customImage.
   */
  container?: UpdateCustomAgentRequestBodyArtifactContainer;
  /**
   * @remarks
   * The TCP port on which the agent service listens. Valid values: 1 to 65535. This parameter is required when submitting the artifact object. If the entire artifact object is omitted, the original artifact configuration is retained.
   * 
   * @example
   * 8080
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      container: 'container',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: UpdateCustomAgentRequestBodyArtifactCode,
      container: UpdateCustomAgentRequestBodyArtifactContainer,
      port: 'number',
    };
  }

  validate() {
    if(this.code && typeof (this.code as any).validate === 'function') {
      (this.code as any).validate();
    }
    if(this.container && typeof (this.container as any).validate === 'function') {
      (this.container as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentRequestBodyCustomImagePullNetwork extends $dara.Model {
  /**
   * @remarks
   * This parameter is required when `type=vpc`. The vSwitch must belong to the selected VPC.
   * 
   * @example
   * sg-example
   */
  securityGroupId?: string;
  /**
   * @remarks
   * This parameter is required and verified by the backend when submitting `pullNetwork`. The default value for new creations is public network, which is independent of the agent runtime network.
   * 
   * @example
   * public
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required when `type=vpc`. The vSwitch must belong to the selected VPC.
   * 
   * @example
   * vsw-example
   */
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is required when `type=vpc`. The associated account and region are verified by the backend.
   * 
   * @example
   * vpc-example
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'securityGroupId',
      type: 'type',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      type: 'string',
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

export class UpdateCustomAgentRequestBodyCustomImage extends $dara.Model {
  /**
   * @remarks
   * This parameter is required and verified by the backend when submitting `customImage`. The value is the complete `registry[:port]/repository:tag` or `registry[:port]/repository@sha256:digest`. Multi-level paths are supported. It does not include a protocol or user information.
   * 
   * @example
   * registry.example.com/team/agent:v1
   */
  image?: string;
  /**
   * @remarks
   * The password or token for the current repository.
   * 
   * @example
   * example-registry-token
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required and verified by the backend when submitting `customImage`. It is the complete independent pull network configuration. For public networks, only pass `type=public`.
   */
  pullNetwork?: UpdateCustomAgentRequestBodyCustomImagePullNetwork;
  /**
   * @remarks
   * Specifies whether to skip HTTPS certificate verification.
   * 
   * @example
   * false
   */
  skipTlsVerify?: boolean;
  /**
   * @remarks
   * The username for the current repository.
   * 
   * @example
   * reader
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
      password: 'password',
      pullNetwork: 'pullNetwork',
      skipTlsVerify: 'skipTlsVerify',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      password: 'string',
      pullNetwork: UpdateCustomAgentRequestBodyCustomImagePullNetwork,
      skipTlsVerify: 'boolean',
      username: 'string',
    };
  }

  validate() {
    if(this.pullNetwork && typeof (this.pullNetwork as any).validate === 'function') {
      (this.pullNetwork as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentRequestBodyEnvironmentVariables extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable. This parameter cannot be empty and must be unique within the current environment variable list.
   * 
   * This parameter is required.
   * 
   * @example
   * LOG_LEVEL
   */
  name?: string;
  /**
   * @remarks
   * The value of the environment variable. This parameter must be a string, and empty strings are allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * info
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

export class UpdateCustomAgentRequestBodyEnvironment extends $dara.Model {
  /**
   * @remarks
   * The complete list of user environment variables. A non-empty list replaces the original list entirely, while an empty array clears the list. The name of each item must be non-empty and unique within the list. The value must be a string, and empty strings are allowed.
   */
  variables?: UpdateCustomAgentRequestBodyEnvironmentVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': UpdateCustomAgentRequestBodyEnvironmentVariables },
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentRequestBodyHealthCheck extends $dara.Model {
  /**
   * @remarks
   * This parameter does not take effect. Omit this parameter.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The interval between two health checks, in seconds. This parameter must be a positive integer. Default value: 10.
   * 
   * @example
   * 10
   */
  intervalSeconds?: number;
  /**
   * @remarks
   * The HTTP health check path. This parameter must start with a forward slash (/). Default value: /healthz.
   * 
   * @example
   * /healthz
   */
  path?: string;
  /**
   * @remarks
   * The port accessed for health checks. This parameter is required when configuring a health check. Valid values: 1 to 65535.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The timeout period for a single health check, in seconds. This parameter must be a positive integer and less than intervalSeconds. Default value: 2.
   * 
   * @example
   * 2
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The number of consecutive health check failures required to mark the instance as unhealthy. This parameter must be a positive integer. Default value: 3.
   * 
   * @example
   * 3
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthyThreshold: 'healthyThreshold',
      intervalSeconds: 'intervalSeconds',
      path: 'path',
      port: 'port',
      timeoutSeconds: 'timeoutSeconds',
      unhealthyThreshold: 'unhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthyThreshold: 'number',
      intervalSeconds: 'number',
      path: 'string',
      port: 'number',
      timeoutSeconds: 'number',
      unhealthyThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentRequestBodyLoggingSls extends $dara.Model {
  /**
   * @remarks
   * The name of the Simple Log Service Logstore that receives the agent logs.
   * 
   * @example
   * agent-runtime
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project that receives the agent logs.
   * 
   * @example
   * my-agent-logs
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateCustomAgentRequestBodyLogging extends $dara.Model {
  /**
   * @remarks
   * The Simple Log Service log delivery destination. When updating this object, you must specify both project and logstore, and neither can be empty.
   */
  sls?: UpdateCustomAgentRequestBodyLoggingSls;
  static names(): { [key: string]: string } {
    return {
      sls: 'sls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sls: UpdateCustomAgentRequestBodyLoggingSls,
    };
  }

  validate() {
    if(this.sls && typeof (this.sls as any).validate === 'function') {
      (this.sls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentRequestBodyNetworkAccessInternet extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the agent to access the Internet. A Boolean value must be provided when configuring accessInternet. For this configuration to take effect, the workspace must also allow Internet access.
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

export class UpdateCustomAgentRequestBodyNetworkAccessVpc extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the agent to access the user VPC configured in the workspace. A Boolean value must be provided when configuring accessVpc. For this configuration to take effect, the workspace must also allow VPC access.
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

export class UpdateCustomAgentRequestBodyNetwork extends $dara.Model {
  /**
   * @remarks
   * The Internet access configuration. If this access item is omitted, the agent does not restrict Internet access. However, the workspace must still allow Internet access.
   */
  accessInternet?: UpdateCustomAgentRequestBodyNetworkAccessInternet;
  /**
   * @remarks
   * The user VPC access configuration. If this access item is omitted, the agent does not restrict VPC access. However, the workspace must still be configured to allow access to the user VPC.
   */
  accessVpc?: UpdateCustomAgentRequestBodyNetworkAccessVpc;
  static names(): { [key: string]: string } {
    return {
      accessInternet: 'accessInternet',
      accessVpc: 'accessVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInternet: UpdateCustomAgentRequestBodyNetworkAccessInternet,
      accessVpc: UpdateCustomAgentRequestBodyNetworkAccessVpc,
    };
  }

  validate() {
    if(this.accessInternet && typeof (this.accessInternet as any).validate === 'function') {
      (this.accessInternet as any).validate();
    }
    if(this.accessVpc && typeof (this.accessVpc as any).validate === 'function') {
      (this.accessVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentRequestBodyObservability extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable agent observability.
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

export class UpdateCustomAgentRequestBodyOssMounts extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket. This parameter is required for each mount item. The name must be 3 to 63 characters in length and can contain only lowercase letters, digits, and hyphens. It cannot start or end with a hyphen.
   * 
   * @example
   * my-agent-data
   */
  bucketName?: string;
  /**
   * @remarks
   * The absolute mount path in the container, such as `/data/train`. Mount targets must not be duplicated or form parent-child directory overwrites, and must avoid platform reserved directories.
   * 
   * @example
   * /mnt/oss/train
   */
  mountPath?: string;
  /**
   * @remarks
   * The non-empty relative object directory prefix in the bucket. This parameter is required for each mount item.
   * 
   * @example
   * datasets/train
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the mount is read-only. A value of true indicates read-only, and a value of false indicates read and write. If omitted, the default value is false.
   */
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      mountPath: 'mountPath',
      path: 'path',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      mountPath: 'string',
      path: 'string',
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

export class UpdateCustomAgentRequestBodyProtocolPaths extends $dara.Model {
  /**
   * @remarks
   * The purpose description of the current API path.
   * 
   * @example
   * AG-UI conversation API
   */
  description?: string;
  /**
   * @remarks
   * The non-empty API path corresponding to the current protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * /agui
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class UpdateCustomAgentRequestBodyProtocol extends $dara.Model {
  /**
   * @remarks
   * The request header configurations for the current protocol. The key is a non-empty request header name, and the value must be a string.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The list of API paths corresponding to the current protocol.
   */
  paths?: UpdateCustomAgentRequestBodyProtocolPaths[];
  /**
   * @remarks
   * The invoke Protocol Type. Valid values:
   * - agui: AG-UI protocol.
   * - openai-chat-completion: OpenAI Chat Completions compatible protocol.
   * - custom: custom protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * agui
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      paths: 'paths',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      paths: { 'type': 'array', 'itemType': UpdateCustomAgentRequestBodyProtocolPaths },
      type: 'string',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentRequestBodyRuntimeCompute extends $dara.Model {
  /**
   * @remarks
   * The compute specification. Valid values:
   * - INTERACTIVE: 1 vCPU and 2 GiB of memory.
   * - STANDARD: 2 vCPUs and 4 GiB of memory.
   * - HEAVY: 4 vCPUs and 8 GiB of memory.
   * 
   * This parameter is required.
   * 
   * @example
   * STANDARD
   */
  computeClass?: string;
  static names(): { [key: string]: string } {
    return {
      computeClass: 'computeClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentRequestBodyRuntimeHpa extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable elastic scaling. Default value: false.
   * 
   * This parameter is required.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent sessions allowed per instance. Valid values: 1 to 20. Default value: 20.
   * 
   * @example
   * 20
   */
  maxConcurrentSessionsPerSandbox?: number;
  /**
   * @remarks
   * The maximum number of instances. Valid values: 0 to 100. Default value: 10. This value cannot be less than minSandboxCount.
   * 
   * @example
   * 10
   */
  maxSandboxCount?: number;
  /**
   * @remarks
   * The minimum number of instances. Valid values: 0 to 100. Default value: 1. This value cannot be greater than maxSandboxCount.
   * 
   * @example
   * 1
   */
  minSandboxCount?: number;
  /**
   * @remarks
   * The maximum idle time for a session, in seconds. Valid values: 60 to 86400. Default value: 600.
   * 
   * @example
   * 600
   */
  sessionTtlSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      maxConcurrentSessionsPerSandbox: 'maxConcurrentSessionsPerSandbox',
      maxSandboxCount: 'maxSandboxCount',
      minSandboxCount: 'minSandboxCount',
      sessionTtlSeconds: 'sessionTtlSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      maxConcurrentSessionsPerSandbox: 'number',
      maxSandboxCount: 'number',
      minSandboxCount: 'number',
      sessionTtlSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentRequestBodyRuntimeSessionPolicy extends $dara.Model {
  /**
   * @remarks
   * The name of the request header used for session identification. This parameter is required when type is set to ISOLATED_HEADER_FIELD and must be a valid HTTP request header name. Do not specify this parameter for other policies.
   * 
   * @example
   * X-Session-Id
   */
  headerName?: string;
  /**
   * @remarks
   * The session policy type. Valid values:
   * - AFFINITY: Session affinity.
   * - ISOLATED_HEADER_FIELD: Associates sessions by using the request header specified by headerName.
   * - ISOLATED_COOKIE: Not recommended.
   * - DISABLED: A compatibility option. The response returns AFFINITY.
   * 
   * This parameter is required.
   * 
   * @example
   * AFFINITY
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      headerName: 'headerName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerName: 'string',
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

export class UpdateCustomAgentRequestBodyRuntime extends $dara.Model {
  /**
   * @remarks
   * The compute resource configuration for the agent runtime instance.
   * 
   * This parameter is required.
   */
  compute?: UpdateCustomAgentRequestBodyRuntimeCompute;
  /**
   * @remarks
   * The elastic and session configuration. Omitted fields use default values. To retain the original policy during an update, submit the complete hpa object or omit the entire runtime object.
   */
  hpa?: UpdateCustomAgentRequestBodyRuntimeHpa;
  /**
   * @remarks
   * The session policy configuration, which is used to set the session affinity method for requests.
   * 
   * This parameter is required.
   */
  sessionPolicy?: UpdateCustomAgentRequestBodyRuntimeSessionPolicy;
  static names(): { [key: string]: string } {
    return {
      compute: 'compute',
      hpa: 'hpa',
      sessionPolicy: 'sessionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: UpdateCustomAgentRequestBodyRuntimeCompute,
      hpa: UpdateCustomAgentRequestBodyRuntimeHpa,
      sessionPolicy: UpdateCustomAgentRequestBodyRuntimeSessionPolicy,
    };
  }

  validate() {
    if(this.compute && typeof (this.compute as any).validate === 'function') {
      (this.compute as any).validate();
    }
    if(this.hpa && typeof (this.hpa as any).validate === 'function') {
      (this.hpa as any).validate();
    }
    if(this.sessionPolicy && typeof (this.sessionPolicy as any).validate === 'function') {
      (this.sessionPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentRequestBody extends $dara.Model {
  /**
   * @remarks
   * The inbound access mode.
   * 
   * @example
   * API_KEY
   */
  accessMode?: string;
  /**
   * @remarks
   * The user access scope.
   * 
   * @example
   * ALL
   */
  accessScope?: string;
  /**
   * @remarks
   * The NAS storage mount configuration. Currently, the AgenticFS type is supported and used to mount file directories in access points to agent runtime instances. The AgenticFS directory mount list and `ossMounts` can contain a maximum of 10 items in total. If omitted or set to `[]` during creation, it indicates no mounts. If omitted during an update, the original value is retained. If set to `[]`, the list is cleared. `null` is not accepted.
   */
  agenticFsMounts?: UpdateCustomAgentRequestBodyAgenticFsMounts[];
  /**
   * @remarks
   * The update configuration for the deployment artifact. If the entire artifact object is omitted, the original configuration is retained. When submitting this object, specify the port and the required fields for the selected source. Only one source, either code or container, can be specified.
   */
  artifact?: UpdateCustomAgentRequestBodyArtifact;
  /**
   * @remarks
   * If omitted, the original source is retained. A complete submission indicates an active update of the custom image. If only the port and startup command change, you do not need to submit this parameter.
   */
  customImage?: UpdateCustomAgentRequestBodyCustomImage;
  /**
   * @remarks
   * The description of the agent purpose. The maximum length is 1024 characters after leading and trailing spaces are removed. If omitted, the original value is retained. Pass `null` to clear the description.
   * 
   * @example
   * Custom agent that provides conversation services
   */
  description?: string;
  /**
   * @remarks
   * The user environment variable configuration for the agent process. If the entire environment object is omitted, the original values are retained. If variables is provided, the entire list is replaced, and any variables to be retained must be submitted together. Setting variables to an empty array, setting environment to null, or providing environment while omitting variables clears the user-configured environment variables.
   */
  environment?: UpdateCustomAgentRequestBodyEnvironment;
  /**
   * @remarks
   * The optional HTTP health check configuration. When this object is provided, port must be specified. Unspecified items use default values. Omitting this object during creation means no health check is configured. During an update, omitting this top-level field retains the original configuration, while passing null removes the health check.
   */
  healthCheck?: UpdateCustomAgentRequestBodyHealthCheck;
  /**
   * @remarks
   * The log delivery configuration for the agent. You can specify the Simple Log Service project and Logstore. After a successful creation or update, verify whether the logs are delivered properly.
   */
  logging?: UpdateCustomAgentRequestBodyLogging;
  /**
   * @remarks
   * The name of the custom code or image agent. The length is 1 to 128 characters after leading and trailing spaces are removed. The name must be unique within the same workspace. If omitted, the original value is retained. It cannot be `null` or a blank name.
   * 
   * @example
   * my-custom-agent
   */
  name?: string;
  /**
   * @remarks
   * The network access configuration for the agent. When this object is provided, omitted access items are treated as allowed. The actual accessible scope is still restricted by the workspace network configuration. To retain the original restrictions during an update, specify both accessInternet and accessVpc.
   */
  network?: UpdateCustomAgentRequestBodyNetwork;
  /**
   * @remarks
   * The high-code agent observability configuration.
   */
  observability?: UpdateCustomAgentRequestBodyObservability;
  /**
   * @remarks
   * The list of OSS directory mounts. A maximum of 10 items can be configured in total for OSS mounts and AgenticFS mounts. When you update this parameter, the entire list is replaced. Pass an empty array to clear the mounts.
   */
  ossMounts?: UpdateCustomAgentRequestBodyOssMounts[];
  /**
   * @remarks
   * The list of invocation protocols supported by the agent. Each item includes the protocol type and optional paths and request headers. When you update this parameter, the entire list is replaced.
   */
  protocol?: UpdateCustomAgentRequestBodyProtocol[];
  /**
   * @remarks
   * The ARN of the RAM role used by the agent to access user cloud resources. The role must have the permissions to access the cloud resources.
   * 
   * @example
   * acs:ram::1234567890123456:role/agentcore-runtime-role
   */
  roleArn?: string;
  /**
   * @remarks
   * The runtime configuration. If the entire object is omitted, the original configuration is retained. If provided, you must specify both compute and sessionPolicy. Omitted fields in hpa use default values.
   */
  runtime?: UpdateCustomAgentRequestBodyRuntime;
  /**
   * @remarks
   * If this parameter is not passed during an update, the original value is retained. Explicit true or false settings do not automatically default to false. New contracts reject null and invalid types. Existing compatible portals are processed according to migration agreements. In the current phase, the custom source is normalized to false by the console and omitted by the frontend. Explicit true is rejected. Platform copies are still retained.
   * 
   * @example
   * true
   */
  useImageCache?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'accessMode',
      accessScope: 'accessScope',
      agenticFsMounts: 'agenticFsMounts',
      artifact: 'artifact',
      customImage: 'customImage',
      description: 'description',
      environment: 'environment',
      healthCheck: 'healthCheck',
      logging: 'logging',
      name: 'name',
      network: 'network',
      observability: 'observability',
      ossMounts: 'ossMounts',
      protocol: 'protocol',
      roleArn: 'roleArn',
      runtime: 'runtime',
      useImageCache: 'useImageCache',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
      accessScope: 'string',
      agenticFsMounts: { 'type': 'array', 'itemType': UpdateCustomAgentRequestBodyAgenticFsMounts },
      artifact: UpdateCustomAgentRequestBodyArtifact,
      customImage: UpdateCustomAgentRequestBodyCustomImage,
      description: 'string',
      environment: UpdateCustomAgentRequestBodyEnvironment,
      healthCheck: UpdateCustomAgentRequestBodyHealthCheck,
      logging: UpdateCustomAgentRequestBodyLogging,
      name: 'string',
      network: UpdateCustomAgentRequestBodyNetwork,
      observability: UpdateCustomAgentRequestBodyObservability,
      ossMounts: { 'type': 'array', 'itemType': UpdateCustomAgentRequestBodyOssMounts },
      protocol: { 'type': 'array', 'itemType': UpdateCustomAgentRequestBodyProtocol },
      roleArn: 'string',
      runtime: UpdateCustomAgentRequestBodyRuntime,
      useImageCache: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.agenticFsMounts)) {
      $dara.Model.validateArray(this.agenticFsMounts);
    }
    if(this.artifact && typeof (this.artifact as any).validate === 'function') {
      (this.artifact as any).validate();
    }
    if(this.customImage && typeof (this.customImage as any).validate === 'function') {
      (this.customImage as any).validate();
    }
    if(this.environment && typeof (this.environment as any).validate === 'function') {
      (this.environment as any).validate();
    }
    if(this.healthCheck && typeof (this.healthCheck as any).validate === 'function') {
      (this.healthCheck as any).validate();
    }
    if(this.logging && typeof (this.logging as any).validate === 'function') {
      (this.logging as any).validate();
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.observability && typeof (this.observability as any).validate === 'function') {
      (this.observability as any).validate();
    }
    if(Array.isArray(this.ossMounts)) {
      $dara.Model.validateArray(this.ossMounts);
    }
    if(Array.isArray(this.protocol)) {
      $dara.Model.validateArray(this.protocol);
    }
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The update configuration of the custom code or image agent. You must provide at least one top-level field. Omitted top-level fields retain their original values. When submitting `artifact`, specify `port` and the required fields for the corresponding artifact source. When submitting `runtime`, specify `compute` and `sessionPolicy`, and include the complete `hpa` that needs to be retained. `environment.variables` and other arrays are replaced as complete lists.
   */
  body?: UpdateCustomAgentRequestBody;
  /**
   * @remarks
   * The idempotency token passed as a query parameter. This parameter is required when you explicitly submit a customImage or set container.type to custom. It is optional when you submit an ACR image or a code package. The token must be 1 to 128 characters in length and can contain letters, digits, periods, underscores, colons, and hyphens. Reuse the same token for retries of the same submission. Requests with the same token but different parameters are rejected.
   * 
   * @example
   * custom-agent-request-20261010-001
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
      body: UpdateCustomAgentRequestBody,
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

