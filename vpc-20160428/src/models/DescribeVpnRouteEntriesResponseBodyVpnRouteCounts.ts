// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnRouteEntriesResponseBodyVpnRouteCountsVpnRouteCount } from "./DescribeVpnRouteEntriesResponseBodyVpnRouteCountsVpnRouteCount";


export class DescribeVpnRouteEntriesResponseBodyVpnRouteCounts extends $dara.Model {
  vpnRouteCount?: DescribeVpnRouteEntriesResponseBodyVpnRouteCountsVpnRouteCount[];
  static names(): { [key: string]: string } {
    return {
      vpnRouteCount: 'VpnRouteCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpnRouteCount: { 'type': 'array', 'itemType': DescribeVpnRouteEntriesResponseBodyVpnRouteCountsVpnRouteCount },
    };
  }

  validate() {
    if(Array.isArray(this.vpnRouteCount)) {
      $dara.Model.validateArray(this.vpnRouteCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

