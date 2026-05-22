// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteRequest extends $dara.Model {
  /**
   * @remarks
   * The DNS setup. Valid values:
   * 
   * *   **NS**
   * *   **CNAME**
   * 
   * This parameter is required.
   * 
   * @example
   * NS
   */
  accessType?: string;
  /**
   * @remarks
   * The service location. Valid values:
   * 
   * *   **domestic**: the Chinese mainland
   * *   **global**: global
   * *   **overseas**: outside the Chinese mainland
   * 
   * This parameter is required.
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The instance ID, which can be obtained by calling the [ListUserRatePlanInstances](https://help.aliyun.com/document_detail/2852398.html) operation. Specify at least one of the instance ID and website ID. If you specify both of them, the instance ID is used.
   * 
   * This parameter is required.
   * 
   * @example
   * dbaudit-cn-nwy349jdb03
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the resource group. If you leave this parameter empty, the system uses the default resource group ID.
   * 
   * @example
   * rg-acfmw4znnok****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The website name.
   * 
   * This parameter is required.
   * 
   * @example
   * CreateSite
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

