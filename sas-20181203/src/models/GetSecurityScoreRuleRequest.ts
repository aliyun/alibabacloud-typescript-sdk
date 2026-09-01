// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityScoreRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the new or legacy security score rules. If the value is **home_security_score**, the new security score rules are queried. Otherwise, the legacy security score rules are queried by default.
   * 
   * @example
   * home_security_score
   */
  calType?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      calType: 'CalType',
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calType: 'string',
      lang: 'string',
      resourceDirectoryAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

