// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceInstanceTokenRequest extends $dara.Model {
  /**
   * @remarks
   * Type of URL to return. Valid values:
   * 
   * - **WorkBench**: Log on to the container using Workbench.
   * 
   * @example
   * WorkBench
   */
  actionType?: string;
  /**
   * @remarks
   * Name of the service worker. Call the ListServiceContainers operation to get the worker name.
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

