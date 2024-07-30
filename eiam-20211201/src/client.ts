// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddUserToOrganizationalUnitsRequest extends $tea.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The organization IDs. You can add an account to a maximum of 100 organizations.
   * 
   * This parameter is required.
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The account IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * [ou_001]
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The group IDs. You can specify up to 100 group IDs at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * group_miu8e4t4d7i4u7uwezgr54xxxx
   */
  groupIds?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk2676xxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application on which you want to grant permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk2676xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the organizations to which you want to grant permissions. You can grant permissions to a maximum of 100 organizations at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application on which you want to grant permissions.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk2676xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the accounts to which you want to grant permissions. You can grant permissions to a maximum of 100 accounts at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The name of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * Ram Account SSO
   */
  applicationName?: string;
  /**
   * @remarks
   * The type of the application source. Valid values:
   * 
   * *   urn:alibaba:idaas:app:source:template: application template
   * *   urn:alibaba:idaas:app:source:standard: standard protocol
   * 
   * This parameter is required.
   * 
   * @example
   * urn:alibaba:idaas:app:source:standard
   */
  applicationSourceType?: string;
  /**
   * @remarks
   * The ID of the application template. This parameter is required if you set the ApplicationSourceType parameter to urn:alibaba:idaas:app:source:template.
   * 
   * @example
   * template_cloud_ram
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * RAM user SSO application
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk2676xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The URL of the application logo.
   * 
   * @example
   * https://oss.cn-hangzhou.aliyuncs.com/logo.png
   */
  logoUrl?: string;
  /**
   * @remarks
   * The SSO protocol. Valid values:
   * 
   * *   saml2: the SAML 2.0 protocol.
   * *   oidc: the OpenID Connect protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * saml2
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mnkom
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application for which you want to create a client key.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The information about the client key.
   */
  applicationClientSecret?: CreateApplicationClientSecretResponseBodyApplicationClientSecret;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * 域名。最大长度限制255，格式由数字、字母、横线（-）点（.）组成;
   * 
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * 备案信息参数。
   */
  filing?: CreateDomainRequestFiling;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * dm_mtohn6mltdz3ibtly2rxvnvxxx
   */
  domainId?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * pt_mtohn73423stghoivjmi4jwxxx
   */
  domainProxyTokenId?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The description of the group. The value can be up to 256 characters in length.
   * 
   * @example
   * this is a test.
   */
  description?: string;
  /**
   * @remarks
   * The external ID of the group, which can be used to associate the group with an external system. By default, the external ID is the group ID. The value can be up to 64 characters in length.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupExternalId?: string;
  /**
   * @remarks
   * The name of the group. The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * name_test
   */
  groupName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The description of the instance. The description can be up to 128 characters in length.
   * 
   * @example
   * instance_for_test
   */
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
  /**
   * @remarks
   * The ID of the instance that is created.
   * 
   * @example
   * idaas_wj5htncdvoc4q5xxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 专属网络端点名称。
   * 
   * This parameter is required.
   * 
   * @example
   * xx业务VPC访问端点
   */
  networkAccessEndpointName?: string;
  /**
   * @remarks
   * 专属网络端点连接的指定vSwitch。
   * 
   * @example
   * vsw-examplexxx
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * 专属网络端点连接的VpcID。
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-examplexxx
   */
  vpcId?: string;
  /**
   * @remarks
   * 专属网络端点连接的VpcID所属地域，该地域取值必须在ListNetworkAccessEndpointAvailableRegions接口中返回。
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * nae_examplexxxx
   */
  networkAccessEndpointId?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The description of the organization. The value can be up to 256 characters in length.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The external ID of the organization, which can be used to associate the organization with an external system. By default, the external ID is the organization ID. The value can be up to 64 characters in length.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitExternalId?: string;
  /**
   * @remarks
   * The name of the organization. The name can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test_ou_name
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
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
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The extended fields.
   * 
   * @example
   * description
   */
  customFields?: CreateUserRequestCustomFields[];
  /**
   * @remarks
   * The description of the organizational unit. The description can be up to 256 characters in length.
   * 
   * @example
   * description text
   */
  description?: string;
  /**
   * @remarks
   * The display name of the account. The display name can be up to 64 characters in length.
   * 
   * @example
   * name_001
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user who owns the account. The email address prefix can contain letters, digits, underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * Specifies whether the email address is a trusted email address. This parameter is required if the Email parameter is specified. If you have no special business requirements, set this parameter to true.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of organizational units to which the account belongs. An account can belong to multiple organizational units.
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * The password of the account. For more information, view the password policy of the instance in the IDaaS console.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * The configurations for password initialization.
   */
  passwordInitializationConfig?: CreateUserRequestPasswordInitializationConfig;
  /**
   * @remarks
   * The mobile phone number, which contains 6 to 15 digits.
   * 
   * @example
   * 12345678901
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Specifies whether the mobile phone number is a trusted mobile phone number. This parameter is required if the PhoneNumber parameter is specified. If you have no special business requirements, set this parameter to true.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The country code of the mobile phone number. The country code contains only digits and does not contain a plus sign (+).
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * The ID of the primary organizational unit to which the account belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  primaryOrganizationalUnitId?: string;
  /**
   * @remarks
   * The external ID of the account. The external ID can be used to associate the account with an external system. The external ID can be up to 64 characters in length. If you do not specify an external ID for the account, the ID of the account is used as the external ID by default.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * The name of the account. The name can be up to 64 characters in length and can contain letters, digits, underscores (_), periods (.), at signs (@), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * user_001
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The ID of the application that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application for which you want to delete a client key.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the client key that you want to delete for the application.
   * 
   * This parameter is required.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxx
   */
  domainId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名代理Token ID。
   * 
   * This parameter is required.
   * 
   * @example
   * pt_examplexxxx
   */
  domainProxyTokenId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the instance to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 专属网络端点ID。
   * 
   * This parameter is required.
   * 
   * @example
   * nae_examplexxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application that you want to disable.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application for which you want to disable a client key.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The client key ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * IDaaS的应用主键id
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * IDaaS EIAM的实例id
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名代理Token ID。
   * 
   * This parameter is required.
   * 
   * @example
   * pt_examplexxxx
   */
  domainProxyTokenId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application that you want to enable.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The client key ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * IDaaS的应用主键id
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * IDaaS EIAM的实例id
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名代理Token ID。
   * 
   * This parameter is required.
   * 
   * @example
   * pt_examplexxxx
   */
  domainProxyTokenId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The details of the application.
   */
  application?: GetApplicationResponseBodyApplication;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The permissions of the Developer API feature.
   */
  applicationGrantScope?: GetApplicationGrantScopeResponseBodyApplicationGrantScope;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The configuration of the account synchronization feature for the application.
   */
  applicationProvisioningConfig?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfig;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The scope of account synchronization.
   */
  applicationProvisioningScope?: GetApplicationProvisioningScopeResponseBodyApplicationProvisioningScope;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The SSO configuration information of the application.
   */
  applicationSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfig;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * 域名。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxx
   */
  domain?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The forgot password configurations.
   */
  openForgetPasswordConfiguration?: GetForgetPasswordConfigurationResponseBodyOpenForgetPasswordConfiguration;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The information about the account group.
   */
  group?: GetGroupResponseBodyGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The details of the instance.
   */
  instance?: GetInstanceResponseBodyInstance;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 专属网络端点ID。
   * 
   * This parameter is required.
   * 
   * @example
   * nae-examplexxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
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
  /**
   * @remarks
   * The data object of the organizational unit.
   */
  organizationalUnit?: GetOrganizationalUnitResponseBodyOrganizationalUnit;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The password complexity configurations.
   */
  passwordComplexityConfiguration?: GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfiguration;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The password expiration configurations.
   */
  passwordExpirationConfiguration?: GetPasswordExpirationConfigurationResponseBodyPasswordExpirationConfiguration;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The password history configurations.
   */
  passwordHistoryConfiguration?: GetPasswordHistoryConfigurationResponseBodyPasswordHistoryConfiguration;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The password initialization configurations.
   */
  passwordInitializationConfiguration?: GetPasswordInitializationConfigurationResponseBodyPasswordInitializationConfiguration;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The data object of the organizational unit.
   */
  organizationalUnit?: GetRootOrganizationalUnitResponseBodyOrganizationalUnit;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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

