// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels extends $dara.Model {
  /**
   * @example
   * gdc-xxx
   */
  channelId?: string;
  /**
   * @example
   * Syncing
   */
  channelStatus?: string;
  /**
   * @example
   * true
   */
  freezeSourceDuringSync?: boolean;
  /**
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
   * @example
   * /
   */
  destinationFileSystemPath?: string;
  /**
   * @example
   * pfs-xxx
   */
  destinationId?: string;
  /**
   * @example
   * cn-beijing
   */
  destinationRegion?: string;
  /**
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
   * @example
   * /
   */
  sourceFileSystemPath?: string;
  /**
   * @example
   * oss-xxx
   */
  sourceId?: string;
  /**
   * @example
   * cn-wulanchabu
   */
  sourceRegion?: string;
  /**
   * @example
   * oss
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
  destinations?: DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologyDestinations[];
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
  channels?: DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels[];
  /**
   * @example
   * 2025-03-25T09:37:10Z
   */
  createTime?: string;
  /**
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
   * @example
   * Running
   */
  networkStatus?: string;
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
  items?: DescribeGlobalDataNetworkListResponseBodyItems;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 1
   */
  pageRecordCount?: string;
  /**
   * @example
   * CD35F3-F3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  /**
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

