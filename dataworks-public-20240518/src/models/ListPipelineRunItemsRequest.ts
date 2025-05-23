// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRunItemsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 097c73fe-ed6e-4fb1-b109-a5d59e46cd58
   */
  pipelineRunId?: string;
  /**
   * @remarks
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

