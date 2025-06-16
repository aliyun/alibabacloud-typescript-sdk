// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBgpPeersResponseBodyBgpPeers } from "./DescribeBgpPeersResponseBodyBgpPeers";


export class DescribeBgpPeersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the BGP peer.
   */
  bgpPeers?: DescribeBgpPeersResponseBodyBgpPeers;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bgpPeers: 'BgpPeers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpPeers: DescribeBgpPeersResponseBodyBgpPeers,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.bgpPeers && typeof (this.bgpPeers as any).validate === 'function') {
      (this.bgpPeers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

