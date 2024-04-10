// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ChangeResourceGroupRequest extends $tea.Model {
  instanceId?: string;
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
  data?: boolean;
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
  autoPay?: boolean;
  autoRenew?: boolean;
  chargeType?: string;
  coldStorageSize?: number;
  cpu?: number;
  duration?: number;
  enableServerlessComputing?: boolean;
  gatewayCount?: number;
  initialDatabases?: string;
  instanceName?: string;
  instanceType?: string;
  leaderInstanceId?: string;
  pricingCycle?: string;
  regionId?: string;
  resourceGroupId?: string;
  storageSize?: number;
  vSwitchId?: string;
  vpcId?: string;
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
  data?: CreateInstanceResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: string;
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
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
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: string;
  instance?: GetInstanceResponseBodyInstance;
  requestId?: string;
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
  requestId?: string;
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
  resourceGroupId?: string;
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
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: string;
  instanceList?: ListInstancesResponseBodyInstanceList[];
  requestId?: string;
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
  warehouseList?: ListWarehousesResponseBodyWarehouseList[];
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
  autoRenew?: boolean;
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
  data?: RenewInstanceResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
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
  coldStorageSize?: number;
  cpu?: number;
  enableServerlessComputing?: boolean;
  gatewayCount?: number;
  scaleType?: string;
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
  data?: ScaleInstanceResponseBodyData;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: string;
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
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
  data?: boolean;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
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
  anyTunnelToSingleTunnel?: string;
  networkTypes?: string;
  vSwitchId?: string;
  vpcId?: string;
  vpcOwnerId?: string;
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
  data?: string;
  errorCode?: string;
  errorMessage?: string;
  httpStatusCode?: string;
  requestId?: string;
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
  code?: string;
  instanceId?: string;
  message?: string;
  orderId?: string;
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
  alternativeEndpoints?: string;
  enabled?: boolean;
  endpoint?: string;
  type?: string;
  vSwitchId?: string;
  vpcId?: string;
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

export class GetInstanceResponseBodyInstance extends $tea.Model {
  autoRenewal?: string;
  coldStorage?: number;
  commodityCode?: string;
  computeNodeCount?: number;
  cpu?: number;
  creationTime?: string;
  disk?: string;
  enableHiveAccess?: string;
  enableServerless?: boolean;
  endpoints?: GetInstanceResponseBodyInstanceEndpoints[];
  expirationTime?: string;
  gatewayCount?: number;
  gatewayCpu?: number;
  gatewayMemory?: number;
  instanceChargeType?: string;
  instanceId?: string;
  instanceName?: string;
  instanceOwner?: string;
  instanceStatus?: string;
  instanceType?: string;
  leaderInstanceId?: string;
  memory?: number;
  regionId?: string;
  replicaRole?: string;
  resourceGroupId?: string;
  suspendReason?: string;
  tags?: GetInstanceResponseBodyInstanceTags[];
  version?: string;
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
  cpu?: number;
  id?: number;
  mem?: number;
  name?: string;
  nodeCount?: number;
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

export class GetWarehouseDetailResponseBodyWarehouseDetail extends $tea.Model {
  remainingCpu?: string;
  reservedCpu?: string;
  warehouseList?: GetWarehouseDetailResponseBodyWarehouseDetailWarehouseList[];
  static names(): { [key: string]: string } {
    return {
      remainingCpu: 'RemainingCpu',
      reservedCpu: 'ReservedCpu',
      warehouseList: 'WarehouseList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainingCpu: 'string',
      reservedCpu: 'string',
      warehouseList: { 'type': 'array', 'itemType': GetWarehouseDetailResponseBodyWarehouseDetailWarehouseList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequestTag extends $tea.Model {
  key?: string;
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
  enabled?: boolean;
  endpoint?: string;
  type?: string;
  vSwitchId?: string;
  vpcId?: string;
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

export class ListInstancesResponseBodyInstanceList extends $tea.Model {
  commodityCode?: string;
  creationTime?: string;
  enableHiveAccess?: string;
  endpoints?: ListInstancesResponseBodyInstanceListEndpoints[];
  expirationTime?: string;
  instanceChargeType?: string;
  instanceId?: string;
  instanceName?: string;
  instanceStatus?: string;
  instanceType?: string;
  leaderInstanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  suspendReason?: string;
  tags?: ListInstancesResponseBodyInstanceListTags[];
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
  cpu?: number;
  id?: number;
  mem?: number;
  name?: string;
  nodeCount?: number;
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
  code?: string;
  message?: string;
  orderId?: string;
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
  code?: string;
  message?: string;
  orderId?: string;
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

  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(request, headers, runtime);
  }

  /**
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
    * @param request CreateInstanceRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateInstanceResponse
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
    * @param request CreateInstanceRequest
    * @return CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  /**
    * > Before you call this operation, read the documentation and make sure that you understand the prerequisites and impacts of this operation.
    * *   After you delete a Hologres instance, data and objects in the instance cannot be restored. Proceed with caution. For more information, see [Billing overview](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview#section-h6a-x58-jc0).
    * *   You can delete only pay-as-you-go instances.
    * *   If you want to unsubscribe from a subscription instance, submit a ticket.[](https://help.aliyun.com/document_detail/150284.html#section-ogc-9vc-858)
    *
    * @param request DeleteInstanceRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteInstanceResponse
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
    * > Before you call this operation, read the documentation and make sure that you understand the prerequisites and impacts of this operation.
    * *   After you delete a Hologres instance, data and objects in the instance cannot be restored. Proceed with caution. For more information, see [Billing overview](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview#section-h6a-x58-jc0).
    * *   You can delete only pay-as-you-go instances.
    * *   If you want to unsubscribe from a subscription instance, submit a ticket.[](https://help.aliyun.com/document_detail/150284.html#section-ogc-9vc-858)
    *
    * @param request DeleteInstanceRequest
    * @return DeleteInstanceResponse
   */
  async deleteInstance(instanceId: string, request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(instanceId, request, headers, runtime);
  }

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

  async disableHiveAccess(instanceId: string, request: DisableHiveAccessRequest): Promise<DisableHiveAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableHiveAccessWithOptions(instanceId, request, headers, runtime);
  }

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

  async enableHiveAccess(instanceId: string, request: EnableHiveAccessRequest): Promise<EnableHiveAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableHiveAccessWithOptions(instanceId, request, headers, runtime);
  }

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

  async getInstance(instanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(instanceId, headers, runtime);
  }

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

  async getWarehouseDetail(instanceId: string): Promise<GetWarehouseDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWarehouseDetailWithOptions(instanceId, headers, runtime);
  }

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

  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

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

  async listWarehouses(instanceId: string): Promise<ListWarehousesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWarehousesWithOptions(instanceId, headers, runtime);
  }

