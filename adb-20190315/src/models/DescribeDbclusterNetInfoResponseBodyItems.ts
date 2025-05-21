// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterNetInfoResponseBodyItemsAddress } from "./DescribeDbclusterNetInfoResponseBodyItemsAddress";


export class DescribeDBClusterNetInfoResponseBodyItems extends $dara.Model {
  address?: DescribeDBClusterNetInfoResponseBodyItemsAddress[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: { 'type': 'array', 'itemType': DescribeDBClusterNetInfoResponseBodyItemsAddress },
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

