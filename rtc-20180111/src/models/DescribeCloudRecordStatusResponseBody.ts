// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudRecordStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CF8
   */
  requestId?: string;
  /**
   * @remarks
   * - 0: The task has started and is waiting for users to join.
   * - 100: The task has not started.
   * - 101: Recording is in progress.
   * - 102: The recording file is being uploaded.
   * - 200: Recording is completed (channel ended).
   * - 201: Recording is completed (stopped by user).
   * - 400: Recording failed (internal server error).
   * - 401: Recording failed (failed to write to user storage).
   * - 402: Recording failed (failed to start user storage).
   * - 403: Recording failed (recording duration too short).
   * - 404: Recording failed (incorrect user storage key).
   * - 405: Recording failed (bucket does not exist).
   * - 406: Recording failed (access to user storage denied).
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

