// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateQueueRequest extends $tea.Model {
  delaySeconds?: number;
  enableLogging?: boolean;
  maximumMessageSize?: number;
  messageRetentionPeriod?: number;
  pollingWaitSeconds?: number;
  queueName?: string;
  tag?: CreateQueueRequestTag[];
  visibilityTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      delaySeconds: 'DelaySeconds',
      enableLogging: 'EnableLogging',
      maximumMessageSize: 'MaximumMessageSize',
      messageRetentionPeriod: 'MessageRetentionPeriod',
      pollingWaitSeconds: 'PollingWaitSeconds',
      queueName: 'QueueName',
      tag: 'Tag',
      visibilityTimeout: 'VisibilityTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delaySeconds: 'number',
      enableLogging: 'boolean',
      maximumMessageSize: 'number',
      messageRetentionPeriod: 'number',
      pollingWaitSeconds: 'number',
      queueName: 'string',
      tag: { 'type': 'array', 'itemType': CreateQueueRequestTag },
      visibilityTimeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueResponseBody extends $tea.Model {
  code?: number;
  data?: CreateQueueResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateQueueResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateQueueResponseBody;
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
      body: CreateQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRequest extends $tea.Model {
  enableLogging?: boolean;
  maxMessageSize?: number;
  tag?: CreateTopicRequestTag[];
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      enableLogging: 'EnableLogging',
      maxMessageSize: 'MaxMessageSize',
      tag: 'Tag',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableLogging: 'boolean',
      maxMessageSize: 'number',
      tag: { 'type': 'array', 'itemType': CreateTopicRequestTag },
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicResponseBody extends $tea.Model {
  code?: number;
  data?: CreateTopicResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateTopicResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTopicResponseBody;
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
      body: CreateTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueueRequest extends $tea.Model {
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueueResponseBody extends $tea.Model {
  code?: number;
  data?: DeleteQueueResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DeleteQueueResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteQueueResponseBody;
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
      body: DeleteQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicRequest extends $tea.Model {
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTopicResponseBody;
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
      body: DeleteTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueAttributesRequest extends $tea.Model {
  queueName?: string;
  tag?: GetQueueAttributesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      queueName: 'QueueName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueName: 'string',
      tag: { 'type': 'array', 'itemType': GetQueueAttributesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueAttributesResponseBody extends $tea.Model {
  code?: number;
  data?: GetQueueAttributesResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetQueueAttributesResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueAttributesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQueueAttributesResponseBody;
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
      body: GetQueueAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionAttributesRequest extends $tea.Model {
  subscriptionName?: string;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      subscriptionName: 'SubscriptionName',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionName: 'string',
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionAttributesResponseBody extends $tea.Model {
  code?: number;
  data?: GetSubscriptionAttributesResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetSubscriptionAttributesResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionAttributesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSubscriptionAttributesResponseBody;
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
      body: GetSubscriptionAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicAttributesRequest extends $tea.Model {
  tag?: GetTopicAttributesRequestTag[];
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': GetTopicAttributesRequestTag },
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicAttributesResponseBody extends $tea.Model {
  code?: number;
  data?: GetTopicAttributesResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTopicAttributesResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicAttributesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTopicAttributesResponseBody;
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
      body: GetTopicAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  queueName?: string;
  tag?: ListQueueRequestTag[];
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      queueName: 'QueueName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      queueName: 'string',
      tag: { 'type': 'array', 'itemType': ListQueueRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueResponseBody extends $tea.Model {
  code?: number;
  data?: ListQueueResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListQueueResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQueueResponseBody;
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
      body: ListQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionByTopicRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  subscriptionName?: string;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      subscriptionName: 'SubscriptionName',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      subscriptionName: 'string',
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionByTopicResponseBody extends $tea.Model {
  code?: number;
  data?: ListSubscriptionByTopicResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListSubscriptionByTopicResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionByTopicResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSubscriptionByTopicResponseBody;
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
      body: ListSubscriptionByTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicRequest extends $tea.Model {
  pageNum?: number;
  pageSize?: number;
  tag?: ListTopicRequestTag[];
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tag: 'Tag',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      tag: { 'type': 'array', 'itemType': ListTopicRequestTag },
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicResponseBody extends $tea.Model {
  code?: number;
  data?: ListTopicResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListTopicResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTopicResponseBody;
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
      body: ListTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQueueAttributesRequest extends $tea.Model {
  delaySeconds?: number;
  enableLogging?: boolean;
  maximumMessageSize?: number;
  messageRetentionPeriod?: number;
  pollingWaitSeconds?: number;
  queueName?: string;
  visibilityTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      delaySeconds: 'DelaySeconds',
      enableLogging: 'EnableLogging',
      maximumMessageSize: 'MaximumMessageSize',
      messageRetentionPeriod: 'MessageRetentionPeriod',
      pollingWaitSeconds: 'PollingWaitSeconds',
      queueName: 'QueueName',
      visibilityTimeout: 'VisibilityTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delaySeconds: 'number',
      enableLogging: 'boolean',
      maximumMessageSize: 'number',
      messageRetentionPeriod: 'number',
      pollingWaitSeconds: 'number',
      queueName: 'string',
      visibilityTimeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQueueAttributesResponseBody extends $tea.Model {
  code?: number;
  data?: SetQueueAttributesResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: SetQueueAttributesResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQueueAttributesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetQueueAttributesResponseBody;
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
      body: SetQueueAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSubscriptionAttributesRequest extends $tea.Model {
  notifyStrategy?: string;
  subscriptionName?: string;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      notifyStrategy: 'NotifyStrategy',
      subscriptionName: 'SubscriptionName',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyStrategy: 'string',
      subscriptionName: 'string',
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSubscriptionAttributesResponseBody extends $tea.Model {
  code?: number;
  data?: SetSubscriptionAttributesResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: SetSubscriptionAttributesResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSubscriptionAttributesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetSubscriptionAttributesResponseBody;
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
      body: SetSubscriptionAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTopicAttributesRequest extends $tea.Model {
  enableLogging?: boolean;
  maxMessageSize?: number;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      enableLogging: 'EnableLogging',
      maxMessageSize: 'MaxMessageSize',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableLogging: 'boolean',
      maxMessageSize: 'number',
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTopicAttributesResponseBody extends $tea.Model {
  code?: number;
  data?: SetTopicAttributesResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: SetTopicAttributesResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTopicAttributesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetTopicAttributesResponseBody;
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
      body: SetTopicAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeRequest extends $tea.Model {
  endpoint?: string;
  messageTag?: string;
  notifyContentFormat?: string;
  notifyStrategy?: string;
  pushType?: string;
  subscriptionName?: string;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      messageTag: 'MessageTag',
      notifyContentFormat: 'NotifyContentFormat',
      notifyStrategy: 'NotifyStrategy',
      pushType: 'PushType',
      subscriptionName: 'SubscriptionName',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      messageTag: 'string',
      notifyContentFormat: 'string',
      notifyStrategy: 'string',
      pushType: 'string',
      subscriptionName: 'string',
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeResponseBody extends $tea.Model {
  code?: number;
  data?: string;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubscribeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubscribeResponseBody;
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
      body: SubscribeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeRequest extends $tea.Model {
  subscriptionName?: string;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      subscriptionName: 'SubscriptionName',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionName: 'string',
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeResponseBody extends $tea.Model {
  code?: number;
  data?: UnsubscribeResponseBodyData;
  message?: string;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: UnsubscribeResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnsubscribeResponseBody;
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
      body: UnsubscribeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueResponseBodyData extends $tea.Model {
  code?: number;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicResponseBodyData extends $tea.Model {
  code?: number;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueueResponseBodyData extends $tea.Model {
  code?: number;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueAttributesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueAttributesResponseBodyDataTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueAttributesResponseBodyData extends $tea.Model {
  activeMessages?: number;
  createTime?: number;
  delayMessages?: number;
  delaySeconds?: number;
  inactiveMessages?: number;
  lastModifyTime?: number;
  loggingEnabled?: boolean;
  maximumMessageSize?: number;
  messageRetentionPeriod?: number;
  pollingWaitSeconds?: number;
  queueName?: string;
  tags?: GetQueueAttributesResponseBodyDataTags[];
  visibilityTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      activeMessages: 'ActiveMessages',
      createTime: 'CreateTime',
      delayMessages: 'DelayMessages',
      delaySeconds: 'DelaySeconds',
      inactiveMessages: 'InactiveMessages',
      lastModifyTime: 'LastModifyTime',
      loggingEnabled: 'LoggingEnabled',
      maximumMessageSize: 'MaximumMessageSize',
      messageRetentionPeriod: 'MessageRetentionPeriod',
      pollingWaitSeconds: 'PollingWaitSeconds',
      queueName: 'QueueName',
      tags: 'Tags',
      visibilityTimeout: 'VisibilityTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeMessages: 'number',
      createTime: 'number',
      delayMessages: 'number',
      delaySeconds: 'number',
      inactiveMessages: 'number',
      lastModifyTime: 'number',
      loggingEnabled: 'boolean',
      maximumMessageSize: 'number',
      messageRetentionPeriod: 'number',
      pollingWaitSeconds: 'number',
      queueName: 'string',
      tags: { 'type': 'array', 'itemType': GetQueueAttributesResponseBodyDataTags },
      visibilityTimeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionAttributesResponseBodyData extends $tea.Model {
  createTime?: number;
  endpoint?: string;
  filterTag?: string;
  lastModifyTime?: number;
  notifyContentFormat?: string;
  notifyStrategy?: string;
  subscriptionName?: string;
  topicName?: string;
  topicOwner?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endpoint: 'Endpoint',
      filterTag: 'FilterTag',
      lastModifyTime: 'LastModifyTime',
      notifyContentFormat: 'NotifyContentFormat',
      notifyStrategy: 'NotifyStrategy',
      subscriptionName: 'SubscriptionName',
      topicName: 'TopicName',
      topicOwner: 'TopicOwner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endpoint: 'string',
      filterTag: 'string',
      lastModifyTime: 'number',
      notifyContentFormat: 'string',
      notifyStrategy: 'string',
      subscriptionName: 'string',
      topicName: 'string',
      topicOwner: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicAttributesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicAttributesResponseBodyDataTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicAttributesResponseBodyData extends $tea.Model {
  createTime?: number;
  lastModifyTime?: number;
  loggingEnabled?: boolean;
  maxMessageSize?: number;
  messageCount?: number;
  messageRetentionPeriod?: number;
  tags?: GetTopicAttributesResponseBodyDataTags[];
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastModifyTime: 'LastModifyTime',
      loggingEnabled: 'LoggingEnabled',
      maxMessageSize: 'MaxMessageSize',
      messageCount: 'MessageCount',
      messageRetentionPeriod: 'MessageRetentionPeriod',
      tags: 'Tags',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      lastModifyTime: 'number',
      loggingEnabled: 'boolean',
      maxMessageSize: 'number',
      messageCount: 'number',
      messageRetentionPeriod: 'number',
      tags: { 'type': 'array', 'itemType': GetTopicAttributesResponseBodyDataTags },
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueResponseBodyDataPageDataTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueResponseBodyDataPageData extends $tea.Model {
  activeMessages?: number;
  createTime?: number;
  delayMessages?: number;
  delaySeconds?: number;
  inactiveMessages?: number;
  lastModifyTime?: number;
  loggingEnabled?: boolean;
  maximumMessageSize?: number;
  messageRetentionPeriod?: number;
  pollingWaitSeconds?: number;
  queueName?: string;
  tags?: ListQueueResponseBodyDataPageDataTags[];
  visibilityTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      activeMessages: 'ActiveMessages',
      createTime: 'CreateTime',
      delayMessages: 'DelayMessages',
      delaySeconds: 'DelaySeconds',
      inactiveMessages: 'InactiveMessages',
      lastModifyTime: 'LastModifyTime',
      loggingEnabled: 'LoggingEnabled',
      maximumMessageSize: 'MaximumMessageSize',
      messageRetentionPeriod: 'MessageRetentionPeriod',
      pollingWaitSeconds: 'PollingWaitSeconds',
      queueName: 'QueueName',
      tags: 'Tags',
      visibilityTimeout: 'VisibilityTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeMessages: 'number',
      createTime: 'number',
      delayMessages: 'number',
      delaySeconds: 'number',
      inactiveMessages: 'number',
      lastModifyTime: 'number',
      loggingEnabled: 'boolean',
      maximumMessageSize: 'number',
      messageRetentionPeriod: 'number',
      pollingWaitSeconds: 'number',
      queueName: 'string',
      tags: { 'type': 'array', 'itemType': ListQueueResponseBodyDataPageDataTags },
      visibilityTimeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueResponseBodyData extends $tea.Model {
  pageData?: ListQueueResponseBodyDataPageData[];
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pages: 'Pages',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': ListQueueResponseBodyDataPageData },
      pageNum: 'number',
      pageSize: 'number',
      pages: 'number',
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionByTopicResponseBodyDataPageData extends $tea.Model {
  createTime?: number;
  endpoint?: string;
  filterTag?: string;
  lastModifyTime?: number;
  notifyContentFormat?: string;
  notifyStrategy?: string;
  subscriptionName?: string;
  topicName?: string;
  topicOwner?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endpoint: 'Endpoint',
      filterTag: 'FilterTag',
      lastModifyTime: 'LastModifyTime',
      notifyContentFormat: 'NotifyContentFormat',
      notifyStrategy: 'NotifyStrategy',
      subscriptionName: 'SubscriptionName',
      topicName: 'TopicName',
      topicOwner: 'TopicOwner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endpoint: 'string',
      filterTag: 'string',
      lastModifyTime: 'number',
      notifyContentFormat: 'string',
      notifyStrategy: 'string',
      subscriptionName: 'string',
      topicName: 'string',
      topicOwner: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubscriptionByTopicResponseBodyData extends $tea.Model {
  pageData?: ListSubscriptionByTopicResponseBodyDataPageData[];
  pageNum?: number;
  pageSize?: number;
  pages?: number;
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pages: 'Pages',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': ListSubscriptionByTopicResponseBodyDataPageData },
      pageNum: 'number',
      pageSize: 'number',
      pages: 'number',
      size: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicResponseBodyDataPageDataTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicResponseBodyDataPageData extends $tea.Model {
  createTime?: number;
  lastModifyTime?: number;
  loggingEnabled?: boolean;
  maxMessageSize?: number;
  messageCount?: number;
  messageRetentionPeriod?: number;
  tags?: ListTopicResponseBodyDataPageDataTags[];
  topicInnerUrl?: string;
  topicName?: string;
  topicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastModifyTime: 'LastModifyTime',
      loggingEnabled: 'LoggingEnabled',
      maxMessageSize: 'MaxMessageSize',
      messageCount: 'MessageCount',
      messageRetentionPeriod: 'MessageRetentionPeriod',
      tags: 'Tags',
      topicInnerUrl: 'TopicInnerUrl',
      topicName: 'TopicName',
      topicUrl: 'TopicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      lastModifyTime: 'number',
      loggingEnabled: 'boolean',
      maxMessageSize: 'number',
      messageCount: 'number',
      messageRetentionPeriod: 'number',
      tags: { 'type': 'array', 'itemType': ListTopicResponseBodyDataPageDataTags },
      topicInnerUrl: 'string',
      topicName: 'string',
      topicUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicResponseBodyData extends $tea.Model {
  pageData?: ListTopicResponseBodyDataPageData[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': ListTopicResponseBodyDataPageData },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQueueAttributesResponseBodyData extends $tea.Model {
  code?: number;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSubscriptionAttributesResponseBodyData extends $tea.Model {
  code?: number;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetTopicAttributesResponseBodyData extends $tea.Model {
  code?: number;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnsubscribeResponseBodyData extends $tea.Model {
  code?: number;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mns-open", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary CreateQueue
   *
   * @param request CreateQueueRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateQueueResponse
   */
  async createQueueWithOptions(request: CreateQueueRequest, runtime: $Util.RuntimeOptions): Promise<CreateQueueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.delaySeconds)) {
      query["DelaySeconds"] = request.delaySeconds;
    }

    if (!Util.isUnset(request.enableLogging)) {
      query["EnableLogging"] = request.enableLogging;
    }

    if (!Util.isUnset(request.maximumMessageSize)) {
      query["MaximumMessageSize"] = request.maximumMessageSize;
    }

    if (!Util.isUnset(request.messageRetentionPeriod)) {
      query["MessageRetentionPeriod"] = request.messageRetentionPeriod;
    }

    if (!Util.isUnset(request.pollingWaitSeconds)) {
      query["PollingWaitSeconds"] = request.pollingWaitSeconds;
    }

    if (!Util.isUnset(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.visibilityTimeout)) {
      query["VisibilityTimeout"] = request.visibilityTimeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateQueue",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateQueueResponse>(await this.callApi(params, req, runtime), new CreateQueueResponse({}));
  }

  /**
   * @summary CreateQueue
   *
   * @param request CreateQueueRequest
   * @return CreateQueueResponse
   */
  async createQueue(request: CreateQueueRequest): Promise<CreateQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQueueWithOptions(request, runtime);
  }

  /**
   * @summary CreateTopic
   *
   * @param request CreateTopicRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateTopicResponse
   */
  async createTopicWithOptions(request: CreateTopicRequest, runtime: $Util.RuntimeOptions): Promise<CreateTopicResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enableLogging)) {
      body["EnableLogging"] = request.enableLogging;
    }

    if (!Util.isUnset(request.maxMessageSize)) {
      body["MaxMessageSize"] = request.maxMessageSize;
    }

    if (!Util.isUnset(request.topicName)) {
      body["TopicName"] = request.topicName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTopic",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTopicResponse>(await this.callApi(params, req, runtime), new CreateTopicResponse({}));
  }

  /**
   * @summary CreateTopic
   *
   * @param request CreateTopicRequest
   * @return CreateTopicResponse
   */
  async createTopic(request: CreateTopicRequest): Promise<CreateTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTopicWithOptions(request, runtime);
  }

  /**
   * @summary DeleteQueue
   *
   * @param request DeleteQueueRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteQueueResponse
   */
  async deleteQueueWithOptions(request: DeleteQueueRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQueueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQueue",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteQueueResponse>(await this.callApi(params, req, runtime), new DeleteQueueResponse({}));
  }

  /**
   * @summary DeleteQueue
   *
   * @param request DeleteQueueRequest
   * @return DeleteQueueResponse
   */
  async deleteQueue(request: DeleteQueueRequest): Promise<DeleteQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQueueWithOptions(request, runtime);
  }

  /**
   * @summary 删除订阅主题
   *
   * @param request DeleteTopicRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTopicResponse
   */
  async deleteTopicWithOptions(request: DeleteTopicRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTopicResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTopic",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTopicResponse>(await this.callApi(params, req, runtime), new DeleteTopicResponse({}));
  }

  /**
   * @summary 删除订阅主题
   *
   * @param request DeleteTopicRequest
   * @return DeleteTopicResponse
   */
  async deleteTopic(request: DeleteTopicRequest): Promise<DeleteTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTopicWithOptions(request, runtime);
  }

  /**
   * @summary GetQueueAttributes
   *
   * @param request GetQueueAttributesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetQueueAttributesResponse
   */
  async getQueueAttributesWithOptions(request: GetQueueAttributesRequest, runtime: $Util.RuntimeOptions): Promise<GetQueueAttributesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueueAttributes",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQueueAttributesResponse>(await this.callApi(params, req, runtime), new GetQueueAttributesResponse({}));
  }

  /**
   * @summary GetQueueAttributes
   *
   * @param request GetQueueAttributesRequest
   * @return GetQueueAttributesResponse
   */
  async getQueueAttributes(request: GetQueueAttributesRequest): Promise<GetQueueAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueueAttributesWithOptions(request, runtime);
  }

  /**
   * @summary GetSubscription
   *
   * @param request GetSubscriptionAttributesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetSubscriptionAttributesResponse
   */
  async getSubscriptionAttributesWithOptions(request: GetSubscriptionAttributesRequest, runtime: $Util.RuntimeOptions): Promise<GetSubscriptionAttributesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.subscriptionName)) {
      query["SubscriptionName"] = request.subscriptionName;
    }

    if (!Util.isUnset(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSubscriptionAttributes",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSubscriptionAttributesResponse>(await this.callApi(params, req, runtime), new GetSubscriptionAttributesResponse({}));
  }

  /**
   * @summary GetSubscription
   *
   * @param request GetSubscriptionAttributesRequest
   * @return GetSubscriptionAttributesResponse
   */
  async getSubscriptionAttributes(request: GetSubscriptionAttributesRequest): Promise<GetSubscriptionAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSubscriptionAttributesWithOptions(request, runtime);
  }

  /**
   * @summary 查询主题
   *
   * @param request GetTopicAttributesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetTopicAttributesResponse
   */
  async getTopicAttributesWithOptions(request: GetTopicAttributesRequest, runtime: $Util.RuntimeOptions): Promise<GetTopicAttributesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTopicAttributes",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTopicAttributesResponse>(await this.callApi(params, req, runtime), new GetTopicAttributesResponse({}));
  }

  /**
   * @summary 查询主题
   *
   * @param request GetTopicAttributesRequest
   * @return GetTopicAttributesResponse
   */
  async getTopicAttributes(request: GetTopicAttributesRequest): Promise<GetTopicAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTopicAttributesWithOptions(request, runtime);
  }

  /**
   * @summary ListQueue
   *
   * @param request ListQueueRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListQueueResponse
   */
  async listQueueWithOptions(request: ListQueueRequest, runtime: $Util.RuntimeOptions): Promise<ListQueueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListQueue",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListQueueResponse>(await this.callApi(params, req, runtime), new ListQueueResponse({}));
  }

  /**
   * @summary ListQueue
   *
   * @param request ListQueueRequest
   * @return ListQueueResponse
   */
  async listQueue(request: ListQueueRequest): Promise<ListQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQueueWithOptions(request, runtime);
  }

  /**
   * @summary ListSubscription
   *
   * @param request ListSubscriptionByTopicRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListSubscriptionByTopicResponse
   */
  async listSubscriptionByTopicWithOptions(request: ListSubscriptionByTopicRequest, runtime: $Util.RuntimeOptions): Promise<ListSubscriptionByTopicResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.subscriptionName)) {
      query["SubscriptionName"] = request.subscriptionName;
    }

    if (!Util.isUnset(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSubscriptionByTopic",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSubscriptionByTopicResponse>(await this.callApi(params, req, runtime), new ListSubscriptionByTopicResponse({}));
  }

  /**
   * @summary ListSubscription
   *
   * @param request ListSubscriptionByTopicRequest
   * @return ListSubscriptionByTopicResponse
   */
  async listSubscriptionByTopic(request: ListSubscriptionByTopicRequest): Promise<ListSubscriptionByTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSubscriptionByTopicWithOptions(request, runtime);
  }

  /**
   * @summary ListTopic
   *
   * @param request ListTopicRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTopicResponse
   */
  async listTopicWithOptions(request: ListTopicRequest, runtime: $Util.RuntimeOptions): Promise<ListTopicResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTopic",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTopicResponse>(await this.callApi(params, req, runtime), new ListTopicResponse({}));
  }

  /**
   * @summary ListTopic
   *
   * @param request ListTopicRequest
   * @return ListTopicResponse
   */
  async listTopic(request: ListTopicRequest): Promise<ListTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTopicWithOptions(request, runtime);
  }

  /**
   * @summary SetQueueAttributes
   *
   * @param request SetQueueAttributesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetQueueAttributesResponse
   */
  async setQueueAttributesWithOptions(request: SetQueueAttributesRequest, runtime: $Util.RuntimeOptions): Promise<SetQueueAttributesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.delaySeconds)) {
      query["DelaySeconds"] = request.delaySeconds;
    }

    if (!Util.isUnset(request.enableLogging)) {
      query["EnableLogging"] = request.enableLogging;
    }

    if (!Util.isUnset(request.maximumMessageSize)) {
      query["MaximumMessageSize"] = request.maximumMessageSize;
    }

    if (!Util.isUnset(request.messageRetentionPeriod)) {
      query["MessageRetentionPeriod"] = request.messageRetentionPeriod;
    }

    if (!Util.isUnset(request.pollingWaitSeconds)) {
      query["PollingWaitSeconds"] = request.pollingWaitSeconds;
    }

    if (!Util.isUnset(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!Util.isUnset(request.visibilityTimeout)) {
      query["VisibilityTimeout"] = request.visibilityTimeout;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetQueueAttributes",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetQueueAttributesResponse>(await this.callApi(params, req, runtime), new SetQueueAttributesResponse({}));
  }

  /**
   * @summary SetQueueAttributes
   *
   * @param request SetQueueAttributesRequest
   * @return SetQueueAttributesResponse
   */
  async setQueueAttributes(request: SetQueueAttributesRequest): Promise<SetQueueAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setQueueAttributesWithOptions(request, runtime);
  }

  /**
   * @summary ModifySubscription
   *
   * @param request SetSubscriptionAttributesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetSubscriptionAttributesResponse
   */
  async setSubscriptionAttributesWithOptions(request: SetSubscriptionAttributesRequest, runtime: $Util.RuntimeOptions): Promise<SetSubscriptionAttributesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.notifyStrategy)) {
      query["NotifyStrategy"] = request.notifyStrategy;
    }

    if (!Util.isUnset(request.subscriptionName)) {
      query["SubscriptionName"] = request.subscriptionName;
    }

    if (!Util.isUnset(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetSubscriptionAttributes",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetSubscriptionAttributesResponse>(await this.callApi(params, req, runtime), new SetSubscriptionAttributesResponse({}));
  }

  /**
   * @summary ModifySubscription
   *
   * @param request SetSubscriptionAttributesRequest
   * @return SetSubscriptionAttributesResponse
   */
  async setSubscriptionAttributes(request: SetSubscriptionAttributesRequest): Promise<SetSubscriptionAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSubscriptionAttributesWithOptions(request, runtime);
  }

  /**
   * @summary 编辑订阅主题
   *
   * @param request SetTopicAttributesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetTopicAttributesResponse
   */
  async setTopicAttributesWithOptions(request: SetTopicAttributesRequest, runtime: $Util.RuntimeOptions): Promise<SetTopicAttributesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enableLogging)) {
      query["EnableLogging"] = request.enableLogging;
    }

    if (!Util.isUnset(request.maxMessageSize)) {
      query["MaxMessageSize"] = request.maxMessageSize;
    }

    if (!Util.isUnset(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetTopicAttributes",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetTopicAttributesResponse>(await this.callApi(params, req, runtime), new SetTopicAttributesResponse({}));
  }

  /**
   * @summary 编辑订阅主题
   *
   * @param request SetTopicAttributesRequest
   * @return SetTopicAttributesResponse
   */
  async setTopicAttributes(request: SetTopicAttributesRequest): Promise<SetTopicAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setTopicAttributesWithOptions(request, runtime);
  }

  /**
   * @summary CreateSubscription
   *
   * @param request SubscribeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SubscribeResponse
   */
  async subscribeWithOptions(request: SubscribeRequest, runtime: $Util.RuntimeOptions): Promise<SubscribeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.messageTag)) {
      query["MessageTag"] = request.messageTag;
    }

    if (!Util.isUnset(request.notifyContentFormat)) {
      query["NotifyContentFormat"] = request.notifyContentFormat;
    }

    if (!Util.isUnset(request.notifyStrategy)) {
      query["NotifyStrategy"] = request.notifyStrategy;
    }

    if (!Util.isUnset(request.pushType)) {
      query["PushType"] = request.pushType;
    }

    if (!Util.isUnset(request.subscriptionName)) {
      query["SubscriptionName"] = request.subscriptionName;
    }

    if (!Util.isUnset(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Subscribe",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubscribeResponse>(await this.callApi(params, req, runtime), new SubscribeResponse({}));
  }

  /**
   * @summary CreateSubscription
   *
   * @param request SubscribeRequest
   * @return SubscribeResponse
   */
  async subscribe(request: SubscribeRequest): Promise<SubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.subscribeWithOptions(request, runtime);
  }

  /**
   * @summary DeleteSubscription
   *
   * @param request UnsubscribeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnsubscribeResponse
   */
  async unsubscribeWithOptions(request: UnsubscribeRequest, runtime: $Util.RuntimeOptions): Promise<UnsubscribeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.subscriptionName)) {
      query["SubscriptionName"] = request.subscriptionName;
    }

    if (!Util.isUnset(request.topicName)) {
      query["TopicName"] = request.topicName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Unsubscribe",
      version: "2022-01-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnsubscribeResponse>(await this.callApi(params, req, runtime), new UnsubscribeResponse({}));
  }

  /**
   * @summary DeleteSubscription
   *
   * @param request UnsubscribeRequest
   * @return UnsubscribeResponse
   */
  async unsubscribe(request: UnsubscribeRequest): Promise<UnsubscribeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unsubscribeWithOptions(request, runtime);
  }

}
