// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWebCacheCustomRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleNames?: string[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      resourceGroupId: 'ResourceGroupId',
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      resourceGroupId: 'string',
      ruleNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleNames)) {
      $dara.Model.validateArray(this.ruleNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

