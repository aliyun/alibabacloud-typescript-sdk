// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGlobalDataNetworkListResponseBodyItemsNetworks } from "./DescribeGlobalDataNetworkListResponseBodyItemsNetworks";


export class DescribeGlobalDataNetworkListResponseBodyItems extends $dara.Model {
  networks?: DescribeGlobalDataNetworkListResponseBodyItemsNetworks[];
  static names(): { [key: string]: string } {
    return {
      networks: 'Networks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networks: { 'type': 'array', 'itemType': DescribeGlobalDataNetworkListResponseBodyItemsNetworks },
    };
  }

  validate() {
    if(Array.isArray(this.networks)) {
      $dara.Model.validateArray(this.networks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

