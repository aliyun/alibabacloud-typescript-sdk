// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventBusRequest extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

