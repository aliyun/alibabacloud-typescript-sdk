// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaProducingJobsResponseBodyMediaProducingJobList } from "./ListMediaProducingJobsResponseBodyMediaProducingJobList";


export class ListMediaProducingJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * Default value: 10. Valid values: 1 to 100.
   * 
   * @example
   * 100
   */
  maxResults?: string;
  /**
   * @remarks
   * The queried media editing and production jobs.
   */
  mediaProducingJobList?: ListMediaProducingJobsResponseBodyMediaProducingJobList[];
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
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      mediaProducingJobList: 'MediaProducingJobList',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      mediaProducingJobList: { 'type': 'array', 'itemType': ListMediaProducingJobsResponseBodyMediaProducingJobList },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mediaProducingJobList)) {
      $dara.Model.validateArray(this.mediaProducingJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

