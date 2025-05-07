// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionTicketResponseBody extends $dara.Model {
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  taskCode?: string;
  /**
   * @example
   * 2afbad19-778a-4fc5-9674-1f19c63862da
   */
  taskId?: string;
  taskMessage?: string;
  /**
   * @example
   * FINISHED
   */
  taskStatus?: string;
  /**
   * @example
   * W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V********
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskCode: 'TaskCode',
      taskId: 'TaskId',
      taskMessage: 'TaskMessage',
      taskStatus: 'TaskStatus',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskCode: 'string',
      taskId: 'string',
      taskMessage: 'string',
      taskStatus: 'string',
      ticket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

