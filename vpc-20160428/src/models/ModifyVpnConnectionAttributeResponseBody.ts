// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyVpnConnectionAttributeResponseBodyIkeConfig } from "./ModifyVpnConnectionAttributeResponseBodyIkeConfig";
import { ModifyVpnConnectionAttributeResponseBodyIpsecConfig } from "./ModifyVpnConnectionAttributeResponseBodyIpsecConfig";
import { ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecification } from "./ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecification";
import { ModifyVpnConnectionAttributeResponseBodyVcoHealthCheck } from "./ModifyVpnConnectionAttributeResponseBodyVcoHealthCheck";
import { ModifyVpnConnectionAttributeResponseBodyVpnBgpConfig } from "./ModifyVpnConnectionAttributeResponseBodyVpnBgpConfig";


export class ModifyVpnConnectionAttributeResponseBody extends $dara.Model {
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
   * The ID of the customer gateway associated with the IPsec-VPN connection.
   * 
   * This parameter is returned only for single-tunnel IPsec-VPN connections.
   * 
   * @example
   * cgw-p0w2jemrcj5u61un8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * The description of the IPsec-VPN connection.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether IPsec negotiations immediately start after the configuration takes effect. Valid values:
   * 
   * *   **true**: IPsec negotiations immediately start after the configuration takes effect.
   * *   **false**: IPsec negotiations start when inbound traffic is detected.
   * 
   * @example
   * false
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * Indicates whether the DPD feature is enabled for the IPsec-VPN connection. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * This parameter is returned only for single-tunnel IPsec-VPN connections.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Indicates whether NAT traversal is enabled for the IPsec-VPN connection. Valid values: Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * This parameter is returned only for single-tunnel IPsec-VPN connections.
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
   * This parameter is returned only by dual-tunnel IPsec-VPN connections.
   * 
   * @example
   * true
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * The configuration of Phase 1 negotiations.
   * 
   * **IkeConfig** parameters are returned only for single-tunnel IPsec-VPN connections.
   */
  ikeConfig?: ModifyVpnConnectionAttributeResponseBodyIkeConfig;
  /**
   * @remarks
   * The configuration of Phase 2 negotiations.
   * 
   * **IpsecConfig** parameters are returned only for single-tunnel IPsec-VPN connections.
   */
  ipsecConfig?: ModifyVpnConnectionAttributeResponseBodyIpsecConfig;
  /**
   * @remarks
   * The CIDR block on the VPC side.
   * 
   * @example
   * 10.1.1.0/24,10.1.2.0/24
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
   * The CIDR block on the data center side.
   * 
   * @example
   * 10.2.1.0/24,10.2.2.0/24
   */
  remoteSubnet?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7DB79D0C-5F27-4AB5-995B-79BE55102F90
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPsec-VPN connection belongs.
   * 
   * The IPsec-VPN connection and the VPN gateway associated with the IPsec-VPN connection belong to the same resource group. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource groups.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tunnel configuration of the IPsec-VPN connection.
   * 
   * **TunnelOptionsSpecification** parameters are returned only for dual-tunnel IPsec-VPN connections.
   */
  tunnelOptionsSpecification?: ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecification;
  /**
   * @remarks
   * The health check configuration.
   * 
   * **VcoHealthCheck** parameters are returned only for single-tunnel IPsec-VPN connections.
   */
  vcoHealthCheck?: ModifyVpnConnectionAttributeResponseBodyVcoHealthCheck;
  /**
   * @remarks
   * The BGP configuration.
   * 
   * **VpnBgpConfig** parameters are returned only for single-tunnel IPsec-VPN connections.
   */
  vpnBgpConfig?: ModifyVpnConnectionAttributeResponseBodyVpnBgpConfig;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * @example
   * vco-bp1bbi27hojx80nck****
   */
  vpnConnectionId?: string;
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
      createTime: 'CreateTime',
      customerGatewayId: 'CustomerGatewayId',
      description: 'Description',
      effectImmediately: 'EffectImmediately',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      enableTunnelsBgp: 'EnableTunnelsBgp',
      ikeConfig: 'IkeConfig',
      ipsecConfig: 'IpsecConfig',
      localSubnet: 'LocalSubnet',
      name: 'Name',
      remoteSubnet: 'RemoteSubnet',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tunnelOptionsSpecification: 'TunnelOptionsSpecification',
      vcoHealthCheck: 'VcoHealthCheck',
      vpnBgpConfig: 'VpnBgpConfig',
      vpnConnectionId: 'VpnConnectionId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      customerGatewayId: 'string',
      description: 'string',
      effectImmediately: 'boolean',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      enableTunnelsBgp: 'boolean',
      ikeConfig: ModifyVpnConnectionAttributeResponseBodyIkeConfig,
      ipsecConfig: ModifyVpnConnectionAttributeResponseBodyIpsecConfig,
      localSubnet: 'string',
      name: 'string',
      remoteSubnet: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      tunnelOptionsSpecification: ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecification,
      vcoHealthCheck: ModifyVpnConnectionAttributeResponseBodyVcoHealthCheck,
      vpnBgpConfig: ModifyVpnConnectionAttributeResponseBodyVpnBgpConfig,
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

