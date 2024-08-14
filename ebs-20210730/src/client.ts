// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddDiskReplicaPairRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-myreplica****
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * The ID of the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query the IDs of existing replication pairs.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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

export class AddDiskReplicaPairResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddDiskReplicaPairResponseBody;
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
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

export class ApplyLensServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ApplyLensServiceResponseBody;
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

export class BindEnterpriseSnapshotPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of disks.
   */
  diskTargets?: string[];
  /**
   * @remarks
   * The id of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diskTargets: 'DiskTargets',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diskTargets: { 'type': 'array', 'itemType': 'string' },
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindEnterpriseSnapshotPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF4CA176-3358-5B74-B317-B1908B4B1F7D
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

export class BindEnterpriseSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: BindEnterpriseSnapshotPolicyResponseBody;
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
      body: BindEnterpriseSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelLensServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
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

export class CancelLensServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelLensServiceResponseBody;
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
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the new resource group. You can view the available resource groups in the Resource Management console. For more information, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rg-123
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the resource. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource. For example, if you set ResourceType to diskreplicapair, set this parameter to the ID of a replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-123
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   dedicatedblockstoragecluster: dedicated block storage cluster.
   * *   diskreplicapair: replication pair.
   * *   diskreplicagroup: replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * diskreplicapair
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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

export class ChangeResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
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

export class ClearPairDrillRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the drill. You can call the [DescribePairDrills](https://help.aliyun.com/document_detail/2584480.html) operation to query the disaster recovery drills that were performed on replication pairs in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * drill-xxxx
   */
  drillId?: string;
  /**
   * @remarks
   * The ID of the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query the most recent list of replication pairs, including replication pair IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-xxxx
   */
  pairId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      pairId: 'PairId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      pairId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearPairDrillResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
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

