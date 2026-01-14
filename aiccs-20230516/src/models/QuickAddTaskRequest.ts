// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuickAddTaskRequestCallTimeList extends $dara.Model {
  /**
   * @remarks
   * 外呼时间
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

export class QuickAddTaskRequest extends $dara.Model {
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
  callTimeList?: QuickAddTaskRequestCallTimeList[];
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
  resourceOwnerAccount?: string;
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
      callTimeList: 'CallTimeList',
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
      callTimeList: { 'type': 'array', 'itemType': QuickAddTaskRequestCallTimeList },
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
    if(Array.isArray(this.callTimeList)) {
      $dara.Model.validateArray(this.callTimeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

