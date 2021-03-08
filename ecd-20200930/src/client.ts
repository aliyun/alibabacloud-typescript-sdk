// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateADConnectorDirectoryRequest extends $tea.Model {
  regionId?: string;
  domainName?: string;
  domainUserName?: string;
  domainPassword?: string;
  directoryName?: string;
  enableAdminAccess?: boolean;
  desktopAccessType?: string;
  subDomainName?: string;
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
  directoryId?: string;
  requestId?: string;
  adConnectors?: CreateADConnectorDirectoryResponseBodyAdConnectors[];
  static names(): { [key: string]: string } {
    return {
      trustPassword: 'TrustPassword',
      directoryId: 'DirectoryId',
      requestId: 'RequestId',
      adConnectors: 'AdConnectors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trustPassword: 'string',
      directoryId: 'string',
      requestId: 'string',
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

export class CreateDesktopsRequest extends $tea.Model {
  regionId?: string;
  groupId?: string;
  bundleId?: string;
  systemDiskSize?: number;
  dataDiskSize?: number;
  desktopName?: string;
  userName?: string;
  vpcId?: string;
  amount?: number;
  directoryId?: string;
  policyGroupId?: string;
  chargeType?: string;
  period?: number;
  periodUnit?: string;
  autoPay?: boolean;
  endUserId?: string[];
  tag?: CreateDesktopsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      groupId: 'GroupId',
      bundleId: 'BundleId',
      systemDiskSize: 'SystemDiskSize',
      dataDiskSize: 'DataDiskSize',
      desktopName: 'DesktopName',
      userName: 'UserName',
      vpcId: 'VpcId',
      amount: 'Amount',
      directoryId: 'DirectoryId',
      policyGroupId: 'PolicyGroupId',
      chargeType: 'ChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoPay: 'AutoPay',
      endUserId: 'EndUserId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      groupId: 'string',
      bundleId: 'string',
      systemDiskSize: 'number',
      dataDiskSize: 'number',
      desktopName: 'string',
      userName: 'string',
      vpcId: 'string',
      amount: 'number',
      directoryId: 'string',
      policyGroupId: 'string',
      chargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      autoPay: 'boolean',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': CreateDesktopsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsResponseBody extends $tea.Model {
  requestId?: string;
  desktopId?: string[];
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      desktopId: 'DesktopId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      orderId: 'string',
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

export class CreateImageRequest extends $tea.Model {
  regionId?: string;
  desktopId?: string;
  imageName?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
      imageName: 'ImageName',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopId: 'string',
      imageName: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageResponseBody extends $tea.Model {
  requestId?: string;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      imageId: 'string',
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

export class CreatePolicyGroupRequest extends $tea.Model {
  regionId?: string;
  clipboard?: string;
  localDrive?: string;
  usbRedirect?: string;
  watermark?: string;
  name?: string;
  watermarkType?: string;
  watermarkCustomText?: string;
  watermarkTransparency?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clipboard: 'Clipboard',
      localDrive: 'LocalDrive',
      usbRedirect: 'UsbRedirect',
      watermark: 'Watermark',
      name: 'Name',
      watermarkType: 'WatermarkType',
      watermarkCustomText: 'WatermarkCustomText',
      watermarkTransparency: 'WatermarkTransparency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clipboard: 'string',
      localDrive: 'string',
      usbRedirect: 'string',
      watermark: 'string',
      name: 'string',
      watermarkType: 'string',
      watermarkCustomText: 'string',
      watermarkTransparency: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupResponseBody extends $tea.Model {
  requestId?: string;
  policyGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      policyGroupId: 'PolicyGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      policyGroupId: 'string',
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

export class DescribeBundlesRequest extends $tea.Model {
  regionId?: string;
  maxResults?: number;
  nextToken?: string;
  userName?: string;
  category?: string;
  bundleType?: string;
  bundleId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      userName: 'UserName',
      category: 'Category',
      bundleType: 'BundleType',
      bundleId: 'BundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      userName: 'string',
      category: 'string',
      bundleType: 'string',
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

export class DescribeClientEventsRequest extends $tea.Model {
  regionId?: string;
  endUserId?: string;
  desktopId?: string;
  desktopIp?: string;
  directoryId?: string;
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
  policyGroupId?: string;
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
      policyGroupId: 'PolicyGroupId',
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
      policyGroupId: 'string',
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

export class DescribeDesktopTypesRequest extends $tea.Model {
  regionId?: string;
  desktopTypeId?: string;
  instanceTypeFamily?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopTypeId: 'DesktopTypeId',
      instanceTypeFamily: 'InstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopTypeId: 'string',
      instanceTypeFamily: 'string',
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
  maxResults?: number;
  nextToken?: string;
  directoryId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      directoryType: 'DirectoryType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      directoryType: 'string',
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
  directories?: DescribeDirectoriesResponseBodyDirectories[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directories: 'Directories',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeImagesRequest extends $tea.Model {
  regionId?: string;
  maxResults?: number;
  nextToken?: string;
  imageType?: string;
  imageStatus?: string;
  gpuCategory?: boolean;
  imageId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      imageType: 'ImageType',
      imageStatus: 'ImageStatus',
      gpuCategory: 'GpuCategory',
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

export class DescribeVirtualMFADevicesRequest extends $tea.Model {
  regionId?: string;
  maxResults?: number;
  nextToken?: string;
  directoryId?: string;
  endUserId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      directoryId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualMFADevicesResponseBody extends $tea.Model {
  virtualMFADevices?: DescribeVirtualMFADevicesResponseBodyVirtualMFADevices[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      virtualMFADevices: 'VirtualMFADevices',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      virtualMFADevices: { 'type': 'array', 'itemType': DescribeVirtualMFADevicesResponseBodyVirtualMFADevices },
      nextToken: 'string',
      requestId: 'string',
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

export class ListTagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceType?: string;
  nextToken?: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
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

export class ModifyPolicyGroupRequest extends $tea.Model {
  regionId?: string;
  policyGroupId?: string;
  name?: string;
  clipboard?: string;
  localDrive?: string;
  usbRedirect?: string;
  watermark?: string;
  watermarkType?: string;
  watermarkCustomText?: string;
  watermarkTransparency?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      policyGroupId: 'PolicyGroupId',
      name: 'Name',
      clipboard: 'Clipboard',
      localDrive: 'LocalDrive',
      usbRedirect: 'UsbRedirect',
      watermark: 'Watermark',
      watermarkType: 'WatermarkType',
      watermarkCustomText: 'WatermarkCustomText',
      watermarkTransparency: 'WatermarkTransparency',
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
      watermark: 'string',
      watermarkType: 'string',
      watermarkCustomText: 'string',
      watermarkTransparency: 'string',
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
  requestId?: string;
  invokeId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      invokeId: 'InvokeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      invokeId: 'string',
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

export class StopDesktopsRequest extends $tea.Model {
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

export class DescribeBundlesResponseBodyBundlesDisks extends $tea.Model {
  diskSize?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      diskType: 'string',
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
  disks?: DescribeBundlesResponseBodyBundlesDisks[];
  bundleType?: string;
  description?: string;
  desktopType?: string;
  desktopTypeAttribute?: DescribeBundlesResponseBodyBundlesDesktopTypeAttribute;
  bundleId?: string;
  imageId?: string;
  bundleName?: string;
  static names(): { [key: string]: string } {
    return {
      disks: 'Disks',
      bundleType: 'BundleType',
      description: 'Description',
      desktopType: 'DesktopType',
      desktopTypeAttribute: 'DesktopTypeAttribute',
      bundleId: 'BundleId',
      imageId: 'ImageId',
      bundleName: 'BundleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: { 'type': 'array', 'itemType': DescribeBundlesResponseBodyBundlesDisks },
      bundleType: 'string',
      description: 'string',
      desktopType: 'string',
      desktopTypeAttribute: DescribeBundlesResponseBodyBundlesDesktopTypeAttribute,
      bundleId: 'string',
      imageId: 'string',
      bundleName: 'string',
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
  aliUid?: string;
  desktopId?: string;
  regionId?: string;
  eventId?: string;
  directoryType?: string;
  eventType?: string;
  endUserId?: string;
  clientIp?: string;
  clientOS?: string;
  directoryId?: string;
  clientVersion?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      bytesReceived: 'BytesReceived',
      desktopIp: 'DesktopIp',
      eventTime: 'EventTime',
      bytesSend: 'BytesSend',
      aliUid: 'AliUid',
      desktopId: 'DesktopId',
      regionId: 'RegionId',
      eventId: 'EventId',
      directoryType: 'DirectoryType',
      eventType: 'EventType',
      endUserId: 'EndUserId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
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
      aliUid: 'string',
      desktopId: 'string',
      regionId: 'string',
      eventId: 'string',
      directoryType: 'string',
      eventType: 'string',
      endUserId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      directoryId: 'string',
      clientVersion: 'string',
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

export class DescribeDesktopsResponseBodyDesktopsDisks extends $tea.Model {
  diskSize?: number;
  diskType?: string;
  diskId?: string;
  static names(): { [key: string]: string } {
    return {
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      diskId: 'DiskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskSize: 'number',
      diskType: 'string',
      diskId: 'string',
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
  tags?: DescribeDesktopsResponseBodyDesktopsTags[];
  disks?: DescribeDesktopsResponseBodyDesktopsDisks[];
  systemDiskSize?: number;
  policyGroupId?: string;
  desktopStatus?: string;
  desktopType?: string;
  gpuCount?: number;
  memory?: number;
  gpuSpec?: string;
  imageId?: string;
  directoryId?: string;
  dataDiskCategory?: string;
  systemDiskCategory?: string;
  networkInterfaceId?: number;
  dataDiskSize?: string;
  desktopId?: string;
  endUserIds?: string[];
  startTime?: string;
  cpu?: number;
  expiredTime?: string;
  connectionStatus?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      chargeType: 'ChargeType',
      desktopName: 'DesktopName',
      tags: 'Tags',
      disks: 'Disks',
      systemDiskSize: 'SystemDiskSize',
      policyGroupId: 'PolicyGroupId',
      desktopStatus: 'DesktopStatus',
      desktopType: 'DesktopType',
      gpuCount: 'GpuCount',
      memory: 'Memory',
      gpuSpec: 'GpuSpec',
      imageId: 'ImageId',
      directoryId: 'DirectoryId',
      dataDiskCategory: 'DataDiskCategory',
      systemDiskCategory: 'SystemDiskCategory',
      networkInterfaceId: 'NetworkInterfaceId',
      dataDiskSize: 'DataDiskSize',
      desktopId: 'DesktopId',
      endUserIds: 'EndUserIds',
      startTime: 'StartTime',
      cpu: 'Cpu',
      expiredTime: 'ExpiredTime',
      connectionStatus: 'ConnectionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      chargeType: 'string',
      desktopName: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsTags },
      disks: { 'type': 'array', 'itemType': DescribeDesktopsResponseBodyDesktopsDisks },
      systemDiskSize: 'number',
      policyGroupId: 'string',
      desktopStatus: 'string',
      desktopType: 'string',
      gpuCount: 'number',
      memory: 'number',
      gpuSpec: 'string',
      imageId: 'string',
      directoryId: 'string',
      dataDiskCategory: 'string',
      systemDiskCategory: 'string',
      networkInterfaceId: 'number',
      dataDiskSize: 'string',
      desktopId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      cpu: 'number',
      expiredTime: 'string',
      connectionStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesResponseBodyDesktopTypesAllowDiskSize extends $tea.Model {
  systemDiskSize?: number;
  dataDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      systemDiskSize: 'SystemDiskSize',
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDiskSize: 'number',
      dataDiskSize: 'number',
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

export class DescribeDirectoriesResponseBodyDirectoriesADConnectors extends $tea.Model {
  connectorStatus?: string;
  vSwitchId?: string;
  networkInterfaceId?: string;
  ADConnectorAddress?: string;
  static names(): { [key: string]: string } {
    return {
      connectorStatus: 'ConnectorStatus',
      vSwitchId: 'VSwitchId',
      networkInterfaceId: 'NetworkInterfaceId',
      ADConnectorAddress: 'ADConnectorAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorStatus: 'string',
      vSwitchId: 'string',
      networkInterfaceId: 'string',
      ADConnectorAddress: 'string',
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
  customSecurityGroupId?: string;
  domainUserName?: string;
  desktopVpcEndpoint?: string;
  desktopAccessType?: string;
  domainName?: string;
  directoryType?: string;
  dnsUserName?: string;
  logs?: DescribeDirectoriesResponseBodyDirectoriesLogs[];
  trustPassword?: string;
  vSwitchIds?: string[];
  name?: string;
  ADConnectors?: DescribeDirectoriesResponseBodyDirectoriesADConnectors[];
  dnsAddress?: string[];
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      enableInternetAccess: 'EnableInternetAccess',
      vpcId: 'VpcId',
      creationTime: 'CreationTime',
      status: 'Status',
      domainPassword: 'DomainPassword',
      customSecurityGroupId: 'CustomSecurityGroupId',
      domainUserName: 'DomainUserName',
      desktopVpcEndpoint: 'DesktopVpcEndpoint',
      desktopAccessType: 'DesktopAccessType',
      domainName: 'DomainName',
      directoryType: 'DirectoryType',
      dnsUserName: 'DnsUserName',
      logs: 'Logs',
      trustPassword: 'TrustPassword',
      vSwitchIds: 'VSwitchIds',
      name: 'Name',
      ADConnectors: 'ADConnectors',
      dnsAddress: 'DnsAddress',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInternetAccess: 'boolean',
      vpcId: 'string',
      creationTime: 'string',
      status: 'string',
      domainPassword: 'string',
      customSecurityGroupId: 'string',
      domainUserName: 'string',
      desktopVpcEndpoint: 'string',
      desktopAccessType: 'string',
      domainName: 'string',
      directoryType: 'string',
      dnsUserName: 'string',
      logs: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectoriesLogs },
      trustPassword: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      ADConnectors: { 'type': 'array', 'itemType': DescribeDirectoriesResponseBodyDirectoriesADConnectors },
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseBodyImages extends $tea.Model {
  status?: string;
  creationTime?: string;
  imageType?: string;
  progress?: string;
  description?: string;
  size?: number;
  osType?: string;
  dataDiskSize?: number;
  name?: string;
  gpuCategory?: boolean;
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      imageType: 'ImageType',
      progress: 'Progress',
      description: 'Description',
      size: 'Size',
      osType: 'OsType',
      dataDiskSize: 'DataDiskSize',
      name: 'Name',
      gpuCategory: 'GpuCategory',
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      imageType: 'string',
      progress: 'string',
      description: 'string',
      size: 'number',
      osType: 'string',
      dataDiskSize: 'number',
      name: 'string',
      gpuCategory: 'boolean',
      imageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseBodyInvocationsInvokeDesktops extends $tea.Model {
  creationTime?: string;
  updateTime?: string;
  finishTime?: string;
  invocationStatus?: string;
  repeats?: number;
  output?: string;
  desktopId?: string;
  dropped?: number;
  stopTime?: string;
  exitCode?: number;
  startTime?: string;
  errorInfo?: string;
  errorCode?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      updateTime: 'UpdateTime',
      finishTime: 'FinishTime',
      invocationStatus: 'InvocationStatus',
      repeats: 'Repeats',
      output: 'Output',
      desktopId: 'DesktopId',
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
      updateTime: 'string',
      finishTime: 'string',
      invocationStatus: 'string',
      repeats: 'number',
      output: 'string',
      desktopId: 'string',
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
  invokeDesktops?: DescribeInvocationsResponseBodyInvocationsInvokeDesktops[];
  commandContent?: string;
  invokeId?: string;
  commandType?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      invocationStatus: 'InvocationStatus',
      invokeDesktops: 'InvokeDesktops',
      commandContent: 'CommandContent',
      invokeId: 'InvokeId',
      commandType: 'CommandType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      invocationStatus: 'string',
      invokeDesktops: { 'type': 'array', 'itemType': DescribeInvocationsResponseBodyInvocationsInvokeDesktops },
      commandContent: 'string',
      invokeId: 'string',
      commandType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyGroupsResponseBodyDescribePolicyGroups extends $tea.Model {
  policyStatus?: string;
  watermarkType?: string;
  policyGroupId?: string;
  watermarkTransparency?: string;
  usbRedirect?: string;
  policyGroupType?: string;
  watermarkCustomText?: string;
  watermark?: string;
  clipboard?: string;
  name?: string;
  localDrive?: string;
  static names(): { [key: string]: string } {
    return {
      policyStatus: 'PolicyStatus',
      watermarkType: 'WatermarkType',
      policyGroupId: 'PolicyGroupId',
      watermarkTransparency: 'WatermarkTransparency',
      usbRedirect: 'UsbRedirect',
      policyGroupType: 'PolicyGroupType',
      watermarkCustomText: 'WatermarkCustomText',
      watermark: 'Watermark',
      clipboard: 'Clipboard',
      name: 'Name',
      localDrive: 'LocalDrive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyStatus: 'string',
      watermarkType: 'string',
      policyGroupId: 'string',
      watermarkTransparency: 'string',
      usbRedirect: 'string',
      policyGroupType: 'string',
      watermarkCustomText: 'string',
      watermark: 'string',
      clipboard: 'string',
      name: 'string',
      localDrive: 'string',
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

export class DescribeVirtualMFADevicesResponseBodyVirtualMFADevices extends $tea.Model {
  gmtUnlock?: string;
  serialNumber?: string;
  endUserId?: string;
  consecutiveFails?: number;
  status?: string;
  directoryId?: string;
  gmtEnabled?: string;
  static names(): { [key: string]: string } {
    return {
      gmtUnlock: 'GmtUnlock',
      serialNumber: 'SerialNumber',
      endUserId: 'EndUserId',
      consecutiveFails: 'ConsecutiveFails',
      status: 'status',
      directoryId: 'DirectoryId',
      gmtEnabled: 'GmtEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtUnlock: 'string',
      serialNumber: 'string',
      endUserId: 'string',
      consecutiveFails: 'number',
      status: 'string',
      directoryId: 'string',
      gmtEnabled: 'string',
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
  resourceType?: string;
  tagValue?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      tagValue: 'TagValue',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      tagValue: 'string',
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
  message?: number;
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
      message: 'number',
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
