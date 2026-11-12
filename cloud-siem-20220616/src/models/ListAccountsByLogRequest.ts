// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountsByLogRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the cloud provider.
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The list of log codes. This parameter is a repeatList array parameter that must be passed in dot-separated expanded form, for example, LogCodes.1=cloud_siem_hcloud_waf_alert_log. Passing a JSON array string directly is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * LogCodes.1=cloud_siem_hcloud_waf_alert_log
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
   * The region where the CTDR data management center is located. Select the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: the assets belong to the Chinese mainland or Hong Kong (China).
   * - ap-southeast-1: the assets belong to regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member to which the administrator switches the view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type.
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * - 1: the view of all accounts in the enterprise.
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

