// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SidecarContainerConfig extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the ACR Enterprise Edition. This parameter is required if the `ImageUrl` is from an ACR Enterprise Edition repository.
   * 
   * @example
   * cri-xxxxxx
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The startup command for the image. This command overrides the `ENTRYPOINT` defined in the image.
   * 
   * @example
   * python
   */
  command?: string;
  /**
   * @remarks
   * The arguments for the startup command. This parameter corresponds to `CMD` in the Dockerfile.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The settings for mounting a ConfigMap. Use this to inject configuration data into the container as files.
   * 
   * @example
   * [{"configMapId":16,"key":"test","mountPath":"/tmp"}]
   */
  configMapMountDesc?: string;
  /**
   * @remarks
   * The CPU resources allocated to the container, measured in millicores. For example, a value of 1000 represents 1 vCPU.
   * 
   * @example
   * 1000
   */
  cpu?: number;
  /**
   * @remarks
   * The configuration for an `emptyDir` volume. This creates a temporary directory that persists for the life of the application instance.
   * 
   * @example
   * [{\\"name\\":\\"workdir\\",\\"mountPath\\":\\"/usr/local/tomcat/webapps\\"}]
   */
  emptyDirDesc?: string;
  /**
   * @remarks
   * The environment variables to set in the container. Specify the variables as a JSON array of key-value pairs.
   * 
   * @example
   * [{"name":"TEST_ENV_KEY","value":"TEST_ENV_VAR"}]
   */
  envs?: string;
  /**
   * @remarks
   * The container image URL.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/demo/nginx:latest
   */
  imageUrl?: string;
  /**
   * @remarks
   * The configuration for the liveness probe. The liveness probe checks if the container is running. If the probe fails, the system restarts the container.
   */
  liveness?: string;
  /**
   * @remarks
   * The amount of memory allocated to the container, measured in MB.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * The name of the container.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The configuration for the postStart hook. This hook runs immediately after the container starts to perform initialization tasks.
   */
  postStart?: string;
  /**
   * @remarks
   * The configuration for the preStop hook. This hook runs immediately before the container is terminated to ensure a graceful shutdown.
   */
  preStop?: string;
  /**
   * @remarks
   * The configuration for the readiness probe. The readiness probe checks if the container is ready to handle requests. The system will not direct traffic to a container until its readiness probe succeeds.
   */
  readiness?: string;
  /**
   * @remarks
   * Specifies how to mount a Secret. This lets you securely use sensitive data, such as credentials or keys, in your application.
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

