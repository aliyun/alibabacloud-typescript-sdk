// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiagnoseVpnGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Check the connectivity of the destination address. Valid values:
   * 
   * *   **PrivateSourceIp**: the source IP address. The source IP address must be on the VPC side.
   * *   **PrivateDestinationIp**: the destination IP address. The destination IP address must be on the data center side.
   * 
   * @example
   * {"PrivateSourceIp":"192.168.1.1","PrivateDestinationIp":"192.168.0.1"}
   */
  IPsecExtendInfo?: string;
  /**
   * @remarks
   * The region ID of the VPN gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource to be diagnosed.
   * 
   * This parameter is required.
   * 
   * @example
   * vco-uf66xniofskqtuoz1****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * Set the value to **Ipsec**, which specifies an IPsec-VPN connection.
   * 
   * This parameter is required.
   * 
   * @example
   * IPsec
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * vpn-m5efhj0k1p47ctuhl****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      IPsecExtendInfo: 'IPsecExtendInfo',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      IPsecExtendInfo: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      vpnGatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

