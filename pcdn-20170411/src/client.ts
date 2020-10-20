// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class StopDomainRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  domain: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDomainResponse extends $tea.Model {
  requestId: string;
  code: number;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDomainRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  domain: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDomainResponse extends $tea.Model {
  requestId: string;
  code: number;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  domain: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponse extends $tea.Model {
  requestId: string;
  code: number;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  businessType: string;
  domain: string;
  liveFormat?: string;
  sliceDomain?: string;
  region?: string;
  demoUrls?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      businessType: 'BusinessType',
      domain: 'Domain',
      liveFormat: 'LiveFormat',
      sliceDomain: 'SliceDomain',
      region: 'Region',
      demoUrls: 'DemoUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      businessType: 'string',
      domain: 'string',
      liveFormat: 'string',
      sliceDomain: 'string',
      region: 'string',
      demoUrls: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainResponse extends $tea.Model {
  requestId: string;
  code: number;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceTrafficDataRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  dataInterval?: number;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      dataInterval: 'DataInterval',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      dataInterval: 'number',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceTrafficDataResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetBalanceTrafficDataResponseDataList;
  labels: GetBalanceTrafficDataResponseLabels;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetBalanceTrafficDataResponseDataList,
      labels: GetBalanceTrafficDataResponseLabels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPcdnControlRuleRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  name: string;
  region: string;
  ispName: string;
  platformType: string;
  businessType: string;
  market: string;
  appVersion: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      name: 'Name',
      region: 'Region',
      ispName: 'IspName',
      platformType: 'PlatformType',
      businessType: 'BusinessType',
      market: 'Market',
      appVersion: 'AppVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      name: 'string',
      region: 'string',
      ispName: 'string',
      platformType: 'string',
      businessType: 'string',
      market: 'string',
      appVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPcdnControlRuleResponse extends $tea.Model {
  requestId: string;
  code: number;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddConsumerRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  businessType: string;
  company: string;
  site: string;
  requirement: string;
  mobile: string;
  ca?: string;
  operator?: string;
  email?: string;
  bandwidthRequirement?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      businessType: 'BusinessType',
      company: 'Company',
      site: 'Site',
      requirement: 'Requirement',
      mobile: 'Mobile',
      ca: 'Ca',
      operator: 'Operator',
      email: 'Email',
      bandwidthRequirement: 'BandwidthRequirement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      businessType: 'string',
      company: 'string',
      site: 'string',
      requirement: 'string',
      mobile: 'string',
      ca: 'string',
      operator: 'string',
      email: 'string',
      bandwidthRequirement: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddConsumerResponse extends $tea.Model {
  requestId: string;
  code: number;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessDataRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  domain?: string;
  region: string;
  ispName: string;
  platformType: string;
  businessType: string;
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      domain: 'Domain',
      region: 'Region',
      ispName: 'IspName',
      platformType: 'PlatformType',
      businessType: 'BusinessType',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      domain: 'string',
      region: 'string',
      ispName: 'string',
      platformType: 'string',
      businessType: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessDataResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetAccessDataResponseDataList;
  labels: GetAccessDataResponseLabels;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetAccessDataResponseDataList,
      labels: GetAccessDataResponseLabels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnablePcdnControlRuleRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnablePcdnControlRuleResponse extends $tea.Model {
  requestId: string;
  code: number;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditPcdnControlRuleRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  name: string;
  resourceId: string;
  region: string;
  ispName: string;
  platformType: string;
  businessType: string;
  market: string;
  appVersion: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      name: 'Name',
      resourceId: 'ResourceId',
      region: 'Region',
      ispName: 'IspName',
      platformType: 'PlatformType',
      businessType: 'BusinessType',
      market: 'Market',
      appVersion: 'AppVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      name: 'string',
      resourceId: 'string',
      region: 'string',
      ispName: 'string',
      platformType: 'string',
      businessType: 'string',
      market: 'string',
      appVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditPcdnControlRuleResponse extends $tea.Model {
  requestId: string;
  code: number;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisablePcdnControlRuleRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisablePcdnControlRuleResponse extends $tea.Model {
  requestId: string;
  code: number;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePcdnControlRuleRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePcdnControlRuleResponse extends $tea.Model {
  requestId: string;
  code: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllPlatformTypesRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllPlatformTypesResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetAllPlatformTypesResponseDataList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetAllPlatformTypesResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllMarketsRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllMarketsResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetAllMarketsResponseDataList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetAllMarketsResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllIspRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllIspResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetAllIspResponseDataList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetAllIspResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllAppVersionsRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllAppVersionsResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetAllAppVersionsResponseDataList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetAllAppVersionsResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerStatusRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerStatusResponse extends $tea.Model {
  requestId: string;
  code: number;
  integreatedMode: number;
  inservice: boolean;
  realtimeMonitor: boolean;
  liveMonitor: boolean;
  cdnUrlRedirectFlag: boolean;
  businessType: string;
  audit: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      integreatedMode: 'IntegreatedMode',
      inservice: 'Inservice',
      realtimeMonitor: 'RealtimeMonitor',
      liveMonitor: 'LiveMonitor',
      cdnUrlRedirectFlag: 'CdnUrlRedirectFlag',
      businessType: 'BusinessType',
      audit: 'Audit',
      comment: 'Comment',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      integreatedMode: 'number',
      inservice: 'boolean',
      realtimeMonitor: 'boolean',
      liveMonitor: 'boolean',
      cdnUrlRedirectFlag: 'boolean',
      businessType: 'string',
      audit: 'number',
      comment: 'string',
      createdAt: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientsRatioRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientsRatioResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetClientsRatioResponseDataList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetClientsRatioResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBandwidthDataRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  domain?: string;
  region: string;
  ispName: string;
  platformType: string;
  businessType: string;
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      domain: 'Domain',
      region: 'Region',
      ispName: 'IspName',
      platformType: 'PlatformType',
      businessType: 'BusinessType',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      domain: 'string',
      region: 'string',
      ispName: 'string',
      platformType: 'string',
      businessType: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBandwidthDataResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetBandwidthDataResponseDataList;
  labels: GetBandwidthDataResponseLabels;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetBandwidthDataResponseDataList,
      labels: GetBandwidthDataResponseLabels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceBandwidthDataRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  dataInterval?: number;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      dataInterval: 'DataInterval',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      dataInterval: 'number',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceBandwidthDataResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetBalanceBandwidthDataResponseDataList;
  labels: GetBalanceBandwidthDataResponseLabels;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetBalanceBandwidthDataResponseDataList,
      labels: GetBalanceBandwidthDataResponseLabels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlRulesRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  page: string;
  pageSize: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      page: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlRulesResponse extends $tea.Model {
  requestId: string;
  code: number;
  settingList: GetControlRulesResponseSettingList;
  pager: GetControlRulesResponsePager;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      settingList: 'SettingList',
      pager: 'Pager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      settingList: GetControlRulesResponseSettingList,
      pager: GetControlRulesResponsePager,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainCountRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainCountResponse extends $tea.Model {
  requestId: string;
  code: number;
  data: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      data: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentModeRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentModeResponse extends $tea.Model {
  requestId: string;
  code: number;
  modeCode: number;
  paddingModeCode: number;
  effectiveAt: number;
  estimateBandwidth: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      modeCode: 'ModeCode',
      paddingModeCode: 'PaddingModeCode',
      effectiveAt: 'EffectiveAt',
      estimateBandwidth: 'EstimateBandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      modeCode: 'number',
      paddingModeCode: 'number',
      effectiveAt: 'number',
      estimateBandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoverRateDataRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  domain?: string;
  region: string;
  ispName: string;
  platformType: string;
  businessType: string;
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      domain: 'Domain',
      region: 'Region',
      ispName: 'IspName',
      platformType: 'PlatformType',
      businessType: 'BusinessType',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      domain: 'string',
      region: 'string',
      ispName: 'string',
      platformType: 'string',
      businessType: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoverRateDataResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetCoverRateDataResponseDataList;
  labels: GetCoverRateDataResponseLabels;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetCoverRateDataResponseDataList,
      labels: GetCoverRateDataResponseLabels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeeHistoryRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  page: string;
  pageSize: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      page: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeeHistoryResponse extends $tea.Model {
  requestId: string;
  code: number;
  feeList: GetFeeHistoryResponseFeeList;
  pager: GetFeeHistoryResponsePager;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      feeList: 'FeeList',
      pager: 'Pager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      feeList: GetFeeHistoryResponseFeeList,
      pager: GetFeeHistoryResponsePager,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExpenseSummaryRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  startDate?: string;
  endDate?: string;
  domain?: string;
  region?: string;
  ispName?: string;
  platformType?: string;
  businessType?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      startDate: 'StartDate',
      endDate: 'EndDate',
      domain: 'Domain',
      region: 'Region',
      ispName: 'IspName',
      platformType: 'PlatformType',
      businessType: 'BusinessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      startDate: 'string',
      endDate: 'string',
      domain: 'string',
      region: 'string',
      ispName: 'string',
      platformType: 'string',
      businessType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExpenseSummaryResponse extends $tea.Model {
  requestId: string;
  code: number;
  data: GetExpenseSummaryResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      data: GetExpenseSummaryResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainsRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  page: string;
  pageSize: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      page: 'Page',
      pageSize: 'PageSize',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      page: 'string',
      pageSize: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainsResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetDomainsResponseDataList;
  pager: GetDomainsResponsePager;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
      pager: 'Pager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetDomainsResponseDataList,
      pager: GetDomainsResponsePager,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsListRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  domain?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      domain: 'Domain',
      date: 'Date',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      domain: 'string',
      date: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsListResponse extends $tea.Model {
  requestId: string;
  code: number;
  logList: GetLogsListResponseLogList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      logList: 'LogList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      logList: GetLogsListResponseLogList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFluencyDataRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  domain?: string;
  region: string;
  ispName: string;
  platformType: string;
  businessType: string;
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      domain: 'Domain',
      region: 'Region',
      ispName: 'IspName',
      platformType: 'PlatformType',
      businessType: 'BusinessType',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      domain: 'string',
      region: 'string',
      ispName: 'string',
      platformType: 'string',
      businessType: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFluencyDataResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetFluencyDataResponseDataList;
  labels: GetFluencyDataResponseLabels;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetFluencyDataResponseDataList,
      labels: GetFluencyDataResponseLabels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFirstFrameDelayDataRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  domain?: string;
  region: string;
  ispName: string;
  platformType: string;
  businessType: string;
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      domain: 'Domain',
      region: 'Region',
      ispName: 'IspName',
      platformType: 'PlatformType',
      businessType: 'BusinessType',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      domain: 'string',
      region: 'string',
      ispName: 'string',
      platformType: 'string',
      businessType: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFirstFrameDelayDataResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetFirstFrameDelayDataResponseDataList;
  labels: GetFirstFrameDelayDataResponseLabels;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetFirstFrameDelayDataResponseDataList,
      labels: GetFirstFrameDelayDataResponseLabels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenListRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenListResponse extends $tea.Model {
  requestId: string;
  code: number;
  tokenList: GetTokenListResponseTokenList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      tokenList: 'TokenList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      tokenList: GetTokenListResponseTokenList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareRateDataRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  domain?: string;
  region: string;
  ispName: string;
  platformType: string;
  businessType: string;
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      domain: 'Domain',
      region: 'Region',
      ispName: 'IspName',
      platformType: 'PlatformType',
      businessType: 'BusinessType',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      domain: 'string',
      region: 'string',
      ispName: 'string',
      platformType: 'string',
      businessType: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareRateDataResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetShareRateDataResponseDataList;
  labels: GetShareRateDataResponseLabels;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetShareRateDataResponseDataList,
      labels: GetShareRateDataResponseLabels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficDataRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  domain?: string;
  region: string;
  ispName: string;
  platformType: string;
  businessType: string;
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
      domain: 'Domain',
      region: 'Region',
      ispName: 'IspName',
      platformType: 'PlatformType',
      businessType: 'BusinessType',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
      domain: 'string',
      region: 'string',
      ispName: 'string',
      platformType: 'string',
      businessType: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficDataResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetTrafficDataResponseDataList;
  labels: GetTrafficDataResponseLabels;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetTrafficDataResponseDataList,
      labels: GetTrafficDataResponseLabels,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficByRegionRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficByRegionResponse extends $tea.Model {
  requestId: string;
  code: number;
  trafficDataList: GetTrafficByRegionResponseTrafficDataList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      trafficDataList: 'TrafficDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      trafficDataList: GetTrafficByRegionResponseTrafficDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllRegionsRequest extends $tea.Model {
  securityToken?: string;
  version: string;
  static names(): { [key: string]: string } {
    return {
      securityToken: 'SecurityToken',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityToken: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllRegionsResponse extends $tea.Model {
  requestId: string;
  code: number;
  dataList: GetAllRegionsResponseDataList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      dataList: 'DataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'number',
      dataList: GetAllRegionsResponseDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceTrafficDataResponseDataListUsageDataValues extends $tea.Model {
  values: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceTrafficDataResponseDataListUsageData extends $tea.Model {
  date: string;
  values: GetBalanceTrafficDataResponseDataListUsageDataValues;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      values: GetBalanceTrafficDataResponseDataListUsageDataValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceTrafficDataResponseDataList extends $tea.Model {
  usageData: GetBalanceTrafficDataResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetBalanceTrafficDataResponseDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceTrafficDataResponseLabels extends $tea.Model {
  label: string[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessDataResponseDataListUsageDataValues extends $tea.Model {
  values: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessDataResponseDataListUsageData extends $tea.Model {
  date: string;
  values: GetAccessDataResponseDataListUsageDataValues;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      values: GetAccessDataResponseDataListUsageDataValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessDataResponseDataList extends $tea.Model {
  usageData: GetAccessDataResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetAccessDataResponseDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessDataResponseLabels extends $tea.Model {
  label: string[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllPlatformTypesResponseDataListUsageData extends $tea.Model {
  code: number;
  name: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllPlatformTypesResponseDataList extends $tea.Model {
  usageData: GetAllPlatformTypesResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetAllPlatformTypesResponseDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllMarketsResponseDataListUsageData extends $tea.Model {
  code: number;
  marketCode: string;
  marketName: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      marketCode: 'MarketCode',
      marketName: 'MarketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      marketCode: 'string',
      marketName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllMarketsResponseDataList extends $tea.Model {
  usageData: GetAllMarketsResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetAllMarketsResponseDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllIspResponseDataListUsageData extends $tea.Model {
  nameCn: string;
  nameEn: string;
  resourceId: string;
  static names(): { [key: string]: string } {
    return {
      nameCn: 'NameCn',
      nameEn: 'NameEn',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameCn: 'string',
      nameEn: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllIspResponseDataList extends $tea.Model {
  usageData: GetAllIspResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetAllIspResponseDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllAppVersionsResponseDataListUsageData extends $tea.Model {
  code: number;
  value: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllAppVersionsResponseDataList extends $tea.Model {
  usageData: GetAllAppVersionsResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetAllAppVersionsResponseDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientsRatioResponseDataListUsageData extends $tea.Model {
  name: string;
  rate: string;
  value: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      rate: 'Rate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      rate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientsRatioResponseDataList extends $tea.Model {
  usageData: GetClientsRatioResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetClientsRatioResponseDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBandwidthDataResponseDataListUsageDataValues extends $tea.Model {
  values: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBandwidthDataResponseDataListUsageData extends $tea.Model {
  date: string;
  values: GetBandwidthDataResponseDataListUsageDataValues;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      values: GetBandwidthDataResponseDataListUsageDataValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBandwidthDataResponseDataList extends $tea.Model {
  usageData: GetBandwidthDataResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetBandwidthDataResponseDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBandwidthDataResponseLabels extends $tea.Model {
  label: string[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceBandwidthDataResponseDataListUsageDataValues extends $tea.Model {
  values: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceBandwidthDataResponseDataListUsageData extends $tea.Model {
  date: string;
  values: GetBalanceBandwidthDataResponseDataListUsageDataValues;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      values: GetBalanceBandwidthDataResponseDataListUsageDataValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceBandwidthDataResponseDataList extends $tea.Model {
  usageData: GetBalanceBandwidthDataResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetBalanceBandwidthDataResponseDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceBandwidthDataResponseLabels extends $tea.Model {
  label: string[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlRulesResponseSettingListSetting extends $tea.Model {
  platformType: string;
  appVersion: string;
  ispName: string;
  businessType: string;
  clientId: string;
  createdAt: string;
  marketType: string;
  name: string;
  onoff: boolean;
  usable: boolean;
  region: string;
  resourceId: string;
  updatedAt: string;
  static names(): { [key: string]: string } {
    return {
      platformType: 'PlatformType',
      appVersion: 'AppVersion',
      ispName: 'IspName',
      businessType: 'BusinessType',
      clientId: 'ClientId',
      createdAt: 'CreatedAt',
      marketType: 'MarketType',
      name: 'Name',
      onoff: 'Onoff',
      usable: 'Usable',
      region: 'Region',
      resourceId: 'ResourceId',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platformType: 'string',
      appVersion: 'string',
      ispName: 'string',
      businessType: 'string',
      clientId: 'string',
      createdAt: 'string',
      marketType: 'string',
      name: 'string',
      onoff: 'boolean',
      usable: 'boolean',
      region: 'string',
      resourceId: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlRulesResponseSettingList extends $tea.Model {
  setting: GetControlRulesResponseSettingListSetting[];
  static names(): { [key: string]: string } {
    return {
      setting: 'Setting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      setting: { 'type': 'array', 'itemType': GetControlRulesResponseSettingListSetting },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlRulesResponsePager extends $tea.Model {
  page: number;
  total: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      total: 'Total',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      total: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoverRateDataResponseDataListUsageDataValues extends $tea.Model {
  values: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoverRateDataResponseDataListUsageData extends $tea.Model {
  date: string;
  values: GetCoverRateDataResponseDataListUsageDataValues;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      values: GetCoverRateDataResponseDataListUsageDataValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoverRateDataResponseDataList extends $tea.Model {
  usageData: GetCoverRateDataResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetCoverRateDataResponseDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoverRateDataResponseLabels extends $tea.Model {
  label: string[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeeHistoryResponseFeeListFee extends $tea.Model {
  date: string;
  mode: string;
  totalBandwidth: number;
  levelTwoBandwidth: number;
  levelThreeBandwidth: number;
  totalTraffic: number;
  levelTwoTraffic: number;
  levelThreeTraffic: number;
  timeSpan: string;
  businessType: string;
  startDate: string;
  endDate: string;
  resourceId: string;
  flowOut: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      mode: 'Mode',
      totalBandwidth: 'TotalBandwidth',
      levelTwoBandwidth: 'LevelTwoBandwidth',
      levelThreeBandwidth: 'LevelThreeBandwidth',
      totalTraffic: 'TotalTraffic',
      levelTwoTraffic: 'LevelTwoTraffic',
      levelThreeTraffic: 'LevelThreeTraffic',
      timeSpan: 'TimeSpan',
      businessType: 'BusinessType',
      startDate: 'StartDate',
      endDate: 'EndDate',
      resourceId: 'ResourceId',
      flowOut: 'FlowOut',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      mode: 'string',
      totalBandwidth: 'number',
      levelTwoBandwidth: 'number',
      levelThreeBandwidth: 'number',
      totalTraffic: 'number',
      levelTwoTraffic: 'number',
      levelThreeTraffic: 'number',
      timeSpan: 'string',
      businessType: 'string',
      startDate: 'string',
      endDate: 'string',
      resourceId: 'string',
      flowOut: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeeHistoryResponseFeeList extends $tea.Model {
  fee: GetFeeHistoryResponseFeeListFee[];
  static names(): { [key: string]: string } {
    return {
      fee: 'Fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fee: { 'type': 'array', 'itemType': GetFeeHistoryResponseFeeListFee },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeeHistoryResponsePager extends $tea.Model {
  page: number;
  total: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      total: 'Total',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      total: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExpenseSummaryResponseData extends $tea.Model {
  totalTraffic: number;
  totalUV: number;
  shareRate: number;
  coverRate: number;
  forecastFluency: number;
  topBandwidth: number;
  static names(): { [key: string]: string } {
    return {
      totalTraffic: 'TotalTraffic',
      totalUV: 'TotalUV',
      shareRate: 'ShareRate',
      coverRate: 'CoverRate',
      forecastFluency: 'ForecastFluency',
      topBandwidth: 'TopBandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalTraffic: 'number',
      totalUV: 'number',
      shareRate: 'number',
      coverRate: 'number',
      forecastFluency: 'number',
      topBandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainsResponseDataListUsageData extends $tea.Model {
  resourceId: string;
  domain: string;
  businessType: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  sliceFormat: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      domain: 'Domain',
      businessType: 'BusinessType',
      status: 'Status',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
      sliceFormat: 'SliceFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      domain: 'string',
      businessType: 'string',
      status: 'boolean',
      createdAt: 'string',
      updatedAt: 'string',
      sliceFormat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainsResponseDataList extends $tea.Model {
  usageData: GetDomainsResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetDomainsResponseDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainsResponsePager extends $tea.Model {
  page: number;
  total: number;
  pageSize: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      total: 'Total',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      total: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsListResponseLogListLog extends $tea.Model {
  url: string;
  fileName: string;
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      fileName: 'FileName',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      fileName: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsListResponseLogList extends $tea.Model {
  log: GetLogsListResponseLogListLog[];
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: { 'type': 'array', 'itemType': GetLogsListResponseLogListLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFluencyDataResponseDataListUsageDataValues extends $tea.Model {
  values: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFluencyDataResponseDataListUsageData extends $tea.Model {
  date: string;
  values: GetFluencyDataResponseDataListUsageDataValues;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      values: GetFluencyDataResponseDataListUsageDataValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFluencyDataResponseDataList extends $tea.Model {
  usageData: GetFluencyDataResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetFluencyDataResponseDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFluencyDataResponseLabels extends $tea.Model {
  label: string[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFirstFrameDelayDataResponseDataListUsageDataValues extends $tea.Model {
  values: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFirstFrameDelayDataResponseDataListUsageData extends $tea.Model {
  date: string;
  values: GetFirstFrameDelayDataResponseDataListUsageDataValues;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      values: GetFirstFrameDelayDataResponseDataListUsageDataValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFirstFrameDelayDataResponseDataList extends $tea.Model {
  usageData: GetFirstFrameDelayDataResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetFirstFrameDelayDataResponseDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFirstFrameDelayDataResponseLabels extends $tea.Model {
  label: string[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenListResponseTokenListToken extends $tea.Model {
  clientId: string;
  resourceId: string;
  platformName: string;
  platformType: string;
  token: string;
  createdAt: string;
  updatedAt: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      resourceId: 'ResourceId',
      platformName: 'PlatformName',
      platformType: 'PlatformType',
      token: 'Token',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      resourceId: 'string',
      platformName: 'string',
      platformType: 'string',
      token: 'string',
      createdAt: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenListResponseTokenList extends $tea.Model {
  token: GetTokenListResponseTokenListToken[];
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: { 'type': 'array', 'itemType': GetTokenListResponseTokenListToken },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareRateDataResponseDataListUsageDataValues extends $tea.Model {
  values: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareRateDataResponseDataListUsageData extends $tea.Model {
  date: string;
  values: GetShareRateDataResponseDataListUsageDataValues;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      values: GetShareRateDataResponseDataListUsageDataValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareRateDataResponseDataList extends $tea.Model {
  usageData: GetShareRateDataResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetShareRateDataResponseDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareRateDataResponseLabels extends $tea.Model {
  label: string[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficDataResponseDataListUsageDataValues extends $tea.Model {
  values: string[];
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficDataResponseDataListUsageData extends $tea.Model {
  date: string;
  values: GetTrafficDataResponseDataListUsageDataValues;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      values: GetTrafficDataResponseDataListUsageDataValues,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficDataResponseDataList extends $tea.Model {
  usageData: GetTrafficDataResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetTrafficDataResponseDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficDataResponseLabels extends $tea.Model {
  label: string[];
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficByRegionResponseTrafficDataListTrafficData extends $tea.Model {
  name: string;
  traffic: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      traffic: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficByRegionResponseTrafficDataList extends $tea.Model {
  trafficData: GetTrafficByRegionResponseTrafficDataListTrafficData[];
  static names(): { [key: string]: string } {
    return {
      trafficData: 'TrafficData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficData: { 'type': 'array', 'itemType': GetTrafficByRegionResponseTrafficDataListTrafficData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllRegionsResponseDataListUsageData extends $tea.Model {
  code: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllRegionsResponseDataList extends $tea.Model {
  usageData: GetAllRegionsResponseDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetAllRegionsResponseDataListUsageData },
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("pcdn", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async stopDomainWithOptions(request: StopDomainRequest, runtime: $Util.RuntimeOptions): Promise<StopDomainResponse> {
    Util.validateModel(request);
    return $tea.cast<StopDomainResponse>(await this.doRequest("StopDomain", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new StopDomainResponse({}));
  }

  async stopDomain(request: StopDomainRequest): Promise<StopDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDomainWithOptions(request, runtime);
  }

  async startDomainWithOptions(request: StartDomainRequest, runtime: $Util.RuntimeOptions): Promise<StartDomainResponse> {
    Util.validateModel(request);
    return $tea.cast<StartDomainResponse>(await this.doRequest("StartDomain", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new StartDomainResponse({}));
  }

  async startDomain(request: StartDomainRequest): Promise<StartDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDomainWithOptions(request, runtime);
  }

  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDomainResponse>(await this.doRequest("DeleteDomain", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new DeleteDomainResponse({}));
  }

  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  async addDomainWithOptions(request: AddDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddDomainResponse> {
    Util.validateModel(request);
    return $tea.cast<AddDomainResponse>(await this.doRequest("AddDomain", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new AddDomainResponse({}));
  }

  async addDomain(request: AddDomainRequest): Promise<AddDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDomainWithOptions(request, runtime);
  }

  async getBalanceTrafficDataWithOptions(request: GetBalanceTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<GetBalanceTrafficDataResponse> {
    Util.validateModel(request);
    return $tea.cast<GetBalanceTrafficDataResponse>(await this.doRequest("GetBalanceTrafficData", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetBalanceTrafficDataResponse({}));
  }

  async getBalanceTrafficData(request: GetBalanceTrafficDataRequest): Promise<GetBalanceTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBalanceTrafficDataWithOptions(request, runtime);
  }

  async addPcdnControlRuleWithOptions(request: AddPcdnControlRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddPcdnControlRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<AddPcdnControlRuleResponse>(await this.doRequest("AddPcdnControlRule", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new AddPcdnControlRuleResponse({}));
  }

  async addPcdnControlRule(request: AddPcdnControlRuleRequest): Promise<AddPcdnControlRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPcdnControlRuleWithOptions(request, runtime);
  }

  async addConsumerWithOptions(request: AddConsumerRequest, runtime: $Util.RuntimeOptions): Promise<AddConsumerResponse> {
    Util.validateModel(request);
    return $tea.cast<AddConsumerResponse>(await this.doRequest("AddConsumer", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new AddConsumerResponse({}));
  }

  async addConsumer(request: AddConsumerRequest): Promise<AddConsumerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addConsumerWithOptions(request, runtime);
  }

  async getAccessDataWithOptions(request: GetAccessDataRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessDataResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAccessDataResponse>(await this.doRequest("GetAccessData", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetAccessDataResponse({}));
  }

  async getAccessData(request: GetAccessDataRequest): Promise<GetAccessDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessDataWithOptions(request, runtime);
  }

  async enablePcdnControlRuleWithOptions(request: EnablePcdnControlRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnablePcdnControlRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<EnablePcdnControlRuleResponse>(await this.doRequest("EnablePcdnControlRule", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new EnablePcdnControlRuleResponse({}));
  }

  async enablePcdnControlRule(request: EnablePcdnControlRuleRequest): Promise<EnablePcdnControlRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enablePcdnControlRuleWithOptions(request, runtime);
  }

  async editPcdnControlRuleWithOptions(request: EditPcdnControlRuleRequest, runtime: $Util.RuntimeOptions): Promise<EditPcdnControlRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<EditPcdnControlRuleResponse>(await this.doRequest("EditPcdnControlRule", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new EditPcdnControlRuleResponse({}));
  }

  async editPcdnControlRule(request: EditPcdnControlRuleRequest): Promise<EditPcdnControlRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editPcdnControlRuleWithOptions(request, runtime);
  }

  async disablePcdnControlRuleWithOptions(request: DisablePcdnControlRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisablePcdnControlRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DisablePcdnControlRuleResponse>(await this.doRequest("DisablePcdnControlRule", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new DisablePcdnControlRuleResponse({}));
  }

  async disablePcdnControlRule(request: DisablePcdnControlRuleRequest): Promise<DisablePcdnControlRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disablePcdnControlRuleWithOptions(request, runtime);
  }

  async deletePcdnControlRuleWithOptions(request: DeletePcdnControlRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeletePcdnControlRuleResponse> {
    Util.validateModel(request);
    return $tea.cast<DeletePcdnControlRuleResponse>(await this.doRequest("DeletePcdnControlRule", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new DeletePcdnControlRuleResponse({}));
  }

  async deletePcdnControlRule(request: DeletePcdnControlRuleRequest): Promise<DeletePcdnControlRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePcdnControlRuleWithOptions(request, runtime);
  }

  async getAllPlatformTypesWithOptions(request: GetAllPlatformTypesRequest, runtime: $Util.RuntimeOptions): Promise<GetAllPlatformTypesResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAllPlatformTypesResponse>(await this.doRequest("GetAllPlatformTypes", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetAllPlatformTypesResponse({}));
  }

  async getAllPlatformTypes(request: GetAllPlatformTypesRequest): Promise<GetAllPlatformTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllPlatformTypesWithOptions(request, runtime);
  }

  async getAllMarketsWithOptions(request: GetAllMarketsRequest, runtime: $Util.RuntimeOptions): Promise<GetAllMarketsResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAllMarketsResponse>(await this.doRequest("GetAllMarkets", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetAllMarketsResponse({}));
  }

  async getAllMarkets(request: GetAllMarketsRequest): Promise<GetAllMarketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllMarketsWithOptions(request, runtime);
  }

  async getAllIspWithOptions(request: GetAllIspRequest, runtime: $Util.RuntimeOptions): Promise<GetAllIspResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAllIspResponse>(await this.doRequest("GetAllIsp", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetAllIspResponse({}));
  }

  async getAllIsp(request: GetAllIspRequest): Promise<GetAllIspResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllIspWithOptions(request, runtime);
  }

  async getAllAppVersionsWithOptions(request: GetAllAppVersionsRequest, runtime: $Util.RuntimeOptions): Promise<GetAllAppVersionsResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAllAppVersionsResponse>(await this.doRequest("GetAllAppVersions", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetAllAppVersionsResponse({}));
  }

  async getAllAppVersions(request: GetAllAppVersionsRequest): Promise<GetAllAppVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllAppVersionsWithOptions(request, runtime);
  }

  async getConsumerStatusWithOptions(request: GetConsumerStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetConsumerStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<GetConsumerStatusResponse>(await this.doRequest("GetConsumerStatus", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetConsumerStatusResponse({}));
  }

  async getConsumerStatus(request: GetConsumerStatusRequest): Promise<GetConsumerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConsumerStatusWithOptions(request, runtime);
  }

  async getClientsRatioWithOptions(request: GetClientsRatioRequest, runtime: $Util.RuntimeOptions): Promise<GetClientsRatioResponse> {
    Util.validateModel(request);
    return $tea.cast<GetClientsRatioResponse>(await this.doRequest("GetClientsRatio", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetClientsRatioResponse({}));
  }

  async getClientsRatio(request: GetClientsRatioRequest): Promise<GetClientsRatioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClientsRatioWithOptions(request, runtime);
  }

  async getBandwidthDataWithOptions(request: GetBandwidthDataRequest, runtime: $Util.RuntimeOptions): Promise<GetBandwidthDataResponse> {
    Util.validateModel(request);
    return $tea.cast<GetBandwidthDataResponse>(await this.doRequest("GetBandwidthData", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetBandwidthDataResponse({}));
  }

  async getBandwidthData(request: GetBandwidthDataRequest): Promise<GetBandwidthDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBandwidthDataWithOptions(request, runtime);
  }

  async getBalanceBandwidthDataWithOptions(request: GetBalanceBandwidthDataRequest, runtime: $Util.RuntimeOptions): Promise<GetBalanceBandwidthDataResponse> {
    Util.validateModel(request);
    return $tea.cast<GetBalanceBandwidthDataResponse>(await this.doRequest("GetBalanceBandwidthData", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetBalanceBandwidthDataResponse({}));
  }

  async getBalanceBandwidthData(request: GetBalanceBandwidthDataRequest): Promise<GetBalanceBandwidthDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBalanceBandwidthDataWithOptions(request, runtime);
  }

  async getControlRulesWithOptions(request: GetControlRulesRequest, runtime: $Util.RuntimeOptions): Promise<GetControlRulesResponse> {
    Util.validateModel(request);
    return $tea.cast<GetControlRulesResponse>(await this.doRequest("GetControlRules", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetControlRulesResponse({}));
  }

  async getControlRules(request: GetControlRulesRequest): Promise<GetControlRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getControlRulesWithOptions(request, runtime);
  }

  async getDomainCountWithOptions(request: GetDomainCountRequest, runtime: $Util.RuntimeOptions): Promise<GetDomainCountResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDomainCountResponse>(await this.doRequest("GetDomainCount", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetDomainCountResponse({}));
  }

  async getDomainCount(request: GetDomainCountRequest): Promise<GetDomainCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDomainCountWithOptions(request, runtime);
  }

  async getCurrentModeWithOptions(request: GetCurrentModeRequest, runtime: $Util.RuntimeOptions): Promise<GetCurrentModeResponse> {
    Util.validateModel(request);
    return $tea.cast<GetCurrentModeResponse>(await this.doRequest("GetCurrentMode", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetCurrentModeResponse({}));
  }

  async getCurrentMode(request: GetCurrentModeRequest): Promise<GetCurrentModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCurrentModeWithOptions(request, runtime);
  }

  async getCoverRateDataWithOptions(request: GetCoverRateDataRequest, runtime: $Util.RuntimeOptions): Promise<GetCoverRateDataResponse> {
    Util.validateModel(request);
    return $tea.cast<GetCoverRateDataResponse>(await this.doRequest("GetCoverRateData", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetCoverRateDataResponse({}));
  }

  async getCoverRateData(request: GetCoverRateDataRequest): Promise<GetCoverRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCoverRateDataWithOptions(request, runtime);
  }

  async getFeeHistoryWithOptions(request: GetFeeHistoryRequest, runtime: $Util.RuntimeOptions): Promise<GetFeeHistoryResponse> {
    Util.validateModel(request);
    return $tea.cast<GetFeeHistoryResponse>(await this.doRequest("GetFeeHistory", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetFeeHistoryResponse({}));
  }

  async getFeeHistory(request: GetFeeHistoryRequest): Promise<GetFeeHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFeeHistoryWithOptions(request, runtime);
  }

  async getExpenseSummaryWithOptions(request: GetExpenseSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetExpenseSummaryResponse> {
    Util.validateModel(request);
    return $tea.cast<GetExpenseSummaryResponse>(await this.doRequest("GetExpenseSummary", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetExpenseSummaryResponse({}));
  }

  async getExpenseSummary(request: GetExpenseSummaryRequest): Promise<GetExpenseSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExpenseSummaryWithOptions(request, runtime);
  }

  async getDomainsWithOptions(request: GetDomainsRequest, runtime: $Util.RuntimeOptions): Promise<GetDomainsResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDomainsResponse>(await this.doRequest("GetDomains", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetDomainsResponse({}));
  }

  async getDomains(request: GetDomainsRequest): Promise<GetDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDomainsWithOptions(request, runtime);
  }

  async getLogsListWithOptions(request: GetLogsListRequest, runtime: $Util.RuntimeOptions): Promise<GetLogsListResponse> {
    Util.validateModel(request);
    return $tea.cast<GetLogsListResponse>(await this.doRequest("GetLogsList", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetLogsListResponse({}));
  }

  async getLogsList(request: GetLogsListRequest): Promise<GetLogsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogsListWithOptions(request, runtime);
  }

  async getFluencyDataWithOptions(request: GetFluencyDataRequest, runtime: $Util.RuntimeOptions): Promise<GetFluencyDataResponse> {
    Util.validateModel(request);
    return $tea.cast<GetFluencyDataResponse>(await this.doRequest("GetFluencyData", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetFluencyDataResponse({}));
  }

  async getFluencyData(request: GetFluencyDataRequest): Promise<GetFluencyDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFluencyDataWithOptions(request, runtime);
  }

  async getFirstFrameDelayDataWithOptions(request: GetFirstFrameDelayDataRequest, runtime: $Util.RuntimeOptions): Promise<GetFirstFrameDelayDataResponse> {
    Util.validateModel(request);
    return $tea.cast<GetFirstFrameDelayDataResponse>(await this.doRequest("GetFirstFrameDelayData", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetFirstFrameDelayDataResponse({}));
  }

  async getFirstFrameDelayData(request: GetFirstFrameDelayDataRequest): Promise<GetFirstFrameDelayDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFirstFrameDelayDataWithOptions(request, runtime);
  }

  async getTokenListWithOptions(request: GetTokenListRequest, runtime: $Util.RuntimeOptions): Promise<GetTokenListResponse> {
    Util.validateModel(request);
    return $tea.cast<GetTokenListResponse>(await this.doRequest("GetTokenList", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetTokenListResponse({}));
  }

  async getTokenList(request: GetTokenListRequest): Promise<GetTokenListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTokenListWithOptions(request, runtime);
  }

  async getShareRateDataWithOptions(request: GetShareRateDataRequest, runtime: $Util.RuntimeOptions): Promise<GetShareRateDataResponse> {
    Util.validateModel(request);
    return $tea.cast<GetShareRateDataResponse>(await this.doRequest("GetShareRateData", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetShareRateDataResponse({}));
  }

  async getShareRateData(request: GetShareRateDataRequest): Promise<GetShareRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getShareRateDataWithOptions(request, runtime);
  }

  async getTrafficDataWithOptions(request: GetTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<GetTrafficDataResponse> {
    Util.validateModel(request);
    return $tea.cast<GetTrafficDataResponse>(await this.doRequest("GetTrafficData", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetTrafficDataResponse({}));
  }

  async getTrafficData(request: GetTrafficDataRequest): Promise<GetTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrafficDataWithOptions(request, runtime);
  }

  async getTrafficByRegionWithOptions(request: GetTrafficByRegionRequest, runtime: $Util.RuntimeOptions): Promise<GetTrafficByRegionResponse> {
    Util.validateModel(request);
    return $tea.cast<GetTrafficByRegionResponse>(await this.doRequest("GetTrafficByRegion", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetTrafficByRegionResponse({}));
  }

  async getTrafficByRegion(request: GetTrafficByRegionRequest): Promise<GetTrafficByRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrafficByRegionWithOptions(request, runtime);
  }

  async getAllRegionsWithOptions(request: GetAllRegionsRequest, runtime: $Util.RuntimeOptions): Promise<GetAllRegionsResponse> {
    Util.validateModel(request);
    return $tea.cast<GetAllRegionsResponse>(await this.doRequest("GetAllRegions", "HTTPS", "GET", "2017-04-11", "AK", $tea.toMap(request), null, runtime), new GetAllRegionsResponse({}));
  }

  async getAllRegions(request: GetAllRegionsRequest): Promise<GetAllRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllRegionsWithOptions(request, runtime);
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
