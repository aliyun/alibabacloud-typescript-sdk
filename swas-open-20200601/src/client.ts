// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AttachKeyPairResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The simple application server ID.
   * 
   * @example
   * aa6e71ddb35c46679bc4753d6219d604
   */
  instanceId?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the key pair is bound to the simple application server successfully. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommandRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N that you want to add to the command. Valid values of N: 1 to 20.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that you want to add to the command. Valid values of N: 1 to 20.
   * 
   * The tag value can be an empty string. The tag value can be up to 64 characters in length and cannot contain http:// or https://.
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

export class CreateCustomImageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N that you want to add to the custom image. Valid values of N: 1 to 20.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that you want to add to the custom image. Valid values of N: 1 to 20.
   * 
   * The tag value can be an empty string. The tag value can be up to 64 characters in length and cannot contain http:// or https://.
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

export class CreateFirewallRulesRequestFirewallRules extends $dara.Model {
  /**
   * @remarks
   * The port number.
   * 
   * *   When the transport layer protocol is TCP and/or UDP, the port number range is 1 to 65535. Specify a port range in the format of \\<Start port number>/\\<End port number>. Example: 1/200.
   * *   When the transport layer protocol is ICMP, the port number range is -1/-1, which indicates all ports.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The description of the firewall rule.
   * 
   * @example
   * TEST
   */
  remark?: string;
  /**
   * @remarks
   * The transport layer protocol. Valid values:
   * 
   * *   TCP
   * *   UDP
   * *   TCP+UDP
   * *   ICMP
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  /**
   * @remarks
   * The IP address or CIDR block that is allowed in the firewall rule.
   * 
   * @example
   * 47.101.XX.XX
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      remark: 'Remark',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'string',
      remark: 'string',
      ruleProtocol: 'string',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallRulesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: 1 to 20.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20.
   * 
   * The tag value can be an empty string. The tag value can be up to 64 characters in length and cannot contain http:// or https://.
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

export class CreateFirewallRulesShrinkRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: 1 to 20.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20.
   * 
   * The tag value can be an empty string. The tag value can be up to 64 characters in length and cannot contain http:// or https://.
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

export class CreateFirewallTemplateRequestFirewallRule extends $dara.Model {
  /**
   * @remarks
   * The port range. Valid values: 1 to 65535. Specify a port range in the format of \\<start port number>/\\<end port number>. Example: `1024/1055`, which indicates that the port range of 1024 to 1055.
   * 
   * >  If you set RuleProtocol to ICMP, you must set Port to -1/-1.
   * 
   * This parameter is required.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The remarks of the firewall rule.
   */
  remark?: string;
  /**
   * @remarks
   * The transport layer protocol that the rule supports. Valid values:
   * 
   * *   TCP
   * *   UDP
   * *   TCP+UDP
   * *   ICMP
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  /**
   * @remarks
   * The source address to which you want to grant access permissions. CIDR blocks and IPv4 addresses are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 223.166.XX.XX
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      remark: 'Remark',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'string',
      remark: 'string',
      ruleProtocol: 'string',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallTemplateRulesRequestFirewallRule extends $dara.Model {
  /**
   * @remarks
   * The port range. Valid values: 1 to 65535. Specify a port range in the format of \\<start port number>/\\<end port number>. Example: `1024/1055`, which indicates that the port range of 1024 to 1055.
   * 
   * >  If you set RuleProtocol to ICMP, you must set Port to -1/-1.
   * 
   * This parameter is required.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The remarks of the firewall rule.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The transport layer protocol that the rule supports. Valid values:
   * 
   * *   TCP
   * *   UDP
   * *   TCP+UDP
   * *   ICMP
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  /**
   * @remarks
   * The source address to which you want to grant access permissions. CIDR blocks and IPv4 addresses are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 222.70.XX.XX
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      remark: 'Remark',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'string',
      remark: 'string',
      ruleProtocol: 'string',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallTemplateRulesResponseBodyFirewallTemplateRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the firewall template rule.
   * 
   * @example
   * ft-bcf1a7hrdq717****
   */
  firewallTemplateRuleId?: string;
  /**
   * @remarks
   * The port range. Valid values: 1 to 65535. Specify a port range in the format of \\<start port number>/\\<end port number>. Example: `1024/1055`, which indicates that the port range of 1024 to 1055.
   * 
   * >  If you set RuleProtocol to ICMP, you must set Port to -1/-1.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The remarks of the firewall rule.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The transport layer protocol that the rule supports. Valid values:
   * 
   * *   TCP
   * *   UDP
   * *   TCP+UDP
   * *   ICMP: the ICMP protocol
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  /**
   * @remarks
   * The source address to which you want to grant access permissions. CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 171.233.XX.XX
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      firewallTemplateRuleId: 'FirewallTemplateRuleId',
      port: 'Port',
      remark: 'Remark',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallTemplateRuleId: 'string',
      port: 'string',
      remark: 'string',
      ruleProtocol: 'string',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag to add to the snapshot. Valid values of N: 1 to 20.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to add to the snapshot. Valid values of N: 1 to 20.
   * 
   * The tag value can be an empty string. The tag value can be up to 64 characters in length and cannot contain http:// or https://.
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

export class DescribeCloudAssistantAttributesResponseBodyCloudAssistant extends $dara.Model {
  /**
   * @remarks
   * The number of active tasks in Command Assistant.
   * 
   * @example
   * 0
   */
  activeTaskCount?: number;
  /**
   * @remarks
   * Indicates whether Command Assistant is running. Valid values:
   * 
   * true: Heartbeats are detected in the last 2 minutes.
   * 
   * false: Heartbeats are not detected in the last 2 minutes.
   * 
   * @example
   * true
   */
  cloudAssistantStatus?: string;
  /**
   * @remarks
   * The version number of the Command Assistant agent. Null is returned if the Command Assistant agent is not installed or is not running.
   * 
   * @example
   * 2.2.0.106
   */
  cloudAssistantVersion?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * 85dbe3e7cc7b49e1a3df4af3bfa4ebbf
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of completed tasks in Command Assistant.
   * 
   * @example
   * 4
   */
  invocationCount?: number;
  /**
   * @remarks
   * The time when the last heartbeat of Command Assistant was detected. The value is updated every minute on average. The interval can be 55, 60, or 65 seconds.
   * 
   * @example
   * 2021-03-15T09:00:00Z
   */
  lastHeartbeatTime?: string;
  /**
   * @remarks
   * The time when commands were last run.
   * 
   * @example
   * 2021-03-15T08:00:00Z
   */
  lastInvokedTime?: string;
  /**
   * @remarks
   * The OS type of the simple application server. Valid values:
   * 
   * *   Windows
   * *   Linux
   * *   FreeBSD
   * 
   * @example
   * Linux
   */
  OSType?: string;
  /**
   * @remarks
   * Indicates whether Command Assistant supports session management. If Command Assistant does not support session management, the version of the Command Assistant agent is too earlier. We recommend that you update your Command Assistant agent to the latest version.
   * 
   * To use the session management feature, you must make sure that the version of your Command Assistant agent meets one of the following requirements:
   * 
   * If your simple application server runs Linux, the version of the Command Assistant agent on the server must be 2.2.3.189 or later. If your simple application server runs Windows, the version of the Command Assistant agent on the server must be 2.1.3.189 or later.
   * 
   * @example
   * true
   */
  supportSessionManager?: boolean;
  static names(): { [key: string]: string } {
    return {
      activeTaskCount: 'ActiveTaskCount',
      cloudAssistantStatus: 'CloudAssistantStatus',
      cloudAssistantVersion: 'CloudAssistantVersion',
      instanceId: 'InstanceId',
      invocationCount: 'InvocationCount',
      lastHeartbeatTime: 'LastHeartbeatTime',
      lastInvokedTime: 'LastInvokedTime',
      OSType: 'OSType',
      supportSessionManager: 'SupportSessionManager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTaskCount: 'number',
      cloudAssistantStatus: 'string',
      cloudAssistantVersion: 'string',
      instanceId: 'string',
      invocationCount: 'number',
      lastHeartbeatTime: 'string',
      lastInvokedTime: 'string',
      OSType: 'string',
      supportSessionManager: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantStatusResponseBodyCloudAssistantStatus extends $dara.Model {
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the Cloud Assistant client is installed on the server.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudMonitorAgentStatusesResponseBodyInstanceStatusList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Cloud Monitor agent was automatically installed on the simple application server. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * true
   */
  autoInstall?: boolean;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * c854dc6f07e74953830bb5808d0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The running status of the Cloud Monitoring plug-in. Possible values are:
   * 
   * - running: Cloud Monitoring plug-in running.
   * - stopped: Cloud Monitoring plug-in stopped.
   * - installing: Cloud Monitoring plug-in installing.
   * - install_faild: Cloud Monitoring plug-in installation failed.
   * - abnormal: Cloud Monitoring plug-in installation abnormal.
   * - not_installed: Cloud Monitoring plug-in not installed.
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandInvocationsResponseBodyCommandInvocationsInvokeInstances extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the command failed to be sent or run.
   * 
   * *   null: The command is run as expected.
   * *   InstanceNotExists: The specified instance does not exist or is released.
   * *   InstanceReleased: The instance is released when the command is being run.
   * *   InstanceNotRunning: The instance is not in the Running state when the command is being run.
   * *   CommandNotApplicable: The command is not applicable to the specified instance.
   * *   AccountNotExists: The specified account does not exist.
   * *   DirectoryNotExists: The specified directory does not exist.
   * *   BadCronExpression: The specified CRON expression for the execution schedule is invalid.
   * *   ClientNotRunning: Cloud Assistant Agent is not running.
   * *   ClientNotResponse: Cloud Assistant Agent does not respond to your request.
   * *   ClientIsUpgrading: Cloud Assistant Agent is being updated.
   * *   ClientNeedUpgrade: Cloud Assistant Agent needs to be updated.
   * *   DeliveryTimeout: The request to send the command timed out.
   * *   ExecutionTimeout: The command execution timed out.
   * *   ExecutionException: An exception occurred when the command was being run.
   * *   ExecutionInterrupted: The command execution is interrupted.
   * *   ExitCodeNonzero: The command execution is complete, and the exit code is not 0.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the command failed to be sent or run. Valid values:
   * 
   * *   null: The command is run as expected.
   * *   the specified instance does not exists: The specified instance does not exist or is released.
   * *   the instance has released when create task: The instance is released when the command is being run.
   * *   the instance is not running when create task: The instance is not in the Running state when the command is being run.
   * *   the command is not applicable: The command is not applicable to the specified instance.
   * *   the specified account does not exists: The specified account does not exist.
   * *   the specified directory does not exists: The specified directory does not exist.
   * *   the cron job expression is invalid: The specified CRON expression for the execution schedule is invalid.
   * *   the aliyun service is not running on the instance: Cloud Assistant Agent is not running.
   * *   the aliyun service in the instance does not response: Cloud Assistant Agent does not respond to your request.
   * *   the aliyun service in the instance is upgrading now: Cloud Assistant Agent is being updated.
   * *   the aliyun service in the instance need upgrade: Cloud Assistant Agent needs to be updated.
   * *   the command delivery has been timeout: The request to send the command timed out.
   * *   the command execution has been timeout: The command execution timed out.
   * *   the command execution got an exception: An exception occurred when the command was being run.
   * *   the command execution has been interrupted: The command execution is interrupted.
   * *   the command execution exit code is not zero: The command execution is complete, and the exit code is not 0.
   * 
   * @example
   * the specified instance does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The exit code of the command.
   * 
   * *   For Linux instances, the exit code is the exit code of the shell command.
   * *   For Windows instances, the exit code is the exit code of the batch or PowerShell command.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The end of the time range during which the command is run on the instance.
   * 
   * @example
   * 2023-04-03T02:42:29Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * 2445f4aecdac4b71ba2c7e3a7ccf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The execution state of the command on a single instance. Valid values:
   * 
   * *   Pending: The command is being verified or sent.
   * 
   * *   Invalid: The specified command type or parameter is invalid.
   * 
   * *   Aborted: The command failed to be sent to the instance. To send a command to an instance, make sure that the instance is in the Running state and the command is sent to the instance within 1 minute.
   * 
   * *   Running: The command is being run on the instance.
   * 
   * *   Success:
   * 
   *     *   Command that is set to run only once: The command execution is complete, and the exit code is 0.
   *     *   Command that is set to run on a schedule: The previous command execution is complete, the exit code is 0, and the specified cycle ends.
   * 
   * *   Failed:
   * 
   *     *   Command that is set to run only once: The command execution is complete, and the exit code is not 0.
   *     *   Command that is set to run on a schedule: The previous command execution is complete, the exit code is not 0, and the specified cycle is about to end.
   * 
   * *   Error: The command execution cannot proceed due to an exception.
   * 
   * *   Timeout: The command execution timed out.
   * 
   * *   Cancelled: The command execution is canceled, and the command is not started.
   * 
   * *   Stopping: The command task is being stopped.
   * 
   * *   Terminated: The command is terminated when it is being run.
   * 
   * @example
   * Running
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The command output.
   * 
   * @example
   * OutputMsg
   */
  output?: string;
  /**
   * @remarks
   * The beginning of the time range during which the command is run on the instance.
   * 
   * @example
   * 2023-05-09T03:32:24Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      output: 'Output',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishTime: 'string',
      instanceId: 'string',
      invocationStatus: 'string',
      output: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandInvocationsResponseBodyCommandInvocations extends $dara.Model {
  /**
   * @remarks
   * The content of the command.
   * 
   * @example
   * echo 123
   */
  commandContent?: string;
  /**
   * @remarks
   * The description of the command.
   * 
   * @example
   * testDescription
   */
  commandDescription?: string;
  /**
   * @remarks
   * The command ID.
   * 
   * @example
   * c-hy0338xh28r****
   */
  commandId?: string;
  /**
   * @remarks
   * The command name.
   * 
   * @example
   * testCommandName
   */
  commandName?: string;
  /**
   * @remarks
   * The command type.
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The time when the command was created.
   * 
   * @example
   * 2023-04-27T10:11:58
   */
  creationTime?: string;
  /**
   * @remarks
   * The overall execution state of the command. Valid values:
   * 
   * *   Pending: The command is being verified or sent.
   * *   Invalid: The specified command type or parameter is invalid.
   * *   Aborted: The command failed to be sent to the instances. To send a command to an instance, make sure that the instance is in the Running state and the command is sent to the instance within 1 minute.
   * *   Running: The command is being run on the instances.
   * *   Success: The command execution is complete, and the exit code is 0.
   * *   Failed: The command execution is complete, and the exit code is not 0.
   * *   Error: The command execution cannot proceed due to an exception.
   * *   Timeout: The command execution timed out.
   * *   Cancelled: The command execution is canceled, and the command is not started.
   * *   Stopping: The command in the Running state is being stopped.
   * *   Terminated: The command is terminated when it is being run.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The execution ID of the command.
   * 
   * @example
   * t-hz0373jyzxt****
   */
  invokeId?: string;
  /**
   * @remarks
   * The instances on which the command is run.
   */
  invokeInstances?: DescribeCommandInvocationsResponseBodyCommandInvocationsInvokeInstances[];
  /**
   * @remarks
   * The custom parameters in the command. If no custom parameter exists in the command, the default value is {}.
   * 
   * @example
   * {}
   */
  parameters?: string;
  /**
   * @remarks
   * The timeout period. Unit: seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The username that is used to run the command.
   * 
   * @example
   * root
   */
  username?: string;
  /**
   * @remarks
   * The working directory of the command.
   * 
   * @example
   * c:\\wwwroot
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandDescription: 'CommandDescription',
      commandId: 'CommandId',
      commandName: 'CommandName',
      commandType: 'CommandType',
      creationTime: 'CreationTime',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeInstances: 'InvokeInstances',
      parameters: 'Parameters',
      timeout: 'Timeout',
      username: 'Username',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandDescription: 'string',
      commandId: 'string',
      commandName: 'string',
      commandType: 'string',
      creationTime: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeInstances: { 'type': 'array', 'itemType': DescribeCommandInvocationsResponseBodyCommandInvocationsInvokeInstances },
      parameters: 'string',
      timeout: 'number',
      username: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.invokeInstances)) {
      $dara.Model.validateArray(this.invokeInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command. A tag key can be 1 to 64 characters in length. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the command. A tag value can be up to 64 characters in length. Valid values of N: 1 to 20.
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

export class DescribeCommandsResponseBodyCommandsParameterDefinitions extends $dara.Model {
  /**
   * @remarks
   * The default value of the custom parameter.
   * 
   * @example
   * https://aliyun-client-assist.oss-accelerate.aliyuncs.com/linux/aliyun_assist_latest.rpm
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description of the custom parameter.
   * 
   * @example
   * Command Assistant Agent Installation Package Path
   */
  description?: string;
  /**
   * @remarks
   * The name of the custom parameter.
   * 
   * @example
   * DownloadUrl
   */
  parameterName?: string;
  /**
   * @remarks
   * The valid values of the custom parameter.
   */
  possibleValues?: string[];
  /**
   * @remarks
   * Indicates whether the custom parameter is required. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      parameterName: 'ParameterName',
      possibleValues: 'PossibleValues',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      parameterName: 'string',
      possibleValues: { 'type': 'array', 'itemType': 'string' },
      required: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.possibleValues)) {
      $dara.Model.validateArray(this.possibleValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponseBodyCommandsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the command.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the command.
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

export class DescribeCommandsResponseBodyCommands extends $dara.Model {
  /**
   * @remarks
   * The content of the command.
   * 
   * @example
   * cat /etc/ssh/sshd_config
   */
  commandContent?: string;
  /**
   * @remarks
   * The command ID.
   * 
   * @example
   * c-gov1k1tqwi9****
   */
  commandId?: string;
  /**
   * @remarks
   * The time when the command was created.
   * 
   * @example
   * 2023-01-05T06:38:53Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the command.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the custom parameter feature is enabled for the command.
   * 
   * @example
   * false
   */
  enableParameter?: boolean;
  /**
   * @remarks
   * The name of the command.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * Details of the custom parameter.
   */
  parameterDefinitions?: DescribeCommandsResponseBodyCommandsParameterDefinitions[];
  /**
   * @remarks
   * The custom parameter names that are parsed from the command content specified when the command was created. The custom parameter names are returned in the list format. If the custom parameter feature is disabled, an empty list is returned.
   */
  parameterNames?: string[];
  /**
   * @remarks
   * The provider of the command.
   * 
   * @example
   * User
   */
  provider?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags that are bound to the command.
   */
  tags?: DescribeCommandsResponseBodyCommandsTags[];
  /**
   * @remarks
   * The timeout period of the command.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The type of the command.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  /**
   * @remarks
   * The execution path of the command.
   * 
   * @example
   * /home
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandId: 'CommandId',
      creationTime: 'CreationTime',
      description: 'Description',
      enableParameter: 'EnableParameter',
      name: 'Name',
      parameterDefinitions: 'ParameterDefinitions',
      parameterNames: 'ParameterNames',
      provider: 'Provider',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      timeout: 'Timeout',
      type: 'Type',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandId: 'string',
      creationTime: 'string',
      description: 'string',
      enableParameter: 'boolean',
      name: 'string',
      parameterDefinitions: { 'type': 'array', 'itemType': DescribeCommandsResponseBodyCommandsParameterDefinitions },
      parameterNames: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeCommandsResponseBodyCommandsTags },
      timeout: 'number',
      type: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterDefinitions)) {
      $dara.Model.validateArray(this.parameterDefinitions);
    }
    if(Array.isArray(this.parameterNames)) {
      $dara.Model.validateArray(this.parameterNames);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseErrorLogsResponseBodyErrorLogs extends $dara.Model {
  /**
   * @remarks
   * The time when the resource was created. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-08T12:11:04Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * spid52 DBCC TRACEON 3499, server process ID (SPID) 52. This is an informational message only; no user action is required
   */
  errorInfo?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorInfo: 'ErrorInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceParametersResponseBodyConfigParameters extends $dara.Model {
  /**
   * @remarks
   * The check code that indicates the valid values of the parameter.
   * 
   * @example
   * [1-65535]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Does it support modifying parameter values. Possible values:
   * 
   * - true:Support modifying parameter values.
   * 
   * - false:Modifying parameter values is not supported.
   * 
   * @example
   * true
   */
  forceModify?: string;
  /**
   * @remarks
   * Specifies whether to forcibly restart the instance after parameters are modified. Valid values:
   * 
   * *   true: forcibly restarts the instance. If a new parameter value takes effect only after the instance restarts, you must set this parameter to true. Otherwise, the new parameter value cannot take effect.
   * *   false: does not forcibly restart the instance.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceRestart?: string;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * Auto-increment columns are incremented by this
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * auto_increment_increment
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 1
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      forceModify: 'ForceModify',
      forceRestart: 'ForceRestart',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      forceModify: 'string',
      forceRestart: 'string',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceParametersResponseBodyRunningParameters extends $dara.Model {
  /**
   * @remarks
   * The check code that indicates the valid values of the parameter.
   * 
   * @example
   * [ON|OFF]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Does it support modifying parameter values. Possible values:
   * 
   * - true:Support modifying parameter values.
   * 
   * - false:Modifying parameter values is not supported.
   * 
   * @example
   * true
   */
  forceModify?: string;
  /**
   * @remarks
   * Specifies whether to forcibly restart the instance after parameters are modified. Valid values:
   * 
   * *   true: forcibly restarts the instance. If a new parameter value takes effect only after the instance restarts, you must set this parameter to true. Otherwise, the new parameter value cannot take effect.
   * *   false: does not forcibly restart the instance.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceRestart?: string;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * When this variable has a value of 1 (the default), the server automatically grants the EXECUTE and ALTER ROUTINE privileges to the creator of a stored routine, if the user cannot already execute and alter or drop the routine. (The ALTER ROUTINE privilege is required to drop the routine.) The server also automatically drops those privileges from the creator when the routine is dropped. If automatic_sp_privileges is 0, the server does not automatically add or drop these privileges.
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * autocommit
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * ON
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      forceModify: 'ForceModify',
      forceRestart: 'ForceRestart',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      forceModify: 'string',
      forceRestart: 'string',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstancesResponseBodyDatabaseInstances extends $dara.Model {
  /**
   * @remarks
   * The business status of the instance. Valid values:
   * 
   * *   normal
   * *   expired
   * *   overdue
   * 
   * @example
   * normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The billing method of the Simple Database Service instance. Set the value to PrePaid. This value indicates the subscription billing method.
   * 
   * Default value: PrePaid.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 1
   */
  cpu?: string;
  /**
   * @remarks
   * The time when the instance was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-01T02:39:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The plan edition ID of the Simple Database Service instance. Valid values:
   * 
   * *   swas.db.c1m1s25: CNY 35/month.
   * *   swas.db.c1m2s80: CNY 100/month.
   * *   swas.db.c2m4s120: CNY 200/month.
   * *   swas.db.c2m8s240: CNY 300/month.
   * 
   * @example
   * swas.db.c1m1s25
   */
  databaseInstanceEdition?: string;
  /**
   * @remarks
   * The ID of the Simple Database Service instance.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The name of the Simple Database Service instance.
   */
  databaseInstanceName?: string;
  /**
   * @remarks
   * The status of the Simple Database Service instance. Valid values:
   * 
   * *   Pending: The instance is being created.
   * *   Restarting: The instance is being restarted.
   * *   Running: The instance is running.
   * *   Stopping: The instance is being stopped.
   * *   Stopped: The instance is stopped.
   * *   UPGRADING: The instance is being upgraded.
   * *   DISABLED: The instance is disabled.
   * 
   * @example
   * Running
   */
  databaseInstanceStatus?: string;
  /**
   * @remarks
   * The database engine version of the instance. Valid values:
   * 
   * *   5.7: MySQL 5.7.
   * *   8.0: MySQL 8.0.
   * 
   * @example
   * 5.7
   */
  databaseVersion?: string;
  /**
   * @remarks
   * The time when the instance expires. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * >  The time displayed in the Simple Application Server console is in the format of UTC+8.
   * 
   * @example
   * 2022-10-01T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The memory size of the instance. Unit: GB.
   * 
   * @example
   * 1
   */
  memory?: string;
  /**
   * @remarks
   * The private endpoint.
   * 
   * @example
   * rm-bp1d39opj7906****.mysql.rds.aliyuncs.com
   */
  privateConnection?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * >  This parameter is displayed only after you apply for a public endpoint for the instance and a public endpoint is assigned to the instance. You can call [AllocatePublicConnection](https://help.aliyun.com/document_detail/451413.html) to apply for a public endpoint for the instance.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****.mysql.rds.aliyuncs.com
   */
  publicConnection?: string;
  /**
   * @remarks
   * The region ID of the Simple Database Service instances.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The size of the enhanced SSD (ESSD). Unit: GB.
   * 
   * @example
   * 25
   */
  storage?: number;
  /**
   * @remarks
   * The name of the super administrator account of the Simple Database Service instance.
   * 
   * @example
   * administrator
   */
  superAccountName?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      chargeType: 'ChargeType',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      databaseInstanceEdition: 'DatabaseInstanceEdition',
      databaseInstanceId: 'DatabaseInstanceId',
      databaseInstanceName: 'DatabaseInstanceName',
      databaseInstanceStatus: 'DatabaseInstanceStatus',
      databaseVersion: 'DatabaseVersion',
      expiredTime: 'ExpiredTime',
      memory: 'Memory',
      privateConnection: 'PrivateConnection',
      publicConnection: 'PublicConnection',
      regionId: 'RegionId',
      storage: 'Storage',
      superAccountName: 'SuperAccountName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      chargeType: 'string',
      cpu: 'string',
      creationTime: 'string',
      databaseInstanceEdition: 'string',
      databaseInstanceId: 'string',
      databaseInstanceName: 'string',
      databaseInstanceStatus: 'string',
      databaseVersion: 'string',
      expiredTime: 'string',
      memory: 'string',
      privateConnection: 'string',
      publicConnection: 'string',
      regionId: 'string',
      storage: 'number',
      superAccountName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseSlowLogRecordsResponseBodySlowLogs extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testDB
   */
  DBName?: string;
  /**
   * @remarks
   * The time when the execution of the SQL statement started. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * >  The time displayed in the Simple Application Server console is in the format of UTC+8.
   * 
   * @example
   * 2022-09-08T01:40:44Z
   */
  executionStartTime?: string;
  /**
   * @remarks
   * The name and IP address of the client that is connected to the database.
   * 
   * @example
   * xxx[xxx] @ [1xx.xxx.xxx.xx]
   */
  hostAddress?: string;
  /**
   * @remarks
   * The lock duration of the SQL statement. Unit: seconds.
   * 
   * @example
   * 0
   */
  lockTimes?: number;
  /**
   * @remarks
   * The number of rows parsed by the SQL statement.
   * 
   * @example
   * 1
   */
  parseRowCounts?: number;
  /**
   * @remarks
   * The execution duration of the slow query. Unit: millisecond.
   * 
   * @example
   * 2001
   */
  queryTimeMS?: number;
  /**
   * @remarks
   * The execution duration of the slow query. Unit: seconds.
   * 
   * @example
   * 2
   */
  queryTimes?: number;
  /**
   * @remarks
   * The number of rows returned by the SQL statement.
   * 
   * @example
   * 1
   */
  returnRowCounts?: number;
  /**
   * @remarks
   * The details of the SQL statement.
   * 
   * @example
   * select sleep(2)
   */
  SQLText?: string;
  static names(): { [key: string]: string } {
    return {
      DBName: 'DBName',
      executionStartTime: 'ExecutionStartTime',
      hostAddress: 'HostAddress',
      lockTimes: 'LockTimes',
      parseRowCounts: 'ParseRowCounts',
      queryTimeMS: 'QueryTimeMS',
      queryTimes: 'QueryTimes',
      returnRowCounts: 'ReturnRowCounts',
      SQLText: 'SQLText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBName: 'string',
      executionStartTime: 'string',
      hostAddress: 'string',
      lockTimes: 'number',
      parseRowCounts: 'number',
      queryTimeMS: 'number',
      queryTimes: 'number',
      returnRowCounts: 'number',
      SQLText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplateApplyResultsResponseBodyDataInstanceApplyResults extends $dara.Model {
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * 33774babccc84003a2b1ad47e8001233
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of applying the firewall template to the simple application servers. Valid values:
   * 
   * *   Running: The firewall template is being applied to the simple application servers.
   * *   Failed: The firewall template is applied to none of the simple application servers.
   * *   Success: The firewall template is applied to all the simple application servers.
   * *   PartFailed: The firewall template fails to be applied to some simple application servers.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplateApplyResultsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the firewall template was applied to the simple application servers.
   * 
   * @example
   * Tue May 14 11:53:07 CST 2024
   */
  createTime?: string;
  /**
   * @remarks
   * The total number of simple application servers to which the firewall template fails to apply.
   * 
   * @example
   * 0
   */
  failedCount?: string;
  /**
   * @remarks
   * The ID of the firewall template.
   * 
   * @example
   * ft-bcf1a7hrdq717****
   */
  firewallTemplateId?: string;
  /**
   * @remarks
   * The result of applying the firewall template to the simple application servers.
   */
  instanceApplyResults?: DescribeFirewallTemplateApplyResultsResponseBodyDataInstanceApplyResults[];
  /**
   * @remarks
   * The status of applying the template to all simple application servers. Valid values:
   * 
   * *   Running: The firewall template is being applied to simple application servers.
   * *   Failed: The firewall template is applied to none of simple application servers.
   * *   Success: The firewall template is applied to all simple application servers.
   * *   PartFailed: The firewall template fails to be applied to some simple application servers.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the execution to apply the template.
   * 
   * @example
   * aft-ikgt0bynitvs3****
   */
  taskId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      failedCount: 'FailedCount',
      firewallTemplateId: 'FirewallTemplateId',
      instanceApplyResults: 'InstanceApplyResults',
      status: 'Status',
      taskId: 'TaskId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      failedCount: 'string',
      firewallTemplateId: 'string',
      instanceApplyResults: { 'type': 'array', 'itemType': DescribeFirewallTemplateApplyResultsResponseBodyDataInstanceApplyResults },
      status: 'string',
      taskId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceApplyResults)) {
      $dara.Model.validateArray(this.instanceApplyResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplateRulesApplyResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error codes when the firewall template rule fails to be applied.
   * 
   * @example
   * 500
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is displayed when the firewall template rule fails to be applied.
   * 
   * @example
   * An error occurred while processing your request.
   */
  errorInfo?: string;
  /**
   * @remarks
   * The port range. Valid values: 1 to 65535. Specify a port range in the format of \\<start port number>/\\<end port number>. Example: `1024/1055`, which indicates that the port range of 1024 to 1055.
   * 
   * >  If you set RuleProtocol to ICMP, you must set Port to -1/-1.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The remarks of the firewall rule.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The transport layer protocol that the rule supports. Valid values:
   * 
   * *   TCP
   * *   UDP
   * *   TCP+UDP
   * *   ICMP
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  /**
   * @remarks
   * The source address to which you want to grant access permissions. CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 119.145.XX.XX
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The status of applying the firewall template rule to the simple application servers.
   * 
   * *   Pending: The template rule does not start to be applied to the simple application servers.
   * *   Applying: The template rule is being applied to the simple application servers.
   * *   Success: The template rule is successfully applied to the simple application servers.
   * *   PartFailed: The template rule fails to be applied to some simple application servers.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      port: 'Port',
      remark: 'Remark',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorInfo: 'string',
      port: 'string',
      remark: 'string',
      ruleProtocol: 'string',
      sourceCidrIp: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplatesResponseBodyFirewallTemplatesFirewallTemplateRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the firewall template rule.
   * 
   * @example
   * eeea34d9867b4d55a4ff8d5fcfbd****
   */
  firewallTemplateRuleId?: string;
  /**
   * @remarks
   * The port range. Valid values: 1 to 65535. Specify a port range in the format of \\<start port number>/\\<end port number>. Example: `1024/1055`, which indicates that the port range of 1024 to 1055.
   * 
   * >  If you set RuleProtocol to ICMP, you must set Port to -1/-1.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The remarks of the firewall template rule.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The transport layer protocol that the rule supports. Valid values:
   * 
   * *   TCP
   * *   UDP
   * *   TCP+UDP
   * *   ICMP
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  /**
   * @remarks
   * The source address to which you want to grant access permissions. CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 119.145.XX.XX
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      firewallTemplateRuleId: 'FirewallTemplateRuleId',
      port: 'Port',
      remark: 'Remark',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallTemplateRuleId: 'string',
      port: 'string',
      remark: 'string',
      ruleProtocol: 'string',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplatesResponseBodyFirewallTemplates extends $dara.Model {
  /**
   * @remarks
   * The time when the firewall template was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * >  The time displayed in the Simple Application Server console is in the format of UTC+8.
   * 
   * @example
   * 2024-04-29T02:01:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the firewall template was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-04-10T02:10:14Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the firewall template.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the firewall template.
   * 
   * @example
   * ft-bcf1a7hrdq717****
   */
  firewallTemplateId?: string;
  /**
   * @remarks
   * The details of the firewall template rules.
   */
  firewallTemplateRules?: DescribeFirewallTemplatesResponseBodyFirewallTemplatesFirewallTemplateRules[];
  /**
   * @remarks
   * The name of the firewall template.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creationTime: 'CreationTime',
      description: 'Description',
      firewallTemplateId: 'FirewallTemplateId',
      firewallTemplateRules: 'FirewallTemplateRules',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creationTime: 'string',
      description: 'string',
      firewallTemplateId: 'string',
      firewallTemplateRules: { 'type': 'array', 'itemType': DescribeFirewallTemplatesResponseBodyFirewallTemplatesFirewallTemplateRules },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallTemplateRules)) {
      $dara.Model.validateArray(this.firewallTemplateRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultResponseBodyInvocationResult extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned if the command failed to be sent or executed.
   * 
   * *   If this parameter is empty, the command is executed normally.
   * *   InstanceNotExists: The specified server does not exist or is released.
   * *   InstanceReleased: The server was released while the command was being executed on the server.
   * *   InstanceNotRunning: The server is not in the Running state while the command is being executed.
   * *   CommandNotApplicable: The command is not applicable to the specified server.
   * *   AccountNotExists: The specified account does not exist.
   * *   DirectoryNotExists: The specified directory does not exist.
   * *   BadCronExpression: The specified cron expression for the execution schedule is invalid.
   * *   ClientNotRunning: The Cloud Assistant client is not running.
   * *   ClientNotResponse: The Cloud Assistant client does not respond.
   * *   ClientIsUpgrading: The Cloud Assistant client is being upgraded.
   * *   ClientNeedUpgrade: The Cloud Assistant client needs to be upgraded.
   * *   DeliveryTimeout: Command sending times out.
   * *   ExecutionTimeout: The execution times out.
   * *   ExecutionException: An exception occurs while the command is being executed.
   * *   ExecutionInterrupted: The execution is interrupted.
   * *   ExitCodeNonzero: The execution is complete, but the exit code is not 0.
   * 
   * @example
   * InstanceNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the command is not successfully sent or executed. Valid values:
   * 
   * *   If this parameter is empty, the command is executed normally.
   * *   the specified instance does not exists: The specified server does not exist or is released.
   * *   the instance has released when create task: The server was released while the command was being executed on the server.
   * *   the instance is not running when create task: The server is not in the Running state while the command is being executed.
   * *   the command is not applicable: The command is not applicable to the specified server.
   * *   the specified account does not exists: The specified account does not exist.
   * *   the specified directory does not exists: The specified directory does not exist.
   * *   the cron job expression is invalid: The specified cron expression is invalid.
   * *   the aliyun service is not running on the instance: The Cloud Assistance client is not running.
   * *   the aliyun service in the instance does not response: The Cloud Assistant client does not respond to your request.
   * *   the aliyun service in the instance is upgrading now: The Cloud Assistant client is being upgraded.
   * *   the aliyun service in the instance need upgrade: The Cloud Assistant client needs to be upgraded.
   * *   the command delivery has been timeout: Command sending times out.
   * *   the command execution has been timeout: The execution times out.
   * *   the command execution got an exception: An exception occurs while the command is being executed.
   * *   the command execution has been interrupted: The execution is interrupted.
   * *   the command execution exit code is not zero: The execution is complete, and the exit code is not 0.
   * 
   * @example
   * the specified instance does not exists
   */
  errorInfo?: string;
  /**
   * @remarks
   * The exit code of the command.
   * 
   * *   For Linux instances, the exit code is the exit code of the shell command.
   * *   For Windows instances, the exit code is the exit code of the batch or PowerShell command.
   * 
   * @example
   * 0
   */
  exitCode?: number;
  /**
   * @remarks
   * The time when the execution ended.
   * 
   * @example
   * 2022-07-11T06:37:17Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the execution progress. Valid values:
   * 
   * *   Pending: The command is being verified or sent.
   * *   Invalid: The specified command type or parameter is invalid.
   * *   Aborted: The command fails to be sent to the server. To send a command to a server, make sure that the server is in the Running state and the command can be sent within 1 minute.
   * *   Running: The command is being executed on the server.
   * *   Success: The execution is completed, and the exit code is 0.
   * *   Failed: The execution is completed, and the exit code is not 0.
   * *   Error: The execution cannot proceed due to an exception.
   * *   Timeout: The execution times out.
   * *   Cancelled: The execution is canceled, and the command is not executed.
   * *   Stopping: The command in the Running state is being stopped.
   * *   Terminated: The command is terminated while it is being executed.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The execution ID.
   * 
   * @example
   * t-bj02prjje65****
   */
  invokeId?: string;
  /**
   * @remarks
   * The status of the execution. Valid values:
   * 
   * *   Running
   * *   Finished
   * *   Failed
   * *   Stopped
   * 
   * @example
   * Finished
   */
  invokeRecordStatus?: string;
  /**
   * @remarks
   * The username who executes the command on the simple application server.
   * 
   * @example
   * root
   */
  invokeUser?: string;
  /**
   * @remarks
   * The command output.
   * 
   * @example
   * YWRtaW4K
   */
  output?: string;
  /**
   * @remarks
   * The time when the execution started.
   * 
   * @example
   * 2022-07-11T06:37:16Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishedTime: 'FinishedTime',
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeRecordStatus: 'InvokeRecordStatus',
      invokeUser: 'InvokeUser',
      output: 'Output',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishedTime: 'string',
      instanceId: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeRecordStatus: 'string',
      invokeUser: 'string',
      output: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocations extends $dara.Model {
  /**
   * @remarks
   * The content of the command, which is Base64-encoded.
   * 
   * @example
   * bHM=
   */
  commandContent?: string;
  /**
   * @remarks
   * The name of the command.
   * 
   * @example
   * testname
   */
  commandName?: string;
  /**
   * @remarks
   * The type of the command. Valid values:
   * 
   * *   RunBatScript: batch command (applicable to Windows instances).
   * *   RunPowerShellScript: PowerShell command (applicable to Windows instances).
   * *   RunShellScript: shell command (applicable to Linux instances).
   * 
   * @example
   * RunShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The time when the command was created.
   * 
   * @example
   * 2022-07-11T06:37:16Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The status of the command. Valid values:
   * 
   * *   Pending: The command is being verified or sent.
   * *   Invalid: The specified command type or parameter is invalid.
   * *   Aborted: The command failed to be sent. To send a command to an instance, make sure that the instance is in the Running state and the command is sent to the instance within 1 minute.
   * *   Running: The command is being run on the instance.
   * *   Success: The command finishes running, and the exit code is 0.
   * *   Failed: The command finishes running, but the exit code is not 0.
   * *   Error: The running of the command cannot proceed due to an exception.
   * *   Timeout: The running of the command times out.
   * *   Cancelled: The running is canceled, and the command is not run.
   * *   Stopping: The command that is running is being stopped.
   * *   Terminated: The command is terminated while it is being run.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The ID of the command task.
   * 
   * @example
   * t-hz02p9545t6****
   */
  invokeId?: string;
  /**
   * @remarks
   * The status of the command. Valid values:
   * 
   * *   Running: The command is running.
   * *   Finished: The command finishes running.
   * *   Failed: The running of the command failed.
   * *   Stopped: The running is stopped.
   * 
   * @example
   * Finished
   */
  invokeStatus?: string;
  /**
   * @remarks
   * The custom parameters in the command. If no custom parameter exists in the command, the default value is {}.
   * 
   * @example
   * {}
   */
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandName: 'CommandName',
      commandType: 'CommandType',
      creationTime: 'CreationTime',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      invokeStatus: 'InvokeStatus',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandName: 'string',
      commandType: 'string',
      creationTime: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      invokeStatus: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * aa6e71ddb35c46679bc4753d6219d604
   */
  instanceId?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the key pair is unbound from the simple application server successfully. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImageShareAccountsResponseBodyImageShareUsers extends $dara.Model {
  /**
   * @remarks
   * The time when the custom image is shared.
   * 
   * @example
   * 2024-07-15 13:59:21.0
   */
  sharedTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account whose custom image is shared.
   * 
   * @example
   * 125111425233****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      sharedTime: 'SharedTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sharedTime: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N. A tag key can be 1 to 64 characters in length. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. A tag value can be up to 64 characters in length. Valid values of N: 1 to 20.
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

export class ListCustomImagesResponseBodyCustomImagesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the custom image.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the custom image.
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

export class ListCustomImagesResponseBodyCustomImages extends $dara.Model {
  /**
   * @remarks
   * The simple application servers created from the image.
   */
  createInstances?: string[];
  /**
   * @remarks
   * The time when the snapshot was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC.
   * 
   * @example
   * 2022-10-09T02:28:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the data disk snapshot.
   * 
   * @example
   * s-bp19rn9u8eqzlfb***
   */
  dataSnapshotId?: string;
  /**
   * @remarks
   * The name of the data disk snapshot.
   * 
   * @example
   * data disk snapshot
   */
  dataSnapshotName?: string;
  /**
   * @remarks
   * The description of the custom image.
   * 
   * @example
   * test-custom-image
   */
  description?: string;
  /**
   * @remarks
   * The ID of the custom image.
   * 
   * @example
   * m-bp1e79zktg26n2b***
   */
  imageId?: string;
  /**
   * @remarks
   * Indicates whether the custom image is shared to Elastic Compute Service (ECS).
   * 
   * @example
   * false
   */
  inShare?: boolean;
  /**
   * @remarks
   * Indicates whether the custom image is shared across accounts.
   * 
   * @example
   * False
   */
  inShareUser?: boolean;
  /**
   * @remarks
   * The ID of the simple application server from which the image is derived.
   * 
   * @example
   * 2d06ee0520b44de1ae88d4be****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the simple application server.
   * 
   * @example
   * swas-asdf23***
   */
  instanceName?: string;
  /**
   * @remarks
   * The name of the custom image.
   * 
   * @example
   * hua
   */
  name?: string;
  /**
   * @remarks
   * The operating system type of the image.
   * 
   * @example
   * Linux
   */
  osType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The size of the image data disk. Unit: GiB.
   * 
   * @example
   * 20
   */
  requiredDataDiskSize?: number;
  /**
   * @remarks
   * The size of the image system disk. Unit: GiB.
   * 
   * @example
   * 20
   */
  requiredSystemDiskSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm2h2lvp3ublq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the source image that is used to create the simple application server.
   * 
   * @example
   * CentOS
   */
  sourceImageName?: string;
  /**
   * @remarks
   * The version of the source image that is used to create the simple application server.
   * 
   * @example
   * 8.0
   */
  sourceImageVersion?: string;
  /**
   * @remarks
   * The status of the custom image. Valid values:
   * 
   * *   0: copying
   * *   1: available
   * *   2: unavailable
   * *   3: creation failed
   * *   4: creating
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The ID of the system disk snapshot.
   * 
   * @example
   * s-bp1h173hj21puxb***
   */
  systemSnapshotId?: string;
  /**
   * @remarks
   * The name of the system disk snapshot.
   * 
   * @example
   * system disk snapshot
   */
  systemSnapshotName?: string;
  /**
   * @remarks
   * The tags of the custom image.
   */
  tags?: ListCustomImagesResponseBodyCustomImagesTags[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the image belongs.
   * 
   * @example
   * 180185828710****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      createInstances: 'CreateInstances',
      creationTime: 'CreationTime',
      dataSnapshotId: 'DataSnapshotId',
      dataSnapshotName: 'DataSnapshotName',
      description: 'Description',
      imageId: 'ImageId',
      inShare: 'InShare',
      inShareUser: 'InShareUser',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      name: 'Name',
      osType: 'OsType',
      regionId: 'RegionId',
      requiredDataDiskSize: 'RequiredDataDiskSize',
      requiredSystemDiskSize: 'RequiredSystemDiskSize',
      resourceGroupId: 'ResourceGroupId',
      sourceImageName: 'SourceImageName',
      sourceImageVersion: 'SourceImageVersion',
      status: 'Status',
      systemSnapshotId: 'SystemSnapshotId',
      systemSnapshotName: 'SystemSnapshotName',
      tags: 'Tags',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createInstances: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'string',
      dataSnapshotId: 'string',
      dataSnapshotName: 'string',
      description: 'string',
      imageId: 'string',
      inShare: 'boolean',
      inShareUser: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      name: 'string',
      osType: 'string',
      regionId: 'string',
      requiredDataDiskSize: 'number',
      requiredSystemDiskSize: 'number',
      resourceGroupId: 'string',
      sourceImageName: 'string',
      sourceImageVersion: 'string',
      status: 'string',
      systemSnapshotId: 'string',
      systemSnapshotName: 'string',
      tags: { 'type': 'array', 'itemType': ListCustomImagesResponseBodyCustomImagesTags },
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.createInstances)) {
      $dara.Model.validateArray(this.createInstances);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisksRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 64 characters in length. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 64 characters in length. Valid values of N: 1 to 20.
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

export class ListDisksResponseBodyDisksTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class ListDisksResponseBodyDisks extends $dara.Model {
  /**
   * @remarks
   * The category of the disk. Valid values:
   * 
   * *   ESSD: enhanced SSD (ESSD) of PL0
   * *   SSD: standard SSD
   * *   CLOUD_EFFICIENCY: ultra disk
   * 
   * @example
   * ESSD
   */
  category?: string;
  /**
   * @remarks
   * The time when the disk was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-08T05:31:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The device name of the disk after the disk is attached to the simple application server.
   * 
   * @example
   * /dev/xvda
   */
  device?: string;
  /**
   * @remarks
   * The billing method of the disk.
   * 
   * @example
   * PrePaid
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * d-bp14wq0149cpp2x****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * SystemDisk
   */
  diskName?: string;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * *   system: system disk
   * *   data: data disk
   * 
   * @example
   * System
   */
  diskType?: string;
  /**
   * @remarks
   * The ID of the simple application server to which the disk is attached.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the simple application server.
   * 
   * @example
   * myInstance
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the disk.
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the disk belongs.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GB.
   * 
   * @example
   * 50
   */
  size?: number;
  /**
   * @remarks
   * The status of the disk. Valid values:
   * 
   * *   ReIniting: The disk is being initialized.
   * *   Creating: The disk is being created.
   * *   In_use: The disk is in use.
   * *   Available: The disk can be attached.
   * *   Attaching: The disk is being attached.
   * *   Detaching: The disk is being detached.
   * 
   * @example
   * In_use
   */
  status?: string;
  /**
   * @remarks
   * The tags that are added to the disks.
   */
  tags?: ListDisksResponseBodyDisksTags[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      creationTime: 'CreationTime',
      device: 'Device',
      diskChargeType: 'DiskChargeType',
      diskId: 'DiskId',
      diskName: 'DiskName',
      diskType: 'DiskType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      size: 'Size',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      creationTime: 'string',
      device: 'string',
      diskChargeType: 'string',
      diskId: 'string',
      diskName: 'string',
      diskType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      size: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListDisksResponseBodyDisksTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirewallRulesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. A tag key must be 1 to 64 characters in length. You can add up to 20 tags.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. A tag value must be 1 to 64 characters in length. You can add up to 20 tags.
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

export class ListFirewallRulesResponseBodyFirewallRulesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class ListFirewallRulesResponseBodyFirewallRules extends $dara.Model {
  /**
   * @remarks
   * The firewall policy. Valid values:
   * 
   * *   accept: Access is allowed.
   * *   drop: Access is refused.
   * 
   * @example
   * accept
   */
  policy?: string;
  /**
   * @remarks
   * The port range.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The remarks of the firewall rule.
   * 
   * @example
   * TEST
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the firewall rule.
   * 
   * @example
   * eeea34d9867b4d55a4ff8d5fcfbd****
   */
  ruleId?: string;
  /**
   * @remarks
   * The transport layer protocol. Valid values:
   * 
   * *   TCP
   * *   UDP
   * *   TCP+UDP
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidrIp?: string;
  /**
   * @remarks
   * The tags of the firewall rule.
   */
  tags?: ListFirewallRulesResponseBodyFirewallRulesTags[];
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      port: 'Port',
      remark: 'Remark',
      ruleId: 'RuleId',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      port: 'string',
      remark: 'string',
      ruleId: 'string',
      ruleProtocol: 'string',
      sourceCidrIp: 'string',
      tags: { 'type': 'array', 'itemType': ListFirewallRulesResponseBodyFirewallRulesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * Apps ImageOS ImageCustom Images
   * WordPress is a popular and powerful platform that allows you to build blogs and content management websites and implement custom features by using third-party templates and plug-ins. This WordPress image is built based on CentOS 7.9, PHP 7.4, MySQL 5.7, and Apache 2.4.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * 794c230fd3e64ea19f83f4d7a0ad****
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * WordPress-4.8.1
   */
  imageName?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * *   system
   * *   app
   * *   custom
   * 
   * @example
   * app
   */
  imageType?: string;
  /**
   * @remarks
   * The operating system type of the image. Valid values:
   * 
   * *   Linux
   * *   Windows
   * 
   * @example
   * Linux
   */
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageType: 'ImageType',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageId: 'string',
      imageName: 'string',
      imageType: 'string',
      platform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePlansModificationResponseBodyPlans extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 3
   */
  bandwidth?: number;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  core?: number;
  /**
   * @remarks
   * The unit of the plan price. Valid values:
   * 
   * *   CNY
   * *   USD
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The disk size of the simple application server. Unit: GB.
   * 
   * @example
   * 40
   */
  diskSize?: number;
  /**
   * @remarks
   * The category of the disk. Valid values:
   * 
   * *   SSD: standard SSD
   * *   ESSD: enhanced SSD
   * 
   * @example
   * ESSD
   */
  diskType?: string;
  /**
   * @remarks
   * The monthly data transfer quota. Unit: GB.
   * 
   * @example
   * 400
   */
  flow?: number;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 1
   */
  memory?: number;
  /**
   * @remarks
   * The price of the plan.
   * 
   * @example
   * 60
   */
  originPrice?: number;
  /**
   * @remarks
   * The ID of the plan.
   * 
   * @example
   * swas.s2.c2m1s40b3t04
   */
  planId?: string;
  /**
   * @remarks
   * The operating system types supported by the plan.
   * 
   * @example
   * ["Linux","Windows"]
   */
  supportPlatform?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      core: 'Core',
      currency: 'Currency',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      flow: 'Flow',
      memory: 'Memory',
      originPrice: 'OriginPrice',
      planId: 'PlanId',
      supportPlatform: 'SupportPlatform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      core: 'number',
      currency: 'string',
      diskSize: 'number',
      diskType: 'string',
      flow: 'number',
      memory: 'number',
      originPrice: 'number',
      planId: 'string',
      supportPlatform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatusResponseBodyInstanceStatuses extends $dara.Model {
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * a9a6474b935d41bcb531250bb5d****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the simple application server. Valid values:
   * 
   * *   Pending
   * *   Starting
   * *   Running
   * *   Stopping
   * *   Stopped
   * *   Resetting
   * *   Upgrading
   * *   Disabled
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the simple application servers. A tag key can be 1 to 64 characters in length. Valid values of N: 1 to 20.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the simple application servers. A tag value can be 1 to 64 characters in length. Valid values of N: 1 to 20.
   * 
   * @example
   * 01
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

export class ListInstancesResponseBodyInstancesDisksDiskTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class ListInstancesResponseBodyInstancesDisks extends $dara.Model {
  /**
   * @remarks
   * The category of the disk. Valid values:
   * 
   * *   ESSD: ESSD of PL0
   * *   SSD: standard SSD
   * *   CLOUD_EFFICIENCY: an ultra disk.
   * 
   * @example
   * ESSD
   */
  category?: string;
  /**
   * @remarks
   * The time when the simple application server was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-02-24T02:20:10Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The device name of the disk after the disk is attached to the simple application server.
   * 
   * @example
   * /dev/xvda
   */
  device?: string;
  /**
   * @remarks
   * The billing method of the disk.
   * 
   * @example
   * PrePaid
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * d-bp14wq0149cpp2x****
   */
  diskId?: string;
  /**
   * @remarks
   * The disk name.
   * 
   * @example
   * SystemDisk
   */
  diskName?: string;
  /**
   * @remarks
   * The tags that are added to the disk.
   */
  diskTags?: ListInstancesResponseBodyInstancesDisksDiskTags[];
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   system: system disk.
   * *   data: data disk.
   * 
   * @example
   * system
   */
  diskType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the disk.
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the disk belongs.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 50
   */
  size?: number;
  /**
   * @remarks
   * The status of the disk. Valid values:
   * 
   * *   ReIniting: The disk is being initialized.
   * *   Creating: The disk is being created.
   * *   In_use: The disk is in use.
   * *   Available: The disk can be attached.
   * *   Attaching: The disk is being attached.
   * *   Detaching: The disk is being detached.
   * 
   * @example
   * In_use
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      creationTime: 'CreationTime',
      device: 'Device',
      diskChargeType: 'DiskChargeType',
      diskId: 'DiskId',
      diskName: 'DiskName',
      diskTags: 'DiskTags',
      diskType: 'DiskType',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      creationTime: 'string',
      device: 'string',
      diskChargeType: 'string',
      diskId: 'string',
      diskName: 'string',
      diskTags: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesDisksDiskTags },
      diskType: 'string',
      regionId: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      size: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diskTags)) {
      $dara.Model.validateArray(this.diskTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesImage extends $dara.Model {
  /**
   * @remarks
   * The image provider.
   * 
   * @example
   * https://selfs****e.console.aliyun.com/ticket/createIndex
   */
  imageContact?: string;
  /**
   * @remarks
   * The URL of the image icon.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i3/O****1vdh9651ReKqWNMI2I_!!6000000002136****-24-24.svg
   */
  imageIconUrl?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * test-custom-1686536882356
   */
  imageName?: string;
  /**
   * @remarks
   * The type of the image. Valid values:
   * 
   * *   system
   * *   app
   * *   custom
   * 
   * @example
   * system
   */
  imageType?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * V3.5
   */
  imageVersion?: string;
  /**
   * @remarks
   * The OS.
   * 
   * @example
   * windows
   */
  osType?: string;
  static names(): { [key: string]: string } {
    return {
      imageContact: 'ImageContact',
      imageIconUrl: 'ImageIconUrl',
      imageName: 'ImageName',
      imageType: 'ImageType',
      imageVersion: 'ImageVersion',
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageContact: 'string',
      imageIconUrl: 'string',
      imageName: 'string',
      imageType: 'string',
      imageVersion: 'string',
      osType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesNetworkAttributes extends $dara.Model {
  peakBandwidth?: number;
  privateIpAddress?: string;
  publicIpAddress?: string;
  publicIpDdosStatus?: string;
  static names(): { [key: string]: string } {
    return {
      peakBandwidth: 'PeakBandwidth',
      privateIpAddress: 'PrivateIpAddress',
      publicIpAddress: 'PublicIpAddress',
      publicIpDdosStatus: 'PublicIpDdosStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peakBandwidth: 'number',
      privateIpAddress: 'string',
      publicIpAddress: 'string',
      publicIpDdosStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The number of vCPUs of the simple application server.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The category of the disk. Valid values:
   * 
   * *   ESSD: enhanced SSD (ESSD) of PL0
   * *   SSD: standard SSD
   * *   CLOUD_EFFICIENCY: ultra disk
   * 
   * @example
   * cloud_efficiency
   */
  diskCategory?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 60
   */
  diskSize?: number;
  /**
   * @remarks
   * The amount of the traffic.
   * 
   * *   A value of 0 indicates the traffic amount of a bandwidth-based simple application server.
   * *   A non-zero value indicates the traffic amount of a data transfer plan-based simple application server.
   * 
   * @example
   * 818
   */
  flow?: number;
  /**
   * @remarks
   * The size of the memory. Unit: GiB.
   * 
   * @example
   * 2
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cpu: 'Cpu',
      diskCategory: 'DiskCategory',
      diskSize: 'DiskSize',
      flow: 'Flow',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cpu: 'number',
      diskCategory: 'string',
      diskSize: 'number',
      flow: 'number',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the simple application server.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the simple application server.
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

export class ListInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The status of the server. Valid values:
   * 
   * *   Normal: The server is normal.
   * *   Expired: The server expires.
   * *   Overdue: The payment of the server is overdue.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The billing method of the simple application server.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Indicates whether the simple application server uses a bundle plan.
   * 
   * @example
   * false
   */
  combination?: boolean;
  /**
   * @remarks
   * The ID of the simple application server that uses a bundle plan.
   * 
   * @example
   * com-f6c9a22****45b5b8de68ad608af1ba
   */
  combinationInstanceId?: string;
  /**
   * @remarks
   * The time when the simple application server was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-08T05:31:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The DDoS protection status of the server. Valid values:
   * 
   * *   Normal: The DDoS protection status of the server is normal.
   * *   BlackHole: The server is in blackhole filtering.
   * *   Defense: The server is being scrubbed.
   * 
   * @example
   * Normal
   */
  ddosStatus?: string;
  /**
   * @remarks
   * The reason why the server is disabled. Valid values:
   * 
   * *   FINANCIAL: The server is locked due to overdue payments.
   * *   SECURITY: The server is locked for security reasons.
   * *   EXPIRED: The server is expired.
   * 
   * @example
   * EXPIRED
   */
  disableReason?: string;
  /**
   * @remarks
   * The information about the disks on the simple application server.
   */
  disks?: ListInstancesResponseBodyInstancesDisks[];
  /**
   * @remarks
   * The time when the simple application server expires. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-08T16:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The description of the image.
   */
  image?: ListInstancesResponseBodyInstancesImage;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * fe9c66133a9d4688872869726b52****
   */
  imageId?: string;
  /**
   * @remarks
   * The private IP address of the simple application server.
   * 
   * @example
   * 172.26.XX.XX
   */
  innerIpAddress?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the simple application server.
   * 
   * @example
   * test-InstanceName
   */
  instanceName?: string;
  networkAttributes?: ListInstancesResponseBodyInstancesNetworkAttributes[];
  /**
   * @remarks
   * The ID of the instance plan.
   * 
   * @example
   * swas.s2.c2m2s50b4t08
   */
  planId?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 42.1.XX.XX
   */
  publicIpAddress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the server belongs.
   * 
   * @example
   * rg-aekz7jmhg5s****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The specifications of the resources on the simple application server.
   */
  resourceSpec?: ListInstancesResponseBodyInstancesResourceSpec;
  /**
   * @remarks
   * The status of the simple application server. Valid values:
   * 
   * *   Pending: The server is being prepared.
   * *   Starting: The server is being started.
   * *   Running: The server is running.
   * *   Stopping: The server is being stopped.
   * *   Stopped: The server is stopped.
   * *   Resetting: The server is being reset.
   * *   Upgrading: The server is being upgraded.
   * *   Disabled: The server is not available.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags that are added to the simple application server.
   */
  tags?: ListInstancesResponseBodyInstancesTags[];
  /**
   * @remarks
   * The universally unique identifier (UUID) of the simple application server.
   * 
   * @example
   * 41f30524-5df7-49c9-9c6e-32****489001
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      chargeType: 'ChargeType',
      combination: 'Combination',
      combinationInstanceId: 'CombinationInstanceId',
      creationTime: 'CreationTime',
      ddosStatus: 'DdosStatus',
      disableReason: 'DisableReason',
      disks: 'Disks',
      expiredTime: 'ExpiredTime',
      image: 'Image',
      imageId: 'ImageId',
      innerIpAddress: 'InnerIpAddress',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      networkAttributes: 'NetworkAttributes',
      planId: 'PlanId',
      publicIpAddress: 'PublicIpAddress',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceSpec: 'ResourceSpec',
      status: 'Status',
      tags: 'Tags',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      chargeType: 'string',
      combination: 'boolean',
      combinationInstanceId: 'string',
      creationTime: 'string',
      ddosStatus: 'string',
      disableReason: 'string',
      disks: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesDisks },
      expiredTime: 'string',
      image: ListInstancesResponseBodyInstancesImage,
      imageId: 'string',
      innerIpAddress: 'string',
      instanceId: 'string',
      instanceName: 'string',
      networkAttributes: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesNetworkAttributes },
      planId: 'string',
      publicIpAddress: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceSpec: ListInstancesResponseBodyInstancesResourceSpec,
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesTags },
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    if(Array.isArray(this.networkAttributes)) {
      $dara.Model.validateArray(this.networkAttributes);
    }
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesTrafficPackagesResponseBodyInstanceTrafficPackageUsages extends $dara.Model {
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * ccscqwqwqqqw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The data transfers that exceeds the quota of the data transfer plan in the current month. Unit: Byte.
   * 
   * @example
   * 0
   */
  trafficOverflow?: number;
  /**
   * @remarks
   * The unused quota of the data transfer plan in the current month. Unit: Byte.
   * 
   * @example
   * 10000
   */
  trafficPackageRemaining?: number;
  /**
   * @remarks
   * The quota of the data transfer plan in the current month. Unit: Byte.
   * 
   * >  TrafficPackageTotal = TrafficUsed + TrafficPackageRemaining
   * 
   * @example
   * 20000
   */
  trafficPackageTotal?: number;
  /**
   * @remarks
   * The used quota of the data transfer plan in the current month. Unit: Byte.
   * 
   * @example
   * 10000
   */
  trafficUsed?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      trafficOverflow: 'TrafficOverflow',
      trafficPackageRemaining: 'TrafficPackageRemaining',
      trafficPackageTotal: 'TrafficPackageTotal',
      trafficUsed: 'TrafficUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      trafficOverflow: 'number',
      trafficPackageRemaining: 'number',
      trafficPackageTotal: 'number',
      trafficUsed: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyPairsResponseBodyKeyPairs extends $dara.Model {
  /**
   * @remarks
   * The time when the AccessKey pair was created.
   * 
   * @example
   * 2024-05-06T02:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The IDs of simple application servers. A maximum of 50 IDs of simple application servers can be returned.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The name of the AccessKey pair. The name must be 2 to 64 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter and cannot start with http:// or https://.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The content of the public key.
   * 
   * @example
   * ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCbO5Govwhb0iHzoMYKkIQxjlHyHH8nxFsW6KF5saxgYhOwdeIpWngpi+/NDWQKvuOnXFFDh/o3eJJkh3rqP+RlMggt4HLQWOd9TS0f4/cgbAzud1caW9PnankCr****
   */
  publicKey?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      instanceIds: 'InstanceIds',
      keyPairName: 'KeyPairName',
      publicKey: 'PublicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      keyPairName: 'string',
      publicKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlansResponseBodyPlans extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 3
   */
  bandwidth?: number;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  core?: number;
  /**
   * @remarks
   * The unit of the plan price. Valid values:
   * 
   * *   CNY
   * *   USD
   * 
   * >  CNY is for the China site (aliyun.com). USD is for the international site (alibabacloud.com).
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GB.
   * 
   * @example
   * 40
   */
  diskSize?: number;
  /**
   * @remarks
   * The category of the disk. Valid values:
   * 
   * *   SSD: standard SSDs
   * *   ESSD: enhanced SSDs
   * 
   * @example
   * ESSD
   */
  diskType?: string;
  /**
   * @remarks
   * The monthly data transfer quota. Unit: GB.
   * 
   * @example
   * 400
   */
  flow?: number;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 1
   */
  memory?: number;
  /**
   * @remarks
   * The monthly price of the plan.
   * 
   * @example
   * 60
   */
  originPrice?: number;
  /**
   * @remarks
   * The ID of the plan.
   * 
   * @example
   * swas.s2.c2m1s40b3t04
   */
  planId?: string;
  planType?: string;
  /**
   * @remarks
   * The operating system types supported by the plan.
   * 
   * @example
   * ["Linux","Windows"]
   */
  supportPlatform?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      core: 'Core',
      currency: 'Currency',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      flow: 'Flow',
      memory: 'Memory',
      originPrice: 'OriginPrice',
      planId: 'PlanId',
      planType: 'PlanType',
      supportPlatform: 'SupportPlatform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      core: 'number',
      currency: 'string',
      diskSize: 'number',
      diskType: 'string',
      flow: 'number',
      memory: 'number',
      originPrice: 'number',
      planId: 'string',
      planType: 'string',
      supportPlatform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * swas.cn-hangzhou.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N that you want to add to the snapshot. A tag key can be 1 to 64 characters in length. Valid values of N: 1 to 20.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that you want to add to the snapshot. A tag value can be up to 64 characters in length. Valid values of N: 1 to 20.
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

export class ListSnapshotsResponseBodySnapshotsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the snapshot.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the snapshot.
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

export class ListSnapshotsResponseBodySnapshots extends $dara.Model {
  /**
   * @remarks
   * The time when the snapshot was created. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-09T07:12:49Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * Note: This parameter has a value returned for only system disk snapshots.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The progress of snapshot creation.
   * 
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the snapshot.
   * 
   * @example
   * test-Remark
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the snapshot belongs.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The time when the last disk rollback was performed.
   * 
   * @example
   * 2021-03-09T07:12:49Z
   */
  rollbackTime?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-bp16oazlsold4dks****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The name of the snapshot.
   * 
   * @example
   * test-SnapshotName
   */
  snapshotName?: string;
  /**
   * @remarks
   * The ID of the source disk. This parameter has a value even after the source disk is released.
   * 
   * @example
   * d-bp14wq0149cpp2xy****
   */
  sourceDiskId?: string;
  /**
   * @remarks
   * The type of the source disk. Valid values:
   * 
   * *   system: system disk.
   * *   data: data disk.
   * 
   * @example
   * System
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * The status of the snapshot. Valid values:
   * 
   * *   Progressing: The snapshot is being created.
   * *   Accomplished: The snapshot is created.
   * *   Failed: The snapshot failed to be created.
   * 
   * @example
   * Accomplished
   */
  status?: string;
  /**
   * @remarks
   * The tags of the snapshot.
   */
  tags?: ListSnapshotsResponseBodySnapshotsTags[];
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      instanceId: 'InstanceId',
      progress: 'Progress',
      regionId: 'RegionId',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      rollbackTime: 'RollbackTime',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      sourceDiskId: 'SourceDiskId',
      sourceDiskType: 'SourceDiskType',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      instanceId: 'string',
      progress: 'string',
      regionId: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      rollbackTime: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      sourceDiskId: 'string',
      sourceDiskType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListSnapshotsResponseBodySnapshotsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that you want to add to a resource. The tag key can be 1 to 64 characters in length.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that you want to add to a resource. The tag value can be 1 to 64 characters in length.
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * s-bw526m1vi6x20c6g****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   instance
   * *   snapshot
   * *   customimage
   * *   command
   * *   firewallrule
   * *   disk
   * 
   * @example
   * ALIYUN::SWAS::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  validate() {
    if(Array.isArray(this.tagResource)) {
      $dara.Model.validateArray(this.tagResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirewallTemplateRequestFirewallTemplateRule extends $dara.Model {
  /**
   * @remarks
   * The ID of the firewall rule.
   * 
   * This parameter is required.
   * 
   * @example
   * eeea34d9867b4d55a4ff8d5fcfbd****
   */
  firewallTemplateRuleId?: string;
  /**
   * @remarks
   * The port range. Valid values: 1 to 65535. Specify a port range in the format of \\<start port number>/\\<end port number>. Example: `1024/1055`, which indicates that the port range of 1024 to 1055.
   * 
   * >  If you set RuleProtocol to ICMP, you must set Port to -1/-1.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The remarks of the firewall template rule.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The transport layer protocol that the rule supports. Valid values:
   * 
   * *   TCP
   * *   UDP
   * *   TCP+UDP
   * *   ICMP
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  /**
   * @remarks
   * The source address to which you want to grant access permissions. CIDR blocks and IPv4 addresses are supported.
   * 
   * @example
   * 0.0.0.0/0
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      firewallTemplateRuleId: 'FirewallTemplateRuleId',
      port: 'Port',
      remark: 'Remark',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallTemplateRuleId: 'string',
      port: 'string',
      remark: 'string',
      ruleProtocol: 'string',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSystemRequestLoginCredentials extends $dara.Model {
  keyPairName?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N that you want to add to a resource.
   * 
   * You cannot specify an empty string as a tag key. The tag key can be up to 64 characters in length and cannot contain http:// or https://. The tag key cannot start with acs: or aliyun.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N that you want to add to a resource.
   * 
   * You can specify an empty string as a tag value. The tag value can be up to 64 characters in length and cannot contain http:// or https://.
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

export class AddCustomImageShareAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the Alibaba Cloud accounts with which you want to share the custom image.
   * 
   * This parameter is required.
   */
  account?: number[];
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
   * The ID of the custom image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-saacssasc****
   */
  imageId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      clientToken: 'ClientToken',
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': 'number' },
      clientToken: 'string',
      imageId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.account)) {
      $dara.Model.validateArray(this.account);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomImageShareAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomImageShareAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddCustomImageShareAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddCustomImageShareAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the Simple Database Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The region ID of the Simple Database Service instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePublicConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The public endpoint that is assigned to the Simple Database Service instance.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****.mysql.rds.aliyuncs.com
   */
  publicConnection?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      publicConnection: 'PublicConnection',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicConnection: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocatePublicConnectionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AllocatePublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AllocatePublicConnectionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyFirewallTemplateRequest extends $dara.Model {
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
   * The ID of the firewall template.
   * 
   * This parameter is required.
   * 
   * @example
   * ft-bcf1a7hrdq717****
   */
  firewallTemplateId?: string;
  /**
   * @remarks
   * The IDs of the simple application servers.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      firewallTemplateId: 'FirewallTemplateId',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      firewallTemplateId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyFirewallTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the execution to apply the template.
   * 
   * @example
   * aft-ikgt0bynitvs3****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyFirewallTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyFirewallTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyFirewallTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachKeyPairRequest extends $dara.Model {
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
   * The IDs of simple application servers. You can specify a maximum of 50 IDs of simple application servers.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The name of the key pair that you want to bind to the simple application server. The name must be 2 to 64 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
   * 
   * This parameter is required.
   * 
   * @example
   * test_gin
   */
  keyPairName?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceIds: 'InstanceIds',
      keyPairName: 'KeyPairName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      keyPairName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of simple application servers to which the key pair failed to be bound.
   * 
   * @example
   * 2
   */
  failCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The request results.
   */
  results?: AttachKeyPairResponseBodyResults[];
  /**
   * @remarks
   * The total number of simple application servers to which the key pair is bound.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      requestId: 'RequestId',
      results: 'Results',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AttachKeyPairResponseBodyResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachKeyPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachKeyPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The command content. When you specify this parameter, take note of the following items:
   * 
   * *   When `EnableParameter` is set to true, the custom parameter feature is enabled, and you can configure custom parameters in the command based on the following rules:
   * *   Define custom parameters in the {{}} format. Within `{{}}`, the spaces and line feeds before and after the parameter names are ignored.
   * *   You can specify up to 20 custom parameters.
   * *   The name of a custom parameter can contain only letters, digits, underscores (_), and hyphens (-). The name is case-insensitive.
   * *   The name of a custom parameter cannot exceed 64 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * ifconfig -s
   */
  commandContent?: string;
  /**
   * @remarks
   * The description of the command. The description supports all character sets and can be up to 512 characters in length.
   * 
   * @example
   * test
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
   * The name of the command. The name supports all character sets and can be up to 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags that you want to add to the command. You can specify up to 20 tags.
   */
  tag?: CreateCommandRequestTag[];
  /**
   * @remarks
   * The timeout period for the command execution on the instance.
   * 
   * If a command execution task times out, Command Assistant forcefully terminates the task process. Valid values: 10 to 86400. Unit: seconds. The period of 86400 seconds is equal to 24 hours.
   * 
   * Default value: 60.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The language type of the command. Valid values:
   * 
   * *   RunBatScript: batch command, applicable to Windows instances
   * *   RunPowerShellScript: PowerShell command, applicable to Windows instances
   * *   RunShellScript: shell command, applicable to Linux instances
   * 
   * This parameter is required.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  /**
   * @remarks
   * The working directory of the command on the ECS instance.
   * 
   * Default values:
   * 
   * *   For a Linux instance, the default value is the home directory of the root user, which is the `/root` directory.
   * *   For a Windows instance, the default value is the directory where the Cloud Assistant client process resides. Example: `C:\\Windows\\System32`.
   * 
   * @example
   * /root/
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      description: 'Description',
      enableParameter: 'EnableParameter',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      timeout: 'Timeout',
      type: 'Type',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      description: 'string',
      enableParameter: 'boolean',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateCommandRequestTag },
      timeout: 'number',
      type: 'string',
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The command ID.
   * 
   * @example
   * c-sh02yh0932w****
   */
  commandId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCommandResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCommandResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomImageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the data disk snapshot.
   * 
   * @example
   * s-acscasca****
   */
  dataSnapshotId?: string;
  /**
   * @remarks
   * The description of the custom image.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the custom image. The name must be 2 to 128 characters in length, and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter or a digit. This parameter is empty by default.
   * 
   * This parameter is required.
   * 
   * @example
   * customImage-test
   */
  imageName?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the database. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the system disk snapshot.
   * 
   * @example
   * s-acscasca****
   */
  systemSnapshotId?: string;
  /**
   * @remarks
   * The tags that you want to add to the custom image. You can specify up to 20 tags.
   */
  tag?: CreateCustomImageRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataSnapshotId: 'DataSnapshotId',
      description: 'Description',
      imageName: 'ImageName',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      systemSnapshotId: 'SystemSnapshotId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataSnapshotId: 'string',
      description: 'string',
      imageName: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      systemSnapshotId: 'string',
      tag: { 'type': 'array', 'itemType': CreateCustomImageRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom image ID.
   * 
   * @example
   * m-csaascsaccscs****
   */
  imageId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCustomImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomImageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallRuleRequest extends $dara.Model {
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
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The port range.
   * 
   * *   When the transport layer protocol is TCP and/or UDP, the port range is 1 to 65535. Specify a port range in the format of \\<start port number>/\\<end port number>. Example: 1024/1055, which specifies the port range from 1024 to 1055.
   * *   When the transport layer protocol is ICMP, the port range is -1/-1, which indicates all ports.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The region ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the firewall rule.
   * 
   * @example
   * TEST
   */
  remark?: string;
  /**
   * @remarks
   * The transport layer protocol. Valid values:
   * 
   * *   TCP
   * *   UDP
   * *   TCP+UDP
   * *   ICMP
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      port: 'Port',
      regionId: 'RegionId',
      remark: 'Remark',
      ruleProtocol: 'RuleProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      port: 'string',
      regionId: 'string',
      remark: 'string',
      ruleProtocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the firewall rule.
   * 
   * @example
   * 8007e18c61024aafbd776d52d0****
   */
  firewallId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFirewallRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFirewallRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Details about the firewall rules.
   */
  firewallRules?: CreateFirewallRulesRequestFirewallRules[];
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags that you want to add to the firewall. You can specify up to 20 tags.
   */
  tag?: CreateFirewallRulesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      firewallRules: 'FirewallRules',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      firewallRules: { 'type': 'array', 'itemType': CreateFirewallRulesRequestFirewallRules },
      instanceId: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': CreateFirewallRulesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.firewallRules)) {
      $dara.Model.validateArray(this.firewallRules);
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

export class CreateFirewallRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Details about the firewall rules.
   */
  firewallRulesShrink?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags that you want to add to the firewall. You can specify up to 20 tags.
   */
  tag?: CreateFirewallRulesShrinkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      firewallRulesShrink: 'FirewallRules',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      firewallRulesShrink: 'string',
      instanceId: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': CreateFirewallRulesShrinkRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the firewall rules that you created.
   */
  firewallRuleIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallRuleIds: 'FirewallRuleIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallRuleIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallRuleIds)) {
      $dara.Model.validateArray(this.firewallRuleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallRulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFirewallRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFirewallRulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the firewall template.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The details of the firewall rule.
   */
  firewallRule?: CreateFirewallTemplateRequestFirewallRule[];
  /**
   * @remarks
   * The name of the firewall template.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the simple application server to which the firewall template belongs. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      firewallRule: 'FirewallRule',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      firewallRule: { 'type': 'array', 'itemType': CreateFirewallTemplateRequestFirewallRule },
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallRule)) {
      $dara.Model.validateArray(this.firewallRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the firewall template.
   * 
   * @example
   * ft-bcf1a7hrdq717****
   */
  firewallTemplateId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallTemplateId: 'FirewallTemplateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallTemplateId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFirewallTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFirewallTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallTemplateRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The details of the firewall rule.
   * 
   * This parameter is required.
   */
  firewallRule?: CreateFirewallTemplateRulesRequestFirewallRule[];
  /**
   * @remarks
   * The ID of the firewall template.
   * 
   * This parameter is required.
   * 
   * @example
   * ft-bcf1a7hrdq717****
   */
  firewallTemplateId?: string;
  /**
   * @remarks
   * The region ID of the simple application server to which the firewall template is applied. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallRule: 'FirewallRule',
      firewallTemplateId: 'FirewallTemplateId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallRule: { 'type': 'array', 'itemType': CreateFirewallTemplateRulesRequestFirewallRule },
      firewallTemplateId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallRule)) {
      $dara.Model.validateArray(this.firewallRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallTemplateRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The firewall template rules.
   */
  firewallTemplateRules?: CreateFirewallTemplateRulesResponseBodyFirewallTemplateRules[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallTemplateRules: 'FirewallTemplateRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallTemplateRules: { 'type': 'array', 'itemType': CreateFirewallTemplateRulesResponseBodyFirewallTemplateRules },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallTemplateRules)) {
      $dara.Model.validateArray(this.firewallTemplateRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFirewallTemplateRulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFirewallTemplateRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFirewallTemplateRulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * This parameter is required.
   * 
   * @example
   * ceshi
   */
  keyPairName?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      keyPairName: 'KeyPairName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      keyPairName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fingerprint of the key pair.
   * 
   * @example
   * If2K1ItazA4GlKkWCEhdRj8Wd6czAvK9*****
   */
  fingerprint?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * ceshi
   */
  keyPairName?: string;
  /**
   * @remarks
   * The private key.
   * 
   * @example
   * ***
   */
  privateKey?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fingerprint: 'Fingerprint',
      keyPairName: 'KeyPairName',
      privateKey: 'PrivateKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerprint: 'string',
      keyPairName: 'string',
      privateKey: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceKeyPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceKeyPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of simple application servers that you want to create. Valid values: 1 to 20.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period. This parameter is required only when you set `AutoRenew` to true. Unit: month. Valid values: 1, 3, 6, 12, 24, and 36.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The billing method of the simple application servers. Set the value to PrePaid, which indicates the subscription billing method.
   * 
   * Default value: PrePaid.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
   * 
   * *   A value of 0 indicates that no data disk is attached.
   * *   If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
   * 
   * Default value: 0.
   * 
   * @example
   * 20
   */
  dataDiskSize?: number;
  /**
   * @remarks
   * The image ID. You can call the [ListImages](https://help.aliyun.com/document_detail/189313.html) operation to query the available images in the specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * e2c9c365024a44369c9b955a998a****
   */
  imageId?: string;
  /**
   * @remarks
   * The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The plan ID. You can call the [ListPlans](https://help.aliyun.com/document_detail/189314.html) operation to query all plans provided by Simple Application Server in the specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * swas.s1.c1m1s40b3t05
   */
  planId?: string;
  /**
   * @remarks
   * The region ID of the simple application servers. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      dataDiskSize: 'DataDiskSize',
      imageId: 'ImageId',
      period: 'Period',
      planId: 'PlanId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      chargeType: 'string',
      clientToken: 'string',
      dataDiskSize: 'number',
      imageId: 'string',
      period: 'number',
      planId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the simple application servers.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E1FEE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the key pair. The name must be 2 to 64 characters in length and can contain letters, digits, colons (.), underscores (_), and hyphens (-). It must start with a letter but cannot start with http:// or https://.
   * 
   * This parameter is required.
   * 
   * @example
   * KeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      keyPairName: 'KeyPairName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      keyPairName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the key pair. The name must be 2 to 64 characters in length and can contain letters, digits, colons (.), underscores (_), and hyphens (-). It must start with a letter but cannot start with http:// or https://.
   * 
   * @example
   * KeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The private key of the key pair. The PEM-encoded private key is in PKCS#8 format.
   * 
   * @example
   * MIIEpAIBAAKCAQEAtReyMzLIcBH78EV2zj****
   */
  privateKeyBody?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      privateKeyBody: 'PrivateKeyBody',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      privateKeyBody: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateKeyPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The disk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp18kjxg9ebrhsgi****
   */
  diskId?: string;
  /**
   * @remarks
   * The region ID of the simple application server to which the disk is attached.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The snapshot name. The name must be 2 to 50 characters in length. It must start with a letter but cannot start with `http://` or `https://`. The name can only contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * test-SnapshotName
   */
  snapshotName?: string;
  /**
   * @remarks
   * The tags that you want to add to the snapshot. You can specify up to 20 tags.
   */
  tag?: CreateSnapshotRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diskId: 'DiskId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      snapshotName: 'SnapshotName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diskId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      snapshotName: 'string',
      tag: { 'type': 'array', 'itemType': CreateSnapshotRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-bp16oazlsold4dks****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSnapshotResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The command ID. You can call the [DescribeCommands](https://help.aliyun.com/document_detail/64843.html) operation to query all available command IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * c-sh02yh0932w****
   */
  commandId?: string;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCommandResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCommandResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomImageRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The custom image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * m-2zehv38jjmwva1ee****
   */
  imageId?: string;
  /**
   * @remarks
   * The region ID of the custom image. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      imageId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomImageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that you want to use to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html)
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the custom image. The value can be a JSON array that consists of up to 15 image IDs. Separate multiple image IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["m-2zehv38jjmwva1ee****", "m-bp1hj0zhmheyq2kz****"]
   */
  imageIds?: string;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      imageIds: 'ImageIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      imageIds: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomImagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCustomImagesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the firewall rule.
   * 
   * This parameter is required.
   * 
   * @example
   * eeea34d9867b4d55a4ff8d5fcfbd****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFirewallRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFirewallRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallRulesRequest extends $dara.Model {
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
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the firewall rules that you want to delete.
   */
  ruleIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallRulesShrinkRequest extends $dara.Model {
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
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the firewall rules that you want to delete.
   */
  ruleIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      ruleIdsShrink: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
      ruleIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallRulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFirewallRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFirewallRulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallTemplateRulesRequest extends $dara.Model {
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
   * The ID of the firewall template.
   * 
   * This parameter is required.
   * 
   * @example
   * ft-bcf1a7hrdq717****
   */
  firewallTemplateId?: string;
  /**
   * @remarks
   * The IDs of the firewall template rules.
   * 
   * This parameter is required.
   */
  firewallTemplateRuleId?: string[];
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      firewallTemplateId: 'FirewallTemplateId',
      firewallTemplateRuleId: 'FirewallTemplateRuleId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      firewallTemplateId: 'string',
      firewallTemplateRuleId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallTemplateRuleId)) {
      $dara.Model.validateArray(this.firewallTemplateRuleId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallTemplateRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallTemplateRulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFirewallTemplateRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFirewallTemplateRulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallTemplatesRequest extends $dara.Model {
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
   * The IDs of the firewall templates.
   * 
   * This parameter is required.
   */
  firewallTemplateId?: string[];
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      firewallTemplateId: 'FirewallTemplateId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      firewallTemplateId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallTemplateId)) {
      $dara.Model.validateArray(this.firewallTemplateId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFirewallTemplatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFirewallTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFirewallTemplatesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceKeyPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceKeyPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsRequest extends $dara.Model {
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
   * The names of the SSH key pairs. The name must be 2 to 64 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter and cannot start with http:// or https://. You can specify the names of a maximum of 50 SSH key pairs.
   * 
   * This parameter is required.
   */
  keyPairNames?: string[];
  /**
   * @remarks
   * The region ID of the simple application servers. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      keyPairNames: 'KeyPairNames',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      keyPairNames: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keyPairNames)) {
      $dara.Model.validateArray(this.keyPairNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyPairsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteKeyPairsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteKeyPairsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the snapshot.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bp16oazlsold4dks****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSnapshotResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The snapshot IDs. The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["s-bp16oazlsold4dks****", "s-bp16oazlsold4abc****"]
   */
  snapshotIds?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      snapshotIds: 'SnapshotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      snapshotIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C2DE174B-7196-5778-A00D-6EA2601B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSnapshotsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the simple application servers.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the specified simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantAttributesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the simple application servers.
   * 
   * This parameter is required.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the specified simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdsShrink: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Command Assistant information.
   */
  cloudAssistant?: DescribeCloudAssistantAttributesResponseBodyCloudAssistant[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAssistant: 'CloudAssistant',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssistant: { 'type': 'array', 'itemType': DescribeCloudAssistantAttributesResponseBodyCloudAssistant },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAssistant)) {
      $dara.Model.validateArray(this.cloudAssistant);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantAttributesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudAssistantAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCloudAssistantAttributesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the simple application servers.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the simple application servers.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantStatusShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the simple application servers.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the simple application servers.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdsShrink: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdsShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Cloud Assistant client is installed on the server.
   */
  cloudAssistantStatus?: DescribeCloudAssistantStatusResponseBodyCloudAssistantStatus[];
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAssistantStatus: 'CloudAssistantStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssistantStatus: { 'type': 'array', 'itemType': DescribeCloudAssistantStatusResponseBodyCloudAssistantStatus },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cloudAssistantStatus)) {
      $dara.Model.validateArray(this.cloudAssistantStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudAssistantStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCloudAssistantStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudMonitorAgentStatusesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The IDs of the simple application servers. The value can be a JSON array that consists of up to 100 simple application server IDs. Separate multiple server IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["2ad1ae67295445f598017499dc******","2ad1ae67295445f598017499dc******"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region ID of the simple application servers. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceIds: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudMonitorAgentStatusesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Cloud Monitor agent was automatically installed on the simple application server.
   */
  instanceStatusList?: DescribeCloudMonitorAgentStatusesResponseBodyInstanceStatusList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E1FEE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceStatusList: 'InstanceStatusList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatusList: { 'type': 'array', 'itemType': DescribeCloudMonitorAgentStatusesResponseBodyInstanceStatusList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatusList)) {
      $dara.Model.validateArray(this.instanceStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudMonitorAgentStatusesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCloudMonitorAgentStatusesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCloudMonitorAgentStatusesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandInvocationsRequest extends $dara.Model {
  /**
   * @remarks
   * The command ID. You can call the [DescribeCommands](https://help.aliyun.com/document_detail/64843.html) operation to query all available command IDs.
   * 
   * @example
   * c-sh02yh0932w****
   */
  commandId?: string;
  /**
   * @remarks
   * The command name. If both CommandName and InstanceId are specified, CommandName does not take effect.
   * 
   * @example
   * testName
   */
  commandName?: string;
  /**
   * @remarks
   * The command type. Valid values:
   * 
   * *   RunBatScript: batch command, applicable to Windows instances
   * *   RunPowerShellScript: PowerShell command, applicable to Windows instances
   * *   RunShellScript: shell command, applicable to Linux instances
   * 
   * @example
   * RunPowerShellScript
   */
  commandType?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The overall execution state of the command. The value of this parameter depends on the execution status of the command on all the involved instances. Valid values:
   * 
   * *   Pending: The command is being verified or sent. When the execution state on at least one instance is Pending, the overall execution state is Pending.
   * 
   * *   Running: The command is being run on the instances. When the execution state on at least one instance is Running, the overall execution state is Running.
   * 
   * *   Success: When the execution state on at least one instance is Success and the execution state on other instances is Stopped or Success, the overall execution state is Success.
   * 
   *     *   Command that is set to run immediately: The command execution is complete, and the exit code is 0.
   * 
   * *   Failed: When the execution state on all instances is Stopped or Failed, the overall execution state is Failed. When the execution state on an instance is one of the following values, Failed is returned as the overall execution state:
   * 
   *     *   Invalid: The command is invalid.
   *     *   Aborted: The command fails to be sent.
   *     *   Failed: The command execution is complete, and the exit code is not 0.
   *     *   Timeout: The command execution times out.
   *     *   Error: An error occurs when the command is being run.
   * 
   * *   Stopping: The command task is being stopped. When the execution state on at least one instance is Stopping, the overall execution state is Stopping.
   * 
   * *   Stopped: The command task is stopped. When the execution state on all instances is Stopped, the overall execution state is Stopped. When the execution state on an instance is one of the following values, Stopped is returned as the overall execution state:
   * 
   *     *   Cancelled: The command task is canceled.
   *     *   Terminated: The command task is terminated.
   * 
   * *   PartialFailed: The command execution succeeds on some instances and fails on other instances. When the execution state on some instances is Success and the execution state on other instances is Failed or Stopped, the overall execution state is PartialFailed.
   * 
   * >  The value of the `InvokeStatus` response parameter is similar to the value of InvocationStatus. We recommend that you ignore InvokeStatus and check the value of InvocationStatus.
   * 
   * @example
   * Success
   */
  invocationStatus?: string;
  /**
   * @remarks
   * The execution ID of the command.
   * 
   * @example
   * t-hz02p9545t6****
   */
  invokeId?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      commandName: 'CommandName',
      commandType: 'CommandType',
      instanceId: 'InstanceId',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      commandName: 'string',
      commandType: 'string',
      instanceId: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandInvocationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The command executions.
   */
  commandInvocations?: DescribeCommandInvocationsResponseBodyCommandInvocations[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commandInvocations: 'CommandInvocations',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandInvocations: { 'type': 'array', 'itemType': DescribeCommandInvocationsResponseBodyCommandInvocations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.commandInvocations)) {
      $dara.Model.validateArray(this.commandInvocations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandInvocationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCommandInvocationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCommandInvocationsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsRequest extends $dara.Model {
  /**
   * @remarks
   * The command ID.
   * 
   * @example
   * c-sh02yh0932w****
   */
  commandId?: string;
  /**
   * @remarks
   * The command name. Fuzzy match is not supported.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The provider of the common command. Take note of the following items:
   * 
   * *   If you set this parameter to `AlibabaCloud`, all the common commands provided by Alibaba Cloud are queried.
   * *   If you set this parameter to `User`, all the custom commands created by you are queried.
   * 
   * This parameter is required.
   * 
   * @example
   * AlibabaCloud
   */
  provider?: string;
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
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags that are bound to the command.
   */
  tag?: DescribeCommandsRequestTag[];
  /**
   * @remarks
   * The language type of the command. Valid values:
   * 
   * *   RunBatScript: batch command, applicable to Windows instances
   * *   RunPowerShellScript: PowerShell command, applicable to Windows instances
   * *   RunShellScript: shell command, applicable to Linux instances
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      provider: 'Provider',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      name: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      provider: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeCommandsRequestTag },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried commands.
   */
  commands?: DescribeCommandsResponseBodyCommands[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of commands.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: { 'type': 'array', 'itemType': DescribeCommandsResponseBodyCommands },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommandsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCommandsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCommandsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseErrorLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Simple Database Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC. The end time must be later than the start time.
   * 
   * > The time displayed in the Simple Application Server console is in the format of UTC+8.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-08T04:04Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the Simple Database Service instance.
   * 
   * You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * > The time displayed in the Simple Application Server console is in the format of UTC+8.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-07T04:04Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      databaseInstanceId: 'DatabaseInstanceId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInstanceId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseErrorLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the error log entry was generated. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * > The time displayed in the Simple Application Server console is in the format of UTC+8.
   */
  errorLogs?: DescribeDatabaseErrorLogsResponseBodyErrorLogs[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorLogs: 'ErrorLogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorLogs: { 'type': 'array', 'itemType': DescribeDatabaseErrorLogsResponseBodyErrorLogs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.errorLogs)) {
      $dara.Model.validateArray(this.errorLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseErrorLogsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDatabaseErrorLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDatabaseErrorLogsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Simple Database Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * > The time displayed in the Simple Application Server console is in the format of UTC+8.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-07T04:04Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the metric. Valid values:
   * 
   * *   MySQL_MemCpuUsage: The CPU utilization and memory usage of the instance within the entire operating system.
   * *   MySQL_DetailedSpaceUsage: The total space usage, data space, log space, temporary space, and system space of the instance.
   * *   MySQL_Sessions : The total number of active connections.
   * *   MySQL_IOPS: The IOPS of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL_MemCpuUsage
   */
  metricName?: string;
  /**
   * @remarks
   * The region ID of the Simple Database Service instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * > The time displayed in the Simple Application Server console is in the format of UTC+8.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-06T04:04Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      databaseInstanceId: 'DatabaseInstanceId',
      endTime: 'EndTime',
      metricName: 'MetricName',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInstanceId: 'string',
      endTime: 'string',
      metricName: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data format. Valid values:
   * 
   * *   cpuusage\\&memusage
   * *   active_session\\&total_session
   * *   ins_size\\&data_size\\&log_size\\&tmp_size\\&other_size
   * *   io
   * 
   * @example
   * cpuusage&memusage
   */
  dataFormat?: string;
  /**
   * @remarks
   * The monitoring data.
   * 
   * @example
   * [  {     \\"date"\\: " 2022-09-06T04:04:00Z",\\"value\\":\\"0.77&3.69\\"  } ]
   */
  metricData?: string;
  /**
   * @remarks
   * The name of the metric. Valid values:
   * 
   * *   MySQL_MemCpuUsage: The CPU utilization and memory usage of the instance within the entire operating system.
   * *   MySQL_DetailedSpaceUsage: The total space usage, data space, log space, temporary space, and system space of the instance.
   * *   MySQL_Sessions : The total number of active connections.
   * *   MySQL_IOPS: The IOPS of the instance.
   * 
   * @example
   * MySQL_MemCpuUsage
   */
  metricName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The unit of the monitoring metric.
   * 
   * *   %
   * *   int
   * *   MB
   * 
   * @example
   * %
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      dataFormat: 'DataFormat',
      metricData: 'MetricData',
      metricName: 'MetricName',
      requestId: 'RequestId',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFormat: 'string',
      metricData: 'string',
      metricName: 'string',
      requestId: 'string',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceMetricDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDatabaseInstanceMetricDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDatabaseInstanceMetricDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Simple Database Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The region ID of the Simple Database Service instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The range of ParameterValue.
   * 
   * > The value of CheckingCode varies based on the value of ParameterName.
   */
  configParameters?: DescribeDatabaseInstanceParametersResponseBodyConfigParameters[];
  /**
   * @remarks
   * The database engine that the instance runs. The value must be MySQL.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The version of the database engine. Valid values:
   * 
   * *   5.7: MySQL 5.7.
   * *   8.0: MySQL 8.0.
   * 
   * @example
   * 5.5
   */
  engineVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The range of ParameterValue.
   * 
   * > The value of CheckingCode varies based on the value of ParameterName.
   */
  runningParameters?: DescribeDatabaseInstanceParametersResponseBodyRunningParameters[];
  static names(): { [key: string]: string } {
    return {
      configParameters: 'ConfigParameters',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      requestId: 'RequestId',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configParameters: { 'type': 'array', 'itemType': DescribeDatabaseInstanceParametersResponseBodyConfigParameters },
      engine: 'string',
      engineVersion: 'string',
      requestId: 'string',
      runningParameters: { 'type': 'array', 'itemType': DescribeDatabaseInstanceParametersResponseBodyRunningParameters },
    };
  }

  validate() {
    if(Array.isArray(this.configParameters)) {
      $dara.Model.validateArray(this.configParameters);
    }
    if(Array.isArray(this.runningParameters)) {
      $dara.Model.validateArray(this.runningParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstanceParametersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDatabaseInstanceParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDatabaseInstanceParametersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the Simple Database Service instances. The value can be a JSON array that consists of up to 100 Simple Database Service instance IDs. Separate multiple instance IDs with commas (,).
   * 
   * @example
   * ["swasdb-xxx******","swasdb-yyy******"]
   */
  databaseInstanceIds?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the Simple Database Service instances.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseInstanceIds: 'DatabaseInstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInstanceIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the Simple Database Service instances.
   */
  databaseInstances?: DescribeDatabaseInstancesResponseBodyDatabaseInstances[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databaseInstances: 'DatabaseInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInstances: { 'type': 'array', 'itemType': DescribeDatabaseInstancesResponseBodyDatabaseInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.databaseInstances)) {
      $dara.Model.validateArray(this.databaseInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDatabaseInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDatabaseInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseSlowLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Simple Database Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. The end time must be later than the start time. The interval between the start time and the end time must be less than 7 days.
   * 
   * Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The time displayed in the Simple Application Server console is in the format of UTC+8.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-08T04:04:44Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 30 to 100.
   * 
   * Maximum value: 100.
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the Simple Database Service instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The time displayed in the Simple Application Server console is in the format of UTC+8.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-07T04:04:44Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      databaseInstanceId: 'DatabaseInstanceId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInstanceId: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseSlowLogRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database engine that the instance runs.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 30 to 100.
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The number of logical reads.
   * 
   * @example
   * 200
   */
  physicalIORead?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The slow query logs returned.
   */
  slowLogs?: DescribeDatabaseSlowLogRecordsResponseBodySlowLogs[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      physicalIORead: 'PhysicalIORead',
      requestId: 'RequestId',
      slowLogs: 'SlowLogs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      physicalIORead: 'number',
      requestId: 'string',
      slowLogs: { 'type': 'array', 'itemType': DescribeDatabaseSlowLogRecordsResponseBodySlowLogs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.slowLogs)) {
      $dara.Model.validateArray(this.slowLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDatabaseSlowLogRecordsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDatabaseSlowLogRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDatabaseSlowLogRecordsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplateApplyResultsRequest extends $dara.Model {
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
   * The ID of the firewall template.
   * 
   * @example
   * ft-bcf1a7hrdq717****
   */
  firewallTemplateId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the execution to apply the template.
   */
  taskId?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      firewallTemplateId: 'FirewallTemplateId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      firewallTemplateId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      taskId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.taskId)) {
      $dara.Model.validateArray(this.taskId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplateApplyResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  /**
   * @remarks
   * The returned results.
   */
  data?: DescribeFirewallTemplateApplyResultsResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
      data: { 'type': 'array', 'itemType': DescribeFirewallTemplateApplyResultsResponseBodyData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplateApplyResultsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFirewallTemplateApplyResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFirewallTemplateApplyResultsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplateRulesApplyResultRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the firewall template.
   * 
   * This parameter is required.
   * 
   * @example
   * ft-bcf1a7hrdq717****
   */
  firewallTemplateId?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the execution to apply the template rule.
   * 
   * This parameter is required.
   * 
   * @example
   * aft-ikgt0bynitvs3****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      firewallTemplateId: 'FirewallTemplateId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      firewallTemplateId: 'string',
      instanceId: 'string',
      regionId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplateRulesApplyResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  data?: DescribeFirewallTemplateRulesApplyResultResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': DescribeFirewallTemplateRulesApplyResultResponseBodyData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplateRulesApplyResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFirewallTemplateRulesApplyResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFirewallTemplateRulesApplyResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the firewall templates.
   */
  firewallTemplateId?: string[];
  /**
   * @remarks
   * The name of the firewall template.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallTemplateId: 'FirewallTemplateId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallTemplateId: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallTemplateId)) {
      $dara.Model.validateArray(this.firewallTemplateId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the queried firewall templates.
   */
  firewallTemplates?: DescribeFirewallTemplatesResponseBodyFirewallTemplates[];
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      firewallTemplates: 'FirewallTemplates',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallTemplates: { 'type': 'array', 'itemType': DescribeFirewallTemplatesResponseBodyFirewallTemplates },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.firewallTemplates)) {
      $dara.Model.validateArray(this.firewallTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFirewallTemplatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFirewallTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeFirewallTemplatesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The fingerprint of the key pair.
   * 
   * @example
   * 4f:70:62:e9:0c:72:f7:ee:74:ce:e3:bf:e0:82:**:**
   */
  fingerprint?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * KeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fingerprint: 'Fingerprint',
      keyPairName: 'KeyPairName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerprint: 'string',
      keyPairName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceKeyPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceKeyPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePasswordsSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/2361076.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePasswordsSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a logon password is set for the simple application server.
   * 
   * @example
   * true
   */
  instancePasswordSetting?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether a VNC connection password is set for the simple application server.
   * 
   * @example
   * true
   */
  vncPasswordSetting?: boolean;
  static names(): { [key: string]: string } {
    return {
      instancePasswordSetting: 'InstancePasswordSetting',
      requestId: 'RequestId',
      vncPasswordSetting: 'VncPasswordSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePasswordSetting: 'boolean',
      requestId: 'string',
      vncPasswordSetting: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancePasswordsSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstancePasswordsSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstancePasswordsSettingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceVncUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceVncUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The VNC connection address of the server.
   * 
   * @example
   * wss%3A%2F%2Fhz01-vncproxy.aliyun.com%2Fwebsockify%2F%3Fs%3Dwz3L8wEMO6KMt7%252FXInEMtKVubBB%252F7rv055kOm8eUOD%252*****YlmsKjOfz6
   */
  vncUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vncUrl: 'VncUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vncUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceVncUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceVncUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceVncUrlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The execution ID. You can call the [DescribeInvocations](https://help.aliyun.com/document_detail/439368.html) operation to query execution IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * t-bj02prjhw1n****
   */
  invokeId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      invokeId: 'InvokeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      invokeId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution results.
   */
  invocationResult?: DescribeInvocationResultResponseBodyInvocationResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invocationResult: 'InvocationResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResult: DescribeInvocationResultResponseBodyInvocationResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.invocationResult && typeof (this.invocationResult as any).validate === 'function') {
      (this.invocationResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInvocationResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInvocationResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * 3a658ca270df4df39f22e289b338****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the command execution. Valid values:
   * 
   * *   Running: The command is being executed.
   * *   Finished: The execution is complete.
   * *   Failed: The execution fails.
   * 
   * @example
   * Finished
   */
  invokeStatus?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      invokeStatus: 'InvokeStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      invokeStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The command name.
   */
  invocations?: DescribeInvocationsResponseBodyInvocations[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      invocations: 'Invocations',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.invocations)) {
      $dara.Model.validateArray(this.invocations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInvocationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInvocationsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorDataRequest extends $dara.Model {
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
   * The end of the time range to query. The following formats are supported:
   * 
   * *   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 January 1, 1970.
   * *   Time format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * > The interval between the start time and the end time is less than or equal to 31 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-08T08:04:44Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 1440.
   * 
   * @example
   * 100
   */
  length?: string;
  /**
   * @remarks
   * The name of the metric. Valid values:
   * 
   * *   MEMORY_ACTUALUSEDSPACE: the memory usage. Unit: bytes.
   * *   DISKUSAGE_USED: the disk usage. Unit: bytes.
   * *   CPU_UTILIZATION: the CPU usage, in percentage.
   * *   VPC_PUBLICIP_INTERNETOUT_RATE: the outbound bandwidth. Unit: bits/s.
   * *   VPC_PUBLICIP_INTERNETIN_RATE: the inbound bandwidth. Unit: bits/s.
   * *   DISK_READ_IOPS: the read IOPS of the disk. Unit: count/s.
   * *   DISK_WRITE_IOPS: the write IOPS of the disk. Unit: count/s.
   * *   FLOW_USED: the traffic usage. Unit: bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * DISKUSAGE_USED
   */
  metricName?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nOc1nj4M9UaAZ/I8db***
   */
  nextToken?: string;
  /**
   * @remarks
   * The interval at which the monitoring data is queried. Valid values: 60, 300, and 900. Unit: seconds.
   * 
   * >  If MetricName is set to FLOW_USED, set Period to 3600 (one hour). In other cases, set Period based on your business requirements.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The following formats are supported:
   * 
   * *   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 January 1, 1970.
   * *   Time format: YYYY-MM-DDThh:mm:ssZ.
   * > 
   * > - The specified time range includes the end time and excludes the start time. The start time must be earlier than the end time.
   * > - The interval between the start time and the end time is less than or equal to 31 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-07T04:04:44Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      length: 'Length',
      metricName: 'MetricName',
      nextToken: 'NextToken',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endTime: 'string',
      instanceId: 'string',
      length: 'string',
      metricName: 'string',
      nextToken: 'string',
      period: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring data.
   * 
   * @example
   * []
   */
  datapoints?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nOc1nj4M9UaAZ/I8db***
   */
  nextToken?: string;
  /**
   * @remarks
   * The interval at which the monitoring data is queried. Valid values: 60, 300, and 900. Unit: seconds.
   * 
   * >  If you set the MetricName request parameter to FLOW_USED, the value of Period is 3600 (one hour).
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datapoints: 'Datapoints',
      nextToken: 'NextToken',
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoints: 'string',
      nextToken: 'string',
      period: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMonitorDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMonitorDataResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityAgentStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityAgentStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the Security Center agent. Valid values:
   * 
   * *   pause: The Security Center agent suspends protection for your server.
   * *   online: The Security Center agent is protecting your server.
   * *   offline: The Security Center agent does not protect your server.
   * 
   * @example
   * online
   */
  clientStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientStatus: 'ClientStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityAgentStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSecurityAgentStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSecurityAgentStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairRequest extends $dara.Model {
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
   * The IDs of the simple application servers from which you want to unbind SSH key pairs. You can specify a maximum of 50 IDs of simple application servers.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The name of the key pair. The name must be globally unique. The name must be 2 to 64 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
   * 
   * This parameter is required.
   * 
   * @example
   * KeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The region ID of the simple application servers.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceIds: 'InstanceIds',
      keyPairName: 'KeyPairName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      keyPairName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of simple application servers from which you fail to unbind key pairs.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The request results.
   */
  results?: DetachKeyPairResponseBodyResults[];
  /**
   * @remarks
   * The total number of simple application servers from which the SSH key pair is unbound.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      requestId: 'RequestId',
      results: 'Results',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DetachKeyPairResponseBodyResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachKeyPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableFirewallRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the firewall rule.
   * 
   * @example
   * custom
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the firewall rule. You can call the ListFirewallRules operation to query the ID of the firewall rule.
   * 
   * This parameter is required.
   * 
   * @example
   * eeea34d9867b4d55a4ff8d5fcfbd****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableFirewallRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableFirewallRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableFirewallRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableFirewallRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFirewallRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the firewall rule.
   * 
   * @example
   * custom
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the firewall rule.
   * 
   * This parameter is required.
   * 
   * @example
   * eeea34d9867b4d55a4ff8d5fcfbd****
   */
  ruleId?: string;
  /**
   * @remarks
   * The IP address or CIDR block that is allowed in the firewall policy.
   * 
   * @example
   * 10.147.33.**
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      remark: 'Remark',
      ruleId: 'RuleId',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      ruleId: 'string',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFirewallRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableFirewallRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableFirewallRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableFirewallRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairRequest extends $dara.Model {
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
   * The name of the key pair. The name must be 2 to 64 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter and cannot start with http:// or https://.
   * 
   * This parameter is required.
   * 
   * @example
   * KeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The public key of the key pair.
   * 
   * This parameter is required.
   * 
   * @example
   * ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCbO5Govwhb0iHzoMYKkIQxjlHyHH8nxFsW6KF5saxgYhOwdeIpWngpi+/NDWQKvuOnXFFDh/o3eJJkh3rqP+RlMggt4HLQWOd9TS0f4/cgbAzud1caW9PnankCr****
   */
  publicKeyBody?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      keyPairName: 'KeyPairName',
      publicKeyBody: 'PublicKeyBody',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      keyPairName: 'string',
      publicKeyBody: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the key pair. The name must be 2 to 64 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter and cannot start with http:// or https://.
   * 
   * @example
   * KeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportKeyPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudAssistantRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the simple application servers.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The region ID of the simple application servers. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudAssistantShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the simple application servers.
   * 
   * This parameter is required.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The region ID of the simple application servers. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdsShrink: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdsShrink: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudAssistantResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudAssistantResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallCloudAssistantResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InstallCloudAssistantResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudMonitorAgentRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to forcibly install the CloudMonitor agent. Valid values:
   * 
   * *   true (default value): forcibly installs the CloudMonitor agent.
   * *   false: does not forcibly install the CloudMonitor agent.
   * 
   * @example
   * true
   */
  force?: boolean;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * 9ae7106e68eb4402b0dcbd48a9de****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      force: 'Force',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      force: 'boolean',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudMonitorAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallCloudMonitorAgentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallCloudMonitorAgentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InstallCloudMonitorAgentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The command ID. You can call the DescribeCommands operation to query all available command IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * c-sh02yh0932w****
   */
  commandId?: string;
  /**
   * @remarks
   * The IDs of the simple application servers. The value can be a JSON array that consists of up to 50 IDs of simple application servers. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["2ad1ae67295445f598017499dc****", "2ad1ae67295445f598017123dc****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The key-value pairs of custom parameters to specify when the custom parameter feature is enabled.
   * 
   * *   You can specify up to 10 custom parameters. Each key in a Map collection cannot be an empty string and can be up to 64 characters in length.
   * *   Values in a Map collection can be empty strings. The total length of the custom parameters and the original command cannot exceed 18 KB after they are encoded in Base64.
   * *   The custom parameter names that you specify for the Parameters parameter must be included in the custom parameter names that you specified when you created the command.
   * *   You can use empty strings to represent the custom parameters that are not specified. If you want to disable the custom parameter feature, you can leave this parameter empty.
   * 
   * @example
   * {"delayed_insert_timeout":"600","max_length_for_sort_data":"2048"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the user who runs the command in a simple application server. The username cannot exceed 255 characters in length.
   * 
   * *   For Linux servers, the default value is the root username.
   * *   For Windows servers, the default value is the system username.
   * 
   * You can change the user to run the command only for Linux simple application servers.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      instanceIds: 'InstanceIds',
      parameters: 'Parameters',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      instanceIds: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      username: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeCommandShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The command ID. You can call the DescribeCommands operation to query all available command IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * c-sh02yh0932w****
   */
  commandId?: string;
  /**
   * @remarks
   * The IDs of the simple application servers. The value can be a JSON array that consists of up to 50 IDs of simple application servers. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["2ad1ae67295445f598017499dc****", "2ad1ae67295445f598017123dc****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The key-value pairs of custom parameters to specify when the custom parameter feature is enabled.
   * 
   * *   You can specify up to 10 custom parameters. Each key in a Map collection cannot be an empty string and can be up to 64 characters in length.
   * *   Values in a Map collection can be empty strings. The total length of the custom parameters and the original command cannot exceed 18 KB after they are encoded in Base64.
   * *   The custom parameter names that you specify for the Parameters parameter must be included in the custom parameter names that you specified when you created the command.
   * *   You can use empty strings to represent the custom parameters that are not specified. If you want to disable the custom parameter feature, you can leave this parameter empty.
   * 
   * @example
   * {"delayed_insert_timeout":"600","max_length_for_sort_data":"2048"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the user who runs the command in a simple application server. The username cannot exceed 255 characters in length.
   * 
   * *   For Linux servers, the default value is the root username.
   * *   For Windows servers, the default value is the system username.
   * 
   * You can change the user to run the command only for Linux simple application servers.
   * 
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      instanceIds: 'InstanceIds',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      instanceIds: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution ID of the command.
   * 
   * @example
   * t-bj02prjhw1n****
   */
  invokeId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeCommandResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InvokeCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InvokeCommandResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImageShareAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure the idempotence of a request?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the shared custom image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-2zehv38jjmwva1ee****
   */
  imageId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      imageId: 'ImageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      imageId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImageShareAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the shared custom images.
   */
  imageShareUsers?: ListCustomImageShareAccountsResponseBodyImageShareUsers[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageShareUsers: 'ImageShareUsers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageShareUsers: { 'type': 'array', 'itemType': ListCustomImageShareAccountsResponseBodyImageShareUsers },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.imageShareUsers)) {
      $dara.Model.validateArray(this.imageShareUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImageShareAccountsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomImageShareAccountsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomImageShareAccountsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the data disk snapshot.
   * 
   * @example
   * s-acscasca****
   */
  dataSnapshotId?: string;
  /**
   * @remarks
   * The image IDs of the simple application server. The value can be a JSON array that consists of up to 100 image IDs. Separate multiple image IDs with commas (,).
   * 
   * @example
   * ["fe9c66133a9d4688872869726b52****", "794c230fd3e64ea19f83f4d7a0ad****"]
   */
  imageIds?: string;
  /**
   * @remarks
   * The image names of the simple application servers. The value can be a JSON array that consists of up to 100 image names. Separate multiple image names with commas (,).
   * 
   * @example
   * ["test1****", "test2****"]
   */
  imageNames?: string;
  /**
   * @remarks
   * The ID of the simple application server from which the image is derived.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Maximum value: 100.
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the simple application servers corresponding to the custom images. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2bti7cf7yj2i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to query shared images. Valid values:
   * 
   * *   False: do not query shared images. The shared images are not included in the response.
   * *   True: query shared images. The shared images are included in the response.
   * 
   * If you do not specify this parameter, all images are returned.
   * 
   * @example
   * False
   */
  share?: boolean;
  /**
   * @remarks
   * The ID of the system disk snapshot.
   * 
   * @example
   * s-bp14m09pq8***0g6
   */
  systemSnapshotId?: string;
  /**
   * @remarks
   * Tag N of the custom image.
   */
  tag?: ListCustomImagesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataSnapshotId: 'DataSnapshotId',
      imageIds: 'ImageIds',
      imageNames: 'ImageNames',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      share: 'Share',
      systemSnapshotId: 'SystemSnapshotId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataSnapshotId: 'string',
      imageIds: 'string',
      imageNames: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      share: 'boolean',
      systemSnapshotId: 'string',
      tag: { 'type': 'array', 'itemType': ListCustomImagesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of queried custom images.
   */
  customImages?: ListCustomImagesResponseBodyCustomImages[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      customImages: 'CustomImages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customImages: { 'type': 'array', 'itemType': ListCustomImagesResponseBodyCustomImages },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customImages)) {
      $dara.Model.validateArray(this.customImages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCustomImagesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisksRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the disks. The value can be a JSON array that consists of up to 100 disk IDs. Separate multiple disk IDs with commas (,).
   * 
   * @example
   * ["d-bp14wq0149cpp2x****", "d-bp14wq0149cpp2y****"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * *   system: system disk
   * *   data: data disk
   * 
   * By default, system disks and data disks are both queried.
   * 
   * @example
   * System
   */
  diskType?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the disks.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags that are added to the disks.
   */
  tag?: ListDisksRequestTag[];
  static names(): { [key: string]: string } {
    return {
      diskIds: 'DiskIds',
      diskType: 'DiskType',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskIds: 'string',
      diskType: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListDisksRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried disks.
   */
  disks?: ListDisksResponseBodyDisks[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      disks: 'Disks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: { 'type': 'array', 'itemType': ListDisksResponseBodyDisks },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDisksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDisksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDisksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirewallRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the firewall rule.
   * 
   * @example
   * 1a16263ab0f541288312a15fa64280de
   */
  firewallRuleId?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags of the firewall rule.
   */
  tag?: ListFirewallRulesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      firewallRuleId: 'FirewallRuleId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallRuleId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': ListFirewallRulesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirewallRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the firewall rules.
   */
  firewallRules?: ListFirewallRulesResponseBodyFirewallRules[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      firewallRules: 'FirewallRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallRules: { 'type': 'array', 'itemType': ListFirewallRulesResponseBodyFirewallRules },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.firewallRules)) {
      $dara.Model.validateArray(this.firewallRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFirewallRulesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFirewallRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFirewallRulesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesRequest extends $dara.Model {
  /**
   * @remarks
   * The image IDs. The value can be a JSON array that consists of up to 50 image IDs. Format: `["xxx", "yyy", … "zzz"]`. Separate multiple image IDs with commas (,).
   * 
   * @example
   * ["fe9c66133a9d4688872869726b52****", "794c230fd3e64ea19f83f4d7a0ad****"]
   */
  imageIds?: string;
  /**
   * @remarks
   * The type of the images. Valid values:
   * 
   * *   system: OS images
   * *   app: application images
   * *   custom: custom images
   * 
   * @example
   * system
   */
  imageType?: string;
  /**
   * @remarks
   * The region ID of the images. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageIds: 'ImageIds',
      imageType: 'ImageType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIds: 'string',
      imageType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the queried images.
   */
  images?: ListImagesResponseBodyImages[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListImagesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePlansModificationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePlansModificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The operating system types supported by the plan.
   */
  plans?: ListInstancePlansModificationResponseBodyPlans[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      plans: 'Plans',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plans: { 'type': 'array', 'itemType': ListInstancePlansModificationResponseBodyPlans },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.plans)) {
      $dara.Model.validateArray(this.plans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePlansModificationResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancePlansModificationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancePlansModificationResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the simple application servers. The value can be a JSON array that consists of up to 100 simple application server IDs. Separate multiple server IDs with commas (,).
   * 
   * @example
   * ["2ad1ae67295445f598017499dc****", "2ad1ae67295445f598017123dc****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the simple application servers. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the simple application server.
   */
  instanceStatuses?: ListInstanceStatusResponseBodyInstanceStatuses[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 54
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceStatuses: 'InstanceStatuses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceStatuses: { 'type': 'array', 'itemType': ListInstanceStatusResponseBodyInstanceStatuses },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceStatuses)) {
      $dara.Model.validateArray(this.instanceStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the simple application servers. Set the value to PrePaid, which indicates the subscription billing method.
   * 
   * Default value: PrePaid.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The IDs of the simple application servers. The value can be a JSON array that consists of up to 100 simple application server IDs. Separate multiple server IDs with commas (,).
   * 
   * > If you specify both `InstanceIds` and `PublicIpAddresses`, make sure that the specified IDs and the specified public IP addresses belong to the same simple application servers. Otherwise, an empty result is returned.
   * 
   * @example
   * ["2ad1ae67295445f598017499dc****", "2ad1ae67295445f598017123dc****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The name of the simple application server. Fuzzy search with the asterisk (\\*) wildcard is supported.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The public IP addresses of the simple application servers. The value can be a JSON array that consists of up to 100 IP addresses. Separate multiple IP addresses with commas (,).
   * 
   * > If you specify both `InstanceIds` and `PublicIpAddresses`, make sure that the specified IDs and the specified public IP addresses belong to the same simple application servers. Otherwise, an empty result is returned.
   * 
   * @example
   * ["``42.1.**.**``", "``42.2.**.**``"]
   */
  publicIpAddresses?: string;
  /**
   * @remarks
   * The region ID of the simple application servers.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the simple application servers belong.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the simple application servers. Valid values:
   * 
   * *   Pending
   * *   Starting
   * *   Running
   * *   Stopping
   * *   Stopped
   * *   Resetting
   * *   Upgrading
   * *   Disabled
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The tags that are added to the simple application servers.
   */
  tag?: ListInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      instanceIds: 'InstanceIds',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publicIpAddresses: 'PublicIpAddresses',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      instanceIds: 'string',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      publicIpAddresses: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the queried simple application servers.
   */
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesTrafficPackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the simple application servers. The value can be a JSON array that consists of up to 100 simple application server IDs. Separate multiple server IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["2ad1ae67295445f598017499dc******","2ad1ae67295445f598017499dc******"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region ID of the simple application servers. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesTrafficPackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data transfers that exceed the quota of the data transfer plan in the current month. Unit: bytes.
   */
  instanceTrafficPackageUsages?: ListInstancesTrafficPackagesResponseBodyInstanceTrafficPackageUsages[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTrafficPackageUsages: 'InstanceTrafficPackageUsages',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTrafficPackageUsages: { 'type': 'array', 'itemType': ListInstancesTrafficPackagesResponseBodyInstanceTrafficPackageUsages },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTrafficPackageUsages)) {
      $dara.Model.validateArray(this.instanceTrafficPackageUsages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesTrafficPackagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesTrafficPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancesTrafficPackagesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyPairsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the AccessKey pair. The name must be 2 to 64 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). The name must start with a letter and cannot start with http:// or https://.
   * 
   * @example
   * KeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The page number. Page starts from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the simple application servers. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      keyPairName: 'KeyPairName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      keyPairName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyPairsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the queried AccessKey pairs.
   */
  keyPairs?: ListKeyPairsResponseBodyKeyPairs[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      keyPairs: 'KeyPairs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairs: { 'type': 'array', 'itemType': ListKeyPairsResponseBodyKeyPairs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keyPairs)) {
      $dara.Model.validateArray(this.keyPairs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyPairsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListKeyPairsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListKeyPairsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlansRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the plans. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the plans.
   */
  plans?: ListPlansResponseBodyPlans[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      plans: 'Plans',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plans: { 'type': 'array', 'itemType': ListPlansResponseBodyPlans },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.plans)) {
      $dara.Model.validateArray(this.plans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlansResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPlansResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   **zh-CN** (default): Chinese
   * *   **en-US**: English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The regions.
   */
  regions?: ListRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The disk ID.
   * 
   * @example
   * d-bp14wq0149cpp2xy****
   */
  diskId?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the simple application server that corresponds to the snapshots.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2bti7cf7****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The snapshot IDs. The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
   * 
   * @example
   * ["s-bp16oazlsold4dks****", "s-bp16oazlsold4abc****"]
   */
  snapshotIds?: string;
  /**
   * @remarks
   * The type of the source disk. Valid values:
   * 
   * *   system: system disk.
   * *   data: data disk.
   * 
   * @example
   * System
   */
  sourceDiskType?: string;
  /**
   * @remarks
   * Tag N that you want to add to the snapshot.
   */
  tag?: ListSnapshotsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      snapshotIds: 'SnapshotIds',
      sourceDiskType: 'SourceDiskType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      snapshotIds: 'string',
      sourceDiskType: 'string',
      tag: { 'type': 'array', 'itemType': ListSnapshotsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the snapshots.
   */
  snapshots?: ListSnapshotsResponseBodySnapshots[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': ListSnapshotsResponseBodySnapshots },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSnapshotsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that you want to use to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html)
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nOc1nj4M9UaAZ/I8db***
   */
  nextToken?: string;
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
  /**
   * @remarks
   * The ID of the resource. You can specify up to 50 resource IDs.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   instance
   * *   snapshot
   * *   customimage
   * *   command
   * *   firewallrule
   * *   disk
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags. You can specify up to 20 tags.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nOc1nj4M9UaAZ/I8db***
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  /**
   * @remarks
   * A collection of resources and the tags of the resources. The information includes the resource IDs, resource types, and key-value pairs of tags.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  validate() {
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * 9ae7106e68eb4402b0dcbd48a9de****
   */
  instanceId?: string;
  /**
   * @remarks
   * The password that corresponds to the username.
   * 
   * *   For a Linux server, you do not need to enter a password.
   * *   For a Windows server, enter the password that you set. If you have not set a password for the simple application server, set a password. For more information, see [Reset the password](https://help.aliyun.com/document_detail/60055.html).
   * 
   * @example
   * Test****
   */
  password?: string;
  /**
   * @remarks
   * The port number that is used to log on to the simple application server by using Workbench.
   * 
   * *   Linux servers: The default value is 22.
   * *   Windows servers: The default value is 3389.
   * 
   * >  If you want to connect to a server by using a custom port, you must modify the default remote connection port. For more information, see [Configure a custom remote connection port](https://help.aliyun.com/document_detail/2807402.html).
   * 
   * @example
   * 3389
   */
  port?: number;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The username of the simple application server.
   * 
   * *   For a Linux server, you do not need to enter a username.
   * *   For a Windows server, the default username `administrator` is used.
   * 
   * @example
   * administrator
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      password: 'string',
      port: 'number',
      regionId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The URL that you use to log on to the server.
   * 
   * @example
   * https://ecs-workbench.aliyun.com/view/instance/single/gbktfz****
   */
  redirectUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C2DE174B-7196-5778-A00D-6EA2601B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      redirectUrl: 'RedirectUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redirectUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoginInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LoginInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LoginInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseInstanceDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the Simple Database Service instance.
   * 
   * This parameter is required.
   */
  databaseInstanceDescription?: string;
  /**
   * @remarks
   * The ID of the Simple Database Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The region ID of the Simple Database Service instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseInstanceDescription: 'DatabaseInstanceDescription',
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseInstanceDescription: 'string',
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseInstanceDescriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseInstanceDescriptionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDatabaseInstanceDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDatabaseInstanceDescriptionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseInstanceParameterRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the Simple Database Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly restart the instance after parameters are modified. Valid values:
   * 
   * *   true: forcibly restarts the instance. If a new parameter value takes effect only after the instance restarts, you must set this parameter to true. Otherwise, the new parameter value cannot take effect.
   * *   false: does not forcibly restart the instance.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceRestart?: boolean;
  /**
   * @remarks
   * The JSON strings that consist of instance parameters and the values of the instance parameters. The parameter values are of the string type. Format: {"Parameter name 1":"Parameter value 1","Parameter name 2":"Parameter value 2"...}.
   * 
   * This parameter is required.
   * 
   * @example
   * {"delayed_insert_timeout":"600","max_length_for_sort_data":"2048"}
   */
  parameters?: string;
  /**
   * @remarks
   * The region ID of the Simple Database Service instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      forceRestart: 'ForceRestart',
      parameters: 'Parameters',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseInstanceId: 'string',
      forceRestart: 'boolean',
      parameters: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseInstanceParameterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseInstanceParameterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDatabaseInstanceParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDatabaseInstanceParameterResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirewallRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The port range. Valid values: 165535. Specify a port range in the format of \\<start port number>/\\<end port number>. Example: `1024/1055`, which indicates that the port range of 10241055.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the firewall rule.
   * 
   * @example
   * custom
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the firewall rule.
   * 
   * This parameter is required.
   * 
   * @example
   * eeea34d9867b4d55a4ff8d5fcfbd****
   */
  ruleId?: string;
  /**
   * @remarks
   * The transport layer protocol. Valid values:
   * 
   * *   TCP: the TCP protocol
   * *   UDP: the UDP protocol
   * *   TCP+UDP: the TCP and UDP protocols
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ruleProtocol?: string;
  /**
   * @remarks
   * The IP address or CIDR block that is allowed in the firewall rule.
   * 
   * @example
   * 10.147.33.**
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      port: 'Port',
      regionId: 'RegionId',
      remark: 'Remark',
      ruleId: 'RuleId',
      ruleProtocol: 'RuleProtocol',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      port: 'string',
      regionId: 'string',
      remark: 'string',
      ruleId: 'string',
      ruleProtocol: 'string',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirewallRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E1FEE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirewallRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFirewallRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyFirewallRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirewallTemplateRequest extends $dara.Model {
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
   * The description of the firewall template.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the firewall template.
   * 
   * This parameter is required.
   * 
   * @example
   * ft-bcf1a7hrdq717****
   */
  firewallTemplateId?: string;
  /**
   * @remarks
   * The firewall rule in the template.
   */
  firewallTemplateRule?: ModifyFirewallTemplateRequestFirewallTemplateRule[];
  /**
   * @remarks
   * The name of the firewall template.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      firewallTemplateId: 'FirewallTemplateId',
      firewallTemplateRule: 'FirewallTemplateRule',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      firewallTemplateId: 'string',
      firewallTemplateRule: { 'type': 'array', 'itemType': ModifyFirewallTemplateRequestFirewallTemplateRule },
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.firewallTemplateRule)) {
      $dara.Model.validateArray(this.firewallTemplateRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirewallTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFirewallTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFirewallTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyFirewallTemplateResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageShareStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * m-saacssasc****
   */
  imageId?: string;
  /**
   * @remarks
   * Valid values:
   * 
   * *   Share
   * *   UnShare
   * 
   * This parameter is required.
   * 
   * @example
   * Share
   */
  operation?: string;
  /**
   * @remarks
   * The region ID of the custom image. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      imageId: 'ImageId',
      operation: 'Operation',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      imageId: 'string',
      operation: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageShareStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageShareStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyImageShareStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyImageShareStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceVncPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The VNC connection password.
   * 
   * @example
   * ***
   */
  vncPassword?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      vncPassword: 'VncPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
      vncPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceVncPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceVncPasswordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyInstanceVncPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceVncPasswordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebootInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebootInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to forcibly restart the servers. Valid values:
   * 
   * *   true: forcibly restarts the servers. This operation is equivalent to the typical power-off operation. Cache data that is not written to storage devices on the server will be lost.
   * *   false: normally restarts the instance.
   * 
   * Default value: false
   * 
   * @example
   * false
   */
  forceReboot?: boolean;
  /**
   * @remarks
   * The IDs of the simple application servers. The value can be a JSON array that consists of up to 100 simple application server IDs. Separate multiple server IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["2ad1ae67295445f598017499dc****", "2ad1ae67295445f598017123dc****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region ID of the simple application servers. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      forceReboot: 'ForceReboot',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      forceReboot: 'boolean',
      instanceIds: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RebootInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RebootInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the Simple Database Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The region ID of the Simple Database Service instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleasePublicConnectionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleasePublicConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleasePublicConnectionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveCustomImageShareAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the Alibaba Cloud accounts with which you want to unshare the image.
   * 
   * This parameter is required.
   */
  account?: number[];
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
   * The ID of the shared custom image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-2zehv38jjmwva1ee****
   */
  imageId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      clientToken: 'ClientToken',
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: { 'type': 'array', 'itemType': 'number' },
      clientToken: 'string',
      imageId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.account)) {
      $dara.Model.validateArray(this.account);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveCustomImageShareAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveCustomImageShareAccountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveCustomImageShareAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveCustomImageShareAccountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The renewal period. Unit: month. Valid values: 1, 3, 6, 12, 24, and 36.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The region ID of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      period: 'Period',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      period: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDatabaseAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The password of the administrator account of the Simple Database Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * Password****
   */
  accountPassword?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the Simple Database Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The region ID of the Simple Database Service instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountPassword: 'AccountPassword',
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPassword: 'string',
      clientToken: 'string',
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDatabaseAccountPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDatabaseAccountPasswordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetDatabaseAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetDatabaseAccountPasswordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDiskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the disk to be rolled back.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp14wq0149cpp2xy****
   */
  diskId?: string;
  /**
   * @remarks
   * The region ID of the simple application server for which the snapshot is created.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bp16oazlsold4dks****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diskId: 'DiskId',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diskId: 'string',
      regionId: 'string',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDiskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetDiskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetDiskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSystemRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that you want to use to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html)
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the destination image. If you do not specify this parameter, the current image is reset.
   * 
   * @example
   * 794c230fd3e64ea19f83f4d7a0ad****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  loginCredentials?: ResetSystemRequestLoginCredentials;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      loginCredentials: 'LoginCredentials',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      imageId: 'string',
      instanceId: 'string',
      loginCredentials: ResetSystemRequestLoginCredentials,
      regionId: 'string',
    };
  }

  validate() {
    if(this.loginCredentials && typeof (this.loginCredentials as any).validate === 'function') {
      (this.loginCredentials as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSystemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSystemResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetSystemResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDatabaseInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the Simple Database Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The region ID of the Simple Database Service instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDatabaseInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartDatabaseInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartDatabaseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartDatabaseInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the command. Take note of the following items:
   * 
   * *   If you set `EnableParameter` to true, the custom parameter feature is enabled in the command content and you can configure custom parameters based on the following rules:
   * *   Define custom parameters in the {{}} format. Within `{{}}`, the spaces and line feeds before and after the parameter names are ignored.
   * *   The number of custom parameters cannot be greater than 20.
   * *   A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). The name is case-insensitive.
   * *   Each custom parameter name cannot exceed 64 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * ifconfig -s
   */
  commandContent?: string;
  /**
   * @remarks
   * Specifies whether to enable the custom parameter feature.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableParameter?: boolean;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the command.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The custom parameters in the key-value pair format that are to be passed in when the command includes custom parameters. For example, if the command content is `echo {{name}}`, you can use `Parameters` to pass in the `{"name":"Jack"}` key-value pair. The `name` key of the custom parameter is automatically replaced with the paired Jack value to generate a new command. As a result, the `echo Jack` command is executed.
   * 
   * Number of custom parameters ranges from 0 to 20. Take note of the following items:
   * 
   * *   The key cannot be an empty string. It can be up to 64 characters in length.
   * *   The value can be an empty string.
   * *   After custom parameters and original command content are encoded in Base64, the command cannot exceed 16 KB in size.
   * *   The custom parameter names that are specified by Parameters must be included in the custom parameter names that you specified when you created the command. You can use empty strings to represent the parameters that are not passed in.
   * 
   * This parameter is empty by default, which indicates to disable the custom parameter feature.
   * 
   * @example
   * {"name":"Jack", "accessKey":"LTAIdyvdIqaRY****"}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The timeout period of the command on the server.
   * 
   * If a command execution task times out, Command Assistant forcibly terminates the task process. Valid values: 10 to 86400. Unit: seconds. The period of 86400 seconds is equal to 24 hours.
   * 
   * Default value: 60.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The language type of the command. Valid values:
   * 
   * *   RunBatScript: batch commands (applicable to Windows servers).
   * *   RunPowerShellScript: PowerShell commands (applicable to Windows servers).
   * *   RunShellScript: shell commands (applicable to Linux servers).
   * 
   * This parameter is required.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  /**
   * @remarks
   * The name of the password used to run the command on a Windows simple application server.
   * 
   * If you want to use a username other than the default "system" username to run the command on a Windows server, you must specify both the WindowsPasswordName and WorkingUser parameters. The password is hosted in plaintext in the parameter repository of CloudOps Orchestration Service (OOS) to mitigate the risk of password leaks. Only the name of the password is passed in by using WindowsPasswordName.
   * 
   * @example
   * axtSecretPassword
   */
  windowsPasswordName?: string;
  /**
   * @remarks
   * The execution path of the command. Custom paths are supported. Default execution paths vary based on the operating systems of the servers.
   * 
   * *   For Linux servers, the default path is /root of the root user.
   * *   For Windows servers, the default path is C:\\Windows\\system32.
   * 
   * @example
   * /home/
   */
  workingDir?: string;
  /**
   * @remarks
   * A user of the server who runs the command. We recommend that you run the command as a regular user to reduce security risks. Default values:
   * 
   * *   For Linux servers, the default value is root.
   * *   For Windows servers, the default value is system.
   * 
   * @example
   * root
   */
  workingUser?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      enableParameter: 'EnableParameter',
      instanceId: 'InstanceId',
      name: 'Name',
      parameters: 'Parameters',
      regionId: 'RegionId',
      timeout: 'Timeout',
      type: 'Type',
      windowsPasswordName: 'WindowsPasswordName',
      workingDir: 'WorkingDir',
      workingUser: 'WorkingUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      enableParameter: 'boolean',
      instanceId: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      timeout: 'number',
      type: 'string',
      windowsPasswordName: 'string',
      workingDir: 'string',
      workingUser: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the command. Take note of the following items:
   * 
   * *   If you set `EnableParameter` to true, the custom parameter feature is enabled in the command content and you can configure custom parameters based on the following rules:
   * *   Define custom parameters in the {{}} format. Within `{{}}`, the spaces and line feeds before and after the parameter names are ignored.
   * *   The number of custom parameters cannot be greater than 20.
   * *   A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). The name is case-insensitive.
   * *   Each custom parameter name cannot exceed 64 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * ifconfig -s
   */
  commandContent?: string;
  /**
   * @remarks
   * Specifies whether to enable the custom parameter feature.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enableParameter?: boolean;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the command.
   * 
   * This parameter is required.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The custom parameters in the key-value pair format that are to be passed in when the command includes custom parameters. For example, if the command content is `echo {{name}}`, you can use `Parameters` to pass in the `{"name":"Jack"}` key-value pair. The `name` key of the custom parameter is automatically replaced with the paired Jack value to generate a new command. As a result, the `echo Jack` command is executed.
   * 
   * Number of custom parameters ranges from 0 to 20. Take note of the following items:
   * 
   * *   The key cannot be an empty string. It can be up to 64 characters in length.
   * *   The value can be an empty string.
   * *   After custom parameters and original command content are encoded in Base64, the command cannot exceed 16 KB in size.
   * *   The custom parameter names that are specified by Parameters must be included in the custom parameter names that you specified when you created the command. You can use empty strings to represent the parameters that are not passed in.
   * 
   * This parameter is empty by default, which indicates to disable the custom parameter feature.
   * 
   * @example
   * {"name":"Jack", "accessKey":"LTAIdyvdIqaRY****"}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The timeout period of the command on the server.
   * 
   * If a command execution task times out, Command Assistant forcibly terminates the task process. Valid values: 10 to 86400. Unit: seconds. The period of 86400 seconds is equal to 24 hours.
   * 
   * Default value: 60.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The language type of the command. Valid values:
   * 
   * *   RunBatScript: batch commands (applicable to Windows servers).
   * *   RunPowerShellScript: PowerShell commands (applicable to Windows servers).
   * *   RunShellScript: shell commands (applicable to Linux servers).
   * 
   * This parameter is required.
   * 
   * @example
   * RunShellScript
   */
  type?: string;
  /**
   * @remarks
   * The name of the password used to run the command on a Windows simple application server.
   * 
   * If you want to use a username other than the default "system" username to run the command on a Windows server, you must specify both the WindowsPasswordName and WorkingUser parameters. The password is hosted in plaintext in the parameter repository of CloudOps Orchestration Service (OOS) to mitigate the risk of password leaks. Only the name of the password is passed in by using WindowsPasswordName.
   * 
   * @example
   * axtSecretPassword
   */
  windowsPasswordName?: string;
  /**
   * @remarks
   * The execution path of the command. Custom paths are supported. Default execution paths vary based on the operating systems of the servers.
   * 
   * *   For Linux servers, the default path is /root of the root user.
   * *   For Windows servers, the default path is C:\\Windows\\system32.
   * 
   * @example
   * /home/
   */
  workingDir?: string;
  /**
   * @remarks
   * A user of the server who runs the command. We recommend that you run the command as a regular user to reduce security risks. Default values:
   * 
   * *   For Linux servers, the default value is root.
   * *   For Windows servers, the default value is system.
   * 
   * @example
   * root
   */
  workingUser?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      enableParameter: 'EnableParameter',
      instanceId: 'InstanceId',
      name: 'Name',
      parametersShrink: 'Parameters',
      regionId: 'RegionId',
      timeout: 'Timeout',
      type: 'Type',
      windowsPasswordName: 'WindowsPasswordName',
      workingDir: 'WorkingDir',
      workingUser: 'WorkingUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      enableParameter: 'boolean',
      instanceId: 'string',
      name: 'string',
      parametersShrink: 'string',
      regionId: 'string',
      timeout: 'number',
      type: 'string',
      windowsPasswordName: 'string',
      workingDir: 'string',
      workingUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The execution ID.
   * 
   * @example
   * t-hz02p9545t6****
   */
  invokeId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunCommandResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDatabaseInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the Simple Database Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The region ID of the Simple Database Service instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDatabaseInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDatabaseInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDatabaseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartDatabaseInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The IDs of the simple application servers. The value can be a JSON array that consists of up to 100 simple application server IDs. Separate multiple server IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["2ad1ae67295445f598017499dc****", "2ad1ae67295445f598017123dc****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region ID of the simple application servers. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceIds: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTerminalSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTerminalSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  /**
   * @remarks
   * The security token included in the WebSocket request header. The system uses this token to authenticate the request.
   * 
   * @example
   * token-xxxaaz
   */
  securityToken?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * ffb90b6e-b18a-4a33-88cf-86fb88****
   */
  sessionId?: string;
  /**
   * @remarks
   * The URL of the WebSocket session that is used to connect to the server. The URL contains the session ID (`SessionId`) and the authentication token (`SecurityToken`).
   * 
   * @example
   * wss://xxxx
   */
  webSocketUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityToken: 'SecurityToken',
      sessionId: 'SessionId',
      webSocketUrl: 'WebSocketUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityToken: 'string',
      sessionId: 'string',
      webSocketUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTerminalSessionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartTerminalSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartTerminalSessionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDatabaseInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the Simple Database Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The region ID of the Simple Database Service instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDatabaseInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDatabaseInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDatabaseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopDatabaseInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to forcibly stop the servers.
   * 
   * *   **true**: forcibly stops the servers.
   * *   **false**: normally stops the servers. This is the default value.
   * 
   * @example
   * true
   */
  forceStop?: boolean;
  /**
   * @remarks
   * The IDs of the simple application servers. The value can be a JSON array that consists of up to 100 simple application server IDs. Separate multiple server IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["2ad1ae67295445f598017499dc****", "2ad1ae67295445f598017123dc****"]
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region ID of the simple application servers. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      forceStop: 'ForceStop',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      forceStop: 'boolean',
      instanceIds: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C2DE174B-7196-5778-A00D-6EA2601B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that you want to use to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
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
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   instance
   * *   snapshot
   * *   customimage
   * *   command
   * *   firewallrule
   * *   disk
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags. You can specify up to 20 tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the specified one or more resources. This parameter takes effect only if the TagKey.N parameter is not set. Valid values:
   * 
   * *   true: deletes all tags that are added to the specific lightweight resource. If no tags are added to the specific lightweight resource, the deletion operation is ignored.
   * *   false: does not delete the tags that are added to the specific lightweight resource.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The client token that you want to use to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
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
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 resource IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   instance
   * *   snapshot
   * *   customimage
   * *   command
   * *   firewallrule
   * *   disk
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of tag N. Valid values of N: 1 to 20.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      clientToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCommandAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The command ID. You can call the [DescribeCommands](https://help.aliyun.com/document_detail/64843.html) operation to query all available command IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * c-sh02yh0932w****
   */
  commandId?: string;
  /**
   * @remarks
   * The description of the command. The description supports all character sets and can be up to 512 characters in length.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the command. The name supports all character sets and can be up to 128 characters in length.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * The region ID. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The maximum timeout period for the command execution on the ECS instance. Unit: seconds. When a command that you created cannot be run, the command execution times out. When the execution times out, the command process is forcefully terminated and the PID of the command is canceled. Default value: 60.
   * 
   * @example
   * 60
   */
  timeout?: number;
  /**
   * @remarks
   * The working directory of the command. The directory can be up to 200 characters in length.
   * 
   * @example
   * /home/
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      timeout: 'Timeout',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      timeout: 'number',
      workingDir: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCommandAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCommandAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCommandAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCommandAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDiskAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The disk ID. You can call the ListDisks operation to query the ID of data disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp18kjxg9ebrhsgi****
   */
  diskId?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the data disk.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diskId: 'DiskId',
      regionId: 'RegionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diskId: 'string',
      regionId: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDiskAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28D****534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDiskAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDiskAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDiskAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the simple application server. The name must be 2 to 50 characters in length. It can contain letters, digits, underscores (_), and hyphens (-). It must start with a letter or digit. Domain names are supported.
   * 
   * @example
   * test-InstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The new password of the simple application server. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported:
   * 
   *     ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * 
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * >  For security reasons, we recommend that you use HTTPS to send requests if `Password` is specified.
   * 
   * @example
   * Test123!
   */
  password?: string;
  /**
   * @remarks
   * The region ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      password: 'Password',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      instanceName: 'string',
      password: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSnapshotAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The value of **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks of the snapshot of the simple application server.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The snapshot ID. You can call the ListSnapshots operation to query the snapshot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bp16oazlsold4dks****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      remark: 'Remark',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      remark: 'string',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSnapshotAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSnapshotAttributeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSnapshotAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSnapshotAttributeResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * ace0706b2ac4454d984295a94213****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the new plan. You can call the [ListPlans](https://help.aliyun.com/document_detail/189314.html) operation to query the plans provided by Simple Application Server.
   * 
   * This parameter is required.
   * 
   * @example
   * swas.s2.c2m2s50b4t08
   */
  planId?: string;
  /**
   * @remarks
   * The region ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      planId: 'PlanId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      planId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpgradeInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadInstanceKeyPairRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the simple application server.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ad1ae67295445f598017499dc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * test_gin
   */
  keyPairName?: string;
  /**
   * @remarks
   * The public key.
   * 
   * @example
   * ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAID5aQ5bM0Am3mWe+upjSXqisUT4DLR6ExwvA0***** **@**.com
   */
  publicKey?: string;
  /**
   * @remarks
   * The region ID of the simple application server. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      keyPairName: 'KeyPairName',
      publicKey: 'PublicKey',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      keyPairName: 'string',
      publicKey: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadInstanceKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadInstanceKeyPairResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadInstanceKeyPairResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadInstanceKeyPairResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("swas-open", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Shares a custom image with other Alibaba Cloud accounts in the same region to quickly deploy the same environment configurations for multiple simple application servers at a time. This improves deployment efficiency.
   * 
   * @remarks
   *   Before you share a custom image, make sure that all sensitive data and files are removed from the image.
   * *   The IDs of the Alibaba Cloud accounts with which you want to share the image is obtained. Move the pointer over the profile in the upper-right corner of the Simple Application Server console. In the card that appears, if Main Account is displayed, the showed account ID is the Alibaba Cloud account ID.
   * 
   * @param request - AddCustomImageShareAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddCustomImageShareAccountResponse
   */
  async addCustomImageShareAccountWithOptions(request: AddCustomImageShareAccountRequest, runtime: $dara.RuntimeOptions): Promise<AddCustomImageShareAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddCustomImageShareAccount",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddCustomImageShareAccountResponse>(await this.callApi(params, req, runtime), new AddCustomImageShareAccountResponse({}));
    } else {
      return $dara.cast<AddCustomImageShareAccountResponse>(await this.execute(params, req, runtime), new AddCustomImageShareAccountResponse({}));
    }

  }

  /**
   * Shares a custom image with other Alibaba Cloud accounts in the same region to quickly deploy the same environment configurations for multiple simple application servers at a time. This improves deployment efficiency.
   * 
   * @remarks
   *   Before you share a custom image, make sure that all sensitive data and files are removed from the image.
   * *   The IDs of the Alibaba Cloud accounts with which you want to share the image is obtained. Move the pointer over the profile in the upper-right corner of the Simple Application Server console. In the card that appears, if Main Account is displayed, the showed account ID is the Alibaba Cloud account ID.
   * 
   * @param request - AddCustomImageShareAccountRequest
   * @returns AddCustomImageShareAccountResponse
   */
  async addCustomImageShareAccount(request: AddCustomImageShareAccountRequest): Promise<AddCustomImageShareAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addCustomImageShareAccountWithOptions(request, runtime);
  }

  /**
   * Applies for a public endpoint for a Simple Database Service instance.
   * 
   * @remarks
   * By default, no public endpoints are assigned to Simple Database Service instances. If you want to access the databases of a Simple Database Service instance over the Internet by using Simple Container Service or Data Management (DMS), you must apply for a public endpoint for the Simple Database Service instance.
   * 
   * @param request - AllocatePublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocatePublicConnectionResponse
   */
  async allocatePublicConnectionWithOptions(request: AllocatePublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<AllocatePublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocatePublicConnection",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AllocatePublicConnectionResponse>(await this.callApi(params, req, runtime), new AllocatePublicConnectionResponse({}));
    } else {
      return $dara.cast<AllocatePublicConnectionResponse>(await this.execute(params, req, runtime), new AllocatePublicConnectionResponse({}));
    }

  }

  /**
   * Applies for a public endpoint for a Simple Database Service instance.
   * 
   * @remarks
   * By default, no public endpoints are assigned to Simple Database Service instances. If you want to access the databases of a Simple Database Service instance over the Internet by using Simple Container Service or Data Management (DMS), you must apply for a public endpoint for the Simple Database Service instance.
   * 
   * @param request - AllocatePublicConnectionRequest
   * @returns AllocatePublicConnectionResponse
   */
  async allocatePublicConnection(request: AllocatePublicConnectionRequest): Promise<AllocatePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocatePublicConnectionWithOptions(request, runtime);
  }

  /**
   * Uses a firewall template to apply firewall rules to multiple simple application servers at a time. This improves your efficiency of setting firewall rules.
   * 
   * @remarks
   * If the port range, protocol, and source IP address of a firewall rule in a firewall template are the same as the port range, protocol, and source IP address of an existing rule, the new rule overwrites the existing rule regardless of whether the existing rule is enabled or disabled.
   * 
   * @param request - ApplyFirewallTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyFirewallTemplateResponse
   */
  async applyFirewallTemplateWithOptions(request: ApplyFirewallTemplateRequest, runtime: $dara.RuntimeOptions): Promise<ApplyFirewallTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyFirewallTemplate",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ApplyFirewallTemplateResponse>(await this.callApi(params, req, runtime), new ApplyFirewallTemplateResponse({}));
    } else {
      return $dara.cast<ApplyFirewallTemplateResponse>(await this.execute(params, req, runtime), new ApplyFirewallTemplateResponse({}));
    }

  }

  /**
   * Uses a firewall template to apply firewall rules to multiple simple application servers at a time. This improves your efficiency of setting firewall rules.
   * 
   * @remarks
   * If the port range, protocol, and source IP address of a firewall rule in a firewall template are the same as the port range, protocol, and source IP address of an existing rule, the new rule overwrites the existing rule regardless of whether the existing rule is enabled or disabled.
   * 
   * @param request - ApplyFirewallTemplateRequest
   * @returns ApplyFirewallTemplateResponse
   */
  async applyFirewallTemplate(request: ApplyFirewallTemplateRequest): Promise<ApplyFirewallTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyFirewallTemplateWithOptions(request, runtime);
  }

  /**
   * Binds a key pair to simple application servers.
   * 
   * @remarks
   * You can bind only one key pair to a simple application server in the Simple Application Server console. If a simple application server has a key pair bound, the new key pair overwrites the original key pair.
   * 
   * @param request - AttachKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachKeyPairResponse
   */
  async attachKeyPairWithOptions(request: AttachKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<AttachKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AttachKeyPairResponse>(await this.callApi(params, req, runtime), new AttachKeyPairResponse({}));
    } else {
      return $dara.cast<AttachKeyPairResponse>(await this.execute(params, req, runtime), new AttachKeyPairResponse({}));
    }

  }

  /**
   * Binds a key pair to simple application servers.
   * 
   * @remarks
   * You can bind only one key pair to a simple application server in the Simple Application Server console. If a simple application server has a key pair bound, the new key pair overwrites the original key pair.
   * 
   * @param request - AttachKeyPairRequest
   * @returns AttachKeyPairResponse
   */
  async attachKeyPair(request: AttachKeyPairRequest): Promise<AttachKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachKeyPairWithOptions(request, runtime);
  }

  /**
   * Creates a Cloud Assistant command.
   * 
   * @param request - CreateCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCommandResponse
   */
  async createCommandWithOptions(request: CreateCommandRequest, runtime: $dara.RuntimeOptions): Promise<CreateCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableParameter)) {
      query["EnableParameter"] = request.enableParameter;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.workingDir)) {
      query["WorkingDir"] = request.workingDir;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCommand",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCommandResponse>(await this.callApi(params, req, runtime), new CreateCommandResponse({}));
    } else {
      return $dara.cast<CreateCommandResponse>(await this.execute(params, req, runtime), new CreateCommandResponse({}));
    }

  }

  /**
   * Creates a Cloud Assistant command.
   * 
   * @param request - CreateCommandRequest
   * @returns CreateCommandResponse
   */
  async createCommand(request: CreateCommandRequest): Promise<CreateCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCommandWithOptions(request, runtime);
  }

  /**
   * Creates a custom image based on a snapshot of a simple application server.
   * 
   * @remarks
   * A custom image is created from a snapshot of a simple application server. You can use a custom image to create multiple simple application servers that have the same configurations. You can also share custom images to ECS and use the shared images to create ECS instances or replace the OSs of existing ECS instances. For more information about custom images, see [Overview of custom images](https://help.aliyun.com/document_detail/199375.html).
   * You must create a system disk snapshot of a simple application server before you create a custom image based on the snapshot. For more information, see [CreateSnapshot](https://help.aliyun.com/document_detail/190452.html).
   * >  If you need the data on the data disk of a simple application server when you create a custom image, create a snapshot for the data disk first.
   * Before you create a custom image, take note of the following items:
   * *   The custom image and the corresponding simple application server must reside in the same region.
   * *   The maximum number of custom images that you can create is 3 times the number of simple application servers that you have, but cannot exceed 15.
   * *   You can directly create a custom image only based on the system disk snapshot of a simple application server. If you want a custom image to contain the data on the data disk of the simple application server, you must select a data disk snapshot in addition to a system disk snapshot when you create the custom image.
   * *   If a simple application server is released due to expiration or refunds, the custom images that are created based on the server are also released.
   * *   Resetting the system or changing the image of a simple application server clears the disk data on the server. Back up the data as needed.
   * 
   * @param request - CreateCustomImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomImageResponse
   */
  async createCustomImageWithOptions(request: CreateCustomImageRequest, runtime: $dara.RuntimeOptions): Promise<CreateCustomImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataSnapshotId)) {
      query["DataSnapshotId"] = request.dataSnapshotId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.systemSnapshotId)) {
      query["SystemSnapshotId"] = request.systemSnapshotId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomImage",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCustomImageResponse>(await this.callApi(params, req, runtime), new CreateCustomImageResponse({}));
    } else {
      return $dara.cast<CreateCustomImageResponse>(await this.execute(params, req, runtime), new CreateCustomImageResponse({}));
    }

  }

  /**
   * Creates a custom image based on a snapshot of a simple application server.
   * 
   * @remarks
   * A custom image is created from a snapshot of a simple application server. You can use a custom image to create multiple simple application servers that have the same configurations. You can also share custom images to ECS and use the shared images to create ECS instances or replace the OSs of existing ECS instances. For more information about custom images, see [Overview of custom images](https://help.aliyun.com/document_detail/199375.html).
   * You must create a system disk snapshot of a simple application server before you create a custom image based on the snapshot. For more information, see [CreateSnapshot](https://help.aliyun.com/document_detail/190452.html).
   * >  If you need the data on the data disk of a simple application server when you create a custom image, create a snapshot for the data disk first.
   * Before you create a custom image, take note of the following items:
   * *   The custom image and the corresponding simple application server must reside in the same region.
   * *   The maximum number of custom images that you can create is 3 times the number of simple application servers that you have, but cannot exceed 15.
   * *   You can directly create a custom image only based on the system disk snapshot of a simple application server. If you want a custom image to contain the data on the data disk of the simple application server, you must select a data disk snapshot in addition to a system disk snapshot when you create the custom image.
   * *   If a simple application server is released due to expiration or refunds, the custom images that are created based on the server are also released.
   * *   Resetting the system or changing the image of a simple application server clears the disk data on the server. Back up the data as needed.
   * 
   * @param request - CreateCustomImageRequest
   * @returns CreateCustomImageResponse
   */
  async createCustomImage(request: CreateCustomImageRequest): Promise<CreateCustomImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomImageWithOptions(request, runtime);
  }

  /**
   * Creates a firewall rule for a simple application server.
   * 
   * @remarks
   * Firewalls serve to control network access to simple application servers and isolate security domains in the cloud. By default, SSH port 22, HTTP port 80, and HTTPS port 443 are enabled for simple application servers. Other ports are disabled. You can add firewall rules to enable more ports.
   * 
   * @param request - CreateFirewallRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFirewallRuleResponse
   */
  async createFirewallRuleWithOptions(request: CreateFirewallRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateFirewallRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.ruleProtocol)) {
      query["RuleProtocol"] = request.ruleProtocol;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFirewallRule",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateFirewallRuleResponse>(await this.callApi(params, req, runtime), new CreateFirewallRuleResponse({}));
    } else {
      return $dara.cast<CreateFirewallRuleResponse>(await this.execute(params, req, runtime), new CreateFirewallRuleResponse({}));
    }

  }

  /**
   * Creates a firewall rule for a simple application server.
   * 
   * @remarks
   * Firewalls serve to control network access to simple application servers and isolate security domains in the cloud. By default, SSH port 22, HTTP port 80, and HTTPS port 443 are enabled for simple application servers. Other ports are disabled. You can add firewall rules to enable more ports.
   * 
   * @param request - CreateFirewallRuleRequest
   * @returns CreateFirewallRuleResponse
   */
  async createFirewallRule(request: CreateFirewallRuleRequest): Promise<CreateFirewallRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFirewallRuleWithOptions(request, runtime);
  }

  /**
   * Creates multiple firewall rules for a simple application server at a time.
   * 
   * @remarks
   * Firewalls serve to control network access to simple application servers and isolate security domains in the cloud. By default, SSH port 22, HTTP port 80, and HTTPS port 443 are enabled for simple application servers. Other ports are disabled. You can add firewall rules to enable more ports.
   * 
   * @param tmpReq - CreateFirewallRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFirewallRulesResponse
   */
  async createFirewallRulesWithOptions(tmpReq: CreateFirewallRulesRequest, runtime: $dara.RuntimeOptions): Promise<CreateFirewallRulesResponse> {
    tmpReq.validate();
    let request = new CreateFirewallRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.firewallRules)) {
      request.firewallRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.firewallRules, "FirewallRules", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.firewallRulesShrink)) {
      query["FirewallRules"] = request.firewallRulesShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFirewallRules",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateFirewallRulesResponse>(await this.callApi(params, req, runtime), new CreateFirewallRulesResponse({}));
    } else {
      return $dara.cast<CreateFirewallRulesResponse>(await this.execute(params, req, runtime), new CreateFirewallRulesResponse({}));
    }

  }

  /**
   * Creates multiple firewall rules for a simple application server at a time.
   * 
   * @remarks
   * Firewalls serve to control network access to simple application servers and isolate security domains in the cloud. By default, SSH port 22, HTTP port 80, and HTTPS port 443 are enabled for simple application servers. Other ports are disabled. You can add firewall rules to enable more ports.
   * 
   * @param request - CreateFirewallRulesRequest
   * @returns CreateFirewallRulesResponse
   */
  async createFirewallRules(request: CreateFirewallRulesRequest): Promise<CreateFirewallRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFirewallRulesWithOptions(request, runtime);
  }

  /**
   * Creates a firewall template.
   * 
   * @remarks
   * Simple Application Server supports the firewall template feature that provides multiple firewall rules. You can use a template to add a group of firewall rules to one or more simple application servers at a time. This improves the efficiency of setting firewall rules.
   * 
   * @param request - CreateFirewallTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFirewallTemplateResponse
   */
  async createFirewallTemplateWithOptions(request: CreateFirewallTemplateRequest, runtime: $dara.RuntimeOptions): Promise<CreateFirewallTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.firewallRule)) {
      query["FirewallRule"] = request.firewallRule;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFirewallTemplate",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateFirewallTemplateResponse>(await this.callApi(params, req, runtime), new CreateFirewallTemplateResponse({}));
    } else {
      return $dara.cast<CreateFirewallTemplateResponse>(await this.execute(params, req, runtime), new CreateFirewallTemplateResponse({}));
    }

  }

  /**
   * Creates a firewall template.
   * 
   * @remarks
   * Simple Application Server supports the firewall template feature that provides multiple firewall rules. You can use a template to add a group of firewall rules to one or more simple application servers at a time. This improves the efficiency of setting firewall rules.
   * 
   * @param request - CreateFirewallTemplateRequest
   * @returns CreateFirewallTemplateResponse
   */
  async createFirewallTemplate(request: CreateFirewallTemplateRequest): Promise<CreateFirewallTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFirewallTemplateWithOptions(request, runtime);
  }

  /**
   * Adds firewall rules to a firewall template based on your business requirements.
   * 
   * @remarks
   * Adding firewall rules to a firewall template does not affect the firewall rules that have been applied to simple application servers..
   * 
   * @param request - CreateFirewallTemplateRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFirewallTemplateRulesResponse
   */
  async createFirewallTemplateRulesWithOptions(request: CreateFirewallTemplateRulesRequest, runtime: $dara.RuntimeOptions): Promise<CreateFirewallTemplateRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firewallRule)) {
      query["FirewallRule"] = request.firewallRule;
    }

    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFirewallTemplateRules",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateFirewallTemplateRulesResponse>(await this.callApi(params, req, runtime), new CreateFirewallTemplateRulesResponse({}));
    } else {
      return $dara.cast<CreateFirewallTemplateRulesResponse>(await this.execute(params, req, runtime), new CreateFirewallTemplateRulesResponse({}));
    }

  }

  /**
   * Adds firewall rules to a firewall template based on your business requirements.
   * 
   * @remarks
   * Adding firewall rules to a firewall template does not affect the firewall rules that have been applied to simple application servers..
   * 
   * @param request - CreateFirewallTemplateRulesRequest
   * @returns CreateFirewallTemplateRulesResponse
   */
  async createFirewallTemplateRules(request: CreateFirewallTemplateRulesRequest): Promise<CreateFirewallTemplateRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFirewallTemplateRulesWithOptions(request, runtime);
  }

  /**
   * Creates a key pair for a simple application server.
   * 
   * @param request - CreateInstanceKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceKeyPairResponse
   */
  async createInstanceKeyPairWithOptions(request: CreateInstanceKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<CreateInstanceKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateInstanceKeyPairResponse>(await this.callApi(params, req, runtime), new CreateInstanceKeyPairResponse({}));
    } else {
      return $dara.cast<CreateInstanceKeyPairResponse>(await this.execute(params, req, runtime), new CreateInstanceKeyPairResponse({}));
    }

  }

  /**
   * Creates a key pair for a simple application server.
   * 
   * @param request - CreateInstanceKeyPairRequest
   * @returns CreateInstanceKeyPairResponse
   */
  async createInstanceKeyPair(request: CreateInstanceKeyPairRequest): Promise<CreateInstanceKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceKeyPairWithOptions(request, runtime);
  }

  /**
   * Creates subscription simple application servers.
   * 
   * @remarks
   *   Before you call this operation, we recommend that you understand the billing rules of Simple Application Server. For more information, see [Billable items](https://help.aliyun.com/document_detail/58623.html).
   * >  If you have coupons in your Alibaba Cloud account, the coupons are preferentially used to pay for the simple application servers.
   * *   You can create a maximum of 50 simple application servers in a region for an Alibaba Cloud account.
   * *   When you call this operation to create simple application servers, make sure that the balance in your account is sufficient to pay for the servers. If the balance in your account is insufficient, the servers cannot be created.
   * 
   * @param request - CreateInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstancesResponse
   */
  async createInstancesWithOptions(request: CreateInstancesRequest, runtime: $dara.RuntimeOptions): Promise<CreateInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateInstancesResponse>(await this.callApi(params, req, runtime), new CreateInstancesResponse({}));
    } else {
      return $dara.cast<CreateInstancesResponse>(await this.execute(params, req, runtime), new CreateInstancesResponse({}));
    }

  }

  /**
   * Creates subscription simple application servers.
   * 
   * @remarks
   *   Before you call this operation, we recommend that you understand the billing rules of Simple Application Server. For more information, see [Billable items](https://help.aliyun.com/document_detail/58623.html).
   * >  If you have coupons in your Alibaba Cloud account, the coupons are preferentially used to pay for the simple application servers.
   * *   You can create a maximum of 50 simple application servers in a region for an Alibaba Cloud account.
   * *   When you call this operation to create simple application servers, make sure that the balance in your account is sufficient to pay for the servers. If the balance in your account is insufficient, the servers cannot be created.
   * 
   * @param request - CreateInstancesRequest
   * @returns CreateInstancesResponse
   */
  async createInstances(request: CreateInstancesRequest): Promise<CreateInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstancesWithOptions(request, runtime);
  }

  /**
   * Creates a key pair.
   * 
   * @remarks
   * Alibaba Cloud SSH key pairs offer a secure and efficient logon authentication mechanism, facilitating both verification and encrypted communication within the SSH protocol framework. An SSH key pair is essentially constituted by a public key and a private key. Tailored for Linux-based simple application servers, this security measure enhances security and convenience, effectively addressing your heightened security requirements.
   * *   The key pair logon method is only valid for Linux-based simple application servers.
   * *   A maximum of 10 key pairs can be created in a region for an Alibaba Cloud account.
   * *   Only RSA 2048-bit key pairs can be created in the Simple Application Server console.
   * 
   * @param request - CreateKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKeyPairResponse
   */
  async createKeyPairWithOptions(request: CreateKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<CreateKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateKeyPairResponse>(await this.callApi(params, req, runtime), new CreateKeyPairResponse({}));
    } else {
      return $dara.cast<CreateKeyPairResponse>(await this.execute(params, req, runtime), new CreateKeyPairResponse({}));
    }

  }

  /**
   * Creates a key pair.
   * 
   * @remarks
   * Alibaba Cloud SSH key pairs offer a secure and efficient logon authentication mechanism, facilitating both verification and encrypted communication within the SSH protocol framework. An SSH key pair is essentially constituted by a public key and a private key. Tailored for Linux-based simple application servers, this security measure enhances security and convenience, effectively addressing your heightened security requirements.
   * *   The key pair logon method is only valid for Linux-based simple application servers.
   * *   A maximum of 10 key pairs can be created in a region for an Alibaba Cloud account.
   * *   Only RSA 2048-bit key pairs can be created in the Simple Application Server console.
   * 
   * @param request - CreateKeyPairRequest
   * @returns CreateKeyPairResponse
   */
  async createKeyPair(request: CreateKeyPairRequest): Promise<CreateKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createKeyPairWithOptions(request, runtime);
  }

  /**
   * Creates a snapshot for a disk.
   * 
   * @remarks
   * A snapshot is a point-in-time backup of a disk. Snapshots can be used to back up data, recover data after misoperations on servers, recover data after network attacks, and create custom images.
   * >  You are not charged for creating snapshots in Simple Application Server.
   * ### [](#)Precautions
   * *   You can create up to three snapshots for each simple application server.
   * *   The maximum number of snapshots that you create per Alibaba Cloud account is triple of the number of simple application servers that are created. The value cannot be greater than 15.
   * *   If a simple application server is automatically released due to expiration, the snapshots created for the server are deleted.
   * *   If you reset a simple application server after you create a snapshot for the server, the snapshot is retained but cannot be used to restore the disks of the server.
   * 
   * @param request - CreateSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSnapshotResponse
   */
  async createSnapshotWithOptions(request: CreateSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<CreateSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSnapshot",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateSnapshotResponse>(await this.callApi(params, req, runtime), new CreateSnapshotResponse({}));
    } else {
      return $dara.cast<CreateSnapshotResponse>(await this.execute(params, req, runtime), new CreateSnapshotResponse({}));
    }

  }

  /**
   * Creates a snapshot for a disk.
   * 
   * @remarks
   * A snapshot is a point-in-time backup of a disk. Snapshots can be used to back up data, recover data after misoperations on servers, recover data after network attacks, and create custom images.
   * >  You are not charged for creating snapshots in Simple Application Server.
   * ### [](#)Precautions
   * *   You can create up to three snapshots for each simple application server.
   * *   The maximum number of snapshots that you create per Alibaba Cloud account is triple of the number of simple application servers that are created. The value cannot be greater than 15.
   * *   If a simple application server is automatically released due to expiration, the snapshots created for the server are deleted.
   * *   If you reset a simple application server after you create a snapshot for the server, the snapshot is retained but cannot be used to restore the disks of the server.
   * 
   * @param request - CreateSnapshotRequest
   * @returns CreateSnapshotResponse
   */
  async createSnapshot(request: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  /**
   * Deletes a Command Assistant command.
   * 
   * @remarks
   * You cannot delete commands that are being run.
   * 
   * @param request - DeleteCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCommandResponse
   */
  async deleteCommandWithOptions(request: DeleteCommandRequest, runtime: $dara.RuntimeOptions): Promise<DeleteCommandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCommand",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCommandResponse>(await this.callApi(params, req, runtime), new DeleteCommandResponse({}));
    } else {
      return $dara.cast<DeleteCommandResponse>(await this.execute(params, req, runtime), new DeleteCommandResponse({}));
    }

  }

  /**
   * Deletes a Command Assistant command.
   * 
   * @remarks
   * You cannot delete commands that are being run.
   * 
   * @param request - DeleteCommandRequest
   * @returns DeleteCommandResponse
   */
  async deleteCommand(request: DeleteCommandRequest): Promise<DeleteCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCommandWithOptions(request, runtime);
  }

  /**
   * Deletes a custom image.
   * 
   * @remarks
   * You can delete a custom image that you no longer need. After the custom image is deleted, you cannot use the custom image to reset the simple application servers that were created based on the custom image.
   * >  To delete a shared image, you must unshare the image before you can delete it. After a custom image is unshared, you cannot query the custom image by using the Elastic Compute Service (ECS) console or API. If you want to use a custom image to create ECS instances, we recommend that you copy the custom image before you delete it. For more information, see [Copy a shared image of a simple application server in the ECS console](https://help.aliyun.com/document_detail/199378.html).
   * 
   * @param request - DeleteCustomImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomImageResponse
   */
  async deleteCustomImageWithOptions(request: DeleteCustomImageRequest, runtime: $dara.RuntimeOptions): Promise<DeleteCustomImageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomImage",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCustomImageResponse>(await this.callApi(params, req, runtime), new DeleteCustomImageResponse({}));
    } else {
      return $dara.cast<DeleteCustomImageResponse>(await this.execute(params, req, runtime), new DeleteCustomImageResponse({}));
    }

  }

  /**
   * Deletes a custom image.
   * 
   * @remarks
   * You can delete a custom image that you no longer need. After the custom image is deleted, you cannot use the custom image to reset the simple application servers that were created based on the custom image.
   * >  To delete a shared image, you must unshare the image before you can delete it. After a custom image is unshared, you cannot query the custom image by using the Elastic Compute Service (ECS) console or API. If you want to use a custom image to create ECS instances, we recommend that you copy the custom image before you delete it. For more information, see [Copy a shared image of a simple application server in the ECS console](https://help.aliyun.com/document_detail/199378.html).
   * 
   * @param request - DeleteCustomImageRequest
   * @returns DeleteCustomImageResponse
   */
  async deleteCustomImage(request: DeleteCustomImageRequest): Promise<DeleteCustomImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomImageWithOptions(request, runtime);
  }

  /**
   * Deletes custom images. If you no longer require a custom image, you can call this operation to delete the custom image. You can also call this operation to delete multiple custom images at the same time. After a custom image is deleted, you cannot use the custom image to reset the simple application servers that were created based on the custom image.
   * 
   * @remarks
   * If a custom image is shared, you must unshare the image before you can delete it. After a custom image is unshared, you cannot query the custom image by using the Elastic Compute Service (ECS) console or by calling an ECS API operation. If you want to use a custom image to create ECS instances, we recommend that you copy the custom image before you delete it. For more information, see [Copy a custom image](https://help.aliyun.com/document_detail/199378.html).
   * 
   * @param request - DeleteCustomImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomImagesResponse
   */
  async deleteCustomImagesWithOptions(request: DeleteCustomImagesRequest, runtime: $dara.RuntimeOptions): Promise<DeleteCustomImagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageIds)) {
      query["ImageIds"] = request.imageIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomImages",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCustomImagesResponse>(await this.callApi(params, req, runtime), new DeleteCustomImagesResponse({}));
    } else {
      return $dara.cast<DeleteCustomImagesResponse>(await this.execute(params, req, runtime), new DeleteCustomImagesResponse({}));
    }

  }

  /**
   * Deletes custom images. If you no longer require a custom image, you can call this operation to delete the custom image. You can also call this operation to delete multiple custom images at the same time. After a custom image is deleted, you cannot use the custom image to reset the simple application servers that were created based on the custom image.
   * 
   * @remarks
   * If a custom image is shared, you must unshare the image before you can delete it. After a custom image is unshared, you cannot query the custom image by using the Elastic Compute Service (ECS) console or by calling an ECS API operation. If you want to use a custom image to create ECS instances, we recommend that you copy the custom image before you delete it. For more information, see [Copy a custom image](https://help.aliyun.com/document_detail/199378.html).
   * 
   * @param request - DeleteCustomImagesRequest
   * @returns DeleteCustomImagesResponse
   */
  async deleteCustomImages(request: DeleteCustomImagesRequest): Promise<DeleteCustomImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomImagesWithOptions(request, runtime);
  }

  /**
   * Deletes a firewall rule of a simple application server.
   * 
   * @remarks
   * After a firewall rule is deleted, your business deployed on the simple application server may become inaccessible. Before you delete a firewall rule, make sure that the firewall rule is no longer needed by the simple application server.
   * 
   * @param request - DeleteFirewallRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFirewallRuleResponse
   */
  async deleteFirewallRuleWithOptions(request: DeleteFirewallRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteFirewallRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFirewallRule",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteFirewallRuleResponse>(await this.callApi(params, req, runtime), new DeleteFirewallRuleResponse({}));
    } else {
      return $dara.cast<DeleteFirewallRuleResponse>(await this.execute(params, req, runtime), new DeleteFirewallRuleResponse({}));
    }

  }

  /**
   * Deletes a firewall rule of a simple application server.
   * 
   * @remarks
   * After a firewall rule is deleted, your business deployed on the simple application server may become inaccessible. Before you delete a firewall rule, make sure that the firewall rule is no longer needed by the simple application server.
   * 
   * @param request - DeleteFirewallRuleRequest
   * @returns DeleteFirewallRuleResponse
   */
  async deleteFirewallRule(request: DeleteFirewallRuleRequest): Promise<DeleteFirewallRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFirewallRuleWithOptions(request, runtime);
  }

  /**
   * Deletes multiple firewall rules of a simple application server.
   * 
   * @remarks
   * After a firewall rule is deleted, your business deployed on the simple application server may become inaccessible. Before you delete a firewall rule, make sure that the firewall rule is no longer needed by the simple application server.
   * 
   * @param tmpReq - DeleteFirewallRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFirewallRulesResponse
   */
  async deleteFirewallRulesWithOptions(tmpReq: DeleteFirewallRulesRequest, runtime: $dara.RuntimeOptions): Promise<DeleteFirewallRulesResponse> {
    tmpReq.validate();
    let request = new DeleteFirewallRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ruleIds)) {
      request.ruleIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ruleIds, "RuleIds", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleIdsShrink)) {
      query["RuleIds"] = request.ruleIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFirewallRules",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteFirewallRulesResponse>(await this.callApi(params, req, runtime), new DeleteFirewallRulesResponse({}));
    } else {
      return $dara.cast<DeleteFirewallRulesResponse>(await this.execute(params, req, runtime), new DeleteFirewallRulesResponse({}));
    }

  }

  /**
   * Deletes multiple firewall rules of a simple application server.
   * 
   * @remarks
   * After a firewall rule is deleted, your business deployed on the simple application server may become inaccessible. Before you delete a firewall rule, make sure that the firewall rule is no longer needed by the simple application server.
   * 
   * @param request - DeleteFirewallRulesRequest
   * @returns DeleteFirewallRulesResponse
   */
  async deleteFirewallRules(request: DeleteFirewallRulesRequest): Promise<DeleteFirewallRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFirewallRulesWithOptions(request, runtime);
  }

  /**
   * Deletes firewall rules from a firewall template based on your requirements.
   * 
   * @remarks
   * Deletion of firewall rules does not affect the firewall rules that have been applied to simple application servers.
   * 
   * @param request - DeleteFirewallTemplateRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFirewallTemplateRulesResponse
   */
  async deleteFirewallTemplateRulesWithOptions(request: DeleteFirewallTemplateRulesRequest, runtime: $dara.RuntimeOptions): Promise<DeleteFirewallTemplateRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
    }

    if (!$dara.isNull(request.firewallTemplateRuleId)) {
      query["FirewallTemplateRuleId"] = request.firewallTemplateRuleId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFirewallTemplateRules",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteFirewallTemplateRulesResponse>(await this.callApi(params, req, runtime), new DeleteFirewallTemplateRulesResponse({}));
    } else {
      return $dara.cast<DeleteFirewallTemplateRulesResponse>(await this.execute(params, req, runtime), new DeleteFirewallTemplateRulesResponse({}));
    }

  }

  /**
   * Deletes firewall rules from a firewall template based on your requirements.
   * 
   * @remarks
   * Deletion of firewall rules does not affect the firewall rules that have been applied to simple application servers.
   * 
   * @param request - DeleteFirewallTemplateRulesRequest
   * @returns DeleteFirewallTemplateRulesResponse
   */
  async deleteFirewallTemplateRules(request: DeleteFirewallTemplateRulesRequest): Promise<DeleteFirewallTemplateRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFirewallTemplateRulesWithOptions(request, runtime);
  }

  /**
   * Deletes firewall templates from a simple application server.
   * 
   * @remarks
   * Deleting a firewall template does not affect the firewall rules that have been applied to simple application servers. You can delete firewall templates that you no longer need.
   * 
   * @param request - DeleteFirewallTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFirewallTemplatesResponse
   */
  async deleteFirewallTemplatesWithOptions(request: DeleteFirewallTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<DeleteFirewallTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFirewallTemplates",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteFirewallTemplatesResponse>(await this.callApi(params, req, runtime), new DeleteFirewallTemplatesResponse({}));
    } else {
      return $dara.cast<DeleteFirewallTemplatesResponse>(await this.execute(params, req, runtime), new DeleteFirewallTemplatesResponse({}));
    }

  }

  /**
   * Deletes firewall templates from a simple application server.
   * 
   * @remarks
   * Deleting a firewall template does not affect the firewall rules that have been applied to simple application servers. You can delete firewall templates that you no longer need.
   * 
   * @param request - DeleteFirewallTemplatesRequest
   * @returns DeleteFirewallTemplatesResponse
   */
  async deleteFirewallTemplates(request: DeleteFirewallTemplatesRequest): Promise<DeleteFirewallTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFirewallTemplatesWithOptions(request, runtime);
  }

  /**
   * Deletes the key pair of a simple application server.
   * 
   * @param request - DeleteInstanceKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceKeyPairResponse
   */
  async deleteInstanceKeyPairWithOptions(request: DeleteInstanceKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteInstanceKeyPairResponse>(await this.callApi(params, req, runtime), new DeleteInstanceKeyPairResponse({}));
    } else {
      return $dara.cast<DeleteInstanceKeyPairResponse>(await this.execute(params, req, runtime), new DeleteInstanceKeyPairResponse({}));
    }

  }

  /**
   * Deletes the key pair of a simple application server.
   * 
   * @param request - DeleteInstanceKeyPairRequest
   * @returns DeleteInstanceKeyPairResponse
   */
  async deleteInstanceKeyPair(request: DeleteInstanceKeyPairRequest): Promise<DeleteInstanceKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceKeyPairWithOptions(request, runtime);
  }

  /**
   * Deletes the SSH key pairs of simple application servers.
   * 
   * @remarks
   * You must unbind SSH key pairs that you no longer use from simple application servers before you delete the SSH key pairs.
   * 
   * @param request - DeleteKeyPairsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKeyPairsResponse
   */
  async deleteKeyPairsWithOptions(request: DeleteKeyPairsRequest, runtime: $dara.RuntimeOptions): Promise<DeleteKeyPairsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.keyPairNames)) {
      query["KeyPairNames"] = request.keyPairNames;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKeyPairs",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteKeyPairsResponse>(await this.callApi(params, req, runtime), new DeleteKeyPairsResponse({}));
    } else {
      return $dara.cast<DeleteKeyPairsResponse>(await this.execute(params, req, runtime), new DeleteKeyPairsResponse({}));
    }

  }

  /**
   * Deletes the SSH key pairs of simple application servers.
   * 
   * @remarks
   * You must unbind SSH key pairs that you no longer use from simple application servers before you delete the SSH key pairs.
   * 
   * @param request - DeleteKeyPairsRequest
   * @returns DeleteKeyPairsResponse
   */
  async deleteKeyPairs(request: DeleteKeyPairsRequest): Promise<DeleteKeyPairsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteKeyPairsWithOptions(request, runtime);
  }

  /**
   * Deletes a snapshot of a simple application server.
   * 
   * @remarks
   * You can delete a snapshot if you no longer need it.
   * >  If a custom image was created from the snapshot, delete the custom image before you delete the snapshot.
   * 
   * @param request - DeleteSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(request: DeleteSnapshotRequest, runtime: $dara.RuntimeOptions): Promise<DeleteSnapshotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnapshot",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteSnapshotResponse>(await this.callApi(params, req, runtime), new DeleteSnapshotResponse({}));
    } else {
      return $dara.cast<DeleteSnapshotResponse>(await this.execute(params, req, runtime), new DeleteSnapshotResponse({}));
    }

  }

  /**
   * Deletes a snapshot of a simple application server.
   * 
   * @remarks
   * You can delete a snapshot if you no longer need it.
   * >  If a custom image was created from the snapshot, delete the custom image before you delete the snapshot.
   * 
   * @param request - DeleteSnapshotRequest
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshot(request: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  /**
   * Deletes snapshots of a simple application server.
   * 
   * @param request - DeleteSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotsResponse
   */
  async deleteSnapshotsWithOptions(request: DeleteSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<DeleteSnapshotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snapshotIds)) {
      query["SnapshotIds"] = request.snapshotIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnapshots",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteSnapshotsResponse>(await this.callApi(params, req, runtime), new DeleteSnapshotsResponse({}));
    } else {
      return $dara.cast<DeleteSnapshotsResponse>(await this.execute(params, req, runtime), new DeleteSnapshotsResponse({}));
    }

  }

  /**
   * Deletes snapshots of a simple application server.
   * 
   * @param request - DeleteSnapshotsRequest
   * @returns DeleteSnapshotsResponse
   */
  async deleteSnapshots(request: DeleteSnapshotsRequest): Promise<DeleteSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSnapshotsWithOptions(request, runtime);
  }

  /**
   * Queries the Command Assistant information of simple application servers.
   * 
   * @param tmpReq - DescribeCloudAssistantAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudAssistantAttributesResponse
   */
  async describeCloudAssistantAttributesWithOptions(tmpReq: DescribeCloudAssistantAttributesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCloudAssistantAttributesResponse> {
    tmpReq.validate();
    let request = new DescribeCloudAssistantAttributesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudAssistantAttributes",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCloudAssistantAttributesResponse>(await this.callApi(params, req, runtime), new DescribeCloudAssistantAttributesResponse({}));
    } else {
      return $dara.cast<DescribeCloudAssistantAttributesResponse>(await this.execute(params, req, runtime), new DescribeCloudAssistantAttributesResponse({}));
    }

  }

  /**
   * Queries the Command Assistant information of simple application servers.
   * 
   * @param request - DescribeCloudAssistantAttributesRequest
   * @returns DescribeCloudAssistantAttributesResponse
   */
  async describeCloudAssistantAttributes(request: DescribeCloudAssistantAttributesRequest): Promise<DescribeCloudAssistantAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudAssistantAttributesWithOptions(request, runtime);
  }

  /**
   * Queries whether the Cloud Assistant client is installed on simple application servers.
   * 
   * @remarks
   * By default, the Cloud Assistant client is installed on simple application servers. If you have manually uninstalled the client, you must reinstall the client. Otherwise, you cannot run commands on the servers.
   * 
   * @param tmpReq - DescribeCloudAssistantStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudAssistantStatusResponse
   */
  async describeCloudAssistantStatusWithOptions(tmpReq: DescribeCloudAssistantStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCloudAssistantStatusResponse> {
    tmpReq.validate();
    let request = new DescribeCloudAssistantStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudAssistantStatus",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCloudAssistantStatusResponse>(await this.callApi(params, req, runtime), new DescribeCloudAssistantStatusResponse({}));
    } else {
      return $dara.cast<DescribeCloudAssistantStatusResponse>(await this.execute(params, req, runtime), new DescribeCloudAssistantStatusResponse({}));
    }

  }

  /**
   * Queries whether the Cloud Assistant client is installed on simple application servers.
   * 
   * @remarks
   * By default, the Cloud Assistant client is installed on simple application servers. If you have manually uninstalled the client, you must reinstall the client. Otherwise, you cannot run commands on the servers.
   * 
   * @param request - DescribeCloudAssistantStatusRequest
   * @returns DescribeCloudAssistantStatusResponse
   */
  async describeCloudAssistantStatus(request: DescribeCloudAssistantStatusRequest): Promise<DescribeCloudAssistantStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudAssistantStatusWithOptions(request, runtime);
  }

  /**
   * Queries the status of the CloudMonitor agent on simple application servers.
   * 
   * @param request - DescribeCloudMonitorAgentStatusesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudMonitorAgentStatusesResponse
   */
  async describeCloudMonitorAgentStatusesWithOptions(request: DescribeCloudMonitorAgentStatusesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCloudMonitorAgentStatusesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudMonitorAgentStatuses",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCloudMonitorAgentStatusesResponse>(await this.callApi(params, req, runtime), new DescribeCloudMonitorAgentStatusesResponse({}));
    } else {
      return $dara.cast<DescribeCloudMonitorAgentStatusesResponse>(await this.execute(params, req, runtime), new DescribeCloudMonitorAgentStatusesResponse({}));
    }

  }

  /**
   * Queries the status of the CloudMonitor agent on simple application servers.
   * 
   * @param request - DescribeCloudMonitorAgentStatusesRequest
   * @returns DescribeCloudMonitorAgentStatusesResponse
   */
  async describeCloudMonitorAgentStatuses(request: DescribeCloudMonitorAgentStatusesRequest): Promise<DescribeCloudMonitorAgentStatusesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudMonitorAgentStatusesWithOptions(request, runtime);
  }

  /**
   * Queries the executions and execution status of a Cloud Assistant command.
   * 
   * @param request - DescribeCommandInvocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCommandInvocationsResponse
   */
  async describeCommandInvocationsWithOptions(request: DescribeCommandInvocationsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCommandInvocationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!$dara.isNull(request.commandName)) {
      query["CommandName"] = request.commandName;
    }

    if (!$dara.isNull(request.commandType)) {
      query["CommandType"] = request.commandType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.invocationStatus)) {
      query["InvocationStatus"] = request.invocationStatus;
    }

    if (!$dara.isNull(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCommandInvocations",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCommandInvocationsResponse>(await this.callApi(params, req, runtime), new DescribeCommandInvocationsResponse({}));
    } else {
      return $dara.cast<DescribeCommandInvocationsResponse>(await this.execute(params, req, runtime), new DescribeCommandInvocationsResponse({}));
    }

  }

  /**
   * Queries the executions and execution status of a Cloud Assistant command.
   * 
   * @param request - DescribeCommandInvocationsRequest
   * @returns DescribeCommandInvocationsResponse
   */
  async describeCommandInvocations(request: DescribeCommandInvocationsRequest): Promise<DescribeCommandInvocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCommandInvocationsWithOptions(request, runtime);
  }

  /**
   * Queries the commands that you created or the common commands that Alibaba Cloud provides.
   * 
   * @param request - DescribeCommandsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCommandsResponse
   */
  async describeCommandsWithOptions(request: DescribeCommandsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCommandsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.provider)) {
      query["Provider"] = request.provider;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCommands",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCommandsResponse>(await this.callApi(params, req, runtime), new DescribeCommandsResponse({}));
    } else {
      return $dara.cast<DescribeCommandsResponse>(await this.execute(params, req, runtime), new DescribeCommandsResponse({}));
    }

  }

  /**
   * Queries the commands that you created or the common commands that Alibaba Cloud provides.
   * 
   * @param request - DescribeCommandsRequest
   * @returns DescribeCommandsResponse
   */
  async describeCommands(request: DescribeCommandsRequest): Promise<DescribeCommandsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCommandsWithOptions(request, runtime);
  }

  /**
   * Queries error logs of databases in a Simple Database Service instance.
   * 
   * @remarks
   * You can call this operation to query the error logs of databases in a Simple Database Service instance and locate faults based on the error logs.
   * 
   * @param request - DescribeDatabaseErrorLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatabaseErrorLogsResponse
   */
  async describeDatabaseErrorLogsWithOptions(request: DescribeDatabaseErrorLogsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDatabaseErrorLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatabaseErrorLogs",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDatabaseErrorLogsResponse>(await this.callApi(params, req, runtime), new DescribeDatabaseErrorLogsResponse({}));
    } else {
      return $dara.cast<DescribeDatabaseErrorLogsResponse>(await this.execute(params, req, runtime), new DescribeDatabaseErrorLogsResponse({}));
    }

  }

  /**
   * Queries error logs of databases in a Simple Database Service instance.
   * 
   * @remarks
   * You can call this operation to query the error logs of databases in a Simple Database Service instance and locate faults based on the error logs.
   * 
   * @param request - DescribeDatabaseErrorLogsRequest
   * @returns DescribeDatabaseErrorLogsResponse
   */
  async describeDatabaseErrorLogs(request: DescribeDatabaseErrorLogsRequest): Promise<DescribeDatabaseErrorLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatabaseErrorLogsWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring information about a Simple Database Service instance.
   * 
   * @remarks
   * After you create a Simple Database Service instance, you can query the details about the instance, including CPU, memory, and disk usage, storage IOPS, and total number of connections.
   * 
   * @param request - DescribeDatabaseInstanceMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatabaseInstanceMetricDataResponse
   */
  async describeDatabaseInstanceMetricDataWithOptions(request: DescribeDatabaseInstanceMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDatabaseInstanceMetricDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatabaseInstanceMetricData",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDatabaseInstanceMetricDataResponse>(await this.callApi(params, req, runtime), new DescribeDatabaseInstanceMetricDataResponse({}));
    } else {
      return $dara.cast<DescribeDatabaseInstanceMetricDataResponse>(await this.execute(params, req, runtime), new DescribeDatabaseInstanceMetricDataResponse({}));
    }

  }

  /**
   * Queries the monitoring information about a Simple Database Service instance.
   * 
   * @remarks
   * After you create a Simple Database Service instance, you can query the details about the instance, including CPU, memory, and disk usage, storage IOPS, and total number of connections.
   * 
   * @param request - DescribeDatabaseInstanceMetricDataRequest
   * @returns DescribeDatabaseInstanceMetricDataResponse
   */
  async describeDatabaseInstanceMetricData(request: DescribeDatabaseInstanceMetricDataRequest): Promise<DescribeDatabaseInstanceMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatabaseInstanceMetricDataWithOptions(request, runtime);
  }

  /**
   * Queries the parameters of a Simple Database Service instance.
   * 
   * @remarks
   * You can call this operation to query the information about parameters of a Simple Database Service instance.
   * 
   * @param request - DescribeDatabaseInstanceParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatabaseInstanceParametersResponse
   */
  async describeDatabaseInstanceParametersWithOptions(request: DescribeDatabaseInstanceParametersRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDatabaseInstanceParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatabaseInstanceParameters",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDatabaseInstanceParametersResponse>(await this.callApi(params, req, runtime), new DescribeDatabaseInstanceParametersResponse({}));
    } else {
      return $dara.cast<DescribeDatabaseInstanceParametersResponse>(await this.execute(params, req, runtime), new DescribeDatabaseInstanceParametersResponse({}));
    }

  }

  /**
   * Queries the parameters of a Simple Database Service instance.
   * 
   * @remarks
   * You can call this operation to query the information about parameters of a Simple Database Service instance.
   * 
   * @param request - DescribeDatabaseInstanceParametersRequest
   * @returns DescribeDatabaseInstanceParametersResponse
   */
  async describeDatabaseInstanceParameters(request: DescribeDatabaseInstanceParametersRequest): Promise<DescribeDatabaseInstanceParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatabaseInstanceParametersWithOptions(request, runtime);
  }

