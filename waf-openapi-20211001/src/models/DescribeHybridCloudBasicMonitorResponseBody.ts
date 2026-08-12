// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudBasicMonitorResponseBodyBasicMonitors extends $dara.Model {
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - **normal**: Normal.
   * 
   * - `****`: abnormal (four asterisk characters are returned).
   * 
   * @example
   * normal
   */
  levle?: string;
  /**
   * @remarks
   * The monitoring item. Valid values:
   * 
   * - **basic_monitor_cpu_usage**: CPU.
   * 
   * - **basic_monitor_memory_usage**: memory.
   * 
   * - **basic_monitor_disk_usage**: disk.
   * 
   * @example
   * basic_monitor_cpu_usage
   */
  monitorName?: string;
  /**
   * @remarks
   * The usage ratio.
   * 
   * @example
   * 20
   */
  useRatio?: number;
  static names(): { [key: string]: string } {
    return {
      levle: 'Levle',
      monitorName: 'MonitorName',
      useRatio: 'UseRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levle: 'string',
      monitorName: 'string',
      useRatio: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudBasicMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of basic monitoring items.
   */
  basicMonitors?: DescribeHybridCloudBasicMonitorResponseBodyBasicMonitors[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B8AF42B-16A9-5762-AEF3-D148****FE5D
   */
  requestId?: string;
  /**
   * @remarks
   * > This parameter is deprecated and no longer returns meaningful data.
   * 
   * @example
   * 3
   * 
   * @deprecated
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      basicMonitors: 'BasicMonitors',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicMonitors: { 'type': 'array', 'itemType': DescribeHybridCloudBasicMonitorResponseBodyBasicMonitors },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.basicMonitors)) {
      $dara.Model.validateArray(this.basicMonitors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

