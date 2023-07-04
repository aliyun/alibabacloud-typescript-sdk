// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddBlacklistRequest extends $tea.Model {
  expiredDay?: string;
  numbers?: string[];
  ownerId?: number;
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
  expiredDay?: string;
  numbersShrink?: string;
  ownerId?: number;
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
  code?: number;
  message?: string;
  model?: AddBlacklistResponseBodyModel;
  requestId?: string;
  success?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AddBlacklistResponseBody;
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
  callTimeList?: AddTaskRequestCallTimeList[];
  maxConcurrency?: number;
  name?: string;
  ownerId?: number;
  playSleepVal?: number;
  playTimes?: number;
  recallType?: number;
  recordPath?: string;
  repeatCount?: number;
  repeatInterval?: number;
  repeatReason?: string[];
  repeatTimes?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendSmsPlan?: AddTaskRequestSendSmsPlan[];
  startTime?: string;
  taskType?: number;
  templateId?: number;
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      callTimeList: 'CallTimeList',
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
  callTimeListShrink?: string;
  maxConcurrency?: number;
  name?: string;
  ownerId?: number;
  playSleepVal?: number;
  playTimes?: number;
  recallType?: number;
  recordPath?: string;
  repeatCount?: number;
  repeatInterval?: number;
  repeatReasonShrink?: string;
  repeatTimesShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendSmsPlanShrink?: string;
  startTime?: string;
  taskType?: number;
  templateId?: number;
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      callTimeListShrink: 'CallTimeList',
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
  code?: number;
  message?: string;
  model?: AddTaskResponseBodyModel;
  requestId?: string;
  success?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AddTaskResponseBody;
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
  agentId?: number;
  agentTag?: string;
  numbers?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  agentId?: number;
  agentTag?: string;
  numbersShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  code?: number;
  message?: string;
  model?: AgentCancelCallResponseBodyModel;
  requestId?: string;
  success?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AgentCancelCallResponseBody;
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
  agentId?: number;
  agentTag?: string;
  beginImportTime?: string;
  endImportTime?: string;
  numbers?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  agentId?: number;
  agentTag?: string;
  beginImportTime?: string;
  endImportTime?: string;
  numbersShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  code?: number;
  message?: string;
  model?: AgentRecoverCallResponseBodyModel;
  requestId?: string;
  success?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AgentRecoverCallResponseBody;
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
  batchId?: number;
  endTime?: string;
  numberStatus?: number;
  numbers?: string[];
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
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
  batchId?: number;
  endTime?: string;
  numberStatus?: number;
  numbersShrink?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  startTime?: string;
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
  code?: number;
  message?: string;
  model?: DetailsResponseBodyModel;
  requestId?: string;
  success?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DetailsResponseBody;
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
  callTimeList?: EditTaskRequestCallTimeList[];
  maxConcurrency?: number;
  name?: string;
  ownerId?: number;
  playSleepVal?: number;
  playTimes?: number;
  recallType?: number;
  recordPath?: string;
  repeatCount?: number;
  repeatInterval?: number;
  repeatReason?: number[];
  repeatTimes?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendSmsPlan?: EditTaskRequestSendSmsPlan[];
  status?: number;
  taskId?: number;
  templateId?: number;
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      callTimeList: 'CallTimeList',
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
  callTimeListShrink?: string;
  maxConcurrency?: number;
  name?: string;
  ownerId?: number;
  playSleepVal?: number;
  playTimes?: number;
  recallType?: number;
  recordPath?: string;
  repeatCount?: number;
  repeatInterval?: number;
  repeatReasonShrink?: string;
  repeatTimesShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendSmsPlanShrink?: string;
  status?: number;
  taskId?: number;
  templateId?: number;
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      callTimeListShrink: 'CallTimeList',
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
  code?: number;
  message?: string;
  model?: EditTaskResponseBodyModel;
  requestId?: string;
  success?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: EditTaskResponseBody;
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
  customers?: ImportNumberRequestCustomers[];
  failReturn?: number;
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  customersShrink?: string;
  failReturn?: number;
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  code?: number;
  message?: string;
  model?: ImportNumberResponseBodyModel;
  requestId?: string;
  success?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportNumberResponseBody;
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
  pageNo?: number;
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
  pageNo?: number;
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
  code?: number;
  message?: string;
  model?: PageResponseBodyModel;
  requestId?: string;
  success?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PageResponseBody;
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
  content?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sign?: string;
  smsType?: number;
  templateName?: string;
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
  code?: number;
  message?: string;
  model?: string;
  requestId?: string;
  success?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SmsTemplateCreateResponseBody;
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
  pageNo?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sign?: string;
  smsType?: number;
  status?: number;
  templateId?: number;
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
  code?: number;
  message?: string;
  model?: SmsTemplatePageListResponseBodyModel;
  requestId?: string;
  success?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SmsTemplatePageListResponseBody;
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
  agentId?: number;
  agentTag?: string;
  callId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  code?: number;
  message?: string;
  model?: TaskCallChatsResponseBodyModel[];
  requestId?: string;
  success?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TaskCallChatsResponseBody;
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
  code?: number;
  message?: string;
  model?: TaskCallInfoResponseBodyModel;
  requestId?: string;
  success?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TaskCallInfoResponseBody;
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
  batchId?: string;
  callDate?: string;
  endCallDate?: string;
  intentTags?: string[];
  numbers?: string[];
  ownerId?: number;
  page?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  batchId?: string;
  callDate?: string;
  endCallDate?: string;
  intentTagsShrink?: string;
  numbersShrink?: string;
  ownerId?: number;
  page?: number;
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  code?: number;
  message?: string;
  model?: TaskCallListResponseBodyModel;
  requestId?: string;
  success?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TaskCallListResponseBody;
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
  code?: string;
  message?: string;
  model?: TaskCancelCallResponseBodyModel;
  requestId?: string;
  success?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TaskCancelCallResponseBody;
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
  createTime?: string;
  lastCallTime?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastCallTime: 'LastCallTime',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
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
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskListResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  model?: TaskListResponseBodyModel[];
  requestId?: string;
  success?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TaskListResponseBody;
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
  beginImportTime?: string;
  endImportTime?: string;
  numbers?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tags?: string[];
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
  beginImportTime?: string;
  endImportTime?: string;
  numbersShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  tagsShrink?: string;
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
  code?: number;
  message?: string;
  model?: { [key: string]: any };
  requestId?: string;
  success?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TaskRecoverCallResponseBody;
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
  code?: number;
  message?: string;
  model?: TemplateListResponseBodyModel[];
  requestId?: string;
  success?: boolean;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TemplateListResponseBody;
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
  agentId?: number;
  agentStatus?: number;
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
  code?: number;
  message?: string;
  model?: { [key: string]: any };
  requestId?: string;
  success?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAgentStatusResponseBody;
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
  customers?: UpdateTaskCustomerRequestCustomers[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  customersShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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
  code?: number;
  message?: string;
  model?: UpdateTaskCustomerResponseBodyModel;
  requestId?: string;
  success?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTaskCustomerResponseBody;
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
  intentTags?: string[];
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
  batchId?: number;
  callDesc?: string;
  callId?: string;
  callStatus?: number;
  callType?: number;
  importTime?: string;
  interceptReason?: string;
  number?: string;
  numberDesc?: string;
  numberMD5?: string;
  numberStatus?: number;
  tag?: string;
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
  pageNo?: number;
  pageSize?: number;
  totalCount?: number;
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
  intentTags?: string[];
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
  clientUrl?: string;
  number?: string;
  numberMD5?: string;
  properties?: { [key: string]: any };
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
  batchId?: number;
  code?: number;
  data?: string;
  importNum?: number;
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
  createTime?: string;
  expirationTime?: string;
  number?: string;
  numberMD5?: string;
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
  pageNo?: number;
  pageSize?: number;
  totalCount?: number;
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
  content?: string;
  createTime?: string;
  properties?: string;
  shortUrlTaskId?: number;
  sign?: string;
  smsType?: string;
  status?: number;
  templateId?: number;
  templateName?: string;
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
  pageNo?: number;
  pageSize?: number;
  totalCount?: number;
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
  content?: string;
  createTime?: string;
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
  finishTotal?: number;
  total?: number;
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
  addWx?: number;
  addWxStatus?: string;
  agentExtension?: string;
  agentId?: number;
  agentSpeakingDuration?: number;
  agentSpeakingTime?: string;
  agentTag?: string;
  answerRecall?: number;
  answerTime?: string;
  batchId?: string;
  callBeginTime?: string;
  callId?: string;
  callTimes?: string;
  callType?: number;
  chatRecord?: string;
  gateway?: string;
  hangupTime?: string;
  hangupType?: number;
  importTime?: string;
  individualTag?: string;
  intentDescription?: string;
  intentTag?: string;
  interceptReason?: string;
  keywords?: string;
  number?: string;
  numberMD5?: string;
  properties?: string;
  remark?: string;
  ringTime?: number;
  sms?: string;
  speakingDuration?: number;
  speakingTime?: string;
  speakingTurns?: string;
  status?: string;
  statusCode?: number;
  statusDescription?: string;
  tag?: string;
  taskId?: number;
  templateId?: number;
  transferStatus?: string;
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
  pageNo?: number;
  pageSize?: number;
  totalCount?: number;
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
  intentDescription?: string;
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
  allowCallTime?: string;
  allowCallTimeFormat?: string;
  allowDayOfWeek?: string;
  callType?: number;
  createTime?: string;
  importTime?: string;
  intentTags?: TaskListResponseBodyModelIntentTags[];
  invalidReCall?: number;
  lastCallTime?: string;
  maxConcurrency?: number;
  personalityTags?: string[];
  priority?: number;
  properties?: string;
  recallType?: number;
  sendSms?: number;
  smsName?: string;
  status?: number;
  taskId?: number;
  taskName?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      allowCallTime: 'AllowCallTime',
      allowCallTimeFormat: 'AllowCallTimeFormat',
      allowDayOfWeek: 'AllowDayOfWeek',
      callType: 'CallType',
      createTime: 'CreateTime',
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
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateListResponseBodyModel extends $tea.Model {
  intentTags?: { [key: string]: any }[];
  personalityTags?: string[];
  properties?: string;
  templateId?: number;
  templateName?: string;
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
  cancel?: number;
  number?: string;
  properties?: { [key: string]: any };
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

  async addBlacklist(request: AddBlacklistRequest): Promise<AddBlacklistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addBlacklistWithOptions(request, runtime);
  }

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

  async addTask(request: AddTaskRequest): Promise<AddTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTaskWithOptions(request, runtime);
  }

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

  async agentCancelCall(request: AgentCancelCallRequest): Promise<AgentCancelCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.agentCancelCallWithOptions(request, runtime);
  }

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

  async agentRecoverCall(request: AgentRecoverCallRequest): Promise<AgentRecoverCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.agentRecoverCallWithOptions(request, runtime);
  }

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

  async details(request: DetailsRequest): Promise<DetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detailsWithOptions(request, runtime);
  }

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

  async editTask(request: EditTaskRequest): Promise<EditTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editTaskWithOptions(request, runtime);
  }

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

  async importNumber(request: ImportNumberRequest): Promise<ImportNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importNumberWithOptions(request, runtime);
  }

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

  async page(request: PageRequest): Promise<PageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pageWithOptions(request, runtime);
  }

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

  async smsTemplateCreate(request: SmsTemplateCreateRequest): Promise<SmsTemplateCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.smsTemplateCreateWithOptions(request, runtime);
  }

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

  async smsTemplatePageList(request: SmsTemplatePageListRequest): Promise<SmsTemplatePageListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.smsTemplatePageListWithOptions(request, runtime);
  }

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

  async taskCallChats(request: TaskCallChatsRequest): Promise<TaskCallChatsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taskCallChatsWithOptions(request, runtime);
  }

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

  async taskCallInfo(request: TaskCallInfoRequest): Promise<TaskCallInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taskCallInfoWithOptions(request, runtime);
  }

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

  async taskCallList(request: TaskCallListRequest): Promise<TaskCallListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taskCallListWithOptions(request, runtime);
  }

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

  async taskCancelCall(request: TaskCancelCallRequest): Promise<TaskCancelCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taskCancelCallWithOptions(request, runtime);
  }

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

  async taskList(request: TaskListRequest): Promise<TaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taskListWithOptions(request, runtime);
  }

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

  async taskRecoverCall(request: TaskRecoverCallRequest): Promise<TaskRecoverCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taskRecoverCallWithOptions(request, runtime);
  }

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

  async templateList(request: TemplateListRequest): Promise<TemplateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.templateListWithOptions(request, runtime);
  }

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

  async updateAgentStatus(request: UpdateAgentStatusRequest): Promise<UpdateAgentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAgentStatusWithOptions(request, runtime);
  }

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

  async updateTaskCustomer(request: UpdateTaskCustomerRequest): Promise<UpdateTaskCustomerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTaskCustomerWithOptions(request, runtime);
  }

}
