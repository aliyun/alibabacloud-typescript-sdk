// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAgentRequestBodyAgenticFsMounts extends $dara.Model {
  /**
   * @remarks
   * The subdirectory under /mnt/agenticfs/ in the container. This field is required for each mount item and is verified by the backend. Mount targets must not be duplicated or form parent-child overrides.
   * 
   * @example
   * /mnt/agenticfs/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The existing non-empty relative directory under the access point. This field is required for each mount item and is verified by the backend. Root directories, absolute paths, and parent directory traversals are not allowed.
   * 
   * @example
   * workspace/data
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the mount is read-only. A value of true indicates read-only, and a value of false indicates read and write. If this field is omitted, the default value is false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The domain name of the access point. This field is required for each mount item and is verified by the backend. Use the DomainName from the NAS ListAccessPoints response. Do not include the protocol, port, or path.
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
   * The startup command for the code package. This field is required in code package mode. The working directory is the extracted code root directory /code, such as python main.py. Quotes and escapes are supported. Environment variables, pipes, and logical operations are not automatically expanded. Use scripts within the package for complex commands.
   * 
   * @example
   * python main.py
   */
  entrypoint?: string;
  /**
   * @remarks
   * The code runtime environment identifier, such as python3.12. When creating or switching environments, use the identifier returned by ListAgentCodeRuntimes. The identifier is verified by the current version catalog and is not a fixed enumeration.
   * 
   * @example
   * python3.12
   */
  languageRuntime?: string;
  /**
   * @remarks
   * The source address of the code package. This field supports oss:// addresses or HTTPS object addresses of standard OSS public domain names, including OSS signed URLs. Arbitrary external sites, custom domain names, and additional authentication request headers are not supported. After a local upload, use the sourceUri returned by GetAgentCodePackageUploadUrl. The address is re-verified and transferred during creation or update. After being saved, a fixed oss:// address of the platform is returned. This fixed address can be reused for common updates.
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
   * The optional executable program and startup parameters. If specified, this field must be a non-empty string. Omitting this field during an update retains the original startup configuration. Modifying only entrypoint does not trigger re-access to the image source. Quotes and escapes are supported. Variables, pipes, and logical operations are not automatically expanded.
   * 
   * @example
   * python app.py
   */
  entrypoint?: string;
  /**
   * @remarks
   * The ID of the ACR instance to which the image repository belongs. This field cannot be empty.
   * 
   * @example
   * cri-a1b2c3d4e5f6
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace to which the ACR image repository belongs. This field cannot be empty.
   * 
   * @example
   * my-agent
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the image repository in the ACR namespace. This field cannot be empty.
   * 
   * @example
   * chat-agent
   */
  repo?: string;
  /**
   * @remarks
   * The image tag used for deployment. If specified, this field must be a non-empty string. When retaining the same ACR repository, you can submit only this field, such as v1.0.1. If omitted, the original tag is retained.
   * 
   * @example
   * v1.0.0
   */
  tag?: string;
  /**
   * @remarks
   * The image source type. Currently, only acr is supported, which indicates Alibaba Cloud Container Registry (ACR).
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
   * The code package deployment configuration. This field is mutually exclusive with container. Code packages use the ZIP or TAR.GZ format. Dependencies are packaged by the user. The platform does not install dependencies or perform online builds.
   */
  code?: UpdateCustomAgentRequestBodyArtifactCode;
  /**
   * @remarks
   * The container image update configuration. When retaining the current ACR source, you can modify only subfields such as tag. Omitted source fields are retained. When switching sources, the merged configuration must contain the required fields of the corresponding source.
   */
  container?: UpdateCustomAgentRequestBodyArtifactContainer;
  /**
   * @remarks
   * The TCP port listened by the agent service. Valid values: 1 to 65535. This field can be modified independently during an update. If omitted, the original port is retained.
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
   * This field is required when type is set to vpc. The security group must belong to the selected VPC.
   * 
   * @example
   * sg-example
   */
  securityGroupId?: string;
  /**
   * @remarks
   * This field is required when submitting pullNetwork and is verified by the backend. The default value is public network for new creations, which is independent of the agent runtime network.
   * 
   * @example
   * public
   */
  type?: string;
  /**
   * @remarks
   * This field is required when type is set to vpc. The security group must belong to the selected VPC.
   * 
   * @example
   * vsw-example
   */
  vSwitchId?: string;
  /**
   * @remarks
   * This field is required when type is set to vpc. The associated account and region are verified by the backend.
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
   * This field is required when submitting customImage and is verified by the backend. Specify the complete registry[:port]/repository:tag or registry[:port]/repository@sha256:digest. Multi-level paths are supported. Do not include the protocol or user information.
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
   * This field is required when submitting customImage and is verified by the backend. Specify the complete independent image pull network configuration. For the public network, pass only type=public.
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
   * The name of the environment variable. It cannot be empty and must be unique within the current list of environment variables.
   * 
   * This parameter is required.
   * 
   * @example
   * LOG_LEVEL
   */
  name?: string;
  /**
   * @remarks
   * The value of the environment variable. It must be a string, and empty strings are allowed.
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
   * The complete list of user environment variables. A non-empty list replaces the original list entirely, while an empty array clears it. The name of each item must be non-empty and unique within the list. The value must be a string, and empty strings are allowed.
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
   * This parameter is currently invalid. Omit it.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The interval between two health checks, in seconds. It must be a positive integer. If omitted, the default value is 10.
   * 
   * @example
   * 10
   */
  intervalSeconds?: number;
  /**
   * @remarks
   * The HTTP health check path. It must start with a forward slash (/). If omitted, the default value is /healthz.
   * 
   * @example
   * /healthz
   */
  path?: string;
  /**
   * @remarks
   * The port accessed for health checks. This field is required when configuring a health check. Valid values: 1 to 65535.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The timeout period for a single health check, in seconds. It must be a positive integer and less than intervalSeconds. If omitted, the default value is 2.
   * 
   * @example
   * 2
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The number of consecutive health check failures required to mark the instance as unhealthy. It must be a positive integer. If omitted, the default value is 3.
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
   * The name of the SLS Logstore that receives agent logs.
   * 
   * @example
   * agent-runtime
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the SLS project that receives agent logs.
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
   * The SLS log delivery destination. When updating this object, both project and logstore must be provided and cannot be empty.
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
   * Specifies whether to allow the agent to access the Internet. A Boolean value is required when configuring accessInternet. For this to take effect, the workspace must also allow Internet access.
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
   * Specifies whether to allow the agent to access the user VPC configured for the workspace. A Boolean value is required when configuring accessVpc. For this to take effect, the workspace must also allow VPC access.
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
   * The Internet access configuration. When this access item is omitted, the agent does not restrict Internet access. However, the workspace must still allow Internet access.
   */
  accessInternet?: UpdateCustomAgentRequestBodyNetworkAccessInternet;
  /**
   * @remarks
   * The user VPC access configuration. When this access item is omitted, the agent does not restrict VPC access. However, the workspace must be configured to allow access to the user VPC.
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
   * The name of the OSS bucket. This field is required for each mount item. The length must be 3 to 63 characters. It can contain only lowercase letters, digits, and hyphens, and cannot start or end with a hyphen.
   * 
   * @example
   * my-agent-data
   */
  bucketName?: string;
  /**
   * @remarks
   * The subdirectory under /mnt/oss/ in the container. This field is required for each mount item. Mount targets cannot be duplicated or form parent-child overlaps.
   * 
   * @example
   * /mnt/oss/train
   */
  mountPath?: string;
  /**
   * @remarks
   * The non-empty object directory prefix in the bucket, such as datasets/train. Leading and trailing forward slashes (/) are removed. The root directory is not supported, and parent directory traversal is not allowed.
   * 
   * @example
   * datasets/train
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the mount is read-only. A value of true indicates read-only, and a value of false indicates read and write. If this field is omitted, the default value is false.
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
   * The request header configuration for the current protocol. The key is a non-empty request header name, and the value must be a string.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The list of API paths corresponding to the current protocol.
   */
  paths?: UpdateCustomAgentRequestBodyProtocolPaths[];
  /**
   * @remarks
   * The invocation protocol type. Valid values:
   * - agui: AG-UI protocol.
   * - openai-chat-completion: OpenAI Chat Completions compatible protocol.
   * - custom: Custom protocol.
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
   * Specifies whether to enable elastic scaling. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * If runtime is provided but hpa is not configured, the default value is false. Omitting the entire runtime retains the original configuration.
   * 
   * This parameter is required.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent sessions for a single runtime instance. Valid values: 1 to 100. When runtime is provided, omitting this field uses the default value of 100.
   * 
   * @example
   * 100
   */
  maxConcurrentSessionsPerSandbox?: number;
  /**
   * @remarks
   * The upper limit of the configured number of instances. Valid values: 0 to 100. The value cannot be less than minSandboxCount. When runtime is provided, omitting this field uses the default value of 10. When auto scaling is disabled, this value does not represent the number of fixedly deployed instances.
   * 
   * @example
   * 10
   */
  maxSandboxCount?: number;
  /**
   * @remarks
   * The lower limit of the configured number of instances. Valid values: 0 to 100. The value cannot be greater than maxSandboxCount. When runtime is provided, omitting this field uses the default value of 1. You can query the actual number of instances through sandboxPhaseCounts.
   * 
   * @example
   * 1
   */
  minSandboxCount?: number;
  /**
   * @remarks
   * The session idle timeout limit, in seconds. Valid values: 60 to 86400. When runtime is provided, omitting this field uses the default value of 600.
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
   * The name of the HTTP request header used by the session policy. This field is required when type is set to ISOLATED_HEADER_FIELD and must be a valid HTTP request header name. Omit this field for other policies.
   * 
   * @example
   * X-Session-Id
   */
  headerName?: string;
  /**
   * @remarks
   * The session policy type. Valid values:
   * - AFFINITY: Session affinity.
   * - ISOLATED_HEADER_FIELD: Associates sessions by using the request header specified in headerName.
   * - ISOLATED_COOKIE: Not recommended for use at this time.
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
   * The configuration for elasticity, concurrent sessions per instance, and session idle timeout. When runtime is provided, omitting hpa or its fields uses the default values: enabled=false, minSandboxCount=1, maxSandboxCount=10, maxConcurrentSessionsPerSandbox=100, and sessionTtlSeconds=600. To retain the original policy during an update, provide the complete hpa configuration. Omitting the entire runtime retains the original configuration. The upper and lower limits are configured values. For the actual number of instances, refer to sandboxPhaseCounts.
   */
  hpa?: UpdateCustomAgentRequestBodyRuntimeHpa;
  /**
   * @remarks
   * The session policy configuration, which is used to set the session association method for requests.
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
   * The list of additional AgenticFS mounts. The total number of AgenticFS mounts and ossMounts cannot exceed 10. Omitting this field or passing an empty array [] during creation indicates no additional mounts. During an update, omitting this field retains the original value, and passing an empty array [] clears the list. This field cannot be null.
   */
  agenticFsMounts?: UpdateCustomAgentRequestBodyAgenticFsMounts[];
  /**
   * @remarks
   * The deployment artifact update configuration. Omitting the entire artifact retains the original configuration. When retaining the current source, you can modify only partial subfields. The merged configuration must have a valid port, and only one source can exist between code and container.
   */
  artifact?: UpdateCustomAgentRequestBodyArtifact;
  /**
   * @remarks
   * Omitting this field retains the original source. Submitting the complete configuration indicates an active update of the custom image. If only the port and startup command change, you do not need to submit this field.
   */
  customImage?: UpdateCustomAgentRequestBodyCustomImage;
  /**
   * @remarks
   * The description of the agent purpose. The maximum length is 1,024 characters after leading and trailing whitespaces are removed. If omitted, the original value is retained. Pass null to clear the description.
   * 
   * @example
   * Custom agent that provides conversation services
   */
  description?: string;
  /**
   * @remarks
   * The user environment variable configuration for the agent process. Omitting the entire environment object retains the original values. Providing variables replaces the entire list, and any variables to be retained must be submitted together. Setting variables to an empty array, environment to null, or providing environment while omitting variables clears the user-configured environment variables.
   */
  environment?: UpdateCustomAgentRequestBodyEnvironment;
  /**
   * @remarks
   * The optional HTTP health check configuration. When this object is provided, port is required, and unspecified items use default values. Omitting this object during creation indicates no configuration. During an update, omitting this top-level field retains the original configuration, while passing null removes the health check.
   */
  healthCheck?: UpdateCustomAgentRequestBodyHealthCheck;
  /**
   * @remarks
   * The log delivery configuration for the agent. You can specify the Simple Log Service (SLS) project and Logstore. After a successful creation or update, verify that logs are delivered properly.
   */
  logging?: UpdateCustomAgentRequestBodyLogging;
  /**
   * @remarks
   * The custom name of the agent. The length must be 1 to 128 characters after trimming leading and trailing whitespace, and it must be unique within the same workspace. Omitting this field retains the original value. You cannot pass null or a blank name.
   * 
   * @example
   * my-custom-agent
   */
  name?: string;
  /**
   * @remarks
   * The network access configuration for the agent. When this object is provided, omitted access items are treated as allowed. The actual accessible range is still restricted by the workspace network configuration. To retain the original restrictions during an update, specify both accessInternet and accessVpc.
   */
  network?: UpdateCustomAgentRequestBodyNetwork;
  /**
   * @remarks
   * The high-code agent observability configuration.
   */
  observability?: UpdateCustomAgentRequestBodyObservability;
  /**
   * @remarks
   * The OSS mount list. The total number of items in this list and agenticFsMounts cannot exceed 10. Each item must include bucketName, path, and mountPath. Mount targets cannot be duplicated or overlap with each other. During an update, this list is replaced entirely. Pass an empty array to clear the list.
   */
  ossMounts?: UpdateCustomAgentRequestBodyOssMounts[];
  /**
   * @remarks
   * The list of invocation protocols supported by the agent. Each item includes the protocol type and optional paths and request headers. This list is replaced entirely during an update.
   */
  protocol?: UpdateCustomAgentRequestBodyProtocol[];
  /**
   * @remarks
   * The ARN of the RAM role used by the agent to access user cloud resources. The role must have the required permissions for the accessed cloud resources.
   * 
   * @example
   * acs:ram::1234567890123456:role/agentcore-runtime-role
   */
  roleArn?: string;
  /**
   * @remarks
   * The runtime configuration. When this object is provided, compute and sessionPolicy must be specified together. To retain the original elastic policy, provide the complete hpa configuration. Omitting the top-level runtime field retains the original configuration.
   */
  runtime?: UpdateCustomAgentRequestBodyRuntime;
  /**
   * @remarks
   * If omitted during an update, the original value is retained. Explicitly set to true or false; false is not automatically populated. The new API contract rejects null and invalid types; existing compatibility endpoints are handled according to migration agreements.
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
   * The update configuration of the custom agent. Provide at least one top-level field. Omitted top-level fields retain their original values. When artifact retains the existing source, partial subfields can be updated. Provide compute and sessionPolicy for runtime based on the structure, and include the complete hpa to be retained. Replace environment.variables and other arrays with the complete lists.
   */
  body?: UpdateCustomAgentRequestBody;
  /**
   * @remarks
   * The idempotency token for the submission. The token must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), colons (:), and hyphens (-). This parameter is required when you explicitly submit customImage. Once provided, the submission is recorded by tenant and workspace. Retrying with the same parameters returns the existing acceptance result. You must use a new token for different submission content. If this parameter is not provided, query the update status before retrying.
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

