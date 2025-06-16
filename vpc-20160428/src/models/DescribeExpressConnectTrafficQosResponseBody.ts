// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeExpressConnectTrafficQosResponseBodyQosList } from "./DescribeExpressConnectTrafficQosResponseBodyQosList";


export class DescribeExpressConnectTrafficQosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  count?: string;
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
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about QoS policies.
   */
  qosList?: DescribeExpressConnectTrafficQosResponseBodyQosList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CF20CC7-D1FC-425B-A15B-DF7C8E2131A7
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      qosList: 'QosList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      maxResults: 'number',
      nextToken: 'string',
      qosList: { 'type': 'array', 'itemType': DescribeExpressConnectTrafficQosResponseBodyQosList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qosList)) {
      $dara.Model.validateArray(this.qosList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

