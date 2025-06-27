// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodesIpv6IspCityNode } from "./ListCloudGtmMonitorNodesResponseBodyIpv6ispCityNodesIpv6ispCityNode";


export class ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodes extends $dara.Model {
  ipv6IspCityNode?: ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodesIpv6IspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ipv6IspCityNode: 'Ipv6IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6IspCityNode: { 'type': 'array', 'itemType': ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodesIpv6IspCityNode },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6IspCityNode)) {
      $dara.Model.validateArray(this.ipv6IspCityNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

