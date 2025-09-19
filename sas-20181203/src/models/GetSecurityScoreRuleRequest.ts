// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityScoreRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The old or new version of the security score rule. If you set this parameter to **home_security_score**, the new version of the security score rule is returned. Otherwise, the old version of the security score rule is returned by default.
   * 
   * @example
   * home_security_score
   */
  calType?: string;
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
  static names(): { [key: string]: string } {
    return {
      calType: 'CalType',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calType: 'string',
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

