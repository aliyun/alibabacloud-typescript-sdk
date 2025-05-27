// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserDefinedEventSourcesResponseBodyDataEventSourceList } from "./ListUserDefinedEventSourcesResponseBodyDataEventSourceList";


export class ListUserDefinedEventSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The event sources.
   */
  eventSourceList?: ListUserDefinedEventSourcesResponseBodyDataEventSourceList[];
  /**
   * @remarks
   * If excess return values exist when you configure Limit, this parameter is returned.
   * 
   * @example
   * 100
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
      eventSourceList: 'EventSourceList',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSourceList: { 'type': 'array', 'itemType': ListUserDefinedEventSourcesResponseBodyDataEventSourceList },
      nextToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventSourceList)) {
      $dara.Model.validateArray(this.eventSourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

