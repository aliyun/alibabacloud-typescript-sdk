// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSasPmAgentListResponseBodySasPmAgentList extends $dara.Model {
  /**
   * @remarks
   * The globally unique ID of Cloud Assistant.
   * 
   * @example
   * mi-hz034jn***yxhc0
   */
  aliyunAssistId?: string;
  /**
   * @remarks
   * The globally unique ID of CloudMonitor.
   * 
   * @example
   * 5d5ef6be-54ff-11ed-82cf-8f01475e****
   */
  aliyunMonitorId?: string;
  /**
   * @remarks
   * The installation execution result of Cloud Assistant. Valid values:
   * - **0**: SUCCESS
   * - **1**: MISSING_PARAM
   * - **2**: UNKNOWN_SYSTEM
   * - **3**: DOWNLOAD_FAILED
   * - **4**: INSTALL_FAILED.
   * 
   * @example
   * 0
   */
  assistInstallResult?: number;
  /**
   * @remarks
   * The installation status of Cloud Assistant. Valid values:
   * - **0**: Installing.
   * - **1**: Installed.
   * - **2**: Installation failed.
   * - **3**: Installation timed out.
   * 
   * @example
   * 1
   */
  assistInstallStatus?: number;
  /**
   * @remarks
   * The installation execution result of CloudMonitor. Valid values:
   * - **0**: Failed.
   * - **1**: Succeeded.
   * 
   * @example
   * 1
   */
  monitorInstallResult?: number;
  /**
   * @remarks
   * The installation status of CloudMonitor. Valid values:
   * - **0**: Failed.
   * - **1**: Succeeded.
   * 
   * @example
   * 1
   */
  monitorInstallStatus?: number;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 87f1724d-075e-48d3-95fd-78c2dd36****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunAssistId: 'AliyunAssistId',
      aliyunMonitorId: 'AliyunMonitorId',
      assistInstallResult: 'AssistInstallResult',
      assistInstallStatus: 'AssistInstallStatus',
      monitorInstallResult: 'MonitorInstallResult',
      monitorInstallStatus: 'MonitorInstallStatus',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunAssistId: 'string',
      aliyunMonitorId: 'string',
      assistInstallResult: 'number',
      assistInstallStatus: 'number',
      monitorInstallResult: 'number',
      monitorInstallStatus: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSasPmAgentListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8EF3ACC2-9400-5B64-B72D-4A1D35113750
   */
  requestId?: string;
  /**
   * @remarks
   * The query result list.
   */
  sasPmAgentList?: DescribeSasPmAgentListResponseBodySasPmAgentList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sasPmAgentList: 'SasPmAgentList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sasPmAgentList: { 'type': 'array', 'itemType': DescribeSasPmAgentListResponseBodySasPmAgentList },
    };
  }

  validate() {
    if(Array.isArray(this.sasPmAgentList)) {
      $dara.Model.validateArray(this.sasPmAgentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

