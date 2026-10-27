// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActiveContactChannelRequest extends $dara.Model {
  /**
   * @example
   * 0b9377d9c56b5c2ea8a41a2b3c4d5e6f
   */
  code?: string;
  /**
   * @example
   * cn_hangzhou
   */
  site?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      site: 'site',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      site: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

