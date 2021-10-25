// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateConstantsRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  constantsData?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      constantsData: 'ConstantsData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      constantsData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConstantsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  pageSize?: number;
  totalCount?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      pageSize: 'number',
      totalCount: 'number',
      pageNumber: 'number',
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

export class DeleteConstantsRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  constantsData?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      constantsData: 'ConstantsData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      constantsData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConstantsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  pageSize?: number;
  totalCount?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      pageSize: 'number',
      totalCount: 'number',
      pageNumber: 'number',
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

export class CreateServiceLinkedRoleRequest extends $tea.Model {
  regionId?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      clientToken: 'string',
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

export class ResizeDbfsRequest extends $tea.Model {
  regionId?: string;
  fsId?: string;
  newSizeG?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      fsId: 'FsId',
      newSizeG: 'NewSizeG',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      fsId: 'string',
      newSizeG: 'number',
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

export class PublishUpgradeTaskRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  batchStrategyList?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      batchStrategyList: 'BatchStrategyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      batchStrategyList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishUpgradeTaskResponseBody extends $tea.Model {
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

export class PublishUpgradeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishUpgradeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishUpgradeTaskResponseBody,
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

export class DeleteSnapshotRequest extends $tea.Model {
  regionId?: string;
  snapshotId?: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
      force: 'Force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      snapshotId: 'string',
      force: 'boolean',
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

export class DetachDbfsRequest extends $tea.Model {
  fsId?: string;
  ECSInstanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fsId: 'FsId',
      ECSInstanceId: 'ECSInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fsId: 'string',
      ECSInstanceId: 'string',
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

export class GenerateUpgradeRecordRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  batchStrategyList?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      batchStrategyList: 'BatchStrategyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      batchStrategyList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUpgradeRecordResponseBody extends $tea.Model {
  requestId?: string;
  records?: GenerateUpgradeRecordResponseBodyRecords[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      records: 'Records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      records: { 'type': 'array', 'itemType': GenerateUpgradeRecordResponseBodyRecords },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUpgradeRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateUpgradeRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateUpgradeRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetDbfsRequest extends $tea.Model {
  regionId?: string;
  fsId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      fsId: 'FsId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      fsId: 'string',
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

export class GetDbfsRequest extends $tea.Model {
  regionId?: string;
  fsId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      fsId: 'FsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      fsId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbfsResponseBody extends $tea.Model {
  requestId?: string;
  DBFSInfo?: GetDbfsResponseBodyDBFSInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      DBFSInfo: 'DBFSInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      DBFSInfo: GetDbfsResponseBodyDBFSInfo,
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

export class DbfsRecordRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DbfsRecordResponseBody extends $tea.Model {
  requestId?: string;
  records?: DbfsRecordResponseBodyRecords[];
  pageNo?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      records: 'Records',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      records: { 'type': 'array', 'itemType': DbfsRecordResponseBodyRecords },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DbfsRecordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DbfsRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DbfsRecordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopUpgradeTaskRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  batchStrategyList?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      batchStrategyList: 'BatchStrategyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      batchStrategyList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopUpgradeTaskResponseBody extends $tea.Model {
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

export class StopUpgradeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopUpgradeTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopUpgradeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDbfsRequest extends $tea.Model {
  regionId?: string;
  fsName?: string;
  category?: string;
  sizeG?: number;
  zoneId?: string;
  clientToken?: string;
  snapshotId?: string;
  deleteSnapshot?: boolean;
  performanceLevel?: string;
  enableRaid?: boolean;
  raidStripeUnitNumber?: number;
  KMSKeyId?: string;
  encryption?: boolean;
  usedScene?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      fsName: 'FsName',
      category: 'Category',
      sizeG: 'SizeG',
      zoneId: 'ZoneId',
      clientToken: 'ClientToken',
      snapshotId: 'SnapshotId',
      deleteSnapshot: 'DeleteSnapshot',
      performanceLevel: 'PerformanceLevel',
      enableRaid: 'EnableRaid',
      raidStripeUnitNumber: 'RaidStripeUnitNumber',
      KMSKeyId: 'KMSKeyId',
      encryption: 'Encryption',
      usedScene: 'UsedScene',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      fsName: 'string',
      category: 'string',
      sizeG: 'number',
      zoneId: 'string',
      clientToken: 'string',
      snapshotId: 'string',
      deleteSnapshot: 'boolean',
      performanceLevel: 'string',
      enableRaid: 'boolean',
      raidStripeUnitNumber: 'number',
      KMSKeyId: 'string',
      encryption: 'boolean',
      usedScene: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDbfsResponseBody extends $tea.Model {
  requestId?: string;
  fsId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      fsId: 'FsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      fsId: 'string',
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

export class DeleteTagsBatchRequest extends $tea.Model {
  regionId?: string;
  dbfsList?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dbfsList: 'DbfsList',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dbfsList: 'string',
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
  requestId?: string;
  dbfsLinkedRole?: boolean;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      requestId: 'RequestId',
      dbfsLinkedRole: 'DbfsLinkedRole',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      requestId: 'string',
      dbfsLinkedRole: 'boolean',
      regionId: 'string',
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

export class UpdateConstantsRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  constantsData?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      constantsData: 'ConstantsData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      constantsData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConstantsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  pageSize?: number;
  totalCount?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      pageSize: 'number',
      totalCount: 'number',
      pageNumber: 'number',
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

export class InsertSynchronizConstantsRequest extends $tea.Model {
  regionId?: string;
  accessData?: string;
  endpointData?: string;
  masterData?: string;
  productCodeData?: string;
  osversionData?: string;
  zoneData?: string;
  regionData?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      accessData: 'AccessData',
      endpointData: 'EndpointData',
      masterData: 'MasterData',
      productCodeData: 'ProductCodeData',
      osversionData: 'OsversionData',
      zoneData: 'ZoneData',
      regionData: 'RegionData',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      accessData: 'string',
      endpointData: 'string',
      masterData: 'string',
      productCodeData: 'string',
      osversionData: 'string',
      zoneData: 'string',
      regionData: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSynchronizConstantsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  pageSize?: number;
  totalCount?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      pageSize: 'number',
      totalCount: 'number',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertSynchronizConstantsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InsertSynchronizConstantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InsertSynchronizConstantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDbfsRequest extends $tea.Model {
  ECSInstanceId?: string;
  serverUrl?: string;
  fsId?: string;
  regionId?: string;
  attachMode?: string;
  attachPoint?: string;
  static names(): { [key: string]: string } {
    return {
      ECSInstanceId: 'ECSInstanceId',
      serverUrl: 'ServerUrl',
      fsId: 'FsId',
      regionId: 'RegionId',
      attachMode: 'AttachMode',
      attachPoint: 'AttachPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ECSInstanceId: 'string',
      serverUrl: 'string',
      fsId: 'string',
      regionId: 'string',
      attachMode: 'string',
      attachPoint: 'string',
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

export class ListTaskRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  sortKey?: string;
  sortType?: string;
  filterKey?: string;
  filterValue?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortKey: 'SortKey',
      sortType: 'SortType',
      filterKey: 'FilterKey',
      filterValue: 'FilterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortKey: 'string',
      sortType: 'string',
      filterKey: 'string',
      filterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBody extends $tea.Model {
  totalCount?: number;
  tasks?: ListTaskResponseBodyTasks[];
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      tasks: 'Tasks',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      tasks: { 'type': 'array', 'itemType': ListTaskResponseBodyTasks },
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
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

export class ListDbfsRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  sortKey?: string;
  sortType?: string;
  filterKey?: string;
  filterValue?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortKey: 'SortKey',
      sortType: 'SortType',
      filterKey: 'FilterKey',
      filterValue: 'FilterValue',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortKey: 'string',
      sortType: 'string',
      filterKey: 'string',
      filterValue: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  DBFSInfo?: ListDbfsResponseBodyDBFSInfo[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      DBFSInfo: 'DBFSInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      DBFSInfo: { 'type': 'array', 'itemType': ListDbfsResponseBodyDBFSInfo },
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

export class AddTagsBatchRequest extends $tea.Model {
  regionId?: string;
  dbfsList?: string;
  tags?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dbfsList: 'DbfsList',
      tags: 'Tags',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dbfsList: 'string',
      tags: 'string',
      clientToken: 'string',
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

export class TagDbfsRequest extends $tea.Model {
  regionId?: string;
  dbfsId?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      dbfsId: 'DbfsId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      dbfsId: 'string',
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

export class GetSynchronizConstantsRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizConstantsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  pageSize?: number;
  totalCount?: number;
  pageNumber?: number;
  regionData?: string;
  zoneData?: string;
  osversionData?: string;
  productCodeData?: string;
  masterData?: string;
  endpointData?: string;
  accessData?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      regionData: 'RegionData',
      zoneData: 'ZoneData',
      osversionData: 'OsversionData',
      productCodeData: 'ProductCodeData',
      masterData: 'MasterData',
      endpointData: 'EndpointData',
      accessData: 'AccessData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      pageSize: 'number',
      totalCount: 'number',
      pageNumber: 'number',
      regionData: 'string',
      zoneData: 'string',
      osversionData: 'string',
      productCodeData: 'string',
      masterData: 'string',
      endpointData: 'string',
      accessData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSynchronizConstantsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSynchronizConstantsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSynchronizConstantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpreateConstantsRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  constantsData?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      constantsData: 'ConstantsData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      constantsData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpreateConstantsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  regionData?: string;
  zoneData?: string;
  osversionData?: string;
  pageSize?: number;
  totalCount?: number;
  pageNumber?: number;
  productCodeData?: string;
  masterData?: string;
  endpointData?: string;
  accessData?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      regionData: 'RegionData',
      zoneData: 'ZoneData',
      osversionData: 'OsversionData',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
      productCodeData: 'ProductCodeData',
      masterData: 'MasterData',
      endpointData: 'EndpointData',
      accessData: 'AccessData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      regionData: 'string',
      zoneData: 'string',
      osversionData: 'string',
      pageSize: 'number',
      totalCount: 'number',
      pageNumber: 'number',
      productCodeData: 'string',
      masterData: 'string',
      endpointData: 'string',
      accessData: 'string',
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
  fsName?: string;
  fsId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      fsName: 'FsName',
      fsId: 'FsId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fsName: 'string',
      fsId: 'string',
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

export class ListConstantsRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  constantsData?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      constantsData: 'ConstantsData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      constantsData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConstantsResponseBody extends $tea.Model {
  requestId?: string;
  data?: string;
  pageSize?: number;
  totalCount?: number;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: 'string',
      pageSize: 'number',
      totalCount: 'number',
      pageNumber: 'number',
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

export class ListSnapshotRequest extends $tea.Model {
  regionId?: string;
  pageNumber?: number;
  pageSize?: number;
  sortKey?: string;
  sortType?: string;
  filterKey?: string;
  filterValue?: string;
  fsId?: string;
  status?: string;
  snapshotName?: string;
  snapshotType?: string;
  snapshotIds?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortKey: 'SortKey',
      sortType: 'SortType',
      filterKey: 'FilterKey',
      filterValue: 'FilterValue',
      fsId: 'FsId',
      status: 'Status',
      snapshotName: 'SnapshotName',
      snapshotType: 'SnapshotType',
      snapshotIds: 'SnapshotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortKey: 'string',
      sortType: 'string',
      filterKey: 'string',
      filterValue: 'string',
      fsId: 'string',
      status: 'string',
      snapshotName: 'string',
      snapshotType: 'string',
      snapshotIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  snapshots?: ListSnapshotResponseBodySnapshots[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      snapshots: 'Snapshots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      snapshots: { 'type': 'array', 'itemType': ListSnapshotResponseBodySnapshots },
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

export class DescribeDbfsSpecificationsRequest extends $tea.Model {
  regionId?: string;
  ecsInstanceType?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ecsInstanceType: 'EcsInstanceType',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ecsInstanceType: 'string',
      category: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbfsSpecificationsResponseBody extends $tea.Model {
  requestId?: string;
  supportedEcsInstanceTypeFamily?: string[];
  maxDbfsNumberPerEcs?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportedEcsInstanceTypeFamily: 'SupportedEcsInstanceTypeFamily',
      maxDbfsNumberPerEcs: 'MaxDbfsNumberPerEcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportedEcsInstanceTypeFamily: { 'type': 'array', 'itemType': 'string' },
      maxDbfsNumberPerEcs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class CreateSnapshotRequest extends $tea.Model {
  regionId?: string;
  fsId?: string;
  snapshotName?: string;
  description?: string;
  retentionDays?: number;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      fsId: 'FsId',
      snapshotName: 'SnapshotName',
      description: 'Description',
      retentionDays: 'RetentionDays',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      fsId: 'string',
      snapshotName: 'string',
      description: 'string',
      retentionDays: 'number',
      clientToken: 'string',
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

export class GenerateUpgradeRecordResponseBodyRecords extends $tea.Model {
  id?: number;
  batchStrategyNo?: string;
  accountId?: string;
  dbfsId?: string;
  ecsId?: string;
  taskId?: string;
  regionId?: string;
  zoneId?: string;
  state?: string;
  currentVersion?: string;
  targetVersion?: string;
  upgradeStartTime?: number;
  upgradeEndTime?: number;
  taskExecutionCounts?: number;
  taskErrorReason?: string;
  createTime?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      batchStrategyNo: 'BatchStrategyNo',
      accountId: 'AccountId',
      dbfsId: 'DbfsId',
      ecsId: 'EcsId',
      taskId: 'TaskId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      state: 'State',
      currentVersion: 'CurrentVersion',
      targetVersion: 'TargetVersion',
      upgradeStartTime: 'UpgradeStartTime',
      upgradeEndTime: 'UpgradeEndTime',
      taskExecutionCounts: 'TaskExecutionCounts',
      taskErrorReason: 'TaskErrorReason',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      batchStrategyNo: 'string',
      accountId: 'string',
      dbfsId: 'string',
      ecsId: 'string',
      taskId: 'string',
      regionId: 'string',
      zoneId: 'string',
      state: 'string',
      currentVersion: 'string',
      targetVersion: 'string',
      upgradeStartTime: 'number',
      upgradeEndTime: 'number',
      taskExecutionCounts: 'number',
      taskErrorReason: 'string',
      createTime: 'number',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbfsResponseBodyDBFSInfoTags extends $tea.Model {
  tagValue?: string;
  id?: number;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      id: 'Id',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      id: 'number',
      tagKey: 'string',
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

export class GetDbfsResponseBodyDBFSInfo extends $tea.Model {
  status?: string;
  payType?: string;
  fsId?: string;
  tags?: GetDbfsResponseBodyDBFSInfoTags[];
  sizeG?: number;
  ecsList?: GetDbfsResponseBodyDBFSInfoEcsList[];
  regionId?: string;
  DBFSClusterId?: string;
  description?: string;
  zoneId?: string;
  fsName?: string;
  category?: string;
  createdTime?: string;
  attachNodeNumber?: number;
  KMSKeyId?: string;
  encryption?: boolean;
  performanceLevel?: string;
  usedScene?: string;
  lastMountTime?: string;
  lastUmountTime?: string;
  enableRaid?: boolean;
  raidStrip?: number;
  ebsList?: GetDbfsResponseBodyDBFSInfoEbsList[];
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      payType: 'PayType',
      fsId: 'FsId',
      tags: 'Tags',
      sizeG: 'SizeG',
      ecsList: 'EcsList',
      regionId: 'RegionId',
      DBFSClusterId: 'DBFSClusterId',
      description: 'Description',
      zoneId: 'ZoneId',
      fsName: 'FsName',
      category: 'Category',
      createdTime: 'CreatedTime',
      attachNodeNumber: 'AttachNodeNumber',
      KMSKeyId: 'KMSKeyId',
      encryption: 'Encryption',
      performanceLevel: 'PerformanceLevel',
      usedScene: 'UsedScene',
      lastMountTime: 'LastMountTime',
      lastUmountTime: 'LastUmountTime',
      enableRaid: 'EnableRaid',
      raidStrip: 'RaidStrip',
      ebsList: 'EbsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      payType: 'string',
      fsId: 'string',
      tags: { 'type': 'array', 'itemType': GetDbfsResponseBodyDBFSInfoTags },
      sizeG: 'number',
      ecsList: { 'type': 'array', 'itemType': GetDbfsResponseBodyDBFSInfoEcsList },
      regionId: 'string',
      DBFSClusterId: 'string',
      description: 'string',
      zoneId: 'string',
      fsName: 'string',
      category: 'string',
      createdTime: 'string',
      attachNodeNumber: 'number',
      KMSKeyId: 'string',
      encryption: 'boolean',
      performanceLevel: 'string',
      usedScene: 'string',
      lastMountTime: 'string',
      lastUmountTime: 'string',
      enableRaid: 'boolean',
      raidStrip: 'number',
      ebsList: { 'type': 'array', 'itemType': GetDbfsResponseBodyDBFSInfoEbsList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DbfsRecordResponseBodyRecords extends $tea.Model {
  id?: number;
  batchStrategyNo?: string;
  accountId?: string;
  dbfsId?: string;
  ecsId?: string;
  taskId?: string;
  regionId?: string;
  zoneId?: string;
  state?: string;
  currentVersion?: string;
  targetVersion?: string;
  upgradeStartTime?: number;
  upgradeEndTime?: number;
  taskExecutionCounts?: number;
  taskErrorReason?: string;
  createTime?: number;
  updateTime?: number;
  isDel?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      batchStrategyNo: 'BatchStrategyNo',
      accountId: 'AccountId',
      dbfsId: 'DbfsId',
      ecsId: 'EcsId',
      taskId: 'TaskId',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      state: 'State',
      currentVersion: 'CurrentVersion',
      targetVersion: 'TargetVersion',
      upgradeStartTime: 'UpgradeStartTime',
      upgradeEndTime: 'UpgradeEndTime',
      taskExecutionCounts: 'TaskExecutionCounts',
      taskErrorReason: 'TaskErrorReason',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      isDel: 'IsDel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      batchStrategyNo: 'string',
      accountId: 'string',
      dbfsId: 'string',
      ecsId: 'string',
      taskId: 'string',
      regionId: 'string',
      zoneId: 'string',
      state: 'string',
      currentVersion: 'string',
      targetVersion: 'string',
      upgradeStartTime: 'number',
      upgradeEndTime: 'number',
      taskExecutionCounts: 'number',
      taskErrorReason: 'string',
      createTime: 'number',
      updateTime: 'number',
      isDel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBodyTasks extends $tea.Model {
  taskErrorReason?: string;
  taskName?: string;
  priority?: string;
  nextExecutionTime?: string;
  completionTime?: string;
  taskType?: string;
  taskStatus?: string;
  taskStatusCode?: number;
  taskExecutionCounts?: number;
  clientToken?: string;
  taskAdder?: string;
  taskProgressDescription?: string;
  createdTime?: string;
  taskRunner?: string;
  taskProgress?: number;
  taskOwner?: string;
  id?: number;
  maxRetry?: number;
  static names(): { [key: string]: string } {
    return {
      taskErrorReason: 'TaskErrorReason',
      taskName: 'TaskName',
      priority: 'Priority',
      nextExecutionTime: 'NextExecutionTime',
      completionTime: 'CompletionTime',
      taskType: 'TaskType',
      taskStatus: 'TaskStatus',
      taskStatusCode: 'TaskStatusCode',
      taskExecutionCounts: 'TaskExecutionCounts',
      clientToken: 'ClientToken',
      taskAdder: 'TaskAdder',
      taskProgressDescription: 'TaskProgressDescription',
      createdTime: 'CreatedTime',
      taskRunner: 'TaskRunner',
      taskProgress: 'TaskProgress',
      taskOwner: 'TaskOwner',
      id: 'Id',
      maxRetry: 'MaxRetry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskErrorReason: 'string',
      taskName: 'string',
      priority: 'string',
      nextExecutionTime: 'string',
      completionTime: 'string',
      taskType: 'string',
      taskStatus: 'string',
      taskStatusCode: 'number',
      taskExecutionCounts: 'number',
      clientToken: 'string',
      taskAdder: 'string',
      taskProgressDescription: 'string',
      createdTime: 'string',
      taskRunner: 'string',
      taskProgress: 'number',
      taskOwner: 'string',
      id: 'number',
      maxRetry: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsResponseBodyDBFSInfoTags extends $tea.Model {
  tagValue?: string;
  id?: number;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      id: 'Id',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      id: 'number',
      tagKey: 'string',
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

export class ListDbfsResponseBodyDBFSInfo extends $tea.Model {
  status?: string;
  encryption?: boolean;
  payType?: string;
  fsId?: string;
  tags?: ListDbfsResponseBodyDBFSInfoTags[];
  sizeG?: number;
  ecsList?: ListDbfsResponseBodyDBFSInfoEcsList[];
  ebsList?: ListDbfsResponseBodyDBFSInfoEbsList[];
  regionId?: string;
  DBFSClusterId?: string;
  zoneId?: string;
  fsName?: string;
  category?: string;
  createdTime?: string;
  attachNodeNumber?: number;
  KMSKeyId?: string;
  performanceLevel?: string;
  usedScene?: string;
  lastMountTime?: string;
  lastUmountTime?: string;
  enableRaid?: boolean;
  raidStrip?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      encryption: 'Encryption',
      payType: 'PayType',
      fsId: 'FsId',
      tags: 'Tags',
      sizeG: 'SizeG',
      ecsList: 'EcsList',
      ebsList: 'EbsList',
      regionId: 'RegionId',
      DBFSClusterId: 'DBFSClusterId',
      zoneId: 'ZoneId',
      fsName: 'FsName',
      category: 'Category',
      createdTime: 'CreatedTime',
      attachNodeNumber: 'AttachNodeNumber',
      KMSKeyId: 'KMSKeyId',
      performanceLevel: 'PerformanceLevel',
      usedScene: 'UsedScene',
      lastMountTime: 'LastMountTime',
      lastUmountTime: 'LastUmountTime',
      enableRaid: 'EnableRaid',
      raidStrip: 'RaidStrip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      encryption: 'boolean',
      payType: 'string',
      fsId: 'string',
      tags: { 'type': 'array', 'itemType': ListDbfsResponseBodyDBFSInfoTags },
      sizeG: 'number',
      ecsList: { 'type': 'array', 'itemType': ListDbfsResponseBodyDBFSInfoEcsList },
      ebsList: { 'type': 'array', 'itemType': ListDbfsResponseBodyDBFSInfoEbsList },
      regionId: 'string',
      DBFSClusterId: 'string',
      zoneId: 'string',
      fsName: 'string',
      category: 'string',
      createdTime: 'string',
      attachNodeNumber: 'number',
      KMSKeyId: 'string',
      performanceLevel: 'string',
      usedScene: 'string',
      lastMountTime: 'string',
      lastUmountTime: 'string',
      enableRaid: 'boolean',
      raidStrip: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotResponseBodySnapshots extends $tea.Model {
  status?: string;
  creationTime?: string;
  progress?: string;
  sourceFsSize?: number;
  retentionDays?: number;
  remainTime?: number;
  lastModifiedTime?: string;
  snapshotType?: string;
  snapshotName?: string;
  description?: string;
  sourceFsId?: string;
  snapshotId?: string;
  category?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      creationTime: 'CreationTime',
      progress: 'Progress',
      sourceFsSize: 'SourceFsSize',
      retentionDays: 'RetentionDays',
      remainTime: 'RemainTime',
      lastModifiedTime: 'LastModifiedTime',
      snapshotType: 'SnapshotType',
      snapshotName: 'SnapshotName',
      description: 'Description',
      sourceFsId: 'SourceFsId',
      snapshotId: 'SnapshotId',
      category: 'Category',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      creationTime: 'string',
      progress: 'string',
      sourceFsSize: 'number',
      retentionDays: 'number',
      remainTime: 'number',
      lastModifiedTime: 'string',
      snapshotType: 'string',
      snapshotName: 'string',
      description: 'string',
      sourceFsId: 'string',
      snapshotId: 'string',
      category: 'string',
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

  async publishUpgradeTaskWithOptions(request: PublishUpgradeTaskRequest, runtime: $Util.RuntimeOptions): Promise<PublishUpgradeTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PublishUpgradeTaskResponse>(await this.doRPCRequest("PublishUpgradeTask", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new PublishUpgradeTaskResponse({}));
  }

  async publishUpgradeTask(request: PublishUpgradeTaskRequest): Promise<PublishUpgradeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishUpgradeTaskWithOptions(request, runtime);
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

  async generateUpgradeRecordWithOptions(request: GenerateUpgradeRecordRequest, runtime: $Util.RuntimeOptions): Promise<GenerateUpgradeRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateUpgradeRecordResponse>(await this.doRPCRequest("GenerateUpgradeRecord", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateUpgradeRecordResponse({}));
  }

  async generateUpgradeRecord(request: GenerateUpgradeRecordRequest): Promise<GenerateUpgradeRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateUpgradeRecordWithOptions(request, runtime);
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

  async dbfsRecordWithOptions(request: DbfsRecordRequest, runtime: $Util.RuntimeOptions): Promise<DbfsRecordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DbfsRecordResponse>(await this.doRPCRequest("DbfsRecord", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new DbfsRecordResponse({}));
  }

  async dbfsRecord(request: DbfsRecordRequest): Promise<DbfsRecordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dbfsRecordWithOptions(request, runtime);
  }

  async stopUpgradeTaskWithOptions(request: StopUpgradeTaskRequest, runtime: $Util.RuntimeOptions): Promise<StopUpgradeTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopUpgradeTaskResponse>(await this.doRPCRequest("StopUpgradeTask", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new StopUpgradeTaskResponse({}));
  }

  async stopUpgradeTask(request: StopUpgradeTaskRequest): Promise<StopUpgradeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopUpgradeTaskWithOptions(request, runtime);
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

  async insertSynchronizConstantsWithOptions(request: InsertSynchronizConstantsRequest, runtime: $Util.RuntimeOptions): Promise<InsertSynchronizConstantsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InsertSynchronizConstantsResponse>(await this.doRPCRequest("InsertSynchronizConstants", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new InsertSynchronizConstantsResponse({}));
  }

  async insertSynchronizConstants(request: InsertSynchronizConstantsRequest): Promise<InsertSynchronizConstantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.insertSynchronizConstantsWithOptions(request, runtime);
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

  async getSynchronizConstantsWithOptions(request: GetSynchronizConstantsRequest, runtime: $Util.RuntimeOptions): Promise<GetSynchronizConstantsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSynchronizConstantsResponse>(await this.doRPCRequest("GetSynchronizConstants", "2020-04-18", "HTTPS", "POST", "AK", "json", req, runtime), new GetSynchronizConstantsResponse({}));
  }

  async getSynchronizConstants(request: GetSynchronizConstantsRequest): Promise<GetSynchronizConstantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSynchronizConstantsWithOptions(request, runtime);
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

}
