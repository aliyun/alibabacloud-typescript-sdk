// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDNADBRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the DNA database.
   * 
   * @example
   * 这是一个视频DNA库。
   */
  description?: string;
  /**
   * @remarks
   * The DNA database model. Valid values:
   * 
   * - **Video**: For video content.
   * 
   * - **Audio**: For audio content.
   * 
   * - **Image**: For image content. (Deprecated)
   * 
   * - **Text**: For text content. Supported only in the China (Shanghai) region. (Deprecated)
   * 
   * @example
   * Video
   */
  model?: string;
  /**
   * @remarks
   * The name of the DNA database.
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

