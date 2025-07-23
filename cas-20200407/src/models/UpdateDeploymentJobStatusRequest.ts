// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDeploymentJobStatusRequest extends $dara.Model {
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
   * The desired status.
   * 
   * Valid values:
   * 
   * *   pending
   * *   scheduling
   * *   editing
   * 
   * This parameter is required.
   * 
   * @example
   * editing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

