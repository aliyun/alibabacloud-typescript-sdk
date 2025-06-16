// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnGatewayResponseBodyTagsTag } from "./DescribeVpnGatewayResponseBodyTagsTag";


export class DescribeVpnGatewayResponseBodyTags extends $dara.Model {
  tag?: DescribeVpnGatewayResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVpnGatewayResponseBodyTagsTag },
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

