// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIkeConfig } from "./DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIkeConfig";
import { DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIpsecConfig } from "./DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIpsecConfig";
import { DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTag } from "./DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTag";
import { DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecification } from "./DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecification";
import { DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVcoHealthCheck } from "./DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVcoHealthCheck";
import { DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVpnBgpConfig } from "./DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVpnBgpConfig";


export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnection extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance to which the transit router belongs.
   * 
   * @example
   * cen-lxxpbpalc776qz****
   */
  attachInstanceId?: string;
  /**
   * @remarks
   * The type of resource that is associated with the IPsec-VPN connection. Valid values:
   * 
   * *   **CEN**: indicates that the IPsec-VPN connection is associated with a transit router of a Cloud Enterprise Network (CEN) instance.
   * *   **NO_ASSOCIATED**: indicates that the IPsec-VPN connection is not associated with any resource.
   * *   **VPNGW**: indicates that the IPsec-VPN connection is associated with a VPN gateway.
   * 
   * @example
   * CEN
   */
  attachType?: string;
  /**
   * @remarks
   * The timestamp generated when the IPsec-VPN connection was established. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1492753817000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the IPsec-VPN connection is associated with a transit router that belongs to another Alibaba Cloud account. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  crossAccountAuthorized?: boolean;
  /**
   * @remarks
   * The ID of the customer gateway associated with the IPsec-VPN connection.
   * 
   * @example
   * cgw-bp1mvj4g9kogw****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Indicates whether IPsec negotiations immediately start.
   * 
   * *   **true**: Negotiations are reinitiated after the configuration is changed.
   * *   **false**: Negotiations are reinitiated after traffic is detected.
   * 
   * @example
   * true
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * Indicates whether dead peer detection (DPD) is enabled for the IPsec-VPN connection. Valid values:
   * 
   * *   **true**
   * 
   *     The initiator of the IPsec-VPN connection sends DPD packets to check the existence and availability of the peer. If no feedback is received from the peer within a specific period of time, the connection fails. Then, the ISAKMP security association (SA), IPsec SA, and IPsec tunnel are deleted.
   * 
   * *   **false**
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Indicates whether NAT traversal is enabled for the IPsec-VPN connection.
   * 
   * *   **true**
   * 
   *     After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the IPsec tunnel.
   * 
   * *   **false**
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * Indicates whether BGP is enabled for the tunnel. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * The configurations of Phase 1 negotiations.
   */
  ikeConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIkeConfig;
  /**
   * @remarks
   * The gateway IP address of the IPsec-VPN connection.
   * 
   * >  This parameter is returned only if the IPsec-VPN connection is associated with a transit router.
   * 
   * @example
   * 10.XX.XX.10
   */
  internetIp?: string;
  /**
   * @remarks
   * The configurations of Phase 2 negotiations.
   */
  ipsecConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIpsecConfig;
  /**
   * @remarks
   * The CIDR block on the Alibaba Cloud side.
   * 
   * Multiple CIDR blocks are separated by commas (,).
   * 
   * @example
   * 192.168.0.0/16,172.17.0.0/16
   */
  localSubnet?: string;
  /**
   * @remarks
   * The name of the IPsec-VPN connection.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The network type of the IPsec-VPN connection. Valid values:
   * 
   * *   **public**
   * *   **private**
   * 
   * @example
   * public
   */
  networkType?: string;
  /**
   * @remarks
   * The certificate authority (CA) certificate of the peer.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The CIDR block of the data center.
   * 
   * Multiple CIDR blocks are separated by commas (,).
   * 
   * @example
   * 10.0.0.0/8,172.16.0.0/16
   */
  remoteSubnet?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPsec-VPN connection belongs.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query the resource group information.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The bandwidth specification of the IPsec-VPN connection. Unit: **Mbit/s**.
   * 
   * @example
   * 1000M
   */
  spec?: string;
  /**
   * @remarks
   * The association state of the IPsec-VPN connection. Valid values:
   * 
   * *   **active**: The IPsec-VPN connection is associated with a VPN gateway.
   * *   **init**: The IPsec-VPN connection is not associated with any resource and is being initialized.
   * *   **attaching**: The IPsec-VPN connection is being associated with a transit router.
   * *   **attached**: The IPsec-VPN connection is associated with a transit router.
   * *   **detaching**: The IPsec-VPN connection is being disassociated from a transit router.
   * *   **financialLocked**: The IPsec-VPN connection is locked due to overdue payments.
   * *   **provisioning**: The IPsec-VPN connection is being prepared.
   * *   **updating**: The IPsec-VPN connection is being updated.
   * *   **Upgrading**: The IPsec-VPN connection is being upgraded.
   * *   **deleted**: The IPsec-VPN connection is deleted.
   * 
   * @example
   * attached
   */
  state?: string;
  /**
   * @remarks
   * The status of the IPsec-VPN connection. Valid values:
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
   * The list of tags to be added to the IPsec-VPN connection.
   */
  tag?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTag;
  /**
   * @remarks
   * The ID of the transit router with which the IPsec-VPN connection is associated.
   * 
   * @example
   * tr-p0we2edef9qr44a85****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The name of the transit router.
   * 
   * @example
   * nametest
   */
  transitRouterName?: string;
  /**
   * @remarks
   * The tunnel configurations of the IPsec-VPN connection.
   * 
   * Parameters in **TunnelOptionsSpecification** are returned only if you query an IPsec-VPN connection in dual-tunnel mode.
   */
  tunnelOptionsSpecification?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecification;
  /**
   * @remarks
   * The health check configuration of the IPsec-VPN connection.
   */
  vcoHealthCheck?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVcoHealthCheck;
  /**
   * @remarks
   * The BGP configuration of the IPsec-VPN connection.
   */
  vpnBgpConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVpnBgpConfig;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * @example
   * vco-bp10lz7aejumd****
   */
  vpnConnectionId?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-bp1q8bgx4xnkm****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      attachInstanceId: 'AttachInstanceId',
      attachType: 'AttachType',
      createTime: 'CreateTime',
      crossAccountAuthorized: 'CrossAccountAuthorized',
      customerGatewayId: 'CustomerGatewayId',
      effectImmediately: 'EffectImmediately',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      enableTunnelsBgp: 'EnableTunnelsBgp',
      ikeConfig: 'IkeConfig',
      internetIp: 'InternetIp',
      ipsecConfig: 'IpsecConfig',
      localSubnet: 'LocalSubnet',
      name: 'Name',
      networkType: 'NetworkType',
      remoteCaCertificate: 'RemoteCaCertificate',
      remoteSubnet: 'RemoteSubnet',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      state: 'State',
      status: 'Status',
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
      transitRouterName: 'TransitRouterName',
      tunnelOptionsSpecification: 'TunnelOptionsSpecification',
      vcoHealthCheck: 'VcoHealthCheck',
      vpnBgpConfig: 'VpnBgpConfig',
      vpnConnectionId: 'VpnConnectionId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachInstanceId: 'string',
      attachType: 'string',
      createTime: 'number',
      crossAccountAuthorized: 'boolean',
      customerGatewayId: 'string',
      effectImmediately: 'boolean',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      enableTunnelsBgp: 'boolean',
      ikeConfig: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIkeConfig,
      internetIp: 'string',
      ipsecConfig: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIpsecConfig,
      localSubnet: 'string',
      name: 'string',
      networkType: 'string',
      remoteCaCertificate: 'string',
      remoteSubnet: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      state: 'string',
      status: 'string',
      tag: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTag,
      transitRouterId: 'string',
      transitRouterName: 'string',
      tunnelOptionsSpecification: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecification,
      vcoHealthCheck: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVcoHealthCheck,
      vpnBgpConfig: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVpnBgpConfig,
      vpnConnectionId: 'string',
      vpnGatewayId: 'string',
    };
  }

  validate() {
    if(this.ikeConfig && typeof (this.ikeConfig as any).validate === 'function') {
      (this.ikeConfig as any).validate();
    }
    if(this.ipsecConfig && typeof (this.ipsecConfig as any).validate === 'function') {
      (this.ipsecConfig as any).validate();
    }
    if(this.tag && typeof (this.tag as any).validate === 'function') {
      (this.tag as any).validate();
    }
    if(this.tunnelOptionsSpecification && typeof (this.tunnelOptionsSpecification as any).validate === 'function') {
      (this.tunnelOptionsSpecification as any).validate();
    }
    if(this.vcoHealthCheck && typeof (this.vcoHealthCheck as any).validate === 'function') {
      (this.vcoHealthCheck as any).validate();
    }
    if(this.vpnBgpConfig && typeof (this.vpnBgpConfig as any).validate === 'function') {
      (this.vpnBgpConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

