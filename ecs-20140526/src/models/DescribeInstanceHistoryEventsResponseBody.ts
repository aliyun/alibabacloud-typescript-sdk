// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSet } from "./DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSet";


export class DescribeInstanceHistoryEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the instance system events.
   */
  instanceSystemEventSet?: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSet;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * f1c9fa9de5752***
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * > 
   * 
   * *   If MaxResults and NextToken are used to query results by page, ignore this parameter.
   * 
   * *   This parameter will be removed in the future. We recommend that you use the NextToken and MaxResults parameters for a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * > 
   * 
   * *   If MaxResults and NextToken are used to query results by page, ignore this parameter.
   * 
   * *   This parameter will be removed in the future. We recommend that you use the NextToken and MaxResults parameters for a paged query.
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instances.
   * 
   * >  If you specify the MaxResults and NextToken request parameters to perform a paged query, the value of the TotalCount response parameter is invalid.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceSystemEventSet: 'InstanceSystemEventSet',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSystemEventSet: DescribeInstanceHistoryEventsResponseBodyInstanceSystemEventSet,
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instanceSystemEventSet && typeof (this.instanceSystemEventSet as any).validate === 'function') {
      (this.instanceSystemEventSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

