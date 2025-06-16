// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBgpPeersResponseBodyBgpPeersBgpPeer } from "./DescribeBgpPeersResponseBodyBgpPeersBgpPeer";


export class DescribeBgpPeersResponseBodyBgpPeers extends $dara.Model {
  bgpPeer?: DescribeBgpPeersResponseBodyBgpPeersBgpPeer[];
  static names(): { [key: string]: string } {
    return {
      bgpPeer: 'BgpPeer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpPeer: { 'type': 'array', 'itemType': DescribeBgpPeersResponseBodyBgpPeersBgpPeer },
    };
  }

  validate() {
    if(Array.isArray(this.bgpPeer)) {
      $dara.Model.validateArray(this.bgpPeer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

