// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetStorageRequest extends $dara.Model {
  /**
   * @remarks
   * The log storage region. 
   * 
   * If the data management center is located in **cn-hangzhou**, the default value of **Region** is China (Shanghai) (cn-shanghai). If the data management center is located in **ap-southeast-1**, the default value of **Region** is Singapore (ap-southeast-1).
   * 
   * The log storage region cannot be modified. To modify the region, contact the Threat Analysis operations personnel.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The region of the data management center for Threat Analysis. Select the region based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Select this value if your assets are located in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Select this value if your assets are located outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose view the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * - 0: the view of the current Alibaba Cloud account
   * - 1: the view of all accounts in the enterprise
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The log retention period in days. Default value: 180. Valid values: 30 to 3000.
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

