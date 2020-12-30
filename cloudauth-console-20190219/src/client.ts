// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateProjectRequest extends $tea.Model {
  sourceIp?: string;
  projectType?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      projectType: 'ProjectType',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      projectType: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  data?: CreateProjectResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      data: CreateProjectResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlrRoleRequest extends $tea.Model {
  sourceIp?: string;
  roleName?: string;
  durationSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      roleName: 'RoleName',
      durationSeconds: 'DurationSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      roleName: 'string',
      durationSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSlrRoleResponseBody extends $tea.Model {
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

export class CreateSlrRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSlrRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSlrRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMnsServeRequest extends $tea.Model {
  sourceIp?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMnsServeResponseBody extends $tea.Model {
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

export class DeleteMnsServeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteMnsServeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteMnsServeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupRequest extends $tea.Model {
  sourceIp?: string;
  groupId?: number;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      groupId: 'GroupId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      groupId: 'number',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserGroupResponseBody extends $tea.Model {
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

export class DeleteUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserInfoRequest extends $tea.Model {
  sourceIp?: string;
  userId?: number;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      userId: 'UserId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      userId: 'number',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserInfoResponseBody extends $tea.Model {
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

export class DeleteUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllEndPointRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllEndPointResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  data?: DescribeAllEndPointResponseBodyData[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      data: { 'type': 'array', 'itemType': DescribeAllEndPointResponseBodyData },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllEndPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAllEndPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAllEndPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindUserIdListRequest extends $tea.Model {
  sourceIp?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindUserIdListResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeBindUserIdListResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': DescribeBindUserIdListResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindUserIdListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBindUserIdListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBindUserIdListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateTypeListRequest extends $tea.Model {
  sourceIp?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateTypeListResponseBody extends $tea.Model {
  requestId?: string;
  typeList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      typeList: 'TypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      typeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateTypeListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCertificateTypeListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCertificateTypeListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceListRequest extends $tea.Model {
  sourceIp?: string;
  pageSize?: number;
  currentPage?: number;
  keyword?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      keyword: 'Keyword',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      pageSize: 'number',
      currentPage: 'number',
      keyword: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceListResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  deviceList?: DescribeDeviceListResponseBodyDeviceList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      deviceList: 'DeviceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      deviceList: { 'type': 'array', 'itemType': DescribeDeviceListResponseBodyDeviceList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeviceListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcelAnalysisResultRequest extends $tea.Model {
  sourceIp?: string;
  key?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      key: 'Key',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      key: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcelAnalysisResultResponseBody extends $tea.Model {
  requestId?: string;
  excelResult?: DescribeExcelAnalysisResultResponseBodyExcelResult;
  httpStatusCode?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      excelResult: 'ExcelResult',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      excelResult: DescribeExcelAnalysisResultResponseBodyExcelResult,
      httpStatusCode: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcelAnalysisResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeExcelAnalysisResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeExcelAnalysisResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIdentifyRecordListRequest extends $tea.Model {
  sourceIp?: string;
  groupName?: string;
  deviceName?: string;
  pageSize?: number;
  startTime?: number;
  endTime?: number;
  currentPage?: number;
  userName?: string;
  certificateNo?: string;
  phoneNo?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      groupName: 'GroupName',
      deviceName: 'DeviceName',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
      currentPage: 'CurrentPage',
      userName: 'UserName',
      certificateNo: 'CertificateNo',
      phoneNo: 'PhoneNo',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      groupName: 'string',
      deviceName: 'string',
      pageSize: 'number',
      startTime: 'number',
      endTime: 'number',
      currentPage: 'number',
      userName: 'string',
      certificateNo: 'string',
      phoneNo: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIdentifyRecordListResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  recordList?: DescribeIdentifyRecordListResponseBodyRecordList[];
  httpStatusCode?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      recordList: 'RecordList',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      recordList: { 'type': 'array', 'itemType': DescribeIdentifyRecordListResponseBodyRecordList },
      httpStatusCode: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIdentifyRecordListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIdentifyRecordListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIdentifyRecordListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMnsOauthRequest extends $tea.Model {
  sourceIp?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMnsOauthResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeMnsOauthResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeMnsOauthResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMnsOauthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeMnsOauthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeMnsOauthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssOauthRequest extends $tea.Model {
  sourceIp?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssOauthResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeOssOauthResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeOssOauthResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssOauthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOssOauthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOssOauthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignedUrlRequest extends $tea.Model {
  sourceIp?: string;
  projectId?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      projectId: 'ProjectId',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      projectId: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignedUrlResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
  imgUrl?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      imgUrl: 'ImgUrl',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      imgUrl: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSignedUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSignedUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSignedUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopicRequest extends $tea.Model {
  sourceIp?: string;
  projectId?: string;
  endPoint?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      projectId: 'ProjectId',
      endPoint: 'EndPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      projectId: 'string',
      endPoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopicResponseBody extends $tea.Model {
  requestId?: string;
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTopicResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTopicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTopicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadPreSignRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadPreSignResponseBody extends $tea.Model {
  policy?: string;
  expire?: string;
  requestId?: string;
  accessId?: string;
  signature?: string;
  host?: string;
  code?: number;
  key?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      expire: 'Expire',
      requestId: 'RequestId',
      accessId: 'AccessId',
      signature: 'Signature',
      host: 'Host',
      code: 'Code',
      key: 'Key',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      expire: 'string',
      requestId: 'string',
      accessId: 'string',
      signature: 'string',
      host: 'string',
      code: 'number',
      key: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadPreSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUploadPreSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUploadPreSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserGroupListRequest extends $tea.Model {
  sourceIp?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserGroupListResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeUserGroupListResponseBodyData[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': DescribeUserGroupListResponseBodyData },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserGroupListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserGroupListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserGroupListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoListRequest extends $tea.Model {
  sourceIp?: string;
  pageSize?: number;
  userName?: string;
  currentPage?: number;
  certificateNo?: string;
  phoneNo?: string;
  userGroupId?: number;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      pageSize: 'PageSize',
      userName: 'UserName',
      currentPage: 'CurrentPage',
      certificateNo: 'CertificateNo',
      phoneNo: 'PhoneNo',
      userGroupId: 'UserGroupId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      pageSize: 'number',
      userName: 'string',
      currentPage: 'number',
      certificateNo: 'string',
      phoneNo: 'string',
      userGroupId: 'number',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoListResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  userInfoList?: DescribeUserInfoListResponseBodyUserInfoList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      userInfoList: 'UserInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      userInfoList: { 'type': 'array', 'itemType': DescribeUserInfoListResponseBodyUserInfoList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserInfoListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserInfoListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountProjectRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountProjectResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  list?: GetAccountProjectResponseBodyList[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      list: 'List',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      list: { 'type': 'array', 'itemType': GetAccountProjectResponseBodyList },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAccountProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccountProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMnsServeRequest extends $tea.Model {
  sourceIp?: string;
  projectId?: string;
  topicName?: string;
  endPoint?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      projectId: 'ProjectId',
      topicName: 'TopicName',
      endPoint: 'EndPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      projectId: 'string',
      topicName: 'string',
      endPoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMnsServeResponseBody extends $tea.Model {
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

export class SaveMnsServeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveMnsServeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveMnsServeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveOssServeRequest extends $tea.Model {
  sourceIp?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveOssServeResponseBody extends $tea.Model {
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

export class SaveOssServeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveOssServeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveOssServeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveUserGroupRequest extends $tea.Model {
  sourceIp?: string;
  groupName?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      groupName: 'GroupName',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      groupName: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveUserGroupResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  data?: SaveUserGroupResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      data: SaveUserGroupResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveUserInfoRequest extends $tea.Model {
  sourceIp?: string;
  userGroupId?: number;
  birthday?: number;
  imageBase64?: string;
  groupName?: string;
  imageUrl?: string;
  sex?: number;
  userName?: string;
  certificateNo?: string;
  phoneNo?: string;
  certificateType?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      userGroupId: 'UserGroupId',
      birthday: 'Birthday',
      imageBase64: 'ImageBase64',
      groupName: 'GroupName',
      imageUrl: 'ImageUrl',
      sex: 'Sex',
      userName: 'UserName',
      certificateNo: 'CertificateNo',
      phoneNo: 'PhoneNo',
      certificateType: 'CertificateType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      userGroupId: 'number',
      birthday: 'number',
      imageBase64: 'string',
      groupName: 'string',
      imageUrl: 'string',
      sex: 'number',
      userName: 'string',
      certificateNo: 'string',
      phoneNo: 'string',
      certificateType: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveUserInfoResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  data?: SaveUserInfoResponseBodyData;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      data: SaveUserInfoResponseBodyData,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SaveUserInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SaveUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceRequest extends $tea.Model {
  sourceIp?: string;
  iotId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      iotId: 'IotId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      iotId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnbindDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnbindDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceControlInfoRequest extends $tea.Model {
  sourceIp?: string;
  projectId?: string;
  iotId?: number;
  multiPerson?: number;
  controlDoorTime?: number;
  enableMeasureTempurature?: number;
  speedClock?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      projectId: 'ProjectId',
      iotId: 'IotId',
      multiPerson: 'MultiPerson',
      controlDoorTime: 'ControlDoorTime',
      enableMeasureTempurature: 'EnableMeasureTempurature',
      speedClock: 'SpeedClock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      projectId: 'string',
      iotId: 'number',
      multiPerson: 'number',
      controlDoorTime: 'number',
      enableMeasureTempurature: 'number',
      speedClock: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceControlInfoResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceControlInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDeviceControlInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDeviceControlInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceNameRequest extends $tea.Model {
  sourceIp?: string;
  iotId?: string;
  projectId?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      iotId: 'IotId',
      projectId: 'ProjectId',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      iotId: 'string',
      projectId: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceNameResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDeviceNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDeviceNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDeviceNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectNameRequest extends $tea.Model {
  sourceIp?: string;
  projectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectNameResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProjectNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProjectNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupRequest extends $tea.Model {
  sourceIp?: string;
  groupId?: number;
  groupName?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      groupId: 'GroupId',
      groupName: 'GroupName',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      groupId: 'number',
      groupName: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupResponseBody extends $tea.Model {
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

export class UpdateUserGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateUserGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUserGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserInfoRequest extends $tea.Model {
  sourceIp?: string;
  userGroupId?: number;
  birthday?: number;
  imageBase64?: string;
  groupName?: string;
  imageUrl?: string;
  sex?: number;
  userName?: string;
  userId?: number;
  certificateNo?: string;
  phoneNo?: string;
  certificateType?: string;
  projectId?: string;
  overwriteImg?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      userGroupId: 'UserGroupId',
      birthday: 'Birthday',
      imageBase64: 'ImageBase64',
      groupName: 'GroupName',
      imageUrl: 'ImageUrl',
      sex: 'Sex',
      userName: 'UserName',
      userId: 'UserId',
      certificateNo: 'CertificateNo',
      phoneNo: 'PhoneNo',
      certificateType: 'CertificateType',
      projectId: 'ProjectId',
      overwriteImg: 'OverwriteImg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      userGroupId: 'number',
      birthday: 'number',
      imageBase64: 'string',
      groupName: 'string',
      imageUrl: 'string',
      sex: 'number',
      userName: 'string',
      userId: 'number',
      certificateNo: 'string',
      phoneNo: 'string',
      certificateType: 'string',
      projectId: 'string',
      overwriteImg: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserInfoResponseBody extends $tea.Model {
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

export class UpdateUserInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateUserInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUserInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadIdentifyRecordRequest extends $tea.Model {
  sourceIp?: string;
  userId?: number;
  userName?: string;
  projectId?: string;
  iotId?: string;
  identifyingImageBase64?: string;
  identifyingTime?: number;
  identifyingImageUrl?: string;
  deviceName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      userId: 'UserId',
      userName: 'UserName',
      projectId: 'ProjectId',
      iotId: 'IotId',
      identifyingImageBase64: 'IdentifyingImageBase64',
      identifyingTime: 'IdentifyingTime',
      identifyingImageUrl: 'IdentifyingImageUrl',
      deviceName: 'DeviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      userId: 'number',
      userName: 'string',
      projectId: 'string',
      iotId: 'string',
      identifyingImageBase64: 'string',
      identifyingTime: 'number',
      identifyingImageUrl: 'string',
      deviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadIdentifyRecordResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadIdentifyRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UploadIdentifyRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadIdentifyRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAccountProjectRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAccountProjectResponseBody extends $tea.Model {
  requestId?: string;
  httpStatusCode?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      httpStatusCode: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyAccountProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyAccountProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyAccountProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBodyData extends $tea.Model {
  projectId?: string;
  gmtCreate?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      gmtCreate: 'GmtCreate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      gmtCreate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllEndPointResponseBodyData extends $tea.Model {
  cityName?: string;
  endPoint?: string;
  static names(): { [key: string]: string } {
    return {
      cityName: 'CityName',
      endPoint: 'EndPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityName: 'string',
      endPoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBindUserIdListResponseBodyData extends $tea.Model {
  certificateType?: string;
  userName?: string;
  certificateNo?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      certificateType: 'CertificateType',
      userName: 'UserName',
      certificateNo: 'CertificateNo',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateType: 'string',
      userName: 'string',
      certificateNo: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceListResponseBodyDeviceList extends $tea.Model {
  deviceName?: string;
  deviceStatus?: string;
  categoryName?: string;
  memoName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      deviceStatus: 'DeviceStatus',
      categoryName: 'CategoryName',
      memoName: 'MemoName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      deviceStatus: 'string',
      categoryName: 'string',
      memoName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExcelAnalysisResultResponseBodyExcelResult extends $tea.Model {
  insertCount?: number;
  updateCount?: number;
  errorCount?: number;
  errorLine?: string[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      insertCount: 'InsertCount',
      updateCount: 'UpdateCount',
      errorCount: 'ErrorCount',
      errorLine: 'ErrorLine',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insertCount: 'number',
      updateCount: 'number',
      errorCount: 'number',
      errorLine: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIdentifyRecordListResponseBodyRecordList extends $tea.Model {
  capturedImage?: string;
  deviceName?: string;
  groupName?: string;
  userId?: number;
  identifyingImage?: string;
  gmtCreate?: number;
  userName?: string;
  iotId?: string;
  static names(): { [key: string]: string } {
    return {
      capturedImage: 'CapturedImage',
      deviceName: 'DeviceName',
      groupName: 'GroupName',
      userId: 'UserId',
      identifyingImage: 'IdentifyingImage',
      gmtCreate: 'GmtCreate',
      userName: 'UserName',
      iotId: 'IotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capturedImage: 'string',
      deviceName: 'string',
      groupName: 'string',
      userId: 'number',
      identifyingImage: 'string',
      gmtCreate: 'number',
      userName: 'string',
      iotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMnsOauthResponseBodyData extends $tea.Model {
  topicList?: string[];
  topicName?: string;
  mnsAuthorized?: boolean;
  endPoint?: string;
  mnsServe?: boolean;
  openMnsService?: boolean;
  static names(): { [key: string]: string } {
    return {
      topicList: 'TopicList',
      topicName: 'TopicName',
      mnsAuthorized: 'MnsAuthorized',
      endPoint: 'EndPoint',
      mnsServe: 'MnsServe',
      openMnsService: 'OpenMnsService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicList: { 'type': 'array', 'itemType': 'string' },
      topicName: 'string',
      mnsAuthorized: 'boolean',
      endPoint: 'string',
      mnsServe: 'boolean',
      openMnsService: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssOauthResponseBodyData extends $tea.Model {
  ossServe?: boolean;
  bucketName?: string;
  openOssService?: boolean;
  ossAuthorized?: boolean;
  openOssTime?: number;
  static names(): { [key: string]: string } {
    return {
      ossServe: 'OssServe',
      bucketName: 'BucketName',
      openOssService: 'OpenOssService',
      ossAuthorized: 'OssAuthorized',
      openOssTime: 'OpenOssTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossServe: 'boolean',
      bucketName: 'string',
      openOssService: 'boolean',
      ossAuthorized: 'boolean',
      openOssTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserGroupListResponseBodyData extends $tea.Model {
  groupName?: string;
  groupUserCount?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      groupUserCount: 'GroupUserCount',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      groupUserCount: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserInfoListResponseBodyUserInfoList extends $tea.Model {
  sex?: number;
  certificateType?: string;
  birthday?: number;
  phoneNo?: string;
  groupName?: string;
  userGroupId?: number;
  identifyingImage?: string;
  userName?: string;
  certificateNo?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      sex: 'Sex',
      certificateType: 'CertificateType',
      birthday: 'Birthday',
      phoneNo: 'PhoneNo',
      groupName: 'GroupName',
      userGroupId: 'UserGroupId',
      identifyingImage: 'IdentifyingImage',
      userName: 'UserName',
      certificateNo: 'CertificateNo',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sex: 'number',
      certificateType: 'string',
      birthday: 'number',
      phoneNo: 'string',
      groupName: 'string',
      userGroupId: 'number',
      identifyingImage: 'string',
      userName: 'string',
      certificateNo: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountProjectResponseBodyList extends $tea.Model {
  projectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveUserGroupResponseBodyData extends $tea.Model {
  gmtCreate?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveUserInfoResponseBodyData extends $tea.Model {
  gmtCreate?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      id: 'number',
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
    this._endpoint = this.getEndpoint("cloudauth-console", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProjectResponse>(await this.doRPCRequest("CreateProject", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async createSlrRoleWithOptions(request: CreateSlrRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateSlrRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSlrRoleResponse>(await this.doRPCRequest("CreateSlrRole", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSlrRoleResponse({}));
  }

  async createSlrRole(request: CreateSlrRoleRequest): Promise<CreateSlrRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSlrRoleWithOptions(request, runtime);
  }

  async deleteMnsServeWithOptions(request: DeleteMnsServeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMnsServeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteMnsServeResponse>(await this.doRPCRequest("DeleteMnsServe", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteMnsServeResponse({}));
  }

  async deleteMnsServe(request: DeleteMnsServeRequest): Promise<DeleteMnsServeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMnsServeWithOptions(request, runtime);
  }

  async deleteUserGroupWithOptions(request: DeleteUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserGroupResponse>(await this.doRPCRequest("DeleteUserGroup", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserGroupResponse({}));
  }

  async deleteUserGroup(request: DeleteUserGroupRequest): Promise<DeleteUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserGroupWithOptions(request, runtime);
  }

  async deleteUserInfoWithOptions(request: DeleteUserInfoRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserInfoResponse>(await this.doRPCRequest("DeleteUserInfo", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserInfoResponse({}));
  }

  async deleteUserInfo(request: DeleteUserInfoRequest): Promise<DeleteUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserInfoWithOptions(request, runtime);
  }

  async describeAllEndPointWithOptions(request: DescribeAllEndPointRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllEndPointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAllEndPointResponse>(await this.doRPCRequest("DescribeAllEndPoint", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAllEndPointResponse({}));
  }

  async describeAllEndPoint(request: DescribeAllEndPointRequest): Promise<DescribeAllEndPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllEndPointWithOptions(request, runtime);
  }

  async describeBindUserIdListWithOptions(request: DescribeBindUserIdListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBindUserIdListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBindUserIdListResponse>(await this.doRPCRequest("DescribeBindUserIdList", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBindUserIdListResponse({}));
  }

  async describeBindUserIdList(request: DescribeBindUserIdListRequest): Promise<DescribeBindUserIdListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBindUserIdListWithOptions(request, runtime);
  }

  async describeCertificateTypeListWithOptions(request: DescribeCertificateTypeListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertificateTypeListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCertificateTypeListResponse>(await this.doRPCRequest("DescribeCertificateTypeList", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCertificateTypeListResponse({}));
  }

  async describeCertificateTypeList(request: DescribeCertificateTypeListRequest): Promise<DescribeCertificateTypeListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertificateTypeListWithOptions(request, runtime);
  }

  async describeDeviceListWithOptions(request: DescribeDeviceListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeviceListResponse>(await this.doRPCRequest("DescribeDeviceList", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeviceListResponse({}));
  }

  async describeDeviceList(request: DescribeDeviceListRequest): Promise<DescribeDeviceListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceListWithOptions(request, runtime);
  }

  async describeExcelAnalysisResultWithOptions(request: DescribeExcelAnalysisResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeExcelAnalysisResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeExcelAnalysisResultResponse>(await this.doRPCRequest("DescribeExcelAnalysisResult", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeExcelAnalysisResultResponse({}));
  }

  async describeExcelAnalysisResult(request: DescribeExcelAnalysisResultRequest): Promise<DescribeExcelAnalysisResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeExcelAnalysisResultWithOptions(request, runtime);
  }

  async describeIdentifyRecordListWithOptions(request: DescribeIdentifyRecordListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIdentifyRecordListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeIdentifyRecordListResponse>(await this.doRPCRequest("DescribeIdentifyRecordList", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeIdentifyRecordListResponse({}));
  }

  async describeIdentifyRecordList(request: DescribeIdentifyRecordListRequest): Promise<DescribeIdentifyRecordListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIdentifyRecordListWithOptions(request, runtime);
  }

  async describeMnsOauthWithOptions(request: DescribeMnsOauthRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMnsOauthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeMnsOauthResponse>(await this.doRPCRequest("DescribeMnsOauth", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeMnsOauthResponse({}));
  }

  async describeMnsOauth(request: DescribeMnsOauthRequest): Promise<DescribeMnsOauthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMnsOauthWithOptions(request, runtime);
  }

  async describeOssOauthWithOptions(request: DescribeOssOauthRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssOauthResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOssOauthResponse>(await this.doRPCRequest("DescribeOssOauth", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOssOauthResponse({}));
  }

  async describeOssOauth(request: DescribeOssOauthRequest): Promise<DescribeOssOauthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssOauthWithOptions(request, runtime);
  }

  async describeSignedUrlWithOptions(request: DescribeSignedUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSignedUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSignedUrlResponse>(await this.doRPCRequest("DescribeSignedUrl", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSignedUrlResponse({}));
  }

  async describeSignedUrl(request: DescribeSignedUrlRequest): Promise<DescribeSignedUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSignedUrlWithOptions(request, runtime);
  }

  async describeTopicWithOptions(request: DescribeTopicRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTopicResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTopicResponse>(await this.doRPCRequest("DescribeTopic", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTopicResponse({}));
  }

  async describeTopic(request: DescribeTopicRequest): Promise<DescribeTopicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTopicWithOptions(request, runtime);
  }

  async describeUploadPreSignWithOptions(request: DescribeUploadPreSignRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUploadPreSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUploadPreSignResponse>(await this.doRPCRequest("DescribeUploadPreSign", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUploadPreSignResponse({}));
  }

  async describeUploadPreSign(request: DescribeUploadPreSignRequest): Promise<DescribeUploadPreSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUploadPreSignWithOptions(request, runtime);
  }

  async describeUserGroupListWithOptions(request: DescribeUserGroupListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserGroupListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserGroupListResponse>(await this.doRPCRequest("DescribeUserGroupList", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserGroupListResponse({}));
  }

  async describeUserGroupList(request: DescribeUserGroupListRequest): Promise<DescribeUserGroupListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserGroupListWithOptions(request, runtime);
  }

  async describeUserInfoListWithOptions(request: DescribeUserInfoListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserInfoListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserInfoListResponse>(await this.doRPCRequest("DescribeUserInfoList", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserInfoListResponse({}));
  }

  async describeUserInfoList(request: DescribeUserInfoListRequest): Promise<DescribeUserInfoListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserInfoListWithOptions(request, runtime);
  }

  async getAccountProjectWithOptions(request: GetAccountProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAccountProjectResponse>(await this.doRPCRequest("GetAccountProject", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new GetAccountProjectResponse({}));
  }

  async getAccountProject(request: GetAccountProjectRequest): Promise<GetAccountProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountProjectWithOptions(request, runtime);
  }

  async saveMnsServeWithOptions(request: SaveMnsServeRequest, runtime: $Util.RuntimeOptions): Promise<SaveMnsServeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveMnsServeResponse>(await this.doRPCRequest("SaveMnsServe", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new SaveMnsServeResponse({}));
  }

  async saveMnsServe(request: SaveMnsServeRequest): Promise<SaveMnsServeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveMnsServeWithOptions(request, runtime);
  }

  async saveOssServeWithOptions(request: SaveOssServeRequest, runtime: $Util.RuntimeOptions): Promise<SaveOssServeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveOssServeResponse>(await this.doRPCRequest("SaveOssServe", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new SaveOssServeResponse({}));
  }

  async saveOssServe(request: SaveOssServeRequest): Promise<SaveOssServeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveOssServeWithOptions(request, runtime);
  }

  async saveUserGroupWithOptions(request: SaveUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<SaveUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveUserGroupResponse>(await this.doRPCRequest("SaveUserGroup", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new SaveUserGroupResponse({}));
  }

  async saveUserGroup(request: SaveUserGroupRequest): Promise<SaveUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveUserGroupWithOptions(request, runtime);
  }

  async saveUserInfoWithOptions(request: SaveUserInfoRequest, runtime: $Util.RuntimeOptions): Promise<SaveUserInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SaveUserInfoResponse>(await this.doRPCRequest("SaveUserInfo", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new SaveUserInfoResponse({}));
  }

  async saveUserInfo(request: SaveUserInfoRequest): Promise<SaveUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveUserInfoWithOptions(request, runtime);
  }

  async unbindDeviceWithOptions(request: UnbindDeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnbindDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnbindDeviceResponse>(await this.doRPCRequest("UnbindDevice", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new UnbindDeviceResponse({}));
  }

  async unbindDevice(request: UnbindDeviceRequest): Promise<UnbindDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindDeviceWithOptions(request, runtime);
  }

  async updateDeviceControlInfoWithOptions(request: UpdateDeviceControlInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceControlInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDeviceControlInfoResponse>(await this.doRPCRequest("UpdateDeviceControlInfo", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDeviceControlInfoResponse({}));
  }

  async updateDeviceControlInfo(request: UpdateDeviceControlInfoRequest): Promise<UpdateDeviceControlInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceControlInfoWithOptions(request, runtime);
  }

  async updateDeviceNameWithOptions(request: UpdateDeviceNameRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDeviceNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDeviceNameResponse>(await this.doRPCRequest("UpdateDeviceName", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDeviceNameResponse({}));
  }

  async updateDeviceName(request: UpdateDeviceNameRequest): Promise<UpdateDeviceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDeviceNameWithOptions(request, runtime);
  }

  async updateProjectNameWithOptions(request: UpdateProjectNameRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProjectNameResponse>(await this.doRPCRequest("UpdateProjectName", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProjectNameResponse({}));
  }

  async updateProjectName(request: UpdateProjectNameRequest): Promise<UpdateProjectNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectNameWithOptions(request, runtime);
  }

  async updateUserGroupWithOptions(request: UpdateUserGroupRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUserGroupResponse>(await this.doRPCRequest("UpdateUserGroup", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUserGroupResponse({}));
  }

  async updateUserGroup(request: UpdateUserGroupRequest): Promise<UpdateUserGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserGroupWithOptions(request, runtime);
  }

  async updateUserInfoWithOptions(request: UpdateUserInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateUserInfoResponse>(await this.doRPCRequest("UpdateUserInfo", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateUserInfoResponse({}));
  }

  async updateUserInfo(request: UpdateUserInfoRequest): Promise<UpdateUserInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserInfoWithOptions(request, runtime);
  }

  async uploadIdentifyRecordWithOptions(request: UploadIdentifyRecordRequest, runtime: $Util.RuntimeOptions): Promise<UploadIdentifyRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadIdentifyRecordResponse>(await this.doRPCRequest("UploadIdentifyRecord", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new UploadIdentifyRecordResponse({}));
  }

  async uploadIdentifyRecord(request: UploadIdentifyRecordRequest): Promise<UploadIdentifyRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadIdentifyRecordWithOptions(request, runtime);
  }

  async verifyAccountProjectWithOptions(request: VerifyAccountProjectRequest, runtime: $Util.RuntimeOptions): Promise<VerifyAccountProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyAccountProjectResponse>(await this.doRPCRequest("VerifyAccountProject", "2019-02-19", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyAccountProjectResponse({}));
  }

  async verifyAccountProject(request: VerifyAccountProjectRequest): Promise<VerifyAccountProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyAccountProjectWithOptions(request, runtime);
  }

}
