// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImportLogTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The list of accounts for log ingestion. The value must be a JSON array. Valid values:
   * 
   * - AccountId: The ID of the account.
   * 
   * - Imported: Specifies whether to enable or disable log ingestion for the account. Valid values:
   * 
   *   - 0: Disable ingestion.
   * 
   *   - 1: Enable ingestion.
   * 
   * @example
   * [{"AccountId":"123123","Imported":1}]
   */
  accounts?: string;
  /**
   * @remarks
   * Specifies whether to automatically enable log ingestion for accounts that are configured with the specified log. Valid values:
   * 
   * - 1: Yes.
   * 
   * - 0: No.
   * 
   * @example
   * 1
   */
  autoImported?: number;
  /**
   * @remarks
   * The code of the cloud service provider.
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The list of logs to be ingested. The value must be a JSON array.
   * 
   * @example
   * ["cloud_siem_qcloud_cfw_alert_log"]
   */
  logCodes?: string;
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
   * The region where the data management center for Threat Analysis is located. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or Hong Kong (China).
   * 
   * - ap-southeast-1: Your assets are outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member that the administrator wants to access.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of view. Valid values:
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * 
   * - 1: The view of all accounts within the enterprise.
   * 
   * @example
   * 1
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

