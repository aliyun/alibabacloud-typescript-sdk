// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddConsumerRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  businessType?: string;
  company?: string;
  site?: string;
  requirement?: string;
  mobile?: string;
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

export class AddConsumerResponseBody extends $tea.Model {
  requestId?: string;
  resourceId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddConsumerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddConsumerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddConsumerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  businessType?: string;
  domain?: string;
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

export class AddDomainResponseBody extends $tea.Model {
  requestId?: string;
  resourceId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPcdnControlRuleRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  name?: string;
  region?: string;
  ispName?: string;
  platformType?: string;
  businessType?: string;
  market?: string;
  appVersion?: string;
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

export class AddPcdnControlRuleResponseBody extends $tea.Model {
  requestId?: string;
  resourceId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddPcdnControlRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddPcdnControlRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddPcdnControlRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  domain?: string;
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

export class DeleteDomainResponseBody extends $tea.Model {
  requestId?: string;
  resourceId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePcdnControlRuleRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  resourceId?: string;
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

export class DeletePcdnControlRuleResponseBody extends $tea.Model {
  requestId?: string;
  code?: number;
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

export class DeletePcdnControlRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePcdnControlRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePcdnControlRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisablePcdnControlRuleRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  resourceId?: string;
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

export class DisablePcdnControlRuleResponseBody extends $tea.Model {
  requestId?: string;
  resourceId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisablePcdnControlRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisablePcdnControlRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisablePcdnControlRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditPcdnControlRuleRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  name?: string;
  resourceId?: string;
  region?: string;
  ispName?: string;
  platformType?: string;
  businessType?: string;
  market?: string;
  appVersion?: string;
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

export class EditPcdnControlRuleResponseBody extends $tea.Model {
  requestId?: string;
  resourceId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditPcdnControlRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EditPcdnControlRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EditPcdnControlRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnablePcdnControlRuleRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  resourceId?: string;
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

export class EnablePcdnControlRuleResponseBody extends $tea.Model {
  requestId?: string;
  resourceId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnablePcdnControlRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnablePcdnControlRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnablePcdnControlRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessDataRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  domain?: string;
  region?: string;
  ispName?: string;
  platformType?: string;
  businessType?: string;
  startDate?: string;
  endDate?: string;
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

export class GetAccessDataResponseBody extends $tea.Model {
  dataList?: GetAccessDataResponseBodyDataList;
  requestId?: string;
  labels?: GetAccessDataResponseBodyLabels;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      labels: 'Labels',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetAccessDataResponseBodyDataList,
      requestId: 'string',
      labels: GetAccessDataResponseBodyLabels,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAccessDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccessDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllAppVersionsRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
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

export class GetAllAppVersionsResponseBody extends $tea.Model {
  dataList?: GetAllAppVersionsResponseBodyDataList;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetAllAppVersionsResponseBodyDataList,
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllAppVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAllAppVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAllAppVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllIspRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
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

export class GetAllIspResponseBody extends $tea.Model {
  dataList?: GetAllIspResponseBodyDataList;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetAllIspResponseBodyDataList,
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllIspResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAllIspResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAllIspResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllMarketsRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
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

export class GetAllMarketsResponseBody extends $tea.Model {
  dataList?: GetAllMarketsResponseBodyDataList;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetAllMarketsResponseBodyDataList,
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllMarketsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAllMarketsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAllMarketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllPlatformTypesRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
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

export class GetAllPlatformTypesResponseBody extends $tea.Model {
  dataList?: GetAllPlatformTypesResponseBodyDataList;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetAllPlatformTypesResponseBodyDataList,
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllPlatformTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAllPlatformTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAllPlatformTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllRegionsRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
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

export class GetAllRegionsResponseBody extends $tea.Model {
  dataList?: GetAllRegionsResponseBodyDataList;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetAllRegionsResponseBodyDataList,
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAllRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAllRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceBandwidthDataRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  dataInterval?: number;
  resourceId?: string;
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

export class GetBalanceBandwidthDataResponseBody extends $tea.Model {
  dataList?: GetBalanceBandwidthDataResponseBodyDataList;
  requestId?: string;
  labels?: GetBalanceBandwidthDataResponseBodyLabels;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      labels: 'Labels',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetBalanceBandwidthDataResponseBodyDataList,
      requestId: 'string',
      labels: GetBalanceBandwidthDataResponseBodyLabels,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceBandwidthDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBalanceBandwidthDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBalanceBandwidthDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceTrafficDataRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  dataInterval?: number;
  resourceId?: string;
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

export class GetBalanceTrafficDataResponseBody extends $tea.Model {
  dataList?: GetBalanceTrafficDataResponseBodyDataList;
  requestId?: string;
  labels?: GetBalanceTrafficDataResponseBodyLabels;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      labels: 'Labels',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetBalanceTrafficDataResponseBodyDataList,
      requestId: 'string',
      labels: GetBalanceTrafficDataResponseBodyLabels,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBalanceTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBalanceTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBandwidthDataRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  domain?: string;
  region?: string;
  ispName?: string;
  platformType?: string;
  businessType?: string;
  startDate?: string;
  endDate?: string;
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

export class GetBandwidthDataResponseBody extends $tea.Model {
  dataList?: GetBandwidthDataResponseBodyDataList;
  requestId?: string;
  labels?: GetBandwidthDataResponseBodyLabels;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      labels: 'Labels',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetBandwidthDataResponseBodyDataList,
      requestId: 'string',
      labels: GetBandwidthDataResponseBodyLabels,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBandwidthDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBandwidthDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBandwidthDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientsRatioRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
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

export class GetClientsRatioResponseBody extends $tea.Model {
  dataList?: GetClientsRatioResponseBodyDataList;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetClientsRatioResponseBodyDataList,
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientsRatioResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetClientsRatioResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetClientsRatioResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerStatusRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
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

export class GetConsumerStatusResponseBody extends $tea.Model {
  comment?: string;
  liveMonitor?: boolean;
  audit?: number;
  requestId?: string;
  integreatedMode?: number;
  createdAt?: string;
  cdnUrlRedirectFlag?: boolean;
  businessType?: string;
  inservice?: boolean;
  realtimeMonitor?: boolean;
  code?: number;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      liveMonitor: 'LiveMonitor',
      audit: 'Audit',
      requestId: 'RequestId',
      integreatedMode: 'IntegreatedMode',
      createdAt: 'CreatedAt',
      cdnUrlRedirectFlag: 'CdnUrlRedirectFlag',
      businessType: 'BusinessType',
      inservice: 'Inservice',
      realtimeMonitor: 'RealtimeMonitor',
      code: 'Code',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      liveMonitor: 'boolean',
      audit: 'number',
      requestId: 'string',
      integreatedMode: 'number',
      createdAt: 'string',
      cdnUrlRedirectFlag: 'boolean',
      businessType: 'string',
      inservice: 'boolean',
      realtimeMonitor: 'boolean',
      code: 'number',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConsumerStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConsumerStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlRulesRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  page?: string;
  pageSize?: string;
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

export class GetControlRulesResponseBody extends $tea.Model {
  settingList?: GetControlRulesResponseBodySettingList;
  requestId?: string;
  pager?: GetControlRulesResponseBodyPager;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      settingList: 'SettingList',
      requestId: 'RequestId',
      pager: 'Pager',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settingList: GetControlRulesResponseBodySettingList,
      requestId: 'string',
      pager: GetControlRulesResponseBodyPager,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetControlRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetControlRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoverRateDataRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  domain?: string;
  region?: string;
  ispName?: string;
  platformType?: string;
  businessType?: string;
  startDate?: string;
  endDate?: string;
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

export class GetCoverRateDataResponseBody extends $tea.Model {
  dataList?: GetCoverRateDataResponseBodyDataList;
  requestId?: string;
  labels?: GetCoverRateDataResponseBodyLabels;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      labels: 'Labels',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetCoverRateDataResponseBodyDataList,
      requestId: 'string',
      labels: GetCoverRateDataResponseBodyLabels,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoverRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCoverRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCoverRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentModeRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
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

export class GetCurrentModeResponseBody extends $tea.Model {
  modeCode?: number;
  requestId?: string;
  paddingModeCode?: number;
  effectiveAt?: number;
  estimateBandwidth?: number;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      modeCode: 'ModeCode',
      requestId: 'RequestId',
      paddingModeCode: 'PaddingModeCode',
      effectiveAt: 'EffectiveAt',
      estimateBandwidth: 'EstimateBandwidth',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modeCode: 'number',
      requestId: 'string',
      paddingModeCode: 'number',
      effectiveAt: 'number',
      estimateBandwidth: 'number',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCurrentModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCurrentModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainCountRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
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

export class GetDomainCountResponseBody extends $tea.Model {
  requestId?: string;
  data?: number;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'number',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainCountResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDomainCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDomainCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainsRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  page?: string;
  pageSize?: string;
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

export class GetDomainsResponseBody extends $tea.Model {
  dataList?: GetDomainsResponseBodyDataList;
  requestId?: string;
  pager?: GetDomainsResponseBodyPager;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      pager: 'Pager',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetDomainsResponseBodyDataList,
      requestId: 'string',
      pager: GetDomainsResponseBodyPager,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExpenseSummaryRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
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

export class GetExpenseSummaryResponseBody extends $tea.Model {
  requestId?: string;
  data?: GetExpenseSummaryResponseBodyData;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: GetExpenseSummaryResponseBodyData,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExpenseSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetExpenseSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetExpenseSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeeHistoryRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  page?: string;
  pageSize?: string;
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

export class GetFeeHistoryResponseBody extends $tea.Model {
  requestId?: string;
  feeList?: GetFeeHistoryResponseBodyFeeList;
  pager?: GetFeeHistoryResponseBodyPager;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      feeList: 'FeeList',
      pager: 'Pager',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      feeList: GetFeeHistoryResponseBodyFeeList,
      pager: GetFeeHistoryResponseBodyPager,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeeHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFeeHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFeeHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFirstFrameDelayDataRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  domain?: string;
  region?: string;
  ispName?: string;
  platformType?: string;
  businessType?: string;
  startDate?: string;
  endDate?: string;
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

export class GetFirstFrameDelayDataResponseBody extends $tea.Model {
  dataList?: GetFirstFrameDelayDataResponseBodyDataList;
  requestId?: string;
  labels?: GetFirstFrameDelayDataResponseBodyLabels;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      labels: 'Labels',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetFirstFrameDelayDataResponseBodyDataList,
      requestId: 'string',
      labels: GetFirstFrameDelayDataResponseBodyLabels,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFirstFrameDelayDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFirstFrameDelayDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFirstFrameDelayDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFluencyDataRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  domain?: string;
  region?: string;
  ispName?: string;
  platformType?: string;
  businessType?: string;
  startDate?: string;
  endDate?: string;
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

export class GetFluencyDataResponseBody extends $tea.Model {
  dataList?: GetFluencyDataResponseBodyDataList;
  requestId?: string;
  labels?: GetFluencyDataResponseBodyLabels;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      labels: 'Labels',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetFluencyDataResponseBodyDataList,
      requestId: 'string',
      labels: GetFluencyDataResponseBodyLabels,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFluencyDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFluencyDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFluencyDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsListRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
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

export class GetLogsListResponseBody extends $tea.Model {
  logList?: GetLogsListResponseBodyLogList;
  requestId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      logList: 'LogList',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logList: GetLogsListResponseBodyLogList,
      requestId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLogsListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLogsListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareRateDataRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  domain?: string;
  region?: string;
  ispName?: string;
  platformType?: string;
  businessType?: string;
  startDate?: string;
  endDate?: string;
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

export class GetShareRateDataResponseBody extends $tea.Model {
  dataList?: GetShareRateDataResponseBodyDataList;
  requestId?: string;
  labels?: GetShareRateDataResponseBodyLabels;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      labels: 'Labels',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetShareRateDataResponseBodyDataList,
      requestId: 'string',
      labels: GetShareRateDataResponseBodyLabels,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetShareRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetShareRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenListRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
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

export class GetTokenListResponseBody extends $tea.Model {
  requestId?: string;
  tokenList?: GetTokenListResponseBodyTokenList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tokenList: 'TokenList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tokenList: GetTokenListResponseBodyTokenList,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTokenListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTokenListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficByRegionRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
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

export class GetTrafficByRegionResponseBody extends $tea.Model {
  requestId?: string;
  trafficDataList?: GetTrafficByRegionResponseBodyTrafficDataList;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficDataList: 'TrafficDataList',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficDataList: GetTrafficByRegionResponseBodyTrafficDataList,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficByRegionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTrafficByRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTrafficByRegionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficDataRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  domain?: string;
  region?: string;
  ispName?: string;
  platformType?: string;
  businessType?: string;
  startDate?: string;
  endDate?: string;
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

export class GetTrafficDataResponseBody extends $tea.Model {
  dataList?: GetTrafficDataResponseBodyDataList;
  requestId?: string;
  labels?: GetTrafficDataResponseBodyLabels;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      labels: 'Labels',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: GetTrafficDataResponseBodyDataList,
      requestId: 'string',
      labels: GetTrafficDataResponseBodyLabels,
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDomainRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  domain?: string;
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

export class StartDomainResponseBody extends $tea.Model {
  requestId?: string;
  resourceId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDomainRequest extends $tea.Model {
  securityToken?: string;
  version?: string;
  domain?: string;
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

export class StopDomainResponseBody extends $tea.Model {
  requestId?: string;
  resourceId?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessDataResponseBodyDataListUsageDataValues extends $tea.Model {
  values?: string[];
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

export class GetAccessDataResponseBodyDataListUsageData extends $tea.Model {
  values?: GetAccessDataResponseBodyDataListUsageDataValues;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: GetAccessDataResponseBodyDataListUsageDataValues,
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessDataResponseBodyDataList extends $tea.Model {
  usageData?: GetAccessDataResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetAccessDataResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessDataResponseBodyLabels extends $tea.Model {
  label?: string[];
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

export class GetAllAppVersionsResponseBodyDataListUsageData extends $tea.Model {
  value?: string;
  code?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      code: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllAppVersionsResponseBodyDataList extends $tea.Model {
  usageData?: GetAllAppVersionsResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetAllAppVersionsResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllIspResponseBodyDataListUsageData extends $tea.Model {
  nameEn?: string;
  nameCn?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      nameEn: 'NameEn',
      nameCn: 'NameCn',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameEn: 'string',
      nameCn: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllIspResponseBodyDataList extends $tea.Model {
  usageData?: GetAllIspResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetAllIspResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllMarketsResponseBodyDataListUsageData extends $tea.Model {
  code?: number;
  marketCode?: string;
  marketName?: string;
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

export class GetAllMarketsResponseBodyDataList extends $tea.Model {
  usageData?: GetAllMarketsResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetAllMarketsResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllPlatformTypesResponseBodyDataListUsageData extends $tea.Model {
  code?: number;
  name?: string;
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

export class GetAllPlatformTypesResponseBodyDataList extends $tea.Model {
  usageData?: GetAllPlatformTypesResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetAllPlatformTypesResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAllRegionsResponseBodyDataListUsageData extends $tea.Model {
  code?: string;
  name?: string;
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

export class GetAllRegionsResponseBodyDataList extends $tea.Model {
  usageData?: GetAllRegionsResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetAllRegionsResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceBandwidthDataResponseBodyDataListUsageDataValues extends $tea.Model {
  values?: string[];
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

export class GetBalanceBandwidthDataResponseBodyDataListUsageData extends $tea.Model {
  values?: GetBalanceBandwidthDataResponseBodyDataListUsageDataValues;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: GetBalanceBandwidthDataResponseBodyDataListUsageDataValues,
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceBandwidthDataResponseBodyDataList extends $tea.Model {
  usageData?: GetBalanceBandwidthDataResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetBalanceBandwidthDataResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceBandwidthDataResponseBodyLabels extends $tea.Model {
  label?: string[];
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

export class GetBalanceTrafficDataResponseBodyDataListUsageDataValues extends $tea.Model {
  values?: string[];
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

export class GetBalanceTrafficDataResponseBodyDataListUsageData extends $tea.Model {
  values?: GetBalanceTrafficDataResponseBodyDataListUsageDataValues;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: GetBalanceTrafficDataResponseBodyDataListUsageDataValues,
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceTrafficDataResponseBodyDataList extends $tea.Model {
  usageData?: GetBalanceTrafficDataResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetBalanceTrafficDataResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBalanceTrafficDataResponseBodyLabels extends $tea.Model {
  label?: string[];
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

export class GetBandwidthDataResponseBodyDataListUsageDataValues extends $tea.Model {
  values?: string[];
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

export class GetBandwidthDataResponseBodyDataListUsageData extends $tea.Model {
  values?: GetBandwidthDataResponseBodyDataListUsageDataValues;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: GetBandwidthDataResponseBodyDataListUsageDataValues,
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBandwidthDataResponseBodyDataList extends $tea.Model {
  usageData?: GetBandwidthDataResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetBandwidthDataResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBandwidthDataResponseBodyLabels extends $tea.Model {
  label?: string[];
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

export class GetClientsRatioResponseBodyDataListUsageData extends $tea.Model {
  value?: string;
  name?: string;
  rate?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      name: 'Name',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      name: 'string',
      rate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientsRatioResponseBodyDataList extends $tea.Model {
  usageData?: GetClientsRatioResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetClientsRatioResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlRulesResponseBodySettingListSetting extends $tea.Model {
  createdAt?: string;
  clientId?: string;
  businessType?: string;
  usable?: boolean;
  region?: string;
  platformType?: string;
  marketType?: string;
  onoff?: boolean;
  ispName?: string;
  appVersion?: string;
  updatedAt?: string;
  name?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      clientId: 'ClientId',
      businessType: 'BusinessType',
      usable: 'Usable',
      region: 'Region',
      platformType: 'PlatformType',
      marketType: 'MarketType',
      onoff: 'Onoff',
      ispName: 'IspName',
      appVersion: 'AppVersion',
      updatedAt: 'UpdatedAt',
      name: 'Name',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      clientId: 'string',
      businessType: 'string',
      usable: 'boolean',
      region: 'string',
      platformType: 'string',
      marketType: 'string',
      onoff: 'boolean',
      ispName: 'string',
      appVersion: 'string',
      updatedAt: 'string',
      name: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlRulesResponseBodySettingList extends $tea.Model {
  setting?: GetControlRulesResponseBodySettingListSetting[];
  static names(): { [key: string]: string } {
    return {
      setting: 'Setting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      setting: { 'type': 'array', 'itemType': GetControlRulesResponseBodySettingListSetting },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetControlRulesResponseBodyPager extends $tea.Model {
  pageSize?: number;
  total?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      total: 'Total',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      total: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoverRateDataResponseBodyDataListUsageDataValues extends $tea.Model {
  values?: string[];
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

export class GetCoverRateDataResponseBodyDataListUsageData extends $tea.Model {
  values?: GetCoverRateDataResponseBodyDataListUsageDataValues;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: GetCoverRateDataResponseBodyDataListUsageDataValues,
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoverRateDataResponseBodyDataList extends $tea.Model {
  usageData?: GetCoverRateDataResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetCoverRateDataResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoverRateDataResponseBodyLabels extends $tea.Model {
  label?: string[];
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

export class GetDomainsResponseBodyDataListUsageData extends $tea.Model {
  status?: boolean;
  domain?: string;
  sliceFormat?: string;
  createdAt?: string;
  updatedAt?: string;
  resourceId?: string;
  businessType?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      domain: 'Domain',
      sliceFormat: 'SliceFormat',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
      resourceId: 'ResourceId',
      businessType: 'BusinessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'boolean',
      domain: 'string',
      sliceFormat: 'string',
      createdAt: 'string',
      updatedAt: 'string',
      resourceId: 'string',
      businessType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainsResponseBodyDataList extends $tea.Model {
  usageData?: GetDomainsResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetDomainsResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainsResponseBodyPager extends $tea.Model {
  pageSize?: number;
  total?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      total: 'Total',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      total: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExpenseSummaryResponseBodyData extends $tea.Model {
  forecastFluency?: number;
  topBandwidth?: number;
  totalTraffic?: number;
  coverRate?: number;
  shareRate?: number;
  totalUV?: number;
  static names(): { [key: string]: string } {
    return {
      forecastFluency: 'ForecastFluency',
      topBandwidth: 'TopBandwidth',
      totalTraffic: 'TotalTraffic',
      coverRate: 'CoverRate',
      shareRate: 'ShareRate',
      totalUV: 'TotalUV',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forecastFluency: 'number',
      topBandwidth: 'number',
      totalTraffic: 'number',
      coverRate: 'number',
      shareRate: 'number',
      totalUV: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeeHistoryResponseBodyFeeListFee extends $tea.Model {
  endDate?: string;
  timeSpan?: string;
  date?: string;
  startDate?: string;
  levelThreeTraffic?: number;
  mode?: string;
  totalTraffic?: number;
  businessType?: string;
  levelTwoTraffic?: number;
  levelThreeBandwidth?: number;
  levelTwoBandwidth?: number;
  flowOut?: number;
  resourceId?: string;
  totalBandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      timeSpan: 'TimeSpan',
      date: 'Date',
      startDate: 'StartDate',
      levelThreeTraffic: 'LevelThreeTraffic',
      mode: 'Mode',
      totalTraffic: 'TotalTraffic',
      businessType: 'BusinessType',
      levelTwoTraffic: 'LevelTwoTraffic',
      levelThreeBandwidth: 'LevelThreeBandwidth',
      levelTwoBandwidth: 'LevelTwoBandwidth',
      flowOut: 'FlowOut',
      resourceId: 'ResourceId',
      totalBandwidth: 'TotalBandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      timeSpan: 'string',
      date: 'string',
      startDate: 'string',
      levelThreeTraffic: 'number',
      mode: 'string',
      totalTraffic: 'number',
      businessType: 'string',
      levelTwoTraffic: 'number',
      levelThreeBandwidth: 'number',
      levelTwoBandwidth: 'number',
      flowOut: 'number',
      resourceId: 'string',
      totalBandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeeHistoryResponseBodyFeeList extends $tea.Model {
  fee?: GetFeeHistoryResponseBodyFeeListFee[];
  static names(): { [key: string]: string } {
    return {
      fee: 'Fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fee: { 'type': 'array', 'itemType': GetFeeHistoryResponseBodyFeeListFee },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeeHistoryResponseBodyPager extends $tea.Model {
  pageSize?: number;
  total?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      total: 'Total',
      page: 'Page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      total: 'number',
      page: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFirstFrameDelayDataResponseBodyDataListUsageDataValues extends $tea.Model {
  values?: string[];
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

export class GetFirstFrameDelayDataResponseBodyDataListUsageData extends $tea.Model {
  values?: GetFirstFrameDelayDataResponseBodyDataListUsageDataValues;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: GetFirstFrameDelayDataResponseBodyDataListUsageDataValues,
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFirstFrameDelayDataResponseBodyDataList extends $tea.Model {
  usageData?: GetFirstFrameDelayDataResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetFirstFrameDelayDataResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFirstFrameDelayDataResponseBodyLabels extends $tea.Model {
  label?: string[];
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

export class GetFluencyDataResponseBodyDataListUsageDataValues extends $tea.Model {
  values?: string[];
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

export class GetFluencyDataResponseBodyDataListUsageData extends $tea.Model {
  values?: GetFluencyDataResponseBodyDataListUsageDataValues;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: GetFluencyDataResponseBodyDataListUsageDataValues,
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFluencyDataResponseBodyDataList extends $tea.Model {
  usageData?: GetFluencyDataResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetFluencyDataResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFluencyDataResponseBodyLabels extends $tea.Model {
  label?: string[];
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

export class GetLogsListResponseBodyLogListLog extends $tea.Model {
  endDate?: string;
  url?: string;
  startDate?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      url: 'Url',
      startDate: 'StartDate',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      url: 'string',
      startDate: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogsListResponseBodyLogList extends $tea.Model {
  log?: GetLogsListResponseBodyLogListLog[];
  static names(): { [key: string]: string } {
    return {
      log: 'Log',
    };
  }

  static types(): { [key: string]: any } {
    return {
      log: { 'type': 'array', 'itemType': GetLogsListResponseBodyLogListLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareRateDataResponseBodyDataListUsageDataValues extends $tea.Model {
  values?: string[];
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

export class GetShareRateDataResponseBodyDataListUsageData extends $tea.Model {
  values?: GetShareRateDataResponseBodyDataListUsageDataValues;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: GetShareRateDataResponseBodyDataListUsageDataValues,
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareRateDataResponseBodyDataList extends $tea.Model {
  usageData?: GetShareRateDataResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetShareRateDataResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetShareRateDataResponseBodyLabels extends $tea.Model {
  label?: string[];
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

export class GetTokenListResponseBodyTokenListToken extends $tea.Model {
  platformName?: string;
  token?: string;
  platformType?: string;
  createdAt?: string;
  updatedAt?: string;
  resourceId?: string;
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      platformName: 'PlatformName',
      token: 'Token',
      platformType: 'PlatformType',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
      resourceId: 'ResourceId',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      platformName: 'string',
      token: 'string',
      platformType: 'string',
      createdAt: 'string',
      updatedAt: 'string',
      resourceId: 'string',
      clientId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenListResponseBodyTokenList extends $tea.Model {
  token?: GetTokenListResponseBodyTokenListToken[];
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: { 'type': 'array', 'itemType': GetTokenListResponseBodyTokenListToken },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficByRegionResponseBodyTrafficDataListTrafficData extends $tea.Model {
  traffic?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      traffic: 'Traffic',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traffic: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficByRegionResponseBodyTrafficDataList extends $tea.Model {
  trafficData?: GetTrafficByRegionResponseBodyTrafficDataListTrafficData[];
  static names(): { [key: string]: string } {
    return {
      trafficData: 'TrafficData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficData: { 'type': 'array', 'itemType': GetTrafficByRegionResponseBodyTrafficDataListTrafficData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficDataResponseBodyDataListUsageDataValues extends $tea.Model {
  values?: string[];
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

export class GetTrafficDataResponseBodyDataListUsageData extends $tea.Model {
  values?: GetTrafficDataResponseBodyDataListUsageDataValues;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      values: 'Values',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      values: GetTrafficDataResponseBodyDataListUsageDataValues,
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficDataResponseBodyDataList extends $tea.Model {
  usageData?: GetTrafficDataResponseBodyDataListUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': GetTrafficDataResponseBodyDataListUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrafficDataResponseBodyLabels extends $tea.Model {
  label?: string[];
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("pcdn", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addConsumerWithOptions(request: AddConsumerRequest, runtime: $Util.RuntimeOptions): Promise<AddConsumerResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<AddConsumerResponse>(await this.doRPCRequest("AddConsumer", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new AddConsumerResponse({}));
  }

  async addConsumer(request: AddConsumerRequest): Promise<AddConsumerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addConsumerWithOptions(request, runtime);
  }

  async addDomainWithOptions(request: AddDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddDomainResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<AddDomainResponse>(await this.doRPCRequest("AddDomain", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new AddDomainResponse({}));
  }

  async addDomain(request: AddDomainRequest): Promise<AddDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDomainWithOptions(request, runtime);
  }

  async addPcdnControlRuleWithOptions(request: AddPcdnControlRuleRequest, runtime: $Util.RuntimeOptions): Promise<AddPcdnControlRuleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<AddPcdnControlRuleResponse>(await this.doRPCRequest("AddPcdnControlRule", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new AddPcdnControlRuleResponse({}));
  }

  async addPcdnControlRule(request: AddPcdnControlRuleRequest): Promise<AddPcdnControlRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addPcdnControlRuleWithOptions(request, runtime);
  }

  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeleteDomainResponse>(await this.doRPCRequest("DeleteDomain", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new DeleteDomainResponse({}));
  }

  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  async deletePcdnControlRuleWithOptions(request: DeletePcdnControlRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeletePcdnControlRuleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DeletePcdnControlRuleResponse>(await this.doRPCRequest("DeletePcdnControlRule", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new DeletePcdnControlRuleResponse({}));
  }

  async deletePcdnControlRule(request: DeletePcdnControlRuleRequest): Promise<DeletePcdnControlRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePcdnControlRuleWithOptions(request, runtime);
  }

  async disablePcdnControlRuleWithOptions(request: DisablePcdnControlRuleRequest, runtime: $Util.RuntimeOptions): Promise<DisablePcdnControlRuleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DisablePcdnControlRuleResponse>(await this.doRPCRequest("DisablePcdnControlRule", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new DisablePcdnControlRuleResponse({}));
  }

  async disablePcdnControlRule(request: DisablePcdnControlRuleRequest): Promise<DisablePcdnControlRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disablePcdnControlRuleWithOptions(request, runtime);
  }

  async editPcdnControlRuleWithOptions(request: EditPcdnControlRuleRequest, runtime: $Util.RuntimeOptions): Promise<EditPcdnControlRuleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<EditPcdnControlRuleResponse>(await this.doRPCRequest("EditPcdnControlRule", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new EditPcdnControlRuleResponse({}));
  }

  async editPcdnControlRule(request: EditPcdnControlRuleRequest): Promise<EditPcdnControlRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editPcdnControlRuleWithOptions(request, runtime);
  }

  async enablePcdnControlRuleWithOptions(request: EnablePcdnControlRuleRequest, runtime: $Util.RuntimeOptions): Promise<EnablePcdnControlRuleResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<EnablePcdnControlRuleResponse>(await this.doRPCRequest("EnablePcdnControlRule", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new EnablePcdnControlRuleResponse({}));
  }

  async enablePcdnControlRule(request: EnablePcdnControlRuleRequest): Promise<EnablePcdnControlRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enablePcdnControlRuleWithOptions(request, runtime);
  }

  async getAccessDataWithOptions(request: GetAccessDataRequest, runtime: $Util.RuntimeOptions): Promise<GetAccessDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAccessDataResponse>(await this.doRPCRequest("GetAccessData", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetAccessDataResponse({}));
  }

  async getAccessData(request: GetAccessDataRequest): Promise<GetAccessDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccessDataWithOptions(request, runtime);
  }

  async getAllAppVersionsWithOptions(request: GetAllAppVersionsRequest, runtime: $Util.RuntimeOptions): Promise<GetAllAppVersionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAllAppVersionsResponse>(await this.doRPCRequest("GetAllAppVersions", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetAllAppVersionsResponse({}));
  }

  async getAllAppVersions(request: GetAllAppVersionsRequest): Promise<GetAllAppVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllAppVersionsWithOptions(request, runtime);
  }

  async getAllIspWithOptions(request: GetAllIspRequest, runtime: $Util.RuntimeOptions): Promise<GetAllIspResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAllIspResponse>(await this.doRPCRequest("GetAllIsp", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetAllIspResponse({}));
  }

  async getAllIsp(request: GetAllIspRequest): Promise<GetAllIspResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllIspWithOptions(request, runtime);
  }

  async getAllMarketsWithOptions(request: GetAllMarketsRequest, runtime: $Util.RuntimeOptions): Promise<GetAllMarketsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAllMarketsResponse>(await this.doRPCRequest("GetAllMarkets", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetAllMarketsResponse({}));
  }

  async getAllMarkets(request: GetAllMarketsRequest): Promise<GetAllMarketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllMarketsWithOptions(request, runtime);
  }

  async getAllPlatformTypesWithOptions(request: GetAllPlatformTypesRequest, runtime: $Util.RuntimeOptions): Promise<GetAllPlatformTypesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAllPlatformTypesResponse>(await this.doRPCRequest("GetAllPlatformTypes", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetAllPlatformTypesResponse({}));
  }

  async getAllPlatformTypes(request: GetAllPlatformTypesRequest): Promise<GetAllPlatformTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllPlatformTypesWithOptions(request, runtime);
  }

  async getAllRegionsWithOptions(request: GetAllRegionsRequest, runtime: $Util.RuntimeOptions): Promise<GetAllRegionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetAllRegionsResponse>(await this.doRPCRequest("GetAllRegions", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetAllRegionsResponse({}));
  }

  async getAllRegions(request: GetAllRegionsRequest): Promise<GetAllRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAllRegionsWithOptions(request, runtime);
  }

  async getBalanceBandwidthDataWithOptions(request: GetBalanceBandwidthDataRequest, runtime: $Util.RuntimeOptions): Promise<GetBalanceBandwidthDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetBalanceBandwidthDataResponse>(await this.doRPCRequest("GetBalanceBandwidthData", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetBalanceBandwidthDataResponse({}));
  }

  async getBalanceBandwidthData(request: GetBalanceBandwidthDataRequest): Promise<GetBalanceBandwidthDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBalanceBandwidthDataWithOptions(request, runtime);
  }

  async getBalanceTrafficDataWithOptions(request: GetBalanceTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<GetBalanceTrafficDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetBalanceTrafficDataResponse>(await this.doRPCRequest("GetBalanceTrafficData", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetBalanceTrafficDataResponse({}));
  }

  async getBalanceTrafficData(request: GetBalanceTrafficDataRequest): Promise<GetBalanceTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBalanceTrafficDataWithOptions(request, runtime);
  }

  async getBandwidthDataWithOptions(request: GetBandwidthDataRequest, runtime: $Util.RuntimeOptions): Promise<GetBandwidthDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetBandwidthDataResponse>(await this.doRPCRequest("GetBandwidthData", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetBandwidthDataResponse({}));
  }

  async getBandwidthData(request: GetBandwidthDataRequest): Promise<GetBandwidthDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBandwidthDataWithOptions(request, runtime);
  }

  async getClientsRatioWithOptions(request: GetClientsRatioRequest, runtime: $Util.RuntimeOptions): Promise<GetClientsRatioResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetClientsRatioResponse>(await this.doRPCRequest("GetClientsRatio", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetClientsRatioResponse({}));
  }

  async getClientsRatio(request: GetClientsRatioRequest): Promise<GetClientsRatioResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClientsRatioWithOptions(request, runtime);
  }

  async getConsumerStatusWithOptions(request: GetConsumerStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetConsumerStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetConsumerStatusResponse>(await this.doRPCRequest("GetConsumerStatus", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetConsumerStatusResponse({}));
  }

  async getConsumerStatus(request: GetConsumerStatusRequest): Promise<GetConsumerStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConsumerStatusWithOptions(request, runtime);
  }

  async getControlRulesWithOptions(request: GetControlRulesRequest, runtime: $Util.RuntimeOptions): Promise<GetControlRulesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetControlRulesResponse>(await this.doRPCRequest("GetControlRules", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetControlRulesResponse({}));
  }

  async getControlRules(request: GetControlRulesRequest): Promise<GetControlRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getControlRulesWithOptions(request, runtime);
  }

  async getCoverRateDataWithOptions(request: GetCoverRateDataRequest, runtime: $Util.RuntimeOptions): Promise<GetCoverRateDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetCoverRateDataResponse>(await this.doRPCRequest("GetCoverRateData", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetCoverRateDataResponse({}));
  }

  async getCoverRateData(request: GetCoverRateDataRequest): Promise<GetCoverRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCoverRateDataWithOptions(request, runtime);
  }

  async getCurrentModeWithOptions(request: GetCurrentModeRequest, runtime: $Util.RuntimeOptions): Promise<GetCurrentModeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetCurrentModeResponse>(await this.doRPCRequest("GetCurrentMode", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetCurrentModeResponse({}));
  }

  async getCurrentMode(request: GetCurrentModeRequest): Promise<GetCurrentModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCurrentModeWithOptions(request, runtime);
  }

  async getDomainCountWithOptions(request: GetDomainCountRequest, runtime: $Util.RuntimeOptions): Promise<GetDomainCountResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDomainCountResponse>(await this.doRPCRequest("GetDomainCount", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetDomainCountResponse({}));
  }

  async getDomainCount(request: GetDomainCountRequest): Promise<GetDomainCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDomainCountWithOptions(request, runtime);
  }

  async getDomainsWithOptions(request: GetDomainsRequest, runtime: $Util.RuntimeOptions): Promise<GetDomainsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetDomainsResponse>(await this.doRPCRequest("GetDomains", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetDomainsResponse({}));
  }

  async getDomains(request: GetDomainsRequest): Promise<GetDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDomainsWithOptions(request, runtime);
  }

  async getExpenseSummaryWithOptions(request: GetExpenseSummaryRequest, runtime: $Util.RuntimeOptions): Promise<GetExpenseSummaryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetExpenseSummaryResponse>(await this.doRPCRequest("GetExpenseSummary", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetExpenseSummaryResponse({}));
  }

  async getExpenseSummary(request: GetExpenseSummaryRequest): Promise<GetExpenseSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getExpenseSummaryWithOptions(request, runtime);
  }

  async getFeeHistoryWithOptions(request: GetFeeHistoryRequest, runtime: $Util.RuntimeOptions): Promise<GetFeeHistoryResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetFeeHistoryResponse>(await this.doRPCRequest("GetFeeHistory", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetFeeHistoryResponse({}));
  }

  async getFeeHistory(request: GetFeeHistoryRequest): Promise<GetFeeHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFeeHistoryWithOptions(request, runtime);
  }

  async getFirstFrameDelayDataWithOptions(request: GetFirstFrameDelayDataRequest, runtime: $Util.RuntimeOptions): Promise<GetFirstFrameDelayDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetFirstFrameDelayDataResponse>(await this.doRPCRequest("GetFirstFrameDelayData", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetFirstFrameDelayDataResponse({}));
  }

  async getFirstFrameDelayData(request: GetFirstFrameDelayDataRequest): Promise<GetFirstFrameDelayDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFirstFrameDelayDataWithOptions(request, runtime);
  }

  async getFluencyDataWithOptions(request: GetFluencyDataRequest, runtime: $Util.RuntimeOptions): Promise<GetFluencyDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetFluencyDataResponse>(await this.doRPCRequest("GetFluencyData", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetFluencyDataResponse({}));
  }

  async getFluencyData(request: GetFluencyDataRequest): Promise<GetFluencyDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFluencyDataWithOptions(request, runtime);
  }

  async getLogsListWithOptions(request: GetLogsListRequest, runtime: $Util.RuntimeOptions): Promise<GetLogsListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetLogsListResponse>(await this.doRPCRequest("GetLogsList", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetLogsListResponse({}));
  }

  async getLogsList(request: GetLogsListRequest): Promise<GetLogsListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogsListWithOptions(request, runtime);
  }

  async getShareRateDataWithOptions(request: GetShareRateDataRequest, runtime: $Util.RuntimeOptions): Promise<GetShareRateDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetShareRateDataResponse>(await this.doRPCRequest("GetShareRateData", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetShareRateDataResponse({}));
  }

  async getShareRateData(request: GetShareRateDataRequest): Promise<GetShareRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getShareRateDataWithOptions(request, runtime);
  }

  async getTokenListWithOptions(request: GetTokenListRequest, runtime: $Util.RuntimeOptions): Promise<GetTokenListResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetTokenListResponse>(await this.doRPCRequest("GetTokenList", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetTokenListResponse({}));
  }

  async getTokenList(request: GetTokenListRequest): Promise<GetTokenListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTokenListWithOptions(request, runtime);
  }

  async getTrafficByRegionWithOptions(request: GetTrafficByRegionRequest, runtime: $Util.RuntimeOptions): Promise<GetTrafficByRegionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetTrafficByRegionResponse>(await this.doRPCRequest("GetTrafficByRegion", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetTrafficByRegionResponse({}));
  }

  async getTrafficByRegion(request: GetTrafficByRegionRequest): Promise<GetTrafficByRegionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrafficByRegionWithOptions(request, runtime);
  }

  async getTrafficDataWithOptions(request: GetTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<GetTrafficDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<GetTrafficDataResponse>(await this.doRPCRequest("GetTrafficData", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new GetTrafficDataResponse({}));
  }

  async getTrafficData(request: GetTrafficDataRequest): Promise<GetTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTrafficDataWithOptions(request, runtime);
  }

  async startDomainWithOptions(request: StartDomainRequest, runtime: $Util.RuntimeOptions): Promise<StartDomainResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<StartDomainResponse>(await this.doRPCRequest("StartDomain", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new StartDomainResponse({}));
  }

  async startDomain(request: StartDomainRequest): Promise<StartDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDomainWithOptions(request, runtime);
  }

  async stopDomainWithOptions(request: StopDomainRequest, runtime: $Util.RuntimeOptions): Promise<StopDomainResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<StopDomainResponse>(await this.doRPCRequest("StopDomain", "2017-04-11", "HTTPS", "GET", "AK", "json", req, runtime), new StopDomainResponse({}));
  }

  async stopDomain(request: StopDomainRequest): Promise<StopDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDomainWithOptions(request, runtime);
  }

}
