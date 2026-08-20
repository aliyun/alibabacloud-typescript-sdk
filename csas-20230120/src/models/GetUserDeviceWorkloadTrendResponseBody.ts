// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserDeviceWorkloadTrendResponseBodyWorkloadList extends $dara.Model {
  /**
   * @remarks
   * The collection time of the data point. This value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1755360600
   */
  timestamp?: number;
  /**
   * @remarks
   * The workload usage percentage. Valid values: 0 to 100, with two decimal places.
   * 
   * @example
   * 35.27
   */
  workload?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      workload: 'Workload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      workload: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeviceWorkloadTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  /**
   * @remarks
   * The English name of the workload type. Valid values:
   * - **CPU Usage**: returned when WorkloadType is set to cpu.
   * - **Memory Usage**: returned when WorkloadType is set to mem.
   * 
   * @example
   * CPU Usage
   */
  titleEn?: string;
  /**
   * @remarks
   * The Chinese name of the workload type. Valid values:
   * - **CPU使用率**: returned when WorkloadType is set to cpu.
   * - **内存使用率**: returned when WorkloadType is set to mem.
   * 
   * @example
   * CPU 使用率
   */
  titleZh?: string;
  /**
   * @remarks
   * The list of workload trend data points, sorted by time in ascending order.
   */
  workloadList?: GetUserDeviceWorkloadTrendResponseBodyWorkloadList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      titleEn: 'TitleEn',
      titleZh: 'TitleZh',
      workloadList: 'WorkloadList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      titleEn: 'string',
      titleZh: 'string',
      workloadList: { 'type': 'array', 'itemType': GetUserDeviceWorkloadTrendResponseBodyWorkloadList },
    };
  }

  validate() {
    if(Array.isArray(this.workloadList)) {
      $dara.Model.validateArray(this.workloadList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

