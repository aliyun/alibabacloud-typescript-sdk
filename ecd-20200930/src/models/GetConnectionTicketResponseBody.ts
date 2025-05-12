// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionTicketResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * Before you use the credential, you must Base64 decode the content of the credential, save the credential as an xxx.ica file, and then open the file. Python sample code:
   * 
   *     import base64
   *     response = {
   *         "Ticket": "W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V********",
   *         "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
   *     }
   *     f = open (\\"xxx.ica\\", \\"w\\")
   *     out = base64.b64decode(response[\\"Ticket\\"])
   *     f.write(out)
   *     f.close()
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
   * 2afbad19-778a-4fc5-9674-1f19c638****
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the connection task.
   * 
   * @example
   * 2afbad19-778a-4fc5-9674-1f19c638****
   */
  taskMessage?: string;
  /**
   * @remarks
   * The task status.
   * 
   * Valid values:
   * 
   * *   FAILED: The credential fails to be obtained.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   RUNNING: The credential is being obtained.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   FINISHED: The credential is obtained.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
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

