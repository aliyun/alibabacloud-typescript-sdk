// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * ABCXXXXXXXX
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
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  accountName?: string;
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * - aliyun: Alibaba Cloud
   * - hcloud: Huawei Cloud
   * - qcloud: Tencent Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. You must select a region for the data management center based on the region where your assets reside. Valid values:
   * 
   * - cn-hangzhou: Your assets are deployed in the Chinese mainland or Hong Kong (China).
   * - ap-southeast-1: Your assets are deployed in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member to whose view the administrator switches.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view.
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * - 1: the view of all accounts that belong to the enterprise.
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

