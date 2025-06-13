// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBucketsListResponseBodyData extends $dara.Model {
  /**
   * @example
   * bucket_test
   */
  bucket?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

