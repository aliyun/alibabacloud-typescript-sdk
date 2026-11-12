// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
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
   * The relative directory within the mounted access point.
   * 
   * @example
   * workspace/data
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the mount is read-only. A value of true indicates read-only, and a value of false indicates read and write.
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

export class UpdateCustomAgentResponseBodyDataArtifactCode extends $dara.Model {
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
   * The identifier of the code runtime environment for the currently saved configuration. The runtime image uses a saved snapshot. Adding a new version to the directory does not automatically change the existing configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * python3.12
   */
  languageRuntime?: string;
  /**
   * @remarks
   * The oss:// address of the platform-fixed code package referenced by the currently saved configuration, excluding the signature parameters of the source HTTPS link. You can use this to reuse an existing code package. To download the content, call GetAgentCodePackageDownloadUrl.
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
   * The type of the image source. Valid values:
   * - acr: ACR image.
   * - custom: Custom image source.
   * For the corresponding source configurations, refer to the descriptions of artifact.container and customImage.
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
   * The code package deployment configuration. This is mutually exclusive with container. The code package uses the ZIP or TAR.GZ format. Dependencies are packaged by the user. The platform does not install dependencies or perform online builds.
   */
  code?: UpdateCustomAgentResponseBodyDataArtifactCode;
  /**
   * @remarks
   * The latest submitted ACR container image configuration.
   */
  container?: UpdateCustomAgentResponseBodyDataArtifactContainer;
  /**
   * @remarks
   * The TCP port listened on by the agent service.
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

export class UpdateCustomAgentResponseBodyDataCodePackageInfo extends $dara.Model {
  /**
   * @remarks
   * The CRC64 checksum of the code package object.
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

export class UpdateCustomAgentResponseBodyDataCurrentImagePullNetwork extends $dara.Model {
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

export class UpdateCustomAgentResponseBodyDataCurrentImage extends $dara.Model {
  /**
   * @remarks
   * The original image address of the custom source.
   * 
   * @example
   * registry.example.com/team/agent:v1
   */
  image?: string;
  /**
   * @remarks
   * The instance ID of the ACR source.
   * 
   * @example
   * cri-example
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace of the ACR source.
   * 
   * @example
   * team
   */
  namespace?: string;
  /**
   * @remarks
   * The dedicated pull network of the custom source.
   */
  pullNetwork?: UpdateCustomAgentResponseBodyDataCurrentImagePullNetwork;
  /**
   * @remarks
   * The repository name of the ACR source.
   * 
   * @example
   * agent
   */
  repo?: string;
  /**
   * @remarks
   * The certificate exception option of the custom source.
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
   * The tag of the ACR source.
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
      pullNetwork: UpdateCustomAgentResponseBodyDataCurrentImagePullNetwork,
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

export class UpdateCustomAgentResponseBodyDataCustomImagePullNetwork extends $dara.Model {
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

export class UpdateCustomAgentResponseBodyDataCustomImage extends $dara.Model {
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
  pullNetwork?: UpdateCustomAgentResponseBodyDataCustomImagePullNetwork;
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
      pullNetwork: UpdateCustomAgentResponseBodyDataCustomImagePullNetwork,
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
   * 
   * @deprecated
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The interval between health checks, in seconds.
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
   * The port used for HTTP health checks.
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
   * The number of consecutive health check failures required to mark the agent as unhealthy.
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
   * The ID of the associated cache.
   * 
   * This parameter is required.
   * 
   * @example
   * img-example
   */
  imageId?: string;
  /**
   * @remarks
   * The cache status at the time of acceptance.
   * 
   * This parameter is required.
   * 
   * @example
   * PENDING
   */
  statusAtAcceptance?: string;
  /**
   * @remarks
   * The acceptance status of the cache preparation.
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

export class UpdateCustomAgentResponseBodyDataImagePreparation extends $dara.Model {
  /**
   * @remarks
   * The phase of the current image preparation. Configuration acceptance does not indicate successful deployment.
   * 
   * @example
   * QUEUED
   */
  phase?: string;
  /**
   * @remarks
   * The task ID submitted from the console. This is not the RM operation ID.
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

export class UpdateCustomAgentResponseBodyDataLatestExecutionError extends $dara.Model {
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
   * The description of the reason why the latest configuration is waiting or failed to execute. Refer to code and retryable to determine What to do next.
   * 
   * This parameter is required.
   * 
   * @example
   * The agent execution failed. Check the configuration and resubmit
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether automatic retry is performed. A value of true indicates that you can query again later. A value of false indicates that you need to check and fix the configuration based on the reason and then resubmit.
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
   * Specifies whether Internet access is allowed on the agent side. The actual access is still restricted by the workspace.
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
   * Specifies whether access to the user VPC configured for the workspace is allowed on the agent side. The actual access is still restricted by the workspace.
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
   * The Internet access configuration for the agent. If this item is not configured, access is allowed on the agent side but is still restricted by the workspace.
   */
  accessInternet?: UpdateCustomAgentResponseBodyDataNetworkAccessInternet;
  /**
   * @remarks
   * The user VPC access configuration for the agent. If this item is not configured, access is allowed on the agent side but is still restricted by the workspace.
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
   * The absolute mount path in the container, such as `/data/train`. Mount targets must not be duplicated or form parent-child directory overwrites, and must avoid platform reserved directories.
   * 
   * @example
   * /mnt/oss/train
   */
  mountPath?: string;
  /**
   * @remarks
   * The non-empty relative directory prefix within the configured bucket.
   * 
   * @example
   * datasets/train
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the mount is read-only. A value of true indicates read-only, and a value of false indicates read and write.
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

export class UpdateCustomAgentResponseBodyDataProtocol extends $dara.Model {
  /**
   * @remarks
   * The request header configuration for the current protocol. The key is the header name and the value is a string.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The list of API paths corresponding to the current protocol.
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
   * The upper limit of the number of instances in the current configuration.
   * 
   * @example
   * 10
   */
  maxSandboxCount?: number;
  /**
   * @remarks
   * The lower limit of the number of instances in the current configuration.
   * 
   * @example
   * 1
   */
  minSandboxCount?: number;
  /**
   * @remarks
   * The session idle timeout in the current configuration, in seconds.
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
   * The session policy type. Valid values:
   * - AFFINITY: Session affinity.
   * - ISOLATED_HEADER_FIELD: Uses the request header specified by headerName to associate sessions.
   * - ISOLATED_COOKIE: Not recommended.
   * The compatible value DISABLED in requests is returned as AFFINITY.
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
   * The compute resource configuration for the agent running instances.
   * 
   * This parameter is required.
   */
  compute?: UpdateCustomAgentResponseBodyDataRuntimeCompute;
  /**
   * @remarks
   * The currently saved elastic policy configuration, including the switch, the upper and lower limits of the number of instances, the maximum number of concurrent sessions per instance, and the session idle timeout. The upper and lower limits of the number of instances are configurations. For the actual number of instances, refer to the snapshot queried by sandboxPhaseCounts.
   */
  hpa?: UpdateCustomAgentResponseBodyDataRuntimeHpa;
  /**
   * @remarks
   * The session policy configuration for the agent.
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
   * The NAS storage mount configuration. Currently, the AgenticFS type is supported, which is used to mount file directories in access points to agent runtime instances. This represents the latest submitted NAS mounts.
   */
  agenticFsMounts?: UpdateCustomAgentResponseBodyDataAgenticFsMounts[];
  /**
   * @remarks
   * The latest submitted deployment artifact configuration, including the service listening port and ACR container image. To determine whether it has taken effect, check the latestVersionStatus.
   */
  artifact?: UpdateCustomAgentResponseBodyDataArtifact;
  /**
   * @remarks
   * The currently saved code package information.
   */
  codePackageInfo?: UpdateCustomAgentResponseBodyDataCodePackageInfo;
  /**
   * @remarks
   * The creation method of the agent. The value is CUSTOM for custom code or image agents.
   * 
   * @example
   * CUSTOM
   */
  createMode?: string;
  /**
   * @remarks
   * The creation time of the agent. The time is in ISO 8601 format. The trailing Z indicates the UTC time zone, and fractional seconds may be included.
   * 
   * @example
   * 2026-10-10T06:00:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The image source snapshot of the current active configuration version. This field is null before the initial configuration takes effect and does not indicate the health status.
   */
  currentImage?: UpdateCustomAgentResponseBodyDataCurrentImage;
  /**
   * @remarks
   * The recently saved source and the verified username for the source. The source may be in preparation or failed, and the password is not returned.
   */
  customImage?: UpdateCustomAgentResponseBodyDataCustomImage;
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
   * The purpose description of the agent.
   * 
   * @example
   * Custom agent that provides conversation services
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
  environment?: UpdateCustomAgentResponseBodyDataEnvironment;
  /**
   * @remarks
   * The HTTP health check configuration of the agent. This field is empty if not configured.
   */
  healthCheck?: UpdateCustomAgentResponseBodyDataHealthCheck;
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
   * The cache preparation acceptance summary.
   */
  imageCachePreparation?: UpdateCustomAgentResponseBodyDataImageCachePreparation;
  /**
   * @remarks
   * The current associated image preparation task. The phase indicates the acceptance status. Query the preparation API for real-time progress. A standard save operation does not create an image preparation task.
   */
  imagePreparation?: UpdateCustomAgentResponseBodyDataImagePreparation;
  /**
   * @remarks
   * The waiting or execution error of the latest configuration version. This field is returned only when the version is waiting for retry or fails to execute.
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
   * The execution status corresponding to latestSpecVersion. Valid values: pending (waiting for execution), processing (executing), waiting_retry (waiting for retry), succeeded (execution succeeded), failed (execution failed), and superseded (superseded by a subsequent version).
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
   * The network access configuration for the agent. The actual access scope is also restricted by the workspace network configuration.
   */
  network?: UpdateCustomAgentResponseBodyDataNetwork;
  /**
   * @remarks
   * The high-code agent observability configuration.
   */
  observability?: UpdateCustomAgentResponseBodyDataObservability;
  /**
   * @remarks
   * The list of recently submitted OSS directory mounts.
   */
  ossMounts?: UpdateCustomAgentResponseBodyDataOssMounts[];
  /**
   * @remarks
   * The invocation protocol configurations of the agent.
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
   * The runtime configuration of the latest commit, including compute specifications, session policy, and elastic policy.
   */
  runtime?: UpdateCustomAgentResponseBodyDataRuntime;
  /**
   * @remarks
   * The count of instances by runtime phase. Keys include PENDING (being created or initialized), RUNNING (running), HIBERNATING (hibernating), HIBERNATED (hibernated), RESUMING (resuming), TERMINATING (terminating), and FAILED (failed). Only phases that actually occur are returned, and missing keys are treated as 0.
   */
  sandboxPhaseCounts?: { [key: string]: number };
  /**
   * @remarks
   * The overall status of the agent. Valid values: Creating (the agent is being created), Running (the agent is running), Failed (the agent failed), Updating (the agent is being updated), Deleting (the agent is being deleted), and Deleted (the agent is deleted). To check the execution progress of the latest configuration, query latestVersionStatus.
   * 
   * This parameter is required.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The latest update time of the agent. The time is in ISO 8601 format. The trailing Z indicates the UTC time zone, and fractional seconds may be included.
   * 
   * @example
   * 2026-10-10T06:05:00Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The image cache switch.
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
      imageCachePreparation: 'imageCachePreparation',
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
      agenticFsMounts: { 'type': 'array', 'itemType': UpdateCustomAgentResponseBodyDataAgenticFsMounts },
      artifact: UpdateCustomAgentResponseBodyDataArtifact,
      codePackageInfo: UpdateCustomAgentResponseBodyDataCodePackageInfo,
      createMode: 'string',
      createdAt: 'string',
      currentImage: UpdateCustomAgentResponseBodyDataCurrentImage,
      customImage: UpdateCustomAgentResponseBodyDataCustomImage,
      deployType: 'string',
      description: 'string',
      effectiveSpecVersion: 'number',
      environment: UpdateCustomAgentResponseBodyDataEnvironment,
      healthCheck: UpdateCustomAgentResponseBodyDataHealthCheck,
      imageCacheId: 'string',
      imageCachePreparation: UpdateCustomAgentResponseBodyDataImageCachePreparation,
      imagePreparation: UpdateCustomAgentResponseBodyDataImagePreparation,
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
    if(this.imageCachePreparation && typeof (this.imageCachePreparation as any).validate === 'function') {
      (this.imageCachePreparation as any).validate();
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

export class UpdateCustomAgentResponseBody extends $dara.Model {
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
   * The latest submitted configuration and status of the custom code or image agent. A successful response indicates that the request is accepted, but the configuration may not have taken effect.
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
   * The description of the request processing result. The value is success if the request is successful.
   * 
   * This parameter is required.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which is used to locate and troubleshoot issues.
   * 
   * This parameter is required.
   * 
   * @example
   * 550E8400-E29B-41D4-A716-446655440000
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is processed successfully. A value of true indicates that the request is processed successfully. However, a successful creation, update, or deletion does not mean that the backend operation is complete.
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

