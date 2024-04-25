// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AttachApplication2ConnectorRequest extends $tea.Model {
  applicationIds?: string[];
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
  applicationIdsShrink?: string;
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
  departmentId?: string;
  description?: string;
  email?: string;
  idpConfigId?: string;
  mobileNumber?: string;
  password?: string;
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
  data?: string;
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
  applicationType?: string;
  description?: string;
  dynamicRouteType?: string;
  name?: string;
  nextHop?: string;
  priority?: number;
  regionIds?: string[];
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
  dynamicRouteId?: string;
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
  departmentName?: string;
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
  data?: string;
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
  addresses?: string[];
  description?: string;
  name?: string;
  portRanges?: CreatePrivateAccessApplicationRequestPortRanges[];
  protocol?: string;
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      description: 'Description',
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
      description: 'string',
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
  applicationType?: string;
  customUserAttributes?: CreatePrivateAccessPolicyRequestCustomUserAttributes[];
  description?: string;
  deviceAttributeId?: string;
  name?: string;
  policyAction?: string;
  priority?: number;
  status?: string;
  tagIds?: string[];
  userGroupIds?: string[];
  userGroupMode?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
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
  policyId?: string;
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
  requestId?: string;
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
  companyLimitType?: string;
  description?: string;
  matchMode?: string;
  name?: string;
  personalLimitCount?: CreateRegistrationPolicyRequestPersonalLimitCount;
  personalLimitType?: string;
  priority?: number;
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
  companyLimitType?: string;
  description?: string;
  matchMode?: string;
  name?: string;
  personalLimitCountShrink?: string;
  personalLimitType?: string;
  priority?: number;
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
  attributes?: CreateUserGroupRequestAttributes[];
  description?: string;
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
  requestId?: string;
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

