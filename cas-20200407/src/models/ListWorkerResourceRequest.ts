// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkerResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud service in the deployment task.
   * 
   * @example
   * NLB
   */
  cloudProduct?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the deployment task. You can call the [CreateDeploymentJob](https://help.aliyun.com/document_detail/2712234.html) operation to obtain the ID of a deployment task from the **ID** parameter. You can also call the [ListDeploymentJob](https://help.aliyun.com/document_detail/2712223.html) operation to obtain the ID of a deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 50.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The status of the worker task.
   * 
   * Valid values:
   * 
   * *   rollback
   * *   rollback_error
   * *   success
   * *   rollback_success
   * *   pending
   * *   scheduling
   * *   processing
   * *   error
   * *   editing
   * 
   * @example
   * editing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cloudProduct: 'CloudProduct',
      currentPage: 'CurrentPage',
      jobId: 'JobId',
      showSize: 'ShowSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudProduct: 'string',
      currentPage: 'number',
      jobId: 'number',
      showSize: 'number',
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

