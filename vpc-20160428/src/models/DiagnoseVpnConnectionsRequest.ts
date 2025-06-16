// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiagnoseVpnConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the IPsec-VPN connection.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tunnel IDs.
   */
  tunnelIds?: string[];
  /**
   * @remarks
   * The IDs of IPsec-VPN connections.
   */
  vpnConnectionIds?: string[];
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-bp10hz6b0mbp39flt****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      tunnelIds: 'TunnelIds',
      vpnConnectionIds: 'VpnConnectionIds',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerId: 'number',
      tunnelIds: { 'type': 'array', 'itemType': 'string' },
      vpnConnectionIds: { 'type': 'array', 'itemType': 'string' },
      vpnGatewayId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tunnelIds)) {
      $dara.Model.validateArray(this.tunnelIds);
    }
    if(Array.isArray(this.vpnConnectionIds)) {
      $dara.Model.validateArray(this.vpnConnectionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

