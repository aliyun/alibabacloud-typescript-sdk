// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpListsIpList } from "./DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpListsIpList";


export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpLists extends $dara.Model {
  ipList?: DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpListsIpList[];
  static names(): { [key: string]: string } {
    return {
      ipList: 'IpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: { 'type': 'array', 'itemType': DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayIpListsIpList },
    };
  }

  validate() {
    if(Array.isArray(this.ipList)) {
      $dara.Model.validateArray(this.ipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

