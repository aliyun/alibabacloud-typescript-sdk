// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologyDestinations } from "./DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologyDestinations";
import { DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologySources } from "./DescribeGlobalDataNetworkListResponseBodyItemsNetworksNetworkTopologySources";


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

