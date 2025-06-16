// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelBgpConfig } from "./DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelBgpConfig";
import { DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIkeConfig } from "./DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIkeConfig";
import { DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIpsecConfig } from "./DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIpsecConfig";


export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the customer gateway associated with the tunnel.
   * 
   * @example
   * cgw-p0wy363lucf1uyae8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Indicates whether the DPD feature is enabled for the tunnel. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  enableDpd?: string;
  /**
   * @remarks
   * Indicates whether NAT traversal is enabled for the tunnel. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  enableNatTraversal?: string;
  /**
   * @remarks
   * The tunnel IP address.
   * 
   * @example
   * 47.21.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The CA certificate of the tunnel peer.
   * 
   * This parameter is returned only if the VPN gateway is of the SM type.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The tunnel role. Valid values:
   * 
   * *   **master**: The tunnel is an active tunnel.
   * *   **slave**: The tunnel is a standby tunnel.
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The tunnel status. Valid values:
   * 
   * *   **active**
   * *   **updating**
   * *   **deleting**
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The state of the IPsec-VPN connection. Valid values:
   * 
   * *   **ike_sa_not_established**: Phase 1 negotiations failed.
   * *   **ike_sa_established**: Phase 1 negotiations succeeded.
   * *   **ipsec_sa_not_established**: Phase 2 negotiations failed.
   * *   **ipsec_sa_established**: Phase 2 negotiations succeeded.
   * 
   * @example
   * ipsec_sa_established
   */
  status?: string;
  /**
   * @remarks
   * The BGP configurations.
   */
  tunnelBgpConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelBgpConfig;
  /**
   * @remarks
   * The tunnel ID.
   * 
   * @example
   * tun-opsqc4d97wni27****
   */
  tunnelId?: string;
  /**
   * @remarks
   * The configuration of Phase 1 negotiations.
   */
  tunnelIkeConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIkeConfig;
  /**
   * @remarks
   * The order in which the tunnel is created.
   * 
   * *   **1**: Tunnel 1.
   * *   **2**: Tunnel 2.
   * 
   * >  This parameter is returned only if the IPsec-VPN connection is associated with a transit router.
   * 
   * @example
   * 1
   */
  tunnelIndex?: number;
  /**
   * @remarks
   * The configurations of Phase 2 negotiations.
   */
  tunnelIpsecConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIpsecConfig;
  /**
   * @remarks
   * The zone of the tunnel.
   * 
   * @example
   * ap-southeast-5a
   */
  zoneNo?: string;
  static names(): { [key: string]: string } {
    return {
      customerGatewayId: 'CustomerGatewayId',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      internetIp: 'InternetIp',
      remoteCaCertificate: 'RemoteCaCertificate',
      role: 'Role',
      state: 'State',
      status: 'Status',
      tunnelBgpConfig: 'TunnelBgpConfig',
      tunnelId: 'TunnelId',
      tunnelIkeConfig: 'TunnelIkeConfig',
      tunnelIndex: 'TunnelIndex',
      tunnelIpsecConfig: 'TunnelIpsecConfig',
      zoneNo: 'ZoneNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerGatewayId: 'string',
      enableDpd: 'string',
      enableNatTraversal: 'string',
      internetIp: 'string',
      remoteCaCertificate: 'string',
      role: 'string',
      state: 'string',
      status: 'string',
      tunnelBgpConfig: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelBgpConfig,
      tunnelId: 'string',
      tunnelIkeConfig: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIkeConfig,
      tunnelIndex: 'number',
      tunnelIpsecConfig: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIpsecConfig,
      zoneNo: 'string',
    };
  }

  validate() {
    if(this.tunnelBgpConfig && typeof (this.tunnelBgpConfig as any).validate === 'function') {
      (this.tunnelBgpConfig as any).validate();
    }
    if(this.tunnelIkeConfig && typeof (this.tunnelIkeConfig as any).validate === 'function') {
      (this.tunnelIkeConfig as any).validate();
    }
    if(this.tunnelIpsecConfig && typeof (this.tunnelIpsecConfig as any).validate === 'function') {
      (this.tunnelIpsecConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

