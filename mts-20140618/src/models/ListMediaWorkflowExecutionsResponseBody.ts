// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionList } from "./ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionList";


export class ListMediaWorkflowExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the media workflows.
   */
  mediaWorkflowExecutionList?: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionList;
  /**
   * @remarks
   * The returned value of NextPageToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 39f8e0bc005e4f309379701645f4****
   */
  nextPageToken?: string;
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
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowExecutionList: ListMediaWorkflowExecutionsResponseBodyMediaWorkflowExecutionList,
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaWorkflowExecutionList && typeof (this.mediaWorkflowExecutionList as any).validate === 'function') {
      (this.mediaWorkflowExecutionList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

