// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignPrivateIpAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The **token** can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The IPv4 prefixes to assign to the ENI. Valid values of N: 1 to 10.
   * 
   * >  To assign IPv4 prefixes to the ENI, you must specify the Ipv4Prefix.N or Ipv4PrefixCount parameter, but not both.
   */
  ipv4Prefix?: string[];
  /**
   * @remarks
   * The number of IPv4 prefixes to be randomly generated for the ENI. Valid values: 1 to 10.
   * 
   * >  To assign IPv4 prefixes to the ENI, you must specify the Ipv4Prefix.N or Ipv4PrefixCount parameter, but not both.
   * 
   * @example
   * hide
   */
  ipv4PrefixCount?: number;
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * This parameter is required.
   * 
   * @example
   * eni-bp67acfmxazb4p****
   */
  networkInterfaceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Secondary private IP address N to be automatically assigned from the CIDR block of the vSwitch that is connected to the ENI. Valid values of N:
   * 
   * *   When the ENI is in the Available (`Available`) state, the valid values of N are 1 to 50.
   * *   When the ENI is in the InUse (`InUse`) state, the valid values of N are subject to the instance type. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * To assign secondary private IP addresses to the ENI, you must specify `PrivateIpAddress.N` or `SecondaryPrivateIpAddressCount` but not both.
   * 
   * @example
   * ``10.1.**.**``
   */
  privateIpAddress?: string[];
  /**
   * @remarks
   * The region ID of the ENI. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The number of private IP addresses to be automatically assigned from the CIDR block of the vSwitch that is connected to the ENI.
   * 
   * To assign secondary private IP addresses to the ENI, you must specify `PrivateIpAddress.N` or `SecondaryPrivateIpAddressCount` but not both.
   * 
   * @example
   * 1
   */
  secondaryPrivateIpAddressCount?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ipv4Prefix: 'Ipv4Prefix',
      ipv4PrefixCount: 'Ipv4PrefixCount',
      networkInterfaceId: 'NetworkInterfaceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secondaryPrivateIpAddressCount: 'SecondaryPrivateIpAddressCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ipv4Prefix: { 'type': 'array', 'itemType': 'string' },
      ipv4PrefixCount: 'number',
      networkInterfaceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secondaryPrivateIpAddressCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipv4Prefix)) {
      $dara.Model.validateArray(this.ipv4Prefix);
    }
    if(Array.isArray(this.privateIpAddress)) {
      $dara.Model.validateArray(this.privateIpAddress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

