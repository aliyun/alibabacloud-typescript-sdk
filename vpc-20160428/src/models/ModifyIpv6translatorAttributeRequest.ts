// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIPv6TranslatorAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * sha1111
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of IPv6 Translation Service. This parameter is empty by default. It must be 2 to 100 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It cannot start with http:// or [https://](https://。).
   * 
   * @example
   * instancedescription
   */
  description?: string;
  /**
   * @remarks
   * The ID of the IPv6 Translation Service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ipv6trans-bp1858ys****
   */
  ipv6TranslatorId?: string;
  /**
   * @remarks
   * The name of the IPv6 Translation Service instance. The default name is the instance ID. It must be 2 to 100 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It cannot start with http:// or [https://](https://。).
   * 
   * @example
   * instancename
   */
  name?: string;
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
      description: 'Description',
      ipv6TranslatorId: 'Ipv6TranslatorId',
      name: 'Name',
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
      description: 'string',
      ipv6TranslatorId: 'string',
      name: 'string',
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

