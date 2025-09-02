// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFolderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the folder. You must configure either this parameter or the FolderPath parameter. You can call the [ListFolders](https://help.aliyun.com/document_detail/173955.html) operation to query the ID.
   * 
   * @example
   * 273****
   */
  folderId?: string;
  /**
   * @remarks
   * The path of the folder. You must configure either this parameter or the FolderId parameter. You can call the [ListFolders](https://help.aliyun.com/document_detail/173955.html) operation to query the path.
   * 
   * @example
   * Business_process/my_first_business_process/MaxCompute/ods_layer
   */
  folderPath?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console and go to the Workspace page to query the ID. You must configure either this parameter or the ProjectIdentifier parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the DataWorks console and go to the Workspace Settings panel to obtain the name. You must specify either this parameter or ProjectId to determine the DataWorks workspace to which the operation is applied.
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

