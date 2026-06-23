// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRunsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the results by the creator of the pipeline.
   * 
   * @example
   * 110755000425****
   */
  creator?: string;
  /**
   * @remarks
   * The ID of the artifact.
   * 
   * @example
   * 860438872620113XXXX
   */
  objectId?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. The default value is 1.
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
   * The ID of the DataWorks workspace. You can obtain this ID from the Workspace Management page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * This parameter specifies the DataWorks workspace to use for the API call.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * Filters the results by the current status of the pipeline.
   * 
   * Valid values:
   * 
   * - `Init`: initializing
   * 
   * - `Running`: running
   * 
   * - `Success`: succeeded
   * 
   * - `Fail`: failed
   * 
   * - `Termination`: terminated
   * 
   * - `Cancel`: canceled
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

