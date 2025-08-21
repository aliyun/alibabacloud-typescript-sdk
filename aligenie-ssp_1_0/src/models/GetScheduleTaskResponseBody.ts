// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduleTaskResponseBodyResultActionTopicList extends $dara.Model {
  /**
   * @example
   * {"k1":"v1","k2":{"key":1}}
   */
  customAction?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      customAction: 'CustomAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAction: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.customAction) {
      $dara.Model.validateMap(this.customAction);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTaskResponseBodyResult extends $dara.Model {
  actionTopicList?: GetScheduleTaskResponseBodyResultActionTopicList[];
  /**
   * @example
   * 0 10 20 30 6 ? 2022
   */
  cron?: string;
  /**
   * @example
   * 1659169473000
   */
  scheduleEndTime?: string;
  /**
   * @example
   * 1234567
   */
  scheduleId?: number;
  /**
   * @example
   * 1656577473000
   */
  scheduleStartTime?: string;
  /**
   * @example
   * ONCE
   */
  scheduleType?: string;
  static names(): { [key: string]: string } {
    return {
      actionTopicList: 'ActionTopicList',
      cron: 'Cron',
      scheduleEndTime: 'ScheduleEndTime',
      scheduleId: 'ScheduleId',
      scheduleStartTime: 'ScheduleStartTime',
      scheduleType: 'ScheduleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionTopicList: { 'type': 'array', 'itemType': GetScheduleTaskResponseBodyResultActionTopicList },
      cron: 'string',
      scheduleEndTime: 'string',
      scheduleId: 'number',
      scheduleStartTime: 'string',
      scheduleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionTopicList)) {
      $dara.Model.validateArray(this.actionTopicList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  message?: string;
  /**
   * @example
   * F7E21065-6C21-1158-A2F9-AEFE5CAB7C94
   */
  requestId?: string;
  result?: GetScheduleTaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: GetScheduleTaskResponseBodyResult,
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

