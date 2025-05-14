// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDynamicImageJobResponseBodyDynamicImageJobOutputOssFile extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket.
   * 
   * @example
   * sample-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS location.
   * 
   * @example
   * oss-cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * The OSS object.
   * 
   * @example
   * path/to/object
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

