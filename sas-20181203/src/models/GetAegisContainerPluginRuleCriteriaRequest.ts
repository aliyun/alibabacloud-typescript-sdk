// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAegisContainerPluginRuleCriteriaRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for requesting and receiving messages. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The matching condition value of the plugin.
   * 
   * @example
   * ss
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

