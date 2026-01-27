// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionTicketResponseBody extends $dara.Model {
  desktopId?: string;
  p2PToken?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @example
   * W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V********
   */
  taskCode?: string;
  /**
   * @remarks
   * The ID of the task to connect to the cloud computer.
   * 
   * @example
   * 2afbad19-778a-4fc5-9674-1f19c63862da
   */
  taskId?: string;
  /**
   * @example
   * 2afbad19-778a-4fc5-9674-1f19c638****
   */
  taskMessage?: string;
  /**
   * @example
   * FINISHED
   */
  taskStatus?: string;
  /**
   * @remarks
   * The credentials for connecting to the cloud computer.
   * 
   * @example
   * W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V********
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      p2PToken: 'P2PToken',
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
      desktopId: 'string',
      p2PToken: 'string',
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

