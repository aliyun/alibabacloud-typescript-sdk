// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelBgpConfig extends $dara.Model {
  /**
   * @remarks
   * The autonomous system number (ASN) on the Alibaba Cloud side of the tunnel. Valid values: **1** to **4294967295**. Default value: **45104**.
   * 
   * > - This parameter can be configured or modified only after you enable the BGP feature for the IPsec-VPN connection (that is, set **EnableTunnelsBgp** to **true**).
   * > - Before adding BGP configurations, understand the working mechanism and limits of BGP dynamic routing. For more information, see [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/2638220.html).
   * > - Use a private ASN to establish a BGP connection with Alibaba Cloud. Refer to relevant documentation for the range of private ASNs.
   * 
   * @example
   * 65530
   */
  localAsn?: number;
  /**
   * @remarks
   * The BGP IP address on the Alibaba Cloud side of the tunnel. This IP address must be within the BGP CIDR block.
   * 
   * @example
   * 169.254.10.1
   */
  localBgpIp?: string;
  /**
   * @remarks
   * The BGP CIDR block of the tunnel.
   * 
   * The CIDR block must be a subnet with a mask length of 30 within 169.254.0.0/16, and cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
   * 
   * > The BGP CIDR block of each tunnel under the same VPN gateway instance must be unique.
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
   * The authentication algorithm used in Phase 1 negotiations.
   * 
   * <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway is a standard gateway, valid values are **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway is an SM gateway, the only valid value is **sm3**.</ph>
   * 
   * @example
   * md5
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm used in Phase 1 negotiations.
   * 
   * <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway is a standard gateway, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway is an SM gateway, the only valid value is **sm4**.</ph>
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * The SA lifetime determined by Phase 1 negotiations. Unit: seconds. Valid values: **0** to **86400**.
   * 
   * @example
   * 86400
   */
  ikeLifetime?: number;
  /**
   * @remarks
   * The negotiation mode of the IKE version. Valid values:
   * 
   * - **main**: The main mode. The negotiation process is highly secure.
   * - **aggressive**: The aggressive mode. The negotiation process is fast and has a high success rate.
   * 
   * <props="china"><ph>If the VPN gateway is an SM gateway, only **main** is supported.</ph>
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The Diffie-Hellman key exchange algorithm used in Phase 1 negotiations. Valid values: **group1**, **group2**, **group5**, and **group14**.
   * 
   * @example
   * group2
   */
  ikePfs?: string;
  /**
   * @remarks
   * The version of the IKE protocol. Valid values: **ikev1** and **ikev2**.
   * 
   * Compared with IKEv1, IKEv2 simplifies the SA negotiation process and provides better support for multi-CIDR block scenarios.
   * 
   * <props="china"><ph>If the VPN gateway is an SM gateway, only **ikev1** is supported.</ph>
   * 
   * @example
   * ikev1
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier on the Alibaba Cloud side of the tunnel, which is used for Phase 1 negotiations. The identifier can be up to 100 characters in length and cannot contain spaces. The default value is the IP address of the tunnel.
   * 
   * **LocalId** supports the FQDN format. If you use the FQDN format, set the negotiation mode to **aggressive**.
   * 
   * @example
   * 47.21.XX.XX
   */
  localId?: string;
  /**
   * @remarks
   * The pre-shared key used for authentication between the tunnel and the peer.
   * 
   * - The key must be 1 to 100 characters in length and can contain digits, letters, and the following special characters: ```~!`@#$%^&*()_-+={}[]|;:\\",.<>/?``` It cannot contain spaces.
   * 
   * - If you do not specify a pre-shared key, the system randomly generates a 16-character string as the pre-shared key. You can call the [DescribeVpnConnection](https://help.aliyun.com/document_detail/2526951.html) operation to query the automatically generated pre-shared key.     
   * 
   * > The pre-shared key of the tunnel must be the same as that of the peer. Otherwise, the system cannot establish the tunnel.
   * 
   * @example
   * 123456****
   */
  psk?: string;
  /**
   * @remarks
   * The identifier of the peer, which is used for Phase 1 negotiations. The identifier can be up to 100 characters in length and cannot contain spaces. The default value is the IP address of the customer gateway associated with the tunnel.
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
   * The authentication algorithm used in Phase 2 negotiations.
   * 
   * <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway is a standard gateway, valid values are **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway is an SM gateway, the only valid value is **sm3**.</ph>
   * 
   * @example
   * md5
   */
  ipsecAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm used in Phase 2 negotiations.
   * 
   * <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway is a standard gateway, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway is an SM gateway, the only valid value is **sm4**.</ph>
   * 
   * @example
   * aes
   */
  ipsecEncAlg?: string;
  /**
   * @remarks
   * The SA lifetime determined by Phase 2 negotiations. Unit: seconds. Valid values: **0** to **86400**.
   * 
   * @example
   * 86400
   */
  ipsecLifetime?: number;
  /**
   * @remarks
   * The Diffie-Hellman key exchange algorithm used in Phase 2 negotiations.
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
   * The instance ID of the customer gateway instance associated with the tunnel.
   * 
   * @example
   * cgw-1nmwbpgrp7ssqm1yn****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to enable the dead peer detection (DPD) feature for the tunnel. Valid values:
   * 
   * - **true**: Enables the DPD feature. The IPsec initiator sends DPD packets to check whether the peer device is alive. If no correct response is received within the specified time, the peer is considered disconnected. IPsec deletes the ISAKMP SA and the corresponding IPsec SA, and the secure tunnel is also deleted.
   * 
   * - **false**: Disables the DPD feature. The IPsec initiator does not send DPD probe packets.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the NAT traversal feature for the tunnel. Valid values:
   * 
   * - **true**: Enables the NAT traversal feature. After this feature is enabled, the IKE negotiation process skips the verification of UDP port numbers and discovers NAT gateway devices in the VPN tunnel.
   * 
   * - **false**: Disables the NAT traversal feature.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * If the current VPN gateway is an SM VPN gateway, you can modify the CA certificate of the peer for the tunnel.
   * 
   * If the current VPN gateway is a standard VPN gateway, this parameter is not supported.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The role of the tunnel.
   * 
   * - **master**: The current tunnel is the primary tunnel.
   * - **slave**: The current tunnel is the secondary tunnel.
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The BGP configurations of the tunnel.
   */
  tunnelBgpConfig?: ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelBgpConfig;
  /**
   * @remarks
   * The ID of the tunnel.
   * 
   * @example
   * tun-opsqc4d97wni27****
   */
  tunnelId?: string;
  /**
   * @remarks
   * The configurations for Phase 1 negotiations.
   */
  tunnelIkeConfig?: ModifyVpnConnectionAttributeRequestTunnelOptionsSpecificationTunnelIkeConfig;
  /**
   * @remarks
   * The configurations for Phase 2 negotiations.
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
   * - **true**: Automatically publishes route entry.
   *    
   * - **false**: Does not automatically publish route entry.
   * 
   * @example
   * true
   */
  autoConfigRoute?: boolean;
  /**
   * @remarks
   * This parameter is supported when you modify an IPsec-VPN connection in single-tunnel pattern.
   * 
   * The BGP configurations:
   * 
   * - **BgpConfig.EnableBgp**: Specifies whether to enable the BGP feature. Valid values: **true** and **false**.
   * 
   * - **BgpConfig.LocalAsn**: The autonomous system number (ASN) on the Alibaba Cloud side. Valid values: **1** to **4294967295**.  
   * 
   *    You can enter the ASN in a two-part format: the first 16 bits and the last 16 bits, separated by a period. Each part must be entered in decimal format.
   * 
   *     For example, if you enter 123.456, the ASN is calculated as follows: 123 × 65536 + 456 = 8061384.
   * 
   * - **BgpConfig.TunnelCidr**: The CIDR block of the IPsec tunnel. The CIDR block must be a subnet with a mask length of 30 within 169.254.0.0/16, and cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
   * 
   *     > The IPsec tunnel CIDR block of each IPsec-VPN connection under the same VPN gateway instance must be unique.
   * 
   * - **LocalBgpIp**: The BGP IP address on the Alibaba Cloud side. This IP address must be within the IPsec tunnel CIDR block. 
   * 
   * > - This parameter is required when the BGP dynamic routing feature is enabled for the VPN gateway.
   * > - Before adding BGP configurations, understand the working mechanism and limits of BGP dynamic routing. For more information, see [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/2638220.html).
   * > - Use a private ASN to establish a BGP connection with Alibaba Cloud. Refer to relevant documentation for the range of private ASNs.
   * 
   * @example
   * {"EnableBgp":"true","LocalAsn":"65530","TunnelCidr":"169.254.11.0/30","LocalBgpIp":"169.254.11.1"}
   */
  bgpConfig?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether the configurations of the IPsec-VPN connection take effect immediately. Valid values:
   *            
   * - **true**: Yes. The system immediately initiates IPsec negotiations after the configurations are completed.
   *    
   * - **false**: No. The system initiates IPsec negotiations only when traffic is detected.
   * 
   * @example
   * false
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * This parameter is supported when you modify an IPsec-VPN connection in single-tunnel mode.
   * 
   * Specifies whether to enable the dead peer detection (DPD) feature. Valid values:
   * 
   * - **true**: Enables the DPD feature. The IPsec initiator sends DPD packets to check whether the peer device is alive. If no correct response is received within the specified time, the peer is considered disconnected. IPsec deletes the ISAKMP SA and the corresponding IPsec SA, and the secure tunnel is also deleted.
   * 
   * - **false**: Disables the DPD feature. The IPsec initiator does not send DPD probe packets.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * This parameter is supported when you modify an IPsec-VPN connection in single-tunnel mode.
   * 
   * Specifies whether to enable the NAT traversal feature. Valid values:
   * 
   * - **true**: Enables the NAT traversal feature. After this feature is enabled, the IKE negotiation process skips the verification of UDP port numbers and discovers NAT gateway devices in the VPN tunnel.
   * 
   * - **false**: Disables the NAT traversal feature.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * This parameter is supported when you modify an IPsec-VPN connection in dual-tunnel mode.
   * 
   * Specifies whether to enable the BGP feature for the tunnel. Valid values: **true** and **false**.
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
   * This parameter is supported when you modify an IPsec-VPN connection in single-tunnel mode.
   * 
   * The health check configurations:
   * 
   * - **HealthCheckConfig.enable**: Specifies whether to enable health checks. Valid values: **true** and **false**.
   * 
   * - **HealthCheckConfig.dip**: The destination IP address for health checks.
   * 
   * - **HealthCheckConfig.sip**: The source IP address for health checks.
   * 
   * - **HealthCheckConfig.interval**: The retry interval for health checks. Unit: seconds.
   * 
   * - **HealthCheckConfig.retry**: The maximum number of health check retries.
   * 
   * @example
   * {"enable":"true","dip":"192.168.1.1","sip":"10.1.1.1","interval":"3","retry":"3"}
   */
  healthCheckConfig?: string;
  /**
   * @remarks
   * This parameter is supported when you modify an IPsec-VPN connection in single-tunnel mode.
   * 
   * The configurations for Phase 1 negotiations: 
   *            
   * - **IkeConfig.Psk**: The pre-shared key used for authentication between the VPN gateway and the data center.
   * 
   *     - The key must be 1 to 100 characters in length and can contain digits, letters, and the following special characters: ```~!`@#$%^&*()_-+={}[]|;:\\",.<>/?``` It cannot contain spaces.
   *     - If you do not specify a pre-shared key, the system randomly generates a 16-character string as the pre-shared key. You can call the [DescribeVpnConnection](https://help.aliyun.com/document_detail/2526951.html) operation to query the automatically generated pre-shared key.
   *     > The pre-shared key on the IPsec-VPN connection side must be the same as the authentication key on the data center side. Otherwise, the connection between the data center and the VPN gateway cannot be established. 
   * 
   * - **IkeConfig.IkeVersion**: The version of the IKE protocol. Valid values: **ikev1** and **ikev2**. 
   * 
   *     Compared with IKEv1, IKEv2 simplifies the SA negotiation process and provides better support for multi-CIDR block scenarios.
   * 
   *     <props="china"><ph>If the VPN gateway is a ShangMi (SM) gateway, only **ikev1** is supported.</ph>
   * 
   * - **IkeConfig.IkeMode**: The negotiation mode of the IKE version. Valid values: **main** and **aggressive**.   
   *     - **main**: The main mode. The negotiation process is highly secure.
   *     - **aggressive**: The aggressive mode. The negotiation process is fast and has a high success rate.
   * 
   *     <props="china"><ph>If the VPN gateway is an SM gateway, only **main** is supported.</ph>
   * 
   * - **IkeConfig.IkeEncAlg**: The encryption algorithm used in Phase 1 negotiations.
   * 
   *     <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway is a standard gateway, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway is an SM gateway, the only valid value is **sm4**.</ph>
   * 
   * - **IkeConfig.IkeAuthAlg**: The authentication algorithm used in Phase 1 negotiations.
   * 
   *     <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway is a standard gateway, valid values are **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway is an SM gateway, the only valid value is **sm3**.</ph>
   * 
   * - **IkeConfig.IkePfs**: The Diffie-Hellman key exchange algorithm used in Phase 1 negotiations. Valid values: **group1**, **group2**, **group5**, and **group14**.
   * 
   * - **IkeConfig.IkeLifetime**: The SA lifetime determined by Phase 1 negotiations. Unit: seconds. Valid values: **0** to **86400**.
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
   * This parameter is supported when you modify an IPsec-VPN connection in single-tunnel mode.
   * 
   * The configurations for Phase 2 negotiations: 
   * 
   * - **IpsecConfig.IpsecEncAlg**: The encryption algorithm used in Phase 2 negotiations.
   * 
   *     <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway is a standard gateway, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway is an SM gateway, the only valid value is **sm4**.</ph>
   * 
   * - **IpsecConfig.IpsecAuthAlg**: The authentication algorithm used in Phase 2 negotiations.
   * 
   *     <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway is a standard gateway, valid values are **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.</ph>
   * 
   *     <props="china"><ph>If the VPN gateway is an SM gateway, the only valid value is **sm3**.</ph>
   * 
   * - **IpsecConfig.IpsecPfs**: The Diffie-Hellman key exchange algorithm used in Phase 1 negotiations for forwarding packets of all protocols. Valid values: **disabled**, **group1**, **group2**, **group5**, and **group14**.   
   * 
   * - **IpsecConfig.IpsecLifetime**: The SA lifetime determined by Phase 2 negotiations. Unit: seconds. Valid values: **0** to **86400**.
   * 
   * @example
   * {"IpsecEncAlg":"aes","IpsecAuthAlg":"sha1","IpsecPfs":"group2","IpsecLifetime":86400}
   */
  ipsecConfig?: string;
  /**
   * @remarks
   * The CIDR block on the VPC side that needs to communicate with the data center. This parameter is used for Phase 2 negotiations.
   * 
   * Separate multiple CIDR blocks with commas (,). Example: 192.168.1.0/24,192.168.2.0/24.
   * 
   * Routing modes of the IPsec-VPN connection:
   * 
   * - If both **LocalSubnet** and **RemoteSubnet** are set to 0.0.0.0/0, the destination routing mode is used.
   * - If both **LocalSubnet** and **RemoteSubnet** are set to specific CIDR blocks, the interested traffic mode is used.
   * 
   * @example
   * 10.1.1.0/24,10.1.2.0/24
   */
  localSubnet?: string;
  /**
   * @remarks
   * The name of the IPsec-VPN connection.  
   * 
   * The name must be 1 to 100 characters in length, and cannot start with `http://` or `https://`.
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is supported when you modify an IPsec-VPN connection in single-tunnel mode.
   * 
   * If the current VPN gateway is an SM VPN gateway, you can modify the CA certificate of the peer.
   * 
   * If the current VPN gateway is a standard VPN gateway, this parameter is not supported.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The CIDR block on the data center side. This parameter is used for Phase 2 negotiations.
   * 
   * Separate multiple CIDR blocks with commas (,). Example: 192.168.3.0/24,192.168.4.0/24.
   * 
   * Routing modes of the IPsec-VPN connection:
   * 
   * - If both **LocalSubnet** and **RemoteSubnet** are set to 0.0.0.0/0, the destination routing mode is used.
   * - If both **LocalSubnet** and **RemoteSubnet** are set to specific CIDR blocks, the interested traffic mode is used.
   * 
   * @example
   * 10.2.1.0/24,10.2.2.0/24
   */
  remoteSubnet?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tunnel configurations.
   * 
   * The parameters in the **TunnelOptionsSpecification** array are supported only when you modify an IPsec-VPN connection in dual-tunnel mode. You can modify the configurations of both the primary and secondary tunnels of the IPsec-VPN connection at the same time.
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

