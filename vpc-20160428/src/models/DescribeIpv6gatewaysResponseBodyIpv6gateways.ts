// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6Gateway } from "./DescribeIpv6gatewaysResponseBodyIpv6gatewaysIpv6gateway";


export class DescribeIpv6GatewaysResponseBodyIpv6Gateways extends $dara.Model {
  ipv6Gateway?: DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6Gateway[];
  static names(): { [key: string]: string } {
    return {
      ipv6Gateway: 'Ipv6Gateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Gateway: { 'type': 'array', 'itemType': DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6Gateway },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Gateway)) {
      $dara.Model.validateArray(this.ipv6Gateway);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

