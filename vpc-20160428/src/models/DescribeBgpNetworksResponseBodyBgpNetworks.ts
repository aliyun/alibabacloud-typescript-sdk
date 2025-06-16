// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBgpNetworksResponseBodyBgpNetworksBgpNetwork } from "./DescribeBgpNetworksResponseBodyBgpNetworksBgpNetwork";


export class DescribeBgpNetworksResponseBodyBgpNetworks extends $dara.Model {
  bgpNetwork?: DescribeBgpNetworksResponseBodyBgpNetworksBgpNetwork[];
  static names(): { [key: string]: string } {
    return {
      bgpNetwork: 'BgpNetwork',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpNetwork: { 'type': 'array', 'itemType': DescribeBgpNetworksResponseBodyBgpNetworksBgpNetwork },
    };
  }

  validate() {
    if(Array.isArray(this.bgpNetwork)) {
      $dara.Model.validateArray(this.bgpNetwork);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

