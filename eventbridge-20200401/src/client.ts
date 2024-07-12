// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateApiDestinationRequest extends $tea.Model {
  apiDestinationName?: string;
  connectionName?: string;
  description?: string;
  httpApiParameters?: CreateApiDestinationRequestHttpApiParameters;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
      connectionName: 'ConnectionName',
      description: 'Description',
      httpApiParameters: 'HttpApiParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
      connectionName: 'string',
      description: 'string',
      httpApiParameters: CreateApiDestinationRequestHttpApiParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiDestinationShrinkRequest extends $tea.Model {
  apiDestinationName?: string;
  connectionName?: string;
  description?: string;
  httpApiParametersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
      connectionName: 'ConnectionName',
      description: 'Description',
      httpApiParametersShrink: 'HttpApiParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
      connectionName: 'string',
      description: 'string',
      httpApiParametersShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiDestinationResponseBody extends $tea.Model {
  code?: string;
  date?: CreateApiDestinationResponseBodyDate;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      date: 'Date',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      date: CreateApiDestinationResponseBodyDate,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiDestinationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApiDestinationResponseBody;
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
      body: CreateApiDestinationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequest extends $tea.Model {
  authParameters?: CreateConnectionRequestAuthParameters;
  connectionName?: string;
  description?: string;
  networkParameters?: CreateConnectionRequestNetworkParameters;
  static names(): { [key: string]: string } {
    return {
      authParameters: 'AuthParameters',
      connectionName: 'ConnectionName',
      description: 'Description',
      networkParameters: 'NetworkParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authParameters: CreateConnectionRequestAuthParameters,
      connectionName: 'string',
      description: 'string',
      networkParameters: CreateConnectionRequestNetworkParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionShrinkRequest extends $tea.Model {
  authParametersShrink?: string;
  connectionName?: string;
  description?: string;
  networkParametersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      authParametersShrink: 'AuthParameters',
      connectionName: 'ConnectionName',
      description: 'Description',
      networkParametersShrink: 'NetworkParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authParametersShrink: 'string',
      connectionName: 'string',
      description: 'string',
      networkParametersShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionResponseBody extends $tea.Model {
  code?: string;
  data?: CreateConnectionResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateConnectionResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConnectionResponseBody;
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
      body: CreateConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventBusRequest extends $tea.Model {
  description?: string;
  eventBusName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventBusResponseBody extends $tea.Model {
  code?: string;
  data?: CreateEventBusResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateEventBusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventBusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEventBusResponseBody;
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
      body: CreateEventBusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequest extends $tea.Model {
  description?: string;
  eventBusName?: string;
  eventSourceName?: string;
  externalSourceConfig?: { [key: string]: any };
  externalSourceType?: Buffer;
  linkedExternalSource?: boolean;
  sourceHttpEventParameters?: CreateEventSourceRequestSourceHttpEventParameters;
  sourceKafkaParameters?: CreateEventSourceRequestSourceKafkaParameters;
  sourceMNSParameters?: CreateEventSourceRequestSourceMNSParameters;
  sourceRabbitMQParameters?: CreateEventSourceRequestSourceRabbitMQParameters;
  sourceRocketMQParameters?: CreateEventSourceRequestSourceRocketMQParameters;
  sourceSLSParameters?: CreateEventSourceRequestSourceSLSParameters;
  sourceScheduledEventParameters?: CreateEventSourceRequestSourceScheduledEventParameters;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
      eventSourceName: 'EventSourceName',
      externalSourceConfig: 'ExternalSourceConfig',
      externalSourceType: 'ExternalSourceType',
      linkedExternalSource: 'LinkedExternalSource',
      sourceHttpEventParameters: 'SourceHttpEventParameters',
      sourceKafkaParameters: 'SourceKafkaParameters',
      sourceMNSParameters: 'SourceMNSParameters',
      sourceRabbitMQParameters: 'SourceRabbitMQParameters',
      sourceRocketMQParameters: 'SourceRocketMQParameters',
      sourceSLSParameters: 'SourceSLSParameters',
      sourceScheduledEventParameters: 'SourceScheduledEventParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
      eventSourceName: 'string',
      externalSourceConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      externalSourceType: 'Buffer',
      linkedExternalSource: 'boolean',
      sourceHttpEventParameters: CreateEventSourceRequestSourceHttpEventParameters,
      sourceKafkaParameters: CreateEventSourceRequestSourceKafkaParameters,
      sourceMNSParameters: CreateEventSourceRequestSourceMNSParameters,
      sourceRabbitMQParameters: CreateEventSourceRequestSourceRabbitMQParameters,
      sourceRocketMQParameters: CreateEventSourceRequestSourceRocketMQParameters,
      sourceSLSParameters: CreateEventSourceRequestSourceSLSParameters,
      sourceScheduledEventParameters: CreateEventSourceRequestSourceScheduledEventParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceShrinkRequest extends $tea.Model {
  description?: string;
  eventBusName?: string;
  eventSourceName?: string;
  externalSourceConfigShrink?: string;
  externalSourceType?: Buffer;
  linkedExternalSource?: boolean;
  sourceHttpEventParametersShrink?: string;
  sourceKafkaParametersShrink?: string;
  sourceMNSParametersShrink?: string;
  sourceRabbitMQParametersShrink?: string;
  sourceRocketMQParametersShrink?: string;
  sourceSLSParametersShrink?: string;
  sourceScheduledEventParametersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
      eventSourceName: 'EventSourceName',
      externalSourceConfigShrink: 'ExternalSourceConfig',
      externalSourceType: 'ExternalSourceType',
      linkedExternalSource: 'LinkedExternalSource',
      sourceHttpEventParametersShrink: 'SourceHttpEventParameters',
      sourceKafkaParametersShrink: 'SourceKafkaParameters',
      sourceMNSParametersShrink: 'SourceMNSParameters',
      sourceRabbitMQParametersShrink: 'SourceRabbitMQParameters',
      sourceRocketMQParametersShrink: 'SourceRocketMQParameters',
      sourceSLSParametersShrink: 'SourceSLSParameters',
      sourceScheduledEventParametersShrink: 'SourceScheduledEventParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
      eventSourceName: 'string',
      externalSourceConfigShrink: 'string',
      externalSourceType: 'Buffer',
      linkedExternalSource: 'boolean',
      sourceHttpEventParametersShrink: 'string',
      sourceKafkaParametersShrink: 'string',
      sourceMNSParametersShrink: 'string',
      sourceRabbitMQParametersShrink: 'string',
      sourceRocketMQParametersShrink: 'string',
      sourceSLSParametersShrink: 'string',
      sourceScheduledEventParametersShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceResponseBody extends $tea.Model {
  code?: string;
  data?: CreateEventSourceResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateEventSourceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEventSourceResponseBody;
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
      body: CreateEventSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequest extends $tea.Model {
  description?: string;
  eventStreamingName?: string;
  filterPattern?: string;
  runOptions?: CreateEventStreamingRequestRunOptions;
  sink?: CreateEventStreamingRequestSink;
  source?: CreateEventStreamingRequestSource;
  transforms?: CreateEventStreamingRequestTransforms[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      runOptions: 'RunOptions',
      sink: 'Sink',
      source: 'Source',
      transforms: 'Transforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventStreamingName: 'string',
      filterPattern: 'string',
      runOptions: CreateEventStreamingRequestRunOptions,
      sink: CreateEventStreamingRequestSink,
      source: CreateEventStreamingRequestSource,
      transforms: { 'type': 'array', 'itemType': CreateEventStreamingRequestTransforms },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingShrinkRequest extends $tea.Model {
  description?: string;
  eventStreamingName?: string;
  filterPattern?: string;
  runOptionsShrink?: string;
  sinkShrink?: string;
  sourceShrink?: string;
  transformsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      runOptionsShrink: 'RunOptions',
      sinkShrink: 'Sink',
      sourceShrink: 'Source',
      transformsShrink: 'Transforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventStreamingName: 'string',
      filterPattern: 'string',
      runOptionsShrink: 'string',
      sinkShrink: 'string',
      sourceShrink: 'string',
      transformsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingResponseBody extends $tea.Model {
  code?: string;
  data?: CreateEventStreamingResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateEventStreamingResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEventStreamingResponseBody;
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
      body: CreateEventStreamingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequest extends $tea.Model {
  description?: string;
  eventBusName?: string;
  eventTargets?: CreateRuleRequestEventTargets[];
  filterPattern?: string;
  ruleName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
      eventTargets: 'EventTargets',
      filterPattern: 'FilterPattern',
      ruleName: 'RuleName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
      eventTargets: { 'type': 'array', 'itemType': CreateRuleRequestEventTargets },
      filterPattern: 'string',
      ruleName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleShrinkRequest extends $tea.Model {
  description?: string;
  eventBusName?: string;
  eventTargetsShrink?: string;
  filterPattern?: string;
  ruleName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
      eventTargetsShrink: 'EventTargets',
      filterPattern: 'FilterPattern',
      ruleName: 'RuleName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
      eventTargetsShrink: 'string',
      filterPattern: 'string',
      ruleName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBody extends $tea.Model {
  code?: string;
  data?: CreateRuleResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRuleResponseBody;
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
      body: CreateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleForProductRequest extends $tea.Model {
  productName?: string;
  static names(): { [key: string]: string } {
    return {
      productName: 'ProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleForProductResponseBody extends $tea.Model {
  code?: string;
  httpCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleForProductResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceLinkedRoleForProductResponseBody;
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
      body: CreateServiceLinkedRoleForProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiDestinationRequest extends $tea.Model {
  apiDestinationName?: string;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiDestinationResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApiDestinationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApiDestinationResponseBody;
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
      body: DeleteApiDestinationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectionRequest extends $tea.Model {
  connectionName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionName: 'ConnectionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConnectionResponseBody;
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
      body: DeleteConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventBusRequest extends $tea.Model {
  eventBusName?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventBusResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventBusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEventBusResponseBody;
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
      body: DeleteEventBusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventSourceRequest extends $tea.Model {
  eventBusName?: string;
  eventSourceName?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      eventSourceName: 'EventSourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      eventSourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventSourceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEventSourceResponseBody;
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
      body: DeleteEventSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventStreamingRequest extends $tea.Model {
  eventStreamingName?: string;
  static names(): { [key: string]: string } {
    return {
      eventStreamingName: 'EventStreamingName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventStreamingName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventStreamingResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventStreamingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEventStreamingResponseBody;
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
      body: DeleteEventStreamingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleRequest extends $tea.Model {
  eventBusName?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRuleResponseBody;
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
      body: DeleteRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTargetsRequest extends $tea.Model {
  eventBusName?: string;
  ruleName?: string;
  targetIds?: string[];
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      ruleName: 'RuleName',
      targetIds: 'TargetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      ruleName: 'string',
      targetIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTargetsShrinkRequest extends $tea.Model {
  eventBusName?: string;
  ruleName?: string;
  targetIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      ruleName: 'RuleName',
      targetIdsShrink: 'TargetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      ruleName: 'string',
      targetIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTargetsResponseBody extends $tea.Model {
  code?: string;
  data?: DeleteTargetsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DeleteTargetsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTargetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTargetsResponseBody;
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
      body: DeleteTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableRuleRequest extends $tea.Model {
  eventBusName?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableRuleResponseBody;
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
      body: DisableRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRuleRequest extends $tea.Model {
  eventBusName?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableRuleResponseBody;
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
      body: EnableRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterCheckEnabledOnDefaultBusResponseBody extends $tea.Model {
  code?: string;
  data?: EventCenterCheckEnabledOnDefaultBusResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EventCenterCheckEnabledOnDefaultBusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterCheckEnabledOnDefaultBusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EventCenterCheckEnabledOnDefaultBusResponseBody;
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
      body: EventCenterCheckEnabledOnDefaultBusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterDisableOnDefaultBusResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterDisableOnDefaultBusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EventCenterDisableOnDefaultBusResponseBody;
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
      body: EventCenterDisableOnDefaultBusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterEnableOnDefaultBusResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterEnableOnDefaultBusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EventCenterEnableOnDefaultBusResponseBody;
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
      body: EventCenterEnableOnDefaultBusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsRequest extends $tea.Model {
  body?: EventCenterQueryEventsRequestBody;
  busName?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      busName: 'BusName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: EventCenterQueryEventsRequestBody,
      busName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsShrinkRequest extends $tea.Model {
  bodyShrink?: string;
  busName?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'Body',
      busName: 'BusName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      busName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsResponseBody extends $tea.Model {
  code?: string;
  data?: EventCenterQueryEventsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: EventCenterQueryEventsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EventCenterQueryEventsResponseBody;
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
      body: EventCenterQueryEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiDestinationRequest extends $tea.Model {
  apiDestinationName?: string;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiDestinationResponseBody extends $tea.Model {
  code?: string;
  data?: GetApiDestinationResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetApiDestinationResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiDestinationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApiDestinationResponseBody;
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
      body: GetApiDestinationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionRequest extends $tea.Model {
  connectionName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionName: 'ConnectionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponseBody extends $tea.Model {
  code?: string;
  data?: GetConnectionResponseBodyData;
  httpCode?: number;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpCode: 'HttpCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetConnectionResponseBodyData,
      httpCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConnectionResponseBody;
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
      body: GetConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventBusRequest extends $tea.Model {
  eventBusName?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventBusResponseBody extends $tea.Model {
  code?: string;
  data?: GetEventBusResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEventBusResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventBusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEventBusResponseBody;
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
      body: GetEventBusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingRequest extends $tea.Model {
  eventStreamingName?: string;
  static names(): { [key: string]: string } {
    return {
      eventStreamingName: 'EventStreamingName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventStreamingName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBody extends $tea.Model {
  code?: string;
  data?: GetEventStreamingResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetEventStreamingResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEventStreamingResponseBody;
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
      body: GetEventStreamingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleRequest extends $tea.Model {
  eventBusName?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBody extends $tea.Model {
  code?: string;
  data?: GetRuleResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRuleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRuleResponseBody;
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
      body: GetRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliyunOfficialEventSourcesResponseBody extends $tea.Model {
  code?: string;
  data?: ListAliyunOfficialEventSourcesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListAliyunOfficialEventSourcesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliyunOfficialEventSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAliyunOfficialEventSourcesResponseBody;
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
      body: ListAliyunOfficialEventSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDestinationsRequest extends $tea.Model {
  apiDestinationNamePrefix?: string;
  connectionName?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      apiDestinationNamePrefix: 'ApiDestinationNamePrefix',
      connectionName: 'ConnectionName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationNamePrefix: 'string',
      connectionName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDestinationsResponseBody extends $tea.Model {
  code?: string;
  data?: ListApiDestinationsResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListApiDestinationsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDestinationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApiDestinationsResponseBody;
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
      body: ListApiDestinationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsRequest extends $tea.Model {
  connectionNamePrefix?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      connectionNamePrefix: 'ConnectionNamePrefix',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionNamePrefix: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBody extends $tea.Model {
  code?: string;
  data?: ListConnectionsResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListConnectionsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConnectionsResponseBody;
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
      body: ListConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBusesRequest extends $tea.Model {
  limit?: number;
  namePrefix?: string;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      namePrefix: 'NamePrefix',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      namePrefix: 'string',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBusesResponseBody extends $tea.Model {
  code?: string;
  data?: ListEventBusesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListEventBusesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBusesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEventBusesResponseBody;
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
      body: ListEventBusesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsRequest extends $tea.Model {
  limit?: number;
  namePrefix?: string;
  nextToken?: string;
  sinkArn?: string;
  sourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      namePrefix: 'NamePrefix',
      nextToken: 'NextToken',
      sinkArn: 'SinkArn',
      sourceArn: 'SourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      namePrefix: 'string',
      nextToken: 'string',
      sinkArn: 'string',
      sourceArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBody extends $tea.Model {
  code?: string;
  data?: ListEventStreamingsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListEventStreamingsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEventStreamingsResponseBody;
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
      body: ListEventStreamingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesRequest extends $tea.Model {
  eventBusName?: string;
  limit?: number;
  nextToken?: string;
  ruleNamePrefix?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      limit: 'Limit',
      nextToken: 'NextToken',
      ruleNamePrefix: 'RuleNamePrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      limit: 'number',
      nextToken: 'string',
      ruleNamePrefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBody extends $tea.Model {
  code?: string;
  data?: ListRulesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListRulesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRulesResponseBody;
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
      body: ListRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetsRequest extends $tea.Model {
  arn?: string;
  eventBusName?: string;
  limit?: number;
  nextToken?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      eventBusName: 'EventBusName',
      limit: 'Limit',
      nextToken: 'NextToken',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      eventBusName: 'string',
      limit: 'number',
      nextToken: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetsResponseBody extends $tea.Model {
  code?: string;
  data?: ListTargetsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListTargetsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTargetsResponseBody;
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
      body: ListTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefinedEventSourcesRequest extends $tea.Model {
  eventBusName?: string;
  limit?: number;
  namePrefix?: string;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      limit: 'Limit',
      namePrefix: 'NamePrefix',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      limit: 'number',
      namePrefix: 'string',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefinedEventSourcesResponseBody extends $tea.Model {
  code?: string;
  data?: ListUserDefinedEventSourcesResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListUserDefinedEventSourcesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefinedEventSourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserDefinedEventSourcesResponseBody;
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
      body: ListUserDefinedEventSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseEventStreamingRequest extends $tea.Model {
  eventStreamingName?: string;
  static names(): { [key: string]: string } {
    return {
      eventStreamingName: 'EventStreamingName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventStreamingName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseEventStreamingResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseEventStreamingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PauseEventStreamingResponseBody;
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
      body: PauseEventStreamingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTargetsRequest extends $tea.Model {
  eventBusName?: string;
  ruleName?: string;
  targets?: PutTargetsRequestTargets[];
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      ruleName: 'RuleName',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      ruleName: 'string',
      targets: { 'type': 'array', 'itemType': PutTargetsRequestTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTargetsShrinkRequest extends $tea.Model {
  eventBusName?: string;
  ruleName?: string;
  targetsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      ruleName: 'RuleName',
      targetsShrink: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      ruleName: 'string',
      targetsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTargetsResponseBody extends $tea.Model {
  code?: string;
  data?: PutTargetsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: PutTargetsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTargetsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutTargetsResponseBody;
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
      body: PutTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRequest extends $tea.Model {
  eventBusName?: string;
  eventId?: string;
  eventSource?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      eventId: 'EventId',
      eventSource: 'EventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      eventId: 'string',
      eventSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventResponseBody extends $tea.Model {
  code?: string;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEventResponseBody;
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
      body: QueryEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventTracesRequest extends $tea.Model {
  eventBusName?: string;
  eventId?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      eventId: 'EventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      eventId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventTracesResponseBody extends $tea.Model {
  code?: string;
  data?: QueryEventTracesResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryEventTracesResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventTracesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryEventTracesResponseBody;
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
      body: QueryEventTracesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTracedEventByEventIdRequest extends $tea.Model {
  eventBusName?: string;
  eventId?: string;
  eventSource?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      eventId: 'EventId',
      eventSource: 'EventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      eventId: 'string',
      eventSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTracedEventByEventIdResponseBody extends $tea.Model {
  code?: string;
  data?: QueryTracedEventByEventIdResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryTracedEventByEventIdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTracedEventByEventIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTracedEventByEventIdResponseBody;
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
      body: QueryTracedEventByEventIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTracedEventsRequest extends $tea.Model {
  endTime?: number;
  eventBusName?: string;
  eventSource?: string;
  eventType?: string;
  limit?: number;
  matchedRule?: string;
  nextToken?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventBusName: 'EventBusName',
      eventSource: 'EventSource',
      eventType: 'EventType',
      limit: 'Limit',
      matchedRule: 'MatchedRule',
      nextToken: 'NextToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      eventBusName: 'string',
      eventSource: 'string',
      eventType: 'string',
      limit: 'number',
      matchedRule: 'string',
      nextToken: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTracedEventsResponseBody extends $tea.Model {
  code?: string;
  data?: QueryTracedEventsResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryTracedEventsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTracedEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryTracedEventsResponseBody;
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
      body: QueryTracedEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEventStreamingRequest extends $tea.Model {
  eventStreamingName?: string;
  static names(): { [key: string]: string } {
    return {
      eventStreamingName: 'EventStreamingName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventStreamingName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEventStreamingResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartEventStreamingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartEventStreamingResponseBody;
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
      body: StartEventStreamingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestEventPatternRequest extends $tea.Model {
  event?: string;
  eventPattern?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventPattern: 'EventPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventPattern: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestEventPatternResponseBody extends $tea.Model {
  code?: string;
  data?: TestEventPatternResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: TestEventPatternResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestEventPatternResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TestEventPatternResponseBody;
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
      body: TestEventPatternResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApiDestinationRequest extends $tea.Model {
  apiDestinationName?: string;
  connectionName?: string;
  description?: string;
  httpApiParameters?: UpdateApiDestinationRequestHttpApiParameters;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
      connectionName: 'ConnectionName',
      description: 'Description',
      httpApiParameters: 'HttpApiParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
      connectionName: 'string',
      description: 'string',
      httpApiParameters: UpdateApiDestinationRequestHttpApiParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApiDestinationShrinkRequest extends $tea.Model {
  apiDestinationName?: string;
  connectionName?: string;
  description?: string;
  httpApiParametersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
      connectionName: 'ConnectionName',
      description: 'Description',
      httpApiParametersShrink: 'HttpApiParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
      connectionName: 'string',
      description: 'string',
      httpApiParametersShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApiDestinationResponseBody extends $tea.Model {
  apiDestinationName?: string;
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApiDestinationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApiDestinationResponseBody;
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
      body: UpdateApiDestinationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionRequest extends $tea.Model {
  authParameters?: UpdateConnectionRequestAuthParameters;
  connectionName?: string;
  description?: string;
  networkParameters?: UpdateConnectionRequestNetworkParameters;
  static names(): { [key: string]: string } {
    return {
      authParameters: 'AuthParameters',
      connectionName: 'ConnectionName',
      description: 'Description',
      networkParameters: 'NetworkParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authParameters: UpdateConnectionRequestAuthParameters,
      connectionName: 'string',
      description: 'string',
      networkParameters: UpdateConnectionRequestNetworkParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionShrinkRequest extends $tea.Model {
  authParametersShrink?: string;
  connectionName?: string;
  description?: string;
  networkParametersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      authParametersShrink: 'AuthParameters',
      connectionName: 'ConnectionName',
      description: 'Description',
      networkParametersShrink: 'NetworkParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authParametersShrink: 'string',
      connectionName: 'string',
      description: 'string',
      networkParametersShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateConnectionResponseBody;
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
      body: UpdateConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventBusRequest extends $tea.Model {
  description?: string;
  eventBusName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventBusResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventBusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEventBusResponseBody;
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
      body: UpdateEventBusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventSourceRequest extends $tea.Model {
  description?: string;
  eventBusName?: string;
  eventSourceName?: string;
  externalSourceConfig?: { [key: string]: any };
  externalSourceType?: string;
  linkedExternalSource?: boolean;
  sourceHttpEventParameters?: UpdateEventSourceRequestSourceHttpEventParameters;
  sourceKafkaParameters?: UpdateEventSourceRequestSourceKafkaParameters;
  sourceMNSParameters?: UpdateEventSourceRequestSourceMNSParameters;
  sourceRabbitMQParameters?: UpdateEventSourceRequestSourceRabbitMQParameters;
  sourceRocketMQParameters?: UpdateEventSourceRequestSourceRocketMQParameters;
  sourceSLSParameters?: UpdateEventSourceRequestSourceSLSParameters;
  sourceScheduledEventParameters?: UpdateEventSourceRequestSourceScheduledEventParameters;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
      eventSourceName: 'EventSourceName',
      externalSourceConfig: 'ExternalSourceConfig',
      externalSourceType: 'ExternalSourceType',
      linkedExternalSource: 'LinkedExternalSource',
      sourceHttpEventParameters: 'SourceHttpEventParameters',
      sourceKafkaParameters: 'SourceKafkaParameters',
      sourceMNSParameters: 'SourceMNSParameters',
      sourceRabbitMQParameters: 'SourceRabbitMQParameters',
      sourceRocketMQParameters: 'SourceRocketMQParameters',
      sourceSLSParameters: 'SourceSLSParameters',
      sourceScheduledEventParameters: 'SourceScheduledEventParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
      eventSourceName: 'string',
      externalSourceConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      externalSourceType: 'string',
      linkedExternalSource: 'boolean',
      sourceHttpEventParameters: UpdateEventSourceRequestSourceHttpEventParameters,
      sourceKafkaParameters: UpdateEventSourceRequestSourceKafkaParameters,
      sourceMNSParameters: UpdateEventSourceRequestSourceMNSParameters,
      sourceRabbitMQParameters: UpdateEventSourceRequestSourceRabbitMQParameters,
      sourceRocketMQParameters: UpdateEventSourceRequestSourceRocketMQParameters,
      sourceSLSParameters: UpdateEventSourceRequestSourceSLSParameters,
      sourceScheduledEventParameters: UpdateEventSourceRequestSourceScheduledEventParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventSourceShrinkRequest extends $tea.Model {
  description?: string;
  eventBusName?: string;
  eventSourceName?: string;
  externalSourceConfigShrink?: string;
  externalSourceType?: string;
  linkedExternalSource?: boolean;
  sourceHttpEventParametersShrink?: string;
  sourceKafkaParametersShrink?: string;
  sourceMNSParametersShrink?: string;
  sourceRabbitMQParametersShrink?: string;
  sourceRocketMQParametersShrink?: string;
  sourceSLSParametersShrink?: string;
  sourceScheduledEventParametersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
      eventSourceName: 'EventSourceName',
      externalSourceConfigShrink: 'ExternalSourceConfig',
      externalSourceType: 'ExternalSourceType',
      linkedExternalSource: 'LinkedExternalSource',
      sourceHttpEventParametersShrink: 'SourceHttpEventParameters',
      sourceKafkaParametersShrink: 'SourceKafkaParameters',
      sourceMNSParametersShrink: 'SourceMNSParameters',
      sourceRabbitMQParametersShrink: 'SourceRabbitMQParameters',
      sourceRocketMQParametersShrink: 'SourceRocketMQParameters',
      sourceSLSParametersShrink: 'SourceSLSParameters',
      sourceScheduledEventParametersShrink: 'SourceScheduledEventParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
      eventSourceName: 'string',
      externalSourceConfigShrink: 'string',
      externalSourceType: 'string',
      linkedExternalSource: 'boolean',
      sourceHttpEventParametersShrink: 'string',
      sourceKafkaParametersShrink: 'string',
      sourceMNSParametersShrink: 'string',
      sourceRabbitMQParametersShrink: 'string',
      sourceRocketMQParametersShrink: 'string',
      sourceSLSParametersShrink: 'string',
      sourceScheduledEventParametersShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventSourceResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventSourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEventSourceResponseBody;
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
      body: UpdateEventSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequest extends $tea.Model {
  description?: string;
  eventStreamingName?: string;
  filterPattern?: string;
  runOptions?: UpdateEventStreamingRequestRunOptions;
  sink?: UpdateEventStreamingRequestSink;
  source?: UpdateEventStreamingRequestSource;
  transforms?: UpdateEventStreamingRequestTransforms[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      runOptions: 'RunOptions',
      sink: 'Sink',
      source: 'Source',
      transforms: 'Transforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventStreamingName: 'string',
      filterPattern: 'string',
      runOptions: UpdateEventStreamingRequestRunOptions,
      sink: UpdateEventStreamingRequestSink,
      source: UpdateEventStreamingRequestSource,
      transforms: { 'type': 'array', 'itemType': UpdateEventStreamingRequestTransforms },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingShrinkRequest extends $tea.Model {
  description?: string;
  eventStreamingName?: string;
  filterPattern?: string;
  runOptionsShrink?: string;
  sinkShrink?: string;
  sourceShrink?: string;
  transformsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      runOptionsShrink: 'RunOptions',
      sinkShrink: 'Sink',
      sourceShrink: 'Source',
      transformsShrink: 'Transforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventStreamingName: 'string',
      filterPattern: 'string',
      runOptionsShrink: 'string',
      sinkShrink: 'string',
      sourceShrink: 'string',
      transformsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEventStreamingResponseBody;
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
      body: UpdateEventStreamingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleRequest extends $tea.Model {
  description?: string;
  eventBusName?: string;
  filterPattern?: string;
  ruleName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventBusName: 'EventBusName',
      filterPattern: 'FilterPattern',
      ruleName: 'RuleName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventBusName: 'string',
      filterPattern: 'string',
      ruleName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRuleResponseBody;
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
      body: UpdateRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiDestinationRequestHttpApiParameters extends $tea.Model {
  endpoint?: string;
  method?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      method: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApiDestinationResponseBodyDate extends $tea.Model {
  apiDestinationName?: string;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParametersApiKeyAuthParameters extends $tea.Model {
  apiKeyName?: string;
  apiKeyValue?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'ApiKeyName',
      apiKeyValue: 'ApiKeyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      apiKeyValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParametersBasicAuthParameters extends $tea.Model {
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParametersOAuthParametersClientParameters extends $tea.Model {
  clientID?: string;
  clientSecret?: string;
  static names(): { [key: string]: string } {
    return {
      clientID: 'ClientID',
      clientSecret: 'ClientSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientID: 'string',
      clientSecret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters extends $tea.Model {
  isValueSecret?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters extends $tea.Model {
  isValueSecret?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters extends $tea.Model {
  isValueSecret?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters extends $tea.Model {
  bodyParameters?: CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[];
  headerParameters?: CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[];
  queryStringParameters?: CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[];
  static names(): { [key: string]: string } {
    return {
      bodyParameters: 'BodyParameters',
      headerParameters: 'HeaderParameters',
      queryStringParameters: 'QueryStringParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyParameters: { 'type': 'array', 'itemType': CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters },
      headerParameters: { 'type': 'array', 'itemType': CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters },
      queryStringParameters: { 'type': 'array', 'itemType': CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParametersOAuthParameters extends $tea.Model {
  authorizationEndpoint?: string;
  clientParameters?: CreateConnectionRequestAuthParametersOAuthParametersClientParameters;
  httpMethod?: string;
  OAuthHttpParameters?: CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'AuthorizationEndpoint',
      clientParameters: 'ClientParameters',
      httpMethod: 'HttpMethod',
      OAuthHttpParameters: 'OAuthHttpParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      clientParameters: CreateConnectionRequestAuthParametersOAuthParametersClientParameters,
      httpMethod: 'string',
      OAuthHttpParameters: CreateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestAuthParameters extends $tea.Model {
  apiKeyAuthParameters?: CreateConnectionRequestAuthParametersApiKeyAuthParameters;
  authorizationType?: string;
  basicAuthParameters?: CreateConnectionRequestAuthParametersBasicAuthParameters;
  OAuthParameters?: CreateConnectionRequestAuthParametersOAuthParameters;
  static names(): { [key: string]: string } {
    return {
      apiKeyAuthParameters: 'ApiKeyAuthParameters',
      authorizationType: 'AuthorizationType',
      basicAuthParameters: 'BasicAuthParameters',
      OAuthParameters: 'OAuthParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyAuthParameters: CreateConnectionRequestAuthParametersApiKeyAuthParameters,
      authorizationType: 'string',
      basicAuthParameters: CreateConnectionRequestAuthParametersBasicAuthParameters,
      OAuthParameters: CreateConnectionRequestAuthParametersOAuthParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionRequestNetworkParameters extends $tea.Model {
  networkType?: string;
  securityGroupId?: string;
  vpcId?: string;
  vswitcheId?: string;
  static names(): { [key: string]: string } {
    return {
      networkType: 'NetworkType',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vswitcheId: 'VswitcheId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vswitcheId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConnectionResponseBodyData extends $tea.Model {
  connectionName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionName: 'ConnectionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventBusResponseBodyData extends $tea.Model {
  eventBusARN?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusARN: 'EventBusARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusARN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequestSourceHttpEventParameters extends $tea.Model {
  ip?: string[];
  method?: string[];
  referer?: string[];
  securityConfig?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      method: 'Method',
      referer: 'Referer',
      securityConfig: 'SecurityConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
      method: { 'type': 'array', 'itemType': 'string' },
      referer: { 'type': 'array', 'itemType': 'string' },
      securityConfig: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequestSourceKafkaParameters extends $tea.Model {
  consumerGroup?: string;
  instanceId?: string;
  maximumTasks?: number;
  network?: string;
  offsetReset?: string;
  regionId?: string;
  securityGroupId?: string;
  topic?: string;
  vSwitchIds?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      maximumTasks: 'MaximumTasks',
      network: 'Network',
      offsetReset: 'OffsetReset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      maximumTasks: 'number',
      network: 'string',
      offsetReset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequestSourceMNSParameters extends $tea.Model {
  isBase64Decode?: boolean;
  queueName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      isBase64Decode: 'IsBase64Decode',
      queueName: 'QueueName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBase64Decode: 'boolean',
      queueName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequestSourceRabbitMQParameters extends $tea.Model {
  instanceId?: string;
  queueName?: string;
  regionId?: string;
  virtualHostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queueName: 'QueueName',
      regionId: 'RegionId',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queueName: 'string',
      regionId: 'string',
      virtualHostName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequestSourceRocketMQParameters extends $tea.Model {
  authType?: string;
  groupID?: string;
  instanceEndpoint?: string;
  instanceId?: string;
  instanceNetwork?: string;
  instancePassword?: string;
  instanceSecurityGroupId?: string;
  instanceType?: string;
  instanceUsername?: string;
  instanceVSwitchIds?: string;
  instanceVpcId?: string;
  offset?: string;
  regionId?: string;
  tag?: string;
  timestamp?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      groupID: 'GroupID',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instanceNetwork: 'InstanceNetwork',
      instancePassword: 'InstancePassword',
      instanceSecurityGroupId: 'InstanceSecurityGroupId',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      instanceVSwitchIds: 'InstanceVSwitchIds',
      instanceVpcId: 'InstanceVpcId',
      offset: 'Offset',
      regionId: 'RegionId',
      tag: 'Tag',
      timestamp: 'Timestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      groupID: 'string',
      instanceEndpoint: 'string',
      instanceId: 'string',
      instanceNetwork: 'string',
      instancePassword: 'string',
      instanceSecurityGroupId: 'string',
      instanceType: 'string',
      instanceUsername: 'string',
      instanceVSwitchIds: 'string',
      instanceVpcId: 'string',
      offset: 'string',
      regionId: 'string',
      tag: 'string',
      timestamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequestSourceSLSParameters extends $tea.Model {
  consumePosition?: string;
  logStore?: string;
  project?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      consumePosition: 'ConsumePosition',
      logStore: 'LogStore',
      project: 'Project',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumePosition: 'string',
      logStore: 'string',
      project: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceRequestSourceScheduledEventParameters extends $tea.Model {
  schedule?: string;
  timeZone?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      schedule: 'Schedule',
      timeZone: 'TimeZone',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedule: 'string',
      timeZone: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventSourceResponseBodyData extends $tea.Model {
  eventSourceARN?: string;
  static names(): { [key: string]: string } {
    return {
      eventSourceARN: 'EventSourceARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSourceARN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestRunOptionsBatchWindow extends $tea.Model {
  countBasedWindow?: number;
  timeBasedWindow?: number;
  static names(): { [key: string]: string } {
    return {
      countBasedWindow: 'CountBasedWindow',
      timeBasedWindow: 'TimeBasedWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countBasedWindow: 'number',
      timeBasedWindow: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestRunOptionsDeadLetterQueue extends $tea.Model {
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestRunOptionsLogDeliveryKafkaLogParameters extends $tea.Model {
  endpoint?: string;
  instanceId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      instanceId: 'InstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      instanceId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestRunOptionsLogDeliverySLSLogParameters extends $tea.Model {
  logstoreName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logstoreName: 'LogstoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstoreName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestRunOptionsLogDelivery extends $tea.Model {
  kafkaLogParameters?: CreateEventStreamingRequestRunOptionsLogDeliveryKafkaLogParameters[];
  SLSLogParameters?: CreateEventStreamingRequestRunOptionsLogDeliverySLSLogParameters[];
  static names(): { [key: string]: string } {
    return {
      kafkaLogParameters: 'KafkaLogParameters',
      SLSLogParameters: 'SLSLogParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kafkaLogParameters: { 'type': 'array', 'itemType': CreateEventStreamingRequestRunOptionsLogDeliveryKafkaLogParameters },
      SLSLogParameters: { 'type': 'array', 'itemType': CreateEventStreamingRequestRunOptionsLogDeliverySLSLogParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestRunOptionsNetwork extends $tea.Model {
  securityGroupId?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestRunOptionsResourceSpecResources extends $tea.Model {
  type?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestRunOptionsResourceSpec extends $tea.Model {
  resources?: CreateEventStreamingRequestRunOptionsResourceSpecResources[];
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: { 'type': 'array', 'itemType': CreateEventStreamingRequestRunOptionsResourceSpecResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestRunOptionsRetryStrategy extends $tea.Model {
  maximumEventAgeInSeconds?: number;
  maximumRetryAttempts?: number;
  pushRetryStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      maximumEventAgeInSeconds: 'MaximumEventAgeInSeconds',
      maximumRetryAttempts: 'MaximumRetryAttempts',
      pushRetryStrategy: 'PushRetryStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumEventAgeInSeconds: 'number',
      maximumRetryAttempts: 'number',
      pushRetryStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestRunOptionsScaledObjectTriggersMetadata extends $tea.Model {
  type?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestRunOptionsScaledObjectTriggers extends $tea.Model {
  metadata?: CreateEventStreamingRequestRunOptionsScaledObjectTriggersMetadata;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: CreateEventStreamingRequestRunOptionsScaledObjectTriggersMetadata,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestRunOptionsScaledObject extends $tea.Model {
  maxReplicaCount?: number;
  minReplicaCount?: number;
  triggers?: CreateEventStreamingRequestRunOptionsScaledObjectTriggers[];
  static names(): { [key: string]: string } {
    return {
      maxReplicaCount: 'MaxReplicaCount',
      minReplicaCount: 'MinReplicaCount',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicaCount: 'number',
      minReplicaCount: 'number',
      triggers: { 'type': 'array', 'itemType': CreateEventStreamingRequestRunOptionsScaledObjectTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestRunOptions extends $tea.Model {
  batchWindow?: CreateEventStreamingRequestRunOptionsBatchWindow;
  deadLetterQueue?: CreateEventStreamingRequestRunOptionsDeadLetterQueue;
  errorsTolerance?: string;
  logDelivery?: CreateEventStreamingRequestRunOptionsLogDelivery;
  maximumTasks?: number;
  network?: CreateEventStreamingRequestRunOptionsNetwork;
  resourceSpec?: CreateEventStreamingRequestRunOptionsResourceSpec;
  retryStrategy?: CreateEventStreamingRequestRunOptionsRetryStrategy;
  roleName?: string;
  scaledObject?: CreateEventStreamingRequestRunOptionsScaledObject;
  static names(): { [key: string]: string } {
    return {
      batchWindow: 'BatchWindow',
      deadLetterQueue: 'DeadLetterQueue',
      errorsTolerance: 'ErrorsTolerance',
      logDelivery: 'LogDelivery',
      maximumTasks: 'MaximumTasks',
      network: 'Network',
      resourceSpec: 'ResourceSpec',
      retryStrategy: 'RetryStrategy',
      roleName: 'RoleName',
      scaledObject: 'ScaledObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchWindow: CreateEventStreamingRequestRunOptionsBatchWindow,
      deadLetterQueue: CreateEventStreamingRequestRunOptionsDeadLetterQueue,
      errorsTolerance: 'string',
      logDelivery: CreateEventStreamingRequestRunOptionsLogDelivery,
      maximumTasks: 'number',
      network: CreateEventStreamingRequestRunOptionsNetwork,
      resourceSpec: CreateEventStreamingRequestRunOptionsResourceSpec,
      retryStrategy: CreateEventStreamingRequestRunOptionsRetryStrategy,
      roleName: 'string',
      scaledObject: CreateEventStreamingRequestRunOptionsScaledObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters extends $tea.Model {
  config?: { [key: string]: any };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters extends $tea.Model {
  connectorPackageUrl?: string;
  connectorParameters?: CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters;
  workerParameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      connectorPackageUrl: 'ConnectorPackageUrl',
      connectorParameters: 'ConnectorParameters',
      workerParameters: 'WorkerParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorPackageUrl: 'string',
      connectorParameters: CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters,
      workerParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkCustomizedKafkaParameters extends $tea.Model {
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

export class CreateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkDashVectorParametersPartition extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkDashVectorParametersVector extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkDashVectorParameters extends $tea.Model {
  apiKey?: string;
  collection?: string;
  dashVectorSchemaParameters?: CreateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters;
  instanceId?: string;
  network?: string;
  operation?: string;
  partition?: CreateEventStreamingRequestSinkSinkDashVectorParametersPartition;
  primaryKeyId?: CreateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId;
  vector?: CreateEventStreamingRequestSinkSinkDashVectorParametersVector;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      collection: 'Collection',
      dashVectorSchemaParameters: 'DashVectorSchemaParameters',
      instanceId: 'InstanceId',
      network: 'Network',
      operation: 'Operation',
      partition: 'Partition',
      primaryKeyId: 'PrimaryKeyId',
      vector: 'Vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      collection: 'string',
      dashVectorSchemaParameters: CreateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters,
      instanceId: 'string',
      network: 'string',
      operation: 'string',
      partition: CreateEventStreamingRequestSinkSinkDashVectorParametersPartition,
      primaryKeyId: CreateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId,
      vector: CreateEventStreamingRequestSinkSinkDashVectorParametersVector,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkDataHubParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkDataHubParametersProject extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkDataHubParametersRoleName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkDataHubParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkDataHubParametersTopicSchema extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkDataHubParametersTopicType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkDataHubParameters extends $tea.Model {
  body?: CreateEventStreamingRequestSinkSinkDataHubParametersBody;
  project?: CreateEventStreamingRequestSinkSinkDataHubParametersProject;
  roleName?: CreateEventStreamingRequestSinkSinkDataHubParametersRoleName;
  topic?: CreateEventStreamingRequestSinkSinkDataHubParametersTopic;
  topicSchema?: CreateEventStreamingRequestSinkSinkDataHubParametersTopicSchema;
  topicType?: CreateEventStreamingRequestSinkSinkDataHubParametersTopicType;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      project: 'Project',
      roleName: 'RoleName',
      topic: 'Topic',
      topicSchema: 'TopicSchema',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateEventStreamingRequestSinkSinkDataHubParametersBody,
      project: CreateEventStreamingRequestSinkSinkDataHubParametersProject,
      roleName: CreateEventStreamingRequestSinkSinkDataHubParametersRoleName,
      topic: CreateEventStreamingRequestSinkSinkDataHubParametersTopic,
      topicSchema: CreateEventStreamingRequestSinkSinkDataHubParametersTopicSchema,
      topicType: CreateEventStreamingRequestSinkSinkDataHubParametersTopicType,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkFcParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkFcParametersConcurrency extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkFcParametersFunctionName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkFcParametersInvocationType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkFcParametersQualifier extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkFcParametersServiceName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkFcParameters extends $tea.Model {
  body?: CreateEventStreamingRequestSinkSinkFcParametersBody;
  concurrency?: CreateEventStreamingRequestSinkSinkFcParametersConcurrency;
  functionName?: CreateEventStreamingRequestSinkSinkFcParametersFunctionName;
  invocationType?: CreateEventStreamingRequestSinkSinkFcParametersInvocationType;
  qualifier?: CreateEventStreamingRequestSinkSinkFcParametersQualifier;
  serviceName?: CreateEventStreamingRequestSinkSinkFcParametersServiceName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      concurrency: 'Concurrency',
      functionName: 'FunctionName',
      invocationType: 'InvocationType',
      qualifier: 'Qualifier',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateEventStreamingRequestSinkSinkFcParametersBody,
      concurrency: CreateEventStreamingRequestSinkSinkFcParametersConcurrency,
      functionName: CreateEventStreamingRequestSinkSinkFcParametersFunctionName,
      invocationType: CreateEventStreamingRequestSinkSinkFcParametersInvocationType,
      qualifier: CreateEventStreamingRequestSinkSinkFcParametersQualifier,
      serviceName: CreateEventStreamingRequestSinkSinkFcParametersServiceName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkFnfParametersExecutionName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkFnfParametersFlowName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkFnfParametersInput extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkFnfParametersRoleName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkFnfParameters extends $tea.Model {
  executionName?: CreateEventStreamingRequestSinkSinkFnfParametersExecutionName;
  flowName?: CreateEventStreamingRequestSinkSinkFnfParametersFlowName;
  input?: CreateEventStreamingRequestSinkSinkFnfParametersInput;
  roleName?: CreateEventStreamingRequestSinkSinkFnfParametersRoleName;
  static names(): { [key: string]: string } {
    return {
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      input: 'Input',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionName: CreateEventStreamingRequestSinkSinkFnfParametersExecutionName,
      flowName: CreateEventStreamingRequestSinkSinkFnfParametersFlowName,
      input: CreateEventStreamingRequestSinkSinkFnfParametersInput,
      roleName: CreateEventStreamingRequestSinkSinkFnfParametersRoleName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkKafkaParametersAcks extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkKafkaParametersInstanceId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkKafkaParametersKey extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkKafkaParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkKafkaParametersValue extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkKafkaParameters extends $tea.Model {
  acks?: CreateEventStreamingRequestSinkSinkKafkaParametersAcks;
  instanceId?: CreateEventStreamingRequestSinkSinkKafkaParametersInstanceId;
  key?: CreateEventStreamingRequestSinkSinkKafkaParametersKey;
  topic?: CreateEventStreamingRequestSinkSinkKafkaParametersTopic;
  value?: CreateEventStreamingRequestSinkSinkKafkaParametersValue;
  static names(): { [key: string]: string } {
    return {
      acks: 'Acks',
      instanceId: 'InstanceId',
      key: 'Key',
      topic: 'Topic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acks: CreateEventStreamingRequestSinkSinkKafkaParametersAcks,
      instanceId: CreateEventStreamingRequestSinkSinkKafkaParametersInstanceId,
      key: CreateEventStreamingRequestSinkSinkKafkaParametersKey,
      topic: CreateEventStreamingRequestSinkSinkKafkaParametersTopic,
      value: CreateEventStreamingRequestSinkSinkKafkaParametersValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkMNSParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkMNSParametersQueueName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkMNSParameters extends $tea.Model {
  body?: CreateEventStreamingRequestSinkSinkMNSParametersBody;
  isBase64Encode?: CreateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode;
  queueName?: CreateEventStreamingRequestSinkSinkMNSParametersQueueName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      isBase64Encode: 'IsBase64Encode',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateEventStreamingRequestSinkSinkMNSParametersBody,
      isBase64Encode: CreateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode,
      queueName: CreateEventStreamingRequestSinkSinkMNSParametersQueueName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkPrometheusParametersData extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkPrometheusParametersNetworkType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkPrometheusParametersPassword extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkPrometheusParametersURL extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkPrometheusParametersUsername extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkPrometheusParametersVpcId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkPrometheusParameters extends $tea.Model {
  authorizationType?: CreateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType;
  data?: CreateEventStreamingRequestSinkSinkPrometheusParametersData;
  headerParameters?: CreateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters;
  networkType?: CreateEventStreamingRequestSinkSinkPrometheusParametersNetworkType;
  password?: CreateEventStreamingRequestSinkSinkPrometheusParametersPassword;
  securityGroupId?: CreateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId;
  URL?: CreateEventStreamingRequestSinkSinkPrometheusParametersURL;
  username?: CreateEventStreamingRequestSinkSinkPrometheusParametersUsername;
  vSwitchId?: CreateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId;
  vpcId?: CreateEventStreamingRequestSinkSinkPrometheusParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      authorizationType: 'AuthorizationType',
      data: 'Data',
      headerParameters: 'HeaderParameters',
      networkType: 'NetworkType',
      password: 'Password',
      securityGroupId: 'SecurityGroupId',
      URL: 'URL',
      username: 'Username',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationType: CreateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType,
      data: CreateEventStreamingRequestSinkSinkPrometheusParametersData,
      headerParameters: CreateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters,
      networkType: CreateEventStreamingRequestSinkSinkPrometheusParametersNetworkType,
      password: CreateEventStreamingRequestSinkSinkPrometheusParametersPassword,
      securityGroupId: CreateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId,
      URL: CreateEventStreamingRequestSinkSinkPrometheusParametersURL,
      username: CreateEventStreamingRequestSinkSinkPrometheusParametersUsername,
      vSwitchId: CreateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId,
      vpcId: CreateEventStreamingRequestSinkSinkPrometheusParametersVpcId,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersExchange extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersMessageId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersProperties extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersQueueName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersTargetType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRabbitMQParameters extends $tea.Model {
  body?: CreateEventStreamingRequestSinkSinkRabbitMQParametersBody;
  exchange?: CreateEventStreamingRequestSinkSinkRabbitMQParametersExchange;
  instanceId?: CreateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId;
  messageId?: CreateEventStreamingRequestSinkSinkRabbitMQParametersMessageId;
  properties?: CreateEventStreamingRequestSinkSinkRabbitMQParametersProperties;
  queueName?: CreateEventStreamingRequestSinkSinkRabbitMQParametersQueueName;
  routingKey?: CreateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey;
  targetType?: CreateEventStreamingRequestSinkSinkRabbitMQParametersTargetType;
  virtualHostName?: CreateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      exchange: 'Exchange',
      instanceId: 'InstanceId',
      messageId: 'MessageId',
      properties: 'Properties',
      queueName: 'QueueName',
      routingKey: 'RoutingKey',
      targetType: 'TargetType',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateEventStreamingRequestSinkSinkRabbitMQParametersBody,
      exchange: CreateEventStreamingRequestSinkSinkRabbitMQParametersExchange,
      instanceId: CreateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId,
      messageId: CreateEventStreamingRequestSinkSinkRabbitMQParametersMessageId,
      properties: CreateEventStreamingRequestSinkSinkRabbitMQParametersProperties,
      queueName: CreateEventStreamingRequestSinkSinkRabbitMQParametersQueueName,
      routingKey: CreateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey,
      targetType: CreateEventStreamingRequestSinkSinkRabbitMQParametersTargetType,
      virtualHostName: CreateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRocketMQParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRocketMQParametersKeys extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRocketMQParametersNetwork extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRocketMQParametersProperties extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRocketMQParametersTags extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRocketMQParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRocketMQParametersVpcId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkRocketMQParameters extends $tea.Model {
  body?: CreateEventStreamingRequestSinkSinkRocketMQParametersBody;
  instanceEndpoint?: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint;
  instanceId?: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceId;
  instancePassword?: CreateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword;
  instanceType?: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceType;
  instanceUsername?: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername;
  keys?: CreateEventStreamingRequestSinkSinkRocketMQParametersKeys;
  network?: CreateEventStreamingRequestSinkSinkRocketMQParametersNetwork;
  properties?: CreateEventStreamingRequestSinkSinkRocketMQParametersProperties;
  securityGroupId?: CreateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId;
  tags?: CreateEventStreamingRequestSinkSinkRocketMQParametersTags;
  topic?: CreateEventStreamingRequestSinkSinkRocketMQParametersTopic;
  vSwitchIds?: CreateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds;
  vpcId?: CreateEventStreamingRequestSinkSinkRocketMQParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instancePassword: 'InstancePassword',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      keys: 'Keys',
      network: 'Network',
      properties: 'Properties',
      securityGroupId: 'SecurityGroupId',
      tags: 'Tags',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateEventStreamingRequestSinkSinkRocketMQParametersBody,
      instanceEndpoint: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint,
      instanceId: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceId,
      instancePassword: CreateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword,
      instanceType: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceType,
      instanceUsername: CreateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername,
      keys: CreateEventStreamingRequestSinkSinkRocketMQParametersKeys,
      network: CreateEventStreamingRequestSinkSinkRocketMQParametersNetwork,
      properties: CreateEventStreamingRequestSinkSinkRocketMQParametersProperties,
      securityGroupId: CreateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId,
      tags: CreateEventStreamingRequestSinkSinkRocketMQParametersTags,
      topic: CreateEventStreamingRequestSinkSinkRocketMQParametersTopic,
      vSwitchIds: CreateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds,
      vpcId: CreateEventStreamingRequestSinkSinkRocketMQParametersVpcId,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkSLSParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkSLSParametersContentSchema extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkSLSParametersContentType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkSLSParametersLogStore extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkSLSParametersProject extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkSLSParametersRoleName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkSLSParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSinkSinkSLSParameters extends $tea.Model {
  body?: CreateEventStreamingRequestSinkSinkSLSParametersBody;
  contentSchema?: CreateEventStreamingRequestSinkSinkSLSParametersContentSchema;
  contentType?: CreateEventStreamingRequestSinkSinkSLSParametersContentType;
  logStore?: CreateEventStreamingRequestSinkSinkSLSParametersLogStore;
  project?: CreateEventStreamingRequestSinkSinkSLSParametersProject;
  roleName?: CreateEventStreamingRequestSinkSinkSLSParametersRoleName;
  topic?: CreateEventStreamingRequestSinkSinkSLSParametersTopic;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      contentSchema: 'ContentSchema',
      contentType: 'ContentType',
      logStore: 'LogStore',
      project: 'Project',
      roleName: 'RoleName',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateEventStreamingRequestSinkSinkSLSParametersBody,
      contentSchema: CreateEventStreamingRequestSinkSinkSLSParametersContentSchema,
      contentType: CreateEventStreamingRequestSinkSinkSLSParametersContentType,
      logStore: CreateEventStreamingRequestSinkSinkSLSParametersLogStore,
      project: CreateEventStreamingRequestSinkSinkSLSParametersProject,
      roleName: CreateEventStreamingRequestSinkSinkSLSParametersRoleName,
      topic: CreateEventStreamingRequestSinkSinkSLSParametersTopic,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSink extends $tea.Model {
  sinkCustomizedKafkaConnectorParameters?: CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters;
  sinkCustomizedKafkaParameters?: CreateEventStreamingRequestSinkSinkCustomizedKafkaParameters;
  sinkDashVectorParameters?: CreateEventStreamingRequestSinkSinkDashVectorParameters;
  sinkDataHubParameters?: CreateEventStreamingRequestSinkSinkDataHubParameters;
  sinkFcParameters?: CreateEventStreamingRequestSinkSinkFcParameters;
  sinkFnfParameters?: CreateEventStreamingRequestSinkSinkFnfParameters;
  sinkKafkaParameters?: CreateEventStreamingRequestSinkSinkKafkaParameters;
  sinkMNSParameters?: CreateEventStreamingRequestSinkSinkMNSParameters;
  sinkPrometheusParameters?: CreateEventStreamingRequestSinkSinkPrometheusParameters;
  sinkRabbitMQParameters?: CreateEventStreamingRequestSinkSinkRabbitMQParameters;
  sinkRocketMQParameters?: CreateEventStreamingRequestSinkSinkRocketMQParameters;
  sinkSLSParameters?: CreateEventStreamingRequestSinkSinkSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sinkCustomizedKafkaConnectorParameters: 'SinkCustomizedKafkaConnectorParameters',
      sinkCustomizedKafkaParameters: 'SinkCustomizedKafkaParameters',
      sinkDashVectorParameters: 'SinkDashVectorParameters',
      sinkDataHubParameters: 'SinkDataHubParameters',
      sinkFcParameters: 'SinkFcParameters',
      sinkFnfParameters: 'SinkFnfParameters',
      sinkKafkaParameters: 'SinkKafkaParameters',
      sinkMNSParameters: 'SinkMNSParameters',
      sinkPrometheusParameters: 'SinkPrometheusParameters',
      sinkRabbitMQParameters: 'SinkRabbitMQParameters',
      sinkRocketMQParameters: 'SinkRocketMQParameters',
      sinkSLSParameters: 'SinkSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sinkCustomizedKafkaConnectorParameters: CreateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters,
      sinkCustomizedKafkaParameters: CreateEventStreamingRequestSinkSinkCustomizedKafkaParameters,
      sinkDashVectorParameters: CreateEventStreamingRequestSinkSinkDashVectorParameters,
      sinkDataHubParameters: CreateEventStreamingRequestSinkSinkDataHubParameters,
      sinkFcParameters: CreateEventStreamingRequestSinkSinkFcParameters,
      sinkFnfParameters: CreateEventStreamingRequestSinkSinkFnfParameters,
      sinkKafkaParameters: CreateEventStreamingRequestSinkSinkKafkaParameters,
      sinkMNSParameters: CreateEventStreamingRequestSinkSinkMNSParameters,
      sinkPrometheusParameters: CreateEventStreamingRequestSinkSinkPrometheusParameters,
      sinkRabbitMQParameters: CreateEventStreamingRequestSinkSinkRabbitMQParameters,
      sinkRocketMQParameters: CreateEventStreamingRequestSinkSinkRocketMQParameters,
      sinkSLSParameters: CreateEventStreamingRequestSinkSinkSLSParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSourceSourceApacheKafkaParameters extends $tea.Model {
  bootstraps?: string;
  consumerGroup?: string;
  networkType?: string;
  offsetReset?: string;
  saslMechanism?: string;
  saslPassword?: string;
  saslUser?: string;
  securityGroupId?: string;
  securityProtocol?: string;
  topic?: string;
  vSwitchIds?: string;
  valueDataType?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bootstraps: 'Bootstraps',
      consumerGroup: 'ConsumerGroup',
      networkType: 'NetworkType',
      offsetReset: 'OffsetReset',
      saslMechanism: 'SaslMechanism',
      saslPassword: 'SaslPassword',
      saslUser: 'SaslUser',
      securityGroupId: 'SecurityGroupId',
      securityProtocol: 'SecurityProtocol',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      valueDataType: 'ValueDataType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstraps: 'string',
      consumerGroup: 'string',
      networkType: 'string',
      offsetReset: 'string',
      saslMechanism: 'string',
      saslPassword: 'string',
      saslUser: 'string',
      securityGroupId: 'string',
      securityProtocol: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      valueDataType: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParametersConnectorParameters extends $tea.Model {
  config?: { [key: string]: any };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters extends $tea.Model {
  connectorPackageUrl?: string;
  connectorParameters?: CreateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParametersConnectorParameters;
  workerParameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      connectorPackageUrl: 'ConnectorPackageUrl',
      connectorParameters: 'ConnectorParameters',
      workerParameters: 'WorkerParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorPackageUrl: 'string',
      connectorParameters: CreateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParametersConnectorParameters,
      workerParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSourceSourceCustomizedKafkaParameters extends $tea.Model {
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

export class CreateEventStreamingRequestSourceSourceDTSParameters extends $tea.Model {
  brokerUrl?: string;
  initCheckPoint?: number;
  password?: string;
  sid?: string;
  taskId?: string;
  topic?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      brokerUrl: 'BrokerUrl',
      initCheckPoint: 'InitCheckPoint',
      password: 'Password',
      sid: 'Sid',
      taskId: 'TaskId',
      topic: 'Topic',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerUrl: 'string',
      initCheckPoint: 'number',
      password: 'string',
      sid: 'string',
      taskId: 'string',
      topic: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSourceSourceKafkaParameters extends $tea.Model {
  consumerGroup?: string;
  instanceId?: string;
  network?: string;
  offsetReset?: string;
  regionId?: string;
  securityGroupId?: string;
  topic?: string;
  vSwitchIds?: string;
  valueDataType?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      network: 'Network',
      offsetReset: 'OffsetReset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      valueDataType: 'ValueDataType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      network: 'string',
      offsetReset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      valueDataType: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSourceSourceMNSParameters extends $tea.Model {
  isBase64Decode?: boolean;
  queueName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      isBase64Decode: 'IsBase64Decode',
      queueName: 'QueueName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBase64Decode: 'boolean',
      queueName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSourceSourceMQTTParameters extends $tea.Model {
  bodyDataType?: string;
  instanceId?: string;
  regionId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyDataType: 'BodyDataType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataType: 'string',
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSourceSourcePrometheusParameters extends $tea.Model {
  clusterId?: string;
  dataType?: string;
  labels?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataType: 'DataType',
      labels: 'Labels',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataType: 'string',
      labels: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSourceSourceRabbitMQParameters extends $tea.Model {
  instanceId?: string;
  queueName?: string;
  regionId?: string;
  virtualHostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queueName: 'QueueName',
      regionId: 'RegionId',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queueName: 'string',
      regionId: 'string',
      virtualHostName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSourceSourceRocketMQParameters extends $tea.Model {
  authType?: string;
  bodyDataType?: string;
  filterSql?: string;
  filterType?: string;
  groupID?: string;
  instanceEndpoint?: string;
  instanceId?: string;
  instanceNetwork?: string;
  instancePassword?: string;
  instanceSecurityGroupId?: string;
  instanceType?: string;
  instanceUsername?: string;
  instanceVSwitchIds?: string;
  instanceVpcId?: string;
  network?: string;
  offset?: string;
  regionId?: string;
  securityGroupId?: string;
  tag?: string;
  timestamp?: number;
  topic?: string;
  vSwitchIds?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      bodyDataType: 'BodyDataType',
      filterSql: 'FilterSql',
      filterType: 'FilterType',
      groupID: 'GroupID',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instanceNetwork: 'InstanceNetwork',
      instancePassword: 'InstancePassword',
      instanceSecurityGroupId: 'InstanceSecurityGroupId',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      instanceVSwitchIds: 'InstanceVSwitchIds',
      instanceVpcId: 'InstanceVpcId',
      network: 'Network',
      offset: 'Offset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      timestamp: 'Timestamp',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      bodyDataType: 'string',
      filterSql: 'string',
      filterType: 'string',
      groupID: 'string',
      instanceEndpoint: 'string',
      instanceId: 'string',
      instanceNetwork: 'string',
      instancePassword: 'string',
      instanceSecurityGroupId: 'string',
      instanceType: 'string',
      instanceUsername: 'string',
      instanceVSwitchIds: 'string',
      instanceVpcId: 'string',
      network: 'string',
      offset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      tag: 'string',
      timestamp: 'number',
      topic: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSourceSourceSLSParameters extends $tea.Model {
  consumePosition?: string;
  logStore?: string;
  project?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      consumePosition: 'ConsumePosition',
      logStore: 'LogStore',
      project: 'Project',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumePosition: 'string',
      logStore: 'string',
      project: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestSource extends $tea.Model {
  sourceApacheKafkaParameters?: CreateEventStreamingRequestSourceSourceApacheKafkaParameters;
  sourceCustomizedKafkaConnectorParameters?: CreateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters;
  sourceCustomizedKafkaParameters?: CreateEventStreamingRequestSourceSourceCustomizedKafkaParameters;
  sourceDTSParameters?: CreateEventStreamingRequestSourceSourceDTSParameters;
  sourceKafkaParameters?: CreateEventStreamingRequestSourceSourceKafkaParameters;
  sourceMNSParameters?: CreateEventStreamingRequestSourceSourceMNSParameters;
  sourceMQTTParameters?: CreateEventStreamingRequestSourceSourceMQTTParameters;
  sourcePrometheusParameters?: CreateEventStreamingRequestSourceSourcePrometheusParameters;
  sourceRabbitMQParameters?: CreateEventStreamingRequestSourceSourceRabbitMQParameters;
  sourceRocketMQParameters?: CreateEventStreamingRequestSourceSourceRocketMQParameters;
  sourceSLSParameters?: CreateEventStreamingRequestSourceSourceSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sourceApacheKafkaParameters: 'SourceApacheKafkaParameters',
      sourceCustomizedKafkaConnectorParameters: 'SourceCustomizedKafkaConnectorParameters',
      sourceCustomizedKafkaParameters: 'SourceCustomizedKafkaParameters',
      sourceDTSParameters: 'SourceDTSParameters',
      sourceKafkaParameters: 'SourceKafkaParameters',
      sourceMNSParameters: 'SourceMNSParameters',
      sourceMQTTParameters: 'SourceMQTTParameters',
      sourcePrometheusParameters: 'SourcePrometheusParameters',
      sourceRabbitMQParameters: 'SourceRabbitMQParameters',
      sourceRocketMQParameters: 'SourceRocketMQParameters',
      sourceSLSParameters: 'SourceSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceApacheKafkaParameters: CreateEventStreamingRequestSourceSourceApacheKafkaParameters,
      sourceCustomizedKafkaConnectorParameters: CreateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters,
      sourceCustomizedKafkaParameters: CreateEventStreamingRequestSourceSourceCustomizedKafkaParameters,
      sourceDTSParameters: CreateEventStreamingRequestSourceSourceDTSParameters,
      sourceKafkaParameters: CreateEventStreamingRequestSourceSourceKafkaParameters,
      sourceMNSParameters: CreateEventStreamingRequestSourceSourceMNSParameters,
      sourceMQTTParameters: CreateEventStreamingRequestSourceSourceMQTTParameters,
      sourcePrometheusParameters: CreateEventStreamingRequestSourceSourcePrometheusParameters,
      sourceRabbitMQParameters: CreateEventStreamingRequestSourceSourceRabbitMQParameters,
      sourceRocketMQParameters: CreateEventStreamingRequestSourceSourceRocketMQParameters,
      sourceSLSParameters: CreateEventStreamingRequestSourceSourceSLSParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingRequestTransforms extends $tea.Model {
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventStreamingResponseBodyData extends $tea.Model {
  eventStreamingARN?: string;
  static names(): { [key: string]: string } {
    return {
      eventStreamingARN: 'EventStreamingARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventStreamingARN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestEventTargetsDeadLetterQueue extends $tea.Model {
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestEventTargetsParamList extends $tea.Model {
  form?: string;
  resourceKey?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      resourceKey: 'ResourceKey',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      resourceKey: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleRequestEventTargets extends $tea.Model {
  deadLetterQueue?: CreateRuleRequestEventTargetsDeadLetterQueue;
  endpoint?: string;
  errorsTolerance?: string;
  id?: string;
  paramList?: CreateRuleRequestEventTargetsParamList[];
  pushRetryStrategy?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      deadLetterQueue: 'DeadLetterQueue',
      endpoint: 'Endpoint',
      errorsTolerance: 'ErrorsTolerance',
      id: 'Id',
      paramList: 'ParamList',
      pushRetryStrategy: 'PushRetryStrategy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadLetterQueue: CreateRuleRequestEventTargetsDeadLetterQueue,
      endpoint: 'string',
      errorsTolerance: 'string',
      id: 'string',
      paramList: { 'type': 'array', 'itemType': CreateRuleRequestEventTargetsParamList },
      pushRetryStrategy: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRuleResponseBodyData extends $tea.Model {
  ruleARN?: string;
  static names(): { [key: string]: string } {
    return {
      ruleARN: 'RuleARN',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleARN: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTargetsResponseBodyDataErrorEntries extends $tea.Model {
  entryId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      entryId: 'EntryId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTargetsResponseBodyData extends $tea.Model {
  errorEntries?: DeleteTargetsResponseBodyDataErrorEntries[];
  errorEntriesCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorEntries: 'ErrorEntries',
      errorEntriesCount: 'ErrorEntriesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorEntries: { 'type': 'array', 'itemType': DeleteTargetsResponseBodyDataErrorEntries },
      errorEntriesCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterCheckEnabledOnDefaultBusResponseBodyData extends $tea.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsRequestBodyParametersCalculations extends $tea.Model {
  column?: string;
  op?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      op: 'Op',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      op: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsRequestBodyParametersFilters extends $tea.Model {
  column?: string;
  op?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      op: 'Op',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      op: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsRequestBodyParametersOrders extends $tea.Model {
  column?: string;
  desc?: boolean;
  op?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      desc: 'Desc',
      op: 'Op',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      desc: 'boolean',
      op: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsRequestBodyParameters extends $tea.Model {
  breakdowns?: string[];
  calculations?: EventCenterQueryEventsRequestBodyParametersCalculations[];
  endTime?: number;
  filterCombination?: string;
  filters?: EventCenterQueryEventsRequestBodyParametersFilters[];
  granularity?: number;
  limit?: number;
  offset?: number;
  orders?: EventCenterQueryEventsRequestBodyParametersOrders[];
  startTime?: number;
  timeRange?: number;
  static names(): { [key: string]: string } {
    return {
      breakdowns: 'Breakdowns',
      calculations: 'Calculations',
      endTime: 'EndTime',
      filterCombination: 'FilterCombination',
      filters: 'Filters',
      granularity: 'Granularity',
      limit: 'Limit',
      offset: 'Offset',
      orders: 'Orders',
      startTime: 'StartTime',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      breakdowns: { 'type': 'array', 'itemType': 'string' },
      calculations: { 'type': 'array', 'itemType': EventCenterQueryEventsRequestBodyParametersCalculations },
      endTime: 'number',
      filterCombination: 'string',
      filters: { 'type': 'array', 'itemType': EventCenterQueryEventsRequestBodyParametersFilters },
      granularity: 'number',
      limit: 'number',
      offset: 'number',
      orders: { 'type': 'array', 'itemType': EventCenterQueryEventsRequestBodyParametersOrders },
      startTime: 'number',
      timeRange: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsRequestBody extends $tea.Model {
  parameters?: EventCenterQueryEventsRequestBodyParameters;
  queryType?: string;
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      queryType: 'QueryType',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: EventCenterQueryEventsRequestBodyParameters,
      queryType: 'string',
      schemaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsResponseBodyDataTable extends $tea.Model {
  rowData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      rowData: 'RowData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsResponseBodyDataTimeSeries extends $tea.Model {
  rowData?: { [key: string]: any };
  time?: string;
  static names(): { [key: string]: string } {
    return {
      rowData: 'RowData',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventCenterQueryEventsResponseBodyData extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  table?: EventCenterQueryEventsResponseBodyDataTable[];
  timeSeries?: EventCenterQueryEventsResponseBodyDataTimeSeries[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      table: 'Table',
      timeSeries: 'TimeSeries',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      table: { 'type': 'array', 'itemType': EventCenterQueryEventsResponseBodyDataTable },
      timeSeries: { 'type': 'array', 'itemType': EventCenterQueryEventsResponseBodyDataTimeSeries },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiDestinationResponseBodyDataHttpApiParameters extends $tea.Model {
  endpoint?: string;
  method?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      method: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiDestinationResponseBodyData extends $tea.Model {
  apiDestinationName?: string;
  connectionName?: string;
  description?: string;
  gmtCreate?: number;
  httpApiParameters?: GetApiDestinationResponseBodyDataHttpApiParameters;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
      connectionName: 'ConnectionName',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      httpApiParameters: 'HttpApiParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
      connectionName: 'string',
      description: 'string',
      gmtCreate: 'number',
      httpApiParameters: GetApiDestinationResponseBodyDataHttpApiParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters extends $tea.Model {
  apiKeyName?: string;
  apiKeyValue?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'ApiKeyName',
      apiKeyValue: 'ApiKeyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      apiKeyValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponseBodyDataConnectionsAuthParametersBasicAuthParameters extends $tea.Model {
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters extends $tea.Model {
  clientID?: string;
  clientSecret?: string;
  static names(): { [key: string]: string } {
    return {
      clientID: 'ClientID',
      clientSecret: 'ClientSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientID: 'string',
      clientSecret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters extends $tea.Model {
  isValueSecret?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters extends $tea.Model {
  isValueSecret?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters extends $tea.Model {
  isValueSecret?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters extends $tea.Model {
  bodyParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[];
  headerParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[];
  queryStringParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[];
  static names(): { [key: string]: string } {
    return {
      bodyParameters: 'BodyParameters',
      headerParameters: 'HeaderParameters',
      queryStringParameters: 'QueryStringParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyParameters: { 'type': 'array', 'itemType': GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters },
      headerParameters: { 'type': 'array', 'itemType': GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters },
      queryStringParameters: { 'type': 'array', 'itemType': GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParameters extends $tea.Model {
  authorizationEndpoint?: string;
  clientParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters;
  httpMethod?: string;
  OAuthHttpParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'AuthorizationEndpoint',
      clientParameters: 'ClientParameters',
      httpMethod: 'HttpMethod',
      OAuthHttpParameters: 'OAuthHttpParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      clientParameters: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters,
      httpMethod: 'string',
      OAuthHttpParameters: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponseBodyDataConnectionsAuthParameters extends $tea.Model {
  apiKeyAuthParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters;
  authorizationType?: string;
  basicAuthParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersBasicAuthParameters;
  OAuthParameters?: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParameters;
  static names(): { [key: string]: string } {
    return {
      apiKeyAuthParameters: 'ApiKeyAuthParameters',
      authorizationType: 'AuthorizationType',
      basicAuthParameters: 'BasicAuthParameters',
      OAuthParameters: 'OAuthParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyAuthParameters: GetConnectionResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters,
      authorizationType: 'string',
      basicAuthParameters: GetConnectionResponseBodyDataConnectionsAuthParametersBasicAuthParameters,
      OAuthParameters: GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponseBodyDataConnectionsNetworkParameters extends $tea.Model {
  networkType?: string;
  securityGroupId?: string;
  vpcId?: string;
  vswitcheId?: string;
  static names(): { [key: string]: string } {
    return {
      networkType: 'NetworkType',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vswitcheId: 'VswitcheId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vswitcheId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponseBodyDataConnections extends $tea.Model {
  authParameters?: GetConnectionResponseBodyDataConnectionsAuthParameters;
  connectionName?: string;
  description?: string;
  gmtCreate?: number;
  id?: number;
  networkParameters?: GetConnectionResponseBodyDataConnectionsNetworkParameters;
  static names(): { [key: string]: string } {
    return {
      authParameters: 'AuthParameters',
      connectionName: 'ConnectionName',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      networkParameters: 'NetworkParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authParameters: GetConnectionResponseBodyDataConnectionsAuthParameters,
      connectionName: 'string',
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      networkParameters: GetConnectionResponseBodyDataConnectionsNetworkParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionResponseBodyData extends $tea.Model {
  connections?: GetConnectionResponseBodyDataConnections[];
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': GetConnectionResponseBodyDataConnections },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventBusResponseBodyData extends $tea.Model {
  createTimestamp?: number;
  description?: string;
  eventBusARN?: string;
  eventBusName?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      eventBusARN: 'EventBusARN',
      eventBusName: 'EventBusName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      description: 'string',
      eventBusARN: 'string',
      eventBusName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataDetailedStatus extends $tea.Model {
  delayTime?: number;
  diffOffset?: number;
  extensions?: { [key: string]: any };
  TPS?: number;
  static names(): { [key: string]: string } {
    return {
      delayTime: 'DelayTime',
      diffOffset: 'DiffOffset',
      extensions: 'Extensions',
      TPS: 'TPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayTime: 'number',
      diffOffset: 'number',
      extensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      TPS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataRunOptionsBatchWindow extends $tea.Model {
  countBasedWindow?: number;
  timeBasedWindow?: number;
  static names(): { [key: string]: string } {
    return {
      countBasedWindow: 'CountBasedWindow',
      timeBasedWindow: 'TimeBasedWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countBasedWindow: 'number',
      timeBasedWindow: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataRunOptionsDeadLetterQueue extends $tea.Model {
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataRunOptionsLogDeliveryKafkaLogParameters extends $tea.Model {
  endpoint?: string;
  instanceId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      instanceId: 'InstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      instanceId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataRunOptionsLogDeliverySLSLogParameters extends $tea.Model {
  logstoreName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logstoreName: 'LogstoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstoreName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataRunOptionsLogDelivery extends $tea.Model {
  kafkaLogParameters?: GetEventStreamingResponseBodyDataRunOptionsLogDeliveryKafkaLogParameters[];
  SLSLogParameters?: GetEventStreamingResponseBodyDataRunOptionsLogDeliverySLSLogParameters[];
  static names(): { [key: string]: string } {
    return {
      kafkaLogParameters: 'KafkaLogParameters',
      SLSLogParameters: 'SLSLogParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kafkaLogParameters: { 'type': 'array', 'itemType': GetEventStreamingResponseBodyDataRunOptionsLogDeliveryKafkaLogParameters },
      SLSLogParameters: { 'type': 'array', 'itemType': GetEventStreamingResponseBodyDataRunOptionsLogDeliverySLSLogParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataRunOptionsNetwork extends $tea.Model {
  securityGroupId?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataRunOptionsResourceSpecResources extends $tea.Model {
  type?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataRunOptionsResourceSpec extends $tea.Model {
  resources?: GetEventStreamingResponseBodyDataRunOptionsResourceSpecResources[];
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: { 'type': 'array', 'itemType': GetEventStreamingResponseBodyDataRunOptionsResourceSpecResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataRunOptionsRetryStrategy extends $tea.Model {
  maximumEventAgeInSeconds?: number;
  maximumRetryAttempts?: number;
  pushRetryStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      maximumEventAgeInSeconds: 'MaximumEventAgeInSeconds',
      maximumRetryAttempts: 'MaximumRetryAttempts',
      pushRetryStrategy: 'PushRetryStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumEventAgeInSeconds: 'number',
      maximumRetryAttempts: 'number',
      pushRetryStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataRunOptionsScaledObjectTriggersMetadata extends $tea.Model {
  type?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataRunOptionsScaledObjectTriggers extends $tea.Model {
  metadata?: GetEventStreamingResponseBodyDataRunOptionsScaledObjectTriggersMetadata;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: GetEventStreamingResponseBodyDataRunOptionsScaledObjectTriggersMetadata,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataRunOptionsScaledObject extends $tea.Model {
  maxReplicaCount?: number;
  minReplicaCount?: number;
  triggers?: GetEventStreamingResponseBodyDataRunOptionsScaledObjectTriggers[];
  static names(): { [key: string]: string } {
    return {
      maxReplicaCount: 'MaxReplicaCount',
      minReplicaCount: 'MinReplicaCount',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicaCount: 'number',
      minReplicaCount: 'number',
      triggers: { 'type': 'array', 'itemType': GetEventStreamingResponseBodyDataRunOptionsScaledObjectTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataRunOptions extends $tea.Model {
  batchWindow?: GetEventStreamingResponseBodyDataRunOptionsBatchWindow;
  deadLetterQueue?: GetEventStreamingResponseBodyDataRunOptionsDeadLetterQueue;
  errorsTolerance?: string;
  logDelivery?: GetEventStreamingResponseBodyDataRunOptionsLogDelivery;
  maximumTasks?: number;
  network?: GetEventStreamingResponseBodyDataRunOptionsNetwork;
  resourceSpec?: GetEventStreamingResponseBodyDataRunOptionsResourceSpec;
  retryStrategy?: GetEventStreamingResponseBodyDataRunOptionsRetryStrategy;
  roleName?: string;
  scaledObject?: GetEventStreamingResponseBodyDataRunOptionsScaledObject;
  static names(): { [key: string]: string } {
    return {
      batchWindow: 'BatchWindow',
      deadLetterQueue: 'DeadLetterQueue',
      errorsTolerance: 'ErrorsTolerance',
      logDelivery: 'LogDelivery',
      maximumTasks: 'MaximumTasks',
      network: 'Network',
      resourceSpec: 'ResourceSpec',
      retryStrategy: 'RetryStrategy',
      roleName: 'RoleName',
      scaledObject: 'ScaledObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchWindow: GetEventStreamingResponseBodyDataRunOptionsBatchWindow,
      deadLetterQueue: GetEventStreamingResponseBodyDataRunOptionsDeadLetterQueue,
      errorsTolerance: 'string',
      logDelivery: GetEventStreamingResponseBodyDataRunOptionsLogDelivery,
      maximumTasks: 'number',
      network: GetEventStreamingResponseBodyDataRunOptionsNetwork,
      resourceSpec: GetEventStreamingResponseBodyDataRunOptionsResourceSpec,
      retryStrategy: GetEventStreamingResponseBodyDataRunOptionsRetryStrategy,
      roleName: 'string',
      scaledObject: GetEventStreamingResponseBodyDataRunOptionsScaledObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParametersConnectorParameters extends $tea.Model {
  config?: { [key: string]: any };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParameters extends $tea.Model {
  connectorPackageUrl?: string;
  connectorParameters?: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParametersConnectorParameters;
  workerParameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      connectorPackageUrl: 'ConnectorPackageUrl',
      connectorParameters: 'ConnectorParameters',
      workerParameters: 'WorkerParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorPackageUrl: 'string',
      connectorParameters: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParametersConnectorParameters,
      workerParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaParameters extends $tea.Model {
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

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParameters extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPartition extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPrimaryKeyId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersVector extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkDashVectorParameters extends $tea.Model {
  apiKey?: string;
  collection?: string;
  dashVectorSchemaParameters?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParameters;
  instanceId?: string;
  network?: string;
  operation?: string;
  partition?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPartition;
  primaryKeyId?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPrimaryKeyId;
  vector?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersVector;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      collection: 'Collection',
      dashVectorSchemaParameters: 'DashVectorSchemaParameters',
      instanceId: 'InstanceId',
      network: 'Network',
      operation: 'Operation',
      partition: 'Partition',
      primaryKeyId: 'PrimaryKeyId',
      vector: 'Vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      collection: 'string',
      dashVectorSchemaParameters: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersDashVectorSchemaParameters,
      instanceId: 'string',
      network: 'string',
      operation: 'string',
      partition: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPartition,
      primaryKeyId: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersPrimaryKeyId,
      vector: GetEventStreamingResponseBodyDataSinkSinkDashVectorParametersVector,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersProject extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersRoleName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicSchema extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkDataHubParameters extends $tea.Model {
  body?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersBody;
  project?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersProject;
  roleName?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersRoleName;
  topic?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopic;
  topicSchema?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicSchema;
  topicType?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicType;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      project: 'Project',
      roleName: 'RoleName',
      topic: 'Topic',
      topicSchema: 'TopicSchema',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersBody,
      project: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersProject,
      roleName: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersRoleName,
      topic: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopic,
      topicSchema: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicSchema,
      topicType: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicType,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersConcurrency extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersFunctionName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersInvocationType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersQualifier extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkFcParametersServiceName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkFcParameters extends $tea.Model {
  body?: GetEventStreamingResponseBodyDataSinkSinkFcParametersBody;
  concurrency?: GetEventStreamingResponseBodyDataSinkSinkFcParametersConcurrency;
  functionName?: GetEventStreamingResponseBodyDataSinkSinkFcParametersFunctionName;
  invocationType?: GetEventStreamingResponseBodyDataSinkSinkFcParametersInvocationType;
  qualifier?: GetEventStreamingResponseBodyDataSinkSinkFcParametersQualifier;
  serviceName?: GetEventStreamingResponseBodyDataSinkSinkFcParametersServiceName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      concurrency: 'Concurrency',
      functionName: 'FunctionName',
      invocationType: 'InvocationType',
      qualifier: 'Qualifier',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetEventStreamingResponseBodyDataSinkSinkFcParametersBody,
      concurrency: GetEventStreamingResponseBodyDataSinkSinkFcParametersConcurrency,
      functionName: GetEventStreamingResponseBodyDataSinkSinkFcParametersFunctionName,
      invocationType: GetEventStreamingResponseBodyDataSinkSinkFcParametersInvocationType,
      qualifier: GetEventStreamingResponseBodyDataSinkSinkFcParametersQualifier,
      serviceName: GetEventStreamingResponseBodyDataSinkSinkFcParametersServiceName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkFnfParametersExecutionName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkFnfParametersFlowName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkFnfParametersInput extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkFnfParametersRoleName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkFnfParameters extends $tea.Model {
  executionName?: GetEventStreamingResponseBodyDataSinkSinkFnfParametersExecutionName;
  flowName?: GetEventStreamingResponseBodyDataSinkSinkFnfParametersFlowName;
  input?: GetEventStreamingResponseBodyDataSinkSinkFnfParametersInput;
  roleName?: GetEventStreamingResponseBodyDataSinkSinkFnfParametersRoleName;
  static names(): { [key: string]: string } {
    return {
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      input: 'Input',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionName: GetEventStreamingResponseBodyDataSinkSinkFnfParametersExecutionName,
      flowName: GetEventStreamingResponseBodyDataSinkSinkFnfParametersFlowName,
      input: GetEventStreamingResponseBodyDataSinkSinkFnfParametersInput,
      roleName: GetEventStreamingResponseBodyDataSinkSinkFnfParametersRoleName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersAcks extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersInstanceId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersKey extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParametersValue extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkKafkaParameters extends $tea.Model {
  acks?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersAcks;
  instanceId?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersInstanceId;
  key?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersKey;
  topic?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersTopic;
  value?: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersValue;
  static names(): { [key: string]: string } {
    return {
      acks: 'Acks',
      instanceId: 'InstanceId',
      key: 'Key',
      topic: 'Topic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acks: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersAcks,
      instanceId: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersInstanceId,
      key: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersKey,
      topic: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersTopic,
      value: GetEventStreamingResponseBodyDataSinkSinkKafkaParametersValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkMNSParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkMNSParametersIsBase64Encode extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkMNSParametersQueueName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkMNSParameters extends $tea.Model {
  body?: GetEventStreamingResponseBodyDataSinkSinkMNSParametersBody;
  isBase64Encode?: GetEventStreamingResponseBodyDataSinkSinkMNSParametersIsBase64Encode;
  queueName?: GetEventStreamingResponseBodyDataSinkSinkMNSParametersQueueName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      isBase64Encode: 'IsBase64Encode',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetEventStreamingResponseBodyDataSinkSinkMNSParametersBody,
      isBase64Encode: GetEventStreamingResponseBodyDataSinkSinkMNSParametersIsBase64Encode,
      queueName: GetEventStreamingResponseBodyDataSinkSinkMNSParametersQueueName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersExchange extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersInstanceId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersMessageId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersProperties extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersQueueName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersRoutingKey extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersTargetType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersVirtualHostName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRabbitMQParameters extends $tea.Model {
  body?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersBody;
  exchange?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersExchange;
  instanceId?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersInstanceId;
  messageId?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersMessageId;
  properties?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersProperties;
  queueName?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersQueueName;
  routingKey?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersRoutingKey;
  targetType?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersTargetType;
  virtualHostName?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersVirtualHostName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      exchange: 'Exchange',
      instanceId: 'InstanceId',
      messageId: 'MessageId',
      properties: 'Properties',
      queueName: 'QueueName',
      routingKey: 'RoutingKey',
      targetType: 'TargetType',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersBody,
      exchange: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersExchange,
      instanceId: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersInstanceId,
      messageId: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersMessageId,
      properties: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersProperties,
      queueName: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersQueueName,
      routingKey: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersRoutingKey,
      targetType: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersTargetType,
      virtualHostName: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParametersVirtualHostName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceEndpoint extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstancePassword extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceUsername extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersKeys extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersNetwork extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersProperties extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersSecurityGroupId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTags extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVSwitchIds extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVpcId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkRocketMQParameters extends $tea.Model {
  body?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersBody;
  instanceEndpoint?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceEndpoint;
  instanceId?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceId;
  instancePassword?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstancePassword;
  instanceType?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceType;
  instanceUsername?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceUsername;
  keys?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersKeys;
  network?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersNetwork;
  properties?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersProperties;
  securityGroupId?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersSecurityGroupId;
  tags?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTags;
  topic?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTopic;
  vSwitchIds?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVSwitchIds;
  vpcId?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instancePassword: 'InstancePassword',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      keys: 'Keys',
      network: 'Network',
      properties: 'Properties',
      securityGroupId: 'SecurityGroupId',
      tags: 'Tags',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersBody,
      instanceEndpoint: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceEndpoint,
      instanceId: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceId,
      instancePassword: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstancePassword,
      instanceType: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceType,
      instanceUsername: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersInstanceUsername,
      keys: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersKeys,
      network: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersNetwork,
      properties: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersProperties,
      securityGroupId: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersSecurityGroupId,
      tags: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTags,
      topic: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersTopic,
      vSwitchIds: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVSwitchIds,
      vpcId: GetEventStreamingResponseBodyDataSinkSinkRocketMQParametersVpcId,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentSchema extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersLogStore extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersProject extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersRoleName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkSLSParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSinkSinkSLSParameters extends $tea.Model {
  body?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersBody;
  contentSchema?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentSchema;
  contentType?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentType;
  logStore?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersLogStore;
  project?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersProject;
  roleName?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersRoleName;
  topic?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersTopic;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      contentSchema: 'ContentSchema',
      contentType: 'ContentType',
      logStore: 'LogStore',
      project: 'Project',
      roleName: 'RoleName',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetEventStreamingResponseBodyDataSinkSinkSLSParametersBody,
      contentSchema: GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentSchema,
      contentType: GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentType,
      logStore: GetEventStreamingResponseBodyDataSinkSinkSLSParametersLogStore,
      project: GetEventStreamingResponseBodyDataSinkSinkSLSParametersProject,
      roleName: GetEventStreamingResponseBodyDataSinkSinkSLSParametersRoleName,
      topic: GetEventStreamingResponseBodyDataSinkSinkSLSParametersTopic,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSink extends $tea.Model {
  sinkCustomizedKafkaConnectorParameters?: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParameters;
  sinkCustomizedKafkaParameters?: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaParameters;
  sinkDashVectorParameters?: GetEventStreamingResponseBodyDataSinkSinkDashVectorParameters;
  sinkDataHubParameters?: GetEventStreamingResponseBodyDataSinkSinkDataHubParameters;
  sinkFcParameters?: GetEventStreamingResponseBodyDataSinkSinkFcParameters;
  sinkFnfParameters?: GetEventStreamingResponseBodyDataSinkSinkFnfParameters;
  sinkKafkaParameters?: GetEventStreamingResponseBodyDataSinkSinkKafkaParameters;
  sinkMNSParameters?: GetEventStreamingResponseBodyDataSinkSinkMNSParameters;
  sinkRabbitMQParameters?: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParameters;
  sinkRocketMQParameters?: GetEventStreamingResponseBodyDataSinkSinkRocketMQParameters;
  sinkSLSParameters?: GetEventStreamingResponseBodyDataSinkSinkSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sinkCustomizedKafkaConnectorParameters: 'SinkCustomizedKafkaConnectorParameters',
      sinkCustomizedKafkaParameters: 'SinkCustomizedKafkaParameters',
      sinkDashVectorParameters: 'SinkDashVectorParameters',
      sinkDataHubParameters: 'SinkDataHubParameters',
      sinkFcParameters: 'SinkFcParameters',
      sinkFnfParameters: 'SinkFnfParameters',
      sinkKafkaParameters: 'SinkKafkaParameters',
      sinkMNSParameters: 'SinkMNSParameters',
      sinkRabbitMQParameters: 'SinkRabbitMQParameters',
      sinkRocketMQParameters: 'SinkRocketMQParameters',
      sinkSLSParameters: 'SinkSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sinkCustomizedKafkaConnectorParameters: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaConnectorParameters,
      sinkCustomizedKafkaParameters: GetEventStreamingResponseBodyDataSinkSinkCustomizedKafkaParameters,
      sinkDashVectorParameters: GetEventStreamingResponseBodyDataSinkSinkDashVectorParameters,
      sinkDataHubParameters: GetEventStreamingResponseBodyDataSinkSinkDataHubParameters,
      sinkFcParameters: GetEventStreamingResponseBodyDataSinkSinkFcParameters,
      sinkFnfParameters: GetEventStreamingResponseBodyDataSinkSinkFnfParameters,
      sinkKafkaParameters: GetEventStreamingResponseBodyDataSinkSinkKafkaParameters,
      sinkMNSParameters: GetEventStreamingResponseBodyDataSinkSinkMNSParameters,
      sinkRabbitMQParameters: GetEventStreamingResponseBodyDataSinkSinkRabbitMQParameters,
      sinkRocketMQParameters: GetEventStreamingResponseBodyDataSinkSinkRocketMQParameters,
      sinkSLSParameters: GetEventStreamingResponseBodyDataSinkSinkSLSParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSourceSourceApacheKafkaParameters extends $tea.Model {
  bootstraps?: string;
  consumerGroup?: string;
  networkType?: string;
  offsetReset?: string;
  saslMechanism?: string;
  saslPassword?: string;
  saslUser?: string;
  securityGroupId?: string;
  securityProtocol?: string;
  topic?: string;
  vSwitchIds?: string;
  valueDataType?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bootstraps: 'Bootstraps',
      consumerGroup: 'ConsumerGroup',
      networkType: 'NetworkType',
      offsetReset: 'OffsetReset',
      saslMechanism: 'SaslMechanism',
      saslPassword: 'SaslPassword',
      saslUser: 'SaslUser',
      securityGroupId: 'SecurityGroupId',
      securityProtocol: 'SecurityProtocol',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      valueDataType: 'ValueDataType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstraps: 'string',
      consumerGroup: 'string',
      networkType: 'string',
      offsetReset: 'string',
      saslMechanism: 'string',
      saslPassword: 'string',
      saslUser: 'string',
      securityGroupId: 'string',
      securityProtocol: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      valueDataType: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParametersConnectorParameters extends $tea.Model {
  config?: { [key: string]: any };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParameters extends $tea.Model {
  connectorPackageUrl?: string;
  connectorParameters?: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParametersConnectorParameters;
  workerParameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      connectorPackageUrl: 'ConnectorPackageUrl',
      connectorParameters: 'ConnectorParameters',
      workerParameters: 'WorkerParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorPackageUrl: 'string',
      connectorParameters: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParametersConnectorParameters,
      workerParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaParameters extends $tea.Model {
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

export class GetEventStreamingResponseBodyDataSourceSourceDTSParameters extends $tea.Model {
  brokerUrl?: string;
  initCheckPoint?: string;
  password?: string;
  sid?: string;
  taskId?: string;
  topic?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      brokerUrl: 'BrokerUrl',
      initCheckPoint: 'InitCheckPoint',
      password: 'Password',
      sid: 'Sid',
      taskId: 'TaskId',
      topic: 'Topic',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerUrl: 'string',
      initCheckPoint: 'string',
      password: 'string',
      sid: 'string',
      taskId: 'string',
      topic: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSourceSourceKafkaParameters extends $tea.Model {
  consumerGroup?: string;
  instanceId?: string;
  network?: string;
  offsetReset?: string;
  regionId?: string;
  securityGroupId?: string;
  topic?: string;
  vSwitchIds?: string;
  valueDataType?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      network: 'Network',
      offsetReset: 'OffsetReset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      valueDataType: 'ValueDataType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      network: 'string',
      offsetReset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      valueDataType: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSourceSourceMNSParameters extends $tea.Model {
  isBase64Decode?: boolean;
  queueName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      isBase64Decode: 'IsBase64Decode',
      queueName: 'QueueName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBase64Decode: 'boolean',
      queueName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSourceSourceMQTTParameters extends $tea.Model {
  bodyDataType?: string;
  instanceId?: string;
  regionId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyDataType: 'BodyDataType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataType: 'string',
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSourceSourcePrometheusParameters extends $tea.Model {
  clusterId?: string;
  dataType?: string;
  labels?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataType: 'DataType',
      labels: 'Labels',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataType: 'string',
      labels: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSourceSourceRabbitMQParameters extends $tea.Model {
  instanceId?: string;
  queueName?: string;
  regionId?: string;
  virtualHostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queueName: 'QueueName',
      regionId: 'RegionId',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queueName: 'string',
      regionId: 'string',
      virtualHostName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSourceSourceRocketMQParameters extends $tea.Model {
  authType?: string;
  bodyDataType?: string;
  filterSql?: string;
  filterType?: string;
  groupID?: string;
  instanceEndpoint?: string;
  instanceId?: string;
  instanceNetwork?: string;
  instancePassword?: string;
  instanceSecurityGroupId?: string;
  instanceType?: string;
  instanceUsername?: string;
  instanceVSwitchIds?: string;
  instanceVpcId?: string;
  network?: string;
  offset?: string;
  regionId?: string;
  securityGroupId?: string;
  tag?: string;
  timestamp?: number;
  topic?: string;
  vSwitchIds?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      bodyDataType: 'BodyDataType',
      filterSql: 'FilterSql',
      filterType: 'FilterType',
      groupID: 'GroupID',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instanceNetwork: 'InstanceNetwork',
      instancePassword: 'InstancePassword',
      instanceSecurityGroupId: 'InstanceSecurityGroupId',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      instanceVSwitchIds: 'InstanceVSwitchIds',
      instanceVpcId: 'InstanceVpcId',
      network: 'Network',
      offset: 'Offset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      timestamp: 'Timestamp',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      bodyDataType: 'string',
      filterSql: 'string',
      filterType: 'string',
      groupID: 'string',
      instanceEndpoint: 'string',
      instanceId: 'string',
      instanceNetwork: 'string',
      instancePassword: 'string',
      instanceSecurityGroupId: 'string',
      instanceType: 'string',
      instanceUsername: 'string',
      instanceVSwitchIds: 'string',
      instanceVpcId: 'string',
      network: 'string',
      offset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      tag: 'string',
      timestamp: 'number',
      topic: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSourceSourceSLSParameters extends $tea.Model {
  consumePosition?: string;
  consumerGroup?: string;
  logStore?: string;
  project?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      consumePosition: 'ConsumePosition',
      consumerGroup: 'ConsumerGroup',
      logStore: 'LogStore',
      project: 'Project',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumePosition: 'string',
      consumerGroup: 'string',
      logStore: 'string',
      project: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataSource extends $tea.Model {
  sourceApacheKafkaParameters?: GetEventStreamingResponseBodyDataSourceSourceApacheKafkaParameters;
  sourceCustomizedKafkaConnectorParameters?: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParameters;
  sourceCustomizedKafkaParameters?: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaParameters;
  sourceDTSParameters?: GetEventStreamingResponseBodyDataSourceSourceDTSParameters;
  sourceKafkaParameters?: GetEventStreamingResponseBodyDataSourceSourceKafkaParameters;
  sourceMNSParameters?: GetEventStreamingResponseBodyDataSourceSourceMNSParameters;
  sourceMQTTParameters?: GetEventStreamingResponseBodyDataSourceSourceMQTTParameters;
  sourcePrometheusParameters?: GetEventStreamingResponseBodyDataSourceSourcePrometheusParameters;
  sourceRabbitMQParameters?: GetEventStreamingResponseBodyDataSourceSourceRabbitMQParameters;
  sourceRocketMQParameters?: GetEventStreamingResponseBodyDataSourceSourceRocketMQParameters;
  sourceSLSParameters?: GetEventStreamingResponseBodyDataSourceSourceSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sourceApacheKafkaParameters: 'SourceApacheKafkaParameters',
      sourceCustomizedKafkaConnectorParameters: 'SourceCustomizedKafkaConnectorParameters',
      sourceCustomizedKafkaParameters: 'SourceCustomizedKafkaParameters',
      sourceDTSParameters: 'SourceDTSParameters',
      sourceKafkaParameters: 'SourceKafkaParameters',
      sourceMNSParameters: 'SourceMNSParameters',
      sourceMQTTParameters: 'SourceMQTTParameters',
      sourcePrometheusParameters: 'SourcePrometheusParameters',
      sourceRabbitMQParameters: 'SourceRabbitMQParameters',
      sourceRocketMQParameters: 'SourceRocketMQParameters',
      sourceSLSParameters: 'SourceSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceApacheKafkaParameters: GetEventStreamingResponseBodyDataSourceSourceApacheKafkaParameters,
      sourceCustomizedKafkaConnectorParameters: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaConnectorParameters,
      sourceCustomizedKafkaParameters: GetEventStreamingResponseBodyDataSourceSourceCustomizedKafkaParameters,
      sourceDTSParameters: GetEventStreamingResponseBodyDataSourceSourceDTSParameters,
      sourceKafkaParameters: GetEventStreamingResponseBodyDataSourceSourceKafkaParameters,
      sourceMNSParameters: GetEventStreamingResponseBodyDataSourceSourceMNSParameters,
      sourceMQTTParameters: GetEventStreamingResponseBodyDataSourceSourceMQTTParameters,
      sourcePrometheusParameters: GetEventStreamingResponseBodyDataSourceSourcePrometheusParameters,
      sourceRabbitMQParameters: GetEventStreamingResponseBodyDataSourceSourceRabbitMQParameters,
      sourceRocketMQParameters: GetEventStreamingResponseBodyDataSourceSourceRocketMQParameters,
      sourceSLSParameters: GetEventStreamingResponseBodyDataSourceSourceSLSParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyDataTransforms extends $tea.Model {
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEventStreamingResponseBodyData extends $tea.Model {
  description?: string;
  detailedStatus?: GetEventStreamingResponseBodyDataDetailedStatus;
  eventStreamingName?: string;
  filterPattern?: string;
  runOptions?: GetEventStreamingResponseBodyDataRunOptions;
  sink?: GetEventStreamingResponseBodyDataSink;
  source?: GetEventStreamingResponseBodyDataSource;
  status?: string;
  transforms?: GetEventStreamingResponseBodyDataTransforms[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      detailedStatus: 'DetailedStatus',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      runOptions: 'RunOptions',
      sink: 'Sink',
      source: 'Source',
      status: 'Status',
      transforms: 'Transforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      detailedStatus: GetEventStreamingResponseBodyDataDetailedStatus,
      eventStreamingName: 'string',
      filterPattern: 'string',
      runOptions: GetEventStreamingResponseBodyDataRunOptions,
      sink: GetEventStreamingResponseBodyDataSink,
      source: GetEventStreamingResponseBodyDataSource,
      status: 'string',
      transforms: { 'type': 'array', 'itemType': GetEventStreamingResponseBodyDataTransforms },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyDataTargetsConcurrentConfig extends $tea.Model {
  concurrency?: number;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyDataTargetsDeadLetterQueue extends $tea.Model {
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyDataTargetsParamList extends $tea.Model {
  form?: string;
  resourceKey?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      resourceKey: 'ResourceKey',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      resourceKey: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyDataTargets extends $tea.Model {
  concurrentConfig?: GetRuleResponseBodyDataTargetsConcurrentConfig;
  deadLetterQueue?: GetRuleResponseBodyDataTargetsDeadLetterQueue;
  detailMap?: { [key: string]: any };
  endpoint?: string;
  errorsTolerance?: string;
  id?: string;
  paramList?: GetRuleResponseBodyDataTargetsParamList[];
  pushRetryStrategy?: string;
  pushSelector?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      concurrentConfig: 'ConcurrentConfig',
      deadLetterQueue: 'DeadLetterQueue',
      detailMap: 'DetailMap',
      endpoint: 'Endpoint',
      errorsTolerance: 'ErrorsTolerance',
      id: 'Id',
      paramList: 'ParamList',
      pushRetryStrategy: 'PushRetryStrategy',
      pushSelector: 'PushSelector',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentConfig: GetRuleResponseBodyDataTargetsConcurrentConfig,
      deadLetterQueue: GetRuleResponseBodyDataTargetsDeadLetterQueue,
      detailMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      endpoint: 'string',
      errorsTolerance: 'string',
      id: 'string',
      paramList: { 'type': 'array', 'itemType': GetRuleResponseBodyDataTargetsParamList },
      pushRetryStrategy: 'string',
      pushSelector: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRuleResponseBodyData extends $tea.Model {
  createdTimestamp?: number;
  description?: string;
  eventBusName?: string;
  filterPattern?: string;
  ruleARN?: string;
  ruleName?: string;
  status?: string;
  targets?: GetRuleResponseBodyDataTargets[];
  static names(): { [key: string]: string } {
    return {
      createdTimestamp: 'CreatedTimestamp',
      description: 'Description',
      eventBusName: 'EventBusName',
      filterPattern: 'FilterPattern',
      ruleARN: 'RuleARN',
      ruleName: 'RuleName',
      status: 'Status',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTimestamp: 'number',
      description: 'string',
      eventBusName: 'string',
      filterPattern: 'string',
      ruleARN: 'string',
      ruleName: 'string',
      status: 'string',
      targets: { 'type': 'array', 'itemType': GetRuleResponseBodyDataTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliyunOfficialEventSourcesResponseBodyDataEventSourceListEventTypes extends $tea.Model {
  eventSourceName?: string;
  groupName?: string;
  name?: string;
  shortName?: string;
  static names(): { [key: string]: string } {
    return {
      eventSourceName: 'EventSourceName',
      groupName: 'GroupName',
      name: 'Name',
      shortName: 'ShortName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSourceName: 'string',
      groupName: 'string',
      name: 'string',
      shortName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliyunOfficialEventSourcesResponseBodyDataEventSourceList extends $tea.Model {
  arn?: string;
  ctime?: number;
  description?: string;
  eventBusName?: string;
  eventTypes?: ListAliyunOfficialEventSourcesResponseBodyDataEventSourceListEventTypes[];
  fullName?: string;
  name?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      ctime: 'Ctime',
      description: 'Description',
      eventBusName: 'EventBusName',
      eventTypes: 'EventTypes',
      fullName: 'FullName',
      name: 'Name',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      ctime: 'number',
      description: 'string',
      eventBusName: 'string',
      eventTypes: { 'type': 'array', 'itemType': ListAliyunOfficialEventSourcesResponseBodyDataEventSourceListEventTypes },
      fullName: 'string',
      name: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliyunOfficialEventSourcesResponseBodyData extends $tea.Model {
  eventSourceList?: ListAliyunOfficialEventSourcesResponseBodyDataEventSourceList[];
  static names(): { [key: string]: string } {
    return {
      eventSourceList: 'EventSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSourceList: { 'type': 'array', 'itemType': ListAliyunOfficialEventSourcesResponseBodyDataEventSourceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDestinationsResponseBodyDataApiDestinationsHttpApiParameters extends $tea.Model {
  endpoint?: string;
  method?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      method: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDestinationsResponseBodyDataApiDestinations extends $tea.Model {
  apiDestinationName?: string;
  connectionName?: string;
  description?: string;
  gmtCreate?: number;
  httpApiParameters?: ListApiDestinationsResponseBodyDataApiDestinationsHttpApiParameters;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
      connectionName: 'ConnectionName',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      httpApiParameters: 'HttpApiParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
      connectionName: 'string',
      description: 'string',
      gmtCreate: 'number',
      httpApiParameters: ListApiDestinationsResponseBodyDataApiDestinationsHttpApiParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApiDestinationsResponseBodyData extends $tea.Model {
  apiDestinations?: ListApiDestinationsResponseBodyDataApiDestinations[];
  maxResults?: number;
  nextToken?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      apiDestinations: 'ApiDestinations',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinations: { 'type': 'array', 'itemType': ListApiDestinationsResponseBodyDataApiDestinations },
      maxResults: 'number',
      nextToken: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters extends $tea.Model {
  apiKeyName?: string;
  apiKeyValue?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'ApiKeyName',
      apiKeyValue: 'ApiKeyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      apiKeyValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyDataConnectionsAuthParametersBasicAuthParameters extends $tea.Model {
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters extends $tea.Model {
  clientID?: string;
  clientSecret?: string;
  static names(): { [key: string]: string } {
    return {
      clientID: 'ClientID',
      clientSecret: 'ClientSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientID: 'string',
      clientSecret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters extends $tea.Model {
  isValueSecret?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters extends $tea.Model {
  isValueSecret?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters extends $tea.Model {
  isValueSecret?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters extends $tea.Model {
  bodyParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[];
  headerParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[];
  queryStringParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[];
  static names(): { [key: string]: string } {
    return {
      bodyParameters: 'BodyParameters',
      headerParameters: 'HeaderParameters',
      queryStringParameters: 'QueryStringParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyParameters: { 'type': 'array', 'itemType': ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersBodyParameters },
      headerParameters: { 'type': 'array', 'itemType': ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters },
      queryStringParameters: { 'type': 'array', 'itemType': ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParameters extends $tea.Model {
  authorizationEndpoint?: string;
  clientParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters;
  httpMethod?: string;
  OAuthHttpParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'AuthorizationEndpoint',
      clientParameters: 'ClientParameters',
      httpMethod: 'HttpMethod',
      OAuthHttpParameters: 'OAuthHttpParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      clientParameters: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersClientParameters,
      httpMethod: 'string',
      OAuthHttpParameters: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyDataConnectionsAuthParameters extends $tea.Model {
  apiKeyAuthParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters;
  authorizationType?: string;
  basicAuthParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersBasicAuthParameters;
  OAuthParameters?: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParameters;
  static names(): { [key: string]: string } {
    return {
      apiKeyAuthParameters: 'ApiKeyAuthParameters',
      authorizationType: 'AuthorizationType',
      basicAuthParameters: 'BasicAuthParameters',
      OAuthParameters: 'OAuthParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyAuthParameters: ListConnectionsResponseBodyDataConnectionsAuthParametersApiKeyAuthParameters,
      authorizationType: 'string',
      basicAuthParameters: ListConnectionsResponseBodyDataConnectionsAuthParametersBasicAuthParameters,
      OAuthParameters: ListConnectionsResponseBodyDataConnectionsAuthParametersOAuthParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyDataConnectionsNetworkParameters extends $tea.Model {
  networkType?: string;
  securityGroupId?: string;
  vpcId?: string;
  vswitcheId?: string;
  static names(): { [key: string]: string } {
    return {
      networkType: 'NetworkType',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vswitcheId: 'VswitcheId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vswitcheId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyDataConnections extends $tea.Model {
  authParameters?: ListConnectionsResponseBodyDataConnectionsAuthParameters;
  connectionName?: string;
  description?: string;
  gmtCreate?: number;
  id?: number;
  networkParameters?: ListConnectionsResponseBodyDataConnectionsNetworkParameters;
  static names(): { [key: string]: string } {
    return {
      authParameters: 'AuthParameters',
      connectionName: 'ConnectionName',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      networkParameters: 'NetworkParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authParameters: ListConnectionsResponseBodyDataConnectionsAuthParameters,
      connectionName: 'string',
      description: 'string',
      gmtCreate: 'number',
      id: 'number',
      networkParameters: ListConnectionsResponseBodyDataConnectionsNetworkParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBodyData extends $tea.Model {
  connections?: ListConnectionsResponseBodyDataConnections[];
  maxResults?: number;
  nextToken?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': ListConnectionsResponseBodyDataConnections },
      maxResults: 'number',
      nextToken: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBusesResponseBodyDataEventBuses extends $tea.Model {
  createTimestamp?: number;
  description?: string;
  eventBusARN?: string;
  eventBusName?: string;
  static names(): { [key: string]: string } {
    return {
      createTimestamp: 'CreateTimestamp',
      description: 'Description',
      eventBusARN: 'EventBusARN',
      eventBusName: 'EventBusName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimestamp: 'number',
      description: 'string',
      eventBusARN: 'string',
      eventBusName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventBusesResponseBodyData extends $tea.Model {
  eventBuses?: ListEventBusesResponseBodyDataEventBuses[];
  nextToken?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      eventBuses: 'EventBuses',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBuses: { 'type': 'array', 'itemType': ListEventBusesResponseBodyDataEventBuses },
      nextToken: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBatchWindow extends $tea.Model {
  countBasedWindow?: number;
  timeBasedWindow?: number;
  static names(): { [key: string]: string } {
    return {
      countBasedWindow: 'CountBasedWindow',
      timeBasedWindow: 'TimeBasedWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countBasedWindow: 'number',
      timeBasedWindow: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsDeadLetterQueue extends $tea.Model {
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsLogDeliveryKafkaLogParameters extends $tea.Model {
  endpoint?: string;
  instanceId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      instanceId: 'InstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      instanceId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsLogDeliverySLSLogParameters extends $tea.Model {
  logstoreName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logstoreName: 'LogstoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstoreName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsLogDelivery extends $tea.Model {
  kafkaLogParameters?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsLogDeliveryKafkaLogParameters[];
  SLSLogParameters?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsLogDeliverySLSLogParameters[];
  static names(): { [key: string]: string } {
    return {
      kafkaLogParameters: 'KafkaLogParameters',
      SLSLogParameters: 'SLSLogParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kafkaLogParameters: { 'type': 'array', 'itemType': ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsLogDeliveryKafkaLogParameters },
      SLSLogParameters: { 'type': 'array', 'itemType': ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsLogDeliverySLSLogParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsNetwork extends $tea.Model {
  securityGroupId?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsResourceSpecResources extends $tea.Model {
  type?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsResourceSpec extends $tea.Model {
  resources?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsResourceSpecResources[];
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: { 'type': 'array', 'itemType': ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsResourceSpecResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsRetryStrategy extends $tea.Model {
  maximumEventAgeInSeconds?: number;
  maximumRetryAttempts?: number;
  pushRetryStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      maximumEventAgeInSeconds: 'MaximumEventAgeInSeconds',
      maximumRetryAttempts: 'MaximumRetryAttempts',
      pushRetryStrategy: 'PushRetryStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumEventAgeInSeconds: 'number',
      maximumRetryAttempts: 'number',
      pushRetryStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsScaledObjectTriggersMetadata extends $tea.Model {
  type?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsScaledObjectTriggers extends $tea.Model {
  metadata?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsScaledObjectTriggersMetadata;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsScaledObjectTriggersMetadata,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsScaledObject extends $tea.Model {
  maxReplicaCount?: number;
  minReplicaCount?: number;
  triggers?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsScaledObjectTriggers[];
  static names(): { [key: string]: string } {
    return {
      maxReplicaCount: 'MaxReplicaCount',
      minReplicaCount: 'MinReplicaCount',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicaCount: 'number',
      minReplicaCount: 'number',
      triggers: { 'type': 'array', 'itemType': ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsScaledObjectTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsRunOptions extends $tea.Model {
  batchWindow?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBatchWindow;
  deadLetterQueue?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsDeadLetterQueue;
  errorsTolerance?: string;
  logDelivery?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsLogDelivery;
  maximumTasks?: number;
  network?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsNetwork;
  resourceSpec?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsResourceSpec;
  retryStrategy?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsRetryStrategy;
  roleName?: string;
  scaledObject?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsScaledObject;
  static names(): { [key: string]: string } {
    return {
      batchWindow: 'BatchWindow',
      deadLetterQueue: 'DeadLetterQueue',
      errorsTolerance: 'ErrorsTolerance',
      logDelivery: 'LogDelivery',
      maximumTasks: 'MaximumTasks',
      network: 'Network',
      resourceSpec: 'ResourceSpec',
      retryStrategy: 'RetryStrategy',
      roleName: 'RoleName',
      scaledObject: 'ScaledObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchWindow: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsBatchWindow,
      deadLetterQueue: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsDeadLetterQueue,
      errorsTolerance: 'string',
      logDelivery: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsLogDelivery,
      maximumTasks: 'number',
      network: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsNetwork,
      resourceSpec: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsResourceSpec,
      retryStrategy: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsRetryStrategy,
      roleName: 'string',
      scaledObject: ListEventStreamingsResponseBodyDataEventStreamingsRunOptionsScaledObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParametersConnectorParameters extends $tea.Model {
  config?: { [key: string]: any };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParameters extends $tea.Model {
  connectorPackageUrl?: string;
  connectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParametersConnectorParameters;
  workerParameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      connectorPackageUrl: 'ConnectorPackageUrl',
      connectorParameters: 'ConnectorParameters',
      workerParameters: 'WorkerParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorPackageUrl: 'string',
      connectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParametersConnectorParameters,
      workerParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaParameters extends $tea.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParameters extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPartition extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPrimaryKeyId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersVector extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParameters extends $tea.Model {
  apiKey?: string;
  collection?: string;
  dashVectorSchemaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParameters;
  instanceId?: string;
  network?: string;
  operation?: string;
  partition?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPartition;
  primaryKeyId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPrimaryKeyId;
  vector?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersVector;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      collection: 'Collection',
      dashVectorSchemaParameters: 'DashVectorSchemaParameters',
      instanceId: 'InstanceId',
      network: 'Network',
      operation: 'Operation',
      partition: 'Partition',
      primaryKeyId: 'PrimaryKeyId',
      vector: 'Vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      collection: 'string',
      dashVectorSchemaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersDashVectorSchemaParameters,
      instanceId: 'string',
      network: 'string',
      operation: 'string',
      partition: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPartition,
      primaryKeyId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersPrimaryKeyId,
      vector: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParametersVector,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersProject extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersRoleName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicSchema extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParameters extends $tea.Model {
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersBody;
  project?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersProject;
  roleName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersRoleName;
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopic;
  topicSchema?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicSchema;
  topicType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicType;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      project: 'Project',
      roleName: 'RoleName',
      topic: 'Topic',
      topicSchema: 'TopicSchema',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersBody,
      project: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersProject,
      roleName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersRoleName,
      topic: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopic,
      topicSchema: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicSchema,
      topicType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicType,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersConcurrency extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersFunctionName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersInvocationType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersQualifier extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersServiceName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParameters extends $tea.Model {
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersBody;
  concurrency?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersConcurrency;
  functionName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersFunctionName;
  invocationType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersInvocationType;
  qualifier?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersQualifier;
  serviceName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersServiceName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      concurrency: 'Concurrency',
      functionName: 'FunctionName',
      invocationType: 'InvocationType',
      qualifier: 'Qualifier',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersBody,
      concurrency: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersConcurrency,
      functionName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersFunctionName,
      invocationType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersInvocationType,
      qualifier: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersQualifier,
      serviceName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParametersServiceName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersExecutionName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersFlowName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersInput extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersRoleName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParameters extends $tea.Model {
  executionName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersExecutionName;
  flowName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersFlowName;
  input?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersInput;
  roleName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersRoleName;
  static names(): { [key: string]: string } {
    return {
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      input: 'Input',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersExecutionName,
      flowName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersFlowName,
      input: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersInput,
      roleName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParametersRoleName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersAcks extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersInstanceId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersKey extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersValue extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParameters extends $tea.Model {
  acks?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersAcks;
  instanceId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersInstanceId;
  key?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersKey;
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersTopic;
  value?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersValue;
  static names(): { [key: string]: string } {
    return {
      acks: 'Acks',
      instanceId: 'InstanceId',
      key: 'Key',
      topic: 'Topic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acks: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersAcks,
      instanceId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersInstanceId,
      key: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersKey,
      topic: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersTopic,
      value: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParametersValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersIsBase64Encode extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersQueueName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParameters extends $tea.Model {
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersBody;
  isBase64Encode?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersIsBase64Encode;
  queueName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersQueueName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      isBase64Encode: 'IsBase64Encode',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersBody,
      isBase64Encode: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersIsBase64Encode,
      queueName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParametersQueueName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersExchange extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersInstanceId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersMessageId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersProperties extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersQueueName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersRoutingKey extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersTargetType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersVirtualHostName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParameters extends $tea.Model {
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersBody;
  exchange?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersExchange;
  instanceId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersInstanceId;
  messageId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersMessageId;
  properties?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersProperties;
  queueName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersQueueName;
  routingKey?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersRoutingKey;
  targetType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersTargetType;
  virtualHostName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersVirtualHostName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      exchange: 'Exchange',
      instanceId: 'InstanceId',
      messageId: 'MessageId',
      properties: 'Properties',
      queueName: 'QueueName',
      routingKey: 'RoutingKey',
      targetType: 'TargetType',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersBody,
      exchange: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersExchange,
      instanceId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersInstanceId,
      messageId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersMessageId,
      properties: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersProperties,
      queueName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersQueueName,
      routingKey: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersRoutingKey,
      targetType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersTargetType,
      virtualHostName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParametersVirtualHostName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceEndpoint extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstancePassword extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceUsername extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersKeys extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersNetwork extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersProperties extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersSecurityGroupId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTags extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVSwitchIds extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVpcId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParameters extends $tea.Model {
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersBody;
  instanceEndpoint?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceEndpoint;
  instanceId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceId;
  instancePassword?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstancePassword;
  instanceType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceType;
  instanceUsername?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceUsername;
  keys?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersKeys;
  network?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersNetwork;
  properties?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersProperties;
  securityGroupId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersSecurityGroupId;
  tags?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTags;
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTopic;
  vSwitchIds?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVSwitchIds;
  vpcId?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instancePassword: 'InstancePassword',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      keys: 'Keys',
      network: 'Network',
      properties: 'Properties',
      securityGroupId: 'SecurityGroupId',
      tags: 'Tags',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersBody,
      instanceEndpoint: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceEndpoint,
      instanceId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceId,
      instancePassword: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstancePassword,
      instanceType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceType,
      instanceUsername: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersInstanceUsername,
      keys: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersKeys,
      network: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersNetwork,
      properties: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersProperties,
      securityGroupId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersSecurityGroupId,
      tags: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTags,
      topic: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersTopic,
      vSwitchIds: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVSwitchIds,
      vpcId: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParametersVpcId,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentSchema extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersLogStore extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersProject extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersRoleName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParameters extends $tea.Model {
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersBody;
  contentSchema?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentSchema;
  contentType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentType;
  logStore?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersLogStore;
  project?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersProject;
  roleName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersRoleName;
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersTopic;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      contentSchema: 'ContentSchema',
      contentType: 'ContentType',
      logStore: 'LogStore',
      project: 'Project',
      roleName: 'RoleName',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersBody,
      contentSchema: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentSchema,
      contentType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentType,
      logStore: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersLogStore,
      project: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersProject,
      roleName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersRoleName,
      topic: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersTopic,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSink extends $tea.Model {
  sinkCustomizedKafkaConnectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParameters;
  sinkCustomizedKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaParameters;
  sinkDashVectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParameters;
  sinkDataHubParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParameters;
  sinkFcParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParameters;
  sinkFnfParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParameters;
  sinkKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParameters;
  sinkMNSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParameters;
  sinkRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParameters;
  sinkRocketMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParameters;
  sinkSLSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sinkCustomizedKafkaConnectorParameters: 'SinkCustomizedKafkaConnectorParameters',
      sinkCustomizedKafkaParameters: 'SinkCustomizedKafkaParameters',
      sinkDashVectorParameters: 'SinkDashVectorParameters',
      sinkDataHubParameters: 'SinkDataHubParameters',
      sinkFcParameters: 'SinkFcParameters',
      sinkFnfParameters: 'SinkFnfParameters',
      sinkKafkaParameters: 'SinkKafkaParameters',
      sinkMNSParameters: 'SinkMNSParameters',
      sinkRabbitMQParameters: 'SinkRabbitMQParameters',
      sinkRocketMQParameters: 'SinkRocketMQParameters',
      sinkSLSParameters: 'SinkSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sinkCustomizedKafkaConnectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaConnectorParameters,
      sinkCustomizedKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkCustomizedKafkaParameters,
      sinkDashVectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDashVectorParameters,
      sinkDataHubParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParameters,
      sinkFcParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFcParameters,
      sinkFnfParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkFnfParameters,
      sinkKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkKafkaParameters,
      sinkMNSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkMNSParameters,
      sinkRabbitMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRabbitMQParameters,
      sinkRocketMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkRocketMQParameters,
      sinkSLSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheKafkaParameters extends $tea.Model {
  bootstraps?: string;
  consumerGroup?: string;
  networkType?: string;
  offsetReset?: string;
  saslMechanism?: string;
  saslPassword?: string;
  saslUser?: string;
  securityGroupId?: string;
  securityProtocol?: string;
  topic?: string;
  vSwitchIds?: string;
  valueDataType?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bootstraps: 'Bootstraps',
      consumerGroup: 'ConsumerGroup',
      networkType: 'NetworkType',
      offsetReset: 'OffsetReset',
      saslMechanism: 'SaslMechanism',
      saslPassword: 'SaslPassword',
      saslUser: 'SaslUser',
      securityGroupId: 'SecurityGroupId',
      securityProtocol: 'SecurityProtocol',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      valueDataType: 'ValueDataType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstraps: 'string',
      consumerGroup: 'string',
      networkType: 'string',
      offsetReset: 'string',
      saslMechanism: 'string',
      saslPassword: 'string',
      saslUser: 'string',
      securityGroupId: 'string',
      securityProtocol: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      valueDataType: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParametersConnectorParameters extends $tea.Model {
  config?: { [key: string]: any };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParameters extends $tea.Model {
  connectorPackageUrl?: string;
  connectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParametersConnectorParameters;
  workerParameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      connectorPackageUrl: 'ConnectorPackageUrl',
      connectorParameters: 'ConnectorParameters',
      workerParameters: 'WorkerParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorPackageUrl: 'string',
      connectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParametersConnectorParameters,
      workerParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaParameters extends $tea.Model {
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

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceDTSParameters extends $tea.Model {
  brokerUrl?: string;
  initCheckPoint?: string;
  password?: string;
  sid?: string;
  taskId?: string;
  topic?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      brokerUrl: 'BrokerUrl',
      initCheckPoint: 'InitCheckPoint',
      password: 'Password',
      sid: 'Sid',
      taskId: 'TaskId',
      topic: 'Topic',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerUrl: 'string',
      initCheckPoint: 'string',
      password: 'string',
      sid: 'string',
      taskId: 'string',
      topic: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceKafkaParameters extends $tea.Model {
  consumerGroup?: string;
  instanceId?: string;
  network?: string;
  offsetReset?: string;
  regionId?: string;
  securityGroupId?: string;
  topic?: string;
  vSwitchIds?: string;
  valueDataType?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      network: 'Network',
      offsetReset: 'OffsetReset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      valueDataType: 'ValueDataType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      network: 'string',
      offsetReset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      valueDataType: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMNSParameters extends $tea.Model {
  isBase64Decode?: boolean;
  queueName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      isBase64Decode: 'IsBase64Decode',
      queueName: 'QueueName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBase64Decode: 'boolean',
      queueName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMQTTParameters extends $tea.Model {
  bodyDataType?: string;
  instanceId?: string;
  regionId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyDataType: 'BodyDataType',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataType: 'string',
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourcePrometheusParameters extends $tea.Model {
  clusterId?: string;
  dataType?: string;
  labels?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataType: 'DataType',
      labels: 'Labels',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataType: 'string',
      labels: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRabbitMQParameters extends $tea.Model {
  instanceId?: string;
  queueName?: string;
  regionId?: string;
  virtualHostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queueName: 'QueueName',
      regionId: 'RegionId',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queueName: 'string',
      regionId: 'string',
      virtualHostName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQParameters extends $tea.Model {
  authType?: string;
  bodyDataType?: string;
  filterSql?: string;
  filterType?: string;
  groupID?: string;
  instanceEndpoint?: string;
  instanceId?: string;
  instanceNetwork?: string;
  instancePassword?: string;
  instanceSecurityGroupId?: string;
  instanceType?: string;
  instanceUsername?: string;
  instanceVSwitchIds?: string;
  instanceVpcId?: string;
  network?: string;
  offset?: string;
  regionId?: string;
  securityGroupId?: string;
  tag?: string;
  timestamp?: number;
  topic?: string;
  vSwitchIds?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      bodyDataType: 'BodyDataType',
      filterSql: 'FilterSql',
      filterType: 'FilterType',
      groupID: 'GroupID',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instanceNetwork: 'InstanceNetwork',
      instancePassword: 'InstancePassword',
      instanceSecurityGroupId: 'InstanceSecurityGroupId',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      instanceVSwitchIds: 'InstanceVSwitchIds',
      instanceVpcId: 'InstanceVpcId',
      network: 'Network',
      offset: 'Offset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      timestamp: 'Timestamp',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      bodyDataType: 'string',
      filterSql: 'string',
      filterType: 'string',
      groupID: 'string',
      instanceEndpoint: 'string',
      instanceId: 'string',
      instanceNetwork: 'string',
      instancePassword: 'string',
      instanceSecurityGroupId: 'string',
      instanceType: 'string',
      instanceUsername: 'string',
      instanceVSwitchIds: 'string',
      instanceVpcId: 'string',
      network: 'string',
      offset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      tag: 'string',
      timestamp: 'number',
      topic: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceSLSParameters extends $tea.Model {
  consumePosition?: string;
  consumerGroup?: string;
  logStore?: string;
  project?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      consumePosition: 'ConsumePosition',
      consumerGroup: 'ConsumerGroup',
      logStore: 'LogStore',
      project: 'Project',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumePosition: 'string',
      consumerGroup: 'string',
      logStore: 'string',
      project: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsSource extends $tea.Model {
  sourceApacheKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheKafkaParameters;
  sourceCustomizedKafkaConnectorParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParameters;
  sourceCustomizedKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaParameters;
  sourceDTSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceDTSParameters;
  sourceKafkaParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceKafkaParameters;
  sourceMNSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMNSParameters;
  sourceMQTTParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMQTTParameters;
  sourcePrometheusParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourcePrometheusParameters;
  sourceRabbitMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRabbitMQParameters;
  sourceRocketMQParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQParameters;
  sourceSLSParameters?: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sourceApacheKafkaParameters: 'SourceApacheKafkaParameters',
      sourceCustomizedKafkaConnectorParameters: 'SourceCustomizedKafkaConnectorParameters',
      sourceCustomizedKafkaParameters: 'SourceCustomizedKafkaParameters',
      sourceDTSParameters: 'SourceDTSParameters',
      sourceKafkaParameters: 'SourceKafkaParameters',
      sourceMNSParameters: 'SourceMNSParameters',
      sourceMQTTParameters: 'SourceMQTTParameters',
      sourcePrometheusParameters: 'SourcePrometheusParameters',
      sourceRabbitMQParameters: 'SourceRabbitMQParameters',
      sourceRocketMQParameters: 'SourceRocketMQParameters',
      sourceSLSParameters: 'SourceSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceApacheKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceApacheKafkaParameters,
      sourceCustomizedKafkaConnectorParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaConnectorParameters,
      sourceCustomizedKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceCustomizedKafkaParameters,
      sourceDTSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceDTSParameters,
      sourceKafkaParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceKafkaParameters,
      sourceMNSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMNSParameters,
      sourceMQTTParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceMQTTParameters,
      sourcePrometheusParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourcePrometheusParameters,
      sourceRabbitMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRabbitMQParameters,
      sourceRocketMQParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceRocketMQParameters,
      sourceSLSParameters: ListEventStreamingsResponseBodyDataEventStreamingsSourceSourceSLSParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamingsTransforms extends $tea.Model {
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyDataEventStreamings extends $tea.Model {
  description?: string;
  eventStreamingName?: string;
  filterPattern?: string;
  runOptions?: ListEventStreamingsResponseBodyDataEventStreamingsRunOptions;
  sink?: ListEventStreamingsResponseBodyDataEventStreamingsSink;
  source?: ListEventStreamingsResponseBodyDataEventStreamingsSource;
  status?: string;
  transforms?: ListEventStreamingsResponseBodyDataEventStreamingsTransforms[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventStreamingName: 'EventStreamingName',
      filterPattern: 'FilterPattern',
      runOptions: 'RunOptions',
      sink: 'Sink',
      source: 'Source',
      status: 'Status',
      transforms: 'Transforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventStreamingName: 'string',
      filterPattern: 'string',
      runOptions: ListEventStreamingsResponseBodyDataEventStreamingsRunOptions,
      sink: ListEventStreamingsResponseBodyDataEventStreamingsSink,
      source: ListEventStreamingsResponseBodyDataEventStreamingsSource,
      status: 'string',
      transforms: { 'type': 'array', 'itemType': ListEventStreamingsResponseBodyDataEventStreamingsTransforms },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsResponseBodyData extends $tea.Model {
  eventStreamings?: ListEventStreamingsResponseBodyDataEventStreamings[];
  nextToken?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      eventStreamings: 'EventStreamings',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventStreamings: { 'type': 'array', 'itemType': ListEventStreamingsResponseBodyDataEventStreamings },
      nextToken: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyDataRulesTargets extends $tea.Model {
  endpoint?: string;
  errorsTolerance?: string;
  id?: string;
  pushSelector?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      errorsTolerance: 'ErrorsTolerance',
      id: 'Id',
      pushSelector: 'PushSelector',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      errorsTolerance: 'string',
      id: 'string',
      pushSelector: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyDataRules extends $tea.Model {
  createdTimestamp?: number;
  description?: string;
  detailMap?: { [key: string]: any };
  eventBusName?: string;
  filterPattern?: string;
  ruleARN?: string;
  ruleName?: string;
  status?: string;
  targets?: ListRulesResponseBodyDataRulesTargets[];
  static names(): { [key: string]: string } {
    return {
      createdTimestamp: 'CreatedTimestamp',
      description: 'Description',
      detailMap: 'DetailMap',
      eventBusName: 'EventBusName',
      filterPattern: 'FilterPattern',
      ruleARN: 'RuleARN',
      ruleName: 'RuleName',
      status: 'Status',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTimestamp: 'number',
      description: 'string',
      detailMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      eventBusName: 'string',
      filterPattern: 'string',
      ruleARN: 'string',
      ruleName: 'string',
      status: 'string',
      targets: { 'type': 'array', 'itemType': ListRulesResponseBodyDataRulesTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRulesResponseBodyData extends $tea.Model {
  nextToken?: string;
  rules?: ListRulesResponseBodyDataRules[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      rules: 'Rules',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      rules: { 'type': 'array', 'itemType': ListRulesResponseBodyDataRules },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetsResponseBodyDataTargetsParamList extends $tea.Model {
  form?: string;
  resourceKey?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      resourceKey: 'ResourceKey',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      resourceKey: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetsResponseBodyDataTargets extends $tea.Model {
  endpoint?: string;
  errorsTolerance?: string;
  eventBusName?: string;
  id?: string;
  paramList?: ListTargetsResponseBodyDataTargetsParamList[];
  ruleName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      errorsTolerance: 'ErrorsTolerance',
      eventBusName: 'EventBusName',
      id: 'Id',
      paramList: 'ParamList',
      ruleName: 'RuleName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      errorsTolerance: 'string',
      eventBusName: 'string',
      id: 'string',
      paramList: { 'type': 'array', 'itemType': ListTargetsResponseBodyDataTargetsParamList },
      ruleName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTargetsResponseBodyData extends $tea.Model {
  nextToken?: string;
  targets?: ListTargetsResponseBodyDataTargets[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      targets: 'Targets',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      targets: { 'type': 'array', 'itemType': ListTargetsResponseBodyDataTargets },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceHttpEventParameters extends $tea.Model {
  ip?: string[];
  method?: string[];
  publicWebHookUrl?: string[];
  referer?: string[];
  securityConfig?: string;
  type?: string;
  vpcWebHookUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      method: 'Method',
      publicWebHookUrl: 'PublicWebHookUrl',
      referer: 'Referer',
      securityConfig: 'SecurityConfig',
      type: 'Type',
      vpcWebHookUrl: 'VpcWebHookUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
      method: { 'type': 'array', 'itemType': 'string' },
      publicWebHookUrl: { 'type': 'array', 'itemType': 'string' },
      referer: { 'type': 'array', 'itemType': 'string' },
      securityConfig: 'string',
      type: 'string',
      vpcWebHookUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceKafkaParameters extends $tea.Model {
  consumerGroup?: string;
  instanceId?: string;
  maximumTasks?: number;
  network?: string;
  offsetReset?: string;
  regionId?: string;
  securityGroupId?: string;
  topic?: string;
  vSwitchIds?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      maximumTasks: 'MaximumTasks',
      network: 'Network',
      offsetReset: 'OffsetReset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      maximumTasks: 'number',
      network: 'string',
      offsetReset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceMNSParameters extends $tea.Model {
  isBase64Decode?: boolean;
  queueName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      isBase64Decode: 'IsBase64Decode',
      queueName: 'QueueName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBase64Decode: 'boolean',
      queueName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRabbitMQParameters extends $tea.Model {
  instanceId?: string;
  queueName?: string;
  regionId?: string;
  virtualHostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queueName: 'QueueName',
      regionId: 'RegionId',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queueName: 'string',
      regionId: 'string',
      virtualHostName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRocketMQParameters extends $tea.Model {
  authType?: string;
  groupId?: string;
  instanceEndpoint?: string;
  instanceId?: string;
  instanceNetwork?: string;
  instancePassword?: string;
  instanceSecurityGroupId?: string;
  instanceType?: string;
  instanceUsername?: string;
  instanceVSwitchIds?: string;
  instanceVpcId?: string;
  offset?: string;
  regionId?: string;
  tag?: string;
  timestamp?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      groupId: 'GroupId',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instanceNetwork: 'InstanceNetwork',
      instancePassword: 'InstancePassword',
      instanceSecurityGroupId: 'InstanceSecurityGroupId',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      instanceVSwitchIds: 'InstanceVSwitchIds',
      instanceVpcId: 'InstanceVpcId',
      offset: 'Offset',
      regionId: 'RegionId',
      tag: 'Tag',
      timestamp: 'Timestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      groupId: 'string',
      instanceEndpoint: 'string',
      instanceId: 'string',
      instanceNetwork: 'string',
      instancePassword: 'string',
      instanceSecurityGroupId: 'string',
      instanceType: 'string',
      instanceUsername: 'string',
      instanceVSwitchIds: 'string',
      instanceVpcId: 'string',
      offset: 'string',
      regionId: 'string',
      tag: 'string',
      timestamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceSLSParameters extends $tea.Model {
  consumePosition?: string;
  logStore?: string;
  project?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      consumePosition: 'ConsumePosition',
      logStore: 'LogStore',
      project: 'Project',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumePosition: 'string',
      logStore: 'string',
      project: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceScheduledEventParameters extends $tea.Model {
  schedule?: string;
  timeZone?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      schedule: 'Schedule',
      timeZone: 'TimeZone',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedule: 'string',
      timeZone: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefinedEventSourcesResponseBodyDataEventSourceList extends $tea.Model {
  arn?: string;
  ctime?: number;
  eventBusName?: string;
  externalSourceType?: string;
  name?: string;
  sourceHttpEventParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceHttpEventParameters;
  sourceKafkaParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceKafkaParameters;
  sourceMNSParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceMNSParameters;
  sourceRabbitMQParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRabbitMQParameters;
  sourceRocketMQParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRocketMQParameters;
  sourceSLSParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceSLSParameters;
  sourceScheduledEventParameters?: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceScheduledEventParameters;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      ctime: 'Ctime',
      eventBusName: 'EventBusName',
      externalSourceType: 'ExternalSourceType',
      name: 'Name',
      sourceHttpEventParameters: 'SourceHttpEventParameters',
      sourceKafkaParameters: 'SourceKafkaParameters',
      sourceMNSParameters: 'SourceMNSParameters',
      sourceRabbitMQParameters: 'SourceRabbitMQParameters',
      sourceRocketMQParameters: 'SourceRocketMQParameters',
      sourceSLSParameters: 'SourceSLSParameters',
      sourceScheduledEventParameters: 'SourceScheduledEventParameters',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      ctime: 'number',
      eventBusName: 'string',
      externalSourceType: 'string',
      name: 'string',
      sourceHttpEventParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceHttpEventParameters,
      sourceKafkaParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceKafkaParameters,
      sourceMNSParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceMNSParameters,
      sourceRabbitMQParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRabbitMQParameters,
      sourceRocketMQParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceRocketMQParameters,
      sourceSLSParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceSLSParameters,
      sourceScheduledEventParameters: ListUserDefinedEventSourcesResponseBodyDataEventSourceListSourceScheduledEventParameters,
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDefinedEventSourcesResponseBodyData extends $tea.Model {
  eventSourceList?: ListUserDefinedEventSourcesResponseBodyDataEventSourceList[];
  nextToken?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      eventSourceList: 'EventSourceList',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSourceList: { 'type': 'array', 'itemType': ListUserDefinedEventSourcesResponseBodyDataEventSourceList },
      nextToken: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTargetsRequestTargetsDeadLetterQueue extends $tea.Model {
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTargetsRequestTargetsParamList extends $tea.Model {
  form?: string;
  resourceKey?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      resourceKey: 'ResourceKey',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      resourceKey: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTargetsRequestTargets extends $tea.Model {
  deadLetterQueue?: PutTargetsRequestTargetsDeadLetterQueue;
  endpoint?: string;
  errorsTolerance?: string;
  id?: string;
  paramList?: PutTargetsRequestTargetsParamList[];
  pushRetryStrategy?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      deadLetterQueue: 'DeadLetterQueue',
      endpoint: 'Endpoint',
      errorsTolerance: 'ErrorsTolerance',
      id: 'Id',
      paramList: 'ParamList',
      pushRetryStrategy: 'PushRetryStrategy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadLetterQueue: PutTargetsRequestTargetsDeadLetterQueue,
      endpoint: 'string',
      errorsTolerance: 'string',
      id: 'string',
      paramList: { 'type': 'array', 'itemType': PutTargetsRequestTargetsParamList },
      pushRetryStrategy: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTargetsResponseBodyDataErrorEntries extends $tea.Model {
  entryId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      entryId: 'EntryId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutTargetsResponseBodyData extends $tea.Model {
  errorEntries?: PutTargetsResponseBodyDataErrorEntries[];
  errorEntriesCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorEntries: 'ErrorEntries',
      errorEntriesCount: 'ErrorEntriesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorEntries: { 'type': 'array', 'itemType': PutTargetsResponseBodyDataErrorEntries },
      errorEntriesCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventTracesResponseBodyData extends $tea.Model {
  action?: string;
  actionTime?: number;
  endpoint?: string;
  eventBusName?: string;
  eventId?: string;
  eventSource?: string;
  notifyLatency?: string;
  notifyStatus?: string;
  notifyTime?: number;
  receivedTime?: number;
  ruleMatchingTime?: string;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionTime: 'ActionTime',
      endpoint: 'Endpoint',
      eventBusName: 'EventBusName',
      eventId: 'EventId',
      eventSource: 'EventSource',
      notifyLatency: 'NotifyLatency',
      notifyStatus: 'NotifyStatus',
      notifyTime: 'NotifyTime',
      receivedTime: 'ReceivedTime',
      ruleMatchingTime: 'RuleMatchingTime',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionTime: 'number',
      endpoint: 'string',
      eventBusName: 'string',
      eventId: 'string',
      eventSource: 'string',
      notifyLatency: 'string',
      notifyStatus: 'string',
      notifyTime: 'number',
      receivedTime: 'number',
      ruleMatchingTime: 'string',
      ruleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTracedEventByEventIdResponseBodyDataEvents extends $tea.Model {
  eventBusName?: string;
  eventId?: string;
  eventReceivedTime?: number;
  eventSource?: string;
  eventType?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      eventId: 'EventId',
      eventReceivedTime: 'EventReceivedTime',
      eventSource: 'EventSource',
      eventType: 'EventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      eventId: 'string',
      eventReceivedTime: 'number',
      eventSource: 'string',
      eventType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTracedEventByEventIdResponseBodyData extends $tea.Model {
  events?: QueryTracedEventByEventIdResponseBodyDataEvents[];
  nextToken?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': QueryTracedEventByEventIdResponseBodyDataEvents },
      nextToken: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTracedEventsResponseBodyDataEvents extends $tea.Model {
  eventBusName?: string;
  eventId?: string;
  eventReceivedTime?: number;
  eventSource?: string;
  eventType?: string;
  static names(): { [key: string]: string } {
    return {
      eventBusName: 'EventBusName',
      eventId: 'EventId',
      eventReceivedTime: 'EventReceivedTime',
      eventSource: 'EventSource',
      eventType: 'EventType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventBusName: 'string',
      eventId: 'string',
      eventReceivedTime: 'number',
      eventSource: 'string',
      eventType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTracedEventsResponseBodyData extends $tea.Model {
  events?: QueryTracedEventsResponseBodyDataEvents[];
  nextToken?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      nextToken: 'NextToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': QueryTracedEventsResponseBodyDataEvents },
      nextToken: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestEventPatternResponseBodyData extends $tea.Model {
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApiDestinationRequestHttpApiParameters extends $tea.Model {
  endpoint?: string;
  method?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      method: 'Method',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      method: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionRequestAuthParametersApiKeyAuthParameters extends $tea.Model {
  apiKeyName?: string;
  apiKeyValue?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'ApiKeyName',
      apiKeyValue: 'ApiKeyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      apiKeyValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionRequestAuthParametersBasicAuthParameters extends $tea.Model {
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionRequestAuthParametersOAuthParametersClientParameters extends $tea.Model {
  clientID?: string;
  clientSecret?: string;
  static names(): { [key: string]: string } {
    return {
      clientID: 'ClientID',
      clientSecret: 'ClientSecret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientID: 'string',
      clientSecret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters extends $tea.Model {
  isValueSecret?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters extends $tea.Model {
  isValueSecret?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters extends $tea.Model {
  isValueSecret?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters extends $tea.Model {
  bodyParameters?: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters[];
  headerParameters?: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters[];
  queryStringParameters?: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters[];
  static names(): { [key: string]: string } {
    return {
      bodyParameters: 'BodyParameters',
      headerParameters: 'HeaderParameters',
      queryStringParameters: 'QueryStringParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyParameters: { 'type': 'array', 'itemType': UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersBodyParameters },
      headerParameters: { 'type': 'array', 'itemType': UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters },
      queryStringParameters: { 'type': 'array', 'itemType': UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionRequestAuthParametersOAuthParameters extends $tea.Model {
  authorizationEndpoint?: string;
  clientParameters?: UpdateConnectionRequestAuthParametersOAuthParametersClientParameters;
  httpMethod?: string;
  OAuthHttpParameters?: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters;
  static names(): { [key: string]: string } {
    return {
      authorizationEndpoint: 'AuthorizationEndpoint',
      clientParameters: 'ClientParameters',
      httpMethod: 'HttpMethod',
      OAuthHttpParameters: 'OAuthHttpParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationEndpoint: 'string',
      clientParameters: UpdateConnectionRequestAuthParametersOAuthParametersClientParameters,
      httpMethod: 'string',
      OAuthHttpParameters: UpdateConnectionRequestAuthParametersOAuthParametersOAuthHttpParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionRequestAuthParameters extends $tea.Model {
  apiKeyAuthParameters?: UpdateConnectionRequestAuthParametersApiKeyAuthParameters;
  authorizationType?: string;
  basicAuthParameters?: UpdateConnectionRequestAuthParametersBasicAuthParameters;
  OAuthParameters?: UpdateConnectionRequestAuthParametersOAuthParameters;
  static names(): { [key: string]: string } {
    return {
      apiKeyAuthParameters: 'ApiKeyAuthParameters',
      authorizationType: 'AuthorizationType',
      basicAuthParameters: 'BasicAuthParameters',
      OAuthParameters: 'OAuthParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyAuthParameters: UpdateConnectionRequestAuthParametersApiKeyAuthParameters,
      authorizationType: 'string',
      basicAuthParameters: UpdateConnectionRequestAuthParametersBasicAuthParameters,
      OAuthParameters: UpdateConnectionRequestAuthParametersOAuthParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConnectionRequestNetworkParameters extends $tea.Model {
  networkType?: string;
  securityGroupId?: string;
  vpcId?: string;
  vswitcheId?: string;
  static names(): { [key: string]: string } {
    return {
      networkType: 'NetworkType',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vswitcheId: 'VswitcheId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vswitcheId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventSourceRequestSourceHttpEventParameters extends $tea.Model {
  ip?: string[];
  method?: string[];
  referer?: string[];
  securityConfig?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      method: 'Method',
      referer: 'Referer',
      securityConfig: 'SecurityConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
      method: { 'type': 'array', 'itemType': 'string' },
      referer: { 'type': 'array', 'itemType': 'string' },
      securityConfig: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventSourceRequestSourceKafkaParameters extends $tea.Model {
  consumerGroup?: string;
  instanceId?: string;
  maximumTasks?: number;
  network?: string;
  offsetReset?: string;
  regionId?: string;
  securityGroupId?: string;
  topic?: string;
  vSwitchIds?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      maximumTasks: 'MaximumTasks',
      network: 'Network',
      offsetReset: 'OffsetReset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      maximumTasks: 'number',
      network: 'string',
      offsetReset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventSourceRequestSourceMNSParameters extends $tea.Model {
  isBase64Decode?: boolean;
  queueName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      isBase64Decode: 'IsBase64Decode',
      queueName: 'QueueName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBase64Decode: 'boolean',
      queueName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventSourceRequestSourceRabbitMQParameters extends $tea.Model {
  instanceId?: string;
  queueName?: string;
  regionId?: string;
  virtualHostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queueName: 'QueueName',
      regionId: 'RegionId',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queueName: 'string',
      regionId: 'string',
      virtualHostName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventSourceRequestSourceRocketMQParameters extends $tea.Model {
  authType?: string;
  groupID?: string;
  instanceEndpoint?: string;
  instanceId?: string;
  instanceNetwork?: string;
  instancePassword?: string;
  instanceSecurityGroupId?: string;
  instanceType?: string;
  instanceUsername?: string;
  instanceVSwitchIds?: string;
  instanceVpcId?: string;
  offset?: string;
  regionId?: string;
  tag?: string;
  timestamp?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      groupID: 'GroupID',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instanceNetwork: 'InstanceNetwork',
      instancePassword: 'InstancePassword',
      instanceSecurityGroupId: 'InstanceSecurityGroupId',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      instanceVSwitchIds: 'InstanceVSwitchIds',
      instanceVpcId: 'InstanceVpcId',
      offset: 'Offset',
      regionId: 'RegionId',
      tag: 'Tag',
      timestamp: 'Timestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      groupID: 'string',
      instanceEndpoint: 'string',
      instanceId: 'string',
      instanceNetwork: 'string',
      instancePassword: 'string',
      instanceSecurityGroupId: 'string',
      instanceType: 'string',
      instanceUsername: 'string',
      instanceVSwitchIds: 'string',
      instanceVpcId: 'string',
      offset: 'string',
      regionId: 'string',
      tag: 'string',
      timestamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventSourceRequestSourceSLSParameters extends $tea.Model {
  consumePosition?: string;
  logStore?: string;
  project?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      consumePosition: 'ConsumePosition',
      logStore: 'LogStore',
      project: 'Project',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumePosition: 'string',
      logStore: 'string',
      project: 'string',
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventSourceRequestSourceScheduledEventParameters extends $tea.Model {
  schedule?: string;
  timeZone?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      schedule: 'Schedule',
      timeZone: 'TimeZone',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedule: 'string',
      timeZone: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestRunOptionsBatchWindow extends $tea.Model {
  countBasedWindow?: number;
  timeBasedWindow?: number;
  static names(): { [key: string]: string } {
    return {
      countBasedWindow: 'CountBasedWindow',
      timeBasedWindow: 'TimeBasedWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countBasedWindow: 'number',
      timeBasedWindow: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestRunOptionsDeadLetterQueue extends $tea.Model {
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestRunOptionsLogDeliveryKafkaLogParameters extends $tea.Model {
  endpoint?: string;
  instanceId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      instanceId: 'InstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      instanceId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestRunOptionsLogDeliverySLSLogParameters extends $tea.Model {
  logstoreName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logstoreName: 'LogstoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstoreName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestRunOptionsLogDelivery extends $tea.Model {
  kafkaLogParameters?: UpdateEventStreamingRequestRunOptionsLogDeliveryKafkaLogParameters[];
  SLSLogParameters?: UpdateEventStreamingRequestRunOptionsLogDeliverySLSLogParameters[];
  static names(): { [key: string]: string } {
    return {
      kafkaLogParameters: 'KafkaLogParameters',
      SLSLogParameters: 'SLSLogParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kafkaLogParameters: { 'type': 'array', 'itemType': UpdateEventStreamingRequestRunOptionsLogDeliveryKafkaLogParameters },
      SLSLogParameters: { 'type': 'array', 'itemType': UpdateEventStreamingRequestRunOptionsLogDeliverySLSLogParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestRunOptionsNetwork extends $tea.Model {
  securityGroupId?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestRunOptionsResourceSpecResources extends $tea.Model {
  type?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestRunOptionsResourceSpec extends $tea.Model {
  resources?: UpdateEventStreamingRequestRunOptionsResourceSpecResources[];
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: { 'type': 'array', 'itemType': UpdateEventStreamingRequestRunOptionsResourceSpecResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestRunOptionsRetryStrategy extends $tea.Model {
  maximumEventAgeInSeconds?: number;
  maximumRetryAttempts?: number;
  pushRetryStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      maximumEventAgeInSeconds: 'MaximumEventAgeInSeconds',
      maximumRetryAttempts: 'MaximumRetryAttempts',
      pushRetryStrategy: 'PushRetryStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumEventAgeInSeconds: 'number',
      maximumRetryAttempts: 'number',
      pushRetryStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestRunOptionsScaledObjectTriggersMetadata extends $tea.Model {
  type?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestRunOptionsScaledObjectTriggers extends $tea.Model {
  metadata?: UpdateEventStreamingRequestRunOptionsScaledObjectTriggersMetadata;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: UpdateEventStreamingRequestRunOptionsScaledObjectTriggersMetadata,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestRunOptionsScaledObject extends $tea.Model {
  maxReplicaCount?: number;
  minReplicaCount?: number;
  triggers?: UpdateEventStreamingRequestRunOptionsScaledObjectTriggers[];
  static names(): { [key: string]: string } {
    return {
      maxReplicaCount: 'MaxReplicaCount',
      minReplicaCount: 'MinReplicaCount',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxReplicaCount: 'number',
      minReplicaCount: 'number',
      triggers: { 'type': 'array', 'itemType': UpdateEventStreamingRequestRunOptionsScaledObjectTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestRunOptions extends $tea.Model {
  batchWindow?: UpdateEventStreamingRequestRunOptionsBatchWindow;
  deadLetterQueue?: UpdateEventStreamingRequestRunOptionsDeadLetterQueue;
  errorsTolerance?: string;
  logDelivery?: UpdateEventStreamingRequestRunOptionsLogDelivery;
  maximumTasks?: number;
  network?: UpdateEventStreamingRequestRunOptionsNetwork;
  resourceSpec?: UpdateEventStreamingRequestRunOptionsResourceSpec;
  retryStrategy?: UpdateEventStreamingRequestRunOptionsRetryStrategy;
  roleName?: string;
  scaledObject?: UpdateEventStreamingRequestRunOptionsScaledObject;
  static names(): { [key: string]: string } {
    return {
      batchWindow: 'BatchWindow',
      deadLetterQueue: 'DeadLetterQueue',
      errorsTolerance: 'ErrorsTolerance',
      logDelivery: 'LogDelivery',
      maximumTasks: 'MaximumTasks',
      network: 'Network',
      resourceSpec: 'ResourceSpec',
      retryStrategy: 'RetryStrategy',
      roleName: 'RoleName',
      scaledObject: 'ScaledObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchWindow: UpdateEventStreamingRequestRunOptionsBatchWindow,
      deadLetterQueue: UpdateEventStreamingRequestRunOptionsDeadLetterQueue,
      errorsTolerance: 'string',
      logDelivery: UpdateEventStreamingRequestRunOptionsLogDelivery,
      maximumTasks: 'number',
      network: UpdateEventStreamingRequestRunOptionsNetwork,
      resourceSpec: UpdateEventStreamingRequestRunOptionsResourceSpec,
      retryStrategy: UpdateEventStreamingRequestRunOptionsRetryStrategy,
      roleName: 'string',
      scaledObject: UpdateEventStreamingRequestRunOptionsScaledObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters extends $tea.Model {
  config?: { [key: string]: any };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters extends $tea.Model {
  connectorPackageUrl?: string;
  connectorParameters?: UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters;
  workerParameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      connectorPackageUrl: 'ConnectorPackageUrl',
      connectorParameters: 'ConnectorParameters',
      workerParameters: 'WorkerParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorPackageUrl: 'string',
      connectorParameters: UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParametersConnectorParameters,
      workerParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkCustomizedKafkaParameters extends $tea.Model {
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

export class UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkDashVectorParametersPartition extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkDashVectorParametersVector extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkDashVectorParameters extends $tea.Model {
  apiKey?: string;
  collection?: string;
  dashVectorSchemaParameters?: UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters;
  instanceId?: string;
  network?: string;
  operation?: string;
  partition?: UpdateEventStreamingRequestSinkSinkDashVectorParametersPartition;
  primaryKeyId?: UpdateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId;
  vector?: UpdateEventStreamingRequestSinkSinkDashVectorParametersVector;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      collection: 'Collection',
      dashVectorSchemaParameters: 'DashVectorSchemaParameters',
      instanceId: 'InstanceId',
      network: 'Network',
      operation: 'Operation',
      partition: 'Partition',
      primaryKeyId: 'PrimaryKeyId',
      vector: 'Vector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      collection: 'string',
      dashVectorSchemaParameters: UpdateEventStreamingRequestSinkSinkDashVectorParametersDashVectorSchemaParameters,
      instanceId: 'string',
      network: 'string',
      operation: 'string',
      partition: UpdateEventStreamingRequestSinkSinkDashVectorParametersPartition,
      primaryKeyId: UpdateEventStreamingRequestSinkSinkDashVectorParametersPrimaryKeyId,
      vector: UpdateEventStreamingRequestSinkSinkDashVectorParametersVector,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkDataHubParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkDataHubParametersContentSchema extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkDataHubParametersContentType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkDataHubParametersProject extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkDataHubParametersRoleName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkDataHubParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkDataHubParametersTopicSchema extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkDataHubParametersTopicType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkDataHubParameters extends $tea.Model {
  body?: UpdateEventStreamingRequestSinkSinkDataHubParametersBody;
  contentSchema?: UpdateEventStreamingRequestSinkSinkDataHubParametersContentSchema;
  contentType?: UpdateEventStreamingRequestSinkSinkDataHubParametersContentType;
  project?: UpdateEventStreamingRequestSinkSinkDataHubParametersProject;
  roleName?: UpdateEventStreamingRequestSinkSinkDataHubParametersRoleName;
  topic?: UpdateEventStreamingRequestSinkSinkDataHubParametersTopic;
  topicSchema?: UpdateEventStreamingRequestSinkSinkDataHubParametersTopicSchema;
  topicType?: UpdateEventStreamingRequestSinkSinkDataHubParametersTopicType;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      contentSchema: 'ContentSchema',
      contentType: 'ContentType',
      project: 'Project',
      roleName: 'RoleName',
      topic: 'Topic',
      topicSchema: 'TopicSchema',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateEventStreamingRequestSinkSinkDataHubParametersBody,
      contentSchema: UpdateEventStreamingRequestSinkSinkDataHubParametersContentSchema,
      contentType: UpdateEventStreamingRequestSinkSinkDataHubParametersContentType,
      project: UpdateEventStreamingRequestSinkSinkDataHubParametersProject,
      roleName: UpdateEventStreamingRequestSinkSinkDataHubParametersRoleName,
      topic: UpdateEventStreamingRequestSinkSinkDataHubParametersTopic,
      topicSchema: UpdateEventStreamingRequestSinkSinkDataHubParametersTopicSchema,
      topicType: UpdateEventStreamingRequestSinkSinkDataHubParametersTopicType,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkFcParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkFcParametersConcurrency extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkFcParametersFunctionName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkFcParametersInvocationType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkFcParametersQualifier extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkFcParametersServiceName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkFcParameters extends $tea.Model {
  body?: UpdateEventStreamingRequestSinkSinkFcParametersBody;
  concurrency?: UpdateEventStreamingRequestSinkSinkFcParametersConcurrency;
  functionName?: UpdateEventStreamingRequestSinkSinkFcParametersFunctionName;
  invocationType?: UpdateEventStreamingRequestSinkSinkFcParametersInvocationType;
  qualifier?: UpdateEventStreamingRequestSinkSinkFcParametersQualifier;
  serviceName?: UpdateEventStreamingRequestSinkSinkFcParametersServiceName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      concurrency: 'Concurrency',
      functionName: 'FunctionName',
      invocationType: 'InvocationType',
      qualifier: 'Qualifier',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateEventStreamingRequestSinkSinkFcParametersBody,
      concurrency: UpdateEventStreamingRequestSinkSinkFcParametersConcurrency,
      functionName: UpdateEventStreamingRequestSinkSinkFcParametersFunctionName,
      invocationType: UpdateEventStreamingRequestSinkSinkFcParametersInvocationType,
      qualifier: UpdateEventStreamingRequestSinkSinkFcParametersQualifier,
      serviceName: UpdateEventStreamingRequestSinkSinkFcParametersServiceName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkFnfParametersExecutionName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkFnfParametersFlowName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkFnfParametersInput extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkFnfParametersRoleName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkFnfParameters extends $tea.Model {
  executionName?: UpdateEventStreamingRequestSinkSinkFnfParametersExecutionName;
  flowName?: UpdateEventStreamingRequestSinkSinkFnfParametersFlowName;
  input?: UpdateEventStreamingRequestSinkSinkFnfParametersInput;
  roleName?: UpdateEventStreamingRequestSinkSinkFnfParametersRoleName;
  static names(): { [key: string]: string } {
    return {
      executionName: 'ExecutionName',
      flowName: 'FlowName',
      input: 'Input',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionName: UpdateEventStreamingRequestSinkSinkFnfParametersExecutionName,
      flowName: UpdateEventStreamingRequestSinkSinkFnfParametersFlowName,
      input: UpdateEventStreamingRequestSinkSinkFnfParametersInput,
      roleName: UpdateEventStreamingRequestSinkSinkFnfParametersRoleName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkKafkaParametersAcks extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkKafkaParametersInstanceId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkKafkaParametersKey extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkKafkaParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkKafkaParametersValue extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkKafkaParameters extends $tea.Model {
  acks?: UpdateEventStreamingRequestSinkSinkKafkaParametersAcks;
  instanceId?: UpdateEventStreamingRequestSinkSinkKafkaParametersInstanceId;
  key?: UpdateEventStreamingRequestSinkSinkKafkaParametersKey;
  topic?: UpdateEventStreamingRequestSinkSinkKafkaParametersTopic;
  value?: UpdateEventStreamingRequestSinkSinkKafkaParametersValue;
  static names(): { [key: string]: string } {
    return {
      acks: 'Acks',
      instanceId: 'InstanceId',
      key: 'Key',
      topic: 'Topic',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acks: UpdateEventStreamingRequestSinkSinkKafkaParametersAcks,
      instanceId: UpdateEventStreamingRequestSinkSinkKafkaParametersInstanceId,
      key: UpdateEventStreamingRequestSinkSinkKafkaParametersKey,
      topic: UpdateEventStreamingRequestSinkSinkKafkaParametersTopic,
      value: UpdateEventStreamingRequestSinkSinkKafkaParametersValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkMNSParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkMNSParametersQueueName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkMNSParameters extends $tea.Model {
  body?: UpdateEventStreamingRequestSinkSinkMNSParametersBody;
  isBase64Encode?: UpdateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode;
  queueName?: UpdateEventStreamingRequestSinkSinkMNSParametersQueueName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      isBase64Encode: 'IsBase64Encode',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateEventStreamingRequestSinkSinkMNSParametersBody,
      isBase64Encode: UpdateEventStreamingRequestSinkSinkMNSParametersIsBase64Encode,
      queueName: UpdateEventStreamingRequestSinkSinkMNSParametersQueueName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersData extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersNetworkType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersPassword extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersURL extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersUsername extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkPrometheusParametersVpcId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkPrometheusParameters extends $tea.Model {
  authorizationType?: UpdateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType;
  data?: UpdateEventStreamingRequestSinkSinkPrometheusParametersData;
  headerParameters?: UpdateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters;
  networkType?: UpdateEventStreamingRequestSinkSinkPrometheusParametersNetworkType;
  password?: UpdateEventStreamingRequestSinkSinkPrometheusParametersPassword;
  securityGroupId?: UpdateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId;
  URL?: UpdateEventStreamingRequestSinkSinkPrometheusParametersURL;
  username?: UpdateEventStreamingRequestSinkSinkPrometheusParametersUsername;
  vSwitchId?: UpdateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId;
  vpcId?: UpdateEventStreamingRequestSinkSinkPrometheusParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      authorizationType: 'AuthorizationType',
      data: 'Data',
      headerParameters: 'HeaderParameters',
      networkType: 'NetworkType',
      password: 'Password',
      securityGroupId: 'SecurityGroupId',
      URL: 'URL',
      username: 'Username',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationType: UpdateEventStreamingRequestSinkSinkPrometheusParametersAuthorizationType,
      data: UpdateEventStreamingRequestSinkSinkPrometheusParametersData,
      headerParameters: UpdateEventStreamingRequestSinkSinkPrometheusParametersHeaderParameters,
      networkType: UpdateEventStreamingRequestSinkSinkPrometheusParametersNetworkType,
      password: UpdateEventStreamingRequestSinkSinkPrometheusParametersPassword,
      securityGroupId: UpdateEventStreamingRequestSinkSinkPrometheusParametersSecurityGroupId,
      URL: UpdateEventStreamingRequestSinkSinkPrometheusParametersURL,
      username: UpdateEventStreamingRequestSinkSinkPrometheusParametersUsername,
      vSwitchId: UpdateEventStreamingRequestSinkSinkPrometheusParametersVSwitchId,
      vpcId: UpdateEventStreamingRequestSinkSinkPrometheusParametersVpcId,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersExchange extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersMessageId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersProperties extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersQueueName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersTargetType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRabbitMQParameters extends $tea.Model {
  body?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersBody;
  exchange?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersExchange;
  instanceId?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId;
  messageId?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersMessageId;
  properties?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersProperties;
  queueName?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersQueueName;
  routingKey?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey;
  targetType?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersTargetType;
  virtualHostName?: UpdateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      exchange: 'Exchange',
      instanceId: 'InstanceId',
      messageId: 'MessageId',
      properties: 'Properties',
      queueName: 'QueueName',
      routingKey: 'RoutingKey',
      targetType: 'TargetType',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateEventStreamingRequestSinkSinkRabbitMQParametersBody,
      exchange: UpdateEventStreamingRequestSinkSinkRabbitMQParametersExchange,
      instanceId: UpdateEventStreamingRequestSinkSinkRabbitMQParametersInstanceId,
      messageId: UpdateEventStreamingRequestSinkSinkRabbitMQParametersMessageId,
      properties: UpdateEventStreamingRequestSinkSinkRabbitMQParametersProperties,
      queueName: UpdateEventStreamingRequestSinkSinkRabbitMQParametersQueueName,
      routingKey: UpdateEventStreamingRequestSinkSinkRabbitMQParametersRoutingKey,
      targetType: UpdateEventStreamingRequestSinkSinkRabbitMQParametersTargetType,
      virtualHostName: UpdateEventStreamingRequestSinkSinkRabbitMQParametersVirtualHostName,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceType extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersKeys extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersNetwork extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersProperties extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersTags extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRocketMQParametersVpcId extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkRocketMQParameters extends $tea.Model {
  body?: UpdateEventStreamingRequestSinkSinkRocketMQParametersBody;
  instanceEndpoint?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint;
  instanceId?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceId;
  instancePassword?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword;
  instanceType?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceType;
  instanceUsername?: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername;
  keys?: UpdateEventStreamingRequestSinkSinkRocketMQParametersKeys;
  network?: UpdateEventStreamingRequestSinkSinkRocketMQParametersNetwork;
  properties?: UpdateEventStreamingRequestSinkSinkRocketMQParametersProperties;
  securityGroupId?: UpdateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId;
  tags?: UpdateEventStreamingRequestSinkSinkRocketMQParametersTags;
  topic?: UpdateEventStreamingRequestSinkSinkRocketMQParametersTopic;
  vSwitchIds?: UpdateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds;
  vpcId?: UpdateEventStreamingRequestSinkSinkRocketMQParametersVpcId;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instancePassword: 'InstancePassword',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      keys: 'Keys',
      network: 'Network',
      properties: 'Properties',
      securityGroupId: 'SecurityGroupId',
      tags: 'Tags',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateEventStreamingRequestSinkSinkRocketMQParametersBody,
      instanceEndpoint: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceEndpoint,
      instanceId: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceId,
      instancePassword: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstancePassword,
      instanceType: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceType,
      instanceUsername: UpdateEventStreamingRequestSinkSinkRocketMQParametersInstanceUsername,
      keys: UpdateEventStreamingRequestSinkSinkRocketMQParametersKeys,
      network: UpdateEventStreamingRequestSinkSinkRocketMQParametersNetwork,
      properties: UpdateEventStreamingRequestSinkSinkRocketMQParametersProperties,
      securityGroupId: UpdateEventStreamingRequestSinkSinkRocketMQParametersSecurityGroupId,
      tags: UpdateEventStreamingRequestSinkSinkRocketMQParametersTags,
      topic: UpdateEventStreamingRequestSinkSinkRocketMQParametersTopic,
      vSwitchIds: UpdateEventStreamingRequestSinkSinkRocketMQParametersVSwitchIds,
      vpcId: UpdateEventStreamingRequestSinkSinkRocketMQParametersVpcId,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkSLSParametersBody extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkSLSParametersLogStore extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkSLSParametersProject extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkSLSParametersRoleName extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkSLSParametersTopic extends $tea.Model {
  form?: string;
  template?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSinkSinkSLSParameters extends $tea.Model {
  body?: UpdateEventStreamingRequestSinkSinkSLSParametersBody;
  logStore?: UpdateEventStreamingRequestSinkSinkSLSParametersLogStore;
  project?: UpdateEventStreamingRequestSinkSinkSLSParametersProject;
  roleName?: UpdateEventStreamingRequestSinkSinkSLSParametersRoleName;
  topic?: UpdateEventStreamingRequestSinkSinkSLSParametersTopic;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      logStore: 'LogStore',
      project: 'Project',
      roleName: 'RoleName',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateEventStreamingRequestSinkSinkSLSParametersBody,
      logStore: UpdateEventStreamingRequestSinkSinkSLSParametersLogStore,
      project: UpdateEventStreamingRequestSinkSinkSLSParametersProject,
      roleName: UpdateEventStreamingRequestSinkSinkSLSParametersRoleName,
      topic: UpdateEventStreamingRequestSinkSinkSLSParametersTopic,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSink extends $tea.Model {
  sinkCustomizedKafkaConnectorParameters?: UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters;
  sinkCustomizedKafkaParameters?: UpdateEventStreamingRequestSinkSinkCustomizedKafkaParameters;
  sinkDashVectorParameters?: UpdateEventStreamingRequestSinkSinkDashVectorParameters;
  sinkDataHubParameters?: UpdateEventStreamingRequestSinkSinkDataHubParameters;
  sinkFcParameters?: UpdateEventStreamingRequestSinkSinkFcParameters;
  sinkFnfParameters?: UpdateEventStreamingRequestSinkSinkFnfParameters;
  sinkKafkaParameters?: UpdateEventStreamingRequestSinkSinkKafkaParameters;
  sinkMNSParameters?: UpdateEventStreamingRequestSinkSinkMNSParameters;
  sinkPrometheusParameters?: UpdateEventStreamingRequestSinkSinkPrometheusParameters;
  sinkRabbitMQParameters?: UpdateEventStreamingRequestSinkSinkRabbitMQParameters;
  sinkRocketMQParameters?: UpdateEventStreamingRequestSinkSinkRocketMQParameters;
  sinkSLSParameters?: UpdateEventStreamingRequestSinkSinkSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sinkCustomizedKafkaConnectorParameters: 'SinkCustomizedKafkaConnectorParameters',
      sinkCustomizedKafkaParameters: 'SinkCustomizedKafkaParameters',
      sinkDashVectorParameters: 'SinkDashVectorParameters',
      sinkDataHubParameters: 'SinkDataHubParameters',
      sinkFcParameters: 'SinkFcParameters',
      sinkFnfParameters: 'SinkFnfParameters',
      sinkKafkaParameters: 'SinkKafkaParameters',
      sinkMNSParameters: 'SinkMNSParameters',
      sinkPrometheusParameters: 'SinkPrometheusParameters',
      sinkRabbitMQParameters: 'SinkRabbitMQParameters',
      sinkRocketMQParameters: 'SinkRocketMQParameters',
      sinkSLSParameters: 'SinkSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sinkCustomizedKafkaConnectorParameters: UpdateEventStreamingRequestSinkSinkCustomizedKafkaConnectorParameters,
      sinkCustomizedKafkaParameters: UpdateEventStreamingRequestSinkSinkCustomizedKafkaParameters,
      sinkDashVectorParameters: UpdateEventStreamingRequestSinkSinkDashVectorParameters,
      sinkDataHubParameters: UpdateEventStreamingRequestSinkSinkDataHubParameters,
      sinkFcParameters: UpdateEventStreamingRequestSinkSinkFcParameters,
      sinkFnfParameters: UpdateEventStreamingRequestSinkSinkFnfParameters,
      sinkKafkaParameters: UpdateEventStreamingRequestSinkSinkKafkaParameters,
      sinkMNSParameters: UpdateEventStreamingRequestSinkSinkMNSParameters,
      sinkPrometheusParameters: UpdateEventStreamingRequestSinkSinkPrometheusParameters,
      sinkRabbitMQParameters: UpdateEventStreamingRequestSinkSinkRabbitMQParameters,
      sinkRocketMQParameters: UpdateEventStreamingRequestSinkSinkRocketMQParameters,
      sinkSLSParameters: UpdateEventStreamingRequestSinkSinkSLSParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSourceSourceApacheKafkaParameters extends $tea.Model {
  bootstraps?: string;
  consumerGroup?: string;
  networkType?: string;
  offsetReset?: string;
  saslMechanism?: string;
  saslPassword?: string;
  saslUser?: string;
  securityGroupId?: string;
  securityProtocol?: string;
  topic?: string;
  vSwitchIds?: string;
  valueDataType?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      bootstraps: 'Bootstraps',
      consumerGroup: 'ConsumerGroup',
      networkType: 'NetworkType',
      offsetReset: 'OffsetReset',
      saslMechanism: 'SaslMechanism',
      saslPassword: 'SaslPassword',
      saslUser: 'SaslUser',
      securityGroupId: 'SecurityGroupId',
      securityProtocol: 'SecurityProtocol',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      valueDataType: 'ValueDataType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootstraps: 'string',
      consumerGroup: 'string',
      networkType: 'string',
      offsetReset: 'string',
      saslMechanism: 'string',
      saslPassword: 'string',
      saslUser: 'string',
      securityGroupId: 'string',
      securityProtocol: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      valueDataType: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParametersConnectorParameters extends $tea.Model {
  config?: { [key: string]: any };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters extends $tea.Model {
  connectorPackageUrl?: string;
  connectorParameters?: UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParametersConnectorParameters;
  workerParameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      connectorPackageUrl: 'ConnectorPackageUrl',
      connectorParameters: 'ConnectorParameters',
      workerParameters: 'WorkerParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorPackageUrl: 'string',
      connectorParameters: UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParametersConnectorParameters,
      workerParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSourceSourceCustomizedKafkaParameters extends $tea.Model {
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

export class UpdateEventStreamingRequestSourceSourceDTSParameters extends $tea.Model {
  brokerUrl?: string;
  initCheckPoint?: number;
  password?: string;
  sid?: string;
  taskId?: string;
  topic?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      brokerUrl: 'BrokerUrl',
      initCheckPoint: 'InitCheckPoint',
      password: 'Password',
      sid: 'Sid',
      taskId: 'TaskId',
      topic: 'Topic',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerUrl: 'string',
      initCheckPoint: 'number',
      password: 'string',
      sid: 'string',
      taskId: 'string',
      topic: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSourceSourceKafkaParameters extends $tea.Model {
  consumerGroup?: string;
  instanceId?: string;
  network?: string;
  offsetReset?: string;
  regionId?: string;
  securityGroupId?: string;
  topic?: string;
  vSwitchIds?: string;
  valueDataType?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      network: 'Network',
      offsetReset: 'OffsetReset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      valueDataType: 'ValueDataType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      network: 'string',
      offsetReset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      valueDataType: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSourceSourceMNSParameters extends $tea.Model {
  isBase64Decode?: boolean;
  queueName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      isBase64Decode: 'IsBase64Decode',
      queueName: 'QueueName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBase64Decode: 'boolean',
      queueName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSourceSourceMQTTParameters extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSourceSourcePrometheusParameters extends $tea.Model {
  clusterId?: string;
  dataType?: string;
  labels?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dataType: 'DataType',
      labels: 'Labels',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dataType: 'string',
      labels: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSourceSourceRabbitMQParameters extends $tea.Model {
  instanceId?: string;
  queueName?: string;
  regionId?: string;
  virtualHostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queueName: 'QueueName',
      regionId: 'RegionId',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queueName: 'string',
      regionId: 'string',
      virtualHostName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSourceSourceRocketMQParameters extends $tea.Model {
  authType?: string;
  bodyDataType?: string;
  filterSql?: string;
  filterType?: string;
  groupID?: string;
  instanceEndpoint?: string;
  instanceId?: string;
  instanceNetwork?: string;
  instancePassword?: string;
  instanceSecurityGroupId?: string;
  instanceType?: string;
  instanceUsername?: string;
  instanceVSwitchIds?: string;
  instanceVpcId?: string;
  network?: string;
  offset?: string;
  regionId?: string;
  securityGroupId?: string;
  tag?: string;
  timestamp?: number;
  topic?: string;
  vSwitchIds?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      bodyDataType: 'BodyDataType',
      filterSql: 'FilterSql',
      filterType: 'FilterType',
      groupID: 'GroupID',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instanceNetwork: 'InstanceNetwork',
      instancePassword: 'InstancePassword',
      instanceSecurityGroupId: 'InstanceSecurityGroupId',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      instanceVSwitchIds: 'InstanceVSwitchIds',
      instanceVpcId: 'InstanceVpcId',
      network: 'Network',
      offset: 'Offset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      timestamp: 'Timestamp',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      bodyDataType: 'string',
      filterSql: 'string',
      filterType: 'string',
      groupID: 'string',
      instanceEndpoint: 'string',
      instanceId: 'string',
      instanceNetwork: 'string',
      instancePassword: 'string',
      instanceSecurityGroupId: 'string',
      instanceType: 'string',
      instanceUsername: 'string',
      instanceVSwitchIds: 'string',
      instanceVpcId: 'string',
      network: 'string',
      offset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      tag: 'string',
      timestamp: 'number',
      topic: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSourceSourceSLSParameters extends $tea.Model {
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestSource extends $tea.Model {
  sourceApacheKafkaParameters?: UpdateEventStreamingRequestSourceSourceApacheKafkaParameters;
  sourceCustomizedKafkaConnectorParameters?: UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters;
  sourceCustomizedKafkaParameters?: UpdateEventStreamingRequestSourceSourceCustomizedKafkaParameters;
  sourceDTSParameters?: UpdateEventStreamingRequestSourceSourceDTSParameters;
  sourceKafkaParameters?: UpdateEventStreamingRequestSourceSourceKafkaParameters;
  sourceMNSParameters?: UpdateEventStreamingRequestSourceSourceMNSParameters;
  sourceMQTTParameters?: UpdateEventStreamingRequestSourceSourceMQTTParameters;
  sourcePrometheusParameters?: UpdateEventStreamingRequestSourceSourcePrometheusParameters;
  sourceRabbitMQParameters?: UpdateEventStreamingRequestSourceSourceRabbitMQParameters;
  sourceRocketMQParameters?: UpdateEventStreamingRequestSourceSourceRocketMQParameters;
  sourceSLSParameters?: UpdateEventStreamingRequestSourceSourceSLSParameters;
  static names(): { [key: string]: string } {
    return {
      sourceApacheKafkaParameters: 'SourceApacheKafkaParameters',
      sourceCustomizedKafkaConnectorParameters: 'SourceCustomizedKafkaConnectorParameters',
      sourceCustomizedKafkaParameters: 'SourceCustomizedKafkaParameters',
      sourceDTSParameters: 'SourceDTSParameters',
      sourceKafkaParameters: 'SourceKafkaParameters',
      sourceMNSParameters: 'SourceMNSParameters',
      sourceMQTTParameters: 'SourceMQTTParameters',
      sourcePrometheusParameters: 'SourcePrometheusParameters',
      sourceRabbitMQParameters: 'SourceRabbitMQParameters',
      sourceRocketMQParameters: 'SourceRocketMQParameters',
      sourceSLSParameters: 'SourceSLSParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceApacheKafkaParameters: UpdateEventStreamingRequestSourceSourceApacheKafkaParameters,
      sourceCustomizedKafkaConnectorParameters: UpdateEventStreamingRequestSourceSourceCustomizedKafkaConnectorParameters,
      sourceCustomizedKafkaParameters: UpdateEventStreamingRequestSourceSourceCustomizedKafkaParameters,
      sourceDTSParameters: UpdateEventStreamingRequestSourceSourceDTSParameters,
      sourceKafkaParameters: UpdateEventStreamingRequestSourceSourceKafkaParameters,
      sourceMNSParameters: UpdateEventStreamingRequestSourceSourceMNSParameters,
      sourceMQTTParameters: UpdateEventStreamingRequestSourceSourceMQTTParameters,
      sourcePrometheusParameters: UpdateEventStreamingRequestSourceSourcePrometheusParameters,
      sourceRabbitMQParameters: UpdateEventStreamingRequestSourceSourceRabbitMQParameters,
      sourceRocketMQParameters: UpdateEventStreamingRequestSourceSourceRocketMQParameters,
      sourceSLSParameters: UpdateEventStreamingRequestSourceSourceSLSParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventStreamingRequestTransforms extends $tea.Model {
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
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
    this._endpoint = this.getEndpoint("eventbridge", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary Creates an API destination.
   *
   * @description You can call this API operation to create an API destination.
   *
   * @param tmpReq CreateApiDestinationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateApiDestinationResponse
   */
  async createApiDestinationWithOptions(tmpReq: CreateApiDestinationRequest, runtime: $Util.RuntimeOptions): Promise<CreateApiDestinationResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateApiDestinationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.httpApiParameters)) {
      request.httpApiParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.httpApiParameters, "HttpApiParameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.apiDestinationName)) {
      query["ApiDestinationName"] = request.apiDestinationName;
    }

    if (!Util.isUnset(request.connectionName)) {
      query["ConnectionName"] = request.connectionName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.httpApiParametersShrink)) {
      query["HttpApiParameters"] = request.httpApiParametersShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApiDestination",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApiDestinationResponse>(await this.callApi(params, req, runtime), new CreateApiDestinationResponse({}));
  }

  /**
   * @summary Creates an API destination.
   *
   * @description You can call this API operation to create an API destination.
   *
   * @param request CreateApiDestinationRequest
   * @return CreateApiDestinationResponse
   */
  async createApiDestination(request: CreateApiDestinationRequest): Promise<CreateApiDestinationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApiDestinationWithOptions(request, runtime);
  }

  /**
   * @summary Creates a connection.
   *
   * @description You can call this API operation to create a connection.
   *
   * @param tmpReq CreateConnectionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateConnectionResponse
   */
  async createConnectionWithOptions(tmpReq: CreateConnectionRequest, runtime: $Util.RuntimeOptions): Promise<CreateConnectionResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateConnectionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.authParameters)) {
      request.authParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authParameters, "AuthParameters", "json");
    }

    if (!Util.isUnset(tmpReq.networkParameters)) {
      request.networkParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networkParameters, "NetworkParameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.authParametersShrink)) {
      query["AuthParameters"] = request.authParametersShrink;
    }

    if (!Util.isUnset(request.connectionName)) {
      query["ConnectionName"] = request.connectionName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.networkParametersShrink)) {
      query["NetworkParameters"] = request.networkParametersShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateConnection",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateConnectionResponse>(await this.callApi(params, req, runtime), new CreateConnectionResponse({}));
  }

  /**
   * @summary Creates a connection.
   *
   * @description You can call this API operation to create a connection.
   *
   * @param request CreateConnectionRequest
   * @return CreateConnectionResponse
   */
  async createConnection(request: CreateConnectionRequest): Promise<CreateConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConnectionWithOptions(request, runtime);
  }

  /**
   * @summary Creates an event bus.
   *
   * @description You can call this API operation to create an event bus.
   *
   * @param request CreateEventBusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateEventBusResponse
   */
  async createEventBusWithOptions(request: CreateEventBusRequest, runtime: $Util.RuntimeOptions): Promise<CreateEventBusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEventBus",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEventBusResponse>(await this.callApi(params, req, runtime), new CreateEventBusResponse({}));
  }

  /**
   * @summary Creates an event bus.
   *
   * @description You can call this API operation to create an event bus.
   *
   * @param request CreateEventBusRequest
   * @return CreateEventBusResponse
   */
  async createEventBus(request: CreateEventBusRequest): Promise<CreateEventBusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEventBusWithOptions(request, runtime);
  }

  /**
   * @summary Creates an event source.
   *
   * @description You can call this operation to create an event source.
   *
   * @param tmpReq CreateEventSourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateEventSourceResponse
   */
  async createEventSourceWithOptions(tmpReq: CreateEventSourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateEventSourceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateEventSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.externalSourceConfig)) {
      request.externalSourceConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalSourceConfig, "ExternalSourceConfig", "json");
    }

    if (!Util.isUnset(tmpReq.sourceHttpEventParameters)) {
      request.sourceHttpEventParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceHttpEventParameters, "SourceHttpEventParameters", "json");
    }

    if (!Util.isUnset(tmpReq.sourceKafkaParameters)) {
      request.sourceKafkaParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceKafkaParameters, "SourceKafkaParameters", "json");
    }

    if (!Util.isUnset(tmpReq.sourceMNSParameters)) {
      request.sourceMNSParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceMNSParameters, "SourceMNSParameters", "json");
    }

    if (!Util.isUnset(tmpReq.sourceRabbitMQParameters)) {
      request.sourceRabbitMQParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceRabbitMQParameters, "SourceRabbitMQParameters", "json");
    }

    if (!Util.isUnset(tmpReq.sourceRocketMQParameters)) {
      request.sourceRocketMQParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceRocketMQParameters, "SourceRocketMQParameters", "json");
    }

    if (!Util.isUnset(tmpReq.sourceSLSParameters)) {
      request.sourceSLSParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceSLSParameters, "SourceSLSParameters", "json");
    }

    if (!Util.isUnset(tmpReq.sourceScheduledEventParameters)) {
      request.sourceScheduledEventParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceScheduledEventParameters, "SourceScheduledEventParameters", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.eventBusName)) {
      body["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.eventSourceName)) {
      body["EventSourceName"] = request.eventSourceName;
    }

    if (!Util.isUnset(request.externalSourceConfigShrink)) {
      body["ExternalSourceConfig"] = request.externalSourceConfigShrink;
    }

    if (!Util.isUnset(request.externalSourceType)) {
      body["ExternalSourceType"] = request.externalSourceType;
    }

    if (!Util.isUnset(request.linkedExternalSource)) {
      body["LinkedExternalSource"] = request.linkedExternalSource;
    }

    if (!Util.isUnset(request.sourceHttpEventParametersShrink)) {
      body["SourceHttpEventParameters"] = request.sourceHttpEventParametersShrink;
    }

    if (!Util.isUnset(request.sourceKafkaParametersShrink)) {
      body["SourceKafkaParameters"] = request.sourceKafkaParametersShrink;
    }

    if (!Util.isUnset(request.sourceMNSParametersShrink)) {
      body["SourceMNSParameters"] = request.sourceMNSParametersShrink;
    }

    if (!Util.isUnset(request.sourceRabbitMQParametersShrink)) {
      body["SourceRabbitMQParameters"] = request.sourceRabbitMQParametersShrink;
    }

    if (!Util.isUnset(request.sourceRocketMQParametersShrink)) {
      body["SourceRocketMQParameters"] = request.sourceRocketMQParametersShrink;
    }

    if (!Util.isUnset(request.sourceSLSParametersShrink)) {
      body["SourceSLSParameters"] = request.sourceSLSParametersShrink;
    }

    if (!Util.isUnset(request.sourceScheduledEventParametersShrink)) {
      body["SourceScheduledEventParameters"] = request.sourceScheduledEventParametersShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateEventSource",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEventSourceResponse>(await this.callApi(params, req, runtime), new CreateEventSourceResponse({}));
  }

  /**
   * @summary Creates an event source.
   *
   * @description You can call this operation to create an event source.
   *
   * @param request CreateEventSourceRequest
   * @return CreateEventSourceResponse
   */
  async createEventSource(request: CreateEventSourceRequest): Promise<CreateEventSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEventSourceWithOptions(request, runtime);
  }

  /**
   * @summary Creates an event stream.
   *
   * @description You can call this API operation to create an event stream.
   *
   * @param tmpReq CreateEventStreamingRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateEventStreamingResponse
   */
  async createEventStreamingWithOptions(tmpReq: CreateEventStreamingRequest, runtime: $Util.RuntimeOptions): Promise<CreateEventStreamingResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateEventStreamingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.runOptions)) {
      request.runOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.runOptions, "RunOptions", "json");
    }

    if (!Util.isUnset(tmpReq.sink)) {
      request.sinkShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sink, "Sink", "json");
    }

    if (!Util.isUnset(tmpReq.source)) {
      request.sourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.source, "Source", "json");
    }

    if (!Util.isUnset(tmpReq.transforms)) {
      request.transformsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transforms, "Transforms", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.eventStreamingName)) {
      body["EventStreamingName"] = request.eventStreamingName;
    }

    if (!Util.isUnset(request.filterPattern)) {
      body["FilterPattern"] = request.filterPattern;
    }

    if (!Util.isUnset(request.runOptionsShrink)) {
      body["RunOptions"] = request.runOptionsShrink;
    }

    if (!Util.isUnset(request.sinkShrink)) {
      body["Sink"] = request.sinkShrink;
    }

    if (!Util.isUnset(request.sourceShrink)) {
      body["Source"] = request.sourceShrink;
    }

    if (!Util.isUnset(request.transformsShrink)) {
      body["Transforms"] = request.transformsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateEventStreaming",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEventStreamingResponse>(await this.callApi(params, req, runtime), new CreateEventStreamingResponse({}));
  }

  /**
   * @summary Creates an event stream.
   *
   * @description You can call this API operation to create an event stream.
   *
   * @param request CreateEventStreamingRequest
   * @return CreateEventStreamingResponse
   */
  async createEventStreaming(request: CreateEventStreamingRequest): Promise<CreateEventStreamingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEventStreamingWithOptions(request, runtime);
  }

  /**
   * @summary Creates an event rule.
   *
   * @description You can call this API operation to create an event rule.
   *
   * @param tmpReq CreateRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateRuleResponse
   */
  async createRuleWithOptions(tmpReq: CreateRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateRuleResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.eventTargets)) {
      request.eventTargetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventTargets, "EventTargets", "json");
    }

    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.eventTargetsShrink)) {
      query["EventTargets"] = request.eventTargetsShrink;
    }

    if (!Util.isUnset(request.filterPattern)) {
      query["FilterPattern"] = request.filterPattern;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRule",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRuleResponse>(await this.callApi(params, req, runtime), new CreateRuleResponse({}));
  }

  /**
   * @summary Creates an event rule.
   *
   * @description You can call this API operation to create an event rule.
   *
   * @param request CreateRuleRequest
   * @return CreateRuleResponse
   */
  async createRule(request: CreateRuleRequest): Promise<CreateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRuleWithOptions(request, runtime);
  }

  /**
   * @summary Creates a service-linked role for your cloud service.
   *
   * @description You can call this API operation to create a service-linked role for your cloud service.
   *
   * @param request CreateServiceLinkedRoleForProductRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateServiceLinkedRoleForProductResponse
   */
  async createServiceLinkedRoleForProductWithOptions(request: CreateServiceLinkedRoleForProductRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleForProductResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.productName)) {
      query["ProductName"] = request.productName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceLinkedRoleForProduct",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceLinkedRoleForProductResponse>(await this.callApi(params, req, runtime), new CreateServiceLinkedRoleForProductResponse({}));
  }

  /**
   * @summary Creates a service-linked role for your cloud service.
   *
   * @description You can call this API operation to create a service-linked role for your cloud service.
   *
   * @param request CreateServiceLinkedRoleForProductRequest
   * @return CreateServiceLinkedRoleForProductResponse
   */
  async createServiceLinkedRoleForProduct(request: CreateServiceLinkedRoleForProductRequest): Promise<CreateServiceLinkedRoleForProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleForProductWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an API destination.
   *
   * @description You can call this API operation to delete an API destination.
   *
   * @param request DeleteApiDestinationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteApiDestinationResponse
   */
  async deleteApiDestinationWithOptions(request: DeleteApiDestinationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApiDestinationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiDestinationName)) {
      query["ApiDestinationName"] = request.apiDestinationName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApiDestination",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApiDestinationResponse>(await this.callApi(params, req, runtime), new DeleteApiDestinationResponse({}));
  }

  /**
   * @summary Deletes an API destination.
   *
   * @description You can call this API operation to delete an API destination.
   *
   * @param request DeleteApiDestinationRequest
   * @return DeleteApiDestinationResponse
   */
  async deleteApiDestination(request: DeleteApiDestinationRequest): Promise<DeleteApiDestinationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApiDestinationWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a connection.
   *
   * @description You can call this API operation to delete a connection.
   *
   * @param request DeleteConnectionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteConnectionResponse
   */
  async deleteConnectionWithOptions(request: DeleteConnectionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionName)) {
      query["ConnectionName"] = request.connectionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConnection",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteConnectionResponse>(await this.callApi(params, req, runtime), new DeleteConnectionResponse({}));
  }

  /**
   * @summary Deletes a connection.
   *
   * @description You can call this API operation to delete a connection.
   *
   * @param request DeleteConnectionRequest
   * @return DeleteConnectionResponse
   */
  async deleteConnection(request: DeleteConnectionRequest): Promise<DeleteConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConnectionWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an event bus.
   *
   * @description You can call this API operation to delete an event bus.
   *
   * @param request DeleteEventBusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteEventBusResponse
   */
  async deleteEventBusWithOptions(request: DeleteEventBusRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventBusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEventBus",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEventBusResponse>(await this.callApi(params, req, runtime), new DeleteEventBusResponse({}));
  }

  /**
   * @summary Deletes an event bus.
   *
   * @description You can call this API operation to delete an event bus.
   *
   * @param request DeleteEventBusRequest
   * @return DeleteEventBusResponse
   */
  async deleteEventBus(request: DeleteEventBusRequest): Promise<DeleteEventBusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventBusWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an event source.
   *
   * @description You can call this API operation to delete an event source.
   *
   * @param request DeleteEventSourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteEventSourceResponse
   */
  async deleteEventSourceWithOptions(request: DeleteEventSourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eventBusName)) {
      body["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.eventSourceName)) {
      body["EventSourceName"] = request.eventSourceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEventSource",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEventSourceResponse>(await this.callApi(params, req, runtime), new DeleteEventSourceResponse({}));
  }

  /**
   * @summary Deletes an event source.
   *
   * @description You can call this API operation to delete an event source.
   *
   * @param request DeleteEventSourceRequest
   * @return DeleteEventSourceResponse
   */
  async deleteEventSource(request: DeleteEventSourceRequest): Promise<DeleteEventSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventSourceWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an event stream.
   *
   * @description You can call this API operation to delete an event stream.
   *
   * @param request DeleteEventStreamingRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteEventStreamingResponse
   */
  async deleteEventStreamingWithOptions(request: DeleteEventStreamingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEventStreamingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eventStreamingName)) {
      body["EventStreamingName"] = request.eventStreamingName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteEventStreaming",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEventStreamingResponse>(await this.callApi(params, req, runtime), new DeleteEventStreamingResponse({}));
  }

  /**
   * @summary Deletes an event stream.
   *
   * @description You can call this API operation to delete an event stream.
   *
   * @param request DeleteEventStreamingRequest
   * @return DeleteEventStreamingResponse
   */
  async deleteEventStreaming(request: DeleteEventStreamingRequest): Promise<DeleteEventStreamingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEventStreamingWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an event rule.
   *
   * @description You can call this API operation to delete an event rule.
   *
   * @param request DeleteRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteRuleResponse
   */
  async deleteRuleWithOptions(request: DeleteRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRule",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRuleResponse>(await this.callApi(params, req, runtime), new DeleteRuleResponse({}));
  }

  /**
   * @summary Deletes an event rule.
   *
   * @description You can call this API operation to delete an event rule.
   *
   * @param request DeleteRuleRequest
   * @return DeleteRuleResponse
   */
  async deleteRule(request: DeleteRuleRequest): Promise<DeleteRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRuleWithOptions(request, runtime);
  }

  /**
   * @summary Deletes one or more event targets of an event rule.
   *
   * @description You can call this API operation to delete one or more event targets of an event rule.
   *
   * @param tmpReq DeleteTargetsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteTargetsResponse
   */
  async deleteTargetsWithOptions(tmpReq: DeleteTargetsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTargetsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteTargetsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.targetIds)) {
      request.targetIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.targetIds, "TargetIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.targetIdsShrink)) {
      query["TargetIds"] = request.targetIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTargets",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTargetsResponse>(await this.callApi(params, req, runtime), new DeleteTargetsResponse({}));
  }

  /**
   * @summary Deletes one or more event targets of an event rule.
   *
   * @description You can call this API operation to delete one or more event targets of an event rule.
   *
   * @param request DeleteTargetsRequest
   * @return DeleteTargetsResponse
   */
  async deleteTargets(request: DeleteTargetsRequest): Promise<DeleteTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTargetsWithOptions(request, runtime);
  }

  /**
   * @summary Disables an event rule.
   *
   * @description You can call this API operation to disable an event rule.
   *
   * @param request DisableRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableRuleResponse
   */
  async disableRuleWithOptions(request: DisableRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisableRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableRule",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableRuleResponse>(await this.callApi(params, req, runtime), new DisableRuleResponse({}));
  }

  /**
   * @summary Disables an event rule.
   *
   * @description You can call this API operation to disable an event rule.
   *
   * @param request DisableRuleRequest
   * @return DisableRuleResponse
   */
  async disableRule(request: DisableRuleRequest): Promise<DisableRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableRuleWithOptions(request, runtime);
  }

  /**
   * @summary Enables an event rule.
   *
   * @description You can call this API operation to enable an event rule.
   *
   * @param request EnableRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableRuleResponse
   */
  async enableRuleWithOptions(request: EnableRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnableRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableRule",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableRuleResponse>(await this.callApi(params, req, runtime), new EnableRuleResponse({}));
  }

  /**
   * @summary Enables an event rule.
   *
   * @description You can call this API operation to enable an event rule.
   *
   * @param request EnableRuleRequest
   * @return EnableRuleResponse
   */
  async enableRule(request: EnableRuleRequest): Promise<EnableRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableRuleWithOptions(request, runtime);
  }

  /**
   * @summary EventCenterCheckEnabledOnDefaultBus
   *
   * @param request EventCenterCheckEnabledOnDefaultBusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EventCenterCheckEnabledOnDefaultBusResponse
   */
  async eventCenterCheckEnabledOnDefaultBusWithOptions(runtime: $Util.RuntimeOptions): Promise<EventCenterCheckEnabledOnDefaultBusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "EventCenterCheckEnabledOnDefaultBus",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EventCenterCheckEnabledOnDefaultBusResponse>(await this.callApi(params, req, runtime), new EventCenterCheckEnabledOnDefaultBusResponse({}));
  }

  /**
   * @summary EventCenterCheckEnabledOnDefaultBus
   *
   * @return EventCenterCheckEnabledOnDefaultBusResponse
   */
  async eventCenterCheckEnabledOnDefaultBus(): Promise<EventCenterCheckEnabledOnDefaultBusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eventCenterCheckEnabledOnDefaultBusWithOptions(runtime);
  }

  /**
   * @summary EventCenterDisableOnDefaultBus
   *
   * @param request EventCenterDisableOnDefaultBusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EventCenterDisableOnDefaultBusResponse
   */
  async eventCenterDisableOnDefaultBusWithOptions(runtime: $Util.RuntimeOptions): Promise<EventCenterDisableOnDefaultBusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "EventCenterDisableOnDefaultBus",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EventCenterDisableOnDefaultBusResponse>(await this.callApi(params, req, runtime), new EventCenterDisableOnDefaultBusResponse({}));
  }

  /**
   * @summary EventCenterDisableOnDefaultBus
   *
   * @return EventCenterDisableOnDefaultBusResponse
   */
  async eventCenterDisableOnDefaultBus(): Promise<EventCenterDisableOnDefaultBusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eventCenterDisableOnDefaultBusWithOptions(runtime);
  }

  /**
   * @summary EventCenterEnableOnDefaultBus
   *
   * @param request EventCenterEnableOnDefaultBusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EventCenterEnableOnDefaultBusResponse
   */
  async eventCenterEnableOnDefaultBusWithOptions(runtime: $Util.RuntimeOptions): Promise<EventCenterEnableOnDefaultBusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "EventCenterEnableOnDefaultBus",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EventCenterEnableOnDefaultBusResponse>(await this.callApi(params, req, runtime), new EventCenterEnableOnDefaultBusResponse({}));
  }

  /**
   * @summary EventCenterEnableOnDefaultBus
   *
   * @return EventCenterEnableOnDefaultBusResponse
   */
  async eventCenterEnableOnDefaultBus(): Promise<EventCenterEnableOnDefaultBusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eventCenterEnableOnDefaultBusWithOptions(runtime);
  }

  /**
   * @summary EventCenterQueryEvents
   *
   * @param tmpReq EventCenterQueryEventsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EventCenterQueryEventsResponse
   */
  async eventCenterQueryEventsWithOptions(tmpReq: EventCenterQueryEventsRequest, runtime: $Util.RuntimeOptions): Promise<EventCenterQueryEventsResponse> {
    Util.validateModel(tmpReq);
    let request = new EventCenterQueryEventsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "Body", "json");
    }

    let query = { };
    if (!Util.isUnset(request.busName)) {
      query["BusName"] = request.busName;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bodyShrink)) {
      body["Body"] = request.bodyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EventCenterQueryEvents",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EventCenterQueryEventsResponse>(await this.callApi(params, req, runtime), new EventCenterQueryEventsResponse({}));
  }

  /**
   * @summary EventCenterQueryEvents
   *
   * @param request EventCenterQueryEventsRequest
   * @return EventCenterQueryEventsResponse
   */
  async eventCenterQueryEvents(request: EventCenterQueryEventsRequest): Promise<EventCenterQueryEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.eventCenterQueryEventsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about an API destination.
   *
   * @description You can call this API operation to query the information about an API destination.
   *
   * @param request GetApiDestinationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetApiDestinationResponse
   */
  async getApiDestinationWithOptions(request: GetApiDestinationRequest, runtime: $Util.RuntimeOptions): Promise<GetApiDestinationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiDestinationName)) {
      query["ApiDestinationName"] = request.apiDestinationName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApiDestination",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApiDestinationResponse>(await this.callApi(params, req, runtime), new GetApiDestinationResponse({}));
  }

  /**
   * @summary Queries the information about an API destination.
   *
   * @description You can call this API operation to query the information about an API destination.
   *
   * @param request GetApiDestinationRequest
   * @return GetApiDestinationResponse
   */
  async getApiDestination(request: GetApiDestinationRequest): Promise<GetApiDestinationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApiDestinationWithOptions(request, runtime);
  }

  /**
   * @summary Queries the configurations of a connection.
   *
   * @description You can call this API operation to query the configurations of a connection.
   *
   * @param request GetConnectionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetConnectionResponse
   */
  async getConnectionWithOptions(request: GetConnectionRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectionName)) {
      query["ConnectionName"] = request.connectionName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConnection",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConnectionResponse>(await this.callApi(params, req, runtime), new GetConnectionResponse({}));
  }

  /**
   * @summary Queries the configurations of a connection.
   *
   * @description You can call this API operation to query the configurations of a connection.
   *
   * @param request GetConnectionRequest
   * @return GetConnectionResponse
   */
  async getConnection(request: GetConnectionRequest): Promise<GetConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectionWithOptions(request, runtime);
  }

  /**
   * @summary Queries the detailed information about an event bus.
   *
   * @description You can call this API operation to query the detailed information about an event bus.
   *
   * @param request GetEventBusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetEventBusResponse
   */
  async getEventBusWithOptions(request: GetEventBusRequest, runtime: $Util.RuntimeOptions): Promise<GetEventBusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEventBus",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEventBusResponse>(await this.callApi(params, req, runtime), new GetEventBusResponse({}));
  }

  /**
   * @summary Queries the detailed information about an event bus.
   *
   * @description You can call this API operation to query the detailed information about an event bus.
   *
   * @param request GetEventBusRequest
   * @return GetEventBusResponse
   */
  async getEventBus(request: GetEventBusRequest): Promise<GetEventBusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventBusWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of an event stream.
   *
   * @description You can call this API operation to query the details of an event stream.
   *
   * @param request GetEventStreamingRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetEventStreamingResponse
   */
  async getEventStreamingWithOptions(request: GetEventStreamingRequest, runtime: $Util.RuntimeOptions): Promise<GetEventStreamingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eventStreamingName)) {
      body["EventStreamingName"] = request.eventStreamingName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetEventStreaming",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEventStreamingResponse>(await this.callApi(params, req, runtime), new GetEventStreamingResponse({}));
  }

  /**
   * @summary Queries the details of an event stream.
   *
   * @description You can call this API operation to query the details of an event stream.
   *
   * @param request GetEventStreamingRequest
   * @return GetEventStreamingResponse
   */
  async getEventStreaming(request: GetEventStreamingRequest): Promise<GetEventStreamingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEventStreamingWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of an event rule.
   *
   * @description You can call this API operation to query the details of an event rule.
   *
   * @param request GetRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetRuleResponse
   */
  async getRuleWithOptions(request: GetRuleRequest, runtime: $Util.RuntimeOptions): Promise<GetRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRule",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRuleResponse>(await this.callApi(params, req, runtime), new GetRuleResponse({}));
  }

  /**
   * @summary Queries the details of an event rule.
   *
   * @description You can call this API operation to query the details of an event rule.
   *
   * @param request GetRuleRequest
   * @return GetRuleResponse
   */
  async getRule(request: GetRuleRequest): Promise<GetRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRuleWithOptions(request, runtime);
  }

  /**
   * @summary Queries all Alibaba Cloud service event sources.
   *
   * @description You can call this API operation to query all Alibaba Cloud service event sources.
   *
   * @param request ListAliyunOfficialEventSourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListAliyunOfficialEventSourcesResponse
   */
  async listAliyunOfficialEventSourcesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListAliyunOfficialEventSourcesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListAliyunOfficialEventSources",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAliyunOfficialEventSourcesResponse>(await this.callApi(params, req, runtime), new ListAliyunOfficialEventSourcesResponse({}));
  }

  /**
   * @summary Queries all Alibaba Cloud service event sources.
   *
   * @description You can call this API operation to query all Alibaba Cloud service event sources.
   *
   * @return ListAliyunOfficialEventSourcesResponse
   */
  async listAliyunOfficialEventSources(): Promise<ListAliyunOfficialEventSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAliyunOfficialEventSourcesWithOptions(runtime);
  }

  /**
   * @summary Queries a list of API destinations.
   *
   * @description You can use this API operation to query a list of API destinations.
   *
   * @param request ListApiDestinationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListApiDestinationsResponse
   */
  async listApiDestinationsWithOptions(request: ListApiDestinationsRequest, runtime: $Util.RuntimeOptions): Promise<ListApiDestinationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.apiDestinationNamePrefix)) {
      query["ApiDestinationNamePrefix"] = request.apiDestinationNamePrefix;
    }

    if (!Util.isUnset(request.connectionName)) {
      query["ConnectionName"] = request.connectionName;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApiDestinations",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApiDestinationsResponse>(await this.callApi(params, req, runtime), new ListApiDestinationsResponse({}));
  }

  /**
   * @summary Queries a list of API destinations.
   *
   * @description You can use this API operation to query a list of API destinations.
   *
   * @param request ListApiDestinationsRequest
   * @return ListApiDestinationsResponse
   */
  async listApiDestinations(request: ListApiDestinationsRequest): Promise<ListApiDestinationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApiDestinationsWithOptions(request, runtime);
  }

  /**
   * @summary Queries connections.
   *
   * @description You can call this API operation to query connections.
   *
   * @param request ListConnectionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListConnectionsResponse
   */
  async listConnectionsWithOptions(request: ListConnectionsRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.connectionNamePrefix)) {
      body["ConnectionNamePrefix"] = request.connectionNamePrefix;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListConnections",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConnectionsResponse>(await this.callApi(params, req, runtime), new ListConnectionsResponse({}));
  }

  /**
   * @summary Queries connections.
   *
   * @description You can call this API operation to query connections.
   *
   * @param request ListConnectionsRequest
   * @return ListConnectionsResponse
   */
  async listConnections(request: ListConnectionsRequest): Promise<ListConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectionsWithOptions(request, runtime);
  }

  /**
   * @summary Queries all event buses.
   *
   * @description You can call this API operation to query all event buses.
   *
   * @param request ListEventBusesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListEventBusesResponse
   */
  async listEventBusesWithOptions(request: ListEventBusesRequest, runtime: $Util.RuntimeOptions): Promise<ListEventBusesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.namePrefix)) {
      query["NamePrefix"] = request.namePrefix;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEventBuses",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEventBusesResponse>(await this.callApi(params, req, runtime), new ListEventBusesResponse({}));
  }

  /**
   * @summary Queries all event buses.
   *
   * @description You can call this API operation to query all event buses.
   *
   * @param request ListEventBusesRequest
   * @return ListEventBusesResponse
   */
  async listEventBuses(request: ListEventBusesRequest): Promise<ListEventBusesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEventBusesWithOptions(request, runtime);
  }

  /**
   * @summary Queries event streams.
   *
   * @description You can call this API operation to query event streams.
   *
   * @param request ListEventStreamingsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListEventStreamingsResponse
   */
  async listEventStreamingsWithOptions(request: ListEventStreamingsRequest, runtime: $Util.RuntimeOptions): Promise<ListEventStreamingsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.namePrefix)) {
      body["NamePrefix"] = request.namePrefix;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.sinkArn)) {
      body["SinkArn"] = request.sinkArn;
    }

    if (!Util.isUnset(request.sourceArn)) {
      body["SourceArn"] = request.sourceArn;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListEventStreamings",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEventStreamingsResponse>(await this.callApi(params, req, runtime), new ListEventStreamingsResponse({}));
  }

  /**
   * @summary Queries event streams.
   *
   * @description You can call this API operation to query event streams.
   *
   * @param request ListEventStreamingsRequest
   * @return ListEventStreamingsResponse
   */
  async listEventStreamings(request: ListEventStreamingsRequest): Promise<ListEventStreamingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEventStreamingsWithOptions(request, runtime);
  }

  /**
   * @summary Queries all rules of an event bus.
   *
   * @description You can call this API operation to query all rules of an event bus.
   *
   * @param request ListRulesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListRulesResponse
   */
  async listRulesWithOptions(request: ListRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ruleNamePrefix)) {
      query["RuleNamePrefix"] = request.ruleNamePrefix;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRules",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRulesResponse>(await this.callApi(params, req, runtime), new ListRulesResponse({}));
  }

  /**
   * @summary Queries all rules of an event bus.
   *
   * @description You can call this API operation to query all rules of an event bus.
   *
   * @param request ListRulesRequest
   * @return ListRulesResponse
   */
  async listRules(request: ListRulesRequest): Promise<ListRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRulesWithOptions(request, runtime);
  }

  /**
   * @summary Queries all event targets of an event rule.
   *
   * @param request ListTargetsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListTargetsResponse
   */
  async listTargetsWithOptions(request: ListTargetsRequest, runtime: $Util.RuntimeOptions): Promise<ListTargetsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.arn)) {
      query["Arn"] = request.arn;
    }

    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTargets",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTargetsResponse>(await this.callApi(params, req, runtime), new ListTargetsResponse({}));
  }

  /**
   * @summary Queries all event targets of an event rule.
   *
   * @param request ListTargetsRequest
   * @return ListTargetsResponse
   */
  async listTargets(request: ListTargetsRequest): Promise<ListTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTargetsWithOptions(request, runtime);
  }

  /**
   * @summary Queries all custom event sources.
   *
   * @description You can call this API operation to query custom event sources.
   *
   * @param request ListUserDefinedEventSourcesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListUserDefinedEventSourcesResponse
   */
  async listUserDefinedEventSourcesWithOptions(request: ListUserDefinedEventSourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListUserDefinedEventSourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.namePrefix)) {
      query["NamePrefix"] = request.namePrefix;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserDefinedEventSources",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserDefinedEventSourcesResponse>(await this.callApi(params, req, runtime), new ListUserDefinedEventSourcesResponse({}));
  }

  /**
   * @summary Queries all custom event sources.
   *
   * @description You can call this API operation to query custom event sources.
   *
   * @param request ListUserDefinedEventSourcesRequest
   * @return ListUserDefinedEventSourcesResponse
   */
  async listUserDefinedEventSources(request: ListUserDefinedEventSourcesRequest): Promise<ListUserDefinedEventSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserDefinedEventSourcesWithOptions(request, runtime);
  }

  /**
   * @summary Stops an event stream that is running.
   *
   * @description You can call this API operation to stop an event stream that is running.
   *
   * @param request PauseEventStreamingRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PauseEventStreamingResponse
   */
  async pauseEventStreamingWithOptions(request: PauseEventStreamingRequest, runtime: $Util.RuntimeOptions): Promise<PauseEventStreamingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eventStreamingName)) {
      body["EventStreamingName"] = request.eventStreamingName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PauseEventStreaming",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PauseEventStreamingResponse>(await this.callApi(params, req, runtime), new PauseEventStreamingResponse({}));
  }

  /**
   * @summary Stops an event stream that is running.
   *
   * @description You can call this API operation to stop an event stream that is running.
   *
   * @param request PauseEventStreamingRequest
   * @return PauseEventStreamingResponse
   */
  async pauseEventStreaming(request: PauseEventStreamingRequest): Promise<PauseEventStreamingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pauseEventStreamingWithOptions(request, runtime);
  }

  /**
   * @summary Creates or updates event targets under a rule.
   *
   * @description You can call this API operation to create or update event targets under a rule.
   *
   * @param tmpReq PutTargetsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return PutTargetsResponse
   */
  async putTargetsWithOptions(tmpReq: PutTargetsRequest, runtime: $Util.RuntimeOptions): Promise<PutTargetsResponse> {
    Util.validateModel(tmpReq);
    let request = new PutTargetsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.targets)) {
      request.targetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.targets, "Targets", "json");
    }

    let query = { };
    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.targetsShrink)) {
      query["Targets"] = request.targetsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutTargets",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PutTargetsResponse>(await this.callApi(params, req, runtime), new PutTargetsResponse({}));
  }

  /**
   * @summary Creates or updates event targets under a rule.
   *
   * @description You can call this API operation to create or update event targets under a rule.
   *
   * @param request PutTargetsRequest
   * @return PutTargetsResponse
   */
  async putTargets(request: PutTargetsRequest): Promise<PutTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putTargetsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the content of an event.
   *
   * @description You can call this API operation to query the content of an event.
   *
   * @param request QueryEventRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryEventResponse
   */
  async queryEventWithOptions(request: QueryEventRequest, runtime: $Util.RuntimeOptions): Promise<QueryEventResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.eventSource)) {
      query["EventSource"] = request.eventSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryEvent",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryEventResponse>(await this.callApi(params, req, runtime), new QueryEventResponse({}));
  }

  /**
   * @summary Queries the content of an event.
   *
   * @description You can call this API operation to query the content of an event.
   *
   * @param request QueryEventRequest
   * @return QueryEventResponse
   */
  async queryEvent(request: QueryEventRequest): Promise<QueryEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEventWithOptions(request, runtime);
  }

  /**
   * @summary Queries event traces.
   *
   * @description You can call this API operation to query event traces.
   *
   * @param request QueryEventTracesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryEventTracesResponse
   */
  async queryEventTracesWithOptions(request: QueryEventTracesRequest, runtime: $Util.RuntimeOptions): Promise<QueryEventTracesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryEventTraces",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryEventTracesResponse>(await this.callApi(params, req, runtime), new QueryEventTracesResponse({}));
  }

  /**
   * @summary Queries event traces.
   *
   * @description You can call this API operation to query event traces.
   *
   * @param request QueryEventTracesRequest
   * @return QueryEventTracesResponse
   */
  async queryEventTraces(request: QueryEventTracesRequest): Promise<QueryEventTracesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEventTracesWithOptions(request, runtime);
  }

  /**
   * @summary Queries event traces by event ID.
   *
   * @description You can call this API operation to query event traces by event ID.
   *
   * @param request QueryTracedEventByEventIdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryTracedEventByEventIdResponse
   */
  async queryTracedEventByEventIdWithOptions(request: QueryTracedEventByEventIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryTracedEventByEventIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!Util.isUnset(request.eventSource)) {
      query["EventSource"] = request.eventSource;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTracedEventByEventId",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTracedEventByEventIdResponse>(await this.callApi(params, req, runtime), new QueryTracedEventByEventIdResponse({}));
  }

  /**
   * @summary Queries event traces by event ID.
   *
   * @description You can call this API operation to query event traces by event ID.
   *
   * @param request QueryTracedEventByEventIdRequest
   * @return QueryTracedEventByEventIdResponse
   */
  async queryTracedEventByEventId(request: QueryTracedEventByEventIdRequest): Promise<QueryTracedEventByEventIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTracedEventByEventIdWithOptions(request, runtime);
  }

  /**
   * @summary Queries event traces by time range.
   *
   * @description You can call this API operation to query event traces by time range.
   *
   * @param request QueryTracedEventsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryTracedEventsResponse
   */
  async queryTracedEventsWithOptions(request: QueryTracedEventsRequest, runtime: $Util.RuntimeOptions): Promise<QueryTracedEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.eventSource)) {
      query["EventSource"] = request.eventSource;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.matchedRule)) {
      query["MatchedRule"] = request.matchedRule;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryTracedEvents",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryTracedEventsResponse>(await this.callApi(params, req, runtime), new QueryTracedEventsResponse({}));
  }

  /**
   * @summary Queries event traces by time range.
   *
   * @description You can call this API operation to query event traces by time range.
   *
   * @param request QueryTracedEventsRequest
   * @return QueryTracedEventsResponse
   */
  async queryTracedEvents(request: QueryTracedEventsRequest): Promise<QueryTracedEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryTracedEventsWithOptions(request, runtime);
  }

  /**
   * @summary Enables a created or deactivated event stream.
   *
   * @description You can call this API operation to enable a created or deactivated event stream.
   *
   * @param request StartEventStreamingRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StartEventStreamingResponse
   */
  async startEventStreamingWithOptions(request: StartEventStreamingRequest, runtime: $Util.RuntimeOptions): Promise<StartEventStreamingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.eventStreamingName)) {
      body["EventStreamingName"] = request.eventStreamingName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartEventStreaming",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartEventStreamingResponse>(await this.callApi(params, req, runtime), new StartEventStreamingResponse({}));
  }

  /**
   * @summary Enables a created or deactivated event stream.
   *
   * @description You can call this API operation to enable a created or deactivated event stream.
   *
   * @param request StartEventStreamingRequest
   * @return StartEventStreamingResponse
   */
  async startEventStreaming(request: StartEventStreamingRequest): Promise<StartEventStreamingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startEventStreamingWithOptions(request, runtime);
  }

  /**
   * @summary Checks whether the event pattern matches the provided JSON format.
   *
   * @description You can call this API operation to check whether the event pattern matches the provided JSON format.
   *
   * @param request TestEventPatternRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TestEventPatternResponse
   */
  async testEventPatternWithOptions(request: TestEventPatternRequest, runtime: $Util.RuntimeOptions): Promise<TestEventPatternResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.event)) {
      body["Event"] = request.event;
    }

    if (!Util.isUnset(request.eventPattern)) {
      body["EventPattern"] = request.eventPattern;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TestEventPattern",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TestEventPatternResponse>(await this.callApi(params, req, runtime), new TestEventPatternResponse({}));
  }

  /**
   * @summary Checks whether the event pattern matches the provided JSON format.
   *
   * @description You can call this API operation to check whether the event pattern matches the provided JSON format.
   *
   * @param request TestEventPatternRequest
   * @return TestEventPatternResponse
   */
  async testEventPattern(request: TestEventPatternRequest): Promise<TestEventPatternResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.testEventPatternWithOptions(request, runtime);
  }

  /**
   * @summary Updates an API destination.
   *
   * @description You can call this API operation to update an API destination.
   *
   * @param tmpReq UpdateApiDestinationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateApiDestinationResponse
   */
  async updateApiDestinationWithOptions(tmpReq: UpdateApiDestinationRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApiDestinationResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateApiDestinationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.httpApiParameters)) {
      request.httpApiParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.httpApiParameters, "HttpApiParameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.apiDestinationName)) {
      query["ApiDestinationName"] = request.apiDestinationName;
    }

    if (!Util.isUnset(request.connectionName)) {
      query["ConnectionName"] = request.connectionName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.httpApiParametersShrink)) {
      query["HttpApiParameters"] = request.httpApiParametersShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApiDestination",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateApiDestinationResponse>(await this.callApi(params, req, runtime), new UpdateApiDestinationResponse({}));
  }

  /**
   * @summary Updates an API destination.
   *
   * @description You can call this API operation to update an API destination.
   *
   * @param request UpdateApiDestinationRequest
   * @return UpdateApiDestinationResponse
   */
  async updateApiDestination(request: UpdateApiDestinationRequest): Promise<UpdateApiDestinationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApiDestinationWithOptions(request, runtime);
  }

  /**
   * @summary Updates a connection.
   *
   * @description You can call this API operation to update a connection.
   *
   * @param tmpReq UpdateConnectionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateConnectionResponse
   */
  async updateConnectionWithOptions(tmpReq: UpdateConnectionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConnectionResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateConnectionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.authParameters)) {
      request.authParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authParameters, "AuthParameters", "json");
    }

    if (!Util.isUnset(tmpReq.networkParameters)) {
      request.networkParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networkParameters, "NetworkParameters", "json");
    }

    let query = { };
    if (!Util.isUnset(request.authParametersShrink)) {
      query["AuthParameters"] = request.authParametersShrink;
    }

    if (!Util.isUnset(request.connectionName)) {
      query["ConnectionName"] = request.connectionName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.networkParametersShrink)) {
      query["NetworkParameters"] = request.networkParametersShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConnection",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateConnectionResponse>(await this.callApi(params, req, runtime), new UpdateConnectionResponse({}));
  }

  /**
   * @summary Updates a connection.
   *
   * @description You can call this API operation to update a connection.
   *
   * @param request UpdateConnectionRequest
   * @return UpdateConnectionResponse
   */
  async updateConnection(request: UpdateConnectionRequest): Promise<UpdateConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConnectionWithOptions(request, runtime);
  }

  /**
   * @summary Modifies an event bus.
   *
   * @description You can call this API operation to modify an event bus.
   *
   * @param request UpdateEventBusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateEventBusResponse
   */
  async updateEventBusWithOptions(request: UpdateEventBusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEventBusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEventBus",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEventBusResponse>(await this.callApi(params, req, runtime), new UpdateEventBusResponse({}));
  }

  /**
   * @summary Modifies an event bus.
   *
   * @description You can call this API operation to modify an event bus.
   *
   * @param request UpdateEventBusRequest
   * @return UpdateEventBusResponse
   */
  async updateEventBus(request: UpdateEventBusRequest): Promise<UpdateEventBusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEventBusWithOptions(request, runtime);
  }

  /**
   * @summary Updates an event source.
   *
   * @description You can call this API operation to update an event source.
   *
   * @param tmpReq UpdateEventSourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateEventSourceResponse
   */
  async updateEventSourceWithOptions(tmpReq: UpdateEventSourceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEventSourceResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateEventSourceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.externalSourceConfig)) {
      request.externalSourceConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.externalSourceConfig, "ExternalSourceConfig", "json");
    }

    if (!Util.isUnset(tmpReq.sourceHttpEventParameters)) {
      request.sourceHttpEventParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceHttpEventParameters, "SourceHttpEventParameters", "json");
    }

    if (!Util.isUnset(tmpReq.sourceKafkaParameters)) {
      request.sourceKafkaParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceKafkaParameters, "SourceKafkaParameters", "json");
    }

    if (!Util.isUnset(tmpReq.sourceMNSParameters)) {
      request.sourceMNSParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceMNSParameters, "SourceMNSParameters", "json");
    }

    if (!Util.isUnset(tmpReq.sourceRabbitMQParameters)) {
      request.sourceRabbitMQParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceRabbitMQParameters, "SourceRabbitMQParameters", "json");
    }

    if (!Util.isUnset(tmpReq.sourceRocketMQParameters)) {
      request.sourceRocketMQParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceRocketMQParameters, "SourceRocketMQParameters", "json");
    }

    if (!Util.isUnset(tmpReq.sourceSLSParameters)) {
      request.sourceSLSParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceSLSParameters, "SourceSLSParameters", "json");
    }

    if (!Util.isUnset(tmpReq.sourceScheduledEventParameters)) {
      request.sourceScheduledEventParametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceScheduledEventParameters, "SourceScheduledEventParameters", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.eventBusName)) {
      body["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.eventSourceName)) {
      body["EventSourceName"] = request.eventSourceName;
    }

    if (!Util.isUnset(request.externalSourceConfigShrink)) {
      body["ExternalSourceConfig"] = request.externalSourceConfigShrink;
    }

    if (!Util.isUnset(request.externalSourceType)) {
      body["ExternalSourceType"] = request.externalSourceType;
    }

    if (!Util.isUnset(request.linkedExternalSource)) {
      body["LinkedExternalSource"] = request.linkedExternalSource;
    }

    if (!Util.isUnset(request.sourceHttpEventParametersShrink)) {
      body["SourceHttpEventParameters"] = request.sourceHttpEventParametersShrink;
    }

    if (!Util.isUnset(request.sourceKafkaParametersShrink)) {
      body["SourceKafkaParameters"] = request.sourceKafkaParametersShrink;
    }

    if (!Util.isUnset(request.sourceMNSParametersShrink)) {
      body["SourceMNSParameters"] = request.sourceMNSParametersShrink;
    }

    if (!Util.isUnset(request.sourceRabbitMQParametersShrink)) {
      body["SourceRabbitMQParameters"] = request.sourceRabbitMQParametersShrink;
    }

    if (!Util.isUnset(request.sourceRocketMQParametersShrink)) {
      body["SourceRocketMQParameters"] = request.sourceRocketMQParametersShrink;
    }

    if (!Util.isUnset(request.sourceSLSParametersShrink)) {
      body["SourceSLSParameters"] = request.sourceSLSParametersShrink;
    }

    if (!Util.isUnset(request.sourceScheduledEventParametersShrink)) {
      body["SourceScheduledEventParameters"] = request.sourceScheduledEventParametersShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEventSource",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEventSourceResponse>(await this.callApi(params, req, runtime), new UpdateEventSourceResponse({}));
  }

  /**
   * @summary Updates an event source.
   *
   * @description You can call this API operation to update an event source.
   *
   * @param request UpdateEventSourceRequest
   * @return UpdateEventSourceResponse
   */
  async updateEventSource(request: UpdateEventSourceRequest): Promise<UpdateEventSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEventSourceWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the information about an event stream, such as the basic information and the information about the event source, event filtering rule, and event target.
   *
   * @description You can call this API operation to modify the information about an event stream, such as the basic information and the information about the event source, event filtering rule, and event target.
   *
   * @param tmpReq UpdateEventStreamingRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateEventStreamingResponse
   */
  async updateEventStreamingWithOptions(tmpReq: UpdateEventStreamingRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEventStreamingResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateEventStreamingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.runOptions)) {
      request.runOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.runOptions, "RunOptions", "json");
    }

    if (!Util.isUnset(tmpReq.sink)) {
      request.sinkShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sink, "Sink", "json");
    }

    if (!Util.isUnset(tmpReq.source)) {
      request.sourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.source, "Source", "json");
    }

    if (!Util.isUnset(tmpReq.transforms)) {
      request.transformsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transforms, "Transforms", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.eventStreamingName)) {
      body["EventStreamingName"] = request.eventStreamingName;
    }

    if (!Util.isUnset(request.filterPattern)) {
      body["FilterPattern"] = request.filterPattern;
    }

    if (!Util.isUnset(request.runOptionsShrink)) {
      body["RunOptions"] = request.runOptionsShrink;
    }

    if (!Util.isUnset(request.sinkShrink)) {
      body["Sink"] = request.sinkShrink;
    }

    if (!Util.isUnset(request.sourceShrink)) {
      body["Source"] = request.sourceShrink;
    }

    if (!Util.isUnset(request.transformsShrink)) {
      body["Transforms"] = request.transformsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEventStreaming",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEventStreamingResponse>(await this.callApi(params, req, runtime), new UpdateEventStreamingResponse({}));
  }

  /**
   * @summary Modifies the information about an event stream, such as the basic information and the information about the event source, event filtering rule, and event target.
   *
   * @description You can call this API operation to modify the information about an event stream, such as the basic information and the information about the event source, event filtering rule, and event target.
   *
   * @param request UpdateEventStreamingRequest
   * @return UpdateEventStreamingResponse
   */
  async updateEventStreaming(request: UpdateEventStreamingRequest): Promise<UpdateEventStreamingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEventStreamingWithOptions(request, runtime);
  }

  /**
   * @summary Updates the configurations of an event rule.
   *
   * @description You can call this API operation to update the configurations of an event rule.
   *
   * @param request UpdateRuleRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateRuleResponse
   */
  async updateRuleWithOptions(request: UpdateRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.eventBusName)) {
      query["EventBusName"] = request.eventBusName;
    }

    if (!Util.isUnset(request.filterPattern)) {
      query["FilterPattern"] = request.filterPattern;
    }

    if (!Util.isUnset(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRule",
      version: "2020-04-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRuleResponse>(await this.callApi(params, req, runtime), new UpdateRuleResponse({}));
  }

  /**
   * @summary Updates the configurations of an event rule.
   *
   * @description You can call this API operation to update the configurations of an event rule.
   *
   * @param request UpdateRuleRequest
   * @return UpdateRuleResponse
   */
  async updateRule(request: UpdateRuleRequest): Promise<UpdateRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRuleWithOptions(request, runtime);
  }

}
