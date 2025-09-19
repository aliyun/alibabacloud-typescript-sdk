// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRdDefaultSyncListRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the folders in the resource directory.
   * 
   * >  You can call the [GetRdTree](~~GetRdTree~~) operation to obtain the IDs of the folders. Separate multiple folder IDs with commas (,). If you do not specify a value for this parameter, the existing member list is cleared.
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

