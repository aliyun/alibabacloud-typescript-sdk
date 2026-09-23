// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveCostCenterShareRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of allocation rules to create.
   */
  createShareRuleListShrink?: string;
  /**
   * @remarks
   * The list of allocation rules to update.
   */
  modifyShareRuleListShrink?: string;
  /**
   * @remarks
   * The ID of the level-1 sales channel. If this parameter is left empty, the ID of the sales channel to which the current user belongs is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The ID of the user who owns the financial unit.
   * 
   * @example
   * 1977800748053695
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * The list of allocation rules to delete.
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

