// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindInputBucketRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the input media bucket to be unbound. To obtain the media bucket name, you can log on to the **ApsaraVideo Media Processing (MPS) console** and choose **Workflows** > **Media Buckets** in the left-side navigation pane. Alternatively, you can log on to the **Object Storage Service (OSS) console** and click **Historical Paths**.
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
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the role used for delegated authorization.
   * 
   * @example
   * acs:ram::174809843091****:role/exampleRole
   */
  roleArn?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleArn: 'RoleArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

