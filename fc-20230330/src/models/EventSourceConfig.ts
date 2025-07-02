// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventSourceParameters } from "./EventSourceParameters";


export class EventSourceConfig extends $dara.Model {
  eventSourceParameters?: EventSourceParameters;
  /**
   * @example
   * MNS
   */
  eventSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      eventSourceParameters: 'eventSourceParameters',
      eventSourceType: 'eventSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSourceParameters: EventSourceParameters,
      eventSourceType: 'string',
    };
  }

  validate() {
    if(this.eventSourceParameters && typeof (this.eventSourceParameters as any).validate === 'function') {
      (this.eventSourceParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

