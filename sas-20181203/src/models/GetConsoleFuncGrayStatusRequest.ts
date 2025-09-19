// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsoleFuncGrayStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Name of the function module.
   * 
   * @example
   * vpcConsoleSwitch
   */
  condition?: string;
  /**
   * @remarks
   * Set the language type for request and response messages. Default value: **zh**. Values:
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
      condition: 'Condition',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
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

