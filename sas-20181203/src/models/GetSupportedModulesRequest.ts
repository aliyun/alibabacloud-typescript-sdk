// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupportedModulesRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
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

