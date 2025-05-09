// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobMetricLastShrinkRequest extends $dara.Model {
  arrayIndexShrink?: string;
  /**
   * @example
   * job-xxxxx
   */
  jobId?: string;
  /**
   * @example
   * Task0
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndexShrink: 'ArrayIndex',
      jobId: 'JobId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndexShrink: 'string',
      jobId: 'string',
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

