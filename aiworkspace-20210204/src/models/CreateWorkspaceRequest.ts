// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the workspace. The description cannot exceed 80 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 这是一个工作空间描述示例。
   */
  description?: string;
  /**
   * @remarks
   * We recommend that you name the workspace based on its business attribute to facilitate identification of its purpose. If you do not configure this parameter, the workspace name is used by default.
   * 
   * @example
   * demo工作空间
   */
  displayName?: string;
  /**
   * @remarks
   * The environments included in the workspace:
   * - The simple mode contains only the production environment (prod).
   * - The standard mode contains both the development environment (dev) and the production environment (prod).
   * 
   * This parameter is required.
   */
  envTypes?: string[];
  /**
   * @remarks
   * The resource group ID. For information about how to obtain the resource group ID, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmwp7rkyq****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the workspace. The format is as follows:
   * - The length is 3 to 23 characters and can contain letters, underscores (_), or digits.
   * - It must start with a letter (uppercase or lowercase).
   * - It must be unique within the current region.
   * 
   * This parameter is required.
   * 
   * @example
   * workspace_example
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      envTypes: 'EnvTypes',
      resourceGroupId: 'ResourceGroupId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.envTypes)) {
      $dara.Model.validateArray(this.envTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

