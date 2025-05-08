// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEdgeContainerAppVersionsResponseBodyVersionsContainersProbeContent } from "./ListEdgeContainerAppVersionsResponseBodyVersionsContainersProbeContent";


export class ListEdgeContainerAppVersionsResponseBodyVersionsContainers extends $dara.Model {
  /**
   * @remarks
   * The arguments that are passed to the container startup command.
   * 
   * @example
   * -c a=1
   */
  args?: string;
  /**
   * @remarks
   * The command that is used to start the container.
   * 
   * @example
   * openresty -g \\"daemon off;\\"
   */
  command?: string;
  /**
   * @remarks
   * The environment variables of the container.
   * 
   * @example
   * ENV=prod
   */
  envVariables?: string;
  /**
   * @remarks
   * The address of the container image.
   * 
   * @example
   * nginx
   */
  image?: string;
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * container1
   */
  name?: string;
  /**
   * @remarks
   * The command that is run before the container is started. Format: `{"exec":{"command":["cat","/etc/group"\\]}}`.
   * 
   * If you want to cancel this configuration, set the parameter value to `""` or `{}`. If you do not specify this parameter, this configuration is ignored.
   * 
   * @example
   * {\\"exec\\":{\\"command\\":[\\"bash\\",\\"-c\\",\\"cd /home/admin/
   */
  postStart?: string;
  /**
   * @remarks
   * The command that is run before the container is stopped.
   * 
   * @example
   * sh stop.sh
   */
  preStop?: string;
  /**
   * @remarks
   * The container probe content.
   */
  probeContent?: ListEdgeContainerAppVersionsResponseBodyVersionsContainersProbeContent;
  /**
   * @remarks
   * The probe type of the container.
   * 
   * @example
   * httpGet
   */
  probeType?: string;
  /**
   * @remarks
   * The compute specification of the container.
   * 
   * @example
   * 1C2G
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      command: 'Command',
      envVariables: 'EnvVariables',
      image: 'Image',
      name: 'Name',
      postStart: 'PostStart',
      preStop: 'PreStop',
      probeContent: 'ProbeContent',
      probeType: 'ProbeType',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      command: 'string',
      envVariables: 'string',
      image: 'string',
      name: 'string',
      postStart: 'string',
      preStop: 'string',
      probeContent: ListEdgeContainerAppVersionsResponseBodyVersionsContainersProbeContent,
      probeType: 'string',
      spec: 'string',
    };
  }

  validate() {
    if(this.probeContent && typeof (this.probeContent as any).validate === 'function') {
      (this.probeContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

