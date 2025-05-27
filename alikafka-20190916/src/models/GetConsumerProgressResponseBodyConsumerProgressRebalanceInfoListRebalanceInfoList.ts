// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerProgressResponseBodyConsumerProgressRebalanceInfoListRebalanceInfoList extends $dara.Model {
  /**
   * @remarks
   * The number of rebalances.
   * 
   * @example
   * 100
   */
  generation?: number;
  /**
   * @remarks
   * The group ID of the subscriber.
   * 
   * @example
   * falcon-uat
   */
  groupId?: string;
  /**
   * @remarks
   * The time when the last rebalance occurred. Unit: milliseconds.
   * 
   * @example
   * 1709199270
   */
  lastRebalanceTimestamp?: number;
  /**
   * @remarks
   * The cause of the rebalance.
   * 
   * @example
   * removing member consumer-1-cd14eb9c-379b-4b8e-9bbd-76f147f8536f on LeaveGroup
   */
  reason?: string;
  /**
   * @remarks
   * Indicates whether new members are added to the consumer group in the rebalance.
   * 
   * @example
   * true
   */
  rebalanceSuccess?: boolean;
  /**
   * @remarks
   * The duration of the rebalance. Unit: milliseconds.
   * 
   * @example
   * 1
   */
  rebalanceTimeConsuming?: number;
  static names(): { [key: string]: string } {
    return {
      generation: 'Generation',
      groupId: 'GroupId',
      lastRebalanceTimestamp: 'LastRebalanceTimestamp',
      reason: 'Reason',
      rebalanceSuccess: 'RebalanceSuccess',
      rebalanceTimeConsuming: 'RebalanceTimeConsuming',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generation: 'number',
      groupId: 'string',
      lastRebalanceTimestamp: 'number',
      reason: 'string',
      rebalanceSuccess: 'boolean',
      rebalanceTimeConsuming: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