export class GetSynchronizationJobRequest extends $tea.Model {
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 同步任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * sync_0000347vjovtcf41li0fgsd98gn24q9njxxxxx
   */
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      synchronizationJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBody extends $tea.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  synchronizationJob?: GetSynchronizationJobResponseBodySynchronizationJob;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      synchronizationJob: 'SynchronizationJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      synchronizationJob: GetSynchronizationJobResponseBodySynchronizationJob,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSynchronizationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSynchronizationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The data object of the account.
   */
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
  /**
   * @remarks
   * The ID of the application that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The information about the client keys.
   */
  applicationClientSecrets?: ListApplicationClientSecretsResponseBodyApplicationClientSecrets[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
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
  /**
   * @remarks
   * The IDs of the applications.
   * 
   * @example
   * Ram Account SSO
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The name of the application. Only fuzzy match from the leftmost character is supported.
   * 
   * @example
   * Ram Account SSO
   */
  applicationName?: string;
  /**
   * @remarks
   * The authorization of the application. Valid values:
   * 
   * *   authorize_required: Only the user with explicit authorization can access the application.
   * *   default_all: By default, all users can access the application.
   * 
   * @example
   * authorize_required
   */
  authorizationType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   Enabled: The application is enabled.
   * *   Disabled: The application is disabled.
   * 
   * @example
   * enabled
   */
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
  /**
   * @remarks
   * The details of the applications.
   */
  applications?: ListApplicationsResponseBodyApplications[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the returned entries.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The IDs of the applications that the EIAM organization can access. You can query a maximum of 100 application IDs at a time.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the EIAM organization.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
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
   * 20
   */
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
  /**
   * @remarks
   * The applications that the EIAM organization can access.
   */
  applications?: ListApplicationsForOrganizationalUnitResponseBodyApplications[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the returned entries.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The IDs of the applications that the EIAM account can access. You can query a maximum of 100 application IDs at a time.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The query mode. Default value: **OnlyDirect**. Valid values:
   * 
   * *   OnlyDirect: Only the direct permissions are queried. Direct permissions are the permissions that are directly granted to the account.
   * *   IncludeInherit: Both the permissions that are directly granted to the account and the inherited permissions are queried. Inherited permissions are the permissions that an account inherits from the parent organization or the group to which the account belongs.
   * 
   * @example
   * OnlyDirect
   */
  queryMode?: string;
  /**
   * @remarks
   * The ID of the EIAM account.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The applications that the EIAM account can access.
   */
  applications?: ListApplicationsForUserResponseBodyApplications[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the returned entries.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * 实例ID列表，支持0到100个
   */
  instanceIds?: string[];
  /**
   * @remarks
   * 实例所属Region
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The external ID of the group.
   * 
   * @example
   * group_external_id
   */
  groupExternalId?: string;
  /**
   * @remarks
   * The group IDs.
   */
  groupIds?: string[];
  /**
   * @remarks
   * The name of the group. If you specify this parameter, the query is based on an exact match.
   * 
   * @example
   * name_test
   */
  groupName?: string;
  /**
   * @remarks
   * The prefix of the group name. If you specify this parameter, the query follows the leftmost matching principle.
   * 
   * @example
   * name
   */
  groupNameStartsWith?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
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
   * 20
   */
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
  /**
   * @remarks
   * The queried account groups.
   */
  groups?: ListGroupsResponseBodyGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned. The maximum number of entries returned at a time depends on the value of PageSize.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The group IDs. You can specify up to 100 group IDs at a time.
   * 
   * @example
   * group_miu8e4t4d7i4u7uwezgr54xxxx
   */
  groupIds?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
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
  /**
   * @remarks
   * The group IDs.
   */
  groups?: ListGroupsForApplicationResponseBodyGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The queried account groups.
   */
  groups?: ListGroupsForUserResponseBodyGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned. The maximum number of entries returned at a time depends on the value of PageSize.
   * 
   * @example
   * 1000
   */
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
  /**
   * @remarks
   * The list of instance IDs.
   */
  instanceIds?: string[];
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   creating
   * *   running
   * 
   * @example
   * running
   */
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
  /**
   * @remarks
   * The information of instances.
   */
  instances?: ListInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * 专属网络端点支持的地域
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 分页查询时每页行数。默认值为20，最大值为100。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 专属网络端点连接的状态。NetworkAccessEndpointType取值为shared时不生效。
   * 
   * @example
   * running
   */
  networkAccessEndpointStatus?: string;
  /**
   * @remarks
   * 专属网络端点连接的类型。取值可选范围：1. private - 专属网络端点；2. shared - 共享网络端点
   * 
   * @example
   * private
   */
  networkAccessEndpointType?: string;
  /**
   * @remarks
   * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * 专属网络端点连接的Vpc ID。NetworkAccessEndpointType取值为shared时不生效。
   * 
   * @example
   * vpc-examplexxx
   */
  vpcId?: string;
  /**
   * @remarks
   * 专属网络端点连接的Vpc所属地域，该地域取值必须在ListNetworkAccessEndpointAvailableRegions接口中返回。NetworkAccessEndpointType取值为shared时不生效。
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于下一次翻页查询。
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
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
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 专属网络端点ID。
   * 
   * This parameter is required.
   * 
   * @example
   * nae_examplexxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 组织ID。
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 组织ID列表。size限制最大100。
   * 
   * @example
   * [ou_wovwffm62xifdziem7an7xxxxx]
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * The name of the organizational unit.
   * 
   * @example
   * name_001
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * 组织名称，左匹配
   * 
   * @example
   * name
   */
  organizationalUnitNameStartsWith?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
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
  /**
   * @remarks
   * The list of data objects of organizational units.
   */
  organizationalUnits?: ListOrganizationalUnitsResponseBodyOrganizationalUnits[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries in the list.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The ID of the application that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the organizations that are allowed to access the application. You can query a maximum of 100 organization IDs at a time.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitIds?: string[];
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
   * 20
   */
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
  /**
   * @remarks
   * The IDs of the organizations that are allowed to access the application.
   */
  organizationalUnits?: ListOrganizationalUnitsForApplicationResponseBodyOrganizationalUnits[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the returned entries.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The supported regions.
   */
  regions?: ListRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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

export class ListSynchronizationJobsRequest extends $tea.Model {
  /**
   * @remarks
   * 同步方向[ingress,egress]
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * 同步结束时间
   * 
   * @example
   * 1649830226000
   */
  endTime?: number;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 分页查询时每页行数。默认值为20，最大值为100。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * 当前查询的列表页码，默认为1。
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 当前查询的列表页码，默认为20。
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 同步开始时间
   * 
   * @example
   * 1649830226000
   */
  startTime?: number;
  /**
   * @remarks
   * 同步状态[pending,running,suspending,failed,partial_success,success]
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * 同步目标ID
   * 
   * @example
   * target_001
   */
  targetIds?: string[];
  /**
   * @remarks
   * 同步目标类型[identity_provider,organizational_unit,application,user]
   * 
   * @example
   * identity_provider
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      targetIds: 'TargetIds',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      endTime: 'number',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      status: 'string',
      targetIds: { 'type': 'array', 'itemType': 'string' },
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBody extends $tea.Model {
  /**
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于下一次翻页查询。
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  synchronizationJobs?: ListSynchronizationJobsResponseBodySynchronizationJobs[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      synchronizationJobs: 'SynchronizationJobs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      synchronizationJobs: { 'type': 'array', 'itemType': ListSynchronizationJobsResponseBodySynchronizationJobs },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSynchronizationJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSynchronizationJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  /**
   * @remarks
   * 账户展示名，模糊匹配
   * 
   * @example
   * name_001
   */
  displayNameStartsWith?: string;
  /**
   * @remarks
   * The email address of the user who owns the account.
   * 
   * @example
   * user@example.com
   */
  email?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The mobile number of the user who owns the account.
   * 
   * @example
   * 156xxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The country code of the mobile number. For example, the country code of China is 86 without 00 or +.
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * The status of the account. Valid values:
   * 
   * *   enabled: The account is enabled.
   * *   disabled: The account is disabled.
   * 
   * @example
   * enable
   */
  status?: string;
  /**
   * @remarks
   * The external ID of the account. The external ID can be used by external data to map the data of the account in IDaaS EIAM.
   * 
   * For accounts with the same source type and source ID, each account has a unique external ID.
   * 
   * @example
   * id_wovwffm62xifdziem7an7xxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * 账户的ID集合
   */
  userIds?: string[];
  /**
   * @remarks
   * The source ID of the account.
   * 
   * If the account was created in IDaaS, its source ID is the ID of the IDaaS instance. If the account was imported, its source ID is the enterprise ID in the source. For example, if the account was imported from DingTalk, its source ID is the corpId value of the enterprise in DingTalk.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  userSourceId?: string;
  /**
   * @remarks
   * The source type of the account. Valid values:
   * 
   * *   build_in: The account was created in IDaaS.
   * *   ding_talk: The account was imported from DingTalk.
   * *   ad: The account was imported from Microsoft Active Directory (AD).
   * *   ldap: The account was imported from a Lightweight Directory Access Protocol (LDAP) service.
   * 
   * @example
   * build_in
   */
  userSourceType?: string;
  /**
   * @remarks
   * 账户名，左模糊匹配
   * 
   * @example
   * name_001
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries in the list.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of data objects of accounts.
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the accounts. You can query a maximum of 100 accounts at a time.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The IDs of the accounts.
   */
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
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The account IDs. A maximum of 100 accounts can be queried.
   * 
   * @example
   * [ou_001]
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned. The maximum number of entries that can be returned per page is specified by PageSize.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about accounts.
   */
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
  /**
   * @remarks
   * The ID of the application whose client key you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The client key ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
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
  /**
   * @remarks
   * The information about the client key.
   */
  applicationClientSecret?: ObtainApplicationClientSecretResponseBodyApplicationClientSecret;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名代理Token ID。
   * 
   * This parameter is required.
   * 
   * @example
   * pt_examplexxxx
   */
  domainProxyTokenId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The organization IDs. You can remove an account from a maximum of 100 organizations.
   * 
   * This parameter is required.
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The account IDs. A maximum of 100 accounts can be removed from a group.
   * 
   * This parameter is required.
   * 
   * @example
   * [ou_001]
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The group IDs. You can specify up to 100 group IDs at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * group_miu8e4t4d7i4u7uwezgr54xxxx
   */
  groupIds?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the organizations. You can revoke the access permissions from a maximum of 100 organizations at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the accounts. You can revoke the access permissions from a maximum of 100 accounts at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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

export class RunSynchronizationJobRequest extends $tea.Model {
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 同步目标ID
   * 
   * This parameter is required.
   * 
   * @example
   * idp_my664lwkhpicbyzirog3ngxxxxx
   */
  targetId?: string;
  /**
   * @remarks
   * 同步目标类型
   * 
   * This parameter is required.
   * 
   * @example
   * identity_provider
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSynchronizationJobResponseBody extends $tea.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @example
   * sync_0000347vjovtcf41li0fgsd98gn24q9nj9xxxxx
   */
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      synchronizationJobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSynchronizationJobResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RunSynchronizationJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RunSynchronizationJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetApplicationGrantScopeRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the application that you want to configure.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The permissions of the Developer API feature.
   */
  grantScopes?: string[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The configuration of event callback synchronization. This parameter is required when the ProvisionProtocolType parameter is set to idaas_callback.
   */
  callbackProvisioningConfig?: SetApplicationProvisioningConfigRequestCallbackProvisioningConfig;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to synchronize the password in IDaaS user event callbacks. Valid values:
   * 
   * *   true: synchronize the password.
   * *   false: do not synchronize the password.
   * 
   * @example
   * true
   */
  provisionPassword?: boolean;
  /**
   * @remarks
   * The synchronization protocol type of the application. Valid values:
   * 
   * *   idaas_callback: custom event callback protocol of IDaaS.
   * *   scim2: System for Cross-domain Identity Management (SCIM) protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_callback
   */
  provisionProtocolType?: string;
  /**
   * @remarks
   * The configuration of SCIM-based IDaaS synchronization. This parameter is required when the ProvisionProtocolType parameter is set to scim2.
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * 授权同步出的组列表
   */
  groupIds?: string[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of organizational units that are authorized for account synchronization.
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The initial SSO method. Valid values:
   * 
   * *   only_app_init_sso: Only application-initiated SSO is allowed. This method is selected by default when the SSO protocol of the application is an OIDC protocol. If this method is selected when the SSO protocol of the application is SAML, the InitLoginUrl parameter is required.
   * *   idaas_or_app_init_sso: IDaaS-initiated SSO and application-initiated SSO are allowed. This method is selected by default when the SSO protocol of the application is SAML. If this method is selected when the SSO protocol of the application is an OIDC protocol, the InitLoginUrl parameter is required.
   * 
   * @example
   * only_app_init_sso
   */
  initLoginType?: string;
  /**
   * @remarks
   * The initial webhook URL of SSO. This parameter is required when the SSO protocol of the application is an OIDC protocol and the InitLoginType parameters is set to idaas_or_app_init_sso or when the SSO protocol of the application is SAML and the InitLoginType parameter is set to only_app_init_sso.
   * 
   * @example
   * http://127.0.0.1:8000/start_login?enterprise_code=ABCDEF
   */
  initLoginUrl?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The Open ID Connect (OIDC)-based SSO configuration attributes of the application.
   */
  oidcSsoConfig?: SetApplicationSsoConfigRequestOidcSsoConfig;
  /**
   * @remarks
   * The Security Assertion Markup Language (SAML)-based SSO configuration attributes of the application.
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * 身份认证渠道。枚举取值:email(邮件)、sms(短信)
   * 
   * @example
   * email
   */
  authenticationChannels?: string[];
  /**
   * @remarks
   * 忘记密码配置状态。枚举取值:enabled(开启)、disabled(禁用)
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  forgetPasswordStatus?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eiam-111ccc1111
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The password complexity rules.
   */
  passwordComplexityRules?: SetPasswordComplexityConfigurationRequestPasswordComplexityRules[];
  /**
   * @remarks
   * The minimum number of characters in a password.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The action to take upon password expiration. This parameter must be specified when PasswordExpirationStatus is set to enabled. Valid values:
   * 
   * *   forbid_login: Users cannot log on to IDaaS.
   * *   force_update_password: Users must change the password.
   * *   remind_update_password: IDaaS reminds users to change the password upon each logon.
   * 
   * @example
   * force_update_password
   */
  passwordExpirationAction?: string;
  /**
   * @remarks
   * The methods for receiving password expiration notifications. This parameter must be specified when PasswordExpirationNotificationStatus is set to enabled.
   * 
   * @example
   * login
   */
  passwordExpirationNotificationChannels?: string[];
  /**
   * @remarks
   * The number of days before the expiration date during which password expiration notifications are sent. Unit: day. This parameter must be specified when PasswordExpirationNotificationStatus is set to enabled.
   * 
   * @example
   * 7
   */
  passwordExpirationNotificationDuration?: number;
  /**
   * @remarks
   * Specifies whether to enable the password expiration notification feature. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordExpirationNotificationStatus?: string;
  /**
   * @remarks
   * Specifies whether to enable the password expiration feature. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  passwordExpirationStatus?: string;
  /**
   * @remarks
   * The number of days before which users must change the password to prevent password expiration. Unit: day. You must set this parameter to a value greater than the value of PasswordExpirationNotificationDuration.
   * 
   * @example
   * 7
   */
  passwordForcedUpdateDuration?: number;
  /**
   * @remarks
   * The validity period of a password. Unit: day. This parameter must be specified when PasswordExpirationStatus is set to enabled.
   * 
   * @example
   * 180
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of recent passwords that can be retained. This parameter must be specified when PasswordHistoryStatus is set to enabled.
   * 
   * @example
   * 3
   */
  passwordHistoryMaxRetention?: number;
  /**
   * @remarks
   * Specifies whether to enable the password history feature. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable forcible password change upon first logon. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordForcedUpdateStatus?: string;
  /**
   * @remarks
   * The methods for receiving password initialization notifications.
   * 
   * @example
   * email
   */
  passwordInitializationNotificationChannels?: string[];
  /**
   * @remarks
   * Specifies whether to enable password initialization. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * This parameter is required.
   * 
   * @example
   * enabled
   */
  passwordInitializationStatus?: string;
  /**
   * @remarks
   * The password initialization method. This parameter is required when PasswordInitializationStatus is set to enabled. Set the value to random.
   * 
   * *   random: A randomly generated password is used.
   * 
   * @example
   * random
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the new primary organizational unit.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The authorization type of the application. Valid values:
   * 
   * *   authorize_required: Only the user with explicit authorization can access the application.
   * *   default_all: By default, all users can access the application.
   * 
   * This parameter is required.
   * 
   * @example
   * authorize_required
   */
  authorizationType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The ID of the application that you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * A demo application that is used for test.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk2676xxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The external ID of the group.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupExternalId?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * name_test
   */
  groupName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The description of the account group. The value can be up to 256 characters in length.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  description?: string;
  /**
   * @remarks
   * The ID of the account group.
   * 
   * This parameter is required.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The new description of the instance.
   * 
   * @example
   * 测试实例
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance whose description you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 专属网络端点ID。
   * 
   * This parameter is required.
   * 
   * @example
   * nae_examplexxxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * 专属网络端点名称。
   * 
   * This parameter is required.
   * 
   * @example
   * xx业务VPC访问端点
   */
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
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The name of the organization. The name can be up to 64 characters in length and must be unique in the same parent organization.
   * 
   * @example
   * ou_name
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The description of the organization. The value can be up to 256 characters in length.
   * 
   * @example
   * organizationalUnit_test
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The custom extended fields.
   */
  customFields?: UpdateUserRequestCustomFields[];
  /**
   * @remarks
   * The display name of the account. The display name can be up to 64 characters in length.
   * 
   * @example
   * test_name
   */
  displayName?: string;
  /**
   * @remarks
   * The email address. The prefix of the email address can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * example@example.com
   */
  email?: string;
  /**
   * @remarks
   * Specifies whether the email address is verified. This parameter must be specified if you specify Email. You can set this parameter to true if you have no special business requirements.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The mobile number. The mobile number must be 6 to 15 digits in length.
   * 
   * @example
   * 156xxxxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Specifies whether the mobile number is verified. This parameter must be specified if you specify PhoneNumber. You can set this parameter to true if you have no special business requirements.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The area code of the mobile number. For example, the area code of a mobile number in the Chinese mainland is 86 without 00 or the plus sign (+). This parameter must be specified if you specify PhoneNumber.
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The name of the account. The name can be up to 64 characters in length. It can contain letters, digits, and the following special characters: _ . @ -
   * 
   * @example
   * username_test
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The description of the account. The value can be up to 256 characters in length.
   * 
   * @example
   * this is a test.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The new password of the account. For more information about the password format, see the "Password Policies" topic.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to enable forcible password change upon first logon. Default value: disabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordForcedUpdateStatus?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The methods for receiving password notifications.
   * 
   * @example
   * sms
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
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
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client key secret of the application.
   * 
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The client key ID of the application.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
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
  /**
   * @remarks
   * 域名关联的备案号，长度最大限制64。
   * 
   * @example
   * 浙xx-xxxxxx
   */
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
  /**
   * @remarks
   * The name of the extended field. You must create the extended field in advance. To create an extended field, log on to the IDaaS console. In the left-side navigation pane, choose Accounts > Extended Fields, and then click Create Field on the Extended Fields page.
   * 
   * @example
   * age
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the extended field. The value follows the limits on the properties of the extended field.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * Specifies whether to forcibly change the password status. Default value: disabled. Valid values:
   * 
   * *   enabled: forcibly changes the password status.
   * *   disabled: does not forcibly change the password status.
   * 
   * @example
   * enabled
   */
  passwordForcedUpdateStatus?: string;
  /**
   * @remarks
   * The priority of the password initialization policy. By default, this parameter does not take effect. Valid values:
   * 
   * *   global: The password initialization policy globally takes effect.
   * *   custom: The password initialization policy takes effect based on custom settings.
   * 
   * @example
   * global
   */
  passwordInitializationPolicyPriority?: string;
  /**
   * @remarks
   * The password initialization method. Set the value to random,
   * 
   * *   which indicates that the password is randomly generated.
   * 
   * @example
   * random
   */
  passwordInitializationType?: string;
  /**
   * @remarks
   * The password notification methods.
   * 
   * @example
   * sms
   */
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
  /**
   * @remarks
   * The status of the Developer API feature. Valid values:
   * 
   * *   Enabled: The Developer API feature is enabled.
   * *   Disabled: The Developer API feature is disabled.
   * 
   * @example
   * disabled
   */
  apiInvokeStatus?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * SAML Application
   */
  applicationName?: string;
  /**
   * @remarks
   * The origin of the application. Valid values:
   * 
   * *   urn:alibaba:idaas:app:source:template: The application is created based on a template.
   * *   urn:alibaba:idaas: The application is created based on the standard protocol.
   * 
   * @example
   * urn:alibaba:idaas:app:source:template
   */
  applicationSourceType?: string;
  /**
   * @remarks
   * The ID of the template based on which the application is created. This parameter is returned only if the application is created based on a template.
   * 
   * @example
   * apt_rpa_tdsxxx
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The authorization type of the EIAM application. Valid values:
   * 
   * *   authorize_required: Only the user with explicit authorization can access the application.
   * *   default_all: By default, all users can access the application.
   * 
   * @example
   * authorize_required
   */
  authorizationType?: string;
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The time when the application was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * The application is applicable to the test environment.
   */
  description?: string;
  /**
   * @remarks
   * The features that are supported by the application. The value is a JSON array. Valid values:
   * 
   * *   sso: The application supports SSO.
   * *   provision: The application supports account synchronization.
   * *   api_invoke: The application supports custom APIs.
   * 
   * @example
   * ["sso", "provision"]
   */
  features?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The URL of the application icon.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01lvYwpv1aGowQXDML9_!!6000000003303-0-tps-580-580.jpg
   */
  logoUrl?: string;
  /**
   * @remarks
   * The service code of the cloud service that manages the application template.
   * 
   * @example
   * rpa
   */
  managedServiceCode?: string;
  /**
   * @remarks
   * Indicates whether the application template is managed by a cloud service.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The type of the single sign-on (SSO) protocol. Valid values:
   * 
   * *   saml2: the Security Assertion Markup Language (SAML) 2.0 protocol.
   * *   oidc: the OpenID Connect (OIDC) protocol.
   * 
   * @example
   * saml2
   */
  ssoType?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   Enabled: The application is enabled.
   * *   Disabled: The application is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the application was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
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
  /**
   * @remarks
   * The permissions of the Developer API feature.
   */
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
  /**
   * @remarks
   * The URL that the application uses to receive IDaaS event callbacks.
   * 
   * @example
   * https://example.com/event/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The symmetric key for IDaaS event callbacks. The key is an AES-256 encryption key in the HEX format.
   * 
   * @example
   * 1adfdfdfd******111
   */
  encryptKey?: string;
  /**
   * @remarks
   * Indicates whether IDaaS event callback messages are encrypted. Valid values:
   * 
   * *   true: The messages are encrypted.
   * *   false: The messages are transmitted in plaintext.
   * 
   * @example
   * true
   */
  encryptRequired?: boolean;
  /**
   * @remarks
   * The list of types of IDaaS event callback messages that are supported by the listener.
   */
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
  /**
   * @remarks
   * The access token. This parameter is returned when the GrantType parameter is set to bearer_token.
   * 
   * @example
   * k52x2ru63rlkflina5utgkxxxx
   */
  accessToken?: string;
  /**
   * @remarks
   * The authentication mode of the SCIM protocol. Valid values:
   * 
   * *   client_secret_basic: The client secret is passed in the request header.
   * *   client_secret_post: The client secret is passed in the request body.
   * 
   * @example
   * client_secret_basic
   */
  authnMethod?: string;
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client secret of the application.
   * 
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The token endpoint.
   * 
   * @example
   * https://www.example.com/oauth/token
   */
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
  /**
   * @remarks
   * The authentication mode of the SCIM protocol. Valid value:
   * 
   * *   oauth2: OAuth2.0 mode.
   * 
   * @example
   * oauth2
   */
  authnMode?: string;
  /**
   * @remarks
   * The configuration parameters related to authorization.
   * 
   * *   If the GrantType parameter is set to client_credentials, the configuration parameters ClientId, ClientSecret, and AuthnMethod are returned.
   * *   If the GrantType parameter is set to bearer_token, the configuration parameter AccessToken is returned.
   */
  authnParam?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfigurationAuthnParam;
  /**
   * @remarks
   * The grant type of the SCIM protocol. Valid values:
   * 
   * *   client_credentials: client mode.
   * *   bearer_token: key mode.
   * 
   * @example
   * bearer_token
   */
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
  /**
   * @remarks
   * The configuration parameters related to SCIM-based synchronization.
   */
  authnConfiguration?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfigAuthnConfiguration;
  /**
   * @remarks
   * The full synchronization scope of the SCIM protocol. Valid value:
   * 
   * *   urn:alibaba:idaas:app:scim:User:PUSH: full account data synchronization.
   */
  fullPushScopes?: string[];
  /**
   * @remarks
   * The resource operations of the SCIM protocol. Valid values:
   * 
   * *   urn:alibaba:idaas:app:scim:User:CREATE: account creation.
   * *   urn:alibaba:idaas:app:scim:User:UPDATE: account update.
   * *   urn:alibaba:idaas:app:scim:User:DELETE: account deletion.
   */
  provisioningActions?: string[];
  /**
   * @remarks
   * The base URL that the application uses to receive the SCIM protocol for IDaaS synchronization.
   * 
   * @example
   * https://example.com/scim
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The configuration of the custom event callback protocol of IDaaS.
   */
  callbackProvisioningConfig?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigCallbackProvisioningConfig;
  /**
   * @remarks
   * The rendering mode of the account synchronization page. Valid values:
   * 
   * *   standard: standard mode
   * *   template: template mode
   * 
   * @example
   * standard
   */
  configOperateMode?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The public key endpoint for signature verification of the synchronization callback information.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk267xxxxx/app_mkv7rgt4d7i4u7zqtzev2mxxxx/provisioning/jwks
   */
  provisionJwksEndpoint?: string;
  /**
   * @remarks
   * Indicates whether the password is synchronized in IDaaS user event callbacks. Valid values:
   * 
   * *   true: The password is synchronized.
   * *   false: The password is not synchronized.
   * 
   * @example
   * true
   */
  provisionPassword?: boolean;
  /**
   * @remarks
   * The synchronization protocol type of the application. Valid values:
   * 
   * *   idaas_callback: custom event callback protocol of IDaaS.
   * *   scim2: System for Cross-domain Identity Management (SCIM) protocol.
   * 
   * @example
   * idaas_callback
   */
  provisionProtocolType?: string;
  /**
   * @remarks
   * The configuration of SCIM-based IDaaS synchronization.
   */
  scimProvisioningConfig?: GetApplicationProvisioningConfigResponseBodyApplicationProvisioningConfigScimProvisioningConfig;
  /**
   * @remarks
   * The status of the IDaaS account synchronization feature. Valid values:
   * 
   * *   enabled: The feature is enabled.
   * *   disabled: The feature is disabled.
   * 
   * @example
   * enabled
   */
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
  /**
   * @remarks
   * 同步授权的组列表
   */
  groupIds?: string[];
  /**
   * @remarks
   * 租户最大授权主体quota数量
   */
  maxQuota?: number;
  /**
   * @remarks
   * The list of organizational units that are authorized for account synchronization.
   */
  organizationalUnitIds?: string[];
  /**
   * @remarks
   * 已使用授权主体quota数量
   */
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
  /**
   * @remarks
   * The claim name.
   * 
   * @example
   * userOuIds
   */
  claimName?: string;
  /**
   * @remarks
   * The expression that is used to generate the value of the claim.
   * 
   * @example
   * ObjectToJsonString(user.organizationalUnits)
   */
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
  /**
   * @remarks
   * The validity period of the issued access token. Unit: seconds. Default value: 1200.
   * 
   * @example
   * 1200
   */
  accessTokenEffectiveTime?: number;
  /**
   * @remarks
   * The validity period of the issued code. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  codeEffectiveTime?: number;
  /**
   * @remarks
   * The custom claims that are returned for the ID token.
   */
  customClaims?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfigCustomClaims[];
  /**
   * @remarks
   * The scopes of user attributes that can be returned for the UserInfo endpoint or ID token.
   * 
   * @example
   * profile，email
   */
  grantScopes?: string[];
  /**
   * @remarks
   * The list of grant types that are supported for OIDC protocols.
   * 
   * @example
   * authorization_code
   */
  grantTypes?: string[];
  /**
   * @remarks
   * The validity period of the issued ID token. Unit: seconds. Default value: 300.
   * 
   * @example
   * 1200
   */
  idTokenEffectiveTime?: number;
  /**
   * @remarks
   * The ID of the identity authentication source in password mode. This parameter is returned only when the value of the GrantTypes parameter includes the password mode.
   * 
   * @example
   * ia_password
   */
  passwordAuthenticationSourceId?: string;
  /**
   * @remarks
   * Indicates whether time-based one-time password (TOTP) authentication is required in password mode. This parameter is returned only when the value of the GrantTypes parameter includes the password mode.
   * 
   * @example
   * true
   */
  passwordTotpMfaRequired?: boolean;
  /**
   * @remarks
   * The algorithms that are used to calculate the code challenge for PKCE.
   * 
   * @example
   * S256
   */
  pkceChallengeMethods?: string[];
  /**
   * @remarks
   * Indicates whether the SSO of the application requires Proof Key for Code Exchange (PKCE) (RFC 7636).
   * 
   * @example
   * true
   */
  pkceRequired?: boolean;
  /**
   * @remarks
   * The list of logout redirect URIs that are supported by the application.
   */
  postLogoutRedirectUris?: string[];
  /**
   * @remarks
   * The list of redirect URIs that are supported by the application.
   */
  redirectUris?: string[];
  /**
   * @remarks
   * The validity period of the issued refresh token. Unit: seconds. Default value: 86400.
   * 
   * @example
   * 86400
   */
  refreshTokenEffective?: number;
  /**
   * @remarks
   * The response types that are supported by the application. This parameter is returned when the value of the GrantTypes parameter includes the implicit mode.
   * 
   * @example
   * token id_token
   */
  responseTypes?: string[];
  /**
   * @remarks
   * The custom expression that is used to generate the subject ID returned for the ID token.
   * 
   * @example
   * user.userid
   */
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
  /**
   * @remarks
   * The OAuth2.0 authorization endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/login/app/app_mltta64q65enci54slingvvsgq/oauth2/authorize
   */
  oauth2AuthorizationEndpoint?: string;
  /**
   * @remarks
   * The OAuth2.0 device authorization endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/device/code
   */
  oauth2DeviceAuthorizationEndpoint?: string;
  /**
   * @remarks
   * The OAuth2.0 token revocation endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/revoke
   */
  oauth2RevokeEndpoint?: string;
  /**
   * @remarks
   * The OAuth2.0 token endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/token
   */
  oauth2TokenEndpoint?: string;
  /**
   * @remarks
   * The OIDC UserInfo endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oauth2/userinfo
   */
  oauth2UserinfoEndpoint?: string;
  /**
   * @remarks
   * The information about the OIDC issuer. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oidc
   */
  oidcIssuer?: string;
  /**
   * @remarks
   * The JSON Web Key Set (JWKS) URL of the OIDC issuer. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://eiam-api-cn-hangzhou.aliyuncs.com/v2/idaas_ue2jvisn35ea5lmthk2676rypm/app_mltta64q65enci54slingvvsgq/oidc/jwks
   */
  oidcJwksEndpoint?: string;
  /**
   * @remarks
   * The OIDC relying party (RP)-initiated logout endpoint. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/login/app/app_mltta64q65enci54slingvvsgq/oauth2/logout
   */
  oidcLogoutEndpoint?: string;
  /**
   * @remarks
   * The metadata URL of the SAML protocol. This parameter is returned only when the SSO protocol of the application is SAML 2.0.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/api/v2/app_mltuxdwd4lq4eer6tmtlmaxm5e/saml2/meta
   */
  samlMetaEndpoint?: string;
  /**
   * @remarks
   * The request receiving URL of the SAML protocol. This parameter is returned only when the SSO protocol of the application is SAML 2.0.
   * 
   * @example
   * https://l1seshcn.aliyunidaas.com/login/app/app_mltuxdwd4lq4eer6tmtlmaxm5e/saml2/sso
   */
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
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName
   */
  attributeName?: string;
  /**
   * @remarks
   * The expression that is used to generate the value of the attribute.
   * 
   * @example
   * user.username
   */
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
  /**
   * @remarks
   * assertion是否签名
   * 
   * @example
   * true
   */
  assertionSigned?: boolean;
  /**
   * @remarks
   * The additional user attributes in the SAML assertion.
   */
  attributeStatements?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfigAttributeStatements[];
  /**
   * @remarks
   * The default value of the RelayState attribute. If the SSO request is initiated in EIAM, the RelayState attribute in the SAML response is set to this default value.
   * 
   * @example
   * https://home.console.aliyun.com
   */
  defaultRelayState?: string;
  /**
   * @remarks
   * The Format attribute of the NameID element in the SAML assertion. Valid values:
   * 
   * *   urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified: No format is specified. How to resolve the NameID element depends on the application.
   * *   urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress: The NameID element must be an email address.
   * *   urn:oasis:names:tc:SAML:2.0:nameid-format:persistent: The NameID element must be persistent.
   * *   urn:oasis:names:tc:SAML:2.0:nameid-format:transient: The NameID element must be transient.
   * 
   * @example
   * urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified
   */
  nameIdFormat?: string;
  /**
   * @remarks
   * The expression that is used to generate the value of NameID in the SAML assertion.
   * 
   * @example
   * user.username
   */
  nameIdValueExpression?: string;
  /**
   * @remarks
   * response是否签名
   * 
   * @example
   * true
   */
  responseSigned?: boolean;
  /**
   * @remarks
   * The algorithm that is used to calculate the signature for the SAML assertion.
   * 
   * @example
   * RSA-SHA256
   */
  signatureAlgorithm?: string;
  /**
   * @remarks
   * The entity ID of the application in SAML. The application assumes the role of service provider.
   * 
   * @example
   * urn:alibaba:cloudcomputing
   */
  spEntityId?: string;
  /**
   * @remarks
   * The Assertion Consumer Service (ACS) URL of the application in SAML. The application assumes the role of service provider.
   * 
   * @example
   * https://signin.aliyun.com/saml-role/sso
   */
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
  /**
   * @remarks
   * The initial SSO method. Valid values:
   * 
   * *   only_app_init_sso: Only application-initiated SSO is allowed. This method is selected by default when the SSO protocol of the application is an OIDC protocol. If this method is selected when the SSO protocol of the application is SAML, the InitLoginUrl parameter is required.
   * *   idaas_or_app_init_sso: IDaaS-initiated SSO and application-initiated SSO are allowed. This method is selected by default when the SSO protocol of the application is SAML. If this method is selected when the SSO protocol of the application is an OIDC protocol, the InitLoginUrl parameter is required.
   * 
   * @example
   * only_app_init_sso
   */
  initLoginType?: string;
  /**
   * @remarks
   * The initial webhook URL of SSO. This parameter is required when the SSO protocol of the application is an OIDC protocol and the InitLoginType parameters is set to idaas_or_app_init_sso or when the SSO protocol of the application is SAML and the InitLoginType parameter is set to only_app_init_sso.
   * 
   * @example
   * http://127.0.0.1:8000/start_login?enterprise_code=ABCDEF
   */
  initLoginUrl?: string;
  /**
   * @remarks
   * The Open ID Connect (OIDC)-based SSO configuration attributes of the application. This parameter is returned only when the SSO protocol of the application is an OIDC protocol.
   */
  oidcSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigOidcSsoConfig;
  /**
   * @remarks
   * The configuration of the metadata endpoint provided by the application.
   */
  protocolEndpointDomain?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigProtocolEndpointDomain;
  /**
   * @remarks
   * The Security Assertion Markup Language (SAML)-based SSO configuration attributes of the application. This parameter is returned only when the SSO protocol of the application is SAML 2.0.
   */
  samlSsoConfig?: GetApplicationSsoConfigResponseBodyApplicationSsoConfigSamlSsoConfig;
  /**
   * @remarks
   * The SSO feature status of the application. Valid values:
   * 
   * *   enabled: The feature is enabled.
   * *   disabled: The feature is disabled.
   * 
   * @example
   * enabled
   */
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
  /**
   * @remarks
   * 域名关联的备案号, 长度最大限制64。
   */
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
  /**
   * @remarks
   * 域名创建时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * 是否默认域名。true表示实例默认域名，false表示非默认域名
   * 
   * @example
   * false
   */
  defaultDomain?: boolean;
  /**
   * @remarks
   * 域名。
   * 
   * @example
   * login.example.com
   */
  domain?: string;
  /**
   * @remarks
   * 域名ID。
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名类型。枚举取值:system_init(系统初始化)、user_custom(用户自定义)。
   * 
   * @example
   * system_init
   */
  domainType?: string;
  /**
   * @remarks
   * 域名备案信息。
   */
  filing?: GetDomainResponseBodyDomainFiling;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 域名锁定状态。枚举取值:unlock(正常)、lockByLicense(因License限制不可用)。
   * 
   * @example
   * unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * 域名最近更新时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
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
  /**
   * @remarks
   * DNS challenge名称。
   * 
   * @example
   * _idaas-challenge.${domain}
   */
  dnsChallengeName?: string;
  /**
   * @remarks
   * DNS challenge值。
   * 
   * @example
   * exmple123xxx
   */
  dnsChallengeValue?: string;
  /**
   * @remarks
   * DNS记录类型。
   * 
   * @example
   * 枚举，目前只支持TXT类型
   */
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
  /**
   * @remarks
   * 表示忘记密码认证渠道。枚举取值:email(邮件)、sms(短信)
   */
  authenticationChannels?: string[];
  /**
   * @remarks
   * Indicates whether the forgot password feature is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Indicates whether email authentication is enabled for the forgot password feature.
   * 
   * @example
   * true
   */
  enableEmail?: boolean;
  /**
   * @remarks
   * Indicates whether Short Message Service (SMS) authentication is enabled for the forgot password feature.
   * 
   * @example
   * true
   */
  enableSms?: boolean;
  /**
   * @remarks
   * 表示忘记密码配置状态。枚举取值:enabled(开启)、disabled(禁用)
   */
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
  /**
   * @remarks
   * The time at which the group was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the group.
   * 
   * @example
   * test_group
   */
  description?: string;
  /**
   * @remarks
   * The external ID of the group, which can be used to associate the group with an external system. By default, the external ID is the group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupExternalId?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * group_name
   */
  groupName?: string;
  /**
   * @remarks
   * The source ID of the group. By default, the source ID is the instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  groupSourceId?: string;
  /**
   * @remarks
   * The source type of the group. Only build_in may be returned, which indicates that the group was created in IDaaS.
   * 
   * *build_in:Create By Self.
   * 
   * @example
   * build_in
   */
  groupSourceType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time at which the group was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1652085686179
   */
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
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * example-xxx.aliyunidaas.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The status of the endpoint. Valid values:
   * 
   * *   resolved
   * *   unresolved
   * 
   * @example
   * resolved
   */
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
  /**
   * @remarks
   * The default domain of the instance.
   * 
   * @example
   * example-xxx.example.com
   */
  defaultDomain?: string;
  /**
   * @remarks
   * The init domain of the instance.
   * 
   * @example
   * example-xxx.aliyunidaas.com
   */
  initDomain?: string;
  /**
   * @remarks
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The time when the instance was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1550115455000
   */
  createTime?: number;
  /**
   * @remarks
   * The default endpoint of the instance.
   */
  defaultEndpoint?: GetInstanceResponseBodyInstanceDefaultEndpoint;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * test_description
   */
  description?: string;
  /**
   * @remarks
   * The default domain of the instance.
   */
  domainConfig?: GetInstanceResponseBodyInstanceDomainConfig;
  /**
   * @remarks
   * The outbound public CIDR blocks of the instance. For example, when you synchronize Active Directory (AD) accounts, the IDaaS EIAM instance accesses your AD service by using the outbound public CIDR blocks.
   */
  egressAddresses?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_abt3pfwojojcq323si6g5xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   creating
   * *   running
   * 
   * @example
   * running
   */
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
  /**
   * @remarks
   * 专属网络端点创建时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * 网络访问端私网出口IP地址列表。
   * 
   * @example
   * 172.168.x.x
   */
  egressPrivateIpAddresses?: string[];
  /**
   * @remarks
   * 网络访问端点公网出口IP地址段
   * 
   * @example
   * 8.xx.xx.xxx/27
   */
  egressPublicIpAddresses?: string[];
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 专属网络端点ID。
   * 
   * @example
   * nae_examplexxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * 专属网络端点名称。
   * 
   * @example
   * xx业务VPC访问端点
   */
  networkAccessEndpointName?: string;
  /**
   * @remarks
   * 专属网络端点连接的类型。
   * 
   * @example
   * private
   */
  networkAccessEndpointType?: string;
  /**
   * @remarks
   * 专属网络端点使用的安全组ID。
   * 
   * @example
   * sg-examplexxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * 专属网络端点状态。
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * 专属网络端点最近更新时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  /**
   * @remarks
   * 专属网络端点连接的指定vSwitch列表。
   * 
   * @example
   * vsw-examplexxx
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * 专属网络端点连接的VpcID。
   * 
   * @example
   * vpc-examplexxx
   */
  vpcId?: string;
  /**
   * @remarks
   * 专属网络端点连接的Vpc所属地域。
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The time when the organizational unit was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the organizational unit.
   * 
   * @example
   * Test organizational unit
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the node is a leaf node.
   * 
   * @example
   * false
   */
  leaf?: boolean;
  /**
   * @remarks
   * The external ID of the organizational unit. The external ID can be used by external data to map the data of the organizational unit in IDaaS EIAM. By default, the external ID is the organizational unit ID.
   * 
   * For organizational units with the same source type and source ID, each organizational unit has a unique external ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitExternalId?: string;
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * 组织名称。
   * 
   * @example
   * test_organizationalUnit_name
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * The source ID of the organizational unit.
   * 
   * If the organizational unit was created in IDaaS, its source ID is the ID of the IDaaS instance. If the organizational unit was imported, its source ID is the enterprise ID in the source. For example, if the organizational unit was imported from DingTalk, its source ID is the corpId value of the enterprise in DingTalk.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  organizationalUnitSourceId?: string;
  /**
   * @remarks
   * The source type of the organizational unit. Valid values:
   * 
   * *   build_in: The organizational unit was created in IDaaS.
   * *   ding_talk: The organizational unit was imported from DingTalk.
   * *   ad: The organizational unit was imported from Microsoft Active Directory (AD).
   * *   ldap: The organizational unit was imported from a Lightweight Directory Access Protocol (LDAP) service.
   * 
   * @example
   * build_in
   */
  organizationalUnitSourceType?: string;
  /**
   * @remarks
   * The ID of the parent organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  parentId?: string;
  /**
   * @remarks
   * The time when the organizational unit was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
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
  /**
   * @remarks
   * The type of the password check. Valid values:
   * 
   * *   inclusion_upper_case: The password must contain uppercase letters.
   * *   inclusion_lower_case: The password must contain lowercase letters.
   * *   inclusion_special_case: The password must contain one or more of the following special characters: @ % + \\ / \\" ! # $ ^ ? : , ( ) { } [ ] ~ - _ .
   * *   inclusion_number: The password must contain digits.
   * *   exclusion_username: The password cannot contain a username.
   * *   exclusion_email: The password cannot contain an email prefix.
   * *   exclusion_phone_number: The password cannot contain a mobile number.
   * *   exclusion_display_name: The password cannot contain a display name.
   * 
   * @example
   * inclusion_upper_case
   */
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
  /**
   * @remarks
   * The password complexity rules.
   */
  passwordComplexityRules?: GetPasswordComplexityConfigurationResponseBodyPasswordComplexityConfigurationPasswordComplexityRules[];
  /**
   * @remarks
   * The minimum number of characters in a password.
   * 
   * @example
   * 3
   */
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
  /**
   * @remarks
   * The action to take when a password expires. Valid values:
   * 
   * *   forbid_login: Prohibit the user from using the password to log on to IDaaS.
   * *   force_update_password: Force the user to change the password.
   * *   remind_update_password: Remind the user to change the password.
   * 
   * @example
   * forbid_login
   */
  passwordExpirationAction?: string;
  /**
   * @remarks
   * The methods for receiving password expiration notifications.
   * 
   * @example
   * login
   */
  passwordExpirationNotificationChannels?: string[];
  /**
   * @remarks
   * The number of days before the expiration date during which password expiration notifications are sent. Unit: day.
   * 
   * @example
   * 7
   */
  passwordExpirationNotificationDuration?: number;
  /**
   * @remarks
   * Indicates whether the password expiration notification feature is enabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordExpirationNotificationStatus?: string;
  /**
   * @remarks
   * Indicates whether the password expiration feature is enabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordExpirationStatus?: string;
  /**
   * @remarks
   * The number of days before which users must change the password to prevent password expiration. Unit: day.
   * 
   * @example
   * 3
   */
  passwordForcedUpdateDuration?: number;
  /**
   * @remarks
   * The validity period of a password. Unit: day.
   * 
   * @example
   * 180
   */
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
  /**
   * @remarks
   * The maximum number of recent passwords that are retained.
   * 
   * @example
   * 3
   */
  passwordHistoryMaxRetention?: number;
  /**
   * @remarks
   * Indicates whether the password history feature is enabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
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
  /**
   * @remarks
   * Indicates whether forcible password change upon first logon is enabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordForcedUpdateStatus?: string;
  /**
   * @remarks
   * The methods for receiving password initialization notifications.
   * 
   * @example
   * email
   */
  passwordInitializationNotificationChannels?: string[];
  /**
   * @remarks
   * Indicates whether the password initialization feature is enabled. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * @example
   * enabled
   */
  passwordInitializationStatus?: string;
  /**
   * @remarks
   * The password initialization method. Set the value to random.
   * 
   * *   random: A randomly generated password is used.
   * 
   * @example
   * random
   */
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
  /**
   * @remarks
   * The time when the organizational unit was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the organizational unit.
   * 
   * @example
   * Test organizational unit
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * name001
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * The time when the organizational unit was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
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

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsBinded extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsCreated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsDeleted extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsPushed extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsSame extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsUpdated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatistics extends $tea.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsDeleted;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsBinded,
      created: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsCreated,
      deleted: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsDeleted,
      pushed: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsPushed,
      same: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsSame,
      updated: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatisticsUpdated,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsBinded extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsCreated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsDeleted extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsPushed extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsSame extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsUpdated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatistics extends $tea.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsDeleted;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsBinded,
      created: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsCreated,
      deleted: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsDeleted,
      pushed: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsPushed,
      same: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsSame,
      updated: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatisticsUpdated,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsBinded extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsCreated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsDeleted extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsPushed extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsSame extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsUpdated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatistics extends $tea.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsDeleted;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsBinded,
      created: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsCreated,
      deleted: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsDeleted,
      pushed: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsPushed,
      same: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsSame,
      updated: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatisticsUpdated,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsBinded extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsCreated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsDeleted extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsPushed extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsSame extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsUpdated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 10
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 10
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 10
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResultUserStatistics extends $tea.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsDeleted;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsBinded,
      created: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsCreated,
      deleted: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsDeleted,
      pushed: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsPushed,
      same: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsSame,
      updated: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatisticsUpdated,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJobResult extends $tea.Model {
  /**
   * @remarks
   * 同步结果错误码
   * 
   * @example
   * ErrorCodeNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * 同步结果错误信息描述
   */
  errorMessage?: string;
  /**
   * @remarks
   * 组成员同步结果统计
   */
  groupMemberStatistics?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatistics;
  /**
   * @remarks
   * 组同步结果统计
   */
  groupStatistics?: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatistics;
  /**
   * @remarks
   * 组织同步结果统计
   */
  organizationalUnitStatistics?: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatistics;
  /**
   * @remarks
   * 用户同步结果统计
   */
  userStatistics?: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatistics;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      groupMemberStatistics: 'GroupMemberStatistics',
      groupStatistics: 'GroupStatistics',
      organizationalUnitStatistics: 'OrganizationalUnitStatistics',
      userStatistics: 'UserStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      groupMemberStatistics: GetSynchronizationJobResponseBodySynchronizationJobResultGroupMemberStatistics,
      groupStatistics: GetSynchronizationJobResponseBodySynchronizationJobResultGroupStatistics,
      organizationalUnitStatistics: GetSynchronizationJobResponseBodySynchronizationJobResultOrganizationalUnitStatistics,
      userStatistics: GetSynchronizationJobResponseBodySynchronizationJobResultUserStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizationJobResponseBodySynchronizationJob extends $tea.Model {
  /**
   * @remarks
   * 同步任务方向
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * 同步结束时间
   * 
   * @example
   * 1649830226000
   */
  endTime?: number;
  /**
   * @remarks
   * 同步任务结果
   */
  result?: GetSynchronizationJobResponseBodySynchronizationJobResult;
  /**
   * @remarks
   * 同步开始时间
   * 
   * @example
   * 1649830226000
   */
  startTime?: number;
  /**
   * @remarks
   * 同步任务状态
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * 同步任务ID
   * 
   * @example
   * sync_0000347vjovtcf41li0fgsd98gn24q9nj9xxxxx
   */
  synchronizationJobId?: string;
  /**
   * @remarks
   * 同步目标ID
   * 
   * @example
   * idp_my664lwkhpicbyzirog3nxxxxx
   */
  targetId?: string;
  /**
   * @remarks
   * 同步目标类型
   * 
   * @example
   * identity_provider
   */
  targetType?: string;
  /**
   * @remarks
   * 同步触发类型
   * 
   * @example
   * auto
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      endTime: 'EndTime',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
      synchronizationJobId: 'SynchronizationJobId',
      targetId: 'TargetId',
      targetType: 'TargetType',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      endTime: 'number',
      result: GetSynchronizationJobResponseBodySynchronizationJobResult,
      startTime: 'number',
      status: 'string',
      synchronizationJobId: 'string',
      targetId: 'string',
      targetType: 'string',
      triggerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyUserCustomFields extends $tea.Model {
  /**
   * @remarks
   * The identifier of the custom field.
   * 
   * @example
   * age
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the custom field.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The description of the organizational unit.
   * 
   * @example
   * this is a test.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the organizational unit.
   * 
   * @example
   * group_test_name
   */
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
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * The name of the organizational unit.
   * 
   * @example
   * test_ou_name
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * Indicates whether the organization is the primary organization.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The time when the account expires. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  accountExpireTime?: number;
  /**
   * @remarks
   * The time when the account was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The list of custom fields that describe the account.
   */
  customFields?: GetUserResponseBodyUserCustomFields[];
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * Test account
   */
  description?: string;
  /**
   * @remarks
   * The display name of the account.
   * 
   * @example
   * display_name001
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user who owns the account.
   * 
   * @example
   * user@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address has been verified. A value of true indicates that the email address has been verified by the user or has been set to the verified status by the administrator. A value of false indicates that the email address has not been verified.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
  /**
   * @remarks
   * The organizational units to which the account belongs.
   */
  groups?: GetUserResponseBodyUserGroups[];
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the account lock expires. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  lockExpireTime?: number;
  /**
   * @remarks
   * The organizational units to which the account belongs.
   */
  organizationalUnits?: GetUserResponseBodyUserOrganizationalUnits[];
  /**
   * @remarks
   * The time when the password of the account expires. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * *   If the value -1 is returned, the password does not expire.
   * *   If no value is returned, the password does not expire.
   * *   If a UNIX timestamp is returned, the password expires at the indicated point of time.
   * 
   * @example
   * 1652085686179
   */
  passwordExpireTime?: number;
  /**
   * @remarks
   * Indicates whether a password is set.
   * 
   * @example
   * false
   */
  passwordSet?: boolean;
  /**
   * @remarks
   * The mobile number of the user who owns the account.
   * 
   * @example
   * 156xxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Indicates whether the mobile number has been verified. A value of true indicates that the mobile number has been verified by the user or has been set to the verified status by the administrator. A value of false indicates that the mobile number has not been verified.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The country code of the mobile number. For example, the country code of China is 86 without 00 or +.
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @example
   * en-US
   */
  preferredLanguage?: string;
  /**
   * @remarks
   * The ID of the primary organizational unit to which the account belongs.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  primaryOrganizationalUnitId?: string;
  /**
   * @remarks
   * The time when the account was registered. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  registerTime?: number;
  /**
   * @remarks
   * The status of the account. Valid values:
   * 
   * *   enabled: The account is enabled.
   * *   disabled: The account is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the account was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  /**
   * @remarks
   * The external ID of the account. The external ID can be used by external data to map the data of the account in IDaaS EIAM. By default, the external ID is the account ID.
   * 
   * For accounts with the same source type and source ID, each account has a unique external ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The source ID of the account.
   * 
   * If the account was created in IDaaS, its source ID is the ID of the IDaaS instance. If the account was imported, its source ID is the enterprise ID in the source. For example, if the account was imported from DingTalk, its source ID is the corpId value of the enterprise in DingTalk.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  userSourceId?: string;
  /**
   * @remarks
   * The source type of the account. Valid values:
   * 
   * *   build_in: The account was created in IDaaS.
   * *   ding_talk: The account was imported from DingTalk.
   * *   ad: The account was imported from Microsoft Active Directory (AD).
   * *   ldap: The account was imported from a Lightweight Directory Access Protocol (LDAP) service.
   * 
   * @example
   * build_in
   */
  userSourceType?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * name001
   */
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
  /**
   * @remarks
   * The ID of the application that you want to query.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client key secret of the application. The value is not masked.
   * 
   * @example
   * eyJh*****************************************************************************************************OQ
   */
  clientSecret?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_wdziy4vnjt33ehhf7z2o2nxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the client key was last used. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * The client key ID of the application.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
  secretId?: string;
  /**
   * @remarks
   * The status of the client key. Valid values:
   * 
   * *   Enabled: The client key is enabled.
   * *   Disabled: The client key is disabled.
   * 
   * @example
   * enabled
   */
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
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * SAML Application
   */
  applicationName?: string;
  /**
   * @remarks
   * The origin of the application. Valid values:
   * 
   * *   urn:alibaba:idaas:app:source:template: The application is created based on a template.
   * *   urn:alibaba:idaas: The application is created based on the standard protocol.
   * 
   * @example
   * urn:alibaba:idaas:app:source:standard
   */
  applicationSourceType?: string;
  /**
   * @remarks
   * 应用模板ID
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The time when the application was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * A single application. The code is pkces.
   */
  description?: string;
  /**
   * @remarks
   * The features that are supported by the application. The value is a JSON array. Valid values:
   * 
   * *   sso: The application supports SSO.
   * *   provision: The application supports account synchronization.
   * *   api_invoke: The application supports custom APIs.
   * 
   * @example
   * ["sso", "provision"]
   */
  features?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The URL of the application icon.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i4/O1CN01lvYwpv1aGowQXDML9_!!6000000003303-0-tps-580-580.jpg
   */
  logoUrl?: string;
  /**
   * @remarks
   * The service code of the cloud service that manages the application template.
   * 
   * @example
   * rpa
   */
  managedServiceCode?: string;
  /**
   * @remarks
   * Indicates whether the application template is managed by a cloud service.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The type of the single sign-on (SSO) protocol. Valid values:
   * 
   * *   saml2: the Security Assertion Markup Language (SAML) 2.0 protocol.
   * *   oidc: the OpenID Connect (OIDC) protocol.
   * 
   * @example
   * saml2
   */
  ssoType?: string;
  /**
   * @remarks
   * The status of the application. Valid values:
   * 
   * *   Enabled: The application is enabled.
   * *   Disabled: The application is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the application was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
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
  /**
   * @remarks
   * The ID of the application that the EIAM organization can access.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
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
  /**
   * @remarks
   * The ID of the application that the EIAM account can access.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * Indicates whether the EIAM account has direct permissions on the application. Valid values:
   * 
   * *   true: The EIAM account has direct permissions on the application.
   * *   false: The EIAM account does not have direct permissions on the application.
   * 
   * @example
   * true
   */
  hasDirectAuthorization?: boolean;
  /**
   * @remarks
   * Indicates whether the EIAM account has inherited permissions on the application. Valid values:
   * 
   * *   true: A parent organization or an organization to which the EIAM account belongs has direct permissions on the application.
   * *   false: A parent organization or an organization to which the EIAM account belongs does not have direct permissions on the application.
   * 
   * @example
   * false
   */
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
  /**
   * @remarks
   * 域名代理Token创建时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * 域名ID。
   * 
   * @example
   * dm_examplexxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名代理Token。
   * 
   * @example
   * PTxxxxxxxx
   */
  domainProxyToken?: string;
  /**
   * @remarks
   * 域名代理Token ID。
   * 
   * @example
   * pt_examplexxxx
   */
  domainProxyTokenId?: string;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 域名代理Token最近使用时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * token状态，枚举类型：(enabled）启用,（disabled）禁用。
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * 域名代理Token最近更新时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
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
  /**
   * @remarks
   * 域名关联的备案号, 长度最大限制64。
   */
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
  /**
   * @remarks
   * 域名创建时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * 是否默认域名。true表示实例默认域名，false表示非默认域名
   * 
   * @example
   * false
   */
  defaultDomain?: boolean;
  /**
   * @remarks
   * 域名。
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * 域名ID。
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名类型。枚举取值:system_init(系统初始化)、user_custom(用户自定义)。
   * 
   * @example
   * system_init
   */
  domainType?: string;
  /**
   * @remarks
   * 域名备案信息。
   */
  filing?: ListDomainsResponseBodyDomainsFiling;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 域名锁定状态。枚举取值:unlock(正常)、lockByLicense(因License限制不可用)。
   * 
   * @example
   * unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * 域名最近更新时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
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
  /**
   * @remarks
   * 实例描述信息
   */
  description?: string;
  /**
   * @remarks
   * 实例developer私网域名地址
   * 
   * @example
   * eiam-developerapi-cn.vpc-proxy.aliyuncs.com
   */
  developerAPIPrivateDomain?: string;
  /**
   * @remarks
   * 实例developer公网域名地址
   * 
   * @example
   * eiam-developerapi.cn-hangzhou.aliyuncs.com
   */
  developerAPIPublicDomain?: string;
  /**
   * @remarks
   * 实例id
   * 
   * @example
   * idaas_eypq6ljgyeuwmlw672sulxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 实例状态，Pending(初始状态)、Creating(创建中)、Running(运行中)、Disabled(禁用)、CreateFailed(创建失败)
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * 实例版本，EIAM2.0/ EIAM1.0
   * 
   * @example
   * EIAM 2.0
   */
  instanceVersion?: string;
  /**
   * @remarks
   * 实例openApi私网域名地址
   * 
   * @example
   * eiam-cn.vpc-proxy.aliyuncs.com
   */
  openAPIPrivateDomain?: string;
  /**
   * @remarks
   * 实例openApi公网域名地址
   * 
   * @example
   * eiam.cn-hangzhou.aliyuncs.com
   */
  openAPIPublicDomain?: string;
  /**
   * @remarks
   * 实例域名地址
   * 
   * @example
   * xxxx.aliyunidaas.com
   */
  SSODomain?: string;
  /**
   * @remarks
   * 实例的创建时间
   * 
   * @example
   * 1677810869300
   */
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
  /**
   * @remarks
   * 地域名称
   * 
   * @example
   * 华东1（杭州）
   */
  localName?: string;
  /**
   * @remarks
   * 地域ID
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * The time at which the group was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the group.
   * 
   * @example
   * test group
   */
  description?: string;
  /**
   * @remarks
   * The external ID of the group, which can be used to associate the group with an external system. By default, the external ID is the group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupExternalId?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * group_name
   */
  groupName?: string;
  /**
   * @remarks
   * The source ID of the group. If the group was imported from other services, this value indicates the external source ID. By default, the source ID is the instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  groupSourceId?: string;
  /**
   * @remarks
   * The source type of the group. Only build_in may be returned, which indicates that the group was created in IDaaS.
   * 
   * @example
   * build_in
   */
  groupSourceType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time at which the group was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1652085686179
   */
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
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group_miu8e4t4d7i4u7uwezgr54xxxx
   */
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
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * group_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * example-xxx.aliyunidaas.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The status of the endpoint. Valid values:
   * 
   * *   resolved
   * *   unresolved
   * 
   * @example
   * resolved
   */
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
  /**
   * @remarks
   * The time when the instance was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1550115455000
   */
  createTime?: number;
  /**
   * @remarks
   * The default endpoint of the instance.
   */
  defaultEndpoint?: ListInstancesResponseBodyInstancesDefaultEndpoint;
  /**
   * @remarks
   * The description of the instance.
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_eypq6ljgyeuwmlw672sulxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   creating
   * *   running
   * 
   * @example
   * running
   */
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
  /**
   * @remarks
   * 地域名称。
   * 
   * @example
   * 华东1（杭州）
   */
  localName?: string;
  /**
   * @remarks
   * 地域ID。
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * 可用区名称。
   * 
   * @example
   * 华东1（杭州）可用区J
   */
  localName?: string;
  /**
   * @remarks
   * 可用区ID。
   * 
   * @example
   * cn-hangzhou-j
   */
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
  /**
   * @remarks
   * 专属网络端点创建时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 专属网络端点ID。
   * 
   * @example
   * nae_examplexxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * 专属网络端点名称。
   * 
   * @example
   * xx业务VPC访问端点
   */
  networkAccessEndpointName?: string;
  /**
   * @remarks
   * 专属网络端点连接的类型。
   * 
   * @example
   * private
   */
  networkAccessEndpointType?: string;
  /**
   * @remarks
   * 专属网络端点使用的安全组ID。
   * 
   * @example
   * sg-examplexxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * 专属网络端点状态。
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * 专属网络端点最近更新时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  /**
   * @remarks
   * 专属网络端点连接的指定vSwitch列表。
   * 
   * @example
   * vsw-examplexxx
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * 专属网络端点连接的VpcID。
   * 
   * @example
   * vpc-examplexxx
   */
  vpcId?: string;
  /**
   * @remarks
   * 专属网络端点连接的Vpc所属地域。
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @remarks
   * 专属网络端点访问路径创建时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 专属网络端点ID。
   * 
   * @example
   * nae_examplexxx
   */
  networkAccessEndpointId?: string;
  /**
   * @remarks
   * 专属网络端点访问路径ID。
   * 
   * @example
   * nap_examplexxx
   */
  networkAccessPathId?: string;
  /**
   * @remarks
   * 专属网络端点访问路径使用的ENI ID。
   * 
   * @example
   * eni-examplexxx
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * 专属网络端点访问路径使用的ENI私网地址。
   * 
   * @example
   * cn-hangzhou
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * 专属网络端点访问路径状态。
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * 专属网络端点访问路径最近更新时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  updateTime?: number;
  /**
   * @remarks
   * 专属网络端点访问路径的ENI归属的交换机ID。
   * 
   * @example
   * vsw-examplexxx
   */
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
  /**
   * @remarks
   * 组织ID
   * 
   * @example
   * ou_4lag76zc2km5ssg5vsmm2lznvu
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * 父组织ID
   * 
   * @example
   * ou_x3beoyepv2ls5iwuge3xhjkwbm
   */
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
  /**
   * @remarks
   * The time when the organizational unit was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the organizational unit.
   * 
   * @example
   * Test organizational unit
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the node is a leaf node.
   * 
   * @example
   * false
   */
  leaf?: boolean;
  /**
   * @remarks
   * The external ID of the organizational unit. The external ID can be used by external data to map the data of the organizational unit in IDaaS EIAM. By default, the external ID is the organizational unit ID.
   * 
   * For organizational units with the same source type and source ID, each organizational unit has a unique external ID.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitExternalId?: string;
  /**
   * @remarks
   * The ID of the organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * 组织名称。
   * 
   * @example
   * test_organizationalUnit_name
   */
  organizationalUnitName?: string;
  /**
   * @remarks
   * The source ID of the organizational unit.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  organizationalUnitSourceId?: string;
  /**
   * @remarks
   * The source type of the organizational unit. Valid values:
   * 
   * *   build_in: The organizational unit was created in IDaaS.
   * *   ding_talk: The organizational unit was imported from DingTalk.
   * *   ad: The organizational unit was imported from Microsoft Active Directory (AD).
   * *   ldap: The organizational unit was imported from a Lightweight Directory Access Protocol (LDAP) service.
   * 
   * @example
   * build_in
   */
  organizationalUnitSourceType?: string;
  /**
   * @remarks
   * The ID of the parent organizational unit.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
  parentId?: string;
  /**
   * @remarks
   * The time when the organizational unit was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
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
  /**
   * @remarks
   * The ID of the organization that is allowed to access the application.
   * 
   * @example
   * ou_wovwffm62xifdziem7an7xxxxx
   */
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
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * eiam.cn-hangzhou.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
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

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsBinded extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsCreated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsDeleted extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsPushed extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsSame extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsUpdated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatistics extends $tea.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsDeleted;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsBinded,
      created: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsCreated,
      deleted: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsDeleted,
      pushed: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsPushed,
      same: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsSame,
      updated: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatisticsUpdated,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsBinded extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsCreated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsDeleted extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsPushed extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsSame extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsUpdated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatistics extends $tea.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsDeleted;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsBinded,
      created: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsCreated,
      deleted: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsDeleted,
      pushed: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsPushed,
      same: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsSame,
      updated: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatisticsUpdated,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsBinded extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsCreated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsDeleted extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsPushed extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsSame extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsUpdated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatistics extends $tea.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsDeleted;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsBinded,
      created: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsCreated,
      deleted: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsDeleted,
      pushed: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsPushed,
      same: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsSame,
      updated: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatisticsUpdated,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsBinded extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsCreated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsDeleted extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsPushed extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsSame extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsUpdated extends $tea.Model {
  /**
   * @remarks
   * 失败数目
   * 
   * @example
   * 1
   */
  failed?: number;
  /**
   * @remarks
   * 跳过数目
   * 
   * @example
   * 1
   */
  skipped?: number;
  /**
   * @remarks
   * 成功数目
   * 
   * @example
   * 1
   */
  success?: number;
  /**
   * @remarks
   * 总共数目
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      skipped: 'Skipped',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      skipped: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatistics extends $tea.Model {
  /**
   * @remarks
   * 绑定结果统计
   */
  binded?: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsBinded;
  /**
   * @remarks
   * 创建结果统计
   */
  created?: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsCreated;
  /**
   * @remarks
   * 删除结果统计
   */
  deleted?: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsDeleted;
  /**
   * @remarks
   * 推送结果统计
   */
  pushed?: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsPushed;
  /**
   * @remarks
   * 相同结果统计
   */
  same?: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsSame;
  /**
   * @remarks
   * 更新结果统计
   */
  updated?: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsUpdated;
  static names(): { [key: string]: string } {
    return {
      binded: 'Binded',
      created: 'Created',
      deleted: 'Deleted',
      pushed: 'Pushed',
      same: 'Same',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binded: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsBinded,
      created: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsCreated,
      deleted: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsDeleted,
      pushed: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsPushed,
      same: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsSame,
      updated: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatisticsUpdated,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobsResult extends $tea.Model {
  /**
   * @remarks
   * 同步结果错误码
   * 
   * @example
   * ErrorCodeNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * 同步结果错误信息描述
   */
  errorMessage?: string;
  /**
   * @remarks
   * 组成员同步结果统计
   */
  groupMemberStatistics?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatistics;
  /**
   * @remarks
   * 组同步结果统计
   */
  groupStatistics?: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatistics;
  /**
   * @remarks
   * 组织同步结果统计
   */
  organizationalUnitStatistics?: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatistics;
  /**
   * @remarks
   * 用户同步结果统计
   */
  userStatistics?: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatistics;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      groupMemberStatistics: 'GroupMemberStatistics',
      groupStatistics: 'GroupStatistics',
      organizationalUnitStatistics: 'OrganizationalUnitStatistics',
      userStatistics: 'UserStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      groupMemberStatistics: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupMemberStatistics,
      groupStatistics: ListSynchronizationJobsResponseBodySynchronizationJobsResultGroupStatistics,
      organizationalUnitStatistics: ListSynchronizationJobsResponseBodySynchronizationJobsResultOrganizationalUnitStatistics,
      userStatistics: ListSynchronizationJobsResponseBodySynchronizationJobsResultUserStatistics,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSynchronizationJobsResponseBodySynchronizationJobs extends $tea.Model {
  /**
   * @remarks
   * 同步任务方向
   * 
   * @example
   * ingress
   */
  direction?: string;
  /**
   * @remarks
   * 同步结束时间
   * 
   * @example
   * 1649830226000
   */
  endTime?: number;
  /**
   * @remarks
   * 同步任务结果
   */
  result?: ListSynchronizationJobsResponseBodySynchronizationJobsResult;
  /**
   * @remarks
   * 同步开始时间
   * 
   * @example
   * 1649830226000
   */
  startTime?: number;
  /**
   * @remarks
   * 同步任务状态
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * 同步任务ID
   * 
   * @example
   * sync_0000347vjovtcf41li0fgsd98gn24q9njxxxxx
   */
  synchronizationJobId?: string;
  /**
   * @remarks
   * 同步目标ID
   * 
   * @example
   * idp_my664lwkhpicbyzirog3xxxxx
   */
  targetId?: string;
  /**
   * @remarks
   * 同步目标类型
   * 
   * @example
   * identity_provider
   */
  targetType?: string;
  /**
   * @remarks
   * 同步触发类型
   * 
   * @example
   * auto
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      endTime: 'EndTime',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
      synchronizationJobId: 'SynchronizationJobId',
      targetId: 'TargetId',
      targetType: 'TargetType',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      endTime: 'number',
      result: ListSynchronizationJobsResponseBodySynchronizationJobsResult,
      startTime: 'number',
      status: 'string',
      synchronizationJobId: 'string',
      targetId: 'string',
      targetType: 'string',
      triggerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $tea.Model {
  /**
   * @remarks
   * The time when the account expires. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  accountExpireTime?: number;
  /**
   * @remarks
   * The time when the account was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the account.
   * 
   * @example
   * Test account
   */
  description?: string;
  /**
   * @remarks
   * The display name of the account.
   * 
   * @example
   * display_name001
   */
  displayName?: string;
  /**
   * @remarks
   * The email address of the user who owns the account.
   * 
   * @example
   * user@example.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address has been verified. A value of true indicates that the email address has been verified by the user or has been set to the verified status by the administrator. A value of false indicates that the email address has not been verified.
   * 
   * @example
   * true
   */
  emailVerified?: boolean;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the account lock expires. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  lockExpireTime?: number;
  /**
   * @remarks
   * Time When Password Expires
   * 
   * @example
   * 1652085686179
   */
  passwordExpireTime?: number;
  /**
   * @remarks
   * Indicates whether a password is set.
   * 
   * @example
   * false
   */
  passwordSet?: boolean;
  /**
   * @remarks
   * The mobile number of the user who owns the account.
   * 
   * @example
   * 156xxxxxxx
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Indicates whether the mobile number has been verified. A value of true indicates that the mobile number has been verified by the user or has been set to the verified status by the administrator. A value of false indicates that the mobile number has not been verified.
   * 
   * @example
   * true
   */
  phoneNumberVerified?: boolean;
  /**
   * @remarks
   * The country code of the mobile number. For example, the country code of China is 86 without 00 or +.
   * 
   * @example
   * 86
   */
  phoneRegion?: string;
  /**
   * @remarks
   * The time when the account was registered. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  registerTime?: number;
  /**
   * @remarks
   * The status of the account. Valid values:
   * 
   * *   enabled: The account is enabled.
   * *   disabled: The account is disabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the account was last updated. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652085686179
   */
  updateTime?: number;
  /**
   * @remarks
   * The external ID of the account. The external ID can be used by external data to map the data of the account in IDaaS EIAM. By default, the external ID is the account ID.
   * 
   * For accounts with the same source type and source ID, each account has a unique external ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The source ID of the account.
   * 
   * If the account was created in IDaaS, its source ID is the ID of the IDaaS instance. If the account was imported, its source ID is the enterprise ID in the source. For example, if the account was imported from DingTalk, its source ID is the corpId value of the enterprise in DingTalk.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  userSourceId?: string;
  /**
   * @remarks
   * The source type of the account. Valid values:
   * 
   * *   build_in: The account was created in IDaaS.
   * *   ding_talk: The account was imported from DingTalk.
   * *   ad: The account was imported from Microsoft Active Directory (AD).
   * *   ldap: The account was imported from a Lightweight Directory Access Protocol (LDAP) service.
   * 
   * @example
   * build_in
   */
  userSourceType?: string;
  /**
   * @remarks
   * The username of the account.
   * 
   * @example
   * name001
   */
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
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
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
  /**
   * @remarks
   * The ID of the application whose client key you want to query.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client key secret of the application.
   * 
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the client key was last used. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1649830226000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * The client key ID of the application.
   * 
   * @example
   * sci_k52x2ru63rlkflina5utgkxxxx
   */
  secretId?: string;
  /**
   * @remarks
   * The status of the client key. Valid values:
   * 
   * *   Enabled: The client key is enabled.
   * *   Disabled: The client key is disabled.
   * 
   * @example
   * enabled
   */
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
  /**
   * @remarks
   * 域名代理Token创建时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  createTime?: number;
  /**
   * @remarks
   * 域名ID。
   * 
   * @example
   * dm_examplexxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名代理Token。
   * 
   * @example
   * PTxxxxxxxx
   */
  domainProxyToken?: string;
  /**
   * @remarks
   * 域名代理Token ID。
   * 
   * @example
   * pt_examplexxxx
   */
  domainProxyTokenId?: string;
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 域名代理Token最近使用时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
  lastUsedTime?: number;
  /**
   * @remarks
   * token状态，枚举类型：(enabled）启用,（disabled）禁用。
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * 域名代理Token最近更新时间，Unix时间戳格式，单位为毫秒。
   * 
   * @example
   * 1649830226000
   */
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
  /**
   * @remarks
   * The URL that the application uses to receive IDaaS event callbacks.
   * 
   * @example
   * https://example.com/event/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The symmetric key for IDaaS event callbacks. The key is an AES-256 encryption key in the HEX format.
   * 
   * @example
   * ad3b248**************************b3561a73d7
   */
  encryptKey?: string;
  /**
   * @remarks
   * Specifies whether to encrypt IDaaS event callback messages. Valid values:
   * 
   * *   true: encrypt the messages.
   * *   false: transmit the messages in plaintext.
   * 
   * @example
   * true
   */
  encryptRequired?: boolean;
  /**
   * @remarks
   * The list of types of IDaaS event callback messages that are supported by the listener.
   */
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
  /**
   * @remarks
   * The access token. If the GrantType parameter is set to bearer_token, you can set this parameter.
   * 
   * @example
   * k52x2ru63rlkflina5utgkxxxx
   */
  accessToken?: string;
  /**
   * @remarks
   * The authentication mode of the SCIM protocol. Valid values:
   * 
   * *   client_secret_basic: The client secret is passed in the request header.
   * *   client_secret_post: The client secret is passed in the request body.
   * 
   * @example
   * client_secret_basic
   */
  authnMethod?: string;
  /**
   * @remarks
   * The client ID of the application.
   * 
   * @example
   * mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientId?: string;
  /**
   * @remarks
   * The client secret of the application.
   * 
   * @example
   * CSEHDcHcrUKHw1CuxkJEHPveWRXBGqVqRsxxxx
   */
  clientSecret?: string;
  /**
   * @remarks
   * The token endpoint.
   * 
   * @example
   * https://www.example.com/oauth/token
   */
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
  /**
   * @remarks
   * The authentication mode of the SCIM protocol. Valid value:
   * 
   * *   oauth2: OAuth2.0 mode.
   * 
   * @example
   * oauth2
   */
  authnMode?: string;
  /**
   * @remarks
   * The configuration parameters related to authorization.
   * 
   * *   If the GrantType parameter is set to client_credentials, you can set the configuration parameters ClientId, ClientSecret, and AuthnMethod.
   * *   If the GrantType parameter is set to bearer_token, you can set the configuration parameter AccessToken.
   */
  authnParam?: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfigurationAuthnParam;
  /**
   * @remarks
   * The grant type of the SCIM protocol. Valid values:
   * 
   * *   client_credentials: client mode.
   * *   bearer_token: key mode.
   * 
   * @example
   * bearer_token
   */
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
  /**
   * @remarks
   * The configuration parameters related to SCIM-based synchronization.
   */
  authnConfiguration?: SetApplicationProvisioningConfigRequestScimProvisioningConfigAuthnConfiguration;
  /**
   * @remarks
   * The full synchronization scope of the SCIM protocol. Valid value:
   * 
   * *   urn:alibaba:idaas:app:scim:User:PUSH: full account data synchronization.
   */
  fullPushScopes?: string[];
  /**
   * @remarks
   * The resource operations of the SCIM protocol. Valid values:
   * 
   * *   urn:alibaba:idaas:app:scim:User:CREATE: account creation.
   * *   urn:alibaba:idaas:app:scim:User:UPDATE: account update.
   * *   urn:alibaba:idaas:app:scim:User:DELETE: account deletion.
   */
  provisioningActions?: string[];
  /**
   * @remarks
   * The base URL that the application uses to receive the SCIM protocol for IDaaS synchronization.
   * 
   * @example
   * https://example.com/scim
   */
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
  /**
   * @remarks
   * The claim name.
   * 
   * @example
   * "Role"
   */
  claimName?: string;
  /**
   * @remarks
   * The expression that is used to generate the value of the claim.
   * 
   * @example
   * user.dict.applicationRole
   */
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
  /**
   * @remarks
   * The validity period of the issued access token. Unit: seconds. Default value: 1200.
   * 
   * @example
   * 1200
   */
  accessTokenEffectiveTime?: number;
  /**
   * @remarks
   * The validity period of the issued code. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  codeEffectiveTime?: number;
  /**
   * @remarks
   * The custom claims that are returned for the ID token.
   */
  customClaims?: SetApplicationSsoConfigRequestOidcSsoConfigCustomClaims[];
  /**
   * @remarks
   * The scopes of user attributes that can be returned for the UserInfo endpoint or ID token.
   * 
   * @example
   * profile，email
   */
  grantScopes?: string[];
  /**
   * @remarks
   * The list of grant types that are supported for OIDC protocols.
   * 
   * @example
   * authorization_code
   */
  grantTypes?: string[];
  /**
   * @remarks
   * The validity period of the issued ID token. Unit: seconds. Default value: 300.
   * 
   * @example
   * 300
   */
  idTokenEffectiveTime?: number;
  /**
   * @remarks
   * The ID of the identity authentication source in password mode. Specify this parameter only when the value of the GrantTypes parameter includes the password mode.
   * 
   * @example
   * ia_password
   */
  passwordAuthenticationSourceId?: string;
  /**
   * @remarks
   * Specifies whether time-based one-time password (TOTP) authentication is required in password mode. Specify this parameter only when the value of the GrantTypes parameter includes the password mode.
   * 
   * @example
   * true
   */
  passwordTotpMfaRequired?: boolean;
  /**
   * @remarks
   * The algorithms that are used to calculate the code challenge for PKCE.
   * 
   * @example
   * S256
   */
  pkceChallengeMethods?: string[];
  /**
   * @remarks
   * Specifies whether the SSO of the application requires Proof Key for Code Exchange (PKCE) (RFC 7636).
   * 
   * @example
   * true
   */
  pkceRequired?: boolean;
  /**
   * @remarks
   * The list of logout redirect URIs that are supported by the application.
   */
  postLogoutRedirectUris?: string[];
  /**
   * @remarks
   * The list of redirect URIs that are supported by the application.
   */
  redirectUris?: string[];
  /**
   * @remarks
   * The validity period of the issued refresh token. Unit: seconds. Default value: 86400.
   * 
   * @example
   * 86400
   */
  refreshTokenEffective?: number;
  /**
   * @remarks
   * The response types that are supported by the application. Specify this parameter when the value of the GrantTypes parameter includes the implicit mode.
   * 
   * @example
   * token id_token
   */
  responseTypes?: string[];
  /**
   * @remarks
   * The custom expression that is used to generate the subject ID returned for the ID token.
   * 
   * @example
   * user.userid
   */
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
  /**
   * @remarks
   * The attribute name.
   * 
   * @example
   * https://www.aliyun.com/SAML-Role/Attributes/RoleSessionName
   */
  attributeName?: string;
  /**
   * @remarks
   * The expression that is used to generate the value of the attribute.
   * 
   * @example
   * user.username
   */
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
  /**
   * @remarks
   * assertion是否签名
   * 
   * @example
   * true
   */
  assertionSigned?: boolean;
  /**
   * @remarks
   * The additional user attributes in the SAML assertion.
   */
  attributeStatements?: SetApplicationSsoConfigRequestSamlSsoConfigAttributeStatements[];
  /**
   * @remarks
   * The default value of the RelayState attribute. If the SSO request is initiated in EIAM, the RelayState attribute in the SAML response is set to this default value.
   * 
   * @example
   * https://home.console.aliyun.com
   */
  defaultRelayState?: string;
  /**
   * @remarks
   * The Format attribute of the NameID element in the SAML assertion. Valid values:
   * 
   * *   urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified: No format is specified. How to resolve the NameID element depends on the application.
   * *   urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress: The NameID element must be an email address.
   * *   urn:oasis:names:tc:SAML:2.0:nameid-format:persistent: The NameID element must be persistent.
   * *   urn:oasis:names:tc:SAML:2.0:nameid-format:transient: The NameID element must be transient.
   * 
   * @example
   * urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified
   */
  nameIdFormat?: string;
  /**
   * @remarks
   * The expression that is used to generate the value of NameID in the SAML assertion.
   * 
   * @example
   * user.email
   */
  nameIdValueExpression?: string;
  /**
   * @remarks
   * response是否签名
   * 
   * @example
   * true
   */
  responseSigned?: boolean;
  /**
   * @remarks
   * The algorithm that is used to calculate the signature for the SAML assertion.
   * 
   * @example
   * RSA-SHA256
   */
  signatureAlgorithm?: string;
  /**
   * @remarks
   * The entity ID of the application in SAML. The application assumes the role of service provider.
   * 
   * @example
   * urn:alibaba:cloudcomputing
   */
  spEntityId?: string;
  /**
   * @remarks
   * The Assertion Consumer Service (ACS) URL of the application in SAML. The application assumes the role of service provider.
   * 
   * @example
   * https://signin.aliyun.com/saml-role/sso
   */
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
  /**
   * @remarks
   * The type of the password check. Valid values:
   * 
   * *   inclusion_upper_case: The password must contain uppercase letters.
   * *   inclusion_lower_case: The password must contain lowercase letters.
   * *   inclusion_special_case: The password must contain one or more of the following special characters: @ % + \\ / \\" ! # $ ^ ? : , ( ) { } [ ] ~ - _ .
   * *   inclusion_number: The password must contain digits.
   * *   exclusion_username: The password cannot contain a username.
   * *   exclusion_email: The password cannot contain an email prefix.
   * *   exclusion_phone_number: The password cannot contain a mobile number.
   * *   exclusion_display_name: The password cannot contain a display name.
   * 
   * @example
   * inclusion_upper_case
   */
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
  /**
   * @remarks
   * The name of the extended field. You must create an extended field before you specify this parameter. To create an extended field, go to the Extended Fields page of the specified EIAM instance in the IDaaS console.
   * 
   * @example
   * nick_name
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the extended field. The value follows the limits on the properties of the extended field.
   * 
   * @example
   * test_value
   */
  fieldValue?: string;
  /**
   * @remarks
   * The operation type of the extended field. Valid values:
   * 
   * *   add: adds a value to the extended field of the account.
   * *   replace: replaces the existing value of the extended field of the account. If the existing value to be replaced does not exist, this operation changes to the add operation.
   * *   remove: removes a value from the extended field of the account.
   * 
   * @example
   * add
   */
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
   * Adds an Employee Identity and Access Management (EIAM) account to multiple EIAM organizations of Identity as a Service (IDaaS). If the account already exists in the organizational unit, the system directly returns a success response.
   * 
   * @param request - AddUserToOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserToOrganizationalUnitsResponse
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
   * Adds an Employee Identity and Access Management (EIAM) account to multiple EIAM organizations of Identity as a Service (IDaaS). If the account already exists in the organizational unit, the system directly returns a success response.
   * 
   * @param request - AddUserToOrganizationalUnitsRequest
   * @returns AddUserToOrganizationalUnitsResponse
   */
  async addUserToOrganizationalUnits(request: AddUserToOrganizationalUnitsRequest): Promise<AddUserToOrganizationalUnitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Adds Employee Identity and Access Management (EIAM) accounts to an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - AddUsersToGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUsersToGroupResponse
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
   * Adds Employee Identity and Access Management (EIAM) accounts to an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - AddUsersToGroupRequest
   * @returns AddUsersToGroupResponse
   */
  async addUsersToGroup(request: AddUsersToGroupRequest): Promise<AddUsersToGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUsersToGroupWithOptions(request, runtime);
  }

  /**
   * Grants the permissions to access an application to multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - AuthorizeApplicationToGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeApplicationToGroupsResponse
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
   * Grants the permissions to access an application to multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - AuthorizeApplicationToGroupsRequest
   * @returns AuthorizeApplicationToGroupsResponse
   */
  async authorizeApplicationToGroups(request: AuthorizeApplicationToGroupsRequest): Promise<AuthorizeApplicationToGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeApplicationToGroupsWithOptions(request, runtime);
  }

  /**
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - AuthorizeApplicationToOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeApplicationToOrganizationalUnitsResponse
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
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - AuthorizeApplicationToOrganizationalUnitsRequest
   * @returns AuthorizeApplicationToOrganizationalUnitsResponse
   */
  async authorizeApplicationToOrganizationalUnits(request: AuthorizeApplicationToOrganizationalUnitsRequest): Promise<AuthorizeApplicationToOrganizationalUnitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeApplicationToOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - AuthorizeApplicationToUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeApplicationToUsersResponse
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
   * Grants the access permissions on an application to multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - AuthorizeApplicationToUsersRequest
   * @returns AuthorizeApplicationToUsersResponse
   */
  async authorizeApplicationToUsers(request: AuthorizeApplicationToUsersRequest): Promise<AuthorizeApplicationToUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.authorizeApplicationToUsersWithOptions(request, runtime);
  }

  /**
   * Adds an application to an Enterprise Identity Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @remarks
   * IDaaS EIAM supports the following two standard single sign-on (SSO) protocols for adding applications: SAML 2.0 and OIDC. You can select an SSO protocol based on your business requirements when you add an application. You cannot change the SSO protocol that you selected after the application is added.
   * 
   * @param request - CreateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationResponse
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
   * Adds an application to an Enterprise Identity Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @remarks
   * IDaaS EIAM supports the following two standard single sign-on (SSO) protocols for adding applications: SAML 2.0 and OIDC. You can select an SSO protocol based on your business requirements when you add an application. You cannot change the SSO protocol that you selected after the application is added.
   * 
   * @param request - CreateApplicationRequest
   * @returns CreateApplicationResponse
   */
  async createApplication(request: CreateApplicationRequest): Promise<CreateApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  /**
   * Creates a client key for an Employee Identity and Access Management (EIAM) application. An EIAM application can have up to two client keys.
   * 
   * @param request - CreateApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationClientSecretResponse
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
   * Creates a client key for an Employee Identity and Access Management (EIAM) application. An EIAM application can have up to two client keys.
   * 
   * @param request - CreateApplicationClientSecretRequest
   * @returns CreateApplicationClientSecretResponse
   */
  async createApplicationClientSecret(request: CreateApplicationClientSecretRequest): Promise<CreateApplicationClientSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * 创建域名。
   * 
   * @param request - CreateDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
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
   * 创建域名。
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  /**
   * 创建域名代理Token。
   * 
   * @param request - CreateDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainProxyTokenResponse
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
   * 创建域名代理Token。
   * 
   * @param request - CreateDomainProxyTokenRequest
   * @returns CreateDomainProxyTokenResponse
   */
  async createDomainProxyToken(request: CreateDomainProxyTokenRequest): Promise<CreateDomainProxyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * Creates an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - CreateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
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
   * Creates an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGroupWithOptions(request, runtime);
  }

  /**
   * Creates an instance based on which all capabilities of Identity as a Service (IDaaS) Enterprise Identity and Access Management (EIAM) are provided.
   * 
   * @param request - CreateInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
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
   * Creates an instance based on which all capabilities of Identity as a Service (IDaaS) Enterprise Identity and Access Management (EIAM) are provided.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  /**
   * 创建一个专属网络端点。
   * 
   * @param request - CreateNetworkAccessEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkAccessEndpointResponse
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
   * 创建一个专属网络端点。
   * 
   * @param request - CreateNetworkAccessEndpointRequest
   * @returns CreateNetworkAccessEndpointResponse
   */
  async createNetworkAccessEndpoint(request: CreateNetworkAccessEndpointRequest): Promise<CreateNetworkAccessEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * Creates an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - CreateOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrganizationalUnitResponse
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
   * Creates an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - CreateOrganizationalUnitRequest
   * @returns CreateOrganizationalUnitResponse
   */
  async createOrganizationalUnit(request: CreateOrganizationalUnitRequest): Promise<CreateOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Creates an account in an Identity as a Service (IDaaS) Enterprise Identity Access Management (EIAM) instance.
   * 
   * @param request - CreateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
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
   * Creates an account in an Identity as a Service (IDaaS) Enterprise Identity Access Management (EIAM) instance.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(request: CreateUserRequest): Promise<CreateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserWithOptions(request, runtime);
  }

  /**
   * Deletes an Employee Identity and Access Management (EIAM) application.
   * 
   * @remarks
   * Make sure that the EIAM application that you want to delete is not used before you delete the EIAM application. After you delete the EIAM application, all configurations are deleted and cannot be restored.
   * 
   * @param request - DeleteApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationResponse
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
   * Deletes an Employee Identity and Access Management (EIAM) application.
   * 
   * @remarks
   * Make sure that the EIAM application that you want to delete is not used before you delete the EIAM application. After you delete the EIAM application, all configurations are deleted and cannot be restored.
   * 
   * @param request - DeleteApplicationRequest
   * @returns DeleteApplicationResponse
   */
  async deleteApplication(request: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  /**
   * Deletes a client key for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DeleteApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationClientSecretResponse
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
   * Deletes a client key for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DeleteApplicationClientSecretRequest
   * @returns DeleteApplicationClientSecretResponse
   */
  async deleteApplicationClientSecret(request: DeleteApplicationClientSecretRequest): Promise<DeleteApplicationClientSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * 删除域名。
   * 
   * @param request - DeleteDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
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
   * 删除域名。
   * 
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * 删除指定域名代理Token，删除之前请保证代理Token处于禁用状态。
   * 
   * @param request - DeleteDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainProxyTokenResponse
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
   * 删除指定域名代理Token，删除之前请保证代理Token处于禁用状态。
   * 
   * @param request - DeleteDomainProxyTokenRequest
   * @returns DeleteDomainProxyTokenResponse
   */
  async deleteDomainProxyToken(request: DeleteDomainProxyTokenRequest): Promise<DeleteDomainProxyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * Deletes the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - DeleteGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
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
   * Deletes the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - DeleteGroupRequest
   * @returns DeleteGroupResponse
   */
  async deleteGroup(request: DeleteGroupRequest): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS) that you do not need.
   * 
   * @remarks
   * Make sure that the instance to be deleted is no longer used. If the instance is deleted, all data related to the instance will be deleted.
   * 
   * @param request - DeleteInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
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
   * Deletes an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS) that you do not need.
   * 
   * @remarks
   * Make sure that the instance to be deleted is no longer used. If the instance is deleted, all data related to the instance will be deleted.
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  /**
   * 删除一个专属网络端点。
   * 
   * @param request - DeleteNetworkAccessEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkAccessEndpointResponse
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
   * 删除一个专属网络端点。
   * 
   * @param request - DeleteNetworkAccessEndpointRequest
   * @returns DeleteNetworkAccessEndpointResponse
   */
  async deleteNetworkAccessEndpoint(request: DeleteNetworkAccessEndpointRequest): Promise<DeleteNetworkAccessEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * Deletes an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the organization has EIAM accounts or child organizations, the delete operation fails.
   * 
   * @param request - DeleteOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOrganizationalUnitResponse
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
   * Deletes an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the organization has EIAM accounts or child organizations, the delete operation fails.
   * 
   * @param request - DeleteOrganizationalUnitRequest
   * @returns DeleteOrganizationalUnitResponse
   */
  async deleteOrganizationalUnit(request: DeleteOrganizationalUnitRequest): Promise<DeleteOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Deletes an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The information related to the account is cleared.
   * 
   * @param request - DeleteUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
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
   * Deletes an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The information related to the account is cleared.
   * 
   * @param request - DeleteUserRequest
   * @returns DeleteUserResponse
   */
  async deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserWithOptions(request, runtime);
  }

  /**
   * Disables an enabled Employee Identity and Access Management (EIAM) application. All features of the EIAM application cannot be used if you disable the EIAM application.
   * 
   * @remarks
   * All features of the EIAM application cannot be used if you disable the EIAM application, such as single sign-on (SSO) and account synchronization. Make sure that you acknowledge the risks of the delete operation.
   * 
   * @param request - DisableApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationResponse
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
   * Disables an enabled Employee Identity and Access Management (EIAM) application. All features of the EIAM application cannot be used if you disable the EIAM application.
   * 
   * @remarks
   * All features of the EIAM application cannot be used if you disable the EIAM application, such as single sign-on (SSO) and account synchronization. Make sure that you acknowledge the risks of the delete operation.
   * 
   * @param request - DisableApplicationRequest
   * @returns DisableApplicationResponse
   */
  async disableApplication(request: DisableApplicationRequest): Promise<DisableApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableApplicationWithOptions(request, runtime);
  }

  /**
   * Disables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationApiInvokeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationApiInvokeResponse
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
   * Disables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationApiInvokeRequest
   * @returns DisableApplicationApiInvokeResponse
   */
  async disableApplicationApiInvoke(request: DisableApplicationApiInvokeRequest): Promise<DisableApplicationApiInvokeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableApplicationApiInvokeWithOptions(request, runtime);
  }

  /**
   * Disables a client key of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationClientSecretResponse
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
   * Disables a client key of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - DisableApplicationClientSecretRequest
   * @returns DisableApplicationClientSecretResponse
   */
  async disableApplicationClientSecret(request: DisableApplicationClientSecretRequest): Promise<DisableApplicationClientSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * Disables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - DisableApplicationProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationProvisioningResponse
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
   * Disables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - DisableApplicationProvisioningRequest
   * @returns DisableApplicationProvisioningResponse
   */
  async disableApplicationProvisioning(request: DisableApplicationProvisioningRequest): Promise<DisableApplicationProvisioningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableApplicationProvisioningWithOptions(request, runtime);
  }

  /**
   * 禁用应用SSO能力
   * 
   * @param request - DisableApplicationSsoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationSsoResponse
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
   * 禁用应用SSO能力
   * 
   * @param request - DisableApplicationSsoRequest
   * @returns DisableApplicationSsoResponse
   */
  async disableApplicationSso(request: DisableApplicationSsoRequest): Promise<DisableApplicationSsoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableApplicationSsoWithOptions(request, runtime);
  }

  /**
   * 禁用指定域名代理Token。
   * 
   * @param request - DisableDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableDomainProxyTokenResponse
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
   * 禁用指定域名代理Token。
   * 
   * @param request - DisableDomainProxyTokenRequest
   * @returns DisableDomainProxyTokenResponse
   */
  async disableDomainProxyToken(request: DisableDomainProxyTokenRequest): Promise<DisableDomainProxyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * 关闭初始化域名自动跳转。
   * 
   * @param request - DisableInitDomainAutoRedirectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableInitDomainAutoRedirectResponse
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
   * 关闭初始化域名自动跳转。
   * 
   * @param request - DisableInitDomainAutoRedirectRequest
   * @returns DisableInitDomainAutoRedirectResponse
   */
  async disableInitDomainAutoRedirect(request: DisableInitDomainAutoRedirectRequest): Promise<DisableInitDomainAutoRedirectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableInitDomainAutoRedirectWithOptions(request, runtime);
  }

  /**
   * Disables an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account. If the account is disabled, a success message is returned.
   * 
   * @param request - DisableUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableUserResponse
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
   * Disables an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account. If the account is disabled, a success message is returned.
   * 
   * @param request - DisableUserRequest
   * @returns DisableUserResponse
   */
  async disableUser(request: DisableUserRequest): Promise<DisableUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableUserWithOptions(request, runtime);
  }

  /**
   * Enables a disabled Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationResponse
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
   * Enables a disabled Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationRequest
   * @returns EnableApplicationResponse
   */
  async enableApplication(request: EnableApplicationRequest): Promise<EnableApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableApplicationWithOptions(request, runtime);
  }

  /**
   * Enables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationApiInvokeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationApiInvokeResponse
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
   * Enables the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - EnableApplicationApiInvokeRequest
   * @returns EnableApplicationApiInvokeResponse
   */
  async enableApplicationApiInvoke(request: EnableApplicationApiInvokeRequest): Promise<EnableApplicationApiInvokeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableApplicationApiInvokeWithOptions(request, runtime);
  }

  /**
   * Enables the client key of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationClientSecretResponse
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
   * Enables the client key of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationClientSecretRequest
   * @returns EnableApplicationClientSecretResponse
   */
  async enableApplicationClientSecret(request: EnableApplicationClientSecretRequest): Promise<EnableApplicationClientSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * Enables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationProvisioningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationProvisioningResponse
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
   * Enables the account synchronization feature for an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - EnableApplicationProvisioningRequest
   * @returns EnableApplicationProvisioningResponse
   */
  async enableApplicationProvisioning(request: EnableApplicationProvisioningRequest): Promise<EnableApplicationProvisioningResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableApplicationProvisioningWithOptions(request, runtime);
  }

  /**
   * 启用应用SSO能力
   * 
   * @param request - EnableApplicationSsoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationSsoResponse
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
   * 启用应用SSO能力
   * 
   * @param request - EnableApplicationSsoRequest
   * @returns EnableApplicationSsoResponse
   */
  async enableApplicationSso(request: EnableApplicationSsoRequest): Promise<EnableApplicationSsoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableApplicationSsoWithOptions(request, runtime);
  }

