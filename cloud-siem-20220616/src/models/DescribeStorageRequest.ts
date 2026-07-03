// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStorageRequest extends $dara.Model {
  /**
   * @remarks
   * The region of the Data Management center for threat analysis. Select a region for the center based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Select this value if your assets are in the Chinese mainland or the China (Hong Kong) region.
   * 
   * - ap-southeast-1: Select this value if your assets are in regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member whose view you want to use. This parameter is available only for administrators.
   * 
   * @example
   * 137820528780****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of view. Valid values:
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * 
   * - 1: The view of all accounts in your enterprise.
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

