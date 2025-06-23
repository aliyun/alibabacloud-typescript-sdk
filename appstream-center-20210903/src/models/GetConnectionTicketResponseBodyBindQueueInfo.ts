// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetConnectionTicketResponseBodyBindQueueInfo extends $dara.Model {
  queueStatus?: string;
  rank?: number;
  readyTimeout?: number;
  remainingTime?: number;
  requestKey?: string;
  targetId?: string;
  waitTime?: number;
  static names(): { [key: string]: string } {
    return {
      queueStatus: 'QueueStatus',
      rank: 'Rank',
      readyTimeout: 'ReadyTimeout',
      remainingTime: 'RemainingTime',
      requestKey: 'RequestKey',
      targetId: 'TargetId',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueStatus: 'string',
      rank: 'number',
      readyTimeout: 'number',
      remainingTime: 'number',
      requestKey: 'string',
      targetId: 'string',
      waitTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

