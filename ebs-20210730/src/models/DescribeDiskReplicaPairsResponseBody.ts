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
   * Whether the replication time control is enabled. If the replication pair has been added to a replication group, it is consistent with the attributes of the replication group.
   * 
   * @example
   * false
   */
  enableRtc?: boolean;
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
   * Details of the replication pairs.
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

