// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CancelAsyncTaskRequest extends $tea.Model {
  agentKey?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAsyncTaskResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAsyncTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelAsyncTaskResponseBody;
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
      body: CancelAsyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearIntervenesRequest extends $tea.Model {
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearIntervenesResponseBody extends $tea.Model {
  code?: string;
  data?: ClearIntervenesResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ClearIntervenesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearIntervenesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ClearIntervenesResponseBody;
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
      body: ClearIntervenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGeneratedContentRequest extends $tea.Model {
  agentKey?: string;
  content?: string;
  contentDomain?: string;
  contentText?: string;
  keywords?: string[];
  prompt?: string;
  taskId?: string;
  title?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentDomain: 'ContentDomain',
      contentText: 'ContentText',
      keywords: 'Keywords',
      prompt: 'Prompt',
      taskId: 'TaskId',
      title: 'Title',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentDomain: 'string',
      contentText: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      prompt: 'string',
      taskId: 'string',
      title: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGeneratedContentShrinkRequest extends $tea.Model {
  agentKey?: string;
  content?: string;
  contentDomain?: string;
  contentText?: string;
  keywordsShrink?: string;
  prompt?: string;
  taskId?: string;
  title?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentDomain: 'ContentDomain',
      contentText: 'ContentText',
      keywordsShrink: 'Keywords',
      prompt: 'Prompt',
      taskId: 'TaskId',
      title: 'Title',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentDomain: 'string',
      contentText: 'string',
      keywordsShrink: 'string',
      prompt: 'string',
      taskId: 'string',
      title: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGeneratedContentResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGeneratedContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGeneratedContentResponseBody;
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
      body: CreateGeneratedContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenRequest extends $tea.Model {
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenResponseBody extends $tea.Model {
  code?: string;
  data?: CreateTokenResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateTokenResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTokenResponseBody;
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
      body: CreateTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomTextRequest extends $tea.Model {
  agentKey?: string;
  commodityCode?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      commodityCode: 'CommodityCode',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      commodityCode: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomTextResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCustomTextResponseBody;
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
      body: DeleteCustomTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGeneratedContentRequest extends $tea.Model {
  agentKey?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGeneratedContentResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGeneratedContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGeneratedContentResponseBody;
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
      body: DeleteGeneratedContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInterveneRuleRequest extends $tea.Model {
  agentKey?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInterveneRuleResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteInterveneRuleResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteInterveneRuleResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInterveneRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInterveneRuleResponseBody;
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
      body: DeleteInterveneRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMaterialByIdRequest extends $tea.Model {
  agentKey?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMaterialByIdResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMaterialByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMaterialByIdResponseBody;
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
      body: DeleteMaterialByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportGeneratedContentRequest extends $tea.Model {
  agentKey?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportGeneratedContentResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportGeneratedContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportGeneratedContentResponseBody;
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
      body: ExportGeneratedContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportIntervenesRequest extends $tea.Model {
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportIntervenesResponseBody extends $tea.Model {
  code?: string;
  data?: ExportIntervenesResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ExportIntervenesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportIntervenesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportIntervenesResponseBody;
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
      body: ExportIntervenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackDialogueRequest extends $tea.Model {
  agentKey?: string;
  customerResponse?: string;
  goodText?: string;
  modifiedResponse?: string;
  rating?: string;
  ratingTags?: string[];
  sessionId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      customerResponse: 'CustomerResponse',
      goodText: 'GoodText',
      modifiedResponse: 'ModifiedResponse',
      rating: 'Rating',
      ratingTags: 'RatingTags',
      sessionId: 'SessionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      customerResponse: 'string',
      goodText: 'string',
      modifiedResponse: 'string',
      rating: 'string',
      ratingTags: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackDialogueShrinkRequest extends $tea.Model {
  agentKey?: string;
  customerResponse?: string;
  goodText?: string;
  modifiedResponse?: string;
  rating?: string;
  ratingTagsShrink?: string;
  sessionId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      customerResponse: 'CustomerResponse',
      goodText: 'GoodText',
      modifiedResponse: 'ModifiedResponse',
      rating: 'Rating',
      ratingTagsShrink: 'RatingTags',
      sessionId: 'SessionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      customerResponse: 'string',
      goodText: 'string',
      modifiedResponse: 'string',
      rating: 'string',
      ratingTagsShrink: 'string',
      sessionId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackDialogueResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FeedbackDialogueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FeedbackDialogueResponseBody;
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
      body: FeedbackDialogueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchImageTaskRequest extends $tea.Model {
  agentKey?: string;
  articleTaskId?: string;
  taskIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      articleTaskId: 'ArticleTaskId',
      taskIdList: 'TaskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      articleTaskId: 'string',
      taskIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchImageTaskShrinkRequest extends $tea.Model {
  agentKey?: string;
  articleTaskId?: string;
  taskIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      articleTaskId: 'ArticleTaskId',
      taskIdListShrink: 'TaskIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      articleTaskId: 'string',
      taskIdListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchImageTaskResponseBody extends $tea.Model {
  code?: string;
  data?: FetchImageTaskResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: FetchImageTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchImageTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FetchImageTaskResponseBody;
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
      body: FetchImageTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFileUrlByKeyRequest extends $tea.Model {
  agentKey?: string;
  fileKey?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      fileKey: 'FileKey',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      fileKey: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFileUrlByKeyResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateFileUrlByKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateFileUrlByKeyResponseBody;
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
      body: GenerateFileUrlByKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageTaskRequest extends $tea.Model {
  agentKey?: string;
  articleTaskId?: string;
  paragraphList?: GenerateImageTaskRequestParagraphList[];
  size?: string;
  style?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      articleTaskId: 'ArticleTaskId',
      paragraphList: 'ParagraphList',
      size: 'Size',
      style: 'Style',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      articleTaskId: 'string',
      paragraphList: { 'type': 'array', 'itemType': GenerateImageTaskRequestParagraphList },
      size: 'string',
      style: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageTaskShrinkRequest extends $tea.Model {
  agentKey?: string;
  articleTaskId?: string;
  paragraphListShrink?: string;
  size?: string;
  style?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      articleTaskId: 'ArticleTaskId',
      paragraphListShrink: 'ParagraphList',
      size: 'Size',
      style: 'Style',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      articleTaskId: 'string',
      paragraphListShrink: 'string',
      size: 'string',
      style: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageTaskResponseBody extends $tea.Model {
  code?: string;
  data?: GenerateImageTaskResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GenerateImageTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateImageTaskResponseBody;
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
      body: GenerateImageTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadConfigRequest extends $tea.Model {
  agentKey?: string;
  fileName?: string;
  parentDir?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      fileName: 'FileName',
      parentDir: 'ParentDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      fileName: 'string',
      parentDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadConfigResponseBody extends $tea.Model {
  code?: string;
  data?: GenerateUploadConfigResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GenerateUploadConfigResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateUploadConfigResponseBody;
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
      body: GenerateUploadConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateViewPointRequest extends $tea.Model {
  agentKey?: string;
  referenceData?: GenerateViewPointRequestReferenceData;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      referenceData: 'ReferenceData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      referenceData: GenerateViewPointRequestReferenceData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateViewPointShrinkRequest extends $tea.Model {
  agentKey?: string;
  referenceDataShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      referenceDataShrink: 'ReferenceData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      referenceDataShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateViewPointResponseBody extends $tea.Model {
  code?: string;
  data?: GenerateViewPointResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GenerateViewPointResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateViewPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateViewPointResponseBody;
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
      body: GenerateViewPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTextRequest extends $tea.Model {
  agentKey?: string;
  commodityCode?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      commodityCode: 'CommodityCode',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      commodityCode: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTextResponseBody extends $tea.Model {
  code?: string;
  data?: GetCustomTextResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetCustomTextResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCustomTextResponseBody;
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
      body: GetCustomTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceOrderConfigRequest extends $tea.Model {
  agentKey?: string;
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      productCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceOrderConfigResponseBody extends $tea.Model {
  code?: string;
  data?: GetDataSourceOrderConfigResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDataSourceOrderConfigResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceOrderConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDataSourceOrderConfigResponseBody;
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
      body: GetDataSourceOrderConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGeneratedContentRequest extends $tea.Model {
  agentKey?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGeneratedContentResponseBody extends $tea.Model {
  code?: string;
  data?: GetGeneratedContentResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetGeneratedContentResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGeneratedContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGeneratedContentResponseBody;
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
      body: GetGeneratedContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneGlobalReplyRequest extends $tea.Model {
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneGlobalReplyResponseBody extends $tea.Model {
  code?: string;
  data?: GetInterveneGlobalReplyResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInterveneGlobalReplyResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneGlobalReplyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInterveneGlobalReplyResponseBody;
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
      body: GetInterveneGlobalReplyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneImportTaskInfoRequest extends $tea.Model {
  agentKey?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneImportTaskInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetInterveneImportTaskInfoResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInterveneImportTaskInfoResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneImportTaskInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInterveneImportTaskInfoResponseBody;
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
      body: GetInterveneImportTaskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneRuleDetailRequest extends $tea.Model {
  agentKey?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneRuleDetailResponseBody extends $tea.Model {
  code?: string;
  data?: GetInterveneRuleDetailResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInterveneRuleDetailResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneRuleDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInterveneRuleDetailResponseBody;
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
      body: GetInterveneRuleDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneTemplateFileUrlRequest extends $tea.Model {
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneTemplateFileUrlResponseBody extends $tea.Model {
  code?: string;
  data?: GetInterveneTemplateFileUrlResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInterveneTemplateFileUrlResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneTemplateFileUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInterveneTemplateFileUrlResponseBody;
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
      body: GetInterveneTemplateFileUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMaterialByIdRequest extends $tea.Model {
  agentKey?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMaterialByIdResponseBody extends $tea.Model {
  code?: string;
  data?: GetMaterialByIdResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMaterialByIdResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMaterialByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMaterialByIdResponseBody;
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
      body: GetMaterialByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesRequest extends $tea.Model {
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBody extends $tea.Model {
  code?: string;
  data?: GetPropertiesResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPropertiesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPropertiesResponseBody;
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
      body: GetPropertiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportInterveneFileRequest extends $tea.Model {
  agentKey?: string;
  docName?: string;
  fileKey?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      docName: 'DocName',
      fileKey: 'FileKey',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      docName: 'string',
      fileKey: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportInterveneFileResponseBody extends $tea.Model {
  code?: string;
  data?: ImportInterveneFileResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ImportInterveneFileResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportInterveneFileResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportInterveneFileResponseBody;
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
      body: ImportInterveneFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportInterveneFileAsyncRequest extends $tea.Model {
  agentKey?: string;
  docName?: string;
  fileKey?: string;
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      docName: 'DocName',
      fileKey: 'FileKey',
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      docName: 'string',
      fileKey: 'string',
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportInterveneFileAsyncResponseBody extends $tea.Model {
  code?: string;
  data?: ImportInterveneFileAsyncResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ImportInterveneFileAsyncResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportInterveneFileAsyncResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportInterveneFileAsyncResponseBody;
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
      body: ImportInterveneFileAsyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneGlobalReplyRequest extends $tea.Model {
  agentKey?: string;
  replyMessagList?: InsertInterveneGlobalReplyRequestReplyMessagList[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      replyMessagList: 'ReplyMessagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      replyMessagList: { 'type': 'array', 'itemType': InsertInterveneGlobalReplyRequestReplyMessagList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneGlobalReplyShrinkRequest extends $tea.Model {
  agentKey?: string;
  replyMessagListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      replyMessagListShrink: 'ReplyMessagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      replyMessagListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneGlobalReplyResponseBody extends $tea.Model {
  code?: string;
  data?: InsertInterveneGlobalReplyResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InsertInterveneGlobalReplyResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneGlobalReplyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertInterveneGlobalReplyResponseBody;
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
      body: InsertInterveneGlobalReplyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleRequest extends $tea.Model {
  agentKey?: string;
  interveneRuleConfig?: InsertInterveneRuleRequestInterveneRuleConfig;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      interveneRuleConfig: 'InterveneRuleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      interveneRuleConfig: InsertInterveneRuleRequestInterveneRuleConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleShrinkRequest extends $tea.Model {
  agentKey?: string;
  interveneRuleConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      interveneRuleConfigShrink: 'InterveneRuleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      interveneRuleConfigShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleResponseBody extends $tea.Model {
  code?: string;
  data?: InsertInterveneRuleResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InsertInterveneRuleResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertInterveneRuleResponseBody;
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
      body: InsertInterveneRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTasksRequest extends $tea.Model {
  agentKey?: string;
  createTimeEnd?: string;
  createTimeStart?: string;
  current?: number;
  size?: number;
  taskCode?: string;
  taskName?: string;
  taskStatus?: number;
  taskStatusList?: number[];
  taskType?: string;
  taskTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      current: 'Current',
      size: 'Size',
      taskCode: 'TaskCode',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskStatusList: 'TaskStatusList',
      taskType: 'TaskType',
      taskTypeList: 'TaskTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      current: 'number',
      size: 'number',
      taskCode: 'string',
      taskName: 'string',
      taskStatus: 'number',
      taskStatusList: { 'type': 'array', 'itemType': 'number' },
      taskType: 'string',
      taskTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTasksShrinkRequest extends $tea.Model {
  agentKey?: string;
  createTimeEnd?: string;
  createTimeStart?: string;
  current?: number;
  size?: number;
  taskCode?: string;
  taskName?: string;
  taskStatus?: number;
  taskStatusListShrink?: string;
  taskType?: string;
  taskTypeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      current: 'Current',
      size: 'Size',
      taskCode: 'TaskCode',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskStatusListShrink: 'TaskStatusList',
      taskType: 'TaskType',
      taskTypeListShrink: 'TaskTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      current: 'number',
      size: 'number',
      taskCode: 'string',
      taskName: 'string',
      taskStatus: 'number',
      taskStatusListShrink: 'string',
      taskType: 'string',
      taskTypeListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTasksResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: ListAsyncTasksResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListAsyncTasksResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAsyncTasksResponseBody;
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
      body: ListAsyncTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildConfigsRequest extends $tea.Model {
  agentKey?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildConfigsResponseBody extends $tea.Model {
  code?: string;
  data?: ListBuildConfigsResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListBuildConfigsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBuildConfigsResponseBody;
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
      body: ListBuildConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomTextRequest extends $tea.Model {
  agentKey?: string;
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomTextResponseBody extends $tea.Model {
  code?: string;
  data?: ListCustomTextResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListCustomTextResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomTextResponseBody;
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
      body: ListCustomTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialoguesRequest extends $tea.Model {
  agentKey?: string;
  current?: number;
  dialogueType?: number;
  endTime?: string;
  size?: number;
  startTime?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      current: 'Current',
      dialogueType: 'DialogueType',
      endTime: 'EndTime',
      size: 'Size',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      current: 'number',
      dialogueType: 'number',
      endTime: 'string',
      size: 'number',
      startTime: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialoguesResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: ListDialoguesResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListDialoguesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialoguesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDialoguesResponseBody;
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
      body: ListDialoguesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGeneratedContentsRequest extends $tea.Model {
  agentKey?: string;
  contentDomain?: string;
  current?: number;
  endTime?: string;
  size?: number;
  startTime?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      contentDomain: 'ContentDomain',
      current: 'Current',
      endTime: 'EndTime',
      size: 'Size',
      startTime: 'StartTime',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      contentDomain: 'string',
      current: 'number',
      endTime: 'string',
      size: 'number',
      startTime: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGeneratedContentsResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: ListGeneratedContentsResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListGeneratedContentsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGeneratedContentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGeneratedContentsResponseBody;
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
      body: ListGeneratedContentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotNewsWithTypeRequest extends $tea.Model {
  agentKey?: string;
  current?: number;
  newsType?: string;
  newsTypes?: string[];
  size?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      current: 'Current',
      newsType: 'NewsType',
      newsTypes: 'NewsTypes',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      current: 'number',
      newsType: 'string',
      newsTypes: { 'type': 'array', 'itemType': 'string' },
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotNewsWithTypeShrinkRequest extends $tea.Model {
  agentKey?: string;
  current?: number;
  newsType?: string;
  newsTypesShrink?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      current: 'Current',
      newsType: 'NewsType',
      newsTypesShrink: 'NewsTypes',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      current: 'number',
      newsType: 'string',
      newsTypesShrink: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotNewsWithTypeResponseBody extends $tea.Model {
  code?: string;
  data?: ListHotNewsWithTypeResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListHotNewsWithTypeResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotNewsWithTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListHotNewsWithTypeResponseBody;
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
      body: ListHotNewsWithTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneCntRequest extends $tea.Model {
  agentKey?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneCntResponseBody extends $tea.Model {
  code?: string;
  data?: ListInterveneCntResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListInterveneCntResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneCntResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInterveneCntResponseBody;
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
      body: ListInterveneCntResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneImportTasksRequest extends $tea.Model {
  agentKey?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneImportTasksResponseBody extends $tea.Model {
  code?: string;
  data?: ListInterveneImportTasksResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListInterveneImportTasksResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneImportTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInterveneImportTasksResponseBody;
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
      body: ListInterveneImportTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneRulesRequest extends $tea.Model {
  agentKey?: string;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneRulesResponseBody extends $tea.Model {
  code?: string;
  data?: ListInterveneRulesResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListInterveneRulesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInterveneRulesResponseBody;
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
      body: ListInterveneRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervenesRequest extends $tea.Model {
  agentKey?: string;
  interveneType?: number;
  pageIndex?: number;
  pageSize?: number;
  query?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      interveneType: 'InterveneType',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      query: 'Query',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      interveneType: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      query: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervenesResponseBody extends $tea.Model {
  code?: string;
  data?: ListIntervenesResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListIntervenesResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervenesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIntervenesResponseBody;
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
      body: ListIntervenesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMaterialDocumentsRequest extends $tea.Model {
  agentKey?: string;
  content?: string;
  createTimeEnd?: string;
  createTimeStart?: string;
  current?: number;
  docType?: string;
  docTypeList?: string[];
  generatePublicUrl?: boolean;
  id?: number;
  keywords?: string[];
  query?: string;
  shareAttr?: number;
  size?: number;
  title?: string;
  updateTimeEnd?: string;
  updateTimeStart?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      current: 'Current',
      docType: 'DocType',
      docTypeList: 'DocTypeList',
      generatePublicUrl: 'GeneratePublicUrl',
      id: 'Id',
      keywords: 'Keywords',
      query: 'Query',
      shareAttr: 'ShareAttr',
      size: 'Size',
      title: 'Title',
      updateTimeEnd: 'UpdateTimeEnd',
      updateTimeStart: 'UpdateTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      current: 'number',
      docType: 'string',
      docTypeList: { 'type': 'array', 'itemType': 'string' },
      generatePublicUrl: 'boolean',
      id: 'number',
      keywords: { 'type': 'array', 'itemType': 'string' },
      query: 'string',
      shareAttr: 'number',
      size: 'number',
      title: 'string',
      updateTimeEnd: 'string',
      updateTimeStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMaterialDocumentsShrinkRequest extends $tea.Model {
  agentKey?: string;
  content?: string;
  createTimeEnd?: string;
  createTimeStart?: string;
  current?: number;
  docType?: string;
  docTypeListShrink?: string;
  generatePublicUrl?: boolean;
  id?: number;
  keywordsShrink?: string;
  query?: string;
  shareAttr?: number;
  size?: number;
  title?: string;
  updateTimeEnd?: string;
  updateTimeStart?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      current: 'Current',
      docType: 'DocType',
      docTypeListShrink: 'DocTypeList',
      generatePublicUrl: 'GeneratePublicUrl',
      id: 'Id',
      keywordsShrink: 'Keywords',
      query: 'Query',
      shareAttr: 'ShareAttr',
      size: 'Size',
      title: 'Title',
      updateTimeEnd: 'UpdateTimeEnd',
      updateTimeStart: 'UpdateTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      current: 'number',
      docType: 'string',
      docTypeListShrink: 'string',
      generatePublicUrl: 'boolean',
      id: 'number',
      keywordsShrink: 'string',
      query: 'string',
      shareAttr: 'number',
      size: 'number',
      title: 'string',
      updateTimeEnd: 'string',
      updateTimeStart: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMaterialDocumentsResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: ListMaterialDocumentsResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListMaterialDocumentsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMaterialDocumentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMaterialDocumentsResponseBody;
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
      body: ListMaterialDocumentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsRequest extends $tea.Model {
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsResponseBody extends $tea.Model {
  code?: string;
  data?: ListVersionsResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListVersionsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVersionsResponseBody;
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
      body: ListVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsyncTaskRequest extends $tea.Model {
  agentKey?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsyncTaskResponseBody extends $tea.Model {
  code?: string;
  data?: QueryAsyncTaskResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryAsyncTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsyncTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAsyncTaskResponseBody;
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
      body: QueryAsyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveCustomTextRequest extends $tea.Model {
  agentKey?: string;
  commodityCode?: string;
  content?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      commodityCode: 'CommodityCode',
      content: 'Content',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      commodityCode: 'string',
      content: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveCustomTextResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveCustomTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveCustomTextResponseBody;
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
      body: SaveCustomTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDataSourceOrderConfigRequest extends $tea.Model {
  agentKey?: string;
  productCode?: string;
  userConfigDataSourceList?: SaveDataSourceOrderConfigRequestUserConfigDataSourceList[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      productCode: 'ProductCode',
      userConfigDataSourceList: 'UserConfigDataSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      productCode: 'string',
      userConfigDataSourceList: { 'type': 'array', 'itemType': SaveDataSourceOrderConfigRequestUserConfigDataSourceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDataSourceOrderConfigShrinkRequest extends $tea.Model {
  agentKey?: string;
  productCode?: string;
  userConfigDataSourceListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      productCode: 'ProductCode',
      userConfigDataSourceListShrink: 'UserConfigDataSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      productCode: 'string',
      userConfigDataSourceListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDataSourceOrderConfigResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDataSourceOrderConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveDataSourceOrderConfigResponseBody;
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
      body: SaveDataSourceOrderConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMaterialDocumentRequest extends $tea.Model {
  agentKey?: string;
  author?: string;
  bothSavePrivateAndShare?: boolean;
  docKeywords?: string[];
  docType?: string;
  externalUrl?: string;
  htmlContent?: string;
  pubTime?: string;
  shareAttr?: number;
  srcFrom?: string;
  summary?: string;
  textContent?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      author: 'Author',
      bothSavePrivateAndShare: 'BothSavePrivateAndShare',
      docKeywords: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      htmlContent: 'HtmlContent',
      pubTime: 'PubTime',
      shareAttr: 'ShareAttr',
      srcFrom: 'SrcFrom',
      summary: 'Summary',
      textContent: 'TextContent',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      author: 'string',
      bothSavePrivateAndShare: 'boolean',
      docKeywords: { 'type': 'array', 'itemType': 'string' },
      docType: 'string',
      externalUrl: 'string',
      htmlContent: 'string',
      pubTime: 'string',
      shareAttr: 'number',
      srcFrom: 'string',
      summary: 'string',
      textContent: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMaterialDocumentShrinkRequest extends $tea.Model {
  agentKey?: string;
  author?: string;
  bothSavePrivateAndShare?: boolean;
  docKeywordsShrink?: string;
  docType?: string;
  externalUrl?: string;
  htmlContent?: string;
  pubTime?: string;
  shareAttr?: number;
  srcFrom?: string;
  summary?: string;
  textContent?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      author: 'Author',
      bothSavePrivateAndShare: 'BothSavePrivateAndShare',
      docKeywordsShrink: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      htmlContent: 'HtmlContent',
      pubTime: 'PubTime',
      shareAttr: 'ShareAttr',
      srcFrom: 'SrcFrom',
      summary: 'Summary',
      textContent: 'TextContent',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      author: 'string',
      bothSavePrivateAndShare: 'boolean',
      docKeywordsShrink: 'string',
      docType: 'string',
      externalUrl: 'string',
      htmlContent: 'string',
      pubTime: 'string',
      shareAttr: 'number',
      srcFrom: 'string',
      summary: 'string',
      textContent: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMaterialDocumentResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMaterialDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SaveMaterialDocumentResponseBody;
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
      body: SaveMaterialDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchNewsRequest extends $tea.Model {
  agentKey?: string;
  filterNotNull?: boolean;
  includeContent?: boolean;
  page?: number;
  pageSize?: number;
  query?: string;
  searchSources?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      filterNotNull: 'FilterNotNull',
      includeContent: 'IncludeContent',
      page: 'Page',
      pageSize: 'PageSize',
      query: 'Query',
      searchSources: 'SearchSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      filterNotNull: 'boolean',
      includeContent: 'boolean',
      page: 'number',
      pageSize: 'number',
      query: 'string',
      searchSources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchNewsShrinkRequest extends $tea.Model {
  agentKey?: string;
  filterNotNull?: boolean;
  includeContent?: boolean;
  page?: number;
  pageSize?: number;
  query?: string;
  searchSourcesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      filterNotNull: 'FilterNotNull',
      includeContent: 'IncludeContent',
      page: 'Page',
      pageSize: 'PageSize',
      query: 'Query',
      searchSourcesShrink: 'SearchSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      filterNotNull: 'boolean',
      includeContent: 'boolean',
      page: 'number',
      pageSize: 'number',
      query: 'string',
      searchSourcesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchNewsResponseBody extends $tea.Model {
  code?: string;
  current?: number;
  data?: SearchNewsResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  size?: number;
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': SearchNewsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchNewsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SearchNewsResponseBody;
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
      body: SearchNewsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAsyncTaskRequest extends $tea.Model {
  agentKey?: string;
  taskCode?: string;
  taskExecuteTime?: string;
  taskName?: string;
  taskParam?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskCode: 'TaskCode',
      taskExecuteTime: 'TaskExecuteTime',
      taskName: 'TaskName',
      taskParam: 'TaskParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskCode: 'string',
      taskExecuteTime: 'string',
      taskName: 'string',
      taskParam: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAsyncTaskResponseBody extends $tea.Model {
  code?: string;
  data?: SubmitAsyncTaskResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: SubmitAsyncTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAsyncTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitAsyncTaskResponseBody;
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
      body: SubmitAsyncTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomTextRequest extends $tea.Model {
  agentKey?: string;
  commodityCode?: string;
  content?: string;
  id?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      commodityCode: 'CommodityCode',
      content: 'Content',
      id: 'Id',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      commodityCode: 'string',
      content: 'string',
      id: 'number',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomTextResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomTextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCustomTextResponseBody;
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
      body: UpdateCustomTextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGeneratedContentRequest extends $tea.Model {
  agentKey?: string;
  content?: string;
  contentText?: string;
  id?: number;
  keywords?: string[];
  prompt?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentText: 'ContentText',
      id: 'Id',
      keywords: 'Keywords',
      prompt: 'Prompt',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentText: 'string',
      id: 'number',
      keywords: { 'type': 'array', 'itemType': 'string' },
      prompt: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGeneratedContentShrinkRequest extends $tea.Model {
  agentKey?: string;
  content?: string;
  contentText?: string;
  id?: number;
  keywordsShrink?: string;
  prompt?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentText: 'ContentText',
      id: 'Id',
      keywordsShrink: 'Keywords',
      prompt: 'Prompt',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentText: 'string',
      id: 'number',
      keywordsShrink: 'string',
      prompt: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGeneratedContentResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGeneratedContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGeneratedContentResponseBody;
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
      body: UpdateGeneratedContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMaterialDocumentRequest extends $tea.Model {
  agentKey?: string;
  author?: string;
  docKeywords?: string[];
  docType?: string;
  externalUrl?: string;
  htmlContent?: string;
  id?: number;
  pubTime?: string;
  shareAttr?: number;
  srcFrom?: string;
  summary?: string;
  textContent?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      author: 'Author',
      docKeywords: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      htmlContent: 'HtmlContent',
      id: 'Id',
      pubTime: 'PubTime',
      shareAttr: 'ShareAttr',
      srcFrom: 'SrcFrom',
      summary: 'Summary',
      textContent: 'TextContent',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      author: 'string',
      docKeywords: { 'type': 'array', 'itemType': 'string' },
      docType: 'string',
      externalUrl: 'string',
      htmlContent: 'string',
      id: 'number',
      pubTime: 'string',
      shareAttr: 'number',
      srcFrom: 'string',
      summary: 'string',
      textContent: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMaterialDocumentShrinkRequest extends $tea.Model {
  agentKey?: string;
  author?: string;
  docKeywordsShrink?: string;
  docType?: string;
  externalUrl?: string;
  htmlContent?: string;
  id?: number;
  pubTime?: string;
  shareAttr?: number;
  srcFrom?: string;
  summary?: string;
  textContent?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      author: 'Author',
      docKeywordsShrink: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      htmlContent: 'HtmlContent',
      id: 'Id',
      pubTime: 'PubTime',
      shareAttr: 'ShareAttr',
      srcFrom: 'SrcFrom',
      summary: 'Summary',
      textContent: 'TextContent',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      author: 'string',
      docKeywordsShrink: 'string',
      docType: 'string',
      externalUrl: 'string',
      htmlContent: 'string',
      id: 'number',
      pubTime: 'string',
      shareAttr: 'number',
      srcFrom: 'string',
      summary: 'string',
      textContent: 'string',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMaterialDocumentResponseBody extends $tea.Model {
  code?: string;
  data?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMaterialDocumentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateMaterialDocumentResponseBody;
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
      body: UpdateMaterialDocumentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearIntervenesResponseBodyData extends $tea.Model {
  failIdList?: string[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      failIdList: 'FailIdList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failIdList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTokenResponseBodyData extends $tea.Model {
  expiredTime?: number;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'number',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInterveneRuleResponseBodyData extends $tea.Model {
  failIdList?: string[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      failIdList: 'FailIdList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failIdList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportIntervenesResponseBodyData extends $tea.Model {
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchImageTaskResponseBodyDataTaskInfoListImageList extends $tea.Model {
  code?: string;
  message?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchImageTaskResponseBodyDataTaskInfoList extends $tea.Model {
  id?: number;
  imageList?: FetchImageTaskResponseBodyDataTaskInfoListImageList[];
  taskId?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      imageList: 'ImageList',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      imageList: { 'type': 'array', 'itemType': FetchImageTaskResponseBodyDataTaskInfoListImageList },
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchImageTaskResponseBodyData extends $tea.Model {
  taskInfoList?: FetchImageTaskResponseBodyDataTaskInfoList[];
  static names(): { [key: string]: string } {
    return {
      taskInfoList: 'TaskInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskInfoList: { 'type': 'array', 'itemType': FetchImageTaskResponseBodyDataTaskInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageTaskRequestParagraphList extends $tea.Model {
  content?: string;
  id?: number;
  taskId?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageTaskResponseBodyDataTaskList extends $tea.Model {
  content?: string;
  id?: number;
  taskId?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageTaskResponseBodyData extends $tea.Model {
  taskList?: GenerateImageTaskResponseBodyDataTaskList[];
  static names(): { [key: string]: string } {
    return {
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskList: { 'type': 'array', 'itemType': GenerateImageTaskResponseBodyDataTaskList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadConfigResponseBodyData extends $tea.Model {
  fileKey?: string;
  formDatas?: { [key: string]: any };
  postUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileKey: 'FileKey',
      formDatas: 'FormDatas',
      postUrl: 'PostUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileKey: 'string',
      formDatas: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      postUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateViewPointRequestReferenceData extends $tea.Model {
  miniDoc?: string[];
  static names(): { [key: string]: string } {
    return {
      miniDoc: 'MiniDoc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      miniDoc: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateViewPointResponseBodyData extends $tea.Model {
  point?: string;
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomTextResponseBodyData extends $tea.Model {
  content?: string;
  createTime?: string;
  createUser?: string;
  id?: number;
  title?: string;
  updateTime?: string;
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      createUser: 'string',
      id: 'number',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceOrderConfigResponseBodyDataUserConfigDataSourceList extends $tea.Model {
  code?: string;
  name?: string;
  number?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      number: 'Number',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      number: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceOrderConfigResponseBodyData extends $tea.Model {
  userConfigDataSourceList?: GetDataSourceOrderConfigResponseBodyDataUserConfigDataSourceList[];
  static names(): { [key: string]: string } {
    return {
      userConfigDataSourceList: 'UserConfigDataSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userConfigDataSourceList: { 'type': 'array', 'itemType': GetDataSourceOrderConfigResponseBodyDataUserConfigDataSourceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGeneratedContentResponseBodyData extends $tea.Model {
  content?: string;
  contentDomain?: string;
  contentText?: string;
  createTime?: string;
  createUser?: string;
  deviceId?: string;
  id?: number;
  keywordList?: string[];
  keywords?: string;
  prompt?: string;
  taskId?: string;
  title?: string;
  updateTime?: string;
  updateUser?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentDomain: 'ContentDomain',
      contentText: 'ContentText',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      deviceId: 'DeviceId',
      id: 'Id',
      keywordList: 'KeywordList',
      keywords: 'Keywords',
      prompt: 'Prompt',
      taskId: 'TaskId',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentDomain: 'string',
      contentText: 'string',
      createTime: 'string',
      createUser: 'string',
      deviceId: 'string',
      id: 'number',
      keywordList: { 'type': 'array', 'itemType': 'string' },
      keywords: 'string',
      prompt: 'string',
      taskId: 'string',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneGlobalReplyResponseBodyDataReplyMessagList extends $tea.Model {
  message?: string;
  replyType?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      replyType: 'ReplyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      replyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneGlobalReplyResponseBodyData extends $tea.Model {
  replyMessagList?: GetInterveneGlobalReplyResponseBodyDataReplyMessagList[];
  static names(): { [key: string]: string } {
    return {
      replyMessagList: 'ReplyMessagList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replyMessagList: { 'type': 'array', 'itemType': GetInterveneGlobalReplyResponseBodyDataReplyMessagList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneImportTaskInfoResponseBodyDataStatus extends $tea.Model {
  msg?: string;
  percentage?: number;
  status?: number;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      percentage: 'Percentage',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      percentage: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneImportTaskInfoResponseBodyData extends $tea.Model {
  status?: GetInterveneImportTaskInfoResponseBodyDataStatus;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: GetInterveneImportTaskInfoResponseBodyDataStatus,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig extends $tea.Model {
  answerType?: number;
  message?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      answerType: 'AnswerType',
      message: 'Message',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerType: 'number',
      message: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailEffectConfig extends $tea.Model {
  effectType?: number;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      effectType: 'EffectType',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectType: 'number',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneRuleDetailResponseBodyDataInterveneRuleDetail extends $tea.Model {
  answerConfig?: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig[];
  effectConfig?: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailEffectConfig;
  interveneType?: number;
  namespaceList?: string[];
  ruleId?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      answerConfig: 'AnswerConfig',
      effectConfig: 'EffectConfig',
      interveneType: 'InterveneType',
      namespaceList: 'NamespaceList',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerConfig: { 'type': 'array', 'itemType': GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailAnswerConfig },
      effectConfig: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetailEffectConfig,
      interveneType: 'number',
      namespaceList: { 'type': 'array', 'itemType': 'string' },
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneRuleDetailResponseBodyData extends $tea.Model {
  interveneRuleDetail?: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetail;
  static names(): { [key: string]: string } {
    return {
      interveneRuleDetail: 'InterveneRuleDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interveneRuleDetail: GetInterveneRuleDetailResponseBodyDataInterveneRuleDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterveneTemplateFileUrlResponseBodyData extends $tea.Model {
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMaterialByIdResponseBodyData extends $tea.Model {
  author?: string;
  createTime?: string;
  createUser?: string;
  docKeywords?: string[];
  docType?: string;
  externalUrl?: string;
  htmlContent?: string;
  id?: number;
  pubTime?: string;
  publicUrl?: string;
  shareAttr?: number;
  srcFrom?: string;
  summary?: string;
  textContent?: string;
  thumbnailInBase64?: string;
  title?: string;
  updateTime?: string;
  updateUser?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      docKeywords: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      htmlContent: 'HtmlContent',
      id: 'Id',
      pubTime: 'PubTime',
      publicUrl: 'PublicUrl',
      shareAttr: 'ShareAttr',
      srcFrom: 'SrcFrom',
      summary: 'Summary',
      textContent: 'TextContent',
      thumbnailInBase64: 'ThumbnailInBase64',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      createTime: 'string',
      createUser: 'string',
      docKeywords: { 'type': 'array', 'itemType': 'string' },
      docType: 'string',
      externalUrl: 'string',
      htmlContent: 'string',
      id: 'number',
      pubTime: 'string',
      publicUrl: 'string',
      shareAttr: 'number',
      srcFrom: 'string',
      summary: 'string',
      textContent: 'string',
      thumbnailInBase64: 'string',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataConsoleConfig extends $tea.Model {
  tipContent?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      tipContent: 'TipContent',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tipContent: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamplesArticles extends $tea.Model {
  select?: boolean;
  stared?: boolean;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
      stared: 'Stared',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
      stared: 'boolean',
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamples extends $tea.Model {
  articles?: GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamplesArticles[];
  prompt?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      articles: 'Articles',
      prompt: 'Prompt',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articles: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamplesArticles },
      prompt: 'string',
      text: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSources extends $tea.Model {
  code?: string;
  datasetName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datasetName: 'DatasetName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      datasetName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataIntelligentSearchConfig extends $tea.Model {
  productDescription?: string;
  searchSamples?: GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamples[];
  searchSources?: GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSources[];
  static names(): { [key: string]: string } {
    return {
      productDescription: 'ProductDescription',
      searchSamples: 'SearchSamples',
      searchSources: 'SearchSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productDescription: 'string',
      searchSamples: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSamples },
      searchSources: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataIntelligentSearchConfigSearchSources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataSearchSources extends $tea.Model {
  label?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataUserInfo extends $tea.Model {
  agentId?: string;
  tenantId?: string;
  userId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      tenantId: 'TenantId',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      tenantId: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataWanxiangImageSizeConfig extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyDataWanxiangImageStyleConfig extends $tea.Model {
  name?: string;
  pic?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pic: 'Pic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pic: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPropertiesResponseBodyData extends $tea.Model {
  chatConfig?: { [key: string]: any };
  consoleConfig?: GetPropertiesResponseBodyDataConsoleConfig;
  generalConfigMap?: { [key: string]: any };
  intelligentSearchConfig?: GetPropertiesResponseBodyDataIntelligentSearchConfig;
  searchSources?: GetPropertiesResponseBodyDataSearchSources[];
  slrAuthorized?: boolean;
  userInfo?: GetPropertiesResponseBodyDataUserInfo;
  wanxiangImageSizeConfig?: GetPropertiesResponseBodyDataWanxiangImageSizeConfig[];
  wanxiangImageStyleConfig?: GetPropertiesResponseBodyDataWanxiangImageStyleConfig[];
  static names(): { [key: string]: string } {
    return {
      chatConfig: 'ChatConfig',
      consoleConfig: 'ConsoleConfig',
      generalConfigMap: 'GeneralConfigMap',
      intelligentSearchConfig: 'IntelligentSearchConfig',
      searchSources: 'SearchSources',
      slrAuthorized: 'SlrAuthorized',
      userInfo: 'UserInfo',
      wanxiangImageSizeConfig: 'WanxiangImageSizeConfig',
      wanxiangImageStyleConfig: 'WanxiangImageStyleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      consoleConfig: GetPropertiesResponseBodyDataConsoleConfig,
      generalConfigMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      intelligentSearchConfig: GetPropertiesResponseBodyDataIntelligentSearchConfig,
      searchSources: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataSearchSources },
      slrAuthorized: 'boolean',
      userInfo: GetPropertiesResponseBodyDataUserInfo,
      wanxiangImageSizeConfig: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataWanxiangImageSizeConfig },
      wanxiangImageStyleConfig: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataWanxiangImageStyleConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportInterveneFileResponseBodyData extends $tea.Model {
  failIdList?: string[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      failIdList: 'FailIdList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failIdList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportInterveneFileAsyncResponseBodyData extends $tea.Model {
  failIdList?: string[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      failIdList: 'FailIdList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failIdList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneGlobalReplyRequestReplyMessagList extends $tea.Model {
  message?: string;
  replyType?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      replyType: 'ReplyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      replyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneGlobalReplyResponseBodyData extends $tea.Model {
  failIdList?: string[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      failIdList: 'FailIdList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failIdList: { 'type': 'array', 'itemType': 'string' },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleRequestInterveneRuleConfigAnswerConfig extends $tea.Model {
  answerType?: number;
  message?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      answerType: 'AnswerType',
      message: 'Message',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerType: 'number',
      message: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleRequestInterveneRuleConfigEffectConfig extends $tea.Model {
  effectType?: number;
  endTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      effectType: 'EffectType',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectType: 'number',
      endTime: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleRequestInterveneRuleConfigInterveneConfigList extends $tea.Model {
  id?: string;
  operationType?: number;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operationType: 'OperationType',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      operationType: 'number',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleRequestInterveneRuleConfig extends $tea.Model {
  answerConfig?: InsertInterveneRuleRequestInterveneRuleConfigAnswerConfig[];
  effectConfig?: InsertInterveneRuleRequestInterveneRuleConfigEffectConfig;
  interveneConfigList?: InsertInterveneRuleRequestInterveneRuleConfigInterveneConfigList[];
  interveneType?: number;
  namespaceList?: string[];
  ruleId?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      answerConfig: 'AnswerConfig',
      effectConfig: 'EffectConfig',
      interveneConfigList: 'InterveneConfigList',
      interveneType: 'InterveneType',
      namespaceList: 'NamespaceList',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerConfig: { 'type': 'array', 'itemType': InsertInterveneRuleRequestInterveneRuleConfigAnswerConfig },
      effectConfig: InsertInterveneRuleRequestInterveneRuleConfigEffectConfig,
      interveneConfigList: { 'type': 'array', 'itemType': InsertInterveneRuleRequestInterveneRuleConfigInterveneConfigList },
      interveneType: 'number',
      namespaceList: { 'type': 'array', 'itemType': 'string' },
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertInterveneRuleResponseBodyData extends $tea.Model {
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTasksResponseBodyData extends $tea.Model {
  createTime?: string;
  createUser?: string;
  id?: number;
  taskCode?: string;
  taskDefinition?: string;
  taskEndTime?: string;
  taskErrorMessage?: string;
  taskExecuteTime?: string;
  taskId?: string;
  taskInnerErrorMessage?: string;
  taskIntermediateResult?: string;
  taskName?: string;
  taskParam?: string;
  taskProgressMessage?: string;
  taskResult?: string;
  taskRetryCount?: string;
  taskStartTime?: string;
  taskStatus?: number;
  taskType?: string;
  updateTime?: string;
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      taskCode: 'TaskCode',
      taskDefinition: 'TaskDefinition',
      taskEndTime: 'TaskEndTime',
      taskErrorMessage: 'TaskErrorMessage',
      taskExecuteTime: 'TaskExecuteTime',
      taskId: 'TaskId',
      taskInnerErrorMessage: 'TaskInnerErrorMessage',
      taskIntermediateResult: 'TaskIntermediateResult',
      taskName: 'TaskName',
      taskParam: 'TaskParam',
      taskProgressMessage: 'TaskProgressMessage',
      taskResult: 'TaskResult',
      taskRetryCount: 'TaskRetryCount',
      taskStartTime: 'TaskStartTime',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      id: 'number',
      taskCode: 'string',
      taskDefinition: 'string',
      taskEndTime: 'string',
      taskErrorMessage: 'string',
      taskExecuteTime: 'string',
      taskId: 'string',
      taskInnerErrorMessage: 'string',
      taskIntermediateResult: 'string',
      taskName: 'string',
      taskParam: 'string',
      taskProgressMessage: 'string',
      taskResult: 'string',
      taskRetryCount: 'string',
      taskStartTime: 'string',
      taskStatus: 'number',
      taskType: 'string',
      updateTime: 'string',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildConfigsResponseBodyDataKeywords extends $tea.Model {
  description?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBuildConfigsResponseBodyData extends $tea.Model {
  buildIn?: boolean;
  createTime?: string;
  createUser?: string;
  id?: number;
  keywords?: ListBuildConfigsResponseBodyDataKeywords[];
  tag?: string;
  tagDescription?: string;
  type?: string;
  updateTime?: string;
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      buildIn: 'BuildIn',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      keywords: 'Keywords',
      tag: 'Tag',
      tagDescription: 'TagDescription',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildIn: 'boolean',
      createTime: 'string',
      createUser: 'string',
      id: 'number',
      keywords: { 'type': 'array', 'itemType': ListBuildConfigsResponseBodyDataKeywords },
      tag: 'string',
      tagDescription: 'string',
      type: 'string',
      updateTime: 'string',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomTextResponseBodyData extends $tea.Model {
  content?: string;
  createTime?: string;
  createUser?: string;
  id?: number;
  title?: string;
  updateTime?: string;
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      id: 'Id',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      createUser: 'string',
      id: 'number',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialoguesResponseBodyData extends $tea.Model {
  bot?: string;
  createTime?: string;
  createUser?: string;
  dialogueType?: number;
  taskId?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      bot: 'Bot',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      dialogueType: 'DialogueType',
      taskId: 'TaskId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bot: 'string',
      createTime: 'string',
      createUser: 'string',
      dialogueType: 'number',
      taskId: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGeneratedContentsResponseBodyData extends $tea.Model {
  content?: string;
  contentDomain?: string;
  contentText?: string;
  createTime?: string;
  createUser?: string;
  deviceId?: string;
  id?: number;
  keywordList?: string[];
  keywords?: string;
  prompt?: string;
  taskId?: string;
  title?: string;
  updateTime?: string;
  updateUser?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentDomain: 'ContentDomain',
      contentText: 'ContentText',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      deviceId: 'DeviceId',
      id: 'Id',
      keywordList: 'KeywordList',
      keywords: 'Keywords',
      prompt: 'Prompt',
      taskId: 'TaskId',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentDomain: 'string',
      contentText: 'string',
      createTime: 'string',
      createUser: 'string',
      deviceId: 'string',
      id: 'number',
      keywordList: { 'type': 'array', 'itemType': 'string' },
      keywords: 'string',
      prompt: 'string',
      taskId: 'string',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotNewsWithTypeResponseBodyDataNews extends $tea.Model {
  author?: string;
  content?: string;
  docUuid?: string;
  imageUrls?: string[];
  pubTime?: string;
  searchSource?: string;
  searchSourceName?: string;
  source?: string;
  summary?: string;
  tag?: string;
  title?: string;
  updateTime?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docUuid: 'DocUuid',
      imageUrls: 'ImageUrls',
      pubTime: 'PubTime',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      updateTime: 'UpdateTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docUuid: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      pubTime: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
      title: 'string',
      updateTime: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHotNewsWithTypeResponseBodyData extends $tea.Model {
  news?: ListHotNewsWithTypeResponseBodyDataNews[];
  newsType?: string;
  newsTypeName?: string;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      news: 'News',
      newsType: 'NewsType',
      newsTypeName: 'NewsTypeName',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      news: { 'type': 'array', 'itemType': ListHotNewsWithTypeResponseBodyDataNews },
      newsType: 'string',
      newsTypeName: 'string',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneCntResponseBodyData extends $tea.Model {
  cntList?: any[];
  pageCnt?: number;
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      cntList: 'CntList',
      pageCnt: 'PageCnt',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cntList: { 'type': 'array', 'itemType': 'any' },
      pageCnt: 'number',
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneImportTasksResponseBodyDataStatusList extends $tea.Model {
  msg?: string;
  percentage?: number;
  status?: number;
  taskId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      percentage: 'Percentage',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      percentage: 'number',
      status: 'number',
      taskId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneImportTasksResponseBodyData extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  statusList?: ListInterveneImportTasksResponseBodyDataStatusList[];
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      statusList: 'StatusList',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': ListInterveneImportTasksResponseBodyDataStatusList },
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneRulesResponseBodyDataInterveneRuleListAnswerConfig extends $tea.Model {
  answerType?: number;
  message?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      answerType: 'AnswerType',
      message: 'Message',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerType: 'number',
      message: 'string',
      namespace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneRulesResponseBodyDataInterveneRuleList extends $tea.Model {
  answerConfig?: ListInterveneRulesResponseBodyDataInterveneRuleListAnswerConfig[];
  createTime?: string;
  effectTime?: string;
  interveneType?: number;
  namespaceList?: string[];
  ruleId?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      answerConfig: 'AnswerConfig',
      createTime: 'CreateTime',
      effectTime: 'EffectTime',
      interveneType: 'InterveneType',
      namespaceList: 'NamespaceList',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerConfig: { 'type': 'array', 'itemType': ListInterveneRulesResponseBodyDataInterveneRuleListAnswerConfig },
      createTime: 'string',
      effectTime: 'string',
      interveneType: 'number',
      namespaceList: { 'type': 'array', 'itemType': 'string' },
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInterveneRulesResponseBodyData extends $tea.Model {
  count?: number;
  interveneRuleList?: ListInterveneRulesResponseBodyDataInterveneRuleList[];
  pageIndex?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      interveneRuleList: 'InterveneRuleList',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      interveneRuleList: { 'type': 'array', 'itemType': ListInterveneRulesResponseBodyDataInterveneRuleList },
      pageIndex: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervenesResponseBodyDataInterveneList extends $tea.Model {
  id?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntervenesResponseBodyData extends $tea.Model {
  interveneList?: ListIntervenesResponseBodyDataInterveneList[];
  pageIndex?: number;
  pageSize?: number;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      interveneList: 'InterveneList',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interveneList: { 'type': 'array', 'itemType': ListIntervenesResponseBodyDataInterveneList },
      pageIndex: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMaterialDocumentsResponseBodyData extends $tea.Model {
  author?: string;
  createTime?: string;
  createUser?: string;
  createUserName?: string;
  docKeywords?: string[];
  docType?: string;
  externalUrl?: string;
  htmlContent?: string;
  id?: number;
  pubTime?: string;
  publicUrl?: string;
  shareAttr?: number;
  srcFrom?: string;
  summary?: string;
  textContent?: string;
  thumbnailInBase64?: string;
  title?: string;
  updateTime?: string;
  updateUser?: string;
  updateUserName?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      createUserName: 'CreateUserName',
      docKeywords: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      htmlContent: 'HtmlContent',
      id: 'Id',
      pubTime: 'PubTime',
      publicUrl: 'PublicUrl',
      shareAttr: 'ShareAttr',
      srcFrom: 'SrcFrom',
      summary: 'Summary',
      textContent: 'TextContent',
      thumbnailInBase64: 'ThumbnailInBase64',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      updateUserName: 'UpdateUserName',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      createTime: 'string',
      createUser: 'string',
      createUserName: 'string',
      docKeywords: { 'type': 'array', 'itemType': 'string' },
      docType: 'string',
      externalUrl: 'string',
      htmlContent: 'string',
      id: 'number',
      pubTime: 'string',
      publicUrl: 'string',
      shareAttr: 'number',
      srcFrom: 'string',
      summary: 'string',
      textContent: 'string',
      thumbnailInBase64: 'string',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
      updateUserName: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsResponseBodyData extends $tea.Model {
  concurrentCount?: number;
  endTime?: string;
  instanceCount?: number;
  instanceId?: string;
  orderId?: number;
  productType?: string;
  quota?: number;
  startTime?: string;
  useQuota?: number;
  versionDetail?: string;
  versionName?: string;
  versionStatus?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentCount: 'ConcurrentCount',
      endTime: 'EndTime',
      instanceCount: 'InstanceCount',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      productType: 'ProductType',
      quota: 'Quota',
      startTime: 'StartTime',
      useQuota: 'UseQuota',
      versionDetail: 'VersionDetail',
      versionName: 'VersionName',
      versionStatus: 'VersionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentCount: 'number',
      endTime: 'string',
      instanceCount: 'number',
      instanceId: 'string',
      orderId: 'number',
      productType: 'string',
      quota: 'number',
      startTime: 'string',
      useQuota: 'number',
      versionDetail: 'string',
      versionName: 'string',
      versionStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAsyncTaskResponseBodyData extends $tea.Model {
  createTime?: string;
  createUser?: string;
  taskCode?: string;
  taskErrorMessage?: string;
  taskId?: string;
  taskIntermediateResult?: string;
  taskName?: string;
  taskParam?: string;
  taskProgressMessage?: string;
  taskResult?: string;
  taskRetryCount?: string;
  taskStatus?: number;
  updateTime?: string;
  updateUser?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      taskCode: 'TaskCode',
      taskErrorMessage: 'TaskErrorMessage',
      taskId: 'TaskId',
      taskIntermediateResult: 'TaskIntermediateResult',
      taskName: 'TaskName',
      taskParam: 'TaskParam',
      taskProgressMessage: 'TaskProgressMessage',
      taskResult: 'TaskResult',
      taskRetryCount: 'TaskRetryCount',
      taskStatus: 'TaskStatus',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createUser: 'string',
      taskCode: 'string',
      taskErrorMessage: 'string',
      taskId: 'string',
      taskIntermediateResult: 'string',
      taskName: 'string',
      taskParam: 'string',
      taskProgressMessage: 'string',
      taskResult: 'string',
      taskRetryCount: 'string',
      taskStatus: 'number',
      updateTime: 'string',
      updateUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveDataSourceOrderConfigRequestUserConfigDataSourceList extends $tea.Model {
  code?: string;
  name?: string;
  number?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      number: 'Number',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      number: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchNewsResponseBodyData extends $tea.Model {
  author?: string;
  content?: string;
  docUuid?: string;
  imageUrls?: string[];
  pubTime?: string;
  searchSource?: string;
  searchSourceName?: string;
  source?: string;
  summary?: string;
  tag?: string;
  title?: string;
  updateTime?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'Author',
      content: 'Content',
      docUuid: 'DocUuid',
      imageUrls: 'ImageUrls',
      pubTime: 'PubTime',
      searchSource: 'SearchSource',
      searchSourceName: 'SearchSourceName',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      updateTime: 'UpdateTime',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      content: 'string',
      docUuid: 'string',
      imageUrls: { 'type': 'array', 'itemType': 'string' },
      pubTime: 'string',
      searchSource: 'string',
      searchSourceName: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
      title: 'string',
      updateTime: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAsyncTaskResponseBodyData extends $tea.Model {
  taskId?: string;
  taskIntermediateResult?: any;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskIntermediateResult: 'TaskIntermediateResult',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskIntermediateResult: 'any',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aimiaobi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary 取消异步任务
   *
   * @param request CancelAsyncTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CancelAsyncTaskResponse
   */
  async cancelAsyncTaskWithOptions(request: CancelAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<CancelAsyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelAsyncTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelAsyncTaskResponse>(await this.callApi(params, req, runtime), new CancelAsyncTaskResponse({}));
  }

  /**
   * @summary 取消异步任务
   *
   * @param request CancelAsyncTaskRequest
   * @return CancelAsyncTaskResponse
   */
  async cancelAsyncTask(request: CancelAsyncTaskRequest): Promise<CancelAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelAsyncTaskWithOptions(request, runtime);
  }

  /**
   * @summary 清除所有干预内容
   *
   * @param request ClearIntervenesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ClearIntervenesResponse
   */
  async clearIntervenesWithOptions(request: ClearIntervenesRequest, runtime: $Util.RuntimeOptions): Promise<ClearIntervenesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ClearIntervenes",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClearIntervenesResponse>(await this.callApi(params, req, runtime), new ClearIntervenesResponse({}));
  }

  /**
   * @summary 清除所有干预内容
   *
   * @param request ClearIntervenesRequest
   * @return ClearIntervenesResponse
   */
  async clearIntervenes(request: ClearIntervenesRequest): Promise<ClearIntervenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearIntervenesWithOptions(request, runtime);
  }

  /**
   * @summary 文档管理-创建
   *
   * @param tmpReq CreateGeneratedContentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateGeneratedContentResponse
   */
  async createGeneratedContentWithOptions(tmpReq: CreateGeneratedContentRequest, runtime: $Util.RuntimeOptions): Promise<CreateGeneratedContentResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateGeneratedContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.keywords)) {
      request.keywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keywords, "Keywords", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentDomain)) {
      body["ContentDomain"] = request.contentDomain;
    }

    if (!Util.isUnset(request.contentText)) {
      body["ContentText"] = request.contentText;
    }

    if (!Util.isUnset(request.keywordsShrink)) {
      body["Keywords"] = request.keywordsShrink;
    }

    if (!Util.isUnset(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateGeneratedContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGeneratedContentResponse>(await this.callApi(params, req, runtime), new CreateGeneratedContentResponse({}));
  }

  /**
   * @summary 文档管理-创建
   *
   * @param request CreateGeneratedContentRequest
   * @return CreateGeneratedContentResponse
   */
  async createGeneratedContent(request: CreateGeneratedContentRequest): Promise<CreateGeneratedContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGeneratedContentWithOptions(request, runtime);
  }

  /**
   * @summary 获取授权token
   *
   * @param request CreateTokenRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTokenResponse
   */
  async createTokenWithOptions(request: CreateTokenRequest, runtime: $Util.RuntimeOptions): Promise<CreateTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateToken",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTokenResponse>(await this.callApi(params, req, runtime), new CreateTokenResponse({}));
  }

  /**
   * @summary 获取授权token
   *
   * @param request CreateTokenRequest
   * @return CreateTokenResponse
   */
  async createToken(request: CreateTokenRequest): Promise<CreateTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTokenWithOptions(request, runtime);
  }

  /**
   * @summary 删除自定义文本
   *
   * @param request DeleteCustomTextRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteCustomTextResponse
   */
  async deleteCustomTextWithOptions(request: DeleteCustomTextRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCustomTextResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomText",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCustomTextResponse>(await this.callApi(params, req, runtime), new DeleteCustomTextResponse({}));
  }

  /**
   * @summary 删除自定义文本
   *
   * @param request DeleteCustomTextRequest
   * @return DeleteCustomTextResponse
   */
  async deleteCustomText(request: DeleteCustomTextRequest): Promise<DeleteCustomTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCustomTextWithOptions(request, runtime);
  }

  /**
   * @summary 文档管理-删除。
   *
   * @param request DeleteGeneratedContentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteGeneratedContentResponse
   */
  async deleteGeneratedContentWithOptions(request: DeleteGeneratedContentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGeneratedContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGeneratedContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGeneratedContentResponse>(await this.callApi(params, req, runtime), new DeleteGeneratedContentResponse({}));
  }

  /**
   * @summary 文档管理-删除。
   *
   * @param request DeleteGeneratedContentRequest
   * @return DeleteGeneratedContentResponse
   */
  async deleteGeneratedContent(request: DeleteGeneratedContentRequest): Promise<DeleteGeneratedContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGeneratedContentWithOptions(request, runtime);
  }

  /**
   * @summary 删除干预规则
   *
   * @param request DeleteInterveneRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteInterveneRuleResponse
   */
  async deleteInterveneRuleWithOptions(request: DeleteInterveneRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInterveneRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInterveneRule",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInterveneRuleResponse>(await this.callApi(params, req, runtime), new DeleteInterveneRuleResponse({}));
  }

  /**
   * @summary 删除干预规则
   *
   * @param request DeleteInterveneRuleRequest
   * @return DeleteInterveneRuleResponse
   */
  async deleteInterveneRule(request: DeleteInterveneRuleRequest): Promise<DeleteInterveneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInterveneRuleWithOptions(request, runtime);
  }

  /**
   * @summary 根据ID删除素材
   *
   * @param request DeleteMaterialByIdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteMaterialByIdResponse
   */
  async deleteMaterialByIdWithOptions(request: DeleteMaterialByIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMaterialByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMaterialById",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMaterialByIdResponse>(await this.callApi(params, req, runtime), new DeleteMaterialByIdResponse({}));
  }

  /**
   * @summary 根据ID删除素材
   *
   * @param request DeleteMaterialByIdRequest
   * @return DeleteMaterialByIdResponse
   */
  async deleteMaterialById(request: DeleteMaterialByIdRequest): Promise<DeleteMaterialByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMaterialByIdWithOptions(request, runtime);
  }

  /**
   * @summary 文档管理-导出。
   *
   * @param request ExportGeneratedContentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ExportGeneratedContentResponse
   */
  async exportGeneratedContentWithOptions(request: ExportGeneratedContentRequest, runtime: $Util.RuntimeOptions): Promise<ExportGeneratedContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExportGeneratedContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportGeneratedContentResponse>(await this.callApi(params, req, runtime), new ExportGeneratedContentResponse({}));
  }

  /**
   * @summary 文档管理-导出。
   *
   * @param request ExportGeneratedContentRequest
   * @return ExportGeneratedContentResponse
   */
  async exportGeneratedContent(request: ExportGeneratedContentRequest): Promise<ExportGeneratedContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportGeneratedContentWithOptions(request, runtime);
  }

  /**
   * @summary 导出所有干预内容
   *
   * @param request ExportIntervenesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ExportIntervenesResponse
   */
  async exportIntervenesWithOptions(request: ExportIntervenesRequest, runtime: $Util.RuntimeOptions): Promise<ExportIntervenesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportIntervenes",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportIntervenesResponse>(await this.callApi(params, req, runtime), new ExportIntervenesResponse({}));
  }

  /**
   * @summary 导出所有干预内容
   *
   * @param request ExportIntervenesRequest
   * @return ExportIntervenesResponse
   */
  async exportIntervenes(request: ExportIntervenesRequest): Promise<ExportIntervenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportIntervenesWithOptions(request, runtime);
  }

  /**
   * @summary 反馈某次生成的结果
   *
   * @param tmpReq FeedbackDialogueRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return FeedbackDialogueResponse
   */
  async feedbackDialogueWithOptions(tmpReq: FeedbackDialogueRequest, runtime: $Util.RuntimeOptions): Promise<FeedbackDialogueResponse> {
    Util.validateModel(tmpReq);
    let request = new FeedbackDialogueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.ratingTags)) {
      request.ratingTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ratingTags, "RatingTags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.customerResponse)) {
      body["CustomerResponse"] = request.customerResponse;
    }

    if (!Util.isUnset(request.goodText)) {
      body["GoodText"] = request.goodText;
    }

    if (!Util.isUnset(request.modifiedResponse)) {
      body["ModifiedResponse"] = request.modifiedResponse;
    }

    if (!Util.isUnset(request.rating)) {
      body["Rating"] = request.rating;
    }

    if (!Util.isUnset(request.ratingTagsShrink)) {
      body["RatingTags"] = request.ratingTagsShrink;
    }

    if (!Util.isUnset(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FeedbackDialogue",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FeedbackDialogueResponse>(await this.callApi(params, req, runtime), new FeedbackDialogueResponse({}));
  }

  /**
   * @summary 反馈某次生成的结果
   *
   * @param request FeedbackDialogueRequest
   * @return FeedbackDialogueResponse
   */
  async feedbackDialogue(request: FeedbackDialogueRequest): Promise<FeedbackDialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.feedbackDialogueWithOptions(request, runtime);
  }

  /**
   * @param tmpReq FetchImageTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return FetchImageTaskResponse
   */
  async fetchImageTaskWithOptions(tmpReq: FetchImageTaskRequest, runtime: $Util.RuntimeOptions): Promise<FetchImageTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new FetchImageTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.taskIdList)) {
      request.taskIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIdList, "TaskIdList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.articleTaskId)) {
      body["ArticleTaskId"] = request.articleTaskId;
    }

    if (!Util.isUnset(request.taskIdListShrink)) {
      body["TaskIdList"] = request.taskIdListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FetchImageTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FetchImageTaskResponse>(await this.callApi(params, req, runtime), new FetchImageTaskResponse({}));
  }

  /**
   * @param request FetchImageTaskRequest
   * @return FetchImageTaskResponse
   */
  async fetchImageTask(request: FetchImageTaskRequest): Promise<FetchImageTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fetchImageTaskWithOptions(request, runtime);
  }

  /**
   * @summary 生成临时可访问的公开url
   *
   * @param request GenerateFileUrlByKeyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateFileUrlByKeyResponse
   */
  async generateFileUrlByKeyWithOptions(request: GenerateFileUrlByKeyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateFileUrlByKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateFileUrlByKey",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateFileUrlByKeyResponse>(await this.callApi(params, req, runtime), new GenerateFileUrlByKeyResponse({}));
  }

  /**
   * @summary 生成临时可访问的公开url
   *
   * @param request GenerateFileUrlByKeyRequest
   * @return GenerateFileUrlByKeyResponse
   */
  async generateFileUrlByKey(request: GenerateFileUrlByKeyRequest): Promise<GenerateFileUrlByKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateFileUrlByKeyWithOptions(request, runtime);
  }

  /**
   * @summary 智能配图，图片生成任务
   *
   * @param tmpReq GenerateImageTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateImageTaskResponse
   */
  async generateImageTaskWithOptions(tmpReq: GenerateImageTaskRequest, runtime: $Util.RuntimeOptions): Promise<GenerateImageTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new GenerateImageTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.paragraphList)) {
      request.paragraphListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.paragraphList, "ParagraphList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.articleTaskId)) {
      body["ArticleTaskId"] = request.articleTaskId;
    }

    if (!Util.isUnset(request.paragraphListShrink)) {
      body["ParagraphList"] = request.paragraphListShrink;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.style)) {
      body["Style"] = request.style;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateImageTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateImageTaskResponse>(await this.callApi(params, req, runtime), new GenerateImageTaskResponse({}));
  }

  /**
   * @summary 智能配图，图片生成任务
   *
   * @param request GenerateImageTaskRequest
   * @return GenerateImageTaskResponse
   */
  async generateImageTask(request: GenerateImageTaskRequest): Promise<GenerateImageTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateImageTaskWithOptions(request, runtime);
  }

  /**
   * @summary 生成上传配置
   *
   * @param request GenerateUploadConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateUploadConfigResponse
   */
  async generateUploadConfigWithOptions(request: GenerateUploadConfigRequest, runtime: $Util.RuntimeOptions): Promise<GenerateUploadConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.parentDir)) {
      body["ParentDir"] = request.parentDir;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateUploadConfig",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateUploadConfigResponse>(await this.callApi(params, req, runtime), new GenerateUploadConfigResponse({}));
  }

  /**
   * @summary 生成上传配置
   *
   * @param request GenerateUploadConfigRequest
   * @return GenerateUploadConfigResponse
   */
  async generateUploadConfig(request: GenerateUploadConfigRequest): Promise<GenerateUploadConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateUploadConfigWithOptions(request, runtime);
  }

  /**
   * @summary 视角生成
   *
   * @param tmpReq GenerateViewPointRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GenerateViewPointResponse
   */
  async generateViewPointWithOptions(tmpReq: GenerateViewPointRequest, runtime: $Util.RuntimeOptions): Promise<GenerateViewPointResponse> {
    Util.validateModel(tmpReq);
    let request = new GenerateViewPointShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.referenceData)) {
      request.referenceDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceData, "ReferenceData", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.referenceDataShrink)) {
      body["ReferenceData"] = request.referenceDataShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateViewPoint",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateViewPointResponse>(await this.callApi(params, req, runtime), new GenerateViewPointResponse({}));
  }

  /**
   * @summary 视角生成
   *
   * @param request GenerateViewPointRequest
   * @return GenerateViewPointResponse
   */
  async generateViewPoint(request: GenerateViewPointRequest): Promise<GenerateViewPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateViewPointWithOptions(request, runtime);
  }

  /**
   * @summary 获取自定义文本
   *
   * @param request GetCustomTextRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetCustomTextResponse
   */
  async getCustomTextWithOptions(request: GetCustomTextRequest, runtime: $Util.RuntimeOptions): Promise<GetCustomTextResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetCustomText",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCustomTextResponse>(await this.callApi(params, req, runtime), new GetCustomTextResponse({}));
  }

  /**
   * @summary 获取自定义文本
   *
   * @param request GetCustomTextRequest
   * @return GetCustomTextResponse
   */
  async getCustomText(request: GetCustomTextRequest): Promise<GetCustomTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCustomTextWithOptions(request, runtime);
  }

  /**
   * @summary 获取系统数据源配置和个人配置
   *
   * @param request GetDataSourceOrderConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDataSourceOrderConfigResponse
   */
  async getDataSourceOrderConfigWithOptions(request: GetDataSourceOrderConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetDataSourceOrderConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetDataSourceOrderConfig",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDataSourceOrderConfigResponse>(await this.callApi(params, req, runtime), new GetDataSourceOrderConfigResponse({}));
  }

  /**
   * @summary 获取系统数据源配置和个人配置
   *
   * @param request GetDataSourceOrderConfigRequest
   * @return GetDataSourceOrderConfigResponse
   */
  async getDataSourceOrderConfig(request: GetDataSourceOrderConfigRequest): Promise<GetDataSourceOrderConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDataSourceOrderConfigWithOptions(request, runtime);
  }

  /**
   * @summary 文档管理-查询详情。
   *
   * @param request GetGeneratedContentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetGeneratedContentResponse
   */
  async getGeneratedContentWithOptions(request: GetGeneratedContentRequest, runtime: $Util.RuntimeOptions): Promise<GetGeneratedContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetGeneratedContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGeneratedContentResponse>(await this.callApi(params, req, runtime), new GetGeneratedContentResponse({}));
  }

  /**
   * @summary 文档管理-查询详情。
   *
   * @param request GetGeneratedContentRequest
   * @return GetGeneratedContentResponse
   */
  async getGeneratedContent(request: GetGeneratedContentRequest): Promise<GetGeneratedContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGeneratedContentWithOptions(request, runtime);
  }

  /**
   * @summary 获得干预全局回复
   *
   * @param request GetInterveneGlobalReplyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetInterveneGlobalReplyResponse
   */
  async getInterveneGlobalReplyWithOptions(request: GetInterveneGlobalReplyRequest, runtime: $Util.RuntimeOptions): Promise<GetInterveneGlobalReplyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInterveneGlobalReply",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInterveneGlobalReplyResponse>(await this.callApi(params, req, runtime), new GetInterveneGlobalReplyResponse({}));
  }

  /**
   * @summary 获得干预全局回复
   *
   * @param request GetInterveneGlobalReplyRequest
   * @return GetInterveneGlobalReplyResponse
   */
  async getInterveneGlobalReply(request: GetInterveneGlobalReplyRequest): Promise<GetInterveneGlobalReplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInterveneGlobalReplyWithOptions(request, runtime);
  }

  /**
   * @summary 获得导入任务信息
   *
   * @param request GetInterveneImportTaskInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetInterveneImportTaskInfoResponse
   */
  async getInterveneImportTaskInfoWithOptions(request: GetInterveneImportTaskInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetInterveneImportTaskInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInterveneImportTaskInfo",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInterveneImportTaskInfoResponse>(await this.callApi(params, req, runtime), new GetInterveneImportTaskInfoResponse({}));
  }

  /**
   * @summary 获得导入任务信息
   *
   * @param request GetInterveneImportTaskInfoRequest
   * @return GetInterveneImportTaskInfoResponse
   */
  async getInterveneImportTaskInfo(request: GetInterveneImportTaskInfoRequest): Promise<GetInterveneImportTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInterveneImportTaskInfoWithOptions(request, runtime);
  }

  /**
   * @summary 获得干预项规则详情
   *
   * @param request GetInterveneRuleDetailRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetInterveneRuleDetailResponse
   */
  async getInterveneRuleDetailWithOptions(request: GetInterveneRuleDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetInterveneRuleDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetInterveneRuleDetail",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInterveneRuleDetailResponse>(await this.callApi(params, req, runtime), new GetInterveneRuleDetailResponse({}));
  }

  /**
   * @summary 获得干预项规则详情
   *
   * @param request GetInterveneRuleDetailRequest
   * @return GetInterveneRuleDetailResponse
   */
  async getInterveneRuleDetail(request: GetInterveneRuleDetailRequest): Promise<GetInterveneRuleDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInterveneRuleDetailWithOptions(request, runtime);
  }

  /**
   * @summary 获得干预导入模版文件下载地址
   *
   * @param request GetInterveneTemplateFileUrlRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetInterveneTemplateFileUrlResponse
   */
  async getInterveneTemplateFileUrlWithOptions(request: GetInterveneTemplateFileUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetInterveneTemplateFileUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInterveneTemplateFileUrl",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInterveneTemplateFileUrlResponse>(await this.callApi(params, req, runtime), new GetInterveneTemplateFileUrlResponse({}));
  }

  /**
   * @summary 获得干预导入模版文件下载地址
   *
   * @param request GetInterveneTemplateFileUrlRequest
   * @return GetInterveneTemplateFileUrlResponse
   */
  async getInterveneTemplateFileUrl(request: GetInterveneTemplateFileUrlRequest): Promise<GetInterveneTemplateFileUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInterveneTemplateFileUrlWithOptions(request, runtime);
  }

  /**
   * @summary 根据ID获取素材内容
   *
   * @param request GetMaterialByIdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetMaterialByIdResponse
   */
  async getMaterialByIdWithOptions(request: GetMaterialByIdRequest, runtime: $Util.RuntimeOptions): Promise<GetMaterialByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMaterialById",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMaterialByIdResponse>(await this.callApi(params, req, runtime), new GetMaterialByIdResponse({}));
  }

  /**
   * @summary 根据ID获取素材内容
   *
   * @param request GetMaterialByIdRequest
   * @return GetMaterialByIdResponse
   */
  async getMaterialById(request: GetMaterialByIdRequest): Promise<GetMaterialByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMaterialByIdWithOptions(request, runtime);
  }

  /**
   * @summary 获取当前用户的配置
   *
   * @param request GetPropertiesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPropertiesResponse
   */
  async getPropertiesWithOptions(request: GetPropertiesRequest, runtime: $Util.RuntimeOptions): Promise<GetPropertiesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProperties",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPropertiesResponse>(await this.callApi(params, req, runtime), new GetPropertiesResponse({}));
  }

  /**
   * @summary 获取当前用户的配置
   *
   * @param request GetPropertiesRequest
   * @return GetPropertiesResponse
   */
  async getProperties(request: GetPropertiesRequest): Promise<GetPropertiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPropertiesWithOptions(request, runtime);
  }

  /**
   * @summary 导入干预文件
   *
   * @param request ImportInterveneFileRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ImportInterveneFileResponse
   */
  async importInterveneFileWithOptions(request: ImportInterveneFileRequest, runtime: $Util.RuntimeOptions): Promise<ImportInterveneFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docName)) {
      body["DocName"] = request.docName;
    }

    if (!Util.isUnset(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportInterveneFile",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportInterveneFileResponse>(await this.callApi(params, req, runtime), new ImportInterveneFileResponse({}));
  }

  /**
   * @summary 导入干预文件
   *
   * @param request ImportInterveneFileRequest
   * @return ImportInterveneFileResponse
   */
  async importInterveneFile(request: ImportInterveneFileRequest): Promise<ImportInterveneFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importInterveneFileWithOptions(request, runtime);
  }

  /**
   * @summary 异步导入干预文件
   *
   * @param request ImportInterveneFileAsyncRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ImportInterveneFileAsyncResponse
   */
  async importInterveneFileAsyncWithOptions(request: ImportInterveneFileAsyncRequest, runtime: $Util.RuntimeOptions): Promise<ImportInterveneFileAsyncResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.docName)) {
      body["DocName"] = request.docName;
    }

    if (!Util.isUnset(request.fileKey)) {
      body["FileKey"] = request.fileKey;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ImportInterveneFileAsync",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportInterveneFileAsyncResponse>(await this.callApi(params, req, runtime), new ImportInterveneFileAsyncResponse({}));
  }

  /**
   * @summary 异步导入干预文件
   *
   * @param request ImportInterveneFileAsyncRequest
   * @return ImportInterveneFileAsyncResponse
   */
  async importInterveneFileAsync(request: ImportInterveneFileAsyncRequest): Promise<ImportInterveneFileAsyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importInterveneFileAsyncWithOptions(request, runtime);
  }

  /**
   * @summary 设置干预全局回复
   *
   * @param tmpReq InsertInterveneGlobalReplyRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return InsertInterveneGlobalReplyResponse
   */
  async insertInterveneGlobalReplyWithOptions(tmpReq: InsertInterveneGlobalReplyRequest, runtime: $Util.RuntimeOptions): Promise<InsertInterveneGlobalReplyResponse> {
    Util.validateModel(tmpReq);
    let request = new InsertInterveneGlobalReplyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.replyMessagList)) {
      request.replyMessagListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.replyMessagList, "ReplyMessagList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.replyMessagListShrink)) {
      body["ReplyMessagList"] = request.replyMessagListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InsertInterveneGlobalReply",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertInterveneGlobalReplyResponse>(await this.callApi(params, req, runtime), new InsertInterveneGlobalReplyResponse({}));
  }

  /**
   * @summary 设置干预全局回复
   *
   * @param request InsertInterveneGlobalReplyRequest
   * @return InsertInterveneGlobalReplyResponse
   */
  async insertInterveneGlobalReply(request: InsertInterveneGlobalReplyRequest): Promise<InsertInterveneGlobalReplyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertInterveneGlobalReplyWithOptions(request, runtime);
  }

  /**
   * @summary 插入干预规则
   *
   * @param tmpReq InsertInterveneRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return InsertInterveneRuleResponse
   */
  async insertInterveneRuleWithOptions(tmpReq: InsertInterveneRuleRequest, runtime: $Util.RuntimeOptions): Promise<InsertInterveneRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new InsertInterveneRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.interveneRuleConfig)) {
      request.interveneRuleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.interveneRuleConfig, "InterveneRuleConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.interveneRuleConfigShrink)) {
      body["InterveneRuleConfig"] = request.interveneRuleConfigShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InsertInterveneRule",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InsertInterveneRuleResponse>(await this.callApi(params, req, runtime), new InsertInterveneRuleResponse({}));
  }

  /**
   * @summary 插入干预规则
   *
   * @param request InsertInterveneRuleRequest
   * @return InsertInterveneRuleResponse
   */
  async insertInterveneRule(request: InsertInterveneRuleRequest): Promise<InsertInterveneRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertInterveneRuleWithOptions(request, runtime);
  }

  /**
   * @summary 查询任务列表
   *
   * @param tmpReq ListAsyncTasksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAsyncTasksResponse
   */
  async listAsyncTasksWithOptions(tmpReq: ListAsyncTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListAsyncTasksResponse> {
    Util.validateModel(tmpReq);
    let request = new ListAsyncTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.taskStatusList)) {
      request.taskStatusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskStatusList, "TaskStatusList", "json");
    }

    if (!Util.isUnset(tmpReq.taskTypeList)) {
      request.taskTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskTypeList, "TaskTypeList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createTimeEnd)) {
      body["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createTimeStart)) {
      body["CreateTimeStart"] = request.createTimeStart;
    }

    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.taskCode)) {
      body["TaskCode"] = request.taskCode;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskStatus)) {
      body["TaskStatus"] = request.taskStatus;
    }

    if (!Util.isUnset(request.taskStatusListShrink)) {
      body["TaskStatusList"] = request.taskStatusListShrink;
    }

    if (!Util.isUnset(request.taskType)) {
      body["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.taskTypeListShrink)) {
      body["TaskTypeList"] = request.taskTypeListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListAsyncTasks",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAsyncTasksResponse>(await this.callApi(params, req, runtime), new ListAsyncTasksResponse({}));
  }

  /**
   * @summary 查询任务列表
   *
   * @param request ListAsyncTasksRequest
   * @return ListAsyncTasksResponse
   */
  async listAsyncTasks(request: ListAsyncTasksRequest): Promise<ListAsyncTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAsyncTasksWithOptions(request, runtime);
  }

  /**
   * @summary 获取系统自定义预设
   *
   * @param request ListBuildConfigsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListBuildConfigsResponse
   */
  async listBuildConfigsWithOptions(request: ListBuildConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListBuildConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListBuildConfigs",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBuildConfigsResponse>(await this.callApi(params, req, runtime), new ListBuildConfigsResponse({}));
  }

  /**
   * @summary 获取系统自定义预设
   *
   * @param request ListBuildConfigsRequest
   * @return ListBuildConfigsResponse
   */
  async listBuildConfigs(request: ListBuildConfigsRequest): Promise<ListBuildConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBuildConfigsWithOptions(request, runtime);
  }

  /**
   * @summary 自定义文本列表
   *
   * @param request ListCustomTextRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListCustomTextResponse
   */
  async listCustomTextWithOptions(request: ListCustomTextRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomTextResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListCustomText",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomTextResponse>(await this.callApi(params, req, runtime), new ListCustomTextResponse({}));
  }

  /**
   * @summary 自定义文本列表
   *
   * @param request ListCustomTextRequest
   * @return ListCustomTextResponse
   */
  async listCustomText(request: ListCustomTextRequest): Promise<ListCustomTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomTextWithOptions(request, runtime);
  }

  /**
   * @summary 生成历史列表
   *
   * @param request ListDialoguesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDialoguesResponse
   */
  async listDialoguesWithOptions(request: ListDialoguesRequest, runtime: $Util.RuntimeOptions): Promise<ListDialoguesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.dialogueType)) {
      body["DialogueType"] = request.dialogueType;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDialogues",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDialoguesResponse>(await this.callApi(params, req, runtime), new ListDialoguesResponse({}));
  }

  /**
   * @summary 生成历史列表
   *
   * @param request ListDialoguesRequest
   * @return ListDialoguesResponse
   */
  async listDialogues(request: ListDialoguesRequest): Promise<ListDialoguesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDialoguesWithOptions(request, runtime);
  }

  /**
   * @summary 文档管理-列表。
   *
   * @param request ListGeneratedContentsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListGeneratedContentsResponse
   */
  async listGeneratedContentsWithOptions(request: ListGeneratedContentsRequest, runtime: $Util.RuntimeOptions): Promise<ListGeneratedContentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.contentDomain)) {
      body["ContentDomain"] = request.contentDomain;
    }

    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListGeneratedContents",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGeneratedContentsResponse>(await this.callApi(params, req, runtime), new ListGeneratedContentsResponse({}));
  }

  /**
   * @summary 文档管理-列表。
   *
   * @param request ListGeneratedContentsRequest
   * @return ListGeneratedContentsResponse
   */
  async listGeneratedContents(request: ListGeneratedContentsRequest): Promise<ListGeneratedContentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGeneratedContentsWithOptions(request, runtime);
  }

  /**
   * @summary 获取分类的热点新闻
   *
   * @param tmpReq ListHotNewsWithTypeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListHotNewsWithTypeResponse
   */
  async listHotNewsWithTypeWithOptions(tmpReq: ListHotNewsWithTypeRequest, runtime: $Util.RuntimeOptions): Promise<ListHotNewsWithTypeResponse> {
    Util.validateModel(tmpReq);
    let request = new ListHotNewsWithTypeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.newsTypes)) {
      request.newsTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.newsTypes, "NewsTypes", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.newsType)) {
      body["NewsType"] = request.newsType;
    }

    if (!Util.isUnset(request.newsTypesShrink)) {
      body["NewsTypes"] = request.newsTypesShrink;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListHotNewsWithType",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListHotNewsWithTypeResponse>(await this.callApi(params, req, runtime), new ListHotNewsWithTypeResponse({}));
  }

  /**
   * @summary 获取分类的热点新闻
   *
   * @param request ListHotNewsWithTypeRequest
   * @return ListHotNewsWithTypeResponse
   */
  async listHotNewsWithType(request: ListHotNewsWithTypeRequest): Promise<ListHotNewsWithTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listHotNewsWithTypeWithOptions(request, runtime);
  }

  /**
   * @summary 获得干预项目数量列表
   *
   * @param request ListInterveneCntRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListInterveneCntResponse
   */
  async listInterveneCntWithOptions(request: ListInterveneCntRequest, runtime: $Util.RuntimeOptions): Promise<ListInterveneCntResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListInterveneCnt",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInterveneCntResponse>(await this.callApi(params, req, runtime), new ListInterveneCntResponse({}));
  }

  /**
   * @summary 获得干预项目数量列表
   *
   * @param request ListInterveneCntRequest
   * @return ListInterveneCntResponse
   */
  async listInterveneCnt(request: ListInterveneCntRequest): Promise<ListInterveneCntResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInterveneCntWithOptions(request, runtime);
  }

  /**
   * @summary 获得导入任务列表
   *
   * @param request ListInterveneImportTasksRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListInterveneImportTasksResponse
   */
  async listInterveneImportTasksWithOptions(request: ListInterveneImportTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListInterveneImportTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListInterveneImportTasks",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInterveneImportTasksResponse>(await this.callApi(params, req, runtime), new ListInterveneImportTasksResponse({}));
  }

  /**
   * @summary 获得导入任务列表
   *
   * @param request ListInterveneImportTasksRequest
   * @return ListInterveneImportTasksResponse
   */
  async listInterveneImportTasks(request: ListInterveneImportTasksRequest): Promise<ListInterveneImportTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInterveneImportTasksWithOptions(request, runtime);
  }

  /**
   * @summary 获得干预规则列表
   *
   * @param request ListInterveneRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListInterveneRulesResponse
   */
  async listInterveneRulesWithOptions(request: ListInterveneRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListInterveneRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListInterveneRules",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInterveneRulesResponse>(await this.callApi(params, req, runtime), new ListInterveneRulesResponse({}));
  }

  /**
   * @summary 获得干预规则列表
   *
   * @param request ListInterveneRulesRequest
   * @return ListInterveneRulesResponse
   */
  async listInterveneRules(request: ListInterveneRulesRequest): Promise<ListInterveneRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInterveneRulesWithOptions(request, runtime);
  }

  /**
   * @summary 获得干预项列表
   *
   * @param request ListIntervenesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListIntervenesResponse
   */
  async listIntervenesWithOptions(request: ListIntervenesRequest, runtime: $Util.RuntimeOptions): Promise<ListIntervenesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.interveneType)) {
      body["InterveneType"] = request.interveneType;
    }

    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListIntervenes",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIntervenesResponse>(await this.callApi(params, req, runtime), new ListIntervenesResponse({}));
  }

  /**
   * @summary 获得干预项列表
   *
   * @param request ListIntervenesRequest
   * @return ListIntervenesResponse
   */
  async listIntervenes(request: ListIntervenesRequest): Promise<ListIntervenesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIntervenesWithOptions(request, runtime);
  }

  /**
   * @summary 查询素材列表
   *
   * @param tmpReq ListMaterialDocumentsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListMaterialDocumentsResponse
   */
  async listMaterialDocumentsWithOptions(tmpReq: ListMaterialDocumentsRequest, runtime: $Util.RuntimeOptions): Promise<ListMaterialDocumentsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListMaterialDocumentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.docTypeList)) {
      request.docTypeListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docTypeList, "DocTypeList", "json");
    }

    if (!Util.isUnset(tmpReq.keywords)) {
      request.keywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keywords, "Keywords", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.createTimeEnd)) {
      body["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createTimeStart)) {
      body["CreateTimeStart"] = request.createTimeStart;
    }

    if (!Util.isUnset(request.current)) {
      body["Current"] = request.current;
    }

    if (!Util.isUnset(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.docTypeListShrink)) {
      body["DocTypeList"] = request.docTypeListShrink;
    }

    if (!Util.isUnset(request.generatePublicUrl)) {
      body["GeneratePublicUrl"] = request.generatePublicUrl;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.keywordsShrink)) {
      body["Keywords"] = request.keywordsShrink;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.shareAttr)) {
      body["ShareAttr"] = request.shareAttr;
    }

    if (!Util.isUnset(request.size)) {
      body["Size"] = request.size;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.updateTimeEnd)) {
      body["UpdateTimeEnd"] = request.updateTimeEnd;
    }

    if (!Util.isUnset(request.updateTimeStart)) {
      body["UpdateTimeStart"] = request.updateTimeStart;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMaterialDocuments",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMaterialDocumentsResponse>(await this.callApi(params, req, runtime), new ListMaterialDocumentsResponse({}));
  }

  /**
   * @summary 查询素材列表
   *
   * @param request ListMaterialDocumentsRequest
   * @return ListMaterialDocumentsResponse
   */
  async listMaterialDocuments(request: ListMaterialDocumentsRequest): Promise<ListMaterialDocumentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMaterialDocumentsWithOptions(request, runtime);
  }

  /**
   * @summary 获取系统所有实例信息
   *
   * @param request ListVersionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListVersionsResponse
   */
  async listVersionsWithOptions(request: ListVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVersions",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVersionsResponse>(await this.callApi(params, req, runtime), new ListVersionsResponse({}));
  }

  /**
   * @summary 获取系统所有实例信息
   *
   * @param request ListVersionsRequest
   * @return ListVersionsResponse
   */
  async listVersions(request: ListVersionsRequest): Promise<ListVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVersionsWithOptions(request, runtime);
  }

  /**
   * @summary 根据taskId查询异步任务状态
   *
   * @param request QueryAsyncTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryAsyncTaskResponse
   */
  async queryAsyncTaskWithOptions(request: QueryAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<QueryAsyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryAsyncTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryAsyncTaskResponse>(await this.callApi(params, req, runtime), new QueryAsyncTaskResponse({}));
  }

  /**
   * @summary 根据taskId查询异步任务状态
   *
   * @param request QueryAsyncTaskRequest
   * @return QueryAsyncTaskResponse
   */
  async queryAsyncTask(request: QueryAsyncTaskRequest): Promise<QueryAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAsyncTaskWithOptions(request, runtime);
  }

  /**
   * @summary 保存自定义文本
   *
   * @param request SaveCustomTextRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveCustomTextResponse
   */
  async saveCustomTextWithOptions(request: SaveCustomTextRequest, runtime: $Util.RuntimeOptions): Promise<SaveCustomTextResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveCustomText",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveCustomTextResponse>(await this.callApi(params, req, runtime), new SaveCustomTextResponse({}));
  }

  /**
   * @summary 保存自定义文本
   *
   * @param request SaveCustomTextRequest
   * @return SaveCustomTextResponse
   */
  async saveCustomText(request: SaveCustomTextRequest): Promise<SaveCustomTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveCustomTextWithOptions(request, runtime);
  }

  /**
   * @summary 保存用户的信源配置
   *
   * @param tmpReq SaveDataSourceOrderConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveDataSourceOrderConfigResponse
   */
  async saveDataSourceOrderConfigWithOptions(tmpReq: SaveDataSourceOrderConfigRequest, runtime: $Util.RuntimeOptions): Promise<SaveDataSourceOrderConfigResponse> {
    Util.validateModel(tmpReq);
    let request = new SaveDataSourceOrderConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.userConfigDataSourceList)) {
      request.userConfigDataSourceListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userConfigDataSourceList, "UserConfigDataSourceList", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!Util.isUnset(request.userConfigDataSourceListShrink)) {
      body["UserConfigDataSourceList"] = request.userConfigDataSourceListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveDataSourceOrderConfig",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveDataSourceOrderConfigResponse>(await this.callApi(params, req, runtime), new SaveDataSourceOrderConfigResponse({}));
  }

  /**
   * @summary 保存用户的信源配置
   *
   * @param request SaveDataSourceOrderConfigRequest
   * @return SaveDataSourceOrderConfigResponse
   */
  async saveDataSourceOrderConfig(request: SaveDataSourceOrderConfigRequest): Promise<SaveDataSourceOrderConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveDataSourceOrderConfigWithOptions(request, runtime);
  }

  /**
   * @summary 保存素材
   *
   * @param tmpReq SaveMaterialDocumentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SaveMaterialDocumentResponse
   */
  async saveMaterialDocumentWithOptions(tmpReq: SaveMaterialDocumentRequest, runtime: $Util.RuntimeOptions): Promise<SaveMaterialDocumentResponse> {
    Util.validateModel(tmpReq);
    let request = new SaveMaterialDocumentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.docKeywords)) {
      request.docKeywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docKeywords, "DocKeywords", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.author)) {
      body["Author"] = request.author;
    }

    if (!Util.isUnset(request.bothSavePrivateAndShare)) {
      body["BothSavePrivateAndShare"] = request.bothSavePrivateAndShare;
    }

    if (!Util.isUnset(request.docKeywordsShrink)) {
      body["DocKeywords"] = request.docKeywordsShrink;
    }

    if (!Util.isUnset(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.externalUrl)) {
      body["ExternalUrl"] = request.externalUrl;
    }

    if (!Util.isUnset(request.htmlContent)) {
      body["HtmlContent"] = request.htmlContent;
    }

    if (!Util.isUnset(request.pubTime)) {
      body["PubTime"] = request.pubTime;
    }

    if (!Util.isUnset(request.shareAttr)) {
      body["ShareAttr"] = request.shareAttr;
    }

    if (!Util.isUnset(request.srcFrom)) {
      body["SrcFrom"] = request.srcFrom;
    }

    if (!Util.isUnset(request.summary)) {
      body["Summary"] = request.summary;
    }

    if (!Util.isUnset(request.textContent)) {
      body["TextContent"] = request.textContent;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveMaterialDocument",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveMaterialDocumentResponse>(await this.callApi(params, req, runtime), new SaveMaterialDocumentResponse({}));
  }

  /**
   * @summary 保存素材
   *
   * @param request SaveMaterialDocumentRequest
   * @return SaveMaterialDocumentResponse
   */
  async saveMaterialDocument(request: SaveMaterialDocumentRequest): Promise<SaveMaterialDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveMaterialDocumentWithOptions(request, runtime);
  }

  /**
   * @summary 新闻检索
   *
   * @param tmpReq SearchNewsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SearchNewsResponse
   */
  async searchNewsWithOptions(tmpReq: SearchNewsRequest, runtime: $Util.RuntimeOptions): Promise<SearchNewsResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchNewsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.searchSources)) {
      request.searchSourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchSources, "SearchSources", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filterNotNull)) {
      body["FilterNotNull"] = request.filterNotNull;
    }

    if (!Util.isUnset(request.includeContent)) {
      body["IncludeContent"] = request.includeContent;
    }

    if (!Util.isUnset(request.page)) {
      body["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      body["Query"] = request.query;
    }

    if (!Util.isUnset(request.searchSourcesShrink)) {
      body["SearchSources"] = request.searchSourcesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SearchNews",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchNewsResponse>(await this.callApi(params, req, runtime), new SearchNewsResponse({}));
  }

  /**
   * @summary 新闻检索
   *
   * @param request SearchNewsRequest
   * @return SearchNewsResponse
   */
  async searchNews(request: SearchNewsRequest): Promise<SearchNewsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchNewsWithOptions(request, runtime);
  }

  /**
   * @summary 提交异步任务
   *
   * @param request SubmitAsyncTaskRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubmitAsyncTaskResponse
   */
  async submitAsyncTaskWithOptions(request: SubmitAsyncTaskRequest, runtime: $Util.RuntimeOptions): Promise<SubmitAsyncTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskCode)) {
      body["TaskCode"] = request.taskCode;
    }

    if (!Util.isUnset(request.taskExecuteTime)) {
      body["TaskExecuteTime"] = request.taskExecuteTime;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskParam)) {
      body["TaskParam"] = request.taskParam;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitAsyncTask",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitAsyncTaskResponse>(await this.callApi(params, req, runtime), new SubmitAsyncTaskResponse({}));
  }

  /**
   * @summary 提交异步任务
   *
   * @param request SubmitAsyncTaskRequest
   * @return SubmitAsyncTaskResponse
   */
  async submitAsyncTask(request: SubmitAsyncTaskRequest): Promise<SubmitAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitAsyncTaskWithOptions(request, runtime);
  }

  /**
   * @summary 更新自定义文本
   *
   * @param request UpdateCustomTextRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateCustomTextResponse
   */
  async updateCustomTextWithOptions(request: UpdateCustomTextRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCustomTextResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCustomText",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomTextResponse>(await this.callApi(params, req, runtime), new UpdateCustomTextResponse({}));
  }

  /**
   * @summary 更新自定义文本
   *
   * @param request UpdateCustomTextRequest
   * @return UpdateCustomTextResponse
   */
  async updateCustomText(request: UpdateCustomTextRequest): Promise<UpdateCustomTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCustomTextWithOptions(request, runtime);
  }

  /**
   * @summary 文档管理-更新。
   *
   * @param tmpReq UpdateGeneratedContentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateGeneratedContentResponse
   */
  async updateGeneratedContentWithOptions(tmpReq: UpdateGeneratedContentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGeneratedContentResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateGeneratedContentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.keywords)) {
      request.keywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keywords, "Keywords", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.contentText)) {
      body["ContentText"] = request.contentText;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.keywordsShrink)) {
      body["Keywords"] = request.keywordsShrink;
    }

    if (!Util.isUnset(request.prompt)) {
      body["Prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGeneratedContent",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGeneratedContentResponse>(await this.callApi(params, req, runtime), new UpdateGeneratedContentResponse({}));
  }

  /**
   * @summary 文档管理-更新。
   *
   * @param request UpdateGeneratedContentRequest
   * @return UpdateGeneratedContentResponse
   */
  async updateGeneratedContent(request: UpdateGeneratedContentRequest): Promise<UpdateGeneratedContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGeneratedContentWithOptions(request, runtime);
  }

  /**
   * @summary 根据ID更新素材
   *
   * @param tmpReq UpdateMaterialDocumentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateMaterialDocumentResponse
   */
  async updateMaterialDocumentWithOptions(tmpReq: UpdateMaterialDocumentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMaterialDocumentResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateMaterialDocumentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.docKeywords)) {
      request.docKeywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.docKeywords, "DocKeywords", "json");
    }

    let query = { };
    if (!Util.isUnset(request.agentKey)) {
      query["AgentKey"] = request.agentKey;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.author)) {
      body["Author"] = request.author;
    }

    if (!Util.isUnset(request.docKeywordsShrink)) {
      body["DocKeywords"] = request.docKeywordsShrink;
    }

    if (!Util.isUnset(request.docType)) {
      body["DocType"] = request.docType;
    }

    if (!Util.isUnset(request.externalUrl)) {
      body["ExternalUrl"] = request.externalUrl;
    }

    if (!Util.isUnset(request.htmlContent)) {
      body["HtmlContent"] = request.htmlContent;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.pubTime)) {
      body["PubTime"] = request.pubTime;
    }

    if (!Util.isUnset(request.shareAttr)) {
      body["ShareAttr"] = request.shareAttr;
    }

    if (!Util.isUnset(request.srcFrom)) {
      body["SrcFrom"] = request.srcFrom;
    }

    if (!Util.isUnset(request.summary)) {
      body["Summary"] = request.summary;
    }

    if (!Util.isUnset(request.textContent)) {
      body["TextContent"] = request.textContent;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMaterialDocument",
      version: "2023-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMaterialDocumentResponse>(await this.callApi(params, req, runtime), new UpdateMaterialDocumentResponse({}));
  }

  /**
   * @summary 根据ID更新素材
   *
   * @param request UpdateMaterialDocumentRequest
   * @return UpdateMaterialDocumentResponse
   */
  async updateMaterialDocument(request: UpdateMaterialDocumentRequest): Promise<UpdateMaterialDocumentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMaterialDocumentWithOptions(request, runtime);
  }

}
