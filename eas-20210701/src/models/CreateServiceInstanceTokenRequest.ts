// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceInstanceTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The type of URL to retrieve. Valid values:
   * - **WorkBench**: Logs on to the container through the Workbench page.
   * - **WebShell**: Logs on to the container through a WebSocket URL. This value is not supported for processor-type services or services created before June 2026.
   * 
   * @example
   * WorkBench
   */
  actionType?: string;
  /**
   * @remarks
   * The name of the service worker. You can call the ListServiceContainers operation to obtain the worker name.
   * 
   * @example
   * worker0
   */
  workerName?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      workerName: 'WorkerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      workerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

