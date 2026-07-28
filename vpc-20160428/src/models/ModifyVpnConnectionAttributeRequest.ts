// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelBgpConfig extends $dara.Model {
  /**
   * @remarks
   * The autonomous system number (ASN) on the tunnel local side (Alibaba Cloud side). Valid values: **1** to **4294967295**. Default value: **45104**.
   * 
   * > - This parameter can be configured or modified after you enable the BGP dynamic route feature for the IPsec-VPN connection (by setting **EnableTunnelsBgp** to **true**).
   * >- Before you add BGP configurations, understand the working mechanism and limits of BGP dynamic route feature. For more information, see [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/2638220.html).
   * >- Use a private ASN to establish a BGP connection with Alibaba Cloud. Refer to the relevant documentation for the range of private ASNs.
   * 
   * @example
   * 65530
   */
  localAsn?: number;
  /**
   * @remarks
   * The BGP address on the tunnel local side (Alibaba Cloud side). This address is an IP address within the BGP CIDR block.
   * 
   * @example
   * 169.254.10.1
   */
  localBgpIp?: string;
  /**
   * @remarks
   * The BGP CIDR block of the tunnel.
   * 
   * The CIDR block must be a mask length of 30 within 169.254.0.0/16 and cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
   * 
   * > The BGP CIDR block of each tunnel under a VPN gateway instance must be unique.
   * 
   * @example
   * 169.254.10.0/30
   */
  tunnelCidr?: string;
  static names(): { [key: string]: string } {
    return {
      localAsn: 'LocalAsn',
      localBgpIp: 'LocalBgpIp',
      tunnelCidr: 'TunnelCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localAsn: 'number',
      localBgpIp: 'string',
      tunnelCidr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelIkeConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm used in Phase 1 negotiation.
   * 
   * <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is standard, valid values are **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is Chinese SM-based, the only valid value is **sm3**.</ph>
   * 
   * @example
   * md5
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm used in Phase 1 negotiation.
   * 
   * <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is standard, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is Chinese SM-based, the only valid value is **sm4**.</ph>
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * The SA lifetime determined by Phase 1 negotiation. Unit: seconds. Valid values: **0** to **86400**.
   * 
   * @example
   * 86400
   */
  ikeLifetime?: number;
  /**
   * @remarks
   * The negotiation mode of the IKE version. Valid values:
   * 
   * - **main**: Main mode. This mode offers high security during negotiation.
   * - **aggressive**: Aggressive mode. This mode supports fast negotiation and a higher success rate.
   * 
   * <props="china"><ph>If the VPN gateway instance type is Chinese SM-based, only **main** is supported for the negotiation mode.</ph>
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The Diffie-Hellman key exchange algorithm used in Phase 1 negotiation. Valid values: **group1**, **group2**, **group5**, and **group14**.
   * 
   * @example
   * group2
   */
  ikePfs?: string;
  /**
   * @remarks
   * The version of the IKE protocol. Valid values: **ikev1** and **ikev2**.
   * 
   * Compared with IKEv1, IKEv2 simplifies the SA negotiation process and provides better support for multi-CIDR-block scenarios.
   * 
   * <props="china"><ph>If the VPN gateway instance type is Chinese SM-based, only **ikev1** is supported for the IKE version.</ph>
   * 
   * @example
   * ikev1
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier of the tunnel local side (Alibaba Cloud side), which is used in Phase 1 negotiation. The identifier can be up to 100 characters in length and cannot contain spaces. The default value is the IP address of the tunnel.
   * 
   * **LocalId** supports the FQDN format. If you use the FQDN format, set the negotiation mode to **aggressive**.
   * 
   * @example
   * 47.21.XX.XX
   */
  localId?: string;
  /**
   * @remarks
   * The pre-shared key used for identity authentication between the tunnel and the tunnel peer.
   * 
   * - The key must be 1 to 100 characters in length and can contain digits, letters, and the following characters. It cannot contain spaces. ```~!\\`@#$%^&*()_-+={}[]|;:\\",.<>/?```
   * 
   * - If you do not specify a pre-shared key, the system generates a random 16-character string as the pre-shared key. You can call the [DescribeVpnConnection](https://help.aliyun.com/document_detail/2526951.html) operation to query the pre-shared key that is automatically generated by the system.     
   * 
   * > The pre-shared key of the tunnel must be the same as that of the tunnel peer. Otherwise, the tunnel cannot be established.
   * 
   * @example
   * 123456****
   */
  psk?: string;
  /**
   * @remarks
   * The identifier of the tunnel peer, which is used in Phase 1 negotiation. The identifier can be up to 100 characters in length and cannot contain spaces. The default value is the IP address of the customer gateway associated with the tunnel.
   * 
   * **RemoteId** supports the FQDN format. If you use the FQDN format, set the negotiation mode to **aggressive**.
   * 
   * @example
   * 47.42.XX.XX
   */
  remoteId?: string;
  static names(): { [key: string]: string } {
    return {
      ikeAuthAlg: 'IkeAuthAlg',
      ikeEncAlg: 'IkeEncAlg',
      ikeLifetime: 'IkeLifetime',
      ikeMode: 'IkeMode',
      ikePfs: 'IkePfs',
      ikeVersion: 'IkeVersion',
      localId: 'LocalId',
      psk: 'Psk',
      remoteId: 'RemoteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ikeAuthAlg: 'string',
      ikeEncAlg: 'string',
      ikeLifetime: 'number',
      ikeMode: 'string',
      ikePfs: 'string',
      ikeVersion: 'string',
      localId: 'string',
      psk: 'string',
      remoteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelIpsecConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm used in Phase 2 negotiation.
   * 
   * <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is standard, valid values are **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is Chinese SM-based, the only valid value is **sm3**.</ph>
   * 
   * @example
   * md5
   */
  ipsecAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm used in Phase 2 negotiation.
   * 
   * <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is standard, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is Chinese SM-based, the only valid value is **sm4**.</ph>
   * 
   * @example
   * aes
   */
  ipsecEncAlg?: string;
  /**
   * @remarks
   * The SA lifetime determined by Phase 2 negotiation. Unit: seconds. Valid values: **0** to **86400**.
   * 
   * @example
   * 86400
   */
  ipsecLifetime?: number;
  /**
   * @remarks
   * The Diffie-Hellman key exchange algorithm used in Phase 2 negotiation.
   * 
   * Valid values: **disabled**, **group1**, **group2**, **group5**, and **group14**.
   * 
   * @example
   * group2
   */
  ipsecPfs?: string;
  static names(): { [key: string]: string } {
    return {
      ipsecAuthAlg: 'IpsecAuthAlg',
      ipsecEncAlg: 'IpsecEncAlg',
      ipsecLifetime: 'IpsecLifetime',
      ipsecPfs: 'IpsecPfs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipsecAuthAlg: 'string',
      ipsecEncAlg: 'string',
      ipsecLifetime: 'number',
      ipsecPfs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnConnectionAttributeRequestTunnelOptionsSpecification extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the customer gateway associated with the tunnel.
   * 
   * @example
   * cgw-1nmwbpgrp7ssqm1yn****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to enable the DPD (Dead Peer Detection) feature for the tunnel. Valid values:
   * 
   * - **true**: Enables the DPD feature. The IPsec initiator sends DPD packets to check whether the peer device is alive. If no correct response is received within the specified period of time, the peer is considered disconnected. The ISAKMP SA and the corresponding IPsec SA are deleted, and the security tunnel is also deleted.
   * 
   * - **false**: Disables the DPD feature. The IPsec initiator does not send DPD packets.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the NAT traversal feature for the tunnel. Valid values:
   * 
   * - **true**: Enables NAT traversal. After NAT traversal is enabled, the IKE negotiation process skips UDP port number verification and can discover NAT gateway devices in the VPN tunnel.
   * 
   * - **false**: Disables NAT traversal.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * If the current VPN gateway instance is a Chinese SM-based VPN gateway, you can modify the CA certificate of the tunnel peer.
   * 
   * If the current VPN gateway instance is a standard VPN gateway, this parameter is not supported.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The role of the tunnel. Valid values:
   * 
   * - **master**: The tunnel is the active tunnel.
   * - **slave**: The tunnel is the standby tunnel.
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The BGP configuration of the tunnel to modify.
   */
  tunnelBgpConfig?: ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelBgpConfig;
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
   * The Phase 1 negotiation configuration.
   */
  tunnelIkeConfig?: ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelIkeConfig;
  /**
   * @remarks
   * The Phase 2 negotiation configuration.
   */
  tunnelIpsecConfig?: ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelIpsecConfig;
  static names(): { [key: string]: string } {
    return {
      customerGatewayId: 'CustomerGatewayId',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      remoteCaCertificate: 'RemoteCaCertificate',
      role: 'Role',
      tunnelBgpConfig: 'TunnelBgpConfig',
      tunnelId: 'TunnelId',
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
      role: 'string',
      tunnelBgpConfig: ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelBgpConfig,
      tunnelId: 'string',
      tunnelIkeConfig: ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelIkeConfig,
      tunnelIpsecConfig: ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelIpsecConfig,
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

export class ModifyVpnConnectionAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically publish route entry. Valid values:
   * 
   * - **true**: Automatically publishes route entries.
   *    
   * - **false**: Does not automatically publish route entries.
   * 
   * @example
   * true
   */
  autoConfigRoute?: boolean;
  /**
   * @remarks
   * This parameter is supported when you modify a single-tunnel IPsec-VPN connection.
   * 
   * The BGP configuration:
   * 
   * - **BgpConfig.EnableBgp**: Specifies whether to enable the BGP feature. Valid values: **true** and **false**.
   * 
   * - **BgpConfig.LocalAsn**: The autonomous system number (ASN) on the Alibaba Cloud side. Valid values: **1** to **4294967295**.
   * 
   *    The ASN can be entered in the two-segment format: the first 16 bits.the last 16 bits. Each segment is entered in decimal format.
   * 
   *     For example, if you enter 123.456, the ASN is 123 × 65536 + 456 = 8061384.
   * 
   * - **BgpConfig.TunnelCidr**: The CIDR block of the IPsec tunnel. The CIDR block must be a mask length of 30 within 169.254.0.0/16 and cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
   * 
   *     > The IPsec tunnel CIDR block of each IPsec-VPN connection under a VPN gateway instance must be unique.
   * 
   * - **LocalBgpIp**: The BGP address on the Alibaba Cloud side. This address is an IP address within the IPsec tunnel CIDR block.
   * 
   * > - Configure this parameter when BGP dynamic routing is enabled on your VPN gateway.
   * >- Before you add BGP configurations, understand the working mechanism and limits of BGP dynamic routing. For more information, see [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/2638220.html).
   * >- Use a private ASN to establish a BGP connection with Alibaba Cloud. Refer to the relevant documentation for the range of private ASNs.
   * 
   * @example
   * {"EnableBgp":"true","LocalAsn":"65530","TunnelCidr":"169.254.11.0/30","LocalBgpIp":"169.254.11.1"}
   */
  bgpConfig?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether the IPsec-VPN connection configuration takes effect immediately. Valid values:
   *            
   * - **true**: The system immediately initiates IPsec protocol negotiation after the configuration is complete.
   *    
   * - **false**: The system initiates IPsec protocol negotiation only when inbound traffic is detected.
   * 
   * @example
   * false
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * This parameter is supported when you modify a single-tunnel IPsec-VPN connection.
   * 
   * Specifies whether to enable the DPD (Dead Peer Detection) feature. Valid values:
   * 
   * - **true**: Enables the DPD feature. The IPsec initiator sends DPD packets to check whether the peer device is alive. If no correct response is received within the specified period of time, the peer is considered disconnected. The ISAKMP SA and the corresponding IPsec SA are deleted, and the security tunnel is also deleted.
   * 
   * - **false**: Disables the DPD feature. The IPsec initiator does not send DPD packets.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * This parameter is supported when you modify a single-tunnel IPsec-VPN connection.
   * 
   * Specifies whether to enable the NAT traversal feature. Valid values:
   * 
   * - **true**: Enables NAT traversal. After NAT traversal is enabled, the IKE negotiation process skips UDP port number verification and can discover NAT gateway devices in the VPN tunnel.
   * 
   * - **false**: Disables NAT traversal.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * This parameter is supported when you modify a dual-tunnel IPsec-VPN connection.
   * 
   * Specifies whether to enable BGP for the tunnels. Valid values: **true** and **false**.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * This parameter is supported when you modify a single-tunnel IPsec-VPN connection.
   * 
   * The health check configuration:
   * 
   * - **HealthCheckConfig.enable**: Specifies whether to enable health checks. Valid values: **true** and **false**.
   * 
   * - **HealthCheckConfig.dip**: The destination IP address of the health check.
   * 
   * - **HealthCheckConfig.sip**: The source IP address of the health check.
   * 
   * - **HealthCheckConfig.interval**: The retry interval of the health check. Unit: seconds.
   * 
   * - **HealthCheckConfig.retry**: The number of retries for the health check.
   * 
   * @example
   * {"enable":"true","dip":"192.168.1.1","sip":"10.1.1.1","interval":"3","retry":"3"}
   */
  healthCheckConfig?: string;
  /**
   * @remarks
   * This parameter is supported when you modify a single-tunnel IPsec-VPN connection.
   * 
   * The Phase 1 negotiation configuration: 
   *            
   * - **IkeConfig.Psk**: The pre-shared key used for identity authentication between the VPN gateway and the on-premises data center.
   * 
   *     - The key must be 1 to 100 characters in length and can contain digits, letters, and the following characters. It cannot contain spaces. ```~!`@#$%^&*()_-+={}[]|;:\\",.<>/?```
   *     - If you do not specify a pre-shared key, the system generates a random 16-character string as the pre-shared key. You can call the [DescribeVpnConnection](https://help.aliyun.com/document_detail/2526951.html) operation to query the pre-shared key that is automatically generated by the system.
   *     > The pre-shared key on the IPsec-VPN connection side must be the same as the authentication key on the on-premises data center side. Otherwise, the connection between the on-premises data center and the VPN gateway cannot be established. 
   * 
   * - **IkeConfig.IkeVersion**: The version of the IKE protocol. Valid values: **ikev1** and **ikev2**. 
   * 
   *     Compared with IKEv1, IKEv2 simplifies the SA negotiation process and provides better support for multi-CIDR-block scenarios.
   * 
   *     <props="china"><ph>If the VPN gateway instance type is Chinese SM-based, only **ikev1** is supported for the IKE version.</ph>
   * 
   * - **IkeConfig.IkeMode**: The negotiation mode of the IKE version. Valid values: **main** and **aggressive**.   
   *     - **main**: Main mode. This mode offers high security during negotiation.
   *     - **aggressive**: Aggressive mode. This mode supports fast negotiation and a higher success rate.
   * 
   *     <props="china"><ph>If the VPN gateway instance type is Chinese SM-based, only **main** is supported for the negotiation mode.</ph>
   * 
   * - **IkeConfig.IkeEncAlg**: The encryption algorithm used in Phase 1 negotiation.
   * 
   *     <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway instance type is standard, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway instance type is Chinese SM-based, the only valid value is **sm4**.</ph>
   * 
   * - **IkeConfig.IkeAuthAlg**: The authentication algorithm used in Phase 1 negotiation.
   * 
   *     <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway instance type is standard, valid values are **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway instance type is Chinese SM-based, the only valid value is **sm3**.</ph>
   * 
   * - **IkeConfig.IkePfs**: The Diffie-Hellman key exchange algorithm used in Phase 1 negotiation. Valid values: **group1**, **group2**, **group5**, and **group14**.
   * 
   * - **IkeConfig.IkeLifetime**: The SA lifetime determined by Phase 1 negotiation. Unit: seconds. Valid values: **0** to **86400**.
   * 
   * - **IkeConfig.LocalId**: The identifier of the VPN gateway. The identifier can be up to 100 characters in length and cannot contain spaces. The default value is the IP address of the VPN gateway. 
   * 
   * - **IkeConfig.RemoteId**: The identifier of the customer gateway. The identifier can be up to 100 characters in length and cannot contain spaces. The default value is the IP address of the customer gateway.
   * 
   * @example
   * {"Psk":"pgw6dy7d1i8i****","IkeVersion":"ikev1","IkeMode":"main","IkeEncAlg":"aes","IkeAuthAlg":"sha1","IkePfs":"group2","IkeLifetime":86400,"LocalId":"116.64.XX.XX","RemoteId":"139.18.XX.XX"}
   */
  ikeConfig?: string;
  /**
   * @remarks
   * This parameter is supported when you modify a single-tunnel IPsec-VPN connection.
   * 
   * The Phase 2 negotiation configuration: 
   * 
   * - **IpsecConfig.IpsecEncAlg**: The encryption algorithm used in Phase 2 negotiation.
   * 
   *     <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway instance type is standard, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway instance type is Chinese SM-based, the only valid value is **sm4**.</ph>
   * 
   * - **IpsecConfig. IpsecAuthAlg**: The authentication algorithm used in Phase 2 negotiation.
   * 
   *     <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway instance type is standard, valid values are **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway instance type is Chinese SM-based, the only valid value is **sm3**.</ph>
   * 
   * - **IpsecConfig. IpsecPfs**: The Diffie-Hellman key exchange algorithm used in Phase 2 negotiation for forwarding packets of all protocols. Valid values: **disabled**, **group1**, **group2**, **group5**, and **group14**.   
   * 
   * - **IpsecConfig. IpsecLifetime**: The SA lifetime determined by Phase 2 negotiation. Unit: seconds. Valid values: **0** to **86400**.
   * 
   * @example
   * {"IpsecEncAlg":"aes","IpsecAuthAlg":"sha1","IpsecPfs":"group2","IpsecLifetime":86400}
   */
  ipsecConfig?: string;
  /**
   * @remarks
   * The CIDR block on the VPC side that needs to communicate with the on-premises data center. This CIDR block is used in Phase 2 negotiation.
   * 
   * Separate multiple CIDR blocks with commas (,). Example: 192.168.1.0/24,192.168.2.0/24.
   * 
   * The following routing modes are supported for IPsec-VPN connections:
   * 
   * - If you set both **LocalSubnet** and **RemoteSubnet** to 0.0.0.0/0, the destination routing mode is used.
   * - If you set both **LocalSubnet** and **RemoteSubnet** to specific CIDR blocks, the protected data flow mode is used.
   * 
   * @example
   * 10.1.1.0/24,10.1.2.0/24
   */
  localSubnet?: string;
  /**
   * @remarks
   * The name of the IPsec-VPN connection.  
   * 
   * The name must be 1 to 100 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * nametest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the IPsec-VPN connection. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is supported when you modify a single-tunnel IPsec-VPN connection.
   * 
   * If the current VPN gateway instance is a Chinese SM-based VPN gateway, you can modify the CA certificate of the peer.
   * 
   * If the current VPN gateway instance is a standard VPN gateway, this parameter is not supported.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The CIDR block on the on-premises data center side. This CIDR block is used in Phase 2 negotiation.
   * 
   * Separate multiple CIDR blocks with commas (,). Example: 192.168.3.0/24,192.168.4.0/24.
   * 
   * The following routing modes are supported for IPsec-VPN connections:
   * 
   * - If you set both **LocalSubnet** and **RemoteSubnet** to 0.0.0.0/0, the destination routing mode is used.
   * - If you set both **LocalSubnet** and **RemoteSubnet** to specific CIDR blocks, the protected data flow mode is used.
   * 
   * @example
   * 10.2.1.0/24,10.2.2.0/24
   */
  remoteSubnet?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tunnel configurations to modify.
   * 
   * The parameters under the **TunnelOptionsSpecification** array are supported only when you modify a dual-tunnel IPsec-VPN connection. You can modify the configurations of both the active and standby tunnels of the IPsec-VPN connection at the same time.
   * 
   * **if can be null:**
   * true
   */
  tunnelOptionsSpecification?: ModifyVpnConnectionAttributeRequestTunnelOptionsSpecification[];
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * This parameter is required.
   * 
   * @example
   * vco-bp1bbi27hojx80nck****
   */
  vpnConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoConfigRoute: 'AutoConfigRoute',
      bgpConfig: 'BgpConfig',
      clientToken: 'ClientToken',
      effectImmediately: 'EffectImmediately',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      enableTunnelsBgp: 'EnableTunnelsBgp',
      healthCheckConfig: 'HealthCheckConfig',
      ikeConfig: 'IkeConfig',
      ipsecConfig: 'IpsecConfig',
      localSubnet: 'LocalSubnet',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      remoteCaCertificate: 'RemoteCaCertificate',
      remoteSubnet: 'RemoteSubnet',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tunnelOptionsSpecification: 'TunnelOptionsSpecification',
      vpnConnectionId: 'VpnConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoConfigRoute: 'boolean',
      bgpConfig: 'string',
      clientToken: 'string',
      effectImmediately: 'boolean',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      enableTunnelsBgp: 'boolean',
      healthCheckConfig: 'string',
      ikeConfig: 'string',
      ipsecConfig: 'string',
      localSubnet: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      remoteCaCertificate: 'string',
      remoteSubnet: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tunnelOptionsSpecification: { 'type': 'array', 'itemType': ModifyVpnConnectionAttributeRequestTunnelOptionsSpecification },
      vpnConnectionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tunnelOptionsSpecification)) {
      $dara.Model.validateArray(this.tunnelOptionsSpecification);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

