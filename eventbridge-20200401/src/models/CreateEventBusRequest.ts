// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventBusRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the event bus.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. The value true indicates that the request is successful.
   * 
   * This parameter is required.
   * 
   * @example
   * MyEventBus
   */
  eventBusName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

