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
   * The number of entries per page. Valid values: **1** to **20**. Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * 
   * - You do not need to specify this parameter for the first request or if no subsequent query exists.
   * 
   * - If a subsequent query exists, set the value to the **NextToken** value returned by the previous API call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the IPsec server.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the IPsec server.
   * 
   * The IPsec server belongs to the same resource group as the associated VPN gateway instance. You can call the [DescribeVpnGateway](https://help.aliyun.com/document_detail/2794055.html) operation to query the resource group ID of the VPN gateway instance.
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

