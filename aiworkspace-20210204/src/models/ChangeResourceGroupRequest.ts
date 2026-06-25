// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new resource group. For more information about how to obtain a resource group ID, see [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-df********534dy
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The resource ID. This ID is the same as the workspace ID. For more information about how to obtain a workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * @example
   * 12**56
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. You must set this parameter to workspace.
   * 
   * @example
   * workspace
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      resourceId: 'string',
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

