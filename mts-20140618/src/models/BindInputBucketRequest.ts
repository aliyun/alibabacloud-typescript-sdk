// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindInputBucketRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the input media bucket to be bound. The name can be up to 64 bytes in size. To obtain the media bucket name, you can log on to the **ApsaraVideo Media Processing (MPS) console** and choose **Workflows** > **Media Buckets** in the left-side navigation pane.
   * 
   * > The bucket name can contain lowercase letters, digits, and hyphens (-), and cannot start or end with a hyphen (-).
   * 
   * This parameter is required.
   * 
   * @example
   * example-bucket-****
   */
  bucket?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The settings of Object Storage Service (OSS) hotlink protection. For more information, see [Hotlink protection](https://help.aliyun.com/document_detail/31869.html).
   * 
   * @example
   * http://www.example.com
   */
  referer?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      referer: 'Referer',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      referer: 'string',
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

