// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommandShrinkRequestResourceTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the instance.
   * 
   * Take note of the following items:
   * 
   * *   This parameter and InstanceId.N are mutually exclusive.
   * *   The tag key cannot be an empty string.
   * *   The number of instances that have the specified tags cannot exceed 100. Otherwise, we recommend that you use batch tags, such as batch: b1, to group the instances into batches of up to 100 instances.
   * *   The tag key can be up to 64 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the instance.
   * 
   * Take note of the following items:
   * 
   * *   The tag value can be an empty string.
   * *   The tag value can be up to 128 characters in length and cannot contain http:// or https://.
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
   * The key of tag N to add to the command task. The tag key cannot be an empty string.
   * 
   * If a tag is specified to query resources, up to 1,000 resources that have this tag can be displayed in the response. If multiple tags are specified to query resources, up to 1,000 resources that have all the tags can be displayed in the response. To query more than 1,000 resources that have the specified tags, call the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the command task. The tag value can be an empty string.
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

export class RunCommandShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The content of the command. The command content can be plaintext or Base64-encoded. Take note of the following items:
   * 
   * *   If you want to retain the command, make sure that the size of the Base64-encoded command content does not exceed 18 KB. If you do not want to retain the command, make sure that the size of the Base64-encoded command content does not exceed 24 KB. You can set `KeepCommand` to specify whether to retain the command.
   * 
   * *   If the command content is Base64-encoded, set `ContentEncoding` to Base64.
   * 
   * *   If you specify `EnableParameter` to true, the custom parameter feature is enable. You can configure custom parameters based on the following rules:
   * 
   *     *   Specify custom parameters in the `{{}}` format. The spaces and line feeds before and after the parameter names within `{{}}` are ignored.
   *     *   You can specify up to 20 custom parameters.
   *     *   A custom parameter name can contain letters, digits, underscores (_), and hyphens (-). The name is case-insensitive. The ACS:: prefix cannot be used to specify non-built-in environment parameters.
   *     *   Each custom parameter name cannot exceed 64 bytes in length.
   * 
   * *   You can specify built-in environment parameters as custom parameters. When you run a command, the parameters are automatically specified by Cloud Assistant. You can specify the following built-in environment parameters:
   * 
   *     *   `{{ACS::RegionId}}`: the region ID.
   * 
   *     *   `{{ACS::AccountId}}`: the UID of the Alibaba Cloud account.
   * 
   *     *   `{{ACS::InstanceId}}`: the instance ID. If you want to run the command on multiple instances and specify `{{ACS::InstanceId}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than the following versions:
   * 
   *         *   Linux: 2.2.3.309
   *         *   Windows: 2.1.3.309
   * 
   *     *   `{{ACS::InstanceName}}`: the instance name. If you want to run the command on multiple instances and specify `{{ACS::InstanceName}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than the following versions:
   * 
   *         *   Linux: 2.2.3.344
   *         *   Windows: 2.1.3.344
   * 
   *     *   `{{ACS::InvokeId}}`: the task ID. If you want to specify `{{ACS::InvokeId}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than the following versions:
   * 
   *         *   Linux: 2.2.3.309
   *         *   Windows: 2.1.3.309
   * 
   *     *   `{{ACS::CommandId}}`: the command ID. If you want to specify `{{ACS::CommandId}}` as a built-in environment parameter, make sure that the Cloud Assistant Agent version is not earlier than the following versions:
   * 
   *         *   Linux: 2.2.3.309
   *         *   Windows: 2.1.3.309
   * 
   * This parameter is required.
   * 
   * @example
   * ZWNobyAxMjM=
   */
  commandContent?: string;
  /**
   * @remarks
   * The container ID. Only 64-bit hexadecimal strings are supported. `docker://`, `containerd://`, or `cri-o://` can be used as the prefix of the container ID to specify the container runtime.
   * 
   * Take note of the following items:
   * 
   * *   If you specify this parameter, Cloud Assistant runs the command in the specified container of the instances.
   * *   If you specify this parameter, make sure that the Cloud Assistant Agent version installed on Linux instances is 2.2.3.344 or later.
   * *   If you specify this parameter, `Username` and `WorkingDir` do not take effect. You can run the command in the default working directory of the container by using only the default user of the container. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * 
   * >  Only shell scripts can run in Linux containers. You cannot add a command whose format is similar to `#!/usr/bin/python` at the beginning of a script to specify a script interpreter. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * 
   * @example
   * ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea****
   */
  containerId?: string;
  /**
   * @remarks
   * The container name.
   * 
   * Take note of the following items:
   * 
   * *   If you specify this parameter, Cloud Assistant runs the command in the specified container of the instances.
   * *   If you specify this parameter, make sure that the Cloud Assistant Agent version installed on Linux instances is 2.2.3.344 or later.
   * *   If you specify this parameter, `Username` and `WorkingDir` do not take effect. You can run the command in the default working directory of the container by using only the default user of the container. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * 
   * >  Only shell scripts can run in Linux containers. You cannot add a command whose format is similar to `#!/usr/bin/python` at the beginning of a script to specify a script interpreter. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * 
   * @example
   * test-container
   */
  containerName?: string;
  /**
   * @remarks
   * The encoding mode of command content (`CommandContent`). The valid values are case-insensitive. Valid values:
   * 
   * *   PlainText: The command content is not encoded.
   * *   Base64: The command content is encoded in Base64.
   * 
   * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
   * 
   * @example
   * Base64
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The description of the command. The description supports all character sets and can be up to 512 characters in length.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to include custom parameters in the command.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableParameter?: boolean;
  /**
   * @remarks
   * The schedule on which to run the command. You can configure a command to run at a fixed interval based on a rate expression, run only once at a specified time, or run at designated times based on a cron expression.
   * 
   * *   To run a command at a fixed interval, use a rate expression to specify the interval. You can specify the interval in seconds, minutes, hours, or days. This option is suitable for scenarios in which tasks need to be executed at a fixed interval. Specify the interval in the following format: `rate(<Execution interval value> <Execution interval unit>)`. For example, specify `rate(5m)` to run the command every 5 minutes. When you specify an interval, take note of the following limits:
   * 
   *     *   The interval can be anywhere from 60 seconds to 7 days, but must be longer than the timeout period of the scheduled task.
   *     *   The interval is the amount of time that elapses between two consecutive executions. The interval is irrelevant to the amount of time that is required to run the command once. For example, assume that you set the interval to 5 minutes and that it takes 2 minutes to run the command each time. Each time the command is run, the system waits 3 minutes before the system runs the command again.
   *     *   A task is not immediately executed after the task is created. For example, assume that you set the interval to 5 minutes for a task. The task begins to be executed 5 minutes after it is created.
   * 
   * *   To run a command only once at a specific time, specify a point in time and a time zone. Specify the point in time in the `at(yyyy-MM-dd HH:mm:ss <Time zone>)` format, which indicates `at(Year-Month-Day Hour:Minute:Second <Time zone>)`. If you do not specify a time zone, the UTC time zone is used by default. You can specify the time zone in the following forms:
   * 
   *     *   The time zone name. Examples: `Asia/Shanghai` and `America/Los_Angeles`.
   *     *   The time offset from GMT. Examples: `GMT+8:00` (UTC+8) and `GMT-7:00` (UTC-7). If you use the GMT format, you cannot add leading zeros to the hour value.
   *     *   The time zone abbreviation. Only UTC is supported.
   * 
   *     For example, to configure a command to run only once at 13:15:30 on June 6, 2022 (Shanghai time), set the time to `at(2022-06-06 13:15:30 Asia/Shanghai)`. To configure a command to run only once at 13:15:30 on June 6, 2022 (UTC-7), set the time to `at(2022-06-06 13:15:30 GMT-7:00)`.
   * 
   * *   To run a command at specific times, use a cron expression to define the schedule. Specify a schedule in the `<Cron expression> <Time zone>` format. The cron expression is in the `<seconds> <minutes> <hours> <day of the month> <month> <day of the week> <year (optional)>` format. The system calculates the execution times of the command based on the specified cron expression and time zone and runs the command as scheduled. If you do not specify a time zone, the system time zone of the instance on which you want to run the command is used by default. For more information about cron expressions, see [Cron expressions](https://help.aliyun.com/document_detail/64769.html). You can specify the time zone in the following forms:
   * 
   *     *   The time zone name. Examples: `Asia/Shanghai` and `America/Los_Angeles`.
   *     *   The time offset from GMT. Examples: `GMT+8:00` (UTC+8) and `GMT-7:00` (UTC-7). If you use the GMT format, you cannot add leading zeros to the hour value.
   *     *   The time zone abbreviation. Only UTC is supported. For example, to configure a command to run at 10:15:00 every day in 2022 (Shanghai time), set the schedule to `0 15 10 ? * * 2022 Asia/Shanghai`. To configure a command to run every half an hour from 10:00:00 to 11:30:00 every day in 2022 (UTC+8), set the schedule to `0 0/30 10-11 * * ? 2022 GMT+8:00`. To configure a command to run every 5 minutes from 14:00:00 to 14:55:00 every October every two years from 2022 in UTC, set the schedule to `0 0/5 14 * 10 ? 2022/2 UTC`.
   * 
   *     **
   * 
   *     **Note** The minimum interval must be 10 seconds or more and cannot be shorter than the timeout period of scheduled executions.
   */
  frequency?: string;
  /**
   * @remarks
   * The IDs of instances on which to create and run the command. Specify at least one instance ID. You can specify up to 100 instance IDs.
   * 
   * If one of the specified instances does not meet the conditions for running the command, the call fails. To ensure that the call is successful, specify only the IDs of instances that meet the conditions.
   * 
   * You can request a quota increase in the Quota Center console. The quota name is Maximum number of instances supported for command execution.
   * 
   * @example
   * i-bp185dy2o3o6neg****
   */
  instanceId?: string[];
  /**
   * @remarks
   * Specifies whether to retain the command after the command is run. Valid values:
   * 
   * *   true: retains the command. Then, you can call the InvokeCommand operation to rerun the command. The retained command counts against the quota of Cloud Assistant commands.
   * *   false: does not retain the command. The command is automatically deleted after it is run and does not count against the quota of Cloud Assistant commands.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  keepCommand?: boolean;
  /**
   * @remarks
   * The launcher for script execution. The value cannot exceed 1 KB in length.
   * 
   * @example
   * python3 -u {{ACS::ScriptFileName|Ext(".py")}}
   */
  launcher?: string;
  /**
   * @remarks
   * The name of the command. The name supports all character sets and can be up to 128 characters in length.
   * 
   * @example
   * testName
   */
  name?: string;
  ossOutputDelivery?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The key-value pairs of custom parameters to pass in when the command can include custom parameters. For example, the command content is `echo {{name}}`. You can use `Parameters` to pass in the `{"name":"Jack"}` key-value pair. The `name` key of the custom parameter is automatically replaced by the paired Jack value to generate a new command. As a result, the `echo Jack` command is run.
   * 
   * You can specify 0 to 10 custom parameters. Take note of the following items:
   * 
   * *   The key of a custom parameter can be up to 64 characters in length and cannot be an empty string.
   * *   The value of a custom parameter can be an empty string.
   * *   If you want to retain a command, make sure that the command after Base64 encoding, including custom parameters and original command content, does not exceed 18 KB in size. If you do not want to retain the command, make sure that the command after Base64 encoding does not exceed 24 KB in size. You can set `KeepCommand` to specify whether to retain the command.
   * *   The custom parameter names that are specified by Parameters must be included in the custom parameter names that you specified when you created the command. You can use empty strings to represent the parameters that are not passed in.
   * 
   * This parameter is left empty by default, which indicates that the custom parameter feature is disabled.
   * 
   * @example
   * {"name":"Jack", "accessKey":"LTAI*************"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID of the command. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies how to run the command. Valid values:
   * 
   * *   Once: immediately runs the command.
   * *   Period: runs the command based on a schedule. If you set this parameter to `Period`, you must specify `Frequency`.
   * *   NextRebootOnly: runs the command the next time the instances start.
   * *   EveryReboot: runs the command every time the instances start.
   * *   DryRun: performs only a dry run, without running the actual command. The system checks the request parameters, the execution environments on the instances, and the status of Cloud Assistant Agent.
   * 
   * Default value:
   * 
   * *   If you do not specify `Frequency`, the default value is `Once`.
   * *   If you specify `Frequency`, RepeatMode is set to `Period` regardless of whether a value is already specified for RepeatMode.
   * 
   * Take note of the following items:
   * 
   * *   You can call the [StopInvocation](https://help.aliyun.com/document_detail/64838.html) operation to stop the pending or scheduled executions of the command.
   * *   If you set this parameter to `Period` or `EveryReboot`, you can call the [DescribeInvocationResults](https://help.aliyun.com/document_detail/64845.html) operation with `IncludeHistory` set to true to query the historical scheduled executions.
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the command executions. When you set this parameter, take note of the following items:
   * 
   * *   The instances specified by InstanceId.N must belong to the specified resource group.
   * *   After the command is run, you can set this parameter to call the [DescribeInvocations](https://help.aliyun.com/document_detail/64840.html) or [DescribeInvocationResults](https://help.aliyun.com/document_detail/64845.html) operation to query the execution results in the specified resource group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the instance. You can leave this parameter empty or specify up to 20 tags. If you do not specify InstanceId, the command is run on instances that have the specified tags.
   */
  resourceTag?: RunCommandShrinkRequestResourceTag[];
  /**
   * @remarks
   * The tags to add to the command task. You can leave this parameter empty or specify up to 20 tags.
   */
  tag?: RunCommandShrinkRequestTag[];
  /**
   * @remarks
   * Specifies how to stop the command task when a command execution is manually stopped or times out. Valid values:
   * 
   * *   Process: stops the process of the command.
   * *   ProcessTree: stops the process tree of the command. In this case, the process of the command and all subprocesses of the process are stopped.
   * 
   * @example
   * ProcessTree
   */
  terminationMode?: string;
  /**
   * @remarks
   * >  This parameter is no longer used and does not take effect.
   * 
   * @example
   * true
   */
  timed?: boolean;
  /**
   * @remarks
   * The timeout period for the command execution. Unit: seconds.
   * 
   * A timeout error occurs if the command cannot be run because the process slows down or because a specific module or Cloud Assistant Agent does not exist. When an execution times out, the command process is forcefully terminated.
   * 
   * Default value: 60.
   * 
   * @example
   * 3600
   */
  timeout?: number;
  /**
   * @remarks
   * The type of the command. Valid values:
   * 
   * *   RunBatScript: batch command, applicable to Windows instances.
   * *   RunPowerShellScript: PowerShell command, applicable to Windows instances.
   * *   RunShellScript: shell command, applicable to Linux instances.
   * 
   * This parameter is required.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  /**
   * @remarks
   * The username to use to run the command on the ECS instances. The username cannot exceed 255 characters in length.
   * 
   * *   For Linux instances, the root username is used by default.
   * *   For Windows instances, the System username is used by default.
   * 
   * You can also specify other usernames that already exist in the instances to run the command. For security purposes, we recommend that you run Cloud Assistant commands as a regular user. For more information, see [Run Cloud Assistant commands as a regular user](https://help.aliyun.com/document_detail/203771.html).
   * 
   * @example
   * test
   */
  username?: string;
  /**
   * @remarks
   * The name of the password to use to run the command on a Windows instance. The name cannot exceed 255 characters in length.
   * 
   * If you do not want to use the default System user to run the command on Windows instances, specify both WindowsPasswordName and `Username`. To mitigate the risk of password leaks, the password is stored in plaintext in CloudOps Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName. For more information, see [Manage encryption parameters](https://help.aliyun.com/document_detail/186828.html) and [Run Cloud Assistant commands as a regular user](https://help.aliyun.com/document_detail/203771.html).
   * 
   * >  If you use the root username for Linux instances or the System username for Windows instances to run the command, you do not need to specify WindowsPasswordName.
   * 
   * @example
   * axtSecretPassword
   */
  windowsPasswordName?: string;
  /**
   * @remarks
   * The working directory of the command on the instance. The value can be up to 200 characters in length.
   * 
   * Default values:
   * 
   * *   For Linux instances, the default value is `/root`, which is the home directory of the administrator (the root user).
   * *   For Windows instances, the default value is the directory where the Cloud Assistant Agent process resides, such as `C:\\Windows\\System32`.
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

