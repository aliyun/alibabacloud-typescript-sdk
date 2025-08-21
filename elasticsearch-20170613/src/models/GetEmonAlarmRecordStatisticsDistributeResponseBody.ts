// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEmonAlarmRecordStatisticsDistributeResponseBodyResultAlarmGroupTotal extends $dara.Model {
  alarmGroup?: string;
  compare?: string;
  count?: number;
  level?: string;
  receiver?: string;
  time?: number;
  today?: number;
  type?: string;
  yesterday?: number;
  static names(): { [key: string]: string } {
    return {
      alarmGroup: 'alarmGroup',
      compare: 'compare',
      count: 'count',
      level: 'level',
      receiver: 'receiver',
      time: 'time',
      today: 'today',
      type: 'type',
      yesterday: 'yesterday',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmGroup: 'string',
      compare: 'string',
      count: 'number',
      level: 'string',
      receiver: 'string',
      time: 'number',
      today: 'number',
      type: 'string',
      yesterday: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmonAlarmRecordStatisticsDistributeResponseBodyResultChannelTotal extends $dara.Model {
  alarmGroup?: string;
  compare?: string;
  count?: number;
  level?: string;
  receiver?: string;
  time?: number;
  today?: number;
  type?: string;
  yesterday?: number;
  static names(): { [key: string]: string } {
    return {
      alarmGroup: 'alarmGroup',
      compare: 'compare',
      count: 'count',
      level: 'level',
      receiver: 'receiver',
      time: 'time',
      today: 'today',
      type: 'type',
      yesterday: 'yesterday',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmGroup: 'string',
      compare: 'string',
      count: 'number',
      level: 'string',
      receiver: 'string',
      time: 'number',
      today: 'number',
      type: 'string',
      yesterday: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmonAlarmRecordStatisticsDistributeResponseBodyResultLevelTotal extends $dara.Model {
  alarmGroup?: string;
  compare?: string;
  count?: number;
  level?: string;
  receiver?: string;
  time?: number;
  today?: number;
  type?: string;
  yesterday?: number;
  static names(): { [key: string]: string } {
    return {
      alarmGroup: 'alarmGroup',
      compare: 'compare',
      count: 'count',
      level: 'level',
      receiver: 'receiver',
      time: 'time',
      today: 'today',
      type: 'type',
      yesterday: 'yesterday',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmGroup: 'string',
      compare: 'string',
      count: 'number',
      level: 'string',
      receiver: 'string',
      time: 'number',
      today: 'number',
      type: 'string',
      yesterday: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmonAlarmRecordStatisticsDistributeResponseBodyResultReceiverTotal extends $dara.Model {
  alarmGroup?: string;
  compare?: string;
  count?: number;
  level?: string;
  receiver?: string;
  time?: number;
  today?: number;
  type?: string;
  yesterday?: number;
  static names(): { [key: string]: string } {
    return {
      alarmGroup: 'alarmGroup',
      compare: 'compare',
      count: 'count',
      level: 'level',
      receiver: 'receiver',
      time: 'time',
      today: 'today',
      type: 'type',
      yesterday: 'yesterday',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmGroup: 'string',
      compare: 'string',
      count: 'number',
      level: 'string',
      receiver: 'string',
      time: 'number',
      today: 'number',
      type: 'string',
      yesterday: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmonAlarmRecordStatisticsDistributeResponseBodyResultStatistics extends $dara.Model {
  alarmGroup?: string;
  compare?: string;
  count?: number;
  level?: string;
  receiver?: string;
  time?: number;
  today?: number;
  type?: string;
  yesterday?: number;
  static names(): { [key: string]: string } {
    return {
      alarmGroup: 'alarmGroup',
      compare: 'compare',
      count: 'count',
      level: 'level',
      receiver: 'receiver',
      time: 'time',
      today: 'today',
      type: 'type',
      yesterday: 'yesterday',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmGroup: 'string',
      compare: 'string',
      count: 'number',
      level: 'string',
      receiver: 'string',
      time: 'number',
      today: 'number',
      type: 'string',
      yesterday: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmonAlarmRecordStatisticsDistributeResponseBodyResult extends $dara.Model {
  alarmGroup?: string;
  alarmGroupTotal?: GetEmonAlarmRecordStatisticsDistributeResponseBodyResultAlarmGroupTotal[];
  channelTotal?: GetEmonAlarmRecordStatisticsDistributeResponseBodyResultChannelTotal[];
  count?: number;
  levelTotal?: GetEmonAlarmRecordStatisticsDistributeResponseBodyResultLevelTotal[];
  receiverTotal?: GetEmonAlarmRecordStatisticsDistributeResponseBodyResultReceiverTotal[];
  statistics?: GetEmonAlarmRecordStatisticsDistributeResponseBodyResultStatistics[];
  static names(): { [key: string]: string } {
    return {
      alarmGroup: 'alarmGroup',
      alarmGroupTotal: 'alarmGroupTotal',
      channelTotal: 'channelTotal',
      count: 'count',
      levelTotal: 'levelTotal',
      receiverTotal: 'receiverTotal',
      statistics: 'statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmGroup: 'string',
      alarmGroupTotal: { 'type': 'array', 'itemType': GetEmonAlarmRecordStatisticsDistributeResponseBodyResultAlarmGroupTotal },
      channelTotal: { 'type': 'array', 'itemType': GetEmonAlarmRecordStatisticsDistributeResponseBodyResultChannelTotal },
      count: 'number',
      levelTotal: { 'type': 'array', 'itemType': GetEmonAlarmRecordStatisticsDistributeResponseBodyResultLevelTotal },
      receiverTotal: { 'type': 'array', 'itemType': GetEmonAlarmRecordStatisticsDistributeResponseBodyResultReceiverTotal },
      statistics: { 'type': 'array', 'itemType': GetEmonAlarmRecordStatisticsDistributeResponseBodyResultStatistics },
    };
  }

  validate() {
    if(Array.isArray(this.alarmGroupTotal)) {
      $dara.Model.validateArray(this.alarmGroupTotal);
    }
    if(Array.isArray(this.channelTotal)) {
      $dara.Model.validateArray(this.channelTotal);
    }
    if(Array.isArray(this.levelTotal)) {
      $dara.Model.validateArray(this.levelTotal);
    }
    if(Array.isArray(this.receiverTotal)) {
      $dara.Model.validateArray(this.receiverTotal);
    }
    if(Array.isArray(this.statistics)) {
      $dara.Model.validateArray(this.statistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmonAlarmRecordStatisticsDistributeResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: GetEmonAlarmRecordStatisticsDistributeResponseBodyResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: GetEmonAlarmRecordStatisticsDistributeResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

