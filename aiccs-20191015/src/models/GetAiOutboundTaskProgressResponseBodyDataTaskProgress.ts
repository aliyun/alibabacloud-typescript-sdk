// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiOutboundTaskProgressResponseBodyDataTaskProgress extends $dara.Model {
  /**
   * @example
   * 2
   */
  callingCount?: number;
  /**
   * @example
   * 2
   */
  connectCount?: number;
  /**
   * @example
   * 0.2
   */
  connectRate?: number;
  /**
   * @example
   * 2
   */
  finishCount?: number;
  /**
   * @example
   * 0.20
   */
  finishRate?: number;
  /**
   * @example
   * 2
   */
  servicerPickupCount?: number;
  /**
   * @example
   * 0.2
   */
  servicerPickupRate?: number;
  /**
   * @example
   * 2
   */
  terminateCount?: number;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @example
   * 2
   */
  userPickupCount?: number;
  /**
   * @example
   * 0.2
   */
  userPickupRate?: number;
  /**
   * @example
   * 2
   */
  waitingCallCount?: number;
  /**
   * @example
   * 2
   */
  waitingRecallCount?: number;
  static names(): { [key: string]: string } {
    return {
      callingCount: 'CallingCount',
      connectCount: 'ConnectCount',
      connectRate: 'ConnectRate',
      finishCount: 'FinishCount',
      finishRate: 'FinishRate',
      servicerPickupCount: 'ServicerPickupCount',
      servicerPickupRate: 'ServicerPickupRate',
      terminateCount: 'TerminateCount',
      totalCount: 'TotalCount',
      userPickupCount: 'UserPickupCount',
      userPickupRate: 'UserPickupRate',
      waitingCallCount: 'WaitingCallCount',
      waitingRecallCount: 'WaitingRecallCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingCount: 'number',
      connectCount: 'number',
      connectRate: 'number',
      finishCount: 'number',
      finishRate: 'number',
      servicerPickupCount: 'number',
      servicerPickupRate: 'number',
      terminateCount: 'number',
      totalCount: 'number',
      userPickupCount: 'number',
      userPickupRate: 'number',
      waitingCallCount: 'number',
      waitingRecallCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

