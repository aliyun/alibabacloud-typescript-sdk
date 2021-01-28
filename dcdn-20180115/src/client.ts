// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddDcdnDomainRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  domainName?: string;
  resourceGroupId?: string;
  sources?: string;
  checkUrl?: string;
  scope?: string;
  topLevelDomain?: string;
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
      topLevelDomain: 'TopLevelDomain',
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
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDcdnDomainResponseBody extends $tea.Model {
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

export class AddDcdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDcdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDcdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDcdnIpaDomainRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  domainName?: string;
  resourceGroupId?: string;
  sources?: string;
  checkUrl?: string;
  scope?: string;
  topLevelDomain?: string;
  protocol?: string;
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
      topLevelDomain: 'TopLevelDomain',
      protocol: 'Protocol',
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
      topLevelDomain: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDcdnIpaDomainResponseBody extends $tea.Model {
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

export class AddDcdnIpaDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddDcdnIpaDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddDcdnIpaDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddDcdnDomainRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  domainName?: string;
  resourceGroupId?: string;
  sources?: string;
  checkUrl?: string;
  scope?: string;
  topLevelDomain?: string;
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
      topLevelDomain: 'TopLevelDomain',
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
      topLevelDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchAddDcdnDomainResponseBody extends $tea.Model {
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

export class BatchAddDcdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchAddDcdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchAddDcdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteDcdnDomainConfigsRequest extends $tea.Model {
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

export class BatchDeleteDcdnDomainConfigsResponseBody extends $tea.Model {
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

export class BatchDeleteDcdnDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchDeleteDcdnDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchDeleteDcdnDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetDcdnDomainCertificateRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  certName?: string;
  certType?: string;
  SSLProtocol?: string;
  SSLPub?: string;
  SSLPri?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainName: 'DomainName',
      certName: 'CertName',
      certType: 'CertType',
      SSLProtocol: 'SSLProtocol',
      SSLPub: 'SSLPub',
      SSLPri: 'SSLPri',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainName: 'string',
      certName: 'string',
      certType: 'string',
      SSLProtocol: 'string',
      SSLPub: 'string',
      SSLPri: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetDcdnDomainCertificateResponseBody extends $tea.Model {
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

export class BatchSetDcdnDomainCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchSetDcdnDomainCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchSetDcdnDomainCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetDcdnDomainConfigsRequest extends $tea.Model {
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

export class BatchSetDcdnDomainConfigsResponseBody extends $tea.Model {
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

export class BatchSetDcdnDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchSetDcdnDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchSetDcdnDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchSetDcdnIpaDomainConfigsRequest extends $tea.Model {
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

export class BatchSetDcdnIpaDomainConfigsResponseBody extends $tea.Model {
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

export class BatchSetDcdnIpaDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchSetDcdnIpaDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchSetDcdnIpaDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartDcdnDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStartDcdnDomainResponseBody extends $tea.Model {
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

export class BatchStartDcdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchStartDcdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchStartDcdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopDcdnDomainRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      domainNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchStopDcdnDomainResponseBody extends $tea.Model {
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

export class BatchStopDcdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchStopDcdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchStopDcdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnCertificateSigningRequestRequest extends $tea.Model {
  ownerId?: number;
  commonName?: string;
  SANs?: string;
  organization?: string;
  organizationUnit?: string;
  country?: string;
  state?: string;
  city?: string;
  email?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      commonName: 'CommonName',
      SANs: 'SANs',
      organization: 'Organization',
      organizationUnit: 'OrganizationUnit',
      country: 'Country',
      state: 'State',
      city: 'City',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      commonName: 'string',
      SANs: 'string',
      organization: 'string',
      organizationUnit: 'string',
      country: 'string',
      state: 'string',
      city: 'string',
      email: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnCertificateSigningRequestResponseBody extends $tea.Model {
  pubMd5?: string;
  csr?: string;
  requestId?: string;
  commonName?: string;
  static names(): { [key: string]: string } {
    return {
      pubMd5: 'PubMd5',
      csr: 'Csr',
      requestId: 'RequestId',
      commonName: 'CommonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubMd5: 'string',
      csr: 'string',
      requestId: 'string',
      commonName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnCertificateSigningRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDcdnCertificateSigningRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDcdnCertificateSigningRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnDomainOfflineLogDeliveryRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  regionId?: string;
  fieldId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      regionId: 'RegionId',
      fieldId: 'FieldId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      regionId: 'string',
      fieldId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDcdnDomainOfflineLogDeliveryResponseBody extends $tea.Model {
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

export class CreateDcdnDomainOfflineLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDcdnDomainOfflineLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDcdnDomainOfflineLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnDomainRequest extends $tea.Model {
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

export class DeleteDcdnDomainResponseBody extends $tea.Model {
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

export class DeleteDcdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDcdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDcdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnIpaDomainRequest extends $tea.Model {
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

export class DeleteDcdnIpaDomainResponseBody extends $tea.Model {
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

export class DeleteDcdnIpaDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDcdnIpaDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDcdnIpaDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnIpaSpecificConfigRequest extends $tea.Model {
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

export class DeleteDcdnIpaSpecificConfigResponseBody extends $tea.Model {
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

export class DeleteDcdnIpaSpecificConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDcdnIpaSpecificConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDcdnIpaSpecificConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnSpecificConfigRequest extends $tea.Model {
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

export class DeleteDcdnSpecificConfigResponseBody extends $tea.Model {
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

export class DeleteDcdnSpecificConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDcdnSpecificConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDcdnSpecificConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDcdnSpecificStagingConfigRequest extends $tea.Model {
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

export class DeleteDcdnSpecificStagingConfigResponseBody extends $tea.Model {
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

export class DeleteDcdnSpecificStagingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDcdnSpecificStagingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDcdnSpecificStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpBpsDataRequest extends $tea.Model {
  ownerId?: number;
  isp?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      isp: 'Isp',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      isp: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpBpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  startTime?: string;
  bgpDataInterval?: DescribeDcdnBgpBpsDataResponseBodyBgpDataInterval[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      bgpDataInterval: 'BgpDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      bgpDataInterval: { 'type': 'array', 'itemType': DescribeDcdnBgpBpsDataResponseBodyBgpDataInterval },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnBgpBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnBgpBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  isp?: string;
  startTime?: string;
  endTime?: string;
  interval?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      isp: 'Isp',
      startTime: 'StartTime',
      endTime: 'EndTime',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      isp: 'string',
      startTime: 'string',
      endTime: 'string',
      interval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  startTime?: string;
  bgpDataInterval?: DescribeDcdnBgpTrafficDataResponseBodyBgpDataInterval[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      bgpDataInterval: 'BgpDataInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      bgpDataInterval: { 'type': 'array', 'itemType': DescribeDcdnBgpTrafficDataResponseBodyBgpDataInterval },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnBgpTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnBgpTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnCertificateDetailRequest extends $tea.Model {
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

export class DescribeDcdnCertificateDetailResponseBody extends $tea.Model {
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

export class DescribeDcdnCertificateDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnCertificateDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnCertificateDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnCertificateListRequest extends $tea.Model {
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

export class DescribeDcdnCertificateListResponseBody extends $tea.Model {
  requestId?: string;
  certificateListModel?: DescribeDcdnCertificateListResponseBodyCertificateListModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateListModel: 'CertificateListModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateListModel: DescribeDcdnCertificateListResponseBodyCertificateListModel,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnCertificateListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnCertificateListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnCertificateListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnConfigOfVersionRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  versionId?: string;
  functionId?: number;
  functionName?: string;
  groupId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      versionId: 'VersionId',
      functionId: 'FunctionId',
      functionName: 'FunctionName',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      versionId: 'string',
      functionId: 'number',
      functionName: 'string',
      groupId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnConfigOfVersionResponseBody extends $tea.Model {
  requestId?: string;
  versionConfigs?: DescribeDcdnConfigOfVersionResponseBodyVersionConfigs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionConfigs: 'VersionConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionConfigs: DescribeDcdnConfigOfVersionResponseBodyVersionConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnConfigOfVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnConfigOfVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnConfigOfVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainBpsDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainBpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  bpsDataPerInterval?: DescribeDcdnDomainBpsDataResponseBodyBpsDataPerInterval;
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
      bpsDataPerInterval: DescribeDcdnDomainBpsDataResponseBodyBpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainByCertificateRequest extends $tea.Model {
  ownerId?: number;
  SSLPub?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      SSLPub: 'SSLPub',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      SSLPub: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainByCertificateResponseBody extends $tea.Model {
  certInfos?: DescribeDcdnDomainByCertificateResponseBodyCertInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeDcdnDomainByCertificateResponseBodyCertInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainByCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainByCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainByCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCertificateInfoRequest extends $tea.Model {
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

export class DescribeDcdnDomainCertificateInfoResponseBody extends $tea.Model {
  certInfos?: DescribeDcdnDomainCertificateInfoResponseBodyCertInfos;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeDcdnDomainCertificateInfoResponseBodyCertInfos,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCertificateInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainCertificateInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainCertificateInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCnameRequest extends $tea.Model {
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

export class DescribeDcdnDomainCnameResponseBody extends $tea.Model {
  requestId?: string;
  cnameDatas?: DescribeDcdnDomainCnameResponseBodyCnameDatas;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cnameDatas: 'CnameDatas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cnameDatas: DescribeDcdnDomainCnameResponseBodyCnameDatas,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCnameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainCnameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainCnameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainConfigsRequest extends $tea.Model {
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

export class DescribeDcdnDomainConfigsResponseBody extends $tea.Model {
  requestId?: string;
  domainConfigs?: DescribeDcdnDomainConfigsResponseBodyDomainConfigs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainConfigs: 'DomainConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainConfigs: DescribeDcdnDomainConfigsResponseBodyDomainConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainDetailRequest extends $tea.Model {
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

export class DescribeDcdnDomainDetailResponseBody extends $tea.Model {
  domainDetail?: DescribeDcdnDomainDetailResponseBodyDomainDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainDetail: 'DomainDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainDetail: DescribeDcdnDomainDetailResponseBodyDomainDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHitRateDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainHitRateDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  hitRatePerInterval?: DescribeDcdnDomainHitRateDataResponseBodyHitRatePerInterval;
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
      hitRatePerInterval: DescribeDcdnDomainHitRateDataResponseBodyHitRatePerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainHitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainHttpCodeDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  dataPerInterval?: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerInterval;
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
      dataPerInterval: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainHttpCodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaBpsDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  timeMerge?: string;
  interval?: string;
  fixTimeGap?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      timeMerge: 'TimeMerge',
      interval: 'Interval',
      fixTimeGap: 'FixTimeGap',
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
      timeMerge: 'string',
      interval: 'string',
      fixTimeGap: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaBpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  bpsDataPerInterval?: DescribeDcdnDomainIpaBpsDataResponseBodyBpsDataPerInterval;
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
      bpsDataPerInterval: DescribeDcdnDomainIpaBpsDataResponseBodyBpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainIpaBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainIpaBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaTrafficDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  timeMerge?: string;
  interval?: string;
  fixTimeGap?: string;
  ispNameEn?: string;
  locationNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      timeMerge: 'TimeMerge',
      interval: 'Interval',
      fixTimeGap: 'FixTimeGap',
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
      timeMerge: 'string',
      interval: 'string',
      fixTimeGap: 'string',
      ispNameEn: 'string',
      locationNameEn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  trafficDataPerInterval?: DescribeDcdnDomainIpaTrafficDataResponseBodyTrafficDataPerInterval;
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
      trafficDataPerInterval: DescribeDcdnDomainIpaTrafficDataResponseBodyTrafficDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainIpaTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainIpaTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIspDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainIspDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  value?: DescribeDcdnDomainIspDataResponseBodyValue;
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
      value: DescribeDcdnDomainIspDataResponseBodyValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIspDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainIspDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainIspDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainLogRequest extends $tea.Model {
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

export class DescribeDcdnDomainLogResponseBody extends $tea.Model {
  requestId?: string;
  domainName?: string;
  domainLogDetails?: DescribeDcdnDomainLogResponseBodyDomainLogDetails;
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
      domainLogDetails: DescribeDcdnDomainLogResponseBodyDomainLogDetails,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainMultiUsageDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  startTime?: string;
  requestPerInterval?: DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerInterval;
  trafficPerInterval?: DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerInterval;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      requestPerInterval: 'RequestPerInterval',
      trafficPerInterval: 'TrafficPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      requestPerInterval: DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerInterval,
      trafficPerInterval: DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainMultiUsageDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainMultiUsageDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginBpsDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainOriginBpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  originBpsDataPerInterval?: DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerInterval;
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
      originBpsDataPerInterval: DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainOriginBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainOriginBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginTrafficDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainOriginTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  originTrafficDataPerInterval?: DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerInterval;
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
      originTrafficDataPerInterval: DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainOriginTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainOriginTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainPropertyRequest extends $tea.Model {
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

export class DescribeDcdnDomainPropertyResponseBody extends $tea.Model {
  requestId?: string;
  domainName?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainName: 'DomainName',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainName: 'string',
      protocol: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainPvDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainPvDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  pvDataInterval?: DescribeDcdnDomainPvDataResponseBodyPvDataInterval;
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
      pvDataInterval: DescribeDcdnDomainPvDataResponseBodyPvDataInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainPvDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainPvDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainPvDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainQpsDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainQpsDataResponseBody extends $tea.Model {
  qpsDataPerInterval?: DescribeDcdnDomainQpsDataResponseBodyQpsDataPerInterval;
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
      qpsDataPerInterval: DescribeDcdnDomainQpsDataResponseBodyQpsDataPerInterval,
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

export class DescribeDcdnDomainQpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainQpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainQpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeBpsDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeBpsDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeDcdnDomainRealTimeBpsDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDcdnDomainRealTimeBpsDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainRealTimeBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainRealTimeBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeByteHitRateDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeByteHitRateDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeByteHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainRealTimeByteHitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainRealTimeByteHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeDetailDataRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  startTime?: string;
  endTime?: string;
  field?: string;
  locationNameEn?: string;
  ispNameEn?: string;
  merge?: string;
  mergeLocIsp?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      endTime: 'EndTime',
      field: 'Field',
      locationNameEn: 'LocationNameEn',
      ispNameEn: 'IspNameEn',
      merge: 'Merge',
      mergeLocIsp: 'MergeLocIsp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      startTime: 'string',
      endTime: 'string',
      field: 'string',
      locationNameEn: 'string',
      ispNameEn: 'string',
      merge: 'string',
      mergeLocIsp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeDetailDataResponseBody extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeDetailDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainRealTimeDetailDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainRealTimeDetailDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeHttpCodeDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeHttpCodeDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  realTimeHttpCodeData?: DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData;
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
      realTimeHttpCodeData: DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainRealTimeHttpCodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainRealTimeHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeQpsDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeQpsDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeDcdnDomainRealTimeQpsDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDcdnDomainRealTimeQpsDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeQpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainRealTimeQpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainRealTimeQpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeReqHitRateDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeReqHitRateDataResponseBody extends $tea.Model {
  requestId?: string;
  data?: DescribeDcdnDomainRealTimeReqHitRateDataResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: DescribeDcdnDomainRealTimeReqHitRateDataResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeReqHitRateDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainRealTimeReqHitRateDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainRealTimeReqHitRateDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcBpsDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeSrcBpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  realTimeSrcBpsDataPerInterval?: DescribeDcdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval;
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
      realTimeSrcBpsDataPerInterval: DescribeDcdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainRealTimeSrcBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainRealTimeSrcBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcHttpCodeDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  realTimeSrcHttpCodeData?: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      requestId: 'RequestId',
      domainName: 'DomainName',
      startTime: 'StartTime',
      dataInterval: 'DataInterval',
      realTimeSrcHttpCodeData: 'RealTimeSrcHttpCodeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      dataInterval: 'string',
      realTimeSrcHttpCodeData: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcTrafficDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeSrcTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  realTimeSrcTrafficDataPerInterval?: DescribeDcdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval;
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
      realTimeSrcTrafficDataPerInterval: DescribeDcdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainRealTimeSrcTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainRealTimeSrcTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeTrafficDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  realTimeTrafficDataPerInterval?: DescribeDcdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval;
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
      realTimeTrafficDataPerInterval: DescribeDcdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainRealTimeTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainRealTimeTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRegionDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainRegionDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  value?: DescribeDcdnDomainRegionDataResponseBodyValue;
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
      value: DescribeDcdnDomainRegionDataResponseBodyValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRegionDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainRegionDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainRegionDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainStagingConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  functionNames?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      functionNames: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainStagingConfigResponseBody extends $tea.Model {
  requestId?: string;
  domainConfigs?: DescribeDcdnDomainStagingConfigResponseBodyDomainConfigs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainConfigs: 'DomainConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainConfigs: { 'type': 'array', 'itemType': DescribeDcdnDomainStagingConfigResponseBodyDomainConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainStagingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainStagingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopReferVisitRequest extends $tea.Model {
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

export class DescribeDcdnDomainTopReferVisitResponseBody extends $tea.Model {
  requestId?: string;
  domainName?: string;
  startTime?: string;
  topReferList?: DescribeDcdnDomainTopReferVisitResponseBodyTopReferList;
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
      topReferList: DescribeDcdnDomainTopReferVisitResponseBodyTopReferList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopReferVisitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainTopReferVisitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainTopReferVisitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitRequest extends $tea.Model {
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

export class DescribeDcdnDomainTopUrlVisitResponseBody extends $tea.Model {
  url500List?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl500List;
  url200List?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl200List;
  url400List?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl400List;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  url300List?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl300List;
  allUrlList?: DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlList;
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
      url500List: DescribeDcdnDomainTopUrlVisitResponseBodyUrl500List,
      url200List: DescribeDcdnDomainTopUrlVisitResponseBodyUrl200List,
      url400List: DescribeDcdnDomainTopUrlVisitResponseBodyUrl400List,
      requestId: 'string',
      domainName: 'string',
      startTime: 'string',
      url300List: DescribeDcdnDomainTopUrlVisitResponseBodyUrl300List,
      allUrlList: DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainTopUrlVisitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainTopUrlVisitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTrafficDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  trafficDataPerInterval?: DescribeDcdnDomainTrafficDataResponseBodyTrafficDataPerInterval;
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
      trafficDataPerInterval: DescribeDcdnDomainTrafficDataResponseBodyTrafficDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainUvDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainUvDataResponseBody extends $tea.Model {
  uvDataInterval?: DescribeDcdnDomainUvDataResponseBodyUvDataInterval;
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
      uvDataInterval: DescribeDcdnDomainUvDataResponseBodyUvDataInterval,
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

export class DescribeDcdnDomainUvDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainUvDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainUvDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketBpsDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainWebsocketBpsDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  bpsDataPerInterval?: DescribeDcdnDomainWebsocketBpsDataResponseBodyBpsDataPerInterval;
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
      bpsDataPerInterval: DescribeDcdnDomainWebsocketBpsDataResponseBodyBpsDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketBpsDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainWebsocketBpsDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainWebsocketBpsDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketHttpCodeDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainWebsocketHttpCodeDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  startTime?: string;
  dataInterval?: string;
  dataPerInterval?: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyDataPerInterval;
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
      dataPerInterval: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketHttpCodeDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainWebsocketHttpCodeDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainWebsocketHttpCodeDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketTrafficDataRequest extends $tea.Model {
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

export class DescribeDcdnDomainWebsocketTrafficDataResponseBody extends $tea.Model {
  endTime?: string;
  requestId?: string;
  domainName?: string;
  trafficDataPerInterval?: DescribeDcdnDomainWebsocketTrafficDataResponseBodyTrafficDataPerInterval;
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
      trafficDataPerInterval: DescribeDcdnDomainWebsocketTrafficDataResponseBodyTrafficDataPerInterval,
      startTime: 'string',
      dataInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketTrafficDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnDomainWebsocketTrafficDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnDomainWebsocketTrafficDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnHttpsDomainListRequest extends $tea.Model {
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnHttpsDomainListResponseBody extends $tea.Model {
  certInfos?: DescribeDcdnHttpsDomainListResponseBodyCertInfos;
  totalCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certInfos: 'CertInfos',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfos: DescribeDcdnHttpsDomainListResponseBodyCertInfos,
      totalCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnHttpsDomainListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnHttpsDomainListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnHttpsDomainListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainConfigsRequest extends $tea.Model {
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

export class DescribeDcdnIpaDomainConfigsResponseBody extends $tea.Model {
  requestId?: string;
  domainConfigs?: DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigs;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      domainConfigs: 'DomainConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      domainConfigs: DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnIpaDomainConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnIpaDomainConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainDetailRequest extends $tea.Model {
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

export class DescribeDcdnIpaDomainDetailResponseBody extends $tea.Model {
  domainDetail?: DescribeDcdnIpaDomainDetailResponseBodyDomainDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainDetail: 'DomainDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainDetail: DescribeDcdnIpaDomainDetailResponseBodyDomainDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnIpaDomainDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnIpaDomainDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaServiceRequest extends $tea.Model {
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

export class DescribeDcdnIpaServiceResponseBody extends $tea.Model {
  changingChargeType?: string;
  requestId?: string;
  instanceId?: string;
  openingTime?: string;
  changingAffectTime?: string;
  operationLocks?: DescribeDcdnIpaServiceResponseBodyOperationLocks;
  internetChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      changingChargeType: 'ChangingChargeType',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      openingTime: 'OpeningTime',
      changingAffectTime: 'ChangingAffectTime',
      operationLocks: 'OperationLocks',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changingChargeType: 'string',
      requestId: 'string',
      instanceId: 'string',
      openingTime: 'string',
      changingAffectTime: 'string',
      operationLocks: DescribeDcdnIpaServiceResponseBodyOperationLocks,
      internetChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnIpaServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnIpaServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaUserDomainsRequest extends $tea.Model {
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaUserDomainsResponseBody extends $tea.Model {
  domains?: DescribeDcdnIpaUserDomainsResponseBodyDomains;
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
      domains: DescribeDcdnIpaUserDomainsResponseBodyDomains,
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

export class DescribeDcdnIpaUserDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnIpaUserDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnIpaUserDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpInfoRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  IP?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      IP: 'IP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      IP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpInfoResponseBody extends $tea.Model {
  requestId?: string;
  ISP?: string;
  region?: string;
  ispEname?: string;
  regionEname?: string;
  dcdnIp?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ISP: 'ISP',
      region: 'Region',
      ispEname: 'IspEname',
      regionEname: 'RegionEname',
      dcdnIp: 'DcdnIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ISP: 'string',
      region: 'string',
      ispEname: 'string',
      regionEname: 'string',
      dcdnIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnIpInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnIpInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnOfflineLogDeliveryRequest extends $tea.Model {
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

export class DescribeDcdnOfflineLogDeliveryResponseBody extends $tea.Model {
  domains?: DescribeDcdnOfflineLogDeliveryResponseBodyDomains[];
  fields?: string[];
  requestId?: string;
  regions?: DescribeDcdnOfflineLogDeliveryResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      fields: 'Fields',
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': DescribeDcdnOfflineLogDeliveryResponseBodyDomains },
      fields: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeDcdnOfflineLogDeliveryResponseBodyRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnOfflineLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnOfflineLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnOfflineLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnOfflineLogDeliveryFieldRequest extends $tea.Model {
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

export class DescribeDcdnOfflineLogDeliveryFieldResponseBody extends $tea.Model {
  fields?: DescribeDcdnOfflineLogDeliveryFieldResponseBodyFields[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': DescribeDcdnOfflineLogDeliveryFieldResponseBodyFields },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnOfflineLogDeliveryFieldResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnOfflineLogDeliveryFieldResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnOfflineLogDeliveryFieldResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnOfflineLogDeliveryRegionsRequest extends $tea.Model {
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

export class DescribeDcdnOfflineLogDeliveryRegionsResponseBody extends $tea.Model {
  requestId?: string;
  areas?: DescribeDcdnOfflineLogDeliveryRegionsResponseBodyAreas[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      areas: 'Areas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      areas: { 'type': 'array', 'itemType': DescribeDcdnOfflineLogDeliveryRegionsResponseBodyAreas },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnOfflineLogDeliveryRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnOfflineLogDeliveryRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnOfflineLogDeliveryRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnOfflineLogDeliveryStatusRequest extends $tea.Model {
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

export class DescribeDcdnOfflineLogDeliveryStatusResponseBody extends $tea.Model {
  requestId?: string;
  openStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      openStatus: 'OpenStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      openStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnOfflineLogDeliveryStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnOfflineLogDeliveryStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnOfflineLogDeliveryStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshQuotaRequest extends $tea.Model {
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

export class DescribeDcdnRefreshQuotaResponseBody extends $tea.Model {
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

export class DescribeDcdnRefreshQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnRefreshQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnRefreshQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshTasksRequest extends $tea.Model {
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshTasksResponseBody extends $tea.Model {
  totalCount?: number;
  tasks?: DescribeDcdnRefreshTasksResponseBodyTasks;
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
      tasks: DescribeDcdnRefreshTasksResponseBodyTasks,
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnRefreshTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnRefreshTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRegionAndIspRequest extends $tea.Model {
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

export class DescribeDcdnRegionAndIspResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeDcdnRegionAndIspResponseBodyRegions;
  isps?: DescribeDcdnRegionAndIspResponseBodyIsps;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
      isps: 'Isps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeDcdnRegionAndIspResponseBodyRegions,
      isps: DescribeDcdnRegionAndIspResponseBodyIsps,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRegionAndIspResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnRegionAndIspResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnRegionAndIspResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnServiceRequest extends $tea.Model {
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

export class DescribeDcdnServiceResponseBody extends $tea.Model {
  websocketChangingType?: string;
  changingChargeType?: string;
  requestId?: string;
  instanceId?: string;
  websocketType?: string;
  openingTime?: string;
  changingAffectTime?: string;
  operationLocks?: DescribeDcdnServiceResponseBodyOperationLocks;
  websocketChangingTime?: string;
  internetChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      websocketChangingType: 'WebsocketChangingType',
      changingChargeType: 'ChangingChargeType',
      requestId: 'RequestId',
      instanceId: 'InstanceId',
      websocketType: 'WebsocketType',
      openingTime: 'OpeningTime',
      changingAffectTime: 'ChangingAffectTime',
      operationLocks: 'OperationLocks',
      websocketChangingTime: 'WebsocketChangingTime',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      websocketChangingType: 'string',
      changingChargeType: 'string',
      requestId: 'string',
      instanceId: 'string',
      websocketType: 'string',
      openingTime: 'string',
      changingAffectTime: 'string',
      operationLocks: DescribeDcdnServiceResponseBodyOperationLocks,
      websocketChangingTime: 'string',
      internetChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnStagingIpRequest extends $tea.Model {
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

export class DescribeDcdnStagingIpResponseBody extends $tea.Model {
  requestId?: string;
  IPV4s?: DescribeDcdnStagingIpResponseBodyIPV4s;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      IPV4s: 'IPV4s',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      IPV4s: DescribeDcdnStagingIpResponseBodyIPV4s,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnStagingIpResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnStagingIpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnStagingIpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTagResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceType?: string;
  scope?: string;
  resourceId?: string[];
  tag?: DescribeDcdnTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceType: 'string',
      scope: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': DescribeDcdnTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  tagResources?: DescribeDcdnTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': DescribeDcdnTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTopDomainsByFlowRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTopDomainsByFlowResponseBody extends $tea.Model {
  topDomains?: DescribeDcdnTopDomainsByFlowResponseBodyTopDomains;
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
      topDomains: DescribeDcdnTopDomainsByFlowResponseBodyTopDomains,
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

export class DescribeDcdnTopDomainsByFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnTopDomainsByFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnTopDomainsByFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillHistoryRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillHistoryResponseBody extends $tea.Model {
  requestId?: string;
  billHistoryData?: DescribeDcdnUserBillHistoryResponseBodyBillHistoryData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      billHistoryData: 'BillHistoryData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      billHistoryData: DescribeDcdnUserBillHistoryResponseBodyBillHistoryData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillHistoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnUserBillHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnUserBillHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillTypeRequest extends $tea.Model {
  ownerId?: number;
  startTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      startTime: 'StartTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      startTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillTypeResponseBody extends $tea.Model {
  requestId?: string;
  billTypeData?: DescribeDcdnUserBillTypeResponseBodyBillTypeData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      billTypeData: 'BillTypeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      billTypeData: DescribeDcdnUserBillTypeResponseBodyBillTypeData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnUserBillTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnUserBillTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsRequest extends $tea.Model {
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
  tag?: DescribeDcdnUserDomainsRequestTag[];
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
      tag: 'Tag',
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
      tag: { 'type': 'array', 'itemType': DescribeDcdnUserDomainsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsResponseBody extends $tea.Model {
  domains?: DescribeDcdnUserDomainsResponseBodyDomains;
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
      domains: DescribeDcdnUserDomainsResponseBodyDomains,
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

export class DescribeDcdnUserDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnUserDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnUserDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsByFuncRequest extends $tea.Model {
  ownerId?: number;
  funcId?: number;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      funcId: 'FuncId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      funcId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsByFuncResponseBody extends $tea.Model {
  domains?: DescribeDcdnUserDomainsByFuncResponseBodyDomains;
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
      domains: DescribeDcdnUserDomainsByFuncResponseBodyDomains,
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

export class DescribeDcdnUserDomainsByFuncResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnUserDomainsByFuncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnUserDomainsByFuncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserQuotaRequest extends $tea.Model {
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

export class DescribeDcdnUserQuotaResponseBody extends $tea.Model {
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

export class DescribeDcdnUserQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnUserQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnUserQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserResourcePackageRequest extends $tea.Model {
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

export class DescribeDcdnUserResourcePackageResponseBody extends $tea.Model {
  requestId?: string;
  resourcePackageInfos?: DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePackageInfos: 'ResourcePackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePackageInfos: DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserResourcePackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnUserResourcePackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnUserResourcePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserSecDropRequest extends $tea.Model {
  ownerId?: number;
  data?: string;
  secFunc?: string;
  metric?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      data: 'Data',
      secFunc: 'SecFunc',
      metric: 'Metric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      data: 'string',
      secFunc: 'string',
      metric: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserSecDropResponseBody extends $tea.Model {
  msg?: string;
  requestId?: string;
  drops?: number;
  uuidStr?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      requestId: 'RequestId',
      drops: 'Drops',
      uuidStr: 'UuidStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      requestId: 'string',
      drops: 'number',
      uuidStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserSecDropResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnUserSecDropResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnUserSecDropResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserTagsRequest extends $tea.Model {
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

export class DescribeDcdnUserTagsResponseBody extends $tea.Model {
  requestId?: string;
  tags?: DescribeDcdnUserTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDcdnUserTagsResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnUserTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnUserTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnVerifyContentRequest extends $tea.Model {
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

export class DescribeDcdnVerifyContentResponseBody extends $tea.Model {
  requestId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnVerifyContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnVerifyContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnVerifyContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainRequest extends $tea.Model {
  ownerId?: number;
  regionId?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  outPutDomains?: DescribeDcdnWafDomainResponseBodyOutPutDomains[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      outPutDomains: 'OutPutDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      outPutDomains: { 'type': 'array', 'itemType': DescribeDcdnWafDomainResponseBodyOutPutDomains },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDcdnWafDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDcdnWafDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDcdnIpaStatusRequest extends $tea.Model {
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

export class DescribeUserDcdnIpaStatusResponseBody extends $tea.Model {
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

export class DescribeUserDcdnIpaStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserDcdnIpaStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserDcdnIpaStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserDcdnStatusRequest extends $tea.Model {
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

export class DescribeUserDcdnStatusResponseBody extends $tea.Model {
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

export class DescribeUserDcdnStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserDcdnStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserDcdnStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDcdnDomainOfflineLogDeliveryRequest extends $tea.Model {
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

export class DisableDcdnDomainOfflineLogDeliveryResponseBody extends $tea.Model {
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

export class DisableDcdnDomainOfflineLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableDcdnDomainOfflineLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableDcdnDomainOfflineLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDcdnOfflineLogDeliveryRequest extends $tea.Model {
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

export class DisableDcdnOfflineLogDeliveryResponseBody extends $tea.Model {
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

export class DisableDcdnOfflineLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DisableDcdnOfflineLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DisableDcdnOfflineLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableDcdnDomainOfflineLogDeliveryRequest extends $tea.Model {
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

export class EnableDcdnDomainOfflineLogDeliveryResponseBody extends $tea.Model {
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

export class EnableDcdnDomainOfflineLogDeliveryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EnableDcdnDomainOfflineLogDeliveryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableDcdnDomainOfflineLogDeliveryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDCdnDomainSchdmByPropertyRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  property?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      property: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDCdnDomainSchdmByPropertyResponseBody extends $tea.Model {
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

export class ModifyDCdnDomainSchdmByPropertyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDCdnDomainSchdmByPropertyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDCdnDomainSchdmByPropertyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDcdnServiceRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  billType?: string;
  websocketBillType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      billType: 'BillType',
      websocketBillType: 'WebsocketBillType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      billType: 'string',
      websocketBillType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDcdnServiceResponseBody extends $tea.Model {
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

export class OpenDcdnServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenDcdnServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenDcdnServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreloadDcdnObjectCachesRequest extends $tea.Model {
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

export class PreloadDcdnObjectCachesResponseBody extends $tea.Model {
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

export class PreloadDcdnObjectCachesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PreloadDcdnObjectCachesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PreloadDcdnObjectCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDcdnStagingConfigToProductionRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      functionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDcdnStagingConfigToProductionResponseBody extends $tea.Model {
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

export class PublishDcdnStagingConfigToProductionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishDcdnStagingConfigToProductionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishDcdnStagingConfigToProductionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshDcdnObjectCachesRequest extends $tea.Model {
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

export class RefreshDcdnObjectCachesResponseBody extends $tea.Model {
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

export class RefreshDcdnObjectCachesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshDcdnObjectCachesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshDcdnObjectCachesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackDcdnStagingConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  functionName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      functionName: 'FunctionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      functionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackDcdnStagingConfigResponseBody extends $tea.Model {
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

export class RollbackDcdnStagingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RollbackDcdnStagingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RollbackDcdnStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnConfigOfVersionRequest extends $tea.Model {
  ownerId?: number;
  ownerAccount?: string;
  securityToken?: string;
  versionId?: string;
  configId?: string;
  functionId?: number;
  functionName?: string;
  functionArgs?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      ownerAccount: 'OwnerAccount',
      securityToken: 'SecurityToken',
      versionId: 'VersionId',
      configId: 'ConfigId',
      functionId: 'FunctionId',
      functionName: 'FunctionName',
      functionArgs: 'FunctionArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      ownerAccount: 'string',
      securityToken: 'string',
      versionId: 'string',
      configId: 'string',
      functionId: 'number',
      functionName: 'string',
      functionArgs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnConfigOfVersionResponseBody extends $tea.Model {
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

export class SetDcdnConfigOfVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDcdnConfigOfVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDcdnConfigOfVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnDomainCertificateRequest extends $tea.Model {
  ownerId?: number;
  securityToken?: string;
  domainName?: string;
  certName?: string;
  certType?: string;
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
      certName: 'CertName',
      certType: 'CertType',
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
      certName: 'string',
      certType: 'string',
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

export class SetDcdnDomainCertificateResponseBody extends $tea.Model {
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

export class SetDcdnDomainCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDcdnDomainCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDcdnDomainCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnDomainCSRCertificateRequest extends $tea.Model {
  ownerId?: number;
  serverCertificate?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      serverCertificate: 'ServerCertificate',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      serverCertificate: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnDomainCSRCertificateResponseBody extends $tea.Model {
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

export class SetDcdnDomainCSRCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDcdnDomainCSRCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDcdnDomainCSRCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnDomainStagingConfigRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  functions?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      functions: 'Functions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      functions: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDcdnDomainStagingConfigResponseBody extends $tea.Model {
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

export class SetDcdnDomainStagingConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDcdnDomainStagingConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDcdnDomainStagingConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDcdnDomainRequest extends $tea.Model {
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

export class StartDcdnDomainResponseBody extends $tea.Model {
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

export class StartDcdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartDcdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartDcdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDcdnIpaDomainRequest extends $tea.Model {
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

export class StartDcdnIpaDomainResponseBody extends $tea.Model {
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

export class StartDcdnIpaDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartDcdnIpaDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartDcdnIpaDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDcdnDomainRequest extends $tea.Model {
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

export class StopDcdnDomainResponseBody extends $tea.Model {
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

export class StopDcdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopDcdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopDcdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDcdnIpaDomainRequest extends $tea.Model {
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

export class StopDcdnIpaDomainResponseBody extends $tea.Model {
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

export class StopDcdnIpaDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopDcdnIpaDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopDcdnIpaDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagDcdnResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagDcdnResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': TagDcdnResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagDcdnResourcesResponseBody extends $tea.Model {
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

export class TagDcdnResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagDcdnResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagDcdnResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagDcdnResourcesRequest extends $tea.Model {
  ownerId?: number;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceType: 'string',
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagDcdnResourcesResponseBody extends $tea.Model {
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

export class UntagDcdnResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagDcdnResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagDcdnResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnDomainRequest extends $tea.Model {
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

export class UpdateDcdnDomainResponseBody extends $tea.Model {
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

export class UpdateDcdnDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDcdnDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDcdnDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDcdnIpaDomainRequest extends $tea.Model {
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

export class UpdateDcdnIpaDomainResponseBody extends $tea.Model {
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

export class UpdateDcdnIpaDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDcdnIpaDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDcdnIpaDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDcdnDomainOwnerRequest extends $tea.Model {
  ownerId?: number;
  domainName?: string;
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      domainName: 'DomainName',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      domainName: 'string',
      verifyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDcdnDomainOwnerResponseBody extends $tea.Model {
  requestId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDcdnDomainOwnerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyDcdnDomainOwnerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyDcdnDomainOwnerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpBpsDataResponseBodyBgpDataInterval extends $tea.Model {
  out?: number;
  in?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      out: 'Out',
      in: 'In',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      out: 'number',
      in: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnBgpTrafficDataResponseBodyBgpDataInterval extends $tea.Model {
  out?: number;
  in?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      out: 'Out',
      in: 'In',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      out: 'number',
      in: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnCertificateListResponseBodyCertificateListModelCertListCert extends $tea.Model {
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

export class DescribeDcdnCertificateListResponseBodyCertificateListModelCertList extends $tea.Model {
  cert?: DescribeDcdnCertificateListResponseBodyCertificateListModelCertListCert[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: { 'type': 'array', 'itemType': DescribeDcdnCertificateListResponseBodyCertificateListModelCertListCert },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnCertificateListResponseBodyCertificateListModel extends $tea.Model {
  certList?: DescribeDcdnCertificateListResponseBodyCertificateListModelCertList;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: DescribeDcdnCertificateListResponseBodyCertificateListModelCertList,
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgsFunctionArg extends $tea.Model {
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

export class DescribeDcdnConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgs extends $tea.Model {
  functionArg?: DescribeDcdnConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgsFunctionArg[];
  static names(): { [key: string]: string } {
    return {
      functionArg: 'FunctionArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArg: { 'type': 'array', 'itemType': DescribeDcdnConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgsFunctionArg },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnConfigOfVersionResponseBodyVersionConfigsVersionConfig extends $tea.Model {
  status?: string;
  configId?: string;
  functionName?: string;
  functionArgs?: DescribeDcdnConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgs;
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
      functionArgs: DescribeDcdnConfigOfVersionResponseBodyVersionConfigsVersionConfigFunctionArgs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnConfigOfVersionResponseBodyVersionConfigs extends $tea.Model {
  versionConfig?: DescribeDcdnConfigOfVersionResponseBodyVersionConfigsVersionConfig[];
  static names(): { [key: string]: string } {
    return {
      versionConfig: 'VersionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionConfig: { 'type': 'array', 'itemType': DescribeDcdnConfigOfVersionResponseBodyVersionConfigsVersionConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainBpsDataResponseBodyBpsDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  staticHttpsBps?: number;
  bps?: number;
  dynamicHttpsBps?: number;
  dynamicHttpBps?: number;
  staticHttpBps?: number;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      staticHttpsBps: 'StaticHttpsBps',
      bps: 'Bps',
      dynamicHttpsBps: 'DynamicHttpsBps',
      dynamicHttpBps: 'DynamicHttpBps',
      staticHttpBps: 'StaticHttpBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      staticHttpsBps: 'number',
      bps: 'number',
      dynamicHttpsBps: 'number',
      dynamicHttpBps: 'number',
      staticHttpBps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainBpsDataResponseBodyBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainBpsDataResponseBodyBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainByCertificateResponseBodyCertInfosCertInfo extends $tea.Model {
  certStartTime?: string;
  certExpireTime?: string;
  certCaIsLegacy?: string;
  certSubjectCommonName?: string;
  certType?: string;
  domainNames?: string;
  certExpired?: string;
  issuer?: string;
  domainList?: string;
  static names(): { [key: string]: string } {
    return {
      certStartTime: 'CertStartTime',
      certExpireTime: 'CertExpireTime',
      certCaIsLegacy: 'CertCaIsLegacy',
      certSubjectCommonName: 'CertSubjectCommonName',
      certType: 'CertType',
      domainNames: 'DomainNames',
      certExpired: 'CertExpired',
      issuer: 'Issuer',
      domainList: 'DomainList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certStartTime: 'string',
      certExpireTime: 'string',
      certCaIsLegacy: 'string',
      certSubjectCommonName: 'string',
      certType: 'string',
      domainNames: 'string',
      certExpired: 'string',
      issuer: 'string',
      domainList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainByCertificateResponseBodyCertInfos extends $tea.Model {
  certInfo?: DescribeDcdnDomainByCertificateResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeDcdnDomainByCertificateResponseBodyCertInfosCertInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCertificateInfoResponseBodyCertInfosCertInfo extends $tea.Model {
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

export class DescribeDcdnDomainCertificateInfoResponseBodyCertInfos extends $tea.Model {
  certInfo?: DescribeDcdnDomainCertificateInfoResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeDcdnDomainCertificateInfoResponseBodyCertInfosCertInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainCnameResponseBodyCnameDatasData extends $tea.Model {
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

export class DescribeDcdnDomainCnameResponseBodyCnameDatas extends $tea.Model {
  data?: DescribeDcdnDomainCnameResponseBodyCnameDatasData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDcdnDomainCnameResponseBodyCnameDatasData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg extends $tea.Model {
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

export class DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs extends $tea.Model {
  functionArg?: DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg[];
  static names(): { [key: string]: string } {
    return {
      functionArg: 'FunctionArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArg: { 'type': 'array', 'itemType': DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfig extends $tea.Model {
  status?: string;
  configId?: string;
  functionName?: string;
  functionArgs?: DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs;
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
      functionArgs: DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainConfigsResponseBodyDomainConfigs extends $tea.Model {
  domainConfig?: DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfig[];
  static names(): { [key: string]: string } {
    return {
      domainConfig: 'DomainConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfig: { 'type': 'array', 'itemType': DescribeDcdnDomainConfigsResponseBodyDomainConfigsDomainConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainDetailResponseBodyDomainDetailSourcesSource extends $tea.Model {
  type?: string;
  weight?: string;
  enabled?: string;
  priority?: string;
  port?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      enabled: 'Enabled',
      priority: 'Priority',
      port: 'Port',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'string',
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

export class DescribeDcdnDomainDetailResponseBodyDomainDetailSources extends $tea.Model {
  source?: DescribeDcdnDomainDetailResponseBodyDomainDetailSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeDcdnDomainDetailResponseBodyDomainDetailSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainDetailResponseBodyDomainDetail extends $tea.Model {
  SSLPub?: string;
  sources?: DescribeDcdnDomainDetailResponseBodyDomainDetailSources;
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
      sources: DescribeDcdnDomainDetailResponseBodyDomainDetailSources,
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

export class DescribeDcdnDomainHitRateDataResponseBodyHitRatePerIntervalDataModule extends $tea.Model {
  byteHitRate?: number;
  reqHitRate?: number;
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
      byteHitRate: 'number',
      reqHitRate: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHitRateDataResponseBodyHitRatePerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainHitRateDataResponseBodyHitRatePerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainHitRateDataResponseBodyHitRatePerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerIntervalHttpCodeDataModule extends $tea.Model {
  code?: number;
  proportion?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      proportion: 'Proportion',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      proportion: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerInterval extends $tea.Model {
  httpCodeDataModule?: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerIntervalHttpCodeDataModule[];
  static names(): { [key: string]: string } {
    return {
      httpCodeDataModule: 'HttpCodeDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCodeDataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerIntervalHttpCodeDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModule extends $tea.Model {
  timeStamp?: string;
  httpCodeDataPerInterval?: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerInterval;
  static names(): { [key: string]: string } {
    return {
      timeStamp: 'TimeStamp',
      httpCodeDataPerInterval: 'HttpCodeDataPerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeStamp: 'string',
      httpCodeDataPerInterval: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModuleHttpCodeDataPerInterval,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainHttpCodeDataResponseBodyDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainHttpCodeDataResponseBodyDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaBpsDataResponseBodyBpsDataPerIntervalDataModule extends $tea.Model {
  ipaBps?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      ipaBps: 'IpaBps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipaBps: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaBpsDataResponseBodyBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainIpaBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainIpaBpsDataResponseBodyBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $tea.Model {
  ipaTraffic?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      ipaTraffic: 'IpaTraffic',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipaTraffic: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIpaTrafficDataResponseBodyTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainIpaTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainIpaTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIspDataResponseBodyValueIspProportionData extends $tea.Model {
  qps?: string;
  totalQuery?: string;
  totalBytes?: string;
  avgResponseRate?: string;
  avgResponseTime?: string;
  proportion?: string;
  avgObjectSize?: string;
  ispEname?: string;
  bps?: string;
  isp?: string;
  bytesProportion?: string;
  static names(): { [key: string]: string } {
    return {
      qps: 'Qps',
      totalQuery: 'TotalQuery',
      totalBytes: 'TotalBytes',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      proportion: 'Proportion',
      avgObjectSize: 'AvgObjectSize',
      ispEname: 'IspEname',
      bps: 'Bps',
      isp: 'Isp',
      bytesProportion: 'BytesProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qps: 'string',
      totalQuery: 'string',
      totalBytes: 'string',
      avgResponseRate: 'string',
      avgResponseTime: 'string',
      proportion: 'string',
      avgObjectSize: 'string',
      ispEname: 'string',
      bps: 'string',
      isp: 'string',
      bytesProportion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIspDataResponseBodyValue extends $tea.Model {
  ispProportionData?: DescribeDcdnDomainIspDataResponseBodyValueIspProportionData[];
  static names(): { [key: string]: string } {
    return {
      ispProportionData: 'IspProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispProportionData: { 'type': 'array', 'itemType': DescribeDcdnDomainIspDataResponseBodyValueIspProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos extends $tea.Model {
  pageIndex?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail extends $tea.Model {
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

export class DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos extends $tea.Model {
  logInfoDetail?: DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail[];
  static names(): { [key: string]: string } {
    return {
      logInfoDetail: 'LogInfoDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfoDetail: { 'type': 'array', 'itemType': DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfosLogInfoDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetail extends $tea.Model {
  pageInfos?: DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos;
  logCount?: number;
  logInfos?: DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos;
  static names(): { [key: string]: string } {
    return {
      pageInfos: 'PageInfos',
      logCount: 'LogCount',
      logInfos: 'LogInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfos: DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailPageInfos,
      logCount: 'number',
      logInfos: DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetailLogInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainLogResponseBodyDomainLogDetails extends $tea.Model {
  domainLogDetail?: DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetail[];
  static names(): { [key: string]: string } {
    return {
      domainLogDetail: 'DomainLogDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainLogDetail: { 'type': 'array', 'itemType': DescribeDcdnDomainLogResponseBodyDomainLogDetailsDomainLogDetail },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule extends $tea.Model {
  type?: string;
  domain?: string;
  timeStamp?: string;
  request?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      domain: 'Domain',
      timeStamp: 'TimeStamp',
      request: 'Request',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      domain: 'string',
      timeStamp: 'string',
      request: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerInterval extends $tea.Model {
  requestDataModule?: DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule[];
  static names(): { [key: string]: string } {
    return {
      requestDataModule: 'RequestDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestDataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainMultiUsageDataResponseBodyRequestPerIntervalRequestDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule extends $tea.Model {
  type?: string;
  domain?: string;
  timeStamp?: string;
  area?: string;
  bps?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      domain: 'Domain',
      timeStamp: 'TimeStamp',
      area: 'Area',
      bps: 'Bps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      domain: 'string',
      timeStamp: 'string',
      area: 'string',
      bps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerInterval extends $tea.Model {
  trafficDataModule?: DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule[];
  static names(): { [key: string]: string } {
    return {
      trafficDataModule: 'TrafficDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficDataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainMultiUsageDataResponseBodyTrafficPerIntervalTrafficDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerIntervalDataModule extends $tea.Model {
  dynamicHttpOriginBps?: number;
  staticHttpOriginBps?: number;
  timeStamp?: string;
  staticHttpsOriginBps?: number;
  originBps?: number;
  dynamicHttpsOriginBps?: number;
  static names(): { [key: string]: string } {
    return {
      dynamicHttpOriginBps: 'DynamicHttpOriginBps',
      staticHttpOriginBps: 'StaticHttpOriginBps',
      timeStamp: 'TimeStamp',
      staticHttpsOriginBps: 'StaticHttpsOriginBps',
      originBps: 'OriginBps',
      dynamicHttpsOriginBps: 'DynamicHttpsOriginBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicHttpOriginBps: 'number',
      staticHttpOriginBps: 'number',
      timeStamp: 'string',
      staticHttpsOriginBps: 'number',
      originBps: 'number',
      dynamicHttpsOriginBps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainOriginBpsDataResponseBodyOriginBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerIntervalDataModule extends $tea.Model {
  dynamicHttpOriginTraffic?: number;
  staticHttpsOriginTraffic?: number;
  originTraffic?: number;
  staticHttpOriginTraffic?: number;
  dynamicHttpsOriginTraffic?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicHttpOriginTraffic: 'DynamicHttpOriginTraffic',
      staticHttpsOriginTraffic: 'StaticHttpsOriginTraffic',
      originTraffic: 'OriginTraffic',
      staticHttpOriginTraffic: 'StaticHttpOriginTraffic',
      dynamicHttpsOriginTraffic: 'DynamicHttpsOriginTraffic',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicHttpOriginTraffic: 'number',
      staticHttpsOriginTraffic: 'number',
      originTraffic: 'number',
      staticHttpOriginTraffic: 'number',
      dynamicHttpsOriginTraffic: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainOriginTrafficDataResponseBodyOriginTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainPvDataResponseBodyPvDataIntervalUsageData extends $tea.Model {
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

export class DescribeDcdnDomainPvDataResponseBodyPvDataInterval extends $tea.Model {
  usageData?: DescribeDcdnDomainPvDataResponseBodyPvDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDcdnDomainPvDataResponseBodyPvDataIntervalUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainQpsDataResponseBodyQpsDataPerIntervalDataModule extends $tea.Model {
  dynamicHttpsAcc?: number;
  dynamicHttpAcc?: number;
  qps?: number;
  staticHttpsAcc?: number;
  staticHttpQps?: number;
  staticHttpAcc?: number;
  dynamicHttpsQps?: number;
  acc?: number;
  staticHttpsQps?: number;
  dynamicHttpQps?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicHttpsAcc: 'DynamicHttpsAcc',
      dynamicHttpAcc: 'DynamicHttpAcc',
      qps: 'Qps',
      staticHttpsAcc: 'StaticHttpsAcc',
      staticHttpQps: 'StaticHttpQps',
      staticHttpAcc: 'StaticHttpAcc',
      dynamicHttpsQps: 'DynamicHttpsQps',
      acc: 'Acc',
      staticHttpsQps: 'StaticHttpsQps',
      dynamicHttpQps: 'DynamicHttpQps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicHttpsAcc: 'number',
      dynamicHttpAcc: 'number',
      qps: 'number',
      staticHttpsAcc: 'number',
      staticHttpQps: 'number',
      staticHttpAcc: 'number',
      dynamicHttpsQps: 'number',
      acc: 'number',
      staticHttpsQps: 'number',
      dynamicHttpQps: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainQpsDataResponseBodyQpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainQpsDataResponseBodyQpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainQpsDataResponseBodyQpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeBpsDataResponseBodyDataBpsModel extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeBpsDataResponseBodyData extends $tea.Model {
  bpsModel?: DescribeDcdnDomainRealTimeBpsDataResponseBodyDataBpsModel[];
  static names(): { [key: string]: string } {
    return {
      bpsModel: 'BpsModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsModel: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeBpsDataResponseBodyDataBpsModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyData extends $tea.Model {
  byteHitRateDataModel?: DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel[];
  static names(): { [key: string]: string } {
    return {
      byteHitRateDataModel: 'ByteHitRateDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteHitRateDataModel: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue extends $tea.Model {
  realTimeCodeProportionData?: DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      realTimeCodeProportionData: 'RealTimeCodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeCodeProportionData: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValueRealTimeCodeProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData extends $tea.Model {
  value?: DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageDataValue,
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeData extends $tea.Model {
  usageData?: DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeHttpCodeDataResponseBodyRealTimeHttpCodeDataUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeQpsDataResponseBodyDataQpsModel extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeQpsDataResponseBodyData extends $tea.Model {
  qpsModel?: DescribeDcdnDomainRealTimeQpsDataResponseBodyDataQpsModel[];
  static names(): { [key: string]: string } {
    return {
      qpsModel: 'QpsModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qpsModel: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeQpsDataResponseBodyDataQpsModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeReqHitRateDataResponseBodyData extends $tea.Model {
  reqHitRateDataModel?: DescribeDcdnDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel[];
  static names(): { [key: string]: string } {
    return {
      reqHitRateDataModel: 'ReqHitRateDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqHitRateDataModel: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeSrcBpsDataResponseBodyRealTimeSrcBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue extends $tea.Model {
  realTimeSrcCodeProportionData?: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData[];
  static names(): { [key: string]: string } {
    return {
      realTimeSrcCodeProportionData: 'RealTimeSrcCodeProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeSrcCodeProportionData: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValueRealTimeSrcCodeProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData extends $tea.Model {
  value?: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageDataValue,
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeData extends $tea.Model {
  usageData?: DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeSrcHttpCodeDataResponseBodyRealTimeSrcHttpCodeDataUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeSrcTrafficDataResponseBodyRealTimeSrcTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule extends $tea.Model {
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

export class DescribeDcdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeTrafficDataResponseBodyRealTimeTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRegionDataResponseBodyValueRegionProportionData extends $tea.Model {
  qps?: string;
  totalQuery?: string;
  totalBytes?: string;
  regionEname?: string;
  region?: string;
  avgResponseRate?: string;
  avgResponseTime?: string;
  proportion?: string;
  avgObjectSize?: string;
  bps?: string;
  bytesProportion?: string;
  static names(): { [key: string]: string } {
    return {
      qps: 'Qps',
      totalQuery: 'TotalQuery',
      totalBytes: 'TotalBytes',
      regionEname: 'RegionEname',
      region: 'Region',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      proportion: 'Proportion',
      avgObjectSize: 'AvgObjectSize',
      bps: 'Bps',
      bytesProportion: 'BytesProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qps: 'string',
      totalQuery: 'string',
      totalBytes: 'string',
      regionEname: 'string',
      region: 'string',
      avgResponseRate: 'string',
      avgResponseTime: 'string',
      proportion: 'string',
      avgObjectSize: 'string',
      bps: 'string',
      bytesProportion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainRegionDataResponseBodyValue extends $tea.Model {
  regionProportionData?: DescribeDcdnDomainRegionDataResponseBodyValueRegionProportionData[];
  static names(): { [key: string]: string } {
    return {
      regionProportionData: 'RegionProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionProportionData: { 'type': 'array', 'itemType': DescribeDcdnDomainRegionDataResponseBodyValueRegionProportionData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs extends $tea.Model {
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

export class DescribeDcdnDomainStagingConfigResponseBodyDomainConfigs extends $tea.Model {
  status?: string;
  configId?: string;
  functionName?: string;
  functionArgs?: DescribeDcdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs[];
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
      functionArgs: { 'type': 'array', 'itemType': DescribeDcdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopReferVisitResponseBodyTopReferListReferList extends $tea.Model {
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

export class DescribeDcdnDomainTopReferVisitResponseBodyTopReferList extends $tea.Model {
  referList?: DescribeDcdnDomainTopReferVisitResponseBodyTopReferListReferList[];
  static names(): { [key: string]: string } {
    return {
      referList: 'ReferList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopReferVisitResponseBodyTopReferListReferList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl500ListUrlList extends $tea.Model {
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

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl500List extends $tea.Model {
  urlList?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl500ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopUrlVisitResponseBodyUrl500ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl200ListUrlList extends $tea.Model {
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

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl200List extends $tea.Model {
  urlList?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl200ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopUrlVisitResponseBodyUrl200ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl400ListUrlList extends $tea.Model {
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

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl400List extends $tea.Model {
  urlList?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl400ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopUrlVisitResponseBodyUrl400ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl300ListUrlList extends $tea.Model {
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

export class DescribeDcdnDomainTopUrlVisitResponseBodyUrl300List extends $tea.Model {
  urlList?: DescribeDcdnDomainTopUrlVisitResponseBodyUrl300ListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopUrlVisitResponseBodyUrl300ListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlListUrlList extends $tea.Model {
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

export class DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlList extends $tea.Model {
  urlList?: DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlListUrlList[];
  static names(): { [key: string]: string } {
    return {
      urlList: 'UrlList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlList: { 'type': 'array', 'itemType': DescribeDcdnDomainTopUrlVisitResponseBodyAllUrlListUrlList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $tea.Model {
  staticHttpTraffic?: number;
  dynamicHttpsTraffic?: number;
  traffic?: number;
  dynamicHttpTraffic?: number;
  timeStamp?: string;
  staticHttpsTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      staticHttpTraffic: 'StaticHttpTraffic',
      dynamicHttpsTraffic: 'DynamicHttpsTraffic',
      traffic: 'Traffic',
      dynamicHttpTraffic: 'DynamicHttpTraffic',
      timeStamp: 'TimeStamp',
      staticHttpsTraffic: 'StaticHttpsTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      staticHttpTraffic: 'number',
      dynamicHttpsTraffic: 'number',
      traffic: 'number',
      dynamicHttpTraffic: 'number',
      timeStamp: 'string',
      staticHttpsTraffic: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainTrafficDataResponseBodyTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainUvDataResponseBodyUvDataIntervalUsageData extends $tea.Model {
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

export class DescribeDcdnDomainUvDataResponseBodyUvDataInterval extends $tea.Model {
  usageData?: DescribeDcdnDomainUvDataResponseBodyUvDataIntervalUsageData[];
  static names(): { [key: string]: string } {
    return {
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageData: { 'type': 'array', 'itemType': DescribeDcdnDomainUvDataResponseBodyUvDataIntervalUsageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketBpsDataResponseBodyBpsDataPerIntervalDataModule extends $tea.Model {
  websocketBps?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      websocketBps: 'WebsocketBps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      websocketBps: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketBpsDataResponseBodyBpsDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainWebsocketBpsDataResponseBodyBpsDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainWebsocketBpsDataResponseBodyBpsDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyDataPerIntervalDataModuleWebsocketHttpCodeDataPerIntervalHttpCodeDataModule extends $tea.Model {
  code?: number;
  proportion?: number;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      proportion: 'Proportion',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      proportion: 'number',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyDataPerIntervalDataModuleWebsocketHttpCodeDataPerInterval extends $tea.Model {
  httpCodeDataModule?: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyDataPerIntervalDataModuleWebsocketHttpCodeDataPerIntervalHttpCodeDataModule[];
  static names(): { [key: string]: string } {
    return {
      httpCodeDataModule: 'HttpCodeDataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpCodeDataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyDataPerIntervalDataModuleWebsocketHttpCodeDataPerIntervalHttpCodeDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyDataPerIntervalDataModule extends $tea.Model {
  websocketHttpCodeDataPerInterval?: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyDataPerIntervalDataModuleWebsocketHttpCodeDataPerInterval;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      websocketHttpCodeDataPerInterval: 'WebsocketHttpCodeDataPerInterval',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      websocketHttpCodeDataPerInterval: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyDataPerIntervalDataModuleWebsocketHttpCodeDataPerInterval,
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainWebsocketHttpCodeDataResponseBodyDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketTrafficDataResponseBodyTrafficDataPerIntervalDataModule extends $tea.Model {
  websocketTraffic?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      websocketTraffic: 'WebsocketTraffic',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      websocketTraffic: 'number',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainWebsocketTrafficDataResponseBodyTrafficDataPerInterval extends $tea.Model {
  dataModule?: DescribeDcdnDomainWebsocketTrafficDataResponseBodyTrafficDataPerIntervalDataModule[];
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeDcdnDomainWebsocketTrafficDataResponseBodyTrafficDataPerIntervalDataModule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnHttpsDomainListResponseBodyCertInfosCertInfo extends $tea.Model {
  certStartTime?: string;
  certExpireTime?: string;
  certUpdateTime?: string;
  certType?: string;
  certName?: string;
  certStatus?: string;
  domainName?: string;
  certCommonName?: string;
  static names(): { [key: string]: string } {
    return {
      certStartTime: 'CertStartTime',
      certExpireTime: 'CertExpireTime',
      certUpdateTime: 'CertUpdateTime',
      certType: 'CertType',
      certName: 'CertName',
      certStatus: 'CertStatus',
      domainName: 'DomainName',
      certCommonName: 'CertCommonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certStartTime: 'string',
      certExpireTime: 'string',
      certUpdateTime: 'string',
      certType: 'string',
      certName: 'string',
      certStatus: 'string',
      domainName: 'string',
      certCommonName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnHttpsDomainListResponseBodyCertInfos extends $tea.Model {
  certInfo?: DescribeDcdnHttpsDomainListResponseBodyCertInfosCertInfo[];
  static names(): { [key: string]: string } {
    return {
      certInfo: 'CertInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certInfo: { 'type': 'array', 'itemType': DescribeDcdnHttpsDomainListResponseBodyCertInfosCertInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg extends $tea.Model {
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

export class DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs extends $tea.Model {
  functionArg?: DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg[];
  static names(): { [key: string]: string } {
    return {
      functionArg: 'FunctionArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArg: { 'type': 'array', 'itemType': DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfig extends $tea.Model {
  status?: string;
  configId?: string;
  functionName?: string;
  functionArgs?: DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs;
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
      functionArgs: DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigs extends $tea.Model {
  domainConfig?: DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfig[];
  static names(): { [key: string]: string } {
    return {
      domainConfig: 'DomainConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfig: { 'type': 'array', 'itemType': DescribeDcdnIpaDomainConfigsResponseBodyDomainConfigsDomainConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSourcesSource extends $tea.Model {
  type?: string;
  weight?: string;
  enabled?: string;
  priority?: string;
  port?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      enabled: 'Enabled',
      priority: 'Priority',
      port: 'Port',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'string',
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

export class DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSources extends $tea.Model {
  source?: DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaDomainDetailResponseBodyDomainDetail extends $tea.Model {
  SSLPub?: string;
  sources?: DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSources;
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
      sources: DescribeDcdnIpaDomainDetailResponseBodyDomainDetailSources,
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

export class DescribeDcdnIpaServiceResponseBodyOperationLocksLockReason extends $tea.Model {
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

export class DescribeDcdnIpaServiceResponseBodyOperationLocks extends $tea.Model {
  lockReason?: DescribeDcdnIpaServiceResponseBodyOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeDcdnIpaServiceResponseBodyOperationLocksLockReason },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaUserDomainsResponseBodyDomainsPageDataSourcesSource extends $tea.Model {
  type?: string;
  weight?: string;
  priority?: string;
  port?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      priority: 'Priority',
      port: 'Port',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'string',
      priority: 'string',
      port: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaUserDomainsResponseBodyDomainsPageDataSources extends $tea.Model {
  source?: DescribeDcdnIpaUserDomainsResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeDcdnIpaUserDomainsResponseBodyDomainsPageDataSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaUserDomainsResponseBodyDomainsPageData extends $tea.Model {
  gmtCreated?: string;
  description?: string;
  SSLProtocol?: string;
  resourceGroupId?: string;
  sandbox?: string;
  domainStatus?: string;
  cname?: string;
  sources?: DescribeDcdnIpaUserDomainsResponseBodyDomainsPageDataSources;
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
      sources: DescribeDcdnIpaUserDomainsResponseBodyDomainsPageDataSources,
      gmtModified: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnIpaUserDomainsResponseBodyDomains extends $tea.Model {
  pageData?: DescribeDcdnIpaUserDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeDcdnIpaUserDomainsResponseBodyDomainsPageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnOfflineLogDeliveryResponseBodyDomains extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnOfflineLogDeliveryResponseBodyRegions extends $tea.Model {
  ossId?: number;
  ossPathPrefix?: string;
  regionId?: string;
  dlaTableName?: string;
  areaName?: string;
  dlaDbName?: string;
  dlaVcName?: string;
  regionName?: string;
  areaId?: string;
  isOverseas?: string;
  ossEndpoint?: string;
  ossBucketName?: string;
  static names(): { [key: string]: string } {
    return {
      ossId: 'OssId',
      ossPathPrefix: 'OssPathPrefix',
      regionId: 'RegionId',
      dlaTableName: 'DlaTableName',
      areaName: 'AreaName',
      dlaDbName: 'DlaDbName',
      dlaVcName: 'DlaVcName',
      regionName: 'RegionName',
      areaId: 'AreaId',
      isOverseas: 'IsOverseas',
      ossEndpoint: 'OssEndpoint',
      ossBucketName: 'OssBucketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossId: 'number',
      ossPathPrefix: 'string',
      regionId: 'string',
      dlaTableName: 'string',
      areaName: 'string',
      dlaDbName: 'string',
      dlaVcName: 'string',
      regionName: 'string',
      areaId: 'string',
      isOverseas: 'string',
      ossEndpoint: 'string',
      ossBucketName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnOfflineLogDeliveryFieldResponseBodyFields extends $tea.Model {
  description?: string;
  fieldId?: string;
  fieldName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fieldId: 'FieldId',
      fieldName: 'FieldName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fieldId: 'string',
      fieldName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnOfflineLogDeliveryRegionsResponseBodyAreasRegionInfos extends $tea.Model {
  regionName?: string;
  isOverseas?: string;
  ossEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionName: 'RegionName',
      isOverseas: 'IsOverseas',
      ossEndpoint: 'OssEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionName: 'string',
      isOverseas: 'string',
      ossEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnOfflineLogDeliveryRegionsResponseBodyAreas extends $tea.Model {
  areaName?: string;
  areaId?: string;
  regionInfos?: DescribeDcdnOfflineLogDeliveryRegionsResponseBodyAreasRegionInfos[];
  static names(): { [key: string]: string } {
    return {
      areaName: 'AreaName',
      areaId: 'AreaId',
      regionInfos: 'RegionInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaName: 'string',
      areaId: 'string',
      regionInfos: { 'type': 'array', 'itemType': DescribeDcdnOfflineLogDeliveryRegionsResponseBodyAreasRegionInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRefreshTasksResponseBodyTasksTask extends $tea.Model {
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

export class DescribeDcdnRefreshTasksResponseBodyTasks extends $tea.Model {
  task?: DescribeDcdnRefreshTasksResponseBodyTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeDcdnRefreshTasksResponseBodyTasksTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRegionAndIspResponseBodyRegionsRegion extends $tea.Model {
  nameEn?: string;
  nameZh?: string;
  static names(): { [key: string]: string } {
    return {
      nameEn: 'NameEn',
      nameZh: 'NameZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameEn: 'string',
      nameZh: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRegionAndIspResponseBodyRegions extends $tea.Model {
  region?: DescribeDcdnRegionAndIspResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeDcdnRegionAndIspResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRegionAndIspResponseBodyIspsIsp extends $tea.Model {
  nameEn?: string;
  nameZh?: string;
  static names(): { [key: string]: string } {
    return {
      nameEn: 'NameEn',
      nameZh: 'NameZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameEn: 'string',
      nameZh: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnRegionAndIspResponseBodyIsps extends $tea.Model {
  isp?: DescribeDcdnRegionAndIspResponseBodyIspsIsp[];
  static names(): { [key: string]: string } {
    return {
      isp: 'Isp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isp: { 'type': 'array', 'itemType': DescribeDcdnRegionAndIspResponseBodyIspsIsp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnServiceResponseBodyOperationLocksLockReason extends $tea.Model {
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

export class DescribeDcdnServiceResponseBodyOperationLocks extends $tea.Model {
  lockReason?: DescribeDcdnServiceResponseBodyOperationLocksLockReason[];
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: { 'type': 'array', 'itemType': DescribeDcdnServiceResponseBodyOperationLocksLockReason },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnStagingIpResponseBodyIPV4s extends $tea.Model {
  IPV4?: string[];
  static names(): { [key: string]: string } {
    return {
      IPV4: 'IPV4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPV4: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTagResourcesResponseBodyTagResourcesTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTagResourcesResponseBodyTagResources extends $tea.Model {
  tag?: DescribeDcdnTagResourcesResponseBodyTagResourcesTag[];
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDcdnTagResourcesResponseBodyTagResourcesTag },
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnTopDomainsByFlowResponseBodyTopDomainsTopDomain extends $tea.Model {
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

export class DescribeDcdnTopDomainsByFlowResponseBodyTopDomains extends $tea.Model {
  topDomain?: DescribeDcdnTopDomainsByFlowResponseBodyTopDomainsTopDomain[];
  static names(): { [key: string]: string } {
    return {
      topDomain: 'TopDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topDomain: { 'type': 'array', 'itemType': DescribeDcdnTopDomainsByFlowResponseBodyTopDomainsTopDomain },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem extends $tea.Model {
  bandwidth?: number;
  chargeType?: string;
  flow?: number;
  count?: number;
  cdnRegion?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      chargeType: 'ChargeType',
      flow: 'Flow',
      count: 'Count',
      cdnRegion: 'CdnRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      chargeType: 'string',
      flow: 'number',
      count: 'number',
      cdnRegion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData extends $tea.Model {
  billingDataItem?: DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem[];
  static names(): { [key: string]: string } {
    return {
      billingDataItem: 'BillingDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingDataItem: { 'type': 'array', 'itemType': DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingDataBillingDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem extends $tea.Model {
  billingData?: DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData;
  billType?: string;
  dimension?: string;
  billTime?: string;
  static names(): { [key: string]: string } {
    return {
      billingData: 'BillingData',
      billType: 'BillType',
      dimension: 'Dimension',
      billTime: 'BillTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingData: DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItemBillingData,
      billType: 'string',
      dimension: 'string',
      billTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillHistoryResponseBodyBillHistoryData extends $tea.Model {
  billHistoryDataItem?: DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem[];
  static names(): { [key: string]: string } {
    return {
      billHistoryDataItem: 'BillHistoryDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billHistoryDataItem: { 'type': 'array', 'itemType': DescribeDcdnUserBillHistoryResponseBodyBillHistoryDataBillHistoryDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem extends $tea.Model {
  endTime?: string;
  startTime?: string;
  billingCycle?: string;
  product?: string;
  billType?: string;
  dimension?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      billingCycle: 'BillingCycle',
      product: 'Product',
      billType: 'BillType',
      dimension: 'Dimension',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      billingCycle: 'string',
      product: 'string',
      billType: 'string',
      dimension: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserBillTypeResponseBodyBillTypeData extends $tea.Model {
  billTypeDataItem?: DescribeDcdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem[];
  static names(): { [key: string]: string } {
    return {
      billTypeDataItem: 'BillTypeDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billTypeDataItem: { 'type': 'array', 'itemType': DescribeDcdnUserBillTypeResponseBodyBillTypeDataBillTypeDataItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsResponseBodyDomainsPageDataSourcesSource extends $tea.Model {
  type?: string;
  weight?: string;
  priority?: string;
  port?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      priority: 'Priority',
      port: 'Port',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'string',
      priority: 'string',
      port: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsResponseBodyDomainsPageDataSources extends $tea.Model {
  source?: DescribeDcdnUserDomainsResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeDcdnUserDomainsResponseBodyDomainsPageDataSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsResponseBodyDomainsPageData extends $tea.Model {
  gmtCreated?: string;
  description?: string;
  SSLProtocol?: string;
  resourceGroupId?: string;
  sandbox?: string;
  domainStatus?: string;
  cname?: string;
  sources?: DescribeDcdnUserDomainsResponseBodyDomainsPageDataSources;
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
      sources: DescribeDcdnUserDomainsResponseBodyDomainsPageDataSources,
      gmtModified: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsResponseBodyDomains extends $tea.Model {
  pageData?: DescribeDcdnUserDomainsResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeDcdnUserDomainsResponseBodyDomainsPageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource extends $tea.Model {
  type?: string;
  weight?: string;
  priority?: string;
  port?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      weight: 'Weight',
      priority: 'Priority',
      port: 'Port',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      weight: 'string',
      priority: 'string',
      port: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageDataSources extends $tea.Model {
  source?: DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource[];
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: { 'type': 'array', 'itemType': DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageDataSourcesSource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageData extends $tea.Model {
  gmtCreated?: string;
  sslProtocol?: string;
  description?: string;
  resourceGroupId?: string;
  sandbox?: string;
  domainStatus?: string;
  cname?: string;
  sources?: DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageDataSources;
  gmtModified?: string;
  cdnType?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreated: 'GmtCreated',
      sslProtocol: 'SslProtocol',
      description: 'Description',
      resourceGroupId: 'ResourceGroupId',
      sandbox: 'Sandbox',
      domainStatus: 'DomainStatus',
      cname: 'Cname',
      sources: 'Sources',
      gmtModified: 'GmtModified',
      cdnType: 'CdnType',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreated: 'string',
      sslProtocol: 'string',
      description: 'string',
      resourceGroupId: 'string',
      sandbox: 'string',
      domainStatus: 'string',
      cname: 'string',
      sources: DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageDataSources,
      gmtModified: 'string',
      cdnType: 'string',
      domainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserDomainsByFuncResponseBodyDomains extends $tea.Model {
  pageData?: DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageData[];
  static names(): { [key: string]: string } {
    return {
      pageData: 'PageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageData: { 'type': 'array', 'itemType': DescribeDcdnUserDomainsByFuncResponseBodyDomainsPageData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo extends $tea.Model {
  endTime?: string;
  status?: string;
  displayName?: string;
  startTime?: string;
  commodityCode?: string;
  currCapacity?: string;
  initCapacity?: string;
  instanceId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      status: 'Status',
      displayName: 'DisplayName',
      startTime: 'StartTime',
      commodityCode: 'CommodityCode',
      currCapacity: 'CurrCapacity',
      initCapacity: 'InitCapacity',
      instanceId: 'InstanceId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      status: 'string',
      displayName: 'string',
      startTime: 'string',
      commodityCode: 'string',
      currCapacity: 'string',
      initCapacity: 'string',
      instanceId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfos extends $tea.Model {
  resourcePackageInfo?: DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo[];
  static names(): { [key: string]: string } {
    return {
      resourcePackageInfo: 'ResourcePackageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePackageInfo: { 'type': 'array', 'itemType': DescribeDcdnUserResourcePackageResponseBodyResourcePackageInfosResourcePackageInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnUserTagsResponseBodyTags extends $tea.Model {
  key?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDomainResponseBodyOutPutDomains extends $tea.Model {
  status?: number;
  domain?: string;
  ccStatus?: number;
  aclStatus?: number;
  wafStatus?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      domain: 'Domain',
      ccStatus: 'CcStatus',
      aclStatus: 'AclStatus',
      wafStatus: 'WafStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      domain: 'string',
      ccStatus: 'number',
      aclStatus: 'number',
      wafStatus: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagDcdnResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
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
      'ap-northeast-1': "dcdn.aliyuncs.com",
      'ap-northeast-2-pop': "dcdn.aliyuncs.com",
      'ap-south-1': "dcdn.aliyuncs.com",
      'ap-southeast-1': "dcdn.aliyuncs.com",
      'ap-southeast-2': "dcdn.aliyuncs.com",
      'ap-southeast-3': "dcdn.aliyuncs.com",
      'ap-southeast-5': "dcdn.aliyuncs.com",
      'cn-beijing': "dcdn.aliyuncs.com",
      'cn-beijing-finance-1': "dcdn.aliyuncs.com",
      'cn-beijing-finance-pop': "dcdn.aliyuncs.com",
      'cn-beijing-gov-1': "dcdn.aliyuncs.com",
      'cn-beijing-nu16-b01': "dcdn.aliyuncs.com",
      'cn-chengdu': "dcdn.aliyuncs.com",
      'cn-edge-1': "dcdn.aliyuncs.com",
      'cn-fujian': "dcdn.aliyuncs.com",
      'cn-haidian-cm12-c01': "dcdn.aliyuncs.com",
      'cn-hangzhou': "dcdn.aliyuncs.com",
      'cn-hangzhou-bj-b01': "dcdn.aliyuncs.com",
      'cn-hangzhou-finance': "dcdn.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "dcdn.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "dcdn.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "dcdn.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "dcdn.aliyuncs.com",
      'cn-hangzhou-test-306': "dcdn.aliyuncs.com",
      'cn-hongkong': "dcdn.aliyuncs.com",
      'cn-hongkong-finance-pop': "dcdn.aliyuncs.com",
      'cn-huhehaote': "dcdn.aliyuncs.com",
      'cn-north-2-gov-1': "dcdn.aliyuncs.com",
      'cn-qingdao': "dcdn.aliyuncs.com",
      'cn-qingdao-nebula': "dcdn.aliyuncs.com",
      'cn-shanghai': "dcdn.aliyuncs.com",
      'cn-shanghai-et15-b01': "dcdn.aliyuncs.com",
      'cn-shanghai-et2-b01': "dcdn.aliyuncs.com",
      'cn-shanghai-finance-1': "dcdn.aliyuncs.com",
      'cn-shanghai-inner': "dcdn.aliyuncs.com",
      'cn-shanghai-internal-test-1': "dcdn.aliyuncs.com",
      'cn-shenzhen': "dcdn.aliyuncs.com",
      'cn-shenzhen-finance-1': "dcdn.aliyuncs.com",
      'cn-shenzhen-inner': "dcdn.aliyuncs.com",
      'cn-shenzhen-st4-d01': "dcdn.aliyuncs.com",
      'cn-shenzhen-su18-b01': "dcdn.aliyuncs.com",
      'cn-wuhan': "dcdn.aliyuncs.com",
      'cn-yushanfang': "dcdn.aliyuncs.com",
      'cn-zhangbei-na61-b01': "dcdn.aliyuncs.com",
      'cn-zhangjiakou': "dcdn.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "dcdn.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "dcdn.aliyuncs.com",
      'eu-central-1': "dcdn.aliyuncs.com",
      'eu-west-1': "dcdn.aliyuncs.com",
      'eu-west-1-oxs': "dcdn.aliyuncs.com",
      'me-east-1': "dcdn.aliyuncs.com",
      'rus-west-1-pop': "dcdn.aliyuncs.com",
      'us-east-1': "dcdn.aliyuncs.com",
      'us-west-1': "dcdn.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dcdn", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addDcdnDomainWithOptions(request: AddDcdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddDcdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddDcdnDomainResponse>(await this.doRPCRequest("AddDcdnDomain", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddDcdnDomainResponse({}));
  }

  async addDcdnDomain(request: AddDcdnDomainRequest): Promise<AddDcdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDcdnDomainWithOptions(request, runtime);
  }

  async addDcdnIpaDomainWithOptions(request: AddDcdnIpaDomainRequest, runtime: $Util.RuntimeOptions): Promise<AddDcdnIpaDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddDcdnIpaDomainResponse>(await this.doRPCRequest("AddDcdnIpaDomain", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new AddDcdnIpaDomainResponse({}));
  }

  async addDcdnIpaDomain(request: AddDcdnIpaDomainRequest): Promise<AddDcdnIpaDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDcdnIpaDomainWithOptions(request, runtime);
  }

  async batchAddDcdnDomainWithOptions(request: BatchAddDcdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchAddDcdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchAddDcdnDomainResponse>(await this.doRPCRequest("BatchAddDcdnDomain", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new BatchAddDcdnDomainResponse({}));
  }

  async batchAddDcdnDomain(request: BatchAddDcdnDomainRequest): Promise<BatchAddDcdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchAddDcdnDomainWithOptions(request, runtime);
  }

  async batchDeleteDcdnDomainConfigsWithOptions(request: BatchDeleteDcdnDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteDcdnDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchDeleteDcdnDomainConfigsResponse>(await this.doRPCRequest("BatchDeleteDcdnDomainConfigs", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new BatchDeleteDcdnDomainConfigsResponse({}));
  }

  async batchDeleteDcdnDomainConfigs(request: BatchDeleteDcdnDomainConfigsRequest): Promise<BatchDeleteDcdnDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteDcdnDomainConfigsWithOptions(request, runtime);
  }

  async batchSetDcdnDomainCertificateWithOptions(request: BatchSetDcdnDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetDcdnDomainCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchSetDcdnDomainCertificateResponse>(await this.doRPCRequest("BatchSetDcdnDomainCertificate", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new BatchSetDcdnDomainCertificateResponse({}));
  }

  async batchSetDcdnDomainCertificate(request: BatchSetDcdnDomainCertificateRequest): Promise<BatchSetDcdnDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetDcdnDomainCertificateWithOptions(request, runtime);
  }

  async batchSetDcdnDomainConfigsWithOptions(request: BatchSetDcdnDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetDcdnDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchSetDcdnDomainConfigsResponse>(await this.doRPCRequest("BatchSetDcdnDomainConfigs", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new BatchSetDcdnDomainConfigsResponse({}));
  }

  async batchSetDcdnDomainConfigs(request: BatchSetDcdnDomainConfigsRequest): Promise<BatchSetDcdnDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetDcdnDomainConfigsWithOptions(request, runtime);
  }

  async batchSetDcdnIpaDomainConfigsWithOptions(request: BatchSetDcdnIpaDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<BatchSetDcdnIpaDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchSetDcdnIpaDomainConfigsResponse>(await this.doRPCRequest("BatchSetDcdnIpaDomainConfigs", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new BatchSetDcdnIpaDomainConfigsResponse({}));
  }

  async batchSetDcdnIpaDomainConfigs(request: BatchSetDcdnIpaDomainConfigsRequest): Promise<BatchSetDcdnIpaDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchSetDcdnIpaDomainConfigsWithOptions(request, runtime);
  }

  async batchStartDcdnDomainWithOptions(request: BatchStartDcdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchStartDcdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchStartDcdnDomainResponse>(await this.doRPCRequest("BatchStartDcdnDomain", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new BatchStartDcdnDomainResponse({}));
  }

  async batchStartDcdnDomain(request: BatchStartDcdnDomainRequest): Promise<BatchStartDcdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStartDcdnDomainWithOptions(request, runtime);
  }

  async batchStopDcdnDomainWithOptions(request: BatchStopDcdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<BatchStopDcdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchStopDcdnDomainResponse>(await this.doRPCRequest("BatchStopDcdnDomain", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new BatchStopDcdnDomainResponse({}));
  }

  async batchStopDcdnDomain(request: BatchStopDcdnDomainRequest): Promise<BatchStopDcdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchStopDcdnDomainWithOptions(request, runtime);
  }

  async createDcdnCertificateSigningRequestWithOptions(request: CreateDcdnCertificateSigningRequestRequest, runtime: $Util.RuntimeOptions): Promise<CreateDcdnCertificateSigningRequestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDcdnCertificateSigningRequestResponse>(await this.doRPCRequest("CreateDcdnCertificateSigningRequest", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDcdnCertificateSigningRequestResponse({}));
  }

  async createDcdnCertificateSigningRequest(request: CreateDcdnCertificateSigningRequestRequest): Promise<CreateDcdnCertificateSigningRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDcdnCertificateSigningRequestWithOptions(request, runtime);
  }

  async createDcdnDomainOfflineLogDeliveryWithOptions(request: CreateDcdnDomainOfflineLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<CreateDcdnDomainOfflineLogDeliveryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDcdnDomainOfflineLogDeliveryResponse>(await this.doRPCRequest("CreateDcdnDomainOfflineLogDelivery", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDcdnDomainOfflineLogDeliveryResponse({}));
  }

  async createDcdnDomainOfflineLogDelivery(request: CreateDcdnDomainOfflineLogDeliveryRequest): Promise<CreateDcdnDomainOfflineLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDcdnDomainOfflineLogDeliveryWithOptions(request, runtime);
  }

  async deleteDcdnDomainWithOptions(request: DeleteDcdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDcdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDcdnDomainResponse>(await this.doRPCRequest("DeleteDcdnDomain", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDcdnDomainResponse({}));
  }

  async deleteDcdnDomain(request: DeleteDcdnDomainRequest): Promise<DeleteDcdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDcdnDomainWithOptions(request, runtime);
  }

  async deleteDcdnIpaDomainWithOptions(request: DeleteDcdnIpaDomainRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDcdnIpaDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDcdnIpaDomainResponse>(await this.doRPCRequest("DeleteDcdnIpaDomain", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDcdnIpaDomainResponse({}));
  }

  async deleteDcdnIpaDomain(request: DeleteDcdnIpaDomainRequest): Promise<DeleteDcdnIpaDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDcdnIpaDomainWithOptions(request, runtime);
  }

  async deleteDcdnIpaSpecificConfigWithOptions(request: DeleteDcdnIpaSpecificConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDcdnIpaSpecificConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDcdnIpaSpecificConfigResponse>(await this.doRPCRequest("DeleteDcdnIpaSpecificConfig", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDcdnIpaSpecificConfigResponse({}));
  }

  async deleteDcdnIpaSpecificConfig(request: DeleteDcdnIpaSpecificConfigRequest): Promise<DeleteDcdnIpaSpecificConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDcdnIpaSpecificConfigWithOptions(request, runtime);
  }

  async deleteDcdnSpecificConfigWithOptions(request: DeleteDcdnSpecificConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDcdnSpecificConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDcdnSpecificConfigResponse>(await this.doRPCRequest("DeleteDcdnSpecificConfig", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDcdnSpecificConfigResponse({}));
  }

  async deleteDcdnSpecificConfig(request: DeleteDcdnSpecificConfigRequest): Promise<DeleteDcdnSpecificConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDcdnSpecificConfigWithOptions(request, runtime);
  }

  async deleteDcdnSpecificStagingConfigWithOptions(request: DeleteDcdnSpecificStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDcdnSpecificStagingConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDcdnSpecificStagingConfigResponse>(await this.doRPCRequest("DeleteDcdnSpecificStagingConfig", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDcdnSpecificStagingConfigResponse({}));
  }

  async deleteDcdnSpecificStagingConfig(request: DeleteDcdnSpecificStagingConfigRequest): Promise<DeleteDcdnSpecificStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDcdnSpecificStagingConfigWithOptions(request, runtime);
  }

  async describeDcdnBgpBpsDataWithOptions(request: DescribeDcdnBgpBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnBgpBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnBgpBpsDataResponse>(await this.doRPCRequest("DescribeDcdnBgpBpsData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnBgpBpsDataResponse({}));
  }

  async describeDcdnBgpBpsData(request: DescribeDcdnBgpBpsDataRequest): Promise<DescribeDcdnBgpBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnBgpBpsDataWithOptions(request, runtime);
  }

  async describeDcdnBgpTrafficDataWithOptions(request: DescribeDcdnBgpTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnBgpTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnBgpTrafficDataResponse>(await this.doRPCRequest("DescribeDcdnBgpTrafficData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnBgpTrafficDataResponse({}));
  }

  async describeDcdnBgpTrafficData(request: DescribeDcdnBgpTrafficDataRequest): Promise<DescribeDcdnBgpTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnBgpTrafficDataWithOptions(request, runtime);
  }

  async describeDcdnCertificateDetailWithOptions(request: DescribeDcdnCertificateDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnCertificateDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnCertificateDetailResponse>(await this.doRPCRequest("DescribeDcdnCertificateDetail", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnCertificateDetailResponse({}));
  }

  async describeDcdnCertificateDetail(request: DescribeDcdnCertificateDetailRequest): Promise<DescribeDcdnCertificateDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnCertificateDetailWithOptions(request, runtime);
  }

  async describeDcdnCertificateListWithOptions(request: DescribeDcdnCertificateListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnCertificateListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnCertificateListResponse>(await this.doRPCRequest("DescribeDcdnCertificateList", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnCertificateListResponse({}));
  }

  async describeDcdnCertificateList(request: DescribeDcdnCertificateListRequest): Promise<DescribeDcdnCertificateListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnCertificateListWithOptions(request, runtime);
  }

  async describeDcdnConfigOfVersionWithOptions(request: DescribeDcdnConfigOfVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnConfigOfVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnConfigOfVersionResponse>(await this.doRPCRequest("DescribeDcdnConfigOfVersion", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnConfigOfVersionResponse({}));
  }

  async describeDcdnConfigOfVersion(request: DescribeDcdnConfigOfVersionRequest): Promise<DescribeDcdnConfigOfVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnConfigOfVersionWithOptions(request, runtime);
  }

  async describeDcdnDomainBpsDataWithOptions(request: DescribeDcdnDomainBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainBpsDataResponse>(await this.doRPCRequest("DescribeDcdnDomainBpsData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainBpsDataResponse({}));
  }

  async describeDcdnDomainBpsData(request: DescribeDcdnDomainBpsDataRequest): Promise<DescribeDcdnDomainBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainBpsDataWithOptions(request, runtime);
  }

  async describeDcdnDomainByCertificateWithOptions(request: DescribeDcdnDomainByCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainByCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainByCertificateResponse>(await this.doRPCRequest("DescribeDcdnDomainByCertificate", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainByCertificateResponse({}));
  }

  async describeDcdnDomainByCertificate(request: DescribeDcdnDomainByCertificateRequest): Promise<DescribeDcdnDomainByCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainByCertificateWithOptions(request, runtime);
  }

  async describeDcdnDomainCertificateInfoWithOptions(request: DescribeDcdnDomainCertificateInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainCertificateInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainCertificateInfoResponse>(await this.doRPCRequest("DescribeDcdnDomainCertificateInfo", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainCertificateInfoResponse({}));
  }

  async describeDcdnDomainCertificateInfo(request: DescribeDcdnDomainCertificateInfoRequest): Promise<DescribeDcdnDomainCertificateInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainCertificateInfoWithOptions(request, runtime);
  }

  async describeDcdnDomainCnameWithOptions(request: DescribeDcdnDomainCnameRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainCnameResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDcdnDomainCnameResponse>(await this.doRPCRequest("DescribeDcdnDomainCname", "2018-01-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDcdnDomainCnameResponse({}));
  }

  async describeDcdnDomainCname(request: DescribeDcdnDomainCnameRequest): Promise<DescribeDcdnDomainCnameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainCnameWithOptions(request, runtime);
  }

  async describeDcdnDomainConfigsWithOptions(request: DescribeDcdnDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainConfigsResponse>(await this.doRPCRequest("DescribeDcdnDomainConfigs", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainConfigsResponse({}));
  }

  async describeDcdnDomainConfigs(request: DescribeDcdnDomainConfigsRequest): Promise<DescribeDcdnDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainConfigsWithOptions(request, runtime);
  }

  async describeDcdnDomainDetailWithOptions(request: DescribeDcdnDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainDetailResponse>(await this.doRPCRequest("DescribeDcdnDomainDetail", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainDetailResponse({}));
  }

  async describeDcdnDomainDetail(request: DescribeDcdnDomainDetailRequest): Promise<DescribeDcdnDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainDetailWithOptions(request, runtime);
  }

  async describeDcdnDomainHitRateDataWithOptions(request: DescribeDcdnDomainHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainHitRateDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainHitRateDataResponse>(await this.doRPCRequest("DescribeDcdnDomainHitRateData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainHitRateDataResponse({}));
  }

  async describeDcdnDomainHitRateData(request: DescribeDcdnDomainHitRateDataRequest): Promise<DescribeDcdnDomainHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainHitRateDataWithOptions(request, runtime);
  }

  async describeDcdnDomainHttpCodeDataWithOptions(request: DescribeDcdnDomainHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainHttpCodeDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainHttpCodeDataResponse>(await this.doRPCRequest("DescribeDcdnDomainHttpCodeData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainHttpCodeDataResponse({}));
  }

  async describeDcdnDomainHttpCodeData(request: DescribeDcdnDomainHttpCodeDataRequest): Promise<DescribeDcdnDomainHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainHttpCodeDataWithOptions(request, runtime);
  }

  async describeDcdnDomainIpaBpsDataWithOptions(request: DescribeDcdnDomainIpaBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainIpaBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainIpaBpsDataResponse>(await this.doRPCRequest("DescribeDcdnDomainIpaBpsData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainIpaBpsDataResponse({}));
  }

  async describeDcdnDomainIpaBpsData(request: DescribeDcdnDomainIpaBpsDataRequest): Promise<DescribeDcdnDomainIpaBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainIpaBpsDataWithOptions(request, runtime);
  }

  async describeDcdnDomainIpaTrafficDataWithOptions(request: DescribeDcdnDomainIpaTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainIpaTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainIpaTrafficDataResponse>(await this.doRPCRequest("DescribeDcdnDomainIpaTrafficData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainIpaTrafficDataResponse({}));
  }

  async describeDcdnDomainIpaTrafficData(request: DescribeDcdnDomainIpaTrafficDataRequest): Promise<DescribeDcdnDomainIpaTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainIpaTrafficDataWithOptions(request, runtime);
  }

  async describeDcdnDomainIspDataWithOptions(request: DescribeDcdnDomainIspDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainIspDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainIspDataResponse>(await this.doRPCRequest("DescribeDcdnDomainIspData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainIspDataResponse({}));
  }

  async describeDcdnDomainIspData(request: DescribeDcdnDomainIspDataRequest): Promise<DescribeDcdnDomainIspDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainIspDataWithOptions(request, runtime);
  }

  async describeDcdnDomainLogWithOptions(request: DescribeDcdnDomainLogRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainLogResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainLogResponse>(await this.doRPCRequest("DescribeDcdnDomainLog", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainLogResponse({}));
  }

  async describeDcdnDomainLog(request: DescribeDcdnDomainLogRequest): Promise<DescribeDcdnDomainLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainLogWithOptions(request, runtime);
  }

  async describeDcdnDomainMultiUsageDataWithOptions(request: DescribeDcdnDomainMultiUsageDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainMultiUsageDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainMultiUsageDataResponse>(await this.doRPCRequest("DescribeDcdnDomainMultiUsageData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainMultiUsageDataResponse({}));
  }

  async describeDcdnDomainMultiUsageData(request: DescribeDcdnDomainMultiUsageDataRequest): Promise<DescribeDcdnDomainMultiUsageDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainMultiUsageDataWithOptions(request, runtime);
  }

  async describeDcdnDomainOriginBpsDataWithOptions(request: DescribeDcdnDomainOriginBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainOriginBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainOriginBpsDataResponse>(await this.doRPCRequest("DescribeDcdnDomainOriginBpsData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainOriginBpsDataResponse({}));
  }

  async describeDcdnDomainOriginBpsData(request: DescribeDcdnDomainOriginBpsDataRequest): Promise<DescribeDcdnDomainOriginBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainOriginBpsDataWithOptions(request, runtime);
  }

  async describeDcdnDomainOriginTrafficDataWithOptions(request: DescribeDcdnDomainOriginTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainOriginTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainOriginTrafficDataResponse>(await this.doRPCRequest("DescribeDcdnDomainOriginTrafficData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainOriginTrafficDataResponse({}));
  }

  async describeDcdnDomainOriginTrafficData(request: DescribeDcdnDomainOriginTrafficDataRequest): Promise<DescribeDcdnDomainOriginTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainOriginTrafficDataWithOptions(request, runtime);
  }

  async describeDcdnDomainPropertyWithOptions(request: DescribeDcdnDomainPropertyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainPropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainPropertyResponse>(await this.doRPCRequest("DescribeDcdnDomainProperty", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainPropertyResponse({}));
  }

  async describeDcdnDomainProperty(request: DescribeDcdnDomainPropertyRequest): Promise<DescribeDcdnDomainPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainPropertyWithOptions(request, runtime);
  }

  async describeDcdnDomainPvDataWithOptions(request: DescribeDcdnDomainPvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainPvDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainPvDataResponse>(await this.doRPCRequest("DescribeDcdnDomainPvData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainPvDataResponse({}));
  }

  async describeDcdnDomainPvData(request: DescribeDcdnDomainPvDataRequest): Promise<DescribeDcdnDomainPvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainPvDataWithOptions(request, runtime);
  }

  async describeDcdnDomainQpsDataWithOptions(request: DescribeDcdnDomainQpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainQpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainQpsDataResponse>(await this.doRPCRequest("DescribeDcdnDomainQpsData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainQpsDataResponse({}));
  }

  async describeDcdnDomainQpsData(request: DescribeDcdnDomainQpsDataRequest): Promise<DescribeDcdnDomainQpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainQpsDataWithOptions(request, runtime);
  }

  async describeDcdnDomainRealTimeBpsDataWithOptions(request: DescribeDcdnDomainRealTimeBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeBpsDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDcdnDomainRealTimeBpsDataResponse>(await this.doRPCRequest("DescribeDcdnDomainRealTimeBpsData", "2018-01-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDcdnDomainRealTimeBpsDataResponse({}));
  }

  async describeDcdnDomainRealTimeBpsData(request: DescribeDcdnDomainRealTimeBpsDataRequest): Promise<DescribeDcdnDomainRealTimeBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeBpsDataWithOptions(request, runtime);
  }

  async describeDcdnDomainRealTimeByteHitRateDataWithOptions(request: DescribeDcdnDomainRealTimeByteHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeByteHitRateDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDcdnDomainRealTimeByteHitRateDataResponse>(await this.doRPCRequest("DescribeDcdnDomainRealTimeByteHitRateData", "2018-01-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDcdnDomainRealTimeByteHitRateDataResponse({}));
  }

  async describeDcdnDomainRealTimeByteHitRateData(request: DescribeDcdnDomainRealTimeByteHitRateDataRequest): Promise<DescribeDcdnDomainRealTimeByteHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeByteHitRateDataWithOptions(request, runtime);
  }

  async describeDcdnDomainRealTimeDetailDataWithOptions(request: DescribeDcdnDomainRealTimeDetailDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeDetailDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDcdnDomainRealTimeDetailDataResponse>(await this.doRPCRequest("DescribeDcdnDomainRealTimeDetailData", "2018-01-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDcdnDomainRealTimeDetailDataResponse({}));
  }

  async describeDcdnDomainRealTimeDetailData(request: DescribeDcdnDomainRealTimeDetailDataRequest): Promise<DescribeDcdnDomainRealTimeDetailDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeDetailDataWithOptions(request, runtime);
  }

  async describeDcdnDomainRealTimeHttpCodeDataWithOptions(request: DescribeDcdnDomainRealTimeHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeHttpCodeDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainRealTimeHttpCodeDataResponse>(await this.doRPCRequest("DescribeDcdnDomainRealTimeHttpCodeData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainRealTimeHttpCodeDataResponse({}));
  }

  async describeDcdnDomainRealTimeHttpCodeData(request: DescribeDcdnDomainRealTimeHttpCodeDataRequest): Promise<DescribeDcdnDomainRealTimeHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeHttpCodeDataWithOptions(request, runtime);
  }

  async describeDcdnDomainRealTimeQpsDataWithOptions(request: DescribeDcdnDomainRealTimeQpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeQpsDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDcdnDomainRealTimeQpsDataResponse>(await this.doRPCRequest("DescribeDcdnDomainRealTimeQpsData", "2018-01-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDcdnDomainRealTimeQpsDataResponse({}));
  }

  async describeDcdnDomainRealTimeQpsData(request: DescribeDcdnDomainRealTimeQpsDataRequest): Promise<DescribeDcdnDomainRealTimeQpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeQpsDataWithOptions(request, runtime);
  }

  async describeDcdnDomainRealTimeReqHitRateDataWithOptions(request: DescribeDcdnDomainRealTimeReqHitRateDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeReqHitRateDataResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: query,
    });
    return $tea.cast<DescribeDcdnDomainRealTimeReqHitRateDataResponse>(await this.doRPCRequest("DescribeDcdnDomainRealTimeReqHitRateData", "2018-01-15", "HTTPS", "GET", "AK", "json", req, runtime), new DescribeDcdnDomainRealTimeReqHitRateDataResponse({}));
  }

  async describeDcdnDomainRealTimeReqHitRateData(request: DescribeDcdnDomainRealTimeReqHitRateDataRequest): Promise<DescribeDcdnDomainRealTimeReqHitRateDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeReqHitRateDataWithOptions(request, runtime);
  }

  async describeDcdnDomainRealTimeSrcBpsDataWithOptions(request: DescribeDcdnDomainRealTimeSrcBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeSrcBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainRealTimeSrcBpsDataResponse>(await this.doRPCRequest("DescribeDcdnDomainRealTimeSrcBpsData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainRealTimeSrcBpsDataResponse({}));
  }

  async describeDcdnDomainRealTimeSrcBpsData(request: DescribeDcdnDomainRealTimeSrcBpsDataRequest): Promise<DescribeDcdnDomainRealTimeSrcBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeSrcBpsDataWithOptions(request, runtime);
  }

  async describeDcdnDomainRealTimeSrcHttpCodeDataWithOptions(request: DescribeDcdnDomainRealTimeSrcHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse>(await this.doRPCRequest("DescribeDcdnDomainRealTimeSrcHttpCodeData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse({}));
  }

  async describeDcdnDomainRealTimeSrcHttpCodeData(request: DescribeDcdnDomainRealTimeSrcHttpCodeDataRequest): Promise<DescribeDcdnDomainRealTimeSrcHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeSrcHttpCodeDataWithOptions(request, runtime);
  }

  async describeDcdnDomainRealTimeSrcTrafficDataWithOptions(request: DescribeDcdnDomainRealTimeSrcTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeSrcTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainRealTimeSrcTrafficDataResponse>(await this.doRPCRequest("DescribeDcdnDomainRealTimeSrcTrafficData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainRealTimeSrcTrafficDataResponse({}));
  }

  async describeDcdnDomainRealTimeSrcTrafficData(request: DescribeDcdnDomainRealTimeSrcTrafficDataRequest): Promise<DescribeDcdnDomainRealTimeSrcTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeSrcTrafficDataWithOptions(request, runtime);
  }

  async describeDcdnDomainRealTimeTrafficDataWithOptions(request: DescribeDcdnDomainRealTimeTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRealTimeTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainRealTimeTrafficDataResponse>(await this.doRPCRequest("DescribeDcdnDomainRealTimeTrafficData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainRealTimeTrafficDataResponse({}));
  }

  async describeDcdnDomainRealTimeTrafficData(request: DescribeDcdnDomainRealTimeTrafficDataRequest): Promise<DescribeDcdnDomainRealTimeTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRealTimeTrafficDataWithOptions(request, runtime);
  }

  async describeDcdnDomainRegionDataWithOptions(request: DescribeDcdnDomainRegionDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainRegionDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainRegionDataResponse>(await this.doRPCRequest("DescribeDcdnDomainRegionData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainRegionDataResponse({}));
  }

  async describeDcdnDomainRegionData(request: DescribeDcdnDomainRegionDataRequest): Promise<DescribeDcdnDomainRegionDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainRegionDataWithOptions(request, runtime);
  }

  async describeDcdnDomainStagingConfigWithOptions(request: DescribeDcdnDomainStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainStagingConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainStagingConfigResponse>(await this.doRPCRequest("DescribeDcdnDomainStagingConfig", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainStagingConfigResponse({}));
  }

  async describeDcdnDomainStagingConfig(request: DescribeDcdnDomainStagingConfigRequest): Promise<DescribeDcdnDomainStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainStagingConfigWithOptions(request, runtime);
  }

  async describeDcdnDomainTopReferVisitWithOptions(request: DescribeDcdnDomainTopReferVisitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainTopReferVisitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainTopReferVisitResponse>(await this.doRPCRequest("DescribeDcdnDomainTopReferVisit", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainTopReferVisitResponse({}));
  }

  async describeDcdnDomainTopReferVisit(request: DescribeDcdnDomainTopReferVisitRequest): Promise<DescribeDcdnDomainTopReferVisitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainTopReferVisitWithOptions(request, runtime);
  }

  async describeDcdnDomainTopUrlVisitWithOptions(request: DescribeDcdnDomainTopUrlVisitRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainTopUrlVisitResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainTopUrlVisitResponse>(await this.doRPCRequest("DescribeDcdnDomainTopUrlVisit", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainTopUrlVisitResponse({}));
  }

  async describeDcdnDomainTopUrlVisit(request: DescribeDcdnDomainTopUrlVisitRequest): Promise<DescribeDcdnDomainTopUrlVisitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainTopUrlVisitWithOptions(request, runtime);
  }

  async describeDcdnDomainTrafficDataWithOptions(request: DescribeDcdnDomainTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainTrafficDataResponse>(await this.doRPCRequest("DescribeDcdnDomainTrafficData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainTrafficDataResponse({}));
  }

  async describeDcdnDomainTrafficData(request: DescribeDcdnDomainTrafficDataRequest): Promise<DescribeDcdnDomainTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainTrafficDataWithOptions(request, runtime);
  }

  async describeDcdnDomainUvDataWithOptions(request: DescribeDcdnDomainUvDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainUvDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainUvDataResponse>(await this.doRPCRequest("DescribeDcdnDomainUvData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainUvDataResponse({}));
  }

  async describeDcdnDomainUvData(request: DescribeDcdnDomainUvDataRequest): Promise<DescribeDcdnDomainUvDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainUvDataWithOptions(request, runtime);
  }

  async describeDcdnDomainWebsocketBpsDataWithOptions(request: DescribeDcdnDomainWebsocketBpsDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainWebsocketBpsDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainWebsocketBpsDataResponse>(await this.doRPCRequest("DescribeDcdnDomainWebsocketBpsData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainWebsocketBpsDataResponse({}));
  }

  async describeDcdnDomainWebsocketBpsData(request: DescribeDcdnDomainWebsocketBpsDataRequest): Promise<DescribeDcdnDomainWebsocketBpsDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainWebsocketBpsDataWithOptions(request, runtime);
  }

  async describeDcdnDomainWebsocketHttpCodeDataWithOptions(request: DescribeDcdnDomainWebsocketHttpCodeDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainWebsocketHttpCodeDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainWebsocketHttpCodeDataResponse>(await this.doRPCRequest("DescribeDcdnDomainWebsocketHttpCodeData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainWebsocketHttpCodeDataResponse({}));
  }

  async describeDcdnDomainWebsocketHttpCodeData(request: DescribeDcdnDomainWebsocketHttpCodeDataRequest): Promise<DescribeDcdnDomainWebsocketHttpCodeDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainWebsocketHttpCodeDataWithOptions(request, runtime);
  }

  async describeDcdnDomainWebsocketTrafficDataWithOptions(request: DescribeDcdnDomainWebsocketTrafficDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnDomainWebsocketTrafficDataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnDomainWebsocketTrafficDataResponse>(await this.doRPCRequest("DescribeDcdnDomainWebsocketTrafficData", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnDomainWebsocketTrafficDataResponse({}));
  }

  async describeDcdnDomainWebsocketTrafficData(request: DescribeDcdnDomainWebsocketTrafficDataRequest): Promise<DescribeDcdnDomainWebsocketTrafficDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnDomainWebsocketTrafficDataWithOptions(request, runtime);
  }

  async describeDcdnHttpsDomainListWithOptions(request: DescribeDcdnHttpsDomainListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnHttpsDomainListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnHttpsDomainListResponse>(await this.doRPCRequest("DescribeDcdnHttpsDomainList", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnHttpsDomainListResponse({}));
  }

  async describeDcdnHttpsDomainList(request: DescribeDcdnHttpsDomainListRequest): Promise<DescribeDcdnHttpsDomainListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnHttpsDomainListWithOptions(request, runtime);
  }

  async describeDcdnIpaDomainConfigsWithOptions(request: DescribeDcdnIpaDomainConfigsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnIpaDomainConfigsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnIpaDomainConfigsResponse>(await this.doRPCRequest("DescribeDcdnIpaDomainConfigs", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnIpaDomainConfigsResponse({}));
  }

  async describeDcdnIpaDomainConfigs(request: DescribeDcdnIpaDomainConfigsRequest): Promise<DescribeDcdnIpaDomainConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnIpaDomainConfigsWithOptions(request, runtime);
  }

  async describeDcdnIpaDomainDetailWithOptions(request: DescribeDcdnIpaDomainDetailRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnIpaDomainDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnIpaDomainDetailResponse>(await this.doRPCRequest("DescribeDcdnIpaDomainDetail", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnIpaDomainDetailResponse({}));
  }

  async describeDcdnIpaDomainDetail(request: DescribeDcdnIpaDomainDetailRequest): Promise<DescribeDcdnIpaDomainDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnIpaDomainDetailWithOptions(request, runtime);
  }

  async describeDcdnIpaServiceWithOptions(request: DescribeDcdnIpaServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnIpaServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnIpaServiceResponse>(await this.doRPCRequest("DescribeDcdnIpaService", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnIpaServiceResponse({}));
  }

  async describeDcdnIpaService(request: DescribeDcdnIpaServiceRequest): Promise<DescribeDcdnIpaServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnIpaServiceWithOptions(request, runtime);
  }

  async describeDcdnIpaUserDomainsWithOptions(request: DescribeDcdnIpaUserDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnIpaUserDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnIpaUserDomainsResponse>(await this.doRPCRequest("DescribeDcdnIpaUserDomains", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnIpaUserDomainsResponse({}));
  }

  async describeDcdnIpaUserDomains(request: DescribeDcdnIpaUserDomainsRequest): Promise<DescribeDcdnIpaUserDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnIpaUserDomainsWithOptions(request, runtime);
  }

  async describeDcdnIpInfoWithOptions(request: DescribeDcdnIpInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnIpInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnIpInfoResponse>(await this.doRPCRequest("DescribeDcdnIpInfo", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnIpInfoResponse({}));
  }

  async describeDcdnIpInfo(request: DescribeDcdnIpInfoRequest): Promise<DescribeDcdnIpInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnIpInfoWithOptions(request, runtime);
  }

  async describeDcdnOfflineLogDeliveryWithOptions(request: DescribeDcdnOfflineLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnOfflineLogDeliveryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnOfflineLogDeliveryResponse>(await this.doRPCRequest("DescribeDcdnOfflineLogDelivery", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnOfflineLogDeliveryResponse({}));
  }

  async describeDcdnOfflineLogDelivery(request: DescribeDcdnOfflineLogDeliveryRequest): Promise<DescribeDcdnOfflineLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnOfflineLogDeliveryWithOptions(request, runtime);
  }

  async describeDcdnOfflineLogDeliveryFieldWithOptions(request: DescribeDcdnOfflineLogDeliveryFieldRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnOfflineLogDeliveryFieldResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnOfflineLogDeliveryFieldResponse>(await this.doRPCRequest("DescribeDcdnOfflineLogDeliveryField", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnOfflineLogDeliveryFieldResponse({}));
  }

  async describeDcdnOfflineLogDeliveryField(request: DescribeDcdnOfflineLogDeliveryFieldRequest): Promise<DescribeDcdnOfflineLogDeliveryFieldResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnOfflineLogDeliveryFieldWithOptions(request, runtime);
  }

  async describeDcdnOfflineLogDeliveryRegionsWithOptions(request: DescribeDcdnOfflineLogDeliveryRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnOfflineLogDeliveryRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnOfflineLogDeliveryRegionsResponse>(await this.doRPCRequest("DescribeDcdnOfflineLogDeliveryRegions", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnOfflineLogDeliveryRegionsResponse({}));
  }

  async describeDcdnOfflineLogDeliveryRegions(request: DescribeDcdnOfflineLogDeliveryRegionsRequest): Promise<DescribeDcdnOfflineLogDeliveryRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnOfflineLogDeliveryRegionsWithOptions(request, runtime);
  }

  async describeDcdnOfflineLogDeliveryStatusWithOptions(request: DescribeDcdnOfflineLogDeliveryStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnOfflineLogDeliveryStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnOfflineLogDeliveryStatusResponse>(await this.doRPCRequest("DescribeDcdnOfflineLogDeliveryStatus", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnOfflineLogDeliveryStatusResponse({}));
  }

  async describeDcdnOfflineLogDeliveryStatus(request: DescribeDcdnOfflineLogDeliveryStatusRequest): Promise<DescribeDcdnOfflineLogDeliveryStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnOfflineLogDeliveryStatusWithOptions(request, runtime);
  }

  async describeDcdnRefreshQuotaWithOptions(request: DescribeDcdnRefreshQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnRefreshQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnRefreshQuotaResponse>(await this.doRPCRequest("DescribeDcdnRefreshQuota", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnRefreshQuotaResponse({}));
  }

  async describeDcdnRefreshQuota(request: DescribeDcdnRefreshQuotaRequest): Promise<DescribeDcdnRefreshQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnRefreshQuotaWithOptions(request, runtime);
  }

  async describeDcdnRefreshTasksWithOptions(request: DescribeDcdnRefreshTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnRefreshTasksResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnRefreshTasksResponse>(await this.doRPCRequest("DescribeDcdnRefreshTasks", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnRefreshTasksResponse({}));
  }

  async describeDcdnRefreshTasks(request: DescribeDcdnRefreshTasksRequest): Promise<DescribeDcdnRefreshTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnRefreshTasksWithOptions(request, runtime);
  }

  async describeDcdnRegionAndIspWithOptions(request: DescribeDcdnRegionAndIspRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnRegionAndIspResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnRegionAndIspResponse>(await this.doRPCRequest("DescribeDcdnRegionAndIsp", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnRegionAndIspResponse({}));
  }

  async describeDcdnRegionAndIsp(request: DescribeDcdnRegionAndIspRequest): Promise<DescribeDcdnRegionAndIspResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnRegionAndIspWithOptions(request, runtime);
  }

  async describeDcdnServiceWithOptions(request: DescribeDcdnServiceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnServiceResponse>(await this.doRPCRequest("DescribeDcdnService", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnServiceResponse({}));
  }

  async describeDcdnService(request: DescribeDcdnServiceRequest): Promise<DescribeDcdnServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnServiceWithOptions(request, runtime);
  }

  async describeDcdnStagingIpWithOptions(request: DescribeDcdnStagingIpRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnStagingIpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnStagingIpResponse>(await this.doRPCRequest("DescribeDcdnStagingIp", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnStagingIpResponse({}));
  }

  async describeDcdnStagingIp(request: DescribeDcdnStagingIpRequest): Promise<DescribeDcdnStagingIpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnStagingIpWithOptions(request, runtime);
  }

  async describeDcdnTagResourcesWithOptions(request: DescribeDcdnTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnTagResourcesResponse>(await this.doRPCRequest("DescribeDcdnTagResources", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnTagResourcesResponse({}));
  }

  async describeDcdnTagResources(request: DescribeDcdnTagResourcesRequest): Promise<DescribeDcdnTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnTagResourcesWithOptions(request, runtime);
  }

  async describeDcdnTopDomainsByFlowWithOptions(request: DescribeDcdnTopDomainsByFlowRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnTopDomainsByFlowResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnTopDomainsByFlowResponse>(await this.doRPCRequest("DescribeDcdnTopDomainsByFlow", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnTopDomainsByFlowResponse({}));
  }

  async describeDcdnTopDomainsByFlow(request: DescribeDcdnTopDomainsByFlowRequest): Promise<DescribeDcdnTopDomainsByFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnTopDomainsByFlowWithOptions(request, runtime);
  }

  async describeDcdnUserBillHistoryWithOptions(request: DescribeDcdnUserBillHistoryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserBillHistoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnUserBillHistoryResponse>(await this.doRPCRequest("DescribeDcdnUserBillHistory", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnUserBillHistoryResponse({}));
  }

  async describeDcdnUserBillHistory(request: DescribeDcdnUserBillHistoryRequest): Promise<DescribeDcdnUserBillHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserBillHistoryWithOptions(request, runtime);
  }

  async describeDcdnUserBillTypeWithOptions(request: DescribeDcdnUserBillTypeRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserBillTypeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnUserBillTypeResponse>(await this.doRPCRequest("DescribeDcdnUserBillType", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnUserBillTypeResponse({}));
  }

  async describeDcdnUserBillType(request: DescribeDcdnUserBillTypeRequest): Promise<DescribeDcdnUserBillTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserBillTypeWithOptions(request, runtime);
  }

  async describeDcdnUserDomainsWithOptions(request: DescribeDcdnUserDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnUserDomainsResponse>(await this.doRPCRequest("DescribeDcdnUserDomains", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnUserDomainsResponse({}));
  }

  async describeDcdnUserDomains(request: DescribeDcdnUserDomainsRequest): Promise<DescribeDcdnUserDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserDomainsWithOptions(request, runtime);
  }

  async describeDcdnUserDomainsByFuncWithOptions(request: DescribeDcdnUserDomainsByFuncRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserDomainsByFuncResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnUserDomainsByFuncResponse>(await this.doRPCRequest("DescribeDcdnUserDomainsByFunc", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnUserDomainsByFuncResponse({}));
  }

  async describeDcdnUserDomainsByFunc(request: DescribeDcdnUserDomainsByFuncRequest): Promise<DescribeDcdnUserDomainsByFuncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserDomainsByFuncWithOptions(request, runtime);
  }

  async describeDcdnUserQuotaWithOptions(request: DescribeDcdnUserQuotaRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserQuotaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnUserQuotaResponse>(await this.doRPCRequest("DescribeDcdnUserQuota", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnUserQuotaResponse({}));
  }

  async describeDcdnUserQuota(request: DescribeDcdnUserQuotaRequest): Promise<DescribeDcdnUserQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserQuotaWithOptions(request, runtime);
  }

  async describeDcdnUserResourcePackageWithOptions(request: DescribeDcdnUserResourcePackageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserResourcePackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnUserResourcePackageResponse>(await this.doRPCRequest("DescribeDcdnUserResourcePackage", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnUserResourcePackageResponse({}));
  }

  async describeDcdnUserResourcePackage(request: DescribeDcdnUserResourcePackageRequest): Promise<DescribeDcdnUserResourcePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserResourcePackageWithOptions(request, runtime);
  }

  async describeDcdnUserSecDropWithOptions(request: DescribeDcdnUserSecDropRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserSecDropResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnUserSecDropResponse>(await this.doRPCRequest("DescribeDcdnUserSecDrop", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnUserSecDropResponse({}));
  }

  async describeDcdnUserSecDrop(request: DescribeDcdnUserSecDropRequest): Promise<DescribeDcdnUserSecDropResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserSecDropWithOptions(request, runtime);
  }

  async describeDcdnUserTagsWithOptions(request: DescribeDcdnUserTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnUserTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnUserTagsResponse>(await this.doRPCRequest("DescribeDcdnUserTags", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnUserTagsResponse({}));
  }

  async describeDcdnUserTags(request: DescribeDcdnUserTagsRequest): Promise<DescribeDcdnUserTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnUserTagsWithOptions(request, runtime);
  }

  async describeDcdnVerifyContentWithOptions(request: DescribeDcdnVerifyContentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnVerifyContentResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnVerifyContentResponse>(await this.doRPCRequest("DescribeDcdnVerifyContent", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnVerifyContentResponse({}));
  }

  async describeDcdnVerifyContent(request: DescribeDcdnVerifyContentRequest): Promise<DescribeDcdnVerifyContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnVerifyContentWithOptions(request, runtime);
  }

  async describeDcdnWafDomainWithOptions(request: DescribeDcdnWafDomainRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDcdnWafDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDcdnWafDomainResponse>(await this.doRPCRequest("DescribeDcdnWafDomain", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDcdnWafDomainResponse({}));
  }

  async describeDcdnWafDomain(request: DescribeDcdnWafDomainRequest): Promise<DescribeDcdnWafDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDcdnWafDomainWithOptions(request, runtime);
  }

  async describeUserDcdnIpaStatusWithOptions(request: DescribeUserDcdnIpaStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserDcdnIpaStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserDcdnIpaStatusResponse>(await this.doRPCRequest("DescribeUserDcdnIpaStatus", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserDcdnIpaStatusResponse({}));
  }

  async describeUserDcdnIpaStatus(request: DescribeUserDcdnIpaStatusRequest): Promise<DescribeUserDcdnIpaStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserDcdnIpaStatusWithOptions(request, runtime);
  }

  async describeUserDcdnStatusWithOptions(request: DescribeUserDcdnStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserDcdnStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserDcdnStatusResponse>(await this.doRPCRequest("DescribeUserDcdnStatus", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserDcdnStatusResponse({}));
  }

  async describeUserDcdnStatus(request: DescribeUserDcdnStatusRequest): Promise<DescribeUserDcdnStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserDcdnStatusWithOptions(request, runtime);
  }

  async disableDcdnDomainOfflineLogDeliveryWithOptions(request: DisableDcdnDomainOfflineLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DisableDcdnDomainOfflineLogDeliveryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableDcdnDomainOfflineLogDeliveryResponse>(await this.doRPCRequest("DisableDcdnDomainOfflineLogDelivery", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DisableDcdnDomainOfflineLogDeliveryResponse({}));
  }

  async disableDcdnDomainOfflineLogDelivery(request: DisableDcdnDomainOfflineLogDeliveryRequest): Promise<DisableDcdnDomainOfflineLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableDcdnDomainOfflineLogDeliveryWithOptions(request, runtime);
  }

  async disableDcdnOfflineLogDeliveryWithOptions(request: DisableDcdnOfflineLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<DisableDcdnOfflineLogDeliveryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableDcdnOfflineLogDeliveryResponse>(await this.doRPCRequest("DisableDcdnOfflineLogDelivery", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new DisableDcdnOfflineLogDeliveryResponse({}));
  }

  async disableDcdnOfflineLogDelivery(request: DisableDcdnOfflineLogDeliveryRequest): Promise<DisableDcdnOfflineLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableDcdnOfflineLogDeliveryWithOptions(request, runtime);
  }

  async enableDcdnDomainOfflineLogDeliveryWithOptions(request: EnableDcdnDomainOfflineLogDeliveryRequest, runtime: $Util.RuntimeOptions): Promise<EnableDcdnDomainOfflineLogDeliveryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableDcdnDomainOfflineLogDeliveryResponse>(await this.doRPCRequest("EnableDcdnDomainOfflineLogDelivery", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new EnableDcdnDomainOfflineLogDeliveryResponse({}));
  }

  async enableDcdnDomainOfflineLogDelivery(request: EnableDcdnDomainOfflineLogDeliveryRequest): Promise<EnableDcdnDomainOfflineLogDeliveryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableDcdnDomainOfflineLogDeliveryWithOptions(request, runtime);
  }

  async modifyDCdnDomainSchdmByPropertyWithOptions(request: ModifyDCdnDomainSchdmByPropertyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDCdnDomainSchdmByPropertyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDCdnDomainSchdmByPropertyResponse>(await this.doRPCRequest("ModifyDCdnDomainSchdmByProperty", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDCdnDomainSchdmByPropertyResponse({}));
  }

  async modifyDCdnDomainSchdmByProperty(request: ModifyDCdnDomainSchdmByPropertyRequest): Promise<ModifyDCdnDomainSchdmByPropertyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDCdnDomainSchdmByPropertyWithOptions(request, runtime);
  }

  async openDcdnServiceWithOptions(request: OpenDcdnServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenDcdnServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenDcdnServiceResponse>(await this.doRPCRequest("OpenDcdnService", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new OpenDcdnServiceResponse({}));
  }

  async openDcdnService(request: OpenDcdnServiceRequest): Promise<OpenDcdnServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openDcdnServiceWithOptions(request, runtime);
  }

  async preloadDcdnObjectCachesWithOptions(request: PreloadDcdnObjectCachesRequest, runtime: $Util.RuntimeOptions): Promise<PreloadDcdnObjectCachesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PreloadDcdnObjectCachesResponse>(await this.doRPCRequest("PreloadDcdnObjectCaches", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new PreloadDcdnObjectCachesResponse({}));
  }

  async preloadDcdnObjectCaches(request: PreloadDcdnObjectCachesRequest): Promise<PreloadDcdnObjectCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.preloadDcdnObjectCachesWithOptions(request, runtime);
  }

  async publishDcdnStagingConfigToProductionWithOptions(request: PublishDcdnStagingConfigToProductionRequest, runtime: $Util.RuntimeOptions): Promise<PublishDcdnStagingConfigToProductionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishDcdnStagingConfigToProductionResponse>(await this.doRPCRequest("PublishDcdnStagingConfigToProduction", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new PublishDcdnStagingConfigToProductionResponse({}));
  }

  async publishDcdnStagingConfigToProduction(request: PublishDcdnStagingConfigToProductionRequest): Promise<PublishDcdnStagingConfigToProductionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishDcdnStagingConfigToProductionWithOptions(request, runtime);
  }

  async refreshDcdnObjectCachesWithOptions(request: RefreshDcdnObjectCachesRequest, runtime: $Util.RuntimeOptions): Promise<RefreshDcdnObjectCachesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshDcdnObjectCachesResponse>(await this.doRPCRequest("RefreshDcdnObjectCaches", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshDcdnObjectCachesResponse({}));
  }

  async refreshDcdnObjectCaches(request: RefreshDcdnObjectCachesRequest): Promise<RefreshDcdnObjectCachesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshDcdnObjectCachesWithOptions(request, runtime);
  }

  async rollbackDcdnStagingConfigWithOptions(request: RollbackDcdnStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<RollbackDcdnStagingConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RollbackDcdnStagingConfigResponse>(await this.doRPCRequest("RollbackDcdnStagingConfig", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new RollbackDcdnStagingConfigResponse({}));
  }

  async rollbackDcdnStagingConfig(request: RollbackDcdnStagingConfigRequest): Promise<RollbackDcdnStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackDcdnStagingConfigWithOptions(request, runtime);
  }

  async setDcdnConfigOfVersionWithOptions(request: SetDcdnConfigOfVersionRequest, runtime: $Util.RuntimeOptions): Promise<SetDcdnConfigOfVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDcdnConfigOfVersionResponse>(await this.doRPCRequest("SetDcdnConfigOfVersion", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetDcdnConfigOfVersionResponse({}));
  }

  async setDcdnConfigOfVersion(request: SetDcdnConfigOfVersionRequest): Promise<SetDcdnConfigOfVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDcdnConfigOfVersionWithOptions(request, runtime);
  }

  async setDcdnDomainCertificateWithOptions(request: SetDcdnDomainCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetDcdnDomainCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDcdnDomainCertificateResponse>(await this.doRPCRequest("SetDcdnDomainCertificate", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetDcdnDomainCertificateResponse({}));
  }

  async setDcdnDomainCertificate(request: SetDcdnDomainCertificateRequest): Promise<SetDcdnDomainCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDcdnDomainCertificateWithOptions(request, runtime);
  }

  async setDcdnDomainCSRCertificateWithOptions(request: SetDcdnDomainCSRCertificateRequest, runtime: $Util.RuntimeOptions): Promise<SetDcdnDomainCSRCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDcdnDomainCSRCertificateResponse>(await this.doRPCRequest("SetDcdnDomainCSRCertificate", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetDcdnDomainCSRCertificateResponse({}));
  }

  async setDcdnDomainCSRCertificate(request: SetDcdnDomainCSRCertificateRequest): Promise<SetDcdnDomainCSRCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDcdnDomainCSRCertificateWithOptions(request, runtime);
  }

  async setDcdnDomainStagingConfigWithOptions(request: SetDcdnDomainStagingConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetDcdnDomainStagingConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDcdnDomainStagingConfigResponse>(await this.doRPCRequest("SetDcdnDomainStagingConfig", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new SetDcdnDomainStagingConfigResponse({}));
  }

  async setDcdnDomainStagingConfig(request: SetDcdnDomainStagingConfigRequest): Promise<SetDcdnDomainStagingConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDcdnDomainStagingConfigWithOptions(request, runtime);
  }

  async startDcdnDomainWithOptions(request: StartDcdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<StartDcdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartDcdnDomainResponse>(await this.doRPCRequest("StartDcdnDomain", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new StartDcdnDomainResponse({}));
  }

  async startDcdnDomain(request: StartDcdnDomainRequest): Promise<StartDcdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDcdnDomainWithOptions(request, runtime);
  }

  async startDcdnIpaDomainWithOptions(request: StartDcdnIpaDomainRequest, runtime: $Util.RuntimeOptions): Promise<StartDcdnIpaDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartDcdnIpaDomainResponse>(await this.doRPCRequest("StartDcdnIpaDomain", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new StartDcdnIpaDomainResponse({}));
  }

  async startDcdnIpaDomain(request: StartDcdnIpaDomainRequest): Promise<StartDcdnIpaDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDcdnIpaDomainWithOptions(request, runtime);
  }

  async stopDcdnDomainWithOptions(request: StopDcdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<StopDcdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopDcdnDomainResponse>(await this.doRPCRequest("StopDcdnDomain", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new StopDcdnDomainResponse({}));
  }

  async stopDcdnDomain(request: StopDcdnDomainRequest): Promise<StopDcdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDcdnDomainWithOptions(request, runtime);
  }

  async stopDcdnIpaDomainWithOptions(request: StopDcdnIpaDomainRequest, runtime: $Util.RuntimeOptions): Promise<StopDcdnIpaDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopDcdnIpaDomainResponse>(await this.doRPCRequest("StopDcdnIpaDomain", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new StopDcdnIpaDomainResponse({}));
  }

  async stopDcdnIpaDomain(request: StopDcdnIpaDomainRequest): Promise<StopDcdnIpaDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDcdnIpaDomainWithOptions(request, runtime);
  }

  async tagDcdnResourcesWithOptions(request: TagDcdnResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagDcdnResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagDcdnResourcesResponse>(await this.doRPCRequest("TagDcdnResources", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new TagDcdnResourcesResponse({}));
  }

  async tagDcdnResources(request: TagDcdnResourcesRequest): Promise<TagDcdnResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagDcdnResourcesWithOptions(request, runtime);
  }

  async untagDcdnResourcesWithOptions(request: UntagDcdnResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagDcdnResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagDcdnResourcesResponse>(await this.doRPCRequest("UntagDcdnResources", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UntagDcdnResourcesResponse({}));
  }

  async untagDcdnResources(request: UntagDcdnResourcesRequest): Promise<UntagDcdnResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagDcdnResourcesWithOptions(request, runtime);
  }

  async updateDcdnDomainWithOptions(request: UpdateDcdnDomainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDcdnDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDcdnDomainResponse>(await this.doRPCRequest("UpdateDcdnDomain", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDcdnDomainResponse({}));
  }

  async updateDcdnDomain(request: UpdateDcdnDomainRequest): Promise<UpdateDcdnDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDcdnDomainWithOptions(request, runtime);
  }

  async updateDcdnIpaDomainWithOptions(request: UpdateDcdnIpaDomainRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDcdnIpaDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDcdnIpaDomainResponse>(await this.doRPCRequest("UpdateDcdnIpaDomain", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDcdnIpaDomainResponse({}));
  }

  async updateDcdnIpaDomain(request: UpdateDcdnIpaDomainRequest): Promise<UpdateDcdnIpaDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDcdnIpaDomainWithOptions(request, runtime);
  }

  async verifyDcdnDomainOwnerWithOptions(request: VerifyDcdnDomainOwnerRequest, runtime: $Util.RuntimeOptions): Promise<VerifyDcdnDomainOwnerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyDcdnDomainOwnerResponse>(await this.doRPCRequest("VerifyDcdnDomainOwner", "2018-01-15", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyDcdnDomainOwnerResponse({}));
  }

  async verifyDcdnDomainOwner(request: VerifyDcdnDomainOwnerRequest): Promise<VerifyDcdnDomainOwnerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyDcdnDomainOwnerWithOptions(request, runtime);
  }

}
