// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkerResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  /**
   * @remarks
   * The ID of the worker for the deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * 13
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

