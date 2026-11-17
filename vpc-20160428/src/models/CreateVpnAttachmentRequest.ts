// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnAttachmentRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. It cannot be an empty string.
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
   * Each tag key is paired with a tag value. You can specify up to 20 tag values at a time.
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
   * The autonomous system number on the Alibaba Cloud side of the tunnel. Valid values: **1** to **4294967295**. Default value: **45104**.
   * 
   * > We recommend that you use a private autonomous system number to establish a BGP connection with Alibaba Cloud. For the range of private autonomous system numbers, refer to relevant documentation.
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
   * The BGP CIDR block of the tunnel. The CIDR block must be a block with a mask length of 30 within the 169.254.0.0/16 CIDR block. It cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
   * 
   * > The CIDR blocks of the two tunnels under the same IPsec-VPN connection cannot be the same.
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
   * The authentication algorithm for Phase 1 negotiations. Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **sha1**.
   * 
   * @example
   * sha1
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm for Phase 1 negotiations. Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**.
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * The SA lifecycle for Phase 1 negotiations. Unit: seconds.
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
   * - **aggressive**: Aggressive mode. The negotiation process is fast and has a high success rate.
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The Diffie-Hellman key exchange algorithm for Phase 1 negotiations. Default value: **group2**.   
   * Valid values: **group1**, **group2**, **group5**, and **group14**.
   * 
   * @example
   * group2
   */
  ikePfs?: string;
  /**
   * @remarks
   * The version of the IKE protocol. Valid values: **ikev1** and **ikev2**. Default value: **ikev2**.
   * 
   * Compared with IKEv1, IKEv2 simplifies the SA negotiation process and provides better support for scenarios with multiple CIDR blocks.
   * 
   * @example
   * ikev2
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier on the Alibaba Cloud side of the tunnel, which is used for Phase 1 negotiations. It can be up to 100 characters in length and cannot contain spaces. Default value: the IP address of the tunnel.
   * 
   * **LocalId** supports the FQDN format. If you use the FQDN format, we recommend that you set the negotiation mode to **aggressive**.
   * 
   * @example
   * 47.XX.XX.1
   */
  localId?: string;
  /**
   * @remarks
   * The pre-shared key used for authentication between the tunnel and the peer.
   * 
   * - The key must be 1 to 100 characters in length and can contain digits, letters, and the following special characters: ```~!`@#$%^&*()_-+={}[]|;:\\",.<>/?``` It cannot contain spaces.
   * 
   * - If you do not specify a pre-shared key, the system randomly generates a 16-character string as the pre-shared key. You can call the [DescribeVpnAttachments](https://help.aliyun.com/document_detail/2526939.html) operation to query the automatically generated pre-shared key.     
   * 
   * > The pre-shared key of the tunnel must be the same as that of the peer. Otherwise, the system cannot establish the tunnel.
   * 
   * @example
   * 123456****
   */
  psk?: string;
  /**
   * @remarks
   * The identifier of the peer of the tunnel, which is used for Phase 1 negotiations. It can be up to 100 characters in length and cannot contain spaces. Default value: the IP address of the customer gateway associated with the tunnel.
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
   * The authentication algorithm for Phase 2 negotiations.
   * 
   * Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **sha1**.
   * 
   * @example
   * sha1
   */
  ipsecAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm for Phase 2 negotiations. Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**.
   * 
   * @example
   * aes
   */
  ipsecEncAlg?: string;
  /**
   * @remarks
   * The SA lifecycle for Phase 2 negotiations. Unit: seconds.
   * 
   * Valid values: **0** to **86400**. Default value: **86400**.
   * 
   * @example
   * 86400
   */
  ipsecLifetime?: number;
  /**
   * @remarks
   * The Diffie-Hellman key exchange algorithm for Phase 2 negotiations. Default value: **group2**.   
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
   * Specifies whether to enable the dead peer detection (DPD) feature for the tunnel. Valid values:
   * 
   * - **true** (default): Enable the DPD feature. The IPsec initiator sends DPD packets to check whether the peer device is alive. If no valid response is received within the specified time, the peer is considered offline. The IPsec initiator then deletes the ISAKMP SA and the corresponding IPsec SA, and the secure tunnel is also deleted.
   * 
   * - **false**: Disable the DPD feature. The IPsec initiator does not send DPD probe packets.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the NAT traversal feature for the tunnel. Valid values:
   * 
   * - **true** (default): Enable the NAT traversal feature. After this feature is enabled, the IKE negotiation process skips the verification of UDP port numbers and discovers NAT gateway devices in the tunnel.
   * 
   * - **false**: Disable the NAT traversal feature.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * The BGP configurations for the tunnel.
   * 
   * > You must configure this parameter after you enable the BGP feature for the IPsec-VPN connection (that is, after you set **EnableTunnelsBgp** to **true**).
   */
  tunnelBgpConfig?: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelBgpConfig;
  /**
   * @remarks
   * The configurations for Phase 1 negotiations.
   */
  tunnelIkeConfig?: CreateVpnAttachmentRequestTunnelOptionsSpecificationTunnelIkeConfig;
  /**
   * @remarks
   * The creation sequence of the tunnel.
   * 
   * - **1**: The first tunnel.
   * - **2**: The second tunnel.
   * 
   * @example
   * 1
   */
  tunnelIndex?: number;
  /**
   * @remarks
   * The configurations for Phase 2 negotiations.
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
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * BGP configurations:
   * 
   * - **BgpConfig.EnableBgp**: Specifies whether to enable the BGP feature. Valid values: **true** and **false** (default).
   * 
   * - **BgpConfig.LocalAsn**: The autonomous system number on the Alibaba Cloud side. Valid values: **1** to **4294967295**. Default value: **45104**.
   * 
   *     You can enter the autonomous system number in the two-byte format: first 16 bits.second 16 bits. Each part is entered in decimal format.
   * 
   *     For example, if you enter 123.456, the autonomous system number is calculated as follows: 123 × 65536 + 456 = 8061384.
   * 
   * - **BgpConfig.TunnelCidr**: The CIDR block of the IPsec tunnel. The CIDR block must be a block with a mask length of 30 within the 169.254.0.0/16 CIDR block. It cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
   * 
   * - **LocalBgpIp**: The BGP IP address on the Alibaba Cloud side. This IP address must be within the CIDR block of the IPsec tunnel. 
   * 
   * > - Before you add BGP configurations, we recommend that you understand the working mechanism and limits of the BGP dynamic routing feature. For more information, see [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/445767.html).
   * > - We recommend that you use a private autonomous system number to establish a BGP connection with Alibaba Cloud. For the range of private autonomous system numbers, refer to relevant documentation.
   * 
   * @example
   * {"EnableBgp":"true","LocalAsn":"45104","TunnelCidr":"169.254.11.0/30","LocalBgpIp":"169.254.11.1"}
   */
  bgpConfig?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the customer gateway.
   * 
   * > This parameter is required only when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * @example
   * cgw-p0w2jemrcj5u61un8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * 
   * - **true**: Prechecks the request without creating the IPsec-VPN connection. The system checks whether required parameters are set, the request format, and service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): Sends the request. If the request passes the precheck, the IPsec-VPN connection is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether the configurations of the IPsec-VPN connection take effect immediately. Valid values:
   * 
   * - **true**: Yes. The system immediately starts IPsec negotiations after the configurations are completed.
   * - **false** (default): No. The system starts IPsec negotiations only when traffic is detected.
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
   * - **true** (default): Enable the DPD feature. The IPsec initiator sends DPD packets to check whether the peer device is alive. If no valid response is received within the specified time, the peer is considered offline. The IPsec initiator then deletes the ISAKMP SA and the corresponding IPsec SA, and the secure tunnel is also deleted.
   * 
   * - **false**: Disable the DPD feature. The IPsec initiator does not send DPD probe packets.
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
   * - **true** (default): Enable the NAT traversal feature. After this feature is enabled, the IKE negotiation process skips the verification of UDP port numbers and discovers NAT gateway devices in the VPN tunnel.
   * 
   * - **false**: Disable the NAT traversal feature.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in dual-tunnel mode.
   * 
   * Specifies whether to enable the BGP feature for the tunnels. Valid values: **true** and **false** (default).
   * 
   * > Before you add BGP configurations, we recommend that you understand the working mechanism and limits of the BGP dynamic routing feature. For more information, see [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/445767.html).
   * 
   * @example
   * false
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * Health check configurations:
   * 
   * - **HealthCheckConfig.enable**: Specifies whether to enable health checks. Valid values: **true** and **false** (default).
   * 
   * - **HealthCheckConfig.dip**: The destination IP address for health checks. Enter the IP address of the data center that can be accessed from the VPC through the IPsec-VPN connection.
   * 
   * - **HealthCheckConfig.sip**: The source IP address for health checks. Enter the IP address on the VPC side that can be accessed from the data center through the IPsec-VPN connection.
   * 
   * - **HealthCheckConfig.interval**: The retry interval for health checks. Unit: seconds. Default value: **3**.
   * 
   * - **HealthCheckConfig.retry**: The maximum number of health check retries. Default value: **3**.
   * 
   * - **HealthCheckConfig.Policy**: Specifies whether to revoke published routes when a health check fails. Valid values:
   * 
   *      - **revoke_route** (default): Revoke published routes.
   *      - **reserve_route**: Do not revoke published routes.
   * 
   * @example
   * {"enable":"true","dip":"192.168.1.1","sip":"10.1.1.1","interval":"3","retry":"3","Policy": "revoke_route"}
   */
  healthCheckConfig?: string;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * Configurations for Phase 1 negotiations:
   *            
   * - **IkeConfig.Psk**: The pre-shared key used for authentication between the VPN gateway and the data center.
   * 
   *     - The key must be 1 to 100 characters in length and can contain digits, letters, and the following special characters: ```~!`@#$%^&*()_-+={}[]|;:\\",.<>/?``` It cannot contain spaces.
   *     - If you do not specify a pre-shared key, the system randomly generates a string as the pre-shared key. You can call the [DescribeVpnConnection](https://help.aliyun.com/document_detail/2526951.html) operation to query the automatically generated pre-shared key.
   * 
   *     > The pre-shared key of the IPsec-VPN connection must be the same as the authentication key of the data center. Otherwise, the connection between the data center and the VPN gateway cannot be established.
   * 
   * - **IkeConfig.IkeVersion**: The version of the IKE protocol. Valid values: **ikev1** and **ikev2**. Default value: **ikev1**.   
   * 
   * - **IkeConfig.IkeMode**: The negotiation mode. Valid values: **main** and **aggressive**. Default value: **main**.   
   * 
   * - **IkeConfig.IkeEncAlg**: The encryption algorithm for Phase 1 negotiations. Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**.   
   * 
   * - **IkeConfig.IkeAuthAlg**: The authentication algorithm for Phase 1 negotiations. Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.   
   * 
   * - **IkeConfig.IkePfs**: The Diffie-Hellman key exchange algorithm for Phase 1 negotiations. Valid values: **group1**, **group2**, **group5**, and **group14**. Default value: **group2**.   
   * 
   * - **IkeConfig.IkeLifetime**: The SA lifecycle for Phase 1 negotiations. Unit: seconds. Valid values: **0** to **86400**. Default value: **86400**.   
   * 
   * - **IkeConfig.LocalId**: The identifier of the IPsec-VPN connection on the Alibaba Cloud side. It can be up to 100 characters in length and cannot contain spaces. Default value: empty.
   * 
   * - **IkeConfig.RemoteId**: The identifier of the IPsec-VPN connection on the data center side. It can be up to 100 characters in length and cannot contain spaces. Default value: the IP address of the customer gateway.
   * 
   * @example
   * {"Psk":"1234****","IkeVersion":"ikev1","IkeMode":"main","IkeEncAlg":"aes","IkeAuthAlg":"sha1","IkePfs":"group2","IkeLifetime":86400,"LocalId":"47.XX.XX.1","RemoteId":"47.XX.XX.2"}
   */
  ikeConfig?: string;
  /**
   * @remarks
   * This parameter is supported when you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * Configurations for Phase 2 negotiations: 
   * 
   * - **IpsecConfig.IpsecEncAlg**: The encryption algorithm for Phase 2 negotiations. Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**.   
   * 
   * - **IpsecConfig.IpsecAuthAlg**: The authentication algorithm for Phase 2 negotiations. Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.   
   * 
   * - **IpsecConfig.IpsecPfs**: The Diffie-Hellman key exchange algorithm for Phase 2 negotiations. Valid values: **disabled**, **group1**, **group2**, **group5**, and **group14**. Default value: **group2**.   
   * 
   * - **IpsecConfig.IpsecLifetime**: The SA lifecycle for Phase 2 negotiations. Unit: seconds. Valid values: **0** to **86400**. Default value: **86400**.
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
   * - If both **LocalSubnet** and **RemoteSubnet** are set to specific CIDR blocks, the traffic-based routing mode is used.
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
   * The name must be 1 to 100 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The network type of the IPsec-VPN connection. Valid values:
   * - **public** (default): Internet. The IPsec-VPN connection establishes an encrypted communication channel over the Internet.
   * - **private**: Private network. The IPsec-VPN connection establishes an encrypted communication channel over a private network.
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
   * > This parameter does not take effect at the moment.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCert?: string;
  /**
   * @remarks
   * The CIDR block on the data center side that needs to communicate with the VPC. This parameter is used for Phase 2 negotiations.
   * 
   * Separate multiple CIDR blocks with commas (,). Example: 192.168.3.0/24,192.168.4.0/24.
   * 
   * Routing modes of the IPsec-VPN connection:
   * 
   * - If both **LocalSubnet** and **RemoteSubnet** are set to 0.0.0.0/0, the destination routing mode is used.
   * - If both **LocalSubnet** and **RemoteSubnet** are set to specific CIDR blocks, the traffic-based routing mode is used.
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
   * The list of tags to be added to the IPsec-VPN connection.
   * 
   * You can add up to 20 tags to an IPsec-VPN connection at a time.
   */
  tags?: CreateVpnAttachmentRequestTags[];
  /**
   * @remarks
   * The bandwidth specification of a single VPN tunnel. Valid values:
   * - **Standard** (default): Standard type. The default bandwidth is 1 Gbit/s.
   * - **Large**: Large type. The default bandwidth is 3 Gbit/s.
   * 
   * @example
   * Standard
   */
  tunnelBandwidth?: string;
  /**
   * @remarks
   * The tunnel configurations.
   * 
   * - This parameter and its sub-parameters are supported when you create an IPsec-VPN connection in dual-tunnel mode.
   * - When you create an IPsec-VPN connection in dual-tunnel mode, you must add two tunnels to the IPsec-VPN connection to ensure link redundancy. You can add only two tunnels to an IPsec-VPN connection.
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

