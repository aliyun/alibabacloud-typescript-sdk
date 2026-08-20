// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The executor index.
   * 
   * @example
   * 0_1
   */
  arrayIndex?: number;
  /**
   * @remarks
   * The encoding method for the CommandContent and Output fields in the response. Valid values:
   * 
   * - PlainText: returns the original script content and output.
   * - Base64: returns Base64-encoded script content and output.
   * 
   * Default value: Base64.
   * 
   * @example
   * PlainText
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * job-xxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The maximum size of the log. Unit: bytes. Valid values: 1 to 1048576 (1 MB).
   * 
   * @example
   * 1048576
   */
  limitBytes?: string;
  /**
   * @remarks
   * The start time in UTC, in RFC 3339 format.
   * 
   * @example
   * 2024-09-02T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The task name.
   * 
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

