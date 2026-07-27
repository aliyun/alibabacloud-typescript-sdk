// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFolderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the folder. For more information about how to obtain the folder ID, see [ListFolders](https://help.aliyun.com/document_detail/173955.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 2eb6f9****
   */
  folderId?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. To obtain the workspace ID, log on to the DataWorks console and go to the Workspace Management page. You must set this parameter or ProjectIdentifier to specify the DataWorks workspace for the API call.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. To obtain the workspace name, log on to the DataWorks console and go to the Workspace Management page. You must set this parameter or ProjectId to specify the DataWorks workspace for the API call.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

