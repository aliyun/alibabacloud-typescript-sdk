// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddTagsBatchRequest extends $tea.Model {
  clientToken?: string;
  dbfsList?: string;
  regionId?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dbfsList: 'DbfsList',
      regionId: 'RegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dbfsList: 'string',
      regionId: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddTagsBatchResponseBody extends $tea.Model {
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

export class AddTagsBatchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddTagsBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddTagsBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDbfsRequest extends $tea.Model {
  attachMode?: string;
  attachPoint?: string;
  ECSInstanceId?: string;
  fsId?: string;
  regionId?: string;
  serverUrl?: string;
  static names(): { [key: string]: string } {
    return {
      attachMode: 'AttachMode',
      attachPoint: 'AttachPoint',
      ECSInstanceId: 'ECSInstanceId',
      fsId: 'FsId',
      regionId: 'RegionId',
      serverUrl: 'ServerUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachMode: 'string',
      attachPoint: 'string',
      ECSInstanceId: 'string',
      fsId: 'string',
      regionId: 'string',
      serverUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDbfsResponseBody extends $tea.Model {
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

export class AttachDbfsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AttachDbfsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AttachDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConstantsRequest extends $tea.Model {
  constantsData?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      constantsData: 'ConstantsData',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantsData: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConstantsResponseBody extends $tea.Model {
  data?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class CreateConstantsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateConstantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateConstantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDbfsRequest extends $tea.Model {
  category?: string;
  clientToken?: string;
  deleteSnapshot?: boolean;
  enableRaid?: boolean;
  encryption?: boolean;
  fsName?: string;
  instanceType?: string;
  KMSKeyId?: string;
  performanceLevel?: string;
  raidStripeUnitNumber?: number;
  regionId?: string;
  sizeG?: number;
  snapshotId?: string;
  usedScene?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clientToken: 'ClientToken',
      deleteSnapshot: 'DeleteSnapshot',
      enableRaid: 'EnableRaid',
      encryption: 'Encryption',
      fsName: 'FsName',
      instanceType: 'InstanceType',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      raidStripeUnitNumber: 'RaidStripeUnitNumber',
      regionId: 'RegionId',
      sizeG: 'SizeG',
      snapshotId: 'SnapshotId',
      usedScene: 'UsedScene',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clientToken: 'string',
      deleteSnapshot: 'boolean',
      enableRaid: 'boolean',
      encryption: 'boolean',
      fsName: 'string',
      instanceType: 'string',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      raidStripeUnitNumber: 'number',
      regionId: 'string',
      sizeG: 'number',
      snapshotId: 'string',
      usedScene: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDbfsResponseBody extends $tea.Model {
  fsId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fsId: 'FsId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fsId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDbfsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDbfsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleRequest extends $tea.Model {
  clientToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

export class CreateSnapshotRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  fsId?: string;
  regionId?: string;
  retentionDays?: number;
  snapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      fsId: 'FsId',
      regionId: 'RegionId',
      retentionDays: 'RetentionDays',
      snapshotName: 'SnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      fsId: 'string',
      regionId: 'string',
      retentionDays: 'number',
      snapshotName: 'string',
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

export class DeleteConstantsRequest extends $tea.Model {
  constantsData?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      constantsData: 'ConstantsData',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantsData: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConstantsResponseBody extends $tea.Model {
  data?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class DeleteConstantsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConstantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConstantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDbfsRequest extends $tea.Model {
  fsId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fsId: 'FsId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fsId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDbfsResponseBody extends $tea.Model {
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

export class DeleteDbfsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDbfsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotRequest extends $tea.Model {
  force?: boolean;
  regionId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      regionId: 'string',
      snapshotId: 'string',
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

export class DeleteTagsBatchRequest extends $tea.Model {
  dbfsList?: string;
  regionId?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      dbfsList: 'DbfsList',
      regionId: 'RegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbfsList: 'string',
      regionId: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTagsBatchResponseBody extends $tea.Model {
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

export class DeleteTagsBatchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTagsBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTagsBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbfsSpecificationsRequest extends $tea.Model {
  category?: string;
  ecsInstanceType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      ecsInstanceType: 'EcsInstanceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      ecsInstanceType: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbfsSpecificationsResponseBody extends $tea.Model {
  maxDbfsNumberPerEcs?: { [key: string]: any };
  requestId?: string;
  supportedEcsInstanceTypeFamily?: string[];
  static names(): { [key: string]: string } {
    return {
      maxDbfsNumberPerEcs: 'MaxDbfsNumberPerEcs',
      requestId: 'RequestId',
      supportedEcsInstanceTypeFamily: 'SupportedEcsInstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxDbfsNumberPerEcs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
      supportedEcsInstanceTypeFamily: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbfsSpecificationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDbfsSpecificationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDbfsSpecificationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesRequest extends $tea.Model {
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

export class DescribeInstanceTypesResponseBody extends $tea.Model {
  instanceTypes?: DescribeInstanceTypesResponseBodyInstanceTypes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: { 'type': 'array', 'itemType': DescribeInstanceTypesResponseBodyInstanceTypes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDbfsRequest extends $tea.Model {
  ECSInstanceId?: string;
  fsId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ECSInstanceId: 'ECSInstanceId',
      fsId: 'FsId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ECSInstanceId: 'string',
      fsId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDbfsResponseBody extends $tea.Model {
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

export class DetachDbfsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetachDbfsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetachDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbfsRequest extends $tea.Model {
  fsId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fsId: 'FsId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fsId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbfsResponseBody extends $tea.Model {
  DBFSInfo?: GetDbfsResponseBodyDBFSInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBFSInfo: 'DBFSInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBFSInfo: GetDbfsResponseBodyDBFSInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbfsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDbfsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleRequest extends $tea.Model {
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

export class GetServiceLinkedRoleResponseBody extends $tea.Model {
  accountId?: string;
  dbfsLinkedRole?: boolean;
  regionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      dbfsLinkedRole: 'DbfsLinkedRole',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      dbfsLinkedRole: 'boolean',
      regionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceLinkedRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConstantsRequest extends $tea.Model {
  constantsData?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      constantsData: 'ConstantsData',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantsData: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConstantsResponseBody extends $tea.Model {
  data?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class ListConstantsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConstantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConstantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsRequest extends $tea.Model {
  filterKey?: string;
  filterValue?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  sortKey?: string;
  sortType?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      filterKey: 'FilterKey',
      filterValue: 'FilterValue',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortKey: 'SortKey',
      sortType: 'SortType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterKey: 'string',
      filterValue: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sortKey: 'string',
      sortType: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsResponseBody extends $tea.Model {
  DBFSInfo?: ListDbfsResponseBodyDBFSInfo[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBFSInfo: 'DBFSInfo',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBFSInfo: { 'type': 'array', 'itemType': ListDbfsResponseBodyDBFSInfo },
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

export class ListDbfsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDbfsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsAttachableEcsInstancesRequest extends $tea.Model {
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

export class ListDbfsAttachableEcsInstancesResponseBody extends $tea.Model {
  ecsLabelInfo?: ListDbfsAttachableEcsInstancesResponseBodyEcsLabelInfo[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsLabelInfo: 'EcsLabelInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsLabelInfo: { 'type': 'array', 'itemType': ListDbfsAttachableEcsInstancesResponseBodyEcsLabelInfo },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsAttachableEcsInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDbfsAttachableEcsInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDbfsAttachableEcsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsAttachedEcsInstancesRequest extends $tea.Model {
  fsId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fsId: 'FsId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fsId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsAttachedEcsInstancesResponseBody extends $tea.Model {
  ecsLabelInfo?: ListDbfsAttachedEcsInstancesResponseBodyEcsLabelInfo[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsLabelInfo: 'EcsLabelInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsLabelInfo: { 'type': 'array', 'itemType': ListDbfsAttachedEcsInstancesResponseBodyEcsLabelInfo },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsAttachedEcsInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDbfsAttachedEcsInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDbfsAttachedEcsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotRequest extends $tea.Model {
  filterKey?: string;
  filterValue?: string;
  fsId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  snapshotIds?: string;
  snapshotName?: string;
  snapshotType?: string;
  sortKey?: string;
  sortType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      filterKey: 'FilterKey',
      filterValue: 'FilterValue',
      fsId: 'FsId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      snapshotIds: 'SnapshotIds',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sortKey: 'SortKey',
      sortType: 'SortType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterKey: 'string',
      filterValue: 'string',
      fsId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      snapshotIds: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sortKey: 'string',
      sortType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  snapshots?: ListSnapshotResponseBodySnapshots[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': ListSnapshotResponseBodySnapshots },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
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

export class ListTagKeysResponseBody extends $tea.Model {
  requestId?: string;
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $tea.Model {
  regionId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponseBody extends $tea.Model {
  requestId?: string;
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagValuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskRequest extends $tea.Model {
  filterKey?: string;
  filterValue?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  sortKey?: string;
  sortType?: string;
  static names(): { [key: string]: string } {
    return {
      filterKey: 'FilterKey',
      filterValue: 'FilterValue',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortKey: 'SortKey',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterKey: 'string',
      filterValue: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sortKey: 'string',
      sortType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tasks?: ListTaskResponseBodyTasks[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListTaskResponseBodyTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpreateConstantsRequest extends $tea.Model {
  constantsData?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      constantsData: 'ConstantsData',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantsData: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpreateConstantsResponseBody extends $tea.Model {
  accessData?: string;
  data?: string;
  endpointData?: string;
  masterData?: string;
  osversionData?: string;
  pageNumber?: number;
  pageSize?: number;
  productCodeData?: string;
  regionData?: string;
  requestId?: string;
  totalCount?: number;
  zoneData?: string;
  static names(): { [key: string]: string } {
    return {
      accessData: 'AccessData',
      data: 'Data',
      endpointData: 'EndpointData',
      masterData: 'MasterData',
      osversionData: 'OsversionData',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productCodeData: 'ProductCodeData',
      regionData: 'RegionData',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      zoneData: 'ZoneData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessData: 'string',
      data: 'string',
      endpointData: 'string',
      masterData: 'string',
      osversionData: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productCodeData: 'string',
      regionData: 'string',
      requestId: 'string',
      totalCount: 'number',
      zoneData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpreateConstantsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpreateConstantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpreateConstantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameDbfsRequest extends $tea.Model {
  fsId?: string;
  fsName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fsId: 'FsId',
      fsName: 'FsName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fsId: 'string',
      fsName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameDbfsResponseBody extends $tea.Model {
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

export class RenameDbfsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenameDbfsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenameDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDbfsRequest extends $tea.Model {
  fsId?: string;
  regionId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      fsId: 'FsId',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fsId: 'string',
      regionId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDbfsResponseBody extends $tea.Model {
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

export class ResetDbfsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetDbfsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeDbfsRequest extends $tea.Model {
  fsId?: string;
  newSizeG?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fsId: 'FsId',
      newSizeG: 'NewSizeG',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fsId: 'string',
      newSizeG: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeDbfsResponseBody extends $tea.Model {
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

export class ResizeDbfsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResizeDbfsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResizeDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagDbfsRequest extends $tea.Model {
  dbfsId?: string;
  regionId?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      dbfsId: 'DbfsId',
      regionId: 'RegionId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbfsId: 'string',
      regionId: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagDbfsResponseBody extends $tea.Model {
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

export class TagDbfsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagDbfsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConstantsRequest extends $tea.Model {
  constantsData?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      constantsData: 'ConstantsData',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constantsData: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConstantsResponseBody extends $tea.Model {
  data?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class UpdateConstantsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateConstantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateConstantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskRequest extends $tea.Model {
  regionId?: string;
  taskIds?: string;
  taskProgress?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      taskIds: 'TaskIds',
      taskProgress: 'TaskProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      taskIds: 'string',
      taskProgress: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskResponseBody extends $tea.Model {
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

export class UpdateTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypes extends $tea.Model {
  cpuCoreCount?: number;
  instanceTypeDescription?: string;
  instanceTypeId?: string;
  memorySize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCoreCount: 'CpuCoreCount',
      instanceTypeDescription: 'InstanceTypeDescription',
      instanceTypeId: 'InstanceTypeId',
      memorySize: 'MemorySize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreCount: 'number',
      instanceTypeDescription: 'string',
      instanceTypeId: 'string',
      memorySize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbfsResponseBodyDBFSInfoEbsList extends $tea.Model {
  ebsId?: string;
  sizeG?: number;
  static names(): { [key: string]: string } {
    return {
      ebsId: 'EbsId',
      sizeG: 'SizeG',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ebsId: 'string',
      sizeG: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbfsResponseBodyDBFSInfoEcsList extends $tea.Model {
  ecsId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsId: 'EcsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbfsResponseBodyDBFSInfoTags extends $tea.Model {
  id?: number;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbfsResponseBodyDBFSInfo extends $tea.Model {
  attachNodeNumber?: number;
  category?: string;
  createdTime?: string;
  DBFSClusterId?: string;
  description?: string;
  ebsList?: GetDbfsResponseBodyDBFSInfoEbsList[];
  ecsList?: GetDbfsResponseBodyDBFSInfoEcsList[];
  enableRaid?: boolean;
  encryption?: boolean;
  fsId?: string;
  fsName?: string;
  instanceType?: string;
  KMSKeyId?: string;
  lastMountTime?: string;
  lastUmountTime?: string;
  payType?: string;
  performanceLevel?: string;
  raidStrip?: number;
  regionId?: string;
  sizeG?: number;
  status?: string;
  tags?: GetDbfsResponseBodyDBFSInfoTags[];
  usedScene?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      attachNodeNumber: 'AttachNodeNumber',
      category: 'Category',
      createdTime: 'CreatedTime',
      DBFSClusterId: 'DBFSClusterId',
      description: 'Description',
      ebsList: 'EbsList',
      ecsList: 'EcsList',
      enableRaid: 'EnableRaid',
      encryption: 'Encryption',
      fsId: 'FsId',
      fsName: 'FsName',
      instanceType: 'InstanceType',
      KMSKeyId: 'KMSKeyId',
      lastMountTime: 'LastMountTime',
      lastUmountTime: 'LastUmountTime',
      payType: 'PayType',
      performanceLevel: 'PerformanceLevel',
      raidStrip: 'RaidStrip',
      regionId: 'RegionId',
      sizeG: 'SizeG',
      status: 'Status',
      tags: 'Tags',
      usedScene: 'UsedScene',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachNodeNumber: 'number',
      category: 'string',
      createdTime: 'string',
      DBFSClusterId: 'string',
      description: 'string',
      ebsList: { 'type': 'array', 'itemType': GetDbfsResponseBodyDBFSInfoEbsList },
      ecsList: { 'type': 'array', 'itemType': GetDbfsResponseBodyDBFSInfoEcsList },
      enableRaid: 'boolean',
      encryption: 'boolean',
      fsId: 'string',
      fsName: 'string',
      instanceType: 'string',
      KMSKeyId: 'string',
      lastMountTime: 'string',
      lastUmountTime: 'string',
      payType: 'string',
      performanceLevel: 'string',
      raidStrip: 'number',
      regionId: 'string',
      sizeG: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetDbfsResponseBodyDBFSInfoTags },
      usedScene: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsResponseBodyDBFSInfoEbsList extends $tea.Model {
  ebsId?: string;
  sizeG?: number;
  static names(): { [key: string]: string } {
    return {
      ebsId: 'EbsId',
      sizeG: 'SizeG',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ebsId: 'string',
      sizeG: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsResponseBodyDBFSInfoEcsList extends $tea.Model {
  ecsId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsId: 'EcsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsResponseBodyDBFSInfoTags extends $tea.Model {
  id?: number;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsResponseBodyDBFSInfo extends $tea.Model {
  attachNodeNumber?: number;
  category?: string;
  createdTime?: string;
  DBFSClusterId?: string;
  ebsList?: ListDbfsResponseBodyDBFSInfoEbsList[];
  ecsList?: ListDbfsResponseBodyDBFSInfoEcsList[];
  enableRaid?: boolean;
  encryption?: boolean;
  fsId?: string;
  fsName?: string;
  instanceType?: string;
  KMSKeyId?: string;
  lastMountTime?: string;
  lastUmountTime?: string;
  payType?: string;
  performanceLevel?: string;
  raidStrip?: number;
  regionId?: string;
  sizeG?: number;
  status?: string;
  tags?: ListDbfsResponseBodyDBFSInfoTags[];
  usedScene?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      attachNodeNumber: 'AttachNodeNumber',
      category: 'Category',
      createdTime: 'CreatedTime',
      DBFSClusterId: 'DBFSClusterId',
      ebsList: 'EbsList',
      ecsList: 'EcsList',
      enableRaid: 'EnableRaid',
      encryption: 'Encryption',
      fsId: 'FsId',
      fsName: 'FsName',
      instanceType: 'InstanceType',
      KMSKeyId: 'KMSKeyId',
      lastMountTime: 'LastMountTime',
      lastUmountTime: 'LastUmountTime',
      payType: 'PayType',
      performanceLevel: 'PerformanceLevel',
      raidStrip: 'RaidStrip',
      regionId: 'RegionId',
      sizeG: 'SizeG',
      status: 'Status',
      tags: 'Tags',
      usedScene: 'UsedScene',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachNodeNumber: 'number',
      category: 'string',
      createdTime: 'string',
      DBFSClusterId: 'string',
      ebsList: { 'type': 'array', 'itemType': ListDbfsResponseBodyDBFSInfoEbsList },
      ecsList: { 'type': 'array', 'itemType': ListDbfsResponseBodyDBFSInfoEcsList },
      enableRaid: 'boolean',
      encryption: 'boolean',
      fsId: 'string',
      fsName: 'string',
      instanceType: 'string',
      KMSKeyId: 'string',
      lastMountTime: 'string',
      lastUmountTime: 'string',
      payType: 'string',
      performanceLevel: 'string',
      raidStrip: 'number',
      regionId: 'string',
      sizeG: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListDbfsResponseBodyDBFSInfoTags },
      usedScene: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsAttachableEcsInstancesResponseBodyEcsLabelInfo extends $tea.Model {
  label?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsAttachedEcsInstancesResponseBodyEcsLabelInfo extends $tea.Model {
  mountPoint?: string;
  mountedTime?: string;
  label?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      mountPoint: 'MountPoint',
      mountedTime: 'MountedTime',
      label: 'label',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoint: 'string',
      mountedTime: 'string',
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotResponseBodySnapshots extends $tea.Model {
  category?: string;
  creationTime?: string;
  description?: string;
  lastModifiedTime?: string;
  progress?: string;
  remainTime?: number;
  retentionDays?: number;
  snapshotId?: string;
  snapshotName?: string;
  snapshotType?: string;
  sourceFsId?: string;
  sourceFsSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      creationTime: 'CreationTime',
      description: 'Description',
      lastModifiedTime: 'LastModifiedTime',
      progress: 'Progress',
      remainTime: 'RemainTime',
      retentionDays: 'RetentionDays',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      sourceFsId: 'SourceFsId',
      sourceFsSize: 'SourceFsSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      creationTime: 'string',
      description: 'string',
      lastModifiedTime: 'string',
      progress: 'string',
      remainTime: 'number',
      retentionDays: 'number',
      snapshotId: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      sourceFsId: 'string',
      sourceFsSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBodyTasks extends $tea.Model {
  clientToken?: string;
  completionTime?: string;
  createdTime?: string;
  id?: number;
  maxRetry?: number;
  nextExecutionTime?: string;
  priority?: string;
  taskAdder?: string;
  taskErrorReason?: string;
  taskExecutionCounts?: number;
  taskName?: string;
  taskOwner?: string;
  taskProgress?: number;
  taskProgressDescription?: string;
  taskRunner?: string;
  taskStatus?: string;
  taskStatusCode?: number;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      completionTime: 'CompletionTime',
      createdTime: 'CreatedTime',
      id: 'Id',
      maxRetry: 'MaxRetry',
      nextExecutionTime: 'NextExecutionTime',
      priority: 'Priority',
      taskAdder: 'TaskAdder',
      taskErrorReason: 'TaskErrorReason',
      taskExecutionCounts: 'TaskExecutionCounts',
      taskName: 'TaskName',
      taskOwner: 'TaskOwner',
      taskProgress: 'TaskProgress',
      taskProgressDescription: 'TaskProgressDescription',
      taskRunner: 'TaskRunner',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      completionTime: 'string',
      createdTime: 'string',
      id: 'number',
      maxRetry: 'number',
      nextExecutionTime: 'string',
      priority: 'string',
      taskAdder: 'string',
      taskErrorReason: 'string',
      taskExecutionCounts: 'number',
      taskName: 'string',
      taskOwner: 'string',
      taskProgress: 'number',
      taskProgressDescription: 'string',
      taskRunner: 'string',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskType: 'string',
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
      'ap-northeast-2-pop': "dbfs.aliyuncs.com",
      'cn-beijing-finance-1': "dbfs.aliyuncs.com",
      'cn-beijing-finance-pop': "dbfs.aliyuncs.com",
      'cn-beijing-gov-1': "dbfs.aliyuncs.com",
      'cn-beijing-nu16-b01': "dbfs.aliyuncs.com",
      'cn-edge-1': "dbfs.aliyuncs.com",
      'cn-fujian': "dbfs.aliyuncs.com",
      'cn-haidian-cm12-c01': "dbfs.aliyuncs.com",
      'cn-hangzhou-bj-b01': "dbfs.aliyuncs.com",
      'cn-hangzhou-finance': "dbfs.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "dbfs.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "dbfs.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "dbfs.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "dbfs.aliyuncs.com",
      'cn-hangzhou-test-306': "dbfs.aliyuncs.com",
      'cn-hongkong-finance-pop': "dbfs.aliyuncs.com",
      'cn-huhehaote-nebula-1': "dbfs.aliyuncs.com",
      'cn-north-2-gov-1': "dbfs.aliyuncs.com",
      'cn-qingdao-nebula': "dbfs.aliyuncs.com",
      'cn-shanghai-et15-b01': "dbfs.aliyuncs.com",
      'cn-shanghai-et2-b01': "dbfs.aliyuncs.com",
      'cn-shanghai-finance-1': "dbfs.aliyuncs.com",
      'cn-shanghai-inner': "dbfs.aliyuncs.com",
      'cn-shanghai-internal-test-1': "dbfs.aliyuncs.com",
      'cn-shenzhen-finance-1': "dbfs.aliyuncs.com",
      'cn-shenzhen-inner': "dbfs.aliyuncs.com",
      'cn-shenzhen-st4-d01': "dbfs.aliyuncs.com",
      'cn-shenzhen-su18-b01': "dbfs.aliyuncs.com",
      'cn-wuhan': "dbfs.aliyuncs.com",
      'cn-wulanchabu': "dbfs.aliyuncs.com",
      'cn-yushanfang': "dbfs.aliyuncs.com",
      'cn-zhangbei': "dbfs.aliyuncs.com",
      'cn-zhangbei-na61-b01': "dbfs.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "dbfs.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "dbfs.aliyuncs.com",
      'eu-west-1-oxs': "dbfs.aliyuncs.com",
      'rus-west-1-pop': "dbfs.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dbfs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addTagsBatchWithOptions(request: AddTagsBatchRequest, runtime: $Util.RuntimeOptions): Promise<AddTagsBatchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AddTagsBatchResponse>(await this.doRPCRequest("AddTagsBatch", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new AddTagsBatchResponse({}));
  }

  async addTagsBatch(request: AddTagsBatchRequest): Promise<AddTagsBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTagsBatchWithOptions(request, runtime);
  }

  async attachDbfsWithOptions(request: AttachDbfsRequest, runtime: $Util.RuntimeOptions): Promise<AttachDbfsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AttachDbfsResponse>(await this.doRPCRequest("AttachDbfs", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new AttachDbfsResponse({}));
  }

  async attachDbfs(request: AttachDbfsRequest): Promise<AttachDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDbfsWithOptions(request, runtime);
  }

  async createConstantsWithOptions(request: CreateConstantsRequest, runtime: $Util.RuntimeOptions): Promise<CreateConstantsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateConstantsResponse>(await this.doRPCRequest("CreateConstants", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateConstantsResponse({}));
  }

  async createConstants(request: CreateConstantsRequest): Promise<CreateConstantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createConstantsWithOptions(request, runtime);
  }

  async createDbfsWithOptions(request: CreateDbfsRequest, runtime: $Util.RuntimeOptions): Promise<CreateDbfsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDbfsResponse>(await this.doRPCRequest("CreateDbfs", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDbfsResponse({}));
  }

  async createDbfs(request: CreateDbfsRequest): Promise<CreateDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDbfsWithOptions(request, runtime);
  }

  async createServiceLinkedRoleWithOptions(request: CreateServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateServiceLinkedRoleResponse>(await this.doRPCRequest("CreateServiceLinkedRole", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateServiceLinkedRoleResponse({}));
  }

  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  async createSnapshotWithOptions(request: CreateSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CreateSnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSnapshotResponse>(await this.doRPCRequest("CreateSnapshot", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSnapshotResponse({}));
  }

  async createSnapshot(request: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  async deleteConstantsWithOptions(request: DeleteConstantsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteConstantsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteConstantsResponse>(await this.doRPCRequest("DeleteConstants", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteConstantsResponse({}));
  }

  async deleteConstants(request: DeleteConstantsRequest): Promise<DeleteConstantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteConstantsWithOptions(request, runtime);
  }

  async deleteDbfsWithOptions(request: DeleteDbfsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDbfsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDbfsResponse>(await this.doRPCRequest("DeleteDbfs", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDbfsResponse({}));
  }

  async deleteDbfs(request: DeleteDbfsRequest): Promise<DeleteDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDbfsWithOptions(request, runtime);
  }

  async deleteSnapshotWithOptions(request: DeleteSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSnapshotResponse>(await this.doRPCRequest("DeleteSnapshot", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSnapshotResponse({}));
  }

  async deleteSnapshot(request: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  async deleteTagsBatchWithOptions(request: DeleteTagsBatchRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTagsBatchResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteTagsBatchResponse>(await this.doRPCRequest("DeleteTagsBatch", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteTagsBatchResponse({}));
  }

  async deleteTagsBatch(request: DeleteTagsBatchRequest): Promise<DeleteTagsBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagsBatchWithOptions(request, runtime);
  }

  async describeDbfsSpecificationsWithOptions(request: DescribeDbfsSpecificationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDbfsSpecificationsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDbfsSpecificationsResponse>(await this.doRPCRequest("DescribeDbfsSpecifications", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDbfsSpecificationsResponse({}));
  }

  async describeDbfsSpecifications(request: DescribeDbfsSpecificationsRequest): Promise<DescribeDbfsSpecificationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDbfsSpecificationsWithOptions(request, runtime);
  }

  async describeInstanceTypesWithOptions(request: DescribeInstanceTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTypesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeInstanceTypesResponse>(await this.doRPCRequest("DescribeInstanceTypes", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeInstanceTypesResponse({}));
  }

  async describeInstanceTypes(request: DescribeInstanceTypesRequest): Promise<DescribeInstanceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTypesWithOptions(request, runtime);
  }

  async detachDbfsWithOptions(request: DetachDbfsRequest, runtime: $Util.RuntimeOptions): Promise<DetachDbfsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetachDbfsResponse>(await this.doRPCRequest("DetachDbfs", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new DetachDbfsResponse({}));
  }

  async detachDbfs(request: DetachDbfsRequest): Promise<DetachDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachDbfsWithOptions(request, runtime);
  }

  async getDbfsWithOptions(request: GetDbfsRequest, runtime: $Util.RuntimeOptions): Promise<GetDbfsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDbfsResponse>(await this.doRPCRequest("GetDbfs", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetDbfsResponse({}));
  }

  async getDbfs(request: GetDbfsRequest): Promise<GetDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDbfsWithOptions(request, runtime);
  }

  async getServiceLinkedRoleWithOptions(request: GetServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetServiceLinkedRoleResponse>(await this.doRPCRequest("GetServiceLinkedRole", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetServiceLinkedRoleResponse({}));
  }

  async getServiceLinkedRole(request: GetServiceLinkedRoleRequest): Promise<GetServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceLinkedRoleWithOptions(request, runtime);
  }

  async listConstantsWithOptions(request: ListConstantsRequest, runtime: $Util.RuntimeOptions): Promise<ListConstantsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListConstantsResponse>(await this.doRPCRequest("ListConstants", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListConstantsResponse({}));
  }

  async listConstants(request: ListConstantsRequest): Promise<ListConstantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listConstantsWithOptions(request, runtime);
  }

  async listDbfsWithOptions(request: ListDbfsRequest, runtime: $Util.RuntimeOptions): Promise<ListDbfsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDbfsResponse>(await this.doRPCRequest("ListDbfs", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListDbfsResponse({}));
  }

  async listDbfs(request: ListDbfsRequest): Promise<ListDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDbfsWithOptions(request, runtime);
  }

  async listDbfsAttachableEcsInstancesWithOptions(request: ListDbfsAttachableEcsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListDbfsAttachableEcsInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDbfsAttachableEcsInstancesResponse>(await this.doRPCRequest("ListDbfsAttachableEcsInstances", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListDbfsAttachableEcsInstancesResponse({}));
  }

  async listDbfsAttachableEcsInstances(request: ListDbfsAttachableEcsInstancesRequest): Promise<ListDbfsAttachableEcsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDbfsAttachableEcsInstancesWithOptions(request, runtime);
  }

  async listDbfsAttachedEcsInstancesWithOptions(request: ListDbfsAttachedEcsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListDbfsAttachedEcsInstancesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDbfsAttachedEcsInstancesResponse>(await this.doRPCRequest("ListDbfsAttachedEcsInstances", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListDbfsAttachedEcsInstancesResponse({}));
  }

  async listDbfsAttachedEcsInstances(request: ListDbfsAttachedEcsInstancesRequest): Promise<ListDbfsAttachedEcsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDbfsAttachedEcsInstancesWithOptions(request, runtime);
  }

  async listSnapshotWithOptions(request: ListSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<ListSnapshotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSnapshotResponse>(await this.doRPCRequest("ListSnapshot", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListSnapshotResponse({}));
  }

  async listSnapshot(request: ListSnapshotRequest): Promise<ListSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSnapshotWithOptions(request, runtime);
  }

  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagKeysResponse>(await this.doRPCRequest("ListTagKeys", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagKeysResponse({}));
  }

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTagValuesResponse>(await this.doRPCRequest("ListTagValues", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListTagValuesResponse({}));
  }

  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  async listTaskWithOptions(request: ListTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListTaskResponse>(await this.doRPCRequest("ListTask", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new ListTaskResponse({}));
  }

  async listTask(request: ListTaskRequest): Promise<ListTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTaskWithOptions(request, runtime);
  }

  async opreateConstantsWithOptions(request: OpreateConstantsRequest, runtime: $Util.RuntimeOptions): Promise<OpreateConstantsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpreateConstantsResponse>(await this.doRPCRequest("OpreateConstants", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new OpreateConstantsResponse({}));
  }

  async opreateConstants(request: OpreateConstantsRequest): Promise<OpreateConstantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.opreateConstantsWithOptions(request, runtime);
  }

  async renameDbfsWithOptions(request: RenameDbfsRequest, runtime: $Util.RuntimeOptions): Promise<RenameDbfsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RenameDbfsResponse>(await this.doRPCRequest("RenameDbfs", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new RenameDbfsResponse({}));
  }

  async renameDbfs(request: RenameDbfsRequest): Promise<RenameDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameDbfsWithOptions(request, runtime);
  }

  async resetDbfsWithOptions(request: ResetDbfsRequest, runtime: $Util.RuntimeOptions): Promise<ResetDbfsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResetDbfsResponse>(await this.doRPCRequest("ResetDbfs", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new ResetDbfsResponse({}));
  }

  async resetDbfs(request: ResetDbfsRequest): Promise<ResetDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetDbfsWithOptions(request, runtime);
  }

  async resizeDbfsWithOptions(request: ResizeDbfsRequest, runtime: $Util.RuntimeOptions): Promise<ResizeDbfsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResizeDbfsResponse>(await this.doRPCRequest("ResizeDbfs", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new ResizeDbfsResponse({}));
  }

  async resizeDbfs(request: ResizeDbfsRequest): Promise<ResizeDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeDbfsWithOptions(request, runtime);
  }

  async tagDbfsWithOptions(request: TagDbfsRequest, runtime: $Util.RuntimeOptions): Promise<TagDbfsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagDbfsResponse>(await this.doRPCRequest("TagDbfs", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new TagDbfsResponse({}));
  }

  async tagDbfs(request: TagDbfsRequest): Promise<TagDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagDbfsWithOptions(request, runtime);
  }

  async updateConstantsWithOptions(request: UpdateConstantsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateConstantsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateConstantsResponse>(await this.doRPCRequest("UpdateConstants", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateConstantsResponse({}));
  }

  async updateConstants(request: UpdateConstantsRequest): Promise<UpdateConstantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateConstantsWithOptions(request, runtime);
  }

  async updateTaskWithOptions(request: UpdateTaskRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateTaskResponse>(await this.doRPCRequest("UpdateTask", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateTaskResponse({}));
  }

  async updateTask(request: UpdateTaskRequest): Promise<UpdateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTaskWithOptions(request, runtime);
  }

}
