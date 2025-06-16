// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyVpnAttachmentAttributeRequestTunnelOptionsSpecification } from "./ModifyVpnAttachmentAttributeRequestTunnelOptionsSpecification";


export class ModifyVpnAttachmentAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically configure routes. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoConfigRoute?: boolean;
  /**
   * @remarks
   * This parameter is supported if you modify the configurations of an IPsec-VPN connection in single-tunnel mode.
   * 
   * BGP configuration:
   * 
   * *   **BgpConfig.EnableBgp**: specifies whether to enable BGP. Valid values:
   * 
   *     *   **true**
   *     *   **false**
   * 
   * *   **BgpConfig.LocalAsn**: the autonomous system number (ASN) on the Alibaba Cloud side. Valid values: **1** to **4294967295**.
   * 
   *     You can enter a value in two segments separated by a period (.). Each segment is 16 bits in length. Enter the number in each segment in decimal format.
   * 
   *     For example, if you enter 123.456, the ASN is 8061384. The ASN is calculated by using the following formula: 123 × 65536 + 456 = 8061384.
   * 
   * *   **BgpConfig.TunnelCidr**: The CIDR block of the IPsec tunnel. The CIDR block must fall into 169.254.0.0/16 and the mask of the CIDR block must be 30 bits in length. The CIDR block cannot be 169.254.0.0/30, 169.254.1.0/30, 169.254.2.0/30, 169.254.3.0/30, 169.254.4.0/30, 169.254.5.0/30, 169.254.6.0/30, or 169.254.169.252/30.
   * 
   * *   **LocalBgpIp**: the BGP address on the Alibaba Cloud side. It must be an IP address that falls within the CIDR block of the IPsec tunnel.
   * 
   * > - Before you add BGP configurations, we recommend that you learn about how BGP works and the limits. For more information, see [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/445767.html).
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
   * >  If you do not specify this parameter, the system automatically uses the value of **RequestId** as the value of **ClientToken**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-4266****
   */
  clientToken?: string;
  /**
   * @remarks
   * The customer gateways to be associated with the IPsec-VPN connections.
   * 
   * >  Only single-tunnel IPsec-VPN connections support this parameter.
   * 
   * @example
   * cgw-p0w2jemrcj5u61un8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Specifies whether to immediately start IPsec negotiations after the configuration takes effect. Valid values:
   * 
   * *   **true**: immediately starts IPsec negotiations after the configuration is complete.
   * *   **false**: starts IPsec negotiations when inbound traffic is detected.
   * 
   * @example
   * false
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * This parameter is supported if you modify the configurations of an IPsec-VPN connection in single-tunnel mode.
   * 
   * Specifies whether to enable dead peer detection (DPD). Valid values:
   * 
   * *   **true**: enables DPD. The initiator of the IPsec-VPN connection sends DPD packets to check the existence and availability of the peer. If no feedback is received from the peer within the specified period of time, the connection fails. In this case, ISAKMP SA and IPsec SA are deleted, along with the security tunnel.
   * *   **false**: disables DPD. The initiator of the IPsec-VPN connection does not send DPD packets.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * This parameter is supported if you modify the configurations of an IPsec-VPN connection in single-tunnel mode.
   * 
   * Specifies whether to enable NAT traversal. Valid values:
   * 
   * *   **true**: enables NAT traversal. After NAT traversal is enabled, the initiator does not check the UDP ports during IKE negotiations and can automatically discover NAT gateway devices along the IPsec-VPN tunnel.
   * *   **false**: disables NAT traversal.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * You can specify this parameter if you modify the configuration of a dual-tunnel IPsec-VPN connection.
   * 
   * Specifies whether to enable the BGP feature for the tunnel. Valid values: **true** and **false**.
   * 
   * >  Before you add BGP configurations, we recommend that you learn about how BGP works and the limits. For more information, see [Configure BGP dynamic routing](https://help.aliyun.com/document_detail/445767.html).
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * This parameter is supported if you modify the configurations of an IPsec-VPN connection in single-tunnel mode.
   * 
   * The health check configurations:
   * 
   * *   **HealthCheckConfig.enable**: specifies whether to enable the health check feature. Valid values:
   * 
   *     *   **true**
   *     *   **false**
   * 
   * *   **HealthCheckConfig.dip**: the destination IP address configured for health checks. Specify the IP address of the data center with which the VPC can access through the IPsec-VPN connection.
   * 
   * *   **HealthCheckConfig.sip**: the source IP address configured for health checks. The IP address of the VPC with which the data center can access through the IPsec-VPN connection.
   * 
   * *   **HealthCheckConfig.interval**: the interval between two consecutive health checks. Unit: seconds.
   * 
   * *   **HealthCheckConfig.retry:** the maximum number of health check retries.
   * 
   * *   **HealthCheckConfig.Policy**: specifies whether to withdraw advertised routes when health checks fail. Valid values:
   * 
   *     *   **revoke_route**
   *     *   **reserve_route**
   * 
   * @example
   * {"enable":"true","dip":"192.168.1.1","sip":"10.1.1.1","interval":"3","retry":"3","Policy": "revoke_route"}
   */
  healthCheckConfig?: string;
  /**
   * @remarks
   * This parameter is supported if you modify the configurations of an IPsec-VPN connection in single-tunnel mode.
   * 
   * The configuration of Phase 1 negotiations:
   * 
   * *   **IkeConfig.Psk**: The pre-shared key that is used for identity authentication between the Alibaba Cloud IPsec connection and the on-premises data center.
   * 
   *     *   The key must be 1 to 100 characters in length, and can contain digits, and letters. The key cannot contain spaces. ``~!`@#$%^&*()_-+={}[]|;:\\",.<>/?``
   *     *   If you do not specify a pre-shared key, the system randomly generates a 16-bit string as the pre-shared key. You can call the [DescribeVpnConnection](https://help.aliyun.com/document_detail/120374.html) operation to query the pre-shared key that is automatically generated by the system.
   * 
   *     > The pre-shared key of the IPsec-VPN connection must be the same as the authentication key of the on-premises data center. Otherwise, connections between the on-premises data center and the VPN gateway cannot be established.
   * 
   * *   **IkeConfig.IkeVersion**: the version of the Internet Key Exchange (IKE) protocol. Valid values: **ikev1** and **ikev2**.
   * 
   * *   **IkeConfig.IkeMode**: the negotiation mode. Valid values: **main** and **aggressive**.
   * 
   * *   **IkeConfig.IkeEncAlg:** the encryption algorithm that is used in Phase 1 negotiations. Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**.
   * 
   * *   **IkeConfig.IkeAuthAlg**: the authentication algorithm that is used in Phase 1 negotiations. Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.
   * 
   * *   **IkeConfig.IkePfs**: the Diffie-Hellman key exchange algorithm that is used in Phase 1 negotiations. Valid values: **group1**, **group2**, **group5**, and **group14**.
   * 
   * *   **IkeConfig.IkeLifetime**: the SA lifetime as a result of Phase 1 negotiations. Unit: seconds. Valid values: **0** to **86400**.
   * 
   * *   **IkeConfig.LocalId**: the identifier on the Alibaba Cloud side. The identifier cannot exceed 100 characters in length and cannot contain spaces.
   * 
   * *   **IkeConfig.RemoteId**: the identifier of the data center. It cannot exceed 100 characters in length and cannot contain spaces.
   * 
   * @example
   * {"Psk":"1234****","IkeVersion":"ikev1","IkeMode":"main","IkeEncAlg":"aes","IkeAuthAlg":"sha1","IkePfs":"group2","IkeLifetime":86400,"LocalId":"47.XX.XX.1","RemoteId":"47.XX.XX.2"}
   */
  ikeConfig?: string;
  /**
   * @remarks
   * This parameter is supported if you modify the configurations of an IPsec-VPN connection in single-tunnel mode.
   * 
   * The configuration of Phase 2 negotiations:
   * 
   * *   **IpsecConfig.IpsecEncAlg:** the encryption algorithm that is used in Phase 2 negotiations. Valid values: **aes**, **aes192**, **aes256**, **des**, and **3des**.
   * *   **IpsecConfig. IpsecAuthAlg:** the authentication algorithm that is used in Phase 2 negotiations. Valid values: **md5**, **sha1**, **sha256**, **sha384**, and **sha512**.
   * *   **IpsecConfig. IpsecPfs:** the Diffie-Hellman key exchange algorithm that is used in Phase 2 negotiations. Valid values: **disabled**, **group1**, **group2**, **group5**, and **group14**.
   * *   **IkeConfig.IkeLifetime**: the SA lifetime determined by Phase 2 negotiations. Unit: seconds. Valid values: **0** to **86400**.
   * 
   * @example
   * {"IpsecEncAlg":"aes","IpsecAuthAlg":"sha1","IpsecPfs":"group2","IpsecLifetime":86400}
   */
  ipsecConfig?: string;
  /**
   * @remarks
   * The CIDR block of the virtual private cloud (VPC) that communicates with the data center. The CIDR block is used in Phase 2 negotiations.
   * 
   * Separate multiple CIDR blocks with commas (,). Example: 192.168.1.0/24,192.168.2.0/24.
   * 
   * The following routing modes are supported:
   * 
   * *   If you set **LocalSubnet** and **RemoteSubnet** to 0.0.0.0/0, the routing mode of the IPsec-VPN connection is set to Destination Routing Mode.
   * *   If you set **LocalSubnet** and **RemoteSubnet** to specific CIDR blocks, the routing mode of the IPsec-VPN connection is set to Protected Data Flows.
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
   * 
   * *   **public**: an encrypted connection over the Internet
   * *   **private**: an encrypted connection over private networks
   * 
   * @example
   * public
   */
  networkType?: string;
  ownerAccount?: string;
  /**
   * @remarks
   * The ID of the region in which the IPsec-VPN connection is established.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The peer CA certificate when a ShangMi (SM) VPN gateway is used to create the IPsec-VPN connection.
   * 
   * @example
   * c20ycDI1NnYxIENBIChURVNUIFN****
   */
  remoteCaCert?: string;
  /**
   * @remarks
   * The CIDR block of the data center that communicates with the VPC. This CIDR block is used in Phase 2 negotiations.
   * 
   * Separate multiple CIDR blocks with commas (,). Example: 192.168.3.0/24,192.168.4.0/24.
   * 
   * The following routing modes are supported:
   * 
   * *   If you set **LocalSubnet** and **RemoteSubnet** to 0.0.0.0/0, the routing mode of the IPsec-VPN connection is set to Destination Routing Mode.
   * *   If you set **LocalSubnet** and **RemoteSubnet** to specific CIDR blocks, the routing mode of the IPsec-VPN connection is set to Protected Data Flows.
   * 
   * @example
   * 10.1.3.0/24,10.1.4.0/24
   */
  remoteSubnet?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tunnel configurations.
   * 
   * You can specify parameters in the **TunnelOptionsSpecification** array when you modify the configurations of an IPsec-VPN connection in dual-tunnel mode. You can modify the configurations of the two tunnels of the IPsec-VPN connection.
   * 
   * **if can be null:**
   * true
   */
  tunnelOptionsSpecification?: ModifyVpnAttachmentAttributeRequestTunnelOptionsSpecification[];
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * This parameter is required.
   * 
   * @example
   * vco-p0w5112fgnl2ihlmf****
   */
  vpnConnectionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoConfigRoute: 'AutoConfigRoute',
      bgpConfig: 'BgpConfig',
      clientToken: 'ClientToken',
      customerGatewayId: 'CustomerGatewayId',
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
      customerGatewayId: 'string',
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
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tunnelOptionsSpecification: { 'type': 'array', 'itemType': ModifyVpnAttachmentAttributeRequestTunnelOptionsSpecification },
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

