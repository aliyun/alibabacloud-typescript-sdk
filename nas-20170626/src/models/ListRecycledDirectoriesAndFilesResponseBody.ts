// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecycledDirectoriesAndFilesResponseBodyEntries extends $dara.Model {
  /**
   * @remarks
   * The most recent access time. The time follows the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2019-10-30T10:08:08Z
   */
  ATime?: string;
  /**
   * @remarks
   * The most recent metadata modification time. The time follows the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2019-10-30T10:08:08Z
   */
  CTime?: string;
  /**
   * @remarks
   * The time when the file or directory was deleted. The time follows the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2021-05-30T10:08:08Z
   */
  deleteTime?: string;
  /**
   * @remarks
   * The FileId of the file or directory.
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
   * The most recent modification time. The time follows the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2019-10-30T10:08:08Z
   */
  MTime?: string;
  /**
   * @remarks
   * The name of the file or directory before deletion.
   * 
   * @example
   * test001
   */
  name?: string;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * If Type is set to Directory, the value 0 is returned.
   * 
   * @example
   * 1073741824
   */
  size?: number;
  /**
   * @remarks
   * The object type. Valid values:
   * 
   * - File: file
   * - Directory: folder
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
   * The pagination token for the next page.
   * 
   * If a single query does not return all files and directories, a non-empty NextToken is returned. You can specify the correct NextToken in subsequent queries to continue listing.
   * 
   * @example
   * None
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

