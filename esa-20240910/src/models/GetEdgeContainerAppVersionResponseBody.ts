// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppVersionResponseBodyVersionContainersACRImageInfo extends $dara.Model {
  /**
   * @remarks
   * The domain name of the Container Registry image.
   * 
   * @example
   * *.mooc.seewo.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * @example
   * xcdn-9ak2thl14z5s
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the image is an enterprise-level image.
   * 
   * @example
   * false
   */
  isEnterpriseRegistry?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-zeu0xyk28alyxozh
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test_1
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs.
   * 
   * @example
   * wpy1
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test-healthy-100-soa-1710987653
   */
  tag?: string;
  /**
   * @remarks
   * The URL of the Container Registry image tag.
   * 
   * @example
   * registry-vpc.cn-shenzhen.aliyuncs.com/lihetech/easywits_server_exam:3.40.2
   */
  tagUrl?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      isEnterpriseRegistry: 'IsEnterpriseRegistry',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      tag: 'Tag',
      tagUrl: 'TagUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      isEnterpriseRegistry: 'boolean',
      regionId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      tag: 'string',
      tagUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeContainerAppVersionResponseBodyVersionContainersProbeContent extends $dara.Model {
  /**
   * @remarks
   * The probe command.
   * 
   * @example
   * sh test.sh
   */
  command?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks required for a container to be considered as unhealthy.
   * 
   * @example
   * 3
   */
  failureThreshold?: number;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * @example
   * test.com
   */
  host?: string;
  /**
   * @remarks
   * The request headers that are included in the container health check request.
   * 
   * @example
   * [{\\"Content-Type\\":\\"application/json
   */
  httpHeaders?: string;
  /**
   * @remarks
   * The latency for container probe initialization.
   * 
   * @example
   * 20
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The path of the container health check.
   * 
   * @example
   * /health_check
   */
  path?: string;
  /**
   * @remarks
   * The interval between container health checks.
   * 
   * @example
   * 5
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The port of the container health check. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The protocol that the container health check request uses.
   * 
   * @example
   * http
   */
  scheme?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks required for a container to be considered as healthy.
   * 
   * @example
   * 1
   */
  successThreshold?: number;
  /**
   * @remarks
   * The timeout period of the container health check.
   * 
   * @example
   * 5
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      failureThreshold: 'FailureThreshold',
      host: 'Host',
      httpHeaders: 'HttpHeaders',
      initialDelaySeconds: 'InitialDelaySeconds',
      path: 'Path',
      periodSeconds: 'PeriodSeconds',
      port: 'Port',
      scheme: 'Scheme',
      successThreshold: 'SuccessThreshold',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      failureThreshold: 'number',
      host: 'string',
      httpHeaders: 'string',
      initialDelaySeconds: 'number',
      path: 'string',
      periodSeconds: 'number',
      port: 'number',
      scheme: 'string',
      successThreshold: 'number',
      timeoutSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeContainerAppVersionResponseBodyVersionContainers extends $dara.Model {
  /**
   * @remarks
   * The information about the Container Registry image.
   */
  ACRImageInfo?: GetEdgeContainerAppVersionResponseBodyVersionContainersACRImageInfo;
  /**
   * @remarks
   * The arguments that are passed to the container startup command.
   * 
   * @example
   * -c /path/config.toml
   */
  args?: string;
  /**
   * @remarks
   * The command that is used to start the container.
   * 
   * @example
   * sh abc.sh 1 2 3
   */
  command?: string;
  /**
   * @remarks
   * The environment variables.
   * 
   * @example
   * ENV=prod
   */
  envVariables?: string;
  /**
   * @remarks
   * The image address.
   * 
   * @example
   * nginx:1.14.0
   */
  image?: string;
  /**
   * @remarks
   * Indicates whether the image is a Container Registry image.
   * 
   * @example
   * false
   */
  isACRImage?: boolean;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * version01
   */
  name?: string;
  /**
   * @remarks
   * The command that is run before the container is started. Format: `{"exec":{"command":["cat","/etc/group"\\]}}`. If you want to cancel this configuration, set the parameter value to `""` or `{}`. If you do not specify this parameter, this configuration is ignored.
   * 
   * @example
   * {\\"exec\\":{\\"command\\":[\\"touch\\",\\"/home/admin/checkpoststartV1\\"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The command that is run before the container is stopped.
   * 
   * @example
   * sh prestop.sh "echo hello world"
   */
  preStop?: string;
  /**
   * @remarks
   * The probe content.
   */
  probeContent?: GetEdgeContainerAppVersionResponseBodyVersionContainersProbeContent;
  /**
   * @remarks
   * The probe type.
   * 
   * @example
   * httpGet
   */
  probeType?: string;
  /**
   * @remarks
   * The compute specification.
   * 
   * @example
   * 1C2G
   */
  spec?: string;
  /**
   * @remarks
   * The storage capacity of the container. Valid values: 0.5G, 10G, 20G, and 30G.
   */
  storage?: string;
  static names(): { [key: string]: string } {
    return {
      ACRImageInfo: 'ACRImageInfo',
      args: 'Args',
      command: 'Command',
      envVariables: 'EnvVariables',
      image: 'Image',
      isACRImage: 'IsACRImage',
      name: 'Name',
      postStart: 'PostStart',
      preStop: 'PreStop',
      probeContent: 'ProbeContent',
      probeType: 'ProbeType',
      spec: 'Spec',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACRImageInfo: GetEdgeContainerAppVersionResponseBodyVersionContainersACRImageInfo,
      args: 'string',
      command: 'string',
      envVariables: 'string',
      image: 'string',
      isACRImage: 'boolean',
      name: 'string',
      postStart: 'string',
      preStop: 'string',
      probeContent: GetEdgeContainerAppVersionResponseBodyVersionContainersProbeContent,
      probeType: 'string',
      spec: 'string',
      storage: 'string',
    };
  }

  validate() {
    if(this.ACRImageInfo && typeof (this.ACRImageInfo as any).validate === 'function') {
      (this.ACRImageInfo as any).validate();
    }
    if(this.probeContent && typeof (this.probeContent as any).validate === 'function') {
      (this.probeContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeContainerAppVersionResponseBodyVersion extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The container images deployed for this version.
   */
  containers?: GetEdgeContainerAppVersionResponseBodyVersionContainers[];
  /**
   * @remarks
   * The time when the version was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-07-01T09:32:33Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the version was last released. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2023-07-25T04:58:05Z
   */
  lastPublishTime?: string;
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The time when the version was released. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-14T02:04:03Z
   */
  publishTime?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * aaa
   */
  remarks?: string;
  /**
   * @remarks
   * The status of the current version. Valid values:
   * 
   * *   created: The version is created.
   * *   failed: The version failed to be created.
   * *   creating: The version is being created.
   * 
   * @example
   * created
   */
  status?: string;
  /**
   * @remarks
   * The time when the version was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-03T10:52:52Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the created version.
   * 
   * @example
   * ver-87962637161651****
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      containers: 'Containers',
      createTime: 'CreateTime',
      lastPublishTime: 'LastPublishTime',
      name: 'Name',
      publishTime: 'PublishTime',
      remarks: 'Remarks',
      status: 'Status',
      updateTime: 'UpdateTime',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      containers: { 'type': 'array', 'itemType': GetEdgeContainerAppVersionResponseBodyVersionContainers },
      createTime: 'string',
      lastPublishTime: 'string',
      name: 'string',
      publishTime: 'string',
      remarks: 'string',
      status: 'string',
      updateTime: 'string',
      versionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containers)) {
      $dara.Model.validateArray(this.containers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEdgeContainerAppVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the version.
   */
  version?: GetEdgeContainerAppVersionResponseBodyVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      version: GetEdgeContainerAppVersionResponseBodyVersion,
    };
  }

  validate() {
    if(this.version && typeof (this.version as any).validate === 'function') {
      (this.version as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

