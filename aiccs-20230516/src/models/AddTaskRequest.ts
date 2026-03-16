// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTaskRequestCallTimeList extends $dara.Model {
  callTime?: string[];
  static names(): { [key: string]: string } {
    return {
      callTime: 'CallTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callTime: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.callTime)) {
      $dara.Model.validateArray(this.callTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTaskRequestCallTimeStrList extends $dara.Model {
  /**
   * @example
   * ["08:31","12:05"]
   */
  callTime?: string[];
  static names(): { [key: string]: string } {
    return {
      callTime: 'CallTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callTime: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.callTime)) {
      $dara.Model.validateArray(this.callTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTaskRequestSendSmsPlan extends $dara.Model {
  /**
   * @remarks
   * 意向标签
   */
  intentTags?: string[];
  /**
   * @remarks
   * 短信模板ID
   * 
   * @example
   * 71
   */
  smsTemplateId?: number;
  static names(): { [key: string]: string } {
    return {
      intentTags: 'IntentTags',
      smsTemplateId: 'SmsTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentTags: { 'type': 'array', 'itemType': 'string' },
      smsTemplateId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.intentTags)) {
      $dara.Model.validateArray(this.intentTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTaskRequest extends $dara.Model {
  /**
   * @remarks
   * 外呼时间
   */
  callTimeList?: AddTaskRequestCallTimeList[];
  /**
   * @remarks
   * 外呼时间:精确到分钟.如果两个字段都存在值，以该字段为准。建议用该字段，精确到分钟, 08:31-12:05 13:33-19:00 则传[["08:31","12:05"]["13:33","19:00"]]；默认为[["08:00","20:00"]]
   * 
   * @example
   * [["08:31","12:05"]["13:33","19:00"]]
   */
  callTimeStrList?: AddTaskRequestCallTimeStrList[];
  /**
   * @remarks
   * 回调地址
   * 
   * @example
   * 示例值示例值示例值
   */
  callbackUrl?: string;
  /**
   * @remarks
   * 当发送闪信配置为1时，闪信模板ID必填
   * 
   * @example
   * 96
   */
  flashSmsTemplateId?: number;
  /**
   * @remarks
   * 发送闪信配置
   * 
   * @example
   * 0
   */
  flashSmsType?: number;
  /**
   * @remarks
   * 并发数
   * 
   * @example
   * 99
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * 任务名称
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  name?: string;
  /**
   * @example
   * 1234567890
   */
  ownerId?: number;
  /**
   * @remarks
   * 播放间隔时长
   * 
   * @example
   * 89
   */
  playSleepVal?: number;
  /**
   * @remarks
   * 录音播放次数
   * 
   * @example
   * 51
   */
  playTimes?: number;
  /**
   * @remarks
   * 重呼配置
   * 
   * @example
   * 53
   */
  recallType?: number;
  /**
   * @remarks
   * 录音地址
   * 
   * @example
   * 示例值
   */
  recordPath?: string;
  /**
   * @remarks
   * 重呼次数
   * 
   * @example
   * 37
   */
  repeatCount?: number;
  /**
   * @remarks
   * 重呼间隔
   * 
   * @example
   * 14
   */
  repeatInterval?: number;
  /**
   * @remarks
   * 重呼条件
   */
  repeatReason?: string[];
  /**
   * @remarks
   * 重呼时间
   */
  repeatTimes?: string[];
  /**
   * @example
   * example@aliyun.com
   */
  resourceOwnerAccount?: string;
  /**
   * @example
   * 1885017412614451
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * 短信发送规则
   */
  sendSmsPlan?: AddTaskRequestSendSmsPlan[];
  /**
   * @remarks
   * 任务启动日期
   * 
   * @example
   * 2022-09-16
   */
  startTime?: string;
  /**
   * @remarks
   * 任务类型
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  taskType?: number;
  /**
   * @remarks
   * 话术模板ID
   * 
   * @example
   * 17
   */
  templateId?: number;
  /**
   * @remarks
   * 话术模板类型
   * 
   * @example
   * 1
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      callTimeList: 'CallTimeList',
      callTimeStrList: 'CallTimeStrList',
      callbackUrl: 'CallbackUrl',
      flashSmsTemplateId: 'FlashSmsTemplateId',
      flashSmsType: 'FlashSmsType',
      maxConcurrency: 'MaxConcurrency',
      name: 'Name',
      ownerId: 'OwnerId',
      playSleepVal: 'PlaySleepVal',
      playTimes: 'PlayTimes',
      recallType: 'RecallType',
      recordPath: 'RecordPath',
      repeatCount: 'RepeatCount',
      repeatInterval: 'RepeatInterval',
      repeatReason: 'RepeatReason',
      repeatTimes: 'RepeatTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendSmsPlan: 'SendSmsPlan',
      startTime: 'StartTime',
      taskType: 'TaskType',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callTimeList: { 'type': 'array', 'itemType': AddTaskRequestCallTimeList },
      callTimeStrList: { 'type': 'array', 'itemType': AddTaskRequestCallTimeStrList },
      callbackUrl: 'string',
      flashSmsTemplateId: 'number',
      flashSmsType: 'number',
      maxConcurrency: 'number',
      name: 'string',
      ownerId: 'number',
      playSleepVal: 'number',
      playTimes: 'number',
      recallType: 'number',
      recordPath: 'string',
      repeatCount: 'number',
      repeatInterval: 'number',
      repeatReason: { 'type': 'array', 'itemType': 'string' },
      repeatTimes: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendSmsPlan: { 'type': 'array', 'itemType': AddTaskRequestSendSmsPlan },
      startTime: 'string',
      taskType: 'number',
      templateId: 'number',
      templateType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.callTimeList)) {
      $dara.Model.validateArray(this.callTimeList);
    }
    if(Array.isArray(this.callTimeStrList)) {
      $dara.Model.validateArray(this.callTimeStrList);
    }
    if(Array.isArray(this.repeatReason)) {
      $dara.Model.validateArray(this.repeatReason);
    }
    if(Array.isArray(this.repeatTimes)) {
      $dara.Model.validateArray(this.repeatTimes);
    }
    if(Array.isArray(this.sendSmsPlan)) {
      $dara.Model.validateArray(this.sendSmsPlan);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

