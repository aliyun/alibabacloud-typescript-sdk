// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntriesVpnPbrRouteEntry } from "./DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntriesVpnPbrRouteEntry";


export class DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntries extends $dara.Model {
  vpnPbrRouteEntry?: DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntriesVpnPbrRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      vpnPbrRouteEntry: 'VpnPbrRouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpnPbrRouteEntry: { 'type': 'array', 'itemType': DescribeVpnPbrRouteEntriesResponseBodyVpnPbrRouteEntriesVpnPbrRouteEntry },
    };
  }

  validate() {
    if(Array.isArray(this.vpnPbrRouteEntry)) {
      $dara.Model.validateArray(this.vpnPbrRouteEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

