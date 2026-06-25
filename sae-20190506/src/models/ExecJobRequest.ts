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
   * The startup command, which must be an executable that exists in the container. Example:
   * 
   * ```
   * command:
   *       - echo
   *       - abc
   *       - >
   *       - file0
   * ```
   * 
   * Based on this example, `Command` is `echo` and `CommandArgs` is `["abc", ">", "file0"]`.
   * 
   * @example
   * echo
   */
  command?: string;
  /**
   * @remarks
   * The arguments for the **Command** parameter. The value must be a string that represents a JSON array. Format:
   * 
   * `["a","b"]`
   * 
   * In the preceding example for the `Command` parameter, `CommandArgs` is `["abc", ">", "file0"]`. The JSON array `["abc", ">", "file0"]` must be converted to a string. This parameter is optional.
   * 
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @remarks
   * The container environment variables. You can specify custom environment variables or reference an existing ConfigMap. For more information about creating a ConfigMap, see [CreateConfigMap](https://help.aliyun.com/document_detail/176914.html).
   * 
   * - Custom configuration
   * 
   *   - **name**: The name of the environment variable.
   * 
   *   - **value**: The value of the environment variable.
   * 
   * - Reference a ConfigMap
   * 
   *   - **name**: The name of the environment variable. You can reference a single key or all keys. To reference all keys, use the `sae-sys-configmap-all-<ConfigMap name>` format. Example: `sae-sys-configmap-all-test1`.
   * 
   *   - **valueFrom**: The source of the environment variable. Set the value to `configMapRef`.
   * 
   *   - **configMapId**: The ID of the ConfigMap.
   * 
   *   - **key**: The key that you want to reference. If you want to reference all key-value pairs, do not specify this parameter.
   * 
   * @example
   * [{"name":"envtmp","value":"0"}]
   */
  envs?: string;
  /**
   * @remarks
   * A customizable event ID that ensures idempotency. The system creates only one job for requests that have the same event ID.
   * 
   * @example
   * custom
   */
  eventId?: string;
  /**
   * @remarks
   * Arguments for starting a job deployed from a JAR package. The default startup command is:
   * `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArgs`
   * 
   * @example
   * custom-args
   */
  jarStartArgs?: string;
  /**
   * @remarks
   * Options for starting a job deployed from a JAR package. The default startup command is:
   * `$JAVA_HOME/bin/java $JarStartOptions -jar $CATALINA_OPTS "$package_path" $JarStartArg`
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
   * The time to trigger the job, specified in the `yyyy-MM-dd\\"T\\"HH:mm:ss\\"Z\\"` format.
   * 
   * @example
   * 2023-09-14T14:25:02Z
   */
  time?: string;
  /**
   * @remarks
   * The startup command for a job deployed from a WAR package. Configuration is the same as for an image-based deployment. For more information, see [Configure a startup command](https://help.aliyun.com/document_detail/96677.html).
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

