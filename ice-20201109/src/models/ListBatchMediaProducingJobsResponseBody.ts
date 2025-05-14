// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListBatchMediaProducingJobsResponseBodyEditingBatchJobList } from "./ListBatchMediaProducingJobsResponseBodyEditingBatchJobList";


export class ListBatchMediaProducingJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried quick video production jobs.
   */
  editingBatchJobList?: ListBatchMediaProducingJobsResponseBodyEditingBatchJobList[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 8EqYpQbZ6Eh7+Zz8DxVYoQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      editingBatchJobList: 'EditingBatchJobList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingBatchJobList: { 'type': 'array', 'itemType': ListBatchMediaProducingJobsResponseBodyEditingBatchJobList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.editingBatchJobList)) {
      $dara.Model.validateArray(this.editingBatchJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

