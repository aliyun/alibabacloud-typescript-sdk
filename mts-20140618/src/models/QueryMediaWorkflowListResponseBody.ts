// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaWorkflowListResponseBodyMediaWorkflowList } from "./QueryMediaWorkflowListResponseBodyMediaWorkflowList";
import { QueryMediaWorkflowListResponseBodyNonExistMediaWorkflowIds } from "./QueryMediaWorkflowListResponseBodyNonExistMediaWorkflowIds";


export class QueryMediaWorkflowListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The media workflows.
   */
  mediaWorkflowList?: QueryMediaWorkflowListResponseBodyMediaWorkflowList;
  /**
   * @remarks
   * The workflows that do not exist.
   */
  nonExistMediaWorkflowIds?: QueryMediaWorkflowListResponseBodyNonExistMediaWorkflowIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16CD0CDD-457E-420D-1234-8385075A618B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowList: 'MediaWorkflowList',
      nonExistMediaWorkflowIds: 'NonExistMediaWorkflowIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowList: QueryMediaWorkflowListResponseBodyMediaWorkflowList,
      nonExistMediaWorkflowIds: QueryMediaWorkflowListResponseBodyNonExistMediaWorkflowIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaWorkflowList && typeof (this.mediaWorkflowList as any).validate === 'function') {
      (this.mediaWorkflowList as any).validate();
    }
    if(this.nonExistMediaWorkflowIds && typeof (this.nonExistMediaWorkflowIds as any).validate === 'function') {
      (this.nonExistMediaWorkflowIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

