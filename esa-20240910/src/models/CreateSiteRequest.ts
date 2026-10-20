// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteRequest extends $dara.Model {
  /**
   * @remarks
   * The access type of the site. Valid values:
   * 
   * - **NS**: hosted NS access
   * - **CNAME**: CNAME access
   * 
   * This parameter is required.
   * 
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @remarks
   * The acceleration region. Valid values:
   * - **domestic**: the Chinese mainland
   * - **global**: global
   * - **overseas**: global (excluding the Chinese mainland)
   * 
   * This parameter is required.
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The instance ID. You can call the [ListUserRatePlanInstances](https://help.aliyun.com/document_detail/2852398.html) operation to obtain the instance ID. You must specify at least one of the instance ID and the site ID. If both are specified, the instance ID takes precedence.
   * 
   * This parameter is required.
   * 
   * @example
   * dbaudit-cn-nwy349jdb03
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource group ID. If you do not specify this parameter, the system automatically uses the ID of the default resource group.
   * 
   * @example
   * rg-acfmw4znnok****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The UID of the owner of the site plan associated with the site. By default, you do not need to specify this parameter. You only need to specify this parameter when you use a site plan shared across accounts.
   * 
   * @example
   * 122********801267
   */
  resourceOwner?: number;
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
      resourceOwner: 'ResourceOwner',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      coverage: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
      resourceOwner: 'number',
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

