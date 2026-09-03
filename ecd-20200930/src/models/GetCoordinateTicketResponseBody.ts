// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCoordinateTicketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The coordination flow ID.
   * 
   * @example
   * co-0sot77uale3****
   */
  coId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The cloud computer connection task ID.
   * 
   * @example
   * 39cc15e5-6998-4b9f-9b2c-7a4cc3e2****
   */
  taskId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Finished
   */
  taskStatus?: string;
  /**
   * @remarks
   * The coordination flow ticket.
   * 
   * @example
   * W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V********
   */
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coId: 'string',
      requestId: 'string',
      taskId: 'string',
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