export class DeleteClientUserRequest extends $tea.Model {
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
  departmentId?: string;
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

export class DeleteUserGroupRequest extends $tea.Model {
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
  applicationIds?: string[];
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
  applicationIdsShrink?: string;
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

export class GetActiveIdpConfigResponseBody extends $tea.Model {
  data?: GetActiveIdpConfigResponseBodyData;
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
  idpConfigId?: string;
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
  createTime?: string;
  description?: string;
  limitDetail?: GetRegistrationPolicyResponseBodyLimitDetail[];
  matchMode?: string;
  name?: string;
  policyId?: string;
  priority?: number;
  requestId?: string;
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

export class ListApplicationsForPrivateAccessPolicyRequest extends $tea.Model {
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
  currentPage?: number;
  departmentId?: string;
  email?: string;
  idpConfigId?: string;
  mobileNumber?: string;
  pageSize?: number;
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
  currentPage?: number;
  name?: string;
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
  requestId?: string;
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
  requestId?: string;
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
  applicationId?: string;
  currentPage?: number;
  dynamicRouteIds?: string[];
  name?: string;
  nextHop?: string;
  pageSize?: number;
  regionIds?: string[];
  status?: string;
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
  requestId?: string;
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
  currentPage?: number;
  department?: string;
  deviceTag?: string;
  hostname?: string;
  mac?: string;
  pageSize?: number;
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
  requestId?: string;
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
  currentPage?: number;
  include?: string;
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
  currentPage?: number;
  idpConfigId?: string;
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

export class ListPolicesForPrivateAccessApplicationRequest extends $tea.Model {
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
  endTime?: string;
  region?: string;
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
  address?: string;
  applicationIds?: string[];
  connectorId?: string;
  currentPage?: number;
  name?: string;
  pageSize?: number;
  policyId?: string;
  status?: string;
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
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
  requestId?: string;
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
  applicationId?: string;
  applicationName?: string;
  currentPage?: number;
  name?: string;
  pageSize?: number;
  policyAction?: string;
  policyIds?: string[];
  status?: string;
  tagId?: string;
  tagName?: string;
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
  requestId?: string;
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
  applicationId?: string;
  currentPage?: number;
  name?: string;
  pageSize?: number;
  policyId?: string;
  simpleMode?: boolean;
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
  requestId?: string;
  tags?: ListPrivateAccessTagsResponseBodyTags[];
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
  companyLimitType?: string;
  currentPage?: number;
  matchMode?: string;
  name?: string;
  pageSize?: number;
  personalLimitType?: string;
  policyIds?: string[];
  status?: string;
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
  requestId?: string;
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
  currentPage?: number;
  deviceTag?: string;
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
  requestId?: string;
  software?: ListSoftwareForUserDeviceResponseBodySoftware[];
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
  currentPage?: number;
  department?: string;
  deviceBelong?: string;
  deviceStatuses?: string[];
  deviceTags?: string[];
  deviceTypes?: string[];
  dlpStatuses?: string[];
  hostname?: string;
  iaStatuses?: string[];
  mac?: string;
  nacStatuses?: string[];
  paStatuses?: string[];
  pageSize?: number;
  saseUserId?: string;
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
  requestId?: string;
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
  attributeValue?: string;
  currentPage?: number;
  name?: string;
  PAPolicyId?: string;
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
  requestId?: string;
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
  currentPage?: number;
  department?: string;
  fuzzyUsername?: string;
  pageSize?: number;
  preciseUsername?: string;
  saseUserIds?: string[];
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
  requestId?: string;
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

export class UpdateClientUserRequest extends $tea.Model {
  departmentId?: string;
  description?: string;
  email?: string;
  id?: string;
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
  id?: string;
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
  id?: string;
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
  applicationType?: string;
  description?: string;
  dynamicRouteId?: string;
  dynamicRouteType?: string;
  modifyType?: string;
  name?: string;
  nextHop?: string;
  priority?: number;
  regionIds?: string[];
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
  applicationIds?: string[];
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
  departmentId?: string;
  departmentName?: string;
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

export class UpdatePrivateAccessApplicationRequest extends $tea.Model {
  addresses?: string[];
  applicationId?: string;
  description?: string;
  modifyType?: string;
  portRanges?: UpdatePrivateAccessApplicationRequestPortRanges[];
  protocol?: string;
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      description: 'Description',
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
  applicationType?: string;
  customUserAttributes?: UpdatePrivateAccessPolicyRequestCustomUserAttributes[];
  description?: string;
  deviceAttributeId?: string;
  modifyType?: string;
  policyAction?: string;
  policyId?: string;
  priority?: number;
  status?: string;
  tagIds?: string[];
  userGroupIds?: string[];
  userGroupMode?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
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
  companyLimitType?: string;
  description?: string;
  matchMode?: string;
  name?: string;
  personalLimitCount?: UpdateRegistrationPolicyRequestPersonalLimitCount;
  personalLimitType?: string;
  policyId?: string;
  priority?: number;
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
  companyLimitType?: string;
  description?: string;
  matchMode?: string;
  name?: string;
  personalLimitCountShrink?: string;
  personalLimitType?: string;
  policyId?: string;
  priority?: number;
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
  deviceTags?: string[];
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
  deviceAction?: string;
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
  description?: string;
  modifyType?: string;
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
  saseUserIds?: string[];
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
  begin?: number;
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
  idpId?: number;
  relation?: string;
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
  all?: number;
  mobile?: number;
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
  all?: number;
  mobile?: number;
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
  all?: number;
  mobile?: number;
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
  deviceBelong?: string;
  limitCount?: CreateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount;
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
  createTime?: string;
  description?: string;
  limitDetail?: CreateRegistrationPolicyResponseBodyPolicyLimitDetail[];
  matchMode?: string;
  name?: string;
  policyId?: string;
  priority?: string;
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
  idpId?: number;
  relation?: string;
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

export class GetActiveIdpConfigResponseBodyData extends $tea.Model {
  description?: string;
  id?: string;
  name?: string;
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
  departmentId?: string;
  description?: string;
  email?: string;
  id?: string;
  idpConfigId?: string;
  mobileNumber?: string;
  status?: string;
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
  applicationType?: string;
  createTime?: string;
  description?: string;
  dynamicRouteId?: string;
  dynamicRouteType?: string;
  name?: string;
  nextHop?: string;
  priority?: number;
  regionIds?: string[];
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
  accessKey?: string;
  accessKeySecret?: string;
  description?: string;
  getGroupUrl?: string;
  id?: string;
  idpMetadata?: string;
  mfaConfigType?: string;
  mobileLoginType?: string;
  mobileMfaConfigType?: string;
  multiIdpInfo?: string;
  name?: string;
  pcLoginType?: string;
  status?: string;
  type?: string;
  updateTime?: string;
  verifyAesKey?: string;
  verifyToken?: string;
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
  begin?: number;
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
  applicationId?: string;
  connectorIds?: string[];
  createTime?: string;
  description?: string;
  name?: string;
  policyIds?: string[];
  portRanges?: GetPrivateAccessApplicationResponseBodyApplicationPortRanges[];
  protocol?: string;
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      connectorIds: 'ConnectorIds',
      createTime: 'CreateTime',
      description: 'Description',
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
      connectorIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
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
  idpId?: number;
  relation?: string;
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
  applicationType?: string;
  createTime?: string;
  customUserAttributes?: GetPrivateAccessPolicyResponseBodyPolicyCustomUserAttributes[];
  description?: string;
  deviceAttributeId?: string;
  name?: string;
  policyAction?: string;
  policyId?: string;
  priority?: number;
  status?: string;
  tagIds?: string[];
  userGroupIds?: string[];
  userGroupMode?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
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
  all?: number;
  mobile?: number;
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
  deviceBelong?: string;
  limitCount?: GetRegistrationPolicyResponseBodyLimitDetailLimitCount;
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
  appStatus?: string;
  appVersion?: string;
  CPU?: string;
  createTime?: string;
  department?: string;
  deviceBelong?: string;
  deviceModel?: string;
  deviceStatus?: string;
  deviceTag?: string;
  deviceType?: string;
  deviceVersion?: string;
  disk?: string;
  dlpStatus?: string;
  historyUsers?: GetUserDeviceResponseBodyDeviceHistoryUsers[];
  hostname?: string;
  iaStatus?: string;
  innerIP?: string;
  mac?: string;
  memory?: string;
  nacStatus?: string;
  paStatus?: string;
  saseUserId?: string;
  sharingStatus?: boolean;
  srcIP?: string;
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
  idpId?: number;
  relation?: string;
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
  createTime?: string;
  description?: string;
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

export class ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplicationsPortRanges extends $tea.Model {
  begin?: number;
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
  applicationId?: string;
  createTime?: string;
  description?: string;
  name?: string;
  portRanges?: ListApplicationsForPrivateAccessPolicyResponseBodyPolicesApplicationsPortRanges[];
  protocol?: string;
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
  begin?: number;
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
  applicationId?: string;
  createTime?: string;
  description?: string;
  name?: string;
  portRanges?: ListApplicationsForPrivateAccessTagResponseBodyTagsApplicationsPortRanges[];
  protocol?: string;
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
  departmentId?: string;
  description?: string;
  email?: string;
  id?: string;
  idpConfigId?: string;
  mobileNumber?: string;
  status?: string;
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
  applicationId?: string;
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
  end?: string;
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
  connectorId?: string;
  createTime?: string;
  name?: string;
  regionId?: string;
  status?: string;
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
  applicationType?: string;
  createTime?: string;
  description?: string;
  dynamicRouteId?: string;
  dynamicRouteType?: string;
  name?: string;
  nextHop?: string;
  priority?: number;
  regionIds?: string[];
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
  applicationId?: string;
  createTime?: string;
  department?: string;
  description?: string;
  deviceTag?: string;
  deviceType?: string;
  hostname?: string;
  isUsed?: boolean;
  mac?: string;
  saseUserId?: string;
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
  id?: string;
  mfa?: string;
  mobileLoginType?: string;
  mobileMfaConfigType?: string;
  multiIdpInfo?: string;
  name?: string;
  pcLoginType?: string;
  status?: string;
  type?: string;
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
  id?: string;
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

export class ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPoliciesCustomUserAttributes extends $tea.Model {
  idpId?: number;
  relation?: string;
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
  applicationType?: string;
  createTime?: string;
  customUserAttributes?: ListPolicesForPrivateAccessApplicationResponseBodyApplicationsPoliciesCustomUserAttributes[];
  description?: string;
  name?: string;
  policyAction?: string;
  policyId?: string;
  priority?: number;
  status?: string;
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
  idpId?: number;
  relation?: string;
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

export class ListPolicesForPrivateAccessTagResponseBodyTagsPolices extends $tea.Model {
  applicationType?: string;
  createTime?: string;
  customUserAttributes?: ListPolicesForPrivateAccessTagResponseBodyTagsPolicesCustomUserAttributes[];
  description?: string;
  name?: string;
  policyAction?: string;
  policyId?: string;
  priority?: number;
  status?: string;
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
  name?: string;
  policyId?: string;
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
  average?: number;
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
  begin?: number;
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
  applicationId?: string;
  connectorIds?: string[];
  createTime?: string;
  description?: string;
  name?: string;
  policyIds?: string[];
  portRanges?: ListPrivateAccessApplicationsResponseBodyApplicationsPortRanges[];
  protocol?: string;
  status?: string;
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      applicationId: 'ApplicationId',
      connectorIds: 'ConnectorIds',
      createTime: 'CreateTime',
      description: 'Description',
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
      connectorIds: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
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
  begin?: number;
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
  applicationId?: string;
  createTime?: string;
  description?: string;
  name?: string;
  portRanges?: ListPrivateAccessApplicationsForDynamicRouteResponseBodyDynamicRoutesApplicationsPortRanges[];
  protocol?: string;
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
  idpId?: number;
  relation?: string;
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
  applicationType?: string;
  createTime?: string;
  customUserAttributes?: ListPrivateAccessPolicesResponseBodyPolicesCustomUserAttributes[];
  description?: string;
  deviceAttributeId?: string;
  name?: string;
  policyAction?: string;
  policyId?: string;
  priority?: number;
  status?: string;
  tagIds?: string[];
  userGroupIds?: string[];
  userGroupMode?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      applicationType: 'ApplicationType',
      createTime: 'CreateTime',
      customUserAttributes: 'CustomUserAttributes',
      description: 'Description',
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
  applicationIds?: string[];
  createTime?: string;
  description?: string;
  name?: string;
  policyIds?: string[];
  tagId?: string;
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
  createTime?: string;
  description?: string;
  name?: string;
  tagId?: string;
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
  all?: number;
  mobile?: number;
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
  deviceBelong?: string;
  limitCount?: ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount;
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
  createTime?: string;
  description?: string;
  limitDetail?: ListRegistrationPoliciesResponseBodyPoliciesLimitDetail[];
  matchMode?: string;
  name?: string;
  policyId?: string;
  priority?: number;
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
  all?: string;
  mobile?: string;
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
  deviceBelong?: string;
  limitCount?: ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetailLimitCount;
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
  createTime?: string;
  description?: string;
  limitDetail?: ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetail[];
  matchMode?: string;
  name?: string;
  policyId?: string;
  priority?: number;
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
  inc?: string;
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
  createTime?: string;
  description?: string;
  name?: string;
  tagId?: string;
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
  createTime?: string;
  description?: string;
  name?: string;
  tagId?: string;
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
  appStatus?: string;
  appVersion?: string;
  CPU?: string;
  createTime?: string;
  department?: string;
  deviceBelong?: string;
  deviceModel?: string;
  deviceStatus?: string;
  deviceTag?: string;
  deviceType?: string;
  deviceVersion?: string;
  disk?: string;
  dlpStatus?: string;
  hostname?: string;
  iaStatus?: string;
  innerIP?: string;
  mac?: string;
  memory?: string;
  nacStatus?: string;
  paStatus?: string;
  saseUserId?: string;
  sharingStatus?: boolean;
  srcIP?: string;
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
  idpId?: number;
  relation?: string;
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
  createTime?: string;
  description?: string;
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
  idpId?: number;
  relation?: string;
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
  createTime?: string;
  description?: string;
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
  idpId?: number;
  relation?: string;
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
  createTime?: string;
  description?: string;
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
  email?: string;
  idpName?: string;
  phone?: string;
  saseUserId?: string;
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

export class UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications extends $tea.Model {
  applicationId?: string;
  createTime?: string;
  department?: string;
  description?: string;
  deviceTag?: string;
  deviceType?: string;
  hostname?: string;
  isUsed?: boolean;
  mac?: string;
  saseUserId?: string;
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

export class UpdatePrivateAccessApplicationRequestPortRanges extends $tea.Model {
  begin?: number;
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
  idpId?: number;
  relation?: string;
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

export class UpdateRegistrationPolicyRequestCompanyLimitCount extends $tea.Model {
  all?: number;
  mobile?: number;
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
  all?: number;
  mobile?: number;
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
  all?: number;
  mobile?: number;
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
  deviceBelong?: string;
  limitCount?: UpdateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount;
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
  createTime?: string;
  description?: string;
  limitDetail?: UpdateRegistrationPolicyResponseBodyPolicyLimitDetail[];
  matchMode?: string;
  name?: string;
  policyId?: string;
  priority?: string;
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
  appStatus?: string;
  appVersion?: string;
  CPU?: string;
  createTime?: string;
  department?: string;
  deviceBelong?: string;
  deviceModel?: string;
  deviceStatus?: string;
  deviceTag?: string;
  deviceType?: string;
  deviceVersion?: string;
  disk?: string;
  dlpStatus?: string;
  hostname?: string;
  iaStatus?: string;
  innerIP?: string;
  mac?: string;
  memory?: string;
  nacStatus?: string;
  paStatus?: string;
  saseUserId?: string;
  sharingStatus?: boolean;
  srcIP?: string;
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
  appStatus?: string;
  appVersion?: string;
  CPU?: string;
  createTime?: string;
  department?: string;
  deviceBelong?: string;
  deviceModel?: string;
  deviceStatus?: string;
  deviceTag?: string;
  deviceType?: string;
  deviceVersion?: string;
  disk?: string;
  dlpStatus?: string;
  hostname?: string;
  iaStatus?: string;
  innerIP?: string;
  mac?: string;
  memory?: string;
  nacStatus?: string;
  paStatus?: string;
  saseUserId?: string;
  sharingStatus?: boolean;
  srcIP?: string;
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
  idpId?: number;
  relation?: string;
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

