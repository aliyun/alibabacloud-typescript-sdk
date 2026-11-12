// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomizeRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The region where the product is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member whose view the administrator switches to. This parameter allows the administrator to switch to the view of a specified member, bypassing the order validity check but still requiring permission verification. The target account must have activated Cloud SIEM, and the caller must have the required RAM permissions.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * - 0: the view of the current Alibaba Cloud account
   * - 1: the view of all accounts in the enterprise
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The ID of the custom rule.
   * 
   * @example
   * 123456789
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

