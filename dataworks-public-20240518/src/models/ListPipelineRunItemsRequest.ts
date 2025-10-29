// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRunItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number, for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The number of entries per page. Default: 10. Maximum: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The workflow task ID. To obtain the ID, see [ListPipelineRuns](https://help.aliyun.com/document_detail/438042.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 097c73fe-ed6e-4fb1-b109-a5d59e46cd58
   */
  pipelineRunId?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can obtain the workspace ID from the workspace configuration page in the DataWorks console.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pipelineRunId: 'PipelineRunId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pipelineRunId: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

