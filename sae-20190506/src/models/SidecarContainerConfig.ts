// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SidecarContainerConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the Container Registry Enterprise Edition instance. This parameter is required if the ImageUrl parameter is set to the URL of an image in a Container Registry Enterprise Edition instance.
   * 
   * @example
   * cri-xxxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The startup command of the image.
   * 
   * @example
   * python
   */
  command?: string;
  /**
   * @remarks
   * The parameters of the image startup command.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The description of the ConfigMap mounted to the application.
   * 
   * @example
   * [{"configMapId":16,"key":"test","mountPath":"/tmp"}]
   */
  configMapMountDesc?: string;
  /**
   * @remarks
   * Cpu
   * 
   * @example
   * 1000
   */
  cpu?: number;
  /**
   * @remarks
   * The EmptyDir description.
   * 
   * @example
   * [{\\"name\\":\\"workdir\\",\\"mountPath\\":\\"/usr/local/tomcat/webapps\\"}]
   */
  emptyDirDesc?: string;
  /**
   * @remarks
   * The environment variables of the container.
   * 
   * @example
   * [{"name":"TEST_ENV_KEY","value":"TEST_ENV_VAR"}]
   */
  envs?: string;
  /**
   * @remarks
   * The image address.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/demo/nginx:latest
   */
  imageUrl?: string;
  liveness?: string;
  /**
   * @remarks
   * Memory
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * name
   */
  name?: string;
  postStart?: string;
  preStop?: string;
  readiness?: string;
  secretMountDesc?: string;
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'AcrInstanceId',
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      cpu: 'Cpu',
      emptyDirDesc: 'EmptyDirDesc',
      envs: 'Envs',
      imageUrl: 'ImageUrl',
      liveness: 'Liveness',
      memory: 'Memory',
      name: 'Name',
      postStart: 'PostStart',
      preStop: 'PreStop',
      readiness: 'Readiness',
      secretMountDesc: 'SecretMountDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: 'string',
      cpu: 'number',
      emptyDirDesc: 'string',
      envs: 'string',
      imageUrl: 'string',
      liveness: 'string',
      memory: 'number',
      name: 'string',
      postStart: 'string',
      preStop: 'string',
      readiness: 'string',
      secretMountDesc: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

