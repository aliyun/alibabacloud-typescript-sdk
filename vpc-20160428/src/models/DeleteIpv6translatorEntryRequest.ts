// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIPv6TranslatorEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the IPv6 mapping entry to be deleted.
   * 
   * @example
   * ipv6transentry-bp1g8bhrde****
   */
  ipv6TranslatorEntryId?: string;
  /**
   * @remarks
   * The ID of the IPv6 Translation Service instance.
   * 
   * > If you do not specify **Ipv6TranslatorEntryId**, all mapping entries in the specified instance are deleted.
   * 
   * @example
   * ipv6trans-bp1858ys****
   */
  ipv6TranslatorId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region of the IPv6 Translation Service instance. You can call the **DescribeRegions** operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ipv6TranslatorEntryId: 'Ipv6TranslatorEntryId',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ipv6TranslatorEntryId: 'string',
      ipv6TranslatorId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

