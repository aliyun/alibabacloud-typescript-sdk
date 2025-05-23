// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFolderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2735c2c19d58
   */
  folderId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MySecondFolder
   */
  folderName?: string;
  /**
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      folderName: 'FolderName',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      folderName: 'string',
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

