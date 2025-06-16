// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyTunnelAttributeRequestTunnelOptionsSpecificationTunnelBgpConfig } from "./ModifyTunnelAttributeRequestTunnelOptionsSpecificationTunnelBgpConfig";
import { ModifyTunnelAttributeRequestTunnelOptionsSpecificationTunnelIkeConfig } from "./ModifyTunnelAttributeRequestTunnelOptionsSpecificationTunnelIkeConfig";
import { ModifyTunnelAttributeRequestTunnelOptionsSpecificationTunnelIpsecConfig } from "./ModifyTunnelAttributeRequestTunnelOptionsSpecificationTunnelIpsecConfig";


export class ModifyTunnelAttributeRequestTunnelOptionsSpecification extends $dara.Model {
  /**
   * @remarks
   * The ID of the customer gateway associated with the tunnel.
   * 
   * @example
   * cgw-1nmwbpgrp7ssqm1yn****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to enable dead peer detection (DPD). Valid values:
   * 
   * *   **true** The IPsec initiator sends DPD packets to check the IPsec peer is alive. If no response is received from the peer within a specified period of time, the IPsec peer is considered disconnected. Then, the ISAKMP SA, IPsec SA, and IPsec tunnel are deleted.
   * *   **false**: DPD is disabled. The IPsec initiator does not send DPD packets.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Specifies whether to enable NAT traversal. Valid values:
   * 
   * *   **true**: enables NAT traversal. After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the IPsec-VPN tunnel.
   * *   **false**: disables NAT traversal.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * The peer certificate authority (CA) certificate when you want to attach the IPsec connection to a virtual private network (VPN) gateway that uses a ShangMi (SM) certificate.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The Border Gateway Protocol (BGP) configurations of the tunnel.
   * 
   * If the BGP feature is not enabled for the tunnel, you must call the [ModifyVpnConnectionAttribute](https://help.aliyun.com/document_detail/120381.html) operation to enable the feature and configure BGP.
   */
  tunnelBgpConfig?: ModifyTunnelAttributeRequestTunnelOptionsSpecificationTunnelBgpConfig;
  /**
   * @remarks
   * The configurations of IKE Phase 1.
   */
  tunnelIkeConfig?: ModifyTunnelAttributeRequestTunnelOptionsSpecificationTunnelIkeConfig;
  /**
   * @remarks
   * The configurations of IPsec Phase 2.
   */
  tunnelIpsecConfig?: ModifyTunnelAttributeRequestTunnelOptionsSpecificationTunnelIpsecConfig;
  static names(): { [key: string]: string } {
    return {
      customerGatewayId: 'CustomerGatewayId',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      remoteCaCertificate: 'RemoteCaCertificate',
      tunnelBgpConfig: 'TunnelBgpConfig',
      tunnelIkeConfig: 'TunnelIkeConfig',
      tunnelIpsecConfig: 'TunnelIpsecConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerGatewayId: 'string',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      remoteCaCertificate: 'string',
      tunnelBgpConfig: ModifyTunnelAttributeRequestTunnelOptionsSpecificationTunnelBgpConfig,
      tunnelIkeConfig: ModifyTunnelAttributeRequestTunnelOptionsSpecificationTunnelIkeConfig,
      tunnelIpsecConfig: ModifyTunnelAttributeRequestTunnelOptionsSpecificationTunnelIpsecConfig,
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

