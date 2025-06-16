// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpsecServerRequest extends $dara.Model {
  /**
   * @remarks
   * The client CIDR block from which an IP address is allocated to the virtual network interface controller (NIC) of the client.
   * 
   * >  The client CIDR block must not overlap with the CIDR blocks of the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/24
   */
  clientIpPool?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * d7d24a21-f4ba-4454-9173-b38****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck this request. Valid values:
   * 
   * *   **true**: prechecks the request without creating the IPsec server. The system checks the required parameters, request format, and service limits. If the request fails to pass the precheck, an error code is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. This is the default value. If the request passes the precheck, the system creates the IPsec server.
   * 
   * @example
   * false
   */
  dryRun?: string;
  /**
   * @remarks
   * Specify whether to start connection negotiations immediately. Valid values:
   * 
   * *   **true**: immediately initiates negotiations after the configuration is complete.
   * *   **false** (default): initiates negotiations when inbound traffic is detected. This is the default value.
   * 
   * @example
   * true
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * The configuration of Phase 1 negotiation. Valid values:
   * 
   * *   **IkeVersion**: the IKE version. Valid values: **ikev1** and **ikev2**. Default value: **ikev2**.
   * *   **IkeMode**: the IKE negotiation mode. Default value: **main**.
   * *   **IkeEncAlg**: the encryption algorithm that is used in Phase 1 negotiation. Default value: **aes**.
   * *   **IkeAuthAlg**: the authentication algorithm that is used in Phase 1 negotiation. Default value: **sha1**.
   * *   **IkePfs**: the Diffie-Hellman key exchange algorithm that is used in Phase 1 negotiation. Default value: **group2**.
   * *   **IkeLifetime**: the security association (SA) lifetime determined by Phase 1 negotiation. Unit: seconds. Valid values: **0** to **86400**. Default value: **86400**.
   * *   **LocalId**: the identifier of the IPsec server. The value can be a fully qualified domain name (FQDN) or an IP address. The default value is the public IP address of the VPN gateway.
   * *   **RemoteId**: the peer identifier. The value can be an FQDN or an IP address. The default value is empty.
   * 
   * @example
   * {"IkeVersion":"ikev2","IkeMode":"main","IkeEncAlg":"aes","IkeAuthAlg":"sha1","IkePfs":"group2","IkeLifetime":86400}
   */
  ikeConfig?: string;
  /**
   * @remarks
   * The name of the IPsec server.
   * 
   * The name must be 1 to 100 characters in length.
   * 
   * @example
   * test
   */
  ipSecServerName?: string;
  /**
   * @remarks
   * The configuration of Phase 2 negotiation. Valid values:
   * 
   * *   **IpsecEncAlg**: the encryption algorithm that is used in Phase 2 negotiation. Default value: **aes**.
   * *   **IpsecAuthAlg**: the authentication algorithm that is used in Phase 2 negotiation. Default value: **sha1**.
   * *   **IpsecPfs**: forwards packets of all protocols. The Diffie-Hellman key exchange algorithm that is used in Phase 2 negotiation. Default value: **group2**.
   * *   **IpsecLifetime**: the SA lifetime determined by Phase 2 negotiation. Unit: seconds. Valid values: **0** to **86400**. Default value: **86400**.
   * 
   * @example
   * {"IpsecEncAlg":"aes","IpsecAuthAlg":"sha1","IpsecPfs":"group2","IpsecLifetime":86400}
   */
  ipsecConfig?: string;
  /**
   * @remarks
   * The local CIDR blocks, which are the CIDR blocks of the virtual private cloud (VPC) for the client to access.
   * 
   * Multiple CIDR blocks are separated with commas (,). Example: 192.168.1.0/24,192.168.2.0/24.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.0.0/24
   */
  localSubnet?: string;
  /**
   * @remarks
   * The pre-shared key.
   * 
   * The pre-shared key that is used for authentication between the IPsec-VPN server and the client. It must be 1 to 100 characters in length.
   * 
   * If you do not specify a pre-shared key, the system randomly generates a 16-bit string as the pre-shared key. You can call [ListIpsecServers](https://help.aliyun.com/document_detail/2794120.html) to query keys generated by the system.
   * 
   * > The pre-shared key of the IPsec server key must be the same as that of the client. Otherwise, the connection between the IPsec server and the client cannot be established.
   * 
   * @example
   * Cfd123****
   */
  psk?: string;
  /**
   * @remarks
   * Indicates whether pre-shared key authentication is enabled. If you set the value to **true**, pre-shared key authentication is enabled.
   * 
   * >  This parameter is required.
   * 
   * @example
   * true
   */
  pskEnabled?: boolean;
  /**
   * @remarks
   * The ID of the region where the VPN gateway is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * vpn-bp17lofy9fd0dnvzv****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIpPool: 'ClientIpPool',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      effectImmediately: 'EffectImmediately',
      ikeConfig: 'IkeConfig',
      ipSecServerName: 'IpSecServerName',
      ipsecConfig: 'IpsecConfig',
      localSubnet: 'LocalSubnet',
      psk: 'Psk',
      pskEnabled: 'PskEnabled',
      regionId: 'RegionId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIpPool: 'string',
      clientToken: 'string',
      dryRun: 'string',
      effectImmediately: 'boolean',
      ikeConfig: 'string',
      ipSecServerName: 'string',
      ipsecConfig: 'string',
      localSubnet: 'string',
      psk: 'string',
      pskEnabled: 'boolean',
      regionId: 'string',
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

