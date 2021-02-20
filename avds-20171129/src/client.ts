// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddAssetsRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  startAfterVerified?: boolean;
  assetGroupId?: string;
  assets?: string[];
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      startAfterVerified: 'StartAfterVerified',
      assetGroupId: 'AssetGroupId',
      assets: 'Assets',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      startAfterVerified: 'boolean',
      assetGroupId: 'string',
      assets: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAssetsResponseBody extends $tea.Model {
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

export class AddAssetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddAssetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddAssetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAssetTagsRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  assets?: string[];
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
      assets: 'Assets',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
      assets: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddAssetTagsResponseBody extends $tea.Model {
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

export class AddAssetTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddAssetTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddAssetTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrgDomainsRequest extends $tea.Model {
  sourceIp?: string;
  orgId?: number;
  domains?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      orgId: 'OrgId',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      orgId: 'number',
      domains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrgDomainsResponseBody extends $tea.Model {
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

export class AddOrgDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddOrgDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddOrgDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrgHostsRequest extends $tea.Model {
  sourceIp?: string;
  orgId?: number;
  hosts?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      orgId: 'OrgId',
      hosts: 'Hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      orgId: 'number',
      hosts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrgHostsResponseBody extends $tea.Model {
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

export class AddOrgHostsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddOrgHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddOrgHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrgSubdomainsRequest extends $tea.Model {
  sourceIp?: string;
  orgId?: number;
  subdomains?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      orgId: 'OrgId',
      subdomains: 'Subdomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      orgId: 'number',
      subdomains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrgSubdomainsResponseBody extends $tea.Model {
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

export class AddOrgSubdomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddOrgSubdomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddOrgSubdomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrgWebPathsRequest extends $tea.Model {
  sourceIp?: string;
  orgId?: number;
  URLs?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      orgId: 'OrgId',
      URLs: 'URLs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      orgId: 'number',
      URLs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddOrgWebPathsResponseBody extends $tea.Model {
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

export class AddOrgWebPathsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddOrgWebPathsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddOrgWebPathsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAvdsBagOrderRequest extends $tea.Model {
  period?: number;
  periodUnit?: string;
  autoPay?: boolean;
  autoUseCoupon?: boolean;
  flowoutSpec?: string;
  pack?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoPay: 'AutoPay',
      autoUseCoupon: 'AutoUseCoupon',
      flowoutSpec: 'FlowoutSpec',
      pack: 'Pack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
      periodUnit: 'string',
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
      flowoutSpec: 'string',
      pack: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAvdsBagOrderResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAvdsBagOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAvdsBagOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAvdsBagOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAvdsOrderRequest extends $tea.Model {
  period?: number;
  periodUnit?: string;
  autoPay?: boolean;
  autoUseCoupon?: boolean;
  siteNum?: string;
  serviceVersion?: string;
  urlNum?: string;
  addVulNum?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoPay: 'AutoPay',
      autoUseCoupon: 'AutoUseCoupon',
      siteNum: 'SiteNum',
      serviceVersion: 'ServiceVersion',
      urlNum: 'UrlNum',
      addVulNum: 'AddVulNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
      periodUnit: 'string',
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
      siteNum: 'string',
      serviceVersion: 'string',
      urlNum: 'string',
      addVulNum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAvdsOrderResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAvdsOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAvdsOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAvdsOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAvdsPublicOrderRequest extends $tea.Model {
  autoPay?: boolean;
  autoUseCoupon?: boolean;
  nameTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoUseCoupon: 'AutoUseCoupon',
      nameTime: 'NameTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoUseCoupon: 'boolean',
      nameTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAvdsPublicOrderResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAvdsPublicOrderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAvdsPublicOrderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAvdsPublicOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationRequest extends $tea.Model {
  sourceIp?: string;
  name?: string;
  description?: string;
  domains?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      name: 'Name',
      description: 'Description',
      domains: 'Domains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      name: 'string',
      description: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrganizationResponseBody extends $tea.Model {
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

export class CreateOrganizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOrganizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOrganizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSessionRequest extends $tea.Model {
  sourceIp?: string;
  asset?: string;
  TTL?: number;
  loginSession?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      asset: 'Asset',
      TTL: 'TTL',
      loginSession: 'LoginSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      asset: 'string',
      TTL: 'number',
      loginSession: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSessionResponseBody extends $tea.Model {
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

export class CreateSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAssetsRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  assetIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      assetIds: 'AssetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      assetIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAssetsResponseBody extends $tea.Model {
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

export class DeleteAssetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAssetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAssetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOrganizationsRequest extends $tea.Model {
  sourceIp?: string;
  orgIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      orgIds: 'OrgIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      orgIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOrganizationsResponseBody extends $tea.Model {
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

export class DeleteOrganizationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteOrganizationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteOrganizationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOrgAttackSurfaceRecordsRequest extends $tea.Model {
  sourceIp?: string;
  source?: string;
  orgId?: number;
  records?: number[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      source: 'Source',
      orgId: 'OrgId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      source: 'string',
      orgId: 'number',
      records: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOrgAttackSurfaceRecordsResponseBody extends $tea.Model {
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

export class DeleteOrgAttackSurfaceRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteOrgAttackSurfaceRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteOrgAttackSurfaceRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSessionRequest extends $tea.Model {
  sourceIp?: string;
  sessionId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      sessionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSessionResponseBody extends $tea.Model {
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

export class DeleteSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserAttackSurfaceRecordsRequest extends $tea.Model {
  sourceIp?: string;
  source?: string;
  records?: number[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      source: 'Source',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      source: 'string',
      records: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserAttackSurfaceRecordsResponseBody extends $tea.Model {
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

export class DeleteUserAttackSurfaceRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteUserAttackSurfaceRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUserAttackSurfaceRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllVulnerabilitiesRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  scanId?: string;
  name?: string;
  search?: string;
  lang?: string;
  severity?: number;
  status?: string;
  beginTime?: number;
  endTime?: number;
  taskId?: number;
  category?: string;
  module?: string;
  vulType?: number;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      scanId: 'ScanId',
      name: 'Name',
      search: 'Search',
      lang: 'Lang',
      severity: 'Severity',
      status: 'Status',
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      taskId: 'TaskId',
      category: 'Category',
      module: 'Module',
      vulType: 'VulType',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      scanId: 'string',
      name: 'string',
      search: 'string',
      lang: 'string',
      severity: 'number',
      status: 'string',
      beginTime: 'number',
      endTime: 'number',
      taskId: 'number',
      category: 'string',
      module: 'string',
      vulType: 'number',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllVulnerabilitiesResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageCount?: number;
  currentPage?: number;
  list?: DescribeAllVulnerabilitiesResponseBodyList[];
  count?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      list: 'List',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageCount: 'number',
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': DescribeAllVulnerabilitiesResponseBodyList },
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllVulnerabilitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAllVulnerabilitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAllVulnerabilitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetsRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  status?: string;
  search?: string;
  assetGroupId?: string;
  source?: string;
  gmtCreateFrom?: number;
  gmtCreateTo?: number;
  currentPage?: number;
  pageSize?: number;
  types?: string[];
  assets?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      search: 'Search',
      assetGroupId: 'AssetGroupId',
      source: 'Source',
      gmtCreateFrom: 'GmtCreateFrom',
      gmtCreateTo: 'GmtCreateTo',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      types: 'Types',
      assets: 'Assets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      search: 'string',
      assetGroupId: 'string',
      source: 'string',
      gmtCreateFrom: 'number',
      gmtCreateTo: 'number',
      currentPage: 'number',
      pageSize: 'number',
      types: { 'type': 'array', 'itemType': 'string' },
      assets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageCount?: number;
  currentPage?: number;
  list?: DescribeAssetsResponseBodyList[];
  count?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      list: 'List',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageCount: 'number',
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': DescribeAssetsResponseBodyList },
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAssetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAssetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackSurfacesFacetsRequest extends $tea.Model {
  sourceIp?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackSurfacesFacetsResponseBody extends $tea.Model {
  domains?: number;
  hosts?: number;
  webPaths?: number;
  requestId?: string;
  DNSMap?: number;
  webServers?: number;
  ports?: number;
  crawlerRequests?: number;
  webTechs?: number;
  subdomains?: number;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      hosts: 'Hosts',
      webPaths: 'WebPaths',
      requestId: 'RequestId',
      DNSMap: 'DNSMap',
      webServers: 'WebServers',
      ports: 'Ports',
      crawlerRequests: 'CrawlerRequests',
      webTechs: 'WebTechs',
      subdomains: 'Subdomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: 'number',
      hosts: 'number',
      webPaths: 'number',
      requestId: 'string',
      DNSMap: 'number',
      webServers: 'number',
      ports: 'number',
      crawlerRequests: 'number',
      webTechs: 'number',
      subdomains: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttackSurfacesFacetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAttackSurfacesFacetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAttackSurfacesFacetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrawlerRequestsRequest extends $tea.Model {
  sourceIp?: string;
  taskId?: number;
  asset?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
      asset: 'Asset',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      taskId: 'number',
      asset: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrawlerRequestsResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  records?: DescribeCrawlerRequestsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      records: { 'type': 'array', 'itemType': DescribeCrawlerRequestsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrawlerRequestsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCrawlerRequestsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCrawlerRequestsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSMapRequest extends $tea.Model {
  sourceIp?: string;
  taskId?: number;
  asset?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
      asset: 'Asset',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      taskId: 'number',
      asset: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSMapResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  records?: DescribeDNSMapResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      records: { 'type': 'array', 'itemType': DescribeDNSMapResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSMapResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDNSMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDNSMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackSurfacesFacetsRequest extends $tea.Model {
  sourceIp?: string;
  taskId?: number;
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      taskId: 'number',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackSurfacesFacetsResponseBody extends $tea.Model {
  webPaths?: number;
  requestId?: string;
  webServers?: number;
  crawlerRequests?: number;
  webTechs?: number;
  static names(): { [key: string]: string } {
    return {
      webPaths: 'WebPaths',
      requestId: 'RequestId',
      webServers: 'WebServers',
      crawlerRequests: 'CrawlerRequests',
      webTechs: 'WebTechs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webPaths: 'number',
      requestId: 'string',
      webServers: 'number',
      crawlerRequests: 'number',
      webTechs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainAttackSurfacesFacetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainAttackSurfacesFacetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainAttackSurfacesFacetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsRequest extends $tea.Model {
  sourceIp?: string;
  taskId?: number;
  asset?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
      asset: 'Asset',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      taskId: 'number',
      asset: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  records?: DescribeDomainsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      records: { 'type': 'array', 'itemType': DescribeDomainsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAttackSurfacesFacetsRequest extends $tea.Model {
  sourceIp?: string;
  taskId?: number;
  host?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
      host: 'Host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      taskId: 'number',
      host: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAttackSurfacesFacetsResponseBody extends $tea.Model {
  hosts?: number;
  webPaths?: number;
  requestId?: string;
  ports?: number;
  crawlerRequests?: number;
  webTechs?: number;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      webPaths: 'WebPaths',
      requestId: 'RequestId',
      ports: 'Ports',
      crawlerRequests: 'CrawlerRequests',
      webTechs: 'WebTechs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: 'number',
      webPaths: 'number',
      requestId: 'string',
      ports: 'number',
      crawlerRequests: 'number',
      webTechs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostAttackSurfacesFacetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHostAttackSurfacesFacetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHostAttackSurfacesFacetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostsRequest extends $tea.Model {
  sourceIp?: string;
  taskId?: number;
  asset?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
      asset: 'Asset',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      taskId: 'number',
      asset: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostsResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  records?: DescribeHostsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      records: { 'type': 'array', 'itemType': DescribeHostsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListSessionsRequest extends $tea.Model {
  sourceIp?: string;
  asset?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      asset: 'Asset',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      asset: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListSessionsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  sessions?: DescribeListSessionsResponseBodySessions[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      sessions: 'Sessions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      sessions: { 'type': 'array', 'itemType': DescribeListSessionsResponseBodySessions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListSessionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeListSessionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeListSessionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgAttackSurfaceDetailsRequest extends $tea.Model {
  sourceIp?: string;
  recordId?: number;
  orgId?: number;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      recordId: 'RecordId',
      orgId: 'OrgId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      recordId: 'number',
      orgId: 'number',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgAttackSurfaceDetailsResponseBody extends $tea.Model {
  lastScannedAt?: number;
  requestId?: string;
  firstScannedAt?: number;
  occurrences?: number;
  static names(): { [key: string]: string } {
    return {
      lastScannedAt: 'LastScannedAt',
      requestId: 'RequestId',
      firstScannedAt: 'FirstScannedAt',
      occurrences: 'Occurrences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastScannedAt: 'number',
      requestId: 'string',
      firstScannedAt: 'number',
      occurrences: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgAttackSurfaceDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOrgAttackSurfaceDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOrgAttackSurfaceDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgInfoRequest extends $tea.Model {
  sourceIp?: string;
  orgId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      orgId: 'OrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      orgId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgInfoResponseBody extends $tea.Model {
  orgId?: number;
  description?: string;
  requestId?: string;
  createdAt?: number;
  aliUid?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      description: 'Description',
      requestId: 'RequestId',
      createdAt: 'CreatedAt',
      aliUid: 'AliUid',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'number',
      description: 'string',
      requestId: 'string',
      createdAt: 'number',
      aliUid: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOrgInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOrgInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortsRequest extends $tea.Model {
  sourceIp?: string;
  taskId?: number;
  asset?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
      asset: 'Asset',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      taskId: 'number',
      asset: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortsResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  records?: DescribePortsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      records: { 'type': 'array', 'itemType': DescribePortsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePortsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePortsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanSessionsRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  scanId?: string;
  currentPage?: number;
  pageSize?: number;
  search?: string;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      scanId: 'ScanId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      search: 'Search',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      scanId: 'string',
      currentPage: 'number',
      pageSize: 'number',
      search: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanSessionsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageCount?: number;
  currentPage?: number;
  list?: DescribeScanSessionsResponseBodyList[];
  count?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      list: 'List',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageCount: 'number',
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': DescribeScanSessionsResponseBodyList },
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanSessionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScanSessionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScanSessionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionRequest extends $tea.Model {
  sourceIp?: string;
  sessionId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      sessionId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionResponseBody extends $tea.Model {
  requestId?: string;
  session?: DescribeSessionResponseBodySession;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      session: 'Session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      session: DescribeSessionResponseBodySession,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubdomainsRequest extends $tea.Model {
  sourceIp?: string;
  taskId?: number;
  asset?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
      asset: 'Asset',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      taskId: 'number',
      asset: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubdomainsResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  records?: DescribeSubdomainsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      records: { 'type': 'array', 'itemType': DescribeSubdomainsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubdomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSubdomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSubdomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskBriefInfoRequest extends $tea.Model {
  sourceIp?: string;
  taskId?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      taskId: 'number',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskBriefInfoResponseBody extends $tea.Model {
  risksFacets?: DescribeTaskBriefInfoResponseBodyRisksFacets;
  requestId?: string;
  brief?: DescribeTaskBriefInfoResponseBodyBrief;
  static names(): { [key: string]: string } {
    return {
      risksFacets: 'RisksFacets',
      requestId: 'RequestId',
      brief: 'Brief',
    };
  }

  static types(): { [key: string]: any } {
    return {
      risksFacets: DescribeTaskBriefInfoResponseBodyRisksFacets,
      requestId: 'string',
      brief: DescribeTaskBriefInfoResponseBodyBrief,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskBriefInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTaskBriefInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTaskBriefInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTagsRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  lang?: string;
  search?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      lang: 'Lang',
      search: 'Search',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      lang: 'string',
      search: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTagsResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageCount?: number;
  currentPage?: number;
  list?: DescribeUserTagsResponseBodyList[];
  count?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageCount: 'PageCount',
      currentPage: 'CurrentPage',
      list: 'List',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageCount: 'number',
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': DescribeUserTagsResponseBodyList },
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulnerabilityRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  id?: number;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      id: 'number',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulnerabilityResponseBody extends $tea.Model {
  impact?: string;
  args?: string;
  description?: string;
  requestId?: string;
  lastDiscoveredAt?: number;
  poc?: string;
  reference?: string;
  hostname?: string;
  severity?: number;
  data?: string;
  vulnerability?: DescribeVulnerabilityResponseBodyVulnerability;
  success?: boolean;
  name?: string;
  target?: string;
  id?: number;
  solution?: string;
  static names(): { [key: string]: string } {
    return {
      impact: 'Impact',
      args: 'Args',
      description: 'Description',
      requestId: 'RequestId',
      lastDiscoveredAt: 'LastDiscoveredAt',
      poc: 'Poc',
      reference: 'Reference',
      hostname: 'Hostname',
      severity: 'Severity',
      data: 'Data',
      vulnerability: 'Vulnerability',
      success: 'Success',
      name: 'Name',
      target: 'Target',
      id: 'Id',
      solution: 'Solution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      impact: 'string',
      args: 'string',
      description: 'string',
      requestId: 'string',
      lastDiscoveredAt: 'number',
      poc: 'string',
      reference: 'string',
      hostname: 'string',
      severity: 'number',
      data: 'string',
      vulnerability: DescribeVulnerabilityResponseBodyVulnerability,
      success: 'boolean',
      name: 'string',
      target: 'string',
      id: 'number',
      solution: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulnerabilityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVulnerabilityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVulnerabilityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPathsRequest extends $tea.Model {
  sourceIp?: string;
  taskId?: number;
  asset?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
      asset: 'Asset',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      taskId: 'number',
      asset: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPathsResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  records?: DescribeWebPathsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      records: { 'type': 'array', 'itemType': DescribeWebPathsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPathsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebPathsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebPathsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebServersRequest extends $tea.Model {
  sourceIp?: string;
  taskId?: number;
  asset?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
      asset: 'Asset',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      taskId: 'number',
      asset: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebServersResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  records?: DescribeWebServersResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      records: { 'type': 'array', 'itemType': DescribeWebServersResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebServersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebTechsRequest extends $tea.Model {
  sourceIp?: string;
  taskId?: number;
  asset?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
      asset: 'Asset',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      taskId: 'number',
      asset: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebTechsResponseBody extends $tea.Model {
  requestId?: string;
  total?: number;
  records?: DescribeWebTechsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      total: 'Total',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      total: 'number',
      records: { 'type': 'array', 'itemType': DescribeWebTechsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebTechsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWebTechsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWebTechsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditSessionRequest extends $tea.Model {
  sourceIp?: string;
  sessionId?: number;
  asset?: string;
  TTL?: number;
  loginSession?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      sessionId: 'SessionId',
      asset: 'Asset',
      TTL: 'TTL',
      loginSession: 'LoginSession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      sessionId: 'number',
      asset: 'string',
      TTL: 'number',
      loginSession: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditSessionResponseBody extends $tea.Model {
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

export class EditSessionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EditSessionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EditSessionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVulReportRequest extends $tea.Model {
  sourceIp?: string;
  resourceOwnerId?: number;
  format?: string;
  lang?: string;
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      resourceOwnerId: 'ResourceOwnerId',
      format: 'format',
      lang: 'lang',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      resourceOwnerId: 'number',
      format: 'string',
      lang: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateVulReportResponseBody extends $tea.Model {
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

export class GenerateVulReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateVulReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateVulReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgDNSMapRequest extends $tea.Model {
  sourceIp?: string;
  orgId?: number;
  search?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      orgId: 'OrgId',
      search: 'Search',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      orgId: 'number',
      search: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgDNSMapResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  records?: ListOrgDNSMapResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      records: { 'type': 'array', 'itemType': ListOrgDNSMapResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgDNSMapResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOrgDNSMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOrgDNSMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgDomainsRequest extends $tea.Model {
  sourceIp?: string;
  search?: string;
  orgId?: number;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      search: 'Search',
      orgId: 'OrgId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      search: 'string',
      orgId: 'number',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgDomainsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  records?: ListOrgDomainsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      records: { 'type': 'array', 'itemType': ListOrgDomainsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOrgDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOrgDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgHostsRequest extends $tea.Model {
  sourceIp?: string;
  search?: string;
  orgId?: number;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      search: 'Search',
      orgId: 'OrgId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      search: 'string',
      orgId: 'number',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgHostsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  records?: ListOrgHostsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      records: { 'type': 'array', 'itemType': ListOrgHostsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgHostsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOrgHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOrgHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgPortsRequest extends $tea.Model {
  sourceIp?: string;
  search?: string;
  orgId?: number;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      search: 'Search',
      orgId: 'OrgId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      search: 'string',
      orgId: 'number',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgPortsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  records?: ListOrgPortsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      records: { 'type': 'array', 'itemType': ListOrgPortsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgPortsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOrgPortsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOrgPortsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgRiskyAssetsRequest extends $tea.Model {
  sourceIp?: string;
  orgId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      orgId: 'OrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      orgId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgRiskyAssetsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  assets?: ListOrgRiskyAssetsResponseBodyAssets[];
  total?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      assets: 'Assets',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      assets: { 'type': 'array', 'itemType': ListOrgRiskyAssetsResponseBodyAssets },
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgRiskyAssetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOrgRiskyAssetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOrgRiskyAssetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgSubdomainsRequest extends $tea.Model {
  sourceIp?: string;
  search?: string;
  orgId?: number;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      search: 'Search',
      orgId: 'OrgId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      search: 'string',
      orgId: 'number',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgSubdomainsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  records?: ListOrgSubdomainsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      records: { 'type': 'array', 'itemType': ListOrgSubdomainsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgSubdomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOrgSubdomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOrgSubdomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgVulFacetsRequest extends $tea.Model {
  sourceIp?: string;
  orgId?: number;
  asset?: string;
  currentPage?: number;
  lang?: string;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      orgId: 'OrgId',
      asset: 'Asset',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      orgId: 'number',
      asset: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgVulFacetsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  total?: number;
  vuls?: ListOrgVulFacetsResponseBodyVuls[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      total: 'Total',
      vuls: 'Vuls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      total: 'number',
      vuls: { 'type': 'array', 'itemType': ListOrgVulFacetsResponseBodyVuls },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgVulFacetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOrgVulFacetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOrgVulFacetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgWebPathsRequest extends $tea.Model {
  sourceIp?: string;
  search?: string;
  orgId?: number;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      search: 'Search',
      orgId: 'OrgId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      search: 'string',
      orgId: 'number',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgWebPathsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  records?: ListOrgWebPathsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      records: { 'type': 'array', 'itemType': ListOrgWebPathsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgWebPathsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOrgWebPathsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOrgWebPathsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgWebTechsRequest extends $tea.Model {
  sourceIp?: string;
  search?: string;
  orgId?: number;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      search: 'Search',
      orgId: 'OrgId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      search: 'string',
      orgId: 'number',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgWebTechsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  records?: ListOrgWebTechsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      records: { 'type': 'array', 'itemType': ListOrgWebTechsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgWebTechsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOrgWebTechsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOrgWebTechsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDNSMapRequest extends $tea.Model {
  sourceIp?: string;
  search?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      search: 'Search',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      search: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDNSMapResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  records?: ListUserDNSMapResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      records: { 'type': 'array', 'itemType': ListUserDNSMapResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDNSMapResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserDNSMapResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserDNSMapResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDNSMapHistoriesRequest extends $tea.Model {
  sourceIp?: string;
  id?: number;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      id: 'Id',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      id: 'number',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDNSMapHistoriesResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  records?: ListUserDNSMapHistoriesResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      records: { 'type': 'array', 'itemType': ListUserDNSMapHistoriesResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDNSMapHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserDNSMapHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserDNSMapHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDomainsRequest extends $tea.Model {
  sourceIp?: string;
  search?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      search: 'Search',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      search: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDomainsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  records?: ListUserDomainsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      records: { 'type': 'array', 'itemType': ListUserDomainsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserHostsRequest extends $tea.Model {
  sourceIp?: string;
  search?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      search: 'Search',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      search: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserHostsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  records?: ListUserHostsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      records: { 'type': 'array', 'itemType': ListUserHostsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserHostsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserHostsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserHostsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserOrganizationsRequest extends $tea.Model {
  sourceIp?: string;
  search?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      search: 'Search',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      search: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserOrganizationsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  organizations?: ListUserOrganizationsResponseBodyOrganizations[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      organizations: 'Organizations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      organizations: { 'type': 'array', 'itemType': ListUserOrganizationsResponseBodyOrganizations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserOrganizationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserOrganizationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserOrganizationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPortsRequest extends $tea.Model {
  sourceIp?: string;
  search?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      search: 'Search',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      search: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPortsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  records?: ListUserPortsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      records: { 'type': 'array', 'itemType': ListUserPortsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPortsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserPortsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserPortsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSubdomainsRequest extends $tea.Model {
  sourceIp?: string;
  search?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      search: 'Search',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      search: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSubdomainsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  records?: ListUserSubdomainsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      records: { 'type': 'array', 'itemType': ListUserSubdomainsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSubdomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserSubdomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserSubdomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserWebPathsRequest extends $tea.Model {
  sourceIp?: string;
  search?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      search: 'Search',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      search: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserWebPathsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  records?: ListUserWebPathsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      records: { 'type': 'array', 'itemType': ListUserWebPathsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserWebPathsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserWebPathsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserWebPathsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserWebTechsRequest extends $tea.Model {
  sourceIp?: string;
  search?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      search: 'Search',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      search: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserWebTechsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  records?: ListUserWebTechsResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      records: { 'type': 'array', 'itemType': ListUserWebTechsResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserWebTechsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserWebTechsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserWebTechsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOrganizationRequest extends $tea.Model {
  sourceIp?: string;
  name?: string;
  description?: string;
  orgId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      name: 'Name',
      description: 'Description',
      orgId: 'OrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      name: 'string',
      description: 'string',
      orgId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOrganizationResponseBody extends $tea.Model {
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

export class ModifyOrganizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyOrganizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyOrganizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagAssetsByRecordsRequest extends $tea.Model {
  sourceIp?: string;
  source?: string;
  assetType?: string;
  tags?: string[];
  recordIds?: number[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      source: 'Source',
      assetType: 'AssetType',
      tags: 'Tags',
      recordIds: 'RecordIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      source: 'string',
      assetType: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      recordIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagAssetsByRecordsResponseBody extends $tea.Model {
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

export class TagAssetsByRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagAssetsByRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagAssetsByRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagAssetsBySearchRequest extends $tea.Model {
  sourceIp?: string;
  source?: string;
  search?: string;
  assetType?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      source: 'Source',
      search: 'Search',
      assetType: 'AssetType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      source: 'string',
      search: 'string',
      assetType: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagAssetsBySearchResponseBody extends $tea.Model {
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

export class TagAssetsBySearchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagAssetsBySearchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagAssetsBySearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllVulnerabilitiesResponseBodyList extends $tea.Model {
  status?: number;
  severity?: number;
  lastDiscoveredAt?: number;
  hostname?: string;
  name?: string;
  taskId?: number;
  vulnerabilityTypeDes?: string;
  target?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      severity: 'Severity',
      lastDiscoveredAt: 'LastDiscoveredAt',
      hostname: 'Hostname',
      name: 'Name',
      taskId: 'TaskId',
      vulnerabilityTypeDes: 'VulnerabilityTypeDes',
      target: 'Target',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      severity: 'number',
      lastDiscoveredAt: 'number',
      hostname: 'string',
      name: 'string',
      taskId: 'number',
      vulnerabilityTypeDes: 'string',
      target: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAssetsResponseBodyList extends $tea.Model {
  type?: string;
  lastScanDate?: number;
  expireTime?: number;
  assetId?: string;
  gmtCreate?: number;
  source?: string;
  asset?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      lastScanDate: 'LastScanDate',
      expireTime: 'ExpireTime',
      assetId: 'AssetId',
      gmtCreate: 'GmtCreate',
      source: 'Source',
      asset: 'Asset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      lastScanDate: 'number',
      expireTime: 'number',
      assetId: 'string',
      gmtCreate: 'number',
      source: 'string',
      asset: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrawlerRequestsResponseBodyRecords extends $tea.Model {
  index?: number;
  data?: string;
  URL?: string;
  method?: string;
  updatedAt?: number;
  cookies?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      data: 'Data',
      URL: 'URL',
      method: 'Method',
      updatedAt: 'UpdatedAt',
      cookies: 'Cookies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      data: 'string',
      URL: 'string',
      method: 'string',
      updatedAt: 'number',
      cookies: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDNSMapResponseBodyRecords extends $tea.Model {
  index?: number;
  type?: string;
  domain?: string;
  updatedAt?: number;
  record?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      type: 'Type',
      domain: 'Domain',
      updatedAt: 'UpdatedAt',
      record: 'Record',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      type: 'string',
      domain: 'string',
      updatedAt: 'number',
      record: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainsResponseBodyRecords extends $tea.Model {
  index?: number;
  domain?: string;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      domain: 'Domain',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      domain: 'string',
      updatedAt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHostsResponseBodyRecords extends $tea.Model {
  index?: number;
  OS?: string;
  hostname?: string;
  updatedAt?: number;
  IP?: string;
  isUp?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      OS: 'OS',
      hostname: 'Hostname',
      updatedAt: 'UpdatedAt',
      IP: 'IP',
      isUp: 'IsUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      OS: 'string',
      hostname: 'string',
      updatedAt: 'number',
      IP: 'string',
      isUp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListSessionsResponseBodySessions extends $tea.Model {
  TTL?: number;
  expired?: number;
  createdAt?: number;
  aliUid?: number;
  modifiedAt?: number;
  loginSession?: string;
  sessionId?: number;
  asset?: string;
  static names(): { [key: string]: string } {
    return {
      TTL: 'TTL',
      expired: 'Expired',
      createdAt: 'CreatedAt',
      aliUid: 'AliUid',
      modifiedAt: 'ModifiedAt',
      loginSession: 'LoginSession',
      sessionId: 'SessionId',
      asset: 'Asset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TTL: 'number',
      expired: 'number',
      createdAt: 'number',
      aliUid: 'number',
      modifiedAt: 'number',
      loginSession: 'string',
      sessionId: 'number',
      asset: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePortsResponseBodyRecords extends $tea.Model {
  service?: string;
  index?: number;
  fingerprint?: string;
  version?: string;
  product?: string;
  protocol?: string;
  updatedAt?: number;
  port?: string;
  IP?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      index: 'Index',
      fingerprint: 'Fingerprint',
      version: 'Version',
      product: 'Product',
      protocol: 'Protocol',
      updatedAt: 'UpdatedAt',
      port: 'Port',
      IP: 'IP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      index: 'number',
      fingerprint: 'string',
      version: 'string',
      product: 'string',
      protocol: 'string',
      updatedAt: 'number',
      port: 'string',
      IP: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanSessionsResponseBodyList extends $tea.Model {
  reportStatus?: string;
  finishedAt?: number;
  targets?: string[];
  createdAt?: number;
  scanId?: string;
  period?: string;
  triggerType?: string;
  reportUrl?: string;
  jobStatus?: string;
  runPercent?: number;
  interval?: number;
  name?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      reportStatus: 'ReportStatus',
      finishedAt: 'FinishedAt',
      targets: 'Targets',
      createdAt: 'CreatedAt',
      scanId: 'ScanId',
      period: 'Period',
      triggerType: 'TriggerType',
      reportUrl: 'ReportUrl',
      jobStatus: 'JobStatus',
      runPercent: 'RunPercent',
      interval: 'Interval',
      name: 'Name',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportStatus: 'string',
      finishedAt: 'number',
      targets: { 'type': 'array', 'itemType': 'string' },
      createdAt: 'number',
      scanId: 'string',
      period: 'string',
      triggerType: 'string',
      reportUrl: 'string',
      jobStatus: 'string',
      runPercent: 'number',
      interval: 'number',
      name: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSessionResponseBodySession extends $tea.Model {
  TTL?: number;
  expired?: number;
  createdAt?: number;
  aliUid?: number;
  modifiedAt?: number;
  loginSession?: string;
  sessionId?: number;
  asset?: string;
  static names(): { [key: string]: string } {
    return {
      TTL: 'TTL',
      expired: 'Expired',
      createdAt: 'CreatedAt',
      aliUid: 'AliUid',
      modifiedAt: 'ModifiedAt',
      loginSession: 'LoginSession',
      sessionId: 'SessionId',
      asset: 'Asset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TTL: 'number',
      expired: 'number',
      createdAt: 'number',
      aliUid: 'number',
      modifiedAt: 'number',
      loginSession: 'string',
      sessionId: 'number',
      asset: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubdomainsResponseBodyRecords extends $tea.Model {
  index?: number;
  domain?: string;
  updatedAt?: number;
  rootDomain?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      domain: 'Domain',
      updatedAt: 'UpdatedAt',
      rootDomain: 'RootDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      domain: 'string',
      updatedAt: 'number',
      rootDomain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskBriefInfoResponseBodyRisksFacets extends $tea.Model {
  medium?: number;
  low?: number;
  total?: number;
  high?: number;
  info?: number;
  static names(): { [key: string]: string } {
    return {
      medium: 'Medium',
      low: 'Low',
      total: 'Total',
      high: 'High',
      info: 'Info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      medium: 'number',
      low: 'number',
      total: 'number',
      high: 'number',
      info: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskBriefInfoResponseBodyBriefActionRunsFacet extends $tea.Model {
  completed?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTaskBriefInfoResponseBodyBrief extends $tea.Model {
  finishedAt?: number;
  progress?: number;
  description?: string;
  createdAt?: string;
  actionRunsFacet?: DescribeTaskBriefInfoResponseBodyBriefActionRunsFacet;
  static names(): { [key: string]: string } {
    return {
      finishedAt: 'FinishedAt',
      progress: 'Progress',
      description: 'Description',
      createdAt: 'CreatedAt',
      actionRunsFacet: 'ActionRunsFacet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedAt: 'number',
      progress: 'number',
      description: 'string',
      createdAt: 'string',
      actionRunsFacet: DescribeTaskBriefInfoResponseBodyBriefActionRunsFacet,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserTagsResponseBodyList extends $tea.Model {
  assetCount?: number;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      assetCount: 'AssetCount',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetCount: 'number',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulnerabilityResponseBodyVulnerability extends $tea.Model {
  severity?: number;
  status?: number;
  data?: string;
  args?: string;
  owasp?: string;
  impact?: string;
  cwe?: string;
  hostname?: string;
  reference?: string;
  wasc?: string;
  lastDiscoveredAt?: number;
  description?: string;
  commonType?: string;
  solution?: string;
  name?: string;
  target?: string;
  poc?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      severity: 'Severity',
      status: 'Status',
      data: 'Data',
      args: 'Args',
      owasp: 'Owasp',
      impact: 'Impact',
      cwe: 'Cwe',
      hostname: 'Hostname',
      reference: 'Reference',
      wasc: 'Wasc',
      lastDiscoveredAt: 'LastDiscoveredAt',
      description: 'Description',
      commonType: 'CommonType',
      solution: 'Solution',
      name: 'Name',
      target: 'Target',
      poc: 'Poc',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      severity: 'number',
      status: 'number',
      data: 'string',
      args: 'string',
      owasp: 'string',
      impact: 'string',
      cwe: 'string',
      hostname: 'string',
      reference: 'string',
      wasc: 'string',
      lastDiscoveredAt: 'number',
      description: 'string',
      commonType: 'string',
      solution: 'string',
      name: 'string',
      target: 'string',
      poc: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebPathsResponseBodyRecords extends $tea.Model {
  index?: number;
  extension?: string;
  site?: string;
  path?: string;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      extension: 'Extension',
      site: 'Site',
      path: 'Path',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      extension: 'string',
      site: 'string',
      path: 'string',
      updatedAt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebServersResponseBodyRecords extends $tea.Model {
  index?: number;
  host?: string;
  scheme?: string;
  updatedAt?: number;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      host: 'Host',
      scheme: 'Scheme',
      updatedAt: 'UpdatedAt',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      host: 'string',
      scheme: 'string',
      updatedAt: 'number',
      port: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebTechsResponseBodyRecords extends $tea.Model {
  index?: number;
  poweredBy?: string;
  version?: string;
  URL?: string;
  server?: string;
  updatedAt?: number;
  title?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      poweredBy: 'PoweredBy',
      version: 'Version',
      URL: 'URL',
      server: 'Server',
      updatedAt: 'UpdatedAt',
      title: 'Title',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      poweredBy: 'string',
      version: 'string',
      URL: 'string',
      server: 'string',
      updatedAt: 'number',
      title: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgDNSMapResponseBodyRecords extends $tea.Model {
  type?: string;
  index?: number;
  domain?: string;
  orgId?: number;
  subdomain?: string;
  updatedAt?: number;
  record?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      index: 'Index',
      domain: 'Domain',
      orgId: 'OrgId',
      subdomain: 'Subdomain',
      updatedAt: 'UpdatedAt',
      record: 'Record',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      index: 'number',
      domain: 'string',
      orgId: 'number',
      subdomain: 'string',
      updatedAt: 'number',
      record: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgDomainsResponseBodyRecords extends $tea.Model {
  index?: number;
  domain?: string;
  orgId?: number;
  updatedAt?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      domain: 'Domain',
      orgId: 'OrgId',
      updatedAt: 'UpdatedAt',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      domain: 'string',
      orgId: 'number',
      updatedAt: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgHostsResponseBodyRecords extends $tea.Model {
  index?: number;
  state?: string;
  orgId?: number;
  OS?: string;
  hostname?: string;
  updatedAt?: number;
  IP?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      state: 'State',
      orgId: 'OrgId',
      OS: 'OS',
      hostname: 'Hostname',
      updatedAt: 'UpdatedAt',
      IP: 'IP',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      state: 'string',
      orgId: 'number',
      OS: 'string',
      hostname: 'string',
      updatedAt: 'number',
      IP: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgPortsResponseBodyRecords extends $tea.Model {
  service?: string;
  index?: number;
  fingerprint?: string;
  version?: string;
  product?: string;
  protocol?: string;
  orgId?: number;
  updatedAt?: number;
  port?: number;
  IP?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      index: 'Index',
      fingerprint: 'Fingerprint',
      version: 'Version',
      product: 'Product',
      protocol: 'Protocol',
      orgId: 'OrgId',
      updatedAt: 'UpdatedAt',
      port: 'Port',
      IP: 'IP',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      index: 'number',
      fingerprint: 'string',
      version: 'string',
      product: 'string',
      protocol: 'string',
      orgId: 'number',
      updatedAt: 'number',
      port: 'number',
      IP: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgRiskyAssetsResponseBodyAssets extends $tea.Model {
  type?: string;
  asset?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      asset: 'Asset',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      asset: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgSubdomainsResponseBodyRecords extends $tea.Model {
  index?: number;
  domain?: string;
  orgId?: number;
  subdomain?: string;
  updatedAt?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      domain: 'Domain',
      orgId: 'OrgId',
      subdomain: 'Subdomain',
      updatedAt: 'UpdatedAt',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      domain: 'string',
      orgId: 'number',
      subdomain: 'string',
      updatedAt: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgVulFacetsResponseBodyVuls extends $tea.Model {
  index?: number;
  severity?: string;
  moduleID?: number;
  classification?: string;
  name?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      severity: 'Severity',
      moduleID: 'ModuleID',
      classification: 'Classification',
      name: 'Name',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      severity: 'string',
      moduleID: 'number',
      classification: 'string',
      name: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgWebPathsResponseBodyRecords extends $tea.Model {
  index?: number;
  orgId?: number;
  site?: string;
  path?: string;
  updatedAt?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      orgId: 'OrgId',
      site: 'Site',
      path: 'Path',
      updatedAt: 'UpdatedAt',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      orgId: 'number',
      site: 'string',
      path: 'string',
      updatedAt: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrgWebTechsResponseBodyRecords extends $tea.Model {
  index?: number;
  poweredBy?: string;
  version?: string;
  orgId?: number;
  URL?: string;
  server?: string;
  updatedAt?: number;
  title?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      poweredBy: 'PoweredBy',
      version: 'Version',
      orgId: 'OrgId',
      URL: 'URL',
      server: 'Server',
      updatedAt: 'UpdatedAt',
      title: 'Title',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      poweredBy: 'string',
      version: 'string',
      orgId: 'number',
      URL: 'string',
      server: 'string',
      updatedAt: 'number',
      title: 'string',
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDNSMapResponseBodyRecords extends $tea.Model {
  index?: number;
  type?: string;
  domain?: string;
  subdomain?: string;
  updatedAt?: number;
  record?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      type: 'Type',
      domain: 'Domain',
      subdomain: 'Subdomain',
      updatedAt: 'UpdatedAt',
      record: 'Record',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      type: 'string',
      domain: 'string',
      subdomain: 'string',
      updatedAt: 'number',
      record: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDNSMapHistoriesResponseBodyRecords extends $tea.Model {
  index?: number;
  type?: string;
  domain?: string;
  createdAt?: number;
  subdomain?: string;
  record?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      type: 'Type',
      domain: 'Domain',
      createdAt: 'CreatedAt',
      subdomain: 'Subdomain',
      record: 'Record',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      type: 'string',
      domain: 'string',
      createdAt: 'number',
      subdomain: 'string',
      record: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserDomainsResponseBodyRecords extends $tea.Model {
  index?: number;
  domain?: string;
  updatedAt?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      domain: 'Domain',
      updatedAt: 'UpdatedAt',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      domain: 'string',
      updatedAt: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserHostsResponseBodyRecords extends $tea.Model {
  index?: number;
  OS?: string;
  state?: string;
  hostname?: string;
  updatedAt?: number;
  IP?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      OS: 'OS',
      state: 'State',
      hostname: 'Hostname',
      updatedAt: 'UpdatedAt',
      IP: 'IP',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      OS: 'string',
      state: 'string',
      hostname: 'string',
      updatedAt: 'number',
      IP: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserOrganizationsResponseBodyOrganizations extends $tea.Model {
  index?: number;
  description?: string;
  orgId?: number;
  createdAt?: number;
  updatedAt?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      description: 'Description',
      orgId: 'OrgId',
      createdAt: 'CreatedAt',
      updatedAt: 'UpdatedAt',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      description: 'string',
      orgId: 'number',
      createdAt: 'number',
      updatedAt: 'number',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserPortsResponseBodyRecords extends $tea.Model {
  service?: string;
  index?: number;
  fingerprint?: string;
  version?: string;
  product?: string;
  protocol?: string;
  updatedAt?: number;
  port?: number;
  IP?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      index: 'Index',
      fingerprint: 'Fingerprint',
      version: 'Version',
      product: 'Product',
      protocol: 'Protocol',
      updatedAt: 'UpdatedAt',
      port: 'Port',
      IP: 'IP',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      index: 'number',
      fingerprint: 'string',
      version: 'string',
      product: 'string',
      protocol: 'string',
      updatedAt: 'number',
      port: 'number',
      IP: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSubdomainsResponseBodyRecords extends $tea.Model {
  index?: number;
  domain?: string;
  subdomain?: string;
  updatedAt?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      domain: 'Domain',
      subdomain: 'Subdomain',
      updatedAt: 'UpdatedAt',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      domain: 'string',
      subdomain: 'string',
      updatedAt: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserWebPathsResponseBodyRecords extends $tea.Model {
  index?: number;
  site?: string;
  path?: string;
  updatedAt?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      site: 'Site',
      path: 'Path',
      updatedAt: 'UpdatedAt',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      site: 'string',
      path: 'string',
      updatedAt: 'number',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserWebTechsResponseBodyRecords extends $tea.Model {
  index?: number;
  poweredBy?: string;
  version?: string;
  URL?: string;
  server?: string;
  updatedAt?: number;
  title?: string;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      poweredBy: 'PoweredBy',
      version: 'Version',
      URL: 'URL',
      server: 'Server',
      updatedAt: 'UpdatedAt',
      title: 'Title',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      poweredBy: 'string',
      version: 'string',
      URL: 'string',
      server: 'string',
      updatedAt: 'number',
      title: 'string',
      name: 'string',
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
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("avds", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addAssetsWithOptions(request: AddAssetsRequest, runtime: $Util.RuntimeOptions): Promise<AddAssetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddAssetsResponse>(await this.doRPCRequest("AddAssets", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new AddAssetsResponse({}));
  }

  async addAssets(request: AddAssetsRequest): Promise<AddAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAssetsWithOptions(request, runtime);
  }

  async addAssetTagsWithOptions(request: AddAssetTagsRequest, runtime: $Util.RuntimeOptions): Promise<AddAssetTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddAssetTagsResponse>(await this.doRPCRequest("AddAssetTags", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new AddAssetTagsResponse({}));
  }

  async addAssetTags(request: AddAssetTagsRequest): Promise<AddAssetTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addAssetTagsWithOptions(request, runtime);
  }

  async addOrgDomainsWithOptions(request: AddOrgDomainsRequest, runtime: $Util.RuntimeOptions): Promise<AddOrgDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddOrgDomainsResponse>(await this.doRPCRequest("AddOrgDomains", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new AddOrgDomainsResponse({}));
  }

  async addOrgDomains(request: AddOrgDomainsRequest): Promise<AddOrgDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addOrgDomainsWithOptions(request, runtime);
  }

  async addOrgHostsWithOptions(request: AddOrgHostsRequest, runtime: $Util.RuntimeOptions): Promise<AddOrgHostsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddOrgHostsResponse>(await this.doRPCRequest("AddOrgHosts", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new AddOrgHostsResponse({}));
  }

  async addOrgHosts(request: AddOrgHostsRequest): Promise<AddOrgHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addOrgHostsWithOptions(request, runtime);
  }

  async addOrgSubdomainsWithOptions(request: AddOrgSubdomainsRequest, runtime: $Util.RuntimeOptions): Promise<AddOrgSubdomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddOrgSubdomainsResponse>(await this.doRPCRequest("AddOrgSubdomains", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new AddOrgSubdomainsResponse({}));
  }

  async addOrgSubdomains(request: AddOrgSubdomainsRequest): Promise<AddOrgSubdomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addOrgSubdomainsWithOptions(request, runtime);
  }

  async addOrgWebPathsWithOptions(request: AddOrgWebPathsRequest, runtime: $Util.RuntimeOptions): Promise<AddOrgWebPathsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddOrgWebPathsResponse>(await this.doRPCRequest("AddOrgWebPaths", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new AddOrgWebPathsResponse({}));
  }

  async addOrgWebPaths(request: AddOrgWebPathsRequest): Promise<AddOrgWebPathsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addOrgWebPathsWithOptions(request, runtime);
  }

  async createAvdsBagOrderWithOptions(request: CreateAvdsBagOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateAvdsBagOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAvdsBagOrderResponse>(await this.doRPCRequest("CreateAvdsBagOrder", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAvdsBagOrderResponse({}));
  }

  async createAvdsBagOrder(request: CreateAvdsBagOrderRequest): Promise<CreateAvdsBagOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAvdsBagOrderWithOptions(request, runtime);
  }

  async createAvdsOrderWithOptions(request: CreateAvdsOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateAvdsOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAvdsOrderResponse>(await this.doRPCRequest("CreateAvdsOrder", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAvdsOrderResponse({}));
  }

  async createAvdsOrder(request: CreateAvdsOrderRequest): Promise<CreateAvdsOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAvdsOrderWithOptions(request, runtime);
  }

  async createAvdsPublicOrderWithOptions(request: CreateAvdsPublicOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateAvdsPublicOrderResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAvdsPublicOrderResponse>(await this.doRPCRequest("CreateAvdsPublicOrder", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAvdsPublicOrderResponse({}));
  }

  async createAvdsPublicOrder(request: CreateAvdsPublicOrderRequest): Promise<CreateAvdsPublicOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAvdsPublicOrderWithOptions(request, runtime);
  }

  async createOrganizationWithOptions(request: CreateOrganizationRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrganizationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateOrganizationResponse>(await this.doRPCRequest("CreateOrganization", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new CreateOrganizationResponse({}));
  }

  async createOrganization(request: CreateOrganizationRequest): Promise<CreateOrganizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrganizationWithOptions(request, runtime);
  }

  async createSessionWithOptions(request: CreateSessionRequest, runtime: $Util.RuntimeOptions): Promise<CreateSessionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSessionResponse>(await this.doRPCRequest("CreateSession", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSessionResponse({}));
  }

  async createSession(request: CreateSessionRequest): Promise<CreateSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSessionWithOptions(request, runtime);
  }

  async deleteAssetsWithOptions(request: DeleteAssetsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAssetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAssetsResponse>(await this.doRPCRequest("DeleteAssets", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAssetsResponse({}));
  }

  async deleteAssets(request: DeleteAssetsRequest): Promise<DeleteAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAssetsWithOptions(request, runtime);
  }

  async deleteOrganizationsWithOptions(request: DeleteOrganizationsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOrganizationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteOrganizationsResponse>(await this.doRPCRequest("DeleteOrganizations", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteOrganizationsResponse({}));
  }

  async deleteOrganizations(request: DeleteOrganizationsRequest): Promise<DeleteOrganizationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOrganizationsWithOptions(request, runtime);
  }

  async deleteOrgAttackSurfaceRecordsWithOptions(request: DeleteOrgAttackSurfaceRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOrgAttackSurfaceRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteOrgAttackSurfaceRecordsResponse>(await this.doRPCRequest("DeleteOrgAttackSurfaceRecords", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteOrgAttackSurfaceRecordsResponse({}));
  }

  async deleteOrgAttackSurfaceRecords(request: DeleteOrgAttackSurfaceRecordsRequest): Promise<DeleteOrgAttackSurfaceRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOrgAttackSurfaceRecordsWithOptions(request, runtime);
  }

  async deleteSessionWithOptions(request: DeleteSessionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSessionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSessionResponse>(await this.doRPCRequest("DeleteSession", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSessionResponse({}));
  }

  async deleteSession(request: DeleteSessionRequest): Promise<DeleteSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSessionWithOptions(request, runtime);
  }

  async deleteUserAttackSurfaceRecordsWithOptions(request: DeleteUserAttackSurfaceRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUserAttackSurfaceRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteUserAttackSurfaceRecordsResponse>(await this.doRPCRequest("DeleteUserAttackSurfaceRecords", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteUserAttackSurfaceRecordsResponse({}));
  }

  async deleteUserAttackSurfaceRecords(request: DeleteUserAttackSurfaceRecordsRequest): Promise<DeleteUserAttackSurfaceRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUserAttackSurfaceRecordsWithOptions(request, runtime);
  }

  async describeAllVulnerabilitiesWithOptions(request: DescribeAllVulnerabilitiesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAllVulnerabilitiesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAllVulnerabilitiesResponse>(await this.doRPCRequest("DescribeAllVulnerabilities", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAllVulnerabilitiesResponse({}));
  }

  async describeAllVulnerabilities(request: DescribeAllVulnerabilitiesRequest): Promise<DescribeAllVulnerabilitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAllVulnerabilitiesWithOptions(request, runtime);
  }

  async describeAssetsWithOptions(request: DescribeAssetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAssetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAssetsResponse>(await this.doRPCRequest("DescribeAssets", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAssetsResponse({}));
  }

  async describeAssets(request: DescribeAssetsRequest): Promise<DescribeAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAssetsWithOptions(request, runtime);
  }

  async describeAttackSurfacesFacetsWithOptions(request: DescribeAttackSurfacesFacetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAttackSurfacesFacetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAttackSurfacesFacetsResponse>(await this.doRPCRequest("DescribeAttackSurfacesFacets", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAttackSurfacesFacetsResponse({}));
  }

  async describeAttackSurfacesFacets(request: DescribeAttackSurfacesFacetsRequest): Promise<DescribeAttackSurfacesFacetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAttackSurfacesFacetsWithOptions(request, runtime);
  }

  async describeCrawlerRequestsWithOptions(request: DescribeCrawlerRequestsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCrawlerRequestsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCrawlerRequestsResponse>(await this.doRPCRequest("DescribeCrawlerRequests", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCrawlerRequestsResponse({}));
  }

  async describeCrawlerRequests(request: DescribeCrawlerRequestsRequest): Promise<DescribeCrawlerRequestsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCrawlerRequestsWithOptions(request, runtime);
  }

  async describeDNSMapWithOptions(request: DescribeDNSMapRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDNSMapResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDNSMapResponse>(await this.doRPCRequest("DescribeDNSMap", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDNSMapResponse({}));
  }

  async describeDNSMap(request: DescribeDNSMapRequest): Promise<DescribeDNSMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDNSMapWithOptions(request, runtime);
  }

  async describeDomainAttackSurfacesFacetsWithOptions(request: DescribeDomainAttackSurfacesFacetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainAttackSurfacesFacetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainAttackSurfacesFacetsResponse>(await this.doRPCRequest("DescribeDomainAttackSurfacesFacets", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainAttackSurfacesFacetsResponse({}));
  }

  async describeDomainAttackSurfacesFacets(request: DescribeDomainAttackSurfacesFacetsRequest): Promise<DescribeDomainAttackSurfacesFacetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainAttackSurfacesFacetsWithOptions(request, runtime);
  }

  async describeDomainsWithOptions(request: DescribeDomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDomainsResponse>(await this.doRPCRequest("DescribeDomains", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDomainsResponse({}));
  }

  async describeDomains(request: DescribeDomainsRequest): Promise<DescribeDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDomainsWithOptions(request, runtime);
  }

  async describeHostAttackSurfacesFacetsWithOptions(request: DescribeHostAttackSurfacesFacetsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHostAttackSurfacesFacetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHostAttackSurfacesFacetsResponse>(await this.doRPCRequest("DescribeHostAttackSurfacesFacets", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHostAttackSurfacesFacetsResponse({}));
  }

  async describeHostAttackSurfacesFacets(request: DescribeHostAttackSurfacesFacetsRequest): Promise<DescribeHostAttackSurfacesFacetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHostAttackSurfacesFacetsWithOptions(request, runtime);
  }

  async describeHostsWithOptions(request: DescribeHostsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHostsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeHostsResponse>(await this.doRPCRequest("DescribeHosts", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeHostsResponse({}));
  }

  async describeHosts(request: DescribeHostsRequest): Promise<DescribeHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHostsWithOptions(request, runtime);
  }

  async describeListSessionsWithOptions(request: DescribeListSessionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeListSessionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeListSessionsResponse>(await this.doRPCRequest("DescribeListSessions", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeListSessionsResponse({}));
  }

  async describeListSessions(request: DescribeListSessionsRequest): Promise<DescribeListSessionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeListSessionsWithOptions(request, runtime);
  }

  async describeOrgAttackSurfaceDetailsWithOptions(request: DescribeOrgAttackSurfaceDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOrgAttackSurfaceDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOrgAttackSurfaceDetailsResponse>(await this.doRPCRequest("DescribeOrgAttackSurfaceDetails", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOrgAttackSurfaceDetailsResponse({}));
  }

  async describeOrgAttackSurfaceDetails(request: DescribeOrgAttackSurfaceDetailsRequest): Promise<DescribeOrgAttackSurfaceDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOrgAttackSurfaceDetailsWithOptions(request, runtime);
  }

  async describeOrgInfoWithOptions(request: DescribeOrgInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOrgInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOrgInfoResponse>(await this.doRPCRequest("DescribeOrgInfo", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOrgInfoResponse({}));
  }

  async describeOrgInfo(request: DescribeOrgInfoRequest): Promise<DescribeOrgInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOrgInfoWithOptions(request, runtime);
  }

  async describePortsWithOptions(request: DescribePortsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePortsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePortsResponse>(await this.doRPCRequest("DescribePorts", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePortsResponse({}));
  }

  async describePorts(request: DescribePortsRequest): Promise<DescribePortsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePortsWithOptions(request, runtime);
  }

  async describeScanSessionsWithOptions(request: DescribeScanSessionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScanSessionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScanSessionsResponse>(await this.doRPCRequest("DescribeScanSessions", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScanSessionsResponse({}));
  }

  async describeScanSessions(request: DescribeScanSessionsRequest): Promise<DescribeScanSessionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScanSessionsWithOptions(request, runtime);
  }

  async describeSessionWithOptions(request: DescribeSessionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSessionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSessionResponse>(await this.doRPCRequest("DescribeSession", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSessionResponse({}));
  }

  async describeSession(request: DescribeSessionRequest): Promise<DescribeSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSessionWithOptions(request, runtime);
  }

  async describeSubdomainsWithOptions(request: DescribeSubdomainsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSubdomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSubdomainsResponse>(await this.doRPCRequest("DescribeSubdomains", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSubdomainsResponse({}));
  }

  async describeSubdomains(request: DescribeSubdomainsRequest): Promise<DescribeSubdomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSubdomainsWithOptions(request, runtime);
  }

  async describeTaskBriefInfoWithOptions(request: DescribeTaskBriefInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTaskBriefInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeTaskBriefInfoResponse>(await this.doRPCRequest("DescribeTaskBriefInfo", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeTaskBriefInfoResponse({}));
  }

  async describeTaskBriefInfo(request: DescribeTaskBriefInfoRequest): Promise<DescribeTaskBriefInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTaskBriefInfoWithOptions(request, runtime);
  }

  async describeUserTagsWithOptions(request: DescribeUserTagsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserTagsResponse>(await this.doRPCRequest("DescribeUserTags", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserTagsResponse({}));
  }

  async describeUserTags(request: DescribeUserTagsRequest): Promise<DescribeUserTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserTagsWithOptions(request, runtime);
  }

  async describeVulnerabilityWithOptions(request: DescribeVulnerabilityRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulnerabilityResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVulnerabilityResponse>(await this.doRPCRequest("DescribeVulnerability", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVulnerabilityResponse({}));
  }

  async describeVulnerability(request: DescribeVulnerabilityRequest): Promise<DescribeVulnerabilityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulnerabilityWithOptions(request, runtime);
  }

  async describeWebPathsWithOptions(request: DescribeWebPathsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebPathsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebPathsResponse>(await this.doRPCRequest("DescribeWebPaths", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebPathsResponse({}));
  }

  async describeWebPaths(request: DescribeWebPathsRequest): Promise<DescribeWebPathsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebPathsWithOptions(request, runtime);
  }

  async describeWebServersWithOptions(request: DescribeWebServersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebServersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebServersResponse>(await this.doRPCRequest("DescribeWebServers", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebServersResponse({}));
  }

  async describeWebServers(request: DescribeWebServersRequest): Promise<DescribeWebServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebServersWithOptions(request, runtime);
  }

  async describeWebTechsWithOptions(request: DescribeWebTechsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWebTechsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWebTechsResponse>(await this.doRPCRequest("DescribeWebTechs", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWebTechsResponse({}));
  }

  async describeWebTechs(request: DescribeWebTechsRequest): Promise<DescribeWebTechsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWebTechsWithOptions(request, runtime);
  }

  async editSessionWithOptions(request: EditSessionRequest, runtime: $Util.RuntimeOptions): Promise<EditSessionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EditSessionResponse>(await this.doRPCRequest("EditSession", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new EditSessionResponse({}));
  }

  async editSession(request: EditSessionRequest): Promise<EditSessionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editSessionWithOptions(request, runtime);
  }

  async generateVulReportWithOptions(request: GenerateVulReportRequest, runtime: $Util.RuntimeOptions): Promise<GenerateVulReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateVulReportResponse>(await this.doRPCRequest("GenerateVulReport", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateVulReportResponse({}));
  }

  async generateVulReport(request: GenerateVulReportRequest): Promise<GenerateVulReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateVulReportWithOptions(request, runtime);
  }

  async listOrgDNSMapWithOptions(request: ListOrgDNSMapRequest, runtime: $Util.RuntimeOptions): Promise<ListOrgDNSMapResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOrgDNSMapResponse>(await this.doRPCRequest("ListOrgDNSMap", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListOrgDNSMapResponse({}));
  }

  async listOrgDNSMap(request: ListOrgDNSMapRequest): Promise<ListOrgDNSMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrgDNSMapWithOptions(request, runtime);
  }

  async listOrgDomainsWithOptions(request: ListOrgDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListOrgDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOrgDomainsResponse>(await this.doRPCRequest("ListOrgDomains", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListOrgDomainsResponse({}));
  }

  async listOrgDomains(request: ListOrgDomainsRequest): Promise<ListOrgDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrgDomainsWithOptions(request, runtime);
  }

  async listOrgHostsWithOptions(request: ListOrgHostsRequest, runtime: $Util.RuntimeOptions): Promise<ListOrgHostsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOrgHostsResponse>(await this.doRPCRequest("ListOrgHosts", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListOrgHostsResponse({}));
  }

  async listOrgHosts(request: ListOrgHostsRequest): Promise<ListOrgHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrgHostsWithOptions(request, runtime);
  }

  async listOrgPortsWithOptions(request: ListOrgPortsRequest, runtime: $Util.RuntimeOptions): Promise<ListOrgPortsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOrgPortsResponse>(await this.doRPCRequest("ListOrgPorts", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListOrgPortsResponse({}));
  }

  async listOrgPorts(request: ListOrgPortsRequest): Promise<ListOrgPortsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrgPortsWithOptions(request, runtime);
  }

  async listOrgRiskyAssetsWithOptions(request: ListOrgRiskyAssetsRequest, runtime: $Util.RuntimeOptions): Promise<ListOrgRiskyAssetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOrgRiskyAssetsResponse>(await this.doRPCRequest("ListOrgRiskyAssets", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListOrgRiskyAssetsResponse({}));
  }

  async listOrgRiskyAssets(request: ListOrgRiskyAssetsRequest): Promise<ListOrgRiskyAssetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrgRiskyAssetsWithOptions(request, runtime);
  }

  async listOrgSubdomainsWithOptions(request: ListOrgSubdomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListOrgSubdomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOrgSubdomainsResponse>(await this.doRPCRequest("ListOrgSubdomains", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListOrgSubdomainsResponse({}));
  }

  async listOrgSubdomains(request: ListOrgSubdomainsRequest): Promise<ListOrgSubdomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrgSubdomainsWithOptions(request, runtime);
  }

  async listOrgVulFacetsWithOptions(request: ListOrgVulFacetsRequest, runtime: $Util.RuntimeOptions): Promise<ListOrgVulFacetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOrgVulFacetsResponse>(await this.doRPCRequest("ListOrgVulFacets", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListOrgVulFacetsResponse({}));
  }

  async listOrgVulFacets(request: ListOrgVulFacetsRequest): Promise<ListOrgVulFacetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrgVulFacetsWithOptions(request, runtime);
  }

  async listOrgWebPathsWithOptions(request: ListOrgWebPathsRequest, runtime: $Util.RuntimeOptions): Promise<ListOrgWebPathsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOrgWebPathsResponse>(await this.doRPCRequest("ListOrgWebPaths", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListOrgWebPathsResponse({}));
  }

  async listOrgWebPaths(request: ListOrgWebPathsRequest): Promise<ListOrgWebPathsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrgWebPathsWithOptions(request, runtime);
  }

  async listOrgWebTechsWithOptions(request: ListOrgWebTechsRequest, runtime: $Util.RuntimeOptions): Promise<ListOrgWebTechsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOrgWebTechsResponse>(await this.doRPCRequest("ListOrgWebTechs", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListOrgWebTechsResponse({}));
  }

  async listOrgWebTechs(request: ListOrgWebTechsRequest): Promise<ListOrgWebTechsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOrgWebTechsWithOptions(request, runtime);
  }

  async listUserDNSMapWithOptions(request: ListUserDNSMapRequest, runtime: $Util.RuntimeOptions): Promise<ListUserDNSMapResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserDNSMapResponse>(await this.doRPCRequest("ListUserDNSMap", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserDNSMapResponse({}));
  }

  async listUserDNSMap(request: ListUserDNSMapRequest): Promise<ListUserDNSMapResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserDNSMapWithOptions(request, runtime);
  }

  async listUserDNSMapHistoriesWithOptions(request: ListUserDNSMapHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListUserDNSMapHistoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserDNSMapHistoriesResponse>(await this.doRPCRequest("ListUserDNSMapHistories", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserDNSMapHistoriesResponse({}));
  }

  async listUserDNSMapHistories(request: ListUserDNSMapHistoriesRequest): Promise<ListUserDNSMapHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserDNSMapHistoriesWithOptions(request, runtime);
  }

  async listUserDomainsWithOptions(request: ListUserDomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserDomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserDomainsResponse>(await this.doRPCRequest("ListUserDomains", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserDomainsResponse({}));
  }

  async listUserDomains(request: ListUserDomainsRequest): Promise<ListUserDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserDomainsWithOptions(request, runtime);
  }

  async listUserHostsWithOptions(request: ListUserHostsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserHostsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserHostsResponse>(await this.doRPCRequest("ListUserHosts", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserHostsResponse({}));
  }

  async listUserHosts(request: ListUserHostsRequest): Promise<ListUserHostsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserHostsWithOptions(request, runtime);
  }

  async listUserOrganizationsWithOptions(request: ListUserOrganizationsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserOrganizationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserOrganizationsResponse>(await this.doRPCRequest("ListUserOrganizations", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserOrganizationsResponse({}));
  }

  async listUserOrganizations(request: ListUserOrganizationsRequest): Promise<ListUserOrganizationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserOrganizationsWithOptions(request, runtime);
  }

  async listUserPortsWithOptions(request: ListUserPortsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserPortsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserPortsResponse>(await this.doRPCRequest("ListUserPorts", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserPortsResponse({}));
  }

  async listUserPorts(request: ListUserPortsRequest): Promise<ListUserPortsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserPortsWithOptions(request, runtime);
  }

  async listUserSubdomainsWithOptions(request: ListUserSubdomainsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserSubdomainsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserSubdomainsResponse>(await this.doRPCRequest("ListUserSubdomains", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserSubdomainsResponse({}));
  }

  async listUserSubdomains(request: ListUserSubdomainsRequest): Promise<ListUserSubdomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserSubdomainsWithOptions(request, runtime);
  }

  async listUserWebPathsWithOptions(request: ListUserWebPathsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserWebPathsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserWebPathsResponse>(await this.doRPCRequest("ListUserWebPaths", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserWebPathsResponse({}));
  }

  async listUserWebPaths(request: ListUserWebPathsRequest): Promise<ListUserWebPathsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserWebPathsWithOptions(request, runtime);
  }

  async listUserWebTechsWithOptions(request: ListUserWebTechsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserWebTechsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListUserWebTechsResponse>(await this.doRPCRequest("ListUserWebTechs", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ListUserWebTechsResponse({}));
  }

  async listUserWebTechs(request: ListUserWebTechsRequest): Promise<ListUserWebTechsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserWebTechsWithOptions(request, runtime);
  }

  async modifyOrganizationWithOptions(request: ModifyOrganizationRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOrganizationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyOrganizationResponse>(await this.doRPCRequest("ModifyOrganization", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyOrganizationResponse({}));
  }

  async modifyOrganization(request: ModifyOrganizationRequest): Promise<ModifyOrganizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOrganizationWithOptions(request, runtime);
  }

  async tagAssetsByRecordsWithOptions(request: TagAssetsByRecordsRequest, runtime: $Util.RuntimeOptions): Promise<TagAssetsByRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagAssetsByRecordsResponse>(await this.doRPCRequest("TagAssetsByRecords", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new TagAssetsByRecordsResponse({}));
  }

  async tagAssetsByRecords(request: TagAssetsByRecordsRequest): Promise<TagAssetsByRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagAssetsByRecordsWithOptions(request, runtime);
  }

  async tagAssetsBySearchWithOptions(request: TagAssetsBySearchRequest, runtime: $Util.RuntimeOptions): Promise<TagAssetsBySearchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagAssetsBySearchResponse>(await this.doRPCRequest("TagAssetsBySearch", "2017-11-29", "HTTPS", "POST", "AK", "json", req, runtime), new TagAssetsBySearchResponse({}));
  }

  async tagAssetsBySearch(request: TagAssetsBySearchRequest): Promise<TagAssetsBySearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagAssetsBySearchWithOptions(request, runtime);
  }

}
