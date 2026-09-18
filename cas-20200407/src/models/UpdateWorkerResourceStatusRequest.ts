// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkerResourceStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment task ID. This ID is returned by [CreateDeploymentJob](https://help.aliyun.com/document_detail/2712234.html). You can also obtain it by calling [ListDeploymentJob](https://help.aliyun.com/document_detail/2712223.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  /**
   * @remarks
   * The target status. Valid values: "editing", "pending", "success", "rollback", "rollback_success", "rollback_error".
   * 
   * This parameter is required.
   * 
   * @example
   * rollback
   */
  status?: string;
  /**
   * @remarks
   * The deployment task worker ID. You can obtain this ID by calling [ListWorkerResource](https://help.aliyun.com/document_detail/2712224.html).
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

