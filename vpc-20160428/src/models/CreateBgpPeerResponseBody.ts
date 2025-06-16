// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBgpPeerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the BGP peer.
   * 
   * @example
   * bgp-m5eoyp2mwegk8ce9v****
   */
  bgpPeerId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D4B7649A-61BB-4C64-A586-1DFF1EDA6A42
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bgpPeerId: 'BgpPeerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpPeerId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

