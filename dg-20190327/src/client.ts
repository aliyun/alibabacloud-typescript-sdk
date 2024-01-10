// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddDatabaseRequest extends $tea.Model {
  clientToken?: string;
  dbDescription?: string;
  dbName?: string;
  dbPassword?: string;
  dbType?: string;
  dbUserName?: string;
  gatewayId?: string;
  host?: string;
  port?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dbDescription: 'DbDescription',
      dbName: 'DbName',
      dbPassword: 'DbPassword',
      dbType: 'DbType',
      dbUserName: 'DbUserName',
      gatewayId: 'GatewayId',
      host: 'Host',
      port: 'Port',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dbDescription: 'string',
      dbName: 'string',
      dbPassword: 'string',
      dbType: 'string',
      dbUserName: 'string',
      gatewayId: 'string',
      host: 'string',
      port: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatabaseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDatabaseResponseBody;
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
      body: AddDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatabaseListRequest extends $tea.Model {
  clientToken?: string;
  databaseString?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      databaseString: 'DatabaseString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      databaseString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatabaseListResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDatabaseListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDatabaseListResponseBody;
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
      body: AddDatabaseListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectDatabaseRequest extends $tea.Model {
  dbName?: string;
  dbPassword?: string;
  dbType?: string;
  dbUserName?: string;
  gatewayId?: string;
  host?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      dbPassword: 'DbPassword',
      dbType: 'DbType',
      dbUserName: 'DbUserName',
      gatewayId: 'GatewayId',
      host: 'Host',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      dbPassword: 'string',
      dbType: 'string',
      dbUserName: 'string',
      gatewayId: 'string',
      host: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectDatabaseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConnectDatabaseResponseBody;
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
      body: ConnectDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseAccessPointRequest extends $tea.Model {
  clientToken?: string;
  dbInstanceId?: string;
  regionId?: string;
  vSwitchId?: string;
  vpcAZone?: string;
  vpcId?: string;
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dbInstanceId: 'DbInstanceId',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      vpcAZone: 'VpcAZone',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dbInstanceId: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      vpcAZone: 'string',
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseAccessPointResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatabaseAccessPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDatabaseAccessPointResponseBody;
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
      body: CreateDatabaseAccessPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayRequest extends $tea.Model {
  gatewayDesc?: string;
  gatewayName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayDesc: 'GatewayDesc',
      gatewayName: 'GatewayName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayDesc: 'string',
      gatewayName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateGatewayResponseBody;
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
      body: CreateGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayVerifyCodeRequest extends $tea.Model {
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayVerifyCodeResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayVerifyCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateGatewayVerifyCodeResponseBody;
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
      body: CreateGatewayVerifyCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseRequest extends $tea.Model {
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

export class DeleteDatabaseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDatabaseResponseBody;
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
      body: DeleteDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseAccessPointRequest extends $tea.Model {
  dbInstanceId?: string;
  regionId?: string;
  vSwitchId?: string;
  vpcAZone?: string;
  vpcId?: string;
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      vpcAZone: 'VpcAZone',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      vpcAZone: 'string',
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseAccessPointResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatabaseAccessPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDatabaseAccessPointResponseBody;
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
      body: DeleteDatabaseAccessPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayRequest extends $tea.Model {
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGatewayResponseBody;
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
      body: DeleteGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayInstanceRequest extends $tea.Model {
  gatewayId?: string;
  gatewayInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      gatewayInstanceId: 'GatewayInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      gatewayInstanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayInstanceResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGatewayInstanceResponseBody;
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
      body: DeleteGatewayInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
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

export class DescribeRegionsResponseBody extends $tea.Model {
  code?: string;
  errorMsg?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMsg: 'ErrorMsg',
      regions: 'Regions',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMsg: 'string',
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
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

export class DownloadGatewayProgramRequest extends $tea.Model {
  dgVersion?: string;
  userOS?: string;
  static names(): { [key: string]: string } {
    return {
      dgVersion: 'DgVersion',
      userOS: 'UserOS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dgVersion: 'string',
      userOS: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadGatewayProgramResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadGatewayProgramResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DownloadGatewayProgramResponseBody;
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
      body: DownloadGatewayProgramResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserGatewayByIdRequest extends $tea.Model {
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserGatewayByIdResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserGatewayByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FindUserGatewayByIdResponseBody;
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
      body: FindUserGatewayByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDatabasesRequest extends $tea.Model {
  dbType?: string;
  gatewayId?: string;
  host?: string;
  instanceId?: string;
  pageNumber?: string;
  pageSize?: string;
  port?: number;
  regionId?: string;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      gatewayId: 'GatewayId',
      host: 'Host',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      port: 'Port',
      regionId: 'RegionId',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      gatewayId: 'string',
      host: 'string',
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      port: 'number',
      regionId: 'string',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDatabasesResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDatabasesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserDatabasesResponseBody;
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
      body: GetUserDatabasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGatewayInstancesRequest extends $tea.Model {
  gatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGatewayInstancesResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGatewayInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserGatewayInstancesResponseBody;
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
      body: GetUserGatewayInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGatewaysRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  searchKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      searchKey: 'SearchKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      searchKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGatewaysResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGatewaysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserGatewaysResponseBody;
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
      body: GetUserGatewaysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccessPointRequest extends $tea.Model {
  dbInstanceId?: string;
  gatewayId?: string;
  host?: string;
  pageNumber?: string;
  pageSize?: string;
  port?: number;
  regionId?: string;
  searchKey?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      gatewayId: 'GatewayId',
      host: 'Host',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      port: 'Port',
      regionId: 'RegionId',
      searchKey: 'SearchKey',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
      gatewayId: 'string',
      host: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      port: 'number',
      regionId: 'string',
      searchKey: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccessPointResponseBody extends $tea.Model {
  code?: string;
  count?: number;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccessPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDatabaseAccessPointResponseBody;
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
      body: ListDatabaseAccessPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseRequest extends $tea.Model {
  dbDescription?: string;
  dbName?: string;
  dbPassword?: string;
  dbType?: string;
  dbUserName?: string;
  host?: string;
  instanceId?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      dbDescription: 'DbDescription',
      dbName: 'DbName',
      dbPassword: 'DbPassword',
      dbType: 'DbType',
      dbUserName: 'DbUserName',
      host: 'Host',
      instanceId: 'InstanceId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbDescription: 'string',
      dbName: 'string',
      dbPassword: 'string',
      dbType: 'string',
      dbUserName: 'string',
      host: 'string',
      instanceId: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDatabaseResponseBody;
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
      body: ModifyDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGatewayRequest extends $tea.Model {
  gatewayDesc?: string;
  gatewayId?: string;
  gatewayName?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayDesc: 'GatewayDesc',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayDesc: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGatewayResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyGatewayResponseBody;
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
      body: ModifyGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryDatabaseRequest extends $tea.Model {
  clientToken?: string;
  dbDescription?: string;
  dbName?: string;
  dbPassword?: string;
  dbType?: string;
  dbUserName?: string;
  gatewayId?: string;
  host?: string;
  port?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dbDescription: 'DbDescription',
      dbName: 'DbName',
      dbPassword: 'DbPassword',
      dbType: 'DbType',
      dbUserName: 'DbUserName',
      gatewayId: 'GatewayId',
      host: 'Host',
      port: 'Port',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dbDescription: 'string',
      dbName: 'string',
      dbPassword: 'string',
      dbType: 'string',
      dbUserName: 'string',
      gatewayId: 'string',
      host: 'string',
      port: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryDatabaseResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryDatabaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RetryDatabaseResponseBody;
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
      body: RetryDatabaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopGatewayRequest extends $tea.Model {
  gatewayId?: string;
  gatewayInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      gatewayInstanceId: 'GatewayInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      gatewayInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopGatewayResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      errorMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopGatewayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopGatewayResponseBody;
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
      body: StopGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
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
      'ap-northeast-1': "dg.aliyuncs.com",
      'ap-northeast-2-pop': "dg.aliyuncs.com",
      'ap-south-1': "dg.aliyuncs.com",
      'ap-southeast-1': "dg.aliyuncs.com",
      'ap-southeast-2': "dg.aliyuncs.com",
      'ap-southeast-3': "dg.aliyuncs.com",
      'ap-southeast-5': "dg.aliyuncs.com",
      'cn-beijing': "dg.aliyuncs.com",
      'cn-beijing-finance-1': "dg.aliyuncs.com",
      'cn-beijing-finance-pop': "dg.aliyuncs.com",
      'cn-beijing-gov-1': "dg.aliyuncs.com",
      'cn-beijing-nu16-b01': "dg.aliyuncs.com",
      'cn-chengdu': "dg.aliyuncs.com",
      'cn-edge-1': "dg.aliyuncs.com",
      'cn-fujian': "dg.aliyuncs.com",
      'cn-haidian-cm12-c01': "dg.aliyuncs.com",
      'cn-hangzhou-bj-b01': "dg.aliyuncs.com",
      'cn-hangzhou-finance': "dg.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "dg.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "dg.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "dg.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "dg.aliyuncs.com",
      'cn-hangzhou-test-306': "dg.aliyuncs.com",
      'cn-hongkong': "dg.aliyuncs.com",
      'cn-hongkong-finance-pop': "dg.aliyuncs.com",
      'cn-huhehaote': "dg.aliyuncs.com",
      'cn-north-2-gov-1': "dg.aliyuncs.com",
      'cn-qingdao': "dg.aliyuncs.com",
      'cn-qingdao-nebula': "dg.aliyuncs.com",
      'cn-shanghai': "dg.aliyuncs.com",
      'cn-shanghai-et15-b01': "dg.aliyuncs.com",
      'cn-shanghai-et2-b01': "dg.aliyuncs.com",
      'cn-shanghai-finance-1': "dg.aliyuncs.com",
      'cn-shanghai-inner': "dg.aliyuncs.com",
      'cn-shanghai-internal-test-1': "dg.aliyuncs.com",
      'cn-shenzhen': "dg.aliyuncs.com",
      'cn-shenzhen-finance-1': "dg.aliyuncs.com",
      'cn-shenzhen-inner': "dg.aliyuncs.com",
      'cn-shenzhen-st4-d01': "dg.aliyuncs.com",
      'cn-shenzhen-su18-b01': "dg.aliyuncs.com",
      'cn-wuhan': "dg.aliyuncs.com",
      'cn-yushanfang': "dg.aliyuncs.com",
      'cn-zhangbei-na61-b01': "dg.aliyuncs.com",
      'cn-zhangjiakou': "dg.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "dg.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "dg.aliyuncs.com",
      'eu-central-1': "dg.aliyuncs.com",
      'eu-west-1': "dg.aliyuncs.com",
      'eu-west-1-oxs': "dg.aliyuncs.com",
      'me-east-1': "dg.aliyuncs.com",
      'rus-west-1-pop': "dg.aliyuncs.com",
      'us-east-1': "dg.aliyuncs.com",
      'us-west-1': "dg.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dg", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addDatabaseWithOptions(request: AddDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<AddDatabaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dbDescription)) {
      body["DbDescription"] = request.dbDescription;
    }

    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.dbPassword)) {
      body["DbPassword"] = request.dbPassword;
    }

    if (!Util.isUnset(request.dbType)) {
      body["DbType"] = request.dbType;
    }

    if (!Util.isUnset(request.dbUserName)) {
      body["DbUserName"] = request.dbUserName;
    }

    if (!Util.isUnset(request.gatewayId)) {
      body["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.host)) {
      body["Host"] = request.host;
    }

    if (!Util.isUnset(request.port)) {
      body["Port"] = request.port;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddDatabase",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDatabaseResponse>(await this.callApi(params, req, runtime), new AddDatabaseResponse({}));
  }

  async addDatabase(request: AddDatabaseRequest): Promise<AddDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDatabaseWithOptions(request, runtime);
  }

  async addDatabaseListWithOptions(request: AddDatabaseListRequest, runtime: $Util.RuntimeOptions): Promise<AddDatabaseListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.databaseString)) {
      body["DatabaseString"] = request.databaseString;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddDatabaseList",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDatabaseListResponse>(await this.callApi(params, req, runtime), new AddDatabaseListResponse({}));
  }

  async addDatabaseList(request: AddDatabaseListRequest): Promise<AddDatabaseListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDatabaseListWithOptions(request, runtime);
  }

  async connectDatabaseWithOptions(request: ConnectDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<ConnectDatabaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.dbPassword)) {
      body["DbPassword"] = request.dbPassword;
    }

    if (!Util.isUnset(request.dbType)) {
      body["DbType"] = request.dbType;
    }

    if (!Util.isUnset(request.dbUserName)) {
      body["DbUserName"] = request.dbUserName;
    }

    if (!Util.isUnset(request.gatewayId)) {
      body["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.host)) {
      body["Host"] = request.host;
    }

    if (!Util.isUnset(request.port)) {
      body["Port"] = request.port;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ConnectDatabase",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConnectDatabaseResponse>(await this.callApi(params, req, runtime), new ConnectDatabaseResponse({}));
  }

  async connectDatabase(request: ConnectDatabaseRequest): Promise<ConnectDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.connectDatabaseWithOptions(request, runtime);
  }

  async createDatabaseAccessPointWithOptions(request: CreateDatabaseAccessPointRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatabaseAccessPointResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dbInstanceId)) {
      body["DbInstanceId"] = request.dbInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcAZone)) {
      body["VpcAZone"] = request.vpcAZone;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcRegionId)) {
      body["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDatabaseAccessPoint",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDatabaseAccessPointResponse>(await this.callApi(params, req, runtime), new CreateDatabaseAccessPointResponse({}));
  }

  async createDatabaseAccessPoint(request: CreateDatabaseAccessPointRequest): Promise<CreateDatabaseAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatabaseAccessPointWithOptions(request, runtime);
  }

  async createGatewayWithOptions(request: CreateGatewayRequest, runtime: $Util.RuntimeOptions): Promise<CreateGatewayResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.gatewayDesc)) {
      body["GatewayDesc"] = request.gatewayDesc;
    }

    if (!Util.isUnset(request.gatewayName)) {
      body["GatewayName"] = request.gatewayName;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateGateway",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGatewayResponse>(await this.callApi(params, req, runtime), new CreateGatewayResponse({}));
  }

  async createGateway(request: CreateGatewayRequest): Promise<CreateGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGatewayWithOptions(request, runtime);
  }

  async createGatewayVerifyCodeWithOptions(request: CreateGatewayVerifyCodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateGatewayVerifyCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.gatewayId)) {
      body["GatewayId"] = request.gatewayId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateGatewayVerifyCode",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGatewayVerifyCodeResponse>(await this.callApi(params, req, runtime), new CreateGatewayVerifyCodeResponse({}));
  }

  async createGatewayVerifyCode(request: CreateGatewayVerifyCodeRequest): Promise<CreateGatewayVerifyCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGatewayVerifyCodeWithOptions(request, runtime);
  }

  async deleteDatabaseWithOptions(request: DeleteDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatabaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDatabase",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDatabaseResponse>(await this.callApi(params, req, runtime), new DeleteDatabaseResponse({}));
  }

  async deleteDatabase(request: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatabaseWithOptions(request, runtime);
  }

  async deleteDatabaseAccessPointWithOptions(request: DeleteDatabaseAccessPointRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatabaseAccessPointResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbInstanceId)) {
      body["DbInstanceId"] = request.dbInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcAZone)) {
      body["VpcAZone"] = request.vpcAZone;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcRegionId)) {
      body["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDatabaseAccessPoint",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDatabaseAccessPointResponse>(await this.callApi(params, req, runtime), new DeleteDatabaseAccessPointResponse({}));
  }

  async deleteDatabaseAccessPoint(request: DeleteDatabaseAccessPointRequest): Promise<DeleteDatabaseAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatabaseAccessPointWithOptions(request, runtime);
  }

  async deleteGatewayWithOptions(request: DeleteGatewayRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.gatewayId)) {
      body["GatewayId"] = request.gatewayId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGateway",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayResponse>(await this.callApi(params, req, runtime), new DeleteGatewayResponse({}));
  }

  async deleteGateway(request: DeleteGatewayRequest): Promise<DeleteGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayWithOptions(request, runtime);
  }

  async deleteGatewayInstanceWithOptions(request: DeleteGatewayInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.gatewayId)) {
      body["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayInstanceId)) {
      body["GatewayInstanceId"] = request.gatewayInstanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayInstance",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayInstanceResponse>(await this.callApi(params, req, runtime), new DeleteGatewayInstanceResponse({}));
  }

  async deleteGatewayInstance(request: DeleteGatewayInstanceRequest): Promise<DeleteGatewayInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayInstanceWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2019-03-27",
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

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async downloadGatewayProgramWithOptions(request: DownloadGatewayProgramRequest, runtime: $Util.RuntimeOptions): Promise<DownloadGatewayProgramResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dgVersion)) {
      body["DgVersion"] = request.dgVersion;
    }

    if (!Util.isUnset(request.userOS)) {
      body["UserOS"] = request.userOS;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DownloadGatewayProgram",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadGatewayProgramResponse>(await this.callApi(params, req, runtime), new DownloadGatewayProgramResponse({}));
  }

  async downloadGatewayProgram(request: DownloadGatewayProgramRequest): Promise<DownloadGatewayProgramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadGatewayProgramWithOptions(request, runtime);
  }

  async findUserGatewayByIdWithOptions(request: FindUserGatewayByIdRequest, runtime: $Util.RuntimeOptions): Promise<FindUserGatewayByIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.gatewayId)) {
      body["GatewayId"] = request.gatewayId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "FindUserGatewayById",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FindUserGatewayByIdResponse>(await this.callApi(params, req, runtime), new FindUserGatewayByIdResponse({}));
  }

  async findUserGatewayById(request: FindUserGatewayByIdRequest): Promise<FindUserGatewayByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findUserGatewayByIdWithOptions(request, runtime);
  }

  async getUserDatabasesWithOptions(request: GetUserDatabasesRequest, runtime: $Util.RuntimeOptions): Promise<GetUserDatabasesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbType)) {
      body["DbType"] = request.dbType;
    }

    if (!Util.isUnset(request.gatewayId)) {
      body["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.host)) {
      body["Host"] = request.host;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.port)) {
      body["Port"] = request.port;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserDatabases",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserDatabasesResponse>(await this.callApi(params, req, runtime), new GetUserDatabasesResponse({}));
  }

  async getUserDatabases(request: GetUserDatabasesRequest): Promise<GetUserDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserDatabasesWithOptions(request, runtime);
  }

  async getUserGatewayInstancesWithOptions(request: GetUserGatewayInstancesRequest, runtime: $Util.RuntimeOptions): Promise<GetUserGatewayInstancesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.gatewayId)) {
      body["GatewayId"] = request.gatewayId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserGatewayInstances",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserGatewayInstancesResponse>(await this.callApi(params, req, runtime), new GetUserGatewayInstancesResponse({}));
  }

  async getUserGatewayInstances(request: GetUserGatewayInstancesRequest): Promise<GetUserGatewayInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserGatewayInstancesWithOptions(request, runtime);
  }

  async getUserGatewaysWithOptions(request: GetUserGatewaysRequest, runtime: $Util.RuntimeOptions): Promise<GetUserGatewaysResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserGateways",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserGatewaysResponse>(await this.callApi(params, req, runtime), new GetUserGatewaysResponse({}));
  }

  async getUserGateways(request: GetUserGatewaysRequest): Promise<GetUserGatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserGatewaysWithOptions(request, runtime);
  }

  async listDatabaseAccessPointWithOptions(request: ListDatabaseAccessPointRequest, runtime: $Util.RuntimeOptions): Promise<ListDatabaseAccessPointResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbInstanceId)) {
      body["DbInstanceId"] = request.dbInstanceId;
    }

    if (!Util.isUnset(request.gatewayId)) {
      body["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.host)) {
      body["Host"] = request.host;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.port)) {
      body["Port"] = request.port;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.searchKey)) {
      body["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListDatabaseAccessPoint",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDatabaseAccessPointResponse>(await this.callApi(params, req, runtime), new ListDatabaseAccessPointResponse({}));
  }

  async listDatabaseAccessPoint(request: ListDatabaseAccessPointRequest): Promise<ListDatabaseAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatabaseAccessPointWithOptions(request, runtime);
  }

  async modifyDatabaseWithOptions(request: ModifyDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDatabaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbDescription)) {
      body["DbDescription"] = request.dbDescription;
    }

    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.dbPassword)) {
      body["DbPassword"] = request.dbPassword;
    }

    if (!Util.isUnset(request.dbType)) {
      body["DbType"] = request.dbType;
    }

    if (!Util.isUnset(request.dbUserName)) {
      body["DbUserName"] = request.dbUserName;
    }

    if (!Util.isUnset(request.host)) {
      body["Host"] = request.host;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.port)) {
      body["Port"] = request.port;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDatabase",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDatabaseResponse>(await this.callApi(params, req, runtime), new ModifyDatabaseResponse({}));
  }

  async modifyDatabase(request: ModifyDatabaseRequest): Promise<ModifyDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDatabaseWithOptions(request, runtime);
  }

  async modifyGatewayWithOptions(request: ModifyGatewayRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGatewayResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.gatewayDesc)) {
      body["GatewayDesc"] = request.gatewayDesc;
    }

    if (!Util.isUnset(request.gatewayId)) {
      body["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayName)) {
      body["GatewayName"] = request.gatewayName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGateway",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGatewayResponse>(await this.callApi(params, req, runtime), new ModifyGatewayResponse({}));
  }

  async modifyGateway(request: ModifyGatewayRequest): Promise<ModifyGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGatewayWithOptions(request, runtime);
  }

  async retryDatabaseWithOptions(request: RetryDatabaseRequest, runtime: $Util.RuntimeOptions): Promise<RetryDatabaseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dbDescription)) {
      body["DbDescription"] = request.dbDescription;
    }

    if (!Util.isUnset(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!Util.isUnset(request.dbPassword)) {
      body["DbPassword"] = request.dbPassword;
    }

    if (!Util.isUnset(request.dbType)) {
      body["DbType"] = request.dbType;
    }

    if (!Util.isUnset(request.dbUserName)) {
      body["DbUserName"] = request.dbUserName;
    }

    if (!Util.isUnset(request.gatewayId)) {
      body["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.host)) {
      body["Host"] = request.host;
    }

    if (!Util.isUnset(request.port)) {
      body["Port"] = request.port;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RetryDatabase",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RetryDatabaseResponse>(await this.callApi(params, req, runtime), new RetryDatabaseResponse({}));
  }

  async retryDatabase(request: RetryDatabaseRequest): Promise<RetryDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryDatabaseWithOptions(request, runtime);
  }

  async stopGatewayWithOptions(request: StopGatewayRequest, runtime: $Util.RuntimeOptions): Promise<StopGatewayResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.gatewayId)) {
      body["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayInstanceId)) {
      body["GatewayInstanceId"] = request.gatewayInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopGateway",
      version: "2019-03-27",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopGatewayResponse>(await this.callApi(params, req, runtime), new StopGatewayResponse({}));
  }

  async stopGateway(request: StopGatewayRequest): Promise<StopGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopGatewayWithOptions(request, runtime);
  }

}
