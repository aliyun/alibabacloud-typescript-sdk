// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudProcessMonitorResponseBodyProcessMonitors extends $dara.Model {
  /**
   * @remarks
   * The severity level of the application status. Valid values:
   * 
   * - **normal**: normal.
   * 
   * - **critical**: abnormal.
   * 
   * @example
   * normal
   */
  levle?: string;
  /**
   * @remarks
   * The name of the application running on the cluster node. Valid values:
   * 
   * - **tianqingproxy**: the central management service
   * 
   * - **redis**: the storage service
   * 
   * - **scc**: the traffic metering service
   * 
   * - **keeper**: the threat intelligence service
   * 
   * - **node_exporter**: the application log upload service
   * 
   * - **xagent**: the traffic detection service
   * 
   * - **noproxy**: the traffic forwarding service
   * 
   * - **xloge**: the attack log upload service
   * 
   * - **ilogtail**: the log collection service
   * 
   * - **xlogd**: the log analysis service
   * 
   * @example
   * keeper
   */
  processName?: string;
  /**
   * @remarks
   * The running status of the application. Valid values:
   * 
   * - **0**: abnormal.
   * 
   * - **1**: normal.
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
   * The list of application statuses.
   */
  processMonitors?: DescribeHybridCloudProcessMonitorResponseBodyProcessMonitors[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DBF79169-B6A0-5C8E-86B2-CFE3****496E
   */
  requestId?: string;
  /**
   * @remarks
   * > This parameter is deprecated and no longer returns a valid value.
   * 
   * @example
   * 3
   */
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

