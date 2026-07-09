// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveCostCenterShareRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of sharing rules to create.
   */
  createShareRuleListShrink?: string;
  /**
   * @remarks
   * The list of sharing rules to modify.
   */
  modifyShareRuleListShrink?: string;
  /**
   * @remarks
   * The primary marketplace ID. If left empty, the marketplace ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * @example
   * 1977800748053695
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * The list of sharing rules to delete.
   */
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

