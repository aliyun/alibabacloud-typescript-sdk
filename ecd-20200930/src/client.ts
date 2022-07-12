// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActivateOfficeSiteRequest extends $tea.Model {
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateOfficeSiteResponseBody extends $tea.Model {
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

export class ActivateOfficeSiteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ActivateOfficeSiteResponseBody;
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
      body: ActivateOfficeSiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToDesktopGroupRequest extends $tea.Model {
  clientToken?: string;
  desktopGroupId?: string;
  desktopGroupIds?: string[];
  endUserIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupIds: 'DesktopGroupIds',
      endUserIds: 'EndUserIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      desktopGroupId: 'string',
      desktopGroupIds: { 'type': 'array', 'itemType': 'string' },
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToDesktopGroupResponseBody extends $tea.Model {
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

export class AddUserToDesktopGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddUserToDesktopGroupResponseBody;
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
      body: AddUserToDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationForMonitoringRequest extends $tea.Model {
  coordinatePolicyType?: string;
  endUserId?: string;
  initiatorType?: string;
  regionId?: string;
  resourceCandidates?: ApplyCoordinationForMonitoringRequestResourceCandidates[];
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      coordinatePolicyType: 'CoordinatePolicyType',
      endUserId: 'EndUserId',
      initiatorType: 'InitiatorType',
      regionId: 'RegionId',
      resourceCandidates: 'ResourceCandidates',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinatePolicyType: 'string',
      endUserId: 'string',
      initiatorType: 'string',
      regionId: 'string',
      resourceCandidates: { 'type': 'array', 'itemType': ApplyCoordinationForMonitoringRequestResourceCandidates },
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationForMonitoringResponseBody extends $tea.Model {
  coordinateFlowModels?: ApplyCoordinationForMonitoringResponseBodyCoordinateFlowModels[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      coordinateFlowModels: 'CoordinateFlowModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinateFlowModels: { 'type': 'array', 'itemType': ApplyCoordinationForMonitoringResponseBodyCoordinateFlowModels },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationForMonitoringResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyCoordinationForMonitoringResponseBody;
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
      body: ApplyCoordinationForMonitoringResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveFotaUpdateRequest extends $tea.Model {
  appVersion?: string;
  desktopId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      desktopId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApproveFotaUpdateResponseBody extends $tea.Model {
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

export class ApproveFotaUpdateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApproveFotaUpdateResponseBody;
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
      body: ApproveFotaUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateNetworkPackageRequest extends $tea.Model {
  networkPackageId?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackageId: 'NetworkPackageId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageId: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateNetworkPackageResponseBody extends $tea.Model {
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

export class AssociateNetworkPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssociateNetworkPackageResponseBody;
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
      body: AssociateNetworkPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCenRequest extends $tea.Model {
  cenId?: string;
  cenOwnerId?: number;
  officeSiteId?: string;
  regionId?: string;
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      officeSiteId: 'string',
      regionId: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCenResponseBody extends $tea.Model {
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

export class AttachCenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachCenResponseBody;
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
      body: AttachCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCoordinationForMonitoringRequest extends $tea.Model {
  coIds?: string[];
  endUserId?: string;
  regionId?: string;
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      coIds: 'CoIds',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coIds: { 'type': 'array', 'itemType': 'string' },
      endUserId: 'string',
      regionId: 'string',
      userType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCoordinationForMonitoringResponseBody extends $tea.Model {
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

export class CancelCoordinationForMonitoringResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelCoordinationForMonitoringResponseBody;
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
      body: CancelCoordinationForMonitoringResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCopyImageRequest extends $tea.Model {
  imageId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelCopyImageResponseBody extends $tea.Model {
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

export class CancelCopyImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelCopyImageResponseBody;
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
      body: CancelCopyImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClonePolicyGroupRequest extends $tea.Model {
  name?: string;
  policyGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      policyGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClonePolicyGroupResponseBody extends $tea.Model {
  policyGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyGroupId: 'PolicyGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClonePolicyGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ClonePolicyGroupResponseBody;
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
      body: ClonePolicyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigADConnectorTrustRequest extends $tea.Model {
  officeSiteId?: string;
  regionId?: string;
  trustKey?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      trustKey: 'TrustKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      regionId: 'string',
      trustKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigADConnectorTrustResponseBody extends $tea.Model {
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

export class ConfigADConnectorTrustResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConfigADConnectorTrustResponseBody;
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
      body: ConfigADConnectorTrustResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigADConnectorUserRequest extends $tea.Model {
  domainPassword?: string;
  domainUserName?: string;
  OUName?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      OUName: 'OUName',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainPassword: 'string',
      domainUserName: 'string',
      OUName: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigADConnectorUserResponseBody extends $tea.Model {
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

export class ConfigADConnectorUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ConfigADConnectorUserResponseBody;
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
      body: ConfigADConnectorUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyImageRequest extends $tea.Model {
  destinationDescription?: string;
  destinationImageName?: string;
  destinationRegionId?: string;
  imageId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationDescription: 'DestinationDescription',
      destinationImageName: 'DestinationImageName',
      destinationRegionId: 'DestinationRegionId',
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationDescription: 'string',
      destinationImageName: 'string',
      destinationRegionId: 'string',
      imageId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyImageResponseBody extends $tea.Model {
  imageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CopyImageResponseBody;
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
      body: CopyImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorDirectoryRequest extends $tea.Model {
  desktopAccessType?: string;
  directoryName?: string;
  dnsAddress?: string[];
  domainName?: string;
  domainPassword?: string;
  domainUserName?: string;
  enableAdminAccess?: boolean;
  mfaEnabled?: boolean;
  regionId?: string;
  specification?: number;
  subDomainDnsAddress?: string[];
  subDomainName?: string;
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      desktopAccessType: 'DesktopAccessType',
      directoryName: 'DirectoryName',
      dnsAddress: 'DnsAddress',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      enableAdminAccess: 'EnableAdminAccess',
      mfaEnabled: 'MfaEnabled',
      regionId: 'RegionId',
      specification: 'Specification',
      subDomainDnsAddress: 'SubDomainDnsAddress',
      subDomainName: 'SubDomainName',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAccessType: 'string',
      directoryName: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      enableAdminAccess: 'boolean',
      mfaEnabled: 'boolean',
      regionId: 'string',
      specification: 'number',
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorDirectoryResponseBody extends $tea.Model {
  adConnectors?: CreateADConnectorDirectoryResponseBodyAdConnectors[];
  directoryId?: string;
  requestId?: string;
  trustPassword?: string;
  static names(): { [key: string]: string } {
    return {
      adConnectors: 'AdConnectors',
      directoryId: 'DirectoryId',
      requestId: 'RequestId',
      trustPassword: 'TrustPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adConnectors: { 'type': 'array', 'itemType': CreateADConnectorDirectoryResponseBodyAdConnectors },
      directoryId: 'string',
      requestId: 'string',
      trustPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateADConnectorDirectoryResponseBody;
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
      body: CreateADConnectorDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorOfficeSiteRequest extends $tea.Model {
  adHostname?: string;
  bandwidth?: number;
  cenId?: string;
  cenOwnerId?: number;
  cidrBlock?: string;
  desktopAccessType?: string;
  dnsAddress?: string[];
  domainName?: string;
  domainPassword?: string;
  domainUserName?: string;
  enableAdminAccess?: boolean;
  enableInternetAccess?: boolean;
  mfaEnabled?: boolean;
  officeSiteName?: string;
  protocolType?: string;
  regionId?: string;
  specification?: number;
  subDomainDnsAddress?: string[];
  subDomainName?: string;
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      adHostname: 'AdHostname',
      bandwidth: 'Bandwidth',
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      cidrBlock: 'CidrBlock',
      desktopAccessType: 'DesktopAccessType',
      dnsAddress: 'DnsAddress',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      enableAdminAccess: 'EnableAdminAccess',
      enableInternetAccess: 'EnableInternetAccess',
      mfaEnabled: 'MfaEnabled',
      officeSiteName: 'OfficeSiteName',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      specification: 'Specification',
      subDomainDnsAddress: 'SubDomainDnsAddress',
      subDomainName: 'SubDomainName',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adHostname: 'string',
      bandwidth: 'number',
      cenId: 'string',
      cenOwnerId: 'number',
      cidrBlock: 'string',
      desktopAccessType: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      enableAdminAccess: 'boolean',
      enableInternetAccess: 'boolean',
      mfaEnabled: 'boolean',
      officeSiteName: 'string',
      protocolType: 'string',
      regionId: 'string',
      specification: 'number',
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorOfficeSiteResponseBody extends $tea.Model {
  officeSiteId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorOfficeSiteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateADConnectorOfficeSiteResponseBody;
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
      body: CreateADConnectorOfficeSiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBundleRequest extends $tea.Model {
  bundleName?: string;
  description?: string;
  desktopType?: string;
  imageId?: string;
  language?: string;
  regionId?: string;
  rootDiskPerformanceLevel?: string;
  rootDiskSizeGib?: number;
  userDiskPerformanceLevel?: string;
  userDiskSizeGib?: number[];
  static names(): { [key: string]: string } {
    return {
      bundleName: 'BundleName',
      description: 'Description',
      desktopType: 'DesktopType',
      imageId: 'ImageId',
      language: 'Language',
      regionId: 'RegionId',
      rootDiskPerformanceLevel: 'RootDiskPerformanceLevel',
      rootDiskSizeGib: 'RootDiskSizeGib',
      userDiskPerformanceLevel: 'UserDiskPerformanceLevel',
      userDiskSizeGib: 'UserDiskSizeGib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleName: 'string',
      description: 'string',
      desktopType: 'string',
      imageId: 'string',
      language: 'string',
      regionId: 'string',
      rootDiskPerformanceLevel: 'string',
      rootDiskSizeGib: 'number',
      userDiskPerformanceLevel: 'string',
      userDiskSizeGib: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBundleResponseBody extends $tea.Model {
  bundleId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBundleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBundleResponseBody;
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
      body: CreateBundleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopGroupRequest extends $tea.Model {
  allClassifyUsers?: boolean;
  allowAutoSetup?: number;
  allowBufferCount?: number;
  autoPay?: boolean;
  bindAmount?: number;
  bundleId?: string;
  chargeType?: string;
  classify?: string;
  clientToken?: string;
  comments?: string;
  defaultInitDesktopCount?: number;
  desktopGroupName?: string;
  directoryId?: string;
  endUserIds?: string[];
  keepDuration?: number;
  loadPolicy?: number;
  maxDesktopsCount?: number;
  minDesktopsCount?: number;
  officeSiteId?: string;
  ownType?: number;
  period?: number;
  periodUnit?: string;
  policyGroupId?: string;
  regionId?: string;
  resetType?: number;
  scaleStrategyId?: string;
  volumeEncryptionEnabled?: boolean;
  volumeEncryptionKey?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      allClassifyUsers: 'AllClassifyUsers',
      allowAutoSetup: 'AllowAutoSetup',
      allowBufferCount: 'AllowBufferCount',
      autoPay: 'AutoPay',
      bindAmount: 'BindAmount',
      bundleId: 'BundleId',
      chargeType: 'ChargeType',
      classify: 'Classify',
      clientToken: 'ClientToken',
      comments: 'Comments',
      defaultInitDesktopCount: 'DefaultInitDesktopCount',
      desktopGroupName: 'DesktopGroupName',
      directoryId: 'DirectoryId',
      endUserIds: 'EndUserIds',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxDesktopsCount: 'MaxDesktopsCount',
      minDesktopsCount: 'MinDesktopsCount',
      officeSiteId: 'OfficeSiteId',
      ownType: 'OwnType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      resetType: 'ResetType',
      scaleStrategyId: 'ScaleStrategyId',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allClassifyUsers: 'boolean',
      allowAutoSetup: 'number',
      allowBufferCount: 'number',
      autoPay: 'boolean',
      bindAmount: 'number',
      bundleId: 'string',
      chargeType: 'string',
      classify: 'string',
      clientToken: 'string',
      comments: 'string',
      defaultInitDesktopCount: 'number',
      desktopGroupName: 'string',
      directoryId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      keepDuration: 'number',
      loadPolicy: 'number',
      maxDesktopsCount: 'number',
      minDesktopsCount: 'number',
      officeSiteId: 'string',
      ownType: 'number',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      regionId: 'string',
      resetType: 'number',
      scaleStrategyId: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopGroupResponseBody extends $tea.Model {
  desktopGroupId?: string;
  orderIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      orderIds: 'OrderIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      orderIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDesktopGroupResponseBody;
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
      body: CreateDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequest extends $tea.Model {
  amount?: number;
  autoPay?: boolean;
  autoRenew?: boolean;
  bundleId?: string;
  chargeType?: string;
  desktopName?: string;
  desktopNameSuffix?: boolean;
  directoryId?: string;
  endUserId?: string[];
  groupId?: string;
  hostname?: string;
  officeSiteId?: string;
  period?: number;
  periodUnit?: string;
  policyGroupId?: string;
  promotionId?: string;
  regionId?: string;
  tag?: CreateDesktopsRequestTag[];
  userAssignMode?: string;
  userName?: string;
  volumeEncryptionEnabled?: boolean;
  volumeEncryptionKey?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bundleId: 'BundleId',
      chargeType: 'ChargeType',
      desktopName: 'DesktopName',
      desktopNameSuffix: 'DesktopNameSuffix',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      groupId: 'GroupId',
      hostname: 'Hostname',
      officeSiteId: 'OfficeSiteId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      tag: 'Tag',
      userAssignMode: 'UserAssignMode',
      userName: 'UserName',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bundleId: 'string',
      chargeType: 'string',
      desktopName: 'string',
      desktopNameSuffix: 'boolean',
      directoryId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      hostname: 'string',
      officeSiteId: 'string',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      promotionId: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDesktopsRequestTag },
      userAssignMode: 'string',
      userName: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsResponseBody extends $tea.Model {
  desktopId?: string[];
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDesktopsResponseBody;
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
      body: CreateDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskEncryptionServiceRequest extends $tea.Model {
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

export class CreateDiskEncryptionServiceResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskEncryptionServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDiskEncryptionServiceResponseBody;
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
      body: CreateDiskEncryptionServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequest extends $tea.Model {
  autoCleanUserdata?: boolean;
  description?: string;
  desktopId?: string;
  diskType?: string;
  imageName?: string;
  imageResourceType?: string;
  regionId?: string;
  snapshotId?: string;
  snapshotIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoCleanUserdata: 'AutoCleanUserdata',
      description: 'Description',
      desktopId: 'DesktopId',
      diskType: 'DiskType',
      imageName: 'ImageName',
      imageResourceType: 'ImageResourceType',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
      snapshotIds: 'SnapshotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCleanUserdata: 'boolean',
      description: 'string',
      desktopId: 'string',
      diskType: 'string',
      imageName: 'string',
      imageResourceType: 'string',
      regionId: 'string',
      snapshotId: 'string',
      snapshotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageResponseBody extends $tea.Model {
  imageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateImageResponseBody;
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
      body: CreateImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNASFileSystemRequest extends $tea.Model {
  description?: string;
  encryptType?: string;
  name?: string;
  officeSiteId?: string;
  regionId?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      encryptType: 'EncryptType',
      name: 'Name',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      encryptType: 'string',
      name: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNASFileSystemResponseBody extends $tea.Model {
  fileSystemId?: string;
  fileSystemName?: string;
  mountTargetDomain?: string;
  officeSiteId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      fileSystemName: 'FileSystemName',
      mountTargetDomain: 'MountTargetDomain',
      officeSiteId: 'OfficeSiteId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      fileSystemName: 'string',
      mountTargetDomain: 'string',
      officeSiteId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNASFileSystemResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateNASFileSystemResponseBody;
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
      body: CreateNASFileSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPackageRequest extends $tea.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  bandwidth?: number;
  internetChargeType?: string;
  officeSiteId?: string;
  period?: number;
  periodUnit?: string;
  promotionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bandwidth: 'Bandwidth',
      internetChargeType: 'InternetChargeType',
      officeSiteId: 'OfficeSiteId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bandwidth: 'number',
      internetChargeType: 'string',
      officeSiteId: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPackageResponseBody extends $tea.Model {
  networkPackageId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackageId: 'NetworkPackageId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateNetworkPackageResponseBody;
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
      body: CreateNetworkPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequest extends $tea.Model {
  authorizeAccessPolicyRule?: CreatePolicyGroupRequestAuthorizeAccessPolicyRule[];
  authorizeSecurityPolicyRule?: CreatePolicyGroupRequestAuthorizeSecurityPolicyRule[];
  cameraRedirect?: string;
  clientType?: CreatePolicyGroupRequestClientType[];
  clipboard?: string;
  domainList?: string;
  gpuAcceleration?: string;
  html5Access?: string;
  html5FileTransfer?: string;
  localDrive?: string;
  name?: string;
  netRedirect?: string;
  preemptLogin?: string;
  preemptLoginUser?: string[];
  printerRedirection?: string;
  recording?: string;
  recordingEndTime?: string;
  recordingFps?: number;
  recordingStartTime?: string;
  regionId?: string;
  usbRedirect?: string;
  usbSupplyRedirectRule?: CreatePolicyGroupRequestUsbSupplyRedirectRule[];
  visualQuality?: string;
  watermark?: string;
  watermarkTransparency?: string;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      authorizeAccessPolicyRule: 'AuthorizeAccessPolicyRule',
      authorizeSecurityPolicyRule: 'AuthorizeSecurityPolicyRule',
      cameraRedirect: 'CameraRedirect',
      clientType: 'ClientType',
      clipboard: 'Clipboard',
      domainList: 'DomainList',
      gpuAcceleration: 'GpuAcceleration',
      html5Access: 'Html5Access',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      name: 'Name',
      netRedirect: 'NetRedirect',
      preemptLogin: 'PreemptLogin',
      preemptLoginUser: 'PreemptLoginUser',
      printerRedirection: 'PrinterRedirection',
      recording: 'Recording',
      recordingEndTime: 'RecordingEndTime',
      recordingFps: 'RecordingFps',
      recordingStartTime: 'RecordingStartTime',
      regionId: 'RegionId',
      usbRedirect: 'UsbRedirect',
      usbSupplyRedirectRule: 'UsbSupplyRedirectRule',
      visualQuality: 'VisualQuality',
      watermark: 'Watermark',
      watermarkTransparency: 'WatermarkTransparency',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeAccessPolicyRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestAuthorizeAccessPolicyRule },
      authorizeSecurityPolicyRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestAuthorizeSecurityPolicyRule },
      cameraRedirect: 'string',
      clientType: { 'type': 'array', 'itemType': CreatePolicyGroupRequestClientType },
      clipboard: 'string',
      domainList: 'string',
      gpuAcceleration: 'string',
      html5Access: 'string',
      html5FileTransfer: 'string',
      localDrive: 'string',
      name: 'string',
      netRedirect: 'string',
      preemptLogin: 'string',
      preemptLoginUser: { 'type': 'array', 'itemType': 'string' },
      printerRedirection: 'string',
      recording: 'string',
      recordingEndTime: 'string',
      recordingFps: 'number',
      recordingStartTime: 'string',
      regionId: 'string',
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestUsbSupplyRedirectRule },
      visualQuality: 'string',
      watermark: 'string',
      watermarkTransparency: 'string',
      watermarkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupResponseBody extends $tea.Model {
  policyGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyGroupId: 'PolicyGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePolicyGroupResponseBody;
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
      body: CreatePolicyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRAMDirectoryRequest extends $tea.Model {
  desktopAccessType?: string;
  directoryName?: string;
  enableAdminAccess?: boolean;
  enableInternetAccess?: boolean;
  regionId?: string;
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      desktopAccessType: 'DesktopAccessType',
      directoryName: 'DirectoryName',
      enableAdminAccess: 'EnableAdminAccess',
      enableInternetAccess: 'EnableInternetAccess',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAccessType: 'string',
      directoryName: 'string',
      enableAdminAccess: 'boolean',
      enableInternetAccess: 'boolean',
      regionId: 'string',
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRAMDirectoryResponseBody extends $tea.Model {
  directoryId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRAMDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRAMDirectoryResponseBody;
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
      body: CreateRAMDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimpleOfficeSiteRequest extends $tea.Model {
  bandwidth?: number;
  cenId?: string;
  cenOwnerId?: number;
  cidrBlock?: string;
  cloudBoxOfficeSite?: boolean;
  desktopAccessType?: string;
  enableAdminAccess?: boolean;
  enableInternetAccess?: boolean;
  needVerifyZeroDevice?: boolean;
  officeSiteName?: string;
  regionId?: string;
  vSwitchId?: string[];
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      cidrBlock: 'CidrBlock',
      cloudBoxOfficeSite: 'CloudBoxOfficeSite',
      desktopAccessType: 'DesktopAccessType',
      enableAdminAccess: 'EnableAdminAccess',
      enableInternetAccess: 'EnableInternetAccess',
      needVerifyZeroDevice: 'NeedVerifyZeroDevice',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cenId: 'string',
      cenOwnerId: 'number',
      cidrBlock: 'string',
      cloudBoxOfficeSite: 'boolean',
      desktopAccessType: 'string',
      enableAdminAccess: 'boolean',
      enableInternetAccess: 'boolean',
      needVerifyZeroDevice: 'boolean',
      officeSiteName: 'string',
      regionId: 'string',
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimpleOfficeSiteResponseBody extends $tea.Model {
  officeSiteId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimpleOfficeSiteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSimpleOfficeSiteResponseBody;
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
      body: CreateSimpleOfficeSiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotRequest extends $tea.Model {
  description?: string;
  desktopId?: string;
  regionId?: string;
  snapshotName?: string;
  sourceDiskType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      desktopId: 'DesktopId',
      regionId: 'RegionId',
      snapshotName: 'SnapshotName',
      sourceDiskType: 'SourceDiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      desktopId: 'string',
      regionId: 'string',
      snapshotName: 'string',
      sourceDiskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponseBody extends $tea.Model {
  requestId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSnapshotResponseBody;
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
      body: CreateSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBundlesRequest extends $tea.Model {
  bundleId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBundlesResponseBody extends $tea.Model {
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

export class DeleteBundlesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteBundlesResponseBody;
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
      body: DeleteBundlesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDesktopGroupRequest extends $tea.Model {
  desktopGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDesktopGroupResponseBody extends $tea.Model {
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

export class DeleteDesktopGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDesktopGroupResponseBody;
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
      body: DeleteDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDesktopsRequest extends $tea.Model {
  desktopId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDesktopsResponseBody extends $tea.Model {
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

export class DeleteDesktopsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDesktopsResponseBody;
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
      body: DeleteDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoriesRequest extends $tea.Model {
  directoryId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoriesResponseBody extends $tea.Model {
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

export class DeleteDirectoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDirectoriesResponseBody;
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
      body: DeleteDirectoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesRequest extends $tea.Model {
  imageId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesResponseBody extends $tea.Model {
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

export class DeleteImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteImagesResponseBody;
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
      body: DeleteImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNASFileSystemsRequest extends $tea.Model {
  fileSystemId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNASFileSystemsResponseBody extends $tea.Model {
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

export class DeleteNASFileSystemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteNASFileSystemsResponseBody;
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
      body: DeleteNASFileSystemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkPackagesRequest extends $tea.Model {
  networkPackageId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackageId: 'NetworkPackageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkPackagesResponseBody extends $tea.Model {
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

export class DeleteNetworkPackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteNetworkPackagesResponseBody;
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
      body: DeleteNetworkPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOfficeSitesRequest extends $tea.Model {
  officeSiteId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOfficeSitesResponseBody extends $tea.Model {
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

export class DeleteOfficeSitesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteOfficeSitesResponseBody;
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
      body: DeleteOfficeSitesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyGroupsRequest extends $tea.Model {
  policyGroupId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyGroupId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyGroupsResponseBody extends $tea.Model {
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

export class DeletePolicyGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePolicyGroupsResponseBody;
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
      body: DeletePolicyGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotRequest extends $tea.Model {
  regionId?: string;
  snapshotId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      snapshotId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotResponseBody extends $tea.Model {
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

export class DeleteSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSnapshotResponseBody;
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
      body: DeleteSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualMFADeviceRequest extends $tea.Model {
  regionId?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualMFADeviceResponseBody extends $tea.Model {
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

export class DeleteVirtualMFADeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteVirtualMFADeviceResponseBody;
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
      body: DeleteVirtualMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventStackInfoRequest extends $tea.Model {
  desktopId?: string;
  eventName?: string;
  lang?: string;
  regionId?: string;
  uniqueInfo?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      eventName: 'EventName',
      lang: 'Lang',
      regionId: 'RegionId',
      uniqueInfo: 'UniqueInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      eventName: 'string',
      lang: 'string',
      regionId: 'string',
      uniqueInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventStackInfoResponseBody extends $tea.Model {
  requestId?: string;
  stackInfo?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackInfo: 'StackInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventStackInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAlarmEventStackInfoResponseBody;
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
      body: DescribeAlarmEventStackInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesRequest extends $tea.Model {
  bundleId?: string[];
  bundleType?: string;
  checkStock?: boolean;
  cpuCount?: number;
  desktopTypeFamily?: string;
  fotaChannel?: string;
  fromDesktopGroup?: boolean;
  gpuCount?: number;
  maxResults?: number;
  memorySize?: number;
  nextToken?: string;
  protocolType?: string;
  regionId?: string;
  supportMultiSession?: boolean;
  volumeEncryptionEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      bundleType: 'BundleType',
      checkStock: 'CheckStock',
      cpuCount: 'CpuCount',
      desktopTypeFamily: 'DesktopTypeFamily',
      fotaChannel: 'FotaChannel',
      fromDesktopGroup: 'FromDesktopGroup',
      gpuCount: 'GpuCount',
      maxResults: 'MaxResults',
      memorySize: 'MemorySize',
      nextToken: 'NextToken',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      supportMultiSession: 'SupportMultiSession',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: { 'type': 'array', 'itemType': 'string' },
      bundleType: 'string',
      checkStock: 'boolean',
      cpuCount: 'number',
      desktopTypeFamily: 'string',
      fotaChannel: 'string',
      fromDesktopGroup: 'boolean',
      gpuCount: 'number',
      maxResults: 'number',
      memorySize: 'number',
      nextToken: 'string',
      protocolType: 'string',
      regionId: 'string',
      supportMultiSession: 'boolean',
      volumeEncryptionEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponseBody extends $tea.Model {
  bundles?: DescribeBundlesResponseBodyBundles[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bundles: 'Bundles',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundles: { 'type': 'array', 'itemType': DescribeBundlesResponseBodyBundles },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeBundlesResponseBody;
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
      body: DescribeBundlesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBody extends $tea.Model {
  cens?: DescribeCensResponseBodyCens[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      cens: 'Cens',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cens: { 'type': 'array', 'itemType': DescribeCensResponseBodyCens },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCensResponseBody;
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
      body: DescribeCensResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsRequest extends $tea.Model {
  desktopId?: string;
  desktopIp?: string;
  desktopName?: string;
  directoryId?: string;
  endTime?: string;
  endUserId?: string;
  eventType?: string;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  officeSiteName?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopIp: 'DesktopIp',
      desktopName: 'DesktopName',
      directoryId: 'DirectoryId',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      eventType: 'EventType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopIp: 'string',
      desktopName: 'string',
      directoryId: 'string',
      endTime: 'string',
      endUserId: 'string',
      eventType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsResponseBody extends $tea.Model {
  events?: DescribeClientEventsResponseBodyEvents[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeClientEventsResponseBodyEvents },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeClientEventsResponseBody;
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
      body: DescribeClientEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopGroupsRequest extends $tea.Model {
  desktopGroupId?: string;
  desktopGroupName?: string;
  endUserIds?: string[];
  excludedEndUserIds?: string[];
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  ownType?: number;
  period?: number;
  periodUnit?: string;
  policyGroupId?: string;
  regionId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      endUserIds: 'EndUserIds',
      excludedEndUserIds: 'ExcludedEndUserIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      ownType: 'OwnType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      excludedEndUserIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      ownType: 'number',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      regionId: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopGroupsResponseBody extends $tea.Model {
  desktopGroups?: DescribeDesktopGroupsResponseBodyDesktopGroups[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroups: 'DesktopGroups',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroups: { 'type': 'array', 'itemType': DescribeDesktopGroupsResponseBodyDesktopGroups },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDesktopGroupsResponseBody;
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
      body: DescribeDesktopGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopIdsByVulNamesRequest extends $tea.Model {
  necessity?: string;
  officeSiteId?: string;
  regionId?: string;
  type?: string;
  vulName?: string[];
  static names(): { [key: string]: string } {
    return {
      necessity: 'Necessity',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      type: 'Type',
      vulName: 'VulName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      necessity: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      type: 'string',
      vulName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopIdsByVulNamesResponseBody extends $tea.Model {
  desktopItems?: DescribeDesktopIdsByVulNamesResponseBodyDesktopItems[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopItems: 'DesktopItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopItems: { 'type': 'array', 'itemType': DescribeDesktopIdsByVulNamesResponseBodyDesktopItems },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopIdsByVulNamesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDesktopIdsByVulNamesResponseBody;
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
      body: DescribeDesktopIdsByVulNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesRequest extends $tea.Model {
  appliedScope?: string;
  cpuCount?: number;
  desktopIdForModify?: string;
  desktopTypeId?: string;
  gpuCount?: number;
  instanceTypeFamily?: string;
  memorySize?: number;
  orderType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appliedScope: 'AppliedScope',
      cpuCount: 'CpuCount',
      desktopIdForModify: 'DesktopIdForModify',
      desktopTypeId: 'DesktopTypeId',
      gpuCount: 'GpuCount',
      instanceTypeFamily: 'InstanceTypeFamily',
      memorySize: 'MemorySize',
      orderType: 'OrderType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedScope: 'string',
      cpuCount: 'number',
      desktopIdForModify: 'string',
      desktopTypeId: 'string',
      gpuCount: 'number',
      instanceTypeFamily: 'string',
      memorySize: 'number',
      orderType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesResponseBody extends $tea.Model {
  desktopTypes?: DescribeDesktopTypesResponseBodyDesktopTypes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopTypes: 'DesktopTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopTypes: { 'type': 'array', 'itemType': DescribeDesktopTypesResponseBodyDesktopTypes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDesktopTypesResponseBody;
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
      body: DescribeDesktopTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsRequest extends $tea.Model {
  chargeType?: string;
  desktopId?: string[];
  desktopName?: string;
  desktopStatus?: string;
  directoryId?: string;
  endUserId?: string[];
  excludedEndUserId?: string[];
  expiredTime?: string;
  filterDesktopGroup?: boolean;
  groupId?: string;
  managementFlag?: string;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  officeSiteName?: string;
  policyGroupId?: string;
  protocolType?: string;
  queryFotaUpdate?: boolean;
  regionId?: string;
  tag?: DescribeDesktopsRequestTag[];
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      excludedEndUserId: 'ExcludedEndUserId',
      expiredTime: 'ExpiredTime',
      filterDesktopGroup: 'FilterDesktopGroup',
      groupId: 'GroupId',
      managementFlag: 'ManagementFlag',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      policyGroupId: 'PolicyGroupId',
      protocolType: 'ProtocolType',
      queryFotaUpdate: 'QueryFotaUpdate',
      regionId: 'RegionId',
      tag: 'Tag',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopName: 'string',
      desktopStatus: 'string',
      directoryId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      excludedEndUserId: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      filterDesktopGroup: 'boolean',
      groupId: 'string',
      managementFlag: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      policyGroupId: 'string',
      protocolType: 'string',
      queryFotaUpdate: 'boolean',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDesktopsRequestTag },
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBody extends $tea.Model {
  desktops?: DescribeDesktopsResponseBodyDesktops[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      desktops: 'Desktops',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktops: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktops },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDesktopsResponseBody;
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
      body: DescribeDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsInGroupRequest extends $tea.Model {
  desktopGroupId?: string;
  maxResults?: number;
  nextToken?: string;
  payType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      payType: 'PayType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      payType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsInGroupResponseBody extends $tea.Model {
  nextToken?: string;
  onlinePrePaidDesktopsCount?: number;
  paidDesktops?: DescribeDesktopsInGroupResponseBodyPaidDesktops[];
  paidDesktopsCount?: number;
  postPaidDesktops?: DescribeDesktopsInGroupResponseBodyPostPaidDesktops[];
  postPaidDesktopsCount?: number;
  postPaidDesktopsTotalAmount?: number;
  requestId?: string;
  runningPrePaidDesktopsCount?: number;
  stopedPrePaidDesktopsCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      onlinePrePaidDesktopsCount: 'OnlinePrePaidDesktopsCount',
      paidDesktops: 'PaidDesktops',
      paidDesktopsCount: 'PaidDesktopsCount',
      postPaidDesktops: 'PostPaidDesktops',
      postPaidDesktopsCount: 'PostPaidDesktopsCount',
      postPaidDesktopsTotalAmount: 'PostPaidDesktopsTotalAmount',
      requestId: 'RequestId',
      runningPrePaidDesktopsCount: 'RunningPrePaidDesktopsCount',
      stopedPrePaidDesktopsCount: 'StopedPrePaidDesktopsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      onlinePrePaidDesktopsCount: 'number',
      paidDesktops: { 'type': 'array', 'itemType': DescribeDesktopsInGroupResponseBodyPaidDesktops },
      paidDesktopsCount: 'number',
      postPaidDesktops: { 'type': 'array', 'itemType': DescribeDesktopsInGroupResponseBodyPostPaidDesktops },
      postPaidDesktopsCount: 'number',
      postPaidDesktopsTotalAmount: 'number',
      requestId: 'string',
      runningPrePaidDesktopsCount: 'number',
      stopedPrePaidDesktopsCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsInGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDesktopsInGroupResponseBody;
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
      body: DescribeDesktopsInGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesRequest extends $tea.Model {
  directoryId?: string[];
  directoryStatus?: string;
  directoryType?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      directoryStatus: 'DirectoryStatus',
      directoryType: 'DirectoryType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: { 'type': 'array', 'itemType': 'string' },
      directoryStatus: 'string',
      directoryType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBody extends $tea.Model {
  adHostname?: string;
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      adHostname: 'AdHostname',
      directories: 'Directories',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adHostname: 'string',
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectories },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDirectoriesResponseBody;
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
      body: DescribeDirectoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowMetricRequest extends $tea.Model {
  endTime?: string;
  instanceId?: string;
  instanceType?: string;
  metricType?: string;
  period?: number;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      metricType: 'MetricType',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      metricType: 'string',
      period: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowMetricResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
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

export class DescribeFlowMetricResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFlowMetricResponseBody;
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
      body: DescribeFlowMetricResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowStatisticRequest extends $tea.Model {
  desktopId?: string;
  officeSiteId?: string;
  pageNumber?: number;
  pageSize?: number;
  period?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      officeSiteId: 'OfficeSiteId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      period: 'Period',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      officeSiteId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      period: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowStatisticResponseBody extends $tea.Model {
  desktopCount?: number;
  desktopFlowStatistic?: DescribeFlowStatisticResponseBodyDesktopFlowStatistic[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopCount: 'DesktopCount',
      desktopFlowStatistic: 'DesktopFlowStatistic',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopCount: 'number',
      desktopFlowStatistic: { 'type': 'array', 'itemType': DescribeFlowStatisticResponseBodyDesktopFlowStatistic },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowStatisticResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFlowStatisticResponseBody;
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
      body: DescribeFlowStatisticResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaPendingDesktopsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  taskUid?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      taskUid: 'TaskUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      taskUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaPendingDesktopsResponseBody extends $tea.Model {
  fotaPendingDesktops?: DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktops[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fotaPendingDesktops: 'FotaPendingDesktops',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fotaPendingDesktops: { 'type': 'array', 'itemType': DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktops },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaPendingDesktopsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFotaPendingDesktopsResponseBody;
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
      body: DescribeFotaPendingDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaTasksRequest extends $tea.Model {
  fotaStatus?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  taskUid?: string[];
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      fotaStatus: 'FotaStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      taskUid: 'TaskUid',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fotaStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      taskUid: { 'type': 'array', 'itemType': 'string' },
      userStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaTasksResponseBody extends $tea.Model {
  fotaTasks?: DescribeFotaTasksResponseBodyFotaTasks[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fotaTasks: 'FotaTasks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fotaTasks: { 'type': 'array', 'itemType': DescribeFotaTasksResponseBodyFotaTasks },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFotaTasksResponseBody;
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
      body: DescribeFotaTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListRequest extends $tea.Model {
  operateType?: string;
  regionId?: string;
  type?: string;
  vulInfo?: DescribeFrontVulPatchListRequestVulInfo[];
  static names(): { [key: string]: string } {
    return {
      operateType: 'OperateType',
      regionId: 'RegionId',
      type: 'Type',
      vulInfo: 'VulInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateType: 'string',
      regionId: 'string',
      type: 'string',
      vulInfo: { 'type': 'array', 'itemType': DescribeFrontVulPatchListRequestVulInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListResponseBody extends $tea.Model {
  frontPatchList?: DescribeFrontVulPatchListResponseBodyFrontPatchList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      frontPatchList: 'FrontPatchList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontPatchList: { 'type': 'array', 'itemType': DescribeFrontVulPatchListResponseBodyFrontPatchList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeFrontVulPatchListResponseBody;
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
      body: DescribeFrontVulPatchListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedVulRequest extends $tea.Model {
  currentPage?: number;
  dealed?: string;
  lang?: string;
  necessity?: string;
  officeSiteId?: string;
  pageSize?: number;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      lang: 'Lang',
      necessity: 'Necessity',
      officeSiteId: 'OfficeSiteId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dealed: 'string',
      lang: 'string',
      necessity: 'string',
      officeSiteId: 'string',
      pageSize: 'number',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedVulResponseBody extends $tea.Model {
  currentPage?: number;
  groupedVulItems?: DescribeGroupedVulResponseBodyGroupedVulItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      groupedVulItems: 'GroupedVulItems',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      groupedVulItems: { 'type': 'array', 'itemType': DescribeGroupedVulResponseBodyGroupedVulItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedVulResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGroupedVulResponseBody;
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
      body: DescribeGroupedVulResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModifiedRecordsRequest extends $tea.Model {
  desktopId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModifiedRecordsResponseBody extends $tea.Model {
  imageModifiedRecords?: DescribeImageModifiedRecordsResponseBodyImageModifiedRecords[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageModifiedRecords: 'ImageModifiedRecords',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageModifiedRecords: { 'type': 'array', 'itemType': DescribeImageModifiedRecordsResponseBodyImageModifiedRecords },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModifiedRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeImageModifiedRecordsResponseBody;
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
      body: DescribeImageModifiedRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePermissionRequest extends $tea.Model {
  imageId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePermissionResponseBody extends $tea.Model {
  aliUids?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUids: 'AliUids',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUids: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeImagePermissionResponseBody;
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
      body: DescribeImagePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesRequest extends $tea.Model {
  desktopInstanceType?: string;
  fotaChannel?: string;
  gpuCategory?: boolean;
  gpuDriverVersion?: string;
  imageId?: string[];
  imageStatus?: string;
  imageType?: string;
  languageType?: string;
  maxResults?: number;
  nextToken?: string;
  osType?: string;
  protocolType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopInstanceType: 'DesktopInstanceType',
      fotaChannel: 'FotaChannel',
      gpuCategory: 'GpuCategory',
      gpuDriverVersion: 'GpuDriverVersion',
      imageId: 'ImageId',
      imageStatus: 'ImageStatus',
      imageType: 'ImageType',
      languageType: 'LanguageType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      osType: 'OsType',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopInstanceType: 'string',
      fotaChannel: 'string',
      gpuCategory: 'boolean',
      gpuDriverVersion: 'string',
      imageId: { 'type': 'array', 'itemType': 'string' },
      imageStatus: 'string',
      imageType: 'string',
      languageType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      osType: 'string',
      protocolType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBody extends $tea.Model {
  images?: DescribeImagesResponseBodyImages[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': DescribeImagesResponseBodyImages },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeImagesResponseBody;
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
      body: DescribeImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsRequest extends $tea.Model {
  commandType?: string;
  contentEncoding?: string;
  desktopId?: string;
  includeOutput?: boolean;
  invokeId?: string;
  invokeStatus?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commandType: 'CommandType',
      contentEncoding: 'ContentEncoding',
      desktopId: 'DesktopId',
      includeOutput: 'IncludeOutput',
      invokeId: 'InvokeId',
      invokeStatus: 'InvokeStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandType: 'string',
      contentEncoding: 'string',
      desktopId: 'string',
      includeOutput: 'boolean',
      invokeId: 'string',
      invokeStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBody extends $tea.Model {
  invocations?: DescribeInvocationsResponseBodyInvocations[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invocations: 'Invocations',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocations },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInvocationsResponseBody;
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
      body: DescribeInvocationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKmsKeysRequest extends $tea.Model {
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

export class DescribeKmsKeysResponseBody extends $tea.Model {
  authorizeStatus?: string;
  keys?: DescribeKmsKeysResponseBodyKeys[];
  kmsServiceStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizeStatus: 'AuthorizeStatus',
      keys: 'Keys',
      kmsServiceStatus: 'KmsServiceStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeStatus: 'string',
      keys: { 'type': 'array', 'itemType': DescribeKmsKeysResponseBodyKeys },
      kmsServiceStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKmsKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeKmsKeysResponseBody;
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
      body: DescribeKmsKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsRequest extends $tea.Model {
  fileSystemId?: string[];
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsResponseBody extends $tea.Model {
  fileSystems?: DescribeNASFileSystemsResponseBodyFileSystems[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystems: 'FileSystems',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystems: { 'type': 'array', 'itemType': DescribeNASFileSystemsResponseBodyFileSystems },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeNASFileSystemsResponseBody;
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
      body: DescribeNASFileSystemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPackagesRequest extends $tea.Model {
  internetChargeType?: string;
  maxResults?: number;
  networkPackageId?: string[];
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      internetChargeType: 'InternetChargeType',
      maxResults: 'MaxResults',
      networkPackageId: 'NetworkPackageId',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetChargeType: 'string',
      maxResults: 'number',
      networkPackageId: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPackagesResponseBody extends $tea.Model {
  networkPackages?: DescribeNetworkPackagesResponseBodyNetworkPackages[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackages: 'NetworkPackages',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackages: { 'type': 'array', 'itemType': DescribeNetworkPackagesResponseBodyNetworkPackages },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeNetworkPackagesResponseBody;
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
      body: DescribeNetworkPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string[];
  officeSiteType?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      officeSiteType: 'OfficeSiteType',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
      officeSiteType: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBody extends $tea.Model {
  nextToken?: string;
  officeSites?: DescribeOfficeSitesResponseBodyOfficeSites[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      officeSites: 'OfficeSites',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      officeSites: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSites },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeOfficeSitesResponseBody;
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
      body: DescribeOfficeSitesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  policyGroupId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      policyGroupId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBody extends $tea.Model {
  describePolicyGroups?: DescribePolicyGroupsResponseBodyDescribePolicyGroups[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      describePolicyGroups: 'DescribePolicyGroups',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      describePolicyGroups: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroups },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribePolicyGroupsResponseBody;
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
      body: DescribePolicyGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordingsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordingsResponseBody extends $tea.Model {
  nextToken?: string;
  recordings?: DescribeRecordingsResponseBodyRecordings[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      recordings: 'Recordings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      recordings: { 'type': 'array', 'itemType': DescribeRecordingsResponseBodyRecordings },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRecordingsResponseBody;
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
      body: DescribeRecordingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
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

export class DescribeScanTaskProgressRequest extends $tea.Model {
  regionId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanTaskProgressResponseBody extends $tea.Model {
  createTime?: string;
  requestId?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      requestId: 'RequestId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      requestId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanTaskProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeScanTaskProgressResponseBody;
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
      body: DescribeScanTaskProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusRequest extends $tea.Model {
  regionId?: string;
  securityEventId?: string[];
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityEventId: 'SecurityEventId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityEventId: { 'type': 'array', 'itemType': 'string' },
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusResponseBody extends $tea.Model {
  requestId?: string;
  securityEventOperationStatuses?: DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatuses[];
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEventOperationStatuses: 'SecurityEventOperationStatuses',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEventOperationStatuses: { 'type': 'array', 'itemType': DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatuses },
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSecurityEventOperationStatusResponseBody;
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
      body: DescribeSecurityEventOperationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsRequest extends $tea.Model {
  regionId?: string;
  securityEventId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      securityEventId: 'SecurityEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      securityEventId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsResponseBody extends $tea.Model {
  requestId?: string;
  securityEventOperations?: DescribeSecurityEventOperationsResponseBodySecurityEventOperations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEventOperations: 'SecurityEventOperations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEventOperations: { 'type': 'array', 'itemType': DescribeSecurityEventOperationsResponseBodySecurityEventOperations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSecurityEventOperationsResponseBody;
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
      body: DescribeSecurityEventOperationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsRequest extends $tea.Model {
  desktopId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  snapshots?: DescribeSnapshotsResponseBodySnapshots[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': DescribeSnapshotsResponseBodySnapshots },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSnapshotsResponseBody;
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
      body: DescribeSnapshotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventOverviewRequest extends $tea.Model {
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

export class DescribeSuspEventOverviewResponseBody extends $tea.Model {
  remindCount?: number;
  requestId?: string;
  seriousCount?: number;
  suspiciousCount?: number;
  static names(): { [key: string]: string } {
    return {
      remindCount: 'RemindCount',
      requestId: 'RequestId',
      seriousCount: 'SeriousCount',
      suspiciousCount: 'SuspiciousCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindCount: 'number',
      requestId: 'string',
      seriousCount: 'number',
      suspiciousCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventOverviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSuspEventOverviewResponseBody;
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
      body: DescribeSuspEventOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventQuaraFilesRequest extends $tea.Model {
  currentPage?: number;
  officeSiteId?: string;
  pageSize?: number;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      officeSiteId: 'OfficeSiteId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      officeSiteId: 'string',
      pageSize: 'number',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventQuaraFilesResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  quaraFiles?: DescribeSuspEventQuaraFilesResponseBodyQuaraFiles[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      quaraFiles: 'QuaraFiles',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      quaraFiles: { 'type': 'array', 'itemType': DescribeSuspEventQuaraFilesResponseBodyQuaraFiles },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventQuaraFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSuspEventQuaraFilesResponseBody;
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
      body: DescribeSuspEventQuaraFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsRequest extends $tea.Model {
  alarmUniqueInfo?: string;
  currentPage?: number;
  dealed?: string;
  lang?: string;
  levels?: string;
  officeSiteId?: string;
  pageSize?: number;
  parentEventType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmUniqueInfo: 'AlarmUniqueInfo',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      lang: 'Lang',
      levels: 'Levels',
      officeSiteId: 'OfficeSiteId',
      pageSize: 'PageSize',
      parentEventType: 'ParentEventType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmUniqueInfo: 'string',
      currentPage: 'number',
      dealed: 'string',
      lang: 'string',
      levels: 'string',
      officeSiteId: 'string',
      pageSize: 'number',
      parentEventType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: string;
  requestId?: string;
  suspEvents?: DescribeSuspEventsResponseBodySuspEvents[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      suspEvents: 'SuspEvents',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'string',
      requestId: 'string',
      suspEvents: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEvents },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSuspEventsResponseBody;
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
      body: DescribeSuspEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectionRecordsRequest extends $tea.Model {
  connectDurationFrom?: number;
  connectDurationTo?: number;
  connectEndTimeFrom?: number;
  connectEndTimeTo?: number;
  connectStartTimeFrom?: number;
  connectStartTimeTo?: number;
  desktopGroupId?: string;
  desktopId?: string;
  endUserId?: string;
  endUserType?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectDurationFrom: 'ConnectDurationFrom',
      connectDurationTo: 'ConnectDurationTo',
      connectEndTimeFrom: 'ConnectEndTimeFrom',
      connectEndTimeTo: 'ConnectEndTimeTo',
      connectStartTimeFrom: 'ConnectStartTimeFrom',
      connectStartTimeTo: 'ConnectStartTimeTo',
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
      endUserType: 'EndUserType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectDurationFrom: 'number',
      connectDurationTo: 'number',
      connectEndTimeFrom: 'number',
      connectEndTimeTo: 'number',
      connectStartTimeFrom: 'number',
      connectStartTimeTo: 'number',
      desktopGroupId: 'string',
      desktopId: 'string',
      endUserId: 'string',
      endUserType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectionRecordsResponseBody extends $tea.Model {
  connectionRecords?: DescribeUserConnectionRecordsResponseBodyConnectionRecords[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionRecords: 'ConnectionRecords',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionRecords: { 'type': 'array', 'itemType': DescribeUserConnectionRecordsResponseBodyConnectionRecords },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectionRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUserConnectionRecordsResponseBody;
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
      body: DescribeUserConnectionRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupRequest extends $tea.Model {
  connectState?: number;
  desktopGroupId?: string;
  endUserId?: string;
  filter?: string;
  maxResults?: number;
  nextToken?: string;
  queryUserDetail?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      connectState: 'ConnectState',
      desktopGroupId: 'DesktopGroupId',
      endUserId: 'EndUserId',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      queryUserDetail: 'QueryUserDetail',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectState: 'number',
      desktopGroupId: 'string',
      endUserId: 'string',
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      queryUserDetail: 'boolean',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBody extends $tea.Model {
  endUsers?: DescribeUsersInGroupResponseBodyEndUsers[];
  nextToken?: string;
  onlineUsersCount?: number;
  requestId?: string;
  usersCount?: number;
  static names(): { [key: string]: string } {
    return {
      endUsers: 'EndUsers',
      nextToken: 'NextToken',
      onlineUsersCount: 'OnlineUsersCount',
      requestId: 'RequestId',
      usersCount: 'UsersCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUsers: { 'type': 'array', 'itemType': DescribeUsersInGroupResponseBodyEndUsers },
      nextToken: 'string',
      onlineUsersCount: 'number',
      requestId: 'string',
      usersCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeUsersInGroupResponseBody;
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
      body: DescribeUsersInGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualMFADevicesRequest extends $tea.Model {
  endUserId?: string[];
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualMFADevicesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  virtualMFADevices?: DescribeVirtualMFADevicesResponseBodyVirtualMFADevices[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      virtualMFADevices: 'VirtualMFADevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      virtualMFADevices: { 'type': 'array', 'itemType': DescribeVirtualMFADevicesResponseBodyVirtualMFADevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualMFADevicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVirtualMFADevicesResponseBody;
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
      body: DescribeVirtualMFADevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsRequest extends $tea.Model {
  aliasName?: string;
  lang?: string;
  name?: string;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      lang: 'Lang',
      name: 'Name',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      lang: 'string',
      name: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsResponseBody extends $tea.Model {
  cves?: DescribeVulDetailsResponseBodyCves[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cves: 'Cves',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cves: { 'type': 'array', 'itemType': DescribeVulDetailsResponseBodyCves },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVulDetailsResponseBody;
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
      body: DescribeVulDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListRequest extends $tea.Model {
  aliasName?: string;
  currentPage?: number;
  dealed?: string;
  lang?: string;
  necessity?: string;
  officeSiteId?: string;
  pageSize?: number;
  regionId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      lang: 'Lang',
      necessity: 'Necessity',
      officeSiteId: 'OfficeSiteId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      currentPage: 'number',
      dealed: 'string',
      lang: 'string',
      necessity: 'string',
      officeSiteId: 'string',
      pageSize: 'number',
      regionId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  vulRecords?: DescribeVulListResponseBodyVulRecords[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vulRecords: 'VulRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vulRecords: { 'type': 'array', 'itemType': DescribeVulListResponseBodyVulRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVulListResponseBody;
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
      body: DescribeVulListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulOverviewRequest extends $tea.Model {
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

export class DescribeVulOverviewResponseBody extends $tea.Model {
  asapCount?: number;
  laterCount?: number;
  nntfCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      asapCount: 'AsapCount',
      laterCount: 'LaterCount',
      nntfCount: 'NntfCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asapCount: 'number',
      laterCount: 'number',
      nntfCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulOverviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeVulOverviewResponseBody;
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
      body: DescribeVulOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  regionId?: string;
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  requestId?: string;
  zones?: DescribeZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeZonesResponseBody;
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
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachCenRequest extends $tea.Model {
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachCenResponseBody extends $tea.Model {
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

export class DetachCenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetachCenResponseBody;
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
      body: DetachCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDesktopsInGroupRequest extends $tea.Model {
  desktopGroupId?: string;
  desktopIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      desktopIds: 'DesktopIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableDesktopsInGroupResponseBody extends $tea.Model {
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

export class DisableDesktopsInGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableDesktopsInGroupResponseBody;
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
      body: DisableDesktopsInGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateNetworkPackageRequest extends $tea.Model {
  networkPackageId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackageId: 'NetworkPackageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateNetworkPackageResponseBody extends $tea.Model {
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

export class DissociateNetworkPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DissociateNetworkPackageResponseBody;
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
      body: DissociateNetworkPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportClientEventsRequest extends $tea.Model {
  desktopId?: string;
  desktopName?: string;
  endTime?: string;
  endUserId?: string;
  eventType?: string;
  maxResults?: number;
  officeSiteId?: string;
  officeSiteName?: string;
  regionId?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      eventType: 'EventType',
      maxResults: 'MaxResults',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
      endTime: 'string',
      endUserId: 'string',
      eventType: 'string',
      maxResults: 'number',
      officeSiteId: 'string',
      officeSiteName: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportClientEventsResponseBody extends $tea.Model {
  requestId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportClientEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExportClientEventsResponseBody;
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
      body: ExportClientEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDesktopGroupInfoRequest extends $tea.Model {
  chargeType?: string;
  desktopGroupId?: string[];
  desktopGroupName?: string;
  endUserId?: string[];
  expiredTime?: string;
  langType?: string;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  policyGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      endUserId: 'EndUserId',
      expiredTime: 'ExpiredTime',
      langType: 'LangType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      desktopGroupId: { 'type': 'array', 'itemType': 'string' },
      desktopGroupName: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      langType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      policyGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDesktopGroupInfoResponseBody extends $tea.Model {
  requestId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDesktopGroupInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExportDesktopGroupInfoResponseBody;
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
      body: ExportDesktopGroupInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDesktopListInfoRequest extends $tea.Model {
  chargeType?: string;
  desktopId?: string[];
  desktopName?: string;
  desktopStatus?: string;
  endUserId?: string[];
  expiredTime?: string;
  groupId?: string;
  langType?: string;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string;
  policyGroupId?: string;
  regionId?: string;
  tag?: ExportDesktopListInfoRequestTag[];
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      endUserId: 'EndUserId',
      expiredTime: 'ExpiredTime',
      groupId: 'GroupId',
      langType: 'LangType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      tag: 'Tag',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopName: 'string',
      desktopStatus: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      groupId: 'string',
      langType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: 'string',
      policyGroupId: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': ExportDesktopListInfoRequestTag },
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDesktopListInfoResponseBody extends $tea.Model {
  requestId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDesktopListInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExportDesktopListInfoResponseBody;
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
      body: ExportDesktopListInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketRequest extends $tea.Model {
  desktopId?: string;
  endUserId?: string;
  ownerId?: number;
  password?: string;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  taskId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
      ownerId: 'OwnerId',
      password: 'Password',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      endUserId: 'string',
      ownerId: 'number',
      password: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  taskStatus?: string;
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
      taskStatus: 'string',
      ticket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetConnectionTicketResponseBody;
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
      body: GetConnectionTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailRequest extends $tea.Model {
  desktopGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailResponseBody extends $tea.Model {
  desktops?: GetDesktopGroupDetailResponseBodyDesktops;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktops: 'Desktops',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktops: GetDesktopGroupDetailResponseBodyDesktops,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetDesktopGroupDetailResponseBody;
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
      body: GetDesktopGroupDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeSiteSsoStatusRequest extends $tea.Model {
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeSiteSsoStatusResponseBody extends $tea.Model {
  requestId?: string;
  ssoStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ssoStatus: 'SsoStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ssoStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeSiteSsoStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOfficeSiteSsoStatusResponseBody;
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
      body: GetOfficeSiteSsoStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpMetadataRequest extends $tea.Model {
  directoryId?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpMetadataResponseBody extends $tea.Model {
  requestId?: string;
  spMetadata?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spMetadata: 'SpMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spMetadata: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpMetadataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSpMetadataResponseBody;
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
      body: GetSpMetadataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSecurityEventsRequest extends $tea.Model {
  operationCode?: string;
  operationParams?: string;
  regionId?: string;
  securityEvent?: HandleSecurityEventsRequestSecurityEvent[];
  static names(): { [key: string]: string } {
    return {
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      regionId: 'RegionId',
      securityEvent: 'SecurityEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationCode: 'string',
      operationParams: 'string',
      regionId: 'string',
      securityEvent: { 'type': 'array', 'itemType': HandleSecurityEventsRequestSecurityEvent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSecurityEventsResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSecurityEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: HandleSecurityEventsResponseBody;
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
      body: HandleSecurityEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoryUsersRequest extends $tea.Model {
  directoryId?: string;
  filter?: string;
  maxResults?: number;
  nextToken?: string;
  OUPath?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      OUPath: 'OUPath',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      OUPath: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoryUsersResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  users?: ListDirectoryUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': ListDirectoryUsersResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoryUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDirectoryUsersResponseBody;
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
      body: ListDirectoryUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteOverviewRequest extends $tea.Model {
  forceRefresh?: boolean;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string[];
  queryRange?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      forceRefresh: 'ForceRefresh',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      queryRange: 'QueryRange',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceRefresh: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
      queryRange: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteOverviewResponseBody extends $tea.Model {
  nextToken?: string;
  officeSiteOverviewResults?: ListOfficeSiteOverviewResponseBodyOfficeSiteOverviewResults[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      officeSiteOverviewResults: 'OfficeSiteOverviewResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      officeSiteOverviewResults: { 'type': 'array', 'itemType': ListOfficeSiteOverviewResponseBodyOfficeSiteOverviewResults },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteOverviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOfficeSiteOverviewResponseBody;
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
      body: ListOfficeSiteOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteUsersRequest extends $tea.Model {
  filter?: string;
  maxResults?: number;
  nextToken?: string;
  OUPath?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      OUPath: 'OUPath',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      maxResults: 'number',
      nextToken: 'string',
      OUPath: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteUsersResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  users?: ListOfficeSiteUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': ListOfficeSiteUsersResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOfficeSiteUsersResponseBody;
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
      body: ListOfficeSiteUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagResourcesResponseBody;
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
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAdOrganizationUnitsRequest extends $tea.Model {
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAdOrganizationUnitsResponseBody extends $tea.Model {
  OUNames?: ListUserAdOrganizationUnitsResponseBodyOUNames[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      OUNames: 'OUNames',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OUNames: { 'type': 'array', 'itemType': ListUserAdOrganizationUnitsResponseBodyOUNames },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAdOrganizationUnitsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListUserAdOrganizationUnitsResponseBody;
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
      body: ListUserAdOrganizationUnitsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockVirtualMFADeviceRequest extends $tea.Model {
  regionId?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockVirtualMFADeviceResponseBody extends $tea.Model {
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

export class LockVirtualMFADeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LockVirtualMFADeviceResponseBody;
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
      body: LockVirtualMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyADConnectorDirectoryRequest extends $tea.Model {
  adHostname?: string;
  directoryId?: string;
  directoryName?: string;
  dnsAddress?: string[];
  domainName?: string;
  domainPassword?: string;
  domainUserName?: string;
  mfaEnabled?: boolean;
  OUName?: string;
  regionId?: string;
  subDomainDnsAddress?: string[];
  subDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      adHostname: 'AdHostname',
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      dnsAddress: 'DnsAddress',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      mfaEnabled: 'MfaEnabled',
      OUName: 'OUName',
      regionId: 'RegionId',
      subDomainDnsAddress: 'SubDomainDnsAddress',
      subDomainName: 'SubDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adHostname: 'string',
      directoryId: 'string',
      directoryName: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      mfaEnabled: 'boolean',
      OUName: 'string',
      regionId: 'string',
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyADConnectorDirectoryResponseBody extends $tea.Model {
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

export class ModifyADConnectorDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyADConnectorDirectoryResponseBody;
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
      body: ModifyADConnectorDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyADConnectorOfficeSiteRequest extends $tea.Model {
  adHostname?: string;
  dnsAddress?: string[];
  domainName?: string;
  domainPassword?: string;
  domainUserName?: string;
  mfaEnabled?: boolean;
  OUName?: string;
  officeSiteId?: string;
  officeSiteName?: string;
  regionId?: string;
  subDomainDnsAddress?: string[];
  subDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      adHostname: 'AdHostname',
      dnsAddress: 'DnsAddress',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      mfaEnabled: 'MfaEnabled',
      OUName: 'OUName',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
      subDomainDnsAddress: 'SubDomainDnsAddress',
      subDomainName: 'SubDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adHostname: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      mfaEnabled: 'boolean',
      OUName: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      regionId: 'string',
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyADConnectorOfficeSiteResponseBody extends $tea.Model {
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

export class ModifyADConnectorOfficeSiteResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyADConnectorOfficeSiteResponseBody;
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
      body: ModifyADConnectorOfficeSiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBundleRequest extends $tea.Model {
  bundleId?: string;
  bundleName?: string;
  description?: string;
  imageId?: string;
  language?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      bundleName: 'BundleName',
      description: 'Description',
      imageId: 'ImageId',
      language: 'Language',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      bundleName: 'string',
      description: 'string',
      imageId: 'string',
      language: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBundleResponseBody extends $tea.Model {
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

export class ModifyBundleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyBundleResponseBody;
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
      body: ModifyBundleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopChargeTypeRequest extends $tea.Model {
  autoPay?: boolean;
  chargeType?: string;
  desktopId?: string[];
  period?: number;
  periodUnit?: string;
  promotionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      chargeType: 'ChargeType',
      desktopId: 'DesktopId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      chargeType: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopChargeTypeResponseBody extends $tea.Model {
  desktopId?: string[];
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopChargeTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDesktopChargeTypeResponseBody;
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
      body: ModifyDesktopChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopGroupRequest extends $tea.Model {
  allowAutoSetup?: number;
  allowBufferCount?: number;
  bindAmount?: number;
  classify?: string;
  comments?: string;
  desktopGroupId?: string;
  desktopGroupName?: string;
  imageId?: string;
  keepDuration?: number;
  loadPolicy?: number;
  maxDesktopsCount?: number;
  minDesktopsCount?: number;
  ownBundleId?: string;
  policyGroupId?: string;
  regionId?: string;
  resetType?: number;
  scaleStrategyId?: string;
  static names(): { [key: string]: string } {
    return {
      allowAutoSetup: 'AllowAutoSetup',
      allowBufferCount: 'AllowBufferCount',
      bindAmount: 'BindAmount',
      classify: 'Classify',
      comments: 'Comments',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      imageId: 'ImageId',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxDesktopsCount: 'MaxDesktopsCount',
      minDesktopsCount: 'MinDesktopsCount',
      ownBundleId: 'OwnBundleId',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      resetType: 'ResetType',
      scaleStrategyId: 'ScaleStrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowAutoSetup: 'number',
      allowBufferCount: 'number',
      bindAmount: 'number',
      classify: 'string',
      comments: 'string',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      imageId: 'string',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxDesktopsCount: 'number',
      minDesktopsCount: 'number',
      ownBundleId: 'string',
      policyGroupId: 'string',
      regionId: 'string',
      resetType: 'number',
      scaleStrategyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopGroupResponseBody extends $tea.Model {
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

export class ModifyDesktopGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDesktopGroupResponseBody;
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
      body: ModifyDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopHostNameRequest extends $tea.Model {
  desktopId?: string;
  newHostName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      newHostName: 'NewHostName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      newHostName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopHostNameResponseBody extends $tea.Model {
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

export class ModifyDesktopHostNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDesktopHostNameResponseBody;
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
      body: ModifyDesktopHostNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopNameRequest extends $tea.Model {
  desktopId?: string;
  newDesktopName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      newDesktopName: 'NewDesktopName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      newDesktopName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopNameResponseBody extends $tea.Model {
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

export class ModifyDesktopNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDesktopNameResponseBody;
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
      body: ModifyDesktopNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopSpecRequest extends $tea.Model {
  autoPay?: boolean;
  desktopId?: string;
  desktopType?: string;
  promotionId?: string;
  regionId?: string;
  rootDiskSizeGib?: number;
  userDiskPerformanceLevel?: string;
  userDiskSizeGib?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      desktopId: 'DesktopId',
      desktopType: 'DesktopType',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      rootDiskSizeGib: 'RootDiskSizeGib',
      userDiskPerformanceLevel: 'UserDiskPerformanceLevel',
      userDiskSizeGib: 'UserDiskSizeGib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      desktopId: 'string',
      desktopType: 'string',
      promotionId: 'string',
      regionId: 'string',
      rootDiskSizeGib: 'number',
      userDiskPerformanceLevel: 'string',
      userDiskSizeGib: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopSpecResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDesktopSpecResponseBody;
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
      body: ModifyDesktopSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopsPolicyGroupRequest extends $tea.Model {
  desktopId?: string[];
  policyGroupId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      policyGroupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopsPolicyGroupResponseBody extends $tea.Model {
  modifyResults?: ModifyDesktopsPolicyGroupResponseBodyModifyResults[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modifyResults: 'ModifyResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyResults: { 'type': 'array', 'itemType': ModifyDesktopsPolicyGroupResponseBodyModifyResults },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopsPolicyGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDesktopsPolicyGroupResponseBody;
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
      body: ModifyDesktopsPolicyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskSpecRequest extends $tea.Model {
  autoPay?: boolean;
  desktopId?: string;
  promotionId?: string;
  regionId?: string;
  rootDiskPerformanceLevel?: string;
  userDiskPerformanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      desktopId: 'DesktopId',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
      rootDiskPerformanceLevel: 'RootDiskPerformanceLevel',
      userDiskPerformanceLevel: 'UserDiskPerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      desktopId: 'string',
      promotionId: 'string',
      regionId: 'string',
      rootDiskPerformanceLevel: 'string',
      userDiskPerformanceLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskSpecResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskSpecResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDiskSpecResponseBody;
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
      body: ModifyDiskSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEntitlementRequest extends $tea.Model {
  desktopId?: string;
  endUserId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEntitlementResponseBody extends $tea.Model {
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

export class ModifyEntitlementResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyEntitlementResponseBody;
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
      body: ModifyEntitlementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageAttributeRequest extends $tea.Model {
  description?: string;
  imageId?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageId: 'ImageId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageAttributeResponseBody extends $tea.Model {
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

export class ModifyImageAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyImageAttributeResponseBody;
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
      body: ModifyImageAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImagePermissionRequest extends $tea.Model {
  addAccount?: number[];
  imageId?: string;
  regionId?: string;
  removeAccount?: number[];
  static names(): { [key: string]: string } {
    return {
      addAccount: 'AddAccount',
      imageId: 'ImageId',
      regionId: 'RegionId',
      removeAccount: 'RemoveAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addAccount: { 'type': 'array', 'itemType': 'number' },
      imageId: 'string',
      regionId: 'string',
      removeAccount: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImagePermissionResponseBody extends $tea.Model {
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

export class ModifyImagePermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyImagePermissionResponseBody;
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
      body: ModifyImagePermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNASDefaultMountTargetRequest extends $tea.Model {
  fileSystemId?: string;
  mountTargetDomain?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      mountTargetDomain: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNASDefaultMountTargetResponseBody extends $tea.Model {
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

export class ModifyNASDefaultMountTargetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyNASDefaultMountTargetResponseBody;
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
      body: ModifyNASDefaultMountTargetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkPackageBandwidthRequest extends $tea.Model {
  autoPay?: boolean;
  bandwidth?: number;
  networkPackageId?: string;
  promotionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      bandwidth: 'Bandwidth',
      networkPackageId: 'NetworkPackageId',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      bandwidth: 'number',
      networkPackageId: 'string',
      promotionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkPackageBandwidthResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkPackageBandwidthResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyNetworkPackageBandwidthResponseBody;
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
      body: ModifyNetworkPackageBandwidthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkPackageEnabledRequest extends $tea.Model {
  enabled?: boolean;
  networkPackageId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      networkPackageId: 'NetworkPackageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      networkPackageId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkPackageEnabledResponseBody extends $tea.Model {
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

export class ModifyNetworkPackageEnabledResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyNetworkPackageEnabledResponseBody;
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
      body: ModifyNetworkPackageEnabledResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteAttributeRequest extends $tea.Model {
  desktopAccessType?: string;
  needVerifyLoginRisk?: boolean;
  needVerifyZeroDevice?: boolean;
  officeSiteId?: string;
  officeSiteName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopAccessType: 'DesktopAccessType',
      needVerifyLoginRisk: 'NeedVerifyLoginRisk',
      needVerifyZeroDevice: 'NeedVerifyZeroDevice',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAccessType: 'string',
      needVerifyLoginRisk: 'boolean',
      needVerifyZeroDevice: 'boolean',
      officeSiteId: 'string',
      officeSiteName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteAttributeResponseBody extends $tea.Model {
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

export class ModifyOfficeSiteAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyOfficeSiteAttributeResponseBody;
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
      body: ModifyOfficeSiteAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteCrossDesktopAccessRequest extends $tea.Model {
  enableCrossDesktopAccess?: boolean;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enableCrossDesktopAccess: 'EnableCrossDesktopAccess',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCrossDesktopAccess: 'boolean',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteCrossDesktopAccessResponseBody extends $tea.Model {
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

export class ModifyOfficeSiteCrossDesktopAccessResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyOfficeSiteCrossDesktopAccessResponseBody;
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
      body: ModifyOfficeSiteCrossDesktopAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteMfaEnabledRequest extends $tea.Model {
  mfaEnabled?: boolean;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      mfaEnabled: 'MfaEnabled',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mfaEnabled: 'boolean',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteMfaEnabledResponseBody extends $tea.Model {
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

export class ModifyOfficeSiteMfaEnabledResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyOfficeSiteMfaEnabledResponseBody;
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
      body: ModifyOfficeSiteMfaEnabledResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOperateVulRequest extends $tea.Model {
  operateType?: string;
  reason?: string;
  regionId?: string;
  type?: string;
  vulInfo?: ModifyOperateVulRequestVulInfo[];
  static names(): { [key: string]: string } {
    return {
      operateType: 'OperateType',
      reason: 'Reason',
      regionId: 'RegionId',
      type: 'Type',
      vulInfo: 'VulInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateType: 'string',
      reason: 'string',
      regionId: 'string',
      type: 'string',
      vulInfo: { 'type': 'array', 'itemType': ModifyOperateVulRequestVulInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOperateVulResponseBody extends $tea.Model {
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

export class ModifyOperateVulResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyOperateVulResponseBody;
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
      body: ModifyOperateVulResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequest extends $tea.Model {
  authorizeAccessPolicyRule?: ModifyPolicyGroupRequestAuthorizeAccessPolicyRule[];
  authorizeSecurityPolicyRule?: ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule[];
  cameraRedirect?: string;
  clientType?: ModifyPolicyGroupRequestClientType[];
  clipboard?: string;
  domainList?: string;
  gpuAcceleration?: string;
  html5Access?: string;
  html5FileTransfer?: string;
  localDrive?: string;
  name?: string;
  netRedirect?: string;
  policyGroupId?: string;
  preemptLogin?: string;
  preemptLoginUser?: string[];
  printerRedirection?: string;
  recording?: string;
  recordingEndTime?: string;
  recordingFps?: number;
  recordingStartTime?: string;
  regionId?: string;
  revokeAccessPolicyRule?: ModifyPolicyGroupRequestRevokeAccessPolicyRule[];
  revokeSecurityPolicyRule?: ModifyPolicyGroupRequestRevokeSecurityPolicyRule[];
  usbRedirect?: string;
  usbSupplyRedirectRule?: ModifyPolicyGroupRequestUsbSupplyRedirectRule[];
  visualQuality?: string;
  watermark?: string;
  watermarkTransparency?: string;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      authorizeAccessPolicyRule: 'AuthorizeAccessPolicyRule',
      authorizeSecurityPolicyRule: 'AuthorizeSecurityPolicyRule',
      cameraRedirect: 'CameraRedirect',
      clientType: 'ClientType',
      clipboard: 'Clipboard',
      domainList: 'DomainList',
      gpuAcceleration: 'GpuAcceleration',
      html5Access: 'Html5Access',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      name: 'Name',
      netRedirect: 'NetRedirect',
      policyGroupId: 'PolicyGroupId',
      preemptLogin: 'PreemptLogin',
      preemptLoginUser: 'PreemptLoginUser',
      printerRedirection: 'PrinterRedirection',
      recording: 'Recording',
      recordingEndTime: 'RecordingEndTime',
      recordingFps: 'RecordingFps',
      recordingStartTime: 'RecordingStartTime',
      regionId: 'RegionId',
      revokeAccessPolicyRule: 'RevokeAccessPolicyRule',
      revokeSecurityPolicyRule: 'RevokeSecurityPolicyRule',
      usbRedirect: 'UsbRedirect',
      usbSupplyRedirectRule: 'UsbSupplyRedirectRule',
      visualQuality: 'VisualQuality',
      watermark: 'Watermark',
      watermarkTransparency: 'WatermarkTransparency',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeAccessPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestAuthorizeAccessPolicyRule },
      authorizeSecurityPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule },
      cameraRedirect: 'string',
      clientType: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestClientType },
      clipboard: 'string',
      domainList: 'string',
      gpuAcceleration: 'string',
      html5Access: 'string',
      html5FileTransfer: 'string',
      localDrive: 'string',
      name: 'string',
      netRedirect: 'string',
      policyGroupId: 'string',
      preemptLogin: 'string',
      preemptLoginUser: { 'type': 'array', 'itemType': 'string' },
      printerRedirection: 'string',
      recording: 'string',
      recordingEndTime: 'string',
      recordingFps: 'number',
      recordingStartTime: 'string',
      regionId: 'string',
      revokeAccessPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestRevokeAccessPolicyRule },
      revokeSecurityPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestRevokeSecurityPolicyRule },
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestUsbSupplyRedirectRule },
      visualQuality: 'string',
      watermark: 'string',
      watermarkTransparency: 'string',
      watermarkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupResponseBody extends $tea.Model {
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

export class ModifyPolicyGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyPolicyGroupResponseBody;
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
      body: ModifyPolicyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserEntitlementRequest extends $tea.Model {
  authorizeDesktopId?: string[];
  endUserId?: string[];
  regionId?: string;
  revokeDesktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      authorizeDesktopId: 'AuthorizeDesktopId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      revokeDesktopId: 'RevokeDesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeDesktopId: { 'type': 'array', 'itemType': 'string' },
      endUserId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      revokeDesktopId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserEntitlementResponseBody extends $tea.Model {
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

export class ModifyUserEntitlementResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyUserEntitlementResponseBody;
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
      body: ModifyUserEntitlementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserToDesktopGroupRequest extends $tea.Model {
  desktopGroupId?: string;
  newEndUserIds?: string[];
  oldEndUserIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      newEndUserIds: 'NewEndUserIds',
      oldEndUserIds: 'OldEndUserIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      newEndUserIds: { 'type': 'array', 'itemType': 'string' },
      oldEndUserIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserToDesktopGroupResponseBody extends $tea.Model {
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

export class ModifyUserToDesktopGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyUserToDesktopGroupResponseBody;
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
      body: ModifyUserToDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateVulsRequest extends $tea.Model {
  desktopId?: string[];
  operateType?: string;
  precondition?: number;
  reason?: string;
  regionId?: string;
  type?: string;
  vulName?: string[];
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      operateType: 'OperateType',
      precondition: 'Precondition',
      reason: 'Reason',
      regionId: 'RegionId',
      type: 'Type',
      vulName: 'VulName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      operateType: 'string',
      precondition: 'number',
      reason: 'string',
      regionId: 'string',
      type: 'string',
      vulName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateVulsResponseBody extends $tea.Model {
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

export class OperateVulsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OperateVulsResponseBody;
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
      body: OperateVulsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsRequest extends $tea.Model {
  desktopId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsResponseBody extends $tea.Model {
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

export class RebootDesktopsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RebootDesktopsResponseBody;
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
      body: RebootDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDesktopsRequest extends $tea.Model {
  desktopId?: string[];
  imageId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      imageId: 'ImageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      imageId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDesktopsResponseBody extends $tea.Model {
  rebuildResults?: RebuildDesktopsResponseBodyRebuildResults[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      rebuildResults: 'RebuildResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rebuildResults: { 'type': 'array', 'itemType': RebuildDesktopsResponseBodyRebuildResults },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDesktopsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RebuildDesktopsResponseBody;
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
      body: RebuildDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromDesktopGroupRequest extends $tea.Model {
  desktopGroupId?: string;
  desktopGroupIds?: string[];
  endUserIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      desktopGroupIds: 'DesktopGroupIds',
      endUserIds: 'EndUserIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      desktopGroupIds: { 'type': 'array', 'itemType': 'string' },
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromDesktopGroupResponseBody extends $tea.Model {
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

export class RemoveUserFromDesktopGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveUserFromDesktopGroupResponseBody;
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
      body: RemoveUserFromDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDesktopsRequest extends $tea.Model {
  autoPay?: boolean;
  desktopId?: string[];
  period?: number;
  periodUnit?: string;
  promotionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      desktopId: 'DesktopId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDesktopsResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDesktopsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenewDesktopsResponseBody;
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
      body: RenewDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewNetworkPackagesRequest extends $tea.Model {
  autoPay?: boolean;
  networkPackageId?: string[];
  period?: number;
  periodUnit?: string;
  promotionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      networkPackageId: 'NetworkPackageId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      networkPackageId: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewNetworkPackagesResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewNetworkPackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RenewNetworkPackagesResponseBody;
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
      body: RenewNetworkPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDesktopsRequest extends $tea.Model {
  desktopGroupId?: string;
  desktopId?: string[];
  imageId?: string;
  payType?: string;
  regionId?: string;
  resetType?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      imageId: 'ImageId',
      payType: 'PayType',
      regionId: 'RegionId',
      resetType: 'ResetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      imageId: 'string',
      payType: 'string',
      regionId: 'string',
      resetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDesktopsResponseBody extends $tea.Model {
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

export class ResetDesktopsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetDesktopsResponseBody;
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
      body: ResetDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNASDefaultMountTargetRequest extends $tea.Model {
  fileSystemId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNASDefaultMountTargetResponseBody extends $tea.Model {
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

export class ResetNASDefaultMountTargetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetNASDefaultMountTargetResponseBody;
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
      body: ResetNASDefaultMountTargetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSnapshotRequest extends $tea.Model {
  regionId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSnapshotResponseBody extends $tea.Model {
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

export class ResetSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResetSnapshotResponseBody;
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
      body: ResetSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackSuspEventQuaraFileRequest extends $tea.Model {
  desktopId?: string;
  quaraFieldId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      quaraFieldId: 'QuaraFieldId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      quaraFieldId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackSuspEventQuaraFileResponseBody extends $tea.Model {
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

export class RollbackSuspEventQuaraFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RollbackSuspEventQuaraFileResponseBody;
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
      body: RollbackSuspEventQuaraFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandRequest extends $tea.Model {
  commandContent?: string;
  contentEncoding?: string;
  desktopId?: string[];
  regionId?: string;
  timeout?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      contentEncoding: 'ContentEncoding',
      desktopId: 'DesktopId',
      regionId: 'RegionId',
      timeout: 'Timeout',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      contentEncoding: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      timeout: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponseBody extends $tea.Model {
  invokeId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RunCommandResponseBody;
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
      body: RunCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerifyCodeRequest extends $tea.Model {
  extraInfo?: string;
  regionId?: string;
  verifyCodeAction?: string;
  static names(): { [key: string]: string } {
    return {
      extraInfo: 'ExtraInfo',
      regionId: 'RegionId',
      verifyCodeAction: 'VerifyCodeAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraInfo: 'string',
      regionId: 'string',
      verifyCodeAction: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendVerifyCodeResponseBody extends $tea.Model {
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

export class SendVerifyCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SendVerifyCodeResponseBody;
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
      body: SendVerifyCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdpMetadataRequest extends $tea.Model {
  directoryId?: string;
  idpMetadata?: string;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      idpMetadata: 'IdpMetadata',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      idpMetadata: 'string',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdpMetadataResponseBody extends $tea.Model {
  idpEntityId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      idpEntityId: 'IdpEntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpEntityId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdpMetadataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetIdpMetadataResponseBody;
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
      body: SetIdpMetadataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetOfficeSiteSsoStatusRequest extends $tea.Model {
  enableSso?: boolean;
  officeSiteId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enableSso: 'EnableSso',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSso: 'boolean',
      officeSiteId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetOfficeSiteSsoStatusResponseBody extends $tea.Model {
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

export class SetOfficeSiteSsoStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SetOfficeSiteSsoStatusResponseBody;
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
      body: SetOfficeSiteSsoStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDesktopsRequest extends $tea.Model {
  desktopId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDesktopsResponseBody extends $tea.Model {
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

export class StartDesktopsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartDesktopsResponseBody;
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
      body: StartDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVirusScanTaskRequest extends $tea.Model {
  desktopId?: string[];
  officeSiteId?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVirusScanTaskResponseBody extends $tea.Model {
  requestId?: string;
  scanTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scanTaskId: 'ScanTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scanTaskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVirusScanTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartVirusScanTaskResponseBody;
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
      body: StartVirusScanTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDesktopsRequest extends $tea.Model {
  desktopId?: string[];
  regionId?: string;
  stoppedMode?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      regionId: 'RegionId',
      stoppedMode: 'StoppedMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      stoppedMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDesktopsResponseBody extends $tea.Model {
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

export class StopDesktopsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopDesktopsResponseBody;
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
      body: StopDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInvocationRequest extends $tea.Model {
  desktopId?: string[];
  invokeId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      invokeId: 'InvokeId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      invokeId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInvocationResponseBody extends $tea.Model {
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

export class StopInvocationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopInvocationResponseBody;
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
      body: StopInvocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
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

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesResponseBody;
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
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockVirtualMFADeviceRequest extends $tea.Model {
  regionId?: string;
  serialNumber?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serialNumber: 'SerialNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serialNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockVirtualMFADeviceResponseBody extends $tea.Model {
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

export class UnlockVirtualMFADeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UnlockVirtualMFADeviceResponseBody;
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
      body: UnlockVirtualMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
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

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesResponseBody;
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
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFotaTaskRequest extends $tea.Model {
  regionId?: string;
  taskUid?: string;
  userStatus?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskUid: 'TaskUid',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskUid: 'string',
      userStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFotaTaskResponseBody extends $tea.Model {
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

export class UpdateFotaTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFotaTaskResponseBody;
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
      body: UpdateFotaTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadImageRequest extends $tea.Model {
  dataDiskSize?: number;
  description?: string;
  enableSecurityCheck?: boolean;
  gpuCategory?: boolean;
  gpuDriverType?: string;
  imageName?: string;
  licenseType?: string;
  osType?: string;
  ossObjectPath?: string;
  protocolType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
      description: 'Description',
      enableSecurityCheck: 'EnableSecurityCheck',
      gpuCategory: 'GpuCategory',
      gpuDriverType: 'GpuDriverType',
      imageName: 'ImageName',
      licenseType: 'LicenseType',
      osType: 'OsType',
      ossObjectPath: 'OssObjectPath',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: 'number',
      description: 'string',
      enableSecurityCheck: 'boolean',
      gpuCategory: 'boolean',
      gpuDriverType: 'string',
      imageName: 'string',
      licenseType: 'string',
      osType: 'string',
      ossObjectPath: 'string',
      protocolType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadImageResponseBody extends $tea.Model {
  imageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadImageResponseBody;
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
      body: UploadImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCenRequest extends $tea.Model {
  cenId?: string;
  cenOwnerId?: number;
  cidrBlock?: string;
  regionId?: string;
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cenOwnerId: 'CenOwnerId',
      cidrBlock: 'CidrBlock',
      regionId: 'RegionId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cenOwnerId: 'number',
      cidrBlock: 'string',
      regionId: 'string',
      verifyCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCenResponseBody extends $tea.Model {
  cidrBlocks?: string[];
  requestId?: string;
  routeEntries?: VerifyCenResponseBodyRouteEntries[];
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlocks: 'CidrBlocks',
      requestId: 'RequestId',
      routeEntries: 'RouteEntries',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlocks: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      routeEntries: { 'type': 'array', 'itemType': VerifyCenResponseBodyRouteEntries },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyCenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: VerifyCenResponseBody;
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
      body: VerifyCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationForMonitoringRequestResourceCandidates extends $tea.Model {
  ownerAliUid?: number;
  ownerEndUserId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceProperties?: string;
  resourceRegionId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAliUid: 'OwnerAliUid',
      ownerEndUserId: 'OwnerEndUserId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceProperties: 'ResourceProperties',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAliUid: 'number',
      ownerEndUserId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceProperties: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyCoordinationForMonitoringResponseBodyCoordinateFlowModels extends $tea.Model {
  coId?: string;
  coordinateStatus?: string;
  coordinateTicket?: string;
  initiatorType?: string;
  ownerUserId?: string;
  resourceId?: string;
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      coordinateStatus: 'CoordinateStatus',
      coordinateTicket: 'CoordinateTicket',
      initiatorType: 'InitiatorType',
      ownerUserId: 'OwnerUserId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coId: 'string',
      coordinateStatus: 'string',
      coordinateTicket: 'string',
      initiatorType: 'string',
      ownerUserId: 'string',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorDirectoryResponseBodyAdConnectors extends $tea.Model {
  address?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequestTag extends $tea.Model {
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

export class CreatePolicyGroupRequestAuthorizeAccessPolicyRule extends $tea.Model {
  cidrIp?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequestAuthorizeSecurityPolicyRule extends $tea.Model {
  cidrIp?: string;
  description?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequestClientType extends $tea.Model {
  clientType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequestUsbSupplyRedirectRule extends $tea.Model {
  description?: string;
  deviceClass?: string;
  deviceSubclass?: string;
  productId?: string;
  usbRedirectType?: number;
  usbRuleType?: number;
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceClass: 'DeviceClass',
      deviceSubclass: 'DeviceSubclass',
      productId: 'ProductId',
      usbRedirectType: 'UsbRedirectType',
      usbRuleType: 'UsbRuleType',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceClass: 'string',
      deviceSubclass: 'string',
      productId: 'string',
      usbRedirectType: 'number',
      usbRuleType: 'number',
      vendorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponseBodyBundlesDesktopTypeAttribute extends $tea.Model {
  cpuCount?: number;
  gpuCount?: number;
  gpuSpec?: string;
  memorySize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'CpuCount',
      gpuCount: 'GpuCount',
      gpuSpec: 'GpuSpec',
      memorySize: 'MemorySize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'number',
      gpuCount: 'number',
      gpuSpec: 'string',
      memorySize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponseBodyBundlesDisks extends $tea.Model {
  diskPerformanceLevel?: string;
  diskSize?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      diskPerformanceLevel: 'DiskPerformanceLevel',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskPerformanceLevel: 'string',
      diskSize: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponseBodyBundles extends $tea.Model {
  bundleId?: string;
  bundleName?: string;
  bundleType?: string;
  creationTime?: string;
  description?: string;
  desktopType?: string;
  desktopTypeAttribute?: DescribeBundlesResponseBodyBundlesDesktopTypeAttribute;
  desktopTypeFamily?: string;
  disks?: DescribeBundlesResponseBodyBundlesDisks[];
  imageId?: string;
  imageName?: string;
  language?: string;
  osType?: string;
  protocolType?: string;
  sessionType?: string;
  stockState?: string;
  volumeEncryptionEnabled?: boolean;
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      bundleName: 'BundleName',
      bundleType: 'BundleType',
      creationTime: 'CreationTime',
      description: 'Description',
      desktopType: 'DesktopType',
      desktopTypeAttribute: 'DesktopTypeAttribute',
      desktopTypeFamily: 'DesktopTypeFamily',
      disks: 'Disks',
      imageId: 'ImageId',
      imageName: 'ImageName',
      language: 'Language',
      osType: 'OsType',
      protocolType: 'ProtocolType',
      sessionType: 'SessionType',
      stockState: 'StockState',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      bundleName: 'string',
      bundleType: 'string',
      creationTime: 'string',
      description: 'string',
      desktopType: 'string',
      desktopTypeAttribute: DescribeBundlesResponseBodyBundlesDesktopTypeAttribute,
      desktopTypeFamily: 'string',
      disks: { 'type': 'array', 'itemType': DescribeBundlesResponseBodyBundlesDisks },
      imageId: 'string',
      imageName: 'string',
      language: 'string',
      osType: 'string',
      protocolType: 'string',
      sessionType: 'string',
      stockState: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBodyCensPackageIds extends $tea.Model {
  packageId?: string;
  static names(): { [key: string]: string } {
    return {
      packageId: 'PackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBodyCensTags extends $tea.Model {
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

export class DescribeCensResponseBodyCens extends $tea.Model {
  cenId?: string;
  creationTime?: string;
  description?: string;
  ipv6Level?: string;
  name?: string;
  packageIds?: DescribeCensResponseBodyCensPackageIds[];
  protectionLevel?: string;
  status?: string;
  tags?: DescribeCensResponseBodyCensTags[];
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      creationTime: 'CreationTime',
      description: 'Description',
      ipv6Level: 'Ipv6Level',
      name: 'Name',
      packageIds: 'PackageIds',
      protectionLevel: 'ProtectionLevel',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      creationTime: 'string',
      description: 'string',
      ipv6Level: 'string',
      name: 'string',
      packageIds: { 'type': 'array', 'itemType': DescribeCensResponseBodyCensPackageIds },
      protectionLevel: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeCensResponseBodyCensTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsResponseBodyEvents extends $tea.Model {
  aliUid?: string;
  bytesReceived?: string;
  bytesSend?: string;
  clientIp?: string;
  clientOS?: string;
  clientVersion?: string;
  desktopGroupId?: string;
  desktopGroupName?: string;
  desktopId?: string;
  desktopIp?: string;
  desktopName?: string;
  directoryId?: string;
  directoryType?: string;
  endUserId?: string;
  eventId?: string;
  eventTime?: string;
  eventType?: string;
  officeSiteId?: string;
  officeSiteName?: string;
  officeSiteType?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bytesReceived: 'BytesReceived',
      bytesSend: 'BytesSend',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      desktopId: 'DesktopId',
      desktopIp: 'DesktopIp',
      desktopName: 'DesktopName',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      endUserId: 'EndUserId',
      eventId: 'EventId',
      eventTime: 'EventTime',
      eventType: 'EventType',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      bytesReceived: 'string',
      bytesSend: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      desktopId: 'string',
      desktopIp: 'string',
      desktopName: 'string',
      directoryId: 'string',
      directoryType: 'string',
      endUserId: 'string',
      eventId: 'string',
      eventTime: 'string',
      eventType: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopGroupsResponseBodyDesktopGroups extends $tea.Model {
  bindAmount?: number;
  comments?: string;
  cpu?: number;
  createTime?: string;
  creator?: string;
  dataDiskCategory?: string;
  dataDiskSize?: string;
  desktopGroupId?: string;
  desktopGroupName?: string;
  endUserCount?: number;
  expiredTime?: string;
  gpuCount?: number;
  gpuSpec?: string;
  imageId?: string;
  keepDuration?: number;
  loadPolicy?: number;
  maxDesktopsCount?: number;
  memory?: number;
  minDesktopsCount?: number;
  officeSiteId?: string;
  officeSiteName?: string;
  officeSiteType?: string;
  ownBundleId?: string;
  ownBundleName?: string;
  ownType?: number;
  payType?: string;
  policyGroupId?: string;
  policyGroupName?: string;
  resetType?: number;
  status?: number;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  volumeEncryptionEnabled?: boolean;
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      bindAmount: 'BindAmount',
      comments: 'Comments',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      creator: 'Creator',
      dataDiskCategory: 'DataDiskCategory',
      dataDiskSize: 'DataDiskSize',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      endUserCount: 'EndUserCount',
      expiredTime: 'ExpiredTime',
      gpuCount: 'GpuCount',
      gpuSpec: 'GpuSpec',
      imageId: 'ImageId',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxDesktopsCount: 'MaxDesktopsCount',
      memory: 'Memory',
      minDesktopsCount: 'MinDesktopsCount',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      ownBundleId: 'OwnBundleId',
      ownBundleName: 'OwnBundleName',
      ownType: 'OwnType',
      payType: 'PayType',
      policyGroupId: 'PolicyGroupId',
      policyGroupName: 'PolicyGroupName',
      resetType: 'ResetType',
      status: 'Status',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindAmount: 'number',
      comments: 'string',
      cpu: 'number',
      createTime: 'string',
      creator: 'string',
      dataDiskCategory: 'string',
      dataDiskSize: 'string',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      endUserCount: 'number',
      expiredTime: 'string',
      gpuCount: 'number',
      gpuSpec: 'string',
      imageId: 'string',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxDesktopsCount: 'number',
      memory: 'number',
      minDesktopsCount: 'number',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      ownBundleId: 'string',
      ownBundleName: 'string',
      ownType: 'number',
      payType: 'string',
      policyGroupId: 'string',
      policyGroupName: 'string',
      resetType: 'number',
      status: 'number',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopIdsByVulNamesResponseBodyDesktopItems extends $tea.Model {
  desktopId?: string;
  desktopName?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesResponseBodyDesktopTypes extends $tea.Model {
  cpuCount?: string;
  dataDiskSize?: string;
  desktopTypeId?: string;
  desktopTypeStatus?: string;
  gpuCount?: number;
  gpuSpec?: string;
  instanceTypeFamily?: string;
  memorySize?: string;
  systemDiskSize?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'CpuCount',
      dataDiskSize: 'DataDiskSize',
      desktopTypeId: 'DesktopTypeId',
      desktopTypeStatus: 'DesktopTypeStatus',
      gpuCount: 'GpuCount',
      gpuSpec: 'GpuSpec',
      instanceTypeFamily: 'InstanceTypeFamily',
      memorySize: 'MemorySize',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'string',
      dataDiskSize: 'string',
      desktopTypeId: 'string',
      desktopTypeStatus: 'string',
      gpuCount: 'number',
      gpuSpec: 'string',
      instanceTypeFamily: 'string',
      memorySize: 'string',
      systemDiskSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsRequestTag extends $tea.Model {
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

export class DescribeDesktopsResponseBodyDesktopsDisks extends $tea.Model {
  diskId?: string;
  diskSize?: number;
  diskType?: string;
  performanceLevel?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      performanceLevel: 'PerformanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      diskSize: 'number',
      diskType: 'string',
      performanceLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktopsFotaUpdate extends $tea.Model {
  currentAppVersion?: string;
  newAppVersion?: string;
  releaseNote?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      currentAppVersion: 'CurrentAppVersion',
      newAppVersion: 'NewAppVersion',
      releaseNote: 'ReleaseNote',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentAppVersion: 'string',
      newAppVersion: 'string',
      releaseNote: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktopsSessions extends $tea.Model {
  endUserId?: string;
  establishmentTime?: string;
  externalUserName?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      establishmentTime: 'EstablishmentTime',
      externalUserName: 'ExternalUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      establishmentTime: 'string',
      externalUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktopsTags extends $tea.Model {
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

export class DescribeDesktopsResponseBodyDesktops extends $tea.Model {
  bundleId?: string;
  bundleName?: string;
  chargeType?: string;
  connectionStatus?: string;
  cpu?: number;
  creationTime?: string;
  dataDiskCategory?: string;
  dataDiskSize?: string;
  desktopGroupId?: string;
  desktopId?: string;
  desktopName?: string;
  desktopStatus?: string;
  desktopType?: string;
  directoryId?: string;
  directoryType?: string;
  disks?: DescribeDesktopsResponseBodyDesktopsDisks[];
  downgradeQuota?: number;
  downgradedTimes?: number;
  endUserIds?: string[];
  expiredTime?: string;
  fotaUpdate?: DescribeDesktopsResponseBodyDesktopsFotaUpdate;
  gpuCategory?: number;
  gpuCount?: number;
  gpuDriverVersion?: string;
  gpuSpec?: string;
  hostName?: string;
  imageId?: string;
  managementFlag?: string;
  memory?: number;
  networkInterfaceId?: string;
  networkInterfaceIp?: string;
  officeSiteId?: string;
  officeSiteName?: string;
  officeSiteType?: string;
  officeSiteVpcType?: string;
  osType?: string;
  platform?: string;
  policyGroupId?: string;
  policyGroupName?: string;
  progress?: string;
  protocolType?: string;
  sessionType?: string;
  sessions?: DescribeDesktopsResponseBodyDesktopsSessions[];
  startTime?: string;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  tags?: DescribeDesktopsResponseBodyDesktopsTags[];
  volumeEncryptionEnabled?: boolean;
  volumeEncryptionKey?: string;
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      bundleName: 'BundleName',
      chargeType: 'ChargeType',
      connectionStatus: 'ConnectionStatus',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      dataDiskCategory: 'DataDiskCategory',
      dataDiskSize: 'DataDiskSize',
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      desktopType: 'DesktopType',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      disks: 'Disks',
      downgradeQuota: 'DowngradeQuota',
      downgradedTimes: 'DowngradedTimes',
      endUserIds: 'EndUserIds',
      expiredTime: 'ExpiredTime',
      fotaUpdate: 'FotaUpdate',
      gpuCategory: 'GpuCategory',
      gpuCount: 'GpuCount',
      gpuDriverVersion: 'GpuDriverVersion',
      gpuSpec: 'GpuSpec',
      hostName: 'HostName',
      imageId: 'ImageId',
      managementFlag: 'ManagementFlag',
      memory: 'Memory',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceIp: 'NetworkInterfaceIp',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      officeSiteVpcType: 'OfficeSiteVpcType',
      osType: 'OsType',
      platform: 'Platform',
      policyGroupId: 'PolicyGroupId',
      policyGroupName: 'PolicyGroupName',
      progress: 'Progress',
      protocolType: 'ProtocolType',
      sessionType: 'SessionType',
      sessions: 'Sessions',
      startTime: 'StartTime',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      tags: 'Tags',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      bundleName: 'string',
      chargeType: 'string',
      connectionStatus: 'string',
      cpu: 'number',
      creationTime: 'string',
      dataDiskCategory: 'string',
      dataDiskSize: 'string',
      desktopGroupId: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      desktopType: 'string',
      directoryId: 'string',
      directoryType: 'string',
      disks: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsDisks },
      downgradeQuota: 'number',
      downgradedTimes: 'number',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      fotaUpdate: DescribeDesktopsResponseBodyDesktopsFotaUpdate,
      gpuCategory: 'number',
      gpuCount: 'number',
      gpuDriverVersion: 'string',
      gpuSpec: 'string',
      hostName: 'string',
      imageId: 'string',
      managementFlag: 'string',
      memory: 'number',
      networkInterfaceId: 'string',
      networkInterfaceIp: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      officeSiteVpcType: 'string',
      osType: 'string',
      platform: 'string',
      policyGroupId: 'string',
      policyGroupName: 'string',
      progress: 'string',
      protocolType: 'string',
      sessionType: 'string',
      sessions: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsSessions },
      startTime: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      tags: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsTags },
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
      zoneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsInGroupResponseBodyPaidDesktops extends $tea.Model {
  connectionStatus?: string;
  desktopId?: string;
  desktopName?: string;
  desktopStatus?: string;
  diskType?: string;
  endUserId?: string;
  endUserIds?: string[];
  endUserName?: string;
  endUserNames?: string[];
  gpuDriverVersion?: string;
  imageId?: string;
  imageName?: string;
  managementFlag?: string;
  osType?: string;
  resetTime?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      diskType: 'DiskType',
      endUserId: 'EndUserId',
      endUserIds: 'EndUserIds',
      endUserName: 'EndUserName',
      endUserNames: 'EndUserNames',
      gpuDriverVersion: 'GpuDriverVersion',
      imageId: 'ImageId',
      imageName: 'ImageName',
      managementFlag: 'ManagementFlag',
      osType: 'OsType',
      resetTime: 'ResetTime',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      diskType: 'string',
      endUserId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      endUserName: 'string',
      endUserNames: { 'type': 'array', 'itemType': 'string' },
      gpuDriverVersion: 'string',
      imageId: 'string',
      imageName: 'string',
      managementFlag: 'string',
      osType: 'string',
      resetTime: 'string',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsInGroupResponseBodyPostPaidDesktops extends $tea.Model {
  connectionStatus?: string;
  createDuration?: string;
  createTime?: string;
  desktopId?: string;
  desktopName?: string;
  desktopStatus?: string;
  diskType?: string;
  endUserId?: string;
  endUserIds?: string[];
  endUserName?: string;
  endUserNames?: string[];
  gpuDriverVersion?: string;
  imageId?: string;
  imageName?: string;
  managementFlag?: string;
  osType?: string;
  releaseTime?: string;
  resetTime?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      createDuration: 'CreateDuration',
      createTime: 'CreateTime',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      diskType: 'DiskType',
      endUserId: 'EndUserId',
      endUserIds: 'EndUserIds',
      endUserName: 'EndUserName',
      endUserNames: 'EndUserNames',
      gpuDriverVersion: 'GpuDriverVersion',
      imageId: 'ImageId',
      imageName: 'ImageName',
      managementFlag: 'ManagementFlag',
      osType: 'OsType',
      releaseTime: 'ReleaseTime',
      resetTime: 'ResetTime',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      createDuration: 'string',
      createTime: 'string',
      desktopId: 'string',
      desktopName: 'string',
      desktopStatus: 'string',
      diskType: 'string',
      endUserId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      endUserName: 'string',
      endUserNames: { 'type': 'array', 'itemType': 'string' },
      gpuDriverVersion: 'string',
      imageId: 'string',
      imageName: 'string',
      managementFlag: 'string',
      osType: 'string',
      releaseTime: 'string',
      resetTime: 'string',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBodyDirectoriesADConnectors extends $tea.Model {
  ADConnectorAddress?: string;
  connectorStatus?: string;
  networkInterfaceId?: string;
  specification?: string;
  trustKey?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectorAddress: 'ADConnectorAddress',
      connectorStatus: 'ConnectorStatus',
      networkInterfaceId: 'NetworkInterfaceId',
      specification: 'Specification',
      trustKey: 'TrustKey',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectorAddress: 'string',
      connectorStatus: 'string',
      networkInterfaceId: 'string',
      specification: 'string',
      trustKey: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBodyDirectoriesLogs extends $tea.Model {
  level?: string;
  message?: string;
  step?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      message: 'Message',
      step: 'Step',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      message: 'string',
      step: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBodyDirectories extends $tea.Model {
  ADConnectors?: DescribeDirectoriesResponseBodyDirectoriesADConnectors[];
  creationTime?: string;
  customSecurityGroupId?: string;
  desktopAccessType?: string;
  desktopVpcEndpoint?: string;
  directoryId?: string;
  directoryType?: string;
  dnsAddress?: string[];
  dnsUserName?: string;
  domainName?: string;
  domainPassword?: string;
  domainUserName?: string;
  enableAdminAccess?: boolean;
  enableCrossDesktopAccess?: boolean;
  enableInternetAccess?: boolean;
  fileSystemIds?: string[];
  logs?: DescribeDirectoriesResponseBodyDirectoriesLogs[];
  mfaEnabled?: boolean;
  name?: string;
  needVerifyLoginRisk?: boolean;
  ouName?: string;
  ssoEnabled?: boolean;
  status?: string;
  subDnsAddress?: string[];
  subDomainName?: string;
  trustPassword?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectors: 'ADConnectors',
      creationTime: 'CreationTime',
      customSecurityGroupId: 'CustomSecurityGroupId',
      desktopAccessType: 'DesktopAccessType',
      desktopVpcEndpoint: 'DesktopVpcEndpoint',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      dnsAddress: 'DnsAddress',
      dnsUserName: 'DnsUserName',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      enableAdminAccess: 'EnableAdminAccess',
      enableCrossDesktopAccess: 'EnableCrossDesktopAccess',
      enableInternetAccess: 'EnableInternetAccess',
      fileSystemIds: 'FileSystemIds',
      logs: 'Logs',
      mfaEnabled: 'MfaEnabled',
      name: 'Name',
      needVerifyLoginRisk: 'NeedVerifyLoginRisk',
      ouName: 'OuName',
      ssoEnabled: 'SsoEnabled',
      status: 'Status',
      subDnsAddress: 'SubDnsAddress',
      subDomainName: 'SubDomainName',
      trustPassword: 'TrustPassword',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectors: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectoriesADConnectors },
      creationTime: 'string',
      customSecurityGroupId: 'string',
      desktopAccessType: 'string',
      desktopVpcEndpoint: 'string',
      directoryId: 'string',
      directoryType: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      dnsUserName: 'string',
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      enableAdminAccess: 'boolean',
      enableCrossDesktopAccess: 'boolean',
      enableInternetAccess: 'boolean',
      fileSystemIds: { 'type': 'array', 'itemType': 'string' },
      logs: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectoriesLogs },
      mfaEnabled: 'boolean',
      name: 'string',
      needVerifyLoginRisk: 'boolean',
      ouName: 'string',
      ssoEnabled: 'boolean',
      status: 'string',
      subDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
      trustPassword: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowStatisticResponseBodyDesktopFlowStatistic extends $tea.Model {
  desktopId?: string;
  desktopName?: string;
  flowIn?: string;
  flowRank?: number;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      flowIn: 'FlowIn',
      flowRank: 'FlowRank',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
      flowIn: 'string',
      flowRank: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaPendingDesktopsResponseBodyFotaPendingDesktops extends $tea.Model {
  currentAppVersion?: string;
  desktopId?: string;
  desktopName?: string;
  fotaProject?: string;
  officeSiteId?: string;
  static names(): { [key: string]: string } {
    return {
      currentAppVersion: 'CurrentAppVersion',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      fotaProject: 'FotaProject',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentAppVersion: 'string',
      desktopId: 'string',
      desktopName: 'string',
      fotaProject: 'string',
      officeSiteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFotaTasksResponseBodyFotaTasks extends $tea.Model {
  appVersion?: string;
  fotaProject?: string;
  pendingDesktopCount?: number;
  publishTime?: string;
  releaseNote?: string;
  size?: number;
  status?: string;
  taskUid?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      fotaProject: 'FotaProject',
      pendingDesktopCount: 'PendingDesktopCount',
      publishTime: 'PublishTime',
      releaseNote: 'ReleaseNote',
      size: 'Size',
      status: 'Status',
      taskUid: 'TaskUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      fotaProject: 'string',
      pendingDesktopCount: 'number',
      publishTime: 'string',
      releaseNote: 'string',
      size: 'number',
      status: 'string',
      taskUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListRequestVulInfo extends $tea.Model {
  desktopId?: string;
  name?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      name: 'Name',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      name: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListResponseBodyFrontPatchListPatchList extends $tea.Model {
  aliasName?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListResponseBodyFrontPatchList extends $tea.Model {
  desktopId?: string;
  patchList?: DescribeFrontVulPatchListResponseBodyFrontPatchListPatchList[];
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      patchList: 'PatchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      patchList: { 'type': 'array', 'itemType': DescribeFrontVulPatchListResponseBodyFrontPatchListPatchList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedVulResponseBodyGroupedVulItems extends $tea.Model {
  aliasName?: string;
  asapCount?: number;
  gmtLast?: string;
  handledCount?: number;
  laterCount?: number;
  name?: string;
  nntfCount?: number;
  tags?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      asapCount: 'AsapCount',
      gmtLast: 'GmtLast',
      handledCount: 'HandledCount',
      laterCount: 'LaterCount',
      name: 'Name',
      nntfCount: 'NntfCount',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      asapCount: 'number',
      gmtLast: 'string',
      handledCount: 'number',
      laterCount: 'number',
      name: 'string',
      nntfCount: 'number',
      tags: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageModifiedRecordsResponseBodyImageModifiedRecords extends $tea.Model {
  imageId?: string;
  imageName?: string;
  newImageId?: string;
  newImageName?: string;
  status?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      imageName: 'ImageName',
      newImageId: 'NewImageId',
      newImageName: 'NewImageName',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      newImageId: 'string',
      newImageName: 'string',
      status: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImages extends $tea.Model {
  appVersion?: string;
  creationTime?: string;
  dataDiskSize?: number;
  description?: string;
  gpuCategory?: boolean;
  gpuDriverVersion?: string;
  imageId?: string;
  imageType?: string;
  name?: string;
  osType?: string;
  progress?: string;
  protocolType?: string;
  sessionType?: string;
  sharedCount?: number;
  size?: number;
  status?: string;
  supportedLanguages?: string[];
  volumeEncryptionEnabled?: boolean;
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      creationTime: 'CreationTime',
      dataDiskSize: 'DataDiskSize',
      description: 'Description',
      gpuCategory: 'GpuCategory',
      gpuDriverVersion: 'GpuDriverVersion',
      imageId: 'ImageId',
      imageType: 'ImageType',
      name: 'Name',
      osType: 'OsType',
      progress: 'Progress',
      protocolType: 'ProtocolType',
      sessionType: 'SessionType',
      sharedCount: 'SharedCount',
      size: 'Size',
      status: 'Status',
      supportedLanguages: 'SupportedLanguages',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      creationTime: 'string',
      dataDiskSize: 'number',
      description: 'string',
      gpuCategory: 'boolean',
      gpuDriverVersion: 'string',
      imageId: 'string',
      imageType: 'string',
      name: 'string',
      osType: 'string',
      progress: 'string',
      protocolType: 'string',
      sessionType: 'string',
      sharedCount: 'number',
      size: 'number',
      status: 'string',
      supportedLanguages: { 'type': 'array', 'itemType': 'string' },
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocationsInvokeDesktops extends $tea.Model {
  creationTime?: string;
  desktopId?: string;
  dropped?: number;
  errorCode?: string;
  errorInfo?: string;
  exitCode?: number;
  finishTime?: string;
  invocationStatus?: string;
  output?: string;
  repeats?: number;
  startTime?: string;
  stopTime?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      desktopId: 'DesktopId',
      dropped: 'Dropped',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
      exitCode: 'ExitCode',
      finishTime: 'FinishTime',
      invocationStatus: 'InvocationStatus',
      output: 'Output',
      repeats: 'Repeats',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      desktopId: 'string',
      dropped: 'number',
      errorCode: 'string',
      errorInfo: 'string',
      exitCode: 'number',
      finishTime: 'string',
      invocationStatus: 'string',
      output: 'string',
      repeats: 'number',
      startTime: 'string',
      stopTime: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocations extends $tea.Model {
  commandContent?: string;
  commandType?: string;
  creationTime?: string;
  endUserId?: string;
  invocationStatus?: string;
  invokeDesktops?: DescribeInvocationsResponseBodyInvocationsInvokeDesktops[];
  invokeId?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandType: 'CommandType',
      creationTime: 'CreationTime',
      endUserId: 'EndUserId',
      invocationStatus: 'InvocationStatus',
      invokeDesktops: 'InvokeDesktops',
      invokeId: 'InvokeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandType: 'string',
      creationTime: 'string',
      endUserId: 'string',
      invocationStatus: 'string',
      invokeDesktops: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvokeDesktops },
      invokeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKmsKeysResponseBodyKeys extends $tea.Model {
  alias?: string;
  arn?: string;
  keyId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      arn: 'Arn',
      keyId: 'KeyId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      arn: 'string',
      keyId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsResponseBodyFileSystems extends $tea.Model {
  capacity?: number;
  createTime?: string;
  description?: string;
  encryptionEnabled?: boolean;
  fileSystemId?: string;
  fileSystemName?: string;
  fileSystemStatus?: string;
  fileSystemType?: string;
  meteredSize?: number;
  mountTargetDomain?: string;
  mountTargetStatus?: string;
  officeSiteId?: string;
  officeSiteName?: string;
  regionId?: string;
  storageType?: string;
  supportAcl?: boolean;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      createTime: 'CreateTime',
      description: 'Description',
      encryptionEnabled: 'EncryptionEnabled',
      fileSystemId: 'FileSystemId',
      fileSystemName: 'FileSystemName',
      fileSystemStatus: 'FileSystemStatus',
      fileSystemType: 'FileSystemType',
      meteredSize: 'MeteredSize',
      mountTargetDomain: 'MountTargetDomain',
      mountTargetStatus: 'MountTargetStatus',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
      storageType: 'StorageType',
      supportAcl: 'SupportAcl',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      createTime: 'string',
      description: 'string',
      encryptionEnabled: 'boolean',
      fileSystemId: 'string',
      fileSystemName: 'string',
      fileSystemStatus: 'string',
      fileSystemType: 'string',
      meteredSize: 'number',
      mountTargetDomain: 'string',
      mountTargetStatus: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      regionId: 'string',
      storageType: 'string',
      supportAcl: 'boolean',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPackagesResponseBodyNetworkPackages extends $tea.Model {
  bandwidth?: number;
  createTime?: string;
  eipAddresses?: string[];
  expiredTime?: string;
  internetChargeType?: string;
  networkPackageId?: string;
  networkPackageStatus?: string;
  officeSiteId?: string;
  officeSiteName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      createTime: 'CreateTime',
      eipAddresses: 'EipAddresses',
      expiredTime: 'ExpiredTime',
      internetChargeType: 'InternetChargeType',
      networkPackageId: 'NetworkPackageId',
      networkPackageStatus: 'NetworkPackageStatus',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      createTime: 'string',
      eipAddresses: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      internetChargeType: 'string',
      networkPackageId: 'string',
      networkPackageStatus: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBodyOfficeSitesADConnectors extends $tea.Model {
  ADConnectorAddress?: string;
  connectorStatus?: string;
  networkInterfaceId?: string;
  specification?: string;
  trustKey?: string;
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectorAddress: 'ADConnectorAddress',
      connectorStatus: 'ConnectorStatus',
      networkInterfaceId: 'NetworkInterfaceId',
      specification: 'Specification',
      trustKey: 'TrustKey',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectorAddress: 'string',
      connectorStatus: 'string',
      networkInterfaceId: 'string',
      specification: 'string',
      trustKey: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBodyOfficeSitesLogs extends $tea.Model {
  level?: string;
  message?: string;
  step?: string;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      message: 'Message',
      step: 'Step',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      message: 'string',
      step: 'string',
      timeStamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBodyOfficeSites extends $tea.Model {
  ADConnectors?: DescribeOfficeSitesResponseBodyOfficeSitesADConnectors[];
  adHostname?: string;
  bandwidth?: number;
  cenId?: string;
  cidrBlock?: string;
  cloudBoxOfficeSite?: boolean;
  creationTime?: string;
  customSecurityGroupId?: string;
  desktopAccessType?: string;
  desktopCount?: number;
  desktopVpcEndpoint?: string;
  dnsAddress?: string[];
  dnsUserName?: string;
  domainName?: string;
  domainPassword?: string;
  domainUserName?: string;
  enableAdminAccess?: boolean;
  enableCrossDesktopAccess?: boolean;
  enableInternetAccess?: boolean;
  fileSystemIds?: string[];
  logs?: DescribeOfficeSitesResponseBodyOfficeSitesLogs[];
  mfaEnabled?: boolean;
  name?: string;
  needVerifyLoginRisk?: boolean;
  needVerifyZeroDevice?: boolean;
  networkPackageId?: string;
  officeSiteId?: string;
  officeSiteType?: string;
  ouName?: string;
  protocolType?: string;
  ssoEnabled?: boolean;
  ssoType?: string;
  status?: string;
  subDnsAddress?: string[];
  subDomainName?: string;
  trustPassword?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectors: 'ADConnectors',
      adHostname: 'AdHostname',
      bandwidth: 'Bandwidth',
      cenId: 'CenId',
      cidrBlock: 'CidrBlock',
      cloudBoxOfficeSite: 'CloudBoxOfficeSite',
      creationTime: 'CreationTime',
      customSecurityGroupId: 'CustomSecurityGroupId',
      desktopAccessType: 'DesktopAccessType',
      desktopCount: 'DesktopCount',
      desktopVpcEndpoint: 'DesktopVpcEndpoint',
      dnsAddress: 'DnsAddress',
      dnsUserName: 'DnsUserName',
      domainName: 'DomainName',
      domainPassword: 'DomainPassword',
      domainUserName: 'DomainUserName',
      enableAdminAccess: 'EnableAdminAccess',
      enableCrossDesktopAccess: 'EnableCrossDesktopAccess',
      enableInternetAccess: 'EnableInternetAccess',
      fileSystemIds: 'FileSystemIds',
      logs: 'Logs',
      mfaEnabled: 'MfaEnabled',
      name: 'Name',
      needVerifyLoginRisk: 'NeedVerifyLoginRisk',
      needVerifyZeroDevice: 'NeedVerifyZeroDevice',
      networkPackageId: 'NetworkPackageId',
      officeSiteId: 'OfficeSiteId',
      officeSiteType: 'OfficeSiteType',
      ouName: 'OuName',
      protocolType: 'ProtocolType',
      ssoEnabled: 'SsoEnabled',
      ssoType: 'SsoType',
      status: 'Status',
      subDnsAddress: 'SubDnsAddress',
      subDomainName: 'SubDomainName',
      trustPassword: 'TrustPassword',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectors: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSitesADConnectors },
      adHostname: 'string',
      bandwidth: 'number',
      cenId: 'string',
      cidrBlock: 'string',
      cloudBoxOfficeSite: 'boolean',
      creationTime: 'string',
      customSecurityGroupId: 'string',
      desktopAccessType: 'string',
      desktopCount: 'number',
      desktopVpcEndpoint: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      dnsUserName: 'string',
      domainName: 'string',
      domainPassword: 'string',
      domainUserName: 'string',
      enableAdminAccess: 'boolean',
      enableCrossDesktopAccess: 'boolean',
      enableInternetAccess: 'boolean',
      fileSystemIds: { 'type': 'array', 'itemType': 'string' },
      logs: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSitesLogs },
      mfaEnabled: 'boolean',
      name: 'string',
      needVerifyLoginRisk: 'boolean',
      needVerifyZeroDevice: 'boolean',
      networkPackageId: 'string',
      officeSiteId: 'string',
      officeSiteType: 'string',
      ouName: 'string',
      protocolType: 'string',
      ssoEnabled: 'boolean',
      ssoType: 'string',
      status: 'string',
      subDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
      trustPassword: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      vpcType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules extends $tea.Model {
  cidrIp?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules extends $tea.Model {
  cidrIp?: string;
  description?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsClientTypes extends $tea.Model {
  clientType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule extends $tea.Model {
  description?: string;
  deviceClass?: string;
  deviceSubclass?: string;
  productId?: string;
  usbRedirectType?: number;
  usbRuleType?: number;
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceClass: 'DeviceClass',
      deviceSubclass: 'DeviceSubclass',
      productId: 'ProductId',
      usbRedirectType: 'UsbRedirectType',
      usbRuleType: 'UsbRuleType',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceClass: 'string',
      deviceSubclass: 'string',
      productId: 'string',
      usbRedirectType: 'number',
      usbRuleType: 'number',
      vendorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroups extends $tea.Model {
  authorizeAccessPolicyRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules[];
  authorizeSecurityPolicyRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules[];
  cameraRedirect?: string;
  clientTypes?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsClientTypes[];
  clipboard?: string;
  domainList?: string;
  edsCount?: number;
  gpuAcceleration?: string;
  html5Access?: string;
  html5FileTransfer?: string;
  localDrive?: string;
  name?: string;
  netRedirect?: string;
  policyGroupId?: string;
  policyGroupType?: string;
  policyStatus?: string;
  preemptLogin?: string;
  preemptLoginUsers?: string[];
  printerRedirection?: string;
  recording?: string;
  recordingEndTime?: string;
  recordingFps?: number;
  recordingStartTime?: string;
  usbRedirect?: string;
  usbSupplyRedirectRule?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule[];
  visualQuality?: string;
  watermark?: string;
  watermarkCustomText?: string;
  watermarkTransparency?: string;
  watermarkType?: string;
  static names(): { [key: string]: string } {
    return {
      authorizeAccessPolicyRules: 'AuthorizeAccessPolicyRules',
      authorizeSecurityPolicyRules: 'AuthorizeSecurityPolicyRules',
      cameraRedirect: 'CameraRedirect',
      clientTypes: 'ClientTypes',
      clipboard: 'Clipboard',
      domainList: 'DomainList',
      edsCount: 'EdsCount',
      gpuAcceleration: 'GpuAcceleration',
      html5Access: 'Html5Access',
      html5FileTransfer: 'Html5FileTransfer',
      localDrive: 'LocalDrive',
      name: 'Name',
      netRedirect: 'NetRedirect',
      policyGroupId: 'PolicyGroupId',
      policyGroupType: 'PolicyGroupType',
      policyStatus: 'PolicyStatus',
      preemptLogin: 'PreemptLogin',
      preemptLoginUsers: 'PreemptLoginUsers',
      printerRedirection: 'PrinterRedirection',
      recording: 'Recording',
      recordingEndTime: 'RecordingEndTime',
      recordingFps: 'RecordingFps',
      recordingStartTime: 'RecordingStartTime',
      usbRedirect: 'UsbRedirect',
      usbSupplyRedirectRule: 'UsbSupplyRedirectRule',
      visualQuality: 'VisualQuality',
      watermark: 'Watermark',
      watermarkCustomText: 'WatermarkCustomText',
      watermarkTransparency: 'WatermarkTransparency',
      watermarkType: 'WatermarkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeAccessPolicyRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules },
      authorizeSecurityPolicyRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules },
      cameraRedirect: 'string',
      clientTypes: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsClientTypes },
      clipboard: 'string',
      domainList: 'string',
      edsCount: 'number',
      gpuAcceleration: 'string',
      html5Access: 'string',
      html5FileTransfer: 'string',
      localDrive: 'string',
      name: 'string',
      netRedirect: 'string',
      policyGroupId: 'string',
      policyGroupType: 'string',
      policyStatus: 'string',
      preemptLogin: 'string',
      preemptLoginUsers: { 'type': 'array', 'itemType': 'string' },
      printerRedirection: 'string',
      recording: 'string',
      recordingEndTime: 'string',
      recordingFps: 'number',
      recordingStartTime: 'string',
      usbRedirect: 'string',
      usbSupplyRedirectRule: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsUsbSupplyRedirectRule },
      visualQuality: 'string',
      watermark: 'string',
      watermarkCustomText: 'string',
      watermarkTransparency: 'string',
      watermarkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRecordingsResponseBodyRecordings extends $tea.Model {
  desktopId?: string;
  endTime?: string;
  endUserIds?: string[];
  filePath?: string;
  recordingSize?: number;
  recordingType?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      endTime: 'EndTime',
      endUserIds: 'EndUserIds',
      filePath: 'FilePath',
      recordingSize: 'RecordingSize',
      recordingType: 'RecordingType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      endTime: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      filePath: 'string',
      recordingSize: 'number',
      recordingType: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  regionEndpoint?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatuses extends $tea.Model {
  errorCode?: string;
  securityEventId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      securityEventId: 'SecurityEventId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      securityEventId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsResponseBodySecurityEventOperations extends $tea.Model {
  operationCode?: string;
  operationParams?: string;
  userCanOperate?: boolean;
  static names(): { [key: string]: string } {
    return {
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      userCanOperate: 'UserCanOperate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationCode: 'string',
      operationParams: 'string',
      userCanOperate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBodySnapshots extends $tea.Model {
  creationTime?: string;
  description?: string;
  desktopId?: string;
  progress?: string;
  remainTime?: number;
  snapshotId?: string;
  snapshotName?: string;
  snapshotType?: string;
  sourceDiskSize?: string;
  sourceDiskType?: string;
  status?: string;
  volumeEncryptionEnabled?: boolean;
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      desktopId: 'DesktopId',
      progress: 'Progress',
      remainTime: 'RemainTime',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sourceDiskSize: 'SourceDiskSize',
      sourceDiskType: 'SourceDiskType',
      status: 'Status',
      volumeEncryptionEnabled: 'VolumeEncryptionEnabled',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      desktopId: 'string',
      progress: 'string',
      remainTime: 'number',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sourceDiskSize: 'string',
      sourceDiskType: 'string',
      status: 'string',
      volumeEncryptionEnabled: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventQuaraFilesResponseBodyQuaraFiles extends $tea.Model {
  desktopId?: string;
  desktopName?: string;
  eventName?: string;
  eventType?: string;
  id?: number;
  md5?: string;
  modifyTime?: string;
  path?: string;
  status?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      eventName: 'EventName',
      eventType: 'EventType',
      id: 'Id',
      md5: 'Md5',
      modifyTime: 'ModifyTime',
      path: 'Path',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
      eventName: 'string',
      eventType: 'string',
      id: 'number',
      md5: 'string',
      modifyTime: 'string',
      path: 'string',
      status: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBodySuspEventsDetails extends $tea.Model {
  name?: string;
  nameDisplay?: string;
  type?: string;
  value?: string;
  valueDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      nameDisplay: 'NameDisplay',
      type: 'Type',
      value: 'Value',
      valueDisplay: 'ValueDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      nameDisplay: 'string',
      type: 'string',
      value: 'string',
      valueDisplay: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBodySuspEvents extends $tea.Model {
  alarmEventName?: string;
  alarmEventNameDisplay?: string;
  alarmEventType?: string;
  alarmEventTypeDisplay?: string;
  alarmUniqueInfo?: string;
  canBeDealOnLine?: string;
  canCancelFault?: boolean;
  dataSource?: string;
  desc?: string;
  desktopId?: string;
  desktopName?: string;
  details?: DescribeSuspEventsResponseBodySuspEventsDetails[];
  eventStatus?: number;
  eventSubType?: string;
  id?: number;
  lastTime?: string;
  level?: string;
  name?: string;
  occurrenceTime?: string;
  operateErrorCode?: string;
  operateMsg?: string;
  uniqueInfo?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventName: 'AlarmEventName',
      alarmEventNameDisplay: 'AlarmEventNameDisplay',
      alarmEventType: 'AlarmEventType',
      alarmEventTypeDisplay: 'AlarmEventTypeDisplay',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      canBeDealOnLine: 'CanBeDealOnLine',
      canCancelFault: 'CanCancelFault',
      dataSource: 'DataSource',
      desc: 'Desc',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      details: 'Details',
      eventStatus: 'EventStatus',
      eventSubType: 'EventSubType',
      id: 'Id',
      lastTime: 'LastTime',
      level: 'Level',
      name: 'Name',
      occurrenceTime: 'OccurrenceTime',
      operateErrorCode: 'OperateErrorCode',
      operateMsg: 'OperateMsg',
      uniqueInfo: 'UniqueInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventName: 'string',
      alarmEventNameDisplay: 'string',
      alarmEventType: 'string',
      alarmEventTypeDisplay: 'string',
      alarmUniqueInfo: 'string',
      canBeDealOnLine: 'string',
      canCancelFault: 'boolean',
      dataSource: 'string',
      desc: 'string',
      desktopId: 'string',
      desktopName: 'string',
      details: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEventsDetails },
      eventStatus: 'number',
      eventSubType: 'string',
      id: 'number',
      lastTime: 'string',
      level: 'string',
      name: 'string',
      occurrenceTime: 'string',
      operateErrorCode: 'string',
      operateMsg: 'string',
      uniqueInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectionRecordsResponseBodyConnectionRecords extends $tea.Model {
  connectDuration?: string;
  connectEndTime?: string;
  connectStartTime?: string;
  connectionRecordId?: string;
  desktopId?: string;
  desktopName?: string;
  static names(): { [key: string]: string } {
    return {
      connectDuration: 'ConnectDuration',
      connectEndTime: 'ConnectEndTime',
      connectStartTime: 'ConnectStartTime',
      connectionRecordId: 'ConnectionRecordId',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectDuration: 'string',
      connectEndTime: 'string',
      connectStartTime: 'string',
      connectionRecordId: 'string',
      desktopId: 'string',
      desktopName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBodyEndUsersExternalInfo extends $tea.Model {
  externalName?: string;
  jobNumber?: string;
  static names(): { [key: string]: string } {
    return {
      externalName: 'ExternalName',
      jobNumber: 'JobNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalName: 'string',
      jobNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModelsPropertyValues extends $tea.Model {
  propertyValue?: string;
  propertyValueId?: number;
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
      propertyValueId: 'PropertyValueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: 'string',
      propertyValueId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModels extends $tea.Model {
  propertyId?: number;
  propertyKey?: string;
  propertyType?: number;
  propertyValues?: DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModelsPropertyValues[];
  userId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      propertyId: 'PropertyId',
      propertyKey: 'PropertyKey',
      propertyType: 'PropertyType',
      propertyValues: 'PropertyValues',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyId: 'number',
      propertyKey: 'string',
      propertyType: 'number',
      propertyValues: { 'type': 'array', 'itemType': DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModelsPropertyValues },
      userId: 'number',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBodyEndUsers extends $tea.Model {
  connectionStatus?: string;
  desktopId?: string;
  desktopName?: string;
  endUserEmail?: string;
  endUserId?: string;
  endUserName?: string;
  endUserPhone?: string;
  endUserType?: string;
  externalInfo?: DescribeUsersInGroupResponseBodyEndUsersExternalInfo;
  userSetPropertiesModels?: DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModels[];
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'ConnectionStatus',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endUserEmail: 'EndUserEmail',
      endUserId: 'EndUserId',
      endUserName: 'EndUserName',
      endUserPhone: 'EndUserPhone',
      endUserType: 'EndUserType',
      externalInfo: 'ExternalInfo',
      userSetPropertiesModels: 'UserSetPropertiesModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      desktopId: 'string',
      desktopName: 'string',
      endUserEmail: 'string',
      endUserId: 'string',
      endUserName: 'string',
      endUserPhone: 'string',
      endUserType: 'string',
      externalInfo: DescribeUsersInGroupResponseBodyEndUsersExternalInfo,
      userSetPropertiesModels: { 'type': 'array', 'itemType': DescribeUsersInGroupResponseBodyEndUsersUserSetPropertiesModels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualMFADevicesResponseBodyVirtualMFADevices extends $tea.Model {
  consecutiveFails?: number;
  directoryId?: string;
  endUserId?: string;
  gmtEnabled?: string;
  gmtUnlock?: string;
  officeSiteId?: string;
  serialNumber?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      consecutiveFails: 'ConsecutiveFails',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      gmtEnabled: 'GmtEnabled',
      gmtUnlock: 'GmtUnlock',
      officeSiteId: 'OfficeSiteId',
      serialNumber: 'SerialNumber',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consecutiveFails: 'number',
      directoryId: 'string',
      endUserId: 'string',
      gmtEnabled: 'string',
      gmtUnlock: 'string',
      officeSiteId: 'string',
      serialNumber: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsResponseBodyCves extends $tea.Model {
  cveId?: string;
  cvssScore?: string;
  summary?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cveId: 'CveId',
      cvssScore: 'CvssScore',
      summary: 'Summary',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveId: 'string',
      cvssScore: 'string',
      summary: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList extends $tea.Model {
  fullVersion?: string;
  matchDetail?: string;
  name?: string;
  path?: string;
  updateCmd?: string;
  static names(): { [key: string]: string } {
    return {
      fullVersion: 'FullVersion',
      matchDetail: 'MatchDetail',
      name: 'Name',
      path: 'Path',
      updateCmd: 'UpdateCmd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullVersion: 'string',
      matchDetail: 'string',
      name: 'string',
      path: 'string',
      updateCmd: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBodyVulRecordsExtendContentJson extends $tea.Model {
  rpmEntityList?: DescribeVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList[];
  static names(): { [key: string]: string } {
    return {
      rpmEntityList: 'RpmEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rpmEntityList: { 'type': 'array', 'itemType': DescribeVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBodyVulRecords extends $tea.Model {
  aliasName?: string;
  desktopId?: string;
  desktopName?: string;
  extendContentJson?: DescribeVulListResponseBodyVulRecordsExtendContentJson;
  firstTs?: number;
  lastTs?: number;
  modifyTs?: number;
  name?: string;
  necessity?: string;
  online?: boolean;
  osVersion?: string;
  related?: string;
  repairTs?: number;
  resultCode?: string;
  resultMessage?: string;
  status?: number;
  tag?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      extendContentJson: 'ExtendContentJson',
      firstTs: 'FirstTs',
      lastTs: 'LastTs',
      modifyTs: 'ModifyTs',
      name: 'Name',
      necessity: 'Necessity',
      online: 'Online',
      osVersion: 'OsVersion',
      related: 'Related',
      repairTs: 'RepairTs',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      status: 'Status',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      desktopId: 'string',
      desktopName: 'string',
      extendContentJson: DescribeVulListResponseBodyVulRecordsExtendContentJson,
      firstTs: 'number',
      lastTs: 'number',
      modifyTs: 'number',
      name: 'string',
      necessity: 'string',
      online: 'boolean',
      osVersion: 'string',
      related: 'string',
      repairTs: 'number',
      resultCode: 'string',
      resultMessage: 'string',
      status: 'number',
      tag: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $tea.Model {
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDesktopListInfoRequestTag extends $tea.Model {
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

export class GetDesktopGroupDetailResponseBodyDesktopsTimerInfos extends $tea.Model {
  cronExpression?: string;
  status?: number;
  timerType?: number;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      status: 'Status',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      status: 'number',
      timerType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailResponseBodyDesktops extends $tea.Model {
  allowAutoSetup?: number;
  allowBufferCount?: number;
  bindAmount?: number;
  comments?: string;
  cpu?: number;
  creationTime?: string;
  creator?: string;
  dataDiskCategory?: string;
  dataDiskSize?: string;
  desktopGroupId?: string;
  desktopGroupName?: string;
  directoryId?: string;
  directoryType?: string;
  expiredTime?: string;
  gpuCount?: number;
  gpuSpec?: string;
  keepDuration?: number;
  loadPolicy?: number;
  maxDesktopsCount?: number;
  memory?: number;
  minDesktopsCount?: number;
  officeSiteId?: string;
  officeSiteName?: string;
  officeSiteType?: string;
  ownBundleId?: string;
  ownBundleName?: string;
  ownType?: number;
  payType?: string;
  policyGroupId?: string;
  policyGroupName?: string;
  resType?: number;
  resetType?: number;
  status?: number;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  timerInfos?: GetDesktopGroupDetailResponseBodyDesktopsTimerInfos[];
  static names(): { [key: string]: string } {
    return {
      allowAutoSetup: 'AllowAutoSetup',
      allowBufferCount: 'AllowBufferCount',
      bindAmount: 'BindAmount',
      comments: 'Comments',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      creator: 'Creator',
      dataDiskCategory: 'DataDiskCategory',
      dataDiskSize: 'DataDiskSize',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupName: 'DesktopGroupName',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      expiredTime: 'ExpiredTime',
      gpuCount: 'GpuCount',
      gpuSpec: 'GpuSpec',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxDesktopsCount: 'MaxDesktopsCount',
      memory: 'Memory',
      minDesktopsCount: 'MinDesktopsCount',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteType: 'OfficeSiteType',
      ownBundleId: 'OwnBundleId',
      ownBundleName: 'OwnBundleName',
      ownType: 'OwnType',
      payType: 'PayType',
      policyGroupId: 'PolicyGroupId',
      policyGroupName: 'PolicyGroupName',
      resType: 'ResType',
      resetType: 'ResetType',
      status: 'Status',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      timerInfos: 'TimerInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowAutoSetup: 'number',
      allowBufferCount: 'number',
      bindAmount: 'number',
      comments: 'string',
      cpu: 'number',
      creationTime: 'string',
      creator: 'string',
      dataDiskCategory: 'string',
      dataDiskSize: 'string',
      desktopGroupId: 'string',
      desktopGroupName: 'string',
      directoryId: 'string',
      directoryType: 'string',
      expiredTime: 'string',
      gpuCount: 'number',
      gpuSpec: 'string',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxDesktopsCount: 'number',
      memory: 'number',
      minDesktopsCount: 'number',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteType: 'string',
      ownBundleId: 'string',
      ownBundleName: 'string',
      ownType: 'number',
      payType: 'string',
      policyGroupId: 'string',
      policyGroupName: 'string',
      resType: 'number',
      resetType: 'number',
      status: 'number',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      timerInfos: { 'type': 'array', 'itemType': GetDesktopGroupDetailResponseBodyDesktopsTimerInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSecurityEventsRequestSecurityEvent extends $tea.Model {
  desktopId?: string;
  securityEventId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      securityEventId: 'SecurityEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      securityEventId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoryUsersResponseBodyUsers extends $tea.Model {
  displayName?: string;
  endUser?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      endUser: 'EndUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      endUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteOverviewResponseBodyOfficeSiteOverviewResults extends $tea.Model {
  hasExpiredEdsCount?: number;
  hasExpiredEdsCountForGroup?: number;
  officeSiteId?: string;
  officeSiteName?: string;
  officeSiteStatus?: string;
  regionId?: string;
  runningEdsCount?: number;
  runningEdsCountForGroup?: number;
  totalEdsCount?: number;
  totalEdsCountForGroup?: number;
  vpcType?: string;
  willExpiredEdsCount?: number;
  willExpiredEdsCountForGroup?: number;
  static names(): { [key: string]: string } {
    return {
      hasExpiredEdsCount: 'HasExpiredEdsCount',
      hasExpiredEdsCountForGroup: 'HasExpiredEdsCountForGroup',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      officeSiteStatus: 'OfficeSiteStatus',
      regionId: 'RegionId',
      runningEdsCount: 'RunningEdsCount',
      runningEdsCountForGroup: 'RunningEdsCountForGroup',
      totalEdsCount: 'TotalEdsCount',
      totalEdsCountForGroup: 'TotalEdsCountForGroup',
      vpcType: 'VpcType',
      willExpiredEdsCount: 'WillExpiredEdsCount',
      willExpiredEdsCountForGroup: 'WillExpiredEdsCountForGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasExpiredEdsCount: 'number',
      hasExpiredEdsCountForGroup: 'number',
      officeSiteId: 'string',
      officeSiteName: 'string',
      officeSiteStatus: 'string',
      regionId: 'string',
      runningEdsCount: 'number',
      runningEdsCountForGroup: 'number',
      totalEdsCount: 'number',
      totalEdsCountForGroup: 'number',
      vpcType: 'string',
      willExpiredEdsCount: 'number',
      willExpiredEdsCountForGroup: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteUsersResponseBodyUsers extends $tea.Model {
  displayName?: string;
  endUser?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      endUser: 'EndUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      endUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAdOrganizationUnitsResponseBodyOUNames extends $tea.Model {
  OUName?: string;
  officeSiteId?: string;
  static names(): { [key: string]: string } {
    return {
      OUName: 'OUName',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OUName: 'string',
      officeSiteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopsPolicyGroupResponseBodyModifyResults extends $tea.Model {
  code?: string;
  desktopId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desktopId: 'DesktopId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desktopId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOperateVulRequestVulInfo extends $tea.Model {
  desktopId?: string;
  name?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      name: 'Name',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      name: 'string',
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestAuthorizeAccessPolicyRule extends $tea.Model {
  cidrIp?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule extends $tea.Model {
  cidrIp?: string;
  description?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestClientType extends $tea.Model {
  clientType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestRevokeAccessPolicyRule extends $tea.Model {
  cidrIp?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestRevokeSecurityPolicyRule extends $tea.Model {
  cidrIp?: string;
  description?: string;
  ipProtocol?: string;
  policy?: string;
  portRange?: string;
  priority?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      description: 'string',
      ipProtocol: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestUsbSupplyRedirectRule extends $tea.Model {
  description?: string;
  deviceClass?: string;
  deviceSubclass?: string;
  productId?: string;
  usbRedirectType?: number;
  usbRuleType?: number;
  vendorId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deviceClass: 'DeviceClass',
      deviceSubclass: 'DeviceSubclass',
      productId: 'ProductId',
      usbRedirectType: 'UsbRedirectType',
      usbRuleType: 'UsbRuleType',
      vendorId: 'VendorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deviceClass: 'string',
      deviceSubclass: 'string',
      productId: 'string',
      usbRedirectType: 'number',
      usbRuleType: 'number',
      vendorId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDesktopsResponseBodyRebuildResults extends $tea.Model {
  code?: string;
  desktopId?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desktopId: 'DesktopId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desktopId: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
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

export class VerifyCenResponseBodyRouteEntries extends $tea.Model {
  destinationCidrBlock?: string;
  nextHopInstanceId?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopInstanceId: 'NextHopInstanceId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      nextHopInstanceId: 'string',
      regionId: 'string',
      status: 'string',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ecd", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async activateOfficeSiteWithOptions(request: ActivateOfficeSiteRequest, runtime: $Util.RuntimeOptions): Promise<ActivateOfficeSiteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ActivateOfficeSite",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActivateOfficeSiteResponse>(await this.callApi(params, req, runtime), new ActivateOfficeSiteResponse({}));
  }

  async activateOfficeSite(request: ActivateOfficeSiteRequest): Promise<ActivateOfficeSiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateOfficeSiteWithOptions(request, runtime);
  }

  async addUserToDesktopGroupWithOptions(request: AddUserToDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddUserToDesktopGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopGroupIds)) {
      query["DesktopGroupIds"] = request.desktopGroupIds;
    }

    if (!Util.isUnset(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddUserToDesktopGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddUserToDesktopGroupResponse>(await this.callApi(params, req, runtime), new AddUserToDesktopGroupResponse({}));
  }

  async addUserToDesktopGroup(request: AddUserToDesktopGroupRequest): Promise<AddUserToDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToDesktopGroupWithOptions(request, runtime);
  }

  async applyCoordinationForMonitoringWithOptions(request: ApplyCoordinationForMonitoringRequest, runtime: $Util.RuntimeOptions): Promise<ApplyCoordinationForMonitoringResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.coordinatePolicyType)) {
      query["CoordinatePolicyType"] = request.coordinatePolicyType;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.initiatorType)) {
      query["InitiatorType"] = request.initiatorType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceCandidates)) {
      query["ResourceCandidates"] = request.resourceCandidates;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyCoordinationForMonitoring",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyCoordinationForMonitoringResponse>(await this.callApi(params, req, runtime), new ApplyCoordinationForMonitoringResponse({}));
  }

  async applyCoordinationForMonitoring(request: ApplyCoordinationForMonitoringRequest): Promise<ApplyCoordinationForMonitoringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyCoordinationForMonitoringWithOptions(request, runtime);
  }

  async approveFotaUpdateWithOptions(request: ApproveFotaUpdateRequest, runtime: $Util.RuntimeOptions): Promise<ApproveFotaUpdateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApproveFotaUpdate",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApproveFotaUpdateResponse>(await this.callApi(params, req, runtime), new ApproveFotaUpdateResponse({}));
  }

  async approveFotaUpdate(request: ApproveFotaUpdateRequest): Promise<ApproveFotaUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.approveFotaUpdateWithOptions(request, runtime);
  }

  async associateNetworkPackageWithOptions(request: AssociateNetworkPackageRequest, runtime: $Util.RuntimeOptions): Promise<AssociateNetworkPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssociateNetworkPackage",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateNetworkPackageResponse>(await this.callApi(params, req, runtime), new AssociateNetworkPackageResponse({}));
  }

  async associateNetworkPackage(request: AssociateNetworkPackageRequest): Promise<AssociateNetworkPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateNetworkPackageWithOptions(request, runtime);
  }

  async attachCenWithOptions(request: AttachCenRequest, runtime: $Util.RuntimeOptions): Promise<AttachCenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachCen",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachCenResponse>(await this.callApi(params, req, runtime), new AttachCenResponse({}));
  }

  async attachCen(request: AttachCenRequest): Promise<AttachCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachCenWithOptions(request, runtime);
  }

  async cancelCoordinationForMonitoringWithOptions(request: CancelCoordinationForMonitoringRequest, runtime: $Util.RuntimeOptions): Promise<CancelCoordinationForMonitoringResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.coIds)) {
      query["CoIds"] = request.coIds;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.userType)) {
      query["UserType"] = request.userType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelCoordinationForMonitoring",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelCoordinationForMonitoringResponse>(await this.callApi(params, req, runtime), new CancelCoordinationForMonitoringResponse({}));
  }

  async cancelCoordinationForMonitoring(request: CancelCoordinationForMonitoringRequest): Promise<CancelCoordinationForMonitoringResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCoordinationForMonitoringWithOptions(request, runtime);
  }

  async cancelCopyImageWithOptions(request: CancelCopyImageRequest, runtime: $Util.RuntimeOptions): Promise<CancelCopyImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelCopyImage",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelCopyImageResponse>(await this.callApi(params, req, runtime), new CancelCopyImageResponse({}));
  }

  async cancelCopyImage(request: CancelCopyImageRequest): Promise<CancelCopyImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelCopyImageWithOptions(request, runtime);
  }

  async clonePolicyGroupWithOptions(request: ClonePolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<ClonePolicyGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ClonePolicyGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClonePolicyGroupResponse>(await this.callApi(params, req, runtime), new ClonePolicyGroupResponse({}));
  }

  async clonePolicyGroup(request: ClonePolicyGroupRequest): Promise<ClonePolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clonePolicyGroupWithOptions(request, runtime);
  }

  async configADConnectorTrustWithOptions(request: ConfigADConnectorTrustRequest, runtime: $Util.RuntimeOptions): Promise<ConfigADConnectorTrustResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.trustKey)) {
      query["TrustKey"] = request.trustKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigADConnectorTrust",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigADConnectorTrustResponse>(await this.callApi(params, req, runtime), new ConfigADConnectorTrustResponse({}));
  }

  async configADConnectorTrust(request: ConfigADConnectorTrustRequest): Promise<ConfigADConnectorTrustResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configADConnectorTrustWithOptions(request, runtime);
  }

  async configADConnectorUserWithOptions(request: ConfigADConnectorUserRequest, runtime: $Util.RuntimeOptions): Promise<ConfigADConnectorUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.domainPassword)) {
      query["DomainPassword"] = request.domainPassword;
    }

    if (!Util.isUnset(request.domainUserName)) {
      query["DomainUserName"] = request.domainUserName;
    }

    if (!Util.isUnset(request.OUName)) {
      query["OUName"] = request.OUName;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConfigADConnectorUser",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ConfigADConnectorUserResponse>(await this.callApi(params, req, runtime), new ConfigADConnectorUserResponse({}));
  }

  async configADConnectorUser(request: ConfigADConnectorUserRequest): Promise<ConfigADConnectorUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.configADConnectorUserWithOptions(request, runtime);
  }

  async copyImageWithOptions(request: CopyImageRequest, runtime: $Util.RuntimeOptions): Promise<CopyImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.destinationDescription)) {
      query["DestinationDescription"] = request.destinationDescription;
    }

    if (!Util.isUnset(request.destinationImageName)) {
      query["DestinationImageName"] = request.destinationImageName;
    }

    if (!Util.isUnset(request.destinationRegionId)) {
      query["DestinationRegionId"] = request.destinationRegionId;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CopyImage",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CopyImageResponse>(await this.callApi(params, req, runtime), new CopyImageResponse({}));
  }

  async copyImage(request: CopyImageRequest): Promise<CopyImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyImageWithOptions(request, runtime);
  }

  async createADConnectorDirectoryWithOptions(request: CreateADConnectorDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateADConnectorDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!Util.isUnset(request.directoryName)) {
      query["DirectoryName"] = request.directoryName;
    }

    if (!Util.isUnset(request.dnsAddress)) {
      query["DnsAddress"] = request.dnsAddress;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainPassword)) {
      query["DomainPassword"] = request.domainPassword;
    }

    if (!Util.isUnset(request.domainUserName)) {
      query["DomainUserName"] = request.domainUserName;
    }

    if (!Util.isUnset(request.enableAdminAccess)) {
      query["EnableAdminAccess"] = request.enableAdminAccess;
    }

    if (!Util.isUnset(request.mfaEnabled)) {
      query["MfaEnabled"] = request.mfaEnabled;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.subDomainDnsAddress)) {
      query["SubDomainDnsAddress"] = request.subDomainDnsAddress;
    }

    if (!Util.isUnset(request.subDomainName)) {
      query["SubDomainName"] = request.subDomainName;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateADConnectorDirectory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateADConnectorDirectoryResponse>(await this.callApi(params, req, runtime), new CreateADConnectorDirectoryResponse({}));
  }

  async createADConnectorDirectory(request: CreateADConnectorDirectoryRequest): Promise<CreateADConnectorDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createADConnectorDirectoryWithOptions(request, runtime);
  }

  async createADConnectorOfficeSiteWithOptions(request: CreateADConnectorOfficeSiteRequest, runtime: $Util.RuntimeOptions): Promise<CreateADConnectorOfficeSiteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adHostname)) {
      query["AdHostname"] = request.adHostname;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!Util.isUnset(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!Util.isUnset(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!Util.isUnset(request.dnsAddress)) {
      query["DnsAddress"] = request.dnsAddress;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainPassword)) {
      query["DomainPassword"] = request.domainPassword;
    }

    if (!Util.isUnset(request.domainUserName)) {
      query["DomainUserName"] = request.domainUserName;
    }

    if (!Util.isUnset(request.enableAdminAccess)) {
      query["EnableAdminAccess"] = request.enableAdminAccess;
    }

    if (!Util.isUnset(request.enableInternetAccess)) {
      query["EnableInternetAccess"] = request.enableInternetAccess;
    }

    if (!Util.isUnset(request.mfaEnabled)) {
      query["MfaEnabled"] = request.mfaEnabled;
    }

    if (!Util.isUnset(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!Util.isUnset(request.subDomainDnsAddress)) {
      query["SubDomainDnsAddress"] = request.subDomainDnsAddress;
    }

    if (!Util.isUnset(request.subDomainName)) {
      query["SubDomainName"] = request.subDomainName;
    }

    if (!Util.isUnset(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateADConnectorOfficeSite",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateADConnectorOfficeSiteResponse>(await this.callApi(params, req, runtime), new CreateADConnectorOfficeSiteResponse({}));
  }

  async createADConnectorOfficeSite(request: CreateADConnectorOfficeSiteRequest): Promise<CreateADConnectorOfficeSiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createADConnectorOfficeSiteWithOptions(request, runtime);
  }

  async createBundleWithOptions(request: CreateBundleRequest, runtime: $Util.RuntimeOptions): Promise<CreateBundleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bundleName)) {
      query["BundleName"] = request.bundleName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rootDiskPerformanceLevel)) {
      query["RootDiskPerformanceLevel"] = request.rootDiskPerformanceLevel;
    }

    if (!Util.isUnset(request.rootDiskSizeGib)) {
      query["RootDiskSizeGib"] = request.rootDiskSizeGib;
    }

    if (!Util.isUnset(request.userDiskPerformanceLevel)) {
      query["UserDiskPerformanceLevel"] = request.userDiskPerformanceLevel;
    }

    if (!Util.isUnset(request.userDiskSizeGib)) {
      query["UserDiskSizeGib"] = request.userDiskSizeGib;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBundle",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBundleResponse>(await this.callApi(params, req, runtime), new CreateBundleResponse({}));
  }

  async createBundle(request: CreateBundleRequest): Promise<CreateBundleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBundleWithOptions(request, runtime);
  }

  async createDesktopGroupWithOptions(request: CreateDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDesktopGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allClassifyUsers)) {
      query["AllClassifyUsers"] = request.allClassifyUsers;
    }

    if (!Util.isUnset(request.allowAutoSetup)) {
      query["AllowAutoSetup"] = request.allowAutoSetup;
    }

    if (!Util.isUnset(request.allowBufferCount)) {
      query["AllowBufferCount"] = request.allowBufferCount;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.bindAmount)) {
      query["BindAmount"] = request.bindAmount;
    }

    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.classify)) {
      query["Classify"] = request.classify;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!Util.isUnset(request.defaultInitDesktopCount)) {
      query["DefaultInitDesktopCount"] = request.defaultInitDesktopCount;
    }

    if (!Util.isUnset(request.desktopGroupName)) {
      query["DesktopGroupName"] = request.desktopGroupName;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!Util.isUnset(request.keepDuration)) {
      query["KeepDuration"] = request.keepDuration;
    }

    if (!Util.isUnset(request.loadPolicy)) {
      query["LoadPolicy"] = request.loadPolicy;
    }

    if (!Util.isUnset(request.maxDesktopsCount)) {
      query["MaxDesktopsCount"] = request.maxDesktopsCount;
    }

    if (!Util.isUnset(request.minDesktopsCount)) {
      query["MinDesktopsCount"] = request.minDesktopsCount;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.ownType)) {
      query["OwnType"] = request.ownType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resetType)) {
      query["ResetType"] = request.resetType;
    }

    if (!Util.isUnset(request.scaleStrategyId)) {
      query["ScaleStrategyId"] = request.scaleStrategyId;
    }

    if (!Util.isUnset(request.volumeEncryptionEnabled)) {
      query["VolumeEncryptionEnabled"] = request.volumeEncryptionEnabled;
    }

    if (!Util.isUnset(request.volumeEncryptionKey)) {
      query["VolumeEncryptionKey"] = request.volumeEncryptionKey;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDesktopGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDesktopGroupResponse>(await this.callApi(params, req, runtime), new CreateDesktopGroupResponse({}));
  }

  async createDesktopGroup(request: CreateDesktopGroupRequest): Promise<CreateDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDesktopGroupWithOptions(request, runtime);
  }

  async createDesktopsWithOptions(request: CreateDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<CreateDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!Util.isUnset(request.desktopNameSuffix)) {
      query["DesktopNameSuffix"] = request.desktopNameSuffix;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.hostname)) {
      query["Hostname"] = request.hostname;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.userAssignMode)) {
      query["UserAssignMode"] = request.userAssignMode;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!Util.isUnset(request.volumeEncryptionEnabled)) {
      query["VolumeEncryptionEnabled"] = request.volumeEncryptionEnabled;
    }

    if (!Util.isUnset(request.volumeEncryptionKey)) {
      query["VolumeEncryptionKey"] = request.volumeEncryptionKey;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDesktopsResponse>(await this.callApi(params, req, runtime), new CreateDesktopsResponse({}));
  }

  async createDesktops(request: CreateDesktopsRequest): Promise<CreateDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDesktopsWithOptions(request, runtime);
  }

  async createDiskEncryptionServiceWithOptions(request: CreateDiskEncryptionServiceRequest, runtime: $Util.RuntimeOptions): Promise<CreateDiskEncryptionServiceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDiskEncryptionService",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDiskEncryptionServiceResponse>(await this.callApi(params, req, runtime), new CreateDiskEncryptionServiceResponse({}));
  }

  async createDiskEncryptionService(request: CreateDiskEncryptionServiceRequest): Promise<CreateDiskEncryptionServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDiskEncryptionServiceWithOptions(request, runtime);
  }

  async createImageWithOptions(request: CreateImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoCleanUserdata)) {
      query["AutoCleanUserdata"] = request.autoCleanUserdata;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.diskType)) {
      query["DiskType"] = request.diskType;
    }

    if (!Util.isUnset(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.imageResourceType)) {
      query["ImageResourceType"] = request.imageResourceType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!Util.isUnset(request.snapshotIds)) {
      query["SnapshotIds"] = request.snapshotIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateImage",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateImageResponse>(await this.callApi(params, req, runtime), new CreateImageResponse({}));
  }

  async createImage(request: CreateImageRequest): Promise<CreateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageWithOptions(request, runtime);
  }

  async createNASFileSystemWithOptions(request: CreateNASFileSystemRequest, runtime: $Util.RuntimeOptions): Promise<CreateNASFileSystemResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNASFileSystem",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNASFileSystemResponse>(await this.callApi(params, req, runtime), new CreateNASFileSystemResponse({}));
  }

  async createNASFileSystem(request: CreateNASFileSystemRequest): Promise<CreateNASFileSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNASFileSystemWithOptions(request, runtime);
  }

  async createNetworkPackageWithOptions(request: CreateNetworkPackageRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNetworkPackage",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNetworkPackageResponse>(await this.callApi(params, req, runtime), new CreateNetworkPackageResponse({}));
  }

  async createNetworkPackage(request: CreateNetworkPackageRequest): Promise<CreateNetworkPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkPackageWithOptions(request, runtime);
  }

  async createPolicyGroupWithOptions(request: CreatePolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizeAccessPolicyRule)) {
      query["AuthorizeAccessPolicyRule"] = request.authorizeAccessPolicyRule;
    }

    if (!Util.isUnset(request.authorizeSecurityPolicyRule)) {
      query["AuthorizeSecurityPolicyRule"] = request.authorizeSecurityPolicyRule;
    }

    if (!Util.isUnset(request.cameraRedirect)) {
      query["CameraRedirect"] = request.cameraRedirect;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.clipboard)) {
      query["Clipboard"] = request.clipboard;
    }

    if (!Util.isUnset(request.domainList)) {
      query["DomainList"] = request.domainList;
    }

    if (!Util.isUnset(request.gpuAcceleration)) {
      query["GpuAcceleration"] = request.gpuAcceleration;
    }

    if (!Util.isUnset(request.html5Access)) {
      query["Html5Access"] = request.html5Access;
    }

    if (!Util.isUnset(request.html5FileTransfer)) {
      query["Html5FileTransfer"] = request.html5FileTransfer;
    }

    if (!Util.isUnset(request.localDrive)) {
      query["LocalDrive"] = request.localDrive;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.netRedirect)) {
      query["NetRedirect"] = request.netRedirect;
    }

    if (!Util.isUnset(request.preemptLogin)) {
      query["PreemptLogin"] = request.preemptLogin;
    }

    if (!Util.isUnset(request.preemptLoginUser)) {
      query["PreemptLoginUser"] = request.preemptLoginUser;
    }

    if (!Util.isUnset(request.printerRedirection)) {
      query["PrinterRedirection"] = request.printerRedirection;
    }

    if (!Util.isUnset(request.recording)) {
      query["Recording"] = request.recording;
    }

    if (!Util.isUnset(request.recordingEndTime)) {
      query["RecordingEndTime"] = request.recordingEndTime;
    }

    if (!Util.isUnset(request.recordingFps)) {
      query["RecordingFps"] = request.recordingFps;
    }

    if (!Util.isUnset(request.recordingStartTime)) {
      query["RecordingStartTime"] = request.recordingStartTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.usbRedirect)) {
      query["UsbRedirect"] = request.usbRedirect;
    }

    if (!Util.isUnset(request.usbSupplyRedirectRule)) {
      query["UsbSupplyRedirectRule"] = request.usbSupplyRedirectRule;
    }

    if (!Util.isUnset(request.visualQuality)) {
      query["VisualQuality"] = request.visualQuality;
    }

    if (!Util.isUnset(request.watermark)) {
      query["Watermark"] = request.watermark;
    }

    if (!Util.isUnset(request.watermarkTransparency)) {
      query["WatermarkTransparency"] = request.watermarkTransparency;
    }

    if (!Util.isUnset(request.watermarkType)) {
      query["WatermarkType"] = request.watermarkType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePolicyGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePolicyGroupResponse>(await this.callApi(params, req, runtime), new CreatePolicyGroupResponse({}));
  }

  async createPolicyGroup(request: CreatePolicyGroupRequest): Promise<CreatePolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyGroupWithOptions(request, runtime);
  }

  async createRAMDirectoryWithOptions(request: CreateRAMDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateRAMDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!Util.isUnset(request.directoryName)) {
      query["DirectoryName"] = request.directoryName;
    }

    if (!Util.isUnset(request.enableAdminAccess)) {
      query["EnableAdminAccess"] = request.enableAdminAccess;
    }

    if (!Util.isUnset(request.enableInternetAccess)) {
      query["EnableInternetAccess"] = request.enableInternetAccess;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateRAMDirectory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateRAMDirectoryResponse>(await this.callApi(params, req, runtime), new CreateRAMDirectoryResponse({}));
  }

  async createRAMDirectory(request: CreateRAMDirectoryRequest): Promise<CreateRAMDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRAMDirectoryWithOptions(request, runtime);
  }

  async createSimpleOfficeSiteWithOptions(request: CreateSimpleOfficeSiteRequest, runtime: $Util.RuntimeOptions): Promise<CreateSimpleOfficeSiteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!Util.isUnset(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!Util.isUnset(request.cloudBoxOfficeSite)) {
      query["CloudBoxOfficeSite"] = request.cloudBoxOfficeSite;
    }

    if (!Util.isUnset(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!Util.isUnset(request.enableAdminAccess)) {
      query["EnableAdminAccess"] = request.enableAdminAccess;
    }

    if (!Util.isUnset(request.enableInternetAccess)) {
      query["EnableInternetAccess"] = request.enableInternetAccess;
    }

    if (!Util.isUnset(request.needVerifyZeroDevice)) {
      query["NeedVerifyZeroDevice"] = request.needVerifyZeroDevice;
    }

    if (!Util.isUnset(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSimpleOfficeSite",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSimpleOfficeSiteResponse>(await this.callApi(params, req, runtime), new CreateSimpleOfficeSiteResponse({}));
  }

  async createSimpleOfficeSite(request: CreateSimpleOfficeSiteRequest): Promise<CreateSimpleOfficeSiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSimpleOfficeSiteWithOptions(request, runtime);
  }

  async createSnapshotWithOptions(request: CreateSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CreateSnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    if (!Util.isUnset(request.sourceDiskType)) {
      query["SourceDiskType"] = request.sourceDiskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSnapshot",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSnapshotResponse>(await this.callApi(params, req, runtime), new CreateSnapshotResponse({}));
  }

  async createSnapshot(request: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  async deleteBundlesWithOptions(request: DeleteBundlesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBundlesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBundles",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBundlesResponse>(await this.callApi(params, req, runtime), new DeleteBundlesResponse({}));
  }

  async deleteBundles(request: DeleteBundlesRequest): Promise<DeleteBundlesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBundlesWithOptions(request, runtime);
  }

  async deleteDesktopGroupWithOptions(request: DeleteDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDesktopGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDesktopGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDesktopGroupResponse>(await this.callApi(params, req, runtime), new DeleteDesktopGroupResponse({}));
  }

  async deleteDesktopGroup(request: DeleteDesktopGroupRequest): Promise<DeleteDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDesktopGroupWithOptions(request, runtime);
  }

  async deleteDesktopsWithOptions(request: DeleteDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDesktopsResponse>(await this.callApi(params, req, runtime), new DeleteDesktopsResponse({}));
  }

  async deleteDesktops(request: DeleteDesktopsRequest): Promise<DeleteDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDesktopsWithOptions(request, runtime);
  }

  async deleteDirectoriesWithOptions(request: DeleteDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDirectoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDirectories",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDirectoriesResponse>(await this.callApi(params, req, runtime), new DeleteDirectoriesResponse({}));
  }

  async deleteDirectories(request: DeleteDirectoriesRequest): Promise<DeleteDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDirectoriesWithOptions(request, runtime);
  }

  async deleteImagesWithOptions(request: DeleteImagesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteImages",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteImagesResponse>(await this.callApi(params, req, runtime), new DeleteImagesResponse({}));
  }

  async deleteImages(request: DeleteImagesRequest): Promise<DeleteImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImagesWithOptions(request, runtime);
  }

  async deleteNASFileSystemsWithOptions(request: DeleteNASFileSystemsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNASFileSystemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNASFileSystems",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNASFileSystemsResponse>(await this.callApi(params, req, runtime), new DeleteNASFileSystemsResponse({}));
  }

  async deleteNASFileSystems(request: DeleteNASFileSystemsRequest): Promise<DeleteNASFileSystemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNASFileSystemsWithOptions(request, runtime);
  }

  async deleteNetworkPackagesWithOptions(request: DeleteNetworkPackagesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkPackagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNetworkPackages",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNetworkPackagesResponse>(await this.callApi(params, req, runtime), new DeleteNetworkPackagesResponse({}));
  }

  async deleteNetworkPackages(request: DeleteNetworkPackagesRequest): Promise<DeleteNetworkPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkPackagesWithOptions(request, runtime);
  }

  async deleteOfficeSitesWithOptions(request: DeleteOfficeSitesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOfficeSitesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteOfficeSites",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteOfficeSitesResponse>(await this.callApi(params, req, runtime), new DeleteOfficeSitesResponse({}));
  }

  async deleteOfficeSites(request: DeleteOfficeSitesRequest): Promise<DeleteOfficeSitesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOfficeSitesWithOptions(request, runtime);
  }

  async deletePolicyGroupsWithOptions(request: DeletePolicyGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePolicyGroups",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePolicyGroupsResponse>(await this.callApi(params, req, runtime), new DeletePolicyGroupsResponse({}));
  }

  async deletePolicyGroups(request: DeletePolicyGroupsRequest): Promise<DeletePolicyGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyGroupsWithOptions(request, runtime);
  }

  async deleteSnapshotWithOptions(request: DeleteSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSnapshot",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSnapshotResponse>(await this.callApi(params, req, runtime), new DeleteSnapshotResponse({}));
  }

  async deleteSnapshot(request: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  async deleteVirtualMFADeviceWithOptions(request: DeleteVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVirtualMFADeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteVirtualMFADevice",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteVirtualMFADeviceResponse>(await this.callApi(params, req, runtime), new DeleteVirtualMFADeviceResponse({}));
  }

  async deleteVirtualMFADevice(request: DeleteVirtualMFADeviceRequest): Promise<DeleteVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVirtualMFADeviceWithOptions(request, runtime);
  }

  async describeAlarmEventStackInfoWithOptions(request: DescribeAlarmEventStackInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlarmEventStackInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.uniqueInfo)) {
      query["UniqueInfo"] = request.uniqueInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAlarmEventStackInfo",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAlarmEventStackInfoResponse>(await this.callApi(params, req, runtime), new DescribeAlarmEventStackInfoResponse({}));
  }

  async describeAlarmEventStackInfo(request: DescribeAlarmEventStackInfoRequest): Promise<DescribeAlarmEventStackInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlarmEventStackInfoWithOptions(request, runtime);
  }

  async describeBundlesWithOptions(request: DescribeBundlesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBundlesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.bundleType)) {
      query["BundleType"] = request.bundleType;
    }

    if (!Util.isUnset(request.checkStock)) {
      query["CheckStock"] = request.checkStock;
    }

    if (!Util.isUnset(request.cpuCount)) {
      query["CpuCount"] = request.cpuCount;
    }

    if (!Util.isUnset(request.desktopTypeFamily)) {
      query["DesktopTypeFamily"] = request.desktopTypeFamily;
    }

    if (!Util.isUnset(request.fotaChannel)) {
      query["FotaChannel"] = request.fotaChannel;
    }

    if (!Util.isUnset(request.fromDesktopGroup)) {
      query["FromDesktopGroup"] = request.fromDesktopGroup;
    }

    if (!Util.isUnset(request.gpuCount)) {
      query["GpuCount"] = request.gpuCount;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.memorySize)) {
      query["MemorySize"] = request.memorySize;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.supportMultiSession)) {
      query["SupportMultiSession"] = request.supportMultiSession;
    }

    if (!Util.isUnset(request.volumeEncryptionEnabled)) {
      query["VolumeEncryptionEnabled"] = request.volumeEncryptionEnabled;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBundles",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeBundlesResponse>(await this.callApi(params, req, runtime), new DescribeBundlesResponse({}));
  }

  async describeBundles(request: DescribeBundlesRequest): Promise<DescribeBundlesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBundlesWithOptions(request, runtime);
  }

  async describeCensWithOptions(request: DescribeCensRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCensResponse> {
    Util.validateModel(request);
    let query = { };
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
      action: "DescribeCens",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeCensResponse>(await this.callApi(params, req, runtime), new DescribeCensResponse({}));
  }

  async describeCens(request: DescribeCensRequest): Promise<DescribeCensResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCensWithOptions(request, runtime);
  }

  async describeClientEventsWithOptions(request: DescribeClientEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopIp)) {
      query["DesktopIp"] = request.desktopIp;
    }

    if (!Util.isUnset(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeClientEvents",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClientEventsResponse>(await this.callApi(params, req, runtime), new DescribeClientEventsResponse({}));
  }

  async describeClientEvents(request: DescribeClientEventsRequest): Promise<DescribeClientEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientEventsWithOptions(request, runtime);
  }

  async describeDesktopGroupsWithOptions(request: DescribeDesktopGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopGroupName)) {
      query["DesktopGroupName"] = request.desktopGroupName;
    }

    if (!Util.isUnset(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!Util.isUnset(request.excludedEndUserIds)) {
      query["ExcludedEndUserIds"] = request.excludedEndUserIds;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.ownType)) {
      query["OwnType"] = request.ownType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDesktopGroups",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDesktopGroupsResponse>(await this.callApi(params, req, runtime), new DescribeDesktopGroupsResponse({}));
  }

  async describeDesktopGroups(request: DescribeDesktopGroupsRequest): Promise<DescribeDesktopGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopGroupsWithOptions(request, runtime);
  }

  async describeDesktopIdsByVulNamesWithOptions(request: DescribeDesktopIdsByVulNamesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopIdsByVulNamesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.necessity)) {
      query["Necessity"] = request.necessity;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.vulName)) {
      query["VulName"] = request.vulName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDesktopIdsByVulNames",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDesktopIdsByVulNamesResponse>(await this.callApi(params, req, runtime), new DescribeDesktopIdsByVulNamesResponse({}));
  }

  async describeDesktopIdsByVulNames(request: DescribeDesktopIdsByVulNamesRequest): Promise<DescribeDesktopIdsByVulNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopIdsByVulNamesWithOptions(request, runtime);
  }

  async describeDesktopTypesWithOptions(request: DescribeDesktopTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appliedScope)) {
      query["AppliedScope"] = request.appliedScope;
    }

    if (!Util.isUnset(request.cpuCount)) {
      query["CpuCount"] = request.cpuCount;
    }

    if (!Util.isUnset(request.desktopIdForModify)) {
      query["DesktopIdForModify"] = request.desktopIdForModify;
    }

    if (!Util.isUnset(request.desktopTypeId)) {
      query["DesktopTypeId"] = request.desktopTypeId;
    }

    if (!Util.isUnset(request.gpuCount)) {
      query["GpuCount"] = request.gpuCount;
    }

    if (!Util.isUnset(request.instanceTypeFamily)) {
      query["InstanceTypeFamily"] = request.instanceTypeFamily;
    }

    if (!Util.isUnset(request.memorySize)) {
      query["MemorySize"] = request.memorySize;
    }

    if (!Util.isUnset(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDesktopTypes",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDesktopTypesResponse>(await this.callApi(params, req, runtime), new DescribeDesktopTypesResponse({}));
  }

  async describeDesktopTypes(request: DescribeDesktopTypesRequest): Promise<DescribeDesktopTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopTypesWithOptions(request, runtime);
  }

  async describeDesktopsWithOptions(request: DescribeDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!Util.isUnset(request.desktopStatus)) {
      query["DesktopStatus"] = request.desktopStatus;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.excludedEndUserId)) {
      query["ExcludedEndUserId"] = request.excludedEndUserId;
    }

    if (!Util.isUnset(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!Util.isUnset(request.filterDesktopGroup)) {
      query["FilterDesktopGroup"] = request.filterDesktopGroup;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.managementFlag)) {
      query["ManagementFlag"] = request.managementFlag;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.protocolType)) {
      query["ProtocolType"] = request.protocolType;
    }

    if (!Util.isUnset(request.queryFotaUpdate)) {
      query["QueryFotaUpdate"] = request.queryFotaUpdate;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDesktopsResponse>(await this.callApi(params, req, runtime), new DescribeDesktopsResponse({}));
  }

  async describeDesktops(request: DescribeDesktopsRequest): Promise<DescribeDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopsWithOptions(request, runtime);
  }

  async describeDesktopsInGroupWithOptions(request: DescribeDesktopsInGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopsInGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDesktopsInGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDesktopsInGroupResponse>(await this.callApi(params, req, runtime), new DescribeDesktopsInGroupResponse({}));
  }

  async describeDesktopsInGroup(request: DescribeDesktopsInGroupRequest): Promise<DescribeDesktopsInGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopsInGroupWithOptions(request, runtime);
  }

  async describeDirectoriesWithOptions(request: DescribeDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDirectoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.directoryStatus)) {
      query["DirectoryStatus"] = request.directoryStatus;
    }

    if (!Util.isUnset(request.directoryType)) {
      query["DirectoryType"] = request.directoryType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDirectories",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDirectoriesResponse>(await this.callApi(params, req, runtime), new DescribeDirectoriesResponse({}));
  }

  async describeDirectories(request: DescribeDirectoriesRequest): Promise<DescribeDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDirectoriesWithOptions(request, runtime);
  }

  async describeFlowMetricWithOptions(request: DescribeFlowMetricRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowMetricResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowMetric",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowMetricResponse>(await this.callApi(params, req, runtime), new DescribeFlowMetricResponse({}));
  }

  async describeFlowMetric(request: DescribeFlowMetricRequest): Promise<DescribeFlowMetricResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowMetricWithOptions(request, runtime);
  }

  async describeFlowStatisticWithOptions(request: DescribeFlowStatisticRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFlowStatisticResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFlowStatistic",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFlowStatisticResponse>(await this.callApi(params, req, runtime), new DescribeFlowStatisticResponse({}));
  }

  async describeFlowStatistic(request: DescribeFlowStatisticRequest): Promise<DescribeFlowStatisticResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFlowStatisticWithOptions(request, runtime);
  }

  async describeFotaPendingDesktopsWithOptions(request: DescribeFotaPendingDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFotaPendingDesktopsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFotaPendingDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFotaPendingDesktopsResponse>(await this.callApi(params, req, runtime), new DescribeFotaPendingDesktopsResponse({}));
  }

  async describeFotaPendingDesktops(request: DescribeFotaPendingDesktopsRequest): Promise<DescribeFotaPendingDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFotaPendingDesktopsWithOptions(request, runtime);
  }

  async describeFotaTasksWithOptions(request: DescribeFotaTasksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFotaTasksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fotaStatus)) {
      query["FotaStatus"] = request.fotaStatus;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskUid)) {
      query["TaskUid"] = request.taskUid;
    }

    if (!Util.isUnset(request.userStatus)) {
      query["UserStatus"] = request.userStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFotaTasks",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFotaTasksResponse>(await this.callApi(params, req, runtime), new DescribeFotaTasksResponse({}));
  }

  async describeFotaTasks(request: DescribeFotaTasksRequest): Promise<DescribeFotaTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFotaTasksWithOptions(request, runtime);
  }

  async describeFrontVulPatchListWithOptions(request: DescribeFrontVulPatchListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFrontVulPatchListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.vulInfo)) {
      query["VulInfo"] = request.vulInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeFrontVulPatchList",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeFrontVulPatchListResponse>(await this.callApi(params, req, runtime), new DescribeFrontVulPatchListResponse({}));
  }

  async describeFrontVulPatchList(request: DescribeFrontVulPatchListRequest): Promise<DescribeFrontVulPatchListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFrontVulPatchListWithOptions(request, runtime);
  }

  async describeGroupedVulWithOptions(request: DescribeGroupedVulRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupedVulResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dealed)) {
      query["Dealed"] = request.dealed;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.necessity)) {
      query["Necessity"] = request.necessity;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGroupedVul",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGroupedVulResponse>(await this.callApi(params, req, runtime), new DescribeGroupedVulResponse({}));
  }

  async describeGroupedVul(request: DescribeGroupedVulRequest): Promise<DescribeGroupedVulResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupedVulWithOptions(request, runtime);
  }

  async describeImageModifiedRecordsWithOptions(request: DescribeImageModifiedRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageModifiedRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageModifiedRecords",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageModifiedRecordsResponse>(await this.callApi(params, req, runtime), new DescribeImageModifiedRecordsResponse({}));
  }

  async describeImageModifiedRecords(request: DescribeImageModifiedRecordsRequest): Promise<DescribeImageModifiedRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageModifiedRecordsWithOptions(request, runtime);
  }

  async describeImagePermissionWithOptions(request: DescribeImagePermissionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImagePermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImagePermission",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImagePermissionResponse>(await this.callApi(params, req, runtime), new DescribeImagePermissionResponse({}));
  }

  async describeImagePermission(request: DescribeImagePermissionRequest): Promise<DescribeImagePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImagePermissionWithOptions(request, runtime);
  }

  async describeImagesWithOptions(request: DescribeImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopInstanceType)) {
      query["DesktopInstanceType"] = request.desktopInstanceType;
    }

    if (!Util.isUnset(request.fotaChannel)) {
      query["FotaChannel"] = request.fotaChannel;
    }

    if (!Util.isUnset(request.gpuCategory)) {
      query["GpuCategory"] = request.gpuCategory;
    }

    if (!Util.isUnset(request.gpuDriverVersion)) {
      query["GpuDriverVersion"] = request.gpuDriverVersion;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.imageStatus)) {
      query["ImageStatus"] = request.imageStatus;
    }

    if (!Util.isUnset(request.imageType)) {
      query["ImageType"] = request.imageType;
    }

    if (!Util.isUnset(request.languageType)) {
      query["LanguageType"] = request.languageType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
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
      action: "DescribeImages",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImagesResponse>(await this.callApi(params, req, runtime), new DescribeImagesResponse({}));
  }

  async describeImages(request: DescribeImagesRequest): Promise<DescribeImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImagesWithOptions(request, runtime);
  }

  async describeInvocationsWithOptions(request: DescribeInvocationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInvocationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandType)) {
      query["CommandType"] = request.commandType;
    }

    if (!Util.isUnset(request.contentEncoding)) {
      query["ContentEncoding"] = request.contentEncoding;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.includeOutput)) {
      query["IncludeOutput"] = request.includeOutput;
    }

    if (!Util.isUnset(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!Util.isUnset(request.invokeStatus)) {
      query["InvokeStatus"] = request.invokeStatus;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInvocations",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInvocationsResponse>(await this.callApi(params, req, runtime), new DescribeInvocationsResponse({}));
  }

  async describeInvocations(request: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  async describeKmsKeysWithOptions(request: DescribeKmsKeysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKmsKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeKmsKeys",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeKmsKeysResponse>(await this.callApi(params, req, runtime), new DescribeKmsKeysResponse({}));
  }

  async describeKmsKeys(request: DescribeKmsKeysRequest): Promise<DescribeKmsKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKmsKeysWithOptions(request, runtime);
  }

  async describeNASFileSystemsWithOptions(request: DescribeNASFileSystemsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNASFileSystemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNASFileSystems",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNASFileSystemsResponse>(await this.callApi(params, req, runtime), new DescribeNASFileSystemsResponse({}));
  }

  async describeNASFileSystems(request: DescribeNASFileSystemsRequest): Promise<DescribeNASFileSystemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNASFileSystemsWithOptions(request, runtime);
  }

  async describeNetworkPackagesWithOptions(request: DescribeNetworkPackagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkPackagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNetworkPackages",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNetworkPackagesResponse>(await this.callApi(params, req, runtime), new DescribeNetworkPackagesResponse({}));
  }

  async describeNetworkPackages(request: DescribeNetworkPackagesRequest): Promise<DescribeNetworkPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkPackagesWithOptions(request, runtime);
  }

  async describeOfficeSitesWithOptions(request: DescribeOfficeSitesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOfficeSitesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.officeSiteType)) {
      query["OfficeSiteType"] = request.officeSiteType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeOfficeSites",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeOfficeSitesResponse>(await this.callApi(params, req, runtime), new DescribeOfficeSitesResponse({}));
  }

  async describeOfficeSites(request: DescribeOfficeSitesRequest): Promise<DescribeOfficeSitesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOfficeSitesWithOptions(request, runtime);
  }

  async describePolicyGroupsWithOptions(request: DescribePolicyGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicyGroups",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePolicyGroupsResponse>(await this.callApi(params, req, runtime), new DescribePolicyGroupsResponse({}));
  }

  async describePolicyGroups(request: DescribePolicyGroupsRequest): Promise<DescribePolicyGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyGroupsWithOptions(request, runtime);
  }

  async describeRecordingsWithOptions(request: DescribeRecordingsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRecordingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRecordings",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRecordingsResponse>(await this.callApi(params, req, runtime), new DescribeRecordingsResponse({}));
  }

  async describeRecordings(request: DescribeRecordingsRequest): Promise<DescribeRecordingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRecordingsWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
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

  async describeScanTaskProgressWithOptions(request: DescribeScanTaskProgressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScanTaskProgressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScanTaskProgress",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScanTaskProgressResponse>(await this.callApi(params, req, runtime), new DescribeScanTaskProgressResponse({}));
  }

  async describeScanTaskProgress(request: DescribeScanTaskProgressRequest): Promise<DescribeScanTaskProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScanTaskProgressWithOptions(request, runtime);
  }

  async describeSecurityEventOperationStatusWithOptions(request: DescribeSecurityEventOperationStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityEventOperationStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityEventId)) {
      query["SecurityEventId"] = request.securityEventId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityEventOperationStatus",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityEventOperationStatusResponse>(await this.callApi(params, req, runtime), new DescribeSecurityEventOperationStatusResponse({}));
  }

  async describeSecurityEventOperationStatus(request: DescribeSecurityEventOperationStatusRequest): Promise<DescribeSecurityEventOperationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityEventOperationStatusWithOptions(request, runtime);
  }

  async describeSecurityEventOperationsWithOptions(request: DescribeSecurityEventOperationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityEventOperationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityEventId)) {
      query["SecurityEventId"] = request.securityEventId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecurityEventOperations",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSecurityEventOperationsResponse>(await this.callApi(params, req, runtime), new DescribeSecurityEventOperationsResponse({}));
  }

  async describeSecurityEventOperations(request: DescribeSecurityEventOperationsRequest): Promise<DescribeSecurityEventOperationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityEventOperationsWithOptions(request, runtime);
  }

  async describeSnapshotsWithOptions(request: DescribeSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnapshotsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSnapshots",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSnapshotsResponse>(await this.callApi(params, req, runtime), new DescribeSnapshotsResponse({}));
  }

  async describeSnapshots(request: DescribeSnapshotsRequest): Promise<DescribeSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnapshotsWithOptions(request, runtime);
  }

  async describeSuspEventOverviewWithOptions(request: DescribeSuspEventOverviewRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSuspEventOverviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSuspEventOverview",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSuspEventOverviewResponse>(await this.callApi(params, req, runtime), new DescribeSuspEventOverviewResponse({}));
  }

  async describeSuspEventOverview(request: DescribeSuspEventOverviewRequest): Promise<DescribeSuspEventOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSuspEventOverviewWithOptions(request, runtime);
  }

  async describeSuspEventQuaraFilesWithOptions(request: DescribeSuspEventQuaraFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSuspEventQuaraFilesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSuspEventQuaraFiles",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSuspEventQuaraFilesResponse>(await this.callApi(params, req, runtime), new DescribeSuspEventQuaraFilesResponse({}));
  }

  async describeSuspEventQuaraFiles(request: DescribeSuspEventQuaraFilesRequest): Promise<DescribeSuspEventQuaraFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSuspEventQuaraFilesWithOptions(request, runtime);
  }

  async describeSuspEventsWithOptions(request: DescribeSuspEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSuspEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.alarmUniqueInfo)) {
      query["AlarmUniqueInfo"] = request.alarmUniqueInfo;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dealed)) {
      query["Dealed"] = request.dealed;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.levels)) {
      query["Levels"] = request.levels;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.parentEventType)) {
      query["ParentEventType"] = request.parentEventType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSuspEvents",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSuspEventsResponse>(await this.callApi(params, req, runtime), new DescribeSuspEventsResponse({}));
  }

  async describeSuspEvents(request: DescribeSuspEventsRequest): Promise<DescribeSuspEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSuspEventsWithOptions(request, runtime);
  }

  async describeUserConnectionRecordsWithOptions(request: DescribeUserConnectionRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserConnectionRecordsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectDurationFrom)) {
      query["ConnectDurationFrom"] = request.connectDurationFrom;
    }

    if (!Util.isUnset(request.connectDurationTo)) {
      query["ConnectDurationTo"] = request.connectDurationTo;
    }

    if (!Util.isUnset(request.connectEndTimeFrom)) {
      query["ConnectEndTimeFrom"] = request.connectEndTimeFrom;
    }

    if (!Util.isUnset(request.connectEndTimeTo)) {
      query["ConnectEndTimeTo"] = request.connectEndTimeTo;
    }

    if (!Util.isUnset(request.connectStartTimeFrom)) {
      query["ConnectStartTimeFrom"] = request.connectStartTimeFrom;
    }

    if (!Util.isUnset(request.connectStartTimeTo)) {
      query["ConnectStartTimeTo"] = request.connectStartTimeTo;
    }

    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.endUserType)) {
      query["EndUserType"] = request.endUserType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUserConnectionRecords",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUserConnectionRecordsResponse>(await this.callApi(params, req, runtime), new DescribeUserConnectionRecordsResponse({}));
  }

  async describeUserConnectionRecords(request: DescribeUserConnectionRecordsRequest): Promise<DescribeUserConnectionRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserConnectionRecordsWithOptions(request, runtime);
  }

  async describeUsersInGroupWithOptions(request: DescribeUsersInGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUsersInGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.connectState)) {
      query["ConnectState"] = request.connectState;
    }

    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.queryUserDetail)) {
      query["QueryUserDetail"] = request.queryUserDetail;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeUsersInGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeUsersInGroupResponse>(await this.callApi(params, req, runtime), new DescribeUsersInGroupResponse({}));
  }

  async describeUsersInGroup(request: DescribeUsersInGroupRequest): Promise<DescribeUsersInGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsersInGroupWithOptions(request, runtime);
  }

  async describeVirtualMFADevicesWithOptions(request: DescribeVirtualMFADevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVirtualMFADevicesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVirtualMFADevices",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVirtualMFADevicesResponse>(await this.callApi(params, req, runtime), new DescribeVirtualMFADevicesResponse({}));
  }

  async describeVirtualMFADevices(request: DescribeVirtualMFADevicesRequest): Promise<DescribeVirtualMFADevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVirtualMFADevicesWithOptions(request, runtime);
  }

  async describeVulDetailsWithOptions(request: DescribeVulDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulDetailsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVulDetails",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVulDetailsResponse>(await this.callApi(params, req, runtime), new DescribeVulDetailsResponse({}));
  }

  async describeVulDetails(request: DescribeVulDetailsRequest): Promise<DescribeVulDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulDetailsWithOptions(request, runtime);
  }

  async describeVulListWithOptions(request: DescribeVulListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.dealed)) {
      query["Dealed"] = request.dealed;
    }

    if (!Util.isUnset(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!Util.isUnset(request.necessity)) {
      query["Necessity"] = request.necessity;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVulList",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVulListResponse>(await this.callApi(params, req, runtime), new DescribeVulListResponse({}));
  }

  async describeVulList(request: DescribeVulListRequest): Promise<DescribeVulListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulListWithOptions(request, runtime);
  }

  async describeVulOverviewWithOptions(request: DescribeVulOverviewRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulOverviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeVulOverview",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeVulOverviewResponse>(await this.callApi(params, req, runtime), new DescribeVulOverviewResponse({}));
  }

  async describeVulOverview(request: DescribeVulOverviewRequest): Promise<DescribeVulOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulOverviewWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneType)) {
      query["ZoneType"] = request.zoneType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZones",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeZonesResponse>(await this.callApi(params, req, runtime), new DescribeZonesResponse({}));
  }

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async detachCenWithOptions(request: DetachCenRequest, runtime: $Util.RuntimeOptions): Promise<DetachCenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachCen",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachCenResponse>(await this.callApi(params, req, runtime), new DetachCenResponse({}));
  }

  async detachCen(request: DetachCenRequest): Promise<DetachCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachCenWithOptions(request, runtime);
  }

  async disableDesktopsInGroupWithOptions(request: DisableDesktopsInGroupRequest, runtime: $Util.RuntimeOptions): Promise<DisableDesktopsInGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopIds)) {
      query["DesktopIds"] = request.desktopIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableDesktopsInGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableDesktopsInGroupResponse>(await this.callApi(params, req, runtime), new DisableDesktopsInGroupResponse({}));
  }

  async disableDesktopsInGroup(request: DisableDesktopsInGroupRequest): Promise<DisableDesktopsInGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableDesktopsInGroupWithOptions(request, runtime);
  }

  async dissociateNetworkPackageWithOptions(request: DissociateNetworkPackageRequest, runtime: $Util.RuntimeOptions): Promise<DissociateNetworkPackageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DissociateNetworkPackage",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DissociateNetworkPackageResponse>(await this.callApi(params, req, runtime), new DissociateNetworkPackageResponse({}));
  }

  async dissociateNetworkPackage(request: DissociateNetworkPackageRequest): Promise<DissociateNetworkPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dissociateNetworkPackageWithOptions(request, runtime);
  }

  async exportClientEventsWithOptions(request: ExportClientEventsRequest, runtime: $Util.RuntimeOptions): Promise<ExportClientEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportClientEvents",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportClientEventsResponse>(await this.callApi(params, req, runtime), new ExportClientEventsResponse({}));
  }

  async exportClientEvents(request: ExportClientEventsRequest): Promise<ExportClientEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportClientEventsWithOptions(request, runtime);
  }

  async exportDesktopGroupInfoWithOptions(request: ExportDesktopGroupInfoRequest, runtime: $Util.RuntimeOptions): Promise<ExportDesktopGroupInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopGroupName)) {
      query["DesktopGroupName"] = request.desktopGroupName;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!Util.isUnset(request.langType)) {
      query["LangType"] = request.langType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportDesktopGroupInfo",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportDesktopGroupInfoResponse>(await this.callApi(params, req, runtime), new ExportDesktopGroupInfoResponse({}));
  }

  async exportDesktopGroupInfo(request: ExportDesktopGroupInfoRequest): Promise<ExportDesktopGroupInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportDesktopGroupInfoWithOptions(request, runtime);
  }

  async exportDesktopListInfoWithOptions(request: ExportDesktopListInfoRequest, runtime: $Util.RuntimeOptions): Promise<ExportDesktopListInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopName)) {
      query["DesktopName"] = request.desktopName;
    }

    if (!Util.isUnset(request.desktopStatus)) {
      query["DesktopStatus"] = request.desktopStatus;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.langType)) {
      query["LangType"] = request.langType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportDesktopListInfo",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportDesktopListInfoResponse>(await this.callApi(params, req, runtime), new ExportDesktopListInfoResponse({}));
  }

  async exportDesktopListInfo(request: ExportDesktopListInfoRequest): Promise<ExportDesktopListInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportDesktopListInfoWithOptions(request, runtime);
  }

  async getConnectionTicketWithOptions(request: GetConnectionTicketRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectionTicketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetConnectionTicket",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConnectionTicketResponse>(await this.callApi(params, req, runtime), new GetConnectionTicketResponse({}));
  }

  async getConnectionTicket(request: GetConnectionTicketRequest): Promise<GetConnectionTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  async getDesktopGroupDetailWithOptions(request: GetDesktopGroupDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetDesktopGroupDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDesktopGroupDetail",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDesktopGroupDetailResponse>(await this.callApi(params, req, runtime), new GetDesktopGroupDetailResponse({}));
  }

  async getDesktopGroupDetail(request: GetDesktopGroupDetailRequest): Promise<GetDesktopGroupDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDesktopGroupDetailWithOptions(request, runtime);
  }

  async getOfficeSiteSsoStatusWithOptions(request: GetOfficeSiteSsoStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetOfficeSiteSsoStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOfficeSiteSsoStatus",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOfficeSiteSsoStatusResponse>(await this.callApi(params, req, runtime), new GetOfficeSiteSsoStatusResponse({}));
  }

  async getOfficeSiteSsoStatus(request: GetOfficeSiteSsoStatusRequest): Promise<GetOfficeSiteSsoStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOfficeSiteSsoStatusWithOptions(request, runtime);
  }

  async getSpMetadataWithOptions(request: GetSpMetadataRequest, runtime: $Util.RuntimeOptions): Promise<GetSpMetadataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSpMetadata",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSpMetadataResponse>(await this.callApi(params, req, runtime), new GetSpMetadataResponse({}));
  }

  async getSpMetadata(request: GetSpMetadataRequest): Promise<GetSpMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSpMetadataWithOptions(request, runtime);
  }

  async handleSecurityEventsWithOptions(request: HandleSecurityEventsRequest, runtime: $Util.RuntimeOptions): Promise<HandleSecurityEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operationCode)) {
      query["OperationCode"] = request.operationCode;
    }

    if (!Util.isUnset(request.operationParams)) {
      query["OperationParams"] = request.operationParams;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityEvent)) {
      query["SecurityEvent"] = request.securityEvent;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "HandleSecurityEvents",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<HandleSecurityEventsResponse>(await this.callApi(params, req, runtime), new HandleSecurityEventsResponse({}));
  }

  async handleSecurityEvents(request: HandleSecurityEventsRequest): Promise<HandleSecurityEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.handleSecurityEventsWithOptions(request, runtime);
  }

  async listDirectoryUsersWithOptions(request: ListDirectoryUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListDirectoryUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.OUPath)) {
      query["OUPath"] = request.OUPath;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDirectoryUsers",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDirectoryUsersResponse>(await this.callApi(params, req, runtime), new ListDirectoryUsersResponse({}));
  }

  async listDirectoryUsers(request: ListDirectoryUsersRequest): Promise<ListDirectoryUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDirectoryUsersWithOptions(request, runtime);
  }

  async listOfficeSiteOverviewWithOptions(request: ListOfficeSiteOverviewRequest, runtime: $Util.RuntimeOptions): Promise<ListOfficeSiteOverviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.forceRefresh)) {
      query["ForceRefresh"] = request.forceRefresh;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.queryRange)) {
      query["QueryRange"] = request.queryRange;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOfficeSiteOverview",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOfficeSiteOverviewResponse>(await this.callApi(params, req, runtime), new ListOfficeSiteOverviewResponse({}));
  }

  async listOfficeSiteOverview(request: ListOfficeSiteOverviewRequest): Promise<ListOfficeSiteOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOfficeSiteOverviewWithOptions(request, runtime);
  }

  async listOfficeSiteUsersWithOptions(request: ListOfficeSiteUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListOfficeSiteUsersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.OUPath)) {
      query["OUPath"] = request.OUPath;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOfficeSiteUsers",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOfficeSiteUsersResponse>(await this.callApi(params, req, runtime), new ListOfficeSiteUsersResponse({}));
  }

  async listOfficeSiteUsers(request: ListOfficeSiteUsersRequest): Promise<ListOfficeSiteUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOfficeSiteUsersWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listUserAdOrganizationUnitsWithOptions(request: ListUserAdOrganizationUnitsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserAdOrganizationUnitsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserAdOrganizationUnits",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserAdOrganizationUnitsResponse>(await this.callApi(params, req, runtime), new ListUserAdOrganizationUnitsResponse({}));
  }

  async listUserAdOrganizationUnits(request: ListUserAdOrganizationUnitsRequest): Promise<ListUserAdOrganizationUnitsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserAdOrganizationUnitsWithOptions(request, runtime);
  }

  async lockVirtualMFADeviceWithOptions(request: LockVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<LockVirtualMFADeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "LockVirtualMFADevice",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LockVirtualMFADeviceResponse>(await this.callApi(params, req, runtime), new LockVirtualMFADeviceResponse({}));
  }

  async lockVirtualMFADevice(request: LockVirtualMFADeviceRequest): Promise<LockVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockVirtualMFADeviceWithOptions(request, runtime);
  }

  async modifyADConnectorDirectoryWithOptions(request: ModifyADConnectorDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyADConnectorDirectoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adHostname)) {
      query["AdHostname"] = request.adHostname;
    }

    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.directoryName)) {
      query["DirectoryName"] = request.directoryName;
    }

    if (!Util.isUnset(request.dnsAddress)) {
      query["DnsAddress"] = request.dnsAddress;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainPassword)) {
      query["DomainPassword"] = request.domainPassword;
    }

    if (!Util.isUnset(request.domainUserName)) {
      query["DomainUserName"] = request.domainUserName;
    }

    if (!Util.isUnset(request.mfaEnabled)) {
      query["MfaEnabled"] = request.mfaEnabled;
    }

    if (!Util.isUnset(request.OUName)) {
      query["OUName"] = request.OUName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.subDomainDnsAddress)) {
      query["SubDomainDnsAddress"] = request.subDomainDnsAddress;
    }

    if (!Util.isUnset(request.subDomainName)) {
      query["SubDomainName"] = request.subDomainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyADConnectorDirectory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyADConnectorDirectoryResponse>(await this.callApi(params, req, runtime), new ModifyADConnectorDirectoryResponse({}));
  }

  async modifyADConnectorDirectory(request: ModifyADConnectorDirectoryRequest): Promise<ModifyADConnectorDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyADConnectorDirectoryWithOptions(request, runtime);
  }

  async modifyADConnectorOfficeSiteWithOptions(request: ModifyADConnectorOfficeSiteRequest, runtime: $Util.RuntimeOptions): Promise<ModifyADConnectorOfficeSiteResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.adHostname)) {
      query["AdHostname"] = request.adHostname;
    }

    if (!Util.isUnset(request.dnsAddress)) {
      query["DnsAddress"] = request.dnsAddress;
    }

    if (!Util.isUnset(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!Util.isUnset(request.domainPassword)) {
      query["DomainPassword"] = request.domainPassword;
    }

    if (!Util.isUnset(request.domainUserName)) {
      query["DomainUserName"] = request.domainUserName;
    }

    if (!Util.isUnset(request.mfaEnabled)) {
      query["MfaEnabled"] = request.mfaEnabled;
    }

    if (!Util.isUnset(request.OUName)) {
      query["OUName"] = request.OUName;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.subDomainDnsAddress)) {
      query["SubDomainDnsAddress"] = request.subDomainDnsAddress;
    }

    if (!Util.isUnset(request.subDomainName)) {
      query["SubDomainName"] = request.subDomainName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyADConnectorOfficeSite",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyADConnectorOfficeSiteResponse>(await this.callApi(params, req, runtime), new ModifyADConnectorOfficeSiteResponse({}));
  }

  async modifyADConnectorOfficeSite(request: ModifyADConnectorOfficeSiteRequest): Promise<ModifyADConnectorOfficeSiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyADConnectorOfficeSiteWithOptions(request, runtime);
  }

  async modifyBundleWithOptions(request: ModifyBundleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBundleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bundleId)) {
      query["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.bundleName)) {
      query["BundleName"] = request.bundleName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.language)) {
      query["Language"] = request.language;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBundle",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBundleResponse>(await this.callApi(params, req, runtime), new ModifyBundleResponse({}));
  }

  async modifyBundle(request: ModifyBundleRequest): Promise<ModifyBundleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBundleWithOptions(request, runtime);
  }

  async modifyDesktopChargeTypeWithOptions(request: ModifyDesktopChargeTypeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopChargeTypeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDesktopChargeType",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDesktopChargeTypeResponse>(await this.callApi(params, req, runtime), new ModifyDesktopChargeTypeResponse({}));
  }

  async modifyDesktopChargeType(request: ModifyDesktopChargeTypeRequest): Promise<ModifyDesktopChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopChargeTypeWithOptions(request, runtime);
  }

  async modifyDesktopGroupWithOptions(request: ModifyDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.allowAutoSetup)) {
      query["AllowAutoSetup"] = request.allowAutoSetup;
    }

    if (!Util.isUnset(request.allowBufferCount)) {
      query["AllowBufferCount"] = request.allowBufferCount;
    }

    if (!Util.isUnset(request.bindAmount)) {
      query["BindAmount"] = request.bindAmount;
    }

    if (!Util.isUnset(request.classify)) {
      query["Classify"] = request.classify;
    }

    if (!Util.isUnset(request.comments)) {
      query["Comments"] = request.comments;
    }

    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopGroupName)) {
      query["DesktopGroupName"] = request.desktopGroupName;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.keepDuration)) {
      query["KeepDuration"] = request.keepDuration;
    }

    if (!Util.isUnset(request.loadPolicy)) {
      query["LoadPolicy"] = request.loadPolicy;
    }

    if (!Util.isUnset(request.maxDesktopsCount)) {
      query["MaxDesktopsCount"] = request.maxDesktopsCount;
    }

    if (!Util.isUnset(request.minDesktopsCount)) {
      query["MinDesktopsCount"] = request.minDesktopsCount;
    }

    if (!Util.isUnset(request.ownBundleId)) {
      query["OwnBundleId"] = request.ownBundleId;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resetType)) {
      query["ResetType"] = request.resetType;
    }

    if (!Util.isUnset(request.scaleStrategyId)) {
      query["ScaleStrategyId"] = request.scaleStrategyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDesktopGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDesktopGroupResponse>(await this.callApi(params, req, runtime), new ModifyDesktopGroupResponse({}));
  }

  async modifyDesktopGroup(request: ModifyDesktopGroupRequest): Promise<ModifyDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopGroupWithOptions(request, runtime);
  }

  async modifyDesktopHostNameWithOptions(request: ModifyDesktopHostNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopHostNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.newHostName)) {
      query["NewHostName"] = request.newHostName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDesktopHostName",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDesktopHostNameResponse>(await this.callApi(params, req, runtime), new ModifyDesktopHostNameResponse({}));
  }

  async modifyDesktopHostName(request: ModifyDesktopHostNameRequest): Promise<ModifyDesktopHostNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopHostNameWithOptions(request, runtime);
  }

  async modifyDesktopNameWithOptions(request: ModifyDesktopNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopNameResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.newDesktopName)) {
      query["NewDesktopName"] = request.newDesktopName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDesktopName",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDesktopNameResponse>(await this.callApi(params, req, runtime), new ModifyDesktopNameResponse({}));
  }

  async modifyDesktopName(request: ModifyDesktopNameRequest): Promise<ModifyDesktopNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopNameWithOptions(request, runtime);
  }

  async modifyDesktopSpecWithOptions(request: ModifyDesktopSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.desktopType)) {
      query["DesktopType"] = request.desktopType;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rootDiskSizeGib)) {
      query["RootDiskSizeGib"] = request.rootDiskSizeGib;
    }

    if (!Util.isUnset(request.userDiskPerformanceLevel)) {
      query["UserDiskPerformanceLevel"] = request.userDiskPerformanceLevel;
    }

    if (!Util.isUnset(request.userDiskSizeGib)) {
      query["UserDiskSizeGib"] = request.userDiskSizeGib;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDesktopSpec",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDesktopSpecResponse>(await this.callApi(params, req, runtime), new ModifyDesktopSpecResponse({}));
  }

  async modifyDesktopSpec(request: ModifyDesktopSpecRequest): Promise<ModifyDesktopSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopSpecWithOptions(request, runtime);
  }

  async modifyDesktopsPolicyGroupWithOptions(request: ModifyDesktopsPolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopsPolicyGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDesktopsPolicyGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDesktopsPolicyGroupResponse>(await this.callApi(params, req, runtime), new ModifyDesktopsPolicyGroupResponse({}));
  }

  async modifyDesktopsPolicyGroup(request: ModifyDesktopsPolicyGroupRequest): Promise<ModifyDesktopsPolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopsPolicyGroupWithOptions(request, runtime);
  }

  async modifyDiskSpecWithOptions(request: ModifyDiskSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDiskSpecResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.rootDiskPerformanceLevel)) {
      query["RootDiskPerformanceLevel"] = request.rootDiskPerformanceLevel;
    }

    if (!Util.isUnset(request.userDiskPerformanceLevel)) {
      query["UserDiskPerformanceLevel"] = request.userDiskPerformanceLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDiskSpec",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDiskSpecResponse>(await this.callApi(params, req, runtime), new ModifyDiskSpecResponse({}));
  }

  async modifyDiskSpec(request: ModifyDiskSpecRequest): Promise<ModifyDiskSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDiskSpecWithOptions(request, runtime);
  }

  async modifyEntitlementWithOptions(request: ModifyEntitlementRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEntitlementResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyEntitlement",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyEntitlementResponse>(await this.callApi(params, req, runtime), new ModifyEntitlementResponse({}));
  }

  async modifyEntitlement(request: ModifyEntitlementRequest): Promise<ModifyEntitlementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEntitlementWithOptions(request, runtime);
  }

  async modifyImageAttributeWithOptions(request: ModifyImageAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyImageAttribute",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyImageAttributeResponse>(await this.callApi(params, req, runtime), new ModifyImageAttributeResponse({}));
  }

  async modifyImageAttribute(request: ModifyImageAttributeRequest): Promise<ModifyImageAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageAttributeWithOptions(request, runtime);
  }

  async modifyImagePermissionWithOptions(request: ModifyImagePermissionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImagePermissionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addAccount)) {
      query["AddAccount"] = request.addAccount;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.removeAccount)) {
      query["RemoveAccount"] = request.removeAccount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyImagePermission",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyImagePermissionResponse>(await this.callApi(params, req, runtime), new ModifyImagePermissionResponse({}));
  }

  async modifyImagePermission(request: ModifyImagePermissionRequest): Promise<ModifyImagePermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImagePermissionWithOptions(request, runtime);
  }

  async modifyNASDefaultMountTargetWithOptions(request: ModifyNASDefaultMountTargetRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNASDefaultMountTargetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.mountTargetDomain)) {
      query["MountTargetDomain"] = request.mountTargetDomain;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyNASDefaultMountTarget",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyNASDefaultMountTargetResponse>(await this.callApi(params, req, runtime), new ModifyNASDefaultMountTargetResponse({}));
  }

  async modifyNASDefaultMountTarget(request: ModifyNASDefaultMountTargetRequest): Promise<ModifyNASDefaultMountTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNASDefaultMountTargetWithOptions(request, runtime);
  }

  async modifyNetworkPackageBandwidthWithOptions(request: ModifyNetworkPackageBandwidthRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNetworkPackageBandwidthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyNetworkPackageBandwidth",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyNetworkPackageBandwidthResponse>(await this.callApi(params, req, runtime), new ModifyNetworkPackageBandwidthResponse({}));
  }

  async modifyNetworkPackageBandwidth(request: ModifyNetworkPackageBandwidthRequest): Promise<ModifyNetworkPackageBandwidthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNetworkPackageBandwidthWithOptions(request, runtime);
  }

  async modifyNetworkPackageEnabledWithOptions(request: ModifyNetworkPackageEnabledRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNetworkPackageEnabledResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!Util.isUnset(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyNetworkPackageEnabled",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyNetworkPackageEnabledResponse>(await this.callApi(params, req, runtime), new ModifyNetworkPackageEnabledResponse({}));
  }

  async modifyNetworkPackageEnabled(request: ModifyNetworkPackageEnabledRequest): Promise<ModifyNetworkPackageEnabledResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNetworkPackageEnabledWithOptions(request, runtime);
  }

  async modifyOfficeSiteAttributeWithOptions(request: ModifyOfficeSiteAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOfficeSiteAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopAccessType)) {
      query["DesktopAccessType"] = request.desktopAccessType;
    }

    if (!Util.isUnset(request.needVerifyLoginRisk)) {
      query["NeedVerifyLoginRisk"] = request.needVerifyLoginRisk;
    }

    if (!Util.isUnset(request.needVerifyZeroDevice)) {
      query["NeedVerifyZeroDevice"] = request.needVerifyZeroDevice;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.officeSiteName)) {
      query["OfficeSiteName"] = request.officeSiteName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyOfficeSiteAttribute",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyOfficeSiteAttributeResponse>(await this.callApi(params, req, runtime), new ModifyOfficeSiteAttributeResponse({}));
  }

  async modifyOfficeSiteAttribute(request: ModifyOfficeSiteAttributeRequest): Promise<ModifyOfficeSiteAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOfficeSiteAttributeWithOptions(request, runtime);
  }

  async modifyOfficeSiteCrossDesktopAccessWithOptions(request: ModifyOfficeSiteCrossDesktopAccessRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOfficeSiteCrossDesktopAccessResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enableCrossDesktopAccess)) {
      query["EnableCrossDesktopAccess"] = request.enableCrossDesktopAccess;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyOfficeSiteCrossDesktopAccess",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyOfficeSiteCrossDesktopAccessResponse>(await this.callApi(params, req, runtime), new ModifyOfficeSiteCrossDesktopAccessResponse({}));
  }

  async modifyOfficeSiteCrossDesktopAccess(request: ModifyOfficeSiteCrossDesktopAccessRequest): Promise<ModifyOfficeSiteCrossDesktopAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOfficeSiteCrossDesktopAccessWithOptions(request, runtime);
  }

  async modifyOfficeSiteMfaEnabledWithOptions(request: ModifyOfficeSiteMfaEnabledRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOfficeSiteMfaEnabledResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.mfaEnabled)) {
      query["MfaEnabled"] = request.mfaEnabled;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyOfficeSiteMfaEnabled",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyOfficeSiteMfaEnabledResponse>(await this.callApi(params, req, runtime), new ModifyOfficeSiteMfaEnabledResponse({}));
  }

  async modifyOfficeSiteMfaEnabled(request: ModifyOfficeSiteMfaEnabledRequest): Promise<ModifyOfficeSiteMfaEnabledResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOfficeSiteMfaEnabledWithOptions(request, runtime);
  }

  async modifyOperateVulWithOptions(request: ModifyOperateVulRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOperateVulResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.vulInfo)) {
      query["VulInfo"] = request.vulInfo;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyOperateVul",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyOperateVulResponse>(await this.callApi(params, req, runtime), new ModifyOperateVulResponse({}));
  }

  async modifyOperateVul(request: ModifyOperateVulRequest): Promise<ModifyOperateVulResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOperateVulWithOptions(request, runtime);
  }

  async modifyPolicyGroupWithOptions(request: ModifyPolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPolicyGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizeAccessPolicyRule)) {
      query["AuthorizeAccessPolicyRule"] = request.authorizeAccessPolicyRule;
    }

    if (!Util.isUnset(request.authorizeSecurityPolicyRule)) {
      query["AuthorizeSecurityPolicyRule"] = request.authorizeSecurityPolicyRule;
    }

    if (!Util.isUnset(request.cameraRedirect)) {
      query["CameraRedirect"] = request.cameraRedirect;
    }

    if (!Util.isUnset(request.clientType)) {
      query["ClientType"] = request.clientType;
    }

    if (!Util.isUnset(request.clipboard)) {
      query["Clipboard"] = request.clipboard;
    }

    if (!Util.isUnset(request.domainList)) {
      query["DomainList"] = request.domainList;
    }

    if (!Util.isUnset(request.gpuAcceleration)) {
      query["GpuAcceleration"] = request.gpuAcceleration;
    }

    if (!Util.isUnset(request.html5Access)) {
      query["Html5Access"] = request.html5Access;
    }

    if (!Util.isUnset(request.html5FileTransfer)) {
      query["Html5FileTransfer"] = request.html5FileTransfer;
    }

    if (!Util.isUnset(request.localDrive)) {
      query["LocalDrive"] = request.localDrive;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.netRedirect)) {
      query["NetRedirect"] = request.netRedirect;
    }

    if (!Util.isUnset(request.policyGroupId)) {
      query["PolicyGroupId"] = request.policyGroupId;
    }

    if (!Util.isUnset(request.preemptLogin)) {
      query["PreemptLogin"] = request.preemptLogin;
    }

    if (!Util.isUnset(request.preemptLoginUser)) {
      query["PreemptLoginUser"] = request.preemptLoginUser;
    }

    if (!Util.isUnset(request.printerRedirection)) {
      query["PrinterRedirection"] = request.printerRedirection;
    }

    if (!Util.isUnset(request.recording)) {
      query["Recording"] = request.recording;
    }

    if (!Util.isUnset(request.recordingEndTime)) {
      query["RecordingEndTime"] = request.recordingEndTime;
    }

    if (!Util.isUnset(request.recordingFps)) {
      query["RecordingFps"] = request.recordingFps;
    }

    if (!Util.isUnset(request.recordingStartTime)) {
      query["RecordingStartTime"] = request.recordingStartTime;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.revokeAccessPolicyRule)) {
      query["RevokeAccessPolicyRule"] = request.revokeAccessPolicyRule;
    }

    if (!Util.isUnset(request.revokeSecurityPolicyRule)) {
      query["RevokeSecurityPolicyRule"] = request.revokeSecurityPolicyRule;
    }

    if (!Util.isUnset(request.usbRedirect)) {
      query["UsbRedirect"] = request.usbRedirect;
    }

    if (!Util.isUnset(request.usbSupplyRedirectRule)) {
      query["UsbSupplyRedirectRule"] = request.usbSupplyRedirectRule;
    }

    if (!Util.isUnset(request.visualQuality)) {
      query["VisualQuality"] = request.visualQuality;
    }

    if (!Util.isUnset(request.watermark)) {
      query["Watermark"] = request.watermark;
    }

    if (!Util.isUnset(request.watermarkTransparency)) {
      query["WatermarkTransparency"] = request.watermarkTransparency;
    }

    if (!Util.isUnset(request.watermarkType)) {
      query["WatermarkType"] = request.watermarkType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyPolicyGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyPolicyGroupResponse>(await this.callApi(params, req, runtime), new ModifyPolicyGroupResponse({}));
  }

  async modifyPolicyGroup(request: ModifyPolicyGroupRequest): Promise<ModifyPolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolicyGroupWithOptions(request, runtime);
  }

  async modifyUserEntitlementWithOptions(request: ModifyUserEntitlementRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserEntitlementResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authorizeDesktopId)) {
      query["AuthorizeDesktopId"] = request.authorizeDesktopId;
    }

    if (!Util.isUnset(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.revokeDesktopId)) {
      query["RevokeDesktopId"] = request.revokeDesktopId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyUserEntitlement",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyUserEntitlementResponse>(await this.callApi(params, req, runtime), new ModifyUserEntitlementResponse({}));
  }

  async modifyUserEntitlement(request: ModifyUserEntitlementRequest): Promise<ModifyUserEntitlementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserEntitlementWithOptions(request, runtime);
  }

  async modifyUserToDesktopGroupWithOptions(request: ModifyUserToDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserToDesktopGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.newEndUserIds)) {
      query["NewEndUserIds"] = request.newEndUserIds;
    }

    if (!Util.isUnset(request.oldEndUserIds)) {
      query["OldEndUserIds"] = request.oldEndUserIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyUserToDesktopGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyUserToDesktopGroupResponse>(await this.callApi(params, req, runtime), new ModifyUserToDesktopGroupResponse({}));
  }

  async modifyUserToDesktopGroup(request: ModifyUserToDesktopGroupRequest): Promise<ModifyUserToDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserToDesktopGroupWithOptions(request, runtime);
  }

  async operateVulsWithOptions(request: OperateVulsRequest, runtime: $Util.RuntimeOptions): Promise<OperateVulsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!Util.isUnset(request.precondition)) {
      query["Precondition"] = request.precondition;
    }

    if (!Util.isUnset(request.reason)) {
      query["Reason"] = request.reason;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.vulName)) {
      query["VulName"] = request.vulName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateVuls",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OperateVulsResponse>(await this.callApi(params, req, runtime), new OperateVulsResponse({}));
  }

  async operateVuls(request: OperateVulsRequest): Promise<OperateVulsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateVulsWithOptions(request, runtime);
  }

  async rebootDesktopsWithOptions(request: RebootDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<RebootDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RebootDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RebootDesktopsResponse>(await this.callApi(params, req, runtime), new RebootDesktopsResponse({}));
  }

  async rebootDesktops(request: RebootDesktopsRequest): Promise<RebootDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootDesktopsWithOptions(request, runtime);
  }

  async rebuildDesktopsWithOptions(request: RebuildDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<RebuildDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RebuildDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RebuildDesktopsResponse>(await this.callApi(params, req, runtime), new RebuildDesktopsResponse({}));
  }

  async rebuildDesktops(request: RebuildDesktopsRequest): Promise<RebuildDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebuildDesktopsWithOptions(request, runtime);
  }

  async removeUserFromDesktopGroupWithOptions(request: RemoveUserFromDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserFromDesktopGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopGroupIds)) {
      query["DesktopGroupIds"] = request.desktopGroupIds;
    }

    if (!Util.isUnset(request.endUserIds)) {
      query["EndUserIds"] = request.endUserIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveUserFromDesktopGroup",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveUserFromDesktopGroupResponse>(await this.callApi(params, req, runtime), new RemoveUserFromDesktopGroupResponse({}));
  }

  async removeUserFromDesktopGroup(request: RemoveUserFromDesktopGroupRequest): Promise<RemoveUserFromDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromDesktopGroupWithOptions(request, runtime);
  }

  async renewDesktopsWithOptions(request: RenewDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<RenewDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewDesktopsResponse>(await this.callApi(params, req, runtime), new RenewDesktopsResponse({}));
  }

  async renewDesktops(request: RenewDesktopsRequest): Promise<RenewDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewDesktopsWithOptions(request, runtime);
  }

  async renewNetworkPackagesWithOptions(request: RenewNetworkPackagesRequest, runtime: $Util.RuntimeOptions): Promise<RenewNetworkPackagesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!Util.isUnset(request.networkPackageId)) {
      query["NetworkPackageId"] = request.networkPackageId;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.promotionId)) {
      query["PromotionId"] = request.promotionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenewNetworkPackages",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenewNetworkPackagesResponse>(await this.callApi(params, req, runtime), new RenewNetworkPackagesResponse({}));
  }

  async renewNetworkPackages(request: RenewNetworkPackagesRequest): Promise<RenewNetworkPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewNetworkPackagesWithOptions(request, runtime);
  }

  async resetDesktopsWithOptions(request: ResetDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<ResetDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopGroupId)) {
      query["DesktopGroupId"] = request.desktopGroupId;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resetType)) {
      query["ResetType"] = request.resetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetDesktopsResponse>(await this.callApi(params, req, runtime), new ResetDesktopsResponse({}));
  }

  async resetDesktops(request: ResetDesktopsRequest): Promise<ResetDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetDesktopsWithOptions(request, runtime);
  }

  async resetNASDefaultMountTargetWithOptions(request: ResetNASDefaultMountTargetRequest, runtime: $Util.RuntimeOptions): Promise<ResetNASDefaultMountTargetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetNASDefaultMountTarget",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetNASDefaultMountTargetResponse>(await this.callApi(params, req, runtime), new ResetNASDefaultMountTargetResponse({}));
  }

  async resetNASDefaultMountTarget(request: ResetNASDefaultMountTargetRequest): Promise<ResetNASDefaultMountTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetNASDefaultMountTargetWithOptions(request, runtime);
  }

  async resetSnapshotWithOptions(request: ResetSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<ResetSnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetSnapshot",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetSnapshotResponse>(await this.callApi(params, req, runtime), new ResetSnapshotResponse({}));
  }

  async resetSnapshot(request: ResetSnapshotRequest): Promise<ResetSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetSnapshotWithOptions(request, runtime);
  }

  async rollbackSuspEventQuaraFileWithOptions(request: RollbackSuspEventQuaraFileRequest, runtime: $Util.RuntimeOptions): Promise<RollbackSuspEventQuaraFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.quaraFieldId)) {
      query["QuaraFieldId"] = request.quaraFieldId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RollbackSuspEventQuaraFile",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RollbackSuspEventQuaraFileResponse>(await this.callApi(params, req, runtime), new RollbackSuspEventQuaraFileResponse({}));
  }

  async rollbackSuspEventQuaraFile(request: RollbackSuspEventQuaraFileRequest): Promise<RollbackSuspEventQuaraFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackSuspEventQuaraFileWithOptions(request, runtime);
  }

  async runCommandWithOptions(request: RunCommandRequest, runtime: $Util.RuntimeOptions): Promise<RunCommandResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.commandContent)) {
      query["CommandContent"] = request.commandContent;
    }

    if (!Util.isUnset(request.contentEncoding)) {
      query["ContentEncoding"] = request.contentEncoding;
    }

    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunCommand",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunCommandResponse>(await this.callApi(params, req, runtime), new RunCommandResponse({}));
  }

  async runCommand(request: RunCommandRequest): Promise<RunCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  async sendVerifyCodeWithOptions(request: SendVerifyCodeRequest, runtime: $Util.RuntimeOptions): Promise<SendVerifyCodeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.verifyCodeAction)) {
      query["VerifyCodeAction"] = request.verifyCodeAction;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SendVerifyCode",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SendVerifyCodeResponse>(await this.callApi(params, req, runtime), new SendVerifyCodeResponse({}));
  }

  async sendVerifyCode(request: SendVerifyCodeRequest): Promise<SendVerifyCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.sendVerifyCodeWithOptions(request, runtime);
  }

  async setIdpMetadataWithOptions(request: SetIdpMetadataRequest, runtime: $Util.RuntimeOptions): Promise<SetIdpMetadataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.directoryId)) {
      query["DirectoryId"] = request.directoryId;
    }

    if (!Util.isUnset(request.idpMetadata)) {
      query["IdpMetadata"] = request.idpMetadata;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetIdpMetadata",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetIdpMetadataResponse>(await this.callApi(params, req, runtime), new SetIdpMetadataResponse({}));
  }

  async setIdpMetadata(request: SetIdpMetadataRequest): Promise<SetIdpMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setIdpMetadataWithOptions(request, runtime);
  }

  async setOfficeSiteSsoStatusWithOptions(request: SetOfficeSiteSsoStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetOfficeSiteSsoStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enableSso)) {
      query["EnableSso"] = request.enableSso;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetOfficeSiteSsoStatus",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetOfficeSiteSsoStatusResponse>(await this.callApi(params, req, runtime), new SetOfficeSiteSsoStatusResponse({}));
  }

  async setOfficeSiteSsoStatus(request: SetOfficeSiteSsoStatusRequest): Promise<SetOfficeSiteSsoStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setOfficeSiteSsoStatusWithOptions(request, runtime);
  }

  async startDesktopsWithOptions(request: StartDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<StartDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartDesktopsResponse>(await this.callApi(params, req, runtime), new StartDesktopsResponse({}));
  }

  async startDesktops(request: StartDesktopsRequest): Promise<StartDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDesktopsWithOptions(request, runtime);
  }

  async startVirusScanTaskWithOptions(request: StartVirusScanTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartVirusScanTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.officeSiteId)) {
      query["OfficeSiteId"] = request.officeSiteId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartVirusScanTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartVirusScanTaskResponse>(await this.callApi(params, req, runtime), new StartVirusScanTaskResponse({}));
  }

  async startVirusScanTask(request: StartVirusScanTaskRequest): Promise<StartVirusScanTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startVirusScanTaskWithOptions(request, runtime);
  }

  async stopDesktopsWithOptions(request: StopDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<StopDesktopsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.stoppedMode)) {
      query["StoppedMode"] = request.stoppedMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopDesktops",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopDesktopsResponse>(await this.callApi(params, req, runtime), new StopDesktopsResponse({}));
  }

  async stopDesktops(request: StopDesktopsRequest): Promise<StopDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDesktopsWithOptions(request, runtime);
  }

  async stopInvocationWithOptions(request: StopInvocationRequest, runtime: $Util.RuntimeOptions): Promise<StopInvocationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.desktopId)) {
      query["DesktopId"] = request.desktopId;
    }

    if (!Util.isUnset(request.invokeId)) {
      query["InvokeId"] = request.invokeId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopInvocation",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopInvocationResponse>(await this.callApi(params, req, runtime), new StopInvocationResponse({}));
  }

  async stopInvocation(request: StopInvocationRequest): Promise<StopInvocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInvocationWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async unlockVirtualMFADeviceWithOptions(request: UnlockVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnlockVirtualMFADeviceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serialNumber)) {
      query["SerialNumber"] = request.serialNumber;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnlockVirtualMFADevice",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnlockVirtualMFADeviceResponse>(await this.callApi(params, req, runtime), new UnlockVirtualMFADeviceResponse({}));
  }

  async unlockVirtualMFADevice(request: UnlockVirtualMFADeviceRequest): Promise<UnlockVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockVirtualMFADeviceWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateFotaTaskWithOptions(request: UpdateFotaTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFotaTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskUid)) {
      query["TaskUid"] = request.taskUid;
    }

    if (!Util.isUnset(request.userStatus)) {
      query["UserStatus"] = request.userStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFotaTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFotaTaskResponse>(await this.callApi(params, req, runtime), new UpdateFotaTaskResponse({}));
  }

  async updateFotaTask(request: UpdateFotaTaskRequest): Promise<UpdateFotaTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFotaTaskWithOptions(request, runtime);
  }

  async uploadImageWithOptions(request: UploadImageRequest, runtime: $Util.RuntimeOptions): Promise<UploadImageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dataDiskSize)) {
      query["DataDiskSize"] = request.dataDiskSize;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.enableSecurityCheck)) {
      query["EnableSecurityCheck"] = request.enableSecurityCheck;
    }

    if (!Util.isUnset(request.gpuCategory)) {
      query["GpuCategory"] = request.gpuCategory;
    }

    if (!Util.isUnset(request.gpuDriverType)) {
      query["GpuDriverType"] = request.gpuDriverType;
    }

    if (!Util.isUnset(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.licenseType)) {
      query["LicenseType"] = request.licenseType;
    }

    if (!Util.isUnset(request.osType)) {
      query["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.ossObjectPath)) {
      query["OssObjectPath"] = request.ossObjectPath;
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
      action: "UploadImage",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadImageResponse>(await this.callApi(params, req, runtime), new UploadImageResponse({}));
  }

  async uploadImage(request: UploadImageRequest): Promise<UploadImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadImageWithOptions(request, runtime);
  }

  async verifyCenWithOptions(request: VerifyCenRequest, runtime: $Util.RuntimeOptions): Promise<VerifyCenResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.cenId)) {
      query["CenId"] = request.cenId;
    }

    if (!Util.isUnset(request.cenOwnerId)) {
      query["CenOwnerId"] = request.cenOwnerId;
    }

    if (!Util.isUnset(request.cidrBlock)) {
      query["CidrBlock"] = request.cidrBlock;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.verifyCode)) {
      query["VerifyCode"] = request.verifyCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "VerifyCen",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<VerifyCenResponse>(await this.callApi(params, req, runtime), new VerifyCenResponse({}));
  }

  async verifyCen(request: VerifyCenRequest): Promise<VerifyCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyCenWithOptions(request, runtime);
  }

}
