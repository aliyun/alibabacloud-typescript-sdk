// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFolderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * “abc” “1234”
   */
  folderName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "0" ：parent folder is root
   * "4b648f6d11344f258df876cbdc24dc1f" ： folderId
   */
  parentFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      folderName: 'folderName',
      parentFolderId: 'parentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderName: 'string',
      parentFolderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

