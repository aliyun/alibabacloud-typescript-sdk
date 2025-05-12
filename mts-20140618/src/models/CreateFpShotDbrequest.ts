// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFpShotDBRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the media fingerprint library. By default, this parameter is left empty. You can customize the configurations based on your business requirements. The value must be a string in the JSON format.
   * 
   * @example
   * null
   */
  config?: string;
  /**
   * @remarks
   * The description of the media fingerprint library.
   * 
   * @example
   * The library is a text fingerprint library.
   */
  description?: string;
  /**
   * @remarks
   * The model ID of the media fingerprint library. To create a text fingerprint library, set the parameter to **11**. To create a video fingerprint library, set the parameter to **12**. To create an audio fingerprint library, set the parameter to **13**. To create an image fingerprint library, set the parameter to **14**.
   * 
   * @example
   * 11
   */
  modelId?: number;
  /**
   * @remarks
   * The name of the media fingerprint library.
   * 
   * This parameter is required.
   * 
   * @example
   * example name
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      description: 'Description',
      modelId: 'ModelId',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      description: 'string',
      modelId: 'number',
      name: 'string',
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

