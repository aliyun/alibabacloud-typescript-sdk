// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRunsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who creates the processes. This parameter specifies a filter condition.
   * 
   * @example
   * 110755000425****
   */
  creator?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
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
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The status of the processes. This parameter specifies a filter condition.
   * 
   * Valid values:
   * 
   * *   Init
   * *   Running
   * *   Success
   * *   Fail
   * *   Termination
   * *   Cancel
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
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

