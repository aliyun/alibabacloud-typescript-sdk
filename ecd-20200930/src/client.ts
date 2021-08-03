// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddUserToDesktopGroupRequest extends $tea.Model {
  regionId?: string;
  desktopGroupId?: string;
  clientToken?: string;
  endUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopGroupId: 'DesktopGroupId',
      clientToken: 'ClientToken',
      endUserIds: 'EndUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopGroupId: 'string',
      clientToken: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
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
  body: AddUserToDesktopGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddUserToDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUserToSecurityCenterWhiteListRequest extends $tea.Model {
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

export class AddUserToSecurityCenterWhiteListResponseBody extends $tea.Model {
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

export class AddUserToSecurityCenterWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddUserToSecurityCenterWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddUserToSecurityCenterWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCenRequest extends $tea.Model {
  regionId?: string;
  cenId?: string;
  officeSiteId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      cenId: 'CenId',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      cenId: 'string',
      officeSiteId: 'string',
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
  body: AttachCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUserInSecurityCenterWhiteListRequest extends $tea.Model {
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

export class CheckUserInSecurityCenterWhiteListResponseBody extends $tea.Model {
  inWhiteList?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      inWhiteList: 'InWhiteList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inWhiteList: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUserInSecurityCenterWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CheckUserInSecurityCenterWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CheckUserInSecurityCenterWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClonePolicyGroupRequest extends $tea.Model {
  regionId?: string;
  policyGroupId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      policyGroupId: 'PolicyGroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      policyGroupId: 'string',
      name: 'string',
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
  body: ClonePolicyGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ClonePolicyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorDirectoryRequest extends $tea.Model {
  regionId?: string;
  domainName?: string;
  domainUserName?: string;
  domainPassword?: string;
  directoryName?: string;
  enableAdminAccess?: boolean;
  desktopAccessType?: string;
  subDomainName?: string;
  mfaEnabled?: boolean;
  dnsAddress?: string[];
  vSwitchId?: string[];
  subDomainDnsAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      domainName: 'DomainName',
      domainUserName: 'DomainUserName',
      domainPassword: 'DomainPassword',
      directoryName: 'DirectoryName',
      enableAdminAccess: 'EnableAdminAccess',
      desktopAccessType: 'DesktopAccessType',
      subDomainName: 'SubDomainName',
      mfaEnabled: 'MfaEnabled',
      dnsAddress: 'DnsAddress',
      vSwitchId: 'VSwitchId',
      subDomainDnsAddress: 'SubDomainDnsAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      domainName: 'string',
      domainUserName: 'string',
      domainPassword: 'string',
      directoryName: 'string',
      enableAdminAccess: 'boolean',
      desktopAccessType: 'string',
      subDomainName: 'string',
      mfaEnabled: 'boolean',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorDirectoryResponseBody extends $tea.Model {
  trustPassword?: string;
  requestId?: string;
  directoryId?: string;
  adConnectors?: CreateADConnectorDirectoryResponseBodyAdConnectors[];
  static names(): { [key: string]: string } {
    return {
      trustPassword: 'TrustPassword',
      requestId: 'RequestId',
      directoryId: 'DirectoryId',
      adConnectors: 'AdConnectors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trustPassword: 'string',
      requestId: 'string',
      directoryId: 'string',
      adConnectors: { 'type': 'array', 'itemType': CreateADConnectorDirectoryResponseBodyAdConnectors },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorDirectoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateADConnectorDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateADConnectorDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorOfficeSiteRequest extends $tea.Model {
  regionId?: string;
  cidrBlock?: string;
  cenId?: string;
  bandwidth?: number;
  domainName?: string;
  domainUserName?: string;
  domainPassword?: string;
  officeSiteName?: string;
  enableAdminAccess?: boolean;
  desktopAccessType?: string;
  enableInternetAccess?: boolean;
  subDomainName?: string;
  mfaEnabled?: boolean;
  dnsAddress?: string[];
  subDomainDnsAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      cidrBlock: 'CidrBlock',
      cenId: 'CenId',
      bandwidth: 'Bandwidth',
      domainName: 'DomainName',
      domainUserName: 'DomainUserName',
      domainPassword: 'DomainPassword',
      officeSiteName: 'OfficeSiteName',
      enableAdminAccess: 'EnableAdminAccess',
      desktopAccessType: 'DesktopAccessType',
      enableInternetAccess: 'EnableInternetAccess',
      subDomainName: 'SubDomainName',
      mfaEnabled: 'MfaEnabled',
      dnsAddress: 'DnsAddress',
      subDomainDnsAddress: 'SubDomainDnsAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      cidrBlock: 'string',
      cenId: 'string',
      bandwidth: 'number',
      domainName: 'string',
      domainUserName: 'string',
      domainPassword: 'string',
      officeSiteName: 'string',
      enableAdminAccess: 'boolean',
      desktopAccessType: 'string',
      enableInternetAccess: 'boolean',
      subDomainName: 'string',
      mfaEnabled: 'boolean',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorOfficeSiteResponseBody extends $tea.Model {
  requestId?: string;
  officeSiteId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      officeSiteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorOfficeSiteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateADConnectorOfficeSiteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateADConnectorOfficeSiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBundleRequest extends $tea.Model {
  regionId?: string;
  imageId?: string;
  desktopType?: string;
  rootDiskSizeGib?: number;
  bundleName?: string;
  description?: string;
  userDiskSizeGib?: number[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      imageId: 'ImageId',
      desktopType: 'DesktopType',
      rootDiskSizeGib: 'RootDiskSizeGib',
      bundleName: 'BundleName',
      description: 'Description',
      userDiskSizeGib: 'UserDiskSizeGib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      imageId: 'string',
      desktopType: 'string',
      rootDiskSizeGib: 'number',
      bundleName: 'string',
      description: 'string',
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
  body: CreateBundleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBundleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopGroupRequest extends $tea.Model {
  regionId?: string;
  bundleId?: string;
  officeSiteId?: string;
  policyGroupId?: string;
  desktopGroupName?: string;
  directoryId?: string;
  scaleStrategyId?: string;
  vpcId?: string;
  defaultInitDesktopCount?: number;
  keepDuration?: number;
  chargeType?: string;
  period?: number;
  periodUnit?: string;
  ownType?: number;
  autoPay?: boolean;
  comments?: string;
  minDesktopsCount?: number;
  maxDesktopsCount?: number;
  allowAutoSetup?: number;
  allowBufferCount?: number;
  clientToken?: string;
  endUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bundleId: 'BundleId',
      officeSiteId: 'OfficeSiteId',
      policyGroupId: 'PolicyGroupId',
      desktopGroupName: 'DesktopGroupName',
      directoryId: 'DirectoryId',
      scaleStrategyId: 'ScaleStrategyId',
      vpcId: 'VpcId',
      defaultInitDesktopCount: 'DefaultInitDesktopCount',
      keepDuration: 'KeepDuration',
      chargeType: 'ChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      ownType: 'OwnType',
      autoPay: 'AutoPay',
      comments: 'Comments',
      minDesktopsCount: 'MinDesktopsCount',
      maxDesktopsCount: 'MaxDesktopsCount',
      allowAutoSetup: 'AllowAutoSetup',
      allowBufferCount: 'AllowBufferCount',
      clientToken: 'ClientToken',
      endUserIds: 'EndUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bundleId: 'string',
      officeSiteId: 'string',
      policyGroupId: 'string',
      desktopGroupName: 'string',
      directoryId: 'string',
      scaleStrategyId: 'string',
      vpcId: 'string',
      defaultInitDesktopCount: 'number',
      keepDuration: 'number',
      chargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      ownType: 'number',
      autoPay: 'boolean',
      comments: 'string',
      minDesktopsCount: 'number',
      maxDesktopsCount: 'number',
      allowAutoSetup: 'number',
      allowBufferCount: 'number',
      clientToken: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopGroupResponseBody extends $tea.Model {
  desktopGroupId?: string;
  requestId?: string;
  orderIds?: string[];
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      requestId: 'RequestId',
      orderIds: 'OrderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      requestId: 'string',
      orderIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDesktopGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequest extends $tea.Model {
  regionId?: string;
  groupId?: string;
  bundleId?: string;
  desktopName?: string;
  userName?: string;
  vpcId?: string;
  amount?: number;
  directoryId?: string;
  officeSiteId?: string;
  policyGroupId?: string;
  chargeType?: string;
  period?: number;
  periodUnit?: string;
  autoPay?: boolean;
  autoRenew?: boolean;
  promotionId?: string;
  userAssignMode?: string;
  endUserId?: string[];
  tag?: CreateDesktopsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      groupId: 'GroupId',
      bundleId: 'BundleId',
      desktopName: 'DesktopName',
      userName: 'UserName',
      vpcId: 'VpcId',
      amount: 'Amount',
      directoryId: 'DirectoryId',
      officeSiteId: 'OfficeSiteId',
      policyGroupId: 'PolicyGroupId',
      chargeType: 'ChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      promotionId: 'PromotionId',
      userAssignMode: 'UserAssignMode',
      endUserId: 'EndUserId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      groupId: 'string',
      bundleId: 'string',
      desktopName: 'string',
      userName: 'string',
      vpcId: 'string',
      amount: 'number',
      directoryId: 'string',
      officeSiteId: 'string',
      policyGroupId: 'string',
      chargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      promotionId: 'string',
      userAssignMode: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateDesktopsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsLiteRequest extends $tea.Model {
  regionId?: string;
  bundleId?: string;
  userAssignMode?: string;
  amount?: number;
  enableInternetAccess?: boolean;
  bandwidth?: number;
  periodUnit?: string;
  period?: number;
  endUserId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bundleId: 'BundleId',
      userAssignMode: 'UserAssignMode',
      amount: 'Amount',
      enableInternetAccess: 'EnableInternetAccess',
      bandwidth: 'Bandwidth',
      periodUnit: 'PeriodUnit',
      period: 'Period',
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bundleId: 'string',
      userAssignMode: 'string',
      amount: 'number',
      enableInternetAccess: 'boolean',
      bandwidth: 'number',
      periodUnit: 'string',
      period: 'number',
      endUserId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsLiteResponseBody extends $tea.Model {
  orderId?: string;
  requestId?: string;
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsLiteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDesktopsLiteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDesktopsLiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequest extends $tea.Model {
  regionId?: string;
  desktopId?: string;
  imageName?: string;
  description?: string;
  snapshotId?: string;
  imageResourceType?: string;
  snapshotIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
      imageName: 'ImageName',
      description: 'Description',
      snapshotId: 'SnapshotId',
      imageResourceType: 'ImageResourceType',
      snapshotIds: 'SnapshotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopId: 'string',
      imageName: 'string',
      description: 'string',
      snapshotId: 'string',
      imageResourceType: 'string',
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
  body: CreateImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNASFileSystemRequest extends $tea.Model {
  regionId?: string;
  officeSiteId?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      officeSiteId: 'OfficeSiteId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      officeSiteId: 'string',
      name: 'string',
      description: 'string',
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
  requestId?: string;
  officeSiteId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      fileSystemName: 'FileSystemName',
      mountTargetDomain: 'MountTargetDomain',
      requestId: 'RequestId',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      fileSystemName: 'string',
      mountTargetDomain: 'string',
      requestId: 'string',
      officeSiteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNASFileSystemResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateNASFileSystemResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateNASFileSystemResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPackageRequest extends $tea.Model {
  regionId?: string;
  bandwidth?: number;
  officeSiteId?: string;
  internetChargeType?: string;
  period?: number;
  periodUnit?: string;
  autoPay?: boolean;
  autoRenew?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bandwidth: 'Bandwidth',
      officeSiteId: 'OfficeSiteId',
      internetChargeType: 'InternetChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bandwidth: 'number',
      officeSiteId: 'string',
      internetChargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      autoPay: 'boolean',
      autoRenew: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPackageResponseBody extends $tea.Model {
  networkPackageId?: string;
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackageId: 'NetworkPackageId',
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageId: 'string',
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateNetworkPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateNetworkPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequest extends $tea.Model {
  regionId?: string;
  clipboard?: string;
  localDrive?: string;
  usbRedirect?: string;
  visualQuality?: string;
  html5Access?: string;
  html5FileTransfer?: string;
  watermark?: string;
  name?: string;
  watermarkType?: string;
  watermarkCustomText?: string;
  watermarkTransparency?: string;
  preemptLogin?: string;
  domainList?: string;
  preemptLoginUser?: string[];
  authorizeSecurityPolicyRule?: CreatePolicyGroupRequestAuthorizeSecurityPolicyRule[];
  authorizeAccessPolicyRule?: CreatePolicyGroupRequestAuthorizeAccessPolicyRule[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clipboard: 'Clipboard',
      localDrive: 'LocalDrive',
      usbRedirect: 'UsbRedirect',
      visualQuality: 'VisualQuality',
      html5Access: 'Html5Access',
      html5FileTransfer: 'Html5FileTransfer',
      watermark: 'Watermark',
      name: 'Name',
      watermarkType: 'WatermarkType',
      watermarkCustomText: 'WatermarkCustomText',
      watermarkTransparency: 'WatermarkTransparency',
      preemptLogin: 'PreemptLogin',
      domainList: 'DomainList',
      preemptLoginUser: 'PreemptLoginUser',
      authorizeSecurityPolicyRule: 'AuthorizeSecurityPolicyRule',
      authorizeAccessPolicyRule: 'AuthorizeAccessPolicyRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clipboard: 'string',
      localDrive: 'string',
      usbRedirect: 'string',
      visualQuality: 'string',
      html5Access: 'string',
      html5FileTransfer: 'string',
      watermark: 'string',
      name: 'string',
      watermarkType: 'string',
      watermarkCustomText: 'string',
      watermarkTransparency: 'string',
      preemptLogin: 'string',
      domainList: 'string',
      preemptLoginUser: { 'type': 'array', 'itemType': 'string' },
      authorizeSecurityPolicyRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestAuthorizeSecurityPolicyRule },
      authorizeAccessPolicyRule: { 'type': 'array', 'itemType': CreatePolicyGroupRequestAuthorizeAccessPolicyRule },
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
  body: CreatePolicyGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePolicyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRAMDirectoryRequest extends $tea.Model {
  regionId?: string;
  directoryName?: string;
  enableInternetAccess?: boolean;
  enableAdminAccess?: boolean;
  desktopAccessType?: string;
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      directoryName: 'DirectoryName',
      enableInternetAccess: 'EnableInternetAccess',
      enableAdminAccess: 'EnableAdminAccess',
      desktopAccessType: 'DesktopAccessType',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      directoryName: 'string',
      enableInternetAccess: 'boolean',
      enableAdminAccess: 'boolean',
      desktopAccessType: 'string',
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
  body: CreateRAMDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRAMDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScaleStrategyRequest extends $tea.Model {
  regionId?: string;
  scaleStrategyName?: string;
  scaleStrategyType?: string;
  payType?: string;
  minDesktopsCount?: number;
  maxDesktopsCount?: number;
  minAvailableDesktopsCount?: number;
  maxAvailableDesktopsCount?: number;
  scaleStep?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      scaleStrategyName: 'ScaleStrategyName',
      scaleStrategyType: 'ScaleStrategyType',
      payType: 'PayType',
      minDesktopsCount: 'MinDesktopsCount',
      maxDesktopsCount: 'MaxDesktopsCount',
      minAvailableDesktopsCount: 'MinAvailableDesktopsCount',
      maxAvailableDesktopsCount: 'MaxAvailableDesktopsCount',
      scaleStep: 'ScaleStep',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      scaleStrategyName: 'string',
      scaleStrategyType: 'string',
      payType: 'string',
      minDesktopsCount: 'number',
      maxDesktopsCount: 'number',
      minAvailableDesktopsCount: 'number',
      maxAvailableDesktopsCount: 'number',
      scaleStep: 'number',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScaleStrategyResponseBody extends $tea.Model {
  scaleStrategyId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      scaleStrategyId: 'ScaleStrategyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleStrategyId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScaleStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateScaleStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScaleStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleRequest extends $tea.Model {
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

export class CreateServiceLinkedRoleResponseBody extends $tea.Model {
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

export class CreateServiceLinkedRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimpleOfficeSiteRequest extends $tea.Model {
  regionId?: string;
  cidrBlock?: string;
  cenId?: string;
  bandwidth?: number;
  officeSiteName?: string;
  enableInternetAccess?: boolean;
  enableAdminAccess?: boolean;
  desktopAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      cidrBlock: 'CidrBlock',
      cenId: 'CenId',
      bandwidth: 'Bandwidth',
      officeSiteName: 'OfficeSiteName',
      enableInternetAccess: 'EnableInternetAccess',
      enableAdminAccess: 'EnableAdminAccess',
      desktopAccessType: 'DesktopAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      cidrBlock: 'string',
      cenId: 'string',
      bandwidth: 'number',
      officeSiteName: 'string',
      enableInternetAccess: 'boolean',
      enableAdminAccess: 'boolean',
      desktopAccessType: 'string',
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
  body: CreateSimpleOfficeSiteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSimpleOfficeSiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotRequest extends $tea.Model {
  regionId?: string;
  desktopId?: string;
  snapshotName?: string;
  description?: string;
  sourceDiskType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
      snapshotName: 'SnapshotName',
      description: 'Description',
      sourceDiskType: 'SourceDiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopId: 'string',
      snapshotName: 'string',
      description: 'string',
      sourceDiskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponseBody extends $tea.Model {
  snapshotId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      snapshotId: 'SnapshotId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBundlesRequest extends $tea.Model {
  regionId?: string;
  bundleId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bundleId: 'BundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bundleId: { 'type': 'array', 'itemType': 'string' },
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
  body: DeleteBundlesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBundlesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDesktopGroupRequest extends $tea.Model {
  regionId?: string;
  desktopGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopGroupId: 'DesktopGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopGroupId: 'string',
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
  body: DeleteDesktopGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDesktopsRequest extends $tea.Model {
  regionId?: string;
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
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
  body: DeleteDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoriesRequest extends $tea.Model {
  regionId?: string;
  directoryId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      directoryId: { 'type': 'array', 'itemType': 'string' },
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
  body: DeleteDirectoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDirectoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesRequest extends $tea.Model {
  regionId?: string;
  imageId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      imageId: { 'type': 'array', 'itemType': 'string' },
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
  body: DeleteImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNASFileSystemsRequest extends $tea.Model {
  regionId?: string;
  fileSystemId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      fileSystemId: { 'type': 'array', 'itemType': 'string' },
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
  body: DeleteNASFileSystemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNASFileSystemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkPackagesRequest extends $tea.Model {
  regionId?: string;
  networkPackageId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkPackageId: 'NetworkPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkPackageId: { 'type': 'array', 'itemType': 'string' },
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
  body: DeleteNetworkPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNetworkPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOfficeSitesRequest extends $tea.Model {
  regionId?: string;
  officeSiteId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
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
  body: DeleteOfficeSitesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteOfficeSitesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyGroupsRequest extends $tea.Model {
  regionId?: string;
  policyGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      policyGroupId: 'PolicyGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      policyGroupId: { 'type': 'array', 'itemType': 'string' },
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
  body: DeletePolicyGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePolicyGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScaleStrategyRequest extends $tea.Model {
  regionId?: string;
  scaleStrategyId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      scaleStrategyId: 'ScaleStrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      scaleStrategyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScaleStrategyResponseBody extends $tea.Model {
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

export class DeleteScaleStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteScaleStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteScaleStrategyResponseBody,
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
  body: DeleteSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteVirtualMFADeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVirtualMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventStackInfoRequest extends $tea.Model {
  regionId?: string;
  desktopId?: string;
  eventName?: string;
  uniqueInfo?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
      eventName: 'EventName',
      uniqueInfo: 'UniqueInfo',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopId: 'string',
      eventName: 'string',
      uniqueInfo: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventStackInfoResponseBody extends $tea.Model {
  stackInfo?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      stackInfo: 'StackInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stackInfo: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAlarmEventStackInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAlarmEventStackInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAlarmEventStackInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesRequest extends $tea.Model {
  regionId?: string;
  maxResults?: number;
  nextToken?: string;
  bundleType?: string;
  desktopTypeFamily?: string;
  cpuCount?: number;
  memorySize?: number;
  gpuCount?: number;
  checkStock?: boolean;
  fromDesktopGroup?: boolean;
  protocolType?: string;
  bundleId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      bundleType: 'BundleType',
      desktopTypeFamily: 'DesktopTypeFamily',
      cpuCount: 'CpuCount',
      memorySize: 'MemorySize',
      gpuCount: 'GpuCount',
      checkStock: 'CheckStock',
      fromDesktopGroup: 'FromDesktopGroup',
      protocolType: 'ProtocolType',
      bundleId: 'BundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      bundleType: 'string',
      desktopTypeFamily: 'string',
      cpuCount: 'number',
      memorySize: 'number',
      gpuCount: 'number',
      checkStock: 'boolean',
      fromDesktopGroup: 'boolean',
      protocolType: 'string',
      bundleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  bundles?: DescribeBundlesResponseBodyBundles[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      bundles: 'Bundles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      bundles: { 'type': 'array', 'itemType': DescribeBundlesResponseBodyBundles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeBundlesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeBundlesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensRequest extends $tea.Model {
  regionId?: string;
  pageSize?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  totalCount?: number;
  cens?: DescribeCensResponseBodyCens[];
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      totalCount: 'TotalCount',
      cens: 'Cens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      totalCount: 'number',
      cens: { 'type': 'array', 'itemType': DescribeCensResponseBodyCens },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCensResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCensResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCensResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsRequest extends $tea.Model {
  regionId?: string;
  endUserId?: string;
  desktopId?: string;
  desktopIp?: string;
  directoryId?: string;
  officeSiteId?: string;
  eventType?: string;
  startTime?: string;
  endTime?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      endUserId: 'EndUserId',
      desktopId: 'DesktopId',
      desktopIp: 'DesktopIp',
      directoryId: 'DirectoryId',
      officeSiteId: 'OfficeSiteId',
      eventType: 'EventType',
      startTime: 'StartTime',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      endUserId: 'string',
      desktopId: 'string',
      desktopIp: 'string',
      directoryId: 'string',
      officeSiteId: 'string',
      eventType: 'string',
      startTime: 'string',
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  events?: DescribeClientEventsResponseBodyEvents[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      events: 'Events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      events: { 'type': 'array', 'itemType': DescribeClientEventsResponseBodyEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClientEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClientEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopIdsByVulNamesRequest extends $tea.Model {
  regionId?: string;
  type?: string;
  officeSiteId?: string;
  necessity?: string;
  vulName?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      type: 'Type',
      officeSiteId: 'OfficeSiteId',
      necessity: 'Necessity',
      vulName: 'VulName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      type: 'string',
      officeSiteId: 'string',
      necessity: 'string',
      vulName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopIdsByVulNamesResponseBody extends $tea.Model {
  requestId?: string;
  desktopItems?: DescribeDesktopIdsByVulNamesResponseBodyDesktopItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      desktopItems: 'DesktopItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      desktopItems: { 'type': 'array', 'itemType': DescribeDesktopIdsByVulNamesResponseBodyDesktopItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopIdsByVulNamesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDesktopIdsByVulNamesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDesktopIdsByVulNamesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopPolicysRequest extends $tea.Model {
  regionId?: string;
  nextToken?: string;
  maxResults?: number;
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      nextToken: 'string',
      maxResults: 'number',
      desktopId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopPolicysResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  describeDesktopPolicys?: DescribeDesktopPolicysResponseBodyDescribeDesktopPolicys[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      describeDesktopPolicys: 'DescribeDesktopPolicys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      describeDesktopPolicys: { 'type': 'array', 'itemType': DescribeDesktopPolicysResponseBodyDescribeDesktopPolicys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopPolicysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDesktopPolicysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDesktopPolicysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsRequest extends $tea.Model {
  regionId?: string;
  groupId?: string;
  desktopStatus?: string;
  maxResults?: number;
  nextToken?: string;
  userName?: string;
  desktopName?: string;
  directoryId?: string;
  officeSiteId?: string;
  policyGroupId?: string;
  chargeType?: string;
  expiredTime?: string;
  desktopId?: string[];
  endUserId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      groupId: 'GroupId',
      desktopStatus: 'DesktopStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      userName: 'UserName',
      desktopName: 'DesktopName',
      directoryId: 'DirectoryId',
      officeSiteId: 'OfficeSiteId',
      policyGroupId: 'PolicyGroupId',
      chargeType: 'ChargeType',
      expiredTime: 'ExpiredTime',
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      groupId: 'string',
      desktopStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      userName: 'string',
      desktopName: 'string',
      directoryId: 'string',
      officeSiteId: 'string',
      policyGroupId: 'string',
      chargeType: 'string',
      expiredTime: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      endUserId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  desktops?: DescribeDesktopsResponseBodyDesktops[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      desktops: 'Desktops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      desktops: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktops },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsInGroupRequest extends $tea.Model {
  regionId?: string;
  desktopGroupId?: string;
  payType?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopGroupId: 'DesktopGroupId',
      payType: 'PayType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopGroupId: 'string',
      payType: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsInGroupResponseBody extends $tea.Model {
  postPaidDesktopsCount?: number;
  nextToken?: string;
  paidDesktopsCount?: number;
  requestId?: string;
  postPaidDesktopsTotalAmount?: number;
  paidDesktops?: DescribeDesktopsInGroupResponseBodyPaidDesktops[];
  postPaidDesktops?: DescribeDesktopsInGroupResponseBodyPostPaidDesktops[];
  static names(): { [key: string]: string } {
    return {
      postPaidDesktopsCount: 'PostPaidDesktopsCount',
      nextToken: 'NextToken',
      paidDesktopsCount: 'PaidDesktopsCount',
      requestId: 'RequestId',
      postPaidDesktopsTotalAmount: 'PostPaidDesktopsTotalAmount',
      paidDesktops: 'PaidDesktops',
      postPaidDesktops: 'PostPaidDesktops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postPaidDesktopsCount: 'number',
      nextToken: 'string',
      paidDesktopsCount: 'number',
      requestId: 'string',
      postPaidDesktopsTotalAmount: 'number',
      paidDesktops: { 'type': 'array', 'itemType': DescribeDesktopsInGroupResponseBodyPaidDesktops },
      postPaidDesktops: { 'type': 'array', 'itemType': DescribeDesktopsInGroupResponseBodyPostPaidDesktops },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsInGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDesktopsInGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDesktopsInGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesRequest extends $tea.Model {
  regionId?: string;
  desktopTypeId?: string;
  instanceTypeFamily?: string;
  cpuCount?: number;
  memorySize?: number;
  gpuCount?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopTypeId: 'DesktopTypeId',
      instanceTypeFamily: 'InstanceTypeFamily',
      cpuCount: 'CpuCount',
      memorySize: 'MemorySize',
      gpuCount: 'GpuCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopTypeId: 'string',
      instanceTypeFamily: 'string',
      cpuCount: 'number',
      memorySize: 'number',
      gpuCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesResponseBody extends $tea.Model {
  requestId?: string;
  desktopTypes?: DescribeDesktopTypesResponseBodyDesktopTypes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      desktopTypes: 'DesktopTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      desktopTypes: { 'type': 'array', 'itemType': DescribeDesktopTypesResponseBodyDesktopTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDesktopTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDesktopTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesRequest extends $tea.Model {
  regionId?: string;
  directoryType?: string;
  directoryStatus?: string;
  maxResults?: number;
  nextToken?: string;
  directoryId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      directoryType: 'DirectoryType',
      directoryStatus: 'DirectoryStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      directoryType: 'string',
      directoryStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      directoryId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      directories: 'Directories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDirectoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDirectoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListRequest extends $tea.Model {
  regionId?: string;
  operateType?: string;
  type?: string;
  vulInfo?: DescribeFrontVulPatchListRequestVulInfo[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      operateType: 'OperateType',
      type: 'Type',
      vulInfo: 'VulInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      operateType: 'string',
      type: 'string',
      vulInfo: { 'type': 'array', 'itemType': DescribeFrontVulPatchListRequestVulInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListResponseBody extends $tea.Model {
  requestId?: string;
  frontPatchList?: DescribeFrontVulPatchListResponseBodyFrontPatchList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      frontPatchList: 'FrontPatchList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      frontPatchList: { 'type': 'array', 'itemType': DescribeFrontVulPatchListResponseBodyFrontPatchList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFrontVulPatchListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFrontVulPatchListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedVulRequest extends $tea.Model {
  regionId?: string;
  lang?: string;
  type?: string;
  officeSiteId?: string;
  necessity?: string;
  dealed?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      lang: 'Lang',
      type: 'Type',
      officeSiteId: 'OfficeSiteId',
      necessity: 'Necessity',
      dealed: 'Dealed',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      lang: 'string',
      type: 'string',
      officeSiteId: 'string',
      necessity: 'string',
      dealed: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedVulResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  groupedVulItems?: DescribeGroupedVulResponseBodyGroupedVulItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      groupedVulItems: 'GroupedVulItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      groupedVulItems: { 'type': 'array', 'itemType': DescribeGroupedVulResponseBodyGroupedVulItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupedVulResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGroupedVulResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGroupedVulResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesRequest extends $tea.Model {
  regionId?: string;
  maxResults?: number;
  nextToken?: string;
  imageType?: string;
  imageStatus?: string;
  gpuCategory?: boolean;
  protocolType?: string;
  imageId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      imageType: 'ImageType',
      imageStatus: 'ImageStatus',
      gpuCategory: 'GpuCategory',
      protocolType: 'ProtocolType',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      imageType: 'string',
      imageStatus: 'string',
      gpuCategory: 'boolean',
      protocolType: 'string',
      imageId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  images?: DescribeImagesResponseBodyImages[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      images: { 'type': 'array', 'itemType': DescribeImagesResponseBodyImages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsRequest extends $tea.Model {
  regionId?: string;
  invokeId?: string;
  commandType?: string;
  invokeStatus?: string;
  desktopId?: string;
  includeOutput?: boolean;
  contentEncoding?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      invokeId: 'InvokeId',
      commandType: 'CommandType',
      invokeStatus: 'InvokeStatus',
      desktopId: 'DesktopId',
      includeOutput: 'IncludeOutput',
      contentEncoding: 'ContentEncoding',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      invokeId: 'string',
      commandType: 'string',
      invokeStatus: 'string',
      desktopId: 'string',
      includeOutput: 'boolean',
      contentEncoding: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  invocations?: DescribeInvocationsResponseBodyInvocations[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      invocations: 'Invocations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      invocations: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInvocationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInvocationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModificationPriceRequest extends $tea.Model {
  regionId?: string;
  instanceId?: string;
  instanceType?: string;
  rootDiskSizeGib?: number;
  userDiskSizeGib?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      rootDiskSizeGib: 'RootDiskSizeGib',
      userDiskSizeGib: 'UserDiskSizeGib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      rootDiskSizeGib: 'number',
      userDiskSizeGib: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModificationPriceResponseBody extends $tea.Model {
  requestId?: string;
  priceInfo?: DescribeModificationPriceResponseBodyPriceInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      priceInfo: 'PriceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      priceInfo: DescribeModificationPriceResponseBodyPriceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModificationPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeModificationPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeModificationPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsRequest extends $tea.Model {
  regionId?: string;
  officeSiteId?: string;
  maxResults?: number;
  nextToken?: string;
  fileSystemId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      officeSiteId: 'OfficeSiteId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      officeSiteId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      fileSystemId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  fileSystems?: DescribeNASFileSystemsResponseBodyFileSystems[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      fileSystems: 'FileSystems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      fileSystems: { 'type': 'array', 'itemType': DescribeNASFileSystemsResponseBodyFileSystems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNASFileSystemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNASFileSystemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPackagesRequest extends $tea.Model {
  regionId?: string;
  maxResults?: number;
  nextToken?: string;
  networkPackageId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      networkPackageId: 'NetworkPackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      networkPackageId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPackagesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  networkPackages?: DescribeNetworkPackagesResponseBodyNetworkPackages[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      networkPackages: 'NetworkPackages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      networkPackages: { 'type': 'array', 'itemType': DescribeNetworkPackagesResponseBodyNetworkPackages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNetworkPackagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNetworkPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesRequest extends $tea.Model {
  regionId?: string;
  officeSiteType?: string;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      officeSiteType: 'OfficeSiteType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      officeSiteType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  officeSites?: DescribeOfficeSitesResponseBodyOfficeSites[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      officeSites: 'OfficeSites',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      officeSites: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSites },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeOfficeSitesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOfficeSitesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsRequest extends $tea.Model {
  regionId?: string;
  maxResults?: number;
  nextToken?: string;
  policyGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      policyGroupId: 'PolicyGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      policyGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  describePolicyGroups?: DescribePolicyGroupsResponseBodyDescribePolicyGroups[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      describePolicyGroups: 'DescribePolicyGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      describePolicyGroups: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePolicyGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePolicyGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostPaidDesktopBillsRequest extends $tea.Model {
  regionId?: string;
  desktopGroupId?: string;
  billStartTime?: string;
  billEndTime?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopGroupId: 'DesktopGroupId',
      billStartTime: 'BillStartTime',
      billEndTime: 'BillEndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopGroupId: 'string',
      billStartTime: 'string',
      billEndTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostPaidDesktopBillsResponseBody extends $tea.Model {
  postPaidDesktopsBillsUrl?: string;
  postPaidDesktopsCount?: number;
  nextToken?: string;
  requestId?: string;
  postPaidDesktopsTotalAmount?: number;
  bills?: DescribePostPaidDesktopBillsResponseBodyBills[];
  static names(): { [key: string]: string } {
    return {
      postPaidDesktopsBillsUrl: 'PostPaidDesktopsBillsUrl',
      postPaidDesktopsCount: 'PostPaidDesktopsCount',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      postPaidDesktopsTotalAmount: 'PostPaidDesktopsTotalAmount',
      bills: 'Bills',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postPaidDesktopsBillsUrl: 'string',
      postPaidDesktopsCount: 'number',
      nextToken: 'string',
      requestId: 'string',
      postPaidDesktopsTotalAmount: 'number',
      bills: { 'type': 'array', 'itemType': DescribePostPaidDesktopBillsResponseBodyBills },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostPaidDesktopBillsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePostPaidDesktopBillsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePostPaidDesktopBillsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  instanceType?: string;
  rootDiskSizeGib?: number;
  userDiskSizeGib?: number;
  osType?: string;
  periodUnit?: string;
  period?: number;
  amount?: number;
  promotionId?: string;
  internetChargeType?: string;
  bandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      instanceType: 'InstanceType',
      rootDiskSizeGib: 'RootDiskSizeGib',
      userDiskSizeGib: 'UserDiskSizeGib',
      osType: 'OsType',
      periodUnit: 'PeriodUnit',
      period: 'Period',
      amount: 'Amount',
      promotionId: 'PromotionId',
      internetChargeType: 'InternetChargeType',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      instanceType: 'string',
      rootDiskSizeGib: 'number',
      userDiskSizeGib: 'number',
      osType: 'string',
      periodUnit: 'string',
      period: 'number',
      amount: 'number',
      promotionId: 'string',
      internetChargeType: 'string',
      bandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBody extends $tea.Model {
  requestId?: string;
  priceInfo?: DescribePriceResponseBodyPriceInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      priceInfo: 'PriceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      priceInfo: DescribePriceResponseBodyPriceInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePriceResponseBody,
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
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScaleStrategysRequest extends $tea.Model {
  regionId?: string;
  scaleStrategyName?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      scaleStrategyName: 'ScaleStrategyName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      scaleStrategyName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScaleStrategysResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  scaleStrategys?: DescribeScaleStrategysResponseBodyScaleStrategys[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      scaleStrategys: 'ScaleStrategys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      scaleStrategys: { 'type': 'array', 'itemType': DescribeScaleStrategysResponseBodyScaleStrategys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScaleStrategysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScaleStrategysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScaleStrategysResponseBody,
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
  requestId?: string;
  taskStatus?: string;
  createTime?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskStatus: 'TaskStatus',
      createTime: 'CreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskStatus: 'string',
      createTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScanTaskProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeScanTaskProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeScanTaskProgressResponseBody,
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
  body: DescribeSecurityEventOperationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecurityEventOperationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusRequest extends $tea.Model {
  regionId?: string;
  taskId?: number;
  securityEventId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskId: 'TaskId',
      securityEventId: 'SecurityEventId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskId: 'number',
      securityEventId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusResponseBody extends $tea.Model {
  taskStatus?: string;
  requestId?: string;
  securityEventOperationStatuses?: DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatuses[];
  static names(): { [key: string]: string } {
    return {
      taskStatus: 'TaskStatus',
      requestId: 'RequestId',
      securityEventOperationStatuses: 'SecurityEventOperationStatuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskStatus: 'string',
      requestId: 'string',
      securityEventOperationStatuses: { 'type': 'array', 'itemType': DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatuses },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSecurityEventOperationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecurityEventOperationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsRequest extends $tea.Model {
  regionId?: string;
  desktopId?: string;
  snapshotId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
      snapshotId: 'SnapshotId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopId: 'string',
      snapshotId: 'string',
      maxResults: 'number',
      nextToken: 'string',
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
  body: DescribeSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  suspiciousCount?: number;
  remindCount?: number;
  seriousCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      suspiciousCount: 'SuspiciousCount',
      remindCount: 'RemindCount',
      seriousCount: 'SeriousCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suspiciousCount: 'number',
      remindCount: 'number',
      seriousCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventOverviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSuspEventOverviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSuspEventOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventQuaraFilesRequest extends $tea.Model {
  regionId?: string;
  status?: string;
  officeSiteId?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      status: 'Status',
      officeSiteId: 'OfficeSiteId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      status: 'string',
      officeSiteId: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventQuaraFilesResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  quaraFiles?: DescribeSuspEventQuaraFilesResponseBodyQuaraFiles[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      quaraFiles: 'QuaraFiles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
      totalCount: 'number',
      quaraFiles: { 'type': 'array', 'itemType': DescribeSuspEventQuaraFilesResponseBodyQuaraFiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventQuaraFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSuspEventQuaraFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSuspEventQuaraFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsRequest extends $tea.Model {
  regionId?: string;
  lang?: string;
  officeSiteId?: string;
  dealed?: string;
  levels?: string;
  parentEventType?: string;
  alarmUniqueInfo?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      lang: 'Lang',
      officeSiteId: 'OfficeSiteId',
      dealed: 'Dealed',
      levels: 'Levels',
      parentEventType: 'ParentEventType',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      lang: 'string',
      officeSiteId: 'string',
      dealed: 'string',
      levels: 'string',
      parentEventType: 'string',
      alarmUniqueInfo: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: string;
  totalCount?: number;
  suspEvents?: DescribeSuspEventsResponseBodySuspEvents[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      suspEvents: 'SuspEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'string',
      totalCount: 'number',
      suspEvents: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSuspEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSuspEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectionRecordsRequest extends $tea.Model {
  regionId?: string;
  desktopGroupId?: string;
  endUserId?: string;
  endUserType?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopGroupId: 'DesktopGroupId',
      endUserId: 'EndUserId',
      endUserType: 'EndUserType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopGroupId: 'string',
      endUserId: 'string',
      endUserType: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectionRecordsResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  connectionRecords?: DescribeUserConnectionRecordsResponseBodyConnectionRecords[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      connectionRecords: 'ConnectionRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      connectionRecords: { 'type': 'array', 'itemType': DescribeUserConnectionRecordsResponseBodyConnectionRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectionRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserConnectionRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserConnectionRecordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupRequest extends $tea.Model {
  regionId?: string;
  desktopGroupId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopGroupId: 'DesktopGroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopGroupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  usersCount?: number;
  onlineUsersCount?: number;
  endUsers?: DescribeUsersInGroupResponseBodyEndUsers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      usersCount: 'UsersCount',
      onlineUsersCount: 'OnlineUsersCount',
      endUsers: 'EndUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      usersCount: 'number',
      onlineUsersCount: 'number',
      endUsers: { 'type': 'array', 'itemType': DescribeUsersInGroupResponseBodyEndUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUsersInGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUsersInGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualMFADevicesRequest extends $tea.Model {
  regionId?: string;
  maxResults?: number;
  nextToken?: string;
  directoryId?: string;
  officeSiteId?: string;
  endUserId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      directoryId: 'DirectoryId',
      officeSiteId: 'OfficeSiteId',
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      directoryId: 'string',
      officeSiteId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
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
  body: DescribeVirtualMFADevicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVirtualMFADevicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsRequest extends $tea.Model {
  regionId?: string;
  lang?: string;
  type?: string;
  name?: string;
  aliasName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      lang: 'Lang',
      type: 'Type',
      name: 'Name',
      aliasName: 'AliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      lang: 'string',
      type: 'string',
      name: 'string',
      aliasName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsResponseBody extends $tea.Model {
  requestId?: string;
  cves?: DescribeVulDetailsResponseBodyCves[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      cves: 'Cves',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      cves: { 'type': 'array', 'itemType': DescribeVulDetailsResponseBodyCves },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVulDetailsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVulDetailsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListRequest extends $tea.Model {
  regionId?: string;
  lang?: string;
  type?: string;
  officeSiteId?: string;
  necessity?: string;
  aliasName?: string;
  dealed?: string;
  currentPage?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      lang: 'Lang',
      type: 'Type',
      officeSiteId: 'OfficeSiteId',
      necessity: 'Necessity',
      aliasName: 'AliasName',
      dealed: 'Dealed',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      lang: 'string',
      type: 'string',
      officeSiteId: 'string',
      necessity: 'string',
      aliasName: 'string',
      dealed: 'string',
      currentPage: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBody extends $tea.Model {
  currentPage?: number;
  requestId?: string;
  pageSize?: number;
  totalCount?: number;
  vulRecords?: DescribeVulListResponseBodyVulRecords[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      vulRecords: 'VulRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      requestId: 'string',
      pageSize: 'number',
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
  body: DescribeVulListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  nntfCount?: number;
  laterCount?: number;
  requestId?: string;
  asapCount?: number;
  static names(): { [key: string]: string } {
    return {
      nntfCount: 'NntfCount',
      laterCount: 'LaterCount',
      requestId: 'RequestId',
      asapCount: 'AsapCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nntfCount: 'number',
      laterCount: 'number',
      requestId: 'string',
      asapCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulOverviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVulOverviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVulOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
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
  body: DescribeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachCenRequest extends $tea.Model {
  regionId?: string;
  officeSiteId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      officeSiteId: 'string',
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
  body: DetachCenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachCenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoCheckResourceRequest extends $tea.Model {
  invoker?: string;
  pk?: string;
  bid?: string;
  hid?: number;
  country?: string;
  taskIdentifier?: string;
  taskExtraData?: string;
  gmtWakeup?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      invoker: 'Invoker',
      pk: 'Pk',
      bid: 'Bid',
      hid: 'Hid',
      country: 'Country',
      taskIdentifier: 'TaskIdentifier',
      taskExtraData: 'TaskExtraData',
      gmtWakeup: 'GmtWakeup',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoker: 'string',
      pk: 'string',
      bid: 'string',
      hid: 'number',
      country: 'string',
      taskIdentifier: 'string',
      taskExtraData: 'string',
      gmtWakeup: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoCheckResourceResponseBody extends $tea.Model {
  gmtWakeup?: string;
  hid?: number;
  message?: string;
  taskIdentifier?: string;
  requestId?: string;
  success?: boolean;
  url?: string;
  interrupt?: boolean;
  invoker?: string;
  taskExtraData?: string;
  country?: string;
  prompt?: string;
  level?: number;
  pk?: string;
  bid?: string;
  static names(): { [key: string]: string } {
    return {
      gmtWakeup: 'GmtWakeup',
      hid: 'Hid',
      message: 'Message',
      taskIdentifier: 'TaskIdentifier',
      requestId: 'RequestId',
      success: 'Success',
      url: 'Url',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      taskExtraData: 'TaskExtraData',
      country: 'Country',
      prompt: 'Prompt',
      level: 'Level',
      pk: 'Pk',
      bid: 'Bid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtWakeup: 'string',
      hid: 'number',
      message: 'string',
      taskIdentifier: 'string',
      requestId: 'string',
      success: 'boolean',
      url: 'string',
      interrupt: 'boolean',
      invoker: 'string',
      taskExtraData: 'string',
      country: 'string',
      prompt: 'string',
      level: 'number',
      pk: 'string',
      bid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoCheckResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DoCheckResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DoCheckResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoLogicalDeleteResourceRequest extends $tea.Model {
  invoker?: string;
  pk?: string;
  bid?: string;
  hid?: number;
  country?: string;
  taskIdentifier?: string;
  taskExtraData?: string;
  gmtWakeup?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      invoker: 'Invoker',
      pk: 'Pk',
      bid: 'Bid',
      hid: 'Hid',
      country: 'Country',
      taskIdentifier: 'TaskIdentifier',
      taskExtraData: 'TaskExtraData',
      gmtWakeup: 'GmtWakeup',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoker: 'string',
      pk: 'string',
      bid: 'string',
      hid: 'number',
      country: 'string',
      taskIdentifier: 'string',
      taskExtraData: 'string',
      gmtWakeup: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoLogicalDeleteResourceResponseBody extends $tea.Model {
  gmtWakeup?: string;
  hid?: number;
  message?: string;
  taskIdentifier?: string;
  requestId?: string;
  invoker?: string;
  taskExtraData?: string;
  country?: string;
  pk?: string;
  bid?: string;
  success?: boolean;
  interrupt?: boolean;
  static names(): { [key: string]: string } {
    return {
      gmtWakeup: 'GmtWakeup',
      hid: 'Hid',
      message: 'Message',
      taskIdentifier: 'TaskIdentifier',
      requestId: 'RequestId',
      invoker: 'Invoker',
      taskExtraData: 'TaskExtraData',
      country: 'Country',
      pk: 'Pk',
      bid: 'Bid',
      success: 'Success',
      interrupt: 'Interrupt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtWakeup: 'string',
      hid: 'number',
      message: 'string',
      taskIdentifier: 'string',
      requestId: 'string',
      invoker: 'string',
      taskExtraData: 'string',
      country: 'string',
      pk: 'string',
      bid: 'string',
      success: 'boolean',
      interrupt: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoLogicalDeleteResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DoLogicalDeleteResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DoLogicalDeleteResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoPhysicalDeleteResourceRequest extends $tea.Model {
  invoker?: string;
  pk?: string;
  bid?: string;
  hid?: number;
  country?: string;
  taskIdentifier?: string;
  taskExtraData?: string;
  gmtWakeup?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      invoker: 'Invoker',
      pk: 'Pk',
      bid: 'Bid',
      hid: 'Hid',
      country: 'Country',
      taskIdentifier: 'TaskIdentifier',
      taskExtraData: 'TaskExtraData',
      gmtWakeup: 'GmtWakeup',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invoker: 'string',
      pk: 'string',
      bid: 'string',
      hid: 'number',
      country: 'string',
      taskIdentifier: 'string',
      taskExtraData: 'string',
      gmtWakeup: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoPhysicalDeleteResourceResponseBody extends $tea.Model {
  gmtWakeup?: string;
  hid?: number;
  message?: string;
  taskIdentifier?: string;
  requestId?: string;
  invoker?: string;
  taskExtraData?: string;
  country?: string;
  pk?: string;
  bid?: string;
  success?: boolean;
  interrupt?: boolean;
  static names(): { [key: string]: string } {
    return {
      gmtWakeup: 'GmtWakeup',
      hid: 'Hid',
      message: 'Message',
      taskIdentifier: 'TaskIdentifier',
      requestId: 'RequestId',
      invoker: 'Invoker',
      taskExtraData: 'TaskExtraData',
      country: 'Country',
      pk: 'Pk',
      bid: 'Bid',
      success: 'Success',
      interrupt: 'Interrupt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtWakeup: 'string',
      hid: 'number',
      message: 'string',
      taskIdentifier: 'string',
      requestId: 'string',
      invoker: 'string',
      taskExtraData: 'string',
      country: 'string',
      pk: 'string',
      bid: 'string',
      success: 'boolean',
      interrupt: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoPhysicalDeleteResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DoPhysicalDeleteResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DoPhysicalDeleteResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketRequest extends $tea.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  regionId?: string;
  instanceId?: string;
  userName?: string;
  password?: string;
  taskId?: string;
  desktopId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      regionId: 'RegionId',
      instanceId: 'InstanceId',
      userName: 'UserName',
      password: 'Password',
      taskId: 'TaskId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      regionId: 'string',
      instanceId: 'string',
      userName: 'string',
      password: 'string',
      taskId: 'string',
      desktopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponseBody extends $tea.Model {
  ticket?: string;
  taskId?: string;
  requestId?: string;
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      ticket: 'Ticket',
      taskId: 'TaskId',
      requestId: 'RequestId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ticket: 'string',
      taskId: 'string',
      requestId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetConnectionTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetConnectionTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailRequest extends $tea.Model {
  regionId?: string;
  desktopGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopGroupId: 'DesktopGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailResponseBody extends $tea.Model {
  requestId?: string;
  desktops?: GetDesktopGroupDetailResponseBodyDesktops[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      desktops: 'Desktops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      desktops: { 'type': 'array', 'itemType': GetDesktopGroupDetailResponseBodyDesktops },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopGroupDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDesktopGroupDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDesktopGroupDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopUsersRequest extends $tea.Model {
  regionId?: string;
  desktopId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopUsersResponseBody extends $tea.Model {
  requestId?: string;
  endUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      endUserIds: 'EndUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDesktopUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDesktopUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDesktopUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectorySsoStatusRequest extends $tea.Model {
  regionId?: string;
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectorySsoStatusResponseBody extends $tea.Model {
  ssoStatus?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ssoStatus: 'SsoStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ssoStatus: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDirectorySsoStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDirectorySsoStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDirectorySsoStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeSiteSsoStatusRequest extends $tea.Model {
  regionId?: string;
  officeSiteId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      officeSiteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeSiteSsoStatusResponseBody extends $tea.Model {
  ssoStatus?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ssoStatus: 'SsoStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ssoStatus: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeSiteSsoStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOfficeSiteSsoStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOfficeSiteSsoStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpMetadataRequest extends $tea.Model {
  regionId?: string;
  directoryId?: string;
  officeSiteId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      directoryId: 'DirectoryId',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      directoryId: 'string',
      officeSiteId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpMetadataResponseBody extends $tea.Model {
  spMetadata?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      spMetadata: 'SpMetadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spMetadata: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpMetadataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSpMetadataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSpMetadataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSecurityEventsRequest extends $tea.Model {
  regionId?: string;
  operationCode?: string;
  operationParams?: string;
  securityEvent?: HandleSecurityEventsRequestSecurityEvent[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      securityEvent: 'SecurityEvent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      operationCode: 'string',
      operationParams: 'string',
      securityEvent: { 'type': 'array', 'itemType': HandleSecurityEventsRequestSecurityEvent },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSecurityEventsResponseBody extends $tea.Model {
  taskId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSecurityEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: HandleSecurityEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: HandleSecurityEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoryUsersRequest extends $tea.Model {
  regionId?: string;
  filter?: string;
  directoryId?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      filter: 'Filter',
      directoryId: 'DirectoryId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      filter: 'string',
      directoryId: 'string',
      nextToken: 'string',
      maxResults: 'number',
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
  body: ListDirectoryUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDirectoryUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteOverviewRequest extends $tea.Model {
  regionId?: string;
  forceRefresh?: boolean;
  maxResults?: number;
  nextToken?: string;
  officeSiteId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      forceRefresh: 'ForceRefresh',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      forceRefresh: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteOverviewResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  officeSiteOverviewResults?: ListOfficeSiteOverviewResponseBodyOfficeSiteOverviewResults[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      officeSiteOverviewResults: 'OfficeSiteOverviewResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      officeSiteOverviewResults: { 'type': 'array', 'itemType': ListOfficeSiteOverviewResponseBodyOfficeSiteOverviewResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteOverviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOfficeSiteOverviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOfficeSiteOverviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteUsersRequest extends $tea.Model {
  regionId?: string;
  filter?: string;
  officeSiteId?: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      filter: 'Filter',
      officeSiteId: 'OfficeSiteId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      filter: 'string',
      officeSiteId: 'string',
      nextToken: 'string',
      maxResults: 'number',
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
  body: ListOfficeSiteUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOfficeSiteUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  maxResults?: number;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
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
  body: LockVirtualMFADeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LockVirtualMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyADConnectorDirectoryRequest extends $tea.Model {
  regionId?: string;
  directoryId?: string;
  domainName?: string;
  domainUserName?: string;
  domainPassword?: string;
  directoryName?: string;
  subDomainName?: string;
  mfaEnabled?: boolean;
  dnsAddress?: string[];
  subDomainDnsAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      directoryId: 'DirectoryId',
      domainName: 'DomainName',
      domainUserName: 'DomainUserName',
      domainPassword: 'DomainPassword',
      directoryName: 'DirectoryName',
      subDomainName: 'SubDomainName',
      mfaEnabled: 'MfaEnabled',
      dnsAddress: 'DnsAddress',
      subDomainDnsAddress: 'SubDomainDnsAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      directoryId: 'string',
      domainName: 'string',
      domainUserName: 'string',
      domainPassword: 'string',
      directoryName: 'string',
      subDomainName: 'string',
      mfaEnabled: 'boolean',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
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
  body: ModifyADConnectorDirectoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyADConnectorDirectoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyADConnectorOfficeSiteRequest extends $tea.Model {
  regionId?: string;
  officeSiteId?: string;
  domainName?: string;
  domainUserName?: string;
  domainPassword?: string;
  officeSiteName?: string;
  subDomainName?: string;
  mfaEnabled?: boolean;
  dnsAddress?: string[];
  subDomainDnsAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      officeSiteId: 'OfficeSiteId',
      domainName: 'DomainName',
      domainUserName: 'DomainUserName',
      domainPassword: 'DomainPassword',
      officeSiteName: 'OfficeSiteName',
      subDomainName: 'SubDomainName',
      mfaEnabled: 'MfaEnabled',
      dnsAddress: 'DnsAddress',
      subDomainDnsAddress: 'SubDomainDnsAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      officeSiteId: 'string',
      domainName: 'string',
      domainUserName: 'string',
      domainPassword: 'string',
      officeSiteName: 'string',
      subDomainName: 'string',
      mfaEnabled: 'boolean',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
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
  body: ModifyADConnectorOfficeSiteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyADConnectorOfficeSiteResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBundleRequest extends $tea.Model {
  regionId?: string;
  bundleId?: string;
  imageId?: string;
  bundleName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      bundleId: 'BundleId',
      imageId: 'ImageId',
      bundleName: 'BundleName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      bundleId: 'string',
      imageId: 'string',
      bundleName: 'string',
      description: 'string',
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
  body: ModifyBundleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyBundleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopGroupRequest extends $tea.Model {
  regionId?: string;
  desktopGroupId?: string;
  ownBundleId?: string;
  policyGroupId?: string;
  desktopGroupName?: string;
  scaleStrategyId?: string;
  keepDuration?: number;
  comments?: string;
  minDesktopsCount?: number;
  maxDesktopsCount?: number;
  allowAutoSetup?: number;
  allowBufferCount?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopGroupId: 'DesktopGroupId',
      ownBundleId: 'OwnBundleId',
      policyGroupId: 'PolicyGroupId',
      desktopGroupName: 'DesktopGroupName',
      scaleStrategyId: 'ScaleStrategyId',
      keepDuration: 'KeepDuration',
      comments: 'Comments',
      minDesktopsCount: 'MinDesktopsCount',
      maxDesktopsCount: 'MaxDesktopsCount',
      allowAutoSetup: 'AllowAutoSetup',
      allowBufferCount: 'AllowBufferCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopGroupId: 'string',
      ownBundleId: 'string',
      policyGroupId: 'string',
      desktopGroupName: 'string',
      scaleStrategyId: 'string',
      keepDuration: 'number',
      comments: 'string',
      minDesktopsCount: 'number',
      maxDesktopsCount: 'number',
      allowAutoSetup: 'number',
      allowBufferCount: 'number',
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
  body: ModifyDesktopGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopNameRequest extends $tea.Model {
  regionId?: string;
  newDesktopName?: string;
  desktopId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      newDesktopName: 'NewDesktopName',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      newDesktopName: 'string',
      desktopId: 'string',
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
  body: ModifyDesktopNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDesktopNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopPolicysRequest extends $tea.Model {
  regionId?: string;
  clipboard?: string;
  localDrive?: string;
  usbRedirect?: string;
  watermark?: string;
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clipboard: 'Clipboard',
      localDrive: 'LocalDrive',
      usbRedirect: 'UsbRedirect',
      watermark: 'Watermark',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clipboard: 'string',
      localDrive: 'string',
      usbRedirect: 'string',
      watermark: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopPolicysResponseBody extends $tea.Model {
  requestId?: string;
  results?: ModifyDesktopPolicysResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ModifyDesktopPolicysResponseBodyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopPolicysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDesktopPolicysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDesktopPolicysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopSpecRequest extends $tea.Model {
  regionId?: string;
  desktopId?: string;
  desktopType?: string;
  rootDiskSizeGib?: number;
  userDiskSizeGib?: number;
  autoPay?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
      desktopType: 'DesktopType',
      rootDiskSizeGib: 'RootDiskSizeGib',
      userDiskSizeGib: 'UserDiskSizeGib',
      autoPay: 'AutoPay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopId: 'string',
      desktopType: 'string',
      rootDiskSizeGib: 'number',
      userDiskSizeGib: 'number',
      autoPay: 'boolean',
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
  body: ModifyDesktopSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDesktopSpecResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopsPolicyGroupRequest extends $tea.Model {
  regionId?: string;
  policyGroupId?: string;
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      policyGroupId: 'PolicyGroupId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      policyGroupId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopsPolicyGroupResponseBody extends $tea.Model {
  requestId?: string;
  modifyResults?: ModifyDesktopsPolicyGroupResponseBodyModifyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      modifyResults: 'ModifyResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      modifyResults: { 'type': 'array', 'itemType': ModifyDesktopsPolicyGroupResponseBodyModifyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopsPolicyGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDesktopsPolicyGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDesktopsPolicyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEntitlementRequest extends $tea.Model {
  regionId?: string;
  desktopId?: string;
  endUserId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
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
  body: ModifyEntitlementResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyEntitlementResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageAttributeRequest extends $tea.Model {
  regionId?: string;
  imageId?: string;
  name?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      imageId: 'ImageId',
      name: 'Name',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      imageId: 'string',
      name: 'string',
      description: 'string',
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
  body: ModifyImageAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyImageAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNASDefaultMountTargetRequest extends $tea.Model {
  regionId?: string;
  fileSystemId?: string;
  mountTargetDomain?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      fileSystemId: 'string',
      mountTargetDomain: 'string',
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
  body: ModifyNASDefaultMountTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyNASDefaultMountTargetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkPackageRequest extends $tea.Model {
  regionId?: string;
  networkPackageId?: string;
  bandwidth?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkPackageId: 'NetworkPackageId',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkPackageId: 'string',
      bandwidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkPackageResponseBody extends $tea.Model {
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

export class ModifyNetworkPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyNetworkPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyNetworkPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNetworkPackageEnabledRequest extends $tea.Model {
  regionId?: string;
  networkPackageId?: string;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      networkPackageId: 'NetworkPackageId',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      networkPackageId: 'string',
      enabled: 'boolean',
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
  body: ModifyNetworkPackageEnabledResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyNetworkPackageEnabledResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteAttributeRequest extends $tea.Model {
  regionId?: string;
  officeSiteId?: string;
  desktopAccessType?: string;
  officeSiteName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      officeSiteId: 'OfficeSiteId',
      desktopAccessType: 'DesktopAccessType',
      officeSiteName: 'OfficeSiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      officeSiteId: 'string',
      desktopAccessType: 'string',
      officeSiteName: 'string',
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
  body: ModifyOfficeSiteAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyOfficeSiteAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteCrossDesktopAccessRequest extends $tea.Model {
  regionId?: string;
  officeSiteId?: string;
  enableCrossDesktopAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      officeSiteId: 'OfficeSiteId',
      enableCrossDesktopAccess: 'EnableCrossDesktopAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      officeSiteId: 'string',
      enableCrossDesktopAccess: 'boolean',
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
  body: ModifyOfficeSiteCrossDesktopAccessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyOfficeSiteCrossDesktopAccessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOfficeSiteMfaEnabledRequest extends $tea.Model {
  regionId?: string;
  officeSiteId?: string;
  mfaEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      officeSiteId: 'OfficeSiteId',
      mfaEnabled: 'MfaEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      officeSiteId: 'string',
      mfaEnabled: 'boolean',
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
  body: ModifyOfficeSiteMfaEnabledResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyOfficeSiteMfaEnabledResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOperateVulRequest extends $tea.Model {
  regionId?: string;
  type?: string;
  operateType?: string;
  reason?: string;
  vulInfo?: ModifyOperateVulRequestVulInfo[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      type: 'Type',
      operateType: 'OperateType',
      reason: 'Reason',
      vulInfo: 'VulInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      type: 'string',
      operateType: 'string',
      reason: 'string',
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
  body: ModifyOperateVulResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyOperateVulResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequest extends $tea.Model {
  regionId?: string;
  policyGroupId?: string;
  name?: string;
  clipboard?: string;
  localDrive?: string;
  usbRedirect?: string;
  visualQuality?: string;
  html5Access?: string;
  html5FileTransfer?: string;
  watermark?: string;
  watermarkType?: string;
  watermarkCustomText?: string;
  watermarkTransparency?: string;
  preemptLogin?: string;
  domainList?: string;
  preemptLoginUser?: string[];
  authorizeSecurityPolicyRule?: ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule[];
  revokeSecurityPolicyRule?: ModifyPolicyGroupRequestRevokeSecurityPolicyRule[];
  authorizeAccessPolicyRule?: ModifyPolicyGroupRequestAuthorizeAccessPolicyRule[];
  revokeAccessPolicyRule?: ModifyPolicyGroupRequestRevokeAccessPolicyRule[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      policyGroupId: 'PolicyGroupId',
      name: 'Name',
      clipboard: 'Clipboard',
      localDrive: 'LocalDrive',
      usbRedirect: 'UsbRedirect',
      visualQuality: 'VisualQuality',
      html5Access: 'Html5Access',
      html5FileTransfer: 'Html5FileTransfer',
      watermark: 'Watermark',
      watermarkType: 'WatermarkType',
      watermarkCustomText: 'WatermarkCustomText',
      watermarkTransparency: 'WatermarkTransparency',
      preemptLogin: 'PreemptLogin',
      domainList: 'DomainList',
      preemptLoginUser: 'PreemptLoginUser',
      authorizeSecurityPolicyRule: 'AuthorizeSecurityPolicyRule',
      revokeSecurityPolicyRule: 'RevokeSecurityPolicyRule',
      authorizeAccessPolicyRule: 'AuthorizeAccessPolicyRule',
      revokeAccessPolicyRule: 'RevokeAccessPolicyRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      policyGroupId: 'string',
      name: 'string',
      clipboard: 'string',
      localDrive: 'string',
      usbRedirect: 'string',
      visualQuality: 'string',
      html5Access: 'string',
      html5FileTransfer: 'string',
      watermark: 'string',
      watermarkType: 'string',
      watermarkCustomText: 'string',
      watermarkTransparency: 'string',
      preemptLogin: 'string',
      domainList: 'string',
      preemptLoginUser: { 'type': 'array', 'itemType': 'string' },
      authorizeSecurityPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule },
      revokeSecurityPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestRevokeSecurityPolicyRule },
      authorizeAccessPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestAuthorizeAccessPolicyRule },
      revokeAccessPolicyRule: { 'type': 'array', 'itemType': ModifyPolicyGroupRequestRevokeAccessPolicyRule },
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
  body: ModifyPolicyGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyPolicyGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScaleStrategyRequest extends $tea.Model {
  regionId?: string;
  scaleStrategyId?: string;
  scaleStrategyName?: string;
  scaleStrategyType?: string;
  minDesktopsCount?: number;
  maxDesktopsCount?: number;
  minAvailableDesktopsCount?: number;
  maxAvailableDesktopsCount?: number;
  scaleStep?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      scaleStrategyId: 'ScaleStrategyId',
      scaleStrategyName: 'ScaleStrategyName',
      scaleStrategyType: 'ScaleStrategyType',
      minDesktopsCount: 'MinDesktopsCount',
      maxDesktopsCount: 'MaxDesktopsCount',
      minAvailableDesktopsCount: 'MinAvailableDesktopsCount',
      maxAvailableDesktopsCount: 'MaxAvailableDesktopsCount',
      scaleStep: 'ScaleStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      scaleStrategyId: 'string',
      scaleStrategyName: 'string',
      scaleStrategyType: 'string',
      minDesktopsCount: 'number',
      maxDesktopsCount: 'number',
      minAvailableDesktopsCount: 'number',
      maxAvailableDesktopsCount: 'number',
      scaleStep: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScaleStrategyResponseBody extends $tea.Model {
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

export class ModifyScaleStrategyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyScaleStrategyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyScaleStrategyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserToDesktopGroupRequest extends $tea.Model {
  regionId?: string;
  desktopGroupId?: string;
  oldEndUserIds?: string[];
  newEndUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopGroupId: 'DesktopGroupId',
      oldEndUserIds: 'OldEndUserIds',
      newEndUserIds: 'NewEndUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopGroupId: 'string',
      oldEndUserIds: { 'type': 'array', 'itemType': 'string' },
      newEndUserIds: { 'type': 'array', 'itemType': 'string' },
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
  body: ModifyUserToDesktopGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUserToDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateVulsRequest extends $tea.Model {
  regionId?: string;
  type?: string;
  operateType?: string;
  reason?: string;
  precondition?: number;
  vulName?: string[];
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      type: 'Type',
      operateType: 'OperateType',
      reason: 'Reason',
      precondition: 'Precondition',
      vulName: 'VulName',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      type: 'string',
      operateType: 'string',
      reason: 'string',
      precondition: 'number',
      vulName: { 'type': 'array', 'itemType': 'string' },
      desktopId: { 'type': 'array', 'itemType': 'string' },
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
  body: OperateVulsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OperateVulsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PayOrderCallbackRequest extends $tea.Model {
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PayOrderCallbackResponseBody extends $tea.Model {
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

export class PayOrderCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PayOrderCallbackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PayOrderCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsRequest extends $tea.Model {
  regionId?: string;
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
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
  body: RebootDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RebootDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDesktopsRequest extends $tea.Model {
  regionId?: string;
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDesktopsResponseBody extends $tea.Model {
  requestId?: string;
  rebuildResults?: RebuildDesktopsResponseBodyRebuildResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rebuildResults: 'RebuildResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rebuildResults: { 'type': 'array', 'itemType': RebuildDesktopsResponseBodyRebuildResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDesktopsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RebuildDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RebuildDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecreateDesktopGroupRequest extends $tea.Model {
  regionId?: string;
  desktopGroupId?: string;
  ownBundleId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopGroupId: 'DesktopGroupId',
      ownBundleId: 'OwnBundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopGroupId: 'string',
      ownBundleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecreateDesktopGroupResponseBody extends $tea.Model {
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

export class RecreateDesktopGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecreateDesktopGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecreateDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUserFromDesktopGroupRequest extends $tea.Model {
  regionId?: string;
  desktopGroupId?: string;
  endUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopGroupId: 'DesktopGroupId',
      endUserIds: 'EndUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopGroupId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
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
  body: RemoveUserFromDesktopGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveUserFromDesktopGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDesktopsRequest extends $tea.Model {
  regionId?: string;
  period?: number;
  periodUnit?: string;
  autoPay?: boolean;
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoPay: 'AutoPay',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      period: 'number',
      periodUnit: 'string',
      autoPay: 'boolean',
      desktopId: { 'type': 'array', 'itemType': 'string' },
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
  body: RenewDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenewDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNASDefaultMountTargetRequest extends $tea.Model {
  regionId?: string;
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      fileSystemId: 'string',
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
  body: ResetNASDefaultMountTargetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ResetSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackSuspEventQuaraFileRequest extends $tea.Model {
  regionId?: string;
  quaraFieldId?: number;
  desktopId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      quaraFieldId: 'QuaraFieldId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      quaraFieldId: 'number',
      desktopId: 'string',
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
  body: RollbackSuspEventQuaraFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RollbackSuspEventQuaraFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandRequest extends $tea.Model {
  regionId?: string;
  type?: string;
  commandContent?: string;
  timeout?: number;
  contentEncoding?: string;
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      type: 'Type',
      commandContent: 'CommandContent',
      timeout: 'Timeout',
      contentEncoding: 'ContentEncoding',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      type: 'string',
      commandContent: 'string',
      timeout: 'number',
      contentEncoding: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
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
  body: RunCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDirectorySsoStatusRequest extends $tea.Model {
  regionId?: string;
  directoryId?: string;
  enableSso?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      directoryId: 'DirectoryId',
      enableSso: 'EnableSso',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      directoryId: 'string',
      enableSso: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDirectorySsoStatusResponseBody extends $tea.Model {
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

export class SetDirectorySsoStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetDirectorySsoStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetDirectorySsoStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdpMetadataRequest extends $tea.Model {
  regionId?: string;
  directoryId?: string;
  officeSiteId?: string;
  idpMetadata?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      directoryId: 'DirectoryId',
      officeSiteId: 'OfficeSiteId',
      idpMetadata: 'IdpMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      directoryId: 'string',
      officeSiteId: 'string',
      idpMetadata: 'string',
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
  body: SetIdpMetadataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetIdpMetadataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetOfficeSiteSsoStatusRequest extends $tea.Model {
  regionId?: string;
  officeSiteId?: string;
  enableSso?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      officeSiteId: 'OfficeSiteId',
      enableSso: 'EnableSso',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      officeSiteId: 'string',
      enableSso: 'boolean',
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
  body: SetOfficeSiteSsoStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetOfficeSiteSsoStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDesktopsRequest extends $tea.Model {
  regionId?: string;
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
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
  body: StartDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVirusScanTaskRequest extends $tea.Model {
  regionId?: string;
  officeSiteId?: string[];
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      officeSiteId: 'OfficeSiteId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
      desktopId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVirusScanTaskResponseBody extends $tea.Model {
  scanTaskId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      scanTaskId: 'ScanTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scanTaskId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVirusScanTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartVirusScanTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartVirusScanTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDesktopsRequest extends $tea.Model {
  regionId?: string;
  stoppedMode?: string;
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      stoppedMode: 'StoppedMode',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      stoppedMode: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
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
  body: StopDesktopsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopDesktopsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInvocationRequest extends $tea.Model {
  regionId?: string;
  invokeId?: string;
  desktopId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      invokeId: 'InvokeId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      invokeId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
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
  body: StopInvocationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopInvocationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  resourceId?: string[];
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: UnlockVirtualMFADeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UnlockVirtualMFADeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  all?: boolean;
  resourceId?: string[];
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      all: 'All',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
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

export class CreatePolicyGroupRequestAuthorizeSecurityPolicyRule extends $tea.Model {
  type?: string;
  policy?: string;
  portRange?: string;
  description?: string;
  ipProtocol?: string;
  priority?: string;
  cidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      policy: 'Policy',
      portRange: 'PortRange',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      priority: 'Priority',
      cidrIp: 'CidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      policy: 'string',
      portRange: 'string',
      description: 'string',
      ipProtocol: 'string',
      priority: 'string',
      cidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequestAuthorizeAccessPolicyRule extends $tea.Model {
  description?: string;
  cidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      cidrIp: 'CidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      cidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponseBodyBundlesDisks extends $tea.Model {
  diskType?: string;
  diskSize?: number;
  static names(): { [key: string]: string } {
    return {
      diskType: 'DiskType',
      diskSize: 'DiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      diskSize: 'number',
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

export class DescribeBundlesResponseBodyBundles extends $tea.Model {
  description?: string;
  bundleType?: string;
  osType?: string;
  stockState?: string;
  desktopType?: string;
  protocolType?: string;
  bundleId?: string;
  imageId?: string;
  bundleName?: string;
  disks?: DescribeBundlesResponseBodyBundlesDisks[];
  desktopTypeAttribute?: DescribeBundlesResponseBodyBundlesDesktopTypeAttribute;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      bundleType: 'BundleType',
      osType: 'OsType',
      stockState: 'StockState',
      desktopType: 'DesktopType',
      protocolType: 'ProtocolType',
      bundleId: 'BundleId',
      imageId: 'ImageId',
      bundleName: 'BundleName',
      disks: 'Disks',
      desktopTypeAttribute: 'DesktopTypeAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      bundleType: 'string',
      osType: 'string',
      stockState: 'string',
      desktopType: 'string',
      protocolType: 'string',
      bundleId: 'string',
      imageId: 'string',
      bundleName: 'string',
      disks: { 'type': 'array', 'itemType': DescribeBundlesResponseBodyBundlesDisks },
      desktopTypeAttribute: DescribeBundlesResponseBodyBundlesDesktopTypeAttribute,
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

export class DescribeCensResponseBodyCens extends $tea.Model {
  status?: string;
  creationTime?: string;
  ipv6Level?: string;
  description?: string;
  cenId?: string;
  protectionLevel?: string;
  name?: string;
  tags?: DescribeCensResponseBodyCensTags[];
  packageIds?: DescribeCensResponseBodyCensPackageIds[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      ipv6Level: 'Ipv6Level',
      description: 'Description',
      cenId: 'CenId',
      protectionLevel: 'ProtectionLevel',
      name: 'Name',
      tags: 'Tags',
      packageIds: 'PackageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      ipv6Level: 'string',
      description: 'string',
      cenId: 'string',
      protectionLevel: 'string',
      name: 'string',
      tags: { 'type': 'array', 'itemType': DescribeCensResponseBodyCensTags },
      packageIds: { 'type': 'array', 'itemType': DescribeCensResponseBodyCensPackageIds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsResponseBodyEvents extends $tea.Model {
  status?: string;
  bytesReceived?: string;
  desktopIp?: string;
  eventTime?: string;
  bytesSend?: string;
  officeSiteId?: string;
  aliUid?: string;
  desktopId?: string;
  regionId?: string;
  eventId?: string;
  directoryType?: string;
  eventType?: string;
  endUserId?: string;
  clientIp?: string;
  clientOS?: string;
  officeSiteType?: string;
  directoryId?: string;
  clientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      bytesReceived: 'BytesReceived',
      desktopIp: 'DesktopIp',
      eventTime: 'EventTime',
      bytesSend: 'BytesSend',
      officeSiteId: 'OfficeSiteId',
      aliUid: 'AliUid',
      desktopId: 'DesktopId',
      regionId: 'RegionId',
      eventId: 'EventId',
      directoryType: 'DirectoryType',
      eventType: 'EventType',
      endUserId: 'EndUserId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      officeSiteType: 'OfficeSiteType',
      directoryId: 'DirectoryId',
      clientVersion: 'ClientVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      bytesReceived: 'string',
      desktopIp: 'string',
      eventTime: 'string',
      bytesSend: 'string',
      officeSiteId: 'string',
      aliUid: 'string',
      desktopId: 'string',
      regionId: 'string',
      eventId: 'string',
      directoryType: 'string',
      eventType: 'string',
      endUserId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      officeSiteType: 'string',
      directoryId: 'string',
      clientVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopIdsByVulNamesResponseBodyDesktopItems extends $tea.Model {
  desktopName?: string;
  desktopId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopName: 'DesktopName',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopName: 'string',
      desktopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopPolicysResponseBodyDescribeDesktopPolicys extends $tea.Model {
  usbRedirect?: string;
  desktopId?: string;
  watermark?: string;
  clipboard?: string;
  localDrive?: string;
  static names(): { [key: string]: string } {
    return {
      usbRedirect: 'UsbRedirect',
      desktopId: 'DesktopId',
      watermark: 'Watermark',
      clipboard: 'Clipboard',
      localDrive: 'LocalDrive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usbRedirect: 'string',
      desktopId: 'string',
      watermark: 'string',
      clipboard: 'string',
      localDrive: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktopsDisks extends $tea.Model {
  diskType?: string;
  diskId?: string;
  diskSize?: number;
  static names(): { [key: string]: string } {
    return {
      diskType: 'DiskType',
      diskId: 'DiskId',
      diskSize: 'DiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      diskId: 'string',
      diskSize: 'number',
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

export class DescribeDesktopsResponseBodyDesktopsSessions extends $tea.Model {
  endUserId?: string;
  establishmentTime?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      establishmentTime: 'EstablishmentTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      establishmentTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseBodyDesktops extends $tea.Model {
  creationTime?: string;
  chargeType?: string;
  desktopName?: string;
  policyGroupName?: string;
  systemDiskSize?: number;
  policyGroupId?: string;
  desktopStatus?: string;
  desktopType?: string;
  gpuCount?: number;
  memory?: number;
  gpuSpec?: string;
  directoryId?: string;
  imageId?: string;
  managementFlag?: string;
  dataDiskCategory?: string;
  systemDiskCategory?: string;
  officeSiteId?: string;
  networkInterfaceId?: string;
  dataDiskSize?: string;
  desktopId?: string;
  officeSiteName?: string;
  startTime?: string;
  directoryType?: string;
  cpu?: number;
  networkInterfaceIp?: string;
  expiredTime?: string;
  osType?: string;
  connectionStatus?: string;
  bundleId?: string;
  officeSiteType?: string;
  disks?: DescribeDesktopsResponseBodyDesktopsDisks[];
  tags?: DescribeDesktopsResponseBodyDesktopsTags[];
  sessions?: DescribeDesktopsResponseBodyDesktopsSessions[];
  endUserIds?: string[];
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      chargeType: 'ChargeType',
      desktopName: 'DesktopName',
      policyGroupName: 'PolicyGroupName',
      systemDiskSize: 'SystemDiskSize',
      policyGroupId: 'PolicyGroupId',
      desktopStatus: 'DesktopStatus',
      desktopType: 'DesktopType',
      gpuCount: 'GpuCount',
      memory: 'Memory',
      gpuSpec: 'GpuSpec',
      directoryId: 'DirectoryId',
      imageId: 'ImageId',
      managementFlag: 'ManagementFlag',
      dataDiskCategory: 'DataDiskCategory',
      systemDiskCategory: 'SystemDiskCategory',
      officeSiteId: 'OfficeSiteId',
      networkInterfaceId: 'NetworkInterfaceId',
      dataDiskSize: 'DataDiskSize',
      desktopId: 'DesktopId',
      officeSiteName: 'OfficeSiteName',
      startTime: 'StartTime',
      directoryType: 'DirectoryType',
      cpu: 'Cpu',
      networkInterfaceIp: 'NetworkInterfaceIp',
      expiredTime: 'ExpiredTime',
      osType: 'OsType',
      connectionStatus: 'ConnectionStatus',
      bundleId: 'BundleId',
      officeSiteType: 'OfficeSiteType',
      disks: 'Disks',
      tags: 'Tags',
      sessions: 'Sessions',
      endUserIds: 'EndUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      chargeType: 'string',
      desktopName: 'string',
      policyGroupName: 'string',
      systemDiskSize: 'number',
      policyGroupId: 'string',
      desktopStatus: 'string',
      desktopType: 'string',
      gpuCount: 'number',
      memory: 'number',
      gpuSpec: 'string',
      directoryId: 'string',
      imageId: 'string',
      managementFlag: 'string',
      dataDiskCategory: 'string',
      systemDiskCategory: 'string',
      officeSiteId: 'string',
      networkInterfaceId: 'string',
      dataDiskSize: 'string',
      desktopId: 'string',
      officeSiteName: 'string',
      startTime: 'string',
      directoryType: 'string',
      cpu: 'number',
      networkInterfaceIp: 'string',
      expiredTime: 'string',
      osType: 'string',
      connectionStatus: 'string',
      bundleId: 'string',
      officeSiteType: 'string',
      disks: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsDisks },
      tags: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsTags },
      sessions: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsSessions },
      endUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsInGroupResponseBodyPaidDesktops extends $tea.Model {
  endUserId?: string;
  desktopStatus?: string;
  desktopName?: string;
  connectionStatus?: string;
  desktopId?: string;
  endUserName?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      desktopStatus: 'DesktopStatus',
      desktopName: 'DesktopName',
      connectionStatus: 'ConnectionStatus',
      desktopId: 'DesktopId',
      endUserName: 'EndUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      desktopStatus: 'string',
      desktopName: 'string',
      connectionStatus: 'string',
      desktopId: 'string',
      endUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsInGroupResponseBodyPostPaidDesktops extends $tea.Model {
  createDuration?: string;
  endUserId?: string;
  desktopStatus?: string;
  createTime?: string;
  releaseTime?: string;
  desktopName?: string;
  connectionStatus?: string;
  desktopId?: string;
  endUserName?: string;
  static names(): { [key: string]: string } {
    return {
      createDuration: 'CreateDuration',
      endUserId: 'EndUserId',
      desktopStatus: 'DesktopStatus',
      createTime: 'CreateTime',
      releaseTime: 'ReleaseTime',
      desktopName: 'DesktopName',
      connectionStatus: 'ConnectionStatus',
      desktopId: 'DesktopId',
      endUserName: 'EndUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createDuration: 'string',
      endUserId: 'string',
      desktopStatus: 'string',
      createTime: 'string',
      releaseTime: 'string',
      desktopName: 'string',
      connectionStatus: 'string',
      desktopId: 'string',
      endUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesResponseBodyDesktopTypesAllowDiskSize extends $tea.Model {
  dataDiskSize?: number;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskSize: 'DataDiskSize',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskSize: 'number',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesResponseBodyDesktopTypes extends $tea.Model {
  systemDiskSize?: string;
  desktopTypeId?: string;
  dataDiskSize?: string;
  cpuCount?: string;
  gpuCount?: number;
  gpuSpec?: string;
  instanceTypeFamily?: string;
  memorySize?: string;
  allowDiskSize?: DescribeDesktopTypesResponseBodyDesktopTypesAllowDiskSize[];
  static names(): { [key: string]: string } {
    return {
      systemDiskSize: 'SystemDiskSize',
      desktopTypeId: 'DesktopTypeId',
      dataDiskSize: 'DataDiskSize',
      cpuCount: 'CpuCount',
      gpuCount: 'GpuCount',
      gpuSpec: 'GpuSpec',
      instanceTypeFamily: 'InstanceTypeFamily',
      memorySize: 'MemorySize',
      allowDiskSize: 'AllowDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDiskSize: 'string',
      desktopTypeId: 'string',
      dataDiskSize: 'string',
      cpuCount: 'string',
      gpuCount: 'number',
      gpuSpec: 'string',
      instanceTypeFamily: 'string',
      memorySize: 'string',
      allowDiskSize: { 'type': 'array', 'itemType': DescribeDesktopTypesResponseBodyDesktopTypesAllowDiskSize },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBodyDirectoriesADConnectors extends $tea.Model {
  connectorStatus?: string;
  vSwitchId?: string;
  ADConnectorAddress?: string;
  networkInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectorStatus: 'ConnectorStatus',
      vSwitchId: 'VSwitchId',
      ADConnectorAddress: 'ADConnectorAddress',
      networkInterfaceId: 'NetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorStatus: 'string',
      vSwitchId: 'string',
      ADConnectorAddress: 'string',
      networkInterfaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBodyDirectoriesLogs extends $tea.Model {
  step?: string;
  message?: string;
  timeStamp?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      step: 'Step',
      message: 'Message',
      timeStamp: 'TimeStamp',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      step: 'string',
      message: 'string',
      timeStamp: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseBodyDirectories extends $tea.Model {
  enableInternetAccess?: boolean;
  vpcId?: string;
  creationTime?: string;
  status?: string;
  domainPassword?: string;
  enableAdminAccess?: boolean;
  subDomainName?: string;
  domainUserName?: string;
  enableCrossDesktopAccess?: boolean;
  customSecurityGroupId?: string;
  desktopVpcEndpoint?: string;
  ssoEnabled?: boolean;
  domainName?: string;
  desktopAccessType?: string;
  mfaEnabled?: boolean;
  directoryType?: string;
  dnsUserName?: string;
  trustPassword?: string;
  name?: string;
  directoryId?: string;
  ADConnectors?: DescribeDirectoriesResponseBodyDirectoriesADConnectors[];
  logs?: DescribeDirectoriesResponseBodyDirectoriesLogs[];
  vSwitchIds?: string[];
  fileSystemIds?: string[];
  subDnsAddress?: string[];
  dnsAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      enableInternetAccess: 'EnableInternetAccess',
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      status: 'Status',
      domainPassword: 'DomainPassword',
      enableAdminAccess: 'EnableAdminAccess',
      subDomainName: 'SubDomainName',
      domainUserName: 'DomainUserName',
      enableCrossDesktopAccess: 'EnableCrossDesktopAccess',
      customSecurityGroupId: 'CustomSecurityGroupId',
      desktopVpcEndpoint: 'DesktopVpcEndpoint',
      ssoEnabled: 'SsoEnabled',
      domainName: 'DomainName',
      desktopAccessType: 'DesktopAccessType',
      mfaEnabled: 'MfaEnabled',
      directoryType: 'DirectoryType',
      dnsUserName: 'DnsUserName',
      trustPassword: 'TrustPassword',
      name: 'Name',
      directoryId: 'DirectoryId',
      ADConnectors: 'ADConnectors',
      logs: 'Logs',
      vSwitchIds: 'VSwitchIds',
      fileSystemIds: 'FileSystemIds',
      subDnsAddress: 'SubDnsAddress',
      dnsAddress: 'DnsAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInternetAccess: 'boolean',
      vpcId: 'string',
      creationTime: 'string',
      status: 'string',
      domainPassword: 'string',
      enableAdminAccess: 'boolean',
      subDomainName: 'string',
      domainUserName: 'string',
      enableCrossDesktopAccess: 'boolean',
      customSecurityGroupId: 'string',
      desktopVpcEndpoint: 'string',
      ssoEnabled: 'boolean',
      domainName: 'string',
      desktopAccessType: 'string',
      mfaEnabled: 'boolean',
      directoryType: 'string',
      dnsUserName: 'string',
      trustPassword: 'string',
      name: 'string',
      directoryId: 'string',
      ADConnectors: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectoriesADConnectors },
      logs: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectoriesLogs },
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      fileSystemIds: { 'type': 'array', 'itemType': 'string' },
      subDnsAddress: { 'type': 'array', 'itemType': 'string' },
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListRequestVulInfo extends $tea.Model {
  desktopId?: string;
  tag?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      tag: 'Tag',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      tag: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFrontVulPatchListResponseBodyFrontPatchListPatchList extends $tea.Model {
  name?: string;
  aliasName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      aliasName: 'AliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      aliasName: 'string',
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
  type?: string;
  nntfCount?: number;
  handledCount?: number;
  gmtLast?: string;
  tags?: string;
  laterCount?: number;
  aliasName?: string;
  name?: string;
  asapCount?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      nntfCount: 'NntfCount',
      handledCount: 'HandledCount',
      gmtLast: 'GmtLast',
      tags: 'Tags',
      laterCount: 'LaterCount',
      aliasName: 'AliasName',
      name: 'Name',
      asapCount: 'AsapCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      nntfCount: 'number',
      handledCount: 'number',
      gmtLast: 'string',
      tags: 'string',
      laterCount: 'number',
      aliasName: 'string',
      name: 'string',
      asapCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImages extends $tea.Model {
  creationTime?: string;
  status?: string;
  progress?: string;
  dataDiskSize?: number;
  imageType?: string;
  description?: string;
  size?: number;
  osType?: string;
  protocolType?: string;
  name?: string;
  imageId?: string;
  gpuCategory?: boolean;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      progress: 'Progress',
      dataDiskSize: 'DataDiskSize',
      imageType: 'ImageType',
      description: 'Description',
      size: 'Size',
      osType: 'OsType',
      protocolType: 'ProtocolType',
      name: 'Name',
      imageId: 'ImageId',
      gpuCategory: 'GpuCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      progress: 'string',
      dataDiskSize: 'number',
      imageType: 'string',
      description: 'string',
      size: 'number',
      osType: 'string',
      protocolType: 'string',
      name: 'string',
      imageId: 'string',
      gpuCategory: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocationsInvokeDesktops extends $tea.Model {
  creationTime?: string;
  invocationStatus?: string;
  finishTime?: string;
  updateTime?: string;
  repeats?: number;
  desktopId?: string;
  output?: string;
  dropped?: number;
  stopTime?: string;
  exitCode?: number;
  startTime?: string;
  errorInfo?: string;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      invocationStatus: 'InvocationStatus',
      finishTime: 'FinishTime',
      updateTime: 'UpdateTime',
      repeats: 'Repeats',
      desktopId: 'DesktopId',
      output: 'Output',
      dropped: 'Dropped',
      stopTime: 'StopTime',
      exitCode: 'ExitCode',
      startTime: 'StartTime',
      errorInfo: 'ErrorInfo',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      invocationStatus: 'string',
      finishTime: 'string',
      updateTime: 'string',
      repeats: 'number',
      desktopId: 'string',
      output: 'string',
      dropped: 'number',
      stopTime: 'string',
      exitCode: 'number',
      startTime: 'string',
      errorInfo: 'string',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocations extends $tea.Model {
  creationTime?: string;
  invocationStatus?: string;
  invokeId?: string;
  commandType?: string;
  commandContent?: string;
  invokeDesktops?: DescribeInvocationsResponseBodyInvocationsInvokeDesktops[];
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      invocationStatus: 'InvocationStatus',
      invokeId: 'InvokeId',
      commandType: 'CommandType',
      commandContent: 'CommandContent',
      invokeDesktops: 'InvokeDesktops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      invocationStatus: 'string',
      invokeId: 'string',
      commandType: 'string',
      commandContent: 'string',
      invokeDesktops: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvokeDesktops },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModificationPriceResponseBodyPriceInfoRules extends $tea.Model {
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModificationPriceResponseBodyPriceInfoPricePromotions extends $tea.Model {
  promotionDesc?: string;
  optionCode?: string;
  selected?: boolean;
  promotionId?: string;
  promotionName?: string;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'PromotionDesc',
      optionCode: 'OptionCode',
      selected: 'Selected',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      optionCode: 'string',
      selected: 'boolean',
      promotionId: 'string',
      promotionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModificationPriceResponseBodyPriceInfoPrice extends $tea.Model {
  originalPrice?: number;
  discountPrice?: number;
  currency?: string;
  tradePrice?: number;
  promotions?: DescribeModificationPriceResponseBodyPriceInfoPricePromotions[];
  static names(): { [key: string]: string } {
    return {
      originalPrice: 'OriginalPrice',
      discountPrice: 'DiscountPrice',
      currency: 'Currency',
      tradePrice: 'TradePrice',
      promotions: 'Promotions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPrice: 'number',
      discountPrice: 'number',
      currency: 'string',
      tradePrice: 'number',
      promotions: { 'type': 'array', 'itemType': DescribeModificationPriceResponseBodyPriceInfoPricePromotions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModificationPriceResponseBodyPriceInfo extends $tea.Model {
  rules?: DescribeModificationPriceResponseBodyPriceInfoRules[];
  price?: DescribeModificationPriceResponseBodyPriceInfoPrice;
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': DescribeModificationPriceResponseBodyPriceInfoRules },
      price: DescribeModificationPriceResponseBodyPriceInfoPrice,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNASFileSystemsResponseBodyFileSystems extends $tea.Model {
  capacity?: number;
  mountTargetStatus?: string;
  createTime?: string;
  officeSiteId?: string;
  supportAcl?: boolean;
  storageType?: string;
  officeSiteName?: string;
  regionId?: string;
  fileSystemId?: string;
  fileSystemType?: string;
  fileSystemName?: string;
  meteredSize?: number;
  mountTargetDomain?: string;
  description?: string;
  zoneId?: string;
  fileSystemStatus?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      mountTargetStatus: 'MountTargetStatus',
      createTime: 'CreateTime',
      officeSiteId: 'OfficeSiteId',
      supportAcl: 'SupportAcl',
      storageType: 'StorageType',
      officeSiteName: 'OfficeSiteName',
      regionId: 'RegionId',
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      fileSystemName: 'FileSystemName',
      meteredSize: 'MeteredSize',
      mountTargetDomain: 'MountTargetDomain',
      description: 'Description',
      zoneId: 'ZoneId',
      fileSystemStatus: 'FileSystemStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      mountTargetStatus: 'string',
      createTime: 'string',
      officeSiteId: 'string',
      supportAcl: 'boolean',
      storageType: 'string',
      officeSiteName: 'string',
      regionId: 'string',
      fileSystemId: 'string',
      fileSystemType: 'string',
      fileSystemName: 'string',
      meteredSize: 'number',
      mountTargetDomain: 'string',
      description: 'string',
      zoneId: 'string',
      fileSystemStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPackagesResponseBodyNetworkPackages extends $tea.Model {
  networkPackageId?: string;
  bandwidth?: number;
  expiredTime?: string;
  createTime?: string;
  officeSiteId?: string;
  internetChargeType?: string;
  networkPackageStatus?: string;
  officeSiteName?: string;
  eipAddresses?: string[];
  static names(): { [key: string]: string } {
    return {
      networkPackageId: 'NetworkPackageId',
      bandwidth: 'Bandwidth',
      expiredTime: 'ExpiredTime',
      createTime: 'CreateTime',
      officeSiteId: 'OfficeSiteId',
      internetChargeType: 'InternetChargeType',
      networkPackageStatus: 'NetworkPackageStatus',
      officeSiteName: 'OfficeSiteName',
      eipAddresses: 'EipAddresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageId: 'string',
      bandwidth: 'number',
      expiredTime: 'string',
      createTime: 'string',
      officeSiteId: 'string',
      internetChargeType: 'string',
      networkPackageStatus: 'string',
      officeSiteName: 'string',
      eipAddresses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBodyOfficeSitesADConnectors extends $tea.Model {
  connectorStatus?: string;
  vSwitchId?: string;
  ADConnectorAddress?: string;
  networkInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      connectorStatus: 'ConnectorStatus',
      vSwitchId: 'VSwitchId',
      ADConnectorAddress: 'ADConnectorAddress',
      networkInterfaceId: 'NetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorStatus: 'string',
      vSwitchId: 'string',
      ADConnectorAddress: 'string',
      networkInterfaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBodyOfficeSitesLogs extends $tea.Model {
  step?: string;
  message?: string;
  timeStamp?: string;
  level?: string;
  static names(): { [key: string]: string } {
    return {
      step: 'Step',
      message: 'Message',
      timeStamp: 'TimeStamp',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      step: 'string',
      message: 'string',
      timeStamp: 'string',
      level: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBodyOfficeSites extends $tea.Model {
  status?: string;
  creationTime?: string;
  vpcId?: string;
  enableAdminAccess?: boolean;
  enableCrossDesktopAccess?: boolean;
  desktopVpcEndpoint?: string;
  desktopAccessType?: string;
  domainName?: string;
  ssoEnabled?: boolean;
  cidrBlock?: string;
  bandwidth?: number;
  trustPassword?: string;
  name?: string;
  enableInternetAccess?: boolean;
  domainPassword?: string;
  customSecurityGroupId?: string;
  domainUserName?: string;
  subDomainName?: string;
  officeSiteId?: string;
  cenId?: string;
  mfaEnabled?: boolean;
  networkPackageId?: string;
  dnsUserName?: string;
  officeSiteType?: string;
  ADConnectors?: DescribeOfficeSitesResponseBodyOfficeSitesADConnectors[];
  logs?: DescribeOfficeSitesResponseBodyOfficeSitesLogs[];
  vSwitchIds?: string[];
  fileSystemIds?: string[];
  subDnsAddress?: string[];
  dnsAddress?: string[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      vpcId: 'VpcId',
      enableAdminAccess: 'EnableAdminAccess',
      enableCrossDesktopAccess: 'EnableCrossDesktopAccess',
      desktopVpcEndpoint: 'DesktopVpcEndpoint',
      desktopAccessType: 'DesktopAccessType',
      domainName: 'DomainName',
      ssoEnabled: 'SsoEnabled',
      cidrBlock: 'CidrBlock',
      bandwidth: 'Bandwidth',
      trustPassword: 'TrustPassword',
      name: 'Name',
      enableInternetAccess: 'EnableInternetAccess',
      domainPassword: 'DomainPassword',
      customSecurityGroupId: 'CustomSecurityGroupId',
      domainUserName: 'DomainUserName',
      subDomainName: 'SubDomainName',
      officeSiteId: 'OfficeSiteId',
      cenId: 'CenId',
      mfaEnabled: 'MfaEnabled',
      networkPackageId: 'NetworkPackageId',
      dnsUserName: 'DnsUserName',
      officeSiteType: 'OfficeSiteType',
      ADConnectors: 'ADConnectors',
      logs: 'Logs',
      vSwitchIds: 'VSwitchIds',
      fileSystemIds: 'FileSystemIds',
      subDnsAddress: 'SubDnsAddress',
      dnsAddress: 'DnsAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      vpcId: 'string',
      enableAdminAccess: 'boolean',
      enableCrossDesktopAccess: 'boolean',
      desktopVpcEndpoint: 'string',
      desktopAccessType: 'string',
      domainName: 'string',
      ssoEnabled: 'boolean',
      cidrBlock: 'string',
      bandwidth: 'number',
      trustPassword: 'string',
      name: 'string',
      enableInternetAccess: 'boolean',
      domainPassword: 'string',
      customSecurityGroupId: 'string',
      domainUserName: 'string',
      subDomainName: 'string',
      officeSiteId: 'string',
      cenId: 'string',
      mfaEnabled: 'boolean',
      networkPackageId: 'string',
      dnsUserName: 'string',
      officeSiteType: 'string',
      ADConnectors: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSitesADConnectors },
      logs: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSitesLogs },
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      fileSystemIds: { 'type': 'array', 'itemType': 'string' },
      subDnsAddress: { 'type': 'array', 'itemType': 'string' },
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules extends $tea.Model {
  type?: string;
  policy?: string;
  description?: string;
  portRange?: string;
  ipProtocol?: string;
  priority?: string;
  cidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      policy: 'Policy',
      description: 'Description',
      portRange: 'PortRange',
      ipProtocol: 'IpProtocol',
      priority: 'Priority',
      cidrIp: 'CidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      policy: 'string',
      description: 'string',
      portRange: 'string',
      ipProtocol: 'string',
      priority: 'string',
      cidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules extends $tea.Model {
  description?: string;
  cidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      cidrIp: 'CidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      cidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroups extends $tea.Model {
  policyStatus?: string;
  html5Access?: string;
  watermarkType?: string;
  preemptLogin?: string;
  watermarkCustomText?: string;
  clipboard?: string;
  domainList?: string;
  policyGroupId?: string;
  watermarkTransparency?: string;
  html5FileTransfer?: string;
  usbRedirect?: string;
  policyGroupType?: string;
  watermark?: string;
  visualQuality?: string;
  edsCount?: number;
  name?: string;
  localDrive?: string;
  authorizeSecurityPolicyRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules[];
  authorizeAccessPolicyRules?: DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules[];
  preemptLoginUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      policyStatus: 'PolicyStatus',
      html5Access: 'Html5Access',
      watermarkType: 'WatermarkType',
      preemptLogin: 'PreemptLogin',
      watermarkCustomText: 'WatermarkCustomText',
      clipboard: 'Clipboard',
      domainList: 'DomainList',
      policyGroupId: 'PolicyGroupId',
      watermarkTransparency: 'WatermarkTransparency',
      html5FileTransfer: 'Html5FileTransfer',
      usbRedirect: 'UsbRedirect',
      policyGroupType: 'PolicyGroupType',
      watermark: 'Watermark',
      visualQuality: 'VisualQuality',
      edsCount: 'EdsCount',
      name: 'Name',
      localDrive: 'LocalDrive',
      authorizeSecurityPolicyRules: 'AuthorizeSecurityPolicyRules',
      authorizeAccessPolicyRules: 'AuthorizeAccessPolicyRules',
      preemptLoginUsers: 'PreemptLoginUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyStatus: 'string',
      html5Access: 'string',
      watermarkType: 'string',
      preemptLogin: 'string',
      watermarkCustomText: 'string',
      clipboard: 'string',
      domainList: 'string',
      policyGroupId: 'string',
      watermarkTransparency: 'string',
      html5FileTransfer: 'string',
      usbRedirect: 'string',
      policyGroupType: 'string',
      watermark: 'string',
      visualQuality: 'string',
      edsCount: 'number',
      name: 'string',
      localDrive: 'string',
      authorizeSecurityPolicyRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeSecurityPolicyRules },
      authorizeAccessPolicyRules: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseBodyDescribePolicyGroupsAuthorizeAccessPolicyRules },
      preemptLoginUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostPaidDesktopBillsResponseBodyBills extends $tea.Model {
  billId?: string;
  discountPrice?: string;
  product?: string;
  priceUnit?: string;
  cashPayment?: string;
  payment?: string;
  originalPrice?: string;
  instanceId?: string;
  productDetail?: string;
  usage?: string;
  goldNote?: string;
  usageUnit?: string;
  price?: string;
  billStartTime?: string;
  billType?: string;
  resourceGroupId?: string;
  chargeItem?: string;
  resourceGroupName?: string;
  consumeTime?: string;
  consumeType?: string;
  billEndTime?: string;
  static names(): { [key: string]: string } {
    return {
      billId: 'BillId',
      discountPrice: 'DiscountPrice',
      product: 'Product',
      priceUnit: 'PriceUnit',
      cashPayment: 'CashPayment',
      payment: 'Payment',
      originalPrice: 'OriginalPrice',
      instanceId: 'InstanceId',
      productDetail: 'ProductDetail',
      usage: 'Usage',
      goldNote: 'GoldNote',
      usageUnit: 'UsageUnit',
      price: 'Price',
      billStartTime: 'BillStartTime',
      billType: 'BillType',
      resourceGroupId: 'ResourceGroupId',
      chargeItem: 'ChargeItem',
      resourceGroupName: 'ResourceGroupName',
      consumeTime: 'ConsumeTime',
      consumeType: 'ConsumeType',
      billEndTime: 'BillEndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billId: 'string',
      discountPrice: 'string',
      product: 'string',
      priceUnit: 'string',
      cashPayment: 'string',
      payment: 'string',
      originalPrice: 'string',
      instanceId: 'string',
      productDetail: 'string',
      usage: 'string',
      goldNote: 'string',
      usageUnit: 'string',
      price: 'string',
      billStartTime: 'string',
      billType: 'string',
      resourceGroupId: 'string',
      chargeItem: 'string',
      resourceGroupName: 'string',
      consumeTime: 'string',
      consumeType: 'string',
      billEndTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoRules extends $tea.Model {
  description?: string;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ruleId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoPricePromotions extends $tea.Model {
  promotionDesc?: string;
  optionCode?: string;
  selected?: boolean;
  promotionId?: string;
  promotionName?: string;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'PromotionDesc',
      optionCode: 'OptionCode',
      selected: 'Selected',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      optionCode: 'string',
      selected: 'boolean',
      promotionId: 'string',
      promotionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfoPrice extends $tea.Model {
  originalPrice?: number;
  discountPrice?: number;
  currency?: string;
  tradePrice?: number;
  promotions?: DescribePriceResponseBodyPriceInfoPricePromotions[];
  static names(): { [key: string]: string } {
    return {
      originalPrice: 'OriginalPrice',
      discountPrice: 'DiscountPrice',
      currency: 'Currency',
      tradePrice: 'TradePrice',
      promotions: 'Promotions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalPrice: 'number',
      discountPrice: 'number',
      currency: 'string',
      tradePrice: 'number',
      promotions: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoPricePromotions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPriceInfo extends $tea.Model {
  rules?: DescribePriceResponseBodyPriceInfoRules[];
  price?: DescribePriceResponseBodyPriceInfoPrice;
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
      price: 'Price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': DescribePriceResponseBodyPriceInfoRules },
      price: DescribePriceResponseBodyPriceInfoPrice,
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

export class DescribeScaleStrategysResponseBodyScaleStrategys extends $tea.Model {
  scaleStrategyId?: string;
  maxDesktopsCount?: number;
  maxAvailableDesktopsCount?: number;
  scaleStrategyName?: string;
  scaleStrategyType?: string;
  minDesktopsCount?: number;
  minAvailableDesktopsCount?: number;
  scaleStep?: number;
  static names(): { [key: string]: string } {
    return {
      scaleStrategyId: 'ScaleStrategyId',
      maxDesktopsCount: 'MaxDesktopsCount',
      maxAvailableDesktopsCount: 'MaxAvailableDesktopsCount',
      scaleStrategyName: 'ScaleStrategyName',
      scaleStrategyType: 'ScaleStrategyType',
      minDesktopsCount: 'MinDesktopsCount',
      minAvailableDesktopsCount: 'MinAvailableDesktopsCount',
      scaleStep: 'ScaleStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleStrategyId: 'string',
      maxDesktopsCount: 'number',
      maxAvailableDesktopsCount: 'number',
      scaleStrategyName: 'string',
      scaleStrategyType: 'string',
      minDesktopsCount: 'number',
      minAvailableDesktopsCount: 'number',
      scaleStep: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationsResponseBodySecurityEventOperations extends $tea.Model {
  operationParams?: string;
  operationCode?: string;
  userCanOperate?: boolean;
  static names(): { [key: string]: string } {
    return {
      operationParams: 'OperationParams',
      operationCode: 'OperationCode',
      userCanOperate: 'UserCanOperate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationParams: 'string',
      operationCode: 'string',
      userCanOperate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventOperationStatusResponseBodySecurityEventOperationStatuses extends $tea.Model {
  status?: string;
  securityEventId?: number;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      securityEventId: 'SecurityEventId',
      errorCode: 'ErrorCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      securityEventId: 'number',
      errorCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseBodySnapshots extends $tea.Model {
  creationTime?: string;
  status?: string;
  snapshotType?: string;
  snapshotName?: string;
  progress?: string;
  description?: string;
  snapshotId?: string;
  remainTime?: number;
  sourceDiskSize?: string;
  sourceDiskType?: string;
  desktopId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      status: 'Status',
      snapshotType: 'SnapshotType',
      snapshotName: 'SnapshotName',
      progress: 'Progress',
      description: 'Description',
      snapshotId: 'SnapshotId',
      remainTime: 'RemainTime',
      sourceDiskSize: 'SourceDiskSize',
      sourceDiskType: 'SourceDiskType',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      status: 'string',
      snapshotType: 'string',
      snapshotName: 'string',
      progress: 'string',
      description: 'string',
      snapshotId: 'string',
      remainTime: 'number',
      sourceDiskSize: 'string',
      sourceDiskType: 'string',
      desktopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventQuaraFilesResponseBodyQuaraFiles extends $tea.Model {
  status?: string;
  eventName?: string;
  eventType?: string;
  path?: string;
  desktopName?: string;
  md5?: string;
  tag?: string;
  desktopId?: string;
  id?: number;
  modifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      eventName: 'EventName',
      eventType: 'EventType',
      path: 'Path',
      desktopName: 'DesktopName',
      md5: 'Md5',
      tag: 'Tag',
      desktopId: 'DesktopId',
      id: 'Id',
      modifyTime: 'ModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      eventName: 'string',
      eventType: 'string',
      path: 'string',
      desktopName: 'string',
      md5: 'string',
      tag: 'string',
      desktopId: 'string',
      id: 'number',
      modifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBodySuspEventsDetails extends $tea.Model {
  type?: string;
  value?: string;
  nameDisplay?: string;
  name?: string;
  valueDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      nameDisplay: 'NameDisplay',
      name: 'Name',
      valueDisplay: 'ValueDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
      nameDisplay: 'string',
      name: 'string',
      valueDisplay: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsResponseBodySuspEvents extends $tea.Model {
  dataSource?: string;
  eventSubType?: string;
  desktopName?: string;
  desktopId?: string;
  occurrenceTime?: string;
  alarmEventTypeDisplay?: string;
  alarmUniqueInfo?: string;
  desc?: string;
  alarmEventNameDisplay?: string;
  canCancelFault?: boolean;
  lastTime?: string;
  operateMsg?: string;
  canBeDealOnLine?: string;
  alarmEventType?: string;
  eventStatus?: number;
  operateErrorCode?: string;
  alarmEventName?: string;
  name?: string;
  uniqueInfo?: string;
  level?: string;
  id?: number;
  details?: DescribeSuspEventsResponseBodySuspEventsDetails[];
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      eventSubType: 'EventSubType',
      desktopName: 'DesktopName',
      desktopId: 'DesktopId',
      occurrenceTime: 'OccurrenceTime',
      alarmEventTypeDisplay: 'AlarmEventTypeDisplay',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      desc: 'Desc',
      alarmEventNameDisplay: 'AlarmEventNameDisplay',
      canCancelFault: 'CanCancelFault',
      lastTime: 'LastTime',
      operateMsg: 'OperateMsg',
      canBeDealOnLine: 'CanBeDealOnLine',
      alarmEventType: 'AlarmEventType',
      eventStatus: 'EventStatus',
      operateErrorCode: 'OperateErrorCode',
      alarmEventName: 'AlarmEventName',
      name: 'Name',
      uniqueInfo: 'UniqueInfo',
      level: 'Level',
      id: 'Id',
      details: 'Details',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: 'string',
      eventSubType: 'string',
      desktopName: 'string',
      desktopId: 'string',
      occurrenceTime: 'string',
      alarmEventTypeDisplay: 'string',
      alarmUniqueInfo: 'string',
      desc: 'string',
      alarmEventNameDisplay: 'string',
      canCancelFault: 'boolean',
      lastTime: 'string',
      operateMsg: 'string',
      canBeDealOnLine: 'string',
      alarmEventType: 'string',
      eventStatus: 'number',
      operateErrorCode: 'string',
      alarmEventName: 'string',
      name: 'string',
      uniqueInfo: 'string',
      level: 'string',
      id: 'number',
      details: { 'type': 'array', 'itemType': DescribeSuspEventsResponseBodySuspEventsDetails },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConnectionRecordsResponseBodyConnectionRecords extends $tea.Model {
  connectionRecordId?: string;
  connectStartTime?: string;
  desktopName?: string;
  connectDuration?: string;
  connectEndTime?: string;
  desktopId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionRecordId: 'ConnectionRecordId',
      connectStartTime: 'ConnectStartTime',
      desktopName: 'DesktopName',
      connectDuration: 'ConnectDuration',
      connectEndTime: 'ConnectEndTime',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionRecordId: 'string',
      connectStartTime: 'string',
      desktopName: 'string',
      connectDuration: 'string',
      connectEndTime: 'string',
      desktopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUsersInGroupResponseBodyEndUsers extends $tea.Model {
  endUserId?: string;
  endUserEmail?: string;
  desktopName?: string;
  connectionStatus?: string;
  desktopId?: string;
  endUserType?: string;
  endUserPhone?: string;
  endUserName?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      endUserEmail: 'EndUserEmail',
      desktopName: 'DesktopName',
      connectionStatus: 'ConnectionStatus',
      desktopId: 'DesktopId',
      endUserType: 'EndUserType',
      endUserPhone: 'EndUserPhone',
      endUserName: 'EndUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      endUserEmail: 'string',
      desktopName: 'string',
      connectionStatus: 'string',
      desktopId: 'string',
      endUserType: 'string',
      endUserPhone: 'string',
      endUserName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualMFADevicesResponseBodyVirtualMFADevices extends $tea.Model {
  serialNumber?: string;
  gmtUnlock?: string;
  endUserId?: string;
  consecutiveFails?: number;
  officeSiteId?: string;
  status?: string;
  directoryId?: string;
  gmtEnabled?: string;
  static names(): { [key: string]: string } {
    return {
      serialNumber: 'SerialNumber',
      gmtUnlock: 'GmtUnlock',
      endUserId: 'EndUserId',
      consecutiveFails: 'ConsecutiveFails',
      officeSiteId: 'OfficeSiteId',
      status: 'status',
      directoryId: 'DirectoryId',
      gmtEnabled: 'GmtEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serialNumber: 'string',
      gmtUnlock: 'string',
      endUserId: 'string',
      consecutiveFails: 'number',
      officeSiteId: 'string',
      status: 'string',
      directoryId: 'string',
      gmtEnabled: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulDetailsResponseBodyCves extends $tea.Model {
  cveId?: string;
  summary?: string;
  title?: string;
  cvssScore?: string;
  static names(): { [key: string]: string } {
    return {
      cveId: 'CveId',
      summary: 'Summary',
      title: 'Title',
      cvssScore: 'CvssScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveId: 'string',
      summary: 'string',
      title: 'string',
      cvssScore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulListResponseBodyVulRecordsExtendContentJsonRpmEntityList extends $tea.Model {
  path?: string;
  updateCmd?: string;
  name?: string;
  fullVersion?: string;
  matchDetail?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'Path',
      updateCmd: 'UpdateCmd',
      name: 'Name',
      fullVersion: 'FullVersion',
      matchDetail: 'MatchDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      updateCmd: 'string',
      name: 'string',
      fullVersion: 'string',
      matchDetail: 'string',
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
  status?: number;
  type?: string;
  modifyTs?: number;
  desktopName?: string;
  resultCode?: string;
  tag?: string;
  desktopId?: string;
  related?: string;
  lastTs?: number;
  firstTs?: number;
  necessity?: string;
  repairTs?: number;
  online?: boolean;
  resultMessage?: string;
  osVersion?: string;
  aliasName?: string;
  name?: string;
  extendContentJson?: DescribeVulListResponseBodyVulRecordsExtendContentJson;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      modifyTs: 'ModifyTs',
      desktopName: 'DesktopName',
      resultCode: 'ResultCode',
      tag: 'Tag',
      desktopId: 'DesktopId',
      related: 'Related',
      lastTs: 'LastTs',
      firstTs: 'FirstTs',
      necessity: 'Necessity',
      repairTs: 'RepairTs',
      online: 'Online',
      resultMessage: 'ResultMessage',
      osVersion: 'OsVersion',
      aliasName: 'AliasName',
      name: 'Name',
      extendContentJson: 'ExtendContentJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      type: 'string',
      modifyTs: 'number',
      desktopName: 'string',
      resultCode: 'string',
      tag: 'string',
      desktopId: 'string',
      related: 'string',
      lastTs: 'number',
      firstTs: 'number',
      necessity: 'string',
      repairTs: 'number',
      online: 'boolean',
      resultMessage: 'string',
      osVersion: 'string',
      aliasName: 'string',
      name: 'string',
      extendContentJson: DescribeVulListResponseBodyVulRecordsExtendContentJson,
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

export class GetDesktopGroupDetailResponseBodyDesktops extends $tea.Model {
  creationTime?: string;
  payType?: string;
  policyGroupName?: string;
  creator?: string;
  maxDesktopsCount?: number;
  allowAutoSetup?: number;
  resType?: number;
  systemDiskSize?: number;
  policyGroupId?: string;
  ownBundleId?: string;
  gpuCount?: number;
  allowBufferCount?: number;
  memory?: number;
  gpuSpec?: string;
  directoryId?: string;
  ownBundleName?: string;
  dataDiskCategory?: string;
  desktopGroupName?: string;
  systemDiskCategory?: string;
  officeSiteId?: string;
  keepDuration?: number;
  minDesktopsCount?: number;
  dataDiskSize?: string;
  desktopGroupId?: string;
  officeSiteName?: string;
  directoryType?: string;
  cpu?: number;
  expiredTime?: string;
  comments?: string;
  officeSiteType?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      payType: 'PayType',
      policyGroupName: 'PolicyGroupName',
      creator: 'Creator',
      maxDesktopsCount: 'MaxDesktopsCount',
      allowAutoSetup: 'AllowAutoSetup',
      resType: 'ResType',
      systemDiskSize: 'SystemDiskSize',
      policyGroupId: 'PolicyGroupId',
      ownBundleId: 'OwnBundleId',
      gpuCount: 'GpuCount',
      allowBufferCount: 'AllowBufferCount',
      memory: 'Memory',
      gpuSpec: 'GpuSpec',
      directoryId: 'DirectoryId',
      ownBundleName: 'OwnBundleName',
      dataDiskCategory: 'DataDiskCategory',
      desktopGroupName: 'DesktopGroupName',
      systemDiskCategory: 'SystemDiskCategory',
      officeSiteId: 'OfficeSiteId',
      keepDuration: 'KeepDuration',
      minDesktopsCount: 'MinDesktopsCount',
      dataDiskSize: 'DataDiskSize',
      desktopGroupId: 'DesktopGroupId',
      officeSiteName: 'OfficeSiteName',
      directoryType: 'DirectoryType',
      cpu: 'Cpu',
      expiredTime: 'ExpiredTime',
      comments: 'Comments',
      officeSiteType: 'OfficeSiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      payType: 'string',
      policyGroupName: 'string',
      creator: 'string',
      maxDesktopsCount: 'number',
      allowAutoSetup: 'number',
      resType: 'number',
      systemDiskSize: 'number',
      policyGroupId: 'string',
      ownBundleId: 'string',
      gpuCount: 'number',
      allowBufferCount: 'number',
      memory: 'number',
      gpuSpec: 'string',
      directoryId: 'string',
      ownBundleName: 'string',
      dataDiskCategory: 'string',
      desktopGroupName: 'string',
      systemDiskCategory: 'string',
      officeSiteId: 'string',
      keepDuration: 'number',
      minDesktopsCount: 'number',
      dataDiskSize: 'string',
      desktopGroupId: 'string',
      officeSiteName: 'string',
      directoryType: 'string',
      cpu: 'number',
      expiredTime: 'string',
      comments: 'string',
      officeSiteType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HandleSecurityEventsRequestSecurityEvent extends $tea.Model {
  securityEventId?: string;
  desktopId?: string;
  static names(): { [key: string]: string } {
    return {
      securityEventId: 'SecurityEventId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityEventId: 'string',
      desktopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoryUsersResponseBodyUsers extends $tea.Model {
  endUser?: string;
  static names(): { [key: string]: string } {
    return {
      endUser: 'EndUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUser: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteOverviewResponseBodyOfficeSiteOverviewResults extends $tea.Model {
  officeSiteStatus?: string;
  totalEdsCount?: number;
  willExpiredEdsCount?: number;
  officeSiteId?: string;
  runningEdsCount?: number;
  officeSiteName?: string;
  hasExpiredEdsCount?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteStatus: 'OfficeSiteStatus',
      totalEdsCount: 'TotalEdsCount',
      willExpiredEdsCount: 'WillExpiredEdsCount',
      officeSiteId: 'OfficeSiteId',
      runningEdsCount: 'RunningEdsCount',
      officeSiteName: 'OfficeSiteName',
      hasExpiredEdsCount: 'HasExpiredEdsCount',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteStatus: 'string',
      totalEdsCount: 'number',
      willExpiredEdsCount: 'number',
      officeSiteId: 'string',
      runningEdsCount: 'number',
      officeSiteName: 'string',
      hasExpiredEdsCount: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeSiteUsersResponseBodyUsers extends $tea.Model {
  endUser?: string;
  static names(): { [key: string]: string } {
    return {
      endUser: 'EndUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  tagValue?: string;
  resourceType?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      resourceType: 'string',
      resourceId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopPolicysResponseBodyResults extends $tea.Model {
  success?: string;
  code?: string;
  message?: string;
  desktopId?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      code: 'Code',
      message: 'Message',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'string',
      code: 'string',
      message: 'string',
      desktopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopsPolicyGroupResponseBodyModifyResults extends $tea.Model {
  code?: string;
  message?: string;
  desktopId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      desktopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOperateVulRequestVulInfo extends $tea.Model {
  desktopId?: string;
  tag?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      tag: 'Tag',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      tag: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestAuthorizeSecurityPolicyRule extends $tea.Model {
  type?: string;
  policy?: string;
  portRange?: string;
  description?: string;
  ipProtocol?: string;
  priority?: string;
  cidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      policy: 'Policy',
      portRange: 'PortRange',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      priority: 'Priority',
      cidrIp: 'CidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      policy: 'string',
      portRange: 'string',
      description: 'string',
      ipProtocol: 'string',
      priority: 'string',
      cidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestRevokeSecurityPolicyRule extends $tea.Model {
  type?: string;
  policy?: string;
  portRange?: string;
  description?: string;
  ipProtocol?: string;
  priority?: string;
  cidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      policy: 'Policy',
      portRange: 'PortRange',
      description: 'Description',
      ipProtocol: 'IpProtocol',
      priority: 'Priority',
      cidrIp: 'CidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      policy: 'string',
      portRange: 'string',
      description: 'string',
      ipProtocol: 'string',
      priority: 'string',
      cidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestAuthorizeAccessPolicyRule extends $tea.Model {
  description?: string;
  cidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      cidrIp: 'CidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      cidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupRequestRevokeAccessPolicyRule extends $tea.Model {
  description?: string;
  cidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      cidrIp: 'CidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      cidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDesktopsResponseBodyRebuildResults extends $tea.Model {
  code?: string;
  message?: string;
  desktopId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      desktopId: 'string',
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

  async addUserToDesktopGroupWithOptions(request: AddUserToDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddUserToDesktopGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddUserToDesktopGroupResponse>(await this.doRPCRequest("AddUserToDesktopGroup", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new AddUserToDesktopGroupResponse({}));
  }

  async addUserToDesktopGroup(request: AddUserToDesktopGroupRequest): Promise<AddUserToDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToDesktopGroupWithOptions(request, runtime);
  }

  async addUserToSecurityCenterWhiteListWithOptions(request: AddUserToSecurityCenterWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<AddUserToSecurityCenterWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddUserToSecurityCenterWhiteListResponse>(await this.doRPCRequest("AddUserToSecurityCenterWhiteList", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new AddUserToSecurityCenterWhiteListResponse({}));
  }

  async addUserToSecurityCenterWhiteList(request: AddUserToSecurityCenterWhiteListRequest): Promise<AddUserToSecurityCenterWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUserToSecurityCenterWhiteListWithOptions(request, runtime);
  }

  async attachCenWithOptions(request: AttachCenRequest, runtime: $Util.RuntimeOptions): Promise<AttachCenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachCenResponse>(await this.doRPCRequest("AttachCen", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new AttachCenResponse({}));
  }

  async attachCen(request: AttachCenRequest): Promise<AttachCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachCenWithOptions(request, runtime);
  }

  async checkUserInSecurityCenterWhiteListWithOptions(request: CheckUserInSecurityCenterWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<CheckUserInSecurityCenterWhiteListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CheckUserInSecurityCenterWhiteListResponse>(await this.doRPCRequest("CheckUserInSecurityCenterWhiteList", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CheckUserInSecurityCenterWhiteListResponse({}));
  }

  async checkUserInSecurityCenterWhiteList(request: CheckUserInSecurityCenterWhiteListRequest): Promise<CheckUserInSecurityCenterWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkUserInSecurityCenterWhiteListWithOptions(request, runtime);
  }

  async clonePolicyGroupWithOptions(request: ClonePolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<ClonePolicyGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ClonePolicyGroupResponse>(await this.doRPCRequest("ClonePolicyGroup", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ClonePolicyGroupResponse({}));
  }

  async clonePolicyGroup(request: ClonePolicyGroupRequest): Promise<ClonePolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clonePolicyGroupWithOptions(request, runtime);
  }

  async createADConnectorDirectoryWithOptions(request: CreateADConnectorDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateADConnectorDirectoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateADConnectorDirectoryResponse>(await this.doRPCRequest("CreateADConnectorDirectory", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateADConnectorDirectoryResponse({}));
  }

  async createADConnectorDirectory(request: CreateADConnectorDirectoryRequest): Promise<CreateADConnectorDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createADConnectorDirectoryWithOptions(request, runtime);
  }

  async createADConnectorOfficeSiteWithOptions(request: CreateADConnectorOfficeSiteRequest, runtime: $Util.RuntimeOptions): Promise<CreateADConnectorOfficeSiteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateADConnectorOfficeSiteResponse>(await this.doRPCRequest("CreateADConnectorOfficeSite", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateADConnectorOfficeSiteResponse({}));
  }

  async createADConnectorOfficeSite(request: CreateADConnectorOfficeSiteRequest): Promise<CreateADConnectorOfficeSiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createADConnectorOfficeSiteWithOptions(request, runtime);
  }

  async createBundleWithOptions(request: CreateBundleRequest, runtime: $Util.RuntimeOptions): Promise<CreateBundleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBundleResponse>(await this.doRPCRequest("CreateBundle", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBundleResponse({}));
  }

  async createBundle(request: CreateBundleRequest): Promise<CreateBundleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBundleWithOptions(request, runtime);
  }

  async createDesktopGroupWithOptions(request: CreateDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDesktopGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDesktopGroupResponse>(await this.doRPCRequest("CreateDesktopGroup", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDesktopGroupResponse({}));
  }

  async createDesktopGroup(request: CreateDesktopGroupRequest): Promise<CreateDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDesktopGroupWithOptions(request, runtime);
  }

  async createDesktopsWithOptions(request: CreateDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<CreateDesktopsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDesktopsResponse>(await this.doRPCRequest("CreateDesktops", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDesktopsResponse({}));
  }

  async createDesktops(request: CreateDesktopsRequest): Promise<CreateDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDesktopsWithOptions(request, runtime);
  }

  async createDesktopsLiteWithOptions(request: CreateDesktopsLiteRequest, runtime: $Util.RuntimeOptions): Promise<CreateDesktopsLiteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDesktopsLiteResponse>(await this.doRPCRequest("CreateDesktopsLite", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDesktopsLiteResponse({}));
  }

  async createDesktopsLite(request: CreateDesktopsLiteRequest): Promise<CreateDesktopsLiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDesktopsLiteWithOptions(request, runtime);
  }

  async createImageWithOptions(request: CreateImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateImageResponse>(await this.doRPCRequest("CreateImage", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateImageResponse({}));
  }

  async createImage(request: CreateImageRequest): Promise<CreateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageWithOptions(request, runtime);
  }

  async createNASFileSystemWithOptions(request: CreateNASFileSystemRequest, runtime: $Util.RuntimeOptions): Promise<CreateNASFileSystemResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateNASFileSystemResponse>(await this.doRPCRequest("CreateNASFileSystem", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateNASFileSystemResponse({}));
  }

  async createNASFileSystem(request: CreateNASFileSystemRequest): Promise<CreateNASFileSystemResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNASFileSystemWithOptions(request, runtime);
  }

  async createNetworkPackageWithOptions(request: CreateNetworkPackageRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkPackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateNetworkPackageResponse>(await this.doRPCRequest("CreateNetworkPackage", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateNetworkPackageResponse({}));
  }

  async createNetworkPackage(request: CreateNetworkPackageRequest): Promise<CreateNetworkPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkPackageWithOptions(request, runtime);
  }

  async createPolicyGroupWithOptions(request: CreatePolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreatePolicyGroupResponse>(await this.doRPCRequest("CreatePolicyGroup", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreatePolicyGroupResponse({}));
  }

  async createPolicyGroup(request: CreatePolicyGroupRequest): Promise<CreatePolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyGroupWithOptions(request, runtime);
  }

  async createRAMDirectoryWithOptions(request: CreateRAMDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateRAMDirectoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRAMDirectoryResponse>(await this.doRPCRequest("CreateRAMDirectory", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRAMDirectoryResponse({}));
  }

  async createRAMDirectory(request: CreateRAMDirectoryRequest): Promise<CreateRAMDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRAMDirectoryWithOptions(request, runtime);
  }

  async createScaleStrategyWithOptions(request: CreateScaleStrategyRequest, runtime: $Util.RuntimeOptions): Promise<CreateScaleStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateScaleStrategyResponse>(await this.doRPCRequest("CreateScaleStrategy", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateScaleStrategyResponse({}));
  }

  async createScaleStrategy(request: CreateScaleStrategyRequest): Promise<CreateScaleStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScaleStrategyWithOptions(request, runtime);
  }

  async createServiceLinkedRoleWithOptions(request: CreateServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServiceLinkedRoleResponse>(await this.doRPCRequest("CreateServiceLinkedRole", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServiceLinkedRoleResponse({}));
  }

  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  async createSimpleOfficeSiteWithOptions(request: CreateSimpleOfficeSiteRequest, runtime: $Util.RuntimeOptions): Promise<CreateSimpleOfficeSiteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSimpleOfficeSiteResponse>(await this.doRPCRequest("CreateSimpleOfficeSite", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSimpleOfficeSiteResponse({}));
  }

  async createSimpleOfficeSite(request: CreateSimpleOfficeSiteRequest): Promise<CreateSimpleOfficeSiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSimpleOfficeSiteWithOptions(request, runtime);
  }

  async createSnapshotWithOptions(request: CreateSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CreateSnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSnapshotResponse>(await this.doRPCRequest("CreateSnapshot", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSnapshotResponse({}));
  }

  async createSnapshot(request: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  async deleteBundlesWithOptions(request: DeleteBundlesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBundlesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBundlesResponse>(await this.doRPCRequest("DeleteBundles", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBundlesResponse({}));
  }

  async deleteBundles(request: DeleteBundlesRequest): Promise<DeleteBundlesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBundlesWithOptions(request, runtime);
  }

  async deleteDesktopGroupWithOptions(request: DeleteDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDesktopGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDesktopGroupResponse>(await this.doRPCRequest("DeleteDesktopGroup", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDesktopGroupResponse({}));
  }

  async deleteDesktopGroup(request: DeleteDesktopGroupRequest): Promise<DeleteDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDesktopGroupWithOptions(request, runtime);
  }

  async deleteDesktopsWithOptions(request: DeleteDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDesktopsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDesktopsResponse>(await this.doRPCRequest("DeleteDesktops", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDesktopsResponse({}));
  }

  async deleteDesktops(request: DeleteDesktopsRequest): Promise<DeleteDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDesktopsWithOptions(request, runtime);
  }

  async deleteDirectoriesWithOptions(request: DeleteDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDirectoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDirectoriesResponse>(await this.doRPCRequest("DeleteDirectories", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDirectoriesResponse({}));
  }

  async deleteDirectories(request: DeleteDirectoriesRequest): Promise<DeleteDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDirectoriesWithOptions(request, runtime);
  }

  async deleteImagesWithOptions(request: DeleteImagesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteImagesResponse>(await this.doRPCRequest("DeleteImages", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteImagesResponse({}));
  }

  async deleteImages(request: DeleteImagesRequest): Promise<DeleteImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImagesWithOptions(request, runtime);
  }

  async deleteNASFileSystemsWithOptions(request: DeleteNASFileSystemsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNASFileSystemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNASFileSystemsResponse>(await this.doRPCRequest("DeleteNASFileSystems", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNASFileSystemsResponse({}));
  }

  async deleteNASFileSystems(request: DeleteNASFileSystemsRequest): Promise<DeleteNASFileSystemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNASFileSystemsWithOptions(request, runtime);
  }

  async deleteNetworkPackagesWithOptions(request: DeleteNetworkPackagesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkPackagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteNetworkPackagesResponse>(await this.doRPCRequest("DeleteNetworkPackages", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteNetworkPackagesResponse({}));
  }

  async deleteNetworkPackages(request: DeleteNetworkPackagesRequest): Promise<DeleteNetworkPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkPackagesWithOptions(request, runtime);
  }

  async deleteOfficeSitesWithOptions(request: DeleteOfficeSitesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOfficeSitesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteOfficeSitesResponse>(await this.doRPCRequest("DeleteOfficeSites", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteOfficeSitesResponse({}));
  }

  async deleteOfficeSites(request: DeleteOfficeSitesRequest): Promise<DeleteOfficeSitesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOfficeSitesWithOptions(request, runtime);
  }

  async deletePolicyGroupsWithOptions(request: DeletePolicyGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeletePolicyGroupsResponse>(await this.doRPCRequest("DeletePolicyGroups", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeletePolicyGroupsResponse({}));
  }

  async deletePolicyGroups(request: DeletePolicyGroupsRequest): Promise<DeletePolicyGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyGroupsWithOptions(request, runtime);
  }

  async deleteScaleStrategyWithOptions(request: DeleteScaleStrategyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScaleStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteScaleStrategyResponse>(await this.doRPCRequest("DeleteScaleStrategy", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteScaleStrategyResponse({}));
  }

  async deleteScaleStrategy(request: DeleteScaleStrategyRequest): Promise<DeleteScaleStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScaleStrategyWithOptions(request, runtime);
  }

  async deleteSnapshotWithOptions(request: DeleteSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSnapshotResponse>(await this.doRPCRequest("DeleteSnapshot", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSnapshotResponse({}));
  }

  async deleteSnapshot(request: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  async deleteVirtualMFADeviceWithOptions(request: DeleteVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVirtualMFADeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteVirtualMFADeviceResponse>(await this.doRPCRequest("DeleteVirtualMFADevice", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteVirtualMFADeviceResponse({}));
  }

  async deleteVirtualMFADevice(request: DeleteVirtualMFADeviceRequest): Promise<DeleteVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVirtualMFADeviceWithOptions(request, runtime);
  }

  async describeAlarmEventStackInfoWithOptions(request: DescribeAlarmEventStackInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAlarmEventStackInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAlarmEventStackInfoResponse>(await this.doRPCRequest("DescribeAlarmEventStackInfo", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAlarmEventStackInfoResponse({}));
  }

  async describeAlarmEventStackInfo(request: DescribeAlarmEventStackInfoRequest): Promise<DescribeAlarmEventStackInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAlarmEventStackInfoWithOptions(request, runtime);
  }

  async describeBundlesWithOptions(request: DescribeBundlesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBundlesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeBundlesResponse>(await this.doRPCRequest("DescribeBundles", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeBundlesResponse({}));
  }

  async describeBundles(request: DescribeBundlesRequest): Promise<DescribeBundlesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBundlesWithOptions(request, runtime);
  }

  async describeCensWithOptions(request: DescribeCensRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCensResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCensResponse>(await this.doRPCRequest("DescribeCens", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCensResponse({}));
  }

  async describeCens(request: DescribeCensRequest): Promise<DescribeCensResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCensWithOptions(request, runtime);
  }

  async describeClientEventsWithOptions(request: DescribeClientEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeClientEventsResponse>(await this.doRPCRequest("DescribeClientEvents", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeClientEventsResponse({}));
  }

  async describeClientEvents(request: DescribeClientEventsRequest): Promise<DescribeClientEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientEventsWithOptions(request, runtime);
  }

  async describeDesktopIdsByVulNamesWithOptions(request: DescribeDesktopIdsByVulNamesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopIdsByVulNamesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDesktopIdsByVulNamesResponse>(await this.doRPCRequest("DescribeDesktopIdsByVulNames", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDesktopIdsByVulNamesResponse({}));
  }

  async describeDesktopIdsByVulNames(request: DescribeDesktopIdsByVulNamesRequest): Promise<DescribeDesktopIdsByVulNamesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopIdsByVulNamesWithOptions(request, runtime);
  }

  async describeDesktopPolicysWithOptions(request: DescribeDesktopPolicysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopPolicysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDesktopPolicysResponse>(await this.doRPCRequest("DescribeDesktopPolicys", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDesktopPolicysResponse({}));
  }

  async describeDesktopPolicys(request: DescribeDesktopPolicysRequest): Promise<DescribeDesktopPolicysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopPolicysWithOptions(request, runtime);
  }

  async describeDesktopsWithOptions(request: DescribeDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDesktopsResponse>(await this.doRPCRequest("DescribeDesktops", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDesktopsResponse({}));
  }

  async describeDesktops(request: DescribeDesktopsRequest): Promise<DescribeDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopsWithOptions(request, runtime);
  }

  async describeDesktopsInGroupWithOptions(request: DescribeDesktopsInGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopsInGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDesktopsInGroupResponse>(await this.doRPCRequest("DescribeDesktopsInGroup", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDesktopsInGroupResponse({}));
  }

  async describeDesktopsInGroup(request: DescribeDesktopsInGroupRequest): Promise<DescribeDesktopsInGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopsInGroupWithOptions(request, runtime);
  }

  async describeDesktopTypesWithOptions(request: DescribeDesktopTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopTypesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDesktopTypesResponse>(await this.doRPCRequest("DescribeDesktopTypes", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDesktopTypesResponse({}));
  }

  async describeDesktopTypes(request: DescribeDesktopTypesRequest): Promise<DescribeDesktopTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopTypesWithOptions(request, runtime);
  }

  async describeDirectoriesWithOptions(request: DescribeDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDirectoriesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDirectoriesResponse>(await this.doRPCRequest("DescribeDirectories", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDirectoriesResponse({}));
  }

  async describeDirectories(request: DescribeDirectoriesRequest): Promise<DescribeDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDirectoriesWithOptions(request, runtime);
  }

  async describeFrontVulPatchListWithOptions(request: DescribeFrontVulPatchListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFrontVulPatchListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFrontVulPatchListResponse>(await this.doRPCRequest("DescribeFrontVulPatchList", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFrontVulPatchListResponse({}));
  }

  async describeFrontVulPatchList(request: DescribeFrontVulPatchListRequest): Promise<DescribeFrontVulPatchListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFrontVulPatchListWithOptions(request, runtime);
  }

  async describeGroupedVulWithOptions(request: DescribeGroupedVulRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupedVulResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeGroupedVulResponse>(await this.doRPCRequest("DescribeGroupedVul", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeGroupedVulResponse({}));
  }

  async describeGroupedVul(request: DescribeGroupedVulRequest): Promise<DescribeGroupedVulResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupedVulWithOptions(request, runtime);
  }

  async describeImagesWithOptions(request: DescribeImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeImagesResponse>(await this.doRPCRequest("DescribeImages", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeImagesResponse({}));
  }

  async describeImages(request: DescribeImagesRequest): Promise<DescribeImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImagesWithOptions(request, runtime);
  }

  async describeInvocationsWithOptions(request: DescribeInvocationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInvocationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInvocationsResponse>(await this.doRPCRequest("DescribeInvocations", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInvocationsResponse({}));
  }

  async describeInvocations(request: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  async describeModificationPriceWithOptions(request: DescribeModificationPriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeModificationPriceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeModificationPriceResponse>(await this.doRPCRequest("DescribeModificationPrice", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeModificationPriceResponse({}));
  }

  async describeModificationPrice(request: DescribeModificationPriceRequest): Promise<DescribeModificationPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeModificationPriceWithOptions(request, runtime);
  }

  async describeNASFileSystemsWithOptions(request: DescribeNASFileSystemsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNASFileSystemsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNASFileSystemsResponse>(await this.doRPCRequest("DescribeNASFileSystems", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNASFileSystemsResponse({}));
  }

  async describeNASFileSystems(request: DescribeNASFileSystemsRequest): Promise<DescribeNASFileSystemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNASFileSystemsWithOptions(request, runtime);
  }

  async describeNetworkPackagesWithOptions(request: DescribeNetworkPackagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkPackagesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeNetworkPackagesResponse>(await this.doRPCRequest("DescribeNetworkPackages", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeNetworkPackagesResponse({}));
  }

  async describeNetworkPackages(request: DescribeNetworkPackagesRequest): Promise<DescribeNetworkPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkPackagesWithOptions(request, runtime);
  }

  async describeOfficeSitesWithOptions(request: DescribeOfficeSitesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOfficeSitesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOfficeSitesResponse>(await this.doRPCRequest("DescribeOfficeSites", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOfficeSitesResponse({}));
  }

  async describeOfficeSites(request: DescribeOfficeSitesRequest): Promise<DescribeOfficeSitesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOfficeSitesWithOptions(request, runtime);
  }

  async describePolicyGroupsWithOptions(request: DescribePolicyGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyGroupsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePolicyGroupsResponse>(await this.doRPCRequest("DescribePolicyGroups", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePolicyGroupsResponse({}));
  }

  async describePolicyGroups(request: DescribePolicyGroupsRequest): Promise<DescribePolicyGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyGroupsWithOptions(request, runtime);
  }

  async describePostPaidDesktopBillsWithOptions(request: DescribePostPaidDesktopBillsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePostPaidDesktopBillsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePostPaidDesktopBillsResponse>(await this.doRPCRequest("DescribePostPaidDesktopBills", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePostPaidDesktopBillsResponse({}));
  }

  async describePostPaidDesktopBills(request: DescribePostPaidDesktopBillsRequest): Promise<DescribePostPaidDesktopBillsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePostPaidDesktopBillsWithOptions(request, runtime);
  }

  async describePriceWithOptions(request: DescribePriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePriceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribePriceResponse>(await this.doRPCRequest("DescribePrice", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribePriceResponse({}));
  }

  async describePrice(request: DescribePriceRequest): Promise<DescribePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeScaleStrategysWithOptions(request: DescribeScaleStrategysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScaleStrategysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScaleStrategysResponse>(await this.doRPCRequest("DescribeScaleStrategys", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScaleStrategysResponse({}));
  }

  async describeScaleStrategys(request: DescribeScaleStrategysRequest): Promise<DescribeScaleStrategysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScaleStrategysWithOptions(request, runtime);
  }

  async describeScanTaskProgressWithOptions(request: DescribeScanTaskProgressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScanTaskProgressResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeScanTaskProgressResponse>(await this.doRPCRequest("DescribeScanTaskProgress", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeScanTaskProgressResponse({}));
  }

  async describeScanTaskProgress(request: DescribeScanTaskProgressRequest): Promise<DescribeScanTaskProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScanTaskProgressWithOptions(request, runtime);
  }

  async describeSecurityEventOperationsWithOptions(request: DescribeSecurityEventOperationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityEventOperationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecurityEventOperationsResponse>(await this.doRPCRequest("DescribeSecurityEventOperations", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityEventOperationsResponse({}));
  }

  async describeSecurityEventOperations(request: DescribeSecurityEventOperationsRequest): Promise<DescribeSecurityEventOperationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityEventOperationsWithOptions(request, runtime);
  }

  async describeSecurityEventOperationStatusWithOptions(request: DescribeSecurityEventOperationStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecurityEventOperationStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecurityEventOperationStatusResponse>(await this.doRPCRequest("DescribeSecurityEventOperationStatus", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecurityEventOperationStatusResponse({}));
  }

  async describeSecurityEventOperationStatus(request: DescribeSecurityEventOperationStatusRequest): Promise<DescribeSecurityEventOperationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecurityEventOperationStatusWithOptions(request, runtime);
  }

  async describeSnapshotsWithOptions(request: DescribeSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnapshotsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSnapshotsResponse>(await this.doRPCRequest("DescribeSnapshots", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSnapshotsResponse({}));
  }

  async describeSnapshots(request: DescribeSnapshotsRequest): Promise<DescribeSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnapshotsWithOptions(request, runtime);
  }

  async describeSuspEventOverviewWithOptions(request: DescribeSuspEventOverviewRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSuspEventOverviewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSuspEventOverviewResponse>(await this.doRPCRequest("DescribeSuspEventOverview", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSuspEventOverviewResponse({}));
  }

  async describeSuspEventOverview(request: DescribeSuspEventOverviewRequest): Promise<DescribeSuspEventOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSuspEventOverviewWithOptions(request, runtime);
  }

  async describeSuspEventQuaraFilesWithOptions(request: DescribeSuspEventQuaraFilesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSuspEventQuaraFilesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSuspEventQuaraFilesResponse>(await this.doRPCRequest("DescribeSuspEventQuaraFiles", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSuspEventQuaraFilesResponse({}));
  }

  async describeSuspEventQuaraFiles(request: DescribeSuspEventQuaraFilesRequest): Promise<DescribeSuspEventQuaraFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSuspEventQuaraFilesWithOptions(request, runtime);
  }

  async describeSuspEventsWithOptions(request: DescribeSuspEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSuspEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSuspEventsResponse>(await this.doRPCRequest("DescribeSuspEvents", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSuspEventsResponse({}));
  }

  async describeSuspEvents(request: DescribeSuspEventsRequest): Promise<DescribeSuspEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSuspEventsWithOptions(request, runtime);
  }

  async describeUserConnectionRecordsWithOptions(request: DescribeUserConnectionRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserConnectionRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserConnectionRecordsResponse>(await this.doRPCRequest("DescribeUserConnectionRecords", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserConnectionRecordsResponse({}));
  }

  async describeUserConnectionRecords(request: DescribeUserConnectionRecordsRequest): Promise<DescribeUserConnectionRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserConnectionRecordsWithOptions(request, runtime);
  }

  async describeUsersInGroupWithOptions(request: DescribeUsersInGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUsersInGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUsersInGroupResponse>(await this.doRPCRequest("DescribeUsersInGroup", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUsersInGroupResponse({}));
  }

  async describeUsersInGroup(request: DescribeUsersInGroupRequest): Promise<DescribeUsersInGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUsersInGroupWithOptions(request, runtime);
  }

  async describeVirtualMFADevicesWithOptions(request: DescribeVirtualMFADevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVirtualMFADevicesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVirtualMFADevicesResponse>(await this.doRPCRequest("DescribeVirtualMFADevices", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVirtualMFADevicesResponse({}));
  }

  async describeVirtualMFADevices(request: DescribeVirtualMFADevicesRequest): Promise<DescribeVirtualMFADevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVirtualMFADevicesWithOptions(request, runtime);
  }

  async describeVulDetailsWithOptions(request: DescribeVulDetailsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulDetailsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVulDetailsResponse>(await this.doRPCRequest("DescribeVulDetails", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVulDetailsResponse({}));
  }

  async describeVulDetails(request: DescribeVulDetailsRequest): Promise<DescribeVulDetailsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulDetailsWithOptions(request, runtime);
  }

  async describeVulListWithOptions(request: DescribeVulListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulListResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVulListResponse>(await this.doRPCRequest("DescribeVulList", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVulListResponse({}));
  }

  async describeVulList(request: DescribeVulListRequest): Promise<DescribeVulListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulListWithOptions(request, runtime);
  }

  async describeVulOverviewWithOptions(request: DescribeVulOverviewRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVulOverviewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVulOverviewResponse>(await this.doRPCRequest("DescribeVulOverview", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVulOverviewResponse({}));
  }

  async describeVulOverview(request: DescribeVulOverviewRequest): Promise<DescribeVulOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVulOverviewWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeZonesResponse>(await this.doRPCRequest("DescribeZones", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeZonesResponse({}));
  }

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async detachCenWithOptions(request: DetachCenRequest, runtime: $Util.RuntimeOptions): Promise<DetachCenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachCenResponse>(await this.doRPCRequest("DetachCen", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DetachCenResponse({}));
  }

  async detachCen(request: DetachCenRequest): Promise<DetachCenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachCenWithOptions(request, runtime);
  }

  async doCheckResourceWithOptions(request: DoCheckResourceRequest, runtime: $Util.RuntimeOptions): Promise<DoCheckResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DoCheckResourceResponse>(await this.doRPCRequest("DoCheckResource", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DoCheckResourceResponse({}));
  }

  async doCheckResource(request: DoCheckResourceRequest): Promise<DoCheckResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doCheckResourceWithOptions(request, runtime);
  }

  async doLogicalDeleteResourceWithOptions(request: DoLogicalDeleteResourceRequest, runtime: $Util.RuntimeOptions): Promise<DoLogicalDeleteResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DoLogicalDeleteResourceResponse>(await this.doRPCRequest("DoLogicalDeleteResource", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DoLogicalDeleteResourceResponse({}));
  }

  async doLogicalDeleteResource(request: DoLogicalDeleteResourceRequest): Promise<DoLogicalDeleteResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doLogicalDeleteResourceWithOptions(request, runtime);
  }

  async doPhysicalDeleteResourceWithOptions(request: DoPhysicalDeleteResourceRequest, runtime: $Util.RuntimeOptions): Promise<DoPhysicalDeleteResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DoPhysicalDeleteResourceResponse>(await this.doRPCRequest("DoPhysicalDeleteResource", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DoPhysicalDeleteResourceResponse({}));
  }

  async doPhysicalDeleteResource(request: DoPhysicalDeleteResourceRequest): Promise<DoPhysicalDeleteResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doPhysicalDeleteResourceWithOptions(request, runtime);
  }

  async getConnectionTicketWithOptions(request: GetConnectionTicketRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectionTicketResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetConnectionTicketResponse>(await this.doRPCRequest("GetConnectionTicket", "2020-09-30", "HTTP", "POST", "AK", "json", req, runtime), new GetConnectionTicketResponse({}));
  }

  async getConnectionTicket(request: GetConnectionTicketRequest): Promise<GetConnectionTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  async getDesktopGroupDetailWithOptions(request: GetDesktopGroupDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetDesktopGroupDetailResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDesktopGroupDetailResponse>(await this.doRPCRequest("GetDesktopGroupDetail", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetDesktopGroupDetailResponse({}));
  }

  async getDesktopGroupDetail(request: GetDesktopGroupDetailRequest): Promise<GetDesktopGroupDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDesktopGroupDetailWithOptions(request, runtime);
  }

  async getDesktopUsersWithOptions(request: GetDesktopUsersRequest, runtime: $Util.RuntimeOptions): Promise<GetDesktopUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDesktopUsersResponse>(await this.doRPCRequest("GetDesktopUsers", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetDesktopUsersResponse({}));
  }

  async getDesktopUsers(request: GetDesktopUsersRequest): Promise<GetDesktopUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDesktopUsersWithOptions(request, runtime);
  }

  async getDirectorySsoStatusWithOptions(request: GetDirectorySsoStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetDirectorySsoStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDirectorySsoStatusResponse>(await this.doRPCRequest("GetDirectorySsoStatus", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetDirectorySsoStatusResponse({}));
  }

  async getDirectorySsoStatus(request: GetDirectorySsoStatusRequest): Promise<GetDirectorySsoStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDirectorySsoStatusWithOptions(request, runtime);
  }

  async getOfficeSiteSsoStatusWithOptions(request: GetOfficeSiteSsoStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetOfficeSiteSsoStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetOfficeSiteSsoStatusResponse>(await this.doRPCRequest("GetOfficeSiteSsoStatus", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetOfficeSiteSsoStatusResponse({}));
  }

  async getOfficeSiteSsoStatus(request: GetOfficeSiteSsoStatusRequest): Promise<GetOfficeSiteSsoStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOfficeSiteSsoStatusWithOptions(request, runtime);
  }

  async getSpMetadataWithOptions(request: GetSpMetadataRequest, runtime: $Util.RuntimeOptions): Promise<GetSpMetadataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSpMetadataResponse>(await this.doRPCRequest("GetSpMetadata", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetSpMetadataResponse({}));
  }

  async getSpMetadata(request: GetSpMetadataRequest): Promise<GetSpMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSpMetadataWithOptions(request, runtime);
  }

  async handleSecurityEventsWithOptions(request: HandleSecurityEventsRequest, runtime: $Util.RuntimeOptions): Promise<HandleSecurityEventsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<HandleSecurityEventsResponse>(await this.doRPCRequest("HandleSecurityEvents", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new HandleSecurityEventsResponse({}));
  }

  async handleSecurityEvents(request: HandleSecurityEventsRequest): Promise<HandleSecurityEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.handleSecurityEventsWithOptions(request, runtime);
  }

  async listDirectoryUsersWithOptions(request: ListDirectoryUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListDirectoryUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDirectoryUsersResponse>(await this.doRPCRequest("ListDirectoryUsers", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListDirectoryUsersResponse({}));
  }

  async listDirectoryUsers(request: ListDirectoryUsersRequest): Promise<ListDirectoryUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDirectoryUsersWithOptions(request, runtime);
  }

  async listOfficeSiteOverviewWithOptions(request: ListOfficeSiteOverviewRequest, runtime: $Util.RuntimeOptions): Promise<ListOfficeSiteOverviewResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOfficeSiteOverviewResponse>(await this.doRPCRequest("ListOfficeSiteOverview", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListOfficeSiteOverviewResponse({}));
  }

  async listOfficeSiteOverview(request: ListOfficeSiteOverviewRequest): Promise<ListOfficeSiteOverviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOfficeSiteOverviewWithOptions(request, runtime);
  }

  async listOfficeSiteUsersWithOptions(request: ListOfficeSiteUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListOfficeSiteUsersResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListOfficeSiteUsersResponse>(await this.doRPCRequest("ListOfficeSiteUsers", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListOfficeSiteUsersResponse({}));
  }

  async listOfficeSiteUsers(request: ListOfficeSiteUsersRequest): Promise<ListOfficeSiteUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOfficeSiteUsersWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doRPCRequest("ListTagResources", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async lockVirtualMFADeviceWithOptions(request: LockVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<LockVirtualMFADeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LockVirtualMFADeviceResponse>(await this.doRPCRequest("LockVirtualMFADevice", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new LockVirtualMFADeviceResponse({}));
  }

  async lockVirtualMFADevice(request: LockVirtualMFADeviceRequest): Promise<LockVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockVirtualMFADeviceWithOptions(request, runtime);
  }

  async modifyADConnectorDirectoryWithOptions(request: ModifyADConnectorDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyADConnectorDirectoryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyADConnectorDirectoryResponse>(await this.doRPCRequest("ModifyADConnectorDirectory", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyADConnectorDirectoryResponse({}));
  }

  async modifyADConnectorDirectory(request: ModifyADConnectorDirectoryRequest): Promise<ModifyADConnectorDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyADConnectorDirectoryWithOptions(request, runtime);
  }

  async modifyADConnectorOfficeSiteWithOptions(request: ModifyADConnectorOfficeSiteRequest, runtime: $Util.RuntimeOptions): Promise<ModifyADConnectorOfficeSiteResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyADConnectorOfficeSiteResponse>(await this.doRPCRequest("ModifyADConnectorOfficeSite", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyADConnectorOfficeSiteResponse({}));
  }

  async modifyADConnectorOfficeSite(request: ModifyADConnectorOfficeSiteRequest): Promise<ModifyADConnectorOfficeSiteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyADConnectorOfficeSiteWithOptions(request, runtime);
  }

  async modifyBundleWithOptions(request: ModifyBundleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBundleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyBundleResponse>(await this.doRPCRequest("ModifyBundle", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyBundleResponse({}));
  }

  async modifyBundle(request: ModifyBundleRequest): Promise<ModifyBundleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBundleWithOptions(request, runtime);
  }

  async modifyDesktopGroupWithOptions(request: ModifyDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDesktopGroupResponse>(await this.doRPCRequest("ModifyDesktopGroup", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDesktopGroupResponse({}));
  }

  async modifyDesktopGroup(request: ModifyDesktopGroupRequest): Promise<ModifyDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopGroupWithOptions(request, runtime);
  }

  async modifyDesktopNameWithOptions(request: ModifyDesktopNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopNameResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDesktopNameResponse>(await this.doRPCRequest("ModifyDesktopName", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDesktopNameResponse({}));
  }

  async modifyDesktopName(request: ModifyDesktopNameRequest): Promise<ModifyDesktopNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopNameWithOptions(request, runtime);
  }

  async modifyDesktopPolicysWithOptions(request: ModifyDesktopPolicysRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopPolicysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDesktopPolicysResponse>(await this.doRPCRequest("ModifyDesktopPolicys", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDesktopPolicysResponse({}));
  }

  async modifyDesktopPolicys(request: ModifyDesktopPolicysRequest): Promise<ModifyDesktopPolicysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopPolicysWithOptions(request, runtime);
  }

  async modifyDesktopSpecWithOptions(request: ModifyDesktopSpecRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopSpecResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDesktopSpecResponse>(await this.doRPCRequest("ModifyDesktopSpec", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDesktopSpecResponse({}));
  }

  async modifyDesktopSpec(request: ModifyDesktopSpecRequest): Promise<ModifyDesktopSpecResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopSpecWithOptions(request, runtime);
  }

  async modifyDesktopsPolicyGroupWithOptions(request: ModifyDesktopsPolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopsPolicyGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDesktopsPolicyGroupResponse>(await this.doRPCRequest("ModifyDesktopsPolicyGroup", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDesktopsPolicyGroupResponse({}));
  }

  async modifyDesktopsPolicyGroup(request: ModifyDesktopsPolicyGroupRequest): Promise<ModifyDesktopsPolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopsPolicyGroupWithOptions(request, runtime);
  }

  async modifyEntitlementWithOptions(request: ModifyEntitlementRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEntitlementResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyEntitlementResponse>(await this.doRPCRequest("ModifyEntitlement", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyEntitlementResponse({}));
  }

  async modifyEntitlement(request: ModifyEntitlementRequest): Promise<ModifyEntitlementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEntitlementWithOptions(request, runtime);
  }

  async modifyImageAttributeWithOptions(request: ModifyImageAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyImageAttributeResponse>(await this.doRPCRequest("ModifyImageAttribute", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyImageAttributeResponse({}));
  }

  async modifyImageAttribute(request: ModifyImageAttributeRequest): Promise<ModifyImageAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageAttributeWithOptions(request, runtime);
  }

  async modifyNASDefaultMountTargetWithOptions(request: ModifyNASDefaultMountTargetRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNASDefaultMountTargetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyNASDefaultMountTargetResponse>(await this.doRPCRequest("ModifyNASDefaultMountTarget", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyNASDefaultMountTargetResponse({}));
  }

  async modifyNASDefaultMountTarget(request: ModifyNASDefaultMountTargetRequest): Promise<ModifyNASDefaultMountTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNASDefaultMountTargetWithOptions(request, runtime);
  }

  async modifyNetworkPackageWithOptions(request: ModifyNetworkPackageRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNetworkPackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyNetworkPackageResponse>(await this.doRPCRequest("ModifyNetworkPackage", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyNetworkPackageResponse({}));
  }

  async modifyNetworkPackage(request: ModifyNetworkPackageRequest): Promise<ModifyNetworkPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNetworkPackageWithOptions(request, runtime);
  }

  async modifyNetworkPackageEnabledWithOptions(request: ModifyNetworkPackageEnabledRequest, runtime: $Util.RuntimeOptions): Promise<ModifyNetworkPackageEnabledResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyNetworkPackageEnabledResponse>(await this.doRPCRequest("ModifyNetworkPackageEnabled", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyNetworkPackageEnabledResponse({}));
  }

  async modifyNetworkPackageEnabled(request: ModifyNetworkPackageEnabledRequest): Promise<ModifyNetworkPackageEnabledResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyNetworkPackageEnabledWithOptions(request, runtime);
  }

  async modifyOfficeSiteAttributeWithOptions(request: ModifyOfficeSiteAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOfficeSiteAttributeResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyOfficeSiteAttributeResponse>(await this.doRPCRequest("ModifyOfficeSiteAttribute", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyOfficeSiteAttributeResponse({}));
  }

  async modifyOfficeSiteAttribute(request: ModifyOfficeSiteAttributeRequest): Promise<ModifyOfficeSiteAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOfficeSiteAttributeWithOptions(request, runtime);
  }

  async modifyOfficeSiteCrossDesktopAccessWithOptions(request: ModifyOfficeSiteCrossDesktopAccessRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOfficeSiteCrossDesktopAccessResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyOfficeSiteCrossDesktopAccessResponse>(await this.doRPCRequest("ModifyOfficeSiteCrossDesktopAccess", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyOfficeSiteCrossDesktopAccessResponse({}));
  }

  async modifyOfficeSiteCrossDesktopAccess(request: ModifyOfficeSiteCrossDesktopAccessRequest): Promise<ModifyOfficeSiteCrossDesktopAccessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOfficeSiteCrossDesktopAccessWithOptions(request, runtime);
  }

  async modifyOfficeSiteMfaEnabledWithOptions(request: ModifyOfficeSiteMfaEnabledRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOfficeSiteMfaEnabledResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyOfficeSiteMfaEnabledResponse>(await this.doRPCRequest("ModifyOfficeSiteMfaEnabled", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyOfficeSiteMfaEnabledResponse({}));
  }

  async modifyOfficeSiteMfaEnabled(request: ModifyOfficeSiteMfaEnabledRequest): Promise<ModifyOfficeSiteMfaEnabledResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOfficeSiteMfaEnabledWithOptions(request, runtime);
  }

  async modifyOperateVulWithOptions(request: ModifyOperateVulRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOperateVulResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyOperateVulResponse>(await this.doRPCRequest("ModifyOperateVul", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyOperateVulResponse({}));
  }

  async modifyOperateVul(request: ModifyOperateVulRequest): Promise<ModifyOperateVulResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOperateVulWithOptions(request, runtime);
  }

  async modifyPolicyGroupWithOptions(request: ModifyPolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPolicyGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyPolicyGroupResponse>(await this.doRPCRequest("ModifyPolicyGroup", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyPolicyGroupResponse({}));
  }

  async modifyPolicyGroup(request: ModifyPolicyGroupRequest): Promise<ModifyPolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolicyGroupWithOptions(request, runtime);
  }

  async modifyScaleStrategyWithOptions(request: ModifyScaleStrategyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScaleStrategyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyScaleStrategyResponse>(await this.doRPCRequest("ModifyScaleStrategy", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyScaleStrategyResponse({}));
  }

  async modifyScaleStrategy(request: ModifyScaleStrategyRequest): Promise<ModifyScaleStrategyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScaleStrategyWithOptions(request, runtime);
  }

  async modifyUserToDesktopGroupWithOptions(request: ModifyUserToDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserToDesktopGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyUserToDesktopGroupResponse>(await this.doRPCRequest("ModifyUserToDesktopGroup", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyUserToDesktopGroupResponse({}));
  }

  async modifyUserToDesktopGroup(request: ModifyUserToDesktopGroupRequest): Promise<ModifyUserToDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserToDesktopGroupWithOptions(request, runtime);
  }

  async operateVulsWithOptions(request: OperateVulsRequest, runtime: $Util.RuntimeOptions): Promise<OperateVulsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OperateVulsResponse>(await this.doRPCRequest("OperateVuls", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new OperateVulsResponse({}));
  }

  async operateVuls(request: OperateVulsRequest): Promise<OperateVulsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.operateVulsWithOptions(request, runtime);
  }

  async payOrderCallbackWithOptions(request: PayOrderCallbackRequest, runtime: $Util.RuntimeOptions): Promise<PayOrderCallbackResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PayOrderCallbackResponse>(await this.doRPCRequest("PayOrderCallback", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new PayOrderCallbackResponse({}));
  }

  async payOrderCallback(request: PayOrderCallbackRequest): Promise<PayOrderCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.payOrderCallbackWithOptions(request, runtime);
  }

  async rebootDesktopsWithOptions(request: RebootDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<RebootDesktopsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RebootDesktopsResponse>(await this.doRPCRequest("RebootDesktops", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RebootDesktopsResponse({}));
  }

  async rebootDesktops(request: RebootDesktopsRequest): Promise<RebootDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootDesktopsWithOptions(request, runtime);
  }

  async rebuildDesktopsWithOptions(request: RebuildDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<RebuildDesktopsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RebuildDesktopsResponse>(await this.doRPCRequest("RebuildDesktops", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RebuildDesktopsResponse({}));
  }

  async rebuildDesktops(request: RebuildDesktopsRequest): Promise<RebuildDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebuildDesktopsWithOptions(request, runtime);
  }

  async recreateDesktopGroupWithOptions(request: RecreateDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<RecreateDesktopGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RecreateDesktopGroupResponse>(await this.doRPCRequest("RecreateDesktopGroup", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RecreateDesktopGroupResponse({}));
  }

  async recreateDesktopGroup(request: RecreateDesktopGroupRequest): Promise<RecreateDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recreateDesktopGroupWithOptions(request, runtime);
  }

  async removeUserFromDesktopGroupWithOptions(request: RemoveUserFromDesktopGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveUserFromDesktopGroupResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RemoveUserFromDesktopGroupResponse>(await this.doRPCRequest("RemoveUserFromDesktopGroup", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RemoveUserFromDesktopGroupResponse({}));
  }

  async removeUserFromDesktopGroup(request: RemoveUserFromDesktopGroupRequest): Promise<RemoveUserFromDesktopGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeUserFromDesktopGroupWithOptions(request, runtime);
  }

  async renewDesktopsWithOptions(request: RenewDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<RenewDesktopsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenewDesktopsResponse>(await this.doRPCRequest("RenewDesktops", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RenewDesktopsResponse({}));
  }

  async renewDesktops(request: RenewDesktopsRequest): Promise<RenewDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewDesktopsWithOptions(request, runtime);
  }

  async resetNASDefaultMountTargetWithOptions(request: ResetNASDefaultMountTargetRequest, runtime: $Util.RuntimeOptions): Promise<ResetNASDefaultMountTargetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetNASDefaultMountTargetResponse>(await this.doRPCRequest("ResetNASDefaultMountTarget", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ResetNASDefaultMountTargetResponse({}));
  }

  async resetNASDefaultMountTarget(request: ResetNASDefaultMountTargetRequest): Promise<ResetNASDefaultMountTargetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetNASDefaultMountTargetWithOptions(request, runtime);
  }

  async resetSnapshotWithOptions(request: ResetSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<ResetSnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetSnapshotResponse>(await this.doRPCRequest("ResetSnapshot", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ResetSnapshotResponse({}));
  }

  async resetSnapshot(request: ResetSnapshotRequest): Promise<ResetSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetSnapshotWithOptions(request, runtime);
  }

  async rollbackSuspEventQuaraFileWithOptions(request: RollbackSuspEventQuaraFileRequest, runtime: $Util.RuntimeOptions): Promise<RollbackSuspEventQuaraFileResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RollbackSuspEventQuaraFileResponse>(await this.doRPCRequest("RollbackSuspEventQuaraFile", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RollbackSuspEventQuaraFileResponse({}));
  }

  async rollbackSuspEventQuaraFile(request: RollbackSuspEventQuaraFileRequest): Promise<RollbackSuspEventQuaraFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackSuspEventQuaraFileWithOptions(request, runtime);
  }

  async runCommandWithOptions(request: RunCommandRequest, runtime: $Util.RuntimeOptions): Promise<RunCommandResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RunCommandResponse>(await this.doRPCRequest("RunCommand", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RunCommandResponse({}));
  }

  async runCommand(request: RunCommandRequest): Promise<RunCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  async setDirectorySsoStatusWithOptions(request: SetDirectorySsoStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDirectorySsoStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetDirectorySsoStatusResponse>(await this.doRPCRequest("SetDirectorySsoStatus", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new SetDirectorySsoStatusResponse({}));
  }

  async setDirectorySsoStatus(request: SetDirectorySsoStatusRequest): Promise<SetDirectorySsoStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDirectorySsoStatusWithOptions(request, runtime);
  }

  async setIdpMetadataWithOptions(request: SetIdpMetadataRequest, runtime: $Util.RuntimeOptions): Promise<SetIdpMetadataResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetIdpMetadataResponse>(await this.doRPCRequest("SetIdpMetadata", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new SetIdpMetadataResponse({}));
  }

  async setIdpMetadata(request: SetIdpMetadataRequest): Promise<SetIdpMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setIdpMetadataWithOptions(request, runtime);
  }

  async setOfficeSiteSsoStatusWithOptions(request: SetOfficeSiteSsoStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetOfficeSiteSsoStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SetOfficeSiteSsoStatusResponse>(await this.doRPCRequest("SetOfficeSiteSsoStatus", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new SetOfficeSiteSsoStatusResponse({}));
  }

  async setOfficeSiteSsoStatus(request: SetOfficeSiteSsoStatusRequest): Promise<SetOfficeSiteSsoStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setOfficeSiteSsoStatusWithOptions(request, runtime);
  }

  async startDesktopsWithOptions(request: StartDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<StartDesktopsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartDesktopsResponse>(await this.doRPCRequest("StartDesktops", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new StartDesktopsResponse({}));
  }

  async startDesktops(request: StartDesktopsRequest): Promise<StartDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDesktopsWithOptions(request, runtime);
  }

  async startVirusScanTaskWithOptions(request: StartVirusScanTaskRequest, runtime: $Util.RuntimeOptions): Promise<StartVirusScanTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StartVirusScanTaskResponse>(await this.doRPCRequest("StartVirusScanTask", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new StartVirusScanTaskResponse({}));
  }

  async startVirusScanTask(request: StartVirusScanTaskRequest): Promise<StartVirusScanTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startVirusScanTaskWithOptions(request, runtime);
  }

  async stopDesktopsWithOptions(request: StopDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<StopDesktopsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopDesktopsResponse>(await this.doRPCRequest("StopDesktops", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new StopDesktopsResponse({}));
  }

  async stopDesktops(request: StopDesktopsRequest): Promise<StopDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDesktopsWithOptions(request, runtime);
  }

  async stopInvocationWithOptions(request: StopInvocationRequest, runtime: $Util.RuntimeOptions): Promise<StopInvocationResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopInvocationResponse>(await this.doRPCRequest("StopInvocation", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new StopInvocationResponse({}));
  }

  async stopInvocation(request: StopInvocationRequest): Promise<StopInvocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInvocationWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourcesResponse>(await this.doRPCRequest("TagResources", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async unlockVirtualMFADeviceWithOptions(request: UnlockVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnlockVirtualMFADeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UnlockVirtualMFADeviceResponse>(await this.doRPCRequest("UnlockVirtualMFADevice", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new UnlockVirtualMFADeviceResponse({}));
  }

  async unlockVirtualMFADevice(request: UnlockVirtualMFADeviceRequest): Promise<UnlockVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockVirtualMFADeviceWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doRPCRequest("UntagResources", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
