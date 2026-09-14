// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserSiemOrderStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The region of the data management center for threat detection and response. Select the data management center based on the region where your assets reside. Valid values:
   * - cn-hangzhou: assets in the Chinese mainland or Hong Kong (China).
   * - ap-southeast-1: assets in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that the administrator uses to switch to another member\\"s perspective.
   * 
   * @example
   * 1234567890***
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * - 0: the current Alibaba Cloud account view.
   * - 1: the view of all accounts in the enterprise.
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

