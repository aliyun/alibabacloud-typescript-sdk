// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyVpnAttachmentAttributeResponseBodyIkeConfig } from "./ModifyVpnAttachmentAttributeResponseBodyIkeConfig";
import { ModifyVpnAttachmentAttributeResponseBodyIpsecConfig } from "./ModifyVpnAttachmentAttributeResponseBodyIpsecConfig";
import { ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecification } from "./ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecification";
import { ModifyVpnAttachmentAttributeResponseBodyVcoHealthCheck } from "./ModifyVpnAttachmentAttributeResponseBodyVcoHealthCheck";
import { ModifyVpnAttachmentAttributeResponseBodyVpnBgpConfig } from "./ModifyVpnAttachmentAttributeResponseBodyVpnBgpConfig";


export class ModifyVpnAttachmentAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance to which the transit router associated with the IPsec-VPN connection belongs.
   * 
   * @example
   * cen-c2r3m3zxkumoqz****
   */
  attachInstanceId?: string;
  /**
   * @remarks
   * The type of the resource that is associated with the IPsec-VPN connection. Valid values:
   * 
   * *   **CEN**: The IPsec-VPN connection is associated with a transit router.
   * *   **VPNGW**: The IPsec-VPN connection is associated with a VPN gateway.
   * *   **NO_ASSOCIATED**: The IPsec-VPN connection is not associated with any resource.
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
   * 1658201810000
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
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether IPsec negotiations immediately start after the configuration takes effect. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * Indicates whether the DPD feature is enabled for the IPsec-VPN connection.
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
   * 
   * This parameter is returned only for single-tunnel IPsec-VPN connections.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Specifies whether to enable NAT traversal for the IPsec-VPN connection.
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
   * 
   * This parameter is returned only for single-tunnel IPsec-VPN connections.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Border Gateway Protocol (BGP) for tunnels.
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
   * 
   * This parameter is returned only by dual-tunnel IPsec-VPN connections.
   * 
   * @example
   * false
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * The configuration of Phase 1 negotiations.
   * 
   * **IkeConfig** parameters are returned only for single-tunnel IPsec-VPN connections.
   */
  ikeConfig?: ModifyVpnAttachmentAttributeResponseBodyIkeConfig;
  /**
   * @remarks
   * The configuration of Phase 2 negotiations.
   * 
   * **IpsecConfig** parameters are returned only for single-tunnel IPsec-VPN connections.
   */
  ipsecConfig?: ModifyVpnAttachmentAttributeResponseBodyIpsecConfig;
  /**
   * @remarks
   * The CIDR block on the Alibaba Cloud side that communicates with the on-premises data center is required, such as CIDR blocks of VPCs.
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
   * The network type of the IPsec-VPN connection. Valid values:
   * 
   * *   **public**: an encrypted connection over the Internet
   * *   **private**: an encrypted connection over private networks
   * 
   * @example
   * public
   */
  networkType?: string;
  /**
   * @remarks
   * The CIDR block of the on-premises data center that communicates with Alibaba Cloud is required.
   * 
   * @example
   * 10.1.3.0/24,10.1.4.0/24
   */
  remoteSubnet?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 35822A84-867F-3936-A2E6-A4C4E3ED11C0
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPsec-VPN connection belongs.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource groups.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The bandwidth specification of the IPsec-VPN connection.
   * 
   * A value of **M** in the response indicates **Mbit/s**.
   * 
   * @example
   * 1000M
   */
  spec?: string;
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
   * ike_sa_not_established
   */
  status?: string;
  /**
   * @remarks
   * The tunnel configurations of the IPsec-VPN connection.
   * 
   * **TunnelOptionsSpecification** parameters are returned only for dual-tunnel IPsec-VPN connections.
   */
  tunnelOptionsSpecification?: ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecification[];
  /**
   * @remarks
   * The health check configurations of the IPsec-VPN connection.
   * 
   * **VcoHealthCheck** parameters are returned only for single-tunnel IPsec-VPC connections.
   */
  vcoHealthCheck?: ModifyVpnAttachmentAttributeResponseBodyVcoHealthCheck;
  /**
   * @remarks
   * The BGP configurations of the IPsec-VPN connection.
   * 
   * **VpnBgpConfig** parameters are returned only for single-tunnel IPsec-VPN connections.
   */
  vpnBgpConfig?: ModifyVpnAttachmentAttributeResponseBodyVpnBgpConfig;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * @example
   * vco-p0w5112fgnl2ihlmf****
   */
  vpnConnectionId?: string;
  /**
   * @remarks
   * The ID of the VPN gateway that is associated with the IPsec-VPN connection.
   * 
   * **vpn-not-exist**: The IPsec-VPN connection is not associated with a VPN Gateway.
   * 
   * @example
   * vpn-p0wa1c1018pmeb6cu****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      attachInstanceId: 'AttachInstanceId',
      attachType: 'AttachType',
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
      networkType: 'NetworkType',
      remoteSubnet: 'RemoteSubnet',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      status: 'Status',
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
      customerGatewayId: 'string',
      description: 'string',
      effectImmediately: 'boolean',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      enableTunnelsBgp: 'boolean',
      ikeConfig: ModifyVpnAttachmentAttributeResponseBodyIkeConfig,
      ipsecConfig: ModifyVpnAttachmentAttributeResponseBodyIpsecConfig,
      localSubnet: 'string',
      name: 'string',
      networkType: 'string',
      remoteSubnet: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      status: 'string',
      tunnelOptionsSpecification: { 'type': 'array', 'itemType': ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecification },
      vcoHealthCheck: ModifyVpnAttachmentAttributeResponseBodyVcoHealthCheck,
      vpnBgpConfig: ModifyVpnAttachmentAttributeResponseBodyVpnBgpConfig,
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
    if(Array.isArray(this.tunnelOptionsSpecification)) {
      $dara.Model.validateArray(this.tunnelOptionsSpecification);
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

