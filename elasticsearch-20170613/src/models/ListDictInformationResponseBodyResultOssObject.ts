// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDictInformationResponseBodyResultOssObject extends $dara.Model {
  /**
   * @example
   * es-osstest*
   */
  bucketName?: string;
  /**
   * @example
   * 2ABAB5E70BBF631145647F6BE533****
   */
  etag?: string;
  /**
   * @example
   * oss/dict_0*.dic
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      etag: 'etag',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      etag: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

