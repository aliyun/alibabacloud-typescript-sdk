// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpsecServersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the IPsec server.
   * 
   * @example
   * iss-bp1bo3xuvcxo7ixll****
   */
  ipsecServerId?: string[];
  /**
   * @remarks
   * The name of the IPsec server.
   * 
   * The name must be 1 to 100 characters in length.
   * 
   * @example
   * test
   */
  ipsecServerName?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **20**. Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If this is your first request and no next requests are to be performed, you do not need to specify this parameter.
   * *   You must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the IPsec server is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPsec server belongs.
   * 
   * The IPsec server and its associated VPN gateway belong to the same resource group. You can call [DescribeVpnGateway](https://help.aliyun.com/document_detail/2794055.html) to query the ID of the resource group to which the VPN gateway belongs.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-bp1q8bgx4xnkm2ogj****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      ipsecServerId: 'IpsecServerId',
      ipsecServerName: 'IpsecServerName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipsecServerId: { 'type': 'array', 'itemType': 'string' },
      ipsecServerName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      vpnGatewayId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipsecServerId)) {
      $dara.Model.validateArray(this.ipsecServerId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

