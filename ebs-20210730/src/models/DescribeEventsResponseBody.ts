// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEventsResponseBodyResourceEvents } from "./DescribeEventsResponseBodyResourceEvents";


export class DescribeEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The events.
   */
  resourceEvents?: DescribeEventsResponseBodyResourceEvents[];
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
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceEvents: 'ResourceEvents',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceEvents: { 'type': 'array', 'itemType': DescribeEventsResponseBodyResourceEvents },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceEvents)) {
      $dara.Model.validateArray(this.resourceEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

