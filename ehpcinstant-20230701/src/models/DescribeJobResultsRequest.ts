// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobResultsRequest extends $dara.Model {
  /**
   * @example
   * 0_1
   */
  arrayIndex?: number;
  /**
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @example
   * job-xxxxxxx
   */
  jobId?: string;
  /**
   * @example
   * 1048576
   */
  limitBytes?: string;
  /**
   * @example
   * 2024-09-02T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * Task0
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      contentEncoding: 'ContentEncoding',
      jobId: 'JobId',
      limitBytes: 'LimitBytes',
      startTime: 'StartTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: 'number',
      contentEncoding: 'string',
      jobId: 'string',
      limitBytes: 'string',
      startTime: 'string',
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

