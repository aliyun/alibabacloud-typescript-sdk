// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFolderRequest extends $dara.Model {
  /**
   * @remarks
   * The path of the folder.
   * 
   * This parameter is required.
   * 
   * @example
   * Business_process/System_Data/MaxCompute/import_layer
   */
  folderPath?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can obtain the workspace ID from the workspace configuration page in the DataWorks console. Either this parameter or **ProjectIdentifier** must be specified to determine which DataWorks workspace this API call operates on.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can obtain the workspace name from the workspace configuration page in the DataWorks console. Either this parameter or **ProjectId** must be specified to determine which DataWorks workspace this API call operates on.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      folderPath: 'FolderPath',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

