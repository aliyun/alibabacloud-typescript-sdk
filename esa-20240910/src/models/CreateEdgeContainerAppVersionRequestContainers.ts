// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEdgeContainerAppVersionRequestContainersACRImageInfo } from "./CreateEdgeContainerAppVersionRequestContainersAcrimageInfo";
import { CreateEdgeContainerAppVersionRequestContainersProbeContent } from "./CreateEdgeContainerAppVersionRequestContainersProbeContent";


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

