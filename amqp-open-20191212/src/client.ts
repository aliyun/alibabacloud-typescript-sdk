// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateBindingRequest extends $tea.Model {
  instanceId?: string;
  virtualHost?: string;
  sourceExchange?: string;
  destinationName?: string;
  bindingKey?: string;
  bindingType?: string;
  argument?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
      sourceExchange: 'SourceExchange',
      destinationName: 'DestinationName',
      bindingKey: 'BindingKey',
      bindingType: 'BindingType',
      argument: 'Argument',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
      sourceExchange: 'string',
      destinationName: 'string',
      bindingKey: 'string',
      bindingType: 'string',
      argument: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBindingResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBindingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBindingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBindingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExchangeRequest extends $tea.Model {
  instanceId?: string;
  virtualHost?: string;
  exchangeName?: string;
  exchangeType?: string;
  autoDeleteState?: boolean;
  internal?: boolean;
  alternateExchange?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
      exchangeName: 'ExchangeName',
      exchangeType: 'ExchangeType',
      autoDeleteState: 'AutoDeleteState',
      internal: 'Internal',
      alternateExchange: 'AlternateExchange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
      exchangeName: 'string',
      exchangeType: 'string',
      autoDeleteState: 'boolean',
      internal: 'boolean',
      alternateExchange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExchangeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExchangeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateExchangeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateExchangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueRequest extends $tea.Model {
  instanceId?: string;
  virtualHost?: string;
  queueName?: string;
  autoDeleteState?: boolean;
  exclusiveState?: boolean;
  messageTTL?: number;
  autoExpireState?: number;
  maxLength?: number;
  deadLetterExchange?: string;
  deadLetterRoutingKey?: string;
  maximumPriority?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
      queueName: 'QueueName',
      autoDeleteState: 'AutoDeleteState',
      exclusiveState: 'ExclusiveState',
      messageTTL: 'MessageTTL',
      autoExpireState: 'AutoExpireState',
      maxLength: 'MaxLength',
      deadLetterExchange: 'DeadLetterExchange',
      deadLetterRoutingKey: 'DeadLetterRoutingKey',
      maximumPriority: 'MaximumPriority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
      queueName: 'string',
      autoDeleteState: 'boolean',
      exclusiveState: 'boolean',
      messageTTL: 'number',
      autoExpireState: 'number',
      maxLength: 'number',
      deadLetterExchange: 'string',
      deadLetterRoutingKey: 'string',
      maximumPriority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualHostRequest extends $tea.Model {
  instanceId?: string;
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualHostResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVirtualHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVirtualHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBindingRequest extends $tea.Model {
  instanceId?: string;
  virtualHost?: string;
  sourceExchange?: string;
  destinationName?: string;
  bindingType?: string;
  bindingKey?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
      sourceExchange: 'SourceExchange',
      destinationName: 'DestinationName',
      bindingType: 'BindingType',
      bindingKey: 'BindingKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
      sourceExchange: 'string',
      destinationName: 'string',
      bindingType: 'string',
      bindingKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBindingResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBindingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBindingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBindingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExchangeRequest extends $tea.Model {
  instanceId?: string;
  virtualHost?: string;
  exchangeName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
      exchangeName: 'ExchangeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
      exchangeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExchangeResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExchangeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteExchangeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteExchangeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueueRequest extends $tea.Model {
  instanceId?: string;
  queueName?: string;
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queueName: 'QueueName',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queueName: 'string',
      virtualHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueueResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualHostRequest extends $tea.Model {
  instanceId?: string;
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualHostResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualHostResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVirtualHostResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVirtualHostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetadataAmountRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetadataAmountResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetMetadataAmountResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetMetadataAmountResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetadataAmountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMetadataAmountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMetadataAmountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindingsRequest extends $tea.Model {
  instanceId?: string;
  virtualHost?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindingsResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListBindingsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListBindingsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBindingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBindingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownStreamBindingsRequest extends $tea.Model {
  instanceId?: string;
  virtualHost?: string;
  exchangeName?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
      exchangeName: 'ExchangeName',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
      exchangeName: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownStreamBindingsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListDownStreamBindingsResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListDownStreamBindingsResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownStreamBindingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDownStreamBindingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDownStreamBindingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangesRequest extends $tea.Model {
  instanceId?: string;
  virtualHost?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangesResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListExchangesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListExchangesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListExchangesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListExchangesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangeUpStreamBindingsRequest extends $tea.Model {
  instanceId?: string;
  virtualHost?: string;
  exchangeName?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
      exchangeName: 'ExchangeName',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
      exchangeName: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangeUpStreamBindingsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: ListExchangeUpStreamBindingsResponseBodyData;
  code?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: ListExchangeUpStreamBindingsResponseBodyData,
      code: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangeUpStreamBindingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListExchangeUpStreamBindingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListExchangeUpStreamBindingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListInstancesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListInstancesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueConsumersRequest extends $tea.Model {
  instanceId?: string;
  virtualHost?: string;
  queue?: string;
  nextToken?: string;
  queryCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
      queue: 'Queue',
      nextToken: 'NextToken',
      queryCount: 'QueryCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
      queue: 'string',
      nextToken: 'string',
      queryCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueConsumersResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListQueueConsumersResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListQueueConsumersResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueConsumersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListQueueConsumersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListQueueConsumersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesRequest extends $tea.Model {
  instanceId?: string;
  virtualHost?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListQueuesResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListQueuesResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListQueuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListQueuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueUpStreamBindingsRequest extends $tea.Model {
  instanceId?: string;
  virtualHost?: string;
  queueName?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      virtualHost: 'VirtualHost',
      queueName: 'QueueName',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      virtualHost: 'string',
      queueName: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueUpStreamBindingsResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListQueueUpStreamBindingsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListQueueUpStreamBindingsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueUpStreamBindingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListQueueUpStreamBindingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListQueueUpStreamBindingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualHostsRequest extends $tea.Model {
  instanceId?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualHostsResponseBody extends $tea.Model {
  requestId?: string;
  data?: ListVirtualHostsResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ListVirtualHostsResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualHostsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVirtualHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVirtualHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetadataAmountResponseBodyData extends $tea.Model {
  maxVirtualHosts?: number;
  currentVirtualHosts?: number;
  maxQueues?: number;
  currentExchanges?: number;
  maxExchanges?: number;
  currentQueues?: number;
  static names(): { [key: string]: string } {
    return {
      maxVirtualHosts: 'MaxVirtualHosts',
      currentVirtualHosts: 'CurrentVirtualHosts',
      maxQueues: 'MaxQueues',
      currentExchanges: 'CurrentExchanges',
      maxExchanges: 'MaxExchanges',
      currentQueues: 'CurrentQueues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxVirtualHosts: 'number',
      currentVirtualHosts: 'number',
      maxQueues: 'number',
      currentExchanges: 'number',
      maxExchanges: 'number',
      currentQueues: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindingsResponseBodyDataBindings extends $tea.Model {
  sourceExchange?: string;
  bindingKey?: string;
  bindingType?: string;
  argument?: string;
  destinationName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceExchange: 'SourceExchange',
      bindingKey: 'BindingKey',
      bindingType: 'BindingType',
      argument: 'Argument',
      destinationName: 'DestinationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceExchange: 'string',
      bindingKey: 'string',
      bindingType: 'string',
      argument: 'string',
      destinationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindingsResponseBodyData extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  bindings?: ListBindingsResponseBodyDataBindings[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      bindings: 'Bindings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      bindings: { 'type': 'array', 'itemType': ListBindingsResponseBodyDataBindings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownStreamBindingsResponseBodyDataBindings extends $tea.Model {
  sourceExchange?: string;
  bindingKey?: string;
  bindingType?: string;
  argument?: string;
  destinationName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceExchange: 'SourceExchange',
      bindingKey: 'BindingKey',
      bindingType: 'BindingType',
      argument: 'Argument',
      destinationName: 'DestinationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceExchange: 'string',
      bindingKey: 'string',
      bindingType: 'string',
      argument: 'string',
      destinationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownStreamBindingsResponseBodyData extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  bindings?: ListDownStreamBindingsResponseBodyDataBindings[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      bindings: 'Bindings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      bindings: { 'type': 'array', 'itemType': ListDownStreamBindingsResponseBodyDataBindings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangesResponseBodyDataExchanges extends $tea.Model {
  autoDeleteState?: boolean;
  createTime?: number;
  attributes?: { [key: string]: any };
  VHostName?: string;
  name?: string;
  exchangeType?: string;
  static names(): { [key: string]: string } {
    return {
      autoDeleteState: 'AutoDeleteState',
      createTime: 'CreateTime',
      attributes: 'Attributes',
      VHostName: 'VHostName',
      name: 'Name',
      exchangeType: 'ExchangeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeleteState: 'boolean',
      createTime: 'number',
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      VHostName: 'string',
      name: 'string',
      exchangeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangesResponseBodyData extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  exchanges?: ListExchangesResponseBodyDataExchanges[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      exchanges: 'Exchanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      exchanges: { 'type': 'array', 'itemType': ListExchangesResponseBodyDataExchanges },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangeUpStreamBindingsResponseBodyDataBindings extends $tea.Model {
  sourceExchange?: string;
  bindingKey?: string;
  bindingType?: string;
  argument?: string;
  destinationName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceExchange: 'SourceExchange',
      bindingKey: 'BindingKey',
      bindingType: 'BindingType',
      argument: 'Argument',
      destinationName: 'DestinationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceExchange: 'string',
      bindingKey: 'string',
      bindingType: 'string',
      argument: 'string',
      destinationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExchangeUpStreamBindingsResponseBodyData extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  bindings?: ListExchangeUpStreamBindingsResponseBodyDataBindings[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      bindings: 'Bindings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      bindings: { 'type': 'array', 'itemType': ListExchangeUpStreamBindingsResponseBodyDataBindings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataInstances extends $tea.Model {
  status?: string;
  supportEIP?: boolean;
  autoRenewInstance?: boolean;
  expireTime?: number;
  orderCreateTime?: number;
  instanceName?: string;
  privateEndpoint?: string;
  orderType?: string;
  instanceId?: string;
  instanceType?: string;
  publicEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      supportEIP: 'SupportEIP',
      autoRenewInstance: 'AutoRenewInstance',
      expireTime: 'ExpireTime',
      orderCreateTime: 'OrderCreateTime',
      instanceName: 'InstanceName',
      privateEndpoint: 'PrivateEndpoint',
      orderType: 'OrderType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      publicEndpoint: 'PublicEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      supportEIP: 'boolean',
      autoRenewInstance: 'boolean',
      expireTime: 'number',
      orderCreateTime: 'number',
      instanceName: 'string',
      privateEndpoint: 'string',
      orderType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      publicEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyData extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  instances?: ListInstancesResponseBodyDataInstances[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueConsumersResponseBodyDataConsumers extends $tea.Model {
  consumerTag?: string;
  static names(): { [key: string]: string } {
    return {
      consumerTag: 'ConsumerTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueConsumersResponseBodyData extends $tea.Model {
  nextToken?: string;
  consumers?: ListQueueConsumersResponseBodyDataConsumers[];
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      consumers: 'Consumers',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      consumers: { 'type': 'array', 'itemType': ListQueueConsumersResponseBodyDataConsumers },
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyDataQueues extends $tea.Model {
  exclusiveState?: boolean;
  autoDeleteState?: boolean;
  createTime?: number;
  attributes?: { [key: string]: any };
  VHostName?: string;
  name?: string;
  ownerId?: string;
  lastConsumeTime?: number;
  static names(): { [key: string]: string } {
    return {
      exclusiveState: 'ExclusiveState',
      autoDeleteState: 'AutoDeleteState',
      createTime: 'CreateTime',
      attributes: 'Attributes',
      VHostName: 'VHostName',
      name: 'Name',
      ownerId: 'OwnerId',
      lastConsumeTime: 'LastConsumeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exclusiveState: 'boolean',
      autoDeleteState: 'boolean',
      createTime: 'number',
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      VHostName: 'string',
      name: 'string',
      ownerId: 'string',
      lastConsumeTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyData extends $tea.Model {
  nextToken?: string;
  queues?: ListQueuesResponseBodyDataQueues[];
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      queues: 'Queues',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      queues: { 'type': 'array', 'itemType': ListQueuesResponseBodyDataQueues },
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueUpStreamBindingsResponseBodyDataBindings extends $tea.Model {
  sourceExchange?: string;
  bindingKey?: string;
  bindingType?: string;
  argument?: string;
  destinationName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceExchange: 'SourceExchange',
      bindingKey: 'BindingKey',
      bindingType: 'BindingType',
      argument: 'Argument',
      destinationName: 'DestinationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceExchange: 'string',
      bindingKey: 'string',
      bindingType: 'string',
      argument: 'string',
      destinationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueueUpStreamBindingsResponseBodyData extends $tea.Model {
  nextToken?: string;
  maxResults?: string;
  bindings?: ListQueueUpStreamBindingsResponseBodyDataBindings[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      bindings: 'Bindings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'string',
      bindings: { 'type': 'array', 'itemType': ListQueueUpStreamBindingsResponseBodyDataBindings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualHostsResponseBodyDataVirtualHosts extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualHostsResponseBodyData extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  virtualHosts?: ListVirtualHostsResponseBodyDataVirtualHosts[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      virtualHosts: 'VirtualHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      virtualHosts: { 'type': 'array', 'itemType': ListVirtualHostsResponseBodyDataVirtualHosts },
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
    this._endpoint = this.getEndpoint("amqp-open", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createBindingWithOptions(request: CreateBindingRequest, runtime: $Util.RuntimeOptions): Promise<CreateBindingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBindingResponse>(await this.doRPCRequest("CreateBinding", "2019-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBindingResponse({}));
  }

  async createBinding(request: CreateBindingRequest): Promise<CreateBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBindingWithOptions(request, runtime);
  }

  async createExchangeWithOptions(request: CreateExchangeRequest, runtime: $Util.RuntimeOptions): Promise<CreateExchangeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateExchangeResponse>(await this.doRPCRequest("CreateExchange", "2019-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateExchangeResponse({}));
  }

  async createExchange(request: CreateExchangeRequest): Promise<CreateExchangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createExchangeWithOptions(request, runtime);
  }

  async createQueueWithOptions(request: CreateQueueRequest, runtime: $Util.RuntimeOptions): Promise<CreateQueueResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateQueueResponse>(await this.doRPCRequest("CreateQueue", "2019-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateQueueResponse({}));
  }

  async createQueue(request: CreateQueueRequest): Promise<CreateQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQueueWithOptions(request, runtime);
  }

  async createVirtualHostWithOptions(request: CreateVirtualHostRequest, runtime: $Util.RuntimeOptions): Promise<CreateVirtualHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVirtualHostResponse>(await this.doRPCRequest("CreateVirtualHost", "2019-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVirtualHostResponse({}));
  }

  async createVirtualHost(request: CreateVirtualHostRequest): Promise<CreateVirtualHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVirtualHostWithOptions(request, runtime);
  }

  async deleteBindingWithOptions(request: DeleteBindingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBindingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBindingResponse>(await this.doRPCRequest("DeleteBinding", "2019-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBindingResponse({}));
  }

  async deleteBinding(request: DeleteBindingRequest): Promise<DeleteBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBindingWithOptions(request, runtime);
  }

  async deleteExchangeWithOptions(request: DeleteExchangeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteExchangeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteExchangeResponse>(await this.doRPCRequest("DeleteExchange", "2019-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteExchangeResponse({}));
  }

  async deleteExchange(request: DeleteExchangeRequest): Promise<DeleteExchangeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteExchangeWithOptions(request, runtime);
  }

  async deleteQueueWithOptions(request: DeleteQueueRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQueueResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteQueueResponse>(await this.doRPCRequest("DeleteQueue", "2019-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteQueueResponse({}));
  }

  async deleteQueue(request: DeleteQueueRequest): Promise<DeleteQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQueueWithOptions(request, runtime);
  }

  async deleteVirtualHostWithOptions(request: DeleteVirtualHostRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVirtualHostResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVirtualHostResponse>(await this.doRPCRequest("DeleteVirtualHost", "2019-12-12", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVirtualHostResponse({}));
  }

  async deleteVirtualHost(request: DeleteVirtualHostRequest): Promise<DeleteVirtualHostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVirtualHostWithOptions(request, runtime);
  }

  async getMetadataAmountWithOptions(request: GetMetadataAmountRequest, runtime: $Util.RuntimeOptions): Promise<GetMetadataAmountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetMetadataAmountResponse>(await this.doRPCRequest("GetMetadataAmount", "2019-12-12", "HTTPS", "GET", "AK", "json", req, runtime), new GetMetadataAmountResponse({}));
  }

  async getMetadataAmount(request: GetMetadataAmountRequest): Promise<GetMetadataAmountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMetadataAmountWithOptions(request, runtime);
  }

  async listBindingsWithOptions(request: ListBindingsRequest, runtime: $Util.RuntimeOptions): Promise<ListBindingsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListBindingsResponse>(await this.doRPCRequest("ListBindings", "2019-12-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListBindingsResponse({}));
  }

  async listBindings(request: ListBindingsRequest): Promise<ListBindingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBindingsWithOptions(request, runtime);
  }

  async listDownStreamBindingsWithOptions(request: ListDownStreamBindingsRequest, runtime: $Util.RuntimeOptions): Promise<ListDownStreamBindingsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListDownStreamBindingsResponse>(await this.doRPCRequest("ListDownStreamBindings", "2019-12-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListDownStreamBindingsResponse({}));
  }

  async listDownStreamBindings(request: ListDownStreamBindingsRequest): Promise<ListDownStreamBindingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDownStreamBindingsWithOptions(request, runtime);
  }

  async listExchangesWithOptions(request: ListExchangesRequest, runtime: $Util.RuntimeOptions): Promise<ListExchangesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListExchangesResponse>(await this.doRPCRequest("ListExchanges", "2019-12-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListExchangesResponse({}));
  }

  async listExchanges(request: ListExchangesRequest): Promise<ListExchangesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExchangesWithOptions(request, runtime);
  }

  async listExchangeUpStreamBindingsWithOptions(request: ListExchangeUpStreamBindingsRequest, runtime: $Util.RuntimeOptions): Promise<ListExchangeUpStreamBindingsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListExchangeUpStreamBindingsResponse>(await this.doRPCRequest("ListExchangeUpStreamBindings", "2019-12-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListExchangeUpStreamBindingsResponse({}));
  }

  async listExchangeUpStreamBindings(request: ListExchangeUpStreamBindingsRequest): Promise<ListExchangeUpStreamBindingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExchangeUpStreamBindingsWithOptions(request, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListInstancesResponse>(await this.doRPCRequest("ListInstances", "2019-12-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListInstancesResponse({}));
  }

  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  async listQueueConsumersWithOptions(request: ListQueueConsumersRequest, runtime: $Util.RuntimeOptions): Promise<ListQueueConsumersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListQueueConsumersResponse>(await this.doRPCRequest("ListQueueConsumers", "2019-12-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListQueueConsumersResponse({}));
  }

  async listQueueConsumers(request: ListQueueConsumersRequest): Promise<ListQueueConsumersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQueueConsumersWithOptions(request, runtime);
  }

  async listQueuesWithOptions(request: ListQueuesRequest, runtime: $Util.RuntimeOptions): Promise<ListQueuesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListQueuesResponse>(await this.doRPCRequest("ListQueues", "2019-12-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListQueuesResponse({}));
  }

  async listQueues(request: ListQueuesRequest): Promise<ListQueuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQueuesWithOptions(request, runtime);
  }

  async listQueueUpStreamBindingsWithOptions(request: ListQueueUpStreamBindingsRequest, runtime: $Util.RuntimeOptions): Promise<ListQueueUpStreamBindingsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListQueueUpStreamBindingsResponse>(await this.doRPCRequest("ListQueueUpStreamBindings", "2019-12-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListQueueUpStreamBindingsResponse({}));
  }

  async listQueueUpStreamBindings(request: ListQueueUpStreamBindingsRequest): Promise<ListQueueUpStreamBindingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQueueUpStreamBindingsWithOptions(request, runtime);
  }

  async listVirtualHostsWithOptions(request: ListVirtualHostsRequest, runtime: $Util.RuntimeOptions): Promise<ListVirtualHostsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<ListVirtualHostsResponse>(await this.doRPCRequest("ListVirtualHosts", "2019-12-12", "HTTPS", "GET", "AK", "json", req, runtime), new ListVirtualHostsResponse({}));
  }

  async listVirtualHosts(request: ListVirtualHostsRequest): Promise<ListVirtualHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVirtualHostsWithOptions(request, runtime);
  }

}
