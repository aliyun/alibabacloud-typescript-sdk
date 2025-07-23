// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkerResourceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment task. You can call the [CreateDeploymentJob](https://help.aliyun.com/document_detail/2712234.html) operation to obtain the ID of a deployment task from the **JobId** parameter. You can also call the [ListDeploymentJob](https://help.aliyun.com/document_detail/2712223.html) operation to obtain the ID of a deployment task.
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
   * *   rollback
   * 
   * This parameter is required.
   * 
   * @example
   * rollback
   */
  status?: string;
  /**
   * @remarks
   * The ID of the worker task. You can call the [ListWorkerResource](https://help.aliyun.com/document_detail/2712224.html) operation to obtain the ID of a worker task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  workerId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      status: 'Status',
      workerId: 'WorkerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      status: 'string',
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

