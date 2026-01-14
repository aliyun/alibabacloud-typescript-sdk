// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskListResponseBodyModelIntentTags extends $dara.Model {
  /**
   * @remarks
   * 意向标签描述
   * 
   * @example
   * 示例值示例值
   */
  intentDescription?: string;
  /**
   * @remarks
   * 意向标签ID
   * 
   * @example
   * 示例值示例值
   */
  intentTag?: string;
  static names(): { [key: string]: string } {
    return {
      intentDescription: 'IntentDescription',
      intentTag: 'IntentTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentDescription: 'string',
      intentTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskListResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * 外呼时间段
   * 
   * @example
   * “8:00~20:30”
   */
  allowCallTime?: string;
  /**
   * @remarks
   * 外呼时间段格式化
   * 
   * @example
   * “8:00 ~ 20:00”
   */
  allowCallTimeFormat?: string;
  /**
   * @remarks
   * 外呼时间
   * 
   * @example
   * “1,2,3”
   */
  allowDayOfWeek?: string;
  /**
   * @remarks
   * 外呼类型
   * 
   * @example
   * 95
   */
  callType?: number;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2023-04-05 12:11:11
   */
  createTime?: string;
  /**
   * @remarks
   * 闪信模板id
   * 
   * @example
   * 99
   */
  flashSmsTemplateId?: number;
  /**
   * @remarks
   * 闪信模板名称
   * 
   * @example
   * 示例值示例值示例值
   */
  flashSmsTemplateName?: string;
  /**
   * @remarks
   * 发送闪信配置，可选0，1；0表示否，1表示是
   * 
   * @example
   * 1
   */
  flashSmsType?: number;
  /**
   * @remarks
   * 最近导入时间
   * 
   * @example
   * 2023-04-05 12:11:11
   */
  importTime?: string;
  /**
   * @remarks
   * 意向标签列表
   */
  intentTags?: TaskListResponseBodyModelIntentTags[];
  /**
   * @remarks
   * 接通重呼次数
   * 
   * @example
   * 31
   */
  invalidReCall?: number;
  /**
   * @remarks
   * 最后外呼时间
   * 
   * @example
   * 2023-04-05 12:11:11
   */
  lastCallTime?: string;
  /**
   * @remarks
   * 最大并发数
   * 
   * @example
   * 95
   */
  maxConcurrency?: number;
  /**
   * @remarks
   * 个性标签列表
   */
  personalityTags?: string[];
  /**
   * @remarks
   * 优先任务
   * 
   * @example
   * 66
   */
  priority?: number;
  /**
   * @remarks
   * 任务所需参数
   * 
   * @example
   * 示例值示例值
   */
  properties?: string;
  /**
   * @remarks
   * 自动重呼
   * 
   * @example
   * 20
   */
  recallType?: number;
  /**
   * @remarks
   * 发送短信
   * 
   * @example
   * 39
   */
  sendSms?: number;
  /**
   * @remarks
   * 短信模板
   * 
   * @example
   * 示例值示例值
   */
  smsName?: string;
  /**
   * @remarks
   * 任务状态
   * 
   * @example
   * 79
   */
  status?: number;
  /**
   * @remarks
   * 任务ID
   * 
   * @example
   * 68
   */
  taskId?: number;
  /**
   * @remarks
   * 任务名称
   * 
   * @example
   * 示例值示例值
   */
  taskName?: string;
  /**
   * @remarks
   * 话术模板Id
   * 
   * @example
   * 示例值示例值示例值
   */
  templateId?: string;
  /**
   * @remarks
   * 话术模板名称
   * 
   * @example
   * 示例值示例值
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      allowCallTime: 'AllowCallTime',
      allowCallTimeFormat: 'AllowCallTimeFormat',
      allowDayOfWeek: 'AllowDayOfWeek',
      callType: 'CallType',
      createTime: 'CreateTime',
      flashSmsTemplateId: 'FlashSmsTemplateId',
      flashSmsTemplateName: 'FlashSmsTemplateName',
      flashSmsType: 'FlashSmsType',
      importTime: 'ImportTime',
      intentTags: 'IntentTags',
      invalidReCall: 'InvalidReCall',
      lastCallTime: 'LastCallTime',
      maxConcurrency: 'MaxConcurrency',
      personalityTags: 'PersonalityTags',
      priority: 'Priority',
      properties: 'Properties',
      recallType: 'RecallType',
      sendSms: 'SendSms',
      smsName: 'SmsName',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCallTime: 'string',
      allowCallTimeFormat: 'string',
      allowDayOfWeek: 'string',
      callType: 'number',
      createTime: 'string',
      flashSmsTemplateId: 'number',
      flashSmsTemplateName: 'string',
      flashSmsType: 'number',
      importTime: 'string',
      intentTags: { 'type': 'array', 'itemType': TaskListResponseBodyModelIntentTags },
      invalidReCall: 'number',
      lastCallTime: 'string',
      maxConcurrency: 'number',
      personalityTags: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      properties: 'string',
      recallType: 'number',
      sendSms: 'number',
      smsName: 'string',
      status: 'number',
      taskId: 'number',
      taskName: 'string',
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.intentTags)) {
      $dara.Model.validateArray(this.intentTags);
    }
    if(Array.isArray(this.personalityTags)) {
      $dara.Model.validateArray(this.personalityTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskListResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 30
   */
  code?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  model?: TaskListResponseBodyModel[];
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 80
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      message: 'string',
      model: { 'type': 'array', 'itemType': TaskListResponseBodyModel },
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.model)) {
      $dara.Model.validateArray(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

