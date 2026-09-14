// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskReplicaGroupsResponseBodyReplicaGroupsTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag of the replication group.
   * 
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag of the replication group.
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

export class DescribeDiskReplicaGroupsResponseBodyReplicaGroups extends $dara.Model {
  /**
   * @remarks
   * The bandwidth. Unit: Kbit/s. This parameter is not yet available. The return value is preset by the system.
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
   * The region ID of the disaster recovery site.
   * 
   * @example
   * cn-shanghai
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The zone ID of the disaster recovery site.
   * 
   * @example
   * cn-shanghai-e
   */
  destinationZoneId?: string;
  /**
   * @remarks
   * Specifies whether to enable replication time control (RTC). Valid values:
   * 
   * - false: Disables RTC.
   * 
   * - true: Enables RTC.
   * 
   * > If you set this parameter to true, RTC is enabled for the replication pair-consistent group and all asynchronous replication pairs that are added to the group.
   * 
   * @example
   * true
   */
  enableRtc?: boolean;
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
   * The time when the last asynchronous replication was completed for the replication pair-consistent group. This parameter is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1637835114
   */
  lastRecoverPoint?: number;
  /**
   * @remarks
   * The list of replication pair IDs in the replication pair-consistent group.
   */
  pairIds?: Buffer[];
  /**
   * @remarks
   * The number of replication pairs in the replication pair-consistent group.
   * 
   * @example
   * 2
   */
  pairNumber?: number;
  /**
   * @remarks
   * The initial source region of the replication group.
   * 
   * @example
   * cn-beijing
   */
  primaryRegion?: string;
  /**
   * @remarks
   * The initial source zone of the replication group.
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
   * The site of the replication pair and the replication pair-consistent group. Valid values:
   * 
   * - production: The production site.
   * 
   * - backup: The disaster recovery site.
   * 
   * @example
   * production
   */
  site?: string;
  /**
   * @remarks
   * The region ID of the production site.
   * 
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  /**
   * @remarks
   * The zone ID of the production site.
   * 
   * @example
   * cn-beijing-f
   */
  sourceZoneId?: string;
  /**
   * @remarks
   * The initial destination region of the replication group.
   * 
   * @example
   * cn-shanghai
   */
  standbyRegion?: string;
  /**
   * @remarks
   * The initial destination zone of the replication group.
   * 
   * @example
   * cn-shanghai-e
   */
  standbyZone?: string;
  /**
   * @remarks
   * The status of the replication pair-consistent group. Valid values:
   * 
   * - invalid: The replication pair-consistent group is invalid. This status indicates that a replication pair in the group is abnormal.
   * 
   * - creating: The replication pair-consistent group is being created.
   * 
   * - created: The replication pair-consistent group is created.
   * 
   * - create_failed: The replication pair-consistent group failed to be created.
   * 
   * - manual_syncing: The replication pair-consistent group is performing a one-time synchronization. The group is also in this state during the first one-time synchronization.
   * 
   * - syncing: The replication pair-consistent group is synchronizing data. The group is in this state when data is asynchronously replicated from the primary disk to the secondary disk for a subsequent time.
   * 
   * - normal: Normal. When data replication is complete in the current asynchronous replication cycle, the group is in this state.
   * 
   * - stopping: The replication pair-consistent group is being stopped.
   * 
   * - stopped: The replication pair-consistent group is stopped.
   * 
   * - stop_failed: The replication pair-consistent group failed to be stopped.
   * 
   * - failovering: A failover is being performed.
   * 
   * - failovered: The failover is complete.
   * 
   * - failover_failed: The failover failed.
   * 
   * - reprotecting: A reverse replication is being performed.
   * 
   * - reprotect_failed: The reverse replication failed.
   * 
   * - deleting: The replication pair-consistent group is being deleted.
   * 
   * - delete_failed: The replication pair-consistent group failed to be deleted.
   * 
   * - deleted: The replication pair-consistent group is deleted.
   * 
   * @example
   * created
   */
  status?: string;
  /**
   * @remarks
   * The tags of the replication group.
   */
  tags?: DescribeDiskReplicaGroupsResponseBodyReplicaGroupsTags[];
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      description: 'Description',
      destinationRegionId: 'DestinationRegionId',
      destinationZoneId: 'DestinationZoneId',
      enableRtc: 'EnableRtc',
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
      enableRtc: 'boolean',
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

  validate() {
    if(Array.isArray(this.pairIds)) {
      $dara.Model.validateArray(this.pairIds);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiskReplicaGroupsResponseBody extends $dara.Model {
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
   * The information about the replication pair-consistent groups.
   */
  replicaGroups?: DescribeDiskReplicaGroupsResponseBodyReplicaGroups[];
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

  validate() {
    if(Array.isArray(this.replicaGroups)) {
      $dara.Model.validateArray(this.replicaGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

