// This file is auto-generated, don't edit it
import Util, * as $Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetDirectorySsoStatusRequest extends $tea.Model {
  regionId: string;
  directoryId: string;
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

export class GetDirectorySsoStatusResponse extends $tea.Model {
  requestId: string;
  ssoStatus: boolean;
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

export class SetDirectorySsoStatusRequest extends $tea.Model {
  regionId: string;
  directoryId: string;
  enableSso: boolean;
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

export class SetDirectorySsoStatusResponse extends $tea.Model {
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

export class GetSpMetadataRequest extends $tea.Model {
  regionId: string;
  directoryId: string;
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

export class GetSpMetadataResponse extends $tea.Model {
  requestId: string;
  spMetadata: string;
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

export class SetIdpMetadataRequest extends $tea.Model {
  regionId: string;
  directoryId: string;
  idpMetadata: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      directoryId: 'DirectoryId',
      idpMetadata: 'IdpMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      directoryId: 'string',
      idpMetadata: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdpMetadataResponse extends $tea.Model {
  requestId: string;
  idpEntityId: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      idpEntityId: 'IdpEntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      idpEntityId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RebuildDesktopsRequest extends $tea.Model {
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

export class RebuildDesktopsResponse extends $tea.Model {
  requestId: string;
  rebuildResults: RebuildDesktopsResponseRebuildResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rebuildResults: 'RebuildResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rebuildResults: { 'type': 'array', 'itemType': RebuildDesktopsResponseRebuildResults },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBundleRequest extends $tea.Model {
  regionId: string;
  bundleId: string;
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

export class ModifyBundleResponse extends $tea.Model {
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

export class UnlockVirtualMFADeviceRequest extends $tea.Model {
  regionId: string;
  serialNumber: string;
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

export class UnlockVirtualMFADeviceResponse extends $tea.Model {
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

export class DescribeVirtualMFADevicesRequest extends $tea.Model {
  regionId: string;
  maxResults?: number;
  nextToken?: string;
  directoryId: string;
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

export class DescribeVirtualMFADevicesResponse extends $tea.Model {
  nextToken: string;
  requestId: string;
  virtualMFADevices: DescribeVirtualMFADevicesResponseVirtualMFADevices[];
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
      virtualMFADevices: { 'type': 'array', 'itemType': DescribeVirtualMFADevicesResponseVirtualMFADevices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockVirtualMFADeviceRequest extends $tea.Model {
  regionId: string;
  serialNumber: string;
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

export class LockVirtualMFADeviceResponse extends $tea.Model {
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

export class DeleteVirtualMFADeviceRequest extends $tea.Model {
  regionId: string;
  serialNumber: string;
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

export class DeleteVirtualMFADeviceResponse extends $tea.Model {
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

export class ModifyADConnectorDirectoryRequest extends $tea.Model {
  regionId: string;
  directoryId: string;
  domainName?: string;
  domainUserName?: string;
  domainPassword?: string;
  dnsAddress?: string[];
  directoryName?: string;
  subDomainDnsAddress?: string[];
  subDomainName?: string;
  mfaEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      directoryId: 'DirectoryId',
      domainName: 'DomainName',
      domainUserName: 'DomainUserName',
      domainPassword: 'DomainPassword',
      dnsAddress: 'DnsAddress',
      directoryName: 'DirectoryName',
      subDomainDnsAddress: 'SubDomainDnsAddress',
      subDomainName: 'SubDomainName',
      mfaEnabled: 'MfaEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      directoryId: 'string',
      domainName: 'string',
      domainUserName: 'string',
      domainPassword: 'string',
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      directoryName: 'string',
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
      mfaEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyADConnectorDirectoryResponse extends $tea.Model {
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

export class ListTagResourcesRequest extends $tea.Model {
  regionId: string;
  resourceType: string;
  resourceId?: string[];
  tag?: ListTagResourcesRequestTag[];
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tag: 'Tag',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  tagResources: ListTagResourcesResponseTagResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  regionId: string;
  resourceType: string;
  resourceId: string[];
  tagKey?: string[];
  all?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
      all: 'All',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceType: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      tagKey: { 'type': 'array', 'itemType': 'string' },
      all: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
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

export class TagResourcesRequest extends $tea.Model {
  regionId: string;
  resourceType: string;
  resourceId: string[];
  tag: TagResourcesRequestTag[];
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

export class TagResourcesResponse extends $tea.Model {
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

export class ModifyDesktopNameRequest extends $tea.Model {
  regionId: string;
  newDesktopName: string;
  desktopId: string;
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

export class ModifyDesktopNameResponse extends $tea.Model {
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

export class RunCommandRequest extends $tea.Model {
  regionId: string;
  type: string;
  commandContent: string;
  timeout?: number;
  desktopId: string[];
  contentEncoding?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      type: 'Type',
      commandContent: 'CommandContent',
      timeout: 'Timeout',
      desktopId: 'DesktopId',
      contentEncoding: 'ContentEncoding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      type: 'string',
      commandContent: 'string',
      timeout: 'number',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      contentEncoding: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponse extends $tea.Model {
  requestId: string;
  invokeId: string;
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

export class StopInvocationRequest extends $tea.Model {
  regionId: string;
  invokeId: string;
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

export class StopInvocationResponse extends $tea.Model {
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

export class DescribeInvocationsRequest extends $tea.Model {
  regionId: string;
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

export class DescribeInvocationsResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  invocations: DescribeInvocationsResponseInvocations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      invocations: 'Invocations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      invocations: { 'type': 'array', 'itemType': DescribeInvocationsResponseInvocations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  regionId: string;
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

export class DescribeZonesResponse extends $tea.Model {
  requestId: string;
  zones: DescribeZonesResponseZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeZonesResponseZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  regionId: string;
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

export class DescribeRegionsResponse extends $tea.Model {
  requestId: string;
  regions: DescribeRegionsResponseRegions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsRequest extends $tea.Model {
  regionId: string;
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

export class DescribeClientEventsResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  events: DescribeClientEventsResponseEvents[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      events: 'Events',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      events: { 'type': 'array', 'itemType': DescribeClientEventsResponseEvents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetSnapshotRequest extends $tea.Model {
  regionId: string;
  snapshotId: string;
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

export class ResetSnapshotResponse extends $tea.Model {
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

export class DeleteSnapshotRequest extends $tea.Model {
  regionId: string;
  snapshotId: string[];
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

export class DeleteSnapshotResponse extends $tea.Model {
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

export class CreateSnapshotRequest extends $tea.Model {
  regionId: string;
  desktopId: string;
  snapshotName: string;
  description?: string;
  sourceDiskType: string;
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

export class CreateSnapshotResponse extends $tea.Model {
  requestId: string;
  snapshotId: string;
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

export class DescribeSnapshotsRequest extends $tea.Model {
  regionId: string;
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

export class DescribeSnapshotsResponse extends $tea.Model {
  requestId: string;
  nextToken: string;
  snapshots: DescribeSnapshotsResponseSnapshots[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      snapshots: 'Snapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      snapshots: { 'type': 'array', 'itemType': DescribeSnapshotsResponseSnapshots },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDesktopsRequest extends $tea.Model {
  regionId: string;
  desktopId: string[];
  period?: number;
  periodUnit?: string;
  autoPay?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      desktopId: 'DesktopId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoPay: 'AutoPay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      autoPay: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewDesktopsResponse extends $tea.Model {
  requestId: string;
  orderId: string;
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

export class StopDesktopsRequest extends $tea.Model {
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

export class StopDesktopsResponse extends $tea.Model {
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

export class StartDesktopsRequest extends $tea.Model {
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

export class StartDesktopsResponse extends $tea.Model {
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

export class ModifyPolicyGroupRequest extends $tea.Model {
  regionId: string;
  policyGroupId: string;
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

export class ListDirectoryUsersRequest extends $tea.Model {
  regionId: string;
  filter?: string;
  directoryId: string;
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
  desktopId: string;
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
  enableAdminAccess?: boolean;
  desktopAccessType?: string;
  vSwitchId: string[];
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

export class ModifyEntitlementRequest extends $tea.Model {
  regionId: string;
  desktopId: string;
  endUserId: string[];
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

export class CreateADConnectorDirectoryRequest extends $tea.Model {
  regionId: string;
  domainName: string;
  domainUserName: string;
  domainPassword: string;
  dnsAddress: string[];
  vSwitchId: string[];
  directoryName?: string;
  enableAdminAccess?: boolean;
  desktopAccessType?: string;
  subDomainDnsAddress?: string[];
  subDomainName?: string;
  mfaEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      domainName: 'DomainName',
      domainUserName: 'DomainUserName',
      domainPassword: 'DomainPassword',
      dnsAddress: 'DnsAddress',
      vSwitchId: 'VSwitchId',
      directoryName: 'DirectoryName',
      enableAdminAccess: 'EnableAdminAccess',
      desktopAccessType: 'DesktopAccessType',
      subDomainDnsAddress: 'SubDomainDnsAddress',
      subDomainName: 'SubDomainName',
      mfaEnabled: 'MfaEnabled',
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
      enableAdminAccess: 'boolean',
      desktopAccessType: 'string',
      subDomainDnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDomainName: 'string',
      mfaEnabled: 'boolean',
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

export class DescribeBundlesRequest extends $tea.Model {
  regionId: string;
  maxResults?: number;
  nextToken?: string;
  bundleId?: string[];
  bundleType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      bundleId: 'BundleId',
      bundleType: 'BundleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

export class CreateDesktopsRequest extends $tea.Model {
  regionId: string;
  groupId?: string;
  bundleId: string;
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
  tag?: CreateDesktopsRequestTag[];
  autoRenew?: boolean;
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
      endUserId: 'EndUserId',
      policyGroupId: 'PolicyGroupId',
      chargeType: 'ChargeType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      autoPay: 'AutoPay',
      tag: 'Tag',
      autoRenew: 'AutoRenew',
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
      endUserId: { 'type': 'array', 'itemType': 'string' },
      policyGroupId: 'string',
      chargeType: 'string',
      period: 'number',
      periodUnit: 'string',
      autoPay: 'boolean',
      tag: { 'type': 'array', 'itemType': CreateDesktopsRequestTag },
      autoRenew: 'boolean',
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
  gpuCategory?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      imageType: 'ImageType',
      imageStatus: 'ImageStatus',
      imageId: 'ImageId',
      gpuCategory: 'GpuCategory',
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
      gpuCategory: 'boolean',
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

export class RebuildDesktopsResponseRebuildResults extends $tea.Model {
  desktopId: string;
  code: string;
  message: string;
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
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualMFADevicesResponseVirtualMFADevices extends $tea.Model {
  directoryId: string;
  endUserId: string;
  gmtEnabled: string;
  gmtUnlock: string;
  consecutiveFails: number;
  serialNumber: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      gmtEnabled: 'GmtEnabled',
      gmtUnlock: 'GmtUnlock',
      consecutiveFails: 'ConsecutiveFails',
      serialNumber: 'SerialNumber',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      endUserId: 'string',
      gmtEnabled: 'string',
      gmtUnlock: 'string',
      consecutiveFails: 'number',
      serialNumber: 'string',
      status: 'string',
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

export class ListTagResourcesResponseTagResources extends $tea.Model {
  resourceType: string;
  resourceId: string;
  tagKey: string;
  tagValue: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      resourceId: 'string',
      tagKey: 'string',
      tagValue: 'string',
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

export class DescribeInvocationsResponseInvocationsInvokeDesktops extends $tea.Model {
  desktopId: string;
  repeats: number;
  invocationStatus: string;
  creationTime: string;
  startTime: string;
  stopTime: string;
  finishTime: string;
  updateTime: string;
  output: string;
  exitCode: number;
  dropped: number;
  errorCode: string;
  errorInfo: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      repeats: 'Repeats',
      invocationStatus: 'InvocationStatus',
      creationTime: 'CreationTime',
      startTime: 'StartTime',
      stopTime: 'StopTime',
      finishTime: 'FinishTime',
      updateTime: 'UpdateTime',
      output: 'Output',
      exitCode: 'ExitCode',
      dropped: 'Dropped',
      errorCode: 'ErrorCode',
      errorInfo: 'ErrorInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      repeats: 'number',
      invocationStatus: 'string',
      creationTime: 'string',
      startTime: 'string',
      stopTime: 'string',
      finishTime: 'string',
      updateTime: 'string',
      output: 'string',
      exitCode: 'number',
      dropped: 'number',
      errorCode: 'string',
      errorInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInvocationsResponseInvocations extends $tea.Model {
  invokeId: string;
  creationTime: string;
  commandType: string;
  commandContent: string;
  invocationStatus: string;
  invokeDesktops: DescribeInvocationsResponseInvocationsInvokeDesktops[];
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      creationTime: 'CreationTime',
      commandType: 'CommandType',
      commandContent: 'CommandContent',
      invocationStatus: 'InvocationStatus',
      invokeDesktops: 'InvokeDesktops',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      creationTime: 'string',
      commandType: 'string',
      commandContent: 'string',
      invocationStatus: 'string',
      invokeDesktops: { 'type': 'array', 'itemType': DescribeInvocationsResponseInvocationsInvokeDesktops },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseZones extends $tea.Model {
  zoneId: string;
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

export class DescribeRegionsResponseRegions extends $tea.Model {
  regionId: string;
  regionEndpoint: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionEndpoint: 'RegionEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientEventsResponseEvents extends $tea.Model {
  eventId: string;
  eventType: string;
  eventTime: string;
  regionId: string;
  aliUid: string;
  endUserId: string;
  desktopId: string;
  desktopIp: string;
  directoryId: string;
  directoryType: string;
  clientOS: string;
  clientVersion: string;
  clientIp: string;
  bytesSend: string;
  bytesReceived: string;
  status: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      eventType: 'EventType',
      eventTime: 'EventTime',
      regionId: 'RegionId',
      aliUid: 'AliUid',
      endUserId: 'EndUserId',
      desktopId: 'DesktopId',
      desktopIp: 'DesktopIp',
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      clientIp: 'ClientIp',
      bytesSend: 'BytesSend',
      bytesReceived: 'BytesReceived',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      eventType: 'string',
      eventTime: 'string',
      regionId: 'string',
      aliUid: 'string',
      endUserId: 'string',
      desktopId: 'string',
      desktopIp: 'string',
      directoryId: 'string',
      directoryType: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      clientIp: 'string',
      bytesSend: 'string',
      bytesReceived: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotsResponseSnapshots extends $tea.Model {
  snapshotId: string;
  desktopId: string;
  snapshotName: string;
  description: string;
  snapshotType: string;
  sourceDiskSize: string;
  sourceDiskType: string;
  status: string;
  creationTime: string;
  progress: string;
  remainTime: number;
  static names(): { [key: string]: string } {
    return {
      snapshotId: 'SnapshotId',
      desktopId: 'DesktopId',
      snapshotName: 'SnapshotName',
      description: 'Description',
      snapshotType: 'SnapshotType',
      sourceDiskSize: 'SourceDiskSize',
      sourceDiskType: 'SourceDiskType',
      status: 'Status',
      creationTime: 'CreationTime',
      progress: 'Progress',
      remainTime: 'RemainTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshotId: 'string',
      desktopId: 'string',
      snapshotName: 'string',
      description: 'string',
      snapshotType: 'string',
      sourceDiskSize: 'string',
      sourceDiskType: 'string',
      status: 'string',
      creationTime: 'string',
      progress: 'string',
      remainTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopTypesResponseDesktopTypesAllowDiskSize extends $tea.Model {
  systemDiskSize: number;
  dataDiskSize: number;
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

export class DescribeDesktopTypesResponseDesktopTypes extends $tea.Model {
  desktopTypeId: string;
  instanceTypeFamily: string;
  cpuCount: string;
  memorySize: string;
  gpuCount: number;
  gpuSpec: string;
  systemDiskSize: string;
  dataDiskSize: string;
  allowDiskSize: DescribeDesktopTypesResponseDesktopTypesAllowDiskSize[];
  static names(): { [key: string]: string } {
    return {
      desktopTypeId: 'DesktopTypeId',
      instanceTypeFamily: 'InstanceTypeFamily',
      cpuCount: 'CpuCount',
      memorySize: 'MemorySize',
      gpuCount: 'GpuCount',
      gpuSpec: 'GpuSpec',
      systemDiskSize: 'SystemDiskSize',
      dataDiskSize: 'DataDiskSize',
      allowDiskSize: 'AllowDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopTypeId: 'string',
      instanceTypeFamily: 'string',
      cpuCount: 'string',
      memorySize: 'string',
      gpuCount: 'number',
      gpuSpec: 'string',
      systemDiskSize: 'string',
      dataDiskSize: 'string',
      allowDiskSize: { 'type': 'array', 'itemType': DescribeDesktopTypesResponseDesktopTypesAllowDiskSize },
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

export class DescribeDirectoriesResponseDirectoriesLogs extends $tea.Model {
  level: string;
  timeStamp: string;
  step: string;
  message: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      timeStamp: 'TimeStamp',
      step: 'Step',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      timeStamp: 'string',
      step: 'string',
      message: 'string',
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
  enableAdminAccess: boolean;
  desktopAccessType: string;
  desktopVpcEndpoint: string;
  trustPassword: string;
  domainName: string;
  domainUserName: string;
  domainPassword: string;
  subDomainName: string;
  mfaEnabled: boolean;
  ssoEnabled: boolean;
  ADConnectors: DescribeDirectoriesResponseDirectoriesADConnectors[];
  logs: DescribeDirectoriesResponseDirectoriesLogs[];
  dnsAddress: string[];
  subDnsAddress: string[];
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
      enableAdminAccess: 'EnableAdminAccess',
      desktopAccessType: 'DesktopAccessType',
      desktopVpcEndpoint: 'DesktopVpcEndpoint',
      trustPassword: 'TrustPassword',
      domainName: 'DomainName',
      domainUserName: 'DomainUserName',
      domainPassword: 'DomainPassword',
      subDomainName: 'SubDomainName',
      mfaEnabled: 'MfaEnabled',
      ssoEnabled: 'SsoEnabled',
      ADConnectors: 'ADConnectors',
      logs: 'Logs',
      dnsAddress: 'DnsAddress',
      subDnsAddress: 'SubDnsAddress',
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
      enableAdminAccess: 'boolean',
      desktopAccessType: 'string',
      desktopVpcEndpoint: 'string',
      trustPassword: 'string',
      domainName: 'string',
      domainUserName: 'string',
      domainPassword: 'string',
      subDomainName: 'string',
      mfaEnabled: 'boolean',
      ssoEnabled: 'boolean',
      ADConnectors: { 'type': 'array', 'itemType': DescribeDirectoriesResponseDirectoriesADConnectors },
      logs: { 'type': 'array', 'itemType': DescribeDirectoriesResponseDirectoriesLogs },
      dnsAddress: { 'type': 'array', 'itemType': 'string' },
      subDnsAddress: { 'type': 'array', 'itemType': 'string' },
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
  watermarkType: string;
  watermarkCustomText: string;
  watermarkTransparency: string;
  policyStatus: string;
  edsCount: number;
  static names(): { [key: string]: string } {
    return {
      policyGroupId: 'PolicyGroupId',
      policyGroupType: 'PolicyGroupType',
      clipboard: 'Clipboard',
      localDrive: 'LocalDrive',
      usbRedirect: 'UsbRedirect',
      watermark: 'Watermark',
      name: 'Name',
      watermarkType: 'WatermarkType',
      watermarkCustomText: 'WatermarkCustomText',
      watermarkTransparency: 'WatermarkTransparency',
      policyStatus: 'PolicyStatus',
      edsCount: 'EdsCount',
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
      watermarkType: 'string',
      watermarkCustomText: 'string',
      watermarkTransparency: 'string',
      policyStatus: 'string',
      edsCount: 'number',
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

export class DescribeDesktopsResponseDesktopsTags extends $tea.Model {
  key: string;
  value: string;
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

export class DescribeDesktopsResponseDesktopsSessions extends $tea.Model {
  endUserId: string;
  establishmentTime: string;
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

export class DescribeDesktopsResponseDesktops extends $tea.Model {
  directoryId: string;
  directoryType: string;
  creationTime: string;
  desktopId: string;
  bundleId: string;
  desktopStatus: string;
  desktopName: string;
  imageId: string;
  desktopType: string;
  systemDiskCategory: string;
  systemDiskSize: number;
  dataDiskCategory: string;
  dataDiskSize: string;
  policyGroupId: string;
  cpu: number;
  memory: number;
  networkInterfaceId: string;
  expiredTime: string;
  chargeType: string;
  gpuCount: number;
  gpuSpec: string;
  startTime: string;
  connectionStatus: string;
  osType: string;
  disks: DescribeDesktopsResponseDesktopsDisks[];
  tags: DescribeDesktopsResponseDesktopsTags[];
  sessions: DescribeDesktopsResponseDesktopsSessions[];
  endUserIds: string[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      directoryType: 'DirectoryType',
      creationTime: 'CreationTime',
      desktopId: 'DesktopId',
      bundleId: 'BundleId',
      desktopStatus: 'DesktopStatus',
      desktopName: 'DesktopName',
      imageId: 'ImageId',
      desktopType: 'DesktopType',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      dataDiskCategory: 'DataDiskCategory',
      dataDiskSize: 'DataDiskSize',
      policyGroupId: 'PolicyGroupId',
      cpu: 'Cpu',
      memory: 'Memory',
      networkInterfaceId: 'NetworkInterfaceId',
      expiredTime: 'ExpiredTime',
      chargeType: 'ChargeType',
      gpuCount: 'GpuCount',
      gpuSpec: 'GpuSpec',
      startTime: 'StartTime',
      connectionStatus: 'ConnectionStatus',
      osType: 'OsType',
      disks: 'Disks',
      tags: 'Tags',
      sessions: 'Sessions',
      endUserIds: 'EndUserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      directoryType: 'string',
      creationTime: 'string',
      desktopId: 'string',
      bundleId: 'string',
      desktopStatus: 'string',
      desktopName: 'string',
      imageId: 'string',
      desktopType: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      dataDiskCategory: 'string',
      dataDiskSize: 'string',
      policyGroupId: 'string',
      cpu: 'number',
      memory: 'number',
      networkInterfaceId: 'string',
      expiredTime: 'string',
      chargeType: 'string',
      gpuCount: 'number',
      gpuSpec: 'string',
      startTime: 'string',
      connectionStatus: 'string',
      osType: 'string',
      disks: { 'type': 'array', 'itemType': DescribeDesktopsResponseDesktopsDisks },
      tags: { 'type': 'array', 'itemType': DescribeDesktopsResponseDesktopsTags },
      sessions: { 'type': 'array', 'itemType': DescribeDesktopsResponseDesktopsSessions },
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
  message: string;
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
      message: 'string',
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

export class DescribeBundlesResponseBundlesDesktopTypeAttribute extends $tea.Model {
  cpuCount: number;
  memorySize: number;
  gpuCount: number;
  gpuSpec: string;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'CpuCount',
      memorySize: 'MemorySize',
      gpuCount: 'GpuCount',
      gpuSpec: 'GpuSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'number',
      memorySize: 'number',
      gpuCount: 'number',
      gpuSpec: 'string',
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
  desktopTypeAttribute: DescribeBundlesResponseBundlesDesktopTypeAttribute;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      bundleId: 'BundleId',
      bundleType: 'BundleType',
      bundleName: 'BundleName',
      description: 'Description',
      desktopType: 'DesktopType',
      disks: 'Disks',
      desktopTypeAttribute: 'DesktopTypeAttribute',
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
      desktopTypeAttribute: DescribeBundlesResponseBundlesDesktopTypeAttribute,
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

export class DescribeImagesResponseImages extends $tea.Model {
  creationTime: string;
  imageId: string;
  imageType: string;
  name: string;
  progress: string;
  size: number;
  dataDiskSize: number;
  gpuCategory: boolean;
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
      dataDiskSize: 'DataDiskSize',
      gpuCategory: 'GpuCategory',
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
      progress: 'string',
      size: 'number',
      dataDiskSize: 'number',
      gpuCategory: 'boolean',
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


  async getDirectorySsoStatusWithOptions(request: GetDirectorySsoStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetDirectorySsoStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<GetDirectorySsoStatusResponse>(await this.doRequest("GetDirectorySsoStatus", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new GetDirectorySsoStatusResponse({}));
  }

  async getDirectorySsoStatus(request: GetDirectorySsoStatusRequest): Promise<GetDirectorySsoStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDirectorySsoStatusWithOptions(request, runtime);
  }

  async setDirectorySsoStatusWithOptions(request: SetDirectorySsoStatusRequest, runtime: $Util.RuntimeOptions): Promise<SetDirectorySsoStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<SetDirectorySsoStatusResponse>(await this.doRequest("SetDirectorySsoStatus", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new SetDirectorySsoStatusResponse({}));
  }

  async setDirectorySsoStatus(request: SetDirectorySsoStatusRequest): Promise<SetDirectorySsoStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDirectorySsoStatusWithOptions(request, runtime);
  }

  async getSpMetadataWithOptions(request: GetSpMetadataRequest, runtime: $Util.RuntimeOptions): Promise<GetSpMetadataResponse> {
    Util.validateModel(request);
    return $tea.cast<GetSpMetadataResponse>(await this.doRequest("GetSpMetadata", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new GetSpMetadataResponse({}));
  }

  async getSpMetadata(request: GetSpMetadataRequest): Promise<GetSpMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSpMetadataWithOptions(request, runtime);
  }

  async setIdpMetadataWithOptions(request: SetIdpMetadataRequest, runtime: $Util.RuntimeOptions): Promise<SetIdpMetadataResponse> {
    Util.validateModel(request);
    return $tea.cast<SetIdpMetadataResponse>(await this.doRequest("SetIdpMetadata", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new SetIdpMetadataResponse({}));
  }

  async setIdpMetadata(request: SetIdpMetadataRequest): Promise<SetIdpMetadataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setIdpMetadataWithOptions(request, runtime);
  }

  async rebuildDesktopsWithOptions(request: RebuildDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<RebuildDesktopsResponse> {
    Util.validateModel(request);
    return $tea.cast<RebuildDesktopsResponse>(await this.doRequest("RebuildDesktops", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new RebuildDesktopsResponse({}));
  }

  async rebuildDesktops(request: RebuildDesktopsRequest): Promise<RebuildDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rebuildDesktopsWithOptions(request, runtime);
  }

  async modifyBundleWithOptions(request: ModifyBundleRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBundleResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyBundleResponse>(await this.doRequest("ModifyBundle", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new ModifyBundleResponse({}));
  }

  async modifyBundle(request: ModifyBundleRequest): Promise<ModifyBundleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBundleWithOptions(request, runtime);
  }

  async unlockVirtualMFADeviceWithOptions(request: UnlockVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<UnlockVirtualMFADeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<UnlockVirtualMFADeviceResponse>(await this.doRequest("UnlockVirtualMFADevice", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new UnlockVirtualMFADeviceResponse({}));
  }

  async unlockVirtualMFADevice(request: UnlockVirtualMFADeviceRequest): Promise<UnlockVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unlockVirtualMFADeviceWithOptions(request, runtime);
  }

  async describeVirtualMFADevicesWithOptions(request: DescribeVirtualMFADevicesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVirtualMFADevicesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVirtualMFADevicesResponse>(await this.doRequest("DescribeVirtualMFADevices", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DescribeVirtualMFADevicesResponse({}));
  }

  async describeVirtualMFADevices(request: DescribeVirtualMFADevicesRequest): Promise<DescribeVirtualMFADevicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVirtualMFADevicesWithOptions(request, runtime);
  }

  async lockVirtualMFADeviceWithOptions(request: LockVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<LockVirtualMFADeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<LockVirtualMFADeviceResponse>(await this.doRequest("LockVirtualMFADevice", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new LockVirtualMFADeviceResponse({}));
  }

  async lockVirtualMFADevice(request: LockVirtualMFADeviceRequest): Promise<LockVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.lockVirtualMFADeviceWithOptions(request, runtime);
  }

  async deleteVirtualMFADeviceWithOptions(request: DeleteVirtualMFADeviceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteVirtualMFADeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteVirtualMFADeviceResponse>(await this.doRequest("DeleteVirtualMFADevice", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DeleteVirtualMFADeviceResponse({}));
  }

  async deleteVirtualMFADevice(request: DeleteVirtualMFADeviceRequest): Promise<DeleteVirtualMFADeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteVirtualMFADeviceWithOptions(request, runtime);
  }

  async modifyADConnectorDirectoryWithOptions(request: ModifyADConnectorDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<ModifyADConnectorDirectoryResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyADConnectorDirectoryResponse>(await this.doRequest("ModifyADConnectorDirectory", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new ModifyADConnectorDirectoryResponse({}));
  }

  async modifyADConnectorDirectory(request: ModifyADConnectorDirectoryRequest): Promise<ModifyADConnectorDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyADConnectorDirectoryWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<ListTagResourcesResponse>(await this.doRequest("ListTagResources", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<UntagResourcesResponse>(await this.doRequest("UntagResources", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    return $tea.cast<TagResourcesResponse>(await this.doRequest("TagResources", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new TagResourcesResponse({}));
  }

  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async modifyDesktopNameWithOptions(request: ModifyDesktopNameRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDesktopNameResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDesktopNameResponse>(await this.doRequest("ModifyDesktopName", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new ModifyDesktopNameResponse({}));
  }

  async modifyDesktopName(request: ModifyDesktopNameRequest): Promise<ModifyDesktopNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDesktopNameWithOptions(request, runtime);
  }

  async runCommandWithOptions(request: RunCommandRequest, runtime: $Util.RuntimeOptions): Promise<RunCommandResponse> {
    Util.validateModel(request);
    return $tea.cast<RunCommandResponse>(await this.doRequest("RunCommand", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new RunCommandResponse({}));
  }

  async runCommand(request: RunCommandRequest): Promise<RunCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  async stopInvocationWithOptions(request: StopInvocationRequest, runtime: $Util.RuntimeOptions): Promise<StopInvocationResponse> {
    Util.validateModel(request);
    return $tea.cast<StopInvocationResponse>(await this.doRequest("StopInvocation", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new StopInvocationResponse({}));
  }

  async stopInvocation(request: StopInvocationRequest): Promise<StopInvocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopInvocationWithOptions(request, runtime);
  }

  async describeInvocationsWithOptions(request: DescribeInvocationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInvocationsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeInvocationsResponse>(await this.doRequest("DescribeInvocations", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DescribeInvocationsResponse({}));
  }

  async describeInvocations(request: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeZonesResponse>(await this.doRequest("DescribeZones", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DescribeZonesResponse({}));
  }

  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRegionsResponse>(await this.doRequest("DescribeRegions", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  async describeClientEventsWithOptions(request: DescribeClientEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClientEventsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeClientEventsResponse>(await this.doRequest("DescribeClientEvents", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DescribeClientEventsResponse({}));
  }

  async describeClientEvents(request: DescribeClientEventsRequest): Promise<DescribeClientEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClientEventsWithOptions(request, runtime);
  }

  async resetSnapshotWithOptions(request: ResetSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<ResetSnapshotResponse> {
    Util.validateModel(request);
    return $tea.cast<ResetSnapshotResponse>(await this.doRequest("ResetSnapshot", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new ResetSnapshotResponse({}));
  }

  async resetSnapshot(request: ResetSnapshotRequest): Promise<ResetSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetSnapshotWithOptions(request, runtime);
  }

  async deleteSnapshotWithOptions(request: DeleteSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSnapshotResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteSnapshotResponse>(await this.doRequest("DeleteSnapshot", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DeleteSnapshotResponse({}));
  }

  async deleteSnapshot(request: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  async createSnapshotWithOptions(request: CreateSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CreateSnapshotResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateSnapshotResponse>(await this.doRequest("CreateSnapshot", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new CreateSnapshotResponse({}));
  }

  async createSnapshot(request: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  async describeSnapshotsWithOptions(request: DescribeSnapshotsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSnapshotsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSnapshotsResponse>(await this.doRequest("DescribeSnapshots", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new DescribeSnapshotsResponse({}));
  }

  async describeSnapshots(request: DescribeSnapshotsRequest): Promise<DescribeSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSnapshotsWithOptions(request, runtime);
  }

  async renewDesktopsWithOptions(request: RenewDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<RenewDesktopsResponse> {
    Util.validateModel(request);
    return $tea.cast<RenewDesktopsResponse>(await this.doRequest("RenewDesktops", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new RenewDesktopsResponse({}));
  }

  async renewDesktops(request: RenewDesktopsRequest): Promise<RenewDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renewDesktopsWithOptions(request, runtime);
  }

  async stopDesktopsWithOptions(request: StopDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<StopDesktopsResponse> {
    Util.validateModel(request);
    return $tea.cast<StopDesktopsResponse>(await this.doRequest("StopDesktops", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new StopDesktopsResponse({}));
  }

  async stopDesktops(request: StopDesktopsRequest): Promise<StopDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDesktopsWithOptions(request, runtime);
  }

  async startDesktopsWithOptions(request: StartDesktopsRequest, runtime: $Util.RuntimeOptions): Promise<StartDesktopsResponse> {
    Util.validateModel(request);
    return $tea.cast<StartDesktopsResponse>(await this.doRequest("StartDesktops", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new StartDesktopsResponse({}));
  }

  async startDesktops(request: StartDesktopsRequest): Promise<StartDesktopsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDesktopsWithOptions(request, runtime);
  }

  async modifyPolicyGroupWithOptions(request: ModifyPolicyGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyPolicyGroupResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyPolicyGroupResponse>(await this.doRequest("ModifyPolicyGroup", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new ModifyPolicyGroupResponse({}));
  }

  async modifyPolicyGroup(request: ModifyPolicyGroupRequest): Promise<ModifyPolicyGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyPolicyGroupWithOptions(request, runtime);
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

  async createADConnectorDirectoryWithOptions(request: CreateADConnectorDirectoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateADConnectorDirectoryResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateADConnectorDirectoryResponse>(await this.doRequest("CreateADConnectorDirectory", "HTTPS", "POST", "2020-09-30", "AK", null, $tea.toMap(request), runtime), new CreateADConnectorDirectoryResponse({}));
  }

  async createADConnectorDirectory(request: CreateADConnectorDirectoryRequest): Promise<CreateADConnectorDirectoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createADConnectorDirectoryWithOptions(request, runtime);
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
