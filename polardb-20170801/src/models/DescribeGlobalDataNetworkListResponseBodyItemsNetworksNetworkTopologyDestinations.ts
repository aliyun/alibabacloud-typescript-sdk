// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

