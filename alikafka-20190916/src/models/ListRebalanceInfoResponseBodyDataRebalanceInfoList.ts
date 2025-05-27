// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRebalanceInfoResponseBodyDataRebalanceInfoList extends $dara.Model {
  /**
   * @example
   * 100
   */
  generation?: number;
  /**
   * @example
   * kafka-test
   */
  groupId?: string;
  /**
   * @example
   * 1709199270
   */
  lastRebalanceTimestamp?: number;
  /**
   * @example
   * removing member consumer-1-cd14eb9c-379b-4b8e-9bbd-76f147f8536f on LeaveGroup
   */
  reason?: string;
  /**
   * @example
   * true
   */
  rebalanceSuccess?: boolean;
  /**
   * @example
   * 12
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

