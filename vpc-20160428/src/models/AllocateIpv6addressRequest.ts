// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateIpv6AddressRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. Do not pass in an empty string.
   * 
   * A tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. You can pass in an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with aliyun or acs:, or contain http:// or https://.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateIpv6AddressRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the IPv6 address. Valid values:
   * 
   * * IPv6Address (default): The instance is a single IPv6 address.
   * * IPv6Prefix: The instance is an IPv6 prefix CIDR block.
   * 
   * @example
   * IPv6Address
   */
  addressType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - true: performs a dry run. The system checks the required parameters, request syntax, and business restrictions. If the check fails, the corresponding error is returned. If the check succeeds, the error code DryRunOperation is returned.
   * 
   * - false (default): performs a dry run and sends the request. If the check succeeds, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The IPv6 address to allocate. The specified IPv6 address must be an idle address within the CIDR block of the vSwitch.
   * 
   * @example
   * 2408:XXXX:153:3921:851c:c435:7b12:1c5f
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The description of the IPv6 address instance.
   * 
   * The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * ipv6-description
   */
  ipv6AddressDescription?: string;
  /**
   * @remarks
   * The name of the IPv6 address instance.
   * 
   * The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.
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
   * The resource group ID. For more information about resource groups, see [What is a resource group?](https://help.aliyun.com/document_detail/2381067.html).
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags for the resource.
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