export class ClearPairDrillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ClearPairDrillResponseBody;
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
      body: ClearPairDrillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearReplicaGroupDrillRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the drill. You can call the [DescribeReplicaGroupDrills](https://help.aliyun.com/document_detail/2584481.html) operation to query disaster recovery drills that were performed on replication pairs in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-drill-xxxx
   */
  drillId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the most recent list of replication pair-consistent groups, including group IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      groupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClearReplicaGroupDrillResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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

export class ClearReplicaGroupDrillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ClearReplicaGroupDrillResponseBody;
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
      body: ClearReplicaGroupDrillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedBlockStorageClusterRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the zone in which to create the dedicated block storage cluster. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the most recent zone list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan-b
   */
  azone?: string;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster. Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
   * 
   * >  If the capacity of a dedicated block storage cluster is less than 576 TiB, the maximum throughput per TiB cannot exceed 52 MB/s. If the capacity of a dedicated block storage cluster is greater than 576 TiB, the maximum throughput per TiB cannot exceed 26 MB/s.
   * 
   * This parameter is required.
   * 
   * @example
   * 61440
   */
  capacity?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * test1233
   * 
   * **if can be null:**
   * true
   * 
   * @deprecated
   */
  dbscId?: string;
  /**
   * @remarks
   * The name of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * myDBSCCluster
   */
  dbscName?: string;
  /**
   * @remarks
   * The subscription duration of the dedicated block storage cluster. Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
   * 
   * @example
   * 12
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration specified by `Period`. Set the value to Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the region in which to create the dedicated block storage cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the dedicated block storage cluster.
   * 
   * @example
   * rg-acfmvs*******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags to add to the dedicated block storage cluster. You can specify up to 20 tags.
   */
  tag?: CreateDedicatedBlockStorageClusterRequestTag[];
  /**
   * @remarks
   * The type of the dedicated block storage cluster. Valid values:
   * 
   * *   Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
   * *   Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
   * 
   * Default value: Premium.
   * 
   * For more information about ESSDs, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Premium
   */
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
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * @example
   * dbsc-f8z4d3k4nsgg9okb****
   */
  dbscId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 50155660025****
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDedicatedBlockStorageClusterResponseBody;
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
  /**
   * @remarks
   * The bandwidth value. Unit: Mbit/s.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * 10240
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the replication pair-consistent group. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The region ID of the secondary site.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The zone ID of the secondary site.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-e
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * The name of the replication pair-consistent group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * myreplicagrouptest
   */
  groupName?: string;
  /**
   * @remarks
   * The RPO of the replication pair-consistent group. Unit: seconds. Valid value: 900.
   * 
   * @example
   * 900
   */
  RPO?: number;
  /**
   * @remarks
   * The ID of the region in which to create the replication pair-consistent group. The primary site is deployed in the specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the replication pair-consistent group belongs.
   * 
   * @example
   * rg-acfmvs*******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The zone ID of the primary site.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-f
   */
  sourceZoneId?: string;
  /**
   * @remarks
   * The tags. Up to 20 tags are supported.
   */
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
  /**
   * @remarks
   * The ID of the replication pair-consistent group.
   * 
   * @example
   * pg-xxxxxxx
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDiskReplicaGroupResponseBody;
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
  /**
   * @remarks
   * The bandwidth to use to asynchronously replicate data between the primary disk and secondary disk. Unit: Kbit/s. Valid values:
   * 
   * *   10240 : equal to 10 Mbit/s
   * *   20480 : equal to 20 Mbit/s
   * *   51200 : equal to 50 Mbit/s
   * *   102400 : equal to 100 Mbit/s
   * 
   * Default value: 10240.
   * 
   * When you set the ChargeType parameter to POSTPAY, the Bandwidth parameter is automatically set to 0 and cannot be modified. The value 0 indicates that bandwidth is dynamically allocated based on the volume of data that is asynchronously replicated from the primary disk to the secondary disk.
   * 
   * @example
   * 10240
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method of the replication pair. Valid values:
   * 
   * *   PREPAY: subscription
   * *   POSTPAY: pay-as-you-go
   * 
   * Default value: POSTPAY.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the replication pair. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the secondary disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-sa1f82p58p1tdw9g****
   */
  destinationDiskId?: string;
  /**
   * @remarks
   * The region ID of the secondary disk. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The zone ID of the secondary disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-e
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * The ID of the primary disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-iq80sgp4d0xbk24q****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the replication pair. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * TestReplicaPair
   */
  pairName?: string;
  /**
   * @remarks
   * The subscription duration of the replication pair. This parameter is required when the `ChargeType` parameter is set to PREPAY. The unit of the subscription duration is specified by the `PeriodUnit` parameter.
   * 
   * *   Valid values when the `PeriodUnit` parameter is set to Week: 1, 2, 3, and 4.
   * *   Valid values when the `PeriodUnit` parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration of the replication pair. Valid values:
   * 
   * *   Week.
   * *   Month
   * 
   * Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The recovery point objective (RPO) of the replication pair. Unit: seconds. Set the value to 900.
   * 
   * @example
   * 900
   */
  RPO?: number;
  /**
   * @remarks
   * The ID of the region in which to create the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the replication group.
   * 
   * @example
   * rg-acfmvs****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The zone ID of the primary disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing-f
   */
  sourceZoneId?: string;
  /**
   * @remarks
   * The resource tags. You can specify up to 20 tags.
   */
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
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 123456****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * @example
   * pair-cn-dsa****
   */
  replicaPairId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDiskReplicaPairResponseBody;
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

export class CreateEnterpriseSnapshotPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Snapshot replication destination information.
   */
  crossRegionCopyInfo?: CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the snapshot policy.
   * 
   * @example
   * xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The snapshot retention rule.
   * 
   * This parameter is required.
   */
  retainRule?: CreateEnterpriseSnapshotPolicyRequestRetainRule;
  /**
   * @remarks
   * The rule for scheduling.
   * 
   * This parameter is required.
   */
  schedule?: CreateEnterpriseSnapshotPolicyRequestSchedule;
  /**
   * @remarks
   * The special snapshot retention rules.
   */
  specialRetainRules?: CreateEnterpriseSnapshotPolicyRequestSpecialRetainRules;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * - ENABLED: Enable snapshot policy execution.
   * 
   * - DISABLED: Disable snapshot policy execution.
   * 
   * @example
   * ENABLED
   */
  state?: string;
  /**
   * @remarks
   * Advanced snapshot features.
   */
  storageRule?: CreateEnterpriseSnapshotPolicyRequestStorageRule;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateEnterpriseSnapshotPolicyRequestTag[];
  /**
   * @remarks
   * Binding target type, valid value:
   * 
   * - DISK
   * 
   * This parameter is required.
   * 
   * @example
   * DISK
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      crossRegionCopyInfo: 'CrossRegionCopyInfo',
      desc: 'Desc',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      retainRule: 'RetainRule',
      schedule: 'Schedule',
      specialRetainRules: 'SpecialRetainRules',
      state: 'State',
      storageRule: 'StorageRule',
      tag: 'Tag',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      crossRegionCopyInfo: CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo,
      desc: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      retainRule: CreateEnterpriseSnapshotPolicyRequestRetainRule,
      schedule: CreateEnterpriseSnapshotPolicyRequestSchedule,
      specialRetainRules: CreateEnterpriseSnapshotPolicyRequestSpecialRetainRules,
      state: 'string',
      storageRule: CreateEnterpriseSnapshotPolicyRequestStorageRule,
      tag: { 'type': 'array', 'itemType': CreateEnterpriseSnapshotPolicyRequestTag },
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Snapshot replication destination information.
   */
  crossRegionCopyInfoShrink?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the snapshot policy.
   * 
   * @example
   * xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The snapshot retention rule.
   * 
   * This parameter is required.
   */
  retainRuleShrink?: string;
  /**
   * @remarks
   * The rule for scheduling.
   * 
   * This parameter is required.
   */
  scheduleShrink?: string;
  /**
   * @remarks
   * The special snapshot retention rules.
   */
  specialRetainRulesShrink?: string;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * - ENABLED: Enable snapshot policy execution.
   * 
   * - DISABLED: Disable snapshot policy execution.
   * 
   * @example
   * ENABLED
   */
  state?: string;
  /**
   * @remarks
   * Advanced snapshot features.
   */
  storageRuleShrink?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateEnterpriseSnapshotPolicyShrinkRequestTag[];
  /**
   * @remarks
   * Binding target type, valid value:
   * 
   * - DISK
   * 
   * This parameter is required.
   * 
   * @example
   * DISK
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      crossRegionCopyInfoShrink: 'CrossRegionCopyInfo',
      desc: 'Desc',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      retainRuleShrink: 'RetainRule',
      scheduleShrink: 'Schedule',
      specialRetainRulesShrink: 'SpecialRetainRules',
      state: 'State',
      storageRuleShrink: 'StorageRule',
      tag: 'Tag',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      crossRegionCopyInfoShrink: 'string',
      desc: 'string',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      retainRuleShrink: 'string',
      scheduleShrink: 'string',
      specialRetainRulesShrink: 'string',
      state: 'string',
      storageRuleShrink: 'string',
      tag: { 'type': 'array', 'itemType': CreateEnterpriseSnapshotPolicyShrinkRequestTag },
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The id of a policy.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7A8959DA-1E04-5724-8288-58334031454E
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

export class CreateEnterpriseSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateEnterpriseSnapshotPolicyResponseBody;
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
      body: CreateEnterpriseSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-cd4************
   */
  diskId?: string;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the replication pair. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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

export class DeleteDiskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDiskResponseBody;
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
      body: DeleteDiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDiskReplicaGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the IDs of replication pair-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-myreplica****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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

export class DeleteDiskReplicaGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDiskReplicaGroupResponseBody;
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
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the primary disk in the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query the region information of replication pairs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A37597A6-BB99-19B3-85EA-4C2B91F0****
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

export class DeleteDiskReplicaPairResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDiskReplicaPairResponseBody;
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

export class DeleteEnterpriseSnapshotPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The id of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnterpriseSnapshotPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B9F716DF-FAFD-50FD-B962-BCE0C837639A
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

export class DeleteEnterpriseSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEnterpriseSnapshotPolicyResponseBody;
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
      body: DeleteEnterpriseSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDedicatedBlockStorageClusterDisksRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * dbsc-cn-od43bf****
   */
  dbscId?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Maximum value: 500.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned in the previous call to the DescribeDedicatedBlockStorageClusterDisks operation. Leave this parameter empty the first time you call this operation.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the dedicated block storage cluster resides. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan
   */
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
  /**
   * @remarks
   * Details about the cloud disks.
   */
  disks?: DescribeDedicatedBlockStorageClusterDisksResponseBodyDisks;
  /**
   * @remarks
   * The query token returned in this call.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 11B55F58-D3A4-4A9B-9596-342420D0****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDedicatedBlockStorageClusterDisksResponseBody;
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
  /**
   * @remarks
   * The zone ID of the dedicated block storage cluster. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-heyuan-b
   */
  azoneId?: string;
  /**
   * @remarks
   * The category of disks that can be created in the dedicated block storage cluster.
   * 
   * Set the value to cloud_essd. Only enhanced SSDs (ESSDs) can be created in dedicated block storage clusters.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  clientToken?: string;
  dedicatedBlockStorageClusterId?: string[];
  maxResults?: number;
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the dedicated block storage cluster belongs.
   * 
   * @example
   * rg-acfmvs4****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The states of dedicated block storage clusters. Valid values:
   * 
   * *   Preparing
   * *   Running
   * *   Expired
   * *   Offline
   * 
   * Multiple states can be specified. Valid values of N: 1, 2, 3, and 4.
   */
  status?: string[];
  /**
   * @remarks
   * The tags. Up to 20 tags are supported.
   */
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
  /**
   * @remarks
   * The queried dedicated block storage clusters.
   */
  dedicatedBlockStorageClusters?: DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClusters[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11B55F58-D3A4-4A9B-9596-342420D0****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDedicatedBlockStorageClustersResponseBody;
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
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   cloud_efficiency: ultra disk.
   * *   cloud_ssd: standard SSD.
   * *   cloud_essd: enhanced SSD (ESSD).
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-06-01T05:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100.
   * 
   * Default values:
   * 
   * *   If this parameter is not specified or is set to a value smaller than 10, the default value is 10.
   * *   If this parameter is set to a value greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in this request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the disk. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the list of regions that support CloudLens for EBS.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-06-01T03:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The event type. Set the value to DataNeedProtect, which indicates that the disk data needs to be protected.
   * 
   * @example
   * DataNeedProtect
   */
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
  /**
   * @remarks
   * The risk events of the disk.
   */
  diskEvents?: DescribeDiskEventsResponseBodyDiskEvents[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiskEventsResponseBody;
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
  /**
   * @remarks
   * The ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The end of the time range during which you want to query the near real-time monitoring data of the disk. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-01T05:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The interval at which the near real-time monitoring data is collected. Unit: seconds. Valid values:
   * 
   * *   5
   * *   60
   * 
   * Default value: 5.
   * 
   * @example
   * 5
   */
  period?: number;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range during which you want to query the near real-time monitoring data of the disk. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-01T03:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the monitoring data. Valid values:
   * 
   * *   basic: baseline performance data.
   * *   pro: burst performance data, such as burst I/O operations.
   * 
   * @example
   * basic
   */
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
  /**
   * @remarks
   * The near real-time monitoring data of the disk.
   */
  monitorData?: DescribeDiskMonitorDataResponseBodyMonitorData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiskMonitorDataResponseBody;
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
  /**
   * @remarks
   * The IDs of the disks. The value is a JSON array that contains multiple disk IDs. Separate the IDs with commas (,).
   * 
   * @example
   * ["d-bp67acfmxazb4p****","d-bp67acfmxazs5t****"]
   */
  diskIds?: string;
  /**
   * @remarks
   * The end of the time range during which you want to query the near real-time monitoring data of the disks. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-01T05:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of entries per page. If you specify this parameter, both `MaxResults` and `NextToken` are used for a paged query.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in this request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * e71d8a535bd9c****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the list of regions that support CloudLens for EBS.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range during which you want to query the near real-time monitoring data of the disks. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-06-01T03:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The type of the monitoring data. Set the value to pro.
   * 
   * pro: burst performance data, such as burst I/O operations.
   * 
   * This parameter is required.
   * 
   * @example
   * pro
   */
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
  /**
   * @remarks
   * The near real-time monitoring data of the disks.
   */
  monitorData?: DescribeDiskMonitorDataListResponseBodyMonitorData[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * e71d8a535bd9c****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiskMonitorDataListResponseBody;
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
  /**
   * @remarks
   * The IDs of replication pair-consistent groups. You can specify the IDs of one or more replication pair-consistent groups. Separate the IDs with commas (,).
   * 
   * This parameter is empty by default, which indicates that all replication pair-consistent groups in the specified region are queried.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  groupIds?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 1 to 500.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  name?: string;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned in the previous call to the DescribeDiskReplicaGroups operation. Leave this parameter empty the first time you call this operation. When NextToken is specified, the PageSize and PageNumber request parameters do not take effect and the TotalCount response parameter is invalid.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 5
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the replication group belongs.
   * 
   * @example
   * rg-aekz*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the site from which the information of replication pair-consistent groups is retrieved. This parameter is used for scenarios where data is replicated across zones in replication pairs.
   * 
   * *   If the Site parameter is not specified, information such as the state of replication pair-consistent groups at the primary site is queried and returned.
   * 
   * *   Otherwise, information such as the state of replication pair-consistent groups at the site specified by the Site parameter is queried and returned. Valid values:
   * 
   *     *   production: primary site
   *     *   backup: secondary site
   * 
   * @example
   * production
   */
  site?: string;
  /**
   * @remarks
   * The resource tags. You can specify up to 20 tags.
   */
  tag?: DescribeDiskReplicaGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      maxResults: 'MaxResults',
      name: 'Name',
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
      name: 'string',
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
  /**
   * @remarks
   * The query token returned in this call.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Details about the replication pair-consistent groups.
   */
  replicaGroups?: DescribeDiskReplicaGroupsResponseBodyReplicaGroups[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AAA478A0-BEE6-1D42-BEB6-A9CFEAD6****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 60
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiskReplicaGroupsResponseBody;
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
  /**
   * @remarks
   * The region ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html)operation to query the IDs of existing replication pairs.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-tl32ribst0z
   */
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
  /**
   * @remarks
   * The replication progress of the replication pair.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The timestamp that indicates the last recovery point in time. The value is returned only after the replication pair works for replicating data.
   * 
   * @example
   * 1661917424
   */
  recoverPoint?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAA478A0-BEE6-1D42-BEB6-A9CFEAD6****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiskReplicaPairProgressResponseBody;
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
  /**
   * @remarks
   * The maximum number of entries per page. You can use this parameter together with NextToken.
   * 
   * Valid values: 1 to 500.
   * 
   * Default value: 10.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  name?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken. If you specify NextToken, the PageSize and PageNumber request parameters do not take effect, and the TotalCount response parameter is invalid.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 5
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of replication pairs. You can specify the IDs of one or more replication pairs and separate the IDs with commas (,). Example: `pair-cn-dsa****,pair-cn-asd****`.
   * 
   * This parameter is empty by default, which indicates that all replication pairs in the specified region are queried. You can specify a maximum of 100 replication pair IDs.
   * 
   * @example
   * pair-cn-dsa****
   */
  pairIds?: string;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the replication pair. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can specify the ID of a replication pair-consistent group to query the replication pairs in the group. Example: `pg-****`.
   * 
   * This parameter is empty by default, which indicates that all replication pairs in the specified region are queried.
   * 
   * >  If this parameter is set to`-`, replication pairs that are not added to any replication pair-consistent groups are returned.
   * 
   * @example
   * pg-****
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the replication pair belongs.
   * 
   * @example
   * rg-acfmvs******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the site from which the information of replication pairs is retrieved. Valid value:
   * 
   * *   production: primary site
   * *   backup: secondary site
   * 
   * Default value: production.
   * 
   * @example
   * production
   */
  site?: string;
  /**
   * @remarks
   * The tags. Up to 20 tags are supported.
   */
  tag?: DescribeDiskReplicaPairsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
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
      name: 'string',
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
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Details about the replication pairs.
   */
  replicaPairs?: DescribeDiskReplicaPairsResponseBodyReplicaPairs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AAA478A0-BEE6-1D42-BEB6-A9CFEAD6****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 60
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDiskReplicaPairsResponseBody;
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

export class DescribeDisksRequest extends $tea.Model {
  /**
   * @remarks
   * The category of disks.
   * 
   * @example
   * cloud_ssd
   */
  category?: string;
  /**
   * @remarks
   * The IDs of the disks. The value is a JSON array that contains multiple disk IDs. Separate the IDs with commas (,).
   * 
   * @example
   * iscsi-cluster-id
   */
  diskIds?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * d-xxx
   */
  diskName?: string;
  /**
   * @remarks
   * The maximum number of entries per page. Valid values: 1 to 100.
   * 
   * Default values:
   * 
   * *   If this parameter is not specified or is set to a value smaller than 10, the default value is 10.
   * *   If this parameter is set to a value greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the disk belongs.
   * 
   * @example
   * rg-acfmvs*******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The states of disk. Valid values:
   * 
   * *   In_use
   * *   Available
   * *   Attaching
   * *   Detaching
   * *   Creating
   * *   ReIniting
   * 
   * @example
   * In_use
   */
  status?: string;
  /**
   * @remarks
   * The resource tags. You can specify up to 20 tags.
   */
  tag?: DescribeDisksRequestTag[];
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      diskIds: 'DiskIds',
      diskName: 'DiskName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      diskIds: 'string',
      diskName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDisksRequestTag },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeDisksResponseBodyData[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * NextToken
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDisksResponseBodyData },
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

export class DescribeDisksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDisksResponseBody;
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
      body: DescribeDisksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The IDs of disks.
   */
  diskIds?: string[];
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken. If you specify NextToken, the PageSize and PageNumber request parameters do not take effect, and the TotalCount response parameter is invalid.
   * 
   * @example
   * xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of enterprise-level snapshot policies.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the enterprise-level snapshot policies. Valid values of N: 1 to 20.
   */
  tag?: DescribeEnterpriseSnapshotPolicyRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diskIds: 'DiskIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyIds: 'PolicyIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diskIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAdDWBF2
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned snapshot policies.
   */
  policies?: DescribeEnterpriseSnapshotPolicyResponseBodyPolicies[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5CA35A83-8D8A-5B67-BAA0-2E124F194DA4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policies: 'Policies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policies: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyResponseBodyPolicies },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEnterpriseSnapshotPolicyResponseBody;
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
      body: DescribeEnterpriseSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsRequest extends $tea.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-06-01T04:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the event. Valid values:
   * 
   * *   NoSnapshot: indicates the event that is triggered because no snapshot is created for a disk to protect data on the disk.
   * *   BurstIOTriggered: indicates the event that is triggered when a burst I/O operation is performed on a disk.
   * *   CostOptimizationNeeded: indicates the event that is triggered when cost optimization is required.
   * *   DiskSpecNotMatchedWithInstance: indicates the event that is triggered because the specifications of a disk do not match the instance to which the disk is attached.
   * *   DiskIONo4kAligned: indicates the event that is triggered because the physical and logical sectors involved in a read or write operation are not 4K aligned.
   * *   DiskIOHang: indicates the event that is triggered when an I/O hang occurs on a disk.
   * *   InstanceIOPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of IOPS on an instance reaches the upper limit.
   * *   InstanceBPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of BPS on an instance reaches the upper limit.
   * *   DiskIOPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of IOPS on a disk reaches the upper limit for the associated instance.
   * *   DiskBPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of BPS on a disk reaches the upper limit for the associated instance.
   * *   DiskIOPSExceedDiskMaxLimit: indicates the event that is triggered when the number of IOPS on a disk reaches the upper limit for the disk.
   * *   DiskBPSExceedDiskMaxLimit: indicates the event that is triggered when the number of BPS on a disk reaches the upper limit for the disk.
   * 
   * @example
   * DiskIOHang
   */
  eventName?: string;
  /**
   * @remarks
   * The maximum number of entries per page. If you specify MaxResults, `MaxResults` and `NextToken` are used for a paged query.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of resource. Valid values:
   * 
   * *   disk.
   * 
   * Default value: disk.
   * 
   * @example
   * disk
   */
  resourceType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-06-01T03:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of event. Valid values:
   * 
   * - WillExecute
   * - Executing
   * - Executed
   * - Ignore
   * - Expired
   * - Deleted
   * 
   * @example
   * WillExecute
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventName: 'EventName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBody extends $tea.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The events.
   */
  resourceEvents?: DescribeEventsResponseBodyResourceEvents[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceEvents: 'ResourceEvents',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      resourceEvents: { 'type': 'array', 'itemType': DescribeEventsResponseBodyResourceEvents },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeEventsResponseBody;
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
      body: DescribeEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLensMonitorDisksRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the disk. Valid values:
   * - cloud
   * - cloud_efficiency
   * - cloud_ssd
   * - cloud_essd
   * - cloud_auto
   * - cloud_essd_entry
   * 
   * @example
   * cloud_auto
   */
  diskCategory?: string;
  /**
   * @remarks
   * The list of disks.
   * 
   * @example
   * [\\"d-1\\", \\"d-2\\"]
   */
  diskIds?: string[];
  /**
   * @remarks
   * Event tags of the disk, which are used to filter the disks on which the events associated with the specified tags occurred in the previous 24 hours. Valid values:
   * 
   * *   NoSnapshot: specifies the event that is triggered because no snapshot is created for the disk to protect data on the disk.
   * *   BurstIOTriggered: specifies the event that is triggered when a burst I/O operation is performed on the disk.
   * *   CostOptimizationNeeded: specifies the event that is triggered when cost optimization is required.
   * *   DiskSpecNotMatchedWithInstance: specifies the event that is triggered if the disk specifications do not match the instance to which the disk is attached.
   * *   DiskIONo4kAligned: specifies the event that is triggered if the physical and logical sectors involved in a read or write operation are not 4K aligned.
   * *   DiskIOHang: specifies the event that is triggered when an I/O hang occurs on the disk.
   * *   InstanceIOPSExceedInstanceMaxLimit: specifies the event that is triggered when the number of IOPS on the instance reaches the upper limit.
   * *   InstanceBPSExceedInstanceMaxLimit: specifies the event that is triggered when the number of BPS on the instance reaches the upper limit.
   * *   DiskIOPSExceedInstanceMaxLimit: specifies the event that is triggered when the number of IOPS on the disk reaches the upper limit of the instance.
   * *   DiskBPSExceedInstanceMaxLimit: specifies the event that is triggered when the number of BPS on the disk reaches the upper limit of the instance.
   * *   DiskIOPSExceedDiskMaxLimit: specifies the event that is triggered when the number of IOPS on the disk reaches the upper limit of the disk.
   * *   DiskBPSExceedDiskMaxLimit: specifies the event that is triggered when the number of BPS on the disk reaches the upper limit of the disk.
   * *   DiskSlowIOTriggerred: specifies the event that is triggered when the I/O speed on the disk is slow.
   */
  lensTags?: string[];
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query to retrieve more results.
   * 
   * >The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      diskCategory: 'DiskCategory',
      diskIds: 'DiskIds',
      lensTags: 'LensTags',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskCategory: 'string',
      diskIds: { 'type': 'array', 'itemType': 'string' },
      lensTags: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLensMonitorDisksResponseBody extends $tea.Model {
  /**
   * @remarks
   * Cloud disk information list.
   */
  diskInfos?: DescribeLensMonitorDisksResponseBodyDiskInfos[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      diskInfos: 'DiskInfos',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskInfos: { 'type': 'array', 'itemType': DescribeLensMonitorDisksResponseBodyDiskInfos },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLensMonitorDisksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLensMonitorDisksResponseBody;
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
      body: DescribeLensMonitorDisksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLensServiceStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The state of CloudLens for EBS. Valid values:
   * 
   * *   Applying
   * *   UnAvailable
   * *   Available
   * 
   * @example
   * Available
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLensServiceStatusResponseBody;
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

export class DescribeMetricDataRequest extends $tea.Model {
  /**
   * @remarks
   * The dimension map in the JSON format. A dimension is a key-value pair. Valid dimension key: diskId.
   * 
   * @example
   * {"diskId":["d-bp14xxxx","d-bp11xxxx"]}
   */
  dimensions?: string;
  /**
   * @remarks
   * The end of the time range to query. The specified time must be later than the current time. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-11-21T02:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the metric. Valid values:
   * 
   * *   disk_bps_percent
   * *   disk_iops_percent
   * *   disk_read_block_size
   * *   disk_read_bps
   * *   disk_read_iops
   * *   disk_read_latency
   * *   disk_write_block_size
   * *   disk_write_bps
   * *   disk_write_iops
   * *   disk_write_latency
   * 
   * This parameter is required.
   * 
   * @example
   * disk_bps_percent
   */
  metricName?: string;
  /**
   * @remarks
   * The interval at which metric data is collected. Unit: seconds. Default value: 60. Valid values: 60, 300, 600, and 3600, which support queries for time ranges of up to 2 hours, 2 hours, 1 day, and 7 days, respectively. For example, if you set Period to 60, the end time is less than 2 hours from the end time.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. You can specify a point in time that is up to one year apart from the current time. If StartTime and EndTime are both unspecified, the monitoring metric data of the last Period value is queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2023-11-21T01:50:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dimensions: 'Dimensions',
      endTime: 'EndTime',
      metricName: 'MetricName',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: 'string',
      endTime: 'string',
      metricName: 'string',
      period: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDataResponseBody extends $tea.Model {
  /**
   * @remarks
   * The disk monitoring data.
   */
  dataList?: DescribeMetricDataResponseBodyDataList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11B55F58-D3A4-4A9B-9596-342420D0****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data entries queried.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeMetricDataResponseBodyDataList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMetricDataResponseBody;
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
      body: DescribeMetricDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePairDrillsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the drill.
   * 
   * @example
   * drill-xxxx
   */
  drillId?: string;
  /**
   * @remarks
   * The maximum number of entries to be returned. You can use this parameter together with NextToken.
   * 
   * Valid values: 1 to 500.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Set the value to the NextToken value returned in the previous call to the DescribeDiskReplicaPairs operation. Leave this parameter empty the first time you call this operation. When you specify NextToken, the PageSize and PageNumber request parameters do not take effect and the TotalCount response parameter is invalid.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query a list of asynchronous replication pairs, including replication pair IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-xxxx
   */
  pairId?: string;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the async replication pair. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pairId: 'PairId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pairId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePairDrillsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information of disaster recovery drills that were performed on the replication pair.
   */
  drills?: DescribePairDrillsResponseBodyDrills[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C46FF5A8-C5F0-4024-8262-B16B6392****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      drills: 'Drills',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drills: { 'type': 'array', 'itemType': DescribePairDrillsResponseBodyDrills },
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

export class DescribePairDrillsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePairDrillsResponseBody;
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
      body: DescribePairDrillsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The language in which the regions and zones are named. This parameter corresponds to the `LocalName` response parameter. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * *   ja: Japanese
   * 
   * Default value: zh-CN.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The type of resource. Valid values:
   * 
   * *   ear: async replication
   * *   lens: CloudLens for EBS
   * *   dbsc: Dedicated Block Storage Cluster
   * 
   * Default value: ear.
   * 
   * @example
   * ear
   */
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
  /**
   * @remarks
   * Details about the regions.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 17EE62D8-064E-5404-8B0D-72122478****
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
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

export class DescribeReplicaGroupDrillsRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the drill.
   * 
   * @example
   * pg-drill-xxxx
   */
  drillId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query a list of async replication pair-consistent groups, including group IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of entries to be returned. You can use this parameter together with NextToken.
   * 
   * Valid values: 1 to 500.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken. When you specify NextToken, the PageSize and PageNumber request parameters do not take effect and the TotalCount response parameter is invalid.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 5
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the async replication pair-consistent group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      groupId: 'GroupId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      groupId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaGroupDrillsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information of disaster recovery drills that were performed on the replication pair-consistent group.
   */
  drills?: DescribeReplicaGroupDrillsResponseBodyDrills[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      drills: 'Drills',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drills: { 'type': 'array', 'itemType': DescribeReplicaGroupDrillsResponseBodyDrills },
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

export class DescribeReplicaGroupDrillsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeReplicaGroupDrillsResponseBody;
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
      body: DescribeReplicaGroupDrillsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSolutionInstanceConfigurationRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The parameters.
   */
  parameters?: DescribeSolutionInstanceConfigurationRequestParameters[];
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the solution.
   * 
   * This parameter is required.
   * 
   * @example
   * sln-xxxxx
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      parameters: 'Parameters',
      regionId: 'RegionId',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      parameters: { 'type': 'array', 'itemType': DescribeSolutionInstanceConfigurationRequestParameters },
      regionId: 'string',
      solutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSolutionInstanceConfigurationResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: { [key: string]: any }[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11B55F58-D3A4-4A9B-9596-342420D0****
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
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSolutionInstanceConfigurationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSolutionInstanceConfigurationResponseBody;
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
      body: DescribeSolutionInstanceConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FailoverDiskReplicaGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the secondary site of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * group-myreplica****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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

export class FailoverDiskReplicaGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FailoverDiskReplicaGroupResponseBody;
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
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the secondary disk in the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query region IDs of secondary disks in replication pairs.
   * 
   * >  The failover feature must be enabled for the region where the secondary disk is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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

export class FailoverDiskReplicaPairResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FailoverDiskReplicaPairResponseBody;
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

export class GetDiskRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp67***********
   */
  diskId?: string;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      diskId: 'DiskId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information of the disk.
   */
  disk?: GetDiskResponseBodyDisk;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B9C4B3B3-0D72-5FB0-9319-F4D3BB9E22AC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'Disk',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: GetDiskResponseBodyDisk,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDiskResponseBody;
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
      body: GetDiskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that the value is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * @example
   * token123
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the resource. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID list of the resource. You can specify up to 50 resource IDs in each call.
   * 
   * @example
   * disk-123
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   dedicatedblockstoragecluster: dedicated block storage cluster
   * *   diskreplicapair: replication pair
   * *   diskreplicagroup: replication pair-consistent group
   * 
   * This parameter is required.
   * 
   * @example
   * diskreplicagroup
   */
  resourceType?: string;
  /**
   * @remarks
   * The information about the tags.
   * 
   * You can specify at most 20 tags in each call.
   */
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
  /**
   * @remarks
   * The token used to start the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request. The request ID is returned regardless of whether the call is successful.
   * 
   * @example
   * 484256DA-D816-44D2-9D86-B6EE4D5B****
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the resources and tags, including resource IDs, resource types, and tag key-value pairs.
   */
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
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
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
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure idempotence ](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * dbsc-cn-od43bf****
   */
  dbscId?: string;
  /**
   * @remarks
   * The new name of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * my-test-dbsc
   */
  dbscName?: string;
  /**
   * @remarks
   * The new description of dedicated block storage cluster.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 11B55F58-D3A4-4A9B-9596-342420D0****
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

export class ModifyDedicatedBlockStorageClusterAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDedicatedBlockStorageClusterAttributeResponseBody;
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
  /**
   * @remarks
   * The bandwidth value. Unit: Kbit/s.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * -
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the replication pair-consistent group. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The name of the replication pair-consistent group. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * myreplicagrouptest
   */
  groupName?: string;
  /**
   * @remarks
   * The RPO of the replication pair-consistent group. Unit: seconds. Valid value: 900.
   * 
   * @example
   * 900
   */
  RPO?: number;
  /**
   * @remarks
   * The region ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the IDs of replication pair-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-myreplica****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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

export class ModifyDiskReplicaGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDiskReplicaGroupResponseBody;
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
  /**
   * @remarks
   * The bandwidth value. Unit: Kbit/s.
   * 
   * >  This parameter is not publicly available.
   * 
   * @example
   * 10240
   */
  bandwidth?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the replication pair.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The name of the replication pair.
   * 
   * @example
   * TestReplicaPair
   */
  pairName?: string;
  /**
   * @remarks
   * The recovery point objective (RPO) of the replication pair-consistent group. Unit: seconds. Valid value: 900.
   * 
   * @example
   * 900
   */
  RPO?: number;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the replication pair. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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

export class ModifyDiskReplicaPairResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ModifyDiskReplicaPairResponseBody;
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

export class QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the request of SetDedicatedBlockStorageClusterDiskThroughput api.
   * 
   * This parameter is required.
   * 
   * @example
   * A37597B5-BB99-19B3-85EA-4C2B91F0****
   */
  qosRequestId?: string;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      qosRequestId: 'QosRequestId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      qosRequestId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDedicatedBlockStorageClusterDiskThroughputStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A37597A6-BB99-19B3-85EA-4C2B91F0****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the throughput after setting the throughput by SetDedicatedBlockStorageClusterDiskThroughput api.
   * 
   * - SUCCESS: The throughput has been successfully set.
   * - RUNNING: The throughput is currently being set.
   * - WAIT(): The throughput is waiting to be set.
   * - FAIL(): The throughput setting has failed.
   * 
   * @example
   * RUNNING
   */
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

export class QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDedicatedBlockStorageClusterDiskThroughputStatusResponseBody;
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
      body: QueryDedicatedBlockStorageClusterDiskThroughputStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDedicatedBlockStorageClusterInventoryDataRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure idempotence ](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * dbsc-xxx
   */
  dbscId?: string;
  /**
   * @remarks
   * End timestamp of trend data.
   * 
   * This parameter is required.
   * 
   * @example
   * 1606403800
   */
  endTime?: number;
  /**
   * @remarks
   * The time interval (seconds) between data retrieval points.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * Start timestamp of trend data.
   * 
   * This parameter is required.
   * 
   * @example
   * 1606303800
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dbscId: 'DbscId',
      endTime: 'EndTime',
      period: 'Period',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dbscId: 'string',
      endTime: 'number',
      period: 'number',
      regionId: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDedicatedBlockStorageClusterInventoryDataResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryDedicatedBlockStorageClusterInventoryDataResponseBodyData[];
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * @example
   * dbsc-xxx
   */
  dbscId?: string;
  /**
   * @remarks
   * The name of the dedicated block storage cluster.
   * 
   * @example
   * myDBSCCluster
   */
  dbscName?: string;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   cloud_essd: enhanced SSD (ESSD).
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F1A4258A-0C8C-5329-B495-BC5AD7AD****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 60
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dbscId: 'DbscId',
      dbscName: 'DbscName',
      diskCategory: 'DiskCategory',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryDedicatedBlockStorageClusterInventoryDataResponseBodyData },
      dbscId: 'string',
      dbscName: 'string',
      diskCategory: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDedicatedBlockStorageClusterInventoryDataResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDedicatedBlockStorageClusterInventoryDataResponseBody;
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
      body: QueryDedicatedBlockStorageClusterInventoryDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveDiskReplicaPairRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group.
   * 
   * You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the IDs of replication pair-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-myreplica****
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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

export class RemoveDiskReplicaPairResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveDiskReplicaPairResponseBody;
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
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the IDs of replication pair-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the IDs of replication pair-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-myreplica****
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * Specifies whether to enable the reverse replication sub-feature. Valid values: true and false. Default value: true.
   * 
   * @example
   * true
   */
  reverseReplicate?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaGroupId: 'ReplicaGroupId',
      reverseReplicate: 'ReverseReplicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaGroupId: 'string',
      reverseReplicate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReprotectDiskReplicaGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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

export class ReprotectDiskReplicaGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReprotectDiskReplicaGroupResponseBody;
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
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the secondary disk in the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query region IDs of secondary disks in replication pairs.
   * 
   * >  The reverse replication feature must be enabled from the region where the secondary disk is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
  replicaPairId?: string;
  /**
   * @remarks
   * Specifies whether to enable the reverse replication sub-feature. Valid values: true and false. Default value: true.
   * 
   * @example
   * true
   */
  reverseReplicate?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      replicaPairId: 'ReplicaPairId',
      reverseReplicate: 'ReverseReplicate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      replicaPairId: 'string',
      reverseReplicate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReprotectDiskReplicaPairResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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

export class ReprotectDiskReplicaPairResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReprotectDiskReplicaPairResponseBody;
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

export class SetDedicatedBlockStorageClusterDiskThroughputRequest extends $tea.Model {
  /**
   * @remarks
   * Target throughput.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  bps?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * This parameter is required.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The region ID of disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      clientToken: 'ClientToken',
      diskId: 'DiskId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      clientToken: 'string',
      diskId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDedicatedBlockStorageClusterDiskThroughputResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 17EE62D8-064E-5404-8B0D-72122478****
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

export class SetDedicatedBlockStorageClusterDiskThroughputResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDedicatedBlockStorageClusterDiskThroughputResponseBody;
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
      body: SetDedicatedBlockStorageClusterDiskThroughputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartDiskReplicaGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to immediately synchronize data once. Valid values:
   * 
   * *   true: immediately synchronizes data once.
   * *   false: synchronizes data based on the RPO of the replication pair-consistent group.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  oneShot?: boolean;
  /**
   * @remarks
   * The ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the IDs of replication pair-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-myreplica****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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

export class StartDiskReplicaGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDiskReplicaGroupResponseBody;
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
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to immediately synchronize data. Valid values:
   * 
   * *   true: immediately synchronizes data.
   * *   false: synchronizes data based on the recovery point objective (RPO).
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  oneShot?: boolean;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query the region information of replication pairs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A37597A6-BB99-19B3-85EA-4C2B91F0****
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

export class StartDiskReplicaPairResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartDiskReplicaPairResponseBody;
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

export class StartPairDrillRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query a list of replication pairs, including replication pair IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-xxxx
   */
  pairId?: string;
  /**
   * @remarks
   * The region ID of the secondary disk in the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query the region in which the secondary disk of the replication pair resides.
   * 
   * >  You must enable the disaster recovery drill feature in the region in which the secondary site resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      pairId: 'PairId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      pairId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPairDrillResponseBody extends $tea.Model {
  /**
   * @remarks
   * The drill ID.
   * 
   * @example
   * drill-xxx
   */
  drillId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPairDrillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartPairDrillResponseBody;
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
      body: StartPairDrillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartReplicaGroupDrillRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group ID. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation the most recent list of async replication pair-consistent groups, including group IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxx
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the region where the secondary site in the replication pair-consistent group is located. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the region where the secondary site in the replication pair-consistent group is located.
   * 
   * >  You must enable the disaster recovery drill feature in the region in which the secondary site resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      groupId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartReplicaGroupDrillResponseBody extends $tea.Model {
  /**
   * @remarks
   * The drill ID.
   * 
   * @example
   * pg-drill-xxxx
   */
  drillId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartReplicaGroupDrillResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartReplicaGroupDrillResponseBody;
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
      body: StartReplicaGroupDrillResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDiskReplicaGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the replication pair-consistent group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group. You can call the [DescribeDiskReplicaGroups](https://help.aliyun.com/document_detail/426614.html) operation to query the IDs of replication pair-consistent groups.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-myreplica****
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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

export class StopDiskReplicaGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDiskReplicaGroupResponseBody;
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
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the primary or secondary disk in the replication pair. You can call the [DescribeDiskReplicaPairs](https://help.aliyun.com/document_detail/354206.html) operation to query the region information of replication pairs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * This parameter is required.
   * 
   * @example
   * pair-cn-dsa****
   */
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
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A37597A6-BB99-19B3-85EA-4C2B91F0****
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

export class StopDiskReplicaPairResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDiskReplicaPairResponseBody;
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
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the resource. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID list of the resources. You can specify up to 50 IDs in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * disk-123
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   dedicatedblockstoragecluster: dedicated block storage cluster
   * *   diskreplicapair: replication pair
   * *   diskreplicagroup: replication pair-consistent group
   * 
   * This parameter is required.
   * 
   * @example
   * diskreplicagroup
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource tags. You can specify up to 20 tags.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The ID of the request. The request ID is returned regardless of whether the call is successful.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
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

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
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

export class UnbindEnterpriseSnapshotPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of disks.
   */
  diskTargets?: string[];
  /**
   * @remarks
   * The id of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * esp-xxs
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      diskTargets: 'DiskTargets',
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      diskTargets: { 'type': 'array', 'itemType': 'string' },
      policyId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnbindEnterpriseSnapshotPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 061DE1AB-08BA-5ACD-A03A-440117C6939A
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

export class UnbindEnterpriseSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnbindEnterpriseSnapshotPolicyResponseBody;
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
      body: UnbindEnterpriseSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resource. This parameter is valid only when the TagKey.N parameter is not specified. Valid values:
   * 
   * *   true: removes all tags from the resource.
   * *   false: does not remove all tags from the resource.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the resource. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID list of the resource. You can specify up to 50 resource IDs in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * disk-123
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   dedicatedblockstoragecluster: dedicated block storage cluster
   * *   diskreplicapair: the replication pair.
   * *   diskreplicagroup: replication pair-consistent group
   * 
   * This parameter is required.
   * 
   * @example
   * diskreplicapair
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys. You can specify up to 20 tag keys in the list.
   * 
   * @example
   * disk-123
   */
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
  /**
   * @remarks
   * The ID of the request. The request ID is returned regardless of whether the call is successful.
   * 
   * @example
   * C46FF5A8-C5F0-4024-8262-B16B6392****
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

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
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

export class UpdateEnterpriseSnapshotPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Snapshot replication destination information.
   */
  crossRegionCopyInfo?: UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The id of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Snapshot retention rule.
   */
  retainRule?: UpdateEnterpriseSnapshotPolicyRequestRetainRule;
  /**
   * @remarks
   * The rule for scheduling.
   */
  schedule?: UpdateEnterpriseSnapshotPolicyRequestSchedule;
  /**
   * @remarks
   * The special snapshot retention rules.
   */
  specialRetainRules?: UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRules;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   **ENABLED**: Enable snapshot policy execution.
   * *   **DISABLED**: Disable snapshot policy execution.
   * 
   * @example
   * ENABLED
   */
  state?: string;
  /**
   * @remarks
   * Advanced snapshot features.
   */
  storageRule?: UpdateEnterpriseSnapshotPolicyRequestStorageRule;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      crossRegionCopyInfo: 'CrossRegionCopyInfo',
      desc: 'Desc',
      name: 'Name',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      retainRule: 'RetainRule',
      schedule: 'Schedule',
      specialRetainRules: 'SpecialRetainRules',
      state: 'State',
      storageRule: 'StorageRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      crossRegionCopyInfo: UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo,
      desc: 'string',
      name: 'string',
      policyId: 'string',
      regionId: 'string',
      retainRule: UpdateEnterpriseSnapshotPolicyRequestRetainRule,
      schedule: UpdateEnterpriseSnapshotPolicyRequestSchedule,
      specialRetainRules: UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRules,
      state: 'string',
      storageRule: UpdateEnterpriseSnapshotPolicyRequestStorageRule,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Snapshot replication destination information.
   */
  crossRegionCopyInfoShrink?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The id of the policy.
   * 
   * This parameter is required.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
  /**
   * @remarks
   * The region ID . You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which snapshot policy is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Snapshot retention rule.
   */
  retainRuleShrink?: string;
  /**
   * @remarks
   * The rule for scheduling.
   */
  scheduleShrink?: string;
  /**
   * @remarks
   * The special snapshot retention rules.
   */
  specialRetainRulesShrink?: string;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   **ENABLED**: Enable snapshot policy execution.
   * *   **DISABLED**: Disable snapshot policy execution.
   * 
   * @example
   * ENABLED
   */
  state?: string;
  /**
   * @remarks
   * Advanced snapshot features.
   */
  storageRuleShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      crossRegionCopyInfoShrink: 'CrossRegionCopyInfo',
      desc: 'Desc',
      name: 'Name',
      policyId: 'PolicyId',
      regionId: 'RegionId',
      retainRuleShrink: 'RetainRule',
      scheduleShrink: 'Schedule',
      specialRetainRulesShrink: 'SpecialRetainRules',
      state: 'State',
      storageRuleShrink: 'StorageRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      crossRegionCopyInfoShrink: 'string',
      desc: 'string',
      name: 'string',
      policyId: 'string',
      regionId: 'string',
      retainRuleShrink: 'string',
      scheduleShrink: 'string',
      specialRetainRulesShrink: 'string',
      state: 'string',
      storageRuleShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BA903E56-48CE-5B81-9611-ED7962EED3DF
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

export class UpdateEnterpriseSnapshotPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEnterpriseSnapshotPolicyResponseBody;
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
      body: UpdateEnterpriseSnapshotPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSolutionInstanceAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that it is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * defaultDescription
   */
  description?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * defaultName
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region where the dedicated block storage cluster resides. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * inst-***
   */
  solutionInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      solutionInstanceId: 'SolutionInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
      solutionInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSolutionInstanceAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
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

export class UpdateSolutionInstanceAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSolutionInstanceAttributeResponseBody;
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
      body: UpdateSolutionInstanceAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDedicatedBlockStorageClusterRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N to add to the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-value
   */
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
  /**
   * @remarks
   * The key of tag N of the replication pair-consistent group.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the replication pair-consistent group.
   * 
   * @example
   * tag-value
   */
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
  /**
   * @remarks
   * The key of tag N to add to the resource. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:` or contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
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

export class CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions extends $tea.Model {
  /**
   * @remarks
   * The region ID of the destination. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Number of days to retain the destination snapshot. The range of values is greater than 1.
   * 
   * @example
   * 7
   */
  retainDays?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      retainDays: 'RetainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      retainDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo extends $tea.Model {
  /**
   * @remarks
   * Whether cross-region replication is enabled. The range of values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of destination regions.
   */
  regions?: CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      regions: { 'type': 'array', 'itemType': CreateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequestRetainRule extends $tea.Model {
  /**
   * @remarks
   * Maximum number of retained snapshots.
   * 
   * @example
   * 10
   */
  number?: number;
  /**
   * @remarks
   * The time interval , valid value greater than 1.
   * 
   * @example
   * 14
   */
  timeInterval?: number;
  /**
   * @remarks
   * The unit of time, valid values:
   * 
   * - DAYS
   * 
   * - WEEKS
   * 
   * @example
   * DAYS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequestSchedule extends $tea.Model {
  /**
   * @remarks
   * The time when the policy will to be scheduled. Valid values: Set the parameter in a cron expression.
   * 
   * For example, you can use 0 0 4 1/1 * ? to specify 04:00:00 (UTC+8) on the first day of each month.
   * 
   * This parameter is required.
   */
  cronExpression?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules extends $tea.Model {
  /**
   * @remarks
   * The periodic unit for specially retained snapshots. If configured to WEEKS, it provides special retention for the first snapshot of each week. The retention period is determined by TimeUnit and TimeInterval. The range of values are:
   * - WEEKS
   * - MONTHS
   * - YEARS
   * 
   * @example
   * WEEKS
   */
  specialPeriodUnit?: string;
  /**
   * @remarks
   * Retention Time Value. The range of values is greater than 1.
   * 
   * @example
   * 14
   */
  timeInterval?: number;
  /**
   * @remarks
   * Retention time unit for special snapshots. The range of values:
   * 
   * - DAYS
   * 
   * - WEEKS
   * 
   * @example
   * WEEKS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      specialPeriodUnit: 'SpecialPeriodUnit',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialPeriodUnit: 'string',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequestSpecialRetainRules extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the special retention is enabled.
   * 
   * *   true: enable
   * *   false: disable
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The special retention rules.
   */
  rules?: CreateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      rules: { 'type': 'array', 'itemType': CreateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequestStorageRule extends $tea.Model {
  /**
   * @remarks
   * Whether to enable the rapid availability of snapshots. The range of values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  enableImmediateAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableImmediateAccess: 'EnableImmediateAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableImmediateAccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEnterpriseSnapshotPolicyRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be 0 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * Each tag key must have a unique tag value. You can specify at most 20 tag values in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-value
   */
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

export class CreateEnterpriseSnapshotPolicyShrinkRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be 0 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * Each tag key must have a unique tag value. You can specify at most 20 tag values in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-value
   */
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
  /**
   * @remarks
   * The tag key of the cloud disk.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the cloud disk.
   * 
   * @example
   * TestValue
   */
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
  /**
   * @remarks
   * The time when the cloud disk was last attached. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-07T06:08:56Z
   */
  attachedTime?: string;
  /**
   * @remarks
   * This parameter is currently in invitational preview and unavailable for general users.
   * 
   * @example
   * null
   */
  bdfId?: string;
  /**
   * @remarks
   * Whether the ESSD AutoPL disk is enabled burst IOPS / BPS. This parameter is available only if the DiskCategory parameter is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of the disk. A value of cloud_essd indicates that the disk is an ESSD.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * Indicates whether the automatic snapshots of the cloud disk are deleted when the disk is released. Valid values:
   * 
   * *   true: The automatic snapshots of the cloud disk are deleted when the disk is released.
   * *   false: The automatic snapshots of the cloud disk are retained when the disk is released.
   * 
   * Snapshots that are created by calling the [CreateSnapshot](https://help.aliyun.com/document_detail/25524.html) operation or by using the Elastic Compute Service (ECS) console are retained and not affected by this parameter.
   * 
   * @example
   * false
   */
  deleteAutoSnapshot?: boolean;
  /**
   * @remarks
   * Indicates whether the cloud disk is released when its associated instance is released. Valid values:
   * 
   * *   true: The cloud disk is released when its associated instance is released.
   * *   false: The cloud disk is retained when its associated instance is released.
   * 
   * @example
   * true
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * The description of the cloud disk.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The time when the cloud disk was last detached.
   * 
   * @example
   * 2021-06-07T21:01:22Z
   */
  detachedTime?: string;
  /**
   * @remarks
   * The device name of the cloud disk on its associated instance. Example: /dev/xvdb. Take note of the following items:
   * 
   * *   This parameter has a value only when the `Status` value is `In_use`.
   * *   This parameter is empty for cloud disks that have the multi-attach feature enabled. You can query the attachment information of the cloud disk based on the `Attachment` values.
   * 
   * >  This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
   * 
   * @example
   * /dev/xvdb
   */
  device?: string;
  /**
   * @remarks
   * The billing method of the cloud disk. Valid values:
   * 
   * *   PrePaid: subscription
   * *   PostPaid: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  diskChargeType?: string;
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the cloud disk.
   * 
   * @example
   * testDiskName
   */
  diskName?: string;
  /**
   * @remarks
   * Indicates whether the automatic snapshot policy feature is enabled for the cloud disk.
   * 
   * @example
   * false
   */
  enableAutoSnapshot?: boolean;
  /**
   * @remarks
   * Indicates whether the cloud disk is encrypted.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * The maximum number of IOPS.
   * 
   * @example
   * 4000
   */
  IOPS?: number;
  /**
   * @remarks
   * The ID of the image that was used to create the instance. This parameter is empty unless the cloud disk was created from an image. The value of this parameter remains unchanged throughout the lifecycle of the cloud disk.
   * 
   * @example
   * m-bp13aqm171qynt3u***
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the instance to which the cloud disk is attached. Take note of the following items:
   * 
   * *   This parameter has a value only when the `Status` value is `In_use`.
   * *   This parameter is empty for cloud disks that have the multi-attach feature enabled. You can query the attachment information of the cloud disk based on the `Attachment` values.
   * 
   * @example
   * i-bp67acfmxazb4q****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the Key Management Service (KMS) key used by the cloud disk.
   * 
   * @example
   * 0e478b7a-4262-4802-b8cb-00d3fb40****
   */
  KMSKeyId?: string;
  /**
   * @remarks
   * The number of instances to which the Shared Block Storage device is attached.
   * 
   * @example
   * 1
   */
  mountInstanceNum?: number;
  /**
   * @remarks
   * Indicates whether the multi-attach feature was enabled for the cloud disk.
   * 
   * @example
   * Disabled
   */
  multiAttach?: string;
  /**
   * @remarks
   * The performance level of the enhanced SSD (ESSD). Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * Indicates whether the cloud disk is removable.
   * 
   * @example
   * false
   */
  portable?: boolean;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. 
   * >  This parameter is available only if the DiskCategory parameter is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html) and [Modify the performance configurations of an ESSD AutoPL disk](https://help.aliyun.com/document_detail/413275.html).
   * 
   * @example
   * 50000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The region ID of cloud disk.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 60
   */
  size?: number;
  /**
   * @remarks
   * The ID of the snapshot that was used to create the cloud disk.
   * 
   * This parameter is empty unless the cloud disk was created from a snapshot. The value of this parameter remains unchanged throughout the lifecycle of the cloud disk.
   * 
   * @example
   * s-bp67acfmxazb4p****
   */
  sourceSnapshotId?: string;
  /**
   * @remarks
   * The state of the cloud disk. For more information, see [Disk states](https://help.aliyun.com/document_detail/25689.html). Valid values:
   * 
   * *   In_use
   * *   Available
   * *   Attaching
   * *   Detaching
   * *   Creating
   * *   ReIniting
   * 
   * @example
   * In_use
   */
  status?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster to which the cloud disk belongs. If your cloud disk belongs to the public block storage cluster, an empty value is returned.
   * 
   * @example
   * dbsc-j5e1sf2vaf5he8m2****
   */
  storageClusterId?: string;
  /**
   * @remarks
   * The ID of the storage set.
   * 
   * @example
   * ss-i-bp1j4i2jdf3owlhe****
   */
  storageSetId?: string;
  /**
   * @remarks
   * The maximum number of partitions in the storage set.
   * 
   * @example
   * 11
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The tags of the cloud disk.
   */
  tags?: DescribeDedicatedBlockStorageClusterDisksResponseBodyDisksDiskTags[];
  /**
   * @remarks
   * The maximum number of BPS.
   * 
   * @example
   * 350
   */
  throughput?: number;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * 
   * *   system: system disk
   * *   data: data disk
   * 
   * @example
   * all
   */
  type?: string;
  /**
   * @remarks
   * The zone ID of cloud disk.
   * 
   * @example
   * cn-heyuan-i
   */
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
  /**
   * @remarks
   * Details about the cloud disks.
   */
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
  /**
   * @remarks
   * The tag key of the dedicated block storage cluster.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the dedicated block storage cluster.
   * 
   * @example
   * TestValue
   */
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
  /**
   * @remarks
   * The available capacity of the dedicated block storage cluster. Unit: GiB.
   * 
   * @example
   * 61440
   */
  availableCapacity?: number;
  /**
   * @remarks
   * The total capacity of the dedicated block storage cluster that was delivered in disk creation orders. Unit: GB.
   * 
   * @example
   * 61440
   */
  availableDeviceCapacity?: number;
  /**
   * @remarks
   * This parameter is displayed only if Thin Provision is enabled.
   * 
   * @example
   * 40000.3
   */
  availableSpaceCapacity?: number;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster that was delivered in orders. Unit: GB.
   * 
   * @example
   * 61440
   */
  clusterAvailableCapacity?: number;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster that is to be delivered in orders. Unit: GB.
   * 
   * @example
   * 0
   */
  clusterDeliveryCapacity?: number;
  /**
   * @remarks
   * The to-be-delivered capacity of the dedicated block storage cluster. Unit: GB.
   * 
   * @example
   * 0
   */
  deliveryCapacity?: number;
  /**
   * @remarks
   * The total capacity of the dedicated block storage cluster. Unit: GiB.
   * 
   * @example
   * 61440
   */
  totalCapacity?: number;
  /**
   * @remarks
   * The total capacity of the dedicated block storage cluster that is to be delivered in disk creation orders. Unit: GB.
   * 
   * @example
   * 61440
   */
  totalDeviceCapacity?: number;
  /**
   * @remarks
   * This parameter is displayed only if Thin Provision is enabled.
   * 
   * @example
   * 73728
   */
  totalSpaceCapacity?: number;
  /**
   * @remarks
   * The used capacity of the dedicated block storage cluster. Unit: GB.
   * 
   * @example
   * 1440
   */
  usedCapacity?: number;
  /**
   * @remarks
   * The capacity of the dedicated block storage cluster that was used to create disks. Unit: GB.
   * 
   * @example
   * 32000
   */
  usedDeviceCapacity?: number;
  /**
   * @remarks
   * This parameter is displayed only if Thin Provision is enabled.
   * 
   * @example
   * 33727.7
   */
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
  /**
   * @remarks
   * The tag key of the dedicated block storage cluster.
   * 
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the dedicated block storage cluster.
   * 
   * @example
   * testValue
   */
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
  /**
   * @remarks
   * The unique ID (UID) of the Alibaba Cloud account.
   * 
   * @example
   * 12345601234560***
   */
  aliUid?: string;
  /**
   * @remarks
   * The category of disks that can be created in the dedicated block storage cluster.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The time when the dedicated block storage cluster was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1657113211
   */
  createTime?: string;
  /**
   * @remarks
   * The storage capacity of the dedicated block storage cluster.
   */
  dedicatedBlockStorageClusterCapacity?: DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersDedicatedBlockStorageClusterCapacity;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * @example
   * dbsc-f8z4d3k4nsgg9okb****
   */
  dedicatedBlockStorageClusterId?: string;
  /**
   * @remarks
   * The name of the dedicated block storage cluster.
   * 
   * @example
   * myDBSCCluster
   */
  dedicatedBlockStorageClusterName?: string;
  /**
   * @remarks
   * The description of the dedicated block storage cluster.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The dedicated block storage cluster enable thin provison.
   * 
   * @example
   * true
   */
  enableThinProvision?: boolean;
  /**
   * @remarks
   * The time when the dedicated block storage cluster expires. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1673020800
   */
  expiredTime?: string;
  /**
   * @remarks
   * The performance level of disks. Valid values:
   * 
   * *   PL0
   * *   PL1
   * *   PL2
   * *   PL3
   * 
   * >  This parameter takes effect only if Category is set to cloud_essd.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the dedicated block storage cluster belongs.
   * 
   * @example
   * rg-aekzsoux****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Oversold ratio of cluster space capacity for creating disk.
   * 
   * @example
   * 1.2
   */
  sizeOverSoldRatio?: number;
  /**
   * @remarks
   * The state of the dedicated block storage cluster. Valid values:
   * 
   * *   Preparing
   * *   Running
   * *   Expired
   * *   Offline
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * StorageDomain.
   * 
   * @example
   * StorageDomain
   */
  storageDomain?: string;
  /**
   * @remarks
   * This parameter is not supported.
   * 
   * @example
   * cloud_essd
   */
  supportedCategory?: string;
  /**
   * @remarks
   * The tags of the dedicated block storage cluster.
   */
  tags?: DescribeDedicatedBlockStorageClustersResponseBodyDedicatedBlockStorageClustersTags[];
  /**
   * @remarks
   * The type of the dedicated block storage cluster. Valid values:
   * 
   * *   Standard: basic dedicated block storage cluster. ESSDs at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
   * *   Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
   * 
   * @example
   * Standard
   */
  type?: string;
  /**
   * @remarks
   * The zone ID of the dedicated block storage cluster.
   * 
   * @example
   * cn-heyuan-b
   */
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
  /**
   * @remarks
   * The description of the event.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp1bq5g3dxxo1x4o****
   */
  diskId?: string;
  /**
   * @remarks
   * The recommended action after the event occurred. Valid values:
   * 
   * *   Resize: resizes the disk.
   * *   ModifyDiskSpec: changes the category of the disk.
   * *   NoAction: performs no operation.
   * 
   * @example
   * NoAction
   */
  recommendAction?: string;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The state of the event. Valid values:
   * 
   * *   Solved
   * *   UnSolved
   * 
   * @example
   * Solved
   */
  status?: string;
  /**
   * @remarks
   * The time when the event occurred. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-06-01T08:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The type of the event. Only DataNeedProtect can be returned.
   * 
   * @example
   * DataNeedProtect
   */
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
  /**
   * @remarks
   * The percentage of BPS.
   * 
   * @example
   * 80(%)
   */
  BPSPercent?: number;
  /**
   * @remarks
   * The number of burst I/O operations.
   * 
   * @example
   * 0
   */
  burstIOCount?: number;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp1bq5g3dxxo1x4o****
   */
  diskId?: string;
  /**
   * @remarks
   * The percentage of IOPS.
   * 
   * @example
   * 80(%)
   */
  IOPSPercent?: number;
  /**
   * @remarks
   * The read bandwidth of the disk. Unit: MByte/s.
   * 
   * @example
   * 10
   */
  readBPS?: number;
  /**
   * @remarks
   * Read IO block size. Unit: Bytes
   * 
   * @example
   * 4096
   */
  readBlockSize?: number;
  /**
   * @remarks
   * The maximum number of read IOPS.
   * 
   * @example
   * 2000
   */
  readIOPS?: number;
  /**
   * @remarks
   * Read IO latency. Unit:  microsecond
   * 
   * @example
   * 100
   */
  readLatency?: number;
  /**
   * @remarks
   * The timestamp that is used to query the near real-time monitoring data of the disk. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-06-01T08:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The write bandwidth of the disk. Unit: MByte/s.
   * 
   * @example
   * 204
   */
  writeBPS?: number;
  /**
   * @remarks
   * Write IO block size. Unit: Bytes
   * 
   * @example
   * 4096
   */
  writeBlockSize?: number;
  /**
   * @remarks
   * The maximum number of write IOPS.
   * 
   * @example
   * 2000
   */
  writeIOPS?: number;
  /**
   * @remarks
   * Write IO latency. Unit: microsecond
   * 
   * @example
   * 100
   */
  writeLatency?: number;
  static names(): { [key: string]: string } {
    return {
      BPSPercent: 'BPSPercent',
      burstIOCount: 'BurstIOCount',
      diskId: 'DiskId',
      IOPSPercent: 'IOPSPercent',
      readBPS: 'ReadBPS',
      readBlockSize: 'ReadBlockSize',
      readIOPS: 'ReadIOPS',
      readLatency: 'ReadLatency',
      timestamp: 'Timestamp',
      writeBPS: 'WriteBPS',
      writeBlockSize: 'WriteBlockSize',
      writeIOPS: 'WriteIOPS',
      writeLatency: 'WriteLatency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      BPSPercent: 'number',
      burstIOCount: 'number',
      diskId: 'string',
      IOPSPercent: 'number',
      readBPS: 'number',
      readBlockSize: 'number',
      readIOPS: 'number',
      readLatency: 'number',
      timestamp: 'string',
      writeBPS: 'number',
      writeBlockSize: 'number',
      writeIOPS: 'number',
      writeLatency: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskMonitorDataListResponseBodyMonitorData extends $tea.Model {
  /**
   * @remarks
   * The number of burst I/O operations.
   * 
   * @example
   * 2000
   */
  burstIOCount?: number;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  diskId?: string;
  /**
   * @remarks
   * The beginning of the time range during which the performance of the disk bursts. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-06-01T08:00:00Z
   */
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
  /**
   * @remarks
   * The key of tag N of the replication group.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the replication group.
   * 
   * @example
   * tag-value
   */
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
  /**
   * @remarks
   * The tag key of the replication group.
   * 
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the replication group.
   * 
   * @example
   * testValue
   */
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
  /**
   * @remarks
   * The bandwidth value. Unit: Mbit/s. This parameter is unavailable and has a system-preset value.
   * 
   * @example
   * 0
   */
  bandwidth?: number;
  /**
   * @remarks
   * The description of the replication pair-consistent group.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the region in which the secondary site is deployed.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The ID of the zone in which the secondary site is deployed.
   * 
   * @example
   * cn-shanghai-e
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * The name of the replication pair-consistent group.
   * 
   * @example
   * myreplicagrouptest
   */
  groupName?: string;
  /**
   * @remarks
   * The time when data was last replicated from the primary disks to the secondary disks in the replication pair-consistent group. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1637835114
   */
  lastRecoverPoint?: number;
  /**
   * @remarks
   * The IDs of the replications pairs that belong to the replication pair-consistent group.
   */
  pairIds?: Buffer[];
  /**
   * @remarks
   * The number of replications pairs that belong to the replication pair-consistent group.
   * 
   * @example
   * 2
   */
  pairNumber?: number;
  /**
   * @remarks
   * The initial source region (primary region) of the replication pair-consistent group.
   * 
   * @example
   * cn-beijing
   */
  primaryRegion?: string;
  /**
   * @remarks
   * The initial source zone (primary zone) of the replication pair-consistent group.
   * 
   * @example
   * cn-beijing-h
   */
  primaryZone?: string;
  /**
   * @remarks
   * The recovery point objective (RPO) of the replication pair-consistent group. Unit: seconds.
   * 
   * @example
   * 180
   */
  RPO?: number;
  /**
   * @remarks
   * The ID of the replication pair-consistent group.
   * 
   * @example
   * pg-myreplica****
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the replication group belongs.
   * 
   * @example
   * rg-aek2a*******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the site from which the information of the replication pair and replication pair-consistent group is obtained. Valid values:
   * 
   * *   production: primary site
   * *   backup: secondary site
   * 
   * @example
   * production
   */
  site?: string;
  /**
   * @remarks
   * The ID of the region in which the primary site is deployed.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The ID of the zone in which the primary site is deployed.
   * 
   * @example
   * cn-beijing-f
   */
  sourceZoneId?: string;
  /**
   * @remarks
   * The initial destination region (secondary region) of the replication pair-consistent group.
   * 
   * @example
   * cn-shanghai
   */
  standbyRegion?: string;
  /**
   * @remarks
   * The initial destination zone (secondary zone) of the replication pair-consistent group.
   * 
   * @example
   * cn-shanghai-e
   */
  standbyZone?: string;
  /**
   * @remarks
   * The state of the replication pair-consistent group. Valid values:
   * 
   * *   invalid: The replication pair-consistent group is invalid, which indicates that abnormal replication pairs are present in the replication pair-consistent group.
   * *   creating: The replication pair-consistent group is being created.
   * *   created: The replication pair-consistent group is created.
   * *   create_failed: The replication pair-consistent group cannot be created.
   * *   manual_syncing: Data is being manually synchronized between the disks in the replication pair-consistent group. The first time data is being manually synchronized between the disks in a replication pair-consistent group, the replication pair-consistent group is in this state.
   * *   syncing: Data is being synchronized between the disks in the replication pair-consistent group. While data is being asynchronously replicated from the primary disks to the secondary disks not for the first time, the replication pair-consistent group is in this state.
   * *   normal: The replication pair-consistent group is working as expected. When the system finishes replicating data from the primary disks to the secondary disks within the current replication cycle, the replication pair-consistent group enters this state.
   * *   stopping: The replication pair-consistent group is being stopped.
   * *   stopped: The replication pair-consistent group is stopped.
   * *   stop_failed: The replication pair-consistent group cannot be stopped.
   * *   failovering: A failover is being performed.
   * *   failovered: A failover is performed.
   * *   failover_failed: A failover cannot be performed.
   * *   reprotecting: A reverse replication is being performed.
   * *   reprotect_failed: A reverse replication cannot be performed.
   * *   deleting: The replication pair-consistent group is being deleted.
   * *   delete_failed: The replication pair-consistent group cannot be deleted.
   * *   deleted: The replication pair-consistent group is deleted.
   * 
   * @example
   * created
   */
  status?: string;
  /**
   * @remarks
   * The tags of the replication pair.
   */
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
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TestValue
   */
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
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * testValue
   */
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
  /**
   * @remarks
   * The bandwidth used to asynchronously replicate data from the primary disk to the secondary disk. Unit: Kbit/s.
   * 
   * @example
   * 10240
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method of the replication pair. Valid values:
   * 
   * *   PREPAY: subscription
   * *   POSTPAY: pay-as-you-go
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the replication pair was created. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1649750977
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the replication pair.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the secondary disk.
   * 
   * @example
   * d-asdfjl2342kj2l3k4****
   */
  destinationDiskId?: string;
  /**
   * @remarks
   * The region ID of the secondary disk.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegion?: string;
  /**
   * @remarks
   * The zone ID of the secondary disk.
   * 
   * @example
   * cn-shanghai-b
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * The time when the replication pair expires. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1649750977
   */
  expiredTime?: number;
  /**
   * @remarks
   * The time when data was last replicated from the primary disk to the secondary disk in the replication pair. The value of this parameter is a timestamp. Unit: seconds. 86,400 seconds is equivalent to 24 hours.
   * 
   * @example
   * 1649751977
   */
  lastRecoverPoint?: number;
  /**
   * @remarks
   * The name of the replication pair.
   * 
   * @example
   * TestReplicaPair
   */
  pairName?: string;
  /**
   * @remarks
   * The initial source region (primary region) of the replication pair.
   * 
   * @example
   * cn-beijing
   */
  primaryRegion?: string;
  /**
   * @remarks
   * The initial source zone (primary zone) of the replication pair.
   * 
   * @example
   * cn-beijing-a
   */
  primaryZone?: string;
  /**
   * @remarks
   * The recovery point objective (RPO) of the replication pair. Unit: seconds.
   * 
   * @example
   * 900
   */
  RPO?: number;
  /**
   * @remarks
   * The ID of the replication pair-consistent group to which the replication pair belongs.
   * 
   * @example
   * pg-xxxx****
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * The name of the replication pair-consistent group to which the replication pair belongs.
   * 
   * @example
   * pg-name****
   */
  replicaGroupName?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * @example
   * pair-cn-dsa****
   */
  replicaPairId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the replication pair belongs.
   * 
   * @example
   * rg-acfmvs*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the site from which the information about the replication pairs and replication pair-consistent group was obtained. Valid values:
   * 
   * *   production: primary site
   * *   backup: secondary site
   * 
   * @example
   * production
   */
  site?: string;
  /**
   * @remarks
   * The ID of the primary disk.
   * 
   * @example
   * d-bp131n0q38u3a4zi****
   */
  sourceDiskId?: string;
  /**
   * @remarks
   * The region ID of the primary disk.
   * 
   * @example
   * cn-beijing
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The zone ID of the primary disk.
   * 
   * @example
   * cn-beijing-a
   */
  sourceZoneId?: string;
  /**
   * @remarks
   * The initial destination region (secondary region) of the replication pair.
   * 
   * @example
   * cn-shanghai
   */
  standbyRegion?: string;
  /**
   * @remarks
   * The initial destination zone (secondary zone) of the replication pair.
   * 
   * @example
   * cn-shanghai-b
   */
  standbyZone?: string;
  /**
   * @remarks
   * The status of the replication pair. Valid values:
   * 
   * *   invalid: The replication pair was invalid. When a replication pair becomes abnormal, it enters this state.
   * *   creating: The replication pair was being created.
   * *   created: The replication pair was created.
   * *   create_failed: The replication pair failed to be created.
   * *   initial_syncing: Data was synchronized from the primary disk to the secondary disk for the first time. After a replication pair is created and activated, the replication pair is in this state the first time data is synchronized from the primary disk to the secondary disk.
   * *   manual_syncing: Data was being manually synchronized from the primary disk to the secondary disk. After data is manually synchronized from the primary disk to the secondary disk, the replication pair returns to the stopped state. The first time data is manually synchronized from the primary disk to the secondary disk, the replication pair is in the manual_syncing state during the synchronization.
   * *   syncing: Data was being synchronized from the primary disk to the secondary disk. When data is being asynchronously replicated from the primary disk to the secondary disk again in subsequent operations, the replication pair is in this state.
   * *   normal: The replication pair was working as expected. When the system finishes replicating data from the primary disk to the secondary disk within the current replication cycle, the replication pair enters this state.
   * *   stopping: The replication pair was being stopped.
   * *   stopped: The replication pair was stopped.
   * *   stop_failed: The replication pair failed to be stopped.
   * *   failovering: A failover was being performed.
   * *   failovered: A failover was performed.
   * *   failover_failed: A failover failed to be performed.
   * *   reprotecting: A reverse replication was being performed.
   * *   reprotect_failed: A reverse replication failed to be performed.
   * *   deleting: The replication pair was being deleted.
   * *   delete_failed: The replication pair failed to be deleted.
   * *   deleted: The replication pair was deleted.
   * 
   * @example
   * created
   */
  status?: string;
  /**
   * @remarks
   * The message that describes the state of the replication pair. This parameter has a value when `Status` has a value of invalid or `create_failed`. Valid values:
   * 
   * *   PrePayOrderExpired: The replication pair has expired.
   * *   PostPayOrderCeaseService: The pay-as-you-go replication pair has been stopped due to an overdue payment.
   * *   DeviceRemoved: The primary or secondary disk has been deleted.
   * *   DeviceKeyChanged: The `DeviceKey` mapping of the primary or secondary disk has changed.
   * *   DeviceSizeChanged: The `DeviceSize` value of the primary or secondary disk has changed.
   * *   OperationDenied.QuotaExceed: The maximum number of replication pairs that can be created has been reached.
   * 
   * @example
   * PrePayOrderExpired
   */
  statusMessage?: string;
  /**
   * @remarks
   * The tags of the replication pair.
   */
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

export class DescribeDisksRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-value
   */
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

export class DescribeDisksResponseBodyDataAccessAuthorizationEcs extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-assd***********
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDataAccessAuthorizationPod extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cid*******
   */
  clusterId?: string;
  /**
   * @remarks
   * The pod ID.
   * 
   * @example
   * pid******
   */
  podId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      podId: 'PodId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      podId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDataAccessAuthorization extends $tea.Model {
  /**
   * @remarks
   * The token that is used to access the disk.
   * 
   * @example
   * b34385a***************
   */
  accessToken?: string;
  /**
   * @remarks
   * The information of ecs.
   */
  ecs?: DescribeDisksResponseBodyDataAccessAuthorizationEcs;
  /**
   * @remarks
   * The information of pod.
   */
  pod?: DescribeDisksResponseBodyDataAccessAuthorizationPod;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      ecs: 'Ecs',
      pod: 'Pod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      ecs: DescribeDisksResponseBodyDataAccessAuthorizationEcs,
      pod: DescribeDisksResponseBodyDataAccessAuthorizationPod,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDataAttachments extends $tea.Model {
  /**
   * @remarks
   * The time when the disk was attached.
   * 
   * @example
   * 2021-06-07T06:08:56Z
   */
  attachedTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-aaaa********
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * 4c47c411-b9***********
   */
  namespaceId?: number;
  static names(): { [key: string]: string } {
    return {
      attachedTime: 'AttachedTime',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedTime: 'string',
      instanceId: 'string',
      namespaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDisksResponseBodyDataTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * empty-str-0
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 000098dab001c600
   */
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

export class DescribeDisksResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The access authorization information of the disk.
   */
  accessAuthorization?: DescribeDisksResponseBodyDataAccessAuthorization[];
  /**
   * @remarks
   * The time when the disk was attached.
   * 
   * @example
   * 2021-06-07T06:08:56Z
   */
  attachedTime?: string;
  /**
   * @remarks
   * The attachment information of the disk.
   */
  attachments?: DescribeDisksResponseBodyDataAttachments[];
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for the disk. Valid values:
   * 
   * *   true: enable the performance burst feature.
   * *   false: disable the performance burst feature.
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of disk.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The time when the disk was created.
   * 
   * @example
   * 2023-12-30 12:00:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the disk. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The time when the disk was detached.
   * 
   * @example
   * 2021-06-07T21:01:22Z
   */
  detachedTime?: string;
  /**
   * @remarks
   * The maximum number of read and write operations per second. Unit: operations/s.
   * 
   * @example
   * 4000
   */
  deviceNguid?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp10jtnecw0yc6s96p0o
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * disk-name
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * IOPS.
   * 
   * @example
   * 26800
   */
  iops?: number;
  /**
   * @remarks
   * The maximum number of read operations per second. Unit: operations/s.
   * 
   * @example
   * 2000
   */
  iopsRead?: number;
  /**
   * @remarks
   * The maximum number of write operations per second. Unit: operations/s.
   * 
   * @example
   * 2000
   */
  iopsWrite?: number;
  /**
   * @remarks
   * The ID of the KMS key.
   * 
   * @example
   * key-hzz65*********
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The time when the disk was modified.
   * 
   * @example
   * 2023-12-30 12:00:00
   */
  modifyAt?: string;
  /**
   * @remarks
   * The performance level of the ESSD. Valid values:
   * 
   * *   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * Default value: PL1.
   * 
   * For more information about ESSD performance levels, see [ESSDs](https://help.aliyun.com/document_detail/122389.html).
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}
   * 
   * Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}
   * 
   * >  This parameter is available only if the DiskCategory parameter is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html) and [Modify the performance configurations of an ESSD AutoPL disk](https://help.aliyun.com/document_detail/413275.html).
   * 
   * @example
   * 3200
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the disk belongs.
   * 
   * @example
   * rg-aekz********
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GB.
   * 
   * @example
   * 40
   */
  size?: number;
  /**
   * @remarks
   * The states of disk. Valid values:
   * 
   * *   In_use
   * *   Available
   * *   Attaching
   * *   Detaching
   * *   Creating
   * *   ReIniting
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The details of the tags.
   */
  tags?: DescribeDisksResponseBodyDataTags[];
  /**
   * @remarks
   * The throughput of the disk.
   * 
   * Unit: MB/s.
   * 
   * @example
   * 600
   */
  throughput?: number;
  /**
   * @remarks
   * The zone ID of the disk.
   * 
   * @example
   * cn-shenzhen-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accessAuthorization: 'AccessAuthorization',
      attachedTime: 'AttachedTime',
      attachments: 'Attachments',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      creationTime: 'CreationTime',
      description: 'Description',
      detachedTime: 'DetachedTime',
      deviceNguid: 'DeviceNguid',
      diskId: 'DiskId',
      diskName: 'DiskName',
      encrypted: 'Encrypted',
      iops: 'Iops',
      iopsRead: 'IopsRead',
      iopsWrite: 'IopsWrite',
      kmsKeyId: 'KmsKeyId',
      modifyAt: 'ModifyAt',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      size: 'Size',
      status: 'Status',
      tags: 'Tags',
      throughput: 'Throughput',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessAuthorization: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDataAccessAuthorization },
      attachedTime: 'string',
      attachments: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDataAttachments },
      burstingEnabled: 'boolean',
      category: 'string',
      creationTime: 'string',
      description: 'string',
      detachedTime: 'string',
      deviceNguid: 'string',
      diskId: 'string',
      diskName: 'string',
      encrypted: 'boolean',
      iops: 'number',
      iopsRead: 'number',
      iopsWrite: 'number',
      kmsKeyId: 'string',
      modifyAt: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      size: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDisksResponseBodyDataTags },
      throughput: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N of the enterprise-level snapshot policy.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the enterprise-level snapshot policy.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-value
   */
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

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfoRegions extends $tea.Model {
  /**
   * @remarks
   * The ID of the destination region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The retention period of snapshot copies in the destination region. Unit: day.
   * 
   * @example
   * 7
   */
  retainDays?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      retainDays: 'RetainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      retainDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfo extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the cross-region replication feature is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The destination regions that store snapshot copies.
   */
  regions?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfoRegions[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      regions: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfoRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesRetainRule extends $tea.Model {
  /**
   * @remarks
   * The maximum number of snapshots that can be retained.
   * 
   * @example
   * 10
   */
  number?: number;
  /**
   * @remarks
   * The value of the retention period of snapshots.
   * 
   * @example
   * 14
   */
  timeInterval?: number;
  /**
   * @remarks
   * The unit of the retention period of snapshots.
   * 
   * @example
   * DAYS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSchedule extends $tea.Model {
  /**
   * @remarks
   * The cron expression of the enterprise-level snapshot policy.
   */
  cronExpression?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRulesRules extends $tea.Model {
  /**
   * @remarks
   * The unit of the special retention period.
   * 
   * @example
   * WEEKS
   */
  specialPeriodUnit?: string;
  /**
   * @remarks
   * The value of the retention period.
   * 
   * @example
   * 1
   */
  timeInterval?: number;
  /**
   * @remarks
   * The unit of the retention period.
   * 
   * @example
   * WEEKS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      specialPeriodUnit: 'SpecialPeriodUnit',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialPeriodUnit: 'string',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRules extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the special retention period is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The special retention rules.
   */
  rules?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRulesRules[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      rules: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRulesRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesStorageRule extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the instant access feature is enabled.
   * 
   * @example
   * false
   */
  enableImmediateAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableImmediateAccess: 'EnableImmediateAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableImmediateAccess: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesTags extends $tea.Model {
  /**
   * @remarks
   * The key of the tag of the enterprise-level snapshot policy.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag of the enterprise-level snapshot policy.
   * 
   * @example
   * value
   */
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

export class DescribeEnterpriseSnapshotPolicyResponseBodyPolicies extends $tea.Model {
  /**
   * @remarks
   * The time when the enterprise-level snapshot policy was created.
   * 
   * @example
   * 2023-06-24T06:03:35Z
   */
  createTime?: string;
  /**
   * @remarks
   * The replication rule of snapshots in the enterprise-level snapshot policy.
   */
  crossRegionCopyInfo?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfo;
  /**
   * @remarks
   * The description of the enterprise-level snapshot policy.
   * 
   * @example
   * xxx
   */
  desc?: string;
  /**
   * @remarks
   * The disks that are associated with the snapshot policy.
   */
  diskIds?: string[];
  /**
   * @remarks
   * Indicates whether snapshots are managed.
   * 
   * @example
   * false
   */
  managedForEcs?: boolean;
  /**
   * @remarks
   * The name of the enterprise-level snapshot policy.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The ID of the enterprise-level snapshot policy.
   * 
   * @example
   * esp-xxx
   */
  policyId?: string;
  /**
   * @remarks
   * the resource group
   * 
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The retention rule of the enterprise-level snapshot policy.
   */
  retainRule?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesRetainRule;
  /**
   * @remarks
   * The scheduling rule of the enterprise-level snapshot policy.
   */
  schedule?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSchedule;
  /**
   * @remarks
   * The special retention rules of the enterprise-level snapshot policy.
   */
  specialRetainRules?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRules;
  /**
   * @remarks
   * The status of the enterprise-level snapshot policy.
   * 
   * @example
   * DISABLED
   */
  state?: string;
  /**
   * @remarks
   * The storage rule of snapshots in the enterprise-level snapshot policy.
   */
  storageRule?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesStorageRule;
  /**
   * @remarks
   * the pair tags
   */
  tags?: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesTags[];
  /**
   * @remarks
   * The number of objects that are associated with the enterprise-level snapshot policy.
   * 
   * @example
   * 10
   */
  targetCount?: number;
  /**
   * @remarks
   * The type of the enterprise-level snapshot policy.
   * 
   * @example
   * DISK
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossRegionCopyInfo: 'CrossRegionCopyInfo',
      desc: 'Desc',
      diskIds: 'DiskIds',
      managedForEcs: 'ManagedForEcs',
      name: 'Name',
      policyId: 'PolicyId',
      resourceGroupId: 'ResourceGroupId',
      retainRule: 'RetainRule',
      schedule: 'Schedule',
      specialRetainRules: 'SpecialRetainRules',
      state: 'State',
      storageRule: 'StorageRule',
      tags: 'Tags',
      targetCount: 'TargetCount',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      crossRegionCopyInfo: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesCrossRegionCopyInfo,
      desc: 'string',
      diskIds: { 'type': 'array', 'itemType': 'string' },
      managedForEcs: 'boolean',
      name: 'string',
      policyId: 'string',
      resourceGroupId: 'string',
      retainRule: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesRetainRule,
      schedule: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSchedule,
      specialRetainRules: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesSpecialRetainRules,
      state: 'string',
      storageRule: DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesStorageRule,
      tags: { 'type': 'array', 'itemType': DescribeEnterpriseSnapshotPolicyResponseBodyPoliciesTags },
      targetCount: 'number',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventsResponseBodyResourceEvents extends $tea.Model {
  /**
   * @remarks
   * The description of the event.
   * 
   * @example
   * need snapshot
   */
  description?: string;
  /**
   * @remarks
   * The end time of the event, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   * 
   * @example
   * 1679538083000
   */
  endTime?: string;
  /**
   * @remarks
   * The level of the event. Valid values:
   * 
   * 1.  INFO
   * 2.  WARN
   * 3.  CRITICAL
   * 
   * @example
   * INFO
   */
  eventLevel?: string;
  /**
   * @remarks
   * The name of the event. Valid values:
   * 
   * *   NoSnapshot: indicates the event that is triggered because no snapshot is created for a disk to protect data on the disk.
   * *   BurstIOTriggered: indicates the event that is triggered when a burst I/O operation is performed on a disk.
   * *   CostOptimizationNeeded: indicates the event that is triggered when cost optimization is required.
   * *   DiskSpecNotMatchedWithInstance: indicates the event that is triggered because the specifications of a disk do not match the instance to which the disk is attached.
   * *   DiskIONo4kAligned: indicates the event that is triggered because the physical and logical sectors involved in a read or write operation are not 4K aligned.
   * *   DiskIOHang: indicates the event that is triggered when an I/O hang occurs on a disk.
   * *   InstanceIOPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of IOPS on an instance reaches the upper limit.
   * *   InstanceBPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of BPS on an instance reaches the upper limit.
   * *   DiskIOPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of IOPS on a disk reaches the upper limit for the associated instance.
   * *   DiskBPSExceedInstanceMaxLimit: indicates the event that is triggered when the number of BPS on a disk reaches the upper limit for the associated instance.
   * *   DiskIOPSExceedDiskMaxLimit: indicates the event that is triggered when the number of IOPS on a disk reaches the upper limit for the disk.
   * *   DiskBPSExceedDiskMaxLimit: indicates the event that is triggered when the number of BPS on a disk reaches the upper limit for the disk.
   * 
   * @example
   * DiskIOHang
   */
  eventName?: string;
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * 1.  Notification
   * 2.  SystemException
   * 3.  Alert
   * 
   * @example
   * Alert
   */
  eventType?: string;
  /**
   * @remarks
   * The recommended action after the event occurred. Valid values:
   * 
   * *   ModifyDiskSpec
   * *   CreateSnapshot
   * *   ResizeDisk
   * *   AdjustProvision
   * *   ModifyInstanceSpec
   * 
   * @example
   * AdjustProvision
   */
  recommendAction?: string;
  /**
   * @remarks
   * The codes of the parameters for the recommended action after the event occurred.
   * 
   * @example
   * 4296
   */
  recommendParams?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * d-bp67acfmxazb4p****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * disk
   */
  resourceType?: string;
  /**
   * @remarks
   * The start time of the event, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.
   * 
   * @example
   * 1684204822000
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the event. Valid values:
   * 
   * 1.  WillExecute
   * 2.  Executing
   * 3.  Executed
   * 4.  Ignore
   * 5.  Expired
   * 6.  Deleted
   * 
   * @example
   * WillExecute
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      endTime: 'EndTime',
      eventLevel: 'EventLevel',
      eventName: 'EventName',
      eventType: 'EventType',
      recommendAction: 'RecommendAction',
      recommendParams: 'RecommendParams',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endTime: 'string',
      eventLevel: 'string',
      eventName: 'string',
      eventType: 'string',
      recommendAction: 'string',
      recommendParams: 'string',
      resourceId: 'string',
      resourceType: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLensMonitorDisksResponseBodyDiskInfosTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * user
   */
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

export class DescribeLensMonitorDisksResponseBodyDiskInfos extends $tea.Model {
  /**
   * @remarks
   * The BPS.
   * 
   * @example
   * 300
   */
  bps?: number;
  /**
   * @remarks
   * Indicates whether the performance burst feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is available only if you set `DiskCategory` to `cloud_auto`. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html).
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The type of the disk. Valid values:
   * - cloud
   * - cloud_efficiency
   * - cloud_ssd
   * - cloud_essd
   * - cloud_auto
   * - cloud_essd_entry
   * 
   * @example
   * cloud_essd
   */
  diskCategory?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-cd401****
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * disk-28c6b****
   */
  diskName?: string;
  /**
   * @remarks
   * The disk status. Valid values:
   * 
   * - Available
   * - Deleted
   * 
   * @example
   * Available
   */
  diskStatus?: string;
  /**
   * @remarks
   * The disk type. Valid values:
   * *   system: system disk
   * *   data: data disk
   * 
   * @example
   * system
   */
  diskType?: string;
  /**
   * @remarks
   * The IOPS.
   * 
   * @example
   * 4000
   */
  iops?: number;
  /**
   * @remarks
   * Event tags of the disk.
   */
  lensTags?: string[];
  /**
   * @remarks
   * The new performance level of the ESSD. Valid values:
   * 
   * *   PL0: An ESSD can deliver up to 10,000 random read/write IOPS.
   * *   PL1: An ESSD can deliver up to 50,000 random read/write IOPS.
   * *   PL2: An ESSD can deliver up to 100,000 random read/write IOPS.
   * *   PL3: An ESSD delivers up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}
   * 
   * Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}
   * 
   * >  This parameter is available only if the DiskCategory parameter is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://www.alibabacloud.com/help/en/ecs/user-guide/essd-autopl-disks)
   * 
   * @example
   * 4000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The region ID of the disk.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GiB.
   * 
   * @example
   * 64
   */
  size?: number;
  /**
   * @remarks
   * Tags of the disk.
   */
  tags?: DescribeLensMonitorDisksResponseBodyDiskInfosTags[];
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      burstingEnabled: 'BurstingEnabled',
      diskCategory: 'DiskCategory',
      diskId: 'DiskId',
      diskName: 'DiskName',
      diskStatus: 'DiskStatus',
      diskType: 'DiskType',
      iops: 'Iops',
      lensTags: 'LensTags',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      regionId: 'RegionId',
      size: 'Size',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      burstingEnabled: 'boolean',
      diskCategory: 'string',
      diskId: 'string',
      diskName: 'string',
      diskStatus: 'string',
      diskType: 'string',
      iops: 'number',
      lensTags: { 'type': 'array', 'itemType': 'string' },
      performanceLevel: 'string',
      provisionedIops: 'number',
      regionId: 'string',
      size: 'number',
      tags: { 'type': 'array', 'itemType': DescribeLensMonitorDisksResponseBodyDiskInfosTags },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDataResponseBodyDataList extends $tea.Model {
  /**
   * @remarks
   * The datapoints that consist of consecutive timestamps in seconds and metric values that were recorded at these time points.
   * 
   * @example
   * {
   *         "1699258861": 1,
   *         "1699259461": 0,
   *         "1699260061": 0,
   *         "1699260661": 0,
   *         "1699261261": 0,
   *         "1699261861": 0,
   *         "1699262461": 0,
   *         "1699263061": 0,
   *         "1699263661": 0,
   *         "1699264261": 0,
   *         "1699264861": 0
   * }
   */
  datapoints?: any;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"DiskId": "d-1234"}
   */
  labels?: any;
  static names(): { [key: string]: string } {
    return {
      datapoints: 'Datapoints',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoints: 'any',
      labels: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePairDrillsResponseBodyDrills extends $tea.Model {
  /**
   * @remarks
   * The ID of the drill disk.
   * 
   * @example
   * d-xxx
   */
  drillDiskId?: string;
  /**
   * @remarks
   * The status of the drill disk. Valid values:
   * 
   * *   created
   * *   deleted
   * *   creating
   * *   deleting
   * 
   * >  This parameter can also display error code details if your drill disk fails to be created or deleted.
   * 
   * @example
   * created
   */
  drillDiskStatus?: string;
  /**
   * @remarks
   * The ID of the drill.
   * 
   * @example
   * drill-xxx
   */
  drillId?: string;
  /**
   * @remarks
   * The recovery point of the drill. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1690855931
   */
  recoverPoint?: number;
  /**
   * @remarks
   * The beginning time of the drill. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1690855888
   */
  startAt?: number;
  /**
   * @remarks
   * The status of the drill. Valid values:
   * 
   * *   execute_failed
   * *   executed
   * *   executing
   * *   clear_failed
   * *   clearing
   * 
   * @example
   * executing
   */
  status?: string;
  /**
   * @remarks
   * The error message that was displayed if the drill failed to be executed.
   * 
   * @example
   * PAIR_SYNCPOINT_NOT_FOUND
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      drillDiskId: 'DrillDiskId',
      drillDiskStatus: 'DrillDiskStatus',
      drillId: 'DrillId',
      recoverPoint: 'RecoverPoint',
      startAt: 'StartAt',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillDiskId: 'string',
      drillDiskStatus: 'string',
      drillId: 'string',
      recoverPoint: 'number',
      startAt: 'number',
      status: 'string',
      statusMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsZones extends $tea.Model {
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * Hangzhou Zone H
   */
  localName?: string;
  /**
   * @remarks
   * The type of resource list.
   */
  resourceTypes?: string[];
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-h
   */
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
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * ebs.cn-hangzhou.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Details about the zones.
   */
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

export class DescribeReplicaGroupDrillsResponseBodyDrillsPairsInfo extends $tea.Model {
  /**
   * @remarks
   * The ID of the drill disk.
   * 
   * @example
   * d-xxx
   */
  drillDiskId?: string;
  /**
   * @remarks
   * The status of the drill disk. Valid values:
   * 
   * *   created
   * *   deleted
   * *   creating
   * *   deleting
   * 
   * >  This parameter can also display error code details if your drill disk fails to be created or deleted.
   * 
   * @example
   * created
   */
  drillDiskStatus?: string;
  /**
   * @remarks
   * The ID of the replication pair.
   * 
   * @example
   * pair-xxx
   */
  pairId?: string;
  static names(): { [key: string]: string } {
    return {
      drillDiskId: 'DrillDiskId',
      drillDiskStatus: 'DrillDiskStatus',
      pairId: 'PairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillDiskId: 'string',
      drillDiskStatus: 'string',
      pairId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaGroupDrillsResponseBodyDrills extends $tea.Model {
  /**
   * @remarks
   * The ID of the drill.
   * 
   * @example
   * pg-drill-xxx
   */
  drillId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group.
   * 
   * @example
   * pg-xxx
   */
  groupId?: string;
  /**
   * @remarks
   * The information of replication pairs.
   */
  pairsInfo?: DescribeReplicaGroupDrillsResponseBodyDrillsPairsInfo[];
  /**
   * @remarks
   * The recovery point of the drill. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1691114995
   */
  recoverPoint?: number;
  /**
   * @remarks
   * The beginning time of the drill. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1649750977
   */
  startAt?: number;
  /**
   * @remarks
   * The status of the drill. Valid values:
   * 
   * *   execute_failed
   * *   executed
   * *   executing
   * *   clear_failed
   * *   clearing
   * 
   * @example
   * executed
   */
  status?: string;
  /**
   * @remarks
   * The error message that appears if the drill fails to be executed.
   * 
   * @example
   * GROUP_SYNCPOINT_NOT_FOUND
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      groupId: 'GroupId',
      pairsInfo: 'PairsInfo',
      recoverPoint: 'RecoverPoint',
      startAt: 'StartAt',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      groupId: 'string',
      pairsInfo: { 'type': 'array', 'itemType': DescribeReplicaGroupDrillsResponseBodyDrillsPairsInfo },
      recoverPoint: 'number',
      startAt: 'number',
      status: 'string',
      statusMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSolutionInstanceConfigurationRequestParameters extends $tea.Model {
  /**
   * @remarks
   * The key of the parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * ***
   */
  parameterKey?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * > The Parameters parameter is optional. If you specify Parameters, you must specify ParameterValue.
   * 
   * This parameter is required.
   * 
   * @example
   * ***
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
      parameterValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiskResponseBodyDiskAccessAuthorizationEcs extends $tea.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-uf6*******************
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiskResponseBodyDiskAccessAuthorizationPod extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ccf9**************
   */
  clusterId?: string;
  /**
   * @remarks
   * The pod ID.
   * 
   * @example
   * pid****************
   */
  podId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      podId: 'PodId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      podId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiskResponseBodyDiskAccessAuthorization extends $tea.Model {
  /**
   * @remarks
   * The token that is used to access the disk.
   * 
   * @example
   * 4cd9******************
   */
  accessToken?: string;
  /**
   * @remarks
   * The information of ecs.
   */
  ecs?: GetDiskResponseBodyDiskAccessAuthorizationEcs;
  /**
   * @remarks
   * The information of pod.
   */
  pod?: GetDiskResponseBodyDiskAccessAuthorizationPod;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      ecs: 'Ecs',
      pod: 'Pod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      ecs: GetDiskResponseBodyDiskAccessAuthorizationEcs,
      pod: GetDiskResponseBodyDiskAccessAuthorizationPod,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiskResponseBodyDiskAttachments extends $tea.Model {
  /**
   * @remarks
   * The time when the disk was attached.
   * 
   * @example
   * 2021-11-18T19:30:16+08:00
   */
  attachedTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-cad***********
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * 308e2*****************
   */
  namespaceId?: number;
  static names(): { [key: string]: string } {
    return {
      attachedTime: 'AttachedTime',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachedTime: 'string',
      instanceId: 'string',
      namespaceId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiskResponseBodyDiskTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag_key
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * tag_value
   */
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

export class GetDiskResponseBodyDisk extends $tea.Model {
  /**
   * @remarks
   * The access authorization information of the disk.
   */
  accessAuthorization?: GetDiskResponseBodyDiskAccessAuthorization[];
  /**
   * @remarks
   * The time when the disk was attached.
   * 
   * @example
   * 2021-11-18T19:30:16+08:00
   */
  attachedTime?: string;
  /**
   * @remarks
   * The attachment information of the disk.
   */
  attachments?: GetDiskResponseBodyDiskAttachments[];
  /**
   * @remarks
   * Specifies whether to enable the performance burst feature for the disk. Valid values:
   * 
   * * true: enable the performance burst feature.
   * * false: disable the performance burst feature.
   * 
   * @example
   * true
   */
  burstingEnabled?: boolean;
  /**
   * @remarks
   * The category of the disk.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The time when the disk was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2021-11-18T19:30:16+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the disk.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The time when the disk was detached.
   * 
   * @example
   * 2021-11-18T19:30:16+08:00
   */
  detachedTime?: string;
  /**
   * @remarks
   * The maximum number of read and write operations per second. Unit: operations/s.
   * 
   * @example
   * 4cd************
   */
  deviceNguid?: string;
  /**
   * @remarks
   * The ID of the disk.
   * 
   * @example
   * d-bp19c*********
   */
  diskId?: string;
  /**
   * @remarks
   * The name of the disk.
   * 
   * @example
   * diskName
   */
  diskName?: string;
  /**
   * @remarks
   * Specifies whether to encrypt the disk. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  encrypted?: boolean;
  /**
   * @remarks
   * IOPS.
   * 
   * @example
   * 46800
   */
  iops?: number;
  /**
   * @remarks
   * The maximum number of read operations per second. Unit: operations/s.
   * 
   * @example
   * 500
   */
  iopsRead?: number;
  /**
   * @remarks
   * The maximum number of write operations per second. Unit: operations/s.
   * 
   * @example
   * 500
   */
  iopsWrite?: number;
  /**
   * @remarks
   * The ID of the KMS key.
   * 
   * @example
   * key-hz**************
   */
  kmsKeyId?: string;
  /**
   * @remarks
   * The time when the disk was modfied.
   * 
   * @example
   * 2021-11-18T19:30:16+08:00
   */
  modifyAt?: string;
  /**
   * @remarks
   * The performance level of the ESSD. Valid values:
   * 
   * * PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
   * * PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
   * * PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
   * * PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The provisioned read/write IOPS of the ESSD AutoPL disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}
   * 
   * Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}
   * 
   * >  This parameter is available only if the DiskCategory parameter is set to cloud_auto. For more information, see [ESSD AutoPL disks](https://help.aliyun.com/document_detail/368372.html) and [Modify the performance configurations of an ESSD AutoPL disk](https://help.aliyun.com/document_detail/413275.html).
   * 
   * @example
   * 5000
   */
  provisionedIops?: number;
  /**
   * @remarks
   * The region ID of the disk. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the disk belongs.
   * 
   * @example
   * rg-aek*************
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The size of the disk. Unit: GB.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The states of disk. Valid values:
   * 
   * * In_use
   * * Available
   * * Attaching
   * * Detaching
   * * Creating
   * * ReIniting
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The details of the tags.
   */
  tags?: GetDiskResponseBodyDiskTags[];
  /**
   * @remarks
   * The throughput of the disk.
   * 
   * Unit: MB/s.
   * 
   * @example
   * 600
   */
  throughput?: number;
  /**
   * @remarks
   * The ID of the zone where the disk resides.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accessAuthorization: 'AccessAuthorization',
      attachedTime: 'AttachedTime',
      attachments: 'Attachments',
      burstingEnabled: 'BurstingEnabled',
      category: 'Category',
      creationTime: 'CreationTime',
      description: 'Description',
      detachedTime: 'DetachedTime',
      deviceNguid: 'DeviceNguid',
      diskId: 'DiskId',
      diskName: 'DiskName',
      encrypted: 'Encrypted',
      iops: 'Iops',
      iopsRead: 'IopsRead',
      iopsWrite: 'IopsWrite',
      kmsKeyId: 'KmsKeyId',
      modifyAt: 'ModifyAt',
      performanceLevel: 'PerformanceLevel',
      provisionedIops: 'ProvisionedIops',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      size: 'Size',
      status: 'Status',
      tags: 'Tags',
      throughput: 'Throughput',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessAuthorization: { 'type': 'array', 'itemType': GetDiskResponseBodyDiskAccessAuthorization },
      attachedTime: 'string',
      attachments: { 'type': 'array', 'itemType': GetDiskResponseBodyDiskAttachments },
      burstingEnabled: 'boolean',
      category: 'string',
      creationTime: 'string',
      description: 'string',
      detachedTime: 'string',
      deviceNguid: 'string',
      diskId: 'string',
      diskName: 'string',
      encrypted: 'boolean',
      iops: 'number',
      iopsRead: 'number',
      iopsWrite: 'number',
      kmsKeyId: 'string',
      modifyAt: 'string',
      performanceLevel: 'string',
      provisionedIops: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      size: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetDiskResponseBodyDiskTags },
      throughput: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N used for exact search of EBS resources. The tag key must be 1 to 128 characters in length. Valid values of N: 1 to 20.
   * 
   * The `Tag.N` parameter pair (Tag.N.Key and Tag.N.Value) is used for exact search of EBS resources that have specified tags added. Each tag is a key-value pair.
   * 
   * *   If you specify only `Tag.N.Key`, all EBS resources whose tags contain the specified tag key are returned.
   * *   If you specify only `Tag.N.Value`, the `InvalidParameter.TagValue` error is returned.
   * *   If you specify multiple tag key-value pairs at the same time, only EBS resources that match all tag key-value pairs are returned.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N used for exact search of EBS resources. The tag value must be 1 to 128 characters in length. Valid values of N: 1 to 20.
   * 
   * @example
   * tag-value
   */
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
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * pair-cn-c4d2t7f****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   dedicatedblockstoragecluster: dedicated block storage cluster
   * *   diskreplicapair: replication pair
   * *   diskreplicagroup: replication pair-consistent group
   * 
   * @example
   * pair
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * @example
   * TestValue
   */
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

export class QueryDedicatedBlockStorageClusterInventoryDataResponseBodyDataMonitorItems extends $tea.Model {
  /**
   * @remarks
   * Available capacity size of the dedicated block storage cluster.
   * 
   * @example
   * 61360
   */
  availableSize?: number;
  /**
   * @remarks
   * Total capacity size of the dedicated block storage cluster.
   * 
   * @example
   * 61440
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      availableSize: 'AvailableSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableSize: 'number',
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDedicatedBlockStorageClusterInventoryDataResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The returned metrics.
   */
  monitorItems?: QueryDedicatedBlockStorageClusterInventoryDataResponseBodyDataMonitorItems;
  /**
   * @remarks
   * The ID list of the resource.
   * 
   * @example
   * dbsc-xxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The timestamp when the data is collected.
   * 
   * @example
   * 1606403800
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      monitorItems: 'MonitorItems',
      resourceId: 'ResourceId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItems: QueryDedicatedBlockStorageClusterInventoryDataResponseBodyDataMonitorItems,
      resourceId: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:` or contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * tag-value
   */
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

export class UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions extends $tea.Model {
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/354276.html) operation to query the most recent list of regions in which async replication is supported.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Number of days to retain the destination snapshot. The range of values is greater than 1.
   * 
   * @example
   * 7
   */
  retainDays?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      retainDays: 'RetainDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      retainDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfo extends $tea.Model {
  /**
   * @remarks
   * Whether cross-region replication is enabled. The range of values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * Destination region information.
   */
  regions?: UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      regions: { 'type': 'array', 'itemType': UpdateEnterpriseSnapshotPolicyRequestCrossRegionCopyInfoRegions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyRequestRetainRule extends $tea.Model {
  /**
   * @remarks
   * Maximum number of retained snapshots.
   * 
   * @example
   * 10
   */
  number?: number;
  /**
   * @remarks
   * The time interval , valid value greater than 1.
   * 
   * @example
   * 14
   */
  timeInterval?: number;
  /**
   * @remarks
   * The unit of time, valid values:
   * 
   * - DAYS
   * - WEEKS
   * 
   * @example
   * DAYS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'number',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyRequestSchedule extends $tea.Model {
  /**
   * @remarks
   * The time when the policy will to be scheduled. Valid values: Set the parameter in a cron expression.
   * 
   * For example, you can use `0 0 4 1/1 * ?` to specify 04:00:00 (UTC+8) on the first day of each month.
   * 
   * This parameter is required.
   */
  cronExpression?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules extends $tea.Model {
  /**
   * @remarks
   * The periodic unit for specially retained snapshots. If configured to WEEKS, it provides special retention for the first snapshot of each week. The retention period is determined by TimeUnit and TimeInterval. The range of values are:
   * - WEEKS
   * - MONTHS
   * - YEARS"
   * 
   * @example
   * WEEKS
   */
  specialPeriodUnit?: string;
  /**
   * @remarks
   * Retention Time Value. The range of values is greater than 1.
   * 
   * @example
   * 30
   */
  timeInterval?: number;
  /**
   * @remarks
   * Retention time unit for special snapshots. The range of values:
   * 
   * - DAYS
   * 
   * - WEEKS
   * 
   * @example
   * WEEKS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      specialPeriodUnit: 'SpecialPeriodUnit',
      timeInterval: 'TimeInterval',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specialPeriodUnit: 'string',
      timeInterval: 'number',
      timeUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRules extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the special retention is enabled.
   * 
   * *   true: enable
   * *   false: disable
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The special retention rules.
   */
  rules?: UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      rules: { 'type': 'array', 'itemType': UpdateEnterpriseSnapshotPolicyRequestSpecialRetainRulesRules },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEnterpriseSnapshotPolicyRequestStorageRule extends $tea.Model {
  /**
   * @remarks
   * Whether to enable the rapid availability of snapshots. The range of values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * false
   */
  enableImmediateAccess?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableImmediateAccess: 'EnableImmediateAccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableImmediateAccess: 'boolean',
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
   * Adds a replication pair to a replication pair-consistent group. You can use a replication pair-consistent group to batch manage replication pairs. When you call this operation, you can specify parameters, such as ReplicaGroupId, ReplicaPairId, and ClientToken, in the request.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   A replication pair and a replication pair-consistent group replicate in the same direction if they have the same primary region (production region), primary zone (production zone), secondary region (disaster recovery region), and secondary zone (disaster recovery zone). A replication pair can be added only to a replication pair-consistent group that replicates in the same direction as the replication pair.
   * *   Before you can add a replication pair to a replication pair-consistent group, make sure that the pair and the group are in the **Created** (`created`) or **Stopped** (`stopped`) state.
   * *   Up to 17 replication pairs can be added to a single replication pair-consistent group.
   * *   After replication pairs are added to a replication pair-consistent group, the recovery point objective (RPO) of the group takes effect on the pairs in place of their original RPOs.
   * 
   * @param request - AddDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDiskReplicaPairResponse
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
   * Adds a replication pair to a replication pair-consistent group. You can use a replication pair-consistent group to batch manage replication pairs. When you call this operation, you can specify parameters, such as ReplicaGroupId, ReplicaPairId, and ClientToken, in the request.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   A replication pair and a replication pair-consistent group replicate in the same direction if they have the same primary region (production region), primary zone (production zone), secondary region (disaster recovery region), and secondary zone (disaster recovery zone). A replication pair can be added only to a replication pair-consistent group that replicates in the same direction as the replication pair.
   * *   Before you can add a replication pair to a replication pair-consistent group, make sure that the pair and the group are in the **Created** (`created`) or **Stopped** (`stopped`) state.
   * *   Up to 17 replication pairs can be added to a single replication pair-consistent group.
   * *   After replication pairs are added to a replication pair-consistent group, the recovery point objective (RPO) of the group takes effect on the pairs in place of their original RPOs.
   * 
   * @param request - AddDiskReplicaPairRequest
   * @returns AddDiskReplicaPairResponse
   */
  async addDiskReplicaPair(request: AddDiskReplicaPairRequest): Promise<AddDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Enables CloudLens for EBS.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - ApplyLensServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyLensServiceResponse
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
   * Enables CloudLens for EBS.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * @returns ApplyLensServiceResponse
   */
  async applyLensService(): Promise<ApplyLensServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyLensServiceWithOptions(runtime);
  }

  /**
   * Bind disks into a enterprise-level snapshot policy.
   * 
   * @param request - BindEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindEnterpriseSnapshotPolicyResponse
   */
  async bindEnterpriseSnapshotPolicyWithOptions(request: BindEnterpriseSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<BindEnterpriseSnapshotPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.diskTargets)) {
      query["DiskTargets"] = request.diskTargets;
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
      action: "BindEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BindEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new BindEnterpriseSnapshotPolicyResponse({}));
  }

  /**
   * Bind disks into a enterprise-level snapshot policy.
   * 
   * @param request - BindEnterpriseSnapshotPolicyRequest
   * @returns BindEnterpriseSnapshotPolicyResponse
   */
  async bindEnterpriseSnapshotPolicy(request: BindEnterpriseSnapshotPolicyRequest): Promise<BindEnterpriseSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.bindEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Disables CloudLens for EBS.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - CancelLensServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelLensServiceResponse
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
   * Disables CloudLens for EBS.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * @returns CancelLensServiceResponse
   */
  async cancelLensService(): Promise<CancelLensServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelLensServiceWithOptions(runtime);
  }

  /**
   * Changes the resource group to which an Elastic Block Storage (EBS) resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
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

  /**
   * Changes the resource group to which an Elastic Block Storage (EBS) resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Clears the disaster recovery drills that were initiated from the secondary disk of a replication pair and deletes the auto-created drill disks.
   * 
   * @param request - ClearPairDrillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearPairDrillResponse
   */
  async clearPairDrillWithOptions(request: ClearPairDrillRequest, runtime: $Util.RuntimeOptions): Promise<ClearPairDrillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drillId)) {
      query["DrillId"] = request.drillId;
    }

    if (!Util.isUnset(request.pairId)) {
      query["PairId"] = request.pairId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ClearPairDrill",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClearPairDrillResponse>(await this.callApi(params, req, runtime), new ClearPairDrillResponse({}));
  }

  /**
   * Clears the disaster recovery drills that were initiated from the secondary disk of a replication pair and deletes the auto-created drill disks.
   * 
   * @param request - ClearPairDrillRequest
   * @returns ClearPairDrillResponse
   */
  async clearPairDrill(request: ClearPairDrillRequest): Promise<ClearPairDrillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearPairDrillWithOptions(request, runtime);
  }

  /**
   * Clears the disaster recovery drills that were initiated from the secondary disks of a replication pair-consistent group and deletes the auto-created drill disks.
   * 
   * @param request - ClearReplicaGroupDrillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClearReplicaGroupDrillResponse
   */
  async clearReplicaGroupDrillWithOptions(request: ClearReplicaGroupDrillRequest, runtime: $Util.RuntimeOptions): Promise<ClearReplicaGroupDrillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drillId)) {
      query["DrillId"] = request.drillId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ClearReplicaGroupDrill",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ClearReplicaGroupDrillResponse>(await this.callApi(params, req, runtime), new ClearReplicaGroupDrillResponse({}));
  }

  /**
   * Clears the disaster recovery drills that were initiated from the secondary disks of a replication pair-consistent group and deletes the auto-created drill disks.
   * 
   * @param request - ClearReplicaGroupDrillRequest
   * @returns ClearReplicaGroupDrillResponse
   */
  async clearReplicaGroupDrill(request: ClearReplicaGroupDrillRequest): Promise<ClearReplicaGroupDrillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.clearReplicaGroupDrillWithOptions(request, runtime);
  }

  /**
   * Creates a dedicated block storage cluster. When you call this operation, you can specify parameters, such as Azone, Capacity, Type, and PeriodUnit, in the request.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   Dedicated block storage clusters are physically isolated from public block storage clusters. The owner of each dedicated block storage cluster has exclusive access to all resources in the cluster.
   * *   Disks created in a dedicated block storage cluster can be attached only to Elastic Compute Service (ECS) instances that reside in the same zone as the cluster. Before you create a dedicated block storage cluster, decide the regions and zones in which to deploy your cloud resources.
   * *   Dedicated block storage clusters are classified into basic and performance types. When you create a dedicated block storage cluster, select a cluster type based on your business requirements.
   * *   You are charged for creating dedicated block storage clusters.
   * 
   * @param request - CreateDedicatedBlockStorageClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDedicatedBlockStorageClusterResponse
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
   * Creates a dedicated block storage cluster. When you call this operation, you can specify parameters, such as Azone, Capacity, Type, and PeriodUnit, in the request.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   Dedicated block storage clusters are physically isolated from public block storage clusters. The owner of each dedicated block storage cluster has exclusive access to all resources in the cluster.
   * *   Disks created in a dedicated block storage cluster can be attached only to Elastic Compute Service (ECS) instances that reside in the same zone as the cluster. Before you create a dedicated block storage cluster, decide the regions and zones in which to deploy your cloud resources.
   * *   Dedicated block storage clusters are classified into basic and performance types. When you create a dedicated block storage cluster, select a cluster type based on your business requirements.
   * *   You are charged for creating dedicated block storage clusters.
   * 
   * @param request - CreateDedicatedBlockStorageClusterRequest
   * @returns CreateDedicatedBlockStorageClusterResponse
   */
  async createDedicatedBlockStorageCluster(request: CreateDedicatedBlockStorageClusterRequest): Promise<CreateDedicatedBlockStorageClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDedicatedBlockStorageClusterWithOptions(request, runtime);
  }

  /**
   * Creates a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * The replication pair-consistent group feature allows you to batch manage multiple disks in disaster recovery scenarios. You can restore the data of all disks in the same replication pair-consistent group to the same point in time to allow for disaster recovery of instances.
   * Take note of the following items:
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Replication pair-consistent groups can be used to implement disaster recovery across zones within the same region and disaster recovery across regions.
   * *   A replication pair and a replication pair-consistent group can replicate in the same direction if they have the same primary region (production region), primary zone (production zone), secondary region (disaster recovery region), and secondary zone (disaster recovery zone). A replication pair can be added to only a replication pair-consistent group that replicates in the same direction as the replication pair.
   * *   After replication pairs are added to a replication pair-consistent group, the recovery point objective (RPO) of the group takes effect on the pairs instead of their original RPOs.
   * 
   * @param request - CreateDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiskReplicaGroupResponse
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
   * Creates a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * The replication pair-consistent group feature allows you to batch manage multiple disks in disaster recovery scenarios. You can restore the data of all disks in the same replication pair-consistent group to the same point in time to allow for disaster recovery of instances.
   * Take note of the following items:
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Replication pair-consistent groups can be used to implement disaster recovery across zones within the same region and disaster recovery across regions.
   * *   A replication pair and a replication pair-consistent group can replicate in the same direction if they have the same primary region (production region), primary zone (production zone), secondary region (disaster recovery region), and secondary zone (disaster recovery zone). A replication pair can be added to only a replication pair-consistent group that replicates in the same direction as the replication pair.
   * *   After replication pairs are added to a replication pair-consistent group, the recovery point objective (RPO) of the group takes effect on the pairs instead of their original RPOs.
   * 
   * @param request - CreateDiskReplicaGroupRequest
   * @returns CreateDiskReplicaGroupResponse
   */
  async createDiskReplicaGroup(request: CreateDiskReplicaGroupRequest): Promise<CreateDiskReplicaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Creates a replication pair to asynchronously replicate data between disks.
   * 
   * @remarks
   * Async replication is a feature that protects data across regions by using the data replication capability of Elastic Block Storage (EBS). This feature can be used to asynchronously replicate data from a disk in one region to a disk in another region for disaster recovery purposes. You can use this feature to implement disaster recovery for critical business to protect data in your databases and improve business continuity.
   * Currently, the async replication feature can asynchronously replicate data only between enhanced SSDs (ESSDs). The functionality of disks in replication pairs is limited. You are charged on a subscription basis for the bandwidth that is used by the async replication feature.
   * Before you call this operation, take note of the following items:
   * *   Make sure that the source disk (primary disk) from which to replicate data and the destination disk (secondary disk) to which to replicate data are created. You can call the [CreateDisk](https://help.aliyun.com/document_detail/25513.html) operation to create disks.
   * *   The secondary disk cannot reside the same region as the primary disk. The async replication feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore, US (Silicon Valley), and US (Virginia) regions.
   * *   After you call this operation to create a replication pair, you must call the [StartDiskReplicaPair](https://help.aliyun.com/document_detail/354205.html) operation to enable async replication to periodically replicate data from the primary disk to the secondary disk across regions.
   * 
   * @param request - CreateDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiskReplicaPairResponse
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
   * Creates a replication pair to asynchronously replicate data between disks.
   * 
   * @remarks
   * Async replication is a feature that protects data across regions by using the data replication capability of Elastic Block Storage (EBS). This feature can be used to asynchronously replicate data from a disk in one region to a disk in another region for disaster recovery purposes. You can use this feature to implement disaster recovery for critical business to protect data in your databases and improve business continuity.
   * Currently, the async replication feature can asynchronously replicate data only between enhanced SSDs (ESSDs). The functionality of disks in replication pairs is limited. You are charged on a subscription basis for the bandwidth that is used by the async replication feature.
   * Before you call this operation, take note of the following items:
   * *   Make sure that the source disk (primary disk) from which to replicate data and the destination disk (secondary disk) to which to replicate data are created. You can call the [CreateDisk](https://help.aliyun.com/document_detail/25513.html) operation to create disks.
   * *   The secondary disk cannot reside the same region as the primary disk. The async replication feature is supported in the China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Heyuan), China (Chengdu), China (Hong Kong), Singapore, US (Silicon Valley), and US (Virginia) regions.
   * *   After you call this operation to create a replication pair, you must call the [StartDiskReplicaPair](https://help.aliyun.com/document_detail/354205.html) operation to enable async replication to periodically replicate data from the primary disk to the secondary disk across regions.
   * 
   * @param request - CreateDiskReplicaPairRequest
   * @returns CreateDiskReplicaPairResponse
   */
  async createDiskReplicaPair(request: CreateDiskReplicaPairRequest): Promise<CreateDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Create an enterprise-level snapshot policy
   * 
   * @param tmpReq - CreateEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnterpriseSnapshotPolicyResponse
   */
  async createEnterpriseSnapshotPolicyWithOptions(tmpReq: CreateEnterpriseSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateEnterpriseSnapshotPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateEnterpriseSnapshotPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.crossRegionCopyInfo)) {
      request.crossRegionCopyInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.crossRegionCopyInfo, "CrossRegionCopyInfo", "json");
    }

    if (!Util.isUnset(tmpReq.retainRule)) {
      request.retainRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.retainRule, "RetainRule", "json");
    }

    if (!Util.isUnset(tmpReq.schedule)) {
      request.scheduleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedule, "Schedule", "json");
    }

    if (!Util.isUnset(tmpReq.specialRetainRules)) {
      request.specialRetainRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.specialRetainRules, "SpecialRetainRules", "json");
    }

    if (!Util.isUnset(tmpReq.storageRule)) {
      request.storageRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storageRule, "StorageRule", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.crossRegionCopyInfoShrink)) {
      query["CrossRegionCopyInfo"] = request.crossRegionCopyInfoShrink;
    }

    if (!Util.isUnset(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.retainRuleShrink)) {
      query["RetainRule"] = request.retainRuleShrink;
    }

    if (!Util.isUnset(request.scheduleShrink)) {
      query["Schedule"] = request.scheduleShrink;
    }

    if (!Util.isUnset(request.specialRetainRulesShrink)) {
      query["SpecialRetainRules"] = request.specialRetainRulesShrink;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.storageRuleShrink)) {
      query["StorageRule"] = request.storageRuleShrink;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new CreateEnterpriseSnapshotPolicyResponse({}));
  }

  /**
   * Create an enterprise-level snapshot policy
   * 
   * @param request - CreateEnterpriseSnapshotPolicyRequest
   * @returns CreateEnterpriseSnapshotPolicyResponse
   */
  async createEnterpriseSnapshotPolicy(request: CreateEnterpriseSnapshotPolicyRequest): Promise<CreateEnterpriseSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * Currently, this API is only available for use with ACS resource hosting and is not yet open for direct invocation.
   * 
   * @param request - DeleteDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDiskResponse
   */
  async deleteDiskWithOptions(request: DeleteDiskRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDiskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDisk",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDiskResponse>(await this.callApi(params, req, runtime), new DeleteDiskResponse({}));
  }

  /**
   * @remarks
   * Currently, this API is only available for use with ACS resource hosting and is not yet open for direct invocation.
   * 
   * @param request - DeleteDiskRequest
   * @returns DeleteDiskResponse
   */
  async deleteDisk(request: DeleteDiskRequest): Promise<DeleteDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDiskWithOptions(request, runtime);
  }

  /**
   * Deletes a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Before you can delete a replication pair-consistent group, make sure that no replication pairs exist in the group.
   * *   The replication pair-consistent group that you want to delete must be in the **Created** (`created`), **Creation Failed** (`create_failed`), **Stopped** (`stopped`), **Failovered** (`failovered`), **Deleting** (`deleting`), **Deletion Failed** (`delete_failed`), or **Invalid** (`invalid`) state.
   * 
   * @param request - DeleteDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDiskReplicaGroupResponse
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
   * Deletes a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Before you can delete a replication pair-consistent group, make sure that no replication pairs exist in the group.
   * *   The replication pair-consistent group that you want to delete must be in the **Created** (`created`), **Creation Failed** (`create_failed`), **Stopped** (`stopped`), **Failovered** (`failovered`), **Deleting** (`deleting`), **Deletion Failed** (`delete_failed`), or **Invalid** (`invalid`) state.
   * 
   * @param request - DeleteDiskReplicaGroupRequest
   * @returns DeleteDiskReplicaGroupResponse
   */
  async deleteDiskReplicaGroup(request: DeleteDiskReplicaGroupRequest): Promise<DeleteDiskReplicaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Deletes replication pairs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Stopped** (`stopped`), **Invalid** (`invalid`), or **Failovered** (`failovered`) state can be deleted. This operation deletes only replication pairs. The primary and secondary disks in the deleted replication pairs are retained.
   * *   To delete a replication pair, you must call this operation in the region where the primary disk is located. After the replication pair is deleted, the functionality limits are lifted from the primary and secondary disks. For example, you can attach the secondary disk, resize the disk, or read data from or write data to the disk.
   * 
   * @param request - DeleteDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDiskReplicaPairResponse
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
   * Deletes replication pairs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Stopped** (`stopped`), **Invalid** (`invalid`), or **Failovered** (`failovered`) state can be deleted. This operation deletes only replication pairs. The primary and secondary disks in the deleted replication pairs are retained.
   * *   To delete a replication pair, you must call this operation in the region where the primary disk is located. After the replication pair is deleted, the functionality limits are lifted from the primary and secondary disks. For example, you can attach the secondary disk, resize the disk, or read data from or write data to the disk.
   * 
   * @param request - DeleteDiskReplicaPairRequest
   * @returns DeleteDiskReplicaPairResponse
   */
  async deleteDiskReplicaPair(request: DeleteDiskReplicaPairRequest): Promise<DeleteDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Delete a enterprise-level snapshot policy.
   * 
   * @param request - DeleteEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnterpriseSnapshotPolicyResponse
   */
  async deleteEnterpriseSnapshotPolicyWithOptions(request: DeleteEnterpriseSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteEnterpriseSnapshotPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
      action: "DeleteEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new DeleteEnterpriseSnapshotPolicyResponse({}));
  }

  /**
   * Delete a enterprise-level snapshot policy.
   * 
   * @param request - DeleteEnterpriseSnapshotPolicyRequest
   * @returns DeleteEnterpriseSnapshotPolicyResponse
   */
  async deleteEnterpriseSnapshotPolicy(request: DeleteEnterpriseSnapshotPolicyRequest): Promise<DeleteEnterpriseSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the details of one or more disks in a dedicated block storage cluster.
   * 
   * @remarks
   *   You can use one of the following methods to check the responses:
   *     *   Method 1: Use `NextToken` to configure the query token. Set the value to the `NextToken` value that is returned in the last call to the DescribeDisks operation. Then, use `MaxResults` to specify the maximum number of entries to return on each page.
   *     *   Method 2: Use `PageSize` to specify the number of entries to return on each page and then use `PageNumber` to specify the number of the page to return.
   *         You can use only one of the preceding methods. If a large number of entries are to be returned, we recommend that you use method 1. When `NextToken` is specified, `PageSize` and `PageNumber` do not take effect and `TotalCount` in the response is invalid.
   * *   A disk that has the multi-attach feature enabled can be attached to multiple instances. You can query the attachment information of the disk based on the `Attachment` values in the response.
   * When you call an API operation by using Alibaba Cloud CLI, you must specify request parameter values of different data types in the required formats. For more information, see [Parameter format overview](https://help.aliyun.com/document_detail/110340.html).
   * 
   * @param request - DescribeDedicatedBlockStorageClusterDisksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDedicatedBlockStorageClusterDisksResponse
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
   * Queries the details of one or more disks in a dedicated block storage cluster.
   * 
   * @remarks
   *   You can use one of the following methods to check the responses:
   *     *   Method 1: Use `NextToken` to configure the query token. Set the value to the `NextToken` value that is returned in the last call to the DescribeDisks operation. Then, use `MaxResults` to specify the maximum number of entries to return on each page.
   *     *   Method 2: Use `PageSize` to specify the number of entries to return on each page and then use `PageNumber` to specify the number of the page to return.
   *         You can use only one of the preceding methods. If a large number of entries are to be returned, we recommend that you use method 1. When `NextToken` is specified, `PageSize` and `PageNumber` do not take effect and `TotalCount` in the response is invalid.
   * *   A disk that has the multi-attach feature enabled can be attached to multiple instances. You can query the attachment information of the disk based on the `Attachment` values in the response.
   * When you call an API operation by using Alibaba Cloud CLI, you must specify request parameter values of different data types in the required formats. For more information, see [Parameter format overview](https://help.aliyun.com/document_detail/110340.html).
   * 
   * @param request - DescribeDedicatedBlockStorageClusterDisksRequest
   * @returns DescribeDedicatedBlockStorageClusterDisksResponse
   */
  async describeDedicatedBlockStorageClusterDisks(request: DescribeDedicatedBlockStorageClusterDisksRequest): Promise<DescribeDedicatedBlockStorageClusterDisksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedBlockStorageClusterDisksWithOptions(request, runtime);
  }

  /**
   * Queries the dedicated block storage clusters that are created.
   * 
   * @remarks
   * ## [](#)Usage notes
   * >  The Dedicated Block Storage Cluster feature is available only in the China (Heyuan), Indonesia (Jakarta), and China (Shenzhen) regions.
   * *   You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are included in the filter conditions.
   * *   We recommend that you use NextToken and MaxResults to perform paged queries. We recommend that you use MaxResults to specify the maximum number of entries to return in each request. The return value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. When you call the DescribeDedicatedBlockStorageClusters operation to retrieve a new page of results, set NextToken to the NextToken value that is returned in the previous call and specify MaxResults to limit the number of entries returned.
   * 
   * @param request - DescribeDedicatedBlockStorageClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDedicatedBlockStorageClustersResponse
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
   * Queries the dedicated block storage clusters that are created.
   * 
   * @remarks
   * ## [](#)Usage notes
   * >  The Dedicated Block Storage Cluster feature is available only in the China (Heyuan), Indonesia (Jakarta), and China (Shenzhen) regions.
   * *   You can specify multiple request parameters to be queried. Specified parameters are evaluated by using the AND operator. Only the specified parameters are included in the filter conditions.
   * *   We recommend that you use NextToken and MaxResults to perform paged queries. We recommend that you use MaxResults to specify the maximum number of entries to return in each request. The return value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. When you call the DescribeDedicatedBlockStorageClusters operation to retrieve a new page of results, set NextToken to the NextToken value that is returned in the previous call and specify MaxResults to limit the number of entries returned.
   * 
   * @param request - DescribeDedicatedBlockStorageClustersRequest
   * @returns DescribeDedicatedBlockStorageClustersResponse
   */
  async describeDedicatedBlockStorageClusters(request: DescribeDedicatedBlockStorageClustersRequest): Promise<DescribeDedicatedBlockStorageClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDedicatedBlockStorageClustersWithOptions(request, runtime);
  }

  /**
   * Queries the risk events of a disk.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - DescribeDiskEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskEventsResponse
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
   * Queries the risk events of a disk.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - DescribeDiskEventsRequest
   * @returns DescribeDiskEventsResponse
   */
  async describeDiskEvents(request: DescribeDiskEventsRequest): Promise<DescribeDiskEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskEventsWithOptions(request, runtime);
  }

  /**
   * Queries the near real-time monitoring data of a disk.
   * 
   * @remarks
   * ## Usage notes
   * *   CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * *   Up to 400 monitoring data entries can be returned at a time. An error is returned if the value calculated based on the following formula is greater than 400: `(EndTime - StartTime)/Period`.
   * *   You can query the monitoring data collected in the last three days. An error is returned if the time specified by `StartTime` is more than three days prior to the current time.
   * 
   * @param request - DescribeDiskMonitorDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskMonitorDataResponse
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
   * Queries the near real-time monitoring data of a disk.
   * 
   * @remarks
   * ## Usage notes
   * *   CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * *   Up to 400 monitoring data entries can be returned at a time. An error is returned if the value calculated based on the following formula is greater than 400: `(EndTime - StartTime)/Period`.
   * *   You can query the monitoring data collected in the last three days. An error is returned if the time specified by `StartTime` is more than three days prior to the current time.
   * 
   * @param request - DescribeDiskMonitorDataRequest
   * @returns DescribeDiskMonitorDataResponse
   */
  async describeDiskMonitorData(request: DescribeDiskMonitorDataRequest): Promise<DescribeDiskMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskMonitorDataWithOptions(request, runtime);
  }

  /**
   * Queries the near real-time monitoring data of disks. You can query only the burst performance data of ESSD AutoPL disks. The data is aggregated by hour.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - DescribeDiskMonitorDataListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskMonitorDataListResponse
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
   * Queries the near real-time monitoring data of disks. You can query only the burst performance data of ESSD AutoPL disks. The data is aggregated by hour.
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - DescribeDiskMonitorDataListRequest
   * @returns DescribeDiskMonitorDataListResponse
   */
  async describeDiskMonitorDataList(request: DescribeDiskMonitorDataListRequest): Promise<DescribeDiskMonitorDataListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskMonitorDataListWithOptions(request, runtime);
  }

  /**
   * Queries the details of one or more replication pair-consistent groups in a specific region.
   * 
   * @remarks
   * To perform a paged query, set the MaxResults and NextToken parameters.
   * During a paged query, when you call the DescribeDiskReplicaGroups operation to retrieve the first page of results, set `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaGroups operation to retrieve a new page of results, set `NextToken` to the `NextToken` value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
   * 
   * @param request - DescribeDiskReplicaGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskReplicaGroupsResponse
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

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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
   * Queries the details of one or more replication pair-consistent groups in a specific region.
   * 
   * @remarks
   * To perform a paged query, set the MaxResults and NextToken parameters.
   * During a paged query, when you call the DescribeDiskReplicaGroups operation to retrieve the first page of results, set `MaxResults` to specify the maximum number of entries to return in the call. The return value of `NextToken` is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaGroups operation to retrieve a new page of results, set `NextToken` to the `NextToken` value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
   * 
   * @param request - DescribeDiskReplicaGroupsRequest
   * @returns DescribeDiskReplicaGroupsResponse
   */
  async describeDiskReplicaGroups(request: DescribeDiskReplicaGroupsRequest): Promise<DescribeDiskReplicaGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskReplicaGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the replication progress of a replication pair.
   * 
   * @param request - DescribeDiskReplicaPairProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskReplicaPairProgressResponse
   */
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

  /**
   * Queries the replication progress of a replication pair.
   * 
   * @param request - DescribeDiskReplicaPairProgressRequest
   * @returns DescribeDiskReplicaPairProgressResponse
   */
  async describeDiskReplicaPairProgress(request: DescribeDiskReplicaPairProgressRequest): Promise<DescribeDiskReplicaPairProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskReplicaPairProgressWithOptions(request, runtime);
  }

  /**
   * Queries information about replication pairs in a region.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   When you call this operation for a specific region, if the primary disk (source disk) or secondary disk (destination disk) of a replication pair resides in the region, information about the replication pair is displayed in the response.
   * *   If you want to perform a paged query, configure the `NextToken` and `MaxResults` parameters. During a paged query, when you call the DescribeDiskReplicaPairs operation to retrieve the first page of results, set `MaxResults` to limit the maximum number of entries to return in the call. The return value of NextToken is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaPairs operation to retrieve a new page of results, set NextToken to the NextToken value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
   * 
   * @param request - DescribeDiskReplicaPairsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiskReplicaPairsResponse
   */
  async describeDiskReplicaPairsWithOptions(request: DescribeDiskReplicaPairsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDiskReplicaPairsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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
   * Queries information about replication pairs in a region.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   When you call this operation for a specific region, if the primary disk (source disk) or secondary disk (destination disk) of a replication pair resides in the region, information about the replication pair is displayed in the response.
   * *   If you want to perform a paged query, configure the `NextToken` and `MaxResults` parameters. During a paged query, when you call the DescribeDiskReplicaPairs operation to retrieve the first page of results, set `MaxResults` to limit the maximum number of entries to return in the call. The return value of NextToken is a pagination token, which can be used in the next call to retrieve a new page of results. When you call the DescribeDiskReplicaPairs operation to retrieve a new page of results, set NextToken to the NextToken value returned in the previous call and set MaxResults to specify the maximum number of entries to return in this call.
   * 
   * @param request - DescribeDiskReplicaPairsRequest
   * @returns DescribeDiskReplicaPairsResponse
   */
  async describeDiskReplicaPairs(request: DescribeDiskReplicaPairsRequest): Promise<DescribeDiskReplicaPairsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDiskReplicaPairsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDisksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDisksResponse
   */
  async describeDisksWithOptions(request: DescribeDisksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDisksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.diskIds)) {
      query["DiskIds"] = request.diskIds;
    }

    if (!Util.isUnset(request.diskName)) {
      query["DiskName"] = request.diskName;
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

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDisks",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDisksResponse>(await this.callApi(params, req, runtime), new DescribeDisksResponse({}));
  }

  /**
   * @param request - DescribeDisksRequest
   * @returns DescribeDisksResponse
   */
  async describeDisks(request: DescribeDisksRequest): Promise<DescribeDisksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDisksWithOptions(request, runtime);
  }

  /**
   * Queries the information about enterprise-level snapshot policies. When you call this operation, you can specify parameters, such as PolicyIds, ResourceGroupId, and Tag, in the request.
   * 
   * @param request - DescribeEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnterpriseSnapshotPolicyResponse
   */
  async describeEnterpriseSnapshotPolicyWithOptions(request: DescribeEnterpriseSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEnterpriseSnapshotPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.diskIds)) {
      query["DiskIds"] = request.diskIds;
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

    if (!Util.isUnset(request.policyIds)) {
      query["PolicyIds"] = request.policyIds;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new DescribeEnterpriseSnapshotPolicyResponse({}));
  }

  /**
   * Queries the information about enterprise-level snapshot policies. When you call this operation, you can specify parameters, such as PolicyIds, ResourceGroupId, and Tag, in the request.
   * 
   * @param request - DescribeEnterpriseSnapshotPolicyRequest
   * @returns DescribeEnterpriseSnapshotPolicyResponse
   */
  async describeEnterpriseSnapshotPolicy(request: DescribeEnterpriseSnapshotPolicyRequest): Promise<DescribeEnterpriseSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the risk events of a disk.
   * 
   * @param request - DescribeEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventsResponse
   */
  async describeEventsWithOptions(request: DescribeEventsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeEventsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventName)) {
      query["EventName"] = request.eventName;
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

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeEvents",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeEventsResponse>(await this.callApi(params, req, runtime), new DescribeEventsResponse({}));
  }

  /**
   * Queries the risk events of a disk.
   * 
   * @param request - DescribeEventsRequest
   * @returns DescribeEventsResponse
   */
  async describeEvents(request: DescribeEventsRequest): Promise<DescribeEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeEventsWithOptions(request, runtime);
  }

  /**
   * Queries one or more Elastic Block Storage (EBS) devices that you created.
   * 
   * @param request - DescribeLensMonitorDisksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLensMonitorDisksResponse
   */
  async describeLensMonitorDisksWithOptions(request: DescribeLensMonitorDisksRequest, runtime: $Util.RuntimeOptions): Promise<DescribeLensMonitorDisksResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.diskCategory)) {
      query["DiskCategory"] = request.diskCategory;
    }

    if (!Util.isUnset(request.diskIds)) {
      query["DiskIds"] = request.diskIds;
    }

    if (!Util.isUnset(request.lensTags)) {
      query["LensTags"] = request.lensTags;
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
      action: "DescribeLensMonitorDisks",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeLensMonitorDisksResponse>(await this.callApi(params, req, runtime), new DescribeLensMonitorDisksResponse({}));
  }

  /**
   * Queries one or more Elastic Block Storage (EBS) devices that you created.
   * 
   * @param request - DescribeLensMonitorDisksRequest
   * @returns DescribeLensMonitorDisksResponse
   */
  async describeLensMonitorDisks(request: DescribeLensMonitorDisksRequest): Promise<DescribeLensMonitorDisksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLensMonitorDisksWithOptions(request, runtime);
  }

  /**
   * 查询用户开通ebs数据洞察服务状态
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * 
   * @param request - DescribeLensServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLensServiceStatusResponse
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
   * 查询用户开通ebs数据洞察服务状态
   * 
   * @remarks
   * ## Usage notes
   * CloudLens for EBS is in invitational preview in the China (Hangzhou), China (Shanghai), China (Zhangjiakou), China (Shenzhen), and China (Hong Kong) regions. To use the feature, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
   * @returns DescribeLensServiceStatusResponse
   */
  async describeLensServiceStatus(): Promise<DescribeLensServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeLensServiceStatusWithOptions(runtime);
  }

  /**
   * Queries the statistics about a metric of Elastic Block Storage (EBS) disks.
   * 
   * @param request - DescribeMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricDataResponse
   */
  async describeMetricDataWithOptions(request: DescribeMetricDataRequest, runtime: $Util.RuntimeOptions): Promise<DescribeMetricDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.metricName)) {
      query["MetricName"] = request.metricName;
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
      action: "DescribeMetricData",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeMetricDataResponse>(await this.callApi(params, req, runtime), new DescribeMetricDataResponse({}));
  }

  /**
   * Queries the statistics about a metric of Elastic Block Storage (EBS) disks.
   * 
   * @param request - DescribeMetricDataRequest
   * @returns DescribeMetricDataResponse
   */
  async describeMetricData(request: DescribeMetricDataRequest): Promise<DescribeMetricDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeMetricDataWithOptions(request, runtime);
  }

  /**
   * Queries the disaster recovery drills that were performed on the replication pair whose secondary disk resides in a specific region.
   * 
   * @param request - DescribePairDrillsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePairDrillsResponse
   */
  async describePairDrillsWithOptions(request: DescribePairDrillsRequest, runtime: $Util.RuntimeOptions): Promise<DescribePairDrillsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drillId)) {
      query["DrillId"] = request.drillId;
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

    if (!Util.isUnset(request.pairId)) {
      query["PairId"] = request.pairId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePairDrills",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePairDrillsResponse>(await this.callApi(params, req, runtime), new DescribePairDrillsResponse({}));
  }

  /**
   * Queries the disaster recovery drills that were performed on the replication pair whose secondary disk resides in a specific region.
   * 
   * @param request - DescribePairDrillsRequest
   * @returns DescribePairDrillsResponse
   */
  async describePairDrills(request: DescribePairDrillsRequest): Promise<DescribePairDrillsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePairDrillsWithOptions(request, runtime);
  }

  /**
   * Queries the details of regions in which Elastic Block Storage (EBS) features (such as async replication, CloudLens for EBS, and Dedicated Block Storage Cluster) are supported.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
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

  /**
   * Queries the details of regions in which Elastic Block Storage (EBS) features (such as async replication, CloudLens for EBS, and Dedicated Block Storage Cluster) are supported.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the disaster recovery drills that were performed on the replication pair-consistent group whose secondary disk resides in a specific region.
   * 
   * @param request - DescribeReplicaGroupDrillsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeReplicaGroupDrillsResponse
   */
  async describeReplicaGroupDrillsWithOptions(request: DescribeReplicaGroupDrillsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeReplicaGroupDrillsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.drillId)) {
      query["DrillId"] = request.drillId;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
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

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeReplicaGroupDrills",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeReplicaGroupDrillsResponse>(await this.callApi(params, req, runtime), new DescribeReplicaGroupDrillsResponse({}));
  }

  /**
   * Queries the disaster recovery drills that were performed on the replication pair-consistent group whose secondary disk resides in a specific region.
   * 
   * @param request - DescribeReplicaGroupDrillsRequest
   * @returns DescribeReplicaGroupDrillsResponse
   */
  async describeReplicaGroupDrills(request: DescribeReplicaGroupDrillsRequest): Promise<DescribeReplicaGroupDrillsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeReplicaGroupDrillsWithOptions(request, runtime);
  }

  /**
   * 查询解决方案实例默认配置
   * 
   * @param request - DescribeSolutionInstanceConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSolutionInstanceConfigurationResponse
   */
  async describeSolutionInstanceConfigurationWithOptions(request: DescribeSolutionInstanceConfigurationRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSolutionInstanceConfigurationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.solutionId)) {
      query["SolutionId"] = request.solutionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSolutionInstanceConfiguration",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeSolutionInstanceConfigurationResponse>(await this.callApi(params, req, runtime), new DescribeSolutionInstanceConfigurationResponse({}));
  }

  /**
   * 查询解决方案实例默认配置
   * 
   * @param request - DescribeSolutionInstanceConfigurationRequest
   * @returns DescribeSolutionInstanceConfigurationResponse
   */
  async describeSolutionInstanceConfiguration(request: DescribeSolutionInstanceConfigurationRequest): Promise<DescribeSolutionInstanceConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSolutionInstanceConfigurationWithOptions(request, runtime);
  }

  /**
   * Enables the failover feature for replication pairs in a replication pair-consistent group. When the primary disks of specific replication pairs in a replication pair-consistent group fail, you can call this operation to enable the read and write permissions on the secondary disks.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group must be in the **One-time Syncing** (`manual_syncing`), **Syncing** (`syncing`), **Normal** (`normal`), **Stopping** (`stopping`), **Stop Failed** (`stop_failed`), **Stopped** (`stopped`), **In Failover** (`failovering`), **Failover Failed** (`failover_failed`), or **Failovered** (`failovered`) state.
   * *   After a failover is performed, the replication pair-consistent group enters the **Failovered** (`failovered`) state.
   * *   Before you perform a failover, make sure that the first full data synchronization is completed between the primary site and secondary site.
   * 
   * @param request - FailoverDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FailoverDiskReplicaGroupResponse
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
   * Enables the failover feature for replication pairs in a replication pair-consistent group. When the primary disks of specific replication pairs in a replication pair-consistent group fail, you can call this operation to enable the read and write permissions on the secondary disks.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group must be in the **One-time Syncing** (`manual_syncing`), **Syncing** (`syncing`), **Normal** (`normal`), **Stopping** (`stopping`), **Stop Failed** (`stop_failed`), **Stopped** (`stopped`), **In Failover** (`failovering`), **Failover Failed** (`failover_failed`), or **Failovered** (`failovered`) state.
   * *   After a failover is performed, the replication pair-consistent group enters the **Failovered** (`failovered`) state.
   * *   Before you perform a failover, make sure that the first full data synchronization is completed between the primary site and secondary site.
   * 
   * @param request - FailoverDiskReplicaGroupRequest
   * @returns FailoverDiskReplicaGroupResponse
   */
  async failoverDiskReplicaGroup(request: FailoverDiskReplicaGroupRequest): Promise<FailoverDiskReplicaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.failoverDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Enables the failover feature for replication pairs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair for which you want to enable failover cannot be in the **Invalid** (`invalid`) or **Deleted** (`deleted`) state.
   * *   After a failover is performed, the replication pair enters the **Failovered** (`failovered`) state.
   * 
   * @param request - FailoverDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FailoverDiskReplicaPairResponse
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
   * Enables the failover feature for replication pairs.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair for which you want to enable failover cannot be in the **Invalid** (`invalid`) or **Deleted** (`deleted`) state.
   * *   After a failover is performed, the replication pair enters the **Failovered** (`failovered`) state.
   * 
   * @param request - FailoverDiskReplicaPairRequest
   * @returns FailoverDiskReplicaPairResponse
   */
  async failoverDiskReplicaPair(request: FailoverDiskReplicaPairRequest): Promise<FailoverDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.failoverDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * @param request - GetDiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDiskResponse
   */
  async getDiskWithOptions(request: GetDiskRequest, runtime: $Util.RuntimeOptions): Promise<GetDiskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.diskId)) {
      query["DiskId"] = request.diskId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDisk",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDiskResponse>(await this.callApi(params, req, runtime), new GetDiskResponse({}));
  }

  /**
   * @param request - GetDiskRequest
   * @returns GetDiskResponse
   */
  async getDisk(request: GetDiskRequest): Promise<GetDiskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDiskWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to one or more Elastic Block Storage (EBS) resources, or queries the IDs and tags of resources in a specified non-default resource group.
   * 
   * @remarks
   * Specify at least one of the following parameters or parameter pairs in a request to determine a query object:
   * *   `ResourceId.N`
   * *   `Tag.N` parameter pair (`Tag.N.Key` and `Tag.N.Value`)
   * If you set `Tag.N` and `ResourceId.N` at the same time, the EBS resources that match both the parameters are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
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
   * Queries the tags that are added to one or more Elastic Block Storage (EBS) resources, or queries the IDs and tags of resources in a specified non-default resource group.
   * 
   * @remarks
   * Specify at least one of the following parameters or parameter pairs in a request to determine a query object:
   * *   `ResourceId.N`
   * *   `Tag.N` parameter pair (`Tag.N.Key` and `Tag.N.Value`)
   * If you set `Tag.N` and `ResourceId.N` at the same time, the EBS resources that match both the parameters are returned.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * 修改专属集群属性OpenApi
   * 
   * @remarks
   * You can call this operation to modify the information of a dedicated block storage cluster. The information includes the name and description of the cluster.
   * 
   * @param request - ModifyDedicatedBlockStorageClusterAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDedicatedBlockStorageClusterAttributeResponse
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
   * 修改专属集群属性OpenApi
   * 
   * @remarks
   * You can call this operation to modify the information of a dedicated block storage cluster. The information includes the name and description of the cluster.
   * 
   * @param request - ModifyDedicatedBlockStorageClusterAttributeRequest
   * @returns ModifyDedicatedBlockStorageClusterAttributeResponse
   */
  async modifyDedicatedBlockStorageClusterAttribute(request: ModifyDedicatedBlockStorageClusterAttributeRequest): Promise<ModifyDedicatedBlockStorageClusterAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDedicatedBlockStorageClusterAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the name, description, or recovery point objective (RPO) of a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group must be in the **Created** (`created`) or **Stopped** (`stopped`) state.
   * 
   * @param request - ModifyDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskReplicaGroupResponse
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
   * Modifies the name, description, or recovery point objective (RPO) of a replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group must be in the **Created** (`created`) or **Stopped** (`stopped`) state.
   * 
   * @param request - ModifyDiskReplicaGroupRequest
   * @returns ModifyDiskReplicaGroupResponse
   */
  async modifyDiskReplicaGroup(request: ModifyDiskReplicaGroupRequest): Promise<ModifyDiskReplicaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Modifies a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Created** (`created`) or **Stopped** (`stopped`) state can have their names or descriptions modified.
   * 
   * @param request - ModifyDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDiskReplicaPairResponse
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
   * Modifies a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Created** (`created`) or **Stopped** (`stopped`) state can have their names or descriptions modified.
   * 
   * @param request - ModifyDiskReplicaPairRequest
   * @returns ModifyDiskReplicaPairResponse
   */
  async modifyDiskReplicaPair(request: ModifyDiskReplicaPairRequest): Promise<ModifyDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Query the throughput status of a dedicated block storage cluster disk which has been set through the SetDedicatedBlockStorageClusterDiskThroughput API.
   * 
   * @param request - QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse
   */
  async queryDedicatedBlockStorageClusterDiskThroughputStatusWithOptions(request: QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qosRequestId)) {
      body["QosRequestId"] = request.qosRequestId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryDedicatedBlockStorageClusterDiskThroughputStatus",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse>(await this.callApi(params, req, runtime), new QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse({}));
  }

  /**
   * Query the throughput status of a dedicated block storage cluster disk which has been set through the SetDedicatedBlockStorageClusterDiskThroughput API.
   * 
   * @param request - QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest
   * @returns QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse
   */
  async queryDedicatedBlockStorageClusterDiskThroughputStatus(request: QueryDedicatedBlockStorageClusterDiskThroughputStatusRequest): Promise<QueryDedicatedBlockStorageClusterDiskThroughputStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDedicatedBlockStorageClusterDiskThroughputStatusWithOptions(request, runtime);
  }

  /**
   * Query dedicated block storage cluster capacity trend data, includ available capacity size and total capacity size.
   * 
   * @remarks
   * Period is the time interval between data retrieval points. When set to 60 (minute interval), a maximum of 1440 data points can be returned; when set to 3600 (hour interval), a maximum of 744 data points can be returned; and when set to 86400 (day interval), a maximum of 366 data points can be returned.
   * 
   * @param request - QueryDedicatedBlockStorageClusterInventoryDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDedicatedBlockStorageClusterInventoryDataResponse
   */
  async queryDedicatedBlockStorageClusterInventoryDataWithOptions(request: QueryDedicatedBlockStorageClusterInventoryDataRequest, runtime: $Util.RuntimeOptions): Promise<QueryDedicatedBlockStorageClusterInventoryDataResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dbscId)) {
      body["DbscId"] = request.dbscId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.period)) {
      body["Period"] = request.period;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryDedicatedBlockStorageClusterInventoryData",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryDedicatedBlockStorageClusterInventoryDataResponse>(await this.callApi(params, req, runtime), new QueryDedicatedBlockStorageClusterInventoryDataResponse({}));
  }

  /**
   * Query dedicated block storage cluster capacity trend data, includ available capacity size and total capacity size.
   * 
   * @remarks
   * Period is the time interval between data retrieval points. When set to 60 (minute interval), a maximum of 1440 data points can be returned; when set to 3600 (hour interval), a maximum of 744 data points can be returned; and when set to 86400 (day interval), a maximum of 366 data points can be returned.
   * 
   * @param request - QueryDedicatedBlockStorageClusterInventoryDataRequest
   * @returns QueryDedicatedBlockStorageClusterInventoryDataResponse
   */
  async queryDedicatedBlockStorageClusterInventoryData(request: QueryDedicatedBlockStorageClusterInventoryDataRequest): Promise<QueryDedicatedBlockStorageClusterInventoryDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDedicatedBlockStorageClusterInventoryDataWithOptions(request, runtime);
  }

  /**
   * Removes a replication pair from a replication pair-consistent group. After a replication pair is removed from a replication pair-consistent group, the pair is disassociated from the group but is not deleted.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group from which you want to remove a replication pair must be in the **Created** (`created`), **Stopped** (`stopped`), or **Invalid** (`invalid`) state.
   * 
   * @param request - RemoveDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDiskReplicaPairResponse
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
   * Removes a replication pair from a replication pair-consistent group. After a replication pair is removed from a replication pair-consistent group, the pair is disassociated from the group but is not deleted.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group from which you want to remove a replication pair must be in the **Created** (`created`), **Stopped** (`stopped`), or **Invalid** (`invalid`) state.
   * 
   * @param request - RemoveDiskReplicaPairRequest
   * @returns RemoveDiskReplicaPairResponse
   */
  async removeDiskReplicaPair(request: RemoveDiskReplicaPairRequest): Promise<RemoveDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Enables the reverse replication feature for replication pairs that belong to a replication pair-consistent group. After reverse replication is enabled, data stored on the original secondary disks is replicated to the original primary disks. When a reverse replication is being performed, the primary and secondary sites of the replication pair-consistent group remain unchanged, but data is replicated from the secondary site to the primary site.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group for which you want to enable reverse replication must be in the **Failovered** (`failovered`) state. You can call the `FailoverDiskReplicaPair` operation to enable failover.
   * *   Before a reverse replication is performed, the primary disks must be detached from its associated Elastic Compute Service (ECS) instance and must be in the Unattached state. You can call the [DetachDisk](https://help.aliyun.com/document_detail/25516.html) operation to detach the disks.
   * *   After you enable reverse replication, you must call the `StartDiskReplicaPair` operation again to enable the async replication feature before data can be replicated from the original secondary disks to the original primary disks.
   * *   You can set the ReverseReplicate parameter to false to cancel the **Failovered** (`failovered`) state and restore the original replication direction.
   * 
   * @param request - ReprotectDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReprotectDiskReplicaGroupResponse
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

    if (!Util.isUnset(request.reverseReplicate)) {
      query["ReverseReplicate"] = request.reverseReplicate;
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
   * Enables the reverse replication feature for replication pairs that belong to a replication pair-consistent group. After reverse replication is enabled, data stored on the original secondary disks is replicated to the original primary disks. When a reverse replication is being performed, the primary and secondary sites of the replication pair-consistent group remain unchanged, but data is replicated from the secondary site to the primary site.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group for which you want to enable reverse replication must be in the **Failovered** (`failovered`) state. You can call the `FailoverDiskReplicaPair` operation to enable failover.
   * *   Before a reverse replication is performed, the primary disks must be detached from its associated Elastic Compute Service (ECS) instance and must be in the Unattached state. You can call the [DetachDisk](https://help.aliyun.com/document_detail/25516.html) operation to detach the disks.
   * *   After you enable reverse replication, you must call the `StartDiskReplicaPair` operation again to enable the async replication feature before data can be replicated from the original secondary disks to the original primary disks.
   * *   You can set the ReverseReplicate parameter to false to cancel the **Failovered** (`failovered`) state and restore the original replication direction.
   * 
   * @param request - ReprotectDiskReplicaGroupRequest
   * @returns ReprotectDiskReplicaGroupResponse
   */
  async reprotectDiskReplicaGroup(request: ReprotectDiskReplicaGroupRequest): Promise<ReprotectDiskReplicaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reprotectDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Enables the reverse replication feature for a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair for which you want to enable reverse replication must be in the **Failovered** (`failovered`) state. You can call the [FailoverDiskReplicaPair](https://help.aliyun.com/document_detail/354358.html) operation to enable failover.
   * *   The primary disk must be detached from its associated Elastic Compute Service (ECS) instance and is in the Unattached state. You can call the [DetachDisk](https://help.aliyun.com/document_detail/25516.html) operation to detach the disk.
   * *   After you enable reverse replication, you must call the [StartDiskReplicaPair](https://help.aliyun.com/document_detail/354205.html) operation again to activate the replication pair before data can be replicated from the original secondary disk to the original primary disk.
   * *   You can set the ReverseReplicate parameter to false to cancel the **Failovered** (`failovered`) state and restore the original replication direction.
   * 
   * @param request - ReprotectDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReprotectDiskReplicaPairResponse
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

    if (!Util.isUnset(request.reverseReplicate)) {
      query["ReverseReplicate"] = request.reverseReplicate;
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
   * Enables the reverse replication feature for a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair for which you want to enable reverse replication must be in the **Failovered** (`failovered`) state. You can call the [FailoverDiskReplicaPair](https://help.aliyun.com/document_detail/354358.html) operation to enable failover.
   * *   The primary disk must be detached from its associated Elastic Compute Service (ECS) instance and is in the Unattached state. You can call the [DetachDisk](https://help.aliyun.com/document_detail/25516.html) operation to detach the disk.
   * *   After you enable reverse replication, you must call the [StartDiskReplicaPair](https://help.aliyun.com/document_detail/354205.html) operation again to activate the replication pair before data can be replicated from the original secondary disk to the original primary disk.
   * *   You can set the ReverseReplicate parameter to false to cancel the **Failovered** (`failovered`) state and restore the original replication direction.
   * 
   * @param request - ReprotectDiskReplicaPairRequest
   * @returns ReprotectDiskReplicaPairResponse
   */
  async reprotectDiskReplicaPair(request: ReprotectDiskReplicaPairRequest): Promise<ReprotectDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reprotectDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * In the elastic type dedicated block storage cluster, you can easily achieve the specified throughput (Bps) for the target disk. You only need to set the cloud disk ID and the target throughput, simplifying the process of configuring.
   * 
   * @param request - SetDedicatedBlockStorageClusterDiskThroughputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDedicatedBlockStorageClusterDiskThroughputResponse
   */
  async setDedicatedBlockStorageClusterDiskThroughputWithOptions(request: SetDedicatedBlockStorageClusterDiskThroughputRequest, runtime: $Util.RuntimeOptions): Promise<SetDedicatedBlockStorageClusterDiskThroughputResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bps)) {
      body["Bps"] = request.bps;
    }

    if (!Util.isUnset(request.diskId)) {
      body["DiskId"] = request.diskId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SetDedicatedBlockStorageClusterDiskThroughput",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetDedicatedBlockStorageClusterDiskThroughputResponse>(await this.callApi(params, req, runtime), new SetDedicatedBlockStorageClusterDiskThroughputResponse({}));
  }

  /**
   * In the elastic type dedicated block storage cluster, you can easily achieve the specified throughput (Bps) for the target disk. You only need to set the cloud disk ID and the target throughput, simplifying the process of configuring.
   * 
   * @param request - SetDedicatedBlockStorageClusterDiskThroughputRequest
   * @returns SetDedicatedBlockStorageClusterDiskThroughputResponse
   */
  async setDedicatedBlockStorageClusterDiskThroughput(request: SetDedicatedBlockStorageClusterDiskThroughputRequest): Promise<SetDedicatedBlockStorageClusterDiskThroughputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDedicatedBlockStorageClusterDiskThroughputWithOptions(request, runtime);
  }

  /**
   * Enables the async replication feature for replication pairs that belong to a replication pair-consistent group. When the async replication feature is enabled for the pairs for the first time, the system first performs a full synchronization to synchronize all data from disks at the primary site (primary disks) to disks at the secondary site (secondary disks) and then periodically synchronizes incremental data based on the recovery point objective (RPO) of the replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   If you set the `OneShot` to `false`, the replication pair-consistent group must be in the **Created** (`created` ), **Synchronizing** (`syncing` ), **Normal** (`normal` ), or **Stopped** (`stopped`) state.
   * *   If you set `OneShot` to `true`, the replication pair-consistent group must be in the **Created** (`created` ), **One-time Syncing** (`manual_syncing` ), or **Stopped** (`stopped`) state. The time interval between two consecutive one-time synchronizations must be longer than one half of the recovery point objective (RPO).
   * *   After a replication pair-consistent group is activated, the group enters the **Initial Syncing** (`initial_syncing`) state and the system performs the first async replication to replicate all data from the primary disks to secondary disks.
   * 
   * @param request - StartDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDiskReplicaGroupResponse
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
   * Enables the async replication feature for replication pairs that belong to a replication pair-consistent group. When the async replication feature is enabled for the pairs for the first time, the system first performs a full synchronization to synchronize all data from disks at the primary site (primary disks) to disks at the secondary site (secondary disks) and then periodically synchronizes incremental data based on the recovery point objective (RPO) of the replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   If you set the `OneShot` to `false`, the replication pair-consistent group must be in the **Created** (`created` ), **Synchronizing** (`syncing` ), **Normal** (`normal` ), or **Stopped** (`stopped`) state.
   * *   If you set `OneShot` to `true`, the replication pair-consistent group must be in the **Created** (`created` ), **One-time Syncing** (`manual_syncing` ), or **Stopped** (`stopped`) state. The time interval between two consecutive one-time synchronizations must be longer than one half of the recovery point objective (RPO).
   * *   After a replication pair-consistent group is activated, the group enters the **Initial Syncing** (`initial_syncing`) state and the system performs the first async replication to replicate all data from the primary disks to secondary disks.
   * 
   * @param request - StartDiskReplicaGroupRequest
   * @returns StartDiskReplicaGroupResponse
   */
  async startDiskReplicaGroup(request: StartDiskReplicaGroupRequest): Promise<StartDiskReplicaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Activates a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Created** (`created`) or **Stopped** (`stopped`) state can be activated.
   * *   After a replication pair is activated, it enters the **Initial Syncing** (`initial_syncing`) state and the system performs the first asynchronous replication to replicate all data from the primary disk to the secondary disk.
   * 
   * @param request - StartDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDiskReplicaPairResponse
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
   * Activates a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Created** (`created`) or **Stopped** (`stopped`) state can be activated.
   * *   After a replication pair is activated, it enters the **Initial Syncing** (`initial_syncing`) state and the system performs the first asynchronous replication to replicate all data from the primary disk to the secondary disk.
   * 
   * @param request - StartDiskReplicaPairRequest
   * @returns StartDiskReplicaPairResponse
   */
  async startDiskReplicaPair(request: StartDiskReplicaPairRequest): Promise<StartDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Starts a disaster recovery drill to ensure the continued replication and clone the data from the last recovery point of the secondary disk to a new disk. This helps you test the completeness and correctness of applications that are deployed on the disaster recovery site on a regular basis.
   * 
   * @remarks
   * After the disaster recovery drill is complete on the secondary disk, a pay-as-you-go drill disk that has the same capacity and category as the secondary disk is created in the zone where the secondary disk resides. The drill disk contains last-recovery-point data that can be used to test the completeness and correctness of applications.
   * 
   * @param request - StartPairDrillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartPairDrillResponse
   */
  async startPairDrillWithOptions(request: StartPairDrillRequest, runtime: $Util.RuntimeOptions): Promise<StartPairDrillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.pairId)) {
      query["PairId"] = request.pairId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartPairDrill",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartPairDrillResponse>(await this.callApi(params, req, runtime), new StartPairDrillResponse({}));
  }

  /**
   * Starts a disaster recovery drill to ensure the continued replication and clone the data from the last recovery point of the secondary disk to a new disk. This helps you test the completeness and correctness of applications that are deployed on the disaster recovery site on a regular basis.
   * 
   * @remarks
   * After the disaster recovery drill is complete on the secondary disk, a pay-as-you-go drill disk that has the same capacity and category as the secondary disk is created in the zone where the secondary disk resides. The drill disk contains last-recovery-point data that can be used to test the completeness and correctness of applications.
   * 
   * @param request - StartPairDrillRequest
   * @returns StartPairDrillResponse
   */
  async startPairDrill(request: StartPairDrillRequest): Promise<StartPairDrillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startPairDrillWithOptions(request, runtime);
  }

  /**
   * Starts a disaster recovery drill in a replication pair-consistent group to ensure the continued replication and restores data from the latest recovery point of secondary disks to new disks. This helps test the completeness and correctness of applications that are deployed on the disaster recovery site on a regular basis.
   * 
   * @remarks
   * After the disaster recovery drill is complete on secondary disks, a pay-as-you-go drill disk is created in the zone where the secondary disk of each replication pair resides. The latest-recovery-point data is restored to the drill disks to test the completeness and correctness of applications.
   * 
   * @param request - StartReplicaGroupDrillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartReplicaGroupDrillResponse
   */
  async startReplicaGroupDrillWithOptions(request: StartReplicaGroupDrillRequest, runtime: $Util.RuntimeOptions): Promise<StartReplicaGroupDrillResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartReplicaGroupDrill",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartReplicaGroupDrillResponse>(await this.callApi(params, req, runtime), new StartReplicaGroupDrillResponse({}));
  }

  /**
   * Starts a disaster recovery drill in a replication pair-consistent group to ensure the continued replication and restores data from the latest recovery point of secondary disks to new disks. This helps test the completeness and correctness of applications that are deployed on the disaster recovery site on a regular basis.
   * 
   * @remarks
   * After the disaster recovery drill is complete on secondary disks, a pay-as-you-go drill disk is created in the zone where the secondary disk of each replication pair resides. The latest-recovery-point data is restored to the drill disks to test the completeness and correctness of applications.
   * 
   * @param request - StartReplicaGroupDrillRequest
   * @returns StartReplicaGroupDrillResponse
   */
  async startReplicaGroupDrill(request: StartReplicaGroupDrillRequest): Promise<StartReplicaGroupDrillResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startReplicaGroupDrillWithOptions(request, runtime);
  }

  /**
   * Stops a replication pair-consistent group. This operation stops all replication pairs in the replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group that you want to stop must be in the **One-time Syncing** (`manual_syncing`), **Syncing** (`syncing`), **Normal** (`normal`), **Stopping** (`stopping`), **Stop Failed** (`stop_failed`), or **Stopped** (`stopped`) state.
   * *   When a replication pair-consistent group is stopped, it enters the **Stopped** (`stopped`) state. If a replication pair-consistent group cannot be stopped, the state of the group remains unchanged or changes to **Stop Failed** (`stop_failed`). In this case, try again later.
   * 
   * @param request - StopDiskReplicaGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDiskReplicaGroupResponse
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
   * Stops a replication pair-consistent group. This operation stops all replication pairs in the replication pair-consistent group.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which the replication pair-consistent group feature is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   The replication pair-consistent group that you want to stop must be in the **One-time Syncing** (`manual_syncing`), **Syncing** (`syncing`), **Normal** (`normal`), **Stopping** (`stopping`), **Stop Failed** (`stop_failed`), or **Stopped** (`stopped`) state.
   * *   When a replication pair-consistent group is stopped, it enters the **Stopped** (`stopped`) state. If a replication pair-consistent group cannot be stopped, the state of the group remains unchanged or changes to **Stop Failed** (`stop_failed`). In this case, try again later.
   * 
   * @param request - StopDiskReplicaGroupRequest
   * @returns StopDiskReplicaGroupResponse
   */
  async stopDiskReplicaGroup(request: StopDiskReplicaGroupRequest): Promise<StopDiskReplicaGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDiskReplicaGroupWithOptions(request, runtime);
  }

  /**
   * Stops a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Initial Syncing** (`initial_syncing`), **Syncing** (`syncing`), **One-time Syncing** (`manual_syncing`), or **Normal** (`normal`) state can be stopped. When a replication pair is stopped, it enters the Stopped (`stopped`) state. The secondary disk rolls back to the point in time when the last async replication was complete and drops all the data that is being replicated from the primary disk.
   * 
   * @param request - StopDiskReplicaPairRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDiskReplicaPairResponse
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
   * Stops a replication pair.
   * 
   * @remarks
   * ## [](#)Usage notes
   * *   For information about the regions in which async replication is available, see [Overview](https://help.aliyun.com/document_detail/314563.html).
   * *   Only replication pairs that are in the **Initial Syncing** (`initial_syncing`), **Syncing** (`syncing`), **One-time Syncing** (`manual_syncing`), or **Normal** (`normal`) state can be stopped. When a replication pair is stopped, it enters the Stopped (`stopped`) state. The secondary disk rolls back to the point in time when the last async replication was complete and drops all the data that is being replicated from the primary disk.
   * 
   * @param request - StopDiskReplicaPairRequest
   * @returns StopDiskReplicaPairResponse
   */
  async stopDiskReplicaPair(request: StopDiskReplicaPairRequest): Promise<StopDiskReplicaPairResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopDiskReplicaPairWithOptions(request, runtime);
  }

  /**
   * Creates tags and adds the tags to Elastic Block Storage (EBS) resources.
   * 
   * @remarks
   * Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number of tags is reached, an error message is returned. For more information, see the "Tag limits" section in [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
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
   * Creates tags and adds the tags to Elastic Block Storage (EBS) resources.
   * 
   * @remarks
   * Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number of tags is reached, an error message is returned. For more information, see the "Tag limits" section in [Limits](https://help.aliyun.com/document_detail/25412.html).
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Unbind disks from a enterprise-level snapshot policy.
   * 
   * @param request - UnbindEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindEnterpriseSnapshotPolicyResponse
   */
  async unbindEnterpriseSnapshotPolicyWithOptions(request: UnbindEnterpriseSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UnbindEnterpriseSnapshotPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.diskTargets)) {
      query["DiskTargets"] = request.diskTargets;
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
      action: "UnbindEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnbindEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new UnbindEnterpriseSnapshotPolicyResponse({}));
  }

  /**
   * Unbind disks from a enterprise-level snapshot policy.
   * 
   * @param request - UnbindEnterpriseSnapshotPolicyRequest
   * @returns UnbindEnterpriseSnapshotPolicyResponse
   */
  async unbindEnterpriseSnapshotPolicy(request: UnbindEnterpriseSnapshotPolicyRequest): Promise<UnbindEnterpriseSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unbindEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * Removes tags from specified Elastic Block Storage (EBS) resources.
   * 
   * @remarks
   *   You can remove up to 20 tags at a time.
   * *   After a tag is removed from an EBS resource, the tag is automatically deleted if the tag is not added to any instance.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
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
   * Removes tags from specified Elastic Block Storage (EBS) resources.
   * 
   * @remarks
   *   You can remove up to 20 tags at a time.
   * *   After a tag is removed from an EBS resource, the tag is automatically deleted if the tag is not added to any instance.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Search for a enterprise-level snapshot policy.
   * 
   * @param tmpReq - UpdateEnterpriseSnapshotPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnterpriseSnapshotPolicyResponse
   */
  async updateEnterpriseSnapshotPolicyWithOptions(tmpReq: UpdateEnterpriseSnapshotPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateEnterpriseSnapshotPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateEnterpriseSnapshotPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.crossRegionCopyInfo)) {
      request.crossRegionCopyInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.crossRegionCopyInfo, "CrossRegionCopyInfo", "json");
    }

    if (!Util.isUnset(tmpReq.retainRule)) {
      request.retainRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.retainRule, "RetainRule", "json");
    }

    if (!Util.isUnset(tmpReq.schedule)) {
      request.scheduleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedule, "Schedule", "json");
    }

    if (!Util.isUnset(tmpReq.specialRetainRules)) {
      request.specialRetainRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.specialRetainRules, "SpecialRetainRules", "json");
    }

    if (!Util.isUnset(tmpReq.storageRule)) {
      request.storageRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storageRule, "StorageRule", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.crossRegionCopyInfoShrink)) {
      query["CrossRegionCopyInfo"] = request.crossRegionCopyInfoShrink;
    }

    if (!Util.isUnset(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.retainRuleShrink)) {
      query["RetainRule"] = request.retainRuleShrink;
    }

    if (!Util.isUnset(request.scheduleShrink)) {
      query["Schedule"] = request.scheduleShrink;
    }

    if (!Util.isUnset(request.specialRetainRulesShrink)) {
      query["SpecialRetainRules"] = request.specialRetainRulesShrink;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.storageRuleShrink)) {
      query["StorageRule"] = request.storageRuleShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateEnterpriseSnapshotPolicy",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateEnterpriseSnapshotPolicyResponse>(await this.callApi(params, req, runtime), new UpdateEnterpriseSnapshotPolicyResponse({}));
  }

  /**
   * Search for a enterprise-level snapshot policy.
   * 
   * @param request - UpdateEnterpriseSnapshotPolicyRequest
   * @returns UpdateEnterpriseSnapshotPolicyResponse
   */
  async updateEnterpriseSnapshotPolicy(request: UpdateEnterpriseSnapshotPolicyRequest): Promise<UpdateEnterpriseSnapshotPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateEnterpriseSnapshotPolicyWithOptions(request, runtime);
  }

  /**
   * 更新解决方案实例属性
   * 
   * @param request - UpdateSolutionInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSolutionInstanceAttributeResponse
   */
  async updateSolutionInstanceAttributeWithOptions(request: UpdateSolutionInstanceAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSolutionInstanceAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.solutionInstanceId)) {
      query["SolutionInstanceId"] = request.solutionInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSolutionInstanceAttribute",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSolutionInstanceAttributeResponse>(await this.callApi(params, req, runtime), new UpdateSolutionInstanceAttributeResponse({}));
  }

  /**
   * 更新解决方案实例属性
   * 
   * @param request - UpdateSolutionInstanceAttributeRequest
   * @returns UpdateSolutionInstanceAttributeResponse
   */
  async updateSolutionInstanceAttribute(request: UpdateSolutionInstanceAttributeRequest): Promise<UpdateSolutionInstanceAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSolutionInstanceAttributeWithOptions(request, runtime);
  }

}
