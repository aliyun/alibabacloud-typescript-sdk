// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The executor index.
   * 
   * @example
   * 0
   */
  arrayIndex?: number;
  /**
   * @remarks
   * Specifies the encoding method for the CommandContent and Output fields in the response. Valid values:
   * - PlainText: Returns the original script content and output.
   * - Base64: Returns the Base64-encoded script content and output.
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
   * The limit on the total size of the logs. Unit: bytes. Valid values: 1 to 1048576 (1 MB).
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

