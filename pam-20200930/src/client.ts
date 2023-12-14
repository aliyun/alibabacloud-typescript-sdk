// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateAssetCredentialRequest extends $tea.Model {
  accountName?: string;
  assetRegionId?: string;
  assetThirdId?: string;
  assetType?: string;
  assetUuid?: string;
  credentialTag?: string;
  credentialType?: string;
  description?: string;
  instanceId?: string;
  passPhrase?: string;
  password?: string;
  privateKey?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      assetRegionId: 'AssetRegionId',
      assetThirdId: 'AssetThirdId',
      assetType: 'AssetType',
      assetUuid: 'AssetUuid',
      credentialTag: 'CredentialTag',
      credentialType: 'CredentialType',
      description: 'Description',
      instanceId: 'InstanceId',
      passPhrase: 'PassPhrase',
      password: 'Password',
      privateKey: 'PrivateKey',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      assetRegionId: 'string',
      assetThirdId: 'string',
      assetType: 'string',
      assetUuid: 'string',
      credentialTag: 'string',
      credentialType: 'string',
      description: 'string',
      instanceId: 'string',
      passPhrase: 'string',
      password: 'string',
      privateKey: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssetCredentialResponseBody extends $tea.Model {
  credentialName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialName: 'CredentialName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAssetCredentialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAssetCredentialResponseBody;
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
      body: CreateAssetCredentialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
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

export class CreateInstanceResponseBody extends $tea.Model {
  instanceAttribute?: CreateInstanceResponseBodyInstanceAttribute;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceAttribute: 'InstanceAttribute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAttribute: CreateInstanceResponseBodyInstanceAttribute,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInstanceResponseBody;
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
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $tea.Model {
  instances?: DescribeInstancesResponseBodyInstances[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstancesResponseBody;
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
      body: DescribeInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
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
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDirectOperationTokenRequest extends $tea.Model {
  accountName?: string;
  assetUuid?: string;
  credentialName?: string;
  instanceId?: string;
  passPhrase?: string;
  password?: string;
  privateKey?: string;
  protocolType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      assetUuid: 'AssetUuid',
      credentialName: 'CredentialName',
      instanceId: 'InstanceId',
      passPhrase: 'PassPhrase',
      password: 'Password',
      privateKey: 'PrivateKey',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      assetUuid: 'string',
      credentialName: 'string',
      instanceId: 'string',
      passPhrase: 'string',
      password: 'string',
      privateKey: 'string',
      protocolType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDirectOperationTokenResponseBody extends $tea.Model {
  requestId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDirectOperationTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateDirectOperationTokenResponseBody;
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
      body: GenerateDirectOperationTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetDetailRequest extends $tea.Model {
  assetRegionId?: string;
  assetThirdId?: string;
  assetType?: string;
  assetUuid?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetRegionId: 'AssetRegionId',
      assetThirdId: 'AssetThirdId',
      assetType: 'AssetType',
      assetUuid: 'AssetUuid',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetRegionId: 'string',
      assetThirdId: 'string',
      assetType: 'string',
      assetUuid: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetDetailResponseBody extends $tea.Model {
  assetDetail?: GetAssetDetailResponseBodyAssetDetail;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetDetail: 'AssetDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetDetail: GetAssetDetailResponseBodyAssetDetail,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAssetDetailResponseBody;
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
      body: GetAssetDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterAssetRequest extends $tea.Model {
  assetRegionId?: string;
  assetThirdId?: string;
  assetType?: string;
  assetUuid?: string;
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetRegionId: 'AssetRegionId',
      assetThirdId: 'AssetThirdId',
      assetType: 'AssetType',
      assetUuid: 'AssetUuid',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetRegionId: 'string',
      assetThirdId: 'string',
      assetType: 'string',
      assetUuid: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterAssetResponseBody extends $tea.Model {
  assetUuid?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      assetUuid: 'AssetUuid',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetUuid: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterAssetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RegisterAssetResponseBody;
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
      body: RegisterAssetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAssetsPortRequest extends $tea.Model {
  assetPort?: number;
  assetProtocol?: string;
  assetUuids?: string[];
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      assetPort: 'AssetPort',
      assetProtocol: 'AssetProtocol',
      assetUuids: 'AssetUuids',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetPort: 'number',
      assetProtocol: 'string',
      assetUuids: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAssetsPortResponseBody extends $tea.Model {
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

export class UpdateAssetsPortResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAssetsPortResponseBody;
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
      body: UpdateAssetsPortResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyInstanceAttribute extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesLicenseInfo extends $tea.Model {
  currentRegisteredAsset?: number;
  maxConcurrentSession?: number;
  maxRegisteredAsset?: number;
  maxSingleAssetCredential?: number;
  static names(): { [key: string]: string } {
    return {
      currentRegisteredAsset: 'CurrentRegisteredAsset',
      maxConcurrentSession: 'MaxConcurrentSession',
      maxRegisteredAsset: 'MaxRegisteredAsset',
      maxSingleAssetCredential: 'MaxSingleAssetCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentRegisteredAsset: 'number',
      maxConcurrentSession: 'number',
      maxRegisteredAsset: 'number',
      maxSingleAssetCredential: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstances extends $tea.Model {
  appInitStatus?: string;
  assetInitStatus?: string;
  idaasInstanceId?: string;
  idaasRegionId?: string;
  instanceId?: string;
  licenseCode?: string;
  licenseInfo?: DescribeInstancesResponseBodyInstancesLicenseInfo;
  portalHomeUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appInitStatus: 'AppInitStatus',
      assetInitStatus: 'AssetInitStatus',
      idaasInstanceId: 'IdaasInstanceId',
      idaasRegionId: 'IdaasRegionId',
      instanceId: 'InstanceId',
      licenseCode: 'LicenseCode',
      licenseInfo: 'LicenseInfo',
      portalHomeUrl: 'PortalHomeUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInitStatus: 'string',
      assetInitStatus: 'string',
      idaasInstanceId: 'string',
      idaasRegionId: 'string',
      instanceId: 'string',
      licenseCode: 'string',
      licenseInfo: DescribeInstancesResponseBodyInstancesLicenseInfo,
      portalHomeUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetDetailResponseBodyAssetDetailAssetAddressInfos extends $tea.Model {
  addressType?: string;
  IPAddressVersion?: string;
  ipAddress?: string;
  protocolVersion?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      IPAddressVersion: 'IPAddressVersion',
      ipAddress: 'IpAddress',
      protocolVersion: 'ProtocolVersion',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      IPAddressVersion: 'string',
      ipAddress: 'string',
      protocolVersion: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetDetailResponseBodyAssetDetailAssetCredentialInfos extends $tea.Model {
  credentialName?: string;
  credentialTag?: string;
  credentialType?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      credentialName: 'CredentialName',
      credentialTag: 'CredentialTag',
      credentialType: 'CredentialType',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialName: 'string',
      credentialTag: 'string',
      credentialType: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetDetailResponseBodyAssetDetailAssetGroupInfos extends $tea.Model {
  assetGroupName?: string;
  assetGroupUuid?: string;
  static names(): { [key: string]: string } {
    return {
      assetGroupName: 'AssetGroupName',
      assetGroupUuid: 'AssetGroupUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetGroupName: 'string',
      assetGroupUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetDetailResponseBodyAssetDetailAssetProtocolInfos extends $tea.Model {
  port?: number;
  protocol?: string;
  protocolType?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
      protocolType: 'ProtocolType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
      protocolType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetDetailResponseBodyAssetDetailK8sApplicationInfo extends $tea.Model {
  appBodyContent?: string;
  appGranularity?: string;
  static names(): { [key: string]: string } {
    return {
      appBodyContent: 'AppBodyContent',
      appGranularity: 'AppGranularity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appBodyContent: 'string',
      appGranularity: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetDetailResponseBodyAssetDetailNetworkDomainInfos extends $tea.Model {
  domainDescription?: string;
  domainName?: string;
  domainStatus?: string;
  domainType?: string;
  domainUuid?: string;
  static names(): { [key: string]: string } {
    return {
      domainDescription: 'DomainDescription',
      domainName: 'DomainName',
      domainStatus: 'DomainStatus',
      domainType: 'DomainType',
      domainUuid: 'DomainUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainDescription: 'string',
      domainName: 'string',
      domainStatus: 'string',
      domainType: 'string',
      domainUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAssetDetailResponseBodyAssetDetail extends $tea.Model {
  assetAddressInfos?: GetAssetDetailResponseBodyAssetDetailAssetAddressInfos[];
  assetCredentialInfos?: GetAssetDetailResponseBodyAssetDetailAssetCredentialInfos[];
  assetFingerprint?: string;
  assetGroupInfos?: GetAssetDetailResponseBodyAssetDetailAssetGroupInfos[];
  assetOsType?: string;
  assetProtocolInfos?: GetAssetDetailResponseBodyAssetDetailAssetProtocolInfos[];
  assetRegionId?: string;
  assetRunningStatus?: string;
  assetSource?: string;
  assetThirdId?: string;
  assetType?: string;
  assetUuid?: string;
  assetVpcId?: string;
  credentialCount?: number;
  description?: string;
  k8sApplicationInfo?: GetAssetDetailResponseBodyAssetDetailK8sApplicationInfo;
  networkDomainInfos?: GetAssetDetailResponseBodyAssetDetailNetworkDomainInfos[];
  registeredStatus?: string;
  supportedRegister?: boolean;
  static names(): { [key: string]: string } {
    return {
      assetAddressInfos: 'AssetAddressInfos',
      assetCredentialInfos: 'AssetCredentialInfos',
      assetFingerprint: 'AssetFingerprint',
      assetGroupInfos: 'AssetGroupInfos',
      assetOsType: 'AssetOsType',
      assetProtocolInfos: 'AssetProtocolInfos',
      assetRegionId: 'AssetRegionId',
      assetRunningStatus: 'AssetRunningStatus',
      assetSource: 'AssetSource',
      assetThirdId: 'AssetThirdId',
      assetType: 'AssetType',
      assetUuid: 'AssetUuid',
      assetVpcId: 'AssetVpcId',
      credentialCount: 'CredentialCount',
      description: 'Description',
      k8sApplicationInfo: 'K8sApplicationInfo',
      networkDomainInfos: 'NetworkDomainInfos',
      registeredStatus: 'RegisteredStatus',
      supportedRegister: 'SupportedRegister',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetAddressInfos: { 'type': 'array', 'itemType': GetAssetDetailResponseBodyAssetDetailAssetAddressInfos },
      assetCredentialInfos: { 'type': 'array', 'itemType': GetAssetDetailResponseBodyAssetDetailAssetCredentialInfos },
      assetFingerprint: 'string',
      assetGroupInfos: { 'type': 'array', 'itemType': GetAssetDetailResponseBodyAssetDetailAssetGroupInfos },
      assetOsType: 'string',
      assetProtocolInfos: { 'type': 'array', 'itemType': GetAssetDetailResponseBodyAssetDetailAssetProtocolInfos },
      assetRegionId: 'string',
      assetRunningStatus: 'string',
      assetSource: 'string',
      assetThirdId: 'string',
      assetType: 'string',
      assetUuid: 'string',
      assetVpcId: 'string',
      credentialCount: 'number',
      description: 'string',
      k8sApplicationInfo: GetAssetDetailResponseBodyAssetDetailK8sApplicationInfo,
      networkDomainInfos: { 'type': 'array', 'itemType': GetAssetDetailResponseBodyAssetDetailNetworkDomainInfos },
      registeredStatus: 'string',
      supportedRegister: 'boolean',
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
    this._endpoint = this.getEndpoint("pam", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createAssetCredentialWithOptions(request: CreateAssetCredentialRequest, runtime: $Util.RuntimeOptions): Promise<CreateAssetCredentialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.assetRegionId)) {
      query["AssetRegionId"] = request.assetRegionId;
    }

    if (!Util.isUnset(request.assetThirdId)) {
      query["AssetThirdId"] = request.assetThirdId;
    }

    if (!Util.isUnset(request.assetType)) {
      query["AssetType"] = request.assetType;
    }

    if (!Util.isUnset(request.assetUuid)) {
      query["AssetUuid"] = request.assetUuid;
    }

    if (!Util.isUnset(request.credentialTag)) {
      query["CredentialTag"] = request.credentialTag;
    }

    if (!Util.isUnset(request.credentialType)) {
      query["CredentialType"] = request.credentialType;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.passPhrase)) {
      query["PassPhrase"] = request.passPhrase;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAssetCredential",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAssetCredentialResponse>(await this.callApi(params, req, runtime), new CreateAssetCredentialResponse({}));
  }

  async createAssetCredential(request: CreateAssetCredentialRequest): Promise<CreateAssetCredentialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAssetCredentialWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstancesResponse> {
    Util.validateModel(request);
    let query = { };
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstances",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstancesResponse>(await this.callApi(params, req, runtime), new DescribeInstancesResponse({}));
  }

  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async generateDirectOperationTokenWithOptions(request: GenerateDirectOperationTokenRequest, runtime: $Util.RuntimeOptions): Promise<GenerateDirectOperationTokenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!Util.isUnset(request.assetUuid)) {
      query["AssetUuid"] = request.assetUuid;
    }

    if (!Util.isUnset(request.credentialName)) {
      query["CredentialName"] = request.credentialName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.passPhrase)) {
      query["PassPhrase"] = request.passPhrase;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.privateKey)) {
      query["PrivateKey"] = request.privateKey;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateDirectOperationToken",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateDirectOperationTokenResponse>(await this.callApi(params, req, runtime), new GenerateDirectOperationTokenResponse({}));
  }

  async generateDirectOperationToken(request: GenerateDirectOperationTokenRequest): Promise<GenerateDirectOperationTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateDirectOperationTokenWithOptions(request, runtime);
  }

  async getAssetDetailWithOptions(request: GetAssetDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetAssetDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assetRegionId)) {
      query["AssetRegionId"] = request.assetRegionId;
    }

    if (!Util.isUnset(request.assetThirdId)) {
      query["AssetThirdId"] = request.assetThirdId;
    }

    if (!Util.isUnset(request.assetType)) {
      query["AssetType"] = request.assetType;
    }

    if (!Util.isUnset(request.assetUuid)) {
      query["AssetUuid"] = request.assetUuid;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAssetDetail",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAssetDetailResponse>(await this.callApi(params, req, runtime), new GetAssetDetailResponse({}));
  }

  async getAssetDetail(request: GetAssetDetailRequest): Promise<GetAssetDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAssetDetailWithOptions(request, runtime);
  }

  async registerAssetWithOptions(request: RegisterAssetRequest, runtime: $Util.RuntimeOptions): Promise<RegisterAssetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assetRegionId)) {
      query["AssetRegionId"] = request.assetRegionId;
    }

    if (!Util.isUnset(request.assetThirdId)) {
      query["AssetThirdId"] = request.assetThirdId;
    }

    if (!Util.isUnset(request.assetType)) {
      query["AssetType"] = request.assetType;
    }

    if (!Util.isUnset(request.assetUuid)) {
      query["AssetUuid"] = request.assetUuid;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RegisterAsset",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RegisterAssetResponse>(await this.callApi(params, req, runtime), new RegisterAssetResponse({}));
  }

  async registerAsset(request: RegisterAssetRequest): Promise<RegisterAssetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.registerAssetWithOptions(request, runtime);
  }

  async updateAssetsPortWithOptions(request: UpdateAssetsPortRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAssetsPortResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.assetPort)) {
      query["AssetPort"] = request.assetPort;
    }

    if (!Util.isUnset(request.assetProtocol)) {
      query["AssetProtocol"] = request.assetProtocol;
    }

    if (!Util.isUnset(request.assetUuids)) {
      query["AssetUuids"] = request.assetUuids;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAssetsPort",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateAssetsPortResponse>(await this.callApi(params, req, runtime), new UpdateAssetsPortResponse({}));
  }

  async updateAssetsPort(request: UpdateAssetsPortRequest): Promise<UpdateAssetsPortResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAssetsPortWithOptions(request, runtime);
  }

}
