// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventsResponseBodyEvents } from "./ListEventsResponseBodyEvents";


export class ListEventsResponseBody extends $dara.Model {
  events?: ListEventsResponseBodyEvents[];
  /**
   * @example
   * cnNTbW1YbxxxxdlQrQT09
   */
  nextToken?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 4248DCC9-785F-5A14-8BE0-830FD52E1261
   */
  requestId?: string;
  /**
   * @example
   * zxcasdfvc000009
   */
  syncToken?: string;
  vendorRequestId?: string;
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      nextToken: 'nextToken',
      requestId: 'requestId',
      syncToken: 'syncToken',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': ListEventsResponseBodyEvents },
      nextToken: 'string',
      requestId: 'string',
      syncToken: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
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

