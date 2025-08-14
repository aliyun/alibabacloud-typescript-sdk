// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveCostCenterShareRuleShrinkRequest extends $dara.Model {
  createShareRuleListShrink?: string;
  modifyShareRuleListShrink?: string;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @example
   * 1977800748053695
   */
  ownerAccountId?: number;
  removeShareRuleListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      createShareRuleListShrink: 'CreateShareRuleList',
      modifyShareRuleListShrink: 'ModifyShareRuleList',
      nbid: 'Nbid',
      ownerAccountId: 'OwnerAccountId',
      removeShareRuleListShrink: 'RemoveShareRuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createShareRuleListShrink: 'string',
      modifyShareRuleListShrink: 'string',
      nbid: 'string',
      ownerAccountId: 'number',
      removeShareRuleListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

