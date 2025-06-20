// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The client token to ensure the idempotency of the request. Use your client to generate the token that is unique among requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see "How to ensure idempotence".
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The command content. Take note of the following:
   * 
   * *   When `EnableParameter` is set to true, you can use custom parameters in the command.
   * *   Define custom parameters in the {{}} format. Within `{{}}`, the spaces and line feeds before and after the parameter names are ignored.
   * *   You can specify up to 20 custom parameters.
   * *   A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). The name is not case-sensitive.
   * *   Each custom parameter name is up to 64 bytes in length.
   * 
   * @example
   * ZWNobyAxMjM=
   */
  commandContent?: string;
  /**
   * @remarks
   * The ID of the command.
   * 
   * @example
   * c-e996287206324975b5fbe1d***
   */
  commandId?: string;
  /**
   * @remarks
   * The encoding mode of the command content. Valid values:
   * 
   * *   PlainText
   * *   Base64
   * 
   * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
   * 
   * @example
   * Base64
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The command description.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to use custom parameters in the command.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableParameter?: boolean;
  /**
   * @remarks
   * The schedule to run the command. Supported schedule types: at a fixed interval based on a rate expression, run only once at a specific time, or run at specific times based on a cron expression.
   * 
   * *   To run the command at a fixed interval, use a rate expression to specify the interval. The interval can be in seconds, minutes, hours, or days. This option is suitable for scenarios in which tasks need to be executed at a fixed interval. Format: rate(\\<Execution interval value> \\<Execution interval unit>). For example, rate(5m) means to run the command every 5 minutes. When you specify an interval, take note of the following limits:
   * 
   *     *   The interval can be anywhere from 60 seconds to 7 days, but must be longer than the timeout period of the scheduled task.
   *     *   The interval is the time between two consecutive executions, irrelevant of the time required to run the command. For example, assume that you set the interval to 5 minutes and that it takes 2 minutes to run the command each time. The system waits 3 minutes before running the command again.
   *     *   The command is not immediately executed after the task is created. For example, assume that you set the interval to 5 minutes. The task begins to be executed 5 minutes after it is created.
   * 
   * *   To run a command only once at a specific point in time, specify a point in time and a time zone. Format: at(yyyy-MM-dd HH:mm:ss \\<Time zone>). If you do not specify a time zone, the Coordinated Universal Time (UTC) time zone is used by default. The time zone name supports the following formats: Full name, such as Asia/Shanghai and America/Los_Angeles. The time offset from GMT. Examples: GMT+8:00 (UTC+8) and GMT-7:00 (UTC-7). If you use the GMT format, you cannot add leading zeros to the hour value. The time zone abbreviation. Only UTC is supported. For example, to configure a command to run only once at 13:15:30 on June 6, 2022 (Shanghai time), set the time to at(2022-06-06 13:15:30 Asia/Shanghai). To configure a command to run only once at 13:15:30 on June 6, 2022 (UTC-7), set the time to at(2022-06-06 13:15:30 GMT-7:00).
   * 
   * *   To run a command at designated points in time, use a cron expression to define the schedule. Format: \\<Cron expression> \\<Time zone>. Example: \\<Seconds> \\<Minutes> \\<Hours> \\<Day of the month> \\<Month> \\<Day of the week> \\<Year (optional)> \\<Time zone>. The system calculates the execution times of the command based on the specified cron expression and time zone and runs the command as scheduled. If you do not specify a time zone, the system time zone of the instance is used by default. For more information, see Cron expressions. The time zone name supports the following formats:
   * 
   *     *   Full name, such as Asia/Shanghai and America/Los_Angeles.
   *     *   The time offset from GMT. Examples: GMT+8:00 (UTC+8) and GMT-7:00 (UTC-7). If you use the GMT format, you cannot add leading zeros to the hour value.
   *     *   The time zone abbreviation. Only UTC is supported.
   * 
   *     For example, if you specify a command to run at 10:15:00 every day in 2022 in China/Shanghai time, set the time to 0 15 10 ? \\* \\* 2022 Asia/Shanghai. To configure a command to run every half an hour from 10:00:00 to 11:30:00 every day in 2022 (UTC+8), set the schedule to 0 0/30 10-11 \\* \\* ? 2022 GMT+8:00. To configure a command to run every 5 minutes from 14:00:00 to 14:55:00 every October every two years from 2022 in UTC, set the schedule to 0 0/5 14 \\* 10 ? 2022/2 UTC.
   */
  frequency?: string;
  /**
   * @remarks
   * The launcher for script execution. Cannot exceed 1 KB.
   * 
   * @example
   * python3 -u {{ACS::ScriptFileName|Ext(".py")}}
   */
  launcher?: string;
  /**
   * @remarks
   * The command name.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The node list.
   */
  nodeIdList?: string[];
  /**
   * @remarks
   * The key-value pairs of custom parameters to pass in when the command includes custom parameters. For example, the command content is `echo {{name}}`. You can use `Parameters` to pass in the `{"name":"Jack"}` key-value pair. The `name` key of the custom parameter is automatically replaced by the paired Jack value to generate a new command. As a result, the `echo Jack` command is run.
   * 
   * You can specify 0 to 10 custom parameters. Take note of the following:
   * 
   * *   The key of a custom parameter can be up to 64 characters in length, and cannot be an empty string.
   * *   The value of a custom parameter can be an empty string.
   * *   If you want to retain a command, make sure that the command after Base64 encoding, including custom parameters and original command content, does not exceed 18 KB in size. If you do not want to retain the command, make sure that the command after Base64 encoding does not exceed 24 KB in size. You can set `KeepCommand` to specify whether to retain the command.
   * *   The specified custom parameter names must be included in the custom parameter names that you specify when you create the command. You can use empty strings to represent the parameters that are not passed in.
   * 
   * This parameter is left empty by default, which indicates that the custom parameter feature is disabled.
   * 
   * @example
   * {"name":"Jack", "accessKey":"LTAIdyvdIqaRY****"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The mode to run the command. Valid values:
   * 
   * *   Once: runs the command immediately.
   * *   Period: runs the command based on a schedule. When set to `Period`, `Frequency` is required.
   * *   NextRebootOnly: runs the command the next time the instances is started.
   * *   EveryReboot: runs the command every time the instance is started.
   * 
   * Default value:
   * 
   * *   If you do not specify `Frequency`, the default value is `Once`.
   * *   If you specify `Frequency`, RepeatMode is set to `Period` regardless of whether a value is already specified.
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * Indicates how the command task is stopped when a command execution is manually stopped or times out. Valid values:
   * 
   * Process: The process of the command is stopped. ProcessTree: The process tree of the command is stopped. In this case, the process of the command and all subprocesses are stopped.
   * 
   * @example
   * ProcessTree
   */
  terminationMode?: string;
  /**
   * @remarks
   * The timeout period for the command. Unit: seconds. A timeout error occurs if the command cannot be run because the process slows down or because a specific module or Cloud Assistant Agent does not exist. When the specified timeout period ends, the command process is forcefully terminated. Default value: 60.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The username that you use to run the command. The name can be up to 255 characters in length. For Linux instances, the root user is used by default.
   * 
   * @example
   * root
   */
  username?: string;
  /**
   * @remarks
   * The working path of the command. You can specify a custom path. Default path:
   * 
   * Linux instances: By default, the path is in the /home directory of the root user.
   * 
   * @example
   * /home/user
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commandContent: 'CommandContent',
      commandId: 'CommandId',
      contentEncoding: 'ContentEncoding',
      description: 'Description',
      enableParameter: 'EnableParameter',
      frequency: 'Frequency',
      launcher: 'Launcher',
      name: 'Name',
      nodeIdList: 'NodeIdList',
      parameters: 'Parameters',
      repeatMode: 'RepeatMode',
      terminationMode: 'TerminationMode',
      timeout: 'Timeout',
      username: 'Username',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commandContent: 'string',
      commandId: 'string',
      contentEncoding: 'string',
      description: 'string',
      enableParameter: 'boolean',
      frequency: 'string',
      launcher: 'string',
      name: 'string',
      nodeIdList: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      repeatMode: 'string',
      terminationMode: 'string',
      timeout: 'number',
      username: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeIdList)) {
      $dara.Model.validateArray(this.nodeIdList);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

