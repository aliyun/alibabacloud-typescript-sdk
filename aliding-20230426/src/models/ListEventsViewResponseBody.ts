// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventsViewResponseBodyEvents } from "./ListEventsViewResponseBodyEvents";


export class ListEventsViewResponseBody extends $dara.Model {
  events?: ListEventsViewResponseBodyEvents[];
  /**
   * @example
   * cnNTbWxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      nextToken: 'nextToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': ListEventsViewResponseBodyEvents },
      nextToken: 'string',
      requestId: 'string',
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

