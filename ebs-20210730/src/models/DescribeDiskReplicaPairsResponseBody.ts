// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskReplicaPairsResponseBodyReplicaPairsTags extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairsResponseBodyReplicaPairs extends $dara.Model {
  /**
   * @remarks
   * The bandwidth used for asynchronous replication. Unit: Kbit/s.
   * 
   * @example
   * 10240
   */
  bandwidth?: number;
  /**
   * @remarks
   * The billing method of the replication pair.
   * Valid values:
   * 
   * - PREPAY: subscription.
   * 
   * - POSTPAY: pay-as-you-go.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The creation time. This value is a UNIX timestamp. Unit: seconds.
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
   * The region of the secondary disk.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegion?: string;
  /**
   * @remarks
   * The zone of the secondary disk.
   * 
   * @example
   * cn-shanghai-b
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * Specifies whether real-time control (RTC) is enabled. Valid values:
   * 
   * - false: Disabled.
   * 
   * - true: Enabled.
   * 
   * > If the replication pair is in a replication pair-consistent group, the value of this parameter is the same as that of the group.
   */
  enableRtc?: boolean;
  /**
   * @remarks
   * The expiration time of the replication pair. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1649750977
   */
  expiredTime?: number;
  /**
   * @remarks
   * The time when the last asynchronous replication was completed. This value is a UNIX timestamp. Unit: seconds.
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
   * The initial source region of the replication pair.
   * 
   * @example
   * cn-beijing
   */
  primaryRegion?: string;
  /**
   * @remarks
   * The initial source zone of the replication pair.
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
   * The site type of the replication pair or replication pair-consistent group. Valid values:
   * 
   * - production: the production site.
   * 
   * - backup: the disaster recovery site.
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
   * The region of the primary disk.
   * 
   * @example
   * cn-beijing
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The zone of the primary disk.
   * 
   * @example
   * cn-beijing-a
   */
  sourceZoneId?: string;
  /**
   * @remarks
   * The initial destination region of the replication pair.
   * 
   * @example
   * cn-shanghai
   */
  standbyRegion?: string;
  /**
   * @remarks
   * The initial destination zone of the replication pair.
   * 
   * @example
   * cn-shanghai-b
   */
  standbyZone?: string;
  /**
   * @remarks
   * The status of the replication pair. Valid values:
   * 
   * - invalid: The replication pair is invalid. This status indicates that the replication pair is not working correctly.
   * 
   * - creating: The replication pair is being created.
   * 
   * - created: The replication pair is created.
   * 
   * - create_failed: The replication pair failed to be created.
   * 
   * - initial_syncing: The replication pair is in the initial synchronization state. After a replication pair is created and started, it enters this state during the first asynchronous replication of data from the primary disk to the secondary disk.
   * 
   * - manual_syncing: The replication pair is being manually synchronized. After the manual synchronization is complete, the replication pair returns to the stopped state. If it is the first one-time synchronization, the status is also manual_syncing.
   * 
   * - syncing: The replication pair is synchronizing data. The replication pair is in this state when data is asynchronously replicated from the primary disk to the secondary disk for a second or subsequent time.
   * 
   * - normal: The replication pair is in the normal state. The replication pair enters this state when data replication is complete in the current replication cycle.
   * 
   * - stopping: The replication pair is being stopped.
   * 
   * - stopped: The replication pair is stopped.
   * 
   * - stop_failed: The replication pair failed to be stopped.
   * 
   * - failovering: A failover is in progress.
   * 
   * - failovered: The failover is complete.
   * 
   * - failover_failed: The failover failed.
   * 
   * - reprotecting: A reverse replication is in progress.
   * 
   * - reprotect_failed: The reverse replication failed.
   * 
   * - deleting: The replication pair is being deleted.
   * 
   * - delete_failed: The replication pair failed to be deleted.
   * 
   * - deleted: The replication pair is deleted.
   * 
   * @example
   * created
   */
  status?: string;
  /**
   * @remarks
   * The status message of the replication pair. This parameter is returned when the Status is `invalid` or `create_failed`. Valid values:
   * 
   * - PrePayOrderExpired: The subscription replication pair has expired.
   * 
   * - PostPayOrderCeaseService: The service for the pay-as-you-go replication pair is suspended, usually due to an overdue payment.
   * 
   * - DeviceRemoved: The primary or secondary disk is deleted.
   * 
   * - DeviceKeyChanged: The `DeviceKey` mapping of the primary or secondary disk has changed.
   * 
   * - DeviceSizeChanged: The `DeviceSize` of the primary or secondary disk has changed.
   * 
   * - OperationDenied.QuotaExceed: The number of created replication pairs exceeds the quota.
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
      enableRtc: 'EnableRtc',
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
      enableRtc: 'boolean',
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

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaPairsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query token returned from this call.
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
   * The replication pairs.
   */
  replicaPairs?: DescribeDiskReplicaPairsResponseBodyReplicaPairs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAA478A0-BEE6-1D42-BEB6-A9CFEAD6****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

  validate() {
    if(Array.isArray(this.replicaPairs)) {
      $dara.Model.validateArray(this.replicaPairs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

