// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6GatewayTagsTag } from "./DescribeIpv6gatewaysResponseBodyIpv6gatewaysIpv6gatewayTagsTag";


export class DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6GatewayTags extends $dara.Model {
  tag?: DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6GatewayTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6GatewayTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

