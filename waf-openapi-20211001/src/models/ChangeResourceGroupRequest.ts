// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new resource group. You can view the available resource groups in the Resource Management console.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aek2mcq***
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region in which the WAF instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou**: Chinese mainland.
   * *   **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the protected object that you want to manage.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyun.com-waf
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The resource type. Set the value to defenseresource.
   * 
   * This parameter is required.
   * 
   * @example
   * defenseresource
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

