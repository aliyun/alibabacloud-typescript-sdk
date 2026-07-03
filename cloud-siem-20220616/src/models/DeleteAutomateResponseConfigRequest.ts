// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAutomateResponseConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the automated response rule.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The region where the Data Management hub for threat analysis is located. Select the region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: your assets are in the Chinese mainland or Hong Kong (China).
   * 
   * - ap-southeast-1: your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. An administrator can use this ID to switch to the perspective of the member.
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
   * 
   * - 1: the view of all accounts in the enterprise.
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

