// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionList } from "./QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionList";
import { QueryMediaWorkflowExecutionListResponseBodyNonExistRunIds } from "./QueryMediaWorkflowExecutionListResponseBodyNonExistRunIds";


export class QueryMediaWorkflowExecutionListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the media workflows.
   */
  mediaWorkflowExecutionList?: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionList;
  /**
   * @remarks
   * The IDs of the execution instances that do not exist.
   */
  nonExistRunIds?: QueryMediaWorkflowExecutionListResponseBodyNonExistRunIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D1D5C080-8E2F-5030-8AB4-13092F17631B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowExecutionList: 'MediaWorkflowExecutionList',
      nonExistRunIds: 'NonExistRunIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowExecutionList: QueryMediaWorkflowExecutionListResponseBodyMediaWorkflowExecutionList,
      nonExistRunIds: QueryMediaWorkflowExecutionListResponseBodyNonExistRunIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaWorkflowExecutionList && typeof (this.mediaWorkflowExecutionList as any).validate === 'function') {
      (this.mediaWorkflowExecutionList as any).validate();
    }
    if(this.nonExistRunIds && typeof (this.nonExistRunIds as any).validate === 'function') {
      (this.nonExistRunIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

