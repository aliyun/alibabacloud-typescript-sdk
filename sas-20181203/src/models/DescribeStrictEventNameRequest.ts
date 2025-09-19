// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStrictEventNameRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default is **zh**. Values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

