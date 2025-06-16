// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateVpnConnectionRequestTags } from "./CreateVpnConnectionRequestTags";
import { CreateVpnConnectionRequestTunnelOptionsSpecification } from "./CreateVpnConnectionRequestTunnelOptionsSpecification";


export class CreateVpnConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically configure routes. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  autoConfigRoute?: boolean;
  /**
   * @remarks
   * This parameter is supported if you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * BGP configuration:
   * 
   * *   **BgpConfig.EnableBgp**: specifies whether to enable BGP. Valid values: **true** and **false** (default).
   * 
   * *   **BgpConfig.LocalAsn:** the autonomous system number (ASN) on the Alibaba Cloud side. Valid values: **1** to **4294967295**. Default value: **45104**.
   * 
   *     You can enter a value in two segments separated by a period (.). Each segment is 16 bits in length. Enter the number in each segment in decimal format.
   * 
   *     For example, if you enter 123.456, the ASN is 8061384. The ASN is calculated by using the following formula: 123 × 65536 + 456 = 8061384.
   * 
   * *   **BgpConfig.TunnelCidr**: The CIDR block of the IPsec tunnel. The CIDR block must fall within 169.254.0.0/16 and the mask of the CIDR block must be 30 bits in length. The CIDR block cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
   * 
   *     > The CIDR block of the IPsec tunnel for each IPsec-VPN connection on a VPN gateway must be unique.
   * 
   * *   **LocalBgpIp**: the BGP address on the Alibaba Cloud side. It must be an IP address that falls within the CIDR block of the IPsec tunnel.
   * 
   * > - Before you add BGP configurations, we recommend that you learn about how BGP works and the limits. For more information, see [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/2638220.html).
   * > - We recommend that you use a private ASN to establish BGP connections to Alibaba Cloud. Refer to the relevant documentation for the private ASN range.
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
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * When you create an IPsec-VPN connection in single-tunnel mode, this parameter is required.
   * 
   * The ID of the customer gateway.
   * 
   * @example
   * cgw-p0w2jemrcj5u61un8****
   */
  customerGatewayId?: string;
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to immediately start IPsec negotiations. Valid values:
   * 
   * *   **true**: immediately starts IPsec negotiations.
   * *   **false** (default): starts IPsec negotiations when inbound traffic is detected.
   * 
   * @example
   * false
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * This parameter is available if you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * Specifies whether to enable the dead peer detection (DPD) feature. Valid values:
   * 
   * *   **true** (default) The initiator of the IPsec-VPN connection sends DPD packets to verify the existence and availability of the peer. If no feedback is received from the peer within a specified period of time, the connection fails. ISAKMP SAs and IPsec SAs are deleted. The IPsec tunnel is also deleted.
   * *   **false**
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * This parameter is available if you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * Specifies whether to enable NAT traversal. Valid values:
   * 
   * *   **true** (default) After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the VPN tunnel.
   * *   **false**
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * This parameter is available if you create an IPsec-VPN connection in dual-tunnel mode.
   * 
   * Specifies whether to enable the BGP feature for the tunnel. Valid values: **true** and **false**. Default value: false.
   * 
   * @example
   * true
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * This parameter is available if you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * The health check configuration:
   * 
   * *   **HealthCheckConfig.enable**: specifies whether to enable health checks. Valid values: **true** and **false**. Default value: false.
   * *   **HealthCheckConfig.dip**: the destination IP address configured for health checks.
   * *   **HealthCheckConfig.sip:** the source IP address that is used for health checks.
   * *   **HealthCheckConfig.interval**: the time interval of health check retries. Unit: seconds. Default value: **3**.
   * *   **HealthCheckConfig.retry**: the maximum number of health check retries. Default value: **3**.
   * 
   * @example
   * {"enable":"true","dip":"192.168.10.1","sip":"10.10.1.1","interval":"3","retry":"3"}
   */
  healthCheckConfig?: string;
  /**
   * @remarks
   * This parameter is supported if you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * The configurations of Phase 1 negotiations:
   * 
   * *   **IkeConfig.Psk**: the pre-shared key that is used for identity authentication between the VPN gateway and the on-premises data center.
   * 
   *     *   The key cannot contain spaces. The key must be 1 to 100 characters in length, and can contain digits, letters, and the following special characters: ``~!\\`@#$%^&*()_-+={}[]|;:\\",.<>/?``
   * 
   *     *   If you do not specify a pre-shared key, the system randomly generates a 16-bit string as the pre-shared key. You can call the [DescribeVpnConnection](https://help.aliyun.com/document_detail/2526951.html) operation to query the pre-shared key that is automatically generated by the system.
   * 
   *         > The pre-shared key of the IPsec-VPN connection must be the same as the authentication key of the on-premises data center. Otherwise, connections between the on-premises data center and the VPN gateway cannot be established.
   * 
   * *   **IkeConfig.IkeVersion**: the version of the Internet Key Exchange (IKE) protocol. Valid values: **ikev1** and **ikev2**. Default value: **ikev1**.
   * 
   *     Compared with IKEv1, IKEv2 simplifies the security association (SA) negotiation process and provides better support for scenarios with multiple CIDR blocks.
   * 
   * *   **IkeConfig.IkeMode**: the negotiation mode of IKE. Valid values: **main** and **aggressive**. Default value: **main**.
   * 
   *     *   **main:** This mode offers higher security during negotiations.
   *     *   **aggressive:** This mode is faster and has a higher success rate.
   * 
   * *   **IkeConfig.IkeEncAlg**: the encryption algorithm that is used in Phase 1 negotiations.
   * 
   *     Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**.
   * 
   * *   **IkeConfig.IkeAuthAlg**: the authentication algorithm that is used in Phase 1 negotiations.
   * 
   *     Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.
   * 
   * *   **IkeConfig.IkePfs**: the Diffie-Hellman key exchange algorithm that is used in Phase 1 negotiations. Valid values: **group1**, **group2**, **group5**, and **group14**. Default value: **group2**.
   * 
   * *   **IkeConfig.IkeLifetime**: the SA lifetime as a result of Phase 1 negotiations. Unit: seconds Valid values: **0** to **86400**. Default value: **86400**.
   * 
   * *   **IkeConfig.LocalId**: the identifier of the VPN gateway. It can be up to 100 characters in length and cannot contain space characters. The default value is the IP address of the VPN gateway.
   * 
   * *   **IkeConfig.RemoteId**: the identifier of the customer gateway. It can be up to 100 characters in length and cannot contain space characters. The default value is the IP address of the customer gateway.
   * 
   * @example
   * {"Psk":"1234****","IkeVersion":"ikev1","IkeMode":"main","IkeEncAlg":"aes","IkeAuthAlg":"sha1","IkePfs":"group2","IkeLifetime":86400,"LocalId":"47.XX.XX.1","RemoteId":"47.XX.XX.2"}
   */
  ikeConfig?: string;
  /**
   * @remarks
   * This parameter is available if you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * The configurations of Phase 2 negotiations:
   * 
   * *   **IpsecConfig.IpsecEncAlg**: the encryption algorithm that is used in Phase 2 negotiations.
   * 
   *     Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**. Default value: **aes**.
   * 
   * *   **IpsecConfig. IpsecAuthAlg**: the authentication algorithm that is used in Phase 2 negotiations.
   * 
   *     Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**. Default value: **md5**.
   * 
   * *   **IpsecConfig. IpsecPfs**: the DH key exchange algorithm that is used in Phase 2 negotiations. Valid values: **disabled**, **group1**, **group2**, **group5**, and **group14**. Default value: **group2**.
   * 
   * *   **IpsecConfig. IpsecLifetime**: the SA lifetime that is determined by Phase 2 negotiations. Unit: seconds. Valid values: **0** to **86400**. Default value: **86400**.
   * 
   * @example
   * {"IpsecEncAlg":"aes","IpsecAuthAlg":"sha1","IpsecPfs":"group2","IpsecLifetime":86400}
   */
  ipsecConfig?: string;
  /**
   * @remarks
   * The CIDR block of the virtual private cloud (VPC) that needs to communicate with the on-premises database. The CIDR block is used in Phase 2 negotiations.
   * 
   * Separate multiple CIDR blocks with commas (,). Example: 192.168.1.0/24,192.168.2.0/24.
   * 
   * The following routing modes are supported:
   * 
   * *   If you set **LocalSubnet** and **RemoteSubnet** to 0.0.0.0/0, the routing mode of the IPsec-VPN connection is set to Destination Routing Mode.
   * *   If you set **LocalSubnet** and **RemoteSubnet** to specific CIDR blocks, the routing mode of the IPsec-VPN connection is set to Protected Data Flows.
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
   * The ID of the region where the IPsec-VPN connection is created. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is available if you create an IPsec-VPN connection in single-tunnel mode.
   * 
   * The certificate authority (CA) certificate. If the VPN gateway is of the ShangMi (SM) type, you need to configure a CA certificate for the peer gateway device.
   * 
   * *   If an SM VPN gateway is used to create the IPsec-VPN connection, this parameter is required.
   * *   If a standard VPN gateway is used to create the IPsec-VPN connection, leave this parameter empty.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The CIDR block of the on-premises database that needs to communicate with the VPC. The CIDR block is used in Phase 2 negotiations.
   * 
   * Separate multiple CIDR blocks with commas (,). Example: 192.168.3.0/24,192.168.4.0/24.
   * 
   * The following routing modes are supported:
   * 
   * *   If you set **LocalSubnet** and **RemoteSubnet** to 0.0.0.0/0, the routing mode of the IPsec-VPN connection is set to Destination Routing Mode.
   * *   If you set **LocalSubnet** and **RemoteSubnet** to specific CIDR blocks, the routing mode of the IPsec-VPN connection is set to Protected Data Flows.
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
   * The tag value.
   * 
   * The tag value can be an empty string and cannot exceed 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values in each call.
   */
  tags?: CreateVpnConnectionRequestTags[];
  /**
   * @remarks
   * The tunnel configurations.
   * 
   * *   You can specify parameters in the **TunnelOptionsSpecification** array when you create an IPsec-VPN connection in dual tunnel mode.
   * *   When you create an IPsec-VPN connection in dual tunnel mode, you must add configurations of the active and standby tunnels for the IPsec-VPN connection. Each IPsec-VPN connection supports only one active tunnel and one standby tunnel.
   * 
   * **if can be null:**
   * true
   */
  tunnelOptionsSpecification?: CreateVpnConnectionRequestTunnelOptionsSpecification[];
  /**
   * @remarks
   * The ID of the VPN gateway.
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

