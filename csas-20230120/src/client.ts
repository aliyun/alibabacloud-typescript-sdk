// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachApplication2ConnectorRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * ConnectorID。
   * 
   * This parameter is required.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      connectorId: 'ConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      connectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachApplication2ConnectorShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIdsShrink?: string;
  /**
   * @remarks
   * ConnectorID。
   * 
   * This parameter is required.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIdsShrink: 'ApplicationIds',
      connectorId: 'ConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIdsShrink: 'string',
      connectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachApplication2ConnectorResponseBody extends $tea.Model {
  /**
   * @example
   * 7E9D7ACD-53D5-56EF-A913-79D148D06299
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

export class AttachApplication2ConnectorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachApplication2ConnectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachApplication2ConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientUserRequest extends $tea.Model {
  /**
   * @example
   * 10797
   */
  departmentId?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * johndoe@example.com
   */
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 727
   */
  idpConfigId?: string;
  /**
   * @example
   * 13641966835
   */
  mobileNumber?: string;
  /**
   * @example
   * kehudiyi
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      description: 'Description',
      email: 'Email',
      idpConfigId: 'IdpConfigId',
      mobileNumber: 'MobileNumber',
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      description: 'string',
      email: 'string',
      idpConfigId: 'string',
      mobileNumber: 'string',
      password: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientUserResponseBody extends $tea.Model {
  /**
   * @example
   * 726
   */
  data?: string;
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
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
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClientUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClientUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicRouteRequest extends $tea.Model {
  applicationIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Application
   */
  applicationType?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * connector
   */
  dynamicRouteType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dynamic_route_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 99
   */
  priority?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Disabled
   */
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      description: 'Description',
      dynamicRouteType: 'DynamicRouteType',
      name: 'Name',
      nextHop: 'NextHop',
      priority: 'Priority',
      regionIds: 'RegionIds',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      description: 'string',
      dynamicRouteType: 'string',
      name: 'string',
      nextHop: 'string',
      priority: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicRouteResponseBody extends $tea.Model {
  /**
   * @example
   * dr-ca9fddfac7c6****
   */
  dynamicRouteId?: string;
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRouteId: 'DynamicRouteId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRouteId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDynamicRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDynamicRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDynamicRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdpDepartmentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  departmentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1222
   */
  idpConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentName: 'DepartmentName',
      idpConfigId: 'IdpConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentName: 'string',
      idpConfigId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdpDepartmentResponseBody extends $tea.Model {
  /**
   * @example
   * 726
   */
  data?: string;
  /**
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
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
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIdpDepartmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateIdpDepartmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIdpDepartmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addresses?: string[];
  browserAccessStatus?: string;
  description?: string;
  l7ProxyDomainAutomaticPrefix?: string;
  l7ProxyDomainCustom?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * private_access_application_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  portRanges?: CreatePrivateAccessApplicationRequestPortRanges[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * All
   */
  protocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      browserAccessStatus: 'BrowserAccessStatus',
      description: 'Description',
      l7ProxyDomainAutomaticPrefix: 'L7ProxyDomainAutomaticPrefix',
      l7ProxyDomainCustom: 'L7ProxyDomainCustom',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      browserAccessStatus: 'string',
      description: 'string',
      l7ProxyDomainAutomaticPrefix: 'string',
      l7ProxyDomainCustom: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': CreatePrivateAccessApplicationRequestPortRanges },
      protocol: 'string',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessApplicationResponseBody extends $tea.Model {
  /**
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
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

export class CreatePrivateAccessApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePrivateAccessApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePrivateAccessApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessPolicyRequest extends $tea.Model {
  applicationIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Application
   */
  applicationType?: string;
  customUserAttributes?: CreatePrivateAccessPolicyRequestCustomUserAttributes[];
  description?: string;
  deviceAttributeAction?: string;
  deviceAttributeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * 内网访问标签ID集合。最多可输入100个内网访问标签ID。当**ApplicationType**为**Tag时**，必填。和**ApplicationIds**互斥。
   */
  tagIds?: string[];
  userGroupIds?: string[];
  /**
   * @remarks
   * 内网访问策略的用户组类型。取值：
   * - **Normal**：普通用户组。
   * - **Custom**：自定义用户组。
   * 
   * This parameter is required.
   * 
   * @example
   * Normal
   */
  userGroupMode?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      deviceAttributeAction: 'DeviceAttributeAction',
      deviceAttributeId: 'DeviceAttributeId',
      name: 'Name',
      policyAction: 'PolicyAction',
      priority: 'Priority',
      status: 'Status',
      tagIds: 'TagIds',
      userGroupIds: 'UserGroupIds',
      userGroupMode: 'UserGroupMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': CreatePrivateAccessPolicyRequestCustomUserAttributes },
      description: 'string',
      deviceAttributeAction: 'string',
      deviceAttributeId: 'string',
      name: 'string',
      policyAction: 'string',
      priority: 'number',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userGroupMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * pa-policy-867ef4007c8a****
   */
  policyId?: string;
  /**
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePrivateAccessPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePrivateAccessPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessTagRequest extends $tea.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tag_name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessTagResponseBody extends $tea.Model {
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  /**
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePrivateAccessTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePrivateAccessTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyRequest extends $tea.Model {
  companyLimitCount?: CreateRegistrationPolicyRequestCompanyLimitCount;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LimitAll
   */
  companyLimitType?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registration_policy_name
   */
  name?: string;
  personalLimitCount?: CreateRegistrationPolicyRequestPersonalLimitCount;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LimitDiff
   */
  personalLimitType?: string;
  /**
   * @example
   * 99
   */
  priority?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      companyLimitCount: 'CompanyLimitCount',
      companyLimitType: 'CompanyLimitType',
      description: 'Description',
      matchMode: 'MatchMode',
      name: 'Name',
      personalLimitCount: 'PersonalLimitCount',
      personalLimitType: 'PersonalLimitType',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLimitCount: CreateRegistrationPolicyRequestCompanyLimitCount,
      companyLimitType: 'string',
      description: 'string',
      matchMode: 'string',
      name: 'string',
      personalLimitCount: CreateRegistrationPolicyRequestPersonalLimitCount,
      personalLimitType: 'string',
      priority: 'number',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyShrinkRequest extends $tea.Model {
  companyLimitCountShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LimitAll
   */
  companyLimitType?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registration_policy_name
   */
  name?: string;
  personalLimitCountShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * LimitDiff
   */
  personalLimitType?: string;
  /**
   * @example
   * 99
   */
  priority?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      companyLimitCountShrink: 'CompanyLimitCount',
      companyLimitType: 'CompanyLimitType',
      description: 'Description',
      matchMode: 'MatchMode',
      name: 'Name',
      personalLimitCountShrink: 'PersonalLimitCount',
      personalLimitType: 'PersonalLimitType',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLimitCountShrink: 'string',
      companyLimitType: 'string',
      description: 'string',
      matchMode: 'string',
      name: 'string',
      personalLimitCountShrink: 'string',
      personalLimitType: 'string',
      priority: 'number',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyResponseBody extends $tea.Model {
  policy?: CreateRegistrationPolicyResponseBodyPolicy;
  /**
   * @example
   * FEF1144C-95D1-5F7C-81EF-9DB70EA49FCE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: CreateRegistrationPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRegistrationPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRegistrationPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attributes?: CreateUserGroupRequestAttributes[];
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_group_name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': CreateUserGroupRequestAttributes },
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponseBody extends $tea.Model {
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmBaseImageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 255
   */
  opacity?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  scale?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1920
   */
  width?: number;
  /**
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @example
   * 12*****
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureWebappInvisible
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      opacity: 'Opacity',
      scale: 'Scale',
      width: 'Width',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      opacity: 'number',
      scale: 'number',
      width: 'number',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'string',
      wmType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmBaseImageResponseBody extends $tea.Model {
  data?: CreateWmBaseImageResponseBodyData;
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
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
      data: CreateWmBaseImageResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmBaseImageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWmBaseImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWmBaseImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequest extends $tea.Model {
  documentControl?: CreateWmEmbedTaskRequestDocumentControl;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/abc****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc****.pdf
   */
  filename?: string;
  /**
   * @example
   * 95
   */
  imageEmbedJpegQuality?: number;
  /**
   * @example
   * 2
   */
  imageEmbedLevel?: number;
  /**
   * @example
   * 3000k
   */
  videoBitrate?: string;
  /**
   * @example
   * false
   */
  videoIsLong?: boolean;
  /**
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @example
   * 123***
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      documentControl: 'DocumentControl',
      fileUrl: 'FileUrl',
      filename: 'Filename',
      imageEmbedJpegQuality: 'ImageEmbedJpegQuality',
      imageEmbedLevel: 'ImageEmbedLevel',
      videoBitrate: 'VideoBitrate',
      videoIsLong: 'VideoIsLong',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentControl: CreateWmEmbedTaskRequestDocumentControl,
      fileUrl: 'string',
      filename: 'string',
      imageEmbedJpegQuality: 'number',
      imageEmbedLevel: 'number',
      videoBitrate: 'string',
      videoIsLong: 'boolean',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'string',
      wmType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskShrinkRequest extends $tea.Model {
  documentControlShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/abc****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc****.pdf
   */
  filename?: string;
  /**
   * @example
   * 95
   */
  imageEmbedJpegQuality?: number;
  /**
   * @example
   * 2
   */
  imageEmbedLevel?: number;
  /**
   * @example
   * 3000k
   */
  videoBitrate?: string;
  /**
   * @example
   * false
   */
  videoIsLong?: boolean;
  /**
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @example
   * 123***
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      documentControlShrink: 'DocumentControl',
      fileUrl: 'FileUrl',
      filename: 'Filename',
      imageEmbedJpegQuality: 'ImageEmbedJpegQuality',
      imageEmbedLevel: 'ImageEmbedLevel',
      videoBitrate: 'VideoBitrate',
      videoIsLong: 'VideoIsLong',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentControlShrink: 'string',
      fileUrl: 'string',
      filename: 'string',
      imageEmbedJpegQuality: 'number',
      imageEmbedLevel: 'number',
      videoBitrate: 'string',
      videoIsLong: 'boolean',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'string',
      wmType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskResponseBody extends $tea.Model {
  data?: CreateWmEmbedTaskResponseBodyData;
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
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
      data: CreateWmEmbedTaskResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWmEmbedTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWmEmbedTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmExtractTaskRequest extends $tea.Model {
  /**
   * @example
   * false
   */
  documentIsCapture?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://example.com/test-****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-****.pdf
   */
  filename?: string;
  /**
   * @example
   * false
   */
  videoIsLong?: boolean;
  /**
   * @example
   * 1
   */
  videoSpeed?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      documentIsCapture: 'DocumentIsCapture',
      fileUrl: 'FileUrl',
      filename: 'Filename',
      videoIsLong: 'VideoIsLong',
      videoSpeed: 'VideoSpeed',
      wmInfoSize: 'WmInfoSize',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentIsCapture: 'boolean',
      fileUrl: 'string',
      filename: 'string',
      videoIsLong: 'boolean',
      videoSpeed: 'string',
      wmInfoSize: 'number',
      wmType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmExtractTaskResponseBody extends $tea.Model {
  data?: CreateWmExtractTaskResponseBodyData;
  /**
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
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
      data: CreateWmExtractTaskResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmExtractTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWmExtractTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWmExtractTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmInfoMappingRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmInfoMappingResponseBody extends $tea.Model {
  data?: CreateWmInfoMappingResponseBodyData;
  /**
   * @example
   * 7E9D7ACD-53D5-56EF-A913-79D148D06299
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
      data: CreateWmInfoMappingResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmInfoMappingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWmInfoMappingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWmInfoMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientUserRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 27058
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientUserResponseBody extends $tea.Model {
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
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

export class DeleteClientUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClientUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClientUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDynamicRouteRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dr-ca9fddfac7c6****
   */
  dynamicRouteId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRouteId: 'DynamicRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRouteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDynamicRouteResponseBody extends $tea.Model {
  /**
   * @example
   * 748CFDC7-1EB6-5B8B-9405-DA76ED5BB60D
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

export class DeleteDynamicRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDynamicRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDynamicRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIdpDepartmentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10829
   */
  departmentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 507
   */
  idpConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      idpConfigId: 'IdpConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      idpConfigId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIdpDepartmentResponseBody extends $tea.Model {
  /**
   * @example
   * FEF1144C-95D1-5F7C-81EF-9DB70EA49FCE
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

export class DeleteIdpDepartmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteIdpDepartmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIdpDepartmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrivateAccessApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-application-e12860ef6c48****
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

export class DeletePrivateAccessApplicationResponseBody extends $tea.Model {
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
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

export class DeletePrivateAccessApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePrivateAccessApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePrivateAccessApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrivateAccessPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-policy-867ef4007c8a****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrivateAccessPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
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

export class DeletePrivateAccessPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePrivateAccessPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePrivateAccessPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrivateAccessTagRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePrivateAccessTagResponseBody extends $tea.Model {
  /**
   * @example
   * FD724DBC-CD76-5235-BF76-59C51B73296D
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

export class DeletePrivateAccessTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePrivateAccessTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePrivateAccessTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRegistrationPoliciesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  policyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRegistrationPoliciesResponseBody extends $tea.Model {
  /**
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
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

export class DeleteRegistrationPoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRegistrationPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRegistrationPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDevicesRequest extends $tea.Model {
  deviceTags?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceTags: 'DeviceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceTags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserDevicesResponseBody extends $tea.Model {
  /**
   * @example
   * 5FEF5CFA-14CC-5DE5-BD1F-AFFE0996E71D
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

export class DeleteUserDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupResponseBody extends $tea.Model {
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
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

export class DeleteUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachApplication2ConnectorRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * ConnectorID。
   * 
   * This parameter is required.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      connectorId: 'ConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      connectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachApplication2ConnectorShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIdsShrink?: string;
  /**
   * @remarks
   * ConnectorID。
   * 
   * This parameter is required.
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIdsShrink: 'ApplicationIds',
      connectorId: 'ConnectorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIdsShrink: 'string',
      connectorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachApplication2ConnectorResponseBody extends $tea.Model {
  /**
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
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

export class DetachApplication2ConnectorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachApplication2ConnectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachApplication2ConnectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportUserDevicesRequest extends $tea.Model {
  appStatuses?: string[];
  department?: string;
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  deviceStatuses?: string[];
  deviceTags?: string[];
  deviceTypes?: string[];
  dlpStatuses?: string[];
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  iaStatuses?: string[];
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  nacStatuses?: string[];
  paStatuses?: string[];
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * true
   */
  sharingStatus?: boolean;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appStatuses: 'AppStatuses',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceStatuses: 'DeviceStatuses',
      deviceTags: 'DeviceTags',
      deviceTypes: 'DeviceTypes',
      dlpStatuses: 'DlpStatuses',
      hostname: 'Hostname',
      iaStatuses: 'IaStatuses',
      mac: 'Mac',
      nacStatuses: 'NacStatuses',
      paStatuses: 'PaStatuses',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatuses: { 'type': 'array', 'itemType': 'string' },
      department: 'string',
      deviceBelong: 'string',
      deviceStatuses: { 'type': 'array', 'itemType': 'string' },
      deviceTags: { 'type': 'array', 'itemType': 'string' },
      deviceTypes: { 'type': 'array', 'itemType': 'string' },
      dlpStatuses: { 'type': 'array', 'itemType': 'string' },
      hostname: 'string',
      iaStatuses: { 'type': 'array', 'itemType': 'string' },
      mac: 'string',
      nacStatuses: { 'type': 'array', 'itemType': 'string' },
      paStatuses: { 'type': 'array', 'itemType': 'string' },
      saseUserId: 'string',
      sharingStatus: 'boolean',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportUserDevicesResponseBody extends $tea.Model {
  /**
   * @example
   * 748CFDC7-1EB6-5B8B-9405-DA76ED5BB60D
   */
  requestId?: string;
  /**
   * @example
   * https://sase-export.oss-cn-hangzhou.aliyuncs.com/export%2Fapp-device%2F20240607154831.xlsx?Expires=1717746571&OSSAccessKeyId=********************
   */
  signedUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      signedUrl: 'SignedUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      signedUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportUserDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportUserDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportUserDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActiveIdpConfigResponseBody extends $tea.Model {
  data?: GetActiveIdpConfigResponseBodyData;
  /**
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
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
      data: GetActiveIdpConfigResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActiveIdpConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetActiveIdpConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetActiveIdpConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientUserRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 598
   */
  idpConfigId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      idpConfigId: 'IdpConfigId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpConfigId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientUserResponseBody extends $tea.Model {
  data?: GetClientUserResponseBodyData;
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
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
      data: GetClientUserResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClientUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetClientUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicRouteRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dr-16ff07c8207d****
   */
  dynamicRouteId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRouteId: 'DynamicRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRouteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicRouteResponseBody extends $tea.Model {
  dynamicRoute?: GetDynamicRouteResponseBodyDynamicRoute;
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRoute: 'DynamicRoute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRoute: GetDynamicRouteResponseBodyDynamicRoute,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDynamicRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDynamicRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdpConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1465
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdpConfigResponseBody extends $tea.Model {
  data?: GetIdpConfigResponseBodyData;
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
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
      data: GetIdpConfigResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdpConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIdpConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetIdpConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-application-e12860ef6c48****
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

export class GetPrivateAccessApplicationResponseBody extends $tea.Model {
  application?: GetPrivateAccessApplicationResponseBodyApplication;
  /**
   * @example
   * 3ACC5EDC-2B7D-5032-8C58-D7615D66C1D4
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
      application: GetPrivateAccessApplicationResponseBodyApplication,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPrivateAccessApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPrivateAccessApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-policy-63b2f1844b86****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessPolicyResponseBody extends $tea.Model {
  policy?: GetPrivateAccessPolicyResponseBodyPolicy;
  /**
   * @example
   * 7E9D7ACD-53D5-56EF-A913-79D148D06299
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: GetPrivateAccessPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPrivateAccessPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPrivateAccessPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegistrationPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * reg-policy-dcbfd33cb004****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegistrationPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  description?: string;
  limitDetail?: GetRegistrationPolicyResponseBodyLimitDetail[];
  /**
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  /**
   * @example
   * reg-policy-dcbfd33cb004****
   */
  policyId?: string;
  /**
   * @example
   * 99
   */
  priority?: number;
  /**
   * @example
   * 47363C2B-1AAA-5954-8847-0E50FCC54117
   */
  requestId?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      limitDetail: 'LimitDetail',
      matchMode: 'MatchMode',
      name: 'Name',
      policyId: 'PolicyId',
      priority: 'Priority',
      requestId: 'RequestId',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      limitDetail: { 'type': 'array', 'itemType': GetRegistrationPolicyResponseBodyLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'number',
      requestId: 'string',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegistrationPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRegistrationPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRegistrationPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeviceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  static names(): { [key: string]: string } {
    return {
      deviceTag: 'DeviceTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeviceResponseBody extends $tea.Model {
  device?: GetUserDeviceResponseBodyDevice;
  /**
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      device: 'Device',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      device: GetUserDeviceResponseBodyDevice,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponseBody extends $tea.Model {
  /**
   * @example
   * 1310DBC7-7E1F-55D3-B4B4-E4BE912517FB
   */
  requestId?: string;
  userGroup?: GetUserGroupResponseBodyUserGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userGroup: GetUserGroupResponseBodyUserGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmEmbedTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job:5GfrJYsoaffmCE7Z5bZtjU********
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmEmbedTaskResponseBody extends $tea.Model {
  data?: GetWmEmbedTaskResponseBodyData;
  /**
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
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
      data: GetWmEmbedTaskResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmEmbedTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWmEmbedTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWmEmbedTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmExtractTaskRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wmt-9648c22d2eb2cb57bb855dcae7898464********
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmExtractTaskResponseBody extends $tea.Model {
  data?: GetWmExtractTaskResponseBodyData;
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
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
      data: GetWmExtractTaskResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmExtractTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWmExtractTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWmExtractTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  policyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessPolicyResponseBody extends $tea.Model {
  polices?: ListApplicationsForPrivateAccessPolicyResponseBodyPolices[];
  /**
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessPolicyResponseBodyPolices },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationsForPrivateAccessPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationsForPrivateAccessPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessTagRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessTagResponseBody extends $tea.Model {
  /**
   * @example
   * B608C6AE-623D-55C4-9454-601B88AE937E
   */
  requestId?: string;
  tags?: ListApplicationsForPrivateAccessTagResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessTagResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationsForPrivateAccessTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationsForPrivateAccessTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientUsersRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10785
   */
  departmentId?: string;
  /**
   * @example
   * johndoe@example.com
   */
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1071
   */
  idpConfigId?: string;
  /**
   * @example
   * 18980976559
   */
  mobileNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      departmentId: 'DepartmentId',
      email: 'Email',
      idpConfigId: 'IdpConfigId',
      mobileNumber: 'MobileNumber',
      pageSize: 'PageSize',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      departmentId: 'string',
      email: 'string',
      idpConfigId: 'string',
      mobileNumber: 'string',
      pageSize: 'number',
      status: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientUsersResponseBody extends $tea.Model {
  data?: ListClientUsersResponseBodyData;
  /**
   * @example
   * FEF1144C-95D1-5F7C-81EF-9DB70EA49FCE
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
      data: ListClientUsersResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClientUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClientUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsRequest extends $tea.Model {
  connectorIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * connector_name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  status?: string;
  switchStatus?: string;
  static names(): { [key: string]: string } {
    return {
      connectorIds: 'ConnectorIds',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      status: 'Status',
      switchStatus: 'SwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorIds: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      status: 'string',
      switchStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBody extends $tea.Model {
  connectors?: ListConnectorsResponseBodyConnectors[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      connectors: 'Connectors',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectors: { 'type': 'array', 'itemType': ListConnectorsResponseBodyConnectors },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConnectorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConnectorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicRouteRegionsResponseBody extends $tea.Model {
  regions?: string[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicRouteRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDynamicRouteRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDynamicRouteRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicRoutesRequest extends $tea.Model {
  /**
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  dynamicRouteIds?: string[];
  /**
   * @example
   * dynamic_route_name
   */
  name?: string;
  /**
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionIds?: string[];
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      currentPage: 'CurrentPage',
      dynamicRouteIds: 'DynamicRouteIds',
      name: 'Name',
      nextHop: 'NextHop',
      pageSize: 'PageSize',
      regionIds: 'RegionIds',
      status: 'Status',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      currentPage: 'number',
      dynamicRouteIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      nextHop: 'string',
      pageSize: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicRoutesResponseBody extends $tea.Model {
  dynamicRoutes?: ListDynamicRoutesResponseBodyDynamicRoutes[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      dynamicRoutes: 'DynamicRoutes',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRoutes: { 'type': 'array', 'itemType': ListDynamicRoutesResponseBodyDynamicRoutes },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicRoutesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDynamicRoutesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDynamicRoutesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExcessiveDeviceRegistrationApplicationsRequest extends $tea.Model {
  applicationIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  department?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
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
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  statuses?: string[];
  username?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      currentPage: 'CurrentPage',
      department: 'Department',
      deviceTag: 'DeviceTag',
      hostname: 'Hostname',
      mac: 'Mac',
      pageSize: 'PageSize',
      saseUserId: 'SaseUserId',
      statuses: 'Statuses',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'number',
      department: 'string',
      deviceTag: 'string',
      hostname: 'string',
      mac: 'string',
      pageSize: 'number',
      saseUserId: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExcessiveDeviceRegistrationApplicationsResponseBody extends $tea.Model {
  applications?: ListExcessiveDeviceRegistrationApplicationsResponseBodyApplications[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListExcessiveDeviceRegistrationApplicationsResponseBodyApplications },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExcessiveDeviceRegistrationApplicationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExcessiveDeviceRegistrationApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListExcessiveDeviceRegistrationApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpConfigsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * CSAS,DingTalk,LDAP
   */
  include?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      include: 'Include',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      include: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpConfigsResponseBody extends $tea.Model {
  data?: ListIdpConfigsResponseBodyData;
  /**
   * @example
   * FD724DBC-CD76-5235-BF76-59C51B73296D
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
      data: ListIdpConfigsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIdpConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIdpConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpDepartmentsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1440
   */
  idpConfigId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      idpConfigId: 'IdpConfigId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      idpConfigId: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpDepartmentsResponseBody extends $tea.Model {
  data?: ListIdpDepartmentsResponseBodyData;
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
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
      data: ListIdpDepartmentsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpDepartmentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListIdpDepartmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIdpDepartmentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacUserCertRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  currentPage?: string;
  department?: string;
  /**
   * @example
   * windows
   */
  deviceType?: string;
  /**
   * @example
   * 1702770400
   */
  endTime?: number;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 1702260834
   */
  startTime?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * zhang**
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      department: 'Department',
      deviceType: 'DeviceType',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      department: 'string',
      deviceType: 'string',
      endTime: 'number',
      pageSize: 'string',
      startTime: 'number',
      status: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacUserCertResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  dataList?: ListNacUserCertResponseBodyDataList[];
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dataList: 'DataList',
      message: 'Message',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      dataList: { 'type': 'array', 'itemType': ListNacUserCertResponseBodyDataList },
      message: 'string',
      requestId: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacUserCertResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNacUserCertResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNacUserCertResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessApplicationResponseBody extends $tea.Model {
  applications?: ListPolicesForPrivateAccessApplicationResponseBodyApplications[];
  /**
   * @example
   * 4AB972E2-D702-5464-B132-B1911498B8BF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessApplicationResponseBodyApplications },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicesForPrivateAccessApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPolicesForPrivateAccessApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessTagRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessTagResponseBody extends $tea.Model {
  /**
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
   */
  requestId?: string;
  tags?: ListPolicesForPrivateAccessTagResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessTagResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicesForPrivateAccessTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPolicesForPrivateAccessTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForUserGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForUserGroupResponseBody extends $tea.Model {
  /**
   * @example
   * 5F04DFBD-3F48-5F70-AE72-474026670128
   */
  requestId?: string;
  userGroups?: ListPolicesForUserGroupResponseBodyUserGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userGroups: { 'type': 'array', 'itemType': ListPolicesForUserGroupResponseBodyUserGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPolicesForUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPolicesForUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPopTrafficStatisticsRequest extends $tea.Model {
  /**
   * @example
   * 1681293719
   */
  endTime?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 1681035708
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      region: 'Region',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      region: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPopTrafficStatisticsResponseBody extends $tea.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
   */
  requestId?: string;
  trafficData?: ListPopTrafficStatisticsResponseBodyTrafficData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficData: 'TrafficData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficData: { 'type': 'array', 'itemType': ListPopTrafficStatisticsResponseBodyTrafficData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPopTrafficStatisticsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPopTrafficStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPopTrafficStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsRequest extends $tea.Model {
  accessModes?: string;
  /**
   * @example
   * 192.168.0.0/16
   */
  address?: string;
  applicationIds?: string[];
  connectorId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * private_access_application_name
   */
  name?: string;
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
   * pa-policy-54a7838a48bf****
   */
  policyId?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      accessModes: 'AccessModes',
      address: 'Address',
      applicationIds: 'ApplicationIds',
      connectorId: 'ConnectorId',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      status: 'Status',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessModes: 'string',
      address: 'string',
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      connectorId: 'string',
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      policyId: 'string',
      status: 'string',
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsResponseBody extends $tea.Model {
  applications?: ListPrivateAccessApplicationsResponseBodyApplications[];
  /**
   * @example
   * 748CFDC7-1EB6-5B8B-9405-DA76ED5BB60D
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListPrivateAccessApplicationsResponseBodyApplications },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPrivateAccessApplicationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPrivateAccessApplicationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsForDynamicRouteRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dynamicRouteIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dynamicRouteIds: 'DynamicRouteIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRouteIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsForDynamicRouteResponseBody extends $tea.Model {
  dynamicRoutes?: ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutes[];
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRoutes: 'DynamicRoutes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRoutes: { 'type': 'array', 'itemType': ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsForDynamicRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPrivateAccessApplicationsForDynamicRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPrivateAccessApplicationsForDynamicRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessPolicesRequest extends $tea.Model {
  /**
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  applicationName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
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
   * Allow
   */
  policyAction?: string;
  policyIds?: string[];
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * tag-c0cb77857a99****
   */
  tagId?: string;
  tagName?: string;
  /**
   * @remarks
   * 用户组ID。取值来源：
   * - [ListUserGroups](~~ListUserGroups~~)：批量查询用户组。
   * - [CreateUserGroup](~~CreateUserGroup~~)：创建用户组。
   * 
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      policyAction: 'PolicyAction',
      policyIds: 'PolicyIds',
      status: 'Status',
      tagId: 'TagId',
      tagName: 'TagName',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      policyAction: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tagId: 'string',
      tagName: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessPolicesResponseBody extends $tea.Model {
  polices?: ListPrivateAccessPolicesResponseBodyPolices[];
  /**
   * @example
   * 748CFDC7-1EB6-5B8B-9405-DA76ED5BB60D
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListPrivateAccessPolicesResponseBodyPolices },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessPolicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPrivateAccessPolicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPrivateAccessPolicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the internal access application. You can obtain the application ID by calling the following operations:
   * 
   * *   [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): queries all internal access applications.
   * *   [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~): creates an internal access application.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * The page number. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the internal access tag. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the internal access policy. You can obtain the policy ID by calling the following operations:
   * 
   * *   [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~): queries all internal access policies.
   * *   [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~): creates an internal access policy.
   * 
   * @example
   * pa-policy-54a7838a48bf****
   */
  policyId?: string;
  /**
   * @remarks
   * Specifies whether to enable the simple query mode. A value of true specifies that policy IDs are not queried.
   * 
   * @example
   * true
   */
  simpleMode?: boolean;
  /**
   * @remarks
   * The IDs of internal access tags. You can specify up to 100 tag IDs.
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      simpleMode: 'SimpleMode',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      policyId: 'string',
      simpleMode: 'boolean',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54C1D236-CDB9-586C-B44D-AFDCEA195545
   */
  requestId?: string;
  /**
   * @remarks
   * The internal access tags.
   */
  tags?: ListPrivateAccessTagsResponseBodyTags[];
  /**
   * @remarks
   * The total number of internal access tags.
   * 
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': ListPrivateAccessTagsResponseBodyTags },
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPrivateAccessTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPrivateAccessTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsForDynamicRouteRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dynamicRouteIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dynamicRouteIds: 'DynamicRouteIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRouteIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsForDynamicRouteResponseBody extends $tea.Model {
  dynamicRoutes?: ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutes[];
  /**
   * @example
   * B608C6AE-623D-55C4-9454-601B88AE937E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRoutes: 'DynamicRoutes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRoutes: { 'type': 'array', 'itemType': ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsForDynamicRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPrivateAccessTagsForDynamicRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPrivateAccessTagsForDynamicRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesRequest extends $tea.Model {
  /**
   * @example
   * LimitAll
   */
  companyLimitType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
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
   * LimitDiff
   */
  personalLimitType?: string;
  policyIds?: string[];
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      companyLimitType: 'CompanyLimitType',
      currentPage: 'CurrentPage',
      matchMode: 'MatchMode',
      name: 'Name',
      pageSize: 'PageSize',
      personalLimitType: 'PersonalLimitType',
      policyIds: 'PolicyIds',
      status: 'Status',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLimitType: 'string',
      currentPage: 'number',
      matchMode: 'string',
      name: 'string',
      pageSize: 'number',
      personalLimitType: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesResponseBody extends $tea.Model {
  policies?: ListRegistrationPoliciesResponseBodyPolicies[];
  /**
   * @example
   * 7A8FE38A-E29C-5678-B84A-FEDBCB83552F
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListRegistrationPoliciesResponseBodyPolicies },
      requestId: 'string',
      totalNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegistrationPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRegistrationPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  userGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupResponseBody extends $tea.Model {
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  userGroups?: ListRegistrationPoliciesForUserGroupResponseBodyUserGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userGroups: { 'type': 'array', 'itemType': ListRegistrationPoliciesForUserGroupResponseBodyUserGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegistrationPoliciesForUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRegistrationPoliciesForUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwareForUserDeviceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
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
      currentPage: 'CurrentPage',
      deviceTag: 'DeviceTag',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      deviceTag: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwareForUserDeviceResponseBody extends $tea.Model {
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  software?: ListSoftwareForUserDeviceResponseBodySoftware[];
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      software: 'Software',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      software: { 'type': 'array', 'itemType': ListSoftwareForUserDeviceResponseBodySoftware },
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwareForUserDeviceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSoftwareForUserDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSoftwareForUserDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessApplicationRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessApplicationResponseBody extends $tea.Model {
  applications?: ListTagsForPrivateAccessApplicationResponseBodyApplications[];
  /**
   * @example
   * 7241F45B-E8D3-5BA3-8172-8A58AC2AB0FC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListTagsForPrivateAccessApplicationResponseBodyApplications },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagsForPrivateAccessApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagsForPrivateAccessApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  policyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessPolicyResponseBody extends $tea.Model {
  polices?: ListTagsForPrivateAccessPolicyResponseBodyPolices[];
  /**
   * @example
   * 9EE61139-A6A8-5E13-80AF-83435C21B26B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListTagsForPrivateAccessPolicyResponseBodyPolices },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagsForPrivateAccessPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagsForPrivateAccessPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDevicesRequest extends $tea.Model {
  appStatuses?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  department?: string;
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  deviceStatuses?: string[];
  deviceTags?: string[];
  deviceTypes?: string[];
  dlpStatuses?: string[];
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  iaStatuses?: string[];
  innerIp?: string;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  nacStatuses?: string[];
  paStatuses?: string[];
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
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * true
   */
  sharingStatus?: boolean;
  sortBy?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appStatuses: 'AppStatuses',
      currentPage: 'CurrentPage',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceStatuses: 'DeviceStatuses',
      deviceTags: 'DeviceTags',
      deviceTypes: 'DeviceTypes',
      dlpStatuses: 'DlpStatuses',
      hostname: 'Hostname',
      iaStatuses: 'IaStatuses',
      innerIp: 'InnerIp',
      mac: 'Mac',
      nacStatuses: 'NacStatuses',
      paStatuses: 'PaStatuses',
      pageSize: 'PageSize',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      sortBy: 'SortBy',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatuses: { 'type': 'array', 'itemType': 'string' },
      currentPage: 'number',
      department: 'string',
      deviceBelong: 'string',
      deviceStatuses: { 'type': 'array', 'itemType': 'string' },
      deviceTags: { 'type': 'array', 'itemType': 'string' },
      deviceTypes: { 'type': 'array', 'itemType': 'string' },
      dlpStatuses: { 'type': 'array', 'itemType': 'string' },
      hostname: 'string',
      iaStatuses: { 'type': 'array', 'itemType': 'string' },
      innerIp: 'string',
      mac: 'string',
      nacStatuses: { 'type': 'array', 'itemType': 'string' },
      paStatuses: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'number',
      saseUserId: 'string',
      sharingStatus: 'boolean',
      sortBy: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDevicesResponseBody extends $tea.Model {
  devices?: ListUserDevicesResponseBodyDevices[];
  /**
   * @example
   * 5FEF5CFA-14CC-5DE5-BD1F-AFFE0996E71D
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': ListUserDevicesResponseBodyDevices },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDevicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserDevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserDevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsRequest extends $tea.Model {
  /**
   * @example
   * username
   */
  attributeValue?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * 用户组名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
   * 
   * @example
   * user_group_name
   */
  name?: string;
  /**
   * @example
   * pa-policy-54a7838a48bf****
   */
  PAPolicyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  userGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      attributeValue: 'AttributeValue',
      currentPage: 'CurrentPage',
      name: 'Name',
      PAPolicyId: 'PAPolicyId',
      pageSize: 'PageSize',
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeValue: 'string',
      currentPage: 'number',
      name: 'string',
      PAPolicyId: 'string',
      pageSize: 'number',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBody extends $tea.Model {
  /**
   * @example
   * 4AB972E2-D702-5464-B132-B1911498B8BF
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  userGroups?: ListUserGroupsResponseBodyUserGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalNum: 'number',
      userGroups: { 'type': 'array', 'itemType': ListUserGroupsResponseBodyUserGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForPrivateAccessPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  policyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForPrivateAccessPolicyResponseBody extends $tea.Model {
  polices?: ListUserGroupsForPrivateAccessPolicyResponseBodyPolices[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListUserGroupsForPrivateAccessPolicyResponseBodyPolices },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForPrivateAccessPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserGroupsForPrivateAccessPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserGroupsForPrivateAccessPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForRegistrationPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  policyIds?: string[];
  static names(): { [key: string]: string } {
    return {
      policyIds: 'PolicyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForRegistrationPolicyResponseBody extends $tea.Model {
  policies?: ListUserGroupsForRegistrationPolicyResponseBodyPolicies[];
  /**
   * @example
   * D89009C7-54C6-51B6-BAE7-3F373920C6BF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListUserGroupsForRegistrationPolicyResponseBodyPolicies },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForRegistrationPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserGroupsForRegistrationPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserGroupsForRegistrationPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  department?: string;
  fuzzyUsername?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  preciseUsername?: string;
  saseUserIds?: string[];
  /**
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      department: 'Department',
      fuzzyUsername: 'FuzzyUsername',
      pageSize: 'PageSize',
      preciseUsername: 'PreciseUsername',
      saseUserIds: 'SaseUserIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      department: 'string',
      fuzzyUsername: 'string',
      pageSize: 'number',
      preciseUsername: 'string',
      saseUserIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  /**
   * @example
   * 5FEF5CFA-14CC-5DE5-BD1F-AFFE0996E71D
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: string;
  users?: ListUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalNum: 'string',
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

export class LookupWmInfoMappingRequest extends $tea.Model {
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wmInfoSize: 'number',
      wmInfoUint: 'string',
      wmType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupWmInfoMappingResponseBody extends $tea.Model {
  data?: LookupWmInfoMappingResponseBodyData;
  /**
   * @example
   * 7E9D7ACD-53D5-56EF-A913-79D148D06299
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
      data: LookupWmInfoMappingResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupWmInfoMappingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LookupWmInfoMappingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LookupWmInfoMappingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeUserSessionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  externalIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * idp-cfg9vcrqylo39c39uxnw
   */
  idpId?: string;
  static names(): { [key: string]: string } {
    return {
      externalIds: 'ExternalIds',
      idpId: 'IdpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIds: 'string',
      idpId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokeUserSessionResponseBody extends $tea.Model {
  /**
   * @example
   * D6707286-A50E-57B1-B2CF-EFAC59E850D8
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

export class RevokeUserSessionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RevokeUserSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RevokeUserSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientUserRequest extends $tea.Model {
  /**
   * @example
   * 10701
   */
  departmentId?: string;
  description?: string;
  /**
   * @example
   * johndoe@example.com
   */
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20644
   */
  id?: string;
  /**
   * @example
   * 13641966835
   */
  mobileNumber?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      description: 'Description',
      email: 'Email',
      id: 'Id',
      mobileNumber: 'MobileNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      description: 'string',
      email: 'string',
      id: 'string',
      mobileNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientUserResponseBody extends $tea.Model {
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
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

export class UpdateClientUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateClientUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateClientUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientUserPasswordRequest extends $tea.Model {
  /**
   * @example
   * 1128
   */
  id?: string;
  /**
   * @example
   * kehudiyidj
   */
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      password: 'Password',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      password: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientUserPasswordResponseBody extends $tea.Model {
  /**
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
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

export class UpdateClientUserPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateClientUserPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateClientUserPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientUserStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1495
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClientUserStatusResponseBody extends $tea.Model {
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
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

export class UpdateClientUserStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateClientUserStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateClientUserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDynamicRouteRequest extends $tea.Model {
  applicationIds?: string[];
  /**
   * @example
   * Application
   */
  applicationType?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dr-ca9fddfac7c6****
   */
  dynamicRouteId?: string;
  /**
   * @example
   * connector
   */
  dynamicRouteType?: string;
  /**
   * @example
   * Cover
   */
  modifyType?: string;
  /**
   * @example
   * dynamic_route_name
   */
  name?: string;
  /**
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @example
   * 99
   */
  priority?: number;
  regionIds?: string[];
  /**
   * @example
   * Disabled
   */
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      description: 'Description',
      dynamicRouteId: 'DynamicRouteId',
      dynamicRouteType: 'DynamicRouteType',
      modifyType: 'ModifyType',
      name: 'Name',
      nextHop: 'NextHop',
      priority: 'Priority',
      regionIds: 'RegionIds',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      description: 'string',
      dynamicRouteId: 'string',
      dynamicRouteType: 'string',
      modifyType: 'string',
      name: 'string',
      nextHop: 'string',
      priority: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDynamicRouteResponseBody extends $tea.Model {
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
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

export class UpdateDynamicRouteResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDynamicRouteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDynamicRouteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExcessiveDeviceRegistrationApplicationsStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Approved
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBody extends $tea.Model {
  applications?: UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications[];
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExcessiveDeviceRegistrationApplicationsStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdpDepartmentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10653
   */
  departmentId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  departmentName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 598
   */
  idpConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
      idpConfigId: 'IdpConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      departmentName: 'string',
      idpConfigId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIdpDepartmentResponseBody extends $tea.Model {
  /**
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
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

export class UpdateIdpDepartmentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateIdpDepartmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateIdpDepartmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacUserCertStatusRequest extends $tea.Model {
  idList?: UpdateNacUserCertStatusRequestIdList[];
  /**
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      idList: 'IdList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idList: { 'type': 'array', 'itemType': UpdateNacUserCertStatusRequestIdList },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacUserCertStatusResponseBody extends $tea.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacUserCertStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNacUserCertStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNacUserCertStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessApplicationRequest extends $tea.Model {
  addresses?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * **if can be null:**
   * true
   */
  description?: string;
  l7ProxyDomainAutomaticPrefix?: string;
  l7ProxyDomainCustom?: string;
  l7ProxyDomainPrivate?: string;
  /**
   * @example
   * Cover
   */
  modifyType?: string;
  portRanges?: UpdatePrivateAccessApplicationRequestPortRanges[];
  /**
   * @example
   * All
   */
  protocol?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * **if can be null:**
   * true
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      description: 'Description',
      l7ProxyDomainAutomaticPrefix: 'L7ProxyDomainAutomaticPrefix',
      l7ProxyDomainCustom: 'L7ProxyDomainCustom',
      l7ProxyDomainPrivate: 'L7ProxyDomainPrivate',
      modifyType: 'ModifyType',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      description: 'string',
      l7ProxyDomainAutomaticPrefix: 'string',
      l7ProxyDomainCustom: 'string',
      l7ProxyDomainPrivate: 'string',
      modifyType: 'string',
      portRanges: { 'type': 'array', 'itemType': UpdatePrivateAccessApplicationRequestPortRanges },
      protocol: 'string',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessApplicationResponseBody extends $tea.Model {
  /**
   * @example
   * FD724DBC-CD76-5235-BF76-59C51B73296D
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

export class UpdatePrivateAccessApplicationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePrivateAccessApplicationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePrivateAccessApplicationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessPolicyRequest extends $tea.Model {
  applicationIds?: string[];
  /**
   * @example
   * Application
   */
  applicationType?: string;
  customUserAttributes?: UpdatePrivateAccessPolicyRequestCustomUserAttributes[];
  /**
   * **if can be null:**
   * true
   */
  description?: string;
  deviceAttributeAction?: string;
  deviceAttributeId?: string;
  /**
   * @example
   * Cover
   */
  modifyType?: string;
  /**
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * 内网访问标签ID集合。一条策略最多支持100个内网访问标签ID。
   */
  tagIds?: string[];
  userGroupIds?: string[];
  /**
   * @remarks
   * 内网访问策略的用户组类型。取值：
   * - **Normal**：普通用户组。
   * - **Custom**：自定义用户组。
   * 
   * @example
   * Normal
   */
  userGroupMode?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      deviceAttributeAction: 'DeviceAttributeAction',
      deviceAttributeId: 'DeviceAttributeId',
      modifyType: 'ModifyType',
      policyAction: 'PolicyAction',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      tagIds: 'TagIds',
      userGroupIds: 'UserGroupIds',
      userGroupMode: 'UserGroupMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': UpdatePrivateAccessPolicyRequestCustomUserAttributes },
      description: 'string',
      deviceAttributeAction: 'string',
      deviceAttributeId: 'string',
      modifyType: 'string',
      policyAction: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userGroupMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 5FEF5CFA-14CC-5DE5-BD1F-AFFE0996E71D
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

export class UpdatePrivateAccessPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePrivateAccessPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePrivateAccessPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyRequest extends $tea.Model {
  companyLimitCount?: UpdateRegistrationPolicyRequestCompanyLimitCount;
  /**
   * @example
   * LimitAll
   */
  companyLimitType?: string;
  description?: string;
  /**
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  personalLimitCount?: UpdateRegistrationPolicyRequestPersonalLimitCount;
  /**
   * @example
   * LimitDiff
   */
  personalLimitType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * reg-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @example
   * 0
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      companyLimitCount: 'CompanyLimitCount',
      companyLimitType: 'CompanyLimitType',
      description: 'Description',
      matchMode: 'MatchMode',
      name: 'Name',
      personalLimitCount: 'PersonalLimitCount',
      personalLimitType: 'PersonalLimitType',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLimitCount: UpdateRegistrationPolicyRequestCompanyLimitCount,
      companyLimitType: 'string',
      description: 'string',
      matchMode: 'string',
      name: 'string',
      personalLimitCount: UpdateRegistrationPolicyRequestPersonalLimitCount,
      personalLimitType: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyShrinkRequest extends $tea.Model {
  companyLimitCountShrink?: string;
  /**
   * @example
   * LimitAll
   */
  companyLimitType?: string;
  description?: string;
  /**
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  personalLimitCountShrink?: string;
  /**
   * @example
   * LimitDiff
   */
  personalLimitType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * reg-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @example
   * 0
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      companyLimitCountShrink: 'CompanyLimitCount',
      companyLimitType: 'CompanyLimitType',
      description: 'Description',
      matchMode: 'MatchMode',
      name: 'Name',
      personalLimitCountShrink: 'PersonalLimitCount',
      personalLimitType: 'PersonalLimitType',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLimitCountShrink: 'string',
      companyLimitType: 'string',
      description: 'string',
      matchMode: 'string',
      name: 'string',
      personalLimitCountShrink: 'string',
      personalLimitType: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyResponseBody extends $tea.Model {
  policy?: UpdateRegistrationPolicyResponseBodyPolicy;
  /**
   * @example
   * 27064ECA-0936-59F3-8A98-EC821E5BD08F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: UpdateRegistrationPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRegistrationPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRegistrationPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesSharingStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceTags?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  sharingStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      deviceTags: 'DeviceTags',
      sharingStatus: 'SharingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceTags: { 'type': 'array', 'itemType': 'string' },
      sharingStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesSharingStatusResponseBody extends $tea.Model {
  devices?: UpdateUserDevicesSharingStatusResponseBodyDevices[];
  /**
   * @example
   * 4D169859-A4F2-5EC8-853B-8447787C0D8A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': UpdateUserDevicesSharingStatusResponseBodyDevices },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesSharingStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserDevicesSharingStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserDevicesSharingStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Unbound
   */
  deviceAction?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceTags?: string[];
  static names(): { [key: string]: string } {
    return {
      deviceAction: 'DeviceAction',
      deviceTags: 'DeviceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceAction: 'string',
      deviceTags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesStatusResponseBody extends $tea.Model {
  devices?: UpdateUserDevicesStatusResponseBodyDevices[];
  /**
   * @example
   * 5FEF5CFA-14CC-5DE5-BD1F-AFFE0996E71D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      devices: 'Devices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devices: { 'type': 'array', 'itemType': UpdateUserDevicesStatusResponseBodyDevices },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserDevicesStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserDevicesStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupRequest extends $tea.Model {
  attributes?: UpdateUserGroupRequestAttributes[];
  /**
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @example
   * Cover
   */
  modifyType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      description: 'Description',
      modifyType: 'ModifyType',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': UpdateUserGroupRequestAttributes },
      description: 'string',
      modifyType: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupResponseBody extends $tea.Model {
  /**
   * @example
   * FD724DBC-CD76-5235-BF76-59C51B73296D
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

export class UpdateUserGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUsersStatusRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  saseUserIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      saseUserIds: 'SaseUserIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUsersStatusResponseBody extends $tea.Model {
  /**
   * @example
   * 47363C2B-1AAA-5954-8847-0E50FCC54117
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

export class UpdateUsersStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUsersStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUsersStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessApplicationRequestPortRanges extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 80
   */
  begin?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrivateAccessPolicyRequestCustomUserAttributes extends $tea.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyRequestCompanyLimitCount extends $tea.Model {
  /**
   * @example
   * 1
   */
  all?: number;
  /**
   * @example
   * 0
   */
  mobile?: number;
  /**
   * @example
   * 0
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyRequestPersonalLimitCount extends $tea.Model {
  /**
   * @example
   * 0
   */
  all?: number;
  /**
   * @example
   * 3
   */
  mobile?: number;
  /**
   * @example
   * 2
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount extends $tea.Model {
  /**
   * @example
   * 0
   */
  all?: number;
  /**
   * @example
   * 3
   */
  mobile?: number;
  /**
   * @example
   * 2
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyResponseBodyPolicyLimitDetail extends $tea.Model {
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  limitCount?: CreateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount;
  /**
   * @example
   * LimitDiff
   */
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBelong: 'DeviceBelong',
      limitCount: 'LimitCount',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBelong: 'string',
      limitCount: CreateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount,
      limitType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRegistrationPolicyResponseBodyPolicy extends $tea.Model {
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  description?: string;
  limitDetail?: CreateRegistrationPolicyResponseBodyPolicyLimitDetail[];
  /**
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  /**
   * @example
   * reg-policy-dcbfd33cb004****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      limitDetail: 'LimitDetail',
      matchMode: 'MatchMode',
      name: 'Name',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      limitDetail: { 'type': 'array', 'itemType': CreateRegistrationPolicyResponseBodyPolicyLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'string',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUserGroupRequestAttributes extends $tea.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmBaseImageResponseBodyData extends $tea.Model {
  /**
   * @example
   * fafb432cdede9b20640e12105845386e-496883833-8242409229217337*****
   */
  imageId?: string;
  /**
   * @example
   * https://example.com/test-*****.png
   */
  imageUrl?: string;
  /**
   * @example
   * 17185*****
   */
  imageUrlExp?: number;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      imageUrlExp: 'ImageUrlExp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageUrl: 'string',
      imageUrlExp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgInvisibleControl extends $tea.Model {
  /**
   * @example
   * 10
   */
  opacity?: number;
  static names(): { [key: string]: string } {
    return {
      opacity: 'Opacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgVisibleControl extends $tea.Model {
  /**
   * @example
   * 30
   */
  angle?: number;
  /**
   * @example
   * 0x000000
   */
  fontColor?: string;
  /**
   * @example
   * 30
   */
  fontSize?: number;
  /**
   * @example
   * 3
   */
  horizontalNumber?: number;
  /**
   * @example
   * pos
   */
  mode?: string;
  /**
   * @example
   * 100
   */
  opacity?: number;
  /**
   * @example
   * 0.5
   */
  posX?: string;
  /**
   * @example
   * 0.5
   */
  posY?: string;
  /**
   * @example
   * 3
   */
  verticalNumber?: number;
  /**
   * @example
   * hello ****
   */
  visibleText?: string;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      horizontalNumber: 'HorizontalNumber',
      mode: 'Mode',
      opacity: 'Opacity',
      posX: 'PosX',
      posY: 'PosY',
      verticalNumber: 'VerticalNumber',
      visibleText: 'VisibleText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      fontColor: 'string',
      fontSize: 'number',
      horizontalNumber: 'number',
      mode: 'string',
      opacity: 'number',
      posX: 'string',
      posY: 'string',
      verticalNumber: 'number',
      visibleText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControlBackgroundControl extends $tea.Model {
  /**
   * @example
   * true
   */
  bgAddInvisible?: boolean;
  /**
   * @example
   * true
   */
  bgAddVisible?: boolean;
  bgInvisibleControl?: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgInvisibleControl;
  bgVisibleControl?: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgVisibleControl;
  static names(): { [key: string]: string } {
    return {
      bgAddInvisible: 'BgAddInvisible',
      bgAddVisible: 'BgAddVisible',
      bgInvisibleControl: 'BgInvisibleControl',
      bgVisibleControl: 'BgVisibleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgAddInvisible: 'boolean',
      bgAddVisible: 'boolean',
      bgInvisibleControl: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgInvisibleControl,
      bgVisibleControl: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgVisibleControl,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControl extends $tea.Model {
  backgroundControl?: CreateWmEmbedTaskRequestDocumentControlBackgroundControl;
  /**
   * @example
   * true
   */
  invisibleAntiAllCopy?: boolean;
  /**
   * @example
   * true
   */
  invisibleAntiTextCopy?: boolean;
  static names(): { [key: string]: string } {
    return {
      backgroundControl: 'BackgroundControl',
      invisibleAntiAllCopy: 'InvisibleAntiAllCopy',
      invisibleAntiTextCopy: 'InvisibleAntiTextCopy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundControl: CreateWmEmbedTaskRequestDocumentControlBackgroundControl,
      invisibleAntiAllCopy: 'boolean',
      invisibleAntiTextCopy: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * job:5GfrJYsoaffmCE7Z5bZtjUefzxfd****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmExtractTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * wmt-9648c22d2eb2cb57bb855dcae7898464********
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmInfoMappingResponseBodyData extends $tea.Model {
  /**
   * @example
   * 123***
   */
  wmInfoUint?: number;
  static names(): { [key: string]: string } {
    return {
      wmInfoUint: 'WmInfoUint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wmInfoUint: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActiveIdpConfigResponseBodyData extends $tea.Model {
  description?: string;
  /**
   * @example
   * idp-cfg001
   */
  id?: string;
  name?: string;
  /**
   * @example
   * DingTalk
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientUserResponseBodyDataDepartment extends $tea.Model {
  /**
   * @example
   * 107
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientUserResponseBodyData extends $tea.Model {
  department?: GetClientUserResponseBodyDataDepartment;
  /**
   * @example
   * 10713
   */
  departmentId?: string;
  description?: string;
  /**
   * @example
   * johndoe@example.com
   */
  email?: string;
  /**
   * @example
   * 83
   */
  id?: string;
  /**
   * @example
   * 598
   */
  idpConfigId?: string;
  /**
   * @example
   * 13641966835
   */
  mobileNumber?: string;
  /**
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @example
   * su_abcd7215****
   */
  userId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      departmentId: 'DepartmentId',
      description: 'Description',
      email: 'Email',
      id: 'Id',
      idpConfigId: 'IdpConfigId',
      mobileNumber: 'MobileNumber',
      status: 'Status',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: GetClientUserResponseBodyDataDepartment,
      departmentId: 'string',
      description: 'string',
      email: 'string',
      id: 'string',
      idpConfigId: 'string',
      mobileNumber: 'string',
      status: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDynamicRouteResponseBodyDynamicRoute extends $tea.Model {
  applicationIds?: string[];
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @example
   * 2023-02-09 10:31:47
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * dr-16ff07c8207d****
   */
  dynamicRouteId?: string;
  /**
   * @example
   * connector
   */
  dynamicRouteType?: string;
  /**
   * @example
   * dynamic_route_name
   */
  name?: string;
  /**
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  regionIds?: string[];
  /**
   * @example
   * Enabled
   */
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      description: 'Description',
      dynamicRouteId: 'DynamicRouteId',
      dynamicRouteType: 'DynamicRouteType',
      name: 'Name',
      nextHop: 'NextHop',
      priority: 'Priority',
      regionIds: 'RegionIds',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      createTime: 'string',
      description: 'string',
      dynamicRouteId: 'string',
      dynamicRouteType: 'string',
      name: 'string',
      nextHop: 'string',
      priority: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdpConfigResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * AccessKey ID
   * 
   * @example
   * LTAI5tJVztnh6Nn***
   */
  accessKey?: string;
  /**
   * @remarks
   * AccessKey Secret
   * 
   * @example
   * E75ktr5jENiR3ssjC***
   */
  accessKeySecret?: string;
  description?: string;
  /**
   * @example
   * https://172.10.10.2:4321/getGroup?name=%s&pass=%s
   */
  getGroupUrl?: string;
  /**
   * @example
   * 1465
   */
  id?: string;
  /**
   * @example
   * <?xml version="1.0" encoding="utf-8"?>***
   */
  idpMetadata?: string;
  /**
   * @example
   * totp
   */
  mfaConfigType?: string;
  /**
   * @example
   * password
   */
  mobileLoginType?: string;
  /**
   * @example
   * totp
   */
  mobileMfaConfigType?: string;
  /**
   * @example
   * 1482,1355
   */
  multiIdpInfo?: string;
  name?: string;
  /**
   * @example
   * password
   */
  pcLoginType?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * CSAS
   */
  type?: string;
  /**
   * @example
   * 2024-02-26T02:02:42Z
   */
  updateTime?: string;
  /**
   * @example
   * QVhaU0RDR0JIWVV***
   */
  verifyAesKey?: string;
  /**
   * @example
   * 7JAr3fYtnl***
   */
  verifyToken?: string;
  /**
   * @example
   * http://172.10.10.1:1234/otp_verify
   */
  verifyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      accessKeySecret: 'AccessKeySecret',
      description: 'Description',
      getGroupUrl: 'GetGroupUrl',
      id: 'Id',
      idpMetadata: 'IdpMetadata',
      mfaConfigType: 'MfaConfigType',
      mobileLoginType: 'MobileLoginType',
      mobileMfaConfigType: 'MobileMfaConfigType',
      multiIdpInfo: 'MultiIdpInfo',
      name: 'Name',
      pcLoginType: 'PcLoginType',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
      verifyAesKey: 'VerifyAesKey',
      verifyToken: 'VerifyToken',
      verifyUrl: 'VerifyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: 'string',
      accessKeySecret: 'string',
      description: 'string',
      getGroupUrl: 'string',
      id: 'string',
      idpMetadata: 'string',
      mfaConfigType: 'string',
      mobileLoginType: 'string',
      mobileMfaConfigType: 'string',
      multiIdpInfo: 'string',
      name: 'string',
      pcLoginType: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
      verifyAesKey: 'string',
      verifyToken: 'string',
      verifyUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessApplicationResponseBodyApplicationPortRanges extends $tea.Model {
  /**
   * @example
   * 80
   */
  begin?: number;
  /**
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessApplicationResponseBodyApplication extends $tea.Model {
  addresses?: string[];
  /**
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  browserAccessStatus?: string;
  connectorIds?: string[];
  /**
   * @example
   * 2022-08-30 16:50:32
   */
  createTime?: string;
  description?: string;
  l7ProxyDomainAutomatic?: string;
  l7ProxyDomainCustom?: string;
  /**
   * @example
   * private_access_application_name
   */
  name?: string;
  policyIds?: string[];
  portRanges?: GetPrivateAccessApplicationResponseBodyApplicationPortRanges[];
  /**
   * @example
   * All
   */
  protocol?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      browserAccessStatus: 'BrowserAccessStatus',
      connectorIds: 'ConnectorIds',
      createTime: 'CreateTime',
      description: 'Description',
      l7ProxyDomainAutomatic: 'L7ProxyDomainAutomatic',
      l7ProxyDomainCustom: 'L7ProxyDomainCustom',
      name: 'Name',
      policyIds: 'PolicyIds',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      browserAccessStatus: 'string',
      connectorIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      l7ProxyDomainAutomatic: 'string',
      l7ProxyDomainCustom: 'string',
      name: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      portRanges: { 'type': 'array', 'itemType': GetPrivateAccessApplicationResponseBodyApplicationPortRanges },
      protocol: 'string',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessPolicyResponseBodyPolicyCustomUserAttributes extends $tea.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPrivateAccessPolicyResponseBodyPolicy extends $tea.Model {
  applicationIds?: string[];
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @example
   * 2021-07-29 11:26:02
   */
  createTime?: string;
  customUserAttributes?: GetPrivateAccessPolicyResponseBodyPolicyCustomUserAttributes[];
  description?: string;
  deviceAttributeAction?: string;
  deviceAttributeId?: string;
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @example
   * pa-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  tagIds?: string[];
  userGroupIds?: string[];
  /**
   * @example
   * Normal
   */
  userGroupMode?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      deviceAttributeAction: 'DeviceAttributeAction',
      deviceAttributeId: 'DeviceAttributeId',
      name: 'Name',
      policyAction: 'PolicyAction',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      tagIds: 'TagIds',
      userGroupIds: 'UserGroupIds',
      userGroupMode: 'UserGroupMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      createTime: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': GetPrivateAccessPolicyResponseBodyPolicyCustomUserAttributes },
      description: 'string',
      deviceAttributeAction: 'string',
      deviceAttributeId: 'string',
      name: 'string',
      policyAction: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userGroupMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegistrationPolicyResponseBodyLimitDetailLimitCount extends $tea.Model {
  /**
   * @example
   * 0
   */
  all?: number;
  /**
   * @example
   * 2
   */
  mobile?: number;
  /**
   * @example
   * 2
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegistrationPolicyResponseBodyLimitDetail extends $tea.Model {
  /**
   * @example
   * Personal
   */
  deviceBelong?: string;
  limitCount?: GetRegistrationPolicyResponseBodyLimitDetailLimitCount;
  /**
   * @example
   * LimitDiff
   */
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBelong: 'DeviceBelong',
      limitCount: 'LimitCount',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBelong: 'string',
      limitCount: GetRegistrationPolicyResponseBodyLimitDetailLimitCount,
      limitType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeviceResponseBodyDeviceHistoryUsers extends $tea.Model {
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      saseUserId: 'SaseUserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserDeviceResponseBodyDevice extends $tea.Model {
  /**
   * @example
   * Online
   */
  appStatus?: string;
  /**
   * @example
   * 2.2.0
   */
  appVersion?: string;
  /**
   * @example
   * Apple M1
   */
  CPU?: string;
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  department?: string;
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @example
   * MacBookPro17,1
   */
  deviceModel?: string;
  /**
   * @example
   * Online
   */
  deviceStatus?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @example
   * 3.5.1
   */
  deviceVersion?: string;
  /**
   * @example
   * APPLE SSD AP0512Q Media
   */
  disk?: string;
  /**
   * @example
   * Unauthorized
   */
  dlpStatus?: string;
  historyUsers?: GetUserDeviceResponseBodyDeviceHistoryUsers[];
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * Disabled
   */
  iaStatus?: string;
  /**
   * @example
   * 172.16.XX.XX
   */
  innerIP?: string;
  /**
   * @example
   * 48:9e:XX:XX:02:80
   */
  mac?: string;
  /**
   * @example
   * 16
   */
  memory?: string;
  /**
   * @example
   * Unprovisioned
   */
  nacStatus?: string;
  /**
   * @example
   * Enabled
   */
  paStatus?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * true
   */
  sharingStatus?: boolean;
  /**
   * @example
   * 106.14.XX.XX
   */
  srcIP?: string;
  /**
   * @example
   * 2023-08-24 19:04:42
   */
  updateTime?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appStatus: 'AppStatus',
      appVersion: 'AppVersion',
      CPU: 'CPU',
      createTime: 'CreateTime',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceModel: 'DeviceModel',
      deviceStatus: 'DeviceStatus',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      deviceVersion: 'DeviceVersion',
      disk: 'Disk',
      dlpStatus: 'DlpStatus',
      historyUsers: 'HistoryUsers',
      hostname: 'Hostname',
      iaStatus: 'IaStatus',
      innerIP: 'InnerIP',
      mac: 'Mac',
      memory: 'Memory',
      nacStatus: 'NacStatus',
      paStatus: 'PaStatus',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      srcIP: 'SrcIP',
      updateTime: 'UpdateTime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatus: 'string',
      appVersion: 'string',
      CPU: 'string',
      createTime: 'string',
      department: 'string',
      deviceBelong: 'string',
      deviceModel: 'string',
      deviceStatus: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      deviceVersion: 'string',
      disk: 'string',
      dlpStatus: 'string',
      historyUsers: { 'type': 'array', 'itemType': GetUserDeviceResponseBodyDeviceHistoryUsers },
      hostname: 'string',
      iaStatus: 'string',
      innerIP: 'string',
      mac: 'string',
      memory: 'string',
      nacStatus: 'string',
      paStatus: 'string',
      saseUserId: 'string',
      sharingStatus: 'boolean',
      srcIP: 'string',
      updateTime: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponseBodyUserGroupAttributes extends $tea.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserGroupResponseBodyUserGroup extends $tea.Model {
  attributes?: GetUserGroupResponseBodyUserGroupAttributes[];
  /**
   * @example
   * 2022-10-10 11:39:22
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * user_group_name
   */
  name?: string;
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': GetUserGroupResponseBodyUserGroupAttributes },
      createTime: 'string',
      description: 'string',
      name: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmEmbedTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * https://example.com/embed-****.pdf
   */
  fileUrl?: string;
  /**
   * @example
   * 171859****
   */
  fileUrlExp?: string;
  /**
   * @example
   * embed-****.pdf
   */
  filename?: string;
  /**
   * @example
   * d41d8cd98f00b204e9800998ecf8****
   */
  outFileHashMd5?: string;
  /**
   * @example
   * 123**
   */
  outFileSize?: number;
  /**
   * @example
   * job:5GfrJYsoaffmCE7Z5bZtjUxxxxxxxxxx
   */
  taskId?: string;
  /**
   * @example
   * Success
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      fileUrlExp: 'FileUrlExp',
      filename: 'Filename',
      outFileHashMd5: 'OutFileHashMd5',
      outFileSize: 'OutFileSize',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      fileUrlExp: 'string',
      filename: 'string',
      outFileHashMd5: 'string',
      outFileSize: 'number',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWmExtractTaskResponseBodyData extends $tea.Model {
  /**
   * @example
   * 2024-01-01 11:22:33
   */
  createTime?: string;
  /**
   * @example
   * test-****.pdf
   */
  filename?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * wmt-9648c22d2eb2cb57bb855dcae7898464********
   */
  taskId?: string;
  /**
   * @example
   * aGVsbG8gc2Fz****
   */
  wmInfoBytesB64?: string;
  /**
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @example
   * 123**
   */
  wmInfoUint?: number;
  /**
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      filename: 'Filename',
      status: 'Status',
      taskId: 'TaskId',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      filename: 'string',
      status: 'string',
      taskId: 'string',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'number',
      wmType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplicationsPortRanges extends $tea.Model {
  /**
   * @example
   * 80
   */
  begin?: number;
  /**
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplications extends $tea.Model {
  addresses?: string[];
  /**
   * @example
   * pa-application-7a9243dd02f4****
   */
  applicationId?: string;
  /**
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * application_name
   */
  name?: string;
  portRanges?: ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplicationsPortRanges[];
  /**
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      createTime: 'string',
      description: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplicationsPortRanges },
      protocol: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessPolicyResponseBodyPolices extends $tea.Model {
  applications?: ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplications[];
  /**
   * @example
   * pa-policy-1b0d0e8b4bcf****
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      policyId: 'PolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplications },
      policyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessTagResponseBodyTagsApplicationsPortRanges extends $tea.Model {
  /**
   * @example
   * 80
   */
  begin?: number;
  /**
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessTagResponseBodyTagsApplications extends $tea.Model {
  addresses?: string[];
  /**
   * @example
   * pa-application-7a9243dd02f4****
   */
  applicationId?: string;
  /**
   * @remarks
   * 内网访问应用创建时间。
   * 
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * private_access_application_name
   */
  name?: string;
  portRanges?: ListApplicationsForPrivateAccessTagResponseBodyTagsApplicationsPortRanges[];
  /**
   * @example
   * All
   */
  protocol?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      createTime: 'string',
      description: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessTagResponseBodyTagsApplicationsPortRanges },
      protocol: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationsForPrivateAccessTagResponseBodyTags extends $tea.Model {
  applications?: ListApplicationsForPrivateAccessTagResponseBodyTagsApplications[];
  /**
   * @example
   * tag-7ffc82853476****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListApplicationsForPrivateAccessTagResponseBodyTagsApplications },
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientUsersResponseBodyDataDataListDepartment extends $tea.Model {
  /**
   * @example
   * 105
   */
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientUsersResponseBodyDataDataList extends $tea.Model {
  department?: ListClientUsersResponseBodyDataDataListDepartment;
  /**
   * @example
   * 10800
   */
  departmentId?: string;
  description?: string;
  /**
   * @example
   * johndoe@example.com
   */
  email?: string;
  /**
   * @example
   * 1970
   */
  id?: string;
  /**
   * @example
   * 1026
   */
  idpConfigId?: string;
  /**
   * @example
   * 15800820468
   */
  mobileNumber?: string;
  /**
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @example
   * su_dead7216****
   */
  userId?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      departmentId: 'DepartmentId',
      description: 'Description',
      email: 'Email',
      id: 'Id',
      idpConfigId: 'IdpConfigId',
      mobileNumber: 'MobileNumber',
      status: 'Status',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: ListClientUsersResponseBodyDataDataListDepartment,
      departmentId: 'string',
      description: 'string',
      email: 'string',
      id: 'string',
      idpConfigId: 'string',
      mobileNumber: 'string',
      status: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientUsersResponseBodyData extends $tea.Model {
  dataList?: ListClientUsersResponseBodyDataDataList[];
  /**
   * @example
   * 2
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListClientUsersResponseBodyDataDataList },
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBodyConnectorsApplications extends $tea.Model {
  /**
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @example
   * application_name
   */
  applicationName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBodyConnectorsConnectorClients extends $tea.Model {
  connectionStatus?: string;
  devTag?: string;
  hostname?: string;
  publicIp?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      devTag: 'DevTag',
      hostname: 'Hostname',
      publicIp: 'PublicIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      devTag: 'string',
      hostname: 'string',
      publicIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBodyConnectorsUpgradeTime extends $tea.Model {
  /**
   * @example
   * 23:00
   */
  end?: string;
  /**
   * @example
   * 20:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectorsResponseBodyConnectors extends $tea.Model {
  applications?: ListConnectorsResponseBodyConnectorsApplications[];
  connectorClients?: ListConnectorsResponseBodyConnectorsConnectorClients[];
  /**
   * @remarks
   * ConnectorID。
   * 
   * @example
   * connector-94db94e06b98****
   */
  connectorId?: string;
  /**
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  /**
   * @example
   * connector_name
   */
  name?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Online
   */
  status?: string;
  /**
   * @example
   * Enabled
   */
  switchStatus?: string;
  upgradeTime?: ListConnectorsResponseBodyConnectorsUpgradeTime;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      connectorClients: 'ConnectorClients',
      connectorId: 'ConnectorId',
      createTime: 'CreateTime',
      name: 'Name',
      regionId: 'RegionId',
      status: 'Status',
      switchStatus: 'SwitchStatus',
      upgradeTime: 'UpgradeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListConnectorsResponseBodyConnectorsApplications },
      connectorClients: { 'type': 'array', 'itemType': ListConnectorsResponseBodyConnectorsConnectorClients },
      connectorId: 'string',
      createTime: 'string',
      name: 'string',
      regionId: 'string',
      status: 'string',
      switchStatus: 'string',
      upgradeTime: ListConnectorsResponseBodyConnectorsUpgradeTime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDynamicRoutesResponseBodyDynamicRoutes extends $tea.Model {
  applicationIds?: string[];
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @example
   * 2023-03-21 11:50:03
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * dr-a0ca843f53cf****
   */
  dynamicRouteId?: string;
  /**
   * @example
   * connector
   */
  dynamicRouteType?: string;
  /**
   * @example
   * dynamic_route_name
   */
  name?: string;
  /**
   * @example
   * connector-8ccb13b6f52c****
   */
  nextHop?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  regionIds?: string[];
  /**
   * @example
   * Enabled
   */
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      description: 'Description',
      dynamicRouteId: 'DynamicRouteId',
      dynamicRouteType: 'DynamicRouteType',
      name: 'Name',
      nextHop: 'NextHop',
      priority: 'Priority',
      regionIds: 'RegionIds',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      createTime: 'string',
      description: 'string',
      dynamicRouteId: 'string',
      dynamicRouteType: 'string',
      name: 'string',
      nextHop: 'string',
      priority: 'number',
      regionIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExcessiveDeviceRegistrationApplicationsResponseBodyApplications extends $tea.Model {
  /**
   * @example
   * reg-application-0f4a127b7e78****
   */
  applicationId?: string;
  /**
   * @example
   * 2023-07-17 18:46:55
   */
  createTime?: string;
  department?: string;
  description?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * false
   */
  isUsed?: boolean;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * Approved
   */
  status?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      department: 'Department',
      description: 'Description',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      hostname: 'Hostname',
      isUsed: 'IsUsed',
      mac: 'Mac',
      saseUserId: 'SaseUserId',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      createTime: 'string',
      department: 'string',
      description: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      hostname: 'string',
      isUsed: 'boolean',
      mac: 'string',
      saseUserId: 'string',
      status: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpConfigsResponseBodyDataDataList extends $tea.Model {
  description?: string;
  /**
   * @example
   * 277
   */
  id?: string;
  /**
   * @example
   * totp
   */
  mfa?: string;
  /**
   * @example
   * password
   */
  mobileLoginType?: string;
  /**
   * @example
   * password
   */
  mobileMfaConfigType?: string;
  /**
   * @example
   * 1482,1355
   */
  multiIdpInfo?: string;
  name?: string;
  /**
   * @example
   * password
   */
  pcLoginType?: string;
  /**
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @example
   * DingTalk
   */
  type?: string;
  /**
   * @example
   * 2023-05-09T02:22:41.430Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      mfa: 'Mfa',
      mobileLoginType: 'MobileLoginType',
      mobileMfaConfigType: 'MobileMfaConfigType',
      multiIdpInfo: 'MultiIdpInfo',
      name: 'Name',
      pcLoginType: 'PcLoginType',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      mfa: 'string',
      mobileLoginType: 'string',
      mobileMfaConfigType: 'string',
      multiIdpInfo: 'string',
      name: 'string',
      pcLoginType: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpConfigsResponseBodyData extends $tea.Model {
  dataList?: ListIdpConfigsResponseBodyDataDataList[];
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListIdpConfigsResponseBodyDataDataList },
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpDepartmentsResponseBodyDataDataList extends $tea.Model {
  /**
   * @example
   * 30520
   */
  id?: string;
  /**
   * @example
   * 1440
   */
  idpConfigId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      idpConfigId: 'IdpConfigId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      idpConfigId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpDepartmentsResponseBodyData extends $tea.Model {
  dataList?: ListIdpDepartmentsResponseBodyDataDataList[];
  /**
   * @example
   * 2
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListIdpDepartmentsResponseBodyDataDataList },
      totalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacUserCertResponseBodyDataList extends $tea.Model {
  /**
   * @example
   * 1
   */
  aliuid?: string;
  department?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @example
   * windows
   */
  deviceType?: string;
  /**
   * @example
   * 2029-06-30 09:31:54
   */
  expiredTime?: string;
  /**
   * @example
   * MS-XU****
   */
  hostname?: string;
  /**
   * @example
   * 08:f8:**:**:**:5e
   */
  mac?: string;
  /**
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  userId?: string;
  /**
   * @example
   * zhang**
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      department: 'Department',
      devTag: 'DevTag',
      deviceType: 'DeviceType',
      expiredTime: 'ExpiredTime',
      hostname: 'Hostname',
      mac: 'Mac',
      status: 'Status',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      department: 'string',
      devTag: 'string',
      deviceType: 'string',
      expiredTime: 'string',
      hostname: 'string',
      mac: 'string',
      status: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPoliciesCustomUserAttributes extends $tea.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPolicies extends $tea.Model {
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  customUserAttributes?: ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPoliciesCustomUserAttributes[];
  description?: string;
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @example
   * pa-policy-867ef4007c8a****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * Normal
   */
  userGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      name: 'Name',
      policyAction: 'PolicyAction',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupType: 'UserGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      createTime: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPoliciesCustomUserAttributes },
      description: 'string',
      name: 'string',
      policyAction: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessApplicationResponseBodyApplications extends $tea.Model {
  /**
   * @example
   * pa-application-b927baf3e592****
   */
  applicationId?: string;
  policies?: ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPolicies[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      policies: 'Policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      policies: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessTagResponseBodyTagsPolicesCustomUserAttributes extends $tea.Model {
  /**
   * @remarks
   * 用户组的身份源ID。当自定义用户组类型为**department**时，存在该值。
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * 用户组的关系。取值：
   * - **Equal**：等于。
   * - **Unequal**：不等于。
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * 用户组的类型。取值：
   * - **username**：用户名。
   * - **department**：部门。
   * - **email**：邮箱。
   * - **telephone**：手机。
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * 用户组属性的值。
   * - 当用户组类型为**username**时，表示用户名的值。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
   * - 当用户组类型为**department**时，表示部门的值。如：OU=部门1,OU=SASE钉钉。
   * - 当用户组类型为**email**时，表示邮箱的值。如：username@example.com。
   * - 当用户组类型为**telephone**时，表示手机的值。如：13900001234。
   * 
   * @example
   * OU=部门1,OU=SASE钉钉
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessTagResponseBodyTagsPolices extends $tea.Model {
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @remarks
   * 内网访问策略创建时间。
   * 
   * @example
   * 2023-02-21 14:10:16
   */
  createTime?: string;
  /**
   * @remarks
   * 自定义用户组属性集合。多个自定义用户组属性之间是或的关系，按照合集生效。
   */
  customUserAttributes?: ListPolicesForPrivateAccessTagResponseBodyTagsPolicesCustomUserAttributes[];
  description?: string;
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @example
   * pa-policy-867ef4007c8a****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @example
   * Normal
   */
  userGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      name: 'Name',
      policyAction: 'PolicyAction',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupType: 'UserGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      createTime: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessTagResponseBodyTagsPolicesCustomUserAttributes },
      description: 'string',
      name: 'string',
      policyAction: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForPrivateAccessTagResponseBodyTags extends $tea.Model {
  polices?: ListPolicesForPrivateAccessTagResponseBodyTagsPolices[];
  /**
   * @example
   * tag-b927baf3e592****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListPolicesForPrivateAccessTagResponseBodyTagsPolices },
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForUserGroupResponseBodyUserGroupsPolices extends $tea.Model {
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @example
   * pa-policy-ce2bf7236fab****
   */
  policyId?: string;
  /**
   * @example
   * PrivateAccess
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      policyId: 'PolicyId',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      policyId: 'string',
      policyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicesForUserGroupResponseBodyUserGroups extends $tea.Model {
  polices?: ListPolicesForUserGroupResponseBodyUserGroupsPolices[];
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListPolicesForUserGroupResponseBodyUserGroupsPolices },
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPopTrafficStatisticsResponseBodyTrafficDataDatapoints extends $tea.Model {
  /**
   * @example
   * 15325
   */
  average?: number;
  /**
   * @example
   * 2023-12-06 15:29:00
   */
  dateTime?: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      dateTime: 'DateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'number',
      dateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPopTrafficStatisticsResponseBodyTrafficData extends $tea.Model {
  datapoints?: ListPopTrafficStatisticsResponseBodyTrafficDataDatapoints[];
  /**
   * @example
   * InternetTx
   */
  metricName?: string;
  static names(): { [key: string]: string } {
    return {
      datapoints: 'Datapoints',
      metricName: 'MetricName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoints: { 'type': 'array', 'itemType': ListPopTrafficStatisticsResponseBodyTrafficDataDatapoints },
      metricName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsResponseBodyApplicationsPortRanges extends $tea.Model {
  /**
   * @example
   * 80
   */
  begin?: number;
  /**
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsResponseBodyApplications extends $tea.Model {
  addresses?: string[];
  /**
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  browserAccessStatus?: string;
  connectorIds?: string[];
  /**
   * @example
   * 2022-12-16 15:03:42
   */
  createTime?: string;
  description?: string;
  l7ProxyDomainAutomatic?: string;
  l7ProxyDomainCustom?: string;
  /**
   * @example
   * private_access_application_name
   */
  name?: string;
  policyIds?: string[];
  portRanges?: ListPrivateAccessApplicationsResponseBodyApplicationsPortRanges[];
  /**
   * @example
   * All
   */
  protocol?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      browserAccessStatus: 'BrowserAccessStatus',
      connectorIds: 'ConnectorIds',
      createTime: 'CreateTime',
      description: 'Description',
      l7ProxyDomainAutomatic: 'L7ProxyDomainAutomatic',
      l7ProxyDomainCustom: 'L7ProxyDomainCustom',
      name: 'Name',
      policyIds: 'PolicyIds',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      browserAccessStatus: 'string',
      connectorIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      l7ProxyDomainAutomatic: 'string',
      l7ProxyDomainCustom: 'string',
      name: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      portRanges: { 'type': 'array', 'itemType': ListPrivateAccessApplicationsResponseBodyApplicationsPortRanges },
      protocol: 'string',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplicationsPortRanges extends $tea.Model {
  /**
   * @example
   * 80
   */
  begin?: number;
  /**
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplications extends $tea.Model {
  addresses?: string[];
  /**
   * @example
   * pa-application-7a9243dd02f4****
   */
  applicationId?: string;
  /**
   * @example
   * 2022-04-13 13:33:24
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * application_name
   */
  name?: string;
  portRanges?: ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplicationsPortRanges[];
  /**
   * @example
   * All
   */
  protocol?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': 'string' },
      applicationId: 'string',
      createTime: 'string',
      description: 'string',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplicationsPortRanges },
      protocol: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutes extends $tea.Model {
  applications?: ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplications[];
  /**
   * @example
   * dr-ca9fddfac7c6****
   */
  dynamicRouteId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      dynamicRouteId: 'DynamicRouteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplications },
      dynamicRouteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessPolicesResponseBodyPolicesCustomUserAttributes extends $tea.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessPolicesResponseBodyPolices extends $tea.Model {
  applicationIds?: string[];
  /**
   * @example
   * Application
   */
  applicationType?: string;
  /**
   * @example
   * 2022-07-10 15:50:23
   */
  createTime?: string;
  customUserAttributes?: ListPrivateAccessPolicesResponseBodyPolicesCustomUserAttributes[];
  description?: string;
  deviceAttributeAction?: string;
  deviceAttributeId?: string;
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @example
   * pa-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  tagIds?: string[];
  userGroupIds?: string[];
  /**
   * @example
   * Normal
   */
  userGroupMode?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
      deviceAttributeAction: 'DeviceAttributeAction',
      deviceAttributeId: 'DeviceAttributeId',
      name: 'Name',
      policyAction: 'PolicyAction',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      tagIds: 'TagIds',
      userGroupIds: 'UserGroupIds',
      userGroupMode: 'UserGroupMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      applicationType: 'string',
      createTime: 'string',
      customUserAttributes: { 'type': 'array', 'itemType': ListPrivateAccessPolicesResponseBodyPolicesCustomUserAttributes },
      description: 'string',
      deviceAttributeAction: 'string',
      deviceAttributeId: 'string',
      name: 'string',
      policyAction: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      tagIds: { 'type': 'array', 'itemType': 'string' },
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userGroupMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsResponseBodyTags extends $tea.Model {
  /**
   * @remarks
   * The IDs of the internal access applications.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The time when the internal access tag was created.
   * 
   * @example
   * 2022-10-10 11:39:34
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the internal access tag.
   */
  description?: string;
  /**
   * @remarks
   * The name of the internal access tag.
   * 
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @remarks
   * The IDs of the internal access policies.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The ID of the internal access tag.
   * 
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  /**
   * @remarks
   * The type of the internal access tag. Valid values:
   * 
   * *   **Default**
   * *   **Custom**
   * 
   * @example
   * Default
   */
  tagType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      policyIds: 'PolicyIds',
      tagId: 'TagId',
      tagType: 'TagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      name: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      tagId: 'string',
      tagType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutesTags extends $tea.Model {
  /**
   * @example
   * 2022-10-23 14:02:56
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  /**
   * @example
   * Custom
   */
  tagType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      tagId: 'TagId',
      tagType: 'TagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      tagId: 'string',
      tagType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutes extends $tea.Model {
  /**
   * @example
   * dr-ca9fddfac7c6****
   */
  dynamicRouteId?: string;
  tags?: ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutesTags[];
  static names(): { [key: string]: string } {
    return {
      dynamicRouteId: 'DynamicRouteId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRouteId: 'string',
      tags: { 'type': 'array', 'itemType': ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutesTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount extends $tea.Model {
  /**
   * @example
   * 3
   */
  all?: number;
  /**
   * @example
   * 0
   */
  mobile?: number;
  /**
   * @example
   * 0
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesResponseBodyPoliciesLimitDetail extends $tea.Model {
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  limitCount?: ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount;
  /**
   * @example
   * LimitAll
   */
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBelong: 'DeviceBelong',
      limitCount: 'LimitCount',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBelong: 'string',
      limitCount: ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount,
      limitType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesResponseBodyPolicies extends $tea.Model {
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  description?: string;
  limitDetail?: ListRegistrationPoliciesResponseBodyPoliciesLimitDetail[];
  /**
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  /**
   * @example
   * reg-policy-dcbfd33cb004****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      limitDetail: 'LimitDetail',
      matchMode: 'MatchMode',
      name: 'Name',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      limitDetail: { 'type': 'array', 'itemType': ListRegistrationPoliciesResponseBodyPoliciesLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetailLimitCount extends $tea.Model {
  /**
   * @example
   * 3
   */
  all?: string;
  /**
   * @example
   * 0
   */
  mobile?: string;
  /**
   * @example
   * 0
   */
  PC?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'string',
      mobile: 'string',
      PC: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetail extends $tea.Model {
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  limitCount?: ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetailLimitCount;
  /**
   * @example
   * LimitAll
   */
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBelong: 'DeviceBelong',
      limitCount: 'LimitCount',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBelong: 'string',
      limitCount: ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetailLimitCount,
      limitType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPolicies extends $tea.Model {
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  description?: string;
  limitDetail?: ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetail[];
  /**
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  /**
   * @example
   * reg-policy-dcbfd33cb004****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Enabled
   */
  status?: string;
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      limitDetail: 'LimitDetail',
      matchMode: 'MatchMode',
      name: 'Name',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      limitDetail: { 'type': 'array', 'itemType': ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupResponseBodyUserGroups extends $tea.Model {
  policies?: ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPolicies[];
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPolicies },
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwareForUserDeviceResponseBodySoftware extends $tea.Model {
  /**
   * @example
   * Alibaba (China) Network Technology Co.,Ltd.
   */
  inc?: string;
  /**
   * @example
   * 2023-08-18 02:43:02
   */
  installTime?: string;
  name?: string;
  versions?: string[];
  static names(): { [key: string]: string } {
    return {
      inc: 'Inc',
      installTime: 'InstallTime',
      name: 'Name',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inc: 'string',
      installTime: 'string',
      name: 'string',
      versions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessApplicationResponseBodyApplicationsTags extends $tea.Model {
  /**
   * @example
   * 2022-07-01 16:05:26
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @example
   * tag-c0cb77857a99****
   */
  tagId?: string;
  /**
   * @example
   * Default
   */
  tagType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      tagId: 'TagId',
      tagType: 'TagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      tagId: 'string',
      tagType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessApplicationResponseBodyApplications extends $tea.Model {
  /**
   * @example
   * pa-application-7a4445897856****
   */
  applicationId?: string;
  tags?: ListTagsForPrivateAccessApplicationResponseBodyApplicationsTags[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      tags: { 'type': 'array', 'itemType': ListTagsForPrivateAccessApplicationResponseBodyApplicationsTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessPolicyResponseBodyPolicesTags extends $tea.Model {
  /**
   * @remarks
   * 内网访问标签创建时间。
   * 
   * @example
   * 2023-02-21 14:10:16
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  /**
   * @example
   * Default
   */
  tagType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      tagId: 'TagId',
      tagType: 'TagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      tagId: 'string',
      tagType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsForPrivateAccessPolicyResponseBodyPolices extends $tea.Model {
  /**
   * @example
   * pa-policy-1b0d0e8b4bcf****
   */
  policyId?: string;
  tags?: ListTagsForPrivateAccessPolicyResponseBodyPolicesTags[];
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      tags: { 'type': 'array', 'itemType': ListTagsForPrivateAccessPolicyResponseBodyPolicesTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDevicesResponseBodyDevices extends $tea.Model {
  /**
   * @example
   * Online
   */
  appStatus?: string;
  /**
   * @example
   * 2.2.0
   */
  appVersion?: string;
  /**
   * @example
   * Apple M1
   */
  CPU?: string;
  /**
   * @example
   * 2023-07-17 18:46:55
   */
  createTime?: string;
  department?: string;
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @example
   * MacBookPro17,1
   */
  deviceModel?: string;
  /**
   * @example
   * Online
   */
  deviceStatus?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @example
   * 3.5.1
   */
  deviceVersion?: string;
  /**
   * @example
   * APPLE SSD AP0512Q Media
   */
  disk?: string;
  /**
   * @example
   * Enabled
   */
  dlpStatus?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * Enabled
   */
  iaStatus?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  innerIP?: string;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @example
   * 16
   */
  memory?: string;
  /**
   * @example
   * Enabled
   */
  nacStatus?: string;
  /**
   * @example
   * Enabled
   */
  paStatus?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * true
   */
  sharingStatus?: boolean;
  /**
   * @example
   * 11.49.XX.XX
   */
  srcIP?: string;
  /**
   * @example
   * 2023-08-24 19:04:42
   */
  updateTime?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appStatus: 'AppStatus',
      appVersion: 'AppVersion',
      CPU: 'CPU',
      createTime: 'CreateTime',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceModel: 'DeviceModel',
      deviceStatus: 'DeviceStatus',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      deviceVersion: 'DeviceVersion',
      disk: 'Disk',
      dlpStatus: 'DlpStatus',
      hostname: 'Hostname',
      iaStatus: 'IaStatus',
      innerIP: 'InnerIP',
      mac: 'Mac',
      memory: 'Memory',
      nacStatus: 'NacStatus',
      paStatus: 'PaStatus',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      srcIP: 'SrcIP',
      updateTime: 'UpdateTime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatus: 'string',
      appVersion: 'string',
      CPU: 'string',
      createTime: 'string',
      department: 'string',
      deviceBelong: 'string',
      deviceModel: 'string',
      deviceStatus: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      deviceVersion: 'string',
      disk: 'string',
      dlpStatus: 'string',
      hostname: 'string',
      iaStatus: 'string',
      innerIP: 'string',
      mac: 'string',
      memory: 'string',
      nacStatus: 'string',
      paStatus: 'string',
      saseUserId: 'string',
      sharingStatus: 'boolean',
      srcIP: 'string',
      updateTime: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBodyUserGroupsAttributes extends $tea.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsResponseBodyUserGroups extends $tea.Model {
  attributes?: ListUserGroupsResponseBodyUserGroupsAttributes[];
  /**
   * @example
   * 2022-10-10 11:39:22
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * user_group_name
   */
  name?: string;
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': ListUserGroupsResponseBodyUserGroupsAttributes },
      createTime: 'string',
      description: 'string',
      name: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroupsAttributes extends $tea.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroups extends $tea.Model {
  attributes?: ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroupsAttributes[];
  /**
   * @remarks
   * 用户组创建时间。
   * 
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * user_group_name
   */
  name?: string;
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroupsAttributes },
      createTime: 'string',
      description: 'string',
      name: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForPrivateAccessPolicyResponseBodyPolices extends $tea.Model {
  /**
   * @example
   * pa-policy-1b0d0e8b4bcf****
   */
  policyId?: string;
  userGroups?: ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroups[];
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      userGroups: { 'type': 'array', 'itemType': ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroupsAttributes extends $tea.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroups extends $tea.Model {
  attributes?: ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroupsAttributes[];
  /**
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * user_group_name
   */
  name?: string;
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroupsAttributes },
      createTime: 'string',
      description: 'string',
      name: 'string',
      userGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForRegistrationPolicyResponseBodyPolicies extends $tea.Model {
  /**
   * @example
   * reg-policy-f25c9e5872e5****
   */
  policyId?: string;
  userGroups?: ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroups[];
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      userGroups: { 'type': 'array', 'itemType': ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $tea.Model {
  department?: string;
  /**
   * @example
   * a***@example.net
   */
  email?: string;
  idpName?: string;
  /**
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      department: 'Department',
      email: 'Email',
      idpName: 'IdpName',
      phone: 'Phone',
      saseUserId: 'SaseUserId',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      department: 'string',
      email: 'string',
      idpName: 'string',
      phone: 'string',
      saseUserId: 'string',
      status: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupWmInfoMappingResponseBodyData extends $tea.Model {
  /**
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  static names(): { [key: string]: string } {
    return {
      wmInfoBytesB64: 'WmInfoBytesB64',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wmInfoBytesB64: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications extends $tea.Model {
  /**
   * @example
   * reg-application-0f4a127b7e78****
   */
  applicationId?: string;
  /**
   * @example
   * 2023-07-17 18:46:55
   */
  createTime?: string;
  department?: string;
  description?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * false
   */
  isUsed?: boolean;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * Approved
   */
  status?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      createTime: 'CreateTime',
      department: 'Department',
      description: 'Description',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      hostname: 'Hostname',
      isUsed: 'IsUsed',
      mac: 'Mac',
      saseUserId: 'SaseUserId',
      status: 'Status',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      createTime: 'string',
      department: 'string',
      description: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      hostname: 'string',
      isUsed: 'boolean',
      mac: 'string',
      saseUserId: 'string',
      status: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNacUserCertStatusRequestIdList extends $tea.Model {
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  devTag?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      devTag: 'DevTag',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      devTag: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessApplicationRequestPortRanges extends $tea.Model {
  /**
   * @example
   * 80
   */
  begin?: number;
  /**
   * @example
   * 81
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateAccessPolicyRequestCustomUserAttributes extends $tea.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyRequestCompanyLimitCount extends $tea.Model {
  /**
   * @example
   * 1
   */
  all?: number;
  /**
   * @example
   * 0
   */
  mobile?: number;
  /**
   * @example
   * 0
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyRequestPersonalLimitCount extends $tea.Model {
  /**
   * @example
   * 0
   */
  all?: number;
  /**
   * @example
   * 1
   */
  mobile?: number;
  /**
   * @example
   * 2
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount extends $tea.Model {
  /**
   * @example
   * 1
   */
  all?: number;
  /**
   * @example
   * 0
   */
  mobile?: number;
  /**
   * @example
   * 0
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyResponseBodyPolicyLimitDetail extends $tea.Model {
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  limitCount?: UpdateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount;
  /**
   * @example
   * LimitAll
   */
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBelong: 'DeviceBelong',
      limitCount: 'LimitCount',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBelong: 'string',
      limitCount: UpdateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount,
      limitType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRegistrationPolicyResponseBodyPolicy extends $tea.Model {
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  description?: string;
  limitDetail?: UpdateRegistrationPolicyResponseBodyPolicyLimitDetail[];
  /**
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @example
   * registration_policy_name
   */
  name?: string;
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: string;
  /**
   * @example
   * Enabled
   */
  status?: string;
  userGroupIds?: string[];
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      limitDetail: 'LimitDetail',
      matchMode: 'MatchMode',
      name: 'Name',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      limitDetail: { 'type': 'array', 'itemType': UpdateRegistrationPolicyResponseBodyPolicyLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'string',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesSharingStatusResponseBodyDevices extends $tea.Model {
  /**
   * @example
   * Online
   */
  appStatus?: string;
  /**
   * @example
   * 2.2.0
   */
  appVersion?: string;
  /**
   * @example
   * Apple M1
   */
  CPU?: string;
  /**
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  department?: string;
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @example
   * MacBookPro17,1
   */
  deviceModel?: string;
  /**
   * @example
   * Online
   */
  deviceStatus?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @example
   * 3.5.1
   */
  deviceVersion?: string;
  /**
   * @example
   * APPLE SSD AP0512Q Media
   */
  disk?: string;
  /**
   * @example
   * Enabled
   */
  dlpStatus?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * Enabled
   */
  iaStatus?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  innerIP?: string;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @example
   * 16
   */
  memory?: string;
  /**
   * @example
   * Enabled
   */
  nacStatus?: string;
  /**
   * @example
   * Enabled
   */
  paStatus?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * true
   */
  sharingStatus?: boolean;
  /**
   * @example
   * 11.49.XX.XX
   */
  srcIP?: string;
  /**
   * @example
   * 2023-08-24 19:04:42
   */
  updateTime?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appStatus: 'AppStatus',
      appVersion: 'AppVersion',
      CPU: 'CPU',
      createTime: 'CreateTime',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceModel: 'DeviceModel',
      deviceStatus: 'DeviceStatus',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      deviceVersion: 'DeviceVersion',
      disk: 'Disk',
      dlpStatus: 'DlpStatus',
      hostname: 'Hostname',
      iaStatus: 'IaStatus',
      innerIP: 'InnerIP',
      mac: 'Mac',
      memory: 'Memory',
      nacStatus: 'NacStatus',
      paStatus: 'PaStatus',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      srcIP: 'SrcIP',
      updateTime: 'UpdateTime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatus: 'string',
      appVersion: 'string',
      CPU: 'string',
      createTime: 'string',
      department: 'string',
      deviceBelong: 'string',
      deviceModel: 'string',
      deviceStatus: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      deviceVersion: 'string',
      disk: 'string',
      dlpStatus: 'string',
      hostname: 'string',
      iaStatus: 'string',
      innerIP: 'string',
      mac: 'string',
      memory: 'string',
      nacStatus: 'string',
      paStatus: 'string',
      saseUserId: 'string',
      sharingStatus: 'boolean',
      srcIP: 'string',
      updateTime: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserDevicesStatusResponseBodyDevices extends $tea.Model {
  /**
   * @example
   * Online
   */
  appStatus?: string;
  /**
   * @example
   * 2.2.0
   */
  appVersion?: string;
  /**
   * @example
   * Apple M1
   */
  CPU?: string;
  /**
   * @example
   * 2023-07-17 18:46:55
   */
  createTime?: string;
  department?: string;
  /**
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @example
   * MacBookPro17,1
   */
  deviceModel?: string;
  /**
   * @example
   * Online
   */
  deviceStatus?: string;
  /**
   * @example
   * 36efa42d-2c32-c4dc-e3fc-8541e33a****
   */
  deviceTag?: string;
  /**
   * @example
   * Windows
   */
  deviceType?: string;
  /**
   * @example
   * 3.5.1
   */
  deviceVersion?: string;
  /**
   * @example
   * APPLE SSD AP0512Q Media
   */
  disk?: string;
  /**
   * @example
   * Enabled
   */
  dlpStatus?: string;
  /**
   * @example
   * win10-64bit
   */
  hostname?: string;
  /**
   * @example
   * Enabled
   */
  iaStatus?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  innerIP?: string;
  /**
   * @example
   * 00:16:XX:XX:7c:46
   */
  mac?: string;
  /**
   * @example
   * 16
   */
  memory?: string;
  /**
   * @example
   * Enabled
   */
  nacStatus?: string;
  /**
   * @example
   * Enabled
   */
  paStatus?: string;
  /**
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @example
   * true
   */
  sharingStatus?: boolean;
  /**
   * @example
   * 11.49.XX.XX
   */
  srcIP?: string;
  /**
   * @example
   * 2023-08-24 19:04:42
   */
  updateTime?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      appStatus: 'AppStatus',
      appVersion: 'AppVersion',
      CPU: 'CPU',
      createTime: 'CreateTime',
      department: 'Department',
      deviceBelong: 'DeviceBelong',
      deviceModel: 'DeviceModel',
      deviceStatus: 'DeviceStatus',
      deviceTag: 'DeviceTag',
      deviceType: 'DeviceType',
      deviceVersion: 'DeviceVersion',
      disk: 'Disk',
      dlpStatus: 'DlpStatus',
      hostname: 'Hostname',
      iaStatus: 'IaStatus',
      innerIP: 'InnerIP',
      mac: 'Mac',
      memory: 'Memory',
      nacStatus: 'NacStatus',
      paStatus: 'PaStatus',
      saseUserId: 'SaseUserId',
      sharingStatus: 'SharingStatus',
      srcIP: 'SrcIP',
      updateTime: 'UpdateTime',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appStatus: 'string',
      appVersion: 'string',
      CPU: 'string',
      createTime: 'string',
      department: 'string',
      deviceBelong: 'string',
      deviceModel: 'string',
      deviceStatus: 'string',
      deviceTag: 'string',
      deviceType: 'string',
      deviceVersion: 'string',
      disk: 'string',
      dlpStatus: 'string',
      hostname: 'string',
      iaStatus: 'string',
      innerIP: 'string',
      mac: 'string',
      memory: 'string',
      nacStatus: 'string',
      paStatus: 'string',
      saseUserId: 'string',
      sharingStatus: 'boolean',
      srcIP: 'string',
      updateTime: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupRequestAttributes extends $tea.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
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
    this._endpoint = this.getEndpoint("csas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 挂载connector的应用
   * 
   * @param tmpReq - AttachApplication2ConnectorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachApplication2ConnectorResponse
   */
  async attachApplication2ConnectorWithOptions(tmpReq: AttachApplication2ConnectorRequest, runtime: $Util.RuntimeOptions): Promise<AttachApplication2ConnectorResponse> {
    Util.validateModel(tmpReq);
    let request = new AttachApplication2ConnectorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.applicationIds)) {
      request.applicationIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicationIds, "ApplicationIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationIdsShrink)) {
      body["ApplicationIds"] = request.applicationIdsShrink;
    }

    if (!Util.isUnset(request.connectorId)) {
      body["ConnectorId"] = request.connectorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AttachApplication2Connector",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachApplication2ConnectorResponse>(await this.callApi(params, req, runtime), new AttachApplication2ConnectorResponse({}));
  }

  /**
   * 挂载connector的应用
   * 
   * @param request - AttachApplication2ConnectorRequest
   * @returns AttachApplication2ConnectorResponse
   */
  async attachApplication2Connector(request: AttachApplication2ConnectorRequest): Promise<AttachApplication2ConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachApplication2ConnectorWithOptions(request, runtime);
  }

  /**
   * 创建自定义身份源用户
   * 
   * @param request - CreateClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClientUserResponse
   */
  async createClientUserWithOptions(request: CreateClientUserRequest, runtime: $Util.RuntimeOptions): Promise<CreateClientUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.idpConfigId)) {
      query["IdpConfigId"] = request.idpConfigId;
    }

    if (!Util.isUnset(request.mobileNumber)) {
      query["MobileNumber"] = request.mobileNumber;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateClientUser",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClientUserResponse>(await this.callApi(params, req, runtime), new CreateClientUserResponse({}));
  }

  /**
   * 创建自定义身份源用户
   * 
   * @param request - CreateClientUserRequest
   * @returns CreateClientUserResponse
   */
  async createClientUser(request: CreateClientUserRequest): Promise<CreateClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClientUserWithOptions(request, runtime);
  }

  /**
   * 创建动态路由
   * 
   * @param request - CreateDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDynamicRouteResponse
   */
  async createDynamicRouteWithOptions(request: CreateDynamicRouteRequest, runtime: $Util.RuntimeOptions): Promise<CreateDynamicRouteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!Util.isUnset(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.dynamicRouteType)) {
      body["DynamicRouteType"] = request.dynamicRouteType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextHop)) {
      body["NextHop"] = request.nextHop;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.regionIds)) {
      bodyFlat["RegionIds"] = request.regionIds;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDynamicRouteResponse>(await this.callApi(params, req, runtime), new CreateDynamicRouteResponse({}));
  }

  /**
   * 创建动态路由
   * 
   * @param request - CreateDynamicRouteRequest
   * @returns CreateDynamicRouteResponse
   */
  async createDynamicRoute(request: CreateDynamicRouteRequest): Promise<CreateDynamicRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDynamicRouteWithOptions(request, runtime);
  }

  /**
   * 创建自定义身份源部门
   * 
   * @param request - CreateIdpDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIdpDepartmentResponse
   */
  async createIdpDepartmentWithOptions(request: CreateIdpDepartmentRequest, runtime: $Util.RuntimeOptions): Promise<CreateIdpDepartmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.departmentName)) {
      query["DepartmentName"] = request.departmentName;
    }

    if (!Util.isUnset(request.idpConfigId)) {
      query["IdpConfigId"] = request.idpConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateIdpDepartment",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIdpDepartmentResponse>(await this.callApi(params, req, runtime), new CreateIdpDepartmentResponse({}));
  }

  /**
   * 创建自定义身份源部门
   * 
   * @param request - CreateIdpDepartmentRequest
   * @returns CreateIdpDepartmentResponse
   */
  async createIdpDepartment(request: CreateIdpDepartmentRequest): Promise<CreateIdpDepartmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIdpDepartmentWithOptions(request, runtime);
  }

  /**
   * 创建内网访问应用
   * 
   * @param request - CreatePrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrivateAccessApplicationResponse
   */
  async createPrivateAccessApplicationWithOptions(request: CreatePrivateAccessApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreatePrivateAccessApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addresses)) {
      bodyFlat["Addresses"] = request.addresses;
    }

    if (!Util.isUnset(request.browserAccessStatus)) {
      body["BrowserAccessStatus"] = request.browserAccessStatus;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.l7ProxyDomainAutomaticPrefix)) {
      body["L7ProxyDomainAutomaticPrefix"] = request.l7ProxyDomainAutomaticPrefix;
    }

    if (!Util.isUnset(request.l7ProxyDomainCustom)) {
      body["L7ProxyDomainCustom"] = request.l7ProxyDomainCustom;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.portRanges)) {
      bodyFlat["PortRanges"] = request.portRanges;
    }

    if (!Util.isUnset(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new CreatePrivateAccessApplicationResponse({}));
  }

  /**
   * 创建内网访问应用
   * 
   * @param request - CreatePrivateAccessApplicationRequest
   * @returns CreatePrivateAccessApplicationResponse
   */
  async createPrivateAccessApplication(request: CreatePrivateAccessApplicationRequest): Promise<CreatePrivateAccessApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * 创建内网访问策略
   * 
   * @param request - CreatePrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrivateAccessPolicyResponse
   */
  async createPrivateAccessPolicyWithOptions(request: CreatePrivateAccessPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreatePrivateAccessPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!Util.isUnset(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!Util.isUnset(request.customUserAttributes)) {
      bodyFlat["CustomUserAttributes"] = request.customUserAttributes;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.deviceAttributeAction)) {
      body["DeviceAttributeAction"] = request.deviceAttributeAction;
    }

    if (!Util.isUnset(request.deviceAttributeId)) {
      body["DeviceAttributeId"] = request.deviceAttributeId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.policyAction)) {
      body["PolicyAction"] = request.policyAction;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    if (!Util.isUnset(request.userGroupIds)) {
      bodyFlat["UserGroupIds"] = request.userGroupIds;
    }

    if (!Util.isUnset(request.userGroupMode)) {
      body["UserGroupMode"] = request.userGroupMode;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new CreatePrivateAccessPolicyResponse({}));
  }

  /**
   * 创建内网访问策略
   * 
   * @param request - CreatePrivateAccessPolicyRequest
   * @returns CreatePrivateAccessPolicyResponse
   */
  async createPrivateAccessPolicy(request: CreatePrivateAccessPolicyRequest): Promise<CreatePrivateAccessPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 创建内网访问标签
   * 
   * @param request - CreatePrivateAccessTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrivateAccessTagResponse
   */
  async createPrivateAccessTagWithOptions(request: CreatePrivateAccessTagRequest, runtime: $Util.RuntimeOptions): Promise<CreatePrivateAccessTagResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePrivateAccessTag",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePrivateAccessTagResponse>(await this.callApi(params, req, runtime), new CreatePrivateAccessTagResponse({}));
  }

  /**
   * 创建内网访问标签
   * 
   * @param request - CreatePrivateAccessTagRequest
   * @returns CreatePrivateAccessTagResponse
   */
  async createPrivateAccessTag(request: CreatePrivateAccessTagRequest): Promise<CreatePrivateAccessTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPrivateAccessTagWithOptions(request, runtime);
  }

  /**
   * 创建设备注册策略
   * 
   * @param tmpReq - CreateRegistrationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRegistrationPolicyResponse
   */
  async createRegistrationPolicyWithOptions(tmpReq: CreateRegistrationPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateRegistrationPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateRegistrationPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.companyLimitCount)) {
      request.companyLimitCountShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.companyLimitCount, "CompanyLimitCount", "json");
    }

    if (!Util.isUnset(tmpReq.personalLimitCount)) {
      request.personalLimitCountShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.personalLimitCount, "PersonalLimitCount", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.companyLimitCountShrink)) {
      body["CompanyLimitCount"] = request.companyLimitCountShrink;
    }

    if (!Util.isUnset(request.companyLimitType)) {
      body["CompanyLimitType"] = request.companyLimitType;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.matchMode)) {
      body["MatchMode"] = request.matchMode;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.personalLimitCountShrink)) {
      body["PersonalLimitCount"] = request.personalLimitCountShrink;
    }

    if (!Util.isUnset(request.personalLimitType)) {
      body["PersonalLimitType"] = request.personalLimitType;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userGroupIds)) {
      bodyFlat["UserGroupIds"] = request.userGroupIds;
    }

    if (!Util.isUnset(request.whitelist)) {
      bodyFlat["Whitelist"] = request.whitelist;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRegistrationPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRegistrationPolicyResponse>(await this.callApi(params, req, runtime), new CreateRegistrationPolicyResponse({}));
  }

  /**
   * 创建设备注册策略
   * 
   * @param request - CreateRegistrationPolicyRequest
   * @returns CreateRegistrationPolicyResponse
   */
  async createRegistrationPolicy(request: CreateRegistrationPolicyRequest): Promise<CreateRegistrationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRegistrationPolicyWithOptions(request, runtime);
  }

  /**
   * 创建用户组
   * 
   * @param request - CreateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserGroupResponse
   */
  async createUserGroupWithOptions(request: CreateUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateUserGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attributes)) {
      bodyFlat["Attributes"] = request.attributes;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUserGroupResponse>(await this.callApi(params, req, runtime), new CreateUserGroupResponse({}));
  }

  /**
   * 创建用户组
   * 
   * @param request - CreateUserGroupRequest
   * @returns CreateUserGroupResponse
   */
  async createUserGroup(request: CreateUserGroupRequest): Promise<CreateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
  }

  /**
   * 创建数字水印暗水印透明底图
   * 
   * @param request - CreateWmBaseImageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWmBaseImageResponse
   */
  async createWmBaseImageWithOptions(request: CreateWmBaseImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateWmBaseImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.height)) {
      body["Height"] = request.height;
    }

    if (!Util.isUnset(request.opacity)) {
      body["Opacity"] = request.opacity;
    }

    if (!Util.isUnset(request.scale)) {
      body["Scale"] = request.scale;
    }

    if (!Util.isUnset(request.width)) {
      body["Width"] = request.width;
    }

    if (!Util.isUnset(request.wmInfoBytesB64)) {
      body["WmInfoBytesB64"] = request.wmInfoBytesB64;
    }

    if (!Util.isUnset(request.wmInfoSize)) {
      body["WmInfoSize"] = request.wmInfoSize;
    }

    if (!Util.isUnset(request.wmInfoUint)) {
      body["WmInfoUint"] = request.wmInfoUint;
    }

    if (!Util.isUnset(request.wmType)) {
      body["WmType"] = request.wmType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWmBaseImage",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWmBaseImageResponse>(await this.callApi(params, req, runtime), new CreateWmBaseImageResponse({}));
  }

  /**
   * 创建数字水印暗水印透明底图
   * 
   * @param request - CreateWmBaseImageRequest
   * @returns CreateWmBaseImageResponse
   */
  async createWmBaseImage(request: CreateWmBaseImageRequest): Promise<CreateWmBaseImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWmBaseImageWithOptions(request, runtime);
  }

  /**
   * 创建嵌入水印任务
   * 
   * @param tmpReq - CreateWmEmbedTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWmEmbedTaskResponse
   */
  async createWmEmbedTaskWithOptions(tmpReq: CreateWmEmbedTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateWmEmbedTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateWmEmbedTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.documentControl)) {
      request.documentControlShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.documentControl, "DocumentControl", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.documentControlShrink)) {
      body["DocumentControl"] = request.documentControlShrink;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.filename)) {
      body["Filename"] = request.filename;
    }

    if (!Util.isUnset(request.imageEmbedJpegQuality)) {
      body["ImageEmbedJpegQuality"] = request.imageEmbedJpegQuality;
    }

    if (!Util.isUnset(request.imageEmbedLevel)) {
      body["ImageEmbedLevel"] = request.imageEmbedLevel;
    }

    if (!Util.isUnset(request.videoBitrate)) {
      body["VideoBitrate"] = request.videoBitrate;
    }

    if (!Util.isUnset(request.videoIsLong)) {
      body["VideoIsLong"] = request.videoIsLong;
    }

    if (!Util.isUnset(request.wmInfoBytesB64)) {
      body["WmInfoBytesB64"] = request.wmInfoBytesB64;
    }

    if (!Util.isUnset(request.wmInfoSize)) {
      body["WmInfoSize"] = request.wmInfoSize;
    }

    if (!Util.isUnset(request.wmInfoUint)) {
      body["WmInfoUint"] = request.wmInfoUint;
    }

    if (!Util.isUnset(request.wmType)) {
      body["WmType"] = request.wmType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWmEmbedTask",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWmEmbedTaskResponse>(await this.callApi(params, req, runtime), new CreateWmEmbedTaskResponse({}));
  }

  /**
   * 创建嵌入水印任务
   * 
   * @param request - CreateWmEmbedTaskRequest
   * @returns CreateWmEmbedTaskResponse
   */
  async createWmEmbedTask(request: CreateWmEmbedTaskRequest): Promise<CreateWmEmbedTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWmEmbedTaskWithOptions(request, runtime);
  }

  /**
   * 创建文件水印提取任务
   * 
   * @param request - CreateWmExtractTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWmExtractTaskResponse
   */
  async createWmExtractTaskWithOptions(request: CreateWmExtractTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateWmExtractTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.documentIsCapture)) {
      body["DocumentIsCapture"] = request.documentIsCapture;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.filename)) {
      body["Filename"] = request.filename;
    }

    if (!Util.isUnset(request.videoIsLong)) {
      body["VideoIsLong"] = request.videoIsLong;
    }

    if (!Util.isUnset(request.videoSpeed)) {
      body["VideoSpeed"] = request.videoSpeed;
    }

    if (!Util.isUnset(request.wmInfoSize)) {
      body["WmInfoSize"] = request.wmInfoSize;
    }

    if (!Util.isUnset(request.wmType)) {
      body["WmType"] = request.wmType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWmExtractTask",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWmExtractTaskResponse>(await this.callApi(params, req, runtime), new CreateWmExtractTaskResponse({}));
  }

  /**
   * 创建文件水印提取任务
   * 
   * @param request - CreateWmExtractTaskRequest
   * @returns CreateWmExtractTaskResponse
   */
  async createWmExtractTask(request: CreateWmExtractTaskRequest): Promise<CreateWmExtractTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWmExtractTaskWithOptions(request, runtime);
  }

  /**
   * 创建一条字符串水印信息到数字水印信息的映射记录
   * 
   * @param request - CreateWmInfoMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWmInfoMappingResponse
   */
  async createWmInfoMappingWithOptions(request: CreateWmInfoMappingRequest, runtime: $Util.RuntimeOptions): Promise<CreateWmInfoMappingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.wmInfoBytesB64)) {
      body["WmInfoBytesB64"] = request.wmInfoBytesB64;
    }

    if (!Util.isUnset(request.wmInfoSize)) {
      body["WmInfoSize"] = request.wmInfoSize;
    }

    if (!Util.isUnset(request.wmType)) {
      body["WmType"] = request.wmType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWmInfoMapping",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWmInfoMappingResponse>(await this.callApi(params, req, runtime), new CreateWmInfoMappingResponse({}));
  }

  /**
   * 创建一条字符串水印信息到数字水印信息的映射记录
   * 
   * @param request - CreateWmInfoMappingRequest
   * @returns CreateWmInfoMappingResponse
   */
  async createWmInfoMapping(request: CreateWmInfoMappingRequest): Promise<CreateWmInfoMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWmInfoMappingWithOptions(request, runtime);
  }

  /**
   * 删除自定义身份源指定用户
   * 
   * @param request - DeleteClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClientUserResponse
   */
  async deleteClientUserWithOptions(request: DeleteClientUserRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClientUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteClientUser",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClientUserResponse>(await this.callApi(params, req, runtime), new DeleteClientUserResponse({}));
  }

  /**
   * 删除自定义身份源指定用户
   * 
   * @param request - DeleteClientUserRequest
   * @returns DeleteClientUserResponse
   */
  async deleteClientUser(request: DeleteClientUserRequest): Promise<DeleteClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClientUserWithOptions(request, runtime);
  }

  /**
   * 删除动态路由
   * 
   * @param request - DeleteDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDynamicRouteResponse
   */
  async deleteDynamicRouteWithOptions(request: DeleteDynamicRouteRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDynamicRouteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dynamicRouteId)) {
      query["DynamicRouteId"] = request.dynamicRouteId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDynamicRouteResponse>(await this.callApi(params, req, runtime), new DeleteDynamicRouteResponse({}));
  }

  /**
   * 删除动态路由
   * 
   * @param request - DeleteDynamicRouteRequest
   * @returns DeleteDynamicRouteResponse
   */
  async deleteDynamicRoute(request: DeleteDynamicRouteRequest): Promise<DeleteDynamicRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDynamicRouteWithOptions(request, runtime);
  }

  /**
   * 删除指定自定义身份源部门
   * 
   * @param request - DeleteIdpDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIdpDepartmentResponse
   */
  async deleteIdpDepartmentWithOptions(request: DeleteIdpDepartmentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIdpDepartmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.idpConfigId)) {
      query["IdpConfigId"] = request.idpConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIdpDepartment",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteIdpDepartmentResponse>(await this.callApi(params, req, runtime), new DeleteIdpDepartmentResponse({}));
  }

  /**
   * 删除指定自定义身份源部门
   * 
   * @param request - DeleteIdpDepartmentRequest
   * @returns DeleteIdpDepartmentResponse
   */
  async deleteIdpDepartment(request: DeleteIdpDepartmentRequest): Promise<DeleteIdpDepartmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIdpDepartmentWithOptions(request, runtime);
  }

  /**
   * 删除内网访问应用
   * 
   * @param request - DeletePrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrivateAccessApplicationResponse
   */
  async deletePrivateAccessApplicationWithOptions(request: DeletePrivateAccessApplicationRequest, runtime: $Util.RuntimeOptions): Promise<DeletePrivateAccessApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeletePrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new DeletePrivateAccessApplicationResponse({}));
  }

  /**
   * 删除内网访问应用
   * 
   * @param request - DeletePrivateAccessApplicationRequest
   * @returns DeletePrivateAccessApplicationResponse
   */
  async deletePrivateAccessApplication(request: DeletePrivateAccessApplicationRequest): Promise<DeletePrivateAccessApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * 删除内网访问策略
   * 
   * @param request - DeletePrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrivateAccessPolicyResponse
   */
  async deletePrivateAccessPolicyWithOptions(request: DeletePrivateAccessPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeletePrivateAccessPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeletePrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new DeletePrivateAccessPolicyResponse({}));
  }

  /**
   * 删除内网访问策略
   * 
   * @param request - DeletePrivateAccessPolicyRequest
   * @returns DeletePrivateAccessPolicyResponse
   */
  async deletePrivateAccessPolicy(request: DeletePrivateAccessPolicyRequest): Promise<DeletePrivateAccessPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 删除内网访问标签
   * 
   * @param request - DeletePrivateAccessTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrivateAccessTagResponse
   */
  async deletePrivateAccessTagWithOptions(request: DeletePrivateAccessTagRequest, runtime: $Util.RuntimeOptions): Promise<DeletePrivateAccessTagResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.tagId)) {
      body["TagId"] = request.tagId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeletePrivateAccessTag",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePrivateAccessTagResponse>(await this.callApi(params, req, runtime), new DeletePrivateAccessTagResponse({}));
  }

  /**
   * 删除内网访问标签
   * 
   * @param request - DeletePrivateAccessTagRequest
   * @returns DeletePrivateAccessTagResponse
   */
  async deletePrivateAccessTag(request: DeletePrivateAccessTagRequest): Promise<DeletePrivateAccessTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePrivateAccessTagWithOptions(request, runtime);
  }

  /**
   * 删除设备注册策略
   * 
   * @param request - DeleteRegistrationPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRegistrationPoliciesResponse
   */
  async deleteRegistrationPoliciesWithOptions(request: DeleteRegistrationPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteRegistrationPoliciesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.policyIds)) {
      bodyFlat["PolicyIds"] = request.policyIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteRegistrationPolicies",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteRegistrationPoliciesResponse>(await this.callApi(params, req, runtime), new DeleteRegistrationPoliciesResponse({}));
  }

  /**
   * 删除设备注册策略
   * 
   * @param request - DeleteRegistrationPoliciesRequest
   * @returns DeleteRegistrationPoliciesResponse
   */
  async deleteRegistrationPolicies(request: DeleteRegistrationPoliciesRequest): Promise<DeleteRegistrationPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRegistrationPoliciesWithOptions(request, runtime);
  }

  /**
   * 批量删除用户非在线设备
   * 
   * @param request - DeleteUserDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserDevicesResponse
   */
  async deleteUserDevicesWithOptions(request: DeleteUserDevicesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserDevicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceTags)) {
      bodyFlat["DeviceTags"] = request.deviceTags;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserDevices",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserDevicesResponse>(await this.callApi(params, req, runtime), new DeleteUserDevicesResponse({}));
  }

  /**
   * 批量删除用户非在线设备
   * 
   * @param request - DeleteUserDevicesRequest
   * @returns DeleteUserDevicesResponse
   */
  async deleteUserDevices(request: DeleteUserDevicesRequest): Promise<DeleteUserDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserDevicesWithOptions(request, runtime);
  }

  /**
   * 删除用户组
   * 
   * @param request - DeleteUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroupWithOptions(request: DeleteUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userGroupId)) {
      body["UserGroupId"] = request.userGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUserGroupResponse>(await this.callApi(params, req, runtime), new DeleteUserGroupResponse({}));
  }

  /**
   * 删除用户组
   * 
   * @param request - DeleteUserGroupRequest
   * @returns DeleteUserGroupResponse
   */
  async deleteUserGroup(request: DeleteUserGroupRequest): Promise<DeleteUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

  /**
   * 卸载connector的应用
   * 
   * @param tmpReq - DetachApplication2ConnectorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachApplication2ConnectorResponse
   */
  async detachApplication2ConnectorWithOptions(tmpReq: DetachApplication2ConnectorRequest, runtime: $Util.RuntimeOptions): Promise<DetachApplication2ConnectorResponse> {
    Util.validateModel(tmpReq);
    let request = new DetachApplication2ConnectorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.applicationIds)) {
      request.applicationIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicationIds, "ApplicationIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationIdsShrink)) {
      body["ApplicationIds"] = request.applicationIdsShrink;
    }

    if (!Util.isUnset(request.connectorId)) {
      body["ConnectorId"] = request.connectorId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetachApplication2Connector",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachApplication2ConnectorResponse>(await this.callApi(params, req, runtime), new DetachApplication2ConnectorResponse({}));
  }

  /**
   * 卸载connector的应用
   * 
   * @param request - DetachApplication2ConnectorRequest
   * @returns DetachApplication2ConnectorResponse
   */
  async detachApplication2Connector(request: DetachApplication2ConnectorRequest): Promise<DetachApplication2ConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachApplication2ConnectorWithOptions(request, runtime);
  }

  /**
   * 批量查询用户设备列表
   * 
   * @param request - ExportUserDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportUserDevicesResponse
   */
  async exportUserDevicesWithOptions(request: ExportUserDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ExportUserDevicesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appStatuses)) {
      bodyFlat["AppStatuses"] = request.appStatuses;
    }

    if (!Util.isUnset(request.department)) {
      body["Department"] = request.department;
    }

    if (!Util.isUnset(request.deviceBelong)) {
      body["DeviceBelong"] = request.deviceBelong;
    }

    if (!Util.isUnset(request.deviceStatuses)) {
      bodyFlat["DeviceStatuses"] = request.deviceStatuses;
    }

    if (!Util.isUnset(request.deviceTags)) {
      bodyFlat["DeviceTags"] = request.deviceTags;
    }

    if (!Util.isUnset(request.deviceTypes)) {
      bodyFlat["DeviceTypes"] = request.deviceTypes;
    }

    if (!Util.isUnset(request.dlpStatuses)) {
      bodyFlat["DlpStatuses"] = request.dlpStatuses;
    }

    if (!Util.isUnset(request.hostname)) {
      body["Hostname"] = request.hostname;
    }

    if (!Util.isUnset(request.iaStatuses)) {
      bodyFlat["IaStatuses"] = request.iaStatuses;
    }

    if (!Util.isUnset(request.mac)) {
      body["Mac"] = request.mac;
    }

    if (!Util.isUnset(request.nacStatuses)) {
      bodyFlat["NacStatuses"] = request.nacStatuses;
    }

    if (!Util.isUnset(request.paStatuses)) {
      bodyFlat["PaStatuses"] = request.paStatuses;
    }

    if (!Util.isUnset(request.saseUserId)) {
      body["SaseUserId"] = request.saseUserId;
    }

    if (!Util.isUnset(request.sharingStatus)) {
      body["SharingStatus"] = request.sharingStatus;
    }

    if (!Util.isUnset(request.username)) {
      body["Username"] = request.username;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExportUserDevices",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportUserDevicesResponse>(await this.callApi(params, req, runtime), new ExportUserDevicesResponse({}));
  }

  /**
   * 批量查询用户设备列表
   * 
   * @param request - ExportUserDevicesRequest
   * @returns ExportUserDevicesResponse
   */
  async exportUserDevices(request: ExportUserDevicesRequest): Promise<ExportUserDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportUserDevicesWithOptions(request, runtime);
  }

  /**
   * 查询已启用的身份源配置
   * 
   * @param request - GetActiveIdpConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetActiveIdpConfigResponse
   */
  async getActiveIdpConfigWithOptions(runtime: $Util.RuntimeOptions): Promise<GetActiveIdpConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetActiveIdpConfig",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetActiveIdpConfigResponse>(await this.callApi(params, req, runtime), new GetActiveIdpConfigResponse({}));
  }

  /**
   * 查询已启用的身份源配置
   * @returns GetActiveIdpConfigResponse
   */
  async getActiveIdpConfig(): Promise<GetActiveIdpConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getActiveIdpConfigWithOptions(runtime);
  }

  /**
   * 查询自定义身份源指定用户
   * 
   * @param request - GetClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClientUserResponse
   */
  async getClientUserWithOptions(request: GetClientUserRequest, runtime: $Util.RuntimeOptions): Promise<GetClientUserResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetClientUser",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetClientUserResponse>(await this.callApi(params, req, runtime), new GetClientUserResponse({}));
  }

  /**
   * 查询自定义身份源指定用户
   * 
   * @param request - GetClientUserRequest
   * @returns GetClientUserResponse
   */
  async getClientUser(request: GetClientUserRequest): Promise<GetClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClientUserWithOptions(request, runtime);
  }

  /**
   * 查询动态路由详情
   * 
   * @param request - GetDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDynamicRouteResponse
   */
  async getDynamicRouteWithOptions(request: GetDynamicRouteRequest, runtime: $Util.RuntimeOptions): Promise<GetDynamicRouteResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDynamicRouteResponse>(await this.callApi(params, req, runtime), new GetDynamicRouteResponse({}));
  }

  /**
   * 查询动态路由详情
   * 
   * @param request - GetDynamicRouteRequest
   * @returns GetDynamicRouteResponse
   */
  async getDynamicRoute(request: GetDynamicRouteRequest): Promise<GetDynamicRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDynamicRouteWithOptions(request, runtime);
  }

  /**
   * 查询身份源配置详情
   * 
   * @param request - GetIdpConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdpConfigResponse
   */
  async getIdpConfigWithOptions(request: GetIdpConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetIdpConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIdpConfig",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIdpConfigResponse>(await this.callApi(params, req, runtime), new GetIdpConfigResponse({}));
  }

  /**
   * 查询身份源配置详情
   * 
   * @param request - GetIdpConfigRequest
   * @returns GetIdpConfigResponse
   */
  async getIdpConfig(request: GetIdpConfigRequest): Promise<GetIdpConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIdpConfigWithOptions(request, runtime);
  }

  /**
   * 查询内网访问应用详情
   * 
   * @param request - GetPrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrivateAccessApplicationResponse
   */
  async getPrivateAccessApplicationWithOptions(request: GetPrivateAccessApplicationRequest, runtime: $Util.RuntimeOptions): Promise<GetPrivateAccessApplicationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new GetPrivateAccessApplicationResponse({}));
  }

  /**
   * 查询内网访问应用详情
   * 
   * @param request - GetPrivateAccessApplicationRequest
   * @returns GetPrivateAccessApplicationResponse
   */
  async getPrivateAccessApplication(request: GetPrivateAccessApplicationRequest): Promise<GetPrivateAccessApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * 查询内网访问策略详情
   * 
   * @param request - GetPrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrivateAccessPolicyResponse
   */
  async getPrivateAccessPolicyWithOptions(request: GetPrivateAccessPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetPrivateAccessPolicyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new GetPrivateAccessPolicyResponse({}));
  }

  /**
   * 查询内网访问策略详情
   * 
   * @param request - GetPrivateAccessPolicyRequest
   * @returns GetPrivateAccessPolicyResponse
   */
  async getPrivateAccessPolicy(request: GetPrivateAccessPolicyRequest): Promise<GetPrivateAccessPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 查询设备注册策略详情
   * 
   * @param request - GetRegistrationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegistrationPolicyResponse
   */
  async getRegistrationPolicyWithOptions(request: GetRegistrationPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetRegistrationPolicyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRegistrationPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetRegistrationPolicyResponse>(await this.callApi(params, req, runtime), new GetRegistrationPolicyResponse({}));
  }

  /**
   * 查询设备注册策略详情
   * 
   * @param request - GetRegistrationPolicyRequest
   * @returns GetRegistrationPolicyResponse
   */
  async getRegistrationPolicy(request: GetRegistrationPolicyRequest): Promise<GetRegistrationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRegistrationPolicyWithOptions(request, runtime);
  }

  /**
   * 查询用户设备详情
   * 
   * @param request - GetUserDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserDeviceResponse
   */
  async getUserDeviceWithOptions(request: GetUserDeviceRequest, runtime: $Util.RuntimeOptions): Promise<GetUserDeviceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserDevice",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserDeviceResponse>(await this.callApi(params, req, runtime), new GetUserDeviceResponse({}));
  }

  /**
   * 查询用户设备详情
   * 
   * @param request - GetUserDeviceRequest
   * @returns GetUserDeviceResponse
   */
  async getUserDevice(request: GetUserDeviceRequest): Promise<GetUserDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserDeviceWithOptions(request, runtime);
  }

  /**
   * 查询用户组详情
   * 
   * @param request - GetUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserGroupResponse
   */
  async getUserGroupWithOptions(request: GetUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<GetUserGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserGroupResponse>(await this.callApi(params, req, runtime), new GetUserGroupResponse({}));
  }

  /**
   * 查询用户组详情
   * 
   * @param request - GetUserGroupRequest
   * @returns GetUserGroupResponse
   */
  async getUserGroup(request: GetUserGroupRequest): Promise<GetUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserGroupWithOptions(request, runtime);
  }

  /**
   * 查询嵌入水印任务
   * 
   * @param request - GetWmEmbedTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWmEmbedTaskResponse
   */
  async getWmEmbedTaskWithOptions(request: GetWmEmbedTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetWmEmbedTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWmEmbedTask",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWmEmbedTaskResponse>(await this.callApi(params, req, runtime), new GetWmEmbedTaskResponse({}));
  }

  /**
   * 查询嵌入水印任务
   * 
   * @param request - GetWmEmbedTaskRequest
   * @returns GetWmEmbedTaskResponse
   */
  async getWmEmbedTask(request: GetWmEmbedTaskRequest): Promise<GetWmEmbedTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWmEmbedTaskWithOptions(request, runtime);
  }

  /**
   * 查询文件水印提取任务详情
   * 
   * @param request - GetWmExtractTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWmExtractTaskResponse
   */
  async getWmExtractTaskWithOptions(request: GetWmExtractTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetWmExtractTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWmExtractTask",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWmExtractTaskResponse>(await this.callApi(params, req, runtime), new GetWmExtractTaskResponse({}));
  }

  /**
   * 查询文件水印提取任务详情
   * 
   * @param request - GetWmExtractTaskRequest
   * @returns GetWmExtractTaskResponse
   */
  async getWmExtractTask(request: GetWmExtractTaskRequest): Promise<GetWmExtractTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWmExtractTaskWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问策略的应用
   * 
   * @param request - ListApplicationsForPrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForPrivateAccessPolicyResponse
   */
  async listApplicationsForPrivateAccessPolicyWithOptions(request: ListApplicationsForPrivateAccessPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationsForPrivateAccessPolicyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplicationsForPrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationsForPrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new ListApplicationsForPrivateAccessPolicyResponse({}));
  }

  /**
   * 批量查询内网访问策略的应用
   * 
   * @param request - ListApplicationsForPrivateAccessPolicyRequest
   * @returns ListApplicationsForPrivateAccessPolicyResponse
   */
  async listApplicationsForPrivateAccessPolicy(request: ListApplicationsForPrivateAccessPolicyRequest): Promise<ListApplicationsForPrivateAccessPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsForPrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问标签的应用
   * 
   * @param request - ListApplicationsForPrivateAccessTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForPrivateAccessTagResponse
   */
  async listApplicationsForPrivateAccessTagWithOptions(request: ListApplicationsForPrivateAccessTagRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationsForPrivateAccessTagResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplicationsForPrivateAccessTag",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListApplicationsForPrivateAccessTagResponse>(await this.callApi(params, req, runtime), new ListApplicationsForPrivateAccessTagResponse({}));
  }

  /**
   * 批量查询内网访问标签的应用
   * 
   * @param request - ListApplicationsForPrivateAccessTagRequest
   * @returns ListApplicationsForPrivateAccessTagResponse
   */
  async listApplicationsForPrivateAccessTag(request: ListApplicationsForPrivateAccessTagRequest): Promise<ListApplicationsForPrivateAccessTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsForPrivateAccessTagWithOptions(request, runtime);
  }

  /**
   * 查询自定义身份源用户
   * 
   * @param request - ListClientUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClientUsersResponse
   */
  async listClientUsersWithOptions(request: ListClientUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListClientUsersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClientUsers",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClientUsersResponse>(await this.callApi(params, req, runtime), new ListClientUsersResponse({}));
  }

  /**
   * 查询自定义身份源用户
   * 
   * @param request - ListClientUsersRequest
   * @returns ListClientUsersResponse
   */
  async listClientUsers(request: ListClientUsersRequest): Promise<ListClientUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClientUsersWithOptions(request, runtime);
  }

  /**
   * 批量查询connector
   * 
   * @param request - ListConnectorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConnectorsResponse
   */
  async listConnectorsWithOptions(request: ListConnectorsRequest, runtime: $Util.RuntimeOptions): Promise<ListConnectorsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListConnectors",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListConnectorsResponse>(await this.callApi(params, req, runtime), new ListConnectorsResponse({}));
  }

  /**
   * 批量查询connector
   * 
   * @param request - ListConnectorsRequest
   * @returns ListConnectorsResponse
   */
  async listConnectors(request: ListConnectorsRequest): Promise<ListConnectorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectorsWithOptions(request, runtime);
  }

  /**
   * 批量查询动态路由的地域
   * 
   * @param request - ListDynamicRouteRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDynamicRouteRegionsResponse
   */
  async listDynamicRouteRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListDynamicRouteRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListDynamicRouteRegions",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDynamicRouteRegionsResponse>(await this.callApi(params, req, runtime), new ListDynamicRouteRegionsResponse({}));
  }

  /**
   * 批量查询动态路由的地域
   * @returns ListDynamicRouteRegionsResponse
   */
  async listDynamicRouteRegions(): Promise<ListDynamicRouteRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDynamicRouteRegionsWithOptions(runtime);
  }

  /**
   * 批量查询动态路由
   * 
   * @param request - ListDynamicRoutesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDynamicRoutesResponse
   */
  async listDynamicRoutesWithOptions(request: ListDynamicRoutesRequest, runtime: $Util.RuntimeOptions): Promise<ListDynamicRoutesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDynamicRoutes",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDynamicRoutesResponse>(await this.callApi(params, req, runtime), new ListDynamicRoutesResponse({}));
  }

  /**
   * 批量查询动态路由
   * 
   * @param request - ListDynamicRoutesRequest
   * @returns ListDynamicRoutesResponse
   */
  async listDynamicRoutes(request: ListDynamicRoutesRequest): Promise<ListDynamicRoutesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDynamicRoutesWithOptions(request, runtime);
  }

  /**
   * 批量查询超额注册申请列表
   * 
   * @param request - ListExcessiveDeviceRegistrationApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExcessiveDeviceRegistrationApplicationsResponse
   */
  async listExcessiveDeviceRegistrationApplicationsWithOptions(request: ListExcessiveDeviceRegistrationApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListExcessiveDeviceRegistrationApplicationsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExcessiveDeviceRegistrationApplications",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListExcessiveDeviceRegistrationApplicationsResponse>(await this.callApi(params, req, runtime), new ListExcessiveDeviceRegistrationApplicationsResponse({}));
  }

  /**
   * 批量查询超额注册申请列表
   * 
   * @param request - ListExcessiveDeviceRegistrationApplicationsRequest
   * @returns ListExcessiveDeviceRegistrationApplicationsResponse
   */
  async listExcessiveDeviceRegistrationApplications(request: ListExcessiveDeviceRegistrationApplicationsRequest): Promise<ListExcessiveDeviceRegistrationApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExcessiveDeviceRegistrationApplicationsWithOptions(request, runtime);
  }

  /**
   * 查询IDP配置
   * 
   * @param request - ListIdpConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdpConfigsResponse
   */
  async listIdpConfigsWithOptions(request: ListIdpConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListIdpConfigsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIdpConfigs",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIdpConfigsResponse>(await this.callApi(params, req, runtime), new ListIdpConfigsResponse({}));
  }

  /**
   * 查询IDP配置
   * 
   * @param request - ListIdpConfigsRequest
   * @returns ListIdpConfigsResponse
   */
  async listIdpConfigs(request: ListIdpConfigsRequest): Promise<ListIdpConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIdpConfigsWithOptions(request, runtime);
  }

  /**
   * 查询自定义身份源部门
   * 
   * @param request - ListIdpDepartmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdpDepartmentsResponse
   */
  async listIdpDepartmentsWithOptions(request: ListIdpDepartmentsRequest, runtime: $Util.RuntimeOptions): Promise<ListIdpDepartmentsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIdpDepartments",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIdpDepartmentsResponse>(await this.callApi(params, req, runtime), new ListIdpDepartmentsResponse({}));
  }

  /**
   * 查询自定义身份源部门
   * 
   * @param request - ListIdpDepartmentsRequest
   * @returns ListIdpDepartmentsResponse
   */
  async listIdpDepartments(request: ListIdpDepartmentsRequest): Promise<ListIdpDepartmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIdpDepartmentsWithOptions(request, runtime);
  }

  /**
   * 入网用户列表
   * 
   * @param request - ListNacUserCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNacUserCertResponse
   */
  async listNacUserCertWithOptions(request: ListNacUserCertRequest, runtime: $Util.RuntimeOptions): Promise<ListNacUserCertResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.department)) {
      query["Department"] = request.department;
    }

    if (!Util.isUnset(request.deviceType)) {
      query["DeviceType"] = request.deviceType;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNacUserCert",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNacUserCertResponse>(await this.callApi(params, req, runtime), new ListNacUserCertResponse({}));
  }

  /**
   * 入网用户列表
   * 
   * @param request - ListNacUserCertRequest
   * @returns ListNacUserCertResponse
   */
  async listNacUserCert(request: ListNacUserCertRequest): Promise<ListNacUserCertResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNacUserCertWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问应用的策略
   * 
   * @param request - ListPolicesForPrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicesForPrivateAccessApplicationResponse
   */
  async listPolicesForPrivateAccessApplicationWithOptions(request: ListPolicesForPrivateAccessApplicationRequest, runtime: $Util.RuntimeOptions): Promise<ListPolicesForPrivateAccessApplicationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPolicesForPrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPolicesForPrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new ListPolicesForPrivateAccessApplicationResponse({}));
  }

  /**
   * 批量查询内网访问应用的策略
   * 
   * @param request - ListPolicesForPrivateAccessApplicationRequest
   * @returns ListPolicesForPrivateAccessApplicationResponse
   */
  async listPolicesForPrivateAccessApplication(request: ListPolicesForPrivateAccessApplicationRequest): Promise<ListPolicesForPrivateAccessApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicesForPrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问标签的策略
   * 
   * @param request - ListPolicesForPrivateAccessTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicesForPrivateAccessTagResponse
   */
  async listPolicesForPrivateAccessTagWithOptions(request: ListPolicesForPrivateAccessTagRequest, runtime: $Util.RuntimeOptions): Promise<ListPolicesForPrivateAccessTagResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPolicesForPrivateAccessTag",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPolicesForPrivateAccessTagResponse>(await this.callApi(params, req, runtime), new ListPolicesForPrivateAccessTagResponse({}));
  }

  /**
   * 批量查询内网访问标签的策略
   * 
   * @param request - ListPolicesForPrivateAccessTagRequest
   * @returns ListPolicesForPrivateAccessTagResponse
   */
  async listPolicesForPrivateAccessTag(request: ListPolicesForPrivateAccessTagRequest): Promise<ListPolicesForPrivateAccessTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicesForPrivateAccessTagWithOptions(request, runtime);
  }

  /**
   * 批量查询用户组的策略
   * 
   * @param request - ListPolicesForUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPolicesForUserGroupResponse
   */
  async listPolicesForUserGroupWithOptions(request: ListPolicesForUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListPolicesForUserGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPolicesForUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPolicesForUserGroupResponse>(await this.callApi(params, req, runtime), new ListPolicesForUserGroupResponse({}));
  }

  /**
   * 批量查询用户组的策略
   * 
   * @param request - ListPolicesForUserGroupRequest
   * @returns ListPolicesForUserGroupResponse
   */
  async listPolicesForUserGroup(request: ListPolicesForUserGroupRequest): Promise<ListPolicesForUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicesForUserGroupWithOptions(request, runtime);
  }

  /**
   * pop节点流量统计
   * 
   * @param request - ListPopTrafficStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPopTrafficStatisticsResponse
   */
  async listPopTrafficStatisticsWithOptions(request: ListPopTrafficStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<ListPopTrafficStatisticsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPopTrafficStatistics",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPopTrafficStatisticsResponse>(await this.callApi(params, req, runtime), new ListPopTrafficStatisticsResponse({}));
  }

  /**
   * pop节点流量统计
   * 
   * @param request - ListPopTrafficStatisticsRequest
   * @returns ListPopTrafficStatisticsResponse
   */
  async listPopTrafficStatistics(request: ListPopTrafficStatisticsRequest): Promise<ListPopTrafficStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPopTrafficStatisticsWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问应用
   * 
   * @param request - ListPrivateAccessApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateAccessApplicationsResponse
   */
  async listPrivateAccessApplicationsWithOptions(request: ListPrivateAccessApplicationsRequest, runtime: $Util.RuntimeOptions): Promise<ListPrivateAccessApplicationsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPrivateAccessApplications",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPrivateAccessApplicationsResponse>(await this.callApi(params, req, runtime), new ListPrivateAccessApplicationsResponse({}));
  }

  /**
   * 批量查询内网访问应用
   * 
   * @param request - ListPrivateAccessApplicationsRequest
   * @returns ListPrivateAccessApplicationsResponse
   */
  async listPrivateAccessApplications(request: ListPrivateAccessApplicationsRequest): Promise<ListPrivateAccessApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrivateAccessApplicationsWithOptions(request, runtime);
  }

  /**
   * 批量查询动态路由的内网访问应用
   * 
   * @param request - ListPrivateAccessApplicationsForDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateAccessApplicationsForDynamicRouteResponse
   */
  async listPrivateAccessApplicationsForDynamicRouteWithOptions(request: ListPrivateAccessApplicationsForDynamicRouteRequest, runtime: $Util.RuntimeOptions): Promise<ListPrivateAccessApplicationsForDynamicRouteResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPrivateAccessApplicationsForDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPrivateAccessApplicationsForDynamicRouteResponse>(await this.callApi(params, req, runtime), new ListPrivateAccessApplicationsForDynamicRouteResponse({}));
  }

  /**
   * 批量查询动态路由的内网访问应用
   * 
   * @param request - ListPrivateAccessApplicationsForDynamicRouteRequest
   * @returns ListPrivateAccessApplicationsForDynamicRouteResponse
   */
  async listPrivateAccessApplicationsForDynamicRoute(request: ListPrivateAccessApplicationsForDynamicRouteRequest): Promise<ListPrivateAccessApplicationsForDynamicRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrivateAccessApplicationsForDynamicRouteWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问策略
   * 
   * @param request - ListPrivateAccessPolicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateAccessPolicesResponse
   */
  async listPrivateAccessPolicesWithOptions(request: ListPrivateAccessPolicesRequest, runtime: $Util.RuntimeOptions): Promise<ListPrivateAccessPolicesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPrivateAccessPolices",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPrivateAccessPolicesResponse>(await this.callApi(params, req, runtime), new ListPrivateAccessPolicesResponse({}));
  }

  /**
   * 批量查询内网访问策略
   * 
   * @param request - ListPrivateAccessPolicesRequest
   * @returns ListPrivateAccessPolicesResponse
   */
  async listPrivateAccessPolices(request: ListPrivateAccessPolicesRequest): Promise<ListPrivateAccessPolicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrivateAccessPolicesWithOptions(request, runtime);
  }

  /**
   * Queries the information about all internal access tags within the current Alibaba Cloud account.
   * 
   * @param request - ListPrivateAccessTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateAccessTagsResponse
   */
  async listPrivateAccessTagsWithOptions(request: ListPrivateAccessTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListPrivateAccessTagsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPrivateAccessTags",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPrivateAccessTagsResponse>(await this.callApi(params, req, runtime), new ListPrivateAccessTagsResponse({}));
  }

  /**
   * Queries the information about all internal access tags within the current Alibaba Cloud account.
   * 
   * @param request - ListPrivateAccessTagsRequest
   * @returns ListPrivateAccessTagsResponse
   */
  async listPrivateAccessTags(request: ListPrivateAccessTagsRequest): Promise<ListPrivateAccessTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrivateAccessTagsWithOptions(request, runtime);
  }

  /**
   * 批量查询动态路由的内网访问标签
   * 
   * @param request - ListPrivateAccessTagsForDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrivateAccessTagsForDynamicRouteResponse
   */
  async listPrivateAccessTagsForDynamicRouteWithOptions(request: ListPrivateAccessTagsForDynamicRouteRequest, runtime: $Util.RuntimeOptions): Promise<ListPrivateAccessTagsForDynamicRouteResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPrivateAccessTagsForDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPrivateAccessTagsForDynamicRouteResponse>(await this.callApi(params, req, runtime), new ListPrivateAccessTagsForDynamicRouteResponse({}));
  }

  /**
   * 批量查询动态路由的内网访问标签
   * 
   * @param request - ListPrivateAccessTagsForDynamicRouteRequest
   * @returns ListPrivateAccessTagsForDynamicRouteResponse
   */
  async listPrivateAccessTagsForDynamicRoute(request: ListPrivateAccessTagsForDynamicRouteRequest): Promise<ListPrivateAccessTagsForDynamicRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrivateAccessTagsForDynamicRouteWithOptions(request, runtime);
  }

  /**
   * 查询用户设备注册策略列表
   * 
   * @param request - ListRegistrationPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegistrationPoliciesResponse
   */
  async listRegistrationPoliciesWithOptions(request: ListRegistrationPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListRegistrationPoliciesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRegistrationPolicies",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRegistrationPoliciesResponse>(await this.callApi(params, req, runtime), new ListRegistrationPoliciesResponse({}));
  }

  /**
   * 查询用户设备注册策略列表
   * 
   * @param request - ListRegistrationPoliciesRequest
   * @returns ListRegistrationPoliciesResponse
   */
  async listRegistrationPolicies(request: ListRegistrationPoliciesRequest): Promise<ListRegistrationPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegistrationPoliciesWithOptions(request, runtime);
  }

  /**
   * 查询用户组相关的设备注册策略
   * 
   * @param request - ListRegistrationPoliciesForUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegistrationPoliciesForUserGroupResponse
   */
  async listRegistrationPoliciesForUserGroupWithOptions(request: ListRegistrationPoliciesForUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListRegistrationPoliciesForUserGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRegistrationPoliciesForUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRegistrationPoliciesForUserGroupResponse>(await this.callApi(params, req, runtime), new ListRegistrationPoliciesForUserGroupResponse({}));
  }

  /**
   * 查询用户组相关的设备注册策略
   * 
   * @param request - ListRegistrationPoliciesForUserGroupRequest
   * @returns ListRegistrationPoliciesForUserGroupResponse
   */
  async listRegistrationPoliciesForUserGroup(request: ListRegistrationPoliciesForUserGroupRequest): Promise<ListRegistrationPoliciesForUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegistrationPoliciesForUserGroupWithOptions(request, runtime);
  }

  /**
   * 批量查询终端安装软件列表
   * 
   * @param request - ListSoftwareForUserDeviceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSoftwareForUserDeviceResponse
   */
  async listSoftwareForUserDeviceWithOptions(request: ListSoftwareForUserDeviceRequest, runtime: $Util.RuntimeOptions): Promise<ListSoftwareForUserDeviceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSoftwareForUserDevice",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSoftwareForUserDeviceResponse>(await this.callApi(params, req, runtime), new ListSoftwareForUserDeviceResponse({}));
  }

  /**
   * 批量查询终端安装软件列表
   * 
   * @param request - ListSoftwareForUserDeviceRequest
   * @returns ListSoftwareForUserDeviceResponse
   */
  async listSoftwareForUserDevice(request: ListSoftwareForUserDeviceRequest): Promise<ListSoftwareForUserDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSoftwareForUserDeviceWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问应用的标签
   * 
   * @param request - ListTagsForPrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsForPrivateAccessApplicationResponse
   */
  async listTagsForPrivateAccessApplicationWithOptions(request: ListTagsForPrivateAccessApplicationRequest, runtime: $Util.RuntimeOptions): Promise<ListTagsForPrivateAccessApplicationResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagsForPrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagsForPrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new ListTagsForPrivateAccessApplicationResponse({}));
  }

  /**
   * 批量查询内网访问应用的标签
   * 
   * @param request - ListTagsForPrivateAccessApplicationRequest
   * @returns ListTagsForPrivateAccessApplicationResponse
   */
  async listTagsForPrivateAccessApplication(request: ListTagsForPrivateAccessApplicationRequest): Promise<ListTagsForPrivateAccessApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagsForPrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问策略的标签
   * 
   * @param request - ListTagsForPrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsForPrivateAccessPolicyResponse
   */
  async listTagsForPrivateAccessPolicyWithOptions(request: ListTagsForPrivateAccessPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ListTagsForPrivateAccessPolicyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagsForPrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagsForPrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new ListTagsForPrivateAccessPolicyResponse({}));
  }

  /**
   * 批量查询内网访问策略的标签
   * 
   * @param request - ListTagsForPrivateAccessPolicyRequest
   * @returns ListTagsForPrivateAccessPolicyResponse
   */
  async listTagsForPrivateAccessPolicy(request: ListTagsForPrivateAccessPolicyRequest): Promise<ListTagsForPrivateAccessPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagsForPrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 批量查询用户设备列表
   * 
   * @param request - ListUserDevicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserDevicesResponse
   */
  async listUserDevicesWithOptions(request: ListUserDevicesRequest, runtime: $Util.RuntimeOptions): Promise<ListUserDevicesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserDevices",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserDevicesResponse>(await this.callApi(params, req, runtime), new ListUserDevicesResponse({}));
  }

  /**
   * 批量查询用户设备列表
   * 
   * @param request - ListUserDevicesRequest
   * @returns ListUserDevicesResponse
   */
  async listUserDevices(request: ListUserDevicesRequest): Promise<ListUserDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserDevicesWithOptions(request, runtime);
  }

  /**
   * 批量查询用户组
   * 
   * @param request - ListUserGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsResponse
   */
  async listUserGroupsWithOptions(request: ListUserGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserGroupsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserGroups",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserGroupsResponse>(await this.callApi(params, req, runtime), new ListUserGroupsResponse({}));
  }

  /**
   * 批量查询用户组
   * 
   * @param request - ListUserGroupsRequest
   * @returns ListUserGroupsResponse
   */
  async listUserGroups(request: ListUserGroupsRequest): Promise<ListUserGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGroupsWithOptions(request, runtime);
  }

  /**
   * 批量查询内网访问策略的用户组
   * 
   * @param request - ListUserGroupsForPrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsForPrivateAccessPolicyResponse
   */
  async listUserGroupsForPrivateAccessPolicyWithOptions(request: ListUserGroupsForPrivateAccessPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ListUserGroupsForPrivateAccessPolicyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserGroupsForPrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserGroupsForPrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new ListUserGroupsForPrivateAccessPolicyResponse({}));
  }

  /**
   * 批量查询内网访问策略的用户组
   * 
   * @param request - ListUserGroupsForPrivateAccessPolicyRequest
   * @returns ListUserGroupsForPrivateAccessPolicyResponse
   */
  async listUserGroupsForPrivateAccessPolicy(request: ListUserGroupsForPrivateAccessPolicyRequest): Promise<ListUserGroupsForPrivateAccessPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGroupsForPrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 查询设备注册策略相关用户组
   * 
   * @param request - ListUserGroupsForRegistrationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserGroupsForRegistrationPolicyResponse
   */
  async listUserGroupsForRegistrationPolicyWithOptions(request: ListUserGroupsForRegistrationPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ListUserGroupsForRegistrationPolicyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserGroupsForRegistrationPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserGroupsForRegistrationPolicyResponse>(await this.callApi(params, req, runtime), new ListUserGroupsForRegistrationPolicyResponse({}));
  }

  /**
   * 查询设备注册策略相关用户组
   * 
   * @param request - ListUserGroupsForRegistrationPolicyRequest
   * @returns ListUserGroupsForRegistrationPolicyResponse
   */
  async listUserGroupsForRegistrationPolicy(request: ListUserGroupsForRegistrationPolicyRequest): Promise<ListUserGroupsForRegistrationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGroupsForRegistrationPolicyWithOptions(request, runtime);
  }

  /**
   * 列表查询登陆用户
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  /**
   * 列表查询登陆用户
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * 根据数字水印信息查询字符串水印信息
   * 
   * @param request - LookupWmInfoMappingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LookupWmInfoMappingResponse
   */
  async lookupWmInfoMappingWithOptions(request: LookupWmInfoMappingRequest, runtime: $Util.RuntimeOptions): Promise<LookupWmInfoMappingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LookupWmInfoMapping",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LookupWmInfoMappingResponse>(await this.callApi(params, req, runtime), new LookupWmInfoMappingResponse({}));
  }

  /**
   * 根据数字水印信息查询字符串水印信息
   * 
   * @param request - LookupWmInfoMappingRequest
   * @returns LookupWmInfoMappingResponse
   */
  async lookupWmInfoMapping(request: LookupWmInfoMappingRequest): Promise<LookupWmInfoMappingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lookupWmInfoMappingWithOptions(request, runtime);
  }

  /**
   * 吊销用户登录会话
   * 
   * @param request - RevokeUserSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeUserSessionResponse
   */
  async revokeUserSessionWithOptions(request: RevokeUserSessionRequest, runtime: $Util.RuntimeOptions): Promise<RevokeUserSessionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.externalIds)) {
      query["ExternalIds"] = request.externalIds;
    }

    if (!Util.isUnset(request.idpId)) {
      query["IdpId"] = request.idpId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RevokeUserSession",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokeUserSessionResponse>(await this.callApi(params, req, runtime), new RevokeUserSessionResponse({}));
  }

  /**
   * 吊销用户登录会话
   * 
   * @param request - RevokeUserSessionRequest
   * @returns RevokeUserSessionResponse
   */
  async revokeUserSession(request: RevokeUserSessionRequest): Promise<RevokeUserSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokeUserSessionWithOptions(request, runtime);
  }

  /**
   * 修改自定义身份源指定用户
   * 
   * @param request - UpdateClientUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClientUserResponse
   */
  async updateClientUserWithOptions(request: UpdateClientUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateClientUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.email)) {
      query["Email"] = request.email;
    }

    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.mobileNumber)) {
      query["MobileNumber"] = request.mobileNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateClientUser",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateClientUserResponse>(await this.callApi(params, req, runtime), new UpdateClientUserResponse({}));
  }

  /**
   * 修改自定义身份源指定用户
   * 
   * @param request - UpdateClientUserRequest
   * @returns UpdateClientUserResponse
   */
  async updateClientUser(request: UpdateClientUserRequest): Promise<UpdateClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClientUserWithOptions(request, runtime);
  }

  /**
   * 修改自定义身份源指定用户密码
   * 
   * @param request - UpdateClientUserPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClientUserPasswordResponse
   */
  async updateClientUserPasswordWithOptions(request: UpdateClientUserPasswordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateClientUserPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateClientUserPassword",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateClientUserPasswordResponse>(await this.callApi(params, req, runtime), new UpdateClientUserPasswordResponse({}));
  }

  /**
   * 修改自定义身份源指定用户密码
   * 
   * @param request - UpdateClientUserPasswordRequest
   * @returns UpdateClientUserPasswordResponse
   */
  async updateClientUserPassword(request: UpdateClientUserPasswordRequest): Promise<UpdateClientUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClientUserPasswordWithOptions(request, runtime);
  }

  /**
   * 修改自定义身份源指定用户启用状态
   * 
   * @param request - UpdateClientUserStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClientUserStatusResponse
   */
  async updateClientUserStatusWithOptions(request: UpdateClientUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateClientUserStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateClientUserStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateClientUserStatusResponse>(await this.callApi(params, req, runtime), new UpdateClientUserStatusResponse({}));
  }

  /**
   * 修改自定义身份源指定用户启用状态
   * 
   * @param request - UpdateClientUserStatusRequest
   * @returns UpdateClientUserStatusResponse
   */
  async updateClientUserStatus(request: UpdateClientUserStatusRequest): Promise<UpdateClientUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClientUserStatusWithOptions(request, runtime);
  }

  /**
   * 修改动态路由
   * 
   * @param request - UpdateDynamicRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDynamicRouteResponse
   */
  async updateDynamicRouteWithOptions(request: UpdateDynamicRouteRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDynamicRouteResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!Util.isUnset(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.dynamicRouteId)) {
      body["DynamicRouteId"] = request.dynamicRouteId;
    }

    if (!Util.isUnset(request.dynamicRouteType)) {
      body["DynamicRouteType"] = request.dynamicRouteType;
    }

    if (!Util.isUnset(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextHop)) {
      body["NextHop"] = request.nextHop;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.regionIds)) {
      bodyFlat["RegionIds"] = request.regionIds;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDynamicRoute",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDynamicRouteResponse>(await this.callApi(params, req, runtime), new UpdateDynamicRouteResponse({}));
  }

  /**
   * 修改动态路由
   * 
   * @param request - UpdateDynamicRouteRequest
   * @returns UpdateDynamicRouteResponse
   */
  async updateDynamicRoute(request: UpdateDynamicRouteRequest): Promise<UpdateDynamicRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDynamicRouteWithOptions(request, runtime);
  }

  /**
   * 批量更新超额注册申请状态
   * 
   * @param request - UpdateExcessiveDeviceRegistrationApplicationsStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExcessiveDeviceRegistrationApplicationsStatusResponse
   */
  async updateExcessiveDeviceRegistrationApplicationsStatusWithOptions(request: UpdateExcessiveDeviceRegistrationApplicationsStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateExcessiveDeviceRegistrationApplicationsStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateExcessiveDeviceRegistrationApplicationsStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateExcessiveDeviceRegistrationApplicationsStatusResponse>(await this.callApi(params, req, runtime), new UpdateExcessiveDeviceRegistrationApplicationsStatusResponse({}));
  }

  /**
   * 批量更新超额注册申请状态
   * 
   * @param request - UpdateExcessiveDeviceRegistrationApplicationsStatusRequest
   * @returns UpdateExcessiveDeviceRegistrationApplicationsStatusResponse
   */
  async updateExcessiveDeviceRegistrationApplicationsStatus(request: UpdateExcessiveDeviceRegistrationApplicationsStatusRequest): Promise<UpdateExcessiveDeviceRegistrationApplicationsStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateExcessiveDeviceRegistrationApplicationsStatusWithOptions(request, runtime);
  }

  /**
   * 修改指定自定义身份源部门
   * 
   * @param request - UpdateIdpDepartmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIdpDepartmentResponse
   */
  async updateIdpDepartmentWithOptions(request: UpdateIdpDepartmentRequest, runtime: $Util.RuntimeOptions): Promise<UpdateIdpDepartmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.departmentId)) {
      query["DepartmentId"] = request.departmentId;
    }

    if (!Util.isUnset(request.departmentName)) {
      query["DepartmentName"] = request.departmentName;
    }

    if (!Util.isUnset(request.idpConfigId)) {
      query["IdpConfigId"] = request.idpConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateIdpDepartment",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateIdpDepartmentResponse>(await this.callApi(params, req, runtime), new UpdateIdpDepartmentResponse({}));
  }

  /**
   * 修改指定自定义身份源部门
   * 
   * @param request - UpdateIdpDepartmentRequest
   * @returns UpdateIdpDepartmentResponse
   */
  async updateIdpDepartment(request: UpdateIdpDepartmentRequest): Promise<UpdateIdpDepartmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIdpDepartmentWithOptions(request, runtime);
  }

  /**
   * 更新NAC User 状态
   * 
   * @param request - UpdateNacUserCertStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNacUserCertStatusResponse
   */
  async updateNacUserCertStatusWithOptions(request: UpdateNacUserCertStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNacUserCertStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.idList)) {
      bodyFlat["IdList"] = request.idList;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNacUserCertStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNacUserCertStatusResponse>(await this.callApi(params, req, runtime), new UpdateNacUserCertStatusResponse({}));
  }

  /**
   * 更新NAC User 状态
   * 
   * @param request - UpdateNacUserCertStatusRequest
   * @returns UpdateNacUserCertStatusResponse
   */
  async updateNacUserCertStatus(request: UpdateNacUserCertStatusRequest): Promise<UpdateNacUserCertStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNacUserCertStatusWithOptions(request, runtime);
  }

  /**
   * 修改内网访问应用
   * 
   * @param request - UpdatePrivateAccessApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrivateAccessApplicationResponse
   */
  async updatePrivateAccessApplicationWithOptions(request: UpdatePrivateAccessApplicationRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePrivateAccessApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addresses)) {
      bodyFlat["Addresses"] = request.addresses;
    }

    if (!Util.isUnset(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.l7ProxyDomainAutomaticPrefix)) {
      body["L7ProxyDomainAutomaticPrefix"] = request.l7ProxyDomainAutomaticPrefix;
    }

    if (!Util.isUnset(request.l7ProxyDomainCustom)) {
      body["L7ProxyDomainCustom"] = request.l7ProxyDomainCustom;
    }

    if (!Util.isUnset(request.l7ProxyDomainPrivate)) {
      body["L7ProxyDomainPrivate"] = request.l7ProxyDomainPrivate;
    }

    if (!Util.isUnset(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!Util.isUnset(request.portRanges)) {
      bodyFlat["PortRanges"] = request.portRanges;
    }

    if (!Util.isUnset(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePrivateAccessApplication",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePrivateAccessApplicationResponse>(await this.callApi(params, req, runtime), new UpdatePrivateAccessApplicationResponse({}));
  }

  /**
   * 修改内网访问应用
   * 
   * @param request - UpdatePrivateAccessApplicationRequest
   * @returns UpdatePrivateAccessApplicationResponse
   */
  async updatePrivateAccessApplication(request: UpdatePrivateAccessApplicationRequest): Promise<UpdatePrivateAccessApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePrivateAccessApplicationWithOptions(request, runtime);
  }

  /**
   * 修改内网访问策略
   * 
   * @param request - UpdatePrivateAccessPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrivateAccessPolicyResponse
   */
  async updatePrivateAccessPolicyWithOptions(request: UpdatePrivateAccessPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePrivateAccessPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.applicationIds)) {
      bodyFlat["ApplicationIds"] = request.applicationIds;
    }

    if (!Util.isUnset(request.applicationType)) {
      body["ApplicationType"] = request.applicationType;
    }

    if (!Util.isUnset(request.customUserAttributes)) {
      bodyFlat["CustomUserAttributes"] = request.customUserAttributes;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.deviceAttributeAction)) {
      body["DeviceAttributeAction"] = request.deviceAttributeAction;
    }

    if (!Util.isUnset(request.deviceAttributeId)) {
      body["DeviceAttributeId"] = request.deviceAttributeId;
    }

    if (!Util.isUnset(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!Util.isUnset(request.policyAction)) {
      body["PolicyAction"] = request.policyAction;
    }

    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagIds)) {
      bodyFlat["TagIds"] = request.tagIds;
    }

    if (!Util.isUnset(request.userGroupIds)) {
      bodyFlat["UserGroupIds"] = request.userGroupIds;
    }

    if (!Util.isUnset(request.userGroupMode)) {
      body["UserGroupMode"] = request.userGroupMode;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePrivateAccessPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePrivateAccessPolicyResponse>(await this.callApi(params, req, runtime), new UpdatePrivateAccessPolicyResponse({}));
  }

  /**
   * 修改内网访问策略
   * 
   * @param request - UpdatePrivateAccessPolicyRequest
   * @returns UpdatePrivateAccessPolicyResponse
   */
  async updatePrivateAccessPolicy(request: UpdatePrivateAccessPolicyRequest): Promise<UpdatePrivateAccessPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePrivateAccessPolicyWithOptions(request, runtime);
  }

  /**
   * 修改设备注册策略
   * 
   * @param tmpReq - UpdateRegistrationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRegistrationPolicyResponse
   */
  async updateRegistrationPolicyWithOptions(tmpReq: UpdateRegistrationPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRegistrationPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateRegistrationPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.companyLimitCount)) {
      request.companyLimitCountShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.companyLimitCount, "CompanyLimitCount", "json");
    }

    if (!Util.isUnset(tmpReq.personalLimitCount)) {
      request.personalLimitCountShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.personalLimitCount, "PersonalLimitCount", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.companyLimitCountShrink)) {
      body["CompanyLimitCount"] = request.companyLimitCountShrink;
    }

    if (!Util.isUnset(request.companyLimitType)) {
      body["CompanyLimitType"] = request.companyLimitType;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.matchMode)) {
      body["MatchMode"] = request.matchMode;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.personalLimitCountShrink)) {
      body["PersonalLimitCount"] = request.personalLimitCountShrink;
    }

    if (!Util.isUnset(request.personalLimitType)) {
      body["PersonalLimitType"] = request.personalLimitType;
    }

    if (!Util.isUnset(request.policyId)) {
      body["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userGroupIds)) {
      bodyFlat["UserGroupIds"] = request.userGroupIds;
    }

    if (!Util.isUnset(request.whitelist)) {
      bodyFlat["Whitelist"] = request.whitelist;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRegistrationPolicy",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateRegistrationPolicyResponse>(await this.callApi(params, req, runtime), new UpdateRegistrationPolicyResponse({}));
  }

  /**
   * 修改设备注册策略
   * 
   * @param request - UpdateRegistrationPolicyRequest
   * @returns UpdateRegistrationPolicyResponse
   */
  async updateRegistrationPolicy(request: UpdateRegistrationPolicyRequest): Promise<UpdateRegistrationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRegistrationPolicyWithOptions(request, runtime);
  }

  /**
   * 批量更新用户设备共享状态
   * 
   * @param request - UpdateUserDevicesSharingStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserDevicesSharingStatusResponse
   */
  async updateUserDevicesSharingStatusWithOptions(request: UpdateUserDevicesSharingStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserDevicesSharingStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceTags)) {
      bodyFlat["DeviceTags"] = request.deviceTags;
    }

    if (!Util.isUnset(request.sharingStatus)) {
      body["SharingStatus"] = request.sharingStatus;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserDevicesSharingStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserDevicesSharingStatusResponse>(await this.callApi(params, req, runtime), new UpdateUserDevicesSharingStatusResponse({}));
  }

  /**
   * 批量更新用户设备共享状态
   * 
   * @param request - UpdateUserDevicesSharingStatusRequest
   * @returns UpdateUserDevicesSharingStatusResponse
   */
  async updateUserDevicesSharingStatus(request: UpdateUserDevicesSharingStatusRequest): Promise<UpdateUserDevicesSharingStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserDevicesSharingStatusWithOptions(request, runtime);
  }

  /**
   * 批量更新用户设备状态
   * 
   * @param request - UpdateUserDevicesStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserDevicesStatusResponse
   */
  async updateUserDevicesStatusWithOptions(request: UpdateUserDevicesStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserDevicesStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceAction)) {
      body["DeviceAction"] = request.deviceAction;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deviceTags)) {
      bodyFlat["DeviceTags"] = request.deviceTags;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserDevicesStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserDevicesStatusResponse>(await this.callApi(params, req, runtime), new UpdateUserDevicesStatusResponse({}));
  }

  /**
   * 批量更新用户设备状态
   * 
   * @param request - UpdateUserDevicesStatusRequest
   * @returns UpdateUserDevicesStatusResponse
   */
  async updateUserDevicesStatus(request: UpdateUserDevicesStatusRequest): Promise<UpdateUserDevicesStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserDevicesStatusWithOptions(request, runtime);
  }

  /**
   * 修改用户组
   * 
   * @param request - UpdateUserGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserGroupResponse
   */
  async updateUserGroupWithOptions(request: UpdateUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.attributes)) {
      bodyFlat["Attributes"] = request.attributes;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.modifyType)) {
      body["ModifyType"] = request.modifyType;
    }

    if (!Util.isUnset(request.userGroupId)) {
      body["UserGroupId"] = request.userGroupId;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserGroup",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserGroupResponse>(await this.callApi(params, req, runtime), new UpdateUserGroupResponse({}));
  }

  /**
   * 修改用户组
   * 
   * @param request - UpdateUserGroupRequest
   * @returns UpdateUserGroupResponse
   */
  async updateUserGroup(request: UpdateUserGroupRequest): Promise<UpdateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserGroupWithOptions(request, runtime);
  }

  /**
   * 批量修改登陆用户状态
   * 
   * @param request - UpdateUsersStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUsersStatusResponse
   */
  async updateUsersStatusWithOptions(request: UpdateUsersStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUsersStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.saseUserIds)) {
      query["SaseUserIds"] = request.saseUserIds;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUsersStatus",
      version: "2023-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUsersStatusResponse>(await this.callApi(params, req, runtime), new UpdateUsersStatusResponse({}));
  }

  /**
   * 批量修改登陆用户状态
   * 
   * @param request - UpdateUsersStatusRequest
   * @returns UpdateUsersStatusResponse
   */
  async updateUsersStatus(request: UpdateUsersStatusRequest): Promise<UpdateUsersStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUsersStatusWithOptions(request, runtime);
  }

}
