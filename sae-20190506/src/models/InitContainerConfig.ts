// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitContainerConfig extends $dara.Model {
  /**
   * @remarks
   * Start command for the image.
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * Arguments for the image start command.
   * 
   * @example
   * [\\"-c\\",\\"/bin/bash /home/admin/bin/start.sh\\"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * ConfigMap mount description.
   * 
   * @example
   * [{"configMapId":16,"key":"test","mountPath":"/tmp"}]
   */
  configMapMountDesc?: string;
  /**
   * @remarks
   * EmptyDir mount description.
   * 
   * @example
   * [{\\"name\\":\\"workdir\\",\\"mountPath\\":\\"/usr/local/tomcat/webapps\\"}]
   */
  emptyDirDesc?: string;
  /**
   * @remarks
   * Environment variable parameters for the container.
   * 
   * @example
   * [{"name":"TEST_ENV_KEY","value":"TEST_ENV_VAR"}]
   */
  envs?: string;
  /**
   * @remarks
   * The address of the image registry.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/sae_test/ali_sae_test:0.0.1
   */
  imageUrl?: string;
  /**
   * @remarks
   * Container name.
   * 
   * @example
   * name
   */
  name?: string;
  secretMountDesc?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      commandArgs: 'CommandArgs',
      configMapMountDesc: 'ConfigMapMountDesc',
      emptyDirDesc: 'EmptyDirDesc',
      envs: 'Envs',
      imageUrl: 'ImageUrl',
      name: 'Name',
      secretMountDesc: 'SecretMountDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      commandArgs: 'string',
      configMapMountDesc: 'string',
      emptyDirDesc: 'string',
      envs: 'string',
      imageUrl: 'string',
      name: 'string',
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

