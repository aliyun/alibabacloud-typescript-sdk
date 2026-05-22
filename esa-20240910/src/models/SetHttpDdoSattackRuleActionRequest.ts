// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetHttpDDoSAttackRuleActionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ruleAction?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      ruleAction: 'RuleAction',
      ruleIds: 'RuleIds',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleAction: 'string',
      ruleIds: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

