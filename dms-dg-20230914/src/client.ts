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
  dbInstance?: AddDatabaseResponseBodyDbInstance;
  errorMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dbInstance: 'DbInstance',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dbInstance: AddDatabaseResponseBodyDbInstance,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDatabaseResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDatabaseListResponseBody;
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

export class CheckDGEnabledResponseBody extends $tea.Model {
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

export class CheckDGEnabledResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckDGEnabledResponseBody;
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
      body: CheckDGEnabledResponseBody,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConnectDatabaseResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewayResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewayVerifyCodeResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatabaseResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayInstanceResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DownloadGatewayProgramResponseBody;
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
  errorMsg?: string;
  gateway?: FindUserGatewayByIdResponseBodyGateway;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMsg: 'ErrorMsg',
      gateway: 'Gateway',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMsg: 'string',
      gateway: FindUserGatewayByIdResponseBodyGateway,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FindUserGatewayByIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FindUserGatewayByIdResponseBody;
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
  dbInstanceList?: GetUserDatabasesResponseBodyDbInstanceList;
  errorMsg?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      dbInstanceList: 'DbInstanceList',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      dbInstanceList: GetUserDatabasesResponseBodyDbInstanceList,
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserDatabasesResponseBody;
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
  errorMsg?: string;
  gatewayInstanceList?: GetUserGatewayInstancesResponseBodyGatewayInstanceList[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorMsg: 'ErrorMsg',
      gatewayInstanceList: 'GatewayInstanceList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorMsg: 'string',
      gatewayInstanceList: { 'type': 'array', 'itemType': GetUserGatewayInstancesResponseBodyGatewayInstanceList },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGatewayInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserGatewayInstancesResponseBody;
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
  errorMsg?: string;
  gatewayList?: GetUserGatewaysResponseBodyGatewayList;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      errorMsg: 'ErrorMsg',
      gatewayList: 'GatewayList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      errorMsg: 'string',
      gatewayList: GetUserGatewaysResponseBodyGatewayList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGatewaysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserGatewaysResponseBody;
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
  dbInstanceAccessPointList?: ListDatabaseAccessPointResponseBodyDbInstanceAccessPointList[];
  errorMsg?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      dbInstanceAccessPointList: 'DbInstanceAccessPointList',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      dbInstanceAccessPointList: { 'type': 'array', 'itemType': ListDatabaseAccessPointResponseBodyDbInstanceAccessPointList },
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatabaseAccessPointResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDatabaseResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyGatewayResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RetryDatabaseResponseBody;
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopGatewayResponseBody;
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

export class AddDatabaseResponseBodyDbInstance extends $tea.Model {
  connectHost?: string;
  connectPort?: number;
  dbDescription?: string;
  dbType?: string;
  gatewayId?: string;
  gatewayName?: string;
  host?: string;
  instanceId?: string;
  instanceStatus?: string;
  networkType?: string;
  nodeId?: string;
  parentId?: string;
  port?: number;
  regionId?: string;
  serviceType?: string;
  userId?: string;
  vpcId?: string;
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectHost: 'ConnectHost',
      connectPort: 'ConnectPort',
      dbDescription: 'DbDescription',
      dbType: 'DbType',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      host: 'Host',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      networkType: 'NetworkType',
      nodeId: 'NodeId',
      parentId: 'ParentId',
      port: 'Port',
      regionId: 'RegionId',
      serviceType: 'ServiceType',
      userId: 'UserId',
      vpcId: 'VpcId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectHost: 'string',
      connectPort: 'number',
      dbDescription: 'string',
      dbType: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
      host: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      networkType: 'string',
      nodeId: 'string',
      parentId: 'string',
      port: 'number',
      regionId: 'string',
      serviceType: 'string',
      userId: 'string',
      vpcId: 'string',
      vpcInstanceId: 'string',
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

export class FindUserGatewayByIdResponseBodyGateway extends $tea.Model {
  creatorId?: string;
  dgVersion?: string;
  exceptionMsg?: string;
  gatewayDesc?: string;
  gatewayId?: string;
  gatewayName?: string;
  numOfExceptionInstance?: number;
  numOfRunningInstance?: number;
  regionId?: string;
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      dgVersion: 'DgVersion',
      exceptionMsg: 'ExceptionMsg',
      gatewayDesc: 'GatewayDesc',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      numOfExceptionInstance: 'NumOfExceptionInstance',
      numOfRunningInstance: 'NumOfRunningInstance',
      regionId: 'RegionId',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      dgVersion: 'string',
      exceptionMsg: 'string',
      gatewayDesc: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
      numOfExceptionInstance: 'number',
      numOfRunningInstance: 'number',
      regionId: 'string',
      status: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDatabasesResponseBodyDbInstanceListDbInstance extends $tea.Model {
  connectHost?: string;
  connectPort?: number;
  dbDescription?: string;
  dbType?: string;
  gatewayId?: string;
  gatewayName?: string;
  gmtCreate?: number;
  host?: string;
  instanceId?: string;
  instanceStatus?: string;
  networkType?: string;
  nodeId?: string;
  parentId?: string;
  port?: number;
  regionId?: string;
  serviceType?: string;
  userId?: string;
  vpcId?: string;
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectHost: 'ConnectHost',
      connectPort: 'ConnectPort',
      dbDescription: 'DbDescription',
      dbType: 'DbType',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      gmtCreate: 'GmtCreate',
      host: 'Host',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      networkType: 'NetworkType',
      nodeId: 'NodeId',
      parentId: 'ParentId',
      port: 'Port',
      regionId: 'RegionId',
      serviceType: 'ServiceType',
      userId: 'UserId',
      vpcId: 'VpcId',
      vpcInstanceId: 'VpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectHost: 'string',
      connectPort: 'number',
      dbDescription: 'string',
      dbType: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
      gmtCreate: 'number',
      host: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      networkType: 'string',
      nodeId: 'string',
      parentId: 'string',
      port: 'number',
      regionId: 'string',
      serviceType: 'string',
      userId: 'string',
      vpcId: 'string',
      vpcInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDatabasesResponseBodyDbInstanceList extends $tea.Model {
  dbInstance?: GetUserDatabasesResponseBodyDbInstanceListDbInstance[];
  static names(): { [key: string]: string } {
    return {
      dbInstance: 'DbInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstance: { 'type': 'array', 'itemType': GetUserDatabasesResponseBodyDbInstanceListDbInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGatewayInstancesResponseBodyGatewayInstanceList extends $tea.Model {
  connectEndpointType?: string;
  currentDaemonVersion?: string;
  currentVersion?: string;
  endPoint?: string;
  gatewayId?: string;
  gatewayInstanceId?: string;
  gatewayInstanceStatus?: string;
  lastUpdateTime?: number;
  localIP?: string;
  message?: string;
  outputIP?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectEndpointType: 'ConnectEndpointType',
      currentDaemonVersion: 'CurrentDaemonVersion',
      currentVersion: 'CurrentVersion',
      endPoint: 'EndPoint',
      gatewayId: 'GatewayId',
      gatewayInstanceId: 'GatewayInstanceId',
      gatewayInstanceStatus: 'GatewayInstanceStatus',
      lastUpdateTime: 'LastUpdateTime',
      localIP: 'LocalIP',
      message: 'Message',
      outputIP: 'OutputIP',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectEndpointType: 'string',
      currentDaemonVersion: 'string',
      currentVersion: 'string',
      endPoint: 'string',
      gatewayId: 'string',
      gatewayInstanceId: 'string',
      gatewayInstanceStatus: 'string',
      lastUpdateTime: 'number',
      localIP: 'string',
      message: 'string',
      outputIP: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGatewaysResponseBodyGatewayListGateway extends $tea.Model {
  creatorId?: string;
  dgVersion?: string;
  exceptionMsg?: string;
  gatewayDesc?: string;
  gatewayId?: string;
  gatewayName?: string;
  numOfExceptionInstance?: number;
  numOfRunningInstance?: number;
  regionId?: string;
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      dgVersion: 'DgVersion',
      exceptionMsg: 'ExceptionMsg',
      gatewayDesc: 'GatewayDesc',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      numOfExceptionInstance: 'NumOfExceptionInstance',
      numOfRunningInstance: 'NumOfRunningInstance',
      regionId: 'RegionId',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      dgVersion: 'string',
      exceptionMsg: 'string',
      gatewayDesc: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
      numOfExceptionInstance: 'number',
      numOfRunningInstance: 'number',
      regionId: 'string',
      status: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGatewaysResponseBodyGatewayList extends $tea.Model {
  gateway?: GetUserGatewaysResponseBodyGatewayListGateway[];
  static names(): { [key: string]: string } {
    return {
      gateway: 'Gateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateway: { 'type': 'array', 'itemType': GetUserGatewaysResponseBodyGatewayListGateway },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabaseAccessPointResponseBodyDbInstanceAccessPointList extends $tea.Model {
  accessAddr?: string;
  accessPort?: number;
  dbInstanceId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  routerId?: string;
  vpcAzoneId?: string;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      accessAddr: 'AccessAddr',
      accessPort: 'AccessPort',
      dbInstanceId: 'DbInstanceId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      routerId: 'RouterId',
      vpcAzoneId: 'VpcAzoneId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessAddr: 'string',
      accessPort: 'number',
      dbInstanceId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      routerId: 'string',
      vpcAzoneId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
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
    this._endpoint = this.getEndpoint("dms-dg", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request AddDatabaseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddDatabaseResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @param request AddDatabaseRequest
   * @return AddDatabaseResponse
   */
  async addDatabase(request: AddDatabaseRequest): Promise<AddDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDatabaseWithOptions(request, runtime);
  }

  /**
   * @param request AddDatabaseListRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddDatabaseListResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @param request AddDatabaseListRequest
   * @return AddDatabaseListResponse
   */
  async addDatabaseList(request: AddDatabaseListRequest): Promise<AddDatabaseListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDatabaseListWithOptions(request, runtime);
  }

  /**
   * @param request CheckDGEnabledRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CheckDGEnabledResponse
   */
  async checkDGEnabledWithOptions(runtime: $Util.RuntimeOptions): Promise<CheckDGEnabledResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "CheckDGEnabled",
      version: "2023-09-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckDGEnabledResponse>(await this.callApi(params, req, runtime), new CheckDGEnabledResponse({}));
  }

  /**
   * @return CheckDGEnabledResponse
   */
  async checkDGEnabled(): Promise<CheckDGEnabledResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkDGEnabledWithOptions(runtime);
  }

  /**
   * @param request ConnectDatabaseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ConnectDatabaseResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @param request ConnectDatabaseRequest
   * @return ConnectDatabaseResponse
   */
  async connectDatabase(request: ConnectDatabaseRequest): Promise<ConnectDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.connectDatabaseWithOptions(request, runtime);
  }

  /**
   * @summary 创建网关
   *
   * @param request CreateGatewayRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateGatewayResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @summary 创建网关
   *
   * @param request CreateGatewayRequest
   * @return CreateGatewayResponse
   */
  async createGateway(request: CreateGatewayRequest): Promise<CreateGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGatewayWithOptions(request, runtime);
  }

  /**
   * @summary 创建网关的随机验证码
   *
   * @param request CreateGatewayVerifyCodeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateGatewayVerifyCodeResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @summary 创建网关的随机验证码
   *
   * @param request CreateGatewayVerifyCodeRequest
   * @return CreateGatewayVerifyCodeResponse
   */
  async createGatewayVerifyCode(request: CreateGatewayVerifyCodeRequest): Promise<CreateGatewayVerifyCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGatewayVerifyCodeWithOptions(request, runtime);
  }

  /**
   * @param request DeleteDatabaseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDatabaseResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @param request DeleteDatabaseRequest
   * @return DeleteDatabaseResponse
   */
  async deleteDatabase(request: DeleteDatabaseRequest): Promise<DeleteDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatabaseWithOptions(request, runtime);
  }

  /**
   * @summary 删除网关
   *
   * @param request DeleteGatewayRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteGatewayResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @summary 删除网关
   *
   * @param request DeleteGatewayRequest
   * @return DeleteGatewayResponse
   */
  async deleteGateway(request: DeleteGatewayRequest): Promise<DeleteGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayWithOptions(request, runtime);
  }

  /**
   * @param request DeleteGatewayInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteGatewayInstanceResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @param request DeleteGatewayInstanceRequest
   * @return DeleteGatewayInstanceResponse
   */
  async deleteGatewayInstance(request: DeleteGatewayInstanceRequest): Promise<DeleteGatewayInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGatewayInstanceWithOptions(request, runtime);
  }

  /**
   * @param request DescribeRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DescribeRegionsResponse
   */
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
      version: "2023-09-14",
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
   * @param request DescribeRegionsRequest
   * @return DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * @param request DownloadGatewayProgramRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DownloadGatewayProgramResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @param request DownloadGatewayProgramRequest
   * @return DownloadGatewayProgramResponse
   */
  async downloadGatewayProgram(request: DownloadGatewayProgramRequest): Promise<DownloadGatewayProgramResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadGatewayProgramWithOptions(request, runtime);
  }

  /**
   * @summary 根据GatewayId查找网关详情
   *
   * @param request FindUserGatewayByIdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return FindUserGatewayByIdResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @summary 根据GatewayId查找网关详情
   *
   * @param request FindUserGatewayByIdRequest
   * @return FindUserGatewayByIdResponse
   */
  async findUserGatewayById(request: FindUserGatewayByIdRequest): Promise<FindUserGatewayByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.findUserGatewayByIdWithOptions(request, runtime);
  }