  async attachApplication2Connector(request: AttachApplication2ConnectorRequest): Promise<AttachApplication2ConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachApplication2ConnectorWithOptions(request, runtime);
  }

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

  async createClientUser(request: CreateClientUserRequest): Promise<CreateClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClientUserWithOptions(request, runtime);
  }

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

  async createDynamicRoute(request: CreateDynamicRouteRequest): Promise<CreateDynamicRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDynamicRouteWithOptions(request, runtime);
  }

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

  async createIdpDepartment(request: CreateIdpDepartmentRequest): Promise<CreateIdpDepartmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIdpDepartmentWithOptions(request, runtime);
  }

  async createPrivateAccessApplicationWithOptions(request: CreatePrivateAccessApplicationRequest, runtime: $Util.RuntimeOptions): Promise<CreatePrivateAccessApplicationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addresses)) {
      bodyFlat["Addresses"] = request.addresses;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
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

  async createPrivateAccessApplication(request: CreatePrivateAccessApplicationRequest): Promise<CreatePrivateAccessApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPrivateAccessApplicationWithOptions(request, runtime);
  }

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

  async createPrivateAccessPolicy(request: CreatePrivateAccessPolicyRequest): Promise<CreatePrivateAccessPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPrivateAccessPolicyWithOptions(request, runtime);
  }

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

