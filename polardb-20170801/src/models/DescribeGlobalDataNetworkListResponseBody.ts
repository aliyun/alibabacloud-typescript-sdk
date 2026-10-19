// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels extends $dara.Model {
  /**
   * @remarks
   * The synchronization channel ID.
   * 
   * @example
   * gdc-xxx
   */
  channelId?: string;
  /**
   * @remarks
   * The synchronization channel status. Valid values:
   * 
   * - **Creating**: Being created.
   * - **Running**: Running.
   * - **Syncing**: Being synchronized.
   * - **SyncFinished**: Synchronization completed.
   * - **SyncFailed**: Synchronization failed.
   * - **SyncPartialFailed**: Partial synchronization failed.
   * - **Stopped**: Stopped.
   * - **Maintaining**: Under maintenance.
   * - **Restarting**: Being restarted.
   * - **Locking**: Being locked.
   * - **Locked**: Locked.
   * - **Unlocking**: Being unlocked.
   * - **Deleting**: Being deleted.
   * - **Deleted**: Deleted.
   * 
   * @example
   * Syncing
   */
  channelStatus?: string;
  /**
   * @remarks
   * Specifies whether to freeze the source path during the transfer.
   * 
   * @example
   * true
   */
  freezeSourceDuringSync?: boolean;
  /**
   * @remarks
   * The current synchronization progress.
   * 
   * > The value is a floating-point percentage with two decimal places.
   * 
   * @example
   * 11.45%
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      channelStatus: 'ChannelStatus',
      freezeSourceDuringSync: 'FreezeSourceDuringSync',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      channelStatus: 'string',
      freezeSourceDuringSync: 'boolean',
      progress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologyDestinations extends $dara.Model {
  /**
   * @remarks
   * The destination path.
   * 
   * @example
   * /
   */
  destinationFileSystemPath?: string;
  /**
   * @remarks
   * The destination Polarlakebase instance.
   * 
   * @example
   * pfs-xxx
   */
  destinationId?: string;
  /**
   * @remarks
   * The destination region.
   * 
   * @example
   * cn-beijing
   */
  destinationRegion?: string;
  /**
   * @remarks
   * The destination type. Valid values:
   *   - **pfs**: Polarlakebase High-performance Edition.
   *   - **pcs**: Polarlakebase Cold Storage Edition.
   * 
   * @example
   * pfs
   */
  destinationType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationFileSystemPath: 'DestinationFileSystemPath',
      destinationId: 'DestinationId',
      destinationRegion: 'DestinationRegion',
      destinationType: 'DestinationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationFileSystemPath: 'string',
      destinationId: 'string',
      destinationRegion: 'string',
      destinationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologySources extends $dara.Model {
  /**
   * @remarks
   * The source path.
   * 
   * @example
   * /
   */
  sourceFileSystemPath?: string;
  /**
   * @remarks
   * The source Polarlakebase instance.
   * 
   * @example
   * pcs-xxx
   */
  sourceId?: string;
  /**
   * @remarks
   * The source region.
   * 
   * @example
   * cn-wulanchabu
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The source type. Valid values:
   * 
   *   - **pfs**: Polarlakebase High-performance Edition.
   *   - **pcs**: Polarlakebase Cold Storage Edition.
   * 
   * @example
   * pcs
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceFileSystemPath: 'SourceFileSystemPath',
      sourceId: 'SourceId',
      sourceRegion: 'SourceRegion',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceFileSystemPath: 'string',
      sourceId: 'string',
      sourceRegion: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopology extends $dara.Model {
  /**
   * @remarks
   * The list of synchronization destinations.
   */
  destinations?: DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologyDestinations[];
  /**
   * @remarks
   * The list of synchronization sources.
   */
  sources?: DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologySources[];
  static names(): { [key: string]: string } {
    return {
      destinations: 'Destinations',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinations: { 'type': 'array', 'itemType': DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologyDestinations },
      sources: { 'type': 'array', 'itemType': DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologySources },
    };
  }

  validate() {
    if(Array.isArray(this.destinations)) {
      $dara.Model.validateArray(this.destinations);
    }
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDataNetworkListResponseBodyItemsNetworks extends $dara.Model {
  /**
   * @remarks
   * The list of synchronization channels.
   */
  channels?: DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels[];
  /**
   * @remarks
   * The creation time of the GDN.
   * 
   * The time is in the ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2025-03-25T09:37:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the GDN.
   * 
   * @example
   * mygdn
   */
  networkDescription?: string;
  /**
   * @remarks
   * GDN ID
   * 
   * @example
   * gdn-xxx
   */
  networkId?: string;
  /**
   * @remarks
   * The GDN status. Valid values:
   * 
   * - **Creating**: Being created.
   * - **Running**: Running.
   * - **Syncing**: Being synchronized.
   * - **SyncFinished**: Synchronization completed.
   * - **SyncFailed**: Synchronization failed.
   * - **SyncPartialFailed**: Partial synchronization failed.
   * - **Stopped**: Stopped.
   * - **Maintaining**: Under maintenance.
   * - **Restarting**: Being restarted.
   * - **Locking**: Being locked.
   * - **Locked**: Locked.
   * - **Unlocking**: Being unlocked.
   * - **Deleting**: Being deleted.
   * - **Deleted**: Deleted.
   * 
   * @example
   * Running
   */
  networkStatus?: string;
  /**
   * @remarks
   * The GDN network topology.
   */
  networkTopology?: DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopology;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      createTime: 'CreateTime',
      networkDescription: 'NetworkDescription',
      networkId: 'NetworkId',
      networkStatus: 'NetworkStatus',
      networkTopology: 'NetworkTopology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels },
      createTime: 'string',
      networkDescription: 'string',
      networkId: 'string',
      networkStatus: 'string',
      networkTopology: DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopology,
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    if(this.networkTopology && typeof (this.networkTopology as any).validate === 'function') {
      (this.networkTopology as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDataNetworkListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The list of GDN networks.
   */
  networks?: DescribeGlobalDataNetworkListResponseBodyItemsNetworks[];
  static names(): { [key: string]: string } {
    return {
      networks: 'Networks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networks: { 'type': 'array', 'itemType': DescribeGlobalDataNetworkListResponseBodyItemsNetworks },
    };
  }

  validate() {
    if(Array.isArray(this.networks)) {
      $dara.Model.validateArray(this.networks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDataNetworkListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The GDN details.
   */
  items?: DescribeGlobalDataNetworkListResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of records on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD35F3-F3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeGlobalDataNetworkListResponseBodyItems,
      pageNumber: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

