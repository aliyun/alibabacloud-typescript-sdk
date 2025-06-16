// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFailoverTestJobsResponseBodyFailoverTestJobList } from "./DescribeFailoverTestJobsResponseBodyFailoverTestJobList";


export class DescribeFailoverTestJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of failover tests.
   */
  failoverTestJobList?: DescribeFailoverTestJobsResponseBodyFailoverTestJobList[];
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If no value is returned for **NextToken**, no next queries are sent.
   * *   If a value is returned for **NextToken**, the value is used to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      failoverTestJobList: 'FailoverTestJobList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      failoverTestJobList: { 'type': 'array', 'itemType': DescribeFailoverTestJobsResponseBodyFailoverTestJobList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failoverTestJobList)) {
      $dara.Model.validateArray(this.failoverTestJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