  /**
   * 启用指定域名代理Token。
   * 
   * @param request - EnableDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableDomainProxyTokenResponse
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
   * 启用指定域名代理Token。
   * 
   * @param request - EnableDomainProxyTokenRequest
   * @returns EnableDomainProxyTokenResponse
   */
  async enableDomainProxyToken(request: EnableDomainProxyTokenRequest): Promise<EnableDomainProxyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * 开启初始化域名自动跳转。开启后，访问初始化域名将会自动跳转至默认域名。
   * 
   * @param request - EnableInitDomainAutoRedirectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableInitDomainAutoRedirectResponse
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
   * 开启初始化域名自动跳转。开启后，访问初始化域名将会自动跳转至默认域名。
   * 
   * @param request - EnableInitDomainAutoRedirectRequest
   * @returns EnableInitDomainAutoRedirectResponse
   */
  async enableInitDomainAutoRedirect(request: EnableInitDomainAutoRedirectRequest): Promise<EnableInitDomainAutoRedirectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableInitDomainAutoRedirectWithOptions(request, runtime);
  }

  /**
   * Enables an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - EnableUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableUserResponse
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
   * Enables an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - EnableUserRequest
   * @returns EnableUserResponse
   */
  async enableUser(request: EnableUserRequest): Promise<EnableUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableUserWithOptions(request, runtime);
  }

  /**
   * Queries the details of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationResponse
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
   * Queries the details of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationRequest
   * @returns GetApplicationResponse
   */
  async getApplication(request: GetApplicationRequest): Promise<GetApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the permissions of the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationGrantScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationGrantScopeResponse
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
   * Queries the permissions of the Developer API feature for an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - GetApplicationGrantScopeRequest
   * @returns GetApplicationGrantScopeResponse
   */
  async getApplicationGrantScope(request: GetApplicationGrantScopeRequest): Promise<GetApplicationGrantScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationGrantScopeWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetApplicationProvisioningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationProvisioningConfigResponse
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
   * Queries the configuration of the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetApplicationProvisioningConfigRequest
   * @returns GetApplicationProvisioningConfigResponse
   */
  async getApplicationProvisioningConfig(request: GetApplicationProvisioningConfigRequest): Promise<GetApplicationProvisioningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationProvisioningConfigWithOptions(request, runtime);
  }

  /**
   * Queries the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - GetApplicationProvisioningScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationProvisioningScopeResponse
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
   * Queries the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - GetApplicationProvisioningScopeRequest
   * @returns GetApplicationProvisioningScopeResponse
   */
  async getApplicationProvisioningScope(request: GetApplicationProvisioningScopeRequest): Promise<GetApplicationProvisioningScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationProvisioningScopeWithOptions(request, runtime);
  }

  /**
   * Queries the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetApplicationSsoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationSsoConfigResponse
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
   * Queries the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetApplicationSsoConfigRequest
   * @returns GetApplicationSsoConfigResponse
   */
  async getApplicationSsoConfig(request: GetApplicationSsoConfigRequest): Promise<GetApplicationSsoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getApplicationSsoConfigWithOptions(request, runtime);
  }

  /**
   * 查询一个域名的详细信息。
   * 
   * @param request - GetDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainResponse
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
   * 查询一个域名的详细信息。
   * 
   * @param request - GetDomainRequest
   * @returns GetDomainResponse
   */
  async getDomain(request: GetDomainRequest): Promise<GetDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDomainWithOptions(request, runtime);
  }

  /**
   * 查看域名的DNS Challenge记录。
   * 
   * @param request - GetDomainDnsChallengeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDomainDnsChallengeResponse
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
   * 查看域名的DNS Challenge记录。
   * 
   * @param request - GetDomainDnsChallengeRequest
   * @returns GetDomainDnsChallengeResponse
   */
  async getDomainDnsChallenge(request: GetDomainDnsChallengeRequest): Promise<GetDomainDnsChallengeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDomainDnsChallengeWithOptions(request, runtime);
  }

  /**
   * Queries the forgot password configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetForgetPasswordConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetForgetPasswordConfigurationResponse
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
   * Queries the forgot password configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetForgetPasswordConfigurationRequest
   * @returns GetForgetPasswordConfigurationResponse
   */
  async getForgetPasswordConfiguration(request: GetForgetPasswordConfigurationRequest): Promise<GetForgetPasswordConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getForgetPasswordConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
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
   * Queries the information of an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(request: GetGroupRequest): Promise<GetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGroupWithOptions(request, runtime);
  }

  /**
   * Queries the information of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
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
   * Queries the information of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * 查询一个专属网络端点的详细信息。
   * 
   * @param request - GetNetworkAccessEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkAccessEndpointResponse
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
   * 查询一个专属网络端点的详细信息。
   * 
   * @param request - GetNetworkAccessEndpointRequest
   * @returns GetNetworkAccessEndpointResponse
   */
  async getNetworkAccessEndpoint(request: GetNetworkAccessEndpointRequest): Promise<GetNetworkAccessEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNetworkAccessEndpointWithOptions(request, runtime);
  }

  /**
   * Queries the information about an organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrganizationalUnitResponse
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
   * Queries the information about an organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetOrganizationalUnitRequest
   * @returns GetOrganizationalUnitResponse
   */
  async getOrganizationalUnit(request: GetOrganizationalUnitRequest): Promise<GetOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Queries the password complexity configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordComplexityConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordComplexityConfigurationResponse
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
   * Queries the password complexity configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordComplexityConfigurationRequest
   * @returns GetPasswordComplexityConfigurationResponse
   */
  async getPasswordComplexityConfiguration(request: GetPasswordComplexityConfigurationRequest): Promise<GetPasswordComplexityConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPasswordComplexityConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the password expiration configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordExpirationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordExpirationConfigurationResponse
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
   * Queries the password expiration configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordExpirationConfigurationRequest
   * @returns GetPasswordExpirationConfigurationResponse
   */
  async getPasswordExpirationConfiguration(request: GetPasswordExpirationConfigurationRequest): Promise<GetPasswordExpirationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPasswordExpirationConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the password history configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordHistoryConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordHistoryConfigurationResponse
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
   * Queries the password history configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordHistoryConfigurationRequest
   * @returns GetPasswordHistoryConfigurationResponse
   */
  async getPasswordHistoryConfiguration(request: GetPasswordHistoryConfigurationRequest): Promise<GetPasswordHistoryConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPasswordHistoryConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the password initialization configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordInitializationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPasswordInitializationConfigurationResponse
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
   * Queries the password initialization configurations of an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - GetPasswordInitializationConfigurationRequest
   * @returns GetPasswordInitializationConfigurationResponse
   */
  async getPasswordInitializationConfiguration(request: GetPasswordInitializationConfigurationRequest): Promise<GetPasswordInitializationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPasswordInitializationConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the information about the root organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetRootOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRootOrganizationalUnitResponse
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
   * Queries the information about the root organizational unit in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetRootOrganizationalUnitRequest
   * @returns GetRootOrganizationalUnitResponse
   */
  async getRootOrganizationalUnit(request: GetRootOrganizationalUnitRequest): Promise<GetRootOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRootOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * 查询同步任务
   * 
   * @param request - GetSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSynchronizationJobResponse
   */
  async getSynchronizationJobWithOptions(request: GetSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<GetSynchronizationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.synchronizationJobId)) {
      query["SynchronizationJobId"] = request.synchronizationJobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSynchronizationJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSynchronizationJobResponse>(await this.callApi(params, req, runtime), new GetSynchronizationJobResponse({}));
  }

  /**
   * 查询同步任务
   * 
   * @param request - GetSynchronizationJobRequest
   * @returns GetSynchronizationJobResponse
   */
  async getSynchronizationJob(request: GetSynchronizationJobRequest): Promise<GetSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * Queries the details of an account in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
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
   * Queries the details of an account in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserWithOptions(request, runtime);
  }

  /**
   * Queries all client keys of an Employee Identity and Access Management (EIAM) application. The returned key secret is not masked. If you want to query the key secret that is masked, call the ObtainApplicationClientSecret operation.
   * 
   * @param request - ListApplicationClientSecretsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationClientSecretsResponse
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
   * Queries all client keys of an Employee Identity and Access Management (EIAM) application. The returned key secret is not masked. If you want to query the key secret that is masked, call the ObtainApplicationClientSecret operation.
   * 
   * @param request - ListApplicationClientSecretsRequest
   * @returns ListApplicationClientSecretsResponse
   */
  async listApplicationClientSecrets(request: ListApplicationClientSecretsRequest): Promise<ListApplicationClientSecretsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationClientSecretsWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or multiple Employee Identity and Access Management (EIAM) applications by page.
   * 
   * @param request - ListApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsResponse
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
   * Queries the information about one or multiple Employee Identity and Access Management (EIAM) applications by page.
   * 
   * @param request - ListApplicationsRequest
   * @returns ListApplicationsResponse
   */
  async listApplications(request: ListApplicationsRequest): Promise<ListApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  /**
   * Queries the applications that an Employee Identity and Access Management (EIAM) organization can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @remarks
   * You can only query the permissions that are directly granted to the EIAM organization by calling the ListApplicationsForOrganizationalUnit operation. You can filter applications by configuring the **ApplicationIds** parameter when you call this operation.
   * 
   * @param request - ListApplicationsForOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForOrganizationalUnitResponse
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
   * Queries the applications that an Employee Identity and Access Management (EIAM) organization can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @remarks
   * You can only query the permissions that are directly granted to the EIAM organization by calling the ListApplicationsForOrganizationalUnit operation. You can filter applications by configuring the **ApplicationIds** parameter when you call this operation.
   * 
   * @param request - ListApplicationsForOrganizationalUnitRequest
   * @returns ListApplicationsForOrganizationalUnitResponse
   */
  async listApplicationsForOrganizationalUnit(request: ListApplicationsForOrganizationalUnitRequest): Promise<ListApplicationsForOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsForOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Queries the applications that an Employee Identity and Access Management (EIAM) account can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @param request - ListApplicationsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForUserResponse
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
   * Queries the applications that an Employee Identity and Access Management (EIAM) account can access. The return result includes the IDs of the applications. If you want to obtain the details of the applications, call the GetApplication operation.
   * 
   * @param request - ListApplicationsForUserRequest
   * @returns ListApplicationsForUserResponse
   */
  async listApplicationsForUser(request: ListApplicationsForUserRequest): Promise<ListApplicationsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsForUserWithOptions(request, runtime);
  }

  /**
   * 列表查询域名代理Token信息。
   * 
   * @param request - ListDomainProxyTokensRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainProxyTokensResponse
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
   * 列表查询域名代理Token信息。
   * 
   * @param request - ListDomainProxyTokensRequest
   * @returns ListDomainProxyTokensResponse
   */
  async listDomainProxyTokens(request: ListDomainProxyTokensRequest): Promise<ListDomainProxyTokensResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDomainProxyTokensWithOptions(request, runtime);
  }

  /**
   * 列表查询域名记录。
   * 
   * @param request - ListDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
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
   * 列表查询域名记录。
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDomainsWithOptions(request, runtime);
  }

  /**
   * 查询EIAM2.0/EIAM1.0实例列表
   * 
   * @param request - ListEiamInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEiamInstancesResponse
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
   * 查询EIAM2.0/EIAM1.0实例列表
   * 
   * @param request - ListEiamInstancesRequest
   * @returns ListEiamInstancesResponse
   */
  async listEiamInstances(request: ListEiamInstancesRequest): Promise<ListEiamInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEiamInstancesWithOptions(request, runtime);
  }

  /**
   * 查询EIAM2.0/EIAM1.0地域列表
   * 
   * @param request - ListEiamRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEiamRegionsResponse
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
   * 查询EIAM2.0/EIAM1.0地域列表
   * @returns ListEiamRegionsResponse
   */
  async listEiamRegions(): Promise<ListEiamRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listEiamRegionsWithOptions(runtime);
  }

  /**
   * Queries a list of account groups in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - ListGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsResponse
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
   * Queries a list of account groups in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a list of account groups to which the permissions to access an application are granted. The returned results contain the group IDs. You can call the GetGroup operation to query the information about an account group based on the group ID.
   * 
   * @param request - ListGroupsForApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsForApplicationResponse
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
   * Queries a list of account groups to which the permissions to access an application are granted. The returned results contain the group IDs. You can call the GetGroup operation to query the information about an account group based on the group ID.
   * 
   * @param request - ListGroupsForApplicationRequest
   * @returns ListGroupsForApplicationResponse
   */
  async listGroupsForApplication(request: ListGroupsForApplicationRequest): Promise<ListGroupsForApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsForApplicationWithOptions(request, runtime);
  }

  /**
   * Queries a list of account groups to which an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) belongs.
   * 
   * @param request - ListGroupsForUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsForUserResponse
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
   * Queries a list of account groups to which an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) belongs.
   * 
   * @param request - ListGroupsForUserRequest
   * @returns ListGroupsForUserResponse
   */
  async listGroupsForUser(request: ListGroupsForUserRequest): Promise<ListGroupsForUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGroupsForUserWithOptions(request, runtime);
  }

  /**
   * Queries the information of one or more Enterprise Identity and Access Management (EIAM) instances of Identity as a Service (IDaaS).
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
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
   * Queries the information of one or more Enterprise Identity and Access Management (EIAM) instances of Identity as a Service (IDaaS).
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * 获取支持专属端点的region列表
   * 
   * @param request - ListNetworkAccessEndpointAvailableRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessEndpointAvailableRegionsResponse
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
   * 获取支持专属端点的region列表
   * @returns ListNetworkAccessEndpointAvailableRegionsResponse
   */
  async listNetworkAccessEndpointAvailableRegions(): Promise<ListNetworkAccessEndpointAvailableRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNetworkAccessEndpointAvailableRegionsWithOptions(runtime);
  }

  /**
   * 获取支持NAE的可用区列表
   * 
   * @param request - ListNetworkAccessEndpointAvailableZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessEndpointAvailableZonesResponse
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
   * 获取支持NAE的可用区列表
   * 
   * @param request - ListNetworkAccessEndpointAvailableZonesRequest
   * @returns ListNetworkAccessEndpointAvailableZonesResponse
   */
  async listNetworkAccessEndpointAvailableZones(request: ListNetworkAccessEndpointAvailableZonesRequest): Promise<ListNetworkAccessEndpointAvailableZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNetworkAccessEndpointAvailableZonesWithOptions(request, runtime);
  }

  /**
   * 列表查询专属网络端点。
   * 
   * @param request - ListNetworkAccessEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessEndpointsResponse
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
   * 列表查询专属网络端点。
   * 
   * @param request - ListNetworkAccessEndpointsRequest
   * @returns ListNetworkAccessEndpointsResponse
   */
  async listNetworkAccessEndpoints(request: ListNetworkAccessEndpointsRequest): Promise<ListNetworkAccessEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNetworkAccessEndpointsWithOptions(request, runtime);
  }

  /**
   * 列表某个网络访问端点下的访问路径。
   * 
   * @param request - ListNetworkAccessPathsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkAccessPathsResponse
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
   * 列表某个网络访问端点下的访问路径。
   * 
   * @param request - ListNetworkAccessPathsRequest
   * @returns ListNetworkAccessPathsResponse
   */
  async listNetworkAccessPaths(request: ListNetworkAccessPathsRequest): Promise<ListNetworkAccessPathsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNetworkAccessPathsWithOptions(request, runtime);
  }

  /**
   * 查询组织的所有父级路径
   * 
   * @param request - ListOrganizationalUnitParentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitParentsResponse
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
   * 查询组织的所有父级路径
   * 
   * @param request - ListOrganizationalUnitParentsRequest
   * @returns ListOrganizationalUnitParentsResponse
   */
  async listOrganizationalUnitParents(request: ListOrganizationalUnitParentsRequest): Promise<ListOrganizationalUnitParentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrganizationalUnitParentsWithOptions(request, runtime);
  }

  /**
   * Queries the information about organizational units in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitsResponse
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
   * Queries the information about organizational units in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListOrganizationalUnitsRequest
   * @returns ListOrganizationalUnitsResponse
   */
  async listOrganizationalUnits(request: ListOrganizationalUnitsRequest): Promise<ListOrganizationalUnitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Queries the organizations that are allowed to access an Employee Identity and Access Management (EIAM) application by page. The return result includes the IDs of the organizations. If you want to obtain the details of the organizations, call the GetOrganizationalUnit operation.
   * 
   * @param request - ListOrganizationalUnitsForApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOrganizationalUnitsForApplicationResponse
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
   * Queries the organizations that are allowed to access an Employee Identity and Access Management (EIAM) application by page. The return result includes the IDs of the organizations. If you want to obtain the details of the organizations, call the GetOrganizationalUnit operation.
   * 
   * @param request - ListOrganizationalUnitsForApplicationRequest
   * @returns ListOrganizationalUnitsForApplicationResponse
   */
  async listOrganizationalUnitsForApplication(request: ListOrganizationalUnitsForApplicationRequest): Promise<ListOrganizationalUnitsForApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrganizationalUnitsForApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the supported Alibaba Cloud regions.
   * 
   * @param request - ListRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
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
   * Queries the supported Alibaba Cloud regions.
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  /**
   * 查询同步任务
   * 
   * @param request - ListSynchronizationJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSynchronizationJobsResponse
   */
  async listSynchronizationJobsWithOptions(request: ListSynchronizationJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListSynchronizationJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.targetIds)) {
      query["TargetIds"] = request.targetIds;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSynchronizationJobs",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSynchronizationJobsResponse>(await this.callApi(params, req, runtime), new ListSynchronizationJobsResponse({}));
  }

  /**
   * 查询同步任务
   * 
   * @param request - ListSynchronizationJobsRequest
   * @returns ListSynchronizationJobsResponse
   */
  async listSynchronizationJobs(request: ListSynchronizationJobsRequest): Promise<ListSynchronizationJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSynchronizationJobsWithOptions(request, runtime);
  }

  /**
   * Queries the details of accounts in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
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
   * Queries the details of accounts in Identity as a Service (IDaaS) Employee IAM (EIAM) by page.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Queries the accounts that are allowed to access an Employee Identity and Access Management (EIAM) application. The return results include the IDs of the accounts. If you need to obtain the details of the accounts, call the GetUser operation.
   * 
   * @param request - ListUsersForApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersForApplicationResponse
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
   * Queries the accounts that are allowed to access an Employee Identity and Access Management (EIAM) application. The return results include the IDs of the accounts. If you need to obtain the details of the accounts, call the GetUser operation.
   * 
   * @param request - ListUsersForApplicationRequest
   * @returns ListUsersForApplicationResponse
   */
  async listUsersForApplication(request: ListUsersForApplicationRequest): Promise<ListUsersForApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersForApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the information of accounts in an Employee Identity and Access Management (EIAM) group of Identity as a Service (IDaaS).
   * 
   * @param request - ListUsersForGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersForGroupResponse
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
   * Queries the information of accounts in an Employee Identity and Access Management (EIAM) group of Identity as a Service (IDaaS).
   * 
   * @param request - ListUsersForGroupRequest
   * @returns ListUsersForGroupResponse
   */
  async listUsersForGroup(request: ListUsersForGroupRequest): Promise<ListUsersForGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersForGroupWithOptions(request, runtime);
  }

  /**
   * Queries a client key of an Employee Identity and Access Management (EIAM) application. The returned key secret is masked. If you want to query the key secret that is not masked, call the ListApplicationClientSecrets operation.
   * 
   * @param request - ObtainApplicationClientSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ObtainApplicationClientSecretResponse
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
   * Queries a client key of an Employee Identity and Access Management (EIAM) application. The returned key secret is masked. If you want to query the key secret that is not masked, call the ListApplicationClientSecrets operation.
   * 
   * @param request - ObtainApplicationClientSecretRequest
   * @returns ObtainApplicationClientSecretResponse
   */
  async obtainApplicationClientSecret(request: ObtainApplicationClientSecretRequest): Promise<ObtainApplicationClientSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.obtainApplicationClientSecretWithOptions(request, runtime);
  }

  /**
   * 查看指定域名安全代理Token。
   * 
   * @param request - ObtainDomainProxyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ObtainDomainProxyTokenResponse
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
   * 查看指定域名安全代理Token。
   * 
   * @param request - ObtainDomainProxyTokenRequest
   * @returns ObtainDomainProxyTokenResponse
   */
  async obtainDomainProxyToken(request: ObtainDomainProxyTokenRequest): Promise<ObtainDomainProxyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.obtainDomainProxyTokenWithOptions(request, runtime);
  }

  /**
   * Removes an Employee Identity and Access Management (EIAM) account from multiple EIAM organizations of Identity as a Service (IDaaS). You cannot remove an account from a primary organization.
   * 
   * @param request - RemoveUserFromOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUserFromOrganizationalUnitsResponse
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
   * Removes an Employee Identity and Access Management (EIAM) account from multiple EIAM organizations of Identity as a Service (IDaaS). You cannot remove an account from a primary organization.
   * 
   * @param request - RemoveUserFromOrganizationalUnitsRequest
   * @returns RemoveUserFromOrganizationalUnitsResponse
   */
  async removeUserFromOrganizationalUnits(request: RemoveUserFromOrganizationalUnitsRequest): Promise<RemoveUserFromOrganizationalUnitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Removes Employee Identity and Access Management (EIAM) accounts from an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - RemoveUsersFromGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveUsersFromGroupResponse
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
   * Removes Employee Identity and Access Management (EIAM) accounts from an EIAM group of Identity as a Service (IDaaS).
   * 
   * @param request - RemoveUsersFromGroupRequest
   * @returns RemoveUsersFromGroupResponse
   */
  async removeUsersFromGroup(request: RemoveUsersFromGroupRequest): Promise<RemoveUsersFromGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUsersFromGroupWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions to access an application from multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - RevokeApplicationFromGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeApplicationFromGroupsResponse
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
   * Revokes the permissions to access an application from multiple account groups at a time in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - RevokeApplicationFromGroupsRequest
   * @returns RevokeApplicationFromGroupsResponse
   */
  async revokeApplicationFromGroups(request: RevokeApplicationFromGroupsRequest): Promise<RevokeApplicationFromGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeApplicationFromGroupsWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - RevokeApplicationFromOrganizationalUnitsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeApplicationFromOrganizationalUnitsResponse
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
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) organizations at a time.
   * 
   * @param request - RevokeApplicationFromOrganizationalUnitsRequest
   * @returns RevokeApplicationFromOrganizationalUnitsResponse
   */
  async revokeApplicationFromOrganizationalUnits(request: RevokeApplicationFromOrganizationalUnitsRequest): Promise<RevokeApplicationFromOrganizationalUnitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeApplicationFromOrganizationalUnitsWithOptions(request, runtime);
  }

  /**
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - RevokeApplicationFromUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeApplicationFromUsersResponse
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
   * Revokes the permissions to access an application from multiple Employee Identity and Access Management (EIAM) accounts at a time.
   * 
   * @param request - RevokeApplicationFromUsersRequest
   * @returns RevokeApplicationFromUsersResponse
   */
  async revokeApplicationFromUsers(request: RevokeApplicationFromUsersRequest): Promise<RevokeApplicationFromUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeApplicationFromUsersWithOptions(request, runtime);
  }

  /**
   * 运行同步任务
   * 
   * @param request - RunSynchronizationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSynchronizationJobResponse
   */
  async runSynchronizationJobWithOptions(request: RunSynchronizationJobRequest, runtime: $Util.RuntimeOptions): Promise<RunSynchronizationJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunSynchronizationJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunSynchronizationJobResponse>(await this.callApi(params, req, runtime), new RunSynchronizationJobResponse({}));
  }

  /**
   * 运行同步任务
   * 
   * @param request - RunSynchronizationJobRequest
   * @returns RunSynchronizationJobResponse
   */
  async runSynchronizationJob(request: RunSynchronizationJobRequest): Promise<RunSynchronizationJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runSynchronizationJobWithOptions(request, runtime);
  }

  /**
   * Configures the permissions of the Developer API feature of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - SetApplicationGrantScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationGrantScopeResponse
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
   * Configures the permissions of the Developer API feature of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - SetApplicationGrantScopeRequest
   * @returns SetApplicationGrantScopeResponse
   */
  async setApplicationGrantScope(request: SetApplicationGrantScopeRequest): Promise<SetApplicationGrantScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setApplicationGrantScopeWithOptions(request, runtime);
  }

  /**
   * Configures the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - SetApplicationProvisioningConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationProvisioningConfigResponse
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
   * Configures the account synchronization feature for an application in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM).
   * 
   * @param request - SetApplicationProvisioningConfigRequest
   * @returns SetApplicationProvisioningConfigResponse
   */
  async setApplicationProvisioningConfig(request: SetApplicationProvisioningConfigRequest): Promise<SetApplicationProvisioningConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setApplicationProvisioningConfigWithOptions(request, runtime);
  }

  /**
   * Sets the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - SetApplicationProvisioningScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationProvisioningScopeResponse
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
   * Sets the account synchronization scope of applications in Identity as a Service (IDaaS) Employee IAM (EIAM). This scope is the same as the scope within which developers can call the DeveloperAPI to query and manage accounts.
   * 
   * @param request - SetApplicationProvisioningScopeRequest
   * @returns SetApplicationProvisioningScopeResponse
   */
  async setApplicationProvisioningScope(request: SetApplicationProvisioningScopeRequest): Promise<SetApplicationProvisioningScopeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setApplicationProvisioningScopeWithOptions(request, runtime);
  }

  /**
   * Specifies the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @remarks
   * In IDaaS EIAM, the application management feature supports multiple SSO protocols for applications, including SAML 2.0 and OIDC protocols. Each application supports only one protocol, and the protocol cannot be changed after the application is created. You can specify the SSO configuration attributes of an application based on the supported SSO protocol.
   * 
   * @param request - SetApplicationSsoConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetApplicationSsoConfigResponse
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
   * Specifies the single sign-on (SSO) configuration attributes of an application in Identity as a Service (IDaaS) Employee IAM (EIAM).
   * 
   * @remarks
   * In IDaaS EIAM, the application management feature supports multiple SSO protocols for applications, including SAML 2.0 and OIDC protocols. Each application supports only one protocol, and the protocol cannot be changed after the application is created. You can specify the SSO configuration attributes of an application based on the supported SSO protocol.
   * 
   * @param request - SetApplicationSsoConfigRequest
   * @returns SetApplicationSsoConfigResponse
   */
  async setApplicationSsoConfig(request: SetApplicationSsoConfigRequest): Promise<SetApplicationSsoConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setApplicationSsoConfigWithOptions(request, runtime);
  }

  /**
   * 设置默认域名。
   * 
   * @param request - SetDefaultDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDefaultDomainResponse
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
   * 设置默认域名。
   * 
   * @param request - SetDefaultDomainRequest
   * @returns SetDefaultDomainResponse
   */
  async setDefaultDomain(request: SetDefaultDomainRequest): Promise<SetDefaultDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDefaultDomainWithOptions(request, runtime);
  }

  /**
   * Configures a forgot password policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetForgetPasswordConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetForgetPasswordConfigurationResponse
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
   * Configures a forgot password policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetForgetPasswordConfigurationRequest
   * @returns SetForgetPasswordConfigurationResponse
   */
  async setForgetPasswordConfiguration(request: SetForgetPasswordConfigurationRequest): Promise<SetForgetPasswordConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setForgetPasswordConfigurationWithOptions(request, runtime);
  }

  /**
   * Configures a password complexity policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordComplexityConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordComplexityConfigurationResponse
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
   * Configures a password complexity policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordComplexityConfigurationRequest
   * @returns SetPasswordComplexityConfigurationResponse
   */
  async setPasswordComplexityConfiguration(request: SetPasswordComplexityConfigurationRequest): Promise<SetPasswordComplexityConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPasswordComplexityConfigurationWithOptions(request, runtime);
  }

  /**
   * Configures a password expiration policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordExpirationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordExpirationConfigurationResponse
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
   * Configures a password expiration policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordExpirationConfigurationRequest
   * @returns SetPasswordExpirationConfigurationResponse
   */
  async setPasswordExpirationConfiguration(request: SetPasswordExpirationConfigurationRequest): Promise<SetPasswordExpirationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPasswordExpirationConfigurationWithOptions(request, runtime);
  }

  /**
   * Configures a password history policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordHistoryConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordHistoryConfigurationResponse
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
   * Configures a password history policy for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordHistoryConfigurationRequest
   * @returns SetPasswordHistoryConfigurationResponse
   */
  async setPasswordHistoryConfiguration(request: SetPasswordHistoryConfigurationRequest): Promise<SetPasswordHistoryConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPasswordHistoryConfigurationWithOptions(request, runtime);
  }

  /**
   * Sets the password initialization configurations for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordInitializationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetPasswordInitializationConfigurationResponse
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
   * Sets the password initialization configurations for an Employee Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - SetPasswordInitializationConfigurationRequest
   * @returns SetPasswordInitializationConfigurationResponse
   */
  async setPasswordInitializationConfiguration(request: SetPasswordInitializationConfigurationRequest): Promise<SetPasswordInitializationConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPasswordInitializationConfigurationWithOptions(request, runtime);
  }

  /**
   * Updates the primary organizational unit to which an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account belongs. This account will be removed from the previous primary organizational unit and added to the new primary organization.
   * 
   * @param request - SetUserPrimaryOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetUserPrimaryOrganizationalUnitResponse
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
   * Updates the primary organizational unit to which an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account belongs. This account will be removed from the previous primary organizational unit and added to the new primary organization.
   * 
   * @param request - SetUserPrimaryOrganizationalUnitRequest
   * @returns SetUserPrimaryOrganizationalUnitResponse
   */
  async setUserPrimaryOrganizationalUnit(request: SetUserPrimaryOrganizationalUnitRequest): Promise<SetUserPrimaryOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setUserPrimaryOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Unlocks an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) that is locked.
   * 
   * @param request - UnlockUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnlockUserResponse
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
   * Unlocks an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS) that is locked.
   * 
   * @param request - UnlockUserRequest
   * @returns UnlockUserResponse
   */
  async unlockUser(request: UnlockUserRequest): Promise<UnlockUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockUserWithOptions(request, runtime);
  }

  /**
   * Modifies the authorization type of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationAuthorizationTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationAuthorizationTypeResponse
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
   * Modifies the authorization type of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationAuthorizationTypeRequest
   * @returns UpdateApplicationAuthorizationTypeResponse
   */
  async updateApplicationAuthorizationType(request: UpdateApplicationAuthorizationTypeRequest): Promise<UpdateApplicationAuthorizationTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationAuthorizationTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationDescriptionResponse
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
   * Modifies the description of an Employee Identity and Access Management (EIAM) application.
   * 
   * @param request - UpdateApplicationDescriptionRequest
   * @returns UpdateApplicationDescriptionResponse
   */
  async updateApplicationDescription(request: UpdateApplicationDescriptionRequest): Promise<UpdateApplicationDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationDescriptionWithOptions(request, runtime);
  }

  /**
   * Updates the information about an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the information is empty, the information is not updated by default.
   * 
   * @param request - UpdateGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupResponse
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
   * Updates the information about an account group in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). If the information is empty, the information is not updated by default.
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupWithOptions(request, runtime);
  }

  /**
   * Updates the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account group.
   * 
   * @param request - UpdateGroupDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupDescriptionResponse
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
   * Updates the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account group.
   * 
   * @param request - UpdateGroupDescriptionRequest
   * @returns UpdateGroupDescriptionResponse
   */
  async updateGroupDescription(request: UpdateGroupDescriptionRequest): Promise<UpdateGroupDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateGroupDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateInstanceDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceDescriptionResponse
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
   * Modifies the description of an Enterprise Identity and Access Management (EIAM) instance of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateInstanceDescriptionRequest
   * @returns UpdateInstanceDescriptionResponse
   */
  async updateInstanceDescription(request: UpdateInstanceDescriptionRequest): Promise<UpdateInstanceDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * 更新一个专属网络端点的名称。
   * 
   * @param request - UpdateNetworkAccessEndpointNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNetworkAccessEndpointNameResponse
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
   * 更新一个专属网络端点的名称。
   * 
   * @param request - UpdateNetworkAccessEndpointNameRequest
   * @returns UpdateNetworkAccessEndpointNameResponse
   */
  async updateNetworkAccessEndpointName(request: UpdateNetworkAccessEndpointNameRequest): Promise<UpdateNetworkAccessEndpointNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNetworkAccessEndpointNameWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about an Employee Identity and Access Management (EIAM) organization. The basic information about the organization is not updated by default if no parameter is specified.
   * 
   * @param request - UpdateOrganizationalUnitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrganizationalUnitResponse
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
   * Updates the basic information about an Employee Identity and Access Management (EIAM) organization. The basic information about the organization is not updated by default if no parameter is specified.
   * 
   * @param request - UpdateOrganizationalUnitRequest
   * @returns UpdateOrganizationalUnitResponse
   */
  async updateOrganizationalUnit(request: UpdateOrganizationalUnitRequest): Promise<UpdateOrganizationalUnitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOrganizationalUnitWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Employee Identity and Access Management (EIAM) organization.
   * 
   * @param request - UpdateOrganizationalUnitDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrganizationalUnitDescriptionResponse
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
   * Modifies the description of an Employee Identity and Access Management (EIAM) organization.
   * 
   * @param request - UpdateOrganizationalUnitDescriptionRequest
   * @returns UpdateOrganizationalUnitDescriptionResponse
   */
  async updateOrganizationalUnitDescription(request: UpdateOrganizationalUnitDescriptionRequest): Promise<UpdateOrganizationalUnitDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOrganizationalUnitDescriptionWithOptions(request, runtime);
  }

  /**
   * Updates the parent organization ID of an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). In this case, the organization is moved from a parent node to a new node.
   * 
   * @param request - UpdateOrganizationalUnitParentIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOrganizationalUnitParentIdResponse
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
   * Updates the parent organization ID of an organization in Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM). In this case, the organization is moved from a parent node to a new node.
   * 
   * @param request - UpdateOrganizationalUnitParentIdRequest
   * @returns UpdateOrganizationalUnitParentIdResponse
   */
  async updateOrganizationalUnitParentId(request: UpdateOrganizationalUnitParentIdRequest): Promise<UpdateOrganizationalUnitParentIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateOrganizationalUnitParentIdWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
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
   * Updates the basic information about an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS).
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - UpdateUserDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserDescriptionResponse
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
   * Modifies the description of an Identity as a Service (IDaaS) Employee Identity and Access Management (EIAM) account.
   * 
   * @param request - UpdateUserDescriptionRequest
   * @returns UpdateUserDescriptionResponse
   */
  async updateUserDescription(request: UpdateUserDescriptionRequest): Promise<UpdateUserDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserDescriptionWithOptions(request, runtime);
  }

  /**
   * Updates the password information of an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The password must meet the requirements of the password policies that are configured in the IDaaS console.
   * 
   * @param request - UpdateUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserPasswordResponse
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
   * Updates the password information of an Employee Identity and Access Management (EIAM) account of Identity as a Service (IDaaS). The password must meet the requirements of the password policies that are configured in the IDaaS console.
   * 
   * @param request - UpdateUserPasswordRequest
   * @returns UpdateUserPasswordResponse
   */
  async updateUserPassword(request: UpdateUserPasswordRequest): Promise<UpdateUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserPasswordWithOptions(request, runtime);
  }

}
