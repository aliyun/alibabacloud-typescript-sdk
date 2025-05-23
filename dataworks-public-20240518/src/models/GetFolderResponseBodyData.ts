// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFolderResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2735****
   */
  folderId?: string;
  /**
   * @example
   * Business_process/my_first_business_process/MaxCompute/ods_layer
   */
  folderPath?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      folderPath: 'FolderPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      folderPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

