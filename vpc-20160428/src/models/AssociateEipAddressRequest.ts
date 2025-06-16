// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP that you want to associate with an instance.
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
   * You can use the client to generate a token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance with which you want to associate the EIP.
   * 
   * You can enter the ID of a NAT gateway, CLB instance, ECS instance, secondary ENI, HAVIP, or IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * i-2zebb08phyczzawe****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance with which you want to associate the EIP resides.
   * 
   * >  This parameter is required only when the EIP is added to a shared Global Accelerator (GA) instance.
   * 
   * @example
   * cn-hangzhou
   */
  instanceRegionId?: string;
  /**
   * @remarks
   * The type of the instance with which you want to associate the EIP. Valid values:
   * 
   * *   **Nat**: NAT gateway
   * *   **SlbInstance**: CLB instance
   * *   **EcsInstance** (default): ECS instance
   * *   **NetworkInterface**: secondary ENI
   * *   **HaVip**: HAVIP
   * *   **IpAddress**: IP address
   * 
   * >  The default value is **EcsInstance**. If the instance with which you want to associate the EIP is not an ECS instance, this parameter is required.
   * 
   * @example
   * EcsInstance
   */
  instanceType?: string;
  /**
   * @remarks
   * The association mode. Valid values:
   * 
   * *   **NAT** (default): NAT mode
   * *   **MULTI_BINDED**: multi-EIP-to-ENI mode
   * *   **BINDED**: cut-network interface controller mode
   * 
   * >  This parameter is required only when **InstanceType** is set to **NetworkInterface**.
   * 
   * @example
   * NAT
   */
  mode?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The IP address in the CIDR block of the vSwitch.
   * 
   * If you leave this parameter empty, the system allocates a private IP address based on the VPC ID and vSwitch ID.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The ID of the region to which the EIP belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VPC in which an IPv4 gateway is created. The VPC and the EIP must be in the same region.
   * 
   * When you associate an EIP with an IP address, the system can enable the IP address to access the Internet based on VPC route configurations.
   * 
   * >  This parameter is required if **InstanceType** is set to **IpAddress**, which indicates that the EIP is to be associated with an IP address.
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

