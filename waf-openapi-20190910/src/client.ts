// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateCertificateRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  certificate?: string;
  privateKey?: string;
  certificateName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      certificate: 'Certificate',
      privateKey: 'PrivateKey',
      certificateName: 'CertificateName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      certificate: 'string',
      privateKey: 'string',
      certificateName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateResponseBody extends $tea.Model {
  requestId?: string;
  certificateId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateByCertificateIdRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  certificateId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      certificateId: 'CertificateId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      certificateId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateByCertificateIdResponseBody extends $tea.Model {
  requestId?: string;
  certificateId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateByCertificateIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCertificateByCertificateIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCertificateByCertificateIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  domain?: string;
  sourceIps?: string;
  isAccessProduct?: number;
  loadBalancing?: number;
  logHeaders?: string;
  httpPort?: string;
  httpsPort?: string;
  http2Port?: string;
  httpToUserIp?: number;
  httpsRedirect?: number;
  clusterType?: number;
  resourceGroupId?: string;
  connectionTime?: number;
  readTime?: number;
  writeTime?: number;
  accessType?: string;
  cloudNativeInstances?: string;
  ipFollowStatus?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      domain: 'Domain',
      sourceIps: 'SourceIps',
      isAccessProduct: 'IsAccessProduct',
      loadBalancing: 'LoadBalancing',
      logHeaders: 'LogHeaders',
      httpPort: 'HttpPort',
      httpsPort: 'HttpsPort',
      http2Port: 'Http2Port',
      httpToUserIp: 'HttpToUserIp',
      httpsRedirect: 'HttpsRedirect',
      clusterType: 'ClusterType',
      resourceGroupId: 'ResourceGroupId',
      connectionTime: 'ConnectionTime',
      readTime: 'ReadTime',
      writeTime: 'WriteTime',
      accessType: 'AccessType',
      cloudNativeInstances: 'CloudNativeInstances',
      ipFollowStatus: 'IpFollowStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      domain: 'string',
      sourceIps: 'string',
      isAccessProduct: 'number',
      loadBalancing: 'number',
      logHeaders: 'string',
      httpPort: 'string',
      httpsPort: 'string',
      http2Port: 'string',
      httpToUserIp: 'number',
      httpsRedirect: 'number',
      clusterType: 'number',
      resourceGroupId: 'string',
      connectionTime: 'number',
      readTime: 'number',
      writeTime: 'number',
      accessType: 'string',
      cloudNativeInstances: 'string',
      ipFollowStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBody extends $tea.Model {
  requestId?: string;
  cname?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cname: 'Cname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtectionModuleRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  defenseType?: string;
  rule?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      defenseType: 'DefenseType',
      rule: 'Rule',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      defenseType: 'string',
      rule: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtectionModuleRuleResponseBody extends $tea.Model {
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

export class CreateProtectionModuleRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProtectionModuleRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProtectionModuleRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainResponseBody extends $tea.Model {
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

export class DeleteInstanceRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  body: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProtectionModuleRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  defenseType?: string;
  ruleId?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      defenseType: 'DefenseType',
      ruleId: 'RuleId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      defenseType: 'string',
      ruleId: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProtectionModuleRuleResponseBody extends $tea.Model {
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

export class DeleteProtectionModuleRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProtectionModuleRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProtectionModuleRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificatesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificatesResponseBody extends $tea.Model {
  requestId?: string;
  certificates?: DescribeCertificatesResponseBodyCertificates[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificates: 'Certificates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificates: { 'type': 'array', 'itemType': DescribeCertificatesResponseBodyCertificates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCertificatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCertificatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertMatchStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  certificate?: string;
  privateKey?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      certificate: 'Certificate',
      privateKey: 'PrivateKey',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      certificate: 'string',
      privateKey: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertMatchStatusResponseBody extends $tea.Model {
  requestId?: string;
  matchStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      matchStatus: 'MatchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      matchStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertMatchStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCertMatchStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCertMatchStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResponseBody extends $tea.Model {
  requestId?: string;
  domain?: DescribeDomainResponseBodyDomain;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domain: DescribeDomainResponseBodyDomain,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAdvanceConfigsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  domainList?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      domainList: 'DomainList',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      domainList: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAdvanceConfigsResponseBody extends $tea.Model {
  requestId?: string;
  domainConfigs?: DescribeDomainAdvanceConfigsResponseBodyDomainConfigs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainConfigs: 'DomainConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainConfigs: { 'type': 'array', 'itemType': DescribeDomainAdvanceConfigsResponseBodyDomainConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAdvanceConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainAdvanceConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainAdvanceConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBasicConfigsRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  domainKey?: string;
  accessType?: string;
  cloudNativeProductId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      domainKey: 'DomainKey',
      accessType: 'AccessType',
      cloudNativeProductId: 'CloudNativeProductId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      domainKey: 'string',
      accessType: 'string',
      cloudNativeProductId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBasicConfigsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  domainConfigs?: DescribeDomainBasicConfigsResponseBodyDomainConfigs[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      domainConfigs: 'DomainConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      domainConfigs: { 'type': 'array', 'itemType': DescribeDomainBasicConfigsResponseBodyDomainConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBasicConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainBasicConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainBasicConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListRequest extends $tea.Model {
  sourceIp?: string;
  resourceGroupId?: string;
  instanceId?: string;
  domainName?: string;
  pageNumber?: number;
  pageSize?: number;
  isSub?: number;
  domainNames?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceGroupId: 'ResourceGroupId',
      instanceId: 'InstanceId',
      domainName: 'DomainName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      isSub: 'IsSub',
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceGroupId: 'string',
      instanceId: 'string',
      domainName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      isSub: 'number',
      domainNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  domainNames?: string[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      domainNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNamesRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  resourceGroupId?: string;
  callSource?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      callSource: 'CallSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
      callSource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNamesResponseBody extends $tea.Model {
  requestId?: string;
  domainNames?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNamesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRuleGroupRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRuleGroupResponseBody extends $tea.Model {
  ruleGroupId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleGroupId: 'RuleGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleGroupId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRuleGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainRuleGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainRuleGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceInfoRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceSource?: string;
  instanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceSource: 'InstanceSource',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceSource: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceInfoResponseBody extends $tea.Model {
  requestId?: string;
  instanceInfo?: DescribeInstanceInfoResponseBodyInstanceInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceInfo: 'InstanceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceInfo: DescribeInstanceInfoResponseBodyInstanceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceInfosRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceSource?: string;
  instanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceSource: 'InstanceSource',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceSource: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceInfosResponseBody extends $tea.Model {
  requestId?: string;
  instanceInfos?: DescribeInstanceInfosResponseBodyInstanceInfos[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceInfos: 'InstanceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceInfos: { 'type': 'array', 'itemType': DescribeInstanceInfosResponseBodyInstanceInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceInfosResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceInfosResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceInfosResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecInfoRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecInfoResponseBody extends $tea.Model {
  instanceSpecInfos?: DescribeInstanceSpecInfoResponseBodyInstanceSpecInfos[];
  requestId?: string;
  instanceId?: string;
  version?: string;
  expireTime?: number;
  static names(): { [key: string]: string } {
    return {
      instanceSpecInfos: 'InstanceSpecInfos',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      version: 'Version',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSpecInfos: { 'type': 'array', 'itemType': DescribeInstanceSpecInfoResponseBodyInstanceSpecInfos },
      requestId: 'string',
      instanceId: 'string',
      version: 'string',
      expireTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceSpecInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceSpecInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogServiceStatusRequest extends $tea.Model {
  sourceIp?: string;
  instanceId?: string;
  region?: string;
  resourceGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  domainNames?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      instanceId: 'InstanceId',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      instanceId: 'string',
      region: 'string',
      resourceGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      domainNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogServiceStatusResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  domainStatus?: DescribeLogServiceStatusResponseBodyDomainStatus[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      domainStatus: 'DomainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      domainStatus: { 'type': 'array', 'itemType': DescribeLogServiceStatusResponseBodyDomainStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLogServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLogServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleCodeConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  codeType?: number;
  codeValue?: number;
  instanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      codeType: 'CodeType',
      codeValue: 'CodeValue',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      codeType: 'number',
      codeValue: 'number',
      instanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleCodeConfigResponseBody extends $tea.Model {
  requestId?: string;
  codeConfigs?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      codeConfigs: 'CodeConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      codeConfigs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleCodeConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProtectionModuleCodeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProtectionModuleCodeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleModeRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  defenseType?: string;
  instanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      defenseType: 'DefenseType',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      defenseType: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleModeResponseBody extends $tea.Model {
  learnStatus?: number;
  requestId?: string;
  mode?: number;
  static names(): { [key: string]: string } {
    return {
      learnStatus: 'LearnStatus',
      requestId: 'RequestId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      learnStatus: 'number',
      requestId: 'string',
      mode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProtectionModuleModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProtectionModuleModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleRulesRequest extends $tea.Model {
  sourceIp?: string;
  pageSize?: number;
  pageNumber?: number;
  domain?: string;
  defenseType?: string;
  query?: string;
  lang?: string;
  instanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      domain: 'Domain',
      defenseType: 'DefenseType',
      query: 'Query',
      lang: 'Lang',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      domain: 'string',
      defenseType: 'string',
      query: 'string',
      lang: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleRulesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  rules?: DescribeProtectionModuleRulesResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeProtectionModuleRulesResponseBodyRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProtectionModuleRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProtectionModuleRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  defenseType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      defenseType: 'DefenseType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      defenseType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleStatusResponseBody extends $tea.Model {
  requestId?: string;
  moduleStatus?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      moduleStatus: 'ModuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      moduleStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeProtectionModuleStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeProtectionModuleStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentResponseBody extends $tea.Model {
  requestId?: string;
  ipV6s?: string;
  ips?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ipV6s: 'IpV6s',
      ips: 'Ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ipV6s: 'string',
      ips: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWafSourceIpSegmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWafSourceIpSegmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  domain?: string;
  sourceIps?: string;
  loadBalancing?: number;
  httpPort?: string;
  httpsPort?: string;
  http2Port?: string;
  httpsRedirect?: number;
  httpToUserIp?: number;
  isAccessProduct?: number;
  xffHeaderMode?: number;
  xffHeaders?: string;
  logHeaders?: string;
  bindingIpv6?: number;
  clusterType?: number;
  connectionTime?: number;
  readTime?: number;
  writeTime?: number;
  accessType?: string;
  cloudNativeInstances?: string;
  ipFollowStatus?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      domain: 'Domain',
      sourceIps: 'SourceIps',
      loadBalancing: 'LoadBalancing',
      httpPort: 'HttpPort',
      httpsPort: 'HttpsPort',
      http2Port: 'Http2Port',
      httpsRedirect: 'HttpsRedirect',
      httpToUserIp: 'HttpToUserIp',
      isAccessProduct: 'IsAccessProduct',
      xffHeaderMode: 'XffHeaderMode',
      xffHeaders: 'XffHeaders',
      logHeaders: 'LogHeaders',
      bindingIpv6: 'BindingIpv6',
      clusterType: 'ClusterType',
      connectionTime: 'ConnectionTime',
      readTime: 'ReadTime',
      writeTime: 'WriteTime',
      accessType: 'AccessType',
      cloudNativeInstances: 'CloudNativeInstances',
      ipFollowStatus: 'IpFollowStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      domain: 'string',
      sourceIps: 'string',
      loadBalancing: 'number',
      httpPort: 'string',
      httpsPort: 'string',
      http2Port: 'string',
      httpsRedirect: 'number',
      httpToUserIp: 'number',
      isAccessProduct: 'number',
      xffHeaderMode: 'number',
      xffHeaders: 'string',
      logHeaders: 'string',
      bindingIpv6: 'number',
      clusterType: 'number',
      connectionTime: 'number',
      readTime: 'number',
      writeTime: 'number',
      accessType: 'string',
      cloudNativeInstances: 'string',
      ipFollowStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainResponseBody extends $tea.Model {
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

export class ModifyDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainIpv6StatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  domain?: string;
  enabled?: string;
  wafVersion?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      domain: 'Domain',
      enabled: 'Enabled',
      wafVersion: 'WafVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      domain: 'string',
      enabled: 'string',
      wafVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainIpv6StatusResponseBody extends $tea.Model {
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

export class ModifyDomainIpv6StatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDomainIpv6StatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDomainIpv6StatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogRetrievalStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  domain?: string;
  enabled?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      domain: 'Domain',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      domain: 'string',
      enabled: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogRetrievalStatusResponseBody extends $tea.Model {
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

export class ModifyLogRetrievalStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyLogRetrievalStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLogRetrievalStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogServiceStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  instanceId?: string;
  domain?: string;
  enabled?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      instanceId: 'InstanceId',
      domain: 'Domain',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      instanceId: 'string',
      domain: 'string',
      enabled: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogServiceStatusResponseBody extends $tea.Model {
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

export class ModifyLogServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyLogServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyLogServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionModuleModeRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  defenseType?: string;
  mode?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      defenseType: 'DefenseType',
      mode: 'Mode',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      defenseType: 'string',
      mode: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionModuleModeResponseBody extends $tea.Model {
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

export class ModifyProtectionModuleModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyProtectionModuleModeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyProtectionModuleModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionModuleRuleRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  defenseType?: string;
  rule?: string;
  ruleId?: number;
  lockVersion?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      defenseType: 'DefenseType',
      rule: 'Rule',
      ruleId: 'RuleId',
      lockVersion: 'LockVersion',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      defenseType: 'string',
      rule: 'string',
      ruleId: 'number',
      lockVersion: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionModuleRuleResponseBody extends $tea.Model {
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

export class ModifyProtectionModuleRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyProtectionModuleRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyProtectionModuleRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionModuleStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  defenseType?: string;
  moduleStatus?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      defenseType: 'DefenseType',
      moduleStatus: 'ModuleStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      defenseType: 'string',
      moduleStatus: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionModuleStatusResponseBody extends $tea.Model {
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

export class ModifyProtectionModuleStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyProtectionModuleStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyProtectionModuleStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionRuleCacheStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  ruleId?: number;
  defenseType?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      ruleId: 'RuleId',
      defenseType: 'DefenseType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      ruleId: 'number',
      defenseType: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionRuleCacheStatusResponseBody extends $tea.Model {
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

export class ModifyProtectionRuleCacheStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyProtectionRuleCacheStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyProtectionRuleCacheStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionRuleStatusRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domain?: string;
  defenseType?: string;
  ruleId?: number;
  ruleStatus?: number;
  lockVersion?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domain: 'Domain',
      defenseType: 'DefenseType',
      ruleId: 'RuleId',
      ruleStatus: 'RuleStatus',
      lockVersion: 'LockVersion',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domain: 'string',
      defenseType: 'string',
      ruleId: 'number',
      ruleStatus: 'number',
      lockVersion: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionRuleStatusResponseBody extends $tea.Model {
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

export class ModifyProtectionRuleStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyProtectionRuleStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyProtectionRuleStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainRuleGroupRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  domains?: string;
  ruleGroupId?: number;
  wafVersion?: number;
  instanceId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      domains: 'Domains',
      ruleGroupId: 'RuleGroupId',
      wafVersion: 'WafVersion',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      domains: 'string',
      ruleGroupId: 'number',
      wafVersion: 'number',
      instanceId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainRuleGroupResponseBody extends $tea.Model {
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

export class SetDomainRuleGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDomainRuleGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDomainRuleGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificatesResponseBodyCertificates extends $tea.Model {
  certificateName?: string;
  commonName?: string;
  sans?: string[];
  isUsing?: boolean;
  certificateId?: number;
  static names(): { [key: string]: string } {
    return {
      certificateName: 'CertificateName',
      commonName: 'CommonName',
      sans: 'Sans',
      isUsing: 'IsUsing',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateName: 'string',
      commonName: 'string',
      sans: { 'type': 'array', 'itemType': 'string' },
      isUsing: 'boolean',
      certificateId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResponseBodyDomainCloudNativeInstancesProtocolPortConfigs extends $tea.Model {
  protocol?: string;
  ports?: string;
  static names(): { [key: string]: string } {
    return {
      protocol: 'Protocol',
      ports: 'Ports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocol: 'string',
      ports: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResponseBodyDomainCloudNativeInstances extends $tea.Model {
  protocolPortConfigs?: DescribeDomainResponseBodyDomainCloudNativeInstancesProtocolPortConfigs[];
  redirectionTypeName?: string;
  cloudNativeProductName?: string;
  instanceId?: string;
  IPAddressList?: string;
  static names(): { [key: string]: string } {
    return {
      protocolPortConfigs: 'ProtocolPortConfigs',
      redirectionTypeName: 'RedirectionTypeName',
      cloudNativeProductName: 'CloudNativeProductName',
      instanceId: 'InstanceId',
      IPAddressList: 'IPAddressList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protocolPortConfigs: { 'type': 'array', 'itemType': DescribeDomainResponseBodyDomainCloudNativeInstancesProtocolPortConfigs },
      redirectionTypeName: 'string',
      cloudNativeProductName: 'string',
      instanceId: 'string',
      IPAddressList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResponseBodyDomainLogHeaders extends $tea.Model {
  k?: string;
  v?: string;
  static names(): { [key: string]: string } {
    return {
      k: 'k',
      v: 'v',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k: 'string',
      v: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResponseBodyDomain extends $tea.Model {
  http2Port?: string[];
  cloudNativeInstances?: DescribeDomainResponseBodyDomainCloudNativeInstances[];
  httpToUserIp?: number;
  httpPort?: string[];
  logHeaders?: DescribeDomainResponseBodyDomainLogHeaders[];
  isAccessProduct?: number;
  httpsRedirect?: number;
  loadBalancing?: number;
  ipFollowStatus?: number;
  accessType?: string;
  version?: number;
  clusterType?: number;
  writeTime?: number;
  readTime?: number;
  resourceGroupId?: string;
  cname?: string;
  sourceIps?: string[];
  connectionTime?: number;
  httpsPort?: string[];
  static names(): { [key: string]: string } {
    return {
      http2Port: 'Http2Port',
      cloudNativeInstances: 'CloudNativeInstances',
      httpToUserIp: 'HttpToUserIp',
      httpPort: 'HttpPort',
      logHeaders: 'LogHeaders',
      isAccessProduct: 'IsAccessProduct',
      httpsRedirect: 'HttpsRedirect',
      loadBalancing: 'LoadBalancing',
      ipFollowStatus: 'IpFollowStatus',
      accessType: 'AccessType',
      version: 'Version',
      clusterType: 'ClusterType',
      writeTime: 'WriteTime',
      readTime: 'ReadTime',
      resourceGroupId: 'ResourceGroupId',
      cname: 'Cname',
      sourceIps: 'SourceIps',
      connectionTime: 'ConnectionTime',
      httpsPort: 'HttpsPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      http2Port: { 'type': 'array', 'itemType': 'string' },
      cloudNativeInstances: { 'type': 'array', 'itemType': DescribeDomainResponseBodyDomainCloudNativeInstances },
      httpToUserIp: 'number',
      httpPort: { 'type': 'array', 'itemType': 'string' },
      logHeaders: { 'type': 'array', 'itemType': DescribeDomainResponseBodyDomainLogHeaders },
      isAccessProduct: 'number',
      httpsRedirect: 'number',
      loadBalancing: 'number',
      ipFollowStatus: 'number',
      accessType: 'string',
      version: 'number',
      clusterType: 'number',
      writeTime: 'number',
      readTime: 'number',
      resourceGroupId: 'string',
      cname: 'string',
      sourceIps: { 'type': 'array', 'itemType': 'string' },
      connectionTime: 'number',
      httpsPort: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAdvanceConfigsResponseBodyDomainConfigsProfile extends $tea.Model {
  http2Port?: string;
  ipv6Status?: number;
  httpPort?: string;
  GSLBStatus?: string;
  rs?: string;
  vipServiceStatus?: number;
  clusterType?: number;
  exclusiveVipStatus?: number;
  cname?: string;
  certStatus?: number;
  httpsPort?: string;
  resolvedType?: number;
  static names(): { [key: string]: string } {
    return {
      http2Port: 'Http2Port',
      ipv6Status: 'Ipv6Status',
      httpPort: 'HttpPort',
      GSLBStatus: 'GSLBStatus',
      rs: 'Rs',
      vipServiceStatus: 'VipServiceStatus',
      clusterType: 'ClusterType',
      exclusiveVipStatus: 'ExclusiveVipStatus',
      cname: 'Cname',
      certStatus: 'CertStatus',
      httpsPort: 'HttpsPort',
      resolvedType: 'ResolvedType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      http2Port: 'string',
      ipv6Status: 'number',
      httpPort: 'string',
      GSLBStatus: 'string',
      rs: 'string',
      vipServiceStatus: 'number',
      clusterType: 'number',
      exclusiveVipStatus: 'number',
      cname: 'string',
      certStatus: 'number',
      httpsPort: 'string',
      resolvedType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAdvanceConfigsResponseBodyDomainConfigs extends $tea.Model {
  profile?: DescribeDomainAdvanceConfigsResponseBodyDomainConfigsProfile;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      profile: 'Profile',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profile: DescribeDomainAdvanceConfigsResponseBodyDomainConfigsProfile,
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBasicConfigsResponseBodyDomainConfigs extends $tea.Model {
  status?: number;
  domain?: string;
  owner?: string;
  ccMode?: number;
  ccStatus?: number;
  accessType?: string;
  version?: number;
  aclStatus?: number;
  wafStatus?: number;
  wafMode?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      domain: 'Domain',
      owner: 'Owner',
      ccMode: 'CcMode',
      ccStatus: 'CcStatus',
      accessType: 'AccessType',
      version: 'Version',
      aclStatus: 'AclStatus',
      wafStatus: 'WafStatus',
      wafMode: 'WafMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      domain: 'string',
      owner: 'string',
      ccMode: 'number',
      ccStatus: 'number',
      accessType: 'string',
      version: 'number',
      aclStatus: 'number',
      wafStatus: 'number',
      wafMode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceInfoResponseBodyInstanceInfo extends $tea.Model {
  status?: number;
  endDate?: number;
  version?: string;
  remainDay?: number;
  region?: string;
  payType?: number;
  inDebt?: number;
  instanceId?: string;
  subscriptionType?: string;
  trial?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      endDate: 'EndDate',
      version: 'Version',
      remainDay: 'RemainDay',
      region: 'Region',
      payType: 'PayType',
      inDebt: 'InDebt',
      instanceId: 'InstanceId',
      subscriptionType: 'SubscriptionType',
      trial: 'Trial',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      endDate: 'number',
      version: 'string',
      remainDay: 'number',
      region: 'string',
      payType: 'number',
      inDebt: 'number',
      instanceId: 'string',
      subscriptionType: 'string',
      trial: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceInfosResponseBodyInstanceInfos extends $tea.Model {
  status?: number;
  endDate?: number;
  remainDay?: number;
  region?: string;
  payType?: number;
  inDebt?: number;
  instanceId?: string;
  subscriptionType?: string;
  trial?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      endDate: 'EndDate',
      remainDay: 'RemainDay',
      region: 'Region',
      payType: 'PayType',
      inDebt: 'InDebt',
      instanceId: 'InstanceId',
      subscriptionType: 'SubscriptionType',
      trial: 'Trial',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      endDate: 'number',
      remainDay: 'number',
      region: 'string',
      payType: 'number',
      inDebt: 'number',
      instanceId: 'string',
      subscriptionType: 'string',
      trial: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecInfoResponseBodyInstanceSpecInfos extends $tea.Model {
  value?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogServiceStatusResponseBodyDomainStatus extends $tea.Model {
  domain?: string;
  slsLogActive?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      slsLogActive: 'SlsLogActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      slsLogActive: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleRulesResponseBodyRules extends $tea.Model {
  status?: number;
  time?: number;
  version?: number;
  content?: { [key: string]: any };
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      time: 'Time',
      version: 'Version',
      content: 'Content',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      time: 'number',
      version: 'number',
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ruleId: 'number',
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
      'cn-qingdao': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-chengdu': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-zhangjiakou': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-huhehaote': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-hangzhou': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-heyuan': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-wulanchabu': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'us-west-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'us-east-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'eu-central-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'me-east-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "wafopenapi.ap-southeast-1.aliyuncs.com",
      'cn-shanghai-finance-1': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-shenzhen-finance-1': "wafopenapi.cn-hangzhou.aliyuncs.com",
      'cn-north-2-gov-1': "wafopenapi.cn-hangzhou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("waf-openapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createCertificateWithOptions(request: CreateCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCertificateResponse>(await this.doRPCRequest("CreateCertificate", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCertificateResponse({}));
  }

  async createCertificate(request: CreateCertificateRequest): Promise<CreateCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateWithOptions(request, runtime);
  }

  async createCertificateByCertificateIdWithOptions(request: CreateCertificateByCertificateIdRequest, runtime: $Util.RuntimeOptions): Promise<CreateCertificateByCertificateIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCertificateByCertificateIdResponse>(await this.doRPCRequest("CreateCertificateByCertificateId", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCertificateByCertificateIdResponse({}));
  }

  async createCertificateByCertificateId(request: CreateCertificateByCertificateIdRequest): Promise<CreateCertificateByCertificateIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateByCertificateIdWithOptions(request, runtime);
  }

  async createDomainWithOptions(request: CreateDomainRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDomainResponse>(await this.doRPCRequest("CreateDomain", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDomainResponse({}));
  }

  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  async createProtectionModuleRuleWithOptions(request: CreateProtectionModuleRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateProtectionModuleRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProtectionModuleRuleResponse>(await this.doRPCRequest("CreateProtectionModuleRule", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProtectionModuleRuleResponse({}));
  }

  async createProtectionModuleRule(request: CreateProtectionModuleRuleRequest): Promise<CreateProtectionModuleRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProtectionModuleRuleWithOptions(request, runtime);
  }

  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDomainResponse>(await this.doRPCRequest("DeleteDomain", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDomainResponse({}));
  }

  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteInstanceResponse>(await this.doRPCRequest("DeleteInstance", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async deleteProtectionModuleRuleWithOptions(request: DeleteProtectionModuleRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProtectionModuleRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProtectionModuleRuleResponse>(await this.doRPCRequest("DeleteProtectionModuleRule", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProtectionModuleRuleResponse({}));
  }

  async deleteProtectionModuleRule(request: DeleteProtectionModuleRuleRequest): Promise<DeleteProtectionModuleRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProtectionModuleRuleWithOptions(request, runtime);
  }

  async describeCertificatesWithOptions(request: DescribeCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertificatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCertificatesResponse>(await this.doRPCRequest("DescribeCertificates", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCertificatesResponse({}));
  }

  async describeCertificates(request: DescribeCertificatesRequest): Promise<DescribeCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertificatesWithOptions(request, runtime);
  }

  async describeCertMatchStatusWithOptions(request: DescribeCertMatchStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertMatchStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCertMatchStatusResponse>(await this.doRPCRequest("DescribeCertMatchStatus", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCertMatchStatusResponse({}));
  }

  async describeCertMatchStatus(request: DescribeCertMatchStatusRequest): Promise<DescribeCertMatchStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertMatchStatusWithOptions(request, runtime);
  }

  async describeDomainWithOptions(request: DescribeDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainResponse>(await this.doRPCRequest("DescribeDomain", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainResponse({}));
  }

  async describeDomain(request: DescribeDomainRequest): Promise<DescribeDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainWithOptions(request, runtime);
  }

  async describeDomainAdvanceConfigsWithOptions(request: DescribeDomainAdvanceConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainAdvanceConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainAdvanceConfigsResponse>(await this.doRPCRequest("DescribeDomainAdvanceConfigs", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainAdvanceConfigsResponse({}));
  }

  async describeDomainAdvanceConfigs(request: DescribeDomainAdvanceConfigsRequest): Promise<DescribeDomainAdvanceConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainAdvanceConfigsWithOptions(request, runtime);
  }

  async describeDomainBasicConfigsWithOptions(request: DescribeDomainBasicConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainBasicConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainBasicConfigsResponse>(await this.doRPCRequest("DescribeDomainBasicConfigs", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainBasicConfigsResponse({}));
  }

  async describeDomainBasicConfigs(request: DescribeDomainBasicConfigsRequest): Promise<DescribeDomainBasicConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainBasicConfigsWithOptions(request, runtime);
  }

  async describeDomainListWithOptions(request: DescribeDomainListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainListResponse>(await this.doRPCRequest("DescribeDomainList", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainListResponse({}));
  }

  async describeDomainList(request: DescribeDomainListRequest): Promise<DescribeDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainListWithOptions(request, runtime);
  }

  async describeDomainNamesWithOptions(request: DescribeDomainNamesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainNamesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainNamesResponse>(await this.doRPCRequest("DescribeDomainNames", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainNamesResponse({}));
  }

  async describeDomainNames(request: DescribeDomainNamesRequest): Promise<DescribeDomainNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainNamesWithOptions(request, runtime);
  }

  async describeDomainRuleGroupWithOptions(request: DescribeDomainRuleGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRuleGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainRuleGroupResponse>(await this.doRPCRequest("DescribeDomainRuleGroup", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainRuleGroupResponse({}));
  }

  async describeDomainRuleGroup(request: DescribeDomainRuleGroupRequest): Promise<DescribeDomainRuleGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRuleGroupWithOptions(request, runtime);
  }

  async describeInstanceInfoWithOptions(request: DescribeInstanceInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceInfoResponse>(await this.doRPCRequest("DescribeInstanceInfo", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceInfoResponse({}));
  }

  async describeInstanceInfo(request: DescribeInstanceInfoRequest): Promise<DescribeInstanceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceInfoWithOptions(request, runtime);
  }

  async describeInstanceInfosWithOptions(request: DescribeInstanceInfosRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceInfosResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceInfosResponse>(await this.doRPCRequest("DescribeInstanceInfos", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceInfosResponse({}));
  }

  async describeInstanceInfos(request: DescribeInstanceInfosRequest): Promise<DescribeInstanceInfosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceInfosWithOptions(request, runtime);
  }

  async describeInstanceSpecInfoWithOptions(request: DescribeInstanceSpecInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSpecInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceSpecInfoResponse>(await this.doRPCRequest("DescribeInstanceSpecInfo", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceSpecInfoResponse({}));
  }

  async describeInstanceSpecInfo(request: DescribeInstanceSpecInfoRequest): Promise<DescribeInstanceSpecInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSpecInfoWithOptions(request, runtime);
  }

  async describeLogServiceStatusWithOptions(request: DescribeLogServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogServiceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeLogServiceStatusResponse>(await this.doRPCRequest("DescribeLogServiceStatus", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeLogServiceStatusResponse({}));
  }

  async describeLogServiceStatus(request: DescribeLogServiceStatusRequest): Promise<DescribeLogServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogServiceStatusWithOptions(request, runtime);
  }

  async describeProtectionModuleCodeConfigWithOptions(request: DescribeProtectionModuleCodeConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProtectionModuleCodeConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProtectionModuleCodeConfigResponse>(await this.doRPCRequest("DescribeProtectionModuleCodeConfig", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProtectionModuleCodeConfigResponse({}));
  }

  async describeProtectionModuleCodeConfig(request: DescribeProtectionModuleCodeConfigRequest): Promise<DescribeProtectionModuleCodeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProtectionModuleCodeConfigWithOptions(request, runtime);
  }

  async describeProtectionModuleModeWithOptions(request: DescribeProtectionModuleModeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProtectionModuleModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProtectionModuleModeResponse>(await this.doRPCRequest("DescribeProtectionModuleMode", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProtectionModuleModeResponse({}));
  }

  async describeProtectionModuleMode(request: DescribeProtectionModuleModeRequest): Promise<DescribeProtectionModuleModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProtectionModuleModeWithOptions(request, runtime);
  }

  async describeProtectionModuleRulesWithOptions(request: DescribeProtectionModuleRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProtectionModuleRulesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProtectionModuleRulesResponse>(await this.doRPCRequest("DescribeProtectionModuleRules", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProtectionModuleRulesResponse({}));
  }

  async describeProtectionModuleRules(request: DescribeProtectionModuleRulesRequest): Promise<DescribeProtectionModuleRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProtectionModuleRulesWithOptions(request, runtime);
  }

  async describeProtectionModuleStatusWithOptions(request: DescribeProtectionModuleStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProtectionModuleStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeProtectionModuleStatusResponse>(await this.doRPCRequest("DescribeProtectionModuleStatus", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeProtectionModuleStatusResponse({}));
  }

  async describeProtectionModuleStatus(request: DescribeProtectionModuleStatusRequest): Promise<DescribeProtectionModuleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProtectionModuleStatusWithOptions(request, runtime);
  }

  async describeWafSourceIpSegmentWithOptions(request: DescribeWafSourceIpSegmentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWafSourceIpSegmentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWafSourceIpSegmentResponse>(await this.doRPCRequest("DescribeWafSourceIpSegment", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWafSourceIpSegmentResponse({}));
  }

  async describeWafSourceIpSegment(request: DescribeWafSourceIpSegmentRequest): Promise<DescribeWafSourceIpSegmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWafSourceIpSegmentWithOptions(request, runtime);
  }

  async modifyDomainWithOptions(request: ModifyDomainRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDomainResponse>(await this.doRPCRequest("ModifyDomain", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDomainResponse({}));
  }

  async modifyDomain(request: ModifyDomainRequest): Promise<ModifyDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDomainWithOptions(request, runtime);
  }

  async modifyDomainIpv6StatusWithOptions(request: ModifyDomainIpv6StatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDomainIpv6StatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDomainIpv6StatusResponse>(await this.doRPCRequest("ModifyDomainIpv6Status", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDomainIpv6StatusResponse({}));
  }

  async modifyDomainIpv6Status(request: ModifyDomainIpv6StatusRequest): Promise<ModifyDomainIpv6StatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDomainIpv6StatusWithOptions(request, runtime);
  }

  async modifyLogRetrievalStatusWithOptions(request: ModifyLogRetrievalStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLogRetrievalStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLogRetrievalStatusResponse>(await this.doRPCRequest("ModifyLogRetrievalStatus", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLogRetrievalStatusResponse({}));
  }

  async modifyLogRetrievalStatus(request: ModifyLogRetrievalStatusRequest): Promise<ModifyLogRetrievalStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLogRetrievalStatusWithOptions(request, runtime);
  }

  async modifyLogServiceStatusWithOptions(request: ModifyLogServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLogServiceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyLogServiceStatusResponse>(await this.doRPCRequest("ModifyLogServiceStatus", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyLogServiceStatusResponse({}));
  }

  async modifyLogServiceStatus(request: ModifyLogServiceStatusRequest): Promise<ModifyLogServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLogServiceStatusWithOptions(request, runtime);
  }

  async modifyProtectionModuleModeWithOptions(request: ModifyProtectionModuleModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyProtectionModuleModeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyProtectionModuleModeResponse>(await this.doRPCRequest("ModifyProtectionModuleMode", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyProtectionModuleModeResponse({}));
  }

  async modifyProtectionModuleMode(request: ModifyProtectionModuleModeRequest): Promise<ModifyProtectionModuleModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyProtectionModuleModeWithOptions(request, runtime);
  }

  async modifyProtectionModuleRuleWithOptions(request: ModifyProtectionModuleRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyProtectionModuleRuleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyProtectionModuleRuleResponse>(await this.doRPCRequest("ModifyProtectionModuleRule", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyProtectionModuleRuleResponse({}));
  }

  async modifyProtectionModuleRule(request: ModifyProtectionModuleRuleRequest): Promise<ModifyProtectionModuleRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyProtectionModuleRuleWithOptions(request, runtime);
  }

  async modifyProtectionModuleStatusWithOptions(request: ModifyProtectionModuleStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyProtectionModuleStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyProtectionModuleStatusResponse>(await this.doRPCRequest("ModifyProtectionModuleStatus", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyProtectionModuleStatusResponse({}));
  }

  async modifyProtectionModuleStatus(request: ModifyProtectionModuleStatusRequest): Promise<ModifyProtectionModuleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyProtectionModuleStatusWithOptions(request, runtime);
  }

  async modifyProtectionRuleCacheStatusWithOptions(request: ModifyProtectionRuleCacheStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyProtectionRuleCacheStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyProtectionRuleCacheStatusResponse>(await this.doRPCRequest("ModifyProtectionRuleCacheStatus", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyProtectionRuleCacheStatusResponse({}));
  }

  async modifyProtectionRuleCacheStatus(request: ModifyProtectionRuleCacheStatusRequest): Promise<ModifyProtectionRuleCacheStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyProtectionRuleCacheStatusWithOptions(request, runtime);
  }

  async modifyProtectionRuleStatusWithOptions(request: ModifyProtectionRuleStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyProtectionRuleStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyProtectionRuleStatusResponse>(await this.doRPCRequest("ModifyProtectionRuleStatus", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyProtectionRuleStatusResponse({}));
  }

  async modifyProtectionRuleStatus(request: ModifyProtectionRuleStatusRequest): Promise<ModifyProtectionRuleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyProtectionRuleStatusWithOptions(request, runtime);
  }

  async setDomainRuleGroupWithOptions(request: SetDomainRuleGroupRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainRuleGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDomainRuleGroupResponse>(await this.doRPCRequest("SetDomainRuleGroup", "2019-09-10", "HTTPS", "POST", "AK", "json", req, runtime), new SetDomainRuleGroupResponse({}));
  }

  async setDomainRuleGroup(request: SetDomainRuleGroupRequest): Promise<SetDomainRuleGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainRuleGroupWithOptions(request, runtime);
  }

}
