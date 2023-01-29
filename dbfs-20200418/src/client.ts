// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
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
  statusCode: number;
  body: AddTagsBatchResponseBody;
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
  dbfsIds?: string[];
  policyId?: string;
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
  dbfsIdsShrink?: string;
  policyId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyAutoSnapshotPolicyResponseBody;
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
  statusCode: number;
  body: AttachDbfsResponseBody;
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
  dbfsIds?: string[];
  policyId?: string;
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
  dbfsIdsShrink?: string;
  policyId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelAutoSnapshotPolicyResponseBody;
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
  policyName?: string;
  regionId?: string;
  repeatWeekdays?: string[];
  retentionDays?: number;
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
  policyName?: string;
  regionId?: string;
  repeatWeekdaysShrink?: string;
  retentionDays?: number;
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
  policyId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAutoSnapshotPolicyResponseBody;
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
  advancedFeatures?: string;
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
  statusCode: number;
  body: CreateDbfsResponseBody;
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
  statusCode: number;
  body: CreateServiceLinkedRoleResponseBody;
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

export class DeleteAutoSnapshotPolicyRequest extends $tea.Model {
  policyId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAutoSnapshotPolicyResponseBody;
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
  force?: boolean;
  fsId?: string;
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
  statusCode: number;
  body: DeleteDbfsResponseBody;
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
  statusCode: number;
  body: DeleteTagsBatchResponseBody;
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
  statusCode: number;
  body: DescribeDbfsSpecificationsResponseBody;
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
  statusCode: number;
  body: DescribeInstanceTypesResponseBody;
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
  statusCode: number;
  body: DetachDbfsResponseBody;
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
  policyId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAutoSnapshotPolicyResponseBody;
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
  statusCode: number;
  body: GetDbfsResponseBody;
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
  statusCode: number;
  body: GetServiceLinkedRoleResponseBody;
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
  linkId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSnapshotLinkResponseBody;
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
  filterKey?: string;
  filterValue?: string;
  pageNumber?: number;
  pageSize?: number;
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
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  snapshotPolicies?: ListAutoSnapshotPoliciesResponseBodySnapshotPolicies[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAutoSnapshotPoliciesResponseBody;
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
  filterKey?: string;
  filterValue?: string;
  pageNumber?: number;
  pageSize?: number;
  policyId?: string;
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
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAutoSnapshotPolicyAppliedDbfsResponseBody;
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
  filterKey?: string;
  filterValue?: string;
  pageNumber?: number;
  pageSize?: number;
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
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAutoSnapshotPolicyUnappliedDbfsResponseBody;
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
  statusCode: number;
  body: ListDbfsResponseBody;
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
  filterKey?: string;
  filterValue?: string;
  pageNumber?: number;
  pageSize?: number;
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
  requestId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDbfsAttachableEcsInstancesResponseBody;
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
  statusCode: number;
  body: ListDbfsAttachedEcsInstancesResponseBody;
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
  statusCode: number;
  body: ListSnapshotResponseBody;
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
  filterKey?: string;
  filterValue?: string;
  pageNumber?: number;
  pageSize?: number;
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

export class ListSnapshotLinksResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  snapshotLinks?: ListSnapshotLinksResponseBodySnapshotLinks[];
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSnapshotLinksResponseBody;
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
  statusCode: number;
  body: ListTagKeysResponseBody;
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
  statusCode: number;
  body: ListTagValuesResponseBody;
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
  policyId?: string;
  policyName?: string;
  regionId?: string;
  repeatWeekdays?: string[];
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
  policyId?: string;
  policyName?: string;
  regionId?: string;
  repeatWeekdaysShrink?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyAutoSnapshotPolicyResponseBody;
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
  description?: string;
  regionId?: string;
  snapshotId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifySnapshotAttributeResponseBody;
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
  statusCode: number;
  body: RenameDbfsResponseBody;
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
  statusCode: number;
  body: ResizeDbfsResponseBody;
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
  statusCode: number;
  body: TagDbfsResponseBody;
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
  advancedFeatures?: string;
  fsId?: string;
  instanceType?: string;
  regionId?: string;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateDbfsResponseBody;
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

export class GetAutoSnapshotPolicyResponseBodyData extends $tea.Model {
  accountId?: string;
  appliedDbfsNumber?: number;
  createdTime?: string;
  lastModified?: string;
  policyId?: string;
  policyName?: string;
  regionId?: string;
  repeatWeekdays?: string[];
  retentionDays?: number;
  status?: string;
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

export class GetDbfsResponseBodyDBFSInfoSnapshotInfo extends $tea.Model {
  linkId?: string;
  policyId?: string;
  snapshotCount?: number;
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
  lastFailed?: string;
  lastMountTime?: string;
  lastUmountTime?: string;
  payType?: string;
  performanceLevel?: string;
  raidStrip?: number;
  regionId?: string;
  sizeG?: number;
  snapshotInfo?: GetDbfsResponseBodyDBFSInfoSnapshotInfo;
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
  category?: string;
  ecsList?: GetSnapshotLinkResponseBodyDataEcsList[];
  fsId?: string;
  fsName?: string;
  linkId?: string;
  snapshotCount?: number;
  sourceSize?: number;
  status?: string;
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
  accountId?: string;
  appliedDbfsNumber?: number;
  createdTime?: string;
  lastModified?: string;
  policyId?: string;
  policyName?: string;
  regionId?: string;
  repeatWeekdays?: string[];
  retentionDays?: number;
  status?: string;
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
  fsId?: string;
  fsName?: string;
  regionId?: string;
  sizeG?: number;
  snapshotCount?: number;
  status?: string;
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
  fsId?: string;
  fsName?: string;
  regionId?: string;
  sizeG?: number;
  snapshotCount?: number;
  status?: string;
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

export class ListDbfsResponseBodyDBFSInfoSnapshotInfo extends $tea.Model {
  linkId?: string;
  policyId?: string;
  snapshotCount?: number;
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
  lastFailed?: string;
  lastMountTime?: string;
  lastUmountTime?: string;
  payType?: string;
  performanceLevel?: string;
  raidStrip?: number;
  regionId?: string;
  sizeG?: number;
  snapshotInfo?: ListDbfsResponseBodyDBFSInfoSnapshotInfo;
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
  instanceTypeFamily?: string;
  OSName?: string;
  status?: string;
  zoneId?: string;
  label?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
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
  instanceTypeFamily?: string;
  mountPoint?: string;
  mountedTime?: string;
  OSName?: string;
  label?: string;
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
  sourceFsStripeWidth?: number;
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
  fsId?: string;
  fsName?: string;
  linkId?: string;
  snapshotCount?: number;
  sourceSize?: number;
  status?: string;
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

  async addTagsBatch(request: AddTagsBatchRequest): Promise<AddTagsBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addTagsBatchWithOptions(request, runtime);
  }

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

  async applyAutoSnapshotPolicy(request: ApplyAutoSnapshotPolicyRequest): Promise<ApplyAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyAutoSnapshotPolicyWithOptions(request, runtime);
  }

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

  async attachDbfs(request: AttachDbfsRequest): Promise<AttachDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachDbfsWithOptions(request, runtime);
  }

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

  async cancelAutoSnapshotPolicy(request: CancelAutoSnapshotPolicyRequest): Promise<CancelAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelAutoSnapshotPolicyWithOptions(request, runtime);
  }

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

