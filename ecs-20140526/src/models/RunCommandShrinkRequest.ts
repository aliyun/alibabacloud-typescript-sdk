// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommandShrinkRequestResourceTag extends $dara.Model {
  /**
   * @remarks
   * The tag key used to filter instances.
   * 
   * Precautions:
   * 
   * - This parameter conflicts with the InstanceId parameter. They cannot be specified at the same time.
   * 
   * - If this value is specified, it cannot be an empty string.
   * 
   * - The number of instances under the tag cannot exceed the quantity limit of InstanceId.N. If the number of instances exceeds the limit, control the number of instances by adding batch tags, such as batch: b1.
   * 
   * - The key can be up to 64 characters in length and cannot start with aliyun or acs:, and cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value used to filter instances.
   * 
   * Precautions:
   * - The value can be an empty string.
   * - The value can be up to 128 characters in length and cannot contain http:// or https://.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command execute. If this value is specified, it cannot be an empty string.
   * 
   * When you use a single tag to filter resources, the resource count under that tag cannot exceed 1,000. When you use multiple tags to filter resources, the resource count of resources that are attached to all specified tags cannot exceed 1,000. If the resource count exceeds 1,000, use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
   * 
   * The key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the command execution. The value can be an empty string.
   * 
   * The value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The command content. The command content can be plaintext or Base64-encoded. Note the following items:
   * 
   * - The command content cannot exceed 24 KB after Base64 encoding. You can use `KeepCommand` to specify whether to retain the command.
   * - If the command content is Base64-encoded, you must set `ContentEncoding=Base64`.
   * - When `EnableParameter=true` is specified, the custom parameter feature is enabled in the command content:
   *     - Define custom parameters by enclosing them in `{{}}`. Spaces and line breaks before and after the parameter name within `{{}}` are ignored.
   *     - The number of custom parameters cannot exceed 20.
   *     - Custom parameter names can contain a-zA-Z0-9-_ combinations. The acs:: prefix for specifying non-built-in environment parameters is not supported. Other characters are not supported. Parameter names are case-insensitive.
   *     - Each custom parameter name cannot exceed 64 bytes.
   * 
   * - You can specify built-in environment parameters as custom parameters. When running the command, you do not need to manually assign values to these parameters because Cloud Assistant automatically replaces them with the corresponding values. The following built-in environment parameters are supported:
   *     - `{{ACS::RegionId}}`: The region ID.
   *     - `{{ACS::AccountId}}`: The Alibaba Cloud account ID.
   *     - `{{ACS::InstanceId}}`: The instance ID. When a command is sent to multiple instances and you want to use `{{ACS::InstanceId}}` as a built-in environment parameter, ensure that the Cloud Assistant Agent version is no earlier than:
   *         - Linux: 2.2.3.309
   *         - Windows: 2.1.3.309
   *     - `{{ACS::InstanceName}}`: The instance name. When a command is sent to multiple instances and you want to use `{{ACS::InstanceName}}` as a built-in environment parameter, ensure that the Cloud Assistant Agent version is no earlier than:
   *         - Linux: 2.2.3.344
   *         - Windows: 2.1.3.344
   *     - `{{ACS::InvokeId}}`: The invocation ID. To use `{{ACS::InvokeId}}` as a built-in environment parameter, ensure that the Cloud Assistant Agent version is no earlier than:
   *         - Linux: 2.2.3.309
   *         - Windows: 2.1.3.309
   *     - `{{ACS::CommandId}}`: The command ID. When running a command by calling this operation and you want to use `{{ACS::CommandId}}` as a built-in environment parameter, ensure that the Cloud Assistant Agent version is no earlier than: 
   *         - Linux: 2.2.3.309
   *         - Windows: 2.1.3.309
   * 
   * This parameter is required.
   * 
   * @example
   * ZWNobyAxMjM=
   */
  commandContent?: string;
  /**
   * @remarks
   * The container ID. Only 64-bit hexadecimal strings are supported. The `docker://`, `containerd://`, or `cri-o://` prefix can be used to explicitly specify the container runtime.
   * 
   * Precautions:
   * - If this parameter is specified, Cloud Assistant runs the script in the specified container on the instance.
   * - If this parameter is specified, the command can only be run on Linux instances with Cloud Assistant Agent version 2.2.3.344 or later.
   * - If this parameter is specified, the `Username` and `WorkingDir` parameters do not take effect. The command is run only as the default container user in the default working directory of the container. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * > Only Shell scripts are supported in Linux containers. Specifying an interpreter at the beginning of the script in the format of `#!/usr/bin/python` is not supported. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * 
   * @example
   * ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea****
   */
  containerId?: string;
  /**
   * @remarks
   * The container name.
   * 
   * Precautions:
   * - If this parameter is specified, Cloud Assistant runs the script in the specified container on the instance.
   * - If this parameter is specified, the command can only be run on Linux instances with Cloud Assistant Agent version 2.2.3.344 or later.
   * - If this parameter is specified, the `Username` and `WorkingDir` parameters do not take effect. The command is run only as the default container user in the default working directory of the container. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * > Only Shell scripts are supported in Linux containers. Specifying an interpreter at the beginning of the script in the format of `#!/usr/bin/python` is not supported. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * 
   * @example
   * test-container
   */
  containerName?: string;
  /**
   * @remarks
   * The encoding method of the command content (`CommandContent`). Valid values (case-insensitive):
   * 
   * - PlainText: no encoding. The content is transmitted in plaintext.
   * - Base64: Base64 encoding.
   * 
   * Default value: PlainText. Invalid values are treated as PlainText.
   * 
   * @example
   * Base64
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The command description. All character sets are supported. The description cannot exceed 512 characters in length.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the command contains custom parameters.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableParameter?: boolean;
  /**
   * @remarks
   * The schedule for running the command. Three scheduling methods are supported: execution at fixed intervals (based on Rate expressions), one-time execution at a specified time, and clock-based scheduled execution (based on Cron expressions).
   * 
   * - Execution at fixed intervals: Based on Rate expressions, the command is run at the specified interval. The interval can be specified in seconds (s), minutes (m), hours (h), or days (d). This method is applicable to scenarios where tasks are run at fixed intervals. Format: `rate(<interval value><interval unit>)`. For example, to run a command every 5 minutes, use `rate(5m)`. The following limits apply to fixed-interval execution:
   *     - The interval must be no greater than 7 days and no less than 60 seconds, and must be greater than the timeout period of the scheduled task.
   *     - The interval is based on a fixed frequency and is not related to the actual execution time of the task. For example, if a command is set to run every 5 minutes and the task takes 2 minutes to complete, the next round starts 3 minutes after the task is completed.
   *     - The task is not run immediately upon creation. For example, if a command is set to run every 5 minutes, the command is not run immediately when the task is created. Instead, execution starts 5 minutes after the task is created.
   * 
   * - One-time execution at a specified time: The command is run once at the specified time zone and time point. Format: `at(yyyy-MM-dd HH:mm:ss <time zone>)`. If no time zone is specified, UTC is used by default. The time zone supports the following three formats:
   *     - Full time zone name: such as `Asia/Shanghai` (China/Shanghai time) or `America/Los_Angeles` (US/Los Angeles time).
   *     - Time zone offset from Greenwich Mean Time: such as `GMT+8:00` (East 8th time zone) or `GMT-7:00` (West 7th time zone). When using the GMT format, leading zeros are not supported in the hour field.
   *     - Time zone abbreviation: Only UTC (Coordinated Universal Time) is supported.
   * 
   *   For example, to run a command once at 13:15:30 on June 6, 2022 in China/Shanghai time, use: `at(2022-06-06 13:15:30 Asia/Shanghai)`. To run a command once at 13:15:30 on June 6, 2022 in the West 7th time zone, use: `at(2022-06-06 13:15:30 GMT-7:00)`.
   * 
   * - Clock-based scheduled execution (based on Cron expressions): Based on Cron expressions, the command is run according to the scheduled task settings. Format: `<seconds> <minutes> <hours> <day of month> <month> <day of week> <year (optional)> <time zone>`, i.e., `<Cron expression> <time zone>`. The scheduled task execution time is calculated based on the Cron expression in the specified time zone. If no time zone is specified, the system time zone of the instance running the scheduled task is used by default. For more information about Cron expressions, see [Cron expressions](https://help.aliyun.com/document_detail/64769.html). The time zone supports the following three formats:
   *     - Full time zone name: such as `Asia/Shanghai` (China/Shanghai time) or `America/Los_Angeles` (US/Los Angeles time).
   *     - Time zone offset from Greenwich Mean Time: such as `GMT+8:00` (East 8th time zone) or `GMT-7:00` (West 7th time zone). When using the GMT format, leading zeros are not supported in the hour field.
   *     - Time zone abbreviation: Only UTC (Coordinated Universal Time) is supported.
   *   For example, to run a command once every day at 10:15 AM in China/Shanghai time in 2022, use `0 15 10 ? * * 2022 Asia/Shanghai`. To run a command every 30 minutes from 10:00 AM to 11:30 AM every day in the East 8th time zone in 2022, use `0 0/30 10-11 * * ? 2022 GMT+8:00`. To run a command every 5 minutes from 2:00 PM to 2:55 PM every day in October every two years starting from 2022 in UTC, use `0 0/5 14 * 10 ? 2022/2 UTC`.
   * 
   *     > The minimum interval must be greater than or equal to the timeout period of the scheduled task and no less than 10 seconds.
   */
  frequency?: string;
  /**
   * @remarks
   * The instance ID array of ECS instances. Array length: 1 to 100.
   * 
   * If any of the specified instances does not meet the execution conditions, you must reselect the instances.
   * 
   * You can also request a quota increase in Quota Center (quota name: Maximum number of instances supported for command execute).
   * 
   * @example
   * i-bp185dy2o3o6neg****
   */
  instanceId?: string[];
  /**
   * @remarks
   * Specifies whether to retain the command after execution. Valid values:
   * 
   * - true: retains the command. The command can be run again by calling InvokeCommand. This counts toward the Cloud Assistant command retention quota.
   * - false: does not retain the command. The command is automatically deleted after execution and does not count toward the Cloud Assistant command retention quota.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  keepCommand?: boolean;
  /**
   * @remarks
   * The bootstrap program for script execution. The value cannot exceed 1 KB in length.
   * 
   * @example
   * python3 -u {{ACS::ScriptFileName|Ext(".py")}}
   */
  launcher?: string;
  /**
   * @remarks
   * The command name. All character sets are supported. The name cannot exceed 128 characters in length.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The OSS delivery configuration for command execution output.
   * 
   * - Format: oss://${BucketName}/${Prefix}, where ${BucketName} is the name of the destination OSS bucket and ${Prefix} is the directory prefix for delivery.
   * 
   * @example
   * oss://testBucket/testPrefix
   */
  ossOutputDelivery?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The key-value pairs of custom parameters to pass in when running a command that contains custom parameters. For example, if the command content is `echo {{name}}`, you can pass in the key-value pair `{"name":"Jack"}` through the Parameter parameter. The custom parameter automatically replaces the variable value `name`, and the actual command executed is `echo Jack`.
   * 
   * The number of custom parameters ranges from 0 to 10. Note the following items:
   * 
   * - Keys cannot be empty strings and can contain up to 64 characters.
   * - Values can be empty strings.
   * - After custom parameters and the original command content are Base64-encoded, the total size cannot exceed 24 KB. You can use `KeepCommand` to specify whether to retain the command.
   * - The set of custom parameter names must be a subset of the parameter set defined when the command was created. For parameters that are not passed in, you can use empty strings as substitutes.
   * 
   * Default value: empty, which disables custom parameters.
   * 
   * @example
   * {"name":"Jack", "accessKey":"LTAI*************"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The execution mode of the command. Valid values:
   * 
   * - Once: immediately runs the command.
   * - Period: runs the command on a schedule. When this parameter is set to `Period`, you must also specify the `Frequency` parameter.
   * - NextRebootOnly: automatically runs the command the next time the instance starts.
   * - EveryReboot: automatically runs the command every time the instance starts.
   * - DryRun: performs a dry run of the request without actually running the command. Checks include request parameters, instance execution environment, and Cloud Assistant Agent running status.
   * 
   * Default values:
   * - When the `Frequency` parameter is not specified, the default value is `Once`.
   * - When the `Frequency` parameter is specified, the command is processed as `Period` regardless of whether this parameter is set.
   * 
   * Precautions:
   * - You can call [StopInvocation](https://help.aliyun.com/document_detail/64838.html) to stop a pending or scheduled command.
   * - When this parameter is set to `Period` or `EveryReboot`, you can call [DescribeInvocationResults](https://help.aliyun.com/document_detail/64845.html) and specify `IncludeHistory=true` to view the execution history of the scheduled command.
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * The resource group ID for the command execution. When this parameter is specified:
   * 
   * - If the ECS instance corresponding to InstanceId belongs to a non-default resource group, the ECS instance must belong to this resource group.
   * 
   * - You can filter the corresponding command execution results by specifying this parameter (by calling [DescribeInvocations](https://help.aliyun.com/document_detail/64840.html) or [DescribeInvocationResults](https://help.aliyun.com/document_detail/64845.html)).
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags used to filter instances. Array length: 0 to 20. You can run commands in batches on instances with the same tags without specifying InstanceId.
   */
  resourceTag?: RunCommandShrinkRequestResourceTag[];
  /**
   * @remarks
   * The tag pairs. Array length: 0 to 20.
   */
  tag?: RunCommandShrinkRequestTag[];
  /**
   * @remarks
   * The mode for stopping the task (manual stop or timeout interruption). Valid values:
   * - Process: stops the current script process.
   * - ProcessTree: stops the current process tree (the collection of the script process and all child processes it created).
   * 
   * @example
   * ProcessTree
   */
  terminationMode?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. Passing in this parameter has no effect.
   * 
   * @example
   * true
   */
  timed?: boolean;
  /**
   * @remarks
   * The timeout period for command execution. Unit: seconds.
   * 
   * A timeout occurs when a command cannot be run because of process issues, missing modules, or missing Cloud Assistant Agent. When a timeout occurs, the command process is forcefully terminated.
   * 
   * Default value: 60.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The command type. Valid values:
   * 
   * - RunBatScript: Bat commands for Windows instances.
   * - RunPowerShellScript: PowerShell commands for Windows instances.
   * - RunShellScript: Shell commands for Linux instances.
   * 
   * This parameter is required.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  /**
   * @remarks
   * The username for running the command on the ECS instance. The value cannot exceed 255 characters in length.
   * 
   * - For Linux ECS instances, commands are run as the root user by default.
   * - For Windows ECS instances, commands are run as the System user by default.
   * 
   * You can also specify another existing user on the instance to run the command. Running Cloud Assistant commands as a regular user is more secure. For more information, see [Configure a regular user to run Cloud Assistant commands](https://help.aliyun.com/document_detail/203771.html).
   * 
   * @example
   * test
   */
  username?: string;
  /**
   * @remarks
   * The name of the password for the user who executes the command on a Windows instance. The value cannot exceed 255 characters in length.
   * 
   * When you want to execute a command as a non-default user (System) on a Windows instance, you must specify both `Username` and this parameter. To reduce the risk of password leaks, store the plaintext password in the parameter repository of operations management, and pass in only the password name here. For more information, see [Encryption parameters](https://help.aliyun.com/document_detail/186828.html) and [Settings for a regular user to execute Cloud Assistant commands](https://help.aliyun.com/document_detail/203771.html).
   * 
   * > This parameter is not required when you execute commands as the root user on a Linux instance or the System user on a Windows instance.
   * 
   * @example
   * axtSecretPassword
   */
  windowsPasswordName?: string;
  /**
   * @remarks
   * The working directory of the command on the ECS instance. The value cannot exceed 200 characters in length.
   * 
   * Default values:
   * 
   * - For Linux instances, the default directory is the home directory of the root user, which is `/root`.
   * - For Windows instances, the default directory is the directory where the Cloud Assistant Agent process is located, such as `C:\\Windows\\System32`.
   * 
   * @example
   * /home/user
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commandContent: 'CommandContent',
      containerId: 'ContainerId',
      containerName: 'ContainerName',
      contentEncoding: 'ContentEncoding',
      description: 'Description',
      enableParameter: 'EnableParameter',
      frequency: 'Frequency',
      instanceId: 'InstanceId',
      keepCommand: 'KeepCommand',
      launcher: 'Launcher',
      name: 'Name',
      ossOutputDelivery: 'OssOutputDelivery',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      repeatMode: 'RepeatMode',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceTag: 'ResourceTag',
      tag: 'Tag',
      terminationMode: 'TerminationMode',
      timed: 'Timed',
      timeout: 'Timeout',
      type: 'Type',
      username: 'Username',
      windowsPasswordName: 'WindowsPasswordName',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commandContent: 'string',
      containerId: 'string',
      containerName: 'string',
      contentEncoding: 'string',
      description: 'string',
      enableParameter: 'boolean',
      frequency: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      keepCommand: 'boolean',
      launcher: 'string',
      name: 'string',
      ossOutputDelivery: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      parametersShrink: 'string',
      regionId: 'string',
      repeatMode: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceTag: { 'type': 'array', 'itemType': RunCommandShrinkRequestResourceTag },
      tag: { 'type': 'array', 'itemType': RunCommandShrinkRequestTag },
      terminationMode: 'string',
      timed: 'boolean',
      timeout: 'number',
      type: 'string',
      username: 'string',
      windowsPasswordName: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    if(Array.isArray(this.resourceTag)) {
      $dara.Model.validateArray(this.resourceTag);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

