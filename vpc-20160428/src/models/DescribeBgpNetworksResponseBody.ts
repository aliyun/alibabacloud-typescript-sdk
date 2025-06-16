// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeBgpNetworksResponseBodyBgpNetworks } from "./DescribeBgpNetworksResponseBodyBgpNetworks";


export class DescribeBgpNetworksResponseBody extends $dara.Model {
  /**
   * @remarks
   * BGP networks.
   */
  bgpNetworks?: DescribeBgpNetworksResponseBodyBgpNetworks;
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
   * 6F513A15-669F-419D-B511-08A85292059B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of advertised BGP networks.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bgpNetworks: 'BgpNetworks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpNetworks: DescribeBgpNetworksResponseBodyBgpNetworks,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.bgpNetworks && typeof (this.bgpNetworks as any).validate === 'function') {
      (this.bgpNetworks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

