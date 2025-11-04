// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecognitionLibRequest extends $dara.Model {
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
   * The description of the recognition library. Max length: 128 bytes.
   */
  libDescription?: string;
  /**
   * @remarks
   * The name of the recognition library. Max length: 64 bytes.
   * 
   * This parameter is required.
   */
  libName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      libDescription: 'LibDescription',
      libName: 'LibName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      libDescription: 'string',
      libName: 'string',
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

