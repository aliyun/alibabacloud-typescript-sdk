// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP that you want to disassociate.
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
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to disassociate the EIP from a NAT gateway if a DNAT or SNAT entry is added to the NAT gateway. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The ID of the instance from which you want to disassociate the EIP.
   * 
   * @example
   * i-hp3akk9irtd69jad****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of instance from which you want to disassociate the EIP. Valid values:
   * 
   * *   **EcsInstance** (default): an Elastic Compute Service (ECS) instance in a virtual private cloud (VPC)
   * *   **SlbInstance**: a Server Load Balancer (SLB) instance in a VPC
   * *   **NetworkInterface**: a secondary elastic network interface (ENI) in a VPC
   * *   **Nat**: a NAT gateway
   * *   **HaVip**: a high-availability virtual IP address (HAVIP)
   * 
   * @example
   * EcsInstance
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The private IP address of the ECS instance or the secondary ENI from which you want to disassociate the EIP.
   * 
   * @example
   * 192.XX.XX.2
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The ID of the region to which the EIP belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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

