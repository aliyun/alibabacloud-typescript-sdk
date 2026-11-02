// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecognitionLibRequest extends $dara.Model {
  /**
   * @remarks
   * The recognition type. Valid values:
   * 
   * - landmark: custom landmark
   * 
   * - object: custom object
   * 
   * - logo: custom logo
   * 
   * - face: custom face
   * 
   * - label: custom label
   * 
   * This parameter is required.
   * 
   * @example
   * landmark
   */
  algorithm?: string;
  /**
   * @remarks
   * The description of the recognition library. The description can be up to 128 bytes in length.
   * 
   * @example
   * Used to store commodity identification samples
   */
  libDescription?: string;
  /**
   * @remarks
   * The name of the recognition library. The name can be up to 64 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * landmark test suite
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

