// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataStorageRequest extends $dara.Model {
  /**
   * @remarks
   * The log storage region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  dataStorageRegionId?: string;
  /**
   * @remarks
   * The global switch for log delivery in Log Management. This parameter is not yet available. Valid values:
   * 
   * - enable: Enables global delivery.
   * 
   * - disable: Disables global delivery.
   * 
   * @example
   * enable
   */
  deliveryStatus?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the Data Management center for threat analysis is located. This region must be the same as the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: The assets are in the Chinese mainland.
   * 
   * - ap-southeast-1: The assets are in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can specify this parameter to switch to the perspective of the member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataStorageRegionId: 'DataStorageRegionId',
      deliveryStatus: 'DeliveryStatus',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataStorageRegionId: 'string',
      deliveryStatus: 'string',
      lang: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

