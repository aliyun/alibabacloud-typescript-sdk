// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomPersonsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the figure library about which you want to query information. The ID is used to uniquely identify a custom figure library. Make sure that the ID is unique. If you do not specify this parameter, the operation returns all the custom figure libraries. The ID can be up to 120 characters in length and is not case-sensitive.
   * 
   * > You cannot specify the ID of the system figure library for this parameter.
   * 
   * @example
   * CategoryId-****
   */
  categoryId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the figure about which you want to query information. The ID is used to uniquely identify a figure. Make sure that the ID is unique. If you do not specify this parameter, the operation returns the information about all the figures in the specified figure library.
   * 
   * @example
   * PersonId-****
   */
  personId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      personId: 'PersonId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      personId: 'string',
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

