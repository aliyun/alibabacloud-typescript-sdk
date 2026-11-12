// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostRuleStatusChangeRequest extends $dara.Model {
  /**
   * @remarks
   * The list of rule IDs in JSON array format.
   * 
   * @example
   * [123,345]
   */
  ids?: string;
  /**
   * @remarks
   * The enabling status of the rule. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  inUse?: boolean;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. Select the region based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Assets are located outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * - 0: The view of the current Alibaba Cloud account.
   * - 1: The view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The rule type. Valid values:
   * - predefine: Predefined.
   * - customize: Custom.
   * 
   * @example
   * customize
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      inUse: 'InUse',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      inUse: 'boolean',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

