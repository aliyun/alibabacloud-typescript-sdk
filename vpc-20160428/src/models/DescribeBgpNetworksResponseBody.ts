// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBgpNetworksResponseBodyBgpNetworksBgpNetwork extends $dara.Model {
  dstCidrBlock?: string;
  routerId?: string;
  status?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dstCidrBlock: 'DstCidrBlock',
      routerId: 'RouterId',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstCidrBlock: 'string',
      routerId: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeBgpNetworksResponseBody extends $dara.Model {
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

