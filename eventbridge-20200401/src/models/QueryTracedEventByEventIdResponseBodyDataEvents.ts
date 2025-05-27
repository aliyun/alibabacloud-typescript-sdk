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

