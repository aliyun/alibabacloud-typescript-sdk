// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteRequest extends $dara.Model {
  /**
   * @remarks
   * The access type for the site. Valid values:
   * 
   * - **NS**: NS-based access.
   * 
   * - **CNAME**: CNAME-based access.
   * 
   * This parameter is required.
   * 
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @remarks
   * The acceleration region. Valid values are:
   * 
   * - **domestic**: Chinese mainland only.
   * 
   * - **global**: Global.
   * 
   * - **overseas**: Global (excluding the Chinese mainland).
   * 
   * This parameter is required.
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The ID of the instance. You can obtain the instance ID by calling the [ListUserRatePlanInstances](https://help.aliyun.com/document_detail/2852398.html) operation. You must specify either the instance ID or the site ID. If you specify both, the instance ID takes precedence.
   * 
   * This parameter is required.
   * 
   * @example
   * dbaudit-cn-nwy349jdb03
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the resource group. If you do not specify this parameter, the system automatically uses the ID of the default resource group.
   * 
   * @example
   * rg-acfmw4znnok****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the site.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      coverage: 'Coverage',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      coverage: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
      siteName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

