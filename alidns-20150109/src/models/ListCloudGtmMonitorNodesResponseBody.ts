// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudGtmMonitorNodesResponseBodyIpv4IspCityNodes } from "./ListCloudGtmMonitorNodesResponseBodyIpv4ispCityNodes";
import { ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodes } from "./ListCloudGtmMonitorNodesResponseBodyIpv6ispCityNodes";


export class ListCloudGtmMonitorNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Public IPv4 monitoring node list.
   */
  ipv4IspCityNodes?: ListCloudGtmMonitorNodesResponseBodyIpv4IspCityNodes;
  /**
   * @remarks
   * List of public IPv6 monitoring nodes.
   */
  ipv6IspCityNodes?: ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodes;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4IspCityNodes: 'Ipv4IspCityNodes',
      ipv6IspCityNodes: 'Ipv6IspCityNodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4IspCityNodes: ListCloudGtmMonitorNodesResponseBodyIpv4IspCityNodes,
      ipv6IspCityNodes: ListCloudGtmMonitorNodesResponseBodyIpv6IspCityNodes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ipv4IspCityNodes && typeof (this.ipv4IspCityNodes as any).validate === 'function') {
      (this.ipv4IspCityNodes as any).validate();
    }
    if(this.ipv6IspCityNodes && typeof (this.ipv6IspCityNodes as any).validate === 'function') {
      (this.ipv6IspCityNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

