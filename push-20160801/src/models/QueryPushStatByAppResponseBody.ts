// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPushStatByAppResponseBodyAppPushStatsAppPushStat extends $dara.Model {
  acceptCount?: number;
  deletedCount?: number;
  openedCount?: number;
  receivedCount?: number;
  sentCount?: number;
  smsFailedCount?: number;
  smsReceiveFailedCount?: number;
  smsReceiveSuccessCount?: number;
  smsSentCount?: number;
  smsSkipCount?: number;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      acceptCount: 'AcceptCount',
      deletedCount: 'DeletedCount',
      openedCount: 'OpenedCount',
      receivedCount: 'ReceivedCount',
      sentCount: 'SentCount',
      smsFailedCount: 'SmsFailedCount',
      smsReceiveFailedCount: 'SmsReceiveFailedCount',
      smsReceiveSuccessCount: 'SmsReceiveSuccessCount',
      smsSentCount: 'SmsSentCount',
      smsSkipCount: 'SmsSkipCount',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptCount: 'number',
      deletedCount: 'number',
      openedCount: 'number',
      receivedCount: 'number',
      sentCount: 'number',
      smsFailedCount: 'number',
      smsReceiveFailedCount: 'number',
      smsReceiveSuccessCount: 'number',
      smsSentCount: 'number',
      smsSkipCount: 'number',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByAppResponseBodyAppPushStats extends $dara.Model {
  appPushStat?: QueryPushStatByAppResponseBodyAppPushStatsAppPushStat[];
  static names(): { [key: string]: string } {
    return {
      appPushStat: 'AppPushStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPushStat: { 'type': 'array', 'itemType': QueryPushStatByAppResponseBodyAppPushStatsAppPushStat },
    };
  }

  validate() {
    if(Array.isArray(this.appPushStat)) {
      $dara.Model.validateArray(this.appPushStat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushStatByAppResponseBody extends $dara.Model {
  appPushStats?: QueryPushStatByAppResponseBodyAppPushStats;
  /**
   * @example
   * 9998B3CC-ED9E-4CB3-A8FB-DCC61296BFBC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appPushStats: 'AppPushStats',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPushStats: QueryPushStatByAppResponseBodyAppPushStats,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appPushStats && typeof (this.appPushStats as any).validate === 'function') {
      (this.appPushStats as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

