// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddUserToOrganizationalUnitsRequest extends $tea.Model {
  instanceId?: string;
  organizationalUnitIds?: string[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToOrganizationalUnitsResponseBody extends $tea.Model {
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

export class AddUserToOrganizationalUnitsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUserToOrganizationalUnitsResponseBody;
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
      body: AddUserToOrganizationalUnitsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersToGroupRequest extends $tea.Model {
  groupId?: string;
  instanceId?: string;
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersToGroupResponseBody extends $tea.Model {
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

export class AddUsersToGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddUsersToGroupResponseBody;
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
      body: AddUsersToGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationToGroupsRequest extends $tea.Model {
  applicationId?: string;
  groupIds?: string[];
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      groupIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationToGroupsResponseBody extends $tea.Model {
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

export class AuthorizeApplicationToGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthorizeApplicationToGroupsResponseBody;
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
      body: AuthorizeApplicationToGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationToOrganizationalUnitsRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  organizationalUnitIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationToOrganizationalUnitsResponseBody extends $tea.Model {
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

export class AuthorizeApplicationToOrganizationalUnitsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthorizeApplicationToOrganizationalUnitsResponseBody;
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
      body: AuthorizeApplicationToOrganizationalUnitsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationToUsersRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthorizeApplicationToUsersResponseBody extends $tea.Model {
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

export class AuthorizeApplicationToUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthorizeApplicationToUsersResponseBody;
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
      body: AuthorizeApplicationToUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $tea.Model {
  applicationName?: string;
  applicationSourceType?: string;
  applicationTemplateId?: string;
  description?: string;
  instanceId?: string;
  logoUrl?: string;
  ssoType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      applicationSourceType: 'ApplicationSourceType',
      applicationTemplateId: 'ApplicationTemplateId',
      description: 'Description',
      instanceId: 'InstanceId',
      logoUrl: 'LogoUrl',
      ssoType: 'SsoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      applicationSourceType: 'string',
      applicationTemplateId: 'string',
      description: 'string',
      instanceId: 'string',
      logoUrl: 'string',
      ssoType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponseBody extends $tea.Model {
  applicationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApplicationResponseBody;
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
      body: CreateApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationClientSecretRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationClientSecretResponseBody extends $tea.Model {
  applicationClientSecret?: CreateApplicationClientSecretResponseBodyApplicationClientSecret;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationClientSecret: 'ApplicationClientSecret',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationClientSecret: CreateApplicationClientSecretResponseBodyApplicationClientSecret,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationClientSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApplicationClientSecretResponseBody;
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
      body: CreateApplicationClientSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $tea.Model {
  domain?: string;
  filing?: CreateDomainRequestFiling;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      filing: 'Filing',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      filing: CreateDomainRequestFiling,
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBody extends $tea.Model {
  domainId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDomainResponseBody;
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
      body: CreateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainProxyTokenRequest extends $tea.Model {
  domainId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainProxyTokenResponseBody extends $tea.Model {
  domainProxyTokenId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainProxyTokenId: 'DomainProxyTokenId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainProxyTokenId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainProxyTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDomainProxyTokenResponseBody;
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
      body: CreateDomainProxyTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $tea.Model {
  description?: string;
  groupExternalId?: string;
  groupName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupExternalId: 'GroupExternalId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupExternalId: 'string',
      groupName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBody extends $tea.Model {
  groupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGroupResponseBody;
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
      body: CreateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

export class CreateNetworkAccessEndpointRequest extends $tea.Model {
  clientToken?: string;
  instanceId?: string;
  networkAccessEndpointName?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      networkAccessEndpointName: 'NetworkAccessEndpointName',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      networkAccessEndpointName: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAccessEndpointResponseBody extends $tea.Model {
  networkAccessEndpointId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAccessEndpointId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkAccessEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNetworkAccessEndpointResponseBody;
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
      body: CreateNetworkAccessEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationalUnitRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  organizationalUnitExternalId?: string;
  organizationalUnitName?: string;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      organizationalUnitExternalId: 'OrganizationalUnitExternalId',
      organizationalUnitName: 'OrganizationalUnitName',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      organizationalUnitExternalId: 'string',
      organizationalUnitName: 'string',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationalUnitResponseBody extends $tea.Model {
  organizationalUnitId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'OrganizationalUnitId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationalUnitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOrganizationalUnitResponseBody;
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
      body: CreateOrganizationalUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequest extends $tea.Model {
  customFields?: CreateUserRequestCustomFields[];
  description?: string;
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  instanceId?: string;
  organizationalUnitIds?: string[];
  password?: string;
  passwordInitializationConfig?: CreateUserRequestPasswordInitializationConfig;
  phoneNumber?: string;
  phoneNumberVerified?: boolean;
  phoneRegion?: string;
  primaryOrganizationalUnitId?: string;
  userExternalId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      customFields: 'CustomFields',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      emailVerified: 'EmailVerified',
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
      password: 'Password',
      passwordInitializationConfig: 'PasswordInitializationConfig',
      phoneNumber: 'PhoneNumber',
      phoneNumberVerified: 'PhoneNumberVerified',
      phoneRegion: 'PhoneRegion',
      primaryOrganizationalUnitId: 'PrimaryOrganizationalUnitId',
      userExternalId: 'UserExternalId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: { 'type': 'array', 'itemType': CreateUserRequestCustomFields },
      description: 'string',
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      password: 'string',
      passwordInitializationConfig: CreateUserRequestPasswordInitializationConfig,
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      primaryOrganizationalUnitId: 'string',
      userExternalId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserResponseBody extends $tea.Model {
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

export class CreateUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserResponseBody;
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
      body: CreateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationResponseBody extends $tea.Model {
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

export class DeleteApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApplicationResponseBody;
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
      body: DeleteApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationClientSecretRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      secretId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationClientSecretResponseBody extends $tea.Model {
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

export class DeleteApplicationClientSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApplicationClientSecretResponseBody;
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
      body: DeleteApplicationClientSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  domainId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBody extends $tea.Model {
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

export class DeleteDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainResponseBody;
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
      body: DeleteDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainProxyTokenRequest extends $tea.Model {
  domainId?: string;
  domainProxyTokenId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      domainProxyTokenId: 'DomainProxyTokenId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      domainProxyTokenId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainProxyTokenResponseBody extends $tea.Model {
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

export class DeleteDomainProxyTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDomainProxyTokenResponseBody;
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
      body: DeleteDomainProxyTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupRequest extends $tea.Model {
  groupId?: string;
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

export class DeleteGroupResponseBody extends $tea.Model {
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

export class DeleteGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGroupResponseBody;
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
      body: DeleteGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
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

export class DeleteInstanceResponseBody extends $tea.Model {
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

export class DeleteNetworkAccessEndpointRequest extends $tea.Model {
  instanceId?: string;
  networkAccessEndpointId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkAccessEndpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkAccessEndpointResponseBody extends $tea.Model {
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

export class DeleteNetworkAccessEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNetworkAccessEndpointResponseBody;
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
      body: DeleteNetworkAccessEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOrganizationalUnitRequest extends $tea.Model {
  instanceId?: string;
  organizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOrganizationalUnitResponseBody extends $tea.Model {
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

export class DeleteOrganizationalUnitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteOrganizationalUnitResponseBody;
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
      body: DeleteOrganizationalUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserResponseBody extends $tea.Model {
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

export class DeleteUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserResponseBody;
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
      body: DeleteUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationResponseBody extends $tea.Model {
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

export class DisableApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableApplicationResponseBody;
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
      body: DisableApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationApiInvokeRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationApiInvokeResponseBody extends $tea.Model {
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

export class DisableApplicationApiInvokeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableApplicationApiInvokeResponseBody;
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
      body: DisableApplicationApiInvokeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationClientSecretRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      secretId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationClientSecretResponseBody extends $tea.Model {
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

export class DisableApplicationClientSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableApplicationClientSecretResponseBody;
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
      body: DisableApplicationClientSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationProvisioningRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationProvisioningResponseBody extends $tea.Model {
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

export class DisableApplicationProvisioningResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableApplicationProvisioningResponseBody;
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
      body: DisableApplicationProvisioningResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationSsoRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableApplicationSsoResponseBody extends $tea.Model {
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

export class DisableApplicationSsoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableApplicationSsoResponseBody;
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
      body: DisableApplicationSsoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDomainProxyTokenRequest extends $tea.Model {
  domainId?: string;
  domainProxyTokenId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      domainProxyTokenId: 'DomainProxyTokenId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      domainProxyTokenId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDomainProxyTokenResponseBody extends $tea.Model {
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

export class DisableDomainProxyTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableDomainProxyTokenResponseBody;
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
      body: DisableDomainProxyTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableInitDomainAutoRedirectRequest extends $tea.Model {
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

export class DisableInitDomainAutoRedirectResponseBody extends $tea.Model {
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

export class DisableInitDomainAutoRedirectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableInitDomainAutoRedirectResponseBody;
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
      body: DisableInitDomainAutoRedirectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableUserResponseBody extends $tea.Model {
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

export class DisableUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableUserResponseBody;
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
      body: DisableUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationResponseBody extends $tea.Model {
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

export class EnableApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableApplicationResponseBody;
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
      body: EnableApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationApiInvokeRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationApiInvokeResponseBody extends $tea.Model {
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

export class EnableApplicationApiInvokeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableApplicationApiInvokeResponseBody;
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
      body: EnableApplicationApiInvokeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationClientSecretRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      secretId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationClientSecretResponseBody extends $tea.Model {
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

export class EnableApplicationClientSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableApplicationClientSecretResponseBody;
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
      body: EnableApplicationClientSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationProvisioningRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationProvisioningResponseBody extends $tea.Model {
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

export class EnableApplicationProvisioningResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableApplicationProvisioningResponseBody;
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
      body: EnableApplicationProvisioningResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationSsoRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableApplicationSsoResponseBody extends $tea.Model {
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

export class EnableApplicationSsoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableApplicationSsoResponseBody;
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
      body: EnableApplicationSsoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDomainProxyTokenRequest extends $tea.Model {
  domainId?: string;
  domainProxyTokenId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      domainProxyTokenId: 'DomainProxyTokenId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      domainProxyTokenId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDomainProxyTokenResponseBody extends $tea.Model {
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

export class EnableDomainProxyTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableDomainProxyTokenResponseBody;
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
      body: EnableDomainProxyTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableInitDomainAutoRedirectRequest extends $tea.Model {
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

export class EnableInitDomainAutoRedirectResponseBody extends $tea.Model {
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

export class EnableInitDomainAutoRedirectResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableInitDomainAutoRedirectResponseBody;
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
      body: EnableInitDomainAutoRedirectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableUserResponseBody extends $tea.Model {
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

export class EnableUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableUserResponseBody;
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
      body: EnableUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBody extends $tea.Model {
  application?: GetApplicationResponseBodyApplication;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: GetApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationResponseBody;
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
      body: GetApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGrantScopeRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGrantScopeResponseBody extends $tea.Model {
  applicationGrantScope?: GetApplicationGrantScopeResponseBodyApplicationGrantScope;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationGrantScope: 'ApplicationGrantScope',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationGrantScope: GetApplicationGrantScopeResponseBodyApplicationGrantScope,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGrantScopeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationGrantScopeResponseBody;
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
      body: GetApplicationGrantScopeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponseBody extends $tea.Model {
  applicationProvisioningConfig?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfig;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationProvisioningConfig: 'ApplicationProvisioningConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationProvisioningConfig: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfig,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationProvisioningConfigResponseBody;
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
      body: GetApplicationProvisioningConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningScopeRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningScopeResponseBody extends $tea.Model {
  applicationProvisioningScope?: GetApplicationProvisioningScopeResponseBodyApplicationProvisioningScope;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationProvisioningScope: 'ApplicationProvisioningScope',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationProvisioningScope: GetApplicationProvisioningScopeResponseBodyApplicationProvisioningScope,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningScopeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationProvisioningScopeResponseBody;
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
      body: GetApplicationProvisioningScopeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponseBody extends $tea.Model {
  applicationSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfig;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationSsoConfig: 'ApplicationSsoConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationSsoConfig: GetApplicationSsoConfigResponseBodyApplicationSsoConfig,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetApplicationSsoConfigResponseBody;
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
      body: GetApplicationSsoConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainRequest extends $tea.Model {
  domainId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponseBody extends $tea.Model {
  domain?: GetDomainResponseBodyDomain;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: GetDomainResponseBodyDomain,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDomainResponseBody;
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
      body: GetDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainDnsChallengeRequest extends $tea.Model {
  domain?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainDnsChallengeResponseBody extends $tea.Model {
  domainDnsChallenge?: GetDomainDnsChallengeResponseBodyDomainDnsChallenge;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainDnsChallenge: 'DomainDnsChallenge',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainDnsChallenge: GetDomainDnsChallengeResponseBodyDomainDnsChallenge,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainDnsChallengeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDomainDnsChallengeResponseBody;
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
      body: GetDomainDnsChallengeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetForgetPasswordConfigurationRequest extends $tea.Model {
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

export class GetForgetPasswordConfigurationResponseBody extends $tea.Model {
  openForgetPasswordConfiguration?: GetForgetPasswordConfigurationResponseBodyOpenForgetPasswordConfiguration;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      openForgetPasswordConfiguration: 'OpenForgetPasswordConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openForgetPasswordConfiguration: GetForgetPasswordConfigurationResponseBodyOpenForgetPasswordConfiguration,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetForgetPasswordConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetForgetPasswordConfigurationResponseBody;
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
      body: GetForgetPasswordConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupRequest extends $tea.Model {
  groupId?: string;
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

export class GetGroupResponseBody extends $tea.Model {
  group?: GetGroupResponseBodyGroup;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: GetGroupResponseBodyGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetGroupResponseBody;
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
      body: GetGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRequest extends $tea.Model {
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

export class GetInstanceResponseBody extends $tea.Model {
  instance?: GetInstanceResponseBodyInstance;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: GetInstanceResponseBodyInstance,
      requestId: 'string',
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

export class GetNetworkAccessEndpointRequest extends $tea.Model {
  instanceId?: string;
  networkAccessEndpointId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkAccessEndpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkAccessEndpointResponseBody extends $tea.Model {
  networkAccessEndpoint?: GetNetworkAccessEndpointResponseBodyNetworkAccessEndpoint;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAccessEndpoint: 'NetworkAccessEndpoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAccessEndpoint: GetNetworkAccessEndpointResponseBodyNetworkAccessEndpoint,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkAccessEndpointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNetworkAccessEndpointResponseBody;
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
      body: GetNetworkAccessEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationalUnitRequest extends $tea.Model {
  instanceId?: string;
  organizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationalUnitResponseBody extends $tea.Model {
  organizationalUnit?: GetOrganizationalUnitResponseBodyOrganizationalUnit;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnit: 'OrganizationalUnit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnit: GetOrganizationalUnitResponseBodyOrganizationalUnit,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationalUnitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOrganizationalUnitResponseBody;
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
      body: GetOrganizationalUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordComplexityConfigurationRequest extends $tea.Model {
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

export class GetPasswordComplexityConfigurationResponseBody extends $tea.Model {
  passwordComplexityConfiguration?: GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfiguration;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      passwordComplexityConfiguration: 'PasswordComplexityConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordComplexityConfiguration: GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfiguration,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordComplexityConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPasswordComplexityConfigurationResponseBody;
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
      body: GetPasswordComplexityConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordExpirationConfigurationRequest extends $tea.Model {
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

export class GetPasswordExpirationConfigurationResponseBody extends $tea.Model {
  passwordExpirationConfiguration?: GetPasswordExpirationConfigurationResponseBodyPasswordExpirationConfiguration;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      passwordExpirationConfiguration: 'PasswordExpirationConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordExpirationConfiguration: GetPasswordExpirationConfigurationResponseBodyPasswordExpirationConfiguration,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordExpirationConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPasswordExpirationConfigurationResponseBody;
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
      body: GetPasswordExpirationConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordHistoryConfigurationRequest extends $tea.Model {
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

export class GetPasswordHistoryConfigurationResponseBody extends $tea.Model {
  passwordHistoryConfiguration?: GetPasswordHistoryConfigurationResponseBodyPasswordHistoryConfiguration;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      passwordHistoryConfiguration: 'PasswordHistoryConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordHistoryConfiguration: GetPasswordHistoryConfigurationResponseBodyPasswordHistoryConfiguration,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordHistoryConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPasswordHistoryConfigurationResponseBody;
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
      body: GetPasswordHistoryConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordInitializationConfigurationRequest extends $tea.Model {
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

export class GetPasswordInitializationConfigurationResponseBody extends $tea.Model {
  passwordInitializationConfiguration?: GetPasswordInitializationConfigurationResponseBodyPasswordInitializationConfiguration;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      passwordInitializationConfiguration: 'PasswordInitializationConfiguration',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordInitializationConfiguration: GetPasswordInitializationConfigurationResponseBodyPasswordInitializationConfiguration,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordInitializationConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPasswordInitializationConfigurationResponseBody;
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
      body: GetPasswordInitializationConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRootOrganizationalUnitRequest extends $tea.Model {
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

export class GetRootOrganizationalUnitResponseBody extends $tea.Model {
  organizationalUnit?: GetRootOrganizationalUnitResponseBodyOrganizationalUnit;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnit: 'OrganizationalUnit',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnit: GetRootOrganizationalUnitResponseBodyOrganizationalUnit,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRootOrganizationalUnitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRootOrganizationalUnitResponseBody;
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
      body: GetRootOrganizationalUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  requestId?: string;
  user?: GetUserResponseBodyUser;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      user: GetUserResponseBodyUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserResponseBody;
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
      body: GetUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationClientSecretsRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationClientSecretsResponseBody extends $tea.Model {
  applicationClientSecrets?: ListApplicationClientSecretsResponseBodyApplicationClientSecrets[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationClientSecrets: 'ApplicationClientSecrets',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationClientSecrets: { 'type': 'array', 'itemType': ListApplicationClientSecretsResponseBodyApplicationClientSecrets },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationClientSecretsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationClientSecretsResponseBody;
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
      body: ListApplicationClientSecretsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsRequest extends $tea.Model {
  applicationIds?: string[];
  applicationName?: string;
  authorizationType?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationName: 'ApplicationName',
      authorizationType: 'AuthorizationType',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationName: 'string',
      authorizationType: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBody extends $tea.Model {
  applications?: ListApplicationsResponseBodyApplications[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsResponseBodyApplications },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationsResponseBody;
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
      body: ListApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForOrganizationalUnitRequest extends $tea.Model {
  applicationIds?: string[];
  instanceId?: string;
  organizationalUnitId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      organizationalUnitId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForOrganizationalUnitResponseBody extends $tea.Model {
  applications?: ListApplicationsForOrganizationalUnitResponseBodyApplications[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsForOrganizationalUnitResponseBodyApplications },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForOrganizationalUnitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationsForOrganizationalUnitResponseBody;
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
      body: ListApplicationsForOrganizationalUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForUserRequest extends $tea.Model {
  applicationIds?: string[];
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  queryMode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryMode: 'QueryMode',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryMode: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForUserResponseBody extends $tea.Model {
  applications?: ListApplicationsForUserResponseBodyApplications[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsForUserResponseBodyApplications },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationsForUserResponseBody;
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
      body: ListApplicationsForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainProxyTokensRequest extends $tea.Model {
  domainId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainProxyTokensResponseBody extends $tea.Model {
  domainProxyTokens?: ListDomainProxyTokensResponseBodyDomainProxyTokens[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainProxyTokens: 'DomainProxyTokens',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainProxyTokens: { 'type': 'array', 'itemType': ListDomainProxyTokensResponseBodyDomainProxyTokens },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainProxyTokensResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDomainProxyTokensResponseBody;
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
      body: ListDomainProxyTokensResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsRequest extends $tea.Model {
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

export class ListDomainsResponseBody extends $tea.Model {
  domains?: ListDomainsResponseBodyDomains[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': ListDomainsResponseBodyDomains },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDomainsResponseBody;
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
      body: ListDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEiamInstancesRequest extends $tea.Model {
  instanceIds?: string[];
  instanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      instanceRegionId: 'InstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEiamInstancesResponseBody extends $tea.Model {
  instances?: ListEiamInstancesResponseBodyInstances[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListEiamInstancesResponseBodyInstances },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEiamInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEiamInstancesResponseBody;
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
      body: ListEiamInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEiamRegionsResponseBody extends $tea.Model {
  regions?: ListEiamRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': ListEiamRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEiamRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEiamRegionsResponseBody;
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
      body: ListEiamRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsRequest extends $tea.Model {
  groupExternalId?: string;
  groupIds?: string[];
  groupName?: string;
  groupNameStartsWith?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      groupExternalId: 'GroupExternalId',
      groupIds: 'GroupIds',
      groupName: 'GroupName',
      groupNameStartsWith: 'GroupNameStartsWith',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupExternalId: 'string',
      groupIds: { 'type': 'array', 'itemType': 'string' },
      groupName: 'string',
      groupNameStartsWith: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $tea.Model {
  groups?: ListGroupsResponseBodyGroups[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListGroupsResponseBodyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupsResponseBody;
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
      body: ListGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForApplicationRequest extends $tea.Model {
  applicationId?: string;
  groupIds?: string[];
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      groupIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForApplicationResponseBody extends $tea.Model {
  groups?: ListGroupsForApplicationResponseBodyGroups[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListGroupsForApplicationResponseBodyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupsForApplicationResponseBody;
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
      body: ListGroupsForApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponseBody extends $tea.Model {
  groups?: ListGroupsForUserResponseBodyGroups[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListGroupsForUserResponseBodyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupsForUserResponseBody;
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
      body: ListGroupsForUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  instanceIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  instances?: ListInstancesResponseBodyInstances[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
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

export class ListNetworkAccessEndpointAvailableRegionsResponseBody extends $tea.Model {
  regions?: ListNetworkAccessEndpointAvailableRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': ListNetworkAccessEndpointAvailableRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointAvailableRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNetworkAccessEndpointAvailableRegionsResponseBody;
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
      body: ListNetworkAccessEndpointAvailableRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointAvailableZonesRequest extends $tea.Model {
  naeRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      naeRegionId: 'NaeRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      naeRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointAvailableZonesResponseBody extends $tea.Model {
  requestId?: string;
  zones?: ListNetworkAccessEndpointAvailableZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': ListNetworkAccessEndpointAvailableZonesResponseBodyZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointAvailableZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNetworkAccessEndpointAvailableZonesResponseBody;
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
      body: ListNetworkAccessEndpointAvailableZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointsRequest extends $tea.Model {
  instanceId?: string;
  maxResults?: number;
  networkAccessEndpointStatus?: string;
  networkAccessEndpointType?: string;
  nextToken?: string;
  vpcId?: string;
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      networkAccessEndpointStatus: 'NetworkAccessEndpointStatus',
      networkAccessEndpointType: 'NetworkAccessEndpointType',
      nextToken: 'NextToken',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      networkAccessEndpointStatus: 'string',
      networkAccessEndpointType: 'string',
      nextToken: 'string',
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointsResponseBody extends $tea.Model {
  networkAccessEndpoints?: ListNetworkAccessEndpointsResponseBodyNetworkAccessEndpoints[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkAccessEndpoints: 'NetworkAccessEndpoints',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAccessEndpoints: { 'type': 'array', 'itemType': ListNetworkAccessEndpointsResponseBodyNetworkAccessEndpoints },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNetworkAccessEndpointsResponseBody;
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
      body: ListNetworkAccessEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessPathsRequest extends $tea.Model {
  instanceId?: string;
  networkAccessEndpointId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkAccessEndpointId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessPathsResponseBody extends $tea.Model {
  networkAccessPaths?: ListNetworkAccessPathsResponseBodyNetworkAccessPaths[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkAccessPaths: 'NetworkAccessPaths',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAccessPaths: { 'type': 'array', 'itemType': ListNetworkAccessPathsResponseBodyNetworkAccessPaths },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessPathsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNetworkAccessPathsResponseBody;
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
      body: ListNetworkAccessPathsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitParentsRequest extends $tea.Model {
  instanceId?: string;
  organizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitParentsResponseBody extends $tea.Model {
  parents?: ListOrganizationalUnitParentsResponseBodyParents[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parents: 'Parents',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parents: { 'type': 'array', 'itemType': ListOrganizationalUnitParentsResponseBodyParents },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitParentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOrganizationalUnitParentsResponseBody;
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
      body: ListOrganizationalUnitParentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsRequest extends $tea.Model {
  instanceId?: string;
  organizationalUnitIds?: string[];
  organizationalUnitName?: string;
  organizationalUnitNameStartsWith?: string;
  pageNumber?: number;
  pageSize?: number;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
      organizationalUnitName: 'OrganizationalUnitName',
      organizationalUnitNameStartsWith: 'OrganizationalUnitNameStartsWith',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      organizationalUnitName: 'string',
      organizationalUnitNameStartsWith: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsResponseBody extends $tea.Model {
  organizationalUnits?: ListOrganizationalUnitsResponseBodyOrganizationalUnits[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      organizationalUnits: 'OrganizationalUnits',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnits: { 'type': 'array', 'itemType': ListOrganizationalUnitsResponseBodyOrganizationalUnits },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOrganizationalUnitsResponseBody;
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
      body: ListOrganizationalUnitsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsForApplicationRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  organizationalUnitIds?: string[];
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsForApplicationResponseBody extends $tea.Model {
  organizationalUnits?: ListOrganizationalUnitsForApplicationResponseBodyOrganizationalUnits[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      organizationalUnits: 'OrganizationalUnits',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnits: { 'type': 'array', 'itemType': ListOrganizationalUnitsForApplicationResponseBodyOrganizationalUnits },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsForApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOrganizationalUnitsForApplicationResponseBody;
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
      body: ListOrganizationalUnitsForApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  regions?: ListRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegions },
      requestId: 'string',
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

export class ListUsersRequest extends $tea.Model {
  displayNameStartsWith?: string;
  email?: string;
  instanceId?: string;
  organizationalUnitId?: string;
  pageNumber?: number;
  pageSize?: number;
  phoneNumber?: string;
  phoneRegion?: string;
  status?: string;
  userExternalId?: string;
  userIds?: string[];
  userSourceId?: string;
  userSourceType?: string;
  usernameStartsWith?: string;
  static names(): { [key: string]: string } {
    return {
      displayNameStartsWith: 'DisplayNameStartsWith',
      email: 'Email',
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      phoneRegion: 'PhoneRegion',
      status: 'Status',
      userExternalId: 'UserExternalId',
      userIds: 'UserIds',
      userSourceId: 'UserSourceId',
      userSourceType: 'UserSourceType',
      usernameStartsWith: 'UsernameStartsWith',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayNameStartsWith: 'string',
      email: 'string',
      instanceId: 'string',
      organizationalUnitId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      phoneRegion: 'string',
      status: 'string',
      userExternalId: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
      userSourceId: 'string',
      userSourceType: 'string',
      usernameStartsWith: 'string',
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

export class ListUsersForApplicationRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForApplicationResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  users?: ListUsersForApplicationResponseBodyUsers[];
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
      users: { 'type': 'array', 'itemType': ListUsersForApplicationResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersForApplicationResponseBody;
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
      body: ListUsersForApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForGroupRequest extends $tea.Model {
  groupId?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForGroupResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  users?: ListUsersForGroupResponseBodyUsers[];
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
      users: { 'type': 'array', 'itemType': ListUsersForGroupResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersForGroupResponseBody;
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
      body: ListUsersForGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainApplicationClientSecretRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      secretId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainApplicationClientSecretResponseBody extends $tea.Model {
  applicationClientSecret?: ObtainApplicationClientSecretResponseBodyApplicationClientSecret;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationClientSecret: 'ApplicationClientSecret',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationClientSecret: ObtainApplicationClientSecretResponseBodyApplicationClientSecret,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainApplicationClientSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ObtainApplicationClientSecretResponseBody;
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
      body: ObtainApplicationClientSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainDomainProxyTokenRequest extends $tea.Model {
  domainId?: string;
  domainProxyTokenId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      domainProxyTokenId: 'DomainProxyTokenId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      domainProxyTokenId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainDomainProxyTokenResponseBody extends $tea.Model {
  domainProxyToken?: ObtainDomainProxyTokenResponseBodyDomainProxyToken;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainProxyToken: 'DomainProxyToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainProxyToken: ObtainDomainProxyTokenResponseBodyDomainProxyToken,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainDomainProxyTokenResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ObtainDomainProxyTokenResponseBody;
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
      body: ObtainDomainProxyTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromOrganizationalUnitsRequest extends $tea.Model {
  instanceId?: string;
  organizationalUnitIds?: string[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromOrganizationalUnitsResponseBody extends $tea.Model {
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

export class RemoveUserFromOrganizationalUnitsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUserFromOrganizationalUnitsResponseBody;
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
      body: RemoveUserFromOrganizationalUnitsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersFromGroupRequest extends $tea.Model {
  groupId?: string;
  instanceId?: string;
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersFromGroupResponseBody extends $tea.Model {
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

export class RemoveUsersFromGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveUsersFromGroupResponseBody;
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
      body: RemoveUsersFromGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeApplicationFromGroupsRequest extends $tea.Model {
  applicationId?: string;
  groupIds?: string[];
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      groupIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeApplicationFromGroupsResponseBody extends $tea.Model {
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

export class RevokeApplicationFromGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeApplicationFromGroupsResponseBody;
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
      body: RevokeApplicationFromGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeApplicationFromOrganizationalUnitsRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  organizationalUnitIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeApplicationFromOrganizationalUnitsResponseBody extends $tea.Model {
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

export class RevokeApplicationFromOrganizationalUnitsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeApplicationFromOrganizationalUnitsResponseBody;
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
      body: RevokeApplicationFromOrganizationalUnitsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeApplicationFromUsersRequest extends $tea.Model {
  applicationId?: string;
  instanceId?: string;
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeApplicationFromUsersResponseBody extends $tea.Model {
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

export class RevokeApplicationFromUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeApplicationFromUsersResponseBody;
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
      body: RevokeApplicationFromUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationGrantScopeRequest extends $tea.Model {
  applicationId?: string;
  grantScopes?: string[];
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      grantScopes: 'GrantScopes',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      grantScopes: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationGrantScopeResponseBody extends $tea.Model {
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

export class SetApplicationGrantScopeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetApplicationGrantScopeResponseBody;
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
      body: SetApplicationGrantScopeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningConfigRequest extends $tea.Model {
  applicationId?: string;
  callbackProvisioningConfig?: SetApplicationProvisioningConfigRequestCallbackProvisioningConfig;
  instanceId?: string;
  provisionPassword?: boolean;
  provisionProtocolType?: string;
  scimProvisioningConfig?: SetApplicationProvisioningConfigRequestScimProvisioningConfig;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      callbackProvisioningConfig: 'CallbackProvisioningConfig',
      instanceId: 'InstanceId',
      provisionPassword: 'ProvisionPassword',
      provisionProtocolType: 'ProvisionProtocolType',
      scimProvisioningConfig: 'ScimProvisioningConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      callbackProvisioningConfig: SetApplicationProvisioningConfigRequestCallbackProvisioningConfig,
      instanceId: 'string',
      provisionPassword: 'boolean',
      provisionProtocolType: 'string',
      scimProvisioningConfig: SetApplicationProvisioningConfigRequestScimProvisioningConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningConfigResponseBody extends $tea.Model {
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

export class SetApplicationProvisioningConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetApplicationProvisioningConfigResponseBody;
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
      body: SetApplicationProvisioningConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningScopeRequest extends $tea.Model {
  applicationId?: string;
  groupIds?: string[];
  instanceId?: string;
  organizationalUnitIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      organizationalUnitIds: 'OrganizationalUnitIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      groupIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningScopeResponseBody extends $tea.Model {
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

export class SetApplicationProvisioningScopeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetApplicationProvisioningScopeResponseBody;
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
      body: SetApplicationProvisioningScopeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationSsoConfigRequest extends $tea.Model {
  applicationId?: string;
  initLoginType?: string;
  initLoginUrl?: string;
  instanceId?: string;
  oidcSsoConfig?: SetApplicationSsoConfigRequestOidcSsoConfig;
  samlSsoConfig?: SetApplicationSsoConfigRequestSamlSsoConfig;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      initLoginType: 'InitLoginType',
      initLoginUrl: 'InitLoginUrl',
      instanceId: 'InstanceId',
      oidcSsoConfig: 'OidcSsoConfig',
      samlSsoConfig: 'SamlSsoConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      initLoginType: 'string',
      initLoginUrl: 'string',
      instanceId: 'string',
      oidcSsoConfig: SetApplicationSsoConfigRequestOidcSsoConfig,
      samlSsoConfig: SetApplicationSsoConfigRequestSamlSsoConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationSsoConfigResponseBody extends $tea.Model {
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

export class SetApplicationSsoConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetApplicationSsoConfigResponseBody;
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
      body: SetApplicationSsoConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultDomainRequest extends $tea.Model {
  domainId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDefaultDomainResponseBody extends $tea.Model {
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

export class SetDefaultDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDefaultDomainResponseBody;
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
      body: SetDefaultDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetForgetPasswordConfigurationRequest extends $tea.Model {
  authenticationChannels?: string[];
  forgetPasswordStatus?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationChannels: 'AuthenticationChannels',
      forgetPasswordStatus: 'ForgetPasswordStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationChannels: { 'type': 'array', 'itemType': 'string' },
      forgetPasswordStatus: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetForgetPasswordConfigurationResponseBody extends $tea.Model {
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

export class SetForgetPasswordConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetForgetPasswordConfigurationResponseBody;
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
      body: SetForgetPasswordConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordComplexityConfigurationRequest extends $tea.Model {
  instanceId?: string;
  passwordComplexityRules?: SetPasswordComplexityConfigurationRequestPasswordComplexityRules[];
  passwordMinLength?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      passwordComplexityRules: 'PasswordComplexityRules',
      passwordMinLength: 'PasswordMinLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      passwordComplexityRules: { 'type': 'array', 'itemType': SetPasswordComplexityConfigurationRequestPasswordComplexityRules },
      passwordMinLength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordComplexityConfigurationResponseBody extends $tea.Model {
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

export class SetPasswordComplexityConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPasswordComplexityConfigurationResponseBody;
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
      body: SetPasswordComplexityConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordExpirationConfigurationRequest extends $tea.Model {
  instanceId?: string;
  passwordExpirationAction?: string;
  passwordExpirationNotificationChannels?: string[];
  passwordExpirationNotificationDuration?: number;
  passwordExpirationNotificationStatus?: string;
  passwordExpirationStatus?: string;
  passwordForcedUpdateDuration?: number;
  passwordValidMaxDay?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      passwordExpirationAction: 'PasswordExpirationAction',
      passwordExpirationNotificationChannels: 'PasswordExpirationNotificationChannels',
      passwordExpirationNotificationDuration: 'PasswordExpirationNotificationDuration',
      passwordExpirationNotificationStatus: 'PasswordExpirationNotificationStatus',
      passwordExpirationStatus: 'PasswordExpirationStatus',
      passwordForcedUpdateDuration: 'PasswordForcedUpdateDuration',
      passwordValidMaxDay: 'PasswordValidMaxDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      passwordExpirationAction: 'string',
      passwordExpirationNotificationChannels: { 'type': 'array', 'itemType': 'string' },
      passwordExpirationNotificationDuration: 'number',
      passwordExpirationNotificationStatus: 'string',
      passwordExpirationStatus: 'string',
      passwordForcedUpdateDuration: 'number',
      passwordValidMaxDay: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordExpirationConfigurationResponseBody extends $tea.Model {
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

export class SetPasswordExpirationConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPasswordExpirationConfigurationResponseBody;
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
      body: SetPasswordExpirationConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordHistoryConfigurationRequest extends $tea.Model {
  instanceId?: string;
  passwordHistoryMaxRetention?: number;
  passwordHistoryStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      passwordHistoryMaxRetention: 'PasswordHistoryMaxRetention',
      passwordHistoryStatus: 'PasswordHistoryStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      passwordHistoryMaxRetention: 'number',
      passwordHistoryStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordHistoryConfigurationResponseBody extends $tea.Model {
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

export class SetPasswordHistoryConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPasswordHistoryConfigurationResponseBody;
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
      body: SetPasswordHistoryConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordInitializationConfigurationRequest extends $tea.Model {
  instanceId?: string;
  passwordForcedUpdateStatus?: string;
  passwordInitializationNotificationChannels?: string[];
  passwordInitializationStatus?: string;
  passwordInitializationType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      passwordForcedUpdateStatus: 'PasswordForcedUpdateStatus',
      passwordInitializationNotificationChannels: 'PasswordInitializationNotificationChannels',
      passwordInitializationStatus: 'PasswordInitializationStatus',
      passwordInitializationType: 'PasswordInitializationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      passwordForcedUpdateStatus: 'string',
      passwordInitializationNotificationChannels: { 'type': 'array', 'itemType': 'string' },
      passwordInitializationStatus: 'string',
      passwordInitializationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordInitializationConfigurationResponseBody extends $tea.Model {
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

export class SetPasswordInitializationConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetPasswordInitializationConfigurationResponseBody;
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
      body: SetPasswordInitializationConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserPrimaryOrganizationalUnitRequest extends $tea.Model {
  instanceId?: string;
  organizationalUnitId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserPrimaryOrganizationalUnitResponseBody extends $tea.Model {
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

export class SetUserPrimaryOrganizationalUnitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetUserPrimaryOrganizationalUnitResponseBody;
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
      body: SetUserPrimaryOrganizationalUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUserRequest extends $tea.Model {
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUserResponseBody extends $tea.Model {
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

export class UnlockUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnlockUserResponseBody;
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
      body: UnlockUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationAuthorizationTypeRequest extends $tea.Model {
  applicationId?: string;
  authorizationType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      authorizationType: 'AuthorizationType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      authorizationType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationAuthorizationTypeResponseBody extends $tea.Model {
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

export class UpdateApplicationAuthorizationTypeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationAuthorizationTypeResponseBody;
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
      body: UpdateApplicationAuthorizationTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationDescriptionRequest extends $tea.Model {
  applicationId?: string;
  description?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      description: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationDescriptionResponseBody extends $tea.Model {
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

export class UpdateApplicationDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationDescriptionResponseBody;
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
      body: UpdateApplicationDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupRequest extends $tea.Model {
  groupExternalId?: string;
  groupId?: string;
  groupName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupExternalId: 'GroupExternalId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupExternalId: 'string',
      groupId: 'string',
      groupName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponseBody extends $tea.Model {
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

export class UpdateGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGroupResponseBody;
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
      body: UpdateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupDescriptionRequest extends $tea.Model {
  description?: string;
  groupId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupDescriptionResponseBody extends $tea.Model {
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

export class UpdateGroupDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGroupDescriptionResponseBody;
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
      body: UpdateGroupDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceDescriptionRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceDescriptionResponseBody extends $tea.Model {
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

export class UpdateInstanceDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceDescriptionResponseBody;
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
      body: UpdateInstanceDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkAccessEndpointNameRequest extends $tea.Model {
  instanceId?: string;
  networkAccessEndpointId?: string;
  networkAccessEndpointName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      networkAccessEndpointName: 'NetworkAccessEndpointName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      networkAccessEndpointName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkAccessEndpointNameResponseBody extends $tea.Model {
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

export class UpdateNetworkAccessEndpointNameResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNetworkAccessEndpointNameResponseBody;
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
      body: UpdateNetworkAccessEndpointNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationalUnitRequest extends $tea.Model {
  instanceId?: string;
  organizationalUnitId?: string;
  organizationalUnitName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      organizationalUnitName: 'OrganizationalUnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationalUnitResponseBody extends $tea.Model {
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

export class UpdateOrganizationalUnitResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateOrganizationalUnitResponseBody;
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
      body: UpdateOrganizationalUnitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationalUnitDescriptionRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  organizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      organizationalUnitId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationalUnitDescriptionResponseBody extends $tea.Model {
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

export class UpdateOrganizationalUnitDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateOrganizationalUnitDescriptionResponseBody;
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
      body: UpdateOrganizationalUnitDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationalUnitParentIdRequest extends $tea.Model {
  instanceId?: string;
  organizationalUnitId?: string;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitId: 'string',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOrganizationalUnitParentIdResponseBody extends $tea.Model {
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

export class UpdateOrganizationalUnitParentIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateOrganizationalUnitParentIdResponseBody;
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
      body: UpdateOrganizationalUnitParentIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  customFields?: UpdateUserRequestCustomFields[];
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  instanceId?: string;
  phoneNumber?: string;
  phoneNumberVerified?: boolean;
  phoneRegion?: string;
  userId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      customFields: 'CustomFields',
      displayName: 'DisplayName',
      email: 'Email',
      emailVerified: 'EmailVerified',
      instanceId: 'InstanceId',
      phoneNumber: 'PhoneNumber',
      phoneNumberVerified: 'PhoneNumberVerified',
      phoneRegion: 'PhoneRegion',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: { 'type': 'array', 'itemType': UpdateUserRequestCustomFields },
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      instanceId: 'string',
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
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

export class UpdateUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserResponseBody;
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
      body: UpdateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDescriptionRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDescriptionResponseBody extends $tea.Model {
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

export class UpdateUserDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserDescriptionResponseBody;
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
      body: UpdateUserDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserPasswordRequest extends $tea.Model {
  instanceId?: string;
  password?: string;
  passwordForcedUpdateStatus?: string;
  userId?: string;
  userNotificationChannels?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      password: 'Password',
      passwordForcedUpdateStatus: 'PasswordForcedUpdateStatus',
      userId: 'UserId',
      userNotificationChannels: 'UserNotificationChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      password: 'string',
      passwordForcedUpdateStatus: 'string',
      userId: 'string',
      userNotificationChannels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserPasswordResponseBody extends $tea.Model {
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

export class UpdateUserPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserPasswordResponseBody;
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
      body: UpdateUserPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationClientSecretResponseBodyApplicationClientSecret extends $tea.Model {
  clientId?: string;
  clientSecret?: string;
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientSecret: 'string',
      secretId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequestFiling extends $tea.Model {
  icpNumber?: string;
  static names(): { [key: string]: string } {
    return {
      icpNumber: 'IcpNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icpNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequestCustomFields extends $tea.Model {
  fieldName?: string;
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserRequestPasswordInitializationConfig extends $tea.Model {
  passwordForcedUpdateStatus?: string;
  passwordInitializationPolicyPriority?: string;
  passwordInitializationType?: string;
  userNotificationChannels?: string[];
  static names(): { [key: string]: string } {
    return {
      passwordForcedUpdateStatus: 'PasswordForcedUpdateStatus',
      passwordInitializationPolicyPriority: 'PasswordInitializationPolicyPriority',
      passwordInitializationType: 'PasswordInitializationType',
      userNotificationChannels: 'UserNotificationChannels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordForcedUpdateStatus: 'string',
      passwordInitializationPolicyPriority: 'string',
      passwordInitializationType: 'string',
      userNotificationChannels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationResponseBodyApplication extends $tea.Model {
  apiInvokeStatus?: string;
  applicationId?: string;
  applicationName?: string;
  applicationSourceType?: string;
  applicationTemplateId?: string;
  authorizationType?: string;
  clientId?: string;
  createTime?: number;
  description?: string;
  features?: string;
  instanceId?: string;
  logoUrl?: string;
  managedServiceCode?: string;
  serviceManaged?: boolean;
  ssoType?: string;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      apiInvokeStatus: 'ApiInvokeStatus',
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      applicationSourceType: 'ApplicationSourceType',
      applicationTemplateId: 'ApplicationTemplateId',
      authorizationType: 'AuthorizationType',
      clientId: 'ClientId',
      createTime: 'CreateTime',
      description: 'Description',
      features: 'Features',
      instanceId: 'InstanceId',
      logoUrl: 'LogoUrl',
      managedServiceCode: 'ManagedServiceCode',
      serviceManaged: 'ServiceManaged',
      ssoType: 'SsoType',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInvokeStatus: 'string',
      applicationId: 'string',
      applicationName: 'string',
      applicationSourceType: 'string',
      applicationTemplateId: 'string',
      authorizationType: 'string',
      clientId: 'string',
      createTime: 'number',
      description: 'string',
      features: 'string',
      instanceId: 'string',
      logoUrl: 'string',
      managedServiceCode: 'string',
      serviceManaged: 'boolean',
      ssoType: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationGrantScopeResponseBodyApplicationGrantScope extends $tea.Model {
  grantScopes?: string[];
  static names(): { [key: string]: string } {
    return {
      grantScopes: 'GrantScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantScopes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigCallbackProvisioningConfig extends $tea.Model {
  callbackUrl?: string;
  encryptKey?: string;
  encryptRequired?: boolean;
  listenEventScopes?: string[];
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      encryptKey: 'EncryptKey',
      encryptRequired: 'EncryptRequired',
      listenEventScopes: 'ListenEventScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      encryptKey: 'string',
      encryptRequired: 'boolean',
      listenEventScopes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfigurationAuthnParam extends $tea.Model {
  accessToken?: string;
  authnMethod?: string;
  clientId?: string;
  clientSecret?: string;
  tokenEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      authnMethod: 'AuthnMethod',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      tokenEndpoint: 'TokenEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      authnMethod: 'string',
      clientId: 'string',
      clientSecret: 'string',
      tokenEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfiguration extends $tea.Model {
  authnMode?: string;
  authnParam?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfigurationAuthnParam;
  grantType?: string;
  static names(): { [key: string]: string } {
    return {
      authnMode: 'AuthnMode',
      authnParam: 'AuthnParam',
      grantType: 'GrantType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnMode: 'string',
      authnParam: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfigurationAuthnParam,
      grantType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfig extends $tea.Model {
  authnConfiguration?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfiguration;
  fullPushScopes?: string[];
  provisioningActions?: string[];
  scimBaseUrl?: string;
  static names(): { [key: string]: string } {
    return {
      authnConfiguration: 'AuthnConfiguration',
      fullPushScopes: 'FullPushScopes',
      provisioningActions: 'ProvisioningActions',
      scimBaseUrl: 'ScimBaseUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnConfiguration: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfiguration,
      fullPushScopes: { 'type': 'array', 'itemType': 'string' },
      provisioningActions: { 'type': 'array', 'itemType': 'string' },
      scimBaseUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfig extends $tea.Model {
  applicationId?: string;
  callbackProvisioningConfig?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigCallbackProvisioningConfig;
  configOperateMode?: string;
  instanceId?: string;
  provisionJwksEndpoint?: string;
  provisionPassword?: boolean;
  provisionProtocolType?: string;
  scimProvisioningConfig?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfig;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      callbackProvisioningConfig: 'CallbackProvisioningConfig',
      configOperateMode: 'ConfigOperateMode',
      instanceId: 'InstanceId',
      provisionJwksEndpoint: 'ProvisionJwksEndpoint',
      provisionPassword: 'ProvisionPassword',
      provisionProtocolType: 'ProvisionProtocolType',
      scimProvisioningConfig: 'ScimProvisioningConfig',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      callbackProvisioningConfig: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigCallbackProvisioningConfig,
      configOperateMode: 'string',
      instanceId: 'string',
      provisionJwksEndpoint: 'string',
      provisionPassword: 'boolean',
      provisionProtocolType: 'string',
      scimProvisioningConfig: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfig,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationProvisioningScopeResponseBodyApplicationProvisioningScope extends $tea.Model {
  groupIds?: string[];
  maxQuota?: number;
  organizationalUnitIds?: string[];
  usedQuota?: number;
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      maxQuota: 'MaxQuota',
      organizationalUnitIds: 'OrganizationalUnitIds',
      usedQuota: 'UsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      maxQuota: 'number',
      organizationalUnitIds: { 'type': 'array', 'itemType': 'string' },
      usedQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfigCustomClaims extends $tea.Model {
  claimName?: string;
  claimValueExpression?: string;
  static names(): { [key: string]: string } {
    return {
      claimName: 'ClaimName',
      claimValueExpression: 'ClaimValueExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claimName: 'string',
      claimValueExpression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfig extends $tea.Model {
  accessTokenEffectiveTime?: number;
  codeEffectiveTime?: number;
  customClaims?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfigCustomClaims[];
  grantScopes?: string[];
  grantTypes?: string[];
  idTokenEffectiveTime?: number;
  passwordAuthenticationSourceId?: string;
  passwordTotpMfaRequired?: boolean;
  pkceChallengeMethods?: string[];
  pkceRequired?: boolean;
  postLogoutRedirectUris?: string[];
  redirectUris?: string[];
  refreshTokenEffective?: number;
  responseTypes?: string[];
  subjectIdExpression?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenEffectiveTime: 'AccessTokenEffectiveTime',
      codeEffectiveTime: 'CodeEffectiveTime',
      customClaims: 'CustomClaims',
      grantScopes: 'GrantScopes',
      grantTypes: 'GrantTypes',
      idTokenEffectiveTime: 'IdTokenEffectiveTime',
      passwordAuthenticationSourceId: 'PasswordAuthenticationSourceId',
      passwordTotpMfaRequired: 'PasswordTotpMfaRequired',
      pkceChallengeMethods: 'PkceChallengeMethods',
      pkceRequired: 'PkceRequired',
      postLogoutRedirectUris: 'PostLogoutRedirectUris',
      redirectUris: 'RedirectUris',
      refreshTokenEffective: 'RefreshTokenEffective',
      responseTypes: 'ResponseTypes',
      subjectIdExpression: 'SubjectIdExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenEffectiveTime: 'number',
      codeEffectiveTime: 'number',
      customClaims: { 'type': 'array', 'itemType': GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfigCustomClaims },
      grantScopes: { 'type': 'array', 'itemType': 'string' },
      grantTypes: { 'type': 'array', 'itemType': 'string' },
      idTokenEffectiveTime: 'number',
      passwordAuthenticationSourceId: 'string',
      passwordTotpMfaRequired: 'boolean',
      pkceChallengeMethods: { 'type': 'array', 'itemType': 'string' },
      pkceRequired: 'boolean',
      postLogoutRedirectUris: { 'type': 'array', 'itemType': 'string' },
      redirectUris: { 'type': 'array', 'itemType': 'string' },
      refreshTokenEffective: 'number',
      responseTypes: { 'type': 'array', 'itemType': 'string' },
      subjectIdExpression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponseBodyApplicationSsoConfigProtocolEndpointDomain extends $tea.Model {
  oauth2AuthorizationEndpoint?: string;
  oauth2DeviceAuthorizationEndpoint?: string;
  oauth2RevokeEndpoint?: string;
  oauth2TokenEndpoint?: string;
  oauth2UserinfoEndpoint?: string;
  oidcIssuer?: string;
  oidcJwksEndpoint?: string;
  oidcLogoutEndpoint?: string;
  samlMetaEndpoint?: string;
  samlSsoEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      oauth2AuthorizationEndpoint: 'Oauth2AuthorizationEndpoint',
      oauth2DeviceAuthorizationEndpoint: 'Oauth2DeviceAuthorizationEndpoint',
      oauth2RevokeEndpoint: 'Oauth2RevokeEndpoint',
      oauth2TokenEndpoint: 'Oauth2TokenEndpoint',
      oauth2UserinfoEndpoint: 'Oauth2UserinfoEndpoint',
      oidcIssuer: 'OidcIssuer',
      oidcJwksEndpoint: 'OidcJwksEndpoint',
      oidcLogoutEndpoint: 'OidcLogoutEndpoint',
      samlMetaEndpoint: 'SamlMetaEndpoint',
      samlSsoEndpoint: 'SamlSsoEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oauth2AuthorizationEndpoint: 'string',
      oauth2DeviceAuthorizationEndpoint: 'string',
      oauth2RevokeEndpoint: 'string',
      oauth2TokenEndpoint: 'string',
      oauth2UserinfoEndpoint: 'string',
      oidcIssuer: 'string',
      oidcJwksEndpoint: 'string',
      oidcLogoutEndpoint: 'string',
      samlMetaEndpoint: 'string',
      samlSsoEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigAttributeStatements extends $tea.Model {
  attributeName?: string;
  attributeValueExpression?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValueExpression: 'AttributeValueExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValueExpression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfig extends $tea.Model {
  assertionSigned?: boolean;
  attributeStatements?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigAttributeStatements[];
  defaultRelayState?: string;
  nameIdFormat?: string;
  nameIdValueExpression?: string;
  responseSigned?: boolean;
  signatureAlgorithm?: string;
  spEntityId?: string;
  spSsoAcsUrl?: string;
  static names(): { [key: string]: string } {
    return {
      assertionSigned: 'AssertionSigned',
      attributeStatements: 'AttributeStatements',
      defaultRelayState: 'DefaultRelayState',
      nameIdFormat: 'NameIdFormat',
      nameIdValueExpression: 'NameIdValueExpression',
      responseSigned: 'ResponseSigned',
      signatureAlgorithm: 'SignatureAlgorithm',
      spEntityId: 'SpEntityId',
      spSsoAcsUrl: 'SpSsoAcsUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertionSigned: 'boolean',
      attributeStatements: { 'type': 'array', 'itemType': GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigAttributeStatements },
      defaultRelayState: 'string',
      nameIdFormat: 'string',
      nameIdValueExpression: 'string',
      responseSigned: 'boolean',
      signatureAlgorithm: 'string',
      spEntityId: 'string',
      spSsoAcsUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationSsoConfigResponseBodyApplicationSsoConfig extends $tea.Model {
  initLoginType?: string;
  initLoginUrl?: string;
  oidcSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfig;
  protocolEndpointDomain?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigProtocolEndpointDomain;
  samlSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfig;
  ssoStatus?: string;
  static names(): { [key: string]: string } {
    return {
      initLoginType: 'InitLoginType',
      initLoginUrl: 'InitLoginUrl',
      oidcSsoConfig: 'OidcSsoConfig',
      protocolEndpointDomain: 'ProtocolEndpointDomain',
      samlSsoConfig: 'SamlSsoConfig',
      ssoStatus: 'SsoStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initLoginType: 'string',
      initLoginUrl: 'string',
      oidcSsoConfig: GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfig,
      protocolEndpointDomain: GetApplicationSsoConfigResponseBodyApplicationSsoConfigProtocolEndpointDomain,
      samlSsoConfig: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfig,
      ssoStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponseBodyDomainFiling extends $tea.Model {
  icpNumber?: string;
  static names(): { [key: string]: string } {
    return {
      icpNumber: 'IcpNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icpNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainResponseBodyDomain extends $tea.Model {
  createTime?: number;
  defaultDomain?: boolean;
  domain?: string;
  domainId?: string;
  domainType?: string;
  filing?: GetDomainResponseBodyDomainFiling;
  instanceId?: string;
  lockMode?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultDomain: 'DefaultDomain',
      domain: 'Domain',
      domainId: 'DomainId',
      domainType: 'DomainType',
      filing: 'Filing',
      instanceId: 'InstanceId',
      lockMode: 'LockMode',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      defaultDomain: 'boolean',
      domain: 'string',
      domainId: 'string',
      domainType: 'string',
      filing: GetDomainResponseBodyDomainFiling,
      instanceId: 'string',
      lockMode: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainDnsChallengeResponseBodyDomainDnsChallenge extends $tea.Model {
  dnsChallengeName?: string;
  dnsChallengeValue?: string;
  dnsType?: string;
  static names(): { [key: string]: string } {
    return {
      dnsChallengeName: 'DnsChallengeName',
      dnsChallengeValue: 'DnsChallengeValue',
      dnsType: 'DnsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsChallengeName: 'string',
      dnsChallengeValue: 'string',
      dnsType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetForgetPasswordConfigurationResponseBodyOpenForgetPasswordConfiguration extends $tea.Model {
  authenticationChannels?: string[];
  enable?: boolean;
  enableEmail?: boolean;
  enableSms?: boolean;
  forgetPasswordStatus?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationChannels: 'AuthenticationChannels',
      enable: 'Enable',
      enableEmail: 'EnableEmail',
      enableSms: 'EnableSms',
      forgetPasswordStatus: 'ForgetPasswordStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationChannels: { 'type': 'array', 'itemType': 'string' },
      enable: 'boolean',
      enableEmail: 'boolean',
      enableSms: 'boolean',
      forgetPasswordStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBodyGroup extends $tea.Model {
  createTime?: number;
  description?: string;
  groupExternalId?: string;
  groupId?: string;
  groupName?: string;
  groupSourceId?: string;
  groupSourceType?: string;
  instanceId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      groupExternalId: 'GroupExternalId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupSourceId: 'GroupSourceId',
      groupSourceType: 'GroupSourceType',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      groupExternalId: 'string',
      groupId: 'string',
      groupName: 'string',
      groupSourceId: 'string',
      groupSourceType: 'string',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceDefaultEndpoint extends $tea.Model {
  endpoint?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstanceDomainConfig extends $tea.Model {
  defaultDomain?: string;
  initDomain?: string;
  initDomainAutoRedirectStatus?: string;
  static names(): { [key: string]: string } {
    return {
      defaultDomain: 'DefaultDomain',
      initDomain: 'InitDomain',
      initDomainAutoRedirectStatus: 'InitDomainAutoRedirectStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultDomain: 'string',
      initDomain: 'string',
      initDomainAutoRedirectStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyInstance extends $tea.Model {
  createTime?: number;
  defaultEndpoint?: GetInstanceResponseBodyInstanceDefaultEndpoint;
  description?: string;
  domainConfig?: GetInstanceResponseBodyInstanceDomainConfig;
  egressAddresses?: string[];
  instanceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultEndpoint: 'DefaultEndpoint',
      description: 'Description',
      domainConfig: 'DomainConfig',
      egressAddresses: 'EgressAddresses',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      defaultEndpoint: GetInstanceResponseBodyInstanceDefaultEndpoint,
      description: 'string',
      domainConfig: GetInstanceResponseBodyInstanceDomainConfig,
      egressAddresses: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkAccessEndpointResponseBodyNetworkAccessEndpoint extends $tea.Model {
  createTime?: number;
  egressPrivateIpAddresses?: string[];
  egressPublicIpAddresses?: string[];
  instanceId?: string;
  networkAccessEndpointId?: string;
  networkAccessEndpointName?: string;
  networkAccessEndpointType?: string;
  securityGroupId?: string;
  status?: string;
  updateTime?: number;
  vSwitchIds?: string[];
  vpcId?: string;
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      egressPrivateIpAddresses: 'EgressPrivateIpAddresses',
      egressPublicIpAddresses: 'EgressPublicIpAddresses',
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      networkAccessEndpointName: 'NetworkAccessEndpointName',
      networkAccessEndpointType: 'NetworkAccessEndpointType',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      updateTime: 'UpdateTime',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      egressPrivateIpAddresses: { 'type': 'array', 'itemType': 'string' },
      egressPublicIpAddresses: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      networkAccessEndpointName: 'string',
      networkAccessEndpointType: 'string',
      securityGroupId: 'string',
      status: 'string',
      updateTime: 'number',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrganizationalUnitResponseBodyOrganizationalUnit extends $tea.Model {
  createTime?: number;
  description?: string;
  instanceId?: string;
  leaf?: boolean;
  organizationalUnitExternalId?: string;
  organizationalUnitId?: string;
  organizationalUnitName?: string;
  organizationalUnitSourceId?: string;
  organizationalUnitSourceType?: string;
  parentId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      leaf: 'Leaf',
      organizationalUnitExternalId: 'OrganizationalUnitExternalId',
      organizationalUnitId: 'OrganizationalUnitId',
      organizationalUnitName: 'OrganizationalUnitName',
      organizationalUnitSourceId: 'OrganizationalUnitSourceId',
      organizationalUnitSourceType: 'OrganizationalUnitSourceType',
      parentId: 'ParentId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      leaf: 'boolean',
      organizationalUnitExternalId: 'string',
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
      organizationalUnitSourceId: 'string',
      organizationalUnitSourceType: 'string',
      parentId: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfigurationPasswordComplexityRules extends $tea.Model {
  passwordCheckType?: string;
  static names(): { [key: string]: string } {
    return {
      passwordCheckType: 'PasswordCheckType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordCheckType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfiguration extends $tea.Model {
  passwordComplexityRules?: GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfigurationPasswordComplexityRules[];
  passwordMinLength?: number;
  static names(): { [key: string]: string } {
    return {
      passwordComplexityRules: 'PasswordComplexityRules',
      passwordMinLength: 'PasswordMinLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordComplexityRules: { 'type': 'array', 'itemType': GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfigurationPasswordComplexityRules },
      passwordMinLength: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordExpirationConfigurationResponseBodyPasswordExpirationConfiguration extends $tea.Model {
  passwordExpirationAction?: string;
  passwordExpirationNotificationChannels?: string[];
  passwordExpirationNotificationDuration?: number;
  passwordExpirationNotificationStatus?: string;
  passwordExpirationStatus?: string;
  passwordForcedUpdateDuration?: number;
  passwordValidMaxDay?: number;
  static names(): { [key: string]: string } {
    return {
      passwordExpirationAction: 'PasswordExpirationAction',
      passwordExpirationNotificationChannels: 'PasswordExpirationNotificationChannels',
      passwordExpirationNotificationDuration: 'PasswordExpirationNotificationDuration',
      passwordExpirationNotificationStatus: 'PasswordExpirationNotificationStatus',
      passwordExpirationStatus: 'PasswordExpirationStatus',
      passwordForcedUpdateDuration: 'PasswordForcedUpdateDuration',
      passwordValidMaxDay: 'PasswordValidMaxDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordExpirationAction: 'string',
      passwordExpirationNotificationChannels: { 'type': 'array', 'itemType': 'string' },
      passwordExpirationNotificationDuration: 'number',
      passwordExpirationNotificationStatus: 'string',
      passwordExpirationStatus: 'string',
      passwordForcedUpdateDuration: 'number',
      passwordValidMaxDay: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordHistoryConfigurationResponseBodyPasswordHistoryConfiguration extends $tea.Model {
  passwordHistoryMaxRetention?: number;
  passwordHistoryStatus?: string;
  static names(): { [key: string]: string } {
    return {
      passwordHistoryMaxRetention: 'PasswordHistoryMaxRetention',
      passwordHistoryStatus: 'PasswordHistoryStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordHistoryMaxRetention: 'number',
      passwordHistoryStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPasswordInitializationConfigurationResponseBodyPasswordInitializationConfiguration extends $tea.Model {
  passwordForcedUpdateStatus?: string;
  passwordInitializationNotificationChannels?: string[];
  passwordInitializationStatus?: string;
  passwordInitializationType?: string;
  static names(): { [key: string]: string } {
    return {
      passwordForcedUpdateStatus: 'PasswordForcedUpdateStatus',
      passwordInitializationNotificationChannels: 'PasswordInitializationNotificationChannels',
      passwordInitializationStatus: 'PasswordInitializationStatus',
      passwordInitializationType: 'PasswordInitializationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordForcedUpdateStatus: 'string',
      passwordInitializationNotificationChannels: { 'type': 'array', 'itemType': 'string' },
      passwordInitializationStatus: 'string',
      passwordInitializationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRootOrganizationalUnitResponseBodyOrganizationalUnit extends $tea.Model {
  createTime?: number;
  description?: string;
  instanceId?: string;
  organizationalUnitId?: string;
  organizationalUnitName?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      organizationalUnitName: 'OrganizationalUnitName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserCustomFields extends $tea.Model {
  fieldName?: string;
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserGroups extends $tea.Model {
  description?: string;
  groupId?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      groupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserOrganizationalUnits extends $tea.Model {
  organizationalUnitId?: string;
  organizationalUnitName?: string;
  primary?: boolean;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'OrganizationalUnitId',
      organizationalUnitName: 'OrganizationalUnitName',
      primary: 'Primary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
      primary: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUser extends $tea.Model {
  accountExpireTime?: number;
  createTime?: number;
  customFields?: GetUserResponseBodyUserCustomFields[];
  description?: string;
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  groups?: GetUserResponseBodyUserGroups[];
  instanceId?: string;
  lockExpireTime?: number;
  organizationalUnits?: GetUserResponseBodyUserOrganizationalUnits[];
  passwordExpireTime?: number;
  passwordSet?: boolean;
  phoneNumber?: string;
  phoneNumberVerified?: boolean;
  phoneRegion?: string;
  preferredLanguage?: string;
  primaryOrganizationalUnitId?: string;
  registerTime?: number;
  status?: string;
  updateTime?: number;
  userExternalId?: string;
  userId?: string;
  userSourceId?: string;
  userSourceType?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountExpireTime: 'AccountExpireTime',
      createTime: 'CreateTime',
      customFields: 'CustomFields',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      emailVerified: 'EmailVerified',
      groups: 'Groups',
      instanceId: 'InstanceId',
      lockExpireTime: 'LockExpireTime',
      organizationalUnits: 'OrganizationalUnits',
      passwordExpireTime: 'PasswordExpireTime',
      passwordSet: 'PasswordSet',
      phoneNumber: 'PhoneNumber',
      phoneNumberVerified: 'PhoneNumberVerified',
      phoneRegion: 'PhoneRegion',
      preferredLanguage: 'PreferredLanguage',
      primaryOrganizationalUnitId: 'PrimaryOrganizationalUnitId',
      registerTime: 'RegisterTime',
      status: 'Status',
      updateTime: 'UpdateTime',
      userExternalId: 'UserExternalId',
      userId: 'UserId',
      userSourceId: 'UserSourceId',
      userSourceType: 'UserSourceType',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountExpireTime: 'number',
      createTime: 'number',
      customFields: { 'type': 'array', 'itemType': GetUserResponseBodyUserCustomFields },
      description: 'string',
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      groups: { 'type': 'array', 'itemType': GetUserResponseBodyUserGroups },
      instanceId: 'string',
      lockExpireTime: 'number',
      organizationalUnits: { 'type': 'array', 'itemType': GetUserResponseBodyUserOrganizationalUnits },
      passwordExpireTime: 'number',
      passwordSet: 'boolean',
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      preferredLanguage: 'string',
      primaryOrganizationalUnitId: 'string',
      registerTime: 'number',
      status: 'string',
      updateTime: 'number',
      userExternalId: 'string',
      userId: 'string',
      userSourceId: 'string',
      userSourceType: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationClientSecretsResponseBodyApplicationClientSecrets extends $tea.Model {
  applicationId?: string;
  clientId?: string;
  clientSecret?: string;
  instanceId?: string;
  lastUsedTime?: number;
  secretId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      instanceId: 'InstanceId',
      lastUsedTime: 'LastUsedTime',
      secretId: 'SecretId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientId: 'string',
      clientSecret: 'string',
      instanceId: 'string',
      lastUsedTime: 'number',
      secretId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsResponseBodyApplications extends $tea.Model {
  applicationId?: string;
  applicationName?: string;
  applicationSourceType?: string;
  applicationTemplateId?: string;
  clientId?: string;
  createTime?: number;
  description?: string;
  features?: string;
  instanceId?: string;
  logoUrl?: string;
  managedServiceCode?: string;
  serviceManaged?: boolean;
  ssoType?: string;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      applicationSourceType: 'ApplicationSourceType',
      applicationTemplateId: 'ApplicationTemplateId',
      clientId: 'ClientId',
      createTime: 'CreateTime',
      description: 'Description',
      features: 'Features',
      instanceId: 'InstanceId',
      logoUrl: 'LogoUrl',
      managedServiceCode: 'ManagedServiceCode',
      serviceManaged: 'ServiceManaged',
      ssoType: 'SsoType',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      applicationSourceType: 'string',
      applicationTemplateId: 'string',
      clientId: 'string',
      createTime: 'number',
      description: 'string',
      features: 'string',
      instanceId: 'string',
      logoUrl: 'string',
      managedServiceCode: 'string',
      serviceManaged: 'boolean',
      ssoType: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForOrganizationalUnitResponseBodyApplications extends $tea.Model {
  applicationId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForUserResponseBodyApplications extends $tea.Model {
  applicationId?: string;
  hasDirectAuthorization?: boolean;
  hasInheritAuthorization?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      hasDirectAuthorization: 'HasDirectAuthorization',
      hasInheritAuthorization: 'HasInheritAuthorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      hasDirectAuthorization: 'boolean',
      hasInheritAuthorization: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainProxyTokensResponseBodyDomainProxyTokens extends $tea.Model {
  createTime?: number;
  domainId?: string;
  domainProxyToken?: string;
  domainProxyTokenId?: string;
  instanceId?: string;
  lastUsedTime?: number;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainId: 'DomainId',
      domainProxyToken: 'DomainProxyToken',
      domainProxyTokenId: 'DomainProxyTokenId',
      instanceId: 'InstanceId',
      lastUsedTime: 'LastUsedTime',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      domainId: 'string',
      domainProxyToken: 'string',
      domainProxyTokenId: 'string',
      instanceId: 'string',
      lastUsedTime: 'number',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyDomainsFiling extends $tea.Model {
  icpNumber?: string;
  static names(): { [key: string]: string } {
    return {
      icpNumber: 'IcpNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      icpNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyDomains extends $tea.Model {
  createTime?: number;
  defaultDomain?: boolean;
  domain?: string;
  domainId?: string;
  domainType?: string;
  filing?: ListDomainsResponseBodyDomainsFiling;
  instanceId?: string;
  lockMode?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultDomain: 'DefaultDomain',
      domain: 'Domain',
      domainId: 'DomainId',
      domainType: 'DomainType',
      filing: 'Filing',
      instanceId: 'InstanceId',
      lockMode: 'LockMode',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      defaultDomain: 'boolean',
      domain: 'string',
      domainId: 'string',
      domainType: 'string',
      filing: ListDomainsResponseBodyDomainsFiling,
      instanceId: 'string',
      lockMode: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEiamInstancesResponseBodyInstances extends $tea.Model {
  description?: string;
  developerAPIPrivateDomain?: string;
  developerAPIPublicDomain?: string;
  instanceId?: string;
  instanceStatus?: string;
  instanceVersion?: string;
  openAPIPrivateDomain?: string;
  openAPIPublicDomain?: string;
  SSODomain?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      developerAPIPrivateDomain: 'DeveloperAPIPrivateDomain',
      developerAPIPublicDomain: 'DeveloperAPIPublicDomain',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      instanceVersion: 'InstanceVersion',
      openAPIPrivateDomain: 'OpenAPIPrivateDomain',
      openAPIPublicDomain: 'OpenAPIPublicDomain',
      SSODomain: 'SSODomain',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      developerAPIPrivateDomain: 'string',
      developerAPIPublicDomain: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      instanceVersion: 'string',
      openAPIPrivateDomain: 'string',
      openAPIPublicDomain: 'string',
      SSODomain: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEiamRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyGroups extends $tea.Model {
  createTime?: number;
  description?: string;
  groupExternalId?: string;
  groupId?: string;
  groupName?: string;
  groupSourceId?: string;
  groupSourceType?: string;
  instanceId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      groupExternalId: 'GroupExternalId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupSourceId: 'GroupSourceId',
      groupSourceType: 'GroupSourceType',
      instanceId: 'InstanceId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      groupExternalId: 'string',
      groupId: 'string',
      groupName: 'string',
      groupSourceId: 'string',
      groupSourceType: 'string',
      instanceId: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForApplicationResponseBodyGroups extends $tea.Model {
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsForUserResponseBodyGroups extends $tea.Model {
  groupId?: string;
  groupMemberRelationSourceId?: string;
  groupMemberRelationSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupMemberRelationSourceId: 'GroupMemberRelationSourceId',
      groupMemberRelationSourceType: 'GroupMemberRelationSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupMemberRelationSourceId: 'string',
      groupMemberRelationSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstancesDefaultEndpoint extends $tea.Model {
  endpoint?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $tea.Model {
  createTime?: number;
  defaultEndpoint?: ListInstancesResponseBodyInstancesDefaultEndpoint;
  description?: string;
  instanceId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultEndpoint: 'DefaultEndpoint',
      description: 'Description',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      defaultEndpoint: ListInstancesResponseBodyInstancesDefaultEndpoint,
      description: 'string',
      instanceId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointAvailableRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointAvailableZonesResponseBodyZones extends $tea.Model {
  localName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessEndpointsResponseBodyNetworkAccessEndpoints extends $tea.Model {
  createTime?: number;
  instanceId?: string;
  networkAccessEndpointId?: string;
  networkAccessEndpointName?: string;
  networkAccessEndpointType?: string;
  securityGroupId?: string;
  status?: string;
  updateTime?: number;
  vSwitchIds?: string[];
  vpcId?: string;
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      networkAccessEndpointName: 'NetworkAccessEndpointName',
      networkAccessEndpointType: 'NetworkAccessEndpointType',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      updateTime: 'UpdateTime',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      networkAccessEndpointName: 'string',
      networkAccessEndpointType: 'string',
      securityGroupId: 'string',
      status: 'string',
      updateTime: 'number',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      vpcRegionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkAccessPathsResponseBodyNetworkAccessPaths extends $tea.Model {
  createTime?: number;
  instanceId?: string;
  networkAccessEndpointId?: string;
  networkAccessPathId?: string;
  networkInterfaceId?: string;
  privateIpAddress?: string;
  status?: string;
  updateTime?: number;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      networkAccessEndpointId: 'NetworkAccessEndpointId',
      networkAccessPathId: 'NetworkAccessPathId',
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
      status: 'Status',
      updateTime: 'UpdateTime',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      networkAccessEndpointId: 'string',
      networkAccessPathId: 'string',
      networkInterfaceId: 'string',
      privateIpAddress: 'string',
      status: 'string',
      updateTime: 'number',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitParentsResponseBodyParents extends $tea.Model {
  organizationalUnitId?: string;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'OrganizationalUnitId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsResponseBodyOrganizationalUnits extends $tea.Model {
  createTime?: number;
  description?: string;
  instanceId?: string;
  leaf?: boolean;
  organizationalUnitExternalId?: string;
  organizationalUnitId?: string;
  organizationalUnitName?: string;
  organizationalUnitSourceId?: string;
  organizationalUnitSourceType?: string;
  parentId?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      leaf: 'Leaf',
      organizationalUnitExternalId: 'OrganizationalUnitExternalId',
      organizationalUnitId: 'OrganizationalUnitId',
      organizationalUnitName: 'OrganizationalUnitName',
      organizationalUnitSourceId: 'OrganizationalUnitSourceId',
      organizationalUnitSourceType: 'OrganizationalUnitSourceType',
      parentId: 'ParentId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      leaf: 'boolean',
      organizationalUnitExternalId: 'string',
      organizationalUnitId: 'string',
      organizationalUnitName: 'string',
      organizationalUnitSourceId: 'string',
      organizationalUnitSourceType: 'string',
      parentId: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsForApplicationResponseBodyOrganizationalUnits extends $tea.Model {
  organizationalUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationalUnitId: 'OrganizationalUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationalUnitId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegions extends $tea.Model {
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

export class ListUsersResponseBodyUsers extends $tea.Model {
  accountExpireTime?: number;
  createTime?: number;
  description?: string;
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  instanceId?: string;
  lockExpireTime?: number;
  passwordExpireTime?: number;
  passwordSet?: boolean;
  phoneNumber?: string;
  phoneNumberVerified?: boolean;
  phoneRegion?: string;
  registerTime?: number;
  status?: string;
  updateTime?: number;
  userExternalId?: string;
  userId?: string;
  userSourceId?: string;
  userSourceType?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accountExpireTime: 'AccountExpireTime',
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      email: 'Email',
      emailVerified: 'EmailVerified',
      instanceId: 'InstanceId',
      lockExpireTime: 'LockExpireTime',
      passwordExpireTime: 'PasswordExpireTime',
      passwordSet: 'PasswordSet',
      phoneNumber: 'PhoneNumber',
      phoneNumberVerified: 'PhoneNumberVerified',
      phoneRegion: 'PhoneRegion',
      registerTime: 'RegisterTime',
      status: 'Status',
      updateTime: 'UpdateTime',
      userExternalId: 'UserExternalId',
      userId: 'UserId',
      userSourceId: 'UserSourceId',
      userSourceType: 'UserSourceType',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountExpireTime: 'number',
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      email: 'string',
      emailVerified: 'boolean',
      instanceId: 'string',
      lockExpireTime: 'number',
      passwordExpireTime: 'number',
      passwordSet: 'boolean',
      phoneNumber: 'string',
      phoneNumberVerified: 'boolean',
      phoneRegion: 'string',
      registerTime: 'number',
      status: 'string',
      updateTime: 'number',
      userExternalId: 'string',
      userId: 'string',
      userSourceId: 'string',
      userSourceType: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForApplicationResponseBodyUsers extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForGroupResponseBodyUsers extends $tea.Model {
  groupMemberRelationSourceId?: string;
  groupMemberRelationSourceType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      groupMemberRelationSourceId: 'GroupMemberRelationSourceId',
      groupMemberRelationSourceType: 'GroupMemberRelationSourceType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupMemberRelationSourceId: 'string',
      groupMemberRelationSourceType: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainApplicationClientSecretResponseBodyApplicationClientSecret extends $tea.Model {
  applicationId?: string;
  clientId?: string;
  clientSecret?: string;
  instanceId?: string;
  lastUsedTime?: number;
  secretId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      instanceId: 'InstanceId',
      lastUsedTime: 'LastUsedTime',
      secretId: 'SecretId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      clientId: 'string',
      clientSecret: 'string',
      instanceId: 'string',
      lastUsedTime: 'number',
      secretId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ObtainDomainProxyTokenResponseBodyDomainProxyToken extends $tea.Model {
  createTime?: number;
  domainId?: string;
  domainProxyToken?: string;
  domainProxyTokenId?: string;
  instanceId?: string;
  lastUsedTime?: number;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      domainId: 'DomainId',
      domainProxyToken: 'DomainProxyToken',
      domainProxyTokenId: 'DomainProxyTokenId',
      instanceId: 'InstanceId',
      lastUsedTime: 'LastUsedTime',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      domainId: 'string',
      domainProxyToken: 'string',
      domainProxyTokenId: 'string',
      instanceId: 'string',
      lastUsedTime: 'number',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningConfigRequestCallbackProvisioningConfig extends $tea.Model {
  callbackUrl?: string;
  encryptKey?: string;
  encryptRequired?: boolean;
  listenEventScopes?: string[];
  static names(): { [key: string]: string } {
    return {
      callbackUrl: 'CallbackUrl',
      encryptKey: 'EncryptKey',
      encryptRequired: 'EncryptRequired',
      listenEventScopes: 'ListenEventScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callbackUrl: 'string',
      encryptKey: 'string',
      encryptRequired: 'boolean',
      listenEventScopes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfigurationAuthnParam extends $tea.Model {
  accessToken?: string;
  authnMethod?: string;
  clientId?: string;
  clientSecret?: string;
  tokenEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      authnMethod: 'AuthnMethod',
      clientId: 'ClientId',
      clientSecret: 'ClientSecret',
      tokenEndpoint: 'TokenEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      authnMethod: 'string',
      clientId: 'string',
      clientSecret: 'string',
      tokenEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfiguration extends $tea.Model {
  authnMode?: string;
  authnParam?: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfigurationAuthnParam;
  grantType?: string;
  static names(): { [key: string]: string } {
    return {
      authnMode: 'AuthnMode',
      authnParam: 'AuthnParam',
      grantType: 'GrantType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnMode: 'string',
      authnParam: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfigurationAuthnParam,
      grantType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationProvisioningConfigRequestScimProvisioningConfig extends $tea.Model {
  authnConfiguration?: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfiguration;
  fullPushScopes?: string[];
  provisioningActions?: string[];
  scimBaseUrl?: string;
  static names(): { [key: string]: string } {
    return {
      authnConfiguration: 'AuthnConfiguration',
      fullPushScopes: 'FullPushScopes',
      provisioningActions: 'ProvisioningActions',
      scimBaseUrl: 'ScimBaseUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnConfiguration: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfiguration,
      fullPushScopes: { 'type': 'array', 'itemType': 'string' },
      provisioningActions: { 'type': 'array', 'itemType': 'string' },
      scimBaseUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationSsoConfigRequestOidcSsoConfigCustomClaims extends $tea.Model {
  claimName?: string;
  claimValueExpression?: string;
  static names(): { [key: string]: string } {
    return {
      claimName: 'ClaimName',
      claimValueExpression: 'ClaimValueExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      claimName: 'string',
      claimValueExpression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationSsoConfigRequestOidcSsoConfig extends $tea.Model {
  accessTokenEffectiveTime?: number;
  codeEffectiveTime?: number;
  customClaims?: SetApplicationSsoConfigRequestOidcSsoConfigCustomClaims[];
  grantScopes?: string[];
  grantTypes?: string[];
  idTokenEffectiveTime?: number;
  passwordAuthenticationSourceId?: string;
  passwordTotpMfaRequired?: boolean;
  pkceChallengeMethods?: string[];
  pkceRequired?: boolean;
  postLogoutRedirectUris?: string[];
  redirectUris?: string[];
  refreshTokenEffective?: number;
  responseTypes?: string[];
  subjectIdExpression?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokenEffectiveTime: 'AccessTokenEffectiveTime',
      codeEffectiveTime: 'CodeEffectiveTime',
      customClaims: 'CustomClaims',
      grantScopes: 'GrantScopes',
      grantTypes: 'GrantTypes',
      idTokenEffectiveTime: 'IdTokenEffectiveTime',
      passwordAuthenticationSourceId: 'PasswordAuthenticationSourceId',
      passwordTotpMfaRequired: 'PasswordTotpMfaRequired',
      pkceChallengeMethods: 'PkceChallengeMethods',
      pkceRequired: 'PkceRequired',
      postLogoutRedirectUris: 'PostLogoutRedirectUris',
      redirectUris: 'RedirectUris',
      refreshTokenEffective: 'RefreshTokenEffective',
      responseTypes: 'ResponseTypes',
      subjectIdExpression: 'SubjectIdExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokenEffectiveTime: 'number',
      codeEffectiveTime: 'number',
      customClaims: { 'type': 'array', 'itemType': SetApplicationSsoConfigRequestOidcSsoConfigCustomClaims },
      grantScopes: { 'type': 'array', 'itemType': 'string' },
      grantTypes: { 'type': 'array', 'itemType': 'string' },
      idTokenEffectiveTime: 'number',
      passwordAuthenticationSourceId: 'string',
      passwordTotpMfaRequired: 'boolean',
      pkceChallengeMethods: { 'type': 'array', 'itemType': 'string' },
      pkceRequired: 'boolean',
      postLogoutRedirectUris: { 'type': 'array', 'itemType': 'string' },
      redirectUris: { 'type': 'array', 'itemType': 'string' },
      refreshTokenEffective: 'number',
      responseTypes: { 'type': 'array', 'itemType': 'string' },
      subjectIdExpression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationSsoConfigRequestSamlSsoConfigAttributeStatements extends $tea.Model {
  attributeName?: string;
  attributeValueExpression?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValueExpression: 'AttributeValueExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValueExpression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationSsoConfigRequestSamlSsoConfig extends $tea.Model {
  assertionSigned?: boolean;
  attributeStatements?: SetApplicationSsoConfigRequestSamlSsoConfigAttributeStatements[];
  defaultRelayState?: string;
  nameIdFormat?: string;
  nameIdValueExpression?: string;
  responseSigned?: boolean;
  signatureAlgorithm?: string;
  spEntityId?: string;
  spSsoAcsUrl?: string;
  static names(): { [key: string]: string } {
    return {
      assertionSigned: 'AssertionSigned',
      attributeStatements: 'AttributeStatements',
      defaultRelayState: 'DefaultRelayState',
      nameIdFormat: 'NameIdFormat',
      nameIdValueExpression: 'NameIdValueExpression',
      responseSigned: 'ResponseSigned',
      signatureAlgorithm: 'SignatureAlgorithm',
      spEntityId: 'SpEntityId',
      spSsoAcsUrl: 'SpSsoAcsUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertionSigned: 'boolean',
      attributeStatements: { 'type': 'array', 'itemType': SetApplicationSsoConfigRequestSamlSsoConfigAttributeStatements },
      defaultRelayState: 'string',
      nameIdFormat: 'string',
      nameIdValueExpression: 'string',
      responseSigned: 'boolean',
      signatureAlgorithm: 'string',
      spEntityId: 'string',
      spSsoAcsUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPasswordComplexityConfigurationRequestPasswordComplexityRules extends $tea.Model {
  passwordCheckType?: string;
  static names(): { [key: string]: string } {
    return {
      passwordCheckType: 'PasswordCheckType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordCheckType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequestCustomFields extends $tea.Model {
  fieldName?: string;
  fieldValue?: string;
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
      operation: 'string',
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
    this._endpoint = this.getEndpoint("eiam", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary Adds an Employee Identity and Access Management (EIAM) account to multiple EIAM organizations of Identity as a Service (IDaaS). If the account already exists in the organizational unit, the system directly returns a success response.
   *
   * @param request AddUserToOrganizationalUnitsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddUserToOrganizationalUnitsResponse
   */
  async addUserToOrganizationalUnitsWithOptions(request: AddUserToOrganizationalUnitsRequest, runtime: $Util.RuntimeOptions): Promise<AddUserToOrganizationalUnitsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddUserToOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddUserToOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new AddUserToOrganizationalUnitsResponse({}));
  }

  /**
   * @summary Adds an Employee Identity and Access Management (EIAM) account to multiple EIAM organizations of Identity as a Service (IDaaS). If the account already exists in the organizational unit, the system directly returns a success response.
   *
   * @param request AddUserToOrganizationalUnitsRequest
   * @return AddUserToOrganizationalUnitsResponse
   */
  async addUserToOrganizationalUnits(request: AddUserToOrganizationalUnitsRequest): Promise<AddUserToOrganizationalUnitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * @summary Adds Employee Identity and Access Management (EIAM) accounts to an EIAM group of Identity as a Service (IDaaS).
   *
   * @param request AddUsersToGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AddUsersToGroupResponse
   */
  async addUsersToGroupWithOptions(request: AddUsersToGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddUsersToGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddUsersToGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddUsersToGroupResponse>(await this.callApi(params, req, runtime), new AddUsersToGroupResponse({}));
  }

  /**
   * @summary Adds Employee Identity and Access Management (EIAM) accounts to an EIAM group of Identity as a Service (IDaaS).
   *
   * @param request AddUsersToGroupRequest
   * @return AddUsersToGroupResponse
   */
  async addUsersToGroup(request: AddUsersToGroupRequest): Promise<AddUsersToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUsersToGroupWithOptions(request, runtime);
  }

  /**
   * @summary Grants the permissions to access an application to multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   *
   * @param request AuthorizeApplicationToGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AuthorizeApplicationToGroupsResponse
   */
  async authorizeApplicationToGroupsWithOptions(request: AuthorizeApplicationToGroupsRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeApplicationToGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuthorizeApplicationToGroups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthorizeApplicationToGroupsResponse>(await this.callApi(params, req, runtime), new AuthorizeApplicationToGroupsResponse({}));
  }

  /**
   * @summary Grants the permissions to access an application to multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   *
   * @param request AuthorizeApplicationToGroupsRequest
   * @return AuthorizeApplicationToGroupsResponse
   */
  async authorizeApplicationToGroups(request: AuthorizeApplicationToGroupsRequest): Promise<AuthorizeApplicationToGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeApplicationToGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) organizations at a time.
   *
   * @param request AuthorizeApplicationToOrganizationalUnitsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AuthorizeApplicationToOrganizationalUnitsResponse
   */
  async authorizeApplicationToOrganizationalUnitsWithOptions(request: AuthorizeApplicationToOrganizationalUnitsRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeApplicationToOrganizationalUnitsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuthorizeApplicationToOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthorizeApplicationToOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new AuthorizeApplicationToOrganizationalUnitsResponse({}));
  }

  /**
   * @summary Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) organizations at a time.
   *
   * @param request AuthorizeApplicationToOrganizationalUnitsRequest
   * @return AuthorizeApplicationToOrganizationalUnitsResponse
   */
  async authorizeApplicationToOrganizationalUnits(request: AuthorizeApplicationToOrganizationalUnitsRequest): Promise<AuthorizeApplicationToOrganizationalUnitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeApplicationToOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * @summary Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) accounts at a time.
   *
   * @param request AuthorizeApplicationToUsersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AuthorizeApplicationToUsersResponse
   */
  async authorizeApplicationToUsersWithOptions(request: AuthorizeApplicationToUsersRequest, runtime: $Util.RuntimeOptions): Promise<AuthorizeApplicationToUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuthorizeApplicationToUsers",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuthorizeApplicationToUsersResponse>(await this.callApi(params, req, runtime), new AuthorizeApplicationToUsersResponse({}));
  }

  /**
   * @summary Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) accounts at a time.
   *
   * @param request AuthorizeApplicationToUsersRequest
   * @return AuthorizeApplicationToUsersResponse
   */
  async authorizeApplicationToUsers(request: AuthorizeApplicationToUsersRequest): Promise<AuthorizeApplicationToUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeApplicationToUsersWithOptions(request, runtime);
  }

  /**
   * @summary Adds an application to an Enterprise Identity Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @description IDaaS EIAM supports the following two standard single sign-on (SSO) protocols for adding applications: SAML 2.0 and OIDC. You can select an SSO protocol based on your business requirements when you add an application. You cannot change the SSO protocol that you selected after the application is added.
   *
   * @param request CreateApplicationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateApplicationResponse
   */
  async createApplicationWithOptions(request: CreateApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.applicationSourceType)) {
      query["ApplicationSourceType"] = request.applicationSourceType;
    }

    if (!Util.isUnset(request.applicationTemplateId)) {
      query["ApplicationTemplateId"] = request.applicationTemplateId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.logoUrl)) {
      query["LogoUrl"] = request.logoUrl;
    }

    if (!Util.isUnset(request.ssoType)) {
      query["SsoType"] = request.ssoType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationResponse>(await this.callApi(params, req, runtime), new CreateApplicationResponse({}));
  }

  /**
   * @summary Adds an application to an Enterprise Identity Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @description IDaaS EIAM supports the following two standard single sign-on (SSO) protocols for adding applications: SAML 2.0 and OIDC. You can select an SSO protocol based on your business requirements when you add an application. You cannot change the SSO protocol that you selected after the application is added.
   *
   * @param request CreateApplicationRequest
   * @return CreateApplicationResponse
   */
  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  /**
   * @summary Creates a client key for an Employee Identity and Access Management (EIAM) application. An EIAM application can have up to two client keys.
   *
   * @param request CreateApplicationClientSecretRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateApplicationClientSecretResponse
   */
  async createApplicationClientSecretWithOptions(request: CreateApplicationClientSecretRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationClientSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new CreateApplicationClientSecretResponse({}));
  }

  /**
   * @summary Creates a client key for an Employee Identity and Access Management (EIAM) application. An EIAM application can have up to two client keys.
   *
   * @param request CreateApplicationClientSecretRequest
   * @return CreateApplicationClientSecretResponse
   */
  async createApplicationClientSecret(request: CreateApplicationClientSecretRequest): Promise<CreateApplicationClientSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * @summary 创建域名。
   *
   * @param request CreateDomainRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDomainResponse
   */
  async createDomainWithOptions(request: CreateDomainRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.filing)) {
      query["Filing"] = request.filing;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDomainResponse>(await this.callApi(params, req, runtime), new CreateDomainResponse({}));
  }

  /**
   * @summary 创建域名。
   *
   * @param request CreateDomainRequest
   * @return CreateDomainResponse
   */
  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  /**
   * @summary 创建域名代理Token。
   *
   * @param request CreateDomainProxyTokenRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateDomainProxyTokenResponse
   */
  async createDomainProxyTokenWithOptions(request: CreateDomainProxyTokenRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainProxyTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new CreateDomainProxyTokenResponse({}));
  }

  /**
   * @summary 创建域名代理Token。
   *
   * @param request CreateDomainProxyTokenRequest
   * @return CreateDomainProxyTokenResponse
   */
  async createDomainProxyToken(request: CreateDomainProxyTokenRequest): Promise<CreateDomainProxyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * @summary Creates an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   *
   * @param request CreateGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateGroupResponse
   */
  async createGroupWithOptions(request: CreateGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupExternalId)) {
      query["GroupExternalId"] = request.groupExternalId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupResponse>(await this.callApi(params, req, runtime), new CreateGroupResponse({}));
  }

  /**
   * @summary Creates an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   *
   * @param request CreateGroupRequest
   * @return CreateGroupResponse
   */
  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
   * @summary Creates an instance based on which all capabilities of Identity as a Service (IDaaS) Enterprise Identity and Access Management (EIAM) are provided.
   *
   * @param request CreateInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateInstanceResponse
   */
  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  /**
   * @summary Creates an instance based on which all capabilities of Identity as a Service (IDaaS) Enterprise Identity and Access Management (EIAM) are provided.
   *
   * @param request CreateInstanceRequest
   * @return CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 创建一个专属网络端点。
   *
   * @param request CreateNetworkAccessEndpointRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateNetworkAccessEndpointResponse
   */
  async createNetworkAccessEndpointWithOptions(request: CreateNetworkAccessEndpointRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkAccessEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkAccessEndpointName)) {
      query["NetworkAccessEndpointName"] = request.networkAccessEndpointName;
    }

    if (!Util.isUnset(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcRegionId)) {
      query["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNetworkAccessEndpoint",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNetworkAccessEndpointResponse>(await this.callApi(params, req, runtime), new CreateNetworkAccessEndpointResponse({}));
  }

  /**
   * @summary 创建一个专属网络端点。
   *
   * @param request CreateNetworkAccessEndpointRequest
   * @return CreateNetworkAccessEndpointResponse
   */
  async createNetworkAccessEndpoint(request: CreateNetworkAccessEndpointRequest): Promise<CreateNetworkAccessEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * @summary Creates an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   *
   * @param request CreateOrganizationalUnitRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateOrganizationalUnitResponse
   */
  async createOrganizationalUnitWithOptions(request: CreateOrganizationalUnitRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrganizationalUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitExternalId)) {
      query["OrganizationalUnitExternalId"] = request.organizationalUnitExternalId;
    }

    if (!Util.isUnset(request.organizationalUnitName)) {
      query["OrganizationalUnitName"] = request.organizationalUnitName;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new CreateOrganizationalUnitResponse({}));
  }

  /**
   * @summary Creates an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   *
   * @param request CreateOrganizationalUnitRequest
   * @return CreateOrganizationalUnitResponse
   */
  async createOrganizationalUnit(request: CreateOrganizationalUnitRequest): Promise<CreateOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * @summary Creates an account in an Identity as a Service (IDaaS) Enterprise Identity Access Management (EIAM) instance.
   *
   * @param request CreateUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateUserResponse
   */
  async createUserWithOptions(request: CreateUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customFields)) {
      query["CustomFields"] = request.customFields;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.emailVerified)) {
      query["EmailVerified"] = request.emailVerified;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.passwordInitializationConfig)) {
      query["PasswordInitializationConfig"] = request.passwordInitializationConfig;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.phoneNumberVerified)) {
      query["PhoneNumberVerified"] = request.phoneNumberVerified;
    }

    if (!Util.isUnset(request.phoneRegion)) {
      query["PhoneRegion"] = request.phoneRegion;
    }

    if (!Util.isUnset(request.primaryOrganizationalUnitId)) {
      query["PrimaryOrganizationalUnitId"] = request.primaryOrganizationalUnitId;
    }

    if (!Util.isUnset(request.userExternalId)) {
      query["UserExternalId"] = request.userExternalId;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserResponse>(await this.callApi(params, req, runtime), new CreateUserResponse({}));
  }

  /**
   * @summary Creates an account in an Identity as a Service (IDaaS) Enterprise Identity Access Management (EIAM) instance.
   *
   * @param request CreateUserRequest
   * @return CreateUserResponse
   */
  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an Employee Identity and Access Management (EIAM) application.
   *
   * @description Make sure that the EIAM application that you want to delete is not used before you delete the EIAM application. After you delete the EIAM application, all configurations are deleted and cannot be restored.
   *
   * @param request DeleteApplicationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteApplicationResponse
   */
  async deleteApplicationWithOptions(request: DeleteApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplicationResponse>(await this.callApi(params, req, runtime), new DeleteApplicationResponse({}));
  }

  /**
   * @summary Deletes an Employee Identity and Access Management (EIAM) application.
   *
   * @description Make sure that the EIAM application that you want to delete is not used before you delete the EIAM application. After you delete the EIAM application, all configurations are deleted and cannot be restored.
   *
   * @param request DeleteApplicationRequest
   * @return DeleteApplicationResponse
   */
  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  /**
   * @summary Deletes a client key for an Employee Identity and Access Management (EIAM) application.
   *
   * @param request DeleteApplicationClientSecretRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteApplicationClientSecretResponse
   */
  async deleteApplicationClientSecretWithOptions(request: DeleteApplicationClientSecretRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationClientSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new DeleteApplicationClientSecretResponse({}));
  }

  /**
   * @summary Deletes a client key for an Employee Identity and Access Management (EIAM) application.
   *
   * @param request DeleteApplicationClientSecretRequest
   * @return DeleteApplicationClientSecretResponse
   */
  async deleteApplicationClientSecret(request: DeleteApplicationClientSecretRequest): Promise<DeleteApplicationClientSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * @summary 删除域名。
   *
   * @param request DeleteDomainRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainResponse>(await this.callApi(params, req, runtime), new DeleteDomainResponse({}));
  }

  /**
   * @summary 删除域名。
   *
   * @param request DeleteDomainRequest
   * @return DeleteDomainResponse
   */
  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * @summary 删除指定域名代理Token，删除之前请保证代理Token处于禁用状态。
   *
   * @param request DeleteDomainProxyTokenRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteDomainProxyTokenResponse
   */
  async deleteDomainProxyTokenWithOptions(request: DeleteDomainProxyTokenRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainProxyTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new DeleteDomainProxyTokenResponse({}));
  }

  /**
   * @summary 删除指定域名代理Token，删除之前请保证代理Token处于禁用状态。
   *
   * @param request DeleteDomainProxyTokenRequest
   * @return DeleteDomainProxyTokenResponse
   */
  async deleteDomainProxyToken(request: DeleteDomainProxyTokenRequest): Promise<DeleteDomainProxyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * @summary Deletes the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   *
   * @param request DeleteGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteGroupResponse
   */
  async deleteGroupWithOptions(request: DeleteGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGroupResponse> {
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
      action: "DeleteGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupResponse>(await this.callApi(params, req, runtime), new DeleteGroupResponse({}));
  }

  /**
   * @summary Deletes the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   *
   * @param request DeleteGroupRequest
   * @return DeleteGroupResponse
   */
  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS) that you do not need.
   *
   * @description Make sure that the instance to be deleted is no longer used. If the instance is deleted, all data related to the instance will be deleted.
   *
   * @param request DeleteInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  /**
   * @summary Deletes an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS) that you do not need.
   *
   * @description Make sure that the instance to be deleted is no longer used. If the instance is deleted, all data related to the instance will be deleted.
   *
   * @param request DeleteInstanceRequest
   * @return DeleteInstanceResponse
   */
  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 删除一个专属网络端点。
   *
   * @param request DeleteNetworkAccessEndpointRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteNetworkAccessEndpointResponse
   */
  async deleteNetworkAccessEndpointWithOptions(request: DeleteNetworkAccessEndpointRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkAccessEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNetworkAccessEndpoint",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNetworkAccessEndpointResponse>(await this.callApi(params, req, runtime), new DeleteNetworkAccessEndpointResponse({}));
  }

  /**
   * @summary 删除一个专属网络端点。
   *
   * @param request DeleteNetworkAccessEndpointRequest
   * @return DeleteNetworkAccessEndpointResponse
   */
  async deleteNetworkAccessEndpoint(request: DeleteNetworkAccessEndpointRequest): Promise<DeleteNetworkAccessEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the organization has EIAM accounts or child organizations, the delete operation fails.
   *
   * @param request DeleteOrganizationalUnitRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteOrganizationalUnitResponse
   */
  async deleteOrganizationalUnitWithOptions(request: DeleteOrganizationalUnitRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOrganizationalUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new DeleteOrganizationalUnitResponse({}));
  }

  /**
   * @summary Deletes an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the organization has EIAM accounts or child organizations, the delete operation fails.
   *
   * @param request DeleteOrganizationalUnitRequest
   * @return DeleteOrganizationalUnitResponse
   */
  async deleteOrganizationalUnit(request: DeleteOrganizationalUnitRequest): Promise<DeleteOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * @summary Deletes an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The information related to the account is cleared.
   *
   * @param request DeleteUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteUserResponse
   */
  async deleteUserWithOptions(request: DeleteUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserResponse>(await this.callApi(params, req, runtime), new DeleteUserResponse({}));
  }

  /**
   * @summary Deletes an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The information related to the account is cleared.
   *
   * @param request DeleteUserRequest
   * @return DeleteUserResponse
   */
  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * @summary Disables an enabled Employee Identity and Access Management (EIAM) application. All features of the EIAM application cannot be used if you disable the EIAM application.
   *
   * @description All features of the EIAM application cannot be used if you disable the EIAM application, such as single sign-on (SSO) and account synchronization. Make sure that you acknowledge the risks of the delete operation.
   *
   * @param request DisableApplicationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableApplicationResponse
   */
  async disableApplicationWithOptions(request: DisableApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DisableApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableApplicationResponse>(await this.callApi(params, req, runtime), new DisableApplicationResponse({}));
  }

  /**
   * @summary Disables an enabled Employee Identity and Access Management (EIAM) application. All features of the EIAM application cannot be used if you disable the EIAM application.
   *
   * @description All features of the EIAM application cannot be used if you disable the EIAM application, such as single sign-on (SSO) and account synchronization. Make sure that you acknowledge the risks of the delete operation.
   *
   * @param request DisableApplicationRequest
   * @return DisableApplicationResponse
   */
  async disableApplication(request: DisableApplicationRequest): Promise<DisableApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableApplicationWithOptions(request, runtime);
  }

  /**
   * @summary Disables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   *
   * @param request DisableApplicationApiInvokeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableApplicationApiInvokeResponse
   */
  async disableApplicationApiInvokeWithOptions(request: DisableApplicationApiInvokeRequest, runtime: $Util.RuntimeOptions): Promise<DisableApplicationApiInvokeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableApplicationApiInvoke",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableApplicationApiInvokeResponse>(await this.callApi(params, req, runtime), new DisableApplicationApiInvokeResponse({}));
  }

  /**
   * @summary Disables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   *
   * @param request DisableApplicationApiInvokeRequest
   * @return DisableApplicationApiInvokeResponse
   */
  async disableApplicationApiInvoke(request: DisableApplicationApiInvokeRequest): Promise<DisableApplicationApiInvokeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableApplicationApiInvokeWithOptions(request, runtime);
  }

  /**
   * @summary Disables a client key of an Employee Identity and Access Management (EIAM) application.
   *
   * @param request DisableApplicationClientSecretRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableApplicationClientSecretResponse
   */
  async disableApplicationClientSecretWithOptions(request: DisableApplicationClientSecretRequest, runtime: $Util.RuntimeOptions): Promise<DisableApplicationClientSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new DisableApplicationClientSecretResponse({}));
  }

  /**
   * @summary Disables a client key of an Employee Identity and Access Management (EIAM) application.
   *
   * @param request DisableApplicationClientSecretRequest
   * @return DisableApplicationClientSecretResponse
   */
  async disableApplicationClientSecret(request: DisableApplicationClientSecretRequest): Promise<DisableApplicationClientSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * @summary Disables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request DisableApplicationProvisioningRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableApplicationProvisioningResponse
   */
  async disableApplicationProvisioningWithOptions(request: DisableApplicationProvisioningRequest, runtime: $Util.RuntimeOptions): Promise<DisableApplicationProvisioningResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableApplicationProvisioning",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableApplicationProvisioningResponse>(await this.callApi(params, req, runtime), new DisableApplicationProvisioningResponse({}));
  }

  /**
   * @summary Disables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request DisableApplicationProvisioningRequest
   * @return DisableApplicationProvisioningResponse
   */
  async disableApplicationProvisioning(request: DisableApplicationProvisioningRequest): Promise<DisableApplicationProvisioningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableApplicationProvisioningWithOptions(request, runtime);
  }

  /**
   * @summary 禁用应用SSO能力
   *
   * @param request DisableApplicationSsoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableApplicationSsoResponse
   */
  async disableApplicationSsoWithOptions(request: DisableApplicationSsoRequest, runtime: $Util.RuntimeOptions): Promise<DisableApplicationSsoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableApplicationSso",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableApplicationSsoResponse>(await this.callApi(params, req, runtime), new DisableApplicationSsoResponse({}));
  }

  /**
   * @summary 禁用应用SSO能力
   *
   * @param request DisableApplicationSsoRequest
   * @return DisableApplicationSsoResponse
   */
  async disableApplicationSso(request: DisableApplicationSsoRequest): Promise<DisableApplicationSsoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableApplicationSsoWithOptions(request, runtime);
  }

  /**
   * @summary 禁用指定域名代理Token。
   *
   * @param request DisableDomainProxyTokenRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableDomainProxyTokenResponse
   */
  async disableDomainProxyTokenWithOptions(request: DisableDomainProxyTokenRequest, runtime: $Util.RuntimeOptions): Promise<DisableDomainProxyTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new DisableDomainProxyTokenResponse({}));
  }

  /**
   * @summary 禁用指定域名代理Token。
   *
   * @param request DisableDomainProxyTokenRequest
   * @return DisableDomainProxyTokenResponse
   */
  async disableDomainProxyToken(request: DisableDomainProxyTokenRequest): Promise<DisableDomainProxyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * @summary 关闭初始化域名自动跳转。
   *
   * @param request DisableInitDomainAutoRedirectRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableInitDomainAutoRedirectResponse
   */
  async disableInitDomainAutoRedirectWithOptions(request: DisableInitDomainAutoRedirectRequest, runtime: $Util.RuntimeOptions): Promise<DisableInitDomainAutoRedirectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableInitDomainAutoRedirect",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableInitDomainAutoRedirectResponse>(await this.callApi(params, req, runtime), new DisableInitDomainAutoRedirectResponse({}));
  }

  /**
   * @summary 关闭初始化域名自动跳转。
   *
   * @param request DisableInitDomainAutoRedirectRequest
   * @return DisableInitDomainAutoRedirectResponse
   */
  async disableInitDomainAutoRedirect(request: DisableInitDomainAutoRedirectRequest): Promise<DisableInitDomainAutoRedirectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableInitDomainAutoRedirectWithOptions(request, runtime);
  }

  /**
   * @summary Disables an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account. If the account is disabled, a success message is returned.
   *
   * @param request DisableUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DisableUserResponse
   */
  async disableUserWithOptions(request: DisableUserRequest, runtime: $Util.RuntimeOptions): Promise<DisableUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableUserResponse>(await this.callApi(params, req, runtime), new DisableUserResponse({}));
  }

  /**
   * @summary Disables an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account. If the account is disabled, a success message is returned.
   *
   * @param request DisableUserRequest
   * @return DisableUserResponse
   */
  async disableUser(request: DisableUserRequest): Promise<DisableUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableUserWithOptions(request, runtime);
  }

  /**
   * @summary Enables a disabled Employee Identity and Access Management (EIAM) application.
   *
   * @param request EnableApplicationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableApplicationResponse
   */
  async enableApplicationWithOptions(request: EnableApplicationRequest, runtime: $Util.RuntimeOptions): Promise<EnableApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableApplicationResponse>(await this.callApi(params, req, runtime), new EnableApplicationResponse({}));
  }

  /**
   * @summary Enables a disabled Employee Identity and Access Management (EIAM) application.
   *
   * @param request EnableApplicationRequest
   * @return EnableApplicationResponse
   */
  async enableApplication(request: EnableApplicationRequest): Promise<EnableApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableApplicationWithOptions(request, runtime);
  }

  /**
   * @summary Enables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   *
   * @param request EnableApplicationApiInvokeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableApplicationApiInvokeResponse
   */
  async enableApplicationApiInvokeWithOptions(request: EnableApplicationApiInvokeRequest, runtime: $Util.RuntimeOptions): Promise<EnableApplicationApiInvokeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableApplicationApiInvoke",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableApplicationApiInvokeResponse>(await this.callApi(params, req, runtime), new EnableApplicationApiInvokeResponse({}));
  }

  /**
   * @summary Enables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   *
   * @param request EnableApplicationApiInvokeRequest
   * @return EnableApplicationApiInvokeResponse
   */
  async enableApplicationApiInvoke(request: EnableApplicationApiInvokeRequest): Promise<EnableApplicationApiInvokeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableApplicationApiInvokeWithOptions(request, runtime);
  }

  /**
   * @summary Enables the client key of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request EnableApplicationClientSecretRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableApplicationClientSecretResponse
   */
  async enableApplicationClientSecretWithOptions(request: EnableApplicationClientSecretRequest, runtime: $Util.RuntimeOptions): Promise<EnableApplicationClientSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new EnableApplicationClientSecretResponse({}));
  }

  /**
   * @summary Enables the client key of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request EnableApplicationClientSecretRequest
   * @return EnableApplicationClientSecretResponse
   */
  async enableApplicationClientSecret(request: EnableApplicationClientSecretRequest): Promise<EnableApplicationClientSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * @summary Enables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request EnableApplicationProvisioningRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableApplicationProvisioningResponse
   */
  async enableApplicationProvisioningWithOptions(request: EnableApplicationProvisioningRequest, runtime: $Util.RuntimeOptions): Promise<EnableApplicationProvisioningResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableApplicationProvisioning",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableApplicationProvisioningResponse>(await this.callApi(params, req, runtime), new EnableApplicationProvisioningResponse({}));
  }

  /**
   * @summary Enables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request EnableApplicationProvisioningRequest
   * @return EnableApplicationProvisioningResponse
   */
  async enableApplicationProvisioning(request: EnableApplicationProvisioningRequest): Promise<EnableApplicationProvisioningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableApplicationProvisioningWithOptions(request, runtime);
  }

  /**
   * @summary 启用应用SSO能力
   *
   * @param request EnableApplicationSsoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableApplicationSsoResponse
   */
  async enableApplicationSsoWithOptions(request: EnableApplicationSsoRequest, runtime: $Util.RuntimeOptions): Promise<EnableApplicationSsoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableApplicationSso",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableApplicationSsoResponse>(await this.callApi(params, req, runtime), new EnableApplicationSsoResponse({}));
  }

  /**
   * @summary 启用应用SSO能力
   *
   * @param request EnableApplicationSsoRequest
   * @return EnableApplicationSsoResponse
   */
  async enableApplicationSso(request: EnableApplicationSsoRequest): Promise<EnableApplicationSsoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableApplicationSsoWithOptions(request, runtime);
  }

  /**
   * @summary 启用指定域名代理Token。
   *
   * @param request EnableDomainProxyTokenRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableDomainProxyTokenResponse
   */
  async enableDomainProxyTokenWithOptions(request: EnableDomainProxyTokenRequest, runtime: $Util.RuntimeOptions): Promise<EnableDomainProxyTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new EnableDomainProxyTokenResponse({}));
  }

  /**
   * @summary 启用指定域名代理Token。
   *
   * @param request EnableDomainProxyTokenRequest
   * @return EnableDomainProxyTokenResponse
   */
  async enableDomainProxyToken(request: EnableDomainProxyTokenRequest): Promise<EnableDomainProxyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * @summary 开启初始化域名自动跳转。开启后，访问初始化域名将会自动跳转至默认域名。
   *
   * @param request EnableInitDomainAutoRedirectRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableInitDomainAutoRedirectResponse
   */
  async enableInitDomainAutoRedirectWithOptions(request: EnableInitDomainAutoRedirectRequest, runtime: $Util.RuntimeOptions): Promise<EnableInitDomainAutoRedirectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableInitDomainAutoRedirect",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableInitDomainAutoRedirectResponse>(await this.callApi(params, req, runtime), new EnableInitDomainAutoRedirectResponse({}));
  }

  /**
   * @summary 开启初始化域名自动跳转。开启后，访问初始化域名将会自动跳转至默认域名。
   *
   * @param request EnableInitDomainAutoRedirectRequest
   * @return EnableInitDomainAutoRedirectResponse
   */
  async enableInitDomainAutoRedirect(request: EnableInitDomainAutoRedirectRequest): Promise<EnableInitDomainAutoRedirectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableInitDomainAutoRedirectWithOptions(request, runtime);
  }

  /**
   * @summary Enables an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   *
   * @param request EnableUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return EnableUserResponse
   */
  async enableUserWithOptions(request: EnableUserRequest, runtime: $Util.RuntimeOptions): Promise<EnableUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableUserResponse>(await this.callApi(params, req, runtime), new EnableUserResponse({}));
  }

  /**
   * @summary Enables an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   *
   * @param request EnableUserRequest
   * @return EnableUserResponse
   */
  async enableUser(request: EnableUserRequest): Promise<EnableUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableUserWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of an Employee Identity and Access Management (EIAM) application.
   *
   * @param request GetApplicationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetApplicationResponse
   */
  async getApplicationWithOptions(request: GetApplicationRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationResponse>(await this.callApi(params, req, runtime), new GetApplicationResponse({}));
  }

  /**
   * @summary Queries the details of an Employee Identity and Access Management (EIAM) application.
   *
   * @param request GetApplicationRequest
   * @return GetApplicationResponse
   */
  async getApplication(request: GetApplicationRequest): Promise<GetApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  /**
   * @summary Queries the permissions of the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   *
   * @param request GetApplicationGrantScopeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetApplicationGrantScopeResponse
   */
  async getApplicationGrantScopeWithOptions(request: GetApplicationGrantScopeRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationGrantScopeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApplicationGrantScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationGrantScopeResponse>(await this.callApi(params, req, runtime), new GetApplicationGrantScopeResponse({}));
  }

  /**
   * @summary Queries the permissions of the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   *
   * @param request GetApplicationGrantScopeRequest
   * @return GetApplicationGrantScopeResponse
   */
  async getApplicationGrantScope(request: GetApplicationGrantScopeRequest): Promise<GetApplicationGrantScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationGrantScopeWithOptions(request, runtime);
  }

  /**
   * @summary Queries the configuration of the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request GetApplicationProvisioningConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetApplicationProvisioningConfigResponse
   */
  async getApplicationProvisioningConfigWithOptions(request: GetApplicationProvisioningConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationProvisioningConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApplicationProvisioningConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationProvisioningConfigResponse>(await this.callApi(params, req, runtime), new GetApplicationProvisioningConfigResponse({}));
  }

  /**
   * @summary Queries the configuration of the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request GetApplicationProvisioningConfigRequest
   * @return GetApplicationProvisioningConfigResponse
   */
  async getApplicationProvisioningConfig(request: GetApplicationProvisioningConfigRequest): Promise<GetApplicationProvisioningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationProvisioningConfigWithOptions(request, runtime);
  }

  /**
   * @summary Queries the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   *
   * @param request GetApplicationProvisioningScopeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetApplicationProvisioningScopeResponse
   */
  async getApplicationProvisioningScopeWithOptions(request: GetApplicationProvisioningScopeRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationProvisioningScopeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApplicationProvisioningScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationProvisioningScopeResponse>(await this.callApi(params, req, runtime), new GetApplicationProvisioningScopeResponse({}));
  }

  /**
   * @summary Queries the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   *
   * @param request GetApplicationProvisioningScopeRequest
   * @return GetApplicationProvisioningScopeResponse
   */
  async getApplicationProvisioningScope(request: GetApplicationProvisioningScopeRequest): Promise<GetApplicationProvisioningScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationProvisioningScopeWithOptions(request, runtime);
  }

  /**
   * @summary Queries the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request GetApplicationSsoConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetApplicationSsoConfigResponse
   */
  async getApplicationSsoConfigWithOptions(request: GetApplicationSsoConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetApplicationSsoConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApplicationSsoConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetApplicationSsoConfigResponse>(await this.callApi(params, req, runtime), new GetApplicationSsoConfigResponse({}));
  }

  /**
   * @summary Queries the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request GetApplicationSsoConfigRequest
   * @return GetApplicationSsoConfigResponse
   */
  async getApplicationSsoConfig(request: GetApplicationSsoConfigRequest): Promise<GetApplicationSsoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationSsoConfigWithOptions(request, runtime);
  }

  /**
   * @summary 查询一个域名的详细信息。
   *
   * @param request GetDomainRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDomainResponse
   */
  async getDomainWithOptions(request: GetDomainRequest, runtime: $Util.RuntimeOptions): Promise<GetDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDomainResponse>(await this.callApi(params, req, runtime), new GetDomainResponse({}));
  }

  /**
   * @summary 查询一个域名的详细信息。
   *
   * @param request GetDomainRequest
   * @return GetDomainResponse
   */
  async getDomain(request: GetDomainRequest): Promise<GetDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDomainWithOptions(request, runtime);
  }

  /**
   * @summary 查看域名的DNS Challenge记录。
   *
   * @param request GetDomainDnsChallengeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetDomainDnsChallengeResponse
   */
  async getDomainDnsChallengeWithOptions(request: GetDomainDnsChallengeRequest, runtime: $Util.RuntimeOptions): Promise<GetDomainDnsChallengeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDomainDnsChallenge",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDomainDnsChallengeResponse>(await this.callApi(params, req, runtime), new GetDomainDnsChallengeResponse({}));
  }

  /**
   * @summary 查看域名的DNS Challenge记录。
   *
   * @param request GetDomainDnsChallengeRequest
   * @return GetDomainDnsChallengeResponse
   */
  async getDomainDnsChallenge(request: GetDomainDnsChallengeRequest): Promise<GetDomainDnsChallengeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDomainDnsChallengeWithOptions(request, runtime);
  }

  /**
   * @summary Queries the forgot password configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request GetForgetPasswordConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetForgetPasswordConfigurationResponse
   */
  async getForgetPasswordConfigurationWithOptions(request: GetForgetPasswordConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<GetForgetPasswordConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetForgetPasswordConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetForgetPasswordConfigurationResponse>(await this.callApi(params, req, runtime), new GetForgetPasswordConfigurationResponse({}));
  }

  /**
   * @summary Queries the forgot password configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request GetForgetPasswordConfigurationRequest
   * @return GetForgetPasswordConfigurationResponse
   */
  async getForgetPasswordConfiguration(request: GetForgetPasswordConfigurationRequest): Promise<GetForgetPasswordConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getForgetPasswordConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   *
   * @param request GetGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetGroupResponse
   */
  async getGroupWithOptions(request: GetGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetGroupResponse> {
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
      action: "GetGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGroupResponse>(await this.callApi(params, req, runtime), new GetGroupResponse({}));
  }

  /**
   * @summary Queries the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   *
   * @param request GetGroupRequest
   * @return GetGroupResponse
   */
  async getGroup(request: GetGroupRequest): Promise<GetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request GetInstanceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetInstanceResponse
   */
  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
  }

  /**
   * @summary Queries the information of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request GetInstanceRequest
   * @return GetInstanceResponse
   */
  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * @summary 查询一个专属网络端点的详细信息。
   *
   * @param request GetNetworkAccessEndpointRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetNetworkAccessEndpointResponse
   */
  async getNetworkAccessEndpointWithOptions(request: GetNetworkAccessEndpointRequest, runtime: $Util.RuntimeOptions): Promise<GetNetworkAccessEndpointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNetworkAccessEndpoint",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNetworkAccessEndpointResponse>(await this.callApi(params, req, runtime), new GetNetworkAccessEndpointResponse({}));
  }

  /**
   * @summary 查询一个专属网络端点的详细信息。
   *
   * @param request GetNetworkAccessEndpointRequest
   * @return GetNetworkAccessEndpointResponse
   */
  async getNetworkAccessEndpoint(request: GetNetworkAccessEndpointRequest): Promise<GetNetworkAccessEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about an organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request GetOrganizationalUnitRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetOrganizationalUnitResponse
   */
  async getOrganizationalUnitWithOptions(request: GetOrganizationalUnitRequest, runtime: $Util.RuntimeOptions): Promise<GetOrganizationalUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new GetOrganizationalUnitResponse({}));
  }

  /**
   * @summary Queries the information about an organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request GetOrganizationalUnitRequest
   * @return GetOrganizationalUnitResponse
   */
  async getOrganizationalUnit(request: GetOrganizationalUnitRequest): Promise<GetOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * @summary Queries the password complexity configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request GetPasswordComplexityConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPasswordComplexityConfigurationResponse
   */
  async getPasswordComplexityConfigurationWithOptions(request: GetPasswordComplexityConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<GetPasswordComplexityConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPasswordComplexityConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPasswordComplexityConfigurationResponse>(await this.callApi(params, req, runtime), new GetPasswordComplexityConfigurationResponse({}));
  }

  /**
   * @summary Queries the password complexity configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request GetPasswordComplexityConfigurationRequest
   * @return GetPasswordComplexityConfigurationResponse
   */
  async getPasswordComplexityConfiguration(request: GetPasswordComplexityConfigurationRequest): Promise<GetPasswordComplexityConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPasswordComplexityConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Queries the password expiration configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request GetPasswordExpirationConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPasswordExpirationConfigurationResponse
   */
  async getPasswordExpirationConfigurationWithOptions(request: GetPasswordExpirationConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<GetPasswordExpirationConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPasswordExpirationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPasswordExpirationConfigurationResponse>(await this.callApi(params, req, runtime), new GetPasswordExpirationConfigurationResponse({}));
  }

  /**
   * @summary Queries the password expiration configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request GetPasswordExpirationConfigurationRequest
   * @return GetPasswordExpirationConfigurationResponse
   */
  async getPasswordExpirationConfiguration(request: GetPasswordExpirationConfigurationRequest): Promise<GetPasswordExpirationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPasswordExpirationConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Queries the password history configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request GetPasswordHistoryConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPasswordHistoryConfigurationResponse
   */
  async getPasswordHistoryConfigurationWithOptions(request: GetPasswordHistoryConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<GetPasswordHistoryConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPasswordHistoryConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPasswordHistoryConfigurationResponse>(await this.callApi(params, req, runtime), new GetPasswordHistoryConfigurationResponse({}));
  }

  /**
   * @summary Queries the password history configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request GetPasswordHistoryConfigurationRequest
   * @return GetPasswordHistoryConfigurationResponse
   */
  async getPasswordHistoryConfiguration(request: GetPasswordHistoryConfigurationRequest): Promise<GetPasswordHistoryConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPasswordHistoryConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Queries the password initialization configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request GetPasswordInitializationConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPasswordInitializationConfigurationResponse
   */
  async getPasswordInitializationConfigurationWithOptions(request: GetPasswordInitializationConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<GetPasswordInitializationConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPasswordInitializationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPasswordInitializationConfigurationResponse>(await this.callApi(params, req, runtime), new GetPasswordInitializationConfigurationResponse({}));
  }

  /**
   * @summary Queries the password initialization configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request GetPasswordInitializationConfigurationRequest
   * @return GetPasswordInitializationConfigurationResponse
   */
  async getPasswordInitializationConfiguration(request: GetPasswordInitializationConfigurationRequest): Promise<GetPasswordInitializationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPasswordInitializationConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about the root organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request GetRootOrganizationalUnitRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetRootOrganizationalUnitResponse
   */
  async getRootOrganizationalUnitWithOptions(request: GetRootOrganizationalUnitRequest, runtime: $Util.RuntimeOptions): Promise<GetRootOrganizationalUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRootOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRootOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new GetRootOrganizationalUnitResponse({}));
  }

  /**
   * @summary Queries the information about the root organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request GetRootOrganizationalUnitRequest
   * @return GetRootOrganizationalUnitResponse
   */
  async getRootOrganizationalUnit(request: GetRootOrganizationalUnitRequest): Promise<GetRootOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRootOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * @summary Queries the details of an account in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request GetUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetUserResponse
   */
  async getUserWithOptions(request: GetUserRequest, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  /**
   * @summary Queries the details of an account in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request GetUserRequest
   * @return GetUserResponse
   */
  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * @summary Queries all client keys of an Employee Identity and Access Management (EIAM) application. The returned key secret is not masked. If you want to query the key secret that is masked, call the ObtainApplicationClientSecret operation.
   *
   * @param request ListApplicationClientSecretsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListApplicationClientSecretsResponse
   */
  async listApplicationClientSecretsWithOptions(request: ListApplicationClientSecretsRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationClientSecretsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplicationClientSecrets",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationClientSecretsResponse>(await this.callApi(params, req, runtime), new ListApplicationClientSecretsResponse({}));
  }

  /**
   * @summary Queries all client keys of an Employee Identity and Access Management (EIAM) application. The returned key secret is not masked. If you want to query the key secret that is masked, call the ObtainApplicationClientSecret operation.
   *
   * @param request ListApplicationClientSecretsRequest
   * @return ListApplicationClientSecretsResponse
   */
  async listApplicationClientSecrets(request: ListApplicationClientSecretsRequest): Promise<ListApplicationClientSecretsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationClientSecretsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about one or multiple Employee Identity and Access Management (EIAM) applications by page.
   *
   * @param request ListApplicationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListApplicationsResponse
   */
  async listApplicationsWithOptions(request: ListApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationIds)) {
      query["ApplicationIds"] = request.applicationIds;
    }

    if (!Util.isUnset(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!Util.isUnset(request.authorizationType)) {
      query["AuthorizationType"] = request.authorizationType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplications",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationsResponse>(await this.callApi(params, req, runtime), new ListApplicationsResponse({}));
  }

  /**
   * @summary Queries the information about one or multiple Employee Identity and Access Management (EIAM) applications by page.
   *
   * @param request ListApplicationsRequest
   * @return ListApplicationsResponse
   */
  async listApplications(request: ListApplicationsRequest): Promise<ListApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the applications that an Employee Identity and Access Management (EIAM) organization can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   *
   * @description You can only query the permissions that are directly granted to the EIAM organization by calling the ListApplicationsForOrganizationalUnit operation. You can filter applications by configuring the **ApplicationIds** parameter when you call this operation.
   *
   * @param request ListApplicationsForOrganizationalUnitRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListApplicationsForOrganizationalUnitResponse
   */
  async listApplicationsForOrganizationalUnitWithOptions(request: ListApplicationsForOrganizationalUnitRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationsForOrganizationalUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationIds)) {
      query["ApplicationIds"] = request.applicationIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
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
      action: "ListApplicationsForOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationsForOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new ListApplicationsForOrganizationalUnitResponse({}));
  }

  /**
   * @summary Queries the applications that an Employee Identity and Access Management (EIAM) organization can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   *
   * @description You can only query the permissions that are directly granted to the EIAM organization by calling the ListApplicationsForOrganizationalUnit operation. You can filter applications by configuring the **ApplicationIds** parameter when you call this operation.
   *
   * @param request ListApplicationsForOrganizationalUnitRequest
   * @return ListApplicationsForOrganizationalUnitResponse
   */
  async listApplicationsForOrganizationalUnit(request: ListApplicationsForOrganizationalUnitRequest): Promise<ListApplicationsForOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsForOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * @summary Queries the applications that an Employee Identity and Access Management (EIAM) account can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   *
   * @param request ListApplicationsForUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListApplicationsForUserResponse
   */
  async listApplicationsForUserWithOptions(request: ListApplicationsForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationsForUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationIds)) {
      query["ApplicationIds"] = request.applicationIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryMode)) {
      query["QueryMode"] = request.queryMode;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplicationsForUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationsForUserResponse>(await this.callApi(params, req, runtime), new ListApplicationsForUserResponse({}));
  }

  /**
   * @summary Queries the applications that an Employee Identity and Access Management (EIAM) account can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   *
   * @param request ListApplicationsForUserRequest
   * @return ListApplicationsForUserResponse
   */
  async listApplicationsForUser(request: ListApplicationsForUserRequest): Promise<ListApplicationsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsForUserWithOptions(request, runtime);
  }

  /**
   * @summary 列表查询域名代理Token信息。
   *
   * @param request ListDomainProxyTokensRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDomainProxyTokensResponse
   */
  async listDomainProxyTokensWithOptions(request: ListDomainProxyTokensRequest, runtime: $Util.RuntimeOptions): Promise<ListDomainProxyTokensResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDomainProxyTokens",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDomainProxyTokensResponse>(await this.callApi(params, req, runtime), new ListDomainProxyTokensResponse({}));
  }

  /**
   * @summary 列表查询域名代理Token信息。
   *
   * @param request ListDomainProxyTokensRequest
   * @return ListDomainProxyTokensResponse
   */
  async listDomainProxyTokens(request: ListDomainProxyTokensRequest): Promise<ListDomainProxyTokensResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDomainProxyTokensWithOptions(request, runtime);
  }

  /**
   * @summary 列表查询域名记录。
   *
   * @param request ListDomainsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDomainsResponse
   */
  async listDomainsWithOptions(request: ListDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListDomainsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDomains",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDomainsResponse>(await this.callApi(params, req, runtime), new ListDomainsResponse({}));
  }

  /**
   * @summary 列表查询域名记录。
   *
   * @param request ListDomainsRequest
   * @return ListDomainsResponse
   */
  async listDomains(request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDomainsWithOptions(request, runtime);
  }

  /**
   * @summary 查询EIAM2.0/EIAM1.0实例列表
   *
   * @param request ListEiamInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListEiamInstancesResponse
   */
  async listEiamInstancesWithOptions(request: ListEiamInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListEiamInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.instanceRegionId)) {
      query["InstanceRegionId"] = request.instanceRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEiamInstances",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEiamInstancesResponse>(await this.callApi(params, req, runtime), new ListEiamInstancesResponse({}));
  }

  /**
   * @summary 查询EIAM2.0/EIAM1.0实例列表
   *
   * @param request ListEiamInstancesRequest
   * @return ListEiamInstancesResponse
   */
  async listEiamInstances(request: ListEiamInstancesRequest): Promise<ListEiamInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEiamInstancesWithOptions(request, runtime);
  }

  /**
   * @summary 查询EIAM2.0/EIAM1.0地域列表
   *
   * @param request ListEiamRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListEiamRegionsResponse
   */
  async listEiamRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListEiamRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListEiamRegions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListEiamRegionsResponse>(await this.callApi(params, req, runtime), new ListEiamRegionsResponse({}));
  }

  /**
   * @summary 查询EIAM2.0/EIAM1.0地域列表
   *
   * @return ListEiamRegionsResponse
   */
  async listEiamRegions(): Promise<ListEiamRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEiamRegionsWithOptions(runtime);
  }

  /**
   * @summary Queries a list of account groups in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   *
   * @param request ListGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListGroupsResponse
   */
  async listGroupsWithOptions(request: ListGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupExternalId)) {
      query["GroupExternalId"] = request.groupExternalId;
    }

    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.groupNameStartsWith)) {
      query["GroupNameStartsWith"] = request.groupNameStartsWith;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListGroups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGroupsResponse>(await this.callApi(params, req, runtime), new ListGroupsResponse({}));
  }

  /**
   * @summary Queries a list of account groups in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   *
   * @param request ListGroupsRequest
   * @return ListGroupsResponse
   */
  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of account groups to which the permissions to access an application are granted. The returned results contain the group IDs. You can call the GetGroup operation to query the information about an account group based on the group ID.
   *
   * @param request ListGroupsForApplicationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListGroupsForApplicationResponse
   */
  async listGroupsForApplicationWithOptions(request: ListGroupsForApplicationRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupsForApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListGroupsForApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGroupsForApplicationResponse>(await this.callApi(params, req, runtime), new ListGroupsForApplicationResponse({}));
  }

  /**
   * @summary Queries a list of account groups to which the permissions to access an application are granted. The returned results contain the group IDs. You can call the GetGroup operation to query the information about an account group based on the group ID.
   *
   * @param request ListGroupsForApplicationRequest
   * @return ListGroupsForApplicationResponse
   */
  async listGroupsForApplication(request: ListGroupsForApplicationRequest): Promise<ListGroupsForApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsForApplicationWithOptions(request, runtime);
  }

  /**
   * @summary Queries a list of account groups to which an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) belongs.
   *
   * @param request ListGroupsForUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListGroupsForUserResponse
   */
  async listGroupsForUserWithOptions(request: ListGroupsForUserRequest, runtime: $Util.RuntimeOptions): Promise<ListGroupsForUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "ListGroupsForUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGroupsForUserResponse>(await this.callApi(params, req, runtime), new ListGroupsForUserResponse({}));
  }

  /**
   * @summary Queries a list of account groups to which an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) belongs.
   *
   * @param request ListGroupsForUserRequest
   * @return ListGroupsForUserResponse
   */
  async listGroupsForUser(request: ListGroupsForUserRequest): Promise<ListGroupsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsForUserWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information of one or more Enterprise Identity and Access Management (EIAM) instances of Identity as a Service (IDaaS).
   *
   * @param request ListInstancesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListInstancesResponse
   */
  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  /**
   * @summary Queries the information of one or more Enterprise Identity and Access Management (EIAM) instances of Identity as a Service (IDaaS).
   *
   * @param request ListInstancesRequest
   * @return ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * @summary 获取支持专属端点的region列表
   *
   * @param request ListNetworkAccessEndpointAvailableRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListNetworkAccessEndpointAvailableRegionsResponse
   */
  async listNetworkAccessEndpointAvailableRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListNetworkAccessEndpointAvailableRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListNetworkAccessEndpointAvailableRegions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNetworkAccessEndpointAvailableRegionsResponse>(await this.callApi(params, req, runtime), new ListNetworkAccessEndpointAvailableRegionsResponse({}));
  }

  /**
   * @summary 获取支持专属端点的region列表
   *
   * @return ListNetworkAccessEndpointAvailableRegionsResponse
   */
  async listNetworkAccessEndpointAvailableRegions(): Promise<ListNetworkAccessEndpointAvailableRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNetworkAccessEndpointAvailableRegionsWithOptions(runtime);
  }

  /**
   * @summary 获取支持NAE的可用区列表
   *
   * @param request ListNetworkAccessEndpointAvailableZonesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListNetworkAccessEndpointAvailableZonesResponse
   */
  async listNetworkAccessEndpointAvailableZonesWithOptions(request: ListNetworkAccessEndpointAvailableZonesRequest, runtime: $Util.RuntimeOptions): Promise<ListNetworkAccessEndpointAvailableZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.naeRegionId)) {
      query["NaeRegionId"] = request.naeRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNetworkAccessEndpointAvailableZones",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNetworkAccessEndpointAvailableZonesResponse>(await this.callApi(params, req, runtime), new ListNetworkAccessEndpointAvailableZonesResponse({}));
  }

  /**
   * @summary 获取支持NAE的可用区列表
   *
   * @param request ListNetworkAccessEndpointAvailableZonesRequest
   * @return ListNetworkAccessEndpointAvailableZonesResponse
   */
  async listNetworkAccessEndpointAvailableZones(request: ListNetworkAccessEndpointAvailableZonesRequest): Promise<ListNetworkAccessEndpointAvailableZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNetworkAccessEndpointAvailableZonesWithOptions(request, runtime);
  }

  /**
   * @summary 列表查询专属网络端点。
   *
   * @param request ListNetworkAccessEndpointsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListNetworkAccessEndpointsResponse
   */
  async listNetworkAccessEndpointsWithOptions(request: ListNetworkAccessEndpointsRequest, runtime: $Util.RuntimeOptions): Promise<ListNetworkAccessEndpointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.networkAccessEndpointStatus)) {
      query["NetworkAccessEndpointStatus"] = request.networkAccessEndpointStatus;
    }

    if (!Util.isUnset(request.networkAccessEndpointType)) {
      query["NetworkAccessEndpointType"] = request.networkAccessEndpointType;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vpcRegionId)) {
      query["VpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNetworkAccessEndpoints",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNetworkAccessEndpointsResponse>(await this.callApi(params, req, runtime), new ListNetworkAccessEndpointsResponse({}));
  }

  /**
   * @summary 列表查询专属网络端点。
   *
   * @param request ListNetworkAccessEndpointsRequest
   * @return ListNetworkAccessEndpointsResponse
   */
  async listNetworkAccessEndpoints(request: ListNetworkAccessEndpointsRequest): Promise<ListNetworkAccessEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNetworkAccessEndpointsWithOptions(request, runtime);
  }

  /**
   * @summary 列表某个网络访问端点下的访问路径。
   *
   * @param request ListNetworkAccessPathsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListNetworkAccessPathsResponse
   */
  async listNetworkAccessPathsWithOptions(request: ListNetworkAccessPathsRequest, runtime: $Util.RuntimeOptions): Promise<ListNetworkAccessPathsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNetworkAccessPaths",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNetworkAccessPathsResponse>(await this.callApi(params, req, runtime), new ListNetworkAccessPathsResponse({}));
  }

  /**
   * @summary 列表某个网络访问端点下的访问路径。
   *
   * @param request ListNetworkAccessPathsRequest
   * @return ListNetworkAccessPathsResponse
   */
  async listNetworkAccessPaths(request: ListNetworkAccessPathsRequest): Promise<ListNetworkAccessPathsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNetworkAccessPathsWithOptions(request, runtime);
  }

  /**
   * @summary 查询组织的所有父级路径
   *
   * @param request ListOrganizationalUnitParentsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListOrganizationalUnitParentsResponse
   */
  async listOrganizationalUnitParentsWithOptions(request: ListOrganizationalUnitParentsRequest, runtime: $Util.RuntimeOptions): Promise<ListOrganizationalUnitParentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOrganizationalUnitParents",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOrganizationalUnitParentsResponse>(await this.callApi(params, req, runtime), new ListOrganizationalUnitParentsResponse({}));
  }

  /**
   * @summary 查询组织的所有父级路径
   *
   * @param request ListOrganizationalUnitParentsRequest
   * @return ListOrganizationalUnitParentsResponse
   */
  async listOrganizationalUnitParents(request: ListOrganizationalUnitParentsRequest): Promise<ListOrganizationalUnitParentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrganizationalUnitParentsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information about organizational units in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   *
   * @param request ListOrganizationalUnitsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListOrganizationalUnitsResponse
   */
  async listOrganizationalUnitsWithOptions(request: ListOrganizationalUnitsRequest, runtime: $Util.RuntimeOptions): Promise<ListOrganizationalUnitsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!Util.isUnset(request.organizationalUnitName)) {
      query["OrganizationalUnitName"] = request.organizationalUnitName;
    }

    if (!Util.isUnset(request.organizationalUnitNameStartsWith)) {
      query["OrganizationalUnitNameStartsWith"] = request.organizationalUnitNameStartsWith;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new ListOrganizationalUnitsResponse({}));
  }

  /**
   * @summary Queries the information about organizational units in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   *
   * @param request ListOrganizationalUnitsRequest
   * @return ListOrganizationalUnitsResponse
   */
  async listOrganizationalUnits(request: ListOrganizationalUnitsRequest): Promise<ListOrganizationalUnitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * @summary Queries the organizations that are allowed to access an Employee Identity and Access Management (EIAM) application by page. The return result includes the IDs of the organizations. If you want to obtain the details of the organizations, call the GetOrganizationalUnit operation.
   *
   * @param request ListOrganizationalUnitsForApplicationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListOrganizationalUnitsForApplicationResponse
   */
  async listOrganizationalUnitsForApplicationWithOptions(request: ListOrganizationalUnitsForApplicationRequest, runtime: $Util.RuntimeOptions): Promise<ListOrganizationalUnitsForApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
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
      action: "ListOrganizationalUnitsForApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOrganizationalUnitsForApplicationResponse>(await this.callApi(params, req, runtime), new ListOrganizationalUnitsForApplicationResponse({}));
  }

  /**
   * @summary Queries the organizations that are allowed to access an Employee Identity and Access Management (EIAM) application by page. The return result includes the IDs of the organizations. If you want to obtain the details of the organizations, call the GetOrganizationalUnit operation.
   *
   * @param request ListOrganizationalUnitsForApplicationRequest
   * @return ListOrganizationalUnitsForApplicationResponse
   */
  async listOrganizationalUnitsForApplication(request: ListOrganizationalUnitsForApplicationRequest): Promise<ListOrganizationalUnitsForApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrganizationalUnitsForApplicationWithOptions(request, runtime);
  }

  /**
   * @summary Queries the supported Alibaba Cloud regions.
   *
   * @param request ListRegionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListRegionsResponse
   */
  async listRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListRegions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
  }

  /**
   * @summary Queries the supported Alibaba Cloud regions.
   *
   * @return ListRegionsResponse
   */
  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  /**
   * @summary Queries the details of accounts in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   *
   * @param request ListUsersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListUsersResponse
   */
  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.displayNameStartsWith)) {
      query["DisplayNameStartsWith"] = request.displayNameStartsWith;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.phoneRegion)) {
      query["PhoneRegion"] = request.phoneRegion;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userExternalId)) {
      query["UserExternalId"] = request.userExternalId;
    }

    if (!Util.isUnset(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    if (!Util.isUnset(request.userSourceId)) {
      query["UserSourceId"] = request.userSourceId;
    }

    if (!Util.isUnset(request.userSourceType)) {
      query["UserSourceType"] = request.userSourceType;
    }

    if (!Util.isUnset(request.usernameStartsWith)) {
      query["UsernameStartsWith"] = request.usernameStartsWith;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2021-12-01",
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

  /**
   * @summary Queries the details of accounts in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   *
   * @param request ListUsersRequest
   * @return ListUsersResponse
   */
  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * @summary Queries the accounts that are allowed to access an Employee Identity and Access Management (EIAM) application. The return results include the IDs of the accounts. If you need to obtain the details of the accounts, call the GetUser operation.
   *
   * @param request ListUsersForApplicationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListUsersForApplicationResponse
   */
  async listUsersForApplicationWithOptions(request: ListUsersForApplicationRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersForApplicationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsersForApplication",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUsersForApplicationResponse>(await this.callApi(params, req, runtime), new ListUsersForApplicationResponse({}));
  }

  /**
   * @summary Queries the accounts that are allowed to access an Employee Identity and Access Management (EIAM) application. The return results include the IDs of the accounts. If you need to obtain the details of the accounts, call the GetUser operation.
   *
   * @param request ListUsersForApplicationRequest
   * @return ListUsersForApplicationResponse
   */
  async listUsersForApplication(request: ListUsersForApplicationRequest): Promise<ListUsersForApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersForApplicationWithOptions(request, runtime);
  }

  /**
   * @summary Queries the information of accounts in an Employee Identity and Access Management (EIAM) group of Identity as a Service (IDaaS).
   *
   * @param request ListUsersForGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListUsersForGroupResponse
   */
  async listUsersForGroupWithOptions(request: ListUsersForGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersForGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsersForGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUsersForGroupResponse>(await this.callApi(params, req, runtime), new ListUsersForGroupResponse({}));
  }

  /**
   * @summary Queries the information of accounts in an Employee Identity and Access Management (EIAM) group of Identity as a Service (IDaaS).
   *
   * @param request ListUsersForGroupRequest
   * @return ListUsersForGroupResponse
   */
  async listUsersForGroup(request: ListUsersForGroupRequest): Promise<ListUsersForGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersForGroupWithOptions(request, runtime);
  }

  /**
   * @summary Queries a client key of an Employee Identity and Access Management (EIAM) application. The returned key secret is masked. If you want to query the key secret that is not masked, call the ListApplicationClientSecrets operation.
   *
   * @param request ObtainApplicationClientSecretRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ObtainApplicationClientSecretResponse
   */
  async obtainApplicationClientSecretWithOptions(request: ObtainApplicationClientSecretRequest, runtime: $Util.RuntimeOptions): Promise<ObtainApplicationClientSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ObtainApplicationClientSecret",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ObtainApplicationClientSecretResponse>(await this.callApi(params, req, runtime), new ObtainApplicationClientSecretResponse({}));
  }

  /**
   * @summary Queries a client key of an Employee Identity and Access Management (EIAM) application. The returned key secret is masked. If you want to query the key secret that is not masked, call the ListApplicationClientSecrets operation.
   *
   * @param request ObtainApplicationClientSecretRequest
   * @return ObtainApplicationClientSecretResponse
   */
  async obtainApplicationClientSecret(request: ObtainApplicationClientSecretRequest): Promise<ObtainApplicationClientSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.obtainApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * @summary 查看指定域名安全代理Token。
   *
   * @param request ObtainDomainProxyTokenRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ObtainDomainProxyTokenResponse
   */
  async obtainDomainProxyTokenWithOptions(request: ObtainDomainProxyTokenRequest, runtime: $Util.RuntimeOptions): Promise<ObtainDomainProxyTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.domainProxyTokenId)) {
      query["DomainProxyTokenId"] = request.domainProxyTokenId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ObtainDomainProxyToken",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ObtainDomainProxyTokenResponse>(await this.callApi(params, req, runtime), new ObtainDomainProxyTokenResponse({}));
  }

  /**
   * @summary 查看指定域名安全代理Token。
   *
   * @param request ObtainDomainProxyTokenRequest
   * @return ObtainDomainProxyTokenResponse
   */
  async obtainDomainProxyToken(request: ObtainDomainProxyTokenRequest): Promise<ObtainDomainProxyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.obtainDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * @summary Removes an Employee Identity and Access Management (EIAM) account from multiple EIAM organizations of Identity as a Service (IDaaS). You cannot remove an account from a primary organization.
   *
   * @param request RemoveUserFromOrganizationalUnitsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RemoveUserFromOrganizationalUnitsResponse
   */
  async removeUserFromOrganizationalUnitsWithOptions(request: RemoveUserFromOrganizationalUnitsRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserFromOrganizationalUnitsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveUserFromOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveUserFromOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new RemoveUserFromOrganizationalUnitsResponse({}));
  }

  /**
   * @summary Removes an Employee Identity and Access Management (EIAM) account from multiple EIAM organizations of Identity as a Service (IDaaS). You cannot remove an account from a primary organization.
   *
   * @param request RemoveUserFromOrganizationalUnitsRequest
   * @return RemoveUserFromOrganizationalUnitsResponse
   */
  async removeUserFromOrganizationalUnits(request: RemoveUserFromOrganizationalUnitsRequest): Promise<RemoveUserFromOrganizationalUnitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * @summary Removes Employee Identity and Access Management (EIAM) accounts from an EIAM group of Identity as a Service (IDaaS).
   *
   * @param request RemoveUsersFromGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RemoveUsersFromGroupResponse
   */
  async removeUsersFromGroupWithOptions(request: RemoveUsersFromGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUsersFromGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveUsersFromGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveUsersFromGroupResponse>(await this.callApi(params, req, runtime), new RemoveUsersFromGroupResponse({}));
  }

  /**
   * @summary Removes Employee Identity and Access Management (EIAM) accounts from an EIAM group of Identity as a Service (IDaaS).
   *
   * @param request RemoveUsersFromGroupRequest
   * @return RemoveUsersFromGroupResponse
   */
  async removeUsersFromGroup(request: RemoveUsersFromGroupRequest): Promise<RemoveUsersFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUsersFromGroupWithOptions(request, runtime);
  }

  /**
   * @summary Revokes the permissions to access an application from multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   *
   * @param request RevokeApplicationFromGroupsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RevokeApplicationFromGroupsResponse
   */
  async revokeApplicationFromGroupsWithOptions(request: RevokeApplicationFromGroupsRequest, runtime: $Util.RuntimeOptions): Promise<RevokeApplicationFromGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeApplicationFromGroups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeApplicationFromGroupsResponse>(await this.callApi(params, req, runtime), new RevokeApplicationFromGroupsResponse({}));
  }

  /**
   * @summary Revokes the permissions to access an application from multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   *
   * @param request RevokeApplicationFromGroupsRequest
   * @return RevokeApplicationFromGroupsResponse
   */
  async revokeApplicationFromGroups(request: RevokeApplicationFromGroupsRequest): Promise<RevokeApplicationFromGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeApplicationFromGroupsWithOptions(request, runtime);
  }

  /**
   * @summary Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) organizations at a time.
   *
   * @param request RevokeApplicationFromOrganizationalUnitsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RevokeApplicationFromOrganizationalUnitsResponse
   */
  async revokeApplicationFromOrganizationalUnitsWithOptions(request: RevokeApplicationFromOrganizationalUnitsRequest, runtime: $Util.RuntimeOptions): Promise<RevokeApplicationFromOrganizationalUnitsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeApplicationFromOrganizationalUnits",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeApplicationFromOrganizationalUnitsResponse>(await this.callApi(params, req, runtime), new RevokeApplicationFromOrganizationalUnitsResponse({}));
  }

  /**
   * @summary Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) organizations at a time.
   *
   * @param request RevokeApplicationFromOrganizationalUnitsRequest
   * @return RevokeApplicationFromOrganizationalUnitsResponse
   */
  async revokeApplicationFromOrganizationalUnits(request: RevokeApplicationFromOrganizationalUnitsRequest): Promise<RevokeApplicationFromOrganizationalUnitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeApplicationFromOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * @summary Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) accounts at a time.
   *
   * @param request RevokeApplicationFromUsersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return RevokeApplicationFromUsersResponse
   */
  async revokeApplicationFromUsersWithOptions(request: RevokeApplicationFromUsersRequest, runtime: $Util.RuntimeOptions): Promise<RevokeApplicationFromUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeApplicationFromUsers",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeApplicationFromUsersResponse>(await this.callApi(params, req, runtime), new RevokeApplicationFromUsersResponse({}));
  }

  /**
   * @summary Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) accounts at a time.
   *
   * @param request RevokeApplicationFromUsersRequest
   * @return RevokeApplicationFromUsersResponse
   */
  async revokeApplicationFromUsers(request: RevokeApplicationFromUsersRequest): Promise<RevokeApplicationFromUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeApplicationFromUsersWithOptions(request, runtime);
  }

  /**
   * @summary Configures the permissions of the Developer API feature of an Employee Identity and Access Management (EIAM) application.
   *
   * @param request SetApplicationGrantScopeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetApplicationGrantScopeResponse
   */
  async setApplicationGrantScopeWithOptions(request: SetApplicationGrantScopeRequest, runtime: $Util.RuntimeOptions): Promise<SetApplicationGrantScopeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.grantScopes)) {
      query["GrantScopes"] = request.grantScopes;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetApplicationGrantScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetApplicationGrantScopeResponse>(await this.callApi(params, req, runtime), new SetApplicationGrantScopeResponse({}));
  }

  /**
   * @summary Configures the permissions of the Developer API feature of an Employee Identity and Access Management (EIAM) application.
   *
   * @param request SetApplicationGrantScopeRequest
   * @return SetApplicationGrantScopeResponse
   */
  async setApplicationGrantScope(request: SetApplicationGrantScopeRequest): Promise<SetApplicationGrantScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setApplicationGrantScopeWithOptions(request, runtime);
  }

  /**
   * @summary Configures the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request SetApplicationProvisioningConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetApplicationProvisioningConfigResponse
   */
  async setApplicationProvisioningConfigWithOptions(request: SetApplicationProvisioningConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetApplicationProvisioningConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.callbackProvisioningConfig)) {
      query["CallbackProvisioningConfig"] = request.callbackProvisioningConfig;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.provisionPassword)) {
      query["ProvisionPassword"] = request.provisionPassword;
    }

    if (!Util.isUnset(request.provisionProtocolType)) {
      query["ProvisionProtocolType"] = request.provisionProtocolType;
    }

    if (!Util.isUnset(request.scimProvisioningConfig)) {
      query["ScimProvisioningConfig"] = request.scimProvisioningConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetApplicationProvisioningConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetApplicationProvisioningConfigResponse>(await this.callApi(params, req, runtime), new SetApplicationProvisioningConfigResponse({}));
  }

  /**
   * @summary Configures the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @param request SetApplicationProvisioningConfigRequest
   * @return SetApplicationProvisioningConfigResponse
   */
  async setApplicationProvisioningConfig(request: SetApplicationProvisioningConfigRequest): Promise<SetApplicationProvisioningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setApplicationProvisioningConfigWithOptions(request, runtime);
  }

  /**
   * @summary Sets the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   *
   * @param request SetApplicationProvisioningScopeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetApplicationProvisioningScopeResponse
   */
  async setApplicationProvisioningScopeWithOptions(request: SetApplicationProvisioningScopeRequest, runtime: $Util.RuntimeOptions): Promise<SetApplicationProvisioningScopeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitIds)) {
      query["OrganizationalUnitIds"] = request.organizationalUnitIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetApplicationProvisioningScope",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetApplicationProvisioningScopeResponse>(await this.callApi(params, req, runtime), new SetApplicationProvisioningScopeResponse({}));
  }

  /**
   * @summary Sets the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   *
   * @param request SetApplicationProvisioningScopeRequest
   * @return SetApplicationProvisioningScopeResponse
   */
  async setApplicationProvisioningScope(request: SetApplicationProvisioningScopeRequest): Promise<SetApplicationProvisioningScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setApplicationProvisioningScopeWithOptions(request, runtime);
  }

  /**
   * @summary Specifies the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @description In IDaaS EIAM, the application management feature supports multiple SSO protocols for applications, including SAML 2.0 and OIDC protocols. Each application supports only one protocol, and the protocol cannot be changed after the application is created. You can specify the SSO configuration attributes of an application based on the supported SSO protocol.
   *
   * @param request SetApplicationSsoConfigRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetApplicationSsoConfigResponse
   */
  async setApplicationSsoConfigWithOptions(request: SetApplicationSsoConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetApplicationSsoConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.initLoginType)) {
      query["InitLoginType"] = request.initLoginType;
    }

    if (!Util.isUnset(request.initLoginUrl)) {
      query["InitLoginUrl"] = request.initLoginUrl;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.oidcSsoConfig)) {
      query["OidcSsoConfig"] = request.oidcSsoConfig;
    }

    if (!Util.isUnset(request.samlSsoConfig)) {
      query["SamlSsoConfig"] = request.samlSsoConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetApplicationSsoConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetApplicationSsoConfigResponse>(await this.callApi(params, req, runtime), new SetApplicationSsoConfigResponse({}));
  }

  /**
   * @summary Specifies the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   *
   * @description In IDaaS EIAM, the application management feature supports multiple SSO protocols for applications, including SAML 2.0 and OIDC protocols. Each application supports only one protocol, and the protocol cannot be changed after the application is created. You can specify the SSO configuration attributes of an application based on the supported SSO protocol.
   *
   * @param request SetApplicationSsoConfigRequest
   * @return SetApplicationSsoConfigResponse
   */
  async setApplicationSsoConfig(request: SetApplicationSsoConfigRequest): Promise<SetApplicationSsoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setApplicationSsoConfigWithOptions(request, runtime);
  }

  /**
   * @summary 设置默认域名。
   *
   * @param request SetDefaultDomainRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetDefaultDomainResponse
   */
  async setDefaultDomainWithOptions(request: SetDefaultDomainRequest, runtime: $Util.RuntimeOptions): Promise<SetDefaultDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainId)) {
      query["DomainId"] = request.domainId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDefaultDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDefaultDomainResponse>(await this.callApi(params, req, runtime), new SetDefaultDomainResponse({}));
  }

  /**
   * @summary 设置默认域名。
   *
   * @param request SetDefaultDomainRequest
   * @return SetDefaultDomainResponse
   */
  async setDefaultDomain(request: SetDefaultDomainRequest): Promise<SetDefaultDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultDomainWithOptions(request, runtime);
  }

  /**
   * @summary Configures a forgot password policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request SetForgetPasswordConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetForgetPasswordConfigurationResponse
   */
  async setForgetPasswordConfigurationWithOptions(request: SetForgetPasswordConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<SetForgetPasswordConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authenticationChannels)) {
      query["AuthenticationChannels"] = request.authenticationChannels;
    }

    if (!Util.isUnset(request.forgetPasswordStatus)) {
      query["ForgetPasswordStatus"] = request.forgetPasswordStatus;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetForgetPasswordConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetForgetPasswordConfigurationResponse>(await this.callApi(params, req, runtime), new SetForgetPasswordConfigurationResponse({}));
  }

  /**
   * @summary Configures a forgot password policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request SetForgetPasswordConfigurationRequest
   * @return SetForgetPasswordConfigurationResponse
   */
  async setForgetPasswordConfiguration(request: SetForgetPasswordConfigurationRequest): Promise<SetForgetPasswordConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setForgetPasswordConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Configures a password complexity policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request SetPasswordComplexityConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetPasswordComplexityConfigurationResponse
   */
  async setPasswordComplexityConfigurationWithOptions(request: SetPasswordComplexityConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<SetPasswordComplexityConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.passwordComplexityRules)) {
      query["PasswordComplexityRules"] = request.passwordComplexityRules;
    }

    if (!Util.isUnset(request.passwordMinLength)) {
      query["PasswordMinLength"] = request.passwordMinLength;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetPasswordComplexityConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetPasswordComplexityConfigurationResponse>(await this.callApi(params, req, runtime), new SetPasswordComplexityConfigurationResponse({}));
  }

  /**
   * @summary Configures a password complexity policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request SetPasswordComplexityConfigurationRequest
   * @return SetPasswordComplexityConfigurationResponse
   */
  async setPasswordComplexityConfiguration(request: SetPasswordComplexityConfigurationRequest): Promise<SetPasswordComplexityConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPasswordComplexityConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Configures a password expiration policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request SetPasswordExpirationConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetPasswordExpirationConfigurationResponse
   */
  async setPasswordExpirationConfigurationWithOptions(request: SetPasswordExpirationConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<SetPasswordExpirationConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.passwordExpirationAction)) {
      query["PasswordExpirationAction"] = request.passwordExpirationAction;
    }

    if (!Util.isUnset(request.passwordExpirationNotificationChannels)) {
      query["PasswordExpirationNotificationChannels"] = request.passwordExpirationNotificationChannels;
    }

    if (!Util.isUnset(request.passwordExpirationNotificationDuration)) {
      query["PasswordExpirationNotificationDuration"] = request.passwordExpirationNotificationDuration;
    }

    if (!Util.isUnset(request.passwordExpirationNotificationStatus)) {
      query["PasswordExpirationNotificationStatus"] = request.passwordExpirationNotificationStatus;
    }

    if (!Util.isUnset(request.passwordExpirationStatus)) {
      query["PasswordExpirationStatus"] = request.passwordExpirationStatus;
    }

    if (!Util.isUnset(request.passwordForcedUpdateDuration)) {
      query["PasswordForcedUpdateDuration"] = request.passwordForcedUpdateDuration;
    }

    if (!Util.isUnset(request.passwordValidMaxDay)) {
      query["PasswordValidMaxDay"] = request.passwordValidMaxDay;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetPasswordExpirationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetPasswordExpirationConfigurationResponse>(await this.callApi(params, req, runtime), new SetPasswordExpirationConfigurationResponse({}));
  }

  /**
   * @summary Configures a password expiration policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request SetPasswordExpirationConfigurationRequest
   * @return SetPasswordExpirationConfigurationResponse
   */
  async setPasswordExpirationConfiguration(request: SetPasswordExpirationConfigurationRequest): Promise<SetPasswordExpirationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPasswordExpirationConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Configures a password history policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request SetPasswordHistoryConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetPasswordHistoryConfigurationResponse
   */
  async setPasswordHistoryConfigurationWithOptions(request: SetPasswordHistoryConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<SetPasswordHistoryConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.passwordHistoryMaxRetention)) {
      query["PasswordHistoryMaxRetention"] = request.passwordHistoryMaxRetention;
    }

    if (!Util.isUnset(request.passwordHistoryStatus)) {
      query["PasswordHistoryStatus"] = request.passwordHistoryStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetPasswordHistoryConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetPasswordHistoryConfigurationResponse>(await this.callApi(params, req, runtime), new SetPasswordHistoryConfigurationResponse({}));
  }

  /**
   * @summary Configures a password history policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request SetPasswordHistoryConfigurationRequest
   * @return SetPasswordHistoryConfigurationResponse
   */
  async setPasswordHistoryConfiguration(request: SetPasswordHistoryConfigurationRequest): Promise<SetPasswordHistoryConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPasswordHistoryConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Sets the password initialization configurations for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request SetPasswordInitializationConfigurationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetPasswordInitializationConfigurationResponse
   */
  async setPasswordInitializationConfigurationWithOptions(request: SetPasswordInitializationConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<SetPasswordInitializationConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.passwordForcedUpdateStatus)) {
      query["PasswordForcedUpdateStatus"] = request.passwordForcedUpdateStatus;
    }

    if (!Util.isUnset(request.passwordInitializationNotificationChannels)) {
      query["PasswordInitializationNotificationChannels"] = request.passwordInitializationNotificationChannels;
    }

    if (!Util.isUnset(request.passwordInitializationStatus)) {
      query["PasswordInitializationStatus"] = request.passwordInitializationStatus;
    }

    if (!Util.isUnset(request.passwordInitializationType)) {
      query["PasswordInitializationType"] = request.passwordInitializationType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetPasswordInitializationConfiguration",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetPasswordInitializationConfigurationResponse>(await this.callApi(params, req, runtime), new SetPasswordInitializationConfigurationResponse({}));
  }

  /**
   * @summary Sets the password initialization configurations for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request SetPasswordInitializationConfigurationRequest
   * @return SetPasswordInitializationConfigurationResponse
   */
  async setPasswordInitializationConfiguration(request: SetPasswordInitializationConfigurationRequest): Promise<SetPasswordInitializationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPasswordInitializationConfigurationWithOptions(request, runtime);
  }

  /**
   * @summary Updates the primary organizational unit to which an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account belongs. This account will be removed from the previous primary organizational unit and added to the new primary organization.
   *
   * @param request SetUserPrimaryOrganizationalUnitRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetUserPrimaryOrganizationalUnitResponse
   */
  async setUserPrimaryOrganizationalUnitWithOptions(request: SetUserPrimaryOrganizationalUnitRequest, runtime: $Util.RuntimeOptions): Promise<SetUserPrimaryOrganizationalUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetUserPrimaryOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetUserPrimaryOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new SetUserPrimaryOrganizationalUnitResponse({}));
  }

  /**
   * @summary Updates the primary organizational unit to which an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account belongs. This account will be removed from the previous primary organizational unit and added to the new primary organization.
   *
   * @param request SetUserPrimaryOrganizationalUnitRequest
   * @return SetUserPrimaryOrganizationalUnitResponse
   */
  async setUserPrimaryOrganizationalUnit(request: SetUserPrimaryOrganizationalUnitRequest): Promise<SetUserPrimaryOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setUserPrimaryOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * @summary Unlocks an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) that is locked.
   *
   * @param request UnlockUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UnlockUserResponse
   */
  async unlockUserWithOptions(request: UnlockUserRequest, runtime: $Util.RuntimeOptions): Promise<UnlockUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnlockUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnlockUserResponse>(await this.callApi(params, req, runtime), new UnlockUserResponse({}));
  }

  /**
   * @summary Unlocks an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) that is locked.
   *
   * @param request UnlockUserRequest
   * @return UnlockUserResponse
   */
  async unlockUser(request: UnlockUserRequest): Promise<UnlockUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockUserWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the authorization type of an Employee Identity and Access Management (EIAM) application.
   *
   * @param request UpdateApplicationAuthorizationTypeRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateApplicationAuthorizationTypeResponse
   */
  async updateApplicationAuthorizationTypeWithOptions(request: UpdateApplicationAuthorizationTypeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationAuthorizationTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.authorizationType)) {
      query["AuthorizationType"] = request.authorizationType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicationAuthorizationType",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationAuthorizationTypeResponse>(await this.callApi(params, req, runtime), new UpdateApplicationAuthorizationTypeResponse({}));
  }

  /**
   * @summary Modifies the authorization type of an Employee Identity and Access Management (EIAM) application.
   *
   * @param request UpdateApplicationAuthorizationTypeRequest
   * @return UpdateApplicationAuthorizationTypeResponse
   */
  async updateApplicationAuthorizationType(request: UpdateApplicationAuthorizationTypeRequest): Promise<UpdateApplicationAuthorizationTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationAuthorizationTypeWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the description of an Employee Identity and Access Management (EIAM) application.
   *
   * @param request UpdateApplicationDescriptionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateApplicationDescriptionResponse
   */
  async updateApplicationDescriptionWithOptions(request: UpdateApplicationDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicationDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateApplicationDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateApplicationDescriptionResponse({}));
  }

  /**
   * @summary Modifies the description of an Employee Identity and Access Management (EIAM) application.
   *
   * @param request UpdateApplicationDescriptionRequest
   * @return UpdateApplicationDescriptionResponse
   */
  async updateApplicationDescription(request: UpdateApplicationDescriptionRequest): Promise<UpdateApplicationDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationDescriptionWithOptions(request, runtime);
  }

  /**
   * @summary Updates the information about an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the information is empty, the information is not updated by default.
   *
   * @param request UpdateGroupRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateGroupResponse
   */
  async updateGroupWithOptions(request: UpdateGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupExternalId)) {
      query["GroupExternalId"] = request.groupExternalId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGroupResponse>(await this.callApi(params, req, runtime), new UpdateGroupResponse({}));
  }

  /**
   * @summary Updates the information about an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the information is empty, the information is not updated by default.
   *
   * @param request UpdateGroupRequest
   * @return UpdateGroupResponse
   */
  async updateGroup(request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

  /**
   * @summary Updates the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account group.
   *
   * @param request UpdateGroupDescriptionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateGroupDescriptionResponse
   */
  async updateGroupDescriptionWithOptions(request: UpdateGroupDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateGroupDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
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
      action: "UpdateGroupDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateGroupDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateGroupDescriptionResponse({}));
  }

  /**
   * @summary Updates the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account group.
   *
   * @param request UpdateGroupDescriptionRequest
   * @return UpdateGroupDescriptionResponse
   */
  async updateGroupDescription(request: UpdateGroupDescriptionRequest): Promise<UpdateGroupDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupDescriptionWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the description of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request UpdateInstanceDescriptionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateInstanceDescriptionResponse
   */
  async updateInstanceDescriptionWithOptions(request: UpdateInstanceDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateInstanceDescriptionResponse({}));
  }

  /**
   * @summary Modifies the description of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   *
   * @param request UpdateInstanceDescriptionRequest
   * @return UpdateInstanceDescriptionResponse
   */
  async updateInstanceDescription(request: UpdateInstanceDescriptionRequest): Promise<UpdateInstanceDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * @summary 更新一个专属网络端点的名称。
   *
   * @param request UpdateNetworkAccessEndpointNameRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateNetworkAccessEndpointNameResponse
   */
  async updateNetworkAccessEndpointNameWithOptions(request: UpdateNetworkAccessEndpointNameRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNetworkAccessEndpointNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.networkAccessEndpointId)) {
      query["NetworkAccessEndpointId"] = request.networkAccessEndpointId;
    }

    if (!Util.isUnset(request.networkAccessEndpointName)) {
      query["NetworkAccessEndpointName"] = request.networkAccessEndpointName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNetworkAccessEndpointName",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNetworkAccessEndpointNameResponse>(await this.callApi(params, req, runtime), new UpdateNetworkAccessEndpointNameResponse({}));
  }

  /**
   * @summary 更新一个专属网络端点的名称。
   *
   * @param request UpdateNetworkAccessEndpointNameRequest
   * @return UpdateNetworkAccessEndpointNameResponse
   */
  async updateNetworkAccessEndpointName(request: UpdateNetworkAccessEndpointNameRequest): Promise<UpdateNetworkAccessEndpointNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNetworkAccessEndpointNameWithOptions(request, runtime);
  }

  /**
   * @summary Updates the basic information about an Employee Identity and Access Management (EIAM) organization. The basic information about the organization is not updated by default if no parameter is specified.
   *
   * @param request UpdateOrganizationalUnitRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateOrganizationalUnitResponse
   */
  async updateOrganizationalUnitWithOptions(request: UpdateOrganizationalUnitRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOrganizationalUnitResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!Util.isUnset(request.organizationalUnitName)) {
      query["OrganizationalUnitName"] = request.organizationalUnitName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOrganizationalUnit",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateOrganizationalUnitResponse>(await this.callApi(params, req, runtime), new UpdateOrganizationalUnitResponse({}));
  }

  /**
   * @summary Updates the basic information about an Employee Identity and Access Management (EIAM) organization. The basic information about the organization is not updated by default if no parameter is specified.
   *
   * @param request UpdateOrganizationalUnitRequest
   * @return UpdateOrganizationalUnitResponse
   */
  async updateOrganizationalUnit(request: UpdateOrganizationalUnitRequest): Promise<UpdateOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the description of an Employee Identity and Access Management (EIAM) organization.
   *
   * @param request UpdateOrganizationalUnitDescriptionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateOrganizationalUnitDescriptionResponse
   */
  async updateOrganizationalUnitDescriptionWithOptions(request: UpdateOrganizationalUnitDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOrganizationalUnitDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOrganizationalUnitDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateOrganizationalUnitDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateOrganizationalUnitDescriptionResponse({}));
  }

  /**
   * @summary Modifies the description of an Employee Identity and Access Management (EIAM) organization.
   *
   * @param request UpdateOrganizationalUnitDescriptionRequest
   * @return UpdateOrganizationalUnitDescriptionResponse
   */
  async updateOrganizationalUnitDescription(request: UpdateOrganizationalUnitDescriptionRequest): Promise<UpdateOrganizationalUnitDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOrganizationalUnitDescriptionWithOptions(request, runtime);
  }

  /**
   * @summary Updates the parent organization ID of an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). In this case, the organization is moved from a parent node to a new node.
   *
   * @param request UpdateOrganizationalUnitParentIdRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateOrganizationalUnitParentIdResponse
   */
  async updateOrganizationalUnitParentIdWithOptions(request: UpdateOrganizationalUnitParentIdRequest, runtime: $Util.RuntimeOptions): Promise<UpdateOrganizationalUnitParentIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.organizationalUnitId)) {
      query["OrganizationalUnitId"] = request.organizationalUnitId;
    }

    if (!Util.isUnset(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateOrganizationalUnitParentId",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateOrganizationalUnitParentIdResponse>(await this.callApi(params, req, runtime), new UpdateOrganizationalUnitParentIdResponse({}));
  }

  /**
   * @summary Updates the parent organization ID of an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). In this case, the organization is moved from a parent node to a new node.
   *
   * @param request UpdateOrganizationalUnitParentIdRequest
   * @return UpdateOrganizationalUnitParentIdResponse
   */
  async updateOrganizationalUnitParentId(request: UpdateOrganizationalUnitParentIdRequest): Promise<UpdateOrganizationalUnitParentIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOrganizationalUnitParentIdWithOptions(request, runtime);
  }

  /**
   * @summary Updates the basic information about an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   *
   * @param request UpdateUserRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateUserResponse
   */
  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customFields)) {
      query["CustomFields"] = request.customFields;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.emailVerified)) {
      query["EmailVerified"] = request.emailVerified;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.phoneNumberVerified)) {
      query["PhoneNumberVerified"] = request.phoneNumberVerified;
    }

    if (!Util.isUnset(request.phoneRegion)) {
      query["PhoneRegion"] = request.phoneRegion;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserResponse>(await this.callApi(params, req, runtime), new UpdateUserResponse({}));
  }

  /**
   * @summary Updates the basic information about an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   *
   * @param request UpdateUserRequest
   * @return UpdateUserResponse
   */
  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * @summary Modifies the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account.
   *
   * @param request UpdateUserDescriptionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateUserDescriptionResponse
   */
  async updateUserDescriptionWithOptions(request: UpdateUserDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateUserDescriptionResponse({}));
  }

  /**
   * @summary Modifies the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account.
   *
   * @param request UpdateUserDescriptionRequest
   * @return UpdateUserDescriptionResponse
   */
  async updateUserDescription(request: UpdateUserDescriptionRequest): Promise<UpdateUserDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserDescriptionWithOptions(request, runtime);
  }

  /**
   * @summary Updates the password information of an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The password must meet the requirements of the password policies that are configured in the IDaaS console.
   *
   * @param request UpdateUserPasswordRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateUserPasswordResponse
   */
  async updateUserPasswordWithOptions(request: UpdateUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.passwordForcedUpdateStatus)) {
      query["PasswordForcedUpdateStatus"] = request.passwordForcedUpdateStatus;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.userNotificationChannels)) {
      query["UserNotificationChannels"] = request.userNotificationChannels;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserPassword",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserPasswordResponse>(await this.callApi(params, req, runtime), new UpdateUserPasswordResponse({}));
  }

  /**
   * @summary Updates the password information of an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The password must meet the requirements of the password policies that are configured in the IDaaS console.
   *
   * @param request UpdateUserPasswordRequest
   * @return UpdateUserPasswordResponse
   */
  async updateUserPassword(request: UpdateUserPasswordRequest): Promise<UpdateUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserPasswordWithOptions(request, runtime);
  }

}
