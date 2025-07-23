// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentJobRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the deployment task.
   * 
   * Valid values:
   * 
   * *   cloud: multi-cloud deployment task.
   * *   user: cloud service deployment task. This type of task does not support Elastic Compute Service (ECS) instances.
   * 
   * @example
   * user
   */
  jobType?: string;
  /**
   * @remarks
   * The number of certificates per page. Default value: **50**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The status of the deployment task.
   * 
   * Valid values:
   * 
   * *   success
   * *   pending
   * *   scheduling
   * *   processing
   * *   error
   * *   editing
   * 
   * @example
   * pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      jobType: 'JobType',
      showSize: 'ShowSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      jobType: 'string',
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

