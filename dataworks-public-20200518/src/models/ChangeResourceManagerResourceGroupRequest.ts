// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceManagerResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource type.
   * 
   * *   If you set ResourceType to project, set this parameter to the value of ProjectIdentifier. You can call the [ListProjects](https://help.aliyun.com/document_detail/2780068.html) operation to obtain the value of ProjectIdentifier.
   * *   If you set ResourceType to tenantresourcegroup, set this parameter to the value of ResourceGroupType. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/2780075.html) operation to obtain the value of ResourceGroupType. Only the values 7, 8, and 9 are valid.
   * 
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   project: workspace. If you want to change the resource group that you specify when you activate DataWorks, set the value to project.
   * *   tenantresourcegroup: exclusive resource group. If you want to change the resource group that you specify when you purchase a DataWorks exclusive resource group, set the value to tenantresourcegroup.
   * 
   * This parameter is required.
   * 
   * @example
   * project
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

