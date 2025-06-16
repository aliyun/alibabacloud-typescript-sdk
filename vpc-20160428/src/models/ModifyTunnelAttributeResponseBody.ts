// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyTunnelAttributeResponseBodyTunnelBgpConfig } from "./ModifyTunnelAttributeResponseBodyTunnelBgpConfig";
import { ModifyTunnelAttributeResponseBodyTunnelIkeConfig } from "./ModifyTunnelAttributeResponseBodyTunnelIkeConfig";
import { ModifyTunnelAttributeResponseBodyTunnelIpsecConfig } from "./ModifyTunnelAttributeResponseBodyTunnelIpsecConfig";


export class ModifyTunnelAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the customer gateway associated with the customer gateway.
   * 
   * @example
   * cgw-p0wx48ayhrygitm80****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Indicates whether DPD is enabled. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Indicates whether NAT traversal is enabled. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * The tunnel IP address.
   * 
   * @example
   * 47.XX.XX.87
   */
  internetIp?: string;
  /**
   * @remarks
   * The peer CA certificate when a VPN gateway that uses an SM certificate is used to create the IPsec connection.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E6F36FF0-9544-3AEE-8673-A4647D50064C
   */
  requestId?: string;
  /**
   * @remarks
   * The tunnel role. Valid values:
   * 
   * *   **master**
   * *   **slave**
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
   * The BGP configuration.
   */
  tunnelBgpConfig?: ModifyTunnelAttributeResponseBodyTunnelBgpConfig;
  /**
   * @remarks
   * The tunnel ID.
   * 
   * @example
   * tun-gbyz2e070xzo93****
   */
  tunnelId?: string;
  /**
   * @remarks
   * The Phase 1 configuration.
   */
  tunnelIkeConfig?: ModifyTunnelAttributeResponseBodyTunnelIkeConfig;
  /**
   * @remarks
   * The configurations of IPsec Phase 2.
   */
  tunnelIpsecConfig?: ModifyTunnelAttributeResponseBodyTunnelIpsecConfig;
  /**
   * @remarks
   * The tunnel zone.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneNo?: string;
  static names(): { [key: string]: string } {
    return {
      customerGatewayId: 'CustomerGatewayId',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      internetIp: 'InternetIp',
      remoteCaCertificate: 'RemoteCaCertificate',
      requestId: 'RequestId',
      role: 'Role',
      state: 'State',
      tunnelBgpConfig: 'TunnelBgpConfig',
      tunnelId: 'TunnelId',
      tunnelIkeConfig: 'TunnelIkeConfig',
      tunnelIpsecConfig: 'TunnelIpsecConfig',
      zoneNo: 'ZoneNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerGatewayId: 'string',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      internetIp: 'string',
      remoteCaCertificate: 'string',
      requestId: 'string',
      role: 'string',
      state: 'string',
      tunnelBgpConfig: ModifyTunnelAttributeResponseBodyTunnelBgpConfig,
      tunnelId: 'string',
      tunnelIkeConfig: ModifyTunnelAttributeResponseBodyTunnelIkeConfig,
      tunnelIpsecConfig: ModifyTunnelAttributeResponseBodyTunnelIpsecConfig,
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

