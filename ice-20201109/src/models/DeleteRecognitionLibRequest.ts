// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRecognitionLibRequest extends $dara.Model {
  /**
   * @remarks
   * The type of recognition algorithm. Valid values:
   * 
   * *   landmark
   * *   object
   * *   logo
   * *   face
   * *   label
   * 
   * This parameter is required.
   * 
   * @example
   * landmark
   */
  algorithm?: string;
  /**
   * @remarks
   * The ID of the recognition library.
   * 
   * This parameter is required.
   * 
   * @example
   * *************24b47865c6**************
   */
  libId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      libId: 'LibId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      libId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

