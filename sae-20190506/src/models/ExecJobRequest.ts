// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the job template.
   * 
   * This parameter is required.
   * 
   * @example
   * ee1a7a07-abcb-4652-a1d3-2d57f415****
   */
  appId?: string;
  /**
   * @remarks
   * The image startup command. The command must be an executable object that exists in the container. Example:
   * 
   * ```
   * command:
   *       - echo
   *       - abc
   *       - >
   *       - file0
   * ```
   * Based on the preceding example, Command="echo" and CommandArgs=["abc", ">", "file0"].
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * The arguments for the image startup command. These are the arguments required by the **Command** startup command. Format:
   * 
   * `["a","b"]`
   * 
   * In the preceding example, CommandArgs=["abc", ">", "file0"]. The ["abc", ">", "file0"] part must be converted to a string in JSON array format. If this parameter is not required, leave it empty.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The environment variables for the container. You can customize environment variables or reference configuration items. To reference a configuration item, you must first create a ConfigMap instance. For more information, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html). Valid values:
   * - Custom configuration
   *     - **name**: the name of the environment variable.
   *     - **value**: the value of the environment variable.
   * - Referenced configuration items
   *     - **name**: the name of the environment variable. You can reference a single key or all keys. To reference all keys, enter sae-sys-configmap-all-<configuration item name>, for example, sae-sys-configmap-all-test1.
   *     - **valueFrom**: the reference of the environment variable. Set the value to configMapRef.
   *     - **configMapId**: the ID of the configuration item.
   *     - **key**: the key. If you reference all key-value pairs, do not set this field.
   * 
   * @example
   * [{"name":"envtmp","value":"0"}]
   */
  envs?: string;
  /**
   * @remarks
   * The event ID. This parameter is user-defined and used for idempotence. Only one job is created for the same event ID.
   * 
   * @example
   * custom
   */
  eventId?: string;
  /**
   * @remarks
   * The startup arguments for the JAR package job. Default job startup command:
   * `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * custom-args
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * The startup options for the JAR package job. Default job startup command:
   * `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArg`
   * 
   * @example
   * -Xms4G -Xmx4G
   */
  jarStartOptions?: string;
  /**
   * @remarks
   * The number of concurrent instances for the job.
   * 
   * @example
   * 3
   */
  replicas?: string;
  /**
   * @remarks
   * The time when the job is triggered. Format: `yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\"`.
   * 
   * @example
   * 2023-09-14T14:25:02Z
   */
  time?: string;
  /**
   * @remarks
   * The startup command for the WAR package deployment job. The configuration procedure is the same as that for the image deployment startup command. For more information, see [Configure a startup command](https://help.aliyun.com/document_detail/96677.html).
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

