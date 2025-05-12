// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllMediaBucketResponseBodyMediaBucketListMediaBucket extends $dara.Model {
  /**
   * @remarks
   * The name of the media bucket.
   * 
   * @example
   * example-bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The settings of Object Storage Service (OSS) hotlink protection. For more information, see [Hotlink protection](https://help.aliyun.com/document_detail/31869.html).
   * 
   * @example
   * http://www.example.com
   */
  referer?: string;
  /**
   * @remarks
   * The type of the media bucket. Valid values:
   * 
   * *   Input: input media bucket
   * *   Output: output media bucket
   * 
   * @example
   * Input
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      referer: 'Referer',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      referer: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

