// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelBgpConfig } from "./ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelBgpConfig";
import { ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelIkeConfig } from "./ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelIkeConfig";
import { ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelIpsecConfig } from "./ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelIpsecConfig";


export class ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecification extends $dara.Model {
  /**
   * @remarks
   * The ID of the customer gateway that is associated with the tunnel.
   * 
   * @example
   * cgw-p0w2jemrcj5u61un8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Whether the DPD feature is enabled for the tunnel.
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Indicates whether traversal feature is enabled for the tunnel. Valid values:
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * The IP address on the Alibaba Cloud side.
   * 
   * @example
   * 47.XX.XX.66
   */
  internetIp?: string;
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
   * The status of the tunnel. Valid values:
   * 
   * *   **active**: The tunnel is active.
   * *   **updating**: The tunnel is being updated.
   * *   **deleting:** The tunnel is being deleted.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * BGP configuration.
   */
  tunnelBgpConfig?: ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelBgpConfig;
  /**
   * @remarks
   * The tunnel ID.
   * 
   * @example
   * tun-0jod7plwf2a0o9lvu****
   */
  tunnelId?: string;
  /**
   * @remarks
   * The configurations of Phase 1 negotiations.
   */
  tunnelIkeConfig?: ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelIkeConfig;
  /**
   * @remarks
   * The order in which the tunnel was created.
   * 
   * *   **1**: Tunnel 1.
   * *   **2**: Tunnel 2.
   * 
   * @example
   * 1
   */
  tunnelIndex?: number;
  /**
   * @remarks
   * The configurations of Phase 2 negotiations.
   */
  tunnelIpsecConfig?: ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelIpsecConfig;
  static names(): { [key: string]: string } {
    return {
      customerGatewayId: 'CustomerGatewayId',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      internetIp: 'InternetIp',
      role: 'Role',
      state: 'State',
      tunnelBgpConfig: 'TunnelBgpConfig',
      tunnelId: 'TunnelId',
      tunnelIkeConfig: 'TunnelIkeConfig',
      tunnelIndex: 'TunnelIndex',
      tunnelIpsecConfig: 'TunnelIpsecConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerGatewayId: 'string',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      internetIp: 'string',
      role: 'string',
      state: 'string',
      tunnelBgpConfig: ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelBgpConfig,
      tunnelId: 'string',
      tunnelIkeConfig: ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelIkeConfig,
      tunnelIndex: 'number',
      tunnelIpsecConfig: ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelIpsecConfig,
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

