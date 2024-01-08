// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreatePackageRequest extends $tea.Model {
  body?: string;
  isInstall?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      isInstall: 'isInstall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      isInstall: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePackageResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
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

export class CreatePackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
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

export class CreateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaPlanRequest extends $tea.Model {
  body?: string;
  region?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaPlanResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
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

export class CreateQuotaPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateQuotaPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateQuotaPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaScheduleRequest extends $tea.Model {
  body?: string;
  region?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaScheduleResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
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

export class CreateQuotaScheduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateQuotaScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateQuotaScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleRequest extends $tea.Model {
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRoleResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
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

export class CreateRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQuotaPlanRequest extends $tea.Model {
  region?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQuotaPlanResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
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

export class DeleteQuotaPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteQuotaPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteQuotaPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageRequest extends $tea.Model {
  date?: string;
  jobOwnerList?: string[];
  pageNumber?: number;
  pageSize?: number;
  quotaNicknameList?: string[];
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      jobOwnerList: 'jobOwnerList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      quotaNicknameList: 'quotaNicknameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      jobOwnerList: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      quotaNicknameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageShrinkRequest extends $tea.Model {
  date?: string;
  jobOwnerListShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  quotaNicknameListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      jobOwnerListShrink: 'jobOwnerList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      quotaNicknameListShrink: 'quotaNicknameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      jobOwnerListShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      quotaNicknameListShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageResponseBody extends $tea.Model {
  data?: GetJobResourceUsageResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetJobResourceUsageResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetJobResourceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobResourceUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageRequest extends $tea.Model {
  sourceProject?: string;
  static names(): { [key: string]: string } {
    return {
      sourceProject: 'sourceProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceProject: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBody extends $tea.Model {
  data?: GetPackageResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPackageResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRequest extends $tea.Model {
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $tea.Model {
  data?: GetProjectResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetProjectResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaRequest extends $tea.Model {
  akProven?: string;
  mock?: boolean;
  region?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      akProven: 'AkProven',
      mock: 'mock',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akProven: 'string',
      mock: 'boolean',
      region: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBody extends $tea.Model {
  billingPolicy?: GetQuotaResponseBodyBillingPolicy;
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  data?: GetQuotaResponseBodyData;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: { [key: string]: any };
  parentId?: string;
  regionId?: string;
  requestId?: string;
  saleTag?: GetQuotaResponseBodySaleTag;
  scheduleInfo?: GetQuotaResponseBodyScheduleInfo;
  status?: string;
  subQuotaInfoList?: GetQuotaResponseBodySubQuotaInfoList[];
  tag?: string;
  tenantId?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      data: 'data',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      requestId: 'requestId',
      saleTag: 'saleTag',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      subQuotaInfoList: 'subQuotaInfoList',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingPolicy: GetQuotaResponseBodyBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      data: GetQuotaResponseBodyData,
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      requestId: 'string',
      saleTag: GetQuotaResponseBodySaleTag,
      scheduleInfo: GetQuotaResponseBodyScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': GetQuotaResponseBodySubQuotaInfoList },
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanRequest extends $tea.Model {
  region?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponseBody extends $tea.Model {
  data?: GetQuotaPlanResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetQuotaPlanResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQuotaPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQuotaPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaScheduleRequest extends $tea.Model {
  displayTimezone?: string;
  region?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      displayTimezone: 'displayTimezone',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayTimezone: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaScheduleResponseBody extends $tea.Model {
  data?: GetQuotaScheduleResponseBodyData[];
  errorCode?: string;
  errorMsg?: string;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetQuotaScheduleResponseBodyData },
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaScheduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetQuotaScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQuotaScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBody extends $tea.Model {
  data?: GetRoleAclResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRoleAclResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRoleAclResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRoleAclResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclOnObjectRequest extends $tea.Model {
  objectName?: string;
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      objectName: 'objectName',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectName: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclOnObjectResponseBody extends $tea.Model {
  data?: GetRoleAclOnObjectResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRoleAclOnObjectResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclOnObjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRoleAclOnObjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRoleAclOnObjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRolePolicyResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
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

export class GetRolePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRolePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRolePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningJobsRequest extends $tea.Model {
  from?: number;
  jobOwnerList?: string[];
  pageNumber?: number;
  pageSize?: number;
  quotaNicknameList?: string[];
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      jobOwnerList: 'jobOwnerList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      quotaNicknameList: 'quotaNicknameList',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      jobOwnerList: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      quotaNicknameList: { 'type': 'array', 'itemType': 'string' },
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningJobsShrinkRequest extends $tea.Model {
  from?: number;
  jobOwnerListShrink?: string;
  pageNumber?: number;
  pageSize?: number;
  quotaNicknameListShrink?: string;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      jobOwnerListShrink: 'jobOwnerList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      quotaNicknameListShrink: 'quotaNicknameList',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      jobOwnerListShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      quotaNicknameListShrink: 'string',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningJobsResponseBody extends $tea.Model {
  data?: GetRunningJobsResponseBodyData;
  errorCode?: string;
  errorMsg?: string;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetRunningJobsResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRunningJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRunningJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrustedProjectsResponseBody extends $tea.Model {
  data?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrustedProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTrustedProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTrustedProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillJobsRequest extends $tea.Model {
  body?: string;
  region?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillJobsResponseBody extends $tea.Model {
  data?: string;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      httpCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: KillJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: KillJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsRequest extends $tea.Model {
  marker?: string;
  maxItem?: number;
  prefix?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      prefix: 'prefix',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      prefix: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBody extends $tea.Model {
  data?: ListFunctionsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListFunctionsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListFunctionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFunctionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInfosRequest extends $tea.Model {
  ascOrder?: boolean;
  body?: string;
  orderColumn?: string;
  pageNumber?: number;
  pageSize?: number;
  region?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      ascOrder: 'ascOrder',
      body: 'body',
      orderColumn: 'orderColumn',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascOrder: 'boolean',
      body: 'string',
      orderColumn: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInfosResponseBody extends $tea.Model {
  data?: ListJobInfosResponseBodyData;
  httpCode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListJobInfosResponseBodyData,
      httpCode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListJobInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackagesResponseBody extends $tea.Model {
  data?: ListPackagesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListPackagesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectUsersResponseBody extends $tea.Model {
  data?: ListProjectUsersResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListProjectUsersResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProjectUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $tea.Model {
  listSystemCatalog?: boolean;
  marker?: string;
  maxItem?: number;
  prefix?: string;
  quotaName?: string;
  quotaNickName?: string;
  region?: string;
  saleTags?: string;
  tenantId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      listSystemCatalog: 'listSystemCatalog',
      marker: 'marker',
      maxItem: 'maxItem',
      prefix: 'prefix',
      quotaName: 'quotaName',
      quotaNickName: 'quotaNickName',
      region: 'region',
      saleTags: 'saleTags',
      tenantId: 'tenantId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listSystemCatalog: 'boolean',
      marker: 'string',
      maxItem: 'number',
      prefix: 'string',
      quotaName: 'string',
      quotaNickName: 'string',
      region: 'string',
      saleTags: 'string',
      tenantId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  data?: ListProjectsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListProjectsResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasRequest extends $tea.Model {
  billingType?: string;
  marker?: string;
  maxItem?: number;
  productId?: string;
  region?: string;
  saleTags?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      billingType: 'billingType',
      marker: 'marker',
      maxItem: 'maxItem',
      productId: 'productId',
      region: 'region',
      saleTags: 'saleTags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      marker: 'string',
      maxItem: 'number',
      productId: 'string',
      region: 'string',
      saleTags: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBody extends $tea.Model {
  nextToken?: string;
  data?: ListQuotasResponseBodyData;
  marker?: string;
  maxItem?: number;
  quotaInfoList?: ListQuotasResponseBodyQuotaInfoList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      data: 'data',
      marker: 'marker',
      maxItem: 'maxItem',
      quotaInfoList: 'quotaInfoList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      data: ListQuotasResponseBodyData,
      marker: 'string',
      maxItem: 'number',
      quotaInfoList: { 'type': 'array', 'itemType': ListQuotasResponseBodyQuotaInfoList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListQuotasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListQuotasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansRequest extends $tea.Model {
  region?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBody extends $tea.Model {
  data?: ListQuotasPlansResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListQuotasPlansResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListQuotasPlansResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListQuotasPlansResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesRequest extends $tea.Model {
  marker?: string;
  maxItem?: number;
  name?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      name: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $tea.Model {
  data?: ListResourcesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListResourcesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $tea.Model {
  data?: ListRolesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListRolesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesRequest extends $tea.Model {
  marker?: string;
  maxItem?: number;
  prefix?: string;
  schemaName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      prefix: 'prefix',
      schemaName: 'schemaName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      prefix: 'string',
      schemaName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBody extends $tea.Model {
  data?: ListTablesResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTablesResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  data?: ListUsersResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListUsersResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListUsersByRoleResponseBody extends $tea.Model {
  data?: ListUsersByRoleResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListUsersByRoleResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersByRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUsersByRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUsersByRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePackageRequest extends $tea.Model {
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePackageResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
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

export class UpdatePackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdatePackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectIpWhiteListRequest extends $tea.Model {
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectIpWhiteListResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
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

export class UpdateProjectIpWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProjectIpWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProjectIpWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  akProven?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      akProven: 'AkProven',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      akProven: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaRequest extends $tea.Model {
  body?: string;
  region?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
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

export class UpdateQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaPlanRequest extends $tea.Model {
  body?: string;
  region?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaPlanResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
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

export class UpdateQuotaPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateQuotaPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateQuotaPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaScheduleRequest extends $tea.Model {
  body?: string;
  region?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      region: 'region',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      region: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaScheduleResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
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

export class UpdateQuotaScheduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateQuotaScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateQuotaScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageResponseBodyDataJobResourceUsageList extends $tea.Model {
  cuUsage?: number;
  date?: string;
  jobOwner?: string;
  memoryUsage?: number;
  quotaNickname?: string;
  static names(): { [key: string]: string } {
    return {
      cuUsage: 'cuUsage',
      date: 'date',
      jobOwner: 'jobOwner',
      memoryUsage: 'memoryUsage',
      quotaNickname: 'quotaNickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuUsage: 'number',
      date: 'string',
      jobOwner: 'string',
      memoryUsage: 'number',
      quotaNickname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResourceUsageResponseBodyData extends $tea.Model {
  jobResourceUsageList?: GetJobResourceUsageResponseBodyDataJobResourceUsageList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobResourceUsageList: 'jobResourceUsageList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobResourceUsageList: { 'type': 'array', 'itemType': GetJobResourceUsageResponseBodyDataJobResourceUsageList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBodyDataAllowedProjectList extends $tea.Model {
  label?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBodyDataResourceListFunction extends $tea.Model {
  actions?: string[];
  name?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBodyDataResourceListResource extends $tea.Model {
  actions?: string[];
  name?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBodyDataResourceListTable extends $tea.Model {
  actions?: string[];
  name?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBodyDataResourceList extends $tea.Model {
  function?: GetPackageResponseBodyDataResourceListFunction[];
  resource?: GetPackageResponseBodyDataResourceListResource[];
  table?: GetPackageResponseBodyDataResourceListTable[];
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      resource: 'resource',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: { 'type': 'array', 'itemType': GetPackageResponseBodyDataResourceListFunction },
      resource: { 'type': 'array', 'itemType': GetPackageResponseBodyDataResourceListResource },
      table: { 'type': 'array', 'itemType': GetPackageResponseBodyDataResourceListTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPackageResponseBodyData extends $tea.Model {
  allowedProjectList?: GetPackageResponseBodyDataAllowedProjectList[];
  resourceList?: GetPackageResponseBodyDataResourceList;
  static names(): { [key: string]: string } {
    return {
      allowedProjectList: 'allowedProjectList',
      resourceList: 'resourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedProjectList: { 'type': 'array', 'itemType': GetPackageResponseBodyDataAllowedProjectList },
      resourceList: GetPackageResponseBodyDataResourceList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataIpWhiteList extends $tea.Model {
  ipList?: string;
  vpcIpList?: string;
  static names(): { [key: string]: string } {
    return {
      ipList: 'ipList',
      vpcIpList: 'vpcIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: 'string',
      vpcIpList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesEncryption extends $tea.Model {
  algorithm?: string;
  enable?: boolean;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      enable: 'enable',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      enable: 'boolean',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesStorageTierInfoStorageTierSize extends $tea.Model {
  longTermSize?: number;
  lowFrequencySize?: number;
  standardSize?: number;
  static names(): { [key: string]: string } {
    return {
      longTermSize: 'longTermSize',
      lowFrequencySize: 'lowFrequencySize',
      standardSize: 'standardSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      longTermSize: 'number',
      lowFrequencySize: 'number',
      standardSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesStorageTierInfo extends $tea.Model {
  projectBackupSize?: number;
  projectTotalSize?: number;
  storageTierSize?: GetProjectResponseBodyDataPropertiesStorageTierInfoStorageTierSize;
  static names(): { [key: string]: string } {
    return {
      projectBackupSize: 'projectBackupSize',
      projectTotalSize: 'projectTotalSize',
      storageTierSize: 'storageTierSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectBackupSize: 'number',
      projectTotalSize: 'number',
      storageTierSize: GetProjectResponseBodyDataPropertiesStorageTierInfoStorageTierSize,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataPropertiesTableLifecycle extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataProperties extends $tea.Model {
  allowFullScan?: boolean;
  elderTunnelQuota?: string;
  enableDecimal2?: boolean;
  enableTunnelQuotaRoute?: boolean;
  encryption?: GetProjectResponseBodyDataPropertiesEncryption;
  retentionDays?: number;
  sqlMeteringMax?: string;
  storageTierInfo?: GetProjectResponseBodyDataPropertiesStorageTierInfo;
  tableLifecycle?: GetProjectResponseBodyDataPropertiesTableLifecycle;
  timezone?: string;
  tunnelQuota?: string;
  typeSystem?: string;
  static names(): { [key: string]: string } {
    return {
      allowFullScan: 'allowFullScan',
      elderTunnelQuota: 'elderTunnelQuota',
      enableDecimal2: 'enableDecimal2',
      enableTunnelQuotaRoute: 'enableTunnelQuotaRoute',
      encryption: 'encryption',
      retentionDays: 'retentionDays',
      sqlMeteringMax: 'sqlMeteringMax',
      storageTierInfo: 'storageTierInfo',
      tableLifecycle: 'tableLifecycle',
      timezone: 'timezone',
      tunnelQuota: 'tunnelQuota',
      typeSystem: 'typeSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFullScan: 'boolean',
      elderTunnelQuota: 'string',
      enableDecimal2: 'boolean',
      enableTunnelQuotaRoute: 'boolean',
      encryption: GetProjectResponseBodyDataPropertiesEncryption,
      retentionDays: 'number',
      sqlMeteringMax: 'string',
      storageTierInfo: GetProjectResponseBodyDataPropertiesStorageTierInfo,
      tableLifecycle: GetProjectResponseBodyDataPropertiesTableLifecycle,
      timezone: 'string',
      tunnelQuota: 'string',
      typeSystem: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataSaleTag extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataSecurityPropertiesProjectProtection extends $tea.Model {
  exceptionPolicy?: string;
  protected?: boolean;
  static names(): { [key: string]: string } {
    return {
      exceptionPolicy: 'exceptionPolicy',
      protected: 'protected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionPolicy: 'string',
      protected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyDataSecurityProperties extends $tea.Model {
  enableDownloadPrivilege?: boolean;
  labelSecurity?: boolean;
  objectCreatorHasAccessPermission?: boolean;
  objectCreatorHasGrantPermission?: boolean;
  projectProtection?: GetProjectResponseBodyDataSecurityPropertiesProjectProtection;
  usingAcl?: boolean;
  usingPolicy?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableDownloadPrivilege: 'enableDownloadPrivilege',
      labelSecurity: 'labelSecurity',
      objectCreatorHasAccessPermission: 'objectCreatorHasAccessPermission',
      objectCreatorHasGrantPermission: 'objectCreatorHasGrantPermission',
      projectProtection: 'projectProtection',
      usingAcl: 'usingAcl',
      usingPolicy: 'usingPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDownloadPrivilege: 'boolean',
      labelSecurity: 'boolean',
      objectCreatorHasAccessPermission: 'boolean',
      objectCreatorHasGrantPermission: 'boolean',
      projectProtection: GetProjectResponseBodyDataSecurityPropertiesProjectProtection,
      usingAcl: 'boolean',
      usingPolicy: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyData extends $tea.Model {
  comment?: string;
  costStorage?: string;
  createdTime?: number;
  defaultQuota?: string;
  ipWhiteList?: GetProjectResponseBodyDataIpWhiteList;
  name?: string;
  owner?: string;
  productType?: string;
  properties?: GetProjectResponseBodyDataProperties;
  regionId?: string;
  saleTag?: GetProjectResponseBodyDataSaleTag;
  securityProperties?: GetProjectResponseBodyDataSecurityProperties;
  status?: string;
  superAdmins?: string[];
  threeTierModel?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      costStorage: 'costStorage',
      createdTime: 'createdTime',
      defaultQuota: 'defaultQuota',
      ipWhiteList: 'ipWhiteList',
      name: 'name',
      owner: 'owner',
      productType: 'productType',
      properties: 'properties',
      regionId: 'regionId',
      saleTag: 'saleTag',
      securityProperties: 'securityProperties',
      status: 'status',
      superAdmins: 'superAdmins',
      threeTierModel: 'threeTierModel',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      costStorage: 'string',
      createdTime: 'number',
      defaultQuota: 'string',
      ipWhiteList: GetProjectResponseBodyDataIpWhiteList,
      name: 'string',
      owner: 'string',
      productType: 'string',
      properties: GetProjectResponseBodyDataProperties,
      regionId: 'string',
      saleTag: GetProjectResponseBodyDataSaleTag,
      securityProperties: GetProjectResponseBodyDataSecurityProperties,
      status: 'string',
      superAdmins: { 'type': 'array', 'itemType': 'string' },
      threeTierModel: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyBillingPolicy extends $tea.Model {
  billingMethod?: string;
  odpsSpecCode?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyDataBillingPolicy extends $tea.Model {
  billingMethod?: string;
  odpsSpecCode?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyDataSaleTag extends $tea.Model {
  resourceIds?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyDataScheduleInfo extends $tea.Model {
  currPlan?: string;
  currTime?: string;
  nextPlan?: string;
  nextTime?: string;
  oncePlan?: string;
  onceTime?: string;
  operatorName?: string;
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyDataSubQuotaInfoListBillingPolicy extends $tea.Model {
  billingMethod?: string;
  odpsSpecCode?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyDataSubQuotaInfoListSaleTag extends $tea.Model {
  resourceIds?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyDataSubQuotaInfoListScheduleInfo extends $tea.Model {
  currPlan?: string;
  currTime?: string;
  nextPlan?: string;
  nextTime?: string;
  oncePlan?: string;
  onceTime?: string;
  operatorName?: string;
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyDataSubQuotaInfoList extends $tea.Model {
  billingPolicy?: GetQuotaResponseBodyDataSubQuotaInfoListBillingPolicy;
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: { [key: string]: any };
  parentId?: string;
  regionId?: string;
  saleTag?: GetQuotaResponseBodyDataSubQuotaInfoListSaleTag;
  scheduleInfo?: GetQuotaResponseBodyDataSubQuotaInfoListScheduleInfo;
  status?: string;
  tag?: string;
  tenantId?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      saleTag: 'saleTag',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingPolicy: GetQuotaResponseBodyDataSubQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: GetQuotaResponseBodyDataSubQuotaInfoListSaleTag,
      scheduleInfo: GetQuotaResponseBodyDataSubQuotaInfoListScheduleInfo,
      status: 'string',
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyData extends $tea.Model {
  billingPolicy?: GetQuotaResponseBodyDataBillingPolicy;
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: { [key: string]: any };
  parentId?: string;
  regionId?: string;
  saleTag?: GetQuotaResponseBodyDataSaleTag;
  scheduleInfo?: GetQuotaResponseBodyDataScheduleInfo;
  status?: string;
  subQuotaInfoList?: GetQuotaResponseBodyDataSubQuotaInfoList[];
  tag?: string;
  tenantId?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      saleTag: 'saleTag',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      subQuotaInfoList: 'subQuotaInfoList',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingPolicy: GetQuotaResponseBodyDataBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: GetQuotaResponseBodyDataSaleTag,
      scheduleInfo: GetQuotaResponseBodyDataScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': GetQuotaResponseBodyDataSubQuotaInfoList },
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodySaleTag extends $tea.Model {
  resourceIds?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyScheduleInfo extends $tea.Model {
  currPlan?: string;
  currTime?: string;
  nextPlan?: string;
  nextTime?: string;
  oncePlan?: string;
  onceTime?: string;
  operatorName?: string;
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodySubQuotaInfoListBillingPolicy extends $tea.Model {
  billingMethod?: string;
  odpsSpecCode?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodySubQuotaInfoListSaleTag extends $tea.Model {
  resourceIds?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodySubQuotaInfoListScheduleInfo extends $tea.Model {
  currPlan?: string;
  currTime?: string;
  nextPlan?: string;
  nextTime?: string;
  oncePlan?: string;
  onceTime?: string;
  operatorName?: string;
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodySubQuotaInfoList extends $tea.Model {
  billingPolicy?: GetQuotaResponseBodySubQuotaInfoListBillingPolicy;
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: { [key: string]: any };
  parentId?: string;
  regionId?: string;
  saleTag?: GetQuotaResponseBodySubQuotaInfoListSaleTag;
  scheduleInfo?: GetQuotaResponseBodySubQuotaInfoListScheduleInfo;
  status?: string;
  tag?: string;
  tenantId?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      saleTag: 'saleTag',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingPolicy: GetQuotaResponseBodySubQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: GetQuotaResponseBodySubQuotaInfoListSaleTag,
      scheduleInfo: GetQuotaResponseBodySubQuotaInfoListScheduleInfo,
      status: 'string',
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponseBodyDataQuotaBillingPolicy extends $tea.Model {
  billingMethod?: string;
  odpsSpecCode?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponseBodyDataQuotaScheduleInfo extends $tea.Model {
  currPlan?: string;
  currTime?: string;
  nextPlan?: string;
  nextTime?: string;
  oncePlan?: string;
  onceTime?: string;
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoListBillingPolicy extends $tea.Model {
  billingMethod?: string;
  odpsSpecCode?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoListScheduleInfo extends $tea.Model {
  currPlan?: string;
  currTime?: string;
  nextPlan?: string;
  nextTime?: string;
  oncePlan?: string;
  onceTime?: string;
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoList extends $tea.Model {
  billingPolicy?: GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoListBillingPolicy;
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: { [key: string]: any };
  parentId?: string;
  regionId?: string;
  scheduleInfo?: GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoListScheduleInfo;
  status?: string;
  tag?: string;
  tenantId?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingPolicy: GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      scheduleInfo: GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoListScheduleInfo,
      status: 'string',
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponseBodyDataQuota extends $tea.Model {
  billingPolicy?: GetQuotaPlanResponseBodyDataQuotaBillingPolicy;
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: { [key: string]: any };
  parentId?: string;
  regionId?: string;
  scheduleInfo?: GetQuotaPlanResponseBodyDataQuotaScheduleInfo;
  status?: string;
  subQuotaInfoList?: GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoList[];
  tag?: string;
  tenantId?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      subQuotaInfoList: 'subQuotaInfoList',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingPolicy: GetQuotaPlanResponseBodyDataQuotaBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      scheduleInfo: GetQuotaPlanResponseBodyDataQuotaScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': GetQuotaPlanResponseBodyDataQuotaSubQuotaInfoList },
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaPlanResponseBodyData extends $tea.Model {
  createTime?: string;
  name?: string;
  quota?: GetQuotaPlanResponseBodyDataQuota;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      name: 'name',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      name: 'string',
      quota: GetQuotaPlanResponseBodyDataQuota,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaScheduleResponseBodyDataCondition extends $tea.Model {
  after?: string;
  at?: string;
  static names(): { [key: string]: string } {
    return {
      after: 'after',
      at: 'at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'string',
      at: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaScheduleResponseBodyData extends $tea.Model {
  condition?: GetQuotaScheduleResponseBodyDataCondition;
  id?: string;
  operator?: string;
  plan?: string;
  timezone?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      id: 'id',
      operator: 'operator',
      plan: 'plan',
      timezone: 'timezone',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: GetQuotaScheduleResponseBodyDataCondition,
      id: 'string',
      operator: 'string',
      plan: 'string',
      timezone: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBodyDataFunction extends $tea.Model {
  actions?: string[];
  name?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBodyDataInstance extends $tea.Model {
  actions?: string[];
  name?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBodyDataPackage extends $tea.Model {
  actions?: string[];
  name?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBodyDataProject extends $tea.Model {
  actions?: string[];
  name?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBodyDataResource extends $tea.Model {
  actions?: string[];
  name?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBodyDataTable extends $tea.Model {
  actions?: string[];
  name?: string;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
      schemaName: 'schemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      schemaName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclResponseBodyData extends $tea.Model {
  function?: GetRoleAclResponseBodyDataFunction[];
  instance?: GetRoleAclResponseBodyDataInstance[];
  package?: GetRoleAclResponseBodyDataPackage[];
  project?: GetRoleAclResponseBodyDataProject[];
  resource?: GetRoleAclResponseBodyDataResource[];
  table?: GetRoleAclResponseBodyDataTable[];
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      instance: 'instance',
      package: 'package',
      project: 'project',
      resource: 'resource',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataFunction },
      instance: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataInstance },
      package: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataPackage },
      project: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataProject },
      resource: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataResource },
      table: { 'type': 'array', 'itemType': GetRoleAclResponseBodyDataTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoleAclOnObjectResponseBodyData extends $tea.Model {
  actions?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningJobsResponseBodyDataRunningJobInfoList extends $tea.Model {
  cuSnapshot?: number;
  instanceId?: string;
  jobOwner?: string;
  memorySnapshot?: number;
  progress?: number;
  project?: string;
  quotaNickname?: string;
  runningAtTime?: number;
  submittedAtTime?: number;
  static names(): { [key: string]: string } {
    return {
      cuSnapshot: 'cuSnapshot',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      memorySnapshot: 'memorySnapshot',
      progress: 'progress',
      project: 'project',
      quotaNickname: 'quotaNickname',
      runningAtTime: 'runningAtTime',
      submittedAtTime: 'submittedAtTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuSnapshot: 'number',
      instanceId: 'string',
      jobOwner: 'string',
      memorySnapshot: 'number',
      progress: 'number',
      project: 'string',
      quotaNickname: 'string',
      runningAtTime: 'number',
      submittedAtTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunningJobsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  runningJobInfoList?: GetRunningJobsResponseBodyDataRunningJobInfoList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      runningJobInfoList: 'runningJobInfoList',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      runningJobInfoList: { 'type': 'array', 'itemType': GetRunningJobsResponseBodyDataRunningJobInfoList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyDataFunctions extends $tea.Model {
  class?: string;
  creationTime?: number;
  displayName?: string;
  name?: string;
  owner?: string;
  resources?: string;
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      class: 'class',
      creationTime: 'creationTime',
      displayName: 'displayName',
      name: 'name',
      owner: 'owner',
      resources: 'resources',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      class: 'string',
      creationTime: 'number',
      displayName: 'string',
      name: 'string',
      owner: 'string',
      resources: 'string',
      schema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyData extends $tea.Model {
  functions?: ListFunctionsResponseBodyDataFunctions[];
  marker?: string;
  maxItem?: number;
  static names(): { [key: string]: string } {
    return {
      functions: 'functions',
      marker: 'marker',
      maxItem: 'maxItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': ListFunctionsResponseBodyDataFunctions },
      marker: 'string',
      maxItem: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInfosResponseBodyDataJobInfoList extends $tea.Model {
  cluster?: string;
  cuSnapshot?: number;
  cuUsage?: number;
  endAtTime?: number;
  extNodeId?: string;
  extNodeOnDuty?: string;
  extPlantFrom?: string;
  instanceId?: string;
  jobOwner?: string;
  jobType?: string;
  memorySnapshot?: number;
  memoryUsage?: number;
  priority?: number;
  project?: string;
  quotaNickname?: string;
  quotaType?: string;
  region?: string;
  runningAtTime?: number;
  runningTime?: number;
  signature?: string;
  status?: string;
  statusSnapshot?: string;
  submittedAtTime?: number;
  tags?: string;
  tenantId?: string;
  totalTime?: number;
  waitingTime?: number;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      cuSnapshot: 'cuSnapshot',
      cuUsage: 'cuUsage',
      endAtTime: 'endAtTime',
      extNodeId: 'extNodeId',
      extNodeOnDuty: 'extNodeOnDuty',
      extPlantFrom: 'extPlantFrom',
      instanceId: 'instanceId',
      jobOwner: 'jobOwner',
      jobType: 'jobType',
      memorySnapshot: 'memorySnapshot',
      memoryUsage: 'memoryUsage',
      priority: 'priority',
      project: 'project',
      quotaNickname: 'quotaNickname',
      quotaType: 'quotaType',
      region: 'region',
      runningAtTime: 'runningAtTime',
      runningTime: 'runningTime',
      signature: 'signature',
      status: 'status',
      statusSnapshot: 'statusSnapshot',
      submittedAtTime: 'submittedAtTime',
      tags: 'tags',
      tenantId: 'tenantId',
      totalTime: 'totalTime',
      waitingTime: 'waitingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      cuSnapshot: 'number',
      cuUsage: 'number',
      endAtTime: 'number',
      extNodeId: 'string',
      extNodeOnDuty: 'string',
      extPlantFrom: 'string',
      instanceId: 'string',
      jobOwner: 'string',
      jobType: 'string',
      memorySnapshot: 'number',
      memoryUsage: 'number',
      priority: 'number',
      project: 'string',
      quotaNickname: 'string',
      quotaType: 'string',
      region: 'string',
      runningAtTime: 'number',
      runningTime: 'number',
      signature: 'string',
      status: 'string',
      statusSnapshot: 'string',
      submittedAtTime: 'number',
      tags: 'string',
      tenantId: 'string',
      totalTime: 'number',
      waitingTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobInfosResponseBodyData extends $tea.Model {
  jobInfoList?: ListJobInfosResponseBodyDataJobInfoList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobInfoList: 'jobInfoList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfoList: { 'type': 'array', 'itemType': ListJobInfosResponseBodyDataJobInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackagesResponseBodyDataCreatedPackages extends $tea.Model {
  createTime?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackagesResponseBodyDataInstalledPackages extends $tea.Model {
  installTime?: number;
  name?: string;
  sourceProject?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      installTime: 'installTime',
      name: 'name',
      sourceProject: 'sourceProject',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installTime: 'number',
      name: 'string',
      sourceProject: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPackagesResponseBodyData extends $tea.Model {
  createdPackages?: ListPackagesResponseBodyDataCreatedPackages[];
  installedPackages?: ListPackagesResponseBodyDataInstalledPackages[];
  static names(): { [key: string]: string } {
    return {
      createdPackages: 'createdPackages',
      installedPackages: 'installedPackages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdPackages: { 'type': 'array', 'itemType': ListPackagesResponseBodyDataCreatedPackages },
      installedPackages: { 'type': 'array', 'itemType': ListPackagesResponseBodyDataInstalledPackages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectUsersResponseBodyDataUsers extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectUsersResponseBodyData extends $tea.Model {
  users?: ListProjectUsersResponseBodyDataUsers[];
  static names(): { [key: string]: string } {
    return {
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      users: { 'type': 'array', 'itemType': ListProjectUsersResponseBodyDataUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsIpWhiteList extends $tea.Model {
  ipList?: string;
  vpcIpList?: string;
  static names(): { [key: string]: string } {
    return {
      ipList: 'ipList',
      vpcIpList: 'vpcIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: 'string',
      vpcIpList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsPropertiesEncryption extends $tea.Model {
  algorithm?: string;
  enable?: boolean;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      enable: 'enable',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      enable: 'boolean',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle extends $tea.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsProperties extends $tea.Model {
  allowFullScan?: boolean;
  enableDecimal2?: boolean;
  enableTunnelQuotaRoute?: boolean;
  encryption?: ListProjectsResponseBodyDataProjectsPropertiesEncryption;
  retentionDays?: number;
  sqlMeteringMax?: string;
  tableLifecycle?: ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle;
  timezone?: string;
  tunnelQuota?: string;
  typeSystem?: string;
  static names(): { [key: string]: string } {
    return {
      allowFullScan: 'allowFullScan',
      enableDecimal2: 'enableDecimal2',
      enableTunnelQuotaRoute: 'enableTunnelQuotaRoute',
      encryption: 'encryption',
      retentionDays: 'retentionDays',
      sqlMeteringMax: 'sqlMeteringMax',
      tableLifecycle: 'tableLifecycle',
      timezone: 'timezone',
      tunnelQuota: 'tunnelQuota',
      typeSystem: 'typeSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFullScan: 'boolean',
      enableDecimal2: 'boolean',
      enableTunnelQuotaRoute: 'boolean',
      encryption: ListProjectsResponseBodyDataProjectsPropertiesEncryption,
      retentionDays: 'number',
      sqlMeteringMax: 'string',
      tableLifecycle: ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle,
      timezone: 'string',
      tunnelQuota: 'string',
      typeSystem: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsSaleTag extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsSecurityPropertiesProjectProtection extends $tea.Model {
  exceptionPolicy?: string;
  protected?: boolean;
  static names(): { [key: string]: string } {
    return {
      exceptionPolicy: 'exceptionPolicy',
      protected: 'protected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionPolicy: 'string',
      protected: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsSecurityProperties extends $tea.Model {
  enableDownloadPrivilege?: boolean;
  labelSecurity?: boolean;
  objectCreatorHasAccessPermission?: boolean;
  objectCreatorHasGrantPermission?: boolean;
  projectProtection?: ListProjectsResponseBodyDataProjectsSecurityPropertiesProjectProtection;
  usingAcl?: boolean;
  usingPolicy?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableDownloadPrivilege: 'enableDownloadPrivilege',
      labelSecurity: 'labelSecurity',
      objectCreatorHasAccessPermission: 'objectCreatorHasAccessPermission',
      objectCreatorHasGrantPermission: 'objectCreatorHasGrantPermission',
      projectProtection: 'projectProtection',
      usingAcl: 'usingAcl',
      usingPolicy: 'usingPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDownloadPrivilege: 'boolean',
      labelSecurity: 'boolean',
      objectCreatorHasAccessPermission: 'boolean',
      objectCreatorHasGrantPermission: 'boolean',
      projectProtection: ListProjectsResponseBodyDataProjectsSecurityPropertiesProjectProtection,
      usingAcl: 'boolean',
      usingPolicy: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjects extends $tea.Model {
  tags?: ListProjectsResponseBodyDataProjectsTags[];
  comment?: string;
  costStorage?: string;
  createdTime?: number;
  defaultQuota?: string;
  ipWhiteList?: ListProjectsResponseBodyDataProjectsIpWhiteList;
  name?: string;
  owner?: string;
  properties?: ListProjectsResponseBodyDataProjectsProperties;
  regionId?: string;
  saleTag?: ListProjectsResponseBodyDataProjectsSaleTag;
  securityProperties?: ListProjectsResponseBodyDataProjectsSecurityProperties;
  status?: string;
  threeTierModel?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
      comment: 'comment',
      costStorage: 'costStorage',
      createdTime: 'createdTime',
      defaultQuota: 'defaultQuota',
      ipWhiteList: 'ipWhiteList',
      name: 'name',
      owner: 'owner',
      properties: 'properties',
      regionId: 'regionId',
      saleTag: 'saleTag',
      securityProperties: 'securityProperties',
      status: 'status',
      threeTierModel: 'threeTierModel',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': ListProjectsResponseBodyDataProjectsTags },
      comment: 'string',
      costStorage: 'string',
      createdTime: 'number',
      defaultQuota: 'string',
      ipWhiteList: ListProjectsResponseBodyDataProjectsIpWhiteList,
      name: 'string',
      owner: 'string',
      properties: ListProjectsResponseBodyDataProjectsProperties,
      regionId: 'string',
      saleTag: ListProjectsResponseBodyDataProjectsSaleTag,
      securityProperties: ListProjectsResponseBodyDataProjectsSecurityProperties,
      status: 'string',
      threeTierModel: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyData extends $tea.Model {
  nextToken?: string;
  marker?: string;
  maxItem?: number;
  projects?: ListProjectsResponseBodyDataProjects[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      marker: 'marker',
      maxItem: 'maxItem',
      projects: 'projects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      marker: 'string',
      maxItem: 'number',
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyDataProjects },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListBillingPolicy extends $tea.Model {
  billingMethod?: string;
  odpsSpecCode?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSaleTag extends $tea.Model {
  resourceIds?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListScheduleInfo extends $tea.Model {
  currPlan?: string;
  currTime?: string;
  nextPlan?: string;
  nextTime?: string;
  oncePlan?: string;
  onceTime?: string;
  operatorName?: string;
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListBillingPolicy extends $tea.Model {
  billingMethod?: string;
  odpsSpecCode?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListSaleTag extends $tea.Model {
  resourceIds?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListScheduleInfo extends $tea.Model {
  currPlan?: string;
  currTime?: string;
  nextPlan?: string;
  nextTime?: string;
  oncePlan?: string;
  onceTime?: string;
  operatorName?: string;
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoList extends $tea.Model {
  billingPolicy?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListBillingPolicy;
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: { [key: string]: any };
  parentId?: string;
  regionId?: string;
  saleTag?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListSaleTag;
  scheduleInfo?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListScheduleInfo;
  status?: string;
  tag?: string;
  tenantId?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      saleTag: 'saleTag',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingPolicy: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListSaleTag,
      scheduleInfo: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoListScheduleInfo,
      status: 'string',
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyDataQuotaInfoList extends $tea.Model {
  tags?: ListQuotasResponseBodyDataQuotaInfoListTags[];
  billingPolicy?: ListQuotasResponseBodyDataQuotaInfoListBillingPolicy;
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: { [key: string]: any };
  parentId?: string;
  regionId?: string;
  saleTag?: ListQuotasResponseBodyDataQuotaInfoListSaleTag;
  scheduleInfo?: ListQuotasResponseBodyDataQuotaInfoListScheduleInfo;
  status?: string;
  subQuotaInfoList?: ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoList[];
  tag?: string;
  tenantId?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      saleTag: 'saleTag',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      subQuotaInfoList: 'subQuotaInfoList',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': ListQuotasResponseBodyDataQuotaInfoListTags },
      billingPolicy: ListQuotasResponseBodyDataQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: ListQuotasResponseBodyDataQuotaInfoListSaleTag,
      scheduleInfo: ListQuotasResponseBodyDataQuotaInfoListScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': ListQuotasResponseBodyDataQuotaInfoListSubQuotaInfoList },
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyData extends $tea.Model {
  nextToken?: string;
  marker?: string;
  maxItem?: number;
  quotaInfoList?: ListQuotasResponseBodyDataQuotaInfoList[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      marker: 'marker',
      maxItem: 'maxItem',
      quotaInfoList: 'quotaInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      marker: 'string',
      maxItem: 'number',
      quotaInfoList: { 'type': 'array', 'itemType': ListQuotasResponseBodyDataQuotaInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListBillingPolicy extends $tea.Model {
  billingMethod?: string;
  odpsSpecCode?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSaleTag extends $tea.Model {
  resourceIds?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListScheduleInfo extends $tea.Model {
  currPlan?: string;
  currTime?: string;
  nextPlan?: string;
  nextTime?: string;
  oncePlan?: string;
  onceTime?: string;
  operatorName?: string;
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListBillingPolicy extends $tea.Model {
  billingMethod?: string;
  odpsSpecCode?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListSaleTag extends $tea.Model {
  resourceIds?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListScheduleInfo extends $tea.Model {
  currPlan?: string;
  currTime?: string;
  nextPlan?: string;
  nextTime?: string;
  oncePlan?: string;
  onceTime?: string;
  operatorName?: string;
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
      timezone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoListSubQuotaInfoList extends $tea.Model {
  billingPolicy?: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListBillingPolicy;
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: { [key: string]: any };
  parentId?: string;
  regionId?: string;
  saleTag?: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListSaleTag;
  scheduleInfo?: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListScheduleInfo;
  status?: string;
  tag?: string;
  tenantId?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      saleTag: 'saleTag',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingPolicy: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListSaleTag,
      scheduleInfo: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoListScheduleInfo,
      status: 'string',
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotaInfoList extends $tea.Model {
  tags?: ListQuotasResponseBodyQuotaInfoListTags[];
  billingPolicy?: ListQuotasResponseBodyQuotaInfoListBillingPolicy;
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: { [key: string]: any };
  parentId?: string;
  regionId?: string;
  saleTag?: ListQuotasResponseBodyQuotaInfoListSaleTag;
  scheduleInfo?: ListQuotasResponseBodyQuotaInfoListScheduleInfo;
  status?: string;
  subQuotaInfoList?: ListQuotasResponseBodyQuotaInfoListSubQuotaInfoList[];
  tag?: string;
  tenantId?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      saleTag: 'saleTag',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      subQuotaInfoList: 'subQuotaInfoList',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': ListQuotasResponseBodyQuotaInfoListTags },
      billingPolicy: ListQuotasResponseBodyQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      saleTag: ListQuotasResponseBodyQuotaInfoListSaleTag,
      scheduleInfo: ListQuotasResponseBodyQuotaInfoListScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': ListQuotasResponseBodyQuotaInfoListSubQuotaInfoList },
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBodyDataPlanListQuotaBillingPolicy extends $tea.Model {
  billingMethod?: string;
  odpsSpecCode?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBodyDataPlanListQuotaScheduleInfo extends $tea.Model {
  currPlan?: string;
  currTime?: string;
  nextPlan?: string;
  nextTime?: string;
  oncePlan?: string;
  onceTime?: string;
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoListBillingPolicy extends $tea.Model {
  billingMethod?: string;
  odpsSpecCode?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      billingMethod: 'billingMethod',
      odpsSpecCode: 'odpsSpecCode',
      orderId: 'orderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMethod: 'string',
      odpsSpecCode: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoListScheduleInfo extends $tea.Model {
  currPlan?: string;
  currTime?: string;
  nextPlan?: string;
  nextTime?: string;
  oncePlan?: string;
  onceTime?: string;
  operatorName?: string;
  static names(): { [key: string]: string } {
    return {
      currPlan: 'currPlan',
      currTime: 'currTime',
      nextPlan: 'nextPlan',
      nextTime: 'nextTime',
      oncePlan: 'oncePlan',
      onceTime: 'onceTime',
      operatorName: 'operatorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPlan: 'string',
      currTime: 'string',
      nextPlan: 'string',
      nextTime: 'string',
      oncePlan: 'string',
      onceTime: 'string',
      operatorName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoList extends $tea.Model {
  billingPolicy?: ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoListBillingPolicy;
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: { [key: string]: any };
  parentId?: string;
  regionId?: string;
  scheduleInfo?: ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoListScheduleInfo;
  status?: string;
  tag?: string;
  tenantId?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingPolicy: ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoListBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      scheduleInfo: ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoListScheduleInfo,
      status: 'string',
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBodyDataPlanListQuota extends $tea.Model {
  billingPolicy?: ListQuotasPlansResponseBodyDataPlanListQuotaBillingPolicy;
  cluster?: string;
  createTime?: number;
  creatorId?: string;
  id?: string;
  name?: string;
  nickName?: string;
  parameter?: { [key: string]: any };
  parentId?: string;
  regionId?: string;
  scheduleInfo?: ListQuotasPlansResponseBodyDataPlanListQuotaScheduleInfo;
  status?: string;
  subQuotaInfoList?: ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoList[];
  tag?: string;
  tenantId?: string;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      billingPolicy: 'billingPolicy',
      cluster: 'cluster',
      createTime: 'createTime',
      creatorId: 'creatorId',
      id: 'id',
      name: 'name',
      nickName: 'nickName',
      parameter: 'parameter',
      parentId: 'parentId',
      regionId: 'regionId',
      scheduleInfo: 'scheduleInfo',
      status: 'status',
      subQuotaInfoList: 'subQuotaInfoList',
      tag: 'tag',
      tenantId: 'tenantId',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingPolicy: ListQuotasPlansResponseBodyDataPlanListQuotaBillingPolicy,
      cluster: 'string',
      createTime: 'number',
      creatorId: 'string',
      id: 'string',
      name: 'string',
      nickName: 'string',
      parameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parentId: 'string',
      regionId: 'string',
      scheduleInfo: ListQuotasPlansResponseBodyDataPlanListQuotaScheduleInfo,
      status: 'string',
      subQuotaInfoList: { 'type': 'array', 'itemType': ListQuotasPlansResponseBodyDataPlanListQuotaSubQuotaInfoList },
      tag: 'string',
      tenantId: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBodyDataPlanList extends $tea.Model {
  createTime?: string;
  name?: string;
  quota?: ListQuotasPlansResponseBodyDataPlanListQuota;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      name: 'name',
      quota: 'quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      name: 'string',
      quota: ListQuotasPlansResponseBodyDataPlanListQuota,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasPlansResponseBodyData extends $tea.Model {
  planList?: ListQuotasPlansResponseBodyDataPlanList[];
  static names(): { [key: string]: string } {
    return {
      planList: 'planList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planList: { 'type': 'array', 'itemType': ListQuotasPlansResponseBodyDataPlanList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyDataResources extends $tea.Model {
  comment?: string;
  contentMD5?: string;
  creationTime?: number;
  displayName?: string;
  lastModifiedTime?: number;
  lastUpdator?: string;
  name?: string;
  owner?: string;
  schema?: string;
  size?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      contentMD5: 'contentMD5',
      creationTime: 'creationTime',
      displayName: 'displayName',
      lastModifiedTime: 'lastModifiedTime',
      lastUpdator: 'lastUpdator',
      name: 'name',
      owner: 'owner',
      schema: 'schema',
      size: 'size',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      contentMD5: 'string',
      creationTime: 'number',
      displayName: 'string',
      lastModifiedTime: 'number',
      lastUpdator: 'string',
      name: 'string',
      owner: 'string',
      schema: 'string',
      size: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyData extends $tea.Model {
  marker?: string;
  maxItem?: number;
  resources?: ListResourcesResponseBodyDataResources[];
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      resources: { 'type': 'array', 'itemType': ListResourcesResponseBodyDataResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclFunction extends $tea.Model {
  actions?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclInstance extends $tea.Model {
  actions?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclPackage extends $tea.Model {
  actions?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclProject extends $tea.Model {
  actions?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclResource extends $tea.Model {
  actions?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAclTable extends $tea.Model {
  actions?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRolesAcl extends $tea.Model {
  function?: ListRolesResponseBodyDataRolesAclFunction[];
  instance?: ListRolesResponseBodyDataRolesAclInstance[];
  package?: ListRolesResponseBodyDataRolesAclPackage[];
  project?: ListRolesResponseBodyDataRolesAclProject[];
  resource?: ListRolesResponseBodyDataRolesAclResource[];
  table?: ListRolesResponseBodyDataRolesAclTable[];
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      instance: 'instance',
      package: 'package',
      project: 'project',
      resource: 'resource',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclFunction },
      instance: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclInstance },
      package: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclPackage },
      project: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclProject },
      resource: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclResource },
      table: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRolesAclTable },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyDataRoles extends $tea.Model {
  acl?: ListRolesResponseBodyDataRolesAcl;
  name?: string;
  policy?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      name: 'name',
      policy: 'policy',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: ListRolesResponseBodyDataRolesAcl,
      name: 'string',
      policy: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBodyData extends $tea.Model {
  roles?: ListRolesResponseBodyDataRoles[];
  static names(): { [key: string]: string } {
    return {
      roles: 'roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: { 'type': 'array', 'itemType': ListRolesResponseBodyDataRoles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyDataTablesNativeColumns extends $tea.Model {
  comment?: string;
  label?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      label: 'label',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      label: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyDataTablesPartitionColumns extends $tea.Model {
  comment?: string;
  label?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      label: 'label',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      label: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyDataTables extends $tea.Model {
  autoRefreshEnabled?: boolean;
  createTableDDL?: string;
  creationTime?: number;
  displayName?: string;
  fileNum?: number;
  isExternalTable?: boolean;
  isOutdated?: boolean;
  lastAccessTime?: number;
  lastDDLTime?: number;
  lastModifiedTime?: number;
  lifecycle?: string;
  location?: string;
  materializedView?: boolean;
  name?: string;
  nativeColumns?: ListTablesResponseBodyDataTablesNativeColumns[];
  odpsPropertiesRolearn?: string;
  odpsSqlTextOptionFlushHeader?: boolean;
  odpsTextOptionHeaderLinesCount?: number;
  owner?: string;
  partitionColumns?: ListTablesResponseBodyDataTablesPartitionColumns[];
  physicalSize?: number;
  projectName?: string;
  rewriteEnabled?: boolean;
  schema?: string;
  size?: number;
  storageHandler?: string;
  tableComment?: string;
  tableLabel?: string;
  tablesotreTableName?: string;
  tablestoreColumnsMapping?: string;
  type?: string;
  viewText?: string;
  static names(): { [key: string]: string } {
    return {
      autoRefreshEnabled: 'autoRefreshEnabled',
      createTableDDL: 'createTableDDL',
      creationTime: 'creationTime',
      displayName: 'displayName',
      fileNum: 'fileNum',
      isExternalTable: 'isExternalTable',
      isOutdated: 'isOutdated',
      lastAccessTime: 'lastAccessTime',
      lastDDLTime: 'lastDDLTime',
      lastModifiedTime: 'lastModifiedTime',
      lifecycle: 'lifecycle',
      location: 'location',
      materializedView: 'materializedView',
      name: 'name',
      nativeColumns: 'nativeColumns',
      odpsPropertiesRolearn: 'odpsPropertiesRolearn',
      odpsSqlTextOptionFlushHeader: 'odpsSqlTextOptionFlushHeader',
      odpsTextOptionHeaderLinesCount: 'odpsTextOptionHeaderLinesCount',
      owner: 'owner',
      partitionColumns: 'partitionColumns',
      physicalSize: 'physicalSize',
      projectName: 'projectName',
      rewriteEnabled: 'rewriteEnabled',
      schema: 'schema',
      size: 'size',
      storageHandler: 'storageHandler',
      tableComment: 'tableComment',
      tableLabel: 'tableLabel',
      tablesotreTableName: 'tablesotreTableName',
      tablestoreColumnsMapping: 'tablestoreColumnsMapping',
      type: 'type',
      viewText: 'viewText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefreshEnabled: 'boolean',
      createTableDDL: 'string',
      creationTime: 'number',
      displayName: 'string',
      fileNum: 'number',
      isExternalTable: 'boolean',
      isOutdated: 'boolean',
      lastAccessTime: 'number',
      lastDDLTime: 'number',
      lastModifiedTime: 'number',
      lifecycle: 'string',
      location: 'string',
      materializedView: 'boolean',
      name: 'string',
      nativeColumns: { 'type': 'array', 'itemType': ListTablesResponseBodyDataTablesNativeColumns },
      odpsPropertiesRolearn: 'string',
      odpsSqlTextOptionFlushHeader: 'boolean',
      odpsTextOptionHeaderLinesCount: 'number',
      owner: 'string',
      partitionColumns: { 'type': 'array', 'itemType': ListTablesResponseBodyDataTablesPartitionColumns },
      physicalSize: 'number',
      projectName: 'string',
      rewriteEnabled: 'boolean',
      schema: 'string',
      size: 'number',
      storageHandler: 'string',
      tableComment: 'string',
      tableLabel: 'string',
      tablesotreTableName: 'string',
      tablestoreColumnsMapping: 'string',
      type: 'string',
      viewText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTablesResponseBodyData extends $tea.Model {
  marker?: string;
  maxItem?: number;
  tables?: ListTablesResponseBodyDataTables[];
  static names(): { [key: string]: string } {
    return {
      marker: 'marker',
      maxItem: 'maxItem',
      tables: 'tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      maxItem: 'number',
      tables: { 'type': 'array', 'itemType': ListTablesResponseBodyDataTables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyDataUsers extends $tea.Model {
  accountId?: string;
  accountName?: string;
  accountType?: string;
  displayName?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      accountName: 'accountName',
      accountType: 'accountType',
      displayName: 'displayName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      accountType: 'string',
      displayName: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  users?: ListUsersResponseBodyDataUsers[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListUsersResponseBodyDataUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersByRoleResponseBodyDataUsers extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersByRoleResponseBodyData extends $tea.Model {
  users?: ListUsersByRoleResponseBodyDataUsers[];
  static names(): { [key: string]: string } {
    return {
      users: 'users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      users: { 'type': 'array', 'itemType': ListUsersByRoleResponseBodyDataUsers },
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
      'ap-northeast-1': "maxcompute.aliyuncs.com",
      'ap-northeast-2-pop': "maxcompute.aliyuncs.com",
      'ap-south-1': "maxcompute.aliyuncs.com",
      'ap-southeast-1': "maxcompute.aliyuncs.com",
      'ap-southeast-2': "maxcompute.aliyuncs.com",
      'ap-southeast-3': "maxcompute.aliyuncs.com",
      'ap-southeast-5': "maxcompute.aliyuncs.com",
      'cn-beijing': "maxcompute.aliyuncs.com",
      'cn-beijing-finance-1': "maxcompute.aliyuncs.com",
      'cn-beijing-finance-pop': "maxcompute.aliyuncs.com",
      'cn-beijing-gov-1': "maxcompute.aliyuncs.com",
      'cn-beijing-nu16-b01': "maxcompute.aliyuncs.com",
      'cn-chengdu': "maxcompute.aliyuncs.com",
      'cn-edge-1': "maxcompute.aliyuncs.com",
      'cn-fujian': "maxcompute.aliyuncs.com",
      'cn-haidian-cm12-c01': "maxcompute.aliyuncs.com",
      'cn-hangzhou': "maxcompute.aliyuncs.com",
      'cn-hangzhou-bj-b01': "maxcompute.aliyuncs.com",
      'cn-hangzhou-finance': "maxcompute.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "maxcompute.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "maxcompute.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "maxcompute.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "maxcompute.aliyuncs.com",
      'cn-hangzhou-test-306': "maxcompute.aliyuncs.com",
      'cn-hongkong': "maxcompute.aliyuncs.com",
      'cn-hongkong-finance-pop': "maxcompute.aliyuncs.com",
      'cn-huhehaote': "maxcompute.aliyuncs.com",
      'cn-north-2-gov-1': "maxcompute.aliyuncs.com",
      'cn-qingdao': "maxcompute.aliyuncs.com",
      'cn-qingdao-nebula': "maxcompute.aliyuncs.com",
      'cn-shanghai': "maxcompute.aliyuncs.com",
      'cn-shanghai-et15-b01': "maxcompute.aliyuncs.com",
      'cn-shanghai-et2-b01': "maxcompute.aliyuncs.com",
      'cn-shanghai-finance-1': "maxcompute.aliyuncs.com",
      'cn-shanghai-inner': "maxcompute.aliyuncs.com",
      'cn-shanghai-internal-test-1': "maxcompute.aliyuncs.com",
      'cn-shenzhen': "maxcompute.aliyuncs.com",
      'cn-shenzhen-finance-1': "maxcompute.aliyuncs.com",
      'cn-shenzhen-inner': "maxcompute.aliyuncs.com",
      'cn-shenzhen-st4-d01': "maxcompute.aliyuncs.com",
      'cn-shenzhen-su18-b01': "maxcompute.aliyuncs.com",
      'cn-wuhan': "maxcompute.aliyuncs.com",
      'cn-yushanfang': "maxcompute.aliyuncs.com",
      'cn-zhangbei-na61-b01': "maxcompute.aliyuncs.com",
      'cn-zhangjiakou': "maxcompute.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "maxcompute.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "maxcompute.aliyuncs.com",
      'eu-central-1': "maxcompute.aliyuncs.com",
      'eu-west-1': "maxcompute.aliyuncs.com",
      'eu-west-1-oxs': "maxcompute.aliyuncs.com",
      'me-east-1': "maxcompute.aliyuncs.com",
      'rus-west-1-pop': "maxcompute.aliyuncs.com",
      'us-east-1': "maxcompute.aliyuncs.com",
      'us-west-1': "maxcompute.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("maxcompute", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createPackageWithOptions(projectName: string, request: CreatePackageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePackageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isInstall)) {
      query["isInstall"] = request.isInstall;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "CreatePackage",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/packages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePackageResponse>(await this.callApi(params, req, runtime), new CreatePackageResponse({}));
  }

  async createPackage(projectName: string, request: CreatePackageRequest): Promise<CreatePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPackageWithOptions(projectName, request, headers, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  async createQuotaPlanWithOptions(nickname: string, request: CreateQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateQuotaPlanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "CreateQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${OpenApiUtil.getEncodeParam(nickname)}/plans`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateQuotaPlanResponse>(await this.callApi(params, req, runtime), new CreateQuotaPlanResponse({}));
  }

  async createQuotaPlan(nickname: string, request: CreateQuotaPlanRequest): Promise<CreateQuotaPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQuotaPlanWithOptions(nickname, request, headers, runtime);
  }

  async createQuotaScheduleWithOptions(nickname: string, request: CreateQuotaScheduleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateQuotaScheduleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "CreateQuotaSchedule",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${OpenApiUtil.getEncodeParam(nickname)}/schedule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateQuotaScheduleResponse>(await this.callApi(params, req, runtime), new CreateQuotaScheduleResponse({}));
  }

  async createQuotaSchedule(nickname: string, request: CreateQuotaScheduleRequest): Promise<CreateQuotaScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQuotaScheduleWithOptions(nickname, request, headers, runtime);
  }

  async createRoleWithOptions(projectName: string, request: CreateRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "CreateRole",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/roles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRoleResponse>(await this.callApi(params, req, runtime), new CreateRoleResponse({}));
  }

  async createRole(projectName: string, request: CreateRoleRequest): Promise<CreateRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRoleWithOptions(projectName, request, headers, runtime);
  }

  async deleteQuotaPlanWithOptions(nickname: string, planName: string, request: DeleteQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteQuotaPlanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${OpenApiUtil.getEncodeParam(nickname)}/plans/${OpenApiUtil.getEncodeParam(planName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteQuotaPlanResponse>(await this.callApi(params, req, runtime), new DeleteQuotaPlanResponse({}));
  }

  async deleteQuotaPlan(nickname: string, planName: string, request: DeleteQuotaPlanRequest): Promise<DeleteQuotaPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteQuotaPlanWithOptions(nickname, planName, request, headers, runtime);
  }

  async getJobResourceUsageWithOptions(tmpReq: GetJobResourceUsageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetJobResourceUsageResponse> {
    Util.validateModel(tmpReq);
    let request = new GetJobResourceUsageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.jobOwnerList)) {
      request.jobOwnerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobOwnerList, "jobOwnerList", "simple");
    }

    if (!Util.isUnset(tmpReq.quotaNicknameList)) {
      request.quotaNicknameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.quotaNicknameList, "quotaNicknameList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.date)) {
      query["date"] = request.date;
    }

    if (!Util.isUnset(request.jobOwnerListShrink)) {
      query["jobOwnerList"] = request.jobOwnerListShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.quotaNicknameListShrink)) {
      query["quotaNicknameList"] = request.quotaNicknameListShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJobResourceUsage",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/resourceUsage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetJobResourceUsageResponse>(await this.callApi(params, req, runtime), new GetJobResourceUsageResponse({}));
  }

  async getJobResourceUsage(request: GetJobResourceUsageRequest): Promise<GetJobResourceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobResourceUsageWithOptions(request, headers, runtime);
  }

  async getPackageWithOptions(projectName: string, packageName: string, request: GetPackageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPackageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sourceProject)) {
      query["sourceProject"] = request.sourceProject;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPackage",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/packages/${OpenApiUtil.getEncodeParam(packageName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPackageResponse>(await this.callApi(params, req, runtime), new GetPackageResponse({}));
  }

  async getPackage(projectName: string, packageName: string, request: GetPackageRequest): Promise<GetPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPackageWithOptions(projectName, packageName, request, headers, runtime);
  }

  async getProjectWithOptions(projectName: string, request: GetProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.verbose)) {
      query["verbose"] = request.verbose;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProject",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectResponse>(await this.callApi(params, req, runtime), new GetProjectResponse({}));
  }

  async getProject(projectName: string, request: GetProjectRequest): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(projectName, request, headers, runtime);
  }

  async getQuotaWithOptions(nickname: string, request: GetQuotaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetQuotaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.akProven)) {
      query["AkProven"] = request.akProven;
    }

    if (!Util.isUnset(request.mock)) {
      query["mock"] = request.mock;
    }

    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQuota",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${OpenApiUtil.getEncodeParam(nickname)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetQuotaResponse>(await this.callApi(params, req, runtime), new GetQuotaResponse({}));
  }

  async getQuota(nickname: string, request: GetQuotaRequest): Promise<GetQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaWithOptions(nickname, request, headers, runtime);
  }

  async getQuotaPlanWithOptions(nickname: string, planName: string, request: GetQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetQuotaPlanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${OpenApiUtil.getEncodeParam(nickname)}/plans/${OpenApiUtil.getEncodeParam(planName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetQuotaPlanResponse>(await this.callApi(params, req, runtime), new GetQuotaPlanResponse({}));
  }

  async getQuotaPlan(nickname: string, planName: string, request: GetQuotaPlanRequest): Promise<GetQuotaPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaPlanWithOptions(nickname, planName, request, headers, runtime);
  }

  async getQuotaScheduleWithOptions(nickname: string, request: GetQuotaScheduleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetQuotaScheduleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.displayTimezone)) {
      query["displayTimezone"] = request.displayTimezone;
    }

    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQuotaSchedule",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${OpenApiUtil.getEncodeParam(nickname)}/schedule`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetQuotaScheduleResponse>(await this.callApi(params, req, runtime), new GetQuotaScheduleResponse({}));
  }

  async getQuotaSchedule(nickname: string, request: GetQuotaScheduleRequest): Promise<GetQuotaScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaScheduleWithOptions(nickname, request, headers, runtime);
  }

  async getRoleAclWithOptions(projectName: string, roleName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRoleAclResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRoleAcl",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/roles/${OpenApiUtil.getEncodeParam(roleName)}/roleAcl`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRoleAclResponse>(await this.callApi(params, req, runtime), new GetRoleAclResponse({}));
  }

  async getRoleAcl(projectName: string, roleName: string): Promise<GetRoleAclResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRoleAclWithOptions(projectName, roleName, headers, runtime);
  }

  async getRoleAclOnObjectWithOptions(projectName: string, roleName: string, request: GetRoleAclOnObjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRoleAclOnObjectResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.objectName)) {
      query["objectName"] = request.objectName;
    }

    if (!Util.isUnset(request.objectType)) {
      query["objectType"] = request.objectType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRoleAclOnObject",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/roles/${OpenApiUtil.getEncodeParam(roleName)}/acl`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRoleAclOnObjectResponse>(await this.callApi(params, req, runtime), new GetRoleAclOnObjectResponse({}));
  }

  async getRoleAclOnObject(projectName: string, roleName: string, request: GetRoleAclOnObjectRequest): Promise<GetRoleAclOnObjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRoleAclOnObjectWithOptions(projectName, roleName, request, headers, runtime);
  }

  async getRolePolicyWithOptions(projectName: string, roleName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRolePolicyResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRolePolicy",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/roles/${OpenApiUtil.getEncodeParam(roleName)}/policy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRolePolicyResponse>(await this.callApi(params, req, runtime), new GetRolePolicyResponse({}));
  }

  async getRolePolicy(projectName: string, roleName: string): Promise<GetRolePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRolePolicyWithOptions(projectName, roleName, headers, runtime);
  }

  async getRunningJobsWithOptions(tmpReq: GetRunningJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRunningJobsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetRunningJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.jobOwnerList)) {
      request.jobOwnerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobOwnerList, "jobOwnerList", "simple");
    }

    if (!Util.isUnset(tmpReq.quotaNicknameList)) {
      request.quotaNicknameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.quotaNicknameList, "quotaNicknameList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.from)) {
      query["from"] = request.from;
    }

    if (!Util.isUnset(request.jobOwnerListShrink)) {
      query["jobOwnerList"] = request.jobOwnerListShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.quotaNicknameListShrink)) {
      query["quotaNicknameList"] = request.quotaNicknameListShrink;
    }

    if (!Util.isUnset(request.to)) {
      query["to"] = request.to;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRunningJobs",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/runningJobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRunningJobsResponse>(await this.callApi(params, req, runtime), new GetRunningJobsResponse({}));
  }

  async getRunningJobs(request: GetRunningJobsRequest): Promise<GetRunningJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRunningJobsWithOptions(request, headers, runtime);
  }

  async getTrustedProjectsWithOptions(projectName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTrustedProjectsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTrustedProjects",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/trustedProjects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTrustedProjectsResponse>(await this.callApi(params, req, runtime), new GetTrustedProjectsResponse({}));
  }

  async getTrustedProjects(projectName: string): Promise<GetTrustedProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrustedProjectsWithOptions(projectName, headers, runtime);
  }

  async killJobsWithOptions(request: KillJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<KillJobsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "KillJobs",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/kill`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<KillJobsResponse>(await this.callApi(params, req, runtime), new KillJobsResponse({}));
  }

  async killJobs(request: KillJobsRequest): Promise<KillJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.killJobsWithOptions(request, headers, runtime);
  }

  async listFunctionsWithOptions(projectName: string, request: ListFunctionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFunctionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxItem)) {
      query["maxItem"] = request.maxItem;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.schemaName)) {
      query["schemaName"] = request.schemaName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctions",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/functions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionsResponse>(await this.callApi(params, req, runtime), new ListFunctionsResponse({}));
  }

  async listFunctions(projectName: string, request: ListFunctionsRequest): Promise<ListFunctionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionsWithOptions(projectName, request, headers, runtime);
  }

  async listJobInfosWithOptions(request: ListJobInfosRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListJobInfosResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ascOrder)) {
      query["ascOrder"] = request.ascOrder;
    }

    if (!Util.isUnset(request.orderColumn)) {
      query["orderColumn"] = request.orderColumn;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "ListJobInfos",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListJobInfosResponse>(await this.callApi(params, req, runtime), new ListJobInfosResponse({}));
  }

  async listJobInfos(request: ListJobInfosRequest): Promise<ListJobInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobInfosWithOptions(request, headers, runtime);
  }

  async listPackagesWithOptions(projectName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPackagesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListPackages",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/packages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPackagesResponse>(await this.callApi(params, req, runtime), new ListPackagesResponse({}));
  }

  async listPackages(projectName: string): Promise<ListPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPackagesWithOptions(projectName, headers, runtime);
  }

  async listProjectUsersWithOptions(projectName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProjectUsersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListProjectUsers",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProjectUsersResponse>(await this.callApi(params, req, runtime), new ListProjectUsersResponse({}));
  }

  async listProjectUsers(projectName: string): Promise<ListProjectUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectUsersWithOptions(projectName, headers, runtime);
  }

  async listProjectsWithOptions(request: ListProjectsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.listSystemCatalog)) {
      query["listSystemCatalog"] = request.listSystemCatalog;
    }

    if (!Util.isUnset(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxItem)) {
      query["maxItem"] = request.maxItem;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.quotaName)) {
      query["quotaName"] = request.quotaName;
    }

    if (!Util.isUnset(request.quotaNickName)) {
      query["quotaNickName"] = request.quotaNickName;
    }

    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.saleTags)) {
      query["saleTags"] = request.saleTags;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProjects",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
  }

  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectsWithOptions(request, headers, runtime);
  }

  async listQuotasWithOptions(request: ListQuotasRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListQuotasResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.billingType)) {
      query["billingType"] = request.billingType;
    }

    if (!Util.isUnset(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxItem)) {
      query["maxItem"] = request.maxItem;
    }

    if (!Util.isUnset(request.productId)) {
      query["productId"] = request.productId;
    }

    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.saleTags)) {
      query["saleTags"] = request.saleTags;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListQuotas",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListQuotasResponse>(await this.callApi(params, req, runtime), new ListQuotasResponse({}));
  }

  async listQuotas(request: ListQuotasRequest): Promise<ListQuotasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotasWithOptions(request, headers, runtime);
  }

  async listQuotasPlansWithOptions(nickname: string, request: ListQuotasPlansRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListQuotasPlansResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListQuotasPlans",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${OpenApiUtil.getEncodeParam(nickname)}/plans`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListQuotasPlansResponse>(await this.callApi(params, req, runtime), new ListQuotasPlansResponse({}));
  }

  async listQuotasPlans(nickname: string, request: ListQuotasPlansRequest): Promise<ListQuotasPlansResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotasPlansWithOptions(nickname, request, headers, runtime);
  }

  async listResourcesWithOptions(projectName: string, request: ListResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxItem)) {
      query["maxItem"] = request.maxItem;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.schemaName)) {
      query["schemaName"] = request.schemaName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResources",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourcesResponse>(await this.callApi(params, req, runtime), new ListResourcesResponse({}));
  }

  async listResources(projectName: string, request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourcesWithOptions(projectName, request, headers, runtime);
  }

  async listRolesWithOptions(projectName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRolesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListRoles",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/roles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRolesResponse>(await this.callApi(params, req, runtime), new ListRolesResponse({}));
  }

  async listRoles(projectName: string): Promise<ListRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRolesWithOptions(projectName, headers, runtime);
  }

  async listTablesWithOptions(projectName: string, request: ListTablesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTablesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.marker)) {
      query["marker"] = request.marker;
    }

    if (!Util.isUnset(request.maxItem)) {
      query["maxItem"] = request.maxItem;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.schemaName)) {
      query["schemaName"] = request.schemaName;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTables",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTablesResponse>(await this.callApi(params, req, runtime), new ListTablesResponse({}));
  }

  async listTables(projectName: string, request: ListTablesRequest): Promise<ListTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTablesWithOptions(projectName, request, headers, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUsersWithOptions(request, headers, runtime);
  }

  async listUsersByRoleWithOptions(projectName: string, roleName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUsersByRoleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListUsersByRole",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/roles/${OpenApiUtil.getEncodeParam(roleName)}/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListUsersByRoleResponse>(await this.callApi(params, req, runtime), new ListUsersByRoleResponse({}));
  }

  async listUsersByRole(projectName: string, roleName: string): Promise<ListUsersByRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUsersByRoleWithOptions(projectName, roleName, headers, runtime);
  }

  async updatePackageWithOptions(projectName: string, packageName: string, request: UpdatePackageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "UpdatePackage",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/packages/${OpenApiUtil.getEncodeParam(packageName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdatePackageResponse>(await this.callApi(params, req, runtime), new UpdatePackageResponse({}));
  }

  async updatePackage(projectName: string, packageName: string, request: UpdatePackageRequest): Promise<UpdatePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePackageWithOptions(projectName, packageName, request, headers, runtime);
  }

  async updateProjectIpWhiteListWithOptions(projectName: string, request: UpdateProjectIpWhiteListRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProjectIpWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "UpdateProjectIpWhiteList",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/projects/${OpenApiUtil.getEncodeParam(projectName)}/ipWhiteList`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectIpWhiteListResponse>(await this.callApi(params, req, runtime), new UpdateProjectIpWhiteListResponse({}));
  }

  async updateProjectIpWhiteList(projectName: string, request: UpdateProjectIpWhiteListRequest): Promise<UpdateProjectIpWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectIpWhiteListWithOptions(projectName, request, headers, runtime);
  }

  async updateQuotaWithOptions(nickname: string, request: UpdateQuotaRequest, headers: UpdateQuotaHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateQuotaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.akProven)) {
      realHeaders["AkProven"] = Util.toJSONString(headers.akProven);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "UpdateQuota",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${OpenApiUtil.getEncodeParam(nickname)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateQuotaResponse>(await this.callApi(params, req, runtime), new UpdateQuotaResponse({}));
  }

  async updateQuota(nickname: string, request: UpdateQuotaRequest): Promise<UpdateQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateQuotaHeaders({ });
    return await this.updateQuotaWithOptions(nickname, request, headers, runtime);
  }

  async updateQuotaPlanWithOptions(nickname: string, planName: string, request: UpdateQuotaPlanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateQuotaPlanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "UpdateQuotaPlan",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${OpenApiUtil.getEncodeParam(nickname)}/plans/${OpenApiUtil.getEncodeParam(planName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateQuotaPlanResponse>(await this.callApi(params, req, runtime), new UpdateQuotaPlanResponse({}));
  }

  async updateQuotaPlan(nickname: string, planName: string, request: UpdateQuotaPlanRequest): Promise<UpdateQuotaPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQuotaPlanWithOptions(nickname, planName, request, headers, runtime);
  }

  async updateQuotaScheduleWithOptions(nickname: string, request: UpdateQuotaScheduleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateQuotaScheduleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.region)) {
      query["region"] = request.region;
    }

    if (!Util.isUnset(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "UpdateQuotaSchedule",
      version: "2022-01-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${OpenApiUtil.getEncodeParam(nickname)}/schedule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateQuotaScheduleResponse>(await this.callApi(params, req, runtime), new UpdateQuotaScheduleResponse({}));
  }

  async updateQuotaSchedule(nickname: string, request: UpdateQuotaScheduleRequest): Promise<UpdateQuotaScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQuotaScheduleWithOptions(nickname, request, headers, runtime);
  }

}
