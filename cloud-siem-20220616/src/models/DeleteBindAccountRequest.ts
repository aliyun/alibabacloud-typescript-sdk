// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBindAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * ABCXXXXXXXX
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
   * The binding ID. Call the [ListBindAccount](https://api.aliyun-inc.com/#/publishment/document/cloud-siem/863fdf54478f4cc5877e27c2a5fe9e44?tenantUuid=f382fccd88b94c5c8c864def6815b854\\&activeTabKey=api%7CListBindAccount) operation to obtain the binding ID.
   * 
   * @example
   * 10
   */
  bindId?: number;
  /**
   * @remarks
   * The code for the cloud service provider. Valid values:
   * 
   * - qcloud: Tencent Cloud
   * 
   * - aliyun: Alibaba Cloud
   * 
   * - hcloud: Huawei Cloud
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The region where the threat analysis data center is located. Select a region based on the location of your assets. Valid values:
   * 
   * - cn-hangzhou: Your assets are in mainland China or the China (Hong Kong) region.
   * 
   * - ap-southeast-1: Your assets are in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. An administrator can specify this parameter to perform the operation from the perspective of a member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * 
   * - 0: The view of the current Alibaba Cloud account.
   * 
   * - 1: The view of all accounts that are managed by your enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accountId: 'AccountId',
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

