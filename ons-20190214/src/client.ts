// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance to which the resource whose tags you want to query belongs.
   * 
   * > This parameter is required when you query the tags of a topic or a group.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * The token that determines the start point of the next query.
   * 
   * @example
   * caeba0****be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of resource IDs.
   * 
   * @example
   * TopicA
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource whose tags you want to query. Valid values:
   * 
   * *   **INSTANCE**
   * *   **TOPIC**
   * *   **GROUP**
   * 
   * This parameter is required.
   * 
   * @example
   * TOPIC
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that you want to query. A maximum of 20 tags can be included in the list.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The token that determines the start point of the next query.
   * 
   * @example
   * caeba0****be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 301D2CBE-66F8-403D-AEC0-82582478****
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the resource and tags, including the resource ID, the resource type, tag keys, and tag values.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to query the details of each topic to which the consumer group subscribes. Valid values:
   * 
   * *   **true**: The details of each topic are queried. You can obtain the details from the **DetailInTopicList** response parameter.
   * *   **false**: The details of each topic are not queried. This is the default value. If you use this value, the value of the **DetailInTopicList** response parameter is empty.
   * 
   * @example
   * true
   */
  detail?: boolean;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_consumer_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'boolean',
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The message accumulation information about topics to which the specified consumer subscribes.
   */
  data?: OnsConsumerAccumulateResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * CE817BFF-B389-43CD-9419-95011AC9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsConsumerAccumulateResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsConsumerAccumulateResponseBody;
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
      body: OnsConsumerAccumulateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the consumer group whose client connection status you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_consumer_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance to which the consumer group belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsConsumerGetConnectionResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * DE4140C7-F42D-473D-A5FF-B1E31692****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsConsumerGetConnectionResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsConsumerGetConnectionResponseBody;
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
      body: OnsConsumerGetConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerResetOffsetRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the consumer group whose dead-letter message you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_consumer_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance to which the consumer group belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The timestamp to which you want to reset the consumer offset. This parameter takes effect only when the **Type** parameter is set to **1**. Unit: milliseconds.
   * 
   * @example
   * 1591153871000
   */
  resetTimestamp?: number;
  /**
   * @remarks
   * The name of the topic for which you want to reset the consumer offset.
   * 
   * This parameter is required.
   * 
   * @example
   * test-mq-topic
   */
  topic?: string;
  /**
   * @remarks
   * The method that you want to use to clear accumulated messages. Valid values:
   * 
   * *   **0:** All accumulated messages are cleared. Messages that are not consumed are ignored. Consumers in the specified consumer group consume only messages that are published to the topic after the specified point in time.
   * 
   * If "reconsumeLater" is returned, the accumulated messages are not cleared because the system is retrying to resend the messages to consumers.
   * 
   * *   **1:** The messages that were published to the topic before the specified point in time are cleared. You must specify a point in time. Consumers in the specified consumer group consume only the messages that are published to the topic after the specified point in time.
   * 
   * You can specify a point in time from the earliest point in time when a message was published to the topic to the most recent point in time when a message was published to the topic. Points in time that are not within the allowed time range are invalid.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      resetTimestamp: 'ResetTimestamp',
      topic: 'Topic',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      resetTimestamp: 'number',
      topic: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerResetOffsetResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * D52C68F8-EC5D-4294-BFFF-1A6A25AF****
   */
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

export class OnsConsumerResetOffsetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsConsumerResetOffsetResponseBody;
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
      body: OnsConsumerResetOffsetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to query the details of the consumer group. Valid values:
   * 
   * *   **true**: The details of the consumer group are queried. You can obtain details from the **ConsumerConnectionInfoList** and **DetailInTopicList** response parameters.
   * *   **false**: The details of the consumer group are not queried. The values of the **ConsumerConnectionInfoList** and **DetailInTopicList** response parameters are empty. This value is the default value of the Detail parameter.
   * 
   * @example
   * true
   */
  detail?: boolean;
  /**
   * @remarks
   * The ID of the consumer group whose details you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance to which the consumer group belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to query the information about thread stack traces. Valid values:
   * 
   * *   **true**: The information about thread stack traces is queried. You can obtain the information from the **Jstack** response parameter.
   * 
   * > If you want to obtain the information about thread stack traces, make sure that the **Detail** parameter in the request is set to **true**.
   * 
   * *   **false**: The information about thread stack traces is not queried. The value of the **Jstack** response parameter is empty. This value is the default value of the NeedJstack parameter.
   * 
   * @example
   * true
   */
  needJstack?: boolean;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      needJstack: 'NeedJstack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'boolean',
      groupId: 'string',
      instanceId: 'string',
      needJstack: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsConsumerStatusResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 10EDC518-10E7-4B34-92FB-171235FA****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsConsumerStatusResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsConsumerStatusResponseBody;
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
      body: OnsConsumerStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerTimeSpanRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the consumer group whose reset time range you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance to which the consumer group belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The topic to which the consumer group subscribes.
   * 
   * This parameter is required.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerTimeSpanResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsConsumerTimeSpanResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A07E3902-B92E-44A6-B6C5-6AA111111****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsConsumerTimeSpanResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerTimeSpanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsConsumerTimeSpanResponseBody;
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
      body: OnsConsumerTimeSpanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageGetByIdRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the consumer group whose dead-letter message you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance to which the message you want to query belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the dead-letter message that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 0BC16699165C03B925DB8A404E2D****
   */
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageGetByIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsDLQMessageGetByIdResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID.
   * 
   * @example
   * A07E3902-B92E-44A6-B6C5-6AA111111****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsDLQMessageGetByIdResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageGetByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsDLQMessageGetByIdResponseBody;
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
      body: OnsDLQMessageGetByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdRequest extends $tea.Model {
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds. If you specify a valid value for the **TaskId** parameter in the request, this parameter does not take effect. The system uses the value of the BeginTime parameter that you specified in the request when you created the specified query task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570723200000
   */
  beginTime?: number;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds. If you specify a valid value for the **TaskId** parameter in the request, this parameter does not take effect. The system uses the value of the EndTime parameter that you specified in the request when you created the specified query task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570809600000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the consumer group whose dead-letter messages you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance to which the dead-letter messages you want to query belong.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of dead-letter messages to return on each page. Valid values: 5 to 50. Default value: 20. If you specify a valid value for the **TaskId** parameter in the request, this parameter does not take effect. The system uses the value of the PageSize parameter that you specified in the request when you created the specified query task.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the query task. The first time you call this operation to query dead-letter messages that are sent to a specified consumer group within a specified time range, this parameter is not required. This parameter is required in subsequent queries for dead-letter messages on a specified page. You can obtain the task ID from the returned result of the first query.
   * 
   * @example
   * 0BC1310300002A9F000021E4D7A48346
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      currentPage: 'number',
      endTime: 'number',
      groupId: 'string',
      instanceId: 'string',
      pageSize: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about dead-letter messages that are queried.
   */
  msgFoundDo?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDo;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * B00CD3C8-D81E-4A41-85E2-38F19252****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      msgFoundDo: 'MsgFoundDo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgFoundDo: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsDLQMessagePageQueryByGroupIdResponseBody;
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
      body: OnsDLQMessagePageQueryByGroupIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageResendByIdRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the consumer group in which you want to query dead-letter messages.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance in which the dead-letter message you want to query resides.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the dead-letter message that you want to send to a consumer group for consumption.
   * 
   * This parameter is required.
   * 
   * @example
   * 0BC16699343051CD9F1D798E7734****
   */
  msgId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      msgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageResendByIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned messages.
   */
  data?: OnsDLQMessageResendByIdResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * D94CC769-4DC3-4690-A868-9D0631B1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsDLQMessageResendByIdResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageResendByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsDLQMessageResendByIdResponseBody;
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
      body: OnsDLQMessageResendByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupConsumerUpdateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the consumer group for which you want to configure read permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_groupId
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance to which the consumer group you want to configure belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to authorize the consumer group to read messages. Valid values:
   * 
   * *   **true**: The consumer group can read messages.
   * *   **false**: The consumer group cannot read messages.
   * 
   * Default value: **true**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  readEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      readEnable: 'ReadEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      readEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupConsumerUpdateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A07E3902-B92E-44A6-B6C5-6AA111111****
   */
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

export class OnsGroupConsumerUpdateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsGroupConsumerUpdateResponseBody;
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
      body: OnsGroupConsumerUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupCreateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the consumer group that you want to create. The group ID must meet the following rules:
   * 
   * *   The group ID must be 2 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_).
   * *   If the ApsaraMQ for RocketMQ instance in which you want to create the consumer group uses a namespace, the group ID must be unique in the instance. The group ID cannot be the same as an existing group ID or a topic name in the instance. The group ID can be the same as a group ID or a topic name in another instance that uses a different namespace. For example, if Instance A and Instance B use different namespaces, a group ID in Instance A can be the same as a group ID or a topic name in Instance B.
   * *   If the instance does not use a namespace, the group ID must be globally unique across instances and regions. The group ID cannot be the same as an existing group ID or topic name in ApsaraMQ for RocketMQ instances that belong to your Alibaba Cloud account.
   * 
   * > 
   * 
   * *   After the consumer group is created, the group ID cannot be changed.
   * 
   * *   To check whether an instance uses a namespace, log on to the ApsaraMQ for RocketMQ console, go to the **Instance Details** page, and then view the value of the Namespace field in the **Basic Information** section.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_groupId
   */
  groupId?: string;
  /**
   * @remarks
   * The protocol over which clients in the consumer group communicate with the ApsaraMQ for RocketMQ broker. All clients in a consumer group communicate with the ApsaraMQ for RocketMQ broker over the same protocol. You must create different groups for TCP clients and HTTP clients. Valid values:
   * 
   * *   **tcp**: Clients in the consumer group consume messages over TCP. This is the default value.
   * *   **http**: Clients in the consumer group consume messages over HTTP.
   * 
   * @example
   * tcp
   */
  groupType?: string;
  /**
   * @remarks
   * The ID of the instance in which you want to create the consumer group.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The description of the consumer group.
   * 
   * @example
   * test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupType: 'GroupType',
      instanceId: 'InstanceId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupType: 'string',
      instanceId: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupCreateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A07E3902-B92E-44A6-B6C5-6AA111111****
   */
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

export class OnsGroupCreateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsGroupCreateResponseBody;
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
      body: OnsGroupCreateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupDeleteRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the consumer group that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_groupId
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance to which the specified consumer group belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupDeleteResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A07E3902-B92E-44A6-B6C5-6AA111111****
   */
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

