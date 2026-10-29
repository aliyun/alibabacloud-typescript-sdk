// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAgentRequestBodyAgenticFsMounts extends $dara.Model {
  /**
   * @remarks
   * The subdirectory under /mnt/agenticfs/ in the container. This parameter is required for each mount item. Mount targets cannot be duplicated or form parent-child overrides.
   * 
   * @example
   * /mnt/agenticfs/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The existing non-empty relative directory under the access point. This parameter is required for each mount item. Root directories, absolute paths, and parent directory traversals are not allowed.
   * 
   * @example
   * workspace/data
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the mount is read-only. A value of true indicates read-only, and a value of false indicates read and write. If you omit this parameter, the default value is false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The domain name of the access point. This parameter is required for each mount item. Specify the DomainName value from the ListAccessPoints response of NAS. Do not include the protocol, port, or path.
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

export class CreateCustomAgentRequestBodyArtifactCode extends $dara.Model {
  /**
   * @remarks
   * The startup command for the code package. This parameter is required in code package mode. The working directory is the extracted code root directory /code, such as python main.py. Quotes and escapes are supported. Environment variables, pipes, and logical operations are not automatically expanded. Use scripts within the package for complex commands.
   * 
   * This parameter is required.
   * 
   * @example
   * python main.py
   */
  entrypoint?: string;
  /**
   * @remarks
   * The code runtime environment identifier, such as python3.12. When you create or switch environments, use the identifier returned by ListAgentCodeRuntimes. The identifier is verified by the current version catalog and is not a fixed enumeration.
   * 
   * This parameter is required.
   * 
   * @example
   * python3.12
   */
  languageRuntime?: string;
  /**
   * @remarks
   * The source address of the code package. This parameter supports oss:// addresses or HTTPS object addresses of standard OSS public domain names, including OSS signed URLs. Arbitrary external sites, custom domain names, and additional authentication request headers are not supported. After a local upload, use the sourceUri returned by GetAgentCodePackageUploadUrl. The address is reverified and transferred during creation or update. After the address is saved, a fixed oss:// address of the platform is returned. You can reuse this fixed address for regular updates.
   * 
   * This parameter is required.
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

export class CreateCustomAgentRequestBodyArtifactContainer extends $dara.Model {
  /**
   * @remarks
   * The optional image startup command. If specified, it must be a non-empty string. If omitted, the default startup method of the image is used.
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
   * The image tag used for deployment. This parameter cannot be empty. When you update the tag, you must also specify artifact.port and other required image fields.
   * 
   * @example
   * v1.0.0
   */
  tag?: string;
  /**
   * @remarks
   * The image source type. Only acr is supported, which indicates Alibaba Cloud Container Registry (ACR).
   * 
   * This parameter is required.
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

export class CreateCustomAgentRequestBodyArtifact extends $dara.Model {
  /**
   * @remarks
   * The code package deployment configuration. This parameter is mutually exclusive with container. Code packages use the ZIP or TAR.GZ format. Dependencies must be packaged by the user. The platform does not install dependencies or perform online builds.
   */
  code?: CreateCustomAgentRequestBodyArtifactCode;
  /**
   * @remarks
   * The Container Registry (ACR) container image configuration. You must specify type, instanceId, namespace, repo, and tag. Do not configure code at the same time.
   */
  container?: CreateCustomAgentRequestBodyArtifactContainer;
  /**
   * @remarks
   * The TCP port on which the agent service listens. Valid values: 1 to 65535.
   * 
   * This parameter is required.
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
      code: CreateCustomAgentRequestBodyArtifactCode,
      container: CreateCustomAgentRequestBodyArtifactContainer,
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

export class CreateCustomAgentRequestBodyCustomImagePullNetwork extends $dara.Model {
  /**
   * @remarks
   * The ID of the security group. This parameter is required when type is set to vpc. The security group must belong to the selected VPC.
   * 
   * @example
   * sg-example
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The type of the pull network. This parameter is required when you submit pullNetwork and is verified by the backend. The default value is public network, which is independent of the agent runtime network.
   * 
   * @example
   * public
   */
  type?: string;
  /**
   * @remarks
   * The ID of the security group. This parameter is required when type is set to vpc. The security group must belong to the selected VPC.
   * 
   * @example
   * vsw-example
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC. This parameter is required when type is set to vpc. The account and region to which the VPC belongs are verified by the backend.
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

export class CreateCustomAgentRequestBodyCustomImage extends $dara.Model {
  /**
   * @remarks
   * The custom image address. This parameter is required when you submit customImage and is verified by the backend. Specify the full registry[:port]/repository:tag or registry[:port]/repository@sha256:digest format. Multi-level paths are supported. Do not include the protocol or user information.
   * 
   * @example
   * registry.example.com/team/agent:v1
   */
  image?: string;
  /**
   * @remarks
   * The repository password or token for the current task. Submit a non-empty value in pair with username. The value is not trimmed. Null, empty strings, or masked values are not accepted. This parameter is used only for the current task and is not permanently saved or returned. To use anonymous access, omit both this parameter and username.
   * 
   * @example
   * example-registry-token
   */
  password?: string;
  /**
   * @remarks
   * The independent network configuration for pulling the image. This parameter is required when you submit customImage and is verified by the backend. To use the public network, specify only type=public.
   */
  pullNetwork?: CreateCustomAgentRequestBodyCustomImagePullNetwork;
  /**
   * @remarks
   * Specifies whether to skip HTTPS certificate verification. If you omit this parameter, the default value is false. Null is not accepted. HTTP fallback semantics are still under discussion and do not affect the definition of this field. The image address does not include the protocol.
   * 
   * @example
   * false
   */
  skipTlsVerify?: boolean;
  /**
   * @remarks
   * The repository username for the current task. When you create or explicitly update a private source, resubmit this parameter in pair with password. Existing copies also require verification. To use anonymous access, omit both this parameter and password. Read-only usernames are not automatically used as input for the current task.
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
      pullNetwork: CreateCustomAgentRequestBodyCustomImagePullNetwork,
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

export class CreateCustomAgentRequestBodyEnvironmentVariables extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable. This parameter cannot be empty and must be unique in the current environment variable list.
   * 
   * This parameter is required.
   * 
   * @example
   * LOG_LEVEL
   */
  name?: string;
  /**
   * @remarks
   * The value of the environment variable. The value must be a string. Empty strings are allowed.
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

export class CreateCustomAgentRequestBodyEnvironment extends $dara.Model {
  /**
   * @remarks
   * The list of environment variables. Each item includes a name and a value. The entire list is replaced during an update.
   */
  variables?: CreateCustomAgentRequestBodyEnvironmentVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': CreateCustomAgentRequestBodyEnvironmentVariables },
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

