// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountsByLogRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the multicloud environment.
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The list of log codes. The value must be a JSON array.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cloud_siem_hcloud_waf_alert_log"]
   */
  logCodes?: string[];
  /**
   * @remarks
   * The code of the product.
   * 
   * This parameter is required.
   * 
   * @example
   * qcloud_waf
   */
  prodCode?: string;
  /**
   * @remarks
   * The region where the Data Management center of Threat Analysis is located. Select the region based on the region where your assets are located. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or China (Hong Kong).
   * 
   * - ap-southeast-1: Your assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. This parameter allows an administrator to switch to the perspective of a member account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
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
      cloudCode: 'CloudCode',
      logCodes: 'LogCodes',
      prodCode: 'ProdCode',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudCode: 'string',
      logCodes: { 'type': 'array', 'itemType': 'string' },
      prodCode: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logCodes)) {
      $dara.Model.validateArray(this.logCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

