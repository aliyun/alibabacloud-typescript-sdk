// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTracedEventsResponseBodyDataEvents extends $dara.Model {
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * test-custom-bus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 07E-1OCckaVzNB92BIFFh4xgydOF1wd
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
   * acs.resourcemanager
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

export class QueryTracedEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   Success: The request was successful.
   * *   Other codes: The request failed. For information about error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryTracedEventsResponseBodyData;
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
   * d9e4628b-8b34-4f33-82be-5aac50aac0ba
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
      data: QueryTracedEventsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

