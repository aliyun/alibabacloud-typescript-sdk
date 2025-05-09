// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPipelineRunsResponseBodyPagingInfoPipelineRuns } from "./ListPipelineRunsResponseBodyPagingInfoPipelineRuns";


export class ListPipelineRunsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The processes.
   */
  pipelineRuns?: ListPipelineRunsResponseBodyPagingInfoPipelineRuns[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2524
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pipelineRuns: 'PipelineRuns',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pipelineRuns: { 'type': 'array', 'itemType': ListPipelineRunsResponseBodyPagingInfoPipelineRuns },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pipelineRuns)) {
      $dara.Model.validateArray(this.pipelineRuns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

