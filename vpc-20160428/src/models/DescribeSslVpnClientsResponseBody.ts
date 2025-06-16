// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSslVpnClientsResponseBodyClientInfoList } from "./DescribeSslVpnClientsResponseBodyClientInfoList";


export class DescribeSslVpnClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of clients.
   */
  clientInfoList?: DescribeSslVpnClientsResponseBodyClientInfoList[];
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
   * The region ID.
   * 
   * @example
   * eu-central-1
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 885E117D-06A9-38A3-8DD2-40BDAC429FFC
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-gw8gfb947ctddabja****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInfoList: 'ClientInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInfoList: { 'type': 'array', 'itemType': DescribeSslVpnClientsResponseBodyClientInfoList },
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      requestId: 'string',
      totalCount: 'number',
      vpnGatewayId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clientInfoList)) {
      $dara.Model.validateArray(this.clientInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

