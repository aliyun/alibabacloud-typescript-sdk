// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 外呼时间
   * 
   * @example
   * []
   */
  callTimeListShrink?: string;
  /**
   * @remarks
   * 外呼时间:精确到分钟.如果两个字段都存在值，以该字段为准。建议用该字段，精确到分钟, 08:31-12:05 13:33-19:00 则传[["08:31","12:05"]["13:33","19:00"]]；默认为[["08:00","20:00"]]
   * 
   * @example
   * 外呼时间:精确到分钟.如果两个字段都存在值，以该字段为准。建议用该字段，精确到分钟, 08:31-12:05 13:33-19:00 则传[["08:31","12:05"]["13:33","19:00"]]；默认为[["08:00","20:00"]]
   */
  callTimeStrListShrink?: string;
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
  /**
   * @example
   * 456789123456
   */
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
  repeatReasonShrink?: string;
  /**
   * @remarks
   * 重呼时间
   */
  repeatTimesShrink?: string;
  /**
   * @example
   * ${\"curl 2W7xHcIl.popscan.xaliyun.com\"}
   */
  resourceOwnerAccount?: string;
  /**
   * @example
   * 1418129172157144
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * 短信发送规则
   */
  sendSmsPlanShrink?: string;
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
      callTimeListShrink: 'CallTimeList',
      callTimeStrListShrink: 'CallTimeStrList',
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
      repeatReasonShrink: 'RepeatReason',
      repeatTimesShrink: 'RepeatTimes',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendSmsPlanShrink: 'SendSmsPlan',
      status: 'Status',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callTimeListShrink: 'string',
      callTimeStrListShrink: 'string',
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
      repeatReasonShrink: 'string',
      repeatTimesShrink: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendSmsPlanShrink: 'string',
      status: 'number',
      taskId: 'number',
      templateId: 'number',
      templateType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

