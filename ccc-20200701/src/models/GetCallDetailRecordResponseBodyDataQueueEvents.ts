// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCallDetailRecordResponseBodyDataQueueEventsEventSequence } from "./GetCallDetailRecordResponseBodyDataQueueEventsEventSequence";


export class GetCallDetailRecordResponseBodyDataQueueEvents extends $dara.Model {
  eventSequence?: GetCallDetailRecordResponseBodyDataQueueEventsEventSequence[];
  /**
   * @example
   * edaf2eaa-8f88-44ca-812e-41b3cd2b7a90
   */
  flowId?: string;
  /**
   * @example
   * skillgroup@ccc-test
   */
  queueId?: string;
  queueName?: string;
  /**
   * @example
   * 1
   */
  queueType?: number;
  static names(): { [key: string]: string } {
    return {
      eventSequence: 'EventSequence',
      flowId: 'FlowId',
      queueId: 'QueueId',
      queueName: 'QueueName',
      queueType: 'QueueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSequence: { 'type': 'array', 'itemType': GetCallDetailRecordResponseBodyDataQueueEventsEventSequence },
      flowId: 'string',
      queueId: 'string',
      queueName: 'string',
      queueType: 'number',
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

