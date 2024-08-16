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
   * @example
   * hgprecn-cn-zvp25ysv3006
   */
  instanceId?: string;
  /**
   * @example
   * rg-acfmxwerqwerasfd
   */
  newResourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      newResourceGroupId: 'newResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      newResourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * AB71198A-2DB1-511B-AE4D-690BAA97F076
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
      data: 'boolean',
      requestId: 'string',
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

export class CreateInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-payment. Default value: true. Valid values:
   * 
   * *   true
   * *   false
   * 
   * > The default value is true. If the balance of your account is insufficient, you can set this parameter to false. In this case, an unpaid order is generated. You can log on to the User Center to pay for the order.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable monthly auto-renewal. Default value: false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PrePaid: subscription
   * *   PostPaid: pay-as-you-go
   * 
   * > This parameter is invalid for shared instances. Shared instances have fixed specifications and are pay-as-you-go instances.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The infrequent access (IA) storage space of the instance. Unit: GB.
   * 
   * > This parameter is invalid for pay-as-you-go instances.
   * 
   * @example
   * 500
   */
  coldStorageSize?: number;
  /**
   * @remarks
   * The instance specifications. Valid values:
   * 
   * *   8-core 32 GB (number of compute nodes: 1)
   * *   16-core 64 GB (number of compute nodes: 1)
   * *   32-core 128 GB (number of compute nodes: 2)
   * *   64-core 256 GB (number of compute nodes: 4)
   * *   96-core 384 GB (number of compute nodes: 6)
   * *   128-core 512 GB (number of compute nodes: 8)
   * *   Others
   * 
   * > 
   * 
   * *   Set this parameter to the number of cores.
   * 
   * *   If you want to set this parameter to specifications with more than 1,024 compute units (CUs), you must submit a ticket.
   * 
   * *   If you want to purchase a shared instance, you do not need to configure this parameter.
   * 
   * *   The specifications of 8-core 32 GB (number of compute nodes: 1) are for trial use only and cannot be used for production.
   * 
   * @example
   * 64
   */
  cpu?: number;
  /**
   * @remarks
   * The validity period of the instance that you want to purchase. For example, you can specify a validity period of two months.
   * 
   * > You do not need to configure this parameter for pay-as-you-go instances.
   * 
   * @example
   * 2
   */
  duration?: number;
  enableServerlessComputing?: boolean;
  /**
   * @remarks
   * The number of gateways. Valid values: 2 to 50.
   * 
   * > This parameter is required only for virtual warehouse instances.
   * 
   * @example
   * 4
   */
  gatewayCount?: number;
  initialDatabases?: string;
  /**
   * @remarks
   * The name of the Hologres instance that you want to purchase. The name must be 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * my_holo
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the instance. Valid values:
   * 
   * *   Standard: general-purpose instance
   * *   Follower: read-only secondary instance
   * *   Warehouse: virtual warehouse instance
   * *   Shared: shared instance
   * 
   * This parameter is required.
   * 
   * @example
   * Standard
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the primary instance. This parameter is required for read-only secondary instances.
   * 
   * > The primary instance and secondary instances must meet the following requirements:
   * 
   * *   The primary instance is in the Running state.
   * 
   * *   The primary instance and secondary instances are deployed in the same region.
   * 
   * *   The primary instance and secondary instances are deployed in the same zone.
   * 
   * *   Less than 10 secondary instances are associated with the primary instance.
   * 
   * *   The primary and secondary instances belong to the same Alibaba Cloud account.
   * 
   * @example
   * hgpostcn-cn-lbj3aworq112
   */
  leaderInstanceId?: string;
  /**
   * @remarks
   * The billing cycle. Valid values:
   * 
   * *   Month
   * *   Hour
   * 
   * > 
   * 
   * *   This parameter can only be set to Month for subscription instances.
   * 
   * *   This parameter can only be set to Hour for pay-as-you-go instances.
   * 
   * *   By default, this parameter is set to Hour for shared instances.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the region. You can go to the [OpenAPI Explorer](https://api.aliyun.com/product/Hologram) or the Usage notes section to view the ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group. If you do not specify this parameter, the default resource group of the account is used.
   * 
   * @example
   * ""
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The standard storage space of the instance. Unit: GB.
   * 
   * > This parameter is invalid for pay-as-you-go instances.
   * 
   * @example
   * 500
   */
  storageSize?: number;
  /**
   * @remarks
   * The ID of the vSwitch. The zone in which the vSwitch resides must be the same as the zone in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-2vccsiymtxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). The region in which the VPC resides must be the same as the region in which the Hologres instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-t4netc3y5xxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone. For more information about how to obtain the ID of the zone, see the Usage notes section.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'autoPay',
      autoRenew: 'autoRenew',
      chargeType: 'chargeType',
      coldStorageSize: 'coldStorageSize',
      cpu: 'cpu',
      duration: 'duration',
      enableServerlessComputing: 'enableServerlessComputing',
      gatewayCount: 'gatewayCount',
      initialDatabases: 'initialDatabases',
      instanceName: 'instanceName',
      instanceType: 'instanceType',
      leaderInstanceId: 'leaderInstanceId',
      pricingCycle: 'pricingCycle',
      regionId: 'regionId',
      resourceGroupId: 'resourceGroupId',
      storageSize: 'storageSize',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      chargeType: 'string',
      coldStorageSize: 'number',
      cpu: 'number',
      duration: 'number',
      enableServerlessComputing: 'boolean',
      gatewayCount: 'number',
      initialDatabases: 'string',
      instanceName: 'string',
      instanceType: 'string',
      leaderInstanceId: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      storageSize: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateInstanceResponseBodyData;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9CC37B9F-F4B4-5FF1-939B-AEE78DC70130
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateInstanceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
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

export class DeleteInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the region in which the Hologres instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned result, which indicates whether the request was successful.
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
  data?: boolean;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status Code
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CB13FFDD-2DF8-5396-A848-2D6A31245B6D
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
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
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

export class DisableHiveAccessRequest extends $tea.Model {
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHiveAccessResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82B7A554-4D00-50DF-95D9-B59E7B4D5489
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableHiveAccessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableHiveAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableHiveAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHiveAccessRequest extends $tea.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHiveAccessResponseBody extends $tea.Model {
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EA8F0084-5831-5907-BB31-BD05D2617844
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableHiveAccessResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableHiveAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableHiveAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code that is returned if the request failed.
   * 
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The information about the instance.
   */
  instance?: GetInstanceResponseBodyInstance;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 865A02C2-B374-5DD4-9B34-0CA15DA1AEBD
   */
  requestId?: string;
  /**
   * @remarks
   * The request result, which indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      instance: 'Instance',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      instance: GetInstanceResponseBodyInstance,
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

export class GetWarehouseDetailResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D3AE84AB-0873-5FC7-A4C4-8CF869D2FA70
   */
  requestId?: string;
  /**
   * @remarks
   * The values returned.
   */
  warehouseDetail?: GetWarehouseDetailResponseBodyWarehouseDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      warehouseDetail: 'WarehouseDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      warehouseDetail: GetWarehouseDetailResponseBodyWarehouseDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarehouseDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWarehouseDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWarehouseDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  cmsInstanceType?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmvscak73zmby
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags to add to the resource.
   */
  tag?: ListInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      cmsInstanceType: 'cmsInstanceType',
      resourceGroupId: 'resourceGroupId',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cmsInstanceType: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The list of queried instances.
   */
  instanceList?: ListInstancesResponseBodyInstanceList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D1303CD4-AA70-5998-8025-F55B22C50840
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      instanceList: 'InstanceList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      instanceList: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstanceList },
      requestId: 'string',
      success: 'string',
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

