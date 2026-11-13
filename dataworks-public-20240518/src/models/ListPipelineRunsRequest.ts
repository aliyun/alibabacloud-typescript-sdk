// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRunsRequest extends $dara.Model {
  /**
   * @remarks
   * The creator of the deployment pipeline. This parameter is used as a filter condition.
   * 
   * @example
   * 110755000425****
   */
  creator?: string;
  /**
   * @remarks
   * The ID of the deployment object.
   * 
   * @example
   * 860438872620113XXXX
   */
  objectId?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can logon to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace management page to obtain the ID.
   * 
   * This parameter specifies the DataWorks workspace for the current API invoke operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The current status of the deployment pipeline. This parameter is used as a filter condition.
   * 
   * Valid values:
   * 
   * - Init: Initialized.
   * - Running: Running.
   * - Success: Succeeded.
   * - Fail: Failed.
   * - Termination: Terminated.
   * - Cancel: Canceled.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      objectId: 'ObjectId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      objectId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
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

