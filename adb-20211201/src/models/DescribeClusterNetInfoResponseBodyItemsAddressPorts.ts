// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterNetInfoResponseBodyItemsAddressPortsPorts } from "./DescribeClusterNetInfoResponseBodyItemsAddressPortsPorts";


export class DescribeClusterNetInfoResponseBodyItemsAddressPorts extends $dara.Model {
  ports?: DescribeClusterNetInfoResponseBodyItemsAddressPortsPorts[];
  static names(): { [key: string]: string } {
    return {
      ports: 'ports',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ports: { 'type': 'array', 'itemType': DescribeClusterNetInfoResponseBodyItemsAddressPortsPorts },
    };
  }

  validate() {
    if(Array.isArray(this.ports)) {
      $dara.Model.validateArray(this.ports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

