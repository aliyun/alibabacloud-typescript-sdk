// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet } from "./DescribeRcinstanceHistoryEventsResponseBodyInstanceSystemEventSet";


export class DescribeRCInstanceHistoryEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the instance system event.
   */
  instanceSystemEventSet?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet[];
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  nextToken?: string;
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
   * The number of entries per page.
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
   * 866F5EB8-4650-4061-87F0-379F6F968BCE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of instance events.
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
      instanceSystemEventSet: { 'type': 'array', 'itemType': DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceSystemEventSet)) {
      $dara.Model.validateArray(this.instanceSystemEventSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

