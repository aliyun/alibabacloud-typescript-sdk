// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
  /**
   * @remarks
   * The absolute mount path in the container, such as /data/train. Mount targets must not be duplicated or form parent-child overrides, and must avoid platform-reserved directories.
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
   * Specifies whether the mount is read-only. A value of true indicates a read-only mount, and a value of false indicates a read/write mount.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The AgenticFS access point domain name used for mounting.
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

export class GetCustomAgentResponseBodyDataArtifactCode extends $dara.Model {
  /**
   * @remarks
   * The startup command for the code package. This parameter is required in code package mode. The working directory is the root directory of the extracted code, which is /code. Example: python main.py. Quotes and escape characters are supported. Environment variables, pipes, and logical operations are not automatically expanded. For complex commands, use a script within the package.
   * 
   * This parameter is required.
   * 
   * @example
   * python main.py
   */
  entrypoint?: string;
  /**
   * @remarks
   * The code runtime environment identifier of the currently saved configuration. The runtime image uses a saved snapshot, and adding a new version to the directory does not automatically change the existing configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * python3.12
   */
  languageRuntime?: string;
  /**
   * @remarks
   * The fixed oss:// address of the platform code package referenced by the currently saved configuration, excluding the signature parameters of the source HTTPS link. This can be used to reuse existing code packages. To download the content, call GetAgentCodePackageDownloadUrl.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://agentcore-platform-example/code-packages/workspaces/ws-a1b2c3d4e5f6/550e8400-e29b-41d4-a716-446655440000/package.zip
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

export class GetCustomAgentResponseBodyDataArtifactContainer extends $dara.Model {
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
   * @example
   * cri-a1b2c3d4e5f6
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace to which the ACR image repository belongs.
   * 
   * @example
   * my-agent
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the image repository in the ACR namespace.
   * 
   * @example
   * chat-agent
   */
  repo?: string;
  /**
   * @remarks
   * The latest submitted image tag.
   * 
   * @example
   * v1.0.0
   */
  tag?: string;
  /**
   * @remarks
   * The source type of the image. A value of acr indicates an ACR image, and custom indicates a custom image source. For the corresponding source configurations, refer to the descriptions of artifact.container and customImage.
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

export class GetCustomAgentResponseBodyDataArtifact extends $dara.Model {
  /**
   * @remarks
   * The code package deployment configuration, which is mutually exclusive with container. The code package uses the ZIP or TAR.GZ format. Dependencies are packaged by the user, and the platform does not install dependencies or build online.
   */
  code?: GetCustomAgentResponseBodyDataArtifactCode;
  /**
   * @remarks
   * The latest submitted ACR container image configuration.
   */
  container?: GetCustomAgentResponseBodyDataArtifactContainer;
  /**
   * @remarks
   * The TCP port listened to by the agent service.
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
      code: GetCustomAgentResponseBodyDataArtifactCode,
      container: GetCustomAgentResponseBodyDataArtifactContainer,
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

export class GetCustomAgentResponseBodyDataCodePackageInfo extends $dara.Model {
  /**
   * @remarks
   * The CRC64 value of the code package object.
   * 
   * @example
   * 456
   */
  crc64?: string;
  /**
   * @remarks
   * The ETag of the code package object.
   * 
   * @example
   * fixed-etag
   */
  etag?: string;
  /**
   * @remarks
   * The original file name of the code package.
   * 
   * @example
   * main.zip
   */
  fileName?: string;
  /**
   * @remarks
   * The compressed size of the code package.
   * 
   * @example
   * 123
   */
  fileSize?: number;
  /**
   * @remarks
   * The format of the code package.
   * 
   * @example
   * zip
   */
  format?: string;
  static names(): { [key: string]: string } {
    return {
      crc64: 'crc64',
      etag: 'etag',
      fileName: 'fileName',
      fileSize: 'fileSize',
      format: 'format',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crc64: 'string',
      etag: 'string',
      fileName: 'string',
      fileSize: 'number',
      format: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomAgentResponseBodyDataCurrentImagePullNetwork extends $dara.Model {
  /**
   * @remarks
   * This parameter is required when type is set to vpc and must belong to the selected VPC.
   * 
   * @example
   * sg-example
   */
  securityGroupId?: string;
  /**
   * @remarks
   * This parameter is required when you submit pullNetwork and is validated by the backend. The default value for new creations is the public network, which is independent of the agent runtime network.
   * 
   * @example
   * public
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required when type is set to vpc and must belong to the selected VPC.
   * 
   * @example
   * vsw-example
   */
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is required when type is set to vpc. The associated account and region are validated by the backend.
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

export class GetCustomAgentResponseBodyDataCurrentImage extends $dara.Model {
  /**
   * @remarks
   * The original image address for the custom source.
   * 
   * @example
   * registry.example.com/team/agent:v1
   */
  image?: string;
  /**
   * @remarks
   * The instance ID for the ACR source.
   * 
   * @example
   * cri-example
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace for the ACR source.
   * 
   * @example
   * team
   */
  namespace?: string;
  /**
   * @remarks
   * The dedicated pull network for the custom source.
   */
  pullNetwork?: GetCustomAgentResponseBodyDataCurrentImagePullNetwork;
  /**
   * @remarks
   * The repository name for the ACR source.
   * 
   * @example
   * agent
   */
  repo?: string;
  /**
   * @remarks
   * The certificate exception option for the custom source.
   * 
   * @example
   * false
   */
  skipTlsVerify?: boolean;
  /**
   * @remarks
   * The image source type of the current active version.
   * 
   * @example
   * custom
   */
  sourceType?: string;
  /**
   * @remarks
   * The tag for the ACR source.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The source username of the active image.
   * 
   * @example
   * reader
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
      instanceId: 'instanceId',
      namespace: 'namespace',
      pullNetwork: 'pullNetwork',
      repo: 'repo',
      skipTlsVerify: 'skipTlsVerify',
      sourceType: 'sourceType',
      tag: 'tag',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      instanceId: 'string',
      namespace: 'string',
      pullNetwork: GetCustomAgentResponseBodyDataCurrentImagePullNetwork,
      repo: 'string',
      skipTlsVerify: 'boolean',
      sourceType: 'string',
      tag: 'string',
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

export class GetCustomAgentResponseBodyDataCustomImagePullNetwork extends $dara.Model {
  /**
   * @remarks
   * This parameter is required when type is set to vpc and must belong to the selected VPC.
   * 
   * @example
   * sg-example
   */
  securityGroupId?: string;
  /**
   * @remarks
   * This parameter is required when you submit pullNetwork and is validated by the backend. The default value for new creations is the public network, which is independent of the agent runtime network.
   * 
   * @example
   * public
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required when type is set to vpc and must belong to the selected VPC.
   * 
   * @example
   * vsw-example
   */
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is required when type is set to vpc. The associated account and region are validated by the backend.
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

export class GetCustomAgentResponseBodyDataCustomImage extends $dara.Model {
  /**
   * @remarks
   * The recently saved source address, which may still be in preparation.
   * 
   * @example
   * registry.example.com/team/agent:v1
   */
  image?: string;
  /**
   * @remarks
   * The saved dedicated pull network.
   */
  pullNetwork?: GetCustomAgentResponseBodyDataCustomImagePullNetwork;
  /**
   * @remarks
   * The saved HTTPS certificate exception option.
   * 
   * @example
   * false
   */
  skipTlsVerify?: boolean;
  /**
   * @remarks
   * The verified username for the source.
   * 
   * @example
   * reader
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'image',
      pullNetwork: 'pullNetwork',
      skipTlsVerify: 'skipTlsVerify',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      pullNetwork: GetCustomAgentResponseBodyDataCustomImagePullNetwork,
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

export class GetCustomAgentResponseBodyDataEnvironmentVariables extends $dara.Model {
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

export class GetCustomAgentResponseBodyDataEnvironment extends $dara.Model {
  /**
   * @remarks
   * The latest submitted list of environment variables.
   */
  variables?: GetCustomAgentResponseBodyDataEnvironmentVariables[];
  static names(): { [key: string]: string } {
    return {
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      variables: { 'type': 'array', 'itemType': GetCustomAgentResponseBodyDataEnvironmentVariables },
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

export class GetCustomAgentResponseBodyDataHealthCheck extends $dara.Model {
  /**
   * @remarks
   * This parameter does not take effect.
   * 
   * @example
   * 1
   * 
   * @deprecated
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
   * The number of consecutive health check failures required to mark the instance as unhealthy.
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

export class GetCustomAgentResponseBodyDataImagePreparation extends $dara.Model {
  /**
   * @remarks
   * The image preparation phase. Configuration acceptance does not indicate successful deployment.
   * 
   * @example
   * QUEUED
   */
  phase?: string;
  /**
   * @remarks
   * The task ID submitted from the console for the current submission. This is not the RM operationId.
   * 
   * @example
   * agent-example:1
   */
  preparationId?: string;
  static names(): { [key: string]: string } {
    return {
      phase: 'phase',
      preparationId: 'preparationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      preparationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomAgentResponseBodyDataLatestExecutionError extends $dara.Model {
  /**
   * @remarks
   * The reason code for the waiting or execution failure of the latest configuration, which is used to determine the subsequent processing method.
   * 
   * This parameter is required.
   * 
   * @example
   * AgentExecutionFailed
   */
  code?: string;
  /**
   * @remarks
   * The description of the reason why the latest configuration is waiting or has failed to execute. Check the code and retryable fields to determine what to do next.
   * 
   * This parameter is required.
   * 
   * @example
   * Agent execution failed. Check the configuration and resubmit
   */
  message?: string;
  /**
   * @remarks
   * Specifies whether automatic retry is performed. If the value is true, you can query again later. If the value is false, check and fix the configuration based on the reason, and then resubmit.
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

export class GetCustomAgentResponseBodyDataLoggingSls extends $dara.Model {
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

export class GetCustomAgentResponseBodyDataLogging extends $dara.Model {
  /**
   * @remarks
   * The SLS log delivery destination.
   */
  sls?: GetCustomAgentResponseBodyDataLoggingSls;
  static names(): { [key: string]: string } {
    return {
      sls: 'sls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sls: GetCustomAgentResponseBodyDataLoggingSls,
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

export class GetCustomAgentResponseBodyDataNetworkAccessInternet extends $dara.Model {
  /**
   * @remarks
   * Specifies whether Internet access is allowed on the agent side. The actual access remains restricted by the workspace configuration.
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

export class GetCustomAgentResponseBodyDataNetworkAccessVpc extends $dara.Model {
  /**
   * @remarks
   * Specifies whether access to the user VPC configured for the workspace is allowed on the agent side. The actual access remains restricted by the workspace configuration.
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

export class GetCustomAgentResponseBodyDataNetwork extends $dara.Model {
  /**
   * @remarks
   * The Internet access configuration for the agent. If this parameter is not configured, Internet access is allowed on the agent side but remains restricted by the workspace configuration.
   */
  accessInternet?: GetCustomAgentResponseBodyDataNetworkAccessInternet;
  /**
   * @remarks
   * The user VPC access configuration for the agent. If this parameter is not configured, user VPC access is allowed on the agent side but remains restricted by the workspace configuration.
   */
  accessVpc?: GetCustomAgentResponseBodyDataNetworkAccessVpc;
  static names(): { [key: string]: string } {
    return {
      accessInternet: 'accessInternet',
      accessVpc: 'accessVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInternet: GetCustomAgentResponseBodyDataNetworkAccessInternet,
      accessVpc: GetCustomAgentResponseBodyDataNetworkAccessVpc,
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

export class GetCustomAgentResponseBodyDataObservability extends $dara.Model {
  /**
   * @remarks
   * Specifies whether agent observability is enabled.
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

export class GetCustomAgentResponseBodyDataOssMounts extends $dara.Model {
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
   * The absolute mount path in the container, such as /data/train. Mount targets must not be duplicated or form parent-child overrides, and must avoid platform-reserved directories.
   * 
   * @example
   * /mnt/oss/train
   */
  mountPath?: string;
  /**
   * @remarks
   * The non-empty relative directory prefix in the currently configured bucket.
   * 
   * @example
   * datasets/train
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the mount is read-only. A value of true indicates a read-only mount, and a value of false indicates a read/write mount.
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

export class GetCustomAgentResponseBodyDataProtocolPaths extends $dara.Model {
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
   * The API path for the current protocol.
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

export class GetCustomAgentResponseBodyDataProtocol extends $dara.Model {
  /**
   * @remarks
   * The request header configurations for the current protocol, where the key is the name and the value is a string.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The list of API paths for the current protocol.
   */
  paths?: GetCustomAgentResponseBodyDataProtocolPaths[];
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
      paths: { 'type': 'array', 'itemType': GetCustomAgentResponseBodyDataProtocolPaths },
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

export class GetCustomAgentResponseBodyDataRuntimeCompute extends $dara.Model {
  /**
   * @remarks
   * The compute specification. A value of INTERACTIVE indicates 1 vCPU and 2 GiB of memory, STANDARD indicates 2 vCPUs and 4 GiB of memory, and HEAVY indicates 4 vCPUs and 8 GiB of memory.
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

export class GetCustomAgentResponseBodyDataRuntimeHpa extends $dara.Model {
  /**
   * @remarks
   * Specifies whether elastic scaling is enabled in the current configuration.
   * 
   * This parameter is required.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum number of concurrent sessions per instance in the current configuration.
   * 
   * @example
   * 20
   */
  maxConcurrentSessionsPerSandbox?: number;
  /**
   * @remarks
   * The maximum number of instances in the current configuration.
   * 
   * @example
   * 10
   */
  maxSandboxCount?: number;
  /**
   * @remarks
   * The minimum number of instances in the current configuration.
   * 
   * @example
   * 1
   */
  minSandboxCount?: number;
  /**
   * @remarks
   * The maximum idle time for a session in the current configuration, in seconds.
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

export class GetCustomAgentResponseBodyDataRuntimeSessionPolicy extends $dara.Model {
  /**
   * @remarks
   * The name of the HTTP request header used by the session policy. This parameter applies to ISOLATED_HEADER_FIELD.
   * 
   * @example
   * X-Session-Id
   */
  headerName?: string;
  /**
   * @remarks
   * The session policy type. A value of AFFINITY indicates session affinity, and ISOLATED_HEADER_FIELD uses the request header specified by headerName to associate sessions. ISOLATED_COOKIE is not recommended. The compatible value DISABLED in requests is returned as AFFINITY.
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

export class GetCustomAgentResponseBodyDataRuntime extends $dara.Model {
  /**
   * @remarks
   * The compute resource configuration for the agent runtime instance.
   * 
   * This parameter is required.
   */
  compute?: GetCustomAgentResponseBodyDataRuntimeCompute;
  /**
   * @remarks
   * The elastic policy configuration for the agent.
   */
  hpa?: GetCustomAgentResponseBodyDataRuntimeHpa;
  /**
   * @remarks
   * The session policy configuration for the agent.
   * 
   * This parameter is required.
   */
  sessionPolicy?: GetCustomAgentResponseBodyDataRuntimeSessionPolicy;
  static names(): { [key: string]: string } {
    return {
      compute: 'compute',
      hpa: 'hpa',
      sessionPolicy: 'sessionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: GetCustomAgentResponseBodyDataRuntimeCompute,
      hpa: GetCustomAgentResponseBodyDataRuntimeHpa,
      sessionPolicy: GetCustomAgentResponseBodyDataRuntimeSessionPolicy,
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

export class GetCustomAgentResponseBodyData extends $dara.Model {
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
   * The unique identifier of the custom code or image agent. You can obtain it from the response of CreateCustomAgent or ListCustomAgents.
   * 
   * This parameter is required.
   * 
   * @example
   * agent-550e8400e29b41d4a716446655440000
   */
  agentId?: string;
  /**
   * @remarks
   * The NAS storage mount configuration. Currently, only the AgenticFS type is supported, which is used to mount file directories in access points to agent runtime instances. This represents the latest submitted NAS mounts.
   */
  agenticFsMounts?: GetCustomAgentResponseBodyDataAgenticFsMounts[];
  /**
   * @remarks
   * The latest submitted deployment artifact configuration, including the service listening port and ACR container image. To determine whether the configuration has taken effect, check the latestVersionStatus field.
   */
  artifact?: GetCustomAgentResponseBodyDataArtifact;
  /**
   * @remarks
   * The current saved code package information.
   */
  codePackageInfo?: GetCustomAgentResponseBodyDataCodePackageInfo;
  /**
   * @remarks
   * The creation method of the agent. For custom code or image agents, the value is CUSTOM.
   * 
   * @example
   * CUSTOM
   */
  createMode?: string;
  /**
   * @remarks
   * The time when the agent was created. The time is in ISO 8601 format, with a trailing Z indicating the UTC time zone, and can include fractional seconds.
   * 
   * @example
   * 2026-10-10T06:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The image source snapshot of the current active configuration version. This value is null before the initial configuration takes effect and does not indicate the health status.
   */
  currentImage?: GetCustomAgentResponseBodyDataCurrentImage;
  /**
   * @remarks
   * The recently saved source and the verified username for the source. The source may be in preparation or failed. The password is not returned.
   */
  customImage?: GetCustomAgentResponseBodyDataCustomImage;
  /**
   * @remarks
   * The deployment method of the agent. Custom code or image agents are deployed and managed by the platform, and the value is MANAGED.
   * 
   * @example
   * MANAGED
   */
  deployType?: string;
  /**
   * @remarks
   * The description of the agent\\"s purpose.
   * 
   * @example
   * Custom agent for providing conversation services
   */
  description?: string;
  /**
   * @remarks
   * The effective configuration version.
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
   * The environment variable configuration for the agent process.
   */
  environment?: GetCustomAgentResponseBodyDataEnvironment;
  /**
   * @remarks
   * The HTTP health check configuration for the agent. This parameter is empty if not configured.
   */
  healthCheck?: GetCustomAgentResponseBodyDataHealthCheck;
  /**
   * @remarks
   * The ID of the currently associated image cache.
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
   * The currently associated image preparation task. The phase field indicates the acceptance status. Query the preparation API for real-time progress. A normal save operation does not create an image preparation task.
   */
  imagePreparation?: GetCustomAgentResponseBodyDataImagePreparation;
  /**
   * @remarks
   * The waiting or execution error of the latest configuration version. This field is returned only when the version is waiting for retry or fails to execute.
   */
  latestExecutionError?: GetCustomAgentResponseBodyDataLatestExecutionError;
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
   * The execution status corresponding to the latestSpecVersion. Valid values:
   * - pending: Waiting for execution.
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
  logging?: GetCustomAgentResponseBodyDataLogging;
  /**
   * @remarks
   * The name of the custom code or image agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my-custom-agent
   */
  name?: string;
  /**
   * @remarks
   * The network access configuration for the agent. The actual access scope is also restricted by the network configuration of the workspace.
   */
  network?: GetCustomAgentResponseBodyDataNetwork;
  /**
   * @remarks
   * The observability configuration for the high-code agent.
   */
  observability?: GetCustomAgentResponseBodyDataObservability;
  /**
   * @remarks
   * The list of recently submitted OSS directory mounts.
   */
  ossMounts?: GetCustomAgentResponseBodyDataOssMounts[];
  /**
   * @remarks
   * The list of invocation protocol configurations for the agent.
   */
  protocol?: GetCustomAgentResponseBodyDataProtocol[];
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
   * The runtime configuration of the latest commit, including compute specifications, session policy, and elastic policy.
   */
  runtime?: GetCustomAgentResponseBodyDataRuntime;
  /**
   * @remarks
   * The count of instances by runtime instance phase. Keys include PENDING (creating or initializing), RUNNING (running), HIBERNATING (hibernating), HIBERNATED (hibernated), RESUMING (resuming), TERMINATING (terminating), and FAILED (failed). Only phases that actually occur are returned. Missing keys are treated as 0.
   */
  sandboxPhaseCounts?: { [key: string]: number };
  /**
   * @remarks
   * The overall status of the agent. Valid values:
   * - Creating: The agent is being created.
   * - Running: The agent is running.
   * - Failed: The agent failed.
   * - Updating: The agent is being updated.
   * - Deleting: The agent is being deleted.
   * - Deleted: The agent is deleted.
   * To check the execution progress of the latest configuration, query the latestVersionStatus field.
   * 
   * This parameter is required.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the agent was last updated. The time is in ISO 8601 format, with a trailing Z indicating the UTC time zone, and can include fractional seconds.
   * 
   * @example
   * 2026-10-10T06:05:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * Specifies whether the image cache is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  useImageCache?: boolean;
  /**
   * @remarks
   * The ID of the workspace to which the custom code or image agent belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-a1b2c3d4e5f6
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'accessMode',
      accessScope: 'accessScope',
      agentId: 'agentId',
      agenticFsMounts: 'agenticFsMounts',
      artifact: 'artifact',
      codePackageInfo: 'codePackageInfo',
      createMode: 'createMode',
      createdAt: 'createdAt',
      currentImage: 'currentImage',
      customImage: 'customImage',
      deployType: 'deployType',
      description: 'description',
      effectiveSpecVersion: 'effectiveSpecVersion',
      environment: 'environment',
      healthCheck: 'healthCheck',
      imageCacheId: 'imageCacheId',
      imagePreparation: 'imagePreparation',
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
      accessMode: 'string',
      accessScope: 'string',
      agentId: 'string',
      agenticFsMounts: { 'type': 'array', 'itemType': GetCustomAgentResponseBodyDataAgenticFsMounts },
      artifact: GetCustomAgentResponseBodyDataArtifact,
      codePackageInfo: GetCustomAgentResponseBodyDataCodePackageInfo,
      createMode: 'string',
      createdAt: 'string',
      currentImage: GetCustomAgentResponseBodyDataCurrentImage,
      customImage: GetCustomAgentResponseBodyDataCustomImage,
      deployType: 'string',
      description: 'string',
      effectiveSpecVersion: 'number',
      environment: GetCustomAgentResponseBodyDataEnvironment,
      healthCheck: GetCustomAgentResponseBodyDataHealthCheck,
      imageCacheId: 'string',
      imagePreparation: GetCustomAgentResponseBodyDataImagePreparation,
      latestExecutionError: GetCustomAgentResponseBodyDataLatestExecutionError,
      latestSpecVersion: 'number',
      latestVersionStatus: 'string',
      logging: GetCustomAgentResponseBodyDataLogging,
      name: 'string',
      network: GetCustomAgentResponseBodyDataNetwork,
      observability: GetCustomAgentResponseBodyDataObservability,
      ossMounts: { 'type': 'array', 'itemType': GetCustomAgentResponseBodyDataOssMounts },
      protocol: { 'type': 'array', 'itemType': GetCustomAgentResponseBodyDataProtocol },
      regionId: 'string',
      roleArn: 'string',
      runtime: GetCustomAgentResponseBodyDataRuntime,
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
    if(this.codePackageInfo && typeof (this.codePackageInfo as any).validate === 'function') {
      (this.codePackageInfo as any).validate();
    }
    if(this.currentImage && typeof (this.currentImage as any).validate === 'function') {
      (this.currentImage as any).validate();
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
    if(this.imagePreparation && typeof (this.imagePreparation as any).validate === 'function') {
      (this.imagePreparation as any).validate();
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

export class GetCustomAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code of the request. The value is SUCCESS if the request is successful.
   * 
   * This parameter is required.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The latest submitted configuration and status of the custom code or image agent. To determine whether the configuration has taken effect, check the latestVersionStatus field.
   * 
   * This parameter is required.
   */
  data?: GetCustomAgentResponseBodyData;
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
   * The processing result description of the request. The value is success if the request is successful.
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
   * Indicates whether the request was processed successfully. A value of true indicates that the request was processed successfully. A successful creation, update, or deletion does not mean that the backend operation is complete.
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
      data: GetCustomAgentResponseBodyData,
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

