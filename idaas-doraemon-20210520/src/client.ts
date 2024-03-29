// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateAuthenticatorRegistrationRequest extends $tea.Model {
  applicationExternalId?: string;
  authenticatorType?: string;
  clientExtendParamsJson?: string;
  clientExtendParamsJsonSign?: string;
  registrationContext?: string;
  serverExtendParamsJson?: string;
  userDisplayName?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationExternalId: 'ApplicationExternalId',
      authenticatorType: 'AuthenticatorType',
      clientExtendParamsJson: 'ClientExtendParamsJson',
      clientExtendParamsJsonSign: 'ClientExtendParamsJsonSign',
      registrationContext: 'RegistrationContext',
      serverExtendParamsJson: 'ServerExtendParamsJson',
      userDisplayName: 'UserDisplayName',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationExternalId: 'string',
      authenticatorType: 'string',
      clientExtendParamsJson: 'string',
      clientExtendParamsJsonSign: 'string',
      registrationContext: 'string',
      serverExtendParamsJson: 'string',
      userDisplayName: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthenticatorRegistrationResponseBody extends $tea.Model {
  challengeBase64?: string;
  options?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      challengeBase64: 'ChallengeBase64',
      options: 'Options',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      challengeBase64: 'string',
      options: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthenticatorRegistrationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAuthenticatorRegistrationResponseBody;
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
      body: CreateAuthenticatorRegistrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserAuthenticateOptionsRequest extends $tea.Model {
  applicationExternalId?: string;
  authenticatorType?: string;
  bindHashBase64?: string;
  clientExtendParamsJson?: string;
  clientExtendParamsJsonSign?: string;
  serverExtendParamsJson?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationExternalId: 'ApplicationExternalId',
      authenticatorType: 'AuthenticatorType',
      bindHashBase64: 'BindHashBase64',
      clientExtendParamsJson: 'ClientExtendParamsJson',
      clientExtendParamsJsonSign: 'ClientExtendParamsJsonSign',
      serverExtendParamsJson: 'ServerExtendParamsJson',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationExternalId: 'string',
      authenticatorType: 'string',
      bindHashBase64: 'string',
      clientExtendParamsJson: 'string',
      clientExtendParamsJsonSign: 'string',
      serverExtendParamsJson: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserAuthenticateOptionsResponseBody extends $tea.Model {
  challengeBase64?: string;
  options?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      challengeBase64: 'ChallengeBase64',
      options: 'Options',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      challengeBase64: 'string',
      options: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserAuthenticateOptionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserAuthenticateOptionsResponseBody;
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
      body: CreateUserAuthenticateOptionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterAuthenticatorRequest extends $tea.Model {
  applicationExternalId?: string;
  authenticatorUuid?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationExternalId: 'ApplicationExternalId',
      authenticatorUuid: 'AuthenticatorUuid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationExternalId: 'string',
      authenticatorUuid: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterAuthenticatorResponseBody extends $tea.Model {
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

export class DeregisterAuthenticatorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeregisterAuthenticatorResponseBody;
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
      body: DeregisterAuthenticatorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchAccessTokenRequest extends $tea.Model {
  applicationExternalId?: string;
  mobileExtendParamsJson?: string;
  mobileExtendParamsJsonSign?: string;
  serverExtendParamsJson?: string;
  userId?: string;
  XClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      applicationExternalId: 'ApplicationExternalId',
      mobileExtendParamsJson: 'MobileExtendParamsJson',
      mobileExtendParamsJsonSign: 'MobileExtendParamsJsonSign',
      serverExtendParamsJson: 'ServerExtendParamsJson',
      userId: 'UserId',
      XClientIp: 'XClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationExternalId: 'string',
      mobileExtendParamsJson: 'string',
      mobileExtendParamsJsonSign: 'string',
      serverExtendParamsJson: 'string',
      userId: 'string',
      XClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchAccessTokenResponseBody extends $tea.Model {
  code?: string;
  data?: FetchAccessTokenResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: FetchAccessTokenResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchAccessTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FetchAccessTokenResponseBody;
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
      body: FetchAccessTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthenticatorRequest extends $tea.Model {
  applicationExternalId?: string;
  authenticatorUuid?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationExternalId: 'ApplicationExternalId',
      authenticatorUuid: 'AuthenticatorUuid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationExternalId: 'string',
      authenticatorUuid: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthenticatorResponseBody extends $tea.Model {
  authenticator?: GetAuthenticatorResponseBodyAuthenticator;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticator: 'Authenticator',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticator: GetAuthenticatorResponseBodyAuthenticator,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthenticatorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAuthenticatorResponseBody;
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
      body: GetAuthenticatorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthenticationLogsRequest extends $tea.Model {
  applicationExternalId?: string;
  authenticatorType?: string;
  authenticatorUuid?: string;
  credentialId?: string;
  fromTime?: number;
  logTag?: string;
  pageNumber?: number;
  pageSize?: number;
  toTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationExternalId: 'ApplicationExternalId',
      authenticatorType: 'AuthenticatorType',
      authenticatorUuid: 'AuthenticatorUuid',
      credentialId: 'CredentialId',
      fromTime: 'FromTime',
      logTag: 'LogTag',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      toTime: 'ToTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationExternalId: 'string',
      authenticatorType: 'string',
      authenticatorUuid: 'string',
      credentialId: 'string',
      fromTime: 'number',
      logTag: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      toTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthenticationLogsResponseBody extends $tea.Model {
  authenticationLogContent?: ListAuthenticationLogsResponseBodyAuthenticationLogContent[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authenticationLogContent: 'AuthenticationLogContent',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationLogContent: { 'type': 'array', 'itemType': ListAuthenticationLogsResponseBodyAuthenticationLogContent },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthenticationLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAuthenticationLogsResponseBody;
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
      body: ListAuthenticationLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthenticatorOpsLogsRequest extends $tea.Model {
  applicationExternalId?: string;
  authenticatorType?: string;
  authenticatorUuid?: string;
  fromTime?: number;
  pageNumber?: number;
  pageSize?: number;
  toTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationExternalId: 'ApplicationExternalId',
      authenticatorType: 'AuthenticatorType',
      authenticatorUuid: 'AuthenticatorUuid',
      fromTime: 'FromTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      toTime: 'ToTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationExternalId: 'string',
      authenticatorType: 'string',
      authenticatorUuid: 'string',
      fromTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      toTime: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthenticatorOpsLogsResponseBody extends $tea.Model {
  authenticationLogContent?: ListAuthenticatorOpsLogsResponseBodyAuthenticationLogContent[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authenticationLogContent: 'AuthenticationLogContent',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationLogContent: { 'type': 'array', 'itemType': ListAuthenticatorOpsLogsResponseBodyAuthenticationLogContent },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthenticatorOpsLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAuthenticatorOpsLogsResponseBody;
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
      body: ListAuthenticatorOpsLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthenticatorsRequest extends $tea.Model {
  applicationExternalId?: string;
  authenticatorType?: string;
  pageNumber?: number;
  pageSize?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationExternalId: 'ApplicationExternalId',
      authenticatorType: 'AuthenticatorType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationExternalId: 'string',
      authenticatorType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthenticatorsResponseBody extends $tea.Model {
  authenticator?: ListAuthenticatorsResponseBodyAuthenticator[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authenticator: 'Authenticator',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticator: { 'type': 'array', 'itemType': ListAuthenticatorsResponseBodyAuthenticator },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthenticatorsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAuthenticatorsResponseBody;
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
      body: ListAuthenticatorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCostUnitOrdersRequest extends $tea.Model {
  beginDate?: string;
  finalDate?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      finalDate: 'FinalDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      finalDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCostUnitOrdersResponseBody extends $tea.Model {
  items?: ListCostUnitOrdersResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListCostUnitOrdersResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCostUnitOrdersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCostUnitOrdersResponseBody;
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
      body: ListCostUnitOrdersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderConsumeStatisticRecordsRequest extends $tea.Model {
  aliOrderCode?: string;
  applicationExternalId?: string;
  pageNumber?: number;
  pageSize?: number;
  serviceCode?: string;
  statisticTimeMax?: string;
  statisticTimeMin?: string;
  static names(): { [key: string]: string } {
    return {
      aliOrderCode: 'AliOrderCode',
      applicationExternalId: 'ApplicationExternalId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serviceCode: 'ServiceCode',
      statisticTimeMax: 'StatisticTimeMax',
      statisticTimeMin: 'StatisticTimeMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliOrderCode: 'string',
      applicationExternalId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serviceCode: 'string',
      statisticTimeMax: 'string',
      statisticTimeMin: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderConsumeStatisticRecordsResponseBody extends $tea.Model {
  items?: ListOrderConsumeStatisticRecordsResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalElements?: number;
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListOrderConsumeStatisticRecordsResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderConsumeStatisticRecordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOrderConsumeStatisticRecordsResponseBody;
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
      body: ListOrderConsumeStatisticRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPwnedPasswordsRequest extends $tea.Model {
  prefixHexPasswordSha1Hash?: string;
  static names(): { [key: string]: string } {
    return {
      prefixHexPasswordSha1Hash: 'PrefixHexPasswordSha1Hash',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefixHexPasswordSha1Hash: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPwnedPasswordsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  pwnedPasswordInfos?: ListPwnedPasswordsResponseBodyPwnedPasswordInfos[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pwnedPasswordInfos: 'PwnedPasswordInfos',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pwnedPasswordInfos: { 'type': 'array', 'itemType': ListPwnedPasswordsResponseBodyPwnedPasswordInfos },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPwnedPasswordsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPwnedPasswordsResponseBody;
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
      body: ListPwnedPasswordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  applicationExternalId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationExternalId: 'ApplicationExternalId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationExternalId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  users?: ListUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListUsersResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersResponseBody;
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
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsReportsRequest extends $tea.Model {
  appId?: string;
  eventId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eventId: 'EventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eventId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsReportsResponseBody extends $tea.Model {
  requestId?: string;
  smsReports?: QuerySmsReportsResponseBodySmsReports[];
  totalElements?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      smsReports: 'SmsReports',
      totalElements: 'TotalElements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      smsReports: { 'type': 'array', 'itemType': QuerySmsReportsResponseBodySmsReports },
      totalElements: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsReportsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySmsReportsResponseBody;
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
      body: QuerySmsReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsUpsResponseBody extends $tea.Model {
  requestId?: string;
  smsUps?: QuerySmsUpsResponseBodySmsUps[];
  totalElements?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      smsUps: 'SmsUps',
      totalElements: 'TotalElements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      smsUps: { 'type': 'array', 'itemType': QuerySmsUpsResponseBodySmsUps },
      totalElements: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsUpsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QuerySmsUpsResponseBody;
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
      body: QuerySmsUpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterAuthenticatorRequest extends $tea.Model {
  applicationExternalId?: string;
  authenticatorName?: string;
  authenticatorType?: string;
  clientExtendParamsJson?: string;
  clientExtendParamsJsonSign?: string;
  logParams?: string;
  registrationContext?: string;
  requireChallengeBase64?: string;
  serverExtendParamsJson?: string;
  userId?: string;
  userSourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      applicationExternalId: 'ApplicationExternalId',
      authenticatorName: 'AuthenticatorName',
      authenticatorType: 'AuthenticatorType',
      clientExtendParamsJson: 'ClientExtendParamsJson',
      clientExtendParamsJsonSign: 'ClientExtendParamsJsonSign',
      logParams: 'LogParams',
      registrationContext: 'RegistrationContext',
      requireChallengeBase64: 'RequireChallengeBase64',
      serverExtendParamsJson: 'ServerExtendParamsJson',
      userId: 'UserId',
      userSourceIp: 'UserSourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationExternalId: 'string',
      authenticatorName: 'string',
      authenticatorType: 'string',
      clientExtendParamsJson: 'string',
      clientExtendParamsJsonSign: 'string',
      logParams: 'string',
      registrationContext: 'string',
      requireChallengeBase64: 'string',
      serverExtendParamsJson: 'string',
      userId: 'string',
      userSourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterAuthenticatorResponseBody extends $tea.Model {
  authenticatorUuid?: string;
  etasResponseSting?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticatorUuid: 'AuthenticatorUuid',
      etasResponseSting: 'EtasResponseSting',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticatorUuid: 'string',
      etasResponseSting: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterAuthenticatorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RegisterAuthenticatorResponseBody;
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
      body: RegisterAuthenticatorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceInvokeRequest extends $tea.Model {
  applicationExternalId?: string;
  doraemonAction?: string;
  mobileExtendParamsJson?: string;
  mobileExtendParamsJsonSign?: string;
  serverExtendParamsJson?: string;
  serviceCode?: string;
  testModel?: boolean;
  XClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      applicationExternalId: 'ApplicationExternalId',
      doraemonAction: 'DoraemonAction',
      mobileExtendParamsJson: 'MobileExtendParamsJson',
      mobileExtendParamsJsonSign: 'MobileExtendParamsJsonSign',
      serverExtendParamsJson: 'ServerExtendParamsJson',
      serviceCode: 'ServiceCode',
      testModel: 'TestModel',
      XClientIp: 'XClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationExternalId: 'string',
      doraemonAction: 'string',
      mobileExtendParamsJson: 'string',
      mobileExtendParamsJsonSign: 'string',
      serverExtendParamsJson: 'string',
      serviceCode: 'string',
      testModel: 'boolean',
      XClientIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceInvokeResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  eventId?: string;
  idToken?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      eventId: 'EventId',
      idToken: 'IdToken',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      eventId: 'string',
      idToken: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceInvokeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ServiceInvokeResponseBody;
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
      body: ServiceInvokeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuthenticatorAttributeRequest extends $tea.Model {
  applicationExternalId?: string;
  authenticatorName?: string;
  authenticatorUuid?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationExternalId: 'ApplicationExternalId',
      authenticatorName: 'AuthenticatorName',
      authenticatorUuid: 'AuthenticatorUuid',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationExternalId: 'string',
      authenticatorName: 'string',
      authenticatorUuid: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuthenticatorAttributeResponseBody extends $tea.Model {
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

export class UpdateAuthenticatorAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAuthenticatorAttributeResponseBody;
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
      body: UpdateAuthenticatorAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyIdTokenRequest extends $tea.Model {
  applicationExternalId?: string;
  jwtIdToken?: string;
  static names(): { [key: string]: string } {
    return {
      applicationExternalId: 'ApplicationExternalId',
      jwtIdToken: 'JwtIdToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationExternalId: 'string',
      jwtIdToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyIdTokenResponseBody extends $tea.Model {
  requestId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyIdTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyIdTokenResponseBody;
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
      body: VerifyIdTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyUserAuthenticationRequest extends $tea.Model {
  applicationExternalId?: string;
  authenticationContext?: string;
  authenticatorType?: string;
  clientExtendParamsJson?: string;
  clientExtendParamsJsonSign?: string;
  logParams?: string;
  logTag?: string;
  requireBindHashBase64?: string;
  requireChallengeBase64?: string;
  serverExtendParamsJson?: string;
  userId?: string;
  userSourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      applicationExternalId: 'ApplicationExternalId',
      authenticationContext: 'AuthenticationContext',
      authenticatorType: 'AuthenticatorType',
      clientExtendParamsJson: 'ClientExtendParamsJson',
      clientExtendParamsJsonSign: 'ClientExtendParamsJsonSign',
      logParams: 'LogParams',
      logTag: 'LogTag',
      requireBindHashBase64: 'RequireBindHashBase64',
      requireChallengeBase64: 'RequireChallengeBase64',
      serverExtendParamsJson: 'ServerExtendParamsJson',
      userId: 'UserId',
      userSourceIp: 'UserSourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationExternalId: 'string',
      authenticationContext: 'string',
      authenticatorType: 'string',
      clientExtendParamsJson: 'string',
      clientExtendParamsJsonSign: 'string',
      logParams: 'string',
      logTag: 'string',
      requireBindHashBase64: 'string',
      requireChallengeBase64: 'string',
      serverExtendParamsJson: 'string',
      userId: 'string',
      userSourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyUserAuthenticationResponseBody extends $tea.Model {
  authenticateResultInfo?: VerifyUserAuthenticationResponseBodyAuthenticateResultInfo;
  etasSDKString?: string;
  idToken?: string;
  requestId?: string;
  verifyResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      authenticateResultInfo: 'AuthenticateResultInfo',
      etasSDKString: 'EtasSDKString',
      idToken: 'IdToken',
      requestId: 'RequestId',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticateResultInfo: VerifyUserAuthenticationResponseBodyAuthenticateResultInfo,
      etasSDKString: 'string',
      idToken: 'string',
      requestId: 'string',
      verifyResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyUserAuthenticationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VerifyUserAuthenticationResponseBody;
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
      body: VerifyUserAuthenticationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FetchAccessTokenResponseBodyData extends $tea.Model {
  accessToken?: string;
  expiresIn?: string;
  idToken?: string;
  refreshToken?: string;
  scope?: string;
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'Access_token',
      expiresIn: 'Expires_in',
      idToken: 'Id_token',
      refreshToken: 'Refresh_token',
      scope: 'Scope',
      tokenType: 'Token_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      expiresIn: 'string',
      idToken: 'string',
      refreshToken: 'string',
      scope: 'string',
      tokenType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthenticatorResponseBodyAuthenticator extends $tea.Model {
  authenticatorName?: string;
  authenticatorUuid?: string;
  credentialId?: string;
  customAuthenticator?: string;
  lastVerifySourceIp?: string;
  lastVerifyTime?: number;
  lastVerifyUserAgent?: string;
  registerSourceIp?: string;
  registerTime?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authenticatorName: 'AuthenticatorName',
      authenticatorUuid: 'AuthenticatorUuid',
      credentialId: 'CredentialId',
      customAuthenticator: 'CustomAuthenticator',
      lastVerifySourceIp: 'LastVerifySourceIp',
      lastVerifyTime: 'LastVerifyTime',
      lastVerifyUserAgent: 'LastVerifyUserAgent',
      registerSourceIp: 'RegisterSourceIp',
      registerTime: 'RegisterTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticatorName: 'string',
      authenticatorUuid: 'string',
      credentialId: 'string',
      customAuthenticator: 'string',
      lastVerifySourceIp: 'string',
      lastVerifyTime: 'number',
      lastVerifyUserAgent: 'string',
      registerSourceIp: 'string',
      registerTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthenticationLogsResponseBodyAuthenticationLogContent extends $tea.Model {
  aliUid?: string;
  applicationExternalId?: string;
  applicationUuid?: string;
  authenticationAction?: string;
  authenticationTime?: number;
  authenticatorName?: string;
  authenticatorType?: string;
  authenticatorUuid?: string;
  challengeBase64?: string;
  credentialId?: string;
  errorCode?: string;
  errorMessage?: string;
  logParams?: string;
  logTag?: string;
  rawAuthenticationContext?: string;
  tenantId?: string;
  userAgent?: string;
  userId?: string;
  userSourceIp?: string;
  verifyResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      applicationExternalId: 'ApplicationExternalId',
      applicationUuid: 'ApplicationUuid',
      authenticationAction: 'AuthenticationAction',
      authenticationTime: 'AuthenticationTime',
      authenticatorName: 'AuthenticatorName',
      authenticatorType: 'AuthenticatorType',
      authenticatorUuid: 'AuthenticatorUuid',
      challengeBase64: 'ChallengeBase64',
      credentialId: 'CredentialId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      logParams: 'LogParams',
      logTag: 'LogTag',
      rawAuthenticationContext: 'RawAuthenticationContext',
      tenantId: 'TenantId',
      userAgent: 'UserAgent',
      userId: 'UserId',
      userSourceIp: 'UserSourceIp',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      applicationExternalId: 'string',
      applicationUuid: 'string',
      authenticationAction: 'string',
      authenticationTime: 'number',
      authenticatorName: 'string',
      authenticatorType: 'string',
      authenticatorUuid: 'string',
      challengeBase64: 'string',
      credentialId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      logParams: 'string',
      logTag: 'string',
      rawAuthenticationContext: 'string',
      tenantId: 'string',
      userAgent: 'string',
      userId: 'string',
      userSourceIp: 'string',
      verifyResult: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthenticatorOpsLogsResponseBodyAuthenticationLogContent extends $tea.Model {
  aliUid?: string;
  applicationExternalId?: string;
  applicationUuid?: string;
  authenticatorName?: string;
  authenticatorType?: string;
  authenticatorUuid?: string;
  challengeBase64?: string;
  credentialId?: string;
  errorCode?: string;
  errorMessage?: string;
  logParams?: string;
  operationAction?: string;
  operationResult?: boolean;
  operationTime?: number;
  rawContext?: string;
  tenantId?: string;
  userAgent?: string;
  userId?: string;
  userSourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      applicationExternalId: 'ApplicationExternalId',
      applicationUuid: 'ApplicationUuid',
      authenticatorName: 'AuthenticatorName',
      authenticatorType: 'AuthenticatorType',
      authenticatorUuid: 'AuthenticatorUuid',
      challengeBase64: 'ChallengeBase64',
      credentialId: 'CredentialId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      logParams: 'LogParams',
      operationAction: 'OperationAction',
      operationResult: 'OperationResult',
      operationTime: 'OperationTime',
      rawContext: 'RawContext',
      tenantId: 'TenantId',
      userAgent: 'UserAgent',
      userId: 'UserId',
      userSourceIp: 'UserSourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      applicationExternalId: 'string',
      applicationUuid: 'string',
      authenticatorName: 'string',
      authenticatorType: 'string',
      authenticatorUuid: 'string',
      challengeBase64: 'string',
      credentialId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      logParams: 'string',
      operationAction: 'string',
      operationResult: 'boolean',
      operationTime: 'number',
      rawContext: 'string',
      tenantId: 'string',
      userAgent: 'string',
      userId: 'string',
      userSourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthenticatorsResponseBodyAuthenticator extends $tea.Model {
  applicationExternalId?: string;
  authenticatorName?: string;
  authenticatorUuid?: string;
  credentialId?: string;
  lastVerifyTime?: number;
  registerTime?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      applicationExternalId: 'ApplicationExternalId',
      authenticatorName: 'AuthenticatorName',
      authenticatorUuid: 'AuthenticatorUuid',
      credentialId: 'CredentialId',
      lastVerifyTime: 'LastVerifyTime',
      registerTime: 'RegisterTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationExternalId: 'string',
      authenticatorName: 'string',
      authenticatorUuid: 'string',
      credentialId: 'string',
      lastVerifyTime: 'number',
      registerTime: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCostUnitOrdersResponseBodyItems extends $tea.Model {
  aliOrderCode?: string;
  aliOrderInstanceId?: string;
  createTime?: number;
  exhausted?: boolean;
  expiredTime?: number;
  orderStatus?: string;
  refundTime?: number;
  totalCostUnit?: number;
  usedCostUnit?: number;
  static names(): { [key: string]: string } {
    return {
      aliOrderCode: 'AliOrderCode',
      aliOrderInstanceId: 'AliOrderInstanceId',
      createTime: 'CreateTime',
      exhausted: 'Exhausted',
      expiredTime: 'ExpiredTime',
      orderStatus: 'OrderStatus',
      refundTime: 'RefundTime',
      totalCostUnit: 'TotalCostUnit',
      usedCostUnit: 'UsedCostUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliOrderCode: 'string',
      aliOrderInstanceId: 'string',
      createTime: 'number',
      exhausted: 'boolean',
      expiredTime: 'number',
      orderStatus: 'string',
      refundTime: 'number',
      totalCostUnit: 'number',
      usedCostUnit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrderConsumeStatisticRecordsResponseBodyItems extends $tea.Model {
  aliOrderCode?: string;
  applicationExternalId?: string;
  chargedCount?: number;
  serviceCode?: string;
  statisticTime?: number;
  totalPrice?: number;
  unitPrice?: number;
  static names(): { [key: string]: string } {
    return {
      aliOrderCode: 'AliOrderCode',
      applicationExternalId: 'ApplicationExternalId',
      chargedCount: 'ChargedCount',
      serviceCode: 'ServiceCode',
      statisticTime: 'StatisticTime',
      totalPrice: 'TotalPrice',
      unitPrice: 'UnitPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliOrderCode: 'string',
      applicationExternalId: 'string',
      chargedCount: 'number',
      serviceCode: 'string',
      statisticTime: 'number',
      totalPrice: 'number',
      unitPrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPwnedPasswordsResponseBodyPwnedPasswordInfos extends $tea.Model {
  hexPasswordSha1Hash?: string;
  pwnedCount?: number;
  static names(): { [key: string]: string } {
    return {
      hexPasswordSha1Hash: 'HexPasswordSha1Hash',
      pwnedCount: 'PwnedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hexPasswordSha1Hash: 'string',
      pwnedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $tea.Model {
  userDisplayName?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userDisplayName: 'UserDisplayName',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userDisplayName: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsReportsResponseBodySmsReports extends $tea.Model {
  appId?: string;
  chargedCount?: number;
  code?: string;
  eventId?: string;
  mobile?: string;
  sn?: string;
  stat?: string;
  tenantId?: string;
  tid?: string;
  time?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      chargedCount: 'ChargedCount',
      code: 'Code',
      eventId: 'EventId',
      mobile: 'Mobile',
      sn: 'Sn',
      stat: 'Stat',
      tenantId: 'TenantId',
      tid: 'Tid',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      chargedCount: 'number',
      code: 'string',
      eventId: 'string',
      mobile: 'string',
      sn: 'string',
      stat: 'string',
      tenantId: 'string',
      tid: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySmsUpsResponseBodySmsUps extends $tea.Model {
  content?: string;
  destCode?: string;
  phoneNumber?: string;
  sendTime?: string;
  sequenceId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      destCode: 'DestCode',
      phoneNumber: 'PhoneNumber',
      sendTime: 'SendTime',
      sequenceId: 'SequenceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      destCode: 'string',
      phoneNumber: 'string',
      sendTime: 'string',
      sequenceId: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyUserAuthenticationResponseBodyAuthenticateResultInfo extends $tea.Model {
  bindHashBase64?: string;
  credentialId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bindHashBase64: 'BindHashBase64',
      credentialId: 'CredentialId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindHashBase64: 'string',
      credentialId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this._endpointMap = {
      'cn-hangzhou': "idaas-doraemon.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("idaas-doraemon", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createAuthenticatorRegistrationWithOptions(request: CreateAuthenticatorRegistrationRequest, runtime: $Util.RuntimeOptions): Promise<CreateAuthenticatorRegistrationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationExternalId)) {
      query["ApplicationExternalId"] = request.applicationExternalId;
    }

    if (!Util.isUnset(request.authenticatorType)) {
      query["AuthenticatorType"] = request.authenticatorType;
    }

    if (!Util.isUnset(request.clientExtendParamsJson)) {
      query["ClientExtendParamsJson"] = request.clientExtendParamsJson;
    }

    if (!Util.isUnset(request.clientExtendParamsJsonSign)) {
      query["ClientExtendParamsJsonSign"] = request.clientExtendParamsJsonSign;
    }

    if (!Util.isUnset(request.registrationContext)) {
      query["RegistrationContext"] = request.registrationContext;
    }

    if (!Util.isUnset(request.serverExtendParamsJson)) {
      query["ServerExtendParamsJson"] = request.serverExtendParamsJson;
    }

    if (!Util.isUnset(request.userDisplayName)) {
      query["UserDisplayName"] = request.userDisplayName;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAuthenticatorRegistration",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAuthenticatorRegistrationResponse>(await this.callApi(params, req, runtime), new CreateAuthenticatorRegistrationResponse({}));
  }

  async createAuthenticatorRegistration(request: CreateAuthenticatorRegistrationRequest): Promise<CreateAuthenticatorRegistrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAuthenticatorRegistrationWithOptions(request, runtime);
  }

  async createUserAuthenticateOptionsWithOptions(request: CreateUserAuthenticateOptionsRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserAuthenticateOptionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationExternalId)) {
      query["ApplicationExternalId"] = request.applicationExternalId;
    }

    if (!Util.isUnset(request.authenticatorType)) {
      query["AuthenticatorType"] = request.authenticatorType;
    }

    if (!Util.isUnset(request.bindHashBase64)) {
      query["BindHashBase64"] = request.bindHashBase64;
    }

    if (!Util.isUnset(request.clientExtendParamsJson)) {
      query["ClientExtendParamsJson"] = request.clientExtendParamsJson;
    }

    if (!Util.isUnset(request.clientExtendParamsJsonSign)) {
      query["ClientExtendParamsJsonSign"] = request.clientExtendParamsJsonSign;
    }

    if (!Util.isUnset(request.serverExtendParamsJson)) {
      query["ServerExtendParamsJson"] = request.serverExtendParamsJson;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUserAuthenticateOptions",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserAuthenticateOptionsResponse>(await this.callApi(params, req, runtime), new CreateUserAuthenticateOptionsResponse({}));
  }

  async createUserAuthenticateOptions(request: CreateUserAuthenticateOptionsRequest): Promise<CreateUserAuthenticateOptionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserAuthenticateOptionsWithOptions(request, runtime);
  }

  async deregisterAuthenticatorWithOptions(request: DeregisterAuthenticatorRequest, runtime: $Util.RuntimeOptions): Promise<DeregisterAuthenticatorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationExternalId)) {
      query["ApplicationExternalId"] = request.applicationExternalId;
    }

    if (!Util.isUnset(request.authenticatorUuid)) {
      query["AuthenticatorUuid"] = request.authenticatorUuid;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeregisterAuthenticator",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeregisterAuthenticatorResponse>(await this.callApi(params, req, runtime), new DeregisterAuthenticatorResponse({}));
  }

  async deregisterAuthenticator(request: DeregisterAuthenticatorRequest): Promise<DeregisterAuthenticatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deregisterAuthenticatorWithOptions(request, runtime);
  }

  async fetchAccessTokenWithOptions(request: FetchAccessTokenRequest, runtime: $Util.RuntimeOptions): Promise<FetchAccessTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationExternalId)) {
      query["ApplicationExternalId"] = request.applicationExternalId;
    }

    if (!Util.isUnset(request.mobileExtendParamsJson)) {
      query["MobileExtendParamsJson"] = request.mobileExtendParamsJson;
    }

    if (!Util.isUnset(request.mobileExtendParamsJsonSign)) {
      query["MobileExtendParamsJsonSign"] = request.mobileExtendParamsJsonSign;
    }

    if (!Util.isUnset(request.serverExtendParamsJson)) {
      query["ServerExtendParamsJson"] = request.serverExtendParamsJson;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.XClientIp)) {
      query["XClientIp"] = request.XClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FetchAccessToken",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FetchAccessTokenResponse>(await this.callApi(params, req, runtime), new FetchAccessTokenResponse({}));
  }

  async fetchAccessToken(request: FetchAccessTokenRequest): Promise<FetchAccessTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fetchAccessTokenWithOptions(request, runtime);
  }

  async getAuthenticatorWithOptions(request: GetAuthenticatorRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthenticatorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationExternalId)) {
      query["ApplicationExternalId"] = request.applicationExternalId;
    }

    if (!Util.isUnset(request.authenticatorUuid)) {
      query["AuthenticatorUuid"] = request.authenticatorUuid;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAuthenticator",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuthenticatorResponse>(await this.callApi(params, req, runtime), new GetAuthenticatorResponse({}));
  }

  async getAuthenticator(request: GetAuthenticatorRequest): Promise<GetAuthenticatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthenticatorWithOptions(request, runtime);
  }

  async listAuthenticationLogsWithOptions(request: ListAuthenticationLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListAuthenticationLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationExternalId)) {
      query["ApplicationExternalId"] = request.applicationExternalId;
    }

    if (!Util.isUnset(request.authenticatorType)) {
      query["AuthenticatorType"] = request.authenticatorType;
    }

    if (!Util.isUnset(request.authenticatorUuid)) {
      query["AuthenticatorUuid"] = request.authenticatorUuid;
    }

    if (!Util.isUnset(request.credentialId)) {
      query["CredentialId"] = request.credentialId;
    }

    if (!Util.isUnset(request.fromTime)) {
      query["FromTime"] = request.fromTime;
    }

    if (!Util.isUnset(request.logTag)) {
      query["LogTag"] = request.logTag;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.toTime)) {
      query["ToTime"] = request.toTime;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAuthenticationLogs",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAuthenticationLogsResponse>(await this.callApi(params, req, runtime), new ListAuthenticationLogsResponse({}));
  }

  async listAuthenticationLogs(request: ListAuthenticationLogsRequest): Promise<ListAuthenticationLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuthenticationLogsWithOptions(request, runtime);
  }

  async listAuthenticatorOpsLogsWithOptions(request: ListAuthenticatorOpsLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListAuthenticatorOpsLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationExternalId)) {
      query["ApplicationExternalId"] = request.applicationExternalId;
    }

    if (!Util.isUnset(request.authenticatorType)) {
      query["AuthenticatorType"] = request.authenticatorType;
    }

    if (!Util.isUnset(request.authenticatorUuid)) {
      query["AuthenticatorUuid"] = request.authenticatorUuid;
    }

    if (!Util.isUnset(request.fromTime)) {
      query["FromTime"] = request.fromTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.toTime)) {
      query["ToTime"] = request.toTime;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAuthenticatorOpsLogs",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAuthenticatorOpsLogsResponse>(await this.callApi(params, req, runtime), new ListAuthenticatorOpsLogsResponse({}));
  }

  async listAuthenticatorOpsLogs(request: ListAuthenticatorOpsLogsRequest): Promise<ListAuthenticatorOpsLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuthenticatorOpsLogsWithOptions(request, runtime);
  }

  async listAuthenticatorsWithOptions(request: ListAuthenticatorsRequest, runtime: $Util.RuntimeOptions): Promise<ListAuthenticatorsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationExternalId)) {
      query["ApplicationExternalId"] = request.applicationExternalId;
    }

    if (!Util.isUnset(request.authenticatorType)) {
      query["AuthenticatorType"] = request.authenticatorType;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAuthenticators",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAuthenticatorsResponse>(await this.callApi(params, req, runtime), new ListAuthenticatorsResponse({}));
  }

  async listAuthenticators(request: ListAuthenticatorsRequest): Promise<ListAuthenticatorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAuthenticatorsWithOptions(request, runtime);
  }

  async listCostUnitOrdersWithOptions(request: ListCostUnitOrdersRequest, runtime: $Util.RuntimeOptions): Promise<ListCostUnitOrdersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.beginDate)) {
      query["BeginDate"] = request.beginDate;
    }

    if (!Util.isUnset(request.finalDate)) {
      query["FinalDate"] = request.finalDate;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCostUnitOrders",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCostUnitOrdersResponse>(await this.callApi(params, req, runtime), new ListCostUnitOrdersResponse({}));
  }

  async listCostUnitOrders(request: ListCostUnitOrdersRequest): Promise<ListCostUnitOrdersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCostUnitOrdersWithOptions(request, runtime);
  }

  async listOrderConsumeStatisticRecordsWithOptions(request: ListOrderConsumeStatisticRecordsRequest, runtime: $Util.RuntimeOptions): Promise<ListOrderConsumeStatisticRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliOrderCode)) {
      query["AliOrderCode"] = request.aliOrderCode;
    }

    if (!Util.isUnset(request.applicationExternalId)) {
      query["ApplicationExternalId"] = request.applicationExternalId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.statisticTimeMax)) {
      query["StatisticTimeMax"] = request.statisticTimeMax;
    }

    if (!Util.isUnset(request.statisticTimeMin)) {
      query["StatisticTimeMin"] = request.statisticTimeMin;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOrderConsumeStatisticRecords",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOrderConsumeStatisticRecordsResponse>(await this.callApi(params, req, runtime), new ListOrderConsumeStatisticRecordsResponse({}));
  }

  async listOrderConsumeStatisticRecords(request: ListOrderConsumeStatisticRecordsRequest): Promise<ListOrderConsumeStatisticRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrderConsumeStatisticRecordsWithOptions(request, runtime);
  }

  async listPwnedPasswordsWithOptions(request: ListPwnedPasswordsRequest, runtime: $Util.RuntimeOptions): Promise<ListPwnedPasswordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.prefixHexPasswordSha1Hash)) {
      query["PrefixHexPasswordSha1Hash"] = request.prefixHexPasswordSha1Hash;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPwnedPasswords",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPwnedPasswordsResponse>(await this.callApi(params, req, runtime), new ListPwnedPasswordsResponse({}));
  }

  async listPwnedPasswords(request: ListPwnedPasswordsRequest): Promise<ListPwnedPasswordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPwnedPasswordsWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationExternalId)) {
      query["ApplicationExternalId"] = request.applicationExternalId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async querySmsReportsWithOptions(request: QuerySmsReportsRequest, runtime: $Util.RuntimeOptions): Promise<QuerySmsReportsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySmsReports",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySmsReportsResponse>(await this.callApi(params, req, runtime), new QuerySmsReportsResponse({}));
  }

  async querySmsReports(request: QuerySmsReportsRequest): Promise<QuerySmsReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySmsReportsWithOptions(request, runtime);
  }

  async querySmsUpsWithOptions(runtime: $Util.RuntimeOptions): Promise<QuerySmsUpsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "QuerySmsUps",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySmsUpsResponse>(await this.callApi(params, req, runtime), new QuerySmsUpsResponse({}));
  }

  async querySmsUps(): Promise<QuerySmsUpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySmsUpsWithOptions(runtime);
  }

  async registerAuthenticatorWithOptions(request: RegisterAuthenticatorRequest, runtime: $Util.RuntimeOptions): Promise<RegisterAuthenticatorResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationExternalId)) {
      query["ApplicationExternalId"] = request.applicationExternalId;
    }

    if (!Util.isUnset(request.authenticatorName)) {
      query["AuthenticatorName"] = request.authenticatorName;
    }

    if (!Util.isUnset(request.authenticatorType)) {
      query["AuthenticatorType"] = request.authenticatorType;
    }

    if (!Util.isUnset(request.clientExtendParamsJson)) {
      query["ClientExtendParamsJson"] = request.clientExtendParamsJson;
    }

    if (!Util.isUnset(request.clientExtendParamsJsonSign)) {
      query["ClientExtendParamsJsonSign"] = request.clientExtendParamsJsonSign;
    }

    if (!Util.isUnset(request.logParams)) {
      query["LogParams"] = request.logParams;
    }

    if (!Util.isUnset(request.registrationContext)) {
      query["RegistrationContext"] = request.registrationContext;
    }

    if (!Util.isUnset(request.requireChallengeBase64)) {
      query["RequireChallengeBase64"] = request.requireChallengeBase64;
    }

    if (!Util.isUnset(request.serverExtendParamsJson)) {
      query["ServerExtendParamsJson"] = request.serverExtendParamsJson;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userSourceIp)) {
      query["UserSourceIp"] = request.userSourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterAuthenticator",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterAuthenticatorResponse>(await this.callApi(params, req, runtime), new RegisterAuthenticatorResponse({}));
  }

  async registerAuthenticator(request: RegisterAuthenticatorRequest): Promise<RegisterAuthenticatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerAuthenticatorWithOptions(request, runtime);
  }

  async serviceInvokeWithOptions(request: ServiceInvokeRequest, runtime: $Util.RuntimeOptions): Promise<ServiceInvokeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationExternalId)) {
      query["ApplicationExternalId"] = request.applicationExternalId;
    }

    if (!Util.isUnset(request.doraemonAction)) {
      query["DoraemonAction"] = request.doraemonAction;
    }

    if (!Util.isUnset(request.mobileExtendParamsJson)) {
      query["MobileExtendParamsJson"] = request.mobileExtendParamsJson;
    }

    if (!Util.isUnset(request.mobileExtendParamsJsonSign)) {
      query["MobileExtendParamsJsonSign"] = request.mobileExtendParamsJsonSign;
    }

    if (!Util.isUnset(request.serverExtendParamsJson)) {
      query["ServerExtendParamsJson"] = request.serverExtendParamsJson;
    }

    if (!Util.isUnset(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!Util.isUnset(request.testModel)) {
      query["TestModel"] = request.testModel;
    }

    if (!Util.isUnset(request.XClientIp)) {
      query["XClientIp"] = request.XClientIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ServiceInvoke",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ServiceInvokeResponse>(await this.callApi(params, req, runtime), new ServiceInvokeResponse({}));
  }

  async serviceInvoke(request: ServiceInvokeRequest): Promise<ServiceInvokeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.serviceInvokeWithOptions(request, runtime);
  }

  async updateAuthenticatorAttributeWithOptions(request: UpdateAuthenticatorAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAuthenticatorAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationExternalId)) {
      query["ApplicationExternalId"] = request.applicationExternalId;
    }

    if (!Util.isUnset(request.authenticatorName)) {
      query["AuthenticatorName"] = request.authenticatorName;
    }

    if (!Util.isUnset(request.authenticatorUuid)) {
      query["AuthenticatorUuid"] = request.authenticatorUuid;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAuthenticatorAttribute",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAuthenticatorAttributeResponse>(await this.callApi(params, req, runtime), new UpdateAuthenticatorAttributeResponse({}));
  }

  async updateAuthenticatorAttribute(request: UpdateAuthenticatorAttributeRequest): Promise<UpdateAuthenticatorAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAuthenticatorAttributeWithOptions(request, runtime);
  }

  async verifyIdTokenWithOptions(request: VerifyIdTokenRequest, runtime: $Util.RuntimeOptions): Promise<VerifyIdTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationExternalId)) {
      query["ApplicationExternalId"] = request.applicationExternalId;
    }

    if (!Util.isUnset(request.jwtIdToken)) {
      query["JwtIdToken"] = request.jwtIdToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyIdToken",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyIdTokenResponse>(await this.callApi(params, req, runtime), new VerifyIdTokenResponse({}));
  }

  async verifyIdToken(request: VerifyIdTokenRequest): Promise<VerifyIdTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyIdTokenWithOptions(request, runtime);
  }

  async verifyUserAuthenticationWithOptions(request: VerifyUserAuthenticationRequest, runtime: $Util.RuntimeOptions): Promise<VerifyUserAuthenticationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationExternalId)) {
      query["ApplicationExternalId"] = request.applicationExternalId;
    }

    if (!Util.isUnset(request.authenticationContext)) {
      query["AuthenticationContext"] = request.authenticationContext;
    }

    if (!Util.isUnset(request.authenticatorType)) {
      query["AuthenticatorType"] = request.authenticatorType;
    }

    if (!Util.isUnset(request.clientExtendParamsJson)) {
      query["ClientExtendParamsJson"] = request.clientExtendParamsJson;
    }

    if (!Util.isUnset(request.clientExtendParamsJsonSign)) {
      query["ClientExtendParamsJsonSign"] = request.clientExtendParamsJsonSign;
    }

    if (!Util.isUnset(request.logParams)) {
      query["LogParams"] = request.logParams;
    }

    if (!Util.isUnset(request.logTag)) {
      query["LogTag"] = request.logTag;
    }

    if (!Util.isUnset(request.requireBindHashBase64)) {
      query["RequireBindHashBase64"] = request.requireBindHashBase64;
    }

    if (!Util.isUnset(request.requireChallengeBase64)) {
      query["RequireChallengeBase64"] = request.requireChallengeBase64;
    }

    if (!Util.isUnset(request.serverExtendParamsJson)) {
      query["ServerExtendParamsJson"] = request.serverExtendParamsJson;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userSourceIp)) {
      query["UserSourceIp"] = request.userSourceIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyUserAuthentication",
      version: "2021-05-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyUserAuthenticationResponse>(await this.callApi(params, req, runtime), new VerifyUserAuthenticationResponse({}));
  }

  async verifyUserAuthentication(request: VerifyUserAuthenticationRequest): Promise<VerifyUserAuthenticationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyUserAuthenticationWithOptions(request, runtime);
  }

}
