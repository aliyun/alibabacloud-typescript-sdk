// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBindAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the Alibaba Cloud account.
   * 
   * @example
   * ABCXXXXXXXXX
   */
  accessId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123xxxxxxx
   */
  accountId?: string;
  /**
   * @remarks
   * The name of the multicloud account.
   * 
   * @example
   * sas_account_xxx
   */
  accountName?: string;
  /**
   * @remarks
   * The ID of the binding record. This is the BindId value returned by the ListBindAccount operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  bindId?: number;
  /**
   * @remarks
   * The code of the multicloud service.
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The region where the Data Management center for threat analysis is located. Select a region based on the location of your assets. Valid values:
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
   * The user ID of the member. An administrator can specify this parameter to switch to the member\\"s view.
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

