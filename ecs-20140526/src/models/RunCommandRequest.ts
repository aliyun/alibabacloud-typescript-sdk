// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommandRequestResourceTag extends $dara.Model {
  /**
   * @remarks
   * The tag key used to filter instances.
   * 
   * Precautions:
   * 
   * - This parameter conflicts with the InstanceId parameter. You cannot specify both parameters at the same time.
   * 
   * - If this value is specified, it cannot be an empty string.
   * 
   * - The number of instances under the tag cannot exceed the limit of InstanceId.N. If the number of instances exceeds the limit, control the number of instances by adding batch tags, such as batch: b1.
   * 
   * - The tag key can be up to 64 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
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
   * - The tag value can be up to 128 characters in length and cannot contain http:// or https://.
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

export class RunCommandRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key to use when you execute the command. If this value is specified, it cannot be an empty string.
   * 
   * When you use a single tag to filter resources, the resource count under that tag cannot exceed 1,000. When you use multiple tags to filter resources, the resource count that are attached to all specified tags cannot exceed 1,000. If the resource count exceeds 1,000, use the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the command execution. The value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
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

export class RunCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure the token is unique among different requests. **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
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
   * - When `EnableParameter=true`, you can enable the custom parameter feature in the command content:
   *     - Define custom parameters by enclosing them in `{{}}`. Spaces and line breaks before and after the parameter name within `{{}}` are ignored.
   *     - The number of custom parameters cannot exceed 20.
   *     - Custom parameter names can contain a-zA-Z0-9-_ combinations. The acs:: prefix for specifying non-built-in environment parameters is not supported. Other characters are not supported. Parameter names are case-insensitive.
   *     - Each custom parameter name cannot exceed 64 bytes.
   * 
   * - You can specify built-in environment parameters as custom parameters. When running the command, you do not need to manually assign values to these parameters because Cloud Assistant automatically replaces them with the corresponding values. The following built-in environment parameters are supported:
   *     - `{{ACS::RegionId}}`: The region ID.
   *     - `{{ACS::AccountId}}`: The UID of the Alibaba Cloud account.
   *     - `{{ACS::InstanceId}}`: The instance ID. When a command is sent to multiple instances and you want to use `{{ACS::InstanceId}}` as a built-in environment parameter, make sure Cloud Assistant Agent is at or above the following versions:
   *         - Linux: 2.2.3.309
   *         - Windows: 2.1.3.309
   *     - `{{ACS::InstanceName}}`: The instance name. When a command is sent to multiple instances and you want to use `{{ACS::InstanceName}}` as a built-in environment parameter, make sure Cloud Assistant Agent is at or above the following versions:
   *         - Linux: 2.2.3.344
   *         - Windows: 2.1.3.344
   *     - `{{ACS::InvokeId}}`: The invocation ID. To use `{{ACS::InvokeId}}` as a built-in environment parameter, make sure Cloud Assistant Agent is at or above the following versions:
   *         - Linux: 2.2.3.309
   *         - Windows: 2.1.3.309
   *     - `{{ACS::CommandId}}`: The command ID. When calling this operation to run a command and you want to use `{{ACS::CommandId}}` as a built-in environment parameter, make sure Cloud Assistant Agent is at or above the following versions: 
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
   * The container ID. Only 64-bit hexadecimal strings are supported. You can use the `docker://`, `containerd://`, or `cri-o://` prefix to specify the container runtime.
   * 
   * Precautions:
   * - If this parameter is specified, Cloud Assistant runs the script in the specified container of the instance.
   * - If this parameter is specified, the command can only run on Linux instances with Cloud Assistant Agent version 2.2.3.344 or later.
   * - If this parameter is specified, the `Username` and `WorkingDir` parameters do not take effect. The command runs only as the default container user in the default working directory of the container. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * > Only Shell scripts are supported in Linux containers. You cannot use a format such as `#!/usr/bin/python` at the beginning of the script to specify an interpreter. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
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
   * - If this parameter is specified, Cloud Assistant runs the script in the specified container of the instance.
   * - If this parameter is specified, the command can only run on Linux instances with Cloud Assistant Agent version 2.2.3.344 or later.
   * - If this parameter is specified, the `Username` and `WorkingDir` parameters do not take effect. The command runs only as the default container user in the default working directory of the container. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * > Only Shell scripts are supported in Linux containers. You cannot use a format such as `#!/usr/bin/python` at the beginning of the script to specify an interpreter. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
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
   * Default value: PlainText. If an invalid value is specified, it is treated as PlainText.
   * 
   * @example
   * Base64
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The command description. All character sets are supported. The description can be up to 512 characters in length.
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
   * The schedule for running the command. Three scheduling methods are supported: execution at fixed intervals (based on a Rate expression), one-time execution at a specified time, and clock-based scheduled execution (based on a Cron expression).
   * 
   * - Execution at fixed intervals: Based on a Rate expression, the command runs at the specified interval. The interval can be specified in seconds (s), minutes (m), hours (h), or days (d). This method is suitable for scenarios that require execution at fixed intervals. Format: `rate(<interval value><interval unit>)`. For example, to run the command every 5 minutes, use `rate(5m)`. The following limits apply to fixed-interval execution:
   *     - The interval cannot exceed 7 days or be less than 60 seconds, and must be greater than the timeout period of the scheduled task.
   *     - The interval is based on a fixed frequency and is not related to the actual execution time of the task. For example, if the command is set to run every 5 minutes and the task takes 2 minutes to complete, the next round starts 3 minutes after the task completes.
   *     - The task does not run immediately upon creation. For example, if the command is set to run every 5 minutes, it does not run immediately when the task is created. Instead, it starts running 5 minutes after the task is created.
   * 
   * - One-time execution at a specified time: Runs the command once at the specified time zone and time. Format: `at(yyyy-MM-dd HH:mm:ss <time zone>)`. If no time zone is specified, UTC is used by default. The time zone supports the following three formats:
   *     - Full time zone name: such as `Asia/Shanghai` (China/Shanghai time) or `America/Los_Angeles` (US/Los Angeles time).
   *     - GMT offset from Greenwich Mean Time: such as `GMT+8:00` (UTC+8) or `GMT-7:00` (UTC-7). When using the GMT format, leading zeros are not supported for the hour value.
   *     - Time zone abbreviation: Only UTC (Coordinated Universal Time) is supported.
   * 
   *   For example, to run the command once at 13:15:30 on June 6, 2022 in China/Shanghai time, use: `at(2022-06-06 13:15:30 Asia/Shanghai)`. To run the command once at 13:15:30 on June 6, 2022 in UTC-7, use: `at(2022-06-06 13:15:30 GMT-7:00)`.
   * 
   * - Clock-based scheduled execution (based on a Cron expression): Based on a Cron expression, the command runs according to the specified schedule. Format: `<seconds> <minutes> <hours> <day of month> <month> <day of week> <year (optional)> <time zone>`. The scheduled task execution time is calculated based on the Cron expression in the specified time zone. If no time zone is specified, the system time zone of the instance running the scheduled task is used. For more information about Cron expressions, see [Cron expressions](https://help.aliyun.com/document_detail/64769.html). The time zone supports the following three formats:
   *     - Full time zone name: such as `Asia/Shanghai` (China/Shanghai time) or `America/Los_Angeles` (US/Los Angeles time).
   *     - GMT offset from Greenwich Mean Time: such as `GMT+8:00` (UTC+8) or `GMT-7:00` (UTC-7). When using the GMT format, leading zeros are not supported for the hour value.
   *     - Time zone abbreviation: Only UTC (Coordinated Universal Time) is supported.
   *   For example, to run the command once every day at 10:15 AM in China/Shanghai time in 2022, use `0 15 10 ? * * 2022 Asia/Shanghai`. To run the command every 30 minutes from 10:00 AM to 11:30 AM every day in UTC+8 in 2022, use `0 0/30 10-11 * * ? 2022 GMT+8:00`. To run the command every 5 minutes from 2:00 PM to 2:55 PM every day in October every two years starting from 2022 in UTC, use `0 0/5 14 * 10 ? 2022/2 UTC`.
   * 
   *     > The minimum interval must be greater than or equal to the timeout period of the scheduled task and no less than 10 seconds.
   */
  frequency?: string;
  /**
   * @remarks
   * The array of ECS instance IDs. Array length: 1 to 100.
   * 
   * If any of the specified instances does not meet the conditions to execute the command, you must reselect the instances.
   * 
   * You can also request a quota increase in Quota Center (quota name: Maximum number of instances that can execute commands).
   * 
   * @example
   * i-bp185dy2o3o6neg****
   */
  instanceId?: string[];
  /**
   * @remarks
   * Specifies whether to retain the command after execution. Valid values:
   * 
   * - true: Retains the command. You can run it again by calling InvokeCommand. The command counts toward the Cloud Assistant command retention quota.
   * - false: Does not retain the command. The command is automatically deleted after execution and does not count toward the Cloud Assistant command retention quota.
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
   * The command name. All character sets are supported. The name can be up to 128 characters in length.
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
   * The key-value pairs of custom parameters to pass in when the command contains custom parameters. For example, if the command content is `echo {{name}}`, you can pass in the key-value pair `{"name":"Jack"}` through the Parameter parameter. The custom parameter automatically replaces the variable value `name`, and the actual command executed is `echo Jack`.
   * 
   * The number of custom parameters ranges from 0 to 10. Note the following items:
   * 
   * - Keys cannot be empty strings and can be up to 64 characters in length.
   * - Values can be empty strings.
   * - After the custom parameters and original command content are Base64-encoded, the total size of the command content cannot exceed 24 KB. You can use `KeepCommand` to specify whether to retain the command.
   * - The set of custom parameter names must be a subset of the parameter set defined when the command was created. For parameters that are not passed in, you can use empty strings as substitutes.
   * 
   * Default value: empty, which disables custom parameters.
   * 
   * @example
   * {"name":"Jack", "accessKey":"LTAI*************"}
   */
  parameters?: { [key: string]: any };
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
   * - Once: Runs the command immediately.
   * - Period: Runs the command on a schedule. When this parameter is set to `Period`, you must also specify the `Frequency` parameter.
   * - NextRebootOnly: Automatically runs the command the next time the instance starts.
   * - EveryReboot: Automatically runs the command each time the instance starts.
   * - DryRun: Only performs a dry run of the request. The command is not actually executed. The dry run checks request parameters, instance execution environment, and Cloud Assistant Agent status.
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
   * The ID of the resource group for the command execution. When this parameter is specified:
   * 
   * - If the ECS instance specified by InstanceId belongs to a non-default resource group, the ECS instance must belong to this resource group.
   * 
   * - You can filter command execution results by specifying this parameter (by calling [DescribeInvocations](https://help.aliyun.com/document_detail/64840.html) or [DescribeInvocationResults](https://help.aliyun.com/document_detail/64845.html)).
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags used to filter instances. Array length: 0 to 20. You can run commands in batches on instances that have the same tags without specifying InstanceId.
   */
  resourceTag?: RunCommandRequestResourceTag[];
  /**
   * @remarks
   * The tags. Array length: 0 to 20.
   */
  tag?: RunCommandRequestTag[];
  /**
   * @remarks
   * The mode for stopping the task (manual stop or timeout interruption). Valid values:
   * - Process: Stops the current script process.
   * - ProcessTree: Stops the current process tree (the collection of the script process and all child processes it created).
   * 
   * @example
   * ProcessTree
   */
  terminationMode?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. Specifying this parameter has no effect.
   * 
   * @example
   * true
   */
  timed?: boolean;
  /**
   * @remarks
   * The timeout period for command execution. Unit: seconds.
   * 
   * When a command cannot run due to process issues, missing modules, or missing Cloud Assistant Agent, a timeout occurs. When a timeout occurs, the command process is forcefully terminated.
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
   * - RunBatScript: Bat command for Windows instances.
   * - RunPowerShellScript: PowerShell command for Windows instances.
   * - RunShellScript: Shell command for Linux instances.
   * 
   * This parameter is required.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  /**
   * @remarks
   * The username for running the command on the ECS instance. The value can be up to 255 characters in length.
   * 
   * - For Linux ECS instances, the command is run as the root user by default.
   * - For Windows ECS instances, the command is run as the System user by default.
   * 
   * You can also specify another existing user on the instance to run the command. Running Cloud Assistant commands as a regular user is more secure. For more information, see [Configure a regular user to run Cloud Assistant commands](https://help.aliyun.com/document_detail/203771.html).
   * 
   * @example
   * test
   */
  username?: string;
  /**
   * @remarks
   * The name of the password for the user who executes the command on a Windows instance. The name can be up to 255 characters in length.
   * 
   * If you want to execute a command as a non-default user (System) on a Windows instance, you must specify both `Username` and this parameter. To reduce the risk of password leaks, store the plaintext password in the parameter repository of Operations Management in Settings and specify only the password name here. For more information, see [Encryption parameters](https://help.aliyun.com/document_detail/186828.html) and [Configure a regular user to execute Cloud Assistant commands](https://help.aliyun.com/document_detail/203771.html).
   * 
   * > You do not need to specify this parameter if you execute the command as the root user on a Linux instance or the System user on a Windows instance.
   * 
   * @example
   * axtSecretPassword
   */
  windowsPasswordName?: string;
  /**
   * @remarks
   * The working directory of the command on the ECS instance. The value can be up to 200 characters in length.
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
      parameters: 'Parameters',
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
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      repeatMode: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceTag: { 'type': 'array', 'itemType': RunCommandRequestResourceTag },
      tag: { 'type': 'array', 'itemType': RunCommandRequestTag },
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
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
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

