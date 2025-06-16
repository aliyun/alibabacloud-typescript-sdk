// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AllocateIpv6AddressRequestTag } from "./AllocateIpv6addressRequestTag";


export class AllocateIpv6AddressRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the IPv6 address. Valid values:
   * 
   * *   IPv6Address (default): an IPv6 address.
   * *   IPv6Prefix: an IPv6 CIDR block.
   * 
   * @example
   * IPv6Address
   */
  addressType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * *   false (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The IPv6 address. The IPv6 address must be an idle one that falls within the vSwitch CIDR block.
   * 
   * @example
   * 2408:XXXX:153:3921:851c:c435:7b12:1c5f
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The description of the IPv6 address.
   * 
   * @example
   * ipv6-description
   */
  ipv6AddressDescription?: string;
  /**
   * @remarks
   * The name of the IPv6 address.
   * 
   * @example
   * ipv6-name
   */
  ipv6AddressName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. For more information about resource groups, see related documentation.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag list.
   */
  tag?: AllocateIpv6AddressRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch to which the IPv6 address belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-asdfjlnaue4g****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ipv6Address: 'Ipv6Address',
      ipv6AddressDescription: 'Ipv6AddressDescription',
      ipv6AddressName: 'Ipv6AddressName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ipv6Address: 'string',
      ipv6AddressDescription: 'string',
      ipv6AddressName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': AllocateIpv6AddressRequestTag },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

