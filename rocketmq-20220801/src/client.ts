// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class DataTopicLagMapValue extends $tea.Model {
  /**
   * @example
   * 1
   */
  readyCount?: number;
  /**
   * @example
   * 1
   */
  inflightCount?: number;
  /**
   * @example
   * 12
   */
  deliveryDuration?: number;
  static names(): { [key: string]: string } {
    return {
      readyCount: 'readyCount',
      inflightCount: 'inflightCount',
      deliveryDuration: 'deliveryDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readyCount: 'number',
      inflightCount: 'number',
      deliveryDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class CreateInstanceAccountRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      username: 'username',
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

export class CreateInstanceAccountResponseBody extends $tea.Model {
  /**
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * MissingInstanceId
   */
  code?: string;
  data?: boolean;
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
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @example
   * 3AE0999C-8DBA-5CEE-8D9A-BE8D4A90DF8D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
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

export class CreateInstanceAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceAccountResponseBody;
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
      body: CreateInstanceAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceAclRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Pub
   */
  actions?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Allow
   */
  decision?: string;
  ipWhitelists?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Topic
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      decision: 'decision',
      ipWhitelists: 'ipWhitelists',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: 'string',
      decision: 'string',
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceAclResponseBody extends $tea.Model {
  /**
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
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
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @example
   * C7E8AE3A-219B-52EE-BE32-4036F5F88833
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
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

export class CreateInstanceAclResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceAclResponseBody;
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
      body: CreateInstanceAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceIpWhitelistRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ipWhitelists?: string[];
  static names(): { [key: string]: string } {
    return {
      ipWhitelists: 'ipWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceIpWhitelistResponseBody extends $tea.Model {
  /**
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
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
   * 400
   */
  httpStatusCode?: number;
  /**
   * @example
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @example
   * A07B41BD-6DD3-5349-9E76-00303DF04BBE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
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

export class CreateInstanceIpWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceIpWhitelistResponseBody;
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
      body: CreateInstanceIpWhitelistResponseBody,
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

export class DeleteConsumerGroupSubscriptionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  filterExpression?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  filterType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      filterExpression: 'filterExpression',
      filterType: 'filterType',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterExpression: 'string',
      filterType: 'string',
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConsumerGroupSubscriptionResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
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
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @example
   * 723CDA5C-E25C-5EAF-9601-08C286DF8A4D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
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

export class DeleteConsumerGroupSubscriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConsumerGroupSubscriptionResponseBody;
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
      body: DeleteConsumerGroupSubscriptionResponseBody,
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

export class DeleteInstanceAccountResponseBody extends $tea.Model {
  /**
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * Instance.NotFound
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
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
   * 157DF7D4-53FB-58C6-BEBC-A9400E7EF68A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
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

export class DeleteInstanceAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceAccountResponseBody;
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
      body: DeleteInstanceAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceAclRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Topic
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceAclResponseBody extends $tea.Model {
  /**
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
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
   * 7358418D-83BD-507A-8079-611C63E05674
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
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

export class DeleteInstanceAclResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceAclResponseBody;
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
      body: DeleteInstanceAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceIpWhitelistRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.0.0.0/0
   */
  ipWhitelist?: string;
  static names(): { [key: string]: string } {
    return {
      ipWhitelist: 'ipWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhitelist: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceIpWhitelistResponseBody extends $tea.Model {
  /**
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
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
   * 16425867-C948-5A0C-9A24-5259727BE727
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
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

export class DeleteInstanceIpWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceIpWhitelistResponseBody;
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
      body: DeleteInstanceIpWhitelistResponseBody,
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

export class GetConsumerGroupLagResponseBody extends $tea.Model {
  /**
   * @example
   * Topic.NotFound
   */
  code?: string;
  data?: GetConsumerGroupLagResponseBodyData;
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
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @example
   * F5764C40-FB8C-53AE-B95D-96AB3D0E9375
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
      data: GetConsumerGroupLagResponseBodyData,
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

export class GetConsumerGroupLagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConsumerGroupLagResponseBody;
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
      body: GetConsumerGroupLagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupSubscriptionResponseBody extends $tea.Model {
  /**
   * @example
   * Instance.NotFound
   */
  code?: string;
  data?: GetConsumerGroupSubscriptionResponseBodyData[];
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
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @example
   * 157DF7D4-53FB-58C6-BEBC-A9400E7EF68A
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
      data: { 'type': 'array', 'itemType': GetConsumerGroupSubscriptionResponseBodyData },
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

export class GetConsumerGroupSubscriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConsumerGroupSubscriptionResponseBody;
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
      body: GetConsumerGroupSubscriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerStackRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 172.26.76.48@Lqd7dImlp9KJ5V84
   */
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerStackResponseBody extends $tea.Model {
  /**
   * @example
   * Topic.NotFound
   */
  code?: string;
  data?: GetConsumerStackResponseBodyData;
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
   * 30F2CBC7-F69D-5D78-9661-0254C9E1FBFA
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
      data: GetConsumerStackResponseBodyData,
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

export class GetConsumerStackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConsumerStackResponseBody;
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
      body: GetConsumerStackResponseBody,
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

export class GetInstanceAccountRequest extends $tea.Model {
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

export class GetInstanceAccountResponseBody extends $tea.Model {
  /**
   * @example
   * MissingInstanceId
   */
  code?: string;
  data?: GetInstanceAccountResponseBodyData;
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
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @example
   * B5C59E80-FCFC-5796-ABE4-D39EAAE578E4
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
      data: GetInstanceAccountResponseBodyData,
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

export class GetInstanceAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceAccountResponseBody;
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
      body: GetInstanceAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageDetailResponseBody extends $tea.Model {
  /**
   * @example
   * Topic.NotFound
   */
  code?: string;
  data?: GetMessageDetailResponseBodyData;
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
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @example
   * FAEBD71F-E839-52F9-BD7B-8F1290525841
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
      data: GetMessageDetailResponseBodyData,
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

export class GetMessageDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMessageDetailResponseBody;
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
      body: GetMessageDetailResponseBody,
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

export class GetTraceResponseBody extends $tea.Model {
  /**
   * @example
   * InvalidConsumerGroupId
   */
  code?: string;
  data?: GetTraceResponseBodyData;
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
   * 7779A8FC-1BCD-5A1D-A603-C4A9BD8ADC49
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
      data: GetTraceResponseBodyData,
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

export class GetTraceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTraceResponseBody;
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
      body: GetTraceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableZonesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @remarks
   * The result data that is returned.
   */
  data?: ListAvailableZonesResponseBodyData[];
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
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
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
   * Parameter instanceId is mandatory for this action .
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
   * @remarks
   * The returned error code.
   * 
   * @example
   * MissingPageNumber
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListConsumerConnectionsResponseBodyData;
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
   * 200
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
   * A3620115-6F1F-5CFB-AA3F-BBD4853B2EC4
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
   * The error code.
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
   * InstanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
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
   * Indicates whether the request was successful.
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

export class ListInstanceAccountRequest extends $tea.Model {
  /**
   * @example
   * ENABLE
   */
  accountStatus?: string;
  /**
   * @example
   * CUSTOMER
   */
  accountType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'accountStatus',
      accountType: 'accountType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      accountType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAccountResponseBody extends $tea.Model {
  /**
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * MissingInstanceId
   */
  code?: string;
  data?: ListInstanceAccountResponseBodyData;
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
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @example
   * C115601B-8736-5BBF-AC99-7FEAE1245A80
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: ListInstanceAccountResponseBodyData,
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

export class ListInstanceAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceAccountResponseBody;
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
      body: ListInstanceAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAclRequest extends $tea.Model {
  /**
   * @example
   * CID-TEST
   */
  filter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
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

export class ListInstanceAclResponseBody extends $tea.Model {
  /**
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * MissingInstanceId
   */
  code?: string;
  data?: ListInstanceAclResponseBodyData;
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
   * The instance cannot be found.
   */
  message?: string;
  /**
   * @example
   * DA4D2F89-E2C8-5F04-936B-60D55B055FA7
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: ListInstanceAclResponseBodyData,
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

export class ListInstanceAclResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceAclResponseBody;
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
      body: ListInstanceAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceIpWhitelistRequest extends $tea.Model {
  /**
   * @example
   * 0.0.0.0/0
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      ipWhitelist: 'ipWhitelist',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhitelist: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceIpWhitelistResponseBody extends $tea.Model {
  /**
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * Instance.NotFound
   */
  code?: string;
  data?: ListInstanceIpWhitelistResponseBodyData;
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
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @example
   * 7358418D-83BD-507A-8079-611C63E05674
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: ListInstanceIpWhitelistResponseBodyData,
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

export class ListInstanceIpWhitelistResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceIpWhitelistResponseBody;
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
      body: ListInstanceIpWhitelistResponseBody,
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
   * The page number.
   * 
   * Valid values: 1 to 100000000.
   * 
   * If you set this parameter to a value smaller than 1, the system uses 1 as the value. If you set this parameter to a value greater than 100000000, the system uses 100000000 as the value.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Value values: 10 to 200.
   * 
   * If you set this parameter to a value smaller than 10, the system uses 10 as the value. If you set this parameter to a value greater than 200, the system uses 200 as the value.
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
  /**
   * @remarks
   * The primary edition of the instance.
   * 
   * Valid values:
   * 
   * *   standard: Standard Edition
   * *   ultimate: Enterprise Platinum Edition
   * *   professional: Professional Edition
   */
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
   * The page number.
   * 
   * Valid values: 1 to 100000000.
   * 
   * If you set this parameter to a value smaller than 1, the system uses 1 as the value. If you set this parameter to a value greater than 100000000, the system uses 100000000 as the value.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Value values: 10 to 200.
   * 
   * If you set this parameter to a value smaller than 10, the system uses 10 as the value. If you set this parameter to a value greater than 200, the system uses 200 as the value.
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
  /**
   * @remarks
   * The primary edition of the instance.
   * 
   * Valid values:
   * 
   * *   standard: Standard Edition
   * *   ultimate: Enterprise Platinum Edition
   * *   professional: Professional Edition
   */
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

export class ListMessagesRequest extends $tea.Model {
  endTime?: string;
  /**
   * @example
   * 7F00000100207A4F0F294A938F7807AE
   */
  messageId?: string;
  /**
   * @example
   * XSCBillResult
   */
  messageKey?: string;
  pageNumber?: number;
  pageSize?: number;
  scrollId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      messageId: 'messageId',
      messageKey: 'messageKey',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      scrollId: 'scrollId',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      messageId: 'string',
      messageKey: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scrollId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBody extends $tea.Model {
  /**
   * @example
   * MissingInstanceId
   */
  code?: string;
  data?: ListMessagesResponseBodyData;
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
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @example
   * A3531B6A-5A88-52BD-B3C4-A024C3D0AA2E
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
      data: ListMessagesResponseBodyData,
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

export class ListMessagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMessagesResponseBody;
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
      body: ListMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * MissingPageNumber
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListRegionsResponseBodyData[];
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
   * instanceId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
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
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B962390-D84B-5D44-8C11-79DF40299D41
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @example
   * d09e2b63e1b12d905b7080ff70
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceGroupId?: string;
  /**
   * @example
   * rmq-cn-lbj34bb2r0i
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @example
   * [{"key": "rmq-test", "value": "test"}]
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * Topic.NotFound
   */
  code?: string;
  data?: ListTagResourcesResponseBodyData;
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
   * The topic already exists.
   */
  message?: string;
  /**
   * @example
   * F00C6A70-C782-5DD6-9D11-0CFC710100C7
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
      data: ListTagResourcesResponseBodyData,
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

export class ListTopicSubscriptionsResponseBody extends $tea.Model {
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
   * The returned data.
   */
  data?: ListTopicSubscriptionsResponseBodyData[];
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * Topic
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
   * 200
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
   * The request ID.
   * 
   * @example
   * 92A9BE4E-B794-50C8-979C-0456E4D32943
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

export class ListTracesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-05-19 10:10:09
   */
  endTime?: string;
  /**
   * @example
   * 0100163E0EC1F1965C04C7906700000000
   */
  messageId?: string;
  /**
   * @example
   * order_ceating
   */
  messageKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MESSAGE_ID
   */
  queryType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-05-10 10:42:11
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      messageId: 'messageId',
      messageKey: 'messageKey',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      queryType: 'queryType',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      messageId: 'string',
      messageKey: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryType: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTracesResponseBody extends $tea.Model {
  /**
   * @example
   * Topic.NotFound
   */
  code?: string;
  data?: ListTracesResponseBodyData;
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
   * @remarks
   * Id of the request
   * 
   * @example
   * EDFF77E1-1ED1-5389-B6A8-651D9433BBE5
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
      data: ListTracesResponseBodyData,
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

export class ListTracesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTracesResponseBody;
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
      body: ListTracesResponseBody,
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

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rmq-cn-pe3355cs707
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"key": "rmq-test", "value": "test"}]
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
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
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rmq-cn-pe3355cs707
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @example
   * ["key1", "key2"]
   */
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      regionId: 'regionId',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tagKey: 'tagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
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
   * Parameter deliveryOrderType is invalid.
   */
  message?: string;
  /**
   * @example
   * A07B41BD-6DD3-5349-9E76-00303DF04BBE
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

export class UpdateInstanceAccountRequest extends $tea.Model {
  /**
   * @example
   * ENABLE
   */
  accountStatus?: string;
  /**
   * @example
   * test
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'accountStatus',
      password: 'password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAccountResponseBody extends $tea.Model {
  /**
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * Instance.NotFound
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
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
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
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

export class UpdateInstanceAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceAccountResponseBody;
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
      body: UpdateInstanceAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAclRequest extends $tea.Model {
  /**
   * @example
   * Pub
   */
  actions?: string;
  /**
   * @example
   * Allow
   */
  decision?: string;
  ipWhitelists?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Topic
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      decision: 'decision',
      ipWhitelists: 'ipWhitelists',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: 'string',
      decision: 'string',
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAclResponseBody extends $tea.Model {
  /**
   * @example
   * xxx
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * MissingInstanceId
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
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
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @example
   * C115601B-8736-5BBF-AC99-7FEAE1245A80
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'accessDeniedDetail',
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
      accessDeniedDetail: 'string',
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

export class UpdateInstanceAclResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceAclResponseBody;
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
      body: UpdateInstanceAclResponseBody,
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

export class VerifyConsumeMessageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zeekr-settlement-server-dc555456f-v2lcg@1@1@qfvorazqns
   */
  clientId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEST_FINANCE_STOCK_OUT_GROUP
   */
  consumerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      consumerGroupId: 'consumerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      consumerGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyConsumeMessageResponseBody extends $tea.Model {
  /**
   * @example
   * Topic.NotFound
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
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
   * Parameter instanceId is mandatory for this action .
   */
  message?: string;
  /**
   * @example
   * 5304143F-AB0E-5AB4-A227-7C5489216FD5
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

export class VerifyConsumeMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyConsumeMessageResponseBody;
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
      body: VerifyConsumeMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySendMessageRequest extends $tea.Model {
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * xx
   */
  messageKey?: string;
  /**
   * @example
   * xx
   */
  messageTag?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      messageKey: 'messageKey',
      messageTag: 'messageTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      messageKey: 'string',
      messageTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifySendMessageResponseBody extends $tea.Model {
  /**
   * @example
   * InvalidConsumerGroupId
   */
  code?: string;
  /**
   * @example
   * 0A64228900207A4F0F2931A4E0D40BE5
   */
  data?: string;
  /**
   * @example
   * ConsumerGroupId
   */
  dynamicCode?: string;
  /**
   * @example
   * consumerGroupId
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
   * 3BD2C19B-66DE-59C7-B2F6-FD1BE21DC8C1
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

export class VerifySendMessageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifySendMessageResponseBody;
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
      body: VerifySendMessageResponseBody,
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
  /**
   * @remarks
   * The ID of the vSwitch with which the instance is associated.
   * 
   * @example
   * vsw-uf6gwtbn6etadpv*******
   */
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
  /**
   * @remarks
   * The vSwitches.
   */
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

export class GetConsumerGroupLagResponseBodyDataTotalLag extends $tea.Model {
  /**
   * @example
   * 12
   */
  deliveryDuration?: number;
  /**
   * @example
   * 1
   */
  inflightCount?: number;
  /**
   * @example
   * 1
   */
  readyCount?: number;
  static names(): { [key: string]: string } {
    return {
      deliveryDuration: 'deliveryDuration',
      inflightCount: 'inflightCount',
      readyCount: 'readyCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryDuration: 'number',
      inflightCount: 'number',
      readyCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupLagResponseBodyData extends $tea.Model {
  /**
   * @example
   * CID-TEST
   */
  consumerGroupId?: string;
  /**
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
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
  topicLagMap?: { [key: string]: DataTopicLagMapValue };
  totalLag?: GetConsumerGroupLagResponseBodyDataTotalLag;
  /**
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
      topicLagMap: 'topicLagMap',
      totalLag: 'totalLag',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      createTime: 'string',
      instanceId: 'string',
      regionId: 'string',
      topicLagMap: { 'type': 'map', 'keyType': 'string', 'valueType': DataTopicLagMapValue },
      totalLag: GetConsumerGroupLagResponseBodyDataTotalLag,
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerGroupSubscriptionResponseBodyDataConnectionDTO extends $tea.Model {
  /**
   * @example
   * 192.168.50.191@19908#-2093249153#1534215565#40385215750900
   */
  clientId?: string;
  /**
   * @example
   * xx.xx.xx.xx
   */
  egressIp?: string;
  /**
   * @example
   * nginx
   */
  hostname?: string;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * BROADCASTING
   */
  messageModel?: string;
  /**
   * @example
   * 1.0.0
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

export class GetConsumerGroupSubscriptionResponseBodyDataSubscriptionDTO extends $tea.Model {
  /**
   * @example
   * GID_inspector_group
   */
  consumerGroupId?: string;
  /**
   * @example
   * *
   */
  filterExpression?: string;
  /**
   * @example
   * UNSPECIFIED
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
   * Topic_normal_inspector
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
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

export class GetConsumerGroupSubscriptionResponseBodyData extends $tea.Model {
  connectionDTO?: GetConsumerGroupSubscriptionResponseBodyDataConnectionDTO;
  subscriptionDTO?: GetConsumerGroupSubscriptionResponseBodyDataSubscriptionDTO;
  static names(): { [key: string]: string } {
    return {
      connectionDTO: 'connectionDTO',
      subscriptionDTO: 'subscriptionDTO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionDTO: GetConsumerGroupSubscriptionResponseBodyDataConnectionDTO,
      subscriptionDTO: GetConsumerGroupSubscriptionResponseBodyDataSubscriptionDTO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerStackResponseBodyDataStacks extends $tea.Model {
  /**
   * @example
   * 123
   */
  thread?: string;
  tracks?: string[];
  static names(): { [key: string]: string } {
    return {
      thread: 'thread',
      tracks: 'tracks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thread: 'string',
      tracks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerStackResponseBodyData extends $tea.Model {
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
  stacks?: GetConsumerStackResponseBodyDataStacks[];
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      instanceId: 'instanceId',
      regionId: 'regionId',
      stacks: 'stacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      instanceId: 'string',
      regionId: 'string',
      stacks: { 'type': 'array', 'itemType': GetConsumerStackResponseBodyDataStacks },
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
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf6gwtbn6etadpvz7****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The vSwitches.
   */
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

export class GetInstanceAccountResponseBodyData extends $tea.Model {
  /**
   * @example
   * *************
   */
  password?: string;
  /**
   * @example
   * xxx
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      username: 'username',
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

export class GetMessageDetailResponseBodyData extends $tea.Model {
  /**
   * @example
   * {}
   */
  body?: string;
  /**
   * @example
   * 123
   */
  bodySize?: number;
  /**
   * @example
   * xxx.xx.xxx.xx
   */
  bornHost?: string;
  /**
   * @example
   * 2023-03-22 12:17:08
   */
  bornTime?: string;
  /**
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @example
   * xx
   */
  messageGroup?: string;
  /**
   * @example
   * 01BE87E485F0C7808C04543CAF00000001
   */
  messageId?: string;
  messageKeys?: string[];
  /**
   * @example
   * xx
   */
  messageTag?: string;
  /**
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * xxx.xx.xxx.xx
   */
  storeHost?: string;
  /**
   * @example
   * 2023-03-22 12:17:08
   */
  storeTime?: string;
  systemProperties?: { [key: string]: string };
  /**
   * @example
   * topic_test
   */
  topicName?: string;
  userProperties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      bodySize: 'bodySize',
      bornHost: 'bornHost',
      bornTime: 'bornTime',
      instanceId: 'instanceId',
      messageGroup: 'messageGroup',
      messageId: 'messageId',
      messageKeys: 'messageKeys',
      messageTag: 'messageTag',
      messageType: 'messageType',
      regionId: 'regionId',
      storeHost: 'storeHost',
      storeTime: 'storeTime',
      systemProperties: 'systemProperties',
      topicName: 'topicName',
      userProperties: 'userProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      bodySize: 'number',
      bornHost: 'string',
      bornTime: 'string',
      instanceId: 'string',
      messageGroup: 'string',
      messageId: 'string',
      messageKeys: { 'type': 'array', 'itemType': 'string' },
      messageTag: 'string',
      messageType: 'string',
      regionId: 'string',
      storeHost: 'string',
      storeTime: 'string',
      systemProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      topicName: 'string',
      userProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

export class GetTraceResponseBodyDataBrokerInfoOperations extends $tea.Model {
  /**
   * @example
   * 2023-03-22 12:17:08
   */
  operateTime?: string;
  /**
   * @example
   * ADD
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      operateTime: 'operateTime',
      operateType: 'operateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateTime: 'string',
      operateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataBrokerInfo extends $tea.Model {
  /**
   * @example
   * SUCCESS
   */
  delayStatus?: string;
  operations?: GetTraceResponseBodyDataBrokerInfoOperations[];
  /**
   * @example
   * 2023-03-22 12:17:08
   */
  presetDelayTime?: string;
  static names(): { [key: string]: string } {
    return {
      delayStatus: 'delayStatus',
      operations: 'operations',
      presetDelayTime: 'presetDelayTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayStatus: 'string',
      operations: { 'type': 'array', 'itemType': GetTraceResponseBodyDataBrokerInfoOperations },
      presetDelayTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataConsumerInfosDeadLetterInfo extends $tea.Model {
  /**
   * @example
   * 7F000001001F7A4F0F29463F0376047D
   */
  messageId?: string;
  /**
   * @example
   * 2023-03-22 12:17:08
   */
  toDlqTime?: string;
  /**
   * @example
   * Register_Sync
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'messageId',
      toDlqTime: 'toDlqTime',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      toDlqTime: 'string',
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataConsumerInfosRecordsOperations extends $tea.Model {
  /**
   * @example
   * true
   */
  deadMessage?: boolean;
  /**
   * @example
   * 100
   */
  invisibleTime?: number;
  /**
   * @example
   * 2023-03-22 12:17:08
   */
  operateTime?: string;
  /**
   * @example
   * ADD
   */
  operateType?: string;
  static names(): { [key: string]: string } {
    return {
      deadMessage: 'deadMessage',
      invisibleTime: 'invisibleTime',
      operateTime: 'operateTime',
      operateType: 'operateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadMessage: 'boolean',
      invisibleTime: 'number',
      operateTime: 'string',
      operateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataConsumerInfosRecords extends $tea.Model {
  /**
   * @example
   * xx.xx.xx.xx
   */
  clientHost?: string;
  /**
   * @example
   * SUCCESS
   */
  consumeStatus?: string;
  /**
   * @example
   * true
   */
  fifoEnable?: boolean;
  operations?: GetTraceResponseBodyDataConsumerInfosRecordsOperations[];
  /**
   * @remarks
   * POP_CK
   * 
   * @example
   * 123
   */
  popCk?: string;
  /**
   * @example
   * test
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientHost: 'clientHost',
      consumeStatus: 'consumeStatus',
      fifoEnable: 'fifoEnable',
      operations: 'operations',
      popCk: 'popCk',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientHost: 'string',
      consumeStatus: 'string',
      fifoEnable: 'boolean',
      operations: { 'type': 'array', 'itemType': GetTraceResponseBodyDataConsumerInfosRecordsOperations },
      popCk: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataConsumerInfos extends $tea.Model {
  /**
   * @example
   * SUCCESS
   */
  consumeStatus?: string;
  /**
   * @example
   * GID_inspector_group
   */
  consumerGroupId?: string;
  deadLetterInfo?: GetTraceResponseBodyDataConsumerInfosDeadLetterInfo;
  /**
   * @example
   * true
   */
  deadMessage?: boolean;
  records?: GetTraceResponseBodyDataConsumerInfosRecords[];
  static names(): { [key: string]: string } {
    return {
      consumeStatus: 'consumeStatus',
      consumerGroupId: 'consumerGroupId',
      deadLetterInfo: 'deadLetterInfo',
      deadMessage: 'deadMessage',
      records: 'records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumeStatus: 'string',
      consumerGroupId: 'string',
      deadLetterInfo: GetTraceResponseBodyDataConsumerInfosDeadLetterInfo,
      deadMessage: 'boolean',
      records: { 'type': 'array', 'itemType': GetTraceResponseBodyDataConsumerInfosRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataMessageInfo extends $tea.Model {
  /**
   * @example
   * {}
   */
  body?: string;
  /**
   * @example
   * x.x.x.x
   */
  bornHost?: string;
  /**
   * @example
   * 2023-03-22 12:17:08
   */
  bornTime?: string;
  /**
   * @example
   * rmq-cn-u0t2ygjq505
   */
  instanceId?: string;
  /**
   * @example
   * xx
   */
  messageGroup?: string;
  /**
   * @example
   * 0A79275A00207A4F0F2916C92F9A0B94
   */
  messageId?: string;
  messageKeys?: string[];
  /**
   * @example
   * xx
   */
  messageTag?: string;
  /**
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * true
   */
  setted?: boolean;
  /**
   * @example
   * x.x.x.x
   */
  storeHost?: string;
  /**
   * @example
   * 2023-03-22 12:17:08
   */
  storeTime?: string;
  /**
   * @example
   * Topic_normal_inspector
   */
  topicName?: string;
  /**
   * @example
   * xx
   */
  transactionId?: string;
  userProperties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      bornHost: 'bornHost',
      bornTime: 'bornTime',
      instanceId: 'instanceId',
      messageGroup: 'messageGroup',
      messageId: 'messageId',
      messageKeys: 'messageKeys',
      messageTag: 'messageTag',
      messageType: 'messageType',
      regionId: 'regionId',
      setted: 'setted',
      storeHost: 'storeHost',
      storeTime: 'storeTime',
      topicName: 'topicName',
      transactionId: 'transactionId',
      userProperties: 'userProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      bornHost: 'string',
      bornTime: 'string',
      instanceId: 'string',
      messageGroup: 'string',
      messageId: 'string',
      messageKeys: { 'type': 'array', 'itemType': 'string' },
      messageTag: 'string',
      messageType: 'string',
      regionId: 'string',
      setted: 'boolean',
      storeHost: 'string',
      storeTime: 'string',
      topicName: 'string',
      transactionId: 'string',
      userProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataProducerInfoRecords extends $tea.Model {
  /**
   * @example
   * 2023-03-22 12:17:08
   */
  arriveTime?: string;
  /**
   * @example
   * xx.xx.xx.xx
   */
  clientHost?: string;
  /**
   * @example
   * 0A79275A00207A4F0F2916C92F9A0B94
   */
  dlqOriginMessageId?: string;
  /**
   * @example
   * test_topic
   */
  dlqOriginTopic?: string;
  /**
   * @example
   * CONSOLE
   */
  messageSource?: string;
  /**
   * @example
   * 100
   */
  produceDuration?: number;
  /**
   * @example
   * SUCCESS
   */
  produceStatus?: string;
  /**
   * @example
   * 2023-03-22 12:17:08
   */
  produceTime?: string;
  /**
   * @example
   * xxx
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      arriveTime: 'arriveTime',
      clientHost: 'clientHost',
      dlqOriginMessageId: 'dlqOriginMessageId',
      dlqOriginTopic: 'dlqOriginTopic',
      messageSource: 'messageSource',
      produceDuration: 'produceDuration',
      produceStatus: 'produceStatus',
      produceTime: 'produceTime',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arriveTime: 'string',
      clientHost: 'string',
      dlqOriginMessageId: 'string',
      dlqOriginTopic: 'string',
      messageSource: 'string',
      produceDuration: 'number',
      produceStatus: 'string',
      produceTime: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyDataProducerInfo extends $tea.Model {
  records?: GetTraceResponseBodyDataProducerInfoRecords[];
  static names(): { [key: string]: string } {
    return {
      records: 'records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      records: { 'type': 'array', 'itemType': GetTraceResponseBodyDataProducerInfoRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTraceResponseBodyData extends $tea.Model {
  brokerInfo?: GetTraceResponseBodyDataBrokerInfo;
  consumerInfos?: GetTraceResponseBodyDataConsumerInfos[];
  /**
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  messageInfo?: GetTraceResponseBodyDataMessageInfo;
  producerInfo?: GetTraceResponseBodyDataProducerInfo;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      brokerInfo: 'brokerInfo',
      consumerInfos: 'consumerInfos',
      instanceId: 'instanceId',
      messageInfo: 'messageInfo',
      producerInfo: 'producerInfo',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerInfo: GetTraceResponseBodyDataBrokerInfo,
      consumerInfos: { 'type': 'array', 'itemType': GetTraceResponseBodyDataConsumerInfos },
      instanceId: 'string',
      messageInfo: GetTraceResponseBodyDataMessageInfo,
      producerInfo: GetTraceResponseBodyDataProducerInfo,
      regionId: 'string',
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableZonesResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The time when the zone was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the zone was last updated.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the current zone.
   * 
   * @example
   * cn-qingdao-b
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the current zone.
   * 
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
   * @remarks
   * The ID of the client.
   * 
   * @example
   * 172.17.135.197@17392#1936705963#551717232#9873695589062458
   */
  clientId?: string;
  /**
   * @remarks
   * Host IP/Public IP
   * 
   * @example
   * xx.xx.xx.xx
   */
  egressIp?: string;
  /**
   * @remarks
   * The `hostname` of the cloud-native box.
   * 
   * @example
   * vos
   */
  hostname?: string;
  /**
   * @remarks
   * The language of the client.
   * 
   * @example
   * java
   */
  language?: string;
  /**
   * @remarks
   * Consumption Mode
   * - BROADCASTING
   * - CLUSTERING
   * 
   * @example
   * BROADCASTING
   */
  messageModel?: string;
  /**
   * @remarks
   * The version of the client.
   * 
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
  /**
   * @remarks
   * The client connection list
   */
  connections?: ListConsumerConnectionsResponseBodyDataConnections[];
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
   * The instance ID.
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
  /**
   * @remarks
   * Indicates whether message consumption is consistent. Valid values:
   * 
   * *   false: Unconsumed messages exist in the consumer group.
   * *   true: No unconsumed message exists in the consumer group.
   * 
   * @example
   * true
   */
  consistency?: boolean;
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
   * The filter expression.
   * 
   * @example
   * *
   */
  filterExpression?: string;
  /**
   * @remarks
   * The type of the filter expression. Valid values:
   * 
   * *   SQL: filters messages by using SQL expressions.
   * *   TAG: filters messages by using tags.
   * 
   * @example
   * SQL
   */
  filterExpressionType?: string;
  /**
   * @remarks
   * The consumption mode of the consumer group. Valid values:
   * 
   * *   BROADCASTING: broadcasting consumption
   * *   CLUSTERING: clustering consumption
   * 
   * @example
   * BROADCASTING
   */
  messageModel?: string;
  /**
   * @remarks
   * The subscription status. Valid values:
   * 
   * *   ONLINE: The consumer group is online. If the consumer group contains multiple consumers, this value is returned as long as one of the consumers is online.
   * *   OFFLINE: The consumer group is offline. If the consumer group contains multiple consumers, this value is returned only if all consumers are offline.
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

export class ListInstanceAccountResponseBodyDataList extends $tea.Model {
  /**
   * @example
   * ENABLE
   */
  accountStatus?: string;
  /**
   * @example
   * CUSTOMER
   */
  accountType?: string;
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
  /**
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'accountStatus',
      accountType: 'accountType',
      instanceId: 'instanceId',
      regionId: 'regionId',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      accountType: 'string',
      instanceId: 'string',
      regionId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAccountResponseBodyData extends $tea.Model {
  list?: ListInstanceAccountResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 24
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
      list: { 'type': 'array', 'itemType': ListInstanceAccountResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAclResponseBodyDataList extends $tea.Model {
  /**
   * @example
   * APACHE
   */
  aclType?: string;
  actions?: string[];
  /**
   * @example
   * Allow
   */
  decision?: string;
  /**
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  ipWhitelists?: string[];
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * test
   */
  resourceName?: string;
  /**
   * @example
   * Topic
   */
  resourceType?: string;
  /**
   * @example
   * test
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aclType: 'aclType',
      actions: 'actions',
      decision: 'decision',
      instanceId: 'instanceId',
      ipWhitelists: 'ipWhitelists',
      regionId: 'regionId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclType: 'string',
      actions: { 'type': 'array', 'itemType': 'string' },
      decision: 'string',
      instanceId: 'string',
      ipWhitelists: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceAclResponseBodyData extends $tea.Model {
  list?: ListInstanceAclResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 24
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
      list: { 'type': 'array', 'itemType': ListInstanceAclResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceIpWhitelistResponseBodyData extends $tea.Model {
  list?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 5
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
      list: { 'type': 'array', 'itemType': 'string' },
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
   * The time when the version of the instance was updated.
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
   * The product information.
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
   * The time when the instance was created.
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
   * The pagination information.
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

export class ListMessagesResponseBodyDataList extends $tea.Model {
  /**
   * @example
   * {}
   */
  body?: string;
  /**
   * @example
   * 100
   */
  bodySize?: number;
  /**
   * @example
   * xx.xx.xx.xx
   */
  bornHost?: string;
  /**
   * @example
   * 2023-03-22 12:17:08
   */
  bornTime?: string;
  /**
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @example
   * xx
   */
  messageGroup?: string;
  /**
   * @example
   * 7F000001000114B4340C5ABF94500079
   */
  messageId?: string;
  messageKeys?: string[];
  /**
   * @example
   * xx
   */
  messageTag?: string;
  /**
   * @example
   * NORMAL
   */
  messageType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * xx.xx.xx.xx
   */
  storeHost?: string;
  /**
   * @example
   * 2023-03-22 12:17:08
   */
  storeTime?: string;
  /**
   * @example
   * topic_test
   */
  topicName?: string;
  userProperties?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      bodySize: 'bodySize',
      bornHost: 'bornHost',
      bornTime: 'bornTime',
      instanceId: 'instanceId',
      messageGroup: 'messageGroup',
      messageId: 'messageId',
      messageKeys: 'messageKeys',
      messageTag: 'messageTag',
      messageType: 'messageType',
      regionId: 'regionId',
      storeHost: 'storeHost',
      storeTime: 'storeTime',
      topicName: 'topicName',
      userProperties: 'userProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      bodySize: 'number',
      bornHost: 'string',
      bornTime: 'string',
      instanceId: 'string',
      messageGroup: 'string',
      messageId: 'string',
      messageKeys: { 'type': 'array', 'itemType': 'string' },
      messageTag: 'string',
      messageType: 'string',
      regionId: 'string',
      storeHost: 'string',
      storeTime: 'string',
      topicName: 'string',
      userProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBodyData extends $tea.Model {
  list?: ListMessagesResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  scrollId?: string;
  /**
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      scrollId: 'scrollId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListMessagesResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      scrollId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyDataTags extends $tea.Model {
  /**
   * @remarks
   * The tag code.
   * 
   * @example
   * xx
   */
  tagCode?: string;
  /**
   * @remarks
   * The tag value.
   * 
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
   * @remarks
   * The time when the ApsaraMQ for RocketMQ instance was created.
   * 
   * @example
   * 2022-08-01 20:05:50
   */
  createTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * hangzhou
   */
  regionName?: string;
  /**
   * @remarks
   * Indicates whether ApsaraMQ for RocketMQ V4 is activated.
   * 
   * @example
   * true
   */
  supportRocketmqV4?: boolean;
  /**
   * @remarks
   * Indicates whether ApsaraMQ for RocketMQ V5 is activated.
   * 
   * @example
   * true
   */
  supportRocketmqV5?: boolean;
  /**
   * @remarks
   * The region tags.
   */
  tags?: ListRegionsResponseBodyDataTags[];
  /**
   * @remarks
   * The time when the ApsaraMQ for RocketMQ instance was last modified.
   * 
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

export class ListTagResourcesResponseBodyDataTagResources extends $tea.Model {
  /**
   * @example
   * 1876441048322426
   */
  aliUid?: number;
  /**
   * @example
   * custom
   */
  category?: string;
  /**
   * @example
   * rmq-cn-pe334n08h08
   */
  resourceId?: string;
  /**
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @example
   * public
   */
  scope?: string;
  /**
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @example
   * value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'aliUid',
      category: 'category',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      scope: 'scope',
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      category: 'string',
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyData extends $tea.Model {
  /**
   * @example
   * d09e2b63e1b12d905b7080ff70
   */
  nextToken?: string;
  /**
   * @example
   * F00C6A70-C782-5DD6-9D11-0CFC710100C7
   */
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyDataTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      tagResources: 'tagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyDataTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTopicSubscriptionsResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * Indicates whether message consumption is consistent. Valid values:
   * 
   * *   false: Unconsumed messages exist in the consumer group.
   * *   true: No unconsumed message exists in the consumer group.
   * 
   * @example
   * true
   */
  consistency?: string;
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
   * The type of the filter expression. Valid values: SQL, TAG, and UNSPECIFIED. The value SQL indicates that messages are filtered by using SQL expressions. The value TAG indicates that messages are filtered by using tags. The value UNSPECIFIED indicates that no filter expression type is specified.
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
   * The topic name.
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

export class ListTracesResponseBodyDataList extends $tea.Model {
  /**
   * @example
   * 2023-03-22 12:17:08
   */
  bornTime?: string;
  /**
   * @example
   * rmq-cn-7e22ody****
   */
  instanceId?: string;
  /**
   * @example
   * 7F00000100207A4F0F294A938F7807AE
   */
  messageId?: string;
  messageKeys?: string[];
  /**
   * @example
   * xx
   */
  messageTag?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * topic_test
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      bornTime: 'bornTime',
      instanceId: 'instanceId',
      messageId: 'messageId',
      messageKeys: 'messageKeys',
      messageTag: 'messageTag',
      regionId: 'regionId',
      topicName: 'topicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bornTime: 'string',
      instanceId: 'string',
      messageId: 'string',
      messageKeys: { 'type': 'array', 'itemType': 'string' },
      messageTag: 'string',
      regionId: 'string',
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTracesResponseBodyData extends $tea.Model {
  list?: ListTracesResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
      list: { 'type': 'array', 'itemType': ListTracesResponseBodyDataList },
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
   * 
   * @example
   * false
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
   * 创建访问控制acl用户
   * 
   * @param request - CreateInstanceAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceAccountResponse
   */
  async createInstanceAccountWithOptions(instanceId: string, request: CreateInstanceAccountRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceAccountResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.password)) {
      body["password"] = request.password;
    }

    if (!Util.isUnset(request.username)) {
      body["username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstanceAccount",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/accounts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceAccountResponse>(await this.callApi(params, req, runtime), new CreateInstanceAccountResponse({}));
  }

  /**
   * 创建访问控制acl用户
   * 
   * @param request - CreateInstanceAccountRequest
   * @returns CreateInstanceAccountResponse
   */
  async createInstanceAccount(instanceId: string, request: CreateInstanceAccountRequest): Promise<CreateInstanceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceAccountWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 创建访问控制acl数据
   * 
   * @param request - CreateInstanceAclRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceAclResponse
   */
  async createInstanceAclWithOptions(instanceId: string, username: string, request: CreateInstanceAclRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceAclResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actions)) {
      body["actions"] = request.actions;
    }

    if (!Util.isUnset(request.decision)) {
      body["decision"] = request.decision;
    }

    if (!Util.isUnset(request.ipWhitelists)) {
      body["ipWhitelists"] = request.ipWhitelists;
    }

    if (!Util.isUnset(request.resourceName)) {
      body["resourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstanceAcl",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/acl/account/${OpenApiUtil.getEncodeParam(username)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceAclResponse>(await this.callApi(params, req, runtime), new CreateInstanceAclResponse({}));
  }

  /**
   * 创建访问控制acl数据
   * 
   * @param request - CreateInstanceAclRequest
   * @returns CreateInstanceAclResponse
   */
  async createInstanceAcl(instanceId: string, username: string, request: CreateInstanceAclRequest): Promise<CreateInstanceAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceAclWithOptions(instanceId, username, request, headers, runtime);
  }

  /**
   * 创建访问控制ip白名单
   * 
   * @param request - CreateInstanceIpWhitelistRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceIpWhitelistResponse
   */
  async createInstanceIpWhitelistWithOptions(instanceId: string, request: CreateInstanceIpWhitelistRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceIpWhitelistResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ipWhitelists)) {
      body["ipWhitelists"] = request.ipWhitelists;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstanceIpWhitelist",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ip/whitelist`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new CreateInstanceIpWhitelistResponse({}));
  }

  /**
   * 创建访问控制ip白名单
   * 
   * @param request - CreateInstanceIpWhitelistRequest
   * @returns CreateInstanceIpWhitelistResponse
   */
  async createInstanceIpWhitelist(instanceId: string, request: CreateInstanceIpWhitelistRequest): Promise<CreateInstanceIpWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceIpWhitelistWithOptions(instanceId, request, headers, runtime);
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
   * 取消消费组订阅关系
   * 
   * @param request - DeleteConsumerGroupSubscriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerGroupSubscriptionResponse
   */
  async deleteConsumerGroupSubscriptionWithOptions(instanceId: string, consumerGroupId: string, request: DeleteConsumerGroupSubscriptionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConsumerGroupSubscriptionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filterExpression)) {
      query["filterExpression"] = request.filterExpression;
    }

    if (!Util.isUnset(request.filterType)) {
      query["filterType"] = request.filterType;
    }

    if (!Util.isUnset(request.topicName)) {
      query["topicName"] = request.topicName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteConsumerGroupSubscription",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/consumerGroups/${OpenApiUtil.getEncodeParam(consumerGroupId)}/subscriptions`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteConsumerGroupSubscriptionResponse>(await this.callApi(params, req, runtime), new DeleteConsumerGroupSubscriptionResponse({}));
  }

  /**
   * 取消消费组订阅关系
   * 
   * @param request - DeleteConsumerGroupSubscriptionRequest
   * @returns DeleteConsumerGroupSubscriptionResponse
   */
  async deleteConsumerGroupSubscription(instanceId: string, consumerGroupId: string, request: DeleteConsumerGroupSubscriptionRequest): Promise<DeleteConsumerGroupSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumerGroupSubscriptionWithOptions(instanceId, consumerGroupId, request, headers, runtime);
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
   * 删除访问控制acl用户
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceAccountResponse
   */
  async deleteInstanceAccountWithOptions(instanceId: string, username: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceAccountResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstanceAccount",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/accounts/${OpenApiUtil.getEncodeParam(username)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceAccountResponse>(await this.callApi(params, req, runtime), new DeleteInstanceAccountResponse({}));
  }

  /**
   * 删除访问控制acl用户
   * @returns DeleteInstanceAccountResponse
   */
  async deleteInstanceAccount(instanceId: string, username: string): Promise<DeleteInstanceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceAccountWithOptions(instanceId, username, headers, runtime);
  }

  /**
   * 删除访问控制acl数据
   * 
   * @param request - DeleteInstanceAclRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceAclResponse
   */
  async deleteInstanceAclWithOptions(instanceId: string, username: string, request: DeleteInstanceAclRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceAclResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceName)) {
      query["resourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstanceAcl",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/acl/account/${OpenApiUtil.getEncodeParam(username)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceAclResponse>(await this.callApi(params, req, runtime), new DeleteInstanceAclResponse({}));
  }

  /**
   * 删除访问控制acl数据
   * 
   * @param request - DeleteInstanceAclRequest
   * @returns DeleteInstanceAclResponse
   */
  async deleteInstanceAcl(instanceId: string, username: string, request: DeleteInstanceAclRequest): Promise<DeleteInstanceAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceAclWithOptions(instanceId, username, request, headers, runtime);
  }

  /**
   * 删除访问控制ip白名单
   * 
   * @param request - DeleteInstanceIpWhitelistRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceIpWhitelistResponse
   */
  async deleteInstanceIpWhitelistWithOptions(instanceId: string, request: DeleteInstanceIpWhitelistRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceIpWhitelistResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ipWhitelist)) {
      query["ipWhitelist"] = request.ipWhitelist;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstanceIpWhitelist",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ip/whitelist`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new DeleteInstanceIpWhitelistResponse({}));
  }

  /**
   * 删除访问控制ip白名单
   * 
   * @param request - DeleteInstanceIpWhitelistRequest
   * @returns DeleteInstanceIpWhitelistResponse
   */
  async deleteInstanceIpWhitelist(instanceId: string, request: DeleteInstanceIpWhitelistRequest): Promise<DeleteInstanceIpWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceIpWhitelistWithOptions(instanceId, request, headers, runtime);
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
   * 查询消费者组堆积信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerGroupLagResponse
   */
  async getConsumerGroupLagWithOptions(instanceId: string, consumerGroupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetConsumerGroupLagResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetConsumerGroupLag",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/consumerGroups/${OpenApiUtil.getEncodeParam(consumerGroupId)}/lag`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetConsumerGroupLagResponse>(await this.callApi(params, req, runtime), new GetConsumerGroupLagResponse({}));
  }

  /**
   * 查询消费者组堆积信息
   * @returns GetConsumerGroupLagResponse
   */
  async getConsumerGroupLag(instanceId: string, consumerGroupId: string): Promise<GetConsumerGroupLagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerGroupLagWithOptions(instanceId, consumerGroupId, headers, runtime);
  }

  /**
   * 查询消费组订阅关系列表客户端分布
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerGroupSubscriptionResponse
   */
  async getConsumerGroupSubscriptionWithOptions(instanceId: string, consumerGroupId: string, topicName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetConsumerGroupSubscriptionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetConsumerGroupSubscription",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/consumerGroups/${OpenApiUtil.getEncodeParam(consumerGroupId)}/subscriptions/${OpenApiUtil.getEncodeParam(topicName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetConsumerGroupSubscriptionResponse>(await this.callApi(params, req, runtime), new GetConsumerGroupSubscriptionResponse({}));
  }

  /**
   * 查询消费组订阅关系列表客户端分布
   * @returns GetConsumerGroupSubscriptionResponse
   */
  async getConsumerGroupSubscription(instanceId: string, consumerGroupId: string, topicName: string): Promise<GetConsumerGroupSubscriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerGroupSubscriptionWithOptions(instanceId, consumerGroupId, topicName, headers, runtime);
  }

  /**
   * 查询消费者堆栈信息
   * 
   * @param request - GetConsumerStackRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumerStackResponse
   */
  async getConsumerStackWithOptions(instanceId: string, consumerGroupId: string, request: GetConsumerStackRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetConsumerStackResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConsumerStack",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/consumerGroups/${OpenApiUtil.getEncodeParam(consumerGroupId)}/stack`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetConsumerStackResponse>(await this.callApi(params, req, runtime), new GetConsumerStackResponse({}));
  }

  /**
   * 查询消费者堆栈信息
   * 
   * @param request - GetConsumerStackRequest
   * @returns GetConsumerStackResponse
   */
  async getConsumerStack(instanceId: string, consumerGroupId: string, request: GetConsumerStackRequest): Promise<GetConsumerStackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumerStackWithOptions(instanceId, consumerGroupId, request, headers, runtime);
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
   * 获取实例账号
   * 
   * @param request - GetInstanceAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceAccountResponse
   */
  async getInstanceAccountWithOptions(instanceId: string, request: GetInstanceAccountRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceAccountResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.username)) {
      query["username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceAccount",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/account`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceAccountResponse>(await this.callApi(params, req, runtime), new GetInstanceAccountResponse({}));
  }

  /**
   * 获取实例账号
   * 
   * @param request - GetInstanceAccountRequest
   * @returns GetInstanceAccountResponse
   */
  async getInstanceAccount(instanceId: string, request: GetInstanceAccountRequest): Promise<GetInstanceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceAccountWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 消息详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMessageDetailResponse
   */
  async getMessageDetailWithOptions(instanceId: string, topicName: string, messageId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMessageDetailResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetMessageDetail",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/topics/${OpenApiUtil.getEncodeParam(topicName)}/messages/${OpenApiUtil.getEncodeParam(messageId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMessageDetailResponse>(await this.callApi(params, req, runtime), new GetMessageDetailResponse({}));
  }

  /**
   * 消息详情
   * @returns GetMessageDetailResponse
   */
  async getMessageDetail(instanceId: string, topicName: string, messageId: string): Promise<GetMessageDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMessageDetailWithOptions(instanceId, topicName, messageId, headers, runtime);
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
   * 轨迹查询
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTraceResponse
   */
  async getTraceWithOptions(instanceId: string, topicName: string, messageId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTraceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTrace",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/topics/${OpenApiUtil.getEncodeParam(topicName)}/traces/${OpenApiUtil.getEncodeParam(messageId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTraceResponse>(await this.callApi(params, req, runtime), new GetTraceResponse({}));
  }

  /**
   * 轨迹查询
   * @returns GetTraceResponse
   */
  async getTrace(instanceId: string, topicName: string, messageId: string): Promise<GetTraceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTraceWithOptions(instanceId, topicName, messageId, headers, runtime);
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
   * Queries the subscriptions of a specific consumer group.
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
   * Queries the subscriptions of a specific consumer group.
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
   * 访问控制acl用户列表
   * 
   * @param request - ListInstanceAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceAccountResponse
   */
  async listInstanceAccountWithOptions(instanceId: string, request: ListInstanceAccountRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceAccountResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountStatus)) {
      query["accountStatus"] = request.accountStatus;
    }

    if (!Util.isUnset(request.accountType)) {
      query["accountType"] = request.accountType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.username)) {
      query["username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceAccount",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/accounts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceAccountResponse>(await this.callApi(params, req, runtime), new ListInstanceAccountResponse({}));
  }

  /**
   * 访问控制acl用户列表
   * 
   * @param request - ListInstanceAccountRequest
   * @returns ListInstanceAccountResponse
   */
  async listInstanceAccount(instanceId: string, request: ListInstanceAccountRequest): Promise<ListInstanceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceAccountWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 访问控制acl数据列表
   * 
   * @param request - ListInstanceAclRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceAclResponse
   */
  async listInstanceAclWithOptions(instanceId: string, request: ListInstanceAclRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceAclResponse> {
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
      action: "ListInstanceAcl",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/acl`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceAclResponse>(await this.callApi(params, req, runtime), new ListInstanceAclResponse({}));
  }

  /**
   * 访问控制acl数据列表
   * 
   * @param request - ListInstanceAclRequest
   * @returns ListInstanceAclResponse
   */
  async listInstanceAcl(instanceId: string, request: ListInstanceAclRequest): Promise<ListInstanceAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceAclWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 查询访问控制ip白名单列表
   * 
   * @param request - ListInstanceIpWhitelistRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceIpWhitelistResponse
   */
  async listInstanceIpWhitelistWithOptions(instanceId: string, request: ListInstanceIpWhitelistRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceIpWhitelistResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ipWhitelist)) {
      query["ipWhitelist"] = request.ipWhitelist;
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
      action: "ListInstanceIpWhitelist",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/ip/whitelist`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceIpWhitelistResponse>(await this.callApi(params, req, runtime), new ListInstanceIpWhitelistResponse({}));
  }

  /**
   * 查询访问控制ip白名单列表
   * 
   * @param request - ListInstanceIpWhitelistRequest
   * @returns ListInstanceIpWhitelistResponse
   */
  async listInstanceIpWhitelist(instanceId: string, request: ListInstanceIpWhitelistRequest): Promise<ListInstanceIpWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceIpWhitelistWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries all ApsaraMQ for RocketMQ instances in a specific region.
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
   * Queries all ApsaraMQ for RocketMQ instances in a specific region.
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
   * 查询消息列表
   * 
   * @param request - ListMessagesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMessagesResponse
   */
  async listMessagesWithOptions(instanceId: string, topicName: string, request: ListMessagesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMessagesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.messageId)) {
      query["messageId"] = request.messageId;
    }

    if (!Util.isUnset(request.messageKey)) {
      query["messageKey"] = request.messageKey;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.scrollId)) {
      query["scrollId"] = request.scrollId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMessages",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/topics/${OpenApiUtil.getEncodeParam(topicName)}/messages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMessagesResponse>(await this.callApi(params, req, runtime), new ListMessagesResponse({}));
  }

  /**
   * 查询消息列表
   * 
   * @param request - ListMessagesRequest
   * @returns ListMessagesResponse
   */
  async listMessages(instanceId: string, topicName: string, request: ListMessagesRequest): Promise<ListMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMessagesWithOptions(instanceId, topicName, request, headers, runtime);
  }

  /**
   * Queries regions in which ApsaraMQ for RocketMQ is available.
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
   * Queries regions in which ApsaraMQ for RocketMQ is available.
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegionsWithOptions(headers, runtime);
  }

  /**
   * 查询可见的资源标签关系
   * 
   * @param request - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

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

    if (!Util.isUnset(request.tag)) {
      query["tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/resourceTag/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * 查询可见的资源标签关系
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the subscriptions of a specific topic.
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
   * Queries the subscriptions of a specific topic.
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
   * 轨迹消息列表
   * 
   * @param request - ListTracesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTracesResponse
   */
  async listTracesWithOptions(instanceId: string, topicName: string, request: ListTracesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTracesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.messageId)) {
      query["messageId"] = request.messageId;
    }

    if (!Util.isUnset(request.messageKey)) {
      query["messageKey"] = request.messageKey;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryType)) {
      query["queryType"] = request.queryType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTraces",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/topics/${OpenApiUtil.getEncodeParam(topicName)}/traces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTracesResponse>(await this.callApi(params, req, runtime), new ListTracesResponse({}));
  }

  /**
   * 轨迹消息列表
   * 
   * @param request - ListTracesRequest
   * @returns ListTracesResponse
   */
  async listTraces(instanceId: string, topicName: string, request: ListTracesRequest): Promise<ListTracesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTracesWithOptions(instanceId, topicName, request, headers, runtime);
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
   * 用户创建标签资源关系（用户标签）
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/resourceTag/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * 用户创建标签资源关系（用户标签）
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 用户删除标签资源关系
   * 
   * @param request - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["all"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["tagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/resourceTag/delete`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * 用户删除标签资源关系
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
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
   * 修改访问控制acl用户
   * 
   * @param request - UpdateInstanceAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceAccountResponse
   */
  async updateInstanceAccountWithOptions(instanceId: string, username: string, request: UpdateInstanceAccountRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceAccountResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accountStatus)) {
      query["accountStatus"] = request.accountStatus;
    }

    if (!Util.isUnset(request.password)) {
      query["password"] = request.password;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceAccount",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/accounts/${OpenApiUtil.getEncodeParam(username)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceAccountResponse>(await this.callApi(params, req, runtime), new UpdateInstanceAccountResponse({}));
  }

  /**
   * 修改访问控制acl用户
   * 
   * @param request - UpdateInstanceAccountRequest
   * @returns UpdateInstanceAccountResponse
   */
  async updateInstanceAccount(instanceId: string, username: string, request: UpdateInstanceAccountRequest): Promise<UpdateInstanceAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceAccountWithOptions(instanceId, username, request, headers, runtime);
  }

  /**
   * 删除访问控制acl数据
   * 
   * @param request - UpdateInstanceAclRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceAclResponse
   */
  async updateInstanceAclWithOptions(instanceId: string, username: string, request: UpdateInstanceAclRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceAclResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actions)) {
      body["actions"] = request.actions;
    }

    if (!Util.isUnset(request.decision)) {
      body["decision"] = request.decision;
    }

    if (!Util.isUnset(request.ipWhitelists)) {
      body["ipWhitelists"] = request.ipWhitelists;
    }

    if (!Util.isUnset(request.resourceName)) {
      body["resourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceAcl",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/acl/account/${OpenApiUtil.getEncodeParam(username)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceAclResponse>(await this.callApi(params, req, runtime), new UpdateInstanceAclResponse({}));
  }

  /**
   * 删除访问控制acl数据
   * 
   * @param request - UpdateInstanceAclRequest
   * @returns UpdateInstanceAclResponse
   */
  async updateInstanceAcl(instanceId: string, username: string, request: UpdateInstanceAclRequest): Promise<UpdateInstanceAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceAclWithOptions(instanceId, username, request, headers, runtime);
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

  /**
   * 消费验证
   * 
   * @param request - VerifyConsumeMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyConsumeMessageResponse
   */
  async verifyConsumeMessageWithOptions(instanceId: string, topicName: string, messageId: string, request: VerifyConsumeMessageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VerifyConsumeMessageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientId)) {
      query["clientId"] = request.clientId;
    }

    if (!Util.isUnset(request.consumerGroupId)) {
      query["consumerGroupId"] = request.consumerGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyConsumeMessage",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/topics/${OpenApiUtil.getEncodeParam(topicName)}/messages/${OpenApiUtil.getEncodeParam(messageId)}/action/verifyConsume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VerifyConsumeMessageResponse>(await this.callApi(params, req, runtime), new VerifyConsumeMessageResponse({}));
  }

  /**
   * 消费验证
   * 
   * @param request - VerifyConsumeMessageRequest
   * @returns VerifyConsumeMessageResponse
   */
  async verifyConsumeMessage(instanceId: string, topicName: string, messageId: string, request: VerifyConsumeMessageRequest): Promise<VerifyConsumeMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.verifyConsumeMessageWithOptions(instanceId, topicName, messageId, request, headers, runtime);
  }

  /**
   * 发送消息
   * 
   * @param request - VerifySendMessageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifySendMessageResponse
   */
  async verifySendMessageWithOptions(instanceId: string, topicName: string, request: VerifySendMessageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<VerifySendMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.message)) {
      body["message"] = request.message;
    }

    if (!Util.isUnset(request.messageKey)) {
      body["messageKey"] = request.messageKey;
    }

    if (!Util.isUnset(request.messageTag)) {
      body["messageTag"] = request.messageTag;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "VerifySendMessage",
      version: "2022-08-01",
      protocol: "HTTPS",
      pathname: `/instances/${OpenApiUtil.getEncodeParam(instanceId)}/topics/${OpenApiUtil.getEncodeParam(topicName)}/messages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<VerifySendMessageResponse>(await this.callApi(params, req, runtime), new VerifySendMessageResponse({}));
  }

  /**
   * 发送消息
   * 
   * @param request - VerifySendMessageRequest
   * @returns VerifySendMessageResponse
   */
  async verifySendMessage(instanceId: string, topicName: string, request: VerifySendMessageRequest): Promise<VerifySendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.verifySendMessageWithOptions(instanceId, topicName, request, headers, runtime);
  }

}
