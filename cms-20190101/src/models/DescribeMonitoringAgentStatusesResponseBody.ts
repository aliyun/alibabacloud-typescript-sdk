// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitoringAgentStatusesResponseBodyNodeStatusListNodeStatus extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the CloudMonitor agent is installed. Valid values:
   * 
   * *   Common.Timeout: The installation timed out.
   * *   Common.SLR: The service-linked role for CloudMonitor is unauthorized.
   * *   Common.OS: The operating system is not supported.
   * *   Assist.Invalid: Cloud Assistant is not running.
   * *   Assist.Invoke: An error occurred when the installation program is started.
   * *   Assist.Execute: An error occurred when the installation program is running.
   */
  agentInstallErrorCode?: string;
  /**
   * @remarks
   * Indicates whether the CloudMonitor agent is automatically installed. Valid values:
   * 
   * *   true: The CloudMonitor agent is automatically installed.
   * *   false: The CloudMonitor agent is not automatically installed.
   * 
   * @example
   * true
   */
  autoInstall?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-hp3dunahluwajv6f****
   */
  instanceId?: string;
  loongCollectorStatus?: string;
  loongCollectorVersion?: string;
  /**
   * @remarks
   * Indicates whether the SysAK monitoring feature is enabled.`` Valid values:
   * 
   * *   `true`: The SysAK monitoring feature is enabled.
   * *   `false`: the SysAK monitoring feature is disabled.
   * 
   * @example
   * {"sysak":true}
   */
  osMonitorConfig?: string;
  /**
   * @remarks
   * The error status of SysOM. Valid values:
   * 
   * *   `install_fail`: SysOM fails to be installed or an unknown error occurs.
   * *   `install_assist_invalid`: SysOM fails to be installed because the status of Cloud Assistant is invalid.
   * *   `install_assist_command_fail`: SysOM fails to be installed because the installation command fails to run.
   * *   `uninstall_fail`: SysOM fails to be uninstalled or an unknown error occurs.
   * *   `uninstall_assist_invalid`: SysOM fails to be uninstalled because the status of Cloud Assistant is invalid.
   * *   `uninstall_assist_command_fail`: SysOM fails to be uninstalled because the uninstallation command fails to run.
   * 
   * @example
   * install_fail
   */
  osMonitorErrorCode?: string;
  /**
   * @remarks
   * The details of the execution error. Valid values:
   * 
   * *   `Command.ErrorCode.Fail.Downlaod.REGIN_ID`: Failed to obtain the region ID.
   * *   `Command.ErrorCode.Fail.Downlaod.SYSAK`: Failed to download the .rpm package of System Analyse Kit (SysAK).
   * *   `Command.ErrorCode.Fail.Downlaod.CMON_FILE`: Failed to download the CMON file.
   * *   `Command.ErrorCode.Fail.Downlaod.BTF`: Failed to start SysAK because the BTF file is not found.
   * *   `Command.ErrorCode.Fail.Start.SYSAK`: Failed to start SysAK due to an unknown error.
   * 
   * @example
   * Command.ErrorCode.Fail.Downlaod.REGIN_ID
   */
  osMonitorErrorDetail?: string;
  /**
   * @remarks
   * The status of SysOM. Valid values:
   * 
   * *   installing: SysOM is being installed.
   * *   running: SysOM is running.
   * *   stopped: SysOM is stopped.
   * *   uninstalling: SysOM is being uninstalled.
   * 
   * @example
   * running
   */
  osMonitorStatus?: string;
  /**
   * @remarks
   * The SysOM version.
   * 
   * @example
   * 1.3.0-12
   */
  osMonitorVersion?: string;
  /**
   * @remarks
   * The status of the CloudMonitor agent. Valid values:
   * 
   * *   running: The CloudMonitor agent is running.
   * *   stopped: The CloudMonitor agent is stopped.
   * *   installing: The CloudMonitor agent is being installed.
   * *   install_faild: The CloudMonitor agent fails to be installed.
   * *   abnormal: The CloudMonitor agent is not properly installed.
   * *   not_installed: The CloudMonitor agent is not installed.
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentInstallErrorCode: 'AgentInstallErrorCode',
      autoInstall: 'AutoInstall',
      instanceId: 'InstanceId',
      loongCollectorStatus: 'LoongCollectorStatus',
      loongCollectorVersion: 'LoongCollectorVersion',
      osMonitorConfig: 'OsMonitorConfig',
      osMonitorErrorCode: 'OsMonitorErrorCode',
      osMonitorErrorDetail: 'OsMonitorErrorDetail',
      osMonitorStatus: 'OsMonitorStatus',
      osMonitorVersion: 'OsMonitorVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInstallErrorCode: 'string',
      autoInstall: 'boolean',
      instanceId: 'string',
      loongCollectorStatus: 'string',
      loongCollectorVersion: 'string',
      osMonitorConfig: 'string',
      osMonitorErrorCode: 'string',
      osMonitorErrorDetail: 'string',
      osMonitorStatus: 'string',
      osMonitorVersion: 'string',
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

export class DescribeMonitoringAgentStatusesResponseBodyNodeStatusList extends $dara.Model {
  nodeStatus?: DescribeMonitoringAgentStatusesResponseBodyNodeStatusListNodeStatus[];
  static names(): { [key: string]: string } {
    return {
      nodeStatus: 'NodeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeStatus: { 'type': 'array', 'itemType': DescribeMonitoringAgentStatusesResponseBodyNodeStatusListNodeStatus },
    };
  }

  validate() {
    if(Array.isArray(this.nodeStatus)) {
      $dara.Model.validateArray(this.nodeStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitoringAgentStatusesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
  /**
   * @remarks
   * The host status information.
   */
  nodeStatusList?: DescribeMonitoringAgentStatusesResponseBodyNodeStatusList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6F8371DF-AB81-41B8-9E1B-5493B3FF0E4F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      nodeStatusList: 'NodeStatusList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      nodeStatusList: DescribeMonitoringAgentStatusesResponseBodyNodeStatusList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.nodeStatusList && typeof (this.nodeStatusList as any).validate === 'function') {
      (this.nodeStatusList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