export class OnsGroupDeleteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsGroupDeleteResponseBody;
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
      body: OnsGroupDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required only when you query specific consumer groups by using the fuzzy search method. If this parameter is not configured, the system queries all consumer groups that can be accessed by the current account.
   * 
   * If you set this parameter to GID_ABC, the information about the consumer groups whose IDs contain GID_ABC is returned. For example, the information about the GID_test_GID_ABC_123 and GID_ABC_356 consumer groups is returned.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The protocol over which the queried consumer group publishes and subscribes to messages. All clients in a consumer group communicate with the ApsaraMQ for RocketMQ broker over the same protocol. You must create different consumer groups for TCP clients and HTTP clients. Valid values:
   * 
   * *   **tcp**: specifies that the consumer group publishes or subscribes to messages over TCP. This value is the default value.
   * *   **http**: specifies that the consumer group publishes or subscribes to messages over HTTP.
   * 
   * @example
   * tcp
   */
  groupType?: string;
  /**
   * @remarks
   * The ID of the instance to which the consumer group you want to query belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of tags that are attached to the consumer group. A maximum of 20 tags can be included in the list.
   */
  tag?: OnsGroupListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupType: 'GroupType',
      instanceId: 'InstanceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupType: 'string',
      instanceId: 'string',
      tag: { 'type': 'array', 'itemType': OnsGroupListRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned list of subscriptions.
   */
  data?: OnsGroupListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 16996623-AC4A-43AF-9248-FD9D2D75****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsGroupListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsGroupListResponseBody;
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
      body: OnsGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupSubDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the consumer group that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance to which the consumer group you want to query belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupSubDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsGroupSubDetailResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 3364E875-013B-442A-BC3C-C1A84DC6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsGroupSubDetailResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupSubDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsGroupSubDetailResponseBody;
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
      body: OnsGroupSubDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceBaseInfoRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * MQ_INST_138015630679****_BAAy1Hac
   */
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

export class OnsInstanceBaseInfoResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the instance.
   */
  instanceBaseInfo?: OnsInstanceBaseInfoResponseBodyInstanceBaseInfo;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 6CC46974-65E8-4C20-AB07-D20D102E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceBaseInfo: 'InstanceBaseInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceBaseInfo: OnsInstanceBaseInfoResponseBodyInstanceBaseInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceBaseInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsInstanceBaseInfoResponseBody;
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
      body: OnsInstanceBaseInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceCreateRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the instance. The name must meet the following rules:
   * 
   * *   The name of the instance must be unique in the region where the instance is deployed.
   * *   The name must be 3 to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * Test instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * Description
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceCreateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The result returned.
   */
  data?: OnsInstanceCreateResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A07E3902-B92E-44A6-B6C5-6AA111111****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsInstanceCreateResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceCreateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsInstanceCreateResponseBody;
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
      body: OnsInstanceCreateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceDeleteRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
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

export class OnsInstanceDeleteResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A07E3902-B92E-44A6-B6C5-6AA111111****
   */
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

export class OnsInstanceDeleteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsInstanceDeleteResponseBody;
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
      body: OnsInstanceDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether you want the resource information to be returned.
   * 
   * @example
   * true
   */
  needResourceInfo?: boolean;
  /**
   * @remarks
   * The tags that you want to attach to the instance. You can attach up to 20 tags to the instance.
   */
  tag?: OnsInstanceInServiceListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      needResourceInfo: 'NeedResourceInfo',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needResourceInfo: 'boolean',
      tag: { 'type': 'array', 'itemType': OnsInstanceInServiceListRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned information about the queried instances.
   */
  data?: OnsInstanceInServiceListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 0598E46F-DB06-40E2-AD7B-C45923EE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsInstanceInServiceListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsInstanceInServiceListResponseBody;
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
      body: OnsInstanceInServiceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceUpdateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance whose name or description you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * The new name of the instance. The name must meet the following rules:
   * 
   * *   The name of the instance must be unique in the region where the instance is deployed.
   * *   The name must be 3 to 64 characters in length and can contain letters, digits, hyphens (-), underscores (_), and Chinese characters.
   * *   If you do not configure this parameter, the instance name remains unchanged.
   * 
   * @example
   * Updatedname
   */
  instanceName?: string;
  /**
   * @remarks
   * The updated description of the instance. If you do not configure this parameter, the instance description remains unchanged.
   * 
   * @example
   * Updateddescription
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceUpdateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A07E3902-B92E-44A6-B6C5-6AA111111****
   */
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

export class OnsInstanceUpdateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsInstanceUpdateResponseBody;
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
      body: OnsInstanceUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ Instance.
   * 
   * This parameter is required.
   * 
   * @example
   * MQ_INST_184681981******_BXig0x6A
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1E0578FE110F18B4AAC235C0******
   */
  msgId?: string;
  /**
   * @remarks
   * The name of the topic in which the message you want to query is stored.
   * 
   * This parameter is required.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      msgId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsMessageDetailResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * EAE5BE23-37A1-4354-94D6-E44AE17E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsMessageDetailResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsMessageDetailResponseBody;
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
      body: OnsMessageDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance to which the messages that you want to query belong.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The key of the messages that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * messageKey1
   */
  key?: string;
  /**
   * @remarks
   * The topic that contains the messages that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      key: 'Key',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      key: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of returned results.
   */
  data?: OnsMessageGetByKeyResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A07E3902-B92E-44A6-B6C5-6AA111111****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsMessageGetByKeyResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsMessageGetByKeyResponseBody;
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
      body: OnsMessageGetByKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance to which the message you want to query belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1E0578FE110F18B4AAC235C05F2*****
   */
  msgId?: string;
  /**
   * @remarks
   * The topic that contains the message you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      msgId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsMessageGetByMsgIdResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * A07E3902-B92E-44A6-B6C5-6AA111111****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsMessageGetByMsgIdResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsMessageGetByMsgIdResponseBody;
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
      body: OnsMessageGetByMsgIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicRequest extends $tea.Model {
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds. If you specify a valid value for the **TaskId** parameter in the request, this parameter does not take effect. The system uses the value of the BeginTime parameter that you specified in the request when you created the specified query task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570723200000
   */
  beginTime?: number;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Valid values: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds. If you specify a valid value for the **TaskId** parameter in the request, this parameter does not take effect. The system uses the value of the EndTime parameter that you specified in the request when you created the specified query task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570809600000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the instance to which the message you want to query belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 5 to 50. Default value: 20. If you specify a valid value for the **TaskId** parameter in the request, this parameter does not take effect. The system uses the value of the PageSize parameter that you specified in the request for creating the query task.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the query task. The first time you call this operation to query the information about messages in a specified topic within a specified time range, this parameter is not required. This parameter is required in subsequent queries for messages on a specified page. You can obtain the task ID from the returned result of the first query.
   * 
   * @example
   * 0BC1310300002A9F000021E4D7A48346
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the topic whose messages you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      taskId: 'TaskId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      currentPage: 'number',
      endTime: 'number',
      instanceId: 'string',
      pageSize: 'number',
      taskId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the message that is queried.
   */
  msgFoundDo?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDo;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 5DC2A47E-2B31-4722-96C8-FA59C9*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      msgFoundDo: 'MsgFoundDo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgFoundDo: OnsMessagePageQueryByTopicResponseBodyMsgFoundDo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsMessagePageQueryByTopicResponseBody;
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
      body: OnsMessagePageQueryByTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePushRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the consumer client. You can call the [OnsConsumerGetConnection](https://help.aliyun.com/document_detail/29598.html) operation to query client IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 30.5.121.**@24813#-1999745829#-1737591554#453111174894656
   */
  clientId?: string;
  /**
   * @remarks
   * The ID of the consumer group. For information about what a consumer group is, see [Terms](https://help.aliyun.com/document_detail/29533.html).
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance to which the specified consumer group belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * 0BC1669963053CF68F733BB70396****
   */
  msgId?: string;
  /**
   * @remarks
   * The topic to which the message is pushed.
   * 
   * This parameter is required.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      groupId: 'string',
      instanceId: 'string',
      msgId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePushResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * B8EDC90D-F726-4B9E-8BEF-F0DD25EC****
   */
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

export class OnsMessagePushResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsMessagePushResponseBody;
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
      body: OnsMessagePushResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance to which the message you want to query belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1E05791C117818B4AAC23B1BB0CE****
   */
  msgId?: string;
  /**
   * @remarks
   * The topic to which the message belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      msgId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the message that is queried.
   */
  data?: OnsMessageTraceResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * EAE5BE23-37A1-4354-94D6-E44AE17E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsMessageTraceResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsMessageTraceResponseBody;
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
      body: OnsMessageTraceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsRegionListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: OnsRegionListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 72D14A84-45E5-4E01-A6DB-F63C4721****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsRegionListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsRegionListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsRegionListResponseBody;
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
      body: OnsRegionListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicCreateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance in which you want to create the topic.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of messages that you want to publish to the topic. Valid values:
   * 
   * *   **0**: normal messages
   * *   **1**: partitionally ordered messages
   * *   **2**: globally ordered messages
   * *   **4**: transactional messages
   * *   **5**: scheduled or delayed messages
   * 
   * For more information about message types, see [Message types](https://help.aliyun.com/document_detail/155952.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  messageType?: number;
  /**
   * @remarks
   * The description of the topic that you want to create.
   * 
   * @example
   * Test
   */
  remark?: string;
  /**
   * @remarks
   * The name of the topic that you want to create. The name must meet the following rules:
   * 
   * *   The name must be 3 to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * *   The topic name cannot start with CID or GID because CID and GID are reserved prefixes for group IDs.
   * *   If the ApsaraMQ for RocketMQ instance in which you want to create the topic uses a namespace, the topic name must be unique in the instance. The topic name cannot be the same as an existing topic name or a group ID in the instance. The topic name can be the same as a topic name or a group ID in another instance that uses a different namespace. For example, if Instance A and Instance B use different namespaces, a topic name in Instance A can be the same as a topic name or a group ID in Instance B.
   * *   If the instance in which you want to create the topic does not use a namespace, the topic name must be globally unique across instances and regions. The topic name cannot be the same as an existing topic name or group ID in all ApsaraMQ for RocketMQ instances that belong to your Alibaba Cloud account.
   * 
   * > To check whether an instance uses a namespace, log on to the ApsaraMQ for RocketMQ console, go to the **Instance Details** page, and then view the value of the Namespace field in the **Basic Information** section.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      messageType: 'MessageType',
      remark: 'Remark',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      messageType: 'number',
      remark: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicCreateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * B6949B58-223E-4B75-B4FE-7797C15E****
   */
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

export class OnsTopicCreateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsTopicCreateResponseBody;
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
      body: OnsTopicCreateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicDeleteRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance to which the topic you want to delete belongs.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the topic that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicDeleteResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 4189D4A6-231A-4028-8D89-F66A76C1****
   */
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

export class OnsTopicDeleteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsTopicDeleteResponseBody;
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
      body: OnsTopicDeleteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance that contains the topics you want to query.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of tags that are attached to the topic. A maximum of 20 tags can be included in the list.
   */
  tag?: OnsTopicListRequestTag[];
  /**
   * @remarks
   * The name of the topic that you want to query. This parameter is required if you want to query a specific topic. If you do not include this parameter in a request, all topics that you can access are queried.
   * 
   * @example
   * test
   */
  topic?: string;
  /**
   * @remarks
   * The user ID of the topic owner. Set this parameter to an Alibaba Cloud account ID.
   * 
   * @example
   * 138015630679****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tag: 'Tag',
      topic: 'Topic',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      tag: { 'type': 'array', 'itemType': OnsTopicListRequestTag },
      topic: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the topics.
   */
  data?: OnsTopicListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 4A978869-7681-4529-B470-107E1379****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsTopicListResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsTopicListResponseBody;
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
      body: OnsTopicListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance that contains the topic you want to query.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the topic that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data structure of the queried topic.
   */
  data?: OnsTopicStatusResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 427EE49D-D762-41FB-8F3D-9BAC96C3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsTopicStatusResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsTopicStatusResponseBody;
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
      body: OnsTopicStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance that contains the topic you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the topic that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsTopicSubDetailResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 87B6207F-2908-42B5-A134-84956DCA****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsTopicSubDetailResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsTopicSubDetailResponseBody;
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
      body: OnsTopicSubDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicUpdateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance to which the topic belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The read/write mode that you want to configure for the topic. Valid values:
   * 
   * *   **6**: Both read and write operations are allowed.
   * *   **4**: Write operations are forbidden.
   * *   **2**: Read operations are forbidden.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  perm?: number;
  /**
   * @remarks
   * The name of the topic that you want to manage.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      perm: 'Perm',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      perm: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicUpdateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 81979ADA-4A78-4F64-9DEC-5700446D****
   */
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

export class OnsTopicUpdateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsTopicUpdateResponseBody;
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
      body: OnsTopicUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance to which the message you want to query belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the task that was created to query the trace of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * 272967562652883649157096685****
   */
  queryId?: string;
  /**
   * @remarks
   * The topic to which the message belongs.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queryId: 'QueryId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queryId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 84EE24D2-851F-40D6-B99E-4D6AB909****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the message trace.
   */
  traceData?: OnsTraceGetResultResponseBodyTraceData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traceData: 'TraceData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traceData: OnsTraceGetResultResponseBodyTraceData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsTraceGetResultResponseBody;
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
      body: OnsTraceGetResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgIdRequest extends $tea.Model {
  /**
   * @remarks
   * The beginning of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570852800000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570968000000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance that contains the specified topic.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1E05791C117818B4AAC23B1BB0CE****
   */
  msgId?: string;
  /**
   * @remarks
   * The topic that contains the message you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      instanceId: 'string',
      msgId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the query task. You can call the [OnsTraceGetResult](https://help.aliyun.com/document_detail/59832.html) operation to query the details of the message trace based on the task ID.
   * 
   * @example
   * 272967562652883649157096685****
   */
  queryId?: string;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * B93332A3-160D-404F-880F-1F8736D1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsTraceQueryByMsgIdResponseBody;
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
      body: OnsTraceQueryByMsgIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The start of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570852800000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end of the time range to query. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570968000000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance that contains the specified topic.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The key of the message that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * ORDERID_100
   */
  msgKey?: string;
  /**
   * @remarks
   * The topic that contains the message you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      msgKey: 'MsgKey',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      instanceId: 'string',
      msgKey: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the query task. You can call the [OnsTraceGetResult](https://help.aliyun.com/document_detail/59832.html) operation to query the details of the message trace based on the task ID.
   * 
   * @example
   * 272967562652883649157096685****
   */
  queryId?: string;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * F8654231-122A-4DBD-801F-38E35538****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceQueryByMsgKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsTraceQueryByMsgKeyResponseBody;
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
      body: OnsTraceQueryByMsgKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsRequest extends $tea.Model {
  /**
   * @remarks
   * The timestamp that indicates the beginning of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570852800000
   */
  beginTime?: number;
  /**
   * @remarks
   * The timestamp that indicates the end of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570868400000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the consumer group that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_test
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the instance to which the consumer group you want to query belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The sampling period. Unit: minutes. Valid values: 1, 5, and 10.
   * 
   * @example
   * 10
   */
  period?: number;
  /**
   * @remarks
   * The name of the topic that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topic?: string;
  /**
   * @remarks
   * The type of information that you want to query. Valid values:
   * 
   * *   **0**: the number of messages that are consumed during each sampling period.
   * *   **1**: the TPS for message consumption during each sampling period.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      period: 'Period',
      topic: 'Topic',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      groupId: 'string',
      instanceId: 'string',
      period: 'number',
      topic: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsTrendGroupOutputTpsResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use the ID to troubleshoot issues.
   * 
   * @example
   * CE57AEDC-8FD2-43ED-8E3B-1F878077****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsTrendGroupOutputTpsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsTrendGroupOutputTpsResponseBody;
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
      body: OnsTrendGroupOutputTpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsRequest extends $tea.Model {
  /**
   * @remarks
   * The timestamp that indicates the beginning of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570852800000
   */
  beginTime?: number;
  /**
   * @remarks
   * The timestamp that indicates the end of the time range to query. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1570868400000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the instance to which the topic you want to query belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The sampling period. Unit: minutes. Valid values: 1, 5, and 10.
   * 
   * @example
   * 10
   */
  period?: number;
  /**
   * @remarks
   * The name of the topic that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  topic?: string;
  /**
   * @remarks
   * The type of information that you want to query. Valid values:
   * 
   * *   **0**: the number of messages that are published to the topic during each sampling period.
   * *   **1**: the TPS for message publishing in the topic during each sampling period.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      period: 'Period',
      topic: 'Topic',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      instanceId: 'string',
      period: 'number',
      topic: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: OnsTrendTopicInputTpsResponseBodyData;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use the ID to troubleshoot issues.
   * 
   * @example
   * E213AD8A-0730-4B3D-A35A-340DA47D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: OnsTrendTopicInputTpsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OnsTrendTopicInputTpsResponseBody;
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
      body: OnsTrendTopicInputTpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenOnsServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 2068689****0272
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 8C5B4603-8977-4513-AB60-9C3E2F88****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenOnsServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenOnsServiceResponseBody;
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
      body: OpenOnsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ instance that contains the resource to which you want to attach tags.
   * 
   * > This parameter is required when you attach tags to a topic or a group.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * TopicA
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource to which you want to attach tags. Valid values:
   * 
   * *   **INSTANCE**
   * *   **TOPIC**
   * *   **GROUP**
   * 
   * This parameter is required.
   * 
   * @example
   * TOPIC
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that you want to attach to the resource.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 301D2CBE-66F8-403D-AEC0-82582478****
   */
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

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags that are attached to the specified resource. This parameter takes effect only if the **TagKey** parameter is empty. Default value: **false**.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required when you detach tags from a topic or a group.
   * 
   * @example
   * MQ_INST_188077086902****_BX4jvZZG
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * TopicA
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource from which you want to detach tags. Valid values:
   * 
   * *   **INSTANCE**
   * *   **TOPIC**
   * *   **GROUP**
   * 
   * This parameter is required.
   * 
   * @example
   * TOPIC
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys of the resource.
   * 
   * @example
   * CartService
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      instanceId: 'InstanceId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      instanceId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 19780F2E-7841-4E0F-A5D9-C64A0530****
   */
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

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag that you want to detach from the resource.
   * 
   * *   If you include this parameter in a request, the value of this parameter cannot be an empty string.
   * *   The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * CartService
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that you want to query.
   * 
   * *   The value of this parameter can be an empty string.
   * *   The tag key must be 1 to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * ServiceA
   */
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates the ID of the resource.
   * 
   * @example
   * TopicA
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource whose tags you want to query.
   * 
   * *   ALIYUN::MQ::INSTANCE: indicates that the resource is a ApsaraMQ for RocketMQ instance.
   * *   ALIYUN::MQ::TOPIC: indicates that the resource is a topic.
   * *   ALIYUN::MQ::GROUP: indicates that the resource is a group.
   * 
   * @example
   * ALIYUN::MQ::TOPIC
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * CartService
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * ServiceA
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateResponseBodyDataDetailInTopicListDetailInTopicDo extends $tea.Model {
  /**
   * @remarks
   * The maximum latency of message consumption in the topic.
   * 
   * @example
   * 10000
   */
  delayTime?: number;
  /**
   * @remarks
   * The point in time when the latest consumed message in the topic was produced.
   * 
   * @example
   * 1566231000000
   */
  lastTimestamp?: number;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * test-mq-topic
   */
  topic?: string;
  /**
   * @remarks
   * The number of accumulated messages in the topic.
   * 
   * @example
   * 100
   */
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      delayTime: 'DelayTime',
      lastTimestamp: 'LastTimestamp',
      topic: 'Topic',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayTime: 'number',
      lastTimestamp: 'number',
      topic: 'string',
      totalDiff: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateResponseBodyDataDetailInTopicList extends $tea.Model {
  detailInTopicDo?: OnsConsumerAccumulateResponseBodyDataDetailInTopicListDetailInTopicDo[];
  static names(): { [key: string]: string } {
    return {
      detailInTopicDo: 'DetailInTopicDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInTopicDo: { 'type': 'array', 'itemType': OnsConsumerAccumulateResponseBodyDataDetailInTopicListDetailInTopicDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerAccumulateResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The transactions per second (TPS) for message consumption performed by consumers in the group.
   * 
   * @example
   * 10
   */
  consumeTps?: number;
  /**
   * @remarks
   * The consumption latency.
   * 
   * @example
   * 10000
   */
  delayTime?: number;
  /**
   * @remarks
   * The information about each topic to which the consumer group subscribes. If the **Detail** parameter in the request is set to **false**, the value of this parameter is empty.
   */
  detailInTopicList?: OnsConsumerAccumulateResponseBodyDataDetailInTopicList;
  /**
   * @remarks
   * The point in time when the latest message consumed by a consumer in the consumer group was produced.
   * 
   * @example
   * 1566231000000
   */
  lastTimestamp?: number;
  /**
   * @remarks
   * Indicates whether the consumer group is online. The consumer group is online if one of the consumers in the group is online. Valid values:
   * 
   * *   **true**: The consumer group is online.
   * *   **false**: The consumer group is offline.
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The total number of accumulated messages in all topics to which the consumer group subscribes.
   * 
   * @example
   * 100
   */
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      consumeTps: 'ConsumeTps',
      delayTime: 'DelayTime',
      detailInTopicList: 'DetailInTopicList',
      lastTimestamp: 'LastTimestamp',
      online: 'Online',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTps: 'number',
      delayTime: 'number',
      detailInTopicList: OnsConsumerAccumulateResponseBodyDataDetailInTopicList,
      lastTimestamp: 'number',
      online: 'boolean',
      totalDiff: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionResponseBodyDataConnectionListConnectionDo extends $tea.Model {
  /**
   * @remarks
   * The IP address and port number of the consumer client.
   * 
   * @example
   * 30.5.121.**
   */
  clientAddr?: string;
  /**
   * @remarks
   * The ID of the consumer client.
   * 
   * @example
   * 30.5.121.**@24813#-1999745829#-1737591554#453111174894656
   */
  clientId?: string;
  /**
   * @remarks
   * The programming language in which the consumer application was developed.
   * 
   * @example
   * JAVA
   */
  language?: string;
  /**
   * @remarks
   * The version of the consumer client.
   * 
   * @example
   * V4_3_6
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientAddr: 'ClientAddr',
      clientId: 'ClientId',
      language: 'Language',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientAddr: 'string',
      clientId: 'string',
      language: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionResponseBodyDataConnectionList extends $tea.Model {
  connectionDo?: OnsConsumerGetConnectionResponseBodyDataConnectionListConnectionDo[];
  static names(): { [key: string]: string } {
    return {
      connectionDo: 'ConnectionDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDo: { 'type': 'array', 'itemType': OnsConsumerGetConnectionResponseBodyDataConnectionListConnectionDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerGetConnectionResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The client connection information of the consumer group.
   */
  connectionList?: OnsConsumerGetConnectionResponseBodyDataConnectionList;
  static names(): { [key: string]: string } {
    return {
      connectionList: 'ConnectionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionList: OnsConsumerGetConnectionResponseBodyDataConnectionList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConnectionSetConnectionDo extends $tea.Model {
  /**
   * @remarks
   * The IP address and port number of the consumer instance.
   * 
   * @example
   * 30.5.121.**
   */
  clientAddr?: string;
  /**
   * @remarks
   * The ID of the consumer instance.
   * 
   * @example
   * 30.5.121.**@25560#-1999745829#-1737591554#458773089270275
   */
  clientId?: string;
  /**
   * @remarks
   * The programming language in which the consumer is developed.
   * 
   * @example
   * JAVA
   */
  language?: string;
  /**
   * @remarks
   * The private or public IP address of the host.
   * 
   * @example
   * 42.120.74.**
   */
  remoteIP?: string;
  /**
   * @remarks
   * The version of the consumer client.
   * 
   * @example
   * V4_3_6_SNAPSHOT
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientAddr: 'ClientAddr',
      clientId: 'ClientId',
      language: 'Language',
      remoteIP: 'RemoteIP',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientAddr: 'string',
      clientId: 'string',
      language: 'string',
      remoteIP: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConnectionSet extends $tea.Model {
  connectionDo?: OnsConsumerStatusResponseBodyDataConnectionSetConnectionDo[];
  static names(): { [key: string]: string } {
    return {
      connectionDo: 'ConnectionDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDo: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataConnectionSetConnectionDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDoTrackList extends $tea.Model {
  track?: string[];
  static names(): { [key: string]: string } {
    return {
      track: 'Track',
    };
  }

  static types(): { [key: string]: any } {
    return {
      track: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDo extends $tea.Model {
  /**
   * @remarks
   * The name of the thread.
   * 
   * @example
   * ConsumeMessageThread_0
   */
  thread?: string;
  /**
   * @remarks
   * The details of thread stack traces.
   */
  trackList?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDoTrackList;
  static names(): { [key: string]: string } {
    return {
      thread: 'Thread',
      trackList: 'TrackList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thread: 'string',
      trackList: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDoTrackList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstack extends $tea.Model {
  threadTrackDo?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDo[];
  static names(): { [key: string]: string } {
    return {
      threadTrackDo: 'ThreadTrackDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threadTrackDo: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstackThreadTrackDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataListConsumerRunningDataDo extends $tea.Model {
  /**
   * @remarks
   * The number of messages that failed to be consumed each hour.
   * 
   * @example
   * 0
   */
  failedCountPerHour?: number;
  /**
   * @remarks
   * The TPS for failed message consumption.
   * 
   * @example
   * 0
   */
  failedTps?: number;
  /**
   * @remarks
   * The TPS for successful message consumption.
   * 
   * @example
   * 0
   */
  okTps?: number;
  /**
   * @remarks
   * The consumption RT. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  rt?: number;
  /**
   * @remarks
   * The name of the topic to which the consumer subscribes.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      failedCountPerHour: 'FailedCountPerHour',
      failedTps: 'FailedTps',
      okTps: 'OkTps',
      rt: 'Rt',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCountPerHour: 'number',
      failedTps: 'number',
      okTps: 'number',
      rt: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataList extends $tea.Model {
  consumerRunningDataDo?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataListConsumerRunningDataDo[];
  static names(): { [key: string]: string } {
    return {
      consumerRunningDataDo: 'ConsumerRunningDataDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerRunningDataDo: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataListConsumerRunningDataDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionDataTagsSet extends $tea.Model {
  tag?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionData extends $tea.Model {
  /**
   * @remarks
   * The expression that is used to specify the tags of messages in the subscribed topic.
   * 
   * @example
   * *
   */
  subString?: string;
  /**
   * @remarks
   * The subscription version. The value is of the LONG type and is automatically incremented.
   * 
   * @example
   * 1570701364301
   */
  subVersion?: number;
  /**
   * @remarks
   * The information about the tags of the topic to which the consumer subscribes.
   */
  tagsSet?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionDataTagsSet;
  /**
   * @remarks
   * The name of the topic to which the consumer subscribes.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      subString: 'SubString',
      subVersion: 'SubVersion',
      tagsSet: 'TagsSet',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subString: 'string',
      subVersion: 'number',
      tagsSet: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionDataTagsSet,
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSet extends $tea.Model {
  subscriptionData?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionData[];
  static names(): { [key: string]: string } {
    return {
      subscriptionData: 'SubscriptionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionData: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSetSubscriptionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDo extends $tea.Model {
  /**
   * @remarks
   * The ID of the consumer instance.
   * 
   * @example
   * ``30.5.**.**``@25560#-1999745829#-1737591554#458773089270275
   */
  clientId?: string;
  /**
   * @remarks
   * The connection information.
   * 
   * @example
   * **
   */
  connection?: string;
  /**
   * @remarks
   * The consumption mode. Valid values:
   * 
   * *   **CLUSTERING**: the clustering consumption mode
   * *   **BROADCASTING**: the broadcasting consumption mode
   * 
   * For more information about consumption modes, see [Clustering consumption and broadcasting consumption](https://help.aliyun.com/document_detail/43163.html).
   * 
   * @example
   * CLUSTERING
   */
  consumeModel?: string;
  /**
   * @remarks
   * The mode in which the consumer consumes messages. Valid values:
   * 
   * *   **PUSH**: The ApsaraMQ for RocketMQ broker pushes messages to the consumer.
   * *   **PULL**: The consumer pulls messages from the ApsaraMQ for RocketMQ broker.
   * 
   * @example
   * PUSH
   */
  consumeType?: string;
  /**
   * @remarks
   * The information about thread stack traces. If you want to obtain the information about thread stack traces, make sure that the **NeedJstack** parameter in the request is set to **true**. If the NeedJstack parameter is not set to true, the value of this parameter is empty.
   */
  jstack?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstack;
  /**
   * @remarks
   * The programming language that the consumer supports.
   * 
   * @example
   * JAVA
   */
  language?: string;
  /**
   * @remarks
   * The most recent point in time when a message was consumed.
   * 
   * The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1570701368114
   */
  lastTimeStamp?: number;
  /**
   * @remarks
   * The real-time statistics.
   */
  runningDataList?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataList;
  /**
   * @remarks
   * The earliest point in time when a message was consumed.
   * 
   * The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1570701361528
   */
  startTimeStamp?: number;
  /**
   * @remarks
   * The information about subscriptions.
   */
  subscriptionSet?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSet;
  /**
   * @remarks
   * The number of consumer threads.
   * 
   * @example
   * 20
   */
  threadCount?: number;
  /**
   * @remarks
   * The version of the consumer client.
   * 
   * @example
   * V4_3_6
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      connection: 'Connection',
      consumeModel: 'ConsumeModel',
      consumeType: 'ConsumeType',
      jstack: 'Jstack',
      language: 'Language',
      lastTimeStamp: 'LastTimeStamp',
      runningDataList: 'RunningDataList',
      startTimeStamp: 'StartTimeStamp',
      subscriptionSet: 'SubscriptionSet',
      threadCount: 'ThreadCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      connection: 'string',
      consumeModel: 'string',
      consumeType: 'string',
      jstack: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoJstack,
      language: 'string',
      lastTimeStamp: 'number',
      runningDataList: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoRunningDataList,
      startTimeStamp: 'number',
      subscriptionSet: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDoSubscriptionSet,
      threadCount: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataConsumerConnectionInfoList extends $tea.Model {
  consumerConnectionInfoDo?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDo[];
  static names(): { [key: string]: string } {
    return {
      consumerConnectionInfoDo: 'ConsumerConnectionInfoDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerConnectionInfoDo: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataConsumerConnectionInfoListConsumerConnectionInfoDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataDetailInTopicListDetailInTopicDo extends $tea.Model {
  /**
   * @remarks
   * The latency of message consumption in the topic. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  delayTime?: number;
  /**
   * @remarks
   * The most recent point in time when a message was consumed.
   * 
   * The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1570701259403
   */
  lastTimestamp?: number;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  /**
   * @remarks
   * The number of accumulated messages in the topic.
   * 
   * @example
   * 0
   */
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      delayTime: 'DelayTime',
      lastTimestamp: 'LastTimestamp',
      topic: 'Topic',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayTime: 'number',
      lastTimestamp: 'number',
      topic: 'string',
      totalDiff: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyDataDetailInTopicList extends $tea.Model {
  detailInTopicDo?: OnsConsumerStatusResponseBodyDataDetailInTopicListDetailInTopicDo[];
  static names(): { [key: string]: string } {
    return {
      detailInTopicDo: 'DetailInTopicDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInTopicDo: { 'type': 'array', 'itemType': OnsConsumerStatusResponseBodyDataDetailInTopicListDetailInTopicDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerStatusResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The information about online consumers in the consumer group.
   */
  connectionSet?: OnsConsumerStatusResponseBodyDataConnectionSet;
  /**
   * @remarks
   * The consumption mode. Valid values:
   * 
   * *   **CLUSTERING**: the clustering consumption mode
   * *   **BROADCASTING**: the broadcasting consumption mode
   * 
   * For more information about consumption modes, see [Clustering consumption and broadcasting consumption](https://help.aliyun.com/document_detail/43163.html).
   * 
   * @example
   * CLUSTERING
   */
  consumeModel?: string;
  /**
   * @remarks
   * The TPS for message consumption.
   * 
   * @example
   * 0
   */
  consumeTps?: number;
  /**
   * @remarks
   * The details of online consumers in the consumer group, including the information about the thread stack traces and the consumption response time (RT). If you want to obtain the details of online consumers in the consumer group, make sure that the **Detail** parameter in the request is set to **true**. If the Detail parameter is not set to true, the value of this parameter is empty.
   */
  consumerConnectionInfoList?: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoList;
  /**
   * @remarks
   * The maximum latency of message consumption in all topics to which the consumer group subscribes. Unit: milliseconds.
   * 
   * @example
   * 100857
   */
  delayTime?: number;
  /**
   * @remarks
   * The information about message consumption by topic. If you want to obtain the information about the consumption status of each topic, make sure that the **Detail** parameter in the request is set to **true**. If the Detail parameter is not set to true, the value of this parameter is empty.
   */
  detailInTopicList?: OnsConsumerStatusResponseBodyDataDetailInTopicList;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The most recent point in time when a message was consumed.
   * 
   * The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1566883844954
   */
  lastTimestamp?: number;
  /**
   * @remarks
   * Indicates whether the consumer group is online.
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * Indicates whether load balancing is performed as expected. Valid values:
   * 
   * *   **true**: Load balancing is performed as expected.
   * *   **false**: Load balancing is not performed as expected.
   * 
   * @example
   * true
   */
  rebalanceOK?: boolean;
  /**
   * @remarks
   * Indicates whether all consumers in the consumer group subscribe to the same topics and tags.
   * 
   * @example
   * true
   */
  subscriptionSame?: boolean;
  /**
   * @remarks
   * The total number of accumulated messages.
   * 
   * @example
   * 197
   */
  totalDiff?: number;
  static names(): { [key: string]: string } {
    return {
      connectionSet: 'ConnectionSet',
      consumeModel: 'ConsumeModel',
      consumeTps: 'ConsumeTps',
      consumerConnectionInfoList: 'ConsumerConnectionInfoList',
      delayTime: 'DelayTime',
      detailInTopicList: 'DetailInTopicList',
      instanceId: 'InstanceId',
      lastTimestamp: 'LastTimestamp',
      online: 'Online',
      rebalanceOK: 'RebalanceOK',
      subscriptionSame: 'SubscriptionSame',
      totalDiff: 'TotalDiff',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionSet: OnsConsumerStatusResponseBodyDataConnectionSet,
      consumeModel: 'string',
      consumeTps: 'number',
      consumerConnectionInfoList: OnsConsumerStatusResponseBodyDataConsumerConnectionInfoList,
      delayTime: 'number',
      detailInTopicList: OnsConsumerStatusResponseBodyDataDetailInTopicList,
      instanceId: 'string',
      lastTimestamp: 'number',
      online: 'boolean',
      rebalanceOK: 'boolean',
      subscriptionSame: 'boolean',
      totalDiff: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsConsumerTimeSpanResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The most recent point in time when a message in the topic was consumed by the customer group.
   * 
   * @example
   * 1570761026400
   */
  consumeTimeStamp?: number;
  /**
   * @remarks
   * The ID of the instance to which the consumer group belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The point in time when the earliest stored message was published to the topic.
   * 
   * @example
   * 1570761026804
   */
  maxTimeStamp?: number;
  /**
   * @remarks
   * The point in time when the most recently stored message was published to the topic.
   * 
   * @example
   * 1570701231122
   */
  minTimeStamp?: number;
  /**
   * @remarks
   * The name of the topic that you want to query.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      consumeTimeStamp: 'ConsumeTimeStamp',
      instanceId: 'InstanceId',
      maxTimeStamp: 'MaxTimeStamp',
      minTimeStamp: 'MinTimeStamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeTimeStamp: 'number',
      instanceId: 'string',
      maxTimeStamp: 'number',
      minTimeStamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageGetByIdResponseBodyDataPropertyListMessageProperty extends $tea.Model {
  /**
   * @remarks
   * The name of the attribute. Valid values:
   * 
   * *   **TRACE_ON**: indicates whether the message trace exists.
   * *   **KEYS**: indicates the key of the message.
   * *   **TAGS**: indicates the tag that is attached to the message.
   * *   **INSTANCE_ID**: indicates the ID of the instance that contains the message.
   * 
   * For information about the terms that are used in ApsaraMQ for RocketMQ, see [Terms](https://help.aliyun.com/document_detail/29533.html).
   * 
   * @example
   * TAGS
   */
  name?: string;
  /**
   * @remarks
   * The value of the attribute.
   * 
   * @example
   * TagA
   */
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

export class OnsDLQMessageGetByIdResponseBodyDataPropertyList extends $tea.Model {
  messageProperty?: OnsDLQMessageGetByIdResponseBodyDataPropertyListMessageProperty[];
  static names(): { [key: string]: string } {
    return {
      messageProperty: 'MessageProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageProperty: { 'type': 'array', 'itemType': OnsDLQMessageGetByIdResponseBodyDataPropertyListMessageProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageGetByIdResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The cyclic redundancy check (CRC) value of the message body.
   * 
   * @example
   * 914112295
   */
  bodyCRC?: number;
  /**
   * @remarks
   * The producer instance that generated the message.
   * 
   * @example
   * ``42.120.**.**``:64646
   */
  bornHost?: string;
  /**
   * @remarks
   * The timestamp that indicates the point in time when the message was generated. Unit: milliseconds.
   * 
   * @example
   * 1570761026630
   */
  bornTimestamp?: number;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the dead-letter message.
   * 
   * @example
   * 0BC16699165C03B925DB8A404E2D****
   */
  msgId?: string;
  /**
   * @remarks
   * The attributes of the message.
   */
  propertyList?: OnsDLQMessageGetByIdResponseBodyDataPropertyList;
  /**
   * @remarks
   * The number of retries that were performed to send the message to consumers.
   * 
   * @example
   * 1
   */
  reconsumeTimes?: number;
  /**
   * @remarks
   * The ApsaraMQ for RocketMQ broker that stores the message.
   * 
   * @example
   * 11.220.***.***:10911
   */
  storeHost?: string;
  /**
   * @remarks
   * The size of the message. Unit: KB.
   * 
   * @example
   * 407
   */
  storeSize?: number;
  /**
   * @remarks
   * The timestamp that indicates the point in time when the ApsaraMQ for RocketMQ broker stored the message. Unit: milliseconds.
   * 
   * @example
   * 1570761026708
   */
  storeTimestamp?: number;
  /**
   * @remarks
   * The topic to which the message belongs.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
      bornTimestamp: 'BornTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      propertyList: 'PropertyList',
      reconsumeTimes: 'ReconsumeTimes',
      storeHost: 'StoreHost',
      storeSize: 'StoreSize',
      storeTimestamp: 'StoreTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyCRC: 'number',
      bornHost: 'string',
      bornTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      propertyList: OnsDLQMessageGetByIdResponseBodyDataPropertyList,
      reconsumeTimes: 'number',
      storeHost: 'string',
      storeSize: 'number',
      storeTimestamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty extends $tea.Model {
  /**
   * @remarks
   * The name of the attribute. Valid values:
   * 
   * *   **TRACE_ON**: indicates whether a trace of the message exists.
   * *   **KEYS**: indicates the key of the message.
   * *   **TAGS**: indicates the tag that is attached to the message.
   * *   **INSTANCE_ID**: indicates the ID of the instance that contains the message.
   * 
   * For information about the terms that are used in ApsaraMQ for RocketMQ, see [Terms](https://help.aliyun.com/document_detail/29533.html).
   * 
   * @example
   * TAGS
   */
  name?: string;
  /**
   * @remarks
   * The value of the attribute.
   * 
   * @example
   * TagA
   */
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

export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList extends $tea.Model {
  messageProperty?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty[];
  static names(): { [key: string]: string } {
    return {
      messageProperty: 'MessageProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageProperty: { 'type': 'array', 'itemType': OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo extends $tea.Model {
  /**
   * @remarks
   * The cyclic redundancy check (CRC) value of the message body.
   * 
   * @example
   * 914112295
   */
  bodyCRC?: number;
  /**
   * @remarks
   * The producer instance that generated the message.
   * 
   * @example
   * 42.120.***.***:59270
   */
  bornHost?: string;
  /**
   * @remarks
   * The timestamp that indicates when the message was produced.
   * 
   * @example
   * 1570760999721
   */
  bornTimestamp?: number;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * 1E0578FE110F18B4AAC235C05F2*****
   */
  msgId?: string;
  /**
   * @remarks
   * The attributes of the message.
   */
  propertyList?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList;
  /**
   * @remarks
   * The number of retries that were performed to send the message to consumers.
   * 
   * @example
   * 1
   */
  reconsumeTimes?: number;
  /**
   * @remarks
   * The ApsaraMQ for RocketMQ broker that stores the message.
   * 
   * @example
   * 11.193.***.***:10911
   */
  storeHost?: string;
  /**
   * @remarks
   * The size of the message. Unit: KB.
   * 
   * @example
   * 406
   */
  storeSize?: number;
  /**
   * @remarks
   * The timestamp that indicates the point in time when the ApsaraMQ for RocketMQ broker stored the message.
   * 
   * @example
   * 1570760999811
   */
  storeTimestamp?: number;
  /**
   * @remarks
   * The topic to which the message belongs.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
      bornTimestamp: 'BornTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      propertyList: 'PropertyList',
      reconsumeTimes: 'ReconsumeTimes',
      storeHost: 'StoreHost',
      storeSize: 'StoreSize',
      storeTimestamp: 'StoreTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyCRC: 'number',
      bornHost: 'string',
      bornTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      propertyList: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList,
      reconsumeTimes: 'number',
      storeHost: 'string',
      storeSize: 'number',
      storeTimestamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundList extends $tea.Model {
  onsRestMessageDo?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo[];
  static names(): { [key: string]: string } {
    return {
      onsRestMessageDo: 'OnsRestMessageDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onsRestMessageDo: { 'type': 'array', 'itemType': OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDo extends $tea.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 400
   */
  maxPageCount?: number;
  /**
   * @remarks
   * The information about dead-letter messages that are returned on the current page. The information that is contained in this parameter is the same as the information that is returned by the [OnsDLQMessageGetById](https://help.aliyun.com/document_detail/112667.html) operation.
   */
  msgFoundList?: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundList;
  /**
   * @remarks
   * The ID of the query task. The first time you call this operation to query the dead-letter messages that are sent to a specified consumer group within a specified time range, this parameter is returned. You can use the task ID to query the details of dead-letter messages on other returned pages.
   * 
   * @example
   * 0BC1310300002A9F000021E4D7A48346
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      maxPageCount: 'MaxPageCount',
      msgFoundList: 'MsgFoundList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      maxPageCount: 'number',
      msgFoundList: OnsDLQMessagePageQueryByGroupIdResponseBodyMsgFoundDoMsgFoundList,
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsDLQMessageResendByIdResponseBodyData extends $tea.Model {
  msgId?: string[];
  static names(): { [key: string]: string } {
    return {
      msgId: 'MsgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msgId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag that is attached to the consumer group. This parameter is not required. If you configure this parameter, you must configure the **Key** parameter.**** If you configure both the Key and Value parameters, the consumer groups are filtered based on the specified tag. If you do not configure these parameters, all consumer groups are queried.
   * 
   * *   The value of this parameter cannot be an empty string.
   * *   The tag value must be 1 to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * CartService
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that is attached to the group. This parameter is not required. If you configure this parameter, you must configure the **Key** parameter.**** If you configure both the Key and Value parameters, the consumer groups are filtered based on the specified tag. If you do not configure these parameters, all consumer groups are queried.
   * 
   * *   The value of this parameter can be an empty string.
   * *   The tag key must be 1 to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * This parameter is required.
   * 
   * @example
   * ServiceA
   */
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

export class OnsGroupListResponseBodyDataSubscribeInfoDoTagsTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag that is attached to the consumer group.
   * 
   * @example
   * CartService
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that is attached to the consumer group.
   * 
   * @example
   * ServiceA
   */
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

export class OnsGroupListResponseBodyDataSubscribeInfoDoTags extends $tea.Model {
  tag?: OnsGroupListResponseBodyDataSubscribeInfoDoTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': OnsGroupListResponseBodyDataSubscribeInfoDoTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListResponseBodyDataSubscribeInfoDo extends $tea.Model {
  /**
   * @remarks
   * The point in time when the consumer group was created.
   * 
   * @example
   * 1568896605000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The protocol over which the queried consumer group publishes and subscribes to messages. All clients in a consumer group communicate with the ApsaraMQ for RocketMQ broker over the same protocol. You must create different consumer groups for TCP clients and HTTP clients. Valid values:
   * 
   * *   **tcp**: indicates that the consumer group publishes and subscribes to messages over TCP.
   * *   **http**: indicates that the consumer group publishes and subscribes to messages over HTTP.
   * 
   * @example
   * tcp
   */
  groupType?: string;
  /**
   * @remarks
   * Indicates whether the instance uses a namespace. Valid values:
   * 
   * *   **true**: The instance uses a separate namespace. The name of each resource must be unique in the instance. The names of resources in different instances can be the same.
   * *   **false**: The instance does not use a separate namespace. The name of each resource must be globally unique within the instance and across all instances.
   * 
   * @example
   * true
   */
  independentNaming?: boolean;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user who created the consumer group.
   * 
   * @example
   * 138015630679****
   */
  owner?: string;
  /**
   * @remarks
   * The description of the consumer group.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The tags that are attached to the consumer group.
   */
  tags?: OnsGroupListResponseBodyDataSubscribeInfoDoTags;
  /**
   * @remarks
   * The most recent point in time when the consumer group was updated.
   * 
   * @example
   * 1570700979000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      groupId: 'GroupId',
      groupType: 'GroupType',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      owner: 'Owner',
      remark: 'Remark',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      groupId: 'string',
      groupType: 'string',
      independentNaming: 'boolean',
      instanceId: 'string',
      owner: 'string',
      remark: 'string',
      tags: OnsGroupListResponseBodyDataSubscribeInfoDoTags,
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupListResponseBodyData extends $tea.Model {
  subscribeInfoDo?: OnsGroupListResponseBodyDataSubscribeInfoDo[];
  static names(): { [key: string]: string } {
    return {
      subscribeInfoDo: 'SubscribeInfoDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscribeInfoDo: { 'type': 'array', 'itemType': OnsGroupListResponseBodyDataSubscribeInfoDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList extends $tea.Model {
  /**
   * @remarks
   * The expression based on which consumers in the consumer group subscribe to the topic.
   * 
   * @example
   * *
   */
  subString?: string;
  /**
   * @remarks
   * The name of the topic to which consumers in the consumer group subscribe.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      subString: 'SubString',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subString: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupSubDetailResponseBodyDataSubscriptionDataList extends $tea.Model {
  subscriptionDataList?: OnsGroupSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList[];
  static names(): { [key: string]: string } {
    return {
      subscriptionDataList: 'SubscriptionDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionDataList: { 'type': 'array', 'itemType': OnsGroupSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsGroupSubDetailResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the consumer group that you want to query.
   * 
   * @example
   * GID_test_group_id
   */
  groupId?: string;
  /**
   * @remarks
   * The consumption mode. Valid values:
   * 
   * *   **CLUSTERING**: the clustering consumption mode
   * *   **BROADCASTING**: the broadcasting consumption mode
   * 
   * For more information about consumption modes, see [Clustering consumption and broadcasting consumption](https://help.aliyun.com/document_detail/43163.html).
   * 
   * @example
   * CLUSTERING
   */
  messageModel?: string;
  /**
   * @remarks
   * Indicates whether consumers in the group are online.
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The topics to which consumers in the consumer group subscribe. If all consumers in the specified group are offline, no topics are returned.
   */
  subscriptionDataList?: OnsGroupSubDetailResponseBodyDataSubscriptionDataList;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      messageModel: 'MessageModel',
      online: 'Online',
      subscriptionDataList: 'SubscriptionDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      messageModel: 'string',
      online: 'boolean',
      subscriptionDataList: OnsGroupSubDetailResponseBodyDataSubscriptionDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceBaseInfoResponseBodyInstanceBaseInfoEndpoints extends $tea.Model {
  /**
   * @remarks
   * The private HTTP endpoint of the instance.
   * 
   * @example
   * http://138015630679****.mqrest.cn-chengdu-internal.aliyuncs.com
   */
  httpInternalEndpoint?: string;
  /**
   * @remarks
   * The public HTTP endpoint of the instance.
   * 
   * @example
   * http://138015630679****.mqrest.cn-chengdu.aliyuncs.com
   */
  httpInternetEndpoint?: string;
  /**
   * @remarks
   * The public HTTPS endpoint of the instance.
   * 
   * @example
   * https://138015630679****.mqrest.cn-chengdu.aliyuncs.com
   */
  httpInternetSecureEndpoint?: string;
  /**
   * @remarks
   * The private TCP endpoint of the instance.
   * 
   * @example
   * http://MQ_INST_138015630679****_BAAy1Hac.cn-chengdu.mq-internal.aliyuncs.com:8080
   */
  tcpEndpoint?: string;
  /**
   * @remarks
   * The public TCP endpoint of the instance.
   * 
   * *   Only instances that are deployed in the China (Chengdu), China (Qingdao), or China (Shenzhen) region can be accessed by using public TCP endpoints.
   * 
   * *   Before you use a public TCP endpoint, make sure that your client SDK meets the following requirements:
   * 
   *     *   TCP client SDK for Java: V2.0.0.Final or later For more information, see [Release notes for the SDK for Java](https://help.aliyun.com/document_detail/325569.html).
   *     *   TCP client SDK for C++: V3.0.0 or later For more information, see [Release notes for the SDK for C++](https://help.aliyun.com/document_detail/325570.html).
   * 
   * *   You are charged for Internet traffic when you use a public TCP endpoint. For more information, see [Internet traffic fee](https://help.aliyun.com/document_detail/325571.html).
   * 
   * @example
   * http://MQ_INST_138015630679****_BAAy1Hac.mq.cn-chengdu.aliyuncs.com:80
   */
  tcpInternetEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      httpInternalEndpoint: 'HttpInternalEndpoint',
      httpInternetEndpoint: 'HttpInternetEndpoint',
      httpInternetSecureEndpoint: 'HttpInternetSecureEndpoint',
      tcpEndpoint: 'TcpEndpoint',
      tcpInternetEndpoint: 'TcpInternetEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpInternalEndpoint: 'string',
      httpInternetEndpoint: 'string',
      httpInternetSecureEndpoint: 'string',
      tcpEndpoint: 'string',
      tcpInternetEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceBaseInfoResponseBodyInstanceBaseInfo extends $tea.Model {
  /**
   * @remarks
   * The time when the instance was created. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1570701259403
   */
  createTime?: string;
  /**
   * @remarks
   * The endpoints used to access ApsaraMQ for RocketMQ over different protocols.
   */
  endpoints?: OnsInstanceBaseInfoResponseBodyInstanceBaseInfoEndpoints;
  /**
   * @remarks
   * Indicates whether the instance uses a namespace. Valid values:
   * 
   * *   **true**: The instance uses a separate namespace. The name of each resource must be unique in the instance. The names of resources in different instances can be the same.
   * *   **false**: The instance does not use a separate namespace. The name of each resource must be globally unique within the instance and across all instances.
   * 
   * @example
   * true
   */
  independentNaming?: boolean;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * MQ_INST_138015630679****_BAAy1Hac
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * The name must be 3 to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   **0**: The instance is being deployed. This value is valid only for Enterprise Platinum Edition instances.
   * *   **2**: The instance has overdue payments. This value is valid only for Standard Edition instances.
   * *   **5**: The instance is running. This value is valid for Standard Edition instances and Enterprise Platinum Edition instances.
   * *   **7**: The instance is being upgraded and is running. This value is valid only for Enterprise Platinum Edition instances.
   * 
   * @example
   * 5
   */
  instanceStatus?: number;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   **1**: Standard Edition instances that use the pay-as-you-go billing method.
   * *   **2**: Enterprise Platinum Edition instances that use the subscription billing method.
   * 
   * For information about the editions and specifications of ApsaraMQ for RocketMQ instances, see [Instance editions](https://help.aliyun.com/document_detail/185261.html).
   * 
   * @example
   * 2
   */
  instanceType?: number;
  /**
   * @remarks
   * The maximum messaging transactions per second (TPS). Valid values: 5000, 10000, 20000, 50000, 100000, 200000, 300000, 500000, 800000, and 1000000.
   * 
   * You can view the details about messaging TPS on the buy page of ApsaraMQ for RocketMQ.
   * 
   * > This parameter is available only to the ApsaraMQ for RocketMQ Enterprise Platinum Edition instances.
   * 
   * @example
   * 10000
   */
  maxTps?: number;
  /**
   * @remarks
   * The time when the Enterprise Platinum Edition instance expires.
   * 
   * @example
   * 1603555200000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * ons-cn-m7r1r5f****
   */
  remark?: string;
  /**
   * @remarks
   * The maximum number of topics that can be created on the instance. Valid values: 25, 50, 100, 300, and 500.
   * 
   * > This parameter is available only to the ApsaraMQ for RocketMQ Enterprise Platinum Edition instances.
   * 
   * @example
   * 50
   */
  topicCapacity?: number;
  /**
   * @remarks
   * The commodity ID of the instance.
   * 
   * @example
   * ons-cn-m7r1r5f****
   */
  spInstanceId?: string;
  /**
   * @remarks
   * The commodity type of the instance.
   * 
   * @example
   * 1
   */
  spInstanceType?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endpoints: 'Endpoints',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      maxTps: 'MaxTps',
      releaseTime: 'ReleaseTime',
      remark: 'Remark',
      topicCapacity: 'TopicCapacity',
      spInstanceId: 'spInstanceId',
      spInstanceType: 'spInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endpoints: OnsInstanceBaseInfoResponseBodyInstanceBaseInfoEndpoints,
      independentNaming: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'number',
      instanceType: 'number',
      maxTps: 'number',
      releaseTime: 'number',
      remark: 'string',
      topicCapacity: 'number',
      spInstanceId: 'string',
      spInstanceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceCreateResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance that you created.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * The edition of the instance that you created. Valid value:
   * 
   * *   **1**: Standard Edition instances
   * 
   * @example
   * 1
   */
  instanceType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key. This parameter is not required. If you configure this parameter, you must also configure **Value**.**** If you configure Key and Value in a request, this operation queries only the instances that use the specified tags. If you do not configure these parameters in a request, this operation queries all instances that you can access.
   * 
   * *   The value of this parameter cannot be an empty string.
   * *   The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * CartService
   */
  key?: string;
  /**
   * @remarks
   * The tag value. This parameter is not required. If you configure this parameter, you must also configure **Key**.**** If you configure Key and Value in a request, this operation queries only the instances that use the specified tags. If you do not configure these parameters in a request, this operation queries all instances that you can access.
   * 
   * *   The value of this parameter can be an empty string.
   * *   The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * SericeA
   */
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

export class OnsInstanceInServiceListResponseBodyDataInstanceVOTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * CartService
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * ServiceA
   */
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

export class OnsInstanceInServiceListResponseBodyDataInstanceVOTags extends $tea.Model {
  tag?: OnsInstanceInServiceListResponseBodyDataInstanceVOTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': OnsInstanceInServiceListResponseBodyDataInstanceVOTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListResponseBodyDataInstanceVO extends $tea.Model {
  /**
   * @remarks
   * The time when the instance was created. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1640847284000
   */
  createTime?: number;
  /**
   * @remarks
   * The number of consumer groups.
   * 
   * @example
   * 3
   */
  groupCount?: number;
  /**
   * @remarks
   * Indicates whether a namespace is used for the instance. Valid values:
   * 
   * *   **true**: A separate namespace is used for the instance. The identifier of each resource in the instance must be unique within the instance. However, the identifier of a resource in the instance can be the same as the identifier of a resource in another instance that uses a different namespace.
   * *   **false**: A separate namespace is not used for the instance. The name of each resource must be globally unique within the instance and across all instances.
   * 
   * @example
   * true
   */
  independentNaming?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * The name must be 3 to 64 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * test1
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * *   **0**: The instance is being deployed. This value is valid only for Enterprise Platinum Edition instances.
   * *   **2**: The instance has overdue payments. This value is valid only for Standard Edition instances.
   * *   **5**: The instance is running. This value is valid only for Standard Edition instances and Enterprise Platinum Edition instances.
   * *   **7**: The instance is being upgraded and is running. This value is valid only for Enterprise Platinum Edition instances.
   * 
   * @example
   * 5
   */
  instanceStatus?: number;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * *   **1**: Standard Edition
   * *   **2**: Enterprise Platinum Edition
   * 
   * For information about the instance editions and the differences between the editions, see [Instance editions](https://help.aliyun.com/document_detail/185261.html).
   * 
   * @example
   * 2
   */
  instanceType?: number;
  /**
   * @remarks
   * The time when the instance expires. If the instance is of Enterprise Platinum Edition, this parameter is returned.
   * 
   * @example
   * 1551024000000
   */
  releaseTime?: number;
  /**
   * @remarks
   * The tags that are attached to the instance.
   */
  tags?: OnsInstanceInServiceListResponseBodyDataInstanceVOTags;
  /**
   * @remarks
   * The number of topics.
   * 
   * @example
   * 1
   */
  topicCount?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      groupCount: 'GroupCount',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      releaseTime: 'ReleaseTime',
      tags: 'Tags',
      topicCount: 'TopicCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      groupCount: 'number',
      independentNaming: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'number',
      instanceType: 'number',
      releaseTime: 'number',
      tags: OnsInstanceInServiceListResponseBodyDataInstanceVOTags,
      topicCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListResponseBodyData extends $tea.Model {
  instanceVO?: OnsInstanceInServiceListResponseBodyDataInstanceVO[];
  static names(): { [key: string]: string } {
    return {
      instanceVO: 'InstanceVO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceVO: { 'type': 'array', 'itemType': OnsInstanceInServiceListResponseBodyDataInstanceVO },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageDetailResponseBodyDataPropertyList extends $tea.Model {
  /**
   * @remarks
   * The name of the attribute. Valid values:
   * 
   * *   **TRACE_ON**: indicates whether the trace of the message exists.
   * *   **MSG_REGION**: The region ID of the instance to which the topic belongs.
   * *   **__MESSAGE_DECODED_TIME**: The time when the message was decoded.
   * *   **__BORNHOST**: The IP address of the producer client.
   * *   **UNIQ_KEY**: The ID of the message.
   * 
   * For information about the terms that are used in ApsaraMQ for RocketMQ, see [Terms](https://help.aliyun.com/document_detail/29533.html).
   * 
   * @example
   * cn-hangzhou
   */
  name?: string;
  /**
   * @remarks
   * The value of the attribute.
   * 
   * @example
   * MSG_REGION
   */
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

export class OnsMessageDetailResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The string that is obtained after the message body is encrypted by using the Base 64 algorithm.
   * 
   * @example
   * aGVsbG8=
   */
  body?: string;
  /**
   * @remarks
   * The cyclic redundancy check (CRC) value of the message body.
   * 
   * @example
   * 907060870
   */
  bodyCRC?: number;
  /**
   * @remarks
   * The information about the message body.
   * 
   * @example
   * hello
   */
  bodyStr?: string;
  /**
   * @remarks
   * The producer instance that generated the message.
   * 
   * @example
   * ``42.120.**.**``:64646
   */
  bornHost?: string;
  /**
   * @remarks
   * The timestamp that indicates the point in time when the message was generated. Unit: milliseconds.
   * 
   * @example
   * 1570761026630
   */
  bornTimestamp?: number;
  /**
   * @remarks
   * The ID of the ApsaraMQ for RocketMQ Instance.
   * 
   * @example
   * MQ_INST_184681981******_BXig0x6A
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * 1E0578FE110F18B4AAC235C05F2*****
   */
  msgId?: string;
  /**
   * @remarks
   * The attributes of the message.
   */
  propertyList?: OnsMessageDetailResponseBodyDataPropertyList[];
  /**
   * @remarks
   * The number of retries that ApsaraMQ for RocketMQ performed to send the message to consumers.
   * 
   * @example
   * 0
   */
  reconsumeTimes?: number;
  /**
   * @remarks
   * The ApsaraMQ for RocketMQ broker that stores the message.
   * 
   * @example
   * 11.220.***.***:10911
   */
  storeHost?: string;
  /**
   * @remarks
   * The size of the message. Unit: KB.
   * 
   * @example
   * 2
   */
  storeSize?: number;
  /**
   * @remarks
   * The timestamp that indicates the point in time when the ApsaraMQ for RocketMQ broker stored the message. Unit: milliseconds.
   * 
   * @example
   * 1570761026708
   */
  storeTimestamp?: number;
  /**
   * @remarks
   * The topic to which the message belongs.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      bodyCRC: 'BodyCRC',
      bodyStr: 'BodyStr',
      bornHost: 'BornHost',
      bornTimestamp: 'BornTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      propertyList: 'PropertyList',
      reconsumeTimes: 'ReconsumeTimes',
      storeHost: 'StoreHost',
      storeSize: 'StoreSize',
      storeTimestamp: 'StoreTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      bodyCRC: 'number',
      bodyStr: 'string',
      bornHost: 'string',
      bornTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      propertyList: { 'type': 'array', 'itemType': OnsMessageDetailResponseBodyDataPropertyList },
      reconsumeTimes: 'number',
      storeHost: 'string',
      storeSize: 'number',
      storeTimestamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyListMessageProperty extends $tea.Model {
  /**
   * @remarks
   * The name of the attribute. Valid values:
   * 
   * -  **TRACE_ON**: indicates whether the message trace exists.
   * 
   * -   **KEYS**: indicates the key of the message.
   * 
   * - **TAGS**: indicates the tag that is attached to the message.
   * 
   * - **INSTANCE_ID**: indicates the ID of the instance that contains the message.
   * 
   * For information about the terms that are used in ApsaraMQ for RocketMQ, see [Terms](https://help.aliyun.com/document_detail/29533.html).
   * 
   * @example
   * TAGS
   */
  name?: string;
  /**
   * @remarks
   * The value of the attribute.
   * 
   * @example
   * TagA
   */
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

export class OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyList extends $tea.Model {
  messageProperty?: OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyListMessageProperty[];
  static names(): { [key: string]: string } {
    return {
      messageProperty: 'MessageProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageProperty: { 'type': 'array', 'itemType': OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyListMessageProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponseBodyDataOnsRestMessageDo extends $tea.Model {
  /**
   * @remarks
   * The cyclic redundancy check (CRC) value of the message body.
   * 
   * @example
   * 914112295
   */
  bodyCRC?: number;
  /**
   * @remarks
   * The producer client that generated the message.
   * 
   * @example
   * 42.120.***.***:59270
   */
  bornHost?: string;
  /**
   * @remarks
   * The timestamp that indicates when the message was produced.
   * 
   * @example
   * 1570760999721
   */
  bornTimestamp?: number;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * 1E0578FE110F18B4AAC235C05F2*****
   */
  msgId?: string;
  /**
   * @remarks
   * The attributes of the message.
   */
  propertyList?: OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyList;
  /**
   * @remarks
   * The number of retries that were performed to send the message to consumers.
   * 
   * @example
   * 1
   */
  reconsumeTimes?: number;
  /**
   * @remarks
   * The ApsaraMQ for RocketMQ broker that stores the message.
   * 
   * @example
   * 11.193.***.***:10911
   */
  storeHost?: string;
  /**
   * @remarks
   * The size of the message.
   * 
   * @example
   * 406
   */
  storeSize?: number;
  /**
   * @remarks
   * The timestamp that indicates when the ApsaraMQ for RocketMQ broker stored the message.
   * 
   * @example
   * 1570760999811
   */
  storeTimestamp?: number;
  /**
   * @remarks
   * The topic to which the message belongs.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
      bornTimestamp: 'BornTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      propertyList: 'PropertyList',
      reconsumeTimes: 'ReconsumeTimes',
      storeHost: 'StoreHost',
      storeSize: 'StoreSize',
      storeTimestamp: 'StoreTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyCRC: 'number',
      bornHost: 'string',
      bornTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      propertyList: OnsMessageGetByKeyResponseBodyDataOnsRestMessageDoPropertyList,
      reconsumeTimes: 'number',
      storeHost: 'string',
      storeSize: 'number',
      storeTimestamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByKeyResponseBodyData extends $tea.Model {
  onsRestMessageDo?: OnsMessageGetByKeyResponseBodyDataOnsRestMessageDo[];
  static names(): { [key: string]: string } {
    return {
      onsRestMessageDo: 'OnsRestMessageDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onsRestMessageDo: { 'type': 'array', 'itemType': OnsMessageGetByKeyResponseBodyDataOnsRestMessageDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdResponseBodyDataPropertyListMessageProperty extends $tea.Model {
  /**
   * @remarks
   * The name of the attribute. Valid values:
   * 
   * *   **TRACE_ON**: indicates whether a trace of the message exists.
   * *   **KEYS**: indicates the key of the message.
   * *   **TAGS**: indicates the tag that is attached to the message.
   * *   **INSTANCE_ID**: indicates the ID of the instance which contains the message.
   * 
   * For information about the terms that are used in Message Queue for Apache RocketMQ, see [Terms](https://help.aliyun.com/document_detail/29533.html).
   * 
   * @example
   * TAGS
   */
  name?: string;
  /**
   * @remarks
   * The value of the attribute.
   * 
   * @example
   * TagA
   */
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

export class OnsMessageGetByMsgIdResponseBodyDataPropertyList extends $tea.Model {
  messageProperty?: OnsMessageGetByMsgIdResponseBodyDataPropertyListMessageProperty[];
  static names(): { [key: string]: string } {
    return {
      messageProperty: 'MessageProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageProperty: { 'type': 'array', 'itemType': OnsMessageGetByMsgIdResponseBodyDataPropertyListMessageProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageGetByMsgIdResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The cyclic redundancy check (CRC) value of the message body.
   * 
   * @example
   * 914112295
   */
  bodyCRC?: number;
  /**
   * @remarks
   * The producer instance that generated the message.
   * 
   * @example
   * ``42.120.**.**``:64646
   */
  bornHost?: string;
  /**
   * @remarks
   * The timestamp that indicates when the message was produced.
   * 
   * @example
   * 1570761026630
   */
  bornTimestamp?: number;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * 1E0578FE110F18B4AAC235C0C8460BA2
   */
  msgId?: string;
  /**
   * @remarks
   * The attributes of the message.
   */
  propertyList?: OnsMessageGetByMsgIdResponseBodyDataPropertyList;
  /**
   * @remarks
   * The number of retries that were performed to send the message to consumers.
   * 
   * @example
   * 1
   */
  reconsumeTimes?: number;
  /**
   * @remarks
   * The ApsaraMQ for RocketMQ broker that stores the message.
   * 
   * @example
   * 11.220.***.***:10911
   */
  storeHost?: string;
  /**
   * @remarks
   * The size of the message.
   * 
   * @example
   * 407
   */
  storeSize?: number;
  /**
   * @remarks
   * The timestamp that indicates when the ApsaraMQ for RocketMQ broker stored the message.
   * 
   * @example
   * 1570761026708
   */
  storeTimestamp?: number;
  /**
   * @remarks
   * The topic to which the message belongs.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
      bornTimestamp: 'BornTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      propertyList: 'PropertyList',
      reconsumeTimes: 'ReconsumeTimes',
      storeHost: 'StoreHost',
      storeSize: 'StoreSize',
      storeTimestamp: 'StoreTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyCRC: 'number',
      bornHost: 'string',
      bornTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      propertyList: OnsMessageGetByMsgIdResponseBodyDataPropertyList,
      reconsumeTimes: 'number',
      storeHost: 'string',
      storeSize: 'number',
      storeTimestamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty extends $tea.Model {
  /**
   * @remarks
   * The name of the attribute. Valid values:
   * 
   * *   **TRACE_ON**: indicates whether a trace of the message exists.
   * *   **KEYS**: indicates the key of the message.
   * *   **TAGS**: indicates the tag of the message.
   * *   **INSTANCE_ID**: indicates the ID of the instance that contains the message.
   * 
   * For information about the terms that are used in ApsaraMQ for RocketMQ see [Terms](https://help.aliyun.com/document_detail/29533.html).
   * 
   * @example
   * TAGS
   */
  name?: string;
  /**
   * @remarks
   * The value of the attribute.
   * 
   * @example
   * TagA
   */
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

export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList extends $tea.Model {
  messageProperty?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty[];
  static names(): { [key: string]: string } {
    return {
      messageProperty: 'MessageProperty',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageProperty: { 'type': 'array', 'itemType': OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyListMessageProperty },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo extends $tea.Model {
  /**
   * @remarks
   * The cyclic redundancy check (CRC) value of the message body.
   * 
   * @example
   * 914112295
   */
  bodyCRC?: number;
  /**
   * @remarks
   * The producer client that generated the message.
   * 
   * @example
   * 42.120.***.***:59270
   */
  bornHost?: string;
  /**
   * @remarks
   * The time when the message was generated. The value is a UNIX timestamp that represents the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1570760999721
   */
  bornTimestamp?: number;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * 1E0578FE110F18B4AAC235C05F2*****
   */
  msgId?: string;
  /**
   * @remarks
   * The attributes of the message.
   */
  propertyList?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList;
  /**
   * @remarks
   * The number of retries that were performed to send the message to consumers.
   * 
   * @example
   * 1
   */
  reconsumeTimes?: number;
  /**
   * @remarks
   * The ApsaraMQ for RocketMQ broker that stores the message.
   * 
   * @example
   * 11.193.***.***:10911
   */
  storeHost?: string;
  /**
   * @remarks
   * The size of the message. Unit: KB.
   * 
   * @example
   * 406
   */
  storeSize?: number;
  /**
   * @remarks
   * The time when the ApsaraMQ for RocketMQ broker stored the message. The value is a UNIX timestamp that represents the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1570760999811
   */
  storeTimestamp?: number;
  /**
   * @remarks
   * The topic to which the message belongs.
   * 
   * @example
   * test-mq_topic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bodyCRC: 'BodyCRC',
      bornHost: 'BornHost',
      bornTimestamp: 'BornTimestamp',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      propertyList: 'PropertyList',
      reconsumeTimes: 'ReconsumeTimes',
      storeHost: 'StoreHost',
      storeSize: 'StoreSize',
      storeTimestamp: 'StoreTimestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyCRC: 'number',
      bornHost: 'string',
      bornTimestamp: 'number',
      instanceId: 'string',
      msgId: 'string',
      propertyList: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDoPropertyList,
      reconsumeTimes: 'number',
      storeHost: 'string',
      storeSize: 'number',
      storeTimestamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundList extends $tea.Model {
  onsRestMessageDo?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo[];
  static names(): { [key: string]: string } {
    return {
      onsRestMessageDo: 'OnsRestMessageDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onsRestMessageDo: { 'type': 'array', 'itemType': OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundListOnsRestMessageDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessagePageQueryByTopicResponseBodyMsgFoundDo extends $tea.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 400
   */
  maxPageCount?: number;
  /**
   * @remarks
   * The information about messages on the returned page. The information that is contained in this parameter is the same as the information that is returned by the [OnsMessageGetByMsgId](https://help.aliyun.com/document_detail/29607.html) operation.
   */
  msgFoundList?: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundList;
  /**
   * @remarks
   * The ID of the query task. The first time you call this operation to query the messages that are sent to a specified consumer group within a specified time range, this parameter is returned. You can use the task ID to query the details of messages on other returned pages.
   * 
   * @example
   * 0BC1310300002A9F000021E4D7A48346
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      maxPageCount: 'MaxPageCount',
      msgFoundList: 'MsgFoundList',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      maxPageCount: 'number',
      msgFoundList: OnsMessagePageQueryByTopicResponseBodyMsgFoundDoMsgFoundList,
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceResponseBodyDataMessageTrack extends $tea.Model {
  /**
   * @remarks
   * The ID of the consumer group that subscribes to the topic.
   * 
   * @example
   * GID_test_group_id
   */
  consumerGroup?: string;
  /**
   * @remarks
   * The ID of the instance to which the message you want to query belongs.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the message. Valid values:
   * 
   * *   **CONSUMED**: The message is consumed.
   * *   **CONSUMED_BUT_FILTERED**: No consumer group subscribes to the message. The message is filtered out and not consumed.
   * *   **NOT_CONSUME_YET**: The message is not consumed.
   * *   **NOT_ONLINE**: The consumer group is offline.
   * *   **UNKNOWN**: The message is not consumed due to unknown reasons.
   * 
   * @example
   * CONSUMED
   */
  trackType?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      trackType: 'TrackType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      trackType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsMessageTraceResponseBodyData extends $tea.Model {
  messageTrack?: OnsMessageTraceResponseBodyDataMessageTrack[];
  static names(): { [key: string]: string } {
    return {
      messageTrack: 'MessageTrack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageTrack: { 'type': 'array', 'itemType': OnsMessageTraceResponseBodyDataMessageTrack },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsRegionListResponseBodyDataRegionDo extends $tea.Model {
  /**
   * @remarks
   * The channel name.
   * 
   * @example
   * ALIYUN
   */
  channelName?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1411623866000
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  onsRegionId?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * China (Hangzhou)
   */
  regionName?: string;
  /**
   * @remarks
   * The time when the instance was updated.
   * 
   * @example
   * 1411623866000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      createTime: 'CreateTime',
      id: 'Id',
      onsRegionId: 'OnsRegionId',
      regionName: 'RegionName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      createTime: 'number',
      id: 'number',
      onsRegionId: 'string',
      regionName: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsRegionListResponseBodyData extends $tea.Model {
  regionDo?: OnsRegionListResponseBodyDataRegionDo[];
  static names(): { [key: string]: string } {
    return {
      regionDo: 'RegionDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionDo: { 'type': 'array', 'itemType': OnsRegionListResponseBodyDataRegionDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag that is attached to the topics you want to query. This parameter is not required. If you configure this parameter, you must also configure the **Value** parameter.**** If you include the Key and Value parameters in a request, this operation queries only the topics that use the specified tag. If you do not include these parameters in a request, this operation queries all topics that you can access.
   * 
   * *   The value of this parameter cannot be an empty string.
   * *   A tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * CartService
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that is attached to the topics you want to query. This parameter is not required. If you configure this parameter, you must also configure the **Key** parameter.**** If you include the Key and Value parameters in a request, this operation queries only the topics that use the specified tag. If you do not include these parameters in a request, this operation queries all topics that you can access.
   * 
   * *   The value of this parameter can be an empty string.
   * *   A tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * This parameter is required.
   * 
   * @example
   * ServiceA
   */
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

export class OnsTopicListResponseBodyDataPublishInfoDoTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * CartService
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * SrviceA
   */
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

export class OnsTopicListResponseBodyDataPublishInfoDoTags extends $tea.Model {
  tag?: OnsTopicListResponseBodyDataPublishInfoDoTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': OnsTopicListResponseBodyDataPublishInfoDoTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListResponseBodyDataPublishInfoDo extends $tea.Model {
  /**
   * @remarks
   * The time when the topic was created.
   * 
   * @example
   * 1570700947000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the instance that contains the topic uses a namespace. Valid values:
   * 
   * *   **true**: The instance uses a separate namespace. The name of each resource must be unique in the instance. The names of resources in different instances can be the same.
   * *   **false**: The instance does not use a separate namespace. The name of each resource must be globally unique within an instance and across all instances.
   * 
   * @example
   * true
   */
  independentNaming?: boolean;
  /**
   * @remarks
   * The ID of the instance that contains the topic.
   * 
   * @example
   * MQ_INST_188077086902****_BXSuW61e
   */
  instanceId?: string;
  /**
   * @remarks
   * The message type. Valid values:
   * 
   * *   **0**: normal messages
   * *   **1**: partitionally ordered messages
   * *   **2**: globally ordered messages
   * *   **4**: transactional messages
   * *   **5**: scheduled or delayed messages
   * 
   * @example
   * 0
   */
  messageType?: number;
  /**
   * @remarks
   * The user ID of the topic owner. The value of this parameter is an Alibaba account ID.
   * 
   * @example
   * 138015630679****
   */
  owner?: string;
  /**
   * @remarks
   * Indicates the relationship between the current account and the topic. Valid values:
   * 
   * *   **1**: The current account is the owner of the topic.
   * *   **2**: The current account can publish messages to the topic.
   * *   **4**: The current account can subscribe to the topic.
   * *   **6**: The current account can publish messages to and subscribe to the topic.
   * 
   * @example
   * 6
   */
  relation?: number;
  /**
   * @remarks
   * The relationship between the current account and the topic. The value of this parameter indicates whether the current account is the owner of the topic, and whether the current account can subscribe or publish messages to the topic. the topic.
   * 
   * @example
   * Publish and subscribe
   */
  relationName?: string;
  /**
   * @remarks
   * The description of the topic.
   * 
   * @example
   * Test
   */
  remark?: string;
  /**
   * @remarks
   * The status of the topic that is asynchronously created. Valid values:
   * 
   * *   **0**: The topic is being created.
   * *   **1**: The topic is being used.
   * 
   * @example
   * 0
   */
  serviceStatus?: number;
  /**
   * @remarks
   * The tags that are attached to the topic.
   */
  tags?: OnsTopicListResponseBodyDataPublishInfoDoTags;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      independentNaming: 'IndependentNaming',
      instanceId: 'InstanceId',
      messageType: 'MessageType',
      owner: 'Owner',
      relation: 'Relation',
      relationName: 'RelationName',
      remark: 'Remark',
      serviceStatus: 'ServiceStatus',
      tags: 'Tags',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      independentNaming: 'boolean',
      instanceId: 'string',
      messageType: 'number',
      owner: 'string',
      relation: 'number',
      relationName: 'string',
      remark: 'string',
      serviceStatus: 'number',
      tags: OnsTopicListResponseBodyDataPublishInfoDoTags,
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicListResponseBodyData extends $tea.Model {
  publishInfoDo?: OnsTopicListResponseBodyDataPublishInfoDo[];
  static names(): { [key: string]: string } {
    return {
      publishInfoDo: 'PublishInfoDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publishInfoDo: { 'type': 'array', 'itemType': OnsTopicListResponseBodyDataPublishInfoDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicStatusResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The point in time when the latest message is ready in the topic. If no message exists in the topic, the return value of this parameter is 0.
   * 
   * The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * For information about the definition of ready messages and ready time, see [Terms](https://help.aliyun.com/document_detail/29533.html).
   * 
   * @example
   * 1570864984364
   */
  lastTimeStamp?: number;
  /**
   * @remarks
   * Indicates the operations that you can perform on the topic. Valid values:
   * 
   * *   **2**: You can publish messages to the topic.
   * *   **4**: You can subscribe to the topic.
   * *   **6**: You can publish messages to and subscribe to the topic.
   * 
   * @example
   * 6
   */
  perm?: number;
  /**
   * @remarks
   * The total number of messages in all partitions of the topic.
   * 
   * @example
   * 2310
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lastTimeStamp: 'LastTimeStamp',
      perm: 'Perm',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTimeStamp: 'number',
      perm: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList extends $tea.Model {
  /**
   * @remarks
   * The ID of the consumer group that subscribes to the topic.
   * 
   * @example
   * GID_test
   */
  groupId?: string;
  /**
   * @remarks
   * The consumption mode. Valid values:
   * 
   * *   **CLUSTERING**: the clustering consumption mode
   * *   **BROADCASTING**: the broadcasting consumption mode
   * 
   * For more information about consumption modes, see [Clustering consumption and broadcasting consumption](https://help.aliyun.com/document_detail/43163.html).
   * 
   * @example
   * CLUSTERING
   */
  messageModel?: string;
  /**
   * @remarks
   * The expression based on which consumers in the consumer group subscribe to the topic.
   * 
   * @example
   * *
   */
  subString?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      messageModel: 'MessageModel',
      subString: 'SubString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      messageModel: 'string',
      subString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailResponseBodyDataSubscriptionDataList extends $tea.Model {
  subscriptionDataList?: OnsTopicSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList[];
  static names(): { [key: string]: string } {
    return {
      subscriptionDataList: 'SubscriptionDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionDataList: { 'type': 'array', 'itemType': OnsTopicSubDetailResponseBodyDataSubscriptionDataListSubscriptionDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTopicSubDetailResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The information about the online consumer groups that subscribe to the topic.
   */
  subscriptionDataList?: OnsTopicSubDetailResponseBodyDataSubscriptionDataList;
  /**
   * @remarks
   * The topic name.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      subscriptionDataList: 'SubscriptionDataList',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subscriptionDataList: OnsTopicSubDetailResponseBodyDataSubscriptionDataList,
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientListSubClientInfoDo extends $tea.Model {
  /**
   * @remarks
   * The address of the consumer.
   * 
   * @example
   * ``30.5.**.**``
   */
  clientHost?: string;
  /**
   * @remarks
   * The period of time that the system took to consume the message. Unit: milliseconds.
   * 
   * @example
   * 43
   */
  costTime?: number;
  /**
   * @remarks
   * The number of attempts that the ApsaraMQ for RocketMQ broker tried to send the message to the consumer.
   * 
   * @example
   * 1
   */
  reconsumeTimes?: number;
  /**
   * @remarks
   * Indicates whether the message is consumed. Valid values:
   * 
   * *   **CONSUME_FAILED**: The message failed to be consumed.
   * *   **CONSUME_SUCCESS**: The message is consumed.
   * *   **CONSUME_NOT_RETURN:** No responses are returned.
   * *   **SEND_UNKNOWN:** The message is a transactional message and is not committed.
   * *   **SEND_DELAY:** The message is a scheduled or delayed message and is waiting to be consumed at the specified point in time.
   * 
   * @example
   * CONSUME_SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The ID of the group that contains the consumer.
   * 
   * @example
   * GID_test
   */
  subGroupName?: string;
  /**
   * @remarks
   * The earliest point in time when the message was consumed.
   * 
   * @example
   * 1570851590511
   */
  subTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientHost: 'ClientHost',
      costTime: 'CostTime',
      reconsumeTimes: 'ReconsumeTimes',
      status: 'Status',
      subGroupName: 'SubGroupName',
      subTime: 'SubTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientHost: 'string',
      costTime: 'number',
      reconsumeTimes: 'number',
      status: 'string',
      subGroupName: 'string',
      subTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientList extends $tea.Model {
  subClientInfoDo?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientListSubClientInfoDo[];
  static names(): { [key: string]: string } {
    return {
      subClientInfoDo: 'SubClientInfoDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subClientInfoDo: { 'type': 'array', 'itemType': OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientListSubClientInfoDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDo extends $tea.Model {
  /**
   * @remarks
   * The information about message consumption by consumers in the group.
   */
  clientList?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientList;
  /**
   * @remarks
   * The number of consumption failures.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * GID_test
   */
  subGroupName?: string;
  /**
   * @remarks
   * The number of successful consumptions.
   * 
   * @example
   * 1
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      clientList: 'ClientList',
      failCount: 'FailCount',
      subGroupName: 'SubGroupName',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientList: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDoClientList,
      failCount: 'number',
      subGroupName: 'string',
      successCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubList extends $tea.Model {
  subMapDo?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDo[];
  static names(): { [key: string]: string } {
    return {
      subMapDo: 'SubMapDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subMapDo: { 'type': 'array', 'itemType': OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubListSubMapDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDo extends $tea.Model {
  /**
   * @remarks
   * The address of the producer that generated the message.
   * 
   * @example
   * ``30.5.**.**``
   */
  bornHost?: string;
  /**
   * @remarks
   * The period of time that the system took to send the message. Unit: milliseconds.
   * 
   * @example
   * 24
   */
  costTime?: number;
  /**
   * @remarks
   * The ID of the message.
   * 
   * @example
   * 0BC1F01800002A9F000000531246****
   */
  msgId?: string;
  /**
   * @remarks
   * The key of the message.
   * 
   * @example
   * ORDERID_100
   */
  msgKey?: string;
  /**
   * @remarks
   * The ID of the group that contains the producer.
   * 
   * @example
   * GID_test
   */
  pubGroupName?: string;
  /**
   * @remarks
   * The point in time when the message was sent.
   * 
   * @example
   * 1570850870478
   */
  pubTime?: number;
  /**
   * @remarks
   * Indicates whether the message is sent. Valid values:
   * 
   * *   **SEND_SUCCESS**: The message is sent.
   * *   **SEND_FAILED**: The message failed to be sent.
   * *   **SEND_ROLLBACK:** The message is a transactional message and is rolled back.
   * *   **SEND_UNKNOWN:** The message is a transactional message and is not committed.
   * *   **SEND_DELAY:** The message is a scheduled or delayed message and is waiting to be consumed at the specified point in time.
   * 
   * @example
   * SEND_SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The consumption traces of the message.
   */
  subList?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubList;
  /**
   * @remarks
   * The tag of the message.
   * 
   * @example
   * TagA
   */
  tag?: string;
  /**
   * @remarks
   * The topic to which the message belongs.
   * 
   * @example
   * test
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      bornHost: 'BornHost',
      costTime: 'CostTime',
      msgId: 'MsgId',
      msgKey: 'MsgKey',
      pubGroupName: 'PubGroupName',
      pubTime: 'PubTime',
      status: 'Status',
      subList: 'SubList',
      tag: 'Tag',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bornHost: 'string',
      costTime: 'number',
      msgId: 'string',
      msgKey: 'string',
      pubGroupName: 'string',
      pubTime: 'number',
      status: 'string',
      subList: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDoSubList,
      tag: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceDataTraceList extends $tea.Model {
  traceMapDo?: OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDo[];
  static names(): { [key: string]: string } {
    return {
      traceMapDo: 'TraceMapDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceMapDo: { 'type': 'array', 'itemType': OnsTraceGetResultResponseBodyTraceDataTraceListTraceMapDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTraceGetResultResponseBodyTraceData extends $tea.Model {
  /**
   * @remarks
   * The point in time when the task was created.
   * 
   * @example
   * 1570966857000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the message that is queried.
   * 
   * @example
   * 1E05791C117818B4AAC23B1BB0CE****
   */
  msgId?: string;
  /**
   * @remarks
   * The key of the message that is queried.
   * 
   * @example
   * ORDERID_100
   */
  msgKey?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 272967562652883649157096685****
   */
  queryId?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **finish**: The task is complete.
   * *   **working**: The task is in progress.
   * *   **removed**: The task is deleted.
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * The topic in which the message is stored.
   * 
   * @example
   * test
   */
  topic?: string;
  /**
   * @remarks
   * The details of the message trace.
   */
  traceList?: OnsTraceGetResultResponseBodyTraceDataTraceList;
  /**
   * @remarks
   * The most recent point in time when the task was updated.
   * 
   * @example
   * 1570966877000
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the user who created the task.
   * 
   * @example
   * 27296756265288****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      msgId: 'MsgId',
      msgKey: 'MsgKey',
      queryId: 'QueryId',
      status: 'Status',
      topic: 'Topic',
      traceList: 'TraceList',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      msgId: 'string',
      msgKey: 'string',
      queryId: 'string',
      status: 'string',
      topic: 'string',
      traceList: OnsTraceGetResultResponseBodyTraceDataTraceList,
      updateTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponseBodyDataRecordsStatsDataDo extends $tea.Model {
  /**
   * @remarks
   * The X axis. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1570867800000
   */
  x?: number;
  /**
   * @remarks
   * The Y axis. This parameter indicates the TPS for message consumption or the number of messages that are consumed.
   * 
   * @example
   * 0
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponseBodyDataRecords extends $tea.Model {
  statsDataDo?: OnsTrendGroupOutputTpsResponseBodyDataRecordsStatsDataDo[];
  static names(): { [key: string]: string } {
    return {
      statsDataDo: 'StatsDataDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statsDataDo: { 'type': 'array', 'itemType': OnsTrendGroupOutputTpsResponseBodyDataRecordsStatsDataDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendGroupOutputTpsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The data set returned based on sampling period.
   */
  records?: OnsTrendGroupOutputTpsResponseBodyDataRecords;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx%test@MQ_INST_111111111111_DOxxxxxx%GID_test trend chart of delivered messages
   */
  title?: string;
  /**
   * @remarks
   * The unit of the timestamp.
   * 
   * @example
   * time
   */
  XUnit?: string;
  /**
   * @remarks
   * The total number of messages.
   * 
   * @example
   * msg
   */
  YUnit?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      title: 'Title',
      XUnit: 'XUnit',
      YUnit: 'YUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: OnsTrendGroupOutputTpsResponseBodyDataRecords,
      title: 'string',
      XUnit: 'string',
      YUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsResponseBodyDataRecordsStatsDataDo extends $tea.Model {
  /**
   * @remarks
   * The X axis. The value of this parameter is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1570852800000
   */
  x?: number;
  /**
   * @remarks
   * The Y axis. This parameter indicates the TPS for message publishing or the number of messages that are published.
   * 
   * @example
   * 0
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsResponseBodyDataRecords extends $tea.Model {
  statsDataDo?: OnsTrendTopicInputTpsResponseBodyDataRecordsStatsDataDo[];
  static names(): { [key: string]: string } {
    return {
      statsDataDo: 'StatsDataDo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statsDataDo: { 'type': 'array', 'itemType': OnsTrendTopicInputTpsResponseBodyDataRecordsStatsDataDo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsTrendTopicInputTpsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The data set returned based on sampling period.
   */
  records?: OnsTrendTopicInputTpsResponseBodyDataRecords;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * MQ_INST_111111111111_DOxxxxxx%test trend of received messages
   */
  title?: string;
  /**
   * @remarks
   * The unit of the timestamp.
   * 
   * @example
   * time
   */
  XUnit?: string;
  /**
   * @remarks
   * The unit of the Y axis.
   * 
   * @example
   * msg
   */
  YUnit?: string;
  static names(): { [key: string]: string } {
    return {
      records: 'Records',
      title: 'Title',
      XUnit: 'XUnit',
      YUnit: 'YUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: OnsTrendTopicInputTpsResponseBodyDataRecords,
      title: 'string',
      XUnit: 'string',
      YUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key. If you configure this parameter, you must also configure the **Value** parameter.****
   * *   The value of this parameter cannot be an empty string.
   * *   A tag key must be 1 to 128 characters in length and cannot contain `http://` or `https://`. A tag key cannot start with `acs:` or `aliyun`.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that you want to attach to the resource. If you configure this parameter, you must also configure the **Key** parameter.****
   * *   The value of this parameter can be an empty string.
   * *   A tag value must be 1 to 128 characters in length and cannot contain `http://` or `https://`. A tag value cannot start with `acs:` or `aliyun`.
   * 
   * This parameter is required.
   * 
   * @example
   * FinanceJoshua
   */
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-2-pop': "ons.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "ons.aliyuncs.com",
      'cn-beijing-finance-pop': "ons.aliyuncs.com",
      'cn-beijing-gov-1': "ons.aliyuncs.com",
      'cn-beijing-nu16-b01': "ons.aliyuncs.com",
      'cn-edge-1': "ons.aliyuncs.com",
      'cn-fujian': "ons.aliyuncs.com",
      'cn-haidian-cm12-c01': "ons.aliyuncs.com",
      'cn-hangzhou-bj-b01': "ons.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "ons.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "ons.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "ons.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "ons.aliyuncs.com",
      'cn-hangzhou-test-306': "ons.aliyuncs.com",
      'cn-hongkong-finance-pop': "ons.aliyuncs.com",
      'cn-qingdao-nebula': "ons.aliyuncs.com",
      'cn-shanghai-et15-b01': "ons.aliyuncs.com",
      'cn-shanghai-et2-b01': "ons.aliyuncs.com",
      'cn-shanghai-inner': "ons.aliyuncs.com",
      'cn-shanghai-internal-test-1': "ons.aliyuncs.com",
      'cn-shenzhen-inner': "ons.aliyuncs.com",
      'cn-shenzhen-st4-d01': "ons.aliyuncs.com",
      'cn-shenzhen-su18-b01': "ons.aliyuncs.com",
      'cn-wuhan': "ons.aliyuncs.com",
      'cn-yushanfang': "ons.aliyuncs.com",
      'cn-zhangbei-na61-b01': "ons.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "ons.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "ons.aliyuncs.com",
      'eu-west-1-oxs': "ons.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "ons.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ons", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Queries the tags that are attached to a specified resource.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you call the **ListTagResources** operation, specify at least one of the following parameters in the request: **Key** and **ResourceId**. You can specify a resource ID to query all tags that are attached to the specified resource. You can also specify a tag key to query the tag value and resource to which the tag is attached.
   * *   If you include the **Key** parameter in a request, you can obtain the tag value and the ID of the resource to which the tag is attached.
   * *   If you include the **ResourceId** parameter in a request, you can obtain the keys and values of all tags that are attached to the specified resource.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are attached to a specified resource.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you call the **ListTagResources** operation, specify at least one of the following parameters in the request: **Key** and **ResourceId**. You can specify a resource ID to query all tags that are attached to the specified resource. You can also specify a tag key to query the tag value and resource to which the tag is attached.
   * *   If you include the **Key** parameter in a request, you can obtain the tag value and the ID of the resource to which the tag is attached.
   * *   If you include the **ResourceId** parameter in a request, you can obtain the keys and values of all tags that are attached to the specified resource.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the information about message accumulation in topics to which a specified consumer group subscribes. The returned information includes the number of accumulated messages and the consumption latency.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation in scenarios in which you want to know the message consumption progress of a specified consumer group in production environments. You can obtain the information about message consumption and consumption latency based on the returned information. This operation returns the total number of accumulated messages in all topics to which the specified consumer group subscribes and the number of accumulated messages in each topic.
   * 
   * @param request - OnsConsumerAccumulateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsConsumerAccumulateResponse
   */
  async onsConsumerAccumulateWithOptions(request: OnsConsumerAccumulateRequest, runtime: $Util.RuntimeOptions): Promise<OnsConsumerAccumulateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.detail)) {
      query["Detail"] = request.detail;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsConsumerAccumulate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsConsumerAccumulateResponse>(await this.callApi(params, req, runtime), new OnsConsumerAccumulateResponse({}));
  }

  /**
   * Queries the information about message accumulation in topics to which a specified consumer group subscribes. The returned information includes the number of accumulated messages and the consumption latency.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation in scenarios in which you want to know the message consumption progress of a specified consumer group in production environments. You can obtain the information about message consumption and consumption latency based on the returned information. This operation returns the total number of accumulated messages in all topics to which the specified consumer group subscribes and the number of accumulated messages in each topic.
   * 
   * @param request - OnsConsumerAccumulateRequest
   * @returns OnsConsumerAccumulateResponse
   */
  async onsConsumerAccumulate(request: OnsConsumerAccumulateRequest): Promise<OnsConsumerAccumulateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsConsumerAccumulateWithOptions(request, runtime);
  }

  /**
   * Queries the client connection status of a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When messages are accumulated in a topic, you can call this operation to check whether a consumer is online.
   * 
   * @param request - OnsConsumerGetConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsConsumerGetConnectionResponse
   */
  async onsConsumerGetConnectionWithOptions(request: OnsConsumerGetConnectionRequest, runtime: $Util.RuntimeOptions): Promise<OnsConsumerGetConnectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsConsumerGetConnection",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsConsumerGetConnectionResponse>(await this.callApi(params, req, runtime), new OnsConsumerGetConnectionResponse({}));
  }

  /**
   * Queries the client connection status of a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When messages are accumulated in a topic, you can call this operation to check whether a consumer is online.
   * 
   * @param request - OnsConsumerGetConnectionRequest
   * @returns OnsConsumerGetConnectionResponse
   */
  async onsConsumerGetConnection(request: OnsConsumerGetConnectionRequest): Promise<OnsConsumerGetConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsConsumerGetConnectionWithOptions(request, runtime);
  }

  /**
   * Resets a consumer offset to a specified timestamp for a consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to clear accumulated messages or reset a consumer offset to a specified timestamp. You can use one of the following methods to clear accumulated messages:
   * *   Clear all accumulated messages in a specified topic.
   * *   Clear the messages that were published to the specified topic before a specified point in time.
   * 
   * @param request - OnsConsumerResetOffsetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsConsumerResetOffsetResponse
   */
  async onsConsumerResetOffsetWithOptions(request: OnsConsumerResetOffsetRequest, runtime: $Util.RuntimeOptions): Promise<OnsConsumerResetOffsetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.resetTimestamp)) {
      query["ResetTimestamp"] = request.resetTimestamp;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsConsumerResetOffset",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsConsumerResetOffsetResponse>(await this.callApi(params, req, runtime), new OnsConsumerResetOffsetResponse({}));
  }

  /**
   * Resets a consumer offset to a specified timestamp for a consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to clear accumulated messages or reset a consumer offset to a specified timestamp. You can use one of the following methods to clear accumulated messages:
   * *   Clear all accumulated messages in a specified topic.
   * *   Clear the messages that were published to the specified topic before a specified point in time.
   * 
   * @param request - OnsConsumerResetOffsetRequest
   * @returns OnsConsumerResetOffsetResponse
   */
  async onsConsumerResetOffset(request: OnsConsumerResetOffsetRequest): Promise<OnsConsumerResetOffsetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsConsumerResetOffsetWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about the status of a specified consumer group. This operation returns the transactions per second (TPS) for message consumption, load balancing status, consumer connection status, and whether all consumers in the consumer group subscribe to the same topics and tags.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   You can call this operation in scenarios in which consumers are online and messages are accumulated. You can troubleshoot errors based on the information that is returned by this operation. You can check whether all consumers in the consumer group subscribe to the same topics and tags, and whether load balancing is performed as expected. You can also obtain the information about thread stack traces of online consumers.
   * *   This operation uses multiple backend operations to query and aggregate data. The system requires a long period of time to process a request. We recommend that you do not frequently call this operation.
   * 
   * @param request - OnsConsumerStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsConsumerStatusResponse
   */
  async onsConsumerStatusWithOptions(request: OnsConsumerStatusRequest, runtime: $Util.RuntimeOptions): Promise<OnsConsumerStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.detail)) {
      query["Detail"] = request.detail;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.needJstack)) {
      query["NeedJstack"] = request.needJstack;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsConsumerStatus",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsConsumerStatusResponse>(await this.callApi(params, req, runtime), new OnsConsumerStatusResponse({}));
  }

  /**
   * Queries the detailed information about the status of a specified consumer group. This operation returns the transactions per second (TPS) for message consumption, load balancing status, consumer connection status, and whether all consumers in the consumer group subscribe to the same topics and tags.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   You can call this operation in scenarios in which consumers are online and messages are accumulated. You can troubleshoot errors based on the information that is returned by this operation. You can check whether all consumers in the consumer group subscribe to the same topics and tags, and whether load balancing is performed as expected. You can also obtain the information about thread stack traces of online consumers.
   * *   This operation uses multiple backend operations to query and aggregate data. The system requires a long period of time to process a request. We recommend that you do not frequently call this operation.
   * 
   * @param request - OnsConsumerStatusRequest
   * @returns OnsConsumerStatusResponse
   */
  async onsConsumerStatus(request: OnsConsumerStatusRequest): Promise<OnsConsumerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsConsumerStatusWithOptions(request, runtime);
  }

  /**
   * Queries the time range within which you can specify a point in time to reset the consumer offset for a specified topic. The time range is from the point in time when the earliest stored message was published to the topic to the point in time when the most recently stored message was published to the topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the point in time when the earliest stored message was published to a specified topic and the point in time when the most recently stored message was published to the specified topic. You can also call this operation to query the most recent point in time when a message in the topic was consumed. This operation is usually used with the \\*\\*OnsConsumerAccumulate\\*\\* operation to display the overview of the consumption progress.
   * 
   * @param request - OnsConsumerTimeSpanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsConsumerTimeSpanResponse
   */
  async onsConsumerTimeSpanWithOptions(request: OnsConsumerTimeSpanRequest, runtime: $Util.RuntimeOptions): Promise<OnsConsumerTimeSpanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsConsumerTimeSpan",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsConsumerTimeSpanResponse>(await this.callApi(params, req, runtime), new OnsConsumerTimeSpanResponse({}));
  }

  /**
   * Queries the time range within which you can specify a point in time to reset the consumer offset for a specified topic. The time range is from the point in time when the earliest stored message was published to the topic to the point in time when the most recently stored message was published to the topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the point in time when the earliest stored message was published to a specified topic and the point in time when the most recently stored message was published to the specified topic. You can also call this operation to query the most recent point in time when a message in the topic was consumed. This operation is usually used with the \\*\\*OnsConsumerAccumulate\\*\\* operation to display the overview of the consumption progress.
   * 
   * @param request - OnsConsumerTimeSpanRequest
   * @returns OnsConsumerTimeSpanResponse
   */
  async onsConsumerTimeSpan(request: OnsConsumerTimeSpanRequest): Promise<OnsConsumerTimeSpanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsConsumerTimeSpanWithOptions(request, runtime);
  }

  /**
   * Queries a dead-letter message based on the message ID. The queried information about the dead-letter message includes the point in time when the message is stored, the message body, and attributes such as the message tag and the message key.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * This operation uses the exact match method to query a dead-letter message based on the message ID. You can obtain the message ID that is required to query the information about a dead-letter message from the SendResult parameter that is returned after the message is sent. You can also obtain the message ID by calling the OnsDLQMessagePageQueryByGroupId operation to query multiple messages at a time. The queried information about the dead-letter message includes the point in time when the message is stored, the message body, and attributes such as the message tag and the message key.
   * 
   * @param request - OnsDLQMessageGetByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsDLQMessageGetByIdResponse
   */
  async onsDLQMessageGetByIdWithOptions(request: OnsDLQMessageGetByIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsDLQMessageGetByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsDLQMessageGetById",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsDLQMessageGetByIdResponse>(await this.callApi(params, req, runtime), new OnsDLQMessageGetByIdResponse({}));
  }

  /**
   * Queries a dead-letter message based on the message ID. The queried information about the dead-letter message includes the point in time when the message is stored, the message body, and attributes such as the message tag and the message key.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * This operation uses the exact match method to query a dead-letter message based on the message ID. You can obtain the message ID that is required to query the information about a dead-letter message from the SendResult parameter that is returned after the message is sent. You can also obtain the message ID by calling the OnsDLQMessagePageQueryByGroupId operation to query multiple messages at a time. The queried information about the dead-letter message includes the point in time when the message is stored, the message body, and attributes such as the message tag and the message key.
   * 
   * @param request - OnsDLQMessageGetByIdRequest
   * @returns OnsDLQMessageGetByIdResponse
   */
  async onsDLQMessageGetById(request: OnsDLQMessageGetByIdRequest): Promise<OnsDLQMessageGetByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsDLQMessageGetByIdWithOptions(request, runtime);
  }

  /**
   * Queries all dead-letter messages in a group within a period of time by page.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   If you do not know the ID of the dead-letter message that you want to query, you can call this operation to query all dead-letter messages that are sent to a specified consumer group within a specified time range. The results are returned by page.
   * *   We recommend that you specify a short time range to query dead-letter messages in this method. If you specify a long time range, a large number of dead-letter messages are returned. In this case, you cannot find the dead-letter message that you want to query in an efficient manner. You can perform the following steps to query dead-letter messages:
   *     1.  Perform a paged query by specifying the group ID, start time, end time, and number of entries to return on each page. If matched messages are found, the information about the dead-letter messages on the first page, total number of pages, and task ID are returned by default.
   *     2.  Specify the task ID and a page number to call this operation again to query the dead-letter messages on the specified page. In this query, the BeginTime, EndTime, and PageSize parameters do not take effect. By default, the system uses the values of these parameters that you specified in the request when you created the specified query task.
   * 
   * @param request - OnsDLQMessagePageQueryByGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsDLQMessagePageQueryByGroupIdResponse
   */
  async onsDLQMessagePageQueryByGroupIdWithOptions(request: OnsDLQMessagePageQueryByGroupIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsDLQMessagePageQueryByGroupIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsDLQMessagePageQueryByGroupId",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsDLQMessagePageQueryByGroupIdResponse>(await this.callApi(params, req, runtime), new OnsDLQMessagePageQueryByGroupIdResponse({}));
  }

  /**
   * Queries all dead-letter messages in a group within a period of time by page.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   If you do not know the ID of the dead-letter message that you want to query, you can call this operation to query all dead-letter messages that are sent to a specified consumer group within a specified time range. The results are returned by page.
   * *   We recommend that you specify a short time range to query dead-letter messages in this method. If you specify a long time range, a large number of dead-letter messages are returned. In this case, you cannot find the dead-letter message that you want to query in an efficient manner. You can perform the following steps to query dead-letter messages:
   *     1.  Perform a paged query by specifying the group ID, start time, end time, and number of entries to return on each page. If matched messages are found, the information about the dead-letter messages on the first page, total number of pages, and task ID are returned by default.
   *     2.  Specify the task ID and a page number to call this operation again to query the dead-letter messages on the specified page. In this query, the BeginTime, EndTime, and PageSize parameters do not take effect. By default, the system uses the values of these parameters that you specified in the request when you created the specified query task.
   * 
   * @param request - OnsDLQMessagePageQueryByGroupIdRequest
   * @returns OnsDLQMessagePageQueryByGroupIdResponse
   */
  async onsDLQMessagePageQueryByGroupId(request: OnsDLQMessagePageQueryByGroupIdRequest): Promise<OnsDLQMessagePageQueryByGroupIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsDLQMessagePageQueryByGroupIdWithOptions(request, runtime);
  }

  /**
   * Resends a dead-letter message based on a specified message ID so that the dead-letter message can be consumed by consumers.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   A dead-letter message is a message that still fails to be consumed after the number of consumption retries reaches the upper limit. If the message still cannot be consumed after you re-send it, a message with the same message ID is added to the corresponding dead-letter queue. You can query the message ID on the Dead-letter Queues page in the ApsaraMQ for RocketMQ console or by calling API operations. You can obtain the number of consumption failures for a message based on the number of dead-letter messages with the same message ID in the dead-letter queue.
   * *   A dead-letter message is a message that fails to be consumed after the number of consumption retries reaches the upper limit. Generally, dead-letter messages are produced because of incorrect consumption logic. We recommend that you troubleshoot the consumption failures and then call this operation to send the message to the consumer group for consumption again.
   * *   ApsaraMQ for RocketMQ does not manage the status of dead-letter messages based on the consumption status of the dead-letter messages. After you call this operation to send a dead-letter message to a consumer group and the message is consumed, ApsaraMQ for RocketMQ does not remove the dead-letter message from the dead-letter queue. You must manage dead-letter messages and determine whether to send a dead-letter message to a consumer group for consumption. This way, you do not resend or reconsume the messages that are consumed.
   * 
   * @param request - OnsDLQMessageResendByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsDLQMessageResendByIdResponse
   */
  async onsDLQMessageResendByIdWithOptions(request: OnsDLQMessageResendByIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsDLQMessageResendByIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsDLQMessageResendById",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsDLQMessageResendByIdResponse>(await this.callApi(params, req, runtime), new OnsDLQMessageResendByIdResponse({}));
  }

  /**
   * Resends a dead-letter message based on a specified message ID so that the dead-letter message can be consumed by consumers.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   A dead-letter message is a message that still fails to be consumed after the number of consumption retries reaches the upper limit. If the message still cannot be consumed after you re-send it, a message with the same message ID is added to the corresponding dead-letter queue. You can query the message ID on the Dead-letter Queues page in the ApsaraMQ for RocketMQ console or by calling API operations. You can obtain the number of consumption failures for a message based on the number of dead-letter messages with the same message ID in the dead-letter queue.
   * *   A dead-letter message is a message that fails to be consumed after the number of consumption retries reaches the upper limit. Generally, dead-letter messages are produced because of incorrect consumption logic. We recommend that you troubleshoot the consumption failures and then call this operation to send the message to the consumer group for consumption again.
   * *   ApsaraMQ for RocketMQ does not manage the status of dead-letter messages based on the consumption status of the dead-letter messages. After you call this operation to send a dead-letter message to a consumer group and the message is consumed, ApsaraMQ for RocketMQ does not remove the dead-letter message from the dead-letter queue. You must manage dead-letter messages and determine whether to send a dead-letter message to a consumer group for consumption. This way, you do not resend or reconsume the messages that are consumed.
   * 
   * @param request - OnsDLQMessageResendByIdRequest
   * @returns OnsDLQMessageResendByIdResponse
   */
  async onsDLQMessageResendById(request: OnsDLQMessageResendByIdRequest): Promise<OnsDLQMessageResendByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsDLQMessageResendByIdWithOptions(request, runtime);
  }

  /**
   * Configures read permissions on messages for a consumer group that is identified by a group ID.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to configure the permissions for a consumer group to read messages based on a specified region of ApsaraMQ for RocketMQ and a specified group ID. You can call this operation in scenarios in which you want to forbid consumers in a specific group from reading messages.
   * 
   * @param request - OnsGroupConsumerUpdateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsGroupConsumerUpdateResponse
   */
  async onsGroupConsumerUpdateWithOptions(request: OnsGroupConsumerUpdateRequest, runtime: $Util.RuntimeOptions): Promise<OnsGroupConsumerUpdateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.readEnable)) {
      query["ReadEnable"] = request.readEnable;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsGroupConsumerUpdate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsGroupConsumerUpdateResponse>(await this.callApi(params, req, runtime), new OnsGroupConsumerUpdateResponse({}));
  }

  /**
   * Configures read permissions on messages for a consumer group that is identified by a group ID.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to configure the permissions for a consumer group to read messages based on a specified region of ApsaraMQ for RocketMQ and a specified group ID. You can call this operation in scenarios in which you want to forbid consumers in a specific group from reading messages.
   * 
   * @param request - OnsGroupConsumerUpdateRequest
   * @returns OnsGroupConsumerUpdateResponse
   */
  async onsGroupConsumerUpdate(request: OnsGroupConsumerUpdateRequest): Promise<OnsGroupConsumerUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsGroupConsumerUpdateWithOptions(request, runtime);
  }

  /**
   * Creates a consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you release a new application or implement new business logic, you need new consumer groups. You can call this operation to create a consumer group.
   * 
   * @param request - OnsGroupCreateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsGroupCreateResponse
   */
  async onsGroupCreateWithOptions(request: OnsGroupCreateRequest, runtime: $Util.RuntimeOptions): Promise<OnsGroupCreateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsGroupCreate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsGroupCreateResponse>(await this.callApi(params, req, runtime), new OnsGroupCreateResponse({}));
  }

  /**
   * Creates a consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you release a new application or implement new business logic, you need new consumer groups. You can call this operation to create a consumer group.
   * 
   * @param request - OnsGroupCreateRequest
   * @returns OnsGroupCreateResponse
   */
  async onsGroupCreate(request: OnsGroupCreateRequest): Promise<OnsGroupCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsGroupCreateWithOptions(request, runtime);
  }

  /**
   * Deletes a consumer group.
   * 
   * @remarks
   * > 
   * *   API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   After you delete a group, the consumers in the group immediately stop receiving messages. Exercise caution when you call this operation.
   * You can call this operation to delete a group when you need to reclaim the resources of the group. For example, after an application is brought offline, you can delete the groups that are used for the application. After you delete a group, the backend of ApsaraMQ for RocketMQ reclaims the resources of the group. The system requires a long period of time to reclaim the resources. We recommend that you do not create a group that uses the same name as a deleted group immediately after you delete the group. If the system fails to delete the specified group, troubleshoot the issue based on the error code.
   * 
   * @param request - OnsGroupDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsGroupDeleteResponse
   */
  async onsGroupDeleteWithOptions(request: OnsGroupDeleteRequest, runtime: $Util.RuntimeOptions): Promise<OnsGroupDeleteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsGroupDelete",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsGroupDeleteResponse>(await this.callApi(params, req, runtime), new OnsGroupDeleteResponse({}));
  }

  /**
   * Deletes a consumer group.
   * 
   * @remarks
   * > 
   * *   API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   After you delete a group, the consumers in the group immediately stop receiving messages. Exercise caution when you call this operation.
   * You can call this operation to delete a group when you need to reclaim the resources of the group. For example, after an application is brought offline, you can delete the groups that are used for the application. After you delete a group, the backend of ApsaraMQ for RocketMQ reclaims the resources of the group. The system requires a long period of time to reclaim the resources. We recommend that you do not create a group that uses the same name as a deleted group immediately after you delete the group. If the system fails to delete the specified group, troubleshoot the issue based on the error code.
   * 
   * @param request - OnsGroupDeleteRequest
   * @returns OnsGroupDeleteResponse
   */
  async onsGroupDelete(request: OnsGroupDeleteRequest): Promise<OnsGroupDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsGroupDeleteWithOptions(request, runtime);
  }

  /**
   * Queries one or more group IDs.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsGroupListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsGroupListResponse
   */
  async onsGroupListWithOptions(request: OnsGroupListRequest, runtime: $Util.RuntimeOptions): Promise<OnsGroupListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsGroupList",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsGroupListResponse>(await this.callApi(params, req, runtime), new OnsGroupListResponse({}));
  }

  /**
   * Queries one or more group IDs.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsGroupListRequest
   * @returns OnsGroupListResponse
   */
  async onsGroupList(request: OnsGroupListRequest): Promise<OnsGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsGroupListWithOptions(request, runtime);
  }

  /**
   * Queries all topics to which a specified consumer group subscribes. If no consumer instance in the consumer group is online, no data is returned.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsGroupSubDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsGroupSubDetailResponse
   */
  async onsGroupSubDetailWithOptions(request: OnsGroupSubDetailRequest, runtime: $Util.RuntimeOptions): Promise<OnsGroupSubDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsGroupSubDetail",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsGroupSubDetailResponse>(await this.callApi(params, req, runtime), new OnsGroupSubDetailResponse({}));
  }

  /**
   * Queries all topics to which a specified consumer group subscribes. If no consumer instance in the consumer group is online, no data is returned.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsGroupSubDetailRequest
   * @returns OnsGroupSubDetailResponse
   */
  async onsGroupSubDetail(request: OnsGroupSubDetailRequest): Promise<OnsGroupSubDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsGroupSubDetailWithOptions(request, runtime);
  }

  /**
   * Queries the basic information of a ApsaraMQ for RocketMQ instance and the endpoint that a client uses to connect to the ApsaraMQ for RocketMQ instance to send and receive messages.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * To send and receive messages, a client must be connected to a ApsaraMQ for RocketMQ instance by using an endpoint. You can call this operation to query the endpoints of the instance.
   * 
   * @param request - OnsInstanceBaseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsInstanceBaseInfoResponse
   */
  async onsInstanceBaseInfoWithOptions(request: OnsInstanceBaseInfoRequest, runtime: $Util.RuntimeOptions): Promise<OnsInstanceBaseInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsInstanceBaseInfo",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsInstanceBaseInfoResponse>(await this.callApi(params, req, runtime), new OnsInstanceBaseInfoResponse({}));
  }

  /**
   * Queries the basic information of a ApsaraMQ for RocketMQ instance and the endpoint that a client uses to connect to the ApsaraMQ for RocketMQ instance to send and receive messages.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * To send and receive messages, a client must be connected to a ApsaraMQ for RocketMQ instance by using an endpoint. You can call this operation to query the endpoints of the instance.
   * 
   * @param request - OnsInstanceBaseInfoRequest
   * @returns OnsInstanceBaseInfoResponse
   */
  async onsInstanceBaseInfo(request: OnsInstanceBaseInfoRequest): Promise<OnsInstanceBaseInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsInstanceBaseInfoWithOptions(request, runtime);
  }

  /**
   * Creates a ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * An instance is a virtual machine (VM) that can be used to store information about the topics and groups of ApsaraMQ for RocketMQ. You can call this operation when you need to create service resources for the business that you want to launch. Before you call this operation, take note of the following limits:
   * *   A maximum of eight ApsaraMQ for RocketMQ instances can be deployed in each region.
   * *   This operation can be called to create only a Standard Edition instance. You can use the ApsaraMQ for RocketMQ console to create Standard Edition instances and Enterprise Platinum Edition instances. For information about how to create ApsaraMQ for RocketMQ instances, see [Manage instances](https://help.aliyun.com/document_detail/200153.html).
   * 
   * @param request - OnsInstanceCreateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsInstanceCreateResponse
   */
  async onsInstanceCreateWithOptions(request: OnsInstanceCreateRequest, runtime: $Util.RuntimeOptions): Promise<OnsInstanceCreateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsInstanceCreate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsInstanceCreateResponse>(await this.callApi(params, req, runtime), new OnsInstanceCreateResponse({}));
  }

  /**
   * Creates a ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * An instance is a virtual machine (VM) that can be used to store information about the topics and groups of ApsaraMQ for RocketMQ. You can call this operation when you need to create service resources for the business that you want to launch. Before you call this operation, take note of the following limits:
   * *   A maximum of eight ApsaraMQ for RocketMQ instances can be deployed in each region.
   * *   This operation can be called to create only a Standard Edition instance. You can use the ApsaraMQ for RocketMQ console to create Standard Edition instances and Enterprise Platinum Edition instances. For information about how to create ApsaraMQ for RocketMQ instances, see [Manage instances](https://help.aliyun.com/document_detail/200153.html).
   * 
   * @param request - OnsInstanceCreateRequest
   * @returns OnsInstanceCreateResponse
   */
  async onsInstanceCreate(request: OnsInstanceCreateRequest): Promise<OnsInstanceCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsInstanceCreateWithOptions(request, runtime);
  }

  /**
   * Deletes a ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   You can call this operation when you need to reclaim resources. For example, after you unpublish an application, you can reclaim the resources that were used for the application. An instance can be deleted only when the instance does not contain topics and groups.
   * *   After an instance is deleted, the instance cannot be restored. Exercise caution when you call this operation.
   * 
   * @param request - OnsInstanceDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsInstanceDeleteResponse
   */
  async onsInstanceDeleteWithOptions(request: OnsInstanceDeleteRequest, runtime: $Util.RuntimeOptions): Promise<OnsInstanceDeleteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsInstanceDelete",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsInstanceDeleteResponse>(await this.callApi(params, req, runtime), new OnsInstanceDeleteResponse({}));
  }

  /**
   * Deletes a ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   You can call this operation when you need to reclaim resources. For example, after you unpublish an application, you can reclaim the resources that were used for the application. An instance can be deleted only when the instance does not contain topics and groups.
   * *   After an instance is deleted, the instance cannot be restored. Exercise caution when you call this operation.
   * 
   * @param request - OnsInstanceDeleteRequest
   * @returns OnsInstanceDeleteResponse
   */
  async onsInstanceDelete(request: OnsInstanceDeleteRequest): Promise<OnsInstanceDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsInstanceDeleteWithOptions(request, runtime);
  }

  /**
   * Queries all Message Queue for Apache RocketMQ instances in a specified region within the current account.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsInstanceInServiceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsInstanceInServiceListResponse
   */
  async onsInstanceInServiceListWithOptions(request: OnsInstanceInServiceListRequest, runtime: $Util.RuntimeOptions): Promise<OnsInstanceInServiceListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.needResourceInfo)) {
      query["NeedResourceInfo"] = request.needResourceInfo;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsInstanceInServiceList",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsInstanceInServiceListResponse>(await this.callApi(params, req, runtime), new OnsInstanceInServiceListResponse({}));
  }

  /**
   * Queries all Message Queue for Apache RocketMQ instances in a specified region within the current account.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsInstanceInServiceListRequest
   * @returns OnsInstanceInServiceListResponse
   */
  async onsInstanceInServiceList(request: OnsInstanceInServiceListRequest): Promise<OnsInstanceInServiceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsInstanceInServiceListWithOptions(request, runtime);
  }

  /**
   * Updates the name and description of a ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * A maximum of eight ApsaraMQ for RocketMQ instances can be deployed in each region.
   * 
   * @param request - OnsInstanceUpdateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsInstanceUpdateResponse
   */
  async onsInstanceUpdateWithOptions(request: OnsInstanceUpdateRequest, runtime: $Util.RuntimeOptions): Promise<OnsInstanceUpdateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsInstanceUpdate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsInstanceUpdateResponse>(await this.callApi(params, req, runtime), new OnsInstanceUpdateResponse({}));
  }

  /**
   * Updates the name and description of a ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * A maximum of eight ApsaraMQ for RocketMQ instances can be deployed in each region.
   * 
   * @param request - OnsInstanceUpdateRequest
   * @returns OnsInstanceUpdateResponse
   */
  async onsInstanceUpdate(request: OnsInstanceUpdateRequest): Promise<OnsInstanceUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsInstanceUpdateWithOptions(request, runtime);
  }

  /**
   * Queries the details of a message.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsMessageDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsMessageDetailResponse
   */
  async onsMessageDetailWithOptions(request: OnsMessageDetailRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessageDetailResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsMessageDetail",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsMessageDetailResponse>(await this.callApi(params, req, runtime), new OnsMessageDetailResponse({}));
  }

  /**
   * Queries the details of a message.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - OnsMessageDetailRequest
   * @returns OnsMessageDetailResponse
   */
  async onsMessageDetail(request: OnsMessageDetailRequest): Promise<OnsMessageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessageDetailWithOptions(request, runtime);
  }

  /**
   * Queries messages by using a specified topic and message key.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   This operation uses the fuzzy match method to query messages based on a specified message key. The same message key may be used by multiple messages. Therefore, the returned result may contain information about multiple messages.
   * *   This operation can be used in scenarios in which you cannot obtain the IDs of the messages that you want to query. You can perform the following steps to query the information about messages:
   *     1.  Call this operation to query message IDs.
   *     2.  Call the **OnsMessageGetByMsgId** operation that uses the exact match method to query the details of a specified message. For more information about the **OnsMessageGetByMsgId** operation, see [OnsMessageGetByMsgId](https://help.aliyun.com/document_detail/29607.html).
   * 
   * @param request - OnsMessageGetByKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsMessageGetByKeyResponse
   */
  async onsMessageGetByKeyWithOptions(request: OnsMessageGetByKeyRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessageGetByKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsMessageGetByKey",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsMessageGetByKeyResponse>(await this.callApi(params, req, runtime), new OnsMessageGetByKeyResponse({}));
  }

  /**
   * Queries messages by using a specified topic and message key.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   This operation uses the fuzzy match method to query messages based on a specified message key. The same message key may be used by multiple messages. Therefore, the returned result may contain information about multiple messages.
   * *   This operation can be used in scenarios in which you cannot obtain the IDs of the messages that you want to query. You can perform the following steps to query the information about messages:
   *     1.  Call this operation to query message IDs.
   *     2.  Call the **OnsMessageGetByMsgId** operation that uses the exact match method to query the details of a specified message. For more information about the **OnsMessageGetByMsgId** operation, see [OnsMessageGetByMsgId](https://help.aliyun.com/document_detail/29607.html).
   * 
   * @param request - OnsMessageGetByKeyRequest
   * @returns OnsMessageGetByKeyResponse
   */
  async onsMessageGetByKey(request: OnsMessageGetByKeyRequest): Promise<OnsMessageGetByKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessageGetByKeyWithOptions(request, runtime);
  }

  /**
   * Queries the information about a message by specifying the message ID and determines whether the message has been consumed.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   If a message is not consumed as expected, you can call this operation to query the information about the message for troubleshooting.
   * *   This operation uses the exact match method to query a message based on the message ID. You can obtain the message ID from the SendResult parameter that is returned after the message is sent. You must store the returned information after each message is sent. The queried information about a message includes the point in time when the message was sent, the broker on which the message is stored, and the attributes of the message such as the message key and tag.
   * 
   * @param request - OnsMessageGetByMsgIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsMessageGetByMsgIdResponse
   */
  async onsMessageGetByMsgIdWithOptions(request: OnsMessageGetByMsgIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessageGetByMsgIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsMessageGetByMsgId",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsMessageGetByMsgIdResponse>(await this.callApi(params, req, runtime), new OnsMessageGetByMsgIdResponse({}));
  }

  /**
   * Queries the information about a message by specifying the message ID and determines whether the message has been consumed.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   If a message is not consumed as expected, you can call this operation to query the information about the message for troubleshooting.
   * *   This operation uses the exact match method to query a message based on the message ID. You can obtain the message ID from the SendResult parameter that is returned after the message is sent. You must store the returned information after each message is sent. The queried information about a message includes the point in time when the message was sent, the broker on which the message is stored, and the attributes of the message such as the message key and tag.
   * 
   * @param request - OnsMessageGetByMsgIdRequest
   * @returns OnsMessageGetByMsgIdResponse
   */
  async onsMessageGetByMsgId(request: OnsMessageGetByMsgIdRequest): Promise<OnsMessageGetByMsgIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessageGetByMsgIdWithOptions(request, runtime);
  }

  /**
   * Queries all messages that are stored in a specified topic within a specified time range by page.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   If you do not know the ID or key of a message that you want to query, you can call this operation to query all messages that are stored in the topic within a specified time range. The results are displayed by page.
   * *   We recommend that you specify a short time range to query messages. If you specify a long time range, a large number of messages are returned. In this case, you cannot find the message that you want to query in an efficient manner. You can perform the following steps to query messages:
   *     1.  Perform a paged query by specifying the topic, start time, end time, and number of entries to return on each page. If the topic contains messages, the information about the messages on the first page, total number of pages, and task ID are returned by default.
   *     2.  Specify the task ID and a page number to call this operation again to query the messages on the specified page. The BeginTime, EndTime, and PageSize parameters do not take effect. By default, the system uses the values of these parameters that you specified in the request when you created the specified query task.
   * 
   * @param request - OnsMessagePageQueryByTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsMessagePageQueryByTopicResponse
   */
  async onsMessagePageQueryByTopicWithOptions(request: OnsMessagePageQueryByTopicRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessagePageQueryByTopicResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsMessagePageQueryByTopic",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsMessagePageQueryByTopicResponse>(await this.callApi(params, req, runtime), new OnsMessagePageQueryByTopicResponse({}));
  }

  /**
   * Queries all messages that are stored in a specified topic within a specified time range by page.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   If you do not know the ID or key of a message that you want to query, you can call this operation to query all messages that are stored in the topic within a specified time range. The results are displayed by page.
   * *   We recommend that you specify a short time range to query messages. If you specify a long time range, a large number of messages are returned. In this case, you cannot find the message that you want to query in an efficient manner. You can perform the following steps to query messages:
   *     1.  Perform a paged query by specifying the topic, start time, end time, and number of entries to return on each page. If the topic contains messages, the information about the messages on the first page, total number of pages, and task ID are returned by default.
   *     2.  Specify the task ID and a page number to call this operation again to query the messages on the specified page. The BeginTime, EndTime, and PageSize parameters do not take effect. By default, the system uses the values of these parameters that you specified in the request when you created the specified query task.
   * 
   * @param request - OnsMessagePageQueryByTopicRequest
   * @returns OnsMessagePageQueryByTopicResponse
   */
  async onsMessagePageQueryByTopic(request: OnsMessagePageQueryByTopicRequest): Promise<OnsMessagePageQueryByTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessagePageQueryByTopicWithOptions(request, runtime);
  }

  /**
   * Pushes a message to a specified consumer.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * This operation can be used to check whether messages in a specified topic can be consumed by consumers in a specified consumer group. This operation obtains the body of the message that is specified by the MsgId parameter, re-encapsulates the message body to produce a new message, and then pushes the new message to a specified consumer. The content of the message that is sent to the consumer is the same as the content of the original message. They are not the same message because they use different message IDs.
   * 
   * @param request - OnsMessagePushRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsMessagePushResponse
   */
  async onsMessagePushWithOptions(request: OnsMessagePushRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessagePushResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientId)) {
      query["ClientId"] = request.clientId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsMessagePush",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsMessagePushResponse>(await this.callApi(params, req, runtime), new OnsMessagePushResponse({}));
  }

  /**
   * Pushes a message to a specified consumer.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * This operation can be used to check whether messages in a specified topic can be consumed by consumers in a specified consumer group. This operation obtains the body of the message that is specified by the MsgId parameter, re-encapsulates the message body to produce a new message, and then pushes the new message to a specified consumer. The content of the message that is sent to the consumer is the same as the content of the original message. They are not the same message because they use different message IDs.
   * 
   * @param request - OnsMessagePushRequest
   * @returns OnsMessagePushResponse
   */
  async onsMessagePush(request: OnsMessagePushRequest): Promise<OnsMessagePushResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessagePushWithOptions(request, runtime);
  }

  /**
   * Queries the consumption status of a message by using the message ID.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   You can call this operation to check whether a specified message is consumed. If the message is not consumed, you can troubleshoot the issue based on the returned information.
   * *   This operation queries information based on the built-in offset mechanism of ApsaraMQ for RocketMQ. In most cases, the results are correct. If you have reset the consumer offset or cleared accumulated messages, the results may not be correct.
   * 
   * @param request - OnsMessageTraceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsMessageTraceResponse
   */
  async onsMessageTraceWithOptions(request: OnsMessageTraceRequest, runtime: $Util.RuntimeOptions): Promise<OnsMessageTraceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsMessageTrace",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsMessageTraceResponse>(await this.callApi(params, req, runtime), new OnsMessageTraceResponse({}));
  }

  /**
   * Queries the consumption status of a message by using the message ID.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   You can call this operation to check whether a specified message is consumed. If the message is not consumed, you can troubleshoot the issue based on the returned information.
   * *   This operation queries information based on the built-in offset mechanism of ApsaraMQ for RocketMQ. In most cases, the results are correct. If you have reset the consumer offset or cleared accumulated messages, the results may not be correct.
   * 
   * @param request - OnsMessageTraceRequest
   * @returns OnsMessageTraceResponse
   */
  async onsMessageTrace(request: OnsMessageTraceRequest): Promise<OnsMessageTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsMessageTraceWithOptions(request, runtime);
  }

  /**
   * Queries regions where ApsaraMQ for RocketMQ is available.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you use an SDK to access and manage a ApsaraMQ for RocketMQ instance, you must sequentially specify the information about two regions. You can query the information about the second region by calling the OnsRegionList operation. You must apply for a public endpoint in the following scenarios:
   * *   Connect your application to ApsaraMQ for RocketMQ: Select the nearest API gateway endpoint based on the region where your application is deployed, and enter the corresponding **region ID**. The **regionId** is used to access Alibaba Cloud API Gateway because ApsaraMQ for RocketMQ instances provide API services by using the OpenAPI Explorer platform, which is also called POP.
   * *   Access a region to manage its resources: Specify a region where you want to manage ApsaraMQ for RocketMQ resources and enter the region ID. You can call the **OnsRegionList** operation to query a region ID.
   * 
   * @param request - OnsRegionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsRegionListResponse
   */
  async onsRegionListWithOptions(runtime: $Util.RuntimeOptions): Promise<OnsRegionListResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OnsRegionList",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsRegionListResponse>(await this.callApi(params, req, runtime), new OnsRegionListResponse({}));
  }

  /**
   * Queries regions where ApsaraMQ for RocketMQ is available.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you use an SDK to access and manage a ApsaraMQ for RocketMQ instance, you must sequentially specify the information about two regions. You can query the information about the second region by calling the OnsRegionList operation. You must apply for a public endpoint in the following scenarios:
   * *   Connect your application to ApsaraMQ for RocketMQ: Select the nearest API gateway endpoint based on the region where your application is deployed, and enter the corresponding **region ID**. The **regionId** is used to access Alibaba Cloud API Gateway because ApsaraMQ for RocketMQ instances provide API services by using the OpenAPI Explorer platform, which is also called POP.
   * *   Access a region to manage its resources: Specify a region where you want to manage ApsaraMQ for RocketMQ resources and enter the region ID. You can call the **OnsRegionList** operation to query a region ID.
   * @returns OnsRegionListResponse
   */
  async onsRegionList(): Promise<OnsRegionListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsRegionListWithOptions(runtime);
  }

  /**
   * Creates a topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you want to release a new application or expand your business, you can call this operation to create a topic based on your business requirements.
   * 
   * @param request - OnsTopicCreateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTopicCreateResponse
   */
  async onsTopicCreateWithOptions(request: OnsTopicCreateRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicCreateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTopicCreate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTopicCreateResponse>(await this.callApi(params, req, runtime), new OnsTopicCreateResponse({}));
  }

  /**
   * Creates a topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * When you want to release a new application or expand your business, you can call this operation to create a topic based on your business requirements.
   * 
   * @param request - OnsTopicCreateRequest
   * @returns OnsTopicCreateResponse
   */
  async onsTopicCreate(request: OnsTopicCreateRequest): Promise<OnsTopicCreateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicCreateWithOptions(request, runtime);
  }

  /**
   * Deletes a topic.
   * 
   * @remarks
   * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur. - After you delete the topic, the publishing and subscription relationships that are constructed based on the topic are cleared. Exercise caution when you call this operation.
   * You can call this operation to delete a topic when you need to reclaim the resources from the topic. For example, after an application is brought offline, you can delete the topics that are used for the application. After you delete a topic, the backend of ApsaraMQ for RocketMQ reclaims the resources from the topic. The system requires a long period of time to reclaim the resources. After you delete a topic, we recommend that you do not create a topic that uses the same name as the deleted topic within a short period of time. If the system fails to delete the specified topic, troubleshoot the issue based on the error code.
   * 
   * @param request - OnsTopicDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTopicDeleteResponse
   */
  async onsTopicDeleteWithOptions(request: OnsTopicDeleteRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicDeleteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTopicDelete",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTopicDeleteResponse>(await this.callApi(params, req, runtime), new OnsTopicDeleteResponse({}));
  }

  /**
   * Deletes a topic.
   * 
   * @remarks
   * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur. - After you delete the topic, the publishing and subscription relationships that are constructed based on the topic are cleared. Exercise caution when you call this operation.
   * You can call this operation to delete a topic when you need to reclaim the resources from the topic. For example, after an application is brought offline, you can delete the topics that are used for the application. After you delete a topic, the backend of ApsaraMQ for RocketMQ reclaims the resources from the topic. The system requires a long period of time to reclaim the resources. After you delete a topic, we recommend that you do not create a topic that uses the same name as the deleted topic within a short period of time. If the system fails to delete the specified topic, troubleshoot the issue based on the error code.
   * 
   * @param request - OnsTopicDeleteRequest
   * @returns OnsTopicDeleteResponse
   */
  async onsTopicDelete(request: OnsTopicDeleteRequest): Promise<OnsTopicDeleteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicDeleteWithOptions(request, runtime);
  }

  /**
   * Queries the information about topics that belong to the current account.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * This operation returns the basic information about topics and does not return the details of topics.
   * 
   * @param request - OnsTopicListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTopicListResponse
   */
  async onsTopicListWithOptions(request: OnsTopicListRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTopicList",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTopicListResponse>(await this.callApi(params, req, runtime), new OnsTopicListResponse({}));
  }

  /**
   * Queries the information about topics that belong to the current account.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * This operation returns the basic information about topics and does not return the details of topics.
   * 
   * @param request - OnsTopicListRequest
   * @returns OnsTopicListResponse
   */
  async onsTopicList(request: OnsTopicListRequest): Promise<OnsTopicListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicListWithOptions(request, runtime);
  }

  /**
   * Queries the total number of messages in a topic and the status of the topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can determine the resource usage of a topic based on the information that is returned by this operation. The returned information includes the total number of messages in the topic and the most recent point in time when a message was published to the topic.
   * 
   * @param request - OnsTopicStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTopicStatusResponse
   */
  async onsTopicStatusWithOptions(request: OnsTopicStatusRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTopicStatus",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTopicStatusResponse>(await this.callApi(params, req, runtime), new OnsTopicStatusResponse({}));
  }

  /**
   * Queries the total number of messages in a topic and the status of the topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can determine the resource usage of a topic based on the information that is returned by this operation. The returned information includes the total number of messages in the topic and the most recent point in time when a message was published to the topic.
   * 
   * @param request - OnsTopicStatusRequest
   * @returns OnsTopicStatusResponse
   */
  async onsTopicStatus(request: OnsTopicStatusRequest): Promise<OnsTopicStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicStatusWithOptions(request, runtime);
  }

  /**
   * Queries the online consumer groups that subscribe to a specified topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the online consumer groups that subscribe to a specified topic. If all consumers in a group are offline, the information about the group is not returned.
   * 
   * @param request - OnsTopicSubDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTopicSubDetailResponse
   */
  async onsTopicSubDetailWithOptions(request: OnsTopicSubDetailRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicSubDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTopicSubDetail",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTopicSubDetailResponse>(await this.callApi(params, req, runtime), new OnsTopicSubDetailResponse({}));
  }

  /**
   * Queries the online consumer groups that subscribe to a specified topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the online consumer groups that subscribe to a specified topic. If all consumers in a group are offline, the information about the group is not returned.
   * 
   * @param request - OnsTopicSubDetailRequest
   * @returns OnsTopicSubDetailResponse
   */
  async onsTopicSubDetail(request: OnsTopicSubDetailRequest): Promise<OnsTopicSubDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicSubDetailWithOptions(request, runtime);
  }

  /**
   * Configures the read/write mode for a specified topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to forbid read or write operations on a specific topic.
   * 
   * @deprecated OpenAPI OnsTopicUpdate is deprecated
   * 
   * @param request - OnsTopicUpdateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTopicUpdateResponse
   */
  // Deprecated
  async onsTopicUpdateWithOptions(request: OnsTopicUpdateRequest, runtime: $Util.RuntimeOptions): Promise<OnsTopicUpdateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.perm)) {
      query["Perm"] = request.perm;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTopicUpdate",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTopicUpdateResponse>(await this.callApi(params, req, runtime), new OnsTopicUpdateResponse({}));
  }

  /**
   * Configures the read/write mode for a specified topic.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to forbid read or write operations on a specific topic.
   * 
   * @deprecated OpenAPI OnsTopicUpdate is deprecated
   * 
   * @param request - OnsTopicUpdateRequest
   * @returns OnsTopicUpdateResponse
   */
  // Deprecated
  async onsTopicUpdate(request: OnsTopicUpdateRequest): Promise<OnsTopicUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTopicUpdateWithOptions(request, runtime);
  }

  /**
   * The tracing results are queried by specifying the ID of a trace query task.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   Before you call this operation to query the details of the trace of a message, you must create a task to query the trace of the message based on the message ID or message key and obtain the task ID. Then, you can call this operation to query the details of the message trace based on the task ID. You can call the [OnsTraceQueryByMsgId](https://help.aliyun.com/document_detail/445322.html) operation or the [OnsTraceQueryByMsgKey](https://help.aliyun.com/document_detail/445324.html) operation to create a task to query the trace of the message and obtain the task ID from the **QueryId** response parameter.
   * *   A trace query task is time-consuming. If you call this operation to query the details immediately after you create a trace query task, the results may be empty. In this case, we recommend that you try again later.
   * 
   * @param request - OnsTraceGetResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTraceGetResultResponse
   */
  async onsTraceGetResultWithOptions(request: OnsTraceGetResultRequest, runtime: $Util.RuntimeOptions): Promise<OnsTraceGetResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTraceGetResult",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTraceGetResultResponse>(await this.callApi(params, req, runtime), new OnsTraceGetResultResponse({}));
  }

  /**
   * The tracing results are queried by specifying the ID of a trace query task.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   Before you call this operation to query the details of the trace of a message, you must create a task to query the trace of the message based on the message ID or message key and obtain the task ID. Then, you can call this operation to query the details of the message trace based on the task ID. You can call the [OnsTraceQueryByMsgId](https://help.aliyun.com/document_detail/445322.html) operation or the [OnsTraceQueryByMsgKey](https://help.aliyun.com/document_detail/445324.html) operation to create a task to query the trace of the message and obtain the task ID from the **QueryId** response parameter.
   * *   A trace query task is time-consuming. If you call this operation to query the details immediately after you create a trace query task, the results may be empty. In this case, we recommend that you try again later.
   * 
   * @param request - OnsTraceGetResultRequest
   * @returns OnsTraceGetResultResponse
   */
  async onsTraceGetResult(request: OnsTraceGetResultRequest): Promise<OnsTraceGetResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTraceGetResultWithOptions(request, runtime);
  }

  /**
   * Creates a task to query the trace of a message based on the message ID and the name of the topic in which the message is stored. The task ID is returned.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * If you want to query the trace of a message based on the message ID, you can call this operation to create a query task. After you obtain the task ID, you can call the [OnsTraceGetResult](https://help.aliyun.com/document_detail/59832.html) operation to query the details of the message trace based on the task ID.
   * 
   * @param request - OnsTraceQueryByMsgIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTraceQueryByMsgIdResponse
   */
  async onsTraceQueryByMsgIdWithOptions(request: OnsTraceQueryByMsgIdRequest, runtime: $Util.RuntimeOptions): Promise<OnsTraceQueryByMsgIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.msgId)) {
      query["MsgId"] = request.msgId;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTraceQueryByMsgId",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTraceQueryByMsgIdResponse>(await this.callApi(params, req, runtime), new OnsTraceQueryByMsgIdResponse({}));
  }

  /**
   * Creates a task to query the trace of a message based on the message ID and the name of the topic in which the message is stored. The task ID is returned.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * If you want to query the trace of a message based on the message ID, you can call this operation to create a query task. After you obtain the task ID, you can call the [OnsTraceGetResult](https://help.aliyun.com/document_detail/59832.html) operation to query the details of the message trace based on the task ID.
   * 
   * @param request - OnsTraceQueryByMsgIdRequest
   * @returns OnsTraceQueryByMsgIdResponse
   */
  async onsTraceQueryByMsgId(request: OnsTraceQueryByMsgIdRequest): Promise<OnsTraceQueryByMsgIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTraceQueryByMsgIdWithOptions(request, runtime);
  }

  /**
   * Creates a trace query task based on the topic name and message key and obtains the ID of the query task.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * If you want to query the trace of a message based on the message key that you obtained, you can call this operation to create a query task. After you obtain the task ID, you can call the OnsTraceGetResult operation to query the details of the message trace based on the task ID.
   * 
   * @param request - OnsTraceQueryByMsgKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTraceQueryByMsgKeyResponse
   */
  async onsTraceQueryByMsgKeyWithOptions(request: OnsTraceQueryByMsgKeyRequest, runtime: $Util.RuntimeOptions): Promise<OnsTraceQueryByMsgKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.msgKey)) {
      query["MsgKey"] = request.msgKey;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTraceQueryByMsgKey",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTraceQueryByMsgKeyResponse>(await this.callApi(params, req, runtime), new OnsTraceQueryByMsgKeyResponse({}));
  }

  /**
   * Creates a trace query task based on the topic name and message key and obtains the ID of the query task.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * If you want to query the trace of a message based on the message key that you obtained, you can call this operation to create a query task. After you obtain the task ID, you can call the OnsTraceGetResult operation to query the details of the message trace based on the task ID.
   * 
   * @param request - OnsTraceQueryByMsgKeyRequest
   * @returns OnsTraceQueryByMsgKeyResponse
   */
  async onsTraceQueryByMsgKey(request: OnsTraceQueryByMsgKeyRequest): Promise<OnsTraceQueryByMsgKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTraceQueryByMsgKeyWithOptions(request, runtime);
  }

  /**
   * Queries the statistics about messages that are consumed by a consumer group within a specific period of time.
   * 
   * @remarks
   * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the following statistics that are collected in a production environment:
   * *   The number of messages that are consumed during each sampling period
   * *   The transactions per second (TPS) for message consumption during each sampling period
   * If your application consumes a small number of messages and does not consume messages at specific intervals, we recommend that you query the number of messages that are consumed during each sampling period because the statistics of TPS may not show a clear change trend.
   * 
   * @param request - OnsTrendGroupOutputTpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTrendGroupOutputTpsResponse
   */
  async onsTrendGroupOutputTpsWithOptions(request: OnsTrendGroupOutputTpsRequest, runtime: $Util.RuntimeOptions): Promise<OnsTrendGroupOutputTpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTrendGroupOutputTps",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTrendGroupOutputTpsResponse>(await this.callApi(params, req, runtime), new OnsTrendGroupOutputTpsResponse({}));
  }

  /**
   * Queries the statistics about messages that are consumed by a consumer group within a specific period of time.
   * 
   * @remarks
   * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the following statistics that are collected in a production environment:
   * *   The number of messages that are consumed during each sampling period
   * *   The transactions per second (TPS) for message consumption during each sampling period
   * If your application consumes a small number of messages and does not consume messages at specific intervals, we recommend that you query the number of messages that are consumed during each sampling period because the statistics of TPS may not show a clear change trend.
   * 
   * @param request - OnsTrendGroupOutputTpsRequest
   * @returns OnsTrendGroupOutputTpsResponse
   */
  async onsTrendGroupOutputTps(request: OnsTrendGroupOutputTpsRequest): Promise<OnsTrendGroupOutputTpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTrendGroupOutputTpsWithOptions(request, runtime);
  }

  /**
   * Queries the statistics about messages that are published to a topic within a specific period of time.
   * 
   * @remarks
   * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the statistics of messages that are published to a specific topic in a production environment. You can query the number of messages that are published to the topic or the transactions per second (TPS) for message publishing within a specified time range based on your business requirements.
   * If your application publishes a small number of messages and does not publish messages at specific intervals, we recommend that you query the number of messages that are published to the topic during each sampling period because the statistics of TPS may not show a clear change trend.
   * 
   * @param request - OnsTrendTopicInputTpsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnsTrendTopicInputTpsResponse
   */
  async onsTrendTopicInputTpsWithOptions(request: OnsTrendTopicInputTpsRequest, runtime: $Util.RuntimeOptions): Promise<OnsTrendTopicInputTpsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.topic)) {
      query["Topic"] = request.topic;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OnsTrendTopicInputTps",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OnsTrendTopicInputTpsResponse>(await this.callApi(params, req, runtime), new OnsTrendTopicInputTpsResponse({}));
  }

  /**
   * Queries the statistics about messages that are published to a topic within a specific period of time.
   * 
   * @remarks
   * >  API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to query the statistics of messages that are published to a specific topic in a production environment. You can query the number of messages that are published to the topic or the transactions per second (TPS) for message publishing within a specified time range based on your business requirements.
   * If your application publishes a small number of messages and does not publish messages at specific intervals, we recommend that you query the number of messages that are published to the topic during each sampling period because the statistics of TPS may not show a clear change trend.
   * 
   * @param request - OnsTrendTopicInputTpsRequest
   * @returns OnsTrendTopicInputTpsResponse
   */
  async onsTrendTopicInputTps(request: OnsTrendTopicInputTpsRequest): Promise<OnsTrendTopicInputTpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.onsTrendTopicInputTpsWithOptions(request, runtime);
  }

  /**
   * Activates ApsaraMQ for RocketMQ.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation the first time you use ApsaraMQ for RocketMQ. You can use ApsaraMQ for RocketMQ only after the service is activated.
   * The ApsaraMQ for RocketMQ service can be activated only in the China (Hangzhou) region. Service activation is not billed.
   * 
   * @param request - OpenOnsServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenOnsServiceResponse
   */
  async openOnsServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenOnsServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OpenOnsService",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenOnsServiceResponse>(await this.callApi(params, req, runtime), new OpenOnsServiceResponse({}));
  }

  /**
   * Activates ApsaraMQ for RocketMQ.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation the first time you use ApsaraMQ for RocketMQ. You can use ApsaraMQ for RocketMQ only after the service is activated.
   * The ApsaraMQ for RocketMQ service can be activated only in the China (Hangzhou) region. Service activation is not billed.
   * @returns OpenOnsServiceResponse
   */
  async openOnsService(): Promise<OpenOnsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openOnsServiceWithOptions(runtime);
  }

  /**
   * Attaches tags to resources.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to attach tags to a source. You can use tags to classify resources in ApsaraMQ for RocketMQ. This can help you aggregate and search resources in an efficient manner.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Attaches tags to resources.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * You can call this operation to attach tags to a source. You can use tags to classify resources in ApsaraMQ for RocketMQ. This can help you aggregate and search resources in an efficient manner.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Detaches and removes tags from a specific resource.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2019-02-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Detaches and removes tags from a specific resource.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
