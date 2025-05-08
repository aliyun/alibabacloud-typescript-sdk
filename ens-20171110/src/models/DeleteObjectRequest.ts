// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteObjectRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * tets
   */
  bucketName?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * image5
   */
  objectKey?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      objectKey: 'ObjectKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      objectKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

