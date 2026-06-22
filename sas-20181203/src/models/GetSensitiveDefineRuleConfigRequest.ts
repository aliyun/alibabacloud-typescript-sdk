// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSensitiveDefineRuleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * 
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source of the sensitive file check item. Valid values:
   * - **image**: image
   * - **agentless**: agentless.
   * 
   * @example
   * image
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

