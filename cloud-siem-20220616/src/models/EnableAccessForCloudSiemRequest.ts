// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableAccessForCloudSiemRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically add alert logs from Security Center, Web Application Firewall (WAF), and Cloud Firewall. By default, alert logs are automatically added.
   * 
   * @example
   * 1
   */
  autoSubmit?: number;
  /**
   * @remarks
   * The region of the Data Management center for Threat Analysis. Select the region based on where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or Hong Kong (China).
   * 
   * - ap-southeast-1: Your assets are in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can use this parameter to switch to the perspective of the specified member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view.
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * 
   * - 1: The view of all member accounts.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      autoSubmit: 'AutoSubmit',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoSubmit: 'number',
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

