// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels } from "./DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels";
import { DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopology } from "./DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopology";


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

