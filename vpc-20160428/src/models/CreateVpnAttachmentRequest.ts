// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnAttachmentRequestTags extends $dara.Model {
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

export class CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelBgpConfig extends $dara.Model {
  /**
   * @remarks
   * The autonomous system number on the local end (Alibaba Cloud side) of the tunnel. Valid values: **1** to **4294967295**. Default value: **45104**.
   * 
   * > We recommend that you use a private autonomous system number to establish a BGP connection with Alibaba Cloud. Refer to the relevant documentation for the range of private autonomous system numbers.
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
   * The BGP CIDR block of the tunnel. The CIDR block must fall within 169.254.0.0/16 and have a mask length of 30 bits. The CIDR block cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
   * 
   * > The tunnel CIDR blocks of the two tunnels under an IPsec-VPN connection must be different.
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
   * The authentication algorithm used in Phase 1 negotiation. Valid values: **md5**, **sha1**, **sha256**, **sha384**, **sha512**. Default value: **sha1**.
   * 
   * @example
   * sha1
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm used in Phase 1 negotiation. Valid values: **aes**, **aes192**, **aes256**, **des**, or **3des**. Default value: **aes**.
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * The lifetime of the SA generated in Phase 1 negotiation. Unit: seconds.
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
   * - **main**: main mode. The negotiation process is more secure.
   * - **aggressive**: aggressive mode. The negotiation is faster and has a higher success rate.
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The Diffie-Hellman key exchange algorithm used in Phase 1 negotiation. Default value: **group2**.   
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
   * Compared with IKEv1, IKEv2 simplifies the SA negotiation process and provides better support for multi-CIDR-block scenarios.
   * 
   * @example
   * ikev2
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier on the local end (Alibaba Cloud side) of the tunnel, which is used in Phase 1 negotiation. The identifier is limited to 100 characters in length and cannot contain spaces. The default value is the IP address of the tunnel.
   * 
   * **LocalId** supports the FQDN format. If you use the FQDN format, we recommend that you set the negotiation mode to **aggressive**.
   * 
   * @example
   * 47.XX.XX.1
   */
  localId?: string;
  /**
   * @remarks
   * The pre-shared key used for identity authentication between the tunnel and the tunnel peer.
   * 
   * - The key must be 1 to 100 characters in length and can contain digits, uppercase and lowercase letters, and the following characters. It cannot contain spaces. ```~!\\`@#$%^&*()_-+={}[]|;:\\",.<>/?```
   * 
   * - If you do not specify a pre-shared key, the system randomly generates a 16-character string as the pre-shared key. You can call the [DescribeVpnAttachments](https://help.aliyun.com/document_detail/2526939.html) operation to query the pre-shared key that is automatically generated by the system.     
   * 
   * > The pre-shared keys of the tunnel and the tunnel peer must be the same. Otherwise, the system cannot establish the tunnel.
   * 
   * @example
   * 123456****
   */
  psk?: string;
  /**
   * @remarks
   * The identifier of the tunnel peer, which is used in Phase 1 negotiation. The identifier is limited to 100 characters in length and cannot contain spaces. The default value is the IP address of the customer gateway associated with the tunnel.
   * 
   * **RemoteId** supports the FQDN format. If you use the FQDN format, we recommend that you set the negotiation mode to **aggressive**.
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
   * The authentication algorithm used in Phase 2 negotiation.
   * 
   * Valid values: **md5**, **sha1**, **sha256**, **sha384**, **sha512**. Default value: **sha1**.
   * 
   * @example
   * sha1
   */
  ipsecAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm used in Phase 2 negotiation. Valid values: **aes**, **aes192**, **aes256**, **des**, or **3des**. Default value: **aes**.
   * 
   * @example
   * aes
   */
  ipsecEncAlg?: string;
  /**
   * @remarks
   * The lifetime of the SA generated in Phase 2 negotiation. Unit: seconds.
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
   * The customer gateway ID associated with the tunnel.
   * 
   * > This parameter is required when you create a dual-tunnel IPsec-VPN connection.
   * 
   * @example
   * cgw-p0w2jemrcj5u61un8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to enable the Dead Peer Detection (DPD) feature for the tunnel. Valid values:
   * 
   * - **true** (default): Enables the DPD feature. The IPsec initiator sends DPD packets to check the existence and availability of the peer. If no correct response is received within the specified time, the connection fails. Then, the ISAKMP SA, IPsec SA, and IPsec tunnel are deleted.
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
   * - **true** (default): Enables NAT traversal. After NAT traversal is enabled, the verification of the UDP port number is removed during IKE negotiation, and NAT gateway devices along the tunnel can be discovered.
   * 
   * - **false**: Disables NAT traversal.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * The BGP configuration for the tunnel.
   * 
   * > This parameter is required when you enable BGP for the IPsec-VPN connection (set **EnableTunnelsBgp** to **true**).
   */
  tunnelBgpConfig?: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelBgpConfig;
  /**
   * @remarks
   * The Phase 1 negotiation configuration.
   */
  tunnelIkeConfig?: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIkeConfig;
  /**
   * @remarks
   * The order in which the tunnel is created.
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
   * - **true** (default): Automatically configure routes.
   * 
   * - **false**: Do not automatically configure routes.
   * 
   * @example
   * true
   */
  autoConfigRoute?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create a single-tunnel IPsec-VPN connection.
   * 
   * BGP configuration:
   * 
   * - **BgpConfig.EnableBgp**: Specifies whether to enable the BGP feature. Valid values: **true** or **false** (default).
   * 
   * - **BgpConfig.LocalAsn**: The autonomous system number on the Alibaba Cloud side. Valid values: **1** to **4294967295**. Default value: **45104**.
   * 
   *     You can enter the autonomous system number in the two-segment format: the first 16 bits.the last 16 bits. Enter each segment in decimal format.
   * 
   *     For example, if you enter 123.456, the autonomous system number is 123 × 65536 + 456 = 8061384.
   * 
   * - **BgpConfig.TunnelCidr**: The IPsec tunnel CIDR block. The CIDR block must fall within 169.254.0.0/16 and have a mask length of 30 bits. The CIDR block cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
   * 
   * - **LocalBgpIp**: The BGP address on the Alibaba Cloud side. This address is an IP address within the IPsec tunnel CIDR block. 
   * 
   * > - Before you add BGP configurations, learn about how the dynamic routing feature works and its limits. For more information, see [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/445767.html).
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
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * The customer gateway ID.
   * 
   * > This parameter is required only when you create a single-tunnel IPsec-VPN connection.
   * 
   * @example
   * cgw-p0w2jemrcj5u61un8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without creating the IPsec-VPN connection. The system checks the required parameters, request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - **false** (default): performs a dry run and sends the request. If the check succeeds, the IPsec-VPN connection is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether the configuration takes effect immediately. Valid values:
   * 
   * - **true**: The system initiates IPsec protocol negotiation immediately after the configuration is complete.
   * - **false** (default): The system initiates IPsec protocol negotiation only when traffic enters the IPsec-VPN connection.
   * 
   * @example
   * false
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create a single-tunnel IPsec-VPN connection.
   * 
   * Specifies whether to enable the Dead Peer Detection (DPD) feature. Valid values:
   * 
   * - **true** (default): Enables the DPD feature. The IPsec initiator sends DPD packets to check the existence and availability of the peer. If no correct response is received within the specified time, the connection fails. Then, the ISAKMP SA, IPsec SA, and IPsec tunnel are deleted.
   * 
   * - **false**: Disables the DPD feature. The IPsec initiator does not send DPD packets.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create a single-tunnel IPsec-VPN connection.
   * 
   * Specifies whether to enable NAT traversal. Valid values:
   * 
   * - **true** (default): Enables NAT traversal. After NAT traversal is enabled, the verification of the UDP port number is removed during IKE negotiation, and NAT gateway devices along the VPN tunnel can be discovered.
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
   * Specifies whether to enable the BGP dynamic routing feature for the tunnels. Valid values: **true** or **false** (default).
   * 
   * > Before you add BGP configurations, learn about how the BGP dynamic routing feature works and its limits. For more information, see [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/445767.html).
   * 
   * @example
   * false
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create a single-tunnel IPsec-VPN connection.
   * 
   * Health check configuration:
   * 
   * - **HealthCheckConfig.enable**: Specifies whether to enable health checks. Valid values: **true** or **false** (default).
   * 
   * - **HealthCheckConfig.dip**: The destination IP address of the health check. Enter an IP address of the on-premises data center that can be accessed from the VPC side through the IPsec-VPN connection.
   * 
   * - **HealthCheckConfig.sip**: The source IP address of the health check. Enter an IP address on the VPC side that can be accessed from the on-premises data center through the IPsec-VPN connection.
   * 
   * - **HealthCheckConfig.interval**: The retry interval of the health check. Unit: seconds. Default value: **3**.
   * 
   * - **HealthCheckConfig.retry**: The number of retry packets sent during the health check. Default value: **3**.
   * 
   * - **HealthCheckConfig.Policy**: Specifies whether to withdraw published routes when the health check fails. Valid values:
   * 
   *      - **revoke_route** (default): Withdraw published routes.
   *      - **reserve_route**: Do not withdraw published routes.
   * 
   * @example
   * {"enable":"true","dip":"192.168.1.1","sip":"10.1.1.1","interval":"3","retry":"3","Policy": "revoke_route"}
   */
  healthCheckConfig?: string;
  /**
   * @remarks
   * This parameter is supported when you create a single-tunnel IPsec-VPN connection.
   * 
   * Phase 1 negotiation configuration:
   *            
   * - **IkeConfig.Psk**: The pre-shared key used for identity authentication between the VPN gateway and the on-premises data center.
   * 
   *     - The key must be 1 to 100 characters in length and can contain digits, uppercase and lowercase letters, and the following characters. It cannot contain spaces. ```~!`@#$%^&*()_-+={}[]|;:\\",.<>/?```
   *     - If you do not specify a pre-shared key, the system randomly generates a string as the pre-shared key. You can call the [DescribeVpnConnection](https://help.aliyun.com/document_detail/2526951.html) operation to query the pre-shared key that is automatically generated by the system.
   * 
   *     > The pre-shared key on the IPsec-VPN connection side must be the same as the authentication key on the on-premises data center side. Otherwise, the connection between the on-premises data center and the VPN gateway cannot be established.
   * 
   * - **IkeConfig.IkeVersion**: The version of the IKE protocol. Valid values: **ikev1** or **ikev2**. Default value: **ikev1**.   
   * 
   * - **IkeConfig.IkeMode**: The negotiation mode. Valid values: **main** or **aggressive**. Default value: **main**.   
   * 
   * - **IkeConfig.IkeEncAlg**: The encryption algorithm used in Phase 1 negotiation. Valid values: **aes**, **aes192**, **aes256**, **des**, or **3des**. Default value: **aes**.   
   * 
   * - **IkeConfig.IkeAuthAlg**: The authentication algorithm used in Phase 1 negotiation. Valid values: **md5**, **sha1**, **sha256**, **sha384**, **sha512**. Default value: **md5**.   
   * 
   * - **IkeConfig.IkePfs**: The Diffie-Hellman key exchange algorithm used in Phase 1 negotiation. Valid values: **group1**, **group2**, **group5**, or **group14**. Default value: **group2**.   
   * 
   * - **IkeConfig.IkeLifetime**: The lifetime of the SA generated in Phase 1 negotiation. Unit: seconds. Valid values: **0** to **86400**. Default value: **86400**.   
   * 
   * - **IkeConfig.LocalId**: The identifier on the Alibaba Cloud side of the IPsec-VPN connection. The identifier is limited to 100 characters in length and cannot contain spaces. The default value is empty.
   * 
   * - **IkeConfig.RemoteId**: The identifier on the on-premises data center side of the IPsec-VPN connection. The identifier is limited to 100 characters in length and cannot contain spaces. The default value is the IP address of the customer gateway.
   * 
   * @example
   * {"Psk":"1234****","IkeVersion":"ikev1","IkeMode":"main","IkeEncAlg":"aes","IkeAuthAlg":"sha1","IkePfs":"group2","IkeLifetime":86400,"LocalId":"47.XX.XX.1","RemoteId":"47.XX.XX.2"}
   */
  ikeConfig?: string;
  /**
   * @remarks
   * This parameter is supported when you create a single-tunnel IPsec-VPN connection.
   * 
   * Phase 2 negotiation configuration: 
   * 
   * - **IpsecConfig.IpsecEncAlg**: The encryption algorithm used in Phase 2 negotiation. Valid values: **aes**, **aes192**, **aes256**, **des**, or **3des**. Default value: **aes**.   
   * 
   * - **IpsecConfig.IpsecAuthAlg**: The authentication algorithm used in Phase 2 negotiation. Valid values: **md5**, **sha1**, **sha256**, **sha384**, **sha512**. Default value: **md5**.   
   * 
   * - **IpsecConfig.IpsecPfs**: The Diffie-Hellman key exchange algorithm used in Phase 2 negotiation. Valid values: **disabled**, **group1**, **group2**, **group5**, or **group14**. Default value: **group2**.   
   * 
   * - **IpsecConfig.IpsecLifetime**: The lifetime of the SA generated in Phase 2 negotiation. Unit: seconds. Valid values: **0** to **86400**. Default value: **86400**.
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
   * Notes on the routing mode of the IPsec-VPN connection:
   * 
   * - If both **LocalSubnet** and **RemoteSubnet** are set to 0.0.0.0/0, the destination routing mode is used.
   * - If both **LocalSubnet** and **RemoteSubnet** are set to specific CIDR blocks, the policy-based routing mode is used.
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
   * - **public** (default): public network. The IPsec-VPN connection establishes an encrypted communication channel over the Internet.
   * - **private**: private network. The IPsec-VPN connection establishes an encrypted communication channel over a private network.
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * > This parameter is not in effect.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCert?: string;
  /**
   * @remarks
   * The CIDR block on the on-premises data center side that needs to communicate with the VPC. This CIDR block is used in Phase 2 negotiation.
   * 
   * Separate multiple CIDR blocks with commas (,). Example: 192.168.3.0/24,192.168.4.0/24.
   * 
   * Notes on the routing mode of the IPsec-VPN connection:
   * 
   * - If both **LocalSubnet** and **RemoteSubnet** are set to 0.0.0.0/0, the destination routing mode is used.
   * - If both **LocalSubnet** and **RemoteSubnet** are set to specific CIDR blocks, the policy-based routing mode is used.
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
   * - You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query the resource group ID.
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
   * You can add up to 20 tags to an IPsec-VPN connection at a time.
   */
  tags?: CreateVpnAttachmentRequestTags[];
  /**
   * @remarks
   * The bandwidth specification of a single VPN tunnel. Valid values:
   * - Standard (default): standard. The default bandwidth is 1 Gbps.
   * - Large: large. The default bandwidth is 3 Gbps.
   * 
   * @example
   * Standard
   */
  tunnelBandwidth?: string;
  /**
   * @remarks
   * The tunnel configurations.
   * 
   * - The parameters in the **TunnelOptionsSpecification** array are supported when you create a dual-tunnel IPsec-VPN connection.
   * - When you create a dual-tunnel IPsec-VPN connection, you must add two tunnels at the same time to ensure link redundancy for the IPsec-VPN connection. Only two tunnels can be added to an IPsec-VPN connection.
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

