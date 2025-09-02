// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceFolderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the folder.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  folderId?: number;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 10002
   */
  projectId?: number;
  /**
   * @remarks
   * The tenant ID. This parameter is deprecated. To obtain the tenant ID, perform the following steps: Log on to the [DataWorks console](https://workbench.data.aliyun.com/console). Find your workspace and go to the DataStudio page. On the DataStudio page, click the logon username in the upper-right corner and click User Info in the Menu section.
   * 
   * @example
   * 10003
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      projectId: 'ProjectId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'number',
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

