// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnConnectionRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. Once specified, the tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be up to 128 characters in length and can be an empty string. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values at a time.
   * 
   * @example
   * TagValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelBgpConfig extends $dara.Model {
  /**
   * @remarks
   * The autonomous system number on the local end (Alibaba Cloud side) of the tunnel. Valid values: **1** to **4294967295**. Default value: **45104**.
   * 
   * > - This parameter is required after you enable the BGP feature for the IPsec-VPN connection (by setting **EnableTunnelsBgp** to **true**).
   * > - Before you configure BGP, learn about how the BGP dynamic route feature works and its limits. For more information, see [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/2638220.html).
   * > - Use a private autonomous system number to establish a BGP connection with Alibaba Cloud. Refer to the relevant documentation for the range of private autonomous system numbers.
   * 
   * @example
   * 65530
   */
  localAsn?: number;
  /**
   * @remarks
   * The BGP address on the local end (Alibaba Cloud side) of the tunnel. This address is an IP address within the BGP CIDR block.
   * 
   * @example
   * 169.254.10.1
   */
  localBgpIp?: string;
  /**
   * @remarks
   * The BGP CIDR block of the tunnel. The CIDR block must be a CIDR block with a mask length of 30 within 169.254.0.0/16 and cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
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

export class CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIkeConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm used in Phase 1 negotiation.
   * 
   * <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is Standard, valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is China Certified Cryptography, the value is **sm3** (default).</ph>
   * 
   * @example
   * md5
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm used in Phase 1 negotiation.
   * 
   * <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**. </ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is Standard, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is China Certified Cryptography, the value is **sm4** (default).</ph>
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * The lifetime of the SA negotiated in Phase 1. Unit: seconds.
   * 
   * Valid values: **0** to **86400**. Default value: **86400**.
   * 
   * @example
   * 86400
   */
  ikeLifetime?: number;
  /**
   * @remarks
   * The negotiation mode of the IKE version. Valid values: **main** and **aggressive**. Default value: **main**.   
   * 
   * - **main**: Main mode. The negotiation process is highly secure.
   * - **aggressive**: Aggressive mode. The negotiation is fast and has a high success rate.
   * 
   * <props="china"><ph>If the VPN gateway instance type is China Certified Cryptography, only **main** is supported for the negotiation mode.</ph>
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The Diffie-Hellman key exchange algorithm used in Phase 1 negotiation. Default value: **group2**.   
   * Valid values: **group1**, **group2**, **group5**, and **group14**.
   * 
   * @example
   * group2
   */
  ikePfs?: string;
  /**
   * @remarks
   * The version of the IKE protocol. Valid values: **ikev1** and **ikev2**. Default value: **ikev1**.
   * 
   * Compared with IKEv1, IKEv2 simplifies the SA negotiation process and provides better support for multi-CIDR-block scenarios.
   *    
   * <props="china"><ph>If the VPN gateway instance type is China Certified Cryptography, only **ikev1** is supported for the IKE version.</ph>
   * 
   * @example
   * ikev1
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier of the local end (Alibaba Cloud side) of the tunnel, which is used in Phase 1 negotiation. The identifier can be up to 100 characters in length and cannot contain spaces. The default value is the IP address of the tunnel.
   * 
   * **LocalId** supports the FQDN format. If you use the FQDN format, we recommend that you set the negotiation mode to **aggressive**.
   * 
   * @example
   * 47.21.XX.XX
   */
  localId?: string;
  /**
   * @remarks
   * The pre-shared key used for identity authentication between the tunnel and the tunnel peer.
   * 
   * - The key must be 1 to 100 characters in length and can contain digits, uppercase and lowercase letters, and the following characters. It cannot contain spaces. ```~!\\`@#$%^&*()_-+={}[]|;:\\",.<>/?```
   * 
   * - If you do not specify a pre-shared key, the system generates a random 16-character string as the pre-shared key. You can call the [DescribeVpnConnection](https://help.aliyun.com/document_detail/2526951.html) operation to query the pre-shared key that is automatically generated by the system.     
   * 
   * > The pre-shared keys of the tunnel and the tunnel peer must be the same. Otherwise, the tunnel cannot be established.
   * 
   * @example
   * 123456****
   */
  psk?: string;
  /**
   * @remarks
   * The identifier of the tunnel peer, which is used in Phase 1 negotiation. The identifier can be up to 100 characters in length and cannot contain spaces. The default value is the IP address of the customer gateway associated with the tunnel.
   * 
   * **RemoteId** supports the FQDN format. If you use the FQDN format, we recommend that you set the negotiation mode to **aggressive**.
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

export class CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIpsecConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm used in Phase 2 negotiation.
   * 
   * <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is Standard, valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is China Certified Cryptography, the value is **sm3** (default).</ph>
   * 
   * @example
   * md5
   */
  ipsecAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm used in Phase 2 negotiation.
   * 
   * <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**. </ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is Standard, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance type is China Certified Cryptography, the value is **sm4** (default).</ph>
   * 
   * @example
   * aes
   */
  ipsecEncAlg?: string;
  /**
   * @remarks
   * The lifetime of the SA negotiated in Phase 2. Unit: seconds.
   * 
   * Valid values: **0** to **86400**. Default value: **86400**.
   * 
   * @example
   * 86400
   */
  ipsecLifetime?: number;
  /**
   * @remarks
   * The Diffie-Hellman key exchange algorithm used in Phase 2 negotiation. Default value: **group2**.   
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

export class CreateVpnConnectionRequestTunnelOptionsSpecification extends $dara.Model {
  /**
   * @remarks
   * The ID of the customer gateway associated with the tunnel.
   * 
   * > - This parameter is required when you create an IPsec-VPN connection in dual-tunnel mode.
   * > - The parameters under the **TunnelOptionsSpecification** array are supported when you create an IPsec-VPN connection in dual-tunnel mode.
   * > - When you create an IPsec-VPN connection in dual-tunnel mode, you must configure both the active tunnel and the standby tunnel for the IPsec-VPN connection. Only two tunnels (active and standby) can be added to an IPsec-VPN connection.
   * 
   * @example
   * cgw-p0wy363lucf1uyae8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to enable the Dead Peer Detection (DPD) feature for the tunnel. Valid values:
   * 
   * - **true** (default): DPD is enabled. The IPsec initiator sends DPD packets to check whether the peer device is alive. If no correct response is received within the specified period, the peer is considered disconnected. The ISAKMP SA and the corresponding IPsec SA are deleted, and the security tunnel is also deleted.
   * 
   * - **false**: DPD is disabled. The IPsec initiator does not send DPD probe packets.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the NAT traversal feature for the tunnel. Valid values:
   * 
   * - **true** (default): NAT traversal is enabled. After NAT traversal is enabled, the IKE negotiation process removes the verification of the UDP port number and can discover NAT gateway devices in the tunnel.
   * 
   * - **false**: NAT traversal is disabled.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * If the current VPN gateway instance is a China Certified Cryptography VPN gateway, you must configure the peer CA certificate for the tunnel.
   * 
   * - For a China Certified Cryptography VPN gateway, this parameter is required.
   * 
   * - For a Standard VPN gateway, this parameter must be left empty.
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
   * The BGP configuration for the tunnel.
   */
  tunnelBgpConfig?: CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelBgpConfig;
  /**
   * @remarks
   * The Phase 1 negotiation configuration.
   */
  tunnelIkeConfig?: CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIkeConfig;
  /**
   * @remarks
   * The Phase 2 negotiation configuration.
   */
  tunnelIpsecConfig?: CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIpsecConfig;
  static names(): { [key: string]: string } {
    return {
      customerGatewayId: 'CustomerGatewayId',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      remoteCaCertificate: 'RemoteCaCertificate',
      role: 'Role',
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
      role: 'string',
      tunnelBgpConfig: CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelBgpConfig,
      tunnelIkeConfig: CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIkeConfig,
      tunnelIpsecConfig: CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIpsecConfig,
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

export class CreateVpnConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically configure routes. Valid values:
   * 
   * - **true** (default): Routes are automatically configured.
   * 
   * - **false**: Routes are not automatically configured.
   * 
   * @example
   * true
   */
  autoConfigRoute?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * The BGP configuration:
   * 
   * - **BgpConfig.EnableBgp**: Specifies whether to enable the BGP feature. Valid values: **true** and **false** (default).
   * - **BgpConfig.LocalAsn**: The autonomous system number on the Alibaba Cloud side. Valid values: **1** to **4294967295**. Default value: **45104**.
   *     
   *     You can enter the autonomous system number in the two-segment format: the first 16 bits.the last 16 bits. Enter each segment in decimal format.
   *     
   *     For example, if you enter 123.456, the autonomous system number is 123 × 65536 + 456 = 8061384.
   * - **BgpConfig.TunnelCidr**: The CIDR block of the IPsec tunnel. The CIDR block must be a CIDR block with a mask length of 30 within 169.254.0.0/16 and cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
   *     > The IPsec tunnel CIDR block of each IPsec-VPN connection under a VPN gateway instance must be unique.
   * - **LocalBgpIp**: The BGP address on the Alibaba Cloud side. This address is an IP address within the IPsec tunnel CIDR block. 
   * 
   * > - Before you configure BGP, learn about how the BGP dynamic routing feature works and its limits. For more information, see [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/2638220.html).
   * > - Use a private autonomous system number to establish a BGP connection with Alibaba Cloud. Refer to the relevant documentation for the range of private autonomous system numbers.
   * 
   * @example
   * {"EnableBgp":"true","LocalAsn":"45104","TunnelCidr":"169.254.11.0/30","LocalBgpIp":"169.254.11.1"}
   */
  bgpConfig?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is supported and required when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * The ID of the customer gateway.
   * 
   * @example
   * cgw-p0w2jemrcj5u61un8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * - **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, the IPsec-VPN connection is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether the IPsec-VPN connection configuration takes effect immediately. Valid values:
   *            
   * - **true**: The system immediately initiates IPsec protocol negotiation after the configuration is complete.
   *    
   * - **false** (default): The system initiates IPsec protocol negotiation only when inbound traffic is detected.
   * 
   * @example
   * false
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * Specifies whether to enable the Dead Peer Detection (DPD) feature. Valid values:
   * 
   * - **true** (default): DPD is enabled. The IPsec initiator sends DPD packets to check whether the peer device is alive. If no correct response is received within the specified period, the peer is considered disconnected. The ISAKMP SA and the corresponding IPsec SA are deleted, and the security tunnel is also deleted.
   * 
   * - **false**: DPD is disabled. The IPsec initiator does not send DPD probe packets.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * Specifies whether to enable the NAT traversal feature. Valid values:
   * 
   * - **true** (default): NAT traversal is enabled. After NAT traversal is enabled, the IKE negotiation process removes the verification of the UDP port number and can discover NAT gateway devices in the VPN tunnel.
   * 
   * - **false**: NAT traversal is disabled.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in dual-tunnel mode.
   * 
   * Specifies whether to enable BGP for the tunnels. Valid values: **true** and **false** (default).
   * 
   * @example
   * true
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * The health check configuration:
   * 
   * - **HealthCheckConfig.enable**: Specifies whether to enable health checks. Valid values: **true** and **false** (default).
   * 
   * - **HealthCheckConfig.dip**: The destination IP address of the health check.
   * 
   * - **HealthCheckConfig.sip**: The source IP address of the health check.
   * 
   * - **HealthCheckConfig.interval**: The retry interval of the health check. Unit: seconds. Default value: **3**.
   * 
   * - **HealthCheckConfig.retry**: The number of retries for the health check. Default value: **3**.
   * 
   * @example
   * {"enable":"true","dip":"192.168.10.1","sip":"10.10.1.1","interval":"3","retry":"3"}
   */
  healthCheckConfig?: string;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * The Phase 1 negotiation configuration:
   *            
   * - **IkeConfig.Psk**: The pre-shared key used for identity authentication between the VPN gateway and the on-premises data center.
   * 
   *     - The key must be 1 to 100 characters in length and can contain digits, uppercase and lowercase letters, and the following characters. It cannot contain spaces. ```~!\\`@#$%^&*()_-+={}[]|;:\\",.<>/?```
   *     - If you do not specify a pre-shared key, the system generates a random string as the pre-shared key. You can call the [DescribeVpnConnection](https://help.aliyun.com/document_detail/2526951.html) operation to query the pre-shared key that is automatically generated by the system.     
   * 
   *         > The pre-shared key on the IPsec-VPN connection side must be the same as the authentication key on the on-premises data center side. Otherwise, the connection between the on-premises data center and the VPN gateway cannot be established.
   * 
   * - **IkeConfig.IkeVersion**: The version of the IKE protocol. Valid values: **ikev1** and **ikev2**. Default value: **ikev1**.  
   * 
   *     Compared with IKEv1, IKEv2 simplifies the SA negotiation process and provides better support for multi-CIDR-block scenarios.
   * 
   *    <props="china"><ph>If the VPN gateway instance type is China Certified Cryptography, only **ikev1** is supported for the IKE version.</ph>
   * 
   * - **IkeConfig.IkeMode**: The negotiation mode of the IKE version. Valid values: **main** and **aggressive**. Default value: **main**.   
   * 
   *     - **main**: Main mode. The negotiation process is highly secure.
   *     - **aggressive**: Aggressive mode. The negotiation is fast and has a high success rate.
   * 
   *    <props="china"><ph>If the VPN gateway instance type is China Certified Cryptography, only **main** is supported for the negotiation mode.</ph>
   * 
   * - **IkeConfig.IkeEncAlg**: The encryption algorithm used in Phase 1 negotiation.
   * 
   *    <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**. </ph>
   * 
   *    <props="china">If the VPN gateway instance type is Standard, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**.
   * 
   *    <props="china"><ph>If the VPN gateway instance type is China Certified Cryptography, the value is **sm4** (default).</ph>
   * 
   * - **IkeConfig.IkeAuthAlg**: The authentication algorithm used in Phase 1 negotiation.
   * 
   *    <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   *    <props="china"><ph>If the VPN gateway instance type is Standard, valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   *    <props="china"><ph>If the VPN gateway instance type is China Certified Cryptography, the value is **sm3** (default).</ph>
   * 
   * - **IkeConfig.IkePfs**: The Diffie-Hellman key exchange algorithm used in Phase 1 negotiation. Valid values: **group1**, **group2**, **group5**, and **group14**. Default value: **group2**.   
   * 
   * - **IkeConfig.IkeLifetime**: The lifetime of the SA negotiated in Phase 1. Unit: seconds. Valid values: **0** to **86400**. Default value: **86400**.   
   * 
   * - **IkeConfig.LocalId**: The identifier of the VPN gateway. The identifier can be up to 100 characters in length and cannot contain spaces. The default value is the IP address of the VPN gateway. 
   * 
   * - **IkeConfig.RemoteId**: The identifier of the customer gateway. The identifier can be up to 100 characters in length and cannot contain spaces. The default value is the IP address of the customer gateway.
   * 
   * @example
   * {"Psk":"1234****","IkeVersion":"ikev1","IkeMode":"main","IkeEncAlg":"aes","IkeAuthAlg":"sha1","IkePfs":"group2","IkeLifetime":86400,"LocalId":"47.XX.XX.1","RemoteId":"47.XX.XX.2"}
   */
  ikeConfig?: string;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * The Phase 2 negotiation configuration: 
   * 
   * - **IpsecConfig.IpsecEncAlg**: The encryption algorithm used in Phase 2 negotiation.
   * 
   *    <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**. </ph>
   * 
   *    <props="china"><ph>If the VPN gateway instance type is Standard, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**.</ph>
   * 
   *    <props="china"><ph>If the VPN gateway instance type is China Certified Cryptography, the value is **sm4** (default).</ph>
   * 
   * - **IpsecConfig. IpsecAuthAlg**: The authentication algorithm used in Phase 2 negotiation.
   * 
   *    <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   *    <props="china"><ph>If the VPN gateway instance type is Standard, valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   *    <props="china"><ph>If the VPN gateway instance type is China Certified Cryptography, the value is **sm3** (default).</ph>
   * 
   * - **IpsecConfig. IpsecPfs**: The Diffie-Hellman key exchange algorithm used in Phase 2 negotiation. Valid values: **disabled**, **group1**, **group2**, **group5**, and **group14**. Default value: **group2**.   
   * 
   * - **IpsecConfig. IpsecLifetime**: The lifetime of the SA negotiated in Phase 2. Unit: seconds. Valid values: **0** to **86400**. Default value: **86400**.
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
   * - If both **LocalSubnet** and **RemoteSubnet** are set to 0.0.0.0/0, the destination routing mode is used.
   * - If both **LocalSubnet** and **RemoteSubnet** are set to specific CIDR blocks, the protected data flow mode is used.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.10.1.0/24,10.10.2.0/24
   */
  localSubnet?: string;
  /**
   * @remarks
   * The name of the IPsec-VPN connection.
   * 
   * The name must be 1 to 100 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * IPsec
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the IPsec-VPN connection. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * If the current VPN gateway instance is a China Certified Cryptography VPN gateway, you must configure the peer CA certificate.
   * 
   * - For a China Certified Cryptography VPN gateway, this parameter is required when you create an IPsec-VPN connection.
   * 
   * - For a Standard VPN gateway, this parameter must be left empty.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The CIDR block on the on-premises data center side that needs to communicate with the VPC. This CIDR block is used in Phase 2 negotiation.
   * 
   * Separate multiple CIDR blocks with commas (,). Example: 192.168.3.0/24,192.168.4.0/24.
   * 
   * The following routing modes are supported for IPsec-VPN connections:
   * 
   * - If both **LocalSubnet** and **RemoteSubnet** are set to 0.0.0.0/0, the destination routing mode is used.
   * - If both **LocalSubnet** and **RemoteSubnet** are set to specific CIDR blocks, the protected data flow mode is used.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.10.3.0/24,10.10.4.0/24
   */
  remoteSubnet?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags to add to the IPsec-VPN connection.
   * 
   * You can add up to 20 tags to an IPsec-VPN connection at a time.
   */
  tags?: CreateVpnConnectionRequestTags[];
  /**
   * @remarks
   * The tunnel configurations.
   * 
   * - The parameters under the **TunnelOptionsSpecification** array are supported when you create an IPsec-VPN connection in dual-tunnel mode.
   * - When you create an IPsec-VPN connection in dual-tunnel mode, you must configure both the active tunnel and the standby tunnel for the IPsec-VPN connection. Only two tunnels (active and standby) can be added to an IPsec-VPN connection.
   * 
   * **if can be null:**
   * true
   */
  tunnelOptionsSpecification?: CreateVpnConnectionRequestTunnelOptionsSpecification[];
  /**
   * @remarks
   * The instance ID of the VPN gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * vpn-bp1q8bgx4xnkm****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      autoConfigRoute: 'AutoConfigRoute',
      bgpConfig: 'BgpConfig',
      clientToken: 'ClientToken',
      customerGatewayId: 'CustomerGatewayId',
      dryRun: 'DryRun',
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
      tags: 'Tags',
      tunnelOptionsSpecification: 'TunnelOptionsSpecification',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoConfigRoute: 'boolean',
      bgpConfig: 'string',
      clientToken: 'string',
      customerGatewayId: 'string',
      dryRun: 'boolean',
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
      tags: { 'type': 'array', 'itemType': CreateVpnConnectionRequestTags },
      tunnelOptionsSpecification: { 'type': 'array', 'itemType': CreateVpnConnectionRequestTunnelOptionsSpecification },
      vpnGatewayId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.tunnelOptionsSpecification)) {
      $dara.Model.validateArray(this.tunnelOptionsSpecification);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

