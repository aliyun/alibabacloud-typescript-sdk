// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInvocationAttributeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The modified command content. The command content can be plaintext or Base64-encoded. Note the following items:
   * 
   * - The size of the command content after Base64 encoding cannot exceed 24 KB.
   * - If your command content is Base64-encoded, you must set `ContentEncoding=Base64`.
   * - You can set `EnableParameter=true` to enable the custom parameter feature in the command content:
   *     - Custom parameters are defined by enclosing them in `{{}}`. Spaces and line breaks before and after the parameter name within `{{}}` are ignored.
   *     - The number of custom parameters cannot exceed 20.
   *     - Custom parameter names can contain a-z, A-Z, 0-9, hyphens (-), and underscores (_). The acs:: prefix for specifying non-built-in environment parameters is not supported. Other characters are not supported. Parameter names are case-insensitive.
   *     - A single custom parameter name cannot exceed 64 bytes.
   * 
   * - You can specify built-in environment parameters as custom parameters. When the command is executed, you do not need to manually assign values to the parameters. Cloud Assistant automatically replaces them with the corresponding values in the environment. The following built-in environment parameters are supported:
   *     - `{{ACS::RegionId}}`: The region ID.
   *     - `{{ACS::AccountId}}`: The UID of the Alibaba Cloud account.
   *     - `{{ACS::InstanceId}}`: The instance ID. When the command is sent to multiple instances, to specify `{{ACS::InstanceId}}` as a built-in environment parameter, ensure that the Cloud Assistant Agent version is not earlier than the following versions:
   *         - Linux: 2.2.3.309
   *         - Windows: 2.1.3.309
   *     - `{{ACS::InstanceName}}`: The instance name. When the command is sent to multiple instances, to specify `{{ACS::InstanceName}}` as a built-in environment parameter, ensure that the Cloud Assistant Agent version is not earlier than the following versions:
   *         - Linux: 2.2.3.344
   *         - Windows: 2.1.3.344
   *     - `{{ACS::InvokeId}}`: The command execution ID. To specify `{{ACS::InvokeId}}` as a built-in environment parameter, ensure that the Cloud Assistant Agent version is not earlier than the following versions:
   *         - Linux: 2.2.3.309
   *         - Windows: 2.1.3.309
   *     - `{{ACS::CommandId}}`: The command ID. When you call this operation to execute a command, to specify `{{ACS::CommandId}}` as a built-in environment parameter, ensure that the Cloud Assistant Agent version is not earlier than the following versions: 
   *         - Linux: 2.2.3.309
   *         - Windows: 2.1.3.309
   * 
   * @example
   * ZWNobyAxMjM=
   */
  commandContent?: string;
  /**
   * @remarks
   * The encoding method of the command content (`CommandContent`). Valid values (case-insensitive):
   * 
   * - PlainText: no encoding. The content is transmitted in plaintext.
   * - Base64: Base64 encoding.
   * 
   * Default value: PlainText. If an invalid value is specified, it is treated as PlainText.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * Specifies whether the modified command contains custom parameters.
   * - When you enable custom parameters or modify the custom parameters `Parameters`, set this parameter to `true`.
   * - When you do not modify the custom parameters `Parameters`, do not set this parameter or set it to `false`.
   * 
   * @example
   * false
   */
  enableParameter?: boolean;
  /**
   * @remarks
   * The modified scheduled execution frequency. This parameter takes effect only when `RepeatMode` is set to `Period`. Three types of scheduled execution are supported: fixed interval execution (based on Rate expressions), one-time execution at a specified time, and clock-based scheduled execution (based on Cron expressions).
   * 
   * - Fixed interval execution: Based on Rate expressions, the command is executed at the specified time interval. The time interval can be specified in seconds (s), minutes (m), hours (h), or days (d). This is applicable to scenarios where tasks are executed at fixed intervals. Format: `rate(<interval value><interval unit>)`. For example, to execute every 5 minutes, the format is `rate(5m)`. The following limits apply to fixed interval execution:
   *     - The specified interval cannot exceed 7 days or be less than 60 seconds, and must be greater than the timeout period specified when the scheduled task was created.
   *     - The execution interval is based only on the fixed frequency and is not related to the actual time required for task execution. For example, if the command is set to execute every 5 minutes and the task takes 2 minutes to complete, the next round of execution starts 3 minutes after the task is completed.
   *     - The next execution time is calculated based on the task creation time (see [CreationTime](https://help.aliyun.com/document_detail/64840.html) returned by `DescribeInvocations`, note that this is not the modification time) and the modified execution interval.
   * 
   * - One-time execution at a specified time: The command is executed once at the specified time zone and time point. Format: `at(yyyy-MM-dd HH:mm:ss <time zone>)`, which is `at(year-month-day hour:minute:second <time zone>)`. If no time zone is specified, the default is UTC. The time zone supports the following three formats:
   *     - Full time zone name: such as `Asia/Shanghai` (China/Shanghai time) or `America/Los_Angeles` (US/Los Angeles time).
   *     - Time zone offset from Greenwich Mean Time: such as `GMT+8:00` (East 8th time zone) or `GMT-7:00` (West 7th time zone). When using the GMT format, leading zeros are not supported in the hour field.
   *     - Time zone abbreviation: Only UTC (Coordinated Universal Time) is supported.
   * 
   *   For example, to execute once at 13:15:30 on June 6, 2022 in China/Shanghai time, the format is: `at(2022-06-06 13:15:30 Asia/Shanghai)`. To execute once at 13:15:30 on June 6, 2022 in the West 7th time zone, the format is: `at(2022-06-06 13:15:30 GMT-7:00)`.
   * 
   * - Clock-based scheduled execution (based on Cron expressions): Based on Cron expressions, the command is executed according to the scheduled task settings. Format: `<seconds> <minutes> <hours> <day of month> <month> <day of week> <year (optional)> <time zone>`, which is `<Cron expression> <time zone>`. The scheduled task execution time is calculated based on the Cron expression in the specified time zone. If no time zone is specified, the default is the internal system time zone of the instance running the scheduled task. For more information about Cron expressions, see [Cron expressions](https://help.aliyun.com/document_detail/64769.html). The time zone supports the following three formats:
   *     - Full time zone name: such as `Asia/Shanghai` (China/Shanghai time) or `America/Los_Angeles` (US/Los Angeles time).
   *     - Time zone offset from Greenwich Mean Time: such as `GMT+8:00` (East 8th time zone) or `GMT-7:00` (West 7th time zone). When using the GMT format, leading zeros are not supported in the hour field.
   *     - Time zone abbreviation: Only UTC (Coordinated Universal Time) is supported.
   *   For example, to execute a command once a day at 10:15 AM in China/Shanghai time in 2022, the format is `0 15 10 ? * * 2022 Asia/Shanghai`. To execute every half hour from 10:00 AM to 11:30 AM every day in the East 8th time zone in 2022, the format is `0 0/30 10-11 * * ? 2022 GMT+8:00`. To execute every 5 minutes from 2:00 PM to 2:55 PM every day in October every two years starting from 2022 in UTC, the format is `0 0/5 14 * 10 ? 2022/2 UTC`.
   * 
   *     >The minimum time interval must be greater than or equal to the timeout period specified when the scheduled task was created, and must not be less than 10 seconds.
   */
  frequency?: string;
  /**
   * @remarks
   * The instance ID of the ECS instance or managed instance to add to the task.
   */
  instanceId?: string[];
  /**
   * @remarks
   * The command execution ID of the task to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * t-hz0jdfwd9f****
   */
  invokeId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The key-value pairs of custom parameters to modify when the command contains custom parameters.
   * 
   * The number of custom parameters ranges from 0 to 10. Note the following items:
   * 
   * - Keys cannot be empty strings and can contain up to 64 characters.
   * - Values can be empty strings.
   * - After the custom parameters and original command content are Base64-encoded, the total size of the command content cannot exceed 24 KB.
   * - The set of custom parameter names must be a subset of the parameter set defined when the command was created. For parameters that are not passed in, you can use empty strings as substitutes.
   * 
   * Default value: empty, which indicates that no custom parameter key-value pairs are modified.
   * 
   * @example
   * {"name":"Jack", "accessKey":"LTAI*************"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commandContent: 'CommandContent',
      contentEncoding: 'ContentEncoding',
      enableParameter: 'EnableParameter',
      frequency: 'Frequency',
      instanceId: 'InstanceId',
      invokeId: 'InvokeId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commandContent: 'string',
      contentEncoding: 'string',
      enableParameter: 'boolean',
      frequency: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      invokeId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      parametersShrink: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

