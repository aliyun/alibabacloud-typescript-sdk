// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserSiemOrderStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The region of the data management center for threat analysis. Select the region of the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: Assets are in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Assets are in regions outside China.
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
   * 1234567890***
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * - 0: Current Alibaba Cloud account view.
   * - 1: View of all accounts in the enterprise.
   * 
   * @example
   * 0
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

