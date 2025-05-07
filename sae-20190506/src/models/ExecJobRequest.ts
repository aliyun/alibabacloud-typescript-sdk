// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ee1a7a07-abcb-4652-a1d3-2d57f415****
   */
  appId?: string;
  /**
   * @example
   * echo
   */
  command?: string;
  /**
   * @example
   * ["a","b"]
   */
  commandArgs?: string;
  /**
   * @example
   * [{"name":"envtmp","value":"0"}]
   */
  envs?: string;
  /**
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

