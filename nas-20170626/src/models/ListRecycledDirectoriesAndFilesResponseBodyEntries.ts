// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecycledDirectoriesAndFilesResponseBodyEntries extends $dara.Model {
  /**
   * @remarks
   * The time when the file or directory was last accessed.
   * 
   * @example
   * 2019-10-30T10:08:08Z
   */
  ATime?: string;
  /**
   * @remarks
   * The time when the metadata was last modified.
   * 
   * @example
   * 2019-10-30T10:08:08Z
   */
  CTime?: string;
  /**
   * @remarks
   * The time when the file or directory was deleted.
   * 
   * @example
   * 2021-05-30T10:08:08Z
   */
  deleteTime?: string;
  /**
   * @remarks
   * The IDs of the files or directories.
   * 
   * @example
   * 04***08
   */
  fileId?: string;
  /**
   * @remarks
   * The inode of the file or directory.
   * 
   * @example
   * 04***08
   */
  inode?: string;
  /**
   * @remarks
   * The time when the file or directory was last modified.
   * 
   * @example
   * 2019-10-30T10:08:08Z
   */
  MTime?: string;
  /**
   * @remarks
   * The name of the file or directory before it was deleted.
   * 
   * @example
   * test001
   */
  name?: string;
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * The value 0 is returned for this parameter if Directory is returned for the Type parameter.
   * 
   * @example
   * 1073741824
   */
  size?: number;
  /**
   * @remarks
   * The type of the returned object. Valid values:
   * 
   * *   File
   * *   Directory
   * 
   * @example
   * File
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ATime: 'ATime',
      CTime: 'CTime',
      deleteTime: 'DeleteTime',
      fileId: 'FileId',
      inode: 'Inode',
      MTime: 'MTime',
      name: 'Name',
      size: 'Size',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ATime: 'string',
      CTime: 'string',
      deleteTime: 'string',
      fileId: 'string',
      inode: 'string',
      MTime: 'string',
      name: 'string',
      size: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

