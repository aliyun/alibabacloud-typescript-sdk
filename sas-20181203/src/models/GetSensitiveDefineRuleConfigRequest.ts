// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSensitiveDefineRuleConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source of the check rules. Valid values:
   * 
   * *   **image**: image.
   * *   **agentless**: agentless detection.
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

