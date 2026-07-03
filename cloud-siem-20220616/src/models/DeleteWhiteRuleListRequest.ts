// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWhiteRuleListRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the whitelist rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  id?: number;
  /**
   * @remarks
   * The region of the data management center for threat analysis. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: The assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: The assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can switch to the perspective of the member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - 0: The view for the current Alibaba Cloud account.
   * 
   * - 1: The view for all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

