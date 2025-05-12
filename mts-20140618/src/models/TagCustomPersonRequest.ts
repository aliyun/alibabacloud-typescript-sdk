// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagCustomPersonRequest extends $dara.Model {
  /**
   * @example
   * CategoryDescription001-****
   */
  categoryDescription?: string;
  /**
   * @example
   * CategoryId001-****
   */
  categoryId?: string;
  /**
   * @example
   * CategoryNametest-****
   */
  categoryName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * PersonDescriptiontest-****
   */
  personDescription?: string;
  /**
   * @example
   * PersonId001-****
   */
  personId?: string;
  /**
   * @example
   * PersonNametest-****
   */
  personName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryDescription: 'CategoryDescription',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      personDescription: 'PersonDescription',
      personId: 'PersonId',
      personName: 'PersonName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryDescription: 'string',
      categoryId: 'string',
      categoryName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      personDescription: 'string',
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

