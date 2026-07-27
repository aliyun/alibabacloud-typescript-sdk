// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceManagerResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource. The value of this parameter depends on the value of the ResourceType parameter:
   * 
   * - If ResourceType is set to project, this parameter specifies the name of the workspace (ProjectIdentifier). You can call the [ListProjects](https://help.aliyun.com/document_detail/2780068.html) operation to obtain the workspace name.
   * 
   * - If ResourceType is set to tenantresourcegroup, this parameter specifies the identifier of the exclusive resource group (Identifier). You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/2780075.html) operation to obtain the identifier. This applies only to resource groups of type 7, 8, or 9.
   * 
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the destination resource group.
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
   * - project: a workspace. Select this value to change the resource group for a DataWorks edition.
   * 
   * - tenantresourcegroup: an exclusive resource group. Select this value to change the resource group for a DataWorks exclusive resource group.
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

