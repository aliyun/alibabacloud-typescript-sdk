// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigWebCCRuleV2Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  expires?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleList?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      expires: 'Expires',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      expires: 'number',
      ruleList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

