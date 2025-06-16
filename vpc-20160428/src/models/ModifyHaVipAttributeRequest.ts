// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHaVipAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among all requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e0****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the HAVIP.
   * 
   * The description must be 1 to 255 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is my HaVip.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the HAVIP.
   * 
   * This parameter is required.
   * 
   * @example
   * havip-2zeo05qre24nhrqp****
   */
  haVipId?: string;
  /**
   * @remarks
   * The name of the HAVIP.
   * 
   * The name must be 1 to 128 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the HAVIP belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      haVipId: 'HaVipId',
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
      haVipId: 'string',
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

