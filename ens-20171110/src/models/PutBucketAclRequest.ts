// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutBucketAclRequest extends $dara.Model {
  /**
   * @remarks
   * The access control list (ACL) of the bucket.
   * 
   * *   **public-read-write**
   * *   **public-read**
   * *   **private** (default)
   * 
   * This parameter is required.
   * 
   * @example
   * private
   */
  bucketAcl?: string;
  /**
   * @remarks
   * The name of the bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  bucketName?: string;
  static names(): { [key: string]: string } {
    return {
      bucketAcl: 'BucketAcl',
      bucketName: 'BucketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketAcl: 'string',
      bucketName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

