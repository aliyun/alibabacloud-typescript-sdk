// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobMetricLastRequest extends $dara.Model {
  arrayIndex?: number[];
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

