// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateDrdsAccountRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  password?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      password: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsAccountResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDrdsAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDrdsAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  encode?: string;
  password?: string;
  rdsInstances?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      encode: 'Encode',
      password: 'Password',
      rdsInstances: 'RdsInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      encode: 'string',
      password: 'string',
      rdsInstances: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsDBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDrdsDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDrdsDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  duration?: number;
  instanceSeries?: string;
  isAutoRenew?: boolean;
  isHa?: boolean;
  payType?: string;
  pricingCycle?: string;
  quantity?: number;
  regionId?: string;
  specification?: string;
  type?: string;
  vpcId?: string;
  vswitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      duration: 'Duration',
      instanceSeries: 'InstanceSeries',
      isAutoRenew: 'IsAutoRenew',
      isHa: 'IsHa',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      quantity: 'Quantity',
      regionId: 'RegionId',
      specification: 'Specification',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      duration: 'number',
      instanceSeries: 'string',
      isAutoRenew: 'boolean',
      isHa: 'boolean',
      payType: 'string',
      pricingCycle: 'string',
      quantity: 'number',
      regionId: 'string',
      specification: 'string',
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceResponseBody extends $tea.Model {
  data?: CreateDrdsInstanceResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDrdsInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDrdsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDrdsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReadOnlyAccountRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      password: 'password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReadOnlyAccountResponseBody extends $tea.Model {
  data?: CreateReadOnlyAccountResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateReadOnlyAccountResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReadOnlyAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateReadOnlyAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateReadOnlyAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDrdsDBRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDrdsDBResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDrdsDBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDrdsDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDrdsDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFailedDrdsDBRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFailedDrdsDBResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFailedDrdsDBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFailedDrdsDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFailedDrdsDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreateDrdsInstanceStatusRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreateDrdsInstanceStatusResponseBody extends $tea.Model {
  data?: DescribeCreateDrdsInstanceStatusResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeCreateDrdsInstanceStatusResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreateDrdsInstanceStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCreateDrdsInstanceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCreateDrdsInstanceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBResponseBody extends $tea.Model {
  data?: DescribeDrdsDBResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsDBResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsDBResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDrdsDBResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBIpWhiteListRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBIpWhiteListResponseBody extends $tea.Model {
  data?: DescribeDrdsDBIpWhiteListResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsDBIpWhiteListResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBIpWhiteListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsDBIpWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDrdsDBIpWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsResponseBody extends $tea.Model {
  data?: DescribeDrdsDBsResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsDBsResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsDBsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDrdsDBsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponseBody extends $tea.Model {
  data?: DescribeDrdsInstanceResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDrdsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  endTime?: number;
  key?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      key: 'Key',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      endTime: 'number',
      key: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponseBody extends $tea.Model {
  data?: DescribeDrdsInstanceDbMonitorResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsInstanceDbMonitorResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsInstanceDbMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDrdsInstanceDbMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorRequest extends $tea.Model {
  drdsInstanceId?: string;
  endTime?: number;
  key?: string;
  periodMultiple?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      key: 'Key',
      periodMultiple: 'PeriodMultiple',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      endTime: 'number',
      key: 'string',
      periodMultiple: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponseBody extends $tea.Model {
  data?: DescribeDrdsInstanceMonitorResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsInstanceMonitorResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsInstanceMonitorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDrdsInstanceMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceNetInfoForInnerRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceNetInfoForInnerResponseBody extends $tea.Model {
  drdsInstanceId?: string;
  netInfos?: DescribeDrdsInstanceNetInfoForInnerResponseBodyNetInfos;
  networkType?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      netInfos: 'NetInfos',
      networkType: 'NetworkType',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      netInfos: DescribeDrdsInstanceNetInfoForInnerResponseBodyNetInfos,
      networkType: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceNetInfoForInnerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsInstanceNetInfoForInnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDrdsInstanceNetInfoForInnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesRequest extends $tea.Model {
  regionId?: string;
  tags?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      tags: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBody extends $tea.Model {
  data?: DescribeDrdsInstancesResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDrdsInstancesResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDrdsInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDrdsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsListRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsListResponseBody extends $tea.Model {
  data?: DescribeRdsListResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeRdsListResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRdsListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRdsListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadOnlyAccountRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadOnlyAccountResponseBody extends $tea.Model {
  data?: DescribeReadOnlyAccountResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeReadOnlyAccountResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadOnlyAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeReadOnlyAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeReadOnlyAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  drdsRegions?: DescribeRegionsResponseBodyDrdsRegions;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      drdsRegions: 'DrdsRegions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsRegions: DescribeRegionsResponseBodyDrdsRegions,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardDBsRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardDBsResponseBody extends $tea.Model {
  data?: DescribeShardDBsResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeShardDBsResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardDBsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeShardDBsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeShardDBsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardDbConnectionInfoRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  subDbName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      subDbName: 'SubDbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      subDbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardDbConnectionInfoResponseBody extends $tea.Model {
  connectionInfo?: DescribeShardDbConnectionInfoResponseBodyConnectionInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      connectionInfo: 'ConnectionInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionInfo: DescribeShardDbConnectionInfoResponseBodyConnectionInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardDbConnectionInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeShardDbConnectionInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeShardDbConnectionInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstanceRequest extends $tea.Model {
  backupId?: string;
  clientToken?: string;
  dbInstanceClass?: string;
  drdsInstanceId?: string;
  engineVersion?: string;
  restoreTime?: string;
  sourceDbInstId?: string;
  switchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      clientToken: 'ClientToken',
      dbInstanceClass: 'DbInstanceClass',
      drdsInstanceId: 'DrdsInstanceId',
      engineVersion: 'EngineVersion',
      restoreTime: 'RestoreTime',
      sourceDbInstId: 'SourceDbInstId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      clientToken: 'string',
      dbInstanceClass: 'string',
      drdsInstanceId: 'string',
      engineVersion: 'string',
      restoreTime: 'string',
      sourceDbInstId: 'string',
      switchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsDBPasswdRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  newPasswd?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      newPasswd: 'NewPasswd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      newPasswd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsDBPasswdResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsDBPasswdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDrdsDBPasswdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDrdsDBPasswdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsInstanceDescriptionRequest extends $tea.Model {
  description?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsInstanceDescriptionResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsInstanceDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDrdsInstanceDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDrdsInstanceDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsIpWhiteListRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  groupAttribute?: string;
  groupName?: string;
  ipWhiteList?: string;
  mode?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      groupAttribute: 'GroupAttribute',
      groupName: 'GroupName',
      ipWhiteList: 'IpWhiteList',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      groupAttribute: 'string',
      groupName: 'string',
      ipWhiteList: 'string',
      mode: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsIpWhiteListResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDrdsIpWhiteListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDrdsIpWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDrdsIpWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFullTableScanRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  fullTableScan?: boolean;
  tableNames?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      fullTableScan: 'FullTableScan',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      fullTableScan: 'boolean',
      tableNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFullTableScanResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyFullTableScanResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyFullTableScanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyFullTableScanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRdsReadWeightRequest extends $tea.Model {
  dbName?: string;
  drdsInstanceId?: string;
  instanceNames?: string;
  weights?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      instanceNames: 'InstanceNames',
      weights: 'Weights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      instanceNames: 'string',
      weights: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRdsReadWeightResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyRdsReadWeightResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyRdsReadWeightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyRdsReadWeightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReadOnlyAccountPasswordRequest extends $tea.Model {
  accountName?: string;
  dbName?: string;
  drdsInstanceId?: string;
  newPasswd?: string;
  originPassword?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      newPasswd: 'NewPasswd',
      originPassword: 'OriginPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
      newPasswd: 'string',
      originPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReadOnlyAccountPasswordResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyReadOnlyAccountPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyReadOnlyAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyReadOnlyAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceInfoByConnRequest extends $tea.Model {
  host?: string;
  port?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      port: 'Port',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceInfoByConnResponseBody extends $tea.Model {
  data?: QueryInstanceInfoByConnResponseBodyData;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryInstanceInfoByConnResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceInfoByConnResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryInstanceInfoByConnResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryInstanceInfoByConnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsInstanceRequest extends $tea.Model {
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsInstanceResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDrdsInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveDrdsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveDrdsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveReadOnlyAccountRequest extends $tea.Model {
  accountName?: string;
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveReadOnlyAccountResponseBody extends $tea.Model {
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveReadOnlyAccountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveReadOnlyAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveReadOnlyAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceResponseBodyDataDrdsInstanceIdList extends $tea.Model {
  drdsInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDrdsInstanceResponseBodyData extends $tea.Model {
  drdsInstanceIdList?: CreateDrdsInstanceResponseBodyDataDrdsInstanceIdList;
  orderId?: number;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceIdList: 'DrdsInstanceIdList',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceIdList: CreateDrdsInstanceResponseBodyDataDrdsInstanceIdList,
      orderId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateReadOnlyAccountResponseBodyData extends $tea.Model {
  accountName?: string;
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreateDrdsInstanceStatusResponseBodyData extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBResponseBodyData extends $tea.Model {
  createTime?: string;
  dbName?: string;
  mode?: string;
  msg?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dbName: 'DbName',
      mode: 'Mode',
      msg: 'Msg',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dbName: 'string',
      mode: 'string',
      msg: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBIpWhiteListResponseBodyDataIpWhiteList extends $tea.Model {
  ip?: string[];
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBIpWhiteListResponseBodyData extends $tea.Model {
  ipWhiteList?: DescribeDrdsDBIpWhiteListResponseBodyDataIpWhiteList;
  static names(): { [key: string]: string } {
    return {
      ipWhiteList: 'IpWhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipWhiteList: DescribeDrdsDBIpWhiteListResponseBodyDataIpWhiteList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsResponseBodyDataDb extends $tea.Model {
  createTime?: string;
  dbName?: string;
  mode?: string;
  msg?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dbName: 'DbName',
      mode: 'Mode',
      msg: 'Msg',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      dbName: 'string',
      mode: 'string',
      msg: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsDBsResponseBodyData extends $tea.Model {
  db?: DescribeDrdsDBsResponseBodyDataDb[];
  static names(): { [key: string]: string } {
    return {
      db: 'Db',
    };
  }

  static types(): { [key: string]: any } {
    return {
      db: { 'type': 'array', 'itemType': DescribeDrdsDBsResponseBodyDataDb },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponseBodyDataVipsVip extends $tea.Model {
  IP?: string;
  port?: string;
  type?: string;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      port: 'Port',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      port: 'string',
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponseBodyDataVips extends $tea.Model {
  vip?: DescribeDrdsInstanceResponseBodyDataVipsVip[];
  static names(): { [key: string]: string } {
    return {
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vip: { 'type': 'array', 'itemType': DescribeDrdsInstanceResponseBodyDataVipsVip },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceResponseBodyData extends $tea.Model {
  createTime?: number;
  description?: string;
  drdsInstanceId?: string;
  networkType?: string;
  regionId?: string;
  specification?: string;
  status?: string;
  type?: string;
  version?: number;
  vips?: DescribeDrdsInstanceResponseBodyDataVips;
  vpcCloudInstanceId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      drdsInstanceId: 'DrdsInstanceId',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      specification: 'Specification',
      status: 'Status',
      type: 'Type',
      version: 'Version',
      vips: 'Vips',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      drdsInstanceId: 'string',
      networkType: 'string',
      regionId: 'string',
      specification: 'string',
      status: 'string',
      type: 'string',
      version: 'number',
      vips: DescribeDrdsInstanceResponseBodyDataVips,
      vpcCloudInstanceId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponseBodyDataPartialPerformanceDataValuesPerformanceValue extends $tea.Model {
  date?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponseBodyDataPartialPerformanceDataValues extends $tea.Model {
  performanceValue?: DescribeDrdsInstanceDbMonitorResponseBodyDataPartialPerformanceDataValuesPerformanceValue[];
  static names(): { [key: string]: string } {
    return {
      performanceValue: 'PerformanceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceValue: { 'type': 'array', 'itemType': DescribeDrdsInstanceDbMonitorResponseBodyDataPartialPerformanceDataValuesPerformanceValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponseBodyDataPartialPerformanceData extends $tea.Model {
  key?: string;
  unit?: string;
  values?: DescribeDrdsInstanceDbMonitorResponseBodyDataPartialPerformanceDataValues;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      unit: 'Unit',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      unit: 'string',
      values: DescribeDrdsInstanceDbMonitorResponseBodyDataPartialPerformanceDataValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceDbMonitorResponseBodyData extends $tea.Model {
  partialPerformanceData?: DescribeDrdsInstanceDbMonitorResponseBodyDataPartialPerformanceData[];
  static names(): { [key: string]: string } {
    return {
      partialPerformanceData: 'PartialPerformanceData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partialPerformanceData: { 'type': 'array', 'itemType': DescribeDrdsInstanceDbMonitorResponseBodyDataPartialPerformanceData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponseBodyDataPartialPerformanceDataValuesPerformanceValue extends $tea.Model {
  date?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponseBodyDataPartialPerformanceDataValues extends $tea.Model {
  performanceValue?: DescribeDrdsInstanceMonitorResponseBodyDataPartialPerformanceDataValuesPerformanceValue[];
  static names(): { [key: string]: string } {
    return {
      performanceValue: 'PerformanceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceValue: { 'type': 'array', 'itemType': DescribeDrdsInstanceMonitorResponseBodyDataPartialPerformanceDataValuesPerformanceValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponseBodyDataPartialPerformanceData extends $tea.Model {
  key?: string;
  unit?: string;
  values?: DescribeDrdsInstanceMonitorResponseBodyDataPartialPerformanceDataValues;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      unit: 'Unit',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      unit: 'string',
      values: DescribeDrdsInstanceMonitorResponseBodyDataPartialPerformanceDataValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceMonitorResponseBodyData extends $tea.Model {
  partialPerformanceData?: DescribeDrdsInstanceMonitorResponseBodyDataPartialPerformanceData[];
  static names(): { [key: string]: string } {
    return {
      partialPerformanceData: 'PartialPerformanceData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partialPerformanceData: { 'type': 'array', 'itemType': DescribeDrdsInstanceMonitorResponseBodyDataPartialPerformanceData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceNetInfoForInnerResponseBodyNetInfosNetInfo extends $tea.Model {
  IP?: string;
  isForVpc?: boolean;
  port?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      isForVpc: 'IsForVpc',
      port: 'Port',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      isForVpc: 'boolean',
      port: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstanceNetInfoForInnerResponseBodyNetInfos extends $tea.Model {
  netInfo?: DescribeDrdsInstanceNetInfoForInnerResponseBodyNetInfosNetInfo[];
  static names(): { [key: string]: string } {
    return {
      netInfo: 'NetInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netInfo: { 'type': 'array', 'itemType': DescribeDrdsInstanceNetInfoForInnerResponseBodyNetInfosNetInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyDataInstanceSlaveInstId extends $tea.Model {
  instId?: string[];
  static names(): { [key: string]: string } {
    return {
      instId: 'instId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyDataInstanceVipsVip extends $tea.Model {
  IP?: string;
  port?: string;
  type?: string;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      port: 'Port',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      port: 'string',
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyDataInstanceVips extends $tea.Model {
  vip?: DescribeDrdsInstancesResponseBodyDataInstanceVipsVip[];
  static names(): { [key: string]: string } {
    return {
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vip: { 'type': 'array', 'itemType': DescribeDrdsInstancesResponseBodyDataInstanceVipsVip },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyDataInstance extends $tea.Model {
  createTime?: number;
  description?: string;
  drdsInstanceId?: string;
  instRole?: string;
  masterInstId?: string;
  networkType?: string;
  regionId?: string;
  slaveInstId?: DescribeDrdsInstancesResponseBodyDataInstanceSlaveInstId;
  status?: string;
  type?: string;
  version?: number;
  vips?: DescribeDrdsInstancesResponseBodyDataInstanceVips;
  vpcCloudInstanceId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      drdsInstanceId: 'DrdsInstanceId',
      instRole: 'InstRole',
      masterInstId: 'MasterInstId',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      slaveInstId: 'SlaveInstId',
      status: 'Status',
      type: 'Type',
      version: 'Version',
      vips: 'Vips',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      drdsInstanceId: 'string',
      instRole: 'string',
      masterInstId: 'string',
      networkType: 'string',
      regionId: 'string',
      slaveInstId: DescribeDrdsInstancesResponseBodyDataInstanceSlaveInstId,
      status: 'string',
      type: 'string',
      version: 'number',
      vips: DescribeDrdsInstancesResponseBodyDataInstanceVips,
      vpcCloudInstanceId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsInstancesResponseBodyData extends $tea.Model {
  instance?: DescribeDrdsInstancesResponseBodyDataInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeDrdsInstancesResponseBodyDataInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsListResponseBodyDataRdsInstanceReadOnlyChildrenChild extends $tea.Model {
  connectUrl?: string;
  dbType?: string;
  instanceId?: string;
  instanceName?: string;
  instanceStatus?: string;
  readWeight?: number;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      dbType: 'DbType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      readWeight: 'ReadWeight',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      dbType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      readWeight: 'number',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsListResponseBodyDataRdsInstanceReadOnlyChildren extends $tea.Model {
  child?: DescribeRdsListResponseBodyDataRdsInstanceReadOnlyChildrenChild[];
  static names(): { [key: string]: string } {
    return {
      child: 'Child',
    };
  }

  static types(): { [key: string]: any } {
    return {
      child: { 'type': 'array', 'itemType': DescribeRdsListResponseBodyDataRdsInstanceReadOnlyChildrenChild },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsListResponseBodyDataRdsInstance extends $tea.Model {
  connectUrl?: string;
  dbType?: string;
  instanceId?: number;
  instanceName?: string;
  instanceStatus?: string;
  port?: number;
  readOnlyChildren?: DescribeRdsListResponseBodyDataRdsInstanceReadOnlyChildren;
  readWeight?: number;
  static names(): { [key: string]: string } {
    return {
      connectUrl: 'ConnectUrl',
      dbType: 'DbType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      port: 'Port',
      readOnlyChildren: 'ReadOnlyChildren',
      readWeight: 'ReadWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectUrl: 'string',
      dbType: 'string',
      instanceId: 'number',
      instanceName: 'string',
      instanceStatus: 'string',
      port: 'number',
      readOnlyChildren: DescribeRdsListResponseBodyDataRdsInstanceReadOnlyChildren,
      readWeight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsListResponseBodyData extends $tea.Model {
  rdsInstance?: DescribeRdsListResponseBodyDataRdsInstance[];
  static names(): { [key: string]: string } {
    return {
      rdsInstance: 'RdsInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsInstance: { 'type': 'array', 'itemType': DescribeRdsListResponseBodyDataRdsInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReadOnlyAccountResponseBodyData extends $tea.Model {
  accountName?: string;
  dbName?: string;
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyDrdsRegionsDrdsRegionInstanceSeriesListInstanceSeriesSpecListSpec extends $tea.Model {
  specId?: string;
  specName?: string;
  static names(): { [key: string]: string } {
    return {
      specId: 'SpecId',
      specName: 'SpecName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specId: 'string',
      specName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyDrdsRegionsDrdsRegionInstanceSeriesListInstanceSeriesSpecList extends $tea.Model {
  spec?: DescribeRegionsResponseBodyDrdsRegionsDrdsRegionInstanceSeriesListInstanceSeriesSpecListSpec[];
  static names(): { [key: string]: string } {
    return {
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyDrdsRegionsDrdsRegionInstanceSeriesListInstanceSeriesSpecListSpec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyDrdsRegionsDrdsRegionInstanceSeriesListInstanceSeries extends $tea.Model {
  seriesId?: string;
  seriesName?: string;
  specList?: DescribeRegionsResponseBodyDrdsRegionsDrdsRegionInstanceSeriesListInstanceSeriesSpecList;
  static names(): { [key: string]: string } {
    return {
      seriesId: 'SeriesId',
      seriesName: 'SeriesName',
      specList: 'SpecList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seriesId: 'string',
      seriesName: 'string',
      specList: DescribeRegionsResponseBodyDrdsRegionsDrdsRegionInstanceSeriesListInstanceSeriesSpecList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyDrdsRegionsDrdsRegionInstanceSeriesList extends $tea.Model {
  instanceSeries?: DescribeRegionsResponseBodyDrdsRegionsDrdsRegionInstanceSeriesListInstanceSeries[];
  static names(): { [key: string]: string } {
    return {
      instanceSeries: 'InstanceSeries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSeries: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyDrdsRegionsDrdsRegionInstanceSeriesListInstanceSeries },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyDrdsRegionsDrdsRegion extends $tea.Model {
  instanceSeriesList?: DescribeRegionsResponseBodyDrdsRegionsDrdsRegionInstanceSeriesList;
  regionId?: string;
  regionName?: string;
  zoneId?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSeriesList: 'InstanceSeriesList',
      regionId: 'RegionId',
      regionName: 'RegionName',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSeriesList: DescribeRegionsResponseBodyDrdsRegionsDrdsRegionInstanceSeriesList,
      regionId: 'string',
      regionName: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyDrdsRegions extends $tea.Model {
  drdsRegion?: DescribeRegionsResponseBodyDrdsRegionsDrdsRegion[];
  static names(): { [key: string]: string } {
    return {
      drdsRegion: 'DrdsRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsRegion: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyDrdsRegionsDrdsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardDBsResponseBodyDataDbIntancePair extends $tea.Model {
  groupName?: string;
  instanceName?: string;
  subDbName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      instanceName: 'InstanceName',
      subDbName: 'SubDbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      instanceName: 'string',
      subDbName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardDBsResponseBodyData extends $tea.Model {
  dbIntancePair?: DescribeShardDBsResponseBodyDataDbIntancePair[];
  static names(): { [key: string]: string } {
    return {
      dbIntancePair: 'DbIntancePair',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbIntancePair: { 'type': 'array', 'itemType': DescribeShardDBsResponseBodyDataDbIntancePair },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeShardDbConnectionInfoResponseBodyConnectionInfo extends $tea.Model {
  instanceName?: string;
  instanceUrl?: string;
  blockingTimeout?: number;
  connectionProperties?: string;
  dbStatus?: string;
  dbType?: string;
  idleTimeOut?: number;
  maxPoolSize?: number;
  minPoolSize?: number;
  preparedStatementCacheSize?: number;
  subDbName?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceUrl: 'InstanceUrl',
      blockingTimeout: 'blockingTimeout',
      connectionProperties: 'connectionProperties',
      dbStatus: 'dbStatus',
      dbType: 'dbType',
      idleTimeOut: 'idleTimeOut',
      maxPoolSize: 'maxPoolSize',
      minPoolSize: 'minPoolSize',
      preparedStatementCacheSize: 'preparedStatementCacheSize',
      subDbName: 'subDbName',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      instanceUrl: 'string',
      blockingTimeout: 'number',
      connectionProperties: 'string',
      dbStatus: 'string',
      dbType: 'string',
      idleTimeOut: 'number',
      maxPoolSize: 'number',
      minPoolSize: 'number',
      preparedStatementCacheSize: 'number',
      subDbName: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceInfoByConnResponseBodyDataVipsVip extends $tea.Model {
  IP?: string;
  port?: string;
  type?: string;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      port: 'Port',
      type: 'Type',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      port: 'string',
      type: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceInfoByConnResponseBodyDataVips extends $tea.Model {
  vip?: QueryInstanceInfoByConnResponseBodyDataVipsVip[];
  static names(): { [key: string]: string } {
    return {
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vip: { 'type': 'array', 'itemType': QueryInstanceInfoByConnResponseBodyDataVipsVip },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceInfoByConnResponseBodyData extends $tea.Model {
  createTime?: number;
  description?: string;
  drdsInstanceId?: string;
  networkType?: string;
  regionId?: string;
  specTypeId?: string;
  specTypeName?: string;
  specification?: string;
  status?: string;
  type?: string;
  version?: number;
  vips?: QueryInstanceInfoByConnResponseBodyDataVips;
  vpcCloudInstanceId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      drdsInstanceId: 'DrdsInstanceId',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      specTypeId: 'SpecTypeId',
      specTypeName: 'SpecTypeName',
      specification: 'Specification',
      status: 'Status',
      type: 'Type',
      version: 'Version',
      vips: 'Vips',
      vpcCloudInstanceId: 'VpcCloudInstanceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      drdsInstanceId: 'string',
      networkType: 'string',
      regionId: 'string',
      specTypeId: 'string',
      specTypeName: 'string',
      specification: 'string',
      status: 'string',
      type: 'string',
      version: 'number',
      vips: QueryInstanceInfoByConnResponseBodyDataVips,
      vpcCloudInstanceId: 'string',
      zoneId: 'string',
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
      'ap-northeast-1': "drds.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2-pop': "drds.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "drds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "drds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "drds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "drds.ap-southeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "drds.aliyuncs.com",
      'cn-beijing-finance-pop': "drds.aliyuncs.com",
      'cn-beijing-gov-1': "drds.aliyuncs.com",
      'cn-beijing-nu16-b01': "drds.aliyuncs.com",
      'cn-chengdu': "drds.aliyuncs.com",
      'cn-edge-1': "drds.aliyuncs.com",
      'cn-fujian': "drds.aliyuncs.com",
      'cn-haidian-cm12-c01': "drds.aliyuncs.com",
      'cn-hangzhou-bj-b01': "drds.aliyuncs.com",
      'cn-hangzhou-finance': "drds.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "drds.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "drds.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "drds.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "drds.aliyuncs.com",
      'cn-hangzhou-test-306': "drds.aliyuncs.com",
      'cn-hongkong-finance-pop': "drds.aliyuncs.com",
      'cn-qingdao-nebula': "drds.aliyuncs.com",
      'cn-shanghai-et15-b01': "drds.aliyuncs.com",
      'cn-shanghai-et2-b01': "drds.aliyuncs.com",
      'cn-shanghai-inner': "drds.aliyuncs.com",
      'cn-shanghai-internal-test-1': "drds.aliyuncs.com",
      'cn-shenzhen-inner': "drds.aliyuncs.com",
      'cn-shenzhen-st4-d01': "drds.aliyuncs.com",
      'cn-shenzhen-su18-b01': "drds.aliyuncs.com",
      'cn-wuhan': "drds.aliyuncs.com",
      'cn-yushanfang': "drds.aliyuncs.com",
      'cn-zhangbei-na61-b01': "drds.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "drds.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "drds.aliyuncs.com",
      'eu-central-1': "drds.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "drds.ap-southeast-1.aliyuncs.com",
      'eu-west-1-oxs': "drds.ap-southeast-1.aliyuncs.com",
      'me-east-1': "drds.ap-southeast-1.aliyuncs.com",
      'rus-west-1-pop': "drds.ap-southeast-1.aliyuncs.com",
      'us-west-1': "drds.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("drds", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request CreateDrdsAccountRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDrdsAccountResponse
   */
  async createDrdsAccountWithOptions(request: CreateDrdsAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateDrdsAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDrdsAccount",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDrdsAccountResponse>(await this.callApi(params, req, runtime), new CreateDrdsAccountResponse({}));
  }

  /**
   * @param request CreateDrdsAccountRequest
   * @return CreateDrdsAccountResponse
   */
  async createDrdsAccount(request: CreateDrdsAccountRequest): Promise<CreateDrdsAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDrdsAccountWithOptions(request, runtime);
  }

  /**
   * @param request CreateDrdsDBRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDrdsDBResponse
   */
  async createDrdsDBWithOptions(request: CreateDrdsDBRequest, runtime: $Util.RuntimeOptions): Promise<CreateDrdsDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.encode)) {
      query["Encode"] = request.encode;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.rdsInstances)) {
      query["RdsInstances"] = request.rdsInstances;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDrdsDB",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDrdsDBResponse>(await this.callApi(params, req, runtime), new CreateDrdsDBResponse({}));
  }

  /**
   * @param request CreateDrdsDBRequest
   * @return CreateDrdsDBResponse
   */
  async createDrdsDB(request: CreateDrdsDBRequest): Promise<CreateDrdsDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDrdsDBWithOptions(request, runtime);
  }

  /**
   * @param request CreateDrdsInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDrdsInstanceResponse
   */
  async createDrdsInstanceWithOptions(request: CreateDrdsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDrdsInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!Util.isUnset(request.instanceSeries)) {
      query["InstanceSeries"] = request.instanceSeries;
    }

    if (!Util.isUnset(request.isAutoRenew)) {
      query["IsAutoRenew"] = request.isAutoRenew;
    }

    if (!Util.isUnset(request.isHa)) {
      query["IsHa"] = request.isHa;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!Util.isUnset(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDrdsInstance",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDrdsInstanceResponse>(await this.callApi(params, req, runtime), new CreateDrdsInstanceResponse({}));
  }

  /**
   * @param request CreateDrdsInstanceRequest
   * @return CreateDrdsInstanceResponse
   */
  async createDrdsInstance(request: CreateDrdsInstanceRequest): Promise<CreateDrdsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDrdsInstanceWithOptions(request, runtime);
  }

  /**
   * @param request CreateReadOnlyAccountRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateReadOnlyAccountResponse
   */
  async createReadOnlyAccountWithOptions(request: CreateReadOnlyAccountRequest, runtime: $Util.RuntimeOptions): Promise<CreateReadOnlyAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.password)) {
      query["password"] = request.password;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateReadOnlyAccount",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateReadOnlyAccountResponse>(await this.callApi(params, req, runtime), new CreateReadOnlyAccountResponse({}));
  }

  /**
   * @param request CreateReadOnlyAccountRequest
   * @return CreateReadOnlyAccountResponse
   */
  async createReadOnlyAccount(request: CreateReadOnlyAccountRequest): Promise<CreateReadOnlyAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createReadOnlyAccountWithOptions(request, runtime);
  }

  /**
   * @param request DeleteDrdsDBRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDrdsDBResponse
   */
  async deleteDrdsDBWithOptions(request: DeleteDrdsDBRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDrdsDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDrdsDB",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDrdsDBResponse>(await this.callApi(params, req, runtime), new DeleteDrdsDBResponse({}));
  }

  /**
   * @param request DeleteDrdsDBRequest
   * @return DeleteDrdsDBResponse
   */
  async deleteDrdsDB(request: DeleteDrdsDBRequest): Promise<DeleteDrdsDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDrdsDBWithOptions(request, runtime);
  }

  /**
   * @param request DeleteFailedDrdsDBRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteFailedDrdsDBResponse
   */
  async deleteFailedDrdsDBWithOptions(request: DeleteFailedDrdsDBRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFailedDrdsDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFailedDrdsDB",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFailedDrdsDBResponse>(await this.callApi(params, req, runtime), new DeleteFailedDrdsDBResponse({}));
  }

  /**
   * @param request DeleteFailedDrdsDBRequest
   * @return DeleteFailedDrdsDBResponse
   */
  async deleteFailedDrdsDB(request: DeleteFailedDrdsDBRequest): Promise<DeleteFailedDrdsDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFailedDrdsDBWithOptions(request, runtime);
  }

  /**
   * @param request DescribeCreateDrdsInstanceStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeCreateDrdsInstanceStatusResponse
   */
  async describeCreateDrdsInstanceStatusWithOptions(request: DescribeCreateDrdsInstanceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCreateDrdsInstanceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCreateDrdsInstanceStatus",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCreateDrdsInstanceStatusResponse>(await this.callApi(params, req, runtime), new DescribeCreateDrdsInstanceStatusResponse({}));
  }

  /**
   * @param request DescribeCreateDrdsInstanceStatusRequest
   * @return DescribeCreateDrdsInstanceStatusResponse
   */
  async describeCreateDrdsInstanceStatus(request: DescribeCreateDrdsInstanceStatusRequest): Promise<DescribeCreateDrdsInstanceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCreateDrdsInstanceStatusWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDrdsDBRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDrdsDBResponse
   */
  async describeDrdsDBWithOptions(request: DescribeDrdsDBRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDBResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsDB",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsDBResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDBResponse({}));
  }

  /**
   * @param request DescribeDrdsDBRequest
   * @return DescribeDrdsDBResponse
   */
  async describeDrdsDB(request: DescribeDrdsDBRequest): Promise<DescribeDrdsDBResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDBWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDrdsDBIpWhiteListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDrdsDBIpWhiteListResponse
   */
  async describeDrdsDBIpWhiteListWithOptions(request: DescribeDrdsDBIpWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDBIpWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsDBIpWhiteList",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsDBIpWhiteListResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDBIpWhiteListResponse({}));
  }

  /**
   * @param request DescribeDrdsDBIpWhiteListRequest
   * @return DescribeDrdsDBIpWhiteListResponse
   */
  async describeDrdsDBIpWhiteList(request: DescribeDrdsDBIpWhiteListRequest): Promise<DescribeDrdsDBIpWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDBIpWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDrdsDBsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDrdsDBsResponse
   */
  async describeDrdsDBsWithOptions(request: DescribeDrdsDBsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsDBsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsDBs",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsDBsResponse>(await this.callApi(params, req, runtime), new DescribeDrdsDBsResponse({}));
  }

  /**
   * @param request DescribeDrdsDBsRequest
   * @return DescribeDrdsDBsResponse
   */
  async describeDrdsDBs(request: DescribeDrdsDBsRequest): Promise<DescribeDrdsDBsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsDBsWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDrdsInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDrdsInstanceResponse
   */
  async describeDrdsInstanceWithOptions(request: DescribeDrdsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsInstance",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsInstanceResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstanceResponse({}));
  }

  /**
   * @param request DescribeDrdsInstanceRequest
   * @return DescribeDrdsInstanceResponse
   */
  async describeDrdsInstance(request: DescribeDrdsInstanceRequest): Promise<DescribeDrdsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstanceWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDrdsInstanceDbMonitorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDrdsInstanceDbMonitorResponse
   */
  async describeDrdsInstanceDbMonitorWithOptions(request: DescribeDrdsInstanceDbMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstanceDbMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsInstanceDbMonitor",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsInstanceDbMonitorResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstanceDbMonitorResponse({}));
  }

  /**
   * @param request DescribeDrdsInstanceDbMonitorRequest
   * @return DescribeDrdsInstanceDbMonitorResponse
   */
  async describeDrdsInstanceDbMonitor(request: DescribeDrdsInstanceDbMonitorRequest): Promise<DescribeDrdsInstanceDbMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstanceDbMonitorWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDrdsInstanceMonitorRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDrdsInstanceMonitorResponse
   */
  async describeDrdsInstanceMonitorWithOptions(request: DescribeDrdsInstanceMonitorRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstanceMonitorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    if (!Util.isUnset(request.periodMultiple)) {
      query["PeriodMultiple"] = request.periodMultiple;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsInstanceMonitor",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsInstanceMonitorResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstanceMonitorResponse({}));
  }

  /**
   * @param request DescribeDrdsInstanceMonitorRequest
   * @return DescribeDrdsInstanceMonitorResponse
   */
  async describeDrdsInstanceMonitor(request: DescribeDrdsInstanceMonitorRequest): Promise<DescribeDrdsInstanceMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstanceMonitorWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDrdsInstanceNetInfoForInnerRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDrdsInstanceNetInfoForInnerResponse
   */
  async describeDrdsInstanceNetInfoForInnerWithOptions(request: DescribeDrdsInstanceNetInfoForInnerRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstanceNetInfoForInnerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsInstanceNetInfoForInner",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsInstanceNetInfoForInnerResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstanceNetInfoForInnerResponse({}));
  }

  /**
   * @param request DescribeDrdsInstanceNetInfoForInnerRequest
   * @return DescribeDrdsInstanceNetInfoForInnerResponse
   */
  async describeDrdsInstanceNetInfoForInner(request: DescribeDrdsInstanceNetInfoForInnerRequest): Promise<DescribeDrdsInstanceNetInfoForInnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstanceNetInfoForInnerWithOptions(request, runtime);
  }

  /**
   * @param request DescribeDrdsInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeDrdsInstancesResponse
   */
  async describeDrdsInstancesWithOptions(request: DescribeDrdsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDrdsInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDrdsInstances",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDrdsInstancesResponse>(await this.callApi(params, req, runtime), new DescribeDrdsInstancesResponse({}));
  }

  /**
   * @param request DescribeDrdsInstancesRequest
   * @return DescribeDrdsInstancesResponse
   */
  async describeDrdsInstances(request: DescribeDrdsInstancesRequest): Promise<DescribeDrdsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDrdsInstancesWithOptions(request, runtime);
  }

  /**
   * @param request DescribeRdsListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRdsListResponse
   */
  async describeRdsListWithOptions(request: DescribeRdsListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRdsListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRdsList",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRdsListResponse>(await this.callApi(params, req, runtime), new DescribeRdsListResponse({}));
  }

  /**
   * @param request DescribeRdsListRequest
   * @return DescribeRdsListResponse
   */
  async describeRdsList(request: DescribeRdsListRequest): Promise<DescribeRdsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRdsListWithOptions(request, runtime);
  }

  /**
   * @param request DescribeReadOnlyAccountRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeReadOnlyAccountResponse
   */
  async describeReadOnlyAccountWithOptions(request: DescribeReadOnlyAccountRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReadOnlyAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeReadOnlyAccount",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeReadOnlyAccountResponse>(await this.callApi(params, req, runtime), new DescribeReadOnlyAccountResponse({}));
  }

  /**
   * @param request DescribeReadOnlyAccountRequest
   * @return DescribeReadOnlyAccountResponse
   */
  async describeReadOnlyAccount(request: DescribeReadOnlyAccountRequest): Promise<DescribeReadOnlyAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReadOnlyAccountWithOptions(request, runtime);
  }

  /**
   * @param request DescribeRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRegionsResponse
   */
  async describeRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * @return DescribeRegionsResponse
   */
  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * @param request DescribeShardDBsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeShardDBsResponse
   */
  async describeShardDBsWithOptions(request: DescribeShardDBsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeShardDBsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeShardDBs",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeShardDBsResponse>(await this.callApi(params, req, runtime), new DescribeShardDBsResponse({}));
  }

  /**
   * @param request DescribeShardDBsRequest
   * @return DescribeShardDBsResponse
   */
  async describeShardDBs(request: DescribeShardDBsRequest): Promise<DescribeShardDBsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeShardDBsWithOptions(request, runtime);
  }

  /**
   * @param request DescribeShardDbConnectionInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeShardDbConnectionInfoResponse
   */
  async describeShardDbConnectionInfoWithOptions(request: DescribeShardDbConnectionInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeShardDbConnectionInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.subDbName)) {
      query["SubDbName"] = request.subDbName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeShardDbConnectionInfo",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeShardDbConnectionInfoResponse>(await this.callApi(params, req, runtime), new DescribeShardDbConnectionInfoResponse({}));
  }

  /**
   * @param request DescribeShardDbConnectionInfoRequest
   * @return DescribeShardDbConnectionInfoResponse
   */
  async describeShardDbConnectionInfo(request: DescribeShardDbConnectionInfoRequest): Promise<DescribeShardDbConnectionInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeShardDbConnectionInfoWithOptions(request, runtime);
  }

  /**
   * @param request EnableInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableInstanceResponse
   */
  async enableInstanceWithOptions(request: EnableInstanceRequest, runtime: $Util.RuntimeOptions): Promise<EnableInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dbInstanceClass)) {
      query["DbInstanceClass"] = request.dbInstanceClass;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.engineVersion)) {
      query["EngineVersion"] = request.engineVersion;
    }

    if (!Util.isUnset(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!Util.isUnset(request.sourceDbInstId)) {
      query["SourceDbInstId"] = request.sourceDbInstId;
    }

    if (!Util.isUnset(request.switchId)) {
      query["SwitchId"] = request.switchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableInstance",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableInstanceResponse>(await this.callApi(params, req, runtime), new EnableInstanceResponse({}));
  }

  /**
   * @param request EnableInstanceRequest
   * @return EnableInstanceResponse
   */
  async enableInstance(request: EnableInstanceRequest): Promise<EnableInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableInstanceWithOptions(request, runtime);
  }

  /**
   * @param request ModifyDrdsDBPasswdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDrdsDBPasswdResponse
   */
  async modifyDrdsDBPasswdWithOptions(request: ModifyDrdsDBPasswdRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDrdsDBPasswdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.newPasswd)) {
      query["NewPasswd"] = request.newPasswd;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDrdsDBPasswd",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDrdsDBPasswdResponse>(await this.callApi(params, req, runtime), new ModifyDrdsDBPasswdResponse({}));
  }

  /**
   * @param request ModifyDrdsDBPasswdRequest
   * @return ModifyDrdsDBPasswdResponse
   */
  async modifyDrdsDBPasswd(request: ModifyDrdsDBPasswdRequest): Promise<ModifyDrdsDBPasswdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDrdsDBPasswdWithOptions(request, runtime);
  }

  /**
   * @param request ModifyDrdsInstanceDescriptionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDrdsInstanceDescriptionResponse
   */
  async modifyDrdsInstanceDescriptionWithOptions(request: ModifyDrdsInstanceDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDrdsInstanceDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDrdsInstanceDescription",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDrdsInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new ModifyDrdsInstanceDescriptionResponse({}));
  }

  /**
   * @param request ModifyDrdsInstanceDescriptionRequest
   * @return ModifyDrdsInstanceDescriptionResponse
   */
  async modifyDrdsInstanceDescription(request: ModifyDrdsInstanceDescriptionRequest): Promise<ModifyDrdsInstanceDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDrdsInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * @param request ModifyDrdsIpWhiteListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDrdsIpWhiteListResponse
   */
  async modifyDrdsIpWhiteListWithOptions(request: ModifyDrdsIpWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDrdsIpWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.groupAttribute)) {
      query["GroupAttribute"] = request.groupAttribute;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.ipWhiteList)) {
      query["IpWhiteList"] = request.ipWhiteList;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDrdsIpWhiteList",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDrdsIpWhiteListResponse>(await this.callApi(params, req, runtime), new ModifyDrdsIpWhiteListResponse({}));
  }

  /**
   * @param request ModifyDrdsIpWhiteListRequest
   * @return ModifyDrdsIpWhiteListResponse
   */
  async modifyDrdsIpWhiteList(request: ModifyDrdsIpWhiteListRequest): Promise<ModifyDrdsIpWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDrdsIpWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request ModifyFullTableScanRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyFullTableScanResponse
   */
  async modifyFullTableScanWithOptions(request: ModifyFullTableScanRequest, runtime: $Util.RuntimeOptions): Promise<ModifyFullTableScanResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.fullTableScan)) {
      query["FullTableScan"] = request.fullTableScan;
    }

    if (!Util.isUnset(request.tableNames)) {
      query["TableNames"] = request.tableNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyFullTableScan",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyFullTableScanResponse>(await this.callApi(params, req, runtime), new ModifyFullTableScanResponse({}));
  }

  /**
   * @param request ModifyFullTableScanRequest
   * @return ModifyFullTableScanResponse
   */
  async modifyFullTableScan(request: ModifyFullTableScanRequest): Promise<ModifyFullTableScanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyFullTableScanWithOptions(request, runtime);
  }

  /**
   * @param request ModifyRdsReadWeightRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyRdsReadWeightResponse
   */
  async modifyRdsReadWeightWithOptions(request: ModifyRdsReadWeightRequest, runtime: $Util.RuntimeOptions): Promise<ModifyRdsReadWeightResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.instanceNames)) {
      query["InstanceNames"] = request.instanceNames;
    }

    if (!Util.isUnset(request.weights)) {
      query["Weights"] = request.weights;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyRdsReadWeight",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyRdsReadWeightResponse>(await this.callApi(params, req, runtime), new ModifyRdsReadWeightResponse({}));
  }

  /**
   * @param request ModifyRdsReadWeightRequest
   * @return ModifyRdsReadWeightResponse
   */
  async modifyRdsReadWeight(request: ModifyRdsReadWeightRequest): Promise<ModifyRdsReadWeightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyRdsReadWeightWithOptions(request, runtime);
  }

  /**
   * @param request ModifyReadOnlyAccountPasswordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyReadOnlyAccountPasswordResponse
   */
  async modifyReadOnlyAccountPasswordWithOptions(request: ModifyReadOnlyAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ModifyReadOnlyAccountPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!Util.isUnset(request.newPasswd)) {
      query["NewPasswd"] = request.newPasswd;
    }

    if (!Util.isUnset(request.originPassword)) {
      query["OriginPassword"] = request.originPassword;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyReadOnlyAccountPassword",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyReadOnlyAccountPasswordResponse>(await this.callApi(params, req, runtime), new ModifyReadOnlyAccountPasswordResponse({}));
  }

  /**
   * @param request ModifyReadOnlyAccountPasswordRequest
   * @return ModifyReadOnlyAccountPasswordResponse
   */
  async modifyReadOnlyAccountPassword(request: ModifyReadOnlyAccountPasswordRequest): Promise<ModifyReadOnlyAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyReadOnlyAccountPasswordWithOptions(request, runtime);
  }

  /**
   * @param request QueryInstanceInfoByConnRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return QueryInstanceInfoByConnResponse
   */
  async queryInstanceInfoByConnWithOptions(request: QueryInstanceInfoByConnRequest, runtime: $Util.RuntimeOptions): Promise<QueryInstanceInfoByConnResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.host)) {
      query["Host"] = request.host;
    }

    if (!Util.isUnset(request.port)) {
      query["Port"] = request.port;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryInstanceInfoByConn",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryInstanceInfoByConnResponse>(await this.callApi(params, req, runtime), new QueryInstanceInfoByConnResponse({}));
  }

  /**
   * @param request QueryInstanceInfoByConnRequest
   * @return QueryInstanceInfoByConnResponse
   */
  async queryInstanceInfoByConn(request: QueryInstanceInfoByConnRequest): Promise<QueryInstanceInfoByConnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryInstanceInfoByConnWithOptions(request, runtime);
  }

  /**
   * @param request RemoveDrdsInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RemoveDrdsInstanceResponse
   */
  async removeDrdsInstanceWithOptions(request: RemoveDrdsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDrdsInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveDrdsInstance",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveDrdsInstanceResponse>(await this.callApi(params, req, runtime), new RemoveDrdsInstanceResponse({}));
  }

  /**
   * @param request RemoveDrdsInstanceRequest
   * @return RemoveDrdsInstanceResponse
   */
  async removeDrdsInstance(request: RemoveDrdsInstanceRequest): Promise<RemoveDrdsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDrdsInstanceWithOptions(request, runtime);
  }

  /**
   * @param request RemoveReadOnlyAccountRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RemoveReadOnlyAccountResponse
   */
  async removeReadOnlyAccountWithOptions(request: RemoveReadOnlyAccountRequest, runtime: $Util.RuntimeOptions): Promise<RemoveReadOnlyAccountResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveReadOnlyAccount",
      version: "2017-10-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveReadOnlyAccountResponse>(await this.callApi(params, req, runtime), new RemoveReadOnlyAccountResponse({}));
  }

  /**
   * @param request RemoveReadOnlyAccountRequest
   * @return RemoveReadOnlyAccountResponse
   */
  async removeReadOnlyAccount(request: RemoveReadOnlyAccountRequest): Promise<RemoveReadOnlyAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeReadOnlyAccountWithOptions(request, runtime);
  }

}
