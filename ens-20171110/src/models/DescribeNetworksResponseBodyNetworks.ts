// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworksResponseBodyNetworksNetwork } from "./DescribeNetworksResponseBodyNetworksNetwork";


export class DescribeNetworksResponseBodyNetworks extends $dara.Model {
  network?: DescribeNetworksResponseBodyNetworksNetwork[];
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: { 'type': 'array', 'itemType': DescribeNetworksResponseBodyNetworksNetwork },
    };
  }

  validate() {
    if(Array.isArray(this.network)) {
      $dara.Model.validateArray(this.network);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

