// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The executor number.
   * 
   * @example
   * 0_1
   */
  arrayIndex?: number;
  /**
   * @remarks
   * The encoding format for the `CommandContent` and `Output` fields in the response. Valid values:
   * 
   * - PlainText: Returns the original script content and output.
   * 
   * - Base64: Returns the Base64-encoded script content and output.
   * 
   * The default value is Base64.
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
   * The maximum size of the log in bytes. The value must be between 1 and 1,048,576 (1 MB).
   * 
   * @example
   * 1048576
   */
  limitBytes?: string;
  /**
   * @remarks
   * The time in UTC, formatted according to RFC 3339.
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

