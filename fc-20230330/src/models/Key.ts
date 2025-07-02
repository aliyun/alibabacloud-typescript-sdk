// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Key extends $dara.Model {
  /**
   * @example
   * serverless_
   */
  prefix?: string;
  /**
   * @example
   * .zip
   */
  suffix?: string;
  static names(): { [key: string]: string } {
    return {
      prefix: 'prefix',
      suffix: 'suffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefix: 'string',
      suffix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

