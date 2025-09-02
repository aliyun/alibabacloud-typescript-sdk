// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataServiceFolderRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the folder.
   * 
   * This parameter is required.
   * 
   * @example
   * Test folder
   */
  folderName?: string;
  /**
   * @remarks
   * The ID of the desired workflow to which the folder belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000abcd
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the desired parent folder of the folder. The ID of the root folder in a workflow is 0. The ID of the folder created by users in a workflow is greater than 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  parentId?: number;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10002
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      folderName: 'FolderName',
      groupId: 'GroupId',
      parentId: 'ParentId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderName: 'string',
      groupId: 'string',
      parentId: 'number',
      projectId: 'number',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

