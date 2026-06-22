// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRdDefaultSyncListRequest extends $dara.Model {
  /**
   * @remarks
   * The list of folder IDs in the resource directory.
   * 
   * > You can call [GetRdTree](~~GetRdTree~~) to obtain folder IDs. Separate multiple folder IDs with commas (,). If you do not specify this parameter, the existing configuration list is cleared.
   * 
   * @example
   * fd-BwoXuf****,fd-CFamY7****
   */
  folderIds?: string;
  static names(): { [key: string]: string } {
    return {
      folderIds: 'FolderIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

