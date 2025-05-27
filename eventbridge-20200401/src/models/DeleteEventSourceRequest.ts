// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventSourceRequest extends $dara.Model {
  eventBusName?: string;
  /**
   * @remarks
   * The name of the event source.
   * 
   * This parameter is required.
   * 
   * @example
   * myrabbitmq.source
   */
  eventSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      eventSourceName: 'EventSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      eventSourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

