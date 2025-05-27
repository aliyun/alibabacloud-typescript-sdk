// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventBusesResponseBodyDataEventBuses } from "./ListEventBusesResponseBodyDataEventBuses";


export class ListEventBusesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The event buses.
   */
  eventBuses?: ListEventBusesResponseBodyDataEventBuses[];
  /**
   * @remarks
   * If excess return values exist, this parameter is returned.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      eventBuses: 'EventBuses',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBuses: { 'type': 'array', 'itemType': ListEventBusesResponseBodyDataEventBuses },
      nextToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventBuses)) {
      $dara.Model.validateArray(this.eventBuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

