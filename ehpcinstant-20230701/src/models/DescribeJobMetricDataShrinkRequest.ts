// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobMetricDataShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of array job indexes.
   */
  arrayIndexShrink?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * job-xxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The metrics of the job.
   * 
   * @example
   * cpu_utilization
   */
  metricName?: string;
  /**
   * @remarks
   * The name of the task.
   * 
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