export class ListWarehousesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of virtual warehouse instances.
   */
  warehouseList?: ListWarehousesResponseBodyWarehouseList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819A7F0F-2951-540F-BD94-6A41ECF0281F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      warehouseList: 'WarehouseList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warehouseList: { 'type': 'array', 'itemType': ListWarehousesResponseBodyWarehouseList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarehousesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWarehousesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWarehousesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable monthly auto-renewal. The default value is false. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  If you enable auto-renewal for an instance for which auto-renewal is enabled, an error is reported.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The renewal duration. Unit: month.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'autoRenew',
      duration: 'duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      duration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: RenewInstanceResponseBodyData;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D3AE84AB-0873-5FC7-A4C4-8CF869D2FA70
   */
  requestId?: string;
  /**
   * @remarks
   * The request result, which indicates whether the request was successful.
   * 
   * @example
   * false
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RenewInstanceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenewInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the operation was successful.
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
  data?: boolean;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36291497-CDB0-53DC-8CD7-762E054F57A6
   */
  requestId?: string;
  /**
   * @remarks
   * The request result, which indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned result, which indicates whether the operation was successful.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D3AE84AB-0873-5FC7-A4C4-8CF869D2FA70
   */
  requestId?: string;
  /**
   * @remarks
   * The request result, which indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResumeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResumeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The infrequent access (IA) storage space of the instance. Unit: GB.
   * 
   * > Ignore this parameter for pay-as-you-go instances.
   * 
   * @example
   * 1000G
   */
  coldStorageSize?: number;
  /**
   * @remarks
   * The specifications of the instance. Valid values:
   * 
   * *   8-core 32GB (number of compute nodes: 1)
   * *   16-core 64GB (number of compute nodes: 1)
   * *   32-core 128GB (number of compute nodes: 2)
   * *   64-core 256GB (number of compute nodes: 4)
   * *   96-core 384GB (number of compute nodes: 6)
   * *   128-core 512GB (number of compute nodes: 8)
   * *   Others
   * 
   * > 
   * 
   * *   Set this parameter to the number of cores.
   * 
   * *   If you want to set this parameter to specifications with more than 1,024 compute units (CUs), you must submit a ticket.
   * 
   * *   This parameter is invalid for Hologres Shared Cluster instances.
   * 
   * *   The specifications of 8-core 32GB (number of compute nodes: 1) are for trial use only and cannot be used for production.
   * 
   * @example
   * 128
   */
  cpu?: number;
  enableServerlessComputing?: boolean;
  /**
   * @remarks
   * The number of gateways. Valid values: 2 to 50.
   * 
   * > This parameter is required only for virtual warehouse instances.
   * 
   * @example
   * 4
   */
  gatewayCount?: number;
  /**
   * @remarks
   * The specification change type. Valid values:
   * 
   * *   UPGRADE
   * *   DOWNGRADE
   * 
   * > 
   * 
   * *   If you set this parameter to UPGRADE, the new specifications must be higher than the original specifications. You must configure at least one of the cpu, storageSize, and coldStorageSize parameters. If you leave a parameter empty, the related configuration remains unchanged.
   * 
   * *   If you set this parameter to DOWNGRADE, the new specifications must be lower than the original specifications. You must configure at least one of the cpu, storageSize, and coldStorageSize parameters. If you leave a parameter empty, the related configuration remains unchanged.
   * 
   * This parameter is required.
   * 
   * @example
   * UPGRADE
   */
  scaleType?: string;
  /**
   * @remarks
   * The standard storage space of the instance. Unit: GB.
   * 
   * > Ignore this parameter for pay-as-you-go instances.
   * 
   * @example
   * 1000G
   */
  storageSize?: number;
  static names(): { [key: string]: string } {
    return {
      coldStorageSize: 'coldStorageSize',
      cpu: 'cpu',
      enableServerlessComputing: 'enableServerlessComputing',
      gatewayCount: 'gatewayCount',
      scaleType: 'scaleType',
      storageSize: 'storageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldStorageSize: 'number',
      cpu: 'number',
      enableServerlessComputing: 'boolean',
      gatewayCount: 'number',
      scaleType: 'string',
      storageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ScaleInstanceResponseBodyData;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D3AE84AB-0873-5FC7-A4C4-8CF869D2FA70
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ScaleInstanceResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScaleInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScaleInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned result, which indicates whether the operation was successful.
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
  data?: boolean;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2A8DEF6E-067E-5DB0-BAE1-2894266E6C6A
   */
  requestId?: string;
  /**
   * @remarks
   * The request result, which indicates whether the request was successful.
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
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceNameRequest extends $tea.Model {
  /**
   * @remarks
   * The new name of the instance.
   * 
   * @example
   * new_name
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'instanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceNameResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned result, which indicates whether the operation was successful.
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
  data?: boolean;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C6B55032-D41A-5FE0-9C07-8BD81C88422E
   */
  requestId?: string;
  /**
   * @remarks
   * The request result, which indicates whether the request was successful.
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
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceNetworkTypeRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to change the network type from AnyTunnel to SingleTunnel. This parameter is invalid for new instances. For new instances, this parameter is set to null by default.
   * 
   * Valid values:
   * 
   * *   others/null
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   true
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
  anyTunnelToSingleTunnel?: string;
  /**
   * @remarks
   * A list of network types that you want to enable. The list of enabled network types is randomly ordered. For example, the Internet, internal network, and VPCSingleTunnel network types are enabled. If you want to disable the Internet type, set this parameter to Intranet,VPCSingleTunnel.
   * 
   * @example
   * Internet,VPCSingleTunnel
   */
  networkTypes?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2vccsiymtqr9aavew0vo3
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the instance belongs.
   * 
   * @example
   * vpc-t4netc3y5etlondfb5ra7
   */
  vpcId?: string;
  /**
   * @remarks
   * The owner ID of the VPC, which is the ID of the Alibaba Cloud account.
   * 
   * @example
   * 1999365732646672
   */
  vpcOwnerId?: string;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      anyTunnelToSingleTunnel: 'anyTunnelToSingleTunnel',
      networkTypes: 'networkTypes',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
      vpcOwnerId: 'vpcOwnerId',
      vpcRegionId: 'vpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anyTunnelToSingleTunnel: 'string',
      networkTypes: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcOwnerId: 'string',
      vpcRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceNetworkTypeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned result, which indicates whether the operation was successful.
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
  data?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 404
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Internal server error.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9CC37B9F-F4B4-5FF1-939B-AEE78DC70130
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceNetworkTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceNetworkTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceNetworkTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * InvalidVpcOrVSwitch.NotAvailable
   */
  code?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgpostcn-cn-xxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The error details.
   */
  message?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 217523224780172
   */
  orderId?: string;
  /**
   * @remarks
   * Indicates whether the instance was created.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
      orderId: 'OrderId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
      orderId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceEndpoints extends $tea.Model {
  /**
   * @remarks
   * The endpoint. This parameter is returned if both the AnyTunnel and SingleTunnel modes are enabled for an instance, and the instance is switched from the AnyTunnel mode to the SingleTunnel mode. In this case, two endpoints are returned.
   * 
   * @example
   * hgprecn-cn-uqm362o1b001-cn-hangzhou-internal.hologres.aliyuncs.com:80
   */
  alternativeEndpoints?: string;
  /**
   * @remarks
   * Indicates whether the network is enabled.
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
  enabled?: boolean;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * hgprecn-cn-uqm362o1b001-cn-hangzhou-internal.hologres.aliyuncs.com:80
   */
  endpoint?: string;
  /**
   * @remarks
   * The network type.
   * 
   * Valid values:
   * 
   * *   VPCSingleTunnel
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     virtual private cloud (VPC)
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Intranet
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     internal network
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   VPCAnyTunnel
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     not supported by new instances
   * 
   *     <!-- -->
   * 
   * *   Internet
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Internet
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * Internet
   */
  type?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1jqwp2ys6kp7tc9t983
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the instance belongs.
   * 
   * @example
   * vpc-uf66jjber3hgvwhki3wna
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the instance that is deployed in the VPC.
   * 
   * @example
   * hgprecn-cn-uqm362o1b001-frontend-st
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      alternativeEndpoints: 'AlternativeEndpoints',
      enabled: 'Enabled',
      endpoint: 'Endpoint',
      type: 'Type',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alternativeEndpoints: 'string',
      enabled: 'boolean',
      endpoint: 'string',
      type: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceTags extends $tea.Model {
  /**
   * @remarks
   * The key of tag N.
   * 
   * @example
   * tag
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N.
   * 
   * @example
   * value
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

export class GetInstanceResponseBodyInstance extends $tea.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled.
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
  autoRenewal?: string;
  /**
   * @remarks
   * The cold storage capacity of the instance. Unit: GB. Standard SSD is used for hot storage, and HDD is used for cold storage.
   * 
   * @example
   * 800
   */
  coldStorage?: number;
  /**
   * @remarks
   * The commodity code.
   * 
   * Valid values:
   * 
   * *   hologram_maxcomputeAccelerate_public_cn
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     China site/Lakehouse Acceleration Edition
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   hologram_combo_public_cn
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     China site/Subscription
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   hologram_prepay_public_intl
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     International site/Subscription
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   hologram_storage_dp_cn
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     China site/Storage plan
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   hologram_postpay_public_cn
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     China site/Pay-as-you-go
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   hologram_postpay_public_intl
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     International site/Pay-as-you-go
   * 
   *     <!-- -->
   * 
   * *   hologram_maxcomputeAccelerate_public_intl
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     International site/Lakehouse Acceleration Edition
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   hologram_cu_dp_cn
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     China site/Compute plan
   * 
   *     <!-- -->
   * 
   * @example
   * hologram_combo_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The number of compute nodes. In a typical configuration, a node has 16 CPU cores and 32 GB of memory.
   * 
   * @example
   * 2
   */
  computeNodeCount?: number;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 32
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2021-02-03T13:06:06Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The amount of data that can be stored in the disk of the Standard storage class. Unit: GB.
   * 
   * @example
   * 500
   */
  disk?: string;
  /**
   * @remarks
   * Indicates whether data lake acceleration is enabled.
   * 
   * @example
   * true
   */
  enableHiveAccess?: string;
  enableServerless?: boolean;
  /**
   * @remarks
   * The list of endpoints.
   */
  endpoints?: GetInstanceResponseBodyInstanceEndpoints[];
  /**
   * @remarks
   * The expiration time. This parameter is invalid for pay-as-you-go instances.
   * 
   * @example
   * 2021-02-03T13:06:06Z
   */
  expirationTime?: string;
  /**
   * @remarks
   * The number of gateway nodes.
   * 
   * @example
   * 2
   */
  gatewayCount?: number;
  /**
   * @remarks
   * The number of CPU cores of the gateway. Unit: core.
   * 
   * @example
   * 4
   */
  gatewayCpu?: number;
  /**
   * @remarks
   * The size of memory resources of the gateway. Unit: GB.
   * 
   * @example
   * 16
   */
  gatewayMemory?: number;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * Valid values:
   * 
   * *   PostPaid
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     pay-as-you-go
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   PrePaid
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     subscription
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgpostcn-cn-tl32s6cgw00b
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name. The instance name must be 2 to 64 characters in length.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The owner of the instance.
   * 
   * @example
   * 12345678900000
   */
  instanceOwner?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Suspended
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Allocating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * Valid values:
   * 
   * *   Follower
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     read-only secondary instance
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Standard
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     normal instance
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * Standard
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the primary instance.
   * 
   * @example
   * hgpostcn-cn-i7m2ncd6w002
   */
  leaderInstanceId?: string;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 128
   */
  memory?: number;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  replicaRole?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzuq7hpybze2i
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The reason for the suspension.
   * 
   * Valid values:
   * 
   * *   Indebet
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instance has an overdue payment
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Manual
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instance is manually suspended
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Overdue
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instance has expired
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * Manual
   */
  suspendReason?: string;
  /**
   * @remarks
   * The instance tag.
   */
  tags?: GetInstanceResponseBodyInstanceTags[];
  /**
   * @remarks
   * The instance version.
   * 
   * @example
   * r1.3.37
   */
  version?: string;
  /**
   * @remarks
   * The ID of the zone where the instance resides.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      coldStorage: 'ColdStorage',
      commodityCode: 'CommodityCode',
      computeNodeCount: 'ComputeNodeCount',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      disk: 'Disk',
      enableHiveAccess: 'EnableHiveAccess',
      enableServerless: 'EnableServerless',
      endpoints: 'Endpoints',
      expirationTime: 'ExpirationTime',
      gatewayCount: 'GatewayCount',
      gatewayCpu: 'GatewayCpu',
      gatewayMemory: 'GatewayMemory',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceOwner: 'InstanceOwner',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      leaderInstanceId: 'LeaderInstanceId',
      memory: 'Memory',
      regionId: 'RegionId',
      replicaRole: 'ReplicaRole',
      resourceGroupId: 'ResourceGroupId',
      suspendReason: 'SuspendReason',
      tags: 'Tags',
      version: 'Version',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'string',
      coldStorage: 'number',
      commodityCode: 'string',
      computeNodeCount: 'number',
      cpu: 'number',
      creationTime: 'string',
      disk: 'string',
      enableHiveAccess: 'string',
      enableServerless: 'boolean',
      endpoints: { 'type': 'array', 'itemType': GetInstanceResponseBodyInstanceEndpoints },
      expirationTime: 'string',
      gatewayCount: 'number',
      gatewayCpu: 'number',
      gatewayMemory: 'number',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceOwner: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      leaderInstanceId: 'string',
      memory: 'number',
      regionId: 'string',
      replicaRole: 'string',
      resourceGroupId: 'string',
      suspendReason: 'string',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyInstanceTags },
      version: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarehouseDetailResponseBodyWarehouseDetailWarehouseList extends $tea.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 32
   */
  cpu?: number;
  defaultWarehouse?: boolean;
  elasticCpu?: number;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The memory capacity.
   * 
   * @example
   * 128
   */
  mem?: number;
  /**
   * @remarks
   * The name of the virtual warehouse instance.
   * 
   * @example
   * MyWarehouse
   */
  name?: string;
  /**
   * @remarks
   * The number of compute nodes.
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  rebalanceStatus?: string;
  /**
   * @remarks
   * The status.
   * 
   * Valid values:
   * 
   * *   kRunning
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kSuspended
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kInit
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kAllocating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * kRunning
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      defaultWarehouse: 'DefaultWarehouse',
      elasticCpu: 'ElasticCpu',
      id: 'Id',
      mem: 'Mem',
      name: 'Name',
      nodeCount: 'NodeCount',
      rebalanceStatus: 'RebalanceStatus',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      defaultWarehouse: 'boolean',
      elasticCpu: 'number',
      id: 'number',
      mem: 'number',
      name: 'string',
      nodeCount: 'number',
      rebalanceStatus: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWarehouseDetailResponseBodyWarehouseDetail extends $tea.Model {
  /**
   * @remarks
   * The remaining unallocated computing resources of the virtual warehouse instance.
   * 
   * @example
   * 32
   */
  remainingCpu?: string;
  /**
   * @remarks
   * The reserved computing resources. The amount of computing resources in all running virtual warehouses in an instance cannot exceed the amount of reserved computing resources in the virtual warehouses.
   * 
   * @example
   * 64
   */
  reservedCpu?: string;
  timedElasticCpu?: string;
  /**
   * @remarks
   * The list of virtual warehouses.
   */
  warehouseList?: GetWarehouseDetailResponseBodyWarehouseDetailWarehouseList[];
  static names(): { [key: string]: string } {
    return {
      remainingCpu: 'RemainingCpu',
      reservedCpu: 'ReservedCpu',
      timedElasticCpu: 'TimedElasticCpu',
      warehouseList: 'WarehouseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainingCpu: 'string',
      reservedCpu: 'string',
      timedElasticCpu: 'string',
      warehouseList: { 'type': 'array', 'itemType': GetWarehouseDetailResponseBodyWarehouseDetailWarehouseList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * mytag
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class ListInstancesResponseBodyInstanceListEndpoints extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the endpoint is enabled.
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
  enabled?: boolean;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * hgpostcn-cn-aaab9ad2d8fb-cn-hangzhou-internal.hologres.aliyuncs.com:80
   */
  endpoint?: string;
  /**
   * @remarks
   * The network type.
   * 
   * Valid values:
   * 
   * *   VPCSingleTunnel
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     virtual private cloud (VPC)
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Intranet
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     internal network
   * 
   *     <!-- -->
   * 
   * *   VPCAnyTunnel
   * 
   *     <!-- -->
   * 
   *     : This value is not supported by new instances
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Internet
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Internet
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * Internet
   */
  type?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-wz9oap28raidjevhuszg4
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf6mrahzyu7uorlqqpz5f
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the instance belongs.
   * 
   * @example
   * hgpostcn-cn-wwo3665tx004-frontend-st
   */
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      endpoint: 'Endpoint',
      type: 'Type',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      endpoint: 'string',
      type: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstanceListTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
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

export class ListInstancesResponseBodyInstanceList extends $tea.Model {
  /**
   * @remarks
   * The commodity code, which is the same as that on the Billing Management page.
   * 
   * @example
   * hologram_postpay_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2022-12-16T02:24:05Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether lakehouse acceleration is enabled.
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
  enableHiveAccess?: string;
  /**
   * @remarks
   * The list of endpoints.
   */
  endpoints?: ListInstancesResponseBodyInstanceListEndpoints[];
  /**
   * @remarks
   * The time when the cluster expires.
   * 
   * @example
   * 2023-05-04T16:00:00.000Z
   */
  expirationTime?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * Valid values:
   * 
   * *   PostPaid
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     pay-as-you-go
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   PrePaid
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     subscription
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgpostcn-cn-aaab9ad2d8fb
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test_instance
   */
  instanceName?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Suspended
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Allocating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * Valid values:
   * 
   * *   Follower
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     read-only secondary instance
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Standard
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     normal instance
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * Standard
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the primary instance.
   * 
   * @example
   * hgprecn-cn-2r42sqvxm006
   */
  leaderInstanceId?: string;
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmvscak73zmby
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The reason for the suspension.
   * 
   * @example
   * Manual
   */
  suspendReason?: string;
  /**
   * @remarks
   * The tags that are added to the resource.
   */
  tags?: ListInstancesResponseBodyInstanceListTags[];
  /**
   * @remarks
   * The version of the cluster.
   * 
   * @example
   * 1.3.37
   */
  version?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      creationTime: 'CreationTime',
      enableHiveAccess: 'EnableHiveAccess',
      endpoints: 'Endpoints',
      expirationTime: 'ExpirationTime',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      leaderInstanceId: 'LeaderInstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      suspendReason: 'SuspendReason',
      tags: 'Tags',
      version: 'Version',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      creationTime: 'string',
      enableHiveAccess: 'string',
      endpoints: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstanceListEndpoints },
      expirationTime: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      leaderInstanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      suspendReason: 'string',
      tags: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstanceListTags },
      version: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWarehousesResponseBodyWarehouseList extends $tea.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 32
   */
  cpu?: number;
  /**
   * @remarks
   * The ID.
   * 
   * @example
   * 3
   */
  id?: number;
  /**
   * @remarks
   * The memory capacity.
   * 
   * @example
   * 128
   */
  mem?: number;
  /**
   * @remarks
   * The name of the virtual warehouse instance.
   * 
   * @example
   * MyWarehouse
   */
  name?: string;
  /**
   * @remarks
   * The number of compute nodes.
   * 
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @remarks
   * The status.
   * 
   * Valid values:
   * 
   * *   kRunning
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kSuspended
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kInit
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   kAllocating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * kRunning
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      id: 'Id',
      mem: 'Mem',
      name: 'Name',
      nodeCount: 'NodeCount',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      id: 'number',
      mem: 'number',
      name: 'string',
      nodeCount: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * InvalidChargeType.UnRenewable
   */
  code?: string;
  /**
   * @remarks
   * The error details.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 221625608580893
   */
  orderId?: string;
  /**
   * @remarks
   * Indicates whether the renewal was successful.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      orderId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleInstanceResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * InvalidScaleType.Unsupported
   */
  code?: string;
  /**
   * @remarks
   * The error details.
   * 
   * @example
   * null
   */
  message?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 219183853450000
   */
  orderId?: string;
  /**
   * @remarks
   * Indicates whether the change to specifications was successful.
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
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      orderId: 'string',
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
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("hologram", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 更改资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.newResourceGroupId)) {
      body["newResourceGroupId"] = request.newResourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/tag/changeResourceGroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  /**
   * 更改资源组
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
   * Creates a Hologres instance.
   * 
   * @remarks
   * > Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
   * *   For more information about the billing details of Hologres, see [Pricing](https://www.alibabacloud.com/help/en/hologres/developer-reference/api-hologram-2022-06-01-createinstance).
   * *   When you purchase a Hologres instance, you must specify the region and zone in which the Hologres instance resides. A region may correspond to multiple zones. Example:
   * <!---->
   *     cn-hangzhou: cn-hangzhou-h, cn-hangzhou-j
   *        cn-shanghai: cn-shanghai-e, cn-shanghai-f
   *        cn-beijing: cn-beijing-i, cn-beijing-g
   *        cn-zhangjiakou: cn-zhangjiakou-b
   *        cn-shenzhen: cn-shenzhen-e
   *        cn-hongkong: cn-hongkong-b
   *        cn-shanghai-finance-1: cn-shanghai-finance-1z
   *        ap-northeast-1: ap-northeast-1a
   *        ap-southeast-1: ap-southeast-1c
   *        ap-southeast-3: ap-southeast-3b
   *        ap-southeast-5: ap-southeast-5b
   *        ap-south-1: ap-south-1b
   *        eu-central-1: eu-central-1a
   *        us-east-1: us-east-1a
   *        us-west-1: us-west-1b
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoPay)) {
      body["autoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      body["autoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.chargeType)) {
      body["chargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.coldStorageSize)) {
      body["coldStorageSize"] = request.coldStorageSize;
    }

    if (!Util.isUnset(request.cpu)) {
      body["cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.duration)) {
      body["duration"] = request.duration;
    }

    if (!Util.isUnset(request.enableServerlessComputing)) {
      body["enableServerlessComputing"] = request.enableServerlessComputing;
    }

    if (!Util.isUnset(request.gatewayCount)) {
      body["gatewayCount"] = request.gatewayCount;
    }

    if (!Util.isUnset(request.initialDatabases)) {
      body["initialDatabases"] = request.initialDatabases;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["instanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.leaderInstanceId)) {
      body["leaderInstanceId"] = request.leaderInstanceId;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      body["pricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.regionId)) {
      body["regionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.storageSize)) {
      body["storageSize"] = request.storageSize;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      body["vSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["vpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["zoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  /**
   * Creates a Hologres instance.
   * 
   * @remarks
   * > Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
   * *   For more information about the billing details of Hologres, see [Pricing](https://www.alibabacloud.com/help/en/hologres/developer-reference/api-hologram-2022-06-01-createinstance).
   * *   When you purchase a Hologres instance, you must specify the region and zone in which the Hologres instance resides. A region may correspond to multiple zones. Example:
   * <!---->
   *     cn-hangzhou: cn-hangzhou-h, cn-hangzhou-j
   *        cn-shanghai: cn-shanghai-e, cn-shanghai-f
   *        cn-beijing: cn-beijing-i, cn-beijing-g
   *        cn-zhangjiakou: cn-zhangjiakou-b
   *        cn-shenzhen: cn-shenzhen-e
   *        cn-hongkong: cn-hongkong-b
   *        cn-shanghai-finance-1: cn-shanghai-finance-1z
   *        ap-northeast-1: ap-northeast-1a
   *        ap-southeast-1: ap-southeast-1c
   *        ap-southeast-3: ap-southeast-3b
   *        ap-southeast-5: ap-southeast-5b
   *        ap-south-1: ap-south-1b
   *        eu-central-1: eu-central-1a
   *        us-east-1: us-east-1a
   *        us-west-1: us-west-1b
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
   * Deletes a Hologres instance.
   * 
   * @remarks
   * > Before you call this operation, read the documentation and make sure that you understand the prerequisites and impacts of this operation.
   * *   After you delete a Hologres instance, data and objects in the instance cannot be restored. Proceed with caution. For more information, see [Billing overview](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview#section-h6a-x58-jc0).
   * *   You can delete only pay-as-you-go instances.
   * *   If you want to unsubscribe from a subscription instance, submit a ticket.[](https://help.aliyun.com/document_detail/150284.html#section-ogc-9vc-858)
   * 
   * @param request - DeleteInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(instanceId: string, request: DeleteInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(instanceId)}/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  /**
   * Deletes a Hologres instance.
   * 
   * @remarks
   * > Before you call this operation, read the documentation and make sure that you understand the prerequisites and impacts of this operation.
   * *   After you delete a Hologres instance, data and objects in the instance cannot be restored. Proceed with caution. For more information, see [Billing overview](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview#section-h6a-x58-jc0).
   * *   You can delete only pay-as-you-go instances.
   * *   If you want to unsubscribe from a subscription instance, submit a ticket.[](https://help.aliyun.com/document_detail/150284.html#section-ogc-9vc-858)
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(instanceId: string, request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 关闭数据湖加速
   * 
   * @param request - DisableHiveAccessRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableHiveAccessResponse
   */
  async disableHiveAccessWithOptions(instanceId: string, request: DisableHiveAccessRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DisableHiveAccessResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableHiveAccess",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(instanceId)}/disableHiveAccess`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DisableHiveAccessResponse>(await this.callApi(params, req, runtime), new DisableHiveAccessResponse({}));
  }

  /**
   * 关闭数据湖加速
   * 
   * @param request - DisableHiveAccessRequest
   * @returns DisableHiveAccessResponse
   */
  async disableHiveAccess(instanceId: string, request: DisableHiveAccessRequest): Promise<DisableHiveAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableHiveAccessWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 打开数据湖加速
   * 
   * @param request - EnableHiveAccessRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableHiveAccessResponse
   */
  async enableHiveAccessWithOptions(instanceId: string, request: EnableHiveAccessRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EnableHiveAccessResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableHiveAccess",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(instanceId)}/enableHiveAccess`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<EnableHiveAccessResponse>(await this.callApi(params, req, runtime), new EnableHiveAccessResponse({}));
  }

  /**
   * 打开数据湖加速
   * 
   * @param request - EnableHiveAccessRequest
   * @returns EnableHiveAccessResponse
   */
  async enableHiveAccess(instanceId: string, request: EnableHiveAccessRequest): Promise<EnableHiveAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableHiveAccessWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Obtains the details of an instance.
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
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(instanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  /**
   * Obtains the details of an instance.
   * @returns GetInstanceResponse
   */
  async getInstance(instanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries details of a virtual warehouse instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWarehouseDetailResponse
   */
  async getWarehouseDetailWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetWarehouseDetailResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetWarehouseDetail",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(instanceId)}/getWarehouseDetail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetWarehouseDetailResponse>(await this.callApi(params, req, runtime), new GetWarehouseDetailResponse({}));
  }

  /**
   * Queries details of a virtual warehouse instance.
   * @returns GetWarehouseDetailResponse
   */
  async getWarehouseDetail(instanceId: string): Promise<GetWarehouseDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWarehouseDetailWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries a list of instances.
   * 
   * @param request - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cmsInstanceType)) {
      body["cmsInstanceType"] = request.cmsInstanceType;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      body["tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  /**
   * Queries a list of instances.
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
   * Queries the list of virtual warehouse instances.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWarehousesResponse
   */
  async listWarehousesWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListWarehousesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListWarehouses",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(instanceId)}/listWarehouses`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListWarehousesResponse>(await this.callApi(params, req, runtime), new ListWarehousesResponse({}));
  }

  /**
   * Queries the list of virtual warehouse instances.
   * @returns ListWarehousesResponse
   */
  async listWarehouses(instanceId: string): Promise<ListWarehousesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWarehousesWithOptions(instanceId, headers, runtime);
  }

  /**
   * Manually renews a Hologres instance. You can enable monthly auto-renewal when you renew a Hologres instance.
   * 
   * @remarks
   * > Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
   * *   For more information about billing details of Hologres, see [Pricing](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview).
   * *   For more information about how to renew a Hologres instance, see [Manage renewals](https://www.alibabacloud.com/help/en/hologres/product-overview/manage-renewals?spm=a2c63.p38356.0.0.73f27c8d1Q0FUi).
   * *   You can renew only subscription instances.
   * 
   * @param request - RenewInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewInstanceResponse
   */
  async renewInstanceWithOptions(instanceId: string, request: RenewInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoRenew)) {
      body["autoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.duration)) {
      body["duration"] = request.duration;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenewInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(instanceId)}/renew`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RenewInstanceResponse>(await this.callApi(params, req, runtime), new RenewInstanceResponse({}));
  }

  /**
   * Manually renews a Hologres instance. You can enable monthly auto-renewal when you renew a Hologres instance.
   * 
   * @remarks
   * > Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
   * *   For more information about billing details of Hologres, see [Pricing](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview).
   * *   For more information about how to renew a Hologres instance, see [Manage renewals](https://www.alibabacloud.com/help/en/hologres/product-overview/manage-renewals?spm=a2c63.p38356.0.0.73f27c8d1Q0FUi).
   * *   You can renew only subscription instances.
   * 
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(instanceId: string, request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renewInstanceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 重启实例
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstanceResponse
   */
  async restartInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestartInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RestartInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(instanceId)}/restart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RestartInstanceResponse>(await this.callApi(params, req, runtime), new RestartInstanceResponse({}));
  }

  /**
   * 重启实例
   * @returns RestartInstanceResponse
   */
  async restartInstance(instanceId: string): Promise<RestartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Resumes a suspended instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeInstanceResponse
   */
  async resumeInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResumeInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ResumeInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(instanceId)}/resume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ResumeInstanceResponse>(await this.callApi(params, req, runtime), new ResumeInstanceResponse({}));
  }

  /**
   * Resumes a suspended instance.
   * @returns ResumeInstanceResponse
   */
  async resumeInstance(instanceId: string): Promise<ResumeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Changes the specifications and storage space of a Hologres instance.
   * 
   * @remarks
   * > Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
   * *   For more information about the billing of Hologres, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview).
   * *   During the change of computing resource specifications of a Hologres instance, the instance is unavailable. During the change of storage resource specifications of a Hologres instance, the instance can work normally. Do not frequently change instance specifications. For more information, see [Upgrade or downgrade instance specifications](https://www.alibabacloud.com/help/en/hologres/product-overview/upgrade-or-downgrade-instance-specifications).
   * 
   * @param request - ScaleInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleInstanceResponse
   */
  async scaleInstanceWithOptions(instanceId: string, request: ScaleInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ScaleInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.coldStorageSize)) {
      body["coldStorageSize"] = request.coldStorageSize;
    }

    if (!Util.isUnset(request.cpu)) {
      body["cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.enableServerlessComputing)) {
      body["enableServerlessComputing"] = request.enableServerlessComputing;
    }

    if (!Util.isUnset(request.gatewayCount)) {
      body["gatewayCount"] = request.gatewayCount;
    }

    if (!Util.isUnset(request.scaleType)) {
      body["scaleType"] = request.scaleType;
    }

    if (!Util.isUnset(request.storageSize)) {
      body["storageSize"] = request.storageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ScaleInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(instanceId)}/scale`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ScaleInstanceResponse>(await this.callApi(params, req, runtime), new ScaleInstanceResponse({}));
  }

  /**
   * Changes the specifications and storage space of a Hologres instance.
   * 
   * @remarks
   * > Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
   * *   For more information about the billing of Hologres, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview).
   * *   During the change of computing resource specifications of a Hologres instance, the instance is unavailable. During the change of storage resource specifications of a Hologres instance, the instance can work normally. Do not frequently change instance specifications. For more information, see [Upgrade or downgrade instance specifications](https://www.alibabacloud.com/help/en/hologres/product-overview/upgrade-or-downgrade-instance-specifications).
   * 
   * @param request - ScaleInstanceRequest
   * @returns ScaleInstanceResponse
   */
  async scaleInstance(instanceId: string, request: ScaleInstanceRequest): Promise<ScaleInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleInstanceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 暂停实例
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(instanceId)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopInstanceResponse>(await this.callApi(params, req, runtime), new StopInstanceResponse({}));
  }

  /**
   * 暂停实例
   * @returns StopInstanceResponse
   */
  async stopInstance(instanceId: string): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Changes the name of an instance.
   * 
   * @param request - UpdateInstanceNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceNameWithOptions(instanceId: string, request: UpdateInstanceNameRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceNameResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceName",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(instanceId)}/instanceName`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceNameResponse>(await this.callApi(params, req, runtime), new UpdateInstanceNameResponse({}));
  }

  /**
   * Changes the name of an instance.
   * 
   * @param request - UpdateInstanceNameRequest
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceName(instanceId: string, request: UpdateInstanceNameRequest): Promise<UpdateInstanceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceNameWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Modifies the network configuration of an instance.
   * 
   * @param request - UpdateInstanceNetworkTypeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceNetworkTypeResponse
   */
  async updateInstanceNetworkTypeWithOptions(instanceId: string, request: UpdateInstanceNetworkTypeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceNetworkTypeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.anyTunnelToSingleTunnel)) {
      body["anyTunnelToSingleTunnel"] = request.anyTunnelToSingleTunnel;
    }

    if (!Util.isUnset(request.networkTypes)) {
      body["networkTypes"] = request.networkTypes;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      body["vSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["vpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcOwnerId)) {
      body["vpcOwnerId"] = request.vpcOwnerId;
    }

    if (!Util.isUnset(request.vpcRegionId)) {
      body["vpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceNetworkType",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${OpenApiUtil.getEncodeParam(instanceId)}/network`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceNetworkTypeResponse>(await this.callApi(params, req, runtime), new UpdateInstanceNetworkTypeResponse({}));
  }

  /**
   * Modifies the network configuration of an instance.
   * 
   * @param request - UpdateInstanceNetworkTypeRequest
   * @returns UpdateInstanceNetworkTypeResponse
   */
  async updateInstanceNetworkType(instanceId: string, request: UpdateInstanceNetworkTypeRequest): Promise<UpdateInstanceNetworkTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceNetworkTypeWithOptions(instanceId, request, headers, runtime);
  }

}
