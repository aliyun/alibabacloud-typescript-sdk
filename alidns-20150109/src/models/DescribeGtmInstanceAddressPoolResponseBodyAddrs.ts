// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmInstanceAddressPoolResponseBodyAddrsAddr } from "./DescribeGtmInstanceAddressPoolResponseBodyAddrsAddr";


export class DescribeGtmInstanceAddressPoolResponseBodyAddrs extends $dara.Model {
  addr?: DescribeGtmInstanceAddressPoolResponseBodyAddrsAddr[];
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: { 'type': 'array', 'itemType': DescribeGtmInstanceAddressPoolResponseBodyAddrsAddr },
    };
  }

  validate() {
    if(Array.isArray(this.addr)) {
      $dara.Model.validateArray(this.addr);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

