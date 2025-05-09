// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobMetricDataRequest extends $dara.Model {
  arrayIndex?: number[];
  /**
   * @example
   * job-xxxxx
   */
  jobId?: string;
  /**
   * @example
   * cpu_utilization
   */
  metricName?: string;
  /**
   * @example
   * Task0
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      jobId: 'JobId',
      metricName: 'MetricName',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: { 'type': 'array', 'itemType': 'number' },
      jobId: 'string',
      metricName: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.arrayIndex)) {
      $dara.Model.validateArray(this.arrayIndex);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

