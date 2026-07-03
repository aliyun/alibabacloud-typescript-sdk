// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageRequest extends $dara.Model {
  /**
   * @remarks
   * The region where the Data Management hub for threat analysis is located. Select a region for the management hub based on the region of your assets. Valid values:
   * 
   * - cn-hangzhou: Select this value if your assets are in the Chinese mainland or the China (Hong Kong) region.
   * 
   * - ap-southeast-1: Select this value if your assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. This parameter is used by an administrator to switch to the perspective of a member.
   * 
   * @example
   * 127XXXX
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * 
   * - 1: The view of all accounts that belong to the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
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

