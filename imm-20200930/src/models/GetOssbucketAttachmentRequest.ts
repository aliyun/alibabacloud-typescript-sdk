// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOSSBucketAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * examplebucket
   */
  OSSBucket?: string;
  static names(): { [key: string]: string } {
    return {
      OSSBucket: 'OSSBucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OSSBucket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

