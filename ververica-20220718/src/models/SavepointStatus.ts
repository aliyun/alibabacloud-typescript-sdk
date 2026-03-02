// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SavepointFailure } from "./SavepointFailure";


export class SavepointStatus extends $dara.Model {
  /**
   * @remarks
   * The details of the failure to create a savepoint for the deployment.
   */
  failure?: SavepointFailure;
  /**
   * @remarks
   * The status of the savepoint that is created for the deployment. Valid values:
   * 
   * *   STARTED
   * *   COMPLETED
   * *   FAILED
   * 
   * @example
   * COMPLETED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      failure: 'failure',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failure: SavepointFailure,
      state: 'string',
    };
  }

  validate() {
    if(this.failure && typeof (this.failure as any).validate === 'function') {
      (this.failure as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

