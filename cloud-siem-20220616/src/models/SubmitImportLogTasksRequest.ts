// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImportLogTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The list of accounts to be onboarded, in JSON array format. Valid values:
   * - AccountId: the ID of the account to be onboarded.
   * - Imported: specifies whether to onboard or disconnect the account. Valid values:
   *   - 0: Disconnect the account.
   *   - 1: Onboard the account.
   * 
   * @example
   * [{"AccountId":"123123","Imported":1}]
   */
  accounts?: string;
  /**
   * @remarks
   * Specifies whether to automatically onboard accounts that are configured with the log. Valid values:
   * - 1: Automatically onboard. 
   * - 0: Do not automatically onboard.
   * 
   * @example
   * 1
   */
  autoImported?: number;
  /**
   * @remarks
   * The multi-cloud code.
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The list of logs to be onboarded, in JSON array format.
   * 
   * @example
   * ["cloud_siem_qcloud_cfw_alert_log"]
   */
  logCodes?: string;
  /**
   * @remarks
   * The product code.
   * 
   * This parameter is required.
   * 
   * @example
   * qcloud_waf
   */
  prodCode?: string;
  /**
   * @remarks
   * The region of the data management center for Threat Analysis. You must select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: Current Alibaba Cloud account view.
   * - 1: View of all accounts in the enterprise.
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

