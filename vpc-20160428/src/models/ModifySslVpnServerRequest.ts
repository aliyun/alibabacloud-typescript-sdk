// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySslVpnServerRequest extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm used by SSL-VPN. Valid values: 
   * 
   * - **AES-128-CBC** (default): AES-128-CBC
   * 
   * - **AES-192-CBC**: AES-192-CBC
   * 
   * - **AES-256-CBC**: AES-256-CBC
   * 
   * - **none**: No encryption algorithm is used.
   * 
   * @example
   * AES-128-CBC
   */
  cipher?: string;
  /**
   * @remarks
   * The client CIDR block.
   * 
   * The client CIDR block is the CIDR block from which IP addresses are allocated to the virtual network interface controller (NIC) of the client. It is not the existing internal network CIDR block of the clients.
   * 
   * When a client accesses the local network through an SSL-VPN connection, the VPN gateway allocates an IP address from the specified client CIDR block to the client. The client uses the allocated IP address to access cloud resources.
   * 
   * When you specify the client CIDR block, make sure that the number of IP addresses in the client CIDR block is at least four times the number of SSL connections supported by the VPN gateway.
   * <details>
   * <summary>Click to view the reason.</summary>
   * For example, if the specified client CIDR block is 192.168.0.0/24, the system first divides a subnet with a 30-bit subnet mask from the 192.168.0.0/24 CIDR block, such as 192.168.0.4/30. Then, the system allocates an IP address from 192.168.0.4/30 for the client to use. The remaining three IP addresses are occupied by the system to ensure network communication. In this case, one client consumes four IP addresses. Therefore, to ensure that all your clients can be allocated IP addresses, make sure that the number of IP addresses in the specified client CIDR block is at least four times the number of SSL connections supported by the VPN gateway.
   * </details>
   * 
   * <details>
   * <summary>Click to view the CIDR blocks that are not supported.</summary>
   * 
   * - 100.64.0.0 to 100.127.255.255
   * - 127.0.0.0 to 127.255.255.255
   * - 169.254.0.0 to 169.254.255.255
   * - 224.0.0.0 to 239.255.255.255
   * - 255.0.0.0 to 255.255.255.255
   * 
   * </details>
   * 
   * <details>
   * <summary>Click to view the recommended client CIDR blocks for each number of SSL connections.</summary>
   * 
   * - If the number of SSL connections is 5, we recommend that the subnet mask of the client CIDR block be 27 bits or less. Example: 10.0.0.0/27 or 10.0.0.0/26.
   * - If the number of SSL connections is 10, we recommend that the subnet mask of the client CIDR block be 26 bits or less. Example: 10.0.0.0/26 or 10.0.0.0/25.
   * - If the number of SSL connections is 20, we recommend that the subnet mask of the client CIDR block be 25 bits or less. Example: 10.0.0.0/25 or 10.0.0.0/24.
   * - If the number of SSL connections is 50, we recommend that the subnet mask of the client CIDR block be 24 bits or less. Example: 10.0.0.0/24 or 10.0.0.0/23.
   * - If the number of SSL connections is 100, we recommend that the subnet mask of the client CIDR block be 23 bits or less. Example: 10.0.0.0/23 or 10.0.0.0/22.
   * - If the number of SSL connections is 200, we recommend that the subnet mask of the client CIDR block be 22 bits or less. Example: 10.0.0.0/22 or 10.0.0.0/21.
   * - If the number of SSL connections is 500, we recommend that the subnet mask of the client CIDR block be 21 bits or less. Example: 10.0.0.0/21 or 10.0.0.0/20.
   * - If the number of SSL connections is 1000, we recommend that the subnet mask of the client CIDR block be 20 bits or less. Example: 10.0.0.0/20 or 10.0.0.0/19.
   * 
   * </details>
   * 
   * > - The subnet mask of the client CIDR block must be 16 to 29 bits in length.
   * > - Make sure that the client CIDR block does not overlap with the local CIDR block, the VPC CIDR block, or any routing CIDR block associated with the client terminal.
   * > - When you specify the client CIDR block, we recommend that you use the 10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16 CIDR block and their subnets. If you need to specify a public CIDR block as the client CIDR block, you must configure the public CIDR block in the user CIDR block Settings of the VPC to ensure that the VPC can access the public CIDR block. For more information about user CIDR blocks, see [virtual private cloud (VPC) FAQ](https://help.aliyun.com/document_detail/185311.html).
   * > - After you create an SSL server, the system automatically adds the routing of the client CIDR block to the route table of the VPC-connected instance. Do not manually add the routing of the client CIDR block to the route table of the VPC-connected instance. Otherwise, SSL-VPN connection traffic transmission exceptions may occur.
   * 
   * @example
   * 10.30.30.0/24
   */
  clientIpPool?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, and you must ensure that the value is unique across different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to compress communication. Valid values:
   * 
   * - **true** (default): Compresses communication.
   * 
   * - **false**: Does not compress communication.
   * 
   * @example
   * true
   */
  compress?: boolean;
  /**
   * @remarks
   * The DNS server addresses configured for the client. You can specify at most two addresses, separated by commas (,).
   * 
   * @example
   * 223.5.5.5,114.114.114.114
   */
  dnsServers?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: Prechecks the request without modifying the SSL server configurations. The system checks whether required parameters are specified, the request format, and service limits. If the request fails the precheck, the corresponding error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): Sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable two-factor authentication. If you enable two-factor authentication, you must also configure **IDaaSInstanceId**, **IDaaSRegionId**, and **IDaaSApplicationId**. Valid values:
   * 
   * - **true**: Enables two-factor authentication.
   * 
   * - **false**: Disables two-factor authentication.
   * 
   * > - If you use two-factor authentication for the first time, complete the [authorization](https://ram.console.aliyun.com/role/authorization?request=%7B%22Services%22%3A%5B%7B%22Service%22%3A%22VPN%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunVpnAccessingIdaasRole%22%2C%22TemplateId%22%3A%22IdaasRole%22%7D%5D%7D%5D%2C%22ReturnUrl%22%3A%22https%3A%2F%2Fvpc.console.aliyun.com%2Fsslvpn%2Fcn-shanghai%2Fvpn-servers%22%7D) before you create the SSL server.
   * > - When you create an SSL server in the UAE (Dubai) region, we recommend that you bind an IDaaS EIAM 2.0 instance in the Singapore region to reduce cross-region latency.
   * > - IDaaS EIAM 1.0 instances are no longer available for purchase. If you have an IDaaS EIAM 1.0 instance in your Alibaba Cloud account, you can still bind the IDaaS EIAM 1.0 instance after you enable two-factor authentication. If you do not have an IDaaS EIAM 1.0 instance in your Alibaba Cloud account, you can only bind an IDaaS EIAM 2.0 instance after you enable two-factor authentication.
   * 
   * @example
   * false
   */
  enableMultiFactorAuth?: boolean;
  /**
   * @remarks
   * The ID of the IDaaS application.
   * 
   * - If you bind an IDaaS EIAM 2.0 instance, you must enter the ID of the IDaaS application.
   * - If you bind an IDaaS EIAM 1.0 instance, you do not need to enter the ID of the IDaaS application.
   * 
   * @example
   * app_my6g4qmvnwxzj2f****
   */
  IDaaSApplicationId?: string;
  /**
   * @remarks
   * The instance ID of the IDaaS EIAM.
   * 
   * @example
   * idaas-cn-hangzhou-****
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
   * The local CIDR block is the CIDR block that the client wants to access through the SSL-VPN connection.
   * 
   * The local CIDR block can be the CIDR block of a VPC, a vSwitch, an IDC connected to the VPC through an Express Connect circuit, or a cloud service such as Object Storage Service (OSS).
   * 
   * The subnet mask of the local CIDR block must be 8 to 32 bits in length. The following CIDR blocks cannot be specified as the local CIDR block:
   * 
   * - 127.0.0.0 to 127.255.255.255
   * - 169.254.0.0 to 169.254.255.255
   * - 224.0.0.0 to 239.255.255.255
   * - 255.0.0.0 to 255.255.255.255
   * 
   * @example
   * 10.20.20.0/24
   */
  localSubnet?: string;
  /**
   * @remarks
   * The name of the SSL server.  
   * 
   * The name must be 1 to 100 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The port used by the SSL server. Valid values: **1** to **65535**. Default value: **1194**.
   * 
   * The following ports are not supported: **22**, **2222**, **22222**, **9000**, **9001**, **9002**, **7505**, **80**, **443**, **53**, **68**, **123**, **4510**, **4560**, **500**, and **4500**.
   * 
   * @example
   * 1194
   */
  port?: number;
  /**
   * @remarks
   * The protocol used by the SSL server. Valid values:
   * 
   * - **TCP** (default): TCP
   * 
   * - **UDP**: UDP
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
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The instance ID of the SSL server.
   * 
   * This parameter is required.
   * 
   * @example
   * vss-bp18q7hzj6largv4v****
   */
  sslVpnServerId?: string;
  static names(): { [key: string]: string } {
    return {
      cipher: 'Cipher',
      clientIpPool: 'ClientIpPool',
      clientToken: 'ClientToken',
      compress: 'Compress',
      dnsServers: 'DnsServers',
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
      sslVpnServerId: 'SslVpnServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipher: 'string',
      clientIpPool: 'string',
      clientToken: 'string',
      compress: 'boolean',
      dnsServers: 'string',
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
      sslVpnServerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

