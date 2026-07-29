// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionTicketResponseBody extends $dara.Model {
  desktopId?: string;
  p2PToken?: string;
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
   * The ticket used to connect to the user instance. Before you use the ticket, decode its content from Base64, save it as an .ica file, and then open the file. The following code provides a Python example:
   * 
   * ```
   * import base64
   * response = {
   *     "Ticket": "W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V********",
   *     "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
   * }
   * f = open (\\"xxx.ica\\", \\"w\\")
   * out = base64.b64decode(response[\\"Ticket\\"])
   * f.write(out)
   * f.close()
   * ```
   * 
   * @example
   * W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V********
   */
  taskCode?: string;
  /**
   * @remarks
   * The ID of the cloud computer connection task.
   * 
   * @example
   * 2afbad19-778a-4fc5-9674-1f19c63862da
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the cloud computer connection task.
   * 
   * @example
   * 2afbad19-778a-4fc5-9674-1f19c638****
   */
  taskMessage?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * FINISHED
   */
  taskStatus?: string;
  /**
   * @remarks
   * The connection ticket for the cloud computer.
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

