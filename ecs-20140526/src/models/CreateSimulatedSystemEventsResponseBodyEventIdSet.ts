// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSimulatedSystemEventsResponseBodyEventIdSet extends $dara.Model {
  eventId?: string[];
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.eventId)) {
      $dara.Model.validateArray(this.eventId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

