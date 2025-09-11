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

export class ListRecycledDirectoriesAndFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about files or directories in the recycle bin.
   */
  entries?: ListRecycledDirectoriesAndFilesResponseBodyEntries[];
  /**
   * @remarks
   * A pagination token.
   * 
   * If all the files and directories are incompletely returned in a query, the return value of the NextToken parameter is not empty. In this case, you can specify a valid value for the NextToken parameter to continue the query.
   * 
   * @example
   * CKuO8QMSIjE2OTc3NzI0NjI5MTcyMTYyNDVfMzEzNTUyMF81MjEzODY=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entries: 'Entries',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entries: { 'type': 'array', 'itemType': ListRecycledDirectoriesAndFilesResponseBodyEntries },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entries)) {
      $dara.Model.validateArray(this.entries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

