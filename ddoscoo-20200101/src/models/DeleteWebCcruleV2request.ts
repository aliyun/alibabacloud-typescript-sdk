// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWebCCRuleV2Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  owner?: string;
  ruleNames?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      owner: 'Owner',
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      owner: 'string',
      ruleNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

