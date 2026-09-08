// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEventsRequestEventList extends $dara.Model {
  /**
   * @remarks
   * The event payload.
   * 
   * @example
   * {"orderId": "1001", "amount": 99.9}
   */
  data?: any;
  /**
   * @remarks
   * The data format.
   * 
   * @example
   * application/json
   */
  dataContentType?: string;
  /**
   * @remarks
   * The data schema address.
   * 
   * @example
   * https://example.com/schema/v1
   */
  dataSchema?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5a2c8f4e-0001
   */
  id?: string;
  /**
   * @remarks
   * The event source.
   * 
   * This parameter is required.
   * 
   * @example
   * my.custom.source
   */
  source?: string;
  /**
   * @remarks
   * The protocol version.
   * 
   * @example
   * 1.0
   */
  specVersion?: string;
  /**
   * @remarks
   * The event subject.
   * 
   * @example
   * order-1001
   */
  subject?: string;
  /**
   * @remarks
   * The event time.
   * 
   * @example
   * 2026-08-04T10:00:00Z
   */
  time?: string;
  /**
   * @remarks
   * The event type.
   * 
   * This parameter is required.
   * 
   * @example
   * order:created
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dataContentType: 'DataContentType',
      dataSchema: 'DataSchema',
      id: 'Id',
      source: 'Source',
      specVersion: 'SpecVersion',
      subject: 'Subject',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      dataContentType: 'string',
      dataSchema: 'string',
      id: 'string',
      source: 'string',
      specVersion: 'string',
      subject: 'string',
      time: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the event bus.
   * 
   * This parameter is required.
   * 
   * @example
   * my-bus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The list of events.
   */
  eventList?: PutEventsRequestEventList[];
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      eventList: 'EventList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      eventList: { 'type': 'array', 'itemType': PutEventsRequestEventList },
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

