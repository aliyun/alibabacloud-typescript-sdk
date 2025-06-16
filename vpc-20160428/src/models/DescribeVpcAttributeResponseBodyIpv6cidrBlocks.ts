// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcAttributeResponseBodyIpv6CidrBlocksIpv6CidrBlock } from "./DescribeVpcAttributeResponseBodyIpv6cidrBlocksIpv6cidrBlock";


export class DescribeVpcAttributeResponseBodyIpv6CidrBlocks extends $dara.Model {
  ipv6CidrBlock?: DescribeVpcAttributeResponseBodyIpv6CidrBlocksIpv6CidrBlock[];
  static names(): { [key: string]: string } {
    return {
      ipv6CidrBlock: 'Ipv6CidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6CidrBlock: { 'type': 'array', 'itemType': DescribeVpcAttributeResponseBodyIpv6CidrBlocksIpv6CidrBlock },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6CidrBlock)) {
      $dara.Model.validateArray(this.ipv6CidrBlock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

