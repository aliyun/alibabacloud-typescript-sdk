// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecJobRequest extends $dara.Model {
  /**
   * @remarks
   * The job template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ee1a7a07-abcb-4652-a1d3-2d57f415****
   */
  appId?: string;
  /**
   * @remarks
   * The command that is used to start the image. The command must be an existing executable object in the container. Example:
   * 
   *     command:
   *           - echo
   *           - abc
   *           - >
   *           - file0
   * 
   * In this example, the Command parameter is set to `Command="echo", CommandArgs=["abc", ">", "file0"]`.
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * The parameters of the image startup command. The CommandArgs parameter specifies the parameters that are required for the **Command** parameter. The name must meet the following format requirements:
   * 
   * `["a","b"]`
   * 
   * In the preceding example, the CommandArgs parameter is set to `CommandArgs=["abc", ">", "file0"]`. The data type of `["abc", ">", "file0"]` must be an array of strings in the JSON format. This parameter is optional.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The environment variables. You can configure custom environment variables or reference a ConfigMap. If you want to reference a ConfigMap, you must first create a ConfigMap. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * 
   * *   Configure custom environment variables
   * 
   *     *   **name**: the name of the environment variable.
   *     *   **value**: the value of the environment variable.
   * 
   * *   Reference ConfigMap
   * 
   *     *   **name**: the name of the environment variable. You can reference one or all keys. If you want to reference all keys, specify `sae-sys-configmap-all-<ConfigMap name>`. Example: `sae-sys-configmap-all-test1`.
   *     *   **valueFrom**: the reference of the environment variable. Set the value to `configMapRef`.
   *     *   **configMapId**: the ConfigMap ID.
   *     *   **key**: the key. If you want to reference all keys, do not configure this parameter.
   * 
   * @example
   * [{"name":"envtmp","value":"0"}]
   */
  envs?: string;
  /**
   * @remarks
   * The event ID. This is a user-defined parameter used for idempotency so that only one job is created for the same event ID.
   * 
   * @example
   * custom
   */
  eventId?: string;
  /**
   * @remarks
   * The arguments in the JAR package. The arguments are used to start the job. The default startup command is `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`.
   * 
   * @example
   * custom-args
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The option settings in the JAR package. The settings are used to start the job. The default startup command is `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArg`.
   * 
   * @example
   * -Xms4G -Xmx4G
   */
  jarStartOptions?: string;
  /**
   * @remarks
   * The number of concurrent instances.
   * 
   * @example
   * 3
   */
  replicas?: string;
  /**
   * @remarks
   * The time at which the job is triggered. Format: `yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\"`.
   * 
   * @example
   * 2023-09-14T14:25:02Z
   */
  time?: string;
  /**
   * @remarks
   * The startup command of the WAR package. For information about how to configure the startup command, see [Configure a startup command](https://help.aliyun.com/document_detail/96677.html).
   * 
   * @example
   * CATALINA_OPTS=\\"$CATALINA_OPTS $Options\\" catalina.sh run
   */
  warStartOptions?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      command: 'Command',
      commandArgs: 'CommandArgs',
      envs: 'Envs',
      eventId: 'EventId',
      jarStartArgs: 'JarStartArgs',
      jarStartOptions: 'JarStartOptions',
      replicas: 'Replicas',
      time: 'Time',
      warStartOptions: 'WarStartOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      command: 'string',
      commandArgs: 'string',
      envs: 'string',
      eventId: 'string',
      jarStartArgs: 'string',
      jarStartOptions: 'string',
      replicas: 'string',
      time: 'string',
      warStartOptions: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

