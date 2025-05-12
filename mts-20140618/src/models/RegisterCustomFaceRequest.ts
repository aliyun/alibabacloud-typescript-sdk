// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterCustomFaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the figure library in which you want to register a custom face. The ID is used to uniquely identify a figure library. You can specify the ID of a custom figure library. Make sure that the ID is unique and keep the ID for future API operation calls. If you set this parameter to the ID of a system figure library, the custom face is registered in the system figure library. The ID can be up to 120 characters in length and is not case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * CategoryId001-****
   */
  categoryId?: string;
  /**
   * @remarks
   * The URL of the facial image that you want to register for the specified figure. The image must contain only one face.
   * 
   * This parameter is required.
   * 
   * @example
   * http://example-****.jpeg
   */
  imageUrl?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the figure for which you want to register a custom face. The ID is used to uniquely identify a figure. You can specify a figure ID. Make sure that the ID is unique and keep the ID for future API operation calls. The ID can be up to 120 characters in length and is not case-sensitive. The value returned is of the String type.
   * 
   * This parameter is required.
   * 
   * @example
   * PersonId001-****
   */
  personId?: string;
  personName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      imageUrl: 'ImageUrl',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      personId: 'PersonId',
      personName: 'PersonName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      imageUrl: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      personId: 'string',
      personName: 'string',
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

