// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppVersionRequestContainersACRImageInfo extends $dara.Model {
  /**
   * @remarks
   * The ACR image domain name.
   * 
   * @example
   * 1500.***.net
   */
  domain?: string;
  /**
   * @remarks
   * The ACR instance ID.
   * 
   * @example
   * xcdn-9axbo****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the image is an enterprise-level image.
   * 
   * @example
   * false
   */
  isEnterpriseRegistry?: boolean;
  /**
   * @remarks
   * The region list of the ACR instance.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The repository ID of the image.
   * 
   * @example
   * crr-h1ghghu60ct****
   */
  repoId?: string;
  /**
   * @remarks
   * The image repository name.
   * 
   * @example
   * test_71
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace of the image repository.
   * 
   * @example
   * safeline
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The ACR image tag.
   * 
   * @example
   * 3.40.2
   */
  tag?: string;
  /**
   * @remarks
   * The ACR image tag URL.
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
   * The probe command for exec-type probes.
   * 
   * @example
   * echo ok
   */
  command?: string;
  /**
   * @remarks
   * The number of consecutive failed health checks required.
   * 
   * @example
   * 3
   */
  failureThreshold?: number;
  /**
   * @remarks
   * The domain name for the health check.
   * 
   * @example
   * www.rewrite.com
   */
  host?: string;
  /**
   * @remarks
   * The HTTP request headers.
   * 
   * @example
   * [{\\"Content-Type\\":\\"application/json\\"}]
   */
  httpHeaders?: string;
  /**
   * @remarks
   * The initial delay time for the container probe, in seconds. For example, 5 indicates that the initial delay is set to 5 seconds.
   * 
   * @example
   * 1
   */
  initialDelaySeconds?: number;
  /**
   * @remarks
   * The path for the container health check.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The interval between container health checks, in seconds. For example, 5 indicates that the health check interval is set to 5 seconds.
   * 
   * @example
   * 1
   */
  periodSeconds?: number;
  /**
   * @remarks
   * The port for the container health check.
   * 
   * @example
   * 9991
   */
  port?: number;
  /**
   * @remarks
   * The request protocol for the health check.
   * 
   * @example
   * http
   */
  scheme?: string;
  /**
   * @remarks
   * The number of consecutive successful health checks required.
   * 
   * @example
   * 1
   */
  successThreshold?: number;
  /**
   * @remarks
   * The timeout period for the container health check, in seconds. For example, 5 indicates that the timeout is set to 5 seconds.
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
   * The ACR image information.
   */
  ACRImageInfo?: CreateEdgeContainerAppVersionRequestContainersACRImageInfo;
  /**
   * @remarks
   * The startup parameters. Separate multiple parameters with spaces.
   * 
   * @example
   * -a
   */
  args?: string;
  /**
   * @remarks
   * The startup command. Separate multiple commands with spaces.
   * 
   * @example
   * nginx
   */
  command?: string;
  /**
   * @remarks
   * The environment variables. Format: key1=val1,key2=val2.
   * 
   * @example
   * VITE_APP_TITLE=My App
   */
  envVariables?: string;
  /**
   * @remarks
   * The image address.
   * 
   * This parameter is required.
   * 
   * @example
   * registry-vpc.cn-shenzhen.aliyuncs.com/lihe****h/ea****ts_serv****am:3.**
   */
  image?: string;
  /**
   * @remarks
   * Specifies whether the image is an Alibaba Cloud Container Registry (ACR) image.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  isACRImage?: boolean;
  /**
   * @remarks
   * The container name. The name must be unique within the same container group.
   * 
   * This parameter is required.
   * 
   * @example
   * lxg-demo-er
   */
  name?: string;
  /**
   * @remarks
   * The command to execute before the container starts. Separate multiple commands with spaces. This command is executed before the service starts and is typically used for initialization operations.
   * 
   * @example
   * sh poststart.sh "echo hello world"
   */
  postStart?: string;
  /**
   * @remarks
   * The command to execute before the container stops. Separate multiple commands with spaces. This command is executed before the service exits and is typically used for cleanup operations.
   * 
   * @example
   * sh prestop.sh "echo hello world"
   */
  preStop?: string;
  /**
   * @remarks
   * The container health probe content.
   * 
   * This parameter is required.
   * 
   * @example
   * 具体字段可参照k8s官方就绪探针的定义。
   */
  probeContent?: CreateEdgeContainerAppVersionRequestContainersProbeContent;
  /**
   * @remarks
   * The probe type. Valid values:
   * - **exec**: Command-based.
   * - **tcpSocket**: TCP-based.
   * - **httpGet**: HTTP-based.
   * 
   * This parameter is required.
   * 
   * @example
   * exec
   */
  probeType?: string;
  /**
   * @remarks
   * The container specifications. Specifies the computing power specifications. Valid values: 1C2G, 2C4G, 2C8G, 4C8G, 4C16G, 8C16G, and 8C32G.
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
   * The application ID. You can call the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation to obtain the application ID.
   * >Notice: 1) Your account must have an ESA plan with the Edge Container feature enabled. 2) Call CreateEdgeContainerApp first to create an application and obtain the AppId. 3) Complete call chain example: CreateEdgeContainerApp → ListEdgeContainerApps → CreateEdgeContainerAppVersion.</notice>
   * 
   * This parameter is required.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The container group to be deployed for this version, including specific image information. The image information consists of the image address, startup command, parameters, environment variables, and probe rules. Multiple images are supported in a JSON array structure.
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
   * The version name. The name must be **6 to 128** characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * verson1
   */
  name?: string;
  /**
   * @remarks
   * The remarks.
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

