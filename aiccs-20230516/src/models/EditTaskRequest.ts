// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditTaskRequestCallTimeList extends $dara.Model {
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

export class EditTaskRequestSendSmsPlan extends $dara.Model {
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
   * 1
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

export class EditTaskRequest extends $dara.Model {
  /**
   * @remarks
   * 外呼时间
   */
  callTimeList?: EditTaskRequestCallTimeList[];
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
   * 60
   */
  flashSmsTemplateId?: number;
  /**
   * @remarks
   * 发送闪信配置,默认为0,0不发送闪信.1发送闪信
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
   * 83
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * 任务名称
   * 
   * @example
   * 示例值示例值
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * 播放间隔时长
   * 
   * @example
   * 29
   */
  playSleepVal?: number;
  /**
   * @remarks
   * 录音播放次数
   * 
   * @example
   * 60
   */
  playTimes?: number;
  /**
   * @remarks
   * 重呼配置
   * 
   * @example
   * 1
   */
  recallType?: number;
  /**
   * @remarks
   * 录音地址
   * 
   * @example
   * 示例值示例值示例值
   */
  recordPath?: string;
  /**
   * @remarks
   * 重呼次数
   * 
   * @example
   * 51
   */
  repeatCount?: number;
  /**
   * @remarks
   * 重呼间隔
   * 
   * @example
   * 91
   */
  repeatInterval?: number;
  /**
   * @remarks
   * 重呼条件
   */
  repeatReason?: number[];
  /**
   * @remarks
   * 重呼时间
   */
  repeatTimes?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 短信发送规则
   */
  sendSmsPlan?: EditTaskRequestSendSmsPlan[];
  /**
   * @remarks
   * 任务状态
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * 任务id
   * 
   * This parameter is required.
   * 
   * @example
   * 29
   */
  taskId?: number;
  /**
   * @remarks
   * 话术模板ID
   * 
   * @example
   * 24
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
      status: 'Status',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callTimeList: { 'type': 'array', 'itemType': EditTaskRequestCallTimeList },
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
      repeatReason: { 'type': 'array', 'itemType': 'number' },
      repeatTimes: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendSmsPlan: { 'type': 'array', 'itemType': EditTaskRequestSendSmsPlan },
      status: 'number',
      taskId: 'number',
      templateId: 'number',
      templateType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.callTimeList)) {
      $dara.Model.validateArray(this.callTimeList);
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

