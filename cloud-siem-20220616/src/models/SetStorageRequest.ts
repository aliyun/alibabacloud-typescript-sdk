// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetStorageRequest extends $dara.Model {
  /**
   * @remarks
   * The log storage region.
   * 
   * If the Data Management center is in cn-hangzhou, the default value of Region is **cn-shanghai**. If the Data Management center is in **ap-southeast-1**, the default value of **Region** is **ap-southeast-1**.
   * 
   * The log storage region cannot be changed. To change the region, contact the Threat Analysis operations team.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The region of the Data Management center for Threat Analysis. Select the region for the Data Management center based on the region of your assets. Valid values:
   * 
   * - cn-hangzhou: Select this value if your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Select this value if your assets are in a region outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. An administrator can use this parameter to switch to the view of a specific member.
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
   * - 1: The view of all accounts in your enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The log storage duration in days. The default value is 180. The minimum value is 30 and the maximum value is 3000.
   * 
   * This parameter is required.
   * 
   * @example
   * 180
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

