// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFolderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the folder.
   * 
   * This parameter is required.
   * 
   * @example
   * fd-u8B321****
   */
  folderId?: string;
  /**
   * @remarks
   * The new name of the folder.
   * 
   * The name must be 1 to 24 characters in length and can contain letters, digits, underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * rdFolder
   */
  newFolderName?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      newFolderName: 'NewFolderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      newFolderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

