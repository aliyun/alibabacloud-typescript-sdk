// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnConnectionRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. This parameter cannot be an empty string once specified.
   * 
   * The tag key can be up to 64 characters in length, and cannot start with aliyun or acs:. It cannot contain http:// or https://.
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
   * The tag value can be up to 128 characters in length and can be an empty string. It cannot start with aliyun or acs:, and cannot contain http:// or https://.
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
   * The autonomous system number (ASN) on the local side (Alibaba Cloud side) of the tunnel. Valid values: **1** to **4294967295**. Default value: **45104**.
   * 
   * > - This parameter is required when you enable the BGP feature for the IPsec-VPN connection (that is, when you set the **EnableTunnelsBgp** parameter to **true**).
   * >- Before adding BGP configurations, understand the working mechanism and limits of the BGP dynamic routing feature. For more information, refer to [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/2638220.html).
   * >- Use a private ASN to establish a BGP connection with Alibaba Cloud. Refer to relevant documentation for the range of private ASNs.
   * 
   * @example
   * 65530
   */
  localAsn?: number;
  /**
   * @remarks
   * The BGP IP address on the local side (Alibaba Cloud side) of the tunnel. This IP address must be within the BGP CIDR block.
   * 
   * @example
   * 169.254.10.1
   */
  localBgpIp?: string;
  /**
   * @remarks
   * The BGP CIDR block of the tunnel. The CIDR block must be within the 169.254.0.0/16 range and have a mask length of 30, and cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
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

export class CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIkeConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm for Phase 1 negotiations.
   * 
   * <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance is of the standard type, valid values are **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance is of the ShangMi (SM) type, the value is **sm3** (default).</ph>
   * 
   * @example
   * md5
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm for Phase 1 negotiations.
   * 
   * <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**. </ph>
   * 
   * <props="china"><ph>If the VPN gateway instance is of the standard type, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance is of the ShangMi (SM) type, the value is **sm4** (default).</ph>
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * The SA lifecycle negotiated in Phase 1. Unit: seconds.
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
   * - **main**: The main mode. The negotiation process is highly secure.
   * - **aggressive**: The aggressive mode. The negotiation process is fast and has a high success rate.
   * 
   * <props="china"><ph>If the VPN gateway instance is of the ShangMi (SM) type, only the **main** mode is supported.</ph>
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The Diffie-Hellman key exchange algorithm used in Phase 1 negotiations. Default value: **group2**.   
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
   * Compared with IKEv1, IKEv2 simplifies the SA negotiation process and provides better support for scenarios with multiple CIDR blocks.
   *    
   * <props="china"><ph>If the VPN gateway instance is of the ShangMi (SM) type, only **ikev1** is supported.</ph>
   * 
   * @example
   * ikev1
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier on the local side (Alibaba Cloud side) of the tunnel, which is used for Phase 1 negotiations. The identifier can be up to 100 characters in length and cannot contain spaces. The default value is the IP address of the tunnel.
   * 
   * **LocalId** supports the FQDN format. If you use the FQDN format, we recommend that you set the negotiation mode to **aggressive**.
   * 
   * @example
   * 47.21.XX.XX
   */
  localId?: string;
  /**
   * @remarks
   * The pre-shared key used for authentication between the tunnel and the peer.
   * 
   * - The key must be 1 to 100 characters in length, and can contain digits, letters, and the following special characters: ```~!\\`@#$%^&*()_-+={}[]|;:\\",.<>/?``` The key cannot contain spaces.
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
   * The authentication algorithm for Phase 2 negotiations.
   * 
   * <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance is of the standard type, valid values are **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance is of the ShangMi (SM) type, the value is **sm3** (default).</ph>
   * 
   * @example
   * md5
   */
  ipsecAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm for Phase 2 negotiations.
   * 
   * <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**. </ph>
   * 
   * <props="china"><ph>If the VPN gateway instance is of the standard type, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**.</ph>
   * 
   * <props="china"><ph>If the VPN gateway instance is of the ShangMi (SM) type, the value is **sm4** (default).</ph>
   * 
   * @example
   * aes
   */
  ipsecEncAlg?: string;
  /**
   * @remarks
   * The SA lifecycle negotiated in Phase 2. Unit: seconds.
   * 
   * Valid values: **0** to **86400**. Default value: **86400**.
   * 
   * @example
   * 86400
   */
  ipsecLifetime?: number;
  /**
   * @remarks
   * The Diffie-Hellman key exchange algorithm used in Phase 2 negotiations. Default value: **group2**.   
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
   * >- This parameter is required when you create an IPsec-VPN connection in dual-tunnel mode.
   * >- The parameters in the **TunnelOptionsSpecification** array are supported when you create an IPsec-VPN connection in dual-tunnel mode.
   * >- When you create an IPsec-VPN connection in dual-tunnel mode, you must add configurations for both the primary and secondary tunnels. Only one primary tunnel and one secondary tunnel can be added to an IPsec-VPN connection.
   * 
   * @example
   * cgw-p0wy363lucf1uyae8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to enable the dead peer detection (DPD) feature for the tunnel. Valid values:
   * 
   * - **true** (default): Enables the DPD feature. The IPsec initiator sends DPD packets to check whether the peer device is alive. If no correct response is received within the specified time, the peer is considered disconnected. IPsec deletes the ISAKMP SA and the corresponding IPsec SA, and the secure tunnel is also deleted.
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
   * - **true** (default): Enables the NAT traversal feature. After this feature is enabled, the IKE negotiation process skips the verification of UDP port numbers and discovers NAT gateway devices in the tunnel.
   * 
   * - **false**: Disables the NAT traversal feature.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * If the current VPN gateway instance is a ShangMi (SM) VPN gateway, you must configure the CA certificate of the peer for the tunnel.
   * 
   * - For a ShangMi (SM) VPN gateway, this parameter is required.
   * 
   * - For a standard VPN gateway, this parameter must be left empty.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The role of the tunnel. Valid values:
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
   * The BGP configurations for the tunnel.
   */
  tunnelBgpConfig?: CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelBgpConfig;
  /**
   * @remarks
   * The configurations for Phase 1 negotiations.
   */
  tunnelIkeConfig?: CreateVpnConnectionRequestTunnelOptionsSpecificationTunnelIkeConfig;
  /**
   * @remarks
   * The configurations for Phase 2 negotiations.
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
   * - **true** (default): Automatically configures routes.
   * 
   * - **false**: Does not automatically configure routes.
   * 
   * @example
   * true
   */
  autoConfigRoute?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * The BGP configurations:
   * 
   * - **BgpConfig.EnableBgp**: Specifies whether to enable the BGP feature. Valid values: **true** and **false** (default).
   * - **BgpConfig.LocalAsn**: The autonomous system number (ASN) on the Alibaba Cloud side. Valid values: **1** to **4294967295**. Default value: **45104**.
   *     
   *     You can enter the ASN in the two-segment format: the first 16 bits and the last 16 bits. Each segment must be entered in decimal format.
   *     
   *     For example, if you enter 123.456, the ASN is calculated as follows: 123 × 65536 + 456 = 8061384.
   * - **BgpConfig.TunnelCidr**: The CIDR block of the IPsec tunnel. The CIDR block must be within the 169.254.0.0/16 range and have a mask length of 30, and cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
   *     > The IPsec tunnel CIDR block of each IPsec-VPN connection under the same VPN gateway instance must be unique.
   * - **LocalBgpIp**: The BGP IP address on the Alibaba Cloud side. This IP address must be within the IPsec tunnel CIDR block. 
   * 
   * >- Before adding BGP configurations, understand the working mechanism and limits of the BGP dynamic routing feature. For more information, refer to [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/2638220.html).
   * >- Use a private ASN to establish a BGP connection with Alibaba Cloud. Refer to relevant documentation for the range of private ASNs.
   * 
   * @example
   * {"EnableBgp":"true","LocalAsn":"45104","TunnelCidr":"169.254.11.0/30","LocalBgpIp":"169.254.11.1"}
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
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * The ID of the customer gateway.
   * 
   * @example
   * cgw-p0w2jemrcj5u61un8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: Prechecks the request without creating the IPsec-VPN connection. The system checks whether required parameters are specified, the request format, and service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the DryRunOperation error code is returned.
   * - **false** (default): Sends a normal request and creates the IPsec-VPN connection after the request passes the precheck.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether the configurations of the IPsec-VPN connection take effect immediately. Valid values:
   *            
   * - **true**: Yes. The system immediately initiates IPsec negotiations after the configurations are completed.
   *    
   * - **false** (default): No. The system initiates IPsec negotiations only when traffic is detected.
   * 
   * @example
   * false
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * Specifies whether to enable the dead peer detection (DPD) feature. Valid values:
   * 
   * - **true** (default): Enables the DPD feature. The IPsec initiator sends DPD packets to check whether the peer device is alive. If no correct response is received within the specified time, the peer is considered disconnected. IPsec deletes the ISAKMP SA and the corresponding IPsec SA, and the secure tunnel is also deleted.
   * 
   * - **false**: Disables the DPD feature. The IPsec initiator does not send DPD probe packets.
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
   * - **true** (default): Enables the NAT traversal feature. After this feature is enabled, the IKE negotiation process skips the verification of UDP port numbers and discovers NAT gateway devices in the VPN tunnel.
   * 
   * - **false**: Disables the NAT traversal feature.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in dual-tunnel mode.
   * 
   * Specifies whether to enable the BGP feature for the tunnel. Valid values: **true** and **false** (default).
   * 
   * @example
   * true
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * The health check configurations:
   * 
   * - **HealthCheckConfig.enable**: Specifies whether to enable health checks. Valid values: **true** and **false** (default).
   * 
   * - **HealthCheckConfig.dip**: The destination IP address for health checks.
   * 
   * - **HealthCheckConfig.sip**: The source IP address for health checks.
   * 
   * - **HealthCheckConfig.interval**: The retry interval for health checks. Unit: seconds. Default value: **3**.
   * 
   * - **HealthCheckConfig.retry**: The maximum number of health check retries. Default value: **3**.
   * 
   * @example
   * {"enable":"true","dip":"192.168.10.1","sip":"10.10.1.1","interval":"3","retry":"3"}
   */
  healthCheckConfig?: string;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * The configurations for Phase 1 negotiations:
   *            
   * - **IkeConfig.Psk**: The pre-shared key used for authentication between the VPN gateway and the data center.
   * 
   *     - The key must be 1 to 100 characters in length, and can contain digits, letters, and the following special characters: ```~!\\`@#$%^&*()_-+={}[]|;:\\",.<>/?``` The key cannot contain spaces.
   *     - If you do not specify a pre-shared key, the system randomly generates a string as the pre-shared key. You can call the [DescribeVpnConnection](https://help.aliyun.com/document_detail/2526951.html) operation to query the automatically generated pre-shared key.     
   * 
   *         > The pre-shared key on the IPsec-VPN connection side must be the same as the authentication key on the data center side. Otherwise, the connection between the data center and the VPN gateway cannot be established.
   * 
   * - **IkeConfig.IkeVersion**: The version of the IKE protocol. Valid values: **ikev1** and **ikev2**. Default value: **ikev1**.  
   * 
   *     Compared with IKEv1, IKEv2 simplifies the SA negotiation process and provides better support for scenarios with multiple CIDR blocks.
   * 
   *    <props="china"><ph>If the VPN gateway instance is of the ShangMi (SM) type, only **ikev1** is supported.</ph>
   * 
   * - **IkeConfig.IkeMode**: The negotiation mode of the IKE version. Valid values: **main** and **aggressive**. Default value: **main**.   
   * 
   *     - **main**: The main mode. The negotiation process is highly secure.
   *     - **aggressive**: The aggressive mode. The negotiation process is fast and has a high success rate.
   * 
   *    <props="china"><ph>If the VPN gateway instance is of the ShangMi (SM) type, only the **main** mode is supported.</ph>
   * 
   * - **IkeConfig.IkeEncAlg**: The encryption algorithm for Phase 1 negotiations.
   * 
   *    <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**. </ph>
   * 
   *    <props="china">If the VPN gateway instance is of the standard type, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**.
   * 
   *    <props="china"><ph>If the VPN gateway instance is of the ShangMi (SM) type, the value is **sm4** (default).</ph>
   * 
   * - **IkeConfig.IkeAuthAlg**: The authentication algorithm for Phase 1 negotiations.
   * 
   *    <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   *    <props="china"><ph>If the VPN gateway instance is of the standard type, valid values are **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   *    <props="china"><ph>If the VPN gateway instance is of the ShangMi (SM) type, the value is **sm3** (default).</ph>
   * 
   * - **IkeConfig.IkePfs**: The Diffie-Hellman key exchange algorithm used in Phase 1 negotiations. Valid values: **group1**, **group2**, **group5**, and **group14**. Default value: **group2**.   
   * 
   * - **IkeConfig.IkeLifetime**: The SA lifecycle negotiated in Phase 1. Unit: seconds. Valid values: **0** to **86400**. Default value: **86400**.   
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
   * The configurations for Phase 2 negotiations: 
   * 
   * - **IpsecConfig.IpsecEncAlg**: The encryption algorithm for Phase 2 negotiations.
   * 
   *    <props="intl"><ph>Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**. </ph>
   * 
   *    <props="china"><ph>If the VPN gateway instance is of the standard type, valid values are **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**.</ph>
   * 
   *    <props="china"><ph>If the VPN gateway instance is of the ShangMi (SM) type, the value is **sm4** (default).</ph>
   * 
   * - **IpsecConfig.IpsecAuthAlg**: The authentication algorithm for Phase 2 negotiations.
   * 
   *    <props="intl"><ph>Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   *    <props="china"><ph>If the VPN gateway instance is of the standard type, valid values are **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.</ph>
   * 
   *    <props="china"><ph>If the VPN gateway instance is of the ShangMi (SM) type, the value is **sm3** (default).</ph>
   * 
   * - **IpsecConfig.IpsecPfs**: The Diffie-Hellman key exchange algorithm used in Phase 2 negotiations. Valid values: **disabled**, **group1**, **group2**, **group5**, and **group14**. Default value: **group2**.   
   * 
   * - **IpsecConfig.IpsecLifetime**: The SA lifecycle negotiated in Phase 2. Unit: seconds. Valid values: **0** to **86400**. Default value: **86400**.
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
   * Description of the routing mode of the IPsec-VPN connection:
   * 
   * - If both **LocalSubnet** and **RemoteSubnet** are set to 0.0.0.0/0, the destination routing mode is used.
   * - If both **LocalSubnet** and **RemoteSubnet** are set to specific CIDR blocks, the interesting traffic mode is used.
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
   * The name must be 1 to 100 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * IPsec
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the IPsec-VPN connection. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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
   * If the current VPN gateway instance is a ShangMi (SM) VPN gateway, you must configure the CA certificate of the peer.
   * 
   * - For a ShangMi (SM) VPN gateway, this parameter is required when you create an IPsec-VPN connection.
   * 
   * - For a standard VPN gateway, this parameter must be left empty.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The CIDR block on the data center side that needs to communicate with the VPC. This parameter is used for Phase 2 negotiations.
   * 
   * Separate multiple CIDR blocks with commas (,). Example: 192.168.3.0/24,192.168.4.0/24.
   * 
   * Description of the routing mode of the IPsec-VPN connection:
   * 
   * - If both **LocalSubnet** and **RemoteSubnet** are set to 0.0.0.0/0, the destination routing mode is used.
   * - If both **LocalSubnet** and **RemoteSubnet** are set to specific CIDR blocks, the interesting traffic mode is used.
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
   * The list of tags to be added to the IPsec-VPN connection.
   * 
   * You can add up to 20 tags to an IPsec-VPN connection at a time.
   */
  tags?: CreateVpnConnectionRequestTags[];
  /**
   * @remarks
   * The tunnel configurations.
   * 
   * - The parameters in the **TunnelOptionsSpecification** array are supported when you create an IPsec-VPN connection in dual-tunnel mode.
   * - When you create an IPsec-VPN connection in dual-tunnel mode, you must add configurations for both the primary and secondary tunnels. Only one primary tunnel and one secondary tunnel can be added to an IPsec-VPN connection.
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

