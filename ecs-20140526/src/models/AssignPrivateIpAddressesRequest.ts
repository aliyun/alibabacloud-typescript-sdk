// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignPrivateIpAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The IPv4 prefixes to be allocated to the Elastic Network Interface (ENI). Valid values of N: 1 to 10.
   * > If you need to configure IPv4 prefix settings for the Elastic Network Interface (ENI), you must specify the settings for either Ipv4Prefix.N or Ipv4PrefixCount, but you cannot specify both parameters.
   */
  ipv4Prefix?: string[];
  /**
   * @remarks
   * The number of randomly generated IPv4 prefixes to be allocated to the Elastic Network Interface (ENI). Valid values: 1 to 10.
   * > If you need to configure IPv4 prefix settings for the Elastic Network Interface (ENI), you must specify the settings for either Ipv4Prefix.N or Ipv4PrefixCount, but you cannot specify both parameters.
   * 
   * @example
   * 1
   */
  ipv4PrefixCount?: number;
  /**
   * @remarks
   * The ID of the Elastic Network Interface (ENI).
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
   * The secondary private IP addresses (private IP addresses or private IPs) to be allocated from the available IP addresses of the vSwitch to which the Elastic Network Interface (ENI) belongs. Valid values of N:
   * 
   * - If the Elastic Network Interface (ENI) is in the `Available` state: 1 to 32.
   * - If the Elastic Network Interface (ENI) is in the `InUse` state: The value is limited by the instance type. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * 
   * When you allocate secondary private IP addresses (private IP addresses or private IPs), you cannot specify both `PrivateIpAddress.N` and `SecondaryPrivateIpAddressCount`.
   * 
   * @example
   * ["``10.1.**.**``"]
   */
  privateIpAddress?: string[];
  /**
   * @remarks
   * The region ID of the Elastic Network Interface (ENI). You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * The number of private IP addresses to be automatically assigned from the available IP addresses of the vSwitch.
   * 
   * When you assign secondary private IP addresses, you cannot specify both `PrivateIpAddress.N` and `SecondaryPrivateIpAddressCount`.
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

