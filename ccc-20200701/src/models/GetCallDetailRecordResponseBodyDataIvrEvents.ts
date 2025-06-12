// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCallDetailRecordResponseBodyDataIvrEventsEventSequence } from "./GetCallDetailRecordResponseBodyDataIvrEventsEventSequence";


export class GetCallDetailRecordResponseBodyDataIvrEvents extends $dara.Model {
  eventSequence?: GetCallDetailRecordResponseBodyDataIvrEventsEventSequence[];
  /**
   * @example
   * edaf2eaa-8f88-44ca-812e-41b3cd2b7a90
   */
  flowId?: string;
  /**
   * @example
   * MAIN_FLOW
   */
  flowType?: string;
  static names(): { [key: string]: string } {
    return {
      eventSequence: 'EventSequence',
      flowId: 'FlowId',
      flowType: 'FlowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSequence: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataIvrEventsEventSequence },
      flowId: 'string',
      flowType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventSequence)) {
      $dara.Model.validateArray(this.eventSequence);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

