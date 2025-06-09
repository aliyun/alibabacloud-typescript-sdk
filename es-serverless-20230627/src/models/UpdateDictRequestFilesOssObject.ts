// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDictRequestFilesOssObject extends $dara.Model {
  /**
   * @example
   * bucket1
   */
  bucketName?: string;
  /**
   * @example
   * oss/dic_0.dic
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
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

