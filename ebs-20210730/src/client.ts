// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddDiskReplicaPairRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  replicaGroupId?: string;
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
      replicaPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddDiskReplicaPairResponseBody extends $tea.Model {
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

export class AddDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddDiskReplicaPairResponseBody;
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
      body: AddDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyLensServiceResponseBody extends $tea.Model {
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

export class ApplyLensServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyLensServiceResponseBody;
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
      body: ApplyLensServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelLensServiceResponseBody extends $tea.Model {
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

export class CancelLensServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelLensServiceResponseBody;
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
      body: CancelLensServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $tea.Model {
  clientToken?: string;
  newResourceGroupId?: string;
  regionId?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
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

export class ChangeResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeResourceGroupResponseBody;
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
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedBlockStorageClusterRequest extends $tea.Model {
  azone?: string;
  capacity?: number;
  dbscId?: string;
  dbscName?: string;
  period?: number;
  periodUnit?: string;
  regionId?: string;
  resourceGroupId?: string;
  tag?: CreateDedicatedBlockStorageClusterRequestTag[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      azone: 'Azone',
      capacity: 'Capacity',
      dbscId: 'DbscId',
      dbscName: 'DbscName',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azone: 'string',
      capacity: 'number',
      dbscId: 'string',
      dbscName: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDedicatedBlockStorageClusterRequestTag },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedBlockStorageClusterResponseBody extends $tea.Model {
  dbscId?: string;
  orderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dbscId: 'DbscId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbscId: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedBlockStorageClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDedicatedBlockStorageClusterResponseBody;
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
      body: CreateDedicatedBlockStorageClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskReplicaGroupRequest extends $tea.Model {
  bandwidth?: number;
  clientToken?: string;
  description?: string;
  destinationRegionId?: string;
  destinationZoneId?: string;
  groupName?: string;
  RPO?: number;
  regionId?: string;
  resourceGroupId?: string;
  sourceZoneId?: string;
  tag?: CreateDiskReplicaGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      destinationRegionId: 'DestinationRegionId',
      destinationZoneId: 'DestinationZoneId',
      groupName: 'GroupName',
      RPO: 'RPO',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceZoneId: 'SourceZoneId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      destinationRegionId: 'string',
      destinationZoneId: 'string',
      groupName: 'string',
      RPO: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceZoneId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDiskReplicaGroupRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskReplicaGroupResponseBody extends $tea.Model {
  replicaGroupId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      replicaGroupId: 'ReplicaGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      replicaGroupId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskReplicaGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDiskReplicaGroupResponseBody;
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
      body: CreateDiskReplicaGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskReplicaPairRequest extends $tea.Model {
  bandwidth?: number;
  chargeType?: string;
  clientToken?: string;
  description?: string;
  destinationDiskId?: string;
  destinationRegionId?: string;
  destinationZoneId?: string;
  diskId?: string;
  pairName?: string;
  period?: number;
  periodUnit?: string;
  RPO?: number;
  regionId?: string;
  resourceGroupId?: string;
  sourceZoneId?: string;
  tag?: CreateDiskReplicaPairRequestTag[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      description: 'Description',
      destinationDiskId: 'DestinationDiskId',
      destinationRegionId: 'DestinationRegionId',
      destinationZoneId: 'DestinationZoneId',
      diskId: 'DiskId',
      pairName: 'PairName',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      RPO: 'RPO',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sourceZoneId: 'SourceZoneId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      chargeType: 'string',
      clientToken: 'string',
      description: 'string',
      destinationDiskId: 'string',
      destinationRegionId: 'string',
      destinationZoneId: 'string',
      diskId: 'string',
      pairName: 'string',
      period: 'number',
      periodUnit: 'string',
      RPO: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      sourceZoneId: 'string',
      tag: { 'type': 'array', 'itemType': CreateDiskReplicaPairRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskReplicaPairResponseBody extends $tea.Model {
  orderId?: string;
  replicaPairId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      replicaPairId: 'ReplicaPairId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      replicaPairId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDiskReplicaPairResponseBody;
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
      body: CreateDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskReplicaGroupRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  replicaGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskReplicaGroupResponseBody extends $tea.Model {
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

export class DeleteDiskReplicaGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDiskReplicaGroupResponseBody;
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
      body: DeleteDiskReplicaGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskReplicaPairRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskReplicaPairResponseBody extends $tea.Model {
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

export class DeleteDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDiskReplicaPairResponseBody;
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
      body: DeleteDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClusterDisksRequest extends $tea.Model {
  dbscId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbscId: 'DbscId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbscId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClusterDisksResponseBody extends $tea.Model {
  disks?: DescribeDedicatedBlockStorageClusterDisksResponseBodyDisks;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      disks: 'Disks',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disks: DescribeDedicatedBlockStorageClusterDisksResponseBodyDisks,
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClusterDisksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDedicatedBlockStorageClusterDisksResponseBody;
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
      body: DescribeDedicatedBlockStorageClusterDisksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClustersRequest extends $tea.Model {
  azoneId?: string;
  category?: string;
  clientToken?: string;
  dedicatedBlockStorageClusterId?: string[];
  maxResults?: number;
  nextToken?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  status?: string[];
  tag?: DescribeDedicatedBlockStorageClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      azoneId: 'AzoneId',
      category: 'Category',
      clientToken: 'ClientToken',
      dedicatedBlockStorageClusterId: 'DedicatedBlockStorageClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azoneId: 'string',
      category: 'string',
      clientToken: 'string',
      dedicatedBlockStorageClusterId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': DescribeDedicatedBlockStorageClustersRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClustersResponseBody extends $tea.Model {
  dedicatedBlockStorageClusters?: DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClusters[];
  nextToken?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dedicatedBlockStorageClusters: 'DedicatedBlockStorageClusters',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedBlockStorageClusters: { 'type': 'array', 'itemType': DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClusters },
      nextToken: 'string',
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

export class DescribeDedicatedBlockStorageClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDedicatedBlockStorageClustersResponseBody;
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
      body: DescribeDedicatedBlockStorageClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskEventsRequest extends $tea.Model {
  diskCategory?: string;
  diskId?: string;
  endTime?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  startTime?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      diskCategory: 'DiskCategory',
      diskId: 'DiskId',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskCategory: 'string',
      diskId: 'string',
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskEventsResponseBody extends $tea.Model {
  diskEvents?: DescribeDiskEventsResponseBodyDiskEvents[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      diskEvents: 'DiskEvents',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskEvents: { 'type': 'array', 'itemType': DescribeDiskEventsResponseBodyDiskEvents },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDiskEventsResponseBody;
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
      body: DescribeDiskEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataRequest extends $tea.Model {
  diskId?: string;
  endTime?: string;
  period?: number;
  regionId?: string;
  startTime?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      endTime: 'EndTime',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      endTime: 'string',
      period: 'number',
      regionId: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataResponseBody extends $tea.Model {
  monitorData?: DescribeDiskMonitorDataResponseBodyMonitorData[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      monitorData: 'MonitorData',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorData: { 'type': 'array', 'itemType': DescribeDiskMonitorDataResponseBodyMonitorData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDiskMonitorDataResponseBody;
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
      body: DescribeDiskMonitorDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataListRequest extends $tea.Model {
  diskIds?: string;
  endTime?: string;
  maxResults?: string;
  nextToken?: string;
  regionId?: string;
  startTime?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      diskIds: 'DiskIds',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskIds: 'string',
      endTime: 'string',
      maxResults: 'string',
      nextToken: 'string',
      regionId: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataListResponseBody extends $tea.Model {
  monitorData?: DescribeDiskMonitorDataListResponseBodyMonitorData[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      monitorData: 'MonitorData',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorData: { 'type': 'array', 'itemType': DescribeDiskMonitorDataListResponseBodyMonitorData },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDiskMonitorDataListResponseBody;
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
      body: DescribeDiskMonitorDataListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaGroupsRequest extends $tea.Model {
  groupIds?: string;
  maxResults?: number;
  nextToken?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  resourceGroupId?: string;
  site?: string;
  tag?: DescribeDiskReplicaGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      site: 'Site',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      site: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDiskReplicaGroupsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaGroupsResponseBody extends $tea.Model {
  nextToken?: string;
  pageNumber?: number;
  pageSize?: number;
  replicaGroups?: DescribeDiskReplicaGroupsResponseBodyReplicaGroups[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      replicaGroups: 'ReplicaGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      replicaGroups: { 'type': 'array', 'itemType': DescribeDiskReplicaGroupsResponseBodyReplicaGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDiskReplicaGroupsResponseBody;
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
      body: DescribeDiskReplicaGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairProgressRequest extends $tea.Model {
  regionId?: string;
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairProgressResponseBody extends $tea.Model {
  progress?: number;
  recoverPoint?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      recoverPoint: 'RecoverPoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'number',
      recoverPoint: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDiskReplicaPairProgressResponseBody;
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
      body: DescribeDiskReplicaPairProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  pageNumber?: number;
  pageSize?: number;
  pairIds?: string;
  regionId?: string;
  replicaGroupId?: string;
  resourceGroupId?: string;
  site?: string;
  tag?: DescribeDiskReplicaPairsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pairIds: 'PairIds',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
      resourceGroupId: 'ResourceGroupId',
      site: 'Site',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pairIds: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
      resourceGroupId: 'string',
      site: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDiskReplicaPairsRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairsResponseBody extends $tea.Model {
  nextToken?: string;
  pageNumber?: number;
  pageSize?: number;
  replicaPairs?: DescribeDiskReplicaPairsResponseBodyReplicaPairs[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      replicaPairs: 'ReplicaPairs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      replicaPairs: { 'type': 'array', 'itemType': DescribeDiskReplicaPairsResponseBodyReplicaPairs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDiskReplicaPairsResponseBody;
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
      body: DescribeDiskReplicaPairsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLensServiceStatusResponseBody extends $tea.Model {
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLensServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeLensServiceStatusResponseBody;
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
      body: DescribeLensServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  regionId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
      resourceType: 'string',
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

export class FailoverDiskReplicaGroupRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  replicaGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailoverDiskReplicaGroupResponseBody extends $tea.Model {
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

export class FailoverDiskReplicaGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FailoverDiskReplicaGroupResponseBody;
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
      body: FailoverDiskReplicaGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailoverDiskReplicaPairRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailoverDiskReplicaPairResponseBody extends $tea.Model {
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

export class FailoverDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FailoverDiskReplicaPairResponseBody;
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
      body: FailoverDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  clientToken?: string;
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

export class ModifyDedicatedBlockStorageClusterAttributeRequest extends $tea.Model {
  clientToken?: string;
  dbscId?: string;
  dbscName?: string;
  description?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dbscId: 'DbscId',
      dbscName: 'DbscName',
      description: 'Description',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dbscId: 'string',
      dbscName: 'string',
      description: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedBlockStorageClusterAttributeResponseBody extends $tea.Model {
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

export class ModifyDedicatedBlockStorageClusterAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDedicatedBlockStorageClusterAttributeResponseBody;
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
      body: ModifyDedicatedBlockStorageClusterAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskReplicaGroupRequest extends $tea.Model {
  bandwidth?: number;
  clientToken?: string;
  description?: string;
  groupName?: string;
  RPO?: number;
  regionId?: string;
  replicaGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      groupName: 'GroupName',
      RPO: 'RPO',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      groupName: 'string',
      RPO: 'number',
      regionId: 'string',
      replicaGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskReplicaGroupResponseBody extends $tea.Model {
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

export class ModifyDiskReplicaGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDiskReplicaGroupResponseBody;
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
      body: ModifyDiskReplicaGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskReplicaPairRequest extends $tea.Model {
  bandwidth?: number;
  clientToken?: string;
  description?: string;
  pairName?: string;
  RPO?: number;
  regionId?: string;
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      clientToken: 'ClientToken',
      description: 'Description',
      pairName: 'PairName',
      RPO: 'RPO',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      clientToken: 'string',
      description: 'string',
      pairName: 'string',
      RPO: 'number',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDiskReplicaPairResponseBody extends $tea.Model {
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

export class ModifyDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDiskReplicaPairResponseBody;
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
      body: ModifyDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDiskReplicaPairRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  replicaGroupId?: string;
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
      replicaPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDiskReplicaPairResponseBody extends $tea.Model {
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

export class RemoveDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveDiskReplicaPairResponseBody;
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
      body: RemoveDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReprotectDiskReplicaGroupRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  replicaGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReprotectDiskReplicaGroupResponseBody extends $tea.Model {
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

export class ReprotectDiskReplicaGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReprotectDiskReplicaGroupResponseBody;
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
      body: ReprotectDiskReplicaGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReprotectDiskReplicaPairRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReprotectDiskReplicaPairResponseBody extends $tea.Model {
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

export class ReprotectDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ReprotectDiskReplicaPairResponseBody;
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
      body: ReprotectDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskMonitorRequest extends $tea.Model {
  diskIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      diskIds: 'DiskIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskMonitorShrinkRequest extends $tea.Model {
  diskIdsShrink?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      diskIdsShrink: 'DiskIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskIdsShrink: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskMonitorResponseBody extends $tea.Model {
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

export class StartDiskMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartDiskMonitorResponseBody;
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
      body: StartDiskMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskReplicaGroupRequest extends $tea.Model {
  clientToken?: string;
  oneShot?: boolean;
  regionId?: string;
  replicaGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      oneShot: 'OneShot',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      oneShot: 'boolean',
      regionId: 'string',
      replicaGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskReplicaGroupResponseBody extends $tea.Model {
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

export class StartDiskReplicaGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartDiskReplicaGroupResponseBody;
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
      body: StartDiskReplicaGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskReplicaPairRequest extends $tea.Model {
  clientToken?: string;
  oneShot?: boolean;
  regionId?: string;
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      oneShot: 'OneShot',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      oneShot: 'boolean',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskReplicaPairResponseBody extends $tea.Model {
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

export class StartDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartDiskReplicaPairResponseBody;
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
      body: StartDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskMonitorRequest extends $tea.Model {
  diskIds?: string[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      diskIds: 'DiskIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskMonitorShrinkRequest extends $tea.Model {
  diskIdsShrink?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      diskIdsShrink: 'DiskIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskIdsShrink: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskMonitorResponseBody extends $tea.Model {
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

export class StopDiskMonitorResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopDiskMonitorResponseBody;
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
      body: StopDiskMonitorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskReplicaGroupRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  replicaGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskReplicaGroupResponseBody extends $tea.Model {
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

export class StopDiskReplicaGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopDiskReplicaGroupResponseBody;
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
      body: StopDiskReplicaGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskReplicaPairRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  replicaPairId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaPairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskReplicaPairResponseBody extends $tea.Model {
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

export class StopDiskReplicaPairResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StopDiskReplicaPairResponseBody;
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
      body: StopDiskReplicaPairResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  clientToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      clientToken: 'string',
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

export class CreateDedicatedBlockStorageClusterRequestTag extends $tea.Model {
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

export class CreateDiskReplicaGroupRequestTag extends $tea.Model {
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

export class CreateDiskReplicaPairRequestTag extends $tea.Model {
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

export class DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDiskTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDisk extends $tea.Model {
  attachedTime?: string;
  bdfId?: string;
  burstingEnabled?: boolean;
  category?: string;
  deleteAutoSnapshot?: boolean;
  deleteWithInstance?: boolean;
  description?: string;
  detachedTime?: string;
  device?: string;
  diskChargeType?: string;
  diskId?: string;
  diskName?: string;
  enableAutoSnapshot?: boolean;
  encrypted?: boolean;
  IOPS?: number;
  imageId?: string;
  instanceId?: string;
  KMSKeyId?: string;
  mountInstanceNum?: number;
  multiAttach?: string;
  performanceLevel?: string;
  portable?: boolean;
  provisionedIops?: number;
  regionId?: string;
  size?: number;
  sourceSnapshotId?: string;
  status?: string;
  storageClusterId?: string;
  storageSetId?: string;
  storageSetPartitionNumber?: number;
  tags?: DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDiskTags[];
  throughput?: number;
  type?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      attachedTime: 'AttachedTime',
      bdfId: 'BdfId',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      deleteAutoSnapshot: 'DeleteAutoSnapshot',
      deleteWithInstance: 'DeleteWithInstance',
      description: 'Description',
      detachedTime: 'DetachedTime',
      device: 'Device',
      diskChargeType: 'DiskChargeType',
      diskId: 'DiskId',
      diskName: 'DiskName',
      enableAutoSnapshot: 'EnableAutoSnapshot',
      encrypted: 'Encrypted',
      IOPS: 'IOPS',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      KMSKeyId: 'KMSKeyId',
      mountInstanceNum: 'MountInstanceNum',
      multiAttach: 'MultiAttach',
      performanceLevel: 'PerformanceLevel',
      portable: 'Portable',
      provisionedIops: 'ProvisionedIops',
      regionId: 'RegionId',
      size: 'Size',
      sourceSnapshotId: 'SourceSnapshotId',
      status: 'Status',
      storageClusterId: 'StorageClusterId',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      tags: 'Tags',
      throughput: 'Throughput',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedTime: 'string',
      bdfId: 'string',
      burstingEnabled: 'boolean',
      category: 'string',
      deleteAutoSnapshot: 'boolean',
      deleteWithInstance: 'boolean',
      description: 'string',
      detachedTime: 'string',
      device: 'string',
      diskChargeType: 'string',
      diskId: 'string',
      diskName: 'string',
      enableAutoSnapshot: 'boolean',
      encrypted: 'boolean',
      IOPS: 'number',
      imageId: 'string',
      instanceId: 'string',
      KMSKeyId: 'string',
      mountInstanceNum: 'number',
      multiAttach: 'string',
      performanceLevel: 'string',
      portable: 'boolean',
      provisionedIops: 'number',
      regionId: 'string',
      size: 'number',
      sourceSnapshotId: 'string',
      status: 'string',
      storageClusterId: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      tags: { 'type': 'array', 'itemType': DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDiskTags },
      throughput: 'number',
      type: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClusterDisksResponseBodyDisks extends $tea.Model {
  disk?: DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDisk[];
  static names(): { [key: string]: string } {
    return {
      disk: 'Disk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: { 'type': 'array', 'itemType': DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDisk },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClustersRequestTag extends $tea.Model {
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

export class DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersDedicatedBlockStorageClusterCapacity extends $tea.Model {
  availableCapacity?: number;
  availableDeviceCapacity?: number;
  availableSpaceCapacity?: number;
  clusterAvailableCapacity?: number;
  clusterDeliveryCapacity?: number;
  deliveryCapacity?: number;
  totalCapacity?: number;
  totalDeviceCapacity?: number;
  totalSpaceCapacity?: number;
  usedCapacity?: number;
  usedDeviceCapacity?: number;
  usedSpaceCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      availableCapacity: 'AvailableCapacity',
      availableDeviceCapacity: 'AvailableDeviceCapacity',
      availableSpaceCapacity: 'AvailableSpaceCapacity',
      clusterAvailableCapacity: 'ClusterAvailableCapacity',
      clusterDeliveryCapacity: 'ClusterDeliveryCapacity',
      deliveryCapacity: 'DeliveryCapacity',
      totalCapacity: 'TotalCapacity',
      totalDeviceCapacity: 'TotalDeviceCapacity',
      totalSpaceCapacity: 'TotalSpaceCapacity',
      usedCapacity: 'UsedCapacity',
      usedDeviceCapacity: 'UsedDeviceCapacity',
      usedSpaceCapacity: 'UsedSpaceCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCapacity: 'number',
      availableDeviceCapacity: 'number',
      availableSpaceCapacity: 'number',
      clusterAvailableCapacity: 'number',
      clusterDeliveryCapacity: 'number',
      deliveryCapacity: 'number',
      totalCapacity: 'number',
      totalDeviceCapacity: 'number',
      totalSpaceCapacity: 'number',
      usedCapacity: 'number',
      usedDeviceCapacity: 'number',
      usedSpaceCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClusters extends $tea.Model {
  aliUid?: string;
  category?: string;
  createTime?: string;
  dedicatedBlockStorageClusterCapacity?: DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersDedicatedBlockStorageClusterCapacity;
  dedicatedBlockStorageClusterId?: string;
  dedicatedBlockStorageClusterName?: string;
  description?: string;
  enableThinProvision?: boolean;
  expiredTime?: string;
  performanceLevel?: string;
  regionId?: string;
  resourceGroupId?: string;
  sizeOverSoldRatio?: number;
  status?: string;
  storageDomain?: string;
  supportedCategory?: string;
  tags?: DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersTags[];
  type?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      category: 'Category',
      createTime: 'CreateTime',
      dedicatedBlockStorageClusterCapacity: 'DedicatedBlockStorageClusterCapacity',
      dedicatedBlockStorageClusterId: 'DedicatedBlockStorageClusterId',
      dedicatedBlockStorageClusterName: 'DedicatedBlockStorageClusterName',
      description: 'Description',
      enableThinProvision: 'EnableThinProvision',
      expiredTime: 'ExpiredTime',
      performanceLevel: 'PerformanceLevel',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sizeOverSoldRatio: 'SizeOverSoldRatio',
      status: 'Status',
      storageDomain: 'StorageDomain',
      supportedCategory: 'SupportedCategory',
      tags: 'Tags',
      type: 'Type',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      category: 'string',
      createTime: 'string',
      dedicatedBlockStorageClusterCapacity: DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersDedicatedBlockStorageClusterCapacity,
      dedicatedBlockStorageClusterId: 'string',
      dedicatedBlockStorageClusterName: 'string',
      description: 'string',
      enableThinProvision: 'boolean',
      expiredTime: 'string',
      performanceLevel: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sizeOverSoldRatio: 'number',
      status: 'string',
      storageDomain: 'string',
      supportedCategory: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersTags },
      type: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskEventsResponseBodyDiskEvents extends $tea.Model {
  description?: string;
  diskId?: string;
  recommendAction?: string;
  regionId?: string;
  status?: string;
  timestamp?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      diskId: 'DiskId',
      recommendAction: 'RecommendAction',
      regionId: 'RegionId',
      status: 'Status',
      timestamp: 'Timestamp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      diskId: 'string',
      recommendAction: 'string',
      regionId: 'string',
      status: 'string',
      timestamp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataResponseBodyMonitorData extends $tea.Model {
  BPSPercent?: number;
  burstIOCount?: number;
  diskId?: string;
  IOPSPercent?: number;
  readBPS?: number;
  readIOPS?: number;
  timestamp?: string;
  writeBPS?: number;
  writeIOPS?: number;
  static names(): { [key: string]: string } {
    return {
      BPSPercent: 'BPSPercent',
      burstIOCount: 'BurstIOCount',
      diskId: 'DiskId',
      IOPSPercent: 'IOPSPercent',
      readBPS: 'ReadBPS',
      readIOPS: 'ReadIOPS',
      timestamp: 'Timestamp',
      writeBPS: 'WriteBPS',
      writeIOPS: 'WriteIOPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      BPSPercent: 'number',
      burstIOCount: 'number',
      diskId: 'string',
      IOPSPercent: 'number',
      readBPS: 'number',
      readIOPS: 'number',
      timestamp: 'string',
      writeBPS: 'number',
      writeIOPS: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataListResponseBodyMonitorData extends $tea.Model {
  burstIOCount?: number;
  diskId?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      burstIOCount: 'BurstIOCount',
      diskId: 'DiskId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      burstIOCount: 'number',
      diskId: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaGroupsRequestTag extends $tea.Model {
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

export class DescribeDiskReplicaGroupsResponseBodyReplicaGroupsTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaGroupsResponseBodyReplicaGroups extends $tea.Model {
  bandwidth?: number;
  description?: string;
  destinationRegionId?: string;
  destinationZoneId?: string;
  groupName?: string;
  lastRecoverPoint?: number;
  pairIds?: Buffer[];
  pairNumber?: number;
  primaryRegion?: string;
  primaryZone?: string;
  RPO?: number;
  replicaGroupId?: string;
  resourceGroupId?: string;
  site?: string;
  sourceRegionId?: string;
  sourceZoneId?: string;
  standbyRegion?: string;
  standbyZone?: string;
  status?: string;
  tags?: DescribeDiskReplicaGroupsResponseBodyReplicaGroupsTags[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      description: 'Description',
      destinationRegionId: 'DestinationRegionId',
      destinationZoneId: 'DestinationZoneId',
      groupName: 'GroupName',
      lastRecoverPoint: 'LastRecoverPoint',
      pairIds: 'PairIds',
      pairNumber: 'PairNumber',
      primaryRegion: 'PrimaryRegion',
      primaryZone: 'PrimaryZone',
      RPO: 'RPO',
      replicaGroupId: 'ReplicaGroupId',
      resourceGroupId: 'ResourceGroupId',
      site: 'Site',
      sourceRegionId: 'SourceRegionId',
      sourceZoneId: 'SourceZoneId',
      standbyRegion: 'StandbyRegion',
      standbyZone: 'StandbyZone',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      description: 'string',
      destinationRegionId: 'string',
      destinationZoneId: 'string',
      groupName: 'string',
      lastRecoverPoint: 'number',
      pairIds: { 'type': 'array', 'itemType': 'Buffer' },
      pairNumber: 'number',
      primaryRegion: 'string',
      primaryZone: 'string',
      RPO: 'number',
      replicaGroupId: 'string',
      resourceGroupId: 'string',
      site: 'string',
      sourceRegionId: 'string',
      sourceZoneId: 'string',
      standbyRegion: 'string',
      standbyZone: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDiskReplicaGroupsResponseBodyReplicaGroupsTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairsRequestTag extends $tea.Model {
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

export class DescribeDiskReplicaPairsResponseBodyReplicaPairsTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairsResponseBodyReplicaPairs extends $tea.Model {
  bandwidth?: number;
  chargeType?: string;
  createTime?: number;
  description?: string;
  destinationDiskId?: string;
  destinationRegion?: string;
  destinationZoneId?: string;
  expiredTime?: number;
  lastRecoverPoint?: number;
  pairName?: string;
  primaryRegion?: string;
  primaryZone?: string;
  RPO?: number;
  replicaGroupId?: string;
  replicaGroupName?: string;
  replicaPairId?: string;
  resourceGroupId?: string;
  site?: string;
  sourceDiskId?: string;
  sourceRegion?: string;
  sourceZoneId?: string;
  standbyRegion?: string;
  standbyZone?: string;
  status?: string;
  statusMessage?: string;
  tags?: DescribeDiskReplicaPairsResponseBodyReplicaPairsTags[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      description: 'Description',
      destinationDiskId: 'DestinationDiskId',
      destinationRegion: 'DestinationRegion',
      destinationZoneId: 'DestinationZoneId',
      expiredTime: 'ExpiredTime',
      lastRecoverPoint: 'LastRecoverPoint',
      pairName: 'PairName',
      primaryRegion: 'PrimaryRegion',
      primaryZone: 'PrimaryZone',
      RPO: 'RPO',
      replicaGroupId: 'ReplicaGroupId',
      replicaGroupName: 'ReplicaGroupName',
      replicaPairId: 'ReplicaPairId',
      resourceGroupId: 'ResourceGroupId',
      site: 'Site',
      sourceDiskId: 'SourceDiskId',
      sourceRegion: 'SourceRegion',
      sourceZoneId: 'SourceZoneId',
      standbyRegion: 'StandbyRegion',
      standbyZone: 'StandbyZone',
      status: 'Status',
      statusMessage: 'StatusMessage',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      chargeType: 'string',
      createTime: 'number',
      description: 'string',
      destinationDiskId: 'string',
      destinationRegion: 'string',
      destinationZoneId: 'string',
      expiredTime: 'number',
      lastRecoverPoint: 'number',
      pairName: 'string',
      primaryRegion: 'string',
      primaryZone: 'string',
      RPO: 'number',
      replicaGroupId: 'string',
      replicaGroupName: 'string',
      replicaPairId: 'string',
      resourceGroupId: 'string',
      site: 'string',
      sourceDiskId: 'string',
      sourceRegion: 'string',
      sourceZoneId: 'string',
      standbyRegion: 'string',
      standbyZone: 'string',
      status: 'string',
      statusMessage: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDiskReplicaPairsResponseBodyReplicaPairsTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsZones extends $tea.Model {
  localName?: string;
  resourceTypes?: string[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      resourceTypes: 'ResourceTypes',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
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
  zones?: DescribeRegionsResponseBodyRegionsZones[];
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsZones },
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
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ebs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
    * The region ID of the replication pair-consistent group.
    *
    * @param request AddDiskReplicaPairRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AddDiskReplicaPairResponse
   */
  async addDiskReplicaPairWithOptions(request: AddDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<AddDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    if (!Util.isUnset(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new AddDiskReplicaPairResponse({}));
  }

  /**
    * The region ID of the replication pair-consistent group.
    *
    * @param request AddDiskReplicaPairRequest
    * @return AddDiskReplicaPairResponse
   */
  async addDiskReplicaPair(request: AddDiskReplicaPairRequest): Promise<AddDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDiskReplicaPairWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    *
    * @param request ApplyLensServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ApplyLensServiceResponse
   */
  async applyLensServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<ApplyLensServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ApplyLensService",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyLensServiceResponse>(await this.callApi(params, req, runtime), new ApplyLensServiceResponse({}));
  }

  /**
    * ## Usage notes
    * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    *
    * @return ApplyLensServiceResponse
   */
  async applyLensService(): Promise<ApplyLensServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyLensServiceWithOptions(runtime);
  }

  /**
    * ## Usage notes
    * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    *
    * @param request CancelLensServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CancelLensServiceResponse
   */
  async cancelLensServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<CancelLensServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "CancelLensService",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelLensServiceResponse>(await this.callApi(params, req, runtime), new CancelLensServiceResponse({}));
  }

  /**
    * ## Usage notes
    * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    *
    * @return CancelLensServiceResponse
   */
  async cancelLensService(): Promise<CancelLensServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelLensServiceWithOptions(runtime);
  }

  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
    * Dedicated block storage clusters are physically isolated from public block storage clusters. The owner of each dedicated block storage cluster has exclusive access to all resources in the cluster. For more information, see [Overview](~~208883~~).
    * Disks created in a dedicated block storage cluster can be attached only to Elastic Compute Service (ECS) instances that reside in the same zone as the cluster. Before you create a dedicated block storage cluster, decide the regions and zones in which to deploy your cloud resources.
    * Dedicated block storage clusters are classified into basic and performance types. When you create a dedicated block storage cluster, select a cluster type based on your business requirements.
    * You are charged for creating dedicated block storage clusters. For more information, see [~~208884~~](~~208884~~).
    *
    * @param request CreateDedicatedBlockStorageClusterRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDedicatedBlockStorageClusterResponse
   */
  async createDedicatedBlockStorageClusterWithOptions(request: CreateDedicatedBlockStorageClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateDedicatedBlockStorageClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.azone)) {
      query["Azone"] = request.azone;
    }

    if (!Util.isUnset(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!Util.isUnset(request.dbscId)) {
      query["DbscId"] = request.dbscId;
    }

    if (!Util.isUnset(request.dbscName)) {
      query["DbscName"] = request.dbscName;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDedicatedBlockStorageCluster",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDedicatedBlockStorageClusterResponse>(await this.callApi(params, req, runtime), new CreateDedicatedBlockStorageClusterResponse({}));
  }

  /**
    * Dedicated block storage clusters are physically isolated from public block storage clusters. The owner of each dedicated block storage cluster has exclusive access to all resources in the cluster. For more information, see [Overview](~~208883~~).
    * Disks created in a dedicated block storage cluster can be attached only to Elastic Compute Service (ECS) instances that reside in the same zone as the cluster. Before you create a dedicated block storage cluster, decide the regions and zones in which to deploy your cloud resources.
    * Dedicated block storage clusters are classified into basic and performance types. When you create a dedicated block storage cluster, select a cluster type based on your business requirements.
    * You are charged for creating dedicated block storage clusters. For more information, see [~~208884~~](~~208884~~).
    *
    * @param request CreateDedicatedBlockStorageClusterRequest
    * @return CreateDedicatedBlockStorageClusterResponse
   */
  async createDedicatedBlockStorageCluster(request: CreateDedicatedBlockStorageClusterRequest): Promise<CreateDedicatedBlockStorageClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedBlockStorageClusterWithOptions(request, runtime);
  }

  /**
    * The replication pair-consistent group feature allows you to batch manage multiple disks in disaster recovery scenarios. You can restore the data of all disks in the same replication pair-consistent group to the same point in time to allow for disaster recovery of one or more instances.
    * When you create a replication pair-consistent group, take note of the following items:
    * *   The replication pair-consistent group feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore, US (Silicon Valley), and US (Virginia) regions.
    * *   Replication pair-consistent groups support disaster recovery across zones within the same region and disaster recovery across regions.
    * *   A replication pair and a replication pair-consistent group replicate in the same direction if they have the same primary region (production region), primary zone (production zone), secondary region (disaster recovery region), and secondary zone (disaster recovery zone). Replication pairs can be added only to a replication pair-consistent group that replicates in the same direction as them.
    * *   After replication pairs are added to a replication pair-consistent group, the recovery point objective (RPO) of the group takes effect on the pairs in place of their original RPOs.
    *
    * @param request CreateDiskReplicaGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDiskReplicaGroupResponse
   */
  async createDiskReplicaGroupWithOptions(request: CreateDiskReplicaGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateDiskReplicaGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destinationRegionId)) {
      query["DestinationRegionId"] = request.destinationRegionId;
    }

    if (!Util.isUnset(request.destinationZoneId)) {
      query["DestinationZoneId"] = request.destinationZoneId;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.RPO)) {
      query["RPO"] = request.RPO;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourceZoneId)) {
      query["SourceZoneId"] = request.sourceZoneId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new CreateDiskReplicaGroupResponse({}));
  }

  /**
    * The replication pair-consistent group feature allows you to batch manage multiple disks in disaster recovery scenarios. You can restore the data of all disks in the same replication pair-consistent group to the same point in time to allow for disaster recovery of one or more instances.
    * When you create a replication pair-consistent group, take note of the following items:
    * *   The replication pair-consistent group feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore, US (Silicon Valley), and US (Virginia) regions.
    * *   Replication pair-consistent groups support disaster recovery across zones within the same region and disaster recovery across regions.
    * *   A replication pair and a replication pair-consistent group replicate in the same direction if they have the same primary region (production region), primary zone (production zone), secondary region (disaster recovery region), and secondary zone (disaster recovery zone). Replication pairs can be added only to a replication pair-consistent group that replicates in the same direction as them.
    * *   After replication pairs are added to a replication pair-consistent group, the recovery point objective (RPO) of the group takes effect on the pairs in place of their original RPOs.
    *
    * @param request CreateDiskReplicaGroupRequest
    * @return CreateDiskReplicaGroupResponse
   */
  async createDiskReplicaGroup(request: CreateDiskReplicaGroupRequest): Promise<CreateDiskReplicaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
    * Async replication is a feature that protects data across regions by using the data replication capability of Elastic Block Storage (EBS). This feature can be used to asynchronously replicate data from a disk in one region to a disk in another region for disaster recovery purposes. You can use this feature to implement disaster recovery for critical business to protect data in your databases and improve business continuity.
    * Currently, the async replication feature can asynchronously replicate data only between enhanced SSDs (ESSDs). The functionality of disks in replication pairs is limited. You are charged on a subscription basis for the bandwidth that is used by the async replication feature.
    * Before you call this operation, take note of the following items:
    * *   Make sure that the source disk (primary disk) from which to replicate data and the destination disk (secondary disk) to which to replicate data are created. You can call the [CreateDisk](~~25513~~) operation to create disks.
    * *   The secondary disk cannot reside the same region as the primary disk. The async replication feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore, US (Silicon Valley), and US (Virginia) regions.
    * *   After you call this operation to create a replication pair, you must call the [StartDiskReplicaPair](~~354205~~) operation to enable async replication to periodically replicate data from the primary disk to the secondary disk across regions.
    *
    * @param request CreateDiskReplicaPairRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateDiskReplicaPairResponse
   */
  async createDiskReplicaPairWithOptions(request: CreateDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<CreateDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.destinationDiskId)) {
      query["DestinationDiskId"] = request.destinationDiskId;
    }

    if (!Util.isUnset(request.destinationRegionId)) {
      query["DestinationRegionId"] = request.destinationRegionId;
    }

    if (!Util.isUnset(request.destinationZoneId)) {
      query["DestinationZoneId"] = request.destinationZoneId;
    }

    if (!Util.isUnset(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!Util.isUnset(request.pairName)) {
      query["PairName"] = request.pairName;
    }

    if (!Util.isUnset(request.period)) {
      query["Period"] = request.period;
    }

    if (!Util.isUnset(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!Util.isUnset(request.RPO)) {
      query["RPO"] = request.RPO;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.sourceZoneId)) {
      query["SourceZoneId"] = request.sourceZoneId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new CreateDiskReplicaPairResponse({}));
  }

  /**
    * Async replication is a feature that protects data across regions by using the data replication capability of Elastic Block Storage (EBS). This feature can be used to asynchronously replicate data from a disk in one region to a disk in another region for disaster recovery purposes. You can use this feature to implement disaster recovery for critical business to protect data in your databases and improve business continuity.
    * Currently, the async replication feature can asynchronously replicate data only between enhanced SSDs (ESSDs). The functionality of disks in replication pairs is limited. You are charged on a subscription basis for the bandwidth that is used by the async replication feature.
    * Before you call this operation, take note of the following items:
    * *   Make sure that the source disk (primary disk) from which to replicate data and the destination disk (secondary disk) to which to replicate data are created. You can call the [CreateDisk](~~25513~~) operation to create disks.
    * *   The secondary disk cannot reside the same region as the primary disk. The async replication feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore, US (Silicon Valley), and US (Virginia) regions.
    * *   After you call this operation to create a replication pair, you must call the [StartDiskReplicaPair](~~354205~~) operation to enable async replication to periodically replicate data from the primary disk to the secondary disk across regions.
    *
    * @param request CreateDiskReplicaPairRequest
    * @return CreateDiskReplicaPairResponse
   */
  async createDiskReplicaPair(request: CreateDiskReplicaPairRequest): Promise<CreateDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDiskReplicaPairWithOptions(request, runtime);
  }

  /**
    * *   The replication pair-consistent group feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore (Singapore), US (Silicon Valley), and US (Virginia) regions.
    * *   Before you can delete a replication pair-consistent group, make sure that no replication pairs are present in the group.
    * *   The replication pair-consistent group that you want to delete must be in the **Created** (`created`), **Creation Failed** (`create_failed`), **Stopped** (`stopped`), **Failover Failed** (`failovered`), **Deleting** (`deleting`), **Deletion Failed** (`delete_failed`), or **Invalid** (`invalid`) state.
    *
    * @param request DeleteDiskReplicaGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDiskReplicaGroupResponse
   */
  async deleteDiskReplicaGroupWithOptions(request: DeleteDiskReplicaGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDiskReplicaGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new DeleteDiskReplicaGroupResponse({}));
  }

  /**
    * *   The replication pair-consistent group feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore (Singapore), US (Silicon Valley), and US (Virginia) regions.
    * *   Before you can delete a replication pair-consistent group, make sure that no replication pairs are present in the group.
    * *   The replication pair-consistent group that you want to delete must be in the **Created** (`created`), **Creation Failed** (`create_failed`), **Stopped** (`stopped`), **Failover Failed** (`failovered`), **Deleting** (`deleting`), **Deletion Failed** (`delete_failed`), or **Invalid** (`invalid`) state.
    *
    * @param request DeleteDiskReplicaGroupRequest
    * @return DeleteDiskReplicaGroupResponse
   */
  async deleteDiskReplicaGroup(request: DeleteDiskReplicaGroupRequest): Promise<DeleteDiskReplicaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
    * *   The async replication feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore (Singapore), US (Silicon Valley), and US (Virginia) regions.
    * *   Only replication pairs that are in the **Stopped** (`stopped`), **Invalid** (`invalid`), or **Failed Over** (`failovered`) state can be deleted. This operation deletes only replication pairs. The primary and secondary disks in the deleted replication pairs are retained.
    * *   To delete a replication pair, you must call this operation in the region where the primary disk is located. After the replication pair is deleted, the functionality limits are lifted from the primary and secondary disks. For example, you can attach the secondary disk, resize the disk, or read data from or write data to the disk.
    *
    * @param request DeleteDiskReplicaPairRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteDiskReplicaPairResponse
   */
  async deleteDiskReplicaPairWithOptions(request: DeleteDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new DeleteDiskReplicaPairResponse({}));
  }

  /**
    * *   The async replication feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore (Singapore), US (Silicon Valley), and US (Virginia) regions.
    * *   Only replication pairs that are in the **Stopped** (`stopped`), **Invalid** (`invalid`), or **Failed Over** (`failovered`) state can be deleted. This operation deletes only replication pairs. The primary and secondary disks in the deleted replication pairs are retained.
    * *   To delete a replication pair, you must call this operation in the region where the primary disk is located. After the replication pair is deleted, the functionality limits are lifted from the primary and secondary disks. For example, you can attach the secondary disk, resize the disk, or read data from or write data to the disk.
    *
    * @param request DeleteDiskReplicaPairRequest
    * @return DeleteDiskReplicaPairResponse
   */
  async deleteDiskReplicaPair(request: DeleteDiskReplicaPairRequest): Promise<DeleteDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDiskReplicaPairWithOptions(request, runtime);
  }

  /**
    * *   You can use one of the following methods to check the responses:
    *     *   Method 1: Use `NextToken` to configure the query token. Set the value to the `NextToken` value that is returned in the last call to the DescribeDisks operation. Then, use `MaxResults` to specify the maximum number of entries to return on each page.
    *     *   Method 2: Use `PageSize` to specify the number of entries to return on each page and then use `PageNumber` to specify the number of the page to return.
    *         You can use only one of the preceding methods. If a large number of entries are to be returned, we recommend that you use method 1. When `NextToken` is specified, `PageSize` and `PageNumber` do not take effect and `TotalCount` in the response is invalid.
    * *   A disk that has the multi-attach feature enabled can be attached to multiple instances. You can query the attachment information of the disk based on the `Attachment` values in the response.
    * When you call an API operation by using Alibaba Cloud CLI, you must specify request parameter values of different data types in the required formats. For more information, see [Parameter format overview](~~110340~~).
    *
    * @param request DescribeDedicatedBlockStorageClusterDisksRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDedicatedBlockStorageClusterDisksResponse
   */
  async describeDedicatedBlockStorageClusterDisksWithOptions(request: DescribeDedicatedBlockStorageClusterDisksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedBlockStorageClusterDisksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbscId)) {
      query["DbscId"] = request.dbscId;
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
      action: "DescribeDedicatedBlockStorageClusterDisks",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDedicatedBlockStorageClusterDisksResponse>(await this.callApi(params, req, runtime), new DescribeDedicatedBlockStorageClusterDisksResponse({}));
  }

  /**
    * *   You can use one of the following methods to check the responses:
    *     *   Method 1: Use `NextToken` to configure the query token. Set the value to the `NextToken` value that is returned in the last call to the DescribeDisks operation. Then, use `MaxResults` to specify the maximum number of entries to return on each page.
    *     *   Method 2: Use `PageSize` to specify the number of entries to return on each page and then use `PageNumber` to specify the number of the page to return.
    *         You can use only one of the preceding methods. If a large number of entries are to be returned, we recommend that you use method 1. When `NextToken` is specified, `PageSize` and `PageNumber` do not take effect and `TotalCount` in the response is invalid.
    * *   A disk that has the multi-attach feature enabled can be attached to multiple instances. You can query the attachment information of the disk based on the `Attachment` values in the response.
    * When you call an API operation by using Alibaba Cloud CLI, you must specify request parameter values of different data types in the required formats. For more information, see [Parameter format overview](~~110340~~).
    *
    * @param request DescribeDedicatedBlockStorageClusterDisksRequest
    * @return DescribeDedicatedBlockStorageClusterDisksResponse
   */
  async describeDedicatedBlockStorageClusterDisks(request: DescribeDedicatedBlockStorageClusterDisksRequest): Promise<DescribeDedicatedBlockStorageClusterDisksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedBlockStorageClusterDisksWithOptions(request, runtime);
  }

  /**
    * >  Dedicated Block Storage Cluster is supported in the China (Heyuan), Indonesia (Jakarta), and China (Shenzhen) regions.
    * *   You can specify multiple request parameters to be queried. Specified parameters have logical AND relations. Only the specified parameters are included in the filter conditions.
    * *   We recommend that you use the NextToken and MaxResults parameters to perform a paged query. During a paged query, when you call the DescribeDedicatedBlockStorageClusters operation to retrieve the first page of results, set MaxResults to specify the maximum number of entries to return in the call. The return value of NextToken is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDedicatedBlockStorageClusters operation to retrieve a new page of results, set NextToken to the NextToken value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
    *
    * @param request DescribeDedicatedBlockStorageClustersRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDedicatedBlockStorageClustersResponse
   */
  async describeDedicatedBlockStorageClustersWithOptions(request: DescribeDedicatedBlockStorageClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDedicatedBlockStorageClustersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dedicatedBlockStorageClusterId)) {
      query["DedicatedBlockStorageClusterId"] = request.dedicatedBlockStorageClusterId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.azoneId)) {
      body["AzoneId"] = request.azoneId;
    }

    if (!Util.isUnset(request.category)) {
      body["Category"] = request.category;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDedicatedBlockStorageClusters",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDedicatedBlockStorageClustersResponse>(await this.callApi(params, req, runtime), new DescribeDedicatedBlockStorageClustersResponse({}));
  }

  /**
    * >  Dedicated Block Storage Cluster is supported in the China (Heyuan), Indonesia (Jakarta), and China (Shenzhen) regions.
    * *   You can specify multiple request parameters to be queried. Specified parameters have logical AND relations. Only the specified parameters are included in the filter conditions.
    * *   We recommend that you use the NextToken and MaxResults parameters to perform a paged query. During a paged query, when you call the DescribeDedicatedBlockStorageClusters operation to retrieve the first page of results, set MaxResults to specify the maximum number of entries to return in the call. The return value of NextToken is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDedicatedBlockStorageClusters operation to retrieve a new page of results, set NextToken to the NextToken value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
    *
    * @param request DescribeDedicatedBlockStorageClustersRequest
    * @return DescribeDedicatedBlockStorageClustersResponse
   */
  async describeDedicatedBlockStorageClusters(request: DescribeDedicatedBlockStorageClustersRequest): Promise<DescribeDedicatedBlockStorageClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedBlockStorageClustersWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    *
    * @param request DescribeDiskEventsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDiskEventsResponse
   */
  async describeDiskEventsWithOptions(request: DescribeDiskEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiskEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.diskCategory)) {
      query["DiskCategory"] = request.diskCategory;
    }

    if (!Util.isUnset(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiskEvents",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiskEventsResponse>(await this.callApi(params, req, runtime), new DescribeDiskEventsResponse({}));
  }

  /**
    * ## Usage notes
    * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    *
    * @param request DescribeDiskEventsRequest
    * @return DescribeDiskEventsResponse
   */
  async describeDiskEvents(request: DescribeDiskEventsRequest): Promise<DescribeDiskEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskEventsWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * *   CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    * *   Up to 400 monitoring data entries can be returned at a time. An error is returned if the value calculated based on the following formula is greater than 400: `(EndTime - StartTime)/Period`.
    * *   You can query the monitoring data collected in the last three days. An error is returned if the time specified by `StartTime` is more than three days prior to the current time.
    *
    * @param request DescribeDiskMonitorDataRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDiskMonitorDataResponse
   */
  async describeDiskMonitorDataWithOptions(request: DescribeDiskMonitorDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiskMonitorDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiskMonitorData",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiskMonitorDataResponse>(await this.callApi(params, req, runtime), new DescribeDiskMonitorDataResponse({}));
  }

  /**
    * ## Usage notes
    * *   CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    * *   Up to 400 monitoring data entries can be returned at a time. An error is returned if the value calculated based on the following formula is greater than 400: `(EndTime - StartTime)/Period`.
    * *   You can query the monitoring data collected in the last three days. An error is returned if the time specified by `StartTime` is more than three days prior to the current time.
    *
    * @param request DescribeDiskMonitorDataRequest
    * @return DescribeDiskMonitorDataResponse
   */
  async describeDiskMonitorData(request: DescribeDiskMonitorDataRequest): Promise<DescribeDiskMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskMonitorDataWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    *
    * @param request DescribeDiskMonitorDataListRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDiskMonitorDataListResponse
   */
  async describeDiskMonitorDataListWithOptions(request: DescribeDiskMonitorDataListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiskMonitorDataListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.diskIds)) {
      query["DiskIds"] = request.diskIds;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiskMonitorDataList",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiskMonitorDataListResponse>(await this.callApi(params, req, runtime), new DescribeDiskMonitorDataListResponse({}));
  }

  /**
    * ## Usage notes
    * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    *
    * @param request DescribeDiskMonitorDataListRequest
    * @return DescribeDiskMonitorDataListResponse
   */
  async describeDiskMonitorDataList(request: DescribeDiskMonitorDataListRequest): Promise<DescribeDiskMonitorDataListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskMonitorDataListWithOptions(request, runtime);
  }

  /**
    * To perform a paged query, set the MaxResults and NextToken parameters.
    * During a paged query, when you call the DescribeDiskReplicaGroups operation to retrieve the first page of results, set `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaGroups operation to retrieve a new page of results, set `NextToken` to the `NextToken` value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
    *
    * @param request DescribeDiskReplicaGroupsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDiskReplicaGroupsResponse
   */
  async describeDiskReplicaGroupsWithOptions(request: DescribeDiskReplicaGroupsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiskReplicaGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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

    if (!Util.isUnset(request.site)) {
      query["Site"] = request.site;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiskReplicaGroups",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiskReplicaGroupsResponse>(await this.callApi(params, req, runtime), new DescribeDiskReplicaGroupsResponse({}));
  }

  /**
    * To perform a paged query, set the MaxResults and NextToken parameters.
    * During a paged query, when you call the DescribeDiskReplicaGroups operation to retrieve the first page of results, set `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaGroups operation to retrieve a new page of results, set `NextToken` to the `NextToken` value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
    *
    * @param request DescribeDiskReplicaGroupsRequest
    * @return DescribeDiskReplicaGroupsResponse
   */
  async describeDiskReplicaGroups(request: DescribeDiskReplicaGroupsRequest): Promise<DescribeDiskReplicaGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskReplicaGroupsWithOptions(request, runtime);
  }

  async describeDiskReplicaPairProgressWithOptions(request: DescribeDiskReplicaPairProgressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiskReplicaPairProgressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiskReplicaPairProgress",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiskReplicaPairProgressResponse>(await this.callApi(params, req, runtime), new DescribeDiskReplicaPairProgressResponse({}));
  }

  async describeDiskReplicaPairProgress(request: DescribeDiskReplicaPairProgressRequest): Promise<DescribeDiskReplicaPairProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskReplicaPairProgressWithOptions(request, runtime);
  }

  /**
    * *   The async replication feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore, US (Silicon Valley), and US (Virginia) regions.
    * *   When you call this operation for a specific region, if the primary disk (source disk) or secondary disk (destination disk) of a replication pair resides within the region, the information of the replication pair is displayed in the response.
    * *   If you want to perform a paged query, configure the `NextToken` and `MaxResults` parameters. During a paged query, when you call the DescribeDiskReplicaPairs operation to retrieve the first page of results, set `MaxResults` to limit the maximum number of entries to return in the call. The return value of NextToken is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaPairs operation to retrieve a new page of results, set NextToken to the NextToken value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
    *
    * @param request DescribeDiskReplicaPairsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeDiskReplicaPairsResponse
   */
  async describeDiskReplicaPairsWithOptions(request: DescribeDiskReplicaPairsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiskReplicaPairsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pairIds)) {
      query["PairIds"] = request.pairIds;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.site)) {
      query["Site"] = request.site;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDiskReplicaPairs",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDiskReplicaPairsResponse>(await this.callApi(params, req, runtime), new DescribeDiskReplicaPairsResponse({}));
  }

  /**
    * *   The async replication feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore, US (Silicon Valley), and US (Virginia) regions.
    * *   When you call this operation for a specific region, if the primary disk (source disk) or secondary disk (destination disk) of a replication pair resides within the region, the information of the replication pair is displayed in the response.
    * *   If you want to perform a paged query, configure the `NextToken` and `MaxResults` parameters. During a paged query, when you call the DescribeDiskReplicaPairs operation to retrieve the first page of results, set `MaxResults` to limit the maximum number of entries to return in the call. The return value of NextToken is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaPairs operation to retrieve a new page of results, set NextToken to the NextToken value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
    *
    * @param request DescribeDiskReplicaPairsRequest
    * @return DescribeDiskReplicaPairsResponse
   */
  async describeDiskReplicaPairs(request: DescribeDiskReplicaPairsRequest): Promise<DescribeDiskReplicaPairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskReplicaPairsWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    *
    * @param request DescribeLensServiceStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeLensServiceStatusResponse
   */
  async describeLensServiceStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeLensServiceStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeLensServiceStatus",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLensServiceStatusResponse>(await this.callApi(params, req, runtime), new DescribeLensServiceStatusResponse({}));
  }

  /**
    * ## Usage notes
    * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    *
    * @return DescribeLensServiceStatusResponse
   */
  async describeLensServiceStatus(): Promise<DescribeLensServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLensServiceStatusWithOptions(runtime);
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

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2021-07-30",
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

  /**
    * The operation that you want to perform. Set the value to **FailoverDiskReplicaGroup**.
    *
    * @param request FailoverDiskReplicaGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return FailoverDiskReplicaGroupResponse
   */
  async failoverDiskReplicaGroupWithOptions(request: FailoverDiskReplicaGroupRequest, runtime: $Util.RuntimeOptions): Promise<FailoverDiskReplicaGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FailoverDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FailoverDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new FailoverDiskReplicaGroupResponse({}));
  }

  /**
    * The operation that you want to perform. Set the value to **FailoverDiskReplicaGroup**.
    *
    * @param request FailoverDiskReplicaGroupRequest
    * @return FailoverDiskReplicaGroupResponse
   */
  async failoverDiskReplicaGroup(request: FailoverDiskReplicaGroupRequest): Promise<FailoverDiskReplicaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.failoverDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
    * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](~~25693~~).
    *
    * @param request FailoverDiskReplicaPairRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return FailoverDiskReplicaPairResponse
   */
  async failoverDiskReplicaPairWithOptions(request: FailoverDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<FailoverDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FailoverDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FailoverDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new FailoverDiskReplicaPairResponse({}));
  }

  /**
    * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](~~25693~~).
    *
    * @param request FailoverDiskReplicaPairRequest
    * @return FailoverDiskReplicaPairResponse
   */
  async failoverDiskReplicaPair(request: FailoverDiskReplicaPairRequest): Promise<FailoverDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.failoverDiskReplicaPairWithOptions(request, runtime);
  }

  /**
    * Specify at least one of the following parameters or parameter pairs in a request to determine a query object:
    * *   `ResourceId.N`
    * *   `Tag.N` parameter pair (`Tag.N.Key` and `Tag.N.Value`)
    * If you set `Tag.N` and `ResourceId.N` at the same time, the EBS resources that match both the parameters are returned.
    *
    * @param request ListTagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      version: "2021-07-30",
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

  /**
    * Specify at least one of the following parameters or parameter pairs in a request to determine a query object:
    * *   `ResourceId.N`
    * *   `Tag.N` parameter pair (`Tag.N.Key` and `Tag.N.Value`)
    * If you set `Tag.N` and `ResourceId.N` at the same time, the EBS resources that match both the parameters are returned.
    *
    * @param request ListTagResourcesRequest
    * @return ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
    * You can call this operation to modify the information of a dedicated block storage cluster. The information includes the name and description of the cluster.
    *
    * @param request ModifyDedicatedBlockStorageClusterAttributeRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDedicatedBlockStorageClusterAttributeResponse
   */
  async modifyDedicatedBlockStorageClusterAttributeWithOptions(request: ModifyDedicatedBlockStorageClusterAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDedicatedBlockStorageClusterAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dbscId)) {
      query["DbscId"] = request.dbscId;
    }

    if (!Util.isUnset(request.dbscName)) {
      query["DbscName"] = request.dbscName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDedicatedBlockStorageClusterAttribute",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDedicatedBlockStorageClusterAttributeResponse>(await this.callApi(params, req, runtime), new ModifyDedicatedBlockStorageClusterAttributeResponse({}));
  }

  /**
    * You can call this operation to modify the information of a dedicated block storage cluster. The information includes the name and description of the cluster.
    *
    * @param request ModifyDedicatedBlockStorageClusterAttributeRequest
    * @return ModifyDedicatedBlockStorageClusterAttributeResponse
   */
  async modifyDedicatedBlockStorageClusterAttribute(request: ModifyDedicatedBlockStorageClusterAttributeRequest): Promise<ModifyDedicatedBlockStorageClusterAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedBlockStorageClusterAttributeWithOptions(request, runtime);
  }

  /**
    * *   The replication pair-consistent group feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore (Singapore), US (Silicon Valley), and US (Virginia) regions.
    * *   The replication pair-consistent group must be in the **Created** (`created`) or **Stopped** (`stopped`) state.
    *
    * @param request ModifyDiskReplicaGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDiskReplicaGroupResponse
   */
  async modifyDiskReplicaGroupWithOptions(request: ModifyDiskReplicaGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDiskReplicaGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.RPO)) {
      query["RPO"] = request.RPO;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new ModifyDiskReplicaGroupResponse({}));
  }

  /**
    * *   The replication pair-consistent group feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore (Singapore), US (Silicon Valley), and US (Virginia) regions.
    * *   The replication pair-consistent group must be in the **Created** (`created`) or **Stopped** (`stopped`) state.
    *
    * @param request ModifyDiskReplicaGroupRequest
    * @return ModifyDiskReplicaGroupResponse
   */
  async modifyDiskReplicaGroup(request: ModifyDiskReplicaGroupRequest): Promise<ModifyDiskReplicaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
    * The name of the replication pair.
    *
    * @param request ModifyDiskReplicaPairRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ModifyDiskReplicaPairResponse
   */
  async modifyDiskReplicaPairWithOptions(request: ModifyDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.pairName)) {
      query["PairName"] = request.pairName;
    }

    if (!Util.isUnset(request.RPO)) {
      query["RPO"] = request.RPO;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new ModifyDiskReplicaPairResponse({}));
  }

  /**
    * The name of the replication pair.
    *
    * @param request ModifyDiskReplicaPairRequest
    * @return ModifyDiskReplicaPairResponse
   */
  async modifyDiskReplicaPair(request: ModifyDiskReplicaPairRequest): Promise<ModifyDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDiskReplicaPairWithOptions(request, runtime);
  }

  /**
    * *   The replication pair-consistent group feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore (Singapore), US (Silicon Valley), and US (Virginia) regions.
    * *   The replication pair-consistent group from which you want to remove a replication pair must be in the **Created** (`created`), **Stopped** (`stopped`), or **Invalid** (`invalid`) state.
    *
    * @param request RemoveDiskReplicaPairRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RemoveDiskReplicaPairResponse
   */
  async removeDiskReplicaPairWithOptions(request: RemoveDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<RemoveDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    if (!Util.isUnset(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RemoveDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new RemoveDiskReplicaPairResponse({}));
  }

  /**
    * *   The replication pair-consistent group feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore (Singapore), US (Silicon Valley), and US (Virginia) regions.
    * *   The replication pair-consistent group from which you want to remove a replication pair must be in the **Created** (`created`), **Stopped** (`stopped`), or **Invalid** (`invalid`) state.
    *
    * @param request RemoveDiskReplicaPairRequest
    * @return RemoveDiskReplicaPairResponse
   */
  async removeDiskReplicaPair(request: RemoveDiskReplicaPairRequest): Promise<RemoveDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDiskReplicaPairWithOptions(request, runtime);
  }

  /**
    * The operation that you want to perform. Set the value to **ReprotectDiskReplicaGroup**.
    *
    * @param request ReprotectDiskReplicaGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ReprotectDiskReplicaGroupResponse
   */
  async reprotectDiskReplicaGroupWithOptions(request: ReprotectDiskReplicaGroupRequest, runtime: $Util.RuntimeOptions): Promise<ReprotectDiskReplicaGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReprotectDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReprotectDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new ReprotectDiskReplicaGroupResponse({}));
  }

  /**
    * The operation that you want to perform. Set the value to **ReprotectDiskReplicaGroup**.
    *
    * @param request ReprotectDiskReplicaGroupRequest
    * @return ReprotectDiskReplicaGroupResponse
   */
  async reprotectDiskReplicaGroup(request: ReprotectDiskReplicaGroupRequest): Promise<ReprotectDiskReplicaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reprotectDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
    * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](~~25693~~).
    *
    * @param request ReprotectDiskReplicaPairRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ReprotectDiskReplicaPairResponse
   */
  async reprotectDiskReplicaPairWithOptions(request: ReprotectDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<ReprotectDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReprotectDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ReprotectDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new ReprotectDiskReplicaPairResponse({}));
  }

  /**
    * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](~~25693~~).
    *
    * @param request ReprotectDiskReplicaPairRequest
    * @return ReprotectDiskReplicaPairResponse
   */
  async reprotectDiskReplicaPair(request: ReprotectDiskReplicaPairRequest): Promise<ReprotectDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reprotectDiskReplicaPairWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * *   CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    * *   CloudLens for EBS can be used to monitor the performance of enhanced SSDs (ESSDs), standard SSDs, and ultra disks. After you enable CloudLens for EBS, you can enable the data collection feature to obtain the near real-time monitoring data. For more information, see [Enable near real-time monitoring for disks](~~354196~~).
    *
    * @param tmpReq StartDiskMonitorRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartDiskMonitorResponse
   */
  async startDiskMonitorWithOptions(tmpReq: StartDiskMonitorRequest, runtime: $Util.RuntimeOptions): Promise<StartDiskMonitorResponse> {
    Util.validateModel(tmpReq);
    let request = new StartDiskMonitorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.diskIds)) {
      request.diskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.diskIds, "DiskIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.diskIdsShrink)) {
      query["DiskIds"] = request.diskIdsShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartDiskMonitor",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartDiskMonitorResponse>(await this.callApi(params, req, runtime), new StartDiskMonitorResponse({}));
  }

  /**
    * ## Usage notes
    * *   CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    * *   CloudLens for EBS can be used to monitor the performance of enhanced SSDs (ESSDs), standard SSDs, and ultra disks. After you enable CloudLens for EBS, you can enable the data collection feature to obtain the near real-time monitoring data. For more information, see [Enable near real-time monitoring for disks](~~354196~~).
    *
    * @param request StartDiskMonitorRequest
    * @return StartDiskMonitorResponse
   */
  async startDiskMonitor(request: StartDiskMonitorRequest): Promise<StartDiskMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDiskMonitorWithOptions(request, runtime);
  }

  /**
    * The operation that you want to perform. Set the value to **StartDiskReplicaGroup**.
    *
    * @param request StartDiskReplicaGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartDiskReplicaGroupResponse
   */
  async startDiskReplicaGroupWithOptions(request: StartDiskReplicaGroupRequest, runtime: $Util.RuntimeOptions): Promise<StartDiskReplicaGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.oneShot)) {
      query["OneShot"] = request.oneShot;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new StartDiskReplicaGroupResponse({}));
  }

  /**
    * The operation that you want to perform. Set the value to **StartDiskReplicaGroup**.
    *
    * @param request StartDiskReplicaGroupRequest
    * @return StartDiskReplicaGroupResponse
   */
  async startDiskReplicaGroup(request: StartDiskReplicaGroupRequest): Promise<StartDiskReplicaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
    * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](~~25693~~).
    *
    * @param request StartDiskReplicaPairRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StartDiskReplicaPairResponse
   */
  async startDiskReplicaPairWithOptions(request: StartDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<StartDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.oneShot)) {
      query["OneShot"] = request.oneShot;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new StartDiskReplicaPairResponse({}));
  }

  /**
    * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](~~25693~~).
    *
    * @param request StartDiskReplicaPairRequest
    * @return StartDiskReplicaPairResponse
   */
  async startDiskReplicaPair(request: StartDiskReplicaPairRequest): Promise<StartDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDiskReplicaPairWithOptions(request, runtime);
  }

  /**
    * ## Usage notes
    * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    *
    * @param tmpReq StopDiskMonitorRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopDiskMonitorResponse
   */
  async stopDiskMonitorWithOptions(tmpReq: StopDiskMonitorRequest, runtime: $Util.RuntimeOptions): Promise<StopDiskMonitorResponse> {
    Util.validateModel(tmpReq);
    let request = new StopDiskMonitorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.diskIds)) {
      request.diskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.diskIds, "DiskIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.diskIdsShrink)) {
      query["DiskIds"] = request.diskIdsShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopDiskMonitor",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopDiskMonitorResponse>(await this.callApi(params, req, runtime), new StopDiskMonitorResponse({}));
  }

  /**
    * ## Usage notes
    * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
    *
    * @param request StopDiskMonitorRequest
    * @return StopDiskMonitorResponse
   */
  async stopDiskMonitor(request: StopDiskMonitorRequest): Promise<StopDiskMonitorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDiskMonitorWithOptions(request, runtime);
  }

  /**
    * *   The replication pair-consistent group feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore (Singapore), US (Silicon Valley), and US (Virginia) regions.
    * *   The replication pair-consistent group that you want to stop must be in the **One-time Syncing** (`manual_syncing`), **Syncing** (`syncing`), **Normal** (`normal`), **Stopping** (`stopping`), **Stop Failed** (`stop_failed`), or **Stopped** (`stopped`) state.
    * *   When a replication pair-consistent group is stopped, it enters the **Stopped** (`stopped`) state. If a replication pair-consistent group cannot be stopped, the state of the group remains unchanged or changes to **Stop Failed** (`stop_failed`). In this case, try again later.
    *
    * @param request StopDiskReplicaGroupRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopDiskReplicaGroupResponse
   */
  async stopDiskReplicaGroupWithOptions(request: StopDiskReplicaGroupRequest, runtime: $Util.RuntimeOptions): Promise<StopDiskReplicaGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaGroupId)) {
      query["ReplicaGroupId"] = request.replicaGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopDiskReplicaGroup",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopDiskReplicaGroupResponse>(await this.callApi(params, req, runtime), new StopDiskReplicaGroupResponse({}));
  }

  /**
    * *   The replication pair-consistent group feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore (Singapore), US (Silicon Valley), and US (Virginia) regions.
    * *   The replication pair-consistent group that you want to stop must be in the **One-time Syncing** (`manual_syncing`), **Syncing** (`syncing`), **Normal** (`normal`), **Stopping** (`stopping`), **Stop Failed** (`stop_failed`), or **Stopped** (`stopped`) state.
    * *   When a replication pair-consistent group is stopped, it enters the **Stopped** (`stopped`) state. If a replication pair-consistent group cannot be stopped, the state of the group remains unchanged or changes to **Stop Failed** (`stop_failed`). In this case, try again later.
    *
    * @param request StopDiskReplicaGroupRequest
    * @return StopDiskReplicaGroupResponse
   */
  async stopDiskReplicaGroup(request: StopDiskReplicaGroupRequest): Promise<StopDiskReplicaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
    * *   The async replication feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore (Singapore), US (Silicon Valley), and US (Virginia) regions.
    * *   Only replication pairs that are in the **Initial Syncing** (`initial_syncing`), **Syncing** (`syncing`), **One-time Syncing** (`manual_syncing`), or **Normal** (`normal`) state can be stopped. When a replication pair is stopped, it enters the Stopped (`stopped`) state. The secondary disk rolls back to the point in time when the last asynchronous replication was complete and drops all the data that is being replicated from the primary disk.
    *
    * @param request StopDiskReplicaPairRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopDiskReplicaPairResponse
   */
  async stopDiskReplicaPairWithOptions(request: StopDiskReplicaPairRequest, runtime: $Util.RuntimeOptions): Promise<StopDiskReplicaPairResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.replicaPairId)) {
      query["ReplicaPairId"] = request.replicaPairId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopDiskReplicaPair",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopDiskReplicaPairResponse>(await this.callApi(params, req, runtime), new StopDiskReplicaPairResponse({}));
  }

  /**
    * *   The async replication feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore (Singapore), US (Silicon Valley), and US (Virginia) regions.
    * *   Only replication pairs that are in the **Initial Syncing** (`initial_syncing`), **Syncing** (`syncing`), **One-time Syncing** (`manual_syncing`), or **Normal** (`normal`) state can be stopped. When a replication pair is stopped, it enters the Stopped (`stopped`) state. The secondary disk rolls back to the point in time when the last asynchronous replication was complete and drops all the data that is being replicated from the primary disk.
    *
    * @param request StopDiskReplicaPairRequest
    * @return StopDiskReplicaPairResponse
   */
  async stopDiskReplicaPair(request: StopDiskReplicaPairRequest): Promise<StopDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDiskReplicaPairWithOptions(request, runtime);
  }

  /**
    * Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number of tags is reached, an error message is returned. For more information, see the "Tag limits" section in [Limits](~~25412~~).
    *
    * @param request TagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      action: "TagResources",
      version: "2021-07-30",
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

  /**
    * Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number of tags is reached, an error message is returned. For more information, see the "Tag limits" section in [Limits](~~25412~~).
    *
    * @param request TagResourcesRequest
    * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
    * *   You can remove up to 20 tags at a time.
    * *   After a tag is removed from an EBS resource, the tag is automatically deleted if the tag is not added to any instance.
    *
    * @param request UntagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      version: "2021-07-30",
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

  /**
    * *   You can remove up to 20 tags at a time.
    * *   After a tag is removed from an EBS resource, the tag is automatically deleted if the tag is not added to any instance.
    *
    * @param request UntagResourcesRequest
    * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

}
