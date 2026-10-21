// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
  /**
   * @remarks
   * The AgenticFS mount directory in the container, located under /mnt/agenticfs/.
   * 
   * @example
   * /mnt/agenticfs/data
   */
  mountPath?: string;
  /**
   * @remarks
   * The relative directory within the mounted access point.
   * 
   * @example
   * workspace/data
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the mount is read-only. A value of true indicates a read-only mount, and a value of false indicates a read-write mount.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The domain name of the AgenticFS access point used for the mount.
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

export class UpdateCustomAgentResponseBodyDataArtifactCode extends $dara.Model {
  /**
   * @remarks
   * The startup entry point of the code package. Code package deployment is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * python app.py
   */
  entrypoint?: string;
  /**
   * @remarks
   * The language runtime identifier of the code package. Code package deployment is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * python
   */
  languageRuntime?: string;
  /**
   * @remarks
   * The source URI of the code package. Code package deployment is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://my-agent-bucket/packages/agent.zip
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

export class UpdateCustomAgentResponseBodyDataArtifactContainer extends $dara.Model {
  /**
   * @remarks
   * The custom executable program and startup parameters. If not configured, the default startup method of the image is used.
   * 
   * @example
   * python app.py
   */
  entrypoint?: string;
  /**
   * @remarks
   * The ID of the ACR instance to which the image repository belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-a1b2c3d4e5f6
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace to which the ACR image repository belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * my-agent
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the image repository in the ACR namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * chat-agent
   */
  repo?: string;
  /**
   * @remarks
   * The latest submitted image tag.
   * 
   * This parameter is required.
   * 
   * @example
   * v1.0.0
   */
  tag?: string;
  /**
   * @remarks
   * The image source type. A value of acr indicates Alibaba Cloud Container Registry (ACR).
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

export class UpdateCustomAgentResponseBodyDataArtifact extends $dara.Model {
  /**
   * @remarks
   * The code package configuration field. Code package deployment is not supported.
   */
  code?: UpdateCustomAgentResponseBodyDataArtifactCode;
  /**
   * @remarks
   * The latest submitted ACR container image configuration.
   */
  container?: UpdateCustomAgentResponseBodyDataArtifactContainer;
  /**
   * @remarks
   * The TCP port on which the agent service listens.
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
      code: UpdateCustomAgentResponseBodyDataArtifactCode,
      container: UpdateCustomAgentResponseBodyDataArtifactContainer,
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

export class UpdateCustomAgentResponseBodyDataEnvironmentVariables extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable.
   * 
   * This parameter is required.
   * 
   * @example
   * LOG_LEVEL
   */
  name?: string;
  /**
   * @remarks
   * The string value of the environment variable. Empty strings are allowed.
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

export class UpdateCustomAgentResponseBodyDataEnvironment extends $dara.Model {
  /**
   * @remarks
   * The latest submitted list of environment variables.
   */
  variables?: UpdateCustomAgentResponseBodyDataEnvironmentVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': UpdateCustomAgentResponseBodyDataEnvironmentVariables },
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

