// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDNADBRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the media fingerprint library.
   */
  description?: string;
  /**
   * @remarks
   * The model of the media fingerprint library. Valid values:
   * 
   * *   **Video**
   * *   **Audio**
   * *   **Image**
   * *   **Text** (supported only in the China (Shanghai) region)
   * 
   * @example
   * Video
   */
  model?: string;
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
      description: 'Description',
      model: 'Model',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      model: 'string',
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

