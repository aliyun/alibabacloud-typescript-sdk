// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ChangeResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance is changed.
   * 
   * You can call the [ListResourceGroups](https://www.alibabacloud.com/help/resource-management/latest/listresourcegroups) operation to query existing resource groups.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource. Set this parameter to the ID of the ApsaraMQ for RocketMQ instance whose resource group you want to change.
   * 
   * This parameter is required.
   * 
   * @example
   * c2c5d1274a8d4317a13bc5b0d4******
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of resource.
   * 
   * Set this parameter to **instance**. The value of this parameter cannot be changed.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * Instance.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
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

export class ChangeResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
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
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The consumption retry policy that you want to configure for the consumer group. For more information, see [Consumption retry](https://help.aliyun.com/document_detail/440356.html).
   * 
   * This parameter is required.
   */
  consumeRetryPolicy?: CreateConsumerGroupRequestConsumeRetryPolicy;
  /**
   * @remarks
   * The message delivery order of the consumer group.
   * 
   * Valid values:
   * 
   * *   Concurrently: concurrent delivery
   * *   Orderly: ordered delivery
   * 
   * This parameter is required.
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * The remarks on the consumer group.
   * 
   * @example
   * This is the remark for test.
   */
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
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidConsumerGroupId
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ConsumerGroupId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * consumerGroupId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter consumerGroupId is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateConsumerGroupResponseBody;
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

export class CreateInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. This parameter takes effect only if you set PaymentType to Subscription.
   * 
   * *   true: enable
   * *   false: disable
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal cycle of the instance. This parameter takes effect only if you set autoRenew to true. Unit: months.
   * 
   * Valid values:
   * 
   * *   Monthly renewal: 1, 2, 3, 6, and 12
   * 
   * @example
   * 3
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The commodity code.
   * 
   * *   ons_rmqpost_public_intl: pay-as-you-go
   * *   ons_rmqsub_public_intl: subscription
   * 
   * @example
   * ons_ rmqpost_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The name of the instance that you want to create.
   * 
   * If you do not configure this parameter, the instance ID is used as the instance name.
   * 
   * @example
   * rmq-cn-72u3048uxxx
   */
  instanceName?: string;
  /**
   * @remarks
   * The network configurations.
   * 
   * This parameter is required.
   */
  networkInfo?: CreateInstanceRequestNetworkInfo;
  /**
   * @remarks
   * The billing method of the instance. ApsaraMQ for RocketMQ supports the subscription and pay-as-you-go billing methods.
   * 
   * Valid values:
   * 
   * *   PayAsYouGo: This billing method allows you to use resources before you pay for the resources.
   * *   Subscription: This billing method allows you to use resources after you pay for the resources.
   * 
   * For more information, see [Billing methods](https://help.aliyun.com/document_detail/427234.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The subscription duration of the instance. This parameter takes effect only if you set PaymentType to Subscription.
   * 
   * Valid values:
   * 
   * *   Monthly subscription: 1, 2, 3, 4, 5, and 6
   * *   Yearly subscription: 1, 2, and 3
   * 
   * @example
   * 3
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The information about the instance specifications.
   */
  productInfo?: CreateInstanceRequestProductInfo;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzy6pist7uuna
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The primary edition of the instance. For information about the differences between primary edition instances, see [Instance selection](https://help.aliyun.com/document_detail/444722.html).
   * 
   * Valid values:
   * 
   * *   standard: Standard Edition
   * *   ultimate: Enterprise Platinum Edition
   * *   professional: Professional Edition
   * 
   * >  After an instance is created, you can only upgrade the primary edition of the instance. The following editions are sorted in ascending order: Standard Edition, Professional Edition, Enterprise Platinum Edition. For example, you can upgrade an instance of Standard Edition to Professional Edition, but cannot downgrade an instance of Professional Edition to Standard Edition.
   * 
   * This parameter is required.
   * 
   * @example
   * standard
   */
  seriesCode?: string;
  /**
   * @remarks
   * The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq.
   * 
   * This parameter is required.
   * 
   * @example
   * rmq
   */
  serviceCode?: string;
  /**
   * @remarks
   * The sub-category edition of the instance. For information about the differences between sub-category edition instances, see [Instance selection](https://help.aliyun.com/document_detail/444722.html).
   * 
   * Valid values:
   * 
   * *   cluster_ha: High-availability Cluster Edition
   * *   single_node: Standalone Edition
   * *   serverless: Serverless Edition
   * 
   * If you set seriesCode to ultimate, you can set this parameter to only cluster_ha.
   * 
   * >  After an instance is created, you cannot change the sub-category edition of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster_ha
   */
  subSeriesCode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value of this parameter, but you must ensure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * c2c5d1274a8d4317a13bc5b0d4******
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'autoRenew',
      autoRenewPeriod: 'autoRenewPeriod',
      commodityCode: 'commodityCode',
      instanceName: 'instanceName',
      networkInfo: 'networkInfo',
      paymentType: 'paymentType',
      period: 'period',
      periodUnit: 'periodUnit',
      productInfo: 'productInfo',
      remark: 'remark',
      resourceGroupId: 'resourceGroupId',
      seriesCode: 'seriesCode',
      serviceCode: 'serviceCode',
      subSeriesCode: 'subSeriesCode',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      commodityCode: 'string',
      instanceName: 'string',
      networkInfo: CreateInstanceRequestNetworkInfo,
      paymentType: 'string',
      period: 'number',
      periodUnit: 'string',
      productInfo: CreateInstanceRequestProductInfo,
      remark: 'string',
      resourceGroupId: 'string',
      seriesCode: 'string',
      serviceCode: 'string',
      subSeriesCode: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ID of the created instance.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  data?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
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
      data: 'string',
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

export class CreateInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceResponseBody;
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
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTopicRequest extends $tea.Model {
  /**
   * @remarks
   * The type of messages in the topic that you want to create.
   * 
   * Valid values:
   * 
   * *   TRANSACTION: transactional messages
   * *   FIFO: ordered messages
   * *   DELAY: scheduled messages or delayed Message
   * *   NORMAL: normal messages
   * 
   * > The type of messages in the topic must be the same as the type of messages that you want to send. For example, if you create a topic whose message type is ordered messages, the topic can be used to send and receive only ordered messages.
   * 
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @remarks
   * The description of the topic that you want to create.
   * 
   * @example
   * This is the remark for test.
   */
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
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * Topic.Existed
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * TopicName
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * topicName
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The topic already exists.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
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

export class DeleteConsumerGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidConsumerGroupId
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ConsumerGroupId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * consumerGroupId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter consumerGroupId is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * C7F94090-3358-506A-97DC-34BC803C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConsumerGroupResponseBody;
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
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 048242AA-BADA-5F29-B2CD-ED9FA344467F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceResponseBody;
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
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * TopicName
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * topicName
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The topic cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
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

export class GetConsumerGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidConsumerGroupId
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   */
  data?: GetConsumerGroupResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ConsumerGroupId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * consumerGroupId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter consumerGroupId is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * C7F94090-3358-506A-97DC-34BC803C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConsumerGroupResponseBody;
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
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetInstanceResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 05AB7FBD-F1D3-5D87-BF78-BD782249****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceResponseBody;
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
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   */
  data?: GetTopicResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * TopicName
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * topicName
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The topic cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTopicResponseBody;
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

export class ListAvailableZonesResponseBody extends $tea.Model {
  /**
   * @example
   * Topic.NotFound
   */
  code?: string;
  data?: ListAvailableZonesResponseBodyData[];
  /**
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @example
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: { 'type': 'array', 'itemType': ListAvailableZonesResponseBodyData },
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

export class ListAvailableZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAvailableZonesResponseBody;
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
      body: ListAvailableZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerConnectionsResponseBody extends $tea.Model {
  /**
   * @example
   * MissingPageNumber
   */
  code?: string;
  data?: ListConsumerConnectionsResponseBodyData;
  /**
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @example
   * A3620115-6F1F-5CFB-AA3F-BBD4853B2EC4
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: ListConsumerConnectionsResponseBodyData,
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

export class ListConsumerConnectionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConsumerConnectionsResponseBody;
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
      body: ListConsumerConnectionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupSubscriptionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned error code.
   * 
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListConsumerGroupSubscriptionsResponseBodyData[];
  /**
   * @remarks
   * The returned dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The returned dynamic error message.
   * 
   * @example
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5F4D9D5F-625B-59FF-BD4F-DA8284575DB4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
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
      data: { 'type': 'array', 'itemType': ListConsumerGroupSubscriptionsResponseBodyData },
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

export class ListConsumerGroupSubscriptionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConsumerGroupSubscriptionsResponseBody;
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
      body: ListConsumerGroupSubscriptionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * The condition that you want to use to filter consumer groups in the instance. If you leave this parameter empty, all consumer groups in the instance are queried.
   * 
   * @example
   * CID-TEST
   */
  filter?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   */
  data?: ListConsumerGroupsResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter InstanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * 5503A460-98ED-5543-92CF-4853DE28****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConsumerGroupsResponseBody;
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
  /**
   * @remarks
   * The filter condition that is used to query instances. If you do not configure this parameter, all instances are queried.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  filter?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Valid values: 1 to 100000000.
   * 
   * If the value that you specify for this parameter is less than 1, the system uses 1 as the value. If the value that you specify for this parameter is greater than 100000000, the system uses 100000000 as the value.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * Valid values: 10 to 200.
   * 
   * If the value that you specify for this parameter is less than 10, the system uses 10 as the value. If the value that you specify for this parameter is greater than 200, the system uses 200 as the value.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmx7caj******
   */
  resourceGroupId?: string;
  seriesCodes?: string[];
  /**
   * @remarks
   * The tags that are used to filter instances.
   * 
   * @example
   * [{"key": "rmq-test", "value": "test"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      seriesCodes: 'seriesCodes',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      seriesCodes: { 'type': 'array', 'itemType': 'string' },
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The filter condition that is used to query instances. If you do not configure this parameter, all instances are queried.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  filter?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Valid values: 1 to 100000000.
   * 
   * If the value that you specify for this parameter is less than 1, the system uses 1 as the value. If the value that you specify for this parameter is greater than 100000000, the system uses 100000000 as the value.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * Valid values: 10 to 200.
   * 
   * If the value that you specify for this parameter is less than 10, the system uses 10 as the value. If the value that you specify for this parameter is greater than 200, the system uses 200 as the value.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmx7caj******
   */
  resourceGroupId?: string;
  seriesCodesShrink?: string;
  /**
   * @remarks
   * The tags that are used to filter instances.
   * 
   * @example
   * [{"key": "rmq-test", "value": "test"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      seriesCodesShrink: 'seriesCodes',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      seriesCodesShrink: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * MissingPageNumber
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListInstancesResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * PageNumber
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * pageNumber
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter pageNumber is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. Each request has a unique ID. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 84445A20-2B50-5306-A3C0-AF99FC1833C6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
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

export class ListRegionsResponseBody extends $tea.Model {
  /**
   * @example
   * MissingPageNumber
   */
  code?: string;
  data?: ListRegionsResponseBodyData[];
  /**
   * @example
   * ConsumerGroupId
   */
  dynamicCode?: string;
  /**
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @example
   * 0B962390-D84B-5D44-8C11-79DF40299D41
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: { 'type': 'array', 'itemType': ListRegionsResponseBodyData },
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

export class ListRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegionsResponseBody;
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
      body: ListRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicSubscriptionsResponseBody extends $tea.Model {
  /**
   * @example
   * MissingInstanceId
   */
  code?: string;
  data?: ListTopicSubscriptionsResponseBodyData[];
  /**
   * @example
   * Topic
   */
  dynamicCode?: string;
  /**
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @example
   * 92A9BE4E-B794-50C8-979C-0456E4D32943
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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
      data: { 'type': 'array', 'itemType': ListTopicSubscriptionsResponseBodyData },
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

export class ListTopicSubscriptionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTopicSubscriptionsResponseBody;
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
      body: ListTopicSubscriptionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsRequest extends $tea.Model {
  /**
   * @remarks
   * The condition that you want to use to filter topics in the instance. If you leave this parameter empty, all topics in the instance are queried.
   * 
   * @example
   * topic_test
   */
  filter?: string;
  /**
   * @remarks
   * The message types of the topics.
   */
  messageTypes?: string[];
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      messageTypes: 'messageTypes',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      messageTypes: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The condition that you want to use to filter topics in the instance. If you leave this parameter empty, all topics in the instance are queried.
   * 
   * @example
   * topic_test
   */
  filter?: string;
  /**
   * @remarks
   * The message types of the topics.
   */
  messageTypesShrink?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      messageTypesShrink: 'messageTypes',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      messageTypesShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   */
  data?: ListTopicsResponseBodyData;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * TopicName
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * topicName
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The topic cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTopicsResponseBody;
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

export class ResetConsumeOffsetRequest extends $tea.Model {
  /**
   * @remarks
   * The time when the consumer offset is reset.
   * 
   * @example
   * 2023-03-22 12:17:08
   */
  resetTime?: string;
  /**
   * @remarks
   * The method that is used to reset the consumer offset. Valid values: LATEST_OFFSET and SPECIFIED_TIME.
   * 
   * @example
   * LATEST_OFFSET
   */
  resetType?: string;
  static names(): { [key: string]: string } {
    return {
      resetTime: 'resetTime',
      resetType: 'resetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resetTime: 'string',
      resetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetConsumeOffsetResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned error code.
   * 
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @remarks
   * The returned dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The returned dynamic error message.
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F9A95891-EAD4-5A2B-8A30-676CD18921AF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
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

export class ResetConsumeOffsetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetConsumeOffsetResponseBody;
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
      body: ResetConsumeOffsetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConsumerGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The new consumption retry policy that you want to configure for the consumer group. For more information, see [Consumption retry](https://help.aliyun.com/document_detail/440356.html).
   * 
   * This parameter is required.
   */
  consumeRetryPolicy?: UpdateConsumerGroupRequestConsumeRetryPolicy;
  /**
   * @remarks
   * The new message delivery order of the consumer group.
   * 
   * Valid values:
   * 
   * *   Concurrently: concurrent delivery
   * *   Orderly: ordered delivery
   * 
   * This parameter is required.
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * The new remarks on the consumer group.
   * 
   * @example
   * This is the remark for test.
   */
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
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidDeliveryOrderType
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * DeliveryOrderType
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * deliveryOrderType
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter deliveryOrderType is invalid.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * C7F94090-3358-506A-97DC-34BC803C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateConsumerGroupResponseBody;
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
  /**
   * @remarks
   * The access control list for the instance.
   */
  aclInfo?: UpdateInstanceRequestAclInfo;
  /**
   * @remarks
   * The updated name of the instance.
   * 
   * @example
   * test_instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The updated network information about the instance.
   */
  networkInfo?: UpdateInstanceRequestNetworkInfo;
  /**
   * @remarks
   * Additional configurations of the instance.
   */
  productInfo?: UpdateInstanceRequestProductInfo;
  /**
   * @remarks
   * The updated description of the instance.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      aclInfo: 'aclInfo',
      instanceName: 'instanceName',
      networkInfo: 'networkInfo',
      productInfo: 'productInfo',
      remark: 'remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclInfo: UpdateInstanceRequestAclInfo,
      instanceName: 'string',
      networkInfo: UpdateInstanceRequestNetworkInfo,
      productInfo: UpdateInstanceRequestProductInfo,
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * InstanceId
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * AA87DE09-DA44-52F4-9515-78B1B607****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceResponseBody;
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
  /**
   * @remarks
   * The new remarks on the topic.
   * 
   * @example
   * This is the remark for test.
   */
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
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * TopicName
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message.
   * 
   * @example
   * topicName
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The topic cannot be found.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The system generates a unique ID for each request. You can troubleshoot issues based on the request ID.
   * 
   * @example
   * AF9A8B10-C426-530F-A0DD-96320B39****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
   * 
   * @example
   * true
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTopicResponseBody;
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
  /**
   * @remarks
   * The dead-letter topic.
   * 
   * If a consumer still fails to consume a message after the message is retried for a specified number of times, the message is delivered to a dead-letter topic for subsequent business recovery or troubleshooting. For more information, see [Consumption retry and dead-letter messages](https://help.aliyun.com/document_detail/440356.html).
   * 
   * @example
   * DLQ_mqtest
   */
  deadLetterTargetTopic?: string;
  /**
   * @remarks
   * The maximum number of retries.
   * 
   * @example
   * 16
   */
  maxRetryTimes?: number;
  /**
   * @remarks
   * The retry policy. For more information, see [Message retry](https://help.aliyun.com/document_detail/440356.html).
   * 
   * Valid values:
   * 
   * *   FixedRetryPolicy: Failed messages are retried at a fixed interval.
   * *   DefaultRetryPolicy: Failed messages are retried at incremental intervals as the number of retries increases.
   * 
   * This parameter is required.
   * 
   * @example
   * DefaultRetryPolicy
   */
  retryPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      deadLetterTargetTopic: 'deadLetterTargetTopic',
      maxRetryTimes: 'maxRetryTimes',
      retryPolicy: 'retryPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadLetterTargetTopic: 'string',
      maxRetryTimes: 'number',
      retryPolicy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestNetworkInfoInternetInfo extends $tea.Model {
  /**
   * @remarks
   * The Internet bandwidth. Unit: MB/s.
   * 
   * This parameter is required only if you set flowOutType to payByBandwidth.
   * 
   * Valid values: 1 to 1000.
   * 
   * @example
   * 100
   */
  flowOutBandwidth?: number;
  /**
   * @remarks
   * The billing method of Internet usage.
   * 
   * Valid values:
   * 
   * *   payByBandwidth: pay-by-bandwidth. If Internet access is enabled for an instance, specify this value for the parameter.
   * *   payByTraffic: pay-by-traffic. If Internet access is enabled for an instance, specify this value for the parameter.
   * *   uninvolved: No billing method is involved. If Internet access is disabled for an instance, specify this value for the parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * uninvolved
   */
  flowOutType?: string;
  /**
   * @remarks
   * Specifies whether to enable the Internet access feature.
   * 
   * Valid values:
   * 
   * *   enable
   * *   disable
   * 
   * By default, ApsaraMQ for RocketMQ allows you to access instances in VPCs. If you enable Internet access for an instance, you can access the instance over the Internet. After you enable this feature, you are charged for outbound Internet traffic. For more information, see [Internet access fee](https://help.aliyun.com/document_detail/427240.html).
   * 
   * This parameter is required.
   * 
   * @example
   * disable
   */
  internetSpec?: string;
  /**
   * @remarks
   * The whitelist that includes the IP addresses that are allowed to access the ApsaraMQ for RocketMQ broker over the Internet. This parameter can be configured only if you use a public endpoint to access the instance.
   * 
   * *   If you do not configure an IP address whitelist, all CIDR blocks are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
   * *   If configure an IP address whitlist, only the IP addresses in the whitelist are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
   */
  ipWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      flowOutBandwidth: 'flowOutBandwidth',
      flowOutType: 'flowOutType',
      internetSpec: 'internetSpec',
      ipWhitelist: 'ipWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowOutBandwidth: 'number',
      flowOutType: 'string',
      internetSpec: 'string',
      ipWhitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestNetworkInfoVpcInfoVSwitches extends $tea.Model {
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestNetworkInfoVpcInfo extends $tea.Model {
  /**
   * @remarks
   * The ID of the security group to which the instance belongs.
   * 
   * @example
   * sg-bp17hpmgz96tvnsdy6so
   */
  securityGroupIds?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which you want to associate the instance, If there are multiple vSwitchs, please concatenate them using the "|" character.
   * 
   * >  After an ApsaraMQ for RocketMQ instance is created, you cannot change the vSwitch with which the instance is associated. If you want to change the vSwitch with which the instance is associated, you must release the instance and purchase a new instance.
   * 
   * @example
   * vsw-uf6gwtbn6etadpv*******
   * 
   * @deprecated
   */
  vSwitchId?: string;
  vSwitches?: CreateInstanceRequestNetworkInfoVpcInfoVSwitches[];
  /**
   * @remarks
   * The ID of the VPC in which you want to deploy the instance.
   * 
   * >  After an ApsaraMQ for RocketMQ instance is created, you cannot change the VPC in which the instance is deployed. If you want to change the VPC in which the instance is deployed, you must release the instance and create a new instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-wz9qt50xhtj9krb******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupIds: 'securityGroupIds',
      vSwitchId: 'vSwitchId',
      vSwitches: 'vSwitches',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupIds: 'string',
      vSwitchId: 'string',
      vSwitches: { 'type': 'array', 'itemType': CreateInstanceRequestNetworkInfoVpcInfoVSwitches },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestNetworkInfo extends $tea.Model {
  /**
   * @remarks
   * The Internet-related configurations.
   * 
   * This parameter is required.
   */
  internetInfo?: CreateInstanceRequestNetworkInfoInternetInfo;
  /**
   * @remarks
   * The virtual private cloud (VPC)-related configurations.
   * 
   * This parameter is required.
   */
  vpcInfo?: CreateInstanceRequestNetworkInfoVpcInfo;
  static names(): { [key: string]: string } {
    return {
      internetInfo: 'internetInfo',
      vpcInfo: 'vpcInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetInfo: CreateInstanceRequestNetworkInfoInternetInfo,
      vpcInfo: CreateInstanceRequestNetworkInfoVpcInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequestProductInfo extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable the elastic TPS feature for the instance.
   * 
   * Valid values:
   * 
   * *   true: enable
   * *   false: disable
   * 
   * After you enable the elastic TPS feature for an ApsaraMQ for RocketMQ instance, you can use a specific number of TPS that exceeds the specification limit. You are charged for using the elastic TPS feature. For more information, see [Computing fees](https://help.aliyun.com/document_detail/427237.html).
   * 
   * >  The elastic TPS feature is supported only by instances of specific editions. For more information, see [Instance editions](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * true
   */
  autoScaling?: boolean;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   provisioned
   * *   ondemand
   * 
   * @example
   * provisioned
   */
  chargeType?: string;
  /**
   * @remarks
   * This parameter is no longer used. You do not need to configure this parameter.
   * 
   * @example
   * xxxx
   */
  intranetSpec?: string;
  /**
   * @remarks
   * The retention period of messages. Unit: hours.
   * 
   * For information about the valid values of this parameter, see the "Limits on resource quotas" section of the [Limits](https://help.aliyun.com/document_detail/440347.html) topic.
   * 
   * ApsaraMQ for RocketMQ supports serverless scaling of message storage. You are charged storage fees based on your actual storage usage. You can change the retention period of messages to manage storage capacity. For more information, see [Storage fees](https://help.aliyun.com/document_detail/427238.html).
   * 
   * @example
   * 72
   */
  messageRetentionTime?: number;
  /**
   * @remarks
   * The computing specification that specifies the messaging transactions per second (TPS) of the instance. For information about computing specification limits, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rmq.s2.2xlarge
   */
  msgProcessSpec?: string;
  /**
   * @remarks
   * The proportion of message sending TPS to the messaging TPS on the instance.
   * 
   * For example, you create an instance whose peak messaging TPS is specified as 1,000 and the proportion of message sending TPS is specified as 0.8. In this case, the peak message sending TPS is 800 and the peak message receiving TPS is 200 on the instance.
   * 
   * Valid values: 0 to 1. Default value: 0.5.
   * 
   * @example
   * 0.5
   */
  sendReceiveRatio?: number;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'autoScaling',
      chargeType: 'chargeType',
      intranetSpec: 'intranetSpec',
      messageRetentionTime: 'messageRetentionTime',
      msgProcessSpec: 'msgProcessSpec',
      sendReceiveRatio: 'sendReceiveRatio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: 'boolean',
      chargeType: 'string',
      intranetSpec: 'string',
      messageRetentionTime: 'number',
      msgProcessSpec: 'string',
      sendReceiveRatio: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupResponseBodyDataConsumeRetryPolicy extends $tea.Model {
  /**
   * @remarks
   * The dead-letter topic.
   * 
   * If a consumer still fails to consume a message after the message is retried for a specified number of times, the message is delivered to a dead-letter topic for subsequent business recovery or troubleshooting. For more information, see [Consumption retry and dead-letter messages](https://help.aliyun.com/document_detail/440356.html).
   * 
   * @example
   * DLQ_mqtest
   */
  deadLetterTargetTopic?: string;
  /**
   * @remarks
   * The maximum number of retries.
   * 
   * @example
   * 16
   */
  maxRetryTimes?: number;
  /**
   * @remarks
   * The retry policy.
   * 
   * Valid values:
   * 
   * *   FixedRetryPolicy
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Failed messages are retried at a fixed interval
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   DefaultRetryPolicy
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Failed messages are retried at incremental intervals as the number of retries increases
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * DefaultRetryPolicy
   */
  retryPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      deadLetterTargetTopic: 'deadLetterTargetTopic',
      maxRetryTimes: 'maxRetryTimes',
      retryPolicy: 'retryPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadLetterTargetTopic: 'string',
      maxRetryTimes: 'number',
      retryPolicy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The consumption retry policy that you want to configure for the consumer group. For more information, see [Consumption retry](https://help.aliyun.com/document_detail/440356.html).
   */
  consumeRetryPolicy?: GetConsumerGroupResponseBodyDataConsumeRetryPolicy;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The time when the consumer group was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The message delivery order of the consumer group.
   * 
   * Valid values:
   * 
   * *   Concurrently
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     concurrent delivery
   * 
   *     <!-- -->
   * 
   * *   Orderly
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     ordered delivery
   * 
   *     <!-- -->
   * 
   * @example
   * Concurrently
   */
  deliveryOrderType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks on the consumer group.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The state of the consumer group.
   * 
   * Valid values:
   * 
   * *   RUNNING
   * 
   *     <!-- -->
   * 
   *     : The consumer group is
   * 
   *     <!-- -->
   * 
   *     running
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   CREATING
   * 
   *     <!-- -->
   * 
   *     : The consumer group is
   * 
   *     <!-- -->
   * 
   *     being created
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The time when the consumer group was last updated.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
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
  /**
   * @remarks
   * The username of the instance. If you access a ApsaraMQ for RocketMQ instance over the Internet, you must configure the username and password of the instance in the SDK code for authentication.
   * 
   * @example
   * 6W0xz2uPfiwp****
   */
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

export class GetInstanceResponseBodyDataAclInfo extends $tea.Model {
  /**
   * @remarks
   * The authentication type of the instance. This parameter is no longer in use. We recommend that you configure aclTypes.
   * 
   * Valid values:
   * 
   * - default: intelligent identity authentication
   * 
   * - apache_acl:access control list (ACL) identity authentication**
   * 
   * @example
   * default
   * 
   * @deprecated
   */
  aclType?: string;
  /**
   * @remarks
   * The authentication types of the instance.
   */
  aclTypes?: string[];
  /**
   * @remarks
   * Indicates whether the authentication-free in VPCs feature is enabled.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  defaultVpcAuthFree?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclType: 'aclType',
      aclTypes: 'aclTypes',
      defaultVpcAuthFree: 'defaultVpcAuthFree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      aclTypes: { 'type': 'array', 'itemType': 'string' },
      defaultVpcAuthFree: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataExtConfig extends $tea.Model {
  /**
   * @remarks
   * The authentication type of the instance.
   * 
   * Valid values:
   * 
   * *   default: intelligent authentication
   * 
   * @example
   * default
   */
  aclType?: string;
  /**
   * @remarks
   * Specifies whether to enable the elastic TPS feature for the instance.
   * 
   * Valid values:
   * 
   * *   true: enable
   * *   false: disable
   * 
   * This parameter is valid only when the supportAutoScaling parameter is set to enable.
   * 
   * @example
   * true
   */
  autoScaling?: boolean;
  /**
   * @remarks
   * The Internet bandwidth. Unit: MB/s.
   * 
   * @example
   * 10
   */
  flowOutBandwidth?: number;
  /**
   * @remarks
   * The metering method for Internet usage.
   * 
   * Valid values:
   * 
   * *   PayByTraffic: pay-by-traffic
   * *   paybybandwidth: pay-by-bandwidth
   * *   uninvolved: N/A
   * 
   * @example
   * payByBandwidth
   */
  flowOutType?: string;
  /**
   * @remarks
   * Specifies whether to enable the Internet access feature.
   * 
   * Valid values:
   * 
   * *   enable
   * *   disable
   * 
   * By default, ApsaraMQ for RocketMQ instances are accessed in virtual private clouds (VPCs). If you enable the Internet access feature, you are charged for Internet outbound bandwidth. For more information, see [Internet access fee](https://help.aliyun.com/document_detail/427240.html).
   * 
   * @example
   * enable
   */
  internetSpec?: string;
  /**
   * @remarks
   * The retention period of messages. Unit: hours.
   * 
   * For information about the valid values of this parameter, see the "Limits on resource quotas" section in [Usage limits](https://help.aliyun.com/document_detail/440347.html).
   * 
   * The storage of messages in ApsaraMQ for RocketMQ is serverless and scalable. You are charged for message storage based on your actual usage. You can change the retention period of messages to adjust storage capacity. For more information, see [Storage fee](https://help.aliyun.com/document_detail/427238.html).
   * 
   * @example
   * 72
   */
  messageRetentionTime?: number;
  /**
   * @remarks
   * The computing specification that is used to send and receive messages. For information about the upper limit of TPS, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * rmq.s2.2xlarge
   */
  msgProcessSpec?: string;
  /**
   * @remarks
   * The ratio between sent messages and received messages in the instance.
   * 
   * @example
   * 0.5
   */
  sendReceiveRatio?: number;
  /**
   * @remarks
   * Specifies whether the elastic TPS feature is supported by the instance.
   * 
   * Valid values:
   * 
   * *   true: enable
   * *   false: disable
   * 
   * After you enable the elastic TPS feature for a ApsaraMQ for RocketMQ instance, you can use a specific amount of TPS that exceeds the specification limit. You are charged for the elastic TPS feature. For more information, see [Computing fee](https://help.aliyun.com/document_detail/427237.html).
   * 
   * > The elastic TPS feature is supported only by specific instance editions. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The number of topics that are free of charge on the instance.
   * 
   * @example
   * 20
   */
  freeCount?: number;
  /**
   * @remarks
   * The quota name.
   * 
   * Valid value:
   * 
   * *   TOPIC_COUNT: the number of topics that can be created on the instance
   * 
   * @example
   * TOPIC_COUNT
   */
  quotaName?: string;
  /**
   * @remarks
   * The total number of topics on the instance.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of used topics on the instance.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The type of the endpoint that is used to access the instance.
   * 
   * Valid values:
   * 
   * - TCP_VPC: VPC endpoint
   * - TCP_INTERNET:public endpoint
   * 
   * @example
   * TCP_INTERNET
   */
  endpointType?: string;
  /**
   * @remarks
   * The endpoint that is used to access the instance.
   * 
   * @example
   * rmq-cn-c4d2tbk****-vpc.cn-hangzhou.rmq.aliyuncs.com:8080
   */
  endpointUrl?: string;
  /**
   * @remarks
   * The whitelist that includes the IP addresses that are allowed to access the ApsaraMQ for RocketMQ broker over the Internet. This parameter can be configured only if you use the public endpoint to access the instance.
   * 
   * *   If you do not configure an IP address whitelist, all CIDR blocks are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
   * *   If you configure an IP address whitelist, only the IP addresses in the whitelist are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
   * 
   * We recommend that you configure internetInfo.ipWhitelist instead of this parameter.
   * 
   * @example
   * 192.168.x.x/24
   */
  ipWhitelist?: string[];
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
      ipWhitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataNetworkInfoInternetInfo extends $tea.Model {
  /**
   * @remarks
   * The Internet bandwidth. Unit: MB/s.
   * 
   * @example
   * 1
   */
  flowOutBandwidth?: number;
  /**
   * @remarks
   * The metering method for Internet usage.
   * 
   * Valid values:
   * 
   * *   PayByBandwidth: pay-by-bandwidth. If the Internet access feature is enabled, specify this value for the parameter.
   * *   uninvolved: N/A. If the Internet access feature is not enabled, specify this value for the parameter.
   * 
   * @example
   * payByBandwidth
   */
  flowOutType?: string;
  /**
   * @remarks
   * Specifies whether to enable the Internet access feature.
   * 
   * Valid values:
   * 
   * *   enable
   * *   disable
   * 
   * By default, ApsaraMQ for RocketMQ instances are accessed in virtual private clouds (VPCs). If you enable the Internet access feature, you are charged for Internet outbound bandwidth. For more information, see [Internet access fee](https://help.aliyun.com/document_detail/427240.html).
   * 
   * @example
   * enable
   */
  internetSpec?: string;
  /**
   * @remarks
   * The whitelist that includes the IP addresses that are allowed to access the ApsaraMQ for RocketMQ broker.
   * 
   * *   If this parameter is not configured, all IP addresses are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
   * *   If this parameter is configured, only the IP addresses that are included in the whitelist can access the ApsaraMQ for RocketMQ broker over the Internet.
   */
  ipWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      flowOutBandwidth: 'flowOutBandwidth',
      flowOutType: 'flowOutType',
      internetSpec: 'internetSpec',
      ipWhitelist: 'ipWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowOutBandwidth: 'number',
      flowOutType: 'string',
      internetSpec: 'string',
      ipWhitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataNetworkInfoVpcInfoVSwitches extends $tea.Model {
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'vSwitchId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataNetworkInfoVpcInfo extends $tea.Model {
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-hp35r2hc3a3sv8q2sb16
   */
  securityGroupIds?: string;
  /**
   * @remarks
   * The ID of the vSwitch with which the instance is associated.
   * 
   * @example
   * vsw-uf6gwtbn6etadpvz7****
   * 
   * @deprecated
   */
  vSwitchId?: string;
  vSwitches?: GetInstanceResponseBodyDataNetworkInfoVpcInfoVSwitches[];
  /**
   * @remarks
   * The ID of the VPC with which the instance is associated.
   * 
   * @example
   * vpc-uf6of9452b2pba82c****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupIds: 'securityGroupIds',
      vSwitchId: 'vSwitchId',
      vSwitches: 'vSwitches',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupIds: 'string',
      vSwitchId: 'string',
      vSwitches: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataNetworkInfoVpcInfoVSwitches },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataNetworkInfo extends $tea.Model {
  /**
   * @remarks
   * The information about endpoints.
   */
  endpoints?: GetInstanceResponseBodyDataNetworkInfoEndpoints[];
  /**
   * @remarks
   * The information about the Internet.
   */
  internetInfo?: GetInstanceResponseBodyDataNetworkInfoInternetInfo;
  /**
   * @remarks
   * The virtual private cloud (VPC) information.
   */
  vpcInfo?: GetInstanceResponseBodyDataNetworkInfoVpcInfo;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'endpoints',
      internetInfo: 'internetInfo',
      vpcInfo: 'vpcInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataNetworkInfoEndpoints },
      internetInfo: GetInstanceResponseBodyDataNetworkInfoInternetInfo,
      vpcInfo: GetInstanceResponseBodyDataNetworkInfoVpcInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataProductInfo extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable the elastic TPS feature for the instance.
   * 
   * Valid values:
   * 
   * *   true: enable
   * *   false: disable
   * 
   * This parameter is valid only when the supportAutoScaling parameter is set to enable.
   * 
   * @example
   * true
   */
  autoScaling?: boolean;
  /**
   * @remarks
   * The retention period of messages. Unit: hours.
   * 
   * For information about the valid values of this parameter, see the "Limits on resource quotas" section in [Usage limits](https://help.aliyun.com/document_detail/440347.html).
   * 
   * The storage of messages in ApsaraMQ for RocketMQ is serverless and scalable. You are charged for message storage based on your actual usage. You can change the retention period of messages to adjust storage capacity. For more information, see [Storage fee](https://help.aliyun.com/document_detail/427238.html).
   * 
   * @example
   * 72
   */
  messageRetentionTime?: number;
  /**
   * @remarks
   * The computing specification that is used to send and receive messages. For information about the upper limit of TPS, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * rmq.s2.2xlarge
   */
  msgProcessSpec?: string;
  /**
   * @remarks
   * The ratio between sent messages and received messages in the instance.
   * 
   * @example
   * 0.5
   */
  sendReceiveRatio?: number;
  /**
   * @remarks
   * Specifies whether to enable the elastic TPS feature for the instance.
   * 
   * Valid values:
   * 
   * *   true: enable
   * *   false: disable
   * 
   * After you enable the elastic TPS feature for a ApsaraMQ for RocketMQ instance, you can use a specific amount of TPS that exceeds the specification limit. You are charged for the elastic TPS feature. For more information, see [Computing fee](https://help.aliyun.com/document_detail/427237.html).
   * 
   * > The elastic TPS feature is supported by only specific instance editions. For more information, see [Instance specifications](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * true
   */
  supportAutoScaling?: boolean;
  /**
   * @remarks
   * Indicates whether the message trace feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is not in use. By default, the message trace feature is enabled for ApsaraMQ for RocketMQ instances, regardless of whether this parameter is configured.
   * 
   * @example
   * true
   */
  traceOn?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'autoScaling',
      messageRetentionTime: 'messageRetentionTime',
      msgProcessSpec: 'msgProcessSpec',
      sendReceiveRatio: 'sendReceiveRatio',
      supportAutoScaling: 'supportAutoScaling',
      traceOn: 'traceOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: 'boolean',
      messageRetentionTime: 'number',
      msgProcessSpec: 'string',
      sendReceiveRatio: 'number',
      supportAutoScaling: 'boolean',
      traceOn: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataSoftware extends $tea.Model {
  /**
   * @remarks
   * The period of upgrade time.
   * 
   * @example
   * 02:00-06:00
   */
  maintainTime?: string;
  /**
   * @remarks
   * The version of software.
   * 
   * @example
   * 5.0-rmq-20230619-1
   */
  softwareVersion?: string;
  /**
   * @remarks
   * The upgrade method.
   * 
   * Valid values:
   * 
   * - Auto: automatic upgrade
   * 
   * - Manual: manual upgrade
   * 
   * @example
   * auto
   */
  upgradeMethod?: string;
  static names(): { [key: string]: string } {
    return {
      maintainTime: 'maintainTime',
      softwareVersion: 'softwareVersion',
      upgradeMethod: 'upgradeMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maintainTime: 'string',
      softwareVersion: 'string',
      upgradeMethod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyDataTags extends $tea.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class GetInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The account information.
   */
  accountInfo?: GetInstanceResponseBodyDataAccountInfo;
  /**
   * @remarks
   * The information about access control.
   */
  aclInfo?: GetInstanceResponseBodyDataAclInfo;
  /**
   * @remarks
   * The business ID (BID) of the commodity.
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * The commodity code of the instance. The commodity code of a ApsaraMQ for RocketMQ 5.0 instance has a similar format as ons_rmqsub_public_cn.
   * 
   * @example
   * ons_rmqsub_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2022-08-01 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2022-09-01 00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The extended configurations. We recommend you configure productInfo, internetInfo, or aclInfo instead of this parameter.
   * 
   * @deprecated
   */
  extConfig?: GetInstanceResponseBodyDataExtConfig;
  /**
   * @remarks
   * The number of groups.
   * 
   * @example
   * 10
   */
  groupCount?: number;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance quotas.
   */
  instanceQuotas?: GetInstanceResponseBodyDataInstanceQuotas[];
  /**
   * @remarks
   * The network information.
   */
  networkInfo?: GetInstanceResponseBodyDataNetworkInfo;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * Valid values:
   * 
   * *   PayAsYouGo: pay-as-you-go
   * *   Subscription
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The extended configurations of the instance.
   */
  productInfo?: GetInstanceResponseBodyDataProductInfo;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the instance was released.
   * 
   * @example
   * 2022-09-07 00:00:00
   */
  releaseTime?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * This is remark for instance.
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm3tmjruyribi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The primary edition of the instance. For information about the differences between primary edition instances, see [Instance selection](https://help.aliyun.com/document_detail/444722.html).
   * 
   * Valid values:
   * 
   * *   standard: Standard Edition
   * *   ultimate: Enterprise Platinum Edition
   * *   professional: Professional Edition
   * 
   * @example
   * standard
   */
  seriesCode?: string;
  /**
   * @remarks
   * The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq.
   * 
   * @example
   * rmq
   */
  serviceCode?: string;
  /**
   * @remarks
   * The instance software information.
   */
  software?: GetInstanceResponseBodyDataSoftware;
  /**
   * @remarks
   * The time when the instance was started.
   * 
   * @example
   * 2022-08-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * Valid values:
   * 
   * *   RELEASED
   * *   RUNNING
   * *   STOPPED
   * *   CHANGING
   * *   CREATING
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The sub-category edition of the instance. For information about the differences between sub-category edition instances, see [Instance selection](https://help.aliyun.com/document_detail/444722.html).
   * 
   * Valid values:
   * 
   * *   cluster_ha: Cluster High-availability Edition
   * *   single_node: Standalone Edition
   * 
   * @example
   * cluster_ha
   */
  subSeriesCode?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tags?: GetInstanceResponseBodyDataTags[];
  /**
   * @remarks
   * The number of topics.
   * 
   * @example
   * 10
   */
  topicCount?: number;
  /**
   * @remarks
   * The time when the instance was last modified.
   * 
   * @example
   * 2022-08-02 00:00:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user who owns the instance.
   * 
   * @example
   * 111111111111111
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountInfo: 'accountInfo',
      aclInfo: 'aclInfo',
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
      productInfo: 'productInfo',
      regionId: 'regionId',
      releaseTime: 'releaseTime',
      remark: 'remark',
      resourceGroupId: 'resourceGroupId',
      seriesCode: 'seriesCode',
      serviceCode: 'serviceCode',
      software: 'software',
      startTime: 'startTime',
      status: 'status',
      subSeriesCode: 'subSeriesCode',
      tags: 'tags',
      topicCount: 'topicCount',
      updateTime: 'updateTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfo: GetInstanceResponseBodyDataAccountInfo,
      aclInfo: GetInstanceResponseBodyDataAclInfo,
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
      productInfo: GetInstanceResponseBodyDataProductInfo,
      regionId: 'string',
      releaseTime: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      seriesCode: 'string',
      serviceCode: 'string',
      software: GetInstanceResponseBodyDataSoftware,
      startTime: 'string',
      status: 'string',
      subSeriesCode: 'string',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyDataTags },
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
  /**
   * @remarks
   * The time when the topic was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The message type of the topic.
   * 
   * Valid values:
   * 
   * *   TRANSACTION: transactional message
   * *   FIFO: ordered message
   * *   DELAY: scheduled or delayed message
   * *   NORMAL: normal message
   * 
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks on the topic.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The state of the topic.
   * 
   * Valid values:
   * 
   * *   RUNNING: The topic is running.
   * *   CREATING: The topic is being created.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  /**
   * @remarks
   * The time when the topic was last updated.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
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

export class ListAvailableZonesResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  /**
   * @example
   * cn-qingdao-b
   */
  zoneId?: string;
  /**
   * @example
   * ha-cn-t9b30w902vm_qrs
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      updateTime: 'updateTime',
      zoneId: 'zoneId',
      zoneName: 'zoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      updateTime: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerConnectionsResponseBodyDataConnections extends $tea.Model {
  /**
   * @example
   * 172.17.135.197@17392#1936705963#551717232#9873695589062458
   */
  clientId?: string;
  /**
   * @example
   * xx.xx.xx.xx
   */
  egressIp?: string;
  /**
   * @example
   * vos
   */
  hostname?: string;
  /**
   * @example
   * java
   */
  language?: string;
  /**
   * @example
   * BROADCASTING
   */
  messageModel?: string;
  /**
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      egressIp: 'egressIp',
      hostname: 'hostname',
      language: 'language',
      messageModel: 'messageModel',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      egressIp: 'string',
      hostname: 'string',
      language: 'string',
      messageModel: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerConnectionsResponseBodyData extends $tea.Model {
  connections?: ListConsumerConnectionsResponseBodyDataConnections[];
  /**
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'connections',
      consumerGroupId: 'consumerGroupId',
      instanceId: 'instanceId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': ListConsumerConnectionsResponseBodyDataConnections },
      consumerGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupSubscriptionsResponseBodyData extends $tea.Model {
  consistency?: boolean;
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The filter expression.
   * 
   * @example
   * *
   */
  filterExpression?: string;
  /**
   * @remarks
   * The type of the filter expression. Valid values: SQL, TAG, and UNSPECIFIED.
   * 
   * @example
   * SQL
   */
  filterExpressionType?: string;
  /**
   * @remarks
   * The consumption mode. Valid values: BROADCASTING and CLUSTERING.
   * 
   * @example
   * BROADCASTING
   */
  messageModel?: string;
  /**
   * @remarks
   * The subscription status. Valid values: ONLINE and OFFLINE.
   * 
   * @example
   * ONLINE
   */
  subscriptionStatus?: string;
  /**
   * @remarks
   * Indicates whether the topic is created.
   * 
   * @example
   * true
   */
  topicCreated?: boolean;
  /**
   * @remarks
   * The topic to which the consumer group subscribes.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consistency: 'consistency',
      consumerGroupId: 'consumerGroupId',
      filterExpression: 'filterExpression',
      filterExpressionType: 'filterExpressionType',
      messageModel: 'messageModel',
      subscriptionStatus: 'subscriptionStatus',
      topicCreated: 'topicCreated',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistency: 'boolean',
      consumerGroupId: 'string',
      filterExpression: 'string',
      filterExpressionType: 'string',
      messageModel: 'string',
      subscriptionStatus: 'string',
      topicCreated: 'boolean',
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerGroupsResponseBodyDataList extends $tea.Model {
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * GID-TEST
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The time when the consumer group was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks on the consumer group.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The state of the consumer group.
   * 
   * Valid values:
   * 
   * *   RUNNING
   * 
   *     <!-- -->
   * 
   *     : The consumer group is
   * 
   *     <!-- -->
   * 
   *     running
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   CREATING
   * 
   *     <!-- -->
   * 
   *     : The consumer group is
   * 
   *     <!-- -->
   * 
   *     being created
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The time when the consumer group was last updated.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
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
  /**
   * @remarks
   * The paginated data.
   */
  list?: ListConsumerGroupsResponseBodyDataList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
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

export class ListInstancesResponseBodyDataListProductInfo extends $tea.Model {
  /**
   * @remarks
   * Whether to enable tracking capability. Non-serverless instances are enabled by default, and serverless instances are optional for users.
   * 
   * @example
   * true
   */
  traceOn?: boolean;
  static names(): { [key: string]: string } {
    return {
      traceOn: 'traceOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceOn: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyDataListTags extends $tea.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class ListInstancesResponseBodyDataList extends $tea.Model {
  /**
   * @remarks
   * The commodity code of the instance. The commodity code of ApsaraMQ for RocketMQ 5.0 instances has a similar format to ons_rmqsub_public_cn.
   * 
   * @example
   * ons_rmqsub_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2022-08-01 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2022-09-01 00:00:00
   */
  expireTime?: string;
  /**
   * @remarks
   * The number of consumer groups that are created on the instance.
   * 
   * @example
   * 10
   */
  groupCount?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * Valid values:
   * 
   * *   PayAsYouGo
   * *   Subscription
   * 
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @remarks
   * The product information of instance.
   */
  productInfo?: ListInstancesResponseBodyDataListProductInfo;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the instance was released.
   * 
   * @example
   * 2022-09-07 00:00:00
   */
  releaseTime?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * This is remark for instance.
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmx7caj******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The primary edition of the instance.
   * 
   * Valid values:
   * 
   * *   standard: Standard Edition
   * *   ultimate: Enterprise Platinum Edition
   * *   professional: Professional Edition
   * 
   * @example
   * standard
   */
  seriesCode?: string;
  /**
   * @remarks
   * The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq.
   * 
   * @example
   * rmq
   */
  serviceCode?: string;
  /**
   * @remarks
   * The time when the instance was started.
   * 
   * @example
   * 2022-08-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * Valid values:
   * 
   * *   RELEASED
   * *   RUNNING
   * *   STOPPED
   * *   CHANGING
   * *   CREATING
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The sub-category edition of the instance.
   * 
   * Valid values:
   * 
   * *   cluster_ha: Cluster High-availability Edition
   * *   single_node: Standalone Edition
   * 
   * @example
   * cluster_ha
   */
  subSeriesCode?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tags?: ListInstancesResponseBodyDataListTags[];
  /**
   * @remarks
   * The number of topics that are created on the instance.
   * 
   * @example
   * 20
   */
  topicCount?: number;
  /**
   * @remarks
   * The time when the instance was last modified.
   * 
   * @example
   * 2022-08-02 00:00:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user who owns the instance.
   * 
   * @example
   * 6W0xz2uPfiwp****
   */
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
      productInfo: 'productInfo',
      regionId: 'regionId',
      releaseTime: 'releaseTime',
      remark: 'remark',
      resourceGroupId: 'resourceGroupId',
      seriesCode: 'seriesCode',
      serviceCode: 'serviceCode',
      startTime: 'startTime',
      status: 'status',
      subSeriesCode: 'subSeriesCode',
      tags: 'tags',
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
      productInfo: ListInstancesResponseBodyDataListProductInfo,
      regionId: 'string',
      releaseTime: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      seriesCode: 'string',
      serviceCode: 'string',
      startTime: 'string',
      status: 'string',
      subSeriesCode: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyDataListTags },
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
  /**
   * @remarks
   * The paginated data.
   */
  list?: ListInstancesResponseBodyDataList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 100
   */
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

export class ListRegionsResponseBodyDataTags extends $tea.Model {
  /**
   * @example
   * xx
   */
  tagCode?: string;
  /**
   * @example
   * xx
   */
  tagValue?: any;
  static names(): { [key: string]: string } {
    return {
      tagCode: 'tagCode',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagCode: 'string',
      tagValue: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  regionName?: string;
  /**
   * @example
   * true
   */
  supportRocketmqV4?: boolean;
  /**
   * @example
   * true
   */
  supportRocketmqV5?: boolean;
  tags?: ListRegionsResponseBodyDataTags[];
  /**
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      regionId: 'regionId',
      regionName: 'regionName',
      supportRocketmqV4: 'supportRocketmqV4',
      supportRocketmqV5: 'supportRocketmqV5',
      tags: 'tags',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      regionId: 'string',
      regionName: 'string',
      supportRocketmqV4: 'boolean',
      supportRocketmqV5: 'boolean',
      tags: { 'type': 'array', 'itemType': ListRegionsResponseBodyDataTags },
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicSubscriptionsResponseBodyData extends $tea.Model {
  consistency?: string;
  /**
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @example
   * *
   */
  filterExpression?: string;
  /**
   * @example
   * SQL
   */
  filterExpressionType?: string;
  /**
   * @example
   * BROADCASTING
   */
  messageModel?: string;
  /**
   * @example
   * ONLINE
   */
  subscriptionStatus?: string;
  /**
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      consistency: 'consistency',
      consumerGroupId: 'consumerGroupId',
      filterExpression: 'filterExpression',
      filterExpressionType: 'filterExpressionType',
      messageModel: 'messageModel',
      subscriptionStatus: 'subscriptionStatus',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistency: 'string',
      consumerGroupId: 'string',
      filterExpression: 'string',
      filterExpressionType: 'string',
      messageModel: 'string',
      subscriptionStatus: 'string',
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicsResponseBodyDataList extends $tea.Model {
  /**
   * @remarks
   * The time when the topic was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @remarks
   * The message type of the topic.
   * 
   * Valid values:
   * 
   * *   TRANSACTION
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     transactional message
   * 
   *     <!-- -->
   * 
   * *   FIFO
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     ordered message
   * 
   *     <!-- -->
   * 
   * *   DELAY
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     scheduled or delayed message
   * 
   *     <!-- -->
   * 
   * *   NORMAL
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     normal message
   * 
   *     <!-- -->
   * 
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks on the topic.
   * 
   * @example
   * This is the remark for test.
   */
  remark?: string;
  /**
   * @remarks
   * The state of the topic.
   * 
   * Valid values:
   * 
   * *   RUNNING
   * 
   *     <!-- -->
   * 
   *     : The topic is
   * 
   *     <!-- -->
   * 
   *     running
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   CREATING
   * 
   *     <!-- -->
   * 
   *     : The topic is
   * 
   *     <!-- -->
   * 
   *     being created
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The name of the topic.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  /**
   * @remarks
   * The time when the topic was last updated.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
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
  /**
   * @remarks
   * The paginated data.
   */
  list?: ListTopicsResponseBodyDataList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 3
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The dead-letter topic.
   * 
   * If a consumer still fails to consume a message after the message is retried for a specified number of times, the message is delivered to a dead-letter topic for subsequent business recovery or troubleshooting. For more information, see [Consumption retry and dead-letter messages](https://help.aliyun.com/document_detail/440356.html).
   * 
   * @example
   * DLQ_mqtest
   */
  deadLetterTargetTopic?: string;
  /**
   * @remarks
   * The maximum number of retries.
   * 
   * @example
   * 16
   */
  maxRetryTimes?: number;
  /**
   * @remarks
   * The retry policy. For more information, see [Message retry](https://help.aliyun.com/document_detail/440356.html).
   * 
   * Valid values:
   * 
   * *   FixedRetryPolicy: Failed messages are retried at a fixed interval.
   * *   DefaultRetryPolicy: Failed messages are retried at incremental intervals as the number of retries increases.
   * 
   * This parameter is required.
   * 
   * @example
   * DefaultRetryPolicy
   */
  retryPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      deadLetterTargetTopic: 'deadLetterTargetTopic',
      maxRetryTimes: 'maxRetryTimes',
      retryPolicy: 'retryPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadLetterTargetTopic: 'string',
      maxRetryTimes: 'number',
      retryPolicy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestAclInfo extends $tea.Model {
  /**
   * @remarks
   * The authentication type of the instance.
   */
  aclTypes?: string[];
  /**
   * @remarks
   * Indicates whether the authentication-free in VPCs feature is enabled.
   * Indicates whether the authentication-free in VPCs feature is enabled.
   * Valid values:
   * - true
   * - false
   */
  defaultVpcAuthFree?: boolean;
  static names(): { [key: string]: string } {
    return {
      aclTypes: 'aclTypes',
      defaultVpcAuthFree: 'defaultVpcAuthFree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclTypes: { 'type': 'array', 'itemType': 'string' },
      defaultVpcAuthFree: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestNetworkInfoInternetInfo extends $tea.Model {
  /**
   * @remarks
   * The whitelist that includes the IP addresses that are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
   * 
   * *   If you do not configure an IP address whitelist, all CIDR blocks are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
   * *   If you configure an IP address whitelist, only the IP addresses in the whitelist are allowed to access the ApsaraMQ for RocketMQ broker over the Internet.
   */
  ipWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      ipWhitelist: 'ipWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestNetworkInfo extends $tea.Model {
  /**
   * @remarks
   * The information about the Internet over which the instance is accessed. This parameter takes effect only if the Internet access feature is enabled for the instance.
   */
  internetInfo?: UpdateInstanceRequestNetworkInfoInternetInfo;
  static names(): { [key: string]: string } {
    return {
      internetInfo: 'internetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetInfo: UpdateInstanceRequestNetworkInfoInternetInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequestProductInfo extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable the elastic transactions per second (TPS) feature for the instance.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * After you enable the elastic TPS feature for an ApsaraMQ for RocketMQ instance, you can use a specific number of TPS that exceeds the specification limit. You are charged for using the elastic TPS feature. For more information, see [Computing fees](https://help.aliyun.com/document_detail/427237.html).
   * 
   * >  The elastic TPS feature is supported only by specific instance editions. For more information, see [Instance editions](https://help.aliyun.com/document_detail/444715.html).
   * 
   * @example
   * true
   */
  autoScaling?: boolean;
  /**
   * @remarks
   * The retention period of messages. Unit: hours.
   * 
   * For information about the valid values of this parameter, see the "Limits on resource quotas" section of the [Limits](https://help.aliyun.com/document_detail/440347.html) topic.
   * 
   * ApsaraMQ for RocketMQ supports serverless scaling of message storage. You are charged storage fees based on your actual storage usage. You can change the retention period of messages to manage storage capacity. For more information, see [Storage fees](https://help.aliyun.com/document_detail/427238.html).
   * 
   * @example
   * 72
   */
  messageRetentionTime?: number;
  /**
   * @remarks
   * The ratio of the number of messages that you can send to the number of messages that you can receive on the instance.
   * 
   * Value values: 0.25 to 1.
   * 
   * @example
   * 0.5
   */
  sendReceiveRatio?: number;
  /**
   * @remarks
   * Specifies whether to enable the message trace feature.
   * 
   * *   true
   * *   false
   * 
   * This parameter is not in use. By default, the message trace feature is enabled for ApsaraMQ for RocketMQ instances, regardless of whether this parameter is configured.
   * 
   * @example
   * true
   */
  traceOn?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'autoScaling',
      messageRetentionTime: 'messageRetentionTime',
      sendReceiveRatio: 'sendReceiveRatio',
      traceOn: 'traceOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: 'boolean',
      messageRetentionTime: 'number',
      sendReceiveRatio: 'number',
      traceOn: 'boolean',
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

  /**
   * Changes the resource group to which a ApsaraMQ for RocketMQ instance belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/resourceGroup/change`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which a ApsaraMQ for RocketMQ instance belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates a consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - CreateConsumerGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroupWithOptions(instanceId: string, consumerGroupId: string, request: CreateConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateConsumerGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consumeRetryPolicy)) {
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

  /**
   * Creates a consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - CreateConsumerGroupRequest
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroup(instanceId: string, consumerGroupId: string, request: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConsumerGroupWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  /**
   * Creates an ApsaraMQ for RocketMQ 5.x instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoRenew)) {
      body["autoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.autoRenewPeriod)) {
      body["autoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!Util.isUnset(request.commodityCode)) {
      body["commodityCode"] = request.commodityCode;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.networkInfo)) {
      body["networkInfo"] = request.networkInfo;
    }

    if (!Util.isUnset(request.paymentType)) {
      body["paymentType"] = request.paymentType;
    }

    if (!Util.isUnset(request.period)) {
      body["period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      body["periodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.productInfo)) {
      body["productInfo"] = request.productInfo;
    }

    if (!Util.isUnset(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.seriesCode)) {
      body["seriesCode"] = request.seriesCode;
    }

    if (!Util.isUnset(request.serviceCode)) {
      body["serviceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.subSeriesCode)) {
      body["subSeriesCode"] = request.subSeriesCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  /**
   * Creates an ApsaraMQ for RocketMQ 5.x instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Creates a topic.
   * 
   * @param request - CreateTopicRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTopicResponse
   */
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

  /**
   * Creates a topic.
   * 
   * @param request - CreateTopicRequest
   * @returns CreateTopicResponse
   */
  async createTopic(instanceId: string, topicName: string, request: CreateTopicRequest): Promise<CreateTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTopicWithOptions(instanceId, topicName, request, headers, runtime);
  }

  /**
   * Deletes a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * After you delete a consumer group, the consumer client associated with the consumer group cannot consume messages. Exercise caution when you call this operation.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerGroupResponse
   */
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

  /**
   * Deletes a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * After you delete a consumer group, the consumer client associated with the consumer group cannot consume messages. Exercise caution when you call this operation.
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroup(instanceId: string, consumerGroupId: string): Promise<DeleteConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumerGroupWithOptions(instanceId, consumerGroupId, headers, runtime);
  }

  /**
   * Deletes a ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   After an instance is deleted, the instance cannot be restored. Exercise caution when you call this operation.
   * *   This operation is used to delete a pay-as-you-go instance. A subscription instance is automatically released after it expires. You do not need to manually delete a subscription instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
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

  /**
   * Deletes a ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * *   After an instance is deleted, the instance cannot be restored. Exercise caution when you call this operation.
   * *   This operation is used to delete a pay-as-you-go instance. A subscription instance is automatically released after it expires. You do not need to manually delete a subscription instance.
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(instanceId: string): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Deletes a specified topic.
   * 
   * @remarks
   * If you delete the topic, the publishing and subscription relationships that are established based on the topic are cleared. Exercise caution when you call this operation.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTopicResponse
   */
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

  /**
   * Deletes a specified topic.
   * 
   * @remarks
   * If you delete the topic, the publishing and subscription relationships that are established based on the topic are cleared. Exercise caution when you call this operation.
   * @returns DeleteTopicResponse
   */
  async deleteTopic(instanceId: string, topicName: string): Promise<DeleteTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTopicWithOptions(instanceId, topicName, headers, runtime);
  }

  /**
   * Queries the details of a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerGroupResponse
   */
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

  /**
   * Queries the details of a specified consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * @returns GetConsumerGroupResponse
   */
  async getConsumerGroup(instanceId: string, consumerGroupId: string): Promise<GetConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerGroupWithOptions(instanceId, consumerGroupId, headers, runtime);
  }

  /**
   * Queries the detailed information about an instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
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

  /**
   * Queries the detailed information about an instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * @returns GetInstanceResponse
   */
  async getInstance(instanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries the details of a specified topic.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicResponse
   */
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

  /**
   * Queries the details of a specified topic.
   * @returns GetTopicResponse
   */
  async getTopic(instanceId: string, topicName: string): Promise<GetTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTopicWithOptions(instanceId, topicName, headers, runtime);
  }

  /**
   * 查询支持的可用区
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableZonesResponse
   */
  async listAvailableZonesWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAvailableZonesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListAvailableZones",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/zones`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAvailableZonesResponse>(await this.callApi(params, req, runtime), new ListAvailableZonesResponse({}));
  }

  /**
   * 查询支持的可用区
   * @returns ListAvailableZonesResponse
   */
  async listAvailableZones(): Promise<ListAvailableZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAvailableZonesWithOptions(headers, runtime);
  }

  /**
   * 查询消费者客户端连接信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumerConnectionsResponse
   */
  async listConsumerConnectionsWithOptions(instanceId: string, consumerGroupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConsumerConnectionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListConsumerConnections",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/consumerGroups/${OpenApiUtil.getEncodeParam(consumerGroupId)}/connections`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListConsumerConnectionsResponse>(await this.callApi(params, req, runtime), new ListConsumerConnectionsResponse({}));
  }

  /**
   * 查询消费者客户端连接信息
   * @returns ListConsumerConnectionsResponse
   */
  async listConsumerConnections(instanceId: string, consumerGroupId: string): Promise<ListConsumerConnectionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerConnectionsWithOptions(instanceId, consumerGroupId, headers, runtime);
  }

  /**
   * Queries the subscriptions of a consumer group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumerGroupSubscriptionsResponse
   */
  async listConsumerGroupSubscriptionsWithOptions(instanceId: string, consumerGroupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConsumerGroupSubscriptionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListConsumerGroupSubscriptions",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/consumerGroups/${OpenApiUtil.getEncodeParam(consumerGroupId)}/subscriptions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListConsumerGroupSubscriptionsResponse>(await this.callApi(params, req, runtime), new ListConsumerGroupSubscriptionsResponse({}));
  }

  /**
   * Queries the subscriptions of a consumer group.
   * @returns ListConsumerGroupSubscriptionsResponse
   */
  async listConsumerGroupSubscriptions(instanceId: string, consumerGroupId: string): Promise<ListConsumerGroupSubscriptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerGroupSubscriptionsWithOptions(instanceId, consumerGroupId, headers, runtime);
  }

  /**
   * Queries the consumer groups in a specified instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - ListConsumerGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumerGroupsResponse
   */
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

  /**
   * Queries the consumer groups in a specified instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - ListConsumerGroupsRequest
   * @returns ListConsumerGroupsResponse
   */
  async listConsumerGroups(instanceId: string, request: ListConsumerGroupsRequest): Promise<ListConsumerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerGroupsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries instances.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param tmpReq - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(tmpReq: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.seriesCodes)) {
      request.seriesCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.seriesCodes, "seriesCodes", "simple");
    }

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

    if (!Util.isUnset(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.seriesCodesShrink)) {
      query["seriesCodes"] = request.seriesCodesShrink;
    }

    if (!Util.isUnset(request.tags)) {
      query["tags"] = request.tags;
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

  /**
   * Queries instances.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 查询region列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListRegions",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
  }

  /**
   * 查询region列表
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegionsWithOptions(headers, runtime);
  }

  /**
   * 查询主题订阅关系列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTopicSubscriptionsResponse
   */
  async listTopicSubscriptionsWithOptions(instanceId: string, topicName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTopicSubscriptionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListTopicSubscriptions",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/topics/${OpenApiUtil.getEncodeParam(topicName)}/subscriptions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTopicSubscriptionsResponse>(await this.callApi(params, req, runtime), new ListTopicSubscriptionsResponse({}));
  }

  /**
   * 查询主题订阅关系列表
   * @returns ListTopicSubscriptionsResponse
   */
  async listTopicSubscriptions(instanceId: string, topicName: string): Promise<ListTopicSubscriptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTopicSubscriptionsWithOptions(instanceId, topicName, headers, runtime);
  }

  /**
   * Queries the topics in a specified instance.
   * 
   * @param tmpReq - ListTopicsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTopicsResponse
   */
  async listTopicsWithOptions(instanceId: string, tmpReq: ListTopicsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTopicsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTopicsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.messageTypes)) {
      request.messageTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.messageTypes, "messageTypes", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!Util.isUnset(request.messageTypesShrink)) {
      query["messageTypes"] = request.messageTypesShrink;
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

  /**
   * Queries the topics in a specified instance.
   * 
   * @param request - ListTopicsRequest
   * @returns ListTopicsResponse
   */
  async listTopics(instanceId: string, request: ListTopicsRequest): Promise<ListTopicsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTopicsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Resets the consumer offset of a consumer group.
   * 
   * @param request - ResetConsumeOffsetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetConsumeOffsetResponse
   */
  async resetConsumeOffsetWithOptions(instanceId: string, consumerGroupId: string, topicName: string, request: ResetConsumeOffsetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResetConsumeOffsetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resetTime)) {
      body["resetTime"] = request.resetTime;
    }

    if (!Util.isUnset(request.resetType)) {
      body["resetType"] = request.resetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResetConsumeOffset",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/consumerGroups/${OpenApiUtil.getEncodeParam(consumerGroupId)}/consumeOffsets/${OpenApiUtil.getEncodeParam(topicName)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ResetConsumeOffsetResponse>(await this.callApi(params, req, runtime), new ResetConsumeOffsetResponse({}));
  }

  /**
   * Resets the consumer offset of a consumer group.
   * 
   * @param request - ResetConsumeOffsetRequest
   * @returns ResetConsumeOffsetResponse
   */
  async resetConsumeOffset(instanceId: string, consumerGroupId: string, topicName: string, request: ResetConsumeOffsetRequest): Promise<ResetConsumeOffsetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetConsumeOffsetWithOptions(instanceId, consumerGroupId, topicName, request, headers, runtime);
  }

  /**
   * Updates the basic information about and the consumption retry policy of a consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - UpdateConsumerGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConsumerGroupResponse
   */
  async updateConsumerGroupWithOptions(instanceId: string, consumerGroupId: string, request: UpdateConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateConsumerGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.consumeRetryPolicy)) {
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

  /**
   * Updates the basic information about and the consumption retry policy of a consumer group.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - UpdateConsumerGroupRequest
   * @returns UpdateConsumerGroupResponse
   */
  async updateConsumerGroup(instanceId: string, consumerGroupId: string, request: UpdateConsumerGroupRequest): Promise<UpdateConsumerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConsumerGroupWithOptions(instanceId, consumerGroupId, request, headers, runtime);
  }

  /**
   * Updates the basic information and specifications of an ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - UpdateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(instanceId: string, request: UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aclInfo)) {
      body["aclInfo"] = request.aclInfo;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.networkInfo)) {
      body["networkInfo"] = request.networkInfo;
    }

    if (!Util.isUnset(request.productInfo)) {
      body["productInfo"] = request.productInfo;
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

  /**
   * Updates the basic information and specifications of an ApsaraMQ for RocketMQ instance.
   * 
   * @remarks
   * > API operations provided by Alibaba Cloud are used to manage and query resources of Alibaba Cloud services. We recommend that you integrate these API operations only in management systems. Do not use these API operations in the core system of messaging services. Otherwise, system risks may occur.
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(instanceId: string, request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Updates the basic information about a topic.
   * 
   * @param request - UpdateTopicRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTopicResponse
   */
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

  /**
   * Updates the basic information about a topic.
   * 
   * @param request - UpdateTopicRequest
   * @returns UpdateTopicResponse
   */
  async updateTopic(instanceId: string, topicName: string, request: UpdateTopicRequest): Promise<UpdateTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTopicWithOptions(instanceId, topicName, request, headers, runtime);
  }

}
