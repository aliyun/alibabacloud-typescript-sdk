// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class DescribeDomainsResponseBodyDomainsDomain extends $dara.Model {
  /**
   * @example
   * www.aliyun.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyDomains extends $dara.Model {
  domain?: DescribeDomainsResponseBodyDomainsDomain[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyDomainsDomain },
    };
  }

  validate() {
    if(Array.isArray(this.domain)) {
      $dara.Model.validateArray(this.domain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponseBodyAccountInfo extends $dara.Model {
  /**
   * @example
   * 1337****
   */
  accountId?: string;
  dohEnabled?: boolean;
  dohResolveAllEnabled?: boolean;
  monthDohResolveCount?: number;
  /**
   * @example
   * 1500000
   */
  monthFreeCount?: number;
  monthHttpAesResolveCount?: number;
  monthHttpsAesResolveCount?: number;
  /**
   * @example
   * 3
   */
  monthHttpsResolveCount?: number;
  /**
   * @example
   * 9927326
   */
  monthResolveCount?: number;
  /**
   * @example
   * 0
   */
  packageCount?: number;
  /**
   * @example
   * 50F9C40E****
   */
  signSecret?: string;
  /**
   * @example
   * 611523
   */
  signedCount?: number;
  /**
   * @example
   * 1523
   */
  unsignedCount?: number;
  /**
   * @example
   * true
   */
  unsignedEnabled?: boolean;
  /**
   * @example
   * 1
   */
  userStatus?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      dohEnabled: 'DohEnabled',
      dohResolveAllEnabled: 'DohResolveAllEnabled',
      monthDohResolveCount: 'MonthDohResolveCount',
      monthFreeCount: 'MonthFreeCount',
      monthHttpAesResolveCount: 'MonthHttpAesResolveCount',
      monthHttpsAesResolveCount: 'MonthHttpsAesResolveCount',
      monthHttpsResolveCount: 'MonthHttpsResolveCount',
      monthResolveCount: 'MonthResolveCount',
      packageCount: 'PackageCount',
      signSecret: 'SignSecret',
      signedCount: 'SignedCount',
      unsignedCount: 'UnsignedCount',
      unsignedEnabled: 'UnsignedEnabled',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      dohEnabled: 'boolean',
      dohResolveAllEnabled: 'boolean',
      monthDohResolveCount: 'number',
      monthFreeCount: 'number',
      monthHttpAesResolveCount: 'number',
      monthHttpsAesResolveCount: 'number',
      monthHttpsResolveCount: 'number',
      monthResolveCount: 'number',
      packageCount: 'number',
      signSecret: 'string',
      signedCount: 'number',
      unsignedCount: 'number',
      unsignedEnabled: 'boolean',
      userStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveCountSummaryResponseBodyResolveSummary extends $dara.Model {
  doh?: number;
  /**
   * @example
   * 123
   */
  http?: number;
  /**
   * @example
   * 123
   */
  http6?: number;
  httpAes?: string;
  /**
   * @example
   * 123
   */
  https?: number;
  /**
   * @example
   * 123
   */
  https6?: number;
  httpsAes?: string;
  static names(): { [key: string]: string } {
    return {
      doh: 'Doh',
      http: 'Http',
      http6: 'Http6',
      httpAes: 'HttpAes',
      https: 'Https',
      https6: 'Https6',
      httpsAes: 'HttpsAes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      doh: 'number',
      http: 'number',
      http6: 'number',
      httpAes: 'string',
      https: 'number',
      https6: 'number',
      httpsAes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsResponseBodyDataPointsDataPoint extends $dara.Model {
  /**
   * @example
   * 9703
   */
  count?: number;
  /**
   * @example
   * 1488297600
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsResponseBodyDataPoints extends $dara.Model {
  dataPoint?: GetResolveStatisticsResponseBodyDataPointsDataPoint[];
  static names(): { [key: string]: string } {
    return {
      dataPoint: 'DataPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoint: { 'type': 'array', 'itemType': GetResolveStatisticsResponseBodyDataPointsDataPoint },
    };
  }

  validate() {
    if(Array.isArray(this.dataPoint)) {
      $dara.Model.validateArray(this.dataPoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyDomainInfosDomainInfo extends $dara.Model {
  /**
   * @example
   * www.example.com
   */
  domainName?: string;
  resolveHttpAes?: number;
  resolveHttpsAes?: number;
  /**
   * @example
   * 10
   */
  resolved?: number;
  /**
   * @example
   * 20
   */
  resolved6?: number;
  resolvedDoh?: number;
  /**
   * @example
   * 10
   */
  resolvedHttps?: number;
  /**
   * @example
   * 20
   */
  resolvedHttps6?: number;
  timeModified?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      resolveHttpAes: 'ResolveHttpAes',
      resolveHttpsAes: 'ResolveHttpsAes',
      resolved: 'Resolved',
      resolved6: 'Resolved6',
      resolvedDoh: 'ResolvedDoh',
      resolvedHttps: 'ResolvedHttps',
      resolvedHttps6: 'ResolvedHttps6',
      timeModified: 'TimeModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      resolveHttpAes: 'number',
      resolveHttpsAes: 'number',
      resolved: 'number',
      resolved6: 'number',
      resolvedDoh: 'number',
      resolvedHttps: 'number',
      resolvedHttps6: 'number',
      timeModified: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBodyDomainInfos extends $dara.Model {
  domainInfo?: ListDomainsResponseBodyDomainInfosDomainInfo[];
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'DomainInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: { 'type': 'array', 'itemType': ListDomainsResponseBodyDomainInfosDomainInfo },
    };
  }

  validate() {
    if(Array.isArray(this.domainInfo)) {
      $dara.Model.validateArray(this.domainInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainResponseBody extends $dara.Model {
  /**
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
   * @example
   * ADA27798-6911-4B06-AF34-53F62F62XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDomainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddDomainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $dara.Model {
  /**
   * @example
   * 12****
   */
  accountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.example.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBody extends $dara.Model {
  /**
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
   * @example
   * FA8C2599-362D-4113-8FB4-E88A40C2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  accountId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBody extends $dara.Model {
  domains?: DescribeDomainsResponseBodyDomains;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * A6B3BB61-69CB-50E0-9DC0-0C1658D44A47
   */
  requestId?: string;
  /**
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeDomainsResponseBodyDomains,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.domains && typeof (this.domains as any).validate === 'function') {
      (this.domains as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDomainsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponseBody extends $dara.Model {
  accountInfo?: GetAccountInfoResponseBodyAccountInfo;
  /**
   * @example
   * 50F9C40E-188D-4208-BE2C-74271337****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountInfo: 'AccountInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfo: GetAccountInfoResponseBodyAccountInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accountInfo && typeof (this.accountInfo as any).validate === 'function') {
      (this.accountInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAccountInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAccountInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveCountSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * day
   */
  granularity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7
   */
  timeSpan?: number;
  static names(): { [key: string]: string } {
    return {
      granularity: 'Granularity',
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granularity: 'string',
      timeSpan: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveCountSummaryResponseBody extends $dara.Model {
  /**
   * @example
   * 3106FFF3-3612-542A-B2CD-3CF4CD48****
   */
  requestId?: string;
  resolveSummary?: GetResolveCountSummaryResponseBodyResolveSummary;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resolveSummary: 'ResolveSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resolveSummary: GetResolveCountSummaryResponseBodyResolveSummary,
    };
  }

  validate() {
    if(this.resolveSummary && typeof (this.resolveSummary as any).validate === 'function') {
      (this.resolveSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveCountSummaryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResolveCountSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResolveCountSummaryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * month
   */
  granularity?: string;
  /**
   * @example
   * https
   */
  protocolName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  timeSpan?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      granularity: 'Granularity',
      protocolName: 'ProtocolName',
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      granularity: 'string',
      protocolName: 'string',
      timeSpan: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsResponseBody extends $dara.Model {
  dataPoints?: GetResolveStatisticsResponseBodyDataPoints;
  /**
   * @example
   * 50F9C40E-188D-B00B-BE2C-7427E531****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: GetResolveStatisticsResponseBodyDataPoints,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataPoints && typeof (this.dataPoints as any).validate === 'function') {
      (this.dataPoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResolveStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResolveStatisticsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  search?: string;
  withoutMeteringData?: boolean;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      search: 'Search',
      withoutMeteringData: 'WithoutMeteringData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      search: 'string',
      withoutMeteringData: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponseBody extends $dara.Model {
  domainInfos?: ListDomainsResponseBodyDomainInfos;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @example
   * 50F9C40E-188D-4208-BE2C-7427E531****
   */
  requestId?: string;
  /**
   * @example
   * 18
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainInfos: 'DomainInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfos: ListDomainsResponseBodyDomainInfos,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.domainInfos && typeof (this.domainInfos as any).validate === 'function') {
      (this.domainInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDomainsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshResolveCacheRequest extends $dara.Model {
  domains?: string[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshResolveCacheShrinkRequest extends $dara.Model {
  domainsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      domainsShrink: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshResolveCacheResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * FA8C2599-362D-4113-8FB4-E88A40C2****
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshResolveCacheResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RefreshResolveCacheResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshResolveCacheResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("httpdns", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 添加域名
   * 
   * @param request - AddDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDomainResponse
   */
  async addDomainWithOptions(request: AddDomainRequest, runtime: $dara.RuntimeOptions): Promise<AddDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDomain",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddDomainResponse>(await this.callApi(params, req, runtime), new AddDomainResponse({}));
    } else {
      return $dara.cast<AddDomainResponse>(await this.execute(params, req, runtime), new AddDomainResponse({}));
    }

  }

  /**
   * 添加域名
   * 
   * @param request - AddDomainRequest
   * @returns AddDomainResponse
   */
  async addDomain(request: AddDomainRequest): Promise<AddDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDomainWithOptions(request, runtime);
  }

  /**
   * 删除域名
   * 
   * @param request - DeleteDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $dara.RuntimeOptions): Promise<DeleteDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomain",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDomainResponse>(await this.callApi(params, req, runtime), new DeleteDomainResponse({}));
    } else {
      return $dara.cast<DeleteDomainResponse>(await this.execute(params, req, runtime), new DeleteDomainResponse({}));
    }

  }

  /**
   * 删除域名
   * 
   * @param request - DeleteDomainRequest
   * @returns DeleteDomainResponse
   */
  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDomainsResponse
   */
  async describeDomainsWithOptions(request: DescribeDomainsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDomains",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDomainsResponse>(await this.callApi(params, req, runtime), new DescribeDomainsResponse({}));
    } else {
      return $dara.cast<DescribeDomainsResponse>(await this.execute(params, req, runtime), new DescribeDomainsResponse({}));
    }

  }

  /**
   * @param request - DescribeDomainsRequest
   * @returns DescribeDomainsResponse
   */
  async describeDomains(request: DescribeDomainsRequest): Promise<DescribeDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  /**
   * 获取用户信息包含配置项
   * 
   * @param request - GetAccountInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountInfoResponse
   */
  async getAccountInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<GetAccountInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountInfo",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAccountInfoResponse>(await this.callApi(params, req, runtime), new GetAccountInfoResponse({}));
    } else {
      return $dara.cast<GetAccountInfoResponse>(await this.execute(params, req, runtime), new GetAccountInfoResponse({}));
    }

  }

  /**
   * 获取用户信息包含配置项
   * @returns GetAccountInfoResponse
   */
  async getAccountInfo(): Promise<GetAccountInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAccountInfoWithOptions(runtime);
  }

  /**
   * 解析次数概览
   * 
   * @param request - GetResolveCountSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResolveCountSummaryResponse
   */
  async getResolveCountSummaryWithOptions(request: GetResolveCountSummaryRequest, runtime: $dara.RuntimeOptions): Promise<GetResolveCountSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.timeSpan)) {
      query["TimeSpan"] = request.timeSpan;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResolveCountSummary",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetResolveCountSummaryResponse>(await this.callApi(params, req, runtime), new GetResolveCountSummaryResponse({}));
    } else {
      return $dara.cast<GetResolveCountSummaryResponse>(await this.execute(params, req, runtime), new GetResolveCountSummaryResponse({}));
    }

  }

  /**
   * 解析次数概览
   * 
   * @param request - GetResolveCountSummaryRequest
   * @returns GetResolveCountSummaryResponse
   */
  async getResolveCountSummary(request: GetResolveCountSummaryRequest): Promise<GetResolveCountSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResolveCountSummaryWithOptions(request, runtime);
  }

  /**
   * @param request - GetResolveStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResolveStatisticsResponse
   */
  async getResolveStatisticsWithOptions(request: GetResolveStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<GetResolveStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.granularity)) {
      query["Granularity"] = request.granularity;
    }

    if (!$dara.isNull(request.protocolName)) {
      query["ProtocolName"] = request.protocolName;
    }

    if (!$dara.isNull(request.timeSpan)) {
      query["TimeSpan"] = request.timeSpan;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResolveStatistics",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetResolveStatisticsResponse>(await this.callApi(params, req, runtime), new GetResolveStatisticsResponse({}));
    } else {
      return $dara.cast<GetResolveStatisticsResponse>(await this.execute(params, req, runtime), new GetResolveStatisticsResponse({}));
    }

  }

  /**
   * @param request - GetResolveStatisticsRequest
   * @returns GetResolveStatisticsResponse
   */
  async getResolveStatistics(request: GetResolveStatisticsRequest): Promise<GetResolveStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResolveStatisticsWithOptions(request, runtime);
  }

  /**
   * 列举域名以及解析统计信息
   * 
   * @param request - ListDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
   */
  async listDomainsWithOptions(request: ListDomainsRequest, runtime: $dara.RuntimeOptions): Promise<ListDomainsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.search)) {
      query["Search"] = request.search;
    }

    if (!$dara.isNull(request.withoutMeteringData)) {
      query["WithoutMeteringData"] = request.withoutMeteringData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomains",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDomainsResponse>(await this.callApi(params, req, runtime), new ListDomainsResponse({}));
    } else {
      return $dara.cast<ListDomainsResponse>(await this.execute(params, req, runtime), new ListDomainsResponse({}));
    }

  }

  /**
   * 列举域名以及解析统计信息
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(request: ListDomainsRequest): Promise<ListDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDomainsWithOptions(request, runtime);
  }

  /**
   * 刷新域名缓存
   * 
   * @param tmpReq - RefreshResolveCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshResolveCacheResponse
   */
  async refreshResolveCacheWithOptions(tmpReq: RefreshResolveCacheRequest, runtime: $dara.RuntimeOptions): Promise<RefreshResolveCacheResponse> {
    tmpReq.validate();
    let request = new RefreshResolveCacheShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.domains)) {
      request.domainsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.domains, "Domains", "json");
    }

    let query = { };
    if (!$dara.isNull(request.domainsShrink)) {
      query["Domains"] = request.domainsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshResolveCache",
      version: "2016-02-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RefreshResolveCacheResponse>(await this.callApi(params, req, runtime), new RefreshResolveCacheResponse({}));
    } else {
      return $dara.cast<RefreshResolveCacheResponse>(await this.execute(params, req, runtime), new RefreshResolveCacheResponse({}));
    }

  }

  /**
   * 刷新域名缓存
   * 
   * @param request - RefreshResolveCacheRequest
   * @returns RefreshResolveCacheResponse
   */
  async refreshResolveCache(request: RefreshResolveCacheRequest): Promise<RefreshResolveCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshResolveCacheWithOptions(request, runtime);
  }

}
