// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAccountRequest extends $tea.Model {
  regionId?: string;
  accountName?: string;
  password?: string;
  isShort?: boolean;
  enableKMS?: boolean;
  remark?: string;
  ramUid?: string;
  useRandomPassword?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      accountName: 'AccountName',
      password: 'Password',
      isShort: 'IsShort',
      enableKMS: 'EnableKMS',
      remark: 'Remark',
      ramUid: 'RamUid',
      useRandomPassword: 'UseRandomPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      accountName: 'string',
      password: 'string',
      isShort: 'boolean',
      enableKMS: 'boolean',
      remark: 'string',
      ramUid: 'string',
      useRandomPassword: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccountResponseBody extends $tea.Model {
  account?: AddAccountResponseBodyAccount;
  requestId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      requestId: 'RequestId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: AddAccountResponseBodyAccount,
      requestId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEndPointRequest extends $tea.Model {
  regionId?: string;
  networkType?: string;
  vpcID?: string;
  vswitch?: string;
  zone?: string;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkType: 'NetworkType',
      vpcID: 'VpcID',
      vswitch: 'Vswitch',
      zone: 'Zone',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkType: 'string',
      vpcID: 'string',
      vswitch: 'string',
      zone: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEndPointResponseBody extends $tea.Model {
  requestId?: string;
  endPointInfo?: AddEndPointResponseBodyEndPointInfo;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      endPointInfo: 'EndPointInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      endPointInfo: AddEndPointResponseBodyEndPointInfo,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEndPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddEndPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddEndPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  regionId?: string;
  chargeType?: string;
  instanceType?: string;
  component?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      chargeType: 'ChargeType',
      instanceType: 'InstanceType',
      component: 'Component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      chargeType: 'string',
      instanceType: 'string',
      component: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errorInfo?: string;
  errorCode?: string;
  success?: boolean;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorInfo: 'ErrorInfo',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorInfo: 'string',
      errorCode: 'string',
      success: 'boolean',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountRequest extends $tea.Model {
  regionId?: string;
  accountName?: string;
  isShort?: boolean;
  isServiceUser?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      accountName: 'AccountName',
      isShort: 'IsShort',
      isServiceUser: 'IsServiceUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      accountName: 'string',
      isShort: 'boolean',
      isServiceUser: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponseBody extends $tea.Model {
  requestId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAccountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAccountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowIPRequest extends $tea.Model {
  regionId?: string;
  networkType?: string;
  product?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkType: 'NetworkType',
      product: 'Product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkType: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowIPResponseBody extends $tea.Model {
  requestId?: string;
  allowIP?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      allowIP: 'AllowIP',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      allowIP: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowIPResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAllowIPResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAllowIPResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndPointRequest extends $tea.Model {
  regionId?: string;
  endPointID?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      endPointID: 'EndPointID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      endPointID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndPointResponseBody extends $tea.Model {
  requestId?: string;
  endPointInfo?: GetEndPointResponseBodyEndPointInfo;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      endPointInfo: 'EndPointInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      endPointInfo: GetEndPointResponseBodyEndPointInfo,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEndPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEndPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndPointByDomainRequest extends $tea.Model {
  regionId?: string;
  domainURL?: string;
  regionID?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      domainURL: 'DomainURL',
      regionID: 'RegionID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      domainURL: 'string',
      regionID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndPointByDomainResponseBody extends $tea.Model {
  requestId?: string;
  endPointInfo?: GetEndPointByDomainResponseBodyEndPointInfo;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      endPointInfo: 'EndPointInfo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      endPointInfo: GetEndPointByDomainResponseBodyEndPointInfo,
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndPointByDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEndPointByDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEndPointByDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDetailRequest extends $tea.Model {
  jobId?: string;
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDetailResponseBody extends $tea.Model {
  jobDetail?: GetJobDetailResponseBodyJobDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobDetail: 'JobDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobDetail: GetJobDetailResponseBodyJobDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobLogRequest extends $tea.Model {
  jobId?: string;
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobLogResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusRequest extends $tea.Model {
  jobId?: string;
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusResponseBody extends $tea.Model {
  status?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkJobRequest extends $tea.Model {
  vcName?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      vcName: 'VcName',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vcName: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkJobResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: KillSparkJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: KillSparkJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobRequest extends $tea.Model {
  vcName?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      vcName: 'VcName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vcName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobResponseBody extends $tea.Model {
  dataResult?: ListSparkJobResponseBodyDataResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataResult: 'DataResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataResult: ListSparkJobResponseBodyDataResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSparkJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSparkJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountListRequest extends $tea.Model {
  regionId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountListResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  data?: QueryAccountListResponseBodyData[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      data: 'Data',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      data: { 'type': 'array', 'itemType': QueryAccountListResponseBodyData },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryAccountListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryAccountListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEndPointListRequest extends $tea.Model {
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

export class QueryEndPointListResponseBody extends $tea.Model {
  requestId?: string;
  endPointList?: QueryEndPointListResponseBodyEndPointList[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      endPointList: 'EndPointList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      endPointList: { 'type': 'array', 'itemType': QueryEndPointListResponseBodyEndPointList },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEndPointListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryEndPointListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryEndPointListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errorInfo?: string;
  errorCode?: string;
  success?: boolean;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorInfo: 'ErrorInfo',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorInfo: 'string',
      errorCode: 'string',
      success: 'boolean',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReleaseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEndPointRequest extends $tea.Model {
  regionId?: string;
  endPointID?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      endPointID: 'EndPointID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      endPointID: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEndPointResponseBody extends $tea.Model {
  requestId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEndPointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveEndPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveEndPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetMainPasswordRequest extends $tea.Model {
  regionId?: string;
  useRandomPassword?: boolean;
  initPassword?: string;
  enableKMS?: boolean;
  externalUid?: string;
  externalAliyunUid?: string;
  externalBizAliyunUid?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      useRandomPassword: 'UseRandomPassword',
      initPassword: 'InitPassword',
      enableKMS: 'EnableKMS',
      externalUid: 'ExternalUid',
      externalAliyunUid: 'ExternalAliyunUid',
      externalBizAliyunUid: 'ExternalBizAliyunUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      useRandomPassword: 'boolean',
      initPassword: 'string',
      enableKMS: 'boolean',
      externalUid: 'string',
      externalAliyunUid: 'string',
      externalBizAliyunUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetMainPasswordResponseBody extends $tea.Model {
  account?: ResetMainPasswordResponseBodyAccount;
  requestId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      requestId: 'RequestId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: ResetMainPasswordResponseBodyAccount,
      requestId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetMainPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetMainPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetMainPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAllowIPRequest extends $tea.Model {
  regionId?: string;
  networkType?: string;
  product?: string;
  allowIP?: string;
  append?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkType: 'NetworkType',
      product: 'Product',
      allowIP: 'AllowIP',
      append: 'Append',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkType: 'string',
      product: 'string',
      allowIP: 'string',
      append: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAllowIPResponseBody extends $tea.Model {
  requestId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAllowIPResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetAllowIPResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetAllowIPResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkJobRequest extends $tea.Model {
  vcName?: string;
  configJson?: string;
  static names(): { [key: string]: string } {
    return {
      vcName: 'VcName',
      configJson: 'ConfigJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vcName: 'string',
      configJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkJobResponseBody extends $tea.Model {
  requestId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSparkJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitSparkJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitSparkJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnSubscribeRegionRequest extends $tea.Model {
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

export class UnSubscribeRegionResponseBody extends $tea.Model {
  requestId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnSubscribeRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UnSubscribeRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnSubscribeRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountPasswordRequest extends $tea.Model {
  regionId?: string;
  accountName?: string;
  isShort?: boolean;
  password?: string;
  enableKMS?: boolean;
  useRandomPassword?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      accountName: 'AccountName',
      isShort: 'IsShort',
      password: 'Password',
      enableKMS: 'EnableKMS',
      useRandomPassword: 'UseRandomPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      accountName: 'string',
      isShort: 'boolean',
      password: 'string',
      enableKMS: 'boolean',
      useRandomPassword: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountPasswordResponseBody extends $tea.Model {
  account?: UpdateAccountPasswordResponseBodyAccount;
  requestId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      requestId: 'RequestId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: UpdateAccountPasswordResponseBodyAccount,
      requestId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAccountPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAccountPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  chargeType?: string;
  instanceType?: string;
  component?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      chargeType: 'ChargeType',
      instanceType: 'InstanceType',
      component: 'Component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      chargeType: 'string',
      instanceType: 'string',
      component: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  errorInfo?: string;
  errorCode?: string;
  success?: boolean;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      errorInfo: 'ErrorInfo',
      errorCode: 'ErrorCode',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      errorInfo: 'string',
      errorCode: 'string',
      success: 'boolean',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateVirtualClusterNameRequest extends $tea.Model {
  vcName?: string;
  static names(): { [key: string]: string } {
    return {
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateVirtualClusterNameResponseBody extends $tea.Model {
  requestId?: string;
  data?: ValidateVirtualClusterNameResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ValidateVirtualClusterNameResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateVirtualClusterNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ValidateVirtualClusterNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ValidateVirtualClusterNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccountResponseBodyAccount extends $tea.Model {
  password?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEndPointResponseBodyEndPointInfo extends $tea.Model {
  product?: string;
  zone?: string;
  domainURL?: string;
  vSwitch?: string;
  host?: string;
  status?: string;
  endPointID?: string;
  allowIP?: string;
  vpcID?: string;
  networkType?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'product',
      zone: 'zone',
      domainURL: 'domainURL',
      vSwitch: 'vSwitch',
      host: 'host',
      status: 'status',
      endPointID: 'endPointID',
      allowIP: 'allowIP',
      vpcID: 'vpcID',
      networkType: 'networkType',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      zone: 'string',
      domainURL: 'string',
      vSwitch: 'string',
      host: 'string',
      status: 'string',
      endPointID: 'string',
      allowIP: 'string',
      vpcID: 'string',
      networkType: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndPointResponseBodyEndPointInfo extends $tea.Model {
  product?: string;
  zone?: string;
  domainURL?: string;
  vSwitch?: string;
  host?: string;
  status?: string;
  allowIP?: string;
  vpcID?: string;
  endPointID?: string;
  networkType?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'product',
      zone: 'zone',
      domainURL: 'domainURL',
      vSwitch: 'vSwitch',
      host: 'host',
      status: 'status',
      allowIP: 'allowIP',
      vpcID: 'vpcID',
      endPointID: 'endPointID',
      networkType: 'networkType',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      zone: 'string',
      domainURL: 'string',
      vSwitch: 'string',
      host: 'string',
      status: 'string',
      allowIP: 'string',
      vpcID: 'string',
      endPointID: 'string',
      networkType: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndPointByDomainResponseBodyEndPointInfo extends $tea.Model {
  product?: string;
  cloudInstanceID?: string;
  zone?: string;
  domainURL?: string;
  vSwitch?: string;
  host?: string;
  allowIP?: string;
  vpcID?: string;
  endPointID?: string;
  networkType?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'product',
      cloudInstanceID: 'cloudInstanceID',
      zone: 'zone',
      domainURL: 'domainURL',
      vSwitch: 'vSwitch',
      host: 'host',
      allowIP: 'allowIP',
      vpcID: 'vpcID',
      endPointID: 'endPointID',
      networkType: 'networkType',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      cloudInstanceID: 'string',
      zone: 'string',
      domainURL: 'string',
      vSwitch: 'string',
      host: 'string',
      allowIP: 'string',
      vpcID: 'string',
      endPointID: 'string',
      networkType: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDetailResponseBodyJobDetail extends $tea.Model {
  status?: string;
  updateTime?: string;
  executorResourceSpec?: string;
  createTime?: string;
  createTimeValue?: string;
  driverResourceSpec?: string;
  updateTimeValue?: string;
  sparkUI?: string;
  submitTimeValue?: string;
  jobName?: string;
  jobId?: string;
  executorInstances?: string;
  vcName?: string;
  submitTime?: string;
  detail?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updateTime: 'UpdateTime',
      executorResourceSpec: 'ExecutorResourceSpec',
      createTime: 'CreateTime',
      createTimeValue: 'CreateTimeValue',
      driverResourceSpec: 'DriverResourceSpec',
      updateTimeValue: 'UpdateTimeValue',
      sparkUI: 'SparkUI',
      submitTimeValue: 'SubmitTimeValue',
      jobName: 'JobName',
      jobId: 'JobId',
      executorInstances: 'ExecutorInstances',
      vcName: 'VcName',
      submitTime: 'SubmitTime',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      updateTime: 'string',
      executorResourceSpec: 'string',
      createTime: 'string',
      createTimeValue: 'string',
      driverResourceSpec: 'string',
      updateTimeValue: 'string',
      sparkUI: 'string',
      submitTimeValue: 'string',
      jobName: 'string',
      jobId: 'string',
      executorInstances: 'string',
      vcName: 'string',
      submitTime: 'string',
      detail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobResponseBodyDataResultJobList extends $tea.Model {
  status?: string;
  updateTime?: string;
  executorResourceSpec?: string;
  createTime?: string;
  driverResourceSpec?: string;
  createTimeValue?: string;
  updateTimeValue?: string;
  sparkUI?: string;
  submitTimeValue?: string;
  jobName?: string;
  jobId?: string;
  vcName?: string;
  executorInstances?: string;
  submitTime?: string;
  detail?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      updateTime: 'UpdateTime',
      executorResourceSpec: 'ExecutorResourceSpec',
      createTime: 'CreateTime',
      driverResourceSpec: 'DriverResourceSpec',
      createTimeValue: 'CreateTimeValue',
      updateTimeValue: 'UpdateTimeValue',
      sparkUI: 'SparkUI',
      submitTimeValue: 'SubmitTimeValue',
      jobName: 'JobName',
      jobId: 'JobId',
      vcName: 'VcName',
      executorInstances: 'ExecutorInstances',
      submitTime: 'SubmitTime',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      updateTime: 'string',
      executorResourceSpec: 'string',
      createTime: 'string',
      driverResourceSpec: 'string',
      createTimeValue: 'string',
      updateTimeValue: 'string',
      sparkUI: 'string',
      submitTimeValue: 'string',
      jobName: 'string',
      jobId: 'string',
      vcName: 'string',
      executorInstances: 'string',
      submitTime: 'string',
      detail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobResponseBodyDataResult extends $tea.Model {
  jobList?: ListSparkJobResponseBodyDataResultJobList[];
  pageNumber?: string;
  pageSize?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      jobList: 'JobList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobList: { 'type': 'array', 'itemType': ListSparkJobResponseBodyDataResultJobList },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountListResponseBodyData extends $tea.Model {
  remark?: string;
  ramUid?: string;
  shortName?: string;
  role?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      ramUid: 'RamUid',
      shortName: 'ShortName',
      role: 'Role',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      ramUid: 'string',
      shortName: 'string',
      role: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEndPointListResponseBodyEndPointList extends $tea.Model {
  product?: string;
  domainURL?: string;
  zone?: string;
  vSwitch?: string;
  host?: string;
  allowIP?: string;
  vpcID?: string;
  status?: string;
  endPointID?: string;
  networkType?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'product',
      domainURL: 'domainURL',
      zone: 'zone',
      vSwitch: 'vSwitch',
      host: 'host',
      allowIP: 'allowIP',
      vpcID: 'vpcID',
      status: 'status',
      endPointID: 'endPointID',
      networkType: 'networkType',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      domainURL: 'string',
      zone: 'string',
      vSwitch: 'string',
      host: 'string',
      allowIP: 'string',
      vpcID: 'string',
      status: 'string',
      endPointID: 'string',
      networkType: 'string',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetMainPasswordResponseBodyAccount extends $tea.Model {
  password?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountPasswordResponseBodyAccount extends $tea.Model {
  password?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateVirtualClusterNameResponseBodyData extends $tea.Model {
  message?: string;
  legal?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      legal: 'Legal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      legal: 'string',
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
      'cn-beijing': "openanalytics.cn-beijing.aliyuncs.com",
      'cn-zhangjiakou': "openanalytics.cn-zhangjiakou.aliyuncs.com",
      'cn-hangzhou': "openanalytics.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "openanalytics.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "openanalytics.cn-shenzhen.aliyuncs.com",
      'cn-hongkong': "openanalytics.cn-hongkong.aliyuncs.com",
      'ap-southeast-1': "openanalytics.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "datalakeanalytics.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "openanalytics.ap-southeast-3.aliyuncs.com",
      'ap-northeast-1': "datalakeanalytics.ap-northeast-1.aliyuncs.com",
      'eu-west-1': "openanalytics.eu-west-1.aliyuncs.com",
      'us-west-1': "openanalytics.us-west-1.aliyuncs.com",
      'us-east-1': "datalakeanalytics.us-east-1.aliyuncs.com",
      'eu-central-1': "datalakeanalytics.eu-central-1.aliyuncs.com",
      'ap-south-1': "openanalytics.ap-south-1.aliyuncs.com",
      'ap-northeast-2-pop': "openanalytics.ap-northeast-1.aliyuncs.com",
      'ap-southeast-5': "openanalytics.ap-southeast-5.aliyuncs.com",
      'cn-beijing-finance-1': "openanalytics.aliyuncs.com",
      'cn-beijing-finance-pop': "openanalytics.aliyuncs.com",
      'cn-beijing-gov-1': "openanalytics.aliyuncs.com",
      'cn-beijing-nu16-b01': "openanalytics.aliyuncs.com",
      'cn-chengdu': "openanalytics.aliyuncs.com",
      'cn-edge-1': "openanalytics.aliyuncs.com",
      'cn-fujian': "openanalytics.aliyuncs.com",
      'cn-haidian-cm12-c01': "openanalytics.aliyuncs.com",
      'cn-hangzhou-bj-b01': "openanalytics.aliyuncs.com",
      'cn-hangzhou-finance': "openanalytics.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "openanalytics.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "openanalytics.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "openanalytics.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "openanalytics.aliyuncs.com",
      'cn-hangzhou-test-306': "openanalytics.aliyuncs.com",
      'cn-hongkong-finance-pop': "openanalytics.aliyuncs.com",
      'cn-huhehaote': "openanalytics.cn-huhehaote.aliyuncs.com",
      'cn-north-2-gov-1': "openanalytics.aliyuncs.com",
      'cn-qingdao': "openanalytics.cn-qingdao.aliyuncs.com",
      'cn-qingdao-nebula': "openanalytics.aliyuncs.com",
      'cn-shanghai-et15-b01': "openanalytics.aliyuncs.com",
      'cn-shanghai-et2-b01': "openanalytics.aliyuncs.com",
      'cn-shanghai-finance-1': "openanalytics.aliyuncs.com",
      'cn-shanghai-inner': "openanalytics.aliyuncs.com",
      'cn-shanghai-internal-test-1': "openanalytics.aliyuncs.com",
      'cn-shenzhen-finance-1': "openanalytics.aliyuncs.com",
      'cn-shenzhen-inner': "openanalytics.aliyuncs.com",
      'cn-shenzhen-st4-d01': "openanalytics.aliyuncs.com",
      'cn-shenzhen-su18-b01': "openanalytics.aliyuncs.com",
      'cn-wuhan': "openanalytics.aliyuncs.com",
      'cn-yushanfang': "openanalytics.aliyuncs.com",
      'cn-zhangbei-na61-b01': "openanalytics.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "openanalytics.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "openanalytics.aliyuncs.com",
      'eu-west-1-oxs': "openanalytics.ap-northeast-1.aliyuncs.com",
      'me-east-1': "openanalytics.me-east-1.aliyuncs.com",
      'rus-west-1-pop': "openanalytics.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("openanalytics-open", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addAccountWithOptions(request: AddAccountRequest, runtime: $Util.RuntimeOptions): Promise<AddAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddAccountResponse>(await this.doRPCRequest("AddAccount", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new AddAccountResponse({}));
  }

  async addAccount(request: AddAccountRequest): Promise<AddAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAccountWithOptions(request, runtime);
  }

  async addEndPointWithOptions(request: AddEndPointRequest, runtime: $Util.RuntimeOptions): Promise<AddEndPointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddEndPointResponse>(await this.doRPCRequest("AddEndPoint", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new AddEndPointResponse({}));
  }

  async addEndPoint(request: AddEndPointRequest): Promise<AddEndPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEndPointWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateInstanceResponse>(await this.doRPCRequest("CreateInstance", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async deleteAccountWithOptions(request: DeleteAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccountResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAccountResponse>(await this.doRPCRequest("DeleteAccount", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAccountResponse({}));
  }

  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  async getAllowIPWithOptions(request: GetAllowIPRequest, runtime: $Util.RuntimeOptions): Promise<GetAllowIPResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetAllowIPResponse>(await this.doRPCRequest("GetAllowIP", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new GetAllowIPResponse({}));
  }

  async getAllowIP(request: GetAllowIPRequest): Promise<GetAllowIPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllowIPWithOptions(request, runtime);
  }

  async getEndPointWithOptions(request: GetEndPointRequest, runtime: $Util.RuntimeOptions): Promise<GetEndPointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetEndPointResponse>(await this.doRPCRequest("GetEndPoint", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new GetEndPointResponse({}));
  }

  async getEndPoint(request: GetEndPointRequest): Promise<GetEndPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEndPointWithOptions(request, runtime);
  }

  async getEndPointByDomainWithOptions(request: GetEndPointByDomainRequest, runtime: $Util.RuntimeOptions): Promise<GetEndPointByDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetEndPointByDomainResponse>(await this.doRPCRequest("GetEndPointByDomain", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new GetEndPointByDomainResponse({}));
  }

  async getEndPointByDomain(request: GetEndPointByDomainRequest): Promise<GetEndPointByDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEndPointByDomainWithOptions(request, runtime);
  }

  async getJobDetailWithOptions(request: GetJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetJobDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobDetailResponse>(await this.doRPCRequest("GetJobDetail", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobDetailResponse({}));
  }

  async getJobDetail(request: GetJobDetailRequest): Promise<GetJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobDetailWithOptions(request, runtime);
  }

  async getJobLogWithOptions(request: GetJobLogRequest, runtime: $Util.RuntimeOptions): Promise<GetJobLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobLogResponse>(await this.doRPCRequest("GetJobLog", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobLogResponse({}));
  }

  async getJobLog(request: GetJobLogRequest): Promise<GetJobLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobLogWithOptions(request, runtime);
  }

  async getJobStatusWithOptions(request: GetJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetJobStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetJobStatusResponse>(await this.doRPCRequest("GetJobStatus", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new GetJobStatusResponse({}));
  }

  async getJobStatus(request: GetJobStatusRequest): Promise<GetJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobStatusWithOptions(request, runtime);
  }

  async killSparkJobWithOptions(request: KillSparkJobRequest, runtime: $Util.RuntimeOptions): Promise<KillSparkJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<KillSparkJobResponse>(await this.doRPCRequest("KillSparkJob", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new KillSparkJobResponse({}));
  }

  async killSparkJob(request: KillSparkJobRequest): Promise<KillSparkJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killSparkJobWithOptions(request, runtime);
  }

  async listSparkJobWithOptions(request: ListSparkJobRequest, runtime: $Util.RuntimeOptions): Promise<ListSparkJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSparkJobResponse>(await this.doRPCRequest("ListSparkJob", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new ListSparkJobResponse({}));
  }

  async listSparkJob(request: ListSparkJobRequest): Promise<ListSparkJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSparkJobWithOptions(request, runtime);
  }

  async queryAccountListWithOptions(request: QueryAccountListRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccountListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryAccountListResponse>(await this.doRPCRequest("QueryAccountList", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new QueryAccountListResponse({}));
  }

  async queryAccountList(request: QueryAccountListRequest): Promise<QueryAccountListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccountListWithOptions(request, runtime);
  }

  async queryEndPointListWithOptions(request: QueryEndPointListRequest, runtime: $Util.RuntimeOptions): Promise<QueryEndPointListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryEndPointListResponse>(await this.doRPCRequest("QueryEndPointList", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new QueryEndPointListResponse({}));
  }

  async queryEndPointList(request: QueryEndPointListRequest): Promise<QueryEndPointListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEndPointListWithOptions(request, runtime);
  }

  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReleaseInstanceResponse>(await this.doRPCRequest("ReleaseInstance", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new ReleaseInstanceResponse({}));
  }

  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  async removeEndPointWithOptions(request: RemoveEndPointRequest, runtime: $Util.RuntimeOptions): Promise<RemoveEndPointResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveEndPointResponse>(await this.doRPCRequest("RemoveEndPoint", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveEndPointResponse({}));
  }

  async removeEndPoint(request: RemoveEndPointRequest): Promise<RemoveEndPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeEndPointWithOptions(request, runtime);
  }

  async resetMainPasswordWithOptions(request: ResetMainPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetMainPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetMainPasswordResponse>(await this.doRPCRequest("ResetMainPassword", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new ResetMainPasswordResponse({}));
  }

  async resetMainPassword(request: ResetMainPasswordRequest): Promise<ResetMainPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetMainPasswordWithOptions(request, runtime);
  }

  async setAllowIPWithOptions(request: SetAllowIPRequest, runtime: $Util.RuntimeOptions): Promise<SetAllowIPResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetAllowIPResponse>(await this.doRPCRequest("SetAllowIP", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new SetAllowIPResponse({}));
  }

  async setAllowIP(request: SetAllowIPRequest): Promise<SetAllowIPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAllowIPWithOptions(request, runtime);
  }

  async submitSparkJobWithOptions(request: SubmitSparkJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSparkJobResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SubmitSparkJobResponse>(await this.doRPCRequest("SubmitSparkJob", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new SubmitSparkJobResponse({}));
  }

  async submitSparkJob(request: SubmitSparkJobRequest): Promise<SubmitSparkJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSparkJobWithOptions(request, runtime);
  }

  async unSubscribeRegionWithOptions(request: UnSubscribeRegionRequest, runtime: $Util.RuntimeOptions): Promise<UnSubscribeRegionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnSubscribeRegionResponse>(await this.doRPCRequest("UnSubscribeRegion", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new UnSubscribeRegionResponse({}));
  }

  async unSubscribeRegion(request: UnSubscribeRegionRequest): Promise<UnSubscribeRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unSubscribeRegionWithOptions(request, runtime);
  }

  async updateAccountPasswordWithOptions(request: UpdateAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAccountPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAccountPasswordResponse>(await this.doRPCRequest("UpdateAccountPassword", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAccountPasswordResponse({}));
  }

  async updateAccountPassword(request: UpdateAccountPasswordRequest): Promise<UpdateAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccountPasswordWithOptions(request, runtime);
  }

  async upgradeInstanceWithOptions(request: UpgradeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpgradeInstanceResponse>(await this.doRPCRequest("UpgradeInstance", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new UpgradeInstanceResponse({}));
  }

  async upgradeInstance(request: UpgradeInstanceRequest): Promise<UpgradeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeInstanceWithOptions(request, runtime);
  }

  async validateVirtualClusterNameWithOptions(request: ValidateVirtualClusterNameRequest, runtime: $Util.RuntimeOptions): Promise<ValidateVirtualClusterNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ValidateVirtualClusterNameResponse>(await this.doRPCRequest("ValidateVirtualClusterName", "2018-06-19", "HTTPS", "POST", "AK", "json", req, runtime), new ValidateVirtualClusterNameResponse({}));
  }

  async validateVirtualClusterName(request: ValidateVirtualClusterNameRequest): Promise<ValidateVirtualClusterNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateVirtualClusterNameWithOptions(request, runtime);
  }

}
