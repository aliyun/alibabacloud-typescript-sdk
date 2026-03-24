// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceInstanceTokenRequest extends $dara.Model {
  /**
   * @example
   * WorkBench
   */
  actionType?: string;
  /**
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

