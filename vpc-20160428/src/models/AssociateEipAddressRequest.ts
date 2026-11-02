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
   * You can use the client to generate the value, but you must make sure that the value is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance with which you want to associate the EIP.
   * 
   * You can enter the ID of a NAT gateway, a Classic Load Balancer (CLB) instance, an ECS instance (cloud server), a secondary elastic network interface controller (NIC), a high-availability virtual IP address, or an IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * i-2zebb08phyczzawe****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the instance with which you want to associate the EIP.
   * 
   * > This parameter is required only after the EIP is added to a Global Accelerator (GA) instance that uses shared bandwidth.
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegionId?: string;
  /**
   * @remarks
   * The type of the instance with which you want to associate the EIP. Valid values:
   * 
   * - **Nat**: NAT gateway.
   * 
   * - **SlbInstance**: Classic Load Balancer (CLB).
   * 
   * - **EcsInstance** (default): ECS instance (cloud server).
   * 
   * - **NetworkInterface**: secondary elastic network interface controller (NIC).
   * 
   * - **HaVip**: high-availability virtual IP address. 
   * 
   * - **IpAddress**: IP address.
   * 
   * > By default, the instance type is **EcsInstance**. If the instance type with which you want to associate the EIP is not **EcsInstance**, this parameter is required.
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
   * - **MULTI_BINDED**: multi-EIP to ENI mode.
   * 
   * - **BINDED**: EIP to ENI mode.
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
   * If you do not specify this parameter, the system automatically allocates a private IP based on the VPC ID and vSwitch ID.
   * > This parameter is required when **InstanceType** is set to **NetworkInterface**. You must enter the private IP that you want to associate.
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
   * When you associate the EIP with an IP address, the system can enable Internet access for the associated IP address based on the routing configurations of the VPC.
   * 
   * > This parameter is required when **InstanceType** is set to **IpAddress**, which means the instance type with which you want to associate the EIP is an IP address.
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

