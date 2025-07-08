// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricLastResponseBodyMetricTotalModelMetricModelListProcessLastInfos extends $dara.Model {
  /**
   * @example
   * 50
   */
  cpuUsage?: number;
  /**
   * @example
   * 50
   */
  memoryUsage?: number;
  /**
   * @example
   * com.offerup
   */
  name?: string;
  processIds?: number[];
  /**
   * @example
   * 1548777660000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      cpuUsage: 'CpuUsage',
      memoryUsage: 'MemoryUsage',
      name: 'Name',
      processIds: 'ProcessIds',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuUsage: 'number',
      memoryUsage: 'number',
      name: 'string',
      processIds: { 'type': 'array', 'itemType': 'number' },
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.processIds)) {
      $dara.Model.validateArray(this.processIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

