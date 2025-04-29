// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkCardsNetworkCardInfo } from "./DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkCardsNetworkCardInfo";


export class DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkCards extends $dara.Model {
  networkCardInfo?: DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkCardsNetworkCardInfo[];
  static names(): { [key: string]: string } {
    return {
      networkCardInfo: 'NetworkCardInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkCardInfo: { 'type': 'array', 'itemType': DescribeInstanceTypesResponseBodyInstanceTypesInstanceTypeNetworkCardsNetworkCardInfo },
    };
  }

  validate() {
    if(Array.isArray(this.networkCardInfo)) {
      $dara.Model.validateArray(this.networkCardInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

