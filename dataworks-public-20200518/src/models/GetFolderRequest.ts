// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFolderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the folder. You must set either this parameter or FolderPath. You can call the [ListFolders](https://help.aliyun.com/document_detail/173955.html) operation to obtain the folder ID.
   * 
   * @example
   * 273****
   */
  folderId?: string;
  /**
   * @remarks
   * The path of the folder. You must set either this parameter or FolderId. You can call the [ListFolders](https://help.aliyun.com/document_detail/173955.html) operation to obtain the folder path.
   * 
   * @example
   * Business_process/my_first_business_process/MaxCompute/ods_layer
   */
  folderPath?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. Log on to the DataWorks console and go to the Workspace Management page to obtain the workspace ID. You must set either this parameter or ProjectIdentifier to specify the DataWorks workspace for the API call.
   * 
   * @example
   * 1000011
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. Log on to the DataWorks console and go to the Workspace Management page to obtain the workspace name. You must set either this parameter or ProjectId to specify the DataWorks workspace for the API call.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      folderPath: 'FolderPath',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      folderPath: 'string',
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