export class UpdateCustomAgentResponseBodyDataHealthCheck extends $dara.Model {
  /**
   * @remarks
   * This parameter does not take effect.
   * 
   * @example
   * 1
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The interval between two health checks, in seconds.
   * 
   * @example
   * 10
   */
  intervalSeconds?: number;
  /**
   * @remarks
   * The HTTP health check path.
   * 
   * @example
   * /healthz
   */
  path?: string;
  /**
   * @remarks
   * The port accessed for HTTP health checks.
   * 
   * @example
   * 8080
   */
  port?: number;
  /**
   * @remarks
   * The timeout period for a single health check, in seconds.
   * 
   * @example
   * 2
   */
  timeoutSeconds?: number;
  /**
   * @remarks
   * The number of consecutive health check failures after which the agent is considered unhealthy.
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

export class UpdateCustomAgentResponseBodyDataImageCachePreparation extends $dara.Model {
  /**
   * @remarks
   * The value is equal to the imageCacheId in the same response and belongs to the current workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * img-example
   */
  imageId?: string;
  /**
   * @remarks
   * The acceptance snapshot of the current request, which can be PENDING, READY, or FAILED. This value does not represent the real-time status. You can query the real-time status by calling GetImageCache.
   * 
   * This parameter is required.
   * 
   * @example
   * PENDING
   */
  statusAtAcceptance?: string;
  /**
   * @remarks
   * The value is fixed as ACCEPTED, indicating that the logical association and preparation intent are confirmed.
   * 
   * This parameter is required.
   * 
   * @example
   * ACCEPTED
   */
  submissionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'imageId',
      statusAtAcceptance: 'statusAtAcceptance',
      submissionStatus: 'submissionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      statusAtAcceptance: 'string',
      submissionStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentResponseBodyDataLatestExecutionError extends $dara.Model {
  /**
   * @remarks
   * The cause code for the wait or execution failure of the latest configuration. You can use this code to determine the subsequent processing method.
   * 
   * This parameter is required.
   * 
   * @example
   * AgentExecutionFailed
   */
  code?: string;
  /**
   * @remarks
   * The description of the cause for the wait or when the latest configuration failed to execute. Check the code and retryable fields to determine What to do next.
   * 
   * This parameter is required.
   * 
   * @example
   * Agent execution failed. Check the configuration and resubmit
   */
  message?: string;
  /**
   * @remarks
   * Specifies whether automatic retry is performed. If the value is true, you can query again later. If the value is false, check and fix the configuration based on the cause and then resubmit the agent.
   * 
   * This parameter is required.
   */
  retryable?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      retryable: 'retryable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      retryable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentResponseBodyDataLoggingSls extends $dara.Model {
  /**
   * @remarks
   * The name of the Simple Log Service logstore that receives agent logs.
   * 
   * @example
   * agent-runtime
   */
  logstore?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project that receives agent logs.
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

export class UpdateCustomAgentResponseBodyDataLogging extends $dara.Model {
  /**
   * @remarks
   * The Simple Log Service (SLS) log delivery destination.
   */
  sls?: UpdateCustomAgentResponseBodyDataLoggingSls;
  static names(): { [key: string]: string } {
    return {
      sls: 'sls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sls: UpdateCustomAgentResponseBodyDataLoggingSls,
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

export class UpdateCustomAgentResponseBodyDataNetworkAccessInternet extends $dara.Model {
  /**
   * @remarks
   * Specifies whether Internet access is allowed on the agent side. The actual access remains restricted by the workspace.
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

export class UpdateCustomAgentResponseBodyDataNetworkAccessVpc extends $dara.Model {
  /**
   * @remarks
   * Specifies whether access to the user VPC configured for the workspace is allowed on the agent side. The actual access remains restricted by the workspace.
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

export class UpdateCustomAgentResponseBodyDataNetwork extends $dara.Model {
  /**
   * @remarks
   * The Internet access configuration of the agent. If this parameter is not configured, Internet access is allowed on the agent side but remains restricted by the workspace.
   */
  accessInternet?: UpdateCustomAgentResponseBodyDataNetworkAccessInternet;
  /**
   * @remarks
   * The user VPC access configuration of the agent. If this parameter is not configured, user VPC access is allowed on the agent side but remains restricted by the workspace.
   */
  accessVpc?: UpdateCustomAgentResponseBodyDataNetworkAccessVpc;
  static names(): { [key: string]: string } {
    return {
      accessInternet: 'accessInternet',
      accessVpc: 'accessVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInternet: UpdateCustomAgentResponseBodyDataNetworkAccessInternet,
      accessVpc: UpdateCustomAgentResponseBodyDataNetworkAccessVpc,
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

export class UpdateCustomAgentResponseBodyDataObservability extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable agent observability. Default value: true. If set to false, the platform Python probe is not loaded at runtime, and you must collect observability data yourself.
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

export class UpdateCustomAgentResponseBodyDataOssMounts extends $dara.Model {
  /**
   * @remarks
   * The name of the mounted OSS bucket.
   * 
   * @example
   * my-agent-data
   */
  bucketName?: string;
  /**
   * @remarks
   * The OSS mount directory in the container, located under /mnt/oss/.
   * 
   * @example
   * /mnt/oss/train
   */
  mountPath?: string;
  /**
   * @remarks
   * The object directory prefix in the mounted bucket.
   * 
   * @example
   * datasets/train
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the mount is read-only. A value of true indicates a read-only mount, and a value of false indicates a read-write mount.
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

export class UpdateCustomAgentResponseBodyDataProtocolPaths extends $dara.Model {
  /**
   * @remarks
   * The usage description of the current API path.
   * 
   * @example
   * AG-UI conversation API
   */
  description?: string;
  /**
   * @remarks
   * The API path corresponding to the current protocol.
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

export class UpdateCustomAgentResponseBodyDataProtocol extends $dara.Model {
  /**
   * @remarks
   * The request header configuration for the current protocol. The key is the header name and the value is a string.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The list of API paths for the current protocol.
   */
  paths?: UpdateCustomAgentResponseBodyDataProtocolPaths[];
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
      paths: { 'type': 'array', 'itemType': UpdateCustomAgentResponseBodyDataProtocolPaths },
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

export class UpdateCustomAgentResponseBodyDataRuntimeCompute extends $dara.Model {
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

export class UpdateCustomAgentResponseBodyDataRuntimeHpa extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable elastic scaling. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * This parameter is required.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent sessions configured for a single running instance.
   * 
   * @example
   * 100
   */
  maxConcurrentSessionsPerSandbox?: number;
  /**
   * @remarks
   * The maximum number of running instances configured.
   * 
   * @example
   * 10
   */
  maxSandboxCount?: number;
  /**
   * @remarks
   * The minimum number of running instances configured.
   * 
   * @example
   * 1
   */
  minSandboxCount?: number;
  /**
   * @remarks
   * The maximum idle time configured for a session, in seconds.
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

export class UpdateCustomAgentResponseBodyDataRuntimeSessionPolicy extends $dara.Model {
  /**
   * @remarks
   * The name of the HTTP request header used by the session policy. This applies to ISOLATED_HEADER_FIELD.
   * 
   * @example
   * X-Session-Id
   */
  headerName?: string;
  /**
   * @remarks
   * The type of the session policy. Valid values:
   * - AFFINITY: Session affinity.
   * - ISOLATED_HEADER_FIELD: Uses the request header specified by headerName to associate sessions.
   * ISOLATED_COOKIE is not recommended. The compatible value DISABLED in a request is returned as AFFINITY.
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

export class UpdateCustomAgentResponseBodyDataRuntime extends $dara.Model {
  /**
   * @remarks
   * The compute resource configuration for the agent runtime instance.
   * 
   * This parameter is required.
   */
  compute?: UpdateCustomAgentResponseBodyDataRuntimeCompute;
  /**
   * @remarks
   * The elastic policy configuration of the agent.
   */
  hpa?: UpdateCustomAgentResponseBodyDataRuntimeHpa;
  /**
   * @remarks
   * The session policy configuration of the agent.
   * 
   * This parameter is required.
   */
  sessionPolicy?: UpdateCustomAgentResponseBodyDataRuntimeSessionPolicy;
  static names(): { [key: string]: string } {
    return {
      compute: 'compute',
      hpa: 'hpa',
      sessionPolicy: 'sessionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: UpdateCustomAgentResponseBodyDataRuntimeCompute,
      hpa: UpdateCustomAgentResponseBodyDataRuntimeHpa,
      sessionPolicy: UpdateCustomAgentResponseBodyDataRuntimeSessionPolicy,
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

export class UpdateCustomAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the custom agent. You can obtain this ID from the response of the CreateCustomAgent or ListCustomAgents operation.
   * 
   * This parameter is required.
   * 
   * @example
   * agent-550e8400e29b41d4a716446655440000
   */
  agentId?: string;
  /**
   * @remarks
   * The latest submitted list of additional AgenticFS mounts.
   */
  agenticFsMounts?: UpdateCustomAgentResponseBodyDataAgenticFsMounts[];
  /**
   * @remarks
   * The latest submitted deployment artifact configuration, including the service listening port and the ACR container image. Check the latestVersionStatus field to determine whether the configuration has taken effect.
   */
  artifact?: UpdateCustomAgentResponseBodyDataArtifact;
  /**
   * @remarks
   * The creation method of the agent. A value of CUSTOM is returned for custom agents.
   * 
   * @example
   * CUSTOM
   */
  createMode?: string;
  /**
   * @remarks
   * The creation time of the agent. The time is in ISO 8601 format. The trailing Z indicates the UTC time zone. Fractional seconds may be included.
   * 
   * @example
   * 2026-10-10T06:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The deployment method of the agent. Custom agents are deployed and managed by the platform, and a value of MANAGED is returned.
   * 
   * @example
   * MANAGED
   */
  deployType?: string;
  /**
   * @remarks
   * The purpose description of the agent.
   * 
   * @example
   * Custom agent that provides conversation services
   */
  description?: string;
  /**
   * @remarks
   * The value is null if no effective version exists. Do not use latestSpecVersion as a substitute. You cannot use this field to release the occupation protection of old cache instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   * 
   * **if can be null:**
   * true
   */
  effectiveSpecVersion?: number;
  /**
   * @remarks
   * The environment variable configuration of the agent process.
   */
  environment?: UpdateCustomAgentResponseBodyDataEnvironment;
  /**
   * @remarks
   * The HTTP health check configuration of the agent. The value is empty if not configured.
   */
  healthCheck?: UpdateCustomAgentResponseBodyDataHealthCheck;
  /**
   * @remarks
   * This field is always returned. If useImageCache is set to true, the value is the non-empty logical ID of the current workspace. If useImageCache is set to false, the value is null. The occupation of old instances after the feature is disabled is independently protected by the backend and is not backfilled as the current configuration association.
   * 
   * This parameter is required.
   * 
   * @example
   * img-example
   * 
   * **if can be null:**
   * true
   */
  imageCacheId?: string;
  /**
   * @remarks
   * This field is always returned when caching is enabled in the final configuration for a create or update operation, including the reuse of existing registrations. This field is omitted when the final switch is disabled or during a get operation. Old summaries are not returned.
   */
  imageCachePreparation?: UpdateCustomAgentResponseBodyDataImageCachePreparation;
  /**
   * @remarks
   * The wait or execution error of the latest configuration version. This field is returned only when the version is waiting for a retry or fails to execute.
   */
  latestExecutionError?: UpdateCustomAgentResponseBodyDataLatestExecutionError;
  /**
   * @remarks
   * The latest configuration version number. Updates with the same configuration may retain the original version number. This field does not indicate that the configuration has taken effect.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  latestSpecVersion?: number;
  /**
   * @remarks
   * The execution status corresponding to latestSpecVersion. Valid values:
   * - pending: Pending execution.
   * - processing: Executing.
   * - waiting_retry: Waiting for retry.
   * - succeeded: Execution succeeded.
   * - failed: Execution failed.
   * - superseded: Superseded by a subsequent version.
   * 
   * @example
   * succeeded
   * 
   * **if can be null:**
   * true
   */
  latestVersionStatus?: string;
  /**
   * @remarks
   * The latest submitted log delivery configuration.
   */
  logging?: UpdateCustomAgentResponseBodyDataLogging;
  /**
   * @remarks
   * The name of the custom agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my-custom-agent
   */
  name?: string;
  /**
   * @remarks
   * The network access configuration of the agent. The actual access scope is also restricted by the network configuration of the workspace.
   */
  network?: UpdateCustomAgentResponseBodyDataNetwork;
  /**
   * @remarks
   * The observability configuration for high-code agents.
   */
  observability?: UpdateCustomAgentResponseBodyDataObservability;
  /**
   * @remarks
   * The latest submitted list of OSS directory mounts.
   */
  ossMounts?: UpdateCustomAgentResponseBodyDataOssMounts[];
  /**
   * @remarks
   * The list of invocation protocol configurations for the agent.
   */
  protocol?: UpdateCustomAgentResponseBodyDataProtocol[];
  /**
   * @remarks
   * The region ID of the workspace to which the agent belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ARN of the RAM role used by the agent to access user cloud resources.
   * 
   * @example
   * acs:ram::1234567890123456:role/agentcore-runtime-role
   */
  roleArn?: string;
  /**
   * @remarks
   * The latest committed runtime configuration, including compute specifications, session policy, and elastic policy.
   */
  runtime?: UpdateCustomAgentResponseBodyDataRuntime;
  /**
   * @remarks
   * The instance counts grouped by running instance phase. Keys include PENDING (creating or initializing), RUNNING (running), HIBERNATING (hibernating), HIBERNATED (hibernated), RESUMING (resuming), TERMINATING (terminating), and FAILED (failed). Only phases that actually occur are returned. Missing keys are treated as 0.
   */
  sandboxPhaseCounts?: { [key: string]: number };
  /**
   * @remarks
   * The overall status of the agent. Valid values:
   * - Creating: Creating.
   * - Running: Running.
   * - Failed: Failed.
   * - Updating: Updating.
   * - Deleting: Deleting.
   * - Deleted: Deleted.
   * To check the execution progress of the latest configuration, query latestVersionStatus.
   * 
   * This parameter is required.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the agent was last updated, in ISO 8601 format. The trailing Z indicates the UTC time zone, and fractional seconds may be included.
   * 
   * @example
   * 2026-10-10T06:05:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * Required. Reflects the final accepted configuration. If this field is missing in historical data, false is returned. Do not infer the value based on the cache status.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  useImageCache?: boolean;
  /**
   * @remarks
   * The ID of the workspace to which the custom agent belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-a1b2c3d4e5f6
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agenticFsMounts: 'agenticFsMounts',
      artifact: 'artifact',
      createMode: 'createMode',
      createdAt: 'createdAt',
      deployType: 'deployType',
      description: 'description',
      effectiveSpecVersion: 'effectiveSpecVersion',
      environment: 'environment',
      healthCheck: 'healthCheck',
      imageCacheId: 'imageCacheId',
      imageCachePreparation: 'imageCachePreparation',
      latestExecutionError: 'latestExecutionError',
      latestSpecVersion: 'latestSpecVersion',
      latestVersionStatus: 'latestVersionStatus',
      logging: 'logging',
      name: 'name',
      network: 'network',
      observability: 'observability',
      ossMounts: 'ossMounts',
      protocol: 'protocol',
      regionId: 'regionId',
      roleArn: 'roleArn',
      runtime: 'runtime',
      sandboxPhaseCounts: 'sandboxPhaseCounts',
      status: 'status',
      updatedAt: 'updatedAt',
      useImageCache: 'useImageCache',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agenticFsMounts: { 'type': 'array', 'itemType': UpdateCustomAgentResponseBodyDataAgenticFsMounts },
      artifact: UpdateCustomAgentResponseBodyDataArtifact,
      createMode: 'string',
      createdAt: 'string',
      deployType: 'string',
      description: 'string',
      effectiveSpecVersion: 'number',
      environment: UpdateCustomAgentResponseBodyDataEnvironment,
      healthCheck: UpdateCustomAgentResponseBodyDataHealthCheck,
      imageCacheId: 'string',
      imageCachePreparation: UpdateCustomAgentResponseBodyDataImageCachePreparation,
      latestExecutionError: UpdateCustomAgentResponseBodyDataLatestExecutionError,
      latestSpecVersion: 'number',
      latestVersionStatus: 'string',
      logging: UpdateCustomAgentResponseBodyDataLogging,
      name: 'string',
      network: UpdateCustomAgentResponseBodyDataNetwork,
      observability: UpdateCustomAgentResponseBodyDataObservability,
      ossMounts: { 'type': 'array', 'itemType': UpdateCustomAgentResponseBodyDataOssMounts },
      protocol: { 'type': 'array', 'itemType': UpdateCustomAgentResponseBodyDataProtocol },
      regionId: 'string',
      roleArn: 'string',
      runtime: UpdateCustomAgentResponseBodyDataRuntime,
      sandboxPhaseCounts: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      status: 'string',
      updatedAt: 'string',
      useImageCache: 'boolean',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agenticFsMounts)) {
      $dara.Model.validateArray(this.agenticFsMounts);
    }
    if(this.artifact && typeof (this.artifact as any).validate === 'function') {
      (this.artifact as any).validate();
    }
    if(this.environment && typeof (this.environment as any).validate === 'function') {
      (this.environment as any).validate();
    }
    if(this.healthCheck && typeof (this.healthCheck as any).validate === 'function') {
      (this.healthCheck as any).validate();
    }
    if(this.imageCachePreparation && typeof (this.imageCachePreparation as any).validate === 'function') {
      (this.imageCachePreparation as any).validate();
    }
    if(this.latestExecutionError && typeof (this.latestExecutionError as any).validate === 'function') {
      (this.latestExecutionError as any).validate();
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
    if(this.sandboxPhaseCounts) {
      $dara.Model.validateMap(this.sandboxPhaseCounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request result code. The value is SUCCESS when the request succeeds.
   * 
   * This parameter is required.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The latest submitted configuration and status of the custom agent. A successful response indicates that the request is accepted, but the configuration may not have taken effect.
   * 
   * This parameter is required.
   */
  data?: UpdateCustomAgentResponseBodyData;
  /**
   * @remarks
   * The HTTP status code of the request. The value is 200 if the request is successful.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The result message of the request. The value is success if the request is successful.
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, used to locate and troubleshoot issues.
   * 
   * This parameter is required.
   * 
   * @example
   * 550E8400-E29B-41D4-A716-446655440000
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was processed successfully. A value of true indicates that the request was processed successfully. A successful creation, update, or deletion does not mean that the background operation is complete.
   * 
   * This parameter is required.
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
      data: UpdateCustomAgentResponseBodyData,
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

