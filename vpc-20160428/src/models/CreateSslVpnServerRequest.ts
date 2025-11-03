// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSslVpnServerRequest extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm that is used by the SSL-VPN connection.
   * 
   * *   If the client uses Tunnelblick or OpenVPN 2.4.0 or later, the SSL server dynamically negotiates with the client about the encryption algorithm and uses the most secure encryption algorithm that is supported by the SSL server and the client. The encryption algorithm that you specify for the SSL server does not take effect.
   * 
   * *   If the client uses OpenVPN of a version that is earlier than 2.4.0, the SSL server and the client use the encryption algorithm that you specify for the SSL server. You can specify one of the following encryption algorithms for the SSL server:
   * 
   *     *   **AES-128-CBC** (default)
   *     *   **AES-192-CBC**
   *     *   **AES-256-CBC**
   *     *   **none**
   * 
   * @example
   * AES-128-CBC
   */
  cipher?: string;
  /**
   * @remarks
   * The client CIDR block.
   * 
   * The CIDR block from which an IP address is allocated to the virtual network interface controller (NIC) of the client, rather than the private CIDR block.
   * 
   * If the client accesses the SSL server over an SSL-VPN connection, the VPN gateway assigns an IP address from the specified client CIDR block for the client to access cloud resources.
   * 
   * Make sure that the number of IP addresses in the client CIDR block is at least four times the maximum number of SSL-VPN connections supported by the VPN gateway.
   * 
   * **Click to view the reason.**
   * 
   * For example, if you specify 192.168.0.0/24 as the client CIDR block, the system first divides a subnet CIDR block with a subnet mask of 30 from 192.168.0.0/24, such as 192.168.0.4/30. This subnet provides up to four IP addresses. Then, the system allocates an IP address from 192.168.0.4/30 to the client and uses the other three IP addresses to ensure network communication. In this case, one client consumes four IP addresses. Therefore, to ensure that an IP address is assigned to your client, the number of IP addresses in the client CIDR block must be at least four times the maximum number of SSL-VPN connections supported by the VPN gateway with which the SSL server is associated.
   * 
   * **Click to view the CIDR blocks that are not supported.**
   * 
   * *   100.64.0.0~100.127.255.255
   * *   127.0.0.0~127.255.255.255
   * *   169.254.0.0~169.254.255.255
   * *   224.0.0.0~239.255.255.255
   * *   255.0.0.0~255.255.255.255
   * 
   * **Click to view the recommended client CIDR blocks for different numbers of SSL-VPN connections.**
   * 
   * *   If the number of SSL-VPN connections is 5, we recommend that you specify a client CIDR block with a subnet mask that is less than or equal to 27 bits in length. Examples: 10.0.0.0/27 and 10.0.0.0/26.
   * *   If the number of SSL-VPN connections is 10, we recommend that you specify a client CIDR block with a subnet mask that is less than or equal to 26 bits in length. Examples: 10.0.0.0/26 and 10.0.0.0/25.
   * *   If the number of SSL-VPN connections is 20, we recommend that you specify a client CIDR block with a subnet mask that is less than or equal to 25 bits in length. Examples: 10.0.0.0/25 and 10.0.0.0/24.
   * *   If the number of SSL-VPN connections is 50, we recommend that you specify a client CIDR block with a subnet mask that is less than or equal to 24 bits in length. Examples: 10.0.0.0/24 and 10.0.0.0/23.
   * *   If the number of SSL-VPN connections is 100, we recommend that you specify a client CIDR block with a subnet mask that is less than or equal to 23 bits in length. Examples: 10.0.0.0/23 and 10.0.0.0/22.
   * *   If the number of SSL-VPN connections is 200, we recommend that you specify a client CIDR block with a subnet mask that is less than or equal to 22 bits in length. Examples: 10.0.0.0/22 and 10.0.0.0/21.
   * *   If the number of SSL-VPN connections is 500, we recommend that you specify a client CIDR block with a subnet mask that is less than or equal to 21 bits in length. Examples: 10.0.0.0/21 and 10.0.0.0/20.
   * *   If the number of SSL-VPN connections is 1,000, we recommend that you specify a client CIDR block with a subnet mask that is less than or equal to 20 bits in length. Examples: 10.0.0.0/20 and 10.0.0.0/19.
   * 
   * > 
   * 
   * *   The subnet mask of the client CIDR block must be 16 to 29 bits in length.
   * 
   * *   Make sure that the client CIDR block does not overlap with the local CIDR block, the VPC CIDR block, or route CIDR blocks associated with the client.
   * 
   * *   We recommend that you use 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, or one of their subnets as the client CIDR block. If you want to specify a public CIDR block as the client CIDR block, you must specify the public CIDR block as the user CIDR block of the virtual private cloud (VPC). This way, the VPC can access the public CIDR block. For more information, see [VPC FAQs](https://help.aliyun.com/document_detail/185311.html).
   * 
   * *   After you create an SSL server, the system automatically adds routes that point to the client CIDR block to the VPC route table. Do not manually add routes that point to the client CIDR block. Otherwise, SSL-VPN connections cannot work as expected.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.0/24
   */
  clientIpPool?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable data compression. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  compress?: boolean;
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable two-factor authentication. To enable two-factor authentication, you need to specify `IDaaSInstanceId`, `IDaaSRegionId`, and `IDaaSApplicationId`. Valid values:
   * 
   * *   **true**: enables this feature.
   * *   **false** (default): disables this feature.
   * 
   * > 
   * 
   * *   If you use two-factor authentication for the first time, you must first complete [authorization](https://ram.console.aliyun.com/role/authorization?request=%7B%22Services%22%3A%5B%7B%22Service%22%3A%22VPN%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunVpnAccessingIdaasRole%22%2C%22TemplateId%22%3A%22IdaasRole%22%7D%5D%7D%5D%2C%22ReturnUrl%22%3A%22https%3A%2F%2Fvpc.console.aliyun.com%2Fsslvpn%2Fcn-shanghai%2Fvpn-servers%22%7D) .
   * 
   * *   When you create an SSL server in the UAE (Dubai) region, we recommend that you associate the SSL server with an IDaaS EIAM 2.0 instance in Singapore to reduce latency.
   * 
   * *   IDaaS EIAM 1.0 instances are no longer for purchase. If your Alibaba Cloud account has IDaaS EIAM 1.0 instances, the IDaaS EIAM 1.0 instances can be associated after two-factor authentication is enabled. If your Alibaba Cloud account does not have IDaaS EIAM 1.0 instances, only IDaaS EIAM 2.0 instances can be associated after two-factor authentication is enabled.
   * 
   * @example
   * false
   */
  enableMultiFactorAuth?: boolean;
  /**
   * @remarks
   * The ID of the IDaaS application.
   * 
   * *   If an IDaaS EIAM 2.0 instance is associated, you need to specify an IDaaS application ID.
   * *   If an IDaaS EIAM 1.0 instance is associated, you do not need to specify an IDaaS application ID.
   * 
   * @example
   * app_my6g4qmvnwxzj2f****
   */
  IDaaSApplicationId?: string;
  /**
   * @remarks
   * The ID of the IDaaS EIAM instance.
   * 
   * @example
   * idaas-cn-hangzhou-p****
   */
  IDaaSInstanceId?: string;
  /**
   * @remarks
   * The region ID of the IDaaS EIAM instance.
   * 
   * @example
   * cn-hangzhou
   */
  IDaaSRegionId?: string;
  /**
   * @remarks
   * The local CIDR block.
   * 
   * The CIDR block that your client needs to access by using the SSL-VPN connection.
   * 
   * This value can be the CIDR block of a VPC, a vSwitch, a data center that is connected to a VPC by using an Express Connect circuit, or an Alibaba Cloud service such as Object Storage Service (OSS).
   * 
   * The subnet mask of the specified local CIDR block must be 8 to 32 bits in length. You cannot specify the following CIDR blocks as the local CIDR blocks:
   * 
   * *   127.0.0.0~127.255.255.255
   * *   169.254.0.0~169.254.255.255
   * *   224.0.0.0~239.255.255.255
   * *   255.0.0.0~255.255.255.255
   * 
   * This parameter is required.
   * 
   * @example
   * 10.0.0.0/8
   */
  localSubnet?: string;
  /**
   * @remarks
   * The SSL server name.
   * 
   * The name must be 1 to 100 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * sslvpnname
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The port that is used by the SSL server. Valid values of port numbers: **1** to **65535**. Default value: **1194**.
   * 
   * The following ports are not supported: **22**, **2222**, **22222**, **9000**, **9001**, **9002**, **7505**, **80**, **443**, **53**, **68**, **123**, **4510**, **4560**, **500**, and **4500**.
   * 
   * @example
   * 1194
   */
  port?: number;
  /**
   * @remarks
   * The protocol that is used by the SSL server. Valid values:
   * 
   * *   **TCP** (default)
   * *   **UDP**
   * 
   * @example
   * UDP
   */
  proto?: string;
  /**
   * @remarks
   * The region ID of the VPN gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * vpn-bp1hgim8by0kc9nga****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      cipher: 'Cipher',
      clientIpPool: 'ClientIpPool',
      clientToken: 'ClientToken',
      compress: 'Compress',
      dryRun: 'DryRun',
      enableMultiFactorAuth: 'EnableMultiFactorAuth',
      IDaaSApplicationId: 'IDaaSApplicationId',
      IDaaSInstanceId: 'IDaaSInstanceId',
      IDaaSRegionId: 'IDaaSRegionId',
      localSubnet: 'LocalSubnet',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      port: 'Port',
      proto: 'Proto',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipher: 'string',
      clientIpPool: 'string',
      clientToken: 'string',
      compress: 'boolean',
      dryRun: 'boolean',
      enableMultiFactorAuth: 'boolean',
      IDaaSApplicationId: 'string',
      IDaaSInstanceId: 'string',
      IDaaSRegionId: 'string',
      localSubnet: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      port: 'number',
      proto: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

