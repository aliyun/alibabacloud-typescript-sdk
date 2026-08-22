// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The region of the data management center for threat analysis. Specify the management center region based on the region where your assets reside. Valid values:
   * - cn-hangzhou: assets in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: assets outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that the administrator switches to for viewing as another member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * - 1: the view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The rule type. Valid values:
   * - predefine: predefined.
   * - customize: custom.
   * 
   * @example
   * customize
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

