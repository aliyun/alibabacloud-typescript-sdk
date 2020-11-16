// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ModifyPolicyGroupRequest extends $tea.Model {
  regionId: string;
  policyGroupId?: string;
  name?: string;
  clipboard?: string;
  localDrive?: string;
  usbRedirect?: string;
  watermark?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      policyGroupId: 'PolicyGroupId',
      name: 'Name',
      clipboard: 'Clipboard',
      localDrive: 'LocalDrive',
      usbRedirect: 'UsbRedirect',
      watermark: 'Watermark',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyPolicyGroupResponse extends $tea.Model {
  requestId: string;
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

export class PayOrderCallbackRequest extends $tea.Model {
  data: string;
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

export class PayOrderCallbackResponse extends $tea.Model {
  requestId: string;
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

export class DescribeDesktopTypesRequest extends $tea.Model {
  regionId: string;
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

export class DescribeDesktopTypesResponse extends $tea.Model {
  requestId: string;
  desktopTypes: DescribeDesktopTypesResponseDesktopTypes[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      desktopTypes: 'DesktopTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      desktopTypes: { 'type': 'array', 'itemType': DescribeDesktopTypesResponseDesktopTypes },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesRequest extends $tea.Model {
  regionId: string;
  directoryType?: string;
  directoryId?: string[];
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      directoryType: 'DirectoryType',
      directoryId: 'DirectoryId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      directoryType: 'string',
      directoryId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponse extends $tea.Model {
  nextToken: string;
  requestId: string;
  directories: DescribeDirectoriesResponseDirectories[];
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
      directories: { 'type': 'array', 'itemType': DescribeDirectoriesResponseDirectories },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDirectoriesRequest extends $tea.Model {
  regionId: string;
  directoryId: string[];
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

export class DeleteDirectoriesResponse extends $tea.Model {
  nextToken: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoryUsersRequest extends $tea.Model {
  regionId: string;
  directoryId: string;
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      directoryId: 'DirectoryId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      directoryId: 'string',
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoryUsersResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  users: ListDirectoryUsersResponseUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      users: { 'type': 'array', 'itemType': ListDirectoryUsersResponseUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequest extends $tea.Model {
  regionId: string;
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

export class CreateImageResponse extends $tea.Model {
  requestId: string;
  imageId: string;
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

export class CreateRAMDirectoryRequest extends $tea.Model {
  regionId: string;
  directoryName?: string;
  enableInternetAccess?: boolean;
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      directoryName: 'DirectoryName',
      enableInternetAccess: 'EnableInternetAccess',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      directoryName: 'string',
      enableInternetAccess: 'boolean',
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRAMDirectoryResponse extends $tea.Model {
  requestId: string;
  directoryId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      directoryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyGroupsRequest extends $tea.Model {
  regionId: string;
  policyGroupId: string[];
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

export class DeletePolicyGroupsResponse extends $tea.Model {
  requestId: string;
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

export class DescribePolicyGroupsRequest extends $tea.Model {
  regionId: string;
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

export class DescribePolicyGroupsResponse extends $tea.Model {
  nextToken: string;
  requestId: string;
  describePolicyGroups: DescribePolicyGroupsResponseDescribePolicyGroups[];
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
      describePolicyGroups: { 'type': 'array', 'itemType': DescribePolicyGroupsResponseDescribePolicyGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDesktopsRequest extends $tea.Model {
  regionId: string;
  desktopId: string[];
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

export class DeleteDesktopsResponse extends $tea.Model {
  requestId: string;
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

export class ModifyImageAttributeRequest extends $tea.Model {
  regionId: string;
  imageId: string;
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

export class ModifyImageAttributeResponse extends $tea.Model {
  requestId: string;
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

export class DoLogicalDeleteResourceRequest extends $tea.Model {
  invoker?: string;
  pk?: string;
  bid?: string;
  hid?: number;
  country?: string;
  taskIdentifier?: string;
  taskExtraData?: string;
  gmtWakeup?: string;
  regionId: string;
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

export class DoLogicalDeleteResourceResponse extends $tea.Model {
  bid: string;
  country: string;
  hid: number;
  interrupt: boolean;
  invoker: string;
  message: string;
  pk: string;
  success: boolean;
  taskExtraData: string;
  taskIdentifier: string;
  gmtWakeup: string;
  requestId: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      country: 'Country',
      hid: 'Hid',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      message: 'Message',
      pk: 'Pk',
      success: 'Success',
      taskExtraData: 'TaskExtraData',
      taskIdentifier: 'TaskIdentifier',
      gmtWakeup: 'GmtWakeup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      country: 'string',
      hid: 'number',
      interrupt: 'boolean',
      invoker: 'string',
      message: 'string',
      pk: 'string',
      success: 'boolean',
      taskExtraData: 'string',
      taskIdentifier: 'string',
      gmtWakeup: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEntitlementRequest extends $tea.Model {
  regionId: string;
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

export class ModifyEntitlementResponse extends $tea.Model {
  requestId: string;
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

export class DeleteBundlesRequest extends $tea.Model {
  regionId: string;
  bundleId: string[];
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

export class DeleteBundlesResponse extends $tea.Model {
  requestId: string;
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

export class DescribeDesktopsRequest extends $tea.Model {
  regionId: string;
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

export class DescribeDesktopsResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  desktops: DescribeDesktopsResponseDesktops[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      desktops: 'Desktops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      desktops: { 'type': 'array', 'itemType': DescribeDesktopsResponseDesktops },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebootDesktopsRequest extends $tea.Model {
  regionId: string;
  desktopId: string[];
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

export class RebootDesktopsResponse extends $tea.Model {
  requestId: string;
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

export class CreateBundleRequest extends $tea.Model {
  regionId: string;
  imageId: string;
  desktopType: string;
  rootDiskSizeGib: number;
  bundleName?: string;
  description?: string;
  userDiskSizeGib: number[];
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

export class CreateBundleResponse extends $tea.Model {
  requestId: string;
  bundleId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bundleId: 'BundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bundleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopsPolicyGroupRequest extends $tea.Model {
  regionId: string;
  policyGroupId?: string;
  desktopId: string[];
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

export class ModifyDesktopsPolicyGroupResponse extends $tea.Model {
  requestId: string;
  modifyResults: ModifyDesktopsPolicyGroupResponseModifyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      modifyResults: 'ModifyResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      modifyResults: { 'type': 'array', 'itemType': ModifyDesktopsPolicyGroupResponseModifyResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupRequest extends $tea.Model {
  regionId: string;
  clipboard?: string;
  localDrive?: string;
  usbRedirect?: string;
  watermark?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clipboard: 'Clipboard',
      localDrive: 'LocalDrive',
      usbRedirect: 'UsbRedirect',
      watermark: 'Watermark',
      name: 'Name',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyGroupResponse extends $tea.Model {
  requestId: string;
  policyGroupId: string;
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

export class DoPhysicalDeleteResourceRequest extends $tea.Model {
  invoker?: string;
  pk?: string;
  bid?: string;
  hid?: number;
  country?: string;
  taskIdentifier?: string;
  taskExtraData?: string;
  gmtWakeup?: string;
  regionId: string;
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

export class DoPhysicalDeleteResourceResponse extends $tea.Model {
  bid: string;
  country: string;
  hid: number;
  interrupt: boolean;
  invoker: string;
  message: string;
  requestId: string;
  pk: string;
  success: boolean;
  taskExtraData: string;
  taskIdentifier: string;
  gmtWakeup: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'Bid',
      country: 'Country',
      hid: 'Hid',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      message: 'Message',
      requestId: 'RequestId',
      pk: 'Pk',
      success: 'Success',
      taskExtraData: 'TaskExtraData',
      taskIdentifier: 'TaskIdentifier',
      gmtWakeup: 'GmtWakeup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      country: 'string',
      hid: 'number',
      interrupt: 'boolean',
      invoker: 'string',
      message: 'string',
      requestId: 'string',
      pk: 'string',
      success: 'boolean',
      taskExtraData: 'string',
      taskIdentifier: 'string',
      gmtWakeup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorDirectoryRequest extends $tea.Model {
  regionId: string;
  domainName: string;
  domainUserName: string;
  domainPassword: string;
  dnsAddress?: string[];
  vSwitchId?: string[];
  directoryName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      domainName: 'DomainName',
      domainUserName: 'DomainUserName',
      domainPassword: 'DomainPassword',
      dnsAddress: 'DnsAddress',
      vSwitchId: 'VSwitchId',
      directoryName: 'DirectoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      domainName: 'string',
      domainUserName: 'string',
      domainPassword: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
      directoryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorDirectoryResponse extends $tea.Model {
  directoryId: string;
  requestId: string;
  trustPassword: string;
  adConnectors: CreateADConnectorDirectoryResponseAdConnectors[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      requestId: 'RequestId',
      trustPassword: 'TrustPassword',
      adConnectors: 'AdConnectors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      requestId: 'string',
      trustPassword: 'string',
      adConnectors: { 'type': 'array', 'itemType': CreateADConnectorDirectoryResponseAdConnectors },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConnectionTicketRequest extends $tea.Model {
  regionId: string;
  instanceId?: string;
  userName?: string;
  password?: string;
  taskId?: string;
  desktopId?: string;
  static names(): { [key: string]: string } {
    return {
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

export class GetConnectionTicketResponse extends $tea.Model {
  requestId: string;
  ticket: string;
  taskId: string;
  taskStatus: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ticket: 'Ticket',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ticket: 'string',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopPolicysRequest extends $tea.Model {
  regionId: string;
  desktopId: string[];
  clipboard?: string;
  localDrive?: string;
  usbRedirect?: string;
  watermark?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
      clipboard: 'Clipboard',
      localDrive: 'LocalDrive',
      usbRedirect: 'UsbRedirect',
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      clipboard: 'string',
      localDrive: 'string',
      usbRedirect: 'string',
      watermark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopPolicysResponse extends $tea.Model {
  requestId: string;
  results: ModifyDesktopPolicysResponseResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': ModifyDesktopPolicysResponseResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesRequest extends $tea.Model {
  regionId: string;
  maxResults?: number;
  nextToken?: string;
  userName?: string;
  category?: string;
  bundleId?: string[];
  bundleType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      userName: 'UserName',
      category: 'Category',
      bundleId: 'BundleId',
      bundleType: 'BundleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      userName: 'string',
      category: 'string',
      bundleId: { 'type': 'array', 'itemType': 'string' },
      bundleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponse extends $tea.Model {
  nextToken: string;
  requestId: string;
  bundles: DescribeBundlesResponseBundles[];
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
      bundles: { 'type': 'array', 'itemType': DescribeBundlesResponseBundles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesRequest extends $tea.Model {
  regionId: string;
  imageId: string[];
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

export class DeleteImagesResponse extends $tea.Model {
  requestId: string;
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

export class DoCheckResourceRequest extends $tea.Model {
  invoker?: string;
  pk?: string;
  bid?: string;
  hid?: number;
  country?: string;
  taskIdentifier?: string;
  taskExtraData?: string;
  gmtWakeup?: string;
  regionId: string;
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

export class DoCheckResourceResponse extends $tea.Model {
  requestId: string;
  interrupt: boolean;
  invoker: string;
  pk: string;
  bid: string;
  hid: number;
  country: string;
  taskIdentifier: string;
  taskExtraData: string;
  gmtWakeup: string;
  success: boolean;
  message: string;
  level: number;
  url: string;
  prompt: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      interrupt: 'Interrupt',
      invoker: 'Invoker',
      pk: 'Pk',
      bid: 'Bid',
      hid: 'Hid',
      country: 'Country',
      taskIdentifier: 'TaskIdentifier',
      taskExtraData: 'TaskExtraData',
      gmtWakeup: 'GmtWakeup',
      success: 'Success',
      message: 'Message',
      level: 'Level',
      url: 'Url',
      prompt: 'Prompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      interrupt: 'boolean',
      invoker: 'string',
      pk: 'string',
      bid: 'string',
      hid: 'number',
      country: 'string',
      taskIdentifier: 'string',
      taskExtraData: 'string',
      gmtWakeup: 'string',
      success: 'boolean',
      message: 'string',
      level: 'number',
      url: 'string',
      prompt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopPolicysRequest extends $tea.Model {
  regionId: string;
  desktopId?: string[];
  nextToken?: string;
  maxResults?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      maxResults: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopPolicysResponse extends $tea.Model {
  nextToken: string;
  requestId: string;
  describeDesktopPolicys: DescribeDesktopPolicysResponseDescribeDesktopPolicys[];
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
      describeDesktopPolicys: { 'type': 'array', 'itemType': DescribeDesktopPolicysResponseDescribeDesktopPolicys },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsRequest extends $tea.Model {
  regionId: string;
  groupId?: string;
  bundleId: string;
  systemDiskSize?: number;
  dataDiskSize?: number;
  desktopName?: string;
  userName?: string;
  vpcId?: string;
  amount?: number;
  directoryId?: string;
  endUserId: string[];
  policyGroupId: string;
  chargeType?: string;
  period?: number;
  periodUnit?: string;
  autoPay?: boolean;
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
      endUserId: 'EndUserId',
      policyGroupId: 'PolicyGroupId',
      chargeType: 'ChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoPay: 'AutoPay',
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
      endUserId: { 'type': 'array', 'itemType': 'string' },
      policyGroupId: 'string',
      chargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      autoPay: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDesktopsResponse extends $tea.Model {
  requestId: string;
  orderId: string;
  desktopId: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesRequest extends $tea.Model {
  regionId: string;
  maxResults?: number;
  nextToken?: string;
  imageType?: string;
  imageStatus?: string;
  imageId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      imageType: 'ImageType',
      imageStatus: 'ImageStatus',
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
      imageId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponse extends $tea.Model {
  nextToken: string;
  requestId: string;
  images: DescribeImagesResponseImages[];
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
      images: { 'type': 'array', 'itemType': DescribeImagesResponseImages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesResponseDesktopTypes extends $tea.Model {
  desktopTypeId: string;
  instanceTypeFamily: string;
  cpuCount: string;
  GPUCount: string;
  memorySize: string;
  systemDiskSize: string;
  dataDiskSize: string;
  static names(): { [key: string]: string } {
    return {
      desktopTypeId: 'DesktopTypeId',
      instanceTypeFamily: 'InstanceTypeFamily',
      cpuCount: 'CpuCount',
      GPUCount: 'GPUCount',
      memorySize: 'MemorySize',
      systemDiskSize: 'SystemDiskSize',
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopTypeId: 'string',
      instanceTypeFamily: 'string',
      cpuCount: 'string',
      GPUCount: 'string',
      memorySize: 'string',
      systemDiskSize: 'string',
      dataDiskSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseDirectoriesADConnectors extends $tea.Model {
  ADConnectorAddress: string;
  vSwitchId: string;
  connectorStatus: string;
  networkInterfaceId: string;
  static names(): { [key: string]: string } {
    return {
      ADConnectorAddress: 'ADConnectorAddress',
      vSwitchId: 'VSwitchId',
      connectorStatus: 'ConnectorStatus',
      networkInterfaceId: 'NetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ADConnectorAddress: 'string',
      vSwitchId: 'string',
      connectorStatus: 'string',
      networkInterfaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDirectoriesResponseDirectories extends $tea.Model {
  directoryId: string;
  status: string;
  directoryType: string;
  creationTime: string;
  name: string;
  vpcId: string;
  customSecurityGroupId: string;
  dnsUserName: string;
  enableInternetAccess: boolean;
  trustPassword: string;
  domainName: string;
  domainUserName: string;
  domainPassword: string;
  ADConnectors: DescribeDirectoriesResponseDirectoriesADConnectors[];
  dnsAddress: string[];
  vSwitchIds: string[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      status: 'Status',
      directoryType: 'DirectoryType',
      creationTime: 'CreationTime',
      name: 'Name',
      vpcId: 'VpcId',
      customSecurityGroupId: 'CustomSecurityGroupId',
      dnsUserName: 'DnsUserName',
      enableInternetAccess: 'EnableInternetAccess',
      trustPassword: 'TrustPassword',
      domainName: 'DomainName',
      domainUserName: 'DomainUserName',
      domainPassword: 'DomainPassword',
      ADConnectors: 'ADConnectors',
      dnsAddress: 'DnsAddress',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      status: 'string',
      directoryType: 'string',
      creationTime: 'string',
      name: 'string',
      vpcId: 'string',
      customSecurityGroupId: 'string',
      dnsUserName: 'string',
      enableInternetAccess: 'boolean',
      trustPassword: 'string',
      domainName: 'string',
      domainUserName: 'string',
      domainPassword: 'string',
      ADConnectors: { 'type': 'array', 'itemType': DescribeDirectoriesResponseDirectoriesADConnectors },
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoryUsersResponseUsers extends $tea.Model {
  endUser: string;
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

export class DescribePolicyGroupsResponseDescribePolicyGroups extends $tea.Model {
  policyGroupId: string;
  policyGroupType: string;
  clipboard: string;
  localDrive: string;
  usbRedirect: string;
  watermark: string;
  name: string;
  static names(): { [key: string]: string } {
    return {
      policyGroupId: 'PolicyGroupId',
      policyGroupType: 'PolicyGroupType',
      clipboard: 'Clipboard',
      localDrive: 'LocalDrive',
      usbRedirect: 'UsbRedirect',
      watermark: 'Watermark',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyGroupId: 'string',
      policyGroupType: 'string',
      clipboard: 'string',
      localDrive: 'string',
      usbRedirect: 'string',
      watermark: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseDesktopsDisks extends $tea.Model {
  diskId: string;
  diskSize: number;
  diskType: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      diskSize: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopsResponseDesktops extends $tea.Model {
  directoryId: string;
  creationTime: string;
  desktopId: string;
  desktopStatus: string;
  desktopName: string;
  imageId: string;
  desktopType: string;
  systemDiskCategory: string;
  systemDiskSize: number;
  dataDiskCategory: string;
  dataDiskSize: string;
  connectionStatus: string;
  policyGroupId: string;
  cpu: number;
  memory: number;
  networkInterfaceId: number;
  expiredTime: string;
  chargeType: string;
  disks: DescribeDesktopsResponseDesktopsDisks[];
  endUserIds: string[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      creationTime: 'CreationTime',
      desktopId: 'DesktopId',
      desktopStatus: 'DesktopStatus',
      desktopName: 'DesktopName',
      imageId: 'ImageId',
      desktopType: 'DesktopType',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      dataDiskCategory: 'DataDiskCategory',
      dataDiskSize: 'DataDiskSize',
      connectionStatus: 'ConnectionStatus',
      policyGroupId: 'PolicyGroupId',
      cpu: 'Cpu',
      memory: 'Memory',
      networkInterfaceId: 'NetworkInterfaceId',
      expiredTime: 'ExpiredTime',
      chargeType: 'ChargeType',
      disks: 'Disks',
      endUserIds: 'EndUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      creationTime: 'string',
      desktopId: 'string',
      desktopStatus: 'string',
      desktopName: 'string',
      imageId: 'string',
      desktopType: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      dataDiskCategory: 'string',
      dataDiskSize: 'string',
      connectionStatus: 'string',
      policyGroupId: 'string',
      cpu: 'number',
      memory: 'number',
      networkInterfaceId: 'number',
      expiredTime: 'string',
      chargeType: 'string',
      disks: { 'type': 'array', 'itemType': DescribeDesktopsResponseDesktopsDisks },
      endUserIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDesktopsPolicyGroupResponseModifyResults extends $tea.Model {
  desktopId: string;
  code: string;
  message: number;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      code: 'string',
      message: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateADConnectorDirectoryResponseAdConnectors extends $tea.Model {
  address: string;
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

export class ModifyDesktopPolicysResponseResults extends $tea.Model {
  desktopId: string;
  success: string;
  code: string;
  message: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      success: 'string',
      code: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBundlesResponseBundlesDisks extends $tea.Model {
  diskSize: number;
  diskType: string;
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

export class DescribeBundlesResponseBundles extends $tea.Model {
  imageId: string;
  bundleId: string;
  bundleType: string;
  bundleName: string;
  description: string;
  desktopType: string;
  disks: DescribeBundlesResponseBundlesDisks[];
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      bundleId: 'BundleId',
      bundleType: 'BundleType',
      bundleName: 'BundleName',
      description: 'Description',
      desktopType: 'DesktopType',
      disks: 'Disks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      bundleId: 'string',
      bundleType: 'string',
      bundleName: 'string',
      description: 'string',
      desktopType: 'string',
      disks: { 'type': 'array', 'itemType': DescribeBundlesResponseBundlesDisks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopPolicysResponseDescribeDesktopPolicys extends $tea.Model {
  clipboard: string;
  localDrive: string;
  usbRedirect: string;
  watermark: string;
  desktopId: string;
  static names(): { [key: string]: string } {
    return {
      clipboard: 'Clipboard',
      localDrive: 'LocalDrive',
      usbRedirect: 'UsbRedirect',
      watermark: 'Watermark',
      desktopId: 'DesktopId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipboard: 'string',
      localDrive: 'string',
      usbRedirect: 'string',
      watermark: 'string',
      desktopId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagesResponseImages extends $tea.Model {
  creationTime: string;
  imageId: string;
  imageType: string;
  name: string;
  progress: number;
  size: number;
  status: string;
  description: string;
  osType: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      imageId: 'ImageId',
      imageType: 'ImageType',
      name: 'Name',
      progress: 'Progress',
      size: 'Size',
      status: 'Status',
      description: 'Description',
      osType: 'OsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      imageId: 'string',
      imageType: 'string',
      name: 'string',
      progress: 'number',
      size: 'number',
      status: 'string',
      description: 'string',
      osType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends RPC {

  constructor(config: $RPC.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ecd", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  async modifyPolicyGroupWithOptions(request: ModifyPolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPolicyGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyPolicyGroupResponse>(await this.doRequest("ModifyPolicyGroup", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new ModifyPolicyGroupResponse({}));
  }

  async modifyPolicyGroup(request: ModifyPolicyGroupRequest): Promise<ModifyPolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolicyGroupWithOptions(request, runtime);
  }

  async payOrderCallbackWithOptions(request: PayOrderCallbackRequest, runtime: $Util.RuntimeOptions): Promise<PayOrderCallbackResponse> {
    Util.validateModel(request);
    return $tea.cast<PayOrderCallbackResponse>(await this.doRequest("PayOrderCallback", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new PayOrderCallbackResponse({}));
  }

  async payOrderCallback(request: PayOrderCallbackRequest): Promise<PayOrderCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.payOrderCallbackWithOptions(request, runtime);
  }

  async describeDesktopTypesWithOptions(request: DescribeDesktopTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopTypesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDesktopTypesResponse>(await this.doRequest("DescribeDesktopTypes", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DescribeDesktopTypesResponse({}));
  }

  async describeDesktopTypes(request: DescribeDesktopTypesRequest): Promise<DescribeDesktopTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopTypesWithOptions(request, runtime);
  }

  async describeDirectoriesWithOptions(request: DescribeDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDirectoriesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDirectoriesResponse>(await this.doRequest("DescribeDirectories", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DescribeDirectoriesResponse({}));
  }

  async describeDirectories(request: DescribeDirectoriesRequest): Promise<DescribeDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDirectoriesWithOptions(request, runtime);
  }

  async deleteDirectoriesWithOptions(request: DeleteDirectoriesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDirectoriesResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDirectoriesResponse>(await this.doRequest("DeleteDirectories", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DeleteDirectoriesResponse({}));
  }

  async deleteDirectories(request: DeleteDirectoriesRequest): Promise<DeleteDirectoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDirectoriesWithOptions(request, runtime);
  }

  async listDirectoryUsersWithOptions(request: ListDirectoryUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListDirectoryUsersResponse> {
    Util.validateModel(request);
    return $tea.cast<ListDirectoryUsersResponse>(await this.doRequest("ListDirectoryUsers", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new ListDirectoryUsersResponse({}));
  }

  async listDirectoryUsers(request: ListDirectoryUsersRequest): Promise<ListDirectoryUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDirectoryUsersWithOptions(request, runtime);
  }

  async createImageWithOptions(request: CreateImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateImageResponse>(await this.doRequest("CreateImage", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new CreateImageResponse({}));
  }

  async createImage(request: CreateImageRequest): Promise<CreateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageWithOptions(request, runtime);
  }

  async createRAMDirectoryWithOptions(request: CreateRAMDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateRAMDirectoryResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateRAMDirectoryResponse>(await this.doRequest("CreateRAMDirectory", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new CreateRAMDirectoryResponse({}));
  }

  async createRAMDirectory(request: CreateRAMDirectoryRequest): Promise<CreateRAMDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRAMDirectoryWithOptions(request, runtime);
  }

  async deletePolicyGroupsWithOptions(request: DeletePolicyGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyGroupsResponse> {
    Util.validateModel(request);
    return $tea.cast<DeletePolicyGroupsResponse>(await this.doRequest("DeletePolicyGroups", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DeletePolicyGroupsResponse({}));
  }

  async deletePolicyGroups(request: DeletePolicyGroupsRequest): Promise<DeletePolicyGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyGroupsWithOptions(request, runtime);
  }

  async describePolicyGroupsWithOptions(request: DescribePolicyGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyGroupsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribePolicyGroupsResponse>(await this.doRequest("DescribePolicyGroups", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DescribePolicyGroupsResponse({}));
  }

  async describePolicyGroups(request: DescribePolicyGroupsRequest): Promise<DescribePolicyGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyGroupsWithOptions(request, runtime);
  }

  async deleteDesktopsWithOptions(request: DeleteDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDesktopsResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteDesktopsResponse>(await this.doRequest("DeleteDesktops", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DeleteDesktopsResponse({}));
  }

  async deleteDesktops(request: DeleteDesktopsRequest): Promise<DeleteDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDesktopsWithOptions(request, runtime);
  }

  async modifyImageAttributeWithOptions(request: ModifyImageAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageAttributeResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyImageAttributeResponse>(await this.doRequest("ModifyImageAttribute", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new ModifyImageAttributeResponse({}));
  }

  async modifyImageAttribute(request: ModifyImageAttributeRequest): Promise<ModifyImageAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageAttributeWithOptions(request, runtime);
  }

  async doLogicalDeleteResourceWithOptions(request: DoLogicalDeleteResourceRequest, runtime: $Util.RuntimeOptions): Promise<DoLogicalDeleteResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<DoLogicalDeleteResourceResponse>(await this.doRequest("DoLogicalDeleteResource", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DoLogicalDeleteResourceResponse({}));
  }

  async doLogicalDeleteResource(request: DoLogicalDeleteResourceRequest): Promise<DoLogicalDeleteResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doLogicalDeleteResourceWithOptions(request, runtime);
  }

  async modifyEntitlementWithOptions(request: ModifyEntitlementRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEntitlementResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyEntitlementResponse>(await this.doRequest("ModifyEntitlement", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new ModifyEntitlementResponse({}));
  }

  async modifyEntitlement(request: ModifyEntitlementRequest): Promise<ModifyEntitlementResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEntitlementWithOptions(request, runtime);
  }

  async deleteBundlesWithOptions(request: DeleteBundlesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBundlesResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteBundlesResponse>(await this.doRequest("DeleteBundles", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DeleteBundlesResponse({}));
  }

  async deleteBundles(request: DeleteBundlesRequest): Promise<DeleteBundlesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBundlesWithOptions(request, runtime);
  }

  async describeDesktopsWithOptions(request: DescribeDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDesktopsResponse>(await this.doRequest("DescribeDesktops", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DescribeDesktopsResponse({}));
  }

  async describeDesktops(request: DescribeDesktopsRequest): Promise<DescribeDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopsWithOptions(request, runtime);
  }

  async rebootDesktopsWithOptions(request: RebootDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<RebootDesktopsResponse> {
    Util.validateModel(request);
    return $tea.cast<RebootDesktopsResponse>(await this.doRequest("RebootDesktops", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new RebootDesktopsResponse({}));
  }

  async rebootDesktops(request: RebootDesktopsRequest): Promise<RebootDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebootDesktopsWithOptions(request, runtime);
  }

  async createBundleWithOptions(request: CreateBundleRequest, runtime: $Util.RuntimeOptions): Promise<CreateBundleResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateBundleResponse>(await this.doRequest("CreateBundle", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new CreateBundleResponse({}));
  }

  async createBundle(request: CreateBundleRequest): Promise<CreateBundleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBundleWithOptions(request, runtime);
  }

  async modifyDesktopsPolicyGroupWithOptions(request: ModifyDesktopsPolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopsPolicyGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDesktopsPolicyGroupResponse>(await this.doRequest("ModifyDesktopsPolicyGroup", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new ModifyDesktopsPolicyGroupResponse({}));
  }

  async modifyDesktopsPolicyGroup(request: ModifyDesktopsPolicyGroupRequest): Promise<ModifyDesktopsPolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopsPolicyGroupWithOptions(request, runtime);
  }

  async createPolicyGroupWithOptions(request: CreatePolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<CreatePolicyGroupResponse>(await this.doRequest("CreatePolicyGroup", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new CreatePolicyGroupResponse({}));
  }

  async createPolicyGroup(request: CreatePolicyGroupRequest): Promise<CreatePolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyGroupWithOptions(request, runtime);
  }

  async doPhysicalDeleteResourceWithOptions(request: DoPhysicalDeleteResourceRequest, runtime: $Util.RuntimeOptions): Promise<DoPhysicalDeleteResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<DoPhysicalDeleteResourceResponse>(await this.doRequest("DoPhysicalDeleteResource", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DoPhysicalDeleteResourceResponse({}));
  }

  async doPhysicalDeleteResource(request: DoPhysicalDeleteResourceRequest): Promise<DoPhysicalDeleteResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doPhysicalDeleteResourceWithOptions(request, runtime);
  }

  async createADConnectorDirectoryWithOptions(request: CreateADConnectorDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateADConnectorDirectoryResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateADConnectorDirectoryResponse>(await this.doRequest("CreateADConnectorDirectory", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new CreateADConnectorDirectoryResponse({}));
  }

  async createADConnectorDirectory(request: CreateADConnectorDirectoryRequest): Promise<CreateADConnectorDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createADConnectorDirectoryWithOptions(request, runtime);
  }

  async getConnectionTicketWithOptions(request: GetConnectionTicketRequest, runtime: $Util.RuntimeOptions): Promise<GetConnectionTicketResponse> {
    Util.validateModel(request);
    return $tea.cast<GetConnectionTicketResponse>(await this.doRequest("GetConnectionTicket", "HTTP", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new GetConnectionTicketResponse({}));
  }

  async getConnectionTicket(request: GetConnectionTicketRequest): Promise<GetConnectionTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConnectionTicketWithOptions(request, runtime);
  }

  async modifyDesktopPolicysWithOptions(request: ModifyDesktopPolicysRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopPolicysResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDesktopPolicysResponse>(await this.doRequest("ModifyDesktopPolicys", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new ModifyDesktopPolicysResponse({}));
  }

  async modifyDesktopPolicys(request: ModifyDesktopPolicysRequest): Promise<ModifyDesktopPolicysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopPolicysWithOptions(request, runtime);
  }

  async describeBundlesWithOptions(request: DescribeBundlesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeBundlesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeBundlesResponse>(await this.doRequest("DescribeBundles", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DescribeBundlesResponse({}));
  }

  async describeBundles(request: DescribeBundlesRequest): Promise<DescribeBundlesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeBundlesWithOptions(request, runtime);
  }

  async deleteImagesWithOptions(request: DeleteImagesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImagesResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteImagesResponse>(await this.doRequest("DeleteImages", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DeleteImagesResponse({}));
  }

  async deleteImages(request: DeleteImagesRequest): Promise<DeleteImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImagesWithOptions(request, runtime);
  }

  async doCheckResourceWithOptions(request: DoCheckResourceRequest, runtime: $Util.RuntimeOptions): Promise<DoCheckResourceResponse> {
    Util.validateModel(request);
    return $tea.cast<DoCheckResourceResponse>(await this.doRequest("DoCheckResource", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DoCheckResourceResponse({}));
  }

  async doCheckResource(request: DoCheckResourceRequest): Promise<DoCheckResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doCheckResourceWithOptions(request, runtime);
  }

  async describeDesktopPolicysWithOptions(request: DescribeDesktopPolicysRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDesktopPolicysResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDesktopPolicysResponse>(await this.doRequest("DescribeDesktopPolicys", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DescribeDesktopPolicysResponse({}));
  }

  async describeDesktopPolicys(request: DescribeDesktopPolicysRequest): Promise<DescribeDesktopPolicysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDesktopPolicysWithOptions(request, runtime);
  }

  async createDesktopsWithOptions(request: CreateDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<CreateDesktopsResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateDesktopsResponse>(await this.doRequest("CreateDesktops", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new CreateDesktopsResponse({}));
  }

  async createDesktops(request: CreateDesktopsRequest): Promise<CreateDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDesktopsWithOptions(request, runtime);
  }

  async describeImagesWithOptions(request: DescribeImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImagesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeImagesResponse>(await this.doRequest("DescribeImages", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DescribeImagesResponse({}));
  }

  async describeImages(request: DescribeImagesRequest): Promise<DescribeImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImagesWithOptions(request, runtime);
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

}
