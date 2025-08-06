// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceRegistrationRequest extends $dara.Model {
  category?: string;
  imageIds?: string;
  ownerAccount?: string;
  ownerId?: string;
  personId?: string;
  personLibrary?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  personName?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      imageIds: 'ImageIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      personId: 'PersonId',
      personLibrary: 'PersonLibrary',
      personName: 'PersonName',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      imageIds: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      personId: 'string',
      personLibrary: 'string',
      personName: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

