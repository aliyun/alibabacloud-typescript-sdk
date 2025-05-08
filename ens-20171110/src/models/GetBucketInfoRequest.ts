// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBucketInfoRequest extends $dara.Model {
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
      bucketName: 'BucketName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

