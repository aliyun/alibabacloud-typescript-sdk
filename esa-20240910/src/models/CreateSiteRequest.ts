// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteRequest extends $dara.Model {
  /**
   * @remarks
   * The access type of the site. Valid values:
   * 
   * - **NS**: access by using managed NS.
   * - **CNAME**: access by configuring a CNAME record.
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
   * - **domestic**: the Chinese mainland only.
   * - **global**: global.
   * - **overseas**: global (excluding the Chinese mainland).
   * 
   * This parameter is required.
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The instance ID. You can obtain the instance ID by calling the [ListUserRatePlanInstances](https://help.aliyun.com/document_detail/2852398.html) operation. You must specify at least one of the instance ID and site ID. If both are specified, the instance ID takes precedence.
   * 
   * This parameter is required.
   * 
   * @example
   * dbaudit-cn-nwy349jdb03
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource group ID. If you do not specify this parameter, the system automatically uses the default resource group ID.
   * 
   * @example
   * rg-acfmw4znnok****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The site name.
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

