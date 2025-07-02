// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OutputFuncCode extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  checksum?: string;
  /**
   * @example
   * http://func-code.oss-cn-shanghai.aliyuncs.com/1a2b3c4d5e6f
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      checksum: 'checksum',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

