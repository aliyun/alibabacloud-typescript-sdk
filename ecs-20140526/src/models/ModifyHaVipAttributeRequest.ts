// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHaVipAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token used to ensure the idempotence of the request. Make sure that the token is unique across requests. The token can contain only ASCII characters and be no more than 64 characters long.
   */
  clientToken?: string;
  /**
   * @remarks
   * The new description of the HaVip. The description must be 2 to 256 characters long and must not start with `http://` or `https://`.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the HaVip that you want to modify.
   * 
   * This parameter is required.
   */
  haVipId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the HaVip is deployed. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the latest list of regions.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      haVipId: 'HaVipId',
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

