// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFolderRequest extends $dara.Model {
  /**
   * @remarks
   * The folder ID. Either this parameter or FolderPath must be specified. You can call the [ListFolders](https://help.aliyun.com/document_detail/173955.html) operation to obtain the folder ID.
   * 
   * @example
   * 273****
   */
  folderId?: string;
  /**
   * @remarks
   * The folder path. Either this parameter or FolderId must be specified. You can call the [ListFolders](https://help.aliyun.com/document_detail/173955.html) operation to obtain the folder path.
   * 
   * @example
   * Business_process/my_first_business_process/MaxCompute/ods_layer
   */
  folderPath?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can obtain the workspace ID from the workspace configuration page in the DataWorks console. Either this parameter or ProjectIdentifier must be specified to determine which DataWorks workspace this API call operates on.
   * 
   * @example
   * 1000011
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can obtain the workspace name from the workspace configuration page in the DataWorks console. Either this parameter or ProjectId must be specified to determine which DataWorks workspace this API call operates on.
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

