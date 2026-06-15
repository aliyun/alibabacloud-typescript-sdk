// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDirectoriesAndFilesResponseBodyEntries extends $dara.Model {
  /**
   * @remarks
   * The last access time (atime) of the file.
   * 
   * The time is in the ISO 8601 format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * This parameter is returned only when `Type` is `File`.
   * 
   * @example
   * 2021-02-01T10:08:08Z
   */
  atime?: string;
  /**
   * @remarks
   * The metadata change time (ctime) of the file.
   * 
   * The time is in the ISO 8601 format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * This parameter is returned only when `Type` is `File`.
   * 
   * @example
   * 2021-02-11T10:08:10Z
   */
  ctime?: string;
  /**
   * @remarks
   * The ID of the file or directory.
   * 
   * @example
   * 66
   */
  fileId?: string;
  /**
   * @remarks
   * Specifies whether the directory contains any archive files.
   * 
   * This parameter is returned only when `Type` is `Directory`.
   * 
   * Valid values:
   * 
   * - `true`: Yes
   * 
   * - `false`: No
   * 
   * @example
   * true
   */
  hasArchiveFile?: string;
  /**
   * @remarks
   * Specifies whether the directory contains any infrequent access files.
   * 
   * This parameter is returned only when `Type` is `Directory`.
   * 
   * Valid values:
   * 
   * - `true`: Yes
   * 
   * - `false`: No
   * 
   * @example
   * true
   */
  hasInfrequentAccessFile?: boolean;
  /**
   * @remarks
   * The inode of the file or directory.
   * 
   * @example
   * 66
   */
  inode?: string;
  /**
   * @remarks
   * The last modification time (mtime) of the file.
   * 
   * The time is in the ISO 8601 format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * This parameter is returned only when `Type` is `File`.
   * 
   * @example
   * 2021-02-11T10:08:08Z
   */
  mtime?: string;
  /**
   * @remarks
   * The name of the file or directory.
   * 
   * @example
   * file.txt
   */
  name?: string;
  offlineDuration?: number;
  offlineUnchangedDuration?: number;
  /**
   * @remarks
   * The owner of the file or directory. This parameter is returned only when `ProtocolType` is `SMB` and access control is enabled.
   * 
   * @example
   * 37862c****
   */
  owner?: string;
  /**
   * @remarks
   * The last data retrieval time.
   * 
   * The time is in the ISO 8601 format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * This parameter is returned only when `Type` is `File`.
   * 
   * @example
   * 2021-02-11T10:08:08Z
   */
  retrieveTime?: string;
  /**
   * @remarks
   * The size of the file, in bytes.
   * 
   * This parameter is returned only when `Type` is `File`.
   * 
   * This value is returned and is meaningful only when Type is File.
   * 
   * @example
   * 1024
   */
  size?: number;
  /**
   * @remarks
   * The storage class of the file.
   * 
   * This parameter is returned only when `Type` is `File`.
   * 
   * Valid values:
   * 
   * - `InfrequentAccess`
   * 
   * - `Archive`
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The type of the entry.
   * 
   * Valid values:
   * 
   * - `File`: a file
   * 
   * - `Directory`: a directory
   * 
   * @example
   * File
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      atime: 'Atime',
      ctime: 'Ctime',
      fileId: 'FileId',
      hasArchiveFile: 'HasArchiveFile',
      hasInfrequentAccessFile: 'HasInfrequentAccessFile',
      inode: 'Inode',
      mtime: 'Mtime',
      name: 'Name',
      offlineDuration: 'OfflineDuration',
      offlineUnchangedDuration: 'OfflineUnchangedDuration',
      owner: 'Owner',
      retrieveTime: 'RetrieveTime',
      size: 'Size',
      storageType: 'StorageType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      atime: 'string',
      ctime: 'string',
      fileId: 'string',
      hasArchiveFile: 'string',
      hasInfrequentAccessFile: 'boolean',
      inode: 'string',
      mtime: 'string',
      name: 'string',
      offlineDuration: 'number',
      offlineUnchangedDuration: 'number',
      owner: 'string',
      retrieveTime: 'string',
      size: 'number',
      storageType: 'string',
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

export class ListDirectoriesAndFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of directory and file entries.
   */
  entries?: ListDirectoriesAndFilesResponseBodyEntries[];
  /**
   * @remarks
   * The pagination token. If the response is truncated, include this token in the next request to retrieve the next page of results.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF518948****
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
      entries: { 'type': 'array', 'itemType': ListDirectoriesAndFilesResponseBodyEntries },
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

