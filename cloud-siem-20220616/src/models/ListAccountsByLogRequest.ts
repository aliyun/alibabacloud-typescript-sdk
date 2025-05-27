// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountsByLogRequest extends $dara.Model {
  /**
   * @remarks
   * The code that is used for multi-cloud environments.
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The codes of logs. The value is a JSON array.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cloud_siem_hcloud_waf_alert_log"]
   */
  logCodes?: string[];
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * qcloud_waf
   */
  prodCode?: string;
  /**
   * @remarks
   * The data management center of the threat analysis feature. Specify this parameter based on the region where your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions inside China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
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

