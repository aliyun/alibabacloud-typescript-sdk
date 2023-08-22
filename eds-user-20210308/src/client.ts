// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class WaIdPermissions extends $tea.Model {
  code?: string;
  isBasicChild?: boolean;
  name?: string;
  subPermissions?: WaIdPermissions[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isBasicChild: 'IsBasicChild',
      name: 'Name',
      subPermissions: 'SubPermissions',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isBasicChild: 'boolean',
      name: 'string',
      subPermissions: { 'type': 'array', 'itemType': WaIdPermissions },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUsedPropertyRequest extends $tea.Model {
  propertyId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUsedPropertyResponseBody extends $tea.Model {
  requestId?: string;
  useCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      useCount: 'UseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      useCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUsedPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckUsedPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckUsedPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUsedPropertyValueRequest extends $tea.Model {
  propertyId?: number;
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyValueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUsedPropertyValueResponseBody extends $tea.Model {
  requestId?: string;
  useCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      useCount: 'UseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      useCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUsedPropertyValueResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CheckUsedPropertyValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckUsedPropertyValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyRequest extends $tea.Model {
  propertyKey?: string;
  propertyValues?: string[];
  static names(): { [key: string]: string } {
    return {
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyKey: 'string',
      propertyValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponseBody extends $tea.Model {
  createResult?: CreatePropertyResponseBodyCreateResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createResult: 'CreateResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createResult: CreatePropertyResponseBodyCreateResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersRequest extends $tea.Model {
  password?: string;
  users?: CreateUsersRequestUsers[];
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      users: { 'type': 'array', 'itemType': CreateUsersRequestUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponseBody extends $tea.Model {
  createResult?: CreateUsersResponseBodyCreateResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createResult: 'CreateResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createResult: CreateUsersResponseBodyCreateResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserPropertyValueRequest extends $tea.Model {
  propertyId?: number;
  propertyValueId?: number;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyValueId: 'PropertyValueId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyValueId: 'number',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserPropertyValueResponseBody extends $tea.Model {
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

export class DeleteUserPropertyValueResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteUserPropertyValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserPropertyValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMfaDevicesRequest extends $tea.Model {
  adDomain?: string;
  endUserIds?: string[];
  maxResults?: number;
  nextToken?: string;
  serialNumbers?: string[];
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      endUserIds: 'EndUserIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      serialNumbers: 'SerialNumbers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      serialNumbers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMfaDevicesResponseBody extends $tea.Model {
  mfaDevices?: DescribeMfaDevicesResponseBodyMfaDevices[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mfaDevices: 'MfaDevices',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mfaDevices: { 'type': 'array', 'itemType': DescribeMfaDevicesResponseBodyMfaDevices },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMfaDevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeMfaDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMfaDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersRequest extends $tea.Model {
  endUserIds?: string[];
  excludeEndUserIds?: string[];
  filter?: string;
  maxResults?: number;
  nextToken?: string;
  orgId?: string;
  static names(): { [key: string]: string } {
    return {
      endUserIds: 'EndUserIds',
      excludeEndUserIds: 'ExcludeEndUserIds',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orgId: 'OrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      excludeEndUserIds: { 'type': 'array', 'itemType': 'string' },
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orgId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  users?: DescribeUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': DescribeUsersResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersRequest extends $tea.Model {
  excludeEndUserIds?: string[];
  filter?: string;
  includeDesktopCount?: boolean;
  includeDesktopGroupCount?: boolean;
  maxResults?: number;
  nextToken?: string;
  orderParam?: FilterUsersRequestOrderParam;
  orgId?: string;
  ownerType?: string;
  propertyFilterParam?: FilterUsersRequestPropertyFilterParam[];
  propertyKeyValueFilterParam?: FilterUsersRequestPropertyKeyValueFilterParam[];
  static names(): { [key: string]: string } {
    return {
      excludeEndUserIds: 'ExcludeEndUserIds',
      filter: 'Filter',
      includeDesktopCount: 'IncludeDesktopCount',
      includeDesktopGroupCount: 'IncludeDesktopGroupCount',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderParam: 'OrderParam',
      orgId: 'OrgId',
      ownerType: 'OwnerType',
      propertyFilterParam: 'PropertyFilterParam',
      propertyKeyValueFilterParam: 'PropertyKeyValueFilterParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeEndUserIds: { 'type': 'array', 'itemType': 'string' },
      filter: 'string',
      includeDesktopCount: 'boolean',
      includeDesktopGroupCount: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orderParam: FilterUsersRequestOrderParam,
      orgId: 'string',
      ownerType: 'string',
      propertyFilterParam: { 'type': 'array', 'itemType': FilterUsersRequestPropertyFilterParam },
      propertyKeyValueFilterParam: { 'type': 'array', 'itemType': FilterUsersRequestPropertyKeyValueFilterParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersShrinkRequest extends $tea.Model {
  excludeEndUserIds?: string[];
  filter?: string;
  includeDesktopCount?: boolean;
  includeDesktopGroupCount?: boolean;
  maxResults?: number;
  nextToken?: string;
  orderParamShrink?: string;
  orgId?: string;
  ownerType?: string;
  propertyFilterParam?: FilterUsersShrinkRequestPropertyFilterParam[];
  propertyKeyValueFilterParam?: FilterUsersShrinkRequestPropertyKeyValueFilterParam[];
  static names(): { [key: string]: string } {
    return {
      excludeEndUserIds: 'ExcludeEndUserIds',
      filter: 'Filter',
      includeDesktopCount: 'IncludeDesktopCount',
      includeDesktopGroupCount: 'IncludeDesktopGroupCount',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderParamShrink: 'OrderParam',
      orgId: 'OrgId',
      ownerType: 'OwnerType',
      propertyFilterParam: 'PropertyFilterParam',
      propertyKeyValueFilterParam: 'PropertyKeyValueFilterParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeEndUserIds: { 'type': 'array', 'itemType': 'string' },
      filter: 'string',
      includeDesktopCount: 'boolean',
      includeDesktopGroupCount: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orderParamShrink: 'string',
      orgId: 'string',
      ownerType: 'string',
      propertyFilterParam: { 'type': 'array', 'itemType': FilterUsersShrinkRequestPropertyFilterParam },
      propertyKeyValueFilterParam: { 'type': 'array', 'itemType': FilterUsersShrinkRequestPropertyKeyValueFilterParam },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  users?: FilterUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FilterUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FilterUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyResponseBody extends $tea.Model {
  nextToken?: string;
  properties?: ListPropertyResponseBodyProperties[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      properties: 'Properties',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      properties: { 'type': 'array', 'itemType': ListPropertyResponseBodyProperties },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyValueRequest extends $tea.Model {
  propertyId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyValueResponseBody extends $tea.Model {
  propertyValueInfos?: ListPropertyValueResponseBodyPropertyValueInfos[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      propertyValueInfos: 'PropertyValueInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValueInfos: { 'type': 'array', 'itemType': ListPropertyValueResponseBodyPropertyValueInfos },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyValueResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPropertyValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPropertyValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockMfaDeviceRequest extends $tea.Model {
  adDomain?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockMfaDeviceResponseBody extends $tea.Model {
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

export class LockMfaDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LockMfaDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LockMfaDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersRequest extends $tea.Model {
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersResponseBody extends $tea.Model {
  lockUsersResult?: LockUsersResponseBodyLockUsersResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lockUsersResult: 'LockUsersResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockUsersResult: LockUsersResponseBodyLockUsersResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LockUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LockUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserRequest extends $tea.Model {
  email?: string;
  endUserId?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserResponseBody extends $tea.Model {
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

export class ModifyUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySyncStatusByAliUidResponseBody extends $tea.Model {
  code?: string;
  data?: QuerySyncStatusByAliUidResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QuerySyncStatusByAliUidResponseBodyData,
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

export class QuerySyncStatusByAliUidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySyncStatusByAliUidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySyncStatusByAliUidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMfaDeviceRequest extends $tea.Model {
  adDomain?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMfaDeviceResponseBody extends $tea.Model {
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

export class RemoveMfaDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveMfaDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveMfaDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePropertyRequest extends $tea.Model {
  propertyId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemovePropertyResponseBody extends $tea.Model {
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

export class RemovePropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemovePropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemovePropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersRequest extends $tea.Model {
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponseBody extends $tea.Model {
  removeUsersResult?: RemoveUsersResponseBodyRemoveUsersResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      removeUsersResult: 'RemoveUsersResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removeUsersResult: RemoveUsersResponseBodyRemoveUsersResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordRequest extends $tea.Model {
  notifyType?: number;
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      notifyType: 'NotifyType',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyType: 'number',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordResponseBody extends $tea.Model {
  requestId?: string;
  resetUsersResult?: ResetUserPasswordResponseBodyResetUsersResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resetUsersResult: 'ResetUsersResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resetUsersResult: ResetUserPasswordResponseBodyResetUsersResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetUserPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetUserPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserPropertyValueRequest extends $tea.Model {
  propertyId?: number;
  propertyValueId?: number;
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyValueId: 'PropertyValueId',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyValueId: 'number',
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserPropertyValueResponseBody extends $tea.Model {
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

export class SetUserPropertyValueResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetUserPropertyValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetUserPropertyValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncAllEduInfoResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class SyncAllEduInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SyncAllEduInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SyncAllEduInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockMfaDeviceRequest extends $tea.Model {
  adDomain?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockMfaDeviceResponseBody extends $tea.Model {
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

export class UnlockMfaDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnlockMfaDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnlockMfaDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersRequest extends $tea.Model {
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersResponseBody extends $tea.Model {
  requestId?: string;
  unlockUsersResult?: UnlockUsersResponseBodyUnlockUsersResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      unlockUsersResult: 'UnlockUsersResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      unlockUsersResult: UnlockUsersResponseBodyUnlockUsersResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnlockUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnlockUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyRequest extends $tea.Model {
  propertyId?: number;
  propertyKey?: string;
  propertyValues?: UpdatePropertyRequestPropertyValues[];
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      propertyValues: { 'type': 'array', 'itemType': UpdatePropertyRequestPropertyValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyResponseBody extends $tea.Model {
  requestId?: string;
  updateResult?: UpdatePropertyResponseBodyUpdateResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      updateResult: 'UpdateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      updateResult: UpdatePropertyResponseBodyUpdateResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdatePropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponseBodyCreateResultSavePropertyValueModelFailedPropertyValues extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  propertyId?: number;
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      propertyId: 'PropertyId',
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      propertyId: 'number',
      propertyValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponseBodyCreateResultSavePropertyValueModelSavePropertyValues extends $tea.Model {
  propertyValue?: string;
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponseBodyCreateResultSavePropertyValueModel extends $tea.Model {
  failedPropertyValues?: CreatePropertyResponseBodyCreateResultSavePropertyValueModelFailedPropertyValues[];
  savePropertyValues?: CreatePropertyResponseBodyCreateResultSavePropertyValueModelSavePropertyValues[];
  static names(): { [key: string]: string } {
    return {
      failedPropertyValues: 'FailedPropertyValues',
      savePropertyValues: 'SavePropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedPropertyValues: { 'type': 'array', 'itemType': CreatePropertyResponseBodyCreateResultSavePropertyValueModelFailedPropertyValues },
      savePropertyValues: { 'type': 'array', 'itemType': CreatePropertyResponseBodyCreateResultSavePropertyValueModelSavePropertyValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePropertyResponseBodyCreateResult extends $tea.Model {
  propertyId?: number;
  propertyKey?: string;
  savePropertyValueModel?: CreatePropertyResponseBodyCreateResultSavePropertyValueModel;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      savePropertyValueModel: 'SavePropertyValueModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      savePropertyValueModel: CreatePropertyResponseBodyCreateResultSavePropertyValueModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersRequestUsers extends $tea.Model {
  email?: string;
  endUserId?: string;
  orgId?: string;
  ownerType?: string;
  password?: string;
  phone?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      orgId: 'OrgId',
      ownerType: 'OwnerType',
      password: 'Password',
      phone: 'Phone',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      orgId: 'string',
      ownerType: 'string',
      password: 'string',
      phone: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponseBodyCreateResultCreatedUsers extends $tea.Model {
  email?: string;
  endUserId?: string;
  phone?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      phone: 'Phone',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      phone: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponseBodyCreateResultFailedUsers extends $tea.Model {
  email?: string;
  endUserId?: string;
  errorCode?: string;
  errorMessage?: string;
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      phone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponseBodyCreateResult extends $tea.Model {
  createdUsers?: CreateUsersResponseBodyCreateResultCreatedUsers[];
  failedUsers?: CreateUsersResponseBodyCreateResultFailedUsers[];
  static names(): { [key: string]: string } {
    return {
      createdUsers: 'CreatedUsers',
      failedUsers: 'FailedUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdUsers: { 'type': 'array', 'itemType': CreateUsersResponseBodyCreateResultCreatedUsers },
      failedUsers: { 'type': 'array', 'itemType': CreateUsersResponseBodyCreateResultFailedUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMfaDevicesResponseBodyMfaDevices extends $tea.Model {
  consecutiveFails?: number;
  deviceType?: string;
  email?: string;
  endUserId?: string;
  gmtEnabled?: string;
  gmtUnlock?: string;
  id?: number;
  serialNumber?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      consecutiveFails: 'ConsecutiveFails',
      deviceType: 'DeviceType',
      email: 'Email',
      endUserId: 'EndUserId',
      gmtEnabled: 'GmtEnabled',
      gmtUnlock: 'GmtUnlock',
      id: 'Id',
      serialNumber: 'SerialNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consecutiveFails: 'number',
      deviceType: 'string',
      email: 'string',
      endUserId: 'string',
      gmtEnabled: 'string',
      gmtUnlock: 'string',
      id: 'number',
      serialNumber: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersResponseBodyUsers extends $tea.Model {
  email?: string;
  endUserId?: string;
  id?: number;
  isTenantManager?: boolean;
  nickName?: string;
  orgId?: string;
  ownerType?: string;
  phone?: string;
  remark?: string;
  status?: number;
  wyId?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      id: 'Id',
      isTenantManager: 'IsTenantManager',
      nickName: 'NickName',
      orgId: 'OrgId',
      ownerType: 'OwnerType',
      phone: 'Phone',
      remark: 'Remark',
      status: 'Status',
      wyId: 'WyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      id: 'number',
      isTenantManager: 'boolean',
      nickName: 'string',
      orgId: 'string',
      ownerType: 'string',
      phone: 'string',
      remark: 'string',
      status: 'number',
      wyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersRequestOrderParam extends $tea.Model {
  orderField?: string;
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      orderField: 'OrderField',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderField: 'string',
      orderType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersRequestPropertyFilterParam extends $tea.Model {
  propertyId?: number;
  propertyValueIds?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyValueIds: 'PropertyValueIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyValueIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersRequestPropertyKeyValueFilterParam extends $tea.Model {
  propertyKey?: string;
  propertyValues?: string;
  static names(): { [key: string]: string } {
    return {
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyKey: 'string',
      propertyValues: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersShrinkRequestPropertyFilterParam extends $tea.Model {
  propertyId?: number;
  propertyValueIds?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyValueIds: 'PropertyValueIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyValueIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersShrinkRequestPropertyKeyValueFilterParam extends $tea.Model {
  propertyKey?: string;
  propertyValues?: string;
  static names(): { [key: string]: string } {
    return {
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyKey: 'string',
      propertyValues: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBodyUsersExternalInfo extends $tea.Model {
  externalName?: string;
  jobNumber?: string;
  static names(): { [key: string]: string } {
    return {
      externalName: 'ExternalName',
      jobNumber: 'JobNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalName: 'string',
      jobNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBodyUsersUserSetPropertiesModelsPropertyValues extends $tea.Model {
  propertyValue?: string;
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBodyUsersUserSetPropertiesModels extends $tea.Model {
  propertyId?: number;
  propertyKey?: string;
  propertyType?: number;
  propertyValues?: FilterUsersResponseBodyUsersUserSetPropertiesModelsPropertyValues[];
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      propertyType: 'PropertyType',
      propertyValues: 'PropertyValues',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      propertyType: 'number',
      propertyValues: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersUserSetPropertiesModelsPropertyValues },
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FilterUsersResponseBodyUsers extends $tea.Model {
  desktopCount?: number;
  desktopGroupCount?: number;
  email?: string;
  enableAdminAccess?: boolean;
  endUserId?: string;
  externalInfo?: FilterUsersResponseBodyUsersExternalInfo;
  id?: number;
  isTenantManager?: boolean;
  ownerType?: string;
  phone?: string;
  remark?: string;
  status?: number;
  userSetPropertiesModels?: FilterUsersResponseBodyUsersUserSetPropertiesModels[];
  static names(): { [key: string]: string } {
    return {
      desktopCount: 'DesktopCount',
      desktopGroupCount: 'DesktopGroupCount',
      email: 'Email',
      enableAdminAccess: 'EnableAdminAccess',
      endUserId: 'EndUserId',
      externalInfo: 'ExternalInfo',
      id: 'Id',
      isTenantManager: 'IsTenantManager',
      ownerType: 'OwnerType',
      phone: 'Phone',
      remark: 'Remark',
      status: 'Status',
      userSetPropertiesModels: 'UserSetPropertiesModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopCount: 'number',
      desktopGroupCount: 'number',
      email: 'string',
      enableAdminAccess: 'boolean',
      endUserId: 'string',
      externalInfo: FilterUsersResponseBodyUsersExternalInfo,
      id: 'number',
      isTenantManager: 'boolean',
      ownerType: 'string',
      phone: 'string',
      remark: 'string',
      status: 'number',
      userSetPropertiesModels: { 'type': 'array', 'itemType': FilterUsersResponseBodyUsersUserSetPropertiesModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyResponseBodyPropertiesPropertyValues extends $tea.Model {
  propertyValue?: string;
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyResponseBodyProperties extends $tea.Model {
  propertyId?: number;
  propertyKey?: string;
  propertyValues?: ListPropertyResponseBodyPropertiesPropertyValues[];
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      propertyValues: { 'type': 'array', 'itemType': ListPropertyResponseBodyPropertiesPropertyValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPropertyValueResponseBodyPropertyValueInfos extends $tea.Model {
  propertyValue?: string;
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersResponseBodyLockUsersResultFailedUsers extends $tea.Model {
  endUserId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersResponseBodyLockUsersResult extends $tea.Model {
  failedUsers?: LockUsersResponseBodyLockUsersResultFailedUsers[];
  lockedUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      failedUsers: 'FailedUsers',
      lockedUsers: 'LockedUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUsers: { 'type': 'array', 'itemType': LockUsersResponseBodyLockUsersResultFailedUsers },
      lockedUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySyncStatusByAliUidResponseBodyData extends $tea.Model {
  aliUid?: number;
  corpId?: string;
  gmtCreated?: string;
  gmtModified?: string;
  id?: number;
  latestBeginTime?: string;
  latestEndTime?: string;
  latestSuccessTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      corpId: 'CorpId',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      latestBeginTime: 'LatestBeginTime',
      latestEndTime: 'LatestEndTime',
      latestSuccessTime: 'LatestSuccessTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      corpId: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      latestBeginTime: 'string',
      latestEndTime: 'string',
      latestSuccessTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponseBodyRemoveUsersResultFailedUsers extends $tea.Model {
  endUserId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponseBodyRemoveUsersResult extends $tea.Model {
  failedUsers?: RemoveUsersResponseBodyRemoveUsersResultFailedUsers[];
  removedUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      failedUsers: 'FailedUsers',
      removedUsers: 'RemovedUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUsers: { 'type': 'array', 'itemType': RemoveUsersResponseBodyRemoveUsersResultFailedUsers },
      removedUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordResponseBodyResetUsersResultFailedUsers extends $tea.Model {
  endUserId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordResponseBodyResetUsersResult extends $tea.Model {
  failedUsers?: ResetUserPasswordResponseBodyResetUsersResultFailedUsers[];
  resetUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      failedUsers: 'FailedUsers',
      resetUsers: 'ResetUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUsers: { 'type': 'array', 'itemType': ResetUserPasswordResponseBodyResetUsersResultFailedUsers },
      resetUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersResponseBodyUnlockUsersResultFailedUsers extends $tea.Model {
  endUserId?: string;
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersResponseBodyUnlockUsersResult extends $tea.Model {
  failedUsers?: UnlockUsersResponseBodyUnlockUsersResultFailedUsers[];
  unlockedUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      failedUsers: 'FailedUsers',
      unlockedUsers: 'UnlockedUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUsers: { 'type': 'array', 'itemType': UnlockUsersResponseBodyUnlockUsersResultFailedUsers },
      unlockedUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyRequestPropertyValues extends $tea.Model {
  propertyValue?: string;
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelFailedPropertyValues extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  propertyId?: number;
  propertyValue?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      propertyId: 'PropertyId',
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      propertyId: 'number',
      propertyValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelSavePropertyValues extends $tea.Model {
  propertyValue?: string;
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyResponseBodyUpdateResultSavePropertyValueModel extends $tea.Model {
  failedPropertyValues?: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelFailedPropertyValues[];
  savePropertyValues?: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelSavePropertyValues[];
  static names(): { [key: string]: string } {
    return {
      failedPropertyValues: 'FailedPropertyValues',
      savePropertyValues: 'SavePropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedPropertyValues: { 'type': 'array', 'itemType': UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelFailedPropertyValues },
      savePropertyValues: { 'type': 'array', 'itemType': UpdatePropertyResponseBodyUpdateResultSavePropertyValueModelSavePropertyValues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePropertyResponseBodyUpdateResult extends $tea.Model {
  propertyId?: number;
  propertyKey?: string;
  savePropertyValueModel?: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModel;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      savePropertyValueModel: 'SavePropertyValueModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      savePropertyValueModel: UpdatePropertyResponseBodyUpdateResultSavePropertyValueModel,
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eds-user", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async checkUsedPropertyWithOptions(request: CheckUsedPropertyRequest, runtime: $Util.RuntimeOptions): Promise<CheckUsedPropertyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.propertyId)) {
      query["PropertyId"] = request.propertyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckUsedProperty",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckUsedPropertyResponse>(await this.callApi(params, req, runtime), new CheckUsedPropertyResponse({}));
  }

  async checkUsedProperty(request: CheckUsedPropertyRequest): Promise<CheckUsedPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkUsedPropertyWithOptions(request, runtime);
  }

  /**
    * The operation that you want to perform. Set the value to **CheckUsedPropertyValue**.
    *
    * @param request CheckUsedPropertyValueRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CheckUsedPropertyValueResponse
   */
  async checkUsedPropertyValueWithOptions(request: CheckUsedPropertyValueRequest, runtime: $Util.RuntimeOptions): Promise<CheckUsedPropertyValueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.propertyId)) {
      query["PropertyId"] = request.propertyId;
    }

    if (!Util.isUnset(request.propertyValueId)) {
      query["PropertyValueId"] = request.propertyValueId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CheckUsedPropertyValue",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckUsedPropertyValueResponse>(await this.callApi(params, req, runtime), new CheckUsedPropertyValueResponse({}));
  }

  /**
    * The operation that you want to perform. Set the value to **CheckUsedPropertyValue**.
    *
    * @param request CheckUsedPropertyValueRequest
    * @return CheckUsedPropertyValueResponse
   */
  async checkUsedPropertyValue(request: CheckUsedPropertyValueRequest): Promise<CheckUsedPropertyValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkUsedPropertyValueWithOptions(request, runtime);
  }

  async createPropertyWithOptions(request: CreatePropertyRequest, runtime: $Util.RuntimeOptions): Promise<CreatePropertyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.propertyKey)) {
      body["PropertyKey"] = request.propertyKey;
    }

    if (!Util.isUnset(request.propertyValues)) {
      body["PropertyValues"] = request.propertyValues;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProperty",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePropertyResponse>(await this.callApi(params, req, runtime), new CreatePropertyResponse({}));
  }

  async createProperty(request: CreatePropertyRequest): Promise<CreatePropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPropertyWithOptions(request, runtime);
  }

  /**
    * Convenience users are dedicated Elastic Desktop Service (EDS) user accounts and are suitable for scenarios in which you do not need to connect to enterprise Active Directory (AD) systems. The information about a convenience user includes the username, email address, and mobile number. You must specify the username or email address.
    *
    * @param request CreateUsersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateUsersResponse
   */
  async createUsersWithOptions(request: CreateUsersRequest, runtime: $Util.RuntimeOptions): Promise<CreateUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.password)) {
      body["Password"] = request.password;
    }

    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUsersResponse>(await this.callApi(params, req, runtime), new CreateUsersResponse({}));
  }

  /**
    * Convenience users are dedicated Elastic Desktop Service (EDS) user accounts and are suitable for scenarios in which you do not need to connect to enterprise Active Directory (AD) systems. The information about a convenience user includes the username, email address, and mobile number. You must specify the username or email address.
    *
    * @param request CreateUsersRequest
    * @return CreateUsersResponse
   */
  async createUsers(request: CreateUsersRequest): Promise<CreateUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUsersWithOptions(request, runtime);
  }

  /**
    * The operation that you want to perform. Set the value to **DeleteUserPropertyValue**.
    *
    * @param request DeleteUserPropertyValueRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteUserPropertyValueResponse
   */
  async deleteUserPropertyValueWithOptions(request: DeleteUserPropertyValueRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserPropertyValueResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.propertyId)) {
      body["PropertyId"] = request.propertyId;
    }

    if (!Util.isUnset(request.propertyValueId)) {
      body["PropertyValueId"] = request.propertyValueId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserPropertyValue",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserPropertyValueResponse>(await this.callApi(params, req, runtime), new DeleteUserPropertyValueResponse({}));
  }

  /**
    * The operation that you want to perform. Set the value to **DeleteUserPropertyValue**.
    *
    * @param request DeleteUserPropertyValueRequest
    * @return DeleteUserPropertyValueResponse
   */
  async deleteUserPropertyValue(request: DeleteUserPropertyValueRequest): Promise<DeleteUserPropertyValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserPropertyValueWithOptions(request, runtime);
  }

  async describeMfaDevicesWithOptions(request: DescribeMfaDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMfaDevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!Util.isUnset(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.serialNumbers)) {
      query["SerialNumbers"] = request.serialNumbers;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeMfaDevices",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMfaDevicesResponse>(await this.callApi(params, req, runtime), new DescribeMfaDevicesResponse({}));
  }

  async describeMfaDevices(request: DescribeMfaDevicesRequest): Promise<DescribeMfaDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMfaDevicesWithOptions(request, runtime);
  }

  async describeUsersWithOptions(request: DescribeUsersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endUserIds)) {
      body["EndUserIds"] = request.endUserIds;
    }

    if (!Util.isUnset(request.excludeEndUserIds)) {
      body["ExcludeEndUserIds"] = request.excludeEndUserIds;
    }

    if (!Util.isUnset(request.orgId)) {
      body["OrgId"] = request.orgId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUsersResponse>(await this.callApi(params, req, runtime), new DescribeUsersResponse({}));
  }

  async describeUsers(request: DescribeUsersRequest): Promise<DescribeUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsersWithOptions(request, runtime);
  }

  async filterUsersWithOptions(tmpReq: FilterUsersRequest, runtime: $Util.RuntimeOptions): Promise<FilterUsersResponse> {
    Util.validateModel(tmpReq);
    let request = new FilterUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.orderParam)) {
      request.orderParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.orderParam, "OrderParam", "json");
    }

    let query = { };
    if (!Util.isUnset(request.excludeEndUserIds)) {
      query["ExcludeEndUserIds"] = request.excludeEndUserIds;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.includeDesktopCount)) {
      query["IncludeDesktopCount"] = request.includeDesktopCount;
    }

    if (!Util.isUnset(request.includeDesktopGroupCount)) {
      query["IncludeDesktopGroupCount"] = request.includeDesktopGroupCount;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.orderParamShrink)) {
      query["OrderParam"] = request.orderParamShrink;
    }

    if (!Util.isUnset(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!Util.isUnset(request.ownerType)) {
      query["OwnerType"] = request.ownerType;
    }

    if (!Util.isUnset(request.propertyFilterParam)) {
      query["PropertyFilterParam"] = request.propertyFilterParam;
    }

    if (!Util.isUnset(request.propertyKeyValueFilterParam)) {
      query["PropertyKeyValueFilterParam"] = request.propertyKeyValueFilterParam;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FilterUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FilterUsersResponse>(await this.callApi(params, req, runtime), new FilterUsersResponse({}));
  }

  async filterUsers(request: FilterUsersRequest): Promise<FilterUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.filterUsersWithOptions(request, runtime);
  }

  async listPropertyWithOptions(runtime: $Util.RuntimeOptions): Promise<ListPropertyResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListProperty",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPropertyResponse>(await this.callApi(params, req, runtime), new ListPropertyResponse({}));
  }

  async listProperty(): Promise<ListPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPropertyWithOptions(runtime);
  }

  async listPropertyValueWithOptions(request: ListPropertyValueRequest, runtime: $Util.RuntimeOptions): Promise<ListPropertyValueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.propertyId)) {
      query["PropertyId"] = request.propertyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPropertyValue",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPropertyValueResponse>(await this.callApi(params, req, runtime), new ListPropertyValueResponse({}));
  }

  async listPropertyValue(request: ListPropertyValueRequest): Promise<ListPropertyValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPropertyValueWithOptions(request, runtime);
  }

  /**
    * Locks a virtual MFA device that is bound to a convenience user.
    *
    * @param request LockMfaDeviceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return LockMfaDeviceResponse
   */
  async lockMfaDeviceWithOptions(request: LockMfaDeviceRequest, runtime: $Util.RuntimeOptions): Promise<LockMfaDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LockMfaDevice",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LockMfaDeviceResponse>(await this.callApi(params, req, runtime), new LockMfaDeviceResponse({}));
  }

  /**
    * Locks a virtual MFA device that is bound to a convenience user.
    *
    * @param request LockMfaDeviceRequest
    * @return LockMfaDeviceResponse
   */
  async lockMfaDevice(request: LockMfaDeviceRequest): Promise<LockMfaDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockMfaDeviceWithOptions(request, runtime);
  }

  async lockUsersWithOptions(request: LockUsersRequest, runtime: $Util.RuntimeOptions): Promise<LockUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LockUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LockUsersResponse>(await this.callApi(params, req, runtime), new LockUsersResponse({}));
  }

  async lockUsers(request: LockUsersRequest): Promise<LockUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockUsersWithOptions(request, runtime);
  }

  async modifyUserWithOptions(request: ModifyUserRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.phone)) {
      query["Phone"] = request.phone;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyUser",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyUserResponse>(await this.callApi(params, req, runtime), new ModifyUserResponse({}));
  }

  async modifyUser(request: ModifyUserRequest): Promise<ModifyUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserWithOptions(request, runtime);
  }

  async querySyncStatusByAliUidWithOptions(runtime: $Util.RuntimeOptions): Promise<QuerySyncStatusByAliUidResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "QuerySyncStatusByAliUid",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySyncStatusByAliUidResponse>(await this.callApi(params, req, runtime), new QuerySyncStatusByAliUidResponse({}));
  }

  async querySyncStatusByAliUid(): Promise<QuerySyncStatusByAliUidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySyncStatusByAliUidWithOptions(runtime);
  }

  async removeMfaDeviceWithOptions(request: RemoveMfaDeviceRequest, runtime: $Util.RuntimeOptions): Promise<RemoveMfaDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveMfaDevice",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveMfaDeviceResponse>(await this.callApi(params, req, runtime), new RemoveMfaDeviceResponse({}));
  }

  async removeMfaDevice(request: RemoveMfaDeviceRequest): Promise<RemoveMfaDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeMfaDeviceWithOptions(request, runtime);
  }

  async removePropertyWithOptions(request: RemovePropertyRequest, runtime: $Util.RuntimeOptions): Promise<RemovePropertyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.propertyId)) {
      body["PropertyId"] = request.propertyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveProperty",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemovePropertyResponse>(await this.callApi(params, req, runtime), new RemovePropertyResponse({}));
  }

  async removeProperty(request: RemovePropertyRequest): Promise<RemovePropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removePropertyWithOptions(request, runtime);
  }

  async removeUsersWithOptions(request: RemoveUsersRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveUsersResponse>(await this.callApi(params, req, runtime), new RemoveUsersResponse({}));
  }

  async removeUsers(request: RemoveUsersRequest): Promise<RemoveUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUsersWithOptions(request, runtime);
  }

  async resetUserPasswordWithOptions(request: ResetUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetUserPasswordResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.notifyType)) {
      body["NotifyType"] = request.notifyType;
    }

    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResetUserPassword",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetUserPasswordResponse>(await this.callApi(params, req, runtime), new ResetUserPasswordResponse({}));
  }

  async resetUserPassword(request: ResetUserPasswordRequest): Promise<ResetUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetUserPasswordWithOptions(request, runtime);
  }

  /**
    * The ID of the request.
    *
    * @param request SetUserPropertyValueRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetUserPropertyValueResponse
   */
  async setUserPropertyValueWithOptions(request: SetUserPropertyValueRequest, runtime: $Util.RuntimeOptions): Promise<SetUserPropertyValueResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.propertyId)) {
      body["PropertyId"] = request.propertyId;
    }

    if (!Util.isUnset(request.propertyValueId)) {
      body["PropertyValueId"] = request.propertyValueId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetUserPropertyValue",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetUserPropertyValueResponse>(await this.callApi(params, req, runtime), new SetUserPropertyValueResponse({}));
  }

  /**
    * The ID of the request.
    *
    * @param request SetUserPropertyValueRequest
    * @return SetUserPropertyValueResponse
   */
  async setUserPropertyValue(request: SetUserPropertyValueRequest): Promise<SetUserPropertyValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setUserPropertyValueWithOptions(request, runtime);
  }

  async syncAllEduInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<SyncAllEduInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "SyncAllEduInfo",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncAllEduInfoResponse>(await this.callApi(params, req, runtime), new SyncAllEduInfoResponse({}));
  }

  async syncAllEduInfo(): Promise<SyncAllEduInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncAllEduInfoWithOptions(runtime);
  }

  async unlockMfaDeviceWithOptions(request: UnlockMfaDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnlockMfaDeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adDomain)) {
      query["AdDomain"] = request.adDomain;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnlockMfaDevice",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnlockMfaDeviceResponse>(await this.callApi(params, req, runtime), new UnlockMfaDeviceResponse({}));
  }

  async unlockMfaDevice(request: UnlockMfaDeviceRequest): Promise<UnlockMfaDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockMfaDeviceWithOptions(request, runtime);
  }

  async unlockUsersWithOptions(request: UnlockUsersRequest, runtime: $Util.RuntimeOptions): Promise<UnlockUsersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UnlockUsers",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnlockUsersResponse>(await this.callApi(params, req, runtime), new UnlockUsersResponse({}));
  }

  async unlockUsers(request: UnlockUsersRequest): Promise<UnlockUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockUsersWithOptions(request, runtime);
  }

  async updatePropertyWithOptions(request: UpdatePropertyRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePropertyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.propertyId)) {
      body["PropertyId"] = request.propertyId;
    }

    if (!Util.isUnset(request.propertyKey)) {
      body["PropertyKey"] = request.propertyKey;
    }

    if (!Util.isUnset(request.propertyValues)) {
      body["PropertyValues"] = request.propertyValues;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProperty",
      version: "2021-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePropertyResponse>(await this.callApi(params, req, runtime), new UpdatePropertyResponse({}));
  }

  async updateProperty(request: UpdatePropertyRequest): Promise<UpdatePropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePropertyWithOptions(request, runtime);
  }

}
