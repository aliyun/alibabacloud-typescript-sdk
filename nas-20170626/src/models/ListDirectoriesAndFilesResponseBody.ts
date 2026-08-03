// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDirectoriesAndFilesResponseBodyEntries extends $dara.Model {
  /**
   * @remarks
   * The query time.
   * 
   * The time follows the ISO 8601 standard and is returned in the format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * This parameter is returned and meaningful only when Type is set to File.
   * 
   * @example
   * 2021-02-01T10:08:08Z
   */
  atime?: string;
  /**
   * @remarks
   * The time when the metadata was modified.
   * 
   * The time follows the ISO 8601 standard and is returned in the format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * This parameter is returned and meaningful only when Type is set to File.
   * 
   * @example
   * 2021-02-11T10:08:10Z
   */
  ctime?: string;
  /**
   * @remarks
   * The FileId of the directory or file.
   * 
   * @example
   * 66
   */
  fileId?: string;
  /**
   * @remarks
   * Indicates whether the directory contains archive storage class files.
   * 
   * This parameter is returned and meaningful only when Type is set to Directory.
   * 
   * Valid values:
   * 
   * - true: The directory contains archive storage class files.
   * - false: The directory does not contain archive storage class files.
   * 
   * @example
   * true
   */
  hasArchiveFile?: string;
  /**
   * @remarks
   * Indicates whether the directory contains IA storage class files.
   * 
   * This parameter is returned and meaningful only when Type is set to Directory.
   * 
   * Valid values:
   * 
   * - true: The directory contains IA storage class files.
   * - false: The directory does not contain IA storage class files.
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
   * The time when the file was modified.
   * 
   * The time follows the ISO 8601 standard and is returned in the format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * This parameter is returned and meaningful only when Type is set to File.
   * 
   * @example
   * 2021-02-11T10:08:08Z
   */
  mtime?: string;
  /**
   * @remarks
   * The file name or directory name.
   * 
   * @example
   * file.txt
   */
  name?: string;
  /**
   * @remarks
   * The total duration for which the file has been stored as an archive file. Unit: seconds.
   * 
   * @example
   * 3600
   */
  offlineDuration?: number;
  /**
   * @remarks
   * The total duration for which the file has remained unchanged since it was stored as an archive file. Unit: seconds.
   * 
   * @example
   * 3600
   */
  offlineUnchangedDuration?: number;
  /**
   * @remarks
   * The portable account ID.
   * This parameter is meaningful only when ProtocolType is set to SMB and access control is enabled.
   * 
   * @example
   * 37862c****
   */
  owner?: string;
  /**
   * @remarks
   * The time when the most recent data retrieval task was run.
   * 
   * The time follows the ISO 8601 standard and is returned in the format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * This parameter is returned and meaningful only when Type is set to File.
   * 
   * @example
   * 2021-02-11T10:08:08Z
   */
  retrieveTime?: string;
  /**
   * @remarks
   * The size of the file.
   * 
   * Unit: bytes.
   * 
   * This parameter is returned and meaningful only when Type is set to File.
   * 
   * @example
   * 1024
   */
  size?: number;
  /**
   * @remarks
   * The storage class type of the returned file.
   * 
   * This parameter is returned and meaningful only when Type is set to File.
   * 
   * Valid values:
   * - InfrequentAccess: IA storage class.
   * - Archive: Archive storage class.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  /**
   * @remarks
   * The type of the returned result.
   * 
   * Valid values:
   * 
   * - File: file.
   * - Directory: directory.
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
   * The collection of directory or file information.
   */
  entries?: ListDirectoriesAndFilesResponseBodyEntries[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the return results are truncated, you can use NextToken to initiate a new request to retrieve the content after the current truncation position.
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

