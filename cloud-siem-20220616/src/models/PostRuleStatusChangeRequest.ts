// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PostRuleStatusChangeRequest extends $dara.Model {
  /**
   * @remarks
   * A JSON array of rule IDs.
   * 
   * @example
   * [123,345]
   */
  ids?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - true: enabled
   * 
   * - false: disabled
   * 
   * @example
   * true
   */
  inUse?: boolean;
  /**
   * @remarks
   * The region where the Data Management center of threat analysis is located. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can specify this parameter to switch to the perspective of the member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view.
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * 
   * - 1: the view of all accounts that belong to the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * - predefine: predefined rule
   * 
   * - customize: custom rule
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

