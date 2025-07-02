// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstanceEventItem } from "./InstanceEventItem";


export class GetInstanceLifecycleEventsOutput extends $dara.Model {
  events?: InstanceEventItem[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': InstanceEventItem },
      requestId: 'string',
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

