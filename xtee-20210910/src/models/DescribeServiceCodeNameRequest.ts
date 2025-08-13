// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceCodeNameRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values: 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Scenario.
   * 
   * @example
   * FNAENIC
   */
  tab?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      tab: 'Tab',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      tab: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

