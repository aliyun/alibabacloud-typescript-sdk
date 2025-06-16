// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteEntryListResponseBodyRouteEntrys } from "./DescribeRouteEntryListResponseBodyRouteEntrys";


export class DescribeRouteEntryListResponseBody extends $dara.Model {
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
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the route.
   */
  routeEntrys?: DescribeRouteEntryListResponseBodyRouteEntrys;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      routeEntrys: 'RouteEntrys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      routeEntrys: DescribeRouteEntryListResponseBodyRouteEntrys,
    };
  }

  validate() {
    if(this.routeEntrys && typeof (this.routeEntrys as any).validate === 'function') {
      (this.routeEntrys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

