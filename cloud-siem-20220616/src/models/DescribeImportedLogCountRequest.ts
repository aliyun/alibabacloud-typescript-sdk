// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportedLogCountRequest extends $dara.Model {
  /**
   * @remarks
   * The region where the management hub of Threat Analysis is located. Select the region of the management hub based on the region where your assets are located. Valid values:
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
   * The user ID of the member. An administrator can specify this parameter to switch to the perspective of the member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: string;
  /**
   * @remarks
   * The type of the view.
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * 
   * - 1: The view of all accounts that belong to the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      roleFor: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

