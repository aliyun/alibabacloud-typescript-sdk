// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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

export class ValidateVirtualClusterNameResponse extends $tea.Model {
  requestId: string;
  data: ValidateVirtualClusterNameResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: ValidateVirtualClusterNameResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeInstanceRequest extends $tea.Model {
  regionId?: string;
  instanceId: string;
  chargeType: string;
  instanceType: string;
  component: string;
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

export class UpgradeInstanceResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorInfo: string;
  result: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorInfo: 'string',
      result: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  regionId?: string;
  chargeType: string;
  instanceType: string;
  component: string;
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

export class CreateInstanceResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorInfo: string;
  result: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorInfo: 'string',
      result: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseInstanceRequest extends $tea.Model {
  regionId?: string;
  instanceId: string;
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

export class ReleaseInstanceResponse extends $tea.Model {
  success: boolean;
  errorCode: string;
  errorInfo: string;
  result: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      errorCode: 'string',
      errorInfo: 'string',
      result: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDetailRequest extends $tea.Model {
  jobId: string;
  vcName: string;
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

export class GetJobDetailResponse extends $tea.Model {
  requestId: string;
  jobDetail: GetJobDetailResponseJobDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      jobDetail: 'JobDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      jobDetail: GetJobDetailResponseJobDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusRequest extends $tea.Model {
  jobId: string;
  vcName: string;
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

export class GetJobStatusResponse extends $tea.Model {
  requestId: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KillSparkJobRequest extends $tea.Model {
  vcName: string;
  jobId: string;
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

export class KillSparkJobResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class SubmitSparkJobRequest extends $tea.Model {
  vcName: string;
  configJson: string;
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

export class SubmitSparkJobResponse extends $tea.Model {
  requestId: string;
  jobId: string;
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

export class GetJobLogRequest extends $tea.Model {
  jobId: string;
  vcName: string;
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

export class GetJobLogResponse extends $tea.Model {
  data: string;
  requestId: string;
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

export class ListSparkJobRequest extends $tea.Model {
  vcName: string;
  pageNumber: number;
  pageSize: number;
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

export class ListSparkJobResponse extends $tea.Model {
  requestId: string;
  dataResult: ListSparkJobResponseDataResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      dataResult: 'DataResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      dataResult: ListSparkJobResponseDataResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllowIPRequest extends $tea.Model {
  regionId: string;
  networkType: string;
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

export class GetAllowIPResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  allowIP: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      allowIP: 'AllowIP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      allowIP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAllowIPRequest extends $tea.Model {
  regionId: string;
  networkType: string;
  product?: string;
  allowIP: string;
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

export class SetAllowIPResponse extends $tea.Model {
  requestId: string;
  regionId: string;
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

export class ResetMainPasswordRequest extends $tea.Model {
  regionId: string;
  useRandomPassword: boolean;
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

export class ResetMainPasswordResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  account: ResetMainPasswordResponseAccount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      account: ResetMainPasswordResponseAccount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnSubscribeRegionRequest extends $tea.Model {
  regionId: string;
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

export class UnSubscribeRegionResponse extends $tea.Model {
  requestId: string;
  regionId: string;
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

export class QueryAccountListRequest extends $tea.Model {
  regionId: string;
  pageSize: number;
  pageNumber: number;
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

export class QueryAccountListResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  pageSize: number;
  pageNumber: number;
  totalCount: number;
  data: QueryAccountListResponseData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      totalCount: 'number',
      data: { 'type': 'array', 'itemType': QueryAccountListResponseData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAccountRequest extends $tea.Model {
  regionId: string;
  accountName: string;
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

export class DeleteAccountResponse extends $tea.Model {
  requestId: string;
  regionId: string;
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

export class AddAccountRequest extends $tea.Model {
  regionId: string;
  accountName: string;
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

export class AddAccountResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  account: AddAccountResponseAccount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      account: AddAccountResponseAccount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountPasswordRequest extends $tea.Model {
  regionId: string;
  accountName: string;
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

export class UpdateAccountPasswordResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  account: UpdateAccountPasswordResponseAccount;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      account: 'Account',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      account: UpdateAccountPasswordResponseAccount,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveEndPointRequest extends $tea.Model {
  regionId: string;
  endPointID: string;
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

export class RemoveEndPointResponse extends $tea.Model {
  requestId: string;
  regionId: string;
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

export class QueryEndPointListRequest extends $tea.Model {
  regionId: string;
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

export class QueryEndPointListResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  endPointList: QueryEndPointListResponseEndPointList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      endPointList: 'EndPointList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      endPointList: { 'type': 'array', 'itemType': QueryEndPointListResponseEndPointList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEndPointRequest extends $tea.Model {
  regionId: string;
  networkType: string;
  vpcID: string;
  vswitch: string;
  zone: string;
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

export class AddEndPointResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  endPointInfo: AddEndPointResponseEndPointInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      endPointInfo: 'EndPointInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      endPointInfo: AddEndPointResponseEndPointInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndPointRequest extends $tea.Model {
  regionId: string;
  endPointID: string;
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

export class GetEndPointResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  endPointInfo: GetEndPointResponseEndPointInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      endPointInfo: 'EndPointInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      endPointInfo: GetEndPointResponseEndPointInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndPointByDomainRequest extends $tea.Model {
  regionId: string;
  domainURL: string;
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

export class GetEndPointByDomainResponse extends $tea.Model {
  requestId: string;
  regionId: string;
  endPointInfo: GetEndPointByDomainResponseEndPointInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regionId: 'RegionId',
      endPointInfo: 'EndPointInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regionId: 'string',
      endPointInfo: GetEndPointByDomainResponseEndPointInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateVirtualClusterNameResponseData extends $tea.Model {
  legal: string;
  message: string;
  static names(): { [key: string]: string } {
    return {
      legal: 'Legal',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      legal: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDetailResponseJobDetail extends $tea.Model {
  jobId: string;
  jobName: string;
  status: string;
  detail: string;
  sparkUI: string;
  createTime: string;
  updateTime: string;
  submitTime: string;
  createTimeValue: string;
  updateTimeValue: string;
  submitTimeValue: string;
  vcName: string;
  driverResourceSpec: string;
  executorResourceSpec: string;
  executorInstances: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobName: 'JobName',
      status: 'Status',
      detail: 'Detail',
      sparkUI: 'SparkUI',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      submitTime: 'SubmitTime',
      createTimeValue: 'CreateTimeValue',
      updateTimeValue: 'UpdateTimeValue',
      submitTimeValue: 'SubmitTimeValue',
      vcName: 'VcName',
      driverResourceSpec: 'DriverResourceSpec',
      executorResourceSpec: 'ExecutorResourceSpec',
      executorInstances: 'ExecutorInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      jobName: 'string',
      status: 'string',
      detail: 'string',
      sparkUI: 'string',
      createTime: 'string',
      updateTime: 'string',
      submitTime: 'string',
      createTimeValue: 'string',
      updateTimeValue: 'string',
      submitTimeValue: 'string',
      vcName: 'string',
      driverResourceSpec: 'string',
      executorResourceSpec: 'string',
      executorInstances: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobResponseDataResultJobList extends $tea.Model {
  createTime: string;
  createTimeValue: string;
  detail: string;
  driverResourceSpec: string;
  executorInstances: string;
  executorResourceSpec: string;
  jobId: string;
  jobName: string;
  sparkUI: string;
  status: string;
  submitTime: string;
  submitTimeValue: string;
  updateTime: string;
  updateTimeValue: string;
  vcName: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createTimeValue: 'CreateTimeValue',
      detail: 'Detail',
      driverResourceSpec: 'DriverResourceSpec',
      executorInstances: 'ExecutorInstances',
      executorResourceSpec: 'ExecutorResourceSpec',
      jobId: 'JobId',
      jobName: 'JobName',
      sparkUI: 'SparkUI',
      status: 'Status',
      submitTime: 'SubmitTime',
      submitTimeValue: 'SubmitTimeValue',
      updateTime: 'UpdateTime',
      updateTimeValue: 'UpdateTimeValue',
      vcName: 'VcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createTimeValue: 'string',
      detail: 'string',
      driverResourceSpec: 'string',
      executorInstances: 'string',
      executorResourceSpec: 'string',
      jobId: 'string',
      jobName: 'string',
      sparkUI: 'string',
      status: 'string',
      submitTime: 'string',
      submitTimeValue: 'string',
      updateTime: 'string',
      updateTimeValue: 'string',
      vcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSparkJobResponseDataResult extends $tea.Model {
  pageNumber: string;
  pageSize: string;
  totalCount: string;
  jobList: ListSparkJobResponseDataResultJobList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      jobList: 'JobList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
      jobList: { 'type': 'array', 'itemType': ListSparkJobResponseDataResultJobList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetMainPasswordResponseAccount extends $tea.Model {
  userName: string;
  password: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountListResponseData extends $tea.Model {
  userName: string;
  role: string;
  shortName: string;
  remark: string;
  ramUid: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      role: 'Role',
      shortName: 'ShortName',
      remark: 'Remark',
      ramUid: 'RamUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      role: 'string',
      shortName: 'string',
      remark: 'string',
      ramUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAccountResponseAccount extends $tea.Model {
  userName: string;
  password: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAccountPasswordResponseAccount extends $tea.Model {
  userName: string;
  password: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEndPointListResponseEndPointList extends $tea.Model {
  endPointID: string;
  zone: string;
  vSwitch: string;
  status: string;
  vpcID: string;
  host: string;
  domainURL: string;
  networkType: string;
  allowIP: string;
  port: string;
  product: string;
  static names(): { [key: string]: string } {
    return {
      endPointID: 'endPointID',
      zone: 'zone',
      vSwitch: 'vSwitch',
      status: 'status',
      vpcID: 'vpcID',
      host: 'host',
      domainURL: 'domainURL',
      networkType: 'networkType',
      allowIP: 'allowIP',
      port: 'port',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endPointID: 'string',
      zone: 'string',
      vSwitch: 'string',
      status: 'string',
      vpcID: 'string',
      host: 'string',
      domainURL: 'string',
      networkType: 'string',
      allowIP: 'string',
      port: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddEndPointResponseEndPointInfo extends $tea.Model {
  domainURL: string;
  host: string;
  port: string;
  networkType: string;
  vpcID: string;
  vSwitch: string;
  zone: string;
  allowIP: string;
  endPointID: string;
  status: string;
  product: string;
  static names(): { [key: string]: string } {
    return {
      domainURL: 'domainURL',
      host: 'host',
      port: 'port',
      networkType: 'networkType',
      vpcID: 'vpcID',
      vSwitch: 'vSwitch',
      zone: 'zone',
      allowIP: 'allowIP',
      endPointID: 'endPointID',
      status: 'status',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainURL: 'string',
      host: 'string',
      port: 'string',
      networkType: 'string',
      vpcID: 'string',
      vSwitch: 'string',
      zone: 'string',
      allowIP: 'string',
      endPointID: 'string',
      status: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndPointResponseEndPointInfo extends $tea.Model {
  endPointID: string;
  domainURL: string;
  host: string;
  port: string;
  networkType: string;
  vpcID: string;
  vSwitch: string;
  zone: string;
  allowIP: string;
  status: string;
  product: string;
  static names(): { [key: string]: string } {
    return {
      endPointID: 'endPointID',
      domainURL: 'domainURL',
      host: 'host',
      port: 'port',
      networkType: 'networkType',
      vpcID: 'vpcID',
      vSwitch: 'vSwitch',
      zone: 'zone',
      allowIP: 'allowIP',
      status: 'status',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endPointID: 'string',
      domainURL: 'string',
      host: 'string',
      port: 'string',
      networkType: 'string',
      vpcID: 'string',
      vSwitch: 'string',
      zone: 'string',
      allowIP: 'string',
      status: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEndPointByDomainResponseEndPointInfo extends $tea.Model {
  endPointID: string;
  domainURL: string;
  host: string;
  port: string;
  networkType: string;
  vpcID: string;
  vSwitch: string;
  zone: string;
  allowIP: string;
  cloudInstanceID: string;
  product: string;
  static names(): { [key: string]: string } {
    return {
      endPointID: 'endPointID',
      domainURL: 'domainURL',
      host: 'host',
      port: 'port',
      networkType: 'networkType',
      vpcID: 'vpcID',
      vSwitch: 'vSwitch',
      zone: 'zone',
      allowIP: 'allowIP',
      cloudInstanceID: 'cloudInstanceID',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endPointID: 'string',
      domainURL: 'string',
      host: 'string',
      port: 'string',
      networkType: 'string',
      vpcID: 'string',
      vSwitch: 'string',
      zone: 'string',
      allowIP: 'string',
      cloudInstanceID: 'string',
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
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


  async validateVirtualClusterNameWithOptions(request: ValidateVirtualClusterNameRequest, runtime: $Util.RuntimeOptions): Promise<ValidateVirtualClusterNameResponse> {
    Util.validateModel(request);
    return $tea.cast<ValidateVirtualClusterNameResponse>(await this.doRequest("ValidateVirtualClusterName", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new ValidateVirtualClusterNameResponse({}));
  }

  async validateVirtualClusterName(request: ValidateVirtualClusterNameRequest): Promise<ValidateVirtualClusterNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validateVirtualClusterNameWithOptions(request, runtime);
  }

  async upgradeInstanceWithOptions(request: UpgradeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<UpgradeInstanceResponse>(await this.doRequest("UpgradeInstance", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new UpgradeInstanceResponse({}));
  }

  async upgradeInstance(request: UpgradeInstanceRequest): Promise<UpgradeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeInstanceWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateInstanceResponse>(await this.doRequest("CreateInstance", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async releaseInstanceWithOptions(request: ReleaseInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ReleaseInstanceResponse> {
    Util.validateModel(request);
    return $tea.cast<ReleaseInstanceResponse>(await this.doRequest("ReleaseInstance", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new ReleaseInstanceResponse({}));
  }

  async releaseInstance(request: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.releaseInstanceWithOptions(request, runtime);
  }

  async getJobDetailWithOptions(request: GetJobDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetJobDetailResponse> {
    Util.validateModel(request);
    return $tea.cast<GetJobDetailResponse>(await this.doRequest("GetJobDetail", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new GetJobDetailResponse({}));
  }

  async getJobDetail(request: GetJobDetailRequest): Promise<GetJobDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobDetailWithOptions(request, runtime);
  }

  async getJobStatusWithOptions(request: GetJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetJobStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<GetJobStatusResponse>(await this.doRequest("GetJobStatus", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new GetJobStatusResponse({}));
  }

  async getJobStatus(request: GetJobStatusRequest): Promise<GetJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobStatusWithOptions(request, runtime);
  }

  async killSparkJobWithOptions(request: KillSparkJobRequest, runtime: $Util.RuntimeOptions): Promise<KillSparkJobResponse> {
    Util.validateModel(request);
    return $tea.cast<KillSparkJobResponse>(await this.doRequest("KillSparkJob", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new KillSparkJobResponse({}));
  }

  async killSparkJob(request: KillSparkJobRequest): Promise<KillSparkJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.killSparkJobWithOptions(request, runtime);
  }

  async submitSparkJobWithOptions(request: SubmitSparkJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitSparkJobResponse> {
    Util.validateModel(request);
    return $tea.cast<SubmitSparkJobResponse>(await this.doRequest("SubmitSparkJob", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new SubmitSparkJobResponse({}));
  }

  async submitSparkJob(request: SubmitSparkJobRequest): Promise<SubmitSparkJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitSparkJobWithOptions(request, runtime);
  }

  async getJobLogWithOptions(request: GetJobLogRequest, runtime: $Util.RuntimeOptions): Promise<GetJobLogResponse> {
    Util.validateModel(request);
    return $tea.cast<GetJobLogResponse>(await this.doRequest("GetJobLog", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new GetJobLogResponse({}));
  }

  async getJobLog(request: GetJobLogRequest): Promise<GetJobLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobLogWithOptions(request, runtime);
  }

  async listSparkJobWithOptions(request: ListSparkJobRequest, runtime: $Util.RuntimeOptions): Promise<ListSparkJobResponse> {
    Util.validateModel(request);
    return $tea.cast<ListSparkJobResponse>(await this.doRequest("ListSparkJob", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new ListSparkJobResponse({}));
  }

  async listSparkJob(request: ListSparkJobRequest): Promise<ListSparkJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSparkJobWithOptions(request, runtime);
  }

  async getAllowIPWithOptions(request: GetAllowIPRequest, runtime: $Util.RuntimeOptions): Promise<GetAllowIPResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAllowIPResponse>(await this.doRequest("GetAllowIP", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new GetAllowIPResponse({}));
  }

  async getAllowIP(request: GetAllowIPRequest): Promise<GetAllowIPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllowIPWithOptions(request, runtime);
  }

  async setAllowIPWithOptions(request: SetAllowIPRequest, runtime: $Util.RuntimeOptions): Promise<SetAllowIPResponse> {
    Util.validateModel(request);
    return $tea.cast<SetAllowIPResponse>(await this.doRequest("SetAllowIP", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new SetAllowIPResponse({}));
  }

  async setAllowIP(request: SetAllowIPRequest): Promise<SetAllowIPResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAllowIPWithOptions(request, runtime);
  }

  async resetMainPasswordWithOptions(request: ResetMainPasswordRequest, runtime: $Util.RuntimeOptions): Promise<ResetMainPasswordResponse> {
    Util.validateModel(request);
    return $tea.cast<ResetMainPasswordResponse>(await this.doRequest("ResetMainPassword", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new ResetMainPasswordResponse({}));
  }

  async resetMainPassword(request: ResetMainPasswordRequest): Promise<ResetMainPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetMainPasswordWithOptions(request, runtime);
  }

  async unSubscribeRegionWithOptions(request: UnSubscribeRegionRequest, runtime: $Util.RuntimeOptions): Promise<UnSubscribeRegionResponse> {
    Util.validateModel(request);
    return $tea.cast<UnSubscribeRegionResponse>(await this.doRequest("UnSubscribeRegion", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new UnSubscribeRegionResponse({}));
  }

  async unSubscribeRegion(request: UnSubscribeRegionRequest): Promise<UnSubscribeRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unSubscribeRegionWithOptions(request, runtime);
  }

  async queryAccountListWithOptions(request: QueryAccountListRequest, runtime: $Util.RuntimeOptions): Promise<QueryAccountListResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryAccountListResponse>(await this.doRequest("QueryAccountList", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new QueryAccountListResponse({}));
  }

  async queryAccountList(request: QueryAccountListRequest): Promise<QueryAccountListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryAccountListWithOptions(request, runtime);
  }

  async deleteAccountWithOptions(request: DeleteAccountRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAccountResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteAccountResponse>(await this.doRequest("DeleteAccount", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new DeleteAccountResponse({}));
  }

  async deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  async addAccountWithOptions(request: AddAccountRequest, runtime: $Util.RuntimeOptions): Promise<AddAccountResponse> {
    Util.validateModel(request);
    return $tea.cast<AddAccountResponse>(await this.doRequest("AddAccount", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new AddAccountResponse({}));
  }

  async addAccount(request: AddAccountRequest): Promise<AddAccountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAccountWithOptions(request, runtime);
  }

  async updateAccountPasswordWithOptions(request: UpdateAccountPasswordRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAccountPasswordResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateAccountPasswordResponse>(await this.doRequest("UpdateAccountPassword", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new UpdateAccountPasswordResponse({}));
  }

  async updateAccountPassword(request: UpdateAccountPasswordRequest): Promise<UpdateAccountPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAccountPasswordWithOptions(request, runtime);
  }

  async removeEndPointWithOptions(request: RemoveEndPointRequest, runtime: $Util.RuntimeOptions): Promise<RemoveEndPointResponse> {
    Util.validateModel(request);
    return $tea.cast<RemoveEndPointResponse>(await this.doRequest("RemoveEndPoint", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new RemoveEndPointResponse({}));
  }

  async removeEndPoint(request: RemoveEndPointRequest): Promise<RemoveEndPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeEndPointWithOptions(request, runtime);
  }

  async queryEndPointListWithOptions(request: QueryEndPointListRequest, runtime: $Util.RuntimeOptions): Promise<QueryEndPointListResponse> {
    Util.validateModel(request);
    return $tea.cast<QueryEndPointListResponse>(await this.doRequest("QueryEndPointList", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new QueryEndPointListResponse({}));
  }

  async queryEndPointList(request: QueryEndPointListRequest): Promise<QueryEndPointListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryEndPointListWithOptions(request, runtime);
  }

  async addEndPointWithOptions(request: AddEndPointRequest, runtime: $Util.RuntimeOptions): Promise<AddEndPointResponse> {
    Util.validateModel(request);
    return $tea.cast<AddEndPointResponse>(await this.doRequest("AddEndPoint", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new AddEndPointResponse({}));
  }

  async addEndPoint(request: AddEndPointRequest): Promise<AddEndPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addEndPointWithOptions(request, runtime);
  }

  async getEndPointWithOptions(request: GetEndPointRequest, runtime: $Util.RuntimeOptions): Promise<GetEndPointResponse> {
    Util.validateModel(request);
    return $tea.cast<GetEndPointResponse>(await this.doRequest("GetEndPoint", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new GetEndPointResponse({}));
  }

  async getEndPoint(request: GetEndPointRequest): Promise<GetEndPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEndPointWithOptions(request, runtime);
  }

  async getEndPointByDomainWithOptions(request: GetEndPointByDomainRequest, runtime: $Util.RuntimeOptions): Promise<GetEndPointByDomainResponse> {
    Util.validateModel(request);
    return $tea.cast<GetEndPointByDomainResponse>(await this.doRequest("GetEndPointByDomain", "HTTPS", "POST", "2018-06-19", "AK", null, $tea.toMap(request), runtime), new GetEndPointByDomainResponse({}));
  }

  async getEndPointByDomain(request: GetEndPointByDomainRequest): Promise<GetEndPointByDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEndPointByDomainWithOptions(request, runtime);
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

}
