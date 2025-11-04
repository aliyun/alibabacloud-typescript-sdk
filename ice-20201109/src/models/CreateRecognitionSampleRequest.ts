// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecognitionSampleRequest extends $dara.Model {
  /**
   * @remarks
   * The type of recognition this sample is for.
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
   * The ID of the specific entity within the library.
   * 
   * This parameter is required.
   * 
   * @example
   * **************544cb84754************
   */
  entityId?: string;
  /**
   * @remarks
   * The URL of the sample image.
   * 
   * @example
   * https://example.com/sample.png
   */
  imageUrl?: string;
  /**
   * @remarks
   * The custom text label.
   */
  labelPrompt?: string;
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
      entityId: 'EntityId',
      imageUrl: 'ImageUrl',
      labelPrompt: 'LabelPrompt',
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
      entityId: 'string',
      imageUrl: 'string',
      labelPrompt: 'string',
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

