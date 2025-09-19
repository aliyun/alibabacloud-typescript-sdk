// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAegisContainerPluginRuleCriteriaRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The value of the search condition.
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

