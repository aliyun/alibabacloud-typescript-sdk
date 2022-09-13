// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateConsumerGroupRequest extends $tea.Model {
  consumeRetryPolicy?: CreateConsumerGroupRequestConsumeRetryPolicy;
  deliveryOrderType?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      consumeRetryPolicy: 'consumeRetryPolicy',
      deliveryOrderType: 'deliveryOrderType',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeRetryPolicy: CreateConsumerGroupRequestConsumeRetryPolicy,
      deliveryOrderType: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class CreateConsumerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateConsumerGroupResponseBody;
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
      body: CreateConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRequest extends $tea.Model {
  messageType?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      messageType: 'messageType',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageType: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class CreateTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTopicResponseBody;
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

export class DeleteConsumerGroupResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class DeleteConsumerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteConsumerGroupResponseBody;
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
      body: DeleteConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class DeleteInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteInstanceResponseBody;
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
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTopicResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class DeleteTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTopicResponseBody;
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

export class GetConsumerGroupResponseBody extends $tea.Model {
  code?: string;
  data?: GetConsumerGroupResponseBodyData;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetConsumerGroupResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class GetConsumerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetConsumerGroupResponseBody;
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
      body: GetConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: GetInstanceResponseBodyData;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInstanceResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class GetInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetInstanceResponseBody;
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
      body: GetInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicResponseBody extends $tea.Model {
  code?: string;
  data?: GetTopicResponseBodyData;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTopicResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class GetTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTopicResponseBody;
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
      body: GetTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupsRequest extends $tea.Model {
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupsResponseBody extends $tea.Model {
  code?: string;
  data?: ListConsumerGroupsResponseBodyData;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListConsumerGroupsResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class ListConsumerGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListConsumerGroupsResponseBody;
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
      body: ListConsumerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  code?: string;
  data?: ListInstancesResponseBodyData;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListInstancesResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class ListInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstancesResponseBody;
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
      body: ListInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsRequest extends $tea.Model {
  filter?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBody extends $tea.Model {
  code?: string;
  data?: ListTopicsResponseBodyData;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListTopicsResponseBodyData,
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class ListTopicsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTopicsResponseBody;
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
      body: ListTopicsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerGroupRequest extends $tea.Model {
  consumeRetryPolicy?: UpdateConsumerGroupRequestConsumeRetryPolicy;
  deliveryOrderType?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      consumeRetryPolicy: 'consumeRetryPolicy',
      deliveryOrderType: 'deliveryOrderType',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeRetryPolicy: UpdateConsumerGroupRequestConsumeRetryPolicy,
      deliveryOrderType: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerGroupResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class UpdateConsumerGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateConsumerGroupResponseBody;
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
      body: UpdateConsumerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $tea.Model {
  extConfig?: UpdateInstanceRequestExtConfig;
  instanceName?: string;
  networkInfo?: UpdateInstanceRequestNetworkInfo;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      extConfig: 'extConfig',
      instanceName: 'instanceName',
      networkInfo: 'networkInfo',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extConfig: UpdateInstanceRequestExtConfig,
      instanceName: 'string',
      networkInfo: UpdateInstanceRequestNetworkInfo,
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class UpdateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateInstanceResponseBody;
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
      body: UpdateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTopicRequest extends $tea.Model {
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTopicResponseBody extends $tea.Model {
  code?: string;
  data?: boolean;
  dynamicCode?: string;
  dynamicMessage?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      dynamicCode: 'dynamicCode',
      dynamicMessage: 'dynamicMessage',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      dynamicCode: 'string',
      dynamicMessage: 'string',
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

export class UpdateTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTopicResponseBody;
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
      body: UpdateTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupRequestConsumeRetryPolicy extends $tea.Model {
  maxRetryTimes?: number;
  retryPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      maxRetryTimes: 'maxRetryTimes',
      retryPolicy: 'retryPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRetryTimes: 'number',
      retryPolicy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupResponseBodyDataConsumeRetryPolicy extends $tea.Model {
  maxRetryTimes?: number;
  retryPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      maxRetryTimes: 'maxRetryTimes',
      retryPolicy: 'retryPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRetryTimes: 'number',
      retryPolicy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupResponseBodyData extends $tea.Model {
  consumeRetryPolicy?: GetConsumerGroupResponseBodyDataConsumeRetryPolicy;
  consumerGroupId?: string;
  createTime?: string;
  deliveryOrderType?: string;
  instanceId?: string;
  regionId?: string;
  remark?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      consumeRetryPolicy: 'consumeRetryPolicy',
      consumerGroupId: 'consumerGroupId',
      createTime: 'createTime',
      deliveryOrderType: 'deliveryOrderType',
      instanceId: 'instanceId',
      regionId: 'regionId',
      remark: 'remark',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeRetryPolicy: GetConsumerGroupResponseBodyDataConsumeRetryPolicy,
      consumerGroupId: 'string',
      createTime: 'string',
      deliveryOrderType: 'string',
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataAccountInfo extends $tea.Model {
  username?: string;
  static names(): { [key: string]: string } {
    return {
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataExtConfig extends $tea.Model {
  aclType?: string;
  autoScaling?: boolean;
  flowOutBandwidth?: number;
  flowOutType?: string;
  internetSpec?: string;
  messageRetentionTime?: number;
  msgProcessSpec?: string;
  sendReceiveRatio?: number;
  supportAutoScaling?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclType: 'aclType',
      autoScaling: 'autoScaling',
      flowOutBandwidth: 'flowOutBandwidth',
      flowOutType: 'flowOutType',
      internetSpec: 'internetSpec',
      messageRetentionTime: 'messageRetentionTime',
      msgProcessSpec: 'msgProcessSpec',
      sendReceiveRatio: 'sendReceiveRatio',
      supportAutoScaling: 'supportAutoScaling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      autoScaling: 'boolean',
      flowOutBandwidth: 'number',
      flowOutType: 'string',
      internetSpec: 'string',
      messageRetentionTime: 'number',
      msgProcessSpec: 'string',
      sendReceiveRatio: 'number',
      supportAutoScaling: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataInstanceQuotas extends $tea.Model {
  freeCount?: number;
  quotaName?: string;
  totalCount?: number;
  usedCount?: number;
  static names(): { [key: string]: string } {
    return {
      freeCount: 'freeCount',
      quotaName: 'quotaName',
      totalCount: 'totalCount',
      usedCount: 'usedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeCount: 'number',
      quotaName: 'string',
      totalCount: 'number',
      usedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataNetworkInfoEndpoints extends $tea.Model {
  endpointType?: string;
  endpointUrl?: string;
  ipWhitelist?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'endpointType',
      endpointUrl: 'endpointUrl',
      ipWhitelist: 'ipWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      endpointUrl: 'string',
      ipWhitelist: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataNetworkInfoVpcInfo extends $tea.Model {
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataNetworkInfo extends $tea.Model {
  endpoints?: GetInstanceResponseBodyDataNetworkInfoEndpoints[];
  vpcInfo?: GetInstanceResponseBodyDataNetworkInfoVpcInfo;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'endpoints',
      vpcInfo: 'vpcInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataNetworkInfoEndpoints },
      vpcInfo: GetInstanceResponseBodyDataNetworkInfoVpcInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyData extends $tea.Model {
  accountInfo?: GetInstanceResponseBodyDataAccountInfo;
  bid?: string;
  commodityCode?: string;
  createTime?: string;
  expireTime?: string;
  extConfig?: GetInstanceResponseBodyDataExtConfig;
  groupCount?: number;
  instanceId?: string;
  instanceName?: string;
  instanceQuotas?: GetInstanceResponseBodyDataInstanceQuotas[];
  networkInfo?: GetInstanceResponseBodyDataNetworkInfo;
  paymentType?: string;
  regionId?: string;
  releaseTime?: string;
  remark?: string;
  seriesCode?: string;
  serviceCode?: string;
  startTime?: string;
  status?: string;
  subSeriesCode?: string;
  topicCount?: number;
  updateTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountInfo: 'accountInfo',
      bid: 'bid',
      commodityCode: 'commodityCode',
      createTime: 'createTime',
      expireTime: 'expireTime',
      extConfig: 'extConfig',
      groupCount: 'groupCount',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      instanceQuotas: 'instanceQuotas',
      networkInfo: 'networkInfo',
      paymentType: 'paymentType',
      regionId: 'regionId',
      releaseTime: 'releaseTime',
      remark: 'remark',
      seriesCode: 'seriesCode',
      serviceCode: 'serviceCode',
      startTime: 'startTime',
      status: 'status',
      subSeriesCode: 'subSeriesCode',
      topicCount: 'topicCount',
      updateTime: 'updateTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfo: GetInstanceResponseBodyDataAccountInfo,
      bid: 'string',
      commodityCode: 'string',
      createTime: 'string',
      expireTime: 'string',
      extConfig: GetInstanceResponseBodyDataExtConfig,
      groupCount: 'number',
      instanceId: 'string',
      instanceName: 'string',
      instanceQuotas: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataInstanceQuotas },
      networkInfo: GetInstanceResponseBodyDataNetworkInfo,
      paymentType: 'string',
      regionId: 'string',
      releaseTime: 'string',
      remark: 'string',
      seriesCode: 'string',
      serviceCode: 'string',
      startTime: 'string',
      status: 'string',
      subSeriesCode: 'string',
      topicCount: 'number',
      updateTime: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTopicResponseBodyData extends $tea.Model {
  createTime?: string;
  instanceId?: string;
  messageType?: string;
  regionId?: string;
  remark?: string;
  status?: string;
  topicName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      instanceId: 'instanceId',
      messageType: 'messageType',
      regionId: 'regionId',
      remark: 'remark',
      status: 'status',
      topicName: 'topicName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instanceId: 'string',
      messageType: 'string',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      topicName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupsResponseBodyDataList extends $tea.Model {
  consumerGroupId?: string;
  createTime?: string;
  instanceId?: string;
  regionId?: string;
  remark?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      createTime: 'createTime',
      instanceId: 'instanceId',
      regionId: 'regionId',
      remark: 'remark',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      createTime: 'string',
      instanceId: 'string',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupsResponseBodyData extends $tea.Model {
  list?: ListConsumerGroupsResponseBodyDataList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListConsumerGroupsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataList extends $tea.Model {
  commodityCode?: string;
  createTime?: string;
  expireTime?: string;
  groupCount?: number;
  instanceId?: string;
  instanceName?: string;
  paymentType?: string;
  regionId?: string;
  releaseTime?: string;
  remark?: string;
  seriesCode?: string;
  serviceCode?: string;
  startTime?: string;
  status?: string;
  subSeriesCode?: string;
  topicCount?: number;
  updateTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'commodityCode',
      createTime: 'createTime',
      expireTime: 'expireTime',
      groupCount: 'groupCount',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      paymentType: 'paymentType',
      regionId: 'regionId',
      releaseTime: 'releaseTime',
      remark: 'remark',
      seriesCode: 'seriesCode',
      serviceCode: 'serviceCode',
      startTime: 'startTime',
      status: 'status',
      subSeriesCode: 'subSeriesCode',
      topicCount: 'topicCount',
      updateTime: 'updateTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      createTime: 'string',
      expireTime: 'string',
      groupCount: 'number',
      instanceId: 'string',
      instanceName: 'string',
      paymentType: 'string',
      regionId: 'string',
      releaseTime: 'string',
      remark: 'string',
      seriesCode: 'string',
      serviceCode: 'string',
      startTime: 'string',
      status: 'string',
      subSeriesCode: 'string',
      topicCount: 'number',
      updateTime: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyData extends $tea.Model {
  list?: ListInstancesResponseBodyDataList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBodyDataList extends $tea.Model {
  createTime?: string;
  instanceId?: string;
  messageType?: string;
  regionId?: string;
  remark?: string;
  status?: string;
  topicName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      instanceId: 'instanceId',
      messageType: 'messageType',
      regionId: 'regionId',
      remark: 'remark',
      status: 'status',
      topicName: 'topicName',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instanceId: 'string',
      messageType: 'string',
      regionId: 'string',
      remark: 'string',
      status: 'string',
      topicName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBodyData extends $tea.Model {
  list?: ListTopicsResponseBodyDataList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListTopicsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerGroupRequestConsumeRetryPolicy extends $tea.Model {
  maxRetryTimes?: number;
  retryPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      maxRetryTimes: 'maxRetryTimes',
      retryPolicy: 'retryPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRetryTimes: 'number',
      retryPolicy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestExtConfig extends $tea.Model {
  autoScaling?: boolean;
  messageRetentionTime?: number;
  sendReceiveRatio?: number;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'autoScaling',
      messageRetentionTime: 'messageRetentionTime',
      sendReceiveRatio: 'sendReceiveRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: 'boolean',
      messageRetentionTime: 'number',
      sendReceiveRatio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestNetworkInfoEndpoints extends $tea.Model {
  endpointType?: string;
  ipWhitelist?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'endpointType',
      ipWhitelist: 'ipWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      ipWhitelist: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestNetworkInfo extends $tea.Model {
  endpoints?: UpdateInstanceRequestNetworkInfoEndpoints[];
  static names(): { [key: string]: string } {
    return {
      endpoints: 'endpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': UpdateInstanceRequestNetworkInfoEndpoints },
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
    this._endpoint = this.getEndpoint("rocketmq", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createConsumerGroup(instanceId: string, consumerGroupId: string, request: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConsumerGroupWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  async createConsumerGroupWithOptions(instanceId: string, consumerGroupId: string, request: CreateConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateConsumerGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.consumeRetryPolicy))) {
      body["consumeRetryPolicy"] = request.consumeRetryPolicy;
    }

    if (!Util.isUnset(request.deliveryOrderType)) {
      body["deliveryOrderType"] = request.deliveryOrderType;
    }

    if (!Util.isUnset(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateConsumerGroup",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/consumerGroups/${OpenApiUtil.getEncodeParam(consumerGroupId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateConsumerGroupResponse>(await this.callApi(params, req, runtime), new CreateConsumerGroupResponse({}));
  }

  async createTopic(instanceId: string, topicName: string, request: CreateTopicRequest): Promise<CreateTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTopicWithOptions(instanceId, topicName, request, headers, runtime);
  }

  async createTopicWithOptions(instanceId: string, topicName: string, request: CreateTopicRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTopicResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.messageType)) {
      body["messageType"] = request.messageType;
    }

    if (!Util.isUnset(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTopic",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/topics/${OpenApiUtil.getEncodeParam(topicName)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTopicResponse>(await this.callApi(params, req, runtime), new CreateTopicResponse({}));
  }

  async deleteConsumerGroup(instanceId: string, consumerGroupId: string): Promise<DeleteConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumerGroupWithOptions(instanceId, consumerGroupId, headers, runtime);
  }

  async deleteConsumerGroupWithOptions(instanceId: string, consumerGroupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConsumerGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteConsumerGroup",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/consumerGroups/${OpenApiUtil.getEncodeParam(consumerGroupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteConsumerGroupResponse>(await this.callApi(params, req, runtime), new DeleteConsumerGroupResponse({}));
  }

  async deleteInstance(instanceId: string): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(instanceId, headers, runtime);
  }

  async deleteInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteTopic(instanceId: string, topicName: string): Promise<DeleteTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTopicWithOptions(instanceId, topicName, headers, runtime);
  }

  async deleteTopicWithOptions(instanceId: string, topicName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTopicResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTopic",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/topics/${OpenApiUtil.getEncodeParam(topicName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTopicResponse>(await this.callApi(params, req, runtime), new DeleteTopicResponse({}));
  }

  async getConsumerGroup(instanceId: string, consumerGroupId: string): Promise<GetConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerGroupWithOptions(instanceId, consumerGroupId, headers, runtime);
  }

  async getConsumerGroupWithOptions(instanceId: string, consumerGroupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetConsumerGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetConsumerGroup",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/consumerGroups/${OpenApiUtil.getEncodeParam(consumerGroupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetConsumerGroupResponse>(await this.callApi(params, req, runtime), new GetConsumerGroupResponse({}));
  }

  async getInstance(instanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(instanceId, headers, runtime);
  }

  async getInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  async getTopic(instanceId: string, topicName: string): Promise<GetTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTopicWithOptions(instanceId, topicName, headers, runtime);
  }

  async getTopicWithOptions(instanceId: string, topicName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTopicResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTopic",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/topics/${OpenApiUtil.getEncodeParam(topicName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTopicResponse>(await this.callApi(params, req, runtime), new GetTopicResponse({}));
  }

  async listConsumerGroups(instanceId: string, request: ListConsumerGroupsRequest): Promise<ListConsumerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerGroupsWithOptions(instanceId, request, headers, runtime);
  }

  async listConsumerGroupsWithOptions(instanceId: string, request: ListConsumerGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConsumerGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConsumerGroups",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/consumerGroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListConsumerGroupsResponse>(await this.callApi(params, req, runtime), new ListConsumerGroupsResponse({}));
  }

  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  async listTopics(instanceId: string, request: ListTopicsRequest): Promise<ListTopicsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTopicsWithOptions(instanceId, request, headers, runtime);
  }

  async listTopicsWithOptions(instanceId: string, request: ListTopicsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTopicsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTopics",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/topics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTopicsResponse>(await this.callApi(params, req, runtime), new ListTopicsResponse({}));
  }

  async updateConsumerGroup(instanceId: string, consumerGroupId: string, request: UpdateConsumerGroupRequest): Promise<UpdateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConsumerGroupWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  async updateConsumerGroupWithOptions(instanceId: string, consumerGroupId: string, request: UpdateConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateConsumerGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.consumeRetryPolicy))) {
      body["consumeRetryPolicy"] = request.consumeRetryPolicy;
    }

    if (!Util.isUnset(request.deliveryOrderType)) {
      body["deliveryOrderType"] = request.deliveryOrderType;
    }

    if (!Util.isUnset(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateConsumerGroup",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/consumerGroups/${OpenApiUtil.getEncodeParam(consumerGroupId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateConsumerGroupResponse>(await this.callApi(params, req, runtime), new UpdateConsumerGroupResponse({}));
  }

  async updateInstance(instanceId: string, request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(instanceId, request, headers, runtime);
  }

  async updateInstanceWithOptions(instanceId: string, request: UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.extConfig))) {
      body["extConfig"] = request.extConfig;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    if (!Util.isUnset($tea.toMap(request.networkInfo))) {
      body["networkInfo"] = request.networkInfo;
    }

    if (!Util.isUnset(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceResponse>(await this.callApi(params, req, runtime), new UpdateInstanceResponse({}));
  }

  async updateTopic(instanceId: string, topicName: string, request: UpdateTopicRequest): Promise<UpdateTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTopicWithOptions(instanceId, topicName, request, headers, runtime);
  }

  async updateTopicWithOptions(instanceId: string, topicName: string, request: UpdateTopicRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTopicResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.remark)) {
      body["remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTopic",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/topics/${OpenApiUtil.getEncodeParam(topicName)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTopicResponse>(await this.callApi(params, req, runtime), new UpdateTopicResponse({}));
  }

}
