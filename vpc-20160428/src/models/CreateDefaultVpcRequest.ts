// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefaultVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable the IPv6 CIDR block. Valid values:
   * 
   * - **false** (default): does not enable the IPv6 CIDR block.
   * - **true**: enables the IPv6 CIDR block.
   * 
   * @example
   * false
   */
  enableIpv6?: boolean;
  /**
   * @remarks
   * The IPv6 CIDR block of the default VPC.
   * 
   * > This parameter is required when **EnableIpv6** is set to **true**.
   * 
   * @example
   * 2408:XXXX:346:b600::/56
   */
  ipv6CidrBlock?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the default VPC.
   * 
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmystnjq4****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      enableIpv6: 'EnableIpv6',
      ipv6CidrBlock: 'Ipv6CidrBlock',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      enableIpv6: 'boolean',
      ipv6CidrBlock: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
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

