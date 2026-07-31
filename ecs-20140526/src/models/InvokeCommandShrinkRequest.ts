// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeCommandShrinkRequestResourceTag extends $dara.Model {
  /**
   * @remarks
   * The tag key used to filter instances.
   * 
   * Usage notes:
   * 
   * - This parameter conflicts with the InstanceId parameter. You cannot specify both parameters at the same time.
   * 
   * - Valid values of N: 1 to 10. The tag key cannot be an empty string once specified.
   * 
   * - The number of instances with the specified tag cannot exceed the limit of InstanceId.N. If the number of instances exceeds the limit, control the number of instances by adding batch tags, such as batch: b1.
   * 
   * - The tag key can be up to 64 characters in length and cannot start with aliyun or acs:, or contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value used to filter instances.
   * 
   * Usage notes:
   * 
   * - Valid values of N: 1 to 10.
   * - The tag value can be an empty string.
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

export class InvokeCommandShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command execution. Valid values of N: 1 to 20. The tag key cannot be an empty string once specified.
   * 
   * If you use a single tag to filter resources, the number of resources with this tag cannot exceed 1,000. If you use multiple tags to filter resources, the number of resources that are attached with all specified tags cannot exceed 1,000. If the number of resources exceeds 1,000, execute the [ListTagResources](https://help.aliyun.com/document_detail/110425.html) operation to query resources.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the command execution. Valid values of N: 1 to 20. The tag value can be an empty string.
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

export class InvokeCommandShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The command ID. You can call [DescribeCommands](https://help.aliyun.com/document_detail/64843.html) to query all available command IDs. 
   * 
   * >You can run public commands by specifying the command name. For more information, see [View and run Cloud Assistant public commands](https://help.aliyun.com/document_detail/429635.html).
   * 
   * This parameter is required.
   * 
   * @example
   * c-e996287206324975b5fbe1d****
   */
  commandId?: string;
  /**
   * @remarks
   * The container ID. Only 64-bit hexadecimal strings are supported. Container IDs that are prefixed with `docker://`, `containerd://`, or `cri-o://` are supported to specify the container runtime.
   * 
   * Usage notes:
   * - If you specify this parameter, Cloud Assistant runs the script in the specified container of the instance.
   * - If you specify this parameter, the command can be run only on Linux instances that have Cloud Assistant Agent 2.2.3.344 or later installed.
   * 
   *     - To view the Cloud Assistant Agent version, see [Install Cloud Assistant Agent](https://help.aliyun.com/document_detail/64921.html).
   *     - To upgrade Cloud Assistant Agent, see [Upgrade or disable upgrades for Cloud Assistant Agent](https://help.aliyun.com/document_detail/134383.html).
   * 
   * - If you specify this parameter, the `Username` parameter specified in this operation and the `WorkingDir` parameter specified in [CreateCommand](https://help.aliyun.com/document_detail/64844.html) do not take effect. The command is run only by the default user in the default working directory of the container. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot use a format such as `#!/usr/bin/python` at the beginning of a script to specify an interpreter. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * 
   * @example
   * ab141ddfbacfe02d9dbc25966ed971536124527097398d419a6746873fea****
   */
  containerId?: string;
  /**
   * @remarks
   * The container name.
   * 
   * Usage notes:
   * - If you specify this parameter, Cloud Assistant runs the script in the specified container of the instance.
   * - If you specify this parameter, the command can be run only on Linux instances that have Cloud Assistant Agent 2.2.3.344 or later installed.
   * 
   *     - To view the Cloud Assistant Agent version, see [Install Cloud Assistant Agent](https://help.aliyun.com/document_detail/64921.html).
   *     - To upgrade Cloud Assistant Agent, see [Upgrade or disable upgrades for Cloud Assistant Agent](https://help.aliyun.com/document_detail/134383.html).
   * - If you specify this parameter, the `Username` parameter specified in this operation and the `WorkingDir` parameter specified in [CreateCommand](https://help.aliyun.com/document_detail/64844.html) do not take effect. The command is run only by the default user in the default working directory of the container. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot use a format such as `#!/usr/bin/python` at the beginning of a script to specify an interpreter. For more information, see [Use Cloud Assistant to run commands in containers](https://help.aliyun.com/document_detail/456641.html).
   * 
   * @example
   * test-container
   */
  containerName?: string;
  /**
   * @remarks
   * The schedule on which the command is run. Three types of scheduled execution are supported: fixed interval (Rate expression-based), one-time execution at a specified time, and clock-based scheduling (Cron expression-based).
   * 
   * - Fixed interval execution: Based on a Rate expression, the command is run at a set interval. The interval can be specified in seconds (s), minutes (m), hours (h), or days (d). This is suitable for scenarios that require execution at fixed intervals. Format: `rate(<interval value><interval unit>)`. For example, to run the command every 5 minutes, use `rate(5m)`. Fixed interval execution has the following limits:
   *     - The interval must not exceed 7 days or be less than 60 seconds, and must be greater than the timeout period of the scheduled task.
   *     - The interval is based on a fixed frequency and is unrelated to the actual execution time of the task. For example, if the command is set to run every 5 minutes and the task takes 2 minutes to complete, the next round starts 3 minutes after the task completes.
   *     - The task is not run immediately upon creation. For example, if the command is set to run every 5 minutes, it does not run immediately when the task is created. Instead, it starts running 5 minutes after the task is created.
   * 
   * - One-time execution at a specified time: The command is run once at the specified time zone and time. Format: `at(yyyy-MM-dd HH:mm:ss <time zone>)`. If no time zone is specified, UTC is used by default. The time zone can be specified in the following formats:
   *     - Full time zone name: For example, `Asia/Shanghai` or `America/Los_Angeles`.
   *     - GMT offset from Greenwich Mean Time: For example, `GMT+8:00` or `GMT-7:00`. When using the GMT format, leading zeros are not supported in the hour field.
   *     - Time zone abbreviation: Only UTC (Coordinated Universal Time) is supported.
   * 
   *   For example, to run the command once at 13:15:30 on June 6, 2022 in the Asia/Shanghai time zone, use: `at(2022-06-06 13:15:30 Asia/Shanghai)`. To run the command once at 13:15:30 on June 6, 2022 in GMT-7:00, use: `at(2022-06-06 13:15:30 GMT-7:00)`.
   * 
   * - Clock-based scheduling (Cron expression-based): Based on a Cron expression, the command is run according to the specified schedule. Format: `<seconds> <minutes> <hours> <day of month> <month> <day of week> <year (optional)> <time zone>`. The scheduled execution time is calculated based on the Cron expression in the specified time zone. If no time zone is specified, the system time zone of the instance running the scheduled task is used. For more information about Cron expressions, see [Cron expressions](https://help.aliyun.com/document_detail/64769.html). The time zone can be specified in the following formats:
   *     - Full time zone name: For example, `Asia/Shanghai` or `America/Los_Angeles`.
   *     - GMT offset from Greenwich Mean Time: For example, `GMT+8:00` or `GMT-7:00`. When using the GMT format, leading zeros are not supported in the hour field.
   *     - Time zone abbreviation: Only UTC (Coordinated Universal Time) is supported.
   *   For example, to run the command once a day at 10:15 in the Asia/Shanghai time zone in 2022, use `0 15 10 ? * * 2022 Asia/Shanghai`. To run the command every 30 minutes from 10:00 to 11:30 every day in GMT+8:00 in 2022, use `0 0/30 10-11 * * ? 2022 GMT+8:00`. To run the command every 5 minutes from 14:00 to 14:55 every day in October every two years starting from 2022 in UTC, use `0 0/5 14 * 10 ? 2022/2 UTC`.
   * 
   *     >The minimum interval must be greater than or equal to the timeout period of the scheduled task and no less than 10 seconds.
   */
  frequency?: string;
  /**
   * @remarks
   * The list of instances on which to run the command. You can specify up to 100 instance IDs. Valid values of N: 1 to 100.
   * 
   * You can also apply for a quota increase in Quota Center (quota name: Maximum number of instances supported for command execution).
   * 
   * @example
   * i-bp185dy2o3o6n****
   */
  instanceId?: string[];
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
   * The key-value pairs of custom parameters to pass in when the custom parameter feature is enabled. The number of custom parameters ranges from 0 to 10.
   * 
   * - Map keys cannot be empty strings and can be up to 64 characters in length.
   * - Map values can be empty strings.
   * - After Base64 encoding, the total length of the custom parameters and the original command content cannot exceed 18 KB.
   * - The set of custom parameter names must be a subset of the parameter set defined when the command was created. For parameters that are not passed in, you can use empty strings as substitutes.
   * 
   * You can unset this parameter to disable custom parameters.
   * 
   * @example
   * {"name":"Jack", "accessKey":"LTAI************"}
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
   * - Period: runs the command on a schedule. If you set this parameter to `Period`, you must also specify the `Frequency` parameter.
   * - NextRebootOnly: automatically runs the command the next time the instance starts.
   * - EveryReboot: automatically runs the command every time the instance starts.
   * - DryRun: performs a dry run of the request without actually running the command. The dry run checks request parameters, instance execution environment, and Cloud Assistant Agent status.
   * 
   * Default value:
   * 
   * - If you do not specify the `Frequency` parameter, the default value is `Once`.
   * - If you specify the `Frequency` parameter, the command is run on a schedule regardless of whether you set this parameter. The value is treated as `Period`.
   * 
   * Usage notes:
   * 
   * - You can call [StopInvocation](https://help.aliyun.com/document_detail/64838.html) to stop a pending or scheduled command.
   * - If you set this parameter to `Period` or `EveryReboot`, you can call [DescribeInvocationResults](https://help.aliyun.com/document_detail/64845.html) and specify `IncludeHistory=true` to view the execution history of the scheduled command.
   * 
   * @example
   * Once
   */
  repeatMode?: string;
  /**
   * @remarks
   * The ID of the resource group for the command execution. When you specify this parameter:
   * 
   * - The ECS instance specified by InstanceId must belong to this resource group if the instance is not in the default resource group.
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
   * The tags used to filter instances. You can run a command in batches on instances that have the same tag without specifying InstanceId.
   */
  resourceTag?: InvokeCommandShrinkRequestResourceTag[];
  /**
   * @remarks
   * The tags.
   */
  tag?: InvokeCommandShrinkRequestTag[];
  /**
   * @remarks
   * The mode in which the task is stopped (manually stopped or interrupted due to timeout). Valid values:
   * - Process: stops the current script process.
   * - ProcessTree: stops the current process tree (the script process and all child processes it created).
   * 
   * @example
   * ProcessTree
   */
  terminationMode?: string;
  /**
   * @remarks
   * >This parameter is deprecated and has no effect if specified.
   * 
   * @example
   * true
   */
  timed?: boolean;
  /**
   * @remarks
   * The timeout period for the command execution. Unit: seconds.
   * 
   * - The value must be at least 10 seconds.
   * 
   * - If the command cannot be run due to process issues, missing modules, or missing Cloud Assistant Agent, a timeout occurs. When a timeout occurs, the command process is forcefully terminated.
   * 
   * - If you do not specify this parameter, the timeout period specified when the command was created is used.
   * 
   * - This value applies only to the current command execution and does not change the timeout period of the command itself.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The username used to run the command on the ECS instance. The username can be up to 255 characters in length.
   * 
   * - For Linux instances, the root user is used by default.
   * - For Windows instances, the System user is used by default.
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
   * To execute a command as a non-default user (System) on a Windows instance, you must specify both `Username` and this parameter. To reduce the risk of password leaks, store the plaintext password in the parameter repository of operations management, and pass in only the password name here. For more information, see [Encryption parameters](https://help.aliyun.com/document_detail/186828.html) and [Configure a regular user to execute Cloud Assistant commands](https://help.aliyun.com/document_detail/203771.html).
   * 
   * > This parameter is not required when you use the root user on a Linux instance or the System user on a Windows instance to execute the command.
   * 
   * @example
   * axtSecretPassword
   */
  windowsPasswordName?: string;
  /**
   * @remarks
   * The directory in which the command is run on the ECS instance. The value can be up to 200 characters in length.
   * - If you do not specify this parameter, the working directory specified when the command was created is used.
   * - This value applies only to the current command execution and does not change the working directory of the command itself.
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
      ossOutputDelivery: 'string',
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

