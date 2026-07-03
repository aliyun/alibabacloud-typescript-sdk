// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBindAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the cloud service provider. Valid values:
   * 
   * - qcloud: Tencent Cloud.
   * 
   * - aliyun: Alibaba Cloud.
   * 
   * - hcloud: Huawei Cloud.
   * 
   * This parameter is required.
   * 
   * @example
   * hcloud
   */
  cloudCode?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is deployed. Select the region of the data management center based on the region of your assets. Valid values:
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
   * The user ID of the member whose perspective the administrator wants to switch to.
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
   * - 1: The view of all accounts that are managed by the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      cloudCode: 'CloudCode',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