  /**
   * @param request GetUserDatabasesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetUserDatabasesResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @param request GetUserDatabasesRequest
   * @return GetUserDatabasesResponse
   */
  async getUserDatabases(request: GetUserDatabasesRequest): Promise<GetUserDatabasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserDatabasesWithOptions(request, runtime);
  }

  /**
   * @param request GetUserGatewayInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetUserGatewayInstancesResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @param request GetUserGatewayInstancesRequest
   * @return GetUserGatewayInstancesResponse
   */
  async getUserGatewayInstances(request: GetUserGatewayInstancesRequest): Promise<GetUserGatewayInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserGatewayInstancesWithOptions(request, runtime);
  }

  /**
   * @summary 获取用户DG网关列表
   *
   * @param request GetUserGatewaysRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetUserGatewaysResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @summary 获取用户DG网关列表
   *
   * @param request GetUserGatewaysRequest
   * @return GetUserGatewaysResponse
   */
  async getUserGateways(request: GetUserGatewaysRequest): Promise<GetUserGatewaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserGatewaysWithOptions(request, runtime);
  }

  /**
   * @param request ListDatabaseAccessPointRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDatabaseAccessPointResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @param request ListDatabaseAccessPointRequest
   * @return ListDatabaseAccessPointResponse
   */
  async listDatabaseAccessPoint(request: ListDatabaseAccessPointRequest): Promise<ListDatabaseAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatabaseAccessPointWithOptions(request, runtime);
  }

  /**
   * @param request ModifyDatabaseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyDatabaseResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @param request ModifyDatabaseRequest
   * @return ModifyDatabaseResponse
   */
  async modifyDatabase(request: ModifyDatabaseRequest): Promise<ModifyDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDatabaseWithOptions(request, runtime);
  }

  /**
   * @summary 修改网关信息
   *
   * @param request ModifyGatewayRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ModifyGatewayResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @summary 修改网关信息
   *
   * @param request ModifyGatewayRequest
   * @return ModifyGatewayResponse
   */
  async modifyGateway(request: ModifyGatewayRequest): Promise<ModifyGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGatewayWithOptions(request, runtime);
  }

  /**
   * @param request RetryDatabaseRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RetryDatabaseResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @param request RetryDatabaseRequest
   * @return RetryDatabaseResponse
   */
  async retryDatabase(request: RetryDatabaseRequest): Promise<RetryDatabaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.retryDatabaseWithOptions(request, runtime);
  }

  /**
   * @summary 停止网关实例
   *
   * @param request StopGatewayRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return StopGatewayResponse
   */
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
      version: "2023-09-14",
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

  /**
   * @summary 停止网关实例
   *
   * @param request StopGatewayRequest
   * @return StopGatewayResponse
   */
  async stopGateway(request: StopGatewayRequest): Promise<StopGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopGatewayWithOptions(request, runtime);
  }

}
