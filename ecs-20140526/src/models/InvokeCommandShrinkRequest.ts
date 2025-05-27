// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InvokeCommandShrinkRequestResourceTag } from "./InvokeCommandShrinkRequestResourceTag";
import { InvokeCommandShrinkRequestTag } from "./InvokeCommandShrinkRequestTag";


export class InvokeCommandShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The command ID. You can call the [DescribeCommands](https://help.aliyun.com/document_detail/64843.html) operation to query all available command IDs.
   * 
   * >  Common Cloud Assistant commands can be run based on their names. For more information, see [View and run common Cloud Assistant commands](https://help.aliyun.com/document_detail/429635.html).
   * 
   * This parameter is required.
   * 
   * @example
   * c-e996287206324975b5fbe1d****
   */
  commandId?: string;
  /**
   * @remarks
   * The ID of the container. Only 64-bit hexadecimal strings are supported. You can use container IDs that are prefixed with `docker://`, `containerd://`, or `cri-o://` to specify container runtimes.
   * 
   * Take note of the following items:
   * 
   * *   If this parameter is specified, Cloud Assistant runs the command in the specified container of the instance.
   * 
   * *   If this parameter is specified, the command can run only on Linux instances on which Cloud Assistant Agent 2.2.3.344 or later is installed.
   * 
   *     *   For information about how to query the version of Cloud Assistant Agent, see [Install Cloud Assistant Agent](https://help.aliyun.com/document_detail/64921.html).
   *     *   For information about how to upgrade Cloud Assistant Agent, see [Upgrade or disable upgrades for Cloud Assistant Agent](https://help.aliyun.com/document_detail/134383.html).
   * 
   * *   If this parameter is specified, the `Username` parameter that is specified in a request to call this operation and the `WorkingDir` parameter that is specified in a request to call the [CreateCommand](https://help.aliyun.com/document_detail/64844.html) operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * 
   * *   If this parameter is specified, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to `#!/usr/bin/python` at the beginning of a script to specify a script interpreter. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * 
   * @example
   * ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea****
   */
  containerId?: string;
  /**
   * @remarks
   * The name of the container.
   * 
   * Take note of the following items:
   * 
   * *   If this parameter is specified, Cloud Assistant runs the command in the specified container of the instance.
   * 
   * *   If this parameter is specified, the command can run only on Linux instances on which Cloud Assistant Agent 2.2.3.344 or later is installed.
   * 
   *     *   For information about how to query the version of Cloud Assistant Agent, see [Install Cloud Assistant Agent](https://help.aliyun.com/document_detail/64921.html).
   *     *   For information about how to upgrade Cloud Assistant Agent, see [Upgrade or disable upgrades for Cloud Assistant Agent](https://help.aliyun.com/document_detail/134383.html).
   * 
   * *   If this parameter is specified, the `Username` parameter that is specified in a request to call this operation and the `WorkingDir` parameter that is specified in a request to call the [CreateCommand](https://help.aliyun.com/document_detail/64844.html) operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * 
   * *   If this parameter is specified, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to `#!/usr/bin/python` at the beginning of a script to specify a script interpreter. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * 
   * @example
   * test-container
   */
  containerName?: string;
  /**
   * @remarks
   * The schedule on which to run the command. You can configure a command to run at a fixed interval based on a rate expression, run only once at a specific time, or run at specific times based on a cron expression.
   * 
   * *   To run a command at a fixed interval, use a rate expression to specify the interval. You can specify the interval in seconds, minutes, hours, or days. This option is suitable for scenarios in which tasks need to be executed at a fixed interval. Specify the interval in the following format: `rate(<Execution interval value><Execution interval unit>)`. For example, specify `rate(5m)` to run the command every 5 minutes. When you specify an interval, take note of the following limits:
   * 
   *     *   The interval can be anywhere from 60 seconds to 7 days, but must be longer than the timeout period of the scheduled task.
   *     *   The interval is the amount of time that elapses between two consecutive executions. The interval is irrelevant to the amount of time that is required to run the command once. For example, assume that you set the interval to 5 minutes and that it takes 2 minutes to run the command each time. Each time the command is run, the system waits 3 minutes before the system runs the command again.
   *     *   A task is not immediately executed after the task is created. For example, assume that you set the interval to 5 minutes for a task. The task begins to be executed 5 minutes after it is created.
   * 
   * *   To run a command only once at a specific time, specify a point in time and a time zone. Specify the point in time in the `at(yyyy-MM-dd HH:mm:ss <Time zone>)` format, which indicates `at(Year-Month-Day Hour:Minute:Second <Time zone>)`. If you do not specify a time zone, the Coordinated Universal Time (UTC) time zone is used by default. You can specify a time zone in the following forms:
   * 
   *     *   The time zone name. Examples: `Asia/Shanghai` and `America/Los_Angeles`.
   *     *   The time offset from GMT. Examples: `GMT+8:00` (UTC+8) and `GMT-7:00` (UTC-7). If you use the GMT format, you cannot add leading zeros to the hour value.
   *     *   The time zone abbreviation. Only UTC is supported.
   * 
   *     For example, to configure a command to run only once at 13:15:30 on June 6, 2022 (Shanghai time), set the time to `at(2022-06-06 13:15:30 Asia/Shanghai)`. To configure a command to run only once at 13:15:30 on June 6, 2022 (UTC-7), set the time to `at(2022-06-06 13:15:30 GMT-7:00)`.
   * 
   * *   To run a command at specific times, use a cron expression to define the schedule. Specify a schedule in the `<Cron expression> <Time zone>` format. The cron expression is in the `<seconds> <minutes> <hours> <day of the month> <month> <day of the week> <year (optional)>` format. The system calculates the execution times of the command based on the specified cron expression and time zone and runs the command as scheduled. If you do not specify a time zone, the system time zone of the instance on which you want to run the command is used by default. For more information about cron expressions, see [Cron expressions](https://help.aliyun.com/document_detail/64769.html). You can specify a time zone in the following forms:
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
   * The IDs of instances on which you want to run the command. You can specify up to 100 instance IDs in each request. Valid values of N: 1 to 100.
   * 
   * You can apply for a quota increase in the Quota Center console. The quota name is Maximum number of instances supported for command execution.
   * 
   * @example
   * i-bp185dy2o3o6n****
   */
  instanceId?: string[];
  /**
   * @remarks
   * The launcher for script execution. The value cannot exceed 1 KB in length.
   * 
   * @example
   * python3 -u {{ACS::ScriptFileName|Ext(".py")}}
   */
  launcher?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The key-value pairs of custom parameters to pass in when the custom parameter feature is enabled. You can specify up to 10 custom parameters.
   * 
   * *   Each key in a Map collection cannot be an empty string, and can be up to 64 characters in length.
   * *   Each value in a Map collection can be an empty string.
   * *   The size of the command after Base64 encoding, including the custom parameters and the original command content, cannot exceed 18 KB.
   * *   The custom parameter names that are specified by Parameters must be included in the custom parameter names that you specified when you created the command. You can use empty strings to represent the custom parameters that are not specified.
   * 
   * If you want to disable the custom parameter feature, you can leave this parameter empty.
   * 
   * @example
   * {"name":"Jack", "accessKey":"LTAI************"}
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
   * *   Period: runs the command based on a schedule. If you set this parameter to `Period`, you must also configure the `Frequency` parameter.
   * *   NextRebootOnly: runs the command the next time the instance is started.
   * *   EveryReboot: The command is run every time the instances start.
   * *   DryRun: Specifies whether to perform only a dry run, without performing the actual request. The command does not take effect. The system checks the request, including the request parameters, instance execution environment, and Cloud Assistant Agent running status.
   * 
   * Default value:
   * 
   * *   If you do not specify `Frequency`, the default value is `Once`.
   * *   If you specify the `Frequency` parameter, `Period` is used as the value of RepeatMode regardless of whether RepeatMode is set to Period.
   * 
   * Take note of the following items when you specify this property:
   * 
   * *   You can call the [StopInvocation](https://help.aliyun.com/document_detail/64838.html) operation to stop the pending or scheduled executions of the command.
   * *   If you set this parameter to `Period` or `EveryReboot`, you can call the [DescribeInvocationResults](https://help.aliyun.com/document_detail/64845.html) operation with `IncludeHistory` set to true to query the results of historical scheduled executions.
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
   * *   After the command is run, you can call the [DescribeInvocations](https://help.aliyun.com/document_detail/64840.html) or [DescribeInvocationResults](https://help.aliyun.com/document_detail/64845.html) operation with ResourceGroupId set to query the execution results in the specified resource group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags of the instance. If you do not specify InstanceId.N, the command is run on the instances that have the specified tags.
   */
  resourceTag?: InvokeCommandShrinkRequestResourceTag[];
  /**
   * @remarks
   * The tags of the command.
   */
  tag?: InvokeCommandShrinkRequestTag[];
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
   * *   The timeout period cannot be less than 10 seconds.
   * *   A timeout error occurs if the command cannot be run because the process slows down or because a specific module or Cloud Assistant Agent does not exist. When the specified timeout period ends, the command process is forcefully terminated.
   * *   If you do not specify this parameter, the timeout period that is specified when the command is created is used.
   * *   This timeout period is applicable only to this execution. The timeout period of the command is not modified.
   * 
   * @example
   * 60
   */
  timeout?: number;
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
   * The execution path of the command on ECS instances. The value can be up to 200 characters in length.
   * 
   * *   If you do not specify this parameter, the execution path specified when the command is created is used.
   * *   This execution path is applicable only to this task. The execution path of the command is not changed.
   * 
   * @example
   * /home/user
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commandId: 'CommandId',
      containerId: 'ContainerId',
      containerName: 'ContainerName',
      frequency: 'Frequency',
      instanceId: 'InstanceId',
      launcher: 'Launcher',
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
      username: 'Username',
      windowsPasswordName: 'WindowsPasswordName',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commandId: 'string',
      containerId: 'string',
      containerName: 'string',
      frequency: 'string',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      launcher: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      parametersShrink: 'string',
      regionId: 'string',
      repeatMode: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceTag: { 'type': 'array', 'itemType': InvokeCommandShrinkRequestResourceTag },
      tag: { 'type': 'array', 'itemType': InvokeCommandShrinkRequestTag },
      terminationMode: 'string',
      timed: 'boolean',
      timeout: 'number',
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

