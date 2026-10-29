// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAgentRequestBodyAgenticFsMounts extends $dara.Model {
  /**
   * @remarks
   * The subdirectory under /mnt/agenticfs/ in the container. This field is required for each mount item and is validated by the backend. Mount targets cannot be duplicated or overlap in a parent-child relationship.
   * 
   * @example
   * /mnt/agenticfs/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The existing non-empty relative directory under the access point. This field is required for each mount item and is validated by the backend. Root directories, absolute paths, and parent directory traversals are not allowed.
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
   * The domain name of the access point. This field is required for each mount item and is validated by the backend. Use the DomainName value from the ListAccessPoints response of NAS. Do not include the protocol, port, or path.
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
   * The code runtime environment identifier, such as python3.12. When you create or switch environments, use the identifier returned by ListAgentCodeRuntimes. The identifier is validated by the current version catalog and is not a fixed enumeration.
   * 
   * @example
   * python3.12
   */
  languageRuntime?: string;
  /**
   * @remarks
   * The source address of the code package. This field supports oss:// addresses or HTTPS object addresses of standard OSS public domain names, including OSS signed URLs. External sites, custom domain names, and additional authentication request headers are not supported. For local uploads, use the sourceUri returned by GetAgentCodePackageUploadUrl. The address is revalidated and transferred during creation or update. After the address is saved, a fixed oss:// address of the platform is returned. You can reuse this fixed address for regular updates.
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
   * The optional executable program and startup parameters. If specified, this field must be a non-empty string. When you update the artifact, omitting this field uses the default startup method of the image. To retain the original custom startup command, you must provide this field.
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
   * The image tag used for deployment. This field cannot be empty. When you update the tag, you must also provide artifact.port and other required image fields.
   * 
   * @example
   * v1.0.0
   */
  tag?: string;
  /**
   * @remarks
   * The image source type. Only acr is supported, which indicates Container Registry.
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
   * The code package deployment configuration. This field is mutually exclusive with the container field. Code packages use the ZIP or TAR.GZ format. Dependencies must be packaged by the user. The platform does not install dependencies or perform online builds.
   */
  code?: UpdateCustomAgentRequestBodyArtifactCode;
  /**
   * @remarks
   * The ACR container image configuration. You must specify the type, instanceId, namespace, repo, and tag fields. Do not configure the code field at the same time.
   */
  container?: UpdateCustomAgentRequestBodyArtifactContainer;
  /**
   * @remarks
   * The TCP port listened by the agent service. Valid values: 1 to 65535.
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
   * The ID of the security group. This field is required when type is set to vpc and must belong to the selected VPC.
   * 
   * @example
   * sg-example
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The type of the pull network. This field is required when you submit pullNetwork and is validated by the backend. The default value for a new configuration is public network, which is independent of the agent runtime network.
   * 
   * @example
   * public
   */
  type?: string;
  /**
   * @remarks
   * The ID of the security group. This field is required when type is set to vpc and must belong to the selected VPC.
   * 
   * @example
   * vsw-example
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC. This field is required when type is set to vpc. The associated account and region are validated by the backend.
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
   * The custom image address. This field is required when you submit customImage and is validated by the backend. Specify the full registry[:port]/repository:tag or registry[:port]/repository@sha256:digest format. Multi-level paths are supported. Do not include the protocol or user information.
   * 
   * @example
   * registry.example.com/team/agent:v1
   */
  image?: string;
  /**
   * @remarks
   * The repository password or token for the current task. Submit a non-empty value in pairs with the username field. The value is not trimmed and cannot be null, an empty string, or a masked value. This field is used only for the current task and is not permanently saved or returned. To use anonymous access, omit both fields.
   * 
   * @example
   * example-registry-token
   */
  password?: string;
  /**
   * @remarks
   * The independent network configuration for pulling images. This field is required when you submit customImage and is validated by the backend. For public networks, only pass type=public.
   */
  pullNetwork?: UpdateCustomAgentRequestBodyCustomImagePullNetwork;
  /**
   * @remarks
   * Specifies whether to skip HTTPS certificate verification. If omitted, the default value is false. This field does not accept null. HTTP fallback semantics are still under discussion and do not affect the current field definition. The image address does not include a protocol.
   * 
   * @example
   * false
   */
  skipTlsVerify?: boolean;
  /**
   * @remarks
   * The repository username for the current task. When you create or explicitly update a private source, resubmit this field in pairs with the password field. Existing copies also require verification. To use anonymous access, omit both fields. A read-only username is not automatically used as the input for the current task.
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
   * The name of the environment variable. This field cannot be empty and must be unique in the current environment variable list.
   * 
   * This parameter is required.
   * 
   * @example
   * LOG_LEVEL
   */
  name?: string;
  /**
   * @remarks
   * The value of the environment variable. This field must be a string and can be an empty string.
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
   * The list of environment variables. Each item includes a name and a value. This list is replaced as a whole during an update.
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
   * The interval between two consecutive health checks, in seconds. The value must be a positive integer. Default value: 10.
   * 
   * @example
   * 10
   */
  intervalSeconds?: number;
  /**
   * @remarks
   * The HTTP health check path. The path must start with a forward slash (/). Default value: /healthz.
   * 
   * @example
   * /healthz
   */
  path?: string;
  /**
   * @remarks
   * The port used for health checks. This field is required when you configure a health check. Valid values: 1 to 65535.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The timeout period for a single health check, in seconds. The value must be a positive integer and less than the value of intervalSeconds. Default value: 2.
   * 
   * @example
   * 2
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The number of consecutive health check failures required to mark the target as unhealthy. The value must be a positive integer. Default value: 3.
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
   * The SLS log delivery destination. When you update this object, you must provide both the project and logstore fields, and they cannot be empty.
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
   * Specifies whether to allow the agent to access the Internet. A Boolean value is required when you configure accessInternet. For this setting to take effect, Internet access must also be allowed by the workspace.
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
   * Specifies whether to allow the agent to access the user VPC configured for the workspace. A Boolean value is required when you configure accessVpc. For this setting to take effect, VPC access must also be allowed by the workspace.
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
   * The Internet access configuration. If this access item is omitted, the agent does not restrict Internet access. However, Internet access must still be allowed by the workspace.
   */
  accessInternet?: UpdateCustomAgentRequestBodyNetworkAccessInternet;
  /**
   * @remarks
   * The user VPC access configuration. If this access item is omitted, the agent does not restrict VPC access. However, the workspace must be configured to allow access to the user VPC.
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
   * The name of the OSS bucket. This field is required for each mount item. The name must be 3 to 63 characters in length and can contain only lowercase letters, digits, and hyphens (-). It cannot start or end with a hyphen.
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
   * The non-empty object directory prefix in the bucket, such as datasets/train. Leading and trailing forward slashes (/) are removed. The root directory is not supported. Do not use parent directory navigation.
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
   * The computing specification. Valid values:
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
   * Specifies whether to enable elastic scaling. A value of true indicates that elastic scaling is enabled. A value of false indicates that elastic scaling is disabled. When runtime is provided, omitting this field defaults to false.
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
   * The maximum number of runtime instances. Valid values: 1 to 100. The value cannot be less than the value of minSandboxCount. When runtime is provided, omitting this field uses the default value of 10.
   * 
   * @example
   * 10
   */
  maxSandboxCount?: number;
  /**
   * @remarks
   * The minimum number of runtime instances. Valid values: 1 to 100. The value cannot be greater than the value of maxSandboxCount. When runtime is provided, omitting this field uses the default value of 1.
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
   * The optional elastic policy. When runtime is provided, omitting hpa or its fields uses the following default values: enabled is false, the minimum number of instances is 1, the maximum number of instances is 10, the maximum number of concurrent sessions per instance is 100, and the session idle timeout is 600 seconds. To retain the original policy during an update, provide the complete hpa configuration.
   */
  hpa?: UpdateCustomAgentRequestBodyRuntimeHpa;
  /**
   * @remarks
   * The session policy configuration used to set the session affinity method for requests.
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
   * The list of additional AgenticFS mounts. The total number of AgenticFS mounts and OSS mounts cannot exceed 10. If you omit this field or pass an empty array [] during creation, no additional mounts are configured. During an update, omitting this field retains the original value, and passing an empty array [] clears the list. You cannot pass null.
   */
  agenticFsMounts?: UpdateCustomAgentRequestBodyAgenticFsMounts[];
  /**
   * @remarks
   * The deployment artifact configuration. You must specify the service listening port and choose either code or container as the deployment method. During an update, you must provide the required fields for the selected method.
   */
  artifact?: UpdateCustomAgentRequestBodyArtifact;
  /**
   * @remarks
   * The custom image configuration. Omitting this field retains the original source. Submitting the complete configuration indicates an active update of the custom image. You do not need to submit this field if only the port and startup command change.
   */
  customImage?: UpdateCustomAgentRequestBodyCustomImage;
  /**
   * @remarks
   * The description of the agent purpose. The description can be up to 1,024 characters in length after leading and trailing spaces are removed. If omitted, the original value is retained. Pass null to clear the description.
   * 
   * @example
   * Custom agent that provides conversation services
   */
  description?: string;
  /**
   * @remarks
   * The environment variable configuration for the agent process. Omitting this top-level field retains the original value. Providing this object but omitting the variables field clears the custom environment variables. To retain the variables, provide the complete list.
   */
  environment?: UpdateCustomAgentRequestBodyEnvironment;
  /**
   * @remarks
   * The optional HTTP health check configuration. When this object is provided, the port field is required, and other unspecified fields use default values. Omitting this object during creation means no health check is configured. During an update, omitting this top-level field retains the original configuration, and passing null removes the health check.
   */
  healthCheck?: UpdateCustomAgentRequestBodyHealthCheck;
  /**
   * @remarks
   * The log delivery configuration for the agent. You can specify the Simple Log Service (SLS) project and Logstore. After a successful creation or update, verify that logs are delivered as expected.
   */
  logging?: UpdateCustomAgentRequestBodyLogging;
  /**
   * @remarks
   * The custom name of the agent. The name must be 1 to 128 characters in length after leading and trailing spaces are removed, and must be unique within the same workspace. Omitting this field retains the original value. You cannot pass null or an empty name.
   * 
   * @example
   * my-custom-agent
   */
  name?: string;
  /**
   * @remarks
   * The network access configuration for the agent. When this object is provided, omitted access items are treated as allowed. The actual accessible scope is still restricted by the network configuration of the workspace. To retain the original restrictions during an update, specify both accessInternet and accessVpc.
   */
  network?: UpdateCustomAgentRequestBodyNetwork;
  /**
   * @remarks
   * The high-code agent observability configuration.
   */
  observability?: UpdateCustomAgentRequestBodyObservability;
  /**
   * @remarks
   * The list of Object Storage Service (OSS) mounts. The total number of OSS mounts and agenticFsMounts cannot exceed 10. For each item, you must specify bucketName, path, and mountPath. Mount targets cannot be duplicated or overlap with each other. During an update, this list is replaced entirely. Pass an empty array to clear all mounts.
   */
  ossMounts?: UpdateCustomAgentRequestBodyOssMounts[];
  /**
   * @remarks
   * The list of invocation protocols supported by the agent. Each item includes the protocol type and optional paths and request headers. During an update, this list is replaced entirely.
   */
  protocol?: UpdateCustomAgentRequestBodyProtocol[];
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role used by the agent to access user cloud resources. The role must have the required permissions for the accessed cloud resources.
   * 
   * @example
   * acs:ram::1234567890123456:role/agentcore-runtime-role
   */
  roleArn?: string;
  /**
   * @remarks
   * The runtime configuration. When this object is provided, both compute and sessionPolicy must be present. To retain the original elastic policy, provide the complete hpa configuration. Omitting the top-level runtime field retains the original configuration.
   */
  runtime?: UpdateCustomAgentRequestBodyRuntime;
  /**
   * @remarks
   * If this field is not passed during an update, the original value is retained. Explicitly set this field to true or false. The system does not automatically append false. The new contract rejects null and invalid types. Existing compatibility endpoints are processed according to migration agreements.
   * 
   * @example
   * true
   */
  useImageCache?: boolean;
  static names(): { [key: string]: string } {
    return {
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
   * The update configuration for the custom agent. Specify at least one top-level field. Omitted top-level fields retain their original values. When you provide a configuration object, you must specify its required subfields and include any optional configurations that you want to retain. Arrays are replaced as a whole.
   */
  body?: UpdateCustomAgentRequestBody;
  /**
   * @remarks
   * Idempotence is not currently guaranteed. Do not rely on this parameter to prevent duplicate requests.
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

