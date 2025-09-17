// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudProcessMonitorResponseBodyProcessMonitors extends $dara.Model {
  levle?: string;
  /**
   * @remarks
   * The service that the application provides. Valid values:
   * 
   * *   **tianqingproxy**: centralized management service.
   * *   **redis**: storage service.
   * *   **scc**: traffic calculation service.
   * *   **keeper**: threat intelligence service.
   * *   **node_exporter**: application log upload service.
   * *   **xagent**: traffic detection service.
   * *   **noproxy**: traffic forwarding service.
   * *   **xloge**: attack log upload service.
   * *   **ilogtail**: log collection service.
   * *   **xlogd**: log analysis service.
   * 
   * @example
   * tianqingproxy
   */
  processName?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   **0**: abnormal.
   * *   **1**: normal.
   * 
   * @example
   * 1
   */
  processStatus?: number;
  static names(): { [key: string]: string } {
    return {
      levle: 'Levle',
      processName: 'ProcessName',
      processStatus: 'ProcessStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levle: 'string',
      processName: 'string',
      processStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudProcessMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the applications.
   */
  processMonitors?: DescribeHybridCloudProcessMonitorResponseBodyProcessMonitors[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DBF79169-B6A0-5C8E-86B2-CFE3****496E
   */
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      processMonitors: 'ProcessMonitors',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processMonitors: { 'type': 'array', 'itemType': DescribeHybridCloudProcessMonitorResponseBodyProcessMonitors },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.processMonitors)) {
      $dara.Model.validateArray(this.processMonitors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

