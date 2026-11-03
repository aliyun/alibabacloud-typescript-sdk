// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskDispatchStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 71209DFE-XXX-XXX-52B4A4E9DA3B
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * - PENDING: Pending.
   * - RUNNING: Running.
   * - SUCCESS: Successful.
   * - FAILED: Failed.
   * - CANCELLED: Cancelled.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

