// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpsecServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the IPsec server was created.
   * 
   * T is used as a delimiter. Z indicates that the time is in UTC.
   * 
   * @example
   * 2021-02-22T03:24:28Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The IPsec server ID.
   * 
   * @example
   * iss-bp1jougp8cfsbo8y9****
   */
  ipsecServerId?: string;
  /**
   * @remarks
   * The IPsec server name.
   * 
   * @example
   * test
   */
  ipsecServerName?: string;
  /**
   * @remarks
   * The ID of the region where the VPN gateway is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 690A967E-D4CD-4B69-8C78-94FE828BA10B
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-bp17lofy9fd0dnvzv****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      ipsecServerId: 'IpsecServerId',
      ipsecServerName: 'IpsecServerName',
      regionId: 'RegionId',
      requestId: 'RequestId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      ipsecServerId: 'string',
      ipsecServerName: 'string',
      regionId: 'string',
      requestId: 'string',
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