export class CreateCustomAgentRequestBodyHealthCheck extends $dara.Model {
  /**
   * @remarks
   * This parameter currently takes no effect. Omit this parameter.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The interval between two health checks, in seconds. This value must be a positive integer. Default value: 10.
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
   * The port accessed for health checks. This field is required when you configure a health check. Valid values: 1 to 65535.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The timeout period for a single health check, in seconds. This value must be a positive integer and less than the value of intervalSeconds. Default value: 2.
   * 
   * @example
   * 2
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The number of consecutive health check failures required to mark the target as unhealthy. This value must be a positive integer. Default value: 3.
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

export class CreateCustomAgentRequestBodyLoggingSls extends $dara.Model {
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

export class CreateCustomAgentRequestBodyLogging extends $dara.Model {
  /**
   * @remarks
   * The SLS log delivery destination. When you configure this object, neither the project nor the logstore field can be empty.
   */
  sls?: CreateCustomAgentRequestBodyLoggingSls;
  static names(): { [key: string]: string } {
    return {
      sls: 'sls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sls: CreateCustomAgentRequestBodyLoggingSls,
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

export class CreateCustomAgentRequestBodyNetworkAccessInternet extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the agent to access the Internet. A Boolean value is required when you configure accessInternet. For this setting to take effect, the workspace must also allow Internet access.
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

export class CreateCustomAgentRequestBodyNetworkAccessVpc extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the agent to access the user VPC configured for the workspace. A Boolean value is required when you configure accessVpc. For this setting to take effect, the workspace must also allow VPC access.
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

export class CreateCustomAgentRequestBodyNetwork extends $dara.Model {
  /**
   * @remarks
   * The Internet access configuration. If this access item is omitted, Internet access is not restricted on the agent side. However, the workspace must still allow Internet access.
   */
  accessInternet?: CreateCustomAgentRequestBodyNetworkAccessInternet;
  /**
   * @remarks
   * The user VPC access configuration. If this access item is omitted, VPC access is not restricted on the agent side. However, the workspace must still be configured to allow access to the user VPC.
   */
  accessVpc?: CreateCustomAgentRequestBodyNetworkAccessVpc;
  static names(): { [key: string]: string } {
    return {
      accessInternet: 'accessInternet',
      accessVpc: 'accessVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInternet: CreateCustomAgentRequestBodyNetworkAccessInternet,
      accessVpc: CreateCustomAgentRequestBodyNetworkAccessVpc,
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

export class CreateCustomAgentRequestBodyObservability extends $dara.Model {
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

export class CreateCustomAgentRequestBodyOssMounts extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket. This field is required for each mount item. The name must be 3 to 63 characters in length and can contain only lowercase letters, digits, and hyphens. It cannot start or end with a hyphen.
   * 
   * @example
   * my-agent-data
   */
  bucketName?: string;
  /**
   * @remarks
   * The subdirectory under /mnt/oss/ in the container. This field is required for each mount item. Mount targets must not be duplicated or form parent-child overlaps.
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
   * Specifies whether the mount is read-only. A value of true indicates read-only, and a value of false indicates read and write. If you omit this parameter, the default value is false.
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

export class CreateCustomAgentRequestBodyProtocolPaths extends $dara.Model {
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

export class CreateCustomAgentRequestBodyProtocol extends $dara.Model {
  /**
   * @remarks
   * The request header configuration for the current protocol. The key is a non-empty request header name, and the value must be a string.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The list of API paths corresponding to the current protocol.
   */
  paths?: CreateCustomAgentRequestBodyProtocolPaths[];
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
      paths: { 'type': 'array', 'itemType': CreateCustomAgentRequestBodyProtocolPaths },
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

export class CreateCustomAgentRequestBodyRuntimeCompute extends $dara.Model {
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

export class CreateCustomAgentRequestBodyRuntimeHpa extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable elastic scaling. A value of true indicates that elastic scaling is enabled, and a value of false indicates that elastic scaling is disabled. When runtime is provided, omitting this field defaults to false.
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
   * The maximum number of runtime instances. Valid values: 1 to 100. This value cannot be less than the value of minSandboxCount. When runtime is provided, omitting this field uses the default value of 10.
   * 
   * @example
   * 10
   */
  maxSandboxCount?: number;
  /**
   * @remarks
   * The minimum number of runtime instances. Valid values: 1 to 100. This value cannot be greater than the value of maxSandboxCount. When runtime is provided, omitting this field uses the default value of 1.
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

export class CreateCustomAgentRequestBodyRuntimeSessionPolicy extends $dara.Model {
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

export class CreateCustomAgentRequestBodyRuntime extends $dara.Model {
  /**
   * @remarks
   * The compute resource configuration for the agent runtime instance.
   * 
   * This parameter is required.
   */
  compute?: CreateCustomAgentRequestBodyRuntimeCompute;
  /**
   * @remarks
   * The optional elastic policy. When runtime is provided, omitting hpa or its fields applies the following default values: enabled is false, the minimum number of instances is 1, the maximum number of instances is 10, the maximum number of concurrent sessions per instance is 100, and the session idle timeout is 600 seconds. To retain the original policy during an update, provide the complete hpa configuration.
   */
  hpa?: CreateCustomAgentRequestBodyRuntimeHpa;
  /**
   * @remarks
   * The session policy configuration used to set the session association method for requests.
   * 
   * This parameter is required.
   */
  sessionPolicy?: CreateCustomAgentRequestBodyRuntimeSessionPolicy;
  static names(): { [key: string]: string } {
    return {
      compute: 'compute',
      hpa: 'hpa',
      sessionPolicy: 'sessionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: CreateCustomAgentRequestBodyRuntimeCompute,
      hpa: CreateCustomAgentRequestBodyRuntimeHpa,
      sessionPolicy: CreateCustomAgentRequestBodyRuntimeSessionPolicy,
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

export class CreateCustomAgentRequestBody extends $dara.Model {
  /**
   * @remarks
   * The list of additional AgenticFS mounts. The total number of AgenticFS mounts and ossMounts cannot exceed 10. If you omit this parameter or pass an empty array [] during creation, no additional mounts are configured. If you omit this parameter during an update, the original value is retained. If you pass an empty array [], the mounts are cleared. You cannot pass null.
   */
  agenticFsMounts?: CreateCustomAgentRequestBodyAgenticFsMounts[];
  /**
   * @remarks
   * The deployment artifact configuration. You must specify the service listening port and choose either code or container as the deployment method.
   * 
   * This parameter is required.
   */
  artifact?: CreateCustomAgentRequestBodyArtifact;
  /**
   * @remarks
   * The custom image source. This parameter is required when artifact.container.type is set to custom. Omit this parameter for other sources.
   */
  customImage?: CreateCustomAgentRequestBodyCustomImage;
  /**
   * @remarks
   * The description of the agent purpose. The description can be up to 1,024 characters in length after leading and trailing spaces are removed.
   * 
   * @example
   * Custom agent that provides conversation services
   */
  description?: string;
  /**
   * @remarks
   * The environment variable configuration passed to the agent runtime process.
   */
  environment?: CreateCustomAgentRequestBodyEnvironment;
  /**
   * @remarks
   * The optional HTTP health check configuration. When this object is provided, the port field is required, and unspecified fields use default values. Omitting this field during creation means no health check is configured. Omitting this top-level field during an update retains the original configuration, while passing null removes the health check.
   */
  healthCheck?: CreateCustomAgentRequestBodyHealthCheck;
  /**
   * @remarks
   * The log delivery configuration for the agent. You can specify the Simple Log Service (SLS) project and Logstore. After a successful creation or update, verify that logs are delivered as expected.
   */
  logging?: CreateCustomAgentRequestBodyLogging;
  /**
   * @remarks
   * The custom name of the agent. The name must be 1 to 128 characters in length after leading and trailing spaces are removed. The name must be unique within the same workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * my-custom-agent
   */
  name?: string;
  /**
   * @remarks
   * The network access configuration for the agent. When this object is provided, omitted access items are treated as allowed. The actual accessible scope is still restricted by the network configuration of the workspace. To retain the original restrictions during an update, specify both accessInternet and accessVpc.
   */
  network?: CreateCustomAgentRequestBodyNetwork;
  /**
   * @remarks
   * The high-code agent observability configuration.
   */
  observability?: CreateCustomAgentRequestBodyObservability;
  /**
   * @remarks
   * The OSS mount list. The total number of items in this list and agenticFsMounts cannot exceed 10. Each item must include bucketName, path, and mountPath. Mount targets must not be duplicated or overlap with each other. During an update, this list is replaced entirely. Pass an empty array [] to clear the list.
   */
  ossMounts?: CreateCustomAgentRequestBodyOssMounts[];
  /**
   * @remarks
   * The list of invocation protocols supported by the agent. Each item includes the protocol type and optional paths and request headers. During an update, this list is replaced entirely.
   */
  protocol?: CreateCustomAgentRequestBodyProtocol[];
  /**
   * @remarks
   * The ARN of the RAM role used by the agent to access user cloud resources. The role must have the required permissions for the accessed cloud resources.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::1234567890123456:role/agentcore-runtime-role
   */
  roleArn?: string;
  /**
   * @remarks
   * The runtime configuration, including compute specifications, session policies, and an optional elastic policy. Both compute and sessionPolicy must be specified at the same time.
   * 
   * This parameter is required.
   */
  runtime?: CreateCustomAgentRequestBodyRuntime;
  /**
   * @remarks
   * The default value is false if omitted during creation. Explicit true or false settings are supported. The new contract rejects null and invalid types. Existing compatibility endpoints are handled according to migration agreements.
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
      agenticFsMounts: { 'type': 'array', 'itemType': CreateCustomAgentRequestBodyAgenticFsMounts },
      artifact: CreateCustomAgentRequestBodyArtifact,
      customImage: CreateCustomAgentRequestBodyCustomImage,
      description: 'string',
      environment: CreateCustomAgentRequestBodyEnvironment,
      healthCheck: CreateCustomAgentRequestBodyHealthCheck,
      logging: CreateCustomAgentRequestBodyLogging,
      name: 'string',
      network: CreateCustomAgentRequestBodyNetwork,
      observability: CreateCustomAgentRequestBodyObservability,
      ossMounts: { 'type': 'array', 'itemType': CreateCustomAgentRequestBodyOssMounts },
      protocol: { 'type': 'array', 'itemType': CreateCustomAgentRequestBodyProtocol },
      roleArn: 'string',
      runtime: CreateCustomAgentRequestBodyRuntime,
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

export class CreateCustomAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON configuration of the custom agent. You must specify name, artifact, roleArn, and runtime.
   */
  body?: CreateCustomAgentRequestBody;
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
      body: CreateCustomAgentRequestBody,
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