  async createAutoSnapshotPolicy(request: CreateAutoSnapshotPolicyRequest): Promise<CreateAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAutoSnapshotPolicyWithOptions(request, runtime);
  }

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

  async createDbfs(request: CreateDbfsRequest): Promise<CreateDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDbfsWithOptions(request, runtime);
  }

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

  async createServiceLinkedRole(request: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

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

  async createSnapshot(request: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSnapshotWithOptions(request, runtime);
  }

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

  async deleteAutoSnapshotPolicy(request: DeleteAutoSnapshotPolicyRequest): Promise<DeleteAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAutoSnapshotPolicyWithOptions(request, runtime);
  }

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

  async deleteDbfs(request: DeleteDbfsRequest): Promise<DeleteDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDbfsWithOptions(request, runtime);
  }

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

  async deleteSnapshot(request: DeleteSnapshotRequest): Promise<DeleteSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSnapshotWithOptions(request, runtime);
  }

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

  async deleteTagsBatch(request: DeleteTagsBatchRequest): Promise<DeleteTagsBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTagsBatchWithOptions(request, runtime);
  }

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

  async describeDbfsSpecifications(request: DescribeDbfsSpecificationsRequest): Promise<DescribeDbfsSpecificationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDbfsSpecificationsWithOptions(request, runtime);
  }

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

  async describeInstanceTypes(request: DescribeInstanceTypesRequest): Promise<DescribeInstanceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceTypesWithOptions(request, runtime);
  }

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

  async detachDbfs(request: DetachDbfsRequest): Promise<DetachDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachDbfsWithOptions(request, runtime);
  }

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

  async getAutoSnapshotPolicy(request: GetAutoSnapshotPolicyRequest): Promise<GetAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAutoSnapshotPolicyWithOptions(request, runtime);
  }

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

  async getDbfs(request: GetDbfsRequest): Promise<GetDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDbfsWithOptions(request, runtime);
  }

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

  async getServiceLinkedRole(request: GetServiceLinkedRoleRequest): Promise<GetServiceLinkedRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getServiceLinkedRoleWithOptions(request, runtime);
  }

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

  async getSnapshotLink(request: GetSnapshotLinkRequest): Promise<GetSnapshotLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSnapshotLinkWithOptions(request, runtime);
  }

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

  async listAutoSnapshotPolicies(request: ListAutoSnapshotPoliciesRequest): Promise<ListAutoSnapshotPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAutoSnapshotPoliciesWithOptions(request, runtime);
  }

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

  async listAutoSnapshotPolicyAppliedDbfs(request: ListAutoSnapshotPolicyAppliedDbfsRequest): Promise<ListAutoSnapshotPolicyAppliedDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAutoSnapshotPolicyAppliedDbfsWithOptions(request, runtime);
  }

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

  async listAutoSnapshotPolicyUnappliedDbfs(request: ListAutoSnapshotPolicyUnappliedDbfsRequest): Promise<ListAutoSnapshotPolicyUnappliedDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAutoSnapshotPolicyUnappliedDbfsWithOptions(request, runtime);
  }

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

  async listDbfs(request: ListDbfsRequest): Promise<ListDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDbfsWithOptions(request, runtime);
  }

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

  async listDbfsAttachableEcsInstances(request: ListDbfsAttachableEcsInstancesRequest): Promise<ListDbfsAttachableEcsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDbfsAttachableEcsInstancesWithOptions(request, runtime);
  }

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

  async listDbfsAttachedEcsInstances(request: ListDbfsAttachedEcsInstancesRequest): Promise<ListDbfsAttachedEcsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDbfsAttachedEcsInstancesWithOptions(request, runtime);
  }

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

  async listSnapshot(request: ListSnapshotRequest): Promise<ListSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSnapshotWithOptions(request, runtime);
  }

  async listSnapshotLinksWithOptions(request: ListSnapshotLinksRequest, runtime: $Util.RuntimeOptions): Promise<ListSnapshotLinksResponse> {
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

  async listSnapshotLinks(request: ListSnapshotLinksRequest): Promise<ListSnapshotLinksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSnapshotLinksWithOptions(request, runtime);
  }

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

  async listTagKeys(request: ListTagKeysRequest): Promise<ListTagKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

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

  async listTagValues(request: ListTagValuesRequest): Promise<ListTagValuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

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

  async modifyAutoSnapshotPolicy(request: ModifyAutoSnapshotPolicyRequest): Promise<ModifyAutoSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyAutoSnapshotPolicyWithOptions(request, runtime);
  }

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

  async modifySnapshotAttribute(request: ModifySnapshotAttributeRequest): Promise<ModifySnapshotAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifySnapshotAttributeWithOptions(request, runtime);
  }

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

  async renameDbfs(request: RenameDbfsRequest): Promise<RenameDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameDbfsWithOptions(request, runtime);
  }

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

  async resizeDbfs(request: ResizeDbfsRequest): Promise<ResizeDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resizeDbfsWithOptions(request, runtime);
  }

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

  async tagDbfs(request: TagDbfsRequest): Promise<TagDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagDbfsWithOptions(request, runtime);
  }

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

  async updateDbfs(request: UpdateDbfsRequest): Promise<UpdateDbfsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDbfsWithOptions(request, runtime);
  }

}
