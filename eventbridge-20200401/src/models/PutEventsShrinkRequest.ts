// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEventsShrinkRequest extends $dara.Model {
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
  eventListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      eventListShrink: 'EventList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      eventListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

