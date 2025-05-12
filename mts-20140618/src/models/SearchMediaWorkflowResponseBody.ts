// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaWorkflowResponseBodyMediaWorkflowList } from "./SearchMediaWorkflowResponseBodyMediaWorkflowList";


export class SearchMediaWorkflowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the media workflows.
   */
  mediaWorkflowList?: SearchMediaWorkflowResponseBodyMediaWorkflowList;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16CD0CDD-457E-420D-9755-8385075A1234
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      mediaWorkflowList: 'MediaWorkflowList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaWorkflowList: SearchMediaWorkflowResponseBodyMediaWorkflowList,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.mediaWorkflowList && typeof (this.mediaWorkflowList as any).validate === 'function') {
      (this.mediaWorkflowList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

