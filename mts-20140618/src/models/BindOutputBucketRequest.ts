// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindOutputBucketRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket that you want to bind. The name can be up to 64 bytes in size and can contain letters, digits, and hyphens (-). The name cannot start with a special character.
   * 
   * This parameter is required.
   * 
   * @example
   * example-bucket-****
   */
  bucket?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
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

