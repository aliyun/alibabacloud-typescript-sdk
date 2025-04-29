// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSimulatedSystemEventsResponseBodyEventIdSet } from "./CreateSimulatedSystemEventsResponseBodyEventIdSet";


export class CreateSimulatedSystemEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the simulated events.
   */
  eventIdSet?: CreateSimulatedSystemEventsResponseBodyEventIdSet;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventIdSet: 'EventIdSet',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventIdSet: CreateSimulatedSystemEventsResponseBodyEventIdSet,
      requestId: 'string',
    };
  }

  validate() {
    if(this.eventIdSet && typeof (this.eventIdSet as any).validate === 'function') {
      (this.eventIdSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

