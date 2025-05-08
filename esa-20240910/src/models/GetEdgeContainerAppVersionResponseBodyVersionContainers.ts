// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEdgeContainerAppVersionResponseBodyVersionContainersACRImageInfo } from "./GetEdgeContainerAppVersionResponseBodyVersionContainersAcrimageInfo";
import { GetEdgeContainerAppVersionResponseBodyVersionContainersProbeContent } from "./GetEdgeContainerAppVersionResponseBodyVersionContainersProbeContent";


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

