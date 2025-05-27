// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTracedEventByEventIdResponseBodyDataEvents } from "./QueryTracedEventByEventIdResponseBodyDataEvents";


export class QueryTracedEventByEventIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The events.
   */
  events?: QueryTracedEventByEventIdResponseBodyDataEvents[];
  /**
   * @remarks
   * If excess return values exist, this parameter is returned.
   * 
   * @example
   * 1000
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 18
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': QueryTracedEventByEventIdResponseBodyDataEvents },
      nextToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