  /**
    * > Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
    * *   For more information about billing details of Hologres, see [Pricing](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview).
    * *   For more information about how to renew a Hologres instance, see [Manage renewals](https://www.alibabacloud.com/help/en/hologres/product-overview/manage-renewals?spm=a2c63.p38356.0.0.73f27c8d1Q0FUi).
    * *   You can renew only subscription instances.
    *
    * @param request RenewInstanceRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return RenewInstanceResponse
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
    * > Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
    * *   For more information about billing details of Hologres, see [Pricing](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview).
    * *   For more information about how to renew a Hologres instance, see [Manage renewals](https://www.alibabacloud.com/help/en/hologres/product-overview/manage-renewals?spm=a2c63.p38356.0.0.73f27c8d1Q0FUi).
    * *   You can renew only subscription instances.
    *
    * @param request RenewInstanceRequest
    * @return RenewInstanceResponse
   */
  async renewInstance(instanceId: string, request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renewInstanceWithOptions(instanceId, request, headers, runtime);
  }

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

  async restartInstance(instanceId: string): Promise<RestartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartInstanceWithOptions(instanceId, headers, runtime);
  }

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

  async resumeInstance(instanceId: string): Promise<ResumeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
    * > Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
    * *   For more information about the billing of Hologres, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview).
    * *   During the change of computing resource specifications of a Hologres instance, the instance is unavailable. During the change of storage resource specifications of a Hologres instance, the instance can work normally. Do not frequently change instance specifications. For more information, see [Upgrade or downgrade instance specifications](https://www.alibabacloud.com/help/en/hologres/product-overview/upgrade-or-downgrade-instance-specifications).
    *
    * @param request ScaleInstanceRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ScaleInstanceResponse
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
    * > Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
    * *   For more information about the billing of Hologres, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview).
    * *   During the change of computing resource specifications of a Hologres instance, the instance is unavailable. During the change of storage resource specifications of a Hologres instance, the instance can work normally. Do not frequently change instance specifications. For more information, see [Upgrade or downgrade instance specifications](https://www.alibabacloud.com/help/en/hologres/product-overview/upgrade-or-downgrade-instance-specifications).
    *
    * @param request ScaleInstanceRequest
    * @return ScaleInstanceResponse
   */
  async scaleInstance(instanceId: string, request: ScaleInstanceRequest): Promise<ScaleInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleInstanceWithOptions(instanceId, request, headers, runtime);
  }

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

  async stopInstance(instanceId: string): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopInstanceWithOptions(instanceId, headers, runtime);
  }

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

  async updateInstanceName(instanceId: string, request: UpdateInstanceNameRequest): Promise<UpdateInstanceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceNameWithOptions(instanceId, request, headers, runtime);
  }

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

  async updateInstanceNetworkType(instanceId: string, request: UpdateInstanceNetworkTypeRequest): Promise<UpdateInstanceNetworkTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceNetworkTypeWithOptions(instanceId, request, headers, runtime);
  }

}
