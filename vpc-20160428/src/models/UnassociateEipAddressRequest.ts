// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP to disassociate.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-2zeerraiwb7uj6i0d****
   */
  allocationId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to forcefully disassociate the EIP when the EIP is associated with a NAT gateway that has DNAT or SNAT entries configured. Valid values:
   * 
   * - **false** (default): does not forcefully disassociate the EIP.
   * 
   * - **true**: forcefully disassociates the EIP.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The instance ID of the cloud resource from which to disassociate the EIP.
   * You can enter the instance ID of a NAT gateway, Classic Load Balancer (CLB) instance, ECS instance, secondary elastic network interface controller (NIC), high availability virtual IP address instance, or an IP address.
   * 
   * @example
   * i-hp3akk9irtd69jad****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the cloud resource from which to disassociate the EIP. Valid values: 
   * 
   * - **EcsInstance** (default): an ECS instance in a virtual private cloud (VPC).   
   * 
   * - **SlbInstance**: a load balancing instance in a virtual private cloud (VPC).   
   * 
   * - **NetworkInterface**: a secondary elastic network interface controller (NIC) in a virtual private cloud (VPC).
   * 
   * - **Nat**: a NAT gateway.  
   * 
   * - **HaVip**: a high availability virtual IP address.
   * - **IpAddress**: an IP address.
   * 
   * @example
   * EcsInstance
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The private IP address of the ECS instance or secondary elastic network interface controller (NIC) instance from which to disassociate the EIP.
   * 
   * @example
   * 192.XX.XX.2
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The region ID of the EIP to disassociate.
   *  You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      clientToken: 'ClientToken',
      force: 'Force',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      clientToken: 'string',
      force: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privateIpAddress: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

