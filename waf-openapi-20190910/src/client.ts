// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateCertificateRequest extends $tea.Model {
  certificate?: string;
  certificateName?: string;
  domain?: string;
  instanceId?: string;
  privateKey?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateName: 'CertificateName',
      domain: 'Domain',
      instanceId: 'InstanceId',
      privateKey: 'PrivateKey',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateName: 'string',
      domain: 'string',
      instanceId: 'string',
      privateKey: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateResponseBody extends $tea.Model {
  certificateId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCertificateResponseBody;
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
      body: CreateCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateByCertificateIdRequest extends $tea.Model {
  certificateId?: number;
  domain?: string;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'number',
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateByCertificateIdResponseBody extends $tea.Model {
  certificateId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateByCertificateIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCertificateByCertificateIdResponseBody;
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
      body: CreateCertificateByCertificateIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainRequest extends $tea.Model {
  accessHeaderMode?: number;
  accessHeaders?: string;
  accessType?: string;
  cloudNativeInstances?: string;
  clusterType?: number;
  connectionTime?: number;
  domain?: string;
  http2Port?: string;
  httpPort?: string;
  httpToUserIp?: number;
  httpsPort?: string;
  httpsRedirect?: number;
  instanceId?: string;
  ipFollowStatus?: number;
  isAccessProduct?: number;
  keepalive?: boolean;
  keepaliveRequests?: number;
  keepaliveTimeout?: number;
  loadBalancing?: number;
  logHeaders?: string;
  readTime?: number;
  regionId?: string;
  resourceGroupId?: string;
  retry?: boolean;
  sniHost?: string;
  sniStatus?: number;
  sourceIps?: string;
  writeTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessHeaderMode: 'AccessHeaderMode',
      accessHeaders: 'AccessHeaders',
      accessType: 'AccessType',
      cloudNativeInstances: 'CloudNativeInstances',
      clusterType: 'ClusterType',
      connectionTime: 'ConnectionTime',
      domain: 'Domain',
      http2Port: 'Http2Port',
      httpPort: 'HttpPort',
      httpToUserIp: 'HttpToUserIp',
      httpsPort: 'HttpsPort',
      httpsRedirect: 'HttpsRedirect',
      instanceId: 'InstanceId',
      ipFollowStatus: 'IpFollowStatus',
      isAccessProduct: 'IsAccessProduct',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      loadBalancing: 'LoadBalancing',
      logHeaders: 'LogHeaders',
      readTime: 'ReadTime',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      retry: 'Retry',
      sniHost: 'SniHost',
      sniStatus: 'SniStatus',
      sourceIps: 'SourceIps',
      writeTime: 'WriteTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessHeaderMode: 'number',
      accessHeaders: 'string',
      accessType: 'string',
      cloudNativeInstances: 'string',
      clusterType: 'number',
      connectionTime: 'number',
      domain: 'string',
      http2Port: 'string',
      httpPort: 'string',
      httpToUserIp: 'number',
      httpsPort: 'string',
      httpsRedirect: 'number',
      instanceId: 'string',
      ipFollowStatus: 'number',
      isAccessProduct: 'number',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadBalancing: 'number',
      logHeaders: 'string',
      readTime: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      retry: 'boolean',
      sniHost: 'string',
      sniStatus: 'number',
      sourceIps: 'string',
      writeTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBody extends $tea.Model {
  cname?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDomainResponseBody;
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
      body: CreateDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProtectionModuleRuleRequest extends $tea.Model {
  defenseType?: string;
  domain?: string;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  rule?: string;
  static names(): { [key: string]: string } {
    return {
      defenseType: 'DefenseType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      rule: 'Rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseType: 'string',
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      rule: 'string',
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
  statusCode: number;
  body: CreateProtectionModuleRuleResponseBody;
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
      body: CreateProtectionModuleRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDomainRequest extends $tea.Model {
  domain?: string;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  statusCode: number;
  body: DeleteDomainResponseBody;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
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
  statusCode: number;
  body: DeleteInstanceResponseBody;
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
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProtectionModuleRuleRequest extends $tea.Model {
  defenseType?: string;
  domain?: string;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseType: 'DefenseType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseType: 'string',
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      ruleId: 'number',
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
  statusCode: number;
  body: DeleteProtectionModuleRuleResponseBody;
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
      body: DeleteProtectionModuleRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertMatchStatusRequest extends $tea.Model {
  certificate?: string;
  domain?: string;
  instanceId?: string;
  privateKey?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      domain: 'Domain',
      instanceId: 'InstanceId',
      privateKey: 'PrivateKey',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      domain: 'string',
      instanceId: 'string',
      privateKey: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertMatchStatusResponseBody extends $tea.Model {
  matchStatus?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      matchStatus: 'MatchStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchStatus: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertMatchStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCertMatchStatusResponseBody;
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
      body: DescribeCertMatchStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificatesRequest extends $tea.Model {
  domain?: string;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificatesResponseBody extends $tea.Model {
  certificates?: DescribeCertificatesResponseBodyCertificates[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': DescribeCertificatesResponseBodyCertificates },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCertificatesResponseBody;
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
      body: DescribeCertificatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRequest extends $tea.Model {
  domain?: string;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResponseBody extends $tea.Model {
  domain?: DescribeDomainResponseBodyDomain;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: DescribeDomainResponseBodyDomain,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainResponseBody;
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
      body: DescribeDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAdvanceConfigsRequest extends $tea.Model {
  domainList?: string;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domainList: 'DomainList',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainList: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAdvanceConfigsResponseBody extends $tea.Model {
  domainConfigs?: DescribeDomainAdvanceConfigsResponseBodyDomainConfigs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigs: 'DomainConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigs: { 'type': 'array', 'itemType': DescribeDomainAdvanceConfigsResponseBodyDomainConfigs },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAdvanceConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainAdvanceConfigsResponseBody;
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
      body: DescribeDomainAdvanceConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBasicConfigsRequest extends $tea.Model {
  accessType?: string;
  cloudNativeProductId?: number;
  domainKey?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      cloudNativeProductId: 'CloudNativeProductId',
      domainKey: 'DomainKey',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      cloudNativeProductId: 'number',
      domainKey: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBasicConfigsResponseBody extends $tea.Model {
  domainConfigs?: DescribeDomainBasicConfigsResponseBodyDomainConfigs[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainConfigs: 'DomainConfigs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigs: { 'type': 'array', 'itemType': DescribeDomainBasicConfigsResponseBodyDomainConfigs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBasicConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainBasicConfigsResponseBody;
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
      body: DescribeDomainBasicConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListRequest extends $tea.Model {
  domainName?: string;
  domainNames?: string[];
  instanceId?: string;
  isSub?: number;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainNames: 'DomainNames',
      instanceId: 'InstanceId',
      isSub: 'IsSub',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainNames: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      isSub: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListResponseBody extends $tea.Model {
  domainNames?: string[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainListResponseBody;
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
      body: DescribeDomainListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNamesRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNamesResponseBody extends $tea.Model {
  domainNames?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainNamesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainNamesResponseBody;
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
      body: DescribeDomainNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRuleGroupRequest extends $tea.Model {
  domain?: string;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRuleGroupResponseBody extends $tea.Model {
  requestId?: string;
  ruleGroupId?: number;
  wafAiStatus?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleGroupId: 'RuleGroupId',
      wafAiStatus: 'WafAiStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleGroupId: 'number',
      wafAiStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRuleGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDomainRuleGroupResponseBody;
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
      body: DescribeDomainRuleGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceInfoRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceInfoResponseBody extends $tea.Model {
  instanceInfo?: DescribeInstanceInfoResponseBodyInstanceInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceInfo: 'InstanceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfo: DescribeInstanceInfoResponseBodyInstanceInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceInfoResponseBody;
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
      body: DescribeInstanceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecInfoRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecInfoResponseBody extends $tea.Model {
  expireTime?: number;
  instanceId?: string;
  instanceSpecInfos?: DescribeInstanceSpecInfoResponseBodyInstanceSpecInfos[];
  requestId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceSpecInfos: 'InstanceSpecInfos',
      requestId: 'RequestId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      instanceId: 'string',
      instanceSpecInfos: { 'type': 'array', 'itemType': DescribeInstanceSpecInfoResponseBodyInstanceSpecInfos },
      requestId: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceSpecInfoResponseBody;
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
      body: DescribeInstanceSpecInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogServiceStatusRequest extends $tea.Model {
  domainNames?: string[];
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  region?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogServiceStatusResponseBody extends $tea.Model {
  domainStatus?: DescribeLogServiceStatusResponseBodyDomainStatus[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainStatus: 'DomainStatus',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainStatus: { 'type': 'array', 'itemType': DescribeLogServiceStatusResponseBodyDomainStatus },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeLogServiceStatusResponseBody;
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
      body: DescribeLogServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleCodeConfigRequest extends $tea.Model {
  codeType?: number;
  codeValue?: number;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      codeType: 'CodeType',
      codeValue: 'CodeValue',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeType: 'number',
      codeValue: 'number',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleCodeConfigResponseBody extends $tea.Model {
  codeConfigs?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeConfigs: 'CodeConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeConfigs: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleCodeConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProtectionModuleCodeConfigResponseBody;
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
      body: DescribeProtectionModuleCodeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleModeRequest extends $tea.Model {
  defenseType?: string;
  domain?: string;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      defenseType: 'DefenseType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseType: 'string',
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleModeResponseBody extends $tea.Model {
  mode?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleModeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProtectionModuleModeResponseBody;
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
      body: DescribeProtectionModuleModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleRulesRequest extends $tea.Model {
  defenseType?: string;
  domain?: string;
  instanceId?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  query?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      defenseType: 'DefenseType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseType: 'string',
      domain: 'string',
      instanceId: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleRulesResponseBody extends $tea.Model {
  requestId?: string;
  rules?: DescribeProtectionModuleRulesResponseBodyRules[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeProtectionModuleRulesResponseBodyRules },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleRulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProtectionModuleRulesResponseBody;
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
      body: DescribeProtectionModuleRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleStatusRequest extends $tea.Model {
  defenseType?: string;
  domain?: string;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      defenseType: 'DefenseType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseType: 'string',
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleStatusResponseBody extends $tea.Model {
  moduleStatus?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      moduleStatus: 'ModuleStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleStatus: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProtectionModuleStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeProtectionModuleStatusResponseBody;
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
      body: DescribeProtectionModuleStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentRequest extends $tea.Model {
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentResponseBody extends $tea.Model {
  ipV6s?: string;
  ips?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipV6s: 'IpV6s',
      ips: 'Ips',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipV6s: 'string',
      ips: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWafSourceIpSegmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeWafSourceIpSegmentResponseBody;
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
      body: DescribeWafSourceIpSegmentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainRequest extends $tea.Model {
  accessHeaderMode?: number;
  accessHeaders?: string;
  accessType?: string;
  cloudNativeInstances?: string;
  clusterType?: number;
  connectionTime?: number;
  domain?: string;
  http2Port?: string;
  httpPort?: string;
  httpToUserIp?: number;
  httpsPort?: string;
  httpsRedirect?: number;
  instanceId?: string;
  ipFollowStatus?: number;
  isAccessProduct?: number;
  keepalive?: boolean;
  keepaliveRequests?: number;
  keepaliveTimeout?: number;
  loadBalancing?: number;
  logHeaders?: string;
  readTime?: number;
  regionId?: string;
  resourceGroupId?: string;
  retry?: boolean;
  sniHost?: string;
  sniStatus?: number;
  sourceIps?: string;
  writeTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessHeaderMode: 'AccessHeaderMode',
      accessHeaders: 'AccessHeaders',
      accessType: 'AccessType',
      cloudNativeInstances: 'CloudNativeInstances',
      clusterType: 'ClusterType',
      connectionTime: 'ConnectionTime',
      domain: 'Domain',
      http2Port: 'Http2Port',
      httpPort: 'HttpPort',
      httpToUserIp: 'HttpToUserIp',
      httpsPort: 'HttpsPort',
      httpsRedirect: 'HttpsRedirect',
      instanceId: 'InstanceId',
      ipFollowStatus: 'IpFollowStatus',
      isAccessProduct: 'IsAccessProduct',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      loadBalancing: 'LoadBalancing',
      logHeaders: 'LogHeaders',
      readTime: 'ReadTime',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      retry: 'Retry',
      sniHost: 'SniHost',
      sniStatus: 'SniStatus',
      sourceIps: 'SourceIps',
      writeTime: 'WriteTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessHeaderMode: 'number',
      accessHeaders: 'string',
      accessType: 'string',
      cloudNativeInstances: 'string',
      clusterType: 'number',
      connectionTime: 'number',
      domain: 'string',
      http2Port: 'string',
      httpPort: 'string',
      httpToUserIp: 'number',
      httpsPort: 'string',
      httpsRedirect: 'number',
      instanceId: 'string',
      ipFollowStatus: 'number',
      isAccessProduct: 'number',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadBalancing: 'number',
      logHeaders: 'string',
      readTime: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      retry: 'boolean',
      sniHost: 'string',
      sniStatus: 'number',
      sourceIps: 'string',
      writeTime: 'number',
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
  statusCode: number;
  body: ModifyDomainResponseBody;
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
      body: ModifyDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDomainIpv6StatusRequest extends $tea.Model {
  domain?: string;
  enabled?: string;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enabled: 'Enabled',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  statusCode: number;
  body: ModifyDomainIpv6StatusResponseBody;
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
      body: ModifyDomainIpv6StatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogRetrievalStatusRequest extends $tea.Model {
  domain?: string;
  enabled?: number;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enabled: 'Enabled',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'number',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  statusCode: number;
  body: ModifyLogRetrievalStatusResponseBody;
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
      body: ModifyLogRetrievalStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLogServiceStatusRequest extends $tea.Model {
  domain?: string;
  enabled?: number;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      enabled: 'Enabled',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'number',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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
  statusCode: number;
  body: ModifyLogServiceStatusResponseBody;
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
      body: ModifyLogServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionModuleModeRequest extends $tea.Model {
  defenseType?: string;
  domain?: string;
  instanceId?: string;
  mode?: number;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      defenseType: 'DefenseType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      mode: 'Mode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseType: 'string',
      domain: 'string',
      instanceId: 'string',
      mode: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
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
  statusCode: number;
  body: ModifyProtectionModuleModeResponseBody;
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
      body: ModifyProtectionModuleModeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionModuleRuleRequest extends $tea.Model {
  defenseType?: string;
  domain?: string;
  instanceId?: string;
  lockVersion?: number;
  regionId?: string;
  resourceGroupId?: string;
  rule?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseType: 'DefenseType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      lockVersion: 'LockVersion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      rule: 'Rule',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseType: 'string',
      domain: 'string',
      instanceId: 'string',
      lockVersion: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      rule: 'string',
      ruleId: 'number',
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
  statusCode: number;
  body: ModifyProtectionModuleRuleResponseBody;
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
      body: ModifyProtectionModuleRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionModuleStatusRequest extends $tea.Model {
  defenseType?: string;
  domain?: string;
  instanceId?: string;
  moduleStatus?: number;
  regionId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      defenseType: 'DefenseType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      moduleStatus: 'ModuleStatus',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseType: 'string',
      domain: 'string',
      instanceId: 'string',
      moduleStatus: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
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
  statusCode: number;
  body: ModifyProtectionModuleStatusResponseBody;
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
      body: ModifyProtectionModuleStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionRuleCacheStatusRequest extends $tea.Model {
  defenseType?: string;
  domain?: string;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      defenseType: 'DefenseType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseType: 'string',
      domain: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      ruleId: 'number',
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
  statusCode: number;
  body: ModifyProtectionRuleCacheStatusResponseBody;
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
      body: ModifyProtectionRuleCacheStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyProtectionRuleStatusRequest extends $tea.Model {
  defenseType?: string;
  domain?: string;
  instanceId?: string;
  lockVersion?: number;
  regionId?: string;
  resourceGroupId?: string;
  ruleId?: number;
  ruleStatus?: number;
  static names(): { [key: string]: string } {
    return {
      defenseType: 'DefenseType',
      domain: 'Domain',
      instanceId: 'InstanceId',
      lockVersion: 'LockVersion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      ruleId: 'RuleId',
      ruleStatus: 'RuleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseType: 'string',
      domain: 'string',
      instanceId: 'string',
      lockVersion: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      ruleId: 'number',
      ruleStatus: 'number',
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
  statusCode: number;
  body: ModifyProtectionRuleStatusResponseBody;
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
      body: ModifyProtectionRuleStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  regionId?: string;
  resourceGroupId?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
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

export class MoveResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MoveResourceGroupResponseBody;
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
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDomainRuleGroupRequest extends $tea.Model {
  domains?: string;
  instanceId?: string;
  regionId?: string;
  resourceGroupId?: string;
  ruleGroupId?: number;
  wafAiStatus?: number;
  wafVersion?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      ruleGroupId: 'RuleGroupId',
      wafAiStatus: 'WafAiStatus',
      wafVersion: 'WafVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: 'string',
      instanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      ruleGroupId: 'number',
      wafAiStatus: 'number',
      wafVersion: 'number',
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
  statusCode: number;
  body: SetDomainRuleGroupResponseBody;
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
      body: SetDomainRuleGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificatesResponseBodyCertificates extends $tea.Model {
  certificateId?: number;
  certificateName?: string;
  commonName?: string;
  endTime?: number;
  isUsing?: boolean;
  sans?: string[];
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      commonName: 'CommonName',
      endTime: 'EndTime',
      isUsing: 'IsUsing',
      sans: 'Sans',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'number',
      certificateName: 'string',
      commonName: 'string',
      endTime: 'number',
      isUsing: 'boolean',
      sans: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResponseBodyDomainCloudNativeInstancesProtocolPortConfigs extends $tea.Model {
  ports?: number[];
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      ports: 'Ports',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ports: { 'type': 'array', 'itemType': 'number' },
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainResponseBodyDomainCloudNativeInstances extends $tea.Model {
  cloudNativeProductName?: string;
  IPAddressList?: string[];
  instanceId?: string;
  protocolPortConfigs?: DescribeDomainResponseBodyDomainCloudNativeInstancesProtocolPortConfigs[];
  redirectionTypeName?: string;
  static names(): { [key: string]: string } {
    return {
      cloudNativeProductName: 'CloudNativeProductName',
      IPAddressList: 'IPAddressList',
      instanceId: 'InstanceId',
      protocolPortConfigs: 'ProtocolPortConfigs',
      redirectionTypeName: 'RedirectionTypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudNativeProductName: 'string',
      IPAddressList: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      protocolPortConfigs: { 'type': 'array', 'itemType': DescribeDomainResponseBodyDomainCloudNativeInstancesProtocolPortConfigs },
      redirectionTypeName: 'string',
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
  accessHeaderMode?: number;
  accessHeaders?: string[];
  accessType?: string;
  cloudNativeInstances?: DescribeDomainResponseBodyDomainCloudNativeInstances[];
  clusterType?: number;
  cname?: string;
  connectionTime?: number;
  http2Port?: number[];
  httpPort?: number[];
  httpToUserIp?: number;
  httpsPort?: number[];
  httpsRedirect?: number;
  ipFollowStatus?: number;
  isAccessProduct?: number;
  keepalive?: boolean;
  keepaliveRequests?: number;
  keepaliveTimeout?: number;
  loadBalancing?: number;
  logHeaders?: DescribeDomainResponseBodyDomainLogHeaders[];
  readTime?: number;
  resourceGroupId?: string;
  retry?: boolean;
  sniHost?: string;
  sniStatus?: number;
  sourceIps?: string[];
  version?: number;
  writeTime?: number;
  static names(): { [key: string]: string } {
    return {
      accessHeaderMode: 'AccessHeaderMode',
      accessHeaders: 'AccessHeaders',
      accessType: 'AccessType',
      cloudNativeInstances: 'CloudNativeInstances',
      clusterType: 'ClusterType',
      cname: 'Cname',
      connectionTime: 'ConnectionTime',
      http2Port: 'Http2Port',
      httpPort: 'HttpPort',
      httpToUserIp: 'HttpToUserIp',
      httpsPort: 'HttpsPort',
      httpsRedirect: 'HttpsRedirect',
      ipFollowStatus: 'IpFollowStatus',
      isAccessProduct: 'IsAccessProduct',
      keepalive: 'Keepalive',
      keepaliveRequests: 'KeepaliveRequests',
      keepaliveTimeout: 'KeepaliveTimeout',
      loadBalancing: 'LoadBalancing',
      logHeaders: 'LogHeaders',
      readTime: 'ReadTime',
      resourceGroupId: 'ResourceGroupId',
      retry: 'Retry',
      sniHost: 'SniHost',
      sniStatus: 'SniStatus',
      sourceIps: 'SourceIps',
      version: 'Version',
      writeTime: 'WriteTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessHeaderMode: 'number',
      accessHeaders: { 'type': 'array', 'itemType': 'string' },
      accessType: 'string',
      cloudNativeInstances: { 'type': 'array', 'itemType': DescribeDomainResponseBodyDomainCloudNativeInstances },
      clusterType: 'number',
      cname: 'string',
      connectionTime: 'number',
      http2Port: { 'type': 'array', 'itemType': 'number' },
      httpPort: { 'type': 'array', 'itemType': 'number' },
      httpToUserIp: 'number',
      httpsPort: { 'type': 'array', 'itemType': 'number' },
      httpsRedirect: 'number',
      ipFollowStatus: 'number',
      isAccessProduct: 'number',
      keepalive: 'boolean',
      keepaliveRequests: 'number',
      keepaliveTimeout: 'number',
      loadBalancing: 'number',
      logHeaders: { 'type': 'array', 'itemType': DescribeDomainResponseBodyDomainLogHeaders },
      readTime: 'number',
      resourceGroupId: 'string',
      retry: 'boolean',
      sniHost: 'string',
      sniStatus: 'number',
      sourceIps: { 'type': 'array', 'itemType': 'string' },
      version: 'number',
      writeTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAdvanceConfigsResponseBodyDomainConfigsProfile extends $tea.Model {
  certStatus?: number;
  clusterType?: number;
  cname?: string;
  exclusiveVipStatus?: number;
  GSLBStatus?: string;
  http2Port?: number[];
  httpPort?: number[];
  httpsPort?: number[];
  ipv6Status?: number;
  resolvedType?: number;
  rs?: string[];
  vipServiceStatus?: number;
  static names(): { [key: string]: string } {
    return {
      certStatus: 'CertStatus',
      clusterType: 'ClusterType',
      cname: 'Cname',
      exclusiveVipStatus: 'ExclusiveVipStatus',
      GSLBStatus: 'GSLBStatus',
      http2Port: 'Http2Port',
      httpPort: 'HttpPort',
      httpsPort: 'HttpsPort',
      ipv6Status: 'Ipv6Status',
      resolvedType: 'ResolvedType',
      rs: 'Rs',
      vipServiceStatus: 'VipServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certStatus: 'number',
      clusterType: 'number',
      cname: 'string',
      exclusiveVipStatus: 'number',
      GSLBStatus: 'string',
      http2Port: { 'type': 'array', 'itemType': 'number' },
      httpPort: { 'type': 'array', 'itemType': 'number' },
      httpsPort: { 'type': 'array', 'itemType': 'number' },
      ipv6Status: 'number',
      resolvedType: 'number',
      rs: { 'type': 'array', 'itemType': 'string' },
      vipServiceStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAdvanceConfigsResponseBodyDomainConfigs extends $tea.Model {
  domain?: string;
  profile?: DescribeDomainAdvanceConfigsResponseBodyDomainConfigsProfile;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      profile: 'Profile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      profile: DescribeDomainAdvanceConfigsResponseBodyDomainConfigsProfile,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainBasicConfigsResponseBodyDomainConfigs extends $tea.Model {
  accessType?: string;
  aclStatus?: number;
  ccMode?: number;
  ccStatus?: number;
  domain?: string;
  owner?: string;
  status?: number;
  version?: number;
  wafMode?: number;
  wafStatus?: number;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      aclStatus: 'AclStatus',
      ccMode: 'CcMode',
      ccStatus: 'CcStatus',
      domain: 'Domain',
      owner: 'Owner',
      status: 'Status',
      version: 'Version',
      wafMode: 'WafMode',
      wafStatus: 'WafStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      aclStatus: 'number',
      ccMode: 'number',
      ccStatus: 'number',
      domain: 'string',
      owner: 'string',
      status: 'number',
      version: 'number',
      wafMode: 'number',
      wafStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceInfoResponseBodyInstanceInfo extends $tea.Model {
  endDate?: number;
  inDebt?: number;
  instanceId?: string;
  payType?: number;
  region?: string;
  remainDay?: number;
  status?: number;
  subscriptionType?: string;
  trial?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      inDebt: 'InDebt',
      instanceId: 'InstanceId',
      payType: 'PayType',
      region: 'Region',
      remainDay: 'RemainDay',
      status: 'Status',
      subscriptionType: 'SubscriptionType',
      trial: 'Trial',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      inDebt: 'number',
      instanceId: 'string',
      payType: 'number',
      region: 'string',
      remainDay: 'number',
      status: 'number',
      subscriptionType: 'string',
      trial: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSpecInfoResponseBodyInstanceSpecInfos extends $tea.Model {
  code?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
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
  content?: { [key: string]: any };
  ruleId?: number;
  status?: number;
  time?: number;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      ruleId: 'RuleId',
      status: 'Status',
      time: 'Time',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ruleId: 'number',
      status: 'number',
      time: 'number',
      version: 'number',
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
    let query = { };
    if (!Util.isUnset(request.certificate)) {
      query["Certificate"] = request.certificate;
    }

    if (!Util.isUnset(request.certificateName)) {
      query["CertificateName"] = request.certificateName;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCertificate",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCertificateResponse>(await this.callApi(params, req, runtime), new CreateCertificateResponse({}));
  }

  async createCertificate(request: CreateCertificateRequest): Promise<CreateCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateWithOptions(request, runtime);
  }

  async createCertificateByCertificateIdWithOptions(request: CreateCertificateByCertificateIdRequest, runtime: $Util.RuntimeOptions): Promise<CreateCertificateByCertificateIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCertificateByCertificateId",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCertificateByCertificateIdResponse>(await this.callApi(params, req, runtime), new CreateCertificateByCertificateIdResponse({}));
  }

  async createCertificateByCertificateId(request: CreateCertificateByCertificateIdRequest): Promise<CreateCertificateByCertificateIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateByCertificateIdWithOptions(request, runtime);
  }

  async createDomainWithOptions(request: CreateDomainRequest, runtime: $Util.RuntimeOptions): Promise<CreateDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessHeaderMode)) {
      query["AccessHeaderMode"] = request.accessHeaderMode;
    }

    if (!Util.isUnset(request.accessHeaders)) {
      query["AccessHeaders"] = request.accessHeaders;
    }

    if (!Util.isUnset(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!Util.isUnset(request.cloudNativeInstances)) {
      query["CloudNativeInstances"] = request.cloudNativeInstances;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.connectionTime)) {
      query["ConnectionTime"] = request.connectionTime;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.http2Port)) {
      query["Http2Port"] = request.http2Port;
    }

    if (!Util.isUnset(request.httpPort)) {
      query["HttpPort"] = request.httpPort;
    }

    if (!Util.isUnset(request.httpToUserIp)) {
      query["HttpToUserIp"] = request.httpToUserIp;
    }

    if (!Util.isUnset(request.httpsPort)) {
      query["HttpsPort"] = request.httpsPort;
    }

    if (!Util.isUnset(request.httpsRedirect)) {
      query["HttpsRedirect"] = request.httpsRedirect;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ipFollowStatus)) {
      query["IpFollowStatus"] = request.ipFollowStatus;
    }

    if (!Util.isUnset(request.isAccessProduct)) {
      query["IsAccessProduct"] = request.isAccessProduct;
    }

    if (!Util.isUnset(request.keepalive)) {
      query["Keepalive"] = request.keepalive;
    }

    if (!Util.isUnset(request.keepaliveRequests)) {
      query["KeepaliveRequests"] = request.keepaliveRequests;
    }

    if (!Util.isUnset(request.keepaliveTimeout)) {
      query["KeepaliveTimeout"] = request.keepaliveTimeout;
    }

    if (!Util.isUnset(request.loadBalancing)) {
      query["LoadBalancing"] = request.loadBalancing;
    }

    if (!Util.isUnset(request.logHeaders)) {
      query["LogHeaders"] = request.logHeaders;
    }

    if (!Util.isUnset(request.readTime)) {
      query["ReadTime"] = request.readTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.retry)) {
      query["Retry"] = request.retry;
    }

    if (!Util.isUnset(request.sniHost)) {
      query["SniHost"] = request.sniHost;
    }

    if (!Util.isUnset(request.sniStatus)) {
      query["SniStatus"] = request.sniStatus;
    }

    if (!Util.isUnset(request.sourceIps)) {
      query["SourceIps"] = request.sourceIps;
    }

    if (!Util.isUnset(request.writeTime)) {
      query["WriteTime"] = request.writeTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDomain",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDomainResponse>(await this.callApi(params, req, runtime), new CreateDomainResponse({}));
  }

  async createDomain(request: CreateDomainRequest): Promise<CreateDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDomainWithOptions(request, runtime);
  }

  async createProtectionModuleRuleWithOptions(request: CreateProtectionModuleRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateProtectionModuleRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.rule)) {
      query["Rule"] = request.rule;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateProtectionModuleRule",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProtectionModuleRuleResponse>(await this.callApi(params, req, runtime), new CreateProtectionModuleRuleResponse({}));
  }

  async createProtectionModuleRule(request: CreateProtectionModuleRuleRequest): Promise<CreateProtectionModuleRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProtectionModuleRuleWithOptions(request, runtime);
  }

  async deleteDomainWithOptions(request: DeleteDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDomain",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDomainResponse>(await this.callApi(params, req, runtime), new DeleteDomainResponse({}));
  }

  async deleteDomain(request: DeleteDomainRequest): Promise<DeleteDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDomainWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async deleteProtectionModuleRuleWithOptions(request: DeleteProtectionModuleRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProtectionModuleRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProtectionModuleRule",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteProtectionModuleRuleResponse>(await this.callApi(params, req, runtime), new DeleteProtectionModuleRuleResponse({}));
  }

  async deleteProtectionModuleRule(request: DeleteProtectionModuleRuleRequest): Promise<DeleteProtectionModuleRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProtectionModuleRuleWithOptions(request, runtime);
  }

  async describeCertMatchStatusWithOptions(request: DescribeCertMatchStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertMatchStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificate)) {
      query["Certificate"] = request.certificate;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCertMatchStatus",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCertMatchStatusResponse>(await this.callApi(params, req, runtime), new DescribeCertMatchStatusResponse({}));
  }

  async describeCertMatchStatus(request: DescribeCertMatchStatusRequest): Promise<DescribeCertMatchStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertMatchStatusWithOptions(request, runtime);
  }

  async describeCertificatesWithOptions(request: DescribeCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertificatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCertificates",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCertificatesResponse>(await this.callApi(params, req, runtime), new DescribeCertificatesResponse({}));
  }

  async describeCertificates(request: DescribeCertificatesRequest): Promise<DescribeCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertificatesWithOptions(request, runtime);
  }

  async describeDomainWithOptions(request: DescribeDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomain",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainResponse>(await this.callApi(params, req, runtime), new DescribeDomainResponse({}));
  }

  async describeDomain(request: DescribeDomainRequest): Promise<DescribeDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainWithOptions(request, runtime);
  }

  async describeDomainAdvanceConfigsWithOptions(request: DescribeDomainAdvanceConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainAdvanceConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainList)) {
      query["DomainList"] = request.domainList;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainAdvanceConfigs",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainAdvanceConfigsResponse>(await this.callApi(params, req, runtime), new DescribeDomainAdvanceConfigsResponse({}));
  }

  async describeDomainAdvanceConfigs(request: DescribeDomainAdvanceConfigsRequest): Promise<DescribeDomainAdvanceConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainAdvanceConfigsWithOptions(request, runtime);
  }

  async describeDomainBasicConfigsWithOptions(request: DescribeDomainBasicConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainBasicConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!Util.isUnset(request.cloudNativeProductId)) {
      query["CloudNativeProductId"] = request.cloudNativeProductId;
    }

    if (!Util.isUnset(request.domainKey)) {
      query["DomainKey"] = request.domainKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainBasicConfigs",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainBasicConfigsResponse>(await this.callApi(params, req, runtime), new DescribeDomainBasicConfigsResponse({}));
  }

  async describeDomainBasicConfigs(request: DescribeDomainBasicConfigsRequest): Promise<DescribeDomainBasicConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainBasicConfigsWithOptions(request, runtime);
  }

  async describeDomainListWithOptions(request: DescribeDomainListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isSub)) {
      query["IsSub"] = request.isSub;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainList",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainListResponse>(await this.callApi(params, req, runtime), new DescribeDomainListResponse({}));
  }

  async describeDomainList(request: DescribeDomainListRequest): Promise<DescribeDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainListWithOptions(request, runtime);
  }

  async describeDomainNamesWithOptions(request: DescribeDomainNamesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainNamesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainNames",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainNamesResponse>(await this.callApi(params, req, runtime), new DescribeDomainNamesResponse({}));
  }

  async describeDomainNames(request: DescribeDomainNamesRequest): Promise<DescribeDomainNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainNamesWithOptions(request, runtime);
  }

  async describeDomainRuleGroupWithOptions(request: DescribeDomainRuleGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainRuleGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDomainRuleGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDomainRuleGroupResponse>(await this.callApi(params, req, runtime), new DescribeDomainRuleGroupResponse({}));
  }

  async describeDomainRuleGroup(request: DescribeDomainRuleGroupRequest): Promise<DescribeDomainRuleGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainRuleGroupWithOptions(request, runtime);
  }

  async describeInstanceInfoWithOptions(request: DescribeInstanceInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceInfo",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceInfoResponse>(await this.callApi(params, req, runtime), new DescribeInstanceInfoResponse({}));
  }

  async describeInstanceInfo(request: DescribeInstanceInfoRequest): Promise<DescribeInstanceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceInfoWithOptions(request, runtime);
  }

  async describeInstanceSpecInfoWithOptions(request: DescribeInstanceSpecInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceSpecInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceSpecInfo",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceSpecInfoResponse>(await this.callApi(params, req, runtime), new DescribeInstanceSpecInfoResponse({}));
  }

  async describeInstanceSpecInfo(request: DescribeInstanceSpecInfoRequest): Promise<DescribeInstanceSpecInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceSpecInfoWithOptions(request, runtime);
  }

  async describeLogServiceStatusWithOptions(request: DescribeLogServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLogServiceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainNames)) {
      query["DomainNames"] = request.domainNames;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.region)) {
      query["Region"] = request.region;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeLogServiceStatus",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLogServiceStatusResponse>(await this.callApi(params, req, runtime), new DescribeLogServiceStatusResponse({}));
  }

  async describeLogServiceStatus(request: DescribeLogServiceStatusRequest): Promise<DescribeLogServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLogServiceStatusWithOptions(request, runtime);
  }

  async describeProtectionModuleCodeConfigWithOptions(request: DescribeProtectionModuleCodeConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProtectionModuleCodeConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.codeType)) {
      query["CodeType"] = request.codeType;
    }

    if (!Util.isUnset(request.codeValue)) {
      query["CodeValue"] = request.codeValue;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProtectionModuleCodeConfig",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProtectionModuleCodeConfigResponse>(await this.callApi(params, req, runtime), new DescribeProtectionModuleCodeConfigResponse({}));
  }

  async describeProtectionModuleCodeConfig(request: DescribeProtectionModuleCodeConfigRequest): Promise<DescribeProtectionModuleCodeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProtectionModuleCodeConfigWithOptions(request, runtime);
  }

  async describeProtectionModuleModeWithOptions(request: DescribeProtectionModuleModeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProtectionModuleModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProtectionModuleMode",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProtectionModuleModeResponse>(await this.callApi(params, req, runtime), new DescribeProtectionModuleModeResponse({}));
  }

  async describeProtectionModuleMode(request: DescribeProtectionModuleModeRequest): Promise<DescribeProtectionModuleModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProtectionModuleModeWithOptions(request, runtime);
  }

  async describeProtectionModuleRulesWithOptions(request: DescribeProtectionModuleRulesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProtectionModuleRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProtectionModuleRules",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProtectionModuleRulesResponse>(await this.callApi(params, req, runtime), new DescribeProtectionModuleRulesResponse({}));
  }

  async describeProtectionModuleRules(request: DescribeProtectionModuleRulesRequest): Promise<DescribeProtectionModuleRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProtectionModuleRulesWithOptions(request, runtime);
  }

  async describeProtectionModuleStatusWithOptions(request: DescribeProtectionModuleStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeProtectionModuleStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeProtectionModuleStatus",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeProtectionModuleStatusResponse>(await this.callApi(params, req, runtime), new DescribeProtectionModuleStatusResponse({}));
  }

  async describeProtectionModuleStatus(request: DescribeProtectionModuleStatusRequest): Promise<DescribeProtectionModuleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeProtectionModuleStatusWithOptions(request, runtime);
  }

  async describeWafSourceIpSegmentWithOptions(request: DescribeWafSourceIpSegmentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWafSourceIpSegmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeWafSourceIpSegment",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeWafSourceIpSegmentResponse>(await this.callApi(params, req, runtime), new DescribeWafSourceIpSegmentResponse({}));
  }

  async describeWafSourceIpSegment(request: DescribeWafSourceIpSegmentRequest): Promise<DescribeWafSourceIpSegmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWafSourceIpSegmentWithOptions(request, runtime);
  }

  async modifyDomainWithOptions(request: ModifyDomainRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDomainResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessHeaderMode)) {
      query["AccessHeaderMode"] = request.accessHeaderMode;
    }

    if (!Util.isUnset(request.accessHeaders)) {
      query["AccessHeaders"] = request.accessHeaders;
    }

    if (!Util.isUnset(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!Util.isUnset(request.cloudNativeInstances)) {
      query["CloudNativeInstances"] = request.cloudNativeInstances;
    }

    if (!Util.isUnset(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!Util.isUnset(request.connectionTime)) {
      query["ConnectionTime"] = request.connectionTime;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.http2Port)) {
      query["Http2Port"] = request.http2Port;
    }

    if (!Util.isUnset(request.httpPort)) {
      query["HttpPort"] = request.httpPort;
    }

    if (!Util.isUnset(request.httpToUserIp)) {
      query["HttpToUserIp"] = request.httpToUserIp;
    }

    if (!Util.isUnset(request.httpsPort)) {
      query["HttpsPort"] = request.httpsPort;
    }

    if (!Util.isUnset(request.httpsRedirect)) {
      query["HttpsRedirect"] = request.httpsRedirect;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ipFollowStatus)) {
      query["IpFollowStatus"] = request.ipFollowStatus;
    }

    if (!Util.isUnset(request.isAccessProduct)) {
      query["IsAccessProduct"] = request.isAccessProduct;
    }

    if (!Util.isUnset(request.keepalive)) {
      query["Keepalive"] = request.keepalive;
    }

    if (!Util.isUnset(request.keepaliveRequests)) {
      query["KeepaliveRequests"] = request.keepaliveRequests;
    }

    if (!Util.isUnset(request.keepaliveTimeout)) {
      query["KeepaliveTimeout"] = request.keepaliveTimeout;
    }

    if (!Util.isUnset(request.loadBalancing)) {
      query["LoadBalancing"] = request.loadBalancing;
    }

    if (!Util.isUnset(request.logHeaders)) {
      query["LogHeaders"] = request.logHeaders;
    }

    if (!Util.isUnset(request.readTime)) {
      query["ReadTime"] = request.readTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.retry)) {
      query["Retry"] = request.retry;
    }

    if (!Util.isUnset(request.sniHost)) {
      query["SniHost"] = request.sniHost;
    }

    if (!Util.isUnset(request.sniStatus)) {
      query["SniStatus"] = request.sniStatus;
    }

    if (!Util.isUnset(request.sourceIps)) {
      query["SourceIps"] = request.sourceIps;
    }

    if (!Util.isUnset(request.writeTime)) {
      query["WriteTime"] = request.writeTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDomain",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDomainResponse>(await this.callApi(params, req, runtime), new ModifyDomainResponse({}));
  }

  async modifyDomain(request: ModifyDomainRequest): Promise<ModifyDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDomainWithOptions(request, runtime);
  }

  async modifyDomainIpv6StatusWithOptions(request: ModifyDomainIpv6StatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDomainIpv6StatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDomainIpv6Status",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDomainIpv6StatusResponse>(await this.callApi(params, req, runtime), new ModifyDomainIpv6StatusResponse({}));
  }

  async modifyDomainIpv6Status(request: ModifyDomainIpv6StatusRequest): Promise<ModifyDomainIpv6StatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDomainIpv6StatusWithOptions(request, runtime);
  }

  async modifyLogRetrievalStatusWithOptions(request: ModifyLogRetrievalStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLogRetrievalStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyLogRetrievalStatus",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLogRetrievalStatusResponse>(await this.callApi(params, req, runtime), new ModifyLogRetrievalStatusResponse({}));
  }

  async modifyLogRetrievalStatus(request: ModifyLogRetrievalStatusRequest): Promise<ModifyLogRetrievalStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLogRetrievalStatusWithOptions(request, runtime);
  }

  async modifyLogServiceStatusWithOptions(request: ModifyLogServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyLogServiceStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyLogServiceStatus",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyLogServiceStatusResponse>(await this.callApi(params, req, runtime), new ModifyLogServiceStatusResponse({}));
  }

  async modifyLogServiceStatus(request: ModifyLogServiceStatusRequest): Promise<ModifyLogServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyLogServiceStatusWithOptions(request, runtime);
  }

  async modifyProtectionModuleModeWithOptions(request: ModifyProtectionModuleModeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyProtectionModuleModeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyProtectionModuleMode",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyProtectionModuleModeResponse>(await this.callApi(params, req, runtime), new ModifyProtectionModuleModeResponse({}));
  }

  async modifyProtectionModuleMode(request: ModifyProtectionModuleModeRequest): Promise<ModifyProtectionModuleModeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyProtectionModuleModeWithOptions(request, runtime);
  }

  async modifyProtectionModuleRuleWithOptions(request: ModifyProtectionModuleRuleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyProtectionModuleRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lockVersion)) {
      query["LockVersion"] = request.lockVersion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyProtectionModuleRule",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyProtectionModuleRuleResponse>(await this.callApi(params, req, runtime), new ModifyProtectionModuleRuleResponse({}));
  }

  async modifyProtectionModuleRule(request: ModifyProtectionModuleRuleRequest): Promise<ModifyProtectionModuleRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyProtectionModuleRuleWithOptions(request, runtime);
  }

  async modifyProtectionModuleStatusWithOptions(request: ModifyProtectionModuleStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyProtectionModuleStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.moduleStatus)) {
      query["ModuleStatus"] = request.moduleStatus;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyProtectionModuleStatus",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyProtectionModuleStatusResponse>(await this.callApi(params, req, runtime), new ModifyProtectionModuleStatusResponse({}));
  }

  async modifyProtectionModuleStatus(request: ModifyProtectionModuleStatusRequest): Promise<ModifyProtectionModuleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyProtectionModuleStatusWithOptions(request, runtime);
  }

  async modifyProtectionRuleCacheStatusWithOptions(request: ModifyProtectionRuleCacheStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyProtectionRuleCacheStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyProtectionRuleCacheStatus",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyProtectionRuleCacheStatusResponse>(await this.callApi(params, req, runtime), new ModifyProtectionRuleCacheStatusResponse({}));
  }

  async modifyProtectionRuleCacheStatus(request: ModifyProtectionRuleCacheStatusRequest): Promise<ModifyProtectionRuleCacheStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyProtectionRuleCacheStatusWithOptions(request, runtime);
  }

  async modifyProtectionRuleStatusWithOptions(request: ModifyProtectionRuleStatusRequest, runtime: $Util.RuntimeOptions): Promise<ModifyProtectionRuleStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.defenseType)) {
      query["DefenseType"] = request.defenseType;
    }

    if (!Util.isUnset(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.lockVersion)) {
      query["LockVersion"] = request.lockVersion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!Util.isUnset(request.ruleStatus)) {
      query["RuleStatus"] = request.ruleStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyProtectionRuleStatus",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyProtectionRuleStatusResponse>(await this.callApi(params, req, runtime), new ModifyProtectionRuleStatusResponse({}));
  }

  async modifyProtectionRuleStatus(request: ModifyProtectionRuleStatusRequest): Promise<ModifyProtectionRuleStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyProtectionRuleStatusWithOptions(request, runtime);
  }

  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MoveResourceGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveResourceGroupResponse({}));
  }

  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  async setDomainRuleGroupWithOptions(request: SetDomainRuleGroupRequest, runtime: $Util.RuntimeOptions): Promise<SetDomainRuleGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domains)) {
      query["Domains"] = request.domains;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.ruleGroupId)) {
      query["RuleGroupId"] = request.ruleGroupId;
    }

    if (!Util.isUnset(request.wafAiStatus)) {
      query["WafAiStatus"] = request.wafAiStatus;
    }

    if (!Util.isUnset(request.wafVersion)) {
      query["WafVersion"] = request.wafVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDomainRuleGroup",
      version: "2019-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDomainRuleGroupResponse>(await this.callApi(params, req, runtime), new SetDomainRuleGroupResponse({}));
  }

  async setDomainRuleGroup(request: SetDomainRuleGroupRequest): Promise<SetDomainRuleGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDomainRuleGroupWithOptions(request, runtime);
  }

}
