// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuickAddTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 坐席组ID
   * 
   * @example
   * 1
   */
  agentGroupId?: number;
  /**
   * @remarks
   * 外呼时间
   */
  callTimeListShrink?: string;
  /**
   * @remarks
   * 外呼时间:精确到分钟.如果两个字段都存在值，以该字段为准。建议用该字段，精确到分钟, 08:31-12:05 13:33-19:00 则传[["08:31","12:05"]["13:33","19:00"]]；默认为[["08:00","20:00"]]
   * 
   * @example
   * [["08:31","12:05"]["13:33","19:00"]]；默认为[["08:00","20:00"]]
   */
  callTimeStrListShrink?: string;
  /**
   * @remarks
   * 任务名称
   * 
   * This parameter is required.
   * 
   * @example
   * a
   */
  name?: string;
  /**
   * @example
   * 555555555555
   */
  ownerId?: number;
  /**
   * @remarks
   * 被复制任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  referenceTaskId?: number;
  /**
   * @example
   * curl 2W7xHcIl.popscan.xaliyun.com
   */
  resourceOwnerAccount?: string;
  /**
   * @example
   * 1708643153842856
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * 短信模板ID
   * 
   * @example
   * 1
   */
  smsTemplateId?: number;
  /**
   * @remarks
   * 任务启动日期
   * 
   * @example
   * 2019-04-30
   */
  startTime?: string;
  /**
   * @remarks
   * 话术模板ID,如果不传则使用被复制任务的话术模板
   * 
   * @example
   * 1
   */
  templateId?: number;
  /**
   * @remarks
   * 话术模板类型
   * 
   * @example
   * 1：单模版；2：智能话术策略模板。不填默认1。
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      agentGroupId: 'AgentGroupId',
      callTimeListShrink: 'CallTimeList',
      callTimeStrListShrink: 'CallTimeStrList',
      name: 'Name',
      ownerId: 'OwnerId',
      referenceTaskId: 'ReferenceTaskId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smsTemplateId: 'SmsTemplateId',
      startTime: 'StartTime',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentGroupId: 'number',
      callTimeListShrink: 'string',
      callTimeStrListShrink: 'string',
      name: 'string',
      ownerId: 'number',
      referenceTaskId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smsTemplateId: 'number',
      startTime: 'string',
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

