// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterNetInfoResponseBodyItemsAddress } from "./DescribeClusterNetInfoResponseBodyItemsAddress";


export class DescribeClusterNetInfoResponseBodyItems extends $dara.Model {
  address?: DescribeClusterNetInfoResponseBodyItemsAddress[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: { 'type': 'array', 'itemType': DescribeClusterNetInfoResponseBodyItemsAddress },
    };
  }

  validate() {
    if(Array.isArray(this.address)) {
      $dara.Model.validateArray(this.address);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

