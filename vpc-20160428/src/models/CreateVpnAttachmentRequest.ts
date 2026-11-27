// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnAttachmentRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. This value cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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
   * The tag value can be up to 128 characters in length and can be an empty string. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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

export class CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelBgpConfig extends $dara.Model {
  /**
   * @remarks
   * The autonomous system number (ASN) on the Alibaba Cloud side of the tunnel. Valid values: **1** to **4294967295**. Default value: **45104**.
   * 
   * @example
   * 65530
   */
  localAsn?: number;
  /**
   * @remarks
   * The BGP address on the Alibaba Cloud side of the tunnel. The address is an IP address within the BGP CIDR block.
   * 
   * @example
   * 169.254.10.1
   */
  localBgpIp?: string;
  /**
   * @remarks
   * The BGP CIDR block of the tunnel. The CIDR block must fall within 169.254.0.0/16 and have a mask length of 30. The CIDR block cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
   * 
   * > The tunnel CIDR blocks of two tunnels under the same IPsec-VPN connection must be different.
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

export class CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIkeConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm for Phase 1 negotiation. Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **sha1**.
   * 
   * @example
   * sha1
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm for Phase 1 negotiation. Valid values: **aes**, **aes192**, **aes256**, **des**, or **3des**. Default value: **aes**.
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * The lifetime of the Security Association (SA) negotiated during Phase 1. Unit: seconds.
   * 
   * Valid values: **0** to **86400**. Default value: **86400**.
   * 
   * @example
   * 86400
   */
  ikeLifetime?: number;
  /**
   * @remarks
   * The negotiation mode of the IKE version. Valid values: **main** or **aggressive**. Default value: **main**.
   * 
   * - **main**: Main mode. The negotiation process is highly secure.
   * - **aggressive**: Aggressive mode. Negotiation is fast and has a high success rate.
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The Diffie-Hellman key exchange algorithm used in the first-phase negotiation. Default value: **group2**.
   * 
   * Valid values: **group1**, **group2**, **group5**, **group14**.
   * 
   * @example
   * group2
   */
  ikePfs?: string;
  /**
   * @remarks
   * The version of the IKE protocol. Valid values: **ikev1** or **ikev2**. Default value: **ikev2**.
   * 
   * @example
   * ikev2
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier on the Alibaba Cloud side of the tunnel, used for Phase 1 negotiation. The value can be up to 100 characters in length and cannot contain spaces. The default value is the IP address of the tunnel.
   * 
   * @example
   * 47.XX.XX.1
   */
  localId?: string;
  /**
   * @remarks
   * The pre-shared key, which is used for identity authentication between the tunnel and the tunnel peer.
   * 
   * - The key must be 1 to 100 characters in length and can contain digits, uppercase letters, lowercase letters, and the following characters: ```~!\`@#$%^&*()_-+={}[]|;:\",.<>/?``` It cannot contain spaces.
   * 
   * - If you do not specify a pre-shared key, the system randomly generates a 16-character string as the pre-shared key. You can call the [DescribeVpnAttachments](https://help.aliyun.com/document_detail/2526939.html) operation to query the pre-shared key automatically generated by the system.
   * 
   * > The pre-shared keys of the tunnel and the tunnel peer must be the same. Otherwise, the tunnel cannot be established.
   * 
   * @example
   * 123456****
   */
  psk?: string;
  /**
   * @remarks
   * The identifier of the tunnel peer, used for Phase 1 negotiation. The value can be up to 100 characters in length and cannot contain spaces. The default value is the IP address of the customer gateway associated with the tunnel.
   * 
   * @example
   * 47.XX.XX.2
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

export class CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIpsecConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm for Phase 2 negotiation.
   * 
   * @example
   * sha1
   */
  ipsecAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm for Phase 2 negotiation. Valid values: **aes**, **aes192**, **aes256**, **des**, or **3des**. Default value: **aes**.
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
   * The Diffie-Hellman key exchange algorithm used in the second phase of negotiation. Default value: **group2**.
   * 
   * Valid values: **disabled**, **group1**, **group2**, **group5**, **group14**.
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

export class CreateVpnAttachmentRequestTunnelOptionsSpecification extends $dara.Model {
  /**
   * @remarks
   * The ID of the customer gateway associated with the tunnel.
   * 
   * > This parameter is required when you create an IPsec-VPN connection in dual-tunnel mode.
   * 
   * @example
   * cgw-p0w2jemrcj5u61un8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to enable the Dead Peer Detection (DPD) feature for the tunnel. Valid values:
   * 
   * - **true** (default): Enables the DPD feature. The IPsec initiator sends DPD packets to check whether the peer device is alive. If no correct response is received within the specified period of time, the peer is considered disconnected. The ISAKMP SA and the corresponding IPsec SA are deleted, and the security tunnel is also deleted.
   * 
   * - **false**: Disables the DPD feature. The IPsec initiator does not send DPD packets.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Specifies whether to enable NAT traversal for the tunnel. Valid values:
   * 
   * - **true** (default): Enables NAT traversal. After NAT traversal is enabled, the IKE negotiation process skips UDP port number verification and can discover NAT gateway devices in the tunnel.
   * 
   * - **false**: Disables NAT traversal.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * Adds BGP configurations for the tunnel.
   * 
   * > Configure this parameter after you enable BGP for the IPsec-VPN connection (by setting **EnableTunnelsBgp** to **true**).
   */
  tunnelBgpConfig?: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelBgpConfig;
  /**
   * @remarks
   * The Phase 1 negotiation configuration.
   */
  tunnelIkeConfig?: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIkeConfig;
  /**
   * @remarks
   * The creation order of the tunnel.
   * 
   * - **1**: the first tunnel.
   * - **2**: the second tunnel.
   * 
   * @example
   * 1
   */
  tunnelIndex?: number;
  /**
   * @remarks
   * The Phase 2 negotiation configuration.
   */
  tunnelIpsecConfig?: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIpsecConfig;
  static names(): { [key: string]: string } {
    return {
      customerGatewayId: 'CustomerGatewayId',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      tunnelBgpConfig: 'TunnelBgpConfig',
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
      tunnelBgpConfig: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelBgpConfig,
      tunnelIkeConfig: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIkeConfig,
      tunnelIndex: 'number',
      tunnelIpsecConfig: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIpsecConfig,
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

export class CreateVpnAttachmentRequest extends $dara.Model {
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
   * BGP configuration:
   * 
   * - **BgpConfig.EnableBgp**: specifies whether to enable BGP. Valid values: **true** or **false** (default).
   * 
   * - **BgpConfig.LocalAsn**: the autonomous system number (ASN) on the Alibaba Cloud side. Valid values: **1** to **4294967295**. Default value: **45104**.
   * 
   *     You can enter the ASN in the two-segment format: the first 16 bits.the last 16 bits. Each segment is entered in decimal notation.
   * 
   *     For example, if you enter 123.456, the ASN is 123×65536+456=8061384.
   * 
   * - **BgpConfig.TunnelCidr**: the CIDR block of the IPsec tunnel. The CIDR block must be a /30 subnet within 169.254.0.0/16 and cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
   * 
   * - **LocalBgpIp**: the BGP IP address on the Alibaba Cloud side. This address must be an IP address within the IPsec tunnel CIDR block.
   * 
   * > - Before you configure BGP, we recommend that you familiarize yourself with how BGP dynamic routing works and its limits. For more information, see [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/445767.html).
   * > - Use a private ASN to establish a BGP connection with Alibaba Cloud. Refer to the relevant documentation for the private ASN range.
   * 
   * @example
   * {"EnableBgp":"true","LocalAsn":"45104","TunnelCidr":"169.254.11.0/30","LocalBgpIp":"169.254.11.1"}
   */
  bgpConfig?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * The customer gateway ID.
   * 
   * > This parameter must be specified only when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * @example
   * cgw-p0w2jemrcj5u61un8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: sends a check request and does not create the IPsec connection. The system checks whether required parameters are specified, whether the request format is valid, and whether business limits are exceeded. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - **false** (default): sends a normal request. After the check succeeds, the system directly creates the IPsec connection.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether the configuration of the IPsec-VPN connection takes effect immediately. Valid values:
   * 
   * - **true**: yes. After the configuration is complete, the system immediately starts IPsec negotiation.
   * - **false** (default): no. The system starts IPsec negotiation only after traffic flows in.
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
   * - **true** (default): Enables the DPD feature. The IPsec initiator sends DPD packets to check whether the peer device is alive. If no correct response is received within the specified period of time, the peer is considered disconnected. The ISAKMP SA and the corresponding IPsec SA are deleted, and the security tunnel is also deleted.
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
   * Specifies whether to enable NAT traversal. Valid values:
   * 
   * - **true** (default): Enables NAT traversal. After NAT traversal is enabled, the IKE negotiation process skips UDP port number verification and can discover NAT gateway devices in the VPN tunnel.
   * 
   * - **false**: Disables NAT traversal.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create a dual-tunnel IPsec-VPN connection.
   * 
   * Specifies whether to enable BGP for the tunnel. Valid values: **true** and **false** (default).
   * 
   * > Before you add BGP configurations, we recommend that you understand the working mechanism and usage limits of BGP dynamic routing. For more information, see [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/445767.html).
   * 
   * @example
   * false
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create a single-tunnel IPsec-VPN connection.
   * 
   * Health check configurations:
   * 
   * - **HealthCheckConfig.enable**: specifies whether to enable health checks. Valid values: **true** and **false** (default).
   * 
   * - **HealthCheckConfig.dip**: the destination IP address of health checks. Enter the IP address of the on-premises data center that can be accessed from the VPC side over the IPsec connection.
   * 
   * - **HealthCheckConfig.sip**: the source IP address of health checks. Enter the IP address on the VPC side that can be accessed from the on-premises data center over the IPsec connection.
   * 
   * - **HealthCheckConfig.interval**: the interval at which health check retries are performed. Unit: seconds. Default value: **3**.
   * 
   * - **HealthCheckConfig.retry**: the number of packets that are retransmitted for health checks. Default value: **3**.
   * 
   * - **HealthCheckConfig.Policy**: specifies whether to revoke the published routes if a health check fails. Valid values:
   * 
   *      - **revoke_route** (default): revokes the published routes.
   *      - **reserve_route**: does not revoke the published routes.
   * 
   * @example
   * {"enable":"true","dip":"192.168.1.1","sip":"10.1.1.1","interval":"3","retry":"3","Policy": "revoke_route"}
   */
  healthCheckConfig?: string;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * Phase 1 negotiation configuration:
   *            
   * - **IkeConfig.Psk**: The pre-shared key, which is used for identity authentication between the VPN gateway and the on-premises data center.
   * 
   *     - The key must be 1 to 100 characters in length and can contain digits, uppercase letters, lowercase letters, and the following characters: ```~!`@#$%^&*()_-+={}[]|;:\",.<>/?``` The key cannot contain spaces.
   *     - If you do not specify a pre-shared key, the system generates a random string as the pre-shared key. You can call the [DescribeVpnConnection](https://help.aliyun.com/document_detail/2526951.html) operation to query the pre-shared key that is automatically generated by the system.
   * 
   *     > The pre-shared key on the IPsec-VPN connection side must be the same as the authentication key on the on-premises data center side. Otherwise, the connection between the on-premises data center and the VPN gateway cannot be established.
   * 
   * - **IkeConfig.IkeVersion**: The version of the IKE protocol. Valid values: **ikev1** or **ikev2**. Default value: **ikev1**.   
   * 
   * - **IkeConfig.IkeMode**: The negotiation mode. Valid values: **main** or **aggressive**. Default value: **main**.   
   * 
   * - **IkeConfig.IkeEncAlg**: The encryption algorithm used in Phase 1 negotiation. Valid values: **aes**, **aes192**, **aes256**, **des**, or **3des**. Default value: **aes**.   
   * 
   * - **IkeConfig.IkeAuthAlg**: The authentication algorithm used in Phase 1 negotiation. Valid values: **md5**, **sha1**, **sha256**, **sha384**, or **sha512**. Default value: **md5**.   
   * 
   * - **IkeConfig.IkePfs**: The Diffie-Hellman key exchange algorithm used in Phase 1 negotiation. Valid values: **group1**, **group2**, **group5**, or **group14**. Default value: **group2**.   
   * 
   * - **IkeConfig.IkeLifetime**: The lifetime of the SA generated in Phase 1 negotiation. Unit: seconds. Valid values: **0** to **86400**. Default value: **86400**.   
   * 
   * - **IkeConfig.LocalId**: The identifier on the Alibaba Cloud side of the IPsec-VPN connection. The identifier can be up to 100 characters in length and cannot contain spaces. Default value: empty.
   * 
   * - **IkeConfig.RemoteId**: The identifier on the on-premises data center side of the IPsec-VPN connection. The identifier can be up to 100 characters in length and cannot contain spaces. Default value: the IP address of the customer gateway.
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
   * - **IpsecConfig.IpsecEncAlg**: The encryption algorithm used in Phase 2 negotiations. Valid values: **aes**, **aes192**, **aes256**, **des**, or **3des**. Default value: **aes**.   
   * 
   * - **IpsecConfig. IpsecAuthAlg**: The authentication algorithm used in Phase 2 negotiations. Valid values: **md5**, **sha1**, **sha256**, **sha384**, **sha512**. Default value: **md5**.   
   * 
   * - **IpsecConfig. IpsecPfs**: The Diffie-Hellman key exchange algorithm used in Phase 2 negotiations. Valid values: **disabled**, **group1**, **group2**, **group5**, or **group14**. Default value: **group2**.   
   * 
   * - **IpsecConfig. IpsecLifetime**: The lifetime of the SA established in Phase 2 negotiations. Unit: seconds. Valid values: **0** to **86400**. Default value: **86400**.
   * 
   * @example
   * {"IpsecEncAlg":"aes","IpsecAuthAlg":"sha1","IpsecPfs":"group2","IpsecLifetime":86400}
   */
  ipsecConfig?: string;
  /**
   * @remarks
   * The CIDR block on the VPC side that needs to communicate with the on-premises data center. This is used for Phase 2 negotiation.
   * 
   * Separate multiple CIDR blocks with commas (,). Example: 192.168.1.0/24,192.168.2.0/24.
   * 
   * Description of IPsec-VPN connection routing modes:
   * 
   * - If both **LocalSubnet** and **RemoteSubnet** are set to 0.0.0.0/0, the destination routing mode is used.
   * - If both **LocalSubnet** and **RemoteSubnet** are set to specific CIDR blocks, the protected data flow mode is used.
   * 
   * This parameter is required.
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
  /**
   * @remarks
   * The network type of the IPsec-VPN connection. Valid values:
   * - **public** (default): public network. The IPsec connection establishes an encrypted communication channel over the public network.
   * - **private**: private network. The IPsec connection establishes an encrypted communication channel over a private network.
   * 
   * @example
   * public
   */
  networkType?: string;
  ownerAccount?: string;
  /**
   * @remarks
   * The region ID of the IPsec-VPN connection.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The CA certificate of the peer.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCert?: string;
  /**
   * @remarks
   * The CIDR block of the on-premises data center that needs to communicate with the VPC. This is used for Phase 2 negotiation.
   * 
   * Separate multiple CIDR blocks with commas (,). Example: 192.168.3.0/24,192.168.4.0/24.
   * 
   * Description of the routing mode for the IPsec-VPN connection:
   * 
   * - If both **LocalSubnet** and **RemoteSubnet** are set to 0.0.0.0/0, the destination routing mode is used.
   * - If both **LocalSubnet** and **RemoteSubnet** are set to specific CIDR blocks, the protected data flow mode is used.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.1.3.0/24,10.1.4.0/24
   */
  remoteSubnet?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPsec-VPN connection belongs.
   * 
   * - You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource group IDs.
   * - If you do not specify a resource group ID, the IPsec-VPN connection belongs to the default resource group after it is created.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags to add to the IPsec-VPN connection.
   * 
   * You can add up to 20 tags to an IPsec connection at a time.
   */
  tags?: CreateVpnAttachmentRequestTags[];
  /**
   * @remarks
   * The bandwidth specification of a single VPN tunnel. Valid values:
   * Standard (default): Standard type. Default bandwidth: 1 Gbps
   * Large: Large type. Default bandwidth: 3 Gbps
   * 
   * @example
   * Standard
   */
  tunnelBandwidth?: string;
  /**
   * @remarks
   * Configures tunnels.
   * 
   * - When you create a dual-tunnel IPsec-VPN connection, you can configure the parameters in the **TunnelOptionsSpecification** array.
   * - When you create a dual-tunnel IPsec-VPN connection, you must add two tunnels to the IPsec-VPN connection to ensure link redundancy. Only two tunnels can be added to an IPsec-VPN connection.
   * 
   * **if can be null:**
   * true
   */
  tunnelOptionsSpecification?: CreateVpnAttachmentRequestTunnelOptionsSpecification[];
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
      networkType: 'NetworkType',
      ownerAccount: 'OwnerAccount',
      regionId: 'RegionId',
      remoteCaCert: 'RemoteCaCert',
      remoteSubnet: 'RemoteSubnet',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      tunnelBandwidth: 'TunnelBandwidth',
      tunnelOptionsSpecification: 'TunnelOptionsSpecification',
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
      networkType: 'string',
      ownerAccount: 'string',
      regionId: 'string',
      remoteCaCert: 'string',
      remoteSubnet: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': CreateVpnAttachmentRequestTags },
      tunnelBandwidth: 'string',
      tunnelOptionsSpecification: { 'type': 'array', 'itemType': CreateVpnAttachmentRequestTunnelOptionsSpecification },
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

