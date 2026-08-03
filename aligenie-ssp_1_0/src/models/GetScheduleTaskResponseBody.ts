// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduleTaskResponseBodyResultActionTopicList extends $dara.Model {
  /**
   * @remarks
   * Vendor-defined command
   * 
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
  /**
   * @remarks
   * Trigger behavior
   */
  actionTopicList?: GetScheduleTaskResponseBodyResultActionTopicList[];
  /**
   * @remarks
   * Trigger Cron Expression
   * 
   * @example
   * 0 10 20 30 6 ? 2022
   */
  cron?: string;
  /**
   * @remarks
   * Validity Period - End Time
   * 
   * @example
   * 1659169473000
   */
  scheduleEndTime?: string;
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * 1234567
   */
  scheduleId?: number;
  /**
   * @remarks
   * Validity Period - Start Time
   * 
   * @example
   * 1656577473000
   */
  scheduleStartTime?: string;
  /**
   * @remarks
   * Schedule Type
   * 
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
   * @remarks
   * Response code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * 调用成功
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * F7E21065-6C21-1158-A2F9-AEFE5CAB7C94
   */
  requestId?: string;
  /**
   * @remarks
   * Service response parameters
   */
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

