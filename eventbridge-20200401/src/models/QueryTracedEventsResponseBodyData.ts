// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTracedEventsResponseBodyDataEvents } from "./QueryTracedEventsResponseBodyDataEvents";


export class QueryTracedEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The events.
   */
  events?: QueryTracedEventsResponseBodyDataEvents[];
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
   * The total number of entries.
   * 
   * @example
   * 6
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
      events: { 'type': 'array', 'itemType': QueryTracedEventsResponseBodyDataEvents },
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

