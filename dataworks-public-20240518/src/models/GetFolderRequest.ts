// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFolderRequest extends $dara.Model {
  /**
   * @example
   * 273****
   */
  folderId?: string;
  /**
   * @example
   * Business_process/my_first_business_process/MaxCompute/ods_layer
   */
  folderPath?: string;
  /**
   * @example
   * 1000011
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

