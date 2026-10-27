// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsoleFuncGrayStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the feature module.
   * 
   * @example
   * vpcConsoleSwitch
   */
  condition?: string;
  /**
   * @remarks
   * Sets the language for requests and responses. Default value: **zh**. Valid values:
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

