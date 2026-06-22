// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOssBucketRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket name.
   * 
   * @example
   * iboxpublic****
   */
  bucketName?: string;
  /**
   * @remarks
   * The language type for requests and responses. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