  async createPrivateAccessTag(request: CreatePrivateAccessTagRequest): Promise<CreatePrivateAccessTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPrivateAccessTagWithOptions(request, runtime);
  }

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

  async createRegistrationPolicy(request: CreateRegistrationPolicyRequest): Promise<CreateRegistrationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRegistrationPolicyWithOptions(request, runtime);
  }

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

  async createUserGroup(request: CreateUserGroupRequest): Promise<CreateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUserGroupWithOptions(request, runtime);
  }

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

  async deleteClientUser(request: DeleteClientUserRequest): Promise<DeleteClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClientUserWithOptions(request, runtime);
  }

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

  async deleteDynamicRoute(request: DeleteDynamicRouteRequest): Promise<DeleteDynamicRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDynamicRouteWithOptions(request, runtime);
  }

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

  async deleteIdpDepartment(request: DeleteIdpDepartmentRequest): Promise<DeleteIdpDepartmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIdpDepartmentWithOptions(request, runtime);
  }

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

  async deletePrivateAccessApplication(request: DeletePrivateAccessApplicationRequest): Promise<DeletePrivateAccessApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePrivateAccessApplicationWithOptions(request, runtime);
  }

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

  async deletePrivateAccessPolicy(request: DeletePrivateAccessPolicyRequest): Promise<DeletePrivateAccessPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePrivateAccessPolicyWithOptions(request, runtime);
  }

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

  async deletePrivateAccessTag(request: DeletePrivateAccessTagRequest): Promise<DeletePrivateAccessTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePrivateAccessTagWithOptions(request, runtime);
  }

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

  async deleteRegistrationPolicies(request: DeleteRegistrationPoliciesRequest): Promise<DeleteRegistrationPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteRegistrationPoliciesWithOptions(request, runtime);
  }

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

  async deleteUserGroup(request: DeleteUserGroupRequest): Promise<DeleteUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

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

  async detachApplication2Connector(request: DetachApplication2ConnectorRequest): Promise<DetachApplication2ConnectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachApplication2ConnectorWithOptions(request, runtime);
  }

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

  async getActiveIdpConfig(): Promise<GetActiveIdpConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getActiveIdpConfigWithOptions(runtime);
  }

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

  async getClientUser(request: GetClientUserRequest): Promise<GetClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClientUserWithOptions(request, runtime);
  }

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

  async getDynamicRoute(request: GetDynamicRouteRequest): Promise<GetDynamicRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDynamicRouteWithOptions(request, runtime);
  }

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

  async getIdpConfig(request: GetIdpConfigRequest): Promise<GetIdpConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIdpConfigWithOptions(request, runtime);
  }

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

  async getPrivateAccessApplication(request: GetPrivateAccessApplicationRequest): Promise<GetPrivateAccessApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPrivateAccessApplicationWithOptions(request, runtime);
  }

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

  async getPrivateAccessPolicy(request: GetPrivateAccessPolicyRequest): Promise<GetPrivateAccessPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPrivateAccessPolicyWithOptions(request, runtime);
  }

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

  async getRegistrationPolicy(request: GetRegistrationPolicyRequest): Promise<GetRegistrationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRegistrationPolicyWithOptions(request, runtime);
  }

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

  async getUserDevice(request: GetUserDeviceRequest): Promise<GetUserDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserDeviceWithOptions(request, runtime);
  }

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

  async getUserGroup(request: GetUserGroupRequest): Promise<GetUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserGroupWithOptions(request, runtime);
  }

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

  async listApplicationsForPrivateAccessPolicy(request: ListApplicationsForPrivateAccessPolicyRequest): Promise<ListApplicationsForPrivateAccessPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsForPrivateAccessPolicyWithOptions(request, runtime);
  }

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

  async listApplicationsForPrivateAccessTag(request: ListApplicationsForPrivateAccessTagRequest): Promise<ListApplicationsForPrivateAccessTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationsForPrivateAccessTagWithOptions(request, runtime);
  }

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

  async listClientUsers(request: ListClientUsersRequest): Promise<ListClientUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClientUsersWithOptions(request, runtime);
  }

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

  async listConnectors(request: ListConnectorsRequest): Promise<ListConnectorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConnectorsWithOptions(request, runtime);
  }

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

  async listDynamicRouteRegions(): Promise<ListDynamicRouteRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDynamicRouteRegionsWithOptions(runtime);
  }

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

  async listDynamicRoutes(request: ListDynamicRoutesRequest): Promise<ListDynamicRoutesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDynamicRoutesWithOptions(request, runtime);
  }

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

  async listExcessiveDeviceRegistrationApplications(request: ListExcessiveDeviceRegistrationApplicationsRequest): Promise<ListExcessiveDeviceRegistrationApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listExcessiveDeviceRegistrationApplicationsWithOptions(request, runtime);
  }

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

  async listIdpConfigs(request: ListIdpConfigsRequest): Promise<ListIdpConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIdpConfigsWithOptions(request, runtime);
  }

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

  async listIdpDepartments(request: ListIdpDepartmentsRequest): Promise<ListIdpDepartmentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIdpDepartmentsWithOptions(request, runtime);
  }

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

  async listPolicesForPrivateAccessApplication(request: ListPolicesForPrivateAccessApplicationRequest): Promise<ListPolicesForPrivateAccessApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicesForPrivateAccessApplicationWithOptions(request, runtime);
  }

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

  async listPolicesForPrivateAccessTag(request: ListPolicesForPrivateAccessTagRequest): Promise<ListPolicesForPrivateAccessTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicesForPrivateAccessTagWithOptions(request, runtime);
  }

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

  async listPolicesForUserGroup(request: ListPolicesForUserGroupRequest): Promise<ListPolicesForUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPolicesForUserGroupWithOptions(request, runtime);
  }

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

  async listPopTrafficStatistics(request: ListPopTrafficStatisticsRequest): Promise<ListPopTrafficStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPopTrafficStatisticsWithOptions(request, runtime);
  }

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

  async listPrivateAccessApplications(request: ListPrivateAccessApplicationsRequest): Promise<ListPrivateAccessApplicationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrivateAccessApplicationsWithOptions(request, runtime);
  }

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

  async listPrivateAccessApplicationsForDynamicRoute(request: ListPrivateAccessApplicationsForDynamicRouteRequest): Promise<ListPrivateAccessApplicationsForDynamicRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrivateAccessApplicationsForDynamicRouteWithOptions(request, runtime);
  }

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

  async listPrivateAccessPolices(request: ListPrivateAccessPolicesRequest): Promise<ListPrivateAccessPolicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrivateAccessPolicesWithOptions(request, runtime);
  }

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

  async listPrivateAccessTags(request: ListPrivateAccessTagsRequest): Promise<ListPrivateAccessTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrivateAccessTagsWithOptions(request, runtime);
  }

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

  async listPrivateAccessTagsForDynamicRoute(request: ListPrivateAccessTagsForDynamicRouteRequest): Promise<ListPrivateAccessTagsForDynamicRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPrivateAccessTagsForDynamicRouteWithOptions(request, runtime);
  }

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

  async listRegistrationPolicies(request: ListRegistrationPoliciesRequest): Promise<ListRegistrationPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegistrationPoliciesWithOptions(request, runtime);
  }

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

  async listRegistrationPoliciesForUserGroup(request: ListRegistrationPoliciesForUserGroupRequest): Promise<ListRegistrationPoliciesForUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegistrationPoliciesForUserGroupWithOptions(request, runtime);
  }

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

  async listSoftwareForUserDevice(request: ListSoftwareForUserDeviceRequest): Promise<ListSoftwareForUserDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSoftwareForUserDeviceWithOptions(request, runtime);
  }

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

  async listTagsForPrivateAccessApplication(request: ListTagsForPrivateAccessApplicationRequest): Promise<ListTagsForPrivateAccessApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagsForPrivateAccessApplicationWithOptions(request, runtime);
  }

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

  async listTagsForPrivateAccessPolicy(request: ListTagsForPrivateAccessPolicyRequest): Promise<ListTagsForPrivateAccessPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagsForPrivateAccessPolicyWithOptions(request, runtime);
  }

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

  async listUserDevices(request: ListUserDevicesRequest): Promise<ListUserDevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserDevicesWithOptions(request, runtime);
  }

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

  async listUserGroups(request: ListUserGroupsRequest): Promise<ListUserGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGroupsWithOptions(request, runtime);
  }

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

  async listUserGroupsForPrivateAccessPolicy(request: ListUserGroupsForPrivateAccessPolicyRequest): Promise<ListUserGroupsForPrivateAccessPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGroupsForPrivateAccessPolicyWithOptions(request, runtime);
  }

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

  async listUserGroupsForRegistrationPolicy(request: ListUserGroupsForRegistrationPolicyRequest): Promise<ListUserGroupsForRegistrationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserGroupsForRegistrationPolicyWithOptions(request, runtime);
  }

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

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

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

  async updateClientUser(request: UpdateClientUserRequest): Promise<UpdateClientUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClientUserWithOptions(request, runtime);
  }

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

  async updateClientUserPassword(request: UpdateClientUserPasswordRequest): Promise<UpdateClientUserPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClientUserPasswordWithOptions(request, runtime);
  }

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

  async updateClientUserStatus(request: UpdateClientUserStatusRequest): Promise<UpdateClientUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClientUserStatusWithOptions(request, runtime);
  }

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

  async updateDynamicRoute(request: UpdateDynamicRouteRequest): Promise<UpdateDynamicRouteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDynamicRouteWithOptions(request, runtime);
  }

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

  async updateExcessiveDeviceRegistrationApplicationsStatus(request: UpdateExcessiveDeviceRegistrationApplicationsStatusRequest): Promise<UpdateExcessiveDeviceRegistrationApplicationsStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateExcessiveDeviceRegistrationApplicationsStatusWithOptions(request, runtime);
  }

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

  async updateIdpDepartment(request: UpdateIdpDepartmentRequest): Promise<UpdateIdpDepartmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateIdpDepartmentWithOptions(request, runtime);
  }

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

  async updatePrivateAccessApplication(request: UpdatePrivateAccessApplicationRequest): Promise<UpdatePrivateAccessApplicationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePrivateAccessApplicationWithOptions(request, runtime);
  }

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

  async updatePrivateAccessPolicy(request: UpdatePrivateAccessPolicyRequest): Promise<UpdatePrivateAccessPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePrivateAccessPolicyWithOptions(request, runtime);
  }

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

  async updateRegistrationPolicy(request: UpdateRegistrationPolicyRequest): Promise<UpdateRegistrationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRegistrationPolicyWithOptions(request, runtime);
  }

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

  async updateUserDevicesSharingStatus(request: UpdateUserDevicesSharingStatusRequest): Promise<UpdateUserDevicesSharingStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserDevicesSharingStatusWithOptions(request, runtime);
  }

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

  async updateUserDevicesStatus(request: UpdateUserDevicesStatusRequest): Promise<UpdateUserDevicesStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserDevicesStatusWithOptions(request, runtime);
  }

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

  async updateUserGroup(request: UpdateUserGroupRequest): Promise<UpdateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserGroupWithOptions(request, runtime);
  }

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

  async updateUsersStatus(request: UpdateUsersStatusRequest): Promise<UpdateUsersStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUsersStatusWithOptions(request, runtime);
  }

}
