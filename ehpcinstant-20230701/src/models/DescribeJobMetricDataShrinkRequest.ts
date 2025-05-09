// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobMetricDataShrinkRequest extends $dara.Model {
  arrayIndexShrink?: string;
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
      arrayIndexShrink: 'ArrayIndex',
      jobId: 'JobId',
      metricName: 'MetricName',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndexShrink: 'string',
      jobId: 'string',
      metricName: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

