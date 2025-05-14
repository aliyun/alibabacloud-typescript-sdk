// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSmartJobsResponseBodySmartJobList } from "./ListSmartJobsResponseBodySmartJobList";


export class ListSmartJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned on a single page. The value is set to the maximum number of entries returned on each page except for the last page. Valid example: 10,10,5. Invalid example: 10,5,10.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * CBB6BC61D08
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****9262E3DA-07FA-4862-FCBB6BC61D08*****
   */
  requestId?: string;
  /**
   * @remarks
   * The queried intelligent jobs.
   */
  smartJobList?: ListSmartJobsResponseBodySmartJobList[];
  /**
   * @remarks
   * Optional. The total number of entries returned. By default, this parameter is not returned.
   * 
   * @example
   * 110
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      smartJobList: 'SmartJobList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      smartJobList: { 'type': 'array', 'itemType': ListSmartJobsResponseBodySmartJobList },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.smartJobList)) {
      $dara.Model.validateArray(this.smartJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

