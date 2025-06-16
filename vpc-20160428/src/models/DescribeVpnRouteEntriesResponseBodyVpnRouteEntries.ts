// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnRouteEntriesResponseBodyVpnRouteEntriesVpnRouteEntry } from "./DescribeVpnRouteEntriesResponseBodyVpnRouteEntriesVpnRouteEntry";


export class DescribeVpnRouteEntriesResponseBodyVpnRouteEntries extends $dara.Model {
  vpnRouteEntry?: DescribeVpnRouteEntriesResponseBodyVpnRouteEntriesVpnRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      vpnRouteEntry: 'VpnRouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpnRouteEntry: { 'type': 'array', 'itemType': DescribeVpnRouteEntriesResponseBodyVpnRouteEntriesVpnRouteEntry },
    };
  }

  validate() {
    if(Array.isArray(this.vpnRouteEntry)) {
      $dara.Model.validateArray(this.vpnRouteEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

