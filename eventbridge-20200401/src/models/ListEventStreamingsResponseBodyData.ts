// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsResponseBodyDataEventStreamings } from "./ListEventStreamingsResponseBodyDataEventStreamings";


export class ListEventStreamingsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The event streams.
   */
  eventStreamings?: ListEventStreamingsResponseBodyDataEventStreamings[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists. You must specify the pagination token in the next request.
   * 
   * @example
   * 177
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      eventStreamings: 'EventStreamings',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventStreamings: { 'type': 'array', 'itemType': ListEventStreamingsResponseBodyDataEventStreamings },
      nextToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventStreamings)) {
      $dara.Model.validateArray(this.eventStreamings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

