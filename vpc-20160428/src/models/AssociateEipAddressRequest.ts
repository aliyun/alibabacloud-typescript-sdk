// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP that you want to associate with the cloud service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-2zeerraiwb7ujsxdc****
   */
  allocationId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance to which you want to attach the EIP.
   * 
   * You can enter the instance ID of a NAT gateway, a Classic Load Balancing (CLB) instance, an ECS server instance, a secondary elastic network interface controller (NIC), a high-availability (active) virtual IP address, or an IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * i-2zebb08phyczzawe****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the instance to which you want to attach the EIP.
   * 
   * > This parameter is required only when the EIP is added to an Alibaba Cloud Global Accelerator (GA) instance with shared bandwidth.
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegionId?: string;
  /**
   * @remarks
   * The type of the instance to which you want to attach the EIP. Valid values:
   * 
   * - **Nat**: NAT gateway.
   * 
   * - **SlbInstance**: Classic Load Balancing (CLB).
   * 
   * - **EcsInstance** (default): Elastic Compute Service server.
   * 
   * - **NetworkInterface**: secondary elastic network interface controller (NIC).
   * 
   * - **HaVip**: high-availability (active) virtual IP address. 
   * 
   * - **IpAddress**: IP address.
   * 
   * > By default, the instance type is **EcsInstance**. If you want to attach the EIP to an instance of a different type, this parameter is required.
   * 
   * @example
   * EcsInstance
   */
  instanceType?: string;
  /**
   * @remarks
   * The association mode. Valid values:
   * 
   * - **NAT** (default): NAT mode.
   * 
   * - **MULTI_BINDED**: multi-EIP passthrough mode.
   * 
   * - **BINDED**: EIP passthrough mode.
   * 
   * 
   * > This parameter is required only when **InstanceType** is set to **NetworkInterface**.
   * 
   * @example
   * NAT
   */
  mode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * An IP address within the vSwitch CIDR block.
   * 
   * If you do not specify this parameter, the system automatically allocates a private IP address based on the VPC ID and vSwitch ID.
   * > This parameter is required when **InstanceType** is set to **NetworkInterface**. You must specify the private IP address to be attached.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID of the EIP that you want to associate with the cloud service instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VPC that has the IPv4 gateway feature enabled and is in the same region as the EIP.
   * 
   * When you attach the EIP to an IP address, the system can enable public network access for the attached IP address based on the routing configurations of the VPC.
   * 
   * > This parameter is required when **InstanceType** is set to **IpAddress**, which means you want to attach the EIP to an IP address.
   * 
   * @example
   * vpc-257gqcdfvx6n****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      instanceRegionId: 'InstanceRegionId',
      instanceType: 'InstanceType',
      mode: 'Mode',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      clientToken: 'string',
      instanceId: 'string',
      instanceRegionId: 'string',
      instanceType: 'string',
      mode: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privateIpAddress: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

