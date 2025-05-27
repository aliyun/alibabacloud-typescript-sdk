// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEventTracesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the event bus.
   * 
   * This parameter is required.
   * 
   * @example
   * MyEventBus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1935debf-ddac-49dc-a090-d4f2857a046d
   */
  eventId?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      eventId: 'EventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      eventId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

