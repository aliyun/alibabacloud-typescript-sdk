// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnatEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The `client token` can contain only ASCII characters.
   * 
   * **
   * 
   * **Description** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44****
   */
  clientToken?: string;
  /**
   * @remarks
   * Indicates whether to only precheck this request. Values:
   * - **true**: Sends a precheck request and does not create an SNAT entry. The precheck includes verifying if the AccessKey is valid, checking the RAM user\\"s authorization, and ensuring that all required parameters are filled out. If the precheck fails, the corresponding error is returned. If the precheck passes, the error code `DryRunOperation` is returned.
   * - **false** (default): Sends a normal request. After passing the precheck, it returns a 2xx HTTP status code and creates an SNAT entry.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable EIP affinity. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * **
   * 
   * **Description** After you enable EIP affinity, if multiple EIPs are associated with an SNAT entry, each client uses one EIP to access the Internet. If EIP affinity is disabled, each client uses a random EIP to access the Internet.
   * 
   * @example
   * 1
   */
  eipAffinity?: number;
  /**
   * @remarks
   * Elastic Network Interface ID.  
   * > The IPv4 address set of the elastic network interface will be used as the SNAT address.
   * 
   * @example
   * eni-gw8g131ef2dnbu3k****
   */
  networkInterfaceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * Valid values:
   * 
   * *   ap-northeast-2-pop
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     ap-northeast-2-pop
   * 
   *     <!-- -->
   * 
   *     .
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
   * The name of the SNAT entry.
   * 
   * The name must be 2 to 128 characters in length. It must start with a letter but cannot start with `http://` or `https://`.
   * 
   * @example
   * SnatEntry-1
   */
  snatEntryName?: string;
  /**
   * @remarks
   * *   The EIPs in the SNAT entry when you add an SNAT entry to an Internet NAT gateway. Separate EIPs with commas (,).
   * 
   * >  If you specify multiple EIPs in the SNAT IP address pool, the service connection is allocated to multiple EIPs by using the hashing algorithm. The traffic of each EIP may be different. Therefore, we recommend that you associate the EIPs with an Internet Shared Bandwidth instance to prevent service interruptions caused by bandwidth exhaustion.
   * 
   * *   When you add SNAT entries for a VPC NAT gateway, this parameter specifies the NAT IP addresses in the SNAT entry. Separate multiple NAT IP addresses with commas (,).
   * 
   * @example
   * 47.98.XX.XX
   */
  snatIp?: string;
  /**
   * @remarks
   * The ID of the SNAT table.
   * 
   * This parameter is required.
   * 
   * @example
   * stb-bp190wu8io1vgev****
   */
  snatTableId?: string;
  /**
   * @remarks
   * You can specify the CIDR block of a VPC, a vSwitch, or an ECS instance or enter a custom CIDR block.
   * 
   * You can specify an SNAT entry in the following ways:
   * 
   * *   You can specify the CIDR block of the VPC where the NAT gateway is deployed. Then, all ECS instances in the VPC can access the Internet or external networks by using SNAT.
   * *   You can specify the CIDR block of a vSwitch, for example, 192.168.1.0/24. Then, the ECS instances in the vSwitch can access the Internet or external networks by using SNAT.
   * *   You can specify the IP address of an ECS instance, for example, 192.168.1.1/32. Then, the ECS instance can access the Internet or external networks by using SNAT.
   * *   You can specify a custom CIDR block. Then, all ECS instances within the specified CIDR block can access the Internet or external networks by using SNAT.
   * 
   * When you add an SNAT entry to an Internet NAT gateway, if **SnatIp** is set to an EIP, the ECS instance uses the specified EIP to access the Internet.
   * 
   * If **SnatIp** is set to multiple EIPs, the ECS instance randomly selects an EIP specified in the **SnatIp** parameter to access the Internet.
   * 
   * You cannot specify this parameter and **SourceVSwtichId** at the same time. If **SourceVSwitchId** is specified, you cannot specify **SourceCIDR**. If **SourceCIDR** is specified, you cannot specify **SourceVSwitchId**.
   * 
   * @example
   * 10.1.1.0/24
   */
  sourceCIDR?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * *   When you add an SNAT entry to an Internet NAT gateway, this parameter specifies that ECS instances in the vSwitch can use the SNAT entry to access the Internet. If you select multiple elastic IP addresses (EIPs) to create an SNAT address pool, connections are hashed to these EIPs. Network traffic may not be evenly distributed to the EIPs because the amount of traffic that passes through each connection varies. We recommend that you associate these EIPs with the same EIP bandwidth plan to prevent service interruptions due to the bandwidth limits on individual EIPs.
   * *   When you add an SNAT entry to a VPC NAT gateway, this parameter specifies that ECS instances in the vSwitch can use the SNAT entry to access external networks.
   * 
   * @example
   * vsw-bp1nhx2s9ui5o****
   */
  sourceVSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      eipAffinity: 'EipAffinity',
      networkInterfaceId: 'NetworkInterfaceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snatEntryName: 'SnatEntryName',
      snatIp: 'SnatIp',
      snatTableId: 'SnatTableId',
      sourceCIDR: 'SourceCIDR',
      sourceVSwitchId: 'SourceVSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      eipAffinity: 'number',
      networkInterfaceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snatEntryName: 'string',
      snatIp: 'string',
      snatTableId: 'string',
      sourceCIDR: 'string',
      sourceVSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

