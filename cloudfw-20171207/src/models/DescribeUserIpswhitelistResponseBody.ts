// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserIPSWhitelistResponseBodyIpv6Whitelists } from "./DescribeUserIpswhitelistResponseBodyIpv6whitelists";
import { DescribeUserIPSWhitelistResponseBodyWhitelists } from "./DescribeUserIpswhitelistResponseBodyWhitelists";


export class DescribeUserIPSWhitelistResponseBody extends $dara.Model {
  ipv6Whitelists?: DescribeUserIPSWhitelistResponseBodyIpv6Whitelists[];
  requestId?: string;
  whitelists?: DescribeUserIPSWhitelistResponseBodyWhitelists[];
  static names(): { [key: string]: string } {
    return {
      ipv6Whitelists: 'Ipv6Whitelists',
      requestId: 'RequestId',
      whitelists: 'Whitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Whitelists: { 'type': 'array', 'itemType': DescribeUserIPSWhitelistResponseBodyIpv6Whitelists },
      requestId: 'string',
      whitelists: { 'type': 'array', 'itemType': DescribeUserIPSWhitelistResponseBodyWhitelists },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Whitelists)) {
      $dara.Model.validateArray(this.ipv6Whitelists);
    }
    if(Array.isArray(this.whitelists)) {
      $dara.Model.validateArray(this.whitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

