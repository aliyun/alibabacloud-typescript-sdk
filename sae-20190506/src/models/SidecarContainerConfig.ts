// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SidecarContainerConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the Container Registry ACR Enterprise instance. This parameter is required when ImageUrl is a Container Registry Enterprise instance.
   * 
   * @example
   * cri-xxxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The image startup command.
   * 
   * @example
   * python
   */
  command?: string;
  /**
   * @remarks
   * The image startup command arguments.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The ConfigMap mount description.
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
   * The container environment variable parameters.
   * 
   * @example
   * [{"name":"TEST_ENV_KEY","value":"TEST_ENV_VAR"}]
   */
  envs?: string;
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/demo/nginx:latest
   */
  imageUrl?: string;
  /**
   * @remarks
   * The liveness probe configuration.
   * 
   * @example
   * {"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
   */
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
  /**
   * @remarks
   * The PostStart configuration.
   * 
   * @example
   * {"exec":{"command":["sh","-c","echo hello"]}}
   */
  postStart?: string;
  /**
   * @remarks
   * The PreStop configuration.
   * 
   * @example
   * {"exec":{"command":["sh","-c","echo hello"]}}
   */
  preStop?: string;
  /**
   * @remarks
   * The readiness probe configuration.
   * 
   * @example
   * {"exec":{"command":["sh","-c","cat /home/admin/start.sh"]},"initialDelaySeconds":30,"periodSeconds":30,"timeoutSeconds":2}
   */
  readiness?: string;
  /**
   * @remarks
   * The Secret mount description.
   * 
   * @example
   * [{"secretId":10,"key":"test","mountPath":"/tmp"}]
   */
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

