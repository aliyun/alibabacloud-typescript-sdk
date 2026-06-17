// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels extends $dara.Model {
  /**
   * @remarks
   * The ID of the synchronization channel.
   * 
   * @example
   * gdc-xxx
   */
  channelId?: string;
  /**
   * @remarks
   * The status of the synchronization channel. Valid values:
   * 
   * - **Creating**: The channel is being created.
   * 
   * - **Running**: The channel is running.
   * 
   * - **Syncing**: The channel is synchronizing data.
   * 
   * - **SyncFinished**: Data synchronization is complete.
   * 
   * - **SyncFailed**: Data synchronization failed.
   * 
   * - **SyncPartialFailed**: Data synchronization partially failed.
   * 
   * - **Stopped**: The channel is stopped.
   * 
   * - **Maintaining**: The channel is under maintenance.
   * 
   * - **Restarting**: The channel is restarting.
   * 
   * - **Locking**: The channel is being locked.
   * 
   * - **Locked**: The channel is locked.
   * 
   * - **Unlocking**: The channel is being unlocked.
   * 
   * - **Deleting**: The channel is being deleted.
   * 
   * - **Deleted**: The channel is deleted.
   * 
   * @example
   * Syncing
   */
  channelStatus?: string;
  /**
   * @remarks
   * Indicates whether the source path is frozen during data transmission.
   * 
   * @example
   * true
   */
  freezeSourceDuringSync?: boolean;
  /**
   * @remarks
   * The synchronization progress.
   * 
   * > The value is a percentage that is accurate to two decimal places.
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
   * Destination PolarDB instance
   * 
   * @example
   * pfs-xxx
   */
  destinationId?: string;
  /**
   * @remarks
   * The region of the destination.
   * 
   * @example
   * cn-beijing
   */
  destinationRegion?: string;
  /**
   * @remarks
   * The type of the destination. Valid values:
   * 
   * - **pfs**: Polarlakebase High-performance Edition.
   * 
   * - **pcs**: Polarlakebase Cold Storage Edition.
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
   * The ID of the source Polarlakebase instance.
   * 
   * @example
   * pcs-xxx
   */
  sourceId?: string;
  /**
   * @remarks
   * The region of the source.
   * 
   * @example
   * cn-wulanchabu
   */
  sourceRegion?: string;
  /**
   * @remarks
   * The type of the source. Valid values:
   * 
   * - **pfs**: Polarlakebase High-performance Edition.
   * 
   * - **pcs**: Polarlakebase Cold Storage Edition.
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
   * The synchronization destinations.
   */
  destinations?: DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologyDestinations[];
  /**
   * @remarks
   * The synchronization sources.
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
   * The synchronization channels.
   */
  channels?: DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels[];
  /**
   * @remarks
   * The time when the GDN was created.
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
   * The ID of the GDN.
   * 
   * @example
   * gdn-xxx
   */
  networkId?: string;
  /**
   * @remarks
   * The status of the GDN. Valid values:
   * 
   * - **Creating**: The GDN is being created.
   * 
   * - **Running**: The GDN is running.
   * 
   * - **Syncing**: The GDN is synchronizing data.
   * 
   * - **SyncFinished**: Data synchronization is complete.
   * 
   * - **SyncFailed**: Data synchronization failed.
   * 
   * - **SyncPartialFailed**: Data synchronization partially failed.
   * 
   * - **Stopped**: The GDN is stopped.
   * 
   * - **Maintaining**: The GDN is under maintenance.
   * 
   * - **Restarting**: The GDN is restarting.
   * 
   * - **Locking**: The GDN is being locked.
   * 
   * - **Locked**: The GDN is locked.
   * 
   * - **Unlocking**: The GDN is being unlocked.
   * 
   * - **Deleting**: The GDN is being deleted.
   * 
   * - **Deleted**: The GDN is deleted.
   * 
   * @example
   * Running
   */
  networkStatus?: string;
  /**
   * @remarks
   * The network topology of the GDN.
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
   * The details of the Global Data Networks (GDNs).
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

