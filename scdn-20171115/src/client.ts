// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddScdnDomainRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  domainName?: string;
  resourceGroupId?: string;
  sources?: string;
  checkUrl?: string;
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      resourceGroupId: 'ResourceGroupId',
      sources: 'Sources',
      checkUrl: 'CheckUrl',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      domainName: 'string',
      resourceGroupId: 'string',
      sources: 'string',
      checkUrl: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddScdnDomainResponseBody extends $tea.Model {
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

export class AddScdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddScdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddScdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteScdnDomainConfigsRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  domainNames?: string;
  functionNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      domainNames: 'DomainNames',
      functionNames: 'FunctionNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      domainNames: 'string',
      functionNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteScdnDomainConfigsResponseBody extends $tea.Model {
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

export class BatchDeleteScdnDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchDeleteScdnDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchDeleteScdnDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetScdnDomainConfigsRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  domainNames?: string;
  functions?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      domainNames: 'DomainNames',
      functions: 'Functions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      domainNames: 'string',
      functions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetScdnDomainConfigsResponseBody extends $tea.Model {
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

export class BatchSetScdnDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchSetScdnDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchSetScdnDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateScdnDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  sources?: string;
  resourceGroupId?: string;
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      sources: 'Sources',
      resourceGroupId: 'ResourceGroupId',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      sources: 'string',
      resourceGroupId: 'string',
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateScdnDomainResponseBody extends $tea.Model {
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

export class BatchUpdateScdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchUpdateScdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchUpdateScdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckScdnServiceRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckScdnServiceResponseBody extends $tea.Model {
  requestId?: string;
  inDebt?: boolean;
  enabled?: boolean;
  inDebtOverdue?: boolean;
  onService?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      inDebt: 'InDebt',
      enabled: 'Enabled',
      inDebtOverdue: 'InDebtOverdue',
      onService: 'OnService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      inDebt: 'boolean',
      enabled: 'boolean',
      inDebtOverdue: 'boolean',
      onService: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckScdnServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckScdnServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckScdnServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScdnDomainRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScdnDomainResponseBody extends $tea.Model {
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

export class DeleteScdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteScdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteScdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScdnSpecificConfigRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  configId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      configId: 'ConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      configId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScdnSpecificConfigResponseBody extends $tea.Model {
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

export class DeleteScdnSpecificConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteScdnSpecificConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteScdnSpecificConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcQpsInfoRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcQpsInfoResponseBody extends $tea.Model {
  requestId?: string;
  timeScopes?: DescribeScdnCcQpsInfoResponseBodyTimeScopes;
  totals?: DescribeScdnCcQpsInfoResponseBodyTotals;
  attacks?: DescribeScdnCcQpsInfoResponseBodyAttacks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeScopes: 'TimeScopes',
      totals: 'Totals',
      attacks: 'Attacks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeScopes: DescribeScdnCcQpsInfoResponseBodyTimeScopes,
      totals: DescribeScdnCcQpsInfoResponseBodyTotals,
      attacks: DescribeScdnCcQpsInfoResponseBodyAttacks,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcQpsInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnCcQpsInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnCcQpsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcTopIpRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  pageSize?: string;
  pageNumber?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      pageSize: 'string',
      pageNumber: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcTopIpResponseBody extends $tea.Model {
  requestId?: string;
  domainName?: string;
  total?: string;
  attackIpDataList?: DescribeScdnCcTopIpResponseBodyAttackIpDataList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      total: 'Total',
      attackIpDataList: 'AttackIpDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      total: 'string',
      attackIpDataList: DescribeScdnCcTopIpResponseBodyAttackIpDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcTopIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnCcTopIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnCcTopIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcTopUrlRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  pageSize?: string;
  pageNumber?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      pageSize: 'string',
      pageNumber: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcTopUrlResponseBody extends $tea.Model {
  requestId?: string;
  domainName?: string;
  total?: string;
  attackUrlDataList?: DescribeScdnCcTopUrlResponseBodyAttackUrlDataList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      total: 'Total',
      attackUrlDataList: 'AttackUrlDataList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      total: 'string',
      attackUrlDataList: DescribeScdnCcTopUrlResponseBodyAttackUrlDataList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcTopUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnCcTopUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnCcTopUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCertificateDetailRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  certName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      certName: 'CertName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      certName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCertificateDetailResponseBody extends $tea.Model {
  requestId?: string;
  certId?: number;
  certName?: string;
  cert?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certId: 'CertId',
      certName: 'CertName',
      cert: 'Cert',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certId: 'number',
      certName: 'string',
      cert: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCertificateDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnCertificateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnCertificateDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCertificateListRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCertificateListResponseBody extends $tea.Model {
  requestId?: string;
  certificateListModel?: DescribeScdnCertificateListResponseBodyCertificateListModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateListModel: 'CertificateListModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateListModel: DescribeScdnCertificateListResponseBodyCertificateListModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCertificateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnCertificateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnCertificateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDDoSInfoRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDDoSInfoResponseBody extends $tea.Model {
  secBandwidth?: number;
  requestId?: string;
  elasticBandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      secBandwidth: 'SecBandwidth',
      requestId: 'RequestId',
      elasticBandwidth: 'ElasticBandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secBandwidth: 'number',
      requestId: 'string',
      elasticBandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDDoSInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDDoSInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDDoSInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDDoSTrafficInfoRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  line?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      line: 'Line',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      line: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDDoSTrafficInfoResponseBody extends $tea.Model {
  requestId?: string;
  timeScopes?: DescribeScdnDDoSTrafficInfoResponseBodyTimeScopes;
  bpsDrops?: DescribeScdnDDoSTrafficInfoResponseBodyBpsDrops;
  ppsDrops?: DescribeScdnDDoSTrafficInfoResponseBodyPpsDrops;
  bpsTotals?: DescribeScdnDDoSTrafficInfoResponseBodyBpsTotals;
  ppsTotals?: DescribeScdnDDoSTrafficInfoResponseBodyPpsTotals;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeScopes: 'TimeScopes',
      bpsDrops: 'BpsDrops',
      ppsDrops: 'PpsDrops',
      bpsTotals: 'BpsTotals',
      ppsTotals: 'PpsTotals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeScopes: DescribeScdnDDoSTrafficInfoResponseBodyTimeScopes,
      bpsDrops: DescribeScdnDDoSTrafficInfoResponseBodyBpsDrops,
      ppsDrops: DescribeScdnDDoSTrafficInfoResponseBodyPpsDrops,
      bpsTotals: DescribeScdnDDoSTrafficInfoResponseBodyBpsTotals,
      ppsTotals: DescribeScdnDDoSTrafficInfoResponseBodyPpsTotals,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDDoSTrafficInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDDoSTrafficInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDDoSTrafficInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainBpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainBpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  bpsDataPerInterval?: DescribeScdnDomainBpsDataResponseBodyBpsDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      bpsDataPerInterval: 'BpsDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      bpsDataPerInterval: DescribeScdnDomainBpsDataResponseBodyBpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainCertificateInfoRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainCertificateInfoResponseBody extends $tea.Model {
  certInfos?: DescribeScdnDomainCertificateInfoResponseBodyCertInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeScdnDomainCertificateInfoResponseBodyCertInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainCertificateInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainCertificateInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainCertificateInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainCnameRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainCnameResponseBody extends $tea.Model {
  requestId?: string;
  cnameDatas?: DescribeScdnDomainCnameResponseBodyCnameDatas;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cnameDatas: 'CnameDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cnameDatas: DescribeScdnDomainCnameResponseBodyCnameDatas,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainCnameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainCnameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainCnameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainConfigsRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  functionNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      functionNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainConfigsResponseBody extends $tea.Model {
  requestId?: string;
  domainConfigs?: DescribeScdnDomainConfigsResponseBodyDomainConfigs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainConfigs: 'DomainConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainConfigs: DescribeScdnDomainConfigsResponseBodyDomainConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainDetailRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainDetailResponseBody extends $tea.Model {
  domainDetail?: DescribeScdnDomainDetailResponseBodyDomainDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainDetail: 'DomainDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainDetail: DescribeScdnDomainDetailResponseBodyDomainDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainHitRateDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainHitRateDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  hitRatePerInterval?: DescribeScdnDomainHitRateDataResponseBodyHitRatePerInterval;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      hitRatePerInterval: 'HitRatePerInterval',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      hitRatePerInterval: DescribeScdnDomainHitRateDataResponseBodyHitRatePerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainHitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainHttpCodeDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainHttpCodeDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  dataPerInterval?: DescribeScdnDomainHttpCodeDataResponseBodyDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      dataPerInterval: 'DataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      dataPerInterval: DescribeScdnDomainHttpCodeDataResponseBodyDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainHttpCodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainIspDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainIspDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  value?: DescribeScdnDomainIspDataResponseBodyValue;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      value: DescribeScdnDomainIspDataResponseBodyValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainIspDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainIspDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainIspDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainLogRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  pageSize?: number;
  pageNumber?: number;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainLogResponseBody extends $tea.Model {
  requestId?: string;
  domainName?: string;
  domainLogDetails?: DescribeScdnDomainLogResponseBodyDomainLogDetails;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      domainLogDetails: 'DomainLogDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      domainLogDetails: DescribeScdnDomainLogResponseBodyDomainLogDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainOriginBpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainOriginBpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  originBpsDataPerInterval?: DescribeScdnDomainOriginBpsDataResponseBodyOriginBpsDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      originBpsDataPerInterval: 'OriginBpsDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      originBpsDataPerInterval: DescribeScdnDomainOriginBpsDataResponseBodyOriginBpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainOriginBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainOriginBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainOriginBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainOriginTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainOriginTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  originTrafficDataPerInterval?: DescribeScdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      originTrafficDataPerInterval: 'OriginTrafficDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      originTrafficDataPerInterval: DescribeScdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainOriginTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainOriginTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainOriginTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainPvDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainPvDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  pvDataInterval?: DescribeScdnDomainPvDataResponseBodyPvDataInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      pvDataInterval: 'PvDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      pvDataInterval: DescribeScdnDomainPvDataResponseBodyPvDataInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainPvDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainPvDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainPvDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainQpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainQpsDataResponseBody extends $tea.Model {
  qpsDataPerInterval?: DescribeScdnDomainQpsDataResponseBodyQpsDataPerInterval;
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      qpsDataPerInterval: 'QpsDataPerInterval',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qpsDataPerInterval: DescribeScdnDomainQpsDataResponseBodyQpsDataPerInterval,
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainQpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainQpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainQpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeBpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeBpsDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeScdnDomainRealTimeBpsDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeScdnDomainRealTimeBpsDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainRealTimeBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainRealTimeBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeByteHitRateDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeByteHitRateDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeScdnDomainRealTimeByteHitRateDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeScdnDomainRealTimeByteHitRateDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeByteHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainRealTimeByteHitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainRealTimeByteHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeHttpCodeDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeHttpCodeDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  realTimeHttpCodeData?: DescribeScdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      realTimeHttpCodeData: 'RealTimeHttpCodeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      realTimeHttpCodeData: DescribeScdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainRealTimeHttpCodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainRealTimeHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeQpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeQpsDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeScdnDomainRealTimeQpsDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeScdnDomainRealTimeQpsDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeQpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainRealTimeQpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainRealTimeQpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeReqHitRateDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeReqHitRateDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeScdnDomainRealTimeReqHitRateDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeScdnDomainRealTimeReqHitRateDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeReqHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainRealTimeReqHitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainRealTimeReqHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeSrcBpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeSrcBpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  realTimeSrcBpsDataPerInterval?: DescribeScdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      realTimeSrcBpsDataPerInterval: 'RealTimeSrcBpsDataPerInterval',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      realTimeSrcBpsDataPerInterval: DescribeScdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeSrcBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainRealTimeSrcBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainRealTimeSrcBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeSrcTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeSrcTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  realTimeSrcTrafficDataPerInterval?: DescribeScdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      realTimeSrcTrafficDataPerInterval: 'RealTimeSrcTrafficDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      realTimeSrcTrafficDataPerInterval: DescribeScdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeSrcTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainRealTimeSrcTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainRealTimeSrcTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  realTimeTrafficDataPerInterval?: DescribeScdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      realTimeTrafficDataPerInterval: 'RealTimeTrafficDataPerInterval',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      realTimeTrafficDataPerInterval: DescribeScdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainRealTimeTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainRealTimeTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRegionDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRegionDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  value?: DescribeScdnDomainRegionDataResponseBodyValue;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      value: DescribeScdnDomainRegionDataResponseBodyValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRegionDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainRegionDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainRegionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopReferVisitRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopReferVisitResponseBody extends $tea.Model {
  requestId?: string;
  domainName?: string;
  startTime?: string;
  topReferList?: DescribeScdnDomainTopReferVisitResponseBodyTopReferList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      topReferList: 'TopReferList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      topReferList: DescribeScdnDomainTopReferVisitResponseBodyTopReferList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopReferVisitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainTopReferVisitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainTopReferVisitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopUrlVisitRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopUrlVisitResponseBody extends $tea.Model {
  url500List?: DescribeScdnDomainTopUrlVisitResponseBodyUrl500List;
  url200List?: DescribeScdnDomainTopUrlVisitResponseBodyUrl200List;
  url400List?: DescribeScdnDomainTopUrlVisitResponseBodyUrl400List;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  url300List?: DescribeScdnDomainTopUrlVisitResponseBodyUrl300List;
  allUrlList?: DescribeScdnDomainTopUrlVisitResponseBodyAllUrlList;
  static names(): { [key: string]: string } {
    return {
      url500List: 'Url500List',
      url200List: 'Url200List',
      url400List: 'Url400List',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      url300List: 'Url300List',
      allUrlList: 'AllUrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url500List: DescribeScdnDomainTopUrlVisitResponseBodyUrl500List,
      url200List: DescribeScdnDomainTopUrlVisitResponseBodyUrl200List,
      url400List: DescribeScdnDomainTopUrlVisitResponseBodyUrl400List,
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      url300List: DescribeScdnDomainTopUrlVisitResponseBodyUrl300List,
      allUrlList: DescribeScdnDomainTopUrlVisitResponseBodyAllUrlList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopUrlVisitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainTopUrlVisitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainTopUrlVisitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
      ispNameEn: 'IspNameEn',
      locationNameEn: 'LocationNameEn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  trafficDataPerInterval?: DescribeScdnDomainTrafficDataResponseBodyTrafficDataPerInterval;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      trafficDataPerInterval: 'TrafficDataPerInterval',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      trafficDataPerInterval: DescribeScdnDomainTrafficDataResponseBodyTrafficDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainUvDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainUvDataResponseBody extends $tea.Model {
  uvDataInterval?: DescribeScdnDomainUvDataResponseBodyUvDataInterval;
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  static names(): { [key: string]: string } {
    return {
      uvDataInterval: 'UvDataInterval',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uvDataInterval: DescribeScdnDomainUvDataResponseBodyUvDataInterval,
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainUvDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnDomainUvDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnDomainUvDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnRefreshQuotaRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnRefreshQuotaResponseBody extends $tea.Model {
  requestId?: string;
  urlRemain?: string;
  preloadRemain?: string;
  blockQuota?: string;
  dirRemain?: string;
  urlQuota?: string;
  dirQuota?: string;
  blockRemain?: string;
  preloadQuota?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      urlRemain: 'UrlRemain',
      preloadRemain: 'PreloadRemain',
      blockQuota: 'BlockQuota',
      dirRemain: 'DirRemain',
      urlQuota: 'UrlQuota',
      dirQuota: 'DirQuota',
      blockRemain: 'blockRemain',
      preloadQuota: 'PreloadQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      urlRemain: 'string',
      preloadRemain: 'string',
      blockQuota: 'string',
      dirRemain: 'string',
      urlQuota: 'string',
      dirQuota: 'string',
      blockRemain: 'string',
      preloadQuota: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnRefreshQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnRefreshQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnRefreshQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnRefreshTasksRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  taskId?: string;
  objectPath?: string;
  pageNumber?: number;
  objectType?: string;
  domainName?: string;
  status?: string;
  pageSize?: number;
  startTime?: string;
  endTime?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      taskId: 'TaskId',
      objectPath: 'ObjectPath',
      pageNumber: 'PageNumber',
      objectType: 'ObjectType',
      domainName: 'DomainName',
      status: 'Status',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      endTime: 'EndTime',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      taskId: 'string',
      objectPath: 'string',
      pageNumber: 'number',
      objectType: 'string',
      domainName: 'string',
      status: 'string',
      pageSize: 'number',
      startTime: 'string',
      endTime: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnRefreshTasksResponseBody extends $tea.Model {
  totalCount?: number;
  tasks?: DescribeScdnRefreshTasksResponseBodyTasks;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      tasks: 'Tasks',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      tasks: DescribeScdnRefreshTasksResponseBodyTasks,
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnRefreshTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnRefreshTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnRefreshTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnServiceRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnServiceResponseBody extends $tea.Model {
  currentDDoSBasicValue?: string;
  currentElasticProtectionValue?: string;
  endTime?: string;
  pricingCycle?: string;
  elasticProtection?: string;
  domainCountValue?: string;
  currentDomainCount?: string;
  DDoSBasic?: string;
  ccProtectionValue?: string;
  elasticProtectionValue?: string;
  openTime?: string;
  changingChargeType?: string;
  bandwidth?: string;
  domainCount?: string;
  currentBandwidth?: string;
  requestId?: string;
  currentElasticProtection?: string;
  instanceId?: string;
  currentCcProtectionValue?: string;
  currentDDoSBasic?: string;
  currentProtectType?: string;
  currentDomainCountValue?: string;
  currentBandwidthValue?: string;
  protectTypeValue?: string;
  currentProtectTypeValue?: string;
  ccProtection?: string;
  changingAffectTime?: string;
  operationLocks?: DescribeScdnServiceResponseBodyOperationLocks;
  internetChargeType?: string;
  DDoSBasicValue?: string;
  protectType?: string;
  currentCcProtection?: string;
  priceType?: string;
  bandwidthValue?: string;
  static names(): { [key: string]: string } {
    return {
      currentDDoSBasicValue: 'CurrentDDoSBasicValue',
      currentElasticProtectionValue: 'CurrentElasticProtectionValue',
      endTime: 'EndTime',
      pricingCycle: 'PricingCycle',
      elasticProtection: 'ElasticProtection',
      domainCountValue: 'DomainCountValue',
      currentDomainCount: 'CurrentDomainCount',
      DDoSBasic: 'DDoSBasic',
      ccProtectionValue: 'CcProtectionValue',
      elasticProtectionValue: 'ElasticProtectionValue',
      openTime: 'OpenTime',
      changingChargeType: 'ChangingChargeType',
      bandwidth: 'Bandwidth',
      domainCount: 'DomainCount',
      currentBandwidth: 'CurrentBandwidth',
      requestId: 'RequestId',
      currentElasticProtection: 'CurrentElasticProtection',
      instanceId: 'InstanceId',
      currentCcProtectionValue: 'CurrentCcProtectionValue',
      currentDDoSBasic: 'CurrentDDoSBasic',
      currentProtectType: 'CurrentProtectType',
      currentDomainCountValue: 'CurrentDomainCountValue',
      currentBandwidthValue: 'CurrentBandwidthValue',
      protectTypeValue: 'ProtectTypeValue',
      currentProtectTypeValue: 'CurrentProtectTypeValue',
      ccProtection: 'CcProtection',
      changingAffectTime: 'ChangingAffectTime',
      operationLocks: 'OperationLocks',
      internetChargeType: 'InternetChargeType',
      DDoSBasicValue: 'DDoSBasicValue',
      protectType: 'ProtectType',
      currentCcProtection: 'CurrentCcProtection',
      priceType: 'PriceType',
      bandwidthValue: 'BandwidthValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentDDoSBasicValue: 'string',
      currentElasticProtectionValue: 'string',
      endTime: 'string',
      pricingCycle: 'string',
      elasticProtection: 'string',
      domainCountValue: 'string',
      currentDomainCount: 'string',
      DDoSBasic: 'string',
      ccProtectionValue: 'string',
      elasticProtectionValue: 'string',
      openTime: 'string',
      changingChargeType: 'string',
      bandwidth: 'string',
      domainCount: 'string',
      currentBandwidth: 'string',
      requestId: 'string',
      currentElasticProtection: 'string',
      instanceId: 'string',
      currentCcProtectionValue: 'string',
      currentDDoSBasic: 'string',
      currentProtectType: 'string',
      currentDomainCountValue: 'string',
      currentBandwidthValue: 'string',
      protectTypeValue: 'string',
      currentProtectTypeValue: 'string',
      ccProtection: 'string',
      changingAffectTime: 'string',
      operationLocks: DescribeScdnServiceResponseBodyOperationLocks,
      internetChargeType: 'string',
      DDoSBasicValue: 'string',
      protectType: 'string',
      currentCcProtection: 'string',
      priceType: 'string',
      bandwidthValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnTopDomainsByFlowRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  product?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      product: 'Product',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      product: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnTopDomainsByFlowResponseBody extends $tea.Model {
  topDomains?: DescribeScdnTopDomainsByFlowResponseBodyTopDomains;
  endTime?: string;
  requestId?: string;
  domainOnlineCount?: number;
  startTime?: string;
  domainCount?: number;
  static names(): { [key: string]: string } {
    return {
      topDomains: 'TopDomains',
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainOnlineCount: 'DomainOnlineCount',
      startTime: 'StartTime',
      domainCount: 'DomainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomains: DescribeScdnTopDomainsByFlowResponseBodyTopDomains,
      endTime: 'string',
      requestId: 'string',
      domainOnlineCount: 'number',
      startTime: 'string',
      domainCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnTopDomainsByFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnTopDomainsByFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnTopDomainsByFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnUserDomainsRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  pageSize?: number;
  pageNumber?: number;
  domainName?: string;
  domainStatus?: string;
  domainSearchType?: string;
  checkDomainShow?: boolean;
  resourceGroupId?: string;
  funcId?: string;
  funcFilter?: string;
  changeStartTime?: string;
  changeEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      domainSearchType: 'DomainSearchType',
      checkDomainShow: 'CheckDomainShow',
      resourceGroupId: 'ResourceGroupId',
      funcId: 'FuncId',
      funcFilter: 'FuncFilter',
      changeStartTime: 'ChangeStartTime',
      changeEndTime: 'ChangeEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      domainName: 'string',
      domainStatus: 'string',
      domainSearchType: 'string',
      checkDomainShow: 'boolean',
      resourceGroupId: 'string',
      funcId: 'string',
      funcFilter: 'string',
      changeStartTime: 'string',
      changeEndTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnUserDomainsResponseBody extends $tea.Model {
  domains?: DescribeScdnUserDomainsResponseBodyDomains;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: DescribeScdnUserDomainsResponseBodyDomains,
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnUserDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnUserDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnUserDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnUserProtectInfoRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnUserProtectInfoResponseBody extends $tea.Model {
  requestId?: string;
  serviceDDoS?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceDDoS: 'ServiceDDoS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceDDoS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnUserProtectInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnUserProtectInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnUserProtectInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnUserQuotaRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnUserQuotaResponseBody extends $tea.Model {
  requestId?: string;
  refreshUrlQuota?: number;
  blockRemain?: number;
  preloadRemain?: number;
  refreshDirRemain?: number;
  blockQuota?: number;
  refreshDirQuota?: number;
  domainQuota?: number;
  refreshUrlRemain?: number;
  preloadQuota?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      refreshUrlQuota: 'RefreshUrlQuota',
      blockRemain: 'BlockRemain',
      preloadRemain: 'PreloadRemain',
      refreshDirRemain: 'RefreshDirRemain',
      blockQuota: 'BlockQuota',
      refreshDirQuota: 'RefreshDirQuota',
      domainQuota: 'DomainQuota',
      refreshUrlRemain: 'RefreshUrlRemain',
      preloadQuota: 'PreloadQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      refreshUrlQuota: 'number',
      blockRemain: 'number',
      preloadRemain: 'number',
      refreshDirRemain: 'number',
      blockQuota: 'number',
      refreshDirQuota: 'number',
      domainQuota: 'number',
      refreshUrlRemain: 'number',
      preloadQuota: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnUserQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScdnUserQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScdnUserQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenScdnServiceRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  bandwidth?: number;
  protectType?: string;
  DDoSBasic?: number;
  elasticProtection?: number;
  ccProtection?: number;
  domainCount?: number;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      bandwidth: 'Bandwidth',
      protectType: 'ProtectType',
      DDoSBasic: 'DDoSBasic',
      elasticProtection: 'ElasticProtection',
      ccProtection: 'CcProtection',
      domainCount: 'DomainCount',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      bandwidth: 'number',
      protectType: 'string',
      DDoSBasic: 'number',
      elasticProtection: 'number',
      ccProtection: 'number',
      domainCount: 'number',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenScdnServiceResponseBody extends $tea.Model {
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

export class OpenScdnServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenScdnServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenScdnServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadScdnObjectCachesRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  objectPath?: string;
  area?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      objectPath: 'ObjectPath',
      area: 'Area',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      objectPath: 'string',
      area: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadScdnObjectCachesResponseBody extends $tea.Model {
  requestId?: string;
  preloadTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      preloadTaskId: 'PreloadTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      preloadTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadScdnObjectCachesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PreloadScdnObjectCachesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PreloadScdnObjectCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshScdnObjectCachesRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  objectPath?: string;
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      objectPath: 'ObjectPath',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      objectPath: 'string',
      objectType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshScdnObjectCachesResponseBody extends $tea.Model {
  requestId?: string;
  refreshTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      refreshTaskId: 'RefreshTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      refreshTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshScdnObjectCachesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshScdnObjectCachesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshScdnObjectCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetScdnBotInfoRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  enable?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      enable: 'Enable',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      enable: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetScdnBotInfoResponseBody extends $tea.Model {
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

export class SetScdnBotInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetScdnBotInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetScdnBotInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetScdnCcInfoRequest extends $tea.Model {
  ownerId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetScdnCcInfoResponseBody extends $tea.Model {
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

export class SetScdnCcInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetScdnCcInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetScdnCcInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetScdnDDoSInfoRequest extends $tea.Model {
  ownerId?: number;
  elasticBandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      elasticBandwidth: 'ElasticBandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      elasticBandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetScdnDDoSInfoResponseBody extends $tea.Model {
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

export class SetScdnDDoSInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetScdnDDoSInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetScdnDDoSInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetScdnDomainBizInfoRequest extends $tea.Model {
  ownerId?: number;
  bizName?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      bizName: 'BizName',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      bizName: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetScdnDomainBizInfoResponseBody extends $tea.Model {
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

export class SetScdnDomainBizInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetScdnDomainBizInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetScdnDomainBizInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetScdnDomainCertificateRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  certType?: string;
  certName?: string;
  SSLProtocol?: string;
  SSLPub?: string;
  SSLPri?: string;
  region?: string;
  forceSet?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      certType: 'CertType',
      certName: 'CertName',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      SSLPri: 'SSLPri',
      region: 'Region',
      forceSet: 'ForceSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      certType: 'string',
      certName: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      SSLPri: 'string',
      region: 'string',
      forceSet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetScdnDomainCertificateResponseBody extends $tea.Model {
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

export class SetScdnDomainCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetScdnDomainCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetScdnDomainCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartScdnDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartScdnDomainResponseBody extends $tea.Model {
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

export class StartScdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartScdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartScdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopScdnDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopScdnDomainResponseBody extends $tea.Model {
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

export class StopScdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopScdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopScdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScdnDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  sources?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      sources: 'Sources',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      sources: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateScdnDomainResponseBody extends $tea.Model {
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

export class UpdateScdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateScdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateScdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcQpsInfoResponseBodyTimeScopesTimeScope extends $tea.Model {
  start?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcQpsInfoResponseBodyTimeScopes extends $tea.Model {
  timeScope?: DescribeScdnCcQpsInfoResponseBodyTimeScopesTimeScope[];
  static names(): { [key: string]: string } {
    return {
      timeScope: 'TimeScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeScope: { 'type': 'array', 'itemType': DescribeScdnCcQpsInfoResponseBodyTimeScopesTimeScope },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcQpsInfoResponseBodyTotals extends $tea.Model {
  total?: string[];
  static names(): { [key: string]: string } {
    return {
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcQpsInfoResponseBodyAttacks extends $tea.Model {
  attack?: string[];
  static names(): { [key: string]: string } {
    return {
      attack: 'Attack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attack: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcTopIpResponseBodyAttackIpDataListAttackIpDatas extends $tea.Model {
  ip?: string;
  attackCount?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      attackCount: 'AttackCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      attackCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcTopIpResponseBodyAttackIpDataList extends $tea.Model {
  attackIpDatas?: DescribeScdnCcTopIpResponseBodyAttackIpDataListAttackIpDatas[];
  static names(): { [key: string]: string } {
    return {
      attackIpDatas: 'AttackIpDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackIpDatas: { 'type': 'array', 'itemType': DescribeScdnCcTopIpResponseBodyAttackIpDataListAttackIpDatas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcTopUrlResponseBodyAttackUrlDataListAttackUrlDatas extends $tea.Model {
  url?: string;
  attackCount?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      attackCount: 'AttackCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      attackCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCcTopUrlResponseBodyAttackUrlDataList extends $tea.Model {
  attackUrlDatas?: DescribeScdnCcTopUrlResponseBodyAttackUrlDataListAttackUrlDatas[];
  static names(): { [key: string]: string } {
    return {
      attackUrlDatas: 'AttackUrlDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackUrlDatas: { 'type': 'array', 'itemType': DescribeScdnCcTopUrlResponseBodyAttackUrlDataListAttackUrlDatas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCertificateListResponseBodyCertificateListModelCertListCert extends $tea.Model {
  lastTime?: number;
  fingerprint?: string;
  certName?: string;
  issuer?: string;
  certId?: number;
  common?: string;
  static names(): { [key: string]: string } {
    return {
      lastTime: 'LastTime',
      fingerprint: 'Fingerprint',
      certName: 'CertName',
      issuer: 'Issuer',
      certId: 'CertId',
      common: 'Common',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastTime: 'number',
      fingerprint: 'string',
      certName: 'string',
      issuer: 'string',
      certId: 'number',
      common: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCertificateListResponseBodyCertificateListModelCertList extends $tea.Model {
  cert?: DescribeScdnCertificateListResponseBodyCertificateListModelCertListCert[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: { 'type': 'array', 'itemType': DescribeScdnCertificateListResponseBodyCertificateListModelCertListCert },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnCertificateListResponseBodyCertificateListModel extends $tea.Model {
  certList?: DescribeScdnCertificateListResponseBodyCertificateListModelCertList;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: DescribeScdnCertificateListResponseBodyCertificateListModelCertList,
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDDoSTrafficInfoResponseBodyTimeScopesTimeScope extends $tea.Model {
  start?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      start: 'Start',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      start: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDDoSTrafficInfoResponseBodyTimeScopes extends $tea.Model {
  timeScope?: DescribeScdnDDoSTrafficInfoResponseBodyTimeScopesTimeScope[];
  static names(): { [key: string]: string } {
    return {
      timeScope: 'TimeScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeScope: { 'type': 'array', 'itemType': DescribeScdnDDoSTrafficInfoResponseBodyTimeScopesTimeScope },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDDoSTrafficInfoResponseBodyBpsDrops extends $tea.Model {
  bpsDrop?: string[];
  static names(): { [key: string]: string } {
    return {
      bpsDrop: 'BpsDrop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsDrop: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDDoSTrafficInfoResponseBodyPpsDrops extends $tea.Model {
  ppsDrop?: string[];
  static names(): { [key: string]: string } {
    return {
      ppsDrop: 'PpsDrop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ppsDrop: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDDoSTrafficInfoResponseBodyBpsTotals extends $tea.Model {
  bpsTotal?: string[];
  static names(): { [key: string]: string } {
    return {
      bpsTotal: 'BpsTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsTotal: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDDoSTrafficInfoResponseBodyPpsTotals extends $tea.Model {
  ppsTotal?: string[];
  static names(): { [key: string]: string } {
    return {
      ppsTotal: 'PpsTotal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ppsTotal: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $tea.Model {
  httpsBpsValue?: string;
  bpsValue?: string;
  timeStamp?: string;
  httpBpsValue?: string;
  static names(): { [key: string]: string } {
    return {
      httpsBpsValue: 'HttpsBpsValue',
      bpsValue: 'BpsValue',
      timeStamp: 'TimeStamp',
      httpBpsValue: 'HttpBpsValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsBpsValue: 'string',
      bpsValue: 'string',
      timeStamp: 'string',
      httpBpsValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainBpsDataResponseBodyBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeScdnDomainBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeScdnDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainCertificateInfoResponseBodyCertInfosCertInfo extends $tea.Model {
  status?: string;
  certLife?: string;
  certExpireTime?: string;
  SSLPub?: string;
  SSLProtocol?: string;
  certType?: string;
  certDomainName?: string;
  certName?: string;
  certOrg?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      certLife: 'CertLife',
      certExpireTime: 'CertExpireTime',
      SSLPub: 'SSLPub',
      SSLProtocol: 'SSLProtocol',
      certType: 'CertType',
      certDomainName: 'CertDomainName',
      certName: 'CertName',
      certOrg: 'CertOrg',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      certLife: 'string',
      certExpireTime: 'string',
      SSLPub: 'string',
      SSLProtocol: 'string',
      certType: 'string',
      certDomainName: 'string',
      certName: 'string',
      certOrg: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainCertificateInfoResponseBodyCertInfos extends $tea.Model {
  certInfo?: DescribeScdnDomainCertificateInfoResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeScdnDomainCertificateInfoResponseBodyCertInfosCertInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainCnameResponseBodyCnameDatasData extends $tea.Model {
  status?: number;
  domain?: string;
  cname?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      domain: 'Domain',
      cname: 'Cname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      domain: 'string',
      cname: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainCnameResponseBodyCnameDatas extends $tea.Model {
  data?: DescribeScdnDomainCnameResponseBodyCnameDatasData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeScdnDomainCnameResponseBodyCnameDatasData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg extends $tea.Model {
  argName?: string;
  argValue?: string;
  static names(): { [key: string]: string } {
    return {
      argName: 'ArgName',
      argValue: 'ArgValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argName: 'string',
      argValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs extends $tea.Model {
  functionArg?: DescribeScdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg[];
  static names(): { [key: string]: string } {
    return {
      functionArg: 'FunctionArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArg: { 'type': 'array', 'itemType': DescribeScdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainConfigsResponseBodyDomainConfigsDomainConfig extends $tea.Model {
  status?: string;
  configId?: string;
  functionName?: string;
  functionArgs?: DescribeScdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      configId: 'ConfigId',
      functionName: 'FunctionName',
      functionArgs: 'FunctionArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      configId: 'string',
      functionName: 'string',
      functionArgs: DescribeScdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainConfigsResponseBodyDomainConfigs extends $tea.Model {
  domainConfig?: DescribeScdnDomainConfigsResponseBodyDomainConfigsDomainConfig[];
  static names(): { [key: string]: string } {
    return {
      domainConfig: 'DomainConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfig: { 'type': 'array', 'itemType': DescribeScdnDomainConfigsResponseBodyDomainConfigsDomainConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainDetailResponseBodyDomainDetailSourcesSource extends $tea.Model {
  type?: string;
  enabled?: string;
  priority?: string;
  port?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      enabled: 'Enabled',
      priority: 'Priority',
      port: 'Port',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      enabled: 'string',
      priority: 'string',
      port: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainDetailResponseBodyDomainDetailSources extends $tea.Model {
  source?: DescribeScdnDomainDetailResponseBodyDomainDetailSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeScdnDomainDetailResponseBodyDomainDetailSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainDetailResponseBodyDomainDetail extends $tea.Model {
  SSLPub?: string;
  sources?: DescribeScdnDomainDetailResponseBodyDomainDetailSources;
  gmtModified?: string;
  domainName?: string;
  gmtCreated?: string;
  description?: string;
  SSLProtocol?: string;
  resourceGroupId?: string;
  certName?: string;
  scope?: string;
  cname?: string;
  domainStatus?: string;
  static names(): { [key: string]: string } {
    return {
      SSLPub: 'SSLPub',
      sources: 'Sources',
      gmtModified: 'GmtModified',
      domainName: 'DomainName',
      gmtCreated: 'GmtCreated',
      description: 'Description',
      SSLProtocol: 'SSLProtocol',
      resourceGroupId: 'ResourceGroupId',
      certName: 'CertName',
      scope: 'Scope',
      cname: 'Cname',
      domainStatus: 'DomainStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SSLPub: 'string',
      sources: DescribeScdnDomainDetailResponseBodyDomainDetailSources,
      gmtModified: 'string',
      domainName: 'string',
      gmtCreated: 'string',
      description: 'string',
      SSLProtocol: 'string',
      resourceGroupId: 'string',
      certName: 'string',
      scope: 'string',
      cname: 'string',
      domainStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainHitRateDataResponseBodyHitRatePerIntervalDataModule extends $tea.Model {
  byteHitRate?: string;
  reqHitRate?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      byteHitRate: 'ByteHitRate',
      reqHitRate: 'ReqHitRate',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteHitRate: 'string',
      reqHitRate: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainHitRateDataResponseBodyHitRatePerInterval extends $tea.Model {
  dataModule?: DescribeScdnDomainHitRateDataResponseBodyHitRatePerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeScdnDomainHitRateDataResponseBodyHitRatePerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerIntervalHttpCodeDataModule extends $tea.Model {
  code?: string;
  proportion?: string;
  count?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      proportion: 'Proportion',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      proportion: 'string',
      count: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerInterval extends $tea.Model {
  httpCodeDataModule?: DescribeScdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerIntervalHttpCodeDataModule[];
  static names(): { [key: string]: string } {
    return {
      httpCodeDataModule: 'HttpCodeDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCodeDataModule: { 'type': 'array', 'itemType': DescribeScdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerIntervalHttpCodeDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  httpCodeDataPerInterval?: DescribeScdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      httpCodeDataPerInterval: 'HttpCodeDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      httpCodeDataPerInterval: DescribeScdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainHttpCodeDataResponseBodyDataPerInterval extends $tea.Model {
  dataModule?: DescribeScdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeScdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainIspDataResponseBodyValueISPProportionData extends $tea.Model {
  totalQuery?: string;
  totalBytes?: string;
  avgResponseRate?: string;
  avgResponseTime?: string;
  reqErrRate?: string;
  avgObjectSize?: string;
  bps?: string;
  qps?: string;
  proportion?: string;
  ispEname?: string;
  ISP?: string;
  bytesProportion?: string;
  static names(): { [key: string]: string } {
    return {
      totalQuery: 'TotalQuery',
      totalBytes: 'TotalBytes',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      reqErrRate: 'ReqErrRate',
      avgObjectSize: 'AvgObjectSize',
      bps: 'Bps',
      qps: 'Qps',
      proportion: 'Proportion',
      ispEname: 'IspEname',
      ISP: 'ISP',
      bytesProportion: 'BytesProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalQuery: 'string',
      totalBytes: 'string',
      avgResponseRate: 'string',
      avgResponseTime: 'string',
      reqErrRate: 'string',
      avgObjectSize: 'string',
      bps: 'string',
      qps: 'string',
      proportion: 'string',
      ispEname: 'string',
      ISP: 'string',
      bytesProportion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainIspDataResponseBodyValue extends $tea.Model {
  ISPProportionData?: DescribeScdnDomainIspDataResponseBodyValueISPProportionData[];
  static names(): { [key: string]: string } {
    return {
      ISPProportionData: 'ISPProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ISPProportionData: { 'type': 'array', 'itemType': DescribeScdnDomainIspDataResponseBodyValueISPProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail extends $tea.Model {
  endTime?: string;
  startTime?: string;
  logPath?: string;
  logSize?: number;
  logName?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      logPath: 'LogPath',
      logSize: 'LogSize',
      logName: 'LogName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      logPath: 'string',
      logSize: 'number',
      logName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos extends $tea.Model {
  logInfoDetail?: DescribeScdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail[];
  static names(): { [key: string]: string } {
    return {
      logInfoDetail: 'LogInfoDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfoDetail: { 'type': 'array', 'itemType': DescribeScdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainLogResponseBodyDomainLogDetailsDomainLogDetail extends $tea.Model {
  pageInfos?: DescribeScdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos;
  logCount?: number;
  logInfos?: DescribeScdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos;
  static names(): { [key: string]: string } {
    return {
      pageInfos: 'PageInfos',
      logCount: 'LogCount',
      logInfos: 'LogInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfos: DescribeScdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos,
      logCount: 'number',
      logInfos: DescribeScdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainLogResponseBodyDomainLogDetails extends $tea.Model {
  domainLogDetail?: DescribeScdnDomainLogResponseBodyDomainLogDetailsDomainLogDetail[];
  static names(): { [key: string]: string } {
    return {
      domainLogDetail: 'DomainLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetail: { 'type': 'array', 'itemType': DescribeScdnDomainLogResponseBodyDomainLogDetailsDomainLogDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainOriginBpsDataResponseBodyOriginBpsDataPerIntervalDataModule extends $tea.Model {
  httpOriginBpsValue?: string;
  timeStamp?: string;
  httpsOriginBpsValue?: string;
  originBpsValue?: string;
  static names(): { [key: string]: string } {
    return {
      httpOriginBpsValue: 'HttpOriginBpsValue',
      timeStamp: 'TimeStamp',
      httpsOriginBpsValue: 'HttpsOriginBpsValue',
      originBpsValue: 'OriginBpsValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpOriginBpsValue: 'string',
      timeStamp: 'string',
      httpsOriginBpsValue: 'string',
      originBpsValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainOriginBpsDataResponseBodyOriginBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeScdnDomainOriginBpsDataResponseBodyOriginBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeScdnDomainOriginBpsDataResponseBodyOriginBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerIntervalDataModule extends $tea.Model {
  trafficValue?: string;
  httpTrafficValue?: string;
  httpsTrafficValue?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      trafficValue: 'TrafficValue',
      httpTrafficValue: 'HttpTrafficValue',
      httpsTrafficValue: 'HttpsTrafficValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficValue: 'string',
      httpTrafficValue: 'string',
      httpsTrafficValue: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeScdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeScdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainPvDataResponseBodyPvDataIntervalUsageData extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainPvDataResponseBodyPvDataInterval extends $tea.Model {
  usageData?: DescribeScdnDomainPvDataResponseBodyPvDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeScdnDomainPvDataResponseBodyPvDataIntervalUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainQpsDataResponseBodyQpsDataPerIntervalDataModule extends $tea.Model {
  httpsAccValue?: string;
  qpsValue?: string;
  accValue?: string;
  httpQpsValue?: string;
  timeStamp?: string;
  httpsQpsValue?: string;
  httpAccValue?: string;
  static names(): { [key: string]: string } {
    return {
      httpsAccValue: 'HttpsAccValue',
      qpsValue: 'QpsValue',
      accValue: 'AccValue',
      httpQpsValue: 'HttpQpsValue',
      timeStamp: 'TimeStamp',
      httpsQpsValue: 'HttpsQpsValue',
      httpAccValue: 'HttpAccValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpsAccValue: 'string',
      qpsValue: 'string',
      accValue: 'string',
      httpQpsValue: 'string',
      timeStamp: 'string',
      httpsQpsValue: 'string',
      httpAccValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainQpsDataResponseBodyQpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeScdnDomainQpsDataResponseBodyQpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeScdnDomainQpsDataResponseBodyQpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeBpsDataResponseBodyDataBpsModel extends $tea.Model {
  timeStamp?: string;
  bps?: number;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      bps: 'Bps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      bps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeBpsDataResponseBodyData extends $tea.Model {
  bpsModel?: DescribeScdnDomainRealTimeBpsDataResponseBodyDataBpsModel[];
  static names(): { [key: string]: string } {
    return {
      bpsModel: 'BpsModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsModel: { 'type': 'array', 'itemType': DescribeScdnDomainRealTimeBpsDataResponseBodyDataBpsModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel extends $tea.Model {
  byteHitRate?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      byteHitRate: 'ByteHitRate',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteHitRate: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeByteHitRateDataResponseBodyData extends $tea.Model {
  byteHitRateDataModel?: DescribeScdnDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel[];
  static names(): { [key: string]: string } {
    return {
      byteHitRateDataModel: 'ByteHitRateDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteHitRateDataModel: { 'type': 'array', 'itemType': DescribeScdnDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData extends $tea.Model {
  code?: string;
  proportion?: string;
  count?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      proportion: 'Proportion',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      proportion: 'string',
      count: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue extends $tea.Model {
  realTimeCodeProportionData?: DescribeScdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      realTimeCodeProportionData: 'RealTimeCodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeCodeProportionData: { 'type': 'array', 'itemType': DescribeScdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData extends $tea.Model {
  value?: DescribeScdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: DescribeScdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue,
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData extends $tea.Model {
  usageData?: DescribeScdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeScdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeQpsDataResponseBodyDataQpsModel extends $tea.Model {
  qps?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      qps: 'Qps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qps: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeQpsDataResponseBodyData extends $tea.Model {
  qpsModel?: DescribeScdnDomainRealTimeQpsDataResponseBodyDataQpsModel[];
  static names(): { [key: string]: string } {
    return {
      qpsModel: 'QpsModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qpsModel: { 'type': 'array', 'itemType': DescribeScdnDomainRealTimeQpsDataResponseBodyDataQpsModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel extends $tea.Model {
  reqHitRate?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      reqHitRate: 'ReqHitRate',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqHitRate: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeReqHitRateDataResponseBodyData extends $tea.Model {
  reqHitRateDataModel?: DescribeScdnDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel[];
  static names(): { [key: string]: string } {
    return {
      reqHitRateDataModel: 'ReqHitRateDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqHitRateDataModel: { 'type': 'array', 'itemType': DescribeScdnDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeScdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeScdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeScdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeScdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeScdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeScdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRegionDataResponseBodyValueRegionProportionData extends $tea.Model {
  totalQuery?: string;
  totalBytes?: string;
  avgResponseRate?: string;
  avgResponseTime?: string;
  reqErrRate?: string;
  avgObjectSize?: string;
  bps?: string;
  qps?: string;
  regionEname?: string;
  region?: string;
  proportion?: string;
  bytesProportion?: string;
  static names(): { [key: string]: string } {
    return {
      totalQuery: 'TotalQuery',
      totalBytes: 'TotalBytes',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      reqErrRate: 'ReqErrRate',
      avgObjectSize: 'AvgObjectSize',
      bps: 'Bps',
      qps: 'Qps',
      regionEname: 'RegionEname',
      region: 'Region',
      proportion: 'Proportion',
      bytesProportion: 'BytesProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalQuery: 'string',
      totalBytes: 'string',
      avgResponseRate: 'string',
      avgResponseTime: 'string',
      reqErrRate: 'string',
      avgObjectSize: 'string',
      bps: 'string',
      qps: 'string',
      regionEname: 'string',
      region: 'string',
      proportion: 'string',
      bytesProportion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainRegionDataResponseBodyValue extends $tea.Model {
  regionProportionData?: DescribeScdnDomainRegionDataResponseBodyValueRegionProportionData[];
  static names(): { [key: string]: string } {
    return {
      regionProportionData: 'RegionProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionProportionData: { 'type': 'array', 'itemType': DescribeScdnDomainRegionDataResponseBodyValueRegionProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopReferVisitResponseBodyTopReferListReferList extends $tea.Model {
  visitData?: string;
  referDetail?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      visitData: 'VisitData',
      referDetail: 'ReferDetail',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      visitData: 'string',
      referDetail: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopReferVisitResponseBodyTopReferList extends $tea.Model {
  referList?: DescribeScdnDomainTopReferVisitResponseBodyTopReferListReferList[];
  static names(): { [key: string]: string } {
    return {
      referList: 'ReferList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referList: { 'type': 'array', 'itemType': DescribeScdnDomainTopReferVisitResponseBodyTopReferListReferList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopUrlVisitResponseBodyUrl500ListUrlList extends $tea.Model {
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopUrlVisitResponseBodyUrl500List extends $tea.Model {
  urlList?: DescribeScdnDomainTopUrlVisitResponseBodyUrl500ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeScdnDomainTopUrlVisitResponseBodyUrl500ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopUrlVisitResponseBodyUrl200ListUrlList extends $tea.Model {
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopUrlVisitResponseBodyUrl200List extends $tea.Model {
  urlList?: DescribeScdnDomainTopUrlVisitResponseBodyUrl200ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeScdnDomainTopUrlVisitResponseBodyUrl200ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopUrlVisitResponseBodyUrl400ListUrlList extends $tea.Model {
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopUrlVisitResponseBodyUrl400List extends $tea.Model {
  urlList?: DescribeScdnDomainTopUrlVisitResponseBodyUrl400ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeScdnDomainTopUrlVisitResponseBodyUrl400ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopUrlVisitResponseBodyUrl300ListUrlList extends $tea.Model {
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopUrlVisitResponseBodyUrl300List extends $tea.Model {
  urlList?: DescribeScdnDomainTopUrlVisitResponseBodyUrl300ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeScdnDomainTopUrlVisitResponseBodyUrl300ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopUrlVisitResponseBodyAllUrlListUrlList extends $tea.Model {
  urlDetail?: string;
  visitData?: string;
  visitProportion?: number;
  flow?: string;
  flowProportion?: number;
  static names(): { [key: string]: string } {
    return {
      urlDetail: 'UrlDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
      flow: 'Flow',
      flowProportion: 'FlowProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
      flow: 'string',
      flowProportion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTopUrlVisitResponseBodyAllUrlList extends $tea.Model {
  urlList?: DescribeScdnDomainTopUrlVisitResponseBodyAllUrlListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeScdnDomainTopUrlVisitResponseBodyAllUrlListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $tea.Model {
  trafficValue?: string;
  httpTrafficValue?: string;
  httpsTrafficValue?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      trafficValue: 'TrafficValue',
      httpTrafficValue: 'HttpTrafficValue',
      httpsTrafficValue: 'HttpsTrafficValue',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficValue: 'string',
      httpTrafficValue: 'string',
      httpsTrafficValue: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainTrafficDataResponseBodyTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeScdnDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeScdnDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainUvDataResponseBodyUvDataIntervalUsageData extends $tea.Model {
  value?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnDomainUvDataResponseBodyUvDataInterval extends $tea.Model {
  usageData?: DescribeScdnDomainUvDataResponseBodyUvDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeScdnDomainUvDataResponseBodyUvDataIntervalUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnRefreshTasksResponseBodyTasksTask extends $tea.Model {
  status?: string;
  creationTime?: string;
  objectType?: string;
  process?: string;
  description?: string;
  objectPath?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      objectType: 'ObjectType',
      process: 'Process',
      description: 'Description',
      objectPath: 'ObjectPath',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      objectType: 'string',
      process: 'string',
      description: 'string',
      objectPath: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnRefreshTasksResponseBodyTasks extends $tea.Model {
  task?: DescribeScdnRefreshTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeScdnRefreshTasksResponseBodyTasksTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnServiceResponseBodyOperationLocksLockReason extends $tea.Model {
  lockReason?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnServiceResponseBodyOperationLocks extends $tea.Model {
  lockReason?: DescribeScdnServiceResponseBodyOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeScdnServiceResponseBodyOperationLocksLockReason },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnTopDomainsByFlowResponseBodyTopDomainsTopDomain extends $tea.Model {
  maxBps?: number;
  rank?: number;
  totalAccess?: number;
  trafficPercent?: string;
  domainName?: string;
  totalTraffic?: string;
  maxBpsTime?: string;
  static names(): { [key: string]: string } {
    return {
      maxBps: 'MaxBps',
      rank: 'Rank',
      totalAccess: 'TotalAccess',
      trafficPercent: 'TrafficPercent',
      domainName: 'DomainName',
      totalTraffic: 'TotalTraffic',
      maxBpsTime: 'MaxBpsTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxBps: 'number',
      rank: 'number',
      totalAccess: 'number',
      trafficPercent: 'string',
      domainName: 'string',
      totalTraffic: 'string',
      maxBpsTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnTopDomainsByFlowResponseBodyTopDomains extends $tea.Model {
  topDomain?: DescribeScdnTopDomainsByFlowResponseBodyTopDomainsTopDomain[];
  static names(): { [key: string]: string } {
    return {
      topDomain: 'TopDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomain: { 'type': 'array', 'itemType': DescribeScdnTopDomainsByFlowResponseBodyTopDomainsTopDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnUserDomainsResponseBodyDomainsPageDataSourcesSource extends $tea.Model {
  type?: string;
  priority?: string;
  port?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      priority: 'Priority',
      port: 'Port',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      priority: 'string',
      port: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnUserDomainsResponseBodyDomainsPageDataSources extends $tea.Model {
  source?: DescribeScdnUserDomainsResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeScdnUserDomainsResponseBodyDomainsPageDataSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnUserDomainsResponseBodyDomainsPageData extends $tea.Model {
  gmtCreated?: string;
  description?: string;
  SSLProtocol?: string;
  resourceGroupId?: string;
  sandbox?: string;
  domainStatus?: string;
  cname?: string;
  sources?: DescribeScdnUserDomainsResponseBodyDomainsPageDataSources;
  gmtModified?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      description: 'Description',
      SSLProtocol: 'SSLProtocol',
      resourceGroupId: 'ResourceGroupId',
      sandbox: 'Sandbox',
      domainStatus: 'DomainStatus',
      cname: 'Cname',
      sources: 'Sources',
      gmtModified: 'GmtModified',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      description: 'string',
      SSLProtocol: 'string',
      resourceGroupId: 'string',
      sandbox: 'string',
      domainStatus: 'string',
      cname: 'string',
      sources: DescribeScdnUserDomainsResponseBodyDomainsPageDataSources,
      gmtModified: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScdnUserDomainsResponseBodyDomains extends $tea.Model {
  pageData?: DescribeScdnUserDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeScdnUserDomainsResponseBodyDomainsPageData },
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
      'ap-northeast-1': "scdn.aliyuncs.com",
      'ap-northeast-2-pop': "scdn.aliyuncs.com",
      'ap-south-1': "scdn.aliyuncs.com",
      'ap-southeast-1': "scdn.aliyuncs.com",
      'ap-southeast-2': "scdn.aliyuncs.com",
      'ap-southeast-3': "scdn.aliyuncs.com",
      'ap-southeast-5': "scdn.aliyuncs.com",
      'cn-beijing': "scdn.aliyuncs.com",
      'cn-beijing-finance-1': "scdn.aliyuncs.com",
      'cn-beijing-finance-pop': "scdn.aliyuncs.com",
      'cn-beijing-gov-1': "scdn.aliyuncs.com",
      'cn-beijing-nu16-b01': "scdn.aliyuncs.com",
      'cn-chengdu': "scdn.aliyuncs.com",
      'cn-edge-1': "scdn.aliyuncs.com",
      'cn-fujian': "scdn.aliyuncs.com",
      'cn-haidian-cm12-c01': "scdn.aliyuncs.com",
      'cn-hangzhou': "scdn.aliyuncs.com",
      'cn-hangzhou-bj-b01': "scdn.aliyuncs.com",
      'cn-hangzhou-finance': "scdn.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "scdn.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "scdn.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "scdn.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "scdn.aliyuncs.com",
      'cn-hangzhou-test-306': "scdn.aliyuncs.com",
      'cn-hongkong': "scdn.aliyuncs.com",
      'cn-hongkong-finance-pop': "scdn.aliyuncs.com",
      'cn-huhehaote': "scdn.aliyuncs.com",
      'cn-north-2-gov-1': "scdn.aliyuncs.com",
      'cn-qingdao': "scdn.aliyuncs.com",
      'cn-qingdao-nebula': "scdn.aliyuncs.com",
      'cn-shanghai': "scdn.aliyuncs.com",
      'cn-shanghai-et15-b01': "scdn.aliyuncs.com",
      'cn-shanghai-et2-b01': "scdn.aliyuncs.com",
      'cn-shanghai-finance-1': "scdn.aliyuncs.com",
      'cn-shanghai-inner': "scdn.aliyuncs.com",
      'cn-shanghai-internal-test-1': "scdn.aliyuncs.com",
      'cn-shenzhen': "scdn.aliyuncs.com",
      'cn-shenzhen-finance-1': "scdn.aliyuncs.com",
      'cn-shenzhen-inner': "scdn.aliyuncs.com",
      'cn-shenzhen-st4-d01': "scdn.aliyuncs.com",
      'cn-shenzhen-su18-b01': "scdn.aliyuncs.com",
      'cn-wuhan': "scdn.aliyuncs.com",
      'cn-yushanfang': "scdn.aliyuncs.com",
      'cn-zhangbei-na61-b01': "scdn.aliyuncs.com",
      'cn-zhangjiakou': "scdn.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "scdn.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "scdn.aliyuncs.com",
      'eu-central-1': "scdn.aliyuncs.com",
      'eu-west-1': "scdn.aliyuncs.com",
      'eu-west-1-oxs': "scdn.aliyuncs.com",
      'me-east-1': "scdn.aliyuncs.com",
      'rus-west-1-pop': "scdn.aliyuncs.com",
      'us-east-1': "scdn.aliyuncs.com",
      'us-west-1': "scdn.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("scdn", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addScdnDomainWithOptions(request: AddScdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddScdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddScdnDomainResponse>(await this.doRPCRequest("AddScdnDomain", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddScdnDomainResponse({}));
  }

  async addScdnDomain(request: AddScdnDomainRequest): Promise<AddScdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addScdnDomainWithOptions(request, runtime);
  }

  async batchDeleteScdnDomainConfigsWithOptions(request: BatchDeleteScdnDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteScdnDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchDeleteScdnDomainConfigsResponse>(await this.doRPCRequest("BatchDeleteScdnDomainConfigs", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new BatchDeleteScdnDomainConfigsResponse({}));
  }

  async batchDeleteScdnDomainConfigs(request: BatchDeleteScdnDomainConfigsRequest): Promise<BatchDeleteScdnDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteScdnDomainConfigsWithOptions(request, runtime);
  }

  async batchSetScdnDomainConfigsWithOptions(request: BatchSetScdnDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetScdnDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchSetScdnDomainConfigsResponse>(await this.doRPCRequest("BatchSetScdnDomainConfigs", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new BatchSetScdnDomainConfigsResponse({}));
  }

  async batchSetScdnDomainConfigs(request: BatchSetScdnDomainConfigsRequest): Promise<BatchSetScdnDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetScdnDomainConfigsWithOptions(request, runtime);
  }

  async batchUpdateScdnDomainWithOptions(request: BatchUpdateScdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchUpdateScdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchUpdateScdnDomainResponse>(await this.doRPCRequest("BatchUpdateScdnDomain", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new BatchUpdateScdnDomainResponse({}));
  }

  async batchUpdateScdnDomain(request: BatchUpdateScdnDomainRequest): Promise<BatchUpdateScdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUpdateScdnDomainWithOptions(request, runtime);
  }

  async checkScdnServiceWithOptions(request: CheckScdnServiceRequest, runtime: $Util.RuntimeOptions): Promise<CheckScdnServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckScdnServiceResponse>(await this.doRPCRequest("CheckScdnService", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new CheckScdnServiceResponse({}));
  }

  async checkScdnService(request: CheckScdnServiceRequest): Promise<CheckScdnServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkScdnServiceWithOptions(request, runtime);
  }

  async deleteScdnDomainWithOptions(request: DeleteScdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteScdnDomainResponse>(await this.doRPCRequest("DeleteScdnDomain", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteScdnDomainResponse({}));
  }

  async deleteScdnDomain(request: DeleteScdnDomainRequest): Promise<DeleteScdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScdnDomainWithOptions(request, runtime);
  }

  async deleteScdnSpecificConfigWithOptions(request: DeleteScdnSpecificConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScdnSpecificConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteScdnSpecificConfigResponse>(await this.doRPCRequest("DeleteScdnSpecificConfig", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteScdnSpecificConfigResponse({}));
  }

  async deleteScdnSpecificConfig(request: DeleteScdnSpecificConfigRequest): Promise<DeleteScdnSpecificConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScdnSpecificConfigWithOptions(request, runtime);
  }

  async describeScdnCcQpsInfoWithOptions(request: DescribeScdnCcQpsInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnCcQpsInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeScdnCcQpsInfoResponse>(await this.doRPCRequest("DescribeScdnCcQpsInfo", "2017-11-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeScdnCcQpsInfoResponse({}));
  }

  async describeScdnCcQpsInfo(request: DescribeScdnCcQpsInfoRequest): Promise<DescribeScdnCcQpsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnCcQpsInfoWithOptions(request, runtime);
  }

  async describeScdnCcTopIpWithOptions(request: DescribeScdnCcTopIpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnCcTopIpResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeScdnCcTopIpResponse>(await this.doRPCRequest("DescribeScdnCcTopIp", "2017-11-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeScdnCcTopIpResponse({}));
  }

  async describeScdnCcTopIp(request: DescribeScdnCcTopIpRequest): Promise<DescribeScdnCcTopIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnCcTopIpWithOptions(request, runtime);
  }

  async describeScdnCcTopUrlWithOptions(request: DescribeScdnCcTopUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnCcTopUrlResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeScdnCcTopUrlResponse>(await this.doRPCRequest("DescribeScdnCcTopUrl", "2017-11-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeScdnCcTopUrlResponse({}));
  }

  async describeScdnCcTopUrl(request: DescribeScdnCcTopUrlRequest): Promise<DescribeScdnCcTopUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnCcTopUrlWithOptions(request, runtime);
  }

  async describeScdnCertificateDetailWithOptions(request: DescribeScdnCertificateDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnCertificateDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnCertificateDetailResponse>(await this.doRPCRequest("DescribeScdnCertificateDetail", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnCertificateDetailResponse({}));
  }

  async describeScdnCertificateDetail(request: DescribeScdnCertificateDetailRequest): Promise<DescribeScdnCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnCertificateDetailWithOptions(request, runtime);
  }

  async describeScdnCertificateListWithOptions(request: DescribeScdnCertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnCertificateListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnCertificateListResponse>(await this.doRPCRequest("DescribeScdnCertificateList", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnCertificateListResponse({}));
  }

  async describeScdnCertificateList(request: DescribeScdnCertificateListRequest): Promise<DescribeScdnCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnCertificateListWithOptions(request, runtime);
  }

  async describeScdnDDoSInfoWithOptions(request: DescribeScdnDDoSInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDDoSInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeScdnDDoSInfoResponse>(await this.doRPCRequest("DescribeScdnDDoSInfo", "2017-11-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeScdnDDoSInfoResponse({}));
  }

  async describeScdnDDoSInfo(request: DescribeScdnDDoSInfoRequest): Promise<DescribeScdnDDoSInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDDoSInfoWithOptions(request, runtime);
  }

  async describeScdnDDoSTrafficInfoWithOptions(request: DescribeScdnDDoSTrafficInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDDoSTrafficInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeScdnDDoSTrafficInfoResponse>(await this.doRPCRequest("DescribeScdnDDoSTrafficInfo", "2017-11-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeScdnDDoSTrafficInfoResponse({}));
  }

  async describeScdnDDoSTrafficInfo(request: DescribeScdnDDoSTrafficInfoRequest): Promise<DescribeScdnDDoSTrafficInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDDoSTrafficInfoWithOptions(request, runtime);
  }

  async describeScdnDomainBpsDataWithOptions(request: DescribeScdnDomainBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainBpsDataResponse>(await this.doRPCRequest("DescribeScdnDomainBpsData", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainBpsDataResponse({}));
  }

  async describeScdnDomainBpsData(request: DescribeScdnDomainBpsDataRequest): Promise<DescribeScdnDomainBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainBpsDataWithOptions(request, runtime);
  }

  async describeScdnDomainCertificateInfoWithOptions(request: DescribeScdnDomainCertificateInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainCertificateInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainCertificateInfoResponse>(await this.doRPCRequest("DescribeScdnDomainCertificateInfo", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainCertificateInfoResponse({}));
  }

  async describeScdnDomainCertificateInfo(request: DescribeScdnDomainCertificateInfoRequest): Promise<DescribeScdnDomainCertificateInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainCertificateInfoWithOptions(request, runtime);
  }

  async describeScdnDomainCnameWithOptions(request: DescribeScdnDomainCnameRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainCnameResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeScdnDomainCnameResponse>(await this.doRPCRequest("DescribeScdnDomainCname", "2017-11-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeScdnDomainCnameResponse({}));
  }

  async describeScdnDomainCname(request: DescribeScdnDomainCnameRequest): Promise<DescribeScdnDomainCnameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainCnameWithOptions(request, runtime);
  }

  async describeScdnDomainConfigsWithOptions(request: DescribeScdnDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainConfigsResponse>(await this.doRPCRequest("DescribeScdnDomainConfigs", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainConfigsResponse({}));
  }

  async describeScdnDomainConfigs(request: DescribeScdnDomainConfigsRequest): Promise<DescribeScdnDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainConfigsWithOptions(request, runtime);
  }

  async describeScdnDomainDetailWithOptions(request: DescribeScdnDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainDetailResponse>(await this.doRPCRequest("DescribeScdnDomainDetail", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainDetailResponse({}));
  }

  async describeScdnDomainDetail(request: DescribeScdnDomainDetailRequest): Promise<DescribeScdnDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainDetailWithOptions(request, runtime);
  }

  async describeScdnDomainHitRateDataWithOptions(request: DescribeScdnDomainHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainHitRateDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainHitRateDataResponse>(await this.doRPCRequest("DescribeScdnDomainHitRateData", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainHitRateDataResponse({}));
  }

  async describeScdnDomainHitRateData(request: DescribeScdnDomainHitRateDataRequest): Promise<DescribeScdnDomainHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainHitRateDataWithOptions(request, runtime);
  }

  async describeScdnDomainHttpCodeDataWithOptions(request: DescribeScdnDomainHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainHttpCodeDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainHttpCodeDataResponse>(await this.doRPCRequest("DescribeScdnDomainHttpCodeData", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainHttpCodeDataResponse({}));
  }

  async describeScdnDomainHttpCodeData(request: DescribeScdnDomainHttpCodeDataRequest): Promise<DescribeScdnDomainHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainHttpCodeDataWithOptions(request, runtime);
  }

  async describeScdnDomainIspDataWithOptions(request: DescribeScdnDomainIspDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainIspDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainIspDataResponse>(await this.doRPCRequest("DescribeScdnDomainIspData", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainIspDataResponse({}));
  }

  async describeScdnDomainIspData(request: DescribeScdnDomainIspDataRequest): Promise<DescribeScdnDomainIspDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainIspDataWithOptions(request, runtime);
  }

  async describeScdnDomainLogWithOptions(request: DescribeScdnDomainLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainLogResponse>(await this.doRPCRequest("DescribeScdnDomainLog", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainLogResponse({}));
  }

  async describeScdnDomainLog(request: DescribeScdnDomainLogRequest): Promise<DescribeScdnDomainLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainLogWithOptions(request, runtime);
  }

  async describeScdnDomainOriginBpsDataWithOptions(request: DescribeScdnDomainOriginBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainOriginBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainOriginBpsDataResponse>(await this.doRPCRequest("DescribeScdnDomainOriginBpsData", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainOriginBpsDataResponse({}));
  }

  async describeScdnDomainOriginBpsData(request: DescribeScdnDomainOriginBpsDataRequest): Promise<DescribeScdnDomainOriginBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainOriginBpsDataWithOptions(request, runtime);
  }

  async describeScdnDomainOriginTrafficDataWithOptions(request: DescribeScdnDomainOriginTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainOriginTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainOriginTrafficDataResponse>(await this.doRPCRequest("DescribeScdnDomainOriginTrafficData", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainOriginTrafficDataResponse({}));
  }

  async describeScdnDomainOriginTrafficData(request: DescribeScdnDomainOriginTrafficDataRequest): Promise<DescribeScdnDomainOriginTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainOriginTrafficDataWithOptions(request, runtime);
  }

  async describeScdnDomainPvDataWithOptions(request: DescribeScdnDomainPvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainPvDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainPvDataResponse>(await this.doRPCRequest("DescribeScdnDomainPvData", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainPvDataResponse({}));
  }

  async describeScdnDomainPvData(request: DescribeScdnDomainPvDataRequest): Promise<DescribeScdnDomainPvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainPvDataWithOptions(request, runtime);
  }

  async describeScdnDomainQpsDataWithOptions(request: DescribeScdnDomainQpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainQpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainQpsDataResponse>(await this.doRPCRequest("DescribeScdnDomainQpsData", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainQpsDataResponse({}));
  }

  async describeScdnDomainQpsData(request: DescribeScdnDomainQpsDataRequest): Promise<DescribeScdnDomainQpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainQpsDataWithOptions(request, runtime);
  }

  async describeScdnDomainRealTimeBpsDataWithOptions(request: DescribeScdnDomainRealTimeBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainRealTimeBpsDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeScdnDomainRealTimeBpsDataResponse>(await this.doRPCRequest("DescribeScdnDomainRealTimeBpsData", "2017-11-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeScdnDomainRealTimeBpsDataResponse({}));
  }

  async describeScdnDomainRealTimeBpsData(request: DescribeScdnDomainRealTimeBpsDataRequest): Promise<DescribeScdnDomainRealTimeBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainRealTimeBpsDataWithOptions(request, runtime);
  }

  async describeScdnDomainRealTimeByteHitRateDataWithOptions(request: DescribeScdnDomainRealTimeByteHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainRealTimeByteHitRateDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeScdnDomainRealTimeByteHitRateDataResponse>(await this.doRPCRequest("DescribeScdnDomainRealTimeByteHitRateData", "2017-11-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeScdnDomainRealTimeByteHitRateDataResponse({}));
  }

  async describeScdnDomainRealTimeByteHitRateData(request: DescribeScdnDomainRealTimeByteHitRateDataRequest): Promise<DescribeScdnDomainRealTimeByteHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainRealTimeByteHitRateDataWithOptions(request, runtime);
  }

  async describeScdnDomainRealTimeHttpCodeDataWithOptions(request: DescribeScdnDomainRealTimeHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainRealTimeHttpCodeDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainRealTimeHttpCodeDataResponse>(await this.doRPCRequest("DescribeScdnDomainRealTimeHttpCodeData", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainRealTimeHttpCodeDataResponse({}));
  }

  async describeScdnDomainRealTimeHttpCodeData(request: DescribeScdnDomainRealTimeHttpCodeDataRequest): Promise<DescribeScdnDomainRealTimeHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainRealTimeHttpCodeDataWithOptions(request, runtime);
  }

  async describeScdnDomainRealTimeQpsDataWithOptions(request: DescribeScdnDomainRealTimeQpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainRealTimeQpsDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeScdnDomainRealTimeQpsDataResponse>(await this.doRPCRequest("DescribeScdnDomainRealTimeQpsData", "2017-11-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeScdnDomainRealTimeQpsDataResponse({}));
  }

  async describeScdnDomainRealTimeQpsData(request: DescribeScdnDomainRealTimeQpsDataRequest): Promise<DescribeScdnDomainRealTimeQpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainRealTimeQpsDataWithOptions(request, runtime);
  }

  async describeScdnDomainRealTimeReqHitRateDataWithOptions(request: DescribeScdnDomainRealTimeReqHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainRealTimeReqHitRateDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeScdnDomainRealTimeReqHitRateDataResponse>(await this.doRPCRequest("DescribeScdnDomainRealTimeReqHitRateData", "2017-11-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeScdnDomainRealTimeReqHitRateDataResponse({}));
  }

  async describeScdnDomainRealTimeReqHitRateData(request: DescribeScdnDomainRealTimeReqHitRateDataRequest): Promise<DescribeScdnDomainRealTimeReqHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainRealTimeReqHitRateDataWithOptions(request, runtime);
  }

  async describeScdnDomainRealTimeSrcBpsDataWithOptions(request: DescribeScdnDomainRealTimeSrcBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainRealTimeSrcBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainRealTimeSrcBpsDataResponse>(await this.doRPCRequest("DescribeScdnDomainRealTimeSrcBpsData", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainRealTimeSrcBpsDataResponse({}));
  }

  async describeScdnDomainRealTimeSrcBpsData(request: DescribeScdnDomainRealTimeSrcBpsDataRequest): Promise<DescribeScdnDomainRealTimeSrcBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainRealTimeSrcBpsDataWithOptions(request, runtime);
  }

  async describeScdnDomainRealTimeSrcTrafficDataWithOptions(request: DescribeScdnDomainRealTimeSrcTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainRealTimeSrcTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainRealTimeSrcTrafficDataResponse>(await this.doRPCRequest("DescribeScdnDomainRealTimeSrcTrafficData", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainRealTimeSrcTrafficDataResponse({}));
  }

  async describeScdnDomainRealTimeSrcTrafficData(request: DescribeScdnDomainRealTimeSrcTrafficDataRequest): Promise<DescribeScdnDomainRealTimeSrcTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainRealTimeSrcTrafficDataWithOptions(request, runtime);
  }

  async describeScdnDomainRealTimeTrafficDataWithOptions(request: DescribeScdnDomainRealTimeTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainRealTimeTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainRealTimeTrafficDataResponse>(await this.doRPCRequest("DescribeScdnDomainRealTimeTrafficData", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainRealTimeTrafficDataResponse({}));
  }

  async describeScdnDomainRealTimeTrafficData(request: DescribeScdnDomainRealTimeTrafficDataRequest): Promise<DescribeScdnDomainRealTimeTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainRealTimeTrafficDataWithOptions(request, runtime);
  }

  async describeScdnDomainRegionDataWithOptions(request: DescribeScdnDomainRegionDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainRegionDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainRegionDataResponse>(await this.doRPCRequest("DescribeScdnDomainRegionData", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainRegionDataResponse({}));
  }

  async describeScdnDomainRegionData(request: DescribeScdnDomainRegionDataRequest): Promise<DescribeScdnDomainRegionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainRegionDataWithOptions(request, runtime);
  }

  async describeScdnDomainTopReferVisitWithOptions(request: DescribeScdnDomainTopReferVisitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainTopReferVisitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainTopReferVisitResponse>(await this.doRPCRequest("DescribeScdnDomainTopReferVisit", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainTopReferVisitResponse({}));
  }

  async describeScdnDomainTopReferVisit(request: DescribeScdnDomainTopReferVisitRequest): Promise<DescribeScdnDomainTopReferVisitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainTopReferVisitWithOptions(request, runtime);
  }

  async describeScdnDomainTopUrlVisitWithOptions(request: DescribeScdnDomainTopUrlVisitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainTopUrlVisitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainTopUrlVisitResponse>(await this.doRPCRequest("DescribeScdnDomainTopUrlVisit", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainTopUrlVisitResponse({}));
  }

  async describeScdnDomainTopUrlVisit(request: DescribeScdnDomainTopUrlVisitRequest): Promise<DescribeScdnDomainTopUrlVisitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainTopUrlVisitWithOptions(request, runtime);
  }

  async describeScdnDomainTrafficDataWithOptions(request: DescribeScdnDomainTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainTrafficDataResponse>(await this.doRPCRequest("DescribeScdnDomainTrafficData", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainTrafficDataResponse({}));
  }

  async describeScdnDomainTrafficData(request: DescribeScdnDomainTrafficDataRequest): Promise<DescribeScdnDomainTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainTrafficDataWithOptions(request, runtime);
  }

  async describeScdnDomainUvDataWithOptions(request: DescribeScdnDomainUvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnDomainUvDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnDomainUvDataResponse>(await this.doRPCRequest("DescribeScdnDomainUvData", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnDomainUvDataResponse({}));
  }

  async describeScdnDomainUvData(request: DescribeScdnDomainUvDataRequest): Promise<DescribeScdnDomainUvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnDomainUvDataWithOptions(request, runtime);
  }

  async describeScdnRefreshQuotaWithOptions(request: DescribeScdnRefreshQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnRefreshQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnRefreshQuotaResponse>(await this.doRPCRequest("DescribeScdnRefreshQuota", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnRefreshQuotaResponse({}));
  }

  async describeScdnRefreshQuota(request: DescribeScdnRefreshQuotaRequest): Promise<DescribeScdnRefreshQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnRefreshQuotaWithOptions(request, runtime);
  }

  async describeScdnRefreshTasksWithOptions(request: DescribeScdnRefreshTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnRefreshTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnRefreshTasksResponse>(await this.doRPCRequest("DescribeScdnRefreshTasks", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnRefreshTasksResponse({}));
  }

  async describeScdnRefreshTasks(request: DescribeScdnRefreshTasksRequest): Promise<DescribeScdnRefreshTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnRefreshTasksWithOptions(request, runtime);
  }

  async describeScdnServiceWithOptions(request: DescribeScdnServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnServiceResponse>(await this.doRPCRequest("DescribeScdnService", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnServiceResponse({}));
  }

  async describeScdnService(request: DescribeScdnServiceRequest): Promise<DescribeScdnServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnServiceWithOptions(request, runtime);
  }

  async describeScdnTopDomainsByFlowWithOptions(request: DescribeScdnTopDomainsByFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnTopDomainsByFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnTopDomainsByFlowResponse>(await this.doRPCRequest("DescribeScdnTopDomainsByFlow", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnTopDomainsByFlowResponse({}));
  }

  async describeScdnTopDomainsByFlow(request: DescribeScdnTopDomainsByFlowRequest): Promise<DescribeScdnTopDomainsByFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnTopDomainsByFlowWithOptions(request, runtime);
  }

  async describeScdnUserDomainsWithOptions(request: DescribeScdnUserDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnUserDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnUserDomainsResponse>(await this.doRPCRequest("DescribeScdnUserDomains", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnUserDomainsResponse({}));
  }

  async describeScdnUserDomains(request: DescribeScdnUserDomainsRequest): Promise<DescribeScdnUserDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnUserDomainsWithOptions(request, runtime);
  }

  async describeScdnUserProtectInfoWithOptions(request: DescribeScdnUserProtectInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnUserProtectInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeScdnUserProtectInfoResponse>(await this.doRPCRequest("DescribeScdnUserProtectInfo", "2017-11-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeScdnUserProtectInfoResponse({}));
  }

  async describeScdnUserProtectInfo(request: DescribeScdnUserProtectInfoRequest): Promise<DescribeScdnUserProtectInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnUserProtectInfoWithOptions(request, runtime);
  }

  async describeScdnUserQuotaWithOptions(request: DescribeScdnUserQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScdnUserQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScdnUserQuotaResponse>(await this.doRPCRequest("DescribeScdnUserQuota", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScdnUserQuotaResponse({}));
  }

  async describeScdnUserQuota(request: DescribeScdnUserQuotaRequest): Promise<DescribeScdnUserQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScdnUserQuotaWithOptions(request, runtime);
  }

  async openScdnServiceWithOptions(request: OpenScdnServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenScdnServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenScdnServiceResponse>(await this.doRPCRequest("OpenScdnService", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new OpenScdnServiceResponse({}));
  }

  async openScdnService(request: OpenScdnServiceRequest): Promise<OpenScdnServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openScdnServiceWithOptions(request, runtime);
  }

  async preloadScdnObjectCachesWithOptions(request: PreloadScdnObjectCachesRequest, runtime: $Util.RuntimeOptions): Promise<PreloadScdnObjectCachesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PreloadScdnObjectCachesResponse>(await this.doRPCRequest("PreloadScdnObjectCaches", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new PreloadScdnObjectCachesResponse({}));
  }

  async preloadScdnObjectCaches(request: PreloadScdnObjectCachesRequest): Promise<PreloadScdnObjectCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.preloadScdnObjectCachesWithOptions(request, runtime);
  }

  async refreshScdnObjectCachesWithOptions(request: RefreshScdnObjectCachesRequest, runtime: $Util.RuntimeOptions): Promise<RefreshScdnObjectCachesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshScdnObjectCachesResponse>(await this.doRPCRequest("RefreshScdnObjectCaches", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshScdnObjectCachesResponse({}));
  }

  async refreshScdnObjectCaches(request: RefreshScdnObjectCachesRequest): Promise<RefreshScdnObjectCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshScdnObjectCachesWithOptions(request, runtime);
  }

  async setScdnBotInfoWithOptions(request: SetScdnBotInfoRequest, runtime: $Util.RuntimeOptions): Promise<SetScdnBotInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SetScdnBotInfoResponse>(await this.doRPCRequest("SetScdnBotInfo", "2017-11-15", "HTTPS", "GET", "AK", "json", req, runtime), new SetScdnBotInfoResponse({}));
  }

  async setScdnBotInfo(request: SetScdnBotInfoRequest): Promise<SetScdnBotInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setScdnBotInfoWithOptions(request, runtime);
  }

  async setScdnCcInfoWithOptions(request: SetScdnCcInfoRequest, runtime: $Util.RuntimeOptions): Promise<SetScdnCcInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SetScdnCcInfoResponse>(await this.doRPCRequest("SetScdnCcInfo", "2017-11-15", "HTTPS", "GET", "AK", "json", req, runtime), new SetScdnCcInfoResponse({}));
  }

  async setScdnCcInfo(request: SetScdnCcInfoRequest): Promise<SetScdnCcInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setScdnCcInfoWithOptions(request, runtime);
  }

  async setScdnDDoSInfoWithOptions(request: SetScdnDDoSInfoRequest, runtime: $Util.RuntimeOptions): Promise<SetScdnDDoSInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SetScdnDDoSInfoResponse>(await this.doRPCRequest("SetScdnDDoSInfo", "2017-11-15", "HTTPS", "GET", "AK", "json", req, runtime), new SetScdnDDoSInfoResponse({}));
  }

  async setScdnDDoSInfo(request: SetScdnDDoSInfoRequest): Promise<SetScdnDDoSInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setScdnDDoSInfoWithOptions(request, runtime);
  }

  async setScdnDomainBizInfoWithOptions(request: SetScdnDomainBizInfoRequest, runtime: $Util.RuntimeOptions): Promise<SetScdnDomainBizInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<SetScdnDomainBizInfoResponse>(await this.doRPCRequest("SetScdnDomainBizInfo", "2017-11-15", "HTTPS", "GET", "AK", "json", req, runtime), new SetScdnDomainBizInfoResponse({}));
  }

  async setScdnDomainBizInfo(request: SetScdnDomainBizInfoRequest): Promise<SetScdnDomainBizInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setScdnDomainBizInfoWithOptions(request, runtime);
  }

  async setScdnDomainCertificateWithOptions(request: SetScdnDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetScdnDomainCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetScdnDomainCertificateResponse>(await this.doRPCRequest("SetScdnDomainCertificate", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetScdnDomainCertificateResponse({}));
  }

  async setScdnDomainCertificate(request: SetScdnDomainCertificateRequest): Promise<SetScdnDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setScdnDomainCertificateWithOptions(request, runtime);
  }

  async startScdnDomainWithOptions(request: StartScdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<StartScdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartScdnDomainResponse>(await this.doRPCRequest("StartScdnDomain", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new StartScdnDomainResponse({}));
  }

  async startScdnDomain(request: StartScdnDomainRequest): Promise<StartScdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startScdnDomainWithOptions(request, runtime);
  }

  async stopScdnDomainWithOptions(request: StopScdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<StopScdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopScdnDomainResponse>(await this.doRPCRequest("StopScdnDomain", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new StopScdnDomainResponse({}));
  }

  async stopScdnDomain(request: StopScdnDomainRequest): Promise<StopScdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopScdnDomainWithOptions(request, runtime);
  }

  async updateScdnDomainWithOptions(request: UpdateScdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateScdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateScdnDomainResponse>(await this.doRPCRequest("UpdateScdnDomain", "2017-11-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateScdnDomainResponse({}));
  }

  async updateScdnDomain(request: UpdateScdnDomainRequest): Promise<UpdateScdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateScdnDomainWithOptions(request, runtime);
  }

}
