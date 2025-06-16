// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptions } from "./DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptions";


export class DescribeVpnConnectionResponseBodyTunnelOptionsSpecification extends $dara.Model {
  tunnelOptions?: DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptions[];
  static names(): { [key: string]: string } {
    return {
      tunnelOptions: 'TunnelOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tunnelOptions: { 'type': 'array', 'itemType': DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptions },
    };
  }

  validate() {
    if(Array.isArray(this.tunnelOptions)) {
      $dara.Model.validateArray(this.tunnelOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

