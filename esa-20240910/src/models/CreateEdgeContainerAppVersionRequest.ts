// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppVersionRequestContainersACRImageInfo extends $dara.Model {
  /**
   * @remarks
   * The domain name of the Container Registry image.
   * 
   * @example
   * 1500.***.net
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * @example
   * xcdn-9axbo****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the image is an enterprise-level Container Registry image.
   * 
   * @example
   * false
   */
  isEnterpriseRegistry?: boolean;
  /**
   * @remarks
   * The regions in which the Container Registry instance resides.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-h1ghghu60ct****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test_71
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs.
   * 
   * @example
   * safeline
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The tag of the Container Registry image.
   * 
   * @example
   * 3.40.2
   */
  tag?: string;
  /**
   * @remarks
   * The URL of the Container Registry image tag.
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

export class CreateEdgeContainerAppVersionRequestContainersProbeContent extends $dara.Model {
  /**
   * @remarks
   * The command of the exec type probe.
   * 
   * @example
   * echo ok
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
   * www.rewrite.com
   */
  host?: string;
  /**
   * @remarks
   * The request headers that are included in the container health check request.
   * 
   * @example
   * [{\\"Content-Type\\":\\"application/json\\"}]
   */
  httpHeaders?: string;
  /**
   * @remarks
   * The latency for container probe initialization.
   * 
   * @example
   * 1
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The health check path.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The interval between container health checks.
   * 
   * @example
   * 1
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The health check port.
   * 
   * @example
   * 9991
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
   * 1
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

export class CreateEdgeContainerAppVersionRequestContainers extends $dara.Model {
  /**
   * @remarks
   * The information about the Container Registry image.
   */
  ACRImageInfo?: CreateEdgeContainerAppVersionRequestContainersACRImageInfo;
  /**
   * @remarks
   * The arguments that are passed to the container startup command. Separate the parameters with spaces.
   * 
   * @example
   * -a
   */
  args?: string;
  /**
   * @remarks
   * The command that is used to start the container. Separate the arguments with spaces.
   * 
   * @example
   * nginx
   */
  command?: string;
  /**
   * @remarks
   * The environment variables. Separate the environment variables with commas (,).
   * 
   * @example
   * VITE_APP_TITLE=My App
   */
  envVariables?: string;
  /**
   * @remarks
   * The address of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * registry-vpc.cn-shenzhen.aliyuncs.com/lihe****h/ea****ts_serv****am:3.**
   */
  image?: string;
  /**
   * @remarks
   * Specifies whether the image is a Container Registry image.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  isACRImage?: boolean;
  /**
   * @remarks
   * The name of the container. The name must be unique in the same container group.
   * 
   * This parameter is required.
   * 
   * @example
   * lxg-demo-er
   */
  name?: string;
  /**
   * @remarks
   * The command that is run before the container is started. Separate the arguments with spaces.
   * 
   * @example
   * sh poststart.sh "echo hello world"
   */
  postStart?: string;
  /**
   * @remarks
   * The command that is run before the container is stopped. Separate the arguments with spaces.
   * 
   * @example
   * sh prestop.sh "echo hello world"
   */
  preStop?: string;
  /**
   * @remarks
   * The content of the container health probe.
   * 
   * This parameter is required.
   */
  probeContent?: CreateEdgeContainerAppVersionRequestContainersProbeContent;
  /**
   * @remarks
   * The type of the probe. Valid values:
   * 
   * *   exec: the command type.
   * *   tcpSocket: the TCP probe type.
   * *   httpGet: the HTTP access type.
   * 
   * This parameter is required.
   * 
   * @example
   * exec
   */
  probeType?: string;
  /**
   * @remarks
   * The compute specification of the container. Valid values: 1C2G, 2C4G, 2C8G, 4C8G, 4C16G, 8C16G, and 8C32G.
   * 
   * This parameter is required.
   * 
   * @example
   * 1C2G
   */
  spec?: string;
  /**
   * @remarks
   * The storage capacity. Valid values: 0.5G, 10G, 20G, and 30G.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.5G
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
      ACRImageInfo: CreateEdgeContainerAppVersionRequestContainersACRImageInfo,
      args: 'string',
      command: 'string',
      envVariables: 'string',
      image: 'string',
      isACRImage: 'boolean',
      name: 'string',
      postStart: 'string',
      preStop: 'string',
      probeContent: CreateEdgeContainerAppVersionRequestContainersProbeContent,
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

export class CreateEdgeContainerAppVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID, which can be obtained by calling the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The container group to be deployed for this version, which contains information about images.\\
   * The image data contains the image address, startup command, parameters, environment variables, and probe rules. You can specify one or more images. The parameter value is a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *       {
   *             "Name": "container1",
   *             "Image": "image1",
   *             "Spec": "1C2G",
   *             "Command": "/bin/sh",
   *             "Args": "-c hello",
   *             "ProbeType": "tcpSocket",
   *             "ProbeContent": "{\\"Port\\":8080}"
   *       },
   *       {
   *             "Name": "container2",
   *             "Image": "image2",
   *             "Spec": "2C4G",
   *             "ProbeType": "httpGet",
   *             "ProbeContent": "{\\"Path\\":\\"/\\",\\"Port\\":80,\\"InitialDelaySeconds\\":10}"
   *       }
   * ]
   */
  containers?: CreateEdgeContainerAppVersionRequestContainers[];
  /**
   * @remarks
   * The version name, which must be 6 to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * verson1
   */
  name?: string;
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * test app
   */
  remarks?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      containers: 'Containers',
      name: 'Name',
      remarks: 'Remarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      containers: { 'type': 'array', 'itemType': CreateEdgeContainerAppVersionRequestContainers },
      name: 'string',
      remarks: 'string',
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