  /**
   * Queries the information about Simple Database Service instances.
   * 
   * @remarks
   * You can call this operation to query the details of Simple Database Service instances in a region, including the IDs, names, plans, database versions, public endpoints, internal endpoints, creation time, and expiration time of the instances.
   * 
   * @param request - DescribeDatabaseInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatabaseInstancesResponse
   */
  async describeDatabaseInstancesWithOptions(request: DescribeDatabaseInstancesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDatabaseInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseInstanceIds)) {
      query["DatabaseInstanceIds"] = request.databaseInstanceIds;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatabaseInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDatabaseInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDatabaseInstancesResponse({}));
    } else {
      return $dara.cast<DescribeDatabaseInstancesResponse>(await this.execute(params, req, runtime), new DescribeDatabaseInstancesResponse({}));
    }

  }

  /**
   * Queries the information about Simple Database Service instances.
   * 
   * @remarks
   * You can call this operation to query the details of Simple Database Service instances in a region, including the IDs, names, plans, database versions, public endpoints, internal endpoints, creation time, and expiration time of the instances.
   * 
   * @param request - DescribeDatabaseInstancesRequest
   * @returns DescribeDatabaseInstancesResponse
   */
  async describeDatabaseInstances(request: DescribeDatabaseInstancesRequest): Promise<DescribeDatabaseInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatabaseInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the slow query log details of a Simple Database Service instance.
   * 
   * @remarks
   * You can query the slow query log details of a Simple Database Service instance and locate faults based on the log details.
   * >  Slow query log details are retained for 7 days.
   * 
   * @param request - DescribeDatabaseSlowLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatabaseSlowLogRecordsResponse
   */
  async describeDatabaseSlowLogRecordsWithOptions(request: DescribeDatabaseSlowLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDatabaseSlowLogRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatabaseSlowLogRecords",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDatabaseSlowLogRecordsResponse>(await this.callApi(params, req, runtime), new DescribeDatabaseSlowLogRecordsResponse({}));
    } else {
      return $dara.cast<DescribeDatabaseSlowLogRecordsResponse>(await this.execute(params, req, runtime), new DescribeDatabaseSlowLogRecordsResponse({}));
    }

  }

  /**
   * Queries the slow query log details of a Simple Database Service instance.
   * 
   * @remarks
   * You can query the slow query log details of a Simple Database Service instance and locate faults based on the log details.
   * >  Slow query log details are retained for 7 days.
   * 
   * @param request - DescribeDatabaseSlowLogRecordsRequest
   * @returns DescribeDatabaseSlowLogRecordsResponse
   */
  async describeDatabaseSlowLogRecords(request: DescribeDatabaseSlowLogRecordsRequest): Promise<DescribeDatabaseSlowLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatabaseSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the result of applying a firewall template to simple application servers.
   * 
   * @param request - DescribeFirewallTemplateApplyResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFirewallTemplateApplyResultsResponse
   */
  async describeFirewallTemplateApplyResultsWithOptions(request: DescribeFirewallTemplateApplyResultsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFirewallTemplateApplyResultsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFirewallTemplateApplyResults",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeFirewallTemplateApplyResultsResponse>(await this.callApi(params, req, runtime), new DescribeFirewallTemplateApplyResultsResponse({}));
    } else {
      return $dara.cast<DescribeFirewallTemplateApplyResultsResponse>(await this.execute(params, req, runtime), new DescribeFirewallTemplateApplyResultsResponse({}));
    }

  }

  /**
   * Queries the result of applying a firewall template to simple application servers.
   * 
   * @param request - DescribeFirewallTemplateApplyResultsRequest
   * @returns DescribeFirewallTemplateApplyResultsResponse
   */
  async describeFirewallTemplateApplyResults(request: DescribeFirewallTemplateApplyResultsRequest): Promise<DescribeFirewallTemplateApplyResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFirewallTemplateApplyResultsWithOptions(request, runtime);
  }

  /**
   * Queries the result of applying a firewall template rule to simple application servers.
   * 
   * @param request - DescribeFirewallTemplateRulesApplyResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFirewallTemplateRulesApplyResultResponse
   */
  async describeFirewallTemplateRulesApplyResultWithOptions(request: DescribeFirewallTemplateRulesApplyResultRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFirewallTemplateRulesApplyResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFirewallTemplateRulesApplyResult",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeFirewallTemplateRulesApplyResultResponse>(await this.callApi(params, req, runtime), new DescribeFirewallTemplateRulesApplyResultResponse({}));
    } else {
      return $dara.cast<DescribeFirewallTemplateRulesApplyResultResponse>(await this.execute(params, req, runtime), new DescribeFirewallTemplateRulesApplyResultResponse({}));
    }

  }

  /**
   * Queries the result of applying a firewall template rule to simple application servers.
   * 
   * @param request - DescribeFirewallTemplateRulesApplyResultRequest
   * @returns DescribeFirewallTemplateRulesApplyResultResponse
   */
  async describeFirewallTemplateRulesApplyResult(request: DescribeFirewallTemplateRulesApplyResultRequest): Promise<DescribeFirewallTemplateRulesApplyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFirewallTemplateRulesApplyResultWithOptions(request, runtime);
  }

  /**
   * Queries details about firewall templates.
   * 
   * @param request - DescribeFirewallTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFirewallTemplatesResponse
   */
  async describeFirewallTemplatesWithOptions(request: DescribeFirewallTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFirewallTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFirewallTemplates",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeFirewallTemplatesResponse>(await this.callApi(params, req, runtime), new DescribeFirewallTemplatesResponse({}));
    } else {
      return $dara.cast<DescribeFirewallTemplatesResponse>(await this.execute(params, req, runtime), new DescribeFirewallTemplatesResponse({}));
    }

  }

  /**
   * Queries details about firewall templates.
   * 
   * @param request - DescribeFirewallTemplatesRequest
   * @returns DescribeFirewallTemplatesResponse
   */
  async describeFirewallTemplates(request: DescribeFirewallTemplatesRequest): Promise<DescribeFirewallTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFirewallTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries information about the key pair of a simple application server.
   * 
   * @param request - DescribeInstanceKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceKeyPairResponse
   */
  async describeInstanceKeyPairWithOptions(request: DescribeInstanceKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstanceKeyPairResponse>(await this.callApi(params, req, runtime), new DescribeInstanceKeyPairResponse({}));
    } else {
      return $dara.cast<DescribeInstanceKeyPairResponse>(await this.execute(params, req, runtime), new DescribeInstanceKeyPairResponse({}));
    }

  }

  /**
   * Queries information about the key pair of a simple application server.
   * 
   * @param request - DescribeInstanceKeyPairRequest
   * @returns DescribeInstanceKeyPairResponse
   */
  async describeInstanceKeyPair(request: DescribeInstanceKeyPairRequest): Promise<DescribeInstanceKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceKeyPairWithOptions(request, runtime);
  }

  /**
   * Checks whether a password is set for a simple application server.
   * 
   * @param request - DescribeInstancePasswordsSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancePasswordsSettingResponse
   */
  async describeInstancePasswordsSettingWithOptions(request: DescribeInstancePasswordsSettingRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstancePasswordsSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstancePasswordsSetting",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstancePasswordsSettingResponse>(await this.callApi(params, req, runtime), new DescribeInstancePasswordsSettingResponse({}));
    } else {
      return $dara.cast<DescribeInstancePasswordsSettingResponse>(await this.execute(params, req, runtime), new DescribeInstancePasswordsSettingResponse({}));
    }

  }

  /**
   * Checks whether a password is set for a simple application server.
   * 
   * @param request - DescribeInstancePasswordsSettingRequest
   * @returns DescribeInstancePasswordsSettingResponse
   */
  async describeInstancePasswordsSetting(request: DescribeInstancePasswordsSettingRequest): Promise<DescribeInstancePasswordsSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancePasswordsSettingWithOptions(request, runtime);
  }

  /**
   * Queries the VNC connection address of a simple application server.
   * 
   * @param request - DescribeInstanceVncUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceVncUrlResponse
   */
  async describeInstanceVncUrlWithOptions(request: DescribeInstanceVncUrlRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceVncUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceVncUrl",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstanceVncUrlResponse>(await this.callApi(params, req, runtime), new DescribeInstanceVncUrlResponse({}));
    } else {
      return $dara.cast<DescribeInstanceVncUrlResponse>(await this.execute(params, req, runtime), new DescribeInstanceVncUrlResponse({}));
    }

  }

  /**
   * Queries the VNC connection address of a simple application server.
   * 
   * @param request - DescribeInstanceVncUrlRequest
   * @returns DescribeInstanceVncUrlResponse
   */
  async describeInstanceVncUrl(request: DescribeInstanceVncUrlRequest): Promise<DescribeInstanceVncUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceVncUrlWithOptions(request, runtime);
  }

  /**
   * Queries the execution result of a command.
   * 
   * @remarks
   *   After you execute a command, the command may not succeed or return the expected results. You can call this operation to query the execution result of a command.
   * *   You can query the execution results that were generated within the last two weeks. A maximum of 100,000 entries of execution results can be retained.
   * 
   * @param request - DescribeInvocationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInvocationResultResponse
   */
  async describeInvocationResultWithOptions(request: DescribeInvocationResultRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInvocationResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInvocationResult",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInvocationResultResponse>(await this.callApi(params, req, runtime), new DescribeInvocationResultResponse({}));
    } else {
      return $dara.cast<DescribeInvocationResultResponse>(await this.execute(params, req, runtime), new DescribeInvocationResultResponse({}));
    }

  }

  /**
   * Queries the execution result of a command.
   * 
   * @remarks
   *   After you execute a command, the command may not succeed or return the expected results. You can call this operation to query the execution result of a command.
   * *   You can query the execution results that were generated within the last two weeks. A maximum of 100,000 entries of execution results can be retained.
   * 
   * @param request - DescribeInvocationResultRequest
   * @returns DescribeInvocationResultResponse
   */
  async describeInvocationResult(request: DescribeInvocationResultRequest): Promise<DescribeInvocationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInvocationResultWithOptions(request, runtime);
  }

  /**
   * Queries details about command execution.
   * 
   * @remarks
   *   After you execute a command, the command may not succeed or return the expected results. You can call this operation to query the actual execution results.
   * *   You can query the execution results that were generated within the last two weeks. Up to 100,000 entries of execution results can be retained.
   * 
   * @param request - DescribeInvocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInvocationsResponse
   */
  async describeInvocationsWithOptions(request: DescribeInvocationsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInvocationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.invokeStatus)) {
      query["InvokeStatus"] = request.invokeStatus;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInvocations",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInvocationsResponse>(await this.callApi(params, req, runtime), new DescribeInvocationsResponse({}));
    } else {
      return $dara.cast<DescribeInvocationsResponse>(await this.execute(params, req, runtime), new DescribeInvocationsResponse({}));
    }

  }

  /**
   * Queries details about command execution.
   * 
   * @remarks
   *   After you execute a command, the command may not succeed or return the expected results. You can call this operation to query the actual execution results.
   * *   You can query the execution results that were generated within the last two weeks. Up to 100,000 entries of execution results can be retained.
   * 
   * @param request - DescribeInvocationsRequest
   * @returns DescribeInvocationsResponse
   */
  async describeInvocations(request: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring information about vCPUs, memory, disk IOPS, and traffic of a simple application server.
   * 
   * @param request - DescribeMonitorDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitorDataResponse
   */
  async describeMonitorDataWithOptions(request: DescribeMonitorDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeMonitorDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.length)) {
      query["Length"] = request.length;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitorData",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeMonitorDataResponse>(await this.callApi(params, req, runtime), new DescribeMonitorDataResponse({}));
    } else {
      return $dara.cast<DescribeMonitorDataResponse>(await this.execute(params, req, runtime), new DescribeMonitorDataResponse({}));
    }

  }

  /**
   * Queries the monitoring information about vCPUs, memory, disk IOPS, and traffic of a simple application server.
   * 
   * @param request - DescribeMonitorDataRequest
   * @returns DescribeMonitorDataResponse
   */
  async describeMonitorData(request: DescribeMonitorDataRequest): Promise<DescribeMonitorDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitorDataWithOptions(request, runtime);
  }

  /**
   * Queries the status of the Security Center agent on a simple application server.
   * 
   * @param request - DescribeSecurityAgentStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityAgentStatusResponse
   */
  async describeSecurityAgentStatusWithOptions(request: DescribeSecurityAgentStatusRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSecurityAgentStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityAgentStatus",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSecurityAgentStatusResponse>(await this.callApi(params, req, runtime), new DescribeSecurityAgentStatusResponse({}));
    } else {
      return $dara.cast<DescribeSecurityAgentStatusResponse>(await this.execute(params, req, runtime), new DescribeSecurityAgentStatusResponse({}));
    }

  }

  /**
   * Queries the status of the Security Center agent on a simple application server.
   * 
   * @param request - DescribeSecurityAgentStatusRequest
   * @returns DescribeSecurityAgentStatusResponse
   */
  async describeSecurityAgentStatus(request: DescribeSecurityAgentStatusRequest): Promise<DescribeSecurityAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityAgentStatusWithOptions(request, runtime);
  }

  /**
   * Unbinds key pairs from simple application servers.
   * 
   * @remarks
   * If you want to change the SSH key pairs that are bound to your simple application servers or your end user no longer needs to access a specific simple application server, you can unbind the SSH key pairs from simple application servers to improve the security of the simple application servers or restrict access to the specific simple application server.
   * 
   * @param request - DetachKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachKeyPairResponse
   */
  async detachKeyPairWithOptions(request: DetachKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<DetachKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DetachKeyPairResponse>(await this.callApi(params, req, runtime), new DetachKeyPairResponse({}));
    } else {
      return $dara.cast<DetachKeyPairResponse>(await this.execute(params, req, runtime), new DetachKeyPairResponse({}));
    }

  }

  /**
   * Unbinds key pairs from simple application servers.
   * 
   * @remarks
   * If you want to change the SSH key pairs that are bound to your simple application servers or your end user no longer needs to access a specific simple application server, you can unbind the SSH key pairs from simple application servers to improve the security of the simple application servers or restrict access to the specific simple application server.
   * 
   * @param request - DetachKeyPairRequest
   * @returns DetachKeyPairResponse
   */
  async detachKeyPair(request: DetachKeyPairRequest): Promise<DetachKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachKeyPairWithOptions(request, runtime);
  }

  /**
   * Disables a firewall rule of a simple application server.
   * 
   * @param request - DisableFirewallRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableFirewallRuleResponse
   */
  async disableFirewallRuleWithOptions(request: DisableFirewallRuleRequest, runtime: $dara.RuntimeOptions): Promise<DisableFirewallRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableFirewallRule",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DisableFirewallRuleResponse>(await this.callApi(params, req, runtime), new DisableFirewallRuleResponse({}));
    } else {
      return $dara.cast<DisableFirewallRuleResponse>(await this.execute(params, req, runtime), new DisableFirewallRuleResponse({}));
    }

  }

  /**
   * Disables a firewall rule of a simple application server.
   * 
   * @param request - DisableFirewallRuleRequest
   * @returns DisableFirewallRuleResponse
   */
  async disableFirewallRule(request: DisableFirewallRuleRequest): Promise<DisableFirewallRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableFirewallRuleWithOptions(request, runtime);
  }

  /**
   * Enables a firewall rule for a simple application server.
   * 
   * @param request - EnableFirewallRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableFirewallRuleResponse
   */
  async enableFirewallRuleWithOptions(request: EnableFirewallRuleRequest, runtime: $dara.RuntimeOptions): Promise<EnableFirewallRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableFirewallRule",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<EnableFirewallRuleResponse>(await this.callApi(params, req, runtime), new EnableFirewallRuleResponse({}));
    } else {
      return $dara.cast<EnableFirewallRuleResponse>(await this.execute(params, req, runtime), new EnableFirewallRuleResponse({}));
    }

  }

  /**
   * Enables a firewall rule for a simple application server.
   * 
   * @param request - EnableFirewallRuleRequest
   * @returns EnableFirewallRuleResponse
   */
  async enableFirewallRule(request: EnableFirewallRuleRequest): Promise<EnableFirewallRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableFirewallRuleWithOptions(request, runtime);
  }

  /**
   * Imports an existing key pair to the Simple Application Server console.
   * 
   * @remarks
   * You can call this operation to import an existing key pair to the Simple Application Server console. This way, you can use the key pair to log on to simple application servers. The existing key pair that you want to import must use a supported encryption method. For more information, see [Q2: Which encryption methods must be used by key pairs when I import existing key pairs to the Simple Application Server console?](https://help.aliyun.com/document_detail/59085.html)
   * 
   * @param request - ImportKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportKeyPairResponse
   */
  async importKeyPairWithOptions(request: ImportKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<ImportKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.publicKeyBody)) {
      query["PublicKeyBody"] = request.publicKeyBody;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ImportKeyPairResponse>(await this.callApi(params, req, runtime), new ImportKeyPairResponse({}));
    } else {
      return $dara.cast<ImportKeyPairResponse>(await this.execute(params, req, runtime), new ImportKeyPairResponse({}));
    }

  }

  /**
   * Imports an existing key pair to the Simple Application Server console.
   * 
   * @remarks
   * You can call this operation to import an existing key pair to the Simple Application Server console. This way, you can use the key pair to log on to simple application servers. The existing key pair that you want to import must use a supported encryption method. For more information, see [Q2: Which encryption methods must be used by key pairs when I import existing key pairs to the Simple Application Server console?](https://help.aliyun.com/document_detail/59085.html)
   * 
   * @param request - ImportKeyPairRequest
   * @returns ImportKeyPairResponse
   */
  async importKeyPair(request: ImportKeyPairRequest): Promise<ImportKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importKeyPairWithOptions(request, runtime);
  }

  /**
   * Installs the Cloud Assistant client on simple application servers at a time.
   * 
   * @remarks
   * To run commands on your simple application servers, you must install the Cloud Assistant client on your servers. You can call the [DescribeCloudAssistantStatus](https://help.aliyun.com/document_detail/439512.html) operation to check whether the Cloud Assistant client is installed on your simple application servers. If you have not installed the Cloud Assistant client, you can call the InstallCloudAssistant operation to install the client. Then, you can call the [RebootInstance](https://help.aliyun.com/document_detail/190443.html) operation to restart the servers to allow the client to take effect.
   * 
   * @param tmpReq - InstallCloudAssistantRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallCloudAssistantResponse
   */
  async installCloudAssistantWithOptions(tmpReq: InstallCloudAssistantRequest, runtime: $dara.RuntimeOptions): Promise<InstallCloudAssistantResponse> {
    tmpReq.validate();
    let request = new InstallCloudAssistantShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallCloudAssistant",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InstallCloudAssistantResponse>(await this.callApi(params, req, runtime), new InstallCloudAssistantResponse({}));
    } else {
      return $dara.cast<InstallCloudAssistantResponse>(await this.execute(params, req, runtime), new InstallCloudAssistantResponse({}));
    }

  }

  /**
   * Installs the Cloud Assistant client on simple application servers at a time.
   * 
   * @remarks
   * To run commands on your simple application servers, you must install the Cloud Assistant client on your servers. You can call the [DescribeCloudAssistantStatus](https://help.aliyun.com/document_detail/439512.html) operation to check whether the Cloud Assistant client is installed on your simple application servers. If you have not installed the Cloud Assistant client, you can call the InstallCloudAssistant operation to install the client. Then, you can call the [RebootInstance](https://help.aliyun.com/document_detail/190443.html) operation to restart the servers to allow the client to take effect.
   * 
   * @param request - InstallCloudAssistantRequest
   * @returns InstallCloudAssistantResponse
   */
  async installCloudAssistant(request: InstallCloudAssistantRequest): Promise<InstallCloudAssistantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installCloudAssistantWithOptions(request, runtime);
  }

  /**
   * Installs the CloudMonitor agent for a simple application server.
   * 
   * @param request - InstallCloudMonitorAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallCloudMonitorAgentResponse
   */
  async installCloudMonitorAgentWithOptions(request: InstallCloudMonitorAgentRequest, runtime: $dara.RuntimeOptions): Promise<InstallCloudMonitorAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallCloudMonitorAgent",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InstallCloudMonitorAgentResponse>(await this.callApi(params, req, runtime), new InstallCloudMonitorAgentResponse({}));
    } else {
      return $dara.cast<InstallCloudMonitorAgentResponse>(await this.execute(params, req, runtime), new InstallCloudMonitorAgentResponse({}));
    }

  }

  /**
   * Installs the CloudMonitor agent for a simple application server.
   * 
   * @param request - InstallCloudMonitorAgentRequest
   * @returns InstallCloudMonitorAgentResponse
   */
  async installCloudMonitorAgent(request: InstallCloudMonitorAgentRequest): Promise<InstallCloudMonitorAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installCloudMonitorAgentWithOptions(request, runtime);
  }

  /**
   * Runs a Command Assistant command for one or more simple application servers.
   * 
   * @remarks
   *   The simple application servers for which you want to call the operation must meet the following conditions. If a simple application server cannot meet the conditions, you must call this operation again.
   *     *   The simple application servers are in the `Running` state. You can call the [ListInstances](https://help.aliyun.com/document_detail/2361065.html) operation to query the status of simple application servers.
   *     *   Cloud Assistant Agent is installed on the simple application servers. For more information, see [InstallCloudAssistant](https://help.aliyun.com/document_detail/2361030.html).
   *     *   If you run a PowerShell command, make sure that the PowerShell module is configured for the simple application servers.
   * *   The command may fail to be run due to the abnormal states of simple application servers, network exceptions, or exceptions in Cloud Assistant Agent. If the command fails to be run, no execution information is generated.
   * *   If you enable the custom parameter feature when you create a command, you must set the `Parameters` parameter to specify custom parameters when you run the command.
   * *   When you call this operation, you can select only one common command or a custom command that you have created.
   * 
   * @param tmpReq - InvokeCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeCommandResponse
   */
  async invokeCommandWithOptions(tmpReq: InvokeCommandRequest, runtime: $dara.RuntimeOptions): Promise<InvokeCommandResponse> {
    tmpReq.validate();
    let request = new InvokeCommandShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeCommand",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InvokeCommandResponse>(await this.callApi(params, req, runtime), new InvokeCommandResponse({}));
    } else {
      return $dara.cast<InvokeCommandResponse>(await this.execute(params, req, runtime), new InvokeCommandResponse({}));
    }

  }

  /**
   * Runs a Command Assistant command for one or more simple application servers.
   * 
   * @remarks
   *   The simple application servers for which you want to call the operation must meet the following conditions. If a simple application server cannot meet the conditions, you must call this operation again.
   *     *   The simple application servers are in the `Running` state. You can call the [ListInstances](https://help.aliyun.com/document_detail/2361065.html) operation to query the status of simple application servers.
   *     *   Cloud Assistant Agent is installed on the simple application servers. For more information, see [InstallCloudAssistant](https://help.aliyun.com/document_detail/2361030.html).
   *     *   If you run a PowerShell command, make sure that the PowerShell module is configured for the simple application servers.
   * *   The command may fail to be run due to the abnormal states of simple application servers, network exceptions, or exceptions in Cloud Assistant Agent. If the command fails to be run, no execution information is generated.
   * *   If you enable the custom parameter feature when you create a command, you must set the `Parameters` parameter to specify custom parameters when you run the command.
   * *   When you call this operation, you can select only one common command or a custom command that you have created.
   * 
   * @param request - InvokeCommandRequest
   * @returns InvokeCommandResponse
   */
  async invokeCommand(request: InvokeCommandRequest): Promise<InvokeCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.invokeCommandWithOptions(request, runtime);
  }

  /**
   * Queries information about custom images that are shared across Alibaba Cloud accounts in a region.
   * 
   * @param request - ListCustomImageShareAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomImageShareAccountsResponse
   */
  async listCustomImageShareAccountsWithOptions(request: ListCustomImageShareAccountsRequest, runtime: $dara.RuntimeOptions): Promise<ListCustomImageShareAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomImageShareAccounts",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCustomImageShareAccountsResponse>(await this.callApi(params, req, runtime), new ListCustomImageShareAccountsResponse({}));
    } else {
      return $dara.cast<ListCustomImageShareAccountsResponse>(await this.execute(params, req, runtime), new ListCustomImageShareAccountsResponse({}));
    }

  }

  /**
   * Queries information about custom images that are shared across Alibaba Cloud accounts in a region.
   * 
   * @param request - ListCustomImageShareAccountsRequest
   * @returns ListCustomImageShareAccountsResponse
   */
  async listCustomImageShareAccounts(request: ListCustomImageShareAccountsRequest): Promise<ListCustomImageShareAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomImageShareAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the information about custom images in a region.
   * 
   * @param request - ListCustomImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomImagesResponse
   */
  async listCustomImagesWithOptions(request: ListCustomImagesRequest, runtime: $dara.RuntimeOptions): Promise<ListCustomImagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dataSnapshotId)) {
      query["DataSnapshotId"] = request.dataSnapshotId;
    }

    if (!$dara.isNull(request.imageIds)) {
      query["ImageIds"] = request.imageIds;
    }

    if (!$dara.isNull(request.imageNames)) {
      query["ImageNames"] = request.imageNames;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.share)) {
      query["Share"] = request.share;
    }

    if (!$dara.isNull(request.systemSnapshotId)) {
      query["SystemSnapshotId"] = request.systemSnapshotId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomImages",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCustomImagesResponse>(await this.callApi(params, req, runtime), new ListCustomImagesResponse({}));
    } else {
      return $dara.cast<ListCustomImagesResponse>(await this.execute(params, req, runtime), new ListCustomImagesResponse({}));
    }

  }

  /**
   * Queries the information about custom images in a region.
   * 
   * @param request - ListCustomImagesRequest
   * @returns ListCustomImagesResponse
   */
  async listCustomImages(request: ListCustomImagesRequest): Promise<ListCustomImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomImagesWithOptions(request, runtime);
  }

  /**
   * Queries the information about disks in a region.
   * 
   * @remarks
   * The `InstanceId`, `DiskIds`, and `ResourceGroupId` parameters are optional. However, you can specify them as filter conditions and combine them with the logical AND operator to filter disks that you want to query.
   * 
   * @param request - ListDisksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDisksResponse
   */
  async listDisksWithOptions(request: ListDisksRequest, runtime: $dara.RuntimeOptions): Promise<ListDisksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskIds)) {
      query["DiskIds"] = request.diskIds;
    }

    if (!$dara.isNull(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDisks",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDisksResponse>(await this.callApi(params, req, runtime), new ListDisksResponse({}));
    } else {
      return $dara.cast<ListDisksResponse>(await this.execute(params, req, runtime), new ListDisksResponse({}));
    }

  }

  /**
   * Queries the information about disks in a region.
   * 
   * @remarks
   * The `InstanceId`, `DiskIds`, and `ResourceGroupId` parameters are optional. However, you can specify them as filter conditions and combine them with the logical AND operator to filter disks that you want to query.
   * 
   * @param request - ListDisksRequest
   * @returns ListDisksResponse
   */
  async listDisks(request: ListDisksRequest): Promise<ListDisksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDisksWithOptions(request, runtime);
  }

  /**
   * Queries the firewall rules of a simple application server.
   * 
   * @remarks
   * You can call the ListFirewallRules operation to query the firewall rule details of a simple application server, including the port range, firewall rule ID, and transport layer protocol.
   * 
   * @param request - ListFirewallRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFirewallRulesResponse
   */
  async listFirewallRulesWithOptions(request: ListFirewallRulesRequest, runtime: $dara.RuntimeOptions): Promise<ListFirewallRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firewallRuleId)) {
      query["FirewallRuleId"] = request.firewallRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFirewallRules",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFirewallRulesResponse>(await this.callApi(params, req, runtime), new ListFirewallRulesResponse({}));
    } else {
      return $dara.cast<ListFirewallRulesResponse>(await this.execute(params, req, runtime), new ListFirewallRulesResponse({}));
    }

  }

  /**
   * Queries the firewall rules of a simple application server.
   * 
   * @remarks
   * You can call the ListFirewallRules operation to query the firewall rule details of a simple application server, including the port range, firewall rule ID, and transport layer protocol.
   * 
   * @param request - ListFirewallRulesRequest
   * @returns ListFirewallRulesResponse
   */
  async listFirewallRules(request: ListFirewallRulesRequest): Promise<ListFirewallRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFirewallRulesWithOptions(request, runtime);
  }

  /**
   * Queries the information about images in a region.
   * 
   * @remarks
   * You can query details about one or more images in a specified region, including the IDs, names, and types of the images.
   * 
   * @param request - ListImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImagesResponse
   */
  async listImagesWithOptions(request: ListImagesRequest, runtime: $dara.RuntimeOptions): Promise<ListImagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageIds)) {
      query["ImageIds"] = request.imageIds;
    }

    if (!$dara.isNull(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImages",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListImagesResponse>(await this.callApi(params, req, runtime), new ListImagesResponse({}));
    } else {
      return $dara.cast<ListImagesResponse>(await this.execute(params, req, runtime), new ListImagesResponse({}));
    }

  }

  /**
   * Queries the information about images in a region.
   * 
   * @remarks
   * You can query details about one or more images in a specified region, including the IDs, names, and types of the images.
   * 
   * @param request - ListImagesRequest
   * @returns ListImagesResponse
   */
  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  /**
   * Queries the plans to which you can upgrade your simple application server.
   * 
   * @remarks
   * If the plan of your simple application server does not meet your business requirements, you can call the ListInstancePlansModification operation to obtain a list of plans that can be upgraded for your simple application server. Then, you can call the [UpgradeInstance](https://help.aliyun.com/document_detail/190445.html) operation to upgrade the plan.
   * >  We recommend that you create snapshots for the disks of your simple application server to back up data before you upgrade the plan. For more information, see [CreateSnapshot](https://help.aliyun.com/document_detail/190452.html).
   * For the precautions about plan upgrade, see [Upgrade a simple application server](https://help.aliyun.com/document_detail/61433.html).
   * 
   * @param request - ListInstancePlansModificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancePlansModificationResponse
   */
  async listInstancePlansModificationWithOptions(request: ListInstancePlansModificationRequest, runtime: $dara.RuntimeOptions): Promise<ListInstancePlansModificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstancePlansModification",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstancePlansModificationResponse>(await this.callApi(params, req, runtime), new ListInstancePlansModificationResponse({}));
    } else {
      return $dara.cast<ListInstancePlansModificationResponse>(await this.execute(params, req, runtime), new ListInstancePlansModificationResponse({}));
    }

  }

  /**
   * Queries the plans to which you can upgrade your simple application server.
   * 
   * @remarks
   * If the plan of your simple application server does not meet your business requirements, you can call the ListInstancePlansModification operation to obtain a list of plans that can be upgraded for your simple application server. Then, you can call the [UpgradeInstance](https://help.aliyun.com/document_detail/190445.html) operation to upgrade the plan.
   * >  We recommend that you create snapshots for the disks of your simple application server to back up data before you upgrade the plan. For more information, see [CreateSnapshot](https://help.aliyun.com/document_detail/190452.html).
   * For the precautions about plan upgrade, see [Upgrade a simple application server](https://help.aliyun.com/document_detail/61433.html).
   * 
   * @param request - ListInstancePlansModificationRequest
   * @returns ListInstancePlansModificationResponse
   */
  async listInstancePlansModification(request: ListInstancePlansModificationRequest): Promise<ListInstancePlansModificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancePlansModificationWithOptions(request, runtime);
  }

  /**
   * Queries the status of simple application servers.
   * 
   * @param request - ListInstanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceStatusResponse
   */
  async listInstanceStatusWithOptions(request: ListInstanceStatusRequest, runtime: $dara.RuntimeOptions): Promise<ListInstanceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceStatus",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstanceStatusResponse>(await this.callApi(params, req, runtime), new ListInstanceStatusResponse({}));
    } else {
      return $dara.cast<ListInstanceStatusResponse>(await this.execute(params, req, runtime), new ListInstanceStatusResponse({}));
    }

  }

  /**
   * Queries the status of simple application servers.
   * 
   * @param request - ListInstanceStatusRequest
   * @returns ListInstanceStatusResponse
   */
  async listInstanceStatus(request: ListInstanceStatusRequest): Promise<ListInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about simple application servers in a region.
   * 
   * @remarks
   * You can call this operation to query the details of simple application servers in a specified region, including the names, public IP addresses, internal IP addresses, creation time, and expiration time of the servers.
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<ListInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.publicIpAddresses)) {
      query["PublicIpAddresses"] = request.publicIpAddresses;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
    } else {
      return $dara.cast<ListInstancesResponse>(await this.execute(params, req, runtime), new ListInstancesResponse({}));
    }

  }

  /**
   * Queries the information about simple application servers in a region.
   * 
   * @remarks
   * You can call this operation to query the details of simple application servers in a specified region, including the names, public IP addresses, internal IP addresses, creation time, and expiration time of the servers.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the details about data transfer plans of simple application servers.
   * 
   * @remarks
   * You can query the details of data transfer plans of simple application servers, including the total quota, used quota, unused quota, and excess data transfers in the current month.
   * Simple Application Server provides data transfer plans that can be used to offset data transfer fees. You are charged for excess data transfers. Take note of the following items:
   * *   Only outbound data transfers of simple application servers over the Internet are calculated. Outbound data transfers include the data transfer quota and the excess data transfers beyond the quota. Inbound data transfers of simple application servers over the Internet are not calculated.
   * *   Outbound data transfers from simple application servers to other Alibaba Cloud services over the Internet first consume data transfer quotas. If the quotas are exhausted, you are charged for excess data transfers.
   * *   You are not charged for data transfers between simple application servers within the same virtual private cloud (VPC).
   * For more information, see [Quotas and billing of data transfers](https://help.aliyun.com/document_detail/86281.html).
   * 
   * @param request - ListInstancesTrafficPackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesTrafficPackagesResponse
   */
  async listInstancesTrafficPackagesWithOptions(request: ListInstancesTrafficPackagesRequest, runtime: $dara.RuntimeOptions): Promise<ListInstancesTrafficPackagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstancesTrafficPackages",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstancesTrafficPackagesResponse>(await this.callApi(params, req, runtime), new ListInstancesTrafficPackagesResponse({}));
    } else {
      return $dara.cast<ListInstancesTrafficPackagesResponse>(await this.execute(params, req, runtime), new ListInstancesTrafficPackagesResponse({}));
    }

  }

  /**
   * Queries the details about data transfer plans of simple application servers.
   * 
   * @remarks
   * You can query the details of data transfer plans of simple application servers, including the total quota, used quota, unused quota, and excess data transfers in the current month.
   * Simple Application Server provides data transfer plans that can be used to offset data transfer fees. You are charged for excess data transfers. Take note of the following items:
   * *   Only outbound data transfers of simple application servers over the Internet are calculated. Outbound data transfers include the data transfer quota and the excess data transfers beyond the quota. Inbound data transfers of simple application servers over the Internet are not calculated.
   * *   Outbound data transfers from simple application servers to other Alibaba Cloud services over the Internet first consume data transfer quotas. If the quotas are exhausted, you are charged for excess data transfers.
   * *   You are not charged for data transfers between simple application servers within the same virtual private cloud (VPC).
   * For more information, see [Quotas and billing of data transfers](https://help.aliyun.com/document_detail/86281.html).
   * 
   * @param request - ListInstancesTrafficPackagesRequest
   * @returns ListInstancesTrafficPackagesResponse
   */
  async listInstancesTrafficPackages(request: ListInstancesTrafficPackagesRequest): Promise<ListInstancesTrafficPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesTrafficPackagesWithOptions(request, runtime);
  }

  /**
   * Queries the AccessKey pairs that are bound to simple application servers in a specific region.
   * 
   * @param request - ListKeyPairsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKeyPairsResponse
   */
  async listKeyPairsWithOptions(request: ListKeyPairsRequest, runtime: $dara.RuntimeOptions): Promise<ListKeyPairsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKeyPairs",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListKeyPairsResponse>(await this.callApi(params, req, runtime), new ListKeyPairsResponse({}));
    } else {
      return $dara.cast<ListKeyPairsResponse>(await this.execute(params, req, runtime), new ListKeyPairsResponse({}));
    }

  }

  /**
   * Queries the AccessKey pairs that are bound to simple application servers in a specific region.
   * 
   * @param request - ListKeyPairsRequest
   * @returns ListKeyPairsResponse
   */
  async listKeyPairs(request: ListKeyPairsRequest): Promise<ListKeyPairsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKeyPairsWithOptions(request, runtime);
  }

  /**
   * Queries all plans provided by Simple Application Server in a region.
   * 
   * @remarks
   * You can query the details of all plans provided by Simple Application Server in a region, including the IDs, prices, disk sizes, and disk categories of the plans.
   * 
   * @param request - ListPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPlansResponse
   */
  async listPlansWithOptions(request: ListPlansRequest, runtime: $dara.RuntimeOptions): Promise<ListPlansResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPlans",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPlansResponse>(await this.callApi(params, req, runtime), new ListPlansResponse({}));
    } else {
      return $dara.cast<ListPlansResponse>(await this.execute(params, req, runtime), new ListPlansResponse({}));
    }

  }

  /**
   * Queries all plans provided by Simple Application Server in a region.
   * 
   * @remarks
   * You can query the details of all plans provided by Simple Application Server in a region, including the IDs, prices, disk sizes, and disk categories of the plans.
   * 
   * @param request - ListPlansRequest
   * @returns ListPlansResponse
   */
  async listPlans(request: ListPlansRequest): Promise<ListPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPlansWithOptions(request, runtime);
  }

  /**
   * Queries all regions in which Simple Application Server is supported.
   * 
   * @remarks
   * The query results include all the Alibaba Cloud regions where Simple Application Server is supported on the international site (alibabacloud.com) and the China site (aliyun.com).
   * 
   * @param request - ListRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(request: ListRegionsRequest, runtime: $dara.RuntimeOptions): Promise<ListRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
    } else {
      return $dara.cast<ListRegionsResponse>(await this.execute(params, req, runtime), new ListRegionsResponse({}));
    }

  }

  /**
   * Queries all regions in which Simple Application Server is supported.
   * 
   * @remarks
   * The query results include all the Alibaba Cloud regions where Simple Application Server is supported on the international site (alibabacloud.com) and the China site (aliyun.com).
   * 
   * @param request - ListRegionsRequest
   * @returns ListRegionsResponse
   */
  async listRegions(request: ListRegionsRequest): Promise<ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the information about snapshots that are created for a simple application server.
   * 
   * @remarks
   * The `InstanceId`, `DiskId`, `SnapshotIds`, and `ResourceGroupId` parameters are optional. However, you can specify them as filter conditions and combine them with the logical AND operator to filter snapshots that you want to query.
   * 
   * @param request - ListSnapshotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSnapshotsResponse
   */
  async listSnapshotsWithOptions(request: ListSnapshotsRequest, runtime: $dara.RuntimeOptions): Promise<ListSnapshotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.snapshotIds)) {
      query["SnapshotIds"] = request.snapshotIds;
    }

    if (!$dara.isNull(request.sourceDiskType)) {
      query["SourceDiskType"] = request.sourceDiskType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSnapshots",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListSnapshotsResponse>(await this.callApi(params, req, runtime), new ListSnapshotsResponse({}));
    } else {
      return $dara.cast<ListSnapshotsResponse>(await this.execute(params, req, runtime), new ListSnapshotsResponse({}));
    }

  }

  /**
   * Queries the information about snapshots that are created for a simple application server.
   * 
   * @remarks
   * The `InstanceId`, `DiskId`, `SnapshotIds`, and `ResourceGroupId` parameters are optional. However, you can specify them as filter conditions and combine them with the logical AND operator to filter snapshots that you want to query.
   * 
   * @param request - ListSnapshotsRequest
   * @returns ListSnapshotsResponse
   */
  async listSnapshots(request: ListSnapshotsRequest): Promise<ListSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSnapshotsWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to simple resources, such as instances, snapshots, disks, images, commands, and firewall rules.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * Queries the tags that are added to simple resources, such as instances, snapshots, disks, images, commands, and firewall rules.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Logs on to a simple application server on Workbench.
   * 
   * @remarks
   * After you create a simple application server, you can log on to the simple application server to build environments and applications on the server.
   * 
   * @param request - LoginInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoginInstanceResponse
   */
  async loginInstanceWithOptions(request: LoginInstanceRequest, runtime: $dara.RuntimeOptions): Promise<LoginInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LoginInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<LoginInstanceResponse>(await this.callApi(params, req, runtime), new LoginInstanceResponse({}));
    } else {
      return $dara.cast<LoginInstanceResponse>(await this.execute(params, req, runtime), new LoginInstanceResponse({}));
    }

  }

  /**
   * Logs on to a simple application server on Workbench.
   * 
   * @remarks
   * After you create a simple application server, you can log on to the simple application server to build environments and applications on the server.
   * 
   * @param request - LoginInstanceRequest
   * @returns LoginInstanceResponse
   */
  async loginInstance(request: LoginInstanceRequest): Promise<LoginInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.loginInstanceWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a Simple Database Service instance.
   * 
   * @remarks
   * You can call this operation to modify the description of a Simple Database Service instance.
   * ### QPS limit
   * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/347607.html).
   * 
   * @param request - ModifyDatabaseInstanceDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDatabaseInstanceDescriptionResponse
   */
  async modifyDatabaseInstanceDescriptionWithOptions(request: ModifyDatabaseInstanceDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDatabaseInstanceDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceDescription)) {
      query["DatabaseInstanceDescription"] = request.databaseInstanceDescription;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDatabaseInstanceDescription",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDatabaseInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyDatabaseInstanceDescriptionResponse({}));
    } else {
      return $dara.cast<ModifyDatabaseInstanceDescriptionResponse>(await this.execute(params, req, runtime), new ModifyDatabaseInstanceDescriptionResponse({}));
    }

  }

  /**
   * Modifies the description of a Simple Database Service instance.
   * 
   * @remarks
   * You can call this operation to modify the description of a Simple Database Service instance.
   * ### QPS limit
   * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/347607.html).
   * 
   * @param request - ModifyDatabaseInstanceDescriptionRequest
   * @returns ModifyDatabaseInstanceDescriptionResponse
   */
  async modifyDatabaseInstanceDescription(request: ModifyDatabaseInstanceDescriptionRequest): Promise<ModifyDatabaseInstanceDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDatabaseInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * After you create a Simple Database Service instance, you can view the parameters of the instance or modify the parameters of the instance based on your business requirements.
   * 
   * @remarks
   * After you create a Simple Database Service instance, you can view the parameters of the instance or modify the parameters of the instance based on your business requirements.
   * ### QPS limit
   * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/347607.html).
   * 
   * @param request - ModifyDatabaseInstanceParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDatabaseInstanceParameterResponse
   */
  async modifyDatabaseInstanceParameterWithOptions(request: ModifyDatabaseInstanceParameterRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDatabaseInstanceParameterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.forceRestart)) {
      query["ForceRestart"] = request.forceRestart;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDatabaseInstanceParameter",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyDatabaseInstanceParameterResponse>(await this.callApi(params, req, runtime), new ModifyDatabaseInstanceParameterResponse({}));
    } else {
      return $dara.cast<ModifyDatabaseInstanceParameterResponse>(await this.execute(params, req, runtime), new ModifyDatabaseInstanceParameterResponse({}));
    }

  }

  /**
   * After you create a Simple Database Service instance, you can view the parameters of the instance or modify the parameters of the instance based on your business requirements.
   * 
   * @remarks
   * After you create a Simple Database Service instance, you can view the parameters of the instance or modify the parameters of the instance based on your business requirements.
   * ### QPS limit
   * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/347607.html).
   * 
   * @param request - ModifyDatabaseInstanceParameterRequest
   * @returns ModifyDatabaseInstanceParameterResponse
   */
  async modifyDatabaseInstanceParameter(request: ModifyDatabaseInstanceParameterRequest): Promise<ModifyDatabaseInstanceParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDatabaseInstanceParameterWithOptions(request, runtime);
  }

  /**
   * Modifies the firewall rule of a simple application server.
   * 
   * @param request - ModifyFirewallRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFirewallRuleResponse
   */
  async modifyFirewallRuleWithOptions(request: ModifyFirewallRuleRequest, runtime: $dara.RuntimeOptions): Promise<ModifyFirewallRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleProtocol)) {
      query["RuleProtocol"] = request.ruleProtocol;
    }

    if (!$dara.isNull(request.sourceCidrIp)) {
      query["SourceCidrIp"] = request.sourceCidrIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFirewallRule",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyFirewallRuleResponse>(await this.callApi(params, req, runtime), new ModifyFirewallRuleResponse({}));
    } else {
      return $dara.cast<ModifyFirewallRuleResponse>(await this.execute(params, req, runtime), new ModifyFirewallRuleResponse({}));
    }

  }

  /**
   * Modifies the firewall rule of a simple application server.
   * 
   * @param request - ModifyFirewallRuleRequest
   * @returns ModifyFirewallRuleResponse
   */
  async modifyFirewallRule(request: ModifyFirewallRuleRequest): Promise<ModifyFirewallRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFirewallRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the firewall rule in a firewall template. You can apply the new firewall rule to simple application servers.
   * 
   * @remarks
   * Modifying a firewall template does not affect the firewall rules that have been applied to simple application servers.
   * 
   * @param request - ModifyFirewallTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFirewallTemplateResponse
   */
  async modifyFirewallTemplateWithOptions(request: ModifyFirewallTemplateRequest, runtime: $dara.RuntimeOptions): Promise<ModifyFirewallTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.firewallTemplateId)) {
      query["FirewallTemplateId"] = request.firewallTemplateId;
    }

    if (!$dara.isNull(request.firewallTemplateRule)) {
      query["FirewallTemplateRule"] = request.firewallTemplateRule;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFirewallTemplate",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyFirewallTemplateResponse>(await this.callApi(params, req, runtime), new ModifyFirewallTemplateResponse({}));
    } else {
      return $dara.cast<ModifyFirewallTemplateResponse>(await this.execute(params, req, runtime), new ModifyFirewallTemplateResponse({}));
    }

  }

  /**
   * Modifies the firewall rule in a firewall template. You can apply the new firewall rule to simple application servers.
   * 
   * @remarks
   * Modifying a firewall template does not affect the firewall rules that have been applied to simple application servers.
   * 
   * @param request - ModifyFirewallTemplateRequest
   * @returns ModifyFirewallTemplateResponse
   */
  async modifyFirewallTemplate(request: ModifyFirewallTemplateRequest): Promise<ModifyFirewallTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFirewallTemplateWithOptions(request, runtime);
  }

  /**
   * Shares or unshares a custom image to Elastic Compute Service (ECS).
   * 
   * @remarks
   * Custom images can be shared to ECS. If the configurations of your simple application server cannot meet your business requirements, or you want to deploy your business on ECS instances, you can share your custom image to ECS to transfer your business from Simple Application Server to ECS.
   * >  The region in which the shared image resides in ECS is the same as the region in which the custom image resides in Simple Application Server.
   * You can unshare a custom image based on your business requirements or when you want to delete the custom image. After you unshare a custom image, take note of the following items:
   * *   You cannot query or use the custom image by using the ECS console or API.
   * *   You cannot re-initialize the disks of the ECS instances that were created based on the shared image.
   * 
   * @param request - ModifyImageShareStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyImageShareStatusResponse
   */
  async modifyImageShareStatusWithOptions(request: ModifyImageShareStatusRequest, runtime: $dara.RuntimeOptions): Promise<ModifyImageShareStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyImageShareStatus",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyImageShareStatusResponse>(await this.callApi(params, req, runtime), new ModifyImageShareStatusResponse({}));
    } else {
      return $dara.cast<ModifyImageShareStatusResponse>(await this.execute(params, req, runtime), new ModifyImageShareStatusResponse({}));
    }

  }

  /**
   * Shares or unshares a custom image to Elastic Compute Service (ECS).
   * 
   * @remarks
   * Custom images can be shared to ECS. If the configurations of your simple application server cannot meet your business requirements, or you want to deploy your business on ECS instances, you can share your custom image to ECS to transfer your business from Simple Application Server to ECS.
   * >  The region in which the shared image resides in ECS is the same as the region in which the custom image resides in Simple Application Server.
   * You can unshare a custom image based on your business requirements or when you want to delete the custom image. After you unshare a custom image, take note of the following items:
   * *   You cannot query or use the custom image by using the ECS console or API.
   * *   You cannot re-initialize the disks of the ECS instances that were created based on the shared image.
   * 
   * @param request - ModifyImageShareStatusRequest
   * @returns ModifyImageShareStatusResponse
   */
  async modifyImageShareStatus(request: ModifyImageShareStatusRequest): Promise<ModifyImageShareStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyImageShareStatusWithOptions(request, runtime);
  }

  /**
   * Changes the VNC password of a simple application server.
   * 
   * @param request - ModifyInstanceVncPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceVncPasswordResponse
   */
  async modifyInstanceVncPasswordWithOptions(request: ModifyInstanceVncPasswordRequest, runtime: $dara.RuntimeOptions): Promise<ModifyInstanceVncPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vncPassword)) {
      query["VncPassword"] = request.vncPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceVncPassword",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ModifyInstanceVncPasswordResponse>(await this.callApi(params, req, runtime), new ModifyInstanceVncPasswordResponse({}));
    } else {
      return $dara.cast<ModifyInstanceVncPasswordResponse>(await this.execute(params, req, runtime), new ModifyInstanceVncPasswordResponse({}));
    }

  }

  /**
   * Changes the VNC password of a simple application server.
   * 
   * @param request - ModifyInstanceVncPasswordRequest
   * @returns ModifyInstanceVncPasswordResponse
   */
  async modifyInstanceVncPassword(request: ModifyInstanceVncPasswordRequest): Promise<ModifyInstanceVncPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceVncPasswordWithOptions(request, runtime);
  }

  /**
   * Restarts a simple application server.
   * 
   * @remarks
   *   Only simple application servers that are in the Running state can be restarted.
   * *   After you restart a simple application server, it enters the Starting state.
   * 
   * @param request - RebootInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootInstanceResponse
   */
  async rebootInstanceWithOptions(request: RebootInstanceRequest, runtime: $dara.RuntimeOptions): Promise<RebootInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RebootInstanceResponse>(await this.callApi(params, req, runtime), new RebootInstanceResponse({}));
    } else {
      return $dara.cast<RebootInstanceResponse>(await this.execute(params, req, runtime), new RebootInstanceResponse({}));
    }

  }

  /**
   * Restarts a simple application server.
   * 
   * @remarks
   *   Only simple application servers that are in the Running state can be restarted.
   * *   After you restart a simple application server, it enters the Starting state.
   * 
   * @param request - RebootInstanceRequest
   * @returns RebootInstanceResponse
   */
  async rebootInstance(request: RebootInstanceRequest): Promise<RebootInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootInstanceWithOptions(request, runtime);
  }

  /**
   * Restarts simple application servers.
   * 
   * @param request - RebootInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootInstancesResponse
   */
  async rebootInstancesWithOptions(request: RebootInstancesRequest, runtime: $dara.RuntimeOptions): Promise<RebootInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.forceReboot)) {
      query["ForceReboot"] = request.forceReboot;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RebootInstancesResponse>(await this.callApi(params, req, runtime), new RebootInstancesResponse({}));
    } else {
      return $dara.cast<RebootInstancesResponse>(await this.execute(params, req, runtime), new RebootInstancesResponse({}));
    }

  }

  /**
   * Restarts simple application servers.
   * 
   * @param request - RebootInstancesRequest
   * @returns RebootInstancesResponse
   */
  async rebootInstances(request: RebootInstancesRequest): Promise<RebootInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootInstancesWithOptions(request, runtime);
  }

  /**
   * If you no longer need to use a public endpoint to access a Simple Database Service instance, you can release the public endpoint.
   * 
   * @remarks
   * If you no longer need to use a public endpoint to access a Simple Database Service instance, you can release the public endpoint.
   * ### QPS limit
   * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/347607.html).
   * 
   * @param request - ReleasePublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleasePublicConnectionResponse
   */
  async releasePublicConnectionWithOptions(request: ReleasePublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<ReleasePublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleasePublicConnection",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReleasePublicConnectionResponse>(await this.callApi(params, req, runtime), new ReleasePublicConnectionResponse({}));
    } else {
      return $dara.cast<ReleasePublicConnectionResponse>(await this.execute(params, req, runtime), new ReleasePublicConnectionResponse({}));
    }

  }

  /**
   * If you no longer need to use a public endpoint to access a Simple Database Service instance, you can release the public endpoint.
   * 
   * @remarks
   * If you no longer need to use a public endpoint to access a Simple Database Service instance, you can release the public endpoint.
   * ### QPS limit
   * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/347607.html).
   * 
   * @param request - ReleasePublicConnectionRequest
   * @returns ReleasePublicConnectionResponse
   */
  async releasePublicConnection(request: ReleasePublicConnectionRequest): Promise<ReleasePublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releasePublicConnectionWithOptions(request, runtime);
  }

  /**
   * Unshares a custom image that is shared across Alibaba Cloud accounts.
   * 
   * @param request - RemoveCustomImageShareAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveCustomImageShareAccountResponse
   */
  async removeCustomImageShareAccountWithOptions(request: RemoveCustomImageShareAccountRequest, runtime: $dara.RuntimeOptions): Promise<RemoveCustomImageShareAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.account)) {
      query["Account"] = request.account;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveCustomImageShareAccount",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveCustomImageShareAccountResponse>(await this.callApi(params, req, runtime), new RemoveCustomImageShareAccountResponse({}));
    } else {
      return $dara.cast<RemoveCustomImageShareAccountResponse>(await this.execute(params, req, runtime), new RemoveCustomImageShareAccountResponse({}));
    }

  }

  /**
   * Unshares a custom image that is shared across Alibaba Cloud accounts.
   * 
   * @param request - RemoveCustomImageShareAccountRequest
   * @returns RemoveCustomImageShareAccountResponse
   */
  async removeCustomImageShareAccount(request: RemoveCustomImageShareAccountRequest): Promise<RemoveCustomImageShareAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeCustomImageShareAccountWithOptions(request, runtime);
  }

  /**
   * Renews a simple application server.
   * 
   * @remarks
   *   Before you call this operation, we recommend that you understand the billing of Simple Application Server. For more information, see [Billable items](https://help.aliyun.com/document_detail/58623.html).
   * *   Before you call this operation, make sure that the balance in your account is sufficient. If the balance in your account is insufficient, the renewal fails.
   * 
   * @param request - RenewInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewInstanceResponse
   */
  async renewInstanceWithOptions(request: RenewInstanceRequest, runtime: $dara.RuntimeOptions): Promise<RenewInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RenewInstanceResponse>(await this.callApi(params, req, runtime), new RenewInstanceResponse({}));
    } else {
      return $dara.cast<RenewInstanceResponse>(await this.execute(params, req, runtime), new RenewInstanceResponse({}));
    }

  }

  /**
   * Renews a simple application server.
   * 
   * @remarks
   *   Before you call this operation, we recommend that you understand the billing of Simple Application Server. For more information, see [Billable items](https://help.aliyun.com/document_detail/58623.html).
   * *   Before you call this operation, make sure that the balance in your account is sufficient. If the balance in your account is insufficient, the renewal fails.
   * 
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renewInstanceWithOptions(request, runtime);
  }

  /**
   * If the password of your Simple Database Service instance is not strong, you can call this operation to change the password of the administrator account of the instance. To ensure security of the instance, we recommend that you regularly change the password of the instance.
   * 
   * @remarks
   * If the password of your Simple Database Service instance is not strong, you can call this operation to change the password of the administrator account of the instance. To ensure security of the instance, we recommend that you regularly change the password of the instance.
   * ### QPS limit
   * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/347607.html).
   * 
   * @param request - ResetDatabaseAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetDatabaseAccountPasswordResponse
   */
  async resetDatabaseAccountPasswordWithOptions(request: ResetDatabaseAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<ResetDatabaseAccountPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetDatabaseAccountPassword",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResetDatabaseAccountPasswordResponse>(await this.callApi(params, req, runtime), new ResetDatabaseAccountPasswordResponse({}));
    } else {
      return $dara.cast<ResetDatabaseAccountPasswordResponse>(await this.execute(params, req, runtime), new ResetDatabaseAccountPasswordResponse({}));
    }

  }

  /**
   * If the password of your Simple Database Service instance is not strong, you can call this operation to change the password of the administrator account of the instance. To ensure security of the instance, we recommend that you regularly change the password of the instance.
   * 
   * @remarks
   * If the password of your Simple Database Service instance is not strong, you can call this operation to change the password of the administrator account of the instance. To ensure security of the instance, we recommend that you regularly change the password of the instance.
   * ### QPS limit
   * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/347607.html).
   * 
   * @param request - ResetDatabaseAccountPasswordRequest
   * @returns ResetDatabaseAccountPasswordResponse
   */
  async resetDatabaseAccountPassword(request: ResetDatabaseAccountPasswordRequest): Promise<ResetDatabaseAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetDatabaseAccountPasswordWithOptions(request, runtime);
  }

  /**
   * Rolls back a disk based on a snapshot.
   * 
   * @remarks
   *   You can call this operation only if the associated simple application server is in the Stopped state.
   * *   If you restore a disk from a snapshot, the incremental data after the snapshot is created is lost. We recommend that you back up the data before you perform this operation.
   * ### [](#)Precautions
   * Resetting the system or changing the image of a simple application server clears the disk data on the server. Snapshots created before the reset or change are retained but cannot be used to restore disks.
   * 
   * @param request - ResetDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetDiskResponse
   */
  async resetDiskWithOptions(request: ResetDiskRequest, runtime: $dara.RuntimeOptions): Promise<ResetDiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetDisk",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResetDiskResponse>(await this.callApi(params, req, runtime), new ResetDiskResponse({}));
    } else {
      return $dara.cast<ResetDiskResponse>(await this.execute(params, req, runtime), new ResetDiskResponse({}));
    }

  }

  /**
   * Rolls back a disk based on a snapshot.
   * 
   * @remarks
   *   You can call this operation only if the associated simple application server is in the Stopped state.
   * *   If you restore a disk from a snapshot, the incremental data after the snapshot is created is lost. We recommend that you back up the data before you perform this operation.
   * ### [](#)Precautions
   * Resetting the system or changing the image of a simple application server clears the disk data on the server. Snapshots created before the reset or change are retained but cannot be used to restore disks.
   * 
   * @param request - ResetDiskRequest
   * @returns ResetDiskResponse
   */
  async resetDisk(request: ResetDiskRequest): Promise<ResetDiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetDiskWithOptions(request, runtime);
  }

  /**
   * Resets a simple application server.
   * 
   * @remarks
   * You can reset a simple application server to re-install its applications or operating system and re-initialize the server. You can reset a simple application server by resetting the current system or changing the image.
   * *   Reset the current system: You can re-install the operating system without changing the image.
   * *   Change the image: You can select another Alibaba Cloud image or a custom image to re-install the operating system.
   * ### [](#)Precautions
   * *   Resetting the system or changing the image of a simple application server clears the disk data on the server. Back up the data as needed.
   * *   After you reset a simple application server, monitoring may fail. In this case, you can use one of the following methods to install the CloudMonitor agent on the server:
   *     *   Connect to the server: For more information, see [Manually install the CloudMonitor agent for C++ on an ECS instance](https://help.aliyun.com/document_detail/183482.html).
   *     *   Use Command Assistant: For more information, see [Use Command Assistant](https://help.aliyun.com/document_detail/438681.html). You can obtain the command that can be used to install CloudMonitor from the "Common commands" section of the [Use Command Assistant](https://help.aliyun.com/document_detail/438681.html) topic.
   * ### [](#)Limits
   * *   Snapshots that are created before the reset are retained, but the snapshots cannot be used to restore the disks of the server.
   * *   You cannot reset simple application servers that were created from custom images that contain data of data disks.
   * *   If you reset a simple application server by replacing the existing image with a custom image, the following limits apply:
   *     *   The custom image must reside in the same region as the current server.
   *     *   The custom image cannot be created based on the current server. If you want to restore the data on the server, you can use a snapshot of the server to restore disk data.
   *     *   If your simple application server resides in a region outside the Chinese mainland, you cannot switch the operating system of the server between Windows Server and Linux. You cannot use a Windows Server custom image to reset a Linux simple application server. Similarly, you cannot use a Linux custom image to reset a Windows Server simple application server. You can switch the operating systems of simple application servers only between Windows Server versions or between Linux distributions.
   *     *   The following limits apply to the disks attached to the simple application server:
   *         *   If the custom image contains a system disk and a data disk but only a system disk is attached to the simple application server, you cannot use the custom image to reset the simple application server.
   *         *   If the system disk size of the custom image is greater than the system disk size of the simple application server, you cannot directly use the custom image to reset the simple application server.
   *         *   Only if the system disk size of the simple application server is greater than or equal to the system disk size of the custom image, you can use the custom image to reset the simple application server. To increase the system disk size of your server, you can upgrade the server configuration. For more information, see Upgrade a simple application server.
   *         *   If the data disk size of the custom image is greater than the data disk size of the simple application server, you cannot use the custom image to reset the simple application server.
   * 
   * @param request - ResetSystemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetSystemResponse
   */
  async resetSystemWithOptions(request: ResetSystemRequest, runtime: $dara.RuntimeOptions): Promise<ResetSystemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.loginCredentials)) {
      query["LoginCredentials"] = request.loginCredentials;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetSystem",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResetSystemResponse>(await this.callApi(params, req, runtime), new ResetSystemResponse({}));
    } else {
      return $dara.cast<ResetSystemResponse>(await this.execute(params, req, runtime), new ResetSystemResponse({}));
    }

  }

  /**
   * Resets a simple application server.
   * 
   * @remarks
   * You can reset a simple application server to re-install its applications or operating system and re-initialize the server. You can reset a simple application server by resetting the current system or changing the image.
   * *   Reset the current system: You can re-install the operating system without changing the image.
   * *   Change the image: You can select another Alibaba Cloud image or a custom image to re-install the operating system.
   * ### [](#)Precautions
   * *   Resetting the system or changing the image of a simple application server clears the disk data on the server. Back up the data as needed.
   * *   After you reset a simple application server, monitoring may fail. In this case, you can use one of the following methods to install the CloudMonitor agent on the server:
   *     *   Connect to the server: For more information, see [Manually install the CloudMonitor agent for C++ on an ECS instance](https://help.aliyun.com/document_detail/183482.html).
   *     *   Use Command Assistant: For more information, see [Use Command Assistant](https://help.aliyun.com/document_detail/438681.html). You can obtain the command that can be used to install CloudMonitor from the "Common commands" section of the [Use Command Assistant](https://help.aliyun.com/document_detail/438681.html) topic.
   * ### [](#)Limits
   * *   Snapshots that are created before the reset are retained, but the snapshots cannot be used to restore the disks of the server.
   * *   You cannot reset simple application servers that were created from custom images that contain data of data disks.
   * *   If you reset a simple application server by replacing the existing image with a custom image, the following limits apply:
   *     *   The custom image must reside in the same region as the current server.
   *     *   The custom image cannot be created based on the current server. If you want to restore the data on the server, you can use a snapshot of the server to restore disk data.
   *     *   If your simple application server resides in a region outside the Chinese mainland, you cannot switch the operating system of the server between Windows Server and Linux. You cannot use a Windows Server custom image to reset a Linux simple application server. Similarly, you cannot use a Linux custom image to reset a Windows Server simple application server. You can switch the operating systems of simple application servers only between Windows Server versions or between Linux distributions.
   *     *   The following limits apply to the disks attached to the simple application server:
   *         *   If the custom image contains a system disk and a data disk but only a system disk is attached to the simple application server, you cannot use the custom image to reset the simple application server.
   *         *   If the system disk size of the custom image is greater than the system disk size of the simple application server, you cannot directly use the custom image to reset the simple application server.
   *         *   Only if the system disk size of the simple application server is greater than or equal to the system disk size of the custom image, you can use the custom image to reset the simple application server. To increase the system disk size of your server, you can upgrade the server configuration. For more information, see Upgrade a simple application server.
   *         *   If the data disk size of the custom image is greater than the data disk size of the simple application server, you cannot use the custom image to reset the simple application server.
   * 
   * @param request - ResetSystemRequest
   * @returns ResetSystemResponse
   */
  async resetSystem(request: ResetSystemRequest): Promise<ResetSystemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetSystemWithOptions(request, runtime);
  }

  /**
   * You can call this operation to restart a Simple Database Service instance that is in the Running state.
   * 
   * @remarks
   * You can call this operation to restart a Simple Database Service instance that is in the Running state.
   * ### QPS limit
   * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/347607.html).
   * 
   * @param request - RestartDatabaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDatabaseInstanceResponse
   */
  async restartDatabaseInstanceWithOptions(request: RestartDatabaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<RestartDatabaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartDatabaseInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RestartDatabaseInstanceResponse>(await this.callApi(params, req, runtime), new RestartDatabaseInstanceResponse({}));
    } else {
      return $dara.cast<RestartDatabaseInstanceResponse>(await this.execute(params, req, runtime), new RestartDatabaseInstanceResponse({}));
    }

  }

  /**
   * You can call this operation to restart a Simple Database Service instance that is in the Running state.
   * 
   * @remarks
   * You can call this operation to restart a Simple Database Service instance that is in the Running state.
   * ### QPS limit
   * You can call this API operation up to 10 times per minute per account. Requests that exceed this limit are dropped and you may experience service interruptions. We recommend that you take note of this limit when you call this operation. For more information, see [QPS limits](https://help.aliyun.com/document_detail/347607.html).
   * 
   * @param request - RestartDatabaseInstanceRequest
   * @returns RestartDatabaseInstanceResponse
   */
  async restartDatabaseInstance(request: RestartDatabaseInstanceRequest): Promise<RestartDatabaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartDatabaseInstanceWithOptions(request, runtime);
  }

  /**
   * Runs commands on a simple application server.
   * 
   * @remarks
   * Command Assistant is an automated O\\&M tool for Simple Application Server. You can maintain simple application servers by running shell, PowerShell, and batch commands in the Simple Application Server console without remotely logging on to the servers.
   * Before you use Command Assistant, take note of the following items:
   * *   The simple application server must be in the Running state.
   * *   The Cloud Assistant client is installed on the server. By default, the Cloud Assistant client is installed on simple application servers. If you have manually uninstalled the client, you must reinstall it. For more information, see [Install the Cloud Assistant Agent](https://help.aliyun.com/document_detail/64921.html).
   * 
   * @param tmpReq - RunCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCommandResponse
   */
  async runCommandWithOptions(tmpReq: RunCommandRequest, runtime: $dara.RuntimeOptions): Promise<RunCommandResponse> {
    tmpReq.validate();
    let request = new RunCommandShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!$dara.isNull(request.enableParameter)) {
      query["EnableParameter"] = request.enableParameter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.windowsPasswordName)) {
      query["WindowsPasswordName"] = request.windowsPasswordName;
    }

    if (!$dara.isNull(request.workingDir)) {
      query["WorkingDir"] = request.workingDir;
    }

    if (!$dara.isNull(request.workingUser)) {
      query["WorkingUser"] = request.workingUser;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCommand",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RunCommandResponse>(await this.callApi(params, req, runtime), new RunCommandResponse({}));
    } else {
      return $dara.cast<RunCommandResponse>(await this.execute(params, req, runtime), new RunCommandResponse({}));
    }

  }

  /**
   * Runs commands on a simple application server.
   * 
   * @remarks
   * Command Assistant is an automated O\\&M tool for Simple Application Server. You can maintain simple application servers by running shell, PowerShell, and batch commands in the Simple Application Server console without remotely logging on to the servers.
   * Before you use Command Assistant, take note of the following items:
   * *   The simple application server must be in the Running state.
   * *   The Cloud Assistant client is installed on the server. By default, the Cloud Assistant client is installed on simple application servers. If you have manually uninstalled the client, you must reinstall it. For more information, see [Install the Cloud Assistant Agent](https://help.aliyun.com/document_detail/64921.html).
   * 
   * @param request - RunCommandRequest
   * @returns RunCommandResponse
   */
  async runCommand(request: RunCommandRequest): Promise<RunCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  /**
   * Starts a Simple Database Service instance.
   * 
   * @remarks
   * You can call this operation to start a Simple Database Service instance that is in the Stopped state.
   * 
   * @param request - StartDatabaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDatabaseInstanceResponse
   */
  async startDatabaseInstanceWithOptions(request: StartDatabaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<StartDatabaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDatabaseInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartDatabaseInstanceResponse>(await this.callApi(params, req, runtime), new StartDatabaseInstanceResponse({}));
    } else {
      return $dara.cast<StartDatabaseInstanceResponse>(await this.execute(params, req, runtime), new StartDatabaseInstanceResponse({}));
    }

  }

  /**
   * Starts a Simple Database Service instance.
   * 
   * @remarks
   * You can call this operation to start a Simple Database Service instance that is in the Stopped state.
   * 
   * @param request - StartDatabaseInstanceRequest
   * @returns StartDatabaseInstanceResponse
   */
  async startDatabaseInstance(request: StartDatabaseInstanceRequest): Promise<StartDatabaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDatabaseInstanceWithOptions(request, runtime);
  }

  /**
   * Starts a simple application server.
   * 
   * @remarks
   * You can call this operation to start a simple application server that is in the Stopped state.
   * 
   * @param request - StartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceResponse
   */
  async startInstanceWithOptions(request: StartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<StartInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartInstanceResponse>(await this.callApi(params, req, runtime), new StartInstanceResponse({}));
    } else {
      return $dara.cast<StartInstanceResponse>(await this.execute(params, req, runtime), new StartInstanceResponse({}));
    }

  }

  /**
   * Starts a simple application server.
   * 
   * @remarks
   * You can call this operation to start a simple application server that is in the Stopped state.
   * 
   * @param request - StartInstanceRequest
   * @returns StartInstanceResponse
   */
  async startInstance(request: StartInstanceRequest): Promise<StartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

  /**
   * Starts simple application servers.
   * 
   * @param request - StartInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstancesResponse
   */
  async startInstancesWithOptions(request: StartInstancesRequest, runtime: $dara.RuntimeOptions): Promise<StartInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartInstancesResponse>(await this.callApi(params, req, runtime), new StartInstancesResponse({}));
    } else {
      return $dara.cast<StartInstancesResponse>(await this.execute(params, req, runtime), new StartInstancesResponse({}));
    }

  }

  /**
   * Starts simple application servers.
   * 
   * @param request - StartInstancesRequest
   * @returns StartInstancesResponse
   */
  async startInstances(request: StartInstancesRequest): Promise<StartInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstancesWithOptions(request, runtime);
  }

  /**
   * Creates a session for a simple application server.
   * 
   * @param request - StartTerminalSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTerminalSessionResponse
   */
  async startTerminalSessionWithOptions(request: StartTerminalSessionRequest, runtime: $dara.RuntimeOptions): Promise<StartTerminalSessionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartTerminalSession",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartTerminalSessionResponse>(await this.callApi(params, req, runtime), new StartTerminalSessionResponse({}));
    } else {
      return $dara.cast<StartTerminalSessionResponse>(await this.execute(params, req, runtime), new StartTerminalSessionResponse({}));
    }

  }

  /**
   * Creates a session for a simple application server.
   * 
   * @param request - StartTerminalSessionRequest
   * @returns StartTerminalSessionResponse
   */
  async startTerminalSession(request: StartTerminalSessionRequest): Promise<StartTerminalSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startTerminalSessionWithOptions(request, runtime);
  }

  /**
   * Stops a Simple Database Service instance.
   * 
   * @remarks
   * You can call this operation to stop a Simple Database Service instance that is in the Running state. After the instance is stopped, you cannot log on to or access the instance.
   * 
   * @param request - StopDatabaseInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDatabaseInstanceResponse
   */
  async stopDatabaseInstanceWithOptions(request: StopDatabaseInstanceRequest, runtime: $dara.RuntimeOptions): Promise<StopDatabaseInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.databaseInstanceId)) {
      query["DatabaseInstanceId"] = request.databaseInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDatabaseInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopDatabaseInstanceResponse>(await this.callApi(params, req, runtime), new StopDatabaseInstanceResponse({}));
    } else {
      return $dara.cast<StopDatabaseInstanceResponse>(await this.execute(params, req, runtime), new StopDatabaseInstanceResponse({}));
    }

  }

  /**
   * Stops a Simple Database Service instance.
   * 
   * @remarks
   * You can call this operation to stop a Simple Database Service instance that is in the Running state. After the instance is stopped, you cannot log on to or access the instance.
   * 
   * @param request - StopDatabaseInstanceRequest
   * @returns StopDatabaseInstanceResponse
   */
  async stopDatabaseInstance(request: StopDatabaseInstanceRequest): Promise<StopDatabaseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDatabaseInstanceWithOptions(request, runtime);
  }

  /**
   * Stops a simple application server.
   * 
   * @remarks
   * You can stop a simple application server that you do not use for the time being.
   * >  Stopping a simple application server may interrupt your business. We recommend that you perform this operation during off-peak hours.
   * 
   * @param request - StopInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(request: StopInstanceRequest, runtime: $dara.RuntimeOptions): Promise<StopInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopInstanceResponse>(await this.callApi(params, req, runtime), new StopInstanceResponse({}));
    } else {
      return $dara.cast<StopInstanceResponse>(await this.execute(params, req, runtime), new StopInstanceResponse({}));
    }

  }

  /**
   * Stops a simple application server.
   * 
   * @remarks
   * You can stop a simple application server that you do not use for the time being.
   * >  Stopping a simple application server may interrupt your business. We recommend that you perform this operation during off-peak hours.
   * 
   * @param request - StopInstanceRequest
   * @returns StopInstanceResponse
   */
  async stopInstance(request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  /**
   * Stops simple application servers.
   * 
   * @param request - StopInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstancesResponse
   */
  async stopInstancesWithOptions(request: StopInstancesRequest, runtime: $dara.RuntimeOptions): Promise<StopInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.forceStop)) {
      query["ForceStop"] = request.forceStop;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstances",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopInstancesResponse>(await this.callApi(params, req, runtime), new StopInstancesResponse({}));
    } else {
      return $dara.cast<StopInstancesResponse>(await this.execute(params, req, runtime), new StopInstancesResponse({}));
    }

  }

  /**
   * Stops simple application servers.
   * 
   * @param request - StopInstancesRequest
   * @returns StopInstancesResponse
   */
  async stopInstances(request: StopInstancesRequest): Promise<StopInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInstancesWithOptions(request, runtime);
  }

  /**
   * Adds tags to simple application servers, snapshots, custom images, commands, firewall rules, and disks to facilitate the viewing and management of the preceding resources.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * Adds tags to simple application servers, snapshots, custom images, commands, firewall rules, and disks to facilitate the viewing and management of the preceding resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Unbinds and deletes tags from specified lightweight resources, such as instances, snapshots, disks, images, commands, and firewall rules.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * Unbinds and deletes tags from specified lightweight resources, such as instances, snapshots, disks, images, commands, and firewall rules.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Modifys the parameter of a command.
   * 
   * @param request - UpdateCommandAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCommandAttributeResponse
   */
  async updateCommandAttributeWithOptions(request: UpdateCommandAttributeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateCommandAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commandId)) {
      query["CommandId"] = request.commandId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.workingDir)) {
      query["WorkingDir"] = request.workingDir;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCommandAttribute",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateCommandAttributeResponse>(await this.callApi(params, req, runtime), new UpdateCommandAttributeResponse({}));
    } else {
      return $dara.cast<UpdateCommandAttributeResponse>(await this.execute(params, req, runtime), new UpdateCommandAttributeResponse({}));
    }

  }

  /**
   * Modifys the parameter of a command.
   * 
   * @param request - UpdateCommandAttributeRequest
   * @returns UpdateCommandAttributeResponse
   */
  async updateCommandAttribute(request: UpdateCommandAttributeRequest): Promise<UpdateCommandAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCommandAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the remarks for the data disk that is attached to a simple application server.
   * 
   * @param request - UpdateDiskAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDiskAttributeResponse
   */
  async updateDiskAttributeWithOptions(request: UpdateDiskAttributeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateDiskAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDiskAttribute",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDiskAttributeResponse>(await this.callApi(params, req, runtime), new UpdateDiskAttributeResponse({}));
    } else {
      return $dara.cast<UpdateDiskAttributeResponse>(await this.execute(params, req, runtime), new UpdateDiskAttributeResponse({}));
    }

  }

  /**
   * Modifies the remarks for the data disk that is attached to a simple application server.
   * 
   * @param request - UpdateDiskAttributeRequest
   * @returns UpdateDiskAttributeResponse
   */
  async updateDiskAttribute(request: UpdateDiskAttributeRequest): Promise<UpdateDiskAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDiskAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the information of a simple application server, including the server name and the password that you use to log on to the server.
   * 
   * @remarks
   * ## [](#)Usage notes
   * After you change the password of a simple application server, you must restart the server by calling the [RebootInstance](https://help.aliyun.com/document_detail/190443.html) operation for the new password to take effect.
   * 
   * @param request - UpdateInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceAttributeResponse
   */
  async updateInstanceAttributeWithOptions(request: UpdateInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceAttribute",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateInstanceAttributeResponse>(await this.callApi(params, req, runtime), new UpdateInstanceAttributeResponse({}));
    } else {
      return $dara.cast<UpdateInstanceAttributeResponse>(await this.execute(params, req, runtime), new UpdateInstanceAttributeResponse({}));
    }

  }

  /**
   * Modifies the information of a simple application server, including the server name and the password that you use to log on to the server.
   * 
   * @remarks
   * ## [](#)Usage notes
   * After you change the password of a simple application server, you must restart the server by calling the [RebootInstance](https://help.aliyun.com/document_detail/190443.html) operation for the new password to take effect.
   * 
   * @param request - UpdateInstanceAttributeRequest
   * @returns UpdateInstanceAttributeResponse
   */
  async updateInstanceAttribute(request: UpdateInstanceAttributeRequest): Promise<UpdateInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the remarks of a snapshot of a simple application server.
   * 
   * @param request - UpdateSnapshotAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSnapshotAttributeResponse
   */
  async updateSnapshotAttributeWithOptions(request: UpdateSnapshotAttributeRequest, runtime: $dara.RuntimeOptions): Promise<UpdateSnapshotAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSnapshotAttribute",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateSnapshotAttributeResponse>(await this.callApi(params, req, runtime), new UpdateSnapshotAttributeResponse({}));
    } else {
      return $dara.cast<UpdateSnapshotAttributeResponse>(await this.execute(params, req, runtime), new UpdateSnapshotAttributeResponse({}));
    }

  }

  /**
   * Modifies the remarks of a snapshot of a simple application server.
   * 
   * @param request - UpdateSnapshotAttributeRequest
   * @returns UpdateSnapshotAttributeResponse
   */
  async updateSnapshotAttribute(request: UpdateSnapshotAttributeRequest): Promise<UpdateSnapshotAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSnapshotAttributeWithOptions(request, runtime);
  }

  /**
   * Upgrades the plan for a simple application server.
   * 
   * @remarks
   *   The plan of a simple application server can only be upgraded. For more information about plans, see [Billable items](https://help.aliyun.com/document_detail/58623.html).
   * *   Before you call this operation, make sure that the balance in your account is sufficient. If the balance in your account is insufficient, the upgrade fails.
   * 
   * @param request - UpgradeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeInstanceResponse
   */
  async upgradeInstanceWithOptions(request: UpgradeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<UpgradeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.planId)) {
      query["PlanId"] = request.planId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeInstance",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpgradeInstanceResponse>(await this.callApi(params, req, runtime), new UpgradeInstanceResponse({}));
    } else {
      return $dara.cast<UpgradeInstanceResponse>(await this.execute(params, req, runtime), new UpgradeInstanceResponse({}));
    }

  }

  /**
   * Upgrades the plan for a simple application server.
   * 
   * @remarks
   *   The plan of a simple application server can only be upgraded. For more information about plans, see [Billable items](https://help.aliyun.com/document_detail/58623.html).
   * *   Before you call this operation, make sure that the balance in your account is sufficient. If the balance in your account is insufficient, the upgrade fails.
   * 
   * @param request - UpgradeInstanceRequest
   * @returns UpgradeInstanceResponse
   */
  async upgradeInstance(request: UpgradeInstanceRequest): Promise<UpgradeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeInstanceWithOptions(request, runtime);
  }

  /**
   * Imports a key pair for a simple application server.
   * 
   * @param request - UploadInstanceKeyPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadInstanceKeyPairResponse
   */
  async uploadInstanceKeyPairWithOptions(request: UploadInstanceKeyPairRequest, runtime: $dara.RuntimeOptions): Promise<UploadInstanceKeyPairResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.publicKey)) {
      query["PublicKey"] = request.publicKey;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadInstanceKeyPair",
      version: "2020-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UploadInstanceKeyPairResponse>(await this.callApi(params, req, runtime), new UploadInstanceKeyPairResponse({}));
    } else {
      return $dara.cast<UploadInstanceKeyPairResponse>(await this.execute(params, req, runtime), new UploadInstanceKeyPairResponse({}));
    }

  }

  /**
   * Imports a key pair for a simple application server.
   * 
   * @param request - UploadInstanceKeyPairRequest
   * @returns UploadInstanceKeyPairResponse
   */
  async uploadInstanceKeyPair(request: UploadInstanceKeyPairRequest): Promise<UploadInstanceKeyPairResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadInstanceKeyPairWithOptions(request, runtime);
  }

}
