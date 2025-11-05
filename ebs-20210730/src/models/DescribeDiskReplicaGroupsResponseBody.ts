// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskReplicaGroupsResponseBodyReplicaGroupsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the replication pair-consistent group.
   * 
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the replication pair-consistent group.
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
   * The bandwidth value. Unit: Kbit/s. This parameter is not publicly available and has a system-preset value.
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
   * Indicates whether to enable replication time control.
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
   * The time when data was last replicated from the primary disks to the secondary disks in the replication pair-consistent group. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1637835114
   */
  lastRecoverPoint?: number;
  /**
   * @remarks
   * The IDs of replication pairs that belong to the replication pair-consistent group.
   */
  pairIds?: Buffer[];
  /**
   * @remarks
   * The number of replication pairs that belong to the replication pair-consistent group.
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
   * The IDs of the replication pair-consistent groups.
   * 
   * @example
   * pg-myreplica****
   */
  replicaGroupId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the replication pair-consistent group belongs.
   * 
   * @example
   * rg-aek2a*******
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
   * The status of the replication pair-consistent group. Valid values:
   * 
   * *   invalid: The replication pair-consistent group is invalid, which indicates that abnormal replication pairs are present in the replication pair-consistent group.
   * *   creating: The replication pair-consistent group is being created.
   * *   created: The replication pair-consistent group was created.
   * *   create_failed: The replication pair-consistent group failed to be created.
   * *   manual_syncing: Data was being manually synchronized between the disks in the replication pair-consistent group. When data was being manually synchronized for the first time, the replication pair is in this state.
   * *   syncing: Data was being synchronized between the disks. When data is being asynchronously replicated from the primary disk to the secondary disk again in subsequent operations, the replication pair is in this state.
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
   * The tags of the replication pair-consistent group.
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
   * A pagination token.
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

