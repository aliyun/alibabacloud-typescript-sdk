// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBindAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the cloud account.
   * 
   * @example
   * ABCXXXXXXXXX
   */
  accessId?: string;
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the multi-cloud account.
   * 
   * @example
   * sas_account_xxx
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the binding record. This is the BindId returned by the ListBindAccount operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  bindId?: number;
  /**
   * @remarks
   * The code of the multi-cloud provider. Valid values:
   * 
   * - **hcloud**: Huawei Cloud.
   * - **qcloud**: Tencent Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The region where the threat detection and response (CTDR) data management center resides. Select the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: The assets belong to the Chinese mainland or Hong Kong (China).
   * - ap-southeast-1: The assets belong to regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member account to which the administrator switches the view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * - 1: The view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accountId: 'AccountId',
      accountName: 'AccountName',
      bindId: 'BindId',
      cloudCode: 'CloudCode',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accountId: 'string',
      accountName: 'string',
      bindId: 'number',
      cloudCode: 'string',
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

