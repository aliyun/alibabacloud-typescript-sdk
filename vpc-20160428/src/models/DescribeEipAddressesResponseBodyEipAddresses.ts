// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEipAddressesResponseBodyEipAddressesEipAddress } from "./DescribeEipAddressesResponseBodyEipAddressesEipAddress";


export class DescribeEipAddressesResponseBodyEipAddresses extends $dara.Model {
  eipAddress?: DescribeEipAddressesResponseBodyEipAddressesEipAddress[];
  static names(): { [key: string]: string } {
    return {
      eipAddress: 'EipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAddress: { 'type': 'array', 'itemType': DescribeEipAddressesResponseBodyEipAddressesEipAddress },
    };
  }

  validate() {
    if(Array.isArray(this.eipAddress)) {
      $dara.Model.validateArray(this.eipAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

