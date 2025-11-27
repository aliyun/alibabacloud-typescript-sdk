// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobMetricLastRequest extends $dara.Model {
  /**
   * @remarks
   * The list of array job indexes.
   */
  arrayIndex?: number[];
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
   * The name of the task.
   * 
   * @example
   * Task0
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      jobId: 'JobId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: { 'type': 'array', 'itemType': 'number' },
      jobId: 'string',
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

