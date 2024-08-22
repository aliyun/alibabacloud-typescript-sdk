// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddBlacklistRequest extends $tea.Model {
  /**
   * @remarks
   * 有效天数
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  expiredDay?: string;
  /**
   * @remarks
   * 号码列表
   * 
   * This parameter is required.
   */
  numbers?: string[];
  ownerId?: number;
  /**
   * @remarks
   * 备注
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      expiredDay: 'ExpiredDay',
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredDay: 'string',
      numbers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBlacklistShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * 有效天数
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  expiredDay?: string;
  /**
   * @remarks
   * 号码列表
   * 
   * This parameter is required.
   */
  numbersShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * 备注
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      expiredDay: 'ExpiredDay',
      numbersShrink: 'Numbers',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredDay: 'string',
      numbersShrink: 'string',
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBlacklistResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: AddBlacklistResponseBodyModel;
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'number',
      message: 'string',
      model: AddBlacklistResponseBodyModel,
      requestId: 'string',
      success: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBlacklistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddBlacklistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddBlacklistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTaskRequest extends $tea.Model {
  /**
   * @remarks
   * 外呼时间
   */
  callTimeList?: AddTaskRequestCallTimeList[];
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
  resourceOwnerAccount?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTaskShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * 外呼时间
   */
  callTimeListShrink?: string;
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
  repeatReasonShrink?: string;
  /**
   * @remarks
   * 重呼时间
   */
  repeatTimesShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 短信发送规则
   */
  sendSmsPlanShrink?: string;
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
      callTimeListShrink: 'CallTimeList',
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
      startTime: 'StartTime',
      taskType: 'TaskType',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callTimeListShrink: 'string',
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
      startTime: 'string',
      taskType: 'number',
      templateId: 'number',
      templateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTaskResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值
   */
  message?: string;
  model?: AddTaskResponseBodyModel;
  /**
   * @example
   * 5453cc9b-02bc-4dbb-9527-f28a9100b912
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 1686225227338
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
      model: AddTaskResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentCancelCallRequest extends $tea.Model {
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 64
   */
  agentId?: number;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * abc
   */
  agentTag?: string;
  /**
   * @remarks
   * 号码列表
   */
  numbers?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 用户自定义标签列表
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentTag: 'AgentTag',
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentTag: 'string',
      numbers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentCancelCallShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 64
   */
  agentId?: number;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * abc
   */
  agentTag?: string;
  /**
   * @remarks
   * 号码列表
   */
  numbersShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 用户自定义标签列表
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentTag: 'AgentTag',
      numbersShrink: 'Numbers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentTag: 'string',
      numbersShrink: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentCancelCallResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值
   */
  message?: string;
  model?: AgentCancelCallResponseBodyModel;
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'number',
      message: 'string',
      model: AgentCancelCallResponseBodyModel,
      requestId: 'string',
      success: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentCancelCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgentCancelCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgentCancelCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentRecoverCallRequest extends $tea.Model {
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 5
   */
  agentId?: number;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * abc
   */
  agentTag?: string;
  /**
   * @remarks
   * 查询开始导入时间
   * 
   * @example
   * 2020-03-06 10:10:10
   */
  beginImportTime?: string;
  /**
   * @remarks
   * 查询结束导入时间
   * 
   * @example
   * 2021-03-06 10:10:10
   */
  endImportTime?: string;
  /**
   * @remarks
   * 号码列表
   */
  numbers?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 用户自定义标签列表
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentTag: 'AgentTag',
      beginImportTime: 'BeginImportTime',
      endImportTime: 'EndImportTime',
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentTag: 'string',
      beginImportTime: 'string',
      endImportTime: 'string',
      numbers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentRecoverCallShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 5
   */
  agentId?: number;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * abc
   */
  agentTag?: string;
  /**
   * @remarks
   * 查询开始导入时间
   * 
   * @example
   * 2020-03-06 10:10:10
   */
  beginImportTime?: string;
  /**
   * @remarks
   * 查询结束导入时间
   * 
   * @example
   * 2021-03-06 10:10:10
   */
  endImportTime?: string;
  /**
   * @remarks
   * 号码列表
   */
  numbersShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 用户自定义标签列表
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentTag: 'AgentTag',
      beginImportTime: 'BeginImportTime',
      endImportTime: 'EndImportTime',
      numbersShrink: 'Numbers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentTag: 'string',
      beginImportTime: 'string',
      endImportTime: 'string',
      numbersShrink: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentRecoverCallResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: AgentRecoverCallResponseBodyModel;
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'number',
      message: 'string',
      model: AgentRecoverCallResponseBodyModel,
      requestId: 'string',
      success: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentRecoverCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AgentRecoverCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AgentRecoverCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailsRequest extends $tea.Model {
  /**
   * @remarks
   * 批次id
   * 
   * @example
   * 75
   */
  batchId?: number;
  /**
   * @remarks
   * 结束导入时间
   * 
   * @example
   * 2023-04-25 15:19:02
   */
  endTime?: string;
  /**
   * @remarks
   * 号码状态
   * 
   * @example
   * 1
   */
  numberStatus?: number;
  /**
   * @remarks
   * 号码列表
   */
  numbers?: string[];
  ownerId?: number;
  /**
   * @remarks
   * 页数
   * 
   * @example
   * 77
   */
  pageNo?: number;
  /**
   * @remarks
   * 每页条数
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 开始导入时间
   * 
   * @example
   * 2023-04-25 15:19:02
   */
  startTime?: string;
  /**
   * @remarks
   * 任务id
   * 
   * This parameter is required.
   * 
   * @example
   * 90
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      endTime: 'EndTime',
      numberStatus: 'NumberStatus',
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      endTime: 'string',
      numberStatus: 'number',
      numbers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * 批次id
   * 
   * @example
   * 75
   */
  batchId?: number;
  /**
   * @remarks
   * 结束导入时间
   * 
   * @example
   * 2023-04-25 15:19:02
   */
  endTime?: string;
  /**
   * @remarks
   * 号码状态
   * 
   * @example
   * 1
   */
  numberStatus?: number;
  /**
   * @remarks
   * 号码列表
   */
  numbersShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * 页数
   * 
   * @example
   * 77
   */
  pageNo?: number;
  /**
   * @remarks
   * 每页条数
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 开始导入时间
   * 
   * @example
   * 2023-04-25 15:19:02
   */
  startTime?: string;
  /**
   * @remarks
   * 任务id
   * 
   * This parameter is required.
   * 
   * @example
   * 90
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      endTime: 'EndTime',
      numberStatus: 'NumberStatus',
      numbersShrink: 'Numbers',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      endTime: 'string',
      numberStatus: 'number',
      numbersShrink: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailsResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值
   */
  message?: string;
  model?: DetailsResponseBodyModel;
  /**
   * @example
   * 389b2d0a-37e2-406d-b576-1fc0827be46a
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 1686279332221
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'number',
      message: 'string',
      model: DetailsResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditTaskRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditTaskShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * 外呼时间
   */
  callTimeListShrink?: string;
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
  repeatReasonShrink?: string;
  /**
   * @remarks
   * 重呼时间
   */
  repeatTimesShrink?: string;
  resourceOwnerAccount?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditTaskResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: EditTaskResponseBodyModel;
  /**
   * @example
   * 5453cc9b-02bc-4dbb-9527-f28a9100b912
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1686225227338
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
      model: EditTaskResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EditTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EditTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNumberRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  customers?: ImportNumberRequestCustomers[];
  /**
   * @example
   * 0
   */
  failReturn?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 92
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      customers: 'Customers',
      failReturn: 'FailReturn',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customers: { 'type': 'array', 'itemType': ImportNumberRequestCustomers },
      failReturn: 'number',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNumberShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  customersShrink?: string;
  /**
   * @example
   * 0
   */
  failReturn?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 92
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      customersShrink: 'Customers',
      failReturn: 'FailReturn',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customersShrink: 'string',
      failReturn: 'number',
      outId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNumberResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  model?: ImportNumberResponseBodyModel;
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'number',
      message: 'string',
      model: ImportNumberResponseBodyModel,
      requestId: 'string',
      success: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNumberResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageRequest extends $tea.Model {
  numbers?: string[];
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numbers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageShrinkRequest extends $tea.Model {
  numbersShrink?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      numbersShrink: 'Numbers',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numbersShrink: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  model?: PageResponseBodyModel;
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'number',
      message: 'string',
      model: PageResponseBodyModel,
      requestId: 'string',
      success: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsTemplateCreateRequest extends $tea.Model {
  /**
   * @remarks
   * 短信内容
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  content?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 短信签名
   * 
   * This parameter is required.
   * 
   * @example
   * ef2i29fsljf
   */
  sign?: string;
  /**
   * @remarks
   * 短信类型
   * 
   * @example
   * 73
   */
  smsType?: number;
  /**
   * @remarks
   * 模板名称
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  templateName?: string;
  /**
   * @remarks
   * 模板类型
   * 
   * @example
   * 56
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sign: 'Sign',
      smsType: 'SmsType',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sign: 'string',
      smsType: 'number',
      templateName: 'string',
      templateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsTemplateCreateResponseBody extends $tea.Model {
  /**
   * @example
   * 23
   */
  code?: number;
  /**
   * @example
   * 示例值
   */
  message?: string;
  /**
   * @example
   * 示例值示例值
   */
  model?: string;
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
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'number',
      message: 'string',
      model: 'string',
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsTemplateCreateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SmsTemplateCreateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SmsTemplateCreateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsTemplatePageListRequest extends $tea.Model {
  ownerId?: number;
  /**
   * @remarks
   * 页码
   * 
   * @example
   * 24
   */
  pageNo?: number;
  /**
   * @remarks
   * 每页条数
   * 
   * @example
   * 97
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 短信签名
   * 
   * @example
   * 114ah23m
   */
  sign?: string;
  /**
   * @remarks
   * 短信类型
   * 
   * @example
   * 42
   */
  smsType?: number;
  /**
   * @remarks
   * 模板状态
   * 
   * @example
   * 92
   */
  status?: number;
  /**
   * @remarks
   * 模板ID
   * 
   * @example
   * 83
   */
  templateId?: number;
  /**
   * @remarks
   * 模板类型
   * 
   * @example
   * 19
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sign: 'Sign',
      smsType: 'SmsType',
      status: 'Status',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sign: 'string',
      smsType: 'number',
      status: 'number',
      templateId: 'number',
      templateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsTemplatePageListResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 示例值
   */
  message?: string;
  model?: SmsTemplatePageListResponseBodyModel;
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
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'number',
      message: 'string',
      model: SmsTemplatePageListResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsTemplatePageListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SmsTemplatePageListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SmsTemplatePageListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCallChatsRequest extends $tea.Model {
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 72
   */
  agentId?: number;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * AA
   */
  agentTag?: string;
  /**
   * @remarks
   * 外呼ID
   * 
   * This parameter is required.
   * 
   * @example
   * 9b2eb6b8-7a27-4357-b5ec-104450086e24
   */
  callId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 任务ID
   * 
   * @example
   * 26
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentTag: 'AgentTag',
      callId: 'CallId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentTag: 'string',
      callId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCallChatsResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: TaskCallChatsResponseBodyModel[];
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
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'number',
      message: 'string',
      model: { 'type': 'array', 'itemType': TaskCallChatsResponseBodyModel },
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCallChatsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TaskCallChatsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TaskCallChatsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCallInfoRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCallInfoResponseBody extends $tea.Model {
  /**
   * @example
   * 15
   */
  code?: number;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: TaskCallInfoResponseBodyModel;
  /**
   * @example
   * 示例值示例值示例值
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 62
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'number',
      message: 'string',
      model: TaskCallInfoResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCallInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TaskCallInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TaskCallInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCallListRequest extends $tea.Model {
  /**
   * @remarks
   * 导入号码时返回的批次号
   * 
   * @example
   * 1
   */
  batchId?: string;
  /**
   * @remarks
   * 开始外呼时间
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-25 00:00:00
   */
  callDate?: string;
  /**
   * @remarks
   * 结束外呼时间
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-25 00:00:00
   */
  endCallDate?: string;
  /**
   * @remarks
   * 意向标签
   */
  intentTags?: string[];
  /**
   * @remarks
   * 号码列表
   */
  numbers?: string[];
  ownerId?: number;
  /**
   * @remarks
   * 页数
   * 
   * This parameter is required.
   * 
   * @example
   * 39
   */
  page?: number;
  /**
   * @remarks
   * 每页外呼记录数,正整数，默认10000
   * 
   * @example
   * 97
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * 93
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      callDate: 'CallDate',
      endCallDate: 'EndCallDate',
      intentTags: 'IntentTags',
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      page: 'Page',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      callDate: 'string',
      endCallDate: 'string',
      intentTags: { 'type': 'array', 'itemType': 'string' },
      numbers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      page: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCallListShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * 导入号码时返回的批次号
   * 
   * @example
   * 1
   */
  batchId?: string;
  /**
   * @remarks
   * 开始外呼时间
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-25 00:00:00
   */
  callDate?: string;
  /**
   * @remarks
   * 结束外呼时间
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-01-25 00:00:00
   */
  endCallDate?: string;
  /**
   * @remarks
   * 意向标签
   */
  intentTagsShrink?: string;
  /**
   * @remarks
   * 号码列表
   */
  numbersShrink?: string;
  ownerId?: number;
  /**
   * @remarks
   * 页数
   * 
   * This parameter is required.
   * 
   * @example
   * 39
   */
  page?: number;
  /**
   * @remarks
   * 每页外呼记录数,正整数，默认10000
   * 
   * @example
   * 97
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * 93
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      callDate: 'CallDate',
      endCallDate: 'EndCallDate',
      intentTagsShrink: 'IntentTags',
      numbersShrink: 'Numbers',
      ownerId: 'OwnerId',
      page: 'Page',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      callDate: 'string',
      endCallDate: 'string',
      intentTagsShrink: 'string',
      numbersShrink: 'string',
      ownerId: 'number',
      page: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCallListResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: TaskCallListResponseBodyModel;
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'number',
      message: 'string',
      model: TaskCallListResponseBodyModel,
      requestId: 'string',
      success: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCallListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TaskCallListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TaskCallListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCancelCallRequest extends $tea.Model {
  numbers?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tags?: string[];
  /**
   * @remarks
   * 任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numbers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCancelCallShrinkRequest extends $tea.Model {
  numbersShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tagsShrink?: string;
  /**
   * @remarks
   * 任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      numbersShrink: 'Numbers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagsShrink: 'Tags',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      numbersShrink: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagsShrink: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCancelCallResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: TaskCancelCallResponseBodyModel;
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'string',
      message: 'string',
      model: TaskCancelCallResponseBodyModel,
      requestId: 'string',
      success: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCancelCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TaskCancelCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TaskCancelCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskListRequest extends $tea.Model {
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
   * 最后外呼时间
   * 
   * @example
   * 2023-04-05 12:11:11
   */
  lastCallTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 任务状态。1 未启用，2 启用中，4 已停止
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * 任务ID
   * 
   * @example
   * 2
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastCallTime: 'LastCallTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      lastCallTime: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskListResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TaskListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskRecoverCallRequest extends $tea.Model {
  /**
   * @remarks
   * 查询开始导入时间
   * 
   * @example
   * "2023-01-09 18:58:19"
   */
  beginImportTime?: string;
  /**
   * @remarks
   * 查询结束导入时间
   * 
   * @example
   * "2023-01-09 18:58:19"
   */
  endImportTime?: string;
  /**
   * @remarks
   * 号码列表
   */
  numbers?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 用户自定义标签列表
   */
  tags?: string[];
  /**
   * @remarks
   * 任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * 93
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      beginImportTime: 'BeginImportTime',
      endImportTime: 'EndImportTime',
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginImportTime: 'string',
      endImportTime: 'string',
      numbers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskRecoverCallShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * 查询开始导入时间
   * 
   * @example
   * "2023-01-09 18:58:19"
   */
  beginImportTime?: string;
  /**
   * @remarks
   * 查询结束导入时间
   * 
   * @example
   * "2023-01-09 18:58:19"
   */
  endImportTime?: string;
  /**
   * @remarks
   * 号码列表
   */
  numbersShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 用户自定义标签列表
   */
  tagsShrink?: string;
  /**
   * @remarks
   * 任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * 93
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      beginImportTime: 'BeginImportTime',
      endImportTime: 'EndImportTime',
      numbersShrink: 'Numbers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagsShrink: 'Tags',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginImportTime: 'string',
      endImportTime: 'string',
      numbersShrink: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagsShrink: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskRecoverCallResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值
   */
  message?: string;
  model?: { [key: string]: any };
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'number',
      message: 'string',
      model: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      success: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskRecoverCallResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TaskRecoverCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TaskRecoverCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateListRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 必须空参
   * 
   * @example
   * 9
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateListResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: TemplateListResponseBodyModel[];
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  /**
   * @example
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'number',
      message: 'string',
      model: { 'type': 'array', 'itemType': TemplateListResponseBodyModel },
      requestId: 'string',
      success: 'boolean',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TemplateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TemplateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentStatusRequest extends $tea.Model {
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 58
   */
  agentId?: number;
  /**
   * @remarks
   * 坐席状态 1:在线；2:忙碌；3:小休；4:离线
   * 
   * @example
   * 1
   */
  agentStatus?: number;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * abac
   */
  agentTag?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentStatus: 'AgentStatus',
      agentTag: 'AgentTag',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentStatus: 'number',
      agentTag: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentStatusResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  model?: { [key: string]: any };
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'number',
      message: 'string',
      model: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      success: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAgentStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAgentStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAgentStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskCustomerRequest extends $tea.Model {
  /**
   * @remarks
   * 外呼客户
   * 
   * This parameter is required.
   */
  customers?: UpdateTaskCustomerRequestCustomers[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * 59
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      customers: 'Customers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customers: { 'type': 'array', 'itemType': UpdateTaskCustomerRequestCustomers },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskCustomerShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * 外呼客户
   * 
   * This parameter is required.
   */
  customersShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * 59
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      customersShrink: 'Customers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customersShrink: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskCustomerResponseBody extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  model?: UpdateTaskCustomerResponseBodyModel;
  /**
   * @example
   * 8EFC6D10-307B-1ECA-A8C6-7CBDF776AAD2
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 1683440860035
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
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
      code: 'number',
      message: 'string',
      model: UpdateTaskCustomerResponseBodyModel,
      requestId: 'string',
      success: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskCustomerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTaskCustomerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTaskCustomerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddBlacklistResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * 错误手机号
   */
  unHandleNumbers?: string[];
  static names(): { [key: string]: string } {
    return {
      unHandleNumbers: 'UnHandleNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unHandleNumbers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTaskRequestCallTimeList extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTaskRequestSendSmsPlan extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTaskResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * 任务ID
   * 
   * @example
   * 47
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentCancelCallResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * 错误手机列表
   */
  unHandleNumbers?: string[];
  static names(): { [key: string]: string } {
    return {
      unHandleNumbers: 'UnHandleNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unHandleNumbers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AgentRecoverCallResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * 错误手机列表
   */
  unHandleNumbers?: string[];
  static names(): { [key: string]: string } {
    return {
      unHandleNumbers: 'UnHandleNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unHandleNumbers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailsResponseBodyModelList extends $tea.Model {
  /**
   * @remarks
   * 批次号
   * 
   * @example
   * 27
   */
  batchId?: number;
  /**
   * @remarks
   * 呼叫状态描述
   * 
   * @example
   * 示例值示例值
   */
  callDesc?: string;
  /**
   * @remarks
   * 外呼ID
   * 
   * @example
   * 28dd74a4-30ec-43c0-9bec-272924c51eeb
   */
  callId?: string;
  /**
   * @remarks
   * 呼叫状态
   * 
   * @example
   * 1
   */
  callStatus?: number;
  /**
   * @remarks
   * 外呼类型
   * 
   * @example
   * 2001
   */
  callType?: number;
  /**
   * @remarks
   * 导入时间
   * 
   * @example
   * 2023-04-25 15:19:02
   */
  importTime?: string;
  /**
   * @remarks
   * 拦截原因
   * 
   * @example
   * 示例值示例值示例值
   */
  interceptReason?: string;
  /**
   * @remarks
   * 外呼号码
   * 
   * @example
   * 188******454
   */
  number?: string;
  /**
   * @remarks
   * 号码状态描述
   * 
   * @example
   * 示例值
   */
  numberDesc?: string;
  /**
   * @remarks
   * 外呼号码MD5
   * 
   * @example
   * cbe1b40f76f2cca4735954886b706ffa
   */
  numberMD5?: string;
  /**
   * @remarks
   * 号码状态
   * 
   * @example
   * 1
   */
  numberStatus?: number;
  /**
   * @remarks
   * 用户自定义标签
   * 
   * @example
   * A
   */
  tag?: string;
  /**
   * @remarks
   * 任务ID
   * 
   * @example
   * 28
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      callDesc: 'CallDesc',
      callId: 'CallId',
      callStatus: 'CallStatus',
      callType: 'CallType',
      importTime: 'ImportTime',
      interceptReason: 'InterceptReason',
      number: 'Number',
      numberDesc: 'NumberDesc',
      numberMD5: 'NumberMD5',
      numberStatus: 'NumberStatus',
      tag: 'Tag',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      callDesc: 'string',
      callId: 'string',
      callStatus: 'number',
      callType: 'number',
      importTime: 'string',
      interceptReason: 'string',
      number: 'string',
      numberDesc: 'string',
      numberMD5: 'string',
      numberStatus: 'number',
      tag: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetailsResponseBodyModel extends $tea.Model {
  list?: DetailsResponseBodyModelList[];
  /**
   * @example
   * 100
   */
  pageNo?: number;
  /**
   * @example
   * 94
   */
  pageSize?: number;
  /**
   * @example
   * 79
   */
  totalCount?: number;
  /**
   * @example
   * 71.8132
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DetailsResponseBodyModelList },
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditTaskRequestCallTimeList extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditTaskRequestSendSmsPlan extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditTaskResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * 任务ID
   * 
   * @example
   * 92
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNumberRequestCustomers extends $tea.Model {
  /**
   * @example
   * http://test.com
   */
  clientUrl?: string;
  /**
   * @example
   * 13541251222,18665214444
   */
  number?: string;
  /**
   * @example
   * 示例值
   */
  numberMD5?: string;
  /**
   * @example
   * {"testt":"123"}
   */
  properties?: { [key: string]: any };
  /**
   * @example
   * tag1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      clientUrl: 'ClientUrl',
      number: 'Number',
      numberMD5: 'NumberMD5',
      properties: 'Properties',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUrl: 'string',
      number: 'string',
      numberMD5: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportNumberResponseBodyModel extends $tea.Model {
  /**
   * @example
   * 54
   */
  batchId?: number;
  /**
   * @example
   * 94
   */
  code?: number;
  /**
   * @example
   * 示例值示例值
   */
  data?: string;
  /**
   * @example
   * 26
   */
  importNum?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      code: 'Code',
      data: 'Data',
      importNum: 'ImportNum',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      code: 'number',
      data: 'string',
      importNum: 'number',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageResponseBodyModelList extends $tea.Model {
  /**
   * @remarks
   * 添加时间
   * 
   * @example
   * 2020-03-06 10:10:10
   */
  createTime?: string;
  /**
   * @remarks
   * 过期时间
   * 
   * @example
   * 1
   */
  expirationTime?: string;
  /**
   * @remarks
   * 手机号码
   * 
   * @example
   * 13314206082
   */
  number?: string;
  /**
   * @remarks
   * 手机号MD5
   * 
   * @example
   * e10adc3949ba59abbe56e057f20f883e
   */
  numberMD5?: string;
  /**
   * @remarks
   * 备注
   * 
   * @example
   * 示例值
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expirationTime: 'ExpirationTime',
      number: 'Number',
      numberMD5: 'NumberMD5',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expirationTime: 'string',
      number: 'string',
      numberMD5: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageResponseBodyModel extends $tea.Model {
  list?: PageResponseBodyModelList[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 97
   */
  totalCount?: number;
  /**
   * @example
   * 5
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': PageResponseBodyModelList },
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsTemplatePageListResponseBodyModelList extends $tea.Model {
  /**
   * @remarks
   * 短信内容
   * 
   * @example
   * 示例值示例值示例值
   */
  content?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 2021-09-26 11:34:59
   */
  createTime?: string;
  /**
   * @remarks
   * 模板所需参数
   * 
   * @example
   * 示例值示例值
   */
  properties?: string;
  /**
   * @remarks
   * 智能短链ID
   * 
   * @example
   * 46
   */
  shortUrlTaskId?: number;
  /**
   * @remarks
   * 短信签名
   * 
   * @example
   * a234n
   */
  sign?: string;
  /**
   * @remarks
   * 短信类型
   * 
   * @example
   * 示例值示例值
   */
  smsType?: string;
  /**
   * @remarks
   * 模板状态
   * 
   * @example
   * 18
   */
  status?: number;
  /**
   * @remarks
   * 模板ID
   * 
   * @example
   * 67
   */
  templateId?: number;
  /**
   * @remarks
   * 模板名称
   * 
   * @example
   * 示例值示例值示例值
   */
  templateName?: string;
  /**
   * @remarks
   * 模板类型
   * 
   * @example
   * 56
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      properties: 'Properties',
      shortUrlTaskId: 'ShortUrlTaskId',
      sign: 'Sign',
      smsType: 'SmsType',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      properties: 'string',
      shortUrlTaskId: 'number',
      sign: 'string',
      smsType: 'string',
      status: 'number',
      templateId: 'number',
      templateName: 'string',
      templateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsTemplatePageListResponseBodyModel extends $tea.Model {
  list?: SmsTemplatePageListResponseBodyModelList[];
  /**
   * @example
   * 53
   */
  pageNo?: number;
  /**
   * @example
   * 42
   */
  pageSize?: number;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @example
   * 31
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': SmsTemplatePageListResponseBodyModelList },
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCallChatsResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * 说话内容
   * 
   * @example
   * 示例值示例值
   */
  content?: string;
  /**
   * @remarks
   * 说话时间
   * 
   * @example
   * 2022-01-13 14:56:46.604
   */
  createTime?: string;
  /**
   * @remarks
   * 说话号码
   * 
   * @example
   * 138*****265
   */
  fromNumber?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      fromNumber: 'FromNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      fromNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCallInfoResponseBodyModel extends $tea.Model {
  /**
   * @example
   * 75
   */
  finishTotal?: number;
  /**
   * @example
   * 59
   */
  total?: number;
  /**
   * @example
   * 3
   */
  unCallTotal?: number;
  static names(): { [key: string]: string } {
    return {
      finishTotal: 'FinishTotal',
      total: 'Total',
      unCallTotal: 'UnCallTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTotal: 'number',
      total: 'number',
      unCallTotal: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCallListResponseBodyModelList extends $tea.Model {
  /**
   * @remarks
   * 加微
   * 
   * @example
   * 0
   */
  addWx?: number;
  /**
   * @remarks
   * 加微进度
   * 
   * @example
   * 示例值示例值
   */
  addWxStatus?: string;
  /**
   * @remarks
   * 坐席分机
   * 
   * @example
   * 112
   */
  agentExtension?: string;
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 87
   */
  agentId?: number;
  /**
   * @remarks
   * 人工通话时长
   * 
   * @example
   * 98
   */
  agentSpeakingDuration?: number;
  /**
   * @remarks
   * 人工通话时长
   * 
   * @example
   * 示例值示例值
   */
  agentSpeakingTime?: string;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * A
   */
  agentTag?: string;
  /**
   * @remarks
   * 是否接通重呼
   * 
   * @example
   * 24
   */
  answerRecall?: number;
  /**
   * @remarks
   * 接通时间
   * 
   * @example
   * 2022-01-26 18:58:25
   */
  answerTime?: string;
  /**
   * @remarks
   * 批次ID
   * 
   * @example
   * 1
   */
  batchId?: string;
  /**
   * @remarks
   * 开始通话时间
   * 
   * @example
   * 2022-01-26 18:58:25
   */
  callBeginTime?: string;
  /**
   * @remarks
   * 外呼ID
   * 
   * @example
   * 9197ed9e-ceda-42a5-b683-823b23ef208e
   */
  callId?: string;
  /**
   * @remarks
   * 呼叫次数
   * 
   * @example
   * 1
   */
  callTimes?: string;
  /**
   * @remarks
   * 外呼类型
   * 
   * @example
   * 1001
   */
  callType?: number;
  /**
   * @remarks
   * 对话录音
   * 
   * @example
   * 示例值示例值
   */
  chatRecord?: string;
  /**
   * @remarks
   * 外呼网关
   * 
   * @example
   * 123
   */
  gateway?: string;
  /**
   * @remarks
   * 挂断时间
   * 
   * @example
   * 2022-01-26 18:58:25
   */
  hangupTime?: string;
  /**
   * @remarks
   * 挂机方式
   * 
   * @example
   * 1
   */
  hangupType?: number;
  /**
   * @remarks
   * 导入时间
   * 
   * @example
   * 2022-01-26 18:58:25
   */
  importTime?: string;
  /**
   * @remarks
   * 个性标签
   * 
   * @example
   * A
   */
  individualTag?: string;
  /**
   * @remarks
   * 意向说明
   * 
   * @example
   * 示例值示例值示例值
   */
  intentDescription?: string;
  /**
   * @remarks
   * 意向标签
   * 
   * @example
   * “C”
   */
  intentTag?: string;
  /**
   * @remarks
   * 拦截原因
   * 
   * @example
   * 示例值
   */
  interceptReason?: string;
  /**
   * @remarks
   * 回复关键词
   * 
   * @example
   * 示例值示例值
   */
  keywords?: string;
  /**
   * @remarks
   * 外呼号码
   * 
   * @example
   * 138*****123
   */
  number?: string;
  /**
   * @remarks
   * 外呼号码MD5
   * 
   * @example
   * 75916b635568954583783d
   */
  numberMD5?: string;
  /**
   * @remarks
   * 参数
   * 
   * @example
   * 示例值示例值
   */
  properties?: string;
  /**
   * @remarks
   * 备注
   * 
   * @example
   * 示例值示例值
   */
  remark?: string;
  /**
   * @remarks
   * 振铃时长
   * 
   * @example
   * 66
   */
  ringTime?: number;
  /**
   * @remarks
   * 挂机短信
   * 
   * @example
   * 示例值
   */
  sms?: string;
  /**
   * @remarks
   * AI通话时长
   * 
   * @example
   * 45
   */
  speakingDuration?: number;
  /**
   * @remarks
   * AI通话时长
   * 
   * @example
   * 示例值示例值示例值
   */
  speakingTime?: string;
  /**
   * @remarks
   * 对话轮次
   * 
   * @example
   * 0
   */
  speakingTurns?: string;
  /**
   * @remarks
   * 外呼状态
   * 
   * @example
   * 示例值示例值示例值
   */
  status?: string;
  /**
   * @remarks
   * 外呼状态编码
   * 
   * @example
   * 1
   */
  statusCode?: number;
  /**
   * @remarks
   * 外呼状态描述
   * 
   * @example
   * 示例值示例值
   */
  statusDescription?: string;
  /**
   * @remarks
   * 用户自定义标签
   * 
   * @example
   * 示例值
   */
  tag?: string;
  /**
   * @remarks
   * 外呼任务ID
   * 
   * @example
   * 70
   */
  taskId?: number;
  /**
   * @remarks
   * AI话术ID
   * 
   * @example
   * 66
   */
  templateId?: number;
  /**
   * @remarks
   * 转人工状态
   * 
   * @example
   * 示例值
   */
  transferStatus?: string;
  /**
   * @remarks
   * 转人工状态编码
   * 
   * @example
   * 1
   */
  transferStatusCode?: number;
  static names(): { [key: string]: string } {
    return {
      addWx: 'AddWx',
      addWxStatus: 'AddWxStatus',
      agentExtension: 'AgentExtension',
      agentId: 'AgentId',
      agentSpeakingDuration: 'AgentSpeakingDuration',
      agentSpeakingTime: 'AgentSpeakingTime',
      agentTag: 'AgentTag',
      answerRecall: 'AnswerRecall',
      answerTime: 'AnswerTime',
      batchId: 'BatchId',
      callBeginTime: 'CallBeginTime',
      callId: 'CallId',
      callTimes: 'CallTimes',
      callType: 'CallType',
      chatRecord: 'ChatRecord',
      gateway: 'Gateway',
      hangupTime: 'HangupTime',
      hangupType: 'HangupType',
      importTime: 'ImportTime',
      individualTag: 'IndividualTag',
      intentDescription: 'IntentDescription',
      intentTag: 'IntentTag',
      interceptReason: 'InterceptReason',
      keywords: 'Keywords',
      number: 'Number',
      numberMD5: 'NumberMD5',
      properties: 'Properties',
      remark: 'Remark',
      ringTime: 'RingTime',
      sms: 'Sms',
      speakingDuration: 'SpeakingDuration',
      speakingTime: 'SpeakingTime',
      speakingTurns: 'SpeakingTurns',
      status: 'Status',
      statusCode: 'StatusCode',
      statusDescription: 'StatusDescription',
      tag: 'Tag',
      taskId: 'TaskId',
      templateId: 'TemplateId',
      transferStatus: 'TransferStatus',
      transferStatusCode: 'TransferStatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addWx: 'number',
      addWxStatus: 'string',
      agentExtension: 'string',
      agentId: 'number',
      agentSpeakingDuration: 'number',
      agentSpeakingTime: 'string',
      agentTag: 'string',
      answerRecall: 'number',
      answerTime: 'string',
      batchId: 'string',
      callBeginTime: 'string',
      callId: 'string',
      callTimes: 'string',
      callType: 'number',
      chatRecord: 'string',
      gateway: 'string',
      hangupTime: 'string',
      hangupType: 'number',
      importTime: 'string',
      individualTag: 'string',
      intentDescription: 'string',
      intentTag: 'string',
      interceptReason: 'string',
      keywords: 'string',
      number: 'string',
      numberMD5: 'string',
      properties: 'string',
      remark: 'string',
      ringTime: 'number',
      sms: 'string',
      speakingDuration: 'number',
      speakingTime: 'string',
      speakingTurns: 'string',
      status: 'string',
      statusCode: 'number',
      statusDescription: 'string',
      tag: 'string',
      taskId: 'number',
      templateId: 'number',
      transferStatus: 'string',
      transferStatusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCallListResponseBodyModel extends $tea.Model {
  list?: TaskCallListResponseBodyModelList[];
  /**
   * @example
   * 62
   */
  pageNo?: number;
  /**
   * @example
   * 95
   */
  pageSize?: number;
  /**
   * @example
   * 80
   */
  totalCount?: number;
  /**
   * @example
   * 39
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': TaskCallListResponseBodyModelList },
      pageNo: 'number',
      pageSize: 'number',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskCancelCallResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * 错误手机号
   */
  unHandleNumbers?: string[];
  static names(): { [key: string]: string } {
    return {
      unHandleNumbers: 'UnHandleNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unHandleNumbers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskListResponseBodyModelIntentTags extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskListResponseBodyModel extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateListResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * 意向标签
   */
  intentTags?: { [key: string]: any }[];
  /**
   * @remarks
   * 个性标签
   */
  personalityTags?: string[];
  /**
   * @remarks
   * 话术所需参数
   * 
   * @example
   * 示例值示例值
   */
  properties?: string;
  /**
   * @remarks
   * AI话术ID
   * 
   * @example
   * 59
   */
  templateId?: number;
  /**
   * @remarks
   * 话术模板名称
   * 
   * @example
   * 示例值示例值
   */
  templateName?: string;
  /**
   * @remarks
   * 模板类型
   * 
   * @example
   * 55
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      intentTags: 'IntentTags',
      personalityTags: 'PersonalityTags',
      properties: 'Properties',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intentTags: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      personalityTags: { 'type': 'array', 'itemType': 'string' },
      properties: 'string',
      templateId: 'number',
      templateName: 'string',
      templateType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskCustomerRequestCustomers extends $tea.Model {
  /**
   * @remarks
   * 是否取消外呼 0否，1是
   * 
   * @example
   * 0
   */
  cancel?: number;
  /**
   * @remarks
   * 电话号码
   * 
   * @example
   * 13661109390
   */
  number?: string;
  /**
   * @remarks
   * 需根据具体任务参数要求传输
   * 
   * @example
   * {"test":"234"}
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * 用户自定义标签
   * 
   * @example
   * tag1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      cancel: 'Cancel',
      number: 'Number',
      properties: 'Properties',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancel: 'number',
      number: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskCustomerResponseBodyModel extends $tea.Model {
  /**
   * @remarks
   * 错误手机列表
   */
  unHandleNumbers?: string[];
  static names(): { [key: string]: string } {
    return {
      unHandleNumbers: 'UnHandleNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unHandleNumbers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aiccs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 添加黑名单接口
   * 
   * @param tmpReq - AddBlacklistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddBlacklistResponse
   */
  async addBlacklistWithOptions(tmpReq: AddBlacklistRequest, runtime: $Util.RuntimeOptions): Promise<AddBlacklistResponse> {
    Util.validateModel(tmpReq);
    let request = new AddBlacklistShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    let query = { };
    if (!Util.isUnset(request.expiredDay)) {
      query["ExpiredDay"] = request.expiredDay;
    }

    if (!Util.isUnset(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddBlacklist",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddBlacklistResponse>(await this.callApi(params, req, runtime), new AddBlacklistResponse({}));
  }

  /**
   * 添加黑名单接口
   * 
   * @param request - AddBlacklistRequest
   * @returns AddBlacklistResponse
   */
  async addBlacklist(request: AddBlacklistRequest): Promise<AddBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBlacklistWithOptions(request, runtime);
  }

  /**
   * 创建任务接口
   * 
   * @param tmpReq - AddTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTaskResponse
   */
  async addTaskWithOptions(tmpReq: AddTaskRequest, runtime: $Util.RuntimeOptions): Promise<AddTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new AddTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.callTimeList)) {
      request.callTimeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callTimeList, "CallTimeList", "json");
    }

    if (!Util.isUnset(tmpReq.repeatReason)) {
      request.repeatReasonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.repeatReason, "RepeatReason", "json");
    }

    if (!Util.isUnset(tmpReq.repeatTimes)) {
      request.repeatTimesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.repeatTimes, "RepeatTimes", "json");
    }

    if (!Util.isUnset(tmpReq.sendSmsPlan)) {
      request.sendSmsPlanShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sendSmsPlan, "SendSmsPlan", "json");
    }

    let query = { };
    if (!Util.isUnset(request.callTimeListShrink)) {
      query["CallTimeList"] = request.callTimeListShrink;
    }

    if (!Util.isUnset(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!Util.isUnset(request.flashSmsTemplateId)) {
      query["FlashSmsTemplateId"] = request.flashSmsTemplateId;
    }

    if (!Util.isUnset(request.flashSmsType)) {
      query["FlashSmsType"] = request.flashSmsType;
    }

    if (!Util.isUnset(request.maxConcurrency)) {
      query["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playSleepVal)) {
      query["PlaySleepVal"] = request.playSleepVal;
    }

    if (!Util.isUnset(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!Util.isUnset(request.recallType)) {
      query["RecallType"] = request.recallType;
    }

    if (!Util.isUnset(request.recordPath)) {
      query["RecordPath"] = request.recordPath;
    }

    if (!Util.isUnset(request.repeatCount)) {
      query["RepeatCount"] = request.repeatCount;
    }

    if (!Util.isUnset(request.repeatInterval)) {
      query["RepeatInterval"] = request.repeatInterval;
    }

    if (!Util.isUnset(request.repeatReasonShrink)) {
      query["RepeatReason"] = request.repeatReasonShrink;
    }

    if (!Util.isUnset(request.repeatTimesShrink)) {
      query["RepeatTimes"] = request.repeatTimesShrink;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sendSmsPlanShrink)) {
      query["SendSmsPlan"] = request.sendSmsPlanShrink;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddTask",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTaskResponse>(await this.callApi(params, req, runtime), new AddTaskResponse({}));
  }

  /**
   * 创建任务接口
   * 
   * @param request - AddTaskRequest
   * @returns AddTaskResponse
   */
  async addTask(request: AddTaskRequest): Promise<AddTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTaskWithOptions(request, runtime);
  }

  /**
   * 坐席取消号码外呼
   * 
   * @param tmpReq - AgentCancelCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgentCancelCallResponse
   */
  async agentCancelCallWithOptions(tmpReq: AgentCancelCallRequest, runtime: $Util.RuntimeOptions): Promise<AgentCancelCallResponse> {
    Util.validateModel(tmpReq);
    let request = new AgentCancelCallShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!Util.isUnset(request.agentTag)) {
      query["AgentTag"] = request.agentTag;
    }

    if (!Util.isUnset(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AgentCancelCall",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AgentCancelCallResponse>(await this.callApi(params, req, runtime), new AgentCancelCallResponse({}));
  }

  /**
   * 坐席取消号码外呼
   * 
   * @param request - AgentCancelCallRequest
   * @returns AgentCancelCallResponse
   */
  async agentCancelCall(request: AgentCancelCallRequest): Promise<AgentCancelCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.agentCancelCallWithOptions(request, runtime);
  }

  /**
   * 坐席任务恢复号码
   * 
   * @param tmpReq - AgentRecoverCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AgentRecoverCallResponse
   */
  async agentRecoverCallWithOptions(tmpReq: AgentRecoverCallRequest, runtime: $Util.RuntimeOptions): Promise<AgentRecoverCallResponse> {
    Util.validateModel(tmpReq);
    let request = new AgentRecoverCallShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!Util.isUnset(request.agentTag)) {
      query["AgentTag"] = request.agentTag;
    }

    if (!Util.isUnset(request.beginImportTime)) {
      query["BeginImportTime"] = request.beginImportTime;
    }

    if (!Util.isUnset(request.endImportTime)) {
      query["EndImportTime"] = request.endImportTime;
    }

    if (!Util.isUnset(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AgentRecoverCall",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AgentRecoverCallResponse>(await this.callApi(params, req, runtime), new AgentRecoverCallResponse({}));
  }

  /**
   * 坐席任务恢复号码
   * 
   * @param request - AgentRecoverCallRequest
   * @returns AgentRecoverCallResponse
   */
  async agentRecoverCall(request: AgentRecoverCallRequest): Promise<AgentRecoverCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.agentRecoverCallWithOptions(request, runtime);
  }

  /**
   * AI批量任务查询号码状态接口
   * 
   * @param tmpReq - DetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetailsResponse
   */
  async detailsWithOptions(tmpReq: DetailsRequest, runtime: $Util.RuntimeOptions): Promise<DetailsResponse> {
    Util.validateModel(tmpReq);
    let request = new DetailsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    let query = { };
    if (!Util.isUnset(request.batchId)) {
      query["BatchId"] = request.batchId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.numberStatus)) {
      query["NumberStatus"] = request.numberStatus;
    }

    if (!Util.isUnset(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Details",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetailsResponse>(await this.callApi(params, req, runtime), new DetailsResponse({}));
  }

  /**
   * AI批量任务查询号码状态接口
   * 
   * @param request - DetailsRequest
   * @returns DetailsResponse
   */
  async details(request: DetailsRequest): Promise<DetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detailsWithOptions(request, runtime);
  }

  /**
   * 编辑任务接口
   * 
   * @param tmpReq - EditTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditTaskResponse
   */
  async editTaskWithOptions(tmpReq: EditTaskRequest, runtime: $Util.RuntimeOptions): Promise<EditTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new EditTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.callTimeList)) {
      request.callTimeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.callTimeList, "CallTimeList", "json");
    }

    if (!Util.isUnset(tmpReq.repeatReason)) {
      request.repeatReasonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.repeatReason, "RepeatReason", "json");
    }

    if (!Util.isUnset(tmpReq.repeatTimes)) {
      request.repeatTimesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.repeatTimes, "RepeatTimes", "json");
    }

    if (!Util.isUnset(tmpReq.sendSmsPlan)) {
      request.sendSmsPlanShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sendSmsPlan, "SendSmsPlan", "json");
    }

    let query = { };
    if (!Util.isUnset(request.callTimeListShrink)) {
      query["CallTimeList"] = request.callTimeListShrink;
    }

    if (!Util.isUnset(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!Util.isUnset(request.flashSmsTemplateId)) {
      query["FlashSmsTemplateId"] = request.flashSmsTemplateId;
    }

    if (!Util.isUnset(request.flashSmsType)) {
      query["FlashSmsType"] = request.flashSmsType;
    }

    if (!Util.isUnset(request.maxConcurrency)) {
      query["MaxConcurrency"] = request.maxConcurrency;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.playSleepVal)) {
      query["PlaySleepVal"] = request.playSleepVal;
    }

    if (!Util.isUnset(request.playTimes)) {
      query["PlayTimes"] = request.playTimes;
    }

    if (!Util.isUnset(request.recallType)) {
      query["RecallType"] = request.recallType;
    }

    if (!Util.isUnset(request.recordPath)) {
      query["RecordPath"] = request.recordPath;
    }

    if (!Util.isUnset(request.repeatCount)) {
      query["RepeatCount"] = request.repeatCount;
    }

    if (!Util.isUnset(request.repeatInterval)) {
      query["RepeatInterval"] = request.repeatInterval;
    }

    if (!Util.isUnset(request.repeatReasonShrink)) {
      query["RepeatReason"] = request.repeatReasonShrink;
    }

    if (!Util.isUnset(request.repeatTimesShrink)) {
      query["RepeatTimes"] = request.repeatTimesShrink;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sendSmsPlanShrink)) {
      query["SendSmsPlan"] = request.sendSmsPlanShrink;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EditTask",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EditTaskResponse>(await this.callApi(params, req, runtime), new EditTaskResponse({}));
  }

  /**
   * 编辑任务接口
   * 
   * @param request - EditTaskRequest
   * @returns EditTaskResponse
   */
  async editTask(request: EditTaskRequest): Promise<EditTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editTaskWithOptions(request, runtime);
  }

  /**
   * 导入号码
   * 
   * @param tmpReq - ImportNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportNumberResponse
   */
  async importNumberWithOptions(tmpReq: ImportNumberRequest, runtime: $Util.RuntimeOptions): Promise<ImportNumberResponse> {
    Util.validateModel(tmpReq);
    let request = new ImportNumberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.customers)) {
      request.customersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customers, "Customers", "json");
    }

    let query = { };
    if (!Util.isUnset(request.customersShrink)) {
      query["Customers"] = request.customersShrink;
    }

    if (!Util.isUnset(request.failReturn)) {
      query["FailReturn"] = request.failReturn;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportNumber",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportNumberResponse>(await this.callApi(params, req, runtime), new ImportNumberResponse({}));
  }

  /**
   * 导入号码
   * 
   * @param request - ImportNumberRequest
   * @returns ImportNumberResponse
   */
  async importNumber(request: ImportNumberRequest): Promise<ImportNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importNumberWithOptions(request, runtime);
  }

  /**
   * 查询企业黑名单
   * 
   * @param tmpReq - PageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageResponse
   */
  async pageWithOptions(tmpReq: PageRequest, runtime: $Util.RuntimeOptions): Promise<PageResponse> {
    Util.validateModel(tmpReq);
    let request = new PageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    let query = { };
    if (!Util.isUnset(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Page",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PageResponse>(await this.callApi(params, req, runtime), new PageResponse({}));
  }

  /**
   * 查询企业黑名单
   * 
   * @param request - PageRequest
   * @returns PageResponse
   */
  async page(request: PageRequest): Promise<PageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pageWithOptions(request, runtime);
  }

  /**
   * 短信模板创建
   * 
   * @param request - SmsTemplateCreateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmsTemplateCreateResponse
   */
  async smsTemplateCreateWithOptions(request: SmsTemplateCreateRequest, runtime: $Util.RuntimeOptions): Promise<SmsTemplateCreateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sign)) {
      query["Sign"] = request.sign;
    }

    if (!Util.isUnset(request.smsType)) {
      query["SmsType"] = request.smsType;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SmsTemplateCreate",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SmsTemplateCreateResponse>(await this.callApi(params, req, runtime), new SmsTemplateCreateResponse({}));
  }

  /**
   * 短信模板创建
   * 
   * @param request - SmsTemplateCreateRequest
   * @returns SmsTemplateCreateResponse
   */
  async smsTemplateCreate(request: SmsTemplateCreateRequest): Promise<SmsTemplateCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.smsTemplateCreateWithOptions(request, runtime);
  }

  /**
   * 短信模板列表查询
   * 
   * @param request - SmsTemplatePageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SmsTemplatePageListResponse
   */
  async smsTemplatePageListWithOptions(request: SmsTemplatePageListRequest, runtime: $Util.RuntimeOptions): Promise<SmsTemplatePageListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sign)) {
      query["Sign"] = request.sign;
    }

    if (!Util.isUnset(request.smsType)) {
      query["SmsType"] = request.smsType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SmsTemplatePageList",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SmsTemplatePageListResponse>(await this.callApi(params, req, runtime), new SmsTemplatePageListResponse({}));
  }

  /**
   * 短信模板列表查询
   * 
   * @param request - SmsTemplatePageListRequest
   * @returns SmsTemplatePageListResponse
   */
  async smsTemplatePageList(request: SmsTemplatePageListRequest): Promise<SmsTemplatePageListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.smsTemplatePageListWithOptions(request, runtime);
  }

  /**
   * 查询聊天记录接口
   * 
   * @param request - TaskCallChatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TaskCallChatsResponse
   */
  async taskCallChatsWithOptions(request: TaskCallChatsRequest, runtime: $Util.RuntimeOptions): Promise<TaskCallChatsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!Util.isUnset(request.agentTag)) {
      query["AgentTag"] = request.agentTag;
    }

    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaskCallChats",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaskCallChatsResponse>(await this.callApi(params, req, runtime), new TaskCallChatsResponse({}));
  }

  /**
   * 查询聊天记录接口
   * 
   * @param request - TaskCallChatsRequest
   * @returns TaskCallChatsResponse
   */
  async taskCallChats(request: TaskCallChatsRequest): Promise<TaskCallChatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taskCallChatsWithOptions(request, runtime);
  }

  /**
   * 获取任务外呼情况接口
   * 
   * @param request - TaskCallInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TaskCallInfoResponse
   */
  async taskCallInfoWithOptions(request: TaskCallInfoRequest, runtime: $Util.RuntimeOptions): Promise<TaskCallInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaskCallInfo",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaskCallInfoResponse>(await this.callApi(params, req, runtime), new TaskCallInfoResponse({}));
  }

  /**
   * 获取任务外呼情况接口
   * 
   * @param request - TaskCallInfoRequest
   * @returns TaskCallInfoResponse
   */
  async taskCallInfo(request: TaskCallInfoRequest): Promise<TaskCallInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taskCallInfoWithOptions(request, runtime);
  }

  /**
   * AI批量任务查询外呼记录接口
   * 
   * @param tmpReq - TaskCallListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TaskCallListResponse
   */
  async taskCallListWithOptions(tmpReq: TaskCallListRequest, runtime: $Util.RuntimeOptions): Promise<TaskCallListResponse> {
    Util.validateModel(tmpReq);
    let request = new TaskCallListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.intentTags)) {
      request.intentTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.intentTags, "IntentTags", "json");
    }

    if (!Util.isUnset(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    let query = { };
    if (!Util.isUnset(request.batchId)) {
      query["BatchId"] = request.batchId;
    }

    if (!Util.isUnset(request.callDate)) {
      query["CallDate"] = request.callDate;
    }

    if (!Util.isUnset(request.endCallDate)) {
      query["EndCallDate"] = request.endCallDate;
    }

    if (!Util.isUnset(request.intentTagsShrink)) {
      query["IntentTags"] = request.intentTagsShrink;
    }

    if (!Util.isUnset(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaskCallList",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaskCallListResponse>(await this.callApi(params, req, runtime), new TaskCallListResponse({}));
  }

  /**
   * AI批量任务查询外呼记录接口
   * 
   * @param request - TaskCallListRequest
   * @returns TaskCallListResponse
   */
  async taskCallList(request: TaskCallListRequest): Promise<TaskCallListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taskCallListWithOptions(request, runtime);
  }

  /**
   * 批量任务取消号码外呼
   * 
   * @param tmpReq - TaskCancelCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TaskCancelCallResponse
   */
  async taskCancelCallWithOptions(tmpReq: TaskCancelCallRequest, runtime: $Util.RuntimeOptions): Promise<TaskCancelCallResponse> {
    Util.validateModel(tmpReq);
    let request = new TaskCancelCallShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaskCancelCall",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaskCancelCallResponse>(await this.callApi(params, req, runtime), new TaskCancelCallResponse({}));
  }

  /**
   * 批量任务取消号码外呼
   * 
   * @param request - TaskCancelCallRequest
   * @returns TaskCancelCallResponse
   */
  async taskCancelCall(request: TaskCancelCallRequest): Promise<TaskCancelCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taskCancelCallWithOptions(request, runtime);
  }

  /**
   * 查询任务列表接口
   * 
   * @param request - TaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TaskListResponse
   */
  async taskListWithOptions(request: TaskListRequest, runtime: $Util.RuntimeOptions): Promise<TaskListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!Util.isUnset(request.lastCallTime)) {
      query["LastCallTime"] = request.lastCallTime;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaskList",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaskListResponse>(await this.callApi(params, req, runtime), new TaskListResponse({}));
  }

  /**
   * 查询任务列表接口
   * 
   * @param request - TaskListRequest
   * @returns TaskListResponse
   */
  async taskList(request: TaskListRequest): Promise<TaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taskListWithOptions(request, runtime);
  }

  /**
   * 批量任务恢复号码
   * 
   * @param tmpReq - TaskRecoverCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TaskRecoverCallResponse
   */
  async taskRecoverCallWithOptions(tmpReq: TaskRecoverCallRequest, runtime: $Util.RuntimeOptions): Promise<TaskRecoverCallResponse> {
    Util.validateModel(tmpReq);
    let request = new TaskRecoverCallShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.numbers)) {
      request.numbersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.numbers, "Numbers", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.beginImportTime)) {
      query["BeginImportTime"] = request.beginImportTime;
    }

    if (!Util.isUnset(request.endImportTime)) {
      query["EndImportTime"] = request.endImportTime;
    }

    if (!Util.isUnset(request.numbersShrink)) {
      query["Numbers"] = request.numbersShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaskRecoverCall",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaskRecoverCallResponse>(await this.callApi(params, req, runtime), new TaskRecoverCallResponse({}));
  }

  /**
   * 批量任务恢复号码
   * 
   * @param request - TaskRecoverCallRequest
   * @returns TaskRecoverCallResponse
   */
  async taskRecoverCall(request: TaskRecoverCallRequest): Promise<TaskRecoverCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taskRecoverCallWithOptions(request, runtime);
  }

  /**
   * 话术模板列表查询接口
   * 
   * @param request - TemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TemplateListResponse
   */
  async templateListWithOptions(request: TemplateListRequest, runtime: $Util.RuntimeOptions): Promise<TemplateListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TemplateList",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TemplateListResponse>(await this.callApi(params, req, runtime), new TemplateListResponse({}));
  }

  /**
   * 话术模板列表查询接口
   * 
   * @param request - TemplateListRequest
   * @returns TemplateListResponse
   */
  async templateList(request: TemplateListRequest): Promise<TemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.templateListWithOptions(request, runtime);
  }

  /**
   * 修改坐席状态
   * 
   * @param request - UpdateAgentStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentStatusResponse
   */
  async updateAgentStatusWithOptions(request: UpdateAgentStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAgentStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!Util.isUnset(request.agentStatus)) {
      query["AgentStatus"] = request.agentStatus;
    }

    if (!Util.isUnset(request.agentTag)) {
      query["AgentTag"] = request.agentTag;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAgentStatus",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAgentStatusResponse>(await this.callApi(params, req, runtime), new UpdateAgentStatusResponse({}));
  }

  /**
   * 修改坐席状态
   * 
   * @param request - UpdateAgentStatusRequest
   * @returns UpdateAgentStatusResponse
   */
  async updateAgentStatus(request: UpdateAgentStatusRequest): Promise<UpdateAgentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAgentStatusWithOptions(request, runtime);
  }

  /**
   * 更新当天导入的号码
   * 
   * @param tmpReq - UpdateTaskCustomerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskCustomerResponse
   */
  async updateTaskCustomerWithOptions(tmpReq: UpdateTaskCustomerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTaskCustomerResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateTaskCustomerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.customers)) {
      request.customersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customers, "Customers", "json");
    }

    let query = { };
    if (!Util.isUnset(request.customersShrink)) {
      query["Customers"] = request.customersShrink;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTaskCustomer",
      version: "2023-05-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTaskCustomerResponse>(await this.callApi(params, req, runtime), new UpdateTaskCustomerResponse({}));
  }

  /**
   * 更新当天导入的号码
   * 
   * @param request - UpdateTaskCustomerRequest
   * @returns UpdateTaskCustomerResponse
   */
  async updateTaskCustomer(request: UpdateTaskCustomerRequest): Promise<UpdateTaskCustomerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTaskCustomerWithOptions(request, runtime);
  }

}
