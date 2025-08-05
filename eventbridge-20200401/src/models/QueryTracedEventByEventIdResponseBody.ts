// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTracedEventByEventIdResponseBodyDataEvents extends $dara.Model {
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * default
   */
  eventBusName?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 37C-1P6Yn6EM7TcH37Vod8w7rbSeimJ
   */
  eventId?: string;
  /**
   * @remarks
   * The time when the event was delivered to the event bus.
   * 
   * @example
   * 1661773573100
   */
  eventReceivedTime?: number;
  /**
   * @remarks
   * The name of the event source.
   * 
   * @example
   * cert-api
   */
  eventSource?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * eventbridge:Events:HTTPEvent
   */
  eventType?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      eventId: 'EventId',
      eventReceivedTime: 'EventReceivedTime',
      eventSource: 'EventSource',
      eventType: 'EventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      eventId: 'string',
      eventReceivedTime: 'number',
      eventSource: 'string',
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

export class QueryTracedEventByEventIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * Success: The request was successful.
   * 
   * Other codes: The request failed. For information about error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of entries returned.
   */
  data?: QueryTracedEventByEventIdResponseBodyData[];
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * EventBusNotExist
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5D7B9F4-BF96-51A9-90B1-928955FABB5B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. If the operation was successful, the value true is returned.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryTracedEventByEventIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

