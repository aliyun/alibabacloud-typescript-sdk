// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTaskDispatchStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 71209DFE-XXX-XXX-52B4A4E9DA3B
   */
  requestId?: string;
  /**
   * @remarks
   * The execution status of the task. Valid values:
   * - PENDING: pending execution.
   * - RUNNING: running.
   * - SUCCESS: succeeded.
   * - FAILED: failed.
   * - CANCELLED: cancelled.
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

