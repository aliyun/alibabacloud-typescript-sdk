// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImportLogTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The accounts that you want to add. The value is a JSON array. Valid values:
   * 
   * *   AccountId: the IDs of the accounts.
   * 
   * *   Imported: specifies whether to add the accounts. Valid values:
   * 
   *     *   0: no
   *     *   1: yes
   * 
   * @example
   * [{"AccountId":"123123","Imported":1}]
   */
  accounts?: string;
  /**
   * @remarks
   * Specifies whether to automatically add the account for which the logging feature is configured. Valid values:
   * 
   * *   1: yes
   * *   0: no
   * 
   * @example
   * ["cloud_siem_qcloud_cfw_alert_log"]
   */
  autoImported?: number;
  /**
   * @remarks
   * The code that is used for multi-cloud environments. Valid values:
   * 
   * *   qcloud: Tencent Cloud
   * *   aliyun: Alibaba Cloud
   * *   hcloud: Huawei Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The logs that you want to collect. The value is a JSON array.
   * 
   * @example
   * ["cloud_siem_qcloud_cfw_alert_log"]
   */
  logCodes?: string;
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
   * 0
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      autoImported: 'AutoImported',
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
      accounts: 'string',
      autoImported: 'number',
      cloudCode: 'string',
      logCodes: 'string',
      prodCode: 'string',
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

