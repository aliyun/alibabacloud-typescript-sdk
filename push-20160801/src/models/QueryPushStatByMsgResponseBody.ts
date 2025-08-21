// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPushStatByMsgResponseBodyPushStatsPushStat extends $dara.Model {
  /**
   * @example
   * 120
   */
  acceptCount?: number;
  /**
   * @example
   * 10
   */
  deletedCount?: number;
  /**
   * @example
   * 510427
   */
  messageId?: string;
  /**
   * @example
   * 30
   */
  openedCount?: number;
  /**
   * @example
   * 60
   */
  receivedCount?: number;
  /**
   * @example
   * 100
   */
  sentCount?: number;
  /**
   * @example
   * 0
   */
  smsFailedCount?: number;
  /**
   * @example
   * 0
   */
  smsReceiveFailedCount?: number;
  /**
   * @example
   * 0
   */
  smsReceiveSuccessCount?: number;
  /**
   * @example
   * 0
   */
  smsSentCount?: number;
  /**
   * @example
   * 0
   */
  smsSkipCount?: number;
  static names(): { [key: string]: string } {
    return {
      acceptCount: 'AcceptCount',
      deletedCount: 'DeletedCount',
      messageId: 'MessageId',
      openedCount: 'OpenedCount',
      receivedCount: 'ReceivedCount',
      sentCount: 'SentCount',
      smsFailedCount: 'SmsFailedCount',
      smsReceiveFailedCount: 'SmsReceiveFailedCount',
      smsReceiveSuccessCount: 'SmsReceiveSuccessCount',
      smsSentCount: 'SmsSentCount',
      smsSkipCount: 'SmsSkipCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptCount: 'number',
      deletedCount: 'number',
      messageId: 'string',
      openedCount: 'number',
      receivedCount: 'number',
      sentCount: 'number',
      smsFailedCount: 'number',
      smsReceiveFailedCount: 'number',
      smsReceiveSuccessCount: 'number',
      smsSentCount: 'number',
      smsSkipCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByMsgResponseBodyPushStats extends $dara.Model {
  pushStat?: QueryPushStatByMsgResponseBodyPushStatsPushStat[];
  static names(): { [key: string]: string } {
    return {
      pushStat: 'PushStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushStat: { 'type': 'array', 'itemType': QueryPushStatByMsgResponseBodyPushStatsPushStat },
    };
  }

  validate() {
    if(Array.isArray(this.pushStat)) {
      $dara.Model.validateArray(this.pushStat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByMsgResponseBody extends $dara.Model {
  pushStats?: QueryPushStatByMsgResponseBodyPushStats;
  /**
   * @example
   * CF195C34-98FB-491A-98D7-19CBC1FA880B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pushStats: 'PushStats',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushStats: QueryPushStatByMsgResponseBodyPushStats,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pushStats && typeof (this.pushStats as any).validate === 'function') {
      (this.pushStats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

