// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddTagsBatchRequest extends $tea.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["dbfs-nUy1tb********BQ4X8Gpw","dbfs-v0WvA********tVEVcgJLg"]
   */
  dbfsList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"TagKey":"k1","TagValue":"v1"},{"TagKey":"k2","TagValue":"v2"}]
   */
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddTagsBatchResponseBody;
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
      body: AddTagsBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAutoSnapshotPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dbfsIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sp-z5siir3iq3m**********
   */
  policyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbfsIds: 'DbfsIds',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbfsIds: { 'type': 'array', 'itemType': 'string' },
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAutoSnapshotPolicyShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dbfsIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sp-z5siir3iq3m**********
   */
  policyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbfsIdsShrink: 'DbfsIds',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbfsIdsShrink: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyAutoSnapshotPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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

export class ApplyAutoSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyAutoSnapshotPolicyResponseBody;
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
      body: ApplyAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDbfsRequest extends $tea.Model {
  /**
   * @example
   * create_new_mount_point
   */
  attachMode?: string;
  /**
   * @example
   * /mnt/dbfs/dbfs-001
   */
  attachPoint?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-bp1ecr********5go2go
   */
  ECSInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbfs-v0WvA********tVEVcgJLg
   */
  fsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * dbfs-pkg-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com
   */
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachDbfsResponseBody;
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
      body: AttachDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAutoSnapshotPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dbfsIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sp-z5siir3iq3m**********
   */
  policyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbfsIds: 'DbfsIds',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbfsIds: { 'type': 'array', 'itemType': 'string' },
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAutoSnapshotPolicyShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dbfsIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sp-z5siir3iq3m**********
   */
  policyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dbfsIdsShrink: 'DbfsIds',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbfsIdsShrink: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelAutoSnapshotPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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

export class CancelAutoSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelAutoSnapshotPolicyResponseBody;
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
      body: CancelAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoSnapshotPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * policyTest
   */
  policyName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  repeatWeekdays?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  timePoints?: string[];
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      regionId: 'RegionId',
      repeatWeekdays: 'RepeatWeekdays',
      retentionDays: 'RetentionDays',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      regionId: 'string',
      repeatWeekdays: { 'type': 'array', 'itemType': 'string' },
      retentionDays: 'number',
      timePoints: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoSnapshotPolicyShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * policyTest
   */
  policyName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  repeatWeekdaysShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  timePointsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      regionId: 'RegionId',
      repeatWeekdaysShrink: 'RepeatWeekdays',
      retentionDays: 'RetentionDays',
      timePointsShrink: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      regionId: 'string',
      repeatWeekdaysShrink: 'string',
      retentionDays: 'number',
      timePointsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoSnapshotPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * sp-z5siir3iq3m**********
   */
  policyId?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAutoSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAutoSnapshotPolicyResponseBody;
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
      body: CreateAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDbfsRequest extends $tea.Model {
  /**
   * @example
   * {"cpuCoreCount":0.5,"memorySize":512,"pageCacheSize":128}
   */
  advancedFeatures?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * standard
   */
  category?: string;
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * false
   */
  deleteSnapshot?: boolean;
  /**
   * @example
   * false
   */
  enableRaid?: boolean;
  /**
   * @example
   * false
   */
  encryption?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testdbfs-001
   */
  fsName?: string;
  /**
   * @example
   * dbfs.small
   */
  instanceType?: string;
  /**
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40826X
   */
  KMSKeyId?: string;
  /**
   * @example
   * PL1
   */
  performanceLevel?: string;
  raidStripeUnitNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  sizeG?: number;
  /**
   * @example
   * s-y2vZ3********vvMilZ2hQ
   */
  snapshotId?: string;
  /**
   * @example
   * PostgreSQL
   */
  usedScene?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      advancedFeatures: 'AdvancedFeatures',
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
      advancedFeatures: 'string',
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
  /**
   * @example
   * dbfs-GOrr********Yd0VLOyBpg
   */
  fsId?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDbfsResponseBody;
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
      body: CreateDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceLinkedRoleRequest extends $tea.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceLinkedRoleResponseBody;
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
      body: CreateServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotRequest extends $tea.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d-bp131n0q38u3a4zi*****
   */
  fsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @example
   * testSnapshotName
   */
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * s-Q2greuDZTvWeS8bfKZ****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSnapshotResponseBody;
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

export class DeleteAutoSnapshotPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sp-z5siir3iq3m**********
   */
  policyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAutoSnapshotPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC********
   */
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

export class DeleteAutoSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAutoSnapshotPolicyResponseBody;
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
      body: DeleteAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDbfsRequest extends $tea.Model {
  /**
   * @remarks
   * 是否强制删除数据库文件系统。
   * 默认值：false。
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d-bp131n0q38u3a4zi*****
   */
  fsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      fsId: 'FsId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      fsId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDbfsResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDbfsResponseBody;
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
      body: DeleteDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotRequest extends $tea.Model {
  /**
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSnapshotResponseBody;
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

export class DeleteTagsBatchRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["dbfs-nUy1tb********BQ4X8Gpw","dbfs-v0WvA********tVEVcgJLg"]
   */
  dbfsList?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"TagKey":"k1","TagValue":"v1"},{"TagKey":"k2","TagValue":"v2"}]
   */
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTagsBatchResponseBody;
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
      body: DeleteTagsBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDbfsSpecificationsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * enterprise
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs.g7se
   */
  ecsInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * 4
   */
  maxDbfsNumberPerEcs?: { [key: string]: any };
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDbfsSpecificationsResponseBody;
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
      body: DescribeDbfsSpecificationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceTypesResponseBody;
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
      body: DescribeInstanceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachDbfsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph***
   */
  ECSInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d-bp131n0q38u3a4zi*****
   */
  fsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachDbfsResponseBody;
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
      body: DetachDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoSnapshotPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sp-z5siir3iq3m**********
   */
  policyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoSnapshotPolicyResponseBody extends $tea.Model {
  data?: GetAutoSnapshotPolicyResponseBodyData;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAutoSnapshotPolicyResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAutoSnapshotPolicyResponseBody;
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
      body: GetAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbfsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbfs-GOrr********Yd0VLOyBpg
   */
  fsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDbfsResponseBody;
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
      body: GetDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceLinkedRoleRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * 1352345930******
   */
  accountId?: string;
  /**
   * @example
   * true
   */
  dbfsLinkedRole?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceLinkedRoleResponseBody;
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
      body: GetServiceLinkedRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotLinkRequest extends $tea.Model {
  /**
   * @example
   * sl-b3zlgraysgcs9jy********
   */
  linkId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      linkId: 'LinkId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      linkId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotLinkResponseBody extends $tea.Model {
  data?: GetSnapshotLinkResponseBodyData;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSnapshotLinkResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSnapshotLinkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSnapshotLinkResponseBody;
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
      body: GetSnapshotLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoSnapshotPoliciesRequest extends $tea.Model {
  /**
   * @example
   * PolicyName
   */
  filterKey?: string;
  /**
   * @example
   * policyTest
   */
  filterValue?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filterKey: 'FilterKey',
      filterValue: 'FilterValue',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterKey: 'string',
      filterValue: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoSnapshotPoliciesResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  snapshotPolicies?: ListAutoSnapshotPoliciesResponseBodySnapshotPolicies[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snapshotPolicies: 'SnapshotPolicies',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snapshotPolicies: { 'type': 'array', 'itemType': ListAutoSnapshotPoliciesResponseBodySnapshotPolicies },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoSnapshotPoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAutoSnapshotPoliciesResponseBody;
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
      body: ListAutoSnapshotPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoSnapshotPolicyAppliedDbfsRequest extends $tea.Model {
  /**
   * @example
   * FsName
   */
  filterKey?: string;
  /**
   * @example
   * DBFS1
   */
  filterValue?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sp-z5siir3iq3m**********
   */
  policyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filterKey: 'FilterKey',
      filterValue: 'FilterValue',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterKey: 'string',
      filterValue: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoSnapshotPolicyAppliedDbfsResponseBody extends $tea.Model {
  dbfsList?: ListAutoSnapshotPolicyAppliedDbfsResponseBodyDbfsList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dbfsList: 'DbfsList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbfsList: { 'type': 'array', 'itemType': ListAutoSnapshotPolicyAppliedDbfsResponseBodyDbfsList },
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

export class ListAutoSnapshotPolicyAppliedDbfsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAutoSnapshotPolicyAppliedDbfsResponseBody;
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
      body: ListAutoSnapshotPolicyAppliedDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoSnapshotPolicyUnappliedDbfsRequest extends $tea.Model {
  /**
   * @example
   * FsName
   */
  filterKey?: string;
  /**
   * @example
   * DBFS1
   */
  filterValue?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filterKey: 'FilterKey',
      filterValue: 'FilterValue',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterKey: 'string',
      filterValue: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoSnapshotPolicyUnappliedDbfsResponseBody extends $tea.Model {
  dbfsList?: ListAutoSnapshotPolicyUnappliedDbfsResponseBodyDbfsList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dbfsList: 'DbfsList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbfsList: { 'type': 'array', 'itemType': ListAutoSnapshotPolicyUnappliedDbfsResponseBodyDbfsList },
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

export class ListAutoSnapshotPolicyUnappliedDbfsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAutoSnapshotPolicyUnappliedDbfsResponseBody;
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
      body: ListAutoSnapshotPolicyUnappliedDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsRequest extends $tea.Model {
  /**
   * @example
   * FsName
   */
  filterKey?: string;
  /**
   * @example
   * dbfs-test-01
   */
  filterValue?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * SizeG
   */
  sortKey?: string;
  /**
   * @example
   * desc
   */
  sortType?: string;
  /**
   * @example
   * [{"TagKey":"k1","TagValue":"v1"},{"TagKey":"k2","TagValue":"v2"}]
   */
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
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 32
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDbfsResponseBody;
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
      body: ListDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsAttachableEcsInstancesRequest extends $tea.Model {
  /**
   * @example
   * InstanceName
   */
  filterKey?: string;
  /**
   * @example
   * autotest1
   */
  filterValue?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filterKey: 'FilterKey',
      filterValue: 'FilterValue',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterKey: 'string',
      filterValue: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsAttachableEcsInstancesResponseBody extends $tea.Model {
  ecsLabelInfo?: ListDbfsAttachableEcsInstancesResponseBodyEcsLabelInfo[];
  /**
   * @example
   * 3724CFEF-02DA-578B-AED6-67EE80671B4A
   */
  requestId?: string;
  /**
   * @example
   * 32
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ecsLabelInfo: 'EcsLabelInfo',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsLabelInfo: { 'type': 'array', 'itemType': ListDbfsAttachableEcsInstancesResponseBodyEcsLabelInfo },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsAttachableEcsInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDbfsAttachableEcsInstancesResponseBody;
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
      body: ListDbfsAttachableEcsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsAttachedEcsInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbfs-nUy1tb********BQ4X8Gpw
   */
  fsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDbfsAttachedEcsInstancesResponseBody;
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
      body: ListDbfsAttachedEcsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotRequest extends $tea.Model {
  /**
   * @example
   * SnapshotId
   */
  filterKey?: string;
  /**
   * @example
   * s-bp67acfmxazb4p****
   */
  filterValue?: string;
  /**
   * @example
   * dbfs-GOrr********Yd0VLOyBpg
   */
  fsId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * ["s-bp67acfmxazb4p****", "s-bp67acfmxazb5p****", … "s-bp67acfmxazb6p****"]
   */
  snapshotIds?: string;
  /**
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  /**
   * @example
   * user
   */
  snapshotType?: string;
  /**
   * @example
   * SnapshotSize
   */
  sortKey?: string;
  /**
   * @example
   * desc
   */
  sortType?: string;
  /**
   * @example
   * accomplished
   */
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
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  snapshots?: ListSnapshotResponseBodySnapshots[];
  /**
   * @example
   * 32
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSnapshotResponseBody;
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
      body: ListSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotLinksRequest extends $tea.Model {
  /**
   * @example
   * FsId
   */
  filterKey?: string;
  /**
   * @example
   * dbfs-kwziq4dpsle********
   */
  filterValue?: string;
  /**
   * @example
   * ["dbfs-kwziq4dpsle********","dbfs-vuaqvfcjqsg********"]
   */
  fsIds?: string;
  /**
   * @example
   * ["sl-bp1grgphbcc9brb5****","sl-bp1c4izumvq0i5bs****","sl-bp1akk7isz866dds****"]
   */
  linkIds?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filterKey: 'FilterKey',
      filterValue: 'FilterValue',
      fsIds: 'FsIds',
      linkIds: 'LinkIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterKey: 'string',
      filterValue: 'string',
      fsIds: 'string',
      linkIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotLinksResponseBody extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  snapshotLinks?: ListSnapshotLinksResponseBodySnapshotLinks[];
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      snapshotLinks: 'SnapshotLinks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      snapshotLinks: { 'type': 'array', 'itemType': ListSnapshotLinksResponseBodySnapshotLinks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotLinksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSnapshotLinksResponseBody;
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
      body: ListSnapshotLinksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagKeysRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagKeysResponseBody;
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
      body: ListTagKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagValuesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tagKey1
   */
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagValuesResponseBody;
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
      body: ListTagValuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoSnapshotPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sp-z5siir3iq3m**********
   */
  policyId?: string;
  /**
   * @example
   * policyTest
   */
  policyName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  repeatWeekdays?: string[];
  /**
   * @example
   * 30
   */
  retentionDays?: number;
  timePoints?: string[];
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      repeatWeekdays: 'RepeatWeekdays',
      retentionDays: 'RetentionDays',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      policyName: 'string',
      regionId: 'string',
      repeatWeekdays: { 'type': 'array', 'itemType': 'string' },
      retentionDays: 'number',
      timePoints: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoSnapshotPolicyShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sp-z5siir3iq3m**********
   */
  policyId?: string;
  /**
   * @example
   * policyTest
   */
  policyName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  repeatWeekdaysShrink?: string;
  /**
   * @example
   * 30
   */
  retentionDays?: number;
  timePointsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      repeatWeekdaysShrink: 'RepeatWeekdays',
      retentionDays: 'RetentionDays',
      timePointsShrink: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      policyName: 'string',
      regionId: 'string',
      repeatWeekdaysShrink: 'string',
      retentionDays: 'number',
      timePointsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAutoSnapshotPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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

export class ModifyAutoSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyAutoSnapshotPolicyResponseBody;
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
      body: ModifyAutoSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySnapshotAttributeRequest extends $tea.Model {
  /**
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * s-y2vZ3********vvMilZ2hQ
   */
  snapshotId?: string;
  /**
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      regionId: 'RegionId',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      regionId: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySnapshotAttributeResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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

export class ModifySnapshotAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifySnapshotAttributeResponseBody;
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
      body: ModifySnapshotAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameDbfsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbfs-GOrr********Yd0VLOyBpg
   */
  fsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NewDbfsName
   */
  fsName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameDbfsResponseBody;
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
      body: RenameDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResizeDbfsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbfs-GOrr********Yd0VLOyBpg
   */
  fsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 40
   */
  newSizeG?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResizeDbfsResponseBody;
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
      body: ResizeDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagDbfsRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbfs-nUy1tb********BQ4X8Gpw
   */
  dbfsId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"TagKey":"k1","TagValue":"v1"},{"TagKey":"k2","TagValue":"v2"}]
   */
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagDbfsResponseBody;
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
      body: TagDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDbfsRequest extends $tea.Model {
  /**
   * @example
   * {"cpuCoreCount":0.5,"memorySize":512,"pageCacheSize":128}
   */
  advancedFeatures?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbfs-GOrr********Yd0VLOyBpg
   */
  fsId?: string;
  /**
   * @example
   * dbfs.medium
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * MySQL 5.7
   */
  usedScene?: string;
  static names(): { [key: string]: string } {
    return {
      advancedFeatures: 'AdvancedFeatures',
      fsId: 'FsId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
      usedScene: 'UsedScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedFeatures: 'string',
      fsId: 'string',
      instanceType: 'string',
      regionId: 'string',
      usedScene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDbfsResponseBody extends $tea.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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

export class UpdateDbfsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDbfsResponseBody;
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
      body: UpdateDbfsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTypesResponseBodyInstanceTypes extends $tea.Model {
  /**
   * @example
   * 0.25
   */
  cpuCoreCount?: number;
  /**
   * @example
   * dbfs.small
   */
  instanceTypeDescription?: string;
  /**
   * @example
   * dbfs.small
   */
  instanceTypeId?: string;
  /**
   * @example
   * 0.5
   */
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

export class GetAutoSnapshotPolicyResponseBodyData extends $tea.Model {
  /**
   * @example
   * 13523459********
   */
  accountId?: string;
  /**
   * @example
   * 1
   */
  appliedDbfsNumber?: number;
  /**
   * @example
   * 1670998784000
   */
  createdTime?: string;
  /**
   * @example
   * 1670998784000
   */
  lastModified?: string;
  /**
   * @example
   * sp-z5siir3iq3m**********
   */
  policyId?: string;
  /**
   * @example
   * PolicyTest
   */
  policyName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  repeatWeekdays?: string[];
  /**
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @example
   * Normal
   */
  status?: string;
  /**
   * @example
   * -
   */
  statusDetail?: string;
  timePoints?: string[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      appliedDbfsNumber: 'AppliedDbfsNumber',
      createdTime: 'CreatedTime',
      lastModified: 'LastModified',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      repeatWeekdays: 'RepeatWeekdays',
      retentionDays: 'RetentionDays',
      status: 'Status',
      statusDetail: 'StatusDetail',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      appliedDbfsNumber: 'number',
      createdTime: 'string',
      lastModified: 'string',
      policyId: 'string',
      policyName: 'string',
      regionId: 'string',
      repeatWeekdays: { 'type': 'array', 'itemType': 'string' },
      retentionDays: 'number',
      status: 'string',
      statusDetail: 'string',
      timePoints: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbfsResponseBodyDBFSInfoEbsList extends $tea.Model {
  /**
   * @example
   * d-bp1hq4******qi7gy1th
   */
  ebsId?: string;
  /**
   * @example
   * 20
   */
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
  /**
   * @example
   * i-y2vZ3********vvMilZ2hQ
   */
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

export class GetDbfsResponseBodyDBFSInfoSnapshotInfo extends $tea.Model {
  /**
   * @example
   * sl-9zskwvgoqqqvzxa*******
   */
  linkId?: string;
  /**
   * @example
   * sp-ehuhzlfetb2jiwz*******
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  snapshotCount?: number;
  /**
   * @example
   * 50331648
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      linkId: 'LinkId',
      policyId: 'PolicyId',
      snapshotCount: 'SnapshotCount',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      linkId: 'string',
      policyId: 'string',
      snapshotCount: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbfsResponseBodyDBFSInfoTags extends $tea.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * TestTagKey1
   */
  tagKey?: string;
  /**
   * @example
   * TestTagValue1
   */
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
  advancedFeatures?: string;
  /**
   * @example
   * 1
   */
  attachNodeNumber?: number;
  /**
   * @example
   * standard
   */
  category?: string;
  /**
   * @example
   * 1609330367000
   */
  createdTime?: string;
  /**
   * @example
   * c39EcDBf-2Ecb-C3C6-6526-018d4Dcf63eD
   */
  DBFSClusterId?: string;
  /**
   * @example
   * desc
   */
  description?: string;
  ebsList?: GetDbfsResponseBodyDBFSInfoEbsList[];
  ecsList?: GetDbfsResponseBodyDBFSInfoEcsList[];
  /**
   * @example
   * false
   */
  enableRaid?: boolean;
  /**
   * @example
   * false
   */
  encryption?: boolean;
  /**
   * @example
   * dbfs-GOrr********Yd0VLOyBpg
   */
  fsId?: string;
  /**
   * @example
   * dbfs-test-01
   */
  fsName?: string;
  /**
   * @example
   * dbfs.small
   */
  instanceType?: string;
  /**
   * @example
   * c39EcDBf-2Ecb-C3C6-6526-018d4D******
   */
  KMSKeyId?: string;
  /**
   * @example
   * TargetIsBusy.DBFS
   */
  lastFailed?: string;
  /**
   * @example
   * 1644915400000
   */
  lastMountTime?: string;
  /**
   * @example
   * 1644915319000
   */
  lastUmountTime?: string;
  /**
   * @example
   * postpaid
   */
  payType?: string;
  /**
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @example
   * 2
   */
  raidStrip?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 20
   */
  sizeG?: number;
  snapshotId?: string;
  snapshotInfo?: GetDbfsResponseBodyDBFSInfoSnapshotInfo;
  /**
   * @example
   * attached
   */
  status?: string;
  tags?: GetDbfsResponseBodyDBFSInfoTags[];
  /**
   * @example
   * MySQL 5.7
   */
  usedScene?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      advancedFeatures: 'AdvancedFeatures',
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
      lastFailed: 'LastFailed',
      lastMountTime: 'LastMountTime',
      lastUmountTime: 'LastUmountTime',
      payType: 'PayType',
      performanceLevel: 'PerformanceLevel',
      raidStrip: 'RaidStrip',
      regionId: 'RegionId',
      sizeG: 'SizeG',
      snapshotId: 'SnapshotId',
      snapshotInfo: 'SnapshotInfo',
      status: 'Status',
      tags: 'Tags',
      usedScene: 'UsedScene',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedFeatures: 'string',
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
      lastFailed: 'string',
      lastMountTime: 'string',
      lastUmountTime: 'string',
      payType: 'string',
      performanceLevel: 'string',
      raidStrip: 'number',
      regionId: 'string',
      sizeG: 'number',
      snapshotId: 'string',
      snapshotInfo: GetDbfsResponseBodyDBFSInfoSnapshotInfo,
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

export class GetSnapshotLinkResponseBodyDataEcsList extends $tea.Model {
  /**
   * @example
   * i-bp19mogqud1w1*******
   */
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

export class GetSnapshotLinkResponseBodyData extends $tea.Model {
  /**
   * @example
   * standard
   */
  category?: string;
  ecsList?: GetSnapshotLinkResponseBodyDataEcsList[];
  /**
   * @example
   * dbfs-194j6u20sp2gisx*******
   */
  fsId?: string;
  /**
   * @example
   * test
   */
  fsName?: string;
  /**
   * @example
   * sl-b3zlgraysgcs9jy*******
   */
  linkId?: string;
  /**
   * @example
   * 1
   */
  snapshotCount?: number;
  /**
   * @example
   * 20
   */
  sourceSize?: number;
  /**
   * @example
   * attached
   */
  status?: string;
  /**
   * @example
   * 50331648
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      ecsList: 'EcsList',
      fsId: 'FsId',
      fsName: 'FsName',
      linkId: 'LinkId',
      snapshotCount: 'SnapshotCount',
      sourceSize: 'SourceSize',
      status: 'Status',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      ecsList: { 'type': 'array', 'itemType': GetSnapshotLinkResponseBodyDataEcsList },
      fsId: 'string',
      fsName: 'string',
      linkId: 'string',
      snapshotCount: 'number',
      sourceSize: 'number',
      status: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoSnapshotPoliciesResponseBodySnapshotPolicies extends $tea.Model {
  /**
   * @example
   * 13523459********
   */
  accountId?: string;
  /**
   * @example
   * 1
   */
  appliedDbfsNumber?: number;
  /**
   * @example
   * 1670998784000
   */
  createdTime?: string;
  /**
   * @example
   * 1670998784000
   */
  lastModified?: string;
  /**
   * @example
   * sp-z5siir3iq3m**********
   */
  policyId?: string;
  /**
   * @example
   * policyTest
   */
  policyName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  repeatWeekdays?: string[];
  /**
   * @example
   * 30
   */
  retentionDays?: number;
  status?: string;
  /**
   * @example
   * -
   */
  statusDetail?: string;
  timePoints?: string[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      appliedDbfsNumber: 'AppliedDbfsNumber',
      createdTime: 'CreatedTime',
      lastModified: 'LastModified',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      repeatWeekdays: 'RepeatWeekdays',
      retentionDays: 'RetentionDays',
      status: 'Status',
      statusDetail: 'StatusDetail',
      timePoints: 'TimePoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      appliedDbfsNumber: 'number',
      createdTime: 'string',
      lastModified: 'string',
      policyId: 'string',
      policyName: 'string',
      regionId: 'string',
      repeatWeekdays: { 'type': 'array', 'itemType': 'string' },
      retentionDays: 'number',
      status: 'string',
      statusDetail: 'string',
      timePoints: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoSnapshotPolicyAppliedDbfsResponseBodyDbfsList extends $tea.Model {
  /**
   * @example
   * dbfs-ejdvesb0qvuywvg*******
   */
  fsId?: string;
  /**
   * @example
   * test
   */
  fsName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 20
   */
  sizeG?: number;
  /**
   * @example
   * 1
   */
  snapshotCount?: number;
  /**
   * @example
   * attached
   */
  status?: string;
  /**
   * @example
   * 50331648
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      fsId: 'FsId',
      fsName: 'FsName',
      regionId: 'RegionId',
      sizeG: 'SizeG',
      snapshotCount: 'SnapshotCount',
      status: 'Status',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fsId: 'string',
      fsName: 'string',
      regionId: 'string',
      sizeG: 'number',
      snapshotCount: 'number',
      status: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAutoSnapshotPolicyUnappliedDbfsResponseBodyDbfsList extends $tea.Model {
  /**
   * @example
   * dbfs-ejdvesb0qvuywvg*******
   */
  fsId?: string;
  /**
   * @example
   * test
   */
  fsName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 20
   */
  sizeG?: number;
  /**
   * @example
   * 1
   */
  snapshotCount?: number;
  /**
   * @example
   * attached
   */
  status?: string;
  /**
   * @example
   * 50331648
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      fsId: 'FsId',
      fsName: 'FsName',
      regionId: 'RegionId',
      sizeG: 'SizeG',
      snapshotCount: 'SnapshotCount',
      status: 'Status',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fsId: 'string',
      fsName: 'string',
      regionId: 'string',
      sizeG: 'number',
      snapshotCount: 'number',
      status: 'string',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsResponseBodyDBFSInfoEbsList extends $tea.Model {
  /**
   * @example
   * d-bp1383******3uir001r
   */
  ebsId?: string;
  /**
   * @example
   * 20
   */
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
  /**
   * @example
   * i-y2vZ3********vvMilZ2hQ
   */
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

export class ListDbfsResponseBodyDBFSInfoSnapshotInfo extends $tea.Model {
  /**
   * @example
   * sl-b3zlgraysgcs9jy*******
   */
  linkId?: string;
  /**
   * @example
   * sp-ehuhzlfetb2jiwz*******
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  snapshotCount?: number;
  /**
   * @example
   * 50331648
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      linkId: 'LinkId',
      policyId: 'PolicyId',
      snapshotCount: 'SnapshotCount',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      linkId: 'string',
      policyId: 'string',
      snapshotCount: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsResponseBodyDBFSInfoTags extends $tea.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * TestTagKey1
   */
  tagKey?: string;
  /**
   * @example
   * TestTagValue1
   */
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
  /**
   * @example
   * 1
   */
  attachNodeNumber?: number;
  /**
   * @example
   * standard
   */
  category?: string;
  /**
   * @example
   * 1609330367000
   */
  createdTime?: string;
  /**
   * @example
   * c39EcDBf-2Ecb-C3C6-6526-018d4Dcf63eD
   */
  DBFSClusterId?: string;
  ebsList?: ListDbfsResponseBodyDBFSInfoEbsList[];
  ecsList?: ListDbfsResponseBodyDBFSInfoEcsList[];
  /**
   * @example
   * false
   */
  enableRaid?: boolean;
  /**
   * @example
   * false
   */
  encryption?: boolean;
  /**
   * @example
   * dbfs-GOrr********Yd0VLOyBpg
   */
  fsId?: string;
  /**
   * @example
   * dbfs-test-01
   */
  fsName?: string;
  /**
   * @example
   * dbfs.small
   */
  instanceType?: string;
  /**
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb408***
   */
  KMSKeyId?: string;
  /**
   * @example
   * TargetIsBusy.DBFS
   */
  lastFailed?: string;
  /**
   * @example
   * 1644915400000
   */
  lastMountTime?: string;
  /**
   * @example
   * 1644915319000
   */
  lastUmountTime?: string;
  /**
   * @example
   * postpaid
   */
  payType?: string;
  /**
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @example
   * 2
   */
  raidStrip?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 20
   */
  sizeG?: number;
  snapshotInfo?: ListDbfsResponseBodyDBFSInfoSnapshotInfo;
  /**
   * @example
   * attached
   */
  status?: string;
  tags?: ListDbfsResponseBodyDBFSInfoTags[];
  /**
   * @example
   * MySQL 5.7
   */
  usedScene?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
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
      lastFailed: 'LastFailed',
      lastMountTime: 'LastMountTime',
      lastUmountTime: 'LastUmountTime',
      payType: 'PayType',
      performanceLevel: 'PerformanceLevel',
      raidStrip: 'RaidStrip',
      regionId: 'RegionId',
      sizeG: 'SizeG',
      snapshotInfo: 'SnapshotInfo',
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
      lastFailed: 'string',
      lastMountTime: 'string',
      lastUmountTime: 'string',
      payType: 'string',
      performanceLevel: 'string',
      raidStrip: 'number',
      regionId: 'string',
      sizeG: 'number',
      snapshotInfo: ListDbfsResponseBodyDBFSInfoSnapshotInfo,
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
  /**
   * @example
   * m-bp67acfmxazb4p****
   */
  imageId?: string;
  /**
   * @example
   * ecs.g7se
   */
  instanceTypeFamily?: string;
  /**
   * @example
   * Alibaba Cloud Linux 2.1903 LTS 64 bit
   */
  OSName?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  /**
   * @example
   * dbfs-test-01
   */
  label?: string;
  /**
   * @example
   * i-bp10jb8mqajkmrejgo00
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      instanceTypeFamily: 'InstanceTypeFamily',
      OSName: 'OSName',
      status: 'Status',
      zoneId: 'ZoneId',
      label: 'label',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      instanceTypeFamily: 'string',
      OSName: 'string',
      status: 'string',
      zoneId: 'string',
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDbfsAttachedEcsInstancesResponseBodyEcsLabelInfo extends $tea.Model {
  /**
   * @example
   * ecs.g7se
   */
  instanceTypeFamily?: string;
  /**
   * @example
   * /mnt/dbfs/dbfs-nUy1tb********BQ4X8Gpw
   */
  mountPoint?: string;
  /**
   * @example
   * 1606290930000
   */
  mountedTime?: string;
  /**
   * @example
   * Alibaba Cloud Linux 2.1903 LTS 64 bit
   */
  OSName?: string;
  /**
   * @example
   * dbfs-test-01
   */
  label?: string;
  /**
   * @example
   * i-bp10jb8mqajkmrejgo00
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypeFamily: 'InstanceTypeFamily',
      mountPoint: 'MountPoint',
      mountedTime: 'MountedTime',
      OSName: 'OSName',
      label: 'label',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeFamily: 'string',
      mountPoint: 'string',
      mountedTime: 'string',
      OSName: 'string',
      label: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotResponseBodySnapshots extends $tea.Model {
  /**
   * @example
   * standard
   */
  category?: string;
  /**
   * @example
   * 1609330367000
   */
  creationTime?: string;
  /**
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @example
   * 1609330367000
   */
  lastModifiedTime?: string;
  /**
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @example
   * 38
   */
  remainTime?: number;
  /**
   * @example
   * 30
   */
  retentionDays?: number;
  /**
   * @example
   * s-bp67acfmxazb4p****
   */
  snapshotId?: string;
  /**
   * @example
   * testSnapshotName
   */
  snapshotName?: string;
  /**
   * @example
   * user
   */
  snapshotType?: string;
  /**
   * @example
   * dbfs-bp67acfmxazb4p****
   */
  sourceFsId?: string;
  /**
   * @example
   * 20
   */
  sourceFsSize?: number;
  /**
   * @example
   * 1
   */
  sourceFsStripeWidth?: number;
  /**
   * @example
   * accomplished
   */
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
      sourceFsStripeWidth: 'SourceFsStripeWidth',
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
      sourceFsStripeWidth: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotLinksResponseBodySnapshotLinksEcsList extends $tea.Model {
  /**
   * @example
   * i-bp1f4eo2biro*******
   */
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

export class ListSnapshotLinksResponseBodySnapshotLinks extends $tea.Model {
  ecsList?: ListSnapshotLinksResponseBodySnapshotLinksEcsList[];
  /**
   * @example
   * dbfs-q7qsgyqptjk******
   */
  fsId?: string;
  /**
   * @example
   * test
   */
  fsName?: string;
  /**
   * @example
   * sl-b3zlgraysgcs9jy*******
   */
  linkId?: string;
  /**
   * @example
   * 1
   */
  snapshotCount?: number;
  /**
   * @example
   * 20
   */
  sourceSize?: number;
  /**
   * @example
   * attached
   */
  status?: string;
  /**
   * @example
   * 50331648
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      ecsList: 'EcsList',
      fsId: 'FsId',
      fsName: 'FsName',
      linkId: 'LinkId',
      snapshotCount: 'SnapshotCount',
      sourceSize: 'SourceSize',
      status: 'Status',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsList: { 'type': 'array', 'itemType': ListSnapshotLinksResponseBodySnapshotLinksEcsList },
      fsId: 'string',
      fsName: 'string',
      linkId: 'string',
      snapshotCount: 'number',
      sourceSize: 'number',
      status: 'string',
      totalSize: 'number',
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

  /**
   * @param request - AddTagsBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTagsBatchResponse
   */
  async addTagsBatchWithOptions(request: AddTagsBatchRequest, runtime: $Util.RuntimeOptions): Promise<AddTagsBatchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dbfsList)) {
      query["DbfsList"] = request.dbfsList;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddTagsBatch",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddTagsBatchResponse>(await this.callApi(params, req, runtime), new AddTagsBatchResponse({}));
  }

  /**
   * @param request - AddTagsBatchRequest
   * @returns AddTagsBatchResponse
   */
  async addTagsBatch(request: AddTagsBatchRequest): Promise<AddTagsBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTagsBatchWithOptions(request, runtime);
  }

  /**
   * 设置自动快照策略
   * 
   * @param tmpReq - ApplyAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyAutoSnapshotPolicyResponse
   */
  async applyAutoSnapshotPolicyWithOptions(tmpReq: ApplyAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ApplyAutoSnapshotPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new ApplyAutoSnapshotPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dbfsIds)) {
      request.dbfsIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dbfsIds, "DbfsIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.dbfsIdsShrink)) {
      query["DbfsIds"] = request.dbfsIdsShrink;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyAutoSnapshotPolicy",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new ApplyAutoSnapshotPolicyResponse({}));
  }

  /**
   * 设置自动快照策略
   * 
   * @param request - ApplyAutoSnapshotPolicyRequest
   * @returns ApplyAutoSnapshotPolicyResponse
   */
  async applyAutoSnapshotPolicy(request: ApplyAutoSnapshotPolicyRequest): Promise<ApplyAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - AttachDbfsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachDbfsResponse
   */
  async attachDbfsWithOptions(request: AttachDbfsRequest, runtime: $Util.RuntimeOptions): Promise<AttachDbfsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.attachMode)) {
      query["AttachMode"] = request.attachMode;
    }

    if (!Util.isUnset(request.attachPoint)) {
      query["AttachPoint"] = request.attachPoint;
    }

    if (!Util.isUnset(request.ECSInstanceId)) {
      query["ECSInstanceId"] = request.ECSInstanceId;
    }

    if (!Util.isUnset(request.fsId)) {
      query["FsId"] = request.fsId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serverUrl)) {
      query["ServerUrl"] = request.serverUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachDbfs",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachDbfsResponse>(await this.callApi(params, req, runtime), new AttachDbfsResponse({}));
  }

  /**
   * @param request - AttachDbfsRequest
   * @returns AttachDbfsResponse
   */
  async attachDbfs(request: AttachDbfsRequest): Promise<AttachDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDbfsWithOptions(request, runtime);
  }

  /**
   * 取消自动快照策略
   * 
   * @param tmpReq - CancelAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAutoSnapshotPolicyResponse
   */
  async cancelAutoSnapshotPolicyWithOptions(tmpReq: CancelAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CancelAutoSnapshotPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new CancelAutoSnapshotPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dbfsIds)) {
      request.dbfsIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dbfsIds, "DbfsIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.dbfsIdsShrink)) {
      query["DbfsIds"] = request.dbfsIdsShrink;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelAutoSnapshotPolicy",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new CancelAutoSnapshotPolicyResponse({}));
  }

  /**
   * 取消自动快照策略
   * 
   * @param request - CancelAutoSnapshotPolicyRequest
   * @returns CancelAutoSnapshotPolicyResponse
   */
  async cancelAutoSnapshotPolicy(request: CancelAutoSnapshotPolicyRequest): Promise<CancelAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * 创建自动快照策略
   * 
   * @param tmpReq - CreateAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutoSnapshotPolicyResponse
   */
  async createAutoSnapshotPolicyWithOptions(tmpReq: CreateAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateAutoSnapshotPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAutoSnapshotPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.repeatWeekdays)) {
      request.repeatWeekdaysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.repeatWeekdays, "RepeatWeekdays", "json");
    }

    if (!Util.isUnset(tmpReq.timePoints)) {
      request.timePointsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.timePoints, "TimePoints", "json");
    }

    let query = { };
    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.repeatWeekdaysShrink)) {
      query["RepeatWeekdays"] = request.repeatWeekdaysShrink;
    }

    if (!Util.isUnset(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!Util.isUnset(request.timePointsShrink)) {
      query["TimePoints"] = request.timePointsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAutoSnapshotPolicy",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new CreateAutoSnapshotPolicyResponse({}));
  }

  /**
   * 创建自动快照策略
   * 
   * @param request - CreateAutoSnapshotPolicyRequest
   * @returns CreateAutoSnapshotPolicyResponse
   */
  async createAutoSnapshotPolicy(request: CreateAutoSnapshotPolicyRequest): Promise<CreateAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDbfsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDbfsResponse
   */
  async createDbfsWithOptions(request: CreateDbfsRequest, runtime: $Util.RuntimeOptions): Promise<CreateDbfsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.advancedFeatures)) {
      query["AdvancedFeatures"] = request.advancedFeatures;
    }

    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deleteSnapshot)) {
      query["DeleteSnapshot"] = request.deleteSnapshot;
    }

    if (!Util.isUnset(request.enableRaid)) {
      query["EnableRaid"] = request.enableRaid;
    }

    if (!Util.isUnset(request.encryption)) {
      query["Encryption"] = request.encryption;
    }

    if (!Util.isUnset(request.fsName)) {
      query["FsName"] = request.fsName;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.KMSKeyId)) {
      query["KMSKeyId"] = request.KMSKeyId;
    }

    if (!Util.isUnset(request.performanceLevel)) {
      query["PerformanceLevel"] = request.performanceLevel;
    }

    if (!Util.isUnset(request.raidStripeUnitNumber)) {
      query["RaidStripeUnitNumber"] = request.raidStripeUnitNumber;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sizeG)) {
      query["SizeG"] = request.sizeG;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!Util.isUnset(request.usedScene)) {
      query["UsedScene"] = request.usedScene;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDbfs",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDbfsResponse>(await this.callApi(params, req, runtime), new CreateDbfsResponse({}));
  }

  /**
   * @param request - CreateDbfsRequest
   * @returns CreateDbfsResponse
   */
  async createDbfs(request: CreateDbfsRequest): Promise<CreateDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDbfsWithOptions(request, runtime);
  }

  /**
   * @param request - CreateServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRoleWithOptions(request: CreateServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<CreateServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceLinkedRole",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new CreateServiceLinkedRoleResponse({}));
  }

  /**
   * @param request - CreateServiceLinkedRoleRequest
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * @param request - CreateSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSnapshotResponse
   */
  async createSnapshotWithOptions(request: CreateSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<CreateSnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.fsId)) {
      query["FsId"] = request.fsId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!Util.isUnset(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSnapshot",
      version: "2020-04-18",
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

  /**
   * @param request - CreateSnapshotRequest
   * @returns CreateSnapshotResponse
   */
  async createSnapshot(request: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

  /**
   * 删除自动快照策略
   * 
   * @param request - DeleteAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutoSnapshotPolicyResponse
   */
  async deleteAutoSnapshotPolicyWithOptions(request: DeleteAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAutoSnapshotPolicy",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new DeleteAutoSnapshotPolicyResponse({}));
  }

  /**
   * 删除自动快照策略
   * 
   * @param request - DeleteAutoSnapshotPolicyRequest
   * @returns DeleteAutoSnapshotPolicyResponse
   */
  async deleteAutoSnapshotPolicy(request: DeleteAutoSnapshotPolicyRequest): Promise<DeleteAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteDbfsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDbfsResponse
   */
  async deleteDbfsWithOptions(request: DeleteDbfsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDbfsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
    }

    if (!Util.isUnset(request.fsId)) {
      query["FsId"] = request.fsId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDbfs",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDbfsResponse>(await this.callApi(params, req, runtime), new DeleteDbfsResponse({}));
  }

  /**
   * @param request - DeleteDbfsRequest
   * @returns DeleteDbfsResponse
   */
  async deleteDbfs(request: DeleteDbfsRequest): Promise<DeleteDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDbfsWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(request: DeleteSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.force)) {
      query["Force"] = request.force;
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
      action: "DeleteSnapshot",
      version: "2020-04-18",
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

  /**
   * @param request - DeleteSnapshotRequest
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshot(request: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteTagsBatchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTagsBatchResponse
   */
  async deleteTagsBatchWithOptions(request: DeleteTagsBatchRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTagsBatchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbfsList)) {
      query["DbfsList"] = request.dbfsList;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTagsBatch",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTagsBatchResponse>(await this.callApi(params, req, runtime), new DeleteTagsBatchResponse({}));
  }

  /**
   * @param request - DeleteTagsBatchRequest
   * @returns DeleteTagsBatchResponse
   */
  async deleteTagsBatch(request: DeleteTagsBatchRequest): Promise<DeleteTagsBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagsBatchWithOptions(request, runtime);
  }

  /**
   * 查询DBFS支持的ECS实例类型，根据ECS实例规格返回ECS可挂载的最大DBFS数量
   * 
   * @param request - DescribeDbfsSpecificationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDbfsSpecificationsResponse
   */
  async describeDbfsSpecificationsWithOptions(request: DescribeDbfsSpecificationsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDbfsSpecificationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.ecsInstanceType)) {
      query["EcsInstanceType"] = request.ecsInstanceType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDbfsSpecifications",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDbfsSpecificationsResponse>(await this.callApi(params, req, runtime), new DescribeDbfsSpecificationsResponse({}));
  }

  /**
   * 查询DBFS支持的ECS实例类型，根据ECS实例规格返回ECS可挂载的最大DBFS数量
   * 
   * @param request - DescribeDbfsSpecificationsRequest
   * @returns DescribeDbfsSpecificationsResponse
   */
  async describeDbfsSpecifications(request: DescribeDbfsSpecificationsRequest): Promise<DescribeDbfsSpecificationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDbfsSpecificationsWithOptions(request, runtime);
  }

  /**
   * 查询DBFS实例规格
   * 
   * @param request - DescribeInstanceTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceTypesResponse
   */
  async describeInstanceTypesWithOptions(request: DescribeInstanceTypesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceTypesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstanceTypes",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceTypesResponse>(await this.callApi(params, req, runtime), new DescribeInstanceTypesResponse({}));
  }

  /**
   * 查询DBFS实例规格
   * 
   * @param request - DescribeInstanceTypesRequest
   * @returns DescribeInstanceTypesResponse
   */
  async describeInstanceTypes(request: DescribeInstanceTypesRequest): Promise<DescribeInstanceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTypesWithOptions(request, runtime);
  }

  /**
   * @param request - DetachDbfsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachDbfsResponse
   */
  async detachDbfsWithOptions(request: DetachDbfsRequest, runtime: $Util.RuntimeOptions): Promise<DetachDbfsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.ECSInstanceId)) {
      query["ECSInstanceId"] = request.ECSInstanceId;
    }

    if (!Util.isUnset(request.fsId)) {
      query["FsId"] = request.fsId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachDbfs",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachDbfsResponse>(await this.callApi(params, req, runtime), new DetachDbfsResponse({}));
  }

  /**
   * @param request - DetachDbfsRequest
   * @returns DetachDbfsResponse
   */
  async detachDbfs(request: DetachDbfsRequest): Promise<DetachDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachDbfsWithOptions(request, runtime);
  }

  /**
   * 查询某条自动快照策略
   * 
   * @param request - GetAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoSnapshotPolicyResponse
   */
  async getAutoSnapshotPolicyWithOptions(request: GetAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetAutoSnapshotPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAutoSnapshotPolicy",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new GetAutoSnapshotPolicyResponse({}));
  }

  /**
   * 查询某条自动快照策略
   * 
   * @param request - GetAutoSnapshotPolicyRequest
   * @returns GetAutoSnapshotPolicyResponse
   */
  async getAutoSnapshotPolicy(request: GetAutoSnapshotPolicyRequest): Promise<GetAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - GetDbfsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDbfsResponse
   */
  async getDbfsWithOptions(request: GetDbfsRequest, runtime: $Util.RuntimeOptions): Promise<GetDbfsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fsId)) {
      query["FsId"] = request.fsId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDbfs",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDbfsResponse>(await this.callApi(params, req, runtime), new GetDbfsResponse({}));
  }

  /**
   * @param request - GetDbfsRequest
   * @returns GetDbfsResponse
   */
  async getDbfs(request: GetDbfsRequest): Promise<GetDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDbfsWithOptions(request, runtime);
  }

  /**
   * @param request - GetServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceLinkedRoleResponse
   */
  async getServiceLinkedRoleWithOptions(request: GetServiceLinkedRoleRequest, runtime: $Util.RuntimeOptions): Promise<GetServiceLinkedRoleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetServiceLinkedRole",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new GetServiceLinkedRoleResponse({}));
  }

  /**
   * @param request - GetServiceLinkedRoleRequest
   * @returns GetServiceLinkedRoleResponse
   */
  async getServiceLinkedRole(request: GetServiceLinkedRoleRequest): Promise<GetServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * 获取快照链
   * 
   * @param request - GetSnapshotLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSnapshotLinkResponse
   */
  async getSnapshotLinkWithOptions(request: GetSnapshotLinkRequest, runtime: $Util.RuntimeOptions): Promise<GetSnapshotLinkResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSnapshotLink",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSnapshotLinkResponse>(await this.callApi(params, req, runtime), new GetSnapshotLinkResponse({}));
  }

  /**
   * 获取快照链
   * 
   * @param request - GetSnapshotLinkRequest
   * @returns GetSnapshotLinkResponse
   */
  async getSnapshotLink(request: GetSnapshotLinkRequest): Promise<GetSnapshotLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSnapshotLinkWithOptions(request, runtime);
  }

  /**
   * 列出自动快照策略
   * 
   * @param request - ListAutoSnapshotPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAutoSnapshotPoliciesResponse
   */
  async listAutoSnapshotPoliciesWithOptions(request: ListAutoSnapshotPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListAutoSnapshotPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filterKey)) {
      query["FilterKey"] = request.filterKey;
    }

    if (!Util.isUnset(request.filterValue)) {
      query["FilterValue"] = request.filterValue;
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
      action: "ListAutoSnapshotPolicies",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAutoSnapshotPoliciesResponse>(await this.callApi(params, req, runtime), new ListAutoSnapshotPoliciesResponse({}));
  }

  /**
   * 列出自动快照策略
   * 
   * @param request - ListAutoSnapshotPoliciesRequest
   * @returns ListAutoSnapshotPoliciesResponse
   */
  async listAutoSnapshotPolicies(request: ListAutoSnapshotPoliciesRequest): Promise<ListAutoSnapshotPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAutoSnapshotPoliciesWithOptions(request, runtime);
  }

  /**
   * 列出已设置自动快照策略的DBFS
   * 
   * @param request - ListAutoSnapshotPolicyAppliedDbfsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAutoSnapshotPolicyAppliedDbfsResponse
   */
  async listAutoSnapshotPolicyAppliedDbfsWithOptions(request: ListAutoSnapshotPolicyAppliedDbfsRequest, runtime: $Util.RuntimeOptions): Promise<ListAutoSnapshotPolicyAppliedDbfsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filterKey)) {
      query["FilterKey"] = request.filterKey;
    }

    if (!Util.isUnset(request.filterValue)) {
      query["FilterValue"] = request.filterValue;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAutoSnapshotPolicyAppliedDbfs",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAutoSnapshotPolicyAppliedDbfsResponse>(await this.callApi(params, req, runtime), new ListAutoSnapshotPolicyAppliedDbfsResponse({}));
  }

  /**
   * 列出已设置自动快照策略的DBFS
   * 
   * @param request - ListAutoSnapshotPolicyAppliedDbfsRequest
   * @returns ListAutoSnapshotPolicyAppliedDbfsResponse
   */
  async listAutoSnapshotPolicyAppliedDbfs(request: ListAutoSnapshotPolicyAppliedDbfsRequest): Promise<ListAutoSnapshotPolicyAppliedDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAutoSnapshotPolicyAppliedDbfsWithOptions(request, runtime);
  }

  /**
   * 列出未设置自动快照策略的DBFS
   * 
   * @param request - ListAutoSnapshotPolicyUnappliedDbfsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAutoSnapshotPolicyUnappliedDbfsResponse
   */
  async listAutoSnapshotPolicyUnappliedDbfsWithOptions(request: ListAutoSnapshotPolicyUnappliedDbfsRequest, runtime: $Util.RuntimeOptions): Promise<ListAutoSnapshotPolicyUnappliedDbfsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filterKey)) {
      query["FilterKey"] = request.filterKey;
    }

    if (!Util.isUnset(request.filterValue)) {
      query["FilterValue"] = request.filterValue;
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
      action: "ListAutoSnapshotPolicyUnappliedDbfs",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAutoSnapshotPolicyUnappliedDbfsResponse>(await this.callApi(params, req, runtime), new ListAutoSnapshotPolicyUnappliedDbfsResponse({}));
  }

  /**
   * 列出未设置自动快照策略的DBFS
   * 
   * @param request - ListAutoSnapshotPolicyUnappliedDbfsRequest
   * @returns ListAutoSnapshotPolicyUnappliedDbfsResponse
   */
  async listAutoSnapshotPolicyUnappliedDbfs(request: ListAutoSnapshotPolicyUnappliedDbfsRequest): Promise<ListAutoSnapshotPolicyUnappliedDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAutoSnapshotPolicyUnappliedDbfsWithOptions(request, runtime);
  }

  /**
   * @param request - ListDbfsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDbfsResponse
   */
  async listDbfsWithOptions(request: ListDbfsRequest, runtime: $Util.RuntimeOptions): Promise<ListDbfsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filterKey)) {
      query["FilterKey"] = request.filterKey;
    }

    if (!Util.isUnset(request.filterValue)) {
      query["FilterValue"] = request.filterValue;
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

    if (!Util.isUnset(request.sortKey)) {
      query["SortKey"] = request.sortKey;
    }

    if (!Util.isUnset(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDbfs",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDbfsResponse>(await this.callApi(params, req, runtime), new ListDbfsResponse({}));
  }

  /**
   * @param request - ListDbfsRequest
   * @returns ListDbfsResponse
   */
  async listDbfs(request: ListDbfsRequest): Promise<ListDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDbfsWithOptions(request, runtime);
  }

  /**
   * @param request - ListDbfsAttachableEcsInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDbfsAttachableEcsInstancesResponse
   */
  async listDbfsAttachableEcsInstancesWithOptions(request: ListDbfsAttachableEcsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListDbfsAttachableEcsInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filterKey)) {
      query["FilterKey"] = request.filterKey;
    }

    if (!Util.isUnset(request.filterValue)) {
      query["FilterValue"] = request.filterValue;
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
      action: "ListDbfsAttachableEcsInstances",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDbfsAttachableEcsInstancesResponse>(await this.callApi(params, req, runtime), new ListDbfsAttachableEcsInstancesResponse({}));
  }

  /**
   * @param request - ListDbfsAttachableEcsInstancesRequest
   * @returns ListDbfsAttachableEcsInstancesResponse
   */
  async listDbfsAttachableEcsInstances(request: ListDbfsAttachableEcsInstancesRequest): Promise<ListDbfsAttachableEcsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDbfsAttachableEcsInstancesWithOptions(request, runtime);
  }

  /**
   * 查询数据库文件系统被挂载的ECS实例列表
   * 
   * @param request - ListDbfsAttachedEcsInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDbfsAttachedEcsInstancesResponse
   */
  async listDbfsAttachedEcsInstancesWithOptions(request: ListDbfsAttachedEcsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListDbfsAttachedEcsInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fsId)) {
      query["FsId"] = request.fsId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDbfsAttachedEcsInstances",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDbfsAttachedEcsInstancesResponse>(await this.callApi(params, req, runtime), new ListDbfsAttachedEcsInstancesResponse({}));
  }

  /**
   * 查询数据库文件系统被挂载的ECS实例列表
   * 
   * @param request - ListDbfsAttachedEcsInstancesRequest
   * @returns ListDbfsAttachedEcsInstancesResponse
   */
  async listDbfsAttachedEcsInstances(request: ListDbfsAttachedEcsInstancesRequest): Promise<ListDbfsAttachedEcsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDbfsAttachedEcsInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - ListSnapshotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSnapshotResponse
   */
  async listSnapshotWithOptions(request: ListSnapshotRequest, runtime: $Util.RuntimeOptions): Promise<ListSnapshotResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filterKey)) {
      query["FilterKey"] = request.filterKey;
    }

    if (!Util.isUnset(request.filterValue)) {
      query["FilterValue"] = request.filterValue;
    }

    if (!Util.isUnset(request.fsId)) {
      query["FsId"] = request.fsId;
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

    if (!Util.isUnset(request.snapshotIds)) {
      query["SnapshotIds"] = request.snapshotIds;
    }

    if (!Util.isUnset(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    if (!Util.isUnset(request.snapshotType)) {
      query["SnapshotType"] = request.snapshotType;
    }

    if (!Util.isUnset(request.sortKey)) {
      query["SortKey"] = request.sortKey;
    }

    if (!Util.isUnset(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSnapshot",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSnapshotResponse>(await this.callApi(params, req, runtime), new ListSnapshotResponse({}));
  }

  /**
   * @param request - ListSnapshotRequest
   * @returns ListSnapshotResponse
   */
  async listSnapshot(request: ListSnapshotRequest): Promise<ListSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSnapshotWithOptions(request, runtime);
  }

  /**
   * 列出快照链
   * 
   * @param request - ListSnapshotLinksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSnapshotLinksResponse
   */
  async listSnapshotLinksWithOptions(request: ListSnapshotLinksRequest, runtime: $Util.RuntimeOptions): Promise<ListSnapshotLinksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filterKey)) {
      query["FilterKey"] = request.filterKey;
    }

    if (!Util.isUnset(request.filterValue)) {
      query["FilterValue"] = request.filterValue;
    }

    if (!Util.isUnset(request.fsIds)) {
      query["FsIds"] = request.fsIds;
    }

    if (!Util.isUnset(request.linkIds)) {
      query["LinkIds"] = request.linkIds;
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
      action: "ListSnapshotLinks",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSnapshotLinksResponse>(await this.callApi(params, req, runtime), new ListSnapshotLinksResponse({}));
  }

  /**
   * 列出快照链
   * 
   * @param request - ListSnapshotLinksRequest
   * @returns ListSnapshotLinksResponse
   */
  async listSnapshotLinks(request: ListSnapshotLinksRequest): Promise<ListSnapshotLinksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSnapshotLinksWithOptions(request, runtime);
  }

  /**
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: ListTagKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListTagKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagKeys",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagKeysResponse>(await this.callApi(params, req, runtime), new ListTagKeysResponse({}));
  }

  /**
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: ListTagValuesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagValuesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagValues",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagValuesResponse>(await this.callApi(params, req, runtime), new ListTagValuesResponse({}));
  }

  /**
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * 修改自动快照策略
   * 
   * @param tmpReq - ModifyAutoSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAutoSnapshotPolicyResponse
   */
  async modifyAutoSnapshotPolicyWithOptions(tmpReq: ModifyAutoSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ModifyAutoSnapshotPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new ModifyAutoSnapshotPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.repeatWeekdays)) {
      request.repeatWeekdaysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.repeatWeekdays, "RepeatWeekdays", "json");
    }

    if (!Util.isUnset(tmpReq.timePoints)) {
      request.timePointsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.timePoints, "TimePoints", "json");
    }

    let query = { };
    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.repeatWeekdaysShrink)) {
      query["RepeatWeekdays"] = request.repeatWeekdaysShrink;
    }

    if (!Util.isUnset(request.retentionDays)) {
      query["RetentionDays"] = request.retentionDays;
    }

    if (!Util.isUnset(request.timePointsShrink)) {
      query["TimePoints"] = request.timePointsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyAutoSnapshotPolicy",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyAutoSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new ModifyAutoSnapshotPolicyResponse({}));
  }

  /**
   * 修改自动快照策略
   * 
   * @param request - ModifyAutoSnapshotPolicyRequest
   * @returns ModifyAutoSnapshotPolicyResponse
   */
  async modifyAutoSnapshotPolicy(request: ModifyAutoSnapshotPolicyRequest): Promise<ModifyAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAutoSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * 修改快照属性
   * 
   * @param request - ModifySnapshotAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySnapshotAttributeResponse
   */
  async modifySnapshotAttributeWithOptions(request: ModifySnapshotAttributeRequest, runtime: $Util.RuntimeOptions): Promise<ModifySnapshotAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.snapshotId)) {
      query["SnapshotId"] = request.snapshotId;
    }

    if (!Util.isUnset(request.snapshotName)) {
      query["SnapshotName"] = request.snapshotName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifySnapshotAttribute",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifySnapshotAttributeResponse>(await this.callApi(params, req, runtime), new ModifySnapshotAttributeResponse({}));
  }

  /**
   * 修改快照属性
   * 
   * @param request - ModifySnapshotAttributeRequest
   * @returns ModifySnapshotAttributeResponse
   */
  async modifySnapshotAttribute(request: ModifySnapshotAttributeRequest): Promise<ModifySnapshotAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySnapshotAttributeWithOptions(request, runtime);
  }

  /**
   * @param request - RenameDbfsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameDbfsResponse
   */
  async renameDbfsWithOptions(request: RenameDbfsRequest, runtime: $Util.RuntimeOptions): Promise<RenameDbfsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fsId)) {
      query["FsId"] = request.fsId;
    }

    if (!Util.isUnset(request.fsName)) {
      query["FsName"] = request.fsName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenameDbfs",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameDbfsResponse>(await this.callApi(params, req, runtime), new RenameDbfsResponse({}));
  }

  /**
   * @param request - RenameDbfsRequest
   * @returns RenameDbfsResponse
   */
  async renameDbfs(request: RenameDbfsRequest): Promise<RenameDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameDbfsWithOptions(request, runtime);
  }

  /**
   * @param request - ResizeDbfsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResizeDbfsResponse
   */
  async resizeDbfsWithOptions(request: ResizeDbfsRequest, runtime: $Util.RuntimeOptions): Promise<ResizeDbfsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fsId)) {
      query["FsId"] = request.fsId;
    }

    if (!Util.isUnset(request.newSizeG)) {
      query["NewSizeG"] = request.newSizeG;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResizeDbfs",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResizeDbfsResponse>(await this.callApi(params, req, runtime), new ResizeDbfsResponse({}));
  }

  /**
   * @param request - ResizeDbfsRequest
   * @returns ResizeDbfsResponse
   */
  async resizeDbfs(request: ResizeDbfsRequest): Promise<ResizeDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeDbfsWithOptions(request, runtime);
  }

  /**
   * @param request - TagDbfsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagDbfsResponse
   */
  async tagDbfsWithOptions(request: TagDbfsRequest, runtime: $Util.RuntimeOptions): Promise<TagDbfsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dbfsId)) {
      query["DbfsId"] = request.dbfsId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagDbfs",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagDbfsResponse>(await this.callApi(params, req, runtime), new TagDbfsResponse({}));
  }

  /**
   * @param request - TagDbfsRequest
   * @returns TagDbfsResponse
   */
  async tagDbfs(request: TagDbfsRequest): Promise<TagDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagDbfsWithOptions(request, runtime);
  }

  /**
   * 修改DBFS实例，包括使用场景、实例规格等。
   * 
   * @param request - UpdateDbfsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDbfsResponse
   */
  async updateDbfsWithOptions(request: UpdateDbfsRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDbfsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.advancedFeatures)) {
      query["AdvancedFeatures"] = request.advancedFeatures;
    }

    if (!Util.isUnset(request.fsId)) {
      query["FsId"] = request.fsId;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.usedScene)) {
      query["UsedScene"] = request.usedScene;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDbfs",
      version: "2020-04-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDbfsResponse>(await this.callApi(params, req, runtime), new UpdateDbfsResponse({}));
  }

  /**
   * 修改DBFS实例，包括使用场景、实例规格等。
   * 
   * @param request - UpdateDbfsRequest
   * @returns UpdateDbfsResponse
   */
  async updateDbfs(request: UpdateDbfsRequest): Promise<UpdateDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDbfsWithOptions(request, runtime);
  }

}
