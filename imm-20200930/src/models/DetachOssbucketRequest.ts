// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachOSSBucketRequest extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket that you want to unbind.
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

