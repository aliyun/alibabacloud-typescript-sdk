// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRollbackTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * 436493
   */
  jobId?: number;
  /**
   * @remarks
   * The ID of the deployment worker.
   * 
   * This parameter is required.
   * 
   * @example
   * 4197913
   */
  workerId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      workerId: 'WorkerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      workerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

