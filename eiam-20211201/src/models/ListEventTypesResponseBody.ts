// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventTypesResponseBodyEventTypes extends $dara.Model {
  /**
   * @example
   * urn:alibaba:idaas:event:user:create
   */
  eventType?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventTypesResponseBody extends $dara.Model {
  eventTypes?: ListEventTypesResponseBodyEventTypes[];
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventTypes: 'EventTypes',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypes: { 'type': 'array', 'itemType': ListEventTypesResponseBodyEventTypes },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventTypes)) {
      $dara.Model.validateArray(this.eventTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

