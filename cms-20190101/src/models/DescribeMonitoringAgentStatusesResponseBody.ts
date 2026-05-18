// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitoringAgentStatusesResponseBodyNodeStatusListNodeStatus extends $dara.Model {
  agentInstallErrorCode?: string;
  autoInstall?: boolean;
  instanceId?: string;
  loongCollectorStatus?: string;
  loongCollectorVersion?: string;
  osMonitorConfig?: string;
  osMonitorErrorCode?: string;
  osMonitorErrorDetail?: string;
  osMonitorStatus?: string;
  osMonitorVersion?: string;
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

